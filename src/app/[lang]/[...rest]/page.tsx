import { notFound } from "next/navigation";

/**
 * Any unmatched URL inside a locale (`/foo`, `/am/foo`) renders the branded,
 * localized `[lang]/not-found.tsx` instead of the framework default.
 */
export default function CatchAllNotFound() {
  notFound();
}
