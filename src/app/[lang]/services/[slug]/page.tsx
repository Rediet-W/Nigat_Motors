import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout";
import { ROUTES } from "@/constants/routes";
import { EnquiryCta } from "@/features/contact";
import { getServiceBySlug, SERVICES, ServiceDetail, ServicesIndex } from "@/features/services";
import { getI18n } from "@/i18n/server";
import { createMetadata } from "@/lib/metadata";

/**
 * Every service is prerendered (in every language) from `generateStaticParams`.
 * Unknown slugs render the not-found page (with a `noindex` tag) via `notFound()`.
 */
export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { locale } = await getI18n();
  const service = getServiceBySlug(slug, locale);
  if (!service) return {};

  return createMetadata({
    locale,
    title: service.title,
    description: service.excerpt,
    path: ROUTES.service(service.slug),
  });
}

export default async function ServicePage({ params }: PageProps<"/[lang]/services/[slug]">) {
  const { slug } = await params;
  const { locale, t } = await getI18n();
  const service = getServiceBySlug(slug, locale);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow={t.common.service}
        title={service.title}
        lead={service.excerpt}
        image={service.image}
        trail={[{ label: t.nav.services, href: ROUTES.services }]}
      />
      <ServiceDetail service={service} />
      <ServicesIndex
        eyebrow={t.services.index.moreEyebrow}
        title={t.services.index.moreTitle}
        excludeSlug={service.slug}
      />
      <EnquiryCta />
    </>
  );
}
