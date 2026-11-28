"use client";

import { useMemo, useState } from "react";
import { SafeMarkdown } from "@/components/SafeMarkdown";

export type DocListItem = {
  document: { id: string; title: string; projectId: string | null };
  latestRevision: {
    id: string;
    revisionNumber: number;
    status: string;
    contentMarkdown: string;
  } | null;
  /** Optional D4-derived document kind label (never invented). */
  documentKind?: string | null;
  originLabel?: string | null;
};

export type RevisionRow = {
  id: string;
  revisionNumber: number;
  status: string;
  createdAt?: string;
  /** Short excerpt for history rows — projection only. */
  excerpt?: string | null;
};

export type DiffOp = { op: "equal" | "add" | "remove"; line: string };

export type DocumentComparePayload = {
  left: { id: string; revisionNumber: number; status: string; contentMarkdown?: string };
  right: { id: string; revisionNumber: number; status: string; contentMarkdown?: string };
  diff: {
    added: string[];
    removed: string[];
    ops?: DiffOp[];
    degraded?: boolean;
    reason?: string;
  };
  status: string;
  note?: string;
};

/** Projection UI only. Missing head is unverified, never a false Historique. */
export type RevisionCurrencyLabel = "Courante" | "Historique" | "Non vérifiée";

export function revisionCurrencyLabel(
  revisionNumber: number,
  headRevisionNumber: number | null | undefined,
): RevisionCurrencyLabel {
  if (headRevisionNumber == null) return "Non vérifiée";
  if (revisionNumber === headRevisionNumber) return "Courante";
  return "Historique";
}

export function revisionCurrencyBadgeClass(currency: RevisionCurrencyLabel): string {
  if (currency === "Courante") return "doc-badge doc-badge-current";
  if (currency === "Historique") return "doc-badge doc-badge-historical";
  return "doc-badge";
}

export type DocumentarySaveIdentity = {
  status?: string;
  documentId?: string;
  revisionId?: string;
  revisionNumber?: number;
};

/** Client-safe working focus. Kept out of document-act so the page bundle stays free of the DB client. */
export type WorkingDocumentFocus = {
  documentId: string;
  sourceRevisionId: string;
  sourceRevisionNumber?: number;
  sourceContentMarkdown?: string;
  observedHeadRevisionId: string;
  observedHeadRevisionNumber?: number;
  confirmedHistoricalSource?: boolean;
  historicalConfirmation?: {
    documentId: string;
    sourceRevisionId: string;
    observedHeadRevisionId: string;
    choice: "USE_SOURCE" | "USE_HEAD" | "REFUSED";
  };
  historicalAuthorizationId?: string;
  conserveProposal?: boolean;
  pendingCandidateId?: string;
  pendingCandidateContentSha256?: string;
};

/**
 * After D4 reports AVAILABLE, the working focus follows the revision just written.
 * Does not move another document, and does not invent a head when the revision id is missing.
 */
export function focusAfterAvailableConservation<T extends WorkingDocumentFocus>(
  focus: T | null,
  save: DocumentarySaveIdentity,
): { focus: T | null; rebased: boolean } {
  if (!focus) return { focus, rebased: false };
  if (save.status !== "AVAILABLE") return { focus, rebased: false };
  if (!save.documentId || !save.revisionId) return { focus, rebased: false };
  if (focus.documentId !== save.documentId) return { focus, rebased: false };
  // A missing owner number stays unknown. Never label the new revision with the previous number.
  const revisionNumber =
    typeof save.revisionNumber === "number" ? save.revisionNumber : undefined;
  return {
    rebased: true,
    focus: {
      ...focus,
      sourceRevisionId: save.revisionId,
      sourceRevisionNumber: revisionNumber,
      sourceContentMarkdown: undefined,
      observedHeadRevisionId: save.revisionId,
      observedHeadRevisionNumber: revisionNumber,
      confirmedHistoricalSource: false,
      historicalConfirmation: undefined,
      historicalAuthorizationId: undefined,
      conserveProposal: false,
      pendingCandidateId: undefined,
      pendingCandidateContentSha256: undefined,
    },
  };
}

