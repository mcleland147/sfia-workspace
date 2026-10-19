"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  w2ConfirmExecutionContractAction,
  w2DeriveGovernedExecutionContinuityAction,
  w2InspectExecutionContractAction,
  w2ReadCurrentGovernedExecutionContinuityAction,
  w2ReconcileGovernedExecutionAction,
  w2SingleHumanExecuteAction,
} from "@/features/project-assistant/w2/actions";
import type { GovernedExecutionContinuityProjection } from "@/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection";
import {
  nextReconcileContinueDelayMs,
  shouldAutoResumeReconcileOnRemount,
  shouldContinueReconcileNominally,
} from "@/features/project-assistant/w2/reconcileContinuePolicy";
import type { CurrentGovernedExecutionContinuityResult } from "@/features/project-assistant/w2/types";
import {
  buildInspectionExamView,
  sameInspectionExamSnapshot,
  type InspectionExamSnapshot,
} from "./contractInspectionExam";
import { ContractInspectionExamPanel } from "./ContractInspectionExamPanel";
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
  /** I07 — opening the panel never writes an attestation. */
  const [inspectionPanelOpen, setInspectionPanelOpen] = useState(false);
  /** Pass04 — exam identity frozen at open; invalidate on drift. */
  const [inspectionExamSnapshot, setInspectionExamSnapshot] =
    useState<InspectionExamSnapshot | null>(null);
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
    // Preserve failure / kind=none — presenter must not treat absence as success.
    setPreExec(current);
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

  useEffect(() => {
    setInspectionPanelOpen(false);
  }, [projectId]);

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

  /**
   * Mutating actions require verified pre-execution continuity — never
   * projection.executionContractId alone (R1).
   */
  const resolveActivePreContract = useCallback((): {
    executionContractId: string;
    expectedVersion: number;
    semanticFingerprint: string;
    inspectionSufficient: boolean;
  } | null => {
    if (
      !preExec ||
      !preExec.ok ||
      preExec.kind !== "active" ||
      !preExec.contract.executionContractId
    ) {
      return null;
    }
    return {
      executionContractId: preExec.contract.executionContractId,
      expectedVersion: preExec.contract.version,
      semanticFingerprint: preExec.contract.semanticFingerprint ?? "",
      inspectionSufficient: preExec.inspection.inspectionSufficient === true,
    };
  }, [preExec]);

  const inspectionView = useMemo(() => {
    if (
      !preExec ||
      !preExec.ok ||
      preExec.kind !== "active" ||
      !preExec.contract.inspectionDisclosure
    ) {
      return null;
    }
    return buildInspectionExamView({
      disclosure: preExec.contract.inspectionDisclosure,
      requiredInspectedFacts: preExec.requiredInspectedFacts,
    });
  }, [preExec]);

  const liveExamSnapshot = useMemo((): InspectionExamSnapshot | null => {
    const target = resolveActivePreContract();
    if (!target) return null;
    return {
      projectId,
      executionContractId: target.executionContractId,
      version: target.expectedVersion,
      semanticFingerprint: target.semanticFingerprint,
    };
  }, [projectId, resolveActivePreContract]);

  /** Pass04 — close exam when project/contract/version/fingerprint drifts. */
  useEffect(() => {
    if (!inspectionPanelOpen || !inspectionExamSnapshot) return;
    if (!sameInspectionExamSnapshot(inspectionExamSnapshot, liveExamSnapshot)) {
      setInspectionPanelOpen(false);
      setInspectionExamSnapshot(null);
      setError(
        "Identité contractuelle modifiée — nouvel examen requis.",
      );
    }
  }, [inspectionPanelOpen, inspectionExamSnapshot, liveExamSnapshot]);

  /** Inter-project navigation always invalidates an open exam. */
  useEffect(() => {
    setInspectionPanelOpen(false);
    setInspectionExamSnapshot(null);
  }, [projectId]);

  /** I07 — open detail only; no Product write. */
  const handleOpenInspection = useCallback(() => {
    const target = resolveActivePreContract();
    if (!target) {
      setError(
        "Continuité pré-exécution indisponible — examen refusé.",
      );
      return;
    }
    if (!inspectionView || inspectionView.disclosureIncomplete) {
      setError(
        "Disclosure d’inspection incomplète — examen impossible.",
      );
      return;
    }
    setError(null);
    setInspectionExamSnapshot({
      projectId,
      executionContractId: target.executionContractId,
      version: target.expectedVersion,
      semanticFingerprint: target.semanticFingerprint,
    });
    setInspectionPanelOpen(true);
  }, [projectId, resolveActivePreContract, inspectionView]);

  /**
   * I06/I08 — explicit attestation after facts are presented.
   * Attests only presentedFactIds from the rendered disclosure rows.
   * Confirm / Execute must never call this path.
   */
  const handleAttestInspection = useCallback(async () => {
    const target = resolveActivePreContract();
    if (!target) {
      setError(
        "Continuité pré-exécution indisponible — attestation refusée.",
      );
      return;
    }
    if (!inspectionPanelOpen || !inspectionExamSnapshot) {
      setError(
        "Les faits contractuels doivent être affichés avant attestation.",
      );
      return;
    }
    if (
      !sameInspectionExamSnapshot(inspectionExamSnapshot, {
        projectId,
        executionContractId: target.executionContractId,
        version: target.expectedVersion,
        semanticFingerprint: target.semanticFingerprint,
      })
    ) {
      setInspectionPanelOpen(false);
      setInspectionExamSnapshot(null);
      setError(
        "Identité contractuelle modifiée — nouvel examen requis.",
      );
      return;
    }
    if (!inspectionView || inspectionView.disclosureIncomplete) {
      setError(
        "Disclosure d’inspection incomplète — attestation refusée.",
      );
      return;
    }
    if (inspectionView.missingRequired.length > 0) {
      setError(
        `Faits obligatoires non restituables (${inspectionView.missingRequired.join(", ")}) — attestation refusée.`,
      );
      return;
    }
    if (inspectionView.presentedFactIds.length === 0) {
      setError("Aucun fait contractuel présenté — attestation refusée.");
      return;
    }

    setBusy(true);
    setError(null);
    try {
      const inspected = await w2InspectExecutionContractAction({
        projectId,
        executionContractId: target.executionContractId,
        expectedVersion: target.expectedVersion,
        inspectedFacts: inspectionView.presentedFactIds,
      });
      if (!inspected.ok) {
        setError(inspected.message);
        await refreshExecutionContinuity();
        return;
      }
      if (!inspected.inspectionSufficient) {
        setError(
          "Inspection insuffisante — faits attestés incomplets pour cette version.",
        );
      } else {
        setInspectionPanelOpen(false);
        setInspectionExamSnapshot(null);
      }
      await refreshExecutionContinuity();
      onDurableFactsChanged?.();
    } finally {
      setBusy(false);
    }
  }, [
    projectId,
    inspectionPanelOpen,
    inspectionExamSnapshot,
    inspectionView,
    resolveActivePreContract,
    refreshExecutionContinuity,
    onDurableFactsChanged,
  ]);

  const handleConfirm = useCallback(async () => {
    const target = resolveActivePreContract();
    if (!target) {
      setError(
        "Continuité pré-exécution indisponible — confirmation refusée.",
      );
      return;
    }
    // Confirm never records inspection. Insufficient → refuse (no silent attest).
    if (!target.inspectionSufficient) {
      setError(
        "Inspection suffisante requise avant confirmation — utilisez Inspecter.",
      );
      return;
    }
    setBusy(true);
    setError(null);
    try {
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
    resolveActivePreContract,
    refreshExecutionContinuity,
    onDurableFactsChanged,
  ]);

  const handleExecute = useCallback(async () => {
    const target = resolveActivePreContract();
    if (!target) {
      setError(
        "Continuité pré-exécution indisponible — exécution refusée.",
      );
      return;
    }
    // D-P6-SHE-01 — Exécuter may carry attestation of presented facts.
    // Require an open exam (or prior sufficient inspection) so disclosure is
    // actually presented; no separate Attester CTA is mandatory.
    if (!inspectionView || inspectionView.disclosureIncomplete) {
      setError(
        "Disclosure d’inspection incomplète — Exécuter refusé.",
      );
      return;
    }
    const alreadyInspected =
      preExec != null &&
      preExec.ok &&
      preExec.kind === "active" &&
      preExec.inspection.inspectionSufficient === true;
    if (!alreadyInspected && !inspectionPanelOpen) {
      // Soft gate: open the exam so the Pilote can consult before retry.
      handleOpenInspection();
      setError(
        "Consultez les informations contractuelles affichées, puis Exécuter.",
      );
      return;
    }
    if (inspectionView.presentedFactIds.length === 0) {
      setError("Aucun fait contractuel présenté — Exécuter refusé.");
      return;
    }
    if (
      inspectionPanelOpen &&
      inspectionExamSnapshot &&
      !sameInspectionExamSnapshot(inspectionExamSnapshot, {
        projectId,
        executionContractId: target.executionContractId,
        version: target.expectedVersion,
        semanticFingerprint: target.semanticFingerprint,
      })
    ) {
      setInspectionPanelOpen(false);
      setInspectionExamSnapshot(null);
      setError(
        "Identité contractuelle modifiée — nouvel examen requis.",
      );
      return;
    }

    setBusy(true);
    setError(null);
    try {
      const { current } = await refreshExecutionContinuity();
      const activeAfter =
        current.ok && current.kind === "active" ? current : null;
      if (!activeAfter) {
        setError("Contrat durable introuvable après relecture.");
        return;
      }
      if (
        activeAfter.contract.executionContractId !==
          target.executionContractId ||
        activeAfter.contract.version !== target.expectedVersion
      ) {
        setError(
          "Identité ou version contractuelle incohérente — exécution refusée.",
        );
        return;
      }

      // One server gesture: attest + HD (if deferred) + Confirm + Authorize.
      // OA transitions remain distinct; no Attempt until reconcile below.
      const she = await w2SingleHumanExecuteAction({
        projectId,
        executionContractId: activeAfter.contract.executionContractId,
        expectedVersion: activeAfter.contract.version,
        expectedSemanticFingerprint:
          activeAfter.contract.semanticFingerprint ||
          target.semanticFingerprint,
        presentedFactIds: inspectionView.presentedFactIds,
      });
      if (!she.ok) {
        setError(she.message);
        await refreshExecutionContinuity();
        return;
      }

      setInspectionPanelOpen(false);
      setInspectionExamSnapshot(null);
      await refreshExecutionContinuity();
      onDurableFactsChanged?.();

      // Execute once on the authorized contract (may be SHE HD successor).
      await runServerReconcile("execute", she.executionContractId, 0);
    } finally {
      setBusy(false);
    }
  }, [
    projectId,
    resolveActivePreContract,
    refreshExecutionContinuity,
    runServerReconcile,
    inspectionView,
    inspectionPanelOpen,
    inspectionExamSnapshot,
    handleOpenInspection,
    onDurableFactsChanged,
    preExec,
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

      {inspectionPanelOpen &&
      inspectionExamSnapshot &&
      inspectionView &&
      !inspectionView.disclosureIncomplete ? (
        <section
          className={styles.section}
          aria-label="Examen contractuel"
        >
          <ContractInspectionExamPanel
            testIdPrefix="project-execution"
            snapshot={inspectionExamSnapshot}
            rows={inspectionView.rows}
            missingRequired={inspectionView.missingRequired}
            presentedFactIds={inspectionView.presentedFactIds}
            busy={busy}
            onAttest={() => {
              void handleAttestInspection();
            }}
            onDismiss={() => {
              setInspectionPanelOpen(false);
              setInspectionExamSnapshot(null);
            }}
          />
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
        {presentation.cta.kind === "inspect" ? (
          <button
            type="button"
            className={styles.primaryButton}
            data-testid="project-execution-inspect"
            disabled={!presentation.cta.enabled}
            aria-label={presentation.cta.label}
            title={
              presentation.attentionNote ??
              "Ouvre le détail inspectable — n’enregistre aucune attestation."
            }
            onClick={() => {
              handleOpenInspection();
            }}
          >
            {presentation.cta.label}
          </button>
        ) : null}
        {presentation.cta.kind === "confirm" ? (
          <button
            type="button"
            className={styles.primaryButton}
            data-testid="project-execution-confirm"
            disabled={!presentation.cta.enabled}
            aria-label={presentation.cta.label}
            title={
              presentation.cta.enabled
                ? presentation.attentionNote ?? presentation.cta.label
                : presentation.attentionNote ??
                  "Confirmation indisponible — conditions non satisfaites."
            }
            onClick={() => {
              void handleConfirm();
            }}
          >
            {busy ? "Confirmation…" : presentation.cta.label}
          </button>
        ) : null}
        {presentation.cta.kind === "execute" ? (
          <>
            {/*
              D-P6-SHE-01 — Consulter is consult-only (no attestation write).
              Exécuter remains the sole authority gesture; Attester is not required.
            */}
            <button
              type="button"
              className={styles.moreLink}
              data-testid="project-execution-inspect"
              disabled={busy}
              aria-label="Consulter le contrat"
              title="Ouvre le détail inspectable — n’enregistre aucune attestation."
              onClick={() => {
                handleOpenInspection();
              }}
            >
              Consulter le contrat
            </button>
            <button
              type="button"
              className={styles.primaryButton}
              data-testid="project-execution-execute"
              disabled={!presentation.cta.enabled}
              aria-label={presentation.cta.label}
              title={
                presentation.cta.enabled
                  ? presentation.attentionNote ?? presentation.cta.label
                  : presentation.attentionNote ??
                    "Exécution indisponible — conditions non satisfaites."
              }
              onClick={() => {
                void handleExecute();
              }}
            >
              {busy ? "Exécution…" : presentation.cta.label}
            </button>
          </>
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
