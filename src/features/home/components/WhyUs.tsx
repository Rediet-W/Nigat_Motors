import { Reveal, Section, SectionHeading } from "@/components/ui";
import { getI18n } from "@/i18n/server";
import { getProofPoints } from "../data/proof-points";

/** Short "why us": three proof points, each with a verified figure once confirmed. */
export async function WhyUs() {
  const { locale, t } = await getI18n();

  return (
    <Section tone="ink">
      <SectionHeading inverse eyebrow={t.home.why.eyebrow} title={t.home.why.title} />
      <ol className="grid border-t border-line-inverse md:grid-cols-3">
        {getProofPoints(locale).map((point, i) => (
          <Reveal
            as="li"
            key={point.title}
            delay={i * 120}
            className="border-b border-line-inverse py-8 md:border-b-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0"
          >
            {point.figure && <p className="type-display text-accent">{point.figure}</p>}
            <h3 className="type-h3 mt-4 first:mt-0">{point.title}</h3>
            <p className="mt-3 max-w-[22rem] text-silver">{point.description}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
