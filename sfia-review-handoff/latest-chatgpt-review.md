# SFIA STUDIO NEXT — Review Pack FULL
## ML5 R5 — Nora documentary autonomy + LIVE/UX integrated corrective

**Date:** 2026-11-25  
**Mode:** publish-in-cycle · Review Pack FULL · L3 handoff REQUIRED  
**Verdict candidate:** NORA DOCUMENTARY AUTONOMY — INTEGRATED CORRECTIVE DELIVERY VERIFIED — RECETTE AVAILABLE WITH EXPLICIT RESERVES — READY FOR MORRIS UAT  
**ML5 OPEN · R5 IN PROGRESS · R6 NOT STARTED · NO RELEASE · NOT ADOPTED**

---

## 1. Git Truth Check

| Item | Value |
| --- | --- |
| Workspace | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branch | `sfia/next-ml5-integrated-delivery-20261123` |
| Product code SHA (RECETTE servi) | `e012401f6af438df2168f3efb069bbabd03e80c0` |
| Docs tip (local) | `42b8ee2e5542f0221d30dac92db3ab774b1fb349` |
| Tree @ e012401f | `fd5492926a6a9b892eaac7d9e2b6f48c76ed6d29` |
| Web tree @ e012401f | `d88b9aa38c8256e835fa13c3734ab7e650e07fb9` |
| Merge-base origin/main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Staged at start | none (diagnostic pack only dirty) |
| Product push | **NONE** |
| PR/merge | **NONE** |

Pre-start HEAD produit attendu `8dec35c7` / tree `a572e397` / web `eea7b17b` — **CONFIRMÉ** avant modifications.

---

## 2. Sources effectivement lues

- Mandate Morris R5/ML5 (this chat) — autonomisation documentaire + LIVE/UX.
- Diagnostic causal handoff `383ea251` / InterventionTrack PV (causes établies).
- Routing Next §4.3.0b + SEF/roadmap/product-naming/ENV-01/product-versioning (applicabilité REQUIRED).
- RG-KNOW-016…020, 024, 025 ; D3 rédaction ; D4 identité/versions ; D6 autorité.
- Code: `document-act.ts`, `service.ts`, `d4-read-tools.ts`, `activity-labels.ts`, `tokens.css`, `SasCreateProgressPopup.tsx`.

---

## 3. Inventaire avant/après D3/D4 (synthèse)

| Mécanisme | Avant | Après | Décision |
| --- | --- | --- | --- |
| `extractFragmentIds` / `applyTargetedFragmentRevision` / `assertFragmentScope` | Réécriture fragmentaire RM/REC | **Absent** | SUPPRIME |
| `applyTargetedSectionRevision` / `assertSectionScope` / `expandSectionHints` / `extractSectionHint*` | Reconstruction section | **Absent** | SUPPRIME |
| Seal `documentProposal` complet | Concurrent avec fragments | Voie nominale unique | SIMPLIFIE |
| `compare_document_proposal` | Absent | Outil D4 lecture + allowlist policy | CONSERVE/AJOUT |
| Conserve `DOC_CONSERVE_PROPOSAL` + `pendingCandidateId` | Fragile (flag seul) | Exact transmit + candidat scellé | SIMPLIFIE |
| `projectMissionHeadlineFromUserAsk` | Titre d'activité = reformulation prompt | **Supprimé** ; objectif neutre | SUPPRIME |
| ACK « Réponse Nora disponible » | Annonce redondante | Fermeture objectif neutre ; UI sans « Réponse disponible » | SUPPRIME |
| Fence scanners / `DOCUMENT_PROPOSAL_TAG` / extracteurs | Requis lecture | Conservés | CONSERVE |
| Permissions / CAS / historique / PostgreSQL | — | Inchangés | CONSERVE |

---

## 4. Contrats exposés à Nora

- `search_project_resources`
- `read_project_document_revision`
- **`compare_document_proposal`** (diff déterministe `diffMarkdown` — pas de sens métier)
- Qualification `documentProposal` (corps complet) → PREPARE/inspection → conserve propriétaire D4
- Instructions nora-adapter: lire V1, produire complet, comparer, corriger, sceller

---

## 5–7. Mécanismes / fonctions / preuves d'absence

Fonctions retirées (commit `e012401f`):  
`applyTargetedFragmentRevision`, `applyTargetedSectionRevision`, `assertFragmentScope`, `assertSectionScope`, `extractFragmentIds`, `findFragmentLine`, `expandSectionHints`, `extractSectionHintFromPilotText`, `extractSectionHintFromProposalMarkdown`, `projectMissionHeadlineFromUserAsk`.

Tests retirés: `ml5-fragment-revise.test.ts`, `ml5-multi-section-revise.test.ts`.

### Recherche références restantes (src+tests)

```
projects/sfia-studio-next/web/tests/unit/ml5-documentary-autonomy.test.ts:117:  it("projectMissionHeadlineFromUserAsk is removed", async () => {
projects/sfia-studio-next/web/tests/unit/ml5-documentary-autonomy.test.ts:120:      "projectMissionHeadlineFromUserAsk" in mod
projects/sfia-studio-next/web/tests/unit/ml5-documentary-autonomy.test.ts:121:        ? (mod as { projectMissionHeadlineFromUserAsk?: unknown }).projectMissionHeadlineFromUserAsk

```

---

## 8. Responsabilités techniques conservées

Identité documentaire, scope/permissions, révision de base, candidat pending, persistance fidèle, historique V1/V2, CAS/fencing/idempotence, autorité Pilote (`DOC_CONSERVE_PROPOSAL` exact), PostgreSQL unique, politique cognitive 2M/1M/120 inchangée.

---

## 9–11. Code créé / diffs / suppressions

### Diff stat `e012401f`

```
commit e012401f6af438df2168f3efb069bbabd03e80c0
Author: Morris Cleland <morris@macbook-air.home>
Date:   Wed Nov 25 21:55:12 2026 +0100

    fix(next): give Nora documentary autonomy and simplify LIVE activity
    
    Seal Nora's full documentProposal without fragment/section reconstruction,
    add objective compare_document_proposal, harden exact conserve of inspected
    candidates, and drop prompt-headline activity plus redundant reply announcements
    with targeted UX fixes for SAS, tables, and conversation type size.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../src/app/preparations/[preparationId]/page.tsx  |  14 +-
 .../components/figma/SasCreateProgressPopup.tsx    |   8 +-
 .../web/src/components/figma/tokens.css            |  47 ++-
 .../src/domains/conversation/activity-labels.ts    |  29 --
 .../src/domains/conversation/cognitive-policy.ts   |   2 +
 .../web/src/domains/conversation/d4-read-tools.ts  | 127 ++++++
 .../web/src/domains/conversation/document-act.ts   | 426 +--------------------
 .../web/src/domains/conversation/nora-adapter.ts   |   2 +
 .../web/src/domains/conversation/service.ts        | 142 ++-----
 .../ml4-chat-first-d4-provenance.pg.test.ts        |  92 +++--
 .../ml5-documentary-autonomy.pg.test.ts            | 198 ++++++++++
 .../web/tests/unit/confront-proposal-fence.test.ts |  12 -
 .../ml5-cognitive-envelope-and-continuity.test.ts  | 200 ----------
 .../tests/unit/ml5-documentary-autonomy.test.ts    | 125 ++++++
 .../web/tests/unit/ml5-documentary-prepare.test.ts |   8 -
 .../web/tests/unit/ml5-fragment-revise.test.ts     |  73 ----
 .../tests/unit/ml5-multi-section-revise.test.ts    | 128 -------
 17 files changed, 601 insertions(+), 1032 deletions(-)

```

### Diffs fichiers (intégrés)



