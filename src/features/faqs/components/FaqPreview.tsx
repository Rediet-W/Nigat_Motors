import { ROUTES } from "@/constants/routes";
import { Accordion, Reveal, Section, SectionHeading, TextLink } from "@/components/ui";
import { getI18n } from "@/i18n/server";
import { getFeaturedFaqs } from "../data/faqs";

interface FaqPreviewProps {
  index?: string;
}

/** Two-column FAQ: sticky heading on the left, hairline accordion on the right. */
export async function FaqPreview({ index }: FaqPreviewProps) {
  const { locale, t } = await getI18n();

  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4 lg:self-start lg:sticky lg:top-[calc(var(--header-height)+2rem)]">
          <SectionHeading
            index={index}
            eyebrow={t.faqs.preview.eyebrow}
            title={t.faqs.preview.title}
            lead={t.faqs.preview.lead}
            action={<TextLink href={ROUTES.faqs}>{t.faqs.preview.all}</TextLink>}
            flush
          />
        </div>
        <Reveal delay={150} className="lg:col-span-7 lg:col-start-6">
          <Accordion items={getFeaturedFaqs(locale)} />
        </Reveal>
      </div>
    </Section>
  );
}
