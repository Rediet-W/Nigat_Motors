import type { Metadata } from "next";
import { LOCALES, localizePath, type Locale } from "@/i18n/config";

interface PageMetadataInput {
  locale: Locale;
  title: string;
  description: string;
  /** Locale-free path, e.g. `/about`. */
  path: string;
}

/** Canonical URL for `locale` plus `hreflang` links to every language version. */
export function localeAlternates(locale: Locale, path: string): Metadata["alternates"] {
  return {
    canonical: localizePath(locale, path),
    languages: {
      ...Object.fromEntries(LOCALES.map((lang) => [lang, localizePath(lang, path)])),
      "x-default": path,
    },
  };
}

/** Builds consistent per-page metadata (title template lives in the root layout). */
export function createMetadata({ locale, title, description, path }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: localeAlternates(locale, path),
    openGraph: { title, description, url: localizePath(locale, path) },
  };
}
