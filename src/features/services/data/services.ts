import type { Locale } from "@/i18n/config";
import type { ProcessStep, Service } from "@/types";

/**
 * Services offered by NF Car Importer (Nigat Fanawi Trading PLC), following
 * the brand guideline: vehicle importing and sales, electric vehicles,
 * automotive accessories and spare parts — plus after-sales support.
 * `SERVICES` is the English (en) data rendered by the site; `SERVICES_AM`
 * holds the matching Amharic (am) version with the same slugs and images.
 */
export const SERVICES: Service[] = [
  {
    slug: "vehicle-importing-sales",
    title: "Vehicle Importing & Sales",
    image: "/images/service-vehicle-sales.jpg",
    excerpt:
      "Sourcing and importing quality vehicles that meet your needs and preferences, with a clear, straightforward process.",
    overview: [
      "We connect you with the vehicle you want. Tell us the make, model and preferences you have in mind, and we source and import a quality vehicle that fits.",
      "Our aim is to make vehicle importation accessible, straightforward and dependable, with transparent communication from your first enquiry until your vehicle is delivered.",
    ],
    highlights: [
      "Vehicles sourced to your needs and preferences",
      "Importation handled from enquiry to delivery",
      "Transparent communication at every step",
      "Professional, customer-focused service",
    ],
  },
  {
    slug: "electric-hybrid-vehicles",
    title: "Electric & Hybrid Vehicles",
    image: "/images/category-electric.jpg",
    excerpt:
      "Electric and hybrid vehicles including the BYD E7, Yuan Up, Seagull, Leopard, Sea Lion 06, Toyota Cross Hybrid and others.",
    overview: [
      "We supply electric and hybrid vehicles, including the BYD E7, BYD Yuan Up, BYD Seagull, BYD Leopard, BYD Sea Lion 06 and Toyota Cross Hybrid, along with other models.",
      "Tell us what you are looking for and we will share current availability, specifications and next steps, so you can decide with confidence.",
    ],
    highlights: [
      "BYD E7, Yuan Up and Seagull",
      "BYD Leopard and Sea Lion 06",
      "Toyota Cross Hybrid",
      "Other electric and hybrid models on request",
    ],
  },
  {
    slug: "accessories-spare-parts",
    title: "Accessories & Spare Parts",
    image: "/images/service-parts.jpg",
    excerpt:
      "Automotive accessories and spare parts to keep your vehicle performing and personalised to you.",
    overview: [
      "We supply automotive accessories and spare parts, so you can keep your vehicle in good condition and equip it the way you want.",
      "Send us your vehicle details and the part or accessory you need, and we will let you know the options available and the next steps.",
    ],
    highlights: [
      "Spare parts for your vehicle",
      "Automotive accessories",
      "Help identifying the right part",
      "Clear options before you commit",
    ],
  },
  {
    slug: "after-sales-support",
    title: "After-Sales Support",
    image: "/images/service-maintenance.jpg",
    excerpt:
      "Warranty and maintenance garage services to keep your vehicle running well after purchase.",
    overview: [
      "Our support continues after you drive away. We provide warranty service and maintenance garage services to keep your vehicle safe, reliable and running well.",
      "Get in touch to discuss your vehicle, its warranty and what it needs next — we will explain the work clearly before anything begins.",
    ],
    highlights: [
      "Warranty service",
      "Maintenance garage services",
      "Clear explanation of recommended work",
      "Transparent communication throughout",
    ],
  },
];