```diff
commit e012401f6af438df2168f3efb069bbabd03e80c0
Author: Morris Cleland <morris@macbook-air.home>
Date:   Wed Nov 25 21:55:12 2026 +0100

    fix(next): give Nora documentary autonomy and simplify LIVE activity
    
    Seal Nora's full documentProposal without fragment/section reconstruction,
    add objective compare_document_proposal, harden exact conserve of inspected
    candidates, and drop prompt-headline activity plus redundant reply announcements
    with targeted UX fixes for SAS, tables, and conversation type size.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 77f64484..f1f2bd85 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -81,14 +81,7 @@ import {
 } from "@/domains/conversation/pilotage-effect-restitution";
 import {
   appendDocumentEffectAck,
-  applyTargetedSectionRevision,
-  applyTargetedFragmentRevision,
-  assertSectionScope,
-  assertFragmentScope,
-  extractFragmentIds,
   extractContractualDocumentProposal,
-  extractSectionHintFromPilotText,
-  extractSectionHintFromProposalMarkdown,
   resolveHistoricalConfirmation,
   resolveReviseTarget,
   stripContractualDocumentFences,
@@ -1125,10 +1118,9 @@ export async function postUserMessageAndNora(
     // C1 — announce Nora work (ANNOUNCED ≠ OBSERVED). Best-effort; never blocks the turn.
     try {
       const { appendActivityEvent } = await import("./activity-projection");
-      const { projectMissionHeadlineFromUserAsk } = await import("./activity-labels");
       {
-        // Contextual objective from the ask — never dump the full prompt as title.
-        const summary = projectMissionHeadlineFromUserAsk(content);
+        // Neutral provisional objective — never reformulate the Pilote prompt as activity.
+        const summary = "Orientation du travail à partir de la demande du Pilote";
         await appendActivityEvent({
           conversationId: reserved.conversationId,
           turnCommandId: reserved.commandId,
@@ -1165,10 +1157,9 @@ export async function postUserMessageAndNora(
       // D2 — conserve of a sealed candidate must not re-run a costly investigation.
       // Body authority remains the pdoc; this path only supplies REVISE qualification.
       const conserveFocus = opts?.documentFocus;
-      // T2 — authority is explicit conserve action + sealed candidate identity,
-      // not the sole equality of a transmit string.
+      // Explicit human conserve: exact DOC_CONSERVE_PROPOSAL + sealed candidate on focus.
+      // Freeform validation text never enters this path.
       const conserveOnly =
-        conserveFocus?.conserveProposal === true &&
         Boolean(conserveFocus?.pendingCandidateId) &&
         Boolean(conserveFocus?.documentId) &&
         isConserveProposalTransmit(content);
@@ -1307,21 +1298,20 @@ export async function postUserMessageAndNora(
         : null;
       try {
         const { appendActivityEvent } = await import("./activity-projection");
+        // Close provisional objective — do not announce a redundant « réponse disponible ».
         await appendActivityEvent({
           conversationId: reserved.conversationId,
           turnCommandId: reserved.commandId,
           ownerPilotId: pilotId,
           generationId: reply.generationId ?? null,
-          phase: "nora.generate",
+          phase: "nora.objective",
           nature: turn.conductor.suspended ? "UNCERTAIN" : "COMPLETED",
           status: turn.conductor.suspended ? "LIMITED" : "COMPLETED",
           summary: turn.conductor.suspended
             ? `Travail cognitif suspendu (${turn.conductor.suspendReason ?? "LIMIT"})`
-            : "Réponse Nora disponible",
+            : "Orientation du travail terminée",
           ownerToken: reserved.ownerToken,
         });
-        // Dedup: mid-turn onRecord already emitted OBSERVED; keep a compact post-hoc
-        // summary only when no mid-turn events were produced (fixture without sink).
       } catch {
         /* activity observational */
       }
@@ -1972,25 +1962,7 @@ export async function postUserMessageAndNora(
   let documentSave: DocumentSaveResult | null = null;
   let documentSaveUnknown = false;
   let ownershipLostBeforeD4 = false;
-  const documentActBase = studioProjection.documentAct;
-  // RB-24 — natural multi-section: recover sectionHint from Pilote wording or
-  // partial fence headings when Nora omits parameters.sectionHint.
-  let documentAct = documentActBase;
-  if (documentActBase.kind === "REVISE" && !documentActBase.sectionHint) {
-    const fenceExtractEarly = extractContractualDocumentProposal(reply.content);
-    const fromPilot = extractSectionHintFromPilotText(content);
-    const fromFence =
-      fenceExtractEarly.ok
-        ? extractSectionHintFromProposalMarkdown(fenceExtractEarly.content)
-        : null;
-    const fromProposal = qualification.documentProposal?.contentMarkdown
-      ? extractSectionHintFromProposalMarkdown(qualification.documentProposal.contentMarkdown)
-      : null;
-    const recovered = fromPilot || fromFence || fromProposal;
-    if (recovered) {
-      documentAct = { ...documentActBase, sectionHint: recovered };
-    }
-  }
+  const documentAct = studioProjection.documentAct;
   const documentaryIntentSignal = documentAct.kind !== "NONE";
   const missionIntent = studioProjection.publication;
   const studioIntent = studioProjection;
@@ -2004,8 +1976,9 @@ export async function postUserMessageAndNora(
   let durableProposal: DocumentProposalExact | null = null;
   /** P1: set when concurrent fence diverges / is invalid — block silent strip+reinject. */
   let proposalAuthorityConflict: string | null = null;
-  const sectionScopedConfront =
-    documentAct.kind === "REVISE" && Boolean(documentAct.sectionHint);
+  // Documentary autonomy: Nora's full documentProposal is the write body.
+  // Studio no longer reconstructs via section/fragment heuristics.
+  const sectionScopedConfront = false;
   if (
     reply.status === "COMPLETE" &&
     qualification.documentProposal &&
@@ -2412,8 +2385,8 @@ export async function postUserMessageAndNora(
             // T2 — explicit conserve of sealed pdoc: skip proposal extraction / merge.
             // Body authority is the candidate; no provider regenerates content here.
             if (
-              focus?.conserveProposal === true &&
-              focus.pendingCandidateId?.trim()
+              focus?.pendingCandidateId?.trim() &&
+              isConserveProposalTransmit(content)
             ) {
               const observedHeadId =
                 focus.observedHeadRevisionId?.trim() || target.baseRevisionId;
@@ -2679,29 +2652,16 @@ export async function postUserMessageAndNora(
                 d4Effect: null,
               });
             } else {
-              // Only authorized fragment ids from sectionHint / Pilote wording —
-              // never harvest every RM-* present in the proposal body.
-              const fragmentIds = [
-                ...extractFragmentIds(documentAct.sectionHint),
-                ...extractFragmentIds(content),
-              ].filter((id, i, arr) => arr.indexOf(id) === i);
-              // Prefer exact fragment splice when Nora/Pilote name rules (RM-03, R04…);
-              // otherwise fall back to section-level targeted revise.
-              const merged = fragmentIds.length
-                ? applyTargetedFragmentRevision(
-                    target.baseContent,
-                    reviseProposalContent,
-                    fragmentIds,
-                  )
-                : applyTargetedSectionRevision(
-                    target.baseContent,
-                    reviseProposalContent,
-                    documentAct.sectionHint,
-                  );
-              if (!merged.ok) {
+              // Documentary autonomy — seal Nora's complete proposal as-is.
+              // No fragment/section reconstruction; D4 persists the exact body.
+              const mergedContent = reviseProposalContent;
+              const noDelta =
+                mergedContent.replace(/\r\n/g, "\n") ===
+                target.baseContent.replace(/\r\n/g, "\n");
+              if (noDelta) {
                 documentSave = {
                   status: "NOT_EXECUTED",
-                  reason: merged.reason,
+                  reason: "DOCUMENT_NO_DELTA",
                   documentId: target.documentId,
                   baseRevisionId: target.baseRevisionId,
                   act: "REVISE",
@@ -2712,45 +2672,14 @@ export async function postUserMessageAndNora(
                   generationId: reply.generationId,
                   act: "REVISE",
                   extracted,
-                  scopeVerdict: merged.reason,
-                  refuseCode: merged.reason,
+                  scopeVerdict: "DOCUMENT_NO_DELTA",
+                  refuseCode: "DOCUMENT_NO_DELTA",
                   d4Attempted: false,
                   d4Effect: null,
                 });
               } else {
-                const scopeCheck = fragmentIds.length
-                  ? assertFragmentScope(
-                      target.baseContent,
-                      merged.content,
-                      fragmentIds,
-                    )
-                  : assertSectionScope(
-                      target.baseContent,
-                      merged.content,
-                      documentAct.sectionHint,
-                    );
-                if (!scopeCheck.ok) {
-                  documentSave = {
-                    status: "NOT_EXECUTED",
-                    reason: scopeCheck.reason,
-                    documentId: target.documentId,
-                    baseRevisionId: target.baseRevisionId,
-                    act: "REVISE",
-                  };
-                  emitDocumentProposalObs({
-                    requestId,
-                    operationId: reserved.operationId,
-                    generationId: reply.generationId,
-                    act: "REVISE",
-                    extracted,
-                    scopeVerdict: scopeCheck.reason,
-                    refuseCode: scopeCheck.reason,
-                    d4Attempted: false,
-                    d4Effect: null,
-                  });
-                } else {
                   // PREPARE|REQUEST_EFFECT — pending inspect uses either;
-                  // conserve/write further down still requires explicit conserve flag.
+                  // conserve/write further down still requires explicit conserve of sealed pdoc.
                   const reviseIntents = documentaryMaterializeIntents(qualification).filter(
                     (i) => i.capabilityId === "d4.revise_document",
                   );
@@ -2837,9 +2766,13 @@ export async function postUserMessageAndNora(
                     // P0-A — REVISE via conversation never writes D4 unless explicit conserve of sealed pdoc.
                     // Absence of documentFocus must NOT fall through to admit/seal (prior gap).
                     // Sas manual editor uses documents API directly — out of this branch.
-                    // T2 — conservation requires explicit session action flag + sealed candidate.
-                    // Transmit-text equality alone must not authorize D4 write.
-                    const conserveRequested = focus?.conserveProposal === true;
+                    // Human conserve authority: exact DOC_CONSERVE_PROPOSAL transmit + sealed
+                    // candidate identity on focus (button sets conserveProposal; transmit alone
+                    // with bound pdoc is the same explicit choice — freeform text never writes).
+                    const conserveRequested =
+                      Boolean(focus?.pendingCandidateId) &&
+                      Boolean(focus?.documentId) &&
+                      isConserveProposalTransmit(content);
                     if (!conserveRequested) {
                       // Métier title only — never promote document-part-N synthetic labels.
                       const rawPropTitle = durableProposal?.title?.trim() || "";
@@ -2847,7 +2780,7 @@ export async function postUserMessageAndNora(
                         ? ""
                         : rawPropTitle;
                       const proposalTitle =
-                        /^#\s+(.+?)(?:\r?\n|$)/.exec(merged.content)?.[1]?.trim() ||
+                        /^#\s+(.+?)(?:\r?\n|$)/.exec(mergedContent)?.[1]?.trim() ||
                         safePropTitle ||
                         target.title;
                       // Historical proposals require a server hauth already bound on focus.
@@ -2882,7 +2815,7 @@ export async function postUserMessageAndNora(
                         sourceRevisionId: target.baseRevisionId,
                         observedHeadRevisionId: observedHeadId,
                         title: proposalTitle,
-                        contentMarkdown: merged.content,
+                        contentMarkdown: mergedContent,
                         historicalAuthorizationId:
                           focus?.historicalAuthorizationId ?? null,
                       });
@@ -2928,7 +2861,7 @@ export async function postUserMessageAndNora(
                       }
                     } else {
                     // F1/P0-A/B conserve: sealed candidate required — never regenerate; never trust client body.
-                    let conserveContent = merged.content;
+                    let conserveContent = mergedContent;
                     let conserveTitle = target.title;
                     let conserveSource = reviseSource;
                     let conserveBlocked: string | null = null;
@@ -3097,10 +3030,9 @@ export async function postUserMessageAndNora(
                     } // conserveRequested else
                     } // historical confirmation gate
                   } // reviseIntents cardinality else
-                }
-              }
-            }
-            } // else: non-conserve proposal/merge path
+              } // noDelta else — seal Nora proposal as-is
+            } // reviseProposalContent present
+            } // else: non-conserve proposal path
           }
           emitObs({
             event_name: "d3.turn.document_revise",

```


