import type { MetadataRoute } from "next";
import { SHOW_GALLERY } from "@/constants/features";
import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/site";
import { SERVICES } from "@/features/services";
import { VEHICLES } from "@/features/vehicles";
import { LOCALES, localizePath } from "@/i18n/config";

const STATIC_ROUTES = [
  ROUTES.home,
  ROUTES.about,
  ROUTES.services,
  ROUTES.vehicles,
  ...(SHOW_GALLERY ? [ROUTES.gallery] : []),
  ROUTES.faqs,
  ROUTES.contact,
];

/** Every page in every language, each listing its language alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...STATIC_ROUTES,
    ...SERVICES.map((service) => ROUTES.service(service.slug)),
    ...VEHICLES.map((vehicle) => ROUTES.vehicle(vehicle.slug)),
  ];
  const absolute = (path: string) => new URL(path, SITE.url).toString();

  return paths.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: absolute(localizePath(locale, path)),
      alternates: {
        languages: Object.fromEntries(LOCALES.map((lang) => [lang, absolute(localizePath(lang, path))])),
      },
    })),
  );
}
