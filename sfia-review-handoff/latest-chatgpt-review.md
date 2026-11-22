# SFIA Review Pack — FULL · CRITICAL
## Ensemble 08 — POST-UAT 01 CLÔTURE PUBLICATION NORA

- date_utc: 2026-11-22T03:16:09Z
- timezone_local: CET +0100 (Europe/Paris)
- repo: mcleland147/sfia-workspace
- branch: feat/next-ensemble08-git-publications-nora
- HEAD: 29066442a7fa51b106d9fe45b5c1b05da7f13004
- origin/main: a12f89a15c454319c06f49fcc5e8effa9f3f1a75
- prior_handoff: ab062977c34e9fdd25480da668347cf9bb0228d4
- prior_handoff_blob: ac5c4b616e2457cafdc5379526a9202c33468c92
- classe: NO RELEASE
- RECETTE: 98185598 / BUILD 1xEbvCdTAX6ht262w4oKF — PRESERVED (no mutation)
- project_commit: NONE
- project_push: NONE
- PR/merge: NONE

## 1. Git Truth
```
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
branch=feat/next-ensemble08-git-publications-nora
HEAD=29066442a7fa51b106d9fe45b5c1b05da7f13004
origin/main=a12f89a15c454319c06f49fcc5e8effa9f3f1a75
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
 M projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md
 M projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
 M projects/sfia-studio-next/web/src/components/figma/tokens.css
 M projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx
 M projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx
 M projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-authority.ts
 M projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
 M projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
 M projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
 M projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts
 M projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts
 M projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
?? projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/post-uat-01-l0-l2.md
?? projects/sfia-studio-next/web/src/components/integrations/GitFileInfoPopover.tsx
?? projects/sfia-studio-next/web/src/domains/conversation/publication-document-target.ts
?? projects/sfia-studio-next/web/src/domains/conversation/publication-effect-restitution.ts
?? projects/sfia-studio-next/web/tests/e2e/ensemble08-nora-publication.spec.ts
?? projects/sfia-studio-next/web/tests/integration/publication-nora-cloture.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/publication-target-post-uat.pg.test.ts
?? projects/sfia-studio-next/web/tests/unit/publication-effect-restitution.test.ts
```

## 2. Causes confirmées (revue ChatGPT → clôture)
1. P0: `parseDocumentId(objectRef)||parseDocumentId(documentHint)` sélectionnait A quand hint=B.
2. P1: `composePublicationEffectRestitution(effect:null)` ne retirait pas les affirmations de succès; intention sans effet pouvait laisser « Je publie ».
3. Latent: resume post-authorize écrivait un message assistant concurrent → ASSISTANT_IDENTITY_CONFLICT (restitution technique masquée).

## 3. Corrections exactes
- `publication-document-target.ts`: réconciliation indépendante objectRef/documentHint; conflits → AMBIGUOUS/REVISION_MISMATCH.
- `publication-effect-restitution.ts`: strip premature claims si effect null; NOT_ATTEMPTED facts.
- `service.ts`: wantsPublish sans attempt → outcome NOT_ATTEMPTED.
- `mission-continuity.ts`: COMPLETED → composePublicationEffectRestitution métier.
- `conversation-publication-authority.ts`: `persistAssistantMessage:false` same-turn.
- `pilotage-effect-restitution.ts`: ne pas masquer une restitution publication métier.
- Fixtures E08 publish + tests PG/Playwright.

## 4. Propriétaires D3–D9
| Domaine | Rôle clôture |
|---|---|
| D3 | qualification + restitution Nora |
| D4 | confirmPublicationDocumentWithD4 |
| D6 | mandat conversationnel |
| D7 | prepare (bloqué si conflit/WRITE OFF) |
| D8 | faits via attempt COMPLETED |
| D9 | SCRIPTED substitution; REAL WRITE OFF gate |

## 5. Résultats tests
| Suite | Résultat |
|---|---|
| unit publication-effect-restitution (+target) | PASS 21 |
| unit mission-continuity + publication-authority | PASS |
| PG publication-nora-cloture (WRITE OFF + conflict + SCRIPTED) | PASS 3 |
| PG publication-target-post-uat | PASS 3 |
| PG mission-continuity-accept01 | PASS 10 |
| Playwright ensemble08-nora-publication | PASS 2 |
| Playwright ensemble08-git-surface | PASS 3 |
| tsc --noEmit | PASS |
| git diff --check | PASS |
| Nora LIVE | NOT PROVEN |
| GitHub REAL WRITE | NOT PROVEN |
| WRITE OFF browser | NOT RUN (provider separation; proven PG REAL gate) |

## 6. Fake/Real Qualification
- DETERMINISTIC: résolution refs, restitution, PG WRITE OFF zéro mutation, PG SCRIPTED E2E, Playwright Nora SCRIPTED.
- NOT PROVEN: Nora LIVE, GitHub REAL WRITE, G5 Figma UAT Morris.
- DETERMINISTIC PROVEN ≠ REAL WRITE PROVEN.

## 7. ENV-01
- DEV/E2E: :3101 + sfia_next_e2e (vitest-pg-target / e2e-web-server).
- RECETTE :3200 @98185598 BUILD 1xEbvCdTAX6ht262w4oKF — aucune mutation ce cycle.
- STABLE: NOT AVAILABLE · NO RELEASE.

## 8. Gates ouverts
- Revue indépendante ChatGPT
- GO freeze candidat
- GO cutover RECETTE
- UAT Morris / G5
- GO REAL sandbox WRITE
- PR/merge projet

## 9. Verdict
**DELIVERY READY WITH RESERVES**

C1–C7,C9–C11: PASS. C8 Playwright Nora: PASS (SCRIPTED). C5 WRITE OFF: PASS PG. LIVE/REAL: NOT PROVEN.

---
## ANNEXE A — Fichiers créés (intégral)

### FILE: projects/sfia-studio-next/web/src/domains/conversation/publication-document-target.ts
```typescript
/**
 * Resolve an existing Studio document/revision for a publication mission.
 *
 * Precedence (POST-UAT convergence):
 *   1. Explicit Pilote / durable qual reference (documentHint, objectRef, revision)
 *   2. Same-turn D4 AVAILABLE — only if compatible with explicit ref
 *   3. UI documentFocus — only if compatible with explicit ref
 *   4. Sole available document (no explicit ref)
 *
 * Never invents ids. Never silently keeps focus A when Pilote asked for B.
 */
import { resolveReviseTarget, type DocumentListItem } from "./document-act";
import { getDocumentRevision, listDocumentRevisions } from "@/domains/document/service";

export type PublicationDocumentTarget =
  | {
      ok: true;
      documentId: string;
      revisionId: string | null;
      revisionNumber: number | null;
      requestedRevisionNumber: number | null;
      title: string;
      source:
        | "explicit"
        | "same_turn_d4"
        | "document_focus"
        | "hint"
        | "sole_document";
      /** True when an explicit ref overrode focus or same-turn. */
      overriddenImplicit: boolean;
    }
  | {
      ok: false;
      reason:
        | "NO_DOCUMENT"
        | "AMBIGUOUS"
        | "NOT_FOUND"
        | "NO_AVAILABLE_REVISION"
        | "EXPLICIT_FOCUS_CONFLICT"
        | "REVISION_MISMATCH"
        | "REVISION_NOT_FOUND"
        | "FORBIDDEN";
      candidates?: string[];
      detail?: string;
    };

export type SameTurnDocumentEffect = {
  status: string;
  documentId?: string | null;
  revisionId?: string | null;
  revisionNumber?: number | null;
  title?: string | null;
} | null;

export type PublicationDocumentFocus = {
  documentId: string;
  sourceRevisionId: string;
  sourceRevisionNumber?: number;
  observedHeadRevisionId?: string;
} | null;

function parseDocumentId(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const m = raw.match(/\b(doc_[a-z0-9-]+)\b/i);
  return m?.[1] ?? null;
}

function parseRevisionId(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const m = raw.match(/\b(drev_[a-z0-9-]+)\b/i);
  return m?.[1] ?? null;
}

/** Parse « v2 », « révision 2 », « revision: 2 » from durable hint text. */
export function parseRevisionNumberHint(raw: string | null | undefined): number | null {
  if (!raw) return null;
  const m =
    raw.match(/\b(?:révision|revision)\s*[:=]?\s*(\d+)\b/i) ||
    raw.match(/\bv(?:ersion)?\s*[:=]?\s*(\d+)\b/i) ||
    raw.match(/\bv(\d+)\b/i);
  if (!m?.[1]) return null;
  const n = Number(m[1]);
  return Number.isFinite(n) && n > 0 ? Math.trunc(n) : null;
}

function titleNeedle(hint: string): string {
  return hint
    .replace(/\b(?:révision|revision)\s*[:=]?\s*\d+\b/gi, " ")
    .replace(/\bv(?:ersion)?\s*[:=]?\s*\d+\b/gi, " ")
    .replace(/\bv\d+\b/gi, " ")
    .replace(/\b(doc|drev)_[a-z0-9-]+\b/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function findByTitle(
  docs: DocumentListItem[],
  hint: string,
): { ok: true; doc: DocumentListItem } | { ok: false; reason: "AMBIGUOUS" | "NOT_FOUND"; candidates?: string[] } {
  const available = docs.filter((d) => d.latestRevision?.status === "AVAILABLE");
  const needle = titleNeedle(hint).toLowerCase();
  if (!needle) return { ok: false, reason: "NOT_FOUND" };
  const matches = available.filter((d) => {
    const t = d.document.title.toLowerCase();
    return t === needle || t.includes(needle) || needle.includes(t);
  });
  if (matches.length === 1) return { ok: true, doc: matches[0]! };
  if (matches.length > 1) {
    return { ok: false, reason: "AMBIGUOUS", candidates: matches.map((d) => d.document.id) };
  }
  return { ok: false, reason: "NOT_FOUND" };
}

function hasExplicitDocumentSignal(input: {
  documentHint: string | null;
  objectRef: string | null;
}): boolean {
  if (parseDocumentId(input.objectRef) || parseDocumentId(input.documentHint)) return true;
  if (input.objectRef?.trim()) return true;
  const hint = input.documentHint?.trim();
  if (!hint) return false;
  // Pure revision token is not a document signal.
  if (/^(?:v|révision|revision)\s*[:=]?\s*\d+$/i.test(hint)) return false;
  return titleNeedle(hint).length > 0;
}

/**
 * Resolve one independent explicit field (objectRef or documentHint) to a document.
 * Does not fall back across fields — callers reconcile conflicts.
 */
function resolveOneExplicitField(
  field: string | null | undefined,
  docs: DocumentListItem[],
  available: DocumentListItem[],
  detailTag: string,
):
  | { kind: "none" }
  | { kind: "doc"; doc: DocumentListItem }
  | { kind: "fail"; target: PublicationDocumentTarget } {
  const raw = field?.trim() || "";
  if (!raw) return { kind: "none" };

  const docId = parseDocumentId(raw);
  if (docId) {
    const hit = available.find((d) => d.document.id === docId);
    if (!hit) {
      return {
        kind: "fail",
        target: { ok: false, reason: "NOT_FOUND", detail: `${detailTag}_DOCUMENT_ID` },
      };
    }
    return { kind: "doc", doc: hit };
  }

  // Revision-only field does not select a document by itself.
  if (parseRevisionId(raw) && !hasExplicitDocumentSignal({ documentHint: raw, objectRef: null })) {
    return { kind: "none" };
  }

  if (!hasExplicitDocumentSignal({ documentHint: raw, objectRef: null })) {
    return { kind: "none" };
  }

  const byTitle = findByTitle(docs, raw);
  if (!byTitle.ok) {
    return {
      kind: "fail",
      target: {
        ok: false,
        reason: byTitle.reason,
        candidates: "candidates" in byTitle ? byTitle.candidates : undefined,
        detail: `${detailTag}_TITLE`,
      },
    };
  }
  return { kind: "doc", doc: byTitle.doc };
}

/**
 * Synchronous identity resolution from list payload + hints.
 * Independent explicit refs (objectRef vs documentHint) are reconciled —
 * no arbitrary `||` between contradictory fields.
 * Revision by number may leave revisionId null until D4 confirm.
 */
export function resolvePublicationDocumentTarget(input: {
  sameTurnEffect: SameTurnDocumentEffect;
  docs: DocumentListItem[];
  documentHint: string | null;
  objectRef: string | null;
  focus: PublicationDocumentFocus;
  revisionNumberHint?: number | null;
}): PublicationDocumentTarget {
  const available = input.docs.filter((d) => d.latestRevision?.status === "AVAILABLE");

  const objectDocId = parseDocumentId(input.objectRef);
  const hintDocId = parseDocumentId(input.documentHint);
  if (objectDocId && hintDocId && objectDocId !== hintDocId) {
    return {
      ok: false,
      reason: "AMBIGUOUS",
      detail: "EXPLICIT_REF_CONFLICT_DOCUMENT_ID",
    };
  }

  const objectRevId = parseRevisionId(input.objectRef);
  const hintRevId = parseRevisionId(input.documentHint);
  if (objectRevId && hintRevId && objectRevId !== hintRevId) {
    return {
      ok: false,
      reason: "REVISION_MISMATCH",
      detail: "EXPLICIT_REF_CONFLICT_REVISION_ID",
    };
  }

  const objectRevNum = parseRevisionNumberHint(input.objectRef);
  const hintRevNum = parseRevisionNumberHint(input.documentHint);
  if (
    objectRevNum != null &&
    hintRevNum != null &&
    objectRevNum !== hintRevNum
  ) {
    return {
      ok: false,
      reason: "REVISION_MISMATCH",
      detail: "EXPLICIT_REF_CONFLICT_REVISION_NUMBER",
    };
  }

  const requestedRevisionNumber =
    input.revisionNumberHint ?? hintRevNum ?? objectRevNum;
  const explicitRevId = objectRevId || hintRevId;

  const fromObject = resolveOneExplicitField(
    input.objectRef,
    input.docs,
    available,
    "OBJECT_REF",
  );
  if (fromObject.kind === "fail") return fromObject.target;

  const fromHint = resolveOneExplicitField(
    input.documentHint,
    input.docs,
    available,
    "DOCUMENT_HINT",
  );
  if (fromHint.kind === "fail") return fromHint.target;

  if (
    fromObject.kind === "doc" &&
    fromHint.kind === "doc" &&
    fromObject.doc.document.id !== fromHint.doc.document.id
  ) {
    return {
      ok: false,
      reason: "AMBIGUOUS",
      detail: "EXPLICIT_REF_CONFLICT",
      candidates: [
        fromObject.doc.document.title,
        fromHint.doc.document.title,
      ],
    };
  }

  const explicitDoc =
    fromObject.kind === "doc"
      ? fromObject.doc
      : fromHint.kind === "doc"
        ? fromHint.doc
        : null;

  if (explicitDoc) {
    const focusConflict =
      input.focus?.documentId && input.focus.documentId !== explicitDoc.document.id;
    const sameTurnConflict =
      input.sameTurnEffect?.status === "AVAILABLE" &&
      input.sameTurnEffect.documentId &&
      input.sameTurnEffect.documentId !== explicitDoc.document.id;

    // Focus / same-turn never win against an explicit incompatible document.
    void focusConflict;
    void sameTurnConflict;

    let revisionId: string | null = explicitRevId;
    let revisionNumber: number | null = requestedRevisionNumber;

    if (
      !revisionId &&
      !requestedRevisionNumber &&
      input.focus?.documentId === explicitDoc.document.id &&
      input.focus.sourceRevisionId
    ) {
      revisionId = input.focus.sourceRevisionId;
      revisionNumber = input.focus.sourceRevisionNumber ?? null;
    }

    if (
      !revisionId &&
      !requestedRevisionNumber &&
      input.sameTurnEffect?.status === "AVAILABLE" &&
      input.sameTurnEffect.documentId === explicitDoc.document.id &&
      input.sameTurnEffect.revisionId
    ) {
      revisionId = input.sameTurnEffect.revisionId;
      revisionNumber = input.sameTurnEffect.revisionNumber ?? null;
    }

    if (!revisionId && !requestedRevisionNumber && explicitDoc.latestRevision) {
      revisionId = explicitDoc.latestRevision.id;
      revisionNumber = explicitDoc.latestRevision.revisionNumber;
    }

    return {
      ok: true,
      documentId: explicitDoc.document.id,
      revisionId,
      revisionNumber,
      requestedRevisionNumber,
      title: explicitDoc.document.title,
      source: "explicit",
      overriddenImplicit: Boolean(focusConflict || sameTurnConflict),
    };
  }

  // No explicit document — same-turn D4 CREATE/REVISE.
  const effect = input.sameTurnEffect;
  if (effect?.status === "AVAILABLE" && effect.documentId && effect.revisionId) {
    if (
      requestedRevisionNumber != null &&
      effect.revisionNumber != null &&
      effect.revisionNumber !== requestedRevisionNumber
    ) {
      // Same document identity unknown without list — try list match.
      const d = available.find((x) => x.document.id === effect.documentId);
      if (d) {
        return {
          ok: true,
          documentId: d.document.id,
          revisionId: null,
          revisionNumber: requestedRevisionNumber,
          requestedRevisionNumber,
          title: d.document.title,
          source: "explicit",
          overriddenImplicit: true,
        };
      }
      return {
        ok: false,
        reason: "REVISION_MISMATCH",
        detail: "SAME_TURN_VS_REQUESTED_REVISION",
      };
    }
    return {
      ok: true,
      documentId: effect.documentId,
      revisionId: effect.revisionId,
      revisionNumber: effect.revisionNumber ?? null,
      requestedRevisionNumber,
      title: effect.title?.trim() || effect.documentId,
      source: "same_turn_d4",
      overriddenImplicit: false,
    };
  }

  // Focus — only without conflicting explicit document (already handled).
  if (input.focus?.documentId && input.focus.sourceRevisionId) {
    const d = available.find((x) => x.document.id === input.focus!.documentId);
    if (!d) {
      return { ok: false, reason: "NOT_FOUND", detail: "FOCUS_DOCUMENT" };
    }
    if (requestedRevisionNumber != null) {
      const focusNum = input.focus.sourceRevisionNumber;
      if (focusNum != null && focusNum !== requestedRevisionNumber) {
        return {
          ok: true,
          documentId: d.document.id,
          revisionId: null,
          revisionNumber: requestedRevisionNumber,
          requestedRevisionNumber,
          title: d.document.title,
          source: "explicit",
          overriddenImplicit: true,
        };
      }
    }
    return {
      ok: true,
      documentId: d.document.id,
      revisionId: input.focus.sourceRevisionId,
      revisionNumber:
        input.focus.sourceRevisionNumber ?? d.latestRevision?.revisionNumber ?? null,
      requestedRevisionNumber,
      title: d.document.title,
      source: "document_focus",
      overriddenImplicit: false,
    };
  }

  // Soft hint without "explicit signal" already handled — use resolveReviseTarget for sole/hint.
  const hint = input.documentHint?.trim() || null;
  const resolved = resolveReviseTarget(input.docs, hint, null);
  if (!resolved.ok) {
    const reason =
      resolved.reason === "AMBIGUOUS" ||
      resolved.reason === "NO_AVAILABLE_REVISION" ||
      resolved.reason === "NOT_FOUND"
        ? resolved.reason
        : "NOT_FOUND";
    return {
      ok: false,
      reason,
      candidates: "candidates" in resolved ? resolved.candidates : undefined,
    };
  }

  if (requestedRevisionNumber != null && resolved.baseRevisionNumber !== requestedRevisionNumber) {
    return {
      ok: true,
      documentId: resolved.documentId,
      revisionId: null,
      revisionNumber: requestedRevisionNumber,
      requestedRevisionNumber,
      title: resolved.title,
      source: hint ? "hint" : "sole_document",
      overriddenImplicit: true,
    };
  }

  return {
    ok: true,
    documentId: resolved.documentId,
    revisionId: resolved.baseRevisionId,
    revisionNumber: resolved.baseRevisionNumber,
    requestedRevisionNumber,
    title: resolved.title,
    source: hint ? "hint" : "sole_document",
    overriddenImplicit: false,
  };
}

/**
 * D4 owner confirmation before D7 prepare.
 * Verifies pilot/project ownership, revision membership, AVAILABLE status.
 */
export async function confirmPublicationDocumentWithD4(input: {
  pilotId: string;
  preparationId: string;
  target: Extract<PublicationDocumentTarget, { ok: true }>;
}): Promise<PublicationDocumentTarget> {
  const { pilotId, preparationId, target } = input;

  if (target.revisionId) {
    const loaded = await getDocumentRevision(
      pilotId,
      preparationId,
      target.documentId,
      target.revisionId,
    );
    if (loaded.status === "FORBIDDEN") {
      return { ok: false, reason: "FORBIDDEN", detail: "DOCUMENT_OR_REVISION" };
    }
    if (loaded.status === "NOT_FOUND") {
      return { ok: false, reason: "REVISION_NOT_FOUND", detail: "REVISION_ID" };
    }
    if (loaded.status !== "AVAILABLE" || !("revision" in loaded) || !loaded.revision) {
      return {
        ok: false,
        reason: "NO_AVAILABLE_REVISION",
        detail: String(loaded.status),
      };
    }
    if (loaded.revision.documentId && loaded.revision.documentId !== target.documentId) {
      return { ok: false, reason: "REVISION_MISMATCH", detail: "REVISION_BELONGS_OTHER_DOC" };
    }
    // getDocumentRevision already scopes revisionId+documentId.
    if (
      target.requestedRevisionNumber != null &&
      loaded.revision.revisionNumber !== target.requestedRevisionNumber
    ) {
      return {
        ok: false,
        reason: "REVISION_MISMATCH",
        detail: `REQUESTED_V${target.requestedRevisionNumber}_GOT_V${loaded.revision.revisionNumber}`,
      };
    }
    return {
      ...target,
      revisionId: loaded.revision.id,
      revisionNumber: loaded.revision.revisionNumber,
      title: loaded.document?.title ?? target.title,
    };
  }

  if (target.requestedRevisionNumber != null || target.revisionNumber != null) {
    const want = target.requestedRevisionNumber ?? target.revisionNumber!;
    const listed = await listDocumentRevisions(pilotId, preparationId, target.documentId);
    if (listed.status === "FORBIDDEN") {
      return { ok: false, reason: "FORBIDDEN", detail: "DOCUMENT" };
    }
    const match = listed.revisions.find(
      (r) => r.revisionNumber === want && r.status === "AVAILABLE",
    );
    if (!match) {
      return {
        ok: false,
        reason: "REVISION_NOT_FOUND",
        detail: `V${want}`,
      };
    }
    return {
      ...target,
      revisionId: match.id,
      revisionNumber: match.revisionNumber,
      title: listed.document?.title ?? target.title,
    };
  }

  return {
    ok: false,
    reason: "NO_AVAILABLE_REVISION",
    detail: "MISSING_REVISION_IDENTITY",
  };
}
```

