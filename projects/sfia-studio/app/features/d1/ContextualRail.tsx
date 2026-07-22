import type { D1AuditEvent, D1Project } from "@/lib/d1/types";
import { METHOD_MODE_CLAIMS } from "@/lib/d1/types";
import styles from "./d1-shell.module.css";

export function ContextualRailI1({
  project,
  audit,
}: {
  project?: D1Project | null;
  audit?: D1AuditEvent[];
}) {
  return (
    <>
      <h2>Contextual rail</h2>
      <div className={styles.railCard}>
        <strong>Mode</strong>
        <p>
          {project?.methodMode
            ? METHOD_MODE_CLAIMS[project.methodMode]
            : "Aucun mode"}
        </p>
      </div>
      <div className={styles.railCard}>
        <strong>État projet</strong>
        <p>{project?.state ?? "—"}</p>
      </div>
      <div className={styles.railCard}>
        <strong>Prochaine action</strong>
        <p>
          {project?.state === "DRAFT"
            ? "Activer via création manuelle, ou décrire une intention dans l’intake"
            : "Continuer via Nouvelle demande (C2+ routage) — cycle non ouvert en C1"}
        </p>
      </div>
      <div className={styles.railCard}>
        <strong>Derniers événements</strong>
        {(audit ?? []).slice(0, 5).map((e) => (
          <p key={e.eventId}>
            {e.eventType} · {e.occurredAt}
          </p>
        ))}
        {!audit?.length ? (
          <p className={styles.placeholder}>Aucun événement</p>
        ) : null}
      </div>
      <div className={styles.railCard}>
        <strong>Placeholders</strong>
        <p className={styles.placeholder}>Context — non chargé (I3)</p>
        <p className={styles.placeholder}>Reserves — absentes (I4)</p>
        <p className={styles.placeholder}>Decisions — absentes (I5)</p>
      </div>
      <p className={styles.monoNote}>
        Mono-opérateur I1 : owner = decision_maker (temporaire).
      </p>
    </>
  );
}
