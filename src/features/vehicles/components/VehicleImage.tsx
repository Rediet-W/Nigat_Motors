import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Locale } from "@/i18n/config";
import type { VehicleModel } from "../data/vehicles";

interface VehicleImageProps {
  vehicle: VehicleModel;
  locale: Locale;
  /** Which photo to show (0 = card photo). */
  index?: number;
  sizes: string;
  /** Text shown on the placeholder while real photos are pending. */
  placeholderLabel: string;
  priority?: boolean;
  className?: string;
}

/**
 * A model's photo, or, until Nigat's own photos arrive, a branded placeholder
 * naming the model. Stock photos of other cars are deliberately not used:
 * the picture must match the vehicle being sold.
 */
export function VehicleImage({ vehicle, locale, index = 0, sizes, placeholderLabel, priority, className }: VehicleImageProps) {
  const photo = vehicle.images[index];

  return (
    <div className={cn("relative isolate overflow-hidden bg-graphite", className)}>
      {photo ? (
        <Image src={photo.src} alt={photo.alt[locale]} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-paper">
          <div aria-hidden className="motion-loop absolute inset-0 -z-10 bg-steel-blue/20" />
          <span className="type-eyebrow text-accent">{vehicle.make}</span>
          <div>
            <p className="type-h3 text-balance">{vehicle.model}</p>
            <p className="mt-2 text-sm text-silver">{placeholderLabel}</p>
          </div>
        </div>
      )}
    </div>
  );
}