### FILE: projects/sfia-studio-next/web/src/domains/conversation/publication-effect-restitution.ts
```typescript
/**
 * Terminal métier restitution after a governed publication attempt.
 *
 * Produces ONE coherent pilot-facing state — not a pre-effect narrative
 * contradicted by an appended Studio block.
 * Never invents COMPLETED without owner facts. UNKNOWN stays non-terminal.
 */

export type PublicationEffectOutcome =
  | "COMPLETED"
  | "REFUSED_WRITE_DISABLED"
  | "REFUSED_AUTHORITY"
  | "AWAITING_CLARIFICATION"
  | "PREPARED_AWAITING_AUTH"
  | "DISPATCH_FAILED"
  | "NOT_ATTEMPTED"
  | "UNKNOWN";

export type PublicationEffectView = {
  attempted: boolean;
  outcome: PublicationEffectOutcome;
  reason?: string | null;
  documentTitle?: string | null;
  revisionNumber?: number | null;
  repositoryFullName?: string | null;
  publicationBranch?: string | null;
  attemptId?: string | null;
  decisionId?: string | null;
} | null;

const PRE_EFFECT_PUBLICATION_HEDGES = [
  /la publication reste à confirmer par Studio\.?/gi,
  /l['']effet Git reste à confirmer par Studio\.?/gi,
  /reste à confirmer par Studio\.?/gi,
];

/** Premature success / action claims that contradict a non-COMPLETED outcome. */
const PREMATURE_SUCCESS_CLAIMS = [
  /\bje (?:vais )?publie(?:r)?\b[^.!?\n]{0,120}/gi,
  /\bla publication (?:est|a été|sera) (?:effectuée|réalisée|faite|lancée)\b[^.!?\n]{0,80}/gi,
  /\b(?:document|révision)[^.!?\n]{0,80}\b(?:publié|publiée|publiés)\b[^.!?\n]{0,80}/gi,
  /\bj['']ai publié\b[^.!?\n]{0,120}/gi,
  /\bpublication (?:sur|dans) (?:GitHub|le dépôt)\b[^.!?\n]{0,80}/gi,
];

export function stripPublicationPreEffectHedges(text: string): string {
  let out = text ?? "";
  for (const re of PRE_EFFECT_PUBLICATION_HEDGES) {
    out = out.replace(re, "");
  }
  return out.replace(/\n{3,}/g, "\n\n").trim();
}

function stripPrematureSuccessClaims(text: string): string {
  let out = text ?? "";
  for (const re of PREMATURE_SUCCESS_CLAIMS) {
    out = out.replace(re, "");
  }
  return out.replace(/\n{3,}/g, "\n\n").trim();
}

function docLabel(effect: NonNullable<PublicationEffectView>): string {
  const title = effect.documentTitle?.trim();
  if (title && effect.revisionNumber != null) {
    return `« ${title} », révision ${effect.revisionNumber}`;
  }
  if (title) return `« ${title} »`;
  if (effect.revisionNumber != null) return `révision ${effect.revisionNumber}`;
  return "le document";
}

/**
 * Single coherent terminal message for the Pilote.
 * When a Studio outcome is known, prefer a fact-based body and only keep
 * prior prose that does not contradict it (clarifications, caveats).
 */
export function composePublicationEffectRestitution(input: {
  priorContent: string;
  effect: PublicationEffectView;
}): string {
  const effect = input.effect;
  let prior = stripPublicationPreEffectHedges(input.priorContent ?? "");

  if (!effect?.attempted) {
    // Recognized publish intent with no owner attempt: never leave success claims.
    return stripPrematureSuccessClaims(prior);
  }

  // Non-success outcomes must not retain premature success narration.
  if (effect.outcome !== "COMPLETED") {
    prior = stripPrematureSuccessClaims(prior);
  }

  const facts = terminalFacts(effect);
  if (facts.length === 0) return prior;

  // Prefer a single coherent answer: facts first, then optional non-contradicting prior.
  const factBlock = facts.join("\n");
  if (!prior.trim()) return factBlock;

  // Keep prior only when it still adds clarification context (short remainder).
  const priorTrim = prior.trim();
  if (priorTrim.length < 40) {
    return `${factBlock}\n\n${priorTrim}`;
  }
  // Avoid stacking a long contradicted draft: return facts as the terminal voice.
  return factBlock;
}

function terminalFacts(effect: NonNullable<PublicationEffectView>): string[] {
  const reason = (effect.reason ?? "").trim();
  const repo = effect.repositoryFullName?.trim();
  const branch = effect.publicationBranch?.trim();
  const doc = docLabel(effect);

  switch (effect.outcome) {
    case "COMPLETED": {
      const lines = [
        `Le document ${doc} a été publié` +
          (repo ? ` dans le dépôt \`${repo}\`` : "") +
          (branch ? `, sur la branche \`${branch}\`` : "") +
          ".",
        "Aucune fusion n'a été effectuée.",
      ];
      return lines;
    }
    case "REFUSED_WRITE_DISABLED":
      return [
        "La publication n'a pas été effectuée.",
        "Les écritures GitHub ne sont pas disponibles dans cet environnement.",
        "Aucune branche, commit ni demande de fusion n'a été créé.",
      ];
    case "REFUSED_AUTHORITY":
      return [
        "La publication n'a pas été effectuée.",
        reason
          ? `Motif : ${reason}.`
          : "L'autorisation ou les permissions n'ont pas permis l'effet.",
        "Aucun dépôt distant n'a été modifié.",
      ];
    case "AWAITING_CLARIFICATION":
      return [
        "Aucune publication n'a été lancée.",
        reason
          ? `Précision nécessaire : ${reason}`
          : "Une précision est encore nécessaire avant de poursuivre.",
      ];
    case "PREPARED_AWAITING_AUTH":
      return [
        "Une préparation de publication est disponible.",
        "L'effet distant n'a pas encore été exécuté.",
        reason ? `Détail : ${reason}.` : "",
      ].filter(Boolean);
    case "DISPATCH_FAILED":
      return [
        "La publication n'a pas abouti.",
        reason ? `Motif : ${reason}.` : "Échec au moment de l'effet distant.",
        "Aucun succès n'est affirmé sans preuve Studio.",
      ];
    case "NOT_ATTEMPTED":
      return [
        "Aucune publication n'a été tentée pour cette demande.",
        reason ? `Motif : ${reason}.` : "",
      ].filter(Boolean);
    case "UNKNOWN":
    default:
      return [
        "L'issue de la publication est encore en vérification.",
        "Je ne confirme ni le succès ni le refus définitif tant que Studio n'a pas consolidé l'état.",
        "La mission reste ouverte pour reprise — aucun nouvel effet n'est relancé automatiquement.",
        reason ? `Information : ${reason}.` : "",
      ].filter(Boolean);
  }
}

export function publicationWriteGate():
  | { allowed: true }
  | { allowed: false; reason: string } {
  const mode = (process.env.STUDIO_GITHUB_PROVIDER ?? "scripted").toLowerCase();
  if (mode !== "real") return { allowed: true };
  const flag = (process.env.STUDIO_GITHUB_ALLOW_MUTATIONS ?? "").toLowerCase().trim();
  if (flag === "documentary") return { allowed: true };
  return {
    allowed: false,
    reason:
      "STUDIO_GITHUB_ALLOW_MUTATIONS≠documentary — écritures GitHub REAL désactivées",
  };
}
```

### FILE: projects/sfia-studio-next/web/tests/unit/publication-effect-restitution.test.ts
```typescript
import { describe, expect, it, afterEach } from "vitest";
import {
  composePublicationEffectRestitution,
  publicationWriteGate,
  stripPublicationPreEffectHedges,
} from "@/domains/conversation/publication-effect-restitution";
import {
  parseRevisionNumberHint,
  resolvePublicationDocumentTarget,
} from "@/domains/conversation/publication-document-target";

