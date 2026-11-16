/**
 * UX-003 unified Studio entry — visual variants.
 *
 * Session-expired is activated only by an explicit, deterministic signal
 * (`?reason=session_expired`). The runtime does not yet distinguish an
 * expired session from a never-authenticated visitor; do not invent that
 * behaviour. Query param enables deterministic render + e2e proof.
 */

export type UnifiedEntryVariant = "nominal" | "session_expired";

export function resolveUnifiedEntryVariant(
  reason: string | null | undefined,
): UnifiedEntryVariant {
  if (reason === "session_expired") return "session_expired";
  return "nominal";
}

export const UNIFIED_ENTRY_COPY = {
  nominal: {
    panelEyebrow: "ACCÈS PERSONNEL",
    panelTitle: "Bienvenue dans Studio",
    panelBody:
      "Connectez-vous pour retrouver vos projets et reprendre vos échanges avec Nora.",
    ctaLabel: "Continuer avec GitHub",
  },
  session_expired: {
    panelEyebrow: "SESSION EXPIRÉE",
    panelTitle: "Retrouvons votre session",
    panelBody:
      "Reconnectez-vous pour reprendre vos projets. Vos informations privées restent masquées.",
    ctaLabel: "Se reconnecter avec GitHub",
  },
} as const;
