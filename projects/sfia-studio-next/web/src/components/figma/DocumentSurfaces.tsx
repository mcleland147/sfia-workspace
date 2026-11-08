"use client";

import { SafeMarkdown } from "@/components/SafeMarkdown";

export type DocListItem = {
  document: { id: string; title: string; projectId: string | null };
  latestRevision: {
    id: string;
    revisionNumber: number;
    status: string;
    contentMarkdown: string;
  } | null;
};

export type RevisionRow = {
  id: string;
  revisionNumber: number;
  status: string;
  createdAt?: string;
};

export function DocumentLibrary(props: {
  documents: DocListItem[];
  selectedId: string | null;
  onSelect: (d: DocListItem) => void;
  emptyHint?: string;
}) {
  return (
    <section className="space-y-2" data-figma-frame="160:175" data-testid="document-library">
      <div className="fig-section-head">
        <h2 className="fig-section-title">Bibliothèque</h2>
        <span className="fig-tag fig-tag-muted">{props.documents.length} doc(s)</span>
      </div>
      {props.documents.length === 0 ? (
        <div className="fig-panel">
          <p className="text-sm muted" data-testid="document-library-empty">
            {props.emptyHint ??
              "Aucun document D4. La bibliothèque reste navigable — créez ou capitalisez depuis le fil."}
          </p>
        </div>
      ) : (
        props.documents.map((d) => (
          <button
            key={d.document.id}
            type="button"
            className={`fig-card !min-h-0 text-left w-full ${
              props.selectedId === d.document.id ? "ring-1 ring-[var(--accent)]" : ""
            }`}
            onClick={() => props.onSelect(d)}
            data-testid={`doc-open-${d.document.id}`}
          >
            <div className="fig-card-top">
              <div className="fig-card-title text-sm">{d.document.title}</div>
              <span className="fig-tag fig-tag-muted">
                v{d.latestRevision?.revisionNumber ?? "?"}
              </span>
            </div>
            <div className="fig-card-desc line-clamp-3">
              {(d.latestRevision?.contentMarkdown ?? "").slice(0, 180) || "Sans contenu"}
            </div>
            <div className="fig-card-meta">{d.latestRevision?.status ?? "—"}</div>
          </button>
        ))
      )}
    </section>
  );
}

export function DocumentHistory(props: {
  revisions: RevisionRow[];
  activeRevisionId?: string | null;
  loading?: boolean;
  onSelectRevision?: (id: string) => void;
  onCompareLatest?: () => void;
  diffText?: string;
}) {
  return (
    <section
      className="fig-panel space-y-2"
      data-figma-frame="241:385"
      data-testid="document-history"
    >
      <div className="fig-section-head">
        <h3 className="fig-panel-title !mb-0">Historique des révisions</h3>
        {props.onCompareLatest ? (
          <button type="button" className="btn secondary" onClick={props.onCompareLatest}>
            Comparer
          </button>
        ) : null}
      </div>
      {props.loading ? <p className="text-sm muted">Chargement…</p> : null}
      {!props.loading && props.revisions.length === 0 ? (
        <p className="text-sm muted" data-testid="document-history-empty">
          Aucune révision listée pour ce document.
        </p>
      ) : (
        <ul className="space-y-1">
          {props.revisions.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                className={`w-full text-left fig-empty-row !py-2 ${
                  props.activeRevisionId === r.id ? "font-semibold" : ""
                }`}
                onClick={() => props.onSelectRevision?.(r.id)}
                data-testid={`doc-rev-${r.revisionNumber}`}
              >
                <div>
                  <div className="text-sm">
                    Version {r.revisionNumber}{" "}
                    <span className="fig-tag fig-tag-muted ml-1">{r.status}</span>
                  </div>
                  {r.createdAt ? (
                    <div className="text-xs muted">
                      {new Date(r.createdAt).toLocaleString("fr-FR")}
                    </div>
                  ) : null}
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}
      {props.diffText ? (
        <pre className="text-xs whitespace-pre-wrap fig-msg p-3">{props.diffText}</pre>
      ) : null}
    </section>
  );
}

export function DocumentInspector(props: {
  frameId?: string;
  title: string;
  uiState: string;
  missing?: string | null;
  markdown: string | null;
  editing: boolean;
  draft: string;
  onDraft: (v: string) => void;
  busy?: boolean;
  onStartRevise?: () => void;
  onSaveRevise?: () => void;
  onCancel?: () => void;
  onConflictRebase?: () => void;
  reviseMessage?: string;
  children?: React.ReactNode;
}) {
  const showEditor =
    props.editing ||
    props.uiState === "EDITING" ||
    props.uiState === "SAVING" ||
    props.uiState === "CONFLICT" ||
    props.uiState === "UNKNOWN" ||
    props.uiState === "FAILED";

  return (
    <section
      className="fig-panel space-y-3"
      data-testid="document-inspect"
      data-figma-frame={
        props.frameId ??
        (props.uiState === "CONFLICT" ? "160:391" : showEditor ? "97:359" : "97:359")
      }
    >
      <div className="flex flex-wrap gap-2 items-center">
        <h2 className="fig-panel-title !mb-0">{props.title}</h2>
        <span className="fig-tag fig-tag-accent" data-testid="document-ui-state">
          {props.uiState}
        </span>
      </div>
      {props.missing ? (
        <p className="text-sm" data-testid="document-missing" role="status">
          {props.missing}
        </p>
      ) : null}
      {!props.missing && props.markdown === null && !showEditor ? (
        <p className="text-sm muted">Sélectionner un document pour inspecter en lecture seule.</p>
      ) : null}
      {showEditor ? (
        <>
          <textarea
            className="textarea min-h-[220px]"
            value={props.draft}
            onChange={(e) => props.onDraft(e.target.value)}
            disabled={props.uiState === "SAVING" || props.busy}
            aria-label="Contenu markdown à réviser"
            data-testid="document-revise-draft"
          />
          <div className="flex flex-wrap gap-2">
            {props.onSaveRevise ? (
              <button
                type="button"
                className="btn"
                disabled={props.busy || props.uiState === "SAVING"}
                data-testid="document-revise-save"
                onClick={props.onSaveRevise}
              >
                {props.uiState === "SAVING"
                  ? "Enregistrement…"
                  : props.uiState === "UNKNOWN"
                    ? "Réessayer (même clé)"
                    : "Demander une révision"}
              </button>
            ) : null}
            {props.uiState === "CONFLICT" && props.onConflictRebase ? (
              <button
                type="button"
                className="btn secondary"
                data-testid="document-conflict-rebase"
                onClick={props.onConflictRebase}
              >
                Adopter la nouvelle base
              </button>
            ) : null}
            {props.onCancel ? (
              <button type="button" className="btn secondary" onClick={props.onCancel}>
                Annuler
              </button>
            ) : null}
          </div>
        </>
      ) : props.markdown !== null ? (
        <>
          <div className="fig-alert">
            Lecture seule — Markdown rendu. La révision s&apos;ouvre uniquement sur acte explicite.
          </div>
          <SafeMarkdown content={props.markdown} />
          {props.onStartRevise ? (
            <button
              type="button"
              className="btn"
              data-testid="document-revise-start"
              onClick={props.onStartRevise}
            >
              Demander une révision
            </button>
          ) : null}
        </>
      ) : null}
      {props.reviseMessage ? (
        <p className="text-xs muted" data-testid="document-revise-message">
          {props.reviseMessage}
        </p>
      ) : null}
      {props.children}
    </section>
  );
}