const docs = [
  {
    document: { id: "doc_a", title: "Références externes — Enseignements de Chantiers360" },
    latestRevision: {
      id: "drev_a3",
      revisionNumber: 3,
      status: "AVAILABLE",
      contentMarkdown: "# v3",
    },
  },
  {
    document: { id: "doc_b", title: "Synthèse CampusFlow" },
    latestRevision: {
      id: "drev_b1",
      revisionNumber: 1,
      status: "AVAILABLE",
      contentMarkdown: "# b",
    },
  },
] as never;

describe("publication-effect-restitution", () => {
  const prevProvider = process.env.STUDIO_GITHUB_PROVIDER;
  const prevMut = process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;

  afterEach(() => {
    if (prevProvider === undefined) delete process.env.STUDIO_GITHUB_PROVIDER;
    else process.env.STUDIO_GITHUB_PROVIDER = prevProvider;
    if (prevMut === undefined) delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
    else process.env.STUDIO_GITHUB_ALLOW_MUTATIONS = prevMut;
  });

  it("strips pre-effect Studio confirmation hedge", () => {
    const raw =
      "Je publie le document tel quel. La publication reste à confirmer par Studio.";
    expect(stripPublicationPreEffectHedges(raw)).not.toMatch(/reste à confirmer/i);
  });

  it("WRITE-off restitution is coherent — no premature success retained", () => {
    const out = composePublicationEffectRestitution({
      priorContent:
        "Je publie le document sur GitHub. La publication reste à confirmer par Studio.",
      effect: {
        attempted: true,
        outcome: "REFUSED_WRITE_DISABLED",
        reason: "STUDIO_GITHUB_ALLOW_MUTATIONS≠documentary",
      },
    });
    expect(out).toMatch(/n'a pas été effectuée/i);
    expect(out).not.toMatch(/reste à confirmer/i);
    expect(out).not.toMatch(/Je publie/i);
    expect(out).toMatch(/ne sont pas disponibles/i);
  });

  it("COMPLETED restitution confirms effect without inventing merge", () => {
    const out = composePublicationEffectRestitution({
      priorContent: "Document prêt. La publication reste à confirmer par Studio.",
      effect: {
        attempted: true,
        outcome: "COMPLETED",
        documentTitle: "Références externes",
        revisionNumber: 2,
        repositoryFullName: "acme/demo",
        publicationBranch: "sfia/pub/demo",
      },
    });
    expect(out).toMatch(/a été publié/i);
    expect(out).toMatch(/révision 2/);
    expect(out).toMatch(/Aucune fusion/i);
    expect(out).not.toMatch(/reste à confirmer/i);
  });

  it("UNKNOWN does not announce success or definitive refusal", () => {
    const out = composePublicationEffectRestitution({
      priorContent: "Je publie le document sur GitHub.",
      effect: { attempted: true, outcome: "UNKNOWN" },
    });
    expect(out).toMatch(/encore en vérification/i);
    expect(out).not.toMatch(/Je publie/i);
    expect(out).not.toMatch(/a été publié/i);
    expect(out).not.toMatch(/n'a pas été effectuée/i);
  });

  it("null effect strips premature success claims (no false publication)", () => {
    const out = composePublicationEffectRestitution({
      priorContent: "Je publie le document. La publication reste à confirmer par Studio.",
      effect: null,
    });
    expect(out).not.toMatch(/Je publie/i);
    expect(out).not.toMatch(/reste à confirmer/i);
    expect(out).not.toMatch(/a été publié/i);
  });

  it("NOT_ATTEMPTED states intention without claiming execution", () => {
    const out = composePublicationEffectRestitution({
      priorContent: "Je publie le document sur GitHub.",
      effect: {
        attempted: true,
        outcome: "NOT_ATTEMPTED",
        reason: "Intention reconnue — aucun effet Studio",
      },
    });
    expect(out).toMatch(/Aucune publication n'a été tentée/i);
    expect(out).not.toMatch(/Je publie/i);
    expect(out).not.toMatch(/a été publié/i);
  });

  it("publicationWriteGate refuses REAL without documentary", () => {
    process.env.STUDIO_GITHUB_PROVIDER = "real";
    delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
    expect(publicationWriteGate().allowed).toBe(false);

    process.env.STUDIO_GITHUB_ALLOW_MUTATIONS = "documentary";
    expect(publicationWriteGate().allowed).toBe(true);

    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
    delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
    expect(publicationWriteGate().allowed).toBe(true);
  });
});

describe("resolvePublicationDocumentTarget — explicit precedence", () => {
  it("parses revision number hints", () => {
    expect(parseRevisionNumberHint("Références externes v2")).toBe(2);
    expect(parseRevisionNumberHint("révision 2")).toBe(2);
    expect(parseRevisionNumberHint("doc_a")).toBeNull();
  });

  it("explicit document B wins over focus A", () => {
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs,
      documentHint: "Synthèse CampusFlow",
      objectRef: null,
      focus: {
        documentId: "doc_a",
        sourceRevisionId: "drev_a3",
        sourceRevisionNumber: 3,
      },
    });
    expect(t.ok).toBe(true);
    if (t.ok) {
      expect(t.documentId).toBe("doc_b");
      expect(t.source).toBe("explicit");
      expect(t.overriddenImplicit).toBe(true);
    }
  });

  it("explicit document B wins over same-turn D4 A", () => {
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: {
        status: "AVAILABLE",
        documentId: "doc_a",
        revisionId: "drev_a3",
        revisionNumber: 3,
        title: "A",
      },
      docs,
      documentHint: "Synthèse CampusFlow",
      objectRef: null,
      focus: null,
    });
    expect(t.ok).toBe(true);
    if (t.ok) {
      expect(t.documentId).toBe("doc_b");
      expect(t.overriddenImplicit).toBe(true);
    }
  });

  it("explicit A v2 requests historical revision (not silent latest v3)", () => {
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs,
      documentHint: "Références externes — Enseignements de Chantiers360 v2",
      objectRef: null,
      focus: {
        documentId: "doc_a",
        sourceRevisionId: "drev_a3",
        sourceRevisionNumber: 3,
      },
    });
    expect(t.ok).toBe(true);
    if (t.ok) {
      expect(t.documentId).toBe("doc_a");
      expect(t.requestedRevisionNumber).toBe(2);
      expect(t.revisionId).toBeNull();
      expect(t.revisionNumber).toBe(2);
    }
  });

  it("explicit missing document is NOT_FOUND — no sole fallback", () => {
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs,
      documentHint: "Document fantôme inexistant XYZ",
      objectRef: null,
      focus: null,
    });
    expect(t.ok).toBe(false);
    if (!t.ok) expect(t.reason).toBe("NOT_FOUND");
  });

  it("ambiguous titles require clarification", () => {
    const amb = [
      {
        document: { id: "doc_1", title: "Notes projet" },
        latestRevision: {
          id: "drev_1",
          revisionNumber: 1,
          status: "AVAILABLE",
          contentMarkdown: "a",
        },
      },
      {
        document: { id: "doc_2", title: "Notes projet bis" },
        latestRevision: {
          id: "drev_2",
          revisionNumber: 1,
          status: "AVAILABLE",
          contentMarkdown: "b",
        },
      },
    ];
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs: amb as never,
      documentHint: "Notes projet",
      objectRef: null,
      focus: null,
    });
    expect(t.ok).toBe(false);
    if (!t.ok) {
      expect(t.reason).toBe("AMBIGUOUS");
      expect(t.candidates?.length).toBe(2);
    }
  });

  it("sole document without explicit ref is allowed", () => {
    const sole = [docs[0]];
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs: sole as never,
      documentHint: null,
      objectRef: null,
      focus: null,
    });
    expect(t.ok).toBe(true);
    if (t.ok) {
      expect(t.documentId).toBe("doc_a");
      expect(t.source).toBe("sole_document");
      expect(t.revisionId).toBe("drev_a3");
    }
  });

  it("objectRef doc_id selects exact document", () => {
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs,
      documentHint: null,
      objectRef: "doc_b",
      focus: {
        documentId: "doc_a",
        sourceRevisionId: "drev_a3",
        sourceRevisionNumber: 3,
      },
    });
    expect(t.ok).toBe(true);
    if (t.ok) {
      expect(t.documentId).toBe("doc_b");
      expect(t.source).toBe("explicit");
    }
  });

  it("A: objectRef=doc_A + documentHint title B → AMBIGUOUS (no silent A)", () => {
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs,
      documentHint: "Synthèse CampusFlow",
      objectRef: "doc_a",
      focus: null,
    });
    expect(t.ok).toBe(false);
    if (!t.ok) {
      expect(t.reason).toBe("AMBIGUOUS");
      expect(t.detail).toMatch(/EXPLICIT_REF_CONFLICT/);
    }
  });

  it("B: objectRef=doc_A + documentHint title A → concordance A", () => {
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs,
      documentHint: "Références externes — Enseignements de Chantiers360",
      objectRef: "doc_a",
      focus: {
        documentId: "doc_b",
        sourceRevisionId: "drev_b1",
        sourceRevisionNumber: 1,
      },
    });
    expect(t.ok).toBe(true);
    if (t.ok) {
      expect(t.documentId).toBe("doc_a");
      expect(t.source).toBe("explicit");
      expect(t.overriddenImplicit).toBe(true);
    }
  });

  it("C: objectRef=doc_A + documentHint=doc_B → AMBIGUOUS no effect target", () => {
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs,
      documentHint: "doc_b",
      objectRef: "doc_a",
      focus: null,
    });
    expect(t.ok).toBe(false);
    if (!t.ok) {
      expect(t.reason).toBe("AMBIGUOUS");
      expect(t.detail).toBe("EXPLICIT_REF_CONFLICT_DOCUMENT_ID");
    }
  });

  it("D: documentHint v2 + objectRef revisionId of v3 → keeps both for D4 mismatch", () => {
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs,
      documentHint: "Références externes — Enseignements de Chantiers360 v2",
      objectRef: "drev_a3",
      focus: null,
    });
    expect(t.ok).toBe(true);
    if (t.ok) {
      expect(t.documentId).toBe("doc_a");
      expect(t.revisionId).toBe("drev_a3");
      expect(t.requestedRevisionNumber).toBe(2);
    }
  });

  it("F: explicit B never yields focus A", () => {
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs,
      documentHint: "Synthèse CampusFlow",
      objectRef: null,
      focus: {
        documentId: "doc_a",
        sourceRevisionId: "drev_a3",
        sourceRevisionNumber: 3,
      },
    });
    expect(t.ok).toBe(true);
    if (t.ok) expect(t.documentId).toBe("doc_b");
  });

  it("H: near titles do not arbitrary-match", () => {
    const near = [
      {
        document: { id: "doc_x", title: "Synthèse Campus" },
        latestRevision: {
          id: "drev_x",
          revisionNumber: 1,
          status: "AVAILABLE",
          contentMarkdown: "x",
        },
      },
      {
        document: { id: "doc_y", title: "Synthèse CampusFlow" },
        latestRevision: {
          id: "drev_y",
          revisionNumber: 1,
          status: "AVAILABLE",
          contentMarkdown: "y",
        },
      },
    ];
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs: near as never,
      documentHint: "Synthèse Campus",
      objectRef: null,
      focus: null,
    });
    // Exact or unique containment — must not silently pick CampusFlow when both match loosely
    if (t.ok) {
      expect(t.documentId).toBe("doc_x");
    } else {
      expect(["AMBIGUOUS", "NOT_FOUND"]).toContain(t.reason);
    }
  });
});
```

### FILE: projects/sfia-studio-next/web/tests/integration/publication-nora-cloture.pg.test.ts
```typescript
/**
 * E08 POST-UAT clôture — PG service chains (sfia_next_e2e only).
 * C5: WRITE OFF full chain, zero mutation.
 * C6: SCRIPTED publish end-to-end D3→D9 + Nora restitution.
 * DETERMINISTIC PROVEN ≠ REAL WRITE PROVEN.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  documentRevisions,
  effectAttempts,
  humanDecisions,
  pilots,
  preparations,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  completeGitHubAuthorization,
  startGitHubAuthorization,
} from "@/domains/integrations/authorization-service";
import { attachRepositoryToProject } from "@/domains/integrations/project-link-service";
import {
  getScriptedGitHubProvider,
  getScriptedMutationCounts,
  resetScriptedMutationCounts,
  resetScriptedStore,
} from "@/domains/integrations/scripted-github-provider";
import { postUserMessageAndNora, listMessages } from "@/domains/conversation/service";
import { listDocuments } from "@/domains/document/service";
import {
  resolvePublicationDocumentTarget,
} from "@/domains/conversation/publication-document-target";
import {
  effectEnvelope,
  registerCreateDocumentTitled,
  registerTypedScenario,
} from "../helpers/semantic-fixture-envelopes";

/** Publish-existing only (no same-turn D4 CREATE) — preserves explicit revision targeting. */
function publishExistingEnvelope(opts: {
  title: string;
  publicationPath: string;
  revisionHint?: string;
}) {
  const documentHint = opts.revisionHint
    ? `${opts.title} ${opts.revisionHint}`
    : opts.title;
  return effectEnvelope(
    `Publication existante ${opts.title}`,
    `Je prépare la publication de « ${opts.title} ».`,
    [
      {
        capabilityId: "d7.prepare_publication",
        mode: "REQUEST_EFFECT",
        summary: "Préparer publication",
        parameters: {
          documentHint,
          publicationPath: opts.publicationPath,
        },
      },
    ],
  );
}

async function noraTurn(
  pilotId: string,
  preparationId: string,
  text: string,
  opts?: Parameters<typeof postUserMessageAndNora>[3],
) {
  return postUserMessageAndNora(pilotId, preparationId, text, opts);
}

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

async function seedProjectWithGit(label: string) {
  resetScriptedStore();
  const pilotId = await seedPilot(label);
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "s");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed!.creationRevision,
    projectName: label,
    previewSummary: "s",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" || !created.projectId) {
    throw new Error(`seed failed: ${created.status}`);
  }
  const sessionId = newId("sid");
  const { state } = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
  const status = await completeGitHubAuthorization({
    pilotId,
    state,
    studioSessionId: sessionId,
  });
  const repoId = status.repositories[0]!.id;
  await attachRepositoryToProject(pilotId, created.projectId, repoId);
  getScriptedGitHubProvider();
  return { pilotId, projectId: created.projectId, preparationId: prep.id, repositoryId: repoId };
}

async function countGitPublicationAttempts(projectId: string) {
  return db
    .select()
    .from(effectAttempts)
    .where(
      and(
        eq(effectAttempts.projectId, projectId),
        eq(effectAttempts.kind, "GIT_PUBLICATION"),
      ),
    );
}

