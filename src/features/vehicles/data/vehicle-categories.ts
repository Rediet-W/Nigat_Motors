import type { Locale } from "@/i18n/config";
import type { VehicleCategory } from "@/types";

/**
 * PLACEHOLDER CONTENT — general vehicle categories, not a stock list.
 * NF Car Importer's actual brands, models and inventory have not been confirmed;
 * images are representative stock photography (README → "Content to confirm").
 * Slugs and images are shared; names and copy are per locale.
 */
const CATEGORIES: { slug: string; image: string; text: Record<Locale, Omit<VehicleCategory, "slug" | "image">> }[] = [
  {
    slug: "sedan",
    image: "/images/category-sedan.jpg",
    text: {
      en: {
        name: "Sedans",
        description: "Comfortable, efficient and refined — a practical choice for everyday driving.",
        idealFor: "Daily commuting and city driving",
      },
      am: {
        name: "ሴዳኖች",
        description: "ምቹ፣ ነዳጅ ቆጣቢ እና የተዋበ — ለዕለት ተዕለት ማሽከርከር ተግባራዊ ምርጫ።",
        idealFor: "ለዕለት ጉዞ እና ለከተማ ውስጥ ማሽከርከር",
      },
    },
  },
  {
    slug: "suv",
    image: "/images/category-suv.jpg",
    text: {
      en: {
        name: "SUVs",
        description: "Space, presence and versatility for families and mixed road conditions.",
        idealFor: "Families and longer journeys",
      },
      am: {
        name: "SUVዎች",
        description: "ለቤተሰብ እና ለተለያዩ የመንገድ ሁኔታዎች ሰፊ ቦታ፣ ግርማ እና ሁለገብነት።",
        idealFor: "ለቤተሰብ እና ለረጅም ጉዞዎች",
      },
    },
  },
  {
    slug: "pickup",
    image: "/images/category-pickup.jpg",
    text: {
      en: {
        name: "Pickups",
        description: "Load capacity and durability for work, business and rough terrain.",
        idealFor: "Work, business and heavy loads",
      },
      am: {
        name: "ፒካፖች",
        description: "ለሥራ፣ ለንግድ እና ለአስቸጋሪ መሬት የመጫን አቅም እና ጥንካሬ።",
        idealFor: "ለሥራ፣ ለንግድ እና ለከባድ ጭነት",
      },
    },
  },
  {
    slug: "hatchback",
    image: "/images/category-hatchback.jpg",
    text: {
      en: {
        name: "Hatchbacks",
        description: "Compact, easy to park and economical to run.",
        idealFor: "First-time owners and urban driving",
      },
      am: {
        name: "ሃችባኮች",
        description: "አነስተኛ፣ ለማቆም ቀላል እና ለማንቀሳቀስ ቆጣቢ።",
        idealFor: "ለመጀመሪያ ጊዜ ባለቤቶች እና ለከተማ ማሽከርከር",
      },
    },
  },
  {
    slug: "crossover",
    image: "/images/category-crossover.jpg",
    text: {
      en: {
        name: "Crossovers",
        description: "The raised driving position of an SUV with the agility of a smaller car.",
        idealFor: "Drivers who want a bit of everything",
      },
      am: {
        name: "ክሮስኦቨሮች",
        description: "የSUV ከፍ ያለ የማሽከርከር ቦታ ከትንሽ መኪና ቅልጥፍና ጋር።",
        idealFor: "ከሁሉም ትንሽ ለሚፈልጉ አሽከርካሪዎች",
      },
    },
  },
  {
    slug: "electric",
    image: "/images/category-electric.jpg",
    text: {
      en: {
        name: "Electric & Hybrid",
        description: "Lower running costs and a quieter, smoother drive.",
        idealFor: "Efficiency-minded drivers",
      },
      am: {
        name: "ኤሌክትሪክ እና ሃይብሪድ",
        description: "ዝቅተኛ የማንቀሳቀሻ ወጪ እና ጸጥ ያለ፣ ለስላሳ ጉዞ።",
        idealFor: "ቆጣቢነትን ለሚያስቀድሙ አሽከርካሪዎች",
      },
    },
  },
];

export function getVehicleCategories(locale: Locale): VehicleCategory[] {
  return CATEGORIES.map(({ slug, image, text }) => ({ slug, image, ...text[locale] }));
}

/** English categories (used where a locale-independent list is needed). */
export const VEHICLE_CATEGORIES = getVehicleCategories("en");
