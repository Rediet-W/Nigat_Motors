"use client";

import { LOCALE_NAMES, LOCALES, localizePath, splitLocale } from "@/i18n/config";
import { useI18n } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/cn";
import { ActivePath } from "./ActivePath";

interface LanguageSwitcherProps {
  className?: string;
}

/**
 * "EN | አማ" toggle. Placed where visitors expect a language control from
 * other sites (Jakob's Law): top right of the header beside the main call to
 * action, and in the mobile header bar. Each option links to the same page
 * in that language; the current language is marked with `aria-current`.
 * A plain anchor (full page load) is used on purpose: switching language
 * swaps the whole document (`<html lang>`, fonts), and should start at the top.
 */
export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { locale, t } = useI18n();

  return (
    <nav aria-label={t.nav.language} className={className}>
      <ActivePath>
        {(pathname) => (
          <ul className="type-nav flex items-center">
            {LOCALES.map((lang, index) => {
              const current = lang === locale;

              return (
                <li key={lang} className="flex items-center">
                  {index > 0 && <span aria-hidden className="mx-2.5 h-3.5 w-px bg-current opacity-30" />}
                  <a
                    href={localizePath(lang, pathname ?? "/")}
                    onClick={(event) => {
                      // Resolve from the address bar at click time, so the visitor
                      // always lands on the same page (and section) in the other language.
                      if (current || event.metaKey || event.ctrlKey || event.shiftKey) return;
                      event.preventDefault();
                      const { path } = splitLocale(window.location.pathname);
                      window.location.assign(localizePath(lang, path) + window.location.search);
                    }}
                    hrefLang={lang}
                    lang={lang}
                    aria-label={LOCALE_NAMES[lang].long}
                    aria-current={current ? "true" : undefined}
                    className={cn(
                      "flex min-h-11 min-w-8 items-center justify-center transition-colors duration-500",
                      current ? "text-paper" : "text-silver hover:text-accent",
                    )}
                  >
                    <span className={cn(current && "border-b-2 border-accent pb-0.5")}>{LOCALE_NAMES[lang].short}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </ActivePath>
    </nav>
  );
}
