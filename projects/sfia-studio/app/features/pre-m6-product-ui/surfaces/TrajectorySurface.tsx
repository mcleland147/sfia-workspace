"use client";

/**
 * W2 / W3-A product surface — Options, Recommendation, HumanDecision, decided
 * trajectory, contract inspection, effective authority, and (W3-A) fixture
 * governed Execute after AUTHORIZED.
 *
 * The surface never derives truth: every state shown here comes from a server
 * action over the product application path.
 */

import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import {
  w2AmendExecutionContractAction,
  w2AuthorizeExecutionContractAction,
  w2ConfirmExecutionContractAction,
  w2DecideTrajectoryAction,
  w2GovernedExecuteCancelAction,
  w2GovernedExecuteCompleteAction,
  w2GovernedExecuteSelectAction,
  w2GovernedExecuteStartAction,
  w2InspectExecutionContractAction,
  w2MaterializeProductOutcomeAction,
  w2PrepareExecutionContractAction,
  w2ProposeTrajectoryOptionsAction,
  w2RehydrateProductOutcomeAction,
} from "@/features/project-assistant/w2/actions";
import type {
  AmendExecutionContractSuccess,
  ContractInspectionStateDto,
  DecidedTrajectoryDto,
  ExecutionAuthorizationOutcomeDto,
  GovernedExecuteAttemptProjection,
  GovernedExecutePhaseSuccess,
  TrajectoryDecisionRecordDto,
  TrajectoryOptionSetDto,
  W3BProductOutcomeDto,
  W3cPostEvidenceLoopDto,
} from "@/features/project-assistant/w2/types";
import { filterProductReservationsForDisplay } from "@/features/project-assistant/w2/w3cProductPresentation";
import styles from "./TrajectorySurface.module.css";

/** Explicit Pilot-qualified operation — never inferred from W2 trajectory alone. */
type QualifiedOperationKind = "generate-temporary-artifact" | "simulate" | "read";

type PreparedContract = {
  readonly executionContractId: string;
  readonly version: number;
  readonly status: string;
  readonly action: string;
  readonly target: string;
  readonly scope: string;
  readonly requiredAuthority: string;
  readonly constraints: readonly string[];
  readonly stopConditions: readonly string[];
  readonly requiredCapabilities: readonly string[];
  readonly reversibility: string;
  readonly semanticFingerprint: string;
  readonly effectConfirmationRequired?: boolean;
  readonly effectConfirmationLevel?: string | null;
};

type AmendmentNotice = {
  readonly priorExecutionContractId: string;
  readonly additionalConstraint: string;
  readonly statusLabel: string;
  readonly priorInspectionDoesNotCoverSuccessor: true;
};

type Busy =
  | null
  | "options"
  | "decision"
  | "qualify"
  | "contract"
  | "inspection"
  | "confirmation"
  | "authorization"
  | "amendment"
  | "execute";

/**
 * Yield so React can commit and the browser can paint each Attempt phase.
 * Double rAF only — no fixed-duration sleep / business latency (R09-R).
 */
function yieldBrowserPaint(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        resolve();
      });
    });
  });
}

