export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem extends NavLink {
  children?: NavLink[];
}

export interface Feature {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  overview: string[];
  highlights: string[];
  /**
   * CONFIRM: concrete details from Nigat, shown as a spec sheet on the
   * service page, e.g. { label: "Typical timeline", value: "6–10 weeks" },
   * "What's included", "Warranty", "Parts brands stocked". Hidden while empty.
   */
  facts?: { label: string; value: string }[];
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqGroup {
  /** Stable anchor id, shared across languages. */
  id: string;
  title: string;
  items: FaqItem[];
}

export interface EnquiryOption {
  value: string;
  label: string;
}