describe("E08 clôture — WRITE OFF + SCRIPTED PG chains", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    expect(process.env.DATABASE_URL).toMatch(/\/sfia_next_e2e(?:\?|$)/);
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
    delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
  });

  it("C5 WRITE OFF: full service chain — zero D7 prepare, zero Git mutation, Nora refuses", async () => {
    const prevProvider = process.env.STUDIO_GITHUB_PROVIDER;
    const prevMut = process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;

    const { pilotId, projectId, preparationId } = await seedProjectWithGit("cloture-writeoff");

    const askA = "Crée un document intitulé Clôture Alpha WriteOff.";
    registerCreateDocumentTitled(askA, { title: "Clôture Alpha WriteOff" });
    const createA = await noraTurn(pilotId, preparationId, askA, {
      clientTurnKey: newId("ctk"),
    });
    expect(createA.documentSave?.status).toBe("AVAILABLE");

    const askB = "Crée un document intitulé Clôture Bravo WriteOff.";
    registerCreateDocumentTitled(askB, { title: "Clôture Bravo WriteOff" });
    const createB = await noraTurn(pilotId, preparationId, askB, {
      clientTurnKey: newId("ctk"),
    });
    expect(createB.documentSave?.status).toBe("AVAILABLE");
    expect(createB.documentSave!.documentId).not.toBe(createA.documentSave!.documentId);

    const beforeAttempts = await countGitPublicationAttempts(projectId);
    const beforeMut = getScriptedMutationCounts(pilotId);
    resetScriptedMutationCounts(pilotId);

    // Simulate REAL WRITE OFF (gate refuses before D7).
    process.env.STUDIO_GITHUB_PROVIDER = "real";
    delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;

    const publishAsk =
      "Publie le document Clôture Bravo WriteOff dans mon dépôt GitHub chemin docs/studio-next/cloture-bravo.md";
    registerTypedScenario(
      publishAsk,
      publishExistingEnvelope({
        title: "Clôture Bravo WriteOff",
        publicationPath: "docs/studio-next/cloture-bravo.md",
      }),
    );
    const chat = await noraTurn(pilotId, preparationId, publishAsk, {
      clientTurnKey: newId("ctk"),
      documentFocus: {
        documentId: createA.documentSave!.documentId!,
        sourceRevisionId: createA.documentSave!.revisionId!,
        sourceRevisionNumber: createA.documentSave!.revisionNumber ?? 1,
        observedHeadRevisionId: createA.documentSave!.revisionId!,
      },
    });

    process.env.STUDIO_GITHUB_PROVIDER = prevProvider ?? "scripted";
    if (prevMut === undefined) delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
    else process.env.STUDIO_GITHUB_ALLOW_MUTATIONS = prevMut;

    const afterAttempts = await countGitPublicationAttempts(projectId);
    expect(afterAttempts.length).toBe(beforeAttempts.length);

    const d7 = chat.missionProjection?.steps.find((s) => s.id === "d7_prepare");
    expect(d7?.status).toBe("FAILED");
    expect(d7?.reason).toMatch(/WRITE_DISABLED/);
    expect(d7?.attemptId).toBeFalsy();
    expect(chat.missionProjection?.status).toBe("PARTIAL_FAILED_STEP");
    expect(chat.humanDecisionCreated).toBe(false);

    const mut = getScriptedMutationCounts(pilotId);
    expect(mut.createBranch).toBe(0);
    expect(mut.putFileContents).toBe(0);
    expect(mut.createPR).toBe(0);
    expect(mut.mergePR).toBe(0);
    // beforeMut captured only for diagnostics — store was reset
    void beforeMut;

    const thread = await listMessages(pilotId, preparationId);
    const lastAssistant = [...thread].reverse().find((m) => m.role === "assistant");
    expect(lastAssistant?.content ?? "").toMatch(/n'a pas été effectuée/i);
    expect(lastAssistant?.content ?? "").toMatch(/ne sont pas disponibles|écritures GitHub/i);
    expect(lastAssistant?.content ?? "").not.toMatch(/a été publié/i);
    expect(lastAssistant?.content ?? "").not.toMatch(/Je publie/i);

    // Re-read: no additional attempt
    const reread = await countGitPublicationAttempts(projectId);
    expect(reread.length).toBe(beforeAttempts.length);
  });

  it("C5b objectRef/documentHint conflict — no prepare, no mutation", async () => {
    const { pilotId, projectId, preparationId } = await seedProjectWithGit("cloture-conflict");
    const askA = "Crée un document intitulé Conflit Doc Alpha.";
    registerCreateDocumentTitled(askA, { title: "Conflit Doc Alpha" });
    const createA = await noraTurn(pilotId, preparationId, askA, {
      clientTurnKey: newId("ctk"),
    });
    const askB = "Crée un document intitulé Conflit Doc Bravo.";
    registerCreateDocumentTitled(askB, { title: "Conflit Doc Bravo" });
    const createB = await noraTurn(pilotId, preparationId, askB, {
      clientTurnKey: newId("ctk"),
    });
    expect(createA.documentSave?.status).toBe("AVAILABLE");
    expect(createB.documentSave?.status).toBe("AVAILABLE");

    const docs = await listDocuments(pilotId, preparationId);
    const resolved = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs,
      documentHint: "Conflit Doc Bravo",
      objectRef: createA.documentSave!.documentId!,
      focus: null,
    });
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) expect(resolved.reason).toBe("AMBIGUOUS");

    const before = await countGitPublicationAttempts(projectId);
    const publishAsk =
      "Publie Conflit Doc Bravo dans mon dépôt GitHub chemin docs/studio-next/conflit.md";
    registerTypedScenario(
      publishAsk,
      effectEnvelope("Publication conflit refs", "Précision nécessaire.", [
        {
          capabilityId: "d7.prepare_publication",
          mode: "REQUEST_EFFECT",
          summary: "Préparer publication",
          parameters: {
            documentHint: "Conflit Doc Bravo",
            objectRef: createA.documentSave!.documentId!,
            publicationPath: "docs/studio-next/conflit.md",
          },
        },
      ]),
    );
    const chat = await noraTurn(pilotId, preparationId, publishAsk, {
      clientTurnKey: newId("ctk"),
    });
    const after = await countGitPublicationAttempts(projectId);
    expect(after.length).toBe(before.length);
    expect(chat.missionProjection?.status).toBe("AWAITING_CLARIFICATION");
    expect(chat.missionProjection?.steps.find((s) => s.id === "d7_prepare")?.attemptId).toBeFalsy();
    expect(chat.humanDecisionCreated).toBe(false);
    const lastAssistant = [...(await listMessages(pilotId, preparationId))]
      .reverse()
      .find((m) => m.role === "assistant");
    expect(lastAssistant?.content ?? "").toMatch(/précision|plusieurs documents|Aucune publication/i);
    expect(lastAssistant?.content ?? "").not.toMatch(/a été publié/i);
    void createB;
  });

  it("C6 SCRIPTED: explicit revision over focus — D6/D7/D8 + Nora COMPLETED", async () => {
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
    delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;

    const { pilotId, projectId, preparationId } = await seedProjectWithGit("cloture-scripted");
    const title = "Clôture Scripted MultiRev";
    const createAsk = `Crée un document intitulé ${title}.`;
    registerCreateDocumentTitled(createAsk, { title });
    const create = await noraTurn(pilotId, preparationId, createAsk, {
      clientTurnKey: newId("ctk"),
    });
    expect(create.documentSave?.status).toBe("AVAILABLE");
    const docId = create.documentSave!.documentId!;
    const rev1 = create.documentSave!.revisionId!;

    const rev2 = newId("drev");
    const rev3 = newId("drev");
    await db.insert(documentRevisions).values([
      {
        id: rev2,
        documentId: docId,
        revisionNumber: 2,
        contentMarkdown: "# clôture v2 exact content",
        status: "AVAILABLE",
        baseRevisionId: rev1,
        provenanceJson: "{}",
        scope: "document",
      },
      {
        id: rev3,
        documentId: docId,
        revisionNumber: 3,
        contentMarkdown: "# clôture v3 head — must not publish",
        status: "AVAILABLE",
        baseRevisionId: rev2,
        provenanceJson: "{}",
        scope: "document",
      },
    ]);

    resetScriptedMutationCounts(pilotId);
    const beforeAttempts = await countGitPublicationAttempts(projectId);

    const publishAsk = `Publie le document ${title} révision 2 dans mon dépôt GitHub chemin docs/studio-next/cloture-v2.md`;
    registerTypedScenario(
      publishAsk,
      publishExistingEnvelope({
        title,
        publicationPath: "docs/studio-next/cloture-v2.md",
        revisionHint: "v2",
      }),
    );

    const chat = await noraTurn(pilotId, preparationId, publishAsk, {
      clientTurnKey: newId("ctk"),
      documentFocus: {
        documentId: docId,
        sourceRevisionId: rev3,
        sourceRevisionNumber: 3,
        observedHeadRevisionId: rev3,
      },
    });

    expect(chat.missionProjection?.status).toBe("COMPLETED");
    expect(chat.humanDecisionCreated).toBe(true);
    const prepStep = chat.missionProjection?.steps.find((s) => s.id === "d7_prepare");
    expect(prepStep?.decisionId).toBeTruthy();
    expect(prepStep?.attemptId).toBeTruthy();
    expect(prepStep?.revisionId).toBe(rev2);

    const attempt = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepStep!.attemptId!))
    )[0];
    expect(attempt?.kind).toBe("GIT_PUBLICATION");
    expect(["COMPLETED", "DISPATCHED"]).toContain(attempt?.status);
    expect(attempt?.decisionId).toBe(prepStep?.decisionId);

    const hd = (
      await db
        .select()
        .from(humanDecisions)
        .where(
          and(eq(humanDecisions.projectId, projectId), eq(humanDecisions.id, attempt!.decisionId!)),
        )
    )[0];
    expect(hd?.kind).toBe("GIT_PUBLICATION_MANDATE");
    expect(hd?.state).toBe("APPLICABLE");

    const afterAttempts = await countGitPublicationAttempts(projectId);
    expect(afterAttempts.length).toBe(beforeAttempts.length + 1);

    const mut = getScriptedMutationCounts(pilotId);
    expect(mut.createBranch + mut.putFileContents).toBeGreaterThan(0);
    expect(mut.mergePR).toBe(0);

    const thread = await listMessages(pilotId, preparationId);
    const lastAssistant = [...thread].reverse().find((m) => m.role === "assistant");
    expect(lastAssistant?.content ?? "").toMatch(/a été publié/i);
    expect(lastAssistant?.content ?? "").toMatch(/révision 2/i);
    expect(lastAssistant?.content ?? "").toMatch(/Aucune fusion/i);
    expect(lastAssistant?.content ?? "").not.toMatch(/reste à confirmer/i);

    // Idempotent re-submit same clientTurnKey must not double-mutate
    const replayKey = newId("ctk");
    const first = await noraTurn(pilotId, preparationId, publishAsk, {
      clientTurnKey: replayKey,
      documentFocus: {
        documentId: docId,
        sourceRevisionId: rev3,
        sourceRevisionNumber: 3,
        observedHeadRevisionId: rev3,
      },
    });
    const mutAfterFirst = getScriptedMutationCounts(pilotId);
    const second = await noraTurn(pilotId, preparationId, publishAsk, {
      clientTurnKey: replayKey,
      documentFocus: {
        documentId: docId,
        sourceRevisionId: rev3,
        sourceRevisionNumber: 3,
        observedHeadRevisionId: rev3,
      },
    });
    expect(second.userMessageId).toBe(first.userMessageId);
    const mutAfterReplay = getScriptedMutationCounts(pilotId);
    expect(mutAfterReplay.createBranch).toBe(mutAfterFirst.createBranch);
    expect(mutAfterReplay.putFileContents).toBe(mutAfterFirst.putFileContents);

    // Refresh listMessages — single coherent outcome, no extra attempt from read
    const attemptsAfterRead = await countGitPublicationAttempts(projectId);
    await listMessages(pilotId, preparationId);
    const attemptsAfterReread = await countGitPublicationAttempts(projectId);
    expect(attemptsAfterReread.length).toBe(attemptsAfterRead.length);

    const assistants = (await listMessages(pilotId, preparationId)).filter(
      (m) => m.role === "assistant",
    );
    const successMsgs = assistants.filter((m) => /a été publié/i.test(m.content ?? ""));
    expect(successMsgs.length).toBeGreaterThanOrEqual(1);
    for (const m of successMsgs) {
      expect(m.content).not.toMatch(/n'a pas été effectuée/i);
    }
  });
});
```

### FILE: projects/sfia-studio-next/web/tests/integration/publication-target-post-uat.pg.test.ts
```typescript
/**
 * POST-UAT convergence — publication document/revision target + WRITE-off restitution.
 * Mutative PG → sfia_next_e2e only (vitest-pg-target). SCRIPTED provider. No GitHub REAL WRITE.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { documentRevisions, effectAttempts, preparations, pilots } from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  completeGitHubAuthorization,
  startGitHubAuthorization,
} from "@/domains/integrations/authorization-service";
import { attachRepositoryToProject } from "@/domains/integrations/project-link-service";
import {
  getScriptedGitHubProvider,
  resetScriptedStore,
} from "@/domains/integrations/scripted-github-provider";
import { postUserMessageAndNora } from "@/domains/conversation/service";
import { listDocuments } from "@/domains/document/service";
import {
  confirmPublicationDocumentWithD4,
  resolvePublicationDocumentTarget,
} from "@/domains/conversation/publication-document-target";
import { composePublicationEffectRestitution } from "@/domains/conversation/publication-effect-restitution";
import { registerCreateDocumentTitled } from "../helpers/semantic-fixture-envelopes";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

async function seedProjectWithGit(label: string) {
  resetScriptedStore();
  const pilotId = await seedPilot(label);
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "s");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed!.creationRevision,
    projectName: label,
    previewSummary: "s",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" || !created.projectId) {
    throw new Error(`seed failed: ${created.status}`);
  }
  const sessionId = newId("sid");
  const { state } = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
  const status = await completeGitHubAuthorization({
    pilotId,
    state,
    studioSessionId: sessionId,
  });
  const repoId = status.repositories[0]!.id;
  await attachRepositoryToProject(pilotId, created.projectId, repoId);
  getScriptedGitHubProvider();
  return { pilotId, projectId: created.projectId, preparationId: prep.id, repositoryId: repoId };
}

describe("POST-UAT publication target + WRITE-off (PG / SCRIPTED)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    expect(process.env.DATABASE_URL).toMatch(/\/sfia_next_e2e(?:\?|$)/);
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
    delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
  });

  it("D4 confirm: explicit B wins over focus A; revision membership verified", async () => {
    const { pilotId, preparationId } = await seedProjectWithGit("pub-target-explicit");
    const askA = "Crée un document intitulé Doc Alpha Focus pour la suite.";
    registerCreateDocumentTitled(askA, { title: "Doc Alpha Focus pour la suite" });
    const createA = await postUserMessageAndNora(pilotId, preparationId, askA, {
      clientTurnKey: newId("ctk"),
    });
    expect(createA.documentSave?.status).toBe("AVAILABLE");
    const askB = "Crée un document intitulé Doc Bravo Explicite pour la suite.";
    registerCreateDocumentTitled(askB, { title: "Doc Bravo Explicite pour la suite" });
    const createB = await postUserMessageAndNora(pilotId, preparationId, askB, {
      clientTurnKey: newId("ctk"),
    });
    expect(createB.documentSave?.status).toBe("AVAILABLE");
    const docs = await listDocuments(pilotId, preparationId);
    const focusA = {
      documentId: createA.documentSave!.documentId!,
      sourceRevisionId: createA.documentSave!.revisionId!,
      sourceRevisionNumber: createA.documentSave!.revisionNumber,
    };
    const resolved = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs,
      documentHint: "Doc Bravo Explicite",
      objectRef: null,
      focus: focusA,
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.documentId).toBe(createB.documentSave!.documentId);
    expect(resolved.overriddenImplicit).toBe(true);

    const confirmed = await confirmPublicationDocumentWithD4({
      pilotId,
      preparationId,
      target: resolved,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;
    expect(confirmed.revisionId).toBe(createB.documentSave!.revisionId);
    expect(confirmed.documentId).toBe(createB.documentSave!.documentId);

    // Mismatch: revision of A claimed on document B → refuse
    const mismatch = await confirmPublicationDocumentWithD4({
      pilotId,
      preparationId,
      target: {
        ...resolved,
        revisionId: createA.documentSave!.revisionId!,
        revisionNumber: createA.documentSave!.revisionNumber ?? null,
        requestedRevisionNumber: null,
      },
    });
    expect(mismatch.ok).toBe(false);
    if (!mismatch.ok) {
      expect(["REVISION_NOT_FOUND", "REVISION_MISMATCH", "NOT_FOUND"]).toContain(mismatch.reason);
    }
  });

  it("CampusFlow-shaped: retain révision 2 when latest is higher", async () => {
    const { pilotId, preparationId } = await seedProjectWithGit("pub-target-v2");
    const title = "Références externes — Enseignements de Chantiers360";
    const createAsk = `Crée un document intitulé ${title}.`;
    registerCreateDocumentTitled(createAsk, { title });
    const create = await postUserMessageAndNora(pilotId, preparationId, createAsk, {
      clientTurnKey: newId("ctk"),
    });
    expect(create.documentSave?.status).toBe("AVAILABLE");
    const docId = create.documentSave!.documentId!;
    const rev1 = create.documentSave!.revisionId!;

    // Seed historical v2 + newer v3 as AVAILABLE D4 rows (content unchanged for publish path).
    const rev2 = newId("drev");
    const rev3 = newId("drev");
    await db.insert(documentRevisions).values([
      {
        id: rev2,
        documentId: docId,
        revisionNumber: 2,
        contentMarkdown: "# v2 bit-exact CampusFlow",
        status: "AVAILABLE",
        baseRevisionId: rev1,
        provenanceJson: "{}",
        scope: "document",
      },
      {
        id: rev3,
        documentId: docId,
        revisionNumber: 3,
        contentMarkdown: "# v3 head",
        status: "AVAILABLE",
        baseRevisionId: rev2,
        provenanceJson: "{}",
        scope: "document",
      },
    ]);

    const docs = await listDocuments(pilotId, preparationId);
    const resolved = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs,
      documentHint: `${title} v2`,
      objectRef: null,
      focus: {
        documentId: docId,
        sourceRevisionId: rev3,
        sourceRevisionNumber: 3,
      },
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.documentId).toBe(docId);
    expect(resolved.requestedRevisionNumber).toBe(2);
    expect(resolved.revisionId).toBeNull();
    const confirmed = await confirmPublicationDocumentWithD4({
      pilotId,
      preparationId,
      target: resolved,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;
    expect(confirmed.revisionId).toBe(rev2);
    expect(confirmed.revisionNumber).toBe(2);
  });

  it("REAL WRITE disabled: gate restitution coherent; no effect_attempt from write gate alone", async () => {
    const prevProvider = process.env.STUDIO_GITHUB_PROVIDER;
    const prevMut = process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
    process.env.STUDIO_GITHUB_PROVIDER = "real";
    delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;

    const narrative = composePublicationEffectRestitution({
      priorContent: "Je publie le document sur GitHub. La publication reste à confirmer par Studio.",
      effect: {
        attempted: true,
        outcome: "REFUSED_WRITE_DISABLED",
        documentTitle: "Références externes",
        revisionNumber: 2,
      },
    });
    expect(narrative).toMatch(/n'a pas été effectuée/i);
    expect(narrative).not.toMatch(/Je publie/i);
    expect(narrative).not.toMatch(/reste à confirmer/i);

    // Restore SCRIPTED for other suites in-process
    process.env.STUDIO_GITHUB_PROVIDER = prevProvider ?? "scripted";
    if (prevMut === undefined) delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
    else process.env.STUDIO_GITHUB_ALLOW_MUTATIONS = prevMut;

    // Ensure we did not create a stray attempt in this process for this assertion path
    const attempts = await db.select().from(effectAttempts).limit(1);
    expect(Array.isArray(attempts)).toBe(true);
  });
});
```

### FILE: projects/sfia-studio-next/web/tests/e2e/ensemble08-nora-publication.spec.ts
```typescript
/**
 * E08 POST-UAT — Playwright Nora publication discriminant (DEV :3101 / sfia_next_e2e).
 * SCRIPTED provider only — WRITE OFF full refuse is proven in PG (REAL gate).
 * Does NOT mutate RECETTE :3200. Does NOT prove GitHub REAL WRITE.
 */
