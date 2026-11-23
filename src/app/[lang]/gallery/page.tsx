import type { Metadata } from "next";
import { PageHero } from "@/components/layout";
import { Section } from "@/components/ui";
import { ROUTES } from "@/constants/routes";
import { EnquiryCta } from "@/features/contact";
import { GalleryGrid } from "@/features/gallery";
import { getI18n } from "@/i18n/server";
import { createMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();
  return createMetadata({ locale, ...t.meta.pages.gallery, path: ROUTES.gallery });
}

export default async function GalleryPage() {
  const { t } = await getI18n();

  return (
    <>
      <PageHero
        eyebrow={t.gallery.hero.eyebrow}
        title={t.gallery.hero.title}
        image="/images/hero-gallery.jpg"
        size="compact"
      />
      <Section>
        <GalleryGrid />
      </Section>
      <EnquiryCta />
    </>
  );
}
