"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  projectAssistantCompleteTrajectoryStepAction,
  projectAssistantPilotLifecycleAction,
  projectAssistantPilotLifecycleProjection,
  projectAssistantRecordObligationPolicyAction,
} from "@/features/project-assistant/actions";
import { projectAssistantPrepareCandidateTrajectoryAction } from "@/features/project-assistant/preCycleCandidateTrajectoryActions";
import type { PilotLifecycleProjection } from "@/lib/oa/cycle/application/lifecycleProjection";
import type { FinalizationAssessment } from "@/lib/oa/cycle";
import { SFIA_ASSISTANT_ANSWERED_EVENT } from "@/features/project-assistant/presentationLabels";
import {
  formatAssessFeedback,
  groupFinalizationObligations,
  lifecycleCtaPresentation,
  lifecycleStatusBadge,
  nonHumanDecisionBlockers,
  presentLifecycleBlockerRows,
  primaryFinalizeRecommendation,
  primaryNextCycleRecommendation,
  readyExceptFinalizeDecision,
  summarizeFinalizationReadiness,
} from "./lifecyclePresentation";
import styles from "./LifecycleSurface.module.css";

function cycleCatalogLabel(projection: PilotLifecycleProjection | null): string {
  const label = projection?.selectedCycleCatalogLabel?.trim();
  return label && label.length > 0 ? label : "Cycle";
}

/**
 * LifecycleSurface — Recommend→Decide presentation only.
 * Never owns lifecycle / Recommendation / HD / trajectory truth; no model calls.
 */
