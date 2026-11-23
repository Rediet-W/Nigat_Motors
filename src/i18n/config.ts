/**
 * Locales. English is the default and lives at the unprefixed URLs
 * (`/about`); Amharic lives under `/am` (`/am/about`). `src/proxy.ts`
 * rewrites unprefixed requests to the internal `/en/...` routes.
 */
export const LOCALES = ["en", "am"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

/** Native-language names, used by the language switcher. */
export const LOCALE_NAMES: Record<Locale, { short: string; long: string }> = {
  en: { short: "EN", long: "English" },
  am: { short: "አማ", long: "አማርኛ" },
};

export function isLocale(value: string | null | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

/** Prefixes an internal path for `locale` (`/about` → `/am/about`). External and hash links pass through. */
export function localizePath(locale: Locale, path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  if (locale === DEFAULT_LOCALE) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Splits a public pathname into its locale and the locale-free path. */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const [, first, ...rest] = pathname.split("/");
  if (isLocale(first) && first !== DEFAULT_LOCALE) {
    return { locale: first, path: `/${rest.join("/")}` };
  }
  return { locale: DEFAULT_LOCALE, path: pathname || "/" };
}
