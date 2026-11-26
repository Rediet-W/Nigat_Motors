"use client";

import { Link } from "@/i18n/Link";
import { useState, type CSSProperties } from "react";
import { ArrowUpRight, Phone, Plus } from "lucide-react";
import { CURRENT_SECTOR, getGroup } from "@/constants/nigat-group";
import { ROUTES } from "@/constants/routes";
import { getContact } from "@/constants/site";
import { useI18n } from "@/i18n/LocaleProvider";
import type { NavItem, NavLink } from "@/types";
import { cn } from "@/lib/cn";
import { ButtonLink, ChatLinks, Container } from "@/components/ui";
import { ActivePath, isActivePath } from "./ActivePath";

interface MobileNavToggleProps {
  open: boolean;
  controls: string;
  onToggle: () => void;
}

/** Two-line toggle that crosses into an X. */
export function MobileNavToggle({ open, controls, onToggle }: MobileNavToggleProps) {
  const { t } = useI18n();
  const line = "absolute left-1/2 h-px w-6 -translate-x-1/2 bg-current transition-all duration-500 ease-drive";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={controls}
      aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
      className="relative flex size-11 items-center justify-center border border-line-inverse lg:hidden"
    >
      <span className={cn(line, open ? "top-1/2 rotate-45" : "top-[42%]")} />
      <span className={cn(line, open ? "top-1/2 -rotate-45" : "top-[58%]")} />
    </button>
  );
}

interface MobileNavProps {
  id: string;
  open: boolean;
  items: NavItem[];
  cta: NavLink;
  onNavigate: () => void;
}

const stagger = (index: number) => ({ animationDelay: `${120 + index * 60}ms` }) as CSSProperties;

/**
 * Full-screen menu (< 1024px) with large links. Its contents mount the first
 * time the menu opens, so the page markup carries the main navigation once.
 */
export function MobileNav({ id, open, items, cta, onNavigate }: MobileNavProps) {
  const { locale, t } = useI18n();
  const group = getGroup(locale);
  const contact = getContact(locale);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  if (open && !mounted) setMounted(true);

  return (
    <div
      id={id}
      inert={!open}
      className={cn(
        "fixed inset-0 z-40 overflow-y-auto bg-ink pt-(--header-height) text-paper transition-[opacity,visibility] duration-500 ease-drive lg:hidden",
        open ? "visible opacity-100" : "invisible opacity-0",
      )}
    >
      {mounted && (
      <Container className="flex min-h-full flex-col justify-between gap-12 py-10">
        <nav aria-label={t.nav.mobileLabel}>
          <ActivePath>
            {(pathname) => (
              <ul>
                {items.map((item, index) => {
                  const active = isActivePath(pathname, item.href);
                  const isExpanded = expanded === item.href;

                  return (
                    <li
                      key={item.href}
                      className={cn("border-b border-line-inverse", open && "animate-rise")}
                      style={stagger(index)}
                    >
                      <div className="flex items-center gap-4">
                        <Link
                          href={item.href}
                          onClick={onNavigate}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "type-menu flex-1 py-4",
                            active ? "text-accent" : "text-paper",
                          )}
                        >
                          {item.label}
                        </Link>
                        {item.children && (
                          <button
                            type="button"
                            onClick={() => setExpanded(isExpanded ? null : item.href)}
                            aria-expanded={isExpanded}
                            aria-label={isExpanded ? t.nav.hideChildren(item.label) : t.nav.showChildren(item.label)}
                            className="flex size-10 items-center justify-center border border-line-inverse"
                          >
                            <Plus
                              aria-hidden
                              className={cn("size-4 transition-transform duration-500", isExpanded && "rotate-45")}
                            />
                          </button>
                        )}
                      </div>
                      {item.children && isExpanded && (
                        <ul className="pb-5 pl-4">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={onNavigate}
                                aria-current={pathname === child.href ? "page" : undefined}
                                className="type-nav block py-2.5 text-silver aria-[current=page]:text-accent"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </ActivePath>
        </nav>

        <div className={cn("space-y-6", open && "animate-rise")} style={stagger(items.length)}>
          <nav aria-label={group.name}>
            <p className="type-eyebrow mb-3 text-silver">{group.name}</p>
            <ul className="border-t border-line-inverse">
              {group.sectors.map((sector) => {
                const current = sector.key === CURRENT_SECTOR;
                const itemClass = "type-nav flex min-h-11 items-center justify-between gap-3 border-b border-line-inverse py-3";

                return (
                  <li key={sector.key}>
                    {current ? (
                      <Link href={ROUTES.home} onClick={onNavigate} aria-current="page" className={cn(itemClass, "text-accent")}>
                        {sector.name}
                        <span className="type-eyebrow">{t.nav.youAreHere}</span>
                      </Link>
                    ) : (
                      <a href={sector.href} className={cn(itemClass, "text-silver")}>
                        {sector.name}
                        <ArrowUpRight aria-hidden className="size-4 shrink-0" />
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
          <a href={contact.phoneHref} className="flex items-center gap-3 text-silver">
            <Phone aria-hidden className="size-4 text-accent" /> {contact.phone}
          </a>
          <ChatLinks inverse />
          <ButtonLink href={cta.href} onClick={onNavigate} className="w-full">
            {cta.label}
          </ButtonLink>
        </div>
      </Container>
      )}
    </div>
  );
}
