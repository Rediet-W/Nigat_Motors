import { isLocale, type Locale } from "@/i18n/config";
import {
  formatEnquiry,
  GENERAL_ENQUIRY,
  isEnquiryOption,
  validateEnquiry,
  type EnquiryValues,
} from "@/features/contact/lib/enquiry";

/**
 * Receives the website enquiry form and forwards it to every configured
 * channel. Set at least one in the hosting environment (Vercel → Settings →
 * Environment Variables):
 *
 *   Telegram group  TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID
 *   Email (Resend)  RESEND_API_KEY + ENQUIRY_TO_EMAIL (+ optional ENQUIRY_FROM_EMAIL)
 *   Form service    ENQUIRY_WEBHOOK_URL (Formspree, Google Apps Script, CRM…; receives JSON)
 *
 * With none configured the endpoint answers 503, and the form asks the
 * visitor to call or use Telegram / WhatsApp instead, so no enquiry is
 * silently lost.
 */

type Delivery = (subject: string, text: string, values: EnquiryValues) => Promise<void>;

function configuredDeliveries(): Delivery[] {
  const deliveries: Delivery[] = [];
  const env = process.env;

  if (env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID) {
    deliveries.push(async (_subject, text) => {
      const response = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text }),
      });
      if (!response.ok) throw new Error(`Telegram ${response.status}`);
    });
  }

  if (env.RESEND_API_KEY && env.ENQUIRY_TO_EMAIL) {
    deliveries.push(async (subject, text, values) => {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${env.RESEND_API_KEY}` },
        body: JSON.stringify({
          from: env.ENQUIRY_FROM_EMAIL || "Website enquiry <onboarding@resend.dev>",
          to: env.ENQUIRY_TO_EMAIL!.split(",").map((address) => address.trim()),
          reply_to: values.email.trim() || undefined,
          subject,
          text,
        }),
      });
      if (!response.ok) throw new Error(`Resend ${response.status}`);
    });
  }

  if (env.ENQUIRY_WEBHOOK_URL) {
    deliveries.push(async (subject, text, values) => {
      const response = await fetch(env.ENQUIRY_WEBHOOK_URL!, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, subject, message: values.message, summary: text }),
      });
      if (!response.ok) throw new Error(`Webhook ${response.status}`);
    });
  }

  return deliveries;
}

function readString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (readString(body.company)) return Response.json({ ok: true });

  const locale: Locale = isLocale(readString(body.locale)) ? (body.locale as Locale) : "en";
  const interest = readString(body.interest);
  const values: EnquiryValues = {
    name: readString(body.name),
    phone: readString(body.phone),
    email: readString(body.email),
    interest: isEnquiryOption(interest) ? interest : GENERAL_ENQUIRY,
    message: readString(body.message),
  };

  const errors = validateEnquiry(values, locale);
  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, error: "invalid", errors }, { status: 422 });
  }

  const deliveries = configuredDeliveries();
  if (deliveries.length === 0) {
    console.error("[enquiry] No delivery channel configured; see src/app/api/enquiry/route.ts");
    return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const { subject, text } = formatEnquiry(values, locale);
  const results = await Promise.allSettled(deliveries.map((deliver) => deliver(subject, text, values)));
  results.forEach((result) => {
    if (result.status === "rejected") console.error("[enquiry] Delivery failed:", result.reason);
  });

  if (!results.some((result) => result.status === "fulfilled")) {
    return Response.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
