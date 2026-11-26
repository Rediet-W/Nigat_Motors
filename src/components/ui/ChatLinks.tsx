"use client";

import { MessageCircle, Send } from "lucide-react";
import { MESSAGING, whatsappLink } from "@/constants/site";
import { useI18n } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/cn";

interface ChatLinksProps {
  /** Pre-written WhatsApp message, e.g. naming the vehicle being viewed. */
  message?: string;
  /** Render for a dark background. */
  inverse?: boolean;
  className?: string;
}

/** Telegram and WhatsApp buttons: the channels most visitors use locally. */
export function ChatLinks({ message, inverse, className }: ChatLinksProps) {
  const { t } = useI18n();
  const base = cn(
    "type-nav inline-flex min-h-11 flex-1 items-center justify-center gap-2 border px-4 transition-colors duration-500 sm:flex-none",
    inverse
      ? "border-line-inverse text-paper hover:border-accent hover:text-accent"
      : "border-ink/20 text-ink hover:border-accent hover:text-accent",
  );

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <a href={MESSAGING.telegram} target="_blank" rel="noopener noreferrer" className={base}>
        <Send aria-hidden className="size-4 text-accent" />
        {t.chat.telegram}
      </a>
      <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className={base}>
        <MessageCircle aria-hidden className="size-4 text-accent" />
        {t.chat.whatsapp}
      </a>
    </div>
  );
}
