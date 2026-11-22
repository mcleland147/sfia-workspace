"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SafeMarkdown } from "@/components/SafeMarkdown";
import { GitFileInfoPopover } from "@/components/integrations/GitFileInfoPopover";
import { GitPreviewUnavailable } from "@/components/integrations/GitPreviewUnavailable";
import type {
  GitFileOpenUrl,
  GitPreviewState,
} from "@/domains/integrations/git-preview";
import { resolveGitFileOpenUrl } from "@/domains/integrations/git-preview";

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
  fullName?: string;
  preview: GitPreviewState;
  openUrl: GitFileOpenUrl;
};

function parseFileResponse(
  j: Record<string, unknown>,
  fallbackPath: string,
  fallbackRef: string,
): FileView {
  const provenance = (j.provenance ?? {}) as {
    path?: string;
    requestedRef?: string;
    commitSha?: string | null;
    commitShaVerified?: boolean;
    blobSha?: string;
    permalink?: string | null;
    fullName?: string;
  };
  const path = provenance.path ?? fallbackPath;
  const ref = provenance.requestedRef ?? fallbackRef;
  const blobSha = provenance.blobSha ?? "";
  const permalink = provenance.permalink ?? null;
  const fullName = provenance.fullName;
  const contentKind =
    typeof j.contentKind === "string" ? j.contentKind : undefined;
  let preview = j.preview as GitPreviewState | undefined;
  if (!preview || typeof preview.available !== "boolean") {
    if (contentKind === "binary" || contentKind === "too_large") {
      preview = {
        available: false,
        reason:
          contentKind === "too_large" ? "FILE_TOO_LARGE" : "BINARY_CONTENT",
        title: "Aperçu indisponible",
        message:
          "Ce format de fichier ne peut pas être affiché directement dans SFIA Studio.",
        hint: "Consulte le document sur GitHub pour le visualiser ou le télécharger.",
        formatLabel: "FICHIER",
        motifLabel:
          contentKind === "too_large"
            ? "FICHIER TROP VOLUMINEUX"
            : "FICHIER BINAIRE",
      };
    } else {
      preview = {
        available: true,
        renderer: /\.md$/i.test(path) ? "markdown" : "text",
      };
    }
  }
  let openUrl = j.openUrl as GitFileOpenUrl | undefined;
  if (!openUrl || typeof openUrl.kind !== "string") {
    openUrl = resolveGitFileOpenUrl({
      fullName,
      path,
      requestedRef: ref,
      permalink,
      blobSha,
    });
  }
  return {
    path,
    ref,
    commitSha: provenance.commitSha ?? null,
    commitShaVerified: Boolean(provenance.commitShaVerified),
    blobSha,
    content: typeof j.content === "string" ? j.content : "",
    permalink,
    fullName,
    preview,
    openUrl,
  };
}

function githubAction(file: FileView) {
  const href = file.openUrl.href;
  if (href) {
    return (
      <a
        className="git-btn-secondary"
        href={href}
        target="_blank"
        rel="noreferrer"
        data-testid="git-action-github"
      >
        Ouvrir sur GitHub
      </a>
    );
  }
  return (
    <span className="git-btn-secondary is-disabled" data-testid="git-action-github-disabled">
      Ouvrir sur GitHub
    </span>
  );
}

function previewBody(file: FileView) {
  if (!file.preview.available) {
    return <GitPreviewUnavailable preview={file.preview} openUrl={file.openUrl} />;
  }
  if (file.preview.renderer === "markdown" || /\.md$/i.test(file.path)) {
    return <SafeMarkdown content={file.content} />;
  }
  return <pre className="git-preview-pre">{file.content}</pre>;
}

