"use client";

/**
 * P3 §18 — Governed Confirmation presentation (INLINE in Conversation).
 * Pure projection: applicability / inspection / confirm come from W2 continuity.
 * Does NOT decide that confirmation is required — Studio/domain already did.
 */

import type {
  ContractInspectionStateDto,
  CurrentGovernedExecutionContinuityContractDto,
} from "@/features/project-assistant/w2/types";
import {
  isTechnicalProductRef,
  presentPilotContract,
} from "./pilotContractPresentation";
import styles from "./GovernedConfirmationCard.module.css";

export type GovernedConfirmationCardProps = {
  readonly contract: CurrentGovernedExecutionContinuityContractDto;
  readonly inspection: ContractInspectionStateDto;
  readonly busy: boolean;
  readonly error: string | null;
  readonly onConfirm: () => void;
  readonly onInspect: () => void;
  readonly onCancel?: () => void;
};

export function GovernedConfirmationCard({
  contract,
  inspection,
  busy,
  error,
  onConfirm,
  onInspect,
  onCancel,
}: GovernedConfirmationCardProps) {
  const pilot = presentPilotContract({
    action: contract.action,
    target: contract.target,
    scope: contract.scope,
    requiredAuthority: contract.requiredAuthority,
    reversibility: contract.reversibility,
    targetPath: contract.inspectionDisclosure?.targetPath ?? null,
    targetRepositoryRef:
      contract.inspectionDisclosure?.targetRepositoryRef ?? null,
    constraints: contract.constraints,
  });

  const confirmationRequired =
    contract.status === "confirmation_required" ||
    contract.effectConfirmationRequired === true;

  if (!confirmationRequired) {
    return null;
  }

  const inspectionOk = inspection.inspectionSufficient === true;
  const rawScope = contract.scope?.trim() || "";
  const scopeText =
    (rawScope && !isTechnicalProductRef(rawScope) ? rawScope : null) ||
    pilot.scopeLine ||
    "Portée dérivée du contrat inspectable";
  const impactText = pilot.impactLine || pilot.nowTitle;
  const reversibilityText = pilot.reversibilityLabel;

  return (
    <section
      className={styles.card}
      data-testid="governed-confirmation-card"
      aria-labelledby="governed-confirmation-title"
    >
      <p className={styles.label}>Action à confirmer</p>
      <h3 id="governed-confirmation-title" className={styles.title}>
        {pilot.nowTitle}
      </h3>

      <div className={styles.section} data-testid="governed-confirmation-scope">
        <p className={styles.sectionLabel}>Portée</p>
        <p className={styles.sectionBody}>{scopeText}</p>
      </div>
      <div className={styles.section} data-testid="governed-confirmation-impact">
        <p className={styles.sectionLabel}>Impact prévu</p>
        <p className={styles.sectionBody}>{impactText}</p>
      </div>
      <div
        className={styles.section}
        data-testid="governed-confirmation-reversibility"
      >
        <p className={styles.sectionLabel}>Réversibilité</p>
        <p className={styles.sectionBody}>{reversibilityText}</p>
      </div>

      {!inspectionOk ? (
        <p
          className={styles.notice}
          data-testid="governed-confirmation-inspect-needed"
        >
          Inspection suffisante requise avant confirmation.
        </p>
      ) : null}

      {error ? (
        <p
          className={styles.error}
          role="alert"
          data-testid="governed-confirmation-error"
        >
          {error}
        </p>
      ) : null}

      <div className={styles.actions}>
        {!inspectionOk ? (
          <button
            type="button"
            className={styles.primary}
            data-testid="governed-confirmation-inspect"
            disabled={busy}
            onClick={onInspect}
          >
            {busy ? "Inspection…" : "Inspecter pour confirmer"}
          </button>
        ) : (
          <button
            type="button"
            className={styles.primary}
            data-testid="governed-confirmation-confirm"
            disabled={busy}
            onClick={onConfirm}
          >
            {busy ? "Confirmation…" : "Confirmer l'action"}
          </button>
        )}
        {onCancel ? (
          <button
            type="button"
            className={styles.secondary}
            data-testid="governed-confirmation-cancel"
            disabled={busy}
            onClick={onCancel}
          >
            Annuler
          </button>
        ) : null}
      </div>
    </section>
  );
}
