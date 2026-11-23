import { Eyebrow, TextLink } from "@/components/ui";
import type { NavLink } from "@/types";
import { getI18n } from "@/i18n/server";
import { getAbout } from "../data/about";
import { AboutTopics } from "./AboutTopics";

interface AboutManifestoProps {
  index?: string;
  /** Optional closing link (e.g. "More about us" on the home page). */
  cta?: NavLink;
}

/** Brand introduction: half-screen pinned photo beside the intro and topics. */
export async function AboutManifesto({ index, cta }: AboutManifestoProps) {
  const { locale, t } = await getI18n();
  const about = getAbout(locale);

  return (
    <section className="bg-paper text-ink">
      <AboutTopics
        topics={about.topics}
        intro={
          <>
            <Eyebrow index={index} className="mb-8">
              {t.about.eyebrow}
            </Eyebrow>
            <h2 className="type-display text-balance lg:text-[length:clamp(2.5rem,4vw,4.75rem)]">
              {about.intro.title}
            </h2>
            <p className="type-lead mt-8 text-steel">{about.intro.lead}</p>
          </>
        }
        footer={cta && <TextLink href={cta.href}>{cta.label}</TextLink>}
      />
    </section>
  );
}
