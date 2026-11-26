import type { Metadata } from "next";
import { PageHero } from "@/components/layout";
import { ROUTES } from "@/constants/routes";
import { CtaBand } from "@/features/contact";
import { ServicesShowcase } from "@/features/services";
import { getI18n } from "@/i18n/server";
import { createMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();
  return createMetadata({ locale, ...t.meta.pages.services, path: ROUTES.services });
}

/**
 * PLACEHOLDER: set `video` to a short looping clip of Nigat's workshop,
 * parts and deliveries (e.g. "/videos/services.mp4") once supplied.
 */
const SERVICES_HERO_VIDEO: string | undefined = undefined;

export default async function ServicesPage() {
  const { t } = await getI18n();

  return (
    <>
      <PageHero
        eyebrow={t.services.hero.eyebrow}
        title={t.services.hero.title}
        lead={t.services.hero.lead}
        image="/images/hero-services.jpg"
        imageAlt={t.heroAlt.services}
        video={SERVICES_HERO_VIDEO}
        size="compact"
      />
      <ServicesShowcase />
      <CtaBand />
    </>
  );
}
