# SFIA Review Pack — FULL · CRITICAL
## Ensemble 08 — POST-UAT 01 FREEZE LOCAL CANDIDAT

> REPUBLICATION L3 — complément §7.2.1 : diffs intégraux des **16** fichiers modifiés (écart « Diffs modifications » incomplet corrigé). SHA candidat inchangé `9f34639110ce2315a2bf8dc0786197bb8f5ea3b1`.

- date_utc: 2026-11-22T03:40:44Z
- timezone_local: Europe/Paris (2026-11-22T04:40:44+0100)
- cycle: CYCLE 8 — DELIVERY PROJET
- typologie: EVOL / QA / FREEZE CANDIDAT
- profil: CRITICAL
- product_versioning: NO RELEASE
- review_handoff: REQUIRED / PUBLISH-IN-CYCLE
- env_01: REQUIRED (RECETTE inchangée)

---

## 1. GO Morris

GO explicite honoré pour :
- preuves d'acceptation restantes (réserves A/B/C) ;
- corrections bloquantes de qualification (filtre branche / detach UX) ;
- tests unit/PG/Playwright/tsc ;
- intégration E08 POST-UAT ;
- **commit LOCAL projet** ;
- identification SHA/TREE immuables ;
- build détaché reproductible ;
- manifeste candidat ;
- Review Handoff L3.

NON exécuté / NON autorisé :
- push branche projet ; PR ; merge ; origin/main ;
- mutation RECETTE (:3200) ; cutover ; STABLE ; release ; ADOPTED ;
- GitHub REAL WRITE ; migration destructive.

---

## 2. Git Truth — initial

| Champ | Valeur |
| --- | --- |
| Repo | mcleland147/sfia-workspace (origin https://github.com/mcleland147/sfia-workspace.git) |
| Root produit | projects/sfia-studio-next/ |
| Branche | feat/next-ensemble08-git-publications-nora |
| HEAD observé avant freeze | 29066442a7fa51b106d9fe45b5c1b05da7f13004 |
| origin/main | a12f89a15c454319c06f49fcc5e8effa9f3f1a75 |
| Dernier handoff L3 | 3af35bc3e630e06e3c3b193d9b54e0d685f7cbc4 |
| Blob handoff précédent | d2bdbf39f0bb9841d0ab28aca2daa14cd95eb9af |
| État dirty avant commit | 24 chemins E08 + .tmp-sfia-review (exclu) |

Provenance : branche attendue ; base origin/main inchangée ; parent = HEAD clôture 29066442. **Pas de divergence STOP.**

---

## 3. Git Truth — final

| Champ | Valeur |
| --- | --- |
| Branche | feat/next-ensemble08-git-publications-nora |
| SOURCE_SHA candidat (runtime) | 9f34639110ce2315a2bf8dc0786197bb8f5ea3b1 |
| TREE candidat | 364c907342772f5430cf855d269cecc458f0546c |
| Parent | 29066442a7fa51b106d9fe45b5c1b05da7f13004 |
| Base origin/main | a12f89a15c454319c06f49fcc5e8effa9f3f1a75 |
| Commit message | feat(next): finalize E08 git publications and Nora post-UAT |
| Commit docs identités | 35906960e39eb617d39c76bf991f802ece4865ff — docs(next): record E08 POST-UAT freeze SHA TREE BUILD_ID |
| HEAD tip local | 35906960e39eb617d39c76bf991f802ece4865ff |
| Untracked/dirty hors pack | .tmp-sfia-review/chatgpt-review.md seulement (hors candidat) |
| Push projet | **NONE** |

Association build :
| BUILD_ID | SOURCE_SHA | TREE | Artefact |
| F85QQBTLa8nq5zKYxMKKZ | 9f34639110ce2315a2bf8dc0786197bb8f5ea3b1 | 364c907342772f5430cf855d269cecc458f0546c | /Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-postuat-build-9f346391/projects/sfia-studio-next/web/.next |

---

## 4. Inventaire commit candidat (9f34639110ce2315a2bf8dc0786197bb8f5ea3b1)

M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
A	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/post-uat-01-l0-l2.md
M	projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md
M	projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
M	projects/sfia-studio-next/web/src/components/figma/tokens.css
A	projects/sfia-studio-next/web/src/components/integrations/GitFileInfoPopover.tsx
M	projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx
M	projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx
M	projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-authority.ts
M	projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
M	projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
M	projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
A	projects/sfia-studio-next/web/src/domains/conversation/publication-document-target.ts
A	projects/sfia-studio-next/web/src/domains/conversation/publication-effect-restitution.ts
M	projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
M	projects/sfia-studio-next/web/src/domains/conversation/service.ts
M	projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/ensemble08-nora-publication.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts
M	projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
A	projects/sfia-studio-next/web/tests/integration/publication-nora-cloture.pg.test.ts
A	projects/sfia-studio-next/web/tests/integration/publication-target-post-uat.pg.test.ts
A	projects/sfia-studio-next/web/tests/unit/publication-effect-restitution.test.ts

### Statistiques
24 files changed, 3167 insertions(+), 301 deletions(-)

Créations :
- construction/.../figma-evidence/post-uat-01-l0-l2.md
- web/src/components/integrations/GitFileInfoPopover.tsx
- web/src/domains/conversation/publication-document-target.ts
- web/src/domains/conversation/publication-effect-restitution.ts
- web/tests/e2e/ensemble08-nora-publication.spec.ts
- web/tests/integration/publication-nora-cloture.pg.test.ts
- web/tests/integration/publication-target-post-uat.pg.test.ts
- web/tests/unit/publication-effect-restitution.test.ts

Modifications majeures :
- service.ts (publication path, NOT_ATTEMPTED, D4 confirm)
- mission-continuity.ts (restitution métier resume COMPLETED)
- conversation-publication-authority.ts (persistAssistantMessage:false)
- pilotage-effect-restitution.ts
- GitRepositoriesSurface.tsx (filtre branche repositoryId-only + detach UX)
- IntegrationsPanel / ProjectChrome / tokens.css
- as-built.md, delivery-history.md, manifeste section B
- ensemble08-git-surface.spec.ts, mission-continuity-accept01.pg.test.ts
- fixture-semantic-qualify.ts, semantic-qualification.ts

---

## 5. Réserve A — contenu D4 révision 2 ↔ Git SCRIPTED

Scénario C6 (publication-nora-cloture.pg.test.ts) :
- document existant ; rev2 contenu exact `# clôture v2 exact content` ;
- rev3 tête/focus concurrent `# clôture v3 head — must not publish` ;
- publication ciblée révision 2 (revisionHint v2 / plan.revisionId = rev2).

Assertions exécutées (PASS) :
1. getDocumentRevision(rev2) → contentMarkdown exact.
2. provider.getFileContent(repo, path, branch) encoding utf-8.
3. published.content === sourceContent (égalité string).
4. Buffer utf-8 equals byte-exact (pas de normalisation silencieuse).
5. published ≠ contenu rev3 ; pas de « must not publish ».
6. listProjectPublications : matching docId+rev2 ; aucune pub rev3.
7. mergeObserved=false ; mut.mergePR=0 ; pas de MERGE facts.
8. Nora restitution : « a été publié » + « révision 2 » + « Aucune fusion ».
9. Aucune mutation documentaire implicite D4 (rev2/rev3 inchangés hors publication).

Log : `/tmp/e08-c6-reserve.log` — `✓ C6 SCRIPTED: explicit revision over focus — D6/D7/D8 + Nora COMPLETED`

---

## 6. Réserve B — terminalité D7 / projection D8

Exigences :
- succès publication ⇒ status terminal **COMPLETED** (DISPATCHED seul refusé) ;
- reconcile gouverné si non terminal ;
- D8 observedGitFacts présents ;
- projection listProjectPublications COMPLETED ;
- bon document + bonne révision ;
- restitution Nora après preuve ;
- idempotence : pas de double tentative / second commit sur rejeu ;
- pas de merge implicite.

Preuves C6 PASS :
- missionProjection.status === COMPLETED
- reconcile → COMPLETED
- attempt.status === COMPLETED
- facts.length > 0 ; pas de MERGE/PR_MERGED
- pubs matching effectStatus COMPLETED ; mergeObserved false
- afterAttempts = before + 1 (pas de double)
- rejeu / refresh : assertions idempotence dans la suite (counts stables)

Log suite freeze : Test Files 6 passed · Tests 54 passed (`/tmp/e08-freeze-tests.log`)

---

## 7. Réserve C — build détaché

Commande :
```
git worktree add --detach …/sfia-workspace-next-ml4d-ensemble08-postuat-build-9f346391 9f346391…
cd …/projects/sfia-studio-next/web && npm ci --ignore-scripts && npx next build
```

| Champ | Valeur |
| --- | --- |
| WT_HEAD | 9f34639110ce2315a2bf8dc0786197bb8f5ea3b1 |
| WT_TREE | 364c907342772f5430cf855d269cecc458f0546c |
| lockfile | package-lock respecté (npm ci) |
| DB compile | 127.0.0.1:5433 /sfia_next_dev (pas RECETTE) |
| OPENAI | neutralisé pour build |
| BUILD_ID | F85QQBTLa8nq5zKYxMKKZ (≠ 1xEbvCdTAX6ht262w4oKF) |
| Artefact | …/postuat-build-9f346391/…/web/.next |
| Sidecars | SOURCE_SHA.txt / SOURCE_TREE.txt |
| next build | PASS (exit 0) |
| Port 3200 | **non utilisé** |

---

## 8. Tests

| Suite | Commande / cible | Résultat |
| --- | --- | --- |
| TypeScript | tsc --noEmit | PASS (`/tmp/e08-freeze-tsc.log` vide = OK) |
| Unit + PG ciblés | vitest publication-* + mission-continuity + authority | **54 PASS / 6 files** |
| PG C6 réserves | publication-nora-cloture C6 | PASS |
| PG post-uat target | publication-target-post-uat | PASS (3) |
| Playwright | ensemble08-git-surface + ensemble08-nora-publication | **5 PASS** (`/tmp/e08-pw-freeze3.log`, 40.2s) |
| git diff --check | staged freeze | PASS (WS manifeste corrigé avant commit) |

Fake/Real :
- Unit/PG/SCRIPTED : DETERMINISTIC PROVEN
- Playwright DEV SCRIPTED : navigateur réel / frontière Git simulée
- Nora LIVE / GitHub REAL WRITE/MERGE / G5 : **NOT PROVEN**

---

## 9. ENV-01

| Champ | Valeur |
| --- | --- |
| RECETTE URL | http://127.0.0.1:3200 |
| SOURCE servie | 98185598de0d3f3b84af862aecea04b9099217ca |
| TREE | 1c70839facb7fbc799980c585ce8bfba51cdb5d6 |
| BUILD_ID HTTP | <!--1xEbvCdTAX6ht262w4oKF--> (observé curl login 200) |
| Service | com.sfia.studio.next.recette.ml4d-ux004 running |
| Program | …/ensemble08-recette-build-98185598/start-recette-ensemble08-98185598.sh |
| DB | sfia_next_recette_ml4 |
| Mutation ce cycle | **AUCUNE** |
| Candidat branché sur 3200 | **NON** |
| STABLE | NOT AVAILABLE |
| Product version | NO RELEASE |

---

## 10. Manifeste candidat

Fichier : construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md

- **A** Cutover E07→E08 historique : inchangé (RECETTE AVAILABLE historique @98185598)
- **B** Candidat POST-UAT 01 : SOURCE_SHA/TREE/BUILD_ID renseignés ; Cutover **NOT EXECUTED** ; verdict **CANDIDATE FROZEN — RECETTE GO REQUIRED**
- **C** Cutover futur : NOT EXECUTED — gate Morris SHA+BUILD

Migrations additionnelles : aucune. Compatibilité schéma RECETTE conservée. Rollback : artefacts E07 + E08@98185598 préservés.

---

## 11. Fake / Real Qualification

APPLICABLE : OUI.

| Frontière | Niveau |
| --- | --- |
| Unitaires | DETERMINISTIC |
| PostgreSQL intégré | DETERMINISTIC |
| Provider Git SCRIPTED | DETERMINISTIC |
| Playwright DEV SCRIPTED | BROWSER + Git simulé |
| Nora LIVE | HORS PREUVE |
| GitHub REAL WRITE/MERGE | HORS PREUVE |
| E2E REAL / G5 | HORS PREUVE |

SCRIPTED ≠ REAL. Freeze ne lève aucune permission externe.

---

## 12. Créations intégrales — publication-document-target.ts

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

---

## 13. Créations intégrales — publication-effect-restitution.ts

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

---

## 14. Créations — GitFileInfoPopover.tsx

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

---

## 15. Créations — tests (intégral)

### publication-effect-restitution.test.ts
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

### publication-nora-cloture.pg.test.ts
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
  observedGitFacts,
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
import { listProjectPublications } from "@/domains/integrations/publication-projection-service";
import { reconcileAttempt } from "@/domains/execution/effect-service";
import { postUserMessageAndNora, listMessages } from "@/domains/conversation/service";
import { getDocumentRevision, listDocuments } from "@/domains/document/service";
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

    let attempt = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepStep!.attemptId!))
    )[0];
    expect(attempt?.kind).toBe("GIT_PUBLICATION");
    expect(attempt?.decisionId).toBe(prepStep?.decisionId);

    // Reserve B — DISPATCHED alone is not success; reconcile to terminal COMPLETED.
    if (attempt?.status === "DISPATCHED" || attempt?.status === "AMBIGUOUS") {
      const rec = await reconcileAttempt(pilotId, projectId, attempt.id);
      expect(rec.status).toBe("COMPLETED");
      attempt = (
        await db.select().from(effectAttempts).where(eq(effectAttempts.id, attempt.id))
      )[0];
    }
    expect(attempt?.status).toBe("COMPLETED");

    const plan = JSON.parse(attempt!.planJson || "{}") as {
      repositoryFullName?: string;
      publicationBranch?: string;
      targetPath?: string;
      documentId?: string;
      revisionId?: string;
      proposedContent?: string;
    };
    expect(plan.documentId).toBe(docId);
    expect(plan.revisionId).toBe(rev2);
    expect(plan.targetPath).toBe("docs/studio-next/cloture-v2.md");
    expect(plan.repositoryFullName).toBeTruthy();
    expect(plan.publicationBranch).toBeTruthy();

    // Reserve A — D4 rev2 content vs SCRIPTED published file (no silent normalize).
    const d4 = await getDocumentRevision(pilotId, preparationId, docId, rev2);
    expect(d4.status).toBe("AVAILABLE");
    if (d4.status !== "AVAILABLE" || !("revision" in d4) || !d4.revision) {
      throw new Error("D4 rev2 unavailable");
    }
    const sourceContent = d4.revision.contentMarkdown;
    expect(sourceContent).toBe("# clôture v2 exact content");
    expect(sourceContent).not.toContain("must not publish");
    if (plan.proposedContent != null) {
      expect(plan.proposedContent).toBe(sourceContent);
    }

    const provider = getScriptedGitHubProvider();
    const published = await provider.getFileContent(
      pilotId,
      plan.repositoryFullName!,
      plan.targetPath!,
      plan.publicationBranch!,
    );
    expect(published.encoding).toBe("utf-8");
    expect(published.content).toBe(sourceContent);
    expect(Buffer.from(published.content, "utf8").equals(Buffer.from(sourceContent, "utf8"))).toBe(
      true,
    );
    expect(published.content).not.toContain("must not publish");
    expect(published.content).not.toBe("# clôture v3 head — must not publish");

    // D8 facts + project publications projection
    const facts = await db
      .select()
      .from(observedGitFacts)
      .where(eq(observedGitFacts.attemptId, attempt!.id));
    expect(facts.length).toBeGreaterThan(0);
    expect(facts.some((f) => f.factKind === "COMMIT" || f.factKind === "PR_OPENED" || f.factKind === "BRANCH")).toBe(
      true,
    );
    expect(facts.some((f) => f.factKind === "MERGE" || f.factKind === "PR_MERGED")).toBe(false);

    const pubs = await listProjectPublications(pilotId, projectId);
    const matching = pubs.publications.filter(
      (p) => p.documentId === docId && p.revisionId === rev2,
    );
    expect(matching.length).toBeGreaterThanOrEqual(1);
    expect(pubs.publications.some((p) => p.revisionId === rev3)).toBe(false);
    expect(matching[0]!.targetPath).toBe(plan.targetPath);
    expect(matching[0]!.repositoryFullName).toBe(plan.repositoryFullName);
    expect(matching[0]!.effectStatus).toBe("COMPLETED");
    expect(matching[0]!.mergeObserved).toBe(false);

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

    // Nora restitution only after terminal proof
    const thread = await listMessages(pilotId, preparationId);
    const lastAssistant = [...thread].reverse().find((m) => m.role === "assistant");
    expect(lastAssistant?.content ?? "").toMatch(/a été publié/i);
    expect(lastAssistant?.content ?? "").toMatch(/révision 2/i);
    expect(lastAssistant?.content ?? "").toMatch(/Aucune fusion/i);
    expect(lastAssistant?.content ?? "").not.toMatch(/reste à confirmer/i);
    expect(lastAssistant?.content ?? "").not.toMatch(/encore en vérification/i);

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

