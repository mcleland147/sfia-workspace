# SFIA Review Pack — FULL · CRITICAL · COMPLETE CODE
## Ensemble 08 — POST-UAT 01 CONVERGENCE FINALE CIBLÉE

| Champ | Valeur |
|---|---|
| status | COMPLETE — independent review (sources + diffs) |
| date_utc | 2026-11-22T02:47:00Z (Europe/Paris ≈ 03:47) |
| cycle | Delivery #8 · INC/EVOL · CRITICAL · NO RELEASE |
| prior_handoff | `2e97c15c7d555758c3ae01579fe3b8b9fd67f5ec` (code+diffs POST-UAT) — superseded by this pack |
| worktree_HEAD | `29066442a7fa51b106d9fe45b5c1b05da7f13004` + dirty convergences |
| origin/main | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| RECETTE freeze | `98185598` / TREE `1c70839f` / BUILD `1xEbvCdTAX6ht262w4oKF` — **PRESERVED** |
| GO Morris | correctif DEV + tests + docs — **pas** commit/push/PR/cutover/WRITE REAL |

> Pack FULL : contenus intégraux des créations + `git diff HEAD -U8` des tracked modifiés. Fichiers untracked inclus en entier (pas seulement inventaire).

---

## 1. Git Truth

| Item | Observé |
|---|---|
| Branche | `feat/next-ensemble08-git-publications-nora` |
| HEAD | `29066442` |
| merge-base main | `a12f89a1` |
| Staged | none |
| RECETTE HTTP | `:3200` 307 alive · non mutée |
| DEV Playwright | `:3101` via `e2e-web-server.sh` (sfia_next_e2e) |

---

## 2. Causes racines (confirmées)

1. **Cible documentaire** : priorité focus/same-turn pouvait écraser une référence explicite ultérieure.
2. **Restitution** : strip + append pouvait laisser un narratif de succès contradictoire avec un refus.
3. **Infos** : `aria-controls` ≠ panelId ; focus non restauré.
4. **Intégrations** : cartes pédagogiques héritées ≠ structure Figma 11.06.

---

## 3. Architecture propriétaires

| Étape | Owner |
|---|---|
| Intention publication | D3 qual durable |
| Identité doc/rév. + confirm | D4 (`getDocumentRevision` / `listDocumentRevisions`) |
| Prepare / dispatch | D7 |
| Mandat USER | D6 |
| Faits | D8 |
| Provider WRITE gate | D9 / env |
| Restitution Pilote | D3 après owners |

---

## 4. Tests exécutés

| Suite | Commande | Résultat |
|---|---|---|
| tsc | `npx tsc --noEmit -p tsconfig.json` | **PASS** |
| unit restitution/target | `vitest run tests/unit/publication-effect-restitution.test.ts` | **13 PASS** |
| unit refs S03 | `vitest run tests/unit/git-refs-coverage-s03.test.ts` | **19 PASS** |
| PG target + WRITE-off | `vitest run tests/integration/publication-target-post-uat.pg.test.ts` | **3 PASS** (sfia_next_e2e) |
| PG accept01 non-régression | `vitest run tests/integration/mission-continuity-accept01.pg.test.ts` | **10 PASS** |
| Playwright E08 surface | `playwright test tests/e2e/ensemble08-git-surface.spec.ts` | **3 PASS** (DEV :3101 / e2e DB) |
| Nora LIVE | — | **NOT PROVEN** |
| GitHub REAL WRITE | — | **HORS MANDAT / NOT PROVEN** |
| G5 Figma ≤2px | — | **NOT PROVEN** |

SCRIPTED ≠ REAL. RECETTE non utilisée pour fixtures mutatives.

---

## 5. Empreintes locales (sha256 16)

- `projects/sfia-studio-next/web/src/domains/conversation/publication-document-target.ts` · `069cd7f759440a9c`
- `projects/sfia-studio-next/web/src/domains/conversation/publication-effect-restitution.ts` · `183e8bee24f4d9fe`
- `projects/sfia-studio-next/web/src/components/integrations/GitFileInfoPopover.tsx` · `d882fb0c80a140f9`
- `projects/sfia-studio-next/web/tests/unit/publication-effect-restitution.test.ts` · `07d94217dc94ab1b`
- `projects/sfia-studio-next/web/tests/integration/publication-target-post-uat.pg.test.ts` · `88529131f6e24ac6`
- `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/post-uat-01-l0-l2.md` · `bb14cdbbab55530f`
- `projects/sfia-studio-next/web/src/domains/conversation/service.ts` · `826a4ed2932e8b8b`
- `projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts` · `2509c347e22b62d1`
- `projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx` · `97e47527081470be`
- `projects/sfia-studio-next/web/src/components/figma/tokens.css` · `58dc2b94a5dec97c`
- `projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx` · `d1a7ec99d070a7be`
- `projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx` · `b12a6fe3f9e045b3`
- `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md` · `e4df01f1d87b9081`
- `projects/sfia-studio-next/construction/delivery-history.md` · `1187a0fc712b880d`
- `projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts` · `6dde98ebde726390`
- `projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts` · `655b66e997212ef4`

---

## 6. Fichiers CRÉÉS — contenu intégral

### `projects/sfia-studio-next/web/src/domains/conversation/publication-document-target.ts`

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
 * Synchronous identity resolution from list payload + hints.
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
  const explicitDocId =
    parseDocumentId(input.objectRef) || parseDocumentId(input.documentHint);
  const explicitRevId =
    parseRevisionId(input.objectRef) || parseRevisionId(input.documentHint);
  const requestedRevisionNumber =
    input.revisionNumberHint ??
    parseRevisionNumberHint(input.documentHint) ??
    parseRevisionNumberHint(input.objectRef);
  const explicitDocSignal = hasExplicitDocumentSignal({
    documentHint: input.documentHint,
    objectRef: input.objectRef,
  });

  let explicitDoc: DocumentListItem | null = null;
  if (explicitDocId) {
    const hit = available.find((d) => d.document.id === explicitDocId);
    if (!hit) {
      return { ok: false, reason: "NOT_FOUND", detail: "EXPLICIT_DOCUMENT_ID" };
    }
    explicitDoc = hit;
  } else if (explicitDocSignal && input.documentHint) {
    const byTitle = findByTitle(input.docs, input.documentHint);
    if (!byTitle.ok) {
      return {
        ok: false,
        reason: byTitle.reason,
        candidates: "candidates" in byTitle ? byTitle.candidates : undefined,
        detail: "EXPLICIT_TITLE",
      };
    }
    explicitDoc = byTitle.doc;
  } else if (explicitDocSignal && input.objectRef && !explicitDocId) {
    const byTitle = findByTitle(input.docs, input.objectRef);
    if (!byTitle.ok) {
      return {
        ok: false,
        reason: byTitle.reason,
        candidates: "candidates" in byTitle ? byTitle.candidates : undefined,
        detail: "EXPLICIT_OBJECT_REF",
      };
    }
    explicitDoc = byTitle.doc;
  }

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

