import Image from "next/image";
import { Eyebrow, Reveal, Section, SpecList } from "@/components/ui";
import { getI18n } from "@/i18n/server";
import logoMark from "../../../../public/images/logo.png";
import { getAbout } from "../data/about";

interface NameAndMarkProps {
  index?: string;
}

/**
 * The meaning behind the name ("Bringer of Dawn") and the logo concept: the
 * NF symbol presented on its own, unaltered (per the guideline's do's and
 * don'ts), framed by the Motion Loop pattern, beside the story and a short
 * key to what each part of the mark stands for.
 */
export async function NameAndMark({ index }: NameAndMarkProps) {
  const { locale, t } = await getI18n();
  const { name } = getAbout(locale);

  return (
    <Section tone="ink">
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <Reveal variant="fade" className="lg:col-span-5">
          <figure className="relative isolate flex aspect-square items-center justify-center overflow-hidden border border-line-inverse bg-graphite">
            {/* Pattern framed around the edges; the centre stays clear as the logo's exclusion zone. */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 [mask-image:radial-gradient(closest-side,transparent_62%,#000_100%)]"
            >
              <div className="motion-loop size-full bg-steel-blue/25" />
            </div>
            <Image
              src={logoMark}
              alt={t.about.name.markAlt}
              sizes="(min-width: 1024px) 30vw, 70vw"
              className="h-auto w-[62%]"
            />
          </figure>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <Eyebrow index={index} inverse className="mb-6 lg:mb-8">
              {t.about.name.eyebrow}
            </Eyebrow>
            <h2 className="type-display text-balance">{name.title}</h2>
          </Reveal>
          <Reveal delay={120}>
            {name.paragraphs.map((paragraph) => (
              <p key={paragraph} className="type-lead mt-6 text-silver first:mt-8">
                {paragraph}
              </p>
            ))}
          </Reveal>
          <Reveal delay={200}>
            <SpecList inverse className="mt-10" rows={name.marks} />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
