"use client";

/**
 * Compact environment honesty — secondary diagnostics only (G-UX-07).
 * Not the primary product chrome.
 */
export function RuntimeDisclosureBanner({
  surface = "create",
}: {
  surface?: "create" | "workspace" | "list";
} = {}) {
  const summary =
    surface === "workspace"
      ? "Limites de cet environnement"
      : surface === "list"
        ? "Environnement local"
        : "Création locale";

  const body =
    surface === "workspace"
      ? "Les faits durables du projet sont relus quand ils existent. Conversation, proposition et confirmation restent process-local et ne sont pas restaurées au rechargement. Aucune exécution réelle n’est autorisée ici."
      : surface === "list"
        ? "Cette liste lit les projets enregistrés dans cet environnement. Aucune exécution réelle n’est autorisée ici."
        : "Le projet est créé localement. Conversation et confirmation restent process-local. Aucune exécution réelle n’est autorisée ici.";

  return (
    <details
      className="sfia-env-disclosure"
      data-testid="runtime-disclosure-banner"
    >
      <summary data-testid="runtime-disclosure-summary">{summary}</summary>
      <p data-testid="runtime-disclosure-body">{body}</p>
      <p className="sfia-env-disclosure-note">
        Détails techniques (runtime, readiness) disponibles hors parcours
        principal — le produit reste non revendiqué « prêt production ».
      </p>
    </details>
  );
}