### `projects/sfia-studio-next/web/src/domains/conversation/publication-effect-restitution.ts`

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
    return prior;
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

### `projects/sfia-studio-next/web/src/components/integrations/GitFileInfoPopover.tsx`

```tsx
"use client";

import { useEffect, useId, useRef, type RefObject } from "react";

export type GitFileInfoFields = {
  name: string;
  type: string;
  repository: string;
  ref: string;
  path: string;
  commitSha: string | null;
  commitShaVerified: boolean;
  blobSha: string | null;
  sizeLabel?: string | null;
  origin?: string | null;
};

/**
 * Contextual info panel anchored to the Infos control (UAT-04 / convergence).
 * Non-modal popover — Escape / outside click / Fermer; focus returns to trigger.
 */
export function GitFileInfoPopover(props: {
  open: boolean;
  onClose: () => void;
  fields: GitFileInfoFields;
  anchorRef?: RefObject<HTMLElement | null>;
  /** Stable id for aria-controls on the trigger (must match). */
  panelId?: string;
}) {
  const autoId = useId();
  const panelId = props.panelId ?? autoId;
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!props.open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        props.onClose();
        props.anchorRef?.current?.focus();
      }
    }
    function onPointer(e: MouseEvent) {
      const t = e.target as Node | null;
      if (!t) return;
      if (panelRef.current?.contains(t)) return;
      if (props.anchorRef?.current?.contains(t)) return;
      props.onClose();
      // Do not steal focus on outside click — leave where the user clicked.
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [props.open, props.onClose, props.anchorRef]);

  useEffect(() => {
    if (!props.open) return;
    closeBtnRef.current?.focus();
  }, [props.open]);

  if (!props.open) return null;

  const rows: Array<[string, string]> = [
    ["Nom", props.fields.name],
    ["Type", props.fields.type],
    ["Dépôt", props.fields.repository || "—"],
    ["Branche / ref", props.fields.ref || "—"],
    ["Chemin", props.fields.path || "—"],
    [
      "Commit",
      props.fields.commitShaVerified && props.fields.commitSha
        ? props.fields.commitSha
        : props.fields.commitSha
          ? "non vérifié"
          : "—",
    ],
    ["Blob", props.fields.blobSha?.trim() ? props.fields.blobSha : "—"],
  ];
  if (props.fields.sizeLabel) rows.push(["Taille", props.fields.sizeLabel]);
  if (props.fields.origin) rows.push(["Origine", props.fields.origin]);

  function closeAndRestoreFocus() {
    props.onClose();
    // Defer focus until after unmount of panel.
    requestAnimationFrame(() => props.anchorRef?.current?.focus());
  }

  return (
    <div
      ref={panelRef}
      id={panelId}
      className="git-info-popover"
      role="dialog"
      aria-modal="false"
      aria-label="Informations sur la source"
      data-testid="git-file-infos"
    >
      <div className="git-info-popover-head">
        <h3 className="git-info-popover-title" id={`${panelId}-title`}>
          Source
        </h3>
        <button
          type="button"
          ref={closeBtnRef}
          className="git-btn-icon"
          aria-label="Fermer les informations"
          data-testid="git-info-close"
          onClick={closeAndRestoreFocus}
        >
          ×
        </button>
      </div>
      <dl className="git-details-list" aria-labelledby={`${panelId}-title`}>
        {rows.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd className={/Commit|Blob|Chemin/.test(label) ? "git-mono" : undefined}>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
```

### `projects/sfia-studio-next/web/tests/unit/publication-effect-restitution.test.ts`

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
});
```

### `projects/sfia-studio-next/web/tests/integration/publication-target-post-uat.pg.test.ts`

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

### `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/post-uat-01-l0-l2.md`

```markdown
# Figma L0–L2 — POST-UAT 01 (E08)

- File key: `itgvCulInEnFY6DvgIegvP`
- Session: `80b0f865-9353-4318-b761-d912f7b37cbe`
- Date: 2026-11-22
- Method: MCP `get_metadata` (L0/L1 structure + dimensions). Runtime pixel G5 ≤2px : **NOT PROVEN** (Morris UAT).

## Frames

| Frame | Node | Size | Notes |
|---|---|---|---|
| 11.01 Aucun dépôt | `1093:9` | 1680×970 | Zone contenu 1358 ; panneaux 848 + 492 ; hero « Dépôts Git » |
| 11.02 Gestion multi-dépôts | `1094:71` | 1680×970 | Hero « Gérer les dépôts… » ; main 848×600 ; side 492×600 ; 2 dépôts **fictifs** |
| 11.03 Explorateur 30/70 | `1094:172` | 1680×970 | Tree 406 / preview 934 ; actions Infos · GitHub · Agrandir — **état Infos ouvert non dessiné** |
| 11.06 Intégrations connecté | `1095:339` | 1680×970 | Badge Connecté ; liste dépôts ; Actualiser / Déconnecter ; colonne droite |
| 11.07 / 11.13 | (confirm) | — | Confirmation avant mutation locale (déconnexion / retrait) |

## Mapping runtime

| Figma | DOM / composant |
|---|---|
| Hero Dépôts Git | `GitRepositoriesSurface` `[data-testid=git-hero]` (chrome ProjectChrome breadcrumb-only) |
| Empty 11.01 | `[data-testid=git-empty]` |
| Manage 11.02 | `[data-testid=git-manage]` |
| Explorer 11.03 | `.git-split-3070` + `[data-testid=git-preview]` |
| Infos (ouvert) | `GitFileInfoPopover` `[data-testid=git-file-infos]` — **candidat UX** (pas d’état Figma validé) |
| Intégrations 11.06 | `IntegrationsPanel` `[data-testid=integrations-panel]` |

## Réserves

