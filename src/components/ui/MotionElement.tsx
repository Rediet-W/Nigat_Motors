import { useId } from "react";
import { cn } from "@/lib/cn";

interface MotionElementProps {
  className?: string;
}

/**
 * Brand "Motion Element": the large rim-inspired crescent from the NF CAR
 * IMPORTER guidelines — Signal Orange fading into Midnight Navy, drifting
 * slowly. Purely decorative; position it with `className`.
 */
export function MotionElement({ className }: MotionElementProps) {
  const id = useId();
  const gradient = `${id}-gradient`;
  const mask = `${id}-mask`;

  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 800 520"
      className={cn("pointer-events-none animate-motion-orbit", className)}
    >
      <defs>
        <linearGradient id={gradient} x1="0.85" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="var(--color-signal-orange)" stopOpacity="0.75" />
          <stop offset="0.55" stopColor="var(--color-signal-orange)" stopOpacity="0.35" />
          <stop offset="1" stopColor="var(--color-signal-orange)" stopOpacity="0" />
        </linearGradient>
        <mask id={mask} maskUnits="userSpaceOnUse" x="0" y="0" width="800" height="520">
          <rect width="800" height="520" fill="#fff" />
          <ellipse cx="420" cy="245" rx="300" ry="155" transform="rotate(-28 420 245)" fill="#000" />
        </mask>
      </defs>
      <ellipse
        cx="400"
        cy="270"
        rx="370"
        ry="190"
        transform="rotate(-28 400 270)"
        fill={`url(#${gradient})`}
        mask={`url(#${mask})`}
      />
    </svg>
  );
}
