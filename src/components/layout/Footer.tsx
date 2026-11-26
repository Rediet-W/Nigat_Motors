import { cacheLife } from "next/cache";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { getNavigation } from "@/constants/navigation";
import { ROUTES } from "@/constants/routes";
import { CURRENT_SECTOR, getGroup } from "@/constants/nigat-group";
import { getContact, getSite, SOCIAL_LINKS } from "@/constants/site";
import { Link } from "@/i18n/Link";
import { getI18n } from "@/i18n/server";
import { ChatLinks, Container, Logo } from "@/components/ui";
import type { NavLink } from "@/types";
import { LanguageSwitcher } from "./LanguageSwitcher";

async function getCurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

function FooterColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <h2 className="type-eyebrow mb-6 text-silver">{title}</h2>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-paper/85 transition-colors duration-500 hover:text-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function Footer() {
  const year = await getCurrentYear();
  const { locale, t } = await getI18n();
  const nav = getNavigation(locale);
  const site = getSite(locale);
  const contact = getContact(locale);
  const group = getGroup(locale);

  return (
    <footer className="overflow-hidden bg-ink text-paper">
      <div className="relative isolate">
        {/* Brand Motion Loop pattern, kept subtle as a supporting texture */}
        <div
          aria-hidden
          className="motion-loop absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-steel-blue/10 lg:block"
        />

        {/* Directory */}
        <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-[22rem] text-silver">{t.footer.blurb}</p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="type-nav text-paper/85 transition-colors duration-500 hover:text-accent"
                  >
                    {locale === "am" ? social.labelAm : social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <FooterColumn title={t.footer.explore} links={nav.footerExplore} />
          </div>
          <div className="lg:col-span-3">
            <FooterColumn title={t.footer.services} links={nav.footerServices} />
          </div>
          <div className="lg:col-span-3">
            <h2 className="type-eyebrow mb-6 text-silver">{t.footer.contact}</h2>
            <ul className="space-y-3 text-paper/85">
              {contact.phones.map((phone) => (
                <li key={phone.href}>
                  <span className="text-silver">{phone.label}: </span>
                  <a href={phone.href} className="transition-colors duration-500 hover:text-accent">
                    {phone.number}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all transition-colors duration-500 hover:text-accent"
                >
                  {contact.email}
                </a>
              </li>
              <li className="text-silver">{contact.address}</li>
              <li className="text-silver">{contact.hours}</li>
            </ul>
            <ChatLinks inverse className="mt-6" />
          </div>
        </Container>
      </div>

      {/* Nigat Group: the parent company's sectors, each with its own website */}
      <nav aria-label={group.name} className="border-t border-line-inverse">
        <Container className="flex flex-col gap-4 py-6 text-sm lg:flex-row lg:items-center lg:justify-between">
          <h2 className="type-eyebrow text-silver">{group.name}</h2>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {group.sectors.map((sector) => {
              const current = sector.key === CURRENT_SECTOR;

              return (
                <li key={sector.key}>
                  {current ? (
                    <Link href={ROUTES.home} aria-current="page" className="text-accent">
                      {sector.name}
                    </Link>
                  ) : (
                    <a
                      href={sector.href}
                      className="group inline-flex items-center gap-1.5 text-paper/85 transition-colors duration-500 hover:text-accent"
                    >
                      {sector.name}
                      <ArrowUpRight
                        aria-hidden
                        className="size-3.5 transition-transform duration-500 ease-drive group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </Container>
      </nav>

      <div className="border-t border-line-inverse">
        <Container className="flex flex-col gap-4 py-6 text-sm text-silver sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.rights(year, site.legalName, site.name)}</p>
          <div className="flex items-center gap-8">
            <LanguageSwitcher />
            <a
              href="#main-content"
              className="type-nav inline-flex items-center gap-2 transition-colors hover:text-paper"
            >
              {t.footer.backToTop} <ArrowUp aria-hidden className="size-3.5" />
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
