"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  w2AuthorizeExecutionContractAction,
  w2ConfirmExecutionContractAction,
  w2DeriveGovernedExecutionContinuityAction,
  w2InspectExecutionContractAction,
  w2ReadCurrentGovernedExecutionContinuityAction,
  w2ReconcileGovernedExecutionAction,
} from "@/features/project-assistant/w2/actions";
import type { GovernedExecutionContinuityProjection } from "@/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection";
import {
  nextReconcileContinueDelayMs,
  shouldAutoResumeReconcileOnRemount,
  shouldContinueReconcileNominally,
} from "@/features/project-assistant/w2/reconcileContinuePolicy";
import type { CurrentGovernedExecutionContinuityResult } from "@/features/project-assistant/w2/types";
import {
  presentPilotExecution,
  type PilotExecutionPresentation,
} from "./pilotExecutionPresentation";
import styles from "./ExecutionSurface.module.css";

export type ExecutionSurfaceProps = {
  projectId: string;
  onReturnToConversation: () => void;
  onPresentationChange?: (presentation: PilotExecutionPresentation) => void;
  onDurableFactsChanged?: () => void;
};

type ContinuityLoad =
  | { readonly ok: true; readonly projection: GovernedExecutionContinuityProjection }
  | { readonly ok: false; readonly code: string; readonly message: string }
  | null;

/**
 * P5-S03 Exécution — durable Product continuity + W2 governed actions.
 *
 * Authority path (restart-safe):
 *   w2ReadCurrent… / w2Derive…
 *   → Confirm via w2ConfirmExecutionContractAction (no Attempt)
 *   → Execute via authorize + reconciler intent=execute
 *   → Continue via reconciler intent=continue (canonical policy)
 *
 * Conversation process-local F3 state is NEVER the authority oracle.
 * Continuation scheduling is presentation-only; Product truth stays server-owned.
 */
