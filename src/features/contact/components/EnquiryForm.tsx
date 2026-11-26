"use client";

import { useId, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { AlertCircle, Check, ChevronDown } from "lucide-react";
import { getContact } from "@/constants/site";
import { useI18n } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/cn";
import { Button, ChatLinks } from "@/components/ui";
import {
  getEnquiryOptionGroups,
  GENERAL_ENQUIRY,
  REQUIRED_FIELDS,
  validateEnquiry,
  type EnquiryErrors,
  type EnquiryValues,
} from "../lib/enquiry";

interface EnquiryFormProps {
  /** Pre-selected topic (service slug or vehicle model slug). */
  defaultInterest?: string;
  /** Render for a dark background. */
  inverse?: boolean;
}

type Status = "idle" | "sending" | "sent" | "failed";

const EMPTY_VALUES: Omit<EnquiryValues, "interest"> = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

/** Underline-style enquiry form. Validates in the browser, then posts to `/api/enquiry`. */
export function EnquiryForm({ defaultInterest = GENERAL_ENQUIRY, inverse }: EnquiryFormProps) {
  const { locale, t } = useI18n();
  const contact = getContact(locale);
  const formId = useId();
  const [values, setValues] = useState<EnquiryValues>({ ...EMPTY_VALUES, interest: defaultInterest });
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name as keyof EnquiryValues]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const nextErrors = validateEnquiry(values, locale);
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      document.getElementById(`${formId}-${firstInvalid}`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const honeypot = new FormData(event.currentTarget).get("company");
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, locale, company: honeypot }),
      });
      if (!response.ok) throw new Error(String(response.status));
      setStatus("sent");
      setValues({ ...EMPTY_VALUES, interest: defaultInterest });
    } catch {
      setStatus("failed");
    }
  };

  const fieldId = (name: keyof EnquiryValues) => `${formId}-${name}`;
  const errorId = (name: keyof EnquiryValues) => `${formId}-${name}-error`;

  const fieldProps = (name: keyof EnquiryValues) => ({
    id: fieldId(name),
    name,
    value: values[name],
    onChange: handleChange,
    required: REQUIRED_FIELDS.includes(name) || undefined,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? errorId(name) : undefined,
    className: cn(
      "w-full appearance-none rounded-none border-0 border-b bg-transparent px-0 py-3 text-lg outline-none transition-colors duration-500",
      inverse
        ? "border-line-inverse text-paper placeholder:text-silver/50 focus:border-accent"
        : "border-ink/25 text-ink placeholder:text-steel/60 focus:border-accent",
      errors[name] && "border-error",
    ),
  });

  const fieldBase = { inverse, errors, fieldId, errorId };
  const muted = inverse ? "text-silver" : "text-steel";

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-x-8 gap-y-10 md:grid-cols-2">
      <p className={cn("text-sm md:col-span-2", muted)}>{t.form.requiredNote}</p>

      <Field {...fieldBase} name="name" label={t.form.name} required className="md:col-span-2">
        <input type="text" autoComplete="name" maxLength={120} {...fieldProps("name")} />
      </Field>
      <Field {...fieldBase} name="phone" label={t.form.phone} required>
        <input type="tel" autoComplete="tel" inputMode="tel" maxLength={30} {...fieldProps("phone")} />
      </Field>
      <Field {...fieldBase} name="email" label={t.form.email} hint={t.form.optional}>
        <input type="email" autoComplete="email" maxLength={160} {...fieldProps("email")} />
      </Field>
      <Field {...fieldBase} name="interest" label={t.form.topic} className="md:col-span-2">
        <div className="relative">
          <select {...fieldProps("interest")}>
            {getEnquiryOptionGroups(locale).map((group) =>
              group.label ? (
                <optgroup key={group.label} label={group.label} className="text-ink">
                  {group.options.map((option) => (
                    <option key={option.value} value={option.value} className="text-ink">
                      {option.label}
                    </option>
                  ))}
                </optgroup>
              ) : (
                group.options.map((option) => (
                  <option key={option.value} value={option.value} className="text-ink">
                    {option.label}
                  </option>
                ))
              ),
            )}
          </select>
          <ChevronDown
            aria-hidden
            className="pointer-events-none absolute top-1/2 right-0 size-4 -translate-y-1/2 text-accent"
          />
        </div>
      </Field>
      <Field {...fieldBase} name="message" label={t.form.message} required className="md:col-span-2">
        <textarea rows={3} maxLength={3000} placeholder={t.form.placeholder} {...fieldProps("message")} />
      </Field>

      {/* Spam trap: hidden from people and assistive technology, filled only by bots. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${formId}-company`}>Company</label>
        <input id={`${formId}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-6 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <p className={cn("max-w-[26rem] text-sm", muted)}>{t.form.privacy}</p>
        <Button type="submit" variant={inverse ? "primary" : "dark"} disabled={status === "sending"}>
          {status === "sending" ? t.form.sending : t.form.submit}
        </Button>
      </div>

      <div role="status" aria-live="polite" className="empty:hidden md:col-span-2">
        {status === "sent" && (
          <p className="flex items-start gap-3">
            <Check aria-hidden className="mt-1 size-4 shrink-0 text-accent" />
            <span>{t.form.success}</span>
          </p>
        )}
        {status === "failed" && (
          <div className="space-y-4">
            <p className="flex items-start gap-3">
              <AlertCircle aria-hidden className="mt-1 size-4 shrink-0 text-error" />
              <span>
                {t.form.failure}{" "}
                <a href={contact.phoneHref} className="text-link whitespace-nowrap">
                  {contact.phone}
                </a>
              </span>
            </p>
            <ChatLinks inverse={inverse} />
          </div>
        )}
      </div>
    </form>
  );
}

interface FieldProps {
  name: keyof EnquiryValues;
  label: string;
  required?: boolean;
  /** Small note after the label, e.g. "optional". */
  hint?: string;
  inverse?: boolean;
  errors: EnquiryErrors;
  fieldId: (name: keyof EnquiryValues) => string;
  errorId: (name: keyof EnquiryValues) => string;
  className?: string;
  children: ReactNode;
}

function Field({ name, label, required, hint, inverse, errors, fieldId, errorId, className, children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={fieldId(name)} className={cn("type-eyebrow block", inverse ? "text-silver" : "text-steel")}>
        {label}
        {required && (
          <span aria-hidden className="ml-1 text-accent">
            *
          </span>
        )}
        {hint && <span className="ml-2 normal-case opacity-70">({hint})</span>}
      </label>
      {children}
      {errors[name] && (
        <p id={errorId(name)} className="mt-2 text-sm font-medium text-error">
          {errors[name]}
        </p>
      )}
    </div>
  );
}
