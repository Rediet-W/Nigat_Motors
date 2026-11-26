import { ROUTES } from "@/constants/routes";
import { Section, SectionHeading, TextLink } from "@/components/ui";
import { getI18n } from "@/i18n/server";
import { getFeaturedVehicles } from "../data/vehicles";
import { VehicleCard } from "./VehicleCard";

/** Home page: 4 to 6 featured models, led by electric and hybrid. */
export async function FeaturedVehicles() {
  const { t } = await getI18n();

  return (
    <Section tone="bone">
      <SectionHeading
        eyebrow={t.vehicles.featured.eyebrow}
        title={t.vehicles.featured.title}
        lead={t.vehicles.featured.lead}
        action={<TextLink href={ROUTES.vehicles}>{t.vehicles.featured.viewAll}</TextLink>}
        layout="split"
      />
      <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {getFeaturedVehicles().map((vehicle) => (
          <li key={vehicle.slug}>
            <VehicleCard vehicle={vehicle} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