/** Amharic (am) version of `SERVICES`. */
export const SERVICES_AM: Service[] = [
  {
    slug: "vehicle-importing-sales",
    title: "የተሽከርካሪ ማስመጣት እና ሽያጭ",
    image: "/images/service-vehicle-sales.jpg",
    excerpt:
      "ፍላጎትዎን እና ምርጫዎን የሚያሟሉ ጥራት ያላቸውን ተሽከርካሪዎች በግልጽ እና ቀላል ሂደት እናፈላልጋለን፣ እናስመጣለን።",
    overview: [
      "የሚፈልጉትን ተሽከርካሪ እናገናኝዎታለን። የሚፈልጉትን ሥሪት፣ ሞዴል እና ምርጫዎች ይንገሩን፤ የሚስማማዎትን ጥራት ያለው ተሽከርካሪ እናፈላልጋለን፣ እናስመጣለን።",
      "ዓላማችን የተሽከርካሪ ማስመጣትን ተደራሽ፣ ቀላል እና አስተማማኝ ማድረግ ነው፤ ከመጀመሪያው ጥያቄዎ ጀምሮ ተሽከርካሪዎ እስኪደርስ ድረስ ግልጽ ግንኙነት እናደርጋለን።",
    ],
    highlights: [
      "እንደ ፍላጎትዎ እና ምርጫዎ የሚፈለጉ ተሽከርካሪዎች",
      "ከጥያቄ እስከ ርክክብ የማስመጣት ሂደት",
      "በእያንዳንዱ ደረጃ ግልጽ ግንኙነት",
      "ሙያዊ እና ደንበኛ ተኮር አገልግሎት",
    ],
  },
  {
    slug: "electric-hybrid-vehicles",
    title: "የኤሌክትሪክ እና ሃይብሪድ ተሽከርካሪዎች",
    image: "/images/category-electric.jpg",
    excerpt:
      "BYD E7፣ Yuan Up፣ Seagull፣ Leopard፣ Sea Lion 06፣ Toyota Cross Hybrid እና ሌሎችንም ጨምሮ የኤሌክትሪክ እና ሃይብሪድ ተሽከርካሪዎች።",
    overview: [
      "BYD E7፣ BYD Yuan Up፣ BYD Seagull፣ BYD Leopard፣ BYD Sea Lion 06 እና Toyota Cross Hybridን ጨምሮ የኤሌክትሪክ እና ሃይብሪድ ተሽከርካሪዎችን ከሌሎች ሞዴሎች ጋር እናቀርባለን።",
      "የሚፈልጉትን ይንገሩን፤ በአሁኑ ጊዜ ያሉትን ተሽከርካሪዎች፣ ዝርዝር መግለጫዎቻቸውን እና ቀጣይ እርምጃዎችን እናሳውቅዎታለን፤ በእርግጠኝነት እንዲወስኑ።",
    ],
    highlights: [
      "BYD E7፣ Yuan Up እና Seagull",
      "BYD Leopard እና Sea Lion 06",
      "Toyota Cross Hybrid",
      "ሌሎች የኤሌክትሪክ እና ሃይብሪድ ሞዴሎች በጥያቄ",
    ],
  },
  {
    slug: "accessories-spare-parts",
    title: "የመኪና መለዋወጫዎች እና ተጨማሪ ዕቃዎች",
    image: "/images/service-parts.jpg",
    excerpt: "ተሽከርካሪዎ በጥሩ ሁኔታ እንዲሠራ እና እንደ ምርጫዎ እንዲሆን የመኪና መለዋወጫዎች እና ተጨማሪ ዕቃዎች።",
    overview: [
      "ተሽከርካሪዎን በጥሩ ሁኔታ እንዲጠብቁ እና በሚፈልጉት መንገድ እንዲያሟሉ የመኪና መለዋወጫዎችን እና ተጨማሪ ዕቃዎችን እናቀርባለን።",
      "የተሽከርካሪዎን ዝርዝር እና የሚፈልጉትን መለዋወጫ ወይም ዕቃ ይላኩልን፤ ያሉትን አማራጮች እና ቀጣይ እርምጃዎችን እናሳውቅዎታለን።",
    ],
    highlights: [
      "ለተሽከርካሪዎ መለዋወጫዎች",
      "የመኪና ተጨማሪ ዕቃዎች",
      "ትክክለኛውን መለዋወጫ ለመለየት እገዛ",
      "ከመወሰንዎ በፊት ግልጽ አማራጮች",
    ],
  },
  {
    slug: "after-sales-support",
    title: "ከሽያጭ በኋላ ድጋፍ",
    image: "/images/service-maintenance.jpg",
    excerpt: "ተሽከርካሪዎ ከተገዛ በኋላም በጥሩ ሁኔታ እንዲሠራ የዋስትና እና የጋራዥ ጥገና አገልግሎቶች።",
    overview: [
      "ድጋፋችን ተሽከርካሪዎን ከወሰዱ በኋላም ይቀጥላል። ተሽከርካሪዎ ደህንነቱ የተጠበቀ፣ አስተማማኝ እና በጥሩ ሁኔታ የሚሠራ እንዲሆን የዋስትና አገልግሎት እና የጋራዥ ጥገና አገልግሎቶችን እንሰጣለን።",
      "ስለ ተሽከርካሪዎ፣ ስለ ዋስትናው እና ቀጣይ ስለሚያስፈልገው ለመወያየት ያግኙን — ሥራው ከመጀመሩ በፊት በግልጽ እናብራራለን።",
    ],
    highlights: [
      "የዋስትና አገልግሎት",
      "የጋራዥ ጥገና አገልግሎቶች",
      "የሚመከረውን ሥራ ግልጽ ማብራሪያ",
      "በሂደቱ ሁሉ ግልጽ ግንኙነት",
    ],
  },
];

const SERVICE_PROCESS_EN: ProcessStep[] = [
  {
    title: "Get in touch",
    description: "Send an enquiry or call us and tell us what you need.",
  },
  {
    title: "Discuss your needs",
    description: "We listen, ask the right questions and explain your options.",
  },
  {
    title: "Agree the plan",
    description: "You receive clear next steps before any commitment.",
  },
  {
    title: "Drive with confidence",
    description: "We stay available for questions and follow-up support.",
  },
];

const SERVICE_PROCESS_AM: ProcessStep[] = [
  {
    title: "ያግኙን",
    description: "ጥያቄ ይላኩ ወይም ይደውሉልን፤ የሚፈልጉትን ይንገሩን።",
  },
  {
    title: "ፍላጎትዎን እንወያያለን",
    description: "እናዳምጣለን፣ ትክክለኛ ጥያቄዎችን እንጠይቃለን፣ አማራጮችዎንም እናብራራለን።",
  },
  {
    title: "ዕቅዱን እንስማማለን",
    description: "ማንኛውንም ውሳኔ ከማድረግዎ በፊት ግልጽ ቀጣይ እርምጃዎችን ያገኛሉ።",
  },
  {
    title: "በእርግጠኝነት ያሽከርክሩ",
    description: "ለጥያቄዎች እና ለቀጣይ ድጋፍ ሁልጊዜ ዝግጁ ነን።",
  },
];

export function getServices(locale: Locale): Service[] {
  return locale === "am" ? SERVICES_AM : SERVICES;
}

export function getServiceProcess(locale: Locale): ProcessStep[] {
  return locale === "am" ? SERVICE_PROCESS_AM : SERVICE_PROCESS_EN;
}

export function getServiceBySlug(slug: string, locale: Locale): Service | undefined {
  return getServices(locale).find((service) => service.slug === slug);
}
