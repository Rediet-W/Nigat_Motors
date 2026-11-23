import type { Metadata } from "next";
import { PageHero } from "@/components/layout";
import { ROUTES } from "@/constants/routes";
import { EnquiryCta } from "@/features/contact";
import { FaqList } from "@/features/faqs";
import { getI18n } from "@/i18n/server";
import { createMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();
  return createMetadata({ locale, ...t.meta.pages.faqs, path: ROUTES.faqs });
}

export default async function FaqsPage() {
  const { t } = await getI18n();

  return (
    <>
      <PageHero
        eyebrow={t.faqs.hero.eyebrow}
        title={t.faqs.hero.title}
        image="/images/hero-faqs.jpg"
        size="compact"
      />
      <FaqList />
      <EnquiryCta />
    </>
  );
}
