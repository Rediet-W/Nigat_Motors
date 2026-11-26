import { SITE } from "@/constants/site";
import { getServices } from "@/features/services/data/services";
import { getVehicles, vehicleName } from "@/features/vehicles/data/vehicles";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { EnquiryOption } from "@/types";

export const GENERAL_ENQUIRY = "general";

export interface EnquiryOptionGroup {
  /** `null` for the ungrouped "General enquiry" option. */
  label: string | null;
  options: EnquiryOption[];
}

/**
 * Topic options in `locale`, grouped: general, services, vehicle models.
 * Values (slugs) are the same in every language. Electric & hybrid appears
 * once, as the service; vehicles are listed by model.
 */
export function getEnquiryOptionGroups(locale: Locale): EnquiryOptionGroup[] {
  const { form } = getDictionary(locale);
  return [
    { label: null, options: [{ value: GENERAL_ENQUIRY, label: form.generalEnquiry }] },
    {
      label: form.servicesGroup,
      options: getServices(locale).map((service) => ({ value: service.slug, label: service.title })),
    },
    {
      label: form.vehiclesGroup,
      options: getVehicles().map((vehicle) => ({ value: vehicle.slug, label: vehicleName(vehicle) })),
    },
  ];
}

export function getEnquiryOptions(locale: Locale): EnquiryOption[] {
  return getEnquiryOptionGroups(locale).flatMap((group) => group.options);
}

export function isEnquiryOption(value: string | null | undefined): value is string {
  return !!value && getEnquiryOptions("en").some((option) => option.value === value);
}

export interface EnquiryValues {
  name: string;
  phone: string;
  /** Optional: many visitors reply by phone, Telegram or WhatsApp. */
  email: string;
  interest: string;
  message: string;
}

export type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>;

/** Required fields, marked with * in the form. */
export const REQUIRED_FIELDS: (keyof EnquiryValues)[] = ["name", "phone", "message"];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[\d\s()-]{7,20}$/;
const MAX_LENGTH = { name: 120, phone: 30, email: 160, message: 3000 } as const;

/** Validation shared by the browser and the server. */
export function validateEnquiry(values: EnquiryValues, locale: Locale): EnquiryErrors {
  const messages = getDictionary(locale).form.errors;
  const errors: EnquiryErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (!name || name.length > MAX_LENGTH.name) errors.name = messages.name;
  if (!PHONE_PATTERN.test(values.phone.trim())) errors.phone = messages.phone;
  if (email && (!EMAIL_PATTERN.test(email) || email.length > MAX_LENGTH.email)) errors.email = messages.email;
  if (message.length < 10 || message.length > MAX_LENGTH.message) errors.message = messages.message;

  return errors;
}

/**
 * Plain-text enquiry for the team's inbox / Telegram group. Always composed
 * in English so it reads the same whichever language the visitor used.
 */
export function formatEnquiry(values: EnquiryValues, locale: Locale): { subject: string; text: string } {
  const topic =
    getEnquiryOptions("en").find((option) => option.value === values.interest)?.label ??
    getDictionary("en").form.generalEnquiry;

  return {
    subject: `${SITE.name} enquiry — ${topic}`,
    text: [
      `New website enquiry (${SITE.name})`,
      `Topic: ${topic}`,
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Email: ${values.email.trim() || "—"}`,
      `Language: ${locale === "am" ? "Amharic" : "English"}`,
      "",
      values.message.trim(),
    ].join("\n"),
  };
}