function previewKicker(file: FileView): string {
  if (!file.preview.available) {
    return `${file.preview.formatLabel} · LECTURE SEULE`;
  }
  if (file.preview.renderer === "markdown" || /\.md$/i.test(file.path)) {
    return "DOCUMENT MARKDOWN · LECTURE SEULE";
  }
  return "DOCUMENT À RÉFÉRENCE IDENTIFIÉE · LECTURE SEULE";
}

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
  prStatusKind?: string;
  prStatusLabel?: string;
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
  const [refsIncomplete, setRefsIncomplete] = useState(false);
  const [branchFilter, setBranchFilter] = useState("");
  const [branchFilterApplied, setBranchFilterApplied] = useState("");
  const [tab, setTab] = useState<TabId>("files");
  const [treePath, setTreePath] = useState("");
  const [entries, setEntries] = useState<TreeEntry[]>([]);
  const [expandedDirs, setExpandedDirs] = useState<Record<string, TreeEntry[]>>({});
  const [file, setFile] = useState<FileView | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [infoOpen, setInfoOpen] = useState(false);
  const infoBtnRef = useRef<HTMLButtonElement | null>(null);
  const infoPanelId = "git-file-info-panel";
  const [enlarged, setEnlarged] = useState(false);
  const [publications, setPublications] = useState<PublicationRow[]>([]);
  const [selectedPublicationId, setSelectedPublicationId] = useState<string | null>(null);
  const [pubFile, setPubFile] = useState<FileView | null>(null);
  const [pubFileError, setPubFileError] = useState<string | null>(null);
  const [pubEnlarged, setPubEnlarged] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmDetach, setConfirmDetach] = useState<GitSource | null>(null);
  const [branchOpen, setBranchOpen] = useState(false);
  /** P1-01 — ignore async results from a prior repo/branch context. */
  const contextGenRef = useRef(0);
  const pubGenRef = useRef(0);

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

  const loadRefs = useCallback(
    async (prefix?: string) => {
      if (!repositoryId) {
        setRefs([]);
        setRefsIncomplete(false);
        return;
      }
      const q = new URLSearchParams({ repositoryId });
      const trimmed = prefix?.trim();
      if (trimmed) q.set("refPrefix", trimmed);
      const res = await fetch(`/api/projects/${projectId}/git/refs?${q}`);
      if (!res.ok) {
        setRefs([]);
        setRefsIncomplete(false);
        return;
      }
      const j = (await res.json()) as {
        refs?: Array<{ name: string; sha: string }>;
        incompleteCoverage?: boolean;
        appliedPrefix?: string | null;
      };
      setRefs(j.refs ?? []);
      setRefsIncomplete(Boolean(j.incompleteCoverage));
      setBranchFilterApplied(j.appliedPrefix ?? trimmed ?? "");
    },
    [projectId, repositoryId],
  );

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
    const list = j.publications ?? [];
    setPublications(list);
    setSelectedPublicationId((prev) => {
      if (prev && list.some((p) => p.publicationRefId === prev)) return prev;
      return list[0]?.publicationRefId ?? null;
    });
  }, [projectId]);

  const selectedPublication = useMemo(
    () => publications.find((p) => p.publicationRefId === selectedPublicationId) ?? null,
    [publications, selectedPublicationId],
  );

  const openPublicationDocument = useCallback(
    async (pub: PublicationRow) => {
      const gen = ++pubGenRef.current;
      setPubFile(null);
      setPubFileError(null);
      const ref =
        pub.headSha ||
        pub.publicationBranch ||
        pub.targetBranch;
      if (!ref) {
        setPubFileError("Référence Git de publication non disponible");
        return;
      }
      setBusy(true);
      try {
        const q = new URLSearchParams({
          repositoryId: pub.repositoryId,
          path: pub.targetPath,
          ref,
        });
        const res = await fetch(`/api/projects/${projectId}/git/file?${q}`);
        const j = (await res.json().catch(() => ({}))) as Record<string, unknown>;
        if (gen !== pubGenRef.current) return;
        if (!res.ok) {
          setPubFile(null);
          setPubFileError(
            String(j.message ?? j.error ?? "Document de publication inaccessible"),
          );
          return;
        }
        setPubFile(parseFileResponse(j, pub.targetPath, ref));
      } finally {
        if (gen === pubGenRef.current) setBusy(false);
      }
    },
    [projectId],
  );

  useEffect(() => {
    if (tab !== "publications" || !selectedPublication) {
      return;
    }
    void openPublicationDocument(selectedPublication);
  }, [tab, selectedPublication, openPublicationDocument]);

  useEffect(() => {
    void loadSources();
  }, [loadSources]);

  // Reset provider filter when the active repository changes — not on every
  // loadRefs identity refresh (that wiped branchFilterApplied after Filtrer).
  useEffect(() => {
    setBranchFilter("");
    setBranchFilterApplied("");
    void loadRefs();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentional: repositoryId only
  }, [repositoryId]);

  useEffect(() => {
    if (tab === "files" && repositoryId && branch) {
      setExpandedDirs({});
      setFile(null);
      setFileError(null);
      setInfoOpen(false);
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
      const j = (await res.json().catch(() => ({}))) as Record<string, unknown>;
      if (
        gen !== contextGenRef.current ||
        repoAtStart !== repositoryId ||
        branchAtStart !== branch
      ) {
        return;
      }
      if (!res.ok) {
        setFile(null);
        setFileError(String(j.message ?? j.error ?? "Lecture refusée"));
        return;
      }
      setFileError(null);
      setFile(parseFileResponse(j, path, branch));
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
                {githubAction(file)}
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
            <p className="git-preview-kicker">{previewKicker(file)}</p>
            <div className="git-preview-body" data-testid="git-preview-body">
              {previewBody(file)}
            </div>
          </section>
          <aside className="git-enlarge-details" data-testid="git-file-details">
            <h3>Détails</h3>
            <dl className="git-details-list">
              <div>
                <dt>Nom</dt>
                <dd>{basename(file.path)}</dd>
              </div>
              <div>
                <dt>Type</dt>
                <dd>
                  {!file.preview.available
                    ? file.preview.motifLabel
                    : /\.md$/i.test(file.path)
                      ? "Markdown"
                      : "Texte"}
                </dd>
              </div>
              <div>
                <dt>Dépôt</dt>
                <dd>{active?.fullName ?? "—"}</dd>
              </div>
              <div>
                <dt>Branche / ref</dt>
                <dd>{file.ref || branch || "—"}</dd>
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
              <div>
                <dt>Taille</dt>
                <dd>
                  {file.content
                    ? `${new TextEncoder().encode(file.content).length} octets`
                    : "indisponible"}
                </dd>
              </div>
              <div>
                <dt>Origine</dt>
                <dd>Git (lecture seule)</dd>
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

  if (pubEnlarged && pubFile && selectedPublication) {
    return (
      <div className="git-repos-surface" data-testid="git-surface" data-git-enlarged="1">
        <div className="git-enlarge-layout">
          <section className="git-enlarge-preview" data-testid="git-pub-preview">
            <header className="git-preview-head">
              <div>
                <h2 className="git-preview-title">{basename(pubFile.path)}</h2>
                <p className="git-preview-path">{pubFile.path}</p>
              </div>
              <div className="git-preview-actions">
                <button
                  type="button"
                  className="git-btn-icon"
                  aria-label="Réduire la lecture"
                  data-testid="git-action-reduce"
                  onClick={() => setPubEnlarged(false)}
                >
                  <img src="/figma-git-icons/expand.svg" alt="" width={20} height={20} />
                </button>
              </div>
            </header>
            <p className="git-preview-kicker">{previewKicker(pubFile)}</p>
            <div className="git-preview-body">{previewBody(pubFile)}</div>
          </section>
          <aside className="git-enlarge-details" data-testid="git-pub-file-details">
            <h3>Détails</h3>
            <dl className="git-details-list">
              <div>
                <dt>Nom</dt>
                <dd>{basename(pubFile.path)}</dd>
              </div>
              <div>
                <dt>Type</dt>
                <dd>
                  {!pubFile.preview.available
                    ? pubFile.preview.motifLabel
                    : /\.md$/i.test(pubFile.path)
                      ? "Markdown"
                      : "Texte"}
                </dd>
              </div>
              <div>
                <dt>Dépôt</dt>
                <dd>{selectedPublication.repositoryFullName}</dd>
              </div>
              <div>
                <dt>Branche / ref</dt>
                <dd>
                  {selectedPublication.publicationBranch ??
                    selectedPublication.targetBranch ??
                    pubFile.ref}
                </dd>
              </div>
              <div>
                <dt>Chemin</dt>
                <dd>{pubFile.path}</dd>
              </div>
              <div>
                <dt>Commit SHA</dt>
                <dd className="git-mono">
                  {pubFile.commitShaVerified
                    ? pubFile.commitSha
                    : pubFile.commitSha ?? "non vérifié"}
                </dd>
              </div>
              <div>
                <dt>Blob SHA</dt>
                <dd className="git-mono">{pubFile.blobSha || "—"}</dd>
              </div>
              <div>
                <dt>Origine</dt>
                <dd>Publication Studio</dd>
              </div>
            </dl>
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
          {tab === "manage"
            ? "Gérer les dépôts du projet"
            : "Dépôts Git"}
        </h1>
        <p className="e07-surface-hero-sub" data-testid="git-hero-sub">
          {tab === "manage"
            ? "Chaque projet choisit ses dépôts ; plusieurs rattachements sont possibles."
            : sources.length === 0
              ? "Consultez les fichiers de vos dépôts autorisés."
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
            <p>Git est facultatif. Vous pouvez continuer à travailler avec Nora sans dépôt.</p>
            <p className="git-muted">
              Choisissez un dépôt autorisé par GitHub pour l’explorer — aucun rattachement silencieux.
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
                    <div className="git-branch-menu-wrap" data-testid="git-branch-menu-wrap">
                      <form
                        className="git-branch-search"
                        data-testid="git-branch-search"
                        onSubmit={(e) => {
                          e.preventDefault();
                          const next = branchFilter.trim();
                          setBranchFilterApplied(next);
                          void loadRefs(branchFilter);
                        }}
                      >
                        <label className="sr-only" htmlFor="git-branch-filter">
                          Rechercher une branche
                        </label>
                        <input
                          id="git-branch-filter"
                          type="search"
                          className="git-branch-filter-input"
                          data-testid="git-branch-filter"
                          placeholder="Rechercher une branche (préfixe ou nom exact)"
                          value={branchFilter}
                          onChange={(e) => setBranchFilter(e.target.value)}
                          autoComplete="off"
                        />
                        <button
                          type="submit"
                          className="git-btn-secondary"
                          data-testid="git-branch-filter-apply"
                        >
                          Filtrer
                        </button>
                        {branchFilterApplied ? (
                          <button
                            type="button"
                            className="git-btn-secondary"
                            data-testid="git-branch-filter-clear"
                            onClick={() => {
                              setBranchFilter("");
                              void loadRefs();
                            }}
                          >
                            Effacer
                          </button>
                        ) : null}
                      </form>
                      <ul className="git-branch-menu" role="listbox" data-testid="git-branch-menu">
                        {refs.length === 0 ? (
                          <li className="git-muted" data-testid="git-branch-empty">
                            {branchFilterApplied
                              ? "Aucune branche pour ce filtre — aucune ref inventée."
                              : "Aucune branche retournée."}
                          </li>
                        ) : (
                          refs.map((r) => (
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
                          ))
                        )}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
              {refsIncomplete ? (
                <p className="git-refs-incomplete" data-testid="git-refs-incomplete">
                  Liste de branches incomplète (bornée) — utilisez la recherche de branche ; aucune
                  branche n’est inventée.
                </p>
              ) : null}
              {branchFilterApplied ? (
                <p className="git-muted" data-testid="git-branch-filter-note">
                  Filtre fournisseur actif : « {branchFilterApplied} »
                </p>
              ) : null}
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
                        <div className="git-info-anchor">
                          <button
                            type="button"
                            className="git-btn-secondary"
                            data-testid="git-action-infos"
                            aria-expanded={infoOpen}
                            aria-controls={infoPanelId}
                            ref={infoBtnRef}
                            onClick={() => setInfoOpen((v) => !v)}
                          >
                            Infos
                          </button>
                          <GitFileInfoPopover
                            open={infoOpen}
                            onClose={() => setInfoOpen(false)}
                            anchorRef={infoBtnRef}
                            panelId={infoPanelId}
                            fields={{
                              name: basename(file.path),
                              type: !file.preview.available
                                ? file.preview.motifLabel
                                : /\.md$/i.test(file.path)
                                  ? "Markdown"
                                  : "Texte",
                              repository: active?.fullName ?? file.fullName ?? "—",
                              ref: file.ref || branch || "—",
                              path: file.path,
                              commitSha: file.commitSha,
                              commitShaVerified: file.commitShaVerified,
                              blobSha: file.blobSha || null,
                              sizeLabel:
                                file.preview.available && file.content
                                  ? `${new TextEncoder().encode(file.content).length} octets`
                                  : null,
                              origin: "Git (lecture seule)",
                            }}
                          />
                        </div>
                        {githubAction(file)}
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
                    <p className="git-preview-kicker">{previewKicker(file)}</p>
                    <div className="git-preview-body" data-testid="git-preview-body">
                      {previewBody(file)}
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
              <p className="git-muted" style={{ marginBottom: 12 }}>
                Historique Studio des publications du projet — distinct de l’index du dépôt. Une
                demande de branche ou de commit n’implique pas une fusion.
              </p>
              {publications.length === 0 ? (
                <p data-testid="git-publications-empty">Aucune publication Studio pour ce projet.</p>
              ) : (
                <div className="git-split-3070" data-testid="git-pubs-split">
                  <aside className="git-tree-panel" data-testid="git-pubs-list-panel">
                    <h2>Publications du projet</h2>
                    <ul className="git-pubs-list">
                      {publications.map((p) => {
                        const selected = p.publicationRefId === selectedPublicationId;
                        const statusLabel =
                          p.prStatusLabel ??
                          (p.mergeObserved
                            ? "Fusion vérifiée"
                            : p.openPullRequest
                              ? "PR enregistrée ouverte (historique — non actualisée)"
                              : p.pullRequestCreatedObserved
                                ? "PR créée (historique)"
                                : p.commitObserved
                                  ? "Commit observé"
                                  : p.publicationStatus);
                        return (
                          <li key={p.publicationRefId}>
                            <button
                              type="button"
                              className={`git-pubs-item${selected ? " is-selected" : ""}`}
                              data-testid="git-publication-row"
                              aria-pressed={selected}
                              onClick={() => setSelectedPublicationId(p.publicationRefId)}
                            >
                              <p className="git-pubs-path">{basename(p.targetPath)}</p>
                              <p className="git-muted">
                                Nora · {statusLabel}
                                {p.prNumber != null ? ` · PR #${p.prNumber}` : ""}
                              </p>
                              <p className="git-muted">
                                Dépôt : {p.repositoryFullName.split("/")[1] ?? p.repositoryFullName}
                              </p>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                    <p className="git-muted">Liste des publications Studio, pas index du dépôt.</p>
                  </aside>
                  <section className="git-preview-panel" data-testid="git-pubs-preview">
                    {selectedPublication && pubFile ? (
                      <>
                        <header className="git-preview-head">
                          <div>
                            <h2 className="git-preview-title">{basename(pubFile.path)}</h2>
                            <p className="git-preview-path">{pubFile.path}</p>
                          </div>
                          <div className="git-preview-actions" data-testid="git-preview-actions">
                            <div className="git-info-anchor">
                              <button
                                type="button"
                                className="git-btn-secondary"
                                data-testid="git-action-infos"
                                aria-expanded={infoOpen}
                                aria-controls={infoPanelId}
                                ref={infoBtnRef}
                                onClick={() => setInfoOpen((v) => !v)}
                              >
                                Infos
                              </button>
                              <GitFileInfoPopover
                                open={infoOpen}
                                onClose={() => setInfoOpen(false)}
                                anchorRef={infoBtnRef}
                                panelId={infoPanelId}
                                fields={{
                                  name: basename(pubFile.path),
                                  type: !pubFile.preview.available
                                    ? pubFile.preview.motifLabel
                                    : /\.md$/i.test(pubFile.path)
                                      ? "Markdown"
                                      : "Texte",
                                  repository: selectedPublication.repositoryFullName,
                                  ref:
                                    selectedPublication.publicationBranch ??
                                    selectedPublication.targetBranch,
                                  path: pubFile.path,
                                  commitSha: pubFile.commitSha,
                                  commitShaVerified: pubFile.commitShaVerified,
                                  blobSha: pubFile.blobSha || null,
                                  origin: "Publication Studio",
                                }}
                              />
                            </div>
                            {githubAction(pubFile)}
                            <button
                              type="button"
                              className="git-btn-icon"
                              aria-label="Agrandir la lecture"
                              data-testid="git-action-enlarge"
                              onClick={() => setPubEnlarged(true)}
                            >
                              <img src="/figma-git-icons/expand.svg" alt="" width={20} height={20} />
                            </button>
                          </div>
                        </header>
                        <p className="git-preview-kicker">{previewKicker(pubFile)}</p>
                        <div className="git-preview-body" data-testid="git-preview-body">
                          {previewBody(pubFile)}
                        </div>
                      </>
                    ) : (
                      <p className="git-muted" data-testid="git-pubs-preview-empty">
                        {pubFileError ??
                          (busy
                            ? "Chargement de la publication…"
                            : "Sélectionnez une publication pour lire son document.")}
                      </p>
                    )}
                  </section>
                </div>
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