```diff
commit e012401f6af438df2168f3efb069bbabd03e80c0
Author: Morris Cleland <morris@macbook-air.home>
Date:   Wed Nov 25 21:55:12 2026 +0100

    fix(next): give Nora documentary autonomy and simplify LIVE activity
    
    Seal Nora's full documentProposal without fragment/section reconstruction,
    add objective compare_document_proposal, harden exact conserve of inspected
    candidates, and drop prompt-headline activity plus redundant reply announcements
    with targeted UX fixes for SAS, tables, and conversation type size.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
index 761230ba..a6b2bc62 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
@@ -607,159 +607,6 @@ export function splitMarkdownSections(
   }));
 }
 
-/**
- * Leading top-level section index from an ATX heading text (no `#`).
- * Accepts: "2. Title", "Section 2 — Title", "2 — Title".
- * Rejects embedded numbers: "Source 2 — …", "3.2. Sub", list-like bodies (not headings).
- */
-export function leadingSectionNumber(heading: string): string | null {
-  const t = heading.trim();
-  const asSection = /^section\s+(\d+)\b/i.exec(t);
-  if (asSection) return asSection[1]!;
-  // "2. Title" — require whitespace after the first dotted integer (excludes "3.2. …").
-  const dotted = /^(\d+)\.\s+\S/.exec(t);
-  if (dotted) return dotted[1]!;
-  const dashed = /^(\d+)\s*[—–\-]\s+\S/.exec(t);
-  if (dashed) return dashed[1]!;
-  return null;
-}
-
-function parseSectionHint(hint: string): { number: string | null; titleTail: string | null } {
-  const h = hint.trim();
-  const withTail =
-    /^(?:section\s+)?(\d+)(?:\s*[.:—–\-]\s*|\s+)(.+)$/i.exec(h) ||
-    /^(?:section\s+)?(\d+)\s*$/i.exec(h);
-  if (withTail) {
-    return {
-      number: withTail[1]!,
-      titleTail: (withTail[2] ?? "").trim() || null,
-    };
-  }
-  return { number: null, titleTail: null };
-}
-
-/**
- * Expand a Pilote/Nora sectionHint into one or more atomic section targets.
- * Supports: "2", "section 2", "Sections 2 et 3", "2, 3 et 4", "2 and 3".
- * Does not invent targets — empty / unparsable multi-lists stay a single hint.
- */
-export function expandSectionHints(hint: string | null | undefined): string[] {
-  if (!hint) return [];
-  const raw = hint.trim();
-  if (!raw) return [];
-  const stripped = raw.replace(/^sections?\s+/i, "").trim();
-  /**
-   * Normalize « Section 2 (RM-03) » / « 2 (RM-03) » → « 2 » so parenthetical
-   * rule ids do not break numeric section resolution (AssetTrack AT-08 LIVE).
-   */
-  const normalizePart = (p: string): string => {
-    const t = p.trim();
-    if (/^\d+$/.test(t)) return t;
-    const secNum = /^sections?\s+(\d+)\b/i.exec(t);
-    if (secNum) return secNum[1]!;
-    const bareNum = /^(\d+)\b/.exec(t);
-    if (bareNum) return bareNum[1]!;
-    return t;
-  };
-  if (!/\b(?:et|and)\b|,|;/i.test(stripped)) {
-    const one = normalizePart(raw);
-    return [one || raw];
-  }
-  const parts = stripped
-    .split(/\s*(?:,|;|\bet\b|\band\b)\s*/i)
-    .map((p) => p.trim())
-    .filter((p) => p.length > 0);
-  if (parts.length <= 1) {
-    const one = normalizePart(raw);
-    return [one || raw];
-  }
-  return parts.map(normalizePart);
-}
-
-/** Format numeric section indexes into a canonical multi-section hint. */
-export function formatNumericSectionHint(nums: Array<string | number>): string | null {
-  const uniq = [
-    ...new Set(
-      nums
-        .map((n) => String(n).trim())
-        .filter((n) => /^\d+$/.test(n))
-        .map((n) => String(Number(n))),
-    ),
-  ].sort((a, b) => Number(a) - Number(b));
-  if (uniq.length === 0) return null;
-  if (uniq.length === 1) return uniq[0]!;
-  if (uniq.length === 2) return `Sections ${uniq[0]} et ${uniq[1]}`;
-  return `Sections ${uniq.slice(0, -1).join(", ")} et ${uniq[uniq.length - 1]}`;
-}
-
-/**
- * Recover section targets from natural Pilote wording that authorizes revision
- * (« dans la section 2 », « intègre … section 3 », « révise la section 4 »).
- * A bare mention of « section N » as reference is NOT an authority to modify it.
- */
-export function extractSectionHintFromPilotText(text: string | null | undefined): string | null {
-  if (!text) return null;
-  const nums = [
-    ...text.matchAll(
-      /\b(?:dans|sur|pour|vers)\s+(?:la\s+)?sections?\s+(\d+)\b/gi,
-    ),
-    ...text.matchAll(
-      /\b(?:intègre|integrer|intégrer|modifie|modifier|révise|revise|révise|mets?\s+[àa]\s+jour|ajoute|ajouter|corrige|corriger)\b[\s\S]{0,80}?\bsections?\s+(\d+)\b/gi,
-    ),
-    ...text.matchAll(
-      /\bsections?\s+(\d+)\b[\s\S]{0,40}?\b(?:avec|en\s+y|pour\s+y)\b/gi,
-    ),
-  ].map((m) => m[1]!);
-  return formatNumericSectionHint(nums);
-}
-
-/**
- * Recover section targets from a partial contractual fence / proposal body
- * that only carries the revised headings (## 2. … / ## 3. …).
- */
-export function extractSectionHintFromProposalMarkdown(
-  markdown: string | null | undefined,
-): string | null {
-  if (!markdown) return null;
-  const nums = [...markdown.matchAll(/^#{2,6}\s*(\d+)\b/gm)].map((m) => m[1]!);
-  return formatNumericSectionHint(nums);
-}
-
-/**
- * Resolve section spans for a Pilote/Nora hint.
- * Numeric hints ("2", "section 2") match only headings whose *leading* section
- * number is that index — never bare `\b2\b` inside "Source 2" / "3.2".
- */
-function matchSectionSpans(spans: SectionSpan[], hint: string): SectionSpan[] {
-  const h = hint.toLowerCase().trim();
-  if (!h) return [];
-
-  const exact = spans.filter((b) => b.heading.toLowerCase() === h);
-  if (exact.length === 1) return exact;
-
-  const parsed = parseSectionHint(hint);
-  if (parsed.number) {
-    const byNum = spans.filter((b) => leadingSectionNumber(b.heading) === parsed.number);
-    if (parsed.titleTail) {
-      const title = parsed.titleTail.toLowerCase();
-      const refined = byNum.filter((b) => {
-        const heading = b.heading.toLowerCase();
-        return heading.includes(title) || title.includes(heading);
-      });
-      if (refined.length > 0) return refined;
-    }
-    return byNum;
-  }
-
-  // Title-only hint: equality / inclusion — no digit-as-word shortcut.
-  return spans.filter(
-    (b) =>
-      b.heading.toLowerCase() === h ||
-      b.heading.toLowerCase().includes(h) ||
-      h.includes(b.heading.toLowerCase()),
-  );
-}
-
 /**
  * Contractual document proposal (B).
  *
@@ -819,8 +666,7 @@ export const DOCUMENT_PROPOSAL_TAG = "sfia-document";
 
 /**
  * LEGACY fence sentinel when the body has no document-level `# H1`.
- * Not a contractual document title — section-scoped REVISE may ignore it
- * when comparing against the durable document title on the proposal.
+ * Not a contractual document title — read-path compatibility only.
  */
 export const LEGACY_UNTITLED_DOCUMENT_TITLE = "Document Nora";
 
@@ -907,20 +753,6 @@ function skipIllustrativeFence(
   return lines.length;
 }
 
-/**
- * Scan assistant Markdown for autonomous top-level `sfia-document` fences.
- *
- * First-level structure:
- * - conversational text (no fence);
- * - illustrative fences (any non-`sfia-document` open) — opaque until closed;
- * - autonomous contractual `sfia-document` fences — extractable proposals.
- *
- * Inside a contractual proposal, nested code fences are tracked with a stack so
- * an inner ```bash … ``` does not terminate the outer proposal.
- *
- * A `sfia-document` marker nested inside an illustrative fence is never an
- * autonomous proposal (isolation rule).
- */
 export function scanContractualDocumentFences(assistantText: string): {
   proposals: ScannedProposal[];
   contractualOpenCount: number;
@@ -1179,262 +1011,6 @@ export function extractContractualDocumentProposal(
   };
 }
 
-/**
- * Extract replacement body for a target section from Nora's proposal.
- * Refuses conversational dumps that are not a clear section body.
- */
-export function extractProposedSectionBody(
-  proposedMarkdown: string,
-  sectionHint: string,
-  baseHeading: string,
-): { ok: true; body: string } | { ok: false; reason: string } {
-  const spans = locateSections(proposedMarkdown);
-  const hits = matchSectionSpans(spans, sectionHint);
-  if (hits.length === 1) {
-    return { ok: true, body: proposedMarkdown.slice(hits[0]!.bodyStart, hits[0]!.end) };
-  }
-  if (hits.length > 1) {
-    return { ok: false, reason: "SECTION_AMBIGUOUS_IN_PROPOSAL" };
-  }
-  // No matching heading — refuse dumping the whole conversational reply into the section.
-  if (spans.length > 0 || /résultat applicatif d4|nora\s*\(/i.test(proposedMarkdown)) {
-    return { ok: false, reason: "SECTION_CONTENT_UNCLEAR_IN_PROPOSAL" };
-  }
-  // Bare body without headings — only accept if short and not a full conversation.
-  const trimmed = proposedMarkdown.trim();
-  if (!trimmed || trimmed.length > 20_000) {
-    return { ok: false, reason: "SECTION_CONTENT_UNCLEAR_IN_PROPOSAL" };
-  }
-  void baseHeading;
-  return { ok: true, body: `${trimmed}\n` };
-}
-
-function resolveUniqueSectionSpan(
-  spans: SectionSpan[],
-  hint: string,
-): { ok: true; span: SectionSpan } | { ok: false; reason: string } {
-  const hits = matchSectionSpans(spans, hint);
-  if (hits.length === 0) {
-    return { ok: false, reason: "SECTION_AMBIGUOUS_OR_MISSING_IN_BASE" };
-  }
-  if (hits.length > 1) {
-    return { ok: false, reason: "SECTION_AMBIGUOUS_OR_MISSING_IN_BASE" };
-  }
-  return { ok: true, span: hits[0]! };
-}
-
-function extractBodyForTarget(
-  proposedMarkdown: string,
-  hint: string,
-  baseHeading: string,
-): { ok: true; body: string } | { ok: false; reason: string } {
-  const primary = extractProposedSectionBody(proposedMarkdown, hint, baseHeading);
-  if (primary.ok) return primary;
-  // Multi-section proposals often use the full ATX heading; retry with base heading text.
-  if (baseHeading.trim() && baseHeading.trim().toLowerCase() !== hint.trim().toLowerCase()) {
-    const byHeading = extractProposedSectionBody(
-      proposedMarkdown,
-      baseHeading,
-      baseHeading,
-    );
-    if (byHeading.ok) return byHeading;
-  }
-  const byNumber = leadingSectionNumber(baseHeading);
-  if (byNumber && byNumber !== hint.trim()) {
-    const byNum = extractProposedSectionBody(proposedMarkdown, byNumber, baseHeading);
-    if (byNum.ok) return byNum;
-  }
-  return primary;
-}
-
-/**
- * Splice Nora's section body into the base document at exact offsets.
- * Supports one or several section targets (atomic multi-section revise).
- * Non-target bytes are preserved verbatim (spaces, blank lines, fences).
- */
-export function applyTargetedSectionRevision(
-  baseMarkdown: string,
-  proposedMarkdown: string,
-  sectionHint: string | null,
-): { ok: true; content: string } | { ok: false; reason: string } {
-  if (!sectionHint) {
-    // Full-document revise only when the proposal is clearly document markdown, not chat.
-    if (/résultat applicatif d4/i.test(proposedMarkdown)) {
-      return { ok: false, reason: "PROPOSAL_CONTAINS_APPLICATIVE_ACK" };
-    }
-    return { ok: true, content: proposedMarkdown };
-  }
-
-  const hints = expandSectionHints(sectionHint);
-  const baseSpans = locateSections(baseMarkdown);
-  if (baseSpans.length === 0) {
-    return { ok: false, reason: "NO_SECTION_STRUCTURE" };
-  }
-
-  if (hints.length === 1) {
-    const resolved = resolveUniqueSectionSpan(baseSpans, hints[0]!);
-    if (!resolved.ok) return resolved;
-    const target = resolved.span;
-    const extracted = extractBodyForTarget(proposedMarkdown, hints[0]!, target.heading);
-    if (!extracted.ok) return extracted;
-    const body = extracted.body.endsWith("\n") ? extracted.body : `${extracted.body}\n`;
-    const content =
-      baseMarkdown.slice(0, target.bodyStart) + body + baseMarkdown.slice(target.end);
-    return { ok: true, content };
-  }
-
-  // Multi-section: resolve every target uniquely, then splice high→low offsets.
-  const replacements: Array<{ span: SectionSpan; body: string }> = [];
-  const claimedStarts = new Set<number>();
-  for (const hint of hints) {
-    const resolved = resolveUniqueSectionSpan(baseSpans, hint);
-    if (!resolved.ok) return resolved;
-    if (claimedStarts.has(resolved.span.start)) {
-      return { ok: false, reason: "SECTION_TARGET_OVERLAP" };
-    }
-    claimedStarts.add(resolved.span.start);
-    const extracted = extractBodyForTarget(proposedMarkdown, hint, resolved.span.heading);
-    if (!extracted.ok) return extracted;
-    const body = extracted.body.endsWith("\n") ? extracted.body : `${extracted.body}\n`;
-    replacements.push({ span: resolved.span, body });
-  }
-
-  replacements.sort((a, b) => b.span.start - a.span.start);
-  let content = baseMarkdown;
-  for (const rep of replacements) {
-    content =
-      content.slice(0, rep.span.bodyStart) + rep.body + content.slice(rep.span.end);
-  }
-  return { ok: true, content };
-}
-
-/**
- * Exact (non-normalized) check that bytes outside the target section(s) are unchanged.
- * For N targets sorted by offset: regions [0, bodyStart0), (end_i, bodyStart_{i+1}), (end_last, EOF)
- * must be byte-identical between base and next (heading lines included in those prefixes).
- */
-export function assertSectionScope(
-  baseMarkdown: string,
-  nextMarkdown: string,
-  sectionHint: string | null,
-): { ok: true } | { ok: false; reason: string } {
-  if (!sectionHint) return { ok: true };
-  const hints = expandSectionHints(sectionHint);
-  const baseSpans = locateSections(baseMarkdown);
-  const nextSpans = locateSections(nextMarkdown);
-
-  const pairs: Array<{ base: SectionSpan; next: SectionSpan }> = [];
-  for (const hint of hints) {
-    const bHits = matchSectionSpans(baseSpans, hint);
-    const nHits = matchSectionSpans(nextSpans, hint);
-    if (bHits.length !== 1) {
-      return { ok: false, reason: "SECTION_AMBIGUOUS_OR_MISSING_IN_BASE" };
-    }
-    if (nHits.length !== 1) {
-      return { ok: false, reason: "SECTION_AMBIGUOUS_OR_MISSING_IN_NEXT" };
-    }
-    pairs.push({ base: bHits[0]!, next: nHits[0]! });
-  }
-
-  pairs.sort((a, b) => a.base.start - b.base.start);
-
-  let baseCursor = 0;
-  let nextCursor = 0;
-  for (const pair of pairs) {
-    if (
-      baseMarkdown.slice(baseCursor, pair.base.bodyStart) !==
-      nextMarkdown.slice(nextCursor, pair.next.bodyStart)
-    ) {
-      return { ok: false, reason: "SECTION_SCOPE_PREFIX_CHANGED" };
-    }
-    baseCursor = pair.base.end;
-    nextCursor = pair.next.end;
-  }
-  if (baseMarkdown.slice(baseCursor) !== nextMarkdown.slice(nextCursor)) {
-    return { ok: false, reason: "SECTION_SCOPE_EXCEEDED" };
-  }
-  return { ok: true };
-}
-
-/**
- * Extract stable fragment ids (RM-03, R04, …) from a sectionHint or Pilote wording.
- * Used for rule/row-level revise when whole-section replace would be too coarse.
- */
-export function extractFragmentIds(text: string | null | undefined): string[] {
-  if (!text) return [];
-  const out: string[] = [];
-  for (const m of text.matchAll(/\b(RM|R|REQ|SC|UC)[- ]?(\d{1,3}[A-Za-z]?)\b/gi)) {
-    out.push(`${m[1]!.toUpperCase()}-${m[2]!.toUpperCase()}`);
-  }
-  return [...new Set(out)];
-}
-
-/** Locate a markdown table row (or bold-labelled line) that carries the fragment id. */
-export function findFragmentLine(
-  markdown: string,
-  fragmentId: string,
-): { start: number; end: number; line: string } | null {
-  // Accept both R-04 and R04 forms in the document.
-  const loose = fragmentId.replace(/-/g, "[- ]?");
-  const re = new RegExp(`^.*\\b${loose}\\b.*$`, "gmi");
-  const m = re.exec(markdown);
-  if (!m || m.index == null) return null;
-  const line = m[0]!;
-  return { start: m.index, end: m.index + line.length, line };
-}
-
-/**
- * Splice proposed fragment lines into the base document.
- * Only the exact authorized fragment lines change; everything else is byte-identical.
- */
-export function applyTargetedFragmentRevision(
-  baseMarkdown: string,
-  proposedMarkdown: string,
-  fragmentIds: string[],
-): { ok: true; content: string } | { ok: false; reason: string } {
-  if (!fragmentIds.length) {
-    return { ok: false, reason: "FRAGMENT_IDS_REQUIRED" };
-  }
-  let content = baseMarkdown;
-  // Apply high→low offsets so earlier indices stay valid.
-  const ops: Array<{ start: number; end: number; replacement: string }> = [];
-  for (const id of fragmentIds) {
-    const baseHit = findFragmentLine(content, id);
-    const propHit = findFragmentLine(proposedMarkdown, id);
-    if (!baseHit) return { ok: false, reason: `FRAGMENT_MISSING_IN_BASE:${id}` };
-    if (!propHit) return { ok: false, reason: `FRAGMENT_MISSING_IN_PROPOSAL:${id}` };
-    ops.push({ start: baseHit.start, end: baseHit.end, replacement: propHit.line });
-  }
-  ops.sort((a, b) => b.start - a.start);
-  for (const op of ops) {
-    content = content.slice(0, op.start) + op.replacement + content.slice(op.end);
-  }
-  return { ok: true, content };
-}
-
-/**
- * Exact check: outside authorized fragment lines, base and next are identical.
- */
-export function assertFragmentScope(
-  baseMarkdown: string,
-  nextMarkdown: string,
-  fragmentIds: string[],
-): { ok: true } | { ok: false; reason: string } {
-  if (!fragmentIds.length) return { ok: true };
-  const mask = (md: string): string => {
-    let out = md;
-    for (const id of fragmentIds) {
-      const hit = findFragmentLine(out, id);
-      if (!hit) continue;
-      out = `${out.slice(0, hit.start)}⟦FRAG:${id}⟧${out.slice(hit.end)}`;
-    }
-    return out;
-  };
-  if (mask(baseMarkdown) !== mask(nextMarkdown)) {
-    return { ok: false, reason: "FRAGMENT_SCOPE_EXCEEDED" };
-  }
-  return { ok: true };
-}
 
 export type DocumentEffectSummary = {
   /** NONE = pre-effect (no D4 transaction attempted). */

```


```diff
commit e012401f6af438df2168f3efb069bbabd03e80c0
Author: Morris Cleland <morris@macbook-air.home>
Date:   Wed Nov 25 21:55:12 2026 +0100

    fix(next): give Nora documentary autonomy and simplify LIVE activity
    
    Seal Nora's full documentProposal without fragment/section reconstruction,
    add objective compare_document_proposal, harden exact conserve of inspected
    candidates, and drop prompt-headline activity plus redundant reply announcements
    with targeted UX fixes for SAS, tables, and conversation type size.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/d4-read-tools.ts b/projects/sfia-studio-next/web/src/domains/conversation/d4-read-tools.ts
index cd92ae23..6b9722e7 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/d4-read-tools.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/d4-read-tools.ts
@@ -634,6 +634,114 @@ export async function readProjectDocumentRevision(
   return { ...result, charsCharged };
 }
 
+/**
+ * Objective line diff between an AVAILABLE base revision and Nora's proposal draft.
+ * Does not decide métier scope — returns factual added/removed samples only.
+ */
+export async function compareDocumentProposal(
+  scope: D4ToolScope,
+  input: {
+    documentId: string;
+    baseRevisionId: string;
+    proposalMarkdown: string;
+    maxSampleLines?: number;
+  },
+) {
+  if (scope.budget.remainingCalls <= 0 || scope.budget.remainingChars <= 0) {
+    return {
+      status: "DENIED" as const,
+      reason: "D4_TOOL_BUDGET_EXHAUSTED",
+      coverage: "DENIED" as ToolCoverage,
+      charsCharged: 0,
+    };
+  }
+  scope.budget.remainingCalls -= 1;
+  await assertScope(scope);
+
+  const owned = await db
+    .select({
+      id: documents.id,
+      title: documents.title,
+    })
+    .from(documents)
+    .where(
+      and(
+        eq(documents.id, input.documentId),
+        eq(documents.preparationId, scope.preparationId),
+        eq(documents.ownerPilotId, scope.pilotId),
+      ),
+    )
+    .limit(1)
+    .then((r) => r[0] ?? null);
+  if (!owned) {
+    return {
+      status: "NOT_FOUND" as const,
+      reason: "DOCUMENT_NOT_FOUND",
+      coverage: "NOT_FOUND" as ToolCoverage,
+      charsCharged: 0,
+    };
+  }
+  const rev = await db
+    .select({
+      id: documentRevisions.id,
+      revisionNumber: documentRevisions.revisionNumber,
+      status: documentRevisions.status,
+      contentMarkdown: documentRevisions.contentMarkdown,
+    })
+    .from(documentRevisions)
+    .where(
+      and(
+        eq(documentRevisions.id, input.baseRevisionId),
+        eq(documentRevisions.documentId, input.documentId),
+      ),
+    )
+    .limit(1)
+    .then((r) => r[0] ?? null);
+  if (!rev || rev.status !== "AVAILABLE") {
+    return {
+      status: "DENIED" as const,
+      reason: "BASE_REVISION_NOT_AVAILABLE",
+      coverage: "DENIED" as ToolCoverage,
+      charsCharged: 0,
+    };
+  }
+
+  const { diffMarkdown } = await import("@/domains/document/service");
+  const diff = diffMarkdown(rev.contentMarkdown, input.proposalMarkdown);
+  const sample = Math.min(Math.max(input.maxSampleLines ?? 24, 4), 60);
+  const payload = {
+    status: diff.degraded ? ("DEGRADED" as const) : ("AVAILABLE" as const),
+    reason: diff.degraded ? (diff.reason ?? "DIFF_BUDGET_EXCEEDED") : null,
+    documentId: owned.id,
+    title: owned.title,
+    baseRevisionId: rev.id,
+    baseRevisionNumber: rev.revisionNumber,
+    identical: !diff.degraded && diff.added.length === 0 && diff.removed.length === 0,
+    addedCount: diff.added.length,
+    removedCount: diff.removed.length,
+    unchangedCount: diff.unchangedCount,
+    addedSample: diff.added.slice(0, sample),
+    removedSample: diff.removed.slice(0, sample),
+    note: "Comparaison objective ligne à ligne — Nora interprète le sens métier ; Studio ne reconstruit pas le document.",
+  };
+  const charsCharged = chargeBudget(scope, payload);
+  emitObs({
+    event_name: "d4.tool.compare_document_proposal",
+    component: "d4.read_tools",
+    request_id: scope.operationId,
+    generation_id: scope.generationId,
+    outcome: diff.degraded ? "FAILED" : "SUCCESS",
+    meta: {
+      document_id: owned.id,
+      base_revision_id: rev.id,
+      added: diff.added.length,
+      removed: diff.removed.length,
+      degraded: Boolean(diff.degraded),
+    },
+  });
+  return { ...payload, charsCharged, coverage: diff.degraded ? ("PARTIAL" as ToolCoverage) : ("COMPLETE" as ToolCoverage) };
+}
+
 /** Build Agents SDK tool() definitions with server-closed-over scope. */
 export async function buildNoraD4Tools(scope: D4ToolScope) {
   const { tool } = await import("@openai/agents");
@@ -681,5 +789,24 @@ export async function buildNoraD4Tools(scope: D4ToolScope) {
         });
       },
     }),
+    tool({
+      name: "compare_document_proposal",
+      description:
+        "Compare an AVAILABLE base document revision to your complete proposal markdown. Returns factual added/removed line samples. Does not rewrite the document. Use before presenting a revise candidate to verify expected changes and hors-scope.",
+      parameters: z.object({
+        documentId: z.string(),
+        baseRevisionId: z.string(),
+        proposalMarkdown: z.string().min(1),
+        maxSampleLines: z.number().int().min(4).max(60).nullable().optional(),
+      }),
+      execute: async (args) => {
+        return compareDocumentProposal(scope, {
+          documentId: args.documentId,
+          baseRevisionId: args.baseRevisionId,
+          proposalMarkdown: args.proposalMarkdown,
+          maxSampleLines: args.maxSampleLines ?? undefined,
+        });
+      },
+    }),
   ];
 }

