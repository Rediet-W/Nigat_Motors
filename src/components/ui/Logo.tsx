"use client";

import Image from "next/image";
import { Link } from "@/i18n/Link";
import { ROUTES } from "@/constants/routes";
import { getSite } from "@/constants/site";
import { useI18n } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/cn";
import logo from "../../../public/images/logo.png";

interface LogoProps {
  className?: string;
}

/** Official NF mark beside the "Car / Importer" wordmark (logo artwork is not translated). */
export function Logo({ className }: LogoProps) {
  const { locale, t } = useI18n();

  return (
    <Link
      href={ROUTES.home}
      aria-label={`${getSite(locale).name} — ${t.common.home}`}
      className={cn(
        "group inline-flex items-center gap-3 text-paper",
        className,
      )}
    >
      <Image
        src={logo}
        alt=""
        aria-hidden
        fetchPriority="high"
        className="h-9 w-auto shrink-0"
        sizes="64px"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-[0.04em] uppercase [font-variation-settings:'wdth'_125]">
          Car
        </span>
        <span className="mt-1 text-[0.625rem] font-bold tracking-[0.42em] text-silver uppercase">
          Importer
        </span>
      </span>
    </Link>
  );
}
