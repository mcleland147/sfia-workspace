# Review Pack FULL — G4 chat-first reprise — 2026-11-08

**Verdict Cursor (technique) :** `G4 IMPLEMENTATION CANDIDATE — DEV READY FOR MORRIS VISUAL VERDICT`
**Pas** de validation visuelle Cursor/ChatGPT. F2/G5 NOT RUN. NO RELEASE. ENV-01 DEV only.

## 1. Git Truth

| | |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-next-g4-construction` |
| Branche | `feat/next-convergence-ux-g4-construction` |
| HEAD | `29535d07e9c14077b422020e25fbf54a98affe25` |
| Tree | `3f8038ceab95344acef9e3676dd294663a00f2cf` |
| Parent | `c2af05cb` (UX déclarative invalidée) |
| origin/main | `f0d59bc8` |

```
 M .tmp-sfia-review/chatgpt-review.md
?? projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/tmp/

```

## 2. Travail

Reprise produit chat-first du sas + recomposition Nora/Documents/Journal/Pilotage. Portefeuille préservé.

**Sas :** titre « Clarifions votre intention », fil dominant, panneau proposition non autorisant, constitution explicite, create D2 après inspection. Plus de formulaire permanent Nom/Résumé/Enregistrer.

**Proposition :** `previewName`/`previewSummary` via PATCH après acte Pilote ; adopt dernier message Nora = bouton explicite.

## 3. Créations

### `projects/sfia-studio-next/web/src/components/figma/PreparationConversation.tsx`

```
"use client";

import { SafeMarkdown } from "@/components/SafeMarkdown";

export type PrepMessage = {
  id: string;
  role: string;
  content: string;
  status: string;
};

export function PreparationConversation(props: {
  messages: PrepMessage[];
  draft: string;
  busy: boolean;
  noraActivity: "idle" | "preparing" | "error";
  onDraftChange: (v: string) => void;
  onSend: () => void;
  footer?: React.ReactNode;
}) {
  const empty = props.messages.length === 0;

  return (
    <section className="fig-panel fig-sas-thread space-y-3" data-testid="prep-conversation">
      <p className="fig-kicker">Discussion</p>
      <div className="space-y-3 max-h-[58vh] overflow-auto pr-1" data-testid="prep-message-list">
        {empty ? (
          <div className="fig-msg fig-msg-nora" data-testid="prep-empty-invite">
            <div className="text-xs muted mb-2 uppercase tracking-wide">Nora</div>
            <p className="text-sm">
              Exposez votre intention librement. Je clarifie avec vous — aucun projet n&apos;est créé
              tant que vous ne le décidez pas explicitement.
            </p>
          </div>
        ) : null}
        {props.messages.map((m) => (
          <article
            key={m.id}
            className={`fig-msg ${m.role === "assistant" ? "fig-msg-nora" : "fig-msg-pilot"}`}
            data-testid={`prep-msg-${m.role}`}
          >
            <div className="text-xs muted mb-2 flex gap-2 items-center">
              <span className="uppercase tracking-wide">
                {m.role === "assistant" ? "Nora" : "Pilote"}
              </span>
              <span>· {m.status}</span>
            </div>
            {m.role === "assistant" ? (
              <SafeMarkdown content={m.content} />
            ) : (
              <div className="whitespace-pre-wrap text-sm">{m.content}</div>
            )}
          </article>
        ))}
        {props.noraActivity === "preparing" ? (
          <div className="fig-alert" role="status" aria-live="polite">
            Nora prépare une réponse…
          </div>
        ) : null}
        {props.noraActivity === "error" ? (
          <div className="fig-alert" style={{ borderColor: "var(--bad)" }} role="alert">
            Échec de génération — votre message Pilote est conservé. Vous pouvez renvoyer.
          </div>
        ) : null}
      </div>
      <div className="fig-composer">
        <textarea
          className="textarea"
          value={props.draft}
          onChange={(e) => props.onDraftChange(e.target.value)}
          placeholder="Écrire à Nora…"
          aria-label="Message à Nora"
          data-testid="prep-draft"
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && !props.busy) {
              e.preventDefault();
              props.onSend();
            }
          }}
        />
        <div className="flex flex-wrap gap-2 items-center">
          <button
            type="button"
            className="btn"
            disabled={props.busy || !props.draft.trim()}
            onClick={props.onSend}
            data-testid="prep-send"
          >
            Envoyer
          </button>
          <span className="text-xs muted">⌘/Ctrl+Entrée</span>
        </div>
      </div>
      {props.footer}
    </section>
  );
}

```
### `projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx`

```
"use client";

/**
 * Non-authorizing D2 proposal panel.
 * Proposal fields come only from stored previewName/previewSummary (PATCH)
 * or from an explicit Pilot constitution act — never silent NLP extraction.
 */

export type ProposalOpenPoint = { id: string; statement: string };

export function PreparationProposal(props: {
  projectId: string | null;
  previewName: string;
  previewSummary: string;
  creationRevision: number;
  messageCount: number;
  openPoints: ProposalOpenPoint[];
  busy: boolean;
  editing: boolean;
  draftName: string;
  draftSummary: string;
  onDraftName: (v: string) => void;
  onDraftSummary: (v: string) => void;
  onStartConstitute: () => void;
  onAdoptLastNoraSummary: () => void;
  canAdoptLastNora: boolean;
  onSaveProposal: () => void;
  onCancelEdit: () => void;
  onCreateProject: () => void;
  status?: string;
}) {
  const hasStored =
    props.previewName.trim().length > 0 || props.previewSummary.trim().length > 0;
  const created = Boolean(props.projectId);

  return (
    <aside className="space-y-3" data-testid="prep-proposal">
      <div className="fig-panel space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="fig-kicker">Aperçu de la proposition</p>
            <h2 className="fig-panel-title !mb-0">
              {hasStored ? props.previewName.trim() || "Projet envisagé" : "Projet envisagé"}
            </h2>
          </div>
          <span className={`fig-tag ${created ? "fig-tag-ok" : "fig-tag-warn"}`}>
            {created ? "Créé" : "Non créé"}
          </span>
        </div>

        {!hasStored && !props.editing ? (
          <div className="fig-empty-list" data-testid="prep-proposal-empty">
            {props.messageCount === 0 ? (
              <div className="fig-empty-row">
                <div>
                  <div className="font-medium">Pas encore de proposition</div>
                  <div className="muted text-xs">
                    Discutez d&apos;abord avec Nora. La proposition n&apos;apparaît qu&apos;après un
                    acte explicite de votre part.
                  </div>
                </div>
              </div>
            ) : (
              <div className="fig-empty-row">
                <div>
                  <div className="font-medium">Échange en cours</div>
                  <div className="muted text-xs">
                    Aucune proposition enregistrée. Constituez-en une pour inspecter avant création.
                  </div>
                </div>
              </div>
            )}
            <button
              type="button"
              className="btn secondary mt-2 w-full"
              disabled={created || props.messageCount === 0}
              onClick={props.onStartConstitute}
              data-testid="prep-constitute"
            >
              Constituer une proposition
            </button>
          </div>
        ) : null}

        {props.editing ? (
          <div className="space-y-2" data-testid="prep-proposal-edit">
            <p className="text-xs muted">
              Ajustement secondaire après inspection — n&apos;est pas le parcours principal.
            </p>
            <label className="block text-xs muted" htmlFor="prep-prop-name">
              Nom envisagé
            </label>
            <input
              id="prep-prop-name"
              className="input"
              value={props.draftName}
              onChange={(e) => props.onDraftName(e.target.value)}
              placeholder="Nom du projet envisagé"
              data-testid="prep-proposal-name"
            />
            <label className="block text-xs muted" htmlFor="prep-prop-summary">
              Résumé inspecté
            </label>
            <textarea
              id="prep-prop-summary"
              className="textarea"
              value={props.draftSummary}
              onChange={(e) => props.onDraftSummary(e.target.value)}
              placeholder="Intention, résultat visé, points ouverts…"
              data-testid="prep-proposal-summary"
            />
            {props.canAdoptLastNora ? (
              <button
                type="button"
                className="btn secondary"
                onClick={props.onAdoptLastNoraSummary}
                data-testid="prep-adopt-nora"
              >
                Reprendre le dernier message Nora comme résumé
              </button>
            ) : null}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="btn"
                disabled={props.busy}
                onClick={props.onSaveProposal}
                data-testid="prep-proposal-save"
              >
                Enregistrer pour inspection
              </button>
              <button
                type="button"
                className="btn secondary"
                disabled={props.busy}
                onClick={props.onCancelEdit}
              >
                Annuler
              </button>
            </div>
            <p className="text-xs muted">Révision création courante : {props.creationRevision}</p>
          </div>
        ) : null}

        {hasStored && !props.editing ? (
          <div className="space-y-2" data-testid="prep-proposal-ready">
            <div className="fig-msg text-sm space-y-2">
              <div>
                <span className="fig-tag fig-tag-muted mr-2">Intention</span>
                <span className="muted text-xs">
                  {props.previewName.trim() || "— (nom non renseigné)"}
                </span>
              </div>
              <div>
                <span className="fig-tag fig-tag-muted mr-2">Résumé</span>
                <p className="mt-1 whitespace-pre-wrap text-sm">
                  {props.previewSummary.trim() || "— (résumé non renseigné)"}
                </p>
              </div>
              <div>
                <span className="fig-tag fig-tag-muted mr-2">Ouvert</span>
                <span className="muted text-xs">
                  {props.openPoints.length > 0
                    ? `${props.openPoints.length} point(s) capitalisé(s)`
                    : "Aucun point ouvert capitalisé"}
                </span>
              </div>
            </div>
            {props.openPoints.slice(0, 4).map((o) => (
              <p key={o.id} className="text-xs muted pl-1">
                · {o.statement}
              </p>
            ))}
            <button
              type="button"
              className="btn secondary"
              disabled={created}
              onClick={props.onStartConstitute}
              data-testid="prep-proposal-adjust"
            >
              Ajuster la proposition
            </button>
            <p className="text-xs muted">Révision création : {props.creationRevision}</p>
          </div>
        ) : null}
      </div>

      <div className="fig-panel space-y-3" style={{ background: "rgba(101,111,225,0.08)" }}>
        <h3 className="fig-panel-title">Vous restez maître de la création</h3>
        <p className="text-sm muted">
          Une réponse Nora n&apos;est jamais une création. Le projet n&apos;existe qu&apos;après votre
          confirmation explicite sur l&apos;aperçu inspecté.
        </p>
        <button
          type="button"
          className="btn w-full"
          disabled={props.busy || created || !hasStored}
          onClick={props.onCreateProject}
          data-testid="prep-create-project"
        >
          {created ? "Projet déjà créé" : "Créer le projet"}
        </button>
        <p className="text-xs muted">
          Tu peux reprendre cette préparation quand tu le souhaites.
        </p>
      </div>

      {props.status ? (
        <p className="text-sm muted" data-testid="surface-status">
          {props.status}
        </p>
      ) : null}
    </aside>
  );
}

