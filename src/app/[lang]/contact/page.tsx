import type { Metadata } from "next";
import { PageHero } from "@/components/layout";
import { ROUTES } from "@/constants/routes";
import { ContactSection } from "@/features/contact";
import { getI18n } from "@/i18n/server";
import { createMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();
  return createMetadata({ locale, ...t.meta.pages.contact, path: ROUTES.contact });
}

export default async function ContactPage() {
  const { t } = await getI18n();

  return (
    <>
      <PageHero
        eyebrow={t.contact.hero.eyebrow}
        title={t.contact.hero.title}
        lead={t.contact.hero.lead}
        image="/images/hero-contact.jpg"
        imageAlt={t.heroAlt.contact}
        size="compact"
      />
      <ContactSection />
    </>
  );
}
