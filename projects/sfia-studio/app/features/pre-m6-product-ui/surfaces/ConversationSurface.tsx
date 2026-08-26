"use client";

import { useId } from "react";
import {
  BOUNDED_RUNNING_REFRESH_ACTION,
  BOUNDED_RUNNING_REFRESH_HELP,
  BOUNDED_RUNNING_REFRESH_TITLE,
  G_UX_08_AMEND_DEFERRED_MESSAGE,
  attemptStatusUserLabel,
  confirmationPathChip,
  contractUserFacingFacts,
  evidenceVerifiedUserLabel,
  executionSemanticKind,
  executionSemanticUserLabel,
  isBoundedRunningAttemptRefreshable,
  postExecutionUserSummary,
} from "@/features/project-assistant/presentationLabels";
import type { AssistantToolEventDto } from "@/features/project-assistant/types";
import type { F2DecisionKind } from "@/features/project-assistant/f2/types";
import type { ProductConversationController } from "../hooks/useProductConversation";
import styles from "./ConversationSurface.module.css";

const DECISION_ACTIONS: readonly {
  kind: F2DecisionKind;
  label: string;
  tone: "primary" | "secondary" | "quiet" | "danger";
}[] = [
  { kind: "GO", label: "Approuver", tone: "primary" },
  { kind: "GO_WITH_RESERVES", label: "Approuver avec réserves", tone: "secondary" },
  { kind: "AMEND", label: "Demander une modification", tone: "quiet" },
  { kind: "NO_GO", label: "Rejeter", tone: "danger" },
];

function sourceStatusLabel(status: AssistantToolEventDto["status"]): string {
  switch (status) {
    case "succeeded":
      return "Consulté";
    case "denied":
      return "Refusé";
    case "failed":
      return "Échec";
    case "started":
      return "En cours";
    default:
      return "Demandé";
  }
}

export type ConversationSurfaceProps = {
  controller: ProductConversationController;
  /**
   * TEST / HARVEST harness only. When true, restores historical F2 gate + F3
   * prepare/confirm-execute affordances. Product `/studio` path must leave this
   * unset/false so TrajectorySurface remains the sole authority/execute chain.
   */
  exposeLegacyAuthorityPath?: boolean;
};

/**
 * Nora conversation + qualification surface.
 * Product authority path (HumanDecision / EC / Confirmation / Execute) lives on
 * TrajectorySurface (W2/W3). Legacy F2/F3 affordances stay behind
 * `exposeLegacyAuthorityPath` for harvest / RETIRE LATER proofs only.
 */
