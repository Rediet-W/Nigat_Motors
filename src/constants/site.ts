import type { Locale } from "@/i18n/config";

/**
 * NF Car Importer — company information.
 *
 * Verified company details. `SITE` / `CONTACT` / `SOCIAL_LINKS` are the
 * English (en) values rendered by the site; `SITE_AM` / `CONTACT_AM` hold the
 * matching Amharic (am) values for localized use.
 */

export const SITE = {
  name: "NF Car Importer",
  shortName: "NF",
  /** Official registered organization name. */
  legalName: "Nigat Fanawi Trading PLC",
  industry: "Automotive",
  established: 2018,
  description:
    "NF Car Importer, an automotive sub-brand of Nigat Fanawi Trading PLC — vehicle importing and sales, electric vehicles, automotive accessories and spare parts in Addis Ababa, Ethiopia. Explore our vehicles and services, or get in touch with our team.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
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

export const CONTACT = {
  phone: "0995888882",
  /** `tel:` form of the phone number above. */
  phoneHref: "tel:+251995888882",
  altPhone: "0995888883",
  /** `tel:` form of the alternative phone number above. */
  altPhoneHref: "tel:+251995888883",
  email: "nigatfanawi33@gmail.com",
  address: "Addis Ababa",
  /** 3:00–11:00 in Ethiopian local time. */
  hours: "9:00 AM – 5:00 PM (3:00 – 11:00 local time)",
} as const;

/** Amharic (am) version of `CONTACT`. Phone numbers, links and email are shared. */
export const CONTACT_AM = {
  ...CONTACT,
  address: "አዲስ አበባ",
  hours: "ከጠዋቱ 3:00 – ከቀኑ 11:00 ሰዓት",
} as const;

/** Company information for `locale`. */
export function getSite(locale: Locale) {
  return locale === "am" ? SITE_AM : SITE;
}

/** Contact details for `locale` (phones, email and links are shared). */
export function getContact(locale: Locale) {
  return locale === "am" ? CONTACT_AM : CONTACT;
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
