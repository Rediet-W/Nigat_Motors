/**
 * Nigat Group — sector websites.
 *
 * Nigat Fanawi Trading PLC is the parent company; Construction, Motors and
 * Exports each have their own website. This file drives the sector switcher
 * in the header, the mobile menu and the footer.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │  EDIT HERE: the URL of each sector website.                          │
 * │  An environment variable, when set, overrides the value below        │
 * │  (handy for local testing or staging):                               │
 * │    NEXT_PUBLIC_CONSTRUCTION_URL, NEXT_PUBLIC_MOTORS_URL,             │
 * │    NEXT_PUBLIC_EXPORTS_URL                                           │
 * │  `.example` domains are reserved PLACEHOLDERS — replace them.        │
 * └──────────────────────────────────────────────────────────────────────┘
 */
import type { Locale } from "@/i18n/config";

const SECTOR_URLS = {
  construction: "https://nigat-construction.vercel.app/",
  motors: "https://nigat-motors.vercel.app/",
  exports: "https://nigat-exports.vercel.app/",
};

/** The sector this website belongs to. */
export const CURRENT_SECTOR: SectorKey = "motors";

// ---------------------------------------------------------------------------

export type SectorKey = "construction" | "motors" | "exports";

export interface Sector {
  key: SectorKey;
  name: string;
  nameAm: string;
  description: string;
  descriptionAm: string;
  href: string;
}

export const GROUP = {
  name: "Nigat Group",
  nameAm: "ንጋት ግሩፕ",
} as const;

/** Group and sector names/descriptions in `locale`. */
export function getGroup(locale: Locale) {
  const am = locale === "am";
  return {
    name: am ? GROUP.nameAm : GROUP.name,
    sectors: SECTORS.map((sector) => ({
      key: sector.key,
      href: sector.href,
      name: am ? sector.nameAm : sector.name,
      description: am ? sector.descriptionAm : sector.description,
    })),
  };
}

export const SECTORS: Sector[] = [
  {
    key: "construction",
    name: "Nigat Fanawi Construction",
    nameAm: "ንጋት ኮንስትራክሽን",
    description: "Building and construction projects.",
    descriptionAm: "የሕንፃ እና የኮንስትራክሽን ፕሮጀክቶች።",
    href: process.env.NEXT_PUBLIC_CONSTRUCTION_URL || SECTOR_URLS.construction,
  },
  {
    key: "motors",
    name: "NF Car Importer",
    nameAm: "ኤንኤፍ የመኪና አስመጪ",
    description: "Vehicle importing and sales, electric vehicles, accessories and spare parts.",
    descriptionAm: "የተሽከርካሪ ማስመጣት እና ሽያጭ፣ የኤሌክትሪክ ተሽከርካሪዎች፣ ተጨማሪ ዕቃዎች እና መለዋወጫዎች።",
    href: process.env.NEXT_PUBLIC_MOTORS_URL || SECTOR_URLS.motors,
  },
  {
    key: "exports",
    name: "Nigat Exports",
    nameAm: "ንጋት ኤክስፖርት",
    description: "Export trade from Ethiopia.",
    descriptionAm: "ከኢትዮጵያ የሚላኩ የወጪ ንግድ ምርቶች።",
    href: process.env.NEXT_PUBLIC_EXPORTS_URL || SECTOR_URLS.exports,
  },
];
