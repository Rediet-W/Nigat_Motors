import type { Metadata } from "next";
import { PageHero } from "@/components/layout";
import { ROUTES } from "@/constants/routes";
import { ApproachSteps, BrandValues, OurStory, VisionMission } from "@/features/about";
import { CtaBand } from "@/features/contact";
import { getI18n } from "@/i18n/server";
import { createMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();
  return createMetadata({ locale, ...t.meta.pages.about, path: ROUTES.about });
}

/** About: hero → our story → vision & mission → how we work → values line → CTA band. */
export default async function AboutPage() {
  const { t } = await getI18n();

  return (
    <>
      <PageHero
        eyebrow={t.about.eyebrow}
        title={t.about.hero.title}
        lead={t.about.hero.lead}
        image="/images/hero-about.jpg"
        imageAlt={t.heroAlt.about}
        size="compact"
      />
      <OurStory />
      <VisionMission />
      <ApproachSteps />
      <BrandValues />
      <CtaBand />
    </>
  );
}