/** Exact resolution is not currency. A missing head stays unverified. */
export function revisionCurrencyFromIdentity(input: {
  revisionId?: string | null;
  revisionNumber?: number | null;
  headRevisionId?: string | null;
  headRevisionNumber?: number | null;
  knownHeadRevisionId?: string | null;
}): RevisionCurrencyLabel {
  const revisionId = input.revisionId ?? null;
  const known = input.knownHeadRevisionId ?? null;
  const listed = input.headRevisionId ?? null;
  if (revisionId && known && revisionId === known) {
    if (!listed || listed === known) return "Courante";
    const listedIsOlder =
      input.headRevisionNumber != null &&
      input.revisionNumber != null &&
      input.headRevisionNumber < input.revisionNumber;
    if (listedIsOlder) return "Courante";
  }
  if (revisionId && listed) {
    return revisionId === listed ? "Courante" : "Historique";
  }
  if (revisionId && known) {
    return revisionId === known ? "Courante" : "Historique";
  }
  if (
    input.revisionNumber != null &&
    input.headRevisionNumber != null &&
    input.revisionNumber === input.headRevisionNumber
  ) {
    return "Courante";
  }
  if (
    input.revisionNumber != null &&
    input.headRevisionNumber != null &&
    input.revisionNumber !== input.headRevisionNumber
  ) {
    return "Historique";
  }
  return "Non vérifiée";
}

/**
 * A late document effect may update only the document the turn still owns.
 * A closed viewer stays closed. Another document's focus and viewer stay put.
 * Thread and owner results are decided separately by the caller.
 */
export function documentTurnMayApply(input: {
  turnGen: number;
  latestTurnGen: number;
  focusDocumentAtSend: string | null;
  focusDocumentNow: string | null;
  viewerClosedByPilot: boolean;
  viewerDocumentId: string | null;
  effectDocumentId: string | null;
}): { focus: boolean; viewer: boolean } {
  const selectionUnchanged =
    input.focusDocumentAtSend == null ||
    input.focusDocumentNow == null ||
    input.focusDocumentAtSend === input.focusDocumentNow;
  const turnStillOwnsSelection = input.turnGen === input.latestTurnGen && selectionUnchanged;
  const effectDoc = input.effectDocumentId;
  const focus =
    turnStillOwnsSelection &&
    typeof effectDoc === "string" &&
    effectDoc.length > 0 &&
    (input.focusDocumentNow == null || input.focusDocumentNow === effectDoc);
  const viewer =
    focus &&
    !input.viewerClosedByPilot &&
    (input.viewerDocumentId == null || input.viewerDocumentId === effectDoc);
  return { focus, viewer };
}

/**
 * An in-flight candidate restore may change pending state, focus or status
 * only while it still refers to the selected project, document and candidate.
 */
export function pendingCandidateRestoreOwnsContext(input: {
  projectIdAtStart: string;
  projectIdNow: string | null;
  documentId: string;
  candidateId: string;
  focusDocumentId: string | null;
  focusCandidateId: string | null | undefined;
  requestSeqAtStart: number;
  requestSeqNow: number;
}): boolean {
  if (!input.projectIdNow || input.projectIdNow !== input.projectIdAtStart) return false;
  if (input.requestSeqNow !== input.requestSeqAtStart) return false;
  if (input.focusDocumentId !== input.documentId) return false;
  if (input.focusCandidateId !== input.candidateId) return false;
  return true;
}

/**
 * A head resolved for one revision may be applied only if that selection
 * is still the latest one, in the same project, and the pilot did not close it.
 */
export function documentSelectionResolveIsCurrent(input: {
  projectIdAtStart: string;
  projectIdNow: string | null;
  requestSeqAtStart: number;
  requestSeqNow: number;
  viewerClosedDuringResolve: boolean;
}): boolean {
  if (!input.projectIdNow || input.projectIdNow !== input.projectIdAtStart) return false;
  if (input.requestSeqNow !== input.requestSeqAtStart) return false;
  if (input.viewerClosedDuringResolve) return false;
  return true;
}

/**
 * A restored candidate is shown only if the project, document, candidate and
 * viewer generation are still the ones captured before the request returned.
 */
export function pendingCandidateRestoreIsCurrent(input: {
  projectIdAtStart: string;
  projectIdNow: string | null;
  documentId: string;
  candidateId: string;
  focusDocumentId: string | null;
  focusCandidateId: string | null | undefined;
  requestSeqAtStart: number;
  requestSeqNow: number;
  candidateDocumentId: string | null;
  candidateMarkdown: string | null;
}): boolean {
  if (
    !pendingCandidateRestoreOwnsContext({
      projectIdAtStart: input.projectIdAtStart,
      projectIdNow: input.projectIdNow,
      documentId: input.documentId,
      candidateId: input.candidateId,
      focusDocumentId: input.focusDocumentId,
      focusCandidateId: input.focusCandidateId,
      requestSeqAtStart: input.requestSeqAtStart,
      requestSeqNow: input.requestSeqNow,
    })
  ) {
    return false;
  }
  if (!input.candidateDocumentId || input.candidateDocumentId !== input.documentId) return false;
  return typeof input.candidateMarkdown === "string" && input.candidateMarkdown.length > 0;
}