- FIGMA ALIGNED **non annoncé** : pas de captures runtime mesurées ce cycle.
- Différence de données CampusFlow (1 dépôt) vs maquette 11.02 (2) : **pas un défaut visuel**.
- Infos : si Morris exige un état Figma normatif → **DESIGN DECISION REQUIRED — MORRIS**.
```

---

## 7. Fichiers MODIFIÉS — diffs unifiés (`git diff HEAD -U8`)

### `projects/sfia-studio-next/web/src/domains/conversation/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 52b72c5d..31f22ff8 100644
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
+      steps.push({
+        id: "d7_prepare",
+        capabilityId: "d7.prepare_publication",
+        status: "PENDING",
+        correlationKey: missionKeys.publication,
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
       steps.push({
         id: "d7_prepare",
         capabilityId: "d7.prepare_publication",
         status: "PENDING",
         correlationKey: missionKeys.publication,
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
@@ -2986,16 +3226,30 @@ export async function postUserMessageAndNora(
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
+    // Hedge-only strip when intention was recognized but no Studio attempt ran.
+    assistantBody = composePublicationEffectRestitution({
+      priorContent: assistantBody,
+      effect: null,
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

### `projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
index a9da3d88..b8d9c0d7 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
@@ -563,16 +563,19 @@ export type SemanticStudioProjection = {
     sectionHint: string | null;
   };
   publication: {
     wantsPublish: boolean;
     needsExplicitPath: boolean;
     path: string | null;
     targetPath: string | null;
     targetBranch: string | null;
+    documentHint: string | null;
+    objectRef: string | null;
+    repositoryHint: string | null;
     clarify: string | null;
     capabilityId: "d7.prepare_publication" | "d7.dispatch_publication" | "d9.git_integration" | null;
   };
   merge: {
     wantsMerge: boolean;
     prNumber: number | null;
     repositoryHint: string | null;
     clarify: string | null;
@@ -636,16 +639,22 @@ export function projectStudioEffects(q: NoraTurnQualification): SemanticStudioPr

   const path = publish?.parameters.publicationPath?.trim() || publish?.parameters.pathHint?.trim() || null;
   const publication = {
     wantsPublish: Boolean(publish),
     needsExplicitPath: Boolean(publish) && !path,
     path,
     targetPath: path,
     targetBranch: null as string | null,
+    documentHint:
+      publish?.parameters.documentHint?.trim() ||
+      reviseDoc?.parameters.documentHint?.trim() ||
+      null,
+    objectRef: publish?.parameters.objectRef?.trim() || null,
+    repositoryHint: publish?.parameters.repositoryFullName?.trim() || null,
     clarify: publish && !path ? "Chemin de publication Git manquant." : null,
     capabilityId: publishCapability,
   };

   const mergePrRaw = mergePub?.parameters.prNumber;
   const mergePr =
     typeof mergePrRaw === "number" && Number.isFinite(mergePrRaw) && mergePrRaw > 0
       ? Math.trunc(mergePrRaw)
```

### `projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
index 2792d128..6d8f8fb3 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
@@ -32,24 +32,24 @@ const HERO: Record<
     sub: "La mémoire du projet, organisée par thèmes. Retrouvez l’essentiel sans remonter toute la conversation.",
   },
   document: {
     kicker: "ESPACE PROJET  /  DOCUMENTS",
     title: "Bibliothèque du projet",
     sub: "Retrouvez les documents durables du projet, leurs versions et les actions disponibles.",
   },
   git: {
-    kicker: "Espace projet  /  Sources Git",
-    title: "Intégration Git",
-    sub: "Sources et liens Git du projet — capacités réellement disponibles.",
+    kicker: "ESPACE PROJET / DÉPÔTS GIT",
+    title: "Dépôts Git",
+    sub: "Parcourir un dépôt autorisé puis lire le fichier directement dans l’espace projet.",
   },
   publication: {
-    kicker: "Espace projet  /  Résultats et preuves",
-    title: "Publication Git",
-    sub: "Publication et preuves Git — capacités réellement disponibles.",
+    kicker: "ESPACE PROJET / DÉPÔTS GIT",
+    title: "Dépôts Git",
+    sub: "Parcourir un dépôt autorisé puis lire le fichier directement dans l’espace projet.",
   },
 };

 export function ProjectChrome(props: {
   projectId: string;
   projectName: string | null;
   surface: Surface;
   /** Optional status line — never raw technical IDs in the nominal path. */
@@ -73,17 +73,19 @@ export function ProjectChrome(props: {
         : HERO[props.surface];
   const surfaceLabel = PROJECT_SURFACE_LABELS[props.surface];
   const displayName = props.projectName?.trim() || "Projet";
   const isTravail = props.surface === "travail";
   /** Journal V4 — hero lives inside ProjectJournal (full vs compact 40/60). */
   const isJournal = props.surface === "journal";
   /** Ensemble 07 — Projet / Trajectoire heroes live in ProjectOverview / TrajectoryBoard. */
   const isProjetOrTrajectoire = props.surface === "projet" || props.surface === "pilotage";
-  const breadcrumbOnly = isTravail || isJournal || isProjetOrTrajectoire;
+  /** Ensemble 08 — Dépôts Git / Publications heroes live in GitRepositoriesSurface. */
+  const isGitSurface = props.surface === "git" || props.surface === "publication";
+  const breadcrumbOnly = isTravail || isJournal || isProjetOrTrajectoire || isGitSurface;

   const continuityBadge =
     isTravail && props.statusHint && !/^chargement/i.test(props.statusHint) ? (
       <span className="fig-tag fig-tag-ok" data-testid="project-status-hint">
         {/reprise|conservé|durable/i.test(props.statusHint)
           ? "Contexte conservé"
           : props.statusHint}
       </span>
```

### `projects/sfia-studio-next/web/src/components/figma/tokens.css`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index d0f908c3..6752bc97 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -5239,16 +5239,46 @@
   padding: 6px 12px;
   border-radius: 30px;
   background: var(--fig-accent-bg);
   color: var(--fig-ink);
   font-size: 11px;
   font-weight: 600;
   width: fit-content;
 }
+.git-info-anchor {
+  position: relative;
+  display: inline-flex;
+}
+.git-info-popover {
+  position: absolute;
+  top: calc(100% + 8px);
+  right: 0;
+  z-index: 40;
+  width: min(360px, calc(100vw - 32px));
+  max-height: min(70vh, 420px);
+  overflow: auto;
+  background: var(--fig-panel);
+  border: 1px solid var(--fig-line);
+  border-radius: 10px;
+  padding: 14px 16px;
+  box-shadow: 0 12px 32px color-mix(in srgb, #000 35%, transparent);
+}
+.git-info-popover-head {
+  display: flex;
+  align-items: center;
+  justify-content: space-between;
+  gap: 8px;
+  margin-bottom: 8px;
+}
+.git-info-popover-title {
+  margin: 0;
+  font-size: 14px;
+  font-weight: 600;
+}
 .git-empty-layout,
 .git-manage,
 .git-enlarge-layout {
   display: flex;
   gap: 18px;
   align-items: stretch;
 }
 .git-empty-main,
```

### `projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx b/projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx
index 8f06836d..b4d2370b 100644
--- a/projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx
+++ b/projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx
@@ -1,12 +1,13 @@
 "use client";

 import { useCallback, useEffect, useMemo, useRef, useState } from "react";
 import { SafeMarkdown } from "@/components/SafeMarkdown";
+import { GitFileInfoPopover } from "@/components/integrations/GitFileInfoPopover";

 type GitSource = {
   linkId: string;
   repositoryId: string;
   fullName: string;
   defaultBranch: string | null;
   attachedAt: string;
 };
@@ -86,16 +87,18 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
   const [branchFilterApplied, setBranchFilterApplied] = useState("");
   const [tab, setTab] = useState<TabId>("files");
   const [treePath, setTreePath] = useState("");
   const [entries, setEntries] = useState<TreeEntry[]>([]);
   const [expandedDirs, setExpandedDirs] = useState<Record<string, TreeEntry[]>>({});
   const [file, setFile] = useState<FileView | null>(null);
   const [fileError, setFileError] = useState<string | null>(null);
   const [infoOpen, setInfoOpen] = useState(false);
+  const infoBtnRef = useRef<HTMLButtonElement | null>(null);
+  const infoPanelId = "git-file-info-panel";
   const [enlarged, setEnlarged] = useState(false);
   const [publications, setPublications] = useState<PublicationRow[]>([]);
   const [selectedPublicationId, setSelectedPublicationId] = useState<string | null>(null);
   const [pubFile, setPubFile] = useState<FileView | null>(null);
   const [pubFileError, setPubFileError] = useState<string | null>(null);
   const [pubEnlarged, setPubEnlarged] = useState(false);
   const [busy, setBusy] = useState(false);
   const [error, setError] = useState<string | null>(null);
@@ -299,16 +302,17 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
     void loadRefs();
   }, [loadRefs]);

   useEffect(() => {
     if (tab === "files" && repositoryId && branch) {
       setExpandedDirs({});
       setFile(null);
       setFileError(null);
+      setInfoOpen(false);
       void loadTree("");
     }
   }, [tab, repositoryId, branch, loadTree]);

   useEffect(() => {
     if (tab === "publications") void loadPublications();
   }, [tab, loadPublications]);

@@ -649,22 +653,26 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {

   return (
     <div className="git-repos-surface" data-testid="git-surface">
       <header className="e07-surface-hero" data-testid="git-hero">
         <p className="fig-kicker text-[#7477ed]" data-testid="git-hero-kicker">
           ESPACE PROJET / DÉPÔTS GIT
         </p>
         <h1 className="e07-surface-hero-title" data-testid="git-hero-title">
-          {tab === "manage" ? "Gérer les dépôts du projet" : "Dépôts Git"}
+          {tab === "manage"
+            ? "Gérer les dépôts du projet"
+            : "Dépôts Git"}
         </h1>
         <p className="e07-surface-hero-sub" data-testid="git-hero-sub">
           {tab === "manage"
             ? "Chaque projet choisit ses dépôts ; plusieurs rattachements sont possibles."
-            : "Parcourir un dépôt autorisé puis lire le fichier directement dans l’espace projet."}
+            : sources.length === 0
+              ? "Consultez les fichiers de vos dépôts autorisés."
+              : "Parcourir un dépôt autorisé puis lire le fichier directement dans l’espace projet."}
         </p>
       </header>

       {error ? (
         <p className="git-error" role="alert" data-testid="git-error">
           {error}
         </p>
       ) : null}
@@ -681,19 +689,19 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
           </a>
         </section>
       ) : null}

       {sources.length === 0 && !gitUnavailable ? (
         <section className="git-empty-layout" data-testid="git-empty">
           <div className="git-empty-main">
             <h2>Aucun dépôt associé à ce projet</h2>
-            <p>Git est facultatif. Tu peux continuer à travailler avec Nora sans dépôt.</p>
+            <p>Git est facultatif. Vous pouvez continuer à travailler avec Nora sans dépôt.</p>
             <p className="git-muted">
-              Choisis explicitement un dépôt autorisé — aucun rattachement silencieux.
+              Choisissez un dépôt autorisé par GitHub pour l’explorer — aucun rattachement silencieux.
             </p>
             {unattached.length === 0 ? (
               <button
                 type="button"
                 className="git-btn-primary"
                 data-testid="git-empty-associate"
                 disabled
               >
@@ -938,24 +946,49 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
                     <header className="git-preview-head">
                       <div>
                         <h2 className="git-preview-title" data-testid="git-preview-title">
                           {basename(file.path)}
                         </h2>
                         <p className="git-preview-path">{file.path}</p>
                       </div>
                       <div className="git-preview-actions" data-testid="git-preview-actions">
-                        <button
-                          type="button"
-                          className="git-btn-secondary"
-                          data-testid="git-action-infos"
-                          onClick={() => setInfoOpen((v) => !v)}
-                        >
-                          Infos
-                        </button>
+                        <div className="git-info-anchor">
+                          <button
+                            type="button"
+                            className="git-btn-secondary"
+                            data-testid="git-action-infos"
+                            aria-expanded={infoOpen}
+                            aria-controls={infoPanelId}
+                            ref={infoBtnRef}
+                            onClick={() => setInfoOpen((v) => !v)}
+                          >
+                            Infos
+                          </button>
+                          <GitFileInfoPopover
+                            open={infoOpen}
+                            onClose={() => setInfoOpen(false)}
+                            anchorRef={infoBtnRef}
+                            panelId={infoPanelId}
+                            fields={{
+                              name: basename(file.path),
+                              type: /\.md$/i.test(file.path) ? "Markdown" : "Texte",
+                              repository: active?.fullName ?? "—",
+                              ref: file.ref || branch || "—",
+                              path: file.path,
+                              commitSha: file.commitSha,
+                              commitShaVerified: file.commitShaVerified,
+                              blobSha: file.blobSha || null,
+                              sizeLabel: file.content
+                                ? `${new TextEncoder().encode(file.content).length} octets`
+                                : null,
+                              origin: "Git (lecture seule)",
+                            }}
+                          />
+                        </div>
                         {file.permalink ? (
                           <a
                             className="git-btn-secondary"
                             href={file.permalink}
                             target="_blank"
                             rel="noreferrer"
                             data-testid="git-action-github"
                           >
@@ -970,30 +1003,16 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
                           aria-label="Agrandir la lecture"
                           data-testid="git-action-enlarge"
                           onClick={() => setEnlarged(true)}
                         >
                           <img src="/figma-git-icons/expand.svg" alt="" width={20} height={20} />
                         </button>
                       </div>
                     </header>
-                    {infoOpen ? (
-                      <dl className="git-details-inline" data-testid="git-file-infos">
-                        <div>
-                          <dt>Commit</dt>
-                          <dd className="git-mono">
-                            {file.commitShaVerified ? file.commitSha : "non vérifié"}
-                          </dd>
-                        </div>
-                        <div>
-                          <dt>Blob</dt>
-                          <dd className="git-mono">{file.blobSha}</dd>
-                        </div>
-                      </dl>
-                    ) : null}
                     <p className="git-preview-kicker">
                       DOCUMENT À RÉFÉRENCE IDENTIFIÉE · LECTURE SEULE
                     </p>
                     <div className="git-preview-body" data-testid="git-preview-body">
                       {/\.md$/i.test(file.path) ? (
                         <SafeMarkdown content={file.content} />
                       ) : (
                         <pre className="git-preview-pre">{file.content}</pre>
@@ -1005,39 +1024,38 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
                 )}
               </section>
             </div>
           ) : null}

           {tab === "publications" ? (
             <section className="git-pubs" data-testid="git-publications">
               <p className="git-muted" style={{ marginBottom: 12 }}>
-                Projection D4/D7/D8 du projet — historique Studio, pas un état live GitHub. Liste des
-                publications du projet (pas l’index du dépôt) ; lecture sous la référence propre de
-                chaque publication. Une PR créée n’est pas un merge.
+                Historique Studio des publications du projet — distinct de l’index du dépôt. Une
+                demande de branche ou de commit n’implique pas une fusion.
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
-                            ? "Fusion vérifiée (fait D8)"
+                            ? "Fusion vérifiée"
                             : p.openPullRequest
                               ? "PR enregistrée ouverte (historique — non actualisée)"
                               : p.pullRequestCreatedObserved
                                 ? "PR créée (historique)"
                                 : p.commitObserved
-                                  ? "Commit observé (fait D8)"
+                                  ? "Commit observé"
                                   : p.publicationStatus);
                         return (
                           <li key={p.publicationRefId}>
                             <button
                               type="button"
                               className={`git-pubs-item${selected ? " is-selected" : ""}`}
                               data-testid="git-publication-row"
                               aria-pressed={selected}
@@ -1062,24 +1080,48 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
                     {selectedPublication && pubFile ? (
                       <>
                         <header className="git-preview-head">
                           <div>
                             <h2 className="git-preview-title">{basename(pubFile.path)}</h2>
                             <p className="git-preview-path">{pubFile.path}</p>
                           </div>
                           <div className="git-preview-actions" data-testid="git-preview-actions">
-                            <button
-                              type="button"
-                              className="git-btn-secondary"
-                              data-testid="git-action-infos"
-                              onClick={() => setInfoOpen((v) => !v)}
-                            >
-                              Infos
-                            </button>
+                            <div className="git-info-anchor">
+                              <button
+                                type="button"
+                                className="git-btn-secondary"
+                                data-testid="git-action-infos"
+                                aria-expanded={infoOpen}
+                                aria-controls={infoPanelId}
+                                ref={infoBtnRef}
+                                onClick={() => setInfoOpen((v) => !v)}
+                              >
+                                Infos
+                              </button>
+                              <GitFileInfoPopover
+                                open={infoOpen}
+                                onClose={() => setInfoOpen(false)}
+                                anchorRef={infoBtnRef}
+                                panelId={infoPanelId}
+                                fields={{
+                                  name: basename(pubFile.path),
+                                  type: /\.md$/i.test(pubFile.path) ? "Markdown" : "Texte",
+                                  repository: selectedPublication.repositoryFullName,
+                                  ref:
+                                    selectedPublication.publicationBranch ??
+                                    selectedPublication.targetBranch,
+                                  path: pubFile.path,
+                                  commitSha: pubFile.commitSha,
+                                  commitShaVerified: pubFile.commitShaVerified,
+                                  blobSha: pubFile.blobSha || null,
+                                  origin: "Publication Studio",
+                                }}
+                              />
+                            </div>
                             {pubFile.permalink ? (
                               <a
                                 className="git-btn-secondary"
                                 href={pubFile.permalink}
                                 target="_blank"
                                 rel="noreferrer"
                                 data-testid="git-action-github"
                               >
@@ -1097,33 +1139,16 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
                             >
                               <img src="/figma-git-icons/expand.svg" alt="" width={20} height={20} />
                             </button>
                           </div>
                         </header>
                         <p className="git-preview-kicker">
                           DOCUMENT À RÉFÉRENCE IDENTIFIÉE · LECTURE SEULE
                         </p>
-                        {infoOpen ? (
-                          <p className="git-muted" data-testid="git-pub-info">
-                            {selectedPublication.repositoryFullName} ·{" "}
-                            {selectedPublication.publicationBranch ??
-                              selectedPublication.targetBranch}
-                            {selectedPublication.headSha
-                              ? ` · ${selectedPublication.headSha.slice(0, 8)}`
-                              : ""}
-                            {selectedPublication.prStatusLabel
-                              ? ` · ${selectedPublication.prStatusLabel}`
-                              : selectedPublication.mergeObserved
-                                ? " · merge observé (D8)"
-                                : selectedPublication.openPullRequest
-                                  ? " · PR enregistrée ouverte (historique — non actualisée)"
-                                  : ""}
-                          </p>
-                        ) : null}
                         <div className="git-preview-body" data-testid="git-preview-body">
                           {/\.md$/i.test(pubFile.path) ? (
                             <SafeMarkdown content={pubFile.content} />
                           ) : (
                             <pre className="git-preview-pre">{pubFile.content}</pre>
                           )}
                         </div>
                       </>
```

### `projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx b/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx
index 138bda02..a535cc27 100644
--- a/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx
+++ b/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx
@@ -14,29 +14,28 @@ type IntegrationView = {
   }>;
 };

 function statusBanner(status: string): { tone: string; text: string } {
   switch (status) {
     case "CONNECTED":
       return {
         tone: "text-emerald-300",
-        text: "GitHub est connecté. Les dépôts ci-dessous sont ceux réellement autorisés côté serveur.",
+        text: "GitHub connecté — accès fournisseur vérifié. Aucun mandat de publication n’est accordé par cette seule connexion.",
       };
     case "PENDING_APPROVAL":
       return {
         tone: "text-amber-300",
         text: "Approbation d'organisation en attente — aucun accès anticipé aux dépôts.",
       };
     case "ACCESS_REMOVED":
     case "REVOKED":
       return {
         tone: "text-amber-300",
-        text:
-          "Accès Studio local retiré. Ce n’est pas automatiquement une révocation complète de l’installation GitHub. Les acquis D4 et faits historiques restent conservés.",
+        text: "Accès Studio local retiré. Ce n’est pas automatiquement une révocation complète de l’installation GitHub. Les documents et faits historiques restent conservés.",
       };
     default:
       return {
         tone: "text-amber-300",
         text: "GitHub n'est pas connecté. Studio et Nora restent entièrement utilisables.",
       };
   }
 }
@@ -66,17 +65,16 @@ export function IntegrationsPanel() {
         body: JSON.stringify({ returnPath: "/settings/integrations" }),
       });
       const j = await res.json();
       if (!j.authorizeUrl && !j.state) {
         setMessage("Impossible de démarrer l'autorisation");
         return;
       }
       // SCRIPTED complete only when server chose flow=scripted.
-      // Do NOT use providerMode (Git provider SCRIPTED/REAL) — that is orthogonal to D9 OAuth flow.
       if (j.flow === "scripted") {
         const done = await fetch("/api/integrations/github/authorize/complete", {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({ state: j.state }),
         });
         const statusBody = await done.json();
         if (!done.ok) {
@@ -118,17 +116,17 @@ export function IntegrationsPanel() {
   const status = view?.status ?? "DISCONNECTED";
   const banner = statusBanner(status);

   if (confirmDisconnect) {
     return (
       <div className="space-y-5" data-testid="integrations-disconnect-confirm">
         <header className="space-y-2">
           <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--fig-accent)]">
-            Paramètres / Sécurité
+            PARAMÈTRES / SERVICES EXTERNES
           </p>
           <h1 className="text-[32px] leading-tight font-semibold text-[var(--ink)]">
             Déconnecter GitHub
           </h1>
           <p className="text-base text-[var(--muted)] max-w-3xl">
             Le retrait de la connexion personnelle affecte les futures lectures Git de tous les
             projets concernés.
           </p>
@@ -203,157 +201,146 @@ export function IntegrationsPanel() {
       </div>
     );
   }

   return (
     <div className="space-y-5" data-testid="integrations-panel">
       <header className="space-y-2">
         <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--fig-accent)]">
-          Paramètres · Services externes
+          PARAMÈTRES / SERVICES EXTERNES
         </p>
-        <div className="flex items-center gap-3 flex-wrap">
-          <h1 className="text-[32px] leading-tight font-semibold text-[var(--ink)]">Intégrations</h1>
-          {view?.providerMode === "SCRIPTED" ? (
-            <span
-              className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded border border-[var(--line)] text-[var(--muted)]"
-              data-testid="badge-scripted"
-            >
-              SCRIPTED
-            </span>
-          ) : null}
-        </div>
+        <h1 className="text-[32px] leading-tight font-semibold text-[var(--ink)]">Intégrations</h1>
         <p className="text-base text-[var(--muted)] max-w-3xl">
-          Connectez les services utiles à votre travail. Vous gardez la maîtrise des dépôts et des
-          permissions.
+          Gérer la connexion personnelle GitHub et consulter les dépôts réellement autorisés.
         </p>
       </header>

       <div
         className={`rounded-xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_80%,transparent)] p-4 text-sm font-medium ${banner.tone}`}
         data-testid="integrations-status-banner"
       >
         {banner.text}
       </div>

-      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
+      <div
+        className="grid gap-5 lg:grid-cols-[minmax(0,858fr)_minmax(0,482fr)]"
+        data-testid="integrations-layout-1106"
+      >
         <section className="studio-card p-5 space-y-4" data-testid="github-integration-card">
-          <div>
-            <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--fig-accent)]">
-              GitHub · Intégration disponible
-            </p>
-            <h2 className="text-[22px] font-semibold mt-1">GitHub</h2>
-            <p className="text-sm text-[var(--muted)] mt-1">
-              Consulter vos dépôts autorisés, travailler avec Nora et publier des documents sous votre
-              contrôle.
-            </p>
-          </div>
-
-          <div className="space-y-2">
-            <div className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3">
-              <p className="text-sm font-semibold">Connexion Studio</p>
-              <p className="text-xs text-[var(--muted)] mt-1">
-                Vous êtes authentifié dans Studio : cela ne donne aucun droit sur les dépôts.
-              </p>
-            </div>
-            <div className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3">
-              <p className="text-sm font-semibold">Accès aux dépôts</p>
-              <p className="text-xs text-[var(--muted)] mt-1">
-                {status === "CONNECTED"
-                  ? "Installation et autorisation utilisateur GitHub App vérifiées côté serveur."
-                  : "Aucune installation GitHub App ni autorisation utilisateur n'est présumée."}
-              </p>
-            </div>
-            <div className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3">
-              <p className="text-sm font-semibold">Publication documentaire</p>
-              <p className="text-xs text-[var(--muted)] mt-1">
-                Les branches, commits, PR et merges nécessitent un mandat distinct.
-              </p>
-            </div>
+          <div className="flex items-center gap-3 flex-wrap">
+            <h2 className="text-[22px] font-semibold m-0">GitHub</h2>
+            {status === "CONNECTED" ? (
+              <span className="git-badge-ok" data-testid="github-connected-badge">
+                ● Connecté
+              </span>
+            ) : null}
           </div>

           {status === "CONNECTED" ? (
-            <ul className="text-sm space-y-1" data-testid="repo-list">
-              {view?.repositories.map((r) => (
-                <li key={r.id} className="mono muted">
-                  {r.fullName}
-                  {r.defaultBranch ? ` · ${r.defaultBranch}` : ""}
-                </li>
-              ))}
-            </ul>
-          ) : (
-            <p className="text-sm muted">Aucun dépôt autorisé.</p>
-          )}
-
-          <div className="flex flex-wrap gap-3 pt-1">
-            {status === "CONNECTED" ? (
-              <>
+            <>
+              <p className="text-sm text-[var(--muted)] m-0">
+                Dépôts autorisés par la GitHub App — affichés côté serveur.
+              </p>
+              {(view?.repositories?.length ?? 0) === 0 ? (
+                <p className="text-sm muted" data-testid="repo-list-empty">
+                  Aucun dépôt autorisé.
+                </p>
+              ) : (
+                <ul className="space-y-2 m-0 p-0 list-none" data-testid="repo-list">
+                  {view!.repositories.map((r) => (
+                    <li
+                      key={r.id}
+                      className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-4 py-3"
+                      data-testid={`integration-repo-${r.id}`}
+                    >
+                      <p className="text-sm font-semibold m-0 mono">{r.fullName}</p>
+                      <p className="text-xs text-[var(--muted)] mt-1 mb-0">
+                        Accessible au compte Pilote
+                        {r.defaultBranch ? ` · branche par défaut ${r.defaultBranch}` : ""}
+                      </p>
+                    </li>
+                  ))}
+                </ul>
+              )}
+              <div className="flex flex-wrap gap-3 pt-1">
                 <button
                   type="button"
                   className="studio-btn"
                   disabled={busy}
                   onClick={() => void refreshRepos()}
                   data-testid="refresh-repos"
                 >
-                  Actualiser les dépôts
+                  Actualiser
                 </button>
                 <button
                   type="button"
                   className="studio-btn-secondary"
                   disabled={busy}
                   onClick={() => setConfirmDisconnect(true)}
                   data-testid="disconnect-github"
                   title="Ouvre la confirmation — aucun appel de déconnexion avant confirmation"
                 >
-                  Déconnecter (Studio)
+                  Déconnecter
                 </button>
-              </>
-            ) : (
-              <>
+              </div>
+            </>
+          ) : (
+            <>
+              <p className="text-sm text-[var(--muted)]">
+                Consulter vos dépôts autorisés, travailler avec Nora et publier des documents sous
+                votre contrôle.
+              </p>
+              <p className="text-sm muted">Aucun dépôt autorisé.</p>
+              <div className="flex flex-wrap gap-3 pt-1">
                 <button
                   type="button"
                   className="studio-btn"
                   disabled={busy}
                   onClick={() => void connect()}
                   data-testid="connect-github"
                 >
                   Configurer GitHub
                 </button>
-                <button type="button" className="studio-btn-secondary" disabled={busy} onClick={() => void refresh()}>
+                <button
+                  type="button"
+                  className="studio-btn-secondary"
+                  disabled={busy}
+                  onClick={() => void refresh()}
+                >
                   Plus tard
                 </button>
-              </>
-            )}
-          </div>
+              </div>
+            </>
+          )}
         </section>

-        <aside className="studio-card p-5 space-y-3">
+        <aside className="studio-card p-5 space-y-3" data-testid="integrations-explain-column">
           <h2 className="text-[20px] font-semibold">Une connexion à la carte</h2>
-          <p className="text-sm text-[var(--muted)]">
-            Connectez GitHub maintenant, ou seulement lorsqu&apos;un projet en aura besoin.
-          </p>
           {[
-            ["1 · Choisir le compte", "Sur GitHub, choisissez un compte ou une organisation."],
-            ["2 · Sélectionner les dépôts", "Limitez l'installation aux dépôts nécessaires."],
-            ["3 · Conserver le contrôle", "Vous pourrez ajouter ou retirer des dépôts plus tard."],
+            [
+              "Connexion personnelle",
+              "Autorisation GitHub propre au Pilote, distincte des projets.",
+            ],
+            [
+              "Rattachements projet",
+              "Chaque projet choisit les dépôts utiles, un ou plusieurs.",
+            ],
+            [
+              "Publication documentaire",
+              "Nora propose, le Pilote inspecte et autorise un mandat distinct.",
+            ],
           ].map(([title, body]) => (
             <div
               key={title}
               className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3"
             >
               <p className="text-sm font-semibold">{title}</p>
               <p className="text-xs text-[var(--muted)] mt-1">{body}</p>
             </div>
           ))}
         </aside>
       </div>

       {message ? <p className="text-sm text-amber-400">{message}</p> : null}
-      <p className="text-xs text-[var(--muted)]" data-testid="provider-mode-note">
-        {!view
-          ? "Chargement du statut d'intégration…"
-          : view.providerMode === "SCRIPTED"
-            ? "Fournisseur d'effet Git SCRIPTED (fixtures). Orthogonal au flux OAuth user-to-server."
-            : "Fournisseur d'effet Git REAL. Orthogonal au statut OAuth CONNECTED — mutations bornées documentary + mandat D6."}
-      </p>
     </div>
   );
 }
```

### `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md`

```diff
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
index 2f40c865..0289748f 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
@@ -1,18 +1,20 @@
 # Ensemble 08 — As-built (consultation Git + conduite Nora)

 | Champ | Valeur |
 |---|---|
-| Date | 2026-11-21 (finalisation technique / préflight RECETTE) |
+| Date | 2026-11-22 (POST-UAT 01 correctif DEV — as-built mis à jour) |
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
@@ -21,16 +23,28 @@
 - Surface UI : publications 30/70 (11.04), détails agrandis (11.05), confirmation déconnexion (11.07) ; indicateur couverture refs incomplète

 ### Capacité B — Nora
 - Qualification durable `d7.merge_publication` (schema + projection `merge.wantsMerge`)
 - `wantsMergeFromQual` **jamais** forcé à `true` depuis le seul mot « merge »
 - Cible exacte dépôt + PR ; contradiction same-PR → zéro effet
 - `admitConversationalMergeMandate` + provenance USER D6
 - Merge SHA : `merge_commit_sha` observé uniquement
+- **POST-UAT 01** : publication d’un document **existant** (sans D4 AVAILABLE same-turn) via `resolvePublicationDocumentTarget`
+- **Convergence** : référence **explicite** (hint/`doc_*`/rév.) **prévaut** sur focus UI et same-turn contradictoires ; `confirmPublicationDocumentWithD4` avant tout prepare D7
+- Gate WRITE REAL avant préparation : `publicationWriteGate` → refus explicite si `STUDIO_GITHUB_ALLOW_MUTATIONS≠documentary`
+- Restitution Nora post-Studio : `composePublicationEffectRestitution` — **un** état métier cohérent (pas de narratif de succès + refus empilés)
+- Champs qual `publication.documentHint` / `objectRef` / `repositoryHint`
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
@@ -42,18 +56,18 @@
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

### `projects/sfia-studio-next/construction/delivery-history.md`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 397824a8..51ccd8b7 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,13 +1,66 @@
 # SFIA Studio Next — Delivery history

 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

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

### `projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts
index ca11f453..155f896f 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts
@@ -24,29 +24,28 @@ test.describe("E08 GitRepositoriesSurface (SCRIPTED)", () => {
     const projectId = await constituteAndCreateProject(page, {
       name: uniqueProjectName("E08 Git Surface"),
       summary: "parcours consultation multi-dépôts SCRIPTED",
     });
     expect(projectId).toBeTruthy();

     await page.goto("/settings/integrations");
     await expect(page.getByTestId("integrations-panel")).toBeVisible();
-    await expect(page.getByTestId("provider-mode-note")).not.toContainText(/Chargement/i, {
-      timeout: 15_000,
-    });
+    await expect(page.getByTestId("integrations-status-banner")).toBeVisible({ timeout: 15_000 });
     if (await page.getByTestId("disconnect-github").isVisible().catch(() => false)) {
       await page.getByTestId("disconnect-github").click();
       await expect(page.getByTestId("integrations-disconnect-confirm")).toBeVisible();
       await page.getByTestId("disconnect-github-confirm").click();
       await expect(page.getByTestId("connect-github")).toBeVisible({ timeout: 15_000 });
     }
     await page.getByTestId("connect-github").click();
-    await expect(page.getByTestId("integrations-status-banner")).toContainText(/GitHub est connecté/i, {
+    await expect(page.getByTestId("integrations-status-banner")).toContainText(/GitHub connecté/i, {
       timeout: 20_000,
     });
+    await expect(page.getByTestId("github-connected-badge")).toBeVisible();
     if (await page.getByTestId("refresh-repos").isVisible().catch(() => false)) {
       await page.getByTestId("refresh-repos").click();
     }

     await page.goto(`/projects/${projectId}?surface=git`);
     await expect(page.getByTestId("git-empty")).toBeVisible({ timeout: 20_000 });
     // P1-02 — choices list, never silent first-repo attach
     const choices = page.getByTestId("git-empty-repo-choices");
@@ -69,17 +68,17 @@ test.describe("E08 GitRepositoriesSurface (SCRIPTED)", () => {
     await expect(page.getByTestId("git-branch-filter-note")).toContainText(/main/i, {
       timeout: 10_000,
     });
     await page.getByTestId("git-branch-select").click(); // close if still open

     // Publications tab — project-scale, historical wording (E08-S04)
     await page.getByTestId("git-tab-publications").click();
     await expect(page.getByTestId("git-publications")).toBeVisible();
-    await expect(page.getByTestId("git-publications")).toContainText(/Projection D4\/D7\/D8|historique/i);
+    await expect(page.getByTestId("git-publications")).toContainText(/historique|publication/i);
     await expect(page.getByTestId("git-pubs-split").or(page.getByTestId("git-publications-empty"))).toBeVisible();

     // Manage — at least one attached; second attach when an unattached button is offered
     await page.getByTestId("git-manage-repos").click();
     await expect(page.getByTestId("git-manage")).toBeVisible();
     await expect(page.getByTestId("git-manage").locator(".git-manage-item").first()).toBeVisible();
     const manageAttaches = page.getByTestId("git-manage").locator("button", { hasText: /^Associer / });
     if ((await manageAttaches.count()) > 0) {
```

### `projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts b/projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts
index 77ffd387..2b74ecc1 100644
--- a/projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts
@@ -32,25 +32,23 @@ test.describe("ML4 git collaboration corrective (SCRIPTED)", () => {
       name: "Projet Git ML4 B",
       summary: "publication documentaire B1-B9",
     });
     expect(projectId).toBeTruthy();

     await page.goto("/settings/integrations");
     await expect(page.getByTestId("integrations-panel")).toBeVisible();
     // Wait for status hydration (avoid race: default DISCONNECTED before fetch).
-    await expect(page.getByTestId("provider-mode-note")).not.toContainText(/Chargement/i, {
-      timeout: 15_000,
-    });
+    await expect(page.getByTestId("integrations-status-banner")).toBeVisible({ timeout: 15_000 });
     if (await page.getByTestId("disconnect-github").isVisible().catch(() => false)) {
       await page.getByTestId("disconnect-github").click();
       await expect(page.getByTestId("connect-github")).toBeVisible({ timeout: 15_000 });
     }
     await page.getByTestId("connect-github").click();
-    await expect(page.getByTestId("integrations-status-banner")).toContainText(/GitHub est connecté/i, {
+    await expect(page.getByTestId("integrations-status-banner")).toContainText(/GitHub connecté/i, {
       timeout: 20_000,
     });
     // Refresh repos so SCRIPTED permission snapshot is current (write for documentary publish).
     if (await page.getByTestId("refresh-repos").isVisible().catch(() => false)) {
       await page.getByTestId("refresh-repos").click();
       await expect(page.getByTestId("repo-list")).toBeVisible({ timeout: 10_000 });
     }
```

---

## 8. Checklist revue indépendante

### 8.1 Cible explicite > focus
Voir `publication-document-target.ts` : cas A/B (B gagne), v2 vs head v3, NOT_FOUND sans sole fallback, AMBIGUOUS, `confirmPublicationDocumentWithD4`.

### 8.2 Restitution mono-état
Voir `publication-effect-restitution.ts` : strip hedges + strip premature success ; COMPLETED / WRITE-off / UNKNOWN distincts ; pas de « Je publie » + refus.

### 8.3 Infos a11y
`panelId` prop = `aria-controls` ; Escape/Fermer → focus trigger ; fermeture sur changement repo/branche.

### 8.4 Intégrations 11.06
Structure : badge Connecté, liste repos serveur, CTA Actualiser/Déconnecter, colonne portée ; confirmation 11.07 inchangée.

---

## 9. Fake/Real

| Capacité | Niveau |
|---|---|
| Explicit>focus + D4 confirm | DETERMINISTIC PROVEN (unit + PG) |
| WRITE-off coherent restitution | DETERMINISTIC PROVEN (unit + PG) |
| Playwright git surface / integrations | DETERMINISTIC PROVEN (SCRIPTED DEV e2e) |
| Nora LIVE post-fix | NOT PROVEN |
| REAL WRITE | NOT PROVEN / hors mandat |
| G5 pixel | NOT PROVEN |

---

## 10. Réserves / gates

- Correctifs **non commités** projet.
- G5 / freeze / cutover : GO Morris ultérieurs.
- Infos open state : candidat comportemental (pas frame Figma validée).
- Playwright publication Nora bout-en-bout (clarification→WRITE-off→SCRIPTED success) : **non couvert** ce cycle (surface E08 PASS ; chaîne PG partielle).

---

## 11. Verdict

**DELIVERY READY WITH RESERVES**

READY FOR REVIEW ChatGPT (code + diffs + preuves unit/PG/Playwright surface).
≠ FREEZE / ≠ RECETTE ACCEPTED / ≠ REAL WRITE / ≠ STABLE.
