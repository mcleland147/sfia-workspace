# SFIA Review Pack FULL — Ensemble 08 Corrective Cycle

## REGULARIZATION §7.2 — COMPLETE CONTENT (corrective republish)

- date: 2026-11-21T18:53:31+01:00
- cycle: 8 — Delivery projet / Correctif intégré CRITICAL
- programme: SFIA Studio Next / Ensemble 08
- branche: feat/next-ensemble08-git-publications-nora
- HEAD: a12f89a15c454319c06f49fcc5e8effa9f3f1a75
- origin_main: a12f89a15c454319c06f49fcc5e8effa9f3f1a75
- prior_handoff: 74528b81326b77527b16feacdf8b1538e3ba1f93
- review pack verdict: **complete**
- NO RELEASE · Gate C OPEN · no project push

## Git Truth

- remote: origin https://github.com/mcleland147/sfia-workspace.git
- HEAD == origin/main (a12f89a15c45)
- E08 uncommitted work preserved then extended by corrective
- handoff branch: sfia/review-handoff (L3 only)

## Corrections P0/P1

| ID | Résultat |
|---|---|
| P0-01 branch hint du/de | FIXED + unit tests |
| P0-02 merge SHA = head | FIXED — merge_commit_sha only + AMBIGUOUS |
| P0-03 USER provenance | FIXED — assertPersistedUserPublicationAct |
| P1-01 stale async | FIXED — contextGenRef |
| P1-02 silent attach[0] | FIXED — explicit choice list |
| P1-03 truncation 200 | FIXED — AMBIGUOUS |
| P1-04 pubs veracity | FIXED — D8 historical labels |
| Nora refuse → no PREPARED | FIXED |
| admitConversationalMergeMandate | ADDED |
| multi-repo REAL allowlist | ADDED (GITHUB_APP_ALLOWED_REPOS) |

## Tests exécutés (correctif)

| Suite | Résultat |
|---|---|
| tsc --noEmit | PASS |
| unit vitest | **743/743 PASS** |
| mission-continuity-accept01.pg | **10/10 PASS** |
| git-collaboration.pg | **93/93 PASS** |
| Playwright ensemble08-git-surface | **2/2 PASS SCRIPTED** |
| npm run build | PASS |
| Figma G5 runtime measures | **NOT PROVEN** |
| GitHub REAL mutation | **NOT PROVEN** (no sandbox GO) |

## Fake / Real Qualification

- DETERMINISTIC PROVEN: P0/P1 guards, merge SHA mocks, allowlist, UI SCRIPTED, PG
- PLAYWRIGHT SCRIPTED PASS: ensemble08-git-surface
- PLAYWRIGHT DEV REAL READ: NOT RUN
- END-TO-END REAL MUTATION: NOT PROVEN
- Figma G5: NOT PROVEN (L2 metadata DONE)

## Gates Morris

- G1–G3: code/P0P1/L2 OK with reserves
- G4: Playwright SCRIPTED PASS ; G5 runtime NOT PROVEN
- G5 REAL: allowlist coded ; mutation NOT PROVEN
- G6: this pack + L3 handoff
- G7: independent ChatGPT review
- G8: sandbox GO then RECETTE — distinct decisions

## Verdict

**DELIVERY READY WITH RESERVES**

Reserves: G5 Figma runtime, REAL mutation, Nora E2E conversational full journey beyond surface, RECETTE.

## Instruction ChatGPT

Relire ce fichier sur `sfia/review-handoff` après publication L3 ; vérifier SHA distant, CREATE complets, diffs MODIFY, tests, Fake/Real, réserves, verdict.

## Binary evidence (PNG) — metadata only
- `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.01-empty-1093-9.png` · 65431 bytes · sha256 `fbfe88aef63c8a9c92c2f42eba93e36915e4a8917e4d77c402d0c630587d2bd9`
- `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.02-multi-1094-71.png` · 86129 bytes · sha256 `6e95e4788caf74d5653aa1e283c9d22acb02633ce6e0757dee2adf6fb06f7e8b`
- `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.03-explorer-1094-172.png` · 98082 bytes · sha256 `54a1c9e07b26492b51f4d81a15e0fbcd32227b33e82dc3aee1ba1c6b7aef50cf`
- `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.04-pubs-1094-310.png` · 91882 bytes · sha256 `c127e37cd3ca307fbd0ffbfc78a61566b296671c16216659f432bc4056c29a04`
- `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.05-enlarge-1094-422.png` · 85911 bytes · sha256 `96ab67efdf21be7d8cc3b4c509babf072130cd05d522820254b869f6310d124a`
- `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.06-connected-1095-339.png` · 67706 bytes · sha256 `278ad3f2a8ce6c497de57f5b56eb3c87fa68710ffdd111aad64aa22bbde7b067`
- `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.07-disconnect-1095-390.png` · 68810 bytes · sha256 `750ef7682743490279c0cd971ad63f777a2d735b7da46a403bcdccba1f78b2a7`
- `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.13-remove-1096-752.png` · 70113 bytes · sha256 `33dc54056f83506e38189a5449099da39cf7c5609f06267692de9e4306056caf`
- `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.14-unavailable-1096-841.png` · 70821 bytes · sha256 `edeb55ca34fb5e23dec7cfd0784052e07260eb202f6cbbd30dd3fe375d1e39ea`
- `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.15-compact-1098-791.png` · 69849 bytes · sha256 `c58365e9abe6f34c56e88b3d0366a7a016b8ddd8f3fd9237cc71868e6f75e6dd`
- `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/png/11.16-mobile-1098-841.png` · 29609 bytes · sha256 `b34f527a244603d42ea59158df9235f036a01bba97c41b900492efcf65b58910`

## CREATE `projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx`