export function ConversationSurface({
  controller,
  exposeLegacyAuthorityPath = false,
}: ConversationSurfaceProps) {
  const fieldId = useId();
  const liveRegionId = useId();
  const {
    listRef,
    messages,
    draft,
    setDraft,
    toolEvents,
    uiState,
    error,
    modeLabel,
    ephemeralNotice,
    f2,
    activeProposal,
    reservesText,
    setReservesText,
    f3Prepare,
    f3M3Resolved,
    f3Execute,
    durableEvidenceOutcome,
    durableRehydrateError,
    busy,
    blocked,
    canSend,
    gateOpen,
    recommendationFreshness,
    qualificationFreshness,
    durableOutcomeFreshness,
    canPrepareResolvedM3,
    canPrepareLegacyFixture,
    canConfirmResolvedM3,
    canConfirmLegacyFixture,
    canRefreshResolvedM3Running,
    sendMessage,
    decide,
    prepareResolvedM3,
    prepareLegacyFixture,
    confirmAndExecuteResolvedM3,
    confirmAndExecuteLegacyFixture,
    refreshResolvedM3RunningAttempt,
    retryLastUserMessage,
  } = controller;

  const attemptLabel = f3Execute
    ? attemptStatusUserLabel(f3Execute.attempt.status)
    : null;
  const runningRefreshVisible = isBoundedRunningAttemptRefreshable({
    attemptStatus: f3Execute?.attempt.status,
    realProcessInvoked: f3Execute?.attempt.realProcessInvoked,
    executionMode: f3Execute?.attempt.executionMode,
    payloadMode: f3Execute?.mode,
    contractStatus: f3Execute?.contract.status,
  });
  const contractFacts = f3M3Resolved
    ? contractUserFacingFacts(f3M3Resolved.successor)
    : null;
  const executeSemantic = f3Execute
    ? executionSemanticUserLabel({
        mode: f3Execute.mode,
        payloadMode: f3Execute.mode,
        executionMode: f3Execute.attempt.executionMode,
        adapterId: f3Execute.attempt.adapterId,
        adapterRef: f3Execute.attempt.adapterRef,
        realProcessInvoked: f3Execute.attempt.realProcessInvoked,
        realExecution: f3Execute.realExecution,
        processRef: f3Execute.attempt.processRef,
        evidenceId: f3Execute.evidence.evidenceId,
        reviewBundleId: f3Execute.reviewBundle.reviewBundleId,
      })
    : null;
  const executeKind = f3Execute
    ? executionSemanticKind({
        mode: f3Execute.mode,
        payloadMode: f3Execute.mode,
        executionMode: f3Execute.attempt.executionMode,
        adapterId: f3Execute.attempt.adapterId,
        adapterRef: f3Execute.attempt.adapterRef,
        realProcessInvoked: f3Execute.attempt.realProcessInvoked,
        realExecution: f3Execute.realExecution,
        processRef: f3Execute.attempt.processRef,
        evidenceId: f3Execute.evidence.evidenceId,
      })
    : "none";
  const executeSummary = f3Execute
    ? postExecutionUserSummary({
        attemptStatus: f3Execute.attempt.status,
        evidenceStatus: f3Execute.evidence.status,
        reviewBundleStatus: f3Execute.reviewBundle.status,
        nextGateCode: f3Execute.recommendation.nextGateCode,
        nextActionCode: f3Execute.recommendation.nextActionCode,
        analysisText: f3Execute.recommendation.analysisText,
        analysisStatus: f3Execute.recommendation.analysisStatus,
      })
    : null;
  const durableSemanticFacts = durableEvidenceOutcome
    ? {
        mode: durableEvidenceOutcome.recommendation.mode,
        evidenceId: durableEvidenceOutcome.evidence[0]?.evidenceId,
        reviewBundleId: durableEvidenceOutcome.reviewBundles[0]?.reviewBundleId,
        durableRead: true as const,
      }
    : null;
  const durableSemantic = durableSemanticFacts
    ? executionSemanticUserLabel(durableSemanticFacts)
    : null;
  const durableSummary = durableEvidenceOutcome
    ? postExecutionUserSummary({
        evidenceStatus: durableEvidenceOutcome.evidence[0]?.status,
        reviewBundleStatus: durableEvidenceOutcome.reviewBundles[0]?.status,
        nextGateCode: durableEvidenceOutcome.recommendation.nextGateCode,
        nextActionCode: durableEvidenceOutcome.recommendation.nextActionCode,
        analysisText: durableEvidenceOutcome.recommendation.analysisText,
        analysisStatus: durableEvidenceOutcome.recommendation.analysisStatus,
        durableRecorded: true,
      })
    : null;
  const showFixtureNoRealStamp =
    executeKind !== "cursor_real" &&
    executeKind !== "deterministic_test" &&
    executionSemanticKind(durableSemanticFacts) !== "cursor_real" &&
    executionSemanticKind(durableSemanticFacts) !== "durable_read";

  return (
    <section
      className={styles.root}
      data-testid="project-assistant-panel"
      data-ui-state={uiState}
    >
      <div className={styles.topBar}>
        <div className={styles.identity} data-testid="project-assistant-mode-pill">
          <span className={styles.noraDot} aria-hidden>
            N
          </span>
          <span className={styles.identityText}>
            <span className={styles.identityName}>Nora</span>
            <span
              className={styles.identityRole}
              data-testid="project-assistant-ephemeral"
            >
              Recommande — la décision vous appartient
            </span>
          </span>
        </div>
        {modeLabel.toLowerCase().includes("indisponible") ? (
          <span className={styles.chipWarn}>{modeLabel}</span>
        ) : null}
      </div>

      <div
        ref={listRef}
        className={styles.thread}
        data-testid="project-assistant-messages"
        aria-live="polite"
        id={liveRegionId}
      >
        {messages.length === 0 ? (
          <div className={styles.threadEmpty} data-testid="project-assistant-empty">
            <p className={styles.threadEmptyTitle}>
              Dites à Nora ce que vous voulez accomplir
            </p>
            <p className={styles.threadEmptyBody}>
              Elle qualifie votre intention à partir du projet enregistré, puis
              vous propose une décision. Rien n&apos;est lancé sans votre accord.
            </p>
          </div>
        ) : (
          messages.map((message) => (
            <article
              key={message.id}
              className={
                message.role === "user" ? styles.turnMine : styles.turnNora
              }
              data-testid={`project-assistant-turn-${message.role}`}
              data-role={message.role}
            >
              <span className={styles.turnAvatar} aria-hidden>
                {message.role === "user" ? "P" : "N"}
              </span>
              <div className={styles.bubble}>
                <p className={styles.bubbleAuthor}>
                  {message.role === "user" ? "Pilote" : "Nora"}
                </p>
                <p className={styles.bubbleText}>{message.content}</p>
              </div>
            </article>
          ))
        )}
      </div>

      {f2 ? (
        <div
          className={styles.chipRow}
          data-testid="project-assistant-f2-labels"
          aria-live="polite"
        >
          {f2.labels.recommendation ? (
            <span className={styles.chip}>{f2.labels.recommendation}</span>
          ) : null}
          {f2.labels.proposition ? (
            <span className={styles.chip}>{f2.labels.proposition}</span>
          ) : null}
          {f2.labels.decisionRequired ? (
            <span className={styles.chipGold}>{f2.labels.decisionRequired}</span>
          ) : null}
          {f2.labels.decisionTaken ? (
            <span className={styles.chipOk}>{f2.labels.decisionTaken}</span>
          ) : null}
          <span className={styles.chipQuiet}>{f2.labels.noExecution}</span>
        </div>
      ) : null}

      {f2?.qualification ? (
        <section
          className={styles.card}
          data-testid="project-assistant-qualification"
          aria-labelledby={`${fieldId}-qualification`}
        >
          <header className={styles.cardHead}>
            <p className={styles.cardEyebrow}>Lecture de Nora</p>
            <h3 id={`${fieldId}-qualification`} className={styles.cardTitle}>
              Ce que Nora comprend
            </h3>
            <p className={styles.cardNote} data-testid="f2-recommendation-freshness">
              {f2.qualification.recommendationLabel} ·{" "}
              {qualificationFreshness.label}
            </p>
            <p className={styles.cardNote}>
              Une recommandation n&apos;est pas une décision humaine.
            </p>
          </header>
          <dl className={styles.facts}>
            <div className={styles.fact}>
              <dt>Type de travail</dt>
              <dd data-testid="f2-cycle">{f2.qualification.cycleLabel}</dd>
            </div>
            <div className={styles.fact}>
              <dt>Approche recommandée</dt>
              <dd data-testid="f2-profile">
                {f2.qualification.recommendedProfile}
              </dd>
            </div>
            <div className={styles.factWide}>
              <dt>Pourquoi</dt>
              <dd data-testid="f2-rationale">{f2.qualification.rationale}</dd>
            </div>
          </dl>
          <details className={styles.details}>
            <summary>Détails techniques</summary>
            <dl className={styles.facts}>
              <div className={styles.factWide}>
                <dt>Identifiant de cycle</dt>
                <dd>{f2.qualification.cycleTypeId}</dd>
              </div>
              {f2.qualification.cycleInstanceId ? (
                <div className={styles.factWide}>
                  <dt>Cycle rattaché</dt>
                  <dd data-testid="f2-cycle-instance">
                    {f2.qualification.cycleInstanceId}
                    {f2.qualification.cycleStatus
                      ? ` · ${f2.qualification.cycleStatus}`
                      : ""}
                  </dd>
                </div>
              ) : null}
              {f2.qualification.ckcResolutionRef ? (
                <div className={styles.factWide}>
                  <dt>Réf. résolution</dt>
                  <dd data-testid="f2-ckc-ref">
                    {f2.qualification.ckcResolutionRef}
                  </dd>
                </div>
              ) : null}
              <div className={styles.factWide}>
                <dt>Provenance</dt>
                <dd data-testid="f2-qualification-provenance">
                  catalogue {f2.qualification.catalogVersion} ·{" "}
                  {f2.qualification.detailedStatus}
                  {f2.qualification.capitalizationViaCycleTypeId
                    ? " · capitalisation via cycleType"
                    : ""}
                </dd>
              </div>
            </dl>
          </details>
        </section>
      ) : null}

      {activeProposal ? (
        <section
          className={styles.card}
          data-testid="project-assistant-proposal"
          aria-labelledby={`${fieldId}-proposal`}
        >
          <header className={styles.cardHead}>
            <p className={styles.cardEyebrow}>Proposition</p>
            <h3 id={`${fieldId}-proposal`} className={styles.cardTitle}>
              Ce que Nora propose
            </h3>
            <p className={styles.cardNote} data-testid="f2-proposal-id">
              Statut {activeProposal.status}
            </p>
          </header>
          {activeProposal.status === "AMENDMENT_REQUIRED" ? (
            <p className={styles.noticeWarn} data-testid="f2-amend-deferred-notice">
              {G_UX_08_AMEND_DEFERRED_MESSAGE}
            </p>
          ) : null}
          <dl className={styles.facts}>
            <div className={styles.factWide}>
              <dt>Demande reformulée</dt>
              <dd>{activeProposal.rephrasedRequest}</dd>
            </div>
            <div className={styles.factWide}>
              <dt>Objectif</dt>
              <dd>{activeProposal.objective}</dd>
            </div>
            <div className={styles.factWide}>
              <dt>Ce qui est couvert</dt>
              <dd data-testid="f2-proposal-scope">{activeProposal.scope}</dd>
            </div>
            <div className={styles.factWide}>
              <dt>Ce qui reste hors périmètre</dt>
              <dd data-testid="f2-proposal-out-of-scope">
                {activeProposal.outOfScope
                  .map((item) =>
                    /cursor\s*real/i.test(item)
                      ? "Exécution réelle hors périmètre de cette étape"
                      : item,
                  )
                  .join(" · ")}
              </dd>
            </div>
            <div className={styles.fact}>
              <dt>Votre accord</dt>
              <dd data-testid="f2-gate-required">
                {activeProposal.morrisGateRequired
                  ? "Décision sur la proposition requise"
                  : "Aucune décision requise pour l’instant"}
              </dd>
            </div>
            <div className={styles.fact}>
              <dt>Étape suivante possible</dt>
              <dd>{activeProposal.nextPossibleStep}</dd>
            </div>
          </dl>
          <details className={styles.details}>
            <summary>Détails techniques</summary>
            <dl className={styles.facts}>
              <div className={styles.factWide}>
                <dt>Contexte</dt>
                <dd data-testid="f2-context-snapshot">
                  {activeProposal.contextSnapshot.projectId} /{" "}
                  {activeProposal.contextSnapshot.lpsId}@
                  {activeProposal.contextSnapshot.lpsVersion}
                  {activeProposal.contextSnapshot.activeCycleInstanceId
                    ? ` · cycle ${activeProposal.contextSnapshot.activeCycleInstanceId}`
                    : ""}
                </dd>
              </div>
            </dl>
          </details>
          <p className={styles.noticeQuiet} data-testid="f2-process-local-notice">
            {activeProposal.processLocalNotice}
          </p>
          <p className={styles.stamp} data-testid="f2-no-execution">
            AUCUNE EXÉCUTION
          </p>
        </section>
      ) : null}

      {gateOpen && !exposeLegacyAuthorityPath ? (
        <section
          className={styles.card}
          data-testid="product-authority-path-guidance"
          aria-labelledby={`${fieldId}-authority-guidance`}
        >
          <header className={styles.cardHead}>
            <p className={styles.cardEyebrow}>Suite du parcours</p>
            <h3
              id={`${fieldId}-authority-guidance`}
              className={styles.cardTitle}
            >
              Décidez la trajectoire ci-dessous
            </h3>
            <p className={styles.cardNote}>
              La qualification est enregistrée. La décision de trajectoire, le
              contrat, la confirmation et l&apos;exécution se font dans la
              section « Trajectoire et décision ».
            </p>
          </header>
        </section>
      ) : null}

      {gateOpen && exposeLegacyAuthorityPath ? (
        <section
          className={styles.decisionCard}
          data-testid="project-assistant-gate"
          aria-labelledby={`${fieldId}-gate`}
        >
          <p className={styles.decisionEyebrow}>DÉCISION REQUISE</p>
          <h3 id={`${fieldId}-gate`} className={styles.decisionTitle}>
            Nora recommande. Vous décidez.
          </h3>
          <p className={styles.decisionNote}>
            Votre décision est enregistrée. Elle n&apos;est pas une confirmation
            d&apos;exécution.
          </p>
          <label className={styles.reservesLabel} htmlFor={`${fieldId}-reserves`}>
            Réserves (obligatoires pour « Approuver avec réserves »)
          </label>
          <textarea
            id={`${fieldId}-reserves`}
            className={styles.reservesInput}
            data-testid="f2-reserves-input"
            rows={2}
            value={reservesText}
            disabled={busy}
            placeholder="Précisez vos réserves…"
            onChange={(event) => setReservesText(event.target.value)}
          />
          <div
            className={styles.decisionActions}
            role="group"
            aria-label="Votre décision"
          >
            {DECISION_ACTIONS.map((action) => (
              <button
                key={action.kind}
                type="button"
                className={styles.decisionButton}
                data-tone={action.tone}
                data-testid={`f2-decide-${action.kind}`}
                disabled={busy}
                onClick={() => decide(action.kind)}
              >
                {action.label}
              </button>
            ))}
          </div>
        </section>
      ) : null}

      {exposeLegacyAuthorityPath && f2?.decision ? (
        <section
          className={styles.cardOk}
          data-testid="project-assistant-decision"
          aria-live="polite"
        >
          <header className={styles.cardHead}>
            <p className={styles.cardEyebrow}>Décision sur la proposition</p>
            <h3 className={styles.cardTitle}>
              Votre décision est prise en compte
            </h3>
          </header>
          <dl className={styles.facts}>
            <div className={styles.fact}>
              <dt>Décision</dt>
              <dd data-testid="f2-decision-kind">{f2.decision.kind}</dd>
            </div>
            <div className={styles.fact}>
              <dt>Portée</dt>
              <dd data-testid="f2-decision-scope">Scope: {f2.decision.scope}</dd>
            </div>
          </dl>
          {f2.decision.readyForNextGatedStep ? (
            <p className={styles.noticeOk} data-testid="f2-ready-next">
              READY FOR NEXT GATED STEP
            </p>
          ) : null}
          <p className={styles.stamp} data-testid="f2-decision-no-execution">
            AUCUNE EXÉCUTION
          </p>
          <details className={styles.details}>
            <summary>Détails techniques</summary>
            <dl className={styles.facts}>
              <div className={styles.factWide}>
                <dt>Identifiant décision</dt>
                <dd className={styles.code} data-testid="f2-decision-id">
                  {f2.decision.decisionId}
                </dd>
              </div>
              <div className={styles.factWide}>
                <dt>executionPerformed</dt>
                <dd data-testid="f2-execution-performed">
                  executionPerformed: {String(f2.decision.executionPerformed)}
                </dd>
              </div>
            </dl>
          </details>
        </section>
      ) : null}

      {exposeLegacyAuthorityPath &&
      (canPrepareResolvedM3 || canPrepareLegacyFixture) ? (
        <section className={styles.card} data-testid="project-assistant-f3-prepare">
          <header className={styles.cardHead}>
            <p className={styles.cardEyebrow}>Étape suivante</p>
            <h3 className={styles.cardTitle}>Préparer le contrat</h3>
            <p className={styles.cardNote}>
              Votre accord autorise seulement la préparation d&apos;un contrat.
              La confirmation reste une étape distincte, process-local.
            </p>
          </header>
          <div className={styles.chipRow} data-testid="f3-prepare-labels">
            <span className={styles.chipQuiet}>Aucune exécution lancée à cette étape</span>
            <span className={styles.chipQuiet}>Confirmation non durable</span>
          </div>
          <button
            type="button"
            className={styles.primaryButton}
            data-testid="f3-prepare-button"
            disabled={!canPrepareResolvedM3}
            onClick={() => prepareResolvedM3()}
          >
            Préparer le contrat d&apos;exécution
          </button>
          <details className={styles.details}>
            <summary>Détails techniques / chemin legacy</summary>
            <p className={styles.cardNote}>
              Chemin produit canonique après GO : HumanDecision durable → M3
              PREPARE → résolution fixture-safe. Le chemin Proposal/fixture reste
              fail-closed (STALE) après avancement LPS — preuve négative
              uniquement.
            </p>
            <button
              type="button"
              className={styles.quietButton}
              data-testid="f3-legacy-fixture-prepare-button"
              disabled={!canPrepareLegacyFixture}
              onClick={() => prepareLegacyFixture()}
            >
              Chemin legacy fixture (Proposal)
            </button>
          </details>
        </section>
      ) : null}

      {exposeLegacyAuthorityPath && f3M3Resolved && !f3Execute ? (
        <section
          className={styles.contractCard}
          data-testid="project-assistant-f3-contract"
        >
          <header className={styles.cardHead}>
            <p className={styles.cardEyebrow}>Contrat prêt</p>
            <h3 className={styles.cardTitle}>
              Relisez, puis confirmez l&apos;exécution
            </h3>
          </header>
          <div className={styles.chipRow} data-testid="f3-contract-labels">
            <span className={styles.chip}>Contrat résolu</span>
            <span className={styles.chipQuiet}>Confirmation process-local</span>
            <span
              className={styles.chip}
              data-testid="f3-contract-semantic-chip"
            >
              {confirmationPathChip({
                mode: f3M3Resolved.mode,
                realExecution: f3M3Resolved.realExecution,
                disclosures: f3M3Resolved.disclosures,
              })}
            </span>
          </div>
          <dl className={styles.facts} data-testid="f3-contract-user-summary">
            {contractFacts?.action ? (
              <div className={styles.factWide}>
                <dt>Ce que l&apos;agent va faire</dt>
                <dd data-testid="f3-contract-action">{contractFacts.action}</dd>
              </div>
            ) : null}
            {contractFacts?.target ? (
              <div className={styles.factWide}>
                <dt>Cible</dt>
                <dd data-testid="f3-contract-target">{contractFacts.target}</dd>
              </div>
            ) : null}
            {contractFacts?.scope ? (
              <div className={styles.factWide}>
                <dt>Périmètre</dt>
                <dd data-testid="f3-contract-scope">{contractFacts.scope}</dd>
              </div>
            ) : null}
            {contractFacts && contractFacts.capabilities.length > 0 ? (
              <div className={styles.factWide}>
                <dt>Capacité requise</dt>
                <dd data-testid="f3-contract-capabilities">
                  {contractFacts.capabilities.join(", ")}
                </dd>
              </div>
            ) : null}
            {contractFacts?.reversibility ? (
              <div className={styles.fact}>
                <dt>Réversibilité</dt>
                <dd data-testid="f3-contract-reversibility">
                  {contractFacts.reversibility}
                </dd>
              </div>
            ) : null}
            {contractFacts && contractFacts.constraints.length > 0 ? (
              <div className={styles.factWide}>
                <dt>Contraintes et non-effets</dt>
                <dd data-testid="f3-contract-constraints">
                  {contractFacts.constraints.join(" · ")}
                </dd>
              </div>
            ) : null}
            {contractFacts?.authority ? (
              <div className={styles.factWide}>
                <dt>Autorité demandée maintenant</dt>
                <dd data-testid="f3-contract-authority-user">
                  {contractFacts.authority}
                </dd>
              </div>
            ) : null}
          </dl>
          <details className={styles.details}>
            <summary>Détails techniques</summary>
            <dl className={styles.facts}>
              <div className={styles.fact}>
                <dt>Statut</dt>
                <dd data-testid="f3-contract-status">
                  {f3M3Resolved.successor.status}
                </dd>
              </div>
              <div className={styles.fact}>
                <dt>Version</dt>
                <dd data-testid="f3-contract-version">
                  {f3M3Resolved.successor.version}
                </dd>
              </div>
              <div className={styles.factWide}>
                <dt>Identifiant contrat</dt>
                <dd className={styles.code} data-testid="f3-contract-id">
                  {f3M3Resolved.successor.executionContractId}
                </dd>
              </div>
              <div className={styles.factWide}>
                <dt>PREPARE d&apos;origine</dt>
                <dd className={styles.code} data-testid="f3-m3-original-contract-id">
                  {f3M3Resolved.original.executionContractId}
                </dd>
              </div>
              <div className={styles.factWide}>
                <dt>Autorité requise</dt>
                <dd data-testid="f3-contract-authority">
                  {f3M3Resolved.successor.requiredAuthority}
                </dd>
              </div>
              {(f3M3Resolved.successor.stopConditions ?? []).length > 0 ? (
                <div className={styles.factWide}>
                  <dt>Conditions d&apos;arrêt</dt>
                  <dd data-testid="f3-contract-stop-conditions">
                    {(f3M3Resolved.successor.stopConditions ?? []).join(" · ")}
                  </dd>
                </div>
              ) : null}
              {(f3M3Resolved.successor.constraints ?? []).length > 0 ? (
                <div className={styles.factWide}>
                  <dt>Contraintes brutes</dt>
                  <dd
                    className={styles.code}
                    data-testid="f3-contract-raw-constraints"
                  >
                    {(f3M3Resolved.successor.constraints ?? []).join(" · ")}
                  </dd>
                </div>
              ) : null}
            </dl>
          </details>
          <p className={styles.stamp} data-testid="f3-prepare-no-attempt">
            Tentatives : 0 — aucune tentative créée. La confirmation reste
            process-local (non durable).
          </p>
          {recommendationFreshness.status === "stale" ? (
            <p
              className={styles.noticeWarn}
              data-testid="f3-stale-recommendation-notice"
            >
              Recommandation périmée — ce n&apos;est pas une décision humaine et
              ce n&apos;est pas un nouveau GO d&apos;exécution. La confirmation
              reste gouvernée par le contrat et la décision déjà enregistrés.
            </p>
          ) : null}
          <button
            type="button"
            className={styles.primaryButton}
            data-testid="f3-confirm-execute-button"
            disabled={!canConfirmResolvedM3}
            onClick={() => confirmAndExecuteResolvedM3()}
          >
            Confirmer l&apos;exécution
          </button>
        </section>
      ) : null}

      {exposeLegacyAuthorityPath && f3Prepare && !f3Execute ? (
        <section
          className={styles.card}
          data-testid="project-assistant-f3-legacy-contract"
        >
          <header className={styles.cardHead}>
            <p className={styles.cardEyebrow}>Chemin legacy</p>
            <h3 className={styles.cardTitle}>Contrat fixture (Proposal)</h3>
          </header>
          <div className={styles.chipRow} data-testid="f3-legacy-contract-labels">
            <span className={styles.chip}>Contrat</span>
            <span className={styles.chipQuiet}>Confirmation process-local</span>
            <span className={styles.chipWarn}>Fixture de test — pas une exécution Cursor réelle</span>
          </div>
          <details className={styles.details} open>
            <summary>Détails techniques</summary>
            <dl className={styles.facts}>
              <div className={styles.factWide}>
                <dt>Identifiant contrat</dt>
                <dd className={styles.code} data-testid="f3-legacy-contract-id">
                  {f3Prepare.contract.executionContractId}
                </dd>
              </div>
              <div className={styles.fact}>
                <dt>Version</dt>
                <dd data-testid="f3-legacy-contract-version">
                  {f3Prepare.contract.version}
                </dd>
              </div>
              <div className={styles.fact}>
                <dt>Statut</dt>
                <dd data-testid="f3-legacy-contract-status">
                  {f3Prepare.contract.status}
                </dd>
              </div>
              <div className={styles.fact}>
                <dt>Mode</dt>
                <dd data-testid="f3-legacy-contract-mode">
                  {f3Prepare.contract.mode}
                </dd>
              </div>
            </dl>
          </details>
          <p className={styles.stamp} data-testid="f3-legacy-prepare-no-attempt">
            Tentative non créée — confirmation process-local (non durable).
          </p>
          <button
            type="button"
            className={styles.quietButton}
            data-testid="f3-legacy-confirm-execute-button"
            disabled={!canConfirmLegacyFixture}
            onClick={() => confirmAndExecuteLegacyFixture()}
          >
            Confirmer et exécuter (legacy fixture)
          </button>
        </section>
      ) : null}

      {exposeLegacyAuthorityPath && f3Execute && attemptLabel ? (
        <section
          className={styles.card}
          data-testid="project-assistant-f3-execute"
          aria-live="polite"
        >
          <header className={styles.cardHead}>
            <p className={styles.cardEyebrow}>
              {runningRefreshVisible ? "Exécution" : "Résultat"}
            </p>
            <h3
              className={styles.cardTitle}
              data-testid={
                runningRefreshVisible ? "f3-running-refresh-title" : undefined
              }
            >
              {runningRefreshVisible
                ? BOUNDED_RUNNING_REFRESH_TITLE
                : "Tentative et recommandation"}
            </h3>
          </header>
          <div className={styles.chipRow} data-testid="f3-execute-labels">
            {runningRefreshVisible ? (
              <span className={styles.chip}>Exécution déjà autorisée</span>
            ) : (
              <span className={styles.chip} data-testid="f3-execute-semantic">
                {executeSemantic}
              </span>
            )}
            {runningRefreshVisible ? null : (
              <span className={styles.chip}>Recommandation — pas une décision</span>
            )}
            {runningRefreshVisible ? null : (
              <span
                className={
                  recommendationFreshness.status === "stale"
                    ? styles.chipWarn
                    : styles.chipQuiet
                }
              >
                {recommendationFreshness.label}
              </span>
            )}
          </div>

          <div className={styles.subCard} data-testid="f3-attempt-card">
            <h4 className={styles.subTitle}>Tentative</h4>
            <p className={styles.subLead} data-testid="f3-attempt-status-label">
              {attemptLabel.label}
            </p>
            {runningRefreshVisible ? (
              <>
                {!attemptLabel.blockedBeforeExecution ? (
                  <p className={styles.code} data-testid="f3-attempt-id">
                    {f3Execute.attempt.attemptId}
                  </p>
                ) : (
                  <p className={styles.subNote} data-testid="f3-attempt-id-omitted">
                    Identifiant de tentative non affiché (bloqué avant exécution).
                  </p>
                )}
                <p className={styles.subNote} data-testid="f3-attempt-status">
                  {f3Execute.attempt.status}
                </p>
              </>
            ) : null}
          </div>

          {runningRefreshVisible ? (
            <>
              <p
                className={styles.cardNote}
                data-testid="f3-running-refresh-help"
              >
                {BOUNDED_RUNNING_REFRESH_HELP}
              </p>
              <button
                type="button"
                className={styles.primaryButton}
                data-testid="f3-refresh-running-button"
                disabled={!canRefreshResolvedM3Running}
                onClick={() => refreshResolvedM3RunningAttempt()}
              >
                {BOUNDED_RUNNING_REFRESH_ACTION}
              </button>
            </>
          ) : (
            <>
          <div className={styles.subCard} data-testid="f3-result-summary">
            <h4 className={styles.subTitle}>Résultat de l&apos;exécution</h4>
            <p className={styles.subLead} data-testid="f3-result-user-summary">
              {executeSummary?.result}
            </p>
          </div>

          <div className={styles.subCard} data-testid="f3-evidence-card">
            <h4 className={styles.subTitle}>Preuve</h4>
            <p className={styles.subLead} data-testid="f3-evidence-user-summary">
              {executeSummary?.evidence}
            </p>
            <p className={styles.subNote} data-testid="f3-evidence-verified-user">
              {evidenceVerifiedUserLabel(f3Execute.evidence.verified)}
            </p>
          </div>

          <div className={styles.subCard} data-testid="f3-review-bundle-card">
            <h4 className={styles.subTitle}>Dossier de revue</h4>
            <p className={styles.subLead} data-testid="f3-review-bundle-user-summary">
              {executeSummary?.reviewBundle}
            </p>
          </div>

          <div className={styles.subCardGold} data-testid="f3-recommendation-card">
            <h4 className={styles.subTitle}>Prochaine action / Recommendation</h4>
            <p className={styles.subLead} data-testid="f3-recommendation-freshness">
              {recommendationFreshness.label}
            </p>
            <p className={styles.subNote} data-testid="f3-next-action-user">
              {executeSummary?.next}
            </p>
            {executeSummary?.analysis ? (
              <p className={styles.subNote} data-testid="f3-recommendation-analysis">
                {executeSummary.analysis}
              </p>
            ) : null}
            <p className={styles.subNote} data-testid="f3-recommendation-label">
              {f3Execute.recommendation.recommendationLabel}
            </p>
            <p className={styles.stamp} data-testid="f3-no-ready-claim">
              PAS DE CLAIM READY
            </p>
          </div>

          <details className={styles.details}>
            <summary>Détails techniques</summary>
            <dl className={styles.facts}>
              {!attemptLabel.blockedBeforeExecution ? (
                <div className={styles.factWide}>
                  <dt>Identifiant tentative</dt>
                  <dd className={styles.code} data-testid="f3-attempt-id">
                    {f3Execute.attempt.attemptId}
                  </dd>
                </div>
              ) : (
                <div className={styles.factWide}>
                  <dt>Tentative</dt>
                  <dd data-testid="f3-attempt-id-omitted">
                    Identifiant de tentative non affiché (bloqué avant exécution).
                  </dd>
                </div>
              )}
              <div className={styles.fact}>
                <dt>Statut technique</dt>
                <dd data-testid="f3-attempt-status">{f3Execute.attempt.status}</dd>
              </div>
              <div className={styles.factWide}>
                <dt>Preuve</dt>
                <dd className={styles.code} data-testid="f3-evidence-id">
                  {f3Execute.evidence.evidenceId}
                </dd>
              </div>
              <div className={styles.fact}>
                <dt>Statut preuve</dt>
                <dd data-testid="f3-evidence-status">{f3Execute.evidence.status}</dd>
              </div>
              <div className={styles.fact}>
                <dt>verified</dt>
                <dd data-testid="f3-evidence-verified">
                  verified: {String(f3Execute.evidence.verified)}
                </dd>
              </div>
              <div className={styles.factWide}>
                <dt>Dossier de revue</dt>
                <dd className={styles.code} data-testid="f3-review-bundle-id">
                  {f3Execute.reviewBundle.reviewBundleId}
                </dd>
              </div>
              <div className={styles.fact}>
                <dt>Statut dossier</dt>
                <dd data-testid="f3-review-bundle-status">
                  {f3Execute.reviewBundle.status}
                </dd>
              </div>
              <div className={styles.fact}>
                <dt>adapterId</dt>
                <dd data-testid="f3-attempt-adapter">{f3Execute.attempt.adapterId}</dd>
              </div>
              <div className={styles.fact}>
                <dt>executionMode</dt>
                <dd data-testid="f3-attempt-execution-mode">
                  {f3Execute.attempt.executionMode}
                </dd>
              </div>
              <div className={styles.factWide}>
                <dt>executionAuthority</dt>
                <dd data-testid="f3-recommendation-execution-authority">
                  Autorité d&apos;exécution:{" "}
                  {String(f3Execute.recommendation.executionAuthority)}
                </dd>
              </div>
              <div className={styles.factWide}>
                <dt>gateConsumed</dt>
                <dd data-testid="f3-recommendation-gate-consumed">
                  Gate consommé: {String(f3Execute.recommendation.gateConsumed)}
                </dd>
              </div>
              <div className={styles.factWide}>
                <dt>decisionCreated</dt>
                <dd data-testid="f3-recommendation-decision-created">
                  Décision créée: {String(f3Execute.recommendation.decisionCreated)}
                </dd>
              </div>
              <div className={styles.factWide}>
                <dt>attemptAutoLaunchNextCycle</dt>
                <dd data-testid="f3-recommendation-auto-launch">
                  {String(f3Execute.recommendation.attemptAutoLaunchNextCycle)}
                </dd>
              </div>
            </dl>
          </details>
            </>
          )}
        </section>
      ) : null}

      {!f3Execute && durableRehydrateError ? (
        <section
          className={styles.cardWarn}
          data-testid="durable-rehydrate-error"
          aria-live="polite"
        >
          <header className={styles.cardHead}>
            <p className={styles.cardEyebrow}>Relecture durable</p>
            <h3 className={styles.cardTitle}>Dernier résultat illisible</h3>
          </header>
          <p className={styles.cardNote}>{durableRehydrateError}</p>
        </section>
      ) : null}

      {!f3Execute && durableEvidenceOutcome ? (
        <section
          className={styles.card}
          data-testid="durable-evidence-outcome"
          aria-live="polite"
        >
          <header className={styles.cardHead}>
            <p className={styles.cardEyebrow}>Relecture durable</p>
            <h3 className={styles.cardTitle}>Dernier résultat enregistré</h3>
          </header>
          <div className={styles.chipRow} data-testid="durable-outcome-labels">
            <span className={styles.chip}>
              RECOMMANDATION — PAS UNE DÉCISION
            </span>
            <span className={styles.chipQuiet}>
              {durableOutcomeFreshness.label}
            </span>
            <span className={styles.chip} data-testid="durable-outcome-semantic">
              {durableSemantic}
            </span>
          </div>
          <p className={styles.cardNote} data-testid="durable-lps-version">
            LPS v{durableEvidenceOutcome.lpsVersion}
          </p>
          <p className={styles.noticeQuiet} data-testid="durable-ephemeral-notice">
            {durableEvidenceOutcome.ephemeralNotice}
          </p>
          <p className={styles.subLead} data-testid="durable-result-user-summary">
            {durableSummary?.result}
          </p>

          <div className={styles.subCard} data-testid="durable-evidence-card">
            <h4 className={styles.subTitle}>Preuves</h4>
            <p className={styles.subLead} data-testid="durable-evidence-user-summary">
              {durableSummary?.evidence}
            </p>
            <dl className={styles.facts}>
              <div className={styles.factWide}>
                <dt>Identifiants</dt>
                <dd className={styles.code} data-testid="durable-evidence-ids">
                  {durableEvidenceOutcome.evidenceIds.join(", ") || "—"}
                </dd>
              </div>
              {durableEvidenceOutcome.evidence.map((ev) => (
                <div className={styles.factWide} key={ev.evidenceId}>
                  <dt>{ev.evidenceId}</dt>
                  <dd data-testid={`durable-evidence-status-${ev.evidenceId}`}>
                    {ev.status}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {durableEvidenceOutcome.reviewBundles.map((rb) => (
            <div
              key={rb.reviewBundleId}
              className={styles.subCard}
              data-testid="durable-review-bundle-card"
            >
              <h4 className={styles.subTitle}>Dossier de revue</h4>
              <p className={styles.code} data-testid="durable-review-bundle-id">
                {rb.reviewBundleId}
              </p>
              <p className={styles.subNote} data-testid="durable-review-bundle-status">
                {rb.status}
              </p>
            </div>
          ))}

          <div
            className={styles.subCardGold}
            data-testid="durable-recommendation-card"
          >
            <h4 className={styles.subTitle}>Recommandation</h4>
            <p className={styles.subLead} data-testid="durable-recommendation-label">
              {durableEvidenceOutcome.recommendation.recommendationLabel}
            </p>
            <p className={styles.subNote} data-testid="durable-next-action-user">
              {durableSummary?.next}
            </p>
            {durableSummary?.analysis ? (
              <p className={styles.subNote} data-testid="durable-recommendation-analysis">
                {durableSummary.analysis}
              </p>
            ) : null}
            <details className={styles.details}>
              <summary>Détails techniques</summary>
              <p
                className={styles.subNote}
                data-testid="durable-recommendation-execution-authority"
              >
                executionAuthority:{" "}
                {String(durableEvidenceOutcome.recommendation.executionAuthority)}
              </p>
              <p
                className={styles.subNote}
                data-testid="durable-recommendation-gate-consumed"
              >
                gateConsumed:{" "}
                {String(durableEvidenceOutcome.recommendation.gateConsumed)}
              </p>
              <p
                className={styles.subNote}
                data-testid="durable-recommendation-decision-created"
              >
                decisionCreated:{" "}
                {String(durableEvidenceOutcome.recommendation.decisionCreated)}
              </p>
              <p
                className={styles.subNote}
                data-testid="durable-recommendation-auto-launch"
              >
                attemptAutoLaunchNextCycle:{" "}
                {String(
                  durableEvidenceOutcome.recommendation.attemptAutoLaunchNextCycle,
                )}
              </p>
            </details>
          </div>
        </section>
      ) : null}

      {error ? (
        <div
          className={styles.errorBox}
          role="alert"
          data-testid="project-assistant-error"
        >
          <p className={styles.errorText}>{error}</p>
          {uiState === "ERROR_RECOVERABLE" ? (
            <button
              type="button"
              className={styles.quietButton}
              data-testid="project-assistant-retry"
              onClick={() => retryLastUserMessage()}
            >
              Réessayer
            </button>
          ) : null}
        </div>
      ) : null}

      <details className={styles.detailsFlat}>
        <summary>Sources et limites</summary>
        <p className={styles.cardNote} data-testid="project-assistant-scope">
          Qualification · proposition · décision humaine · contrat /
          confirmation · tentative · recommandation. Aucune exécution
          automatique. {ephemeralNotice}
        </p>
        <section
          className={styles.sources}
          aria-label="Sources consultées"
          data-testid="project-assistant-sources"
        >
          {toolEvents.length === 0 ? (
            <p className={styles.cardNote}>
              Aucune source consultée pour l&apos;instant.
            </p>
          ) : (
            <ul className={styles.sourceList}>
              {toolEvents.map((event, index) => (
                <li
                  key={`${event.toolName}-${index}-${event.pathOrRef ?? "na"}`}
                  className={styles.sourceItem}
                  data-testid="project-assistant-source-item"
                  data-status={event.status}
                >
                  <span className={styles.sourceName}>{event.toolName}</span>
                  <span className={styles.sourceStatus}>
                    {sourceStatusLabel(event.status)}
                  </span>
                  {event.pathOrRef ? (
                    <span className={styles.code}>{event.pathOrRef}</span>
                  ) : null}
                  <span className={styles.sourceDetail}>
                    {event.summary ?? "Aucun résumé supplémentaire."}
                    {event.errorCode ? ` (${event.errorCode})` : ""} · lecture
                    seule confirmée
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </details>

      <form
        className={styles.composer}
        data-testid="project-assistant-composer"
        onSubmit={(event) => {
          event.preventDefault();
          sendMessage();
        }}
      >
        <label className={styles.srOnly} htmlFor={`${fieldId}-message`}>
          Décrivez ce que vous voulez accomplir
        </label>
        <textarea
          id={`${fieldId}-message`}
          className={styles.composerInput}
          data-testid="project-assistant-input"
          rows={3}
          value={draft}
          disabled={busy || blocked}
          placeholder="Décrivez ce que vous voulez accomplir…"
          aria-describedby={liveRegionId}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              sendMessage();
            }
          }}
        />
        <div className={styles.composerFoot}>
          <span
            className={styles.composerStatus}
            aria-live="polite"
            data-testid="project-assistant-status"
          >
            {busy
              ? uiState === "SOURCE_LOOKUP"
                ? "Consultation des sources en cours…"
                : "Nora rédige sa réponse…"
              : blocked
                ? "Assistant indisponible — configuration manquante."
                : "Prêt"}
          </span>
          <button
            type="submit"
            className={styles.sendButton}
            data-testid="project-assistant-send"
            disabled={!canSend}
            aria-disabled={!canSend}
            title={
              blocked
                ? "Assistant indisponible"
                : busy
                  ? "Envoi en cours"
                  : draft.trim().length === 0
                    ? "Saisissez un message"
                    : "Envoyer le message"
            }
            aria-label={
              canSend ? "Envoyer le message à Nora" : "Envoi indisponible"
            }
          >
            Envoyer
          </button>
        </div>
        <p className={styles.composerCaption}>
          Vous pilotez. La décision vous appartient toujours.
        </p>
      </form>

      <div className={styles.srOnly} data-testid="project-assistant-no-cursor" aria-hidden="true">
        Aucune action Cursor
      </div>
      <div className={styles.srOnly} data-testid="project-assistant-no-write" aria-hidden="true">
        Aucune écriture Git ou GitHub
      </div>
      <div
        className={styles.srOnly}
        data-testid="project-assistant-no-ops1-destination"
        aria-hidden="true"
      >
        OPS1 n&apos;est pas la destination F2
      </div>
      {showFixtureNoRealStamp ? (
        <div
          className={styles.srOnly}
          data-testid="project-assistant-f3-no-real"
          aria-hidden="true"
        >
          FIXTURE — AUCUNE EXÉCUTION RÉELLE
        </div>
      ) : executeKind === "deterministic_test" ? (
        <div
          className={styles.srOnly}
          data-testid="project-assistant-f3-deterministic"
          aria-hidden="true"
        >
          Exécution déterministe de test
        </div>
      ) : executeKind === "cursor_real" ? (
        <div
          className={styles.srOnly}
          data-testid="project-assistant-f3-cursor-real-recorded"
          aria-hidden="true"
        >
          Exécution Cursor réelle enregistrée
        </div>
      ) : null}
      {showFixtureNoRealStamp ? (
        <div
          className={styles.srOnly}
          data-testid="project-assistant-f3-cursor-real-blocked"
          aria-hidden="true"
        >
          CURSOR REAL BLOQUÉ
        </div>
      ) : null}
    </section>
  );
}
