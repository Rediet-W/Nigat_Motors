import { ROUTES } from "@/constants/routes";
import { AboutManifesto, BrandValues, PrinciplesBand } from "@/features/about";
import { EnquiryCta } from "@/features/contact";
import { FaqPreview } from "@/features/faqs";
import { HeroSection } from "@/features/home";
import { ServicesIndex } from "@/features/services";
import { VehicleRail } from "@/features/vehicles";
import { getI18n } from "@/i18n/server";

export default async function HomePage() {
  const { t } = await getI18n();

  return (
    <>
      <HeroSection />
      <BrandValues />
      <AboutManifesto index="01" cta={{ label: t.about.moreAboutUs, href: ROUTES.about }} />
      <VehicleRail index="02" />
      <ServicesIndex index="03" />
      <PrinciplesBand index="04" />
      <FaqPreview index="05" />
      <EnquiryCta index="06" />
    </>
  );
}
