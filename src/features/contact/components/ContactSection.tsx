import type { ReactNode } from "react";
import { getContact } from "@/constants/site";
import { getI18n } from "@/i18n/server";
import { formatIndex } from "@/lib/format";
import { Eyebrow, Reveal, Section, SectionHeading } from "@/components/ui";
import { EnquiryFormFromQuery } from "./EnquiryFormFromQuery";

interface ContactLine {
  label: string;
  content: ReactNode;
}

/** Contact page body: direct lines in a dark column beside the enquiry form. */
export async function ContactSection() {
  const { locale, t } = await getI18n();
  const contact = getContact(locale);

  const contactLines: ContactLine[] = [
  {
    label: t.contact.telephone,
    content: (
      <>
        <a href={contact.phoneHref} className="transition-colors duration-500 hover:text-accent">
          {contact.phone}
        </a>
        <br />
        <a href={contact.altPhoneHref} className="transition-colors duration-500 hover:text-accent">
          {contact.altPhone}
        </a>
      </>
    ),
  },
  {
    label: t.contact.email,
    content: (
      <a href={`mailto:${contact.email}`} className="break-all transition-colors duration-500 hover:text-accent">
        {contact.email}
      </a>
    ),
  },
  { label: t.contact.showroom, content: contact.address },
  { label: t.contact.hours, content: contact.hours },
  ];

  return (
    <Section id="enquiry" className="scroll-mt-(--header-height)">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <Reveal as="aside" className="lg:col-span-4">
          <div className="bg-ink p-8 text-paper md:p-10">
            <Eyebrow inverse className="mb-10">
              {t.contact.directLines}
            </Eyebrow>
            <dl className="space-y-8">
              {contactLines.map((line, i) => (
                <div key={line.label} className="border-t border-line-inverse pt-5">
                  <dt className="type-eyebrow flex gap-3 text-silver">
                    <span className="text-accent">{formatIndex(i)}</span>
                    {line.label}
                  </dt>
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
  );
}