export function TrajectorySurface({
  projectId,
  onDurableFactsChanged,
  recoveryProposeSignal = 0,
}: {
  projectId: string;
  onDurableFactsChanged?: () => void;
  /** B1 — increment from RecoverySurface requalify to reuse proposeOptions(). */
  recoveryProposeSignal?: number;
}) {
  const [busy, setBusy] = useState<Busy>(null);
  const [error, setError] = useState<string | null>(null);
  const [optionSet, setOptionSet] = useState<TrajectoryOptionSetDto | null>(
    null,
  );
  const [decision, setDecision] = useState<TrajectoryDecisionRecordDto | null>(
    null,
  );
  const [decided, setDecided] = useState<DecidedTrajectoryDto | null>(null);
  const [contract, setContract] = useState<PreparedContract | null>(null);
  const [inspection, setInspection] =
    useState<ContractInspectionStateDto | null>(null);
  const [authorization, setAuthorization] =
    useState<ExecutionAuthorizationOutcomeDto | null>(null);
  const [amendmentDraft, setAmendmentDraft] = useState("");
  const [amendmentNotice, setAmendmentNotice] =
    useState<AmendmentNotice | null>(null);
  const [attempt, setAttempt] =
    useState<GovernedExecuteAttemptProjection | null>(null);
  const [attemptPhase, setAttemptPhase] = useState<
    GovernedExecutePhaseSuccess["phase"] | null
  >(null);
  /** Append-only paint trail — proves R09 sequence even with a sync adapter. */
  const [attemptPhaseHistory, setAttemptPhaseHistory] = useState<string[]>([]);
  const [attemptStatusLabel, setAttemptStatusLabel] = useState<string | null>(
    null,
  );
  const [productOutcome, setProductOutcome] =
    useState<W3BProductOutcomeDto | null>(null);
  const [postEvidence, setPostEvidence] =
    useState<W3cPostEvidenceLoopDto | null>(null);
  const [productEvidencePending, setProductEvidencePending] = useState(false);
  const [qualifiedOperationKind, setQualifiedOperationKind] =
    useState<QualifiedOperationKind | null>(null);

  function paintAttemptPhase(
    phase: GovernedExecutePhaseSuccess["phase"],
    nextAttempt: GovernedExecuteAttemptProjection | null,
    statusLabel: string | null,
  ): void {
    flushSync(() => {
      if (nextAttempt) setAttempt(nextAttempt);
      setAttemptPhase(phase);
      if (statusLabel !== null) setAttemptStatusLabel(statusLabel);
      setAttemptPhaseHistory((prev) =>
        prev[prev.length - 1] === phase ? prev : [...prev, phase],
      );
    });
  }

  const proposeOptions = useCallback(async () => {
    setBusy("options");
    setError(null);
    const result = await w2ProposeTrajectoryOptionsAction({ projectId });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const { ok: _ok, ...set } = result;
    setOptionSet(set);
    setDecision(null);
    setDecided(null);
    setContract(null);
    setInspection(null);
    setAuthorization(null);
    setAmendmentDraft("");
    setAmendmentNotice(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptStatusLabel(null);
    setProductOutcome(null);
    setPostEvidence(null);
    onDurableFactsChanged?.();
  }, [projectId, onDurableFactsChanged]);

  useEffect(() => {
    if (recoveryProposeSignal > 0) {
      void proposeOptions();
    }
  }, [recoveryProposeSignal, proposeOptions]);

  const decide = useCallback(
    async (selectedOptionRef: string) => {
      if (!optionSet) return;
      setBusy("decision");
      setError(null);
      const result = await w2DecideTrajectoryAction({
        projectId,
        optionSetRef: optionSet.optionSetRef,
        trajectoryId: optionSet.proposedTrajectory.trajectoryId,
        candidateVersion: optionSet.proposedTrajectory.version,
        selectedOptionRef,
      });
      setBusy(null);
      if (!result.ok) {
        setError(result.message);
        return;
      }
      setDecision(result.decision);
      setDecided(result.trajectory);
      onDurableFactsChanged?.();
    },
    [optionSet, projectId, onDurableFactsChanged],
  );

  const prepareContract = useCallback(async () => {
    if (!decision || !qualifiedOperationKind) return;
    setBusy("contract");
    setError(null);
    const result = await w2PrepareExecutionContractAction({
      projectId,
      decisionId: decision.decisionId,
      qualifiedOperationKind,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const prepared = result.contract;
    setContract({
      executionContractId: prepared.executionContractId,
      version: prepared.version,
      status: prepared.status,
      action: prepared.action,
      target: prepared.target,
      scope: prepared.scope,
      requiredAuthority: prepared.requiredAuthority,
      constraints: [...prepared.constraints],
      stopConditions: [...prepared.stopConditions],
      requiredCapabilities: [...prepared.requiredCapabilities],
      reversibility: prepared.reversibility,
      semanticFingerprint: prepared.semanticFingerprint,
      effectConfirmationRequired: prepared.effectConfirmationRequired,
      effectConfirmationLevel: prepared.effectConfirmationLevel ?? null,
    });
    setInspection(null);
    setAuthorization(null);
    setAmendmentDraft("");
    setAmendmentNotice(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptStatusLabel(null);
    onDurableFactsChanged?.();
  }, [decision, projectId, qualifiedOperationKind, onDurableFactsChanged]);

  const inspect = useCallback(async () => {
    if (!contract) return;
    setBusy("inspection");
    setError(null);
    const result = await w2InspectExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const { ok: _ok, ...state } = result;
    setInspection(state);
    setAuthorization(null);
    if (amendmentNotice && state.inspectionSufficient) {
      setAmendmentNotice({
        ...amendmentNotice,
        statusLabel: "CONTRAT AMENDÉ — RÉINSPECTION DÉJÀ SATISFAITE",
      });
    }
  }, [contract, projectId, amendmentNotice]);

  const amendContract = useCallback(async () => {
    if (!contract || !inspection?.inspectionSufficient) return;
    const constraint = amendmentDraft.trim();
    if (!constraint) {
      setError("Indiquez une contrainte d'exécution supplémentaire.");
      return;
    }
    setBusy("amendment");
    setError(null);
    const result = await w2AmendExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
      additionalConstraint: constraint,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const amended = result as AmendExecutionContractSuccess;
    setContract({
      executionContractId: amended.successor.executionContractId,
      version: amended.successor.version,
      status: amended.successor.status,
      action: amended.successor.action,
      target: amended.successor.target,
      scope: amended.successor.scope,
      requiredAuthority: amended.successor.requiredAuthority,
      constraints: [...amended.successor.constraints],
      stopConditions: [...amended.successor.stopConditions],
      requiredCapabilities: [...amended.successor.requiredCapabilities],
      reversibility: amended.successor.reversibility,
      semanticFingerprint: amended.successor.semanticFingerprint,
    });
    setInspection(amended.successorInspection);
    setAuthorization(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptStatusLabel(null);
    setAmendmentDraft("");
    setAmendmentNotice({
      priorExecutionContractId: amended.priorExecutionContractId,
      additionalConstraint: amended.additionalConstraint,
      statusLabel: amended.statusLabel,
      priorInspectionDoesNotCoverSuccessor: true,
    });
    onDurableFactsChanged?.();
  }, [
    contract,
    inspection,
    amendmentDraft,
    projectId,
    onDurableFactsChanged,
  ]);

  const confirmForAuthorization = useCallback(async () => {
    if (!contract) return;
    setBusy("confirmation");
    setError(null);
    const result = await w2ConfirmExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setContract({ ...contract, status: "confirmed" });
    setAuthorization(null);
  }, [contract, projectId]);

  const authorize = useCallback(async () => {
    if (!contract) return;
    setBusy("authorization");
    setError(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptPhaseHistory([]);
    setAttemptStatusLabel(null);
    const result = await w2AuthorizeExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const { ok: _ok, ...outcome } = result;
    setAuthorization(outcome);
    setInspection(outcome.inspection);
  }, [contract, projectId]);

  const governedExecute = useCallback(async () => {
    if (!contract || authorization?.outcome !== "AUTHORIZED") return;
    setBusy("execute");
    setError(null);
    flushSync(() => {
      setAttempt(null);
      setAttemptPhase(null);
      setAttemptPhaseHistory([]);
      setAttemptStatusLabel(null);
      setProductOutcome(null);
      setProductEvidencePending(false);
    });

    const selected = await w2GovernedExecuteSelectAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    if (!selected.ok) {
      setBusy(null);
      setError(selected.message);
      if (selected.attempt) {
        paintAttemptPhase("accepted", selected.attempt, null);
      }
      return;
    }
    paintAttemptPhase(selected.phase, selected.attempt, selected.statusLabel);
    await yieldBrowserPaint();

    if (selected.phase === "terminal") {
      setBusy(null);
      paintAttemptPhase("terminal", selected.attempt, selected.statusLabel);
      onDurableFactsChanged?.();
      return;
    }

    const started = await w2GovernedExecuteStartAction({
      projectId,
      executionContractId: contract.executionContractId,
      attemptId: selected.attemptId,
    });
    if (!started.ok) {
      setBusy(null);
      setError(started.message);
      if (started.attempt) {
        flushSync(() => {
          setAttempt(started.attempt!);
        });
      }
      return;
    }

    // Adapter FAIL / governed STOP may terminate at Start — materialize without Complete.
    if (started.phase === "terminal") {
      paintAttemptPhase(started.phase, started.attempt, started.statusLabel);
      flushSync(() => {
        setProductEvidencePending(true);
      });
      await yieldBrowserPaint();
      const materializedEarly = await w2MaterializeProductOutcomeAction({
        projectId,
        attemptId: started.attemptId,
      });
      setBusy(null);
      if (!materializedEarly.ok) {
        setError(materializedEarly.message);
        if (materializedEarly.product) setProductOutcome(materializedEarly.product);
        if (materializedEarly.postEvidence)
          setPostEvidence(materializedEarly.postEvidence);
        return;
      }
      flushSync(() => {
        setProductEvidencePending(false);
        setProductOutcome(materializedEarly.product);
        setPostEvidence(materializedEarly.postEvidence ?? null);
      });
      onDurableFactsChanged?.();
      return;
    }

    paintAttemptPhase(started.phase, started.attempt, started.statusLabel);
    await yieldBrowserPaint();

    const completed = await w2GovernedExecuteCompleteAction({
      projectId,
      executionContractId: contract.executionContractId,
      attemptId: started.attemptId,
    });
    if (!completed.ok) {
      setBusy(null);
      setError(completed.message);
      if (completed.attempt) {
        flushSync(() => {
          setAttempt(completed.attempt!);
        });
      }
      return;
    }
    paintAttemptPhase(completed.phase, completed.attempt, completed.statusLabel);
    flushSync(() => {
      setProductEvidencePending(true);
    });
    await yieldBrowserPaint();

    const materialized = await w2MaterializeProductOutcomeAction({
      projectId,
      attemptId: completed.attemptId,
    });
    setBusy(null);
    if (!materialized.ok) {
      setError(materialized.message);
      if (materialized.product) setProductOutcome(materialized.product);
      if (materialized.postEvidence) setPostEvidence(materialized.postEvidence);
      return;
    }
    flushSync(() => {
      setProductEvidencePending(false);
      setProductOutcome(materialized.product);
      setPostEvidence(materialized.postEvidence ?? null);
    });
    onDurableFactsChanged?.();
  }, [contract, authorization, projectId, onDurableFactsChanged]);

  const stopRunningExecution = useCallback(async () => {
    if (!contract || !attempt?.attemptId || attemptPhase !== "running") return;
    setBusy("execute");
    setError(null);
    const cancelled = await w2GovernedExecuteCancelAction({
      projectId,
      executionContractId: contract.executionContractId,
      attemptId: attempt.attemptId,
    });
    if (!cancelled.ok) {
      setBusy(null);
      setError(cancelled.message);
      return;
    }
    paintAttemptPhase(cancelled.phase, cancelled.attempt, cancelled.statusLabel);
    flushSync(() => {
      setProductEvidencePending(true);
    });
    await yieldBrowserPaint();
    const materialized = await w2MaterializeProductOutcomeAction({
      projectId,
      attemptId: cancelled.attemptId,
    });
    setBusy(null);
    if (!materialized.ok) {
      setError(materialized.message);
      if (materialized.product) setProductOutcome(materialized.product);
      if (materialized.postEvidence) setPostEvidence(materialized.postEvidence);
      return;
    }
    flushSync(() => {
      setProductEvidencePending(false);
      setProductOutcome(materialized.product);
      setPostEvidence(materialized.postEvidence ?? null);
    });
    onDurableFactsChanged?.();
  }, [
    contract,
    attempt,
    attemptPhase,
    projectId,
    onDurableFactsChanged,
  ]);

  const rehydrateProduct = useCallback(async () => {
    if (!attempt?.attemptId) return;
    setBusy("execute");
    setError(null);
    const result = await w2RehydrateProductOutcomeAction({
      projectId,
      attemptId: attempt.attemptId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setProductOutcome(result.product);
    setPostEvidence(result.postEvidence ?? null);
    setProductEvidencePending(false);
  }, [attempt, projectId]);

  return (
    <section
      className={styles.root}
      data-testid="w2-trajectory-panel"
      aria-labelledby="w2-trajectory-title"
    >
      <header className={styles.head}>
        <p className={styles.eyebrow}>Trajectoire et décision</p>
        <h2 id="w2-trajectory-title" className={styles.title}>
          Options, recommandation, puis votre décision
        </h2>
        <p className={styles.note}>
          Nora instruit des options et recommande. La décision vous appartient :
          une recommandation ne décide jamais et ne rend jamais une trajectoire
          courante. L&apos;exécution (W3-A) n&apos;est possible qu&apos;après un
          verdict AUTHORIZED, via une action Exécuter explicite (fixture).
        </p>
      </header>

      {error ? (
        <p className={styles.error} role="alert" data-testid="w2-error">
          {error}
        </p>
      ) : null}

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.primaryAction}
          data-testid="w2-propose-options"
          onClick={() => void proposeOptions()}
          disabled={busy !== null}
        >
          {optionSet ? "Réinstruire les options" : "Instruire les options"}
        </button>
        {busy ? (
          <span className={styles.busy} role="status" data-testid="w2-busy">
            Traitement en cours…
          </span>
        ) : null}
      </div>

      {optionSet ? (
        <>
          <section
            className={styles.block}
            aria-labelledby="w2-options-title"
            data-testid="w2-options"
          >
            <h3 id="w2-options-title" className={styles.blockTitle}>
              Options proposées
            </h3>
            <p className={styles.blockNote} data-testid="w2-proposed-trajectory">
              {optionSet.proposedTrajectory.statusLabel} · version{" "}
              {optionSet.proposedTrajectory.version} · pas encore courante
            </p>
            <ul className={styles.optionList}>
              {optionSet.options.map((option) => {
                const isRecommended =
                  option.optionRef ===
                  optionSet.recommendation.recommendedOptionRef;
                return (
                  <li
                    key={option.optionRef}
                    className={styles.option}
                    data-testid={`w2-option-${option.optionRef}`}
                  >
                    <div className={styles.optionHead}>
                      <span className={styles.optionBadge}>{option.kind}</span>
                      {isRecommended ? (
                        <span className={styles.recommendedBadge}>
                          Recommandée — pas décidée
                        </span>
                      ) : null}
                      <span className={styles.optionLabel}>{option.label}</span>
                    </div>
                    <p className={styles.optionIntent}>{option.intent}</p>
                    <ul className={styles.impacts}>
                      {option.impacts.map((impact) => (
                        <li key={impact}>{impact}</li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className={styles.decideAction}
                      data-testid={`w2-decide-${option.optionRef}`}
                      onClick={() => void decide(option.optionRef)}
                      disabled={busy !== null || decision !== null}
                      aria-label={`Décider: ${option.label}`}
                    >
                      Décider cette option
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>

          <section
            className={styles.recommendation}
            aria-labelledby="w2-reco-title"
            data-testid="w2-recommendation"
          >
            <h3 id="w2-reco-title" className={styles.recoTitle}>
              {optionSet.recommendation.label}
            </h3>
            <p className={styles.blockBody}>
              {optionSet.recommendation.rationale}
            </p>
            <p className={styles.blockNote}>
              Cette recommandation ne promeut aucune trajectoire.
              {optionSet.recommendation.ckcAttribution
                ? " Contexte de cycle rattaché."
                : " Aucun contexte de cycle rattaché."}
            </p>
          </section>
        </>
      ) : null}

      {decision && decided ? (
        <section
          className={styles.decision}
          aria-labelledby="w2-decision-title"
          data-testid="w2-decision"
        >
          <h3 id="w2-decision-title" className={styles.blockTitle}>
            Décision de trajectoire — {decision.statusLabel}
          </h3>
          <dl className={styles.facts}>
            <div>
              <dt>Option retenue</dt>
              <dd data-testid="w2-decided-option">
                {decision.selectedOptionRef}
              </dd>
            </div>
            <div>
              <dt>Décideur</dt>
              <dd>{decision.actorRole}</dd>
            </div>
            <div>
              <dt>Base de décision</dt>
              <dd data-testid="w2-decision-basis">
                {decision.decisionBasisLinked ? "Reliée" : "Absente"}
              </dd>
            </div>
            <div>
              <dt>Trajectoire</dt>
              <dd data-testid="w2-decided-trajectory">
                {decided.statusLabel} · version {decided.version}
              </dd>
            </div>
          </dl>
          <div
            className={styles.actions}
            data-testid="w3a-qualify-execution-work"
          >
            <p className={styles.blockNote}>
              Qualifier le travail d&apos;exécution réel (indépendant de
              l&apos;option de trajectoire W2).
            </p>
            <label className={styles.amendmentLabel} htmlFor="w3a-operation-kind">
              Opération d&apos;exécution
            </label>
            <select
              id="w3a-operation-kind"
              className={styles.amendmentInput}
              data-testid="w3a-operation-kind"
              value={qualifiedOperationKind ?? ""}
              disabled={busy !== null}
              onChange={(event) => {
                const value = event.target.value;
                if (
                  value === "generate-temporary-artifact" ||
                  value === "simulate" ||
                  value === "read"
                ) {
                  setQualifiedOperationKind(value);
                  setContract(null);
                  setInspection(null);
                  setAuthorization(null);
                  setAttempt(null);
                  setAttemptPhase(null);
                } else {
                  setQualifiedOperationKind(null);
                }
              }}
            >
              <option value="">— Choisir —</option>
              <option value="generate-temporary-artifact">
                Générer un artefact temporaire local (réversible)
              </option>
              <option value="simulate">Simuler (sandbox)</option>
              <option value="read">Lecture seule</option>
            </select>
            <button
              type="button"
              className={styles.primaryAction}
              data-testid="w2-prepare-contract"
              onClick={() => void prepareContract()}
              disabled={busy !== null || qualifiedOperationKind === null}
              title={
                qualifiedOperationKind === null
                  ? "Qualifier d'abord le travail d'exécution"
                  : undefined
              }
            >
              {contract
                ? "Repréparer le contrat d'exécution"
                : "Préparer le contrat d'exécution"}
            </button>
          </div>
        </section>
      ) : null}

      {contract ? (
        <section
          className={styles.contract}
          aria-labelledby="w2-contract-title"
          data-testid="w2-contract"
        >
          <h3 id="w2-contract-title" className={styles.blockTitle}>
            Contrat d&apos;exécution préparé
          </h3>
          <dl className={styles.facts} data-testid="w2-contract-facts">
            <div>
              <dt>Version</dt>
              <dd data-testid="w2-contract-version">v{contract.version}</dd>
            </div>
            <div>
              <dt>Statut</dt>
              <dd data-testid="w2-contract-status">{contract.status}</dd>
            </div>
            <div>
              <dt>Action</dt>
              <dd data-testid="w2-contract-action">{contract.action}</dd>
            </div>
            <div>
              <dt>Cible</dt>
              <dd data-testid="w2-contract-target">{contract.target}</dd>
            </div>
            <div>
              <dt>Périmètre</dt>
              <dd data-testid="w2-contract-scope">{contract.scope}</dd>
            </div>
            <div>
              <dt>Autorité requise</dt>
              <dd data-testid="w2-contract-authority">
                {contract.requiredAuthority}
              </dd>
            </div>
            <div>
              <dt>Capacités</dt>
              <dd data-testid="w2-contract-capabilities">
                {contract.requiredCapabilities.length
                  ? contract.requiredCapabilities.join(", ")
                  : "Aucune"}
              </dd>
            </div>
            <div>
              <dt>Réversibilité</dt>
              <dd data-testid="w2-contract-reversibility">
                {contract.reversibility}
              </dd>
            </div>
            <div>
              <dt>Contraintes</dt>
              <dd data-testid="w2-contract-constraints">
                {contract.constraints.length
                  ? contract.constraints.join(" · ")
                  : "Aucune"}
              </dd>
            </div>
            <div>
              <dt>Conditions d&apos;arrêt</dt>
              <dd data-testid="w2-contract-stops">
                {contract.stopConditions.length
                  ? contract.stopConditions.join(" · ")
                  : "Aucune"}
              </dd>
            </div>
            <div>
              <dt>Empreinte sémantique</dt>
              <dd className={styles.code}>
                {contract.semanticFingerprint.slice(0, 12)}…
              </dd>
            </div>
          </dl>

          {amendmentNotice ? (
            <div
              className={styles.amendmentNotice}
              data-testid="w2-amendment-notice"
              role="status"
            >
              <p className={styles.blockBody} data-testid="w2-amendment-status">
                {amendmentNotice.statusLabel}
              </p>
              <p className={styles.blockNote}>
                L&apos;inspection précédente couvrait le contrat précédent, pas
                le successeur amendé.
              </p>
              <p className={styles.blockNote} data-testid="w2-amendment-lineage">
                Successeur de {amendmentNotice.priorExecutionContractId} ·
                contrainte ajoutée : {amendmentNotice.additionalConstraint}
              </p>
            </div>
          ) : null}

          {inspection?.inspectionSufficient ? (
            <div
              className={styles.amendmentForm}
              data-testid="w2-amendment-form"
            >
              <p className={styles.blockTitle}>Amender le contrat</p>
              <label className={styles.amendmentLabel} htmlFor="w2-amend-constraint">
                Contrainte d&apos;exécution supplémentaire
              </label>
              <input
                id="w2-amend-constraint"
                className={styles.amendmentInput}
                data-testid="w2-amend-constraint"
                type="text"
                value={amendmentDraft}
                onChange={(event) => setAmendmentDraft(event.target.value)}
                disabled={busy !== null}
                placeholder="Ex. : borner strictement le slice livré"
              />
              <button
                type="button"
                className={styles.secondaryAction}
                data-testid="w2-amend-contract"
                onClick={() => void amendContract()}
                disabled={busy !== null || amendmentDraft.trim().length === 0}
              >
                Appliquer l&apos;amendement
              </button>
            </div>
          ) : null}

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.primaryAction}
              data-testid="w2-inspect-contract"
              onClick={() => void inspect()}
              disabled={busy !== null}
            >
              Inspecter le contrat
            </button>
            {contract.status === "confirmation_required" ? (
              <button
                type="button"
                className={styles.secondaryAction}
                data-testid="w2-confirm-contract"
                onClick={() => void confirmForAuthorization()}
                disabled={
                  busy !== null ||
                  inspection === null ||
                  !inspection.inspectionSufficient
                }
                title={
                  inspection === null || !inspection.inspectionSufficient
                    ? "Inspection suffisante requise avant de confirmer"
                    : undefined
                }
              >
                Confirmer (effets / autorité)
              </button>
            ) : null}
            <button
              type="button"
              className={styles.secondaryAction}
              data-testid="w2-authorize-contract"
              onClick={() => void authorize()}
              disabled={busy !== null}
            >
              Statuer sur l&apos;autorisation
            </button>
          </div>

          {inspection ? (
            <p
              className={styles.inspection}
              data-testid="w2-inspection-state"
              role="status"
            >
              {inspection.statusLabel}
              {inspection.reinspectionRequired
                ? " — l'inspection précédente ne suffit plus"
                : ""}
              {" · inspecter n'autorise pas"}
            </p>
          ) : null}
        </section>
      ) : null}

      {authorization ? (
        <section
          className={
            authorization.outcome === "AUTHORIZED"
              ? styles.authorized
              : styles.blocked
          }
          aria-labelledby="w2-authorization-title"
          data-testid="w2-authorization"
          role="status"
        >
          <h3 id="w2-authorization-title" className={styles.blockTitle}>
            <span data-testid="w2-authorization-outcome">
              {authorization.outcomeLabel}
            </span>
          </h3>
          <p className={styles.blockBody} data-testid="w2-authorization-reason">
            {authorization.reasonText}
          </p>
          <p className={styles.blockNote} data-testid="w2-authorization-next">
            Prochaine action : {authorization.nextAction}
          </p>
          <dl className={styles.facts}>
            <div>
              <dt>Confirmation</dt>
              <dd data-testid="w2-confirmation-state">
                {authorization.confirmation.statusLabel}
              </dd>
            </div>
            <div>
              <dt>Exécuteur</dt>
              <dd data-testid="w2-executor-state">
                {authorization.agentCapability.statusLabel}
              </dd>
            </div>
            <div>
              <dt>Inspection</dt>
              <dd>{authorization.inspection.statusLabel}</dd>
            </div>
            <div>
              <dt>Trace d&apos;autorité</dt>
              <dd className={styles.code}>
                {authorization.authorityReceiptRef}
              </dd>
            </div>
          </dl>
          {authorization.outcome === "AUTHORIZED" && !attempt ? (
            <>
              <p
                className={styles.stopNotice}
                data-testid="w2-stop-before-execute"
              >
                Autorisation évaluée — aucune tentative lancée tant que vous
                n&apos;exécutez pas explicitement.
              </p>
              <div className={styles.actions}>
                <button
                  type="button"
                  className={styles.primaryAction}
                  data-testid="w3a-governed-execute"
                  onClick={() => void governedExecute()}
                  disabled={busy !== null}
                >
                  Exécuter
                </button>
              </div>
            </>
          ) : null}
          {authorization.outcome === "BLOCKED" ? (
            <p className={styles.stopNotice} data-testid="w2-stop-before-execute">
              Aucune exécution n&apos;a été lancée : arrêt avant exécution.
            </p>
          ) : null}
        </section>
      ) : null}

      {attempt || attemptPhaseHistory.length > 0 ? (
        <section
          className={styles.attempt}
          aria-labelledby="w3a-attempt-title"
          data-testid="w3a-attempt"
          role="status"
        >
          <h3 id="w3a-attempt-title" className={styles.blockTitle}>
            Tentative d&apos;exécution
          </h3>
          <p className={styles.blockBody} data-testid="w3a-attempt-status">
            {attemptStatusLabel ?? "Tentative en cours"} · phase{" "}
            <span data-testid="w3a-attempt-lifecycle">
              {attemptPhase ?? "—"}
            </span>{" "}
            · historique{" "}
            <code data-testid="w3a-attempt-phase-history">
              {attemptPhaseHistory.join("|")}
            </code>{" "}
            · statut technique{" "}
            <span data-testid="w3a-attempt-technical-status">
              {attempt?.attemptStatus ?? "—"}
            </span>
          </p>
          <dl className={styles.facts}>
            <div>
              <dt>Attempt</dt>
              <dd className={styles.code} data-testid="w3a-attempt-id">
                {attempt?.attemptId ?? "—"}
              </dd>
            </div>
            <div>
              <dt>Adapter</dt>
              <dd data-testid="w3a-attempt-adapter">
                {attempt?.adapterId ?? "—"}
              </dd>
            </div>
            <div>
              <dt>Effets externes</dt>
              <dd data-testid="w3a-attempt-real">non</dd>
            </div>
            <div>
              <dt>Cycle auto-fermé</dt>
              <dd data-testid="w3a-cycle-closed">non</dd>
            </div>
          </dl>
          {attemptPhase === "running" ? (
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.secondaryAction}
                data-testid="w3b-stop-running"
                onClick={() => void stopRunningExecution()}
                disabled={busy !== null}
              >
                Arrêter l&apos;exécution
              </button>
            </div>
          ) : null}
          <p className={styles.blockNote} data-testid="w3a-terminal-honesty">
            {productOutcome?.claimAllowed
              ? "Terminal technique consommé — résultat produit qualifié ci-dessous."
              : productEvidencePending
                ? "Terminal technique — Evidence en cours / claim produit non encore émis."
                : "Terminal technique — résultat produit non encore qualifié."}
          </p>
          {productEvidencePending ? (
            <p
              className={styles.blockNote}
              data-testid="w3b-evidence-pending"
            >
              Evidence requise avant tout claim de résultat produit.
            </p>
          ) : null}
          {attempt?.attemptId && !productOutcome ? (
            <button
              type="button"
              className={styles.secondaryAction}
              data-testid="w3b-rehydrate-product"
              onClick={() => void rehydrateProduct()}
              disabled={busy !== null}
            >
              Recharger résultat produit (durable)
            </button>
          ) : null}
        </section>
      ) : null}

      {productOutcome ? (
        <section
          className={styles.productOutcome}
          aria-labelledby="w3b-product-title"
          data-testid="w3b-product-outcome"
          data-outcome={productOutcome.outcome}
          role="status"
        >
          <h3 id="w3b-product-title" className={styles.blockTitle}>
            Résultat produit
          </h3>
          <p
            className={styles.productHeadline}
            data-testid="w3b-product-headline"
          >
            <span data-testid="w3b-product-outcome-kind">
              {productOutcome.outcome}
            </span>
            {" — "}
            {productOutcome.businessHeadline}
          </p>
          <p className={styles.blockBody} data-testid="w3b-product-reason">
            {productOutcome.businessReason}
          </p>
          {productOutcome.governedBoundary ? (
            <p className={styles.blockBody} data-testid="w3b-governed-boundary">
              Frontière : {productOutcome.governedBoundary}
            </p>
          ) : null}
          <p className={styles.blockBody} data-testid="w3b-evidence-summary">
            {productOutcome.evidenceSummary ??
              "Evidence absente — aucun claim produit."}
          </p>
          <dl className={styles.facts}>
            <div>
              <dt>Evidence</dt>
              <dd className={styles.code} data-testid="w3b-evidence-id">
                {productOutcome.evidenceId ?? "—"}
              </dd>
            </div>
            <div>
              <dt>ReviewBundle</dt>
              <dd className={styles.code} data-testid="w3b-review-bundle-id">
                {productOutcome.reviewBundleId ?? "—"}
              </dd>
            </div>
            <div>
              <dt>Complétude revue</dt>
              <dd data-testid="w3b-review-bundle-completeness">
                {productOutcome.reviewBundleCompleteness ?? "—"}
              </dd>
            </div>
            <div>
              <dt>Claim autorisé</dt>
              <dd data-testid="w3b-claim-allowed">
                {productOutcome.claimAllowed ? "oui" : "non"}
              </dd>
            </div>
            <div>
              <dt>Apprentissage / replan</dt>
              <dd data-testid="w3b-nora-replan">
                {`analyse: ${
                  postEvidence && postEvidence.ok && postEvidence.noraInvoked
                    ? "oui"
                    : "non"
                } · replan auto: non`}
              </dd>
            </div>
            <div>
              <dt>Cycle auto-fermé</dt>
              <dd data-testid="w3b-cycle-closed">non</dd>
            </div>
            <div>
              <dt>READY</dt>
              <dd data-testid="w3b-ready">non</dd>
            </div>
          </dl>
          {postEvidence && postEvidence.ok ? (
            <section
              className={styles.postEvidence}
              data-testid="w3c-post-evidence"
              aria-label="Recommandation post-Evidence"
            >
              <h4 className={styles.blockTitle}>Recommandation post-Evidence</h4>
              <dl className={styles.facts}>
                <div>
                  <dt>Kind</dt>
                  <dd data-testid="w3c-recommendation-kind">
                    {postEvidence.recommendation.kind}
                  </dd>
                </div>
                <div>
                  <dt>Headline</dt>
                  <dd data-testid="w3c-recommendation-headline">
                    {postEvidence.recommendation.headline}
                  </dd>
                </div>
                <div>
                  <dt>Authority</dt>
                  <dd data-testid="w3c-recommendation-authority">
                    none — Recommendation ≠ HumanDecision
                  </dd>
                </div>
                <div>
                  <dt>Analyse Nora</dt>
                  <dd data-testid="w3c-nora-analysis">
                    {postEvidence.analysisText ??
                      postEvidence.analysisUnavailableReason ??
                      "indisponible"}
                  </dd>
                </div>
                <div>
                  <dt>LPS version</dt>
                  <dd data-testid="w3c-lps-version">
                    {postEvidence.lpsVersion ?? "—"}
                  </dd>
                </div>
                <div>
                  <dt>Décision humaine requise</dt>
                  <dd data-testid="w3c-requires-human-decision">
                    {postEvidence.recommendation.requiresHumanDecision
                      ? "oui"
                      : "non"}
                  </dd>
                </div>
              </dl>
              {postEvidence.recommendation.kind === "recover" ||
              postEvidence.recommendation.kind === "replan" ||
              postEvidence.recommendation.requiresHumanDecision ? (
                <button
                  type="button"
                  className={styles.secondaryAction}
                  data-testid="w3c-propose-trajectory"
                  onClick={() => void proposeOptions()}
                  disabled={busy !== null}
                >
                  Proposer des options de trajectoire
                </button>
              ) : null}
            </section>
          ) : null}
          <details className={styles.technicalDetails}>
            <summary data-testid="w3b-technical-details-toggle">
              Détail technique (secondaire)
            </summary>
            <dl className={styles.facts}>
              <div>
                <dt>Attempt</dt>
                <dd
                  className={styles.code}
                  data-testid="w3b-technical-attempt-id"
                >
                  {productOutcome.technicalDetail.attemptId}
                </dd>
              </div>
              <div>
                <dt>Statut technique</dt>
                <dd data-testid="w3b-technical-status">
                  {productOutcome.technicalDetail.attemptStatus}
                </dd>
              </div>
              <div>
                <dt>resultRef</dt>
                <dd className={styles.code} data-testid="w3b-technical-result-ref">
                  {productOutcome.technicalDetail.resultRef ?? "—"}
                </dd>
              </div>
              <div>
                <dt>errorRef / stopReason</dt>
                <dd
                  className={styles.code}
                  data-testid="w3b-technical-error-or-stop"
                >
                  {productOutcome.technicalDetail.errorRef ??
                    productOutcome.technicalDetail.stopReason ??
                    "—"}
                </dd>
              </div>
            </dl>
          </details>
          {(() => {
            const visibleReservations = filterProductReservationsForDisplay(
              productOutcome.reservations,
              Boolean(postEvidence && postEvidence.ok),
            );
            if (visibleReservations.length === 0) return null;
            return (
              <ul data-testid="w3b-reservations" className={styles.blockNote}>
                {visibleReservations.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            );
          })()}
          <button
            type="button"
            className={styles.secondaryAction}
            data-testid="w3b-rehydrate-product"
            onClick={() => void rehydrateProduct()}
            disabled={busy !== null || !attempt?.attemptId}
          >
            Recharger résultat produit (durable)
          </button>
        </section>
      ) : null}
    </section>
  );
}