export function resolveTravailDocumentPresentation(input: {
  proposalActive: boolean;
  proposalCandidateId?: string | null;
  viewerProposalCandidateId?: string | null;
  proposalDocumentId?: string | null;
  viewerDocumentId?: string | null;
  proposalMarkdown?: string | null;
  viewerMarkdown?: string | null;
  revisionId?: string | null;
  revisionNumber?: number | null;
  headRevisionId?: string | null;
  headRevisionNumber?: number | null;
  knownHeadRevisionId?: string | null;
}): {
  banner: "proposal" | "historical" | "other-version" | null;
  currency: RevisionCurrencyLabel | "Proposition";
} {
  const sameDocument =
    !input.proposalDocumentId ||
    !input.viewerDocumentId ||
    input.proposalDocumentId === input.viewerDocumentId;
  const showingProposal =
    input.proposalActive &&
    sameDocument &&
    !input.revisionId &&
    typeof input.proposalCandidateId === "string" &&
    input.proposalCandidateId.length > 0 &&
    input.viewerProposalCandidateId === input.proposalCandidateId &&
    typeof input.proposalMarkdown === "string" &&
    input.proposalMarkdown.length > 0 &&
    input.viewerMarkdown === input.proposalMarkdown;
  if (showingProposal) {
    return { banner: "proposal", currency: "Proposition" };
  }
  const currency = revisionCurrencyFromIdentity(input);
  if (
    input.proposalActive &&
    typeof input.proposalMarkdown === "string" &&
    input.proposalMarkdown.length > 0
  ) {
    return { banner: "other-version", currency };
  }
  return {
    banner: currency === "Historique" ? "historical" : null,
    currency,
  };
}

/**
 * R4 — pilot-facing provenance only. Never invents Git commits or sources from titles.
 * Never surfaces correlationKey / requestId / raw provenanceJson / debug ids.
 */
export function formatPilotFacingProvenance(
  provenanceJson: unknown,
  opts?: { projectName?: string | null },
): string {
  let parsed: Record<string, unknown> | null = null;
  if (typeof provenanceJson === "string" && provenanceJson.trim()) {
    try {
      parsed = JSON.parse(provenanceJson) as Record<string, unknown>;
    } catch {
      parsed = null;
    }
  } else if (provenanceJson && typeof provenanceJson === "object") {
    parsed = provenanceJson as Record<string, unknown>;
  }
  if (!parsed || Object.keys(parsed).length === 0) {
    return "Provenance non renseignée";
  }

  const project = opts?.projectName?.trim() || null;
  const sealed = parsed.documentCommandBinding === true;
  const action = parsed.action === "CREATE" || parsed.action === "REVISE" ? parsed.action : null;
  const sourceKind = typeof parsed.sourceKind === "string" ? parsed.sourceKind : null;
  const via = typeof parsed.via === "string" ? parsed.via : null;

  if (sealed || action) {
    return project ? `Production Nora  ·  ${project}` : "Production Nora";
  }
  if (sourceKind === "pilot" || via === "api-revise") {
    return "Révision Pilote";
  }
  if (typeof parsed.originLabel === "string" && parsed.originLabel.trim()) {
    // Only accept an already pilot-facing label — refuse technical payloads.
    const label = parsed.originLabel.trim();
    if (/correlation|requestId|commandId|payloadSha|contentSha/i.test(label)) {
      return "Provenance non renseignée";
    }
    return label;
  }
  return "Provenance non renseignée";
}

function DocActionButton(props: {
  variant: "primary" | "secondary";
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  testId?: string;
}) {
  return (
    <button
      type="button"
      className={
        props.variant === "primary" ? "doc-action doc-action-primary" : "doc-action doc-action-secondary"
      }
      onClick={props.onClick}
      disabled={props.disabled}
      data-testid={props.testId}
    >
      {props.label}
    </button>
  );
}

