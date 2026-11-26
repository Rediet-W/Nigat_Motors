"use client";

import { useState } from "react";
import { useI18n } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/cn";
import { BODY_TYPES, POWERTRAINS, type BodyType, type Powertrain, type VehicleModel } from "../data/vehicles";
import { VehicleCard } from "./VehicleCard";

interface VehicleListingProps {
  vehicles: VehicleModel[];
}

interface FilterGroupProps<T extends string> {
  label: string;
  allLabel: string;
  options: { value: T; label: string; count: number }[];
  selected: T | null;
  onSelect: (value: T | null) => void;
}

function FilterGroup<T extends string>({ label, allLabel, options, selected, onSelect }: FilterGroupProps<T>) {
  const chip = (active: boolean) =>
    cn(
      "type-nav min-h-11 border px-4 transition-colors duration-500",
      active ? "border-ink bg-ink text-paper" : "border-line text-ink hover:border-accent hover:text-accent",
    );

  return (
    <fieldset>
      <legend className="type-eyebrow mb-3 text-steel">{label}</legend>
      <div className="flex flex-wrap gap-2">
        <button type="button" aria-pressed={selected === null} onClick={() => onSelect(null)} className={chip(selected === null)}>
          {allLabel}
        </button>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={selected === option.value}
            onClick={() => onSelect(selected === option.value ? null : option.value)}
            className={chip(selected === option.value)}
          >
            {option.label} <span className="opacity-60">({option.count})</span>
          </button>
        ))}
      </div>
    </fieldset>
  );
}

/**
 * Vehicles page listing: one card per model, filtered by body type and
 * powertrain independently (a BYD SUV is both "SUV" and "Electric").
 * Filter options with no models yet are hidden until models are added.
 */
export function VehicleListing({ vehicles }: VehicleListingProps) {
  const { t } = useI18n();
  const [body, setBody] = useState<BodyType | null>(null);
  const [powertrain, setPowertrain] = useState<Powertrain | null>(null);

  const visible = vehicles.filter(
    (vehicle) => (!body || vehicle.body === body) && (!powertrain || vehicle.powertrain === powertrain),
  );

  const bodyOptions = BODY_TYPES.map((value) => ({
    value,
    label: t.vehicles.body[value],
    count: vehicles.filter((vehicle) => vehicle.body === value).length,
  })).filter((option) => option.count > 0);

  const powertrainOptions = POWERTRAINS.map((value) => ({
    value,
    label: t.vehicles.powertrain[value],
    count: vehicles.filter((vehicle) => vehicle.powertrain === value).length,
  })).filter((option) => option.count > 0);

  return (
    <div>
      <div role="group" aria-label={t.vehicles.filters.label} className="flex flex-col gap-6 border-b border-line pb-8 lg:flex-row lg:gap-12">
        <FilterGroup
          label={t.vehicles.filters.body}
          allLabel={t.vehicles.filters.all}
          options={bodyOptions}
          selected={body}
          onSelect={setBody}
        />
        <FilterGroup
          label={t.vehicles.filters.powertrain}
          allLabel={t.vehicles.filters.all}
          options={powertrainOptions}
          selected={powertrain}
          onSelect={setPowertrain}
        />
      </div>

      <p role="status" aria-live="polite" className="type-eyebrow mt-6 text-steel">
        {t.vehicles.filters.results(visible.length)}
      </p>

      {visible.length > 0 ? (
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((vehicle) => (
            <li key={vehicle.slug}>
              <VehicleCard vehicle={vehicle} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-6 border border-line p-10 text-center">
          <p className="text-steel">{t.vehicles.filters.empty}</p>
          <button
            type="button"
            onClick={() => {
              setBody(null);
              setPowertrain(null);
            }}
            className="text-link type-nav mt-4"
          >
            {t.vehicles.filters.reset}
          </button>
        </div>
      )}
    </div>
  );
}
