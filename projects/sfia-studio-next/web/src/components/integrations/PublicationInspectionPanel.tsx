"use client";

import { useCallback, useEffect, useState } from "react";
import {
  dispatchButtonLabel,
  effectProviderLabel,
  mergeDispatchButtonLabel,
  publicationStatusBanner,
} from "./publication-effect-labels";

type Props = {
  projectId: string;
  /** Git effect provider mode from status (REAL|SCRIPTED) — orthogonal to OAuth CONNECTED. */
  providerMode?: string;
};

type Source = {
  linkId: string;
  repositoryId: string;
  fullName: string;
  defaultBranch: string | null;
};

type Inspection = {
  kind: string;
  unifiedDiff: string;
  inspectionFingerprint: string;
  baseSha: string | null;
  baseContent: string | null;
};

type AttemptView = {
  attemptId: string;
  status: string;
  fingerprint?: string;
  plan?: {
    documentId: string;
    revisionId: string;
    targetPath: string;
    targetBranch: string;
    publicationBranch?: string;
    baseSha?: string | null;
    repositoryFullName?: string;
    actorLogin?: string | null;
    installationId?: string;
    /** Frozen at prepare — provenance of this attempt, not live config. */
    effectProviderMode?: "REAL" | "SCRIPTED" | null;
    inspection?: Inspection;
  };
  prNumber?: number | null;
  commitSha?: string | null;
  decisionId?: string | null;
  message?: string;
};

type DocOption = {
  document: { id: string; title: string };
  latestRevision?: { id: string; revisionNumber: number; status: string } | null;
};