function MetaBlock(props: { label: string; value: string }) {
  return (
    <div className="doc-meta-block">
      <div className="doc-meta-label">{props.label}</div>
      <div className="doc-meta-value">{props.value}</div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Legacy exports (Sas / preparations) — retained for non-projet surfaces      */
/* -------------------------------------------------------------------------- */

export function DocumentLibrary(props: {
  documents: DocListItem[];
  selectedId: string | null;
  onSelect: (d: DocListItem) => void;
  emptyHint?: string;
}) {
  return (
    <BibliothequeListPanel
      documents={props.documents}
      selectedId={props.selectedId}
      onSelect={props.onSelect}
      emptyHint={props.emptyHint}
      headRevisionByDoc={() => null}
    />
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
  const head = props.revisions.reduce(
    (max, r) => (r.status === "AVAILABLE" ? Math.max(max, r.revisionNumber) : max),
    0,
  );
  return (
    <section className="fig-panel space-y-2" data-figma-frame="241:385" data-testid="document-history">
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
                    <span className="fig-tag fig-tag-muted ml-1">
                      {revisionCurrencyLabel(r.revisionNumber, head || null)}
                    </span>
                  </div>
                  {r.createdAt ? (
                    <div className="text-xs muted">{new Date(r.createdAt).toLocaleString("fr-FR")}</div>
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

/** @deprecated Manual revise path — kept for Sas only; Projet Documents must not mount editor. */
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

/* -------------------------------------------------------------------------- */
/* Projet Documents — Figma page 08                                          */
/* -------------------------------------------------------------------------- */

function BibliothequeListPanel(props: {
  documents: DocListItem[];
  selectedId: string | null;
  onSelect: (d: DocListItem) => void;
  emptyHint?: string;
  headRevisionByDoc: (d: DocListItem) => number | null;
  search?: string;
  onSearch?: (v: string) => void;
}) {
  const filtered = useMemo(() => {
    const q = (props.search ?? "").trim().toLowerCase();
    if (!q) return props.documents;
    return props.documents.filter((d) => d.document.title.toLowerCase().includes(q));
  }, [props.documents, props.search]);

  return (
    <section
      className="doc-panel doc-panel-list"
      data-figma-frame="930:3"
      data-testid="document-library"
      data-node-id="937:327"
    >
      <div className="doc-panel-list-head">
        <h2 className="doc-panel-heading">Documents du projet</h2>
        <span className="doc-panel-count">
          {props.documents.length} DOCUMENT{props.documents.length === 1 ? "" : "S"}
        </span>
      </div>
      {props.onSearch ? (
        <label className="doc-search" data-node-id="937:331">
          <span className="doc-search-icon" aria-hidden>
            ⌕
          </span>
          <input
            type="search"
            value={props.search ?? ""}
            onChange={(e) => props.onSearch?.(e.target.value)}
            placeholder="Rechercher un document..."
            aria-label="Rechercher un document"
            data-testid="document-library-search"
          />
        </label>
      ) : null}
      {filtered.length === 0 ? (
        <div className="doc-empty" data-testid="document-library-empty">
          <p className="text-sm muted">
            {props.emptyHint ??
              "Aucun document D4. La bibliothèque reste navigable — créez ou capitalisez depuis le fil."}
          </p>
        </div>
      ) : (
        <ul className="doc-card-list">
          {filtered.map((d) => {
            const selected = props.selectedId === d.document.id;
            const head = props.headRevisionByDoc(d) ?? d.latestRevision?.revisionNumber ?? null;
            const kind = d.documentKind?.trim() || "Document";
            const ver = d.latestRevision?.revisionNumber;
            const currency =
              ver != null ? revisionCurrencyLabel(ver, head) : "—";
            return (
              <li key={d.document.id}>
                <button
                  type="button"
                  className={`doc-card ${selected ? "doc-card-selected" : ""}`}
                  onClick={() => props.onSelect(d)}
                  aria-pressed={selected}
                  data-testid={`doc-open-${d.document.id}`}
                  data-doc-select="1"
                  data-node-id={selected ? "935:328" : undefined}
                >
                  <div className="doc-card-body">
                    <div className="doc-card-title">{d.document.title}</div>
                    <div className="doc-card-sub">
                      {kind}
                      {"  ·  "}
                      {ver != null ? `v${ver}` : "v?"}
                      {"  ·  "}
                      {currency}
                    </div>
                  </div>
                  {!selected ? (
                    <span className="doc-card-chevron" aria-hidden>
                      ›
                    </span>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      )}
      <p className="doc-panel-footnote">
        Sélectionner un document affiche ses détails à droite, sans l’ouvrir automatiquement.
      </p>
    </section>
  );
}

function BibliothequeAside(props: {
  selected: DocListItem | null;
  projectName?: string | null;
  onOpen: () => void;
  onResumeNora: () => void;
  onVersions: () => void;
  onProvenance: () => void;
  provenanceOpen?: boolean;
  provenanceText?: string | null;
}) {
  if (!props.selected) {
    return (
      <aside
        className="doc-panel doc-panel-aside"
        data-testid="document-selection-aside"
        data-node-id="937:328"
      >
        <p className="doc-aside-kicker">DOCUMENT SÉLECTIONNÉ</p>
        <p className="text-sm muted">Sélectionnez un document dans la liste.</p>
      </aside>
    );
  }
  const d = props.selected;
  const ver = d.latestRevision?.revisionNumber;
  const status = d.latestRevision?.status ?? "—";
  return (
    <aside
      className="doc-panel doc-panel-aside"
      data-testid="document-selection-aside"
      data-node-id="937:328"
    >
      <p className="doc-aside-kicker">DOCUMENT SÉLECTIONNÉ</p>
      <h3 className="doc-aside-title">{d.document.title}</h3>
      <div className="doc-aside-divider" />
      <MetaBlock
        label="VERSION COURANTE"
        value={ver != null ? `v${ver}  ·  ${status === "AVAILABLE" ? "Disponible" : status}` : "—"}
      />
      <div className="doc-aside-divider" />
      <MetaBlock label="TYPE" value={d.documentKind?.trim() || "Document"} />
      <div className="doc-aside-divider" />
      <MetaBlock
        label="ORIGINE"
        value={d.originLabel?.trim() || "Provenance non renseignée"}
      />
      <div className="doc-aside-actions">
        <DocActionButton
          variant="primary"
          label="Ouvrir le document"
          onClick={props.onOpen}
          testId="doc-action-open"
        />
        <DocActionButton
          variant="secondary"
          label="Reprendre avec Nora"
          onClick={props.onResumeNora}
          testId="doc-action-resume-nora"
        />
        <DocActionButton
          variant="secondary"
          label="Voir les versions"
          onClick={props.onVersions}
          testId="doc-action-versions"
        />
        <DocActionButton
          variant="secondary"
          label="Sources et provenance"
          onClick={props.onProvenance}
          testId="doc-action-provenance"
        />
      </div>
      {props.provenanceOpen ? (
        <div className="doc-provenance" data-testid="document-provenance-panel" role="region">
          <p className="doc-meta-label">PROVENANCE</p>
          <p className="text-sm muted">
            {props.provenanceText?.trim() ||
              d.originLabel?.trim() ||
              "Provenance non renseignée"}
          </p>
        </div>
      ) : null}
    </aside>
  );
}

/** 08.01 — Bibliothèque : sélection ≠ ouverture, layout ~70/30. */
export function DocumentBibliothequeSurface(props: {
  documents: DocListItem[];
  selectedId: string | null;
  onSelect: (d: DocListItem) => void;
  onOpen: (d: DocListItem) => void;
  onResumeNora: (d: DocListItem) => void;
  onVersions: (d: DocListItem) => void;
  projectName?: string | null;
  emptyHint?: string;
}) {
  const [search, setSearch] = useState("");
  const [provenanceOpen, setProvenanceOpen] = useState(false);
  const selected = props.documents.find((d) => d.document.id === props.selectedId) ?? null;

  return (
    <div className="doc-workspace-7030" data-testid="document-bibliotheque" data-figma-frame="930:3">
      <BibliothequeListPanel
        documents={props.documents}
        selectedId={props.selectedId}
        onSelect={(d) => {
          setProvenanceOpen(false);
          props.onSelect(d);
        }}
        emptyHint={props.emptyHint}
        headRevisionByDoc={(d) => d.latestRevision?.revisionNumber ?? null}
        search={search}
        onSearch={setSearch}
      />
      <BibliothequeAside
        selected={selected}
        projectName={props.projectName}
        onOpen={() => selected && props.onOpen(selected)}
        onResumeNora={() => selected && props.onResumeNora(selected)}
        onVersions={() => selected && props.onVersions(selected)}
        onProvenance={() => setProvenanceOpen((v) => !v)}
        provenanceOpen={provenanceOpen}
        provenanceText={null}
      />
    </div>
  );
}

/** 08.02 — Lecture seule 70/30, sans textarea. */
export function DocumentReadSurface(props: {
  title: string;
  markdown: string | null;
  missing?: string | null;
  revisionLabel: string;
  currency: "Courante" | "Historique" | "Non vérifiée";
  loading?: boolean;
  onRequestRevision: () => void;
  onHistory: () => void;
  onOrigin: () => void;
  originOpen?: boolean;
  originText?: string | null;
  statusLabel?: string | null;
}) {
  const versionValue =
    props.revisionLabel.startsWith("v") || props.revisionLabel.startsWith("Version")
      ? `${props.revisionLabel.replace(/^Version\s+/i, "v")}  ·  ${props.currency}`
      : `${props.revisionLabel}  ·  ${props.currency}`;
  return (
    <div className="doc-workspace-7030" data-testid="document-read" data-figma-frame="930:4">
      <section className="doc-panel doc-panel-read" data-node-id="937:327">
        {props.missing ? (
          <p className="text-sm" data-testid="document-missing" role="status">
            {props.missing}
          </p>
        ) : props.loading ? (
          <p className="text-sm muted">Chargement de la version…</p>
        ) : props.markdown != null ? (
          <div className="doc-read-body" data-testid="document-read-body">
            <SafeMarkdown content={props.markdown} />
          </div>
        ) : (
          <p className="text-sm muted">Contenu indisponible.</p>
        )}
      </section>
      <aside className="doc-panel doc-panel-aside" data-testid="document-read-aside">
        <p className="doc-aside-kicker">DOCUMENT / ACTIONS</p>
        <h3 className="doc-aside-title">{props.title}</h3>
        <div className="doc-aside-divider" />
        <MetaBlock label="VERSION AFFICHÉE" value={versionValue} />
        <div className="doc-aside-divider" />
        <MetaBlock
          label="STATUT"
          value={props.statusLabel?.trim() || "Disponible  ·  Lecture seule"}
        />
        <div className="doc-aside-actions">
          <DocActionButton
            variant="primary"
            label="Demander une révision à Nora"
            onClick={props.onRequestRevision}
            testId="doc-action-request-revision"
          />
          <DocActionButton
            variant="secondary"
            label="Historique des versions"
            onClick={props.onHistory}
            testId="doc-action-history"
          />
          <DocActionButton
            variant="secondary"
            label="Origine et références"
            onClick={props.onOrigin}
            testId="doc-action-origin"
          />
        </div>
        <p className="doc-panel-footnote">
          Aucune édition manuelle. La révision se demande dans le fil Travail avec Nora.
        </p>
        {props.originOpen ? (
          <div className="doc-provenance" data-testid="document-origin-panel">
            <p className="doc-meta-label">ORIGINE</p>
            <p className="text-sm muted">
              {props.originText?.trim() || "Provenance non renseignée"}
            </p>
          </div>
        ) : null}
      </aside>
    </div>
  );
}

/** 08.04 / 08.05 — Historique + comparateur replié/déplié. */
export function DocumentHistorySurface(props: {
  documentTitle: string;
  revisions: RevisionRow[];
  headRevisionNumber: number | null;
  selectedRevisionId: string | null;
  loading?: boolean;
  comparatorExpanded: boolean;
  compareLeftId: string | null;
  compareRightId: string | null;
  onSelectRevision: (id: string) => void;
  onToggleComparator: () => void;
  onCompareLeft: (id: string) => void;
  onCompareRight: (id: string) => void;
  onShowComparison: () => void;
  onRead: () => void;
  onResumeNora: () => void;
}) {
  const selected =
    props.revisions.find((r) => r.id === props.selectedRevisionId) ?? null;
  const available = props.revisions.filter((r) => r.status === "AVAILABLE");

  return (
    <div
      className="doc-workspace-7030"
      data-testid="document-history-surface"
      data-figma-frame={props.comparatorExpanded ? "930:7" : "930:6"}
    >
      <section className="doc-panel doc-panel-list" data-node-id="938:335">
        <div className="doc-panel-list-head">
          <h2 className="doc-panel-heading">{props.documentTitle}</h2>
          <span className="doc-panel-count">
            {props.revisions.length} VERSION{props.revisions.length === 1 ? "" : "S"}
          </span>
        </div>
        <div className="doc-aside-divider" />
        {props.loading ? <p className="text-sm muted">Chargement…</p> : null}
        {!props.loading && props.revisions.length === 0 ? (
          <p className="text-sm muted" data-testid="document-history-empty">
            Aucune révision listée pour ce document.
          </p>
        ) : (
          <ul className="doc-version-list">
            {[...props.revisions]
              .sort((a, b) => b.revisionNumber - a.revisionNumber)
              .map((r) => {
              const currency = revisionCurrencyLabel(r.revisionNumber, props.headRevisionNumber);
              const selectedRow = props.selectedRevisionId === r.id;
              return (
                <li key={r.id}>
                  <button
                    type="button"
                    className={`doc-version-row ${selectedRow ? "doc-version-row-selected" : ""}`}
                    onClick={() => props.onSelectRevision(r.id)}
                    aria-pressed={selectedRow}
                    data-testid={`doc-rev-${r.revisionNumber}`}
                  >
                    <div className="doc-version-row-top">
                      <span className="doc-version-title">Version {r.revisionNumber}</span>
                      <span className={revisionCurrencyBadgeClass(currency)}>
                        {currency.toUpperCase()}
                      </span>
                    </div>
                    <p className="doc-version-excerpt">
                      {r.excerpt?.trim() ||
                        (r.createdAt
                          ? new Date(r.createdAt).toLocaleString("fr-FR")
                          : `Statut ${r.status}`)}
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
        <p className="doc-panel-footnote">
          Une ancienne version reste lisible sans redevenir automatiquement la version courante.
        </p>
      </section>

      <aside className="doc-panel doc-panel-aside" data-testid="document-history-aside">
        <p className="doc-aside-kicker">VERSION SÉLECTIONNÉE</p>
        {selected ? (
          <>
            <h3 className="doc-aside-title">Version {selected.revisionNumber}</h3>
            <span
              className={revisionCurrencyBadgeClass(
                revisionCurrencyLabel(selected.revisionNumber, props.headRevisionNumber),
              )}
            >
              {revisionCurrencyLabel(
                selected.revisionNumber,
                props.headRevisionNumber,
              ).toUpperCase()}
            </span>
            <MetaBlock
              label="STATUT"
              value={
                revisionCurrencyLabel(selected.revisionNumber, props.headRevisionNumber) ===
                "Courante"
                  ? "Version courante"
                  : revisionCurrencyLabel(selected.revisionNumber, props.headRevisionNumber) ===
                      "Historique"
                    ? "Version précédente conservée"
                    : "Actualité non vérifiée"
              }
            />
            <div className="doc-aside-divider" />
            <div className="doc-aside-actions">
              <DocActionButton
                variant="secondary"
                label="Lire cette version"
                onClick={props.onRead}
                testId="doc-action-read-version"
              />
              <DocActionButton
                variant="primary"
                label="Retravailler avec Nora"
                onClick={props.onResumeNora}
                testId="doc-action-rework-nora"
              />
            </div>
          </>
        ) : (
          <p className="text-sm muted">Sélectionnez une version.</p>
        )}

        <div className="doc-aside-divider" />
        <p className="doc-meta-label">COMPARER DEUX VERSIONS</p>
        <DocActionButton
          variant="secondary"
          label={
            props.comparatorExpanded
              ? "Comparer deux versions  ⌃"
              : "Comparer deux versions  ⌄"
          }
          onClick={props.onToggleComparator}
          testId="doc-action-compare-toggle"
        />
        {props.comparatorExpanded ? (
          <div className="doc-compare-controls" data-testid="document-compare-controls">
            <label className="doc-select-label">
              VERSION DE DÉPART
              <select
                className="doc-select"
                value={props.compareLeftId ?? ""}
                onChange={(e) => props.onCompareLeft(e.target.value)}
                data-testid="doc-compare-left"
              >
                <option value="">Choisir…</option>
                {[...available]
                  .sort((a, b) => b.revisionNumber - a.revisionNumber)
                  .map((r) => (
                  <option key={r.id} value={r.id}>
                    v{r.revisionNumber}
                  </option>
                ))}
              </select>
            </label>
            <label className="doc-select-label">
              <span className="sr-only">Version d&apos;arrivée</span>
              <select
                className="doc-select"
                value={props.compareRightId ?? ""}
                onChange={(e) => props.onCompareRight(e.target.value)}
                data-testid="doc-compare-right"
                aria-label="Version d'arrivée"
              >
                <option value="">Choisir…</option>
                {[...available]
                  .sort((a, b) => b.revisionNumber - a.revisionNumber)
                  .map((r) => (
                  <option key={r.id} value={r.id}>
                    v{r.revisionNumber}
                  </option>
                ))}
              </select>
            </label>
            <DocActionButton
              variant="primary"
              label="Afficher la comparaison"
              onClick={props.onShowComparison}
              disabled={
                !props.compareLeftId ||
                !props.compareRightId ||
                props.compareLeftId === props.compareRightId
              }
              testId="doc-action-show-comparison"
            />
          </div>
        ) : (
          <p className="doc-compare-hint">
            Choisissez « Comparer » pour sélectionner les deux versions à confronter.
          </p>
        )}
      </aside>
    </div>
  );
}

/** 08.06 — Comparaison 50/50 lecture seule. */
export function DocumentCompareSurface(props: {
  documentTitle: string;
  headRevisionNumber: number | null;
  comparison: DocumentComparePayload | null;
  leftMarkdown: string | null;
  rightMarkdown: string | null;
  error?: string | null;
  onBack: () => void;
}) {
  const left = props.comparison?.left;
  const right = props.comparison?.right;
  const degraded = Boolean(props.comparison?.diff?.degraded);
  const removed = props.comparison?.diff?.removed ?? [];
  const added = props.comparison?.diff?.added ?? [];

  return (
    <div className="doc-compare-workspace" data-testid="document-compare" data-figma-frame="930:8">
      <div className="doc-compare-toolbar">
        <DocActionButton
          variant="secondary"
          label="Retour à l’historique"
          onClick={props.onBack}
          testId="doc-action-back-history"
        />
      </div>
      {props.error ? (
        <p className="text-sm" role="alert" data-testid="document-compare-error">
          {props.error}
        </p>
      ) : null}
      {degraded ? (
        <div className="fig-alert" data-testid="document-compare-degraded" role="status">
          Comparaison dégradée
          {props.comparison?.diff?.reason ? ` (${props.comparison.diff.reason})` : ""} — résumé
          non exhaustif. {props.comparison?.note ?? ""}
        </div>
      ) : null}
      <p className="text-sm muted" data-testid="document-compare-sense">
        Sens de lecture : la colonne de gauche est la référence comparée ; la colonne de droite
        est la version opposée. Les lignes retirées / ajoutées suivent ce sens, même si
        l’ordre des versions est inversé.
      </p>
      <div className="doc-compare-columns">
        <section className="doc-panel doc-compare-col">
          <p className="doc-aside-kicker">
            RÉVISION {left?.revisionNumber ?? "?"}
            {"   ·   "}
            {left
              ? revisionCurrencyLabel(left.revisionNumber, props.headRevisionNumber).toUpperCase()
              : ""}
            {"   ·   RÉFÉRENCE"}
          </p>
          <div className="doc-aside-divider" />
          <h3 className="doc-compare-doc-title">{props.documentTitle}</h3>
          <p className="doc-diff-panel-kicker">Titre métier (inchangé)</p>
          <div className="doc-read-body">
            {props.leftMarkdown != null ? (
              <SafeMarkdown content={props.leftMarkdown} />
            ) : (
              <p className="text-sm muted">Contenu indisponible.</p>
            )}
          </div>
          {removed.length > 0 ? (
            <div className="doc-diff-removed" data-testid="document-diff-removed">
              <p className="doc-diff-panel-kicker">Retiré par rapport à la référence</p>
              {removed.slice(0, 8).map((line, i) => (
                <div key={`rm-${i}`} className="doc-diff-line">
                  <SafeMarkdown content={line || " "} />
                </div>
              ))}
            </div>
          ) : null}
        </section>
        <section className="doc-panel doc-compare-col">
          <p className="doc-aside-kicker">
            RÉVISION {right?.revisionNumber ?? "?"}
            {"   ·   "}
            {right
              ? revisionCurrencyLabel(right.revisionNumber, props.headRevisionNumber).toUpperCase()
              : ""}
            {"   ·   COMPARÉE"}
          </p>
          <div className="doc-aside-divider" />
          <h3 className="doc-compare-doc-title">{props.documentTitle}</h3>
          <p className="doc-diff-panel-kicker">Titre métier (inchangé)</p>
          <div className="doc-read-body">
            {props.rightMarkdown != null ? (
              <SafeMarkdown content={props.rightMarkdown} />
            ) : (
              <p className="text-sm muted">Contenu indisponible.</p>
            )}
          </div>
          {added.length > 0 ? (
            <div className="doc-diff-added" data-testid="document-diff-added">
              <p className="doc-diff-panel-kicker">Ajouté dans la version comparée</p>
              {added.slice(0, 8).map((line, i) => (
                <div key={`ad-${i}`} className="doc-diff-line">
                  <SafeMarkdown content={line || " "} />
                </div>
              ))}
            </div>
          ) : null}
        </section>
      </div>
      <div className="doc-compare-summary" data-testid="document-compare-summary">
        <p className="doc-aside-kicker">MODIFICATIONS IDENTIFIÉES</p>
        <p className="text-sm muted">
          {degraded
            ? "Différentiel exhaustif indisponible — voir l’avertissement ci-dessus."
            : `+${added.length} ligne${added.length > 1 ? "s" : ""} / −${removed.length} ligne${removed.length > 1 ? "s" : ""} · Révisions distinctes du titre métier`}
        </p>
      </div>
    </div>
  );
}
