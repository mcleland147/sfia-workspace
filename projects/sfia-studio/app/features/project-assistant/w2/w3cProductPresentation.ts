/**
 * W3-C presentation helpers — client-safe (no OA / sqlite imports).
 */

/**
 * Presentation filter (W3C-R13): drop historical W3-B reservation once W3-C
 * post-Evidence is active. Does not mutate durable W3-B projection.
 */
export function filterProductReservationsForDisplay(
  reservations: readonly string[],
  postEvidenceOk: boolean,
): string[] {
  if (!postEvidenceOk) return [...reservations];
  return reservations.filter(
    (r) => !/Apprentissage \/ replan non démarrés/i.test(r),
  );
}
