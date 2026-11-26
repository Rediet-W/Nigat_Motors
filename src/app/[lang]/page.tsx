import { CtaBand } from "@/features/contact";
import { HeroSection, WhyUs } from "@/features/home";
import { ServicesIndex } from "@/features/services";
import { FeaturedVehicles } from "@/features/vehicles";

/**
 * Home: hero → featured vehicles → services → short "why us" → CTA band.
 * Kept to 3–4 scrolls; values, FAQs and the full enquiry form live on their
 * own pages (About, FAQs, Contact).
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedVehicles />
      <ServicesIndex tone="paper" />
      <WhyUs />
      <CtaBand showFaqLink />
    </>
  );
}
