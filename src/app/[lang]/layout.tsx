import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { DM_Sans, Russo_One } from "next/font/google";
import { Footer, Header } from "@/components/layout";
import { getSite } from "@/constants/site";
import { isLocale, LOCALES } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { getI18n } from "@/i18n/server";
import { localeAlternates } from "@/lib/metadata";
import "@/styles/globals.css";

/** Primary typeface (brand guideline): headlines, titles and key statements. Single weight. */
const russoOne = Russo_One({
  variable: "--font-russo-one",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

/** Secondary typeface (brand guideline): body copy, descriptions, captions and UI. */
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const site = getSite(lang);
  const t = getDictionary(lang);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: t.meta.defaultTitle(site.name),
      template: `%s | ${site.name}`,
    },
    description: site.description,
    applicationName: site.name,
    alternates: localeAlternates(lang, "/"),
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: lang,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#12263a",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  if (!isLocale((await params).lang)) notFound();
  const { locale, t } = await getI18n();

  return (
    <html lang={locale} className={`${russoOne.variable} ${dmSans.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important;clip-path:none!important}.reveal img{transform:none!important}"}</style>
        </noscript>
        <LocaleProvider locale={locale}>
          <a
            href="#main-content"
            className="type-nav sr-only z-[200] bg-accent px-5 py-4 text-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
          >
            {t.common.skipToContent}
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
