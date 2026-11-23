import { Reveal, Section, SectionHeading } from "@/components/ui";
import { getI18n } from "@/i18n/server";
import { formatIndex } from "@/lib/format";
import { getAbout } from "../data/about";

interface VisionMissionProps {
  index?: string;
}

/**
 * Brand Core from the guideline: the brand essence as the opening line, then
 * the vision and mission side by side as two editorial statements. A corner
 * of the Motion Loop pattern sits quietly behind.
 */
export async function VisionMission({ index }: VisionMissionProps) {
  const { locale, t } = await getI18n();
  const about = getAbout(locale);
  const statements = [
    { label: t.about.visionMission.vision, text: about.vision },
    { label: t.about.visionMission.mission, text: about.mission },
  ];

  return (
    <Section tone="bone" className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="absolute right-0 bottom-0 -z-10 h-2/3 w-2/3 [mask-image:linear-gradient(to_top_left,#000,transparent_70%)] lg:w-1/2"
      >
        <div className="motion-loop size-full bg-steel-blue/12" />
      </div>

      <SectionHeading
        index={index}
        eyebrow={t.about.visionMission.eyebrow}
        title={t.about.visionMission.title}
        lead={
          <>
            <span className="type-eyebrow mb-3 block text-accent">{t.about.visionMission.essence}</span>
            <span className="text-ink">“{about.essence}”</span>
          </>
        }
        layout="split"
      />

      <div className="grid border-t border-line md:grid-cols-2">
        {statements.map((statement, i) => (
          <Reveal
            as="article"
            key={statement.label}
            delay={i * 120}
            className="border-b border-line py-10 md:border-b-0 md:py-14 md:even:border-l md:even:pl-10 md:odd:pr-10 lg:even:pl-16 lg:odd:pr-16"
          >
            <p className="type-eyebrow flex items-center gap-3 text-steel">
              <span className="type-number text-accent">{formatIndex(i)}</span>
              <span aria-hidden className="h-px w-8 bg-accent" />
              {statement.label}
            </p>
            <h3 className="sr-only">{statement.label}</h3>
            <p className="mt-8 max-w-[36rem] text-[clamp(1.25rem,1.9vw,1.75rem)] leading-[1.5] text-pretty text-ink">
              {statement.text}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
