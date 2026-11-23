import { CONTACT, SITE } from "@/constants/site";
import { getServices } from "@/features/services/data/services";
import { getVehicleCategories } from "@/features/vehicles/data/vehicle-categories";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { EnquiryOption } from "@/types";

export const GENERAL_ENQUIRY = "general";

/** Topic options in `locale`. Values (slugs) are the same in every language. */
export function getEnquiryOptions(locale: Locale): EnquiryOption[] {
  const { form } = getDictionary(locale);
  return [
    { value: GENERAL_ENQUIRY, label: form.generalEnquiry },
    ...getServices(locale).map((service) => ({ value: service.slug, label: service.title })),
    ...getVehicleCategories(locale).map((category) => ({
      value: category.slug,
      label: `${form.vehiclesPrefix} — ${category.name}`,
    })),
  ];
}

export function isEnquiryOption(value: string | null | undefined): value is string {
  return !!value && getEnquiryOptions("en").some((option) => option.value === value);
}

export interface EnquiryValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

export type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[\d\s()-]{7,20}$/;

export function validateEnquiry(values: EnquiryValues, locale: Locale): EnquiryErrors {
  const messages = getDictionary(locale).form.errors;
  const errors: EnquiryErrors = {};

  if (!values.firstName.trim()) errors.firstName = messages.firstName;
  if (!values.lastName.trim()) errors.lastName = messages.lastName;
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = messages.email;
  if (!PHONE_PATTERN.test(values.phone.trim())) errors.phone = messages.phone;
  if (values.message.trim().length < 10) errors.message = messages.message;

  return errors;
}

/**
 * Builds a `mailto:` link containing the enquiry.
 * No backend/email integration has been specified, so the form hands the
 * message to the visitor's email app. Replace with an API route or email
 * service when one is chosen (README → "Enquiry form").
 * The email is always composed in English so the team's inbox stays
 * consistent, whichever language the visitor used.
 */
export function buildEnquiryMailto(values: EnquiryValues): string {
  const options = getEnquiryOptions("en");
  const topic = options.find((option) => option.value === values.interest)?.label ?? options[0].label;
  const name = `${values.firstName.trim()} ${values.lastName.trim()}`;

  const subject = `${SITE.name} enquiry — ${topic}`;
  const body = [
    `Name: ${name}`,
    `Email: ${values.email.trim()}`,
    `Phone: ${values.phone.trim()}`,
    `Topic: ${topic}`,
    "",
    values.message.trim(),
  ].join("\n");

  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
