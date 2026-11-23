import type { Locale } from "@/i18n/config";
import type { GalleryImage } from "@/types";

/**
 * PLACEHOLDER IMAGERY — representative automotive stock photography
 * (Unsplash). Replace with NF Car Importer's own showroom and vehicle photos.
 */
const IMAGES: { src: string; alt: Record<Locale, string> }[] = [
  { src: "/images/gallery-1.jpg", alt: { en: "Blue coupe parked in the desert", am: "በበረሃ ላይ የቆመ ሰማያዊ ኩፔ" } },
  { src: "/images/gallery-2.jpg", alt: { en: "Dark muscle car on an empty road", am: "ባዶ መንገድ ላይ ያለ ጥቁር የስፖርት መኪና" } },
  { src: "/images/gallery-3.jpg", alt: { en: "Blue coupe parked outside a building", am: "ከሕንፃ ውጭ የቆመ ሰማያዊ ኩፔ" } },
  { src: "/images/gallery-4.jpg", alt: { en: "Close-up of a grey car's front grille", am: "የግራጫ መኪና የፊት ፍርግርግ በቅርበት" } },
  { src: "/images/gallery-5.jpg", alt: { en: "Light blue compact car on a village street", am: "በመንደር መንገድ ላይ ያለች ፈዛዛ ሰማያዊ ትንሽ መኪና" } },
  { src: "/images/gallery-6.jpg", alt: { en: "White SUV on a desert track", am: "በበረሃ መንገድ ላይ ያለ ነጭ SUV" } },
  { src: "/images/gallery-7.jpg", alt: { en: "White electric car beside the mountains", am: "ከተራሮች አጠገብ ያለ ነጭ የኤሌክትሪክ መኪና" } },
  { src: "/images/gallery-8.jpg", alt: { en: "Purple sports car in a parking area", am: "በመኪና ማቆሚያ ያለ ሐምራዊ የስፖርት መኪና" } },
  { src: "/images/gallery-9.jpg", alt: { en: "Orange classic car parked on a street", am: "መንገድ ዳር የቆመ ብርቱካናማ ክላሲክ መኪና" } },
  { src: "/images/gallery-10.jpg", alt: { en: "Yellow sports car on the road", am: "መንገድ ላይ ያለ ቢጫ የስፖርት መኪና" } },
  { src: "/images/gallery-11.jpg", alt: { en: "Black estate car in a field", am: "በሜዳ ላይ ያለ ጥቁር መኪና" } },
  { src: "/images/gallery-12.jpg", alt: { en: "White electric sports car in a showroom", am: "በማሳያ ክፍል ውስጥ ያለ ነጭ የኤሌክትሪክ የስፖርት መኪና" } },
];

export function getGalleryImages(locale: Locale): GalleryImage[] {
  return IMAGES.map(({ src, alt }) => ({ src, alt: alt[locale] }));
}
