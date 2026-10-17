"use client";

/**
 * P3 §18 — Governed Confirmation presentation (INLINE in Conversation).
 * Pure projection: applicability / inspection / confirm come from W2 continuity.
 * Does NOT decide that confirmation is required — Studio/domain already did.
 *
 * Pass04 — Inspecter opens an exam panel (no write); Attester persists facts.
 */

import { useEffect, useMemo, useState } from "react";
import type {
  ContractInspectionStateDto,
  CurrentGovernedExecutionContinuityContractDto,
} from "@/features/project-assistant/w2/types";
import {
  buildInspectionExamView,
  sameInspectionExamSnapshot,
  type InspectionExamSnapshot,
} from "./contractInspectionExam";
import { ContractInspectionExamPanel } from "./ContractInspectionExamPanel";
import {
  isTechnicalProductRef,
  presentPilotContract,
} from "./pilotContractPresentation";
import styles from "./GovernedConfirmationCard.module.css";

export type GovernedConfirmationCardProps = {
  readonly projectId: string;
  readonly contract: CurrentGovernedExecutionContinuityContractDto;
  readonly inspection: ContractInspectionStateDto;
  readonly requiredInspectedFacts: readonly string[] | null;
  readonly busy: boolean;
  readonly error: string | null;
  readonly onConfirm: () => void;
  /** Explicit attestation with facts actually displayed — never called on open. */
  readonly onAttestInspection: (inspectedFacts: readonly string[]) => void;
  readonly onCancel?: () => void;
};

export function GovernedConfirmationCard({
  projectId,
  contract,
  inspection,
  requiredInspectedFacts,
  busy,
  error,
  onConfirm,
  onAttestInspection,
  onCancel,
}: GovernedConfirmationCardProps) {
  const [examOpen, setExamOpen] = useState(false);
  const [examSnapshot, setExamSnapshot] =
    useState<InspectionExamSnapshot | null>(null);

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

  const liveSnapshot = useMemo(
    (): InspectionExamSnapshot => ({
      projectId,
      executionContractId: contract.executionContractId,
      version: contract.version,
      semanticFingerprint: contract.semanticFingerprint ?? "",
    }),
    [
      projectId,
      contract.executionContractId,
      contract.version,
      contract.semanticFingerprint,
    ],
  );

  const examView = useMemo(
    () =>
      buildInspectionExamView({
        disclosure: contract.inspectionDisclosure,
        requiredInspectedFacts,
      }),
    [contract.inspectionDisclosure, requiredInspectedFacts],
  );

  useEffect(() => {
    if (!examOpen || !examSnapshot) return;
    if (!sameInspectionExamSnapshot(examSnapshot, liveSnapshot)) {
      setExamOpen(false);
      setExamSnapshot(null);
    }
  }, [examOpen, examSnapshot, liveSnapshot]);

  useEffect(() => {
    setExamOpen(false);
    setExamSnapshot(null);
  }, [projectId]);

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

  const handleOpenExam = () => {
    if (examView.disclosureIncomplete) return;
    setExamSnapshot(liveSnapshot);
    setExamOpen(true);
  };

  const handleAttest = () => {
    if (!examOpen || !examSnapshot) return;
    if (!sameInspectionExamSnapshot(examSnapshot, liveSnapshot)) {
      setExamOpen(false);
      setExamSnapshot(null);
      return;
    }
    if (examView.disclosureIncomplete || examView.missingRequired.length > 0) {
      return;
    }
    if (examView.presentedFactIds.length === 0) return;
    onAttestInspection(examView.presentedFactIds);
  };

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

      {examOpen && examSnapshot && !examView.disclosureIncomplete ? (
        <ContractInspectionExamPanel
          testIdPrefix="governed-confirmation"
          snapshot={examSnapshot}
          rows={examView.rows}
          missingRequired={examView.missingRequired}
          presentedFactIds={examView.presentedFactIds}
          busy={busy}
          onAttest={handleAttest}
          onDismiss={() => {
            setExamOpen(false);
            setExamSnapshot(null);
          }}
        />
      ) : null}

      <div className={styles.actions}>
        {!inspectionOk ? (
          <button
            type="button"
            className={styles.primary}
            data-testid="governed-confirmation-inspect"
            disabled={busy || examView.disclosureIncomplete}
            onClick={handleOpenExam}
            title={
              examView.disclosureIncomplete
                ? "Disclosure d’inspection incomplète — examen impossible."
                : "Ouvre le détail inspectable — n’enregistre aucune attestation."
            }
          >
            {examOpen
              ? "Réexaminer le contrat"
              : busy
                ? "Inspection…"
                : "Examiner le contrat"}
          </button>
        ) : (
          <button
            type="button"
            className={styles.primary}
            data-testid="governed-confirmation-confirm"
            disabled={busy}
            onClick={onConfirm}
          >
            {busy ? "Confirmation…" : "Confirmer"}
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
