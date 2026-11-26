import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout";
import { ROUTES } from "@/constants/routes";
import { CtaBand } from "@/features/contact";
import { getVehicleBySlug, VEHICLES, VehicleDetail, vehicleName } from "@/features/vehicles";
import { getI18n } from "@/i18n/server";
import { createMetadata } from "@/lib/metadata";

/** Every model is prerendered in every language; unknown slugs render the not-found page. */
export function generateStaticParams() {
  return VEHICLES.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/vehicles/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { locale } = await getI18n();
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) return {};

  return createMetadata({
    locale,
    title: vehicleName(vehicle),
    description: vehicle.summary[locale],
    path: ROUTES.vehicle(vehicle.slug),
  });
}

export default async function VehiclePage({ params }: PageProps<"/[lang]/vehicles/[slug]">) {
  const { slug } = await params;
  const { locale, t } = await getI18n();
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) notFound();
  const name = vehicleName(vehicle);
  const cover = vehicle.images[0];

  return (
    <>
      <PageHero
        eyebrow={t.vehicles.powertrain[vehicle.powertrain]}
        title={name}
        image={cover?.src}
        imageAlt={cover?.alt[locale]}
        trail={[{ label: t.nav.vehicles, href: ROUTES.vehicles }]}
        size="compact"
      />
      <VehicleDetail vehicle={vehicle} />
      <CtaBand interest={vehicle.slug} chatMessage={t.vehicles.chatMessage(name)} />
    </>
  );
}
