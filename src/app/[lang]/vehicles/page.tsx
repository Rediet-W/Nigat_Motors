import type { Metadata } from "next";
import { PageHero } from "@/components/layout";
import { Section } from "@/components/ui";
import { ROUTES } from "@/constants/routes";
import { CtaBand } from "@/features/contact";
import { getVehicles, VehicleListing } from "@/features/vehicles";
import { getI18n } from "@/i18n/server";
import { createMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();
  return createMetadata({ locale, ...t.meta.pages.vehicles, path: ROUTES.vehicles });
}

export default async function VehiclesPage() {
  const { t } = await getI18n();

  return (
    <>
      <PageHero
        eyebrow={t.vehicles.hero.eyebrow}
        title={t.vehicles.hero.title}
        lead={t.vehicles.hero.lead}
        image="/images/hero-vehicles.jpg"
        imageAlt={t.heroAlt.vehicles}
        size="compact"
      />
      <Section>
        <VehicleListing vehicles={getVehicles()} />
      </Section>
      <CtaBand />
    </>
  );
}
