"use client";

/**
 * W2 product surface — Options, Recommendation, HumanDecision, decided
 * trajectory, contract inspection and effective authority.
 *
 * The surface never derives truth: every state shown here comes from a server
 * action over the product application path. Distinctions the Pilote must see
 * are carried by explicit labels — an Option is labelled OPTION, a
 * Recommendation states it is not a decision, and the authority verdict states
 * that nothing is executed.
 */

import { useCallback, useState } from "react";
import { projectAssistantPrepareM3Action } from "@/features/project-assistant/actions";
import {
  w2AuthorizeExecutionContractAction,
  w2ConfirmExecutionContractAction,
  w2DecideTrajectoryAction,
  w2InspectExecutionContractAction,
  w2ProposeTrajectoryOptionsAction,
} from "@/features/project-assistant/w2/actions";
import type {
  ContractInspectionStateDto,
  DecidedTrajectoryDto,
  ExecutionAuthorizationOutcomeDto,
  TrajectoryDecisionRecordDto,
  TrajectoryOptionSetDto,
} from "@/features/project-assistant/w2/types";
import styles from "./TrajectorySurface.module.css";

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
};

type Busy =
  | null
  | "options"
  | "decision"
  | "contract"
  | "inspection"
  | "confirmation"
  | "authorization";

export function TrajectorySurface({
  projectId,
  onDurableFactsChanged,
}: {
  projectId: string;
  onDurableFactsChanged?: () => void;
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
    onDurableFactsChanged?.();
  }, [projectId, onDurableFactsChanged]);

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
    if (!decision) return;
    setBusy("contract");
    setError(null);
    const result = await projectAssistantPrepareM3Action({
      projectId,
      decisionId: decision.decisionId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setContract({
      executionContractId: result.f3.contract.executionContractId,
      version: result.f3.contract.version,
      status: result.f3.contract.status,
      action: result.f3.contract.action,
      target: result.f3.contract.target,
      scope: result.f3.contract.scope,
      requiredAuthority: result.f3.contract.requiredAuthority,
      constraints: [...(result.f3.contract.constraints ?? [])],
      stopConditions: [...(result.f3.contract.stopConditions ?? [])],
      requiredCapabilities: [
        ...(result.f3.contract.requiredCapabilities ?? []),
      ],
      reversibility: result.f3.contract.reversibility ?? "non précisée",
      semanticFingerprint: result.f3.contract.semanticFingerprint,
    });
    setInspection(null);
    setAuthorization(null);
    onDurableFactsChanged?.();
  }, [decision, projectId, onDurableFactsChanged]);

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
  }, [contract, projectId]);

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
          courante. Rien n&apos;est exécuté ici.
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
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.primaryAction}
              data-testid="w2-prepare-contract"
              onClick={() => void prepareContract()}
              disabled={busy !== null}
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
              <dd>{contract.requiredAuthority}</dd>
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
                Confirmer (autorité requise)
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
          <p className={styles.stopNotice} data-testid="w2-stop-before-execute">
            Aucune exécution n&apos;a été lancée : arrêt avant exécution.
          </p>
        </section>
      ) : null}
    </section>
  );
}
