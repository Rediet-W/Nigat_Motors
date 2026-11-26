/**
 * Background slides for the home hero. Purely decorative: the headline and
 * calls to action stay fixed while the backdrop rotates.
 *
 * Video: Mixkit #52427 (Mixkit Stock Video Free License). Images: Unsplash.
 * PLACEHOLDER: replace with a short loop of NF Car Importer's real vehicles
 * (showroom, arrival at port or yard, customer handover) when supplied.
 */
export interface HeroSlide {
  /** Short description of the slide (also its alt text). */
  label: string;
  image: string;
  /** Optional looping video; `image` is its poster and reduced-motion fallback. */
  video?: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    label: "Vehicle driving on the open road",
    image: "/images/hero-home.jpg",
    video: "/videos/hero-drive.mp4",
  },
  { label: "New vehicle on display", image: "/images/hero-vehicles.jpg" },
  { label: "Vehicle in the workshop for servicing", image: "/images/hero-services.jpg" },
  { label: "Modern vehicle interior", image: "/images/hero-about.jpg" },
];

/** Time each slide stays on screen, in milliseconds. */
export const HERO_SLIDE_DURATION = 7000;
