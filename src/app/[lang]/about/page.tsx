import type { Metadata } from "next";
import { PageHero } from "@/components/layout";
import { ROUTES } from "@/constants/routes";
import {
  AboutManifesto,
  ApproachSteps,
  BrandValues,
  NameAndMark,
  PrinciplesBand,
  VisionMission,
} from "@/features/about";
import { EnquiryCta } from "@/features/contact";
import { getI18n } from "@/i18n/server";
import { createMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();
  return createMetadata({ locale, ...t.meta.pages.about, path: ROUTES.about });
}

export default async function AboutPage() {
  const { t } = await getI18n();

  return (
    <>
      <PageHero
        eyebrow={t.about.eyebrow}
        title={t.about.hero.title}
        lead={t.about.hero.lead}
        image="/images/hero-about.jpg"
      />
      <AboutManifesto />
      <VisionMission />
      <BrandValues />
      <ApproachSteps />
      {/* <NameAndMark /> */}
      <PrinciplesBand />
      <EnquiryCta />
    </>
  );
}