export function PublicationInspectionPanel({ projectId, providerMode: providerModeProp }: Props) {
  const [sources, setSources] = useState<Source[]>([]);
  const [availableRepos, setAvailableRepos] = useState<
    Array<{ id: string; fullName: string; defaultBranch: string | null }>
  >([]);
  const [docs, setDocs] = useState<DocOption[]>([]);
  const [repositoryId, setRepositoryId] = useState("");
  const [documentId, setDocumentId] = useState("");
  const [targetPath, setTargetPath] = useState("docs/studio-next/publication-e2e.md");
  const [targetBranch, setTargetBranch] = useState("main");
  const [attempt, setAttempt] = useState<AttemptView | null>(null);
  const [mergeAttempt, setMergeAttempt] = useState<AttemptView | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [providerMode, setProviderMode] = useState<string | undefined>(providerModeProp);

  const load = useCallback(async () => {
    const [srcRes, integRes, projRes] = await Promise.all([
      fetch(`/api/projects/${projectId}/git/sources`),
      fetch("/api/integrations/status"),
      fetch(`/api/projects/${projectId}`),
    ]);
    if (srcRes.ok) {
      const j = await srcRes.json();
      const list = (j.sources ?? []) as Source[];
      setSources(list);
      setRepositoryId((prev) => {
        if (prev) return prev;
        const first = list[0];
        if (first?.defaultBranch) setTargetBranch(first.defaultBranch);
        return first?.repositoryId ?? "";
      });
    }
    if (integRes.ok) {
      const j = await integRes.json();
      setAvailableRepos(j.repositories ?? []);
      if (typeof j.providerMode === "string") setProviderMode(j.providerMode);
    }
    if (projRes.ok) {
      const j = await projRes.json();
      const list = (j.documents ?? []) as DocOption[];
      setDocs(list);
      setDocumentId((prev) => {
        if (prev) return prev;
        const available = list.find((d) => d.latestRevision?.status === "AVAILABLE");
        return available?.document.id ?? "";
      });
    }
  }, [projectId]);

  useEffect(() => {
    void load();
  }, [load]);

  async function attachRepo(repoId: string) {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(`/api/projects/${projectId}/git/links`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ repositoryId: repoId }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        setError(j.message ?? "Rattachement refusé");
      }
      await load();
    } finally {
      setBusy(false);
    }
  }

  async function prepare() {
    const doc = docs.find((d) => d.document.id === documentId);
    const rev = doc?.latestRevision;
    if (!rev || rev.status !== "AVAILABLE") {
      setError("Révision AVAILABLE requise");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(`/api/projects/${projectId}/git/publications/prepare`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          documentId,
          revisionId: rev.id,
          repositoryId,
          targetPath,
          targetBranch,
          correlationKey: `pub-${projectId}-${rev.id}-${Date.now()}`,
        }),
      });
      const j = await res.json();
      if (!res.ok) {
        setError(j.message ?? j.error ?? "Préparation refusée");
        return;
      }
      setAttempt({
        attemptId: j.attemptId,
        status: j.status,
        fingerprint: j.fingerprint,
        plan: j.plan,
      });
      setMergeAttempt(null);
    } finally {
      setBusy(false);
    }
  }

  async function authorize() {
    if (!attempt?.plan?.inspection?.inspectionFingerprint) {
      setError("Diff d'inspection requis avant autorisation");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(
        `/api/projects/${projectId}/git/publications/${attempt.attemptId}/authorize`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            statement: "Autorisation D6 de publication documentaire inspectée",
            inspectedFingerprint: attempt.plan.inspection.inspectionFingerprint,
          }),
        },
      );
      const j = await res.json();
      if (!res.ok) {
        setError(j.message ?? j.error ?? "Autorisation refusée");
        return;
      }
      // ACCEPT-01: authorize route auto-resumes dispatch; reflect observed status
      // (not the intermediate AUTHORIZED) so Dispatch is not presented as nominal.
      const resumedStatus =
        typeof j.missionResume?.status === "string" ? (j.missionResume.status as string) : null;
      setAttempt((a) =>
        a
          ? {
              ...a,
              status: resumedStatus ?? j.status,
              decisionId: j.decisionId,
              prNumber: j.missionResume?.prNumber ?? j.prNumber ?? a.prNumber ?? null,
              commitSha: j.missionResume?.commitSha ?? j.commitSha ?? a.commitSha ?? null,
            }
          : a,
      );
    } finally {
      setBusy(false);
    }
  }

  async function dispatch() {
    if (!attempt) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(
        `/api/projects/${projectId}/git/publications/${attempt.attemptId}/dispatch`,
        { method: "POST" },
      );
      const j = await res.json();
      if (!res.ok) {
        setError(j.message ?? j.error ?? "Dispatch refusé");
        setAttempt((a) =>
          a
            ? {
                ...a,
                status:
                  j.error === "REQUIRES_REQUALIFICATION" ? "REQUIRES_REQUALIFICATION" : a.status,
              }
            : a,
        );
        return;
      }
      setAttempt((a) =>
        a
          ? {
              ...a,
              status: j.status,
              prNumber: j.prNumber ?? null,
              commitSha: j.commitSha ?? null,
            }
          : a,
      );
    } finally {
      setBusy(false);
    }
  }

  async function prepareMerge() {
    if (!attempt?.attemptId || !attempt.prNumber) {
      setError("Publication ML4 avec PR observée requise");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(`/api/projects/${projectId}/git/merge/prepare`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          publicationAttemptId: attempt.attemptId,
          correlationKey: `merge-${attempt.attemptId}-${Date.now()}`,
        }),
      });
      const j = await res.json();
      if (!res.ok) {
        setError(j.message ?? j.error ?? "Préparation merge refusée");
        return;
      }
      setMergeAttempt({ attemptId: j.attemptId, status: j.status, plan: j.plan });
    } finally {
      setBusy(false);
    }
  }

  async function authorizeMerge() {
    if (!mergeAttempt) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(
        `/api/projects/${projectId}/git/merge/${mergeAttempt.attemptId}/authorize`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ statement: "Autorisation D6 distincte de merge" }),
        },
      );
      const j = await res.json();
      if (!res.ok) {
        setError(j.message ?? j.error ?? "Autorisation merge refusée");
        return;
      }
      setMergeAttempt((a) => (a ? { ...a, status: j.status, decisionId: j.decisionId } : a));
    } finally {
      setBusy(false);
    }
  }

  async function dispatchMerge() {
    if (!mergeAttempt) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(
        `/api/projects/${projectId}/git/merge/${mergeAttempt.attemptId}/dispatch`,
        { method: "POST" },
      );
      const j = await res.json();
      if (!res.ok) {
        setError(j.message ?? j.error ?? "Dispatch merge refusé");
        return;
      }
      setMergeAttempt((a) => (a ? { ...a, status: j.status } : a));
    } finally {
      setBusy(false);
    }
  }

  const unattached = availableRepos.filter(
    (r) => !sources.some((s) => s.repositoryId === r.id || s.fullName === r.fullName),
  );
  const inspection = attempt?.plan?.inspection;
  // Provenance of the attempt (frozen at prepare). Live config only when no attempt plan yet.
  const attemptEffectMode =
    attempt?.plan != null
      ? effectProviderLabel(attempt.plan.effectProviderMode)
      : effectProviderLabel(providerMode);
  const liveEffectMode = effectProviderLabel(providerMode);
  const statusBanner = publicationStatusBanner({
    status: attempt?.status,
    effectProviderMode:
      attempt?.plan != null ? attempt.plan.effectProviderMode : providerMode,
  });
  const dispatchMode =
    attempt?.plan != null ? attempt.plan.effectProviderMode : providerMode;

  return (
    <section className="space-y-4" data-testid="publication-inspection">
      <header className="space-y-1">
        <div className="flex items-center gap-2 flex-wrap">
          <h2 className="text-xl font-semibold">Publication Git — inspection d&apos;une révision</h2>
          {attemptEffectMode === "SCRIPTED" ? (
            <span
              className="text-[10px] uppercase px-2 py-0.5 rounded border border-[var(--line)] muted"
              data-testid="badge-effect-provider"
            >
              SCRIPTED
            </span>
          ) : null}
          {attemptEffectMode === "REAL" ? (
            <span
              className="text-[10px] uppercase px-2 py-0.5 rounded border border-[var(--line)] muted"
              data-testid="badge-effect-provider"
            >
              REAL
            </span>
          ) : null}
          {attemptEffectMode === "UNKNOWN" && attempt ? (
            <span
              className="text-[10px] uppercase px-2 py-0.5 rounded border border-[var(--line)] muted"
              data-testid="badge-effect-provider"
            >
              UNKNOWN
            </span>
          ) : null}
        </div>
        <p className="text-sm muted">
          Le Pilote examine exactement ce qui serait publié avant toute opération externe. Le mode
          d&apos;effet affiché pour une tentative est celui figé à la préparation — distinct du
          statut OAuth CONNECTED et de la configuration live ({liveEffectMode}).
        </p>
      </header>

      <div
        className="rounded-xl border border-[var(--line)] p-4 text-sm text-amber-300"
        data-testid="publication-status-banner"
      >
        {statusBanner}
      </div>

      <div className="studio-card p-4 space-y-3">
        <h3 className="font-medium">Sources projet</h3>
        {sources.length ? (
          <ul className="text-sm space-y-1" data-testid="project-git-sources">
            {sources.map((s) => (
              <li key={s.linkId} className="mono muted">
                {s.fullName}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm muted">Aucune source rattachée.</p>
        )}
        {unattached.length ? (
          <div className="flex flex-wrap gap-2">
            {unattached.map((r) => (
              <button
                key={r.id}
                type="button"
                className="studio-btn-secondary text-xs"
                disabled={busy}
                data-testid={`attach-repo-${r.id}`}
                onClick={() => void attachRepo(r.id)}
              >
                Rattacher {r.fullName}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="studio-card p-4 space-y-3">
          <h3 className="font-medium">Révision documentaire et cible</h3>
          <label className="block text-sm space-y-1">
            <span className="muted">Document AVAILABLE</span>
            <select
              className="w-full rounded-md border border-[var(--line)] bg-transparent px-2 py-1.5"
              value={documentId}
              onChange={(e) => setDocumentId(e.target.value)}
              data-testid="publication-document"
            >
              <option value="">—</option>
              {docs.map((d) => (
                <option key={d.document.id} value={d.document.id}>
                  {d.document.title} · rev {d.latestRevision?.revisionNumber ?? "?"} (
                  {d.latestRevision?.status ?? "?"})
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm space-y-1">
            <span className="muted">Dépôt rattaché</span>
            <select
              className="w-full rounded-md border border-[var(--line)] bg-transparent px-2 py-1.5"
              value={repositoryId}
              onChange={(e) => setRepositoryId(e.target.value)}
              data-testid="publication-repo"
            >
              <option value="">—</option>
              {sources.map((s) => (
                <option key={s.repositoryId} value={s.repositoryId}>
                  {s.fullName}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm space-y-1">
            <span className="muted">Chemin documentaire</span>
            <input
              className="w-full rounded-md border border-[var(--line)] bg-transparent px-2 py-1.5 mono"
              value={targetPath}
              onChange={(e) => setTargetPath(e.target.value)}
              data-testid="publication-path"
            />
          </label>
          <label className="block text-sm space-y-1">
            <span className="muted">Branche de base</span>
            <input
              className="w-full rounded-md border border-[var(--line)] bg-transparent px-2 py-1.5 mono"
              value={targetBranch}
              onChange={(e) => setTargetBranch(e.target.value)}
              data-testid="publication-branch"
            />
          </label>
        </div>

        <div className="studio-card p-4 space-y-3">
          <h3 className="font-medium">Préconditions d&apos;autorité</h3>
          <dl className="text-sm grid grid-cols-[auto_1fr] gap-x-3 gap-y-2">
            <dt className="muted">Tentative</dt>
            <dd className="mono break-all" data-testid="publication-attempt-id">
              {attempt?.attemptId ?? "—"}
            </dd>
            <dt className="muted">Statut</dt>
            <dd data-testid="publication-attempt-status">{attempt?.status ?? "—"}</dd>
            <dt className="muted">Fournisseur d&apos;effet</dt>
            <dd data-testid="publication-effect-provider">{attemptEffectMode}</dd>
            <dt className="muted">Base SHA</dt>
            <dd className="mono break-all">{attempt?.plan?.baseSha ?? "—"}</dd>
            <dt className="muted">Acteur / install</dt>
            <dd className="mono break-all" data-testid="publication-actor">
              {attempt?.plan?.actorLogin ?? "—"} / {attempt?.plan?.installationId ?? "—"}
            </dd>
            <dt className="muted">Diff kind</dt>
            <dd data-testid="publication-diff-kind">{inspection?.kind ?? "—"}</dd>
            <dt className="muted">Inspection FP</dt>
            <dd className="mono break-all text-xs" data-testid="publication-inspection-fp">
              {inspection?.inspectionFingerprint ?? "—"}
            </dd>
            <dt className="muted">PR observée</dt>
            <dd data-testid="publication-pr-number">{attempt?.prNumber ?? "—"}</dd>
            <dt className="muted">Mandat D6</dt>
            <dd className="mono break-all">{attempt?.decisionId ?? "non accordé"}</dd>
            <dt className="muted">Merge</dt>
            <dd data-testid="merge-attempt-status">
              {mergeAttempt
                ? `${mergeAttempt.status}${mergeAttempt.decisionId ? " · mandat distinct" : ""}`
                : "non préparé — mandat distinct requis"}
            </dd>
          </dl>
        </div>
      </div>

      {inspection ? (
        <div className="studio-card p-4 space-y-2" data-testid="publication-diff-panel">
          <h3 className="font-medium">Diff inspectable (serveur)</h3>
          <p className="text-xs muted">
            Empreinte liée au mandat D6 — toute modification du contenu ou de la base exige une
            requalification.
          </p>
          <pre
            className="text-xs mono overflow-auto max-h-80 rounded-md border border-[var(--line)] p-3 bg-[color-mix(in_oklab,var(--panel)_80%,black)]"
            data-testid="publication-unified-diff"
            tabIndex={0}
          >
            {inspection.unifiedDiff}
          </pre>
        </div>
      ) : null}

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="studio-btn"
          disabled={busy || !repositoryId || !documentId}
          onClick={() => void prepare()}
          data-testid="publication-prepare"
        >
          Préparer l&apos;inspection
        </button>
        <button
          type="button"
          className="studio-btn"
          disabled={busy || attempt?.status !== "PREPARED" || !inspection}
          onClick={() => void authorize()}
          data-testid="publication-authorize"
        >
          Autoriser la publication
        </button>
        <button
          type="button"
          className="studio-btn-secondary"
          disabled={busy || attempt?.status !== "AUTHORIZED"}
          onClick={() => void dispatch()}
          data-testid="publication-dispatch"
        >
          {dispatchButtonLabel(dispatchMode)}
        </button>
        <button
          type="button"
          className="studio-btn-secondary"
          disabled={busy || !attempt?.prNumber}
          onClick={() => void prepareMerge()}
          data-testid="merge-prepare"
        >
          Préparer merge (distinct)
        </button>
        <button
          type="button"
          className="studio-btn"
          disabled={busy || mergeAttempt?.status !== "PREPARED"}
          onClick={() => void authorizeMerge()}
          data-testid="merge-authorize"
        >
          Autoriser le merge
        </button>
        <button
          type="button"
          className="studio-btn-secondary"
          disabled={busy || mergeAttempt?.status !== "AUTHORIZED"}
          onClick={() => void dispatchMerge()}
          data-testid="merge-dispatch"
        >
          {mergeDispatchButtonLabel(dispatchMode)}
        </button>
      </div>

      {error ? (
        <p className="text-sm text-amber-400" data-testid="publication-error" role="alert">
          {error}
        </p>
      ) : null}
    </section>
  );
}
