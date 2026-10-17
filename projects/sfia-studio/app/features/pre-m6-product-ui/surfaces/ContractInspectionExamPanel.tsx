"use client";

/**
 * Pass04 — shared Pilot exam panel for required contract facts.
 *
 * Presentation only: renders canonical disclosure rows and an explicit Attest CTA.
 * Does not compute required facts, persist, or grant authority.
 * Consumers: ExecutionSurface, GovernedConfirmationCard, TrajectorySurface.
 */

import type { InspectionFactRow } from "./pilotExecutionPresentation";
import type { InspectionExamSnapshot } from "./contractInspectionExam";
import styles from "./ContractInspectionExamPanel.module.css";

export type ContractInspectionExamPanelProps = {
  /** Prefix for data-testid (e.g. project-execution, governed-confirmation, w2-trajectory). */
  readonly testIdPrefix: string;
  readonly snapshot: InspectionExamSnapshot;
  readonly rows: readonly InspectionFactRow[];
  readonly missingRequired: readonly string[];
  readonly presentedFactIds: readonly string[];
  readonly busy: boolean;
  readonly onAttest: () => void;
  readonly onDismiss?: () => void;
};

export function ContractInspectionExamPanel({
  testIdPrefix,
  snapshot,
  rows,
  missingRequired,
  presentedFactIds,
  busy,
  onAttest,
  onDismiss,
}: ContractInspectionExamPanelProps) {
  const canAttest =
    missingRequired.length === 0 && presentedFactIds.length > 0 && !busy;

  return (
    <section
      className={styles.panel}
      aria-labelledby={`${testIdPrefix}-inspection-title`}
      data-testid={`${testIdPrefix}-inspection-panel`}
      data-exam-project={snapshot.projectId}
      data-exam-contract={snapshot.executionContractId}
      data-exam-version={String(snapshot.version)}
      data-exam-fingerprint={snapshot.semanticFingerprint}
    >
      <h3
        className={styles.title}
        id={`${testIdPrefix}-inspection-title`}
      >
        Faits contractuels à examiner
      </h3>
      <p className={styles.note}>
        Ces faits proviennent de la disclosure durable. L’ouverture de ce
        panneau n’enregistre aucune attestation.
      </p>
      <p
        className={styles.identity}
        data-testid={`${testIdPrefix}-inspection-identity`}
      >
        Contrat {snapshot.executionContractId} · v{snapshot.version}
      </p>
      {missingRequired.length > 0 ? (
        <p
          className={styles.missing}
          data-testid={`${testIdPrefix}-inspection-missing`}
          role="alert"
        >
          Faits obligatoires non restituables : {missingRequired.join(", ")}
        </p>
      ) : null}
      <ul className={styles.list}>
        {rows.map((row) => (
          <li
            key={row.factId}
            className={styles.item}
            data-testid={`${testIdPrefix}-inspection-fact-${row.factId}`}
            data-fact-id={row.factId}
          >
            <span className={styles.label}>{row.label}</span>
            <span className={styles.value}>{row.value}</span>
          </li>
        ))}
      </ul>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.primary}
          data-testid={`${testIdPrefix}-attest`}
          disabled={!canAttest}
          aria-label="Attester l’examen des faits affichés"
          title="Atteste uniquement les faits affichés ci-dessus pour cette version."
          onClick={onAttest}
        >
          {busy ? "Attestation…" : "Attester l’examen"}
        </button>
        {onDismiss ? (
          <button
            type="button"
            className={styles.secondary}
            data-testid={`${testIdPrefix}-inspection-dismiss`}
            disabled={busy}
            onClick={onDismiss}
          >
            Fermer
          </button>
        ) : null}
      </div>
    </section>
  );
}
