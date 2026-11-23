"use client";

import { useCallback, useState } from "react";
import { Phone } from "lucide-react";
import { getNavigation } from "@/constants/navigation";
import { getContact } from "@/constants/site";
import { useOverlay } from "@/hooks/useOverlay";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/cn";
import { ButtonLink, Container, Logo } from "@/components/ui";
import { DesktopNav } from "./DesktopNav";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNav, MobileNavToggle } from "./MobileNav";
import { SectorSwitcher } from "./SectorSwitcher";

const MOBILE_NAV_ID = "mobile-navigation";

/**
 * Fixed header: transparent over the opening photograph, smoked glass once
 * scrolled, slides away while scrolling down and returns on scroll up.
 */
export function Header() {
  const locale = useLocale();
  const nav = getNavigation(locale);
  const contact = getContact(locale);
  const { scrolled, hidden } = useScrollHeader();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useOverlay(menuOpen, closeMenu);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 text-paper transition-[transform,background-color,border-color] duration-700 ease-drive",
          "border-b",
          scrolled || menuOpen
            ? "border-line-inverse bg-ink/85 backdrop-blur-xl"
            : "border-transparent bg-linear-to-b from-ink/60 to-transparent",
          hidden && !menuOpen && "-translate-y-full",
        )}
      >
        <Container className="flex h-(--header-height) items-center justify-between gap-8">
          <Logo />
          <DesktopNav items={nav.main} />
          <div className="hidden h-full items-center gap-8 lg:flex">
            <SectorSwitcher />
            {/* <a 
            href={contact.phoneHref}
            className="type-nav hidden items-center gap-2 text-silver transition-colors hover:text-paper xl:flex"
          >
            <Phone aria-hidden className="size-3.5 text-accent" />
            {contact.phone}
          </a>*/}
            <LanguageSwitcher />
            <ButtonLink
              href={nav.cta.href}
              variant="outline"
              className="min-h-11 px-5"
            >
              {nav.cta.label}
            </ButtonLink>
          </div>
          <div className="flex items-center gap-4 lg:hidden">
            <LanguageSwitcher />
            <MobileNavToggle
              open={menuOpen}
              controls={MOBILE_NAV_ID}
              onToggle={() => setMenuOpen((open) => !open)}
            />
          </div>
        </Container>
      </header>
      {/* Rendered outside <header>: its backdrop-filter would otherwise trap this fixed overlay. */}
      <MobileNav
        id={MOBILE_NAV_ID}
        open={menuOpen}
        items={nav.main}
        cta={nav.cta}
        onNavigate={closeMenu}
      />
    </>
  );
}
