import Image from "next/image";
import { Link } from "@/i18n/Link";
import type { ReactNode } from "react";
import { ROUTES } from "@/constants/routes";
import { getI18n } from "@/i18n/server";
import { cn } from "@/lib/cn";
import { Container, Eyebrow } from "@/components/ui";
import type { NavLink } from "@/types";

interface PageHeroProps {
  title: string;
  eyebrow: string;
  /** Background photo. Omit for a plain branded backdrop. */
  image?: string;
  /** Short description of the photo (accessibility and SEO). */
  imageAlt?: string;
  /** Optional short looping clip; `image` is its poster and the reduced-motion fallback. */
  video?: string;
  lead?: string;
  /** Crumbs between "Home" and the current page. */
  trail?: NavLink[];
  /** `tall` for landing-style pages, `compact` for utility pages. */
  size?: "tall" | "compact";
  children?: ReactNode;
}

/** Cinematic inner-page opener: full-bleed photo, bottom-aligned display title. */
export async function PageHero({ title, eyebrow, image, imageAlt = "", video, lead, trail = [], size = "tall", children }: PageHeroProps) {
  const { t } = await getI18n();
  const crumbs: NavLink[] = [{ label: t.common.home, href: ROUTES.home }, ...trail];

  return (
    <section
      className={cn(
        "relative isolate flex flex-col justify-end overflow-hidden bg-ink text-paper",
        size === "tall" ? "min-h-[min(88svh,960px)]" : "min-h-[min(64svh,680px)]",
      )}
    >
      {image ? (
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="-z-20 animate-hero-zoom object-cover" />
      ) : (
        <div aria-hidden className="motion-loop absolute inset-0 -z-20 bg-steel-blue/15" />
      )}
      {video && (
        <video
          aria-hidden
          src={video}
          poster={image}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 -z-20 size-full object-cover motion-reduce:hidden"
        />
      )}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(18_38_58/0.55)_0%,rgb(18_38_58/0.15)_35%,rgb(18_38_58/0.9)_100%)]"
      />

      <Container className="pt-[calc(var(--header-height)+4rem)] pb-12 lg:pb-20">
        <nav aria-label={t.common.breadcrumb} className="mb-10 animate-rise lg:mb-14">
          <ol className="type-nav flex flex-wrap items-center gap-3 text-silver">
            {crumbs.map((crumb) => (
              <li key={crumb.href} className="flex items-center gap-3">
                <Link href={crumb.href} className="transition-colors hover:text-paper">
                  {crumb.label}
                </Link>
                <span aria-hidden className="h-px w-4 bg-silver/50" />
              </li>
            ))}
            <li aria-current="page" className="text-paper">
              {title}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="animate-rise [animation-delay:120ms] lg:col-span-8">
            <Eyebrow inverse className="mb-6">
              {eyebrow}
            </Eyebrow>
            <h1 className="type-display text-balance">{title}</h1>
          </div>
          {(lead || children) && (
            <div className="animate-rise [animation-delay:240ms] lg:col-span-4">
              {lead && <p className="type-lead text-silver">{lead}</p>}
              {children && <div className="mt-8">{children}</div>}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
