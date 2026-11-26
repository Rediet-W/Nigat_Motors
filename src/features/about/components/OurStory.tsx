import Image from "next/image";
import { Eyebrow, Reveal, Section } from "@/components/ui";
import { getI18n } from "@/i18n/server";
import { formatIndex } from "@/lib/format";
import { getAbout } from "../data/about";

/**
 * "Our story": who we are in a few lines, then a dated timeline with real
 * photos once milestones are provided in `data/about.ts`.
 */
export async function OurStory() {
  const { locale, t } = await getI18n();
  const about = getAbout(locale);

  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <Eyebrow className="mb-8">{t.about.story.eyebrow}</Eyebrow>
          <h2 className="type-display text-balance lg:text-[length:clamp(2.5rem,4vw,4.25rem)]">{about.intro.title}</h2>
          <p className="type-lead mt-8 text-steel">{about.intro.lead}</p>
        </Reveal>

        <ol className="border-t border-line lg:col-span-6 lg:col-start-7">
          {about.topics.map((topic, i) => (
            <Reveal as="li" key={topic.title} delay={i * 100} className="flex gap-6 border-b border-line py-8">
              <span className="type-number pt-1 text-sm text-accent">{formatIndex(i)}</span>
              <div>
                <h3 className="type-h3">{topic.title}</h3>
                <p className="mt-3 text-steel">{topic.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      {about.milestones.length > 0 && (
        <ol className="mt-20 grid gap-10 border-t border-line pt-12 md:grid-cols-2 lg:grid-cols-4">
          {about.milestones.map((milestone, i) => (
            <Reveal as="li" key={`${milestone.year}-${milestone.title}`} delay={i * 100}>
              {milestone.image && (
                <div className="relative mb-6 aspect-[4/3] overflow-hidden bg-bone">
                  <Image src={milestone.image.src} alt={milestone.image.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                </div>
              )}
              <p className="type-number text-accent">{milestone.year}</p>
              <h3 className="type-h4 mt-3">{milestone.title}</h3>
              <p className="mt-2 text-sm text-steel">{milestone.description}</p>
            </Reveal>
          ))}
        </ol>
      )}
    </Section>
  );
}
