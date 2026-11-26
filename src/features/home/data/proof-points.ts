import type { Locale } from "@/i18n/config";

/**
 * Home page "Why us": three proof points.
 *
 * The statements below only repeat facts the site already states (models
 * offered, importing end to end, warranty and garage service). Each has an
 * empty `figure`. CONFIRM the real numbers with Nigat (e.g. vehicles
 * delivered, years importing, warranty length) and fill them in; a figure
 * then appears above its statement. Never estimate these numbers.
 */
export interface ProofPoint {
  /** Verified number, e.g. "350+" or "2 years". Hidden while empty. */
  figure?: string;
  title: string;
  description: string;
}

const PROOF_POINTS: Record<Locale, ProofPoint[]> = {
  en: [
    {
      title: "Electric & hybrid specialists",
      description: "BYD Seagull, Yuan Up, E7, Sea Lion 06, Leopard and the Toyota Corolla Cross Hybrid, plus other models on request.",
    },
    {
      title: "Enquiry to delivery, handled",
      description: "We source the vehicle to your preferences and manage the importation, keeping you informed at every step.",
    },
    {
      title: "Support after you drive away",
      description: "Warranty service, maintenance garage services, accessories and spare parts from the same team.",
    },
  ],
  am: [
    {
      title: "የኤሌክትሪክ እና ሃይብሪድ ባለሙያዎች",
      description: "BYD Seagull፣ Yuan Up፣ E7፣ Sea Lion 06፣ Leopard እና Toyota Corolla Cross Hybrid፣ እንዲሁም ሌሎች ሞዴሎች በጥያቄ።",
    },
    {
      title: "ከጥያቄ እስከ ርክክብ",
      description: "ተሽከርካሪውን እንደ ምርጫዎ እናፈላልጋለን፣ ማስመጣቱንም እንመራለን፤ በእያንዳንዱ ደረጃ መረጃ እንሰጥዎታለን።",
    },
    {
      title: "ከግዢ በኋላም ድጋፍ",
      description: "የዋስትና አገልግሎት፣ የጋራዥ ጥገና፣ ተጨማሪ ዕቃዎች እና መለዋወጫዎች ከአንድ ቡድን።",
    },
  ],
};

export function getProofPoints(locale: Locale): ProofPoint[] {
  return PROOF_POINTS[locale];
}
