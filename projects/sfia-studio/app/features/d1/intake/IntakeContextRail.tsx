import styles from "../d1-shell.module.css";

export function IntakeContextRail({
  hasSubmitted,
  recentCount,
  phase,
  providerMode,
}: {
  hasSubmitted: boolean;
  recentCount: number;
  phase?: string;
  providerMode?: "fake" | "live" | null;
}) {
  const statusText =
    phase === "analyzing"
      ? "Analyse en cours"
      : phase === "clarification"
        ? "Clarification en cours"
        : phase === "matching"
          ? "Matching contexte en cours"
          : phase === "matched"
            ? "Contexte évalué (non appliqué)"
            : phase === "confirming"
              ? "Confirmation humaine en cours"
              : phase === "confirmed"
                ? "Confirmation traitée"
            : phase === "proposal"
              ? "Proposition prête (non exécutée)"
              : phase === "analyze_only"
                ? "Analyse seule — aucune mutation"
                : phase === "error"
                  ? "Erreur d’analyse"
                  : hasSubmitted
                    ? "Demande traitée"
                    : "En attente d’une intention";

  return (
    <>
      <h2>Accompagnement</h2>
      <div className={styles.railCard}>
        <strong>Studio vous aide à</strong>
        <p>comprendre, clarifier, matcher et proposer — vous gardez la décision.</p>
      </div>
      <div className={styles.railCard}>
        <strong>État</strong>
        <p data-testid="intake-rail-status">{statusText}</p>
        {providerMode ? (
          <p className={styles.placeholder}>Provider {providerMode}</p>
        ) : null}
      </div>
      <div className={styles.railCard}>
        <strong>Projets existants</strong>
        <p>
          {recentCount > 0
            ? `${recentCount} projet(s) — matching C3 en lecture seule`
            : "Aucun projet pour l’instant — ouvrez le Workspace plus tard"}
        </p>
        <p>
          <a href="/workspace">Aller au Workspace</a>
        </p>
      </div>
      <p className={styles.monoNote}>
        Matching déterministe · sélection temporaire · mutations hors périmètre
        C3.
      </p>
    </>
  );
}
