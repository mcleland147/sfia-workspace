"use client";

/**
 * ML5 — parcours Exécution / Résultats raccordé (frames 12.02–12.08 / 12.11–12.14).
 * Mounted on existing project page — no parallel shell.
 * Reading never authorizes; Non confirmation = no dispatch.
 */

import { useCallback, useEffect, useState } from "react";
import { ContractViewer, type ContractViewerModel } from "./ContractViewer";
import { RealizationBilan } from "./RealizationBilan";
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
  body: ContractViewerModel extends never ? never : {
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
  onDiscussWithNora?: (draft: string) => void;
}) {
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
  } | null>(null);
  const [bilanTab, setBilanTab] = useState<"synthese" | "evaluation" | "verdict" | "sources">(
    "synthese",
  );
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  const reload = useCallback(async () => {
    const [cRes, aRes] = await Promise.all([
      fetch(`/api/projects/${props.projectId}/realization/contracts`),
      fetch(`/api/projects/${props.projectId}/realization/attempts`).catch(() => null),
    ]);
    if (cRes.ok) {
      const j = (await cRes.json()) as { contracts?: ContractRow[] };
      setContracts(j.contracts ?? []);
    }
    // attempts list via dedicated route if present; else empty
    if (aRes && aRes.ok) {
      const j = (await aRes.json()) as { attempts?: AttemptRow[] };
      setAttempts(j.attempts ?? []);
    }
  }, [props.projectId]);

  useEffect(() => {
    void reload();
  }, [reload]);

  async function loadAttemptsFallback() {
    // Prefer list endpoint; if 404, keep empty (API may only expose per-id GET).
    const res = await fetch(`/api/projects/${props.projectId}/realization/attempts`);
    if (res.ok) {
      const j = (await res.json()) as { attempts?: AttemptRow[] };
      setAttempts(j.attempts ?? []);
    }
  }

  useEffect(() => {
    void loadAttemptsFallback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.projectId]);

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
        },
      );
      const aj = (await auth.json().catch(() => ({}))) as { error?: string; message?: string };
      if (!auth.ok) {
        setStatus(aj.message ?? aj.error ?? "Autorisation refusée");
        setConfirmOpen(false);
        return;
      }
      const disp = await fetch(
        `/api/projects/${props.projectId}/realization/attempts/${pendingAttemptId}/dispatch`,
        { method: "POST" },
      );
      const dj = (await disp.json().catch(() => ({}))) as { error?: string; message?: string };
      if (!disp.ok) {
        setStatus(dj.message ?? dj.error ?? "Dispatch refusé");
      } else {
        setStatus("Dispatch accepté — observations LIVE/SCRIPTED à réconcilier");
      }
      setConfirmOpen(false);
      await reload();
    } finally {
      setBusy(false);
    }
  }

  function confirmNo() {
    setConfirmOpen(false);
    setPendingAttemptId(null);
    setStatus("Confirmation Non — aucun acte D6, aucun dispatch");
  }

  async function openBilan(attempt: AttemptRow) {
    setSelectedAttempt(attempt);
    setBusy(true);
    try {
      let res = await fetch(
        `/api/projects/${props.projectId}/realization/attempts/${attempt.attemptId}/qualification`,
      );
      let j = (await res.json().catch(() => ({}))) as {
        status?: string;
        qualification?: {
          verdict: string;
          rubrics: D8Rubric[];
          limits: string[];
          noraAnalysisMarkdown?: string | null;
        };
      };
      if (j.status === "MISSING" || !j.qualification) {
        res = await fetch(
          `/api/projects/${props.projectId}/realization/attempts/${attempt.attemptId}/qualification`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ attachNoraAnalysis: true }),
          },
        );
        const created = (await res.json().catch(() => ({}))) as {
          verdict?: string;
          rubrics?: D8Rubric[];
          limits?: string[];
          noraAnalysisMarkdown?: string | null;
        };
        if (res.ok && created.rubrics) {
          setBilan({
            verdict: created.verdict ?? "INDETERMINATE",
            rubrics: created.rubrics,
            limits: created.limits ?? [],
            noraAnalysisMarkdown: created.noraAnalysisMarkdown,
          });
          return;
        }
        setStatus("Qualification indisponible");
        return;
      }
      setBilan({
        verdict: j.qualification.verdict,
        rubrics: j.qualification.rubrics,
        limits: j.qualification.limits,
        noraAnalysisMarkdown: j.qualification.noraAnalysisMarkdown,
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

  return (
    <div className="fig-cursor-realization" data-testid="cursor-realization-surface">
      <header>
        <p className="fig-kicker !mb-0">EXÉCUTION CURSOR  /  RÉSULTATS</p>
        <h2 className="fig-inspector-title">Réalisation gouvernée</h2>
        <p className="fig-travail-viewer-meta">
          Inspection → confirmation D6 → une tentative → observations → D8. Lecture ≠ autorisation.
        </p>
        {status ? (
          <p role="status" data-testid="realization-status">
            {status}
          </p>
        ) : null}
      </header>

      <section data-testid="realization-contracts">
        <h3>Contrats techniques</h3>
        {contracts.length === 0 ? (
          <p className="muted">Aucun contrat — Nora peut en préparer depuis Travail.</p>
        ) : (
          <ul>
            {contracts.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  className="btn secondary"
                  data-testid={`contract-select-${c.id}`}
                  disabled={busy}
                  onClick={() => {
                    setSelectedContract(c);
                    setInstructionExpanded(false);
                  }}
                >
                  {c.body.title} · {c.status} · v{c.version}
                </button>
                {c.status === "READY" ? (
                  <button
                    type="button"
                    className="btn"
                    data-testid={`contract-prepare-${c.id}`}
                    disabled={busy}
                    onClick={() => void prepareFromContract(c)}
                  >
                    Préparer exécution
                  </button>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </section>

      {viewerModel ? (
        <ContractViewer
          contract={viewerModel}
          instructionExpanded={instructionExpanded}
          onToggleInstruction={() => setInstructionExpanded((v) => !v)}
          onClose={() => setSelectedContract(null)}
          onOpenInExecution={() => setSelectedContract(selectedContract)}
          onRequestExecute={
            selectedContract?.status === "READY"
              ? () => void prepareFromContract(selectedContract)
              : undefined
          }
          executeDisabled={busy || selectedContract?.status !== "READY"}
        />
      ) : null}

      {confirmOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          data-testid="d6-confirm-launch"
          className="fig-d6-confirm"
        >
          <h3>Confirmer le lancement</h3>
          <p>
            Vous avez inspecté le contrat {selectedContract?.contractKey} v
            {selectedContract?.version}. Confirmez-vous l&apos;exécution Cursor ?
          </p>
          <button
            type="button"
            className="btn"
            data-testid="d6-confirm-yes"
            disabled={busy}
            onClick={() => void confirmYes()}
          >
            Oui
          </button>
          <button
            type="button"
            className="btn secondary"
            data-testid="d6-confirm-no"
            disabled={busy}
            onClick={confirmNo}
          >
            Non
          </button>
        </div>
      ) : null}

      <section data-testid="realization-attempts">
        <h3>Tentatives</h3>
        {attempts.length === 0 ? (
          <p className="muted">Aucune tentative Cursor pour ce projet.</p>
        ) : (
          <ul>
            {attempts.map((a) => (
              <li key={a.attemptId} data-testid={`attempt-row-${a.attemptId}`}>
                <span>
                  {a.status} · {a.live.terminalStatus ?? "—"} ·{" "}
                  {a.live.lastActivitySummary ?? "pas d'observation"}
                </span>
                <button
                  type="button"
                  className="btn secondary"
                  data-testid={`attempt-bilan-${a.attemptId}`}
                  onClick={() => void openBilan(a)}
                >
                  Bilan D8
                </button>
                {a.status === "DISPATCHED" ? (
                  <button
                    type="button"
                    className="btn secondary"
                    data-testid={`attempt-stop-${a.attemptId}`}
                    onClick={() => void requestStop(a.attemptId)}
                  >
                    STOP
                  </button>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </section>

      {bilan && selectedAttempt ? (
        <RealizationBilan
          attemptId={selectedAttempt.attemptId}
          verdict={bilan.verdict}
          rubrics={bilan.rubrics}
          limits={bilan.limits}
          noraAnalysisMarkdown={bilan.noraAnalysisMarkdown}
          activeTab={bilanTab}
          onTabChange={(tab) =>
            setBilanTab(tab as "synthese" | "evaluation" | "verdict" | "sources")
          }
          onDiscussWithNora={() =>
            props.onDiscussWithNora?.(
              `Reprendre à propos de la tentative ${selectedAttempt.attemptId} (verdict D8: ${bilan.verdict}).`,
            )
          }
        />
      ) : null}
    </div>
  );
}
