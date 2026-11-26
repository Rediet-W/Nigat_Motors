import { Phone } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { getContact } from "@/constants/site";
import { getI18n } from "@/i18n/server";
import { ButtonLink, ChatLinks, Container, TextLink } from "@/components/ui";

interface CtaBandProps {
  /** Enquiry topic to pre-select on the contact page (service or vehicle slug). */
  interest?: string;
  /** Pre-written WhatsApp message (e.g. naming a vehicle). */
  chatMessage?: string;
  /** Show a link to the FAQs (used once, on the home page). */
  showFaqLink?: boolean;
}

/**
 * Slim closing band used on every page except Contact: one line, the phone
 * number, Telegram / WhatsApp and an "Enquire" button. The full enquiry form
 * lives on the Contact page only.
 */
export async function CtaBand({ interest, chatMessage, showFaqLink }: CtaBandProps) {
  const { locale, t } = await getI18n();
  const contact = getContact(locale);

  return (
    <section className="bg-graphite py-12 text-paper lg:py-16">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[36rem]">
          <h2 className="type-h3 text-balance">{t.ctaBand.title}</h2>
          <a
            href={contact.phoneHref}
            className="type-nav mt-4 inline-flex items-center gap-2 text-silver transition-colors hover:text-paper"
          >
            <Phone aria-hidden className="size-4 text-accent" />
            {contact.phone}
          </a>
          {showFaqLink && (
            <TextLink href={ROUTES.faqs} className="mt-4 ml-8">
              {t.ctaBand.faqs}
            </TextLink>
          )}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <ChatLinks inverse message={chatMessage} />
          <ButtonLink href={interest ? ROUTES.enquire(interest) : ROUTES.contact}>{t.ctaBand.enquire}</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
