/**
 * Presentation helpers for publication effect provider mode.
 * Orthogonal to D9 OAuth CONNECTED / flow — do not derive effect mode from OAuth alone.
 */

export type EffectProviderLabel = "REAL" | "SCRIPTED" | "UNKNOWN";

export function effectProviderLabel(mode: string | undefined | null): EffectProviderLabel {
  const m = (mode ?? "").trim().toUpperCase();
  if (m === "REAL") return "REAL";
  if (m === "SCRIPTED") return "SCRIPTED";
  return "UNKNOWN";
}

/** Banner copy for a known attempt status — never upgrades UNKNOWN/AMBIGUOUS to SUCCESS. */
export function publicationStatusBanner(input: {
  status: string | undefined | null;
  effectProviderMode: string | undefined | null;
}): string {
  const status = (input.status ?? "").toUpperCase();
  const provider = effectProviderLabel(input.effectProviderMode);

  if (status === "REQUIRES_REQUALIFICATION") {
    return "STOP — base ou révision périmée. Requalification requise avant nouvel effet.";
  }
  if (status === "AMBIGUOUS") {
    return "État distant AMBIGUOUS — relecture requise. Aucun succès inventé.";
  }
  if (status === "FAILED") {
    return "Effet en échec (FAILED). Aucune conformité inventée.";
  }
  if (status === "DISPATCHED") {
    return "Exécution en cours ou claim actif (DISPATCHED) — attendre ou réconcilier.";
  }
  if (status === "COMPLETED") {
    if (provider === "UNKNOWN") {
      return "Effet Git observé — mode fournisseur non établi. Merge non inclus — mandat distinct requis.";
    }
    return `Effet Git observé (${provider}). Merge non inclus — mandat distinct requis.`;
  }
  if (status === "AUTHORIZED") {
    return `Publication autorisée (D6) — aucun effet distant encore exécuté. Fournisseur d'effet: ${provider}.`;
  }
  if (status === "PREPARED") {
    return `Inspection préparée — aucun effet distant. Fournisseur d'effet: ${provider}.`;
  }
  return "Aucun effet Git n'a encore eu lieu. Révision, cible, diff, acteur et base restent inspectables.";
}

export function dispatchButtonLabel(effectProviderMode: string | undefined | null): string {
  const provider = effectProviderLabel(effectProviderMode);
  if (provider === "REAL") return "Déclencher l'effet (REAL)";
  if (provider === "SCRIPTED") return "Déclencher l'effet (SCRIPTED)";
  return "Déclencher l'effet";
}

export function mergeDispatchButtonLabel(effectProviderMode: string | undefined | null): string {
  const provider = effectProviderLabel(effectProviderMode);
  if (provider === "REAL") return "Déclencher merge (REAL — hard-blocked serveur)";
  if (provider === "SCRIPTED") return "Déclencher merge (SCRIPTED)";
  return "Déclencher merge";
}
