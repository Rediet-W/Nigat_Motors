import { Container, Eyebrow } from "@/components/ui";
import { getI18n } from "@/i18n/server";
import { getAbout } from "../data/about";

/** The seven brand keywords from the guideline, shown once (About) as one static line. */
export async function BrandValues() {
  const { locale, t } = await getI18n();
  const { keywords } = getAbout(locale);

  return (
    <section aria-label={t.about.values.label} className="bg-ink py-12 text-paper lg:py-16">
      <Container className="flex flex-col gap-6 lg:flex-row lg:items-baseline lg:gap-12">
        <Eyebrow inverse className="shrink-0">
          {t.about.values.eyebrow}
        </Eyebrow>
        <ul className="type-h4 flex flex-wrap gap-x-3 gap-y-2">
          {keywords.map((keyword, i) => (
            <li key={keyword} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden className="size-1.5 rounded-full bg-accent" />}
              {keyword}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
