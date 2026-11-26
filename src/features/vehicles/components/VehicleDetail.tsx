import { Phone } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { getContact } from "@/constants/site";
import { getI18n } from "@/i18n/server";
import { ButtonLink, ChatLinks, Eyebrow, Section, SectionHeading, SpecList, TextLink } from "@/components/ui";
import { getVehicles, vehicleName, type VehicleModel } from "../data/vehicles";
import { formatAvailability, formatPrice, specRows } from "../lib/present";
import { VehicleCard } from "./VehicleCard";
import { VehicleImage } from "./VehicleImage";

/**
 * Model page: 4–6 photos beside a spec sheet with price, availability and
 * enquiry actions that name the model, then a few other models.
 */
export async function VehicleDetail({ vehicle }: { vehicle: VehicleModel }) {
  const { locale, t } = await getI18n();
  const contact = getContact(locale);
  const name = vehicleName(vehicle);
  const availability = formatAvailability(vehicle, t.vehicles, locale);
  const others = getVehicles()
    .filter((other) => other.slug !== vehicle.slug)
    .sort((a, b) => Number(b.powertrain === vehicle.powertrain) - Number(a.powertrain === vehicle.powertrain))
    .slice(0, 3);
  // The card photo plus up to five more; a single placeholder while photos are pending.
  const photoIndexes = vehicle.images.length > 0 ? vehicle.images.slice(0, 6).map((_, i) => i) : [0];

  return (
    <>
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h2 className="sr-only">{t.vehicles.photos}</h2>
            <ul className="grid grid-cols-2 gap-3">
              {photoIndexes.map((index) => (
                <li key={index} className={index === 0 ? "col-span-2" : undefined}>
                  <VehicleImage
                    vehicle={vehicle}
                    locale={locale}
                    index={index}
                    priority={index === 0}
                    sizes={index === 0 ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 29vw, 50vw"}
                    placeholderLabel={t.vehicles.photosSoon}
                    className={index === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}
                  />
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-[calc(var(--header-height)+2rem)]">
              <Eyebrow className="mb-4">{vehicle.make}</Eyebrow>
              <p className="type-lead text-steel">{vehicle.summary[locale]}</p>

              <div className="mt-8 flex flex-wrap items-baseline justify-between gap-4 border-t border-line pt-6">
                <p className="type-h3">{formatPrice(vehicle, t.vehicles)}</p>
                <span
                  className={
                    availability.tone === "positive"
                      ? "type-eyebrow bg-accent px-2.5 py-1 text-ink"
                      : "type-eyebrow bg-bone px-2.5 py-1 text-steel"
                  }
                >
                  {availability.label}
                </span>
              </div>

              <SpecList className="mt-6" rows={specRows(vehicle, t.vehicles, locale)} />

              <ButtonLink href={ROUTES.enquire(vehicle.slug)} variant="dark" className="mt-8 w-full">
                {t.vehicles.enquireAbout(name)}
              </ButtonLink>
              <p className="mt-6 text-sm text-steel">{t.vehicles.chatLead}</p>
              <ChatLinks message={t.vehicles.chatMessage(name)} className="mt-3" />
              <a
                href={contact.phoneHref}
                className="type-nav mt-6 inline-flex items-center gap-2 text-steel transition-colors hover:text-ink"
              >
                <Phone aria-hidden className="size-3.5 text-accent" />
                {contact.phone}
              </a>
            </div>
          </aside>
        </div>
      </Section>

      {others.length > 0 && (
        <Section tone="bone">
          <SectionHeading
            eyebrow={t.vehicles.otherModels}
            title={t.vehicles.featured.title}
            action={<TextLink href={ROUTES.vehicles}>{t.vehicles.allVehicles}</TextLink>}
            layout="split"
          />
          <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {others.map((other) => (
              <li key={other.slug}>
                <VehicleCard vehicle={other} />
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  );
}
