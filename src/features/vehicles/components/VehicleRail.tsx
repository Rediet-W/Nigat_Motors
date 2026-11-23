import Image from "next/image";
import { Link } from "@/i18n/Link";
import { ROUTES } from "@/constants/routes";
import { formatIndex } from "@/lib/format";
import { ScrollRail, Section, SectionHeading, TextLink } from "@/components/ui";
import { getI18n } from "@/i18n/server";
import { getVehicleCategories } from "../data/vehicle-categories";

interface VehicleRailProps {
  index?: string;
}

/** Home page showcase: a horizontal rail of tall category portraits. */
export async function VehicleRail({ index }: VehicleRailProps) {
  const { locale, t } = await getI18n();

  return (
    <Section tone="ink">
      <SectionHeading
        inverse
        index={index}
        eyebrow={t.vehicles.rail.eyebrow}
        title={t.vehicles.rail.title}
        lead={t.vehicles.rail.lead}
        action={<TextLink href={ROUTES.vehicles}>{t.vehicles.rail.viewAll}</TextLink>}
        layout="split"
      />

      <ScrollRail label={t.vehicles.rail.label} inverse>
        {getVehicleCategories(locale).map((category, i) => (
          <li key={category.slug} className="w-[78vw] shrink-0 snap-start sm:w-[22rem] xl:w-[26rem]">
            <Link href={`${ROUTES.vehicles}#${category.slug}`} className="group block">
              <figure className="photo-zoom relative aspect-[3/4] overflow-hidden bg-carbon">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(min-width: 1280px) 416px, (min-width: 640px) 352px, 78vw"
                  className="object-cover"
                />
                <span className="type-number absolute top-5 left-5 text-sm text-paper">{formatIndex(i)}</span>
              </figure>
              <div className="mt-6 flex items-end justify-between gap-4 border-b border-line-inverse pb-6">
                <div>
                  <h3 className="type-h3 transition-colors duration-500 group-hover:text-accent">{category.name}</h3>
                  <p className="mt-2 text-sm text-silver">{category.idealFor}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ScrollRail>
    </Section>
  );
}
