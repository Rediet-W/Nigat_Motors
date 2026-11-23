import { Mail, Phone } from "lucide-react";
import { getContact } from "@/constants/site";
import { getI18n } from "@/i18n/server";
import { MotionElement, Reveal, Section, SectionHeading } from "@/components/ui";
import { EnquiryForm } from "./EnquiryForm";

interface EnquiryCtaProps {
  index?: string;
}

/** Closing enquiry band: statement and direct lines on the left, form on the right. */
export async function EnquiryCta({ index }: EnquiryCtaProps) {
  const { locale, t } = await getI18n();
  const contact = getContact(locale);

  return (
    <Section tone="graphite" className="relative isolate overflow-hidden">
      <MotionElement className="absolute -bottom-48 -left-64 -z-10 w-[56rem] max-w-none opacity-40" />
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionHeading
            inverse
            index={index}
            eyebrow={t.contact.cta.eyebrow}
            title={t.contact.cta.title}
            lead={t.contact.cta.lead}
            flush
          />
          <Reveal delay={200} className="mt-12 space-y-4 border-t border-line-inverse pt-8">
            <a
              href={contact.phoneHref}
              className="flex items-center gap-4 text-paper transition-colors hover:text-accent"
            >
              <Phone aria-hidden className="size-4 text-accent" />
              <span className="type-h4">{contact.phone}</span>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-4 break-all text-paper transition-colors hover:text-accent"
            >
              <Mail aria-hidden className="size-4 shrink-0 text-accent" />
              <span className="type-h4">{contact.email}</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:col-span-6 lg:col-start-7">
          <EnquiryForm inverse />
        </Reveal>
      </div>
    </Section>
  );
}
