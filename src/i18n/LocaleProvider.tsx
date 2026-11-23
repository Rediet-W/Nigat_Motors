"use client";

import { createContext, useContext, type ReactNode } from "react";
import { DEFAULT_LOCALE, type Locale } from "./config";
import { getDictionary } from "./dictionaries";

const LocaleContext = createContext<Locale>(DEFAULT_LOCALE);

/** Makes the current locale available to Client Components. Set once in the root layout. */
export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}

/** Current locale plus its dictionary, for Client Components. */
export function useI18n() {
  const locale = useLocale();
  return { locale, t: getDictionary(locale) };
}
