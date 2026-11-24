"use client";

/**
 * ML5 — parcours Exécution (12.04–12.07 / 12.14) et Résultats (12.08 / 12.11–12.13).
 * Mounted on existing project page — no parallel shell.
 * Reading never authorizes; Non confirmation = no dispatch.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { ContractViewer, type ContractViewerModel } from "./ContractViewer";
import { D6ConfirmLaunch } from "./D6ConfirmLaunch";
import {
  RealizationBilan,
  type BilanDossierStructured,
  type BilanTab,
} from "./RealizationBilan";
import type { D8Rubric } from "@/domains/proofs/cursor-qualify";

type AttemptRow = {
  attemptId: string;
  status: string;
  fingerprint: string;
  correlationKey: string;
  decisionId: string | null;
  live: {
    terminalStatus?: string | null;
    reportStatus?: string | null;
    lastActivitySummary?: string | null;
    agentId?: string | null;
    runId?: string | null;
    limits?: string[];
  };
  plan: {
    contractId: string;
    contractKey: string;
    contractVersion: number;
    workspaceKey?: string;
  };
  createdAt: string;
  updatedAt: string;
};

type ContractRow = {
  id: string;
  contractKey: string;
  version: number;
  fingerprint: string;
  status: string;
  body: {
    title: string;
    engagements: ContractViewerModel["engagements"];
    volets: ContractViewerModel["volets"];
    instructionText: string;
    risks: string[];
    exclusions: string[];
  };
};

export function CursorRealizationSurface(props: {
  projectId: string;
  projectName?: string | null;
  /** Figma: execution vs résultats — same shell, distinct responsibility. */
  mode?: "execution" | "results";
  /** Figma 12.09 — structured retirable dossier ref (not free-text draft alone). */
  onDiscussWithNora?: (attachment: {
    attemptId: string;
    contractId?: string | null;
    handoffId?: string | null;
    dossierVersion?: number | string | null;
    verdictD8?: string | null;
    noraKind?: string | null;
    fingerprint?: string | null;
    pieces?: string[] | null;
  }) => void;
}) {
  const mode = props.mode ?? "execution";
  const [contracts, setContracts] = useState<ContractRow[]>([]);
  const [attempts, setAttempts] = useState<AttemptRow[]>([]);
  const [selectedContract, setSelectedContract] = useState<ContractRow | null>(null);
  const [instructionExpanded, setInstructionExpanded] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingAttemptId, setPendingAttemptId] = useState<string | null>(null);
  const [selectedAttempt, setSelectedAttempt] = useState<AttemptRow | null>(null);
  const [bilan, setBilan] = useState<{
    verdict: string;
    rubrics: D8Rubric[];
    limits: string[];
    noraAnalysisMarkdown?: string | null;
    noraAnalysisKind?: string | null;
    dossier?: BilanDossierStructured | null;
  } | null>(null);
  const [bilanTab, setBilanTab] = useState<BilanTab>("synthese");
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [pendingRequalify, setPendingRequalify] = useState<{
    attemptId: string;
    handoffId: string;
    expectedUpdatedAt: string | null;
  } | null>(null);
  /** One-shot resume of AUTHORIZED orphans — avoid dispatch hammer loops. */
  const resumedAuthorizedRef = useRef<Set<string>>(new Set());

  const reload = useCallback(async () => {
    const [cRes, aRes] = await Promise.all([
      fetch(`/api/projects/${props.projectId}/realization/contracts`),
      fetch(`/api/projects/${props.projectId}/realization/attempts`).catch(() => null),
    ]);
    if (cRes.ok) {
      const j = (await cRes.json()) as { contracts?: ContractRow[] };
      setContracts(j.contracts ?? []);
    }
    if (aRes && aRes.ok) {
      const j = (await aRes.json()) as { attempts?: AttemptRow[] };
      setAttempts(j.attempts ?? []);
    }
  }, [props.projectId]);

  useEffect(() => {
    void reload();
  }, [reload]);

  // Deep-link from Exécution → Résultats (?attempt=) — one-shot per attempt id.
  const deepLinkedAttemptRef = useRef<string | null>(null);
  useEffect(() => {
    if (mode !== "results" || typeof window === "undefined") return;
    const id = new URLSearchParams(window.location.search).get("attempt");
    if (!id || attempts.length === 0) return;
    if (deepLinkedAttemptRef.current === id) return;
    const hit = attempts.find((a) => a.attemptId === id);
    if (!hit) return;
    deepLinkedAttemptRef.current = id;
    void openBilan(hit);
  }, [mode, attempts]);

  /** C24 — resume AUTHORIZED Cursor attempts left after D6 Oui without dispatch (nav/crash). */
  useEffect(() => {
    const orphaned = attempts.filter(
      (a) =>
        a.status === "AUTHORIZED" &&
        Boolean(a.decisionId) &&
        !resumedAuthorizedRef.current.has(a.attemptId),
    );
    if (orphaned.length === 0) return;
    let cancelled = false;
    const resume = async () => {
      for (const a of orphaned.slice(0, 2)) {
        if (cancelled) return;
        resumedAuthorizedRef.current.add(a.attemptId);
        try {
          await fetch(
            `/api/projects/${props.projectId}/realization/attempts/${a.attemptId}/dispatch`,
            { method: "POST" },
          );
        } catch {
          /* one-shot; Pilote can re-open surface */
        }
      }
      if (!cancelled) await reload();
    };
    void resume();
    return () => {
      cancelled = true;
    };
  }, [attempts, props.projectId, reload]);

  /** E05 — poll DISPATCHED attempts beyond ACK; reconcile is observational, not a second dispatch. */
  useEffect(() => {
    const dispatched = attempts.filter(
      (a) => a.status === "DISPATCHED" && !a.live.terminalStatus,
    );
    if (dispatched.length === 0) return;
    let ticks = 0;
    const id = window.setInterval(() => {
      ticks += 1;
      void reload();
      if (ticks % 5 === 0) {
        for (const a of dispatched.slice(0, 3)) {
          void fetch(
            `/api/projects/${props.projectId}/realization/attempts/${a.attemptId}/reconcile`,
            { method: "POST" },
          ).catch(() => {
            /* observational */
          });
        }
      }
    }, 3000);
    return () => window.clearInterval(id);
  }, [attempts, props.projectId, reload]);

  async function reconcileAttempt(attemptId: string) {
    setBusy(true);
    try {
      const res = await fetch(
        `/api/projects/${props.projectId}/realization/attempts/${attemptId}/reconcile`,
        { method: "POST" },
      );
      const j = (await res.json().catch(() => ({}))) as { error?: string; message?: string; status?: string };
      setStatus(
        res.ok
          ? `Réconciliation: ${j.status ?? "ok"} — pas de second dispatch`
          : j.message ?? j.error ?? "Réconciliation refusée",
      );
      await reload();
    } finally {
      setBusy(false);
    }
  }

  /** CF-02 — READY is a server-owned qualification act (not client sufficiency). */
  async function qualifyReady(contract: ContractRow) {
    setBusy(true);
    setStatus("");
    try {
      const res = await fetch(
        `/api/projects/${props.projectId}/realization/contracts/${contract.id}/ready`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        },
      );
      const j = (await res.json().catch(() => ({}))) as {
        status?: string;
        error?: string;
        message?: string;
      };
      if (!res.ok) {
        setStatus(j.message ?? j.error ?? "Qualification READY refusée");
        return;
      }
      setStatus(`Contrat ${contract.contractKey} → ${j.status ?? "READY"} (serveur)`);
      await reload();
    } finally {
      setBusy(false);
    }
  }

  async function prepareFromContract(contract: ContractRow) {
    setBusy(true);
    setStatus("");
    try {
      const correlationKey = `ml5-${contract.id}-${Date.now()}`;
      const res = await fetch(`/api/projects/${props.projectId}/realization/attempts/prepare`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contractId: contract.id,
          correlationKey,
          workspaceKey: "default",
        }),
      });
      const j = (await res.json().catch(() => ({}))) as {
        attemptId?: string;
        error?: string;
        message?: string;
      };
      if (!res.ok || !j.attemptId) {
        setStatus(j.message ?? j.error ?? "Préparation refusée");
        return;
      }
      setPendingAttemptId(j.attemptId);
      setSelectedContract(contract);
      setConfirmOpen(true);
      await reload();
    } finally {
      setBusy(false);
    }
  }

  async function confirmYes() {
    if (!pendingAttemptId || !selectedContract) return;
    setBusy(true);
    try {
      // Single authorize call: server auto-dispatches after D6 Oui (C24).
      // Keeps AUTHORIZED→DISPATCHED atomic vs browser navigation aborting a second fetch.
      const auth = await fetch(
        `/api/projects/${props.projectId}/realization/attempts/${pendingAttemptId}/authorize`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            statement: "Je mandate l'exécution Cursor du contrat inspecté",
            inspectedFingerprint: selectedContract.fingerprint,
            confirmed: true,
          }),
          keepalive: true,
        },
      );
      const aj = (await auth.json().catch(() => ({}))) as {
        error?: string;
        message?: string;
        status?: string;
        dispatch?: { status?: string; error?: string; message?: string };
      };
      if (!auth.ok) {
        setStatus(aj.message ?? aj.error ?? "Autorisation refusée");
        setConfirmOpen(false);
        return;
      }
      const dispStatus = aj.dispatch?.status ?? aj.status;
      if (aj.dispatch?.error || dispStatus === "AUTHORIZED" || dispStatus === "FAILED") {
        // Fallback: explicit /dispatch if same-request dispatch did not advance.
        const disp = await fetch(
          `/api/projects/${props.projectId}/realization/attempts/${pendingAttemptId}/dispatch`,
          { method: "POST", keepalive: true },
        );
        const dj = (await disp.json().catch(() => ({}))) as {
          error?: string;
          message?: string;
          status?: string;
        };
        if (!disp.ok) {
          setStatus(
            dj.message ??
              dj.error ??
              aj.dispatch?.message ??
              "Dispatch refusé après autorisation D6",
          );
        } else {
          setStatus(
            `Dispatch accepté (${dj.status ?? "ok"}) — observations LIVE/SCRIPTED à réconcilier`,
          );
        }
      } else {
        setStatus(
          `Dispatch accepté (${dispStatus ?? "ok"}) — observations LIVE/SCRIPTED à réconcilier`,
        );
      }
      setConfirmOpen(false);
      await reload();
    } finally {
      setBusy(false);
    }
  }

  async function confirmNo() {
    if (!pendingAttemptId || !selectedContract) {
      setConfirmOpen(false);
      setPendingAttemptId(null);
      setStatus("Confirmation Non — dialogue fermé sans acte");
      return;
    }
    setBusy(true);
    try {
      const auth = await fetch(
        `/api/projects/${props.projectId}/realization/attempts/${pendingAttemptId}/authorize`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            statement: "Refus explicite D6 — pas d'exécution Cursor du contrat inspecté",
            inspectedFingerprint: selectedContract.fingerprint,
            confirmed: false,
          }),
        },
      );
      const aj = (await auth.json().catch(() => ({}))) as {
        error?: string;
        message?: string;
        status?: string;
        decisionId?: string;
        refused?: boolean;
      };
      if (!auth.ok) {
        setStatus(aj.message ?? aj.error ?? "Refus D6 non enregistré");
      } else {
        setStatus(
          `Refus D6 enregistré (${aj.status ?? "CANCELLED"}) — décision ${aj.decisionId ?? "—"} — aucun dispatch`,
        );
      }
      setConfirmOpen(false);
      setPendingAttemptId(null);
      await reload();
    } finally {
      setBusy(false);
    }
  }

  function resumeMissing(rubrics: D8Rubric[] | undefined): boolean {
    const resume = (rubrics ?? []).find((r) => r.key === "resume");
    return (
      !resume ||
      resume.coverage === "MISSING" ||
      /^rapport manquant$/i.test((resume.content ?? "").trim())
    );
  }

  async function openBilan(attempt: AttemptRow) {
    setSelectedAttempt(attempt);
    setBusy(true);
    try {
      const handoffRes = await fetch(
        `/api/projects/${props.projectId}/realization/attempts/${attempt.attemptId}/handoff`,
      );
      const handoffJ = (await handoffRes.json().catch(() => ({}))) as {
        handoff?: { id?: string; status?: string; reportMarkdown?: string | null };
        status?: string;
      };
      const handoff = handoffJ.handoff ?? null;
      const handoffReceived =
        handoffRes.ok &&
        handoff?.status === "RECEIVED" &&
        Boolean(handoff.reportMarkdown && String(handoff.reportMarkdown).trim());

      const res = await fetch(
        `/api/projects/${props.projectId}/realization/attempts/${attempt.attemptId}/qualification`,
      );
      const j = (await res.json().catch(() => ({}))) as {
        status?: string;
        qualification?: {
          id?: string;
          verdict: string;
          rubrics: D8Rubric[];
          limits: string[];
          noraAnalysisMarkdown?: string | null;
          noraAnalysisKind?: string | null;
          updatedAt?: string | null;
          dossier?: BilanDossierStructured | null;
        };
      };

      // C11/C24 — lecture ≠ qualification silencieuse à l'ouverture.
      // Le pipeline autonome produit le dossier; l'UI observe l'état en cours
      // ou disponible. Requalification = acte explicite uniquement.
      const needsFirstCreate = j.status === "MISSING" || !j.qualification;
      const needsExplicitRequalify =
        Boolean(j.qualification) &&
        handoffReceived &&
        resumeMissing(j.qualification?.rubrics);

      if (needsFirstCreate) {
        // If handoff is already RECEIVED, allow explicit qualify CTA; otherwise
        // keep selected attempt visible and surface honest in-progress status.
        setBilan(null);
        setPendingRequalify(
          handoffReceived
            ? {
                attemptId: attempt.attemptId,
                handoffId: handoff?.id ?? "",
                expectedUpdatedAt: null,
              }
            : null,
        );
        setStatus(
          handoffReceived
            ? "Dossier D8 absent — qualification explicite requise (pas de POST à l'ouverture)"
            : "Dossier D8 en cours ou absent — ouverture en lecture seule",
        );
        // Trigger observational reload so a concurrent autonomous restitution can appear.
        await reload();
        return;
      }

      if (needsExplicitRequalify && j.qualification) {
        setBilan({
          verdict: j.qualification.verdict,
          rubrics: j.qualification.rubrics,
          limits: j.qualification.limits,
          noraAnalysisMarkdown: j.qualification.noraAnalysisMarkdown,
          noraAnalysisKind: j.qualification.noraAnalysisKind,
          dossier: j.qualification.dossier ?? null,
        });
        setPendingRequalify({
          attemptId: attempt.attemptId,
          handoffId: handoff?.id ?? "",
          expectedUpdatedAt: j.qualification.updatedAt ?? null,
        });
        setStatus(
          "Handoff RECEIVED après qualification initiale — requalification explicite requise (pas de POST silencieux à l'ouverture)",
        );
        return;
      }
      setBilan({
        verdict: j.qualification!.verdict,
        rubrics: j.qualification!.rubrics,
        limits: j.qualification!.limits,
        noraAnalysisMarkdown: j.qualification!.noraAnalysisMarkdown,
        noraAnalysisKind: j.qualification!.noraAnalysisKind,
        dossier: j.qualification!.dossier ?? null,
      });
    } finally {
      setBusy(false);
    }
  }

  async function requestStop(attemptId: string) {
    setBusy(true);
    try {
      await fetch(`/api/projects/${props.projectId}/realization/attempts/${attemptId}/stop`, {
        method: "POST",
      });
      await reload();
    } finally {
      setBusy(false);
    }
  }

  /** C11 — requalify is an explicit Pilot act, never silent on openBilan. */
  async function confirmRequalify() {
    if (!pendingRequalify?.handoffId) {
      setStatus("Impossible de requalifier — handoffId manquant");
      return;
    }
    setBusy(true);
    try {
      const res = await fetch(
        `/api/projects/${props.projectId}/realization/attempts/${pendingRequalify.attemptId}/qualification`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            attachNoraCognitive: true,
            requalify: true,
            reason:
              "C11 — requalification explicite après handoff RECEIVED (correction de jugement)",
            requalifyMode: "judgment_correction",
            newProofRef: pendingRequalify.handoffId,
            expectedUpdatedAt: pendingRequalify.expectedUpdatedAt ?? undefined,
          }),
        },
      );
      const created = (await res.json().catch(() => ({}))) as {
        verdict?: string;
        rubrics?: D8Rubric[];
        limits?: string[];
        noraAnalysisMarkdown?: string | null;
        noraAnalysisKind?: string | null;
        message?: string;
        error?: string;
      };
      if (res.ok && created.rubrics) {
        setBilan({
          verdict: created.verdict ?? "INDETERMINATE",
          rubrics: created.rubrics,
          limits: created.limits ?? [],
          noraAnalysisMarkdown: created.noraAnalysisMarkdown,
          noraAnalysisKind: created.noraAnalysisKind,
        });
        setPendingRequalify(null);
        setStatus("Bilan D8 requalifié explicitement après handoff RECEIVED");
      } else {
        setStatus(created.message ?? created.error ?? "Requalification refusée");
      }
    } finally {
      setBusy(false);
    }
  }

  const viewerModel: ContractViewerModel | null = selectedContract
    ? {
        contractId: selectedContract.id,
        contractKey: selectedContract.contractKey,
        version: selectedContract.version,
        fingerprint: selectedContract.fingerprint,
        title: selectedContract.body.title,
        engagements: selectedContract.body.engagements,
        volets: selectedContract.body.volets,
        instructionText: selectedContract.body.instructionText,
        risks: selectedContract.body.risks,
        exclusions: selectedContract.body.exclusions,
      }
    : null;

  const showExecutionChrome = mode === "execution";
  const showResultsChrome = mode === "results";
  const [execFilter, setExecFilter] = useState<"all" | "active" | "done">("all");

  const filteredAttempts = attempts.filter((a) => {
    if (execFilter === "active") {
      return a.status === "DISPATCHED" || a.status === "AMBIGUOUS" || a.status === "AUTHORIZED";
    }
    if (execFilter === "done") {
      return a.status === "COMPLETED" || a.status === "FAILED";
    }
    return true;
  });

  const focusAttempt = selectedAttempt ?? filteredAttempts[0] ?? null;

  return (
    <div
      className="fig-cursor-realization"
      data-testid="cursor-realization-surface"
      data-mode={mode}
    >
      {status || pendingRequalify ? (
        <div className="fig-realization-status-bar" data-testid="realization-status-bar">
          {status ? (
            <p role="status" data-testid="realization-status" className="fig-cv-meta">
              {status}
            </p>
          ) : null}
          {pendingRequalify ? (
            <p>
              <button
                type="button"
                className="btn"
                data-testid="d8-explicit-requalify"
                disabled={busy}
                onClick={() => void confirmRequalify()}
              >
                Requalifier le bilan (acte explicite)
              </button>
            </p>
          ) : null}
        </div>
      ) : null}

      {confirmOpen && selectedContract ? (
        <D6ConfirmLaunch
          contractKey={selectedContract.contractKey}
          version={selectedContract.version}
          fingerprint={selectedContract.fingerprint}
          title={selectedContract.body.title}
          busy={busy}
          onYes={() => void confirmYes()}
          onNo={() => void confirmNo()}
          onCancel={() => {
            setConfirmOpen(false);
            setPendingAttemptId(null);
            setStatus("Dialogue D6 annulé — aucun acte");
          }}
        />
      ) : null}

      {showExecutionChrome ? (
        <div className="fig-exec-split" data-testid="execution-split">
          <section className="fig-exec-list-panel" data-testid="realization-attempts">
            <div className="fig-exec-list-head">
              <h3>Interventions du projet</h3>
              <span className="fig-exec-count">
                {attempts.length} intervention{attempts.length === 1 ? "" : "s"}
              </span>
            </div>
            <div className="fig-exec-filters" role="group" aria-label="Filtres">
              {(
                [
                  ["all", "Tous"],
                  ["active", "Actives"],
                  ["done", "Terminées"],
                ] as const
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  className={
                    execFilter === id ? "fig-exec-filter is-active" : "fig-exec-filter"
                  }
                  onClick={() => setExecFilter(id)}
                >
                  {label}
                </button>
              ))}
            </div>
            {filteredAttempts.length === 0 && contracts.length === 0 ? (
              <p className="muted">Aucune intervention Cursor pour ce projet.</p>
            ) : (
              <ul className="fig-exec-cards">
                {contracts.map((c) => {
                  const selected = selectedContract?.id === c.id && !selectedAttempt;
                  return (
                    <li key={`c-${c.id}`}>
                      <button
                        type="button"
                        className={
                          selected ? "fig-exec-card is-selected" : "fig-exec-card"
                        }
                        data-testid={`contract-select-${c.id}`}
                        disabled={busy}
                        onClick={() => {
                          setSelectedContract(c);
                          setSelectedAttempt(null);
                          setBilan(null);
                          setInstructionExpanded(false);
                        }}
                      >
                        <span className="fig-exec-card-kicker">
                          CONTRAT · {c.status} · v{c.version}
                        </span>
                        <span className="fig-exec-card-title">{c.body.title}</span>
                        <span className="fig-exec-card-meta">{c.contractKey}</span>
                      </button>
                    </li>
                  );
                })}
                {filteredAttempts.map((a) => {
                  const selected = focusAttempt?.attemptId === a.attemptId && !selectedContract;
                  return (
                    <li key={a.attemptId} data-testid={`attempt-row-${a.attemptId}`}>
                      <button
                        type="button"
                        className={
                          selected ? "fig-exec-card is-selected" : "fig-exec-card"
                        }
                        onClick={() => {
                          setSelectedAttempt(a);
                          setSelectedContract(null);
                          setBilan(null);
                        }}
                      >
                        <span className="fig-exec-card-kicker">
                          {a.attemptId.slice(0, 12)} · {a.status}
                        </span>
                        <span className="fig-exec-card-title">
                          {a.live.lastActivitySummary ||
                            `${a.plan.contractKey} v${a.plan.contractVersion}`}
                        </span>
                        <span className="fig-exec-card-meta">
                          {a.live.terminalStatus ?? "—"}
                          {a.status === "AMBIGUOUS" ? " · à réconcilier" : ""}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>

          <section className="fig-exec-detail-panel" data-testid="execution-detail">
            {viewerModel && selectedContract ? (
              <>
                <ContractViewer
                  contract={viewerModel}
                  instructionExpanded={instructionExpanded}
                  onToggleInstruction={() => setInstructionExpanded((v) => !v)}
                  onClose={() => setSelectedContract(null)}
                  onOpenInExecution={() => setSelectedContract(selectedContract)}
                  onRequestExecute={
                    selectedContract.status === "READY"
                      ? () => void prepareFromContract(selectedContract)
                      : undefined
                  }
                  executeDisabled={busy || selectedContract.status !== "READY"}
                />
                <div className="fig-exec-filters" style={{ marginTop: 12 }}>
                  {selectedContract.status === "DRAFT" ||
                  selectedContract.status === "NEEDS_REVISION" ? (
                    <button
                      type="button"
                      className="btn secondary"
                      data-testid={`contract-ready-${selectedContract.id}`}
                      disabled={busy}
                      onClick={() => void qualifyReady(selectedContract)}
                    >
                      Qualifier READY (serveur)
                    </button>
                  ) : null}
                  {selectedContract.status === "READY" ? (
                    <button
                      type="button"
                      className="btn"
                      data-testid={`contract-prepare-${selectedContract.id}`}
                      disabled={busy}
                      onClick={() => void prepareFromContract(selectedContract)}
                    >
                      Préparer exécution
                    </button>
                  ) : null}
                </div>
              </>
            ) : focusAttempt ? (
              <>
                <div className="fig-exec-detail-head">
                  <p className="fig-cv-kicker">
                    INTERVENTION&nbsp;&nbsp;{focusAttempt.attemptId.slice(0, 12).toUpperCase()}
                  </p>
                  <span
                    className={
                      focusAttempt.status === "COMPLETED"
                        ? "fig-tag fig-tag-ok"
                        : focusAttempt.status === "FAILED"
                          ? "fig-tag fig-tag-warn"
                          : focusAttempt.status === "AMBIGUOUS"
                            ? "fig-tag fig-tag-warn"
                            : "fig-tag"
                    }
                  >
                    {focusAttempt.status === "AUTHORIZED"
                      ? "À autoriser"
                      : focusAttempt.status === "DISPATCHED"
                        ? "En cours"
                        : focusAttempt.status === "COMPLETED"
                          ? "Terminée"
                          : focusAttempt.status === "FAILED"
                            ? "Échec"
                            : focusAttempt.status === "AMBIGUOUS"
                              ? "À réconcilier"
                              : focusAttempt.status}
                  </span>
                </div>
                <h3 className="fig-cv-title">
                  {focusAttempt.live.lastActivitySummary ||
                    `${focusAttempt.plan.contractKey} v${focusAttempt.plan.contractVersion}`}
                </h3>
                <p className="fig-cv-meta">
                  Une intervention conserve un contrat, ses versions et ses tentatives.
                  {focusAttempt.status === "AMBIGUOUS"
                    ? " · état à réconcilier (UNKNOWN ≠ échec certain)"
                    : ""}
                </p>
                <div className="fig-exec-detail-grid fig-exec-detail-grid--3">
                  <div className="fig-exec-detail-card">
                    <p className="fig-exec-detail-card-label">PROJET</p>
                    <p className="fig-exec-detail-card-value">
                      {props.projectName?.trim() || props.projectId}
                    </p>
                  </div>
                  <div className="fig-exec-detail-card">
                    <p className="fig-exec-detail-card-label">CYCLE D&apos;ORIGINE</p>
                    <p className="fig-exec-detail-card-value">Construction</p>
                  </div>
                  <div className="fig-exec-detail-card">
                    <p className="fig-exec-detail-card-label">VERSION</p>
                    <p className="fig-exec-detail-card-value">
                      {focusAttempt.plan.contractKey} v{focusAttempt.plan.contractVersion}
                    </p>
                  </div>
                </div>
                <section className="fig-exec-situation" data-testid="execution-situation">
                  <p className="fig-cv-kicker">SITUATION ACTUELLE</p>
                  <p className="fig-cv-meta">
                    {focusAttempt.status === "DISPATCHED"
                      ? "Réalisation LIVE en cours — observations Cursor SDK ci-dessous."
                      : focusAttempt.status === "AUTHORIZED"
                        ? "Contrat prêt : aucun run Cursor SDK lancé, aucune preuve de résultat."
                        : focusAttempt.status === "AMBIGUOUS"
                          ? "État observé incertain — réconciliation requise avant conclusion."
                          : focusAttempt.live.terminalStatus
                            ? `Signal observé : ${focusAttempt.live.terminalStatus}.`
                            : `Statut ${focusAttempt.status}.`}
                  </p>
                  <div className="fig-exec-filters">
                    <button
                      type="button"
                      className="btn"
                      data-testid={`attempt-open-contract-${focusAttempt.attemptId}`}
                      onClick={() => {
                        const c = contracts.find(
                          (x) => x.id === focusAttempt.plan.contractId,
                        );
                        if (c) {
                          setSelectedContract(c);
                          setSelectedAttempt(null);
                        }
                      }}
                    >
                      Consulter le contrat
                    </button>
                    <button
                      type="button"
                      className="btn secondary"
                      data-testid={`attempt-reprise-nora-${focusAttempt.attemptId}`}
                      onClick={() => {
                        props.onDiscussWithNora?.({
                          attemptId: focusAttempt.attemptId,
                          contractId: focusAttempt.plan.contractId,
                          handoffId: null,
                          dossierVersion: null,
                          verdictD8: focusAttempt.live.terminalStatus ?? focusAttempt.status,
                          noraKind: null,
                          fingerprint: focusAttempt.fingerprint,
                          pieces: null,
                        });
                      }}
                    >
                      Reprendre avec Nora
                    </button>
                  </div>
                </section>
                {focusAttempt.status === "DISPATCHED" ||
                focusAttempt.status === "AMBIGUOUS" ||
                focusAttempt.live.lastActivitySummary ? (
                  <div className="fig-exec-live-panel" data-testid="ml5-live-panel">
                    <p className="fig-cv-kicker">
                      CURSOR SDK&nbsp;&nbsp;/&nbsp;&nbsp;ACTIVITÉ OBSERVÉE
                    </p>
                    <h4 className="fig-cv-title" style={{ fontSize: 16 }}>
                      Faits runtime
                    </h4>
                    <p className="fig-cv-meta">
                      STOP demandé ≠ arrêté · tests lancés ≠ tests PASS · changement local ≠
                      publication distante
                    </p>
                    <ul className="fig-exec-live-events">
                      <li>
                        Dernière activité :{" "}
                        {focusAttempt.live.lastActivitySummary ?? "aucune observation"}
                      </li>
                      <li>
                        Agent : {focusAttempt.live.agentId ?? "non observé"} · Run :{" "}
                        {focusAttempt.live.runId ?? "non observé"}
                      </li>
                      {(focusAttempt.live.limits ?? []).slice(0, 4).map((l) => (
                        <li key={l}>{l}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <section className="fig-exec-situation" data-testid="execution-tentatives">
                    <p className="fig-cv-kicker">TENTATIVES TECHNIQUES</p>
                    <p className="fig-cv-meta">
                      {focusAttempt.status === "AUTHORIZED"
                        ? "Aucune tentative. Après autorisation, l'activité LIVE se rattache à cette intervention."
                        : `Tentative ${focusAttempt.attemptId} · ${focusAttempt.status}.`}
                    </p>
                  </section>
                )}
                <div className="fig-exec-filters" style={{ marginTop: 12 }}>
                  {focusAttempt.status === "COMPLETED" ||
                  focusAttempt.status === "FAILED" ||
                  focusAttempt.status === "AMBIGUOUS" ? (
                    <button
                      type="button"
                      className="btn secondary"
                      data-testid={`attempt-bilan-${focusAttempt.attemptId}`}
                      onClick={() => {
                        const url = new URL(window.location.href);
                        url.searchParams.set("surface", "publication");
                        url.searchParams.set("attempt", focusAttempt.attemptId);
                        window.location.assign(url.toString());
                      }}
                    >
                      Ouvrir le bilan D8
                    </button>
                  ) : null}
                  {focusAttempt.status === "DISPATCHED" ||
                  focusAttempt.status === "AMBIGUOUS" ? (
                    <button
                      type="button"
                      className="btn secondary"
                      data-testid="cursor-reconcile"
                      data-attempt-id={focusAttempt.attemptId}
                      disabled={busy}
                      onClick={() => void reconcileAttempt(focusAttempt.attemptId)}
                    >
                      Réconcilier
                    </button>
                  ) : null}
                  {focusAttempt.status === "DISPATCHED" ? (
                    <button
                      type="button"
                      className="btn secondary"
                      data-testid={`attempt-stop-${focusAttempt.attemptId}`}
                      onClick={() => void requestStop(focusAttempt.attemptId)}
                    >
                      Demander STOP
                    </button>
                  ) : null}
                </div>
              </>
            ) : (
              <p className="muted">
                Sélectionnez un contrat ou une intervention à gauche.
              </p>
            )}
          </section>
        </div>
      ) : null}

      {showResultsChrome ? (
        <div className="fig-results-split" data-testid="results-split">
          <section
            className="fig-results-bilans-list"
            data-testid="realization-attempts"
          >
            <div className="fig-results-bilans-head">
              <h3>Bilans disponibles</h3>
              <span className="fig-results-bilans-count" data-testid="bilans-count">
                {attempts.length} bilan{attempts.length === 1 ? "" : "s"}
              </span>
            </div>
            <p className="fig-travail-viewer-meta">
              Bilans et preuves qualifiées par intervention
            </p>
            {attempts.length === 0 ? (
              <p className="muted">Aucune tentative Cursor pour ce projet.</p>
            ) : (
              <ul className="fig-results-bilans-ul">
                {attempts.map((a) => {
                  const selected = selectedAttempt?.attemptId === a.attemptId;
                  return (
                    <li
                      key={a.attemptId}
                      data-testid={`attempt-row-${a.attemptId}`}
                      data-selected={selected ? "1" : "0"}
                    >
                      <button
                        type="button"
                        className={
                          selected
                            ? "fig-results-bilan-card is-selected"
                            : "fig-results-bilan-card"
                        }
                        data-testid={`attempt-bilan-${a.attemptId}`}
                        onClick={() => void openBilan(a)}
                      >
                        <span className="fig-results-bilan-kicker">
                          {a.attemptId.slice(0, 12)} · {a.status}
                        </span>
                        <span className="fig-results-bilan-title">
                          {a.live.lastActivitySummary ||
                            `${a.plan.contractKey} v${a.plan.contractVersion}`}
                        </span>
                        <span className="fig-results-bilan-meta">
                          {a.live.terminalStatus ?? "—"}
                          {a.status === "AMBIGUOUS" ? " · à réconcilier" : ""}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
            <p className="fig-travail-viewer-meta">
              Lecture seule · aucun arbitrage requis dans cette vue
            </p>
          </section>
          <div className="fig-results-dossier" data-testid="results-dossier">
            {bilan && selectedAttempt ? (
              <RealizationBilan
                attemptId={selectedAttempt.attemptId}
                verdict={bilan.verdict}
                rubrics={bilan.rubrics}
                limits={bilan.limits}
                noraAnalysisMarkdown={bilan.noraAnalysisMarkdown}
                noraAnalysisKind={bilan.noraAnalysisKind}
                dossier={bilan.dossier}
                activeTab={bilanTab}
                onTabChange={setBilanTab}
                onDiscussWithNora={() => {
                  const d = bilan.dossier;
                  props.onDiscussWithNora?.({
                    attemptId: selectedAttempt.attemptId,
                    contractId: d?.contractId ?? selectedAttempt.plan.contractId,
                    handoffId: d?.handoffId ?? null,
                    dossierVersion: d?.dossierVersion ?? null,
                    verdictD8: bilan.verdict,
                    noraKind: bilan.noraAnalysisKind ?? null,
                    fingerprint: selectedAttempt.fingerprint,
                    pieces: d?.filesConsulted?.length
                      ? d.filesConsulted.map((f) => f.path)
                      : null,
                  });
                }}
              />
            ) : selectedAttempt ? (
              <div
                className="fig-results-dossier-pending"
                data-testid="results-dossier-pending"
              >
                <p className="fig-cv-kicker">
                  BILAN&nbsp;&nbsp;{selectedAttempt.attemptId.slice(0, 12).toUpperCase()}
                </p>
                <h3 className="fig-cv-title">Dossier en cours ou absent</h3>
                <p className="fig-cv-meta">
                  Aucun dossier D8 consultable pour cette intervention pour le moment.
                  UNKNOWN ou MISSING ≠ absence d&apos;écart inventorié. Lecture seule — aucun
                  arbitrage requis ici.
                </p>
                <div className="fig-bilan-appreciations">
                  <article className="fig-bilan-appreciation">
                    <p className="fig-bilan-appreciation-label">CURSOR</p>
                    <p className="fig-bilan-appreciation-value">
                      {selectedAttempt.live.terminalStatus ?? selectedAttempt.status}
                    </p>
                  </article>
                  <article className="fig-bilan-appreciation">
                    <p className="fig-bilan-appreciation-label">CONTRÔLE D8 / D9</p>
                    <p className="fig-bilan-appreciation-value">Non disponible</p>
                  </article>
                  <article className="fig-bilan-appreciation">
                    <p className="fig-bilan-appreciation-label">ANALYSE FINALE</p>
                    <p className="fig-bilan-appreciation-value">Non disponible</p>
                  </article>
                </div>
                <div className="fig-exec-filters" style={{ marginTop: 14 }}>
                  <button
                    type="button"
                    className="btn secondary"
                    data-testid="results-reprise-nora-pending"
                    onClick={() => {
                      props.onDiscussWithNora?.({
                        attemptId: selectedAttempt.attemptId,
                        contractId: selectedAttempt.plan.contractId,
                        handoffId: null,
                        dossierVersion: null,
                        verdictD8: selectedAttempt.status,
                        noraKind: null,
                        fingerprint: selectedAttempt.fingerprint,
                        pieces: null,
                      });
                    }}
                  >
                    Reprendre avec Nora
                  </button>
                </div>
              </div>
            ) : (
              <p className="muted" data-testid="results-dossier-empty">
                Sélectionnez un bilan à gauche pour ouvrir le dossier.
              </p>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