```
### `projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx`

```
"use client";

import { SafeMarkdown } from "@/components/SafeMarkdown";

export type NoraMsg = {
  id: string;
  role: string;
  content: string;
  status: string;
};

export function NoraConversation(props: {
  messages: NoraMsg[];
  draft: string;
  busy: boolean;
  unresolvedPending?: boolean;
  activity?: "idle" | "preparing" | "error";
  status?: string;
  onDraft: (v: string) => void;
  onSend: () => void;
  onReconcile?: () => void;
  aside?: React.ReactNode;
}) {
  const n = props.messages.length;
  const frame = n === 0 ? "161:216" : n <= 2 ? "161:288" : "94:214";
  const variantLabel =
    n === 0 ? "Première conversation" : n <= 2 ? "Reprise contextualisée" : "Fil long";

  return (
    <div
      className="fig-workspace fig-nora-responsive"
      data-figma-frame={frame}
      data-figma-mobile-frames="282:468,282:492"
      data-testid="nora-workspace"
    >
      <section className="space-y-3">
        <div className="fig-panel space-y-3">
          <div className="flex flex-wrap gap-2 items-center">
            <p className="fig-kicker !mb-0">Travail / projet</p>
            <span className="fig-tag fig-tag-accent">PILOTE</span>
            <span className="fig-tag fig-tag-muted">{variantLabel}</span>
            {props.unresolvedPending ? (
              <span className="fig-tag fig-tag-warn">Interruption / reprise</span>
            ) : null}
          </div>
          <div className="space-y-3 max-h-[56vh] overflow-auto pr-1" data-testid="nora-thread">
            {n === 0 ? (
              <div className="fig-msg fig-msg-nora text-sm" data-testid="nora-first-empty">
                <div className="text-xs muted mb-2 uppercase tracking-wide">Nora</div>
                Première conversation — écrivez pour démarrer le fil du projet. Aucun message
                fictif n&apos;est prérempli.
              </div>
            ) : null}
            {props.messages.map((m) => (
              <article
                key={m.id}
                className={`fig-msg ${m.role === "assistant" ? "fig-msg-nora" : "fig-msg-pilot"}`}
              >
                <div className="text-xs muted mb-1">
                  {m.role === "assistant" ? "NORA" : "PILOTE"} · {m.status}
                </div>
                {m.role === "assistant" ? (
                  <SafeMarkdown content={m.content} />
                ) : (
                  <div className="whitespace-pre-wrap text-sm">{m.content}</div>
                )}
              </article>
            ))}
            {props.activity === "preparing" ? (
              <div className="fig-alert" role="status">
                Nora prépare une réponse…
              </div>
            ) : null}
          </div>
          <div className="fig-composer">
            <textarea
              className="textarea"
              value={props.draft}
              onChange={(e) => props.onDraft(e.target.value)}
              placeholder="Écrire à Nora…"
              aria-label="Message à Nora"
              data-testid="thread-draft"
            />
            <div className="flex flex-wrap gap-2">
              <button
                className="btn"
                disabled={props.busy || !props.draft.trim()}
                onClick={props.onSend}
                data-testid="thread-send"
              >
                Envoyer
              </button>
              <span className="text-xs muted self-center">Joindre un élément · non requis</span>
            </div>
            {props.unresolvedPending && props.onReconcile ? (
              <div className="space-y-1" data-testid="thread-pending-banner">
                <p className="text-xs muted">Tentative non résolue — réconcilier avant un nouveau tour.</p>
                <button
                  type="button"
                  className="btn secondary"
                  disabled={props.busy}
                  data-testid="thread-reconcile-pending"
                  onClick={props.onReconcile}
                >
                  Réconcilier la tentative en cours
                </button>
              </div>
            ) : null}
            {props.status ? (
              <p className="text-xs muted" data-testid="thread-nora-status">
                {props.status}
              </p>
            ) : null}
          </div>
        </div>
      </section>
      {props.aside ? <aside className="space-y-3">{props.aside}</aside> : null}
    </div>
  );
}

```
### `projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx`

```
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

```
### `projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx`

```
"use client";

type Subject = {
  id: string;
  title: string;
  status: string;
  originatedFromSubjectId: string | null;
};
type Acquis = {
  id: string;
  kind: string;
  statement: string;
  status: string;
  subjectId: string | null;
};
type OpenPoint = { id: string; statement: string; status: string; subjectId: string | null };

