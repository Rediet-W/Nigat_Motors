import { Fragment } from "react";
import { Container, Eyebrow } from "@/components/ui";
import { getI18n } from "@/i18n/server";
import { cn } from "@/lib/cn";
import { getAbout } from "../data/about";

/** Small rim-inspired crescent used between the keywords (from the Motion Loop form). */
function Crescent() {
  return (
    <svg aria-hidden viewBox="0 0 50 26" className="mx-[clamp(1.5rem,3.5vw,3.5rem)] h-[clamp(0.9rem,1.6vw,1.6rem)] w-auto shrink-0 text-accent">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M25 0a25 13 0 1 1 0 26a25 13 0 1 1 0-26ZM27 8.5a19 8 0 1 0 0 16a19 8 0 1 0 0-16Z"
      />
    </svg>
  );
}

/**
 * The seven brand keywords from the guideline, set as a slow, continuous
 * ticker — the guideline's Motion Elements are "best expressed through
 * movement". Words alternate solid and outlined. Screen readers get a plain
 * list; the moving copy is decorative. Pauses on hover and stays still for
 * visitors who prefer reduced motion.
 */
export async function BrandValues() {
  const { locale, t } = await getI18n();
  const { keywords } = getAbout(locale);

  // The keyword list is repeated to an even length, so the solid / outlined
  // alternation stays unbroken where the loop joins.
  const words = keywords.length % 2 === 0 ? keywords : [...keywords, ...keywords];

  const sequence = (
    <div className="flex shrink-0 items-center">
      {words.map((keyword, index) => (
        <Fragment key={`${keyword}-${index}`}>
          <span
            className={cn(
              "type-display whitespace-nowrap",
              index % 2 === 1 && "text-transparent [-webkit-text-stroke:1px_var(--color-silver)]",
            )}
          >
            {keyword}
          </span>
          <Crescent />
        </Fragment>
      ))}
    </div>
  );

  return (
    <section aria-label={t.about.values.label} className="overflow-hidden bg-ink py-14 text-paper lg:py-20">
      <Container>
        <Eyebrow inverse>{t.about.values.eyebrow}</Eyebrow>
        <ul className="sr-only">
          {keywords.map((keyword) => (
            <li key={keyword}>{keyword}</li>
          ))}
        </ul>
      </Container>

      <div aria-hidden className="group mt-10 flex select-none lg:mt-14">
        <div className="animate-marquee flex w-max group-hover:[animation-play-state:paused]">
          {sequence}
          {sequence}
        </div>
      </div>
    </section>
  );
}