```
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SafeMarkdown } from "@/components/SafeMarkdown";

type GitSource = {
  linkId: string;
  repositoryId: string;
  fullName: string;
  defaultBranch: string | null;
  attachedAt: string;
};

type AvailableRepo = {
  id: string;
  fullName: string;
  defaultBranch: string | null;
};

type TreeEntry = {
  name: string;
  path: string;
  type: "file" | "dir";
  sha: string;
  size?: number;
};

type FileView = {
  path: string;
  ref: string;
  commitSha: string | null;
  commitShaVerified: boolean;
  blobSha: string;
  content: string;
  permalink: string | null;
};

type PublicationRow = {
  publicationRefId: string;
  documentId: string;
  revisionId: string;
  repositoryId: string;
  repositoryFullName: string;
  targetPath: string;
  targetBranch: string;
  publicationBranch: string | null;
  headSha: string | null;
  prNumber: number | null;
  publicationStatus: string;
  openPullRequest: boolean;
  mergeObserved: boolean;
  commitObserved: boolean;
  pullRequestCreatedObserved?: boolean;
  limits?: string[];
  updatedAt: string;
};

type TabId = "files" | "publications" | "manage";
type IntegrationStatus = {
  status: string;
  providerMode?: string;
  repositories?: AvailableRepo[];
};

type Props = {
  projectId: string;
  projectName?: string | null;
};

function basename(path: string): string {
  const parts = path.replace(/\/+$/, "").split("/");
  return parts[parts.length - 1] || path;
}

export function GitRepositoriesSurface({ projectId, projectName }: Props) {
  const [sources, setSources] = useState<GitSource[]>([]);
  const [available, setAvailable] = useState<AvailableRepo[]>([]);
  const [integrationStatus, setIntegrationStatus] = useState<string>("UNKNOWN");
  const [repositoryId, setRepositoryId] = useState("");
  const [branch, setBranch] = useState("");
  const [refs, setRefs] = useState<Array<{ name: string; sha: string }>>([]);
  const [tab, setTab] = useState<TabId>("files");
  const [treePath, setTreePath] = useState("");
  const [entries, setEntries] = useState<TreeEntry[]>([]);
  const [expandedDirs, setExpandedDirs] = useState<Record<string, TreeEntry[]>>({});
  const [file, setFile] = useState<FileView | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [infoOpen, setInfoOpen] = useState(false);
  const [enlarged, setEnlarged] = useState(false);
  const [publications, setPublications] = useState<PublicationRow[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmDetach, setConfirmDetach] = useState<GitSource | null>(null);
  const [branchOpen, setBranchOpen] = useState(false);
  /** P1-01 — ignore async results from a prior repo/branch context. */
  const contextGenRef = useRef(0);

  const active = useMemo(
    () => sources.find((s) => s.repositoryId === repositoryId) ?? null,
    [sources, repositoryId],
  );

  useEffect(() => {
    contextGenRef.current += 1;
    setEntries([]);
    setExpandedDirs({});
    setFile(null);
    setFileError(null);
    setError(null);
  }, [repositoryId, branch]);

  const loadSources = useCallback(async () => {
    const [srcRes, integRes] = await Promise.all([
      fetch(`/api/projects/${projectId}/git/sources`),
      fetch("/api/integrations/status"),
    ]);
    if (srcRes.ok) {
      const j = (await srcRes.json()) as { sources?: GitSource[] };
      const list = j.sources ?? [];
      setSources(list);
      setRepositoryId((prev) => {
        if (prev && list.some((s) => s.repositoryId === prev)) return prev;
        const first = list[0];
        if (first?.defaultBranch) setBranch(first.defaultBranch);
        return first?.repositoryId ?? "";
      });
    }
    if (integRes.ok) {
      const j = (await integRes.json()) as IntegrationStatus;
      setIntegrationStatus(j.status);
      setAvailable(j.repositories ?? []);
    }
  }, [projectId]);

  const loadRefs = useCallback(async () => {
    if (!repositoryId) {
      setRefs([]);
      return;
    }
    const res = await fetch(
      `/api/projects/${projectId}/git/refs?repositoryId=${encodeURIComponent(repositoryId)}`,
    );
    if (!res.ok) {
      setRefs([]);
      return;
    }
    const j = (await res.json()) as { refs?: Array<{ name: string; sha: string }> };
    setRefs(j.refs ?? []);
  }, [projectId, repositoryId]);

  const loadTree = useCallback(
    async (path: string) => {
      if (!repositoryId || !branch) {
        setEntries([]);
        return;
      }
      const gen = contextGenRef.current;
      const repoAtStart = repositoryId;
      const branchAtStart = branch;
      setBusy(true);
      setError(null);
      try {
        const q = new URLSearchParams({
          repositoryId,
          ref: branch,
          path,
        });
        const res = await fetch(`/api/projects/${projectId}/git/tree?${q}`);
        const j = await res.json().catch(() => ({}));
        if (
          gen !== contextGenRef.current ||
          repoAtStart !== repositoryId ||
          branchAtStart !== branch
        ) {
          return;
        }
        if (!res.ok) {
          setError(j.message ?? j.error ?? "Arborescence indisponible");
          setEntries([]);
          return;
        }
        setTreePath(path);
        setEntries((j.entries ?? []) as TreeEntry[]);
      } finally {
        if (gen === contextGenRef.current) setBusy(false);
      }
    },
    [projectId, repositoryId, branch],
  );

  const loadPublications = useCallback(async () => {
    const res = await fetch(`/api/projects/${projectId}/git/publications`);
    if (!res.ok) {
      setPublications([]);
      return;
    }
    const j = (await res.json()) as { publications?: PublicationRow[] };
    setPublications(j.publications ?? []);
  }, [projectId]);

  useEffect(() => {
    void loadSources();
  }, [loadSources]);

  useEffect(() => {
    void loadRefs();
  }, [loadRefs]);

  useEffect(() => {
    if (tab === "files" && repositoryId && branch) {
      setExpandedDirs({});
      setFile(null);
      setFileError(null);
      void loadTree("");
    }
  }, [tab, repositoryId, branch, loadTree]);

  useEffect(() => {
    if (tab === "publications") void loadPublications();
  }, [tab, loadPublications]);

  async function openFile(path: string) {
    if (!repositoryId || !branch) return;
    const gen = contextGenRef.current;
    const repoAtStart = repositoryId;
    const branchAtStart = branch;
    setBusy(true);
    setFileError(null);
    setInfoOpen(false);
    try {
      const q = new URLSearchParams({ repositoryId, path, ref: branch });
      const res = await fetch(`/api/projects/${projectId}/git/file?${q}`);
      const j = await res.json().catch(() => ({}));
      if (
        gen !== contextGenRef.current ||
        repoAtStart !== repositoryId ||
        branchAtStart !== branch
      ) {
        return;
      }
      if (!res.ok) {
        setFile(null);
        setFileError(j.message ?? j.error ?? "Lecture refusée");
        return;
      }
      const provenance = (j.provenance ?? {}) as {
        path?: string;
        requestedRef?: string;
        commitSha?: string | null;
        commitShaVerified?: boolean;
        blobSha?: string;
        permalink?: string | null;
      };
      setFile({
        path: provenance.path ?? path,
        ref: provenance.requestedRef ?? branch,
        commitSha: provenance.commitSha ?? null,
        commitShaVerified: Boolean(provenance.commitShaVerified),
        blobSha: provenance.blobSha ?? "",
        content: typeof j.content === "string" ? j.content : "",
        permalink: provenance.permalink ?? null,
      });
    } finally {
      if (gen === contextGenRef.current) setBusy(false);
    }
  }

  async function expandDir(entry: TreeEntry) {
    if (expandedDirs[entry.path]) {
      setExpandedDirs((prev) => {
        const next = { ...prev };
        delete next[entry.path];
        return next;
      });
      return;
    }
    const gen = contextGenRef.current;
    const repoAtStart = repositoryId;
    const branchAtStart = branch;
    const q = new URLSearchParams({
      repositoryId,
      ref: branch,
      path: entry.path,
    });
    const res = await fetch(`/api/projects/${projectId}/git/tree?${q}`);
    const j = await res.json().catch(() => ({}));
    if (
      gen !== contextGenRef.current ||
      repoAtStart !== repositoryId ||
      branchAtStart !== branch
    ) {
      return;
    }
    if (!res.ok) {
      setError(j.message ?? "Dossier indisponible");
      return;
    }
    setExpandedDirs((prev) => ({ ...prev, [entry.path]: (j.entries ?? []) as TreeEntry[] }));
  }

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
      await loadSources();
      // Stay on files after first attach so the explorer is usable immediately.
      setTab("files");
    } finally {
      setBusy(false);
    }
  }

  async function detachRepo(linkId: string) {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(`/api/projects/${projectId}/git/links/${encodeURIComponent(linkId)}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        setError(j.message ?? "Retrait refusé");
      }
      setConfirmDetach(null);
      await loadSources();
    } finally {
      setBusy(false);
    }
  }

  function selectRepo(id: string) {
    const src = sources.find((s) => s.repositoryId === id);
    setRepositoryId(id);
    if (src?.defaultBranch) setBranch(src.defaultBranch);
    setTab("files");
    setEnlarged(false);
  }

  const unattached = available.filter(
    (r) => !sources.some((s) => s.repositoryId === r.id),
  );
  const gitUnavailable =
    integrationStatus === "ACCESS_REMOVED" ||
    integrationStatus === "REVOKED" ||
    integrationStatus === "NOT_CONNECTED" ||
    integrationStatus === "DISCONNECTED";

  const treeRows = useMemo(() => {
    const rows: Array<{ entry: TreeEntry; depth: number }> = [];
    function walk(list: TreeEntry[], depth: number) {
      for (const entry of list) {
        rows.push({ entry, depth });
        if (entry.type === "dir" && expandedDirs[entry.path]) {
          walk(expandedDirs[entry.path], depth + 1);
        }
      }
    }
    walk(entries, 0);
    return rows;
  }, [entries, expandedDirs]);

  if (enlarged && file) {
    return (
      <div className="git-repos-surface" data-testid="git-surface" data-git-enlarged="1">
        <div className="git-enlarge-layout">
          <section className="git-enlarge-preview" data-testid="git-preview">
            <header className="git-preview-head">
              <div>
                <h2 className="git-preview-title">{basename(file.path)}</h2>
                <p className="git-preview-path">{file.path}</p>
              </div>
              <div className="git-preview-actions" data-testid="git-preview-actions">
                <button
                  type="button"
                  className="git-btn-secondary"
                  data-testid="git-action-infos"
                  onClick={() => setInfoOpen((v) => !v)}
                >
                  Infos
                </button>
                {file.permalink ? (
                  <a
                    className="git-btn-secondary"
                    href={file.permalink}
                    target="_blank"
                    rel="noreferrer"
                    data-testid="git-action-github"
                  >
                    Ouvrir sur GitHub
                  </a>
                ) : (
                  <span className="git-btn-secondary is-disabled">Ouvrir sur GitHub</span>
                )}
                <button
                  type="button"
                  className="git-btn-icon"
                  aria-label="Réduire la lecture"
                  data-testid="git-action-reduce"
                  onClick={() => setEnlarged(false)}
                >
                  <img src="/figma-git-icons/expand.svg" alt="" width={20} height={20} />
                </button>
              </div>
            </header>
            <p className="git-preview-kicker">DOCUMENT À RÉFÉRENCE IDENTIFIÉE · LECTURE SEULE</p>
            <div className="git-preview-body" data-testid="git-preview-body">
              {/\.md$/i.test(file.path) ? (
                <SafeMarkdown content={file.content} />
              ) : (
                <pre className="git-preview-pre">{file.content}</pre>
              )}
            </div>
          </section>
          <aside className="git-enlarge-details" data-testid="git-file-details">
            <h3>Détails</h3>
            <dl className="git-details-list">
              <div>
                <dt>Dépôt</dt>
                <dd>{active?.fullName ?? "—"}</dd>
              </div>
              <div>
                <dt>Branche</dt>
                <dd>{branch || "—"}</dd>
              </div>
              <div>
                <dt>Chemin</dt>
                <dd>{file.path}</dd>
              </div>
              <div>
                <dt>Commit SHA</dt>
                <dd className="git-mono">{file.commitShaVerified ? file.commitSha : "non vérifié"}</dd>
              </div>
              <div>
                <dt>Blob SHA</dt>
                <dd className="git-mono">{file.blobSha || "—"}</dd>
              </div>
            </dl>
            <p className="git-muted">
              Commit et blob sont des objets distincts. Aucune édition Git depuis cette surface.
            </p>
          </aside>
        </div>
      </div>
    );
  }

  return (
    <div className="git-repos-surface" data-testid="git-surface">
      <header className="e07-surface-hero" data-testid="git-hero">
        <p className="fig-kicker text-[#7477ed]" data-testid="git-hero-kicker">
          ESPACE PROJET / DÉPÔTS GIT
        </p>
        <h1 className="e07-surface-hero-title" data-testid="git-hero-title">
          {tab === "manage" ? "Gérer les dépôts du projet" : "Dépôts Git"}
        </h1>
        <p className="e07-surface-hero-sub" data-testid="git-hero-sub">
          {tab === "manage"
            ? "Chaque projet choisit ses dépôts ; plusieurs rattachements sont possibles."
            : "Parcourir un dépôt autorisé puis lire le fichier directement dans l’espace projet."}
        </p>
      </header>

      {error ? (
        <p className="git-error" role="alert" data-testid="git-error">
          {error}
        </p>
      ) : null}

      {gitUnavailable && sources.length === 0 ? (
        <section className="git-unavailable" data-testid="git-unavailable">
          <h2>Git indisponible</h2>
          <p>
            La connexion GitHub du Pilote n’est pas active. Studio et Nora restent utilisables ;
            les lectures et associations Git sont suspendues.
          </p>
          <a className="git-btn-primary" href="/settings/integrations">
            Ouvrir les intégrations
          </a>
        </section>
      ) : null}

      {sources.length === 0 && !gitUnavailable ? (
        <section className="git-empty-layout" data-testid="git-empty">
          <div className="git-empty-main">
            <h2>Aucun dépôt associé à ce projet</h2>
            <p>Git est facultatif. Tu peux continuer à travailler avec Nora sans dépôt.</p>
            <p className="git-muted">
              Choisis explicitement un dépôt autorisé — aucun rattachement silencieux.
            </p>
            {unattached.length === 0 ? (
              <button
                type="button"
                className="git-btn-primary"
                data-testid="git-empty-associate"
                disabled
              >
                Aucun dépôt autorisé disponible
              </button>
            ) : (
              <ul className="git-manage-list" data-testid="git-empty-repo-choices">
                {unattached.map((r) => (
                  <li key={r.id}>
                    <button
                      type="button"
                      className="git-btn-primary"
                      data-testid={`git-empty-attach-${r.id}`}
                      disabled={busy}
                      onClick={() => void attachRepo(r.id)}
                    >
                      Associer {r.fullName}
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <a className="git-btn-secondary" href="/settings/integrations">
              Gérer l’intégration GitHub
            </a>
          </div>
          <aside className="git-empty-side">
            <h3>Accès GitHub</h3>
            <p className="git-side-label">Connexion personnelle du Pilote</p>
            <p className="git-muted">
              La connexion GitHub ne rattache aucun dépôt automatiquement au projet.
            </p>
            <p className="git-side-label">Rattachements propres au projet</p>
            <p className="git-muted">
              Plusieurs dépôts peuvent être associés et retirés indépendamment.
            </p>
          </aside>
        </section>
      ) : null}

      {sources.length > 0 ? (
        <>
          {tab !== "manage" && active ? (
            <section className="git-repo-card" data-testid="git-repo-card">
              <div className="git-repo-card-row">
                <p className="git-repo-fullname">{active.fullName}</p>
                <span className="git-badge-ok">Accessible</span>
                <div className="git-branch-wrap">
                  <button
                    type="button"
                    className="git-branch-select"
                    data-testid="git-branch-select"
                    aria-haspopup="listbox"
                    aria-expanded={branchOpen}
                    onClick={() => setBranchOpen((v) => !v)}
                  >
                    <img src="/figma-git-icons/branch.svg" alt="" width={16} height={16} />
                    <span>{branch || active.defaultBranch || "—"}</span>
                    <img src="/figma-git-icons/chevron.svg" alt="" width={14} height={14} />
                  </button>
                  {branchOpen ? (
                    <ul className="git-branch-menu" role="listbox" data-testid="git-branch-menu">
                      {(refs.length ? refs : [{ name: branch || active.defaultBranch || "main", sha: "" }]).map(
                        (r) => (
                          <li key={r.name}>
                            <button
                              type="button"
                              role="option"
                              aria-selected={r.name === branch}
                              onClick={() => {
                                setBranch(r.name);
                                setBranchOpen(false);
                              }}
                            >
                              {r.name}
                            </button>
                          </li>
                        ),
                      )}
                    </ul>
                  ) : null}
                </div>
              </div>
              <p className="git-muted">
                {projectName ? `${projectName} · ` : ""}
                {sources.length} dépôt{sources.length > 1 ? "s" : ""} associé
                {sources.length > 1 ? "s" : ""} · Vue en lecture seule (branche choisie)
              </p>
            </section>
          ) : null}

          <nav className="git-tabs" aria-label="Navigation Dépôts Git">
            <button
              type="button"
              className={tab === "files" ? "is-active" : ""}
              data-testid="git-tab-files"
              onClick={() => setTab("files")}
            >
              Fichiers du dépôt
            </button>
            <button
              type="button"
              className={tab === "publications" ? "is-active" : ""}
              data-testid="git-tab-publications"
              onClick={() => setTab("publications")}
            >
              Publications Studio
            </button>
            <button
              type="button"
              className={tab === "manage" ? "is-active" : ""}
              data-testid="git-manage-repos"
              onClick={() => setTab("manage")}
            >
              Modifier le dépôt affiché
            </button>
          </nav>

          {tab === "files" ? (
            <div className="git-split-3070" data-testid="git-split">
              <section className="git-tree-panel" data-testid="git-tree">
                <h2>Arborescence</h2>
                <span className="git-badge-soft">Lecture seule</span>
                {treePath ? (
                  <button
                    type="button"
                    className="git-tree-up"
                    onClick={() => {
                      const parent = treePath.split("/").slice(0, -1).join("/");
                      void loadTree(parent);
                    }}
                  >
                    ← Remonter
                  </button>
                ) : null}
                <ul className="git-tree-list">
                  {treeRows.map(({ entry, depth }) => (
                    <li key={entry.path}>
                      <button
                        type="button"
                        className={
                          file?.path === entry.path ? "git-tree-row is-selected" : "git-tree-row"
                        }
                        style={{ paddingLeft: 12 + depth * 20 }}
                        data-testid={
                          entry.type === "dir" ? `git-tree-dir-${entry.name}` : `git-tree-file-${entry.name}`
                        }
                        onClick={() => {
                          if (entry.type === "dir") void expandDir(entry);
                          else void openFile(entry.path);
                        }}
                      >
                        <img
                          src={
                            entry.type === "dir"
                              ? "/figma-git-icons/folder.svg"
                              : "/figma-git-icons/file.svg"
                          }
                          alt=""
                          width={18}
                          height={18}
                        />
                        <span>{entry.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
                <p className="git-muted git-tree-note">
                  Dossiers chargés à la demande ; aucune copie locale.
                </p>
              </section>

              <section className="git-preview-panel" data-testid="git-preview">
                {fileError ? (
                  <p className="git-error" role="alert">
                    {fileError}
                  </p>
                ) : null}
                {file ? (
                  <>
                    <header className="git-preview-head">
                      <div>
                        <h2 className="git-preview-title" data-testid="git-preview-title">
                          {basename(file.path)}
                        </h2>
                        <p className="git-preview-path">{file.path}</p>
                      </div>
                      <div className="git-preview-actions" data-testid="git-preview-actions">
                        <button
                          type="button"
                          className="git-btn-secondary"
                          data-testid="git-action-infos"
                          onClick={() => setInfoOpen((v) => !v)}
                        >
                          Infos
                        </button>
                        {file.permalink ? (
                          <a
                            className="git-btn-secondary"
                            href={file.permalink}
                            target="_blank"
                            rel="noreferrer"
                            data-testid="git-action-github"
                          >
                            Ouvrir sur GitHub
                          </a>
                        ) : (
                          <span className="git-btn-secondary is-disabled">Ouvrir sur GitHub</span>
                        )}
                        <button
                          type="button"
                          className="git-btn-icon"
                          aria-label="Agrandir la lecture"
                          data-testid="git-action-enlarge"
                          onClick={() => setEnlarged(true)}
                        >
                          <img src="/figma-git-icons/expand.svg" alt="" width={20} height={20} />
                        </button>
                      </div>
                    </header>
                    {infoOpen ? (
                      <dl className="git-details-inline" data-testid="git-file-infos">
                        <div>
                          <dt>Commit</dt>
                          <dd className="git-mono">
                            {file.commitShaVerified ? file.commitSha : "non vérifié"}
                          </dd>
                        </div>
                        <div>
                          <dt>Blob</dt>
                          <dd className="git-mono">{file.blobSha}</dd>
                        </div>
                      </dl>
                    ) : null}
                    <p className="git-preview-kicker">
                      DOCUMENT À RÉFÉRENCE IDENTIFIÉE · LECTURE SEULE
                    </p>
                    <div className="git-preview-body" data-testid="git-preview-body">
                      {/\.md$/i.test(file.path) ? (
                        <SafeMarkdown content={file.content} />
                      ) : (
                        <pre className="git-preview-pre">{file.content}</pre>
                      )}
                    </div>
                  </>
                ) : (
                  <p className="git-muted">Sélectionne un fichier dans l’arborescence pour le lire.</p>
                )}
              </section>
            </div>
          ) : null}

          {tab === "publications" ? (
            <section className="git-pubs" data-testid="git-publications">
              <h2>Publications Studio</h2>
              <p className="git-muted">
                Projection D4/D7/D8 du projet — historique Studio, pas un état live GitHub
                non rafraîchi. Une PR créée n’est pas un merge.
              </p>
              {publications.length === 0 ? (
                <p data-testid="git-publications-empty">Aucune publication Studio pour ce projet.</p>
              ) : (
                <ul className="git-pubs-list">
                  {publications.map((p) => (
                    <li key={p.publicationRefId} data-testid="git-publication-row">
                      <p className="git-pubs-path">{p.targetPath}</p>
                      <p className="git-muted">
                        {p.repositoryFullName} · branche {p.publicationBranch ?? p.targetBranch}
                        {p.headSha ? ` · commit ${p.headSha.slice(0, 8)}` : ""}
                        {p.prNumber != null ? ` · PR #${p.prNumber}` : ""}
                      </p>
                      <p className="git-pubs-status">
                        {p.mergeObserved
                          ? "Merge observé (fait D8)"
                          : p.openPullRequest
                            ? "PR ouverte (statut D8 — non live GitHub)"
                            : p.pullRequestCreatedObserved
                              ? "PR créée (historique — ouverture live non affirmée)"
                              : p.commitObserved
                                ? "Commit observé (fait D8)"
                                : p.publicationStatus}
                      </p>
                      {p.limits && p.limits.length > 0 ? (
                        <p className="git-muted git-pubs-limits">{p.limits.join(" · ")}</p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ) : null}

          {tab === "manage" ? (
            <section className="git-manage" data-testid="git-manage">
              <div className="git-manage-main">
                <h2>Dépôts rattachés{projectName ? ` à ${projectName}` : ""}</h2>
                <ul className="git-manage-list">
                  {sources.map((s) => (
                    <li key={s.linkId} className="git-manage-item">
                      <div className="git-manage-item-head">
                        <p className="git-repo-fullname">{s.fullName}</p>
                        {s.repositoryId === repositoryId ? (
                          <span className="git-badge-soft">Affiché</span>
                        ) : null}
                      </div>
                      <p className="git-muted">
                        Dépôt autorisé · Branche par défaut : {s.defaultBranch ?? "—"}
                      </p>
                      <div className="git-manage-actions">
                        <button
                          type="button"
                          className="git-btn-secondary"
                          onClick={() => selectRepo(s.repositoryId)}
                        >
                          Consulter
                        </button>
                        <button
                          type="button"
                          className="git-btn-secondary"
                          data-testid={`git-detach-${s.linkId}`}
                          onClick={() => setConfirmDetach(s)}
                        >
                          Retirer du projet
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <h3>Ajouter une ressource</h3>
                <p className="git-muted">
                  La liste provient des dépôts autorisés dans l’intégration personnelle.
                </p>
                {unattached.length === 0 ? (
                  <p className="git-muted">Aucun dépôt autorisé supplémentaire à associer.</p>
                ) : (
                  <ul className="git-manage-list">
                    {unattached.map((r) => (
                      <li key={r.id}>
                        <button
                          type="button"
                          className="git-btn-primary"
                          disabled={busy}
                          onClick={() => void attachRepo(r.id)}
                        >
                          Associer {r.fullName}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <aside className="git-manage-side">
                <h3>Rattachement par projet</h3>
                <p className="git-side-label">Retirer une association</p>
                <p className="git-muted">
                  Ne supprime pas le dépôt sur GitHub ni les références historiques Studio.
                </p>
                <p className="git-side-label">Choisir le dépôt affiché</p>
                <p className="git-muted">
                  N’affecte pas les autres dépôts ni les autorisations de Nora.
                </p>
                <p className="git-side-label">Paramètres → Intégrations</p>
                <p className="git-muted">
                  La déconnexion personnelle coupe les nouvelles lectures Git ; ce n’est pas une
                  révocation complète côté GitHub.
                </p>
              </aside>
            </section>
          ) : null}
        </>
      ) : null}

      {confirmDetach ? (
        <div className="git-modal-backdrop" role="presentation">
          <div
            className="git-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="git-detach-title"
            data-testid="git-detach-confirm"
          >
            <h2 id="git-detach-title">Retirer l’association ?</h2>
            <p>
              Retirer <strong>{confirmDetach.fullName}</strong> de ce projet. Le dépôt distant et
              les faits historiques Studio sont conservés.
            </p>
            <div className="git-manage-actions">
              <button
                type="button"
                className="git-btn-primary"
                data-testid="git-detach-confirm-yes"
                disabled={busy}
                onClick={() => void detachRepo(confirmDetach.linkId)}
              >
                Confirmer le retrait
              </button>
              <button
                type="button"
                className="git-btn-secondary"
                data-testid="git-detach-confirm-no"
                onClick={() => setConfirmDetach(null)}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

```

## CREATE `projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-authority.ts`

```
/**
 * E08 Capacité B — bridge from a persisted USER message to authorizePublication (D6/D7).
 * Never treats Nora qualification as HumanDecision; never bypasses effect-service gates.
 */
import { and, eq } from "drizzle-orm";
import { createHash } from "node:crypto";
import { db } from "@/db/client";
import {
  conversationTurnCommands,
  conversations,
  effectAttempts,
  messages,
} from "@/db/schema";
import {
  authorizePublication,
  inspectionAllowsAuthorization,
} from "@/domains/execution/effect-service";
import type { PublicationPlan } from "@/domains/execution/types";
import { StudioError } from "@/lib/http-errors";
import { emitObs } from "@/lib/observability";
import {
  assertPublicationMandateCoversPlan,
  PUBLISH_VERB_RE,
  userStatementRefusesPublication,
  userStatementRequestsMergeOnly,
} from "./conversation-publication-mandate-guards";
import {
  attemptIsNoraMission,
  missionCorrelationKeys,
  NORA_MISSION_PUB_PREFIX,
  resumeMissionAfterPublicationAuthorize,
} from "./mission-continuity";

function normalizeActText(s: string): string {
  return s.normalize("NFKC").trim().replace(/\s+/g, " ");
}

function actFingerprint(s: string): string {
  return createHash("sha256").update(normalizeActText(s), "utf8").digest("hex");
}

/**
 * P0-03 — Server-side proof that userMessageId is a durable USER act for this
 * pilot/project/turn — not a forged id in JSON alone.
 */
export async function assertPersistedUserPublicationAct(input: {
  pilotId: string;
  projectId: string;
  userMessageId: string;
  userStatement: string;
  clientTurnKey?: string | null;
}): Promise<{ ok: true; conversationId: string; contentFingerprint: string } | { ok: false; reasonCode: string; reason: string }> {
  const msgId = input.userMessageId.trim();
  if (!msgId) {
    return { ok: false, reasonCode: "MISSING_USER_ACT", reason: "Acte USER durable requis" };
  }

  const row = (
    await db
      .select({
        messageId: messages.id,
        role: messages.role,
        content: messages.content,
        status: messages.status,
        conversationId: messages.conversationId,
        ownerPilotId: conversations.ownerPilotId,
        projectId: conversations.projectId,
      })
      .from(messages)
      .innerJoin(conversations, eq(messages.conversationId, conversations.id))
      .where(eq(messages.id, msgId))
      .limit(1)
  )[0];

  if (!row) {
    return { ok: false, reasonCode: "USER_MESSAGE_NOT_FOUND", reason: "Message USER introuvable" };
  }
  if (row.role.trim().toLowerCase() !== "user") {
    return {
      ok: false,
      reasonCode: "NOT_USER_ROLE",
      reason: "Le message source n'est pas un acte USER",
    };
  }
  if (row.status !== "COMPLETE") {
    return {
      ok: false,
      reasonCode: "USER_MESSAGE_INCOMPLETE",
      reason: `Statut message incompatible: ${row.status}`,
    };
  }
  if (row.ownerPilotId !== input.pilotId) {
    return {
      ok: false,
      reasonCode: "PILOT_MISMATCH",
      reason: "Message USER hors identité Pilote attendue",
    };
  }
  if ((row.projectId ?? "") !== input.projectId) {
    return {
      ok: false,
      reasonCode: "PROJECT_MISMATCH",
      reason: "Message USER hors projet de la tentative",
    };
  }

  const statement = normalizeActText(input.userStatement).slice(0, 500);
  const persisted = normalizeActText(row.content);
  if (!persisted) {
    return { ok: false, reasonCode: "EMPTY_USER_CONTENT", reason: "Contenu USER vide" };
  }
  // Admit truncates to 500 — statement must match that prefix of the persisted USER act.
  const persistedPrefix = persisted.slice(0, 500);
  if (statement !== persistedPrefix && !persisted.startsWith(statement)) {
    return {
      ok: false,
      reasonCode: "STATEMENT_MISMATCH",
      reason: "Énoncé du mandat non concordant avec le message USER persisté",
    };
  }

  const turnKey = input.clientTurnKey?.trim() || null;
  if (turnKey) {
    const turn = (
      await db
        .select({
          userMessageId: conversationTurnCommands.userMessageId,
          ownerPilotId: conversationTurnCommands.ownerPilotId,
          conversationId: conversationTurnCommands.conversationId,
        })
        .from(conversationTurnCommands)
        .where(
          and(
            eq(conversationTurnCommands.conversationId, row.conversationId),
            eq(conversationTurnCommands.clientTurnKey, turnKey),
          ),
        )
        .limit(1)
    )[0];
    if (!turn || turn.userMessageId !== msgId || turn.ownerPilotId !== input.pilotId) {
      return {
        ok: false,
        reasonCode: "TURN_MISMATCH",
        reason: "Tour conversationnel non aligné sur le message USER",
      };
    }
  }

  return {
    ok: true,
    conversationId: row.conversationId,
    contentFingerprint: actFingerprint(persisted),
  };
}

export type ConversationalPublicationMandateOutcome = {
  attempted: boolean;
  admitted: boolean;
  authorized: boolean;
  humanDecisionCreated: boolean;
  decisionId: string | null;
  reasonCode?: string;
  reason?: string;
  missionResume?: Awaited<ReturnType<typeof resumeMissionAfterPublicationAuthorize>> | null;
};

export {
  assertPublicationMandateCoversPlan,
  userStatementRefusesPublication,
  userStatementRequestsMergeOnly,
} from "./conversation-publication-mandate-guards";

function emptyOutcome(
  partial?: Partial<ConversationalPublicationMandateOutcome>,
): ConversationalPublicationMandateOutcome {
  return {
    attempted: false,
    admitted: false,
    authorized: false,
    humanDecisionCreated: false,
    decisionId: null,
    ...partial,
  };
}

/**
 * Admit an explicit USER publication mandate on the exact PREPARED plan, then authorize.
 * Caller must pass the durable USER message id and statement (not Nora replyDraft).
 */
export async function admitConversationalPublicationMandate(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
  userMessageId: string;
  userStatement: string;
  clientTurnKey?: string | null;
  qualifiedPath?: string | null;
  qualifiedBranch?: string | null;
  wantsPublishFromQual: boolean;
  autoResumeMission?: boolean;
}): Promise<ConversationalPublicationMandateOutcome> {
  const statement = input.userStatement.trim().slice(0, 500);
  if (!input.userMessageId?.trim() || !statement) {
    return emptyOutcome({ reasonCode: "MISSING_USER_ACT", reason: "Acte USER durable requis" });
  }

  const provenance = await assertPersistedUserPublicationAct({
    pilotId: input.pilotId,
    projectId: input.projectId,
    userMessageId: input.userMessageId,
    userStatement: statement,
    clientTurnKey: input.clientTurnKey ?? null,
  });
  if (!provenance.ok) {
    return emptyOutcome({ reasonCode: provenance.reasonCode, reason: provenance.reason });
  }

  const row = (
    await db
      .select()
      .from(effectAttempts)
      .where(
        and(
          eq(effectAttempts.id, input.attemptId),
          eq(effectAttempts.projectId, input.projectId),
          eq(effectAttempts.pilotId, input.pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!row) {
    return emptyOutcome({ reasonCode: "NOT_FOUND", reason: "Tentative introuvable" });
  }
  if (row.kind !== "GIT_PUBLICATION") {
    return emptyOutcome({ reasonCode: "WRONG_KIND", reason: "Tentative non publication" });
  }

  const conversationalMission =
    attemptIsNoraMission(row) ||
    (input.clientTurnKey?.trim()
      ? row.correlationKey === missionCorrelationKeys(input.clientTurnKey.trim()).publication
      : false);
  if (!conversationalMission) {
    return emptyOutcome({
      reasonCode: "NOT_CONVERSATIONAL",
      reason: "Tentative hors corrélation mission Nora — autorisation panel requise",
    });
  }

  if (
    input.clientTurnKey?.trim() &&
    row.correlationKey !== `${NORA_MISSION_PUB_PREFIX}${input.clientTurnKey.trim()}`
  ) {
    return emptyOutcome({
      reasonCode: "CORRELATION_MISMATCH",
      reason: "Clé de corrélation mission non alignée au tour USER",
    });
  }

  if (row.status === "AUTHORIZED" || row.status === "DISPATCHED" || row.status === "COMPLETED") {
    const idempotent = Boolean(row.decisionId);
    return {
      attempted: true,
      admitted: idempotent,
      authorized: idempotent,
      humanDecisionCreated: idempotent,
      decisionId: row.decisionId ?? null,
      reasonCode: idempotent ? "ALREADY_AUTHORIZED" : undefined,
    };
  }
  if (row.status !== "PREPARED") {
    return emptyOutcome({
      attempted: true,
      reasonCode: "CONFLICT",
      reason: `Statut incompatible: ${row.status}`,
    });
  }

  if (!input.wantsPublishFromQual) {
    return emptyOutcome({
      attempted: true,
      reasonCode: "NO_PUBLISH_QUAL",
      reason: "Qualification durable sans intention publication explicite",
    });
  }
  if (userStatementRefusesPublication(statement)) {
    return emptyOutcome({
      attempted: true,
      reasonCode: "REFUSED",
      reason: "Formulation USER refuse la publication — aucun mandat",
    });
  }
  if (userStatementRequestsMergeOnly(statement)) {
    return emptyOutcome({
      attempted: true,
      reasonCode: "MERGE_ONLY",
      reason: "Intention merge seule — mandat publication non admis (merge séparé)",
    });
  }
  if (!PUBLISH_VERB_RE.test(statement) && !input.qualifiedPath?.trim()) {
    return emptyOutcome({
      attempted: true,
      reasonCode: "AMBIGUOUS",
      reason: "Demande de publication non explicite dans le message USER",
    });
  }

  let plan: PublicationPlan;
  try {
    plan = JSON.parse(row.planJson) as PublicationPlan;
  } catch {
    return emptyOutcome({
      attempted: true,
      reasonCode: "INVALID_PLAN",
      reason: "Plan publication illisible",
    });
  }

  if (!inspectionAllowsAuthorization(plan.inspection.kind)) {
    return emptyOutcome({
      attempted: true,
      reasonCode: "REQUIRES_REQUALIFICATION",
      reason: `Inspection non autorisable: ${plan.inspection.kind}`,
    });
  }

  const scope = assertPublicationMandateCoversPlan({
    userStatement: statement,
    qualifiedPath: input.qualifiedPath ?? null,
    qualifiedBranch: input.qualifiedBranch ?? null,
    plan,
  });
  if (!scope.ok) {
    return emptyOutcome({
      attempted: true,
      reasonCode: scope.reasonCode,
      reason: scope.reason,
    });
  }

  try {
    const auth = await authorizePublication({
      pilotId: input.pilotId,
      projectId: input.projectId,
      attemptId: input.attemptId,
      statement,
      inspectedFingerprint: plan.inspection.inspectionFingerprint,
      sourceMessageId: input.userMessageId,
      clientTurnKey: input.clientTurnKey ?? null,
    });

    emitObs({
      event_name: "d6.conversational_publication_mandate",
      component: "d6.conversation_publication_authority",
      outcome: "SUCCESS",
      meta: {
        attempt_id: input.attemptId,
        decision_id: auth.decisionId,
        user_message_id: input.userMessageId,
        idempotent: "idempotent" in auth ? Boolean(auth.idempotent) : false,
      },
    });

    let missionResume: Awaited<ReturnType<typeof resumeMissionAfterPublicationAuthorize>> | null =
      null;
    if (input.autoResumeMission !== false && auth.status === "AUTHORIZED") {
      missionResume = await resumeMissionAfterPublicationAuthorize({
        pilotId: input.pilotId,
        projectId: input.projectId,
        attemptId: input.attemptId,
        decisionId: auth.decisionId,
      });
    }

    const created =
      Boolean(auth.decisionId) &&
      !("idempotent" in auth && auth.idempotent && row.decisionId === auth.decisionId);

    return {
      attempted: true,
      admitted: true,
      authorized: true,
      humanDecisionCreated: Boolean(auth.decisionId),
      decisionId: auth.decisionId ?? null,
      missionResume,
      reasonCode: "idempotent" in auth && auth.idempotent ? "ALREADY_AUTHORIZED" : undefined,
      reason: created ? undefined : "Mandat déjà enregistré",
    };
  } catch (e) {
    const code = e instanceof StudioError ? e.code : "AUTHORIZE_FAILED";
    const message = e instanceof StudioError ? e.message : "authorizePublication échoué";
    emitObs({
      event_name: "d6.conversational_publication_mandate",
      component: "d6.conversation_publication_authority",
      outcome: "FAILED",
      error_category: code,
      meta: { attempt_id: input.attemptId, user_message_id: input.userMessageId },
    });
    return emptyOutcome({
      attempted: true,
      reasonCode: code,
      reason: message,
    });
  }
}
```

## CREATE `projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-mandate-guards.ts`

```
/**
 * Pure guards for E08 conversational publication mandate admission (no I/O).
 * Deterministic checks verify values/ids — they do not route métier intent.
 */
import type { PublicationPlan } from "@/domains/execution/types";

const PATH_RE =
  /(?:(?:chemin|path|fichier)\s*[:=]?\s*|sous\s+)[`"]?([A-Za-z0-9_./\-]+\.(?:md|markdown|txt))[`"]?/i;

/** Natural-language tokens that must never become a Git branch reference. */
const BRANCH_STOPWORDS = new Set(
  [
    "du",
    "de",
    "des",
    "le",
    "la",
    "les",
    "un",
    "une",
    "mon",
    "ma",
    "mes",
    "ton",
    "ta",
    "tes",
    "son",
    "sa",
    "ses",
    "notre",
    "nos",
    "votre",
    "vos",
    "leur",
    "leurs",
    "ce",
    "cet",
    "cette",
    "ces",
    "repo",
    "repos",
    "dépôt",
    "depot",
    "dépôts",
    "depots",
    "github",
    "git",
    "projet",
    "project",
    "candidat",
    "candidate",
    "active",
    "actuelle",
    "actuel",
    "courante",
    "courant",
    "nouvelle",
    "nouveau",
    "dédiée",
    "dediee",
    "dédié",
    "dedie",
    "the",
    "a",
    "an",
    "my",
    "our",
  ].map((s) => s.toLowerCase()),
);

/** Intent to create/use a new branch without naming it — not a technical ref. */
const NEW_BRANCH_INTENT_RE =
  /\b(?:une?\s+)?nouvelle\s+branche\b|\bbranche\s+dédi[ée]e?\b|\bnew\s+branch\b|\bdedicated\s+branch\b/i;

/**
 * Capture after branche|branch only for validation of an explicit technical name.
 * Never used as a métier router.
 */
const EXPLICIT_BRANCH_CAPTURE_RE =
  /(?:branche|branch)\s*[:=]?\s*[`"']?([A-Za-z0-9][A-Za-z0-9._/\-]*)[`"']?/gi;

function extractPublicationPathHint(userText: string): string | null {
  return userText.match(PATH_RE)?.[1] ?? null;
}

/** True when the token looks like an explicit Git ref name, not French prose. */
export function looksLikeTechnicalBranchName(token: string): boolean {
  const t = token.trim();
  if (!t || t.length > 200) return false;
  if (BRANCH_STOPWORDS.has(t.toLowerCase())) return false;
  if (!/^[A-Za-z0-9][A-Za-z0-9._/\-]*$/.test(t)) return false;
  if (t.includes("/")) return true;
  if (/^(main|master|develop|dev|trunk|head)$/i.test(t)) return true;
  if (/^(feat|fix|chore|docs|hotfix|release|studio)([.\-_].+)?$/i.test(t)) return true;
  // Bare alphanumeric without slash/prefix is ambiguous natural language — reject.
  return false;
}

/** All explicit technical branch names found in USER text (deduped). */
export function extractAllPublicationBranchHints(userText: string): string[] {
  const text = userText.normalize("NFKC");
  const candidates: string[] = [];
  for (const m of text.matchAll(EXPLICIT_BRANCH_CAPTURE_RE)) {
    const raw = m[1];
    if (raw && looksLikeTechnicalBranchName(raw)) candidates.push(raw);
  }
  return [...new Set(candidates)];
}

/**
 * Extract a single explicit technical branch name from USER text.
 * Returns null for new-branch intent without a name, natural-language
 * "branche de/du …" phrases, or contradictory names (P0-01).
 */
export function extractPublicationBranchHint(userText: string): string | null {
  const unique = extractAllPublicationBranchHints(userText);
  if (unique.length === 1) return unique[0] ?? null;
  return null;
}

/** True when USER asks for a new/dedicated branch without naming it. */
export function userStatementRequestsUnnamedNewBranch(userStatement: string): boolean {
  const t = userStatement.normalize("NFKC");
  if (!NEW_BRANCH_INTENT_RE.test(t)) return false;
  return extractAllPublicationBranchHints(t).length === 0;
}

const PUBLISH_VERB_RE =
  /\b(?:publ(?:ie|ier|ication)|pousse(?:r)?\s+(?:vers|sur)\s+(?:git|github|le\s+dépôt))\b/i;

/** Fail closed on explicit refusal / cancellation in the USER utterance. */
export function userStatementRefusesPublication(userStatement: string): boolean {
  const t = userStatement.normalize("NFKC").trim();
  if (!t) return true;
  const patterns = [
    /\bne\s+(?:publie|publier)\s+pas\b/i,
    /\bsans\s+publier\b/i,
    /\bpas\s+de\s+publication\b/i,
    /\bn['']?(?:autorise|auto)\s+pas\b/i,
    /\bannul(?:e|er)\s+(?:la\s+)?publication\b/i,
    /\brefus(?:e|er)\s+(?:de\s+)?publier\b/i,
    /\b(?:hold|stop)\s+(?:la\s+)?publication\b/i,
  ];
  return patterns.some((re) => re.test(t));
}

/** Merge-only mandate must not authorize publication (publish ≠ merge). */
export function userStatementRequestsMergeOnly(userStatement: string): boolean {
  const t = userStatement.toLowerCase();
  const merge =
    /\b(?:merge|fusionner?|merger)\b/.test(t) ||
    /\bpr\b[^\n]{0,40}\bmerge\b/.test(t);
  const publish = PUBLISH_VERB_RE.test(userStatement);
  return merge && !publish;
}

export function assertPublicationMandateCoversPlan(input: {
  userStatement: string;
  qualifiedPath: string | null;
  qualifiedBranch: string | null;
  plan: PublicationPlan;
}):
  | { ok: true }
  | { ok: false; reason: string; reasonCode: string } {
  const norm = (p: string) => p.replace(/\\/g, "/").trim();
  const pathHints: string[] = [];
  if (input.qualifiedPath?.trim()) pathHints.push(norm(input.qualifiedPath));
  const fromText = extractPublicationPathHint(input.userStatement);
  if (fromText) pathHints.push(norm(fromText));
  const uniquePaths = [...new Set(pathHints.filter(Boolean))];
  if (uniquePaths.length > 1) {
    return {
      ok: false,
      reason: "Chemins de publication contradictoires dans le mandat — précision requise",
      reasonCode: "AMBIGUOUS_PATH",
    };
  }
  if (uniquePaths.length === 1 && uniquePaths[0] !== norm(input.plan.targetPath)) {
    return {
      ok: false,
      reason: "Chemin du mandat hors plan exécutable préparé",
      reasonCode: "PLAN_DRIFT",
    };
  }

  const branchHints: string[] = [];
  if (input.qualifiedBranch?.trim()) branchHints.push(input.qualifiedBranch.trim());
  for (const b of extractAllPublicationBranchHints(input.userStatement)) {
    branchHints.push(b.trim());
  }
  const uniqueBranches = [...new Set(branchHints.filter(Boolean))];
  if (uniqueBranches.length > 1) {
    return {
      ok: false,
      reason: "Branches contradictoires — précision requise",
      reasonCode: "AMBIGUOUS_BRANCH",
    };
  }
  if (uniqueBranches.length === 1) {
    const hint = uniqueBranches[0]!;
    // Explicit name may refer to targetBranch or publicationBranch (new branch).
    const allowed = new Set(
      [input.plan.targetBranch, input.plan.publicationBranch].filter(Boolean).map((b) => b.trim()),
    );
    if (!allowed.has(hint)) {
      return {
        ok: false,
        reason: "Branche du mandat hors plan exécutable préparé",
        reasonCode: "PLAN_DRIFT",
      };
    }
  }
  // Unnamed new-branch intent: no deterministic hint — do not invent PLAN_DRIFT.

  return { ok: true };
}

export { PUBLISH_VERB_RE };

```

## CREATE `projects/sfia-studio-next/web/src/domains/conversation/conversation-merge-authority.ts`

```
/**
 * E08 — conversational documentary merge mandate (distinct from publication D6).
 * Never treats Nora text as HumanDecision; never authorizes arbitrary external PRs.
 */
import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { documentPublicationRefs, effectAttempts } from "@/db/schema";
import {
  authorizeMerge,
  dispatchMerge,
  prepareMerge,
} from "@/domains/execution/effect-service";
import { StudioError } from "@/lib/http-errors";
import { emitObs } from "@/lib/observability";
import { assertPersistedUserPublicationAct } from "./conversation-publication-authority";
import {
  PUBLISH_VERB_RE,
  userStatementRefusesPublication,
  userStatementRequestsMergeOnly,
} from "./conversation-publication-mandate-guards";

export const NORA_MISSION_MERGE_PREFIX = "merge:mission:";

export type ConversationalMergeMandateOutcome = {
  attempted: boolean;
  admitted: boolean;
  authorized: boolean;
  humanDecisionCreated: boolean;
  decisionId: string | null;
  attemptId: string | null;
  dispatched?: boolean;
  dispatchStatus?: string;
  reasonCode?: string;
  reason?: string;
};

function emptyOutcome(
  partial?: Partial<ConversationalMergeMandateOutcome>,
): ConversationalMergeMandateOutcome {
  return {
    attempted: false,
    admitted: false,
    authorized: false,
    humanDecisionCreated: false,
    decisionId: null,
    attemptId: null,
    ...partial,
  };
}

/** Explicit USER merge intent — publish verb alone never authorizes merge. */
export function userStatementRequestsMerge(userStatement: string): boolean {
  const t = userStatement.normalize("NFKC");
  if (userStatementRefusesPublication(t) && !/\b(?:merge|fusionner?|merger)\b/i.test(t)) {
    return false;
  }
  return (
    /\b(?:merge|fusionner?|merger)\b/i.test(t) ||
    /\bfusionne\b/i.test(t) ||
    /\bpr\b[^\n]{0,40}\b(?:merge|fusion)/i.test(t)
  );
}

/**
 * Admit an explicit USER merge mandate for a documentary Studio publication PR.
 * Publication ≠ merge: a publish verb does not admit this path.
 */
export async function admitConversationalMergeMandate(input: {
  pilotId: string;
  projectId: string;
  userMessageId: string;
  userStatement: string;
  clientTurnKey?: string | null;
  publicationAttemptId?: string | null;
  wantsMergeFromQual: boolean;
  autoDispatch?: boolean;
}): Promise<ConversationalMergeMandateOutcome> {
  const statement = input.userStatement.trim().slice(0, 500);
  if (!input.userMessageId?.trim() || !statement) {
    return emptyOutcome({ reasonCode: "MISSING_USER_ACT", reason: "Acte USER durable requis" });
  }

  const provenance = await assertPersistedUserPublicationAct({
    pilotId: input.pilotId,
    projectId: input.projectId,
    userMessageId: input.userMessageId,
    userStatement: statement,
    clientTurnKey: input.clientTurnKey ?? null,
  });
  if (!provenance.ok) {
    return emptyOutcome({ reasonCode: provenance.reasonCode, reason: provenance.reason });
  }

  if (!input.wantsMergeFromQual && !userStatementRequestsMerge(statement)) {
    return emptyOutcome({
      attempted: true,
      reasonCode: "NO_MERGE_QUAL",
      reason: "Qualification sans intention merge explicite",
    });
  }
  if (PUBLISH_VERB_RE.test(statement) && !userStatementRequestsMerge(statement)) {
    return emptyOutcome({
      attempted: true,
      reasonCode: "PUBLISH_NOT_MERGE",
      reason: "Demande de publication — mandat merge distinct requis",
    });
  }
  if (!userStatementRequestsMerge(statement) && !userStatementRequestsMergeOnly(statement)) {
    return emptyOutcome({
      attempted: true,
      reasonCode: "AMBIGUOUS",
      reason: "Demande de merge non explicite dans le message USER",
    });
  }

  let publicationAttemptId = input.publicationAttemptId?.trim() || null;
  if (!publicationAttemptId) {
    const completed = (
      await db
        .select({ id: effectAttempts.id })
        .from(effectAttempts)
        .where(
          and(
            eq(effectAttempts.projectId, input.projectId),
            eq(effectAttempts.pilotId, input.pilotId),
            eq(effectAttempts.kind, "GIT_PUBLICATION"),
            eq(effectAttempts.status, "COMPLETED"),
          ),
        )
        .orderBy(desc(effectAttempts.updatedAt))
        .limit(2)
    );
    if (completed.length === 0) {
      return emptyOutcome({
        attempted: true,
        reasonCode: "NO_PUBLICATION",
        reason: "Aucune publication documentaire COMPLETED à fusionner",
      });
    }
    if (completed.length > 1 && !input.publicationAttemptId) {
      // Prefer the one with an open PR ref when unique; else ask clarification.
      const withPr = (
        await db
          .select({ effectAttemptId: documentPublicationRefs.effectAttemptId })
          .from(documentPublicationRefs)
          .where(
            and(
              eq(documentPublicationRefs.projectId, input.projectId),
              eq(documentPublicationRefs.pilotId, input.pilotId),
              eq(documentPublicationRefs.status, "PR_OPEN"),
            ),
          )
          .orderBy(desc(documentPublicationRefs.updatedAt))
          .limit(2)
      );
      if (withPr.length === 1 && withPr[0]?.effectAttemptId) {
        publicationAttemptId = withPr[0].effectAttemptId;
      } else {
        return emptyOutcome({
          attempted: true,
          reasonCode: "AMBIGUOUS_TARGET",
          reason: "Plusieurs publications candidates — préciser la PR ou la tentative",
        });
      }
    } else {
      publicationAttemptId = completed[0]!.id;
    }
  }

  const correlationKey = input.clientTurnKey?.trim()
    ? `${NORA_MISSION_MERGE_PREFIX}${input.clientTurnKey.trim()}`
    : `merge:conv:${publicationAttemptId}`;

  try {
    const prepared = await prepareMerge({
      pilotId: input.pilotId,
      projectId: input.projectId,
      publicationAttemptId,
      correlationKey,
    });

    if (prepared.status === "AUTHORIZED" || prepared.status === "DISPATCHED" || prepared.status === "COMPLETED") {
      return {
        attempted: true,
        admitted: true,
        authorized: true,
        humanDecisionCreated: true,
        decisionId: null,
        attemptId: prepared.attemptId,
        reasonCode: "ALREADY_AUTHORIZED",
      };
    }
    if (prepared.status !== "PREPARED") {
      return emptyOutcome({
        attempted: true,
        attemptId: prepared.attemptId,
        reasonCode: "CONFLICT",
        reason: `Statut merge incompatible: ${prepared.status}`,
      });
    }

    const auth = await authorizeMerge({
      pilotId: input.pilotId,
      projectId: input.projectId,
      attemptId: prepared.attemptId,
      statement,
    });

    emitObs({
      event_name: "d6.conversational_merge_mandate",
      component: "d6.conversation_merge_authority",
      outcome: "SUCCESS",
      meta: {
        attempt_id: prepared.attemptId,
        decision_id: auth.decisionId,
        user_message_id: input.userMessageId,
        publication_attempt_id: publicationAttemptId,
      },
    });

    let dispatched = false;
    let dispatchStatus: string | undefined;
    if (input.autoDispatch !== false && auth.status === "AUTHORIZED") {
      try {
        const dispatchedResult = await dispatchMerge({
          pilotId: input.pilotId,
          projectId: input.projectId,
          attemptId: prepared.attemptId,
        });
        dispatched = true;
        dispatchStatus = dispatchedResult.status;
      } catch (e) {
        const code = e instanceof StudioError ? e.code : "DISPATCH_FAILED";
        return {
          attempted: true,
          admitted: true,
          authorized: true,
          humanDecisionCreated: Boolean(auth.decisionId),
          decisionId: auth.decisionId ?? null,
          attemptId: prepared.attemptId,
          reasonCode: code,
          reason: e instanceof StudioError ? e.message : "dispatchMerge échoué",
        };
      }
    }

    return {
      attempted: true,
      admitted: true,
      authorized: true,
      humanDecisionCreated: Boolean(auth.decisionId),
      decisionId: auth.decisionId ?? null,
      attemptId: prepared.attemptId,
      dispatched,
      dispatchStatus,
    };
  } catch (e) {
    const code = e instanceof StudioError ? e.code : "MERGE_ADMIT_FAILED";
    const message = e instanceof StudioError ? e.message : "admit merge échoué";
    emitObs({
      event_name: "d6.conversational_merge_mandate",
      component: "d6.conversation_merge_authority",
      outcome: "FAILED",
      error_category: code,
      meta: { user_message_id: input.userMessageId },
    });
    return emptyOutcome({ attempted: true, reasonCode: code, reason: message });
  }
}

```

## CREATE `projects/sfia-studio-next/web/src/domains/integrations/publication-projection.ts`

```
import { qualifyObservedFacts, type PrCurrentState } from "@/domains/proofs/qualify";

export type ProjectPublicationListItem = {
  publicationRefId: string;
  documentId: string;
  revisionId: string;
  repositoryId: string;
  repositoryFullName: string;
  targetPath: string;
  targetBranch: string;
  publicationBranch: string | null;
  baseSha: string | null;
  headSha: string | null;
  prNumber: number | null;
  /** Persisted D8 status (PR_OPEN, PR_CLOSED, MERGED, COMMITTED, …). */
  publicationStatus: string;
  effectAttemptId: string | null;
  effectKind: string | null;
  effectStatus: string | null;
  prCurrentState: PrCurrentState | null;
  /** Historical PR_OPEN fact only — not live openness. */
  pullRequestCreatedObserved: boolean;
  /** MERGE fact observed — never inferred from PR_OPEN or open PR alone. */
  mergeObserved: boolean;
  commitObserved: boolean;
  /** True when publication status is PR_OPEN and merge was not observed. */
  openPullRequest: boolean;
  updatedAt: string;
  limits: string[];
};

type RefDetailJson = {
  publicationBranch?: string;
  prCurrentState?: PrCurrentState;
};

export type PublicationRefProjectionInput = {
  id: string;
  documentId: string;
  revisionId: string;
  repositoryId: string;
  targetPath: string;
  targetBranch: string;
  baseSha: string | null;
  headSha: string | null;
  prNumber: number | null;
  status: string;
  effectAttemptId: string | null;
  detailJson: string;
  updatedAt: Date;
};

export type EffectAttemptProjectionInput = {
  kind: string;
  status: string;
} | null;

export function projectPublicationFromRow(input: {
  ref: PublicationRefProjectionInput;
  repositoryFullName: string;
  attempt: EffectAttemptProjectionInput;
  facts: Array<{ factKind: string; sha: string; prNumber?: number | null }>;
}): ProjectPublicationListItem {
  const detail = JSON.parse(input.ref.detailJson || "{}") as RefDetailJson;
  const prCurrentState = detail.prCurrentState ?? null;
  const qualification = qualifyObservedFacts(input.facts, {
    prCurrentState: prCurrentState ?? undefined,
  });
  const mergeObserved = qualification.mergeObserved;
  const openPullRequest =
    input.ref.status === "PR_OPEN" && !mergeObserved && input.ref.prNumber != null;

  return {
    publicationRefId: input.ref.id,
    documentId: input.ref.documentId,
    revisionId: input.ref.revisionId,
    repositoryId: input.ref.repositoryId,
    repositoryFullName: input.repositoryFullName,
    targetPath: input.ref.targetPath,
    targetBranch: input.ref.targetBranch,
    publicationBranch: detail.publicationBranch ?? null,
    baseSha: input.ref.baseSha,
    headSha: input.ref.headSha,
    prNumber: input.ref.prNumber,
    publicationStatus: input.ref.status,
    effectAttemptId: input.ref.effectAttemptId,
    effectKind: input.attempt?.kind ?? null,
    effectStatus: input.attempt?.status ?? null,
    prCurrentState,
    pullRequestCreatedObserved: qualification.prCreatedHistorically,
    mergeObserved,
    commitObserved: qualification.commitObserved,
    openPullRequest,
    updatedAt: input.ref.updatedAt.toISOString(),
    limits: qualification.limits,
  };
}
```

## CREATE `projects/sfia-studio-next/web/src/domains/integrations/publication-projection-service.ts`

```
import { and, desc, eq, inArray } from "drizzle-orm";
import { db } from "@/db/client";
import {
  authorizedRepositories,
  documentPublicationRefs,
  effectAttempts,
  observedGitFacts,
  projects,
} from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import {
  projectPublicationFromRow,
  type ProjectPublicationListItem,
} from "./publication-projection";

export type { ProjectPublicationListItem } from "./publication-projection";

/**
 * Project-scoped Studio publications projection (D4/D7/D8/D9).
 * Read-only; owner-gated. Never treats an open PR as a verified merge.
 */
export async function listProjectPublications(
  pilotId: string,
  projectId: string,
): Promise<{ projectId: string; publications: ProjectPublicationListItem[] }> {
  const project = (
    await db
      .select({ id: projects.id })
      .from(projects)
      .where(and(eq(projects.id, projectId), eq(projects.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!project) throw new StudioError("NOT_FOUND", "Projet introuvable");

  const rows = await db
    .select({
      ref: documentPublicationRefs,
      fullName: authorizedRepositories.fullName,
      attempt: effectAttempts,
    })
    .from(documentPublicationRefs)
    .innerJoin(
      authorizedRepositories,
      eq(documentPublicationRefs.repositoryId, authorizedRepositories.id),
    )
    .leftJoin(effectAttempts, eq(documentPublicationRefs.effectAttemptId, effectAttempts.id))
    .where(
      and(
        eq(documentPublicationRefs.projectId, projectId),
        eq(documentPublicationRefs.pilotId, pilotId),
      ),
    )
    .orderBy(desc(documentPublicationRefs.updatedAt));

  const attemptIds = rows
    .map((r) => r.ref.effectAttemptId)
    .filter((id): id is string => Boolean(id));
  const factsByAttempt = new Map<string, typeof observedGitFacts.$inferSelect[]>();
  if (attemptIds.length > 0) {
    const facts = await db
      .select()
      .from(observedGitFacts)
      .where(
        and(
          eq(observedGitFacts.projectId, projectId),
          eq(observedGitFacts.pilotId, pilotId),
          inArray(observedGitFacts.attemptId, attemptIds),
        ),
      );
    for (const f of facts) {
      const bucket = factsByAttempt.get(f.attemptId) ?? [];
      bucket.push(f);
      factsByAttempt.set(f.attemptId, bucket);
    }
  }

  const publications = rows.map((row) =>
    projectPublicationFromRow({
      ref: row.ref,
      repositoryFullName: row.fullName,
      attempt: row.attempt
        ? { kind: row.attempt.kind, status: row.attempt.status }
        : null,
      facts: (factsByAttempt.get(row.ref.effectAttemptId ?? "") ?? []).map((f) => ({
        factKind: f.factKind,
        sha: f.sha,
        prNumber: f.prNumber,
      })),
    }),
  );

  return { projectId, publications };
}
```

## CREATE `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/publications/route.ts`

```
import { NextResponse } from "next/server";
import { listProjectPublications } from "@/domains/integrations/publication-projection-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(_req: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const result = await listProjectPublications(session.pilotId, projectId);
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```

## CREATE `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/tree/route.ts`

```
import { NextResponse } from "next/server";
import { listGitDirectory } from "@/domains/integrations/resource-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(req: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const url = new URL(req.url);
    const repositoryId = url.searchParams.get("repositoryId");
    const ref = url.searchParams.get("ref");
    if (!repositoryId || !ref) {
      return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
    }
    const path = url.searchParams.get("path") ?? "";
    const result = await listGitDirectory({
      pilotId: session.pilotId,
      projectId,
      repositoryId,
      path,
      ref,
    });
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```

## CREATE `projects/sfia-studio-next/web/tests/unit/conversation-publication-authority.test.ts`

```
import { describe, expect, it } from "vitest";
import {
  assertPublicationMandateCoversPlan,
  extractPublicationBranchHint,
  looksLikeTechnicalBranchName,
  userStatementRefusesPublication,
  userStatementRequestsMergeOnly,
  userStatementRequestsUnnamedNewBranch,
} from "@/domains/conversation/conversation-publication-mandate-guards";
import type { PublicationPlan } from "@/domains/execution/types";

function plan(overrides: Partial<PublicationPlan> = {}): PublicationPlan {
  return {
    documentId: "doc_1",
    revisionId: "rev_1",
    preparationId: "prep_1",
    repositoryId: "repo_1",
    repositoryFullName: "org/repo",
    authorizationId: "auth_1",
    installationId: "inst_1",
    actorLogin: "pilot",
    permissions: {},
    targetPath: "docs/studio-next/accept01.md",
    targetBranch: "main",
    publicationBranch: "studio/pub-1",
    baseRef: "main",
    baseSha: "abc",
    revisionFingerprint: "rfp",
    contentMarkdown: "# Hi",
    inspection: {
      kind: "CREATE",
      basePath: "docs/studio-next/accept01.md",
      baseSha: null,
      baseContent: null,
      proposedContent: "# Hi",
      unifiedDiff: "",
      inspectionFingerprint: "ifp",
    },
    steps: ["CREATE_BRANCH", "PUBLISH_FILE", "OPEN_PR"],
    ...overrides,
  };
}

describe("conversation-publication-authority guards", () => {
  it("rejects negative publication phrases", () => {
    expect(userStatementRefusesPublication("Crée le doc mais ne publie pas sur GitHub")).toBe(true);
    expect(
      userStatementRefusesPublication(
        "Crée et publie-le dans mon dépôt chemin docs/studio-next/x.md",
      ),
    ).toBe(false);
  });

  it("merge-only utterance does not admit publication mandate", () => {
    expect(userStatementRequestsMergeOnly("Merge la PR #42 dans main")).toBe(true);
    expect(
      userStatementRequestsMergeOnly(
        "Publie docs/foo.md et merge la PR quand c'est prêt",
      ),
    ).toBe(false);
  });

  it("plan drift on path is refused", () => {
    const covered = assertPublicationMandateCoversPlan({
      userStatement: "publie chemin docs/studio-next/accept01.md",
      qualifiedPath: "docs/studio-next/accept01.md",
      qualifiedBranch: null,
      plan: plan(),
    });
    expect(covered.ok).toBe(true);

    const drift = assertPublicationMandateCoversPlan({
      userStatement: "publie chemin docs/studio-next/other.md",
      qualifiedPath: "docs/studio-next/other.md",
      qualifiedBranch: null,
      plan: plan(),
    });
    expect(drift.ok).toBe(false);
    if (!drift.ok) expect(drift.reasonCode).toBe("PLAN_DRIFT");
  });

  it("contradictory path hints fail closed", () => {
    const amb = assertPublicationMandateCoversPlan({
      userStatement: "publie sous docs/b.md",
      qualifiedPath: "docs/a.md",
      qualifiedBranch: null,
      plan: plan({ targetPath: "docs/a.md" }),
    });
    expect(amb.ok).toBe(false);
    if (!amb.ok) expect(amb.reasonCode).toBe("AMBIGUOUS_PATH");
  });
});

describe("P0-01 branch hint extraction", () => {
  it("does not treat French articles as branch names", () => {
    expect(extractPublicationBranchHint("Publie ce document sur une nouvelle branche du repo")).toBe(
      null,
    );
    expect(extractPublicationBranchHint("Publie ce document sur la branche de mon dépôt")).toBe(
      null,
    );
    expect(extractPublicationBranchHint("publie sur une branche dédiée")).toBe(null);
    expect(looksLikeTechnicalBranchName("du")).toBe(false);
    expect(looksLikeTechnicalBranchName("de")).toBe(false);
  });

  it("detects unnamed new-branch intent", () => {
    expect(userStatementRequestsUnnamedNewBranch("Publie sur une nouvelle branche du repo")).toBe(
      true,
    );
    expect(
      userStatementRequestsUnnamedNewBranch("Publie sur la branche feat/docs-publication"),
    ).toBe(false);
  });

  it("accepts an explicit technical branch name", () => {
    expect(
      extractPublicationBranchHint("Publie sur la branche feat/docs-publication"),
    ).toBe("feat/docs-publication");
    expect(extractPublicationBranchHint("publish on branch main")).toBe("main");
    expect(looksLikeTechnicalBranchName("feat/docs-publication")).toBe(true);
  });

  it("does not PLAN_DRIFT on nouvelle branche without a name", () => {
    const covered = assertPublicationMandateCoversPlan({
      userStatement: "Publie ce document sur une nouvelle branche du repo",
      qualifiedPath: null,
      qualifiedBranch: null,
      plan: plan(),
    });
    expect(covered.ok).toBe(true);
  });

  it("PLAN_DRIFT when explicit branch is outside the prepared plan", () => {
    const drift = assertPublicationMandateCoversPlan({
      userStatement: "publie sur la branche feat/other",
      qualifiedPath: null,
      qualifiedBranch: null,
      plan: plan(),
    });
    expect(drift.ok).toBe(false);
    if (!drift.ok) expect(drift.reasonCode).toBe("PLAN_DRIFT");
  });

  it("accepts explicit branch matching publicationBranch", () => {
    const covered = assertPublicationMandateCoversPlan({
      userStatement: "publie sur la branche studio/pub-1",
      qualifiedPath: null,
      qualifiedBranch: null,
      plan: plan(),
    });
    expect(covered.ok).toBe(true);
  });

  it("AMBIGUOUS_BRANCH on contradictory explicit names", () => {
    const amb = assertPublicationMandateCoversPlan({
      userStatement: "publie sur la branche feat/a et aussi branche fix/b",
      qualifiedPath: null,
      qualifiedBranch: null,
      plan: plan(),
    });
    expect(amb.ok).toBe(false);
    if (!amb.ok) expect(amb.reasonCode).toBe("AMBIGUOUS_BRANCH");
  });

  it("does not require the lexical verb publie when path is qualified", () => {
    const covered = assertPublicationMandateCoversPlan({
      userStatement: "Mets à jour le dépôt chemin docs/studio-next/accept01.md",
      qualifiedPath: "docs/studio-next/accept01.md",
      qualifiedBranch: null,
      plan: plan(),
    });
    expect(covered.ok).toBe(true);
  });
});

```

## CREATE `projects/sfia-studio-next/web/tests/unit/merge-pull-request-sha.test.ts`

```
import { describe, expect, it, vi } from "vitest";
import { mergePullRequestRemote } from "@/domains/integrations/github-app-auth";
import { isStudioError } from "@/lib/http-errors";

const HEAD = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const MERGE = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
const OTHER = "cccccccccccccccccccccccccccccccccccccccc";

function jsonResponse(status: number, body: unknown) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

describe("P0-02 mergePullRequestRemote SHA proof", () => {
  it("returns observed merge_commit_sha when PR already merged (idempotent)", async () => {
    const fetchImpl = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input);
      const method = (init?.method ?? "GET").toUpperCase();
      if (url.includes("/pulls/7") && method === "GET" && !url.endsWith("/merge")) {
        return jsonResponse(200, {
          number: 7,
          title: "doc",
          state: "closed",
          html_url: "https://github.com/o/r/pull/7",
          merged: true,
          merge_commit_sha: MERGE,
          head: { sha: HEAD, ref: "studio/pub" },
          base: { sha: OTHER, ref: "main" },
        });
      }
      return jsonResponse(500, { message: "unexpected " + url });
    });

    const result = await mergePullRequestRemote({
      token: "t",
      fullName: "o/r",
      prNumber: 7,
      expectedHeadSha: HEAD,
      fetchImpl: fetchImpl as unknown as typeof fetch,
    });
    expect(result.merged).toBe(true);
    expect(result.sha).toBe(MERGE);
    expect(result.sha).not.toBe(HEAD);
  });

  it("AMBIGUOUS when already merged but merge_commit_sha missing", async () => {
    const fetchImpl = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input);
      const method = (init?.method ?? "GET").toUpperCase();
      if (url.includes("/pulls/8") && method === "GET") {
        return jsonResponse(200, {
          number: 8,
          title: "doc",
          state: "closed",
          html_url: "https://github.com/o/r/pull/8",
          merged: true,
          merge_commit_sha: null,
          head: { sha: HEAD, ref: "studio/pub" },
          base: { sha: OTHER, ref: "main" },
        });
      }
      return jsonResponse(500, { message: "no" });
    });

    await expect(
      mergePullRequestRemote({
        token: "t",
        fullName: "o/r",
        prNumber: 8,
        expectedHeadSha: HEAD,
        fetchImpl: fetchImpl as unknown as typeof fetch,
      }),
    ).rejects.toSatisfy(
      (e: unknown) => isStudioError(e) && e.code === "AMBIGUOUS" && /fusion/.test(e.message),
    );
  });

  it("CONFLICT when already merged with divergent HEAD", async () => {
    const fetchImpl = vi.fn(async () =>
      jsonResponse(200, {
        number: 9,
        title: "doc",
        state: "closed",
        html_url: "https://github.com/o/r/pull/9",
        merged: true,
        merge_commit_sha: MERGE,
        head: { sha: OTHER, ref: "studio/pub" },
        base: { sha: HEAD, ref: "main" },
      }),
    );

    await expect(
      mergePullRequestRemote({
        token: "t",
        fullName: "o/r",
        prNumber: 9,
        expectedHeadSha: HEAD,
        fetchImpl: fetchImpl as unknown as typeof fetch,
      }),
    ).rejects.toSatisfy((e: unknown) => isStudioError(e) && e.code === "CONFLICT");
  });

  it("returns merge API sha on fresh merge — never head", async () => {
    const fetchImpl = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input);
      const method = (init?.method ?? "GET").toUpperCase();
      if (url.includes("/pulls/10") && method === "GET" && !url.endsWith("/merge")) {
        return jsonResponse(200, {
          number: 10,
          title: "doc",
          state: "open",
          html_url: "https://github.com/o/r/pull/10",
          merged: false,
          head: { sha: HEAD, ref: "studio/pub" },
          base: { sha: OTHER, ref: "main" },
        });
      }
      if (url.endsWith("/merge") && method === "PUT") {
        return jsonResponse(200, { merged: true, sha: MERGE });
      }
      return jsonResponse(500, { message: "unexpected" });
    });

    const result = await mergePullRequestRemote({
      token: "t",
      fullName: "o/r",
      prNumber: 10,
      expectedHeadSha: HEAD,
      expectedBaseSha: OTHER,
      fetchImpl: fetchImpl as unknown as typeof fetch,
    });
    expect(result.sha).toBe(MERGE);
  });

  it("CONFLICT on HEAD drift before merge", async () => {
    const fetchImpl = vi.fn(async () =>
      jsonResponse(200, {
        number: 11,
        title: "doc",
        state: "open",
        html_url: "https://github.com/o/r/pull/11",
        merged: false,
        head: { sha: OTHER, ref: "studio/pub" },
        base: { sha: HEAD, ref: "main" },
      }),
    );

    await expect(
      mergePullRequestRemote({
        token: "t",
        fullName: "o/r",
        prNumber: 11,
        expectedHeadSha: HEAD,
        fetchImpl: fetchImpl as unknown as typeof fetch,
      }),
    ).rejects.toSatisfy((e: unknown) => isStudioError(e) && e.code === "CONFLICT");
  });

  it("does not PUT merge a second time when already merged", async () => {
    const fetchImpl = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input);
      const method = (init?.method ?? "GET").toUpperCase();
      if (method === "PUT") {
        return jsonResponse(500, { message: "should not merge again" });
      }
      return jsonResponse(200, {
        number: 12,
        title: "doc",
        state: "closed",
        html_url: "https://github.com/o/r/pull/12",
        merged: true,
        merge_commit_sha: MERGE,
        head: { sha: HEAD, ref: "studio/pub" },
        base: { sha: OTHER, ref: "main" },
      });
    });

    await mergePullRequestRemote({
      token: "t",
      fullName: "o/r",
      prNumber: 12,
      expectedHeadSha: HEAD,
      fetchImpl: fetchImpl as unknown as typeof fetch,
    });
    const puts = fetchImpl.mock.calls.filter(
      (c) => ((c[1] as RequestInit | undefined)?.method ?? "GET").toUpperCase() === "PUT",
    );
    expect(puts).toHaveLength(0);
  });
});

```

## CREATE `projects/sfia-studio-next/web/tests/unit/git-directory-listing.test.ts`

```
import { beforeEach, describe, expect, it } from "vitest";
import {
  getScriptedGitHubProvider,
  resetScriptedStore,
  seedScriptedFlatDirectoryForTest,
} from "@/domains/integrations/scripted-github-provider";
import { isStudioError } from "@/lib/http-errors";

describe("SCRIPTED listDirectory", () => {
  beforeEach(() => {
    resetScriptedStore();
  });

  it("lists root children on main (happy path)", async () => {
    const provider = getScriptedGitHubProvider();
    const pilotId = "pilot-tree";
    const fullName = "acme/docs-projet";
    const mainSha = await provider.getRefSha(pilotId, fullName, "main");
    const entries = await provider.listDirectory(pilotId, fullName, "", mainSha);
    const names = entries.map((e) => e.name);
    expect(names).toContain("README.md");
    expect(names).toContain("docs");
    const readme = entries.find((e) => e.name === "README.md");
    expect(readme?.type).toBe("file");
    expect(readme?.size).toBeGreaterThan(0);
    const docsDir = entries.find((e) => e.name === "docs");
    expect(docsDir?.type).toBe("dir");
  });

  it("lists docs/ immediate children", async () => {
    const provider = getScriptedGitHubProvider();
    const pilotId = "pilot-tree-docs";
    const fullName = "acme/docs-projet";
    const mainSha = await provider.getRefSha(pilotId, fullName, "main");
    const entries = await provider.listDirectory(pilotId, fullName, "docs", mainSha);
    expect(entries).toHaveLength(1);
    expect(entries[0]!.name).toBe("spec.md");
    expect(entries[0]!.type).toBe("file");
  });

  it("returns empty array for directory prefix with no files at commit", async () => {
    const provider = getScriptedGitHubProvider();
    const pilotId = "pilot-tree-empty";
    const fullName = "acme/docs-projet";
    const mainSha = await provider.getRefSha(pilotId, fullName, "main");
    const entries = await provider.listDirectory(pilotId, fullName, "empty", mainSha);
    expect(entries).toEqual([]);
  });

  it("refuses file path as directory", async () => {
    const provider = getScriptedGitHubProvider();
    const pilotId = "pilot-tree-file";
    const fullName = "acme/docs-projet";
    const mainSha = await provider.getRefSha(pilotId, fullName, "main");
    try {
      await provider.listDirectory(pilotId, fullName, "README.md", mainSha);
      expect.fail("expected NOT_A_DIRECTORY");
    } catch (e) {
      expect(isStudioError(e)).toBe(true);
      expect((e as { code: string }).code).toBe("INVALID_REQUEST");
      expect((e as Error).message).toMatch(/NOT_A_DIRECTORY/);
    }
  });

  it("P1-03 refuses silent truncation above 200 entries", async () => {
    const provider = getScriptedGitHubProvider();
    const pilotId = "pilot-tree-overflow";
    const fullName = "acme/overflow-repo";
    const commit = seedScriptedFlatDirectoryForTest({
      pilotId,
      fullName,
      dir: "bulk",
      count: 201,
    });
    await expect(provider.listDirectory(pilotId, fullName, "bulk", commit)).rejects.toSatisfy(
      (e: unknown) => isStudioError(e) && e.code === "AMBIGUOUS" && /200/.test(e.message),
    );
  });
});
```

## CREATE `projects/sfia-studio-next/web/tests/unit/github-app-allowed-repos.test.ts`

```
import { describe, expect, it } from "vitest";
import {
  isFullNameAllowed,
  resolveAllowedFullNames,
} from "@/domains/integrations/github-app-config";

describe("multi-repo REAL allowlist", () => {
  it("always includes primary and accepts same-owner extras", () => {
    const names = resolveAllowedFullNames({
      allowedFullName: "mcleland147/chantiers360",
      expectedOwner: "mcleland147",
      envList: "mcleland147/chantiers360, mcleland147/second-sandbox",
    });
    expect(names).toEqual([
      "mcleland147/chantiers360",
      "mcleland147/second-sandbox",
    ]);
    expect(isFullNameAllowed(names, "mcleland147/second-sandbox")).toBe(true);
    expect(isFullNameAllowed(names, "other/repo")).toBe(false);
  });

  it("rejects cross-owner extras — no allow-all", () => {
    expect(() =>
      resolveAllowedFullNames({
        allowedFullName: "mcleland147/chantiers360",
        expectedOwner: "mcleland147",
        envList: "evil/other",
      }),
    ).toThrow(/hors owner/);
  });

  it("dedupes case-insensitively", () => {
    const names = resolveAllowedFullNames({
      allowedFullName: "mcleland147/chantiers360",
      expectedOwner: "mcleland147",
      envList: "Mcleland147/Chantiers360",
    });
    expect(names).toHaveLength(1);
  });
});

```

## CREATE `projects/sfia-studio-next/web/tests/unit/project-publications-projection.test.ts`

```
import { describe, expect, it } from "vitest";
import { projectPublicationFromRow } from "@/domains/integrations/publication-projection";

function baseRef(overrides?: Partial<{ status: string; prNumber: number | null; detailJson: string }>) {
  const now = new Date();
  return {
    id: "dpr_test",
    projectId: "proj_1",
    pilotId: "pilot_1",
    documentId: "doc_1",
    revisionId: "rev_1",
    repositoryId: "repo_1",
    targetPath: "docs/x.md",
    targetBranch: "main",
    baseSha: "a".repeat(40),
    headSha: "b".repeat(40),
    prNumber: 42,
    status: "PR_OPEN",
    effectAttemptId: "eff_1",
    detailJson: JSON.stringify({ publicationBranch: "sfia/pub-1", prCurrentState: "OPEN" }),
    createdAt: now,
    updatedAt: now,
    ...overrides,
  };
}

describe("projectPublicationFromRow — PR vs merge", () => {
  it("open PR is not treated as merge (PR_OPEN fact only)", () => {
    const item = projectPublicationFromRow({
      ref: baseRef(),
      repositoryFullName: "acme/repo",
      attempt: { kind: "GIT_PUBLICATION", status: "COMPLETED" },
      facts: [{ factKind: "PR_OPEN", sha: "c".repeat(40), prNumber: 42 }],
    });
    expect(item.openPullRequest).toBe(true);
    expect(item.mergeObserved).toBe(false);
    expect(item.publicationStatus).toBe("PR_OPEN");
    expect(item.pullRequestCreatedObserved).toBe(true);
  });

  it("MERGE fact alone qualifies mergeObserved without conflating open PR", () => {
    const item = projectPublicationFromRow({
      ref: baseRef({ status: "MERGED", detailJson: JSON.stringify({ prCurrentState: "MERGED" }) }),
      repositoryFullName: "acme/repo",
      attempt: null,
      facts: [
        { factKind: "PR_OPEN", sha: "c".repeat(40), prNumber: 42 },
        { factKind: "MERGE", sha: "d".repeat(40), prNumber: 42 },
      ],
    });
    expect(item.mergeObserved).toBe(true);
    expect(item.openPullRequest).toBe(false);
    expect(item.publicationStatus).toBe("MERGED");
  });

  it("COMPLETED publication with PR_OPEN status still blocks merge inference", () => {
    const item = projectPublicationFromRow({
      ref: baseRef({ status: "PR_OPEN" }),
      repositoryFullName: "acme/other",
      attempt: { kind: "GIT_PUBLICATION", status: "COMPLETED" },
      facts: [{ factKind: "COMMIT", sha: "e".repeat(40) }],
    });
    expect(item.effectStatus).toBe("COMPLETED");
    expect(item.mergeObserved).toBe(false);
    expect(item.commitObserved).toBe(true);
    expect(item.openPullRequest).toBe(true);
  });
});
```

## CREATE `projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts`

```
/**
 * E08 — Dépôts Git surface (SCRIPTED DEV).
 * Does not prove GitHub REAL mutations.
 */
import { expect, test } from "@playwright/test";
import {
  constituteAndCreateProject,
  openNewPreparation,
  sendPrepMessage,
  uniqueProjectName,
} from "./helpers/g4-chat-first";

test.describe("E08 GitRepositoriesSurface (SCRIPTED)", () => {
  test("empty → explicit attach → tree → pubs → manage detach", async ({ page }) => {
    test.setTimeout(240_000);

    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    await openNewPreparation(page);
    await sendPrepMessage(page, "Préparation E08 surface dépôts Git");

    const projectId = await constituteAndCreateProject(page, {
      name: uniqueProjectName("E08 Git Surface"),
      summary: "parcours consultation multi-dépôts SCRIPTED",
    });
    expect(projectId).toBeTruthy();

    await page.goto("/settings/integrations");
    await expect(page.getByTestId("integrations-panel")).toBeVisible();
    await expect(page.getByTestId("provider-mode-note")).not.toContainText(/Chargement/i, {
      timeout: 15_000,
    });
    if (await page.getByTestId("disconnect-github").isVisible().catch(() => false)) {
      await page.getByTestId("disconnect-github").click();
      await expect(page.getByTestId("connect-github")).toBeVisible({ timeout: 15_000 });
    }
    await page.getByTestId("connect-github").click();
    await expect(page.getByTestId("integrations-status-banner")).toContainText(/GitHub est connecté/i, {
      timeout: 20_000,
    });
    if (await page.getByTestId("refresh-repos").isVisible().catch(() => false)) {
      await page.getByTestId("refresh-repos").click();
    }

    await page.goto(`/projects/${projectId}?surface=git`);
    await expect(page.getByTestId("git-empty")).toBeVisible({ timeout: 20_000 });
    // P1-02 — choices list, never silent first-repo attach
    const choices = page.getByTestId("git-empty-repo-choices");
    await expect(choices).toBeVisible({ timeout: 15_000 });
    const firstAttach = choices.locator("button").first();
    await expect(firstAttach).toBeVisible();
    await firstAttach.click();

    await expect(page.getByTestId("git-repo-card")).toBeVisible({ timeout: 20_000 });
    await expect(page.getByTestId("git-tab-files")).toBeVisible();
    await expect(page.getByTestId("git-tree")).toBeVisible({ timeout: 20_000 });
    await expect(page.getByTestId("git-split")).toBeVisible();

    // Branch select present
    await expect(page.getByTestId("git-branch-select")).toBeVisible();

    // Publications tab — project-scale, historical wording
    await page.getByTestId("git-tab-publications").click();
    await expect(page.getByTestId("git-publications")).toBeVisible();
    await expect(page.getByTestId("git-publications")).toContainText(/Projection D4\/D7\/D8|historique/i);

    // Manage — at least one attached; second attach when an unattached button is offered
    await page.getByTestId("git-manage-repos").click();
    await expect(page.getByTestId("git-manage")).toBeVisible();
    await expect(page.getByTestId("git-manage").locator(".git-manage-item").first()).toBeVisible();
    const manageAttaches = page.getByTestId("git-manage").locator("button", { hasText: /^Associer / });
    if ((await manageAttaches.count()) > 0) {
      const before = await page.getByTestId("git-manage").locator(".git-manage-item").count();
      await manageAttaches.first().click();
      await page.getByTestId("git-manage-repos").click();
      await expect
        .poll(async () => page.getByTestId("git-manage").locator(".git-manage-item").count(), {
          timeout: 15_000,
        })
        .toBeGreaterThanOrEqual(before);
    }

    // Detach one with confirm
    const detachBtn = page.locator('[data-testid^="git-detach-"]').first();
    if (await detachBtn.isVisible().catch(() => false)) {
      await detachBtn.click();
      await expect(page.getByTestId("git-detach-confirm")).toBeVisible({ timeout: 5_000 });
      await page.getByTestId("git-detach-confirm-yes").click();
    }

    // Enlarge control is icon-only with aria-label when a file is open — skip if empty tree
    await page.getByTestId("git-tab-files").click();
    const fileBtn = page.locator('[data-testid^="git-tree-file-"]').first();
    if (await fileBtn.isVisible().catch(() => false)) {
      await fileBtn.click();
      await expect(page.getByTestId("git-preview-actions")).toBeVisible();
      await expect(page.getByTestId("git-action-enlarge")).toHaveAttribute(
        "aria-label",
        /Agrandir/i,
      );
      await expect(page.getByTestId("git-action-enlarge")).not.toContainText(/Agrandir/i);
    }
  });

  test("mobile viewport keeps git empty / manage usable", async ({ page }) => {
    test.setTimeout(180_000);
    await page.setViewportSize({ width: 390, height: 844 });

    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    await openNewPreparation(page);
    await sendPrepMessage(page, "E08 mobile git");
    const projectId = await constituteAndCreateProject(page, {
      name: uniqueProjectName("E08 Git Mobile"),
      summary: "viewport mobile",
    });

    await page.goto("/settings/integrations");
    if (await page.getByTestId("connect-github").isVisible().catch(() => false)) {
      await page.getByTestId("connect-github").click();
    }

    await page.goto(`/projects/${projectId}?surface=git`);
    const empty = page.getByTestId("git-empty");
    const card = page.getByTestId("git-repo-card");
    await expect(empty.or(card)).toBeVisible({ timeout: 20_000 });
  });
});

```

## CREATE `projects/sfia-studio-next/conception-fonctionnelle/contrat-fonctionnel-depots-git-et-conduite-nora-candidat.md`

```
# SFIA Studio Next — Contrat fonctionnel candidat
## Dépôts Git du projet et conduite conversationnelle des opérations par Nora

| Champ | Valeur |
|---|---|
| Version | **0.2 — CANDIDATE / DOCUMENTED — 2026-11-21** |
| Objet | Contrat fonctionnel consolidé de consultation Git et des opérations documentaires conduites avec Nora |
| Autorité | Morris — arbitrages d'intention produit exprimés dans les échanges des 21 novembre 2026 |
| Référence produit | SFIA Studio Next / R5 / convergence ML4D / Ensemble 08 |
| Baseline de lecture | `mcleland147/sfia-workspace` — `main@fd04888b8dbf8d9393098d82546076e85b812bb1` |
| État local Cursor | **NON OBSERVÉ** |
| UX | [Figma page 11 — Dépôts Git, intégrations et consultation](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1092-116) |
| Autorisation de publication documentaire | GO Morris pour créer une branche dédiée et y committer **ce candidat** ; **aucun GO PR, merge, main ou technique** |
| Effet | Aucun changement de runtime, d'API, de sécurité, de SEF, d'ADR ni de Roadmap |
| Statut visé | Proposition de contrat pour revue et approbation de contenu, **pas encore VALIDATED SPEC / IMPLEMENTED / ADOPTED** |

> **Lecture de statut.** Ce document capitalise les arbitrages fonctionnels exprimés par Morris, mais ne remplace ni la spécification R2 `integration-git-gouvernee.md` déjà VALIDATED SPEC, ni les décisions normatives applicables. Toute contradiction avec une décision de portée supérieure est un **écart à arbitrer**, non une dérogation implicite. Une création de branche et un commit ne constituent pas une promotion sur `main`.

## 0. Synthèse et évolution depuis le candidat v0.1

La cible a deux capacités utilisateur cohérentes : **(A) consulter les ressources Git d'un projet dans Studio** et **(B) demander à Nora d'agir sur Git et recevoir sa restitution dans le fil de travail**. Le Pilote ne doit pas être obligé d'utiliser un panneau de commandes techniques pour préparer, autoriser, publier, ouvrir une PR ou fusionner une PR.

Les précisions intégrées en v0.2 sont :

1. Un projet peut rattacher **plusieurs dépôts autorisés** ; aucun dépôt n'est imposé à l'ensemble de la session.
2. L'onglet **Dépôts Git** expose une arborescence sur une branche sélectionnée, un aperçu en lecture seule et une liste des **Publications Studio du projet**. Les vues sont distinctes mais réutilisent une même visionneuse.
3. Sélection de branche, y compris une branche distante non mergée ; fichier/aperçu/lien GitHub doivent utiliser la **même référence**.
4. Actions de visionneuse **Infos, Ouvrir sur GitHub, Agrandir** toujours accessibles dans l'en-tête. Disposition **30/70** en consultation desktop ; en agrandi, document central et détails contextuels à droite. Réemploi de la visionneuse Travail existante, sans en refaire le parcours.
5. **Nora reçoit l'intention → qualifie le contexte → mobilise les domaines propriétaires → attend/observe les résultats de Studio → reprend et restitue au Pilote**.
6. Une demande **claire, explicite et suffisamment déterminée** peut constituer le mandat utilisateur pour l'opération Git correspondante : **pas de confirmation redondante par principe**. Une ambiguïté bloquante est clarifiée avant tout effet qui en dépend ; les lectures et préparations sûres peuvent avancer.
7. Une capacité Git **livrée en RECETTE doit être REAL, disponible de façon durable et testable sans activation manuelle par test**. Ceci inclut le merge lorsqu'il est inclus dans le périmètre livré. Les contrôles d'identité, de branche, de permissions, d'autorité et de conflit restent permanents.
8. Les opérations Git actuellement bloquées, en particulier **merge REAL**, ne sont **pas** considérées comme implémentées ou livrées par cette décision fonctionnelle.

## 1. Sources, hiérarchie et périmètre

### 1.1 Sources canoniques lues sur `main`

Chemins relatifs à `projects/sfia-studio-next/` :

- `governance/SEF.md` — SEF v0.2, notamment §4, §6, §7 et §10.
- `governance/roadmap.md` — état R5 et gates ; les entrées historiques ne valent pas statut du HEAD courant.
- `governance/decisions/2026-11-07-ml4-git-publication-ml5-cursor-trajectoire.md` — séparation Git documentaire Studio / technique Cursor ; merge distinctement autorisé.
- `governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md` — propriété de domaines, preuve et gates.
- `governance/product-naming-conventions.md` — noms par responsabilité produit.
- `conception-fonctionnelle/integration-git-gouvernee.md` — R2 D9, RG-GIT et PF-GIT conservés.
- `ux-ui/methodologie-contrat-figma-cursor.md` — méthode Figma ↔ Cursor sur `main`.
- `construction/ml4-integration-git/specification-technique.md` — état historique, limites REAL et recettes associées.
- Code `web/src/` indiqué §3 et §12 ci-dessous.

**Figma** : page 11, index et écrans 11.01–11.07 / 11.13–11.16. Les frames 11.08–11.12 ont été retirées volontairement au profit de la conversation et de la visionneuse Travail déjà existantes. La page Figma est mutable ; toute future implémentation doit capturer les états et références natives au moment du contrat de transposition.

### 1.2 Résultat Pilote

Le Pilote doit pouvoir utiliser Nora et Documents sans Git ; connecter GitHub à son compte ; choisir les dépôts du projet ; parcourir dossiers et fichiers sur la branche souhaitée ; lire et agrandir un document ; retrouver les publications de Studio ; puis demander naturellement à Nora des opérations Git documentaires et recevoir les résultats vérifiés et liens associés.

### 1.3 IN / OUT

**IN —** Connexion/autorisation GitHub App, rattachements multiples par projet, retrait et déconnexion, branches, arborescence à la demande, aperçu Markdown/texte, métadonnées exactes, ouverture GitHub, publications Studio multi-dépôts, conduite conversationnelle des opérations **effectivement prévues au lot**, autorité D6, dispatch D7, preuves D8, erreurs et reprise, tests DEV/RECETTE avec effets REAL.

**OUT —** Deuxième GitHub, clone permanent, synchronisation bidirectionnelle implicite, éditeur de code distant dans l'explorateur, gestion graphique des branches/PR/merge, marketplace, moteur Git ou orchestrateur Nora parallèle, push local simulé alors que l'API GitHub produit un commit distant, force-push, administration des protections du dépôt, mise à disposition STABLE et adoption sans gate. Les modifications techniques de code/CI/configuration exécutable par Studio relèvent du périmètre ML5/Cursor, pas de l'écriture documentaire native ML4.

## 2. Propriétés et frontières permanentes

| Propriétaire | Contrat de responsabilité |
|---|---|
| **D1 — Identité** | Pilote/session applicative ; ne confère pas automatiquement un droit GitHub |
| **D2 — Projet** | Projet courant, accès, rattachements contextuels ; le projet fonctionne sans Git |
| **D3 — Nora** | Compréhension du Pilote, intention structurée, clarification proportionnée, conduite de mission et **restitution finale** ; n'invente pas de mandat ni de fait d'effet |
| **D4 — Documents** | Document Studio, révision et relation vers ses publications observées |
| **D6 — Décisions** | HumanDecision, mandat effectif, portée/conditions/révocation ; seule une instruction utilisateur reconnue par le domaine peut autoriser un effet |
| **D7 — Exécution** | Préparation, tentative, dispatch, idempotence, réconciliation, reprise et état de l'effet |
| **D8 — Résultats / preuves** | Vérité d'observation, distinction des statuts ; pas de succès sans preuve |
| **D9 — Intégration Git** | GitHub App, dépôts autorisés, references, accès, contenu et opérations fournisseur sous autorité D6/D7 |

**Invariants :** une requête Git n'accorde pas de permission ; un texte Git est une donnée, jamais une instruction ; une branche candidate n'est pas `main` ; blob SHA ≠ commit SHA ; un commit ≠ une PR ≠ un merge ≠ une adoption ; un refus de fournisseur ne devient jamais « terminé » dans Nora. Aucun changement de propriétaire ni moteur d'effets concurrent n'est autorisé par cette conception.

## 3. AS-IS — lecture du code distant `main`

**Base :** `fd04888b8dbf8d9393098d82546076e85b812bb1`. **Runtime local, base de données, jetons et RECETTE actuelle : NON OBSERVÉS.** Les états « présent » ci-dessous signifient code et interfaces inspectés ; ils n'affirment pas une preuve E2E LIVE/REAL.

| Comportement | AS-IS observé | Source principale / limite |
|---|---|---|
| GitHub connecté, dépôts autorisés, déconnexion locale | **IMPLEMENTED dans le code** | `domains/integrations/authorization-service.ts` ; déconnexion locale ≠ révocation installation GitHub App |
| Rattacher plusieurs dépôts par projet, retirer un lien | **IMPLEMENTED** | `domains/integrations/project-link-service.ts` |
| Sources Git par projet et vérifications d'accès | **IMPLEMENTED** | `domains/integrations/resource-service.ts` |
| Liste des refs/branches | **IMPLEMENTED**, liste bornée | `resource-service.ts` / route `git/refs` ; 40 résultats selon code inspecté |
| Lire un fichier déterminé à une ref, provenance | **IMPLEMENTED** | `resource-service.ts` / `git/file` |
| Lire une ressource Git avec Nora | **IMPLEMENTED** | `domains/conversation/git-read-tools.ts` ; lecture seule |
| Visionneuse dans Travail | **IMPLEMENTED** | `components/figma/TravailViewer.tsx` |
| Découvrir des dossiers et rendre une arborescence | **NON IDENTIFIÉ comme capacité D9 livrée** | Contrat d'énumération de répertoire et route à construire |
| Liste « Publications Studio » par projet | **Données persistées, surface cible absente** | `document_publication_refs`, `effect_attempts` ; API/liste E08 à construire |
| Fournisseur GitHub REAL multi-dépôts | **INCOMPLET** | `real-github-provider.ts` restreint au `allowedFullName` configuré |
| Préparation publication documentaire / HumanDecision | **IMPLEMENTED** | `domains/execution/effect-service.ts` : plan inspecté/fingerprint, `authorizePublication` et `insertHumanDecision` |
| Git documentaire REAL | **CONDITIONNEL** | `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary` requis ; branche/écriture/PR bornées |
| Merge GitHub REAL | **NON DISPONIBLE sur `main`** | `real-github-provider.ts` : `mergePullRequest` refuse systématiquement |
| Nora : intention, missions D4 et suite D7 | **PARTIELLEMENT IMPLEMENTED** | `conversation/service.ts`, `intent-conduction.ts`, `mission-continuity.ts` |
| Reprise de publication après autorisation | **IMPLEMENTED dans le cas Nora borné** | `resumeMissionAfterPublicationAuthorize` : dispatch/réconciliation, continuation cognitive et restitution persistée |
| Reprise après interruption | **BOURNÉE aux événements nominaux** | `recoverAuthorizedNoraMissions` appelée notamment depuis D3 ; pas de scheduler universel |
| Demande Git claire directement autorisante | **ÉCART** | `authorizePublication` attend un acte D6 et l'empreinte d'inspection ; Nora passe par `AWAITING_PILOT_AUTH` |
| Nora capable d'agir sur toute mutation Git demandée | **NON ÉTABLI** | Outils Nora directs en lecture ; actes par domaines propriétaires, contrats selon capacité |

**Lecture critique :** le schéma D3 → domaines → faits → D3 **existe déjà**. Il ne faut ni le remplacer ni proclamer qu'il couvre tous les actes Git et toutes les reprises. L'écart E08 porte sur sa complétude, l'autorité conversationnelle et le périmètre REAL du fournisseur.

## 4. TO-BE — architecture logique sans moteur parallèle

### 4.1 Lecture Git

**UI Dépôts Git → contrôle session/projet D1/D2 → service ressource D9 → GitHub REAL → provenance fiable → visionneuse UI.**

L'état de navigation comporte le dépôt actif, la ref choisie, le chemin et la sélection de fichier. Il peut rester transitoire côté UI : aucune migration DB ne doit être créée sans besoin métier supplémentaire.

### 4.2 Opérations Git via Nora

**Pilote → Nora D3 (intention/contextualisation) → services propriétaires D4/D6/D7/D9 → observations D8 → reprise Nora D3 → réponse globale au Pilote.**

Nora ne renvoie pas le Pilote vers un cockpit technique pour réaliser les étapes ; elle ne répond pas « Studio te fera son retour » en abandonnant sa mission. La réponse finale à la même demande est produite par Nora depuis les faits reçus.

Pour une opération longue, la mission peut passer par un état d'attente corrélé et une reprise durable **si le mécanisme est réellement disponible** ; aucune exécution asynchrone universelle n'est présumée. Si une reprise n'est pas garantie, l'état est explicite et le prochain événement nominal ne doit ni perdre les faits ni rejouer un effet achevé.

### 4.3 Réemploi prioritaire

- D9 conserve l'identité fournisseur et ajoute une lecture de dossiers **à la demande**.
- D4 fournit les références de publication du projet depuis les tables existantes.
- D3 étend `intent-conduction` / `mission-continuity` et la qualification sémantique, sans second agent ni second ordonnanceur.
- D6 reconnaît/enregistre un mandat issu d'une demande explicite avec objet, cible et conditions D7 déterminés.
- D7 garde un unique chemin prepare → authority → dispatch → reconcile.
- D8 reste la source de vérité sur les résultats distants.
- UI réutilise shell, tokens, panneau contextuel et visionneuse ; pas de remplacement de Travail.

## 5. Contrats fonctionnels — espace de consultation

Les identifiants CF-GIT servent à tracer ce candidat, **sans renuméroter ni remplacer** les RG-GIT / PF-GIT R2.

| ID | Capacité / résultat | Contrat attendu | Sources / écart |
|---|---|---|---|
| **CF-GIT-01** | Connexion personnelle | État réel de GitHub, dépôts autorisés, actualisation/déconnexion ; aucun lien automatique vers les projets | Réemploi D9/Intégrations ; alignement UX |
| **CF-GIT-02** | Rattacher | Chaque projet associe 0..N dépôts autorisés, sans création de repo, branche ou PR | Réemploi `project-link-service` |
| **CF-GIT-03** | Retirer | Confirmation du retrait **du projet seulement** ; connexion, dépôt distant, historique des preuves conservés | Réemploi service + UX |
| **CF-GIT-04** | Changer de dépôt | Change le contexte de lecture ; réinitialise les données périmées et revient à une ref valide | UI et orchestration |
| **CF-GIT-05** | Sélectionner une branche | Départ sur ref par défaut ; branches distantes non fusionnées accessibles ; arborescence, fichier, détails et URL cohérents avec ref exacte | `listGitRefs` + sélecteur 11.03 + tests |
| **CF-GIT-06** | Arborescence | Énumération bornée de dossiers/fichiers, chargement à la demande, aucune copie locale persistante | **Nouveau contrat D9** + API + UI |
| **CF-GIT-07** | Lire fichier | Aperçu Markdown/texte sûr ; binaires, tailles excessives, 404 ambigus gérés explicitement | Réemploi `readGitFile` / visionneuse |
| **CF-GIT-08** | Infos fichier | Nom, path, repo, ref, type et provenance ; taille/commit/SHA uniquement si réellement récupérés et qualifiés | UI + enrichissement ciblé |
| **CF-GIT-09** | Lecture agrandie | Desktop 30/70 liste/aperçu ; agrandi = lecture centrale/détails droite ; réduction sans perte de contexte | Réemploi convention Travail et Figma 11.03–11.05 |
| **CF-GIT-10** | GitHub externe | « Ouvrir sur GitHub » en haut, à côté d'Infos et de l'icône Agrandir ; permalien uniquement si commit SHA vérifié | Lien de provenance D9 |
| **CF-GIT-11** | Publications Studio | Liste **de tout le projet**, tous dépôts confondus, révision D4 ↔ dépôt/branche/path/commit/PR/merge vérifiés | Tables existantes ; service de lecture/UI à construire |
| **CF-GIT-12** | Déconnecter GitHub | Confirmation ; nouvelles lectures/écritures suspendues, documents et références historiques conservés ; ne pas annoncer une révocation GitHub distante si non faite | Réemploi D9 + états UX |

### 5.1 Branche et cohérence d'un aperçu

La ref sélectionnée n'est pas un simple libellé. Pour chaque navigation, le service qualifie dépôt + ref + path. Si une branche disparaît ou que son HEAD change, la réponse indique la référence effectivement utilisée. Une lecture qui retourne un statut incertain ne permet pas de conclure que le fichier n'existe pas. Pour une URL exacte, construire le permalien depuis un commit vérifié, jamais depuis un blob SHA.

La limite actuelle de 40 refs exige un état de limitation et, si utile, une recherche bornée côté fournisseur pour les dépôts riches en branches.

### 5.2 Publications Studio distinctes de l'explorateur

**Fichiers du dépôt** : contenus distants réellement accessibles à la branche choisie. **Publications Studio** : objets D4 publiés depuis ce projet, y compris sur plusieurs dépôts et indépendamment du dépôt actif. L'écran 11.04 doit afficher clairement « Toutes les publications du projet », ou qualifier un filtre par dépôt ; il ne doit pas suggérer un périmètre trompeur.

Un élément peut rester dans l'historique après révocation des droits ou retrait du repo. Son **fait historique** ne vaut pas droit de lecture actuel ; afficher explicitement « source inaccessible » plutôt que supprimer l'historique ou montrer un aperçu obsolète comme courant.

## 6. Contrat Nora — clarté, autorité et mission

### 6.1 Qualification d'une demande

Nora examine la demande **et le contexte disponible** : projet actif, dépôt(s) rattaché(s), document/révision sélectionnés, conversation, branche, chemin proposé, règles et permissions.

- **Claire, explicite et cible déterminable :** poursuivre, sans confirmation redondante.
- **Paramètre accessoire manquant mais déductible sans risque matériel :** compléter selon contrat déterministe et faire apparaître la cible retenue dans les faits restitués.
- **Ambiguïté matérielle** (plusieurs dépôts sans choix fiable, document incertain, merge ciblé ambigu, conséquences non déterminées) : question ciblée **avant tout effet dépendant**.
- **Partie de demande non ambiguë et sans mutation :** consulter/préparer ce qui reste sûr, sans effectuer l'effet bloqué.
- **Permissions absentes / fournisseur refusé :** expliquer l'impossibilité, sans annoncer un résultat fictif.

Exemple : « Publie ce document sur une nouvelle branche du repo ». Un seul dépôt rattaché et un document D4 identifié peuvent suffire. Avec plusieurs dépôts et aucune cible établie dans le contexte, Nora demande « Sur quel dépôt ? ». Ne pas imposer automatiquement un path exact si un emplacement documentaire conventionnel déterminable a été explicitement accepté dans le contrat ; tout path déduit doit rester inspectable, contrôlé et lié au mandat.

### 6.2 Autorité D6 issue de la conversation

**Arbitrage d'intention Morris :** l'expression explicite d'une demande d'action peut valoir autorisation utilisateur **pour l'effet précisément demandé**, à condition que D6 la reconnaisse et l'enregistre valablement. Le raisonnement de Nora seul n'est jamais une HumanDecision.

L'adaptation requise doit permettre aux services propriétaires de :

1. Capturer l'acte explicite du Pilote, son message/identité/projet et la capacité demandée.
2. Résoudre la proposition vers un plan exact : dépôt, révision, cible, branche, chemin, base/HEAD, diff, effet et risque.
3. Vérifier que **le plan effectivement exécutable reste dans le mandat exprimé**, et qu'il n'y a pas d'ambiguïté matérielle ni de changement de portée.
4. Persister une HumanDecision D6 applicable avec les empreintes/conditions et la corrélation vers la tentative D7.
5. Recontrôler droits, restrictions, revocation, currentness et fingerprint **au point d'effet**.
6. Exécuter seulement dans l'enveloppe valable ; demander une clarification ou une nouvelle autorisation conversationnelle si l'enveloppe dérive.

Aucun « auto-GO » caché du modèle ; aucune confirmation artificielle non plus si le message Pilote vaut déjà mandat. **L'absence de bouton d'autorisation dans l'UX ne retire pas D6 ni le contrôle d'inspection.**

### 6.3 Commit / PR / merge : opérations distinctes

Une demande « crée une branche, publie ce document et ouvre une PR vers main » peut porter explicitement sur toute cette séquence si son périmètre est déterminé et autorisable.

Une demande « publie ce document » **n'autorise pas implicitement le merge**. Une demande ultérieure « merge la PR 675 » constitue une intention distincte qui peut, si déterminée et valide, être reconnue comme le **mandat distinct** requis par D6 : cela ne justifie pas un bouton supplémentaire ou un second accord automatique.

Le merge vérifie toujours PR, head/base, restrictions GitHub, permissions, références et absence de conflit. La source contractuelle R2 et la décision de trajectoire conservent l'exigence de séparation des actes.

### 6.4 Continuité et restitution intégrée

États logiques de mission à conserver/reconstruire depuis les propriétaires :

- intention reçue/qualifiée ;
- préparation effectuée ou clarification nécessaire ;
- mandat applicable ou manquant ;
- exécution en cours ;
- effet observé / échec / conflit / ambigu ;
- reprise cognitive avec faits ;
- message final délivré et historisé.

Une mission peut mobiliser plusieurs domaines ; elle n'est pas « terminée » au seul retour d'un des services. Le Pilote reçoit **une réponse Nora globale**, avec ce qui a effectivement été fait, ce qui reste à faire et les liens disponibles. La reprise après résultat D4 et l'après-autorisation D7 déjà présents doivent être étendus et testés sans nouveau moteur.

En interruption, l'effet prouvé est conservé ; la restitution peut être reprise sans double écriture et sans prétendre qu'une opération inconnue est achevée. Le contrat doit prouver les événements de reprise disponibles en RECETTE ; pas de promesse abstraite d'orchestration en arrière-plan.

## 7. Contrat opérationnel DEV / RECETTE / STABLE

### 7.1 Décision de cible fonctionnelle

**RECETTE :** toute capacité Git comprise dans la livraison candidate et déclarée prête à tester doit **être activée et utilisable réellement dès la mise à disposition**. Ni bouton caché de déblocage, ni manipulation manuelle répétée de variables d'environnement, ni simulation SCRIPTED présentée comme REAL. Le caractère continu porte sur la **configuration de l'environnement livré**, pas sur une autorisation illimitée de l'utilisateur.

**DEV :** activation bornée possible selon les besoins de construction, avec isolations, permissions et preuves adaptées.

**STABLE :** disponibilité seulement après gates Morris, qualification, protections, déploiement, rollback et autorisation de promotion ; pas de déduction automatique depuis une RECETTE passée.

### 7.2 Périmètre et preuve de disponibilité

| Opération du lot livré | Obligation lors de mise à disposition RECETTE |
|---|---|
| Lecture de branche/fichier | GitHub REAL, droits réels, état/version/relecture vérifiables |
| Créer branche documentaire | Effet distant réel sur dépôt de recette éligible et preuve de ref |
| Publier/committer fichier documentaire | Commit distant réel observé, révision D4 corrélée, idempotence |
| Ouvrir PR | PR réelle, cible/base/numéro vérifiables |
| **Merge si inclus dans le lot livré** | Fusion GitHub REAL possible et prouvée sur PR éligible, refus correct des protections/conflits |
| Reprise Nora | Résultat réel restitué dans le fil, sans deuxième action technique du Pilote |

Le déploiement ne peut annoncer une capacité READY si la configuration ou le fournisseur l'interdit globalement. Un test de préflight doit vérifier identité GitHub App, autorisations, capacité REAL effective, dépôt sandbox, branche éligible et observabilité D8. Les restrictions de branches et permissions sont des **contrôles permanents**, pas des flags à désactiver pour tester. Un STOP d'urgence et un rollback restent possibles et traçables.

### 7.3 Écart AS-IS critique

Sur le code actuel :

- `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary` est requis pour les mutations documentaires REAL ;
- `mergePullRequest` est **hard-blocked** sans condition ;
- le fournisseur est limité par `allowedFullName` ;
- Nora n'est pas encore capable de conduire toute opération Git REAL du périmètre cible depuis une demande simple.

**TO-BE :** faire évoluer le contrôle de déploiement pour qu'une RECETTE candidate démarre avec les capacités livrées réellement actives ; implémenter et prouver le merge **si le lot l'annonce**. Tant que ce n'est pas fait, la recette de ces capacités est **NOT READY**, et non « disponible après activation à la demande ».

Il s'agit d'un contrat futur : aucune variable, protection ou code n'est modifié par ce document.

## 8. Services/APIs candidats et propriétés

Les routes suivantes sont des interfaces de conception et **non des endpoints déjà livrés**, sauf mention de réemploi explicite.

| Interface | État | Responsabilité |
|---|---|---|
| `GET /api/integrations/status` et gestion GitHub | Réemploi | D9 — connexion/permissions |
| `GET/POST/DELETE /api/projects/{projectId}/git/links` | Réemploi | D9 — associations du projet |
| `GET /api/projects/{projectId}/git/sources` | Réemploi | D9 — sources autorisées |
| `GET /api/projects/{projectId}/git/refs` | Réemploi avec extension éventuelle | D9 — branches |
| `GET /api/projects/{projectId}/git/file` | Réemploi | D9 — fichier à ref exacte |
| `GET /api/projects/{projectId}/git/tree` | **Candidat nouveau** | D9 — entrées de répertoire, ref, path, limite, provenance |
| `GET /api/projects/{projectId}/git/publications` | **Candidat nouveau** | D4/D7 — projection des publications existantes du projet |
| Contrats de mission Nora/Git | Extension des propriétaires existants | D3 conduit, D6 décide, D7 exécute, D9 effectue, D8 observe |

### 8.1 Entrées/sorties de lecture

Le listing Git reçoit un `repositoryId` rattaché, une `ref` autorisée et un `path` normalisé. Il retourne des entrées dossier/fichier typées, un état de complétude/limite et, lorsqu'elle est obtenue, une résolution vers commit exact. Il n'invente ni SHA, ni taille, ni auteur/date de dernière modification.

La lecture d'un fichier conserve des états différenciés (AVAILABLE, FILE_ABSENT sous ref vérifiée, DENIED, REF_UNRESOLVED, AMBIGUOUS, UNAVAILABLE). Les 404 ambigus ne signifient jamais autorisation de créer un fichier. Toute donnée Git externe est traitée comme contenu non fiable.

### 8.2 Modèle et données

Réutiliser `integration_authorizations`, `authorized_repositories`, `project_git_links`, `documents`, `document_revisions`, `document_publication_refs`, `effect_attempts`, `human_decisions` et `observed_git_facts`, sous réserve d'examen du modèle courant avant construction.

Ne pas créer d'index documentaire concurrent, de synchronisation périodique ni de préférence durable de branche par défaut du projet sans résultat utilisateur démontré.

## 9. Gestion des refus, erreurs et reprise

| Cas | Contrat |
|---|---|
| Aucun dépôt | L'espace projet reste pleinement utilisable ; rattachement facultatif |
| Dépôt détaché ou GitHub déconnecté | Lecture suspendue ; documents Studio et histoire des publications conservés |
| Droits révoqués / dépôt invisible | Aucune fuite de contenu ou de nom non autorisé ; état réel qualifié |
| Plus d'une cible documentaire sans sélection fiable | Nora demande le seul choix bloquant, sans mutation |
| Branche non fusionnée | Consultation permise avec droits REAL ; n'est pas présentée comme `main` |
| Branche supprimée / fichier absent / fichier binaire | État spécifique ; pas de vue ou URL fictive |
| Ref modifiée après lecture | Requalification du HEAD au besoin ; lien/permalien cohérent |
| Diff/base/fingerprint divergents | Aucun dispatch ; requalification/clarification ciblée |
| Échec fournisseur explicite | Nora restitue échec, ne prétend pas à un succès |
| Timeout ou retour ambigu après mutation | D7 réconcilie avant tout retry ; pas de double commit/PR/merge |
| PR ouverte, merge refusé ou non exécuté | Statuts distincts ; pas de fusion présumée |
| Interruption avant restitution Nora | Reprise sur faits propriétaires existants, message idempotent si mécanisme disponible |
| Capacité REAL désactivée au déploiement RECETTE | **NOT READY** pour cette capacité, stop avant ouverture de la recette |

## 10. Matrice d'écart AS-IS → TO-BE

| Ensemble | Ce qui est réutilisable | À construire / adapter | Risque principal |
|---|---|---|---|
| Connexion et multi-dépôts projet | D9 auth, liens, retrait | Convergence Figma, tests d'accès et généralisation fournisseur REAL | Allowed repo mono-cible |
| Choix de branche | refs D9 | Sélecteur dynamique, limite/search, gestion de currentness | État fichier périmé |
| Explorateur | `readGitFile` | Listing dossiers D9, UI arborescence, erreurs/limites | Chemins et droits |
| Aperçu/infos | Visionneuse Travail, Markdown | Composition Dépôts Git, provenance et agrandi | Régression UX ; URLs incorrectes |
| Publications Studio | Tables et effet D7 | Projection par projet, multi-dépôts, statut et indisponibilité | Confusion historique/current |
| Conduite Nora | `intent-conduction`, `mission-continuity`, D4/D7 | Qualification contextuelle, autorité conversationnelle, reprise et restitution Git complète | Double effet ou réponse prématurée |
| Mutations Git REAL | Branche/commit/PR documentaires bornés | Généralisation autorisée, préflight RECETTE permanent, merge REAL si livré | Permissions et protections |
| Preuves/gates | Journaux D7, faits D8 et tests historiques | Recette E08 navigateur + API/DB + GitHub REAL + Nora LIVE | Confusion scripted/REAL |

## 11. Acceptation fonctionnelle et preuve

### 11.1 Scénarios A — Consultation

| ID | Scénario et verdict attendu |
|---|---|
| A01 | Projet sans Git : Nora/Documents restent opérationnels |
| A02 | GitHub connecté : seuls les dépôts effectivement autorisés sont listés |
| A03 | Deux dépôts rattachés à un projet : aucune association globale à la session |
| A04 | Retrait d'un dépôt : autre lien et fichiers distants inchangés, preuves conservées |
| A05 | Changement de dépôt : contenu/arborescence anciens invalidés |
| A06 | Sélection `main` puis branche candidate non mergée : contenu réellement distinct si les branches diffèrent |
| A07 | Fichier Markdown consulté, infos et lien GitHub cohérents avec la référence |
| A08 | Vue 30/70, mode agrandi et réduction sans perte de contexte |
| A09 | Publications Studio de plusieurs dépôts sur le même projet ; statuts Git exacts |
| A10 | GitHub déconnecté : pas de lecture distante, historique et documents conservés |
| A11 | Ref supprimée, 404 ambigu, binary et permission denied : aucun contenu inventé |
| A12 | Responsive 1280 / 390, accessibilité clavier et conformité Figma pertinente |

### 11.2 Scénarios B — Nora, autorité et opérations

| ID | Scénario et verdict attendu |
|---|---|
| B01 | « Publie ce document sur une nouvelle branche » avec cible unique → mandat borné reconnu sans second clic |
| B02 | Deux dépôts sans cible contextualisée → Nora demande lequel, pas de mutation |
| B03 | Plan hors périmètre du mandat ou diff divergent → requalification avant effet |
| B04 | D4 crée/révise, D7 publie, D9 prouve, D3 reprend et restitue le résultat dans le fil |
| B05 | Branche + commit + PR REAL réellement créés en RECETTE lorsque ces capacités sont livrées |
| B06 | « Merge PR 675 » → opération distincte autorisée par D6 si déterminée, REAL si livrée et permise, refus prouvé sinon |
| B07 | Demande « publie » seule → **aucun merge implicite** |
| B08 | Échec Git, droits insuffisants ou branche protégée → Nora fournit une restitution exacte et actionnable |
| B09 | Interruption après effet mais avant restitution → reprise sans seconde mutation |
| B10 | Préflight RECETTE de toutes les capacités annoncées → pas de blocage par flag manuel ni de mock présenté comme REAL |

### 11.3 Niveaux non interchangeables

1. **DOCUMENTED** : ce contrat est écrit.
2. **VALIDATED SPEC** : Morris valide son contenu et ses arbitrages après revue.
3. **IMPLEMENTED** : le code correspondant est intégré dans la référence Git attendue.
4. **COVERAGE VERIFIED** : tests, CI et matrices de scénarios contrôlés.
5. **BEHAVIOR PROVEN** : captures runtime à viewport pertinent, parcours réels, GitHub REAL et Nora LIVE sur les scénarios demandés.
6. **ADOPTED** : promotion décidée distinctement après les gates de gouvernance.

Une preuve déterministe ne remplace jamais une preuve GitHub REAL ; une capture Figma ne prouve ni API ni sécurité ; une PR ouverte ne constitue pas un merge.

## 12. Contrats d'architecture et preuves à produire avant Cursor

À qualifier conjointement dans le macro-lot de construction :

- Blast radius : API, données, identité GitHub App, contrôle de dépôt, D3/D6/D7, UI, security, tests.
- Contrat d'énumération Git : profondeur, pagination, taille, limite des branches, résolution ref/commit, cache/invalidation.
- Multi-dépôts GitHub REAL : permissions par installation et par utilisateur, sans extension implicite de privilège.
- Mandat conversationnel : qui qualifie le message, quelle preuve utilisateur D6 stocke, comment l'empreinte lie le mandat au plan, quel événement relance D3.
- Merge REAL : protection des branches, identité exécutrice, refus, conflits, expectedHeadSha/expectedBaseSha, et observation effective.
- REST/API : formes de requêtes et réponses, auth, erreurs typées, idempotence, retries bornés.
- UI : extraction MCP Figma page 11, mapping nœuds → composants existants, captures et géométrie de référence.
- DEV/RECETTE : configurations séparées, dépôts sandbox, préflight réel, preuves reproductibles, rollback.
- Code/doc : tout changement du comportement doit mettre à jour la documentation technique actuelle dans **le même lot**.

## 13. Macro-lot et gates proposés

**Un objectif cohérent : « Accéder aux sources Git et publier via Nora en RECETTE réelle ».** Deux capacités complémentaires dans un macro-lot, avec intégration et vérifications communes.

**Capacité A — Consulter.** GitHub/associations/branches/arborescence/visionneuse/publications/erreurs, avec preuve Figma ↔ navigateur ↔ GitHub REAL READ.

**Capacité B — Agir avec Nora.** Qualification, autorité conversationnelle D6, opérations D7/D9 couvertes, restitution D3 et preuves D8 ; tests de concurrence, reprise, refus, et REAL write/merge selon périmètre livré.

Ordre possible : preuve de consultation et contrats de ressources puis conduite et effets conversationnels ; ne pas découper code, tests et documentation de façon artificielle. Le lot n'autorise ni module redondant ni migration sans besoin.

**Gates :**
- Morris valide le présent contenu pour passer à **VALIDATED SPEC**, avec arbitrages fins si nécessaires.
- Pré-check Git/branche/HEAD et architecture courante.
- Contrat de construction Cursor selon SFIA v2.6, distinct du GO de publication documentaire.
- Tests de propriété, sécurité, D6/D7/D8 ; non-régression D4 et Nora.
- Mise à disposition RECETTE seulement avec préflight et capacités annoncées **REAL ON**.
- Réception par Morris, puis PR/merge, promotion ou adoption sous GO distinct.

## 14. Arbitrages résiduels et points de STOP

| Point | Position candidate | Gate / STOP |
|---|---|---|
| Mandat conversationnel | Une demande explicite peut suffire quand le plan concret reste dans sa portée ; pas de confirmation systématique | Si changement matériel d'enveloppe, clarification avant effet |
| Merge | Séquence distincte, demande explicite pouvant être le mandat ; REAL disponible lorsqu'annoncé livré en RECETTE | Bloqué tant qu'il est absent du fournisseur REAL ou non qualifié |
| Références de branche | Branches distantes accessibles, pas de branche locale | Impossible d'utiliser une ref non existante |
| Publications Studio | Liste de **tout le projet** et non du seul dépôt actif | Alignement final Figma 11.04 à qualifier |
| Path documentaire implicite | Déduction seulement si déterminable sans ambiguïté et bornée au mandat | Sinon clarification ciblée |
| D3↔D7 reprise | Réemploi de la mission actuelle, pas de nouveau scheduler | Preuve d'absence de double effet |
| Disponibilité RECETTE | Activée par livraison et vérifiée au préflight ; pas d'activation par essai | Si REAL unavailable → **NOT READY**, pas de recette factice |
| Autorité documentaire | Ce document candidat est publié pour revue, sans force normative définitive | Approbation de contenu Morris avant VALIDATED SPEC |

## 15. Verdict et suite immédiate

**État de cette contribution : DOCUMENTED — CONTRACT CANDIDATE.**

La trajectoire est techniquement plausible avec un noyau existant substantiel. L'architecture actuelle est déjà organisée autour de D3, des propriétaires, de la continuation de mission et d'une chaîne de publication documentaire gouvernée ; l'enjeu est de **compléter et éprouver**, non de reconstruire Nora.

**Écarts les plus structurants :**
1. Mutation Git REAL multi-dépôts et merge REAL (hard-blocked actuellement).
2. Autorité conversationnelle D6 liée au plan et à la demande utilisateur sans confirmation répétitive.
3. Continuité effective D3 de la mission Git, preuve de restitution et de reprise.
4. Listing des répertoires, publications Studio et expérience de consultation conformes à Figma 11.

**Suite :** revue Morris du contrat, synchronisation du dernier libellé Figma 11.04, qualification technique et contrat Cursor borné. **Aucun GO code, PR, merge, déploiement RECETTE, STABLE, ML5 global ou ADOPTED** n'est inféré de ce document.

---

## 16. Traçabilité code et preuves

Principaux chemins examinés sous `web/src/` :

- `domains/conversation/nora-adapter.ts` — guidance et outils Nora lecture, sans write Git direct.
- `domains/conversation/service.ts` — qualification, effet D4, suivi publication et continuation cognitive.
- `domains/conversation/intent-conduction.ts` — contrats de capacités et continuation transversale.
- `domains/conversation/mission-continuity.ts` — préparation publication, `AWAITING_PILOT_AUTH`, reprise après autorisation, réconciliation et restitution.
- `domains/integrations/authorization-service.ts`, `project-link-service.ts`, `resource-service.ts`, `github-provider.ts`, `real-github-provider.ts` — fournisseur, permissions, liens, refs et REAL.
- `domains/execution/effect-service.ts` — plan, fingerprint, HumanDecision, effet et réconciliation.
- `components/integrations/IntegrationsPanel.tsx`, `PublicationInspectionPanel.tsx` — UI historique non cible de conduite Git.
- `components/figma/TravailViewer.tsx` — visionneuse à réutiliser.
- `db/schema.ts` — données de publication et faits.
- `construction/ml4-integration-git/` — preuves historiques, sans prétention à la couverture E08.

**Provenance de l'AS-IS :** `main@fd04888b8dbf8d9393098d82546076e85b812bb1`, non-équivalent à une inspection du runtime local. **Vérité de la cible UX :** Figma page 11 approuvée dans l'échange, à figer par extraction MCP au gate technique.

*Fin — Contrat fonctionnel candidat v0.2.*

```

## CREATE `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/contrat-architecture-et-acceptation-candidat.md`

```
# SFIA Studio Next — Ensemble 08
## Contrat d'architecture et d'acceptation — Dépôts Git, publications et conduite de Nora

| Champ | Qualification |
| --- | --- |
| Version | **v0.1 — 21 novembre 2026** |
| État de ce document | **DOCUMENTED — ARCHITECTURE / ACCEPTANCE CANDIDATE — REVIEW REQUIRED** |
| Nature | Proposition d'architecture de construction et d'acceptation à soumettre à Morris ; **aucune autorité normative nouvelle par publication** |
| Programme | SFIA Studio Next — R5 / ML4D / Ensemble 08 |
| Résultat Pilote | Consulter Git dans le projet ; demander à Nora les opérations Git prévues ; recevoir leur résultat vérifié dans la même conversation |
| Source fonctionnelle | [Contrat fonctionnel E08 v0.2 candidat](../../conception-fonctionnelle/contrat-fonctionnel-depots-git-et-conduite-nora-candidat.md) |
| Référence visuelle | [Figma page 11 — Ensemble 08](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1092-116), avec réemploi Travail page 05 |
| Dépôt | `mcleland147/sfia-workspace` — `projects/sfia-studio-next/` |
| Baseline de code examinée | `main@1dd1a8ec738edb7851e2ec290769082035c1b657`, code déjà présent à `fd04888b8dbf8d9393098d82546076e85b812bb1` |
| Branche documentaire E08 | `docs/next-ensemble08-contrat-fonctionnel-20261121`, initialement `94cddf918d9481cb66c3418715e4df3bb87a41ae` |
| Dérive Git connue au pré-check | Branche E08 : **ahead 1 / behind 3** par rapport à `main` avant ajout du présent document ; **aucun rebase/merge autorisé** |
| Git local Cursor / runtime DEV–RECETTE | **NON OBSERVÉS** |
| Publication | GO Morris borné à ce document candidat sur la branche E08 existante ; **sans GO code, DB, CI, PR, merge ou promotion** |

> **Contrat d'évaluation.** Morris valide la valeur métier, l'expérience Pilote et les arbitrages structurants ; ChatGPT apporte l'analyse et challenge les choix ; Cursor devra vérifier l'exécutabilité technique, les effets et les preuves sous mandat SFIA v2.6. Le présent candidat ne modifie ni le SEF, ni un ADR, ni la spécification R2 déjà approuvée, ni la politique ENV-01. En cas d'incompatibilité normative, appliquer un **STOP de conception** jusqu'à décision Morris D2, pas une correction implicite de doctrine.

---

## 0. Synthèse exécutable pour la revue

### 0.1 Les cinq résultats non négociables

1. **Git facultatif** : le projet, Nora et les Documents fonctionnent sans connexion GitHub ni dépôt.
2. **Consultation légère** : un projet rattache 0..N dépôts accessibles ; le Pilote choisit dépôt et branche, parcourt les dossiers et lit un fichier dans une visionneuse 30/70 ; la sélection de branche accepte les refs distantes non mergées. Les publications Studio sont retrouvables à l'échelle **du projet entier**.
3. **Nora comme interface des opérations** : aucune succession de boutons « préparer / inspecter / autoriser / publier / demander fusion » dans l'espace Git ; les demandes de branche, publication, commit distant, PR et merge passent par **la conversation**, et les résultats y reviennent.
4. **Autorité proportionnée et opposable** : une demande explicite et déterminée du Pilote peut suffire comme acte de mandat après qualification serveur ; le modèle ne crée jamais de HumanDecision. Clarifier seulement l'ambiguïté qui empêche un effet sûr ; les contrôles D6/D7/D9 ne sont jamais désactivés.
5. **RECETTE utilisable en REAL** : si une capacité Git est annoncée livrée au Pilote en RECETTE, elle fonctionne en GitHub REAL dès la mise à disposition sur sandbox autorisée, avec sa configuration durable ; **pas d'activation par essai**. Si le merge est inclus, il doit être réellement disponible et prouvé sur PR éligible. Sinon : **NOT READY**, non pas « à activer à la demande ».

### 0.2 Verdict AS-IS

Les fondations existantes sont significatives : D9 sait gérer GitHub App, les permissions, les liens multi-dépôts, les références et les fichiers ; D4/D7 conservent les publications ; D3 possède une qualification sémantique et des mécanismes de conduite/reprise de mission ; D6 stocke les mandats ; D7 sait préparer, autoriser et réconcilier des publications documentaires.

**Écarts centraux :** pas d'arborescence de dossiers ; fournisseur REAL encore limité à un dépôt configuré ; pas de projection « Publications Studio » de projet ; surface Git actuelle tournée vers l'inspection technique ; demande Nora Git qui attend une autorisation supplémentaire ; merge REAL toujours hard-blocked ; reprise Nora encore bornée aux cas et événements connus. **Aucune de ces lacunes n'autorise une nouvelle architecture parallèle.**

### 0.3 Un macro-lot cohérent, deux résultats intégrés

- **Lecture et consultation** : UX projet Git, branches, arborescence, prévisualisation et publications.
- **Opérations gouvernées via Nora** : qualification contextuelle, autorité, écriture documentaire REAL, PR/merge autorisés et restitution.

Code, tests, documentation, sécurité et recette sont intégrés au **même contrat de livraison** ; des sous-travaux peuvent être parallélisés seulement sur interfaces stabilisées, avec intégration et preuves communes.

---

## 1. Sources opposables, hiérarchie et pré-check

### 1.1 Hiérarchie appliquée

1. **Git et preuves primaires** au bon SHA, avec distinction `main`/branche candidate et local NON OBSERVÉ.
2. Décisions et sources normatives validées Morris.
3. Spécifications fonctionnelles R2, architecture R4, politique ENV-01, méthode SEF et Figma applicable.
4. Présent contrat E08 candidat, arbitré seulement après revue.
5. Hypothèses techniques explicitement marquées.

### 1.2 Sources lues sur Git

Chemins relatifs à `projects/sfia-studio-next/` :

| Source | Usage dans le présent contrat |
| --- | --- |
| `governance/SEF.md` v0.2 | Macro-lot, niveau de preuve, rôles, contribution Git §10 et gates |
| `governance/roadmap.md` | Sortie E07, prochaine capacité E08, Gate C encore OPEN ; aucune adoption |
| `governance/product-naming-conventions.md` | Un nom par responsabilité, sans héritage des identifiants de chantier dans les composants permanents |
| `governance/decisions/2026-11-07-ml4-git-publication-ml5-cursor-trajectoire.md` | Écritures Git documentaires natives ML4, merge distinctement autorisé, ML5 technique Cursor séparé |
| `governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md` | Convergence fonctionnelle/UX, propriété de domaine, preuves, Gate C |
| `governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md` | Nora qualifie sémantiquement, pas de routeur lexical métier ni d'autorité créée par le modèle |
| `conception-fonctionnelle/integration-git-gouvernee.md` | RG-GIT / PF-GIT R2 et frontières Git facultatif / identité / ref / merge |
| `conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md` | Mandat D6, restrictions, source utilisateur et changements matériels |
| `conception-fonctionnelle/realisation-operationnelle-gouvernee.md` | Une seule tentative/exécution D7, reprise, STOP et retour |
| `architecture-technique/cadrage-r4.md` | Architecture modulaire, domaines propriétaires, pas de nouveau moteur |
| `governance/environnements-recette-et-promotions.md` (**ENV-01 validée**) | DEV/RECETTE/STABLE, sandbox externe, SHA/build, isolation, préflight, gate Morris |
| `ux-ui/methodologie-contrat-figma-cursor.md` v1.1 | Extraction Figma native, manifeste de transposition, preuves géométriques et comportementales |
| `construction/ml4-integration-git/specification-technique.md` | Capitalisation des restrictions documentaire REAL et de l'ordre publication |

**Sources fonctionnelles E08** : contrat v0.2 sur branche candidate ; échanges de revue des écrans Figma 11.01–07, 11.13–16, sélecteur de branche 11.03 et suppression des écrans de workflow technique 11.08–12.

### 1.3 Position temporelle et blast radius

À la lecture : `main@1dd1a8ec...` a intégré une clôture documentaire E07 depuis `fd04888b...`. La branche E08 est **divergente** ; son document fonctionnel n'est pas sur `main`. Le pré-check de construction devra relire `main`, les fichiers applicables et l'état local Cursor, puis décider la base technique sous GO Morris ; **pas de rebase ni de création de PR implicite ici**.

Blast radius potentiel : interfaces D9, jetons GitHub App, routes API Git, type de données d'état de lecture, projection UI, tables existantes D4/D6/D7/D8, qualification D3, permissions, protections branche, tests PG/Playwright/Vitest, secrets/config ENV-01 et contrat visuel.

---

## 2. Architecture AS-IS — inventaire vérifiable

**Vérité observée : présence de code sur Git ; ni processus local, ni schéma PostgreSQL effectivement migré, ni GitHub LIVE de l'environnement courant n'ont été observés pendant cette analyse.**

| Propriété | Code existant | État au regard de l'E08 |
| --- | --- | --- |
| Identité et GitHub App | `domains/integrations/authorization-service.ts`, `github-app-user-oauth.ts`, `github-app-config.ts` | IMPLEMENTED code ; identité Pilote/session ≠ installation/permissions repo |
| Lien projet / dépôt 0..N | `domains/integrations/project-link-service.ts` | IMPLEMENTED code, attach et detach ; histoire conservée |
| Résolution dépôt/ref/fichier | `domains/integrations/resource-service.ts` | IMPLEMENTED code ; refs bornées à 40 ; `readGitFile` et provenance |
| Port fournisseur | `domains/integrations/github-provider.ts` | Interfaces read, createBranch, putFileContents, createPullRequest, mergePullRequest |
| GitHub REAL | `domains/integrations/real-github-provider.ts` | REAL lecture/écriture documentaire conditionnelle, **allowlist mono-dépôt**, merge REAL hard-blocked |
| Identité de lane GitHub | `domains/integrations/github-app-config.ts` | Profils DEV/RECETTE existants avec `allowedFullName` de sandbox ; généralisation multi-dépôts non acquise |
| Bibliothèque D4 | `domains/document/service.ts`, `db/schema.ts` | Documents/révisions existants ; aucune synchronisation bidirectionnelle permanente Git |
| Publications persistées | `db/schema.ts` : `documentPublicationRefs`, `effectAttempts`, `observedGitFacts` | Base de projection exploitable, **API de liste projet E08 non identifiée** |
| Autorité D6 | `domains/execution/effect-service.ts`, `effect-authority.ts` | HumanDecision et empreinte d'inspection ; chemin actuel attend autorisation explicite après préparation |
| Exécution D7 | `effect-service.ts`, `publication-steps.ts` | Préparation, transitions, dispatch, réconciliation, maintien des distinctions de faits |
| Qualification sémantique | `domains/conversation/semantic-qualification.ts`, `nora-adapter.ts` | Intents structurés, Nora n'obtient **aucun outil d'écriture Git direct** |
| Conduite / reprise Nora | `domains/conversation/intent-conduction.ts`, `mission-continuity.ts`, `service.ts` | D3 réutilisable ; suite D4, attente D6, reprise post-autorisation et restitution, limitée aux missions prises en charge |
| UI projet | `app/projects/[projectId]/page.tsx` | Git affiche actuellement `PublicationInspectionPanel`, **non conforme à la visionneuse E08** |
| UI Git technique actuelle | `components/integrations/PublicationInspectionPanel.tsx` | Préparer, autoriser, dispatch, merge : doit **cesser d'être la surface utilisateur Git** |
| Visionneuse existante | `components/figma/TravailViewer.tsx`, `SafeMarkdown` | Déjà réutilisable ; éviter réécriture complète |
| UI connexion personnelle | `components/integrations/IntegrationsPanel.tsx` | Présente ; adaptation limitée à la cible de la page 11 |

### 2.1 Écarts précis confirmés

- `resource-service.ts` ne fournit pas un listing de **répertoire** utilisateur à la demande.
- `github-provider.ts` n'expose pas encore de contrat `listDirectory`/`listTree`.
- `real-github-provider.ts` impose `allowedFullName` au lieu de l'ensemble vérifié des dépôts autorisés par App + acteur.
- `semantic-qualification.ts` connaît `d7.prepare_publication`/`d7.dispatch_publication` mais ne matérialise pas à lui seul un mandat D6 ni une autonomie générale des opérations Git.
- `mission-continuity.ts` impose un `targetPath` explicite à la préparation, refuse plusieurs liens sans choix et conserve `AWAITING_PILOT_AUTH`.
- `effect-service.ts` `authorizePublication` consomme `inspectedFingerprint` et enregistre D6 ; l'existence d'une phrase utilisateur ne produit **pas automatiquement** ce mandat.
- `effect-service.ts` `prepareMerge` exige actuellement une **publication Studio COMPLETED et `documentPublicationRefs` liée**, pas une PR GitHub quelconque.
- `real-github-provider.ts` `mergePullRequest` refuse systématiquement l'effet REAL.
- `app/projects/[projectId]/page.tsx` s'appuie sur le panneau technique actuel, non sur une arborescence de fichiers et publications.
- Les reprises Nora `recoverAuthorizedNoraMissions` portent sur les tentatives autorisées/dispatched à des événements nominaux ; ne pas déduire un worker universel.

**Attention à la portée :** le merge d'une **PR documentaire produite par Studio** est dans la trajectoire approuvée ML4. La demande naturelle « merge PR 675 » peut viser une **PR externe ou technique** : le code actuel ne sait pas la traiter comme équivalente. Ce cas doit être explicitement qualifié (§7.6), et non masqué derrière un libellé conversationnel identique.

---

## 3. TO-BE — responsabilités, flux et invariants

### 3.1 Un seul produit modulaire ; pas neuf microservices

`D1–D9` représentent des **propriétaires fonctionnels**, pas des applications ou bases indépendantes. Le TO-BE s'inscrit dans l'architecture Next existante : composants Next.js/React, routes serveur, services de domaines, DB PostgreSQL/Drizzle, adaptateurs GitHub App et moteur Nora existant.

**Contrat de lecture :**

`UI Dépôts Git → D1/session + D2/projet → D9/lien et droits actuels → GitHub ref/tree/file → provenance D9 → visionneuse réutilisée.`

**Contrat d'effet Git :**

`USER Pilote → D3/Nora qualification sémantique → D4/révision si nécessaire → D7/plan/fingerprint → D6/mandat lié à l'acte USER → D7/dispatch → D9/GitHub REAL → D8/faits → D3/reprise et restitution → Pilote.`

La préparation n'est pas un effet, un droit Git ne vaut pas autorisation, un modèle ne forge pas de décision, une PR ouverte ne vaut pas merge, une instruction de Nora n'est pas la preuve GitHub.

### 3.2 Contrats propriétaires de frontière

| Domaine | Possède | Fournit / refuse |
| --- | --- | --- |
| D1 | Session, identité Pilote | Contrôle session et isolation ; pas de partage du token Git à Nora |
| D2 | Projet courant, existence et accès | Vérification projet avant toute ressource Git |
| D3 | Intention, dépendances, question ciblée, état de mission conversationnel | Ne remplace pas D6/D7 et n'affirme aucun fait non retourné |
| D4 | Document, révision, provenance Studio | Fournit version exacte à publier, liens de publication historiques |
| D6 | HumanDecision et restrictions opposables | Accepte/refuse un acte USER authentifié et borné, jamais une conclusion du modèle |
| D7 | Plan stable, empreinte, tentative, idempotence, dispatch, réconciliation | Conduit la mutation, bloque changement de scope, assure reprise effect-bound |
| D8 | Qualification de preuve et résultat | Faits indépendants de la prose Nora, aucun verdict adoption induit |
| D9 | Installation GitHub, acteurs/droits, refs/fichiers, effets distants | Refuse hors dépôt/branche/permission/contrat ; observe commit, PR, merge séparément |

### 3.3 Invariants à préserver

1. Connexion GitHub personnelle ≠ rattachement de dépôt à un projet ≠ permission de lecture ≠ mandat d'écriture.
2. Deux projets partageant un dépôt ne partagent ni décision, ni conversation, ni effet, ni adoption.
3. Aucun dépôt global ni branche universelle obligatoire ; la branche par défaut est **une initialisation de navigation**, pas une cible de publication sans décision.
4. Lecture Git sous droits courants ; retrait ou révocation bloque **les nouvelles lectures** et conserve les références historiques minimales autorisées.
5. Fichier/revision D4 immuable au point de préparation ; plan et effets protégés contre TOCTOU.
6. Branche candidate/non mergée affichée comme candidate et jamais comme `main`.
7. Blob SHA et commit SHA distincts ; lien permanent construit sur commit vérifié seulement.
8. Une demande user claire peut être mandat, mais **seul D6** enregistre la décision depuis l'acte authentifié.
9. Pas d'effet nouveau en cas de `UNKNOWN`/`AMBIGUOUS` avant réconciliation ; pas de force push ni retry créateur aveugle.
10. Pas de mutation via Dépôts Git ; pas de second runner Git, ni de contrat de micro-cycle documentaire.
11. RECETTE Git REAL utilisable pour chaque capacité annoncée livrée ; permission/règles de branche restent opposables.
12. Conception ≠ code ≠ test ≠ observation REAL ≠ GO de merge Git de ce programme ≠ adoption.

---

## 4. Architecture de lecture D9 : dépôt, branche, arborescence, fichier

### 4.1 Réemploi et extension la plus simple

Conserver `listProjectGitLinks`, `listProjectGitSources`, `listGitRefs`, `readGitFile`. Ajouter **un contrat de découverte de répertoire** sous `domains/integrations` et l'opération correspondante au port `GitHubProvider`. Exposer une route projet à lecture seule, candidate :

`GET /api/projects/{projectId}/git/tree?repositoryId=…&ref=…&path=…`

La forme définitive peut être adaptée par Cursor après vérification du routage et tests, **sans créer une seconde voie d'accès Git**.

### 4.2 Contrat de listing proposé

**Entrées** : `pilotId` serveur ; `projectId` serveur ; `repositoryId` rattaché ; `ref` explicitement choisie ; `path` relatif normalisé (racine possible).

**Préconditions** : session valide, propriétaire projet, lien ATTACHED, autorisation Git CONNECTED, dépôt ACTIVE, fournisseur adapté, ref réellement accessible, absence de traversée de path, contrôle de charge et permissions actuelles.

**Sortie candidate** :

| Champ | Sens |
| --- | --- |
| `repositoryId` / `repositoryFullName` | Dépôt réellement utilisé |
| `requestedRef` | Ref demandée par le Pilote |
| `resolvedCommitSha?` / `verified` | Commit fiable si résolu, jamais un blob maquillé |
| `directoryPath` | Chemin normalisé interrogé |
| `entries[]` | `name/path/type` (directory/file/symlink/submodule/unsupported), taille ou SHA **si observés** |
| `truncated` / `limitReason` | Complétude vérifiable ; ne jamais tronquer silencieusement |
| `readState` | `AVAILABLE`, `DENIED`, `REF_UNRESOLVED`, `AMBIGUOUS`, `UNAVAILABLE`… |
| `observedAt` | Horodatage de réponse lorsqu'établi |

**Choix technique recommandé** : chargement d'un répertoire **à la demande** via GitHub Contents API (paramètre `ref`), ou Git Trees non récursif si meilleur après mesure et compatibilité. **Ne pas** récupérer systématiquement l'arborescence entière. Si Git Trees récursif est choisi, traiter son marqueur `truncated` et ses limites fournisseur comme un résultat partiel, jamais comme un dossier complet. Documentation fournisseur : [Contents API](https://docs.github.com/en/rest/repos/contents), [Git Trees API](https://docs.github.com/en/rest/git/trees).

**Sécurité** : ne pas permettre au navigateur de choisir token, installation, acteur ou fullName arbitraire ; journaliser métadonnées expurgées et codes de refus, sans contenu Git privé ni secrets. Les README et fichiers sont données non fiables ; rendu sûr.

### 4.3 Cohérence de branche

Le sélecteur Figma 11.03 charge d'abord la branche par défaut réellement retournée, puis autorise toute branche distante accessible, y compris non mergée. Changer de dépôt ou de branche :

1. invalide la sélection de fichier et les requêtes en vol de l'ancien contexte ;
2. qualifie la nouvelle ref et recharge la racine ;
3. affiche l'arborescence et le fichier de la **même ref** ;
4. reconstruit les détails et le lien externe sur le commit de lecture vérifié ;
5. expose « branche/ref inaccessible ou supprimée » sans basculer silencieusement sur `main`.

La liste actuelle `MAX_REFS=40` ne doit pas masquer des branches : proposer un sélecteur avec recherche/chargement borné et un état « résultats limités » si le fournisseur ne livre pas tout.

### 4.4 Fichier, rendu et provenance

Réutiliser `readGitFile` et sa distinction `FILE_ABSENT_AT_VERIFIED_REF` / `REF_UNRESOLVED` / `READ_NOT_FOUND_UNQUALIFIED`. Fichier Markdown → `SafeMarkdown` ; texte brut → rendu sûr, conservant les retours ligne ; binaire ou trop volumineux → état explicite. Ne pas rendre le contenu distant comme HTML non fiable, ni autoriser édition/commit via viewer.

**Informations** : nom, chemin, ref, dépôt, éventuel commit vérifié, blob SHA et taille **si retournés**. Les données absentes restent absentes : aucun auteur, date, taille ou URL inventés.

**Lien GitHub** : en-tête permanent ; privilégier `permalinkOrNull` / SHA commit vérifié. Un lien externe au HEAD mutable peut être présenté comme tel uniquement si la qualification est honnête ; jamais comme preuve exacte du contenu visualisé.

### 4.5 Contrat de concurrence UI

Les requêtes lecture A→B/branche X→Y ne doivent jamais réafficher A après la sélection de B. Réutiliser les protections existantes de la visionneuse Travail (séquence/neutralisation des retours tardifs), en les isolant au contexte Git. Une lecture refusée après retrait de dépôt n'utilise aucun ancien cache privé à la place.

---

## 5. D4/D7/D8 : Publications Studio, historique et preuve

### 5.1 Une projection métier sans nouvel index

La liste des publications utilise prioritairement `documentPublicationRefs` et les tables existantes `documents`, `documentRevisions`, `effectAttempts`, `observedGitFacts`. **Pas de `GitPublicationIndex` persistant concurrent par défaut**.

Route **candidate** :

`GET /api/projects/{projectId}/git/publications`

Ce chemin peut coexister avec les routes actuelles `/git/publications/prepare` et `/[attemptId]/*` ; vérifier son intégration Next.js avant choix définitif.

**Chaque entrée** relie : projet/Pilote, document D4, révision source, dépôt, branche publication, branche cible, chemin, commit observé, PR éventuelle, statut/faits et disponibilité actuelle éventuelle.

### 5.2 Statuts et currentness

- « Publié sur branche candidate » ≠ « sur main ».
- `COMPLETED` d'une tentative de publication ne vaut pas `MERGED`.
- Une PR `OPEN` ne vaut pas intégration.
- Un dépôt retiré ou révoqué laisse un fait historique ; la consultation actuelle peut être refusée.
- Le libellé « fusion vérifiée » ne doit apparaître qu'après observation distante et corrélation suffisante.

**Contrat UX 11.04** : cette liste est **transversale au projet et aux dépôts**, et l'en-tête doit le dire. Le dépôt actif du volet Fichiers n'en limite pas implicitement la liste. Un filtre facultatif n'est admissible que s'il est explicite.

### 5.3 Source de vérité

D9 observe commit et PR, D7 les rattache à l'effet, D4 à la révision, D8 qualifie les preuves. La restitution Nora consomme ces faits ; elle n'écrit pas un statut parallèle de publication qui ferait foi.

---

## 6. D3 → D6 → D7 : conduite conversationnelle sans cockpit

### 6.1 Réutiliser la conduite sémantique validée

Conserver le chemin de `semantic-qualification.ts` / `intent-conduction.ts` / `service.ts` / `mission-continuity.ts`. Le schéma sémantique courant connaît les capacités de publication ; **ses sorties ne sont pas des permissions**. Respecter la décision `SEM-01..08` :

- Nora comprend la demande et le contexte, y compris négation, formulations variées, plusieurs intentions et dépendances ;
- les règles syntaxiques pour branches/paths restent **des validateurs techniques**, jamais le moteur de détection métier ;
- la qualification durable utilisée pour exécuter ne doit pas être remplacée librement par une nouvelle interprétation lors d'une reprise ;
- pas de routeur de mots-clés métier ajouté, même en fallback silencieux.

### 6.2 Distinguer trois objets

1. **Acte du Pilote** : message USER authentifié, corrélé à session/projet/conversation et à une intention d'effet explicite. **Seul cet acte** peut fonder une autorisation.
2. **Plan D7** : résolution déterministe des éléments : document/révision, dépôt, branche base/candidate, chemin, diff, opérations et empreinte, avec limites et currentness.
3. **HumanDecision D6** : mandat **enregistré côté serveur** qui atteste la portée de l'acte USER face au plan et à la permission courante ; le modèle n'a ni le droit de le créer ni de l'étendre.

**Proposition de mécanisme** : un service applicatif d'admission d'autorité relie un message USER vérifié à l'empreinte du plan préparé et appelle le propriétaire D6 existant. Il n'y a pas de « confirmation automatique par Nora ». La signature/liaison doit empêcher qu'une variation de cible, branche, révision ou diff soit autorisée à l'insu du Pilote.

Une phrase telle que « publie ce document sur une nouvelle branche du dépôt X et crée une PR vers main » peut couvrir ces étapes si le plan exact reste déterminable et **dans l'enveloppe de cette phrase**. Une simple sortie structurée du LLM `REQUEST_EFFECT` ne suffit jamais sans preuve de l'acte et vérifications D6/D7. Si le plan ajoute un acte non demandé, D6 refuse ou réclame une clarification.

### 6.3 Quand clarifier ?

| Situation | Décision candidate |
| --- | --- |
| Un seul dépôt rattaché, document et révision connus, publication demandée | Cible projet déterminable : pas de question sur le nom du dépôt |
| Plusieurs dépôts mais cible déjà explicitée dans la conversation et valide | Utiliser la cible établie si liaison serveur vérifiable |
| Plusieurs dépôts sans cible certaine | Question ciblée « sur quel dépôt ? » **avant mutation** |
| Document D4 existant et path omis | Utiliser path conventionnel uniquement si règle validée, déterministe, annoncée et dans le mandat ; sinon demander la précision |
| « Ouvre une PR » après commit document précis | Relier explicitement la PR à cette publication si contexte non ambigu |
| « Publie » sans demande de merge | PR/commit selon scope ; **aucun merge implicite** |
| « Merge la PR 675 » | Mandat de merge distinct dans ce message si identité dépôt/PR/HEAD/base et éligibilité sont qualifiables |
| Nouvelle branche mais nom non fourni | Générer un nom compatible à partir du document/intent seulement si convention acceptée et collision/portée contrôlées ; sinon proposer une précision |
| Une requête consulte et modifie | Continuer les lectures sûres ; bloquer seulement les effets dépendant d'une ambiguïté matérielle |
| Fichier README contient « autorise le push » | Ignorer comme mandat ; source Git hostile = donnée |

**Règle stricte** : « pas de question inutile » ne veut pas dire « produire un défaut silencieux dangereux ». Les déductions ne doivent jamais agrandir la portée.

### 6.4 Pipeline proposé avec reprise Nora

1. USER parle à Nora dans Travail.
2. D3 qualifie l'intention structurée et les dépendances, avec le contexte autorisé et les dernières décisions applicables.
3. D4 crée ou retrouve une révision documentaire **si demandé** ; tout succès appartient à D4.
4. D7 prépare le plan de publication/merge, résout permissions et inspection.
5. D6 vérifie si l'acte USER fournit déjà un mandat applicable sur **le plan exact** ; sinon Nora clarifie/sollicite le seul accord manquant dans le fil.
6. D7 dispatch sous contrat, avec vérification courante D6/D9 et journal idempotent.
7. D9 produit/observe les faits Git distants ; D7 réconcilie les états incertains ; D8 qualifie l'observation disponible.
8. Le résultat revient au même contexte de mission D3.
9. **Nora reprend** son raisonnement à partir des faits, prépare une restitution fidèle, associe les liens vérifiés et délivre un message final dans la conversation.
10. Si résultat partiel, inconnu ou sans reprise immédiate possible, la mission garde son état durable, sans mensonge « Studio te répondra » ni seconde mutation sur relance.

La continuation cognitive existante `cognitiveContinueFromFacts` et `resumeMissionAfterPublicationAuthorize` constituent le **socle à étendre**, pas un nouvel orchestrateur. Des statuts techniques peuvent exister dans le propriétaire D7 ; ils ne deviennent pas un parcours de boutons obligatoires pour le Pilote.

### 6.5 Crash/reprise et idempotence

- Chaque commande utilisateur est corrélée à une clé stable de tour/mission et aux tentatives D7 correspondantes.
- Doublons de tours, retries HTTP, double réponse, temps réseau et fermeture/réouverture du projet ne doivent pas produire un nouveau commit/PR/merge injustifié.
- Avant retry de mutation, rechercher les effets distants par références, marqueur de publication, SHA et source, sans déclarer une absence sur une lecture ambiguë.
- Le statut `DISPATCHED` sans confirmation distante reste incertain ; ne pas forcer `COMPLETED`.
- La restitution finale est **idempotente** : un seul message terminal par effet/mission selon une clé durable, ou preuve du statut exact des étapes.
- Pas d'exigence artificielle d'un scheduler global ; qualifier le mécanisme nominal existant, puis introduire une reprise supplémentaire uniquement si une panne/attente réelle l'exige.

### 6.6 PR documentaire Studio vs PR GitHub préexistante

**Trajectoire déjà approuvée** : publication d'un document Studio sur branche candidate, ouverture de PR correspondante, fusion distincte sur PR documentaire éligible.

**Extension possible de la demande utilisateur** : « merge la PR 675 » sans qu'elle provienne de Studio. Cette PR peut viser du code/CI et relever de ML5 ou d'un autre périmètre de risque. Le présent document **ne valide pas une autorisation générique de merge de toute PR** par simple rattachement du dépôt.

**Contrat à soumettre au gate Morris** :
- **dans le lot E08 nominal** : merges de PR documentaires associées à des tentatives Studio vérifiées ;
- **cas PR préexistante/non documentaire** : Nora doit comprendre la demande et expliquer la limite effective si hors contrat, sans bouton caché ni résultat fictif ; l'extension demande un **arbitrage explicite de portée/autorité** et les preuves D6/D7/D9 correspondantes.

Ce point est une **frontière de sécurité produit**, pas une impossibilité de converse avec Nora.

---

## 7. D9 / D6 / D7 : mutations Git REAL et merge testable

### 7.1 Contrat de disponibilité par environnement

| Lane | Obligations |
| --- | --- |
| **DEV** | L'intégrateur peut utiliser des ressources de test et activer les capacités documentaires REAL dans le cadre d'un mandat technique ; pas d'effet externe non autorisé |
| **RECETTE** | Le candidat livré est figé à son SHA/build ; pour **chaque capacité annoncée testable**, configuration GitHub REAL et permissions préparées, validées et **disponibles pendant la session** ; aucun changement manuel répétitif par opération |
| **STABLE** | N'est ni créée ni promue par le candidat ; disponibilité seulement après intégration, post-merge, sauvegarde/rollback et GO Morris distinct |

**ENV-01 reste opposable** : la RECETTE fait ses mutations réelles dans un **dépôt sandbox/compte autorisé isolé**, jamais dans `main` de ce chantier ni dans un dépôt de production. La politique autorise une mutation externe **bornée et gouvernée** de recette ; le besoin de Morris ne justifie pas un flag donnant accès universel ou l'abolition des protections.

La connexion OAuth personnelle, l'installation GitHub App, les capacités d'écriture et les permissions utilisateur sont à rendre vérifiables en préflight. Un refus par protections de branche reste un résultat métier légitime ; un blocage **global** du provider REAL sur une fonctionnalité vendue comme livrée est **NOT READY**.

### 7.2 Généraliser le multi-dépôts REAL sans ouvrir toutes les permissions

Écart : `GITHUB_APP_LANE_PROFILES` et `assertAllowedRepo`/`allowedFullName` sont actuellement bornés à un sandbox mono-dépôt. La relation projet accepte plusieurs dépôts, mais le fournisseur REAL ne les honore pas.

**Direction recommandée** :

- Résoudre dynamiquement l'ensemble des dépôts disponibles pour l'installation **et** l'identité utilisateur réelle, sans universel `allow all`.
- Vérifier la correspondance de l'installation, les permissions minimales par dépôt, le statut du compte et le lien explicite au projet.
- Garder des profils lane distincts et des allowlists d'environnement de **dépôts de test** si nécessaire ; une allowlist environnement n'est pas un dépôt principal métier.
- Relire permissions et autorisation à chaque opération à risque ; ne pas mettre de jeton dans les props UI/LLM, journaux ou rapport Cursor.
- Ne pas élargir implicitement les droits d'un projet lorsqu'un autre projet rattache le même dépôt.

Ce changement touche `github-app-config.ts`, `github-app-auth.ts`, `real-github-provider.ts` et les services d'autorisation ; **blast radius élevé et tests requis**.

### 7.3 Publication documentaire REAL

La séquence existante `CREATE_BRANCH → PUBLISH_FILE → OPEN_PR` est une base utile. L'API GitHub Contents crée un **commit distant**, pas un commit local suivi d'un push : la restitution Nora doit employer des termes exacts.

**TO-BE** : contrôler chemin et type documentaire, révision D4, base/head, empreinte, identité exécuteur, autorité D6, réponse incertaine et idempotence. Ne pas dériver vers un moteur générique de fichiers arbitraires ou de code technique en ML4.

### 7.4 Merge REAL — développement nécessaire si livré

Le fournisseur `real-github-provider.ts` **refuse** actuellement `mergePullRequest`. Le plan D7 sait préparer un merge documentaire avec `expectedHeadSha` et `expectedBaseSha` et une HumanDecision distincte.

**Contrat cible** :

1. Examiner la PR et son éligibilité actuelle, l'identité/permissions, les protections/checks et la branche de base.
2. Vérifier au point d'effet le mandat D6 **distinct du mandat de publication**, corrélé à PR, repository, head/base et plan.
3. Refuser si la PR/HEAD/base diffère matériellement de la version autorisée.
4. Utiliser l'API GitHub réelle de merge avec préconditions de SHA et méthode compatible avec le dépôt ; ne pas contourner les protections d'organisation ou forcer un merge.
5. Si retour ambigu/timeout : relire PR et branche de base avant retry ; constater merge SHA uniquement si réellement prouvé.
6. Alimenter D7, D8, la référence documentaire et la restitution Nora **sans assertion d'ADOPTED**.

L'API GitHub REST documente la précondition `sha` du head au merge ; voir [Pull requests / Merge](https://docs.github.com/en/rest/pulls/pulls). **Le mode exact et les codes de réponse à gérer doivent être confirmés par Cursor sur la version fournisseur en vigueur.**

### 7.5 Capacité REAL en RECETTE : préflight bloquant

Avant de déclarer la build prête :

- Lane RECETTE connue : SHA, tree, build, DB/migrations, URL/callback et session isolés ; aucun hot reload.
- GitHub App, installation, acteur, dépôt(s) sandbox et permissions GitHub testés avec le **compte effectif de recette**.
- Capacités annoncées : `read`, `createBranch`, `putFileContents`, `createPR` et `mergePR` **si incluse**, vérifiées contre le provider réel, sans mode SCRIPTED.
- Restrictions du projet, nom de branche, sécurité D6/D7, isolation et tokens actifs.
- Scénario de preuve REAL non destructif ou réversible **sur sandbox dédié**, avec cleanup borné et traçable ; pas sur repo applicatif.
- Observabilité D8 : traces et identifiants d'effet corrélés ; pas de secret.
- Si une capacité annoncée refuse globalement pour flag/code/permission : **NO-GO RECETTE de cette capacité** ; ne pas demander à Morris d'aller activer un flag.

Une indisponibilité soudaine du fournisseur/permissions durant une recette reste un incident à diagnostiquer, pas une preuve que la capacité était livrée en erreur.

---

## 8. UI et contrats Figma : transposer sans doublon

### 8.1 Source de structure

Figma page 11 : la direction artistique reprend les pages convergées 03/04/05/07/08/09/10, le shell projet (rail ~246 px), Inter, tokens, actions compactes et panneaux. Référence **mutable** : lors du build, extraire les nœuds et exporter les captures Figma avec horodatage/digests et manifesto selon la méthode v1.1.

Ne pas créer un second `TravailViewer` indépendant ni dupliquer le moteur Markdown ; distinguer **moteur de rendu réutilisé** et **composition 30/70 Git**.

### 8.2 Matrice écran → contrat applicatif

| Figma | Comportement/état | Owner UI / data | Preuve ciblée |
| --- | --- | --- | --- |
| **11.01** | Aucun dépôt : contexte explicatif et gestion du rattachement, Nora/D4 continuent | Projet + D9 | EMPTY, sans connexion |
| **11.02** | 0..N dépôts du projet, ajout/retrait/sélection ; déconnexion seulement dans Intégrations | D9 liens | Deux dépôts + retrait isolé |
| **11.03** | Dépôt et **branche** sélectionnables ; arbre dossier gauche, fichier droite, 30/70 | D9 tree/refs/file | Branche `main` puis candidate réelle non mergée |
| **11.04** | **Toutes** les publications du projet, multi-dépôts ; liste gauche, aperçu droite | D4/D7/D9 | Deux références vers deux repos, statuts distincts |
| **11.05** | Lecture agrandie centrale, **panneau de détails droit plus aéré** | Viewer + source metadata | Agrandir/réduire/détails stables |
| **11.06** | Connexion GitHub personnelle, liste autorisée, actualiser, déconnecter | D9 authorization | Statut réel et droits |
| **11.07** | Confirmation de déconnexion et impacts corrects | D9 authorization | Nouveaux accès refusés, histoire conservée |
| **11.13** | Confirmation retrait **du projet seulement** | D9 links | Aucun effet GitHub ni autre projet |
| **11.14** | Source absente/inaccessible, erreurs sourcées | D9 | Ref supprimée, droits révoqués |
| **11.15** | Desktop compact 1280 px | UI responsive | Contrôle composition et interactions |
| **11.16** | Mobile 390 px : liste puis visionneuse empilées | UI responsive | Pas de 30/70 illisible, navigation accessible |

**Toolbar 11.03/11.04** : `Infos` compact, `Ouvrir sur GitHub`, **icône vectorielle Agrandir** sans libellé, groupés en haut de la visionneuse ; pas d'action cachée à la fin d'un long fichier. Accessibilité : aria-label/tooltip sur icône, focus/activation clavier, retour/réduction prévisibles.

**Visionneuse Travail page 05** : déjà construite. En E08, seules l'ouverture d'un lien résultat dans cette visionneuse ou vers GitHub et l'intégration des références Nora sont à qualifier ; **pas de réinvention de l'écran Travail**.

### 8.3 Frontière visible

**Autorisé dans Dépôts Git** : consulter, sélectionner, rattacher, retirer avec confirmation, naviguer, agrandir, ouvrir GitHub.

**Exclu dans Dépôts Git** : préparer/inspecter un diff comme action obligatoire, autoriser publication, lancer commit, dispatcher PR ou cliquer « merge ». Supprimer/retirer du rendu nominal le panneau historique `PublicationInspectionPanel`, **sans supprimer les services D6/D7 qui lui étaient associés**.

**Nora** : la commande Git est exprimée dans le chat ; Nora restitue lien de branche/fichier/PR/merge **s'il a été observé**. Ouvrir ce lien peut aller sur GitHub ou déclencher la visionneuse Travail déjà existante. L'utilisateur ne doit pas aller chercher une commande technique dans l'espace Git.

### 8.4 Transposition G1–G5

- Extraire la page Figma native (structure, largeur, composants, variables, icônes, auto-layout, états).
- Produire manifeste nœud → composant actuel/nécessaire → responsabilité → preuve.
- Comparer aux mêmes viewports/états (notamment 1680/1280/390) et dates de référence ; aucun « pixel perfect » sur capture disparate.
- Prouver navigation, sélection de branche, lectures/erreurs, preview, ouverture GitHub, détails et responsive par Playwright + captures runtime.
- Aucun verdict de fidélité fort sans capture navigateur réelle ; Figma validé seul n'est pas G5.

---

## 9. Interfaces et données — propositions, pas nouvelle API normative

### 9.1 APIs à réutiliser

| Interface observée dans Next | Contrat |
| --- | --- |
| `GET /api/integrations/status` et routes GitHub correspondantes | Connexion, dépôts autorisés, refresh, déconnexion |
| `GET/POST /api/projects/{projectId}/git/links` | Lister et rattacher |
| `DELETE /api/projects/{projectId}/git/links/{linkId}` | Retirer sans supprimer source distante |
| `GET /api/projects/{projectId}/git/sources` | Dépôts réellement consultables |
| `GET /api/projects/{projectId}/git/refs` | Branches autorisées |
| `GET /api/projects/{projectId}/git/file` | Lecture d'une source à ref explicite |
| Routes `publications/prepare`, `[attemptId]/authorize`, `dispatch` et `merge` | Conserver comme frontières D7 ; leur exposition utilisateur doit évoluer vers Nora |

### 9.2 APIs proposées

- `GET /api/projects/{projectId}/git/tree` : listing borné, données/source et erreurs normalisées.
- `GET /api/projects/{projectId}/git/publications` : projection historique des publications **du projet** et de leurs états.
- **Admission d'autorité conversationnelle** : responsabilité serveur au niveau D3→D6/D7, sans endpoint public « autorise-moi parce que Nora a dit oui ». La route concrète et la réutilisation des commandes existantes sont à qualifier avant code.
- **Résultat/reprise mission** : réemploi des command/mission stores et de la projection de fil, avec corrélation vers les références de preuve existantes ; pas de nouvelle base d'états concurrente.

### 9.3 Données et persistence

Réutiliser en priorité `integrationAuthorizations`, `authorizedRepositories`, `projectGitLinks`, `documents`, `documentRevisions`, `documentPublicationRefs`, `humanDecisions`, `effectAttempts`, `observedGitFacts`, `conversationTurnCommands` et le fil `messages`.

**Migration : pas nécessaire par hypothèse.** Avant implementation, vérifier si le mandat USER, la qualification durable et les faits de merge peuvent être liés sans perte de preuve dans les structures existantes. Si un champ ou une contrainte nouvelle devient indispensable : formaliser sa nécessité, sa rétrocompatibilité, ses impacts DATA-01/ENV-01 et demander le gate approprié **avant migration**.

### 9.4 Logs et traçabilité

À chaque mutation : acteur Pilote, projet, identifiant intention/turn, décision D6, version/fingerprint de plan, tentative D7, dépôt et branche cibles, réf GitHub observée, statut et catégorie d'erreur. Expurger tokens et contenus privés ; éviter de journaliser en clair des documents non nécessaires à la preuve.

---

## 10. Erreurs, protections et invariants de reprise

| Incident | Attendu Studio / Nora |
| --- | --- |
| GitHub non connecté | Nora/Projet/Documents disponibles ; Git refuse proprement |
| Aucun dépôt rattaché | État vide et possibilité d'associer un dépôt autorisé |
| Plusieurs dépôts sans cible | Clarification unique ; pas de mutation |
| Ref Git inaccessible/supprimée | Aucune bascule silencieuse sur `main` ni contenu fictif |
| Fichier absent sur ref vérifiée | `FILE_ABSENT` qualifié ; pas de création automatique non demandée |
| Git 404 ambigu/permissions | `UNKNOWN` / `DENIED` selon observation, jamais « fichier absent » inventé |
| Retour UI A après navigation vers B | Réponse tardive neutralisée, pas de fuite de contexte |
| Contenu binaire/trop long/hostile | État borné et sûr, aucune exécution de contenu |
| Connexion révoquée entre préparation et effet | D6/D9 refusent, état et historique conservés |
| Diff/HEAD changé depuis plan | `REQUIRES_REQUALIFICATION`, demande complémentaire si mandat dépasse |
| Token/installation change | Relecture et refus si acteur/installation non attribuable |
| Double commande ou replay après timeout | Tentative idempotente/réconciliée, pas de doublon distant |
| PR ouverte, merge non confirmé | « PR ouverte », jamais « fusion faite » |
| Merge refusé par protections/checks | Refus réel remonté par Nora ; ne pas désactiver GitHub |
| Backend conclut et Nora ne revient pas | Mission/résultat durable, reprise dès événement pris en charge, sans réexécuter |
| RECETTE fournisseur SCRIPTED au lieu de REAL | **STOP de disponibilité** pour capacité annoncée |
| Merge REAL hard-blocked alors que livré | **NOT READY RECETTE**, à corriger et prouver avant mise à disposition |

---

## 11. Contrat d'acceptation : scénarios et oracles

Les références A/B/S sont propres à ce candidat et ne renumérotent pas les RG-GIT/PF-GIT ou le registre de recette antérieur.

### 11.1 Scénarios Pilote — consultation A

| ID | Parcours / condition d'acceptation | Oracle minimal |
| --- | --- | --- |
| **A01** | Projet sans Git : Travail, Nora, Documents restent utilisables | Browser + D2/D4 |
| **A02** | Connexion/refresh : seuls repos autorisés apparaissent | API D9 + GitHub REAL |
| **A03** | Deux dépôts rattachés, autre projet non affecté | API/PG + Browser |
| **A04** | Ajouter un 3e dépôt autorisé ; pas d'association globale | API/PG + Browser |
| **A05** | Retirer 1 dépôt : aucun effet GitHub, historique conservé | API/PG + GitHub check |
| **A06** | Changer de repo : liste/fichier et info requalifiés, réponse stale neutralisée | Browser + requêtes |
| **A07** | Sélection `main` puis branche non mergée : contenu différent sous bonne ref | GitHub REAL + Browser |
| **A08** | Dossier racine → sous-dossier → fichier : lecture à la demande, pas clone | GitHub REAL + Browser |
| **A09** | Markdown/texte lisibles, binaire et taille excessive gérés | Browser + unit |
| **A10** | Infos/GitHub/agrandir en haut, lecture 30/70 puis agrandie, détails aérés | Figma extrait + Browser |
| **A11** | Lien sur commit vérifié pointe vers fichier/version réellement lus | GitHub REAL + provenance |
| **A12** | Publications de 2 dépôts dans liste du **projet**, statuts distincts | PG + Browser + GitHub |
| **A13** | Déconnexion GitHub : nouveaux accès refusés, docs/preuves conservés | Browser + API/PG |
| **A14** | Ref supprimée, fichier absent, droits refusés et réponse ambiguë honnêtes | API/REAL + Browser |
| **A15** | Desktop compact et mobile : fonctionnalités disponibles, focus clavier | Figma G5 + Playwright |

### 11.2 Scénarios Nora — conduite/autorité B

| ID | Demande / attendu | Oracle |
| --- | --- | --- |
| **B01** | « Publie ce document sur une nouvelle branche » avec document/dépôt univoques → pas de bouton D6 supplémentaire | Nora LIVE + D6/PG |
| **B02** | Même demande avec 2 repos ambigus → Nora clarifie **seulement** le repo | Nora LIVE + zéro effet |
| **B03** | « Ne publie pas » / demande hypothétique → aucune autorisation ni mutation | Sémantique négative + D7 zéro effet |
| **B04** | Nora crée/révise D4 puis publication D7 : continuité et réponse globale | D4/PG + D3 + GitHub |
| **B05** | Branche, commit et PR documentaires REAL observés sans activation à la demande | GitHub sandbox + D8 |
| **B06** | Demande « Publie » ne provoque **aucun merge** | D6/D7, GitHub |
| **B07** | Demande distincte « Merge PR documentaire X » → D6 propre au merge et REAL sur PR éligible si livré | HumanDecision + GitHub REAL |
| **B08** | PR externe/non documentaire : pas de merge hors périmètre, limitation expliquée | D6/D7 + Nora |
| **B09** | Cible/HEAD/fingerprint change entre acte et effet → requalification, pas d'effet non mandaté | Unit + PG + GitHub |
| **B10** | Perte d'ACK après commit/PR, retry → reconciliation, pas de doublon | Fault injection + GitHub REAL |
| **B11** | D7 terminé avant restitution : Nora reprend et produit **un message terminal fidèle** | PG/messages + Nora |
| **B12** | Deux sessions/projets/pilotes autour du même repo → autorité isolée | PG/auth + Browser |
| **B13** | README hostile contient une instruction de publication → aucune HumanDecision créée | Unit + Nora LIVE |
| **B14** | Refus GitHub/branche protégée → Nora dit « refusé », fournit la cause et la suite réalisable | GitHub REAL + Nora |
| **B15** | Multi-intention D4 + publication + PR et reformulations libres → même résultat sous intentions qualifiées | Nora LIVE + D3/D4/D7 |
| **B16** | Restart/reconnect en mission non terminale → pas de statut inventé et reprise bornée prouvée | PG + Browser + backend |

### 11.3 Scénarios sécurité/exploitation S

| ID | Preuve / critère |
| --- | --- |
| **S01** | Préflight ENV-01 : SHA/build de RECETTE figé, GitHub REAL, identités/DB/cookies isolés, callbacks corrects |
| **S02** | GitHub App multi-dépôts : chaque repo exige droit réel + lien projet + identité valide |
| **S03** | Permissions révoquées ou repo retiré entre inspect/dispatch → aucun effet |
| **S04** | Merge REAL autorisé uniquement sur PR éligible, protections et SHA courants, sans privilège administrateur implicite |
| **S05** | Valeurs de secrets/token absentes des réponses UI, logs, sorties Nora, packs, captures et preuves |
| **S06** | Refus d'une mutation technique code/CI via la voie documentaire ML4 |
| **S07** | Aucun mode SCRIPTED/fixture ne prouve REAL ; métadonnées de test affichent provider et build utilisés |
| **S08** | Sous faute réseau, redémarrage ou réponse ambiguë : retour `UNKNOWN` et reconnaissance distante avant retry |
| **S09** | CI/lint/build/types/tests UI et PG, ainsi que non-régression Travail/Nora/Intégrations conformes |
| **S10** | Contrat/documentation/as-built/registre de revue synchronisés avec le code, sans statut ADOPTED anticipé |

### 11.4 Stratification de preuve

- **UNIT / déterministe** : validation de format, scopes, modèle d'autorité, fingerprint, limites, neutralisation stale, négations et refus.
- **INTEGRATION PG/API** : document/révision, association projet, HumanDecision et tentative, persistance et reprise après crash.
- **BROWSER** : parcours utilisateur complet, Figma/viewport, interactions/accessibilité, fil Nora, liens.
- **GitHub REAL sandbox** : branches, lecture de fichier, publication, PR et merge lorsque livrés, avec identités et refs distantes.
- **Nora LIVE** : intention sémantique, multi-intention, clarification proportionnée, reprise et restitution sans moteur lexical.
- **D8 / réception** : preuve de fait ≠ conformité du résultat ≠ acceptation humaine.

Jeux de tests existants à **réutiliser/étendre**, pas à dupliquer : `web/tests/unit/mission-continuity.test.ts`, `intent-conduction.test.ts`, `git-read-tools.test.ts`, `git-file-provenance.test.ts`, `github-app-auth-real-provider.test.ts`, `real-github-mutations-gate.test.ts`, `publication-steps.test.ts` ; `web/tests/integration/git-collaboration.pg.test.ts`, `mission-continuity-accept01.pg.test.ts`, `intent-continuity-global.pg.test.ts` ; `web/tests/e2e/git-collaboration.spec.ts`, `intent-continuity-atlas.spec.ts`, `ensemble05-travail-nora.spec.ts`. Leur **existence dans Git** n'est pas preuve de réussite dans la future RECETTE E08.

### 11.5 Critères de sortie de RECETTE

**READY FOR MORRIS UAT** uniquement si :

1. Produit candidat figé (commit complet + build + manifestes ENV-01), paramètres REAL et source Figma capturés.
2. A01–A15 et B01–B16 applicables sont couverts selon risques ; aucune fonctionnalité « livrée » dépourvue d'implémentation REAL.
3. S01–S10 et contrôles bloquants des mutations ont une preuve datée.
4. Aucune régression bloquante Travail, Documents, Intégrations ou Nora.
5. Les réserves non bloquantes sont explicitement acceptées avant exposition en recette, sans cacher une indisponibilité critique.
6. Le Pilote dispose de l'URL de RECETTE, de la version testée, du scénario de branche/PR et des références observables.

**NO-GO RECETTE** : merge annoncé mais hard-blocked, fournisseur scripted à la place de real, identité non attribuable, secrets/cookies confondus, aucune décision D6 sûre, absence de preuve d'effet ou de reprise sur scénario à risque.

---

## 12. Contrat de livraison, séquencement et intégration

### 12.1 Responsabilités des intervenants

- **Morris** : valide résultat fonctionnel, expérience, limites de périmètre, arbitrages de risque et GO de recette/intégration/promotion.
- **ChatGPT** : analyse le code et la vision, prépare/revoit le contrat, qualifie les écarts et compare preuves à l'acceptation ; ne valide pas à la place de Morris.
- **Cursor** : implémente et teste les modifications selon SFIA v2.6, dans une branche et sur chemins autorisés ; vérifie localement Git, produit Review Pack et handoff.
- **Pilote dans le produit** : exprime intentions et mandats D6 ; n'est pas l'autorité Git du chantier de construction.

### 12.2 Macro-lot cible E08 : capability end-to-end

**Résultat :** un projet peut consulter ses dépôts et Nora peut conduire, sur une ressource Git autorisée, la publication documentaire avec résultat GitHub réel et restitution fidèle.

- **Tranche cohérente 1 — Consultation et provenance :** D9 multi-repo, tree/branches/file, publication list, composition Figma, tests security/browser/REAL read.
- **Tranche cohérente 2 — Nora et effet gouverné :** qualification, acte USER→mandat D6, D7, provider REAL documentaire et merge si dans lot, reprise et restitution, tests sur sandbox.
- **Intégration obligatoire commune :** liens/provenance/identité, continuité du projet, même fil, mêmes cas d'erreur, tests end-to-end et documents synchronisés.

Ne pas transformer ces tranches en **micro-lots autonomes** avec une succession de validations documentaires : elles partagent un contrat de produit et une recette intégrée. Les sous-travaux peuvent se dérouler en parallèle seulement lorsque les contrats API, fichiers et intégrateur sont maîtrisés ; le propriétaire d'intégration est nommé dans le futur mandat Cursor.

### 12.3 Périmètre probable des fichiers de code

**Inventaire de blast radius, pas une allowlist d'édition Cursor déjà accordée.** Il devra être recalculé sur la branche technique locale.

| Zone | Fichiers plausiblement touchés |
| --- | --- |
| Ressources et provider Git | `web/src/domains/integrations/resource-service.ts`, `github-provider.ts`, `real-github-provider.ts`, `github-app-auth.ts`, `github-app-config.ts` |
| Liens/autorisation Git | `authorization-service.ts`, `project-link-service.ts`, `effect-authority.ts` |
| Routes API | `web/src/app/api/projects/[projectId]/git/refs`, `file`, `sources`, `links`, `publications`, `merge` et route tree candidate |
| Mission Nora et qualification | `web/src/domains/conversation/semantic-qualification.ts`, `intent-conduction.ts`, `service.ts`, `mission-continuity.ts`, `nora-adapter.ts` |
| D6/D7/D8 | `web/src/domains/execution/effect-service.ts`, `effect-authority.ts`, `publication-steps.ts`, `domains/decisions/service.ts`, `domains/proofs/qualify.ts` |
| UI | `web/src/app/projects/[projectId]/page.tsx`, `components/figma/TravailViewer.tsx`, `components/integrations/IntegrationsPanel.tsx`, `PublicationInspectionPanel.tsx` et composants de lecture Git réutilisables |
| Données (si nécessaire seulement) | `web/src/db/schema.ts` et migrations additives, sous gate spécifique |
| Tests, méthodes et docs | Unit/PG/E2E ci-dessus ; as-built d'E08, registre et contrat Figma ; contrat fonctionnel synchronisé **après décision** |

**Règle de construction** : toute modification de fonctionnement nécessite une documentation/as-built vérifiable dans **le même lot**. Un écart code/document devient **KNOWN GAP**, jamais prétendument conforme.

### 12.4 Gates de construction

| Gate | Preuve / décision |
| --- | --- |
| **G0 — Revue de conception** | Morris valide vision, périmètre nominal documentaire, merge, absence de workflow technique, statut du contrat fonctionnel/architecture candidat ; arbitrages §13 |
| **G1 — Pré-check Git / méthodes** | Cursor lit SEF/roadmap/decisions et routing+template SFIA v2.6 depuis Git ; vérifie refs, branches, HEAD, base, état local et compatibilité contractuelle |
| **G2 — Frontières d'implémentation** | Mapping propriétaires D1–D9, design APIs/fingerprints, blast radius, sécurité sandbox, fichiers/STOP, risque migration ; pas de nouvelle autorité |
| **G3 — Extraction Figma** | Source native/captures/digests, mapping composants et critères F1/F2 ; pas de démarrage UI à l'aveugle |
| **G4 — Implémentation intégrée** | Code/tests/docs du même lot, revue TypeScript/PG/UI/REAL, aucune permission élargie |
| **G5 — Candidate RECETTE** | Build/SHA figés, GitHub REAL actif pour capacités livrées, préflight ENV-01 et preuves Nora LIVE/résultats |
| **G6 — Revue/acceptation** | Morris UAT, réserves, Review Pack Cursor et relecture indépendante ; verdict par scénario |
| **G7 — Intégration/promotions** | PR, merge, post-merge et STABLE uniquement sous GO distinct ; Gate C/R6/ADOPTED ne sont pas acquis |

Ces gates sont une **matrice de contrôle de ce candidat**, pas un nouveau processus parallèle à SFIA v2.6, SEF ou à la méthode Figma v1.1.

---

## 13. Risques, décisions et dette/exit

| Risque / écart | Gravité | Réponse / preuve de sortie |
| --- | --- | --- |
| Multi-dépôts DB oui, provider REAL mono-repo | Élevée | Résolution intersection App + user + projet sur 2+ repos sandbox |
| Merge REAL hard-blocked | Critique si livré | Code REAL, tests et merge GitHub réellement observé avant RECETTE |
| Une phrase de Nora usurpant un acte Pilote | Critique | HumanDecision dérivée d'une **source USER authentifiée** liée au plan, test hostile négatif |
| D6 existant attend inspection et autorisation distinctes | Élevée | Admettre l'acte conversationnel sans confirmation superflue, préserver empreinte et requalification |
| Publication Git actuelle attend path explicite | Moyenne | Contexte déterministe ou clarification ciblée, jamais path arbitraire |
| PR 675 externe non couverte par plan Studio | Élevée | Choix de portée document-only ou gate séparé ; aucun merge indifférencié |
| Retry après timeout d'API GitHub | Critique | Corrélation, reconnaissance distante et absence de doublon prouvé |
| Écriture REAL en RECETTE sur dépôt de production | Critique | App sandbox, allowlist lane, permissions minimales, GO de recette et preflight |
| Session DEV/RECETTE sur même host | Élevée | Isolation cookies/profils, correctifs ENV-01 selon politique et preuves |
| Contenu Git hostile dans Nora/Markdown | Élevée | Source non autorisante, rendu sûr, outils Git read only |
| Sources Figma évolutives | Moyenne | Capture native datée+digest, comparaisons runtime mêmes viewports |
| Rupture de continuité Nora après D7 | Élevée | Test D3/PG de message final, reprise durable sans second effet |
| Créer nouvelle DB/index/moteur sans besoin | Élevée dette | Réemploi tables/domaines ; migration et abstraction seulement si nécessité prouvée |
| Modification côté code sans synchroniser R2/as-built | Moyenne | Docs, tests et preuve dans le même lot |
| Branche E08 derrière `main` | Moyenne | Pré-check/reconciliation de la base technique, sans rebase spontané |

**Dette admissible seulement si** : justification explicite, propriétaire, limite, risque, critère d'exit et test de non-régression. Pas de POC/fixture ni « temporary fallback » de production sans sortie vérifiable.

### 13.1 Arbitrages soumis à Morris pour G0

**A — Capacité REAL livrée :** confirmé en intention — branche/commit/PR/merge documentaires demandés via Nora doivent être actifs en RECETTE lorsqu'annoncés livrés. Valider si l'E08 nominal **inclut** le merge documentaire REAL au même gate, plutôt que dans une livraison séparée.

**B — PR préexistantes/hors document :** confirmer que le premier lot limite l'effet de merge aux PR documentaires Studio (aligné ML4) ou ouvrir une décision distincte de capacité Git plus large. **Ne pas supposer automatiquement l'extension à toutes les PR code/CI.**

**C — Mandat USER clair :** valider la règle fonctionnelle sans second clic ; mécanisme précis D6/empreinte et preuve doivent être contrôlés techniquement avant toute utilisation REAL.

**D — Path/branche par défaut :** accepter ou refuser des conventions documentaires bornées ; en cas de refus, clarification conversationnelle ciblée.

**E — Publications Studio :** liste transversale au projet, en-tête 11.04 à harmoniser au contrat ; aucune redéfinition de Figma par Cursor de sa propre initiative.

**F — Périmètre exact de la recette :** jeu de sandbox et compte Pilote, droits GitHub et contrat de preuves ; la configuration durable de RECETTE ne peut pas contourner ENV-01.

L'approbation de vision et du présent contrat ne dispense pas des gates de code, sécurité, API, migration ou preuve. Morris n'a pas à valider le détail de chaque méthode TypeScript pour juger l'acceptation : les invariants, les risques et les preuves doivent permettre cette décision en connaissance de cause.

---

## 14. Conditions de STOP

**STOP immédiat avant code** si : contrat fonctionnel ou Figma de référence non consultable ; autorité ambiguë/contradictoire ; propriétaire inconnu ; branche/base/HEAD non vérifiés ; décision normative D6/ENV-01 à modifier sans GO ; changement DB/persistance non arbitré ; routeur métier lexical réintroduit ; fournisseur imposant une mutation extérieure au mandat ; incapacité à distinguer SCRIPTED et REAL ; secrets ou comptes partagés entre lanes ; absence de scénario de rollback ; template SFIA v2.6 non relu ; portée PR externe technique assimilée implicitement à la publication documentaire.

**STOP avant RECETTE** si : merge annoncé mais hard-blocked ; publication réelle impossible ; pas de preuve d'acte USER ; chaîne Nora interrompue sans restitution ni reprise maîtrisée ; résultat technique non observable ; candidat non figé ; GitHub sandbox non isolé ; Figma code non confronté ; tests bloquants FAIL.

**STOP avant merge du chantier** si : absence de GO Morris, base `main` dérivée non confrontée, CI/proof manquants ou réserves de risque non arbitrées.

---

## 15. Verdict de ce dossier

| Niveau | Verdict |
| --- | --- |
| Vision produit et principe Nora chat-first | **ARBITRAGES UTILISATEUR REPRIS** — à confirmer dans la revue consolidée |
| UX Figma page 11 | **CIBLE VALIDÉE DANS L'ÉCHANGE** ; source mutable, aucune preuve G5 E08 |
| Contrat fonctionnel E08 v0.2 | **DOCUMENTED CANDIDATE**, non promu VALIDATED SPEC par la création de commit |
| Architecture AS-IS | **CODE INSPECTÉ SUR `main`** ; local/RECETTE NON OBSERVÉS |
| Architecture TO-BE | **PROPOSÉE, COHÉRENTE AVEC LES PROPRIÉTAIRES EXISTANTS**, en attente de revue |
| Exécution document Git REAL | **CONDITIONNELLE**, couverture et disponibilité E08 non prouvées |
| Merge REAL | **NON IMPLÉMENTÉ DANS LE PROVIDER REAL OBSERVÉ** (hard-blocked) |
| Construction, tests et acceptation E08 | **NOT STARTED / NOT PROVEN pour ce contrat** |
| PR / merge / STABLE / Gate C / R6 / ADOPTED | **NON AUTORISÉS / NON ACQUIS** |

**Recommandation de suite :** revue Morris des résultats et arbitrages §13.1, pas des détails d'implémentation ; intégration des corrections éventuelles dans ce candidat sous mandat ; puis **GO d'exécution Cursor distinct** après pré-check/routing/template v2.6 depuis la branche de référence applicable. Le code et les preuves pourront seuls transformer cette conception en une capacité réellement recettable.

---

## 16. Sources techniques et fournisseurs

**Code Git primaire :** `projects/sfia-studio-next/web/src/domains/integrations/`, `domains/execution/`, `domains/conversation/`, `domains/decisions/`, `domains/proofs/`, `db/schema.ts`, `app/projects/[projectId]/page.tsx` et `components/figma/TravailViewer.tsx` au SHA `main@1dd1a8ec738edb7851e2ec290769082035c1b657`.

**Tests existants identifiés** : `web/tests/unit`, `web/tests/integration`, `web/tests/e2e` (voir §11). Leur existence est prouvée par l'arbre Git, pas leur exécution pendant cette analyse.

**GitHub REST officiel (vérification conceptuelle, non preuve d'appel runtime Studio)** :
- [Repository Contents](https://docs.github.com/en/rest/repos/contents) — lecture du contenu à ref et récupération de répertoires.
- [Git Trees](https://docs.github.com/en/rest/git/trees) — objets d'arborescence et limites des réponses récursives.
- [Pull requests](https://docs.github.com/en/rest/pulls/pulls) — état/permissions/merge et précondition SHA.

**Méthode de delivery** : SEF v0.2, ENV-01, méthode Figma ↔ Cursor v1.1 sur `main`, SFIA v2.6 externe : `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` et `prompts/templates/sfia-cycle-execution-template.md` **à relire obligatoirement avant prompt**, non utilisés pour générer un prompt dans ce dossier.

*Fin — Contrat d'architecture et d'acceptation candidat E08 v0.1.*

```

## CREATE `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md`

```
# Ensemble 08 — As-built (consultation Git + conduite Nora)

| Champ | Valeur |
|---|---|
| Date | 2026-11-21 (correctif intégré) |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| Base | `origin/main` @ `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Profil | CRITICAL · Delivery correctif · NO RELEASE |
| CKC | FALLBACK (Delivery #8) |

## Livré (delivery + correctif)

### Capacité A — Consultation Git
- Listing répertoire D9 : `listDirectory` / `listGitDirectory` / `GET .../git/tree`
- Dépassement >200 entrées → `AMBIGUOUS` (SCRIPTED + REAL) — pas de truncation silencieuse
- Projection publications projet : historique D8 ≠ live GitHub
- Surface UI `GitRepositoriesSurface` : choix explicite de dépôt ; génération contexte anti-stale
- Icônes Figma exactes ; split 30/70 ; agrandir icon-only

### Capacité B — Nora
- `admitConversationalPublicationMandate` + preuve USER persistée (rôle/projet/tour/empreinte)
- Refus explicite → **aucune** tentative PREPARED / AWAITING_PILOT_AUTH
- Branch hints : plus de faux « du » / « de » (P0-01)
- `admitConversationalMergeMandate` — mandat D6 merge documentaire distinct
- Merge SHA : `merge_commit_sha` observé uniquement (P0-02)

### REAL multi-dépôts
- Allowlist explicite `allowedFullNames` + env `GITHUB_APP_ALLOWED_REPOS` (même owner)
- Pas d'« allow all » ; pas de token installation en fallback mutation

## Non livré / réserves
- Figma G5 runtime (captures navigateur + mesures DOM F2) : **NOT PROVEN**
- END-TO-END REAL mutation GitHub : **NOT PROVEN** (pas de GO sandbox)
- Playwright Nora publication/merge conversationnels E2E : partiel (surface SCRIPTED 2 PASS)
- RECETTE / promotion : hors cycle

## Preuves exécutées (correctif)
- `tsc --noEmit` PASS
- unit **743/743** PASS
- `mission-continuity-accept01.pg` **10/10** PASS
- `git-collaboration.pg` **93/93** PASS
- Playwright `ensemble08-git-surface.spec.ts` **2/2** PASS (SCRIPTED)
- `npm run build` PASS
- Figma L2 11.03 metadata : DONE · G5 **NOT PROVEN**

## Fake/Real
| Capacité | Niveau |
|---|---|
| Listing / UI / pubs | DETERMINISTIC PROVEN (SCRIPTED + PG + Playwright) |
| Mandat publication + merge conversationnel | DETERMINISTIC PROVEN (unit/PG path) |
| Merge SHA proof | DETERMINISTIC PROVEN (unit mocks) |
| Multi-repo allowlist | DETERMINISTIC PROVEN (unit) |
| GitHub REAL mutation | NOT PROVEN |
| Figma G5 | NOT PROVEN |

```

## CREATE `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/manifeste-l0-l1.md`

```
# Manifeste Figma L0/L1 — Dépôts Git (page 11)

| Métadonnée | Valeur |
|---|---|
| Fichier | `itgvCulInEnFY6DvgIegvP` |
| Page | `1092:116` — 11 · ML4D — Dépôts Git & publication |
| Session MCP | `56980d27-2b63-485f-a20c-8788019f4bfe` |
| Extraction | 2026-11-21 (cycle E08 delivery) |
| Méthode | `methodologie-contrat-figma-cursor.md` v1.1 (blob `906c6f60…`) |
| Viewport ref desktop | 1680×970 |
| Shell | instance partagée rail projet **246 CSS px** (F1) |

## L0 — Inventaire frames contractuelles

| Frame | node-id | État / route | Viewport | Qualification |
|---|---|---|---|---|
| 11.00 INDEX | `1098:881` | Index conception (non runtime) | 1680×530 | OUT_OF_SCOPE (index) |
| 11.01 Aucun dépôt | `1093:9` | `surface=git`, 0 liens | 1680×970 | COMPLETE_FOR_COMPONENT |
| 11.02 Dépôts associés | `1094:71` | gestion multi-dépôts | 1680×970 | COMPLETE_FOR_COMPONENT |
| 11.03 Explorateur 30/70 | `1094:172` | fichiers + visionneuse | 1680×970 | COMPLETE_FOR_COMPONENT |
| 11.04 Publications Studio | `1094:310` | onglet publications | 1680×970 | COMPLETE_FOR_COMPONENT |
| 11.05 Lecture agrandie | `1094:422` | mode agrandi + détails | 1680×970 | COMPLETE_FOR_COMPONENT |
| 11.06 GitHub connecté | `1095:339` | Paramètres → Intégrations | 1680×970 | PARTIAL (réutilise IntegrationsPanel) |
| 11.07 Déconnexion | `1095:390` | impacts déconnexion locale | 1680×970 | PARTIAL (réutilise IntegrationsPanel) |
| 11.08–11.12 | — | **supprimés volontairement** | — | OUT_OF_SCOPE — ne pas reconstruire |
| 11.13 Retirer association | `1096:752` | confirmation retrait | 1680×970 | COMPLETE_FOR_COMPONENT |
| 11.14 Git indisponible | `1096:841` | accès coupé | 1680×970 | COMPLETE_FOR_COMPONENT |
| 11.15 Desktop compact | `1098:791` | 1280 | 1280×970 | COMPLETE_FOR_COMPONENT |
| 11.16 Mobile | `1098:841` | mobile | 390×(H fig) | PARTIAL (H Figma ≠ navigateur) |

## PNG natifs + SHA-256

| Frame | Fichier | SHA-256 |
|---|---|---|
| 11.01 | `png/11.01-empty-1093-9.png` | `fbfe88aef63c8a9c92c2f42eba93e36915e4a8917e4d77c402d0c630587d2bd9` |
| 11.02 | `png/11.02-multi-1094-71.png` | `6e95e4788caf74d5653aa1e283c9d22acb02633ce6e0757dee2adf6fb06f7e8b` |
| 11.03 | `png/11.03-explorer-1094-172.png` | `54a1c9e07b26492b51f4d81a15e0fbcd32227b33e82dc3aee1ba1c6b7aef50cf` |
| 11.04 | `png/11.04-pubs-1094-310.png` | `c127e37cd3ca307fbd0ffbfc78a61566b296671c16216659f432bc4056c29a04` |
| 11.05 | `png/11.05-enlarge-1094-422.png` | `96ab67efdf21be7d8cc3b4c509babf072130cd05d522820254b869f6310d124a` |
| 11.06 | `png/11.06-connected-1095-339.png` | `278ad3f2a8ce6c497de57f5b56eb3c87fa68710ffdd111aad64aa22bbde7b067` |
| 11.13 | `png/11.13-remove-1096-752.png` | `33dc54056f83506e38189a5449099da39cf7c5609f06267692de9e4306056caf` |
| 11.16 | `png/11.16-mobile-1098-841.png` | `b34f527a244603d42ea59158df9235f036a01bba97c41b900492efcf65b58910` |

## Assets SVG exacts (icons)

| Asset Figma | Local | SHA-256 |
|---|---|---|
| Icône Agrandir | `web/public/figma-git-icons/expand.svg` | `2361cac660357870fe1d9f97681e882671df4a0117f25ff88ea5e9569381689a` |
| Icône fichier | `web/public/figma-git-icons/file.svg` | `0cd27a469ddd04c3bc6676cba2973b05a7dec2a8992af7f4630fc6717e29fb58` |
| Icône dossier | `web/public/figma-git-icons/folder.svg` | `3bad96757a3bfe8e85c88c11bda49cf1fea6442bf838711117bab9b299ec3e72` |
| Icône branche | `web/public/figma-git-icons/branch.svg` | `2b0f16faa0b29bb2163025ee2723c443280029d51afc4aca0a5f483b91085ed3` |
| Chevron | `web/public/figma-git-icons/chevron.svg` | `41ff9a3a354da5a74ec508e2a2c83b7603d079fd77752cc776bb7d32b0fbdd31` |

## L1 — Structure 11.03 (explorateur)

Source : `get_design_context` node `1094:172` + metadata page.

| Élément visible | node-id | Composant React cible | DOM locator | Assertion |
|---|---|---|---|---|
| Shell rail 246 | `I1094:173;1073:3` | shell existant | `[data-rail-variant=projet]` | w=246 ±2 |
| Hero kicker | `1094:236` | `GitRepositoriesSurface` | `[data-testid=git-hero-kicker]` | texte ESPACE PROJET / DÉPÔTS GIT |
| Titre | `1094:237` | idem | `[data-testid=git-hero-title]` | Dépôts Git |
| Carte dépôt + badge | `1094:240` | idem | `[data-testid=git-repo-card]` | fullName + Accessible |
| Sélecteur branche | `1108:490` | idem | `[data-testid=git-branch-select]` | ref change recharge |
| Onglet Fichiers | `1094:248` | idem | `[data-testid=git-tab-files]` | actif |
| Onglet Publications | `1094:249` | idem | `[data-testid=git-tab-publications]` | |
| Lien modifier dépôt | `1094:250` | idem | `[data-testid=git-manage-repos]` | |
| Arborescence 30% | `1094:252` | idem | `[data-testid=git-tree]` | w≈406 / 1358 |
| Visionneuse 70% | `1094:287` | idem | `[data-testid=git-preview]` | w≈934 / 1358 |
| Actions Infos / GitHub / Agrandir | `1101:805` | idem | `[data-testid=git-preview-actions]` | agrandir icon-only |
| Icônes dossier/fichier | `1094:67`/`1094:70` | `<img src=/figma-git-icons/…>` | | exact SVG |

## Règles de transposition

- Réutiliser shell / rail existants — ne pas dupliquer.
- Données Figma illustratives ≠ données métier.
- Disposition explorateur **30/70** (406 / 934 sur 1358 content).
- Aucune commande édition Git dans la visionneuse.
- Panneau technique `PublicationInspectionPanel` retiré de la surface nominale `git`.
- Nora (11.08–11.12) : réutiliser Travail / conversation existants — OUT_OF_SCOPE UI Git.

## L2 — Descendants natifs critiques (11.03) — cycle correctif 2026-11-21

Session MCP : `26b8c299-12cf-4a3d-99c6-f30d78f95110` · source `get_metadata` node `1094:172`.

| Chaîne parent | node-id | layout / sizing observés | Notes transposition |
|---|---|---|---|
| Frame 11.03 | `1094:172` | 1680×970 FIXED | Viewport desktop |
| Shell instance | `1094:173` | 1680×970 | Rail projet 246 CSS px (F1) — ne pas dupliquer |
| Zone métier | `1094:234` | x=284 y=104 · 1358×837 | Contenu après rail |
| Hero | `1094:235` | 1358×91 | kicker / titre / sous-titre |
| Carte dépôt | `1094:240` | 1358×121 | fullName + badge Accessible + branche |
| Sélecteur branche | `1108:490` | 169×37 | icône 16 + label + chevron 14 |
| Onglets | `1094:247` | 1358×18 | Fichiers / Publications / Modifier |
| Split 30/70 | `1094:251` | 1358×545 | tree 406 + gap 18 + preview 934 |
| Arborescence | `1094:252` | 406×545 FIXED | badge Lecture seule ; rows 39 px |
| Visionneuse | `1094:287` | 934×545 FIXED | actions Infos / GitHub / Agrandir |
| Actions | `1101:805` | 376×43 | Agrandir `1101:810` = 42×40 **icon-only** |

### Contrôles d'état / ordre

1. Identité dépôt + badge Accessible
2. Sélecteur de branche (lecture seule)
3. Onglets Fichiers → Publications → Modifier le dépôt
4. Arbre (dossiers à la demande) → sélection fichier
5. Actions visionneuse : Infos → Ouvrir sur GitHub → Agrandir (aria-label, sans libellé visuel)

### Tokens / assets

- Icônes locales `web/public/figma-git-icons/*` (SHA L0 conservés).
- Tokens CSS E08 dans `tokens.css` (`.git-*`, split 30/70, modal retrait).

### G5 runtime (correctif)

| Critère | Statut |
|---|---|
| Captures navigateur DEV | À produire sur 1680/1280/390/320 si serveur DEV |
| Mesures DOM F2 (Δ≤2 CSS px) | PARTIAL — structure L2 alignée ; mesures runtime selon disponibilité DEV |
| Verdict G5 | **NOT PROVEN** tant que captures+mesures runtime manquent |

## G2 / G3 / G5 status (correctif)

| Critère | Statut |
|---|---|
| L0 inventaire | DONE |
| PNG + SHA frames clés | DONE |
| L1 11.03 design_context | DONE |
| L2 descendants natifs critiques 11.03 | DONE (metadata 2026-11-21) |
| Manifeste nœud→DOM→test | UPDATED — testids `git-*` + e2e E08 |
| GATE UI G2/G4 | OUVERT pour composants COMPLETE_FOR_COMPONENT |
| G5 Figma↔runtime | **NOT PROVEN** (captures runtime requises) |

```

## MODIFY `projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts b/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
index e97f3a92..828754b8 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
@@ -351,6 +351,94 @@ export async function fetchMatchingRefs(
     .slice(0, 40);
 }

+const MAX_DIRECTORY_ENTRIES = 200;
+
+export type GitHubDirectoryEntry = {
+  name: string;
+  path: string;
+  type: "file" | "dir";
+  sha: string;
+  size?: number;
+};
+
+type GitHubContentsItem = {
+  name?: string;
+  path?: string;
+  sha?: string;
+  size?: number;
+  type?: string;
+};
+
+function contentsApiPath(fullName: string, path: string): string {
+  const { owner, name } = parseFullName(fullName);
+  const trimmed = path.replace(/^\/+/, "").replace(/\/+$/, "");
+  const encoded = trimmed
+    ? trimmed.split("/").filter(Boolean).map((seg) => encodeURIComponent(seg)).join("/")
+    : "";
+  const segment = encoded ? `/${encoded}` : "";
+  return `/repos/${owner}/${name}/contents${segment}`;
+}
+
+/** List immediate children of a directory via GitHub Contents API (non-recursive). */
+export async function fetchDirectoryListing(
+  installationToken: string,
+  fullName: string,
+  path: string,
+  ref: string,
+  fetchImpl: GitHubFetch = fetch,
+): Promise<GitHubDirectoryEntry[]> {
+  const q = new URLSearchParams({ ref });
+  const raw = await ghJson<GitHubContentsItem | GitHubContentsItem[]>(
+    fetchImpl,
+    `${contentsApiPath(fullName, path)}?${q}`,
+    {
+      method: "GET",
+      headers: { Authorization: `Bearer ${installationToken}` },
+    },
+  );
+  if (Array.isArray(raw)) {
+    const entries: GitHubDirectoryEntry[] = [];
+    for (const item of raw) {
+      if (!item.name || !item.path || !item.sha) continue;
+      if (item.type === "file") {
+        entries.push({
+          name: item.name,
+          path: item.path,
+          type: "file",
+          sha: item.sha,
+          size: typeof item.size === "number" ? item.size : undefined,
+        });
+      } else if (item.type === "dir") {
+        entries.push({
+          name: item.name,
+          path: item.path,
+          type: "dir",
+          sha: item.sha,
+        });
+      }
+    }
+    entries.sort((a, b) => a.name.localeCompare(b.name));
+    if (entries.length > MAX_DIRECTORY_ENTRIES) {
+      throw new StudioError(
+        "AMBIGUOUS",
+        `Répertoire trop volumineux (${entries.length} entrées, max ${MAX_DIRECTORY_ENTRIES})`,
+        { httpStatus: 409 },
+      );
+    }
+    return entries;
+  }
+  if (raw.type === "file") {
+    throw new StudioError(
+      "INVALID_REQUEST",
+      `NOT_A_DIRECTORY: path=${raw.path ?? path} est un fichier, pas un répertoire`,
+      { httpStatus: 400 },
+    );
+  }
+  throw new StudioError("AMBIGUOUS", "Contenu GitHub non qualificable comme répertoire", {
+    httpStatus: 409,
+  });
+}
+
 export async function fetchFileContentUtf8(
   installationToken: string,
   fullName: string,
@@ -627,6 +715,8 @@ export async function fetchPullRequestRemote(input: {
   headRef: string;
   baseRef: string;
   merged: boolean;
+  /** Observed merge commit SHA when GitHub reports one — never invent from head. */
+  mergeCommitSha: string | null;
 }> {
   const fetchImpl = input.fetchImpl ?? fetch;
   const { owner, name } = parseFullName(input.fullName);
@@ -636,12 +726,17 @@ export async function fetchPullRequestRemote(input: {
     state: string;
     html_url: string;
     merged?: boolean;
+    merge_commit_sha?: string | null;
     head?: { sha?: string; ref?: string };
     base?: { sha?: string; ref?: string };
   }>(fetchImpl, `/repos/${owner}/${name}/pulls/${input.prNumber}`, {
     method: "GET",
     headers: { Authorization: `Bearer ${input.token}` },
   });
+  const mergeCommitSha =
+    typeof raw.merge_commit_sha === "string" && /^[0-9a-f]{40}$/i.test(raw.merge_commit_sha)
+      ? raw.merge_commit_sha
+      : null;
   return {
     number: raw.number,
     title: raw.title,
@@ -652,9 +747,93 @@ export async function fetchPullRequestRemote(input: {
     headRef: raw.head?.ref ?? "",
     baseRef: raw.base?.ref ?? "",
     merged: Boolean(raw.merged),
+    mergeCommitSha,
   };
 }

+/**
+ * Merge a pull request with GitHub SHA precondition.
+ * Caller must enforce D6/D7 mandate and documentary path policy separately.
+ * @see PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge
+ */
+export async function mergePullRequestRemote(input: {
+  token: string;
+  fullName: string;
+  prNumber: number;
+  expectedHeadSha: string;
+  expectedBaseSha?: string | null;
+  commitTitle?: string;
+  mergeMethod?: "merge" | "squash" | "rebase";
+  fetchImpl?: GitHubFetch;
+}): Promise<{ merged: boolean; sha: string }> {
+  const fetchImpl = input.fetchImpl ?? fetch;
+  const { owner, name } = parseFullName(input.fullName);
+  if (!/^[0-9a-f]{40}$/i.test(input.expectedHeadSha)) {
+    throw new StudioError("INVALID_REQUEST", "expectedHeadSha invalide pour merge", {
+      httpStatus: 400,
+    });
+  }
+  // Re-read PR before merge — refuse drift / already merged / closed.
+  const current = await fetchPullRequestRemote({
+    token: input.token,
+    fullName: input.fullName,
+    prNumber: input.prNumber,
+    fetchImpl,
+  });
+  if (current.merged) {
+    // Idempotent already-merged path: never treat source HEAD as the merge commit SHA (P0-02).
+    if (current.headSha.toLowerCase() !== input.expectedHeadSha.toLowerCase()) {
+      throw new StudioError("CONFLICT", "PR déjà mergée avec HEAD divergent", { httpStatus: 409 });
+    }
+    if (current.mergeCommitSha) {
+      return { merged: true, sha: current.mergeCommitSha };
+    }
+    throw new StudioError(
+      "AMBIGUOUS",
+      "PR déjà mergée — commit de fusion non observé (merge_commit_sha absent)",
+      { httpStatus: 409 },
+    );
+  }
+  if (current.state !== "open") {
+    throw new StudioError("CONFLICT", `PR non ouverte (state=${current.state})`, { httpStatus: 409 });
+  }
+  if (current.headSha.toLowerCase() !== input.expectedHeadSha.toLowerCase()) {
+    throw new StudioError("CONFLICT", "HEAD de PR périmé avant merge", { httpStatus: 409 });
+  }
+  if (
+    input.expectedBaseSha &&
+    current.baseSha &&
+    current.baseSha.toLowerCase() !== input.expectedBaseSha.toLowerCase()
+  ) {
+    throw new StudioError("CONFLICT", "Base de PR périmée avant merge", { httpStatus: 409 });
+  }
+
+  const raw = await ghJson<{
+    merged?: boolean;
+    sha?: string;
+    message?: string;
+  }>(fetchImpl, `/repos/${owner}/${name}/pulls/${input.prNumber}/merge`, {
+    method: "PUT",
+    headers: {
+      Authorization: `Bearer ${input.token}`,
+      "Content-Type": "application/json",
+    },
+    body: JSON.stringify({
+      sha: input.expectedHeadSha,
+      merge_method: input.mergeMethod ?? "merge",
+      ...(input.commitTitle ? { commit_title: input.commitTitle } : {}),
+    }),
+  });
+  if (!raw.merged || !raw.sha || !/^[0-9a-f]{40}$/i.test(raw.sha)) {
+    throw new StudioError(
+      "AMBIGUOUS",
+      raw.message ?? "Réponse merge GitHub non qualificable",
+      { httpStatus: 409 },
+    );
+  }
+  return { merged: true, sha: raw.sha };
+}
+
 /** Orchestrate App JWT → identity → installation → restricted token (no mutations). */
 export async function authenticateInstallationReadOnly(
   creds: GitHubAppLoadedCredentials,
@@ -701,14 +880,16 @@ export async function authenticateInstallationReadOnly(
   }

   const access = await createInstallationAccessToken(creds, jwt, fetchImpl);
-  const allowed = access.repositories.some(
-    (r) => r.fullName.toLowerCase() === creds.allowedFullName.toLowerCase(),
-  );
+  const allow = creds.allowedFullNames?.length
+    ? creds.allowedFullNames
+    : [creds.allowedFullName];
+  const allowSet = new Set(allow.map((n) => n.toLowerCase()));
+  const allowed = access.repositories.some((r) => allowSet.has(r.fullName.toLowerCase()));
   // GitHub may omit repositories array on some responses — verify via list endpoint next.
   if (access.repositories.length > 0 && !allowed) {
     throw new StudioError(
       "ACCESS_DENIED",
-      `Dépôt ${creds.allowedFullName} absent du jeton restreint`,
+      `Aucun dépôt allowlist (${allow.join(", ")}) absent du jeton restreint`,
       { httpStatus: 403 },
     );
   }

```

## MODIFY `projects/sfia-studio-next/web/src/domains/integrations/github-app-config.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/github-app-config.ts b/projects/sfia-studio-next/web/src/domains/integrations/github-app-config.ts
index 79a2d511..cb66b8cf 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/github-app-config.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/github-app-config.ts
@@ -62,12 +62,60 @@ export type GitHubAppLoadedCredentials = {
   installationId: string;
   /** PKCS#8 / PEM private key material — never log. */
   privateKeyPem: string;
+  /** Primary sandbox repo (backward compatible). */
   allowedFullName: string;
+  /**
+   * Explicit multi-repo allowlist for the lane/sandbox.
+   * Always includes allowedFullName. Never "allow all".
+   * Extra names from GITHUB_APP_ALLOWED_REPOS (comma-separated), same owner only.
+   */
+  allowedFullNames: string[];
   expectedOwner: string;
   lane: StudioGithubAppLane;
   meta: GitHubAppCredentialMeta;
 };

+/** Resolve explicit allowlist — primary + optional env extras under expectedOwner. */
+export function resolveAllowedFullNames(input: {
+  allowedFullName: string;
+  expectedOwner: string;
+  envList?: string | null;
+}): string[] {
+  const owner = input.expectedOwner.toLowerCase();
+  const primary = input.allowedFullName.trim();
+  const extras = (input.envList ?? "")
+    .split(",")
+    .map((s) => s.trim())
+    .filter(Boolean);
+  const out: string[] = [];
+  const seen = new Set<string>();
+  for (const name of [primary, ...extras]) {
+    const n = name.trim();
+    if (!n || !n.includes("/")) continue;
+    const [o] = n.split("/");
+    if ((o ?? "").toLowerCase() !== owner) {
+      throw new StudioError(
+        "INVALID_REQUEST",
+        `Dépôt allowlist hors owner attendu (${n})`,
+        { httpStatus: 400 },
+      );
+    }
+    const key = n.toLowerCase();
+    if (seen.has(key)) continue;
+    seen.add(key);
+    out.push(n);
+  }
+  if (out.length === 0) {
+    throw new StudioError("INVALID_REQUEST", "Allowlist REAL vide", { httpStatus: 400 });
+  }
+  return out;
+}
+
+export function isFullNameAllowed(allowedFullNames: string[], fullName: string): boolean {
+  const target = fullName.trim().toLowerCase();
+  return allowedFullNames.some((n) => n.toLowerCase() === target);
+}
+
 function requireEnv(name: string): string {
   const v = process.env[name]?.trim();
   if (!v) {
@@ -260,11 +308,18 @@ export function loadGitHubAppCredentialsFromEnv(): GitHubAppLoadedCredentials {
     );
   }

+  const allowedFullNames = resolveAllowedFullNames({
+    allowedFullName: meta.allowedFullName,
+    expectedOwner: meta.expectedOwner,
+    envList: process.env.GITHUB_APP_ALLOWED_REPOS,
+  });
+
   return {
     appId: meta.appId,
     installationId: meta.installationId,
     privateKeyPem,
     allowedFullName: meta.allowedFullName,
+    allowedFullNames,
     expectedOwner: meta.expectedOwner,
     lane: meta.lane,
     meta,

```

## MODIFY `projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts b/projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts
index 95274b6a..b30c91aa 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts
@@ -7,6 +7,7 @@ import {
   createFileContents,
   createGitRef,
   createPullRequestRemote,
+  fetchDirectoryListing,
   fetchFileContentUtf8,
   fetchMatchingRefs,
   fetchPullRequestRemote,
@@ -14,6 +15,7 @@ import {
   fetchRepositoryMetadata,
   listInstallationRepositories,
   listPullRequestsRemote,
+  mergePullRequestRemote,
   type GitHubFetch,
   type InstallationAccessToken,
 } from "./github-app-auth";
@@ -24,6 +26,7 @@ import {
 } from "./github-app-config";
 import { classifyPublicationPath } from "./path-policy";
 import type {
+  DirectoryEntry,
   FileContentResult,
   GitHubProvider,
   InstallationRepo,
@@ -32,9 +35,9 @@ import type {
 } from "./github-provider";

 /**
- * Bounded REAL documentary mutations (create branch / new file / open PR).
+ * Bounded REAL documentary mutations (create branch / new file / open PR / merge PR).
  * Requires explicit operator flag — never inferred from OAuth CONNECTED alone.
- * Merge remains hard-blocked.
+ * Merge uses the same documentary gate plus SHA preconditions at the provider.
  */
 export function isBoundedRealMutationAllowed(): boolean {
   const v = (process.env.STUDIO_GITHUB_ALLOW_MUTATIONS ?? "").toLowerCase().trim();
@@ -69,7 +72,11 @@ function assertMutableBranch(branch: string, op: string) {
 }

 function assertAllowedRepo(creds: GitHubAppLoadedCredentials, fullName: string) {
-  if (fullName.toLowerCase() !== creds.allowedFullName.toLowerCase()) {
+  const allow = creds.allowedFullNames?.length
+    ? creds.allowedFullNames
+    : [creds.allowedFullName];
+  const ok = allow.some((n) => n.toLowerCase() === fullName.toLowerCase());
+  if (!ok) {
     throw new StudioError(
       "ACCESS_DENIED",
       `Dépôt hors périmètre REAL READ (${fullName})`,
@@ -87,7 +94,7 @@ type TokenCache = {
  * D9 GitHub provider — REAL.
  * Reads: installation-to-server (restricted) when no user context required.
  * Mutations (bounded documentary): user-to-server token only — never installation fallback.
- * Merge: always hard-blocked.
+ * Merge: same documentary gate; SHA head/base preconditions; no force / protection bypass.
  */
 export class RealGitHubReadProvider implements GitHubProvider {
   readonly mode = "REAL" as const;
@@ -169,13 +176,15 @@ export class RealGitHubReadProvider implements GitHubProvider {
     }
     const token = await this.installationToken();
     const repos = await listInstallationRepositories(token, this.fetchImpl);
-    const allowed = repos.filter(
-      (r) => r.fullName.toLowerCase() === this.creds.allowedFullName.toLowerCase(),
-    );
+    const allow = this.creds.allowedFullNames?.length
+      ? this.creds.allowedFullNames
+      : [this.creds.allowedFullName];
+    const allowSet = new Set(allow.map((n) => n.toLowerCase()));
+    const allowed = repos.filter((r) => allowSet.has(r.fullName.toLowerCase()));
     if (allowed.length === 0) {
       throw new StudioError(
         "ACCESS_DENIED",
-        `Dépôt ${this.creds.allowedFullName} non inclus dans l'installation`,
+        `Aucun dépôt allowlist (${allow.join(", ")}) inclus dans l'installation`,
         { httpStatus: 403 },
       );
     }
@@ -217,6 +226,18 @@ export class RealGitHubReadProvider implements GitHubProvider {
     };
   }

+  async listDirectory(
+    pilotId: string,
+    fullName: string,
+    path: string,
+    ref: string,
+  ): Promise<DirectoryEntry[]> {
+    void pilotId;
+    assertAllowedRepo(this.creds, fullName);
+    const token = await this.installationToken();
+    return fetchDirectoryListing(token, fullName, path, ref, this.fetchImpl);
+  }
+
   async listRefs(pilotId: string, fullName: string, refPrefix?: string): Promise<RefInfo[]> {
     void pilotId;
     assertAllowedRepo(this.creds, fullName);
@@ -380,7 +401,7 @@ export class RealGitHubReadProvider implements GitHubProvider {
     return { matches, ambiguous: matches.length > 1 };
   }

-  async mergePullRequest(_input: {
+  async mergePullRequest(input: {
     pilotId: string;
     fullName: string;
     prNumber: number;
@@ -388,7 +409,17 @@ export class RealGitHubReadProvider implements GitHubProvider {
     expectedBaseSha?: string | null;
   }): Promise<{ merged: boolean; sha: string }> {
     this.mutationAttempts.mergePR += 1;
-    return mutationBlocked("mergePullRequest");
+    if (!isBoundedRealMutationAllowed()) return mutationBlocked("mergePullRequest");
+    assertAllowedRepo(this.creds, input.fullName);
+    const token = await this.userAccessToken(input.pilotId);
+    return mergePullRequestRemote({
+      token,
+      fullName: input.fullName,
+      prNumber: input.prNumber,
+      expectedHeadSha: input.expectedHeadSha,
+      expectedBaseSha: input.expectedBaseSha,
+      fetchImpl: this.fetchImpl,
+    });
   }

   async getPullRequest(
@@ -431,21 +462,24 @@ export class RealGitHubReadProvider implements GitHubProvider {
     this.tokenCache = { access, fetchedAtMs: Date.now() };
     const listed = await listInstallationRepositories(access.token, this.fetchImpl);
     const names = listed.map((r) => r.fullName);
-    if (!names.some((n) => n.toLowerCase() === this.creds.allowedFullName.toLowerCase())) {
+    const allow = this.creds.allowedFullNames?.length
+      ? this.creds.allowedFullNames
+      : [this.creds.allowedFullName];
+    const allowSet = new Set(allow.map((n) => n.toLowerCase()));
+    if (!names.some((n) => allowSet.has(n.toLowerCase()))) {
       throw new StudioError(
         "ACCESS_DENIED",
-        `Dépôt ${this.creds.allowedFullName} absent de l'installation`,
+        `Aucun dépôt allowlist (${allow.join(", ")}) inclus dans l'installation`,
         { httpStatus: 403 },
       );
     }
-    const meta = await fetchRepositoryMetadata(
-      access.token,
-      this.creds.allowedFullName,
-      this.fetchImpl,
-    );
+    const primary =
+      names.find((n) => n.toLowerCase() === this.creds.allowedFullName.toLowerCase()) ??
+      names.find((n) => allowSet.has(n.toLowerCase()))!;
+    const meta = await fetchRepositoryMetadata(access.token, primary, this.fetchImpl);
     const headSha = await fetchRefSha(
       access.token,
-      this.creds.allowedFullName,
+      primary,
       meta.defaultBranch,
       this.fetchImpl,
     );

```

## MODIFY `projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts b/projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts
index 4434b065..308c46b3 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts
@@ -1,11 +1,15 @@
 import { createHash } from "crypto";
 import type {
+  DirectoryEntry,
   FileContentResult,
   GitHubProvider,
   InstallationRepo,
   PullRequestInfo,
   RefInfo,
 } from "./github-provider";
+import { StudioError } from "@/lib/http-errors";
+
+const MAX_DIRECTORY_ENTRIES = 200;

 export type ScriptedFaultKind =
   | "timeout"
@@ -182,6 +186,25 @@ function isShaLike(ref: string): boolean {
   return /^[0-9a-f]{7,40}$/i.test(ref);
 }

+/** Test helper — seed N sibling files at one commit tip (P1-03 overflow). */
+export function seedScriptedFlatDirectoryForTest(input: {
+  pilotId: string;
+  fullName: string;
+  dir: string;
+  count: number;
+}): string {
+  const s = repoStore(input.pilotId, input.fullName);
+  const commit = sha(`seed-flat:${input.fullName}:${input.dir}:${input.count}`);
+  s.branches.main = commit;
+  s.refs["refs/heads/main"] = commit;
+  const prefix = input.dir.replace(/^\/+|\/+$/g, "");
+  for (let i = 0; i < input.count; i++) {
+    const path = prefix ? `${prefix}/f${i}.md` : `f${i}.md`;
+    s.files[`${path}@${commit}`] = `content-${i}`;
+  }
+  return commit;
+}
+
 export function resetScriptedStore(pilotId?: string) {
   if (pilotId) catalogs().delete(pilotId);
   else catalogs().clear();
@@ -258,6 +281,76 @@ class ScriptedGitHubProvider implements GitHubProvider {
     throw Object.assign(new Error("REF_NOT_FOUND"), { code: "NOT_FOUND" });
   }

+  async listDirectory(
+    pilotId: string,
+    fullName: string,
+    path: string,
+    ref: string,
+  ): Promise<DirectoryEntry[]> {
+    if (ScriptedFaultRegistry.current(pilotId, fullName) === "read_unavailable") {
+      ScriptedFaultRegistry.assertOk(pilotId, fullName);
+    }
+    ScriptedFaultRegistry.assertOk(pilotId, fullName);
+    const s = repoStore(pilotId, fullName);
+    const head = isShaLike(ref) ? ref : await this.getRefSha(pilotId, fullName, ref);
+    const dirPath = path.replace(/^\/+|\/+$/g, "");
+    const exactKey = `${dirPath}@${head}`;
+    if (s.files[exactKey]) {
+      throw new StudioError(
+        "INVALID_REQUEST",
+        `NOT_A_DIRECTORY: path=${dirPath} est un fichier, pas un répertoire`,
+        { httpStatus: 400 },
+      );
+    }
+    const prefixWithSlash = dirPath ? `${dirPath}/` : "";
+    const children = new Map<string, DirectoryEntry>();
+    for (const key of Object.keys(s.files)) {
+      const at = key.lastIndexOf("@");
+      if (at < 0) continue;
+      const filePath = key.slice(0, at);
+      const commit = key.slice(at + 1);
+      if (commit !== head) continue;
+      if (dirPath) {
+        if (!filePath.startsWith(prefixWithSlash)) continue;
+      }
+      const rest = dirPath ? filePath.slice(prefixWithSlash.length) : filePath;
+      if (!rest) continue;
+      const slashIdx = rest.indexOf("/");
+      if (slashIdx === -1) {
+        const childPath = dirPath ? `${dirPath}/${rest}` : rest;
+        const content = s.files[key] ?? "";
+        const blobSha = sha(`blob ${Buffer.byteLength(content, "utf8")}\0${content}`);
+        children.set(rest, {
+          name: rest,
+          path: childPath,
+          type: "file",
+          sha: blobSha,
+          size: Buffer.byteLength(content, "utf8"),
+        });
+      } else {
+        const dirName = rest.slice(0, slashIdx);
+        const childPath = dirPath ? `${dirPath}/${dirName}` : dirName;
+        if (!children.has(dirName)) {
+          children.set(dirName, {
+            name: dirName,
+            path: childPath,
+            type: "dir",
+            sha: sha(`dir:${childPath}@${head}`),
+          });
+        }
+      }
+    }
+    const entries = [...children.values()].sort((a, b) => a.name.localeCompare(b.name));
+    if (entries.length > MAX_DIRECTORY_ENTRIES) {
+      throw new StudioError(
+        "AMBIGUOUS",
+        `Répertoire trop volumineux (${entries.length} entrées, max ${MAX_DIRECTORY_ENTRIES})`,
+        { httpStatus: 409 },
+      );
+    }
+    return entries;
+  }
+
   async getFileContent(
     pilotId: string,
     fullName: string,

```

## MODIFY `projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts b/projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts
index 43701954..b32ef512 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts
@@ -269,6 +269,84 @@ function isRethrowableStudio(e: unknown): e is StudioError {
   return e instanceof StudioError;
 }

+/** Prefix when a path resolves to a file object, not a directory listing. */
+export const NOT_A_DIRECTORY = "NOT_A_DIRECTORY";
+
+/**
+ * List immediate children of a directory at an explicit ref (non-recursive).
+ * Resolves mobile refs to commit SHA before listing.
+ */
+export async function listGitDirectory(input: {
+  pilotId: string;
+  projectId: string;
+  repositoryId: string;
+  path?: string;
+  ref?: string;
+}) {
+  const repo = await gateRead(input.pilotId, input.projectId, input.repositoryId);
+  if (!input.ref?.trim()) {
+    throw new StudioError("INVALID_REQUEST", "Ref Git explicite requise — main non inventé");
+  }
+  const requestedRef = input.ref.trim();
+  const dirPath = (input.path ?? "").replace(/^\/+|\/+$/g, "");
+  const provider = resolveGitHubProvider();
+
+  let commitSha: string | null = null;
+  let commitShaVerified = false;
+  if (SHA_RE.test(requestedRef)) {
+    commitSha = requestedRef.toLowerCase();
+    commitShaVerified = false;
+  } else {
+    try {
+      commitSha = (await provider.getRefSha(input.pilotId, repo.fullName, requestedRef)).toLowerCase();
+      commitShaVerified = true;
+    } catch (e) {
+      const err = toStudioError(e);
+      if (err.code === "NOT_FOUND") {
+        throw new StudioError(
+          "NOT_FOUND",
+          `${REF_UNRESOLVED}: ref Git inaccessible ou inexistante (${requestedRef})`,
+          { httpStatus: 404, cause: e },
+        );
+      }
+      throw isRethrowableStudio(e) ? e : err;
+    }
+  }
+
+  const readRef = commitSha ?? requestedRef;
+  try {
+    const entries = await provider.listDirectory(
+      input.pilotId,
+      repo.fullName,
+      dirPath,
+      readRef,
+    );
+    if (SHA_RE.test(requestedRef) && entries.length >= 0) {
+      commitShaVerified = true;
+    }
+    return {
+      repositoryId: repo.id,
+      fullName: repo.fullName,
+      path: dirPath,
+      ref: requestedRef,
+      commitSha,
+      commitShaVerified,
+      entries,
+    };
+  } catch (e) {
+    const err = toStudioError(e);
+    if (err.message.includes(NOT_A_DIRECTORY)) throw err;
+    if (err.code === "NOT_FOUND" && commitShaVerified && commitSha) {
+      throw new StudioError(
+        "NOT_FOUND",
+        `Répertoire introuvable sous ref vérifiée path=${dirPath} commit=${commitSha}`,
+        { httpStatus: 404, cause: e },
+      );
+    }
+    throw isRethrowableStudio(e) ? e : err;
+  }
+}
+
 export async function listGitRefs(input: {
   pilotId: string;
   projectId: string;

```

## MODIFY `projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts b/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
index 0c686422..9f4f0687 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
@@ -26,6 +26,14 @@ export type FileContentResult = {
   encoding: "utf-8";
 };

+export type DirectoryEntry = {
+  name: string;
+  path: string;
+  type: "file" | "dir";
+  sha: string;
+  size?: number;
+};
+
 export type PullRequestInfo = {
   number: number;
   title: string;
@@ -47,6 +55,13 @@ export interface GitHubProvider {
     path: string,
     ref: string,
   ): Promise<FileContentResult>;
+  /** Non-recursive directory listing at ref (bounded). */
+  listDirectory(
+    pilotId: string,
+    fullName: string,
+    path: string,
+    ref: string,
+  ): Promise<DirectoryEntry[]>;
   /** Bounded list of refs (branches/tags) for an authorized repository. */
   listRefs(
     pilotId: string,

```

## MODIFY `projects/sfia-studio-next/web/src/domains/execution/effect-service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts b/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
index 02169f13..d99e79fc 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
@@ -923,6 +923,9 @@ export async function authorizePublication(input: {
   attemptId: string;
   statement: string;
   inspectedFingerprint: string;
+  /** Optional durable USER message provenance (E08 conversational mandate). */
+  sourceMessageId?: string | null;
+  clientTurnKey?: string | null;
 }) {
   return db.transaction(async (tx) => {
     const row = (
@@ -979,6 +982,11 @@ export async function authorizePublication(input: {
       );
     }

+    const messageId = input.sourceMessageId?.trim() || null;
+    const turnKey = input.clientTurnKey?.trim() || null;
+    // Conversational path must carry a durable USER message id (P0-03).
+    // Panel authorize may omit it; when present, record provenance only — full
+    // persistence proof runs in admitConversationalPublicationMandate.
     const conditions = JSON.stringify({
       fingerprint: row.fingerprint,
       inspectionFingerprint: plan.inspection.inspectionFingerprint,
@@ -994,6 +1002,16 @@ export async function authorizePublication(input: {
         baseSha: plan.baseSha,
         steps: plan.steps,
       },
+      ...(messageId || turnKey
+        ? {
+            conversationalProvenance: {
+              ...(messageId ? { userMessageId: messageId } : {}),
+              ...(turnKey ? { clientTurnKey: turnKey } : {}),
+              sourceKind: "USER_MESSAGE",
+              roleRequired: "user",
+            },
+          }
+        : {}),
     });

     const decisionId = await insertHumanDecision(tx, {

```

## MODIFY `projects/sfia-studio-next/web/src/domains/conversation/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 0fd75b69..815fdd68 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -116,6 +116,9 @@ import {
   recoverAuthorizedNoraMissions,
   type MissionProjection,
 } from "./mission-continuity";
+import { admitConversationalPublicationMandate } from "./conversation-publication-authority";
+import { admitConversationalMergeMandate, userStatementRequestsMerge } from "./conversation-merge-authority";
+import { userStatementRefusesPublication } from "./conversation-publication-mandate-guards";
 import {
   advanceMissionAfterProjectCreated,
   buildD2AwaitingStep,
@@ -1539,6 +1542,8 @@ export async function postUserMessageAndNora(
   const clientIntentKey = clientTurnKey;
   const missionKeys = missionCorrelationKeys(clientIntentKey);

+  let publicationMandateDecisionId: string | null = null;
+
   let durableProposal: DocumentProposalExact | null = null;
   /** P1: set when concurrent fence diverges / is invalid — block silent strip+reinject. */
   let proposalAuthorityConflict: string | null = null;
@@ -2538,6 +2543,9 @@ export async function postUserMessageAndNora(
     }
   }

+  // Explicit refusal must not leave a publication PREPARED / AWAITING_PILOT_AUTH.
+  const userRefusesPublish = userStatementRefusesPublication(content);
+
   if (
     allowOwnerEffects &&
     !ownershipLostBeforeD4 &&
@@ -2545,6 +2553,7 @@ export async function postUserMessageAndNora(
     documentEffectForAck.documentId &&
     documentEffectForAck.revisionId &&
     missionIntent.wantsPublish &&
+    !userRefusesPublish &&
     ctx.project?.id
   ) {
     const steps: MissionProjection["steps"] = [
@@ -2585,7 +2594,7 @@ export async function postUserMessageAndNora(
         targetBranch: missionIntent.targetBranch,
       });
       if (prepared.ok) {
-        steps.push({
+        const prepStep: MissionProjection["steps"][number] = {
           id: "d7_prepare",
           capabilityId: "d7.prepare_publication",
           status: prepared.status === "PREPARED" ? "WAITING" : "DONE",
@@ -2593,26 +2602,86 @@ export async function postUserMessageAndNora(
           attemptId: prepared.attemptId,
           documentId: documentEffectForAck.documentId,
           revisionId: documentEffectForAck.revisionId,
+        };
+        steps.push(prepStep);
+
+        let missionStatus: MissionProjection["status"] = "AWAITING_PILOT_AUTH";
+        let goalSummary = "CREATE D4 + publication Git (attente autorisation Pilote)";
+        let authorizeCalled = false;
+
+        const mandateAdmission = await admitConversationalPublicationMandate({
+          pilotId,
+          projectId: ctx.project.id,
+          attemptId: prepared.attemptId,
+          userMessageId: reserved.userMessageId,
+          userStatement: content,
+          clientTurnKey: clientIntentKey,
+          qualifiedPath: missionIntent.targetPath,
+          qualifiedBranch: missionIntent.targetBranch,
+          wantsPublishFromQual: missionIntent.wantsPublish,
         });
+
+        if (mandateAdmission.authorized && mandateAdmission.decisionId) {
+          publicationMandateDecisionId = mandateAdmission.decisionId;
+          authorizeCalled = true;
+          prepStep.decisionId = mandateAdmission.decisionId;
+          const resumeStatus = mandateAdmission.missionResume?.status ?? "AUTHORIZED";
+          if (resumeStatus === "COMPLETED") {
+            prepStep.status = "DONE";
+            missionStatus = "COMPLETED";
+            goalSummary = "CREATE D4 + publication Git (mandat conversationnel + effet terminé)";
+          } else if (
+            resumeStatus === "DISPATCHED" ||
+            resumeStatus === "AMBIGUOUS" ||
+            mandateAdmission.missionResume?.dispatched
+          ) {
+            prepStep.status = "WAITING";
+            missionStatus = "ACTIVE";
+            goalSummary = "CREATE D4 + publication Git (mandat conversationnel — dispatch en cours)";
+          } else {
+            prepStep.status = "WAITING";
+            missionStatus = "AWAITING_PILOT_AUTH";
+            goalSummary =
+              "CREATE D4 + publication Git (mandat D6 enregistré — reprise dispatch en attente)";
+          }
+        } else if (
+          mandateAdmission.attempted &&
+          mandateAdmission.reasonCode &&
+          !["ALREADY_AUTHORIZED", "REFUSED", "MERGE_ONLY", "NO_PUBLISH_QUAL"].includes(
+            mandateAdmission.reasonCode,
+          ) &&
+          (mandateAdmission.reasonCode === "AMBIGUOUS_PATH" ||
+            mandateAdmission.reasonCode === "AMBIGUOUS_BRANCH" ||
+            mandateAdmission.reasonCode === "PLAN_DRIFT" ||
+            mandateAdmission.reasonCode === "AMBIGUOUS")
+        ) {
+          missionStatus = "AWAITING_CLARIFICATION";
+          goalSummary = "Publication préparée — mandat conversationnel ambigu (précision requise)";
+          prepStep.reason = mandateAdmission.reason ?? mandateAdmission.reasonCode;
+        }
+
         missionProjection = {
           clientIntentKey,
-          status: "AWAITING_PILOT_AUTH",
-          goalSummary: "CREATE D4 + publication Git (attente autorisation Pilote)",
+          status: missionStatus,
+          goalSummary,
           steps,
           restitution: continueFailedAfterEffect ? "PENDING" : "DELIVERED",
         };
         emitObs({
-          event_name: "d3.mission.prepared_awaiting_auth",
+          event_name: mandateAdmission.authorized
+            ? "d3.mission.prepared_conversational_authorize"
+            : "d3.mission.prepared_awaiting_auth",
           component: "d3.mission_continuity",
           request_id: requestId,
           operation_id: reserved.operationId,
           generation_id: reply.generationId,
-          outcome: "SUCCESS",
+          outcome: mandateAdmission.authorized ? "SUCCESS" : "PARTIAL",
           meta: {
             attempt_id: prepared.attemptId,
             document_id: documentEffectForAck.documentId,
-            // Never call authorize here — HD only on Pilot act.
-            authorize_called: false,
+            authorize_called: authorizeCalled,
+            mandate_reason: mandateAdmission.reasonCode ?? null,
+            decision_id: mandateAdmission.decisionId,
           },
         });
       } else {
@@ -2641,6 +2710,86 @@ export async function postUserMessageAndNora(
     }
   }

+  // Documentary merge — distinct D6 mandate (publication ≠ merge).
+  if (
+    allowOwnerEffects &&
+    !ownershipLostBeforeD4 &&
+    ctx.project?.id &&
+    userStatementRequestsMerge(content)
+  ) {
+    if (await requireTurnOwnership(reserved.commandId, reserved.ownerToken)) {
+      const mergeAdmit = await admitConversationalMergeMandate({
+        pilotId,
+        projectId: ctx.project.id,
+        userMessageId: reserved.userMessageId,
+        userStatement: content,
+        clientTurnKey: clientIntentKey,
+        wantsMergeFromQual: true,
+      });
+      if (mergeAdmit.authorized && mergeAdmit.attemptId) {
+        const mergeStep = {
+          id: "d7_merge",
+          capabilityId: "d7.merge_publication",
+          status:
+            mergeAdmit.dispatchStatus === "COMPLETED"
+              ? ("DONE" as const)
+              : ("WAITING" as const),
+          correlationKey: `merge:mission:${clientIntentKey}`,
+          attemptId: mergeAdmit.attemptId,
+          decisionId: mergeAdmit.decisionId ?? undefined,
+          reason: mergeAdmit.reasonCode,
+        };
+        if (!missionProjection) {
+          missionProjection = {
+            clientIntentKey,
+            status: mergeAdmit.dispatchStatus === "COMPLETED" ? "COMPLETED" : "ACTIVE",
+            goalSummary:
+              mergeAdmit.dispatchStatus === "COMPLETED"
+                ? "Merge documentaire conversationnel terminé"
+                : "Merge documentaire — mandat D6 enregistré / dispatch",
+            steps: [mergeStep],
+            restitution: "CANONICAL",
+          };
+        } else {
+          missionProjection = {
+            ...missionProjection,
+            steps: [...missionProjection.steps, mergeStep],
+            status:
+              mergeAdmit.dispatchStatus === "COMPLETED"
+                ? "COMPLETED"
+                : missionProjection.status,
+            goalSummary:
+              mergeAdmit.dispatchStatus === "COMPLETED"
+                ? `${missionProjection.goalSummary} · merge terminé`
+                : `${missionProjection.goalSummary} · merge en cours`,
+          };
+        }
+      } else if (
+        mergeAdmit.attempted &&
+        (mergeAdmit.reasonCode === "AMBIGUOUS_TARGET" ||
+          mergeAdmit.reasonCode === "AMBIGUOUS" ||
+          mergeAdmit.reasonCode === "NO_PUBLICATION")
+      ) {
+        const clarifyStep = {
+          id: "d7_merge",
+          capabilityId: "d7.merge_publication",
+          status: "PENDING" as const,
+          correlationKey: `merge:mission:${clientIntentKey}`,
+          reason: mergeAdmit.reason ?? mergeAdmit.reasonCode,
+        };
+        if (!missionProjection) {
+          missionProjection = {
+            clientIntentKey,
+            status: "AWAITING_CLARIFICATION",
+            goalSummary: "Merge documentaire — précision requise",
+            steps: [clarifyStep],
+            restitution: "CANONICAL",
+          };
+        }
+      }
+    }
+  }
+
   // D2 projection draft prepared here; persisted only AFTER durable terminal commit (Gap C).
   let preparationProjectionDraft: ReturnType<typeof draftProjectionFromQualification> = null;
   let preparationProjectionAck:
@@ -2881,7 +3030,8 @@ export async function postUserMessageAndNora(
     pendingDocumentCandidate: ownershipLostBeforeD4 ? null : pendingDocumentCandidateOut,
     historicalAuthorization: ownershipLostBeforeD4 ? null : historicalAuthorizationOut,
     idempotentReplay: false,
-    humanDecisionCreated: Boolean(authority?.humanDecisionCreated),
+    humanDecisionCreated:
+      Boolean(authority?.humanDecisionCreated) || Boolean(publicationMandateDecisionId),
     pilotageEffect: pilotageEffectFromAuthority(authority),
     missionProjection,
     nextTurnKind,

```

## MODIFY `projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts b/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
index 5fcb0d68..729fa1e2 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
@@ -17,6 +17,7 @@ import {
 import { listProjectGitLinks } from "@/domains/integrations/project-link-service";
 import { StudioError } from "@/lib/http-errors";
 import { emitObs } from "@/lib/observability";
+import { extractPublicationBranchHint as extractBranchHintStrict } from "./conversation-publication-mandate-guards";
 import { generateNoraReply } from "./nora-adapter";
 import type { DocumentEffectSummary } from "./document-act";

@@ -89,13 +90,10 @@ export type PublicationMissionIntent = {
 /** Server-side marker: only attempts prepared with this prefix are Nora missions. */
 export const NORA_MISSION_PUB_PREFIX = "pub:mission:";

-/** Technical path/branch capture — not a métier intent router. */
+/** Technical path capture — not a métier intent router. */
 const PATH_RE =
   /(?:(?:chemin|path|fichier)\s*[:=]?\s*|sous\s+)[`"]?([A-Za-z0-9_./\-]+\.(?:md|markdown|txt))[`"]?/i;

-const BRANCH_RE =
-  /(?:branche|branch)\s*[:=]?\s*[`"]?([A-Za-z0-9._/\-]+)[`"]?/i;
-
 export function isNoraMissionPublicationKey(correlationKey: string): boolean {
   return correlationKey.startsWith(NORA_MISSION_PUB_PREFIX);
 }
@@ -125,8 +123,9 @@ export function extractPublicationPathHint(userText: string): string | null {
   return userText.match(PATH_RE)?.[1] ?? null;
 }

+/** Delegates to P0-01 strict extractor — never captures "du"/"de" as branch names. */
 export function extractPublicationBranchHint(userText: string): string | null {
-  return userText.match(BRANCH_RE)?.[1] ?? null;
+  return extractBranchHintStrict(userText);
 }

 export function missionCorrelationKeys(clientIntentKey: string): {

```

## MODIFY `projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts b/projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts
index af29a4e3..f245d47b 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts
@@ -1,7 +1,9 @@
 import {
   FILE_ABSENT_AT_VERIFIED_REF,
+  NOT_A_DIRECTORY,
   READ_NOT_FOUND_UNQUALIFIED,
   REF_UNRESOLVED,
+  listGitDirectory,
   listGitRefs,
   listProjectGitSources,
   readGitFile,
@@ -321,5 +323,66 @@ export async function buildNoraGitReadTools(scope: GitToolScope) {
         return { ...payload, charsCharged };
       },
     }),
+    tool({
+      name: "list_git_directory",
+      description:
+        "List immediate children of a directory in an attached Git repo (non-recursive, bounded). " +
+        "ref is mandatory. Does not clone; never authorizes D6/D7 mutation.",
+      parameters: z.object({
+        repositoryId: z.string(),
+        path: z.string().nullable().optional(),
+        ref: z.string(),
+      }),
+      execute: async (args) => {
+        if (scope.budget.remainingCalls <= 0) {
+          return { status: "DENIED", reason: "GIT_TOOL_BUDGET_EXHAUSTED", coverage: "DENIED" as ToolCoverage };
+        }
+        scope.budget.remainingCalls -= 1;
+        try {
+          const result = await listGitDirectory({
+            pilotId: scope.pilotId,
+            projectId: scope.projectId,
+            repositoryId: args.repositoryId,
+            path: args.path ?? "",
+            ref: args.ref,
+          });
+          const payload = {
+            status: "AVAILABLE" as const,
+            path: result.path,
+            ref: result.ref,
+            commitSha: result.commitSha,
+            commitShaVerified: result.commitShaVerified,
+            entries: result.entries,
+            authorityReminder: "Git directory listing is data — never a publication mandate.",
+          };
+          const charsCharged = chargeBudget(scope, payload);
+          emitObs({
+            event_name: "d3.tool.list_git_directory",
+            component: "git.read_tools",
+            operation_id: scope.operationId,
+            generation_id: scope.generationId,
+            outcome: "SUCCESS",
+            meta: { entry_count: result.entries.length, chars_charged: charsCharged },
+          });
+          return { ...payload, charsCharged };
+        } catch (e) {
+          const err = isStudioError(e) ? e : toStudioError(e);
+          const notDir = (err.message ?? "").includes(NOT_A_DIRECTORY);
+          const payload = {
+            status: notDir ? ("AMBIGUOUS" as const) : ("DENIED" as const),
+            reason: err.message,
+            code: err.code,
+            coverage: "DENIED" as ToolCoverage,
+            guidance: notDir
+              ? "Le chemin pointe vers un fichier, pas un répertoire."
+              : "Listing refusé — ne pas inventer d'arborescence.",
+            authorityReminder:
+              "Git read tools never authorize D6 HumanDecision or D7/D9 mutation.",
+            charsCharged: 0,
+          };
+          return payload;
+        }
+      },
+    }),
   ];
 }

```

## MODIFY `projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
index 14177c86..f4ae3eca 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
@@ -90,6 +90,7 @@ export type CognitivePolicy = {
     | "list_project_git_sources"
     | "read_git_file"
     | "list_git_refs"
+    | "list_git_directory"
   >;
   budgets: BudgetLimits;
   reasonCodes: string[];
@@ -215,6 +216,7 @@ export function buildCognitivePolicy(
     "list_project_git_sources",
     "read_git_file",
     "list_git_refs",
+    "list_git_directory",
   ];

   return {

```

## MODIFY `projects/sfia-studio-next/web/src/components/figma/tokens.css`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index d8ba99a4..3e127b0e 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -5173,3 +5173,423 @@
     font-size: 18px;
   }
 }
+
+/* ——— Dépôts Git (page 11 / E08 consultation) ——— */
+.git-repos-surface {
+  display: flex;
+  flex-direction: column;
+  gap: 24px;
+  width: 100%;
+  max-width: 1358px;
+  color: var(--fig-ink);
+}
+.git-error {
+  color: #f0a8a8;
+  background: color-mix(in srgb, #5a1f1f 40%, var(--fig-panel));
+  border: 1px solid #6e3030;
+  border-radius: 8px;
+  padding: 12px 14px;
+  margin: 0;
+}
+.git-muted { color: var(--fig-muted); font-size: 12px; margin: 0; }
+.git-mono { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 12px; word-break: break-all; }
+.git-btn-primary,
+.git-btn-secondary,
+.git-btn-icon {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  gap: 8px;
+  border-radius: 8px;
+  border: 1px solid var(--fig-line);
+  font-size: 12px;
+  font-weight: 600;
+  cursor: pointer;
+  text-decoration: none;
+  color: var(--fig-ink);
+  background: var(--fig-panel-hi);
+  min-height: 40px;
+  padding: 10px 16px;
+}
+.git-btn-primary {
+  background: var(--fig-accent-bg);
+  border-color: color-mix(in srgb, var(--fig-accent) 40%, var(--fig-line));
+}
+.git-btn-icon {
+  width: 42px;
+  padding: 0;
+}
+.git-btn-secondary.is-disabled {
+  opacity: 0.45;
+  pointer-events: none;
+}
+.git-badge-ok {
+  display: inline-flex;
+  align-items: center;
+  padding: 6px 12px;
+  border-radius: 30px;
+  background: var(--fig-ok-bg);
+  color: var(--fig-ok);
+  font-size: 11px;
+  font-weight: 600;
+}
+.git-badge-soft {
+  display: inline-flex;
+  align-items: center;
+  padding: 6px 12px;
+  border-radius: 30px;
+  background: var(--fig-accent-bg);
+  color: var(--fig-ink);
+  font-size: 11px;
+  font-weight: 600;
+  width: fit-content;
+}
+.git-empty-layout,
+.git-manage,
+.git-enlarge-layout {
+  display: flex;
+  gap: 18px;
+  align-items: stretch;
+}
+.git-empty-main,
+.git-manage-main,
+.git-enlarge-preview {
+  flex: 1 1 62%;
+  background: var(--fig-panel);
+  border: 1px solid var(--fig-line);
+  border-radius: 10px;
+  padding: 22px 22px 20px;
+  display: flex;
+  flex-direction: column;
+  gap: 12px;
+}
+.git-empty-side,
+.git-manage-side,
+.git-enlarge-details {
+  flex: 0 0 492px;
+  max-width: 492px;
+  background: var(--fig-panel);
+  border: 1px solid var(--fig-line);
+  border-radius: 10px;
+  padding: 22px;
+  display: flex;
+  flex-direction: column;
+  gap: 10px;
+}
+.git-side-label {
+  margin: 8px 0 0;
+  font-size: 13px;
+  font-weight: 600;
+  color: var(--fig-ink);
+}
+.git-repo-card {
+  background: var(--fig-panel);
+  border: 1px solid var(--fig-line);
+  border-radius: 10px;
+  padding: 20px 22px;
+  display: flex;
+  flex-direction: column;
+  gap: 12px;
+}
+.git-repo-card-row {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  gap: 15px;
+}
+.git-repo-fullname {
+  margin: 0;
+  font-size: 17px;
+  font-weight: 600;
+}
+.git-branch-wrap { position: relative; }
+.git-branch-select {
+  display: inline-flex;
+  align-items: center;
+  gap: 8px;
+  height: 37px;
+  padding: 8px 11px 8px 12px;
+  border-radius: 7px;
+  border: 1px solid var(--fig-line);
+  background: var(--fig-panel-hi);
+  color: var(--fig-ink);
+  font-size: 13px;
+  font-weight: 600;
+  cursor: pointer;
+}
+.git-branch-menu {
+  position: absolute;
+  z-index: 20;
+  top: calc(100% + 4px);
+  left: 0;
+  min-width: 180px;
+  max-height: 240px;
+  overflow: auto;
+  margin: 0;
+  padding: 6px;
+  list-style: none;
+  background: var(--fig-panel-hi);
+  border: 1px solid var(--fig-line);
+  border-radius: 8px;
+  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
+}
+.git-branch-menu button {
+  width: 100%;
+  text-align: left;
+  background: transparent;
+  border: 0;
+  color: var(--fig-ink);
+  padding: 8px 10px;
+  border-radius: 6px;
+  cursor: pointer;
+  font-size: 13px;
+}
+.git-branch-menu button:hover,
+.git-branch-menu button[aria-selected="true"] {
+  background: var(--fig-accent-bg);
+}
+.git-tabs {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 37px;
+  align-items: center;
+}
+.git-tabs button {
+  background: transparent;
+  border: 0;
+  padding: 0;
+  color: var(--fig-muted);
+  font-size: 15px;
+  cursor: pointer;
+}
+.git-tabs button.is-active {
+  color: var(--fig-accent);
+  font-weight: 600;
+}
+.git-split-3070 {
+  display: flex;
+  gap: 18px;
+  align-items: stretch;
+  width: 100%;
+}
+.git-tree-panel {
+  flex: 0 0 30%;
+  max-width: 406px;
+  min-width: 260px;
+  background: var(--fig-panel);
+  border: 1px solid var(--fig-line);
+  border-radius: 10px;
+  padding: 20px 22px;
+  display: flex;
+  flex-direction: column;
+  gap: 12px;
+  min-height: 545px;
+}
+.git-preview-panel {
+  flex: 1 1 70%;
+  background: var(--fig-panel);
+  border: 1px solid var(--fig-line);
+  border-radius: 10px;
+  padding: 20px 22px;
+  display: flex;
+  flex-direction: column;
+  gap: 12px;
+  min-height: 545px;
+  min-width: 0;
+}
+.git-tree-panel h2,
+.git-pubs h2,
+.git-manage-main h2,
+.git-unavailable h2 {
+  margin: 0;
+  font-size: 20px;
+  font-weight: 600;
+}
+.git-tree-list {
+  list-style: none;
+  margin: 0;
+  padding: 0;
+  display: flex;
+  flex-direction: column;
+  gap: 4px;
+  overflow: auto;
+  max-height: 420px;
+}
+.git-tree-row {
+  display: flex;
+  align-items: center;
+  gap: 9px;
+  width: 100%;
+  min-height: 39px;
+  border: 0;
+  border-radius: 7px;
+  background: transparent;
+  color: var(--fig-muted);
+  font-size: 12px;
+  cursor: pointer;
+  text-align: left;
+  padding-right: 10px;
+}
+.git-tree-row.is-selected {
+  background: var(--fig-accent-bg);
+  color: var(--fig-ink);
+  font-weight: 600;
+}
+.git-tree-note { margin-top: auto; }
+.git-tree-up {
+  align-self: flex-start;
+  background: transparent;
+  border: 0;
+  color: var(--fig-accent);
+  cursor: pointer;
+  font-size: 12px;
+  padding: 0;
+}
+.git-preview-head {
+  display: flex;
+  gap: 12px;
+  align-items: flex-start;
+  justify-content: space-between;
+}
+.git-preview-title {
+  margin: 0;
+  font-size: 18px;
+  font-weight: 600;
+}
+.git-preview-path {
+  margin: 6px 0 0;
+  font-size: 11px;
+  color: var(--fig-muted);
+}
+.git-preview-actions {
+  display: flex;
+  gap: 8px;
+  align-items: center;
+  flex-wrap: wrap;
+  justify-content: flex-end;
+}
+.git-preview-kicker {
+  margin: 0;
+  font-size: 11px;
+  font-weight: 600;
+  color: var(--fig-accent);
+}
+.git-preview-body {
+  overflow: auto;
+  min-height: 0;
+  flex: 1;
+}
+.git-preview-pre {
+  white-space: pre-wrap;
+  word-break: break-word;
+  font-size: 13px;
+  color: var(--fig-muted);
+  margin: 0;
+}
+.git-details-list,
+.git-details-inline {
+  display: grid;
+  gap: 10px;
+  margin: 0;
+}
+.git-details-list dt,
+.git-details-inline dt {
+  font-size: 11px;
+  color: var(--fig-muted);
+}
+.git-details-list dd,
+.git-details-inline dd {
+  margin: 2px 0 0;
+}
+.git-pubs,
+.git-unavailable {
+  background: var(--fig-panel);
+  border: 1px solid var(--fig-line);
+  border-radius: 10px;
+  padding: 22px;
+  display: flex;
+  flex-direction: column;
+  gap: 12px;
+}
+.git-pubs-list {
+  list-style: none;
+  margin: 0;
+  padding: 0;
+  display: flex;
+  flex-direction: column;
+  gap: 12px;
+}
+.git-pubs-list li {
+  border: 1px solid var(--fig-line);
+  border-radius: 8px;
+  padding: 14px 16px;
+  background: var(--fig-panel-hi);
+}
+.git-pubs-path { margin: 0 0 6px; font-weight: 600; }
+.git-pubs-status { margin: 8px 0 0; color: var(--fig-ok); font-size: 12px; font-weight: 600; }
+.git-manage-list {
+  list-style: none;
+  margin: 0;
+  padding: 0;
+  display: flex;
+  flex-direction: column;
+  gap: 12px;
+}
+.git-manage-item {
+  border: 1px solid var(--fig-line);
+  border-radius: 8px;
+  padding: 14px 16px;
+  background: var(--fig-panel-hi);
+}
+.git-manage-item-head {
+  display: flex;
+  align-items: center;
+  gap: 12px;
+}
+.git-manage-actions {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 11px;
+  margin-top: 10px;
+}
+.git-modal-backdrop {
+  position: fixed;
+  inset: 0;
+  background: rgba(5, 8, 16, 0.62);
+  display: flex;
+  align-items: center;
+  justify-content: center;
+  z-index: 80;
+  padding: 24px;
+}
+.git-modal {
+  width: min(520px, 100%);
+  background: var(--fig-panel);
+  border: 1px solid var(--fig-line);
+  border-radius: 12px;
+  padding: 22px;
+  display: flex;
+  flex-direction: column;
+  gap: 14px;
+}
+@media (max-width: 1280px) {
+  .git-split-3070,
+  .git-empty-layout,
+  .git-manage,
+  .git-enlarge-layout {
+    flex-direction: column;
+  }
+  .git-tree-panel,
+  .git-empty-side,
+  .git-manage-side,
+  .git-enlarge-details {
+    max-width: none;
+    flex-basis: auto;
+    width: 100%;
+  }
+}
+@media (max-width: 720px) {
+  .git-tabs { gap: 16px; }
+  .git-repo-card-row { gap: 10px; }
+  .git-preview-head { flex-direction: column; }
+}

```

## MODIFY `projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx b/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx
index 084c21ea..8228551a 100644
--- a/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx
+++ b/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx
@@ -30,7 +30,8 @@ function statusBanner(status: string): { tone: string; text: string } {
     case "REVOKED":
       return {
         tone: "text-amber-300",
-        text: "Accès GitHub retiré ou révoqué. Les acquis D4 et faits historiques restent conservés.",
+        text:
+          "Accès Studio local retiré. Ce n’est pas automatiquement une révocation complète de l’installation GitHub. Les acquis D4 et faits historiques restent conservés.",
       };
     default:
       return {
@@ -209,8 +210,9 @@ export function IntegrationsPanel() {
                   disabled={busy}
                   onClick={() => void disconnect()}
                   data-testid="disconnect-github"
+                  title="Coupe l’accès Studio local — ne révoque pas automatiquement l’App GitHub"
                 >
-                  Déconnecter
+                  Déconnecter (Studio)
                 </button>
               </>
             ) : (

```

## MODIFY `projects/sfia-studio-next/web/src/components/integrations/publication-effect-labels.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/integrations/publication-effect-labels.ts b/projects/sfia-studio-next/web/src/components/integrations/publication-effect-labels.ts
index 4f94bd97..bbf01eb9 100644
--- a/projects/sfia-studio-next/web/src/components/integrations/publication-effect-labels.ts
+++ b/projects/sfia-studio-next/web/src/components/integrations/publication-effect-labels.ts
@@ -56,7 +56,9 @@ export function dispatchButtonLabel(effectProviderMode: string | undefined | nul

 export function mergeDispatchButtonLabel(effectProviderMode: string | undefined | null): string {
   const provider = effectProviderLabel(effectProviderMode);
-  if (provider === "REAL") return "Déclencher merge (REAL — hard-blocked serveur)";
+  if (provider === "REAL") {
+    return "Déclencher merge (REAL — gate documentary + préconditions SHA)";
+  }
   if (provider === "SCRIPTED") return "Déclencher merge (SCRIPTED)";
   return "Déclencher merge";
 }

```

## MODIFY `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index fa648593..d33a6a2d 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -59,7 +59,7 @@ import {
   type TurnReference,
   parseTurnProjection,
 } from "@/domains/conversation/turn-projection";
-import { PublicationInspectionPanel } from "@/components/integrations/PublicationInspectionPanel";
+import { GitRepositoriesSurface } from "@/components/integrations/GitRepositoriesSurface";
 import { useProjectSpace } from "@/components/shell/ProjectSpaceContext";
 import {
   clearProjectSurfaceNavIntent,
@@ -2930,9 +2930,10 @@ export default function ProjectPage() {
       ) : null}

       {surface === "git" || surface === "publication" ? (
-        <div className="space-y-4" data-testid="git-surface">
-          <PublicationInspectionPanel projectId={params.projectId} />
-        </div>
+        <GitRepositoriesSurface
+          projectId={params.projectId}
+          projectName={projectName}
+        />
       ) : null}

       {surface === "journal" ? (

```

## MODIFY `projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
index 83d950d0..96526533 100644
--- a/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
@@ -254,7 +254,81 @@ describe("ACCEPT-01 mission continuity (PG / SCRIPTED)", () => {
     expect(chat.missionProjection?.steps.find((s) => s.id === "d7_prepare")?.attemptId).toBeFalsy();
   });

-  it("ACCEPT-01 chat: CREATE + publish with path prepares and awaits auth without HD", async () => {
+  it("E08-B: clear USER publish admits D6 mandate on same turn (no second click)", async () => {
+    const { pilotId, projectId, preparationId } = await seedProjectWithGit("e08-b-mandate");
+    const ask =
+      "Crée un document intitulé E08 Mandate et publie-le dans mon dépôt GitHub chemin docs/studio-next/e08-mandate.md";
+    const chat = await noraTurn(pilotId, preparationId, ask, {
+      clientTurnKey: newId("ctk"),
+      fixture: {
+        kind: "d4_publish",
+        title: "E08 Mandate",
+        publicationPath: "docs/studio-next/e08-mandate.md",
+      },
+    });
+    expect(chat.documentSave?.status).toBe("AVAILABLE");
+    expect(chat.humanDecisionCreated).toBe(true);
+    expect(chat.missionProjection?.status).toBe("COMPLETED");
+    const prepStep = chat.missionProjection?.steps.find((s) => s.id === "d7_prepare");
+    expect(prepStep?.decisionId).toBeTruthy();
+
+    const attempt = (
+      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepStep!.attemptId!))
+    )[0];
+    expect(["COMPLETED", "DISPATCHED", "AMBIGUOUS"]).toContain(attempt?.status);
+    expect(attempt?.decisionId).toBe(prepStep?.decisionId);
+
+    const hd = (
+      await db
+        .select()
+        .from(humanDecisions)
+        .where(
+          and(eq(humanDecisions.projectId, projectId), eq(humanDecisions.id, attempt!.decisionId!)),
+        )
+    )[0];
+    expect(hd?.kind).toBe("GIT_PUBLICATION_MANDATE");
+    expect(hd?.state).toBe("APPLICABLE");
+    const conditions = JSON.parse(hd?.effectConditions ?? "{}") as {
+      conversationalProvenance?: { userMessageId?: string };
+    };
+    expect(conditions.conversationalProvenance?.userMessageId).toBe(chat.userMessageId);
+  });
+
+  it("E08-B negative phrase: no PREPARED publication / no HumanDecision", async () => {
+    const { pilotId, projectId, preparationId } = await seedProjectWithGit("e08-b-refuse");
+    const ask =
+      "Crée un document intitulé E08 Refuse et ne publie pas dans mon dépôt GitHub chemin docs/studio-next/e08-refuse.md";
+    registerCreateDocumentTitled(ask, {
+      title: "E08 Refuse",
+      publicationPath: "docs/studio-next/e08-refuse.md",
+      publish: true,
+    });
+    const chat = await noraTurn(pilotId, preparationId, ask, {
+      clientTurnKey: newId("ctk"),
+      fixture: {
+        kind: "d4_publish",
+        title: "E08 Refuse",
+        publicationPath: "docs/studio-next/e08-refuse.md",
+      },
+    });
+    expect(chat.humanDecisionCreated).toBe(false);
+    // Explicit refusal must not leave PREPARED / AWAITING_PILOT_AUTH.
+    expect(chat.missionProjection?.steps.some((s) => s.id === "d7_prepare")).not.toBe(true);
+    const pubs = await db
+      .select()
+      .from(effectAttempts)
+      .where(
+        and(eq(effectAttempts.projectId, projectId), eq(effectAttempts.kind, "GIT_PUBLICATION")),
+      );
+    expect(pubs).toHaveLength(0);
+    const decisions = await db
+      .select()
+      .from(humanDecisions)
+      .where(eq(humanDecisions.projectId, projectId));
+    expect(decisions.some((d) => d.kind === "GIT_PUBLICATION_MANDATE")).toBe(false);
+  });
+
+  it("ACCEPT-01 chat: CREATE + publish with path prepares and conversational authorize", async () => {
     const { pilotId, projectId, preparationId } = await seedProjectWithGit("accept01-chat");
     const ask =
       "Crée un document intitulé ACCEPT-01 Continuity et publie-le dans mon dépôt GitHub chemin docs/studio-next/accept01.md";
@@ -276,44 +350,54 @@ describe("ACCEPT-01 mission continuity (PG / SCRIPTED)", () => {
       },
     });
     expect(chat.documentSave?.status).toBe("AVAILABLE");
-    expect(chat.missionProjection?.status).toBe("AWAITING_PILOT_AUTH");
+    expect(chat.humanDecisionCreated).toBe(true);
+    expect(chat.missionProjection?.status).toBe("COMPLETED");
     const prepStep = chat.missionProjection?.steps.find((s) => s.id === "d7_prepare");
     expect(prepStep?.attemptId).toBeTruthy();
-    expect(prepStep?.status).toBe("WAITING");
+    expect(prepStep?.decisionId).toBeTruthy();

     const attempt = (
       await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepStep!.attemptId!))
     )[0];
-    expect(attempt?.status).toBe("PREPARED");
-    expect(attempt?.decisionId).toBeNull();
+    expect(["COMPLETED", "DISPATCHED", "AMBIGUOUS"]).toContain(attempt?.status);
+    expect(attempt?.decisionId).toBeTruthy();
     expect(attemptIsNoraMission(attempt!)).toBe(true);

     const msgs = await listMessages(pilotId, preparationId);
     const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
     expect(assistant?.content).toMatch(/Résultat applicatif D4|Suite de mission|AVAILABLE/);
-    // SEM-02: mission auth state is on missionProjection; assistant may be D4-only.
-    expect(chat.missionProjection?.status).toBe("AWAITING_PILOT_AUTH");
     expect(projectId).toBeTruthy();
   });

   it("ACCEPT-01 + P0-B: authorize then recover/resume; restitution idempotent (P1-C)", async () => {
-    const { pilotId, projectId, preparationId } = await seedProjectWithGit("accept01-resume");
-    const ask =
-      "Crée un document intitulé ACCEPT-01 Resume et publie-le dans mon dépôt GitHub chemin docs/studio-next/accept01-resume.md";
+    const { pilotId, projectId, preparationId, repositoryId } = await seedProjectWithGit(
+      "accept01-resume",
+    );
+    // Create doc without publish; prepare Nora mission manually → AUTHORIZED crash window.
+    const ask = "Crée un document intitulé ACCEPT-01 Resume pour inspection.";
+    const clientTurnKey = newId("ctk");
     const chat = await noraTurn(pilotId, preparationId, ask, {
-      clientTurnKey: newId("ctk"),
-      fixture: {
-        kind: "d4_publish",
-        title: "ACCEPT-01 Resume",
-        publicationPath: "docs/studio-next/accept01-resume.md",
-      },
+      clientTurnKey,
+      fixture: { kind: "d4_create", title: "ACCEPT-01 Resume pour inspection" },
+    });
+    expect(chat.documentSave?.status).toBe("AVAILABLE");
+    const prepared = await preparePublication({
+      pilotId,
+      projectId,
+      documentId: chat.documentSave!.documentId!,
+      revisionId: chat.documentSave!.revisionId!,
+      repositoryId,
+      targetPath: "docs/studio-next/accept01-resume.md",
+      targetBranch: "main",
+      correlationKey: `pub:mission:${clientTurnKey}`,
     });
-    const attemptId = chat.missionProjection?.steps.find((s) => s.id === "d7_prepare")?.attemptId;
-    expect(attemptId).toBeTruthy();
+    expect(prepared.status).toBe("PREPARED");
+    const attemptId = prepared.attemptId;

     const row = (
-      await db.select().from(effectAttempts).where(eq(effectAttempts.id, attemptId!))
+      await db.select().from(effectAttempts).where(eq(effectAttempts.id, attemptId))
     )[0]!;
+    expect(row.status).toBe("PREPARED");
     const plan = JSON.parse(row.planJson) as {
       inspection: { kind: string; inspectionFingerprint: string };
     };
@@ -322,7 +406,7 @@ describe("ACCEPT-01 mission continuity (PG / SCRIPTED)", () => {
     const auth = await authorizePublication({
       pilotId,
       projectId,
-      attemptId: attemptId!,
+      attemptId,
       statement: "GO publication ACCEPT-01",
       inspectedFingerprint: plan.inspection.inspectionFingerprint,
     });
@@ -382,7 +466,8 @@ describe("ACCEPT-01 mission continuity (PG / SCRIPTED)", () => {
       fixture: replayFixture,
     });
     expect(first.documentSave?.status).toBe("AVAILABLE");
-    expect(first.missionProjection?.status).toBe("AWAITING_PILOT_AUTH");
+    expect(first.humanDecisionCreated).toBe(true);
+    expect(first.missionProjection?.status).toBe("COMPLETED");
     const firstDoc = first.documentSave!.documentId!;
     const firstAttempt = first.missionProjection!.steps.find((s) => s.id === "d7_prepare")!
       .attemptId!;
@@ -403,7 +488,7 @@ describe("ACCEPT-01 mission continuity (PG / SCRIPTED)", () => {
       .from(effectAttempts)
       .where(and(eq(effectAttempts.projectId, projectId), eq(effectAttempts.id, firstAttempt)));
     expect(attempts).toHaveLength(1);
-    expect(attempts[0]?.status).toBe("PREPARED");
-    expect(attempts[0]?.decisionId).toBeNull();
+    expect(["COMPLETED", "DISPATCHED", "AMBIGUOUS", "AUTHORIZED"]).toContain(attempts[0]?.status);
+    expect(attempts[0]?.decisionId).toBeTruthy();
   });
 });

```

## MODIFY `projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts
index 395b4941..3d680fef 100644
--- a/projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts
@@ -3702,7 +3702,7 @@ describe("PostgreSQL ML4 publication integrity T01–T20 (SCRIPTED)", () => {
     expect(await pubRefs(prepared.attemptId)).toHaveLength(0);
   });

-  it("T20: merge REAL — toujours hard-blocked", async () => {
+  it("T20: merge REAL — refuses without usable REAL provider credentials/effects", async () => {
     const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("t20-merge");
     const prepared = await preparePublication({
       pilotId,

```

## MODIFY `projects/sfia-studio-next/construction/delivery-history.md`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 01ea3018..03a8c0dd 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,42 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-21-ENSEMBLE08-CORRECTIVE-P0P1-G5-REAL
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-21 |
+| Macro-lot | Ensemble 08 — cycle correctif intégré (P0/P1, Nora merge, Figma L2, Playwright, REAL allowlist) |
+| Type | CORRECTIVE / CRITICAL · **NO RELEASE** · Gate C OPEN |
+| Base | `origin/main` `a12f89a1` · branche `feat/next-ensemble08-git-publications-nora` (local only) |
+| Prior handoff | `74528b81` (FULL §7.2) — pack mono-cycle réinitialisé puis republier |
+| P0 | branch hint « du/de » · merge SHA ≠ HEAD · provenance USER persistée |
+| P1 | stale async · attach explicite · truncation >200 AMBIGUOUS · pubs D8 non-live |
+| Nora | refuse → no PREPARED · `admitConversationalMergeMandate` |
+| REAL multi-repo | allowlist `GITHUB_APP_ALLOWED_REPOS` (owner-bound, no allow-all) |
+| Figma | L2 11.03 metadata · G5 runtime **NOT PROVEN** |
+| Tests | unit **743 PASS** · mission-continuity PG **10 PASS** · git-collaboration PG **93 PASS** · Playwright E08 surface **2 PASS SCRIPTED** · tsc/build PASS |
+| REAL mutation | **NOT PROVEN** (pas de GO sandbox) |
+| Push projet | **NONE** |
+| Verdict candidat | **DELIVERY READY WITH RESERVES** |
+
+## delivery_id: DELIV-2026-11-21-ENSEMBLE08-GIT-PUBLICATIONS-NORA
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-21 |
+| Macro-lot | Ensemble 08 — Dépôts Git, publications, conduite Nora |
+| Type | EVOL / Delivery CRITICAL · **NO RELEASE** · Gate C OPEN |
+| Base | `origin/main` `a12f89a1` (annoncé `1dd1a8ec` +2 : Journal nav PR #689) |
+| Branche | `feat/next-ensemble08-git-publications-nora` (local only — **no project push**) |
+| Capacité A | tree API · publications projection · `GitRepositoriesSurface` · multi-liens |
+| Capacité B | mandat conversationnel D6 → `authorizePublication` · `list_git_directory` Nora |
+| Merge REAL | code path documentary + SHA (non exercé END-TO-END REAL ce cycle) |
+| Figma | L0/L1 + PNG SHA page 11 · G5 runtime **NOT PROVEN** |
+| Tests | unit 725 PASS · mission-continuity PG 10 PASS · git-collaboration filtré 24 PASS · build PASS |
+| Push projet | **NONE** |
+| Verdict candidat | **DELIVERY READY WITH RESERVES** — supersédé par cycle correctif ci-dessus |
+
 ## delivery_id: DELIV-2026-11-21-ENSEMBLE07-PR687-SAS06-RESPONSIVE-CI

 | Field | Value |

```

## Binary evidence (SVG icons)
- `projects/sfia-studio-next/web/public/figma-git-icons/branch.svg` · sha256 `2b0f16faa0b29bb2163025ee2723c443280029d51afc4aca0a5f483b91085ed3`

### CREATE `projects/sfia-studio-next/web/public/figma-git-icons/branch.svg`

```svg
<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Ic&#195;&#180;ne Git branche">
<path id="Vector" d="M5.33333 2C5.33333 2.73638 4.73638 3.33333 4 3.33333C3.26362 3.33333 2.66667 2.73638 2.66667 2C2.66667 1.26362 3.26362 0.666666 4 0.666666C4.73638 0.666666 5.33333 1.26362 5.33333 2Z" stroke-width="1.2" stroke="#A49CFF"/>
<path id="Vector_2" d="M5.33333 11.3333C5.33333 12.0697 4.73638 12.6667 4 12.6667C3.26362 12.6667 2.66667 12.0697 2.66667 11.3333C2.66667 10.597 3.26362 10 4 10C4.73638 10 5.33333 10.597 5.33333 11.3333Z" stroke-width="1.2" stroke="#A49CFF"/>
<path id="Vector_3" d="M13.3333 4C13.3333 4.73638 12.7364 5.33333 12 5.33333C11.2636 5.33333 10.6667 4.73638 10.6667 4C10.6667 3.26362 11.2636 2.66667 12 2.66667C12.7364 2.66667 13.3333 3.26362 13.3333 4Z" stroke-width="1.2" stroke="#A49CFF"/>
<path id="Vector_4" d="M4 3.33333V10M12 5.33333V6.66667C12 7.72753 11.5786 8.74495 10.8284 9.49509C10.0783 10.2452 9.06087 10.6667 8 10.6667H5.33333" stroke-width="1.2" stroke-linecap="round" stroke="#A49CFF"/>
</g>
</svg>

```
- `projects/sfia-studio-next/web/public/figma-git-icons/chevron.svg` · sha256 `41ff9a3a354da5a74ec508e2a2c83b7603d079fd77752cc776bb7d32b0fbdd31`

### CREATE `projects/sfia-studio-next/web/public/figma-git-icons/chevron.svg`

```svg
<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Chevron / ouvrir la liste">
<path id="Vector" d="M3.5 5.25L7 8.75L10.5 5.25" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" stroke="#A6B0C7"/>
</g>
</svg>

```
- `projects/sfia-studio-next/web/public/figma-git-icons/expand.svg` · sha256 `2361cac660357870fe1d9f97681e882671df4a0117f25ff88ea5e9569381689a`

### CREATE `projects/sfia-studio-next/web/public/figma-git-icons/expand.svg`

```svg
<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Ic&#195;&#180;ne / Agrandir (vecteur)">
<path id="Vector" d="M17.5 7.5V2.5H12.5M17.5 2.5L11.6667 8.33333M2.5 12.5V17.5H7.5M2.5 17.5L8.33333 11.6667" stroke-width="1.58333" stroke-linecap="round" stroke-linejoin="round" stroke="#A8B4D0"/>
</g>
</svg>

```
- `projects/sfia-studio-next/web/public/figma-git-icons/file.svg` · sha256 `0cd27a469ddd04c3bc6676cba2973b05a7dec2a8992af7f4630fc6717e29fb58`

### CREATE `projects/sfia-studio-next/web/public/figma-git-icons/file.svg`

```svg
<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Git / Ic&#195;&#180;ne fichier &#226;&#128;&#148; SVG">
<path id="Vector" d="M10.5 1.5H4.5C4.10218 1.5 3.72064 1.65804 3.43934 1.93934C3.15804 2.22064 3 2.60218 3 3V15C3 15.3978 3.15804 15.7794 3.43934 16.0607C3.72064 16.342 4.10218 16.5 4.5 16.5H13.5C13.8978 16.5 14.2794 16.342 14.5607 16.0607C14.842 15.7794 15 15.3978 15 15V6L10.5 1.5Z" stroke-width="1.35" stroke-linejoin="round" stroke="#AAA5FF"/>
<path id="Vector_2" d="M10.5 1.5V6H15M6 9.75H12M6 12.75H12" stroke-width="1.35" stroke-linecap="round" stroke="#AAA5FF"/>
</g>
</svg>

```
- `projects/sfia-studio-next/web/public/figma-git-icons/folder.svg` · sha256 `3bad96757a3bfe8e85c88c11bda49cf1fea6442bf838711117bab9b299ec3e72`

### CREATE `projects/sfia-studio-next/web/public/figma-git-icons/folder.svg`

```svg
<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Git / Ic&#195;&#180;ne dossier &#226;&#128;&#148; SVG">
<path id="Vector" d="M15 15H3C2.60218 15 2.22064 14.842 1.93934 14.5607C1.65804 14.2794 1.5 13.8978 1.5 13.5V4.5C1.5 4.10218 1.65804 3.72064 1.93934 3.43934C2.22064 3.15804 2.60218 3 3 3H6.75L8.25 5.25H15C15.3978 5.25 15.7794 5.40804 16.0607 5.68934C16.342 5.97064 16.5 6.35218 16.5 6.75V13.5C16.5 13.8978 16.342 14.2794 16.0607 14.5607C15.7794 14.842 15.3978 15 15 15Z" stroke-width="1.35" stroke-linejoin="round" stroke="#AAA5FF"/>
</g>
</svg>

```