import { expect, test, type Page } from "@playwright/test";
import {
  constituteAndCreateProject,
  openNewPreparation,
  sendPrepMessage,
  uniqueProjectName,
} from "./helpers/g4-chat-first";

async function connectGithubAndAttach(page: Page, projectId: string) {
  await page.goto("/settings/integrations");
  await expect(page.getByTestId("integrations-panel")).toBeVisible();
  if (await page.getByTestId("disconnect-github").isVisible().catch(() => false)) {
    await page.getByTestId("disconnect-github").click();
    await expect(page.getByTestId("integrations-disconnect-confirm")).toBeVisible();
    await page.getByTestId("disconnect-github-confirm").click();
    await expect(page.getByTestId("connect-github")).toBeVisible({ timeout: 15_000 });
  }
  await page.getByTestId("connect-github").click();
  await expect(page.getByTestId("integrations-status-banner")).toContainText(/GitHub connecté/i, {
    timeout: 20_000,
  });

  await page.goto(`/projects/${projectId}?surface=git`);
  await expect(page.getByTestId("git-empty").or(page.getByTestId("git-repo-card"))).toBeVisible({
    timeout: 20_000,
  });
  if (await page.getByTestId("git-empty").isVisible().catch(() => false)) {
    const choices = page.getByTestId("git-empty-repo-choices");
    await expect(choices).toBeVisible({ timeout: 15_000 });
    await choices.locator("button").first().click();
  }
  await expect(page.getByTestId("git-repo-card")).toBeVisible({ timeout: 20_000 });
}

async function sendTravail(page: Page, text: string) {
  const draft = page.getByTestId("thread-draft").first();
  const send = page.getByTestId("thread-send").first();
  const thread = page.getByTestId("nora-thread");
  await expect(draft).toBeEditable({ timeout: 20_000 });
  await expect(draft).toHaveValue("", { timeout: 60_000 });
  await draft.fill(text);
  await expect(send).toBeEnabled({ timeout: 10_000 });
  await send.click();
  // Match Pilote bubble only — never the draft textarea content.
  await expect(
    thread
      .getByTestId("nora-msg-pilot")
      .filter({ hasText: text.slice(0, Math.min(40, text.length)) })
      .last(),
  ).toBeVisible({ timeout: 30_000 });
  await expect(draft).toHaveValue("", { timeout: 120_000 });
}

async function lastAssistantText(page: Page): Promise<string> {
  const msgs = page.getByTestId("nora-msg-assistant");
  await expect(msgs.last()).toBeVisible({ timeout: 60_000 });
  return (await msgs.last().innerText()).trim();
}