export function ExecutionSurface({
  projectId,
  onReturnToConversation,
  onPresentationChange,
  onDurableFactsChanged,
}: ExecutionSurfaceProps) {
  const [continuity, setContinuity] = useState<ContinuityLoad>(null);
  const [preExec, setPreExec] =
    useState<CurrentGovernedExecutionContinuityResult | null>(null);
  const [expandedWork, setExpandedWork] = useState(false);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reconcileMountedRef = useRef(true);
  const reconcileInFlightRef = useRef(false);
  const reconcileContinueTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const activeContractIdRef = useRef<string | null>(null);
  const runServerReconcileRef = useRef<
    (
      intent: "execute" | "continue",
      executionContractId: string,
      stepIndex?: number,
    ) => Promise<void>
  >(async () => {});

  const clearContinueTimer = useCallback(() => {
    if (reconcileContinueTimerRef.current) {
      clearTimeout(reconcileContinueTimerRef.current);
      reconcileContinueTimerRef.current = null;
    }
  }, []);

  const refreshExecutionContinuity = useCallback(async () => {
    const [derived, current] = await Promise.all([
      w2DeriveGovernedExecutionContinuityAction({ projectId }),
      w2ReadCurrentGovernedExecutionContinuityAction({ projectId }),
    ]);
    if (!reconcileMountedRef.current) return { derived, current };
    setContinuity(derived);
    setPreExec(current.ok ? current : null);
    const nextId =
      derived.ok && derived.projection.executionContractId
        ? derived.projection.executionContractId
        : current.ok &&
            current.kind === "active" &&
            current.contract.executionContractId
          ? current.contract.executionContractId
          : null;
    if (
      activeContractIdRef.current != null &&
      nextId != null &&
      activeContractIdRef.current !== nextId
    ) {
      // Contract identity changed — cancel stale continuation.
      clearContinueTimer();
    }
    activeContractIdRef.current = nextId;
    return { derived, current };
  }, [projectId, clearContinueTimer]);

  const applyProjection = useCallback(
    (projection: GovernedExecutionContinuityProjection) => {
      if (!reconcileMountedRef.current) return;
      setContinuity({ ok: true, projection });
      const nextId = projection.executionContractId;
      if (
        activeContractIdRef.current != null &&
        nextId != null &&
        activeContractIdRef.current !== nextId
      ) {
        clearContinueTimer();
      }
      if (nextId) activeContractIdRef.current = nextId;
    },
    [clearContinueTimer],
  );

  const scheduleContinueIfNeeded = useCallback(
    (
      projection: GovernedExecutionContinuityProjection | undefined,
      executionContractId: string,
      stepIndex: number,
    ) => {
      if (!reconcileMountedRef.current) return;
      if (!projection) return;
      if (!shouldContinueReconcileNominally(projection)) return;
      if (activeContractIdRef.current !== executionContractId) return;
      clearContinueTimer();
      const delay = nextReconcileContinueDelayMs(stepIndex + 1);
      reconcileContinueTimerRef.current = setTimeout(() => {
        reconcileContinueTimerRef.current = null;
        if (!reconcileMountedRef.current) return;
        if (activeContractIdRef.current !== executionContractId) return;
        void runServerReconcileRef.current(
          "continue",
          executionContractId,
          stepIndex + 1,
        );
      }, delay);
    },
    [clearContinueTimer],
  );

  const runServerReconcile = useCallback(
    async (
      intent: "execute" | "continue",
      executionContractId: string,
      stepIndex = 0,
    ) => {
      if (!executionContractId) return;
      if (reconcileInFlightRef.current && intent === "continue") return;
      reconcileInFlightRef.current = true;
      try {
        const reconciled = await w2ReconcileGovernedExecutionAction({
          projectId,
          executionContractId,
          intent,
        });
        if (!reconcileMountedRef.current) return;
        if (reconciled.projection) {
          applyProjection(reconciled.projection);
        } else {
          await refreshExecutionContinuity();
        }
        onDurableFactsChanged?.();
        if (!reconciled.ok) {
          setError(reconciled.message);
          return;
        }
        scheduleContinueIfNeeded(
          reconciled.projection,
          executionContractId,
          stepIndex,
        );
      } finally {
        reconcileInFlightRef.current = false;
      }
    },
    [
      projectId,
      applyProjection,
      refreshExecutionContinuity,
      onDurableFactsChanged,
      scheduleContinueIfNeeded,
    ],
  );

  useEffect(() => {
    runServerReconcileRef.current = runServerReconcile;
  }, [runServerReconcile]);

  useEffect(() => {
    reconcileMountedRef.current = true;
    return () => {
      reconcileMountedRef.current = false;
      clearContinueTimer();
    };
  }, [clearContinueTimer]);

  // Initial durable load + remount auto-resume.
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    void (async () => {
      try {
        const { derived } = await refreshExecutionContinuity();
        if (cancelled || !reconcileMountedRef.current) return;
        setLoading(false);
        if (!derived.ok) return;
        if (!shouldAutoResumeReconcileOnRemount(derived.projection)) return;
        const executionContractId = derived.projection.executionContractId;
        if (!executionContractId) return;
        await runServerReconcileRef.current("continue", executionContractId, 0);
      } catch (err) {
        if (cancelled || !reconcileMountedRef.current) return;
        setLoading(false);
        setError(
          err instanceof Error
            ? err.message
            : "Lecture de l’exécution indisponible.",
        );
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [refreshExecutionContinuity]);

  const presentation = useMemo(
    () =>
      presentPilotExecution({
        continuityProjection: continuity,
        preExecutionContinuity: preExec,
        actionsBusy: busy,
      }),
    [continuity, preExec, busy],
  );

  const lastNotifiedKey = useRef<string | null>(null);
  useEffect(() => {
    const key = `${presentation.status}|${presentation.stage}|${presentation.cta.kind}|${presentation.cta.kind !== "none" && "enabled" in presentation.cta ? presentation.cta.enabled : ""}`;
    if (lastNotifiedKey.current === key) return;
    lastNotifiedKey.current = key;
    onPresentationChange?.(presentation);
  }, [presentation, onPresentationChange]);

  const resolveContractId = useCallback((): {
    executionContractId: string;
    expectedVersion?: number;
  } | null => {
    if (
      preExec &&
      preExec.ok &&
      preExec.kind === "active" &&
      preExec.contract.executionContractId
    ) {
      return {
        executionContractId: preExec.contract.executionContractId,
        expectedVersion: preExec.contract.version,
      };
    }
    const id =
      continuity && continuity.ok
        ? continuity.projection.executionContractId
        : null;
    if (!id) return null;
    const version =
      continuity && continuity.ok
        ? continuity.projection.executionContractVersion
        : null;
    return {
      executionContractId: id,
      expectedVersion: version ?? undefined,
    };
  }, [preExec, continuity]);

  const handleConfirm = useCallback(async () => {
    const target = resolveContractId();
    if (!target) {
      setError("Aucun contrat d’exécution durable à confirmer.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const inspected = await w2InspectExecutionContractAction({
        projectId,
        executionContractId: target.executionContractId,
        expectedVersion: target.expectedVersion,
      });
      if (!inspected.ok) {
        setError(inspected.message);
        await refreshExecutionContinuity();
        return;
      }
      if (!inspected.inspectionSufficient) {
        setError(
          "Inspection insuffisante — confirmation refusée jusqu’à actualisation.",
        );
        await refreshExecutionContinuity();
        return;
      }

      const confirmed = await w2ConfirmExecutionContractAction({
        projectId,
        executionContractId: target.executionContractId,
      });
      if (!confirmed.ok) {
        setError(confirmed.message);
        await refreshExecutionContinuity();
        return;
      }
      // CONFIRM != EXECUTE — never authorize/reconcile/continue from Confirm.
      await refreshExecutionContinuity();
      onDurableFactsChanged?.();
    } finally {
      setBusy(false);
    }
  }, [
    projectId,
    resolveContractId,
    refreshExecutionContinuity,
    onDurableFactsChanged,
  ]);

  const handleExecute = useCallback(async () => {
    const target = resolveContractId();
    if (!target) {
      setError("Aucun contrat d’exécution durable à exécuter.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const { current } = await refreshExecutionContinuity();
      const active =
        current.ok && current.kind === "active" ? current : null;
      if (!active) {
        setError("Contrat durable introuvable après relecture.");
        return;
      }
      if (active.contract.status === "confirmation_required") {
        setError(
          "Confirmation encore requise — Exécuter refuse d’agir.",
        );
        return;
      }

      if (!active.inspection.inspectionSufficient) {
        const inspected = await w2InspectExecutionContractAction({
          projectId,
          executionContractId: active.contract.executionContractId,
          expectedVersion: active.contract.version,
        });
        if (!inspected.ok || !inspected.inspectionSufficient) {
          setError(
            inspected.ok
              ? "Inspection insuffisante — exécution refusée."
              : inspected.message,
          );
          await refreshExecutionContinuity();
          return;
        }
      }

      const auth = await w2AuthorizeExecutionContractAction({
        projectId,
        executionContractId: active.contract.executionContractId,
      });
      if (!auth.ok) {
        setError(auth.message);
        await refreshExecutionContinuity();
        return;
      }
      if (auth.outcome !== "AUTHORIZED" || auth.executionEligible !== true) {
        setError(
          auth.executionEligibilityReasonCode ||
            "Autorisation insuffisante — exécution refusée.",
        );
        await refreshExecutionContinuity();
        return;
      }

      // Execute once; continuation uses intent="continue" only.
      await runServerReconcile(
        "execute",
        active.contract.executionContractId,
        0,
      );
    } finally {
      setBusy(false);
    }
  }, [
    projectId,
    resolveContractId,
    refreshExecutionContinuity,
    runServerReconcile,
  ]);

  const workItems = expandedWork
    ? presentation.workItems
    : presentation.workItems.slice(0, 4);

  if (loading) {
    return (
      <div className={styles.root} data-testid="project-execution-surface">
        <p className={styles.empty}>Lecture de l’exécution…</p>
      </div>
    );
  }

  if (presentation.empty) {
    return (
      <div className={styles.root} data-testid="project-execution-surface">
        <header className={styles.head}>
          <div>
            <p className={styles.eyebrow}>Exécution</p>
            <h2 className={styles.title}>{presentation.title}</h2>
            <p className={styles.subtitle}>{presentation.subtitle}</p>
          </div>
          <span className={styles.chip} data-tone={presentation.tone}>
            {presentation.statusLabel}
          </span>
        </header>
        <p className={styles.empty} data-testid="project-execution-empty">
          Aucun contrat d’exécution courant. L’onglet reste disponible sans
          inventer d’état.
        </p>
        <div className={styles.footer}>
          <button
            type="button"
            className={styles.primaryButton}
            data-testid="project-execution-return"
            onClick={onReturnToConversation}
          >
            Revenir à la conversation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={styles.root}
      data-testid="project-execution-surface"
      data-status={presentation.status}
      data-stage={presentation.stage}
    >
      <header className={styles.head}>
        <div>
          <p className={styles.eyebrow}>Exécution</p>
          <h2 className={styles.title} data-testid="project-execution-title">
            {presentation.title}
          </h2>
          <p className={styles.subtitle}>{presentation.subtitle}</p>
        </div>
        <span
          className={styles.chip}
          data-tone={presentation.tone}
          data-testid="project-execution-status"
        >
          {presentation.statusLabel}
        </span>
      </header>

      <section className={styles.metrics} aria-label="Faits d’exécution">
        <div className={styles.metric}>
          <p className={styles.metricLabel}>État</p>
          <p className={styles.metricValue}>{presentation.statusLabel}</p>
          {presentation.stateDetail ? (
            <p className={styles.metricDetail}>{presentation.stateDetail}</p>
          ) : null}
          {presentation.failureCause === "timeout" ? (
            <p className={styles.metricDetail}>Cause : délai dépassé</p>
          ) : null}
        </div>
        <div className={styles.metric}>
          <p className={styles.metricLabel}>Portée</p>
          <p className={styles.metricValue}>
            {presentation.scopeDetail ?? "Selon le contrat"}
          </p>
        </div>
        <div className={styles.metric}>
          <p className={styles.metricLabel}>Impact prévu</p>
          <p className={styles.metricValue}>
            {presentation.impactDetail ?? "Borné au contrat"}
          </p>
        </div>
        <div className={styles.metric}>
          <p className={styles.metricLabel}>Réversibilité</p>
          <p className={styles.metricValue}>
            {presentation.reversibilityDetail ?? "Selon le contrat"}
          </p>
        </div>
      </section>

      {presentation.resultTitle ? (
        <section
          className={styles.result}
          data-testid="project-execution-result"
          aria-labelledby="execution-result-title"
        >
          <div className={styles.resultHead}>
            <h3 className={styles.sectionTitle} id="execution-result-title">
              Résultat
            </h3>
            {presentation.resultVerified ? (
              <span className={styles.chip} data-tone="ok">
                Vérifié
              </span>
            ) : null}
          </div>
          <p className={styles.resultTitle}>{presentation.resultTitle}</p>
          {presentation.resultBody ? (
            <p className={styles.resultBody}>{presentation.resultBody}</p>
          ) : null}
        </section>
      ) : null}

      <section
        className={styles.section}
        aria-labelledby="execution-work-title"
        data-testid="project-execution-work"
      >
        <h3 className={styles.sectionTitle} id="execution-work-title">
          {presentation.status === "terminee" ||
          presentation.status === "echouee" ||
          presentation.status === "arretee"
            ? "Ce qui a été fait"
            : "Ce qui va être fait"}
        </h3>
        {workItems.length === 0 ? (
          <p className={styles.empty}>Aucun détail d’éléments disponible.</p>
        ) : (
          <ul className={styles.workList}>
            {workItems.map((item) => (
              <li key={item.id} className={styles.workItem}>
                <span className={styles.workLabel}>{item.label}</span>
                <span className={styles.workState}>{item.stateLabel}</span>
              </li>
            ))}
          </ul>
        )}
        {presentation.workItemsCollapsed && !expandedWork ? (
          <button
            type="button"
            className={styles.moreLink}
            onClick={() => setExpandedWork(true)}
          >
            Voir les {presentation.workItemsTotal} éléments →
          </button>
        ) : null}
      </section>

      {presentation.evidenceAvailable ? (
        <section
          className={styles.section}
          aria-labelledby="execution-evidence-title"
          data-testid="project-execution-evidence"
        >
          <h3 className={styles.sectionTitle} id="execution-evidence-title">
            Preuves associées
          </h3>
          <p className={styles.empty}>
            Les preuves soutiennent le résultat — elles ne le remplacent pas.
          </p>
          <ul className={styles.evidenceList}>
            {presentation.evidenceItems.map((item) => (
              <li key={item.id} className={styles.evidenceItem}>
                <span className={styles.evidenceLabel}>{item.label}</span>
                <span className={styles.evidenceState}>{item.stateLabel}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {presentation.attentionNote ? (
        <p className={styles.attention} data-testid="project-execution-attention">
          {presentation.attentionNote}
        </p>
      ) : null}

      {error ? (
        <p className={styles.attention} role="alert" data-testid="project-execution-error">
          {error}
        </p>
      ) : null}

      <div className={styles.footer}>
        {presentation.cta.kind === "confirm" ? (
          <button
            type="button"
            className={styles.primaryButton}
            data-testid="project-execution-confirm"
            disabled={!presentation.cta.enabled}
            onClick={() => {
              void handleConfirm();
            }}
          >
            {busy ? "Confirmation…" : presentation.cta.label}
          </button>
        ) : null}
        {presentation.cta.kind === "execute" ? (
          <button
            type="button"
            className={styles.primaryButton}
            data-testid="project-execution-execute"
            disabled={!presentation.cta.enabled}
            onClick={() => {
              void handleExecute();
            }}
          >
            {busy ? "Exécution…" : presentation.cta.label}
          </button>
        ) : null}
        {presentation.cta.kind === "return_conversation" ||
        presentation.cta.kind === "none" ? (
          <button
            type="button"
            className={styles.primaryButton}
            data-testid="project-execution-return"
            onClick={onReturnToConversation}
          >
            Revenir à la conversation
          </button>
        ) : null}
      </div>
    </div>
  );
}