export function ProjectJournal(props: {
  subjects: Subject[];
  acquis: Acquis[];
  openPoints: OpenPoint[];
  frameId?: string;
  onBackToThread?: () => void;
  onRenameSubject?: (id: string, title: string) => void;
  splitSlot?: React.ReactNode;
}) {
  const current = props.acquis.filter((a) => a.status === "CURRENT");
  const open = props.openPoints.filter((o) => o.status === "OPEN");
  const emptyAll = props.subjects.length === 0 && current.length === 0 && open.length === 0;

  return (
    <div className="space-y-4" data-figma-frame={props.frameId ?? "94:515"} data-testid="project-journal">
      <div className="fig-section-head">
        <div>
          <p className="fig-kicker">Journal</p>
          <h2 className="fig-section-title">Sujets, acquis et points ouverts</h2>
          <p className="fig-hero-sub !mt-1">
            Consultation capitalisée — aucune HumanDecision ici. Les décisions opposables sont dans
            Pilotage (D6).
          </p>
        </div>
        {props.onBackToThread ? (
          <button type="button" className="btn secondary" onClick={props.onBackToThread}>
            Retour au fil
          </button>
        ) : null}
      </div>

      {emptyAll ? (
        <div className="fig-two-col">
          <section className="fig-panel space-y-3" data-testid="journal-empty-structure">
            <h3 className="fig-panel-title">Structure du journal</h3>
            <div className="fig-empty-list">
              <div className="fig-empty-row">
                <div>
                  <div className="font-medium">Sujets</div>
                  <div className="muted text-xs">Aucun sujet capitalisé pour l&apos;instant</div>
                </div>
                <span className="fig-tag fig-tag-muted">0</span>
              </div>
              <div className="fig-empty-row">
                <div>
                  <div className="font-medium">Acquis courants</div>
                  <div className="muted text-xs">Apparaitront après capitalisation confirmée</div>
                </div>
                <span className="fig-tag fig-tag-muted">0</span>
              </div>
              <div className="fig-empty-row">
                <div>
                  <div className="font-medium">Points ouverts</div>
                  <div className="muted text-xs">À clarifier dans le fil Nora</div>
                </div>
                <span className="fig-tag fig-tag-muted">0</span>
              </div>
            </div>
          </section>
          <section className="fig-panel space-y-2" data-figma-frame="129:72">
            <h3 className="fig-panel-title">Décisions &amp; restrictions</h3>
            <p className="text-sm muted">
              Aucune décision D6 affichée dans le journal. Ouvrez Pilotage pour les HumanDecision
              opposables.
            </p>
            <p className="text-xs muted">Sources Git · non disponible (ML4 hors périmètre)</p>
          </section>
        </div>
      ) : (
        <div className="fig-two-col">
          <section className="fig-panel space-y-3">
            <div className="fig-section-head">
              <h3 className="fig-panel-title !mb-0">Sujets</h3>
              <span className="fig-tag fig-tag-muted">{props.subjects.length}</span>
            </div>
            {props.subjects.length === 0 ? (
              <p className="text-sm muted">Aucun sujet.</p>
            ) : (
              props.subjects.map((s) => (
                <div key={s.id} className="fig-msg space-y-2">
                  <div className="flex flex-wrap gap-2 items-start justify-between">
                    <div>
                      <div className="font-medium text-sm">{s.title}</div>
                      <div className="text-xs muted">
                        {s.status}
                        {s.originatedFromSubjectId ? ` · de ${s.originatedFromSubjectId}` : ""}
                      </div>
                    </div>
                    {props.onRenameSubject ? (
                      <button
                        type="button"
                        className="btn secondary"
                        onClick={() => {
                          const t = window.prompt("Nouveau titre", s.title);
                          if (t) props.onRenameSubject?.(s.id, t);
                        }}
                      >
                        Renommer
                      </button>
                    ) : null}
                  </div>
                </div>
              ))
            )}
            {props.splitSlot}
          </section>
          <section className="space-y-3">
            <div className="fig-panel space-y-2">
              <div className="fig-section-head">
                <h3 className="fig-panel-title !mb-0">Acquis courants</h3>
                <span className="fig-tag fig-tag-muted">{current.length}</span>
              </div>
              {current.length === 0 ? (
                <p className="text-sm muted">Aucun acquis CURRENT.</p>
              ) : (
                current.map((a) => (
                  <div key={a.id} className="fig-msg text-sm">
                    <span className="fig-tag fig-tag-muted mr-2">{a.kind}</span>
                    {a.statement}
                  </div>
                ))
              )}
            </div>
            <div className="fig-panel space-y-2" data-figma-frame="129:72">
              <div className="fig-section-head">
                <h3 className="fig-panel-title !mb-0">Points ouverts</h3>
                <span className="fig-tag fig-tag-warn">{open.length}</span>
              </div>
              {open.length === 0 ? (
                <p className="text-sm muted">Aucun point ouvert.</p>
              ) : (
                open.map((o) => (
                  <div key={o.id} className="fig-msg text-sm">
                    {o.statement}
                  </div>
                ))
              )}
              <p className="text-xs muted pt-1">
                Décisions D6 · consulter Pilotage — affichage journal non mutateur.
              </p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

```
### `projects/sfia-studio-next/web/tests/e2e/g4-chat-first-sas.spec.ts`

```
import { test, expect } from "@playwright/test";

/**
 * G4 chat-first sas — BROWSER on isolated E2E lane (not operator DEV :3100).
 * Nora responses are fixture FAKE in this lane — not LIVE cognition proof.
 */
test("G4 chat-first: discuss → constitute proposal → create; journal empty structure", async ({
  page,
}) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL("**/preparations/**");

  await expect(page.getByRole("heading", { name: /Clarifions votre intention/i })).toBeVisible();
  await expect(page.getByTestId("prep-empty-invite")).toBeVisible();
  await expect(page.getByTestId("prep-proposal-empty")).toBeVisible();
  await expect(page.getByPlaceholder("Nom du projet")).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Enregistrer l'aperçu" })).toHaveCount(0);

  await page.getByTestId("prep-draft").fill("Intention E2E chat-first (fixture FAKE Nora)");
  await page.getByTestId("prep-send").click();
  await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
    timeout: 30000,
  });

  await page.getByTestId("prep-constitute").click();
  await page.getByTestId("prep-adopt-nora").click();
  await page.getByTestId("prep-proposal-name").fill("Projet chat-first E2E");
  await page.getByTestId("prep-proposal-save").click();
  await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
  await expect(page.getByTestId("prep-create-project")).toBeEnabled();

  await page.getByRole("button", { name: "Journal", exact: true }).click();
  await expect(page.getByTestId("project-journal")).toBeVisible();
  await expect(page.getByTestId("journal-empty-structure")).toBeVisible();

  await page.getByRole("button", { name: "Discussion", exact: true }).click();
  await page.getByTestId("prep-create-project").click();
  await page.waitForURL("**/projects/**", { timeout: 15000 });
  await expect(page.getByTestId("nora-workspace")).toBeVisible();
});

```
### `projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/as-built-g4-chat-first-reprise-2026-11-08.md`

```
# As-built — G4 reprise chat-first (2026-11-08)

Branche : `feat/next-convergence-ux-g4-construction`
Parent UX : `c2af05cb` (transposition déclarative invalidée pour acceptation visuelle)
Portefeuille `94:50` : **préservé** (macro acceptée Morris)

## Correction sas (priorité)

| Avant | Après |
|---|---|
| Formulaire permanent Nom/Résumé/Enregistrer | Conversation dominante + proposition non autorisante |
| Titre « Fil continu avec Nora » | « Clarifions votre intention » / reprise |
| Création via champs toujours visibles | Constituer → inspecter → **Créer le projet** explicite |

Proposition : champs D2 `previewName` / `previewSummary` via PATCH uniquement après acte Pilote (`prep-constitute` / ajustement). Adoption du dernier message Nora = choix explicite, pas NLP silencieux.

## Composants

- `PreparationConversation`, `PreparationProposal`
- `NoraConversation`
- `DocumentLibrary`, `DocumentInspector`, `DocumentHistory` (`241:385`)
- `ProjectJournal` (structure vide honnête)

## Familles

| Famille | Statut technique | Preuve |
|---|---|---|
| Sas chat-first | IMPLEMENTED (candidate) | e2e `g4-chat-first-sas` + UI sans formulaire permanent |
| Nora projet | IMPLEMENTED (candidate) | `NoraConversation` variantes frame |
| Documents | IMPLEMENTED (candidate) | library → read → history → revise |
| Journal | IMPLEMENTED (candidate) | structure vide / listes réelles |
| Pilotage | IMPLEMENTED (candidate) | layout + `PilotagePanel` D5/D6 |
| Portefeuille | PRESERVED | non refondu |

F2/G5 : NOT RUN — verdict visuel = Morris.

## DEV

Worktree G4, port 3100, login Pilote A (DEV) FAKE. NO RELEASE.

```

## 4. Diffs

```
 .../as-built-g4-chat-first-reprise-2026-11-08.md   |  39 ++
 .../src/app/preparations/[preparationId]/page.tsx  | 471 ++++++++---------
 .../web/src/app/projects/[projectId]/page.tsx      | 563 ++++++++-------------
 .../web/src/components/figma/DocumentSurfaces.tsx  | 248 +++++++++
 .../web/src/components/figma/NoraConversation.tsx  | 120 +++++
 .../components/figma/PreparationConversation.tsx   |  97 ++++
 .../src/components/figma/PreparationProposal.tsx   | 215 ++++++++
 .../web/src/components/figma/ProjectJournal.tsx    | 164 ++++++
 .../web/tests/e2e/g4-b1-b4-correctifs.spec.ts      |  24 +-
 .../web/tests/e2e/g4-chat-first-sas.spec.ts        |  44 ++
 10 files changed, 1370 insertions(+), 615 deletions(-)

```

### DIFF `projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
index 02ba61af..0982171a 100644
--- a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
@@ -3,6 +3,15 @@
 import { useCallback, useEffect, useMemo, useRef, useState } from "react";
 import { useParams, useRouter, useSearchParams } from "next/navigation";
 import { SafeMarkdown } from "@/components/SafeMarkdown";
+import { PreparationConversation } from "@/components/figma/PreparationConversation";
+import { PreparationProposal } from "@/components/figma/PreparationProposal";
+import { ProjectJournal } from "@/components/figma/ProjectJournal";
+import {
+  DocumentHistory,
+  DocumentInspector,
+  DocumentLibrary,
+  type RevisionRow,
+} from "@/components/figma/DocumentSurfaces";

 type Msg = { id: string; role: string; content: string; status: string };
 type Doc = {
@@ -29,6 +38,11 @@ export default function PreparationPage() {
   const preparationId = params.preparationId;
   const isResumedPrep =
     searchParams.get("resume") === "1" || searchParams.get("from") === "portfolio";
+  const [proposalEditing, setProposalEditing] = useState(false);
+  const [draftProposalName, setDraftProposalName] = useState("");
+  const [draftProposalSummary, setDraftProposalSummary] = useState("");
+  const [revRows, setRevRows] = useState<RevisionRow[]>([]);
+  const [docViewMode, setDocViewMode] = useState<"read" | "edit">("read");
   const [messages, setMessages] = useState<Msg[]>([]);
   const [docs, setDocs] = useState<Doc[]>([]);
   const [knowledge, setKnowledge] = useState<Knowledge | null>(null);
@@ -426,15 +440,22 @@ export default function PreparationPage() {
   }

   async function savePreview() {
+    const name = proposalEditing ? draftProposalName : previewName;
+    const summary = proposalEditing ? draftProposalSummary : previewSummary;
     const res = await fetch(`/api/preparations/${preparationId}`, {
       method: "PATCH",
       headers: { "Content-Type": "application/json" },
-      body: JSON.stringify({ previewName, previewSummary }),
+      body: JSON.stringify({ previewName: name, previewSummary: summary }),
     });
     const j = await res.json();
     if (res.ok) {
+      setPreviewName(name);
+      setPreviewSummary(summary);
       setCreationRevision(j.creationRevision);
-      setStatus(`Aperçu révision ${j.creationRevision}`);
+      setProposalEditing(false);
+      setStatus(`Proposition enregistrée · révision ${j.creationRevision}`);
+    } else {
+      setStatus(`Échec enregistrement proposition`);
     }
   }

@@ -501,32 +522,68 @@ export default function PreparationPage() {
     }
   }

+  function startConstituteProposal() {
+    setDraftProposalName(previewName);
+    setDraftProposalSummary(previewSummary);
+    setProposalEditing(true);
+  }
+
+  function adoptLastNoraSummary() {
+    const last = [...messages].reverse().find((m) => m.role === "assistant");
+    if (last) setDraftProposalSummary(last.content.slice(0, 2000));
+  }
+
+  async function loadRevisionHistory(documentId: string) {
+    const res = await fetch(`/api/preparations/${preparationId}/documents/${documentId}`);
+    if (!res.ok) {
+      setRevRows([]);
+      return;
+    }
+    const j = await res.json();
+    const rows = (j.revisions ?? j.items ?? []) as Array<{
+      id: string;
+      revisionNumber: number;
+      status: string;
+      createdAt?: string;
+    }>;
+    setRevRows(
+      rows.map((r) => ({
+        id: r.id,
+        revisionNumber: r.revisionNumber,
+        status: r.status,
+        createdAt: r.createdAt,
+      })),
+    );
+  }
+
   const inspected = docs.find((d) => d.document.id === inspectDocId) ?? docs[0];
   const sasFrame = isResumedPrep ? "159:145" : "94:135";

   return (
     <div className="fig-page" data-figma-frame={sasFrame} data-sas-resume={isResumedPrep ? "1" : "0"}>
       <div className="fig-breadcrumb">
-        <span>SFIA Studio / Sas de préparation{isResumedPrep ? " · reprise" : ""}</span>
-        <span className="text-xs muted truncate max-w-[45%]">{preparationId}</span>
+        <span>
+          SFIA Studio / Nouveau projet / préparation{isResumedPrep ? " · reprise" : ""}
+        </span>
+        <span className="text-xs muted truncate max-w-[40%]">{preparationId}</span>
       </div>
       <header className="space-y-2">
-        <p className="fig-kicker">{isResumedPrep ? "Reprise / sas" : "Travail / sas"}</p>
+        <p className="fig-kicker">Espace de préparation — projet non créé</p>
         <h1 className="fig-hero-title">
-          {isResumedPrep ? "Préparation retrouvée" : "Fil continu avec Nora"}
+          {isResumedPrep ? "Préparation retrouvée" : "Clarifions votre intention"}
         </h1>
         <p className="fig-hero-sub">
           {isResumedPrep
-            ? "Continuité depuis le portefeuille. Même fil, même ownership — aucune double création."
-            : "Conversation avant projet. La création de projet reste un acte explicite."}
-          {projectId ? ` Projet lié : ${projectId}.` : " Aucun projet encore créé."}
+            ? "Continuité du même fil. Inspectez la proposition éventuelle puis créez explicitement si prêt."
+            : "Discutez librement avec Nora avant de décider de créer un projet."}
+          {projectId ? ` Projet lié : ${projectId}.` : ""}
         </p>
-        <nav className="flex flex-wrap gap-2 pt-1" aria-label="Surfaces ML2">
+        <nav className="flex flex-wrap gap-2 pt-1" aria-label="Surfaces sas">
           {(
             [
-              ["travail", "Travail"],
-              ["journal", "Journal — Sujets"],
-              ["document", "Document"],
+              ["travail", "Discussion"],
+              ["journal", "Journal"],
+              ["document", "Documents"],
             ] as const
           ).map(([id, label]) => (
             <button
@@ -541,246 +598,153 @@ export default function PreparationPage() {
         </nav>
       </header>

-      {noraActivity === "preparing" ? (
-        <div className="fig-alert" role="status" aria-live="polite">
-          Nora prépare une réponse…
-        </div>
-      ) : null}
-      {noraActivity === "error" ? (
-        <div className="fig-alert" style={{ borderColor: "var(--bad)" }}>
-          Échec de génération — message utilisateur conservé.
-        </div>
-      ) : null}
-
       {surface === "travail" ? (
         <div className="fig-workspace">
-          <section className="fig-panel space-y-3">
-            <p className="fig-kicker">Conversation</p>
-            <div className="space-y-3 max-h-[52vh] overflow-auto pr-1">
-              {messages.length === 0 ? (
-                <div className="fig-msg fig-msg-nora text-sm muted">
-                  Commencez le fil — Nora répond dans ce sas avant toute création de projet.
-                </div>
-              ) : null}
-              {messages.map((m) => (
-                <article
-                  key={m.id}
-                  className={`fig-msg ${m.role === "assistant" ? "fig-msg-nora" : "fig-msg-pilot"}`}
-                >
-                  <div className="text-xs muted mb-2 flex gap-2 items-center">
-                    <span className="uppercase tracking-wide">
-                      {m.role === "assistant" ? "Nora" : "Pilote"}
-                    </span>
-                    <span>· {m.status}</span>
-                  </div>
-                  {m.role === "assistant" ? (
-                    <SafeMarkdown content={m.content} />
-                  ) : (
-                    <div className="whitespace-pre-wrap text-sm">{m.content}</div>
-                  )}
-                </article>
-              ))}
-            </div>
-            <div className="fig-composer">
-              <textarea
-                className="textarea"
-                value={draft}
-                onChange={(e) => setDraft(e.target.value)}
-                placeholder="Écrire à Nora…"
-                aria-label="Message à Nora"
-              />
-              <button className="btn" disabled={busy} onClick={sendMessage}>
-                Envoyer
-              </button>
-            </div>
-          </section>
-
-          <section className="space-y-3">
-            <div className="fig-panel space-y-3">
-              <h2 className="fig-panel-title">Aperçu de création (non autorisant)</h2>
-              <input
-                className="input"
-                value={previewName}
-                onChange={(e) => setPreviewName(e.target.value)}
-                placeholder="Nom du projet"
-              />
-              <textarea
-                className="textarea"
-                value={previewSummary}
-                onChange={(e) => setPreviewSummary(e.target.value)}
-                placeholder="Résumé inspecté"
-              />
-              <div className="text-xs muted">Révision création: {creationRevision}</div>
-              <div className="flex flex-wrap gap-2">
-                <button className="btn secondary" disabled={busy} onClick={savePreview}>
-                  Enregistrer l&apos;aperçu
-                </button>
-                <button className="btn" disabled={busy || !!projectId} onClick={createProject}>
-                  Créer le projet
-                </button>
-              </div>
-            </div>
-            <div className="fig-panel space-y-2">
-              <h2 className="fig-panel-title">Contexte</h2>
-              <p className="text-xs muted">
-                Acquis courants: {knowledge?.acquis.filter((a) => a.status === "CURRENT").length ?? 0} ·
-                Points ouverts: {knowledge?.openPoints.filter((o) => o.status === "OPEN").length ?? 0} ·
-                Documents: {docs.length}
-              </p>
-              <p className="text-xs muted">
-                Une recommandation Nora n&apos;est jamais une HumanDecision.
-              </p>
-            </div>
-            {status ? (
-              <p className="text-sm muted" data-testid="surface-status">
-                {status}
-              </p>
-            ) : null}
-          </section>
+          <PreparationConversation
+            messages={messages}
+            draft={draft}
+            busy={busy}
+            noraActivity={noraActivity}
+            onDraftChange={setDraft}
+            onSend={() => void sendMessage()}
+          />
+          <PreparationProposal
+            projectId={projectId}
+            previewName={previewName}
+            previewSummary={previewSummary}
+            creationRevision={creationRevision}
+            messageCount={messages.length}
+            openPoints={(knowledge?.openPoints ?? [])
+              .filter((o) => o.status === "OPEN")
+              .map((o) => ({ id: o.id, statement: o.statement }))}
+            busy={busy}
+            editing={proposalEditing}
+            draftName={draftProposalName}
+            draftSummary={draftProposalSummary}
+            onDraftName={setDraftProposalName}
+            onDraftSummary={setDraftProposalSummary}
+            onStartConstitute={startConstituteProposal}
+            onAdoptLastNoraSummary={adoptLastNoraSummary}
+            canAdoptLastNora={messages.some((m) => m.role === "assistant")}
+            onSaveProposal={() => void savePreview()}
+            onCancelEdit={() => setProposalEditing(false)}
+            onCreateProject={() => void createProject()}
+            status={status}
+          />
         </div>
       ) : null}

       {surface === "document" ? (
-        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-4">
-          <section className="panel p-4 space-y-3">
-            <h2 className="font-medium">Document — inspection / révision</h2>
-            {status ? (
-              <p className="text-sm muted" data-testid="surface-status">
-                {status}
-              </p>
-            ) : null}
-            <div className="flex flex-wrap gap-2 text-xs">
-              {docs.map((d) => (
-                <button
-                  key={d.document.id}
-                  type="button"
-                  className={`btn secondary ${inspectDocId === d.document.id ? "" : ""}`}
-                  onClick={() => {
-                    setInspectDocId(d.document.id);
-                    setDocId(d.document.id);
-                    setDocText(d.latestRevision?.contentMarkdown ?? "");
-                    setBaseRevisionId(d.latestRevision?.id);
-                  }}
-                >
-                  {d.document.title} · v{d.latestRevision?.revisionNumber ?? "?"} ·{" "}
-                  {d.latestRevision?.status ?? "—"}
-                </button>
-              ))}
-            </div>
-            <textarea
-              className="textarea min-h-[240px]"
-              value={docText}
-              onChange={(e) => setDocText(e.target.value)}
+        <div className="fig-workspace-3" data-figma-frame="94:370">
+          <div className="space-y-2">
+            <DocumentLibrary
+              documents={docs}
+              selectedId={inspectDocId}
+              emptyHint="Aucun document dans ce sas. Créez explicitement un document pour l'inspecter ensuite en lecture seule."
+              onSelect={(d) => {
+                setInspectDocId(d.document.id);
+                setDocId(d.document.id);
+                setDocText(d.latestRevision?.contentMarkdown ?? "");
+                setBaseRevisionId(d.latestRevision?.id);
+                setDocViewMode("read");
+                void loadRevisionHistory(d.document.id);
+              }}
             />
-            <div className="flex flex-wrap gap-2">
+            {docs.length === 0 && docViewMode !== "edit" ? (
               <button
+                type="button"
                 className="btn secondary"
-                disabled={busy}
-                onClick={saveDoc}
-                data-testid="doc-save"
+                data-testid="doc-start-create"
+                onClick={() => {
+                  setDocId(undefined);
+                  setBaseRevisionId(undefined);
+                  setDocText("# Notes du sas\n");
+                  setDocViewMode("edit");
+                  rememberCreateIntent(null);
+                }}
               >
-                Sauvegarder
-              </button>
-              <button className="btn" disabled={busy} onClick={reviseDoc} data-testid="doc-revise">
-                Réviser sur version de base
-              </button>
-              <button className="btn secondary" disabled={busy} onClick={compareLatestTwo}>
-                Comparer versions
+                Créer un document
               </button>
-              {createDocIntent && !docId ? (
-                <button
-                  className="btn secondary"
-                  disabled={busy}
-                  onClick={startNewCreateIntent}
-                  data-testid="doc-new-intent"
-                >
-                  Nouvelle intention de création
-                </button>
-              ) : null}
-            </div>
-            {createDocIntent && !docId ? (
-              <p className="text-xs muted" data-testid="create-intent-key">
-                Intention de création active · clé {createDocIntent.key}
-              </p>
-            ) : null}
-            {reviseIntent ? (
-              <p className="text-xs muted" data-testid="revise-intent-key">
-                Intention de révision active · clé {reviseIntent.key}
-              </p>
-            ) : null}
-            {inspected?.latestRevision ? (
-              <p className="text-xs muted">
-                Base inspectée: {baseRevisionId} · statut {inspected.latestRevision.status}
-              </p>
             ) : null}
-          </section>
-          <section className="panel p-4 space-y-3">
-            <h2 className="font-medium">Rendu Markdown sûr</h2>
-            <SafeMarkdown content={docText} />
-            {diffText ? (
-              <pre className="text-xs whitespace-pre-wrap panel p-3">{diffText}</pre>
-            ) : null}
-          </section>
+          </div>
+          <div className="space-y-3">
+            <DocumentInspector
+              title={docViewMode === "edit" ? (docId ? "Révision" : "Création") : "Inspection"}
+              uiState={docViewMode === "edit" ? "EDITING" : "READING"}
+              markdown={
+                docViewMode === "edit"
+                  ? null
+                  : inspected?.latestRevision?.contentMarkdown ?? (docs.length ? docText : null)
+              }
+              editing={docViewMode === "edit"}
+              draft={docText}
+              onDraft={setDocText}
+              busy={busy}
+              onStartRevise={
+                inspected?.latestRevision
+                  ? () => {
+                      setDocViewMode("edit");
+                      setDocText(inspected.latestRevision?.contentMarkdown ?? "");
+                    }
+                  : undefined
+              }
+              onSaveRevise={docId ? () => void reviseDoc() : undefined}
+              onCancel={() => {
+                setDocViewMode("read");
+                setDocText(inspected?.latestRevision?.contentMarkdown ?? "");
+              }}
+            >
+              {docViewMode === "edit" ? (
+                <div className="flex flex-wrap gap-2">
+                  <button
+                    type="button"
+                    className="btn"
+                    disabled={busy}
+                    onClick={() => void saveDoc()}
+                    data-testid="doc-save"
+                  >
+                    Sauvegarder
+                  </button>
+                  {createDocIntent && !docId ? (
+                    <button
+                      type="button"
+                      className="btn secondary"
+                      disabled={busy}
+                      onClick={startNewCreateIntent}
+                      data-testid="doc-new-intent"
+                    >
+                      Nouvelle intention de création
+                    </button>
+                  ) : null}
+                </div>
+              ) : null}
+              {status ? (
+                <p className="text-sm muted" data-testid="surface-status">
+                  {status}
+                </p>
+              ) : null}
+            </DocumentInspector>
+            <DocumentHistory
+              revisions={revRows}
+              activeRevisionId={baseRevisionId}
+              onCompareLatest={() => void compareLatestTwo()}
+              diffText={diffText}
+            />
+          </div>
         </div>
       ) : null}

       {surface === "journal" ? (
-        <div className="grid lg:grid-cols-2 gap-4">
-          <section className="panel p-4 space-y-3">
-            <h2 className="font-medium">Sujets</h2>
-            {(knowledge?.subjects ?? []).length === 0 ? (
-              <p className="text-sm muted">Aucun sujet capitalisé pour l&apos;instant.</p>
-            ) : (
-              knowledge!.subjects.map((s) => (
-                <div key={s.id} className="panel p-3 space-y-2">
-                  <div className="flex flex-wrap gap-2 items-center justify-between">
-                    <div>
-                      <div className="font-medium text-sm">{s.title}</div>
-                      <div className="text-xs muted">
-                        {s.id} · {s.status}
-                        {s.originatedFromSubjectId
-                          ? ` · filiation ${s.originatedFromSubjectId}`
-                          : ""}
-                      </div>
-                    </div>
-                    <div className="flex gap-2">
-                      <button
-                        type="button"
-                        className="btn secondary"
-                        onClick={() => {
-                          const t = window.prompt("Nouveau titre", s.title);
-                          if (t) void renameSubject(s.id, t);
-                        }}
-                      >
-                        Renommer
-                      </button>
-                      <button
-                        type="button"
-                        className="btn secondary"
-                        onClick={() => {
-                          setSplitSubjectId(s.id);
-                          setSplitTitle(`${s.title} (séparé)`);
-                          setSplitAcquis(
-                            (knowledge?.acquis ?? [])
-                              .filter((a) => a.subjectId === s.id && a.status === "CURRENT")
-                              .map((a) => a.id),
-                          );
-                        }}
-                      >
-                        Séparer…
-                      </button>
-                    </div>
-                  </div>
-                </div>
-              ))
-            )}
-            {splitSubjectId ? (
-              <div className="panel p-3 space-y-2" style={{ borderColor: "var(--accent)" }}>
+        <ProjectJournal
+          subjects={knowledge?.subjects ?? []}
+          acquis={knowledge?.acquis ?? []}
+          openPoints={knowledge?.openPoints ?? []}
+          onBackToThread={() => setSurface("travail")}
+          onRenameSubject={(id, title) => void renameSubject(id, title)}
+          splitSlot={
+            splitSubjectId ? (
+              <div className="fig-panel space-y-2" style={{ borderColor: "var(--accent)" }}>
                 <h3 className="text-sm font-medium">Séparer un Sujet</h3>
-                <p className="text-xs muted">
-                  Composition minimale sur surfaces existantes — filiation et points ouverts
-                  conservés. Confirmer ou annuler.
-                </p>
                 <input
                   className="input"
                   value={splitTitle}
@@ -790,7 +754,7 @@ export default function PreparationPage() {
                 <p className="text-xs muted">{splitAcquis.length} acquis à déplacer</p>
                 <div className="flex gap-2">
                   <button type="button" className="btn" onClick={() => void confirmSplit()}>
-                    Confirmer la séparation
+                    Confirmer
                   </button>
                   <button
                     type="button"
@@ -804,36 +768,9 @@ export default function PreparationPage() {
                   </button>
                 </div>
               </div>
-            ) : null}
-          </section>
-          <section className="space-y-4">
-            <div className="panel p-4 space-y-2">
-              <h2 className="font-medium">Acquis</h2>
-              {(knowledge?.acquis ?? [])
-                .filter((a) => a.status === "CURRENT")
-                .slice(0, 20)
-                .map((a) => (
-                  <div key={a.id} className="text-sm panel p-2">
-                    <div className="text-xs muted">
-                      {a.kind} · {a.id}
-                    </div>
-                    <div>{a.statement}</div>
-                  </div>
-                ))}
-            </div>
-            <div className="panel p-4 space-y-2">
-              <h2 className="font-medium">Points ouverts</h2>
-              {(knowledge?.openPoints ?? [])
-                .filter((o) => o.status === "OPEN")
-                .map((o) => (
-                  <div key={o.id} className="text-sm panel p-2">
-                    <div className="text-xs muted">{o.id}</div>
-                    <div>{o.statement}</div>
-                  </div>
-                ))}
-            </div>
-          </section>
-        </div>
+            ) : null
+          }
+        />
       ) : null}
     </div>
   );

```
### DIFF `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 3ee8af24..4cf3f2f6 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -2,9 +2,16 @@

 import { useEffect, useRef, useState } from "react";
 import { useParams, useRouter, useSearchParams } from "next/navigation";
-import { SafeMarkdown } from "@/components/SafeMarkdown";
 import { PilotagePanel } from "@/components/PilotagePanel";
 import { ProjectChrome } from "@/components/figma/ProjectChrome";
+import { NoraConversation } from "@/components/figma/NoraConversation";
+import { ProjectJournal } from "@/components/figma/ProjectJournal";
+import {
+  DocumentHistory,
+  DocumentInspector,
+  DocumentLibrary,
+  type RevisionRow,
+} from "@/components/figma/DocumentSurfaces";
 import {
   conversationalClientCommandKey,
   mayStartNewThreadAct,
@@ -96,6 +103,8 @@ export default function ProjectPage() {
   const [reviseDraft, setReviseDraft] = useState("");
   const [reviseMessage, setReviseMessage] = useState("");
   const [docMissing, setDocMissing] = useState("");
+  const [docHistory, setDocHistory] = useState<RevisionRow[]>([]);
+  const [docDiffText, setDocDiffText] = useState("");
   const [unresolvedPending, setUnresolvedPending] = useState<ThreadPendingTurn | null>(null);
   const messageTurnKeyRef = useRef<{ content: string; key: string } | null>(null);
   const reviseCorrelationRef = useRef<string | null>(null);
@@ -148,16 +157,47 @@ export default function ProjectPage() {
     }
   }

+  async function loadDocHistory(preparationIdValue: string, documentId: string) {
+    try {
+      const res = await fetch(
+        `/api/preparations/${preparationIdValue}/documents/${documentId}`,
+      );
+      if (!res.ok) {
+        setDocHistory([]);
+        return;
+      }
+      const j = await res.json();
+      const rows = (j.revisions ?? []) as Array<{
+        id: string;
+        revisionNumber: number;
+        status: string;
+        createdAt?: string;
+      }>;
+      setDocHistory(
+        rows.map((r) => ({
+          id: r.id,
+          revisionNumber: r.revisionNumber,
+          status: r.status,
+          createdAt: r.createdAt,
+        })),
+      );
+    } catch {
+      setDocHistory([]);
+    }
+  }
+
   function openDocumentReadOnly(doc: Doc, mode: "push" | "replace" = "push") {
     setInspect(doc);
     setDocMissing("");
     setDocUi("READING");
     setReviseDraft(doc.latestRevision?.contentMarkdown ?? "");
     setReviseMessage("");
+    setDocDiffText("");
     reviseCorrelationRef.current = null;
     reviseBaseIdRef.current = doc.latestRevision?.id ?? null;
     setSurface("document");
     syncSurfaceUrl("document", doc.document.id, mode);
+    if (preparationId) void loadDocHistory(preparationId, doc.document.id);
   }

   function applyUrlDocumentState(docs: Doc[], qSurface: Surface | null, qDocId: string | null) {
@@ -678,170 +718,94 @@ export default function ProjectPage() {
       meta={meta}
       onSelectSurface={selectSurface}
     >
-      {noraActivity === "preparing" ? (
-        <div className="fig-alert" role="status">
-          Nora prépare une réponse…
-        </div>
-      ) : null}
-
       {surface === "travail" ? (
-        <div
-          className="fig-workspace fig-nora-responsive"
-          data-figma-frame={
-            messages.length === 0
-              ? "161:216"
-              : messages.length <= 2
-                ? "161:288"
-                : "94:214"
+        <NoraConversation
+          messages={messages}
+          draft={draft}
+          busy={busy || !preparationId}
+          unresolvedPending={Boolean(unresolvedPending)}
+          activity={noraActivity}
+          status={[status, pilotageStatus, decisionSummary].filter(Boolean).join(" · ")}
+          onDraft={setDraft}
+          onSend={() => void sendMessage()}
+          onReconcile={
+            unresolvedPending
+              ? () => void reconcilePending(unresolvedPending)
+              : undefined
           }
-          data-figma-mobile-frames="282:468,282:492"
-        >
-          <section className="space-y-3">
-            <div className="fig-panel space-y-3">
-              <p className="fig-kicker">Travail / projet</p>
-              <div className="flex flex-wrap gap-2">
-                <span className="fig-tag fig-tag-accent">PILOTE</span>
-                <span className="fig-tag fig-tag-muted">Fil unique</span>
-                {unresolvedPending ? (
-                  <span className="fig-tag fig-tag-warn">Interruption / reprise</span>
-                ) : null}
+          aside={
+            <>
+              <div className="fig-panel space-y-2">
+                <h2 className="fig-panel-title">En bref</h2>
+                <p className="text-sm muted">
+                  Un seul fil visible. Mémoire D4 récupérable au-delà des six derniers messages.
+                </p>
+                <p className="text-xs muted">
+                  Acquis: {knowledge?.acquis.filter((a) => a.status === "CURRENT").length ?? 0} ·
+                  Ouverts: {knowledge?.openPoints.filter((o) => o.status === "OPEN").length ?? 0}
+                </p>
               </div>
-              {messages.length === 0 ? (
-                <div className="fig-msg fig-msg-nora text-sm muted">
-                  Première conversation — écrivez pour démarrer le fil Nora du projet.
-                </div>
-              ) : null}
-              {messages.map((m) => (
-                <article
-                  key={m.id}
-                  className={`fig-msg ${m.role === "assistant" ? "fig-msg-nora" : "fig-msg-pilot"}`}
-                >
-                  <div className="text-xs muted mb-1">
-                    {m.role === "assistant" ? "NORA" : "PILOTE"} · {m.status}
-                  </div>
-                  {m.role === "assistant" ? (
-                    <SafeMarkdown content={m.content} />
-                  ) : (
-                    <div className="whitespace-pre-wrap text-sm">{m.content}</div>
-                  )}
-                </article>
-              ))}
-              <div className="fig-composer">
-                <textarea
-                  className="textarea"
-                  value={draft}
-                  onChange={(e) => setDraft(e.target.value)}
-                  placeholder="Écrire à Nora…"
-                  aria-label="Message à Nora"
-                  data-testid="thread-draft"
-                />
-                <div className="flex flex-wrap gap-2">
-                  <button
-                    className="btn"
-                    disabled={busy || !preparationId}
-                    onClick={sendMessage}
-                    data-testid="thread-send"
-                  >
-                    Envoyer
-                  </button>
-                  <span className="text-xs muted self-center">Joindre un élément · non requis</span>
-                </div>
-                {unresolvedPending ? (
-                  <div className="space-y-1" data-testid="thread-pending-banner">
-                    <p className="text-xs muted">
-                      Tentative non résolue · {unresolvedPending.clientCommandKey.slice(0, 32)}…
+              <div className="fig-panel space-y-2">
+                <h2 className="fig-panel-title">Objets du projet</h2>
+                <ul className="text-sm muted space-y-1">
+                  <li>Documents Nora · {documents.length}</li>
+                  <li>Réalisations et preuves · via Pilotage</li>
+                  <li>
+                    Sources Git · <span className="fig-tag fig-tag-muted">non disponible</span>
+                  </li>
+                </ul>
+              </div>
+              <div className="fig-panel space-y-2" style={{ background: "rgba(101,111,225,0.08)" }}>
+                <h2 className="fig-panel-title">Points à clarifier</h2>
+                {(knowledge?.openPoints ?? [])
+                  .filter((o) => o.status === "OPEN")
+                  .slice(0, 5)
+                  .map((o) => (
+                    <p key={o.id} className="text-sm">
+                      {o.statement}
                     </p>
-                    <button
-                      type="button"
-                      className="btn secondary"
-                      disabled={busy}
-                      data-testid="thread-reconcile-pending"
-                      onClick={() => void reconcilePending(unresolvedPending)}
-                    >
-                      Réconcilier la tentative en cours
-                    </button>
-                  </div>
-                ) : null}
-                {status ? (
-                  <p className="text-xs muted" data-testid="thread-nora-status">
-                    {status}
-                  </p>
-                ) : null}
-                {pilotageStatus ? (
-                  <p className="text-xs" data-testid="thread-pilotage-status" role="status">
-                    {pilotageStatus}
-                  </p>
-                ) : null}
-                {decisionSummary ? (
-                  <p className="text-xs muted" data-testid="thread-decision-summary">
-                    {decisionSummary}
-                  </p>
+                  ))}
+                {(knowledge?.openPoints ?? []).filter((o) => o.status === "OPEN").length === 0 ? (
+                  <p className="text-sm muted">Aucun point ouvert capitalisé.</p>
                 ) : null}
               </div>
-            </div>
-          </section>
-          <aside className="space-y-3">
-            <div className="fig-panel space-y-2">
-              <h2 className="fig-panel-title">En bref</h2>
-              <p className="text-sm muted">
-                Un seul fil visible. Mémoire D4 récupérable au-delà des six derniers messages.
-              </p>
-              <p className="text-xs muted">
-                Acquis: {knowledge?.acquis.filter((a) => a.status === "CURRENT").length ?? 0} ·
-                Ouverts: {knowledge?.openPoints.filter((o) => o.status === "OPEN").length ?? 0}
-              </p>
-            </div>
-            <div className="fig-panel space-y-2">
-              <h2 className="fig-panel-title">Objets du projet</h2>
-              <ul className="text-sm muted space-y-1">
-                <li>Documents Nora · {documents.length}</li>
-                <li>Réalisations et preuves · via Pilotage</li>
-                <li>
-                  Sources Git autorisées · <span className="fig-tag fig-tag-muted">non disponible</span>
-                </li>
-              </ul>
-            </div>
-            <div className="fig-panel space-y-2" style={{ background: "rgba(101,111,225,0.08)" }}>
-              <h2 className="fig-panel-title">Points à clarifier</h2>
-              {(knowledge?.openPoints ?? [])
-                .filter((o) => o.status === "OPEN")
-                .slice(0, 5)
-                .map((o) => (
-                  <p key={o.id} className="text-sm">
-                    {o.statement}
-                  </p>
-                ))}
-              {(knowledge?.openPoints ?? []).filter((o) => o.status === "OPEN").length === 0 ? (
-                <p className="text-sm muted">Aucun point ouvert capitalisé.</p>
-              ) : null}
-            </div>
-          </aside>
-        </div>
+            </>
+          }
+        />
       ) : null}

       {surface === "pilotage" ? (
-        <div className="space-y-4" data-figma-frame="125:33">
+        <div className="space-y-4" data-figma-frame="125:33" data-testid="project-trajectory">
+          <div className="fig-section-head">
+            <div>
+              <p className="fig-kicker">Pilotage</p>
+              <h2 className="fig-section-title">Trajectoire, cycle et décisions</h2>
+              <p className="fig-hero-sub !mt-1">
+                Affichage D5/D6 existant — sans cycle fictif, sans commande autoritaire depuis Nora.
+              </p>
+            </div>
+          </div>
           <div className="fig-stat-grid">
             <div className="fig-stat">
               <div className="fig-stat-label">Cycle</div>
-              <div className="fig-stat-value" style={{ fontSize: "1.2rem", marginTop: 14 }}>
-                Affichage D5
+              <div className="fig-stat-value" style={{ fontSize: "1.15rem", marginTop: 14 }}>
+                Sans / actif
               </div>
-              <div className="fig-stat-hint">Sans nouvelle autorité</div>
+              <div className="fig-stat-hint">Projection service projet</div>
             </div>
             <div className="fig-stat">
-              <div className="fig-stat-label">Décisions</div>
-              <div className="fig-stat-value" style={{ fontSize: "1.2rem", marginTop: 14 }}>
-                Journal D6
+              <div className="fig-stat-label">Décisions D6</div>
+              <div className="fig-stat-value" style={{ fontSize: "1.15rem", marginTop: 14 }}>
+                HumanDecision
               </div>
-              <div className="fig-stat-hint">HumanDecision existantes</div>
+              <div className="fig-stat-hint">Pas de mutation à l&apos;affichage</div>
             </div>
             <div className="fig-stat">
               <div className="fig-stat-label">CKI / méthode</div>
-              <div className="fig-stat-value" style={{ fontSize: "1.2rem", marginTop: 14 }}>
-                Lecture seule
+              <div className="fig-stat-value" style={{ fontSize: "1.15rem", marginTop: 14 }}>
+                Guidance
               </div>
-              <div className="fig-stat-hint">Services projet</div>
+              <div className="fig-stat-hint">Disponibilité réelle du service</div>
             </div>
           </div>
           <div className="fig-panel" data-figma-frame="127:106">
@@ -852,211 +816,131 @@ export default function ProjectPage() {

       {surface === "document" ? (
         <div className="fig-workspace-3" data-figma-frame="94:370">
-          <section className="space-y-2" data-figma-frame="160:175">
-            <div className="fig-section-head">
-              <h2 className="fig-section-title">Bibliothèque</h2>
-              <span className="fig-tag fig-tag-muted">{documents.length} doc(s)</span>
-            </div>
-            {documents.map((d) => (
-              <button
-                key={d.document.id}
-                type="button"
-                className={`fig-card !min-h-0 text-left w-full ${
-                  inspect?.document.id === d.document.id ? "ring-1 ring-[var(--accent)]" : ""
-                }`}
-                onClick={() => openDocumentReadOnly(d)}
-                data-testid={`doc-open-${d.document.id}`}
-              >
-                <div className="fig-card-top">
-                  <div className="fig-card-title text-sm">{d.document.title}</div>
-                  <span className="fig-tag fig-tag-muted">
-                    v{d.latestRevision?.revisionNumber ?? "?"}
-                  </span>
-                </div>
-                <div className="fig-card-desc line-clamp-3">
-                  {(d.latestRevision?.contentMarkdown ?? "").slice(0, 180)}
-                </div>
-                <div className="fig-card-meta">{d.latestRevision?.status ?? "—"}</div>
-              </button>
-            ))}
-            {documents.length === 0 ? (
-              <p className="text-sm muted">Aucun document D4 pour ce projet.</p>
-            ) : null}
-          </section>
-          <section
-            className="fig-panel space-y-3"
-            data-testid="document-inspect"
-            data-figma-frame={
-              docUi === "CONFLICT" ? "160:391" : inspect ? "97:359" : "241:385"
-            }
-          >
-            <div className="flex flex-wrap gap-2 items-center">
-              <h2 className="fig-panel-title !mb-0">
-                {docUi === "EDITING" ||
+          <DocumentLibrary
+            documents={documents.map((d) => ({
+              document: { ...d.document, projectId: params.projectId },
+              latestRevision: d.latestRevision ?? null,
+            }))}
+            selectedId={inspect?.document.id ?? null}
+            onSelect={(d) => {
+              const match = documents.find((x) => x.document.id === d.document.id);
+              if (match) openDocumentReadOnly(match);
+            }}
+          />
+          <div className="space-y-3">
+            <DocumentInspector
+              frameId={docUi === "CONFLICT" ? "160:391" : "97:359"}
+              title={
+                docUi === "EDITING" ||
                 docUi === "SAVING" ||
                 docUi === "CONFLICT" ||
                 docUi === "UNKNOWN"
                   ? "Révision"
-                  : "Inspection"}
-              </h2>
-              <span className="fig-tag fig-tag-accent" data-testid="document-ui-state">
-                {docUi}
-              </span>
-              {inspect?.latestRevision ? (
-                <span className="fig-tag fig-tag-muted" data-figma-frame="241:385">
-                  Historique · v{inspect.latestRevision.revisionNumber}
-                </span>
-              ) : null}
-            </div>
-            {docMissing ? (
-              <p className="text-sm" data-testid="document-missing" role="status">
-                {docMissing}
-              </p>
-            ) : null}
-            {inspect?.latestRevision ? (
-              <>
-                <div className="flex flex-wrap gap-2">
-                  <span className="fig-tag fig-tag-muted">Markdown</span>
-                  <span className="fig-tag fig-tag-muted">
-                    v{inspect.latestRevision.revisionNumber}
-                  </span>
-                  <span className="fig-tag fig-tag-warn">{inspect.latestRevision.status}</span>
-                </div>
-                <div className="fig-alert">
-                  Document retrouvé sous ownership projet/préparation. Aucune publication Git
-                  implicite.
-                </div>
-                <p className="text-xs muted">{inspect.document.id}</p>
-                {docUi === "EDITING" ||
+                  : "Inspection"
+              }
+              uiState={docUi}
+              missing={docMissing || null}
+              markdown={
+                docUi === "READING" || docUi === "FAILED"
+                  ? inspect?.latestRevision?.contentMarkdown ?? null
+                  : null
+              }
+              editing={
+                docUi === "EDITING" ||
                 docUi === "SAVING" ||
                 docUi === "CONFLICT" ||
                 docUi === "UNKNOWN" ||
-                docUi === "FAILED" ? (
-                  <>
-                    <textarea
-                      className="textarea"
-                      value={reviseDraft}
-                      onChange={(e) => setReviseDraft(e.target.value)}
-                      disabled={docUi === "SAVING"}
-                      aria-label="Contenu markdown à réviser"
-                      data-testid="document-revise-draft"
-                    />
-                    <div className="flex flex-wrap gap-2">
-                      <button
-                        type="button"
-                        className="btn"
-                        disabled={docUi === "SAVING"}
-                        data-testid="document-revise-save"
-                        onClick={() => void saveRevision()}
-                      >
-                        {docUi === "SAVING"
-                          ? "Enregistrement…"
-                          : docUi === "UNKNOWN"
-                            ? "Réessayer (même clé)"
-                            : "Demander une révision"}
-                      </button>
-                      {docUi === "CONFLICT" ? (
-                        <button
-                          type="button"
-                          className="btn secondary"
-                          data-testid="document-conflict-rebase"
-                          onClick={acceptConflictRebase}
-                        >
-                          Adopter la nouvelle base
-                        </button>
-                      ) : null}
-                      <button
-                        type="button"
-                        className="btn secondary"
-                        disabled={docUi === "SAVING"}
-                        onClick={() => {
-                          setDocUi("READING");
-                          setReviseDraft(inspect.latestRevision?.contentMarkdown ?? "");
-                          setReviseMessage("");
-                          reviseCorrelationRef.current = null;
-                          reviseBaseIdRef.current = inspect.latestRevision?.id ?? null;
-                        }}
-                      >
-                        Annuler
-                      </button>
-                    </div>
-                  </>
-                ) : (
-                  <>
-                    <SafeMarkdown content={inspect.latestRevision.contentMarkdown} />
-                    <div className="flex flex-wrap gap-2">
-                      <button
-                        type="button"
-                        className="btn"
-                        data-testid="document-revise-start"
-                        onClick={() => {
-                          setDocUi("EDITING");
-                          setReviseDraft(inspect.latestRevision?.contentMarkdown ?? "");
-                          reviseCorrelationRef.current = null;
-                          reviseBaseIdRef.current = inspect.latestRevision?.id ?? null;
-                        }}
-                      >
-                        Demander une révision
-                      </button>
-                      <button
-                        type="button"
-                        className="btn secondary"
-                        onClick={() => {
-                          setInspect(null);
-                          setDocUi("READING");
-                          selectSurface("travail");
-                        }}
-                      >
-                        Retour au fil
-                      </button>
-                    </div>
-                  </>
-                )}
-                {reviseMessage ? (
-                  <p className="text-xs muted" data-testid="document-revise-message">
-                    {reviseMessage}
-                  </p>
-                ) : null}
-              </>
-            ) : !docMissing ? (
-              <p className="text-sm muted">Sélectionner un document pour inspecter.</p>
-            ) : null}
-          </section>
+                docUi === "FAILED"
+              }
+              draft={reviseDraft}
+              onDraft={setReviseDraft}
+              busy={docUi === "SAVING"}
+              onStartRevise={
+                inspect?.latestRevision
+                  ? () => {
+                      setDocUi("EDITING");
+                      setReviseDraft(inspect.latestRevision?.contentMarkdown ?? "");
+                      reviseCorrelationRef.current = null;
+                      reviseBaseIdRef.current = inspect.latestRevision?.id ?? null;
+                    }
+                  : undefined
+              }
+              onSaveRevise={() => void saveRevision()}
+              onConflictRebase={docUi === "CONFLICT" ? acceptConflictRebase : undefined}
+              onCancel={() => {
+                setDocUi("READING");
+                setReviseDraft(inspect?.latestRevision?.contentMarkdown ?? "");
+                setReviseMessage("");
+                reviseCorrelationRef.current = null;
+                reviseBaseIdRef.current = inspect?.latestRevision?.id ?? null;
+              }}
+              reviseMessage={reviseMessage}
+            >
+              {inspect?.latestRevision && docUi === "READING" ? (
+                <button
+                  type="button"
+                  className="btn secondary"
+                  onClick={() => {
+                    setInspect(null);
+                    setDocUi("READING");
+                    selectSurface("travail");
+                  }}
+                >
+                  Retour au fil
+                </button>
+              ) : null}
+            </DocumentInspector>
+            <DocumentHistory
+              revisions={docHistory}
+              activeRevisionId={inspect?.latestRevision?.id}
+              onCompareLatest={
+                preparationId && inspect
+                  ? () => {
+                      void (async () => {
+                        const listRes = await fetch(
+                          `/api/preparations/${preparationId}/documents/${inspect.document.id}`,
+                        );
+                        const list = await listRes.json();
+                        const revs = (list.revisions ?? []).filter(
+                          (r: { status: string }) => r.status === "AVAILABLE",
+                        );
+                        if (revs.length < 2) {
+                          setDocDiffText("Comparaison: moins de deux versions AVAILABLE");
+                          return;
+                        }
+                        const left = revs[revs.length - 2];
+                        const right = revs[revs.length - 1];
+                        const cmpRes = await fetch(
+                          `/api/preparations/${preparationId}/documents/${inspect.document.id}?left=${left.id}&right=${right.id}`,
+                        );
+                        const cmp = await cmpRes.json();
+                        if (cmp.status === "AVAILABLE" && !cmp.diff?.degraded) {
+                          setDocDiffText(
+                            `v${cmp.left.revisionNumber} → v${cmp.right.revisionNumber}\n` +
+                              `+ ${cmp.diff.added.length} / - ${cmp.diff.removed.length}`,
+                          );
+                        } else {
+                          setDocDiffText(
+                            `Diff ${cmp.status}: ${cmp.reason ?? cmp.diff?.reason ?? ""}`,
+                          );
+                        }
+                      })();
+                    }
+                  : undefined
+              }
+              diffText={docDiffText}
+            />
+          </div>
         </div>
       ) : null}

       {surface === "journal" ? (
-        <div className="fig-two-col" data-figma-frame="94:515">
-          <section className="fig-panel space-y-2">
-            <h2 className="fig-panel-title">Sujets</h2>
-            {(knowledge?.subjects ?? []).map((s) => (
-              <div key={s.id} className="fig-msg text-sm">
-                <div className="font-medium">{s.title}</div>
-                <div className="text-xs muted">
-                  {s.status}
-                  {s.originatedFromSubjectId ? ` · de ${s.originatedFromSubjectId}` : ""}
-                </div>
-              </div>
-            ))}
-            {(knowledge?.subjects ?? []).length === 0 ? (
-              <p className="text-sm muted">Aucun sujet capitalisé.</p>
-            ) : null}
-          </section>
-          <section className="fig-panel space-y-2" data-figma-frame="129:72">
-            <h2 className="fig-panel-title">Acquis courants</h2>
-            {(knowledge?.acquis ?? [])
-              .filter((a) => a.status === "CURRENT")
-              .map((a) => (
-                <div key={a.id} className="text-sm fig-msg">
-                  <span className="fig-tag fig-tag-muted mr-2">{a.kind}</span>
-                  {a.statement}
-                </div>
-              ))}
-            <p className="text-xs muted pt-2">
-              Les décisions D6 opposables sont dans Pilotage, pas ici.
-            </p>
-          </section>
-        </div>
+        <ProjectJournal
+          subjects={knowledge?.subjects ?? []}
+          acquis={(knowledge?.acquis ?? []).map((a) => ({ ...a, subjectId: null }))}
+          openPoints={(knowledge?.openPoints ?? []).map((o) => ({ ...o, subjectId: null }))}
+          onBackToThread={() => selectSurface("travail")}
+        />
       ) : null}

       <a className="btn secondary inline-block" href="/portfolio">
@@ -1065,3 +949,4 @@ export default function ProjectPage() {
     </ProjectChrome>
   );
 }
+

```
### DIFF `projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts b/projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts
index fd1cb7a5..e3f58393 100644
--- a/projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts
@@ -18,22 +18,28 @@ test("G4 B1–B4: rail surfaces, resume without POST, deep-link, revise AVAILABL
   const prepId = prepUrl.split("/preparations/")[1]?.split(/[?#]/)[0];
   expect(prepId).toBeTruthy();

-  await page.getByPlaceholder("Écrire à Nora…").fill("G4 correctifs B1-B4");
-  await page.getByRole("button", { name: "Envoyer" }).click();
+  await page.getByTestId("prep-draft").fill("G4 correctifs B1-B4");
+  await page.getByTestId("prep-send").click();
   await expect(page.getByText("openai-agents-sdk-live")).toHaveCount(0);
   await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
     timeout: 30000,
   });

-  await page.getByPlaceholder("Nom du projet").fill("Projet G4 B");
-  await page.getByPlaceholder("Résumé inspecté").fill("résumé g4");
-  await page.getByRole("button", { name: "Enregistrer l'aperçu" }).click();
-  await page.getByRole("button", { name: "Document", exact: true }).click();
-  await page.locator("textarea").first().fill("# Doc G4\nligne");
+  // Chat-first: no permanent nom/résumé form — constitute then inspect
+  await expect(page.getByPlaceholder("Nom du projet")).toHaveCount(0);
+  await page.getByTestId("prep-constitute").click();
+  await page.getByTestId("prep-proposal-name").fill("Projet G4 B");
+  await page.getByTestId("prep-proposal-summary").fill("résumé g4");
+  await page.getByTestId("prep-proposal-save").click();
+  await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
+
+  await page.getByRole("button", { name: "Documents", exact: true }).click();
+  await page.getByTestId("doc-start-create").click();
+  await page.getByTestId("document-revise-draft").fill("# Doc G4\nligne");
   await page.getByTestId("doc-save").click();
   await expect(page.getByTestId("surface-status")).toContainText(/AVAILABLE/i, { timeout: 10000 });
-  await page.getByRole("button", { name: "Travail" }).click();
-  await page.getByRole("button", { name: "Créer le projet" }).click();
+  await page.getByRole("button", { name: "Discussion", exact: true }).click();
+  await page.getByTestId("prep-create-project").click();
   await page.waitForURL("**/projects/**", { timeout: 15000 });
   const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
   expect(projectId).toBeTruthy();

```

## 5. QA

- tsc PASS / build PASS / unit 123 / integration 144
- Playwright (lane E2E isolée) : `g4-chat-first-sas` PASS + `g4-b1-b4-correctifs` PASS
- F2/G5 NOT RUN

### e2e tail
```
plications" already exists, skipping
[WebServer] NOTICE:  relation "method_applications_current_uidx" already exists, skipping
[WebServer] NOTICE:  relation "method_applications_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "governance_restrictions" already exists, skipping
[WebServer] NOTICE:  relation "governance_restrictions_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "business_commands" already exists, skipping
[WebServer] NOTICE:  relation "business_commands_client_key_uidx" already exists, skipping
[WebServer] NOTICE:  relation "business_commands_human_intent_uidx" already exists, skipping
[WebServer] NOTICE:  relation "business_commands_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "business_command_effects" already exists, skipping
[WebServer] NOTICE:  relation "business_command_effects_command_ordinal_uidx" already exists, skipping
[WebServer] NOTICE:  relation "business_command_effects_command_idx" already exists, skipping

Running 2 tests using 1 worker

(node:59014) Warning: The 'NO_COLOR' env is ignored due to the 'FORCE_COLOR' env being set.
(Use `node --trace-warnings ...` to show where the warning was created)
  ✓  1 tests/e2e/g4-b1-b4-correctifs.spec.ts:7:5 › G4 B1–B4: rail surfaces, resume without POST, deep-link, revise AVAILABLE (14.2s)
  ✓  2 tests/e2e/g4-chat-first-sas.spec.ts:7:5 › G4 chat-first: discuss → constitute proposal → create; journal empty structure (3.1s)

  2 passed (22.1s)

```

### unit tail
```
ARY"}}
 ✓ tests/unit/ml2-cognition-fixture.test.ts (2 tests) 3ms
 ✓ tests/unit/next-dist-dir.test.ts (2 tests) 3ms
 ✓ tests/unit/studio-rail.test.ts (6 tests) 2ms
 ✓ tests/unit/cognitive-policy.test.ts (4 tests) 2ms
 ✓ tests/unit/e2e-pg-gate.test.ts (4 tests) 2ms
 ✓ tests/unit/portfolio-cursor.test.ts (5 tests) 2ms
 ✓ tests/unit/dev-login-host.test.ts (6 tests) 1ms
 ✓ tests/unit/ml3-authority.test.ts (5 tests) 1ms
 ✓ tests/unit/http-errors.test.ts (3 tests) 1ms
 ✓ tests/unit/safe-markdown.test.ts (2 tests) 1ms
 ✓ tests/unit/fingerprint.test.ts (2 tests) 1ms
 ✓ tests/unit/non-effects.test.ts (1 test) 1ms

 Test Files  19 passed (19)
      Tests  123 passed (123)
   Start at  10:51:12
   Duration  3.45s (transform 161ms, setup 0ms, collect 1.80s, tests 87ms, environment 1ms, prepare 369ms)


```

## 6. DEV

| | |
|---|---|
| URL | http://127.0.0.1:3100 |
| Login | Pilote A (DEV) FAKE |
| SHA | `29535d07e9c14077b422020e25fbf54a98affe25` |

Parcours Morris : login → Nouvelle préparation → discuter → Constituer proposition → Créer projet → Documents/Journal/Pilotage. Portefeuille inchangé en macro.

## 7. Commit

```
commit 29535d07e9c14077b422020e25fbf54a98affe25
Author:     Morris Cleland <morris@MacBook-Air.local>
AuthorDate: Sun Nov 8 10:56:11 2026 +0100
Commit:     Morris Cleland <morris@MacBook-Air.local>
CommitDate: Sun Nov 8 10:56:11 2026 +0100

    feat(next): rebuild G4 sas as chat-first proposal flow with real workspaces

    Replace the permanent name/summary form with conversation-led inspection and explicit D2 create, and recompose Nora, documents (incl. history), journal empty structure, and pilotage layout for Morris visual review.

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../as-built-g4-chat-first-reprise-2026-11-08.md   |  39 ++
 .../src/app/preparations/[preparationId]/page.tsx  | 471 ++++++++---------
 .../web/src/app/projects/[projectId]/page.tsx      | 563 ++++++++-------------
 .../web/src/components/figma/DocumentSurfaces.tsx  | 248 +++++++++
 .../web/src/components/figma/NoraConversation.tsx  | 120 +++++
 .../components/figma/PreparationConversation.tsx   |  97 ++++
 .../src/components/figma/PreparationProposal.tsx   | 215 ++++++++
 .../web/src/components/figma/ProjectJournal.tsx    | 164 ++++++
 .../web/tests/e2e/g4-b1-b4-correctifs.spec.ts      |  24 +-
 .../web/tests/e2e/g4-chat-first-sas.spec.ts        |  44 ++
 10 files changed, 1370 insertions(+), 615 deletions(-)

```

## 8. Verdict

**G4 IMPLEMENTATION CANDIDATE — DEV READY FOR MORRIS VISUAL VERDICT**