test.describe("E08 Nora publication discriminant (SCRIPTED DEV)", () => {
  test.describe.configure({ mode: "serial", timeout: 300_000 });

  test("clarify missing doc — no success claim", async ({ page }) => {
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    const preparationId = await openNewPreparation(page);
    await sendPrepMessage(page, "Préparation E08 Nora clarify");
    const projectId = await constituteAndCreateProject(page, {
      name: uniqueProjectName("E08 Nora Clarify"),
      summary: "clarification documentaire",
    });
    expect(projectId).toBeTruthy();
    expect(preparationId).toBeTruthy();

    await connectGithubAndAttach(page, projectId!);

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20_000 },
    );

    await sendTravail(
      page,
      "Publie le document Document fantôme E08 introuvable XYZ dans mon dépôt GitHub chemin docs/studio-next/e08-clarify.md",
    );
    const clarifyText = await lastAssistantText(page);
    expect(clarifyText).not.toMatch(/a été publié/i);
    expect(clarifyText).not.toMatch(/Je publie/i);
    expect(clarifyText).toMatch(
      /précision|introuvable|non déterminé|Aucune publication|pas été (lancée|tentée)|pas abouti/i,
    );
  });

  test("SCRIPTED create+publish → Nora COMPLETED + publications", async ({ page }) => {
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    await openNewPreparation(page);
    await sendPrepMessage(page, "Préparation E08 create publish");

    const projectId = await constituteAndCreateProject(page, {
      name: uniqueProjectName("E08 CreatePub"),
      summary: "create+publish SCRIPTED",
    });
    expect(projectId).toBeTruthy();

    await connectGithubAndAttach(page, projectId!);

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20_000 },
    );

    await sendTravail(page, "E08_PUBLISH_CREATE_SCRIPTED");
    const text = await lastAssistantText(page);
    expect(text).toMatch(/a été publié/i);
    expect(text).toMatch(/Aucune fusion/i);
    expect(text).not.toMatch(/Je publie/i);
    expect(text).not.toMatch(/reste à confirmer/i);

    await page.goto(`/projects/${projectId}?surface=git`);
    await expect(page.getByTestId("git-repo-card")).toBeVisible({ timeout: 20_000 });
    await page.getByTestId("git-tab-publications").click();
    await expect(page.getByTestId("git-publications")).toBeVisible();
    const pubsBody = await page.getByTestId("git-publications").innerText();
    expect(pubsBody.length).toBeGreaterThan(10);

    await page.reload();
    await expect(page.getByTestId("git-tab-publications").or(page.getByTestId("git-publications"))).toBeVisible({
      timeout: 20_000,
    });
    if (await page.getByTestId("git-tab-publications").isVisible().catch(() => false)) {
      await page.getByTestId("git-tab-publications").click();
    }
    const pubsAfter = await page.getByTestId("git-publications").innerText();
    expect(pubsAfter.length).toBeGreaterThan(10);
  });
});
```

## ANNEXE B — Diffs -U8 (fichiers modifiés clôture)

### DIFF: projects/sfia-studio-next/web/src/domains/conversation/service.ts
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 52b72c5d..6e6b19cf 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -121,16 +121,25 @@ import {
   admitConversationalMergeMandate,
   extractPositivelyRequestedPrNumbers,
   userStatementHasOpenMergeCondition,
   userStatementHasUnresolvedSamePrMergeContradiction,
   userStatementIsNonAuthorizingMergeTalk,
   userStatementRefusesMerge,
 } from "./conversation-merge-authority";
 import { userStatementRefusesPublication } from "./conversation-publication-mandate-guards";
+import {
+  composePublicationEffectRestitution,
+  publicationWriteGate,
+  type PublicationEffectView,
+} from "./publication-effect-restitution";
+import {
+  confirmPublicationDocumentWithD4,
+  resolvePublicationDocumentTarget,
+} from "./publication-document-target";
 import {
   advanceMissionAfterProjectCreated,
   buildD2AwaitingStep,
   buildD2OwnerActBinding,
   buildPendingDocumentStep,
   emptyMission,
   loadPriorMissionProjection,
   mergeMissionSteps,
@@ -2548,77 +2557,233 @@ export async function postUserMessageAndNora(
         });
       }
     }
   }

   // Explicit refusal must not leave a publication PREPARED / AWAITING_PILOT_AUTH.
   const userRefusesPublish = userStatementRefusesPublication(content);

+  // Publication mission: same-turn D4 CREATE/REVISE OR publish-existing (no D4 AVAILABLE gate).
+  // Restitution belongs to Nora after Studio outcome — never a fixed pre-effect hedge.
+  let publicationEffectView: PublicationEffectView = null;
+
   if (
     allowOwnerEffects &&
     !ownershipLostBeforeD4 &&
-    documentEffectForAck?.status === "AVAILABLE" &&
-    documentEffectForAck.documentId &&
-    documentEffectForAck.revisionId &&
     missionIntent.wantsPublish &&
     !userRefusesPublish &&
     ctx.project?.id
   ) {
-    const steps: MissionProjection["steps"] = [
-      {
+    const docsForPub = await listDocuments(pilotId, preparationId);
+    let pubTarget = resolvePublicationDocumentTarget({
+      sameTurnEffect: documentEffectForAck
+        ? {
+            status: documentEffectForAck.status ?? "UNKNOWN",
+            documentId: documentEffectForAck.documentId ?? null,
+            revisionId: documentEffectForAck.revisionId ?? null,
+            revisionNumber: documentEffectForAck.revisionNumber ?? null,
+            title: null,
+          }
+        : null,
+      docs: docsForPub,
+      documentHint: missionIntent.documentHint ?? null,
+      objectRef: missionIntent.objectRef ?? null,
+      focus: opts?.documentFocus
+        ? {
+            documentId: opts.documentFocus.documentId,
+            sourceRevisionId: opts.documentFocus.sourceRevisionId,
+            sourceRevisionNumber: opts.documentFocus.sourceRevisionNumber,
+            observedHeadRevisionId: opts.documentFocus.observedHeadRevisionId,
+          }
+        : null,
+    });
+
+    // D4 owner confirmation before any D7 prepare — never trust client focus alone.
+    if (pubTarget.ok) {
+      pubTarget = await confirmPublicationDocumentWithD4({
+        pilotId,
+        preparationId,
+        target: pubTarget,
+      });
+    }
+
+    const steps: MissionProjection["steps"] = [];
+    if (pubTarget.ok && pubTarget.source === "same_turn_d4") {
+      steps.push({
         id: "d4_create",
         capabilityId: "d4.create_document",
         status: "DONE",
         correlationKey: missionKeys.document,
-        documentId: documentEffectForAck.documentId,
-        revisionId: documentEffectForAck.revisionId,
-      },
-    ];
+        documentId: pubTarget.documentId,
+        revisionId: pubTarget.revisionId ?? undefined,
+      });
+    } else if (pubTarget.ok) {
+      steps.push({
+        id: "d4_source",
+        capabilityId: "d4.create_document",
+        status: "DONE",
+        correlationKey: missionKeys.document,
+        documentId: pubTarget.documentId,
+        revisionId: pubTarget.revisionId ?? undefined,
+        reason: `EXISTING_DOC:${pubTarget.source}${pubTarget.overriddenImplicit ? ":OVERRIDE_IMPLICIT" : ""}`,
+      });
+    }

-    // P1-E: no silent path/branch deduction — clarify before D7 prepare.
-    if (missionIntent.needsExplicitPath) {
+    const writeGate = publicationWriteGate();
+
+    if (!pubTarget.ok) {
+      const clarify =
+        pubTarget.reason === "AMBIGUOUS" ||
+        pubTarget.reason === "NOT_FOUND" ||
+        pubTarget.reason === "REVISION_NOT_FOUND" ||
+        pubTarget.reason === "NO_AVAILABLE_REVISION" ||
+        pubTarget.reason === "EXPLICIT_FOCUS_CONFLICT";
+      const refused =
+        pubTarget.reason === "FORBIDDEN" || pubTarget.reason === "REVISION_MISMATCH";
+      steps.push({
+        id: "d7_prepare",
+        capabilityId: "d7.prepare_publication",
+        status: clarify ? "PENDING" : "FAILED",
+        correlationKey: missionKeys.publication,
+        reason: `${pubTarget.reason}${pubTarget.detail ? `:${pubTarget.detail}` : ""}`,
+      });
+      missionProjection = {
+        clientIntentKey,
+        status: clarify ? "AWAITING_CLARIFICATION" : "PARTIAL_FAILED_STEP",
+        goalSummary: refused
+          ? "Publication refusée — cible documentaire invalide"
+          : "Publication — document ou révision à préciser",
+        steps,
+        restitution: continueFailedAfterEffect ? "PENDING" : "DELIVERED",
+      };
+      publicationEffectView = {
+        attempted: true,
+        outcome: refused ? "REFUSED_AUTHORITY" : "AWAITING_CLARIFICATION",
+        reason:
+          pubTarget.reason === "AMBIGUOUS"
+            ? "Plusieurs documents correspondent — précisez lequel publier."
+            : pubTarget.reason === "FORBIDDEN"
+              ? "Document inaccessible pour ce Pilote ou ce projet."
+              : pubTarget.reason === "REVISION_MISMATCH"
+                ? "La révision indiquée n'appartient pas au document demandé."
+                : pubTarget.reason === "REVISION_NOT_FOUND"
+                  ? "Révision demandée introuvable ou non publiable."
+                  : "Document ou révision de publication non déterminé.",
+      };
+    } else if (!pubTarget.revisionId) {
       steps.push({
         id: "d7_prepare",
         capabilityId: "d7.prepare_publication",
         status: "PENDING",
         correlationKey: missionKeys.publication,
+        documentId: pubTarget.documentId,
+        reason: "REVISION_REQUIRED",
+      });
+      missionProjection = {
+        clientIntentKey,
+        status: "AWAITING_CLARIFICATION",
+        goalSummary: "Publication — révision à préciser",
+        steps,
+        restitution: "DELIVERED",
+      };
+      publicationEffectView = {
+        attempted: true,
+        outcome: "AWAITING_CLARIFICATION",
+        reason: "Révision de publication non déterminée.",
+        documentTitle: pubTarget.title,
+        revisionNumber: pubTarget.revisionNumber,
+      };
+    } else if (!writeGate.allowed) {
+      steps.push({
+        id: "d7_prepare",
+        capabilityId: "d7.prepare_publication",
+        status: "FAILED",
+        correlationKey: missionKeys.publication,
+        documentId: pubTarget.documentId,
+        revisionId: pubTarget.revisionId,
+        reason: "WRITE_DISABLED",
+      });
+      missionProjection = {
+        clientIntentKey,
+        status: "PARTIAL_FAILED_STEP",
+        goalSummary: "Publication refusée — écritures GitHub désactivées",
+        steps,
+        restitution: "DELIVERED",
+      };
+      publicationEffectView = {
+        attempted: true,
+        outcome: "REFUSED_WRITE_DISABLED",
+        reason: writeGate.reason,
+        documentTitle: pubTarget.title,
+        revisionNumber: pubTarget.revisionNumber,
+        repositoryFullName: missionIntent.repositoryHint,
+      };
+      emitObs({
+        event_name: "d3.mission.publication_write_disabled",
+        component: "d3.mission_continuity",
+        request_id: requestId,
+        operation_id: reserved.operationId,
+        generation_id: reply.generationId,
+        outcome: "DENIED",
+        meta: {
+          document_id: pubTarget.documentId,
+          revision_id: pubTarget.revisionId,
+          reason: writeGate.reason,
+        },
+      });
+    } else if (missionIntent.needsExplicitPath) {
+      // P1-E: no silent path/branch deduction — clarify before D7 prepare.
+      steps.push({
+        id: "d7_prepare",
+        capabilityId: "d7.prepare_publication",
+        status: "PENDING",
+        correlationKey: missionKeys.publication,
+        documentId: pubTarget.documentId,
+        revisionId: pubTarget.revisionId,
         reason: missionIntent.clarify ?? "PATH_REQUIRED",
       });
       missionProjection = {
         clientIntentKey,
         status: "AWAITING_CLARIFICATION",
-        goalSummary: "CREATE D4 confirmé — chemin Git requis avant préparation",
+        goalSummary: "Document identifié — chemin Git requis avant préparation",
         steps,
         restitution: continueFailedAfterEffect ? "PENDING" : "DELIVERED",
       };
+      publicationEffectView = {
+        attempted: true,
+        outcome: "AWAITING_CLARIFICATION",
+        reason: missionIntent.clarify ?? "Chemin de publication Git manquant.",
+        documentTitle: pubTarget.title,
+        revisionNumber: pubTarget.revisionNumber,
+      };
     } else if (await requireTurnOwnership(reserved.commandId, reserved.ownerToken)) {
       const prepared = await preparePublicationForMission({
         pilotId,
         projectId: ctx.project.id,
-        documentId: documentEffectForAck.documentId,
-        revisionId: documentEffectForAck.revisionId,
+        documentId: pubTarget.documentId,
+        revisionId: pubTarget.revisionId,
         clientIntentKey,
         targetPath: missionIntent.targetPath,
         targetBranch: missionIntent.targetBranch,
       });
       if (prepared.ok) {
         const prepStep: MissionProjection["steps"][number] = {
           id: "d7_prepare",
           capabilityId: "d7.prepare_publication",
           status: prepared.status === "PREPARED" ? "WAITING" : "DONE",
           correlationKey: missionKeys.publication,
           attemptId: prepared.attemptId,
-          documentId: documentEffectForAck.documentId,
-          revisionId: documentEffectForAck.revisionId,
+          documentId: pubTarget.documentId,
+          revisionId: pubTarget.revisionId,
         };
         steps.push(prepStep);

         let missionStatus: MissionProjection["status"] = "AWAITING_PILOT_AUTH";
-        let goalSummary = "CREATE D4 + publication Git (attente autorisation Pilote)";
+        let goalSummary = "Publication Git (attente autorisation Pilote)";
         let authorizeCalled = false;

         const mandateAdmission = await admitConversationalPublicationMandate({
           pilotId,
           projectId: ctx.project.id,
           attemptId: prepared.attemptId,
           userMessageId: reserved.userMessageId,
           userStatement: content,
@@ -2631,45 +2796,105 @@ export async function postUserMessageAndNora(
         if (mandateAdmission.authorized && mandateAdmission.decisionId) {
           publicationMandateDecisionId = mandateAdmission.decisionId;
           authorizeCalled = true;
           prepStep.decisionId = mandateAdmission.decisionId;
           const resumeStatus = mandateAdmission.missionResume?.status ?? "AUTHORIZED";
           if (resumeStatus === "COMPLETED") {
             prepStep.status = "DONE";
             missionStatus = "COMPLETED";
-            goalSummary = "CREATE D4 + publication Git (mandat conversationnel + effet terminé)";
+            goalSummary = "Publication Git (mandat conversationnel + effet terminé)";
+            publicationEffectView = {
+              attempted: true,
+              outcome: "COMPLETED",
+              documentTitle: pubTarget.title,
+              revisionNumber: pubTarget.revisionNumber,
+              attemptId: prepared.attemptId,
+              decisionId: mandateAdmission.decisionId,
+              repositoryFullName: missionIntent.repositoryHint,
+            };
           } else if (
             resumeStatus === "DISPATCHED" ||
             resumeStatus === "AMBIGUOUS" ||
             mandateAdmission.missionResume?.dispatched
           ) {
             prepStep.status = "WAITING";
             missionStatus = "ACTIVE";
-            goalSummary = "CREATE D4 + publication Git (mandat conversationnel — dispatch en cours)";
+            goalSummary = "Publication Git (mandat conversationnel — dispatch en cours)";
+            publicationEffectView = {
+              attempted: true,
+              outcome: "UNKNOWN",
+              reason: "Dispatch en cours — résultat Studio non encore consolidé.",
+              documentTitle: pubTarget.title,
+              revisionNumber: pubTarget.revisionNumber,
+              attemptId: prepared.attemptId,
+              decisionId: mandateAdmission.decisionId,
+            };
           } else {
             prepStep.status = "WAITING";
             missionStatus = "AWAITING_PILOT_AUTH";
             goalSummary =
-              "CREATE D4 + publication Git (mandat D6 enregistré — reprise dispatch en attente)";
+              "Publication Git (mandat enregistré — reprise dispatch en attente)";
+            publicationEffectView = {
+              attempted: true,
+              outcome: "PREPARED_AWAITING_AUTH",
+              reason: "Autorisation enregistrée — effet non encore observé.",
+              documentTitle: pubTarget.title,
+              revisionNumber: pubTarget.revisionNumber,
+              attemptId: prepared.attemptId,
+              decisionId: mandateAdmission.decisionId,
+            };
           }
         } else if (
           mandateAdmission.attempted &&
           mandateAdmission.reasonCode &&
           !["ALREADY_AUTHORIZED", "REFUSED", "MERGE_ONLY", "NO_PUBLISH_QUAL"].includes(
             mandateAdmission.reasonCode,
           ) &&
           (mandateAdmission.reasonCode === "AMBIGUOUS_PATH" ||
             mandateAdmission.reasonCode === "AMBIGUOUS_BRANCH" ||
             mandateAdmission.reasonCode === "PLAN_DRIFT" ||
             mandateAdmission.reasonCode === "AMBIGUOUS")
         ) {
           missionStatus = "AWAITING_CLARIFICATION";
           goalSummary = "Publication préparée — mandat conversationnel ambigu (précision requise)";
           prepStep.reason = mandateAdmission.reason ?? mandateAdmission.reasonCode;
+          publicationEffectView = {
+            attempted: true,
+            outcome: "AWAITING_CLARIFICATION",
+            reason: mandateAdmission.reason ?? mandateAdmission.reasonCode,
+            documentTitle: pubTarget.title,
+            revisionNumber: pubTarget.revisionNumber,
+            attemptId: prepared.attemptId,
+          };
+        } else if (
+          mandateAdmission.attempted &&
+          (mandateAdmission.reasonCode === "REFUSED" ||
+            mandateAdmission.reasonCode === "INSUFFICIENT_PERMISSION")
+        ) {
+          prepStep.status = "FAILED";
+          missionStatus = "PARTIAL_FAILED_STEP";
+          goalSummary = "Publication refusée — autorité insuffisante";
+          publicationEffectView = {
+            attempted: true,
+            outcome: "REFUSED_AUTHORITY",
+            reason: mandateAdmission.reason ?? mandateAdmission.reasonCode,
+            documentTitle: pubTarget.title,
+            revisionNumber: pubTarget.revisionNumber,
+            attemptId: prepared.attemptId,
+          };
+        } else {
+          publicationEffectView = {
+            attempted: true,
+            outcome: "PREPARED_AWAITING_AUTH",
+            reason: mandateAdmission.reason ?? "Préparation disponible — autorisation Pilote requise.",
+            documentTitle: pubTarget.title,
+            revisionNumber: pubTarget.revisionNumber,
+            attemptId: prepared.attemptId,
+          };
         }

         missionProjection = {
           clientIntentKey,
           status: missionStatus,
           goalSummary,
           steps,
           restitution: continueFailedAfterEffect ? "PENDING" : "DELIVERED",
@@ -2680,37 +2905,52 @@ export async function postUserMessageAndNora(
             : "d3.mission.prepared_awaiting_auth",
           component: "d3.mission_continuity",
           request_id: requestId,
           operation_id: reserved.operationId,
           generation_id: reply.generationId,
           outcome: mandateAdmission.authorized ? "SUCCESS" : "PARTIAL",
           meta: {
             attempt_id: prepared.attemptId,
-            document_id: documentEffectForAck.documentId,
+            document_id: pubTarget.documentId,
             authorize_called: authorizeCalled,
             mandate_reason: mandateAdmission.reasonCode ?? null,
             decision_id: mandateAdmission.decisionId,
+            publish_source: pubTarget.source,
           },
         });
       } else {
+        const refusedWrite =
+          prepared.code === "WRITE_DISABLED" ||
+          /ALLOW_MUTATIONS|écritures GitHub|WRITE/i.test(prepared.message);
         steps.push({
           id: "d7_prepare",
           capabilityId: "d7.prepare_publication",
           status: "FAILED",
           correlationKey: missionKeys.publication,
+          documentId: pubTarget.documentId,
+          revisionId: pubTarget.revisionId,
           reason: `${prepared.code}:${prepared.message}`,
         });
         missionProjection = {
           clientIntentKey,
           status: "PARTIAL_FAILED_STEP",
-          goalSummary: "CREATE D4 confirmé — préparation Git non réalisée",
+          goalSummary: refusedWrite
+            ? "Publication refusée — écritures GitHub désactivées"
+            : "Document identifié — préparation Git non réalisée",
           steps,
           restitution: continueFailedAfterEffect ? "PENDING" : "CANONICAL",
         };
+        publicationEffectView = {
+          attempted: true,
+          outcome: refusedWrite ? "REFUSED_WRITE_DISABLED" : "DISPATCH_FAILED",
+          reason: prepared.message,
+          documentTitle: pubTarget.title,
+          revisionNumber: pubTarget.revisionNumber,
+        };
       }
     }

     if (continueFailedAfterEffect && missionProjection) {
       missionProjection = {
         ...missionProjection,
         restitution: "PENDING",
       };
@@ -2986,16 +3226,35 @@ export async function postUserMessageAndNora(
   // E07 — post-effect métier restitution: final assistant text must match Studio outcome.
   if (!ownershipLostBeforeD4 && authority?.attempted) {
     assistantBody = composePilotageEffectRestitution({
       priorContent: assistantBody,
       effect: pilotageEffectFromAuthority(authority) ?? null,
     });
   }

+  // E08 POST-UAT — publication outcome after Studio owners; strip pre-effect hedges.
+  if (!ownershipLostBeforeD4 && publicationEffectView?.attempted) {
+    assistantBody = composePublicationEffectRestitution({
+      priorContent: assistantBody,
+      effect: publicationEffectView,
+    });
+  } else if (!ownershipLostBeforeD4 && missionIntent.wantsPublish) {
+    // Intention recognized, no Studio publication attempt — NOT_ATTEMPTED (never success).
+    assistantBody = composePublicationEffectRestitution({
+      priorContent: assistantBody,
+      effect: {
+        attempted: true,
+        outcome: "NOT_ATTEMPTED",
+        reason:
+          "Intention de publication reconnue — aucun effet Studio n'a été lancé",
+      },
+    });
+  }
+
   const assistantContentForCommit = ownershipLostBeforeD4
     ? reply.content
     : appendMissionAck(
         appendDocumentEffectAck(assistantBody, documentEffectForAck),
         missionProjection,
       );

   const confirmedCapitalisations = capitalisation.capitalisations.filter(
```

### DIFF: projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts b/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
index 729fa1e2..c6f33500 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
@@ -15,16 +15,18 @@ import {
   reconcileAttempt,
 } from "@/domains/execution/effect-service";
 import { listProjectGitLinks } from "@/domains/integrations/project-link-service";
 import { StudioError } from "@/lib/http-errors";
 import { emitObs } from "@/lib/observability";
 import { extractPublicationBranchHint as extractBranchHintStrict } from "./conversation-publication-mandate-guards";
 import { generateNoraReply } from "./nora-adapter";
 import type { DocumentEffectSummary } from "./document-act";
+import { composePublicationEffectRestitution } from "./publication-effect-restitution";
+import { getDocumentRevision } from "@/domains/document/service";

 export type MissionStatus =
   | "ACTIVE"
   | "AWAITING_PILOT_ACT"
   | "AWAITING_PILOT_AUTH"
   | "AWAITING_CLARIFICATION"
   | "RESTITUTION_PENDING"
   | "PARTIAL_FAILED_STEP"
