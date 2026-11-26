import type { ReactNode } from "react";
import { getContact } from "@/constants/site";
import { getI18n } from "@/i18n/server";
import { ChatLinks, Eyebrow, Reveal, Section, SectionHeading } from "@/components/ui";
import { EnquiryFormFromQuery } from "./EnquiryFormFromQuery";

interface ContactLine {
  label: string;
  content: ReactNode;
}

/**
 * Contact page body: direct lines (labelled phones, chat, showroom, hours,
 * reply time) in a dark column beside the enquiry form, then the showroom
 * map once its embed URL is set in `constants/site.ts`.
 */
export async function ContactSection() {
  const { locale, t } = await getI18n();
  const contact = getContact(locale);

  const contactLines: ContactLine[] = [
    ...contact.phones.map((phone) => ({
      label: `${t.contact.telephone} · ${phone.label}`,
      content: (
        <a href={phone.href} className="transition-colors duration-500 hover:text-accent">
          {phone.number}
        </a>
      ),
    })),
    { label: t.contact.chat, content: <ChatLinks inverse className="mt-1" /> },
    {
      label: t.contact.email,
      content: (
        <a href={`mailto:${contact.email}`} className="break-all transition-colors duration-500 hover:text-accent">
          {contact.email}
        </a>
      ),
    },
    {
      label: t.contact.showroom,
      content: (
        <>
          {contact.address}
          {contact.landmark && <span className="mt-1 block text-base text-silver">{contact.landmark}</span>}
        </>
      ),
    },
    { label: t.contact.hours, content: contact.hours },
    ...(contact.replyTime ? [{ label: t.contact.replyTime, content: contact.replyTime }] : []),
  ];

  return (
    <>
      <Section id="enquiry" className="scroll-mt-(--header-height)">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <Reveal as="aside" className="lg:col-span-4">
            <div className="bg-ink p-8 text-paper md:p-10">
              <Eyebrow inverse className="mb-10">
                {t.contact.directLines}
              </Eyebrow>
              <dl className="space-y-8">
                {contactLines.map((line) => (
                  <div key={line.label} className="border-t border-line-inverse pt-5">
                    <dt className="type-eyebrow text-silver">{line.label}</dt>
                    <dd className="type-h4 mt-3">{line.content}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6">
            <SectionHeading
              eyebrow={t.contact.section.eyebrow}
              title={t.contact.section.title}
              lead={t.contact.section.lead}
            />
            <Reveal delay={150}>
              <EnquiryFormFromQuery />
            </Reveal>
          </div>
        </div>
      </Section>

      {contact.mapEmbedUrl && (
        <section aria-label={t.contact.mapTitle} className="bg-bone">
          <iframe
            src={contact.mapEmbedUrl}
            title={t.contact.mapTitle}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[min(60svh,480px)] w-full border-0"
          />
        </section>
      )}
    </>
  );
}
