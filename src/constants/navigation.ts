import { getServices } from "@/features/services/data/services";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { NavItem, NavLink } from "@/types";
import { SHOW_GALLERY } from "./features";
import { ROUTES } from "./routes";

/**
 * Navigation for `locale`. Hrefs are locale-free (`/about`); the i18n `Link`
 * adds the `/am` prefix when rendering in Amharic.
 */
export function getNavigation(locale: Locale) {
  const { nav } = getDictionary(locale);

  const serviceLinks: NavLink[] = getServices(locale).map((service) => ({
    label: service.title,
    href: ROUTES.service(service.slug),
    description: service.excerpt,
  }));

  const gallery: NavItem[] = SHOW_GALLERY ? [{ label: nav.gallery, href: ROUTES.gallery }] : [];

  const main: NavItem[] = [
    { label: nav.home, href: ROUTES.home },
    { label: nav.vehicles, href: ROUTES.vehicles },
    { label: nav.services, href: ROUTES.services, children: serviceLinks },
    { label: nav.about, href: ROUTES.about },
    ...gallery,
    { label: nav.faqs, href: ROUTES.faqs },
    { label: nav.contact, href: ROUTES.contact },
  ];

  const footerExplore: NavLink[] = [
    { label: nav.home, href: ROUTES.home },
    { label: nav.vehicles, href: ROUTES.vehicles },
    { label: nav.about, href: ROUTES.about },
    ...gallery,
    { label: nav.faqs, href: ROUTES.faqs },
    { label: nav.contact, href: ROUTES.contact },
  ];

  return {
    main,
    cta: { label: nav.enquire, href: ROUTES.contact } satisfies NavLink,
    footerExplore,
    footerServices: serviceLinks,
  };
}