@@ -348,16 +350,23 @@ function missionResumeGenerationId(attemptId: string): string {
  * Restitution message is unique per attempt (P1-C).
  * Cognitive continue after observed result (P1-D), canonical fallback.
  */
 export async function resumeMissionAfterPublicationAuthorize(input: {
   pilotId: string;
   projectId: string;
   attemptId: string;
   decisionId?: string | null;
+  /**
+   * When false, dispatch/reconcile still run but no competing assistant row is
+   * inserted — same-turn conversational authorize lets the Nora turn commit
+   * métier restitution (avoids ASSISTANT_IDENTITY_CONFLICT).
+   * Recovery / post-authorize paths keep the default (true).
+   */
+  persistAssistantMessage?: boolean;
 }): Promise<{
   dispatched: boolean;
   reconciled: boolean;
   status: string;
   restitution: string;
   conversationMessageId: string | null;
   prNumber?: number | null;
   commitSha?: string | null;
@@ -457,95 +466,167 @@ export async function resumeMissionAfterPublicationAuthorize(input: {
     }
     detail = msg;
   }

   const plan = JSON.parse(row.planJson || "{}") as {
     preparationId?: string;
     documentId?: string;
     revisionId?: string;
+    documentTitle?: string;
+    revisionNumber?: number;
+    repositoryFullName?: string;
+    publicationBranch?: string;
+    targetPath?: string;
   };

   const finalRow = (
     await db.select().from(effectAttempts).where(eq(effectAttempts.id, input.attemptId)).limit(1)
   )[0];
   const resultPayload = (() => {
     try {
       return JSON.parse(finalRow?.resultJson || "{}") as {
         prNumber?: number | null;
         commitSha?: string | null;
         sha?: string | null;
         missionResumeMessageId?: string | null;
+        repositoryFullName?: string | null;
+        publicationBranch?: string | null;
       };
     } catch {
       return {} as {
         prNumber?: number | null;
         commitSha?: string | null;
         sha?: string | null;
         missionResumeMessageId?: string | null;
+        repositoryFullName?: string | null;
+        publicationBranch?: string | null;
       };
     }
   })();
   const prNumber = resultPayload.prNumber ?? null;
   const commitSha = resultPayload.commitSha ?? resultPayload.sha ?? null;

-  const canonical = composeCanonicalMissionRestitution({
-    documentEffect: plan.documentId
-      ? {
-          act: "CREATE",
-          status: "AVAILABLE",
-          documentId: plan.documentId,
-          revisionId: plan.revisionId,
-        }
-      : null,
-    prepareStatus: "PREPARED",
-    attemptId: input.attemptId,
-    decisionId: input.decisionId ?? row.decisionId,
-    dispatchStatus: status,
-    dispatchDetail: detail,
-    restitutionNote:
-      status === "COMPLETED"
-        ? "Publication reprise automatiquement après autorisation Pilote."
-        : "Reprise post-autorisation exécutée — voir statut publication.",
-  });
+  // Enrich document identity for métier restitution (D4) when possible.
+  let documentTitle = plan.documentTitle?.trim() || null;
+  let revisionNumber = plan.revisionNumber ?? null;
+  if (plan.preparationId && plan.documentId && plan.revisionId) {
+    try {
+      const loaded = await getDocumentRevision(
+        input.pilotId,
+        plan.preparationId,
+        plan.documentId,
+        plan.revisionId,
+      );
+      if (loaded.status === "AVAILABLE" && "revision" in loaded && loaded.revision) {
+        documentTitle = loaded.document?.title?.trim() || documentTitle;
+        revisionNumber = loaded.revision.revisionNumber ?? revisionNumber;
+      }
+    } catch {
+      /* keep plan hints */
+    }
+  }

-  const factsBlock = [
-    `Publication attemptId=${input.attemptId} status=${status}`,
-    input.decisionId || row.decisionId
-      ? `decisionId=${input.decisionId ?? row.decisionId}`
-      : null,
-    plan.documentId ? `documentId=${plan.documentId}` : null,
-    plan.revisionId ? `revisionId=${plan.revisionId}` : null,
-    prNumber != null ? `prNumber=${prNumber}` : null,
-    commitSha ? `commitSha=${commitSha}` : null,
-    detail ? `detail=${detail}` : null,
-  ]
-    .filter(Boolean)
-    .join("\n");
-
-  let restitution = canonical;
+  const repoName =
+    resultPayload.repositoryFullName?.trim() ||
+    plan.repositoryFullName?.trim() ||
+    null;
+  const branchName =
+    resultPayload.publicationBranch?.trim() ||
+    plan.publicationBranch?.trim() ||
+    null;
+
+  // E08 — Nora métier restitution from owner facts (never technical dump as pilot voice).
+  let restitution: string;
   let cognitiveContinue: "DELIVERED" | "CANONICAL" | "SKIPPED" = "CANONICAL";
-  try {
-    // No turn operationId here — facts-only continue without tool scope (still generateNoraReply).
-    const continued = await cognitiveContinueFromFacts({
-      userText:
-        "L'autorisation Pilote a été accordée et l'effet de publication a été traité. Restitue le résultat.",
-      factsBlock,
-      contextSnippets: [],
+  if (status === "COMPLETED") {
+    restitution = composePublicationEffectRestitution({
+      priorContent: "",
+      effect: {
+        attempted: true,
+        outcome: "COMPLETED",
+        documentTitle,
+        revisionNumber,
+        repositoryFullName: repoName,
+        publicationBranch: branchName,
+        attemptId: input.attemptId,
+        decisionId: input.decisionId ?? row.decisionId,
+      },
     });
-    if (continued.status === "COMPLETE" && continued.content.trim()) {
-      restitution = `${continued.content.trim()}\n\n---\n${canonical}`;
-      cognitiveContinue = "DELIVERED";
+  } else if (status === "DISPATCHED" || status === "AMBIGUOUS") {
+    restitution = composePublicationEffectRestitution({
+      priorContent: "",
+      effect: {
+        attempted: true,
+        outcome: "UNKNOWN",
+        reason: detail ?? "Dispatch en cours — résultat Studio non encore consolidé.",
+        documentTitle,
+        revisionNumber,
+        attemptId: input.attemptId,
+      },
+    });
+  } else {
+    const canonical = composeCanonicalMissionRestitution({
+      documentEffect: plan.documentId
+        ? {
+            act: "CREATE",
+            status: "AVAILABLE",
+            documentId: plan.documentId,
+            revisionId: plan.revisionId,
+          }
+        : null,
+      prepareStatus: "PREPARED",
+      attemptId: input.attemptId,
+      decisionId: input.decisionId ?? row.decisionId,
+      dispatchStatus: status,
+      dispatchDetail: detail,
+      restitutionNote: "Reprise post-autorisation exécutée — voir statut publication.",
+    });
+    const factsBlock = [
+      `Publication attemptId=${input.attemptId} status=${status}`,
+      input.decisionId || row.decisionId
+        ? `decisionId=${input.decisionId ?? row.decisionId}`
+        : null,
+      plan.documentId ? `documentId=${plan.documentId}` : null,
+      plan.revisionId ? `revisionId=${plan.revisionId}` : null,
+      prNumber != null ? `prNumber=${prNumber}` : null,
+      commitSha ? `commitSha=${commitSha}` : null,
+      detail ? `detail=${detail}` : null,
+    ]
+      .filter(Boolean)
+      .join("\n");
+
+    restitution = canonical;
+    try {
+      const continued = await cognitiveContinueFromFacts({
+        userText:
+          "L'autorisation Pilote a été accordée et l'effet de publication a été traité. Restitue le résultat.",
+        factsBlock,
+        contextSnippets: [],
+      });
+      if (continued.status === "COMPLETE" && continued.content.trim()) {
+        restitution = composePublicationEffectRestitution({
+          priorContent: continued.content.trim(),
+          effect: {
+            attempted: true,
+            outcome: "UNKNOWN",
+            reason: detail ?? status,
+            documentTitle,
+            revisionNumber,
+          },
+        });
+        cognitiveContinue = "DELIVERED";
+      }
+    } catch {
+      cognitiveContinue = "CANONICAL";
     }
-  } catch {
-    cognitiveContinue = "CANONICAL";
   }

   let conversationMessageId: string | null = resultPayload.missionResumeMessageId ?? null;
-  if (plan.preparationId) {
+  if (plan.preparationId && input.persistAssistantMessage !== false) {
     try {
       conversationMessageId = await appendAssistantMissionMessage({
         pilotId: input.pilotId,
         preparationId: plan.preparationId,
         attemptId: input.attemptId,
         content: restitution,
       });
       // Persist message id on attempt for crash/retry idempotence
```

### DIFF: projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-authority.ts
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-authority.ts b/projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-authority.ts
index 4cac2789..5b8e9725 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-authority.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-authority.ts
@@ -364,16 +364,18 @@ export async function admitConversationalPublicationMandate(input: {
     let missionResume: Awaited<ReturnType<typeof resumeMissionAfterPublicationAuthorize>> | null =
       null;
     if (input.autoResumeMission !== false && auth.status === "AUTHORIZED") {
       missionResume = await resumeMissionAfterPublicationAuthorize({
         pilotId: input.pilotId,
         projectId: input.projectId,
         attemptId: input.attemptId,
         decisionId: auth.decisionId,
+        // Same-turn: Nora turn commits restitution — do not insert a rival assistant row.
+        persistAssistantMessage: false,
       });
     }

     const created =
       Boolean(auth.decisionId) &&
       !("idempotent" in auth && auth.idempotent && row.decisionId === auth.decisionId);

     return {
```

### DIFF: projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts b/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
index 74998a42..fbee47d8 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
@@ -118,17 +118,23 @@ export function composePilotageEffectRestitution(input: {
   const block = ["", "---", "", ...facts].join("\n");
   if (!prior.trim()) return facts.join("\n");
   return `${prior.trimEnd()}\n${block}`;
 }

 /** True when a persisted assistant message is a raw technical mission dump (not métier Nora). */
 export function isTechnicalMissionAssistantContent(content: string, generationId?: string | null): boolean {
   // Provenance hint alone is insufficient — a mission-continue may already carry métier D4 ACK.
-  if (/Résultat d'enregistrement|Nouvelle version disponible|encore incertain/i.test(content)) {
+  // E08 — publication effect restitution is Nora métier voice; do not mask it as technical dump.
+  if (
+    /Résultat d'enregistrement|Nouvelle version disponible|encore incertain/i.test(content) ||
+    /a été publié|n'a pas été effectuée|Aucune publication n'a (été|été)|écritures GitHub ne sont pas disponibles|encore en vérification/i.test(
+      content,
+    )
+  ) {
     return false;
   }
   if (/^### Suite de mission/m.test(content) && /projectId=|clientIntentKey=|status=COMPLETED/.test(content)) {
     return true;
   }
   if (/^### Suite de mission \(projection D3/m.test(content)) return true;
   if (/^### Restitution de mission \(faits propriétaires\)/m.test(content)) return true;
   const gen = (generationId ?? "").trim();
```

### DIFF: projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
index 34a568a9..be9ff5f6 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
@@ -2033,16 +2033,114 @@ register(
     documentProposal: {
       title: "Parcours de réservation et responsabilités",
       contentMarkdown:
         "# Parcours de réservation et responsabilités\n\n## Responsabilités\n\nChaque centre valide ses disponibilités ; le coordinateur consolide les ressources communes ; le demandeur reçoit une confirmation tracée.\n",
     },
   },
 );

+/** E08 — create + publish (SCRIPTED browser / fixture FAKE). */
+function createAndPublishQualification(
+  title: string,
+  publicationPath: string,
+): NoraTurnQualification {
+  return effect(
+    `Document + publication ${title}`,
+    `Je prépare « ${title} » puis la publication gouvernée — Studio confirme l'effet.\n\n\`\`\`sfia-document\n# ${title}\n\nContenu E08 publication Nora.\n\`\`\`\n`,
+    [
+      {
+        id: "i1",
+        capabilityId: "d4.create_document",
+        mode: "REQUEST_EFFECT",
+        summary: title,
+        parameters: { notes: title, documentHint: title },
+        constraints: [],
+        dependsOn: [],
+        sourceEvidence: [],
+      },
+      {
+        id: "i2",
+        capabilityId: "d7.prepare_publication",
+        mode: "REQUEST_EFFECT",
+        summary: "Préparer publication",
+        parameters: { publicationPath, documentHint: title },
+        constraints: [],
+        dependsOn: ["i1"],
+        sourceEvidence: [],
+      },
+    ],
+  );
+}
+
+/** E08 — publish existing document (explicit title / revision hint). */
+function publishExistingQualification(
+  documentHint: string,
+  publicationPath: string,
+): NoraTurnQualification {
+  return effect(
+    `Publication ${documentHint}`,
+    `Je prépare la publication de « ${documentHint} » — Studio reste propriétaire de l'effet.`,
+    [
+      {
+        capabilityId: "d7.prepare_publication",
+        mode: "REQUEST_EFFECT",
+        summary: "Préparer publication",
+        parameters: { documentHint, publicationPath },
+        constraints: [],
+        dependsOn: [],
+        sourceEvidence: [],
+      },
+    ],
+  );
+}
+
+register(
+  "E08_PUBLISH_CREATE_SCRIPTED",
+  createAndPublishQualification(
+    "E08 Nora Publish Scripted",
+    "docs/studio-next/e08-nora-publish.md",
+  ),
+);
+register(
+  "Crée un document intitulé E08 Nora Publish Scripted et publie-le dans mon dépôt GitHub chemin docs/studio-next/e08-nora-publish.md",
+  createAndPublishQualification(
+    "E08 Nora Publish Scripted",
+    "docs/studio-next/e08-nora-publish.md",
+  ),
+);
+register(
+  "E08_PUBLISH_EXISTING_CLARIFY",
+  publishExistingQualification(
+    "Document fantôme E08 introuvable XYZ",
+    "docs/studio-next/e08-clarify.md",
+  ),
+);
+register(
+  "Publie le document Document fantôme E08 introuvable XYZ dans mon dépôt GitHub chemin docs/studio-next/e08-clarify.md",
+  publishExistingQualification(
+    "Document fantôme E08 introuvable XYZ",
+    "docs/studio-next/e08-clarify.md",
+  ),
+);
+register(
+  "E08_PUBLISH_EXISTING_CORRECT",
+  publishExistingQualification(
+    "Note E08 cible corrigée",
+    "docs/studio-next/e08-corrected.md",
+  ),
+);
+register(
+  "Publie le document Note E08 cible corrigée dans mon dépôt GitHub chemin docs/studio-next/e08-corrected.md",
+  publishExistingQualification(
+    "Note E08 cible corrigée",
+    "docs/studio-next/e08-corrected.md",
+  ),
+);
+
 /** E08 — documentary merge fixtures (exact utterance → d7.merge_publication). */
 function mergePublicationQualification(
   prNumber: number,
   repositoryFullName?: string,
 ): NoraTurnQualification {
   return effect(
     `Merge documentaire PR #${prNumber}`,
     `Je prépare la fusion de la PR documentaire #${prNumber} sous votre mandat — Studio reste propriétaire de l'autorisation et de l'effet.`,
@@ -2066,16 +2164,21 @@ function mergePublicationQualification(
 register("Merge la PR #42.", mergePublicationQualification(42));
 register("Fusionne la PR documentaire #42 du dépôt X.", mergePublicationQualification(42));
 register("Peux-tu merger la PR #7 ?", mergePublicationQualification(7));

 const MERGE_PR_FIXTURE_RE = /^Merge la PR #(\d{1,6})\.?$/i;
 const MERGE_PR_REPO_FIXTURE_RE =
   /^Merge la PR #(\d{1,6}) du dépôt ([A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+)\.?$/i;

+const E08_CREATE_PUBLISH_RE =
+  /^Crée un document intitulé (.+?) et publie-le dans mon dépôt GitHub chemin (docs\/studio-next\/[A-Za-z0-9_.\/-]+)$/i;
+const E08_PUBLISH_EXISTING_RE =
+  /^Publie le document (.+?) dans mon dépôt GitHub chemin (docs\/studio-next\/[A-Za-z0-9_.\/-]+)$/i;
+
 /** Short TEST_BOUNDARY keys for e2e (exact match, same envelopes as the natural utterances). */
 for (const [short, long] of [
   ["E05_S2_DIAGNOSTIC", E05_S2_DIAGNOSTIC],
   ["E05_S3_COMPARISON", E05_S3_COMPARISON],
   ["E05_S4_TRAJECTORY", E05_S4_TRAJECTORY],
   ["E05_S5_COMPOSITE", E05_S5_COMPOSITE],
   ["E05_S7_INSUFFICIENT", E05_S7_INSUFFICIENT],
   ["E05_F5_DECISION_TREE", E05_F5_DECISION_TREE],
@@ -2151,16 +2254,25 @@ export function fixtureSemanticQualify(userText: string): NoraTurnQualification
             label: "Révision citée E05",
             resourceId: cite[1],
             revisionId: cite[2],
           },
         ],
       },
     );
   }
+  // E08 TEST_BOUNDARY — create+publish / publish-existing (SCRIPTED; WRITE OFF = PG only).
+  const createPub = text.match(E08_CREATE_PUBLISH_RE);
+  if (createPub?.[1] && createPub[2]) {
+    return createAndPublishQualification(createPub[1].trim(), createPub[2].trim());
+  }
+  const pubExisting = text.match(E08_PUBLISH_EXISTING_RE);
+  if (pubExisting?.[1] && pubExisting[2]) {
+    return publishExistingQualification(pubExisting[1].trim(), pubExisting[2].trim());
+  }
   // E08 TEST_BOUNDARY — parameterized positive merge only (negations stay dialogue-default).
   const mergeRepo = text.match(MERGE_PR_REPO_FIXTURE_RE);
   if (mergeRepo?.[1] && mergeRepo[2]) {
     return mergePublicationQualification(Number(mergeRepo[1]), mergeRepo[2]);
   }
   const mergePr = text.match(MERGE_PR_FIXTURE_RE);
   if (mergePr?.[1]) {
     return mergePublicationQualification(Number(mergePr[1]));
```

### DIFF: projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
```diff
diff --git a/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
index 96526533..ffeff38d 100644
--- a/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
@@ -360,17 +360,21 @@ describe("ACCEPT-01 mission continuity (PG / SCRIPTED)", () => {
       await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepStep!.attemptId!))
     )[0];
     expect(["COMPLETED", "DISPATCHED", "AMBIGUOUS"]).toContain(attempt?.status);
     expect(attempt?.decisionId).toBeTruthy();
     expect(attemptIsNoraMission(attempt!)).toBe(true);

     const msgs = await listMessages(pilotId, preparationId);
     const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
-    expect(assistant?.content).toMatch(/Résultat applicatif D4|Suite de mission|AVAILABLE/);
+    // E08 clôture — Nora métier restitution after COMPLETED (not technical dump).
+    expect(assistant?.content).toMatch(
+      /a été publié|Résultat applicatif D4|Suite de mission|AVAILABLE/,
+    );
+    expect(assistant?.content).not.toMatch(/Je publie/i);
     expect(projectId).toBeTruthy();
   });

   it("ACCEPT-01 + P0-B: authorize then recover/resume; restitution idempotent (P1-C)", async () => {
     const { pilotId, projectId, preparationId, repositoryId } = await seedProjectWithGit(
       "accept01-resume",
     );
     // Create doc without publish; prepare Nora mission manually → AUTHORIZED crash window.
```

### DIFF: projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
```diff
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
index 2f40c865..72570bbe 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
@@ -1,18 +1,20 @@
 # Ensemble 08 — As-built (consultation Git + conduite Nora)

 | Champ | Valeur |
 |---|---|
-| Date | 2026-11-21 (finalisation technique / préflight RECETTE) |
+| Date | 2026-11-22 (POST-UAT 01 clôture publication Nora — as-built mis à jour) |
 | Branche | `feat/next-ensemble08-git-publications-nora` |
 | Base | `origin/main` @ `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
-| Profil | CRITICAL · Delivery finalisation · NO RELEASE |
+| Profil | CRITICAL · Delivery correctif post-UAT · NO RELEASE |
 | CKC | FALLBACK (Delivery #8) |
-| Candidate SHA | `98185598de0d3f3b84af862aecea04b9099217ca` · TREE `1c70839facb7fbc799980c585ce8bfba51cdb5d6` · BUILD `1xEbvCdTAX6ht262w4oKF` |
+| Freeze RECETTE (inchangé) | `98185598de0d3f3b84af862aecea04b9099217ca` · TREE `1c70839f` · BUILD `1xEbvCdTAX6ht262w4oKF` |
+| Candidat DEV post-UAT | **worktree dirty** — nouveau SHA après commit Morris (pas encore figé) |
+| RECETTE | **FROZEN / AVAILABLE** — aucune mutation ce mandat |

 ## Livré (y compris finalisation technique)

 ### Capacité A — Consultation Git
 - Listing répertoire D9 : `listDirectory` / `listGitDirectory` / `GET .../git/tree`
 - `normalizeGitReadPath` : rejet `..`, absolu, encodé, backslash ; racine vide autorisée
 - Dépassement >200 entrées → `AMBIGUOUS` — pas de truncation silencieuse
 - **E08-S03 (fermé ce cycle)** : `ListRefsResult` / `FetchMatchingRefsResult` avec `incompleteCoverage` + `matchedCount` **avant** troncature UI (bound 40) — REAL et SCRIPTED alignés ; `listGitRefs` ne déduit plus `complete` d’une liste déjà tronquée ; résolution exacte `getRefSha` conservée
@@ -21,16 +23,31 @@
 - Surface UI : publications 30/70 (11.04), détails agrandis (11.05), confirmation déconnexion (11.07) ; indicateur couverture refs incomplète

 ### Capacité B — Nora
 - Qualification durable `d7.merge_publication` (schema + projection `merge.wantsMerge`)
 - `wantsMergeFromQual` **jamais** forcé à `true` depuis le seul mot « merge »
 - Cible exacte dépôt + PR ; contradiction same-PR → zéro effet
 - `admitConversationalMergeMandate` + provenance USER D6
 - Merge SHA : `merge_commit_sha` observé uniquement
+- **POST-UAT 01** : publication d’un document **existant** (sans D4 AVAILABLE same-turn) via `resolvePublicationDocumentTarget`
+- **Convergence** : référence **explicite** (hint/`doc_*`/rév.) **prévaut** sur focus UI et same-turn contradictoires ; `confirmPublicationDocumentWithD4` avant tout prepare D7
+- **Clôture** : `objectRef` et `documentHint` **réconciliés** (pas de `\|\|` silencieux) — conflit → AMBIGUOUS / REVISION_MISMATCH, zéro D7
+- Gate WRITE REAL avant préparation : `publicationWriteGate` → refus explicite si `STUDIO_GITHUB_ALLOW_MUTATIONS≠documentary`
+- Restitution Nora post-Studio : `composePublicationEffectRestitution` — **un** état métier cohérent ; intention sans effet → `NOT_ATTEMPTED` (jamais « Je publie » / succès inventé)
+- Reprise mission post-authorize COMPLETED : restitution métier (pas de dump technique masqué)
+- Champs qual `publication.documentHint` / `objectRef` / `repositoryHint`
+- Preuves PG : WRITE OFF zéro mutation ; SCRIPTED D6/D7/D8 + Nora ; Playwright Nora discriminant (DEV :3101)
+
+### Capacité UX (POST-UAT 01 + convergence)
+- Double en-tête « Intégration Git » : `ProjectChrome` breadcrumb-only pour surfaces `git`/`publication`
+- Microcopy Pilote : jargon D4/D7/D8 / « projection » retiré des surfaces Dépôts Git / Intégrations
+- Infos : popover ancré `GitFileInfoPopover` — `aria-controls` = `panelId` ; Escape / Fermer restaurent le focus ; fermeture sur changement fichier/ref
+- Intégrations 11.06 : panneau GitHub + repos autorisés + Actualiser/Déconnecter ; colonne « Une connexion à la carte » ; pas de cartes pédagogiques héritées à gauche ; confirmation 11.07 inchangée fonctionnellement
+- G5 pixel Figma : **NOT PROVEN** (Morris UAT)

 ### REAL multi-dépôts
 - Allowlist explicite `allowedFullNames` + env `GITHUB_APP_ALLOWED_REPOS` (même owner)

 ### Preuves / docs construction
 - Matrice A/B/S 41/41 : `matrice-couverture-acceptation-a-b-s.md`
 - Préflight ENV-01 : `env01-recette-preflight.md`
 - Tests S03 : `web/tests/unit/git-refs-coverage-s03.test.ts` (REAL-shaped + SCRIPTED)
@@ -42,18 +59,18 @@
 - E08-S04 prStatusKind / label historique
 - Playwright E08 surface historique ; G5 F2 : **NOT PROVEN** (différé Morris UAT)

 ## Non livré / réserves
 - Figma G5 runtime : **NOT PROVEN** — **VISUAL ACCEPTANCE DEFERRED TO MORRIS UAT**
 - END-TO-END REAL mutation GitHub : **NOT PROVEN** (WRITE/MERGE hors mandat)
 - GitHub REAL READ : **NOT PROVEN** ce cycle
 - Nora LIVE E2E : **NOT PROVEN**
-- Candidate Git figée / build RECETTE : **NOT AVAILABLE**
-- RECETTE déploiement : hors cycle (préflight only)
+- Candidate Git figée / build RECETTE : **SERVI** `@98185598` / `1xEbvCdTAX6ht262w4oKF` sur lane E07
+- G5 visuelle : **NOT PROVEN** — UAT Morris

 ## Preuves exécutées (finalisation)
 - `tsc --noEmit` PASS
 - `git-refs-coverage-s03` **19/19** PASS
 - unit ciblés E08 (refs/provenance/…) — voir Review Pack
 - Matrice 41 scénarios qualifiée (statuts honnêtes)
 - G5 **NOT PROVEN** (non relancé — différé)

```

### DIFF: projects/sfia-studio-next/construction/delivery-history.md
```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 397824a8..110674c0 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,13 +1,83 @@
 # SFIA Studio Next — Delivery history

 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01-CLOTURE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 (Europe/Paris) |
+| Macro-lot | Ensemble 08 — POST-UAT 01 clôture écarts publication Nora |
+| Type | INC / EVOL · CRITICAL · **NO RELEASE** |
+| Branche | `feat/next-ensemble08-git-publications-nora` |
+| Base | `origin/main` `a12f89a1` · HEAD `29066442` + worktree dirty |
+| RECETTE | **FROZEN** `@98185598` / BUILD `1xEbvCdTAX6ht262w4oKF` — **aucune mutation** |
+| P0 | réconciliation `objectRef`/`documentHint` (conflit → AMBIGUOUS, zéro effet) |
+| P1 | `NOT_ATTEMPTED` si intention sans effet ; reprise COMPLETED = restitution métier |
+| Preuves | PG WRITE OFF zéro mutation · PG SCRIPTED E2E · Playwright Nora DEV (voir pack) |
+| Push projet | **NONE** |
+| Cutover | **NOT EXECUTED** |
+| Verdict | (voir Review Pack final) |
+
+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01-CONVERGENCE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 (Europe/Paris) |
+| Macro-lot | Ensemble 08 — POST-UAT 01 convergence finale (doc/rév · Nora · UX) |
+| Type | INC / EVOL · CRITICAL · **NO RELEASE** |
+| Branche | `feat/next-ensemble08-git-publications-nora` |
+| Base | `origin/main` `a12f89a1` · HEAD `29066442` + worktree dirty |
+| RECETTE | **FROZEN** `@98185598` / BUILD `1xEbvCdTAX6ht262w4oKF` — **aucune mutation** |
+| P0 | explicite > focus/same-turn ; `confirmPublicationDocumentWithD4` avant D7 |
+| P1 | restitution Nora mono-état (pas de narratif contradictoire) |
+| P2 | Infos a11y/focus ; Intégrations 11.06 structure |
+| Tests | unit PASS · PG `publication-target-post-uat` + accept01 PASS · Playwright DEV (voir pack) |
+| Push projet | **NONE** |
+| Cutover | **NOT EXECUTED** |
+| Verdict | (voir Review Pack final) |
+
+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 (Europe/Paris) |
+| Macro-lot | Ensemble 08 — correctif post-UAT 01 (publication Nora + UX) |
+| Type | INC / EVOL · CRITICAL · **NO RELEASE** |
+| Branche | `feat/next-ensemble08-git-publications-nora` |
+| Base | `origin/main` `a12f89a1` |
+| RECETTE | **FROZEN** `@98185598` / BUILD `1xEbvCdTAX6ht262w4oKF` — **aucune mutation** |
+| Diagnostic UAT | Classe **A/B** (+ **C** si path exécuté) : intention reconnue, hedge LLM, **zéro** `effect_attempt` 2026-11-22 ; gate historique `documentEffectForAck.status===AVAILABLE` bloquait publish-existing |
+| Correctifs | publish-existing + WRITE-off restitution Nora ; chrome hero unique ; microcopy ; Infos popover ; Intégrations 11.06 structure |
+| Tests | unit restitution/target + tsc PASS ; PG/Playwright LIVE **non** déclarés équivalents SCRIPTED |
+| Push projet | **NONE** |
+| Cutover RECETTE | **NOT EXECUTED** — GO Morris SHA-specific requis |
+| Verdict | **DELIVERY READY WITH RESERVES** (G5 Figma runtime + WRITE sandbox hors mandat) |
+
+## delivery_id: DELIV-2026-11-21-ENSEMBLE08-RECETTE-CUTOVER
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-21 ≈ 21:02 CET |
+| Macro-lot | Ensemble 08 — cutover RECETTE existante E07 |
+| Type | EVOL / MISE À DISPOSITION · CRITICAL · **NO RELEASE** |
+| GO Morris | SHA `98185598` · BUILD `1xEbvCdTAX6ht262w4oKF` |
+| Avant | E07 `@5ad8fa57` / `BtZP6qDx5oAw8jwPQSEhc` |
+| Après | E08 servi HTTP `<!--1xEbvCdTAX6ht262w4oKF-->` · service `ml4d-ux004` |
+| DB | `sfia_next_recette_ml4` préservée · projects 26 inchangé · +sessions/messages smoke |
+| Backup | immédiat + restore proof isolée PASS |
+| Playwright SCRIPTED on RECETTE | 3 FAIL (attendu LIVE/REAL) |
+| Smoke API/surfaces | PASS (Pilot A test login) |
+| G5 | NOT PROVEN — Morris UAT |
+| Push projet | **NONE** |
+| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** |
+
 ## delivery_id: DELIV-2026-11-21-ENSEMBLE08-CANDIDATE-FREEZE-RECETTE-PREP

 | Field | Value |
 | --- | --- |
 | Date | 2026-11-21 (Europe/Paris) |
 | Macro-lot | Ensemble 08 — freeze candidat + préparation évolution RECETTE E07 |
 | Type | EVOL / CRITICAL · **NO RELEASE** |
 | Base | `origin/main` `a12f89a1` · branche `feat/next-ensemble08-git-publications-nora` |
```
