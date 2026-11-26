import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { SpecRow } from "@/components/ui";
import type { VehicleModel } from "../data/vehicles";

type VehicleCopy = Dictionary["vehicles"];

const ETB = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

/** "From ETB 2,450,000", "ETB 2,450,000" or "Price on request". */
export function formatPrice(vehicle: VehicleModel, t: VehicleCopy): string {
  if (!vehicle.price) return t.priceOnRequest;
  const amount = ETB.format(vehicle.price.amount);
  return vehicle.price.kind === "from" ? t.priceFrom(amount) : t.priceExact(amount);
}

/** "Available now", "On order · 4–6 weeks", or "Ask for availability" when unknown. */
export function formatAvailability(vehicle: VehicleModel, t: VehicleCopy, locale: Locale) {
  const availability = vehicle.availability;
  if (!availability) return { label: t.askAvailability, tone: "neutral" as const };
  if (availability.status === "in-stock") return { label: t.inStock, tone: "positive" as const };
  const lead = availability.leadTime?.[locale];
  return { label: lead ? t.onOrderLead(lead) : t.onOrder, tone: "neutral" as const };
}

/** Spec rows that have values; empty specs are left out rather than shown as blanks. */
export function specRows(vehicle: VehicleModel, t: VehicleCopy, locale: Locale): SpecRow[] {
  const { specs } = vehicle;
  const rows: (SpecRow | false)[] = [
    !!vehicle.year && { label: t.specs.year, value: String(vehicle.year) },
    { label: t.specs.body, value: t.body[vehicle.body] },
    { label: t.specs.powertrain, value: t.powertrain[vehicle.powertrain] },
    !!specs.range && { label: t.specs.range, value: specs.range },
    !!specs.fuelEconomy && { label: t.specs.fuelEconomy, value: specs.fuelEconomy },
    !!specs.seats && { label: t.specs.seats, value: String(specs.seats) },
    !!specs.transmission && { label: t.specs.transmission, value: specs.transmission[locale] },
  ];
  return rows.filter((row): row is SpecRow => !!row);
}

/** Up to three short facts for a card: range or economy, seats, transmission, else body + powertrain. */
export function keySpecs(vehicle: VehicleModel, t: VehicleCopy, locale: Locale): string[] {
  const { specs } = vehicle;
  const facts = [
    specs.range ?? specs.fuelEconomy,
    specs.seats ? `${specs.seats} ${t.specs.seats.toLowerCase()}` : undefined,
    specs.transmission?.[locale],
  ].filter((fact): fact is string => !!fact);
  if (facts.length >= 3) return facts.slice(0, 3);
  return [t.powertrain[vehicle.powertrain], t.body[vehicle.body], ...facts].slice(0, 3);
}