export function LifecycleSurface({
  projectId,
  durableRefreshSignal = 0,
  onDurableFactsChanged,
  onEscalateTrajectory,
  suppressGenericNoraCta = false,
  onOpenReservations,
  onTreatReservationWithNora,
  onProjectionChange,
}: {
  projectId: string;
  /** B1 — parent bumps after Trajectory (or other) durable mutations. */
  durableRefreshSignal?: number;
  onDurableFactsChanged?: () => void;
  onEscalateTrajectory?: () => void;
  /**
   * JOURNEY-INTEGRITY — when Proposal Decision Subject owns next action,
   * suppress competing generic Nora continuation CTAs (e.g. define deliverable).
   */
  suppressGenericNoraCta?: boolean;
  /** CYCLE-RESERVATION-PILOTING-01 — open the Réserves tab of the memory rail. */
  onOpenReservations?: () => void;
  /** Gate-blocking Reservation → prefill Nora draft (never send). */
  onTreatReservationWithNora?: (epistemicItemId: string) => void;
  /** Parent mirror of the durable projection (Journal Réserves tab reads it). */
  onProjectionChange?: (projection: PilotLifecycleProjection | null) => void;
}) {
  const [projection, setProjection] = useState<PilotLifecycleProjection | null>(
    null,
  );
  const onProjectionChangeRef = useRef(onProjectionChange);
  onProjectionChangeRef.current = onProjectionChange;
  useEffect(() => {
    onProjectionChangeRef.current?.(projection);
  }, [projection]);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [policyConfirmKind, setPolicyConfirmKind] = useState<
    null | "no-governed-effects" | "require-artifact"
  >(null);

  const refresh = useCallback(async () => {
    const result = await projectAssistantPilotLifecycleProjection({ projectId });
    if (!result.ok || !result.projection) {
      setError(result.message ?? "Projection lifecycle indisponible.");
      setProjection(null);
      return;
    }
    setError(null);
    setProjection(result.projection);
  }, [projectId]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  useEffect(() => {
    if (durableRefreshSignal > 0) {
      void refresh();
    }
  }, [durableRefreshSignal, refresh]);

  useEffect(() => {
    const onAnswered = () => {
      void refresh();
    };
    window.addEventListener(SFIA_ASSISTANT_ANSWERED_EVENT, onAnswered);
    return () => {
      window.removeEventListener(SFIA_ASSISTANT_ANSWERED_EVENT, onAnswered);
    };
  }, [refresh]);

  async function runAction(
    action: "START" | "PAUSE" | "RESUME" | "FINALIZE" | "CANCEL" | "ASSESS" | "REEVALUATE",
    opts?: { requiresReplanHumanDecision?: boolean },
  ) {
    if (!projection?.selectedCycleInstanceId) return;
    setBusy(action);
    setInfo(null);
    try {
      const result = await projectAssistantPilotLifecycleAction({
        projectId,
        cycleInstanceId: projection.selectedCycleInstanceId,
        action,
        requiresReplanHumanDecision: opts?.requiresReplanHumanDecision,
      });
      if (!result.ok) {
        setError(result.message ?? result.code ?? "Action refusée.");
      } else {
        setError(null);
        if (result.status === "finalize_incomplete") {
          setInfo(
            result.message ??
              "Finalisation incomplète — des conditions restent ouvertes.",
          );
        } else if (action === "ASSESS") {
          const assessed =
            (result.projection?.assessment as
              | FinalizationAssessment
              | null
              | undefined) ??
            (result.assessment as FinalizationAssessment | null | undefined) ??
            projection?.assessment ??
            null;
          setInfo(formatAssessFeedback(assessed));
        } else {
          setInfo(null);
        }
        if (result.projection) {
          setProjection(result.projection);
        } else {
          await refresh();
        }
        onDurableFactsChanged?.();
      }
    } finally {
      setBusy(null);
    }
  }

  async function confirmObligationPolicy(
    policyKind: "no-governed-effects" | "require-artifact",
  ) {
    if (!projection?.selectedCycleInstanceId) return;
    setBusy("OBLIGATION_POLICY");
    setInfo(null);
    try {
      const result = await projectAssistantRecordObligationPolicyAction({
        projectId,
        cycleInstanceId: projection.selectedCycleInstanceId,
        policyKind,
      });
      if (!result.ok) {
        setError(result.message ?? result.code ?? "Politique refusée.");
      } else {
        setError(null);
        setPolicyConfirmKind(null);
        setInfo(
          result.message ??
            "Politique d’obligations enregistrée — aucune finalisation automatique.",
        );
        if (result.projection) setProjection(result.projection);
        else await refresh();
        onDurableFactsChanged?.();
      }
    } finally {
      setBusy(null);
    }
  }

  function focusAssistantForDeliverable() {
    const input = document.querySelector<HTMLTextAreaElement>(
      '[data-testid="project-assistant-input"]',
    );
    if (input) {
      input.focus();
      input.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setInfo(
      "Demandez à Nora de vous aider à définir le livrable attendu pour ce cycle.",
    );
  }

  async function completeTrajectoryStep() {
    if (!projection?.selectedCycleInstanceId) return;
    setBusy("COMPLETE_TRAJECTORY_STEP");
    setInfo(null);
    try {
      const result = await projectAssistantCompleteTrajectoryStepAction({
        projectId,
        cycleInstanceId: projection.selectedCycleInstanceId,
      });
      if (!result.ok) {
        setError(result.message ?? result.code ?? "Clôture d’étape refusée.");
      } else {
        setError(null);
        setInfo(result.message ?? "Critère de sortie clôturé.");
        if (result.projection) setProjection(result.projection);
        else await refresh();
        onDurableFactsChanged?.();
      }
    } finally {
      setBusy(null);
    }
  }

  if (!projection) {
    return (
      <aside
        className={styles.panel}
        data-testid="lifecycle-surface"
        aria-label="Cycle"
      >
        <header className={styles.head}>
          <p className={styles.eyebrow}>CYCLE</p>
          <h2 className={styles.title}>Cycle</h2>
        </header>
        <p className={styles.muted}>
          {error ?? "Chargement de l’état du cycle…"}
        </p>
      </aside>
    );
  }

  const cycleTitle = cycleCatalogLabel(projection);
  const badge = lifecycleStatusBadge(projection);
  const cta = lifecycleCtaPresentation(projection);
  const finalizeRec = primaryFinalizeRecommendation(projection);
  const nextRec = primaryNextCycleRecommendation(projection);
  const nonHd = nonHumanDecisionBlockers(projection.assessment);
  const blockerRows = presentLifecycleBlockerRows(nonHd);
  const ready = readyExceptFinalizeDecision(projection.assessment);
  const terminalDisplay =
    projection.selectedStatus === "completed" ||
    projection.selectedStatus === "cancelled" ||
    projection.selectedStatus === "superseded";
  // CR-LC-B-01 — no mutation aids / assessment obligation UI on terminal display.
  const exitOpen =
    !terminalDisplay && nonHd.includes("exit_criteria_open");
  // CYCLE-RESERVATION-PILOTING-01 — gate blockers only, in finalization context.
  const gateReservations = terminalDisplay
    ? []
    : (projection.blockingReservations ?? []);
  const reservationGateBlocked =
    !terminalDisplay &&
    projection.cta.canFinalize &&
    (nonHd.includes("blocking_reservations") || gateReservations.length > 0);
  const reservationSummary = terminalDisplay
    ? null
    : (projection.reservationSummary ?? null);
  const showAssessment =
    !terminalDisplay && Boolean(projection.assessment);
  const readinessSummary = summarizeFinalizationReadiness(projection.assessment);
  const conditionGroups = groupFinalizationObligations(projection.assessment);
  // When assessment UI is shown, colocate exit/policy CTAs in groups (avoid duplicate strips).
  const colocateGuidance = showAssessment;
  // RC-04 — one Finaliser when Pilot authority group already owns it.
  const showGroupedFinalize =
    colocateGuidance &&
    ready &&
    conditionGroups.some((g) => g.id === "pilot_authority");
  const suppressGenericFinalize = showGroupedFinalize;

  return (
    <aside
      className={styles.panel}
      data-testid="lifecycle-surface"
      aria-label={cycleTitle}
    >
      <header className={styles.head}>
        <p className={styles.eyebrow}>CYCLE</p>
        <h2 className={styles.title} data-testid="lifecycle-cycle-title">
          {cycleTitle}
        </h2>
        <p
          className={styles.badge}
          data-testid="lifecycle-status-badge"
          data-status={badge.status}
        >
          <span className={styles.badgeLabel}>{badge.label}</span>
          {projection.selectedStatus ? (
            <span className={styles.badgeMeta}> · {projection.selectedStatus}</span>
          ) : null}
        </p>
      </header>

      {error ? (
        <p className={styles.error} role="alert">
          {error}
        </p>
      ) : null}
      {info ? (
        <p className={styles.muted} data-testid="lifecycle-info" role="status">
          {info}
        </p>
      ) : null}

      {finalizeRec || nextRec ? (
        <section
          className={styles.recBlock}
          data-testid="lifecycle-recommendation"
          aria-label="Recommandation Nora"
        >
          <h3 className={styles.blockTitle}>Recommandation Nora</h3>
          <p className={styles.recStatement}>
            {(finalizeRec ?? nextRec)!.statement}
          </p>
          {finalizeRec ? (
            <p className={styles.recMeta} data-testid="lifecycle-finalize-rec-notice">
              Nora recommande d’engager la finalisation de ce cycle.
            </p>
          ) : (
            <p className={styles.recMeta}>
              {(nextRec)!.intent.replace(/_/g, " ")}
            </p>
          )}
          <p className={styles.distinction}>
            Recommandation ≠ décision Pilote · n’exécute aucune transition
          </p>
          {finalizeRec ? (
            <p
              className={styles.distinction}
              data-testid="lifecycle-finalize-rec-active-cycle"
            >
              Le cycle reste actif tant que le Pilote n’a pas finalisé.
            </p>
          ) : null}
        </section>
      ) : (
        <section className={styles.recBlock} data-testid="lifecycle-recommendation-empty">
          <h3 className={styles.blockTitle}>Recommandation Nora</h3>
          <p className={styles.muted}>
            Aucune recommandation lifecycle courante.
          </p>
        </section>
      )}

      {showAssessment ? (
        <section
          className={styles.block}
          data-testid="lifecycle-finalization-obligations"
          aria-labelledby="lifecycle-readiness-heading"
        >
          <h3
            id="lifecycle-readiness-heading"
            className={styles.blockTitle}
          >
            État de préparation à la finalisation
          </h3>
          {readinessSummary ? (
            <div
              className={styles.readinessSummary}
              data-testid="lifecycle-readiness-summary"
            >
              <p
                className={styles.readinessHeadline}
                data-testid="lifecycle-readiness-headline"
              >
                {readinessSummary.headline}
              </p>
              {readinessSummary.assessedAtLabel ? (
                <p
                  className={styles.muted}
                  data-testid="lifecycle-assessed-at"
                >
                  Dernière vérification : {readinessSummary.assessedAtLabel}
                </p>
              ) : null}
              <p
                className={styles.muted}
                data-testid="lifecycle-readiness-counts"
              >
                {readinessSummary.countLine.length > 0
                  ? readinessSummary.countLine
                  : "Aucun compteur de condition à afficher."}
              </p>
            </div>
          ) : null}
          {ready ? (
            <p className={styles.muted} data-testid="lifecycle-ready-finalize">
              Prêt pour décision de finalisation — seule la décision Pilote
              « Finaliser » reste requise.
            </p>
          ) : blockerRows.length > 0 ? (
            <ul data-testid="lifecycle-blocker-list">
              {blockerRows.map((row) => (
                <li
                  key={row.id}
                  data-blocker={row.id}
                  data-member-count={row.memberIds?.length ?? undefined}
                >
                  {row.label}
                  {row.memberIds && row.memberIds.length > 1 ? (
                    <span className={styles.muted}>
                      {" "}
                      ({row.memberIds.length} familles)
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          ) : null}

          {conditionGroups.map((group) => (
            <div
              key={group.id}
              className={styles.conditionGroup}
              data-testid={`lifecycle-condition-group-${group.id}`}
              data-group={group.id}
            >
              <h4 className={styles.conditionGroupTitle}>{group.title}</h4>
              <p
                className={styles.conditionGroupSummary}
                data-testid={`lifecycle-condition-group-${group.id}-summary`}
              >
                <span className={styles.statusPill} data-kind={group.summaryLabel}>
                  {group.summaryLabel}
                </span>
                {" — "}
                {group.summaryExplanation}
              </p>

              {group.id === "governed_effects" && group.allUnknownGoverned ? (
                <details
                  className={styles.conditionDetails}
                  data-testid="lifecycle-governed-effects-details"
                >
                  <summary>Voir les familles concernées</summary>
                  <ul
                    className={styles.conditionList}
                    data-testid="lifecycle-obligation-list"
                  >
                    {group.rows.map((row) => (
                      <li
                        key={row.family}
                        className={styles.conditionRow}
                        data-family={row.family}
                        data-status={row.obligation.status}
                        data-kind={row.kind}
                      >
                        <div className={styles.conditionRowHead}>
                          <span className={styles.conditionTitle}>
                            {row.title}
                          </span>
                          <span
                            className={styles.statusPill}
                            data-kind={row.kind}
                          >
                            {row.statusLabel}
                          </span>
                        </div>
                        <p className={styles.conditionExplain}>{row.explanation}</p>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <ul
                  className={styles.conditionList}
                  data-testid={
                    group.id === "work_of_cycle"
                      ? "lifecycle-obligation-list-work"
                      : group.id === "pilot_authority"
                        ? "lifecycle-obligation-list-pilot"
                        : "lifecycle-obligation-list"
                  }
                >
                  {group.rows.map((row) => (
                    <li
                      key={row.family}
                      className={styles.conditionRow}
                      data-family={row.family}
                      data-status={row.obligation.status}
                      data-kind={row.kind}
                    >
                      <div className={styles.conditionRowHead}>
                        <span className={styles.conditionTitle}>{row.title}</span>
                        <span className={styles.statusPill} data-kind={row.kind}>
                          {row.statusLabel}
                        </span>
                      </div>
                      <p className={styles.conditionExplain}>{row.explanation}</p>
                      {row.family === "exit_criteria" &&
                      row.kind === "TO_TREAT" &&
                      exitOpen ? (
                        <button
                          type="button"
                          className={styles.btnSecondary}
                          disabled={busy !== null}
                          data-testid="lifecycle-complete-trajectory-step"
                          onClick={() => void completeTrajectoryStep()}
                        >
                          Clôturer l’étape de trajectoire liée
                        </button>
                      ) : null}
                      {row.family === "blockers" &&
                      row.kind === "TO_TREAT" &&
                      onOpenReservations ? (
                        <button
                          type="button"
                          className={styles.btnSecondary}
                          data-testid="lifecycle-open-reservations-from-condition"
                          onClick={onOpenReservations}
                        >
                          Voir les réserves
                        </button>
                      ) : null}
                      {row.family === "artifact" &&
                      cta.showRequireArtifactContinuation &&
                      !suppressGenericNoraCta ? (
                        <button
                          type="button"
                          className={styles.btnSecondary}
                          disabled={busy !== null}
                          data-testid="lifecycle-define-deliverable-cta"
                          onClick={focusAssistantForDeliverable}
                        >
                          Définir le livrable avec Nora
                        </button>
                      ) : null}
                    </li>
                  ))}
                </ul>
              )}

              {group.id === "governed_effects" &&
              (cta.showGroupedObligationPolicy ||
                cta.showRequireArtifactPolicy) &&
              policyConfirmKind === null ? (
                <div
                  className={styles.ctaRow}
                  data-testid="lifecycle-obligation-policy"
                >
                  {cta.showGroupedObligationPolicy ? (
                    <button
                      type="button"
                      className={styles.btnSecondary}
                      disabled={busy !== null}
                      data-testid="lifecycle-obligation-policy-cta"
                      onClick={() => setPolicyConfirmKind("no-governed-effects")}
                    >
                      Confirmer qu’aucun effet gouverné n’est requis pour ce cycle
                    </button>
                  ) : null}
                  {cta.showRequireArtifactPolicy ? (
                    <button
                      type="button"
                      className={styles.btnSecondary}
                      disabled={busy !== null}
                      data-testid="lifecycle-require-artifact-cta"
                      onClick={() => setPolicyConfirmKind("require-artifact")}
                    >
                      Un livrable est requis avant finalisation
                    </button>
                  ) : null}
                </div>
              ) : null}

              {group.id === "governed_effects" &&
              policyConfirmKind === "no-governed-effects" ? (
                <div data-testid="lifecycle-obligation-policy-confirm">
                  <p className={styles.muted}>
                    Cette décision signifie que ce cycle ne requiert pas de
                    livrable, d’exécution gouvernée, d’Evidence, de ReviewBundle
                    ni d’effet Git. Elle n’est jamais automatique et ne finalise
                    pas le cycle.
                  </p>
                  <button
                    type="button"
                    className={styles.btnPrimary}
                    disabled={busy !== null}
                    data-testid="lifecycle-obligation-policy-confirm-cta"
                    onClick={() =>
                      void confirmObligationPolicy("no-governed-effects")
                    }
                  >
                    Confirmer explicitement
                  </button>
                  <button
                    type="button"
                    className={styles.btnSecondary}
                    disabled={busy !== null}
                    data-testid="lifecycle-obligation-policy-cancel"
                    onClick={() => setPolicyConfirmKind(null)}
                  >
                    Annuler
                  </button>
                </div>
              ) : null}

              {group.id === "governed_effects" &&
              policyConfirmKind === "require-artifact" ? (
                <div data-testid="lifecycle-require-artifact-confirm">
                  <p className={styles.muted}>
                    Un livrable devra être défini et matérialisé avant de
                    finaliser ce cycle. Aucune exécution automatique n’est
                    lancée. Vous pourrez ensuite préciser la forme du livrable
                    avec Nora.
                  </p>
                  <button
                    type="button"
                    className={styles.btnPrimary}
                    disabled={busy !== null}
                    data-testid="lifecycle-require-artifact-confirm-cta"
                    onClick={() =>
                      void confirmObligationPolicy("require-artifact")
                    }
                  >
                    Confirmer : livrable requis
                  </button>
                  <button
                    type="button"
                    className={styles.btnSecondary}
                    disabled={busy !== null}
                    data-testid="lifecycle-require-artifact-cancel"
                    onClick={() => setPolicyConfirmKind(null)}
                  >
                    Annuler
                  </button>
                </div>
              ) : null}

              {group.id === "pilot_authority" && showGroupedFinalize ? (
                <div className={styles.ctaRow}>
                  <button
                    type="button"
                    className={styles.btnPrimary}
                    disabled={busy !== null || !cta.finalizeEnabled}
                    data-testid="lifecycle-finalize-from-readiness"
                    onClick={() => void runAction("FINALIZE")}
                  >
                    Finaliser
                  </button>
                </div>
              ) : null}
            </div>
          ))}
        </section>
      ) : !terminalDisplay &&
        (projection.selectedStatus === "active" ||
          projection.selectedStatus === "paused" ||
          projection.selectedStatus === "blocked") ? (
        <section className={styles.block} data-testid="lifecycle-assessment-unavailable">
          <h3 className={styles.blockTitle}>État de préparation à la finalisation</h3>
          <p className={styles.muted}>
            Assessment indisponible — fail-closed (aucune finalisation).
          </p>
        </section>
      ) : null}

      {!colocateGuidance && exitOpen ? (
        <section className={styles.block} data-testid="lifecycle-exit-criteria-resolve">
          <h3 className={styles.blockTitle}>Critères de sortie</h3>
          <p className={styles.muted}>
            L’étape de trajectoire liée au cycle est encore ouverte.
          </p>
          <button
            type="button"
            className={styles.btnSecondary}
            disabled={busy !== null}
            data-testid="lifecycle-complete-trajectory-step"
            onClick={() => void completeTrajectoryStep()}
          >
            Clôturer l’étape de trajectoire liée
          </button>
        </section>
      ) : null}

      {reservationSummary ? (
        <section
          className={styles.block}
          data-testid="lifecycle-reservation-summary"
          data-active-count={reservationSummary.activeCount}
          data-may-affect-count={reservationSummary.mayAffectCount}
          data-must-resolve-count={reservationSummary.mustResolveCount}
        >
          <h3 className={styles.blockTitle}>Réserves du cycle</h3>
          <p className={styles.muted} data-testid="lifecycle-reservation-summary-line">
            Réserves du cycle — {reservationSummary.activeCount} active
            {reservationSummary.activeCount === 1 ? "" : "s"} ·{" "}
            {reservationSummary.mayAffectCount} peut affecter la clôture
            {reservationSummary.mustResolveCount > 0
              ? ` · ${reservationSummary.mustResolveCount} à traiter avant finalisation`
              : ""}
            {reservationSummary.toQualifyCount > 0
              ? ` · ${reservationSummary.toQualifyCount} à qualifier`
              : ""}
          </p>
          {onOpenReservations ? (
            <button
              type="button"
              className={styles.btnSecondary}
              data-testid="lifecycle-open-reservations"
              onClick={onOpenReservations}
            >
              Voir les réserves
            </button>
          ) : null}
        </section>
      ) : null}

      {reservationGateBlocked ? (
        <section
          className={styles.block}
          data-testid="lifecycle-reservation-gate"
          data-gate-count={gateReservations.length}
        >
          <h3 className={styles.blockTitle}>Clôture indisponible</h3>
          <p className={styles.muted} data-testid="lifecycle-reservation-gate-line">
            Clôture indisponible — {gateReservations.length} réserve
            {gateReservations.length === 1 ? "" : "s"} à traiter
          </p>
          {gateReservations.length === 0 ? (
            <p className={styles.muted}>
              L’assessment signale une réserve bloquante non lisible ici —
              vérifiez les réserves du cycle.
            </p>
          ) : null}
          {gateReservations.map((r) => (
            <div key={r.epistemicItemId} data-testid="lifecycle-blocking-reservation">
              <p className={styles.muted}>{r.statement}</p>
              {onTreatReservationWithNora ? (
                <button
                  type="button"
                  className={styles.btnSecondary}
                  disabled={busy !== null}
                  data-testid="lifecycle-treat-reservation"
                  data-epistemic-id={r.epistemicItemId}
                  onClick={() => onTreatReservationWithNora(r.epistemicItemId)}
                >
                  Traiter avec Nora
                </button>
              ) : null}
            </div>
          ))}
        </section>
      ) : null}

      {!colocateGuidance &&
      (cta.showGroupedObligationPolicy || cta.showRequireArtifactPolicy) ? (
        <section className={styles.block} data-testid="lifecycle-obligation-policy">
          <h3 className={styles.blockTitle}>Effets gouvernés</h3>
          <p className={styles.muted}>
            Choisissez explicitement si ce cycle doit produire un livrable
            gouverné, ou s’il peut se clore sans effet gouverné.
          </p>
          {policyConfirmKind === null ? (
            <div className={styles.ctaRow}>
              {cta.showGroupedObligationPolicy ? (
                <button
                  type="button"
                  className={styles.btnSecondary}
                  disabled={busy !== null}
                  data-testid="lifecycle-obligation-policy-cta"
                  onClick={() => setPolicyConfirmKind("no-governed-effects")}
                >
                  Confirmer qu’aucun effet gouverné n’est requis pour ce cycle
                </button>
              ) : null}
              {cta.showRequireArtifactPolicy ? (
                <button
                  type="button"
                  className={styles.btnSecondary}
                  disabled={busy !== null}
                  data-testid="lifecycle-require-artifact-cta"
                  onClick={() => setPolicyConfirmKind("require-artifact")}
                >
                  Un livrable est requis avant finalisation
                </button>
              ) : null}
            </div>
          ) : policyConfirmKind === "no-governed-effects" ? (
            <div data-testid="lifecycle-obligation-policy-confirm">
              <p className={styles.muted}>
                Cette décision signifie que ce cycle ne requiert pas de livrable,
                d’exécution gouvernée, d’Evidence, de ReviewBundle ni d’effet
                Git. Elle n’est jamais automatique et ne finalise pas le cycle.
              </p>
              <button
                type="button"
                className={styles.btnPrimary}
                disabled={busy !== null}
                data-testid="lifecycle-obligation-policy-confirm-cta"
                onClick={() => void confirmObligationPolicy("no-governed-effects")}
              >
                Confirmer explicitement
              </button>
              <button
                type="button"
                className={styles.btnSecondary}
                disabled={busy !== null}
                data-testid="lifecycle-obligation-policy-cancel"
                onClick={() => setPolicyConfirmKind(null)}
              >
                Annuler
              </button>
            </div>
          ) : (
            <div data-testid="lifecycle-require-artifact-confirm">
              <p className={styles.muted}>
                Un livrable devra être défini et matérialisé avant de finaliser
                ce cycle. Aucune exécution automatique n’est lancée. Vous
                pourrez ensuite préciser la forme du livrable avec Nora.
              </p>
              <button
                type="button"
                className={styles.btnPrimary}
                disabled={busy !== null}
                data-testid="lifecycle-require-artifact-confirm-cta"
                onClick={() => void confirmObligationPolicy("require-artifact")}
              >
                Confirmer : livrable requis
              </button>
              <button
                type="button"
                className={styles.btnSecondary}
                disabled={busy !== null}
                data-testid="lifecycle-require-artifact-cancel"
                onClick={() => setPolicyConfirmKind(null)}
              >
                Annuler
              </button>
            </div>
          )}
        </section>
      ) : null}

      {!colocateGuidance &&
      cta.showRequireArtifactContinuation &&
      !suppressGenericNoraCta ? (
        <section
          className={styles.block}
          data-testid="lifecycle-require-artifact-continuation"
        >
          <h3 className={styles.blockTitle}>Livrable requis</h3>
          <p className={styles.muted}>
            Un livrable est requis avant finalisation. La finalisation reste
            bloquée tant qu’il n’est pas matérialisé. Demandez à Nora d’aider à
            définir le livrable attendu pour ce cycle.
          </p>
          <button
            type="button"
            className={styles.btnSecondary}
            disabled={busy !== null}
            data-testid="lifecycle-define-deliverable-cta"
            onClick={focusAssistantForDeliverable}
          >
            Définir le livrable avec Nora
          </button>
        </section>
      ) : null}

      {cta.showRequireArtifactContinuation && suppressGenericNoraCta ? (
        <section
          className={styles.block}
          data-testid="lifecycle-require-artifact-continuation"
        >
          <h3 className={styles.blockTitle}>Livrable requis</h3>
          <p className={styles.muted}>
            Un livrable est requis avant finalisation. Une proposition active
            porte déjà la prochaine action métier — poursuivez-la dans la
            trajectoire plutôt que d&apos;ouvrir une intention Nora concurrente.
          </p>
        </section>
      ) : null}

      {cta.showReplan ? (
        <section className={styles.block} data-testid="lifecycle-resume-drift">
          <h3 className={styles.blockTitle}>Dérive à la reprise</h3>
          <p className={styles.muted}>
            CYCLE_RESUME_DRIFT — replanifier via décision Pilote, puis
            réévaluer. La décision seule ne lève pas la dérive.
          </p>
          <button
            type="button"
            className={styles.btnSecondary}
            disabled={busy !== null}
            data-testid="lifecycle-replan-cta"
            onClick={() =>
              void runAction("RESUME", { requiresReplanHumanDecision: true })
            }
          >
            Enregistrer replan (décision Pilote)
          </button>
          <button
            type="button"
            className={styles.btnSecondary}
            disabled={busy !== null}
            data-testid="lifecycle-reevaluate-cta"
            onClick={() => void runAction("REEVALUATE")}
          >
            Réévaluer la reconciliation
          </button>
        </section>
      ) : null}

      <div className={styles.ctaRow} data-testid="lifecycle-cta-row">
        {cta.showStart ? (
          <button
            type="button"
            className={styles.btnPrimary}
            disabled={busy !== null}
            data-testid="lifecycle-start-cta"
            onClick={() => void runAction("START")}
          >
            Démarrer
          </button>
        ) : null}
        {cta.showAssess ? (
          <button
            type="button"
            className={styles.btnSecondary}
            disabled={busy !== null}
            data-testid="lifecycle-assess-cta"
            onClick={() => void runAction("ASSESS")}
          >
            Vérifier les conditions de finalisation
          </button>
        ) : null}
        {cta.showFinalizePrimary && !suppressGenericFinalize ? (
          <button
            type="button"
            className={styles.btnPrimary}
            disabled={busy !== null || !cta.finalizeEnabled}
            data-testid="lifecycle-finalize-cta-primary"
            onClick={() => void runAction("FINALIZE")}
          >
            Finaliser
          </button>
        ) : null}
        {cta.showFinalizeSecondary && !suppressGenericFinalize ? (
          <button
            type="button"
            className={styles.btnSecondary}
            disabled={busy !== null || !cta.finalizeEnabled}
            data-testid="lifecycle-finalize-cta-secondary"
            onClick={() => void runAction("FINALIZE")}
          >
            Finaliser
          </button>
        ) : null}
        {cta.showResume ? (
          <button
            type="button"
            className={styles.btnPrimary}
            disabled={busy !== null || !cta.resumeEnabled}
            data-testid="lifecycle-resume-cta"
            onClick={() => void runAction("RESUME")}
          >
            Reprendre
          </button>
        ) : null}
        {cta.showTrajectoryEscalation ? (
          <button
            type="button"
            className={styles.btnSecondary}
            data-testid="lifecycle-trajectory-escalate"
            disabled={busy !== null}
            onClick={() => {
              if (nextRec) {
                void (async () => {
                  setBusy("PREPARE_TRAJECTORY");
                  try {
                    const result =
                      await projectAssistantPrepareCandidateTrajectoryAction({
                        projectId,
                      });
                    if (!result.ok) {
                      setError(
                        result.message ??
                          result.code ??
                          "Préparation de trajectoire refusée.",
                      );
                      return;
                    }
                    setError(null);
                    await refresh();
                    onDurableFactsChanged?.();
                    onEscalateTrajectory?.();
                  } finally {
                    setBusy(null);
                  }
                })();
                return;
              }
              onEscalateTrajectory?.();
            }}
          >
            {nextRec ? "Préparer la trajectoire" : "Trajectoire"}
          </button>
        ) : null}
      </div>
    </aside>
  );
}
