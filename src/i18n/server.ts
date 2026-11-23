import { lang } from "next/root-params";
import { DEFAULT_LOCALE, isLocale, type Locale } from "./config";
import { getDictionary } from "./dictionaries";

/** Current locale in Server Components (read from the `[lang]` root segment). */
export async function getLocale(): Promise<Locale> {
  const value = await lang();
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

/** Current locale plus its dictionary, for Server Components. */
export async function getI18n() {
  const locale = await getLocale();
  return { locale, t: getDictionary(locale) };
}