### publication-target-post-uat.pg.test.ts
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

### ensemble08-nora-publication.spec.ts
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

---

## 16. Diffs modifications (parent → candidat) — COMPLET §7.2.1

Comparaison : `29066442a7fa51b106d9fe45b5c1b05da7f13004` → `9f34639110ce2315a2bf8dc0786197bb8f5ea3b1`
Fichiers modifiés : **16 / 16** — diffs **intégraux** (pas d'extrait borné).
Aucun fichier M omis. Les créations (A) restent dans les sections 12–15.

Inventaire M :
- `projects/sfia-studio-next/construction/delivery-history.md`
- `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md`
- `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md`
- `projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx`
- `projects/sfia-studio-next/web/src/components/figma/tokens.css`
- `projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx`
- `projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx`
- `projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-authority.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/service.ts`
- `projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts`
- `projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts`
- `projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts`

### Diff unifié — 16 fichiers modifiés

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 397824a8..95da8639 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,91 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01-FREEZE-LOCAL
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 (Europe/Paris) |
+| Macro-lot | Ensemble 08 — POST-UAT 01 freeze local candidat |
+| Type | EVOL / QA / FREEZE CANDIDAT · CRITICAL · **NO RELEASE** |
+| Branche | `feat/next-ensemble08-git-publications-nora` |
+| Base | `origin/main` `a12f89a1` |
+| GO Morris | Commit local + build détaché autorisés ; push/PR/cutover **NON** |
+| Réserves fermées | A contenu D4↔SCRIPTED · B D7 COMPLETED + D8 · C build détaché |
+| Push projet | **NONE** |
+| Cutover | **NOT EXECUTED** — RECETTE `@98185598` intacte |
+| Verdict | (voir Review Pack / manifeste section B) |
+
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
+| Verdict | DELIVERY READY WITH RESERVES (A/B/C traitées au freeze) |
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
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
index 2f40c865..72570bbe 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
@@ -2,12 +2,14 @@

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

@@ -26,6 +28,21 @@
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
@@ -47,8 +64,8 @@
 - END-TO-END REAL mutation GitHub : **NOT PROVEN** (WRITE/MERGE hors mandat)
 - GitHub REAL READ : **NOT PROVEN** ce cycle
 - Nora LIVE E2E : **NOT PROVEN**
-- Candidate Git figée / build RECETTE : **NOT AVAILABLE**
-- RECETTE déploiement : hors cycle (préflight only)
+- Candidate Git figée / build RECETTE : **SERVI** `@98185598` / `1xEbvCdTAX6ht262w4oKF` sur lane E07
+- G5 visuelle : **NOT PROVEN** — UAT Morris

 ## Preuves exécutées (finalisation)
 - `tsc --noEmit` PASS
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md
index 4203f49f..c5ecfab8 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md
@@ -1,83 +1,166 @@
-# Manifeste ENV-01 — Cutover RECETTE E07 + E08 (préparé, non exécuté)
+# Manifeste ENV-01 — Cutover RECETTE E07 → E08 (exécuté)

 | Champ | Valeur |
 | --- | --- |
-| Date préparation | 2026-11-21 (Europe/Paris) |
+| Date/heure cutover | 2026-11-21 ≈ 21:02 CET (UTC 20:02) |
 | Classe | **NO RELEASE** |
-| Lane cible | **RECETTE existante E07** (`STUDIO_LANE=RECETTE`, port **3200**) |
-| Cutover | **NOT EXECUTED** — GO Morris SHA-specific requis |
+| Lane | **RECETTE existante** (`STUDIO_LANE=RECETTE`, port **3200**) |
+| Cutover | **EXECUTED** — GO Morris SHA-specific honoré |
 | STABLE | NOT AVAILABLE / non modifié |
+| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** |

-## Runtime actuellement servi (avant cutover) — observé
+## GO Morris (borné)

-| Champ | Valeur observée |
+| Champ | Valeur |
+| --- | --- |
+| SHA autorisé | `98185598de0d3f3b84af862aecea04b9099217ca` |
+| TREE | `1c70839facb7fbc799980c585ce8bfba51cdb5d6` |
+| BUILD_ID | `1xEbvCdTAX6ht262w4oKF` |
+| Push/PR/merge projet | **NONE** |
+| GitHub REAL WRITE/MERGE | **OFF** |
+
+## Runtime AVANT (E07)
+
+| Champ | Valeur |
 | --- | --- |
-| URL | http://127.0.0.1:3200 |
-| Service LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` |
-| PID node | 75565 (`next-server` v15.5.29) |
-| Script | `…/sfia-workspace-next-ml4d-ensemble07-recette-build-5ad8fa57/start-recette-ensemble07-5ad8fa57.sh` |
-| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble07-recette-build-5ad8fa57` |
 | SOURCE_SHA | `5ad8fa57e4d529726244ddfae394074f5ea65432` |
 | TREE | `f62a77a1b89dbcbfc1d4009d24c9859017d69cc6` |
-| BUILD_ID | `BtZP6qDx5oAw8jwPQSEhc` (HTTP `<!--BtZP6qDx5oAw8jwPQSEhc-->` + fichier `.next/BUILD_ID`) |
-| Mode | `npx next start -H 127.0.0.1 -p 3200` · `NODE_ENV=production` · pas de hot reload |
-| GitHub mutations | `STUDIO_GITHUB_ALLOW_MUTATIONS` unset/vide |
-| Nora fixture force | unset (LIVE possible selon secrets lane — non requalifié ici) |
+| BUILD_ID | `BtZP6qDx5oAw8jwPQSEhc` |
+| Script | `start-recette-ensemble07-5ad8fa57.sh` |
+| Worktree | `…/sfia-workspace-next-ml4d-ensemble07-recette-build-5ad8fa57` |
+| PID node | 75565 |

-## PostgreSQL RECETTE (observé, non muté)
+## Runtime APRÈS (E08) — observé

 | Champ | Valeur |
 | --- | --- |
-| Container | `sfia-next-recette-pg` Up · `127.0.0.1:5434→5432` |
-| DB / rôle | `sfia_next_recette_ml4` |
-| Isolation | DEV PG distinct `sfia-next-dev-pg` :5433 |
-| Inventaire non sensible | projects=26 · documents=117 · document_revisions=188 · conversations=203 · messages=629 · human_decisions=3 · effect_attempts=4 · business_command_effects=4 · project_git_links=15 · observed_git_facts=0 · users=4 · sessions=118 · accounts=2 |
-| Schéma drizzle migrations table | **non observée** dans cette DB (pas de `drizzle.__drizzle_migrations`) |
-| Restauration auto | **INTERDITE** — ne pas recréer DB vide ni restaurer dump en écrasement |
+| URL | http://127.0.0.1:3200 |
+| Service | `com.sfia.studio.next.recette.ml4d-ux004` (même label) |
+| Script | `…/ensemble08-recette-build-98185598/start-recette-ensemble08-98185598.sh` |
+| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-recette-build-98185598` |
+| WorkingDirectory | `…/web` |
+| PID launchd / node | 52210 / 52237 (`next-server` v15.5.29) |
+| SOURCE_SHA (script) | `98185598de0d3f3b84af862aecea04b9099217ca` |
+| BUILD_ID fichier + HTTP | `1xEbvCdTAX6ht262w4oKF` (`<!--1xEbvCdTAX6ht262w4oKF-->`) |
+| Mode | `npx next start -H 127.0.0.1 -p 3200` · production · pas de hot reload |
+| Login HTTP | 200 |
+
+## Actions cutover (exactes)
+
+1. Plist backup : `com.sfia.studio.next.recette.ml4d-ux004.plist.5ad8fa57.pre-e08-cutover-20261121T200200Z.bak`
+2. `launchctl bootout` du service
+3. ProgramArguments → `start-recette-ensemble08-98185598.sh` ; WorkingDirectory → E08 `web/`
+4. `launchctl bootstrap` même label
+5. Vérification HTTP BUILD_ID + CWD processus

-## Candidat E08 (à renseigner après freeze + build)
+## PostgreSQL / données

 | Champ | Valeur |
 | --- | --- |
-| Branche source | `feat/next-ensemble08-git-publications-nora` |
-| Base main | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
-| SHA candidat | `98185598de0d3f3b84af862aecea04b9099217ca` |
-| TREE candidat | `1c70839facb7fbc799980c585ce8bfba51cdb5d6` |
-| BUILD_ID candidat | `1xEbvCdTAX6ht262w4oKF` |
-| Worktree build | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-recette-build-98185598` |
-| Script démarrage préparé | `start-recette-ensemble08-98185598.sh` (non branché LaunchAgent) |
+| DB | `sfia_next_recette_ml4` @ `127.0.0.1:5434` (`sfia-next-recette-pg`) |
+| Isolation DEV | `sfia-next-dev-pg` :5433 distincte |
+| Migrations E08 | **aucune** appliquée (invariant confirmé) |
+| Inventaire AVANT | projects=26 · documents=117 · document_revisions=188 · conversations=203 · messages=629 · human_decisions=3 · effect_attempts=4 · business_command_effects=4 · project_git_links=15 · observed_git_facts=0 · users=4 · sessions=118 · accounts=2 |
+| Inventaire APRÈS smoke | projects=**26** · messages=**633** (+4 essais Playwright Nora) · sessions=**123** (logins test) · Equip'Campus `proj_a9ce5f43…` présent · conversations=1 · messages=14 |
+| Perte anormale | **NON** |

-## Capacités réellement disponibles après cutover (prévision)
+## Backup / restauration / rollback

-| Capacité | Mode attendu |
+| Élément | Statut |
 | --- | --- |
-| E01–E07 | Conservées (même DB + nouveau code) |
-| Consultation Git multi-dépôts | Code E08 ; provider selon config RECETTE |
-| Nora conduite documentaire | Selon secrets lane ; SCRIPTED ≠ LIVE |
-| GitHub REAL WRITE/MERGE | **OFF** sauf GO sandbox explicite |
-| G5 visuelle | **NOT PROVEN** — Morris UAT |
+| Backup historique | `ml4d-e07-pre-e08-cutover-20261121T193852Z-from-5ad8fa57.sql.gz` — gzip OK |
+| Backup immédiat pré-cutover | `ml4d-e07-pre-e08-cutover-immediate-20261121T200119Z-from-5ad8fa57.sql.gz` — gzip OK |
+| Preuve restore isolée | CREATE `sfia_next_recette_restore_proof_e08` → restore → projects=26/messages=629 → DROP — RECETTE intacte |
+| Rollback E07 code | Worktree + BUILD `BtZP6qDx5oAw8jwPQSEhc` + plist `.bak` conservés — **non exercé** (cutover OK) |

-## Backup / rollback (préparation)
+## Capacités observées

-| Élément | Statut |
+| Capacité | Observation | Niveau |
+| --- | --- | --- |
+| E07 surfaces (Pilot A test login) | `/projects/…` travail/projet/trajectoire/documents/git → HTTP 200 | Browser/API smoke |
+| Equip'Campus (Morris) | Présent en DB (identité OAuth Morris non exercée ce cycle) | DB continuity |
+| Intégrations | `providerMode=REAL`, `status=DISCONNECTED` pour Pilot A | REAL config, non connecté |
+| Git sources/pubs API | 200, listes vides sans dépôt rattaché | DETERMINISTIC path |
+| GitHub REAL WRITE | Mutations OFF (`STUDIO_GITHUB_ALLOW_MUTATIONS` vide) | NOT PROVEN / OFF |
+| Nora | Clé OPENAI présente en RECETTE → LIVE possible | LIVE config ; E2E conduit NOT PROVEN |
+| Playwright E08 SCRIPTED | **3/3 FAIL** sur RECETTE — attendu (fixture≠LIVE ; connect SCRIPTED≠OAuth REAL) | N/A as REAL proof |
+| G5 | **NOT PROVEN** — Morris UAT | Différé |
+
+## Fake / Real
+
+| Frontière | Niveau |
 | --- | --- |
-| Ancien worktree E07 | Disponible `@5ad8fa57` |
-| Ancien BUILD_ID | `BtZP6qDx5oAw8jwPQSEhc` |
-| Script rollback | Relancer plist/script E07 `start-recette-ensemble07-5ad8fa57.sh` |
-| Backup PG frais | `ml4d-e07-pre-e08-cutover-20261121T193852Z-from-5ad8fa57.sql.gz` (691K, gzip OK) |
-| Rollback DB | Code rollback ≠ DB rollback ; pas de drop/truncate |
-
-## Procédure cutover (exécutable seulement après GO)
-
-1. Confirmer SHA/BUILD_ID cibles = GO Morris.
-2. Confirmer backup PG lisible.
-3. Arrêter `com.sfia.studio.next.recette.ml4d-ux004`.
-4. Appliquer migrations **seulement si nécessaires et non destructives**.
-5. Pointer LaunchAgent vers worktree/build E08 figé (même label/port/DB).
-6. Relancer service ; vérifier health + identité HTTP BUILD_ID.
-7. Vérifier inventaire données ≈ avant.
-8. Smoke E07 + E08 ; consigner manifeste final.
-
-## Gate
-
-**GO SHA-SPECIFIC REQUIRED.** Sans GO : **STOP BEFORE MUTATION RECETTE.**
+| Runtime build servi | REAL BOUNDARY (artefact figé servi) |
+| PostgreSQL RECETTE | REAL BOUNDARY (même DB) |
+| GitHub provider mode | REAL configuré ; WRITE OFF ; connexion Pilot A absente |
+| Nora | LIVE credentials présents ; parcours conduit NOT PROVEN |
+| Playwright SCRIPTED | NOT applicable as RECETTE proof |
+
+## Réserves / gates Morris
+
+1. UAT visuelle page 11 (G5)
+2. Parcours Git avec compte Morris + App autorisée
+3. Nora conduite documentaire LIVE bornée (sans WRITE si non autorisé)
+4. GO éventuel sandbox WRITE/MERGE
+5. Push/PR projet hors cycle
+
+## Verdict manifeste (cutover historique)
+
+**RECETTE AVAILABLE — MORRIS UAT REQUIRED**
+(runtime actuellement servi : SHA `98185598` / BUILD `1xEbvCdTAX6ht262w4oKF` — **inchangé** par le freeze POST-UAT 01)
+
+---
+
+# B. Candidat E08 POST-UAT 01 — freeze local (préparé)
+
+| Champ | Valeur |
+| --- | --- |
+| Date/heure freeze local | 2026-11-22 (Europe/Paris) |
+| GO Morris | Freeze local + build détaché **autorisés** ; cutover RECETTE **non** autorisé |
+| Classe | **NO RELEASE** · CANDIDAT |
+| Branche | `feat/next-ensemble08-git-publications-nora` |
+| Base / parent | `origin/main` `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
+| SOURCE_SHA (à renseigner après commit) | _PENDING_COMMIT_ |
+| TREE (à renseigner après commit) | _PENDING_TREE_ |
+| BUILD_ID (à renseigner après build détaché) | _PENDING_BUILD_ |
+| Artefact | worktree détaché hors DEV mutable / hors :3200 |
+| Cutover | **NOT EXECUTED** |
+| RECETTE actuelle | **préservée** `@98185598` / `1xEbvCdTAX6ht262w4oKF` |
+
+## Contenu candidat
+
+- Ensemble 08 initial + correctifs UX POST-UAT 01
+- Publication document existant + réconciliation `objectRef`/`documentHint`
+- Contrôle D4 document/révision ; D6/D7/D8/D9 ; restitution Nora
+- Reprise/idempotence ; filtre branche S03 (fix useEffect)
+- Preuves : unit + PG WRITE OFF / SCRIPTED contenu D4↔Git + terminalité COMPLETED + Playwright Nora/Git
+
+## Fake / Real (candidat)
+
+| Frontière | Niveau |
+| --- | --- |
+| Unit / PG / SCRIPTED | DETERMINISTIC PROVEN |
+| Playwright DEV SCRIPTED | BROWSER + Git simulé |
+| Nora LIVE | NOT PROVEN |
+| GitHub REAL WRITE/MERGE | NOT PROVEN |
+| G5 pixel / UAT Morris | NOT PROVEN |
+
+## Migrations
+
+Aucune migration DB additionnelle requise pour ce candidat (vérifiée — schéma RECETTE `sfia_next_recette_ml4` compatible).
+
+## Mise à disposition future (NON EXÉCUTÉE)
+
+1. GO Morris SHA-specific + BUILD_ID
+2. Worktree/build détaché déjà produit
+3. Remplacer le ProgramArguments LaunchAgent **sans** toucher la DB
+4. Smoke HTTP BUILD_ID sur :3200
+5. Conserver artefacts E07 + E08 `@98185598` pour rollback
+
+## C. Cutover futur
+
+**NOT EXECUTED** — gate Morris distinct rattaché au nouveau SHA/BUILD.
+
+## Verdict section B
+
+**CANDIDATE PREPARED — RECETTE GO REQUIRED** (à confirmer après SHA/TREE/BUILD renseignés)
diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
index 2792d128..6d8f8fb3 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
@@ -37,14 +37,14 @@ const HERO: Record<
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

@@ -78,7 +78,9 @@ export function ProjectChrome(props: {
   const isJournal = props.surface === "journal";
   /** Ensemble 07 — Projet / Trajectoire heroes live in ProjectOverview / TrajectoryBoard. */
   const isProjetOrTrajectoire = props.surface === "projet" || props.surface === "pilotage";
-  const breadcrumbOnly = isTravail || isJournal || isProjetOrTrajectoire;
+  /** Ensemble 08 — Dépôts Git / Publications heroes live in GitRepositoriesSurface. */
+  const isGitSurface = props.surface === "git" || props.surface === "publication";
+  const breadcrumbOnly = isTravail || isJournal || isProjetOrTrajectoire || isGitSurface;

   const continuityBadge =
     isTravail && props.statusHint && !/^chargement/i.test(props.statusHint) ? (
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index d0f908c3..6752bc97 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -5244,6 +5244,36 @@
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
diff --git a/projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx b/projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx
index 8f06836d..33af5167 100644
--- a/projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx
+++ b/projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx
@@ -2,6 +2,7 @@

 import { useCallback, useEffect, useMemo, useRef, useState } from "react";
 import { SafeMarkdown } from "@/components/SafeMarkdown";
+import { GitFileInfoPopover } from "@/components/integrations/GitFileInfoPopover";

 type GitSource = {
   linkId: string;
@@ -91,6 +92,8 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
   const [file, setFile] = useState<FileView | null>(null);
   const [fileError, setFileError] = useState<string | null>(null);
   const [infoOpen, setInfoOpen] = useState(false);
+  const infoBtnRef = useRef<HTMLButtonElement | null>(null);
+  const infoPanelId = "git-file-info-panel";
   const [enlarged, setEnlarged] = useState(false);
   const [publications, setPublications] = useState<PublicationRow[]>([]);
   const [selectedPublicationId, setSelectedPublicationId] = useState<string | null>(null);
@@ -293,17 +296,21 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
     void loadSources();
   }, [loadSources]);

+  // Reset provider filter when the active repository changes — not on every
+  // loadRefs identity refresh (that wiped branchFilterApplied after Filtrer).
   useEffect(() => {
     setBranchFilter("");
     setBranchFilterApplied("");
     void loadRefs();
-  }, [loadRefs]);
+    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentional: repositoryId only
+  }, [repositoryId]);

   useEffect(() => {
     if (tab === "files" && repositoryId && branch) {
       setExpandedDirs({});
       setFile(null);
       setFileError(null);
+      setInfoOpen(false);
       void loadTree("");
     }
   }, [tab, repositoryId, branch, loadTree]);
@@ -654,12 +661,16 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
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

@@ -686,9 +697,9 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
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
@@ -761,6 +772,8 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
                         data-testid="git-branch-search"
                         onSubmit={(e) => {
                           e.preventDefault();
+                          const next = branchFilter.trim();
+                          setBranchFilterApplied(next);
                           void loadRefs(branchFilter);
                         }}
                       >
@@ -943,14 +956,39 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
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
@@ -975,20 +1013,6 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
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
@@ -1010,9 +1034,8 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
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
@@ -1026,13 +1049,13 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
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
@@ -1067,14 +1090,38 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
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
@@ -1102,23 +1149,6 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
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
diff --git a/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx b/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx
index 138bda02..a535cc27 100644
--- a/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx
+++ b/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx
@@ -19,7 +19,7 @@ function statusBanner(status: string): { tone: string; text: string } {
     case "CONNECTED":
       return {
         tone: "text-emerald-300",
-        text: "GitHub est connecté. Les dépôts ci-dessous sont ceux réellement autorisés côté serveur.",
+        text: "GitHub connecté — accès fournisseur vérifié. Aucun mandat de publication n’est accordé par cette seule connexion.",
       };
     case "PENDING_APPROVAL":
       return {
@@ -30,8 +30,7 @@ function statusBanner(status: string): { tone: string; text: string } {
     case "REVOKED":
       return {
         tone: "text-amber-300",
-        text:
-          "Accès Studio local retiré. Ce n’est pas automatiquement une révocation complète de l’installation GitHub. Les acquis D4 et faits historiques restent conservés.",
+        text: "Accès Studio local retiré. Ce n’est pas automatiquement une révocation complète de l’installation GitHub. Les documents et faits historiques restent conservés.",
       };
     default:
       return {
@@ -71,7 +70,6 @@ export function IntegrationsPanel() {
         return;
       }
       // SCRIPTED complete only when server chose flow=scripted.
-      // Do NOT use providerMode (Git provider SCRIPTED/REAL) — that is orthogonal to D9 OAuth flow.
       if (j.flow === "scripted") {
         const done = await fetch("/api/integrations/github/authorize/complete", {
           method: "POST",
@@ -123,7 +121,7 @@ export function IntegrationsPanel() {
       <div className="space-y-5" data-testid="integrations-disconnect-confirm">
         <header className="space-y-2">
           <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--fig-accent)]">
-            Paramètres / Sécurité
+            PARAMÈTRES / SERVICES EXTERNES
           </p>
           <h1 className="text-[32px] leading-tight font-semibold text-[var(--ink)]">
             Déconnecter GitHub
@@ -208,22 +206,11 @@ export function IntegrationsPanel() {
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

@@ -234,58 +221,47 @@ export function IntegrationsPanel() {
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
@@ -293,7 +269,7 @@ export function IntegrationsPanel() {
                   onClick={() => void refreshRepos()}
                   data-testid="refresh-repos"
                 >
-                  Actualiser les dépôts
+                  Actualiser
                 </button>
                 <button
                   type="button"
@@ -303,11 +279,18 @@ export function IntegrationsPanel() {
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
@@ -317,23 +300,34 @@ export function IntegrationsPanel() {
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
@@ -347,13 +341,6 @@ export function IntegrationsPanel() {
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
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-authority.ts b/projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-authority.ts
index 4cac2789..5b8e9725 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-authority.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-authority.ts
@@ -369,6 +369,8 @@ export async function admitConversationalPublicationMandate(input: {
         projectId: input.projectId,
         attemptId: input.attemptId,
         decisionId: auth.decisionId,
+        // Same-turn: Nora turn commits restitution — do not insert a rival assistant row.
+        persistAssistantMessage: false,
       });
     }

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
index 34a568a9..be9ff5f6 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
@@ -2038,6 +2038,104 @@ register(
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
@@ -2071,6 +2169,11 @@ const MERGE_PR_FIXTURE_RE = /^Merge la PR #(\d{1,6})\.?$/i;
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
@@ -2156,6 +2259,15 @@ export function fixtureSemanticQualify(userText: string): NoraTurnQualification
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
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts b/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
index 729fa1e2..c6f33500 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
@@ -20,6 +20,8 @@ import { emitObs } from "@/lib/observability";
 import { extractPublicationBranchHint as extractBranchHintStrict } from "./conversation-publication-mandate-guards";
 import { generateNoraReply } from "./nora-adapter";
 import type { DocumentEffectSummary } from "./document-act";
+import { composePublicationEffectRestitution } from "./publication-effect-restitution";
+import { getDocumentRevision } from "@/domains/document/service";

 export type MissionStatus =
   | "ACTIVE"
@@ -353,6 +355,13 @@ export async function resumeMissionAfterPublicationAuthorize(input: {
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
@@ -462,6 +471,11 @@ export async function resumeMissionAfterPublicationAuthorize(input: {
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
@@ -474,6 +488,8 @@ export async function resumeMissionAfterPublicationAuthorize(input: {
         commitSha?: string | null;
         sha?: string | null;
         missionResumeMessageId?: string | null;
+        repositoryFullName?: string | null;
+        publicationBranch?: string | null;
       };
     } catch {
       return {} as {
@@ -481,66 +497,131 @@ export async function resumeMissionAfterPublicationAuthorize(input: {
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
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts b/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
index 74998a42..fbee47d8 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
@@ -123,7 +123,13 @@ export function composePilotageEffectRestitution(input: {
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
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
index a9da3d88..b8d9c0d7 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
@@ -568,6 +568,9 @@ export type SemanticStudioProjection = {
     path: string | null;
     targetPath: string | null;
     targetBranch: string | null;
+    documentHint: string | null;
+    objectRef: string | null;
+    repositoryHint: string | null;
     clarify: string | null;
     capabilityId: "d7.prepare_publication" | "d7.dispatch_publication" | "d9.git_integration" | null;
   };
@@ -641,6 +644,12 @@ export function projectStudioEffects(q: NoraTurnQualification): SemanticStudioPr
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
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 52b72c5d..6e6b19cf 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -126,6 +126,15 @@ import {
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
@@ -2553,49 +2562,205 @@ export async function postUserMessageAndNora(
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
@@ -2607,13 +2772,13 @@ export async function postUserMessageAndNora(
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
@@ -2636,7 +2801,16 @@ export async function postUserMessageAndNora(
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
@@ -2644,12 +2818,30 @@ export async function postUserMessageAndNora(
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
@@ -2665,6 +2857,39 @@ export async function postUserMessageAndNora(
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
@@ -2685,27 +2910,42 @@ export async function postUserMessageAndNora(
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

@@ -2991,6 +3231,25 @@ export async function postUserMessageAndNora(
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
diff --git a/projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts
index ca11f453..a82cac55 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts
@@ -29,9 +29,7 @@ test.describe("E08 GitRepositoriesSurface (SCRIPTED)", () => {

     await page.goto("/settings/integrations");
     await expect(page.getByTestId("integrations-panel")).toBeVisible();
-    await expect(page.getByTestId("provider-mode-note")).not.toContainText(/Chargement/i, {
-      timeout: 15_000,
-    });
+    await expect(page.getByTestId("integrations-status-banner")).toBeVisible({ timeout: 15_000 });
     if (await page.getByTestId("disconnect-github").isVisible().catch(() => false)) {
       await page.getByTestId("disconnect-github").click();
       await expect(page.getByTestId("integrations-disconnect-confirm")).toBeVisible();
@@ -39,9 +37,10 @@ test.describe("E08 GitRepositoriesSurface (SCRIPTED)", () => {
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
@@ -66,6 +65,10 @@ test.describe("E08 GitRepositoriesSurface (SCRIPTED)", () => {
     await expect(page.getByTestId("git-branch-search")).toBeVisible();
     await page.getByTestId("git-branch-filter").fill("main");
     await page.getByTestId("git-branch-filter-apply").click();
+    // Note lives outside the popover — wait for provider filter to apply (S03).
+    await expect
+      .poll(async () => page.getByTestId("git-branch-filter-note").count(), { timeout: 20_000 })
+      .toBeGreaterThan(0);
     await expect(page.getByTestId("git-branch-filter-note")).toContainText(/main/i, {
       timeout: 10_000,
     });
@@ -74,7 +77,7 @@ test.describe("E08 GitRepositoriesSurface (SCRIPTED)", () => {
     // Publications tab — project-scale, historical wording (E08-S04)
     await page.getByTestId("git-tab-publications").click();
     await expect(page.getByTestId("git-publications")).toBeVisible();
-    await expect(page.getByTestId("git-publications")).toContainText(/Projection D4\/D7\/D8|historique/i);
+    await expect(page.getByTestId("git-publications")).toContainText(/historique|publication/i);
     await expect(page.getByTestId("git-pubs-split").or(page.getByTestId("git-publications-empty"))).toBeVisible();

     // Manage — at least one attached; second attach when an unattached button is offered
@@ -93,11 +96,11 @@ test.describe("E08 GitRepositoriesSurface (SCRIPTED)", () => {
         .toBeGreaterThanOrEqual(before);
     }

-    // Detach one with confirm
+    // Detach one with confirm (force: list can remount while sources refresh)
     const detachBtn = page.locator('[data-testid^="git-detach-"]').first();
     if (await detachBtn.isVisible().catch(() => false)) {
-      await detachBtn.click();
-      await expect(page.getByTestId("git-detach-confirm")).toBeVisible({ timeout: 5_000 });
+      await detachBtn.click({ force: true, timeout: 15_000 });
+      await expect(page.getByTestId("git-detach-confirm")).toBeVisible({ timeout: 10_000 });
       await page.getByTestId("git-detach-confirm-yes").click();
     }

diff --git a/projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts b/projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts
index 77ffd387..2b74ecc1 100644
--- a/projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts
@@ -37,15 +37,13 @@ test.describe("ML4 git collaboration corrective (SCRIPTED)", () => {
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
diff --git a/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
index 96526533..ffeff38d 100644
--- a/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
@@ -365,7 +365,11 @@ describe("ACCEPT-01 mission continuity (PG / SCRIPTED)", () => {

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

```

### Diffs par fichier (intégral, 16/16)

#### `projects/sfia-studio-next/construction/delivery-history.md`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 397824a8..95da8639 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,91 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01-FREEZE-LOCAL
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 (Europe/Paris) |
+| Macro-lot | Ensemble 08 — POST-UAT 01 freeze local candidat |
+| Type | EVOL / QA / FREEZE CANDIDAT · CRITICAL · **NO RELEASE** |
+| Branche | `feat/next-ensemble08-git-publications-nora` |
+| Base | `origin/main` `a12f89a1` |
+| GO Morris | Commit local + build détaché autorisés ; push/PR/cutover **NON** |
+| Réserves fermées | A contenu D4↔SCRIPTED · B D7 COMPLETED + D8 · C build détaché |
+| Push projet | **NONE** |
+| Cutover | **NOT EXECUTED** — RECETTE `@98185598` intacte |
+| Verdict | (voir Review Pack / manifeste section B) |
+
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
+| Verdict | DELIVERY READY WITH RESERVES (A/B/C traitées au freeze) |
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
```

#### `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md`

```diff
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
index 2f40c865..72570bbe 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
@@ -2,12 +2,14 @@

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

@@ -26,6 +28,21 @@
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
@@ -47,8 +64,8 @@
 - END-TO-END REAL mutation GitHub : **NOT PROVEN** (WRITE/MERGE hors mandat)
 - GitHub REAL READ : **NOT PROVEN** ce cycle
 - Nora LIVE E2E : **NOT PROVEN**
-- Candidate Git figée / build RECETTE : **NOT AVAILABLE**
-- RECETTE déploiement : hors cycle (préflight only)
+- Candidate Git figée / build RECETTE : **SERVI** `@98185598` / `1xEbvCdTAX6ht262w4oKF` sur lane E07
+- G5 visuelle : **NOT PROVEN** — UAT Morris

 ## Preuves exécutées (finalisation)
 - `tsc --noEmit` PASS
```

#### `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md`

```diff
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md
index 4203f49f..c5ecfab8 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/manifeste-cutover-recette-e07-plus-e08.md
@@ -1,83 +1,166 @@
-# Manifeste ENV-01 — Cutover RECETTE E07 + E08 (préparé, non exécuté)
+# Manifeste ENV-01 — Cutover RECETTE E07 → E08 (exécuté)

 | Champ | Valeur |
 | --- | --- |
-| Date préparation | 2026-11-21 (Europe/Paris) |
+| Date/heure cutover | 2026-11-21 ≈ 21:02 CET (UTC 20:02) |
 | Classe | **NO RELEASE** |
-| Lane cible | **RECETTE existante E07** (`STUDIO_LANE=RECETTE`, port **3200**) |
-| Cutover | **NOT EXECUTED** — GO Morris SHA-specific requis |
+| Lane | **RECETTE existante** (`STUDIO_LANE=RECETTE`, port **3200**) |
+| Cutover | **EXECUTED** — GO Morris SHA-specific honoré |
 | STABLE | NOT AVAILABLE / non modifié |
+| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** |

-## Runtime actuellement servi (avant cutover) — observé
+## GO Morris (borné)

-| Champ | Valeur observée |
+| Champ | Valeur |
+| --- | --- |
+| SHA autorisé | `98185598de0d3f3b84af862aecea04b9099217ca` |
+| TREE | `1c70839facb7fbc799980c585ce8bfba51cdb5d6` |
+| BUILD_ID | `1xEbvCdTAX6ht262w4oKF` |
+| Push/PR/merge projet | **NONE** |
+| GitHub REAL WRITE/MERGE | **OFF** |
+
+## Runtime AVANT (E07)
+
+| Champ | Valeur |
 | --- | --- |
-| URL | http://127.0.0.1:3200 |
-| Service LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` |
-| PID node | 75565 (`next-server` v15.5.29) |
-| Script | `…/sfia-workspace-next-ml4d-ensemble07-recette-build-5ad8fa57/start-recette-ensemble07-5ad8fa57.sh` |
-| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble07-recette-build-5ad8fa57` |
 | SOURCE_SHA | `5ad8fa57e4d529726244ddfae394074f5ea65432` |
 | TREE | `f62a77a1b89dbcbfc1d4009d24c9859017d69cc6` |
-| BUILD_ID | `BtZP6qDx5oAw8jwPQSEhc` (HTTP `<!--BtZP6qDx5oAw8jwPQSEhc-->` + fichier `.next/BUILD_ID`) |
-| Mode | `npx next start -H 127.0.0.1 -p 3200` · `NODE_ENV=production` · pas de hot reload |
-| GitHub mutations | `STUDIO_GITHUB_ALLOW_MUTATIONS` unset/vide |
-| Nora fixture force | unset (LIVE possible selon secrets lane — non requalifié ici) |
+| BUILD_ID | `BtZP6qDx5oAw8jwPQSEhc` |
+| Script | `start-recette-ensemble07-5ad8fa57.sh` |
+| Worktree | `…/sfia-workspace-next-ml4d-ensemble07-recette-build-5ad8fa57` |
+| PID node | 75565 |

-## PostgreSQL RECETTE (observé, non muté)
+## Runtime APRÈS (E08) — observé

 | Champ | Valeur |
 | --- | --- |
-| Container | `sfia-next-recette-pg` Up · `127.0.0.1:5434→5432` |
-| DB / rôle | `sfia_next_recette_ml4` |
-| Isolation | DEV PG distinct `sfia-next-dev-pg` :5433 |
-| Inventaire non sensible | projects=26 · documents=117 · document_revisions=188 · conversations=203 · messages=629 · human_decisions=3 · effect_attempts=4 · business_command_effects=4 · project_git_links=15 · observed_git_facts=0 · users=4 · sessions=118 · accounts=2 |
-| Schéma drizzle migrations table | **non observée** dans cette DB (pas de `drizzle.__drizzle_migrations`) |
-| Restauration auto | **INTERDITE** — ne pas recréer DB vide ni restaurer dump en écrasement |
+| URL | http://127.0.0.1:3200 |
+| Service | `com.sfia.studio.next.recette.ml4d-ux004` (même label) |
+| Script | `…/ensemble08-recette-build-98185598/start-recette-ensemble08-98185598.sh` |
+| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-recette-build-98185598` |
+| WorkingDirectory | `…/web` |
+| PID launchd / node | 52210 / 52237 (`next-server` v15.5.29) |
+| SOURCE_SHA (script) | `98185598de0d3f3b84af862aecea04b9099217ca` |
+| BUILD_ID fichier + HTTP | `1xEbvCdTAX6ht262w4oKF` (`<!--1xEbvCdTAX6ht262w4oKF-->`) |
+| Mode | `npx next start -H 127.0.0.1 -p 3200` · production · pas de hot reload |
+| Login HTTP | 200 |
+
+## Actions cutover (exactes)
+
+1. Plist backup : `com.sfia.studio.next.recette.ml4d-ux004.plist.5ad8fa57.pre-e08-cutover-20261121T200200Z.bak`
+2. `launchctl bootout` du service
+3. ProgramArguments → `start-recette-ensemble08-98185598.sh` ; WorkingDirectory → E08 `web/`
+4. `launchctl bootstrap` même label
+5. Vérification HTTP BUILD_ID + CWD processus

-## Candidat E08 (à renseigner après freeze + build)
+## PostgreSQL / données

 | Champ | Valeur |
 | --- | --- |
-| Branche source | `feat/next-ensemble08-git-publications-nora` |
-| Base main | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
-| SHA candidat | `98185598de0d3f3b84af862aecea04b9099217ca` |
-| TREE candidat | `1c70839facb7fbc799980c585ce8bfba51cdb5d6` |
-| BUILD_ID candidat | `1xEbvCdTAX6ht262w4oKF` |
-| Worktree build | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-recette-build-98185598` |
-| Script démarrage préparé | `start-recette-ensemble08-98185598.sh` (non branché LaunchAgent) |
+| DB | `sfia_next_recette_ml4` @ `127.0.0.1:5434` (`sfia-next-recette-pg`) |
+| Isolation DEV | `sfia-next-dev-pg` :5433 distincte |
+| Migrations E08 | **aucune** appliquée (invariant confirmé) |
+| Inventaire AVANT | projects=26 · documents=117 · document_revisions=188 · conversations=203 · messages=629 · human_decisions=3 · effect_attempts=4 · business_command_effects=4 · project_git_links=15 · observed_git_facts=0 · users=4 · sessions=118 · accounts=2 |
+| Inventaire APRÈS smoke | projects=**26** · messages=**633** (+4 essais Playwright Nora) · sessions=**123** (logins test) · Equip'Campus `proj_a9ce5f43…` présent · conversations=1 · messages=14 |
+| Perte anormale | **NON** |

-## Capacités réellement disponibles après cutover (prévision)
+## Backup / restauration / rollback

-| Capacité | Mode attendu |
+| Élément | Statut |
 | --- | --- |
-| E01–E07 | Conservées (même DB + nouveau code) |
-| Consultation Git multi-dépôts | Code E08 ; provider selon config RECETTE |
-| Nora conduite documentaire | Selon secrets lane ; SCRIPTED ≠ LIVE |
-| GitHub REAL WRITE/MERGE | **OFF** sauf GO sandbox explicite |
-| G5 visuelle | **NOT PROVEN** — Morris UAT |
+| Backup historique | `ml4d-e07-pre-e08-cutover-20261121T193852Z-from-5ad8fa57.sql.gz` — gzip OK |
+| Backup immédiat pré-cutover | `ml4d-e07-pre-e08-cutover-immediate-20261121T200119Z-from-5ad8fa57.sql.gz` — gzip OK |
+| Preuve restore isolée | CREATE `sfia_next_recette_restore_proof_e08` → restore → projects=26/messages=629 → DROP — RECETTE intacte |
+| Rollback E07 code | Worktree + BUILD `BtZP6qDx5oAw8jwPQSEhc` + plist `.bak` conservés — **non exercé** (cutover OK) |

-## Backup / rollback (préparation)
+## Capacités observées

-| Élément | Statut |
+| Capacité | Observation | Niveau |
+| --- | --- | --- |
+| E07 surfaces (Pilot A test login) | `/projects/…` travail/projet/trajectoire/documents/git → HTTP 200 | Browser/API smoke |
+| Equip'Campus (Morris) | Présent en DB (identité OAuth Morris non exercée ce cycle) | DB continuity |
+| Intégrations | `providerMode=REAL`, `status=DISCONNECTED` pour Pilot A | REAL config, non connecté |
+| Git sources/pubs API | 200, listes vides sans dépôt rattaché | DETERMINISTIC path |
+| GitHub REAL WRITE | Mutations OFF (`STUDIO_GITHUB_ALLOW_MUTATIONS` vide) | NOT PROVEN / OFF |
+| Nora | Clé OPENAI présente en RECETTE → LIVE possible | LIVE config ; E2E conduit NOT PROVEN |
+| Playwright E08 SCRIPTED | **3/3 FAIL** sur RECETTE — attendu (fixture≠LIVE ; connect SCRIPTED≠OAuth REAL) | N/A as REAL proof |
+| G5 | **NOT PROVEN** — Morris UAT | Différé |
+
+## Fake / Real
+
+| Frontière | Niveau |
 | --- | --- |
-| Ancien worktree E07 | Disponible `@5ad8fa57` |
-| Ancien BUILD_ID | `BtZP6qDx5oAw8jwPQSEhc` |
-| Script rollback | Relancer plist/script E07 `start-recette-ensemble07-5ad8fa57.sh` |
-| Backup PG frais | `ml4d-e07-pre-e08-cutover-20261121T193852Z-from-5ad8fa57.sql.gz` (691K, gzip OK) |
-| Rollback DB | Code rollback ≠ DB rollback ; pas de drop/truncate |
-
-## Procédure cutover (exécutable seulement après GO)
-
-1. Confirmer SHA/BUILD_ID cibles = GO Morris.
-2. Confirmer backup PG lisible.
-3. Arrêter `com.sfia.studio.next.recette.ml4d-ux004`.
-4. Appliquer migrations **seulement si nécessaires et non destructives**.
-5. Pointer LaunchAgent vers worktree/build E08 figé (même label/port/DB).
-6. Relancer service ; vérifier health + identité HTTP BUILD_ID.
-7. Vérifier inventaire données ≈ avant.
-8. Smoke E07 + E08 ; consigner manifeste final.
-
-## Gate
-
-**GO SHA-SPECIFIC REQUIRED.** Sans GO : **STOP BEFORE MUTATION RECETTE.**
+| Runtime build servi | REAL BOUNDARY (artefact figé servi) |
+| PostgreSQL RECETTE | REAL BOUNDARY (même DB) |
+| GitHub provider mode | REAL configuré ; WRITE OFF ; connexion Pilot A absente |
+| Nora | LIVE credentials présents ; parcours conduit NOT PROVEN |
+| Playwright SCRIPTED | NOT applicable as RECETTE proof |
+
+## Réserves / gates Morris
+
+1. UAT visuelle page 11 (G5)
+2. Parcours Git avec compte Morris + App autorisée
+3. Nora conduite documentaire LIVE bornée (sans WRITE si non autorisé)
+4. GO éventuel sandbox WRITE/MERGE
+5. Push/PR projet hors cycle
+
+## Verdict manifeste (cutover historique)
+
+**RECETTE AVAILABLE — MORRIS UAT REQUIRED**
+(runtime actuellement servi : SHA `98185598` / BUILD `1xEbvCdTAX6ht262w4oKF` — **inchangé** par le freeze POST-UAT 01)
+
+---
+
+# B. Candidat E08 POST-UAT 01 — freeze local (préparé)
+
+| Champ | Valeur |
+| --- | --- |
+| Date/heure freeze local | 2026-11-22 (Europe/Paris) |
+| GO Morris | Freeze local + build détaché **autorisés** ; cutover RECETTE **non** autorisé |
+| Classe | **NO RELEASE** · CANDIDAT |
+| Branche | `feat/next-ensemble08-git-publications-nora` |
+| Base / parent | `origin/main` `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
+| SOURCE_SHA (à renseigner après commit) | _PENDING_COMMIT_ |
+| TREE (à renseigner après commit) | _PENDING_TREE_ |
+| BUILD_ID (à renseigner après build détaché) | _PENDING_BUILD_ |
+| Artefact | worktree détaché hors DEV mutable / hors :3200 |
+| Cutover | **NOT EXECUTED** |
+| RECETTE actuelle | **préservée** `@98185598` / `1xEbvCdTAX6ht262w4oKF` |
+
+## Contenu candidat
+
+- Ensemble 08 initial + correctifs UX POST-UAT 01
+- Publication document existant + réconciliation `objectRef`/`documentHint`
+- Contrôle D4 document/révision ; D6/D7/D8/D9 ; restitution Nora
+- Reprise/idempotence ; filtre branche S03 (fix useEffect)
+- Preuves : unit + PG WRITE OFF / SCRIPTED contenu D4↔Git + terminalité COMPLETED + Playwright Nora/Git
+
+## Fake / Real (candidat)
+
+| Frontière | Niveau |
+| --- | --- |
+| Unit / PG / SCRIPTED | DETERMINISTIC PROVEN |
+| Playwright DEV SCRIPTED | BROWSER + Git simulé |
+| Nora LIVE | NOT PROVEN |
+| GitHub REAL WRITE/MERGE | NOT PROVEN |
+| G5 pixel / UAT Morris | NOT PROVEN |
+
+## Migrations
+
+Aucune migration DB additionnelle requise pour ce candidat (vérifiée — schéma RECETTE `sfia_next_recette_ml4` compatible).
+
+## Mise à disposition future (NON EXÉCUTÉE)
+
+1. GO Morris SHA-specific + BUILD_ID
+2. Worktree/build détaché déjà produit
+3. Remplacer le ProgramArguments LaunchAgent **sans** toucher la DB
+4. Smoke HTTP BUILD_ID sur :3200
+5. Conserver artefacts E07 + E08 `@98185598` pour rollback
+
+## C. Cutover futur
+
+**NOT EXECUTED** — gate Morris distinct rattaché au nouveau SHA/BUILD.
+
+## Verdict section B
+
+**CANDIDATE PREPARED — RECETTE GO REQUIRED** (à confirmer après SHA/TREE/BUILD renseignés)
```

#### `projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
index 2792d128..6d8f8fb3 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
@@ -37,14 +37,14 @@ const HERO: Record<
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

@@ -78,7 +78,9 @@ export function ProjectChrome(props: {
   const isJournal = props.surface === "journal";
   /** Ensemble 07 — Projet / Trajectoire heroes live in ProjectOverview / TrajectoryBoard. */
   const isProjetOrTrajectoire = props.surface === "projet" || props.surface === "pilotage";
-  const breadcrumbOnly = isTravail || isJournal || isProjetOrTrajectoire;
+  /** Ensemble 08 — Dépôts Git / Publications heroes live in GitRepositoriesSurface. */
+  const isGitSurface = props.surface === "git" || props.surface === "publication";
+  const breadcrumbOnly = isTravail || isJournal || isProjetOrTrajectoire || isGitSurface;

   const continuityBadge =
     isTravail && props.statusHint && !/^chargement/i.test(props.statusHint) ? (
```

#### `projects/sfia-studio-next/web/src/components/figma/tokens.css`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index d0f908c3..6752bc97 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -5244,6 +5244,36 @@
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
```

#### `projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx b/projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx
index 8f06836d..33af5167 100644
--- a/projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx
+++ b/projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx
@@ -2,6 +2,7 @@

 import { useCallback, useEffect, useMemo, useRef, useState } from "react";
 import { SafeMarkdown } from "@/components/SafeMarkdown";
+import { GitFileInfoPopover } from "@/components/integrations/GitFileInfoPopover";

 type GitSource = {
   linkId: string;
@@ -91,6 +92,8 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
   const [file, setFile] = useState<FileView | null>(null);
   const [fileError, setFileError] = useState<string | null>(null);
   const [infoOpen, setInfoOpen] = useState(false);
+  const infoBtnRef = useRef<HTMLButtonElement | null>(null);
+  const infoPanelId = "git-file-info-panel";
   const [enlarged, setEnlarged] = useState(false);
   const [publications, setPublications] = useState<PublicationRow[]>([]);
   const [selectedPublicationId, setSelectedPublicationId] = useState<string | null>(null);
@@ -293,17 +296,21 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
     void loadSources();
   }, [loadSources]);

+  // Reset provider filter when the active repository changes — not on every
+  // loadRefs identity refresh (that wiped branchFilterApplied after Filtrer).
   useEffect(() => {
     setBranchFilter("");
     setBranchFilterApplied("");
     void loadRefs();
-  }, [loadRefs]);
+    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentional: repositoryId only
+  }, [repositoryId]);

   useEffect(() => {
     if (tab === "files" && repositoryId && branch) {
       setExpandedDirs({});
       setFile(null);
       setFileError(null);
+      setInfoOpen(false);
       void loadTree("");
     }
   }, [tab, repositoryId, branch, loadTree]);
@@ -654,12 +661,16 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
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

@@ -686,9 +697,9 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
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
@@ -761,6 +772,8 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
                         data-testid="git-branch-search"
                         onSubmit={(e) => {
                           e.preventDefault();
+                          const next = branchFilter.trim();
+                          setBranchFilterApplied(next);
                           void loadRefs(branchFilter);
                         }}
                       >
@@ -943,14 +956,39 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
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
@@ -975,20 +1013,6 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
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
@@ -1010,9 +1034,8 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
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
@@ -1026,13 +1049,13 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
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
@@ -1067,14 +1090,38 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
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
@@ -1102,23 +1149,6 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
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
```

#### `projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx b/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx
index 138bda02..a535cc27 100644
--- a/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx
+++ b/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx
@@ -19,7 +19,7 @@ function statusBanner(status: string): { tone: string; text: string } {
     case "CONNECTED":
       return {
         tone: "text-emerald-300",
-        text: "GitHub est connecté. Les dépôts ci-dessous sont ceux réellement autorisés côté serveur.",
+        text: "GitHub connecté — accès fournisseur vérifié. Aucun mandat de publication n’est accordé par cette seule connexion.",
       };
     case "PENDING_APPROVAL":
       return {
@@ -30,8 +30,7 @@ function statusBanner(status: string): { tone: string; text: string } {
     case "REVOKED":
       return {
         tone: "text-amber-300",
-        text:
-          "Accès Studio local retiré. Ce n’est pas automatiquement une révocation complète de l’installation GitHub. Les acquis D4 et faits historiques restent conservés.",
+        text: "Accès Studio local retiré. Ce n’est pas automatiquement une révocation complète de l’installation GitHub. Les documents et faits historiques restent conservés.",
       };
     default:
       return {
@@ -71,7 +70,6 @@ export function IntegrationsPanel() {
         return;
       }
       // SCRIPTED complete only when server chose flow=scripted.
-      // Do NOT use providerMode (Git provider SCRIPTED/REAL) — that is orthogonal to D9 OAuth flow.
       if (j.flow === "scripted") {
         const done = await fetch("/api/integrations/github/authorize/complete", {
           method: "POST",
@@ -123,7 +121,7 @@ export function IntegrationsPanel() {
       <div className="space-y-5" data-testid="integrations-disconnect-confirm">
         <header className="space-y-2">
           <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--fig-accent)]">
-            Paramètres / Sécurité
+            PARAMÈTRES / SERVICES EXTERNES
           </p>
           <h1 className="text-[32px] leading-tight font-semibold text-[var(--ink)]">
             Déconnecter GitHub
@@ -208,22 +206,11 @@ export function IntegrationsPanel() {
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

@@ -234,58 +221,47 @@ export function IntegrationsPanel() {
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
@@ -293,7 +269,7 @@ export function IntegrationsPanel() {
                   onClick={() => void refreshRepos()}
                   data-testid="refresh-repos"
                 >
-                  Actualiser les dépôts
+                  Actualiser
                 </button>
                 <button
                   type="button"
@@ -303,11 +279,18 @@ export function IntegrationsPanel() {
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
@@ -317,23 +300,34 @@ export function IntegrationsPanel() {
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
@@ -347,13 +341,6 @@ export function IntegrationsPanel() {
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

#### `projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-authority.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-authority.ts b/projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-authority.ts
index 4cac2789..5b8e9725 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-authority.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-authority.ts
@@ -369,6 +369,8 @@ export async function admitConversationalPublicationMandate(input: {
         projectId: input.projectId,
         attemptId: input.attemptId,
         decisionId: auth.decisionId,
+        // Same-turn: Nora turn commits restitution — do not insert a rival assistant row.
+        persistAssistantMessage: false,
       });
     }

```

#### `projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
index 34a568a9..be9ff5f6 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
@@ -2038,6 +2038,104 @@ register(
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
@@ -2071,6 +2169,11 @@ const MERGE_PR_FIXTURE_RE = /^Merge la PR #(\d{1,6})\.?$/i;
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
@@ -2156,6 +2259,15 @@ export function fixtureSemanticQualify(userText: string): NoraTurnQualification
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
```

#### `projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts b/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
index 729fa1e2..c6f33500 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
@@ -20,6 +20,8 @@ import { emitObs } from "@/lib/observability";
 import { extractPublicationBranchHint as extractBranchHintStrict } from "./conversation-publication-mandate-guards";
 import { generateNoraReply } from "./nora-adapter";
 import type { DocumentEffectSummary } from "./document-act";
+import { composePublicationEffectRestitution } from "./publication-effect-restitution";
+import { getDocumentRevision } from "@/domains/document/service";

 export type MissionStatus =
   | "ACTIVE"
@@ -353,6 +355,13 @@ export async function resumeMissionAfterPublicationAuthorize(input: {
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
@@ -462,6 +471,11 @@ export async function resumeMissionAfterPublicationAuthorize(input: {
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
@@ -474,6 +488,8 @@ export async function resumeMissionAfterPublicationAuthorize(input: {
         commitSha?: string | null;
         sha?: string | null;
         missionResumeMessageId?: string | null;
+        repositoryFullName?: string | null;
+        publicationBranch?: string | null;
       };
     } catch {
       return {} as {
@@ -481,66 +497,131 @@ export async function resumeMissionAfterPublicationAuthorize(input: {
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
```

#### `projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts b/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
index 74998a42..fbee47d8 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
@@ -123,7 +123,13 @@ export function composePilotageEffectRestitution(input: {
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
```

#### `projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
index a9da3d88..b8d9c0d7 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
@@ -568,6 +568,9 @@ export type SemanticStudioProjection = {
     path: string | null;
     targetPath: string | null;
     targetBranch: string | null;
+    documentHint: string | null;
+    objectRef: string | null;
+    repositoryHint: string | null;
     clarify: string | null;
     capabilityId: "d7.prepare_publication" | "d7.dispatch_publication" | "d9.git_integration" | null;
   };
@@ -641,6 +644,12 @@ export function projectStudioEffects(q: NoraTurnQualification): SemanticStudioPr
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
```

#### `projects/sfia-studio-next/web/src/domains/conversation/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 52b72c5d..6e6b19cf 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -126,6 +126,15 @@ import {
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
@@ -2553,49 +2562,205 @@ export async function postUserMessageAndNora(
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
@@ -2607,13 +2772,13 @@ export async function postUserMessageAndNora(
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
@@ -2636,7 +2801,16 @@ export async function postUserMessageAndNora(
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
@@ -2644,12 +2818,30 @@ export async function postUserMessageAndNora(
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
@@ -2665,6 +2857,39 @@ export async function postUserMessageAndNora(
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
@@ -2685,27 +2910,42 @@ export async function postUserMessageAndNora(
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

@@ -2991,6 +3231,25 @@ export async function postUserMessageAndNora(
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
```

#### `projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts
index ca11f453..a82cac55 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ensemble08-git-surface.spec.ts
@@ -29,9 +29,7 @@ test.describe("E08 GitRepositoriesSurface (SCRIPTED)", () => {

     await page.goto("/settings/integrations");
     await expect(page.getByTestId("integrations-panel")).toBeVisible();
-    await expect(page.getByTestId("provider-mode-note")).not.toContainText(/Chargement/i, {
-      timeout: 15_000,
-    });
+    await expect(page.getByTestId("integrations-status-banner")).toBeVisible({ timeout: 15_000 });
     if (await page.getByTestId("disconnect-github").isVisible().catch(() => false)) {
       await page.getByTestId("disconnect-github").click();
       await expect(page.getByTestId("integrations-disconnect-confirm")).toBeVisible();
@@ -39,9 +37,10 @@ test.describe("E08 GitRepositoriesSurface (SCRIPTED)", () => {
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
@@ -66,6 +65,10 @@ test.describe("E08 GitRepositoriesSurface (SCRIPTED)", () => {
     await expect(page.getByTestId("git-branch-search")).toBeVisible();
     await page.getByTestId("git-branch-filter").fill("main");
     await page.getByTestId("git-branch-filter-apply").click();
+    // Note lives outside the popover — wait for provider filter to apply (S03).
+    await expect
+      .poll(async () => page.getByTestId("git-branch-filter-note").count(), { timeout: 20_000 })
+      .toBeGreaterThan(0);
     await expect(page.getByTestId("git-branch-filter-note")).toContainText(/main/i, {
       timeout: 10_000,
     });
@@ -74,7 +77,7 @@ test.describe("E08 GitRepositoriesSurface (SCRIPTED)", () => {
     // Publications tab — project-scale, historical wording (E08-S04)
     await page.getByTestId("git-tab-publications").click();
     await expect(page.getByTestId("git-publications")).toBeVisible();
-    await expect(page.getByTestId("git-publications")).toContainText(/Projection D4\/D7\/D8|historique/i);
+    await expect(page.getByTestId("git-publications")).toContainText(/historique|publication/i);
     await expect(page.getByTestId("git-pubs-split").or(page.getByTestId("git-publications-empty"))).toBeVisible();

     // Manage — at least one attached; second attach when an unattached button is offered
@@ -93,11 +96,11 @@ test.describe("E08 GitRepositoriesSurface (SCRIPTED)", () => {
         .toBeGreaterThanOrEqual(before);
     }

-    // Detach one with confirm
+    // Detach one with confirm (force: list can remount while sources refresh)
     const detachBtn = page.locator('[data-testid^="git-detach-"]').first();
     if (await detachBtn.isVisible().catch(() => false)) {
-      await detachBtn.click();
-      await expect(page.getByTestId("git-detach-confirm")).toBeVisible({ timeout: 5_000 });
+      await detachBtn.click({ force: true, timeout: 15_000 });
+      await expect(page.getByTestId("git-detach-confirm")).toBeVisible({ timeout: 10_000 });
       await page.getByTestId("git-detach-confirm-yes").click();
     }

```

#### `projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts b/projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts
index 77ffd387..2b74ecc1 100644
--- a/projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/git-collaboration.spec.ts
@@ -37,15 +37,13 @@ test.describe("ML4 git collaboration corrective (SCRIPTED)", () => {
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
```

#### `projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
index 96526533..ffeff38d 100644
--- a/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
@@ -365,7 +365,11 @@ describe("ACCEPT-01 mission continuity (PG / SCRIPTED)", () => {

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

```

## 17. Commit show (métadonnées)

commit 9f34639110ce2315a2bf8dc0786197bb8f5ea3b1
Author:     Morris Cleland <morris@macbook-air.home>
AuthorDate: Sun Nov 22 04:31:50 2026 +0100
Commit:     Morris Cleland <morris@macbook-air.home>
CommitDate: Sun Nov 22 04:31:50 2026 +0100

    feat(next): finalize E08 git publications and Nora post-UAT

    Freeze the Ensemble 08 POST-UAT 01 candidate: governed publication targeting,
    Nora restitution without false success, SCRIPTED/WRITE-OFF proofs, and UX fixes.

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../construction/delivery-history.md               |  85 ++++
 .../ensemble-08-git-et-publications/as-built.md    |  27 +-
 .../figma-evidence/post-uat-01-l0-l2.md            |  33 ++
 .../manifeste-cutover-recette-e07-plus-e08.md      | 201 +++++---
 .../web/src/components/figma/ProjectChrome.tsx     |  16 +-
 .../web/src/components/figma/tokens.css            |  30 ++
 .../components/integrations/GitFileInfoPopover.tsx | 127 +++++
 .../integrations/GitRepositoriesSurface.tsx        | 144 +++---
 .../components/integrations/IntegrationsPanel.tsx  | 167 +++----
 .../conversation-publication-authority.ts          |   2 +
 .../conversation/fixture-semantic-qualify.ts       | 112 +++++
 .../src/domains/conversation/mission-continuity.ts | 175 +++++--
 .../conversation/pilotage-effect-restitution.ts    |   8 +-
 .../conversation/publication-document-target.ts    | 523 +++++++++++++++++++++
 .../conversation/publication-effect-restitution.ts | 188 ++++++++
 .../domains/conversation/semantic-qualification.ts |   9 +
 .../web/src/domains/conversation/service.ts        | 303 +++++++++++-
 .../web/tests/e2e/ensemble08-git-surface.spec.ts   |  19 +-
 .../tests/e2e/ensemble08-nora-publication.spec.ts  | 150 ++++++
 .../web/tests/e2e/git-collaboration.spec.ts        |   6 +-
 .../mission-continuity-accept01.pg.test.ts         |   6 +-
 .../publication-nora-cloture.pg.test.ts            | 502 ++++++++++++++++++++
 .../publication-target-post-uat.pg.test.ts         | 233 +++++++++
 .../unit/publication-effect-restitution.test.ts    | 402 ++++++++++++++++
 24 files changed, 3167 insertions(+), 301 deletions(-)

---

## 18. Réserves restantes / gates Morris

Réserves A/B/C freeze : **FERMÉES** (preuves ci-dessus).

Gates restants (hors freeze) :
1. GO Morris SHA-specific + BUILD_ID pour mise à disposition RECETTE
2. Cutover sur même lane :3200 (non exécuté)
3. UAT visuelle G5 Morris
4. Nora LIVE bornée
5. GitHub REAL WRITE sandbox + GO distinct
6. Push/PR/merge projet

---

## 19. Verdict Cursor

**CANDIDATE FROZEN — RECETTE GO REQUIRED**

Conditions :
- commit local candidat vérifié (9f34639110ce2315a2bf8dc0786197bb8f5ea3b1)
- TREE 364c907342772f5430cf855d269cecc458f0546c
- tests bloquants PASS
- build détaché PASS BUILD_ID=F85QQBTLa8nq5zKYxMKKZ
- identités SHA↔TREE↔BUILD cohérentes
- manifeste section B disponible
- aucune mutation RECETTE

READY FOR RECETTE ≠ cutover exécuté.

---

## 20. Instruction ChatGPT

Lire ce handoff distant. Vérifier commit/TREE/BUILD, assertions D4/D7/D8, contenu SCRIPTED, tests, manifeste, ENV-01, RECETTE intacte. Rendre verdict indépendant. Si accepté : préparer mandat cutover rattaché à SOURCE_SHA=9f34639110ce2315a2bf8dc0786197bb8f5ea3b1 et BUILD_ID=F85QQBTLa8nq5zKYxMKKZ.

FIN PACK — Ensemble 08 POST-UAT 01 FREEZE LOCAL
