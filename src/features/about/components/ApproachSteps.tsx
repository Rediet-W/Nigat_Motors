import { NumberedSteps, Section, SectionHeading } from "@/components/ui";
import { getI18n } from "@/i18n/server";
import { getAbout } from "../data/about";

interface ApproachStepsProps {
  index?: string;
}

/** Three-stage approach rendered as a numbered route. */
export async function ApproachSteps({ index }: ApproachStepsProps) {
  const { locale, t } = await getI18n();

  return (
    <Section tone="graphite">
      <SectionHeading
        inverse
        index={index}
        eyebrow={t.about.approach.eyebrow}
        title={t.about.approach.title}
        lead={t.about.approach.lead}
        layout="split"
      />
      <NumberedSteps steps={getAbout(locale).approachSteps} inverse />
    </Section>
  );
}
