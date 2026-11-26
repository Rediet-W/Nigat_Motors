"use client";

import { ROUTES } from "@/constants/routes";
import { Link } from "@/i18n/Link";
import { useI18n } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/cn";
import { ButtonLink, TextLink } from "@/components/ui";
import { vehicleName, type VehicleModel } from "../data/vehicles";
import { formatAvailability, formatPrice, keySpecs } from "../lib/present";
import { VehicleImage } from "./VehicleImage";

interface VehicleCardProps {
  vehicle: VehicleModel;
  /** Render for a dark background. */
  inverse?: boolean;
}

/** Model card: photo, name, three key specs, price, availability tag and actions. */
export function VehicleCard({ vehicle, inverse }: VehicleCardProps) {
  const { locale, t } = useI18n();
  const name = vehicleName(vehicle);
  const href = ROUTES.vehicle(vehicle.slug);
  const availability = formatAvailability(vehicle, t.vehicles, locale);

  return (
    <article className={cn("flex h-full flex-col border", inverse ? "border-line-inverse" : "border-line bg-paper")}>
      <Link href={href} className="group block" tabIndex={-1}>
        <VehicleImage
          vehicle={vehicle}
          locale={locale}
          sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
          placeholderLabel={t.vehicles.photosSoon}
          className="aspect-[4/3]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "type-eyebrow px-2.5 py-1",
              availability.tone === "positive" ? "bg-accent text-ink" : inverse ? "bg-carbon text-silver" : "bg-bone text-steel",
            )}
          >
            {availability.label}
          </span>
        </div>

        <h3 className="type-h3 mt-4">
          <Link href={href} className="transition-colors duration-500 hover:text-accent">
            {name}
          </Link>
        </h3>

        <ul className={cn("mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm", inverse ? "text-silver" : "text-steel")}>
          {keySpecs(vehicle, t.vehicles, locale).map((fact, i) => (
            <li key={fact} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden className="size-1 rounded-full bg-accent" />}
              {fact}
            </li>
          ))}
        </ul>

        <p className="mt-5 font-medium">{formatPrice(vehicle, t.vehicles)}</p>

        <div className="mt-auto flex flex-wrap items-center gap-x-8 gap-y-4 pt-6">
          <ButtonLink href={ROUTES.enquire(vehicle.slug)} variant={inverse ? "primary" : "dark"} className="min-h-11 px-5">
            {t.vehicles.enquire}
          </ButtonLink>
          <TextLink href={href} aria-label={`${t.vehicles.details}: ${name}`}>
            {t.vehicles.details}
          </TextLink>
        </div>
      </div>
    </article>
  );
}