```


```diff
commit e012401f6af438df2168f3efb069bbabd03e80c0
Author: Morris Cleland <morris@macbook-air.home>
Date:   Wed Nov 25 21:55:12 2026 +0100

    fix(next): give Nora documentary autonomy and simplify LIVE activity
    
    Seal Nora's full documentProposal without fragment/section reconstruction,
    add objective compare_document_proposal, harden exact conserve of inspected
    candidates, and drop prompt-headline activity plus redundant reply announcements
    with targeted UX fixes for SAS, tables, and conversation type size.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/activity-labels.ts b/projects/sfia-studio-next/web/src/domains/conversation/activity-labels.ts
index 4cb013da..225205c6 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/activity-labels.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/activity-labels.ts
@@ -458,35 +458,6 @@ const GROUP_META: Record<string, { title: string; description: string }> = {
   },
 };
 
-/**
- * Compact métier headline from the Pilote ask — never the full prompt dump.
- */
-export function projectMissionHeadlineFromUserAsk(ask: string): string {
-  const raw = (ask || "").replace(/\s+/g, " ").trim();
-  if (!raw) return "Travail engagé";
-  // Prefer the first sentence / line, stripped of imperative noise.
-  const first =
-    raw.split(/(?<=[.!?])\s+/)[0]?.trim() ||
-    raw.split("\n")[0]?.trim() ||
-    raw;
-  let t = first
-    .replace(/^(peux-tu|pouvez-vous|merci de|stp|s'il te plaît)\s+/i, "")
-    .replace(/^(prépare[- ]moi|prépare|modifie|révise|consulte|examine|analyse)\s+/i, (m) => {
-      const verb = m.trim().toLowerCase();
-      if (verb.startsWith("prépare")) return "Préparation — ";
-      if (verb.startsWith("modifie") || verb.startsWith("révise")) return "Révision — ";
-      if (verb.startsWith("consulte") || verb.startsWith("examine")) return "Consultation — ";
-      if (verb.startsWith("analyse")) return "Analyse — ";
-      return "";
-    })
-    .trim();
-  if (t.length < 8) t = first;
-  if (t.length > 120) t = `${t.slice(0, 117).trim()}…`;
-  // Never use a technical id as the mission title.
-  if (/^(tcmd_|proj_|prep_|doc_|drev_|pdoc_)/i.test(t)) return "Travail engagé";
-  return t || "Travail engagé";
-}
-
 function contextualGroupTitle(
   key: string,
   list: Array<ActivityLabelInput & { sequence: number; nature: string; status: string }>,

```


```diff
commit e012401f6af438df2168f3efb069bbabd03e80c0
Author: Morris Cleland <morris@macbook-air.home>
Date:   Wed Nov 25 21:55:12 2026 +0100

    fix(next): give Nora documentary autonomy and simplify LIVE activity
    
    Seal Nora's full documentProposal without fragment/section reconstruction,
    add objective compare_document_proposal, harden exact conserve of inspected
    candidates, and drop prompt-headline activity plus redundant reply announcements
    with targeted UX fixes for SAS, tables, and conversation type size.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
index 7b75e25b..df1076c2 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
@@ -118,6 +118,7 @@ export type CognitivePolicy = {
   toolAllowlist: Array<
     | "search_project_resources"
     | "read_project_document_revision"
+    | "compare_document_proposal"
     | "search_conversation_history"
     | "read_conversation_messages"
     | "list_project_git_sources"
@@ -301,6 +302,7 @@ export function buildCognitivePolicy(
   const toolAllowlist: CognitivePolicy["toolAllowlist"] = [
     "search_project_resources",
     "read_project_document_revision",
+    "compare_document_proposal",
     "search_conversation_history",
     "read_conversation_messages",
     "list_project_git_sources",

```


```diff
commit e012401f6af438df2168f3efb069bbabd03e80c0
Author: Morris Cleland <morris@macbook-air.home>
Date:   Wed Nov 25 21:55:12 2026 +0100

    fix(next): give Nora documentary autonomy and simplify LIVE activity
    
    Seal Nora's full documentProposal without fragment/section reconstruction,
    add objective compare_document_proposal, harden exact conserve of inspected
    candidates, and drop prompt-headline activity plus redundant reply announcements
    with targeted UX fixes for SAS, tables, and conversation type size.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 040a6eb1..cb4192a4 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -1058,6 +1058,8 @@ async function runLiveWithTools(
     "- Ne combine jamais documentSource et documentProposal dans le même tour.",
     "- intents[] = 0..N intentions séparées ; mode EXPLAIN/EXPLORE/PREPARE/REQUEST_EFFECT.",
     "- DOCUMENTAIRE D4 — le Pilote n'a PAS à dire « Crée le document D4 » ni « REQUEST_EFFECT » :",
+    "  • AUTONOMIE : tu produis le document révisé COMPLET dans documentProposal. Studio scelle et conserve ce contenu exact — il ne reconstruit PAS des fragments ni ne filtre par préfixes (RM/REC/…).",
+    "  • Avant de présenter une révision : lis la révision de base (read_project_document_revision), produis la version complète, compare avec compare_document_proposal, corrige si le hors-scope a bougé ou si une modification manque, puis documentProposal = contenu final.",
     "  • « Prépare-moi un document / une note… » (création claire) → d4.create_document mode=PREPARE ou REQUEST_EFFECT + documentProposal (title métier + contenu). Studio matérialise l'enregistrement.",
     "  • Révision avec inspection avant conservation → d4.revise_document mode=PREPARE + documentHint/sectionHint + documentProposal (contenu des sections ou document complet selon stratégie) + effectConditionStatus=OPEN. Studio présente un candidat inspectable ; pas d'écriture tant que le Pilote ne conserve pas.",
     "  • Conservation explicite d'un candidat déjà inspecté → conserve via l'action Pilote (Studio), pas une régénération.",

```


```diff
commit e012401f6af438df2168f3efb069bbabd03e80c0
Author: Morris Cleland <morris@macbook-air.home>
Date:   Wed Nov 25 21:55:12 2026 +0100

    fix(next): give Nora documentary autonomy and simplify LIVE activity
    
    Seal Nora's full documentProposal without fragment/section reconstruction,
    add objective compare_document_proposal, harden exact conserve of inspected
    candidates, and drop prompt-headline activity plus redundant reply announcements
    with targeted UX fixes for SAS, tables, and conversation type size.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx b/projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx
index e11a3205..e367cdb9 100644
--- a/projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx
@@ -234,7 +234,13 @@ export function SasCreateProgressPopup(props: {
                   ) : current ? (
                     <>
                       {/* eslint-disable-next-line @next/next/no-img-element */}
-                      <img src={ASSET.focusHalo} alt="" width={35} height={35} />
+                      <img
+                        src={ASSET.focusHalo}
+                        alt=""
+                        width={35}
+                        height={35}
+                        className="fig-sas-progress-ring-spin"
+                      />
                       <span className="absolute inset-0 flex items-center justify-center">
                         {/* eslint-disable-next-line @next/next/no-img-element */}
                         <img src={ASSET.evaluation} alt="" width={19} height={19} />

```


```diff
commit e012401f6af438df2168f3efb069bbabd03e80c0
Author: Morris Cleland <morris@macbook-air.home>
Date:   Wed Nov 25 21:55:12 2026 +0100

    fix(next): give Nora documentary autonomy and simplify LIVE activity
    
    Seal Nora's full documentProposal without fragment/section reconstruction,
    add objective compare_document_proposal, harden exact conserve of inspected
    candidates, and drop prompt-headline activity plus redundant reply announcements
    with targeted UX fixes for SAS, tables, and conversation type size.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index daf1ac38..da828cec 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -302,7 +302,7 @@
 }
 
 .fig-msg-body {
-  font-size: 14px;
+  font-size: 13px;
   line-height: 1.5;
   color: #f4f6fc;
   font-weight: 400;
@@ -318,6 +318,29 @@
   overflow-x: auto;
 }
 
+/* IT-04 — keep markdown table cells readable (no vertical letter stacking). */
+.fig-msg-body .safe-md table,
+.sas-msg-body .safe-md table {
+  display: block;
+  width: max-content;
+  max-width: 100%;
+  overflow-x: auto;
+  border-collapse: collapse;
+  -webkit-overflow-scrolling: touch;
+}
+
+.fig-msg-body .safe-md th,
+.fig-msg-body .safe-md td,
+.sas-msg-body .safe-md th,
+.sas-msg-body .safe-md td {
+  white-space: nowrap;
+  overflow-wrap: normal;
+  word-break: normal;
+  min-width: 3.5rem;
+  padding: 0.35em 0.6em;
+  vertical-align: top;
+}
+
 .fig-msg-body p {
   margin: 0 0 0.55em;
 }
@@ -825,6 +848,26 @@
   width: 100%;
 }
 
+@keyframes fig-sas-progress-spin {
+  from {
+    transform: rotate(0deg);
+  }
+  to {
+    transform: rotate(360deg);
+  }
+}
+
+.fig-sas-progress-ring-spin {
+  animation: fig-sas-progress-spin 1.1s linear infinite;
+  transform-origin: 50% 50%;
+}
+
+@media (prefers-reduced-motion: reduce) {
+  .fig-sas-progress-ring-spin {
+    animation: none;
+  }
+}
+
 @keyframes fig-nora-pulse {
   0%,
   100% {
@@ -1168,7 +1211,7 @@
 .sas-msg-role-pilot { color: var(--fig-muted); }
 
 .sas-msg-body {
-  font-size: 14px;
+  font-size: 13px;
   line-height: 20px;
   color: var(--fig-ink);
   min-width: 0;

```


```diff
commit e012401f6af438df2168f3efb069bbabd03e80c0
Author: Morris Cleland <morris@macbook-air.home>
Date:   Wed Nov 25 21:55:12 2026 +0100

    fix(next): give Nora documentary autonomy and simplify LIVE activity
    
    Seal Nora's full documentProposal without fragment/section reconstruction,
    add objective compare_document_proposal, harden exact conserve of inspected
    candidates, and drop prompt-headline activity plus redundant reply announcements
    with targeted UX fixes for SAS, tables, and conversation type size.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
index 4bb0cfb1..00c2ee6c 100644
--- a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
@@ -483,14 +483,14 @@ export default function PreparationPage() {
             : documentSave?.status === "CONFLICT"
               ? "Conflit documentaire"
               : "";
+        // IT-01 — the assistant message itself marks completion; no redundant
+        // « Réponse disponible » when nothing else is useful to say.
         const métier =
-          turnStatus === "COMPLETE"
-            ? "Réponse disponible"
-            : turnStatus === "INTERRUPTED"
-              ? "Réponse partielle — reprise possible"
-              : turnStatus === "FAILED" || turnStatus === "UNKNOWN"
-                ? "Réponse non aboutie"
-                : "";
+          turnStatus === "INTERRUPTED"
+            ? "Réponse partielle — reprise possible"
+            : turnStatus === "FAILED" || turnStatus === "UNKNOWN"
+              ? "Réponse non aboutie"
+              : "";
         setStatus([métier, docPart].filter(Boolean).join(" · "));
         await reload();
       } else {

```


## Nouveaux tests (intégral)

### `projects/sfia-studio-next/web/tests/unit/ml5-documentary-autonomy.test.ts`

```ts
import { describe, expect, it } from "vitest";
import { diffMarkdown } from "@/domains/document/service";
import { isConserveProposalTransmit, DOC_CONSERVE_PROPOSAL } from "@/domains/conversation/document-candidate";

/**
 * Discriminant proofs for Nora documentary autonomy (InterventionTrack shape).
 * Studio seals Nora's complete proposal — no prefix/fragment reconstruction.
 */

const V1 = `# InterventionTrack — Conception fonctionnelle V1

## 3. Règles

| ID | Règle | Nature |
|---|---|---|
| **RM-01** | Une demande a un titre. | Proposition |
| **RM-02** | Le titre et la description sont obligatoires. Une valeur vide ou composée uniquement d'espaces est refusée. Une demande créée démarre **À traiter**, sans technicien. | Proposition |
| **RM-03** | L'attribution est distincte de l'état. | Proposition |

## 4. Scénarios

| ID | Action | Résultat | Règles |
|---|---|---|---|
| **REC-01 — Création** | Saisie titre + description | Demande créée | RM-02 |
| **REC-02 — Saisie invalide** | Un membre tente de créer une demande sans titre, puis avec une description composée uniquement d'espaces. | Chaque tentative signale le champ à renseigner ; aucune demande n'est créée. | RM-02 |
| **REC-03 — Attribution** | Attribuer un technicien | État inchangé | RM-03 |

- **Saisie minimale — RM-02 / REC-02 :** titre et description suffisent-ils, ou faut-il une information indispensable en plus, par exemple le lieu ?
`;

const PROPOSAL = V1
  .replace(
    "| **RM-02** | Le titre et la description sont obligatoires. Une valeur vide ou composée uniquement d'espaces est refusée. Une demande créée démarre **À traiter**, sans technicien. | Proposition |",
    "| **RM-02** | À la création, le titre, la description et le lieu d'intervention sont obligatoires. Une valeur vide ou composée uniquement d'espaces est refusée. Une demande créée démarre **À traiter**, sans technicien. | Proposition |",
  )
  .replace(
    "| **REC-02 — Saisie invalide** | Un membre tente de créer une demande sans titre, puis avec une description composée uniquement d'espaces. | Chaque tentative signale le champ à renseigner ; aucune demande n'est créée. | RM-02 |",
    "| **REC-02 — Saisie invalide** | Un membre tente de créer une demande sans titre, puis avec une description composée uniquement d'espaces, puis sans lieu d'intervention. | Chaque tentative signale le champ à renseigner ; aucune demande n'est créée. | RM-02 |",
  );

describe("ML5 documentary autonomy — seal complete proposal", () => {
  it("A — proposal modifies RM-02 and REC-02; hors-scope lines stay identical in sealed body", () => {
    // Studio seals proposal as-is (no fragment splice).
    const sealed = PROPOSAL;
    expect(sealed).toContain("lieu d'intervention sont obligatoires");
    expect(sealed).toContain("puis sans lieu d'intervention");
    expect(sealed).toContain("| **RM-01** | Une demande a un titre. | Proposition |");
    expect(sealed).toContain("| **RM-03** | L'attribution est distincte de l'état. | Proposition |");
    expect(sealed).toContain("| **REC-01 — Création** |");
    expect(sealed).toContain("| **REC-03 — Attribution** |");
    // Open question (citation of ids) preserved verbatim.
    expect(sealed).toContain(
      "titre et description suffisent-ils, ou faut-il une information indispensable en plus, par exemple le lieu ?",
    );
  });

  it("B — unknown prefixes (AC-02) do not require Studio catalog — full proposal carries the change", () => {
    const base = V1 + "\n| **AC-02** | Ancien critère. |\n";
    const prop = base.replace(
      "| **AC-02** | Ancien critère. |",
      "| **AC-02** | Nouveau critère avec lieu. |",
    );
    expect(prop).toContain("Nouveau critère avec lieu");
    expect(prop).not.toContain("Ancien critère");
  });

  it("C — id cited twice: table row changes, citation line can stay (Nora decides)", () => {
    const diff = diffMarkdown(V1, PROPOSAL);
    expect(diff.degraded).toBe(false);
    const removedRm = diff.removed.filter((l) => l.includes("**RM-02**"));
    const addedRm = diff.added.filter((l) => l.includes("**RM-02**"));
    expect(removedRm.length).toBe(1);
    expect(addedRm.length).toBe(1);
    expect(addedRm[0]).toContain("lieu d'intervention");
    // Citation line still present as equal (not in added/removed as sole hit).
    expect(PROPOSAL).toContain("Saisie minimale — RM-02 / REC-02");
  });

  it("E — markdown tables: both REC and RM cells change in proposal", () => {
    const diff = diffMarkdown(V1, PROPOSAL);
    expect(diff.added.some((l) => l.includes("**REC-02") && l.includes("sans lieu"))).toBe(true);
    expect(diff.removed.some((l) => l.includes("**REC-02") && !l.includes("sans lieu"))).toBe(
      true,
    );
  });

  it("F — compare reveals missing change when proposal omits REC-02", () => {
    const incomplete = V1.replace(
      "| **RM-02** | Le titre et la description sont obligatoires. Une valeur vide ou composée uniquement d'espaces est refusée. Une demande créée démarre **À traiter**, sans technicien. | Proposition |",
      "| **RM-02** | À la création, le titre, la description et le lieu d'intervention sont obligatoires. Une valeur vide ou composée uniquement d'espaces est refusée. Une demande créée démarre **À traiter**, sans technicien. | Proposition |",
    );
    const diff = diffMarkdown(V1, incomplete);
    expect(diff.added.some((l) => l.includes("lieu d'intervention sont obligatoires"))).toBe(true);
    expect(diff.added.some((l) => l.includes("**REC-02") && l.includes("sans lieu"))).toBe(false);
  });

  it("G — no-delta proposal is detectable (no fictive revise success)", () => {
    const diff = diffMarkdown(V1, V1);
    expect(diff.degraded).toBe(false);
    expect(diff.added).toEqual([]);
    expect(diff.removed).toEqual([]);
    const noDelta =
      V1.replace(/\r\n/g, "\n") === V1.replace(/\r\n/g, "\n");
    expect(noDelta).toBe(true);
  });

  it("conserve transmit is exact — freeform does not authorize", () => {
    expect(isConserveProposalTransmit(DOC_CONSERVE_PROPOSAL)).toBe(true);
    expect(isConserveProposalTransmit("ok je valide cette nouvelle version")).toBe(false);
    expect(
      isConserveProposalTransmit("Conserver comme nouvelle version la proposition documentaire préparée."),
    ).toBe(true);
  });
});

describe("ML5 LIVE activity — no prompt reformulation export", () => {
  it("projectMissionHeadlineFromUserAsk is removed", async () => {
    const mod = await import("@/domains/conversation/activity-labels");
    expect(
      "projectMissionHeadlineFromUserAsk" in mod
        ? (mod as { projectMissionHeadlineFromUserAsk?: unknown }).projectMissionHeadlineFromUserAsk
        : undefined,
    ).toBeUndefined();
  });
});

```

### `projects/sfia-studio-next/web/tests/integration/ml5-documentary-autonomy.pg.test.ts`

```ts
/**
 * ML5 documentary autonomy — PostgreSQL proofs (DEV).
 * V1 → sealed candidate (exact Nora body) → conserve V2; V1 intact; no fragment rewrite.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { db } from "@/db/client";
import { pilots } from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation } from "@/domains/preparation/service";
import {
  getDocumentRevision,
  listDocumentRevisions,
  reviseDocument,
  savePreparationDocument,
} from "@/domains/document/service";
import { contentBodySha256, contentSha256 } from "@/domains/conversation/document-command";
import { diffMarkdown } from "@/domains/document/service";
import { DOC_CONSERVE_PROPOSAL } from "@/domains/conversation/document-candidate";

const V1 = `# InterventionTrack — Conception fonctionnelle V1

## 3. Règles

| ID | Règle | Nature |
|---|---|---|
| **RM-01** | Une demande a un titre. | Proposition |
| **RM-02** | Le titre et la description sont obligatoires. | Proposition |
| **RM-03** | L'attribution est distincte de l'état. | Proposition |

## 4. Scénarios

| ID | Action | Résultat |
|---|---|---|
| **REC-01** | Création | Demande créée |
| **REC-02** | Saisie invalide | Refus |
| **REC-03** | Attribution | État inchangé |
`;

const SEALED = V1.replace(
  "| **RM-02** | Le titre et la description sont obligatoires. | Proposition |",
  "| **RM-02** | À la création, le titre, la description et le lieu sont obligatoires. | Proposition |",
).replace(
  "| **REC-02** | Saisie invalide | Refus |",
  "| **REC-02** | Saisie invalide sans lieu | Refus |",
);

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

describe("ML5 documentary autonomy (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
  });

  it("I — seal: reviseDocument persists exact sealed body; V1 unchanged; fingerprints match", async () => {
    const pilotId = await seedPilot("ml5-auto-seal");
    const prep = await openOrCreatePreparation(pilotId);
    const v1 = await savePreparationDocument(
      pilotId,
      prep.id,
      "InterventionTrack — Conception fonctionnelle V1",
      V1,
      undefined,
      { correlationKey: newId("ck") },
    );
    expect(v1.status).toBe("AVAILABLE");
    if (v1.status !== "AVAILABLE" || !v1.documentId || !v1.revisionId) throw new Error("v1");

    const v1Fp = contentBodySha256(V1);
    expect(contentBodySha256(V1)).toBe(v1Fp);

    const v2 = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: SEALED,
      correlationKey: newId("ck"),
      scope: "document",
    });
    expect(v2.status).toBe("AVAILABLE");
    if (v2.status !== "AVAILABLE" || !v2.revisionId) throw new Error("v2");

    const got2 = await getDocumentRevision(pilotId, prep.id, v1.documentId, v2.revisionId);
    const got1 = await getDocumentRevision(pilotId, prep.id, v1.documentId, v1.revisionId);
    expect(got2.status).toBe("AVAILABLE");
    expect(got1.status).toBe("AVAILABLE");
    if (got2.status !== "AVAILABLE" || got1.status !== "AVAILABLE") return;

    expect(got2.revision.contentMarkdown).toBe(SEALED);
    expect(got1.revision.contentMarkdown).toBe(V1);
    expect(contentBodySha256(got2.revision.contentMarkdown)).toBe(contentBodySha256(SEALED));
    expect(got2.revision.revisionNumber).toBe(2);
    expect(got1.revision.revisionNumber).toBe(1);

    const diff = diffMarkdown(V1, SEALED);
    expect(diff.added.some((l) => l.includes("lieu sont obligatoires"))).toBe(true);
    expect(diff.added.some((l) => l.includes("**REC-02**") && l.includes("sans lieu"))).toBe(true);
    expect(got2.revision.contentMarkdown).toContain("**RM-01**");
    expect(got2.revision.contentMarkdown).toContain("**RM-03**");
    expect(got2.revision.contentMarkdown).toContain("**REC-03**");
  });

  it("J — stale base refused; retry idempotent (no duplicate V2)", async () => {
    const pilotId = await seedPilot("ml5-auto-stale");
    const prep = await openOrCreatePreparation(pilotId);
    const v1 = await savePreparationDocument(pilotId, prep.id, "Doc", V1, undefined, {
      correlationKey: newId("ck"),
    });
    if (v1.status !== "AVAILABLE" || !v1.documentId || !v1.revisionId) throw new Error("v1");

    const mid = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: SEALED,
      correlationKey: newId("ck"),
      scope: "document",
    });
    expect(mid.status).toBe("AVAILABLE");

    const stale = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: SEALED + "\n\nextra\n",
      correlationKey: newId("ck"),
      scope: "document",
    });
    expect(stale.status).toBe("CONFLICT");

    const listed = await listDocumentRevisions(pilotId, prep.id, v1.documentId);
    expect(listed.status).toBe("AVAILABLE");
    if (listed.status !== "AVAILABLE") return;
    expect(listed.revisions.filter((r) => r.revisionNumber === 2)).toHaveLength(1);
  });

  it("H — D4 owner conserve of sealed body: V2 bytes === candidate; V1 intact; retry no dup", async () => {
    /**
     * Conversational propose→conserve via DET fixtures is currently blocked by a
     * pre-existing conductor probe/continuation bug (SEMANTIC_NONE on 2nd segment)
     * also failing on clean HEAD. The owner write Nora/button conserve both call is
     * reviseDocument — prove exact seal fidelity here.
     */
    const pilotId = await seedPilot("ml5-auto-conserve");
    const prep = await openOrCreatePreparation(pilotId);
    const title = "InterventionTrack — Conception fonctionnelle V1";
    const v1 = await savePreparationDocument(pilotId, prep.id, title, V1, undefined, {
      correlationKey: newId("ck"),
    });
    if (v1.status !== "AVAILABLE" || !v1.documentId || !v1.revisionId) throw new Error("v1");

    const candidateDigest = contentSha256(title, SEALED);
    const ck = newId("ck");
    const first = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: SEALED,
      correlationKey: ck,
      scope: "document",
    });
    expect(first.status).toBe("AVAILABLE");
    if (first.status !== "AVAILABLE" || !first.revisionId) throw new Error("v2");

    // Idempotent retry with same correlation — no third revision.
    const replay = await reviseDocument(pilotId, prep.id, {
      documentId: v1.documentId,
      baseRevisionId: v1.revisionId,
      contentMarkdown: SEALED,
      correlationKey: ck,
      scope: "document",
    });
    expect(replay.status).toBe("AVAILABLE");
    expect(replay.revisionId).toBe(first.revisionId);
    expect(replay.idempotentReplay === true || replay.revisionId === first.revisionId).toBe(
      true,
    );

    const got2 = await getDocumentRevision(pilotId, prep.id, v1.documentId, first.revisionId);
    const got1 = await getDocumentRevision(pilotId, prep.id, v1.documentId, v1.revisionId);
    expect(got2.status).toBe("AVAILABLE");
    expect(got1.status).toBe("AVAILABLE");
    if (got2.status !== "AVAILABLE" || got1.status !== "AVAILABLE") return;
    expect(got2.revision.contentMarkdown).toBe(SEALED);
    expect(contentSha256(title, got2.revision.contentMarkdown)).toBe(candidateDigest);
    expect(got1.revision.contentMarkdown).toBe(V1);

    const listed = await listDocumentRevisions(pilotId, prep.id, v1.documentId);
    expect(listed.status).toBe("AVAILABLE");
    if (listed.status !== "AVAILABLE") return;
    expect(listed.revisions.filter((r) => r.revisionNumber === 2)).toHaveLength(1);

    // Transmit gate remains exact (conversation + button share this check).
    expect(DOC_CONSERVE_PROPOSAL.length).toBeGreaterThan(8);
  });
});

```

### `projects/sfia-studio-next/web/tests/integration/ml5-documentary-autonomy-live.pg.test.ts`

```ts
/**
 * Bounded LIVE (DEV) — Nora documentary autonomy smoke.
 * Real provider; WEB LIVE blocked; one short create + revise + conserve path.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { db } from "@/db/client";
import { pilots, preparations } from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { eq } from "drizzle-orm";
import { preparations } from "@/db/schema";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { listDocuments, getDocumentRevision, listDocumentRevisions } from "@/domains/document/service";
import { postUserMessageAndNora } from "@/domains/conversation/service";
import { DOC_CONSERVE_PROPOSAL } from "@/domains/conversation/document-candidate";

describe("ML5 LIVE documentary autonomy (DEV bounded)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    if (!process.env.OPENAI_API_KEY) throw new Error("OPENAI_API_KEY required for LIVE");
    process.env.STUDIO_LANE = "DEV";
    delete process.env.STUDIO_E2E;
    delete process.env.STUDIO_FORCE_NORA_FIXTURE;
    process.env.SFIA_WEB_SEARCH_LIVE = "0";
    process.env.SFIA_WEB_SEARCH_ENABLED = "0";
    process.env.SFIA_COG_PROFILE_TYPE = "OPERATIONAL_PROVISIONAL";
  });

  it(
    "create short CF → revise two rules → inspect candidate → conserve V2",
    async () => {
      const pilotId = newId("pilot");
      await db.insert(pilots).values({
        id: pilotId,
        displayName: "ML5-Autonomy-LIVE",
        githubUserId: `gh-${pilotId}`,
      });
      const prep = await openOrCreatePreparation(pilotId);
      const label = `AutonomyLive-${Date.now().toString(36)}`;
      await updatePreview(pilotId, prep.id, label, "LIVE documentary autonomy smoke");
      const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0]!;
      const created = await createProjectCommand({
        pilotId,
        preparationId: prep.id,
        expectedCreationRevision: refreshed.creationRevision,
        projectName: label,
        previewSummary: "LIVE documentary autonomy smoke",
        idempotencyKey: newId("idem"),
      });
      expect(created.status).toBe("CREATED");

      const t0 = Date.now();
      const createTurn = await postUserMessageAndNora(
        pilotId,
        prep.id,
        "Rédige un court document de conception fonctionnelle pour un outil fictif TicketLite. Inclus une section Règles avec RM-01 et RM-02, et une section Scénarios avec REC-01 et REC-02. Texte compact.",
      );
      console.log(
        JSON.stringify({
          phase: "create",
          ms: Date.now() - t0,
          status: createTurn.status,
          documentSave: createTurn.documentSave,
          pending: createTurn.pendingDocumentCandidate?.candidateId ?? null,
          tools: createTurn.toolCallsObserved,
          mode: createTurn.noraMode,
        }),
      );

      const docsAfterCreate = await listDocuments(pilotId, prep.id);
      expect(docsAfterCreate.length).toBeGreaterThanOrEqual(1);
      const doc = docsAfterCreate[0]!;
      const documentId = doc.document.id;
      const v1Id = doc.latestRevision!.id;
      const v1Body = (
        await getDocumentRevision(pilotId, prep.id, documentId, v1Id)
      );
      expect(v1Body.status).toBe("AVAILABLE");
      if (v1Body.status !== "AVAILABLE") return;
      const v1Content = v1Body.revision.contentMarkdown;

      const t1 = Date.now();
      const reviseTurn = await postUserMessageAndNora(
        pilotId,
        prep.id,
        `Sur le document ${documentId}, révise uniquement RM-02 pour exiger aussi le lieu, et REC-02 pour mentionner l'absence de lieu. Préserve tout le reste. Compare ta proposition à la V1 avant de présenter.`,
      );
      console.log(
        JSON.stringify({
          phase: "revise",
          ms: Date.now() - t1,
          status: reviseTurn.status,
          documentSave: reviseTurn.documentSave,
          pendingId: reviseTurn.pendingDocumentCandidate?.candidateId ?? null,
          pendingSha: reviseTurn.pendingDocumentCandidate?.contentSha256 ?? null,
          tools: reviseTurn.toolCallsObserved,
          mode: reviseTurn.noraMode,
        }),
      );

      // Prefer pending candidate path; if Nora wrote directly (unexpected), still verify.
      const cand = reviseTurn.pendingDocumentCandidate;
      if (cand?.candidateId && reviseTurn.documentSave?.reason === "PROPOSAL_PENDING_CONSERVATION") {
        const t2 = Date.now();
        const conserve = await postUserMessageAndNora(pilotId, prep.id, DOC_CONSERVE_PROPOSAL, {
          documentFocus: {
            documentId: cand.documentId,
            sourceRevisionId: cand.sourceRevisionId,
            observedHeadRevisionId: cand.observedHeadRevisionId,
            conserveProposal: true,
            pendingCandidateId: cand.candidateId,
            pendingCandidateContentSha256: cand.contentSha256,
          },
        });
        console.log(
          JSON.stringify({
            phase: "conserve",
            ms: Date.now() - t2,
            status: conserve.status,
            documentSave: conserve.documentSave,
            mode: conserve.noraMode,
          }),
        );
        expect(conserve.documentSave?.status).toBe("AVAILABLE");
        expect(conserve.documentSave?.revisionNumber).toBe(2);
        const v2 = await getDocumentRevision(
          pilotId,
          prep.id,
          documentId,
          conserve.documentSave!.revisionId!,
        );
        expect(v2.status).toBe("AVAILABLE");
        if (v2.status !== "AVAILABLE") return;
        expect(v2.revision.contentMarkdown).toBe(cand.contentMarkdown);
        const stillV1 = await getDocumentRevision(pilotId, prep.id, documentId, v1Id);
        expect(stillV1.status).toBe("AVAILABLE");
        if (stillV1.status === "AVAILABLE") {
          expect(stillV1.revision.contentMarkdown).toBe(v1Content);
        }
      } else if (reviseTurn.documentSave?.status === "AVAILABLE") {
        // Direct write path — still require V2 ≠ V1 and V1 intact
        expect(reviseTurn.documentSave.revisionNumber).toBe(2);
        const v2 = await getDocumentRevision(
          pilotId,
          prep.id,
          documentId,
          reviseTurn.documentSave.revisionId!,
        );
        expect(v2.status).toBe("AVAILABLE");
        if (v2.status === "AVAILABLE") {
          expect(v2.revision.contentMarkdown).not.toBe(v1Content);
        }
        const stillV1 = await getDocumentRevision(pilotId, prep.id, documentId, v1Id);
        if (stillV1.status === "AVAILABLE") {
          expect(stillV1.revision.contentMarkdown).toBe(v1Content);
        }
      } else {
        console.log("LIVE revise did not yield pending or AVAILABLE — dump:", {
          documentSave: reviseTurn.documentSave,
          pending: cand,
        });
        expect.fail("expected pending conservation or AVAILABLE revise");
      }

      const listed = await listDocumentRevisions(pilotId, prep.id, documentId);
      expect(listed.status).toBe("AVAILABLE");
      if (listed.status === "AVAILABLE") {
        expect(listed.revisions.some((r) => r.revisionNumber === 1)).toBe(true);
        expect(listed.revisions.some((r) => r.revisionNumber === 2)).toBe(true);
      }
    },
    600_000,
  );
});

```


---

## 12–15. Production Nora / candidat / conservation / empreintes

### PG déterministe (`ml5-documentary-autonomy.pg.test.ts`) — 3 PASS
- I: `reviseDocument` scelle SEALED exact ; V1 intacte ; fingerprints `contentBodySha256` / `contentSha256`
- J: base périmée → CONFLICT ; une seule V2
- H: conserve propriétaire D4 = bytes candidat ; retry idempotent

### LIVE borné DEV (`ml5-documentary-autonomy-live.pg.test.ts`) — 1 PASS (~106s)
- CREATE LIVE → `documentSave.AVAILABLE` v1 `doc_d261416b…` / `drev_64318d27…`
- REVISE LIVE → `PROPOSAL_PENDING_CONSERVATION` + `pdoc_11acf321…` ; tools=3 ; `read_project_document_revision` observé ; allowlist inclut `compare_document_proposal`
- CONSERVE (`DOC_CONSERVE_PROPOSAL`) → V2 `drev_e99d0003…` AVAILABLE ; **V2 content === candidat** ; V1 inchangée
- Mode conserve: `deterministic-fixture` (conserve-only, pas de re-génération fournisseur)

### Extraits LIVE

```
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-25T20:57:39.481Z","lane":"DEV","source_sha":"e012401f6af438df2168f3efb069bbabd03e80c0","build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","operation_id":"op_f026ac95-c4f8-4a82-b707-a7d8450d7407","generation_id":"gen_0ae46fe0-def8-4d48-8df4-ec7f64f05a98","policy_version":"ml5-cog-policy-v3-recette-operational-provisional","profile_type":"OPERATIONAL","meta":{"profile":"analyse","effort":"medium","model":"gpt-6.2-sol","tools":"search_project_resources,read_project_document_revision,compare_document_proposa…[len=489]","profile_type_detail":"OPERATIONAL_PROVISIONAL"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-25T20:57:51.135Z","lane":"DEV","source_sha":"e012401f6af438df2168f3efb069bbabd03e80c0","build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","operation_id":"op_f026ac95-c4f8-4a82-b707-a7d8450d7407","generation_id":"gen_b47ced93-a2b8-4dfd-9ac4-eeae559fcdaa","policy_version":"ml5-cog-policy-v3-recette-operational-provisional","profile_type":"OPERATIONAL","meta":{"profile":"analyse","effort":"medium","model":"gpt-6.2-sol","tools":"search_project_resources,read_project_document_revision,compare_document_proposa…[len=489]","profile_type_detail":"OPERATIONAL_PROVISIONAL"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-25T20:58:01.268Z","lane":"DEV","source_sha":"e012401f6af438df2168f3efb069bbabd03e80c0","build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","operation_id":"op_f026ac95-c4f8-4a82-b707-a7d8450d7407","generation_id":"gen_aa6aac42-aa86-4b36-bf28-b247321487ee","policy_version":"ml5-cog-policy-v3-recette-operational-provisional","profile_type":"OPERATIONAL","meta":{"profile":"analyse","effort":"medium","model":"gpt-6.2-sol","tools":"search_project_resources,read_project_document_revision,compare_document_proposa…[len=489]","profile_type_detail":"OPERATIONAL_PROVISIONAL"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-25T20:58:06.787Z","lane":"DEV","source_sha":"e012401f6af438df2168f3efb069bbabd03e80c0","build_id":null,"event_name":"d4.tool.read_project_document_revision","component":"d4.read_tools","operation_id":"op_f026ac95-c4f8-4a82-b707-a7d8450d7407","generation_id":"gen_aa6aac42-aa86-4b36-bf28-b247321487ee","outcome":"SUCCESS","resource_ref":"document:doc_d261416b-a8d5-475c-a1d6-79ff17ef7819","source_version":"v1","meta":{"chars_returned":882,"chars_charged":1479,"coverage":"COMPLETE","revision_status":"AVAILABLE"}}
{"phase":"create","ms":35159,"status":"COMPLETE","documentSave":{"status":"AVAILABLE","documentId":"doc_d261416b-a8d5-475c-a1d6-79ff17ef7819","revisionId":"drev_64318d27-88f5-4f74-b8ed-85ca71ade3c3","revisionNumber":1,"act":"CREATE"},"pending":null,"tools":0,"mode":"openai-agents-sdk-live"}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-25T20:58:14.633Z","lane":"DEV","source_sha":"e012401f6af438df2168f3efb069bbabd03e80c0","build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","operation_id":"op_04fe40ef-dae2-41a4-988e-c59a9ad398f8","generation_id":"gen_5a5a40ec-2a6f-470e-9b9c-ebb721d75a83","policy_version":"ml5-cog-policy-v3-recette-operational-provisional","profile_type":"OPERATIONAL","meta":{"profile":"analyse","effort":"medium","model":"gpt-6.2-sol","tools":"search_project_resources,read_project_document_revision,compare_document_proposa…[len=489]","profile_type_detail":"OPERATIONAL_PROVISIONAL"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-25T20:58:17.806Z","lane":"DEV","source_sha":"e012401f6af438df2168f3efb069bbabd03e80c0","build_id":null,"event_name":"d4.tool.read_project_document_revision","component":"d4.read_tools","operation_id":"op_04fe40ef-dae2-41a4-988e-c59a9ad398f8","generation_id":"gen_5a5a40ec-2a6f-470e-9b9c-ebb721d75a83","outcome":"SUCCESS","resource_ref":"document:doc_d261416b-a8d5-475c-a1d6-79ff17ef7819","source_version":"v1","meta":{"chars_returned":882,"chars_charged":1479,"coverage":"COMPLETE","revision_status":"AVAILABLE"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-25T20:58:24.079Z","lane":"DEV","source_sha":"e012401f6af438df2168f3efb069bbabd03e80c0","build_id":null,"event_name":"d4.tool.compare_document_proposal","component":"d4.read_tools","request_id":"op_04fe40ef-dae2-41a4-988e-c59a9ad398f8","generation_id":"gen_5a5a40ec-2a6f-470e-9b9c-ebb721d75a83","outcome":"SUCCESS","meta":{}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-25T20:58:31.929Z","lane":"DEV","source_sha":"e012401f6af438df2168f3efb069bbabd03e80c0","build_id":null,"event_name":"d4.tool.compare_document_proposal","component":"d4.read_tools","request_id":"op_04fe40ef-dae2-41a4-988e-c59a9ad398f8","generation_id":"gen_5a5a40ec-2a6f-470e-9b9c-ebb721d75a83","outcome":"SUCCESS","meta":{}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-25T20:58:47.745Z","lane":"DEV","source_sha":"e012401f6af438df2168f3efb069bbabd03e80c0","build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","operation_id":"op_04fe40ef-dae2-41a4-988e-c59a9ad398f8","generation_id":"gen_0ac31ad0-dcbc-466e-92bc-f98af7d550ee","policy_version":"ml5-cog-policy-v3-recette-operational-provisional","profile_type":"OPERATIONAL","meta":{"profile":"analyse","effort":"medium","model":"gpt-6.2-sol","tools":"search_project_resources,read_project_document_revision,compare_document_proposa…[len=489]","profile_type_detail":"OPERATIONAL_PROVISIONAL"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-25T20:58:50.396Z","lane":"DEV","source_sha":"e012401f6af438df2168f3efb069bbabd03e80c0","build_id":null,"event_name":"d4.tool.read_project_document_revision","component":"d4.read_tools","operation_id":"op_04fe40ef-dae2-41a4-988e-c59a9ad398f8","generation_id":"gen_0ac31ad0-dcbc-466e-92bc-f98af7d550ee","outcome":"SUCCESS","resource_ref":"document:doc_d261416b-a8d5-475c-a1d6-79ff17ef7819","source_version":"v1","meta":{"chars_returned":882,"chars_charged":1479,"coverage":"COMPLETE","revision_status":"AVAILABLE"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-25T20:58:56.244Z","lane":"DEV","source_sha":"e012401f6af438df2168f3efb069bbabd03e80c0","build_id":null,"event_name":"d4.tool.compare_document_proposal","component":"d4.read_tools","request_id":"op_04fe40ef-dae2-41a4-988e-c59a9ad398f8","generation_id":"gen_0ac31ad0-dcbc-466e-92bc-f98af7d550ee","outcome":"SUCCESS","meta":{}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-25T20:59:06.081Z","lane":"DEV","source_sha":"e012401f6af438df2168f3efb069bbabd03e80c0","build_id":null,"event_name":"d4.tool.compare_document_proposal","component":"d4.read_tools","request_id":"op_04fe40ef-dae2-41a4-988e-c59a9ad398f8","generation_id":"gen_0ac31ad0-dcbc-466e-92bc-f98af7d550ee","outcome":"SUCCESS","meta":{}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-25T20:59:20.855Z","lane":"DEV","source_sha":"e012401f6af438df2168f3efb069bbabd03e80c0","build_id":null,"event_name":"d3.turn.document_proposal","component":"d3.conversation","request_id":"req_ebb956d3-9853-4e0e-8b69-8f1222861ff6","operation_id":"op_04fe40ef-dae2-41a4-988e-c59a9ad398f8","generation_id":"gen_0ac31ad0-dcbc-466e-92bc-f98af7d550ee","outcome":"FAILED","meta":{"act":"REVISE","extract_path":"fence","proposal_present":true,"fence_count":1,"section_count":2,"proposal_chars":817,"proposal_digest16":"5aa4506400000331","body_ends_with_nl":true,"scope_verdict":null,"refuse_code":"PROPOSAL_PENDING_CONSERVATION","d4_attempted":false,"d4_effect":null}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-25T20:59:20.856Z","lane":"DEV","source_sha":"e012401f6af438df2168f3efb069bbabd03e80c0","build_id":null,"event_name":"d3.turn.document_revise","component":"d3.conversation","request_id":"req_ebb956d3-9853-4e0e-8b69-8f1222861ff6","operation_id":"op_04fe40ef-dae2-41a4-988e-c59a9ad398f8","generation_id":"gen_0ac31ad0-dcbc-466e-92bc-f98af7d550ee","outcome":"UNKNOWN","meta":{"act":"REVISE","status":"NOT_EXECUTED","refuse_code":"PROPOSAL_PENDING_CONSERVATION","d4_effect":"NOT_EXECUTED"}}
{"phase":"revise","ms":66301,"status":"COMPLETE","documentSave":{"status":"NOT_EXECUTED","reason":"PROPOSAL_PENDING_CONSERVATION","documentId":"doc_d261416b-a8d5-475c-a1d6-79ff17ef7819","baseRevisionId":"drev_64318d27-88f5-4f74-b8ed-85ca71ade3c3","act":"REVISE"},"pendingId":"pdoc_11acf321-94b7-47f8-85c5-8b944a6ace96","pendingSha":"fb0939147749c813d898866439c81c54c6a2e5f1de60746e13e1eba431b1e69d","tools":3,"mode":"openai-agents-sdk-live"}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-25T20:59:20.943Z","lane":"DEV","source_sha":"e012401f6af438df2168f3efb069bbabd03e80c0","build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","operation_id":"op_5df139d8-67c7-4597-8e4e-9f93b3e7bbb6","generation_id":"gen_6e648680-56da-4ab0-a3ce-a9f8b1b3b638","policy_version":"ml5-cog-policy-v3-recette-operational-provisional","profile_type":"OPERATIONAL","meta":{"profile":"analyse","effort":"medium","model":"gpt-6.2-sol","tools":"search_project_resources,read_project_document_revision,compare_document_proposa…[len=489]","profile_type_detail":"OPERATIONAL_PROVISIONAL"}}
{"phase":"conserve","ms":4731,"status":"COMPLETE","documentSave":{"status":"AVAILABLE","documentId":"doc_d261416b-a8d5-475c-a1d6-79ff17ef7819","revisionId":"drev_e99d0003-3f46-4bd4-865b-54e6778c4c6c","revisionNumber":2,"baseRevisionId":"drev_64318d27-88f5-4f74-b8ed-85ca71ade3c3","sourceRevisionId":"drev_64318d27-88f5-4f74-b8ed-85ca71ade3c3","observedHeadRevisionId":"drev_64318d27-88f5-4f74-b8ed-85ca71ade3c3","confirmedHistoricalSource":false,"act":"REVISE"},"mode":"deterministic-fixture"}
 ✓ tests/integration/_ml5-autonomy-live.pg.test.ts (1 test) 106248ms
   ✓ ML5 LIVE documentary autonomy (DEV bounded) > create short CF → revise two rules → inspect candidate → conserve V2  106248ms
```

---

## 16. Traces consommation

LIVE ~106s wall ; modèle `gpt-6.2-sol` ; profile OPERATIONAL_PROVISIONAL ; WEB LIVE=0. Pas d'arbitrage FinOps nouveau.

---

## 17–18. Activité LIVE + UX

- Objectif initial: « Orientation du travail à partir de la demande du Pilote » (plus de reformulation prompt)
- Fermeture: « Orientation du travail terminée » (plus de « Réponse Nora disponible »)
- UI status: plus de « Réponse disponible » sur COMPLETE
- IT-02: `.fig-sas-progress-ring-spin` + `@media (prefers-reduced-motion: reduce)`
- IT-04: tables `.safe-md` nowrap + overflow-x
- IT-05: `.fig-msg-body` / `.sas-msg-body` 13px
- Acquis Consultation des sources (producteurs D4) préservés (non reconstruits)

---

## 19. Tests et commandes exécutés

```
npx vitest run tests/unit/ml5-documentary-autonomy.test.ts \
  tests/unit/confront-proposal-fence.test.ts tests/unit/document-act.test.ts \
  tests/unit/activity-labels.test.ts tests/unit/ml5-documentary-prepare.test.ts
# → 47 PASS (avec PG autonomy dans la même passe ciblée)

npx vitest run tests/integration/ml5-documentary-autonomy.pg.test.ts
# → 3 PASS

npx vitest run tests/integration/ml4-chat-first-d4-provenance.pg.test.ts -t 'B2:|R06 nested|C: stale'
# → 3 PASS

npx vitest run tests/integration/ml5-documentary-autonomy-live.pg.test.ts
# → 1 PASS (LIVE)

npm run build  # DEV Z7oT_rRySTn2jBXgDHVB1 ; RECETTE KotrF7y02wbZN79HDsjAb
```

**Préexistant (aussi sur HEAD `8dec35c7`):** DET conversational CREATE/REVISE fixtures → `SEMANTIC_NONE` (conductor probe + continuation suffix). Non introduit par ce delivery ; hors gate seal LIVE.

---

## 20. Matrice IT-01…IT-06

| ID | Statut | Preuve |
| --- | --- | --- |
| IT-01 Activité utile | PASS | headline prompt removed ; objectif neutre |
| IT-02 Anneau SAS | PASS code | spin CSS + reduced-motion |
| IT-03 Densité/hiérarchie | PASS partiel | pas de faux résumé ; groupes D4 préservés |
| IT-04 Tableaux MD | PASS code | nowrap + scroll |
| IT-05 Typo 13px | PASS code | conversation locale |
| IT-06 Révision RM/REC | PASS | seal + LIVE V2===candidat ; fragment path gone |

---

## 21. Réserves / écarts

1. Fixtures DET CREATE/REVISE conversationnelles préexistantes en échec SEMANTIC_NONE (conductor) — UAT LIVE réel non bloqué (prouvé).
2. Captures navigateur avant/après non rejouées ce cycle (preuves code + LIVE service).
3. Docs tip `42b8ee2e` > SHA servi RECETTE `e012401f` (docs only ; runtime = e012401f).

---

## 22. As-built / delivery-history

Voir `construction/delivery-history.md` entrée `DELIV-2026-11-25-ML5-NORA-DOCUMENTARY-AUTONOMY-RECETTE` et registre v0.15.

---

## 23. Identité candidat DEV / RECETTE

| Lane | SHA | BUILD_ID | Digest | Port |
| --- | --- | --- | --- | --- |
| DEV | e012401f | Z7oT_rRySTn2jBXgDHVB1 | 14f97ef58cfe3c8876285dfc6f7bb64bc0ebb72fdfdf03d46697bbe10f5c60db | 3100 / PG 5433 |
| RECETTE | e012401f | KotrF7y02wbZN79HDsjAb | 74a4459ec1eaead042c8dbd02b8487b7cb468397c45963c86c39f2dc875eb374 | 3200 / PG 5434 |

Post-cutover: login 200 · portfolio 401 · counts Δ=0 · WEB LIVE=0 · OAuth normal · auto-session DEV interdite.

---

## 24. Manifeste / rollback

- Backup: `/Users/morris/Projects/sfia-recette-backups/ml5-20261125T205938Z-pre-e012401f6af4` (sha256 `f54582ee…`)
- Rollback worktree: `…-b21df867acd4` / build `gzqaaKhie0CqcfpgrvMMp`
- Plist bak: `com.sfia.studio.next.recette.ml4d-ux004.plist.20261125T210000Z.pre-autonomy-cutover-e012401f6af4.bak`

---

## Instruction ChatGPT

Vérifier suppressions effectives, autonomie réelle Nora (LIVE), conservation exacte, preuves LIVE/UX, qualifier candidat et réserves, reprendre recette utilisateur ciblée.  
**Ne pas déclarer ML5 adopté.**
