import type { Locale } from "@/i18n/config";

/**
 * VEHICLE LISTING — one entry per model offered.
 *
 * Only public facts are filled in today (make, model, body type, powertrain).
 * Everything that must come from Nigat's sales team is left empty and is
 * simply hidden on the site until provided (see the content request):
 *   - `year`, `specs`         → spec rows appear once filled
 *   - `price`                 → "from ETB …" / "ETB …"; otherwise "Price on request"
 *   - `availability`          → "Available now" / "On order · 4–6 weeks"
 *   - `images`                → 4–6 real photos in `public/images/vehicles/<slug>/`;
 *                               until then a branded placeholder is shown
 *
 * CONFIRM (body type / powertrain): BYD E7, BYD Leopard (which Leopard
 * model?) and BYD Sea Lion 06 (EV or DM-i plug-in hybrid version?).
 */

export type BodyType = "sedan" | "suv" | "pickup" | "hatchback";
export type Powertrain = "electric" | "hybrid" | "petrol";

export const BODY_TYPES: BodyType[] = ["sedan", "suv", "pickup", "hatchback"];
export const POWERTRAINS: Powertrain[] = ["electric", "hybrid", "petrol"];

export interface VehiclePrice {
  /** `from`: starting price across trims; `exact`: single price. Amount in ETB. */
  kind: "from" | "exact";
  amount: number;
}

export interface VehicleAvailability {
  status: "in-stock" | "on-order";
  /** Lead time for vehicles on order, per locale (e.g. "4–6 weeks"). */
  leadTime?: Record<Locale, string>;
}

export interface VehicleSpecs {
  /** Electric range, e.g. "405 km (CLTC)". */
  range?: string;
  /** Fuel economy, e.g. "4.4 L/100 km". */
  fuelEconomy?: string;
  seats?: number;
  /** Per locale, e.g. { en: "Automatic", am: "አውቶማቲክ" }. */
  transmission?: Record<Locale, string>;
}

export interface VehicleModel {
  slug: string;
  make: string;
  model: string;
  year?: number;
  body: BodyType;
  powertrain: Powertrain;
  /** Show in the home page's featured vehicles. */
  featured?: boolean;
  /** One-line summary per locale. */
  summary: Record<Locale, string>;
  specs: VehicleSpecs;
  price?: VehiclePrice;
  availability?: VehicleAvailability;
  /** 4–6 real photos; the first is the card image. */
  images: { src: string; alt: Record<Locale, string> }[];
}

export const VEHICLES: VehicleModel[] = [
  {
    slug: "byd-seagull",
    make: "BYD",
    model: "Seagull",
    body: "hatchback",
    powertrain: "electric",
    featured: true,
    summary: {
      en: "A compact electric hatchback for easy, low-cost city driving.",
      am: "ለቀላል እና ቆጣቢ የከተማ ማሽከርከር አነስተኛ የኤሌክትሪክ ሃችባክ።",
    },
    specs: {},
    images: [],
  },
  {
    slug: "byd-yuan-up",
    make: "BYD",
    model: "Yuan Up",
    body: "suv",
    powertrain: "electric",
    featured: true,
    summary: {
      en: "A compact electric SUV with a raised driving position and room for the family.",
      am: "ከፍ ያለ የማሽከርከሪያ ቦታ እና ለቤተሰብ በቂ ቦታ ያለው አነስተኛ የኤሌክትሪክ SUV።",
    },
    specs: {},
    images: [],
  },
  {
    slug: "byd-e7",
    make: "BYD",
    model: "E7",
    body: "sedan",
    powertrain: "electric",
    featured: true,
    summary: {
      en: "An electric sedan for comfortable daily commuting.",
      am: "ለምቹ የዕለት ጉዞ የኤሌክትሪክ ሴዳን።",
    },
    specs: {},
    images: [],
  },
  {
    slug: "byd-sea-lion-06",
    make: "BYD",
    model: "Sea Lion 06",
    body: "suv",
    powertrain: "electric",
    featured: true,
    summary: {
      en: "A mid-size SUV with space for longer journeys.",
      am: "ለረጅም ጉዞ ሰፊ ቦታ ያለው መካከለኛ መጠን SUV።",
    },
    specs: {},
    images: [],
  },
  {
    slug: "byd-leopard",
    make: "BYD",
    model: "Leopard",
    body: "suv",
    powertrain: "hybrid",
    featured: true,
    summary: {
      en: "A rugged SUV built for mixed roads and rough terrain.",
      am: "ለተለያዩ መንገዶች እና ለአስቸጋሪ መሬት የተሠራ ጠንካራ SUV።",
    },
    specs: {},
    images: [],
  },
  {
    slug: "toyota-corolla-cross-hybrid",
    make: "Toyota",
    model: "Corolla Cross Hybrid",
    body: "suv",
    powertrain: "hybrid",
    featured: true,
    summary: {
      en: "Toyota's hybrid crossover: low fuel use with proven reliability.",
      am: "የቶዮታ ሃይብሪድ ክሮስኦቨር፦ ዝቅተኛ የነዳጅ ፍጆታ ከተረጋገጠ አስተማማኝነት ጋር።",
    },
    specs: {},
    images: [],
  },
];

export function getVehicles(): VehicleModel[] {
  return VEHICLES;
}

export function getFeaturedVehicles(limit = 6): VehicleModel[] {
  return VEHICLES.filter((vehicle) => vehicle.featured).slice(0, limit);
}

export function getVehicleBySlug(slug: string): VehicleModel | undefined {
  return VEHICLES.find((vehicle) => vehicle.slug === slug);
}

export function vehicleName(vehicle: VehicleModel): string {
  return [vehicle.make, vehicle.model, vehicle.year].filter(Boolean).join(" ");
}
