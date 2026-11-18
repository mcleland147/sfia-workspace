/**
 * UX-03 — strip decorative leading ordinals duplicated by margin numbers.
 * Preserves titles whose digits are métier content (e.g. mid-string "8 semaines").
 */
export function stripLeadingOrdinal(title: string): string {
  let t = title.trim();
  if (!t) return title;
  for (let i = 0; i < 2; i += 1) {
    const next = t.replace(/^\d{1,2}\s*[.)—–\-:/]\s*/, "").trim();
    if (next === t || !next) break;
    t = next;
  }
  return t || title.trim();
}
