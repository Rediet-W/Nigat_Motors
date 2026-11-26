import type { Locale } from "@/i18n/config";

/**
 * NF Car Importer — company information.
 *
 * `SITE` / `CONTACT` are the English (en) values; `SITE_AM` / `CONTACT_AM`
 * hold the matching Amharic (am) values.
 *
 * Values marked CONFIRM are sensible defaults awaiting confirmation from
 * Nigat (see the content request). Optional values left `null` are hidden
 * on the site until they are filled in.
 */

/** Live domain. Used for canonical, Open Graph, sitemap and robots URLs. */
const PRODUCTION_URL = "https://nigat-motors.vercel.app";

export const SITE = {
  name: "NF Car Importer",
  shortName: "NF",
  /** Official registered organization name. */
  legalName: "Nigat Fanawi Trading PLC",
  industry: "Automotive",
  established: 2018,
  description:
    "NF Car Importer, an automotive sub-brand of Nigat Fanawi Trading PLC — vehicle importing and sales, electric vehicles, automotive accessories and spare parts in Addis Ababa, Ethiopia. Explore our vehicles and services, or get in touch with our team.",
  /**
   * `NEXT_PUBLIC_SITE_URL` overrides the live domain (e.g. for a custom
   * domain). Never falls back to localhost, so search engines always see
   * the real address.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_URL,
} as const;

/** Amharic (am) version of `SITE`. */
export const SITE_AM = {
  name: "ኤንኤፍ የመኪና አስመጪ",
  shortName: "ንጋት",
  legalName: "ንጋት ፋናዊ ትሬዲንግ ኃ.የተ.የግ.ማ.",
  industry: "አውቶሞቲቭ",
  established: 2018,
  description:
    "ኤንኤፍ የመኪና አስመጪ፣ የንጋት ፋናዊ ትሬዲንግ ኃ.የተ.የግ.ማ. የአውቶሞቲቭ ንዑስ ብራንድ — የተሽከርካሪ ማስመጣት እና ሽያጭ፣ የኤሌክትሪክ ተሽከርካሪዎች፣ የመኪና ተጨማሪ ዕቃዎች እና መለዋወጫዎች በአዲስ አበባ፣ ኢትዮጵያ። ተሽከርካሪዎቻችንን እና አገልግሎቶቻችንን ይመልከቱ ወይም ቡድናችንን ያግኙ።",
  url: SITE.url,
} as const;

/** Main phone number in international form, digits only (used for WhatsApp / Telegram links). */
const MAIN_PHONE_INTL = "251995888882";

export interface PhoneLine {
  label: string;
  number: string;
  href: string;
}

export const CONTACT = {
  phone: "0995888882",
  /** `tel:` form of the phone number above. */
  phoneHref: "tel:+251995888882",
  altPhone: "0995888883",
  /** `tel:` form of the alternative phone number above. */
  altPhoneHref: "tel:+251995888883",
  /** CONFIRM: which line is Sales and which is After-sales. */
  phones: [
    { label: "Sales", number: "0995888882", href: "tel:+251995888882" },
    { label: "After-sales", number: "0995888883", href: "tel:+251995888883" },
  ] as PhoneLine[],
  /** CONFIRM: replace with a company-domain address when one exists. */
  email: "nigatfanawi33@gmail.com",
  /** CONFIRM: showroom street address. Only the city is known today. */
  address: "Addis Ababa",
  /** CONFIRM: a nearby landmark visitors can find (e.g. "Opposite …"). `null` hides it. */
  landmark: null as string | null,
  /**
   * CONFIRM: Google Maps embed URL for the showroom pin
   * (Google Maps → Share → Embed a map → copy the `src`). `null` hides the map.
   */
  mapEmbedUrl: null as string | null,
  /** CONFIRM: working days. One range, in local time. */
  hours: "Mon – Sat · 9:00 AM – 5:00 PM",
  /** CONFIRM: expected reply time. `null` hides it. */
  replyTime: "We reply within one working day." as string | null,
} as const;

/** Amharic (am) version of `CONTACT`. Phone numbers, links and email are shared. */
export const CONTACT_AM = {
  ...CONTACT,
  phones: [
    { label: "ሽያጭ", number: CONTACT.phones[0].number, href: CONTACT.phones[0].href },
    { label: "ከሽያጭ በኋላ", number: CONTACT.phones[1].number, href: CONTACT.phones[1].href },
  ] as PhoneLine[],
  address: "አዲስ አበባ",
  landmark: null as string | null,
  hours: "ሰኞ – ቅዳሜ · ከጠዋቱ 3:00 – ከቀኑ 11:00 ሰዓት",
  replyTime: "በአንድ የሥራ ቀን ውስጥ ምላሽ እንሰጣለን።" as string | null,
} as const;

/** Company information for `locale`. */
export function getSite(locale: Locale) {
  return locale === "am" ? SITE_AM : SITE;
}

/** Contact details for `locale` (phones, email and links are shared). */
export function getContact(locale: Locale) {
  return locale === "am" ? CONTACT_AM : CONTACT;
}

/**
 * Chat channels — the most used ways to reach a business locally.
 * CONFIRM: both default to the main phone number. Replace with the
 * business Telegram username (`https://t.me/<username>`) and WhatsApp
 * Business number if they differ.
 */
export const MESSAGING = {
  whatsapp: `https://wa.me/${MAIN_PHONE_INTL}`,
  telegram: `https://t.me/+${MAIN_PHONE_INTL}`,
} as const;

/** WhatsApp link with a pre-written message (e.g. naming a vehicle model). */
export function whatsappLink(message?: string): string {
  return message ? `${MESSAGING.whatsapp}?text=${encodeURIComponent(message)}` : MESSAGING.whatsapp;
}

export interface SocialLink {
  label: string;
  labelAm: string;
  href: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "TikTok",
    labelAm: "ቲክቶክ",
    href: "https://www.tiktok.com/@nigat.fanawi",
  },
  {
    label: "LinkedIn",
    labelAm: "ሊንክድኢን",
    href: "https://www.linkedin.com/company/nigatfanawi",
  },
  {
    label: "Facebook",
    labelAm: "ፌስቡክ",
    href: "https://web.facebook.com/profile.php?id=61596065924984",
  },
];
