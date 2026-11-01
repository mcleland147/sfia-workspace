# SFIA STUDIO — Review Pack FULL
## GI-AKG-M5-A+B+D-01 / CORR-CI-632 — ATOMIC PRODUCT + R24 (#632)

1. Horodatage (UTC): 2026-11-01T00:07:45Z
Campaign: GI-AKG-M5-A+B+D-01 · Correction: CORR-CI-632 · Cycle: 8+9+13+14
Profil: CRITICAL · Typologie: INC/EVOL corrective
Mode: publish-in-cycle (handoff once at end)

---

## 2. Git Truth

### Initial (campaign start)
- Repo: mcleland147/sfia-workspace
- main verified: `7dd49ecd0699a3de9c03759a8fe4637baf31d149`
- PR #632 OPEN · branch `feat/akg-m5-lumen-cog-prepare-corr-01` · HEAD then `a55181c638dcfd697ece689f809bcafafad580f2`
- PR #633 OPEN Draft · branch `docs/akg-m5-abd-positive-admission-r24` · HEAD `c683d761e6b1d3c7512ffb878b85d62f0009dc84` · base = Product #632
- Prior handoff tip `912294e89efdc168765c62ba4bd2a51065cd284a` · blob `fedb35fc538288d656c7f6756cb40ab3f3945cb0`
- Delivery WT: `/Users/morris/Projects/sfia-workspace-feat-akg-m5-lumen-cog-prepare-corr-01`
- Docs WT: `/Users/morris/Projects/sfia-workspace-docs-akg-m5-abd-positive-admission-r24` (preserved; not deleted)

### Final
- branch: `feat/akg-m5-lumen-cog-prepare-corr-01`
- HEAD: `4d69b4da21f957a186427f32fa4e93f60d38995c`
- origin/main: `7dd49ecd0699a3de9c03759a8fe4637baf31d149` (unchanged)
- Remote HEAD match: YES (FF push `a55181c6..4d69b4da`)
- Commits added this campaign:
  - `1b8de9b02f1cbc1d3163f44c34cb9ebe0bd91707` fix(studio): restore prepare currentness and materiality compatibility
  - `1325d1204904eb5c0383fedafbde87ee96d4ee2a` docs(studio): consolidate A+B+D R24 into Product PR #632
  - `4d69b4da21f957a186427f32fa4e93f60d38995c` docs(studio): trim PRR trailing blank lines for CI whitespace gate
- Retained delivery: `a55181c638dcfd697ece689f809bcafafad580f2`

---

## 3. GO Morris exact

GO Morris GRANTED for CORR-CI-632 single corrective campaign:
diagnostic/fix CI FAIL · minimal Product · legitimate test adaptation · R24 reuptake into #632 · PRR A+B+D · manifest/digests · commit(s) · push FF #632 · update PR · verify CI · close #633 SUPERSEDED after full reuptake · L3 handoff FULL once.
MERGE #632 NOT GRANTED · LIVE/REAL NOT GRANTED · no force push · no branch delete · no main write · no micro-GO for in-scope CI ops.

---

## 4. Convergence Pre-check

- Capacité v3: V3-F05 conversation → exécution gouvernée
- Chantier AKG-M5 / L3-S2 OPEN
- Studio v3 = doctrine cible · Runtime v3 NON ADOPTED
- SFIA v2.6 = processus externe
- Fake/DET proofs only this campaign · port 3020 runtime untouched

---

## 5. V3-F05 / L3-S2 / suite

- V3-F05: positive admission gates F1/F2 before Generic PREPARE
- L3-S2 remains OPEN (no auto-close)
- Suite: Delivery + QA + Git Integration + R24 documentary (atomic)

---

## 6. Sources Git lues (primaires)

- CI run 41252627015 logs (Vitest 9 FAIL)
- Product HEAD a55181c6 + docs c683d761
- `prepareGenericExecutionContractDraft.ts` / orchestrateTurn / F2
- Failing tests: same-turn · documentaryPrepare · inspectionBindingSelect · PRR conformance
- `check-production-runtime-reference.mjs` (`--write-digests`)
- PRR volumes + manifest
- `.github/workflows/sfia-studio-ci.yml`
- Process templates / convergence / C1 / M5 / v3 framing / PRR README 03 05–09 (as required)

---

## 7. R23 architecture (causal map)

Pilote → F1/F2 → `resolvePositivePrepareAdmissionEvidence` → admission → solicit → `buildIntentAnalysisFromSolicitedMission` → materiality/capabilities → missionKey → EC → INSPECT → Confirm → Authorize → Select.

CORR-CI-632 causes:
1. **F1 digests** — R24 not in Product tree ⇒ manifest drift.
2. **F2 same-turn** — Slice D gate requires E-EXPLICIT (`prépare`+`contrat`); harness used “Prépare une mission…” ⇒ queue/solicit never called ⇒ no EC ⇒ STALE unprovable.
3. **F3 documentary** — builder set `executionIntent.other` for any non-readOnly including undeclared mutation pathless ⇒ broke historical null contract.
4. **F4 I11** — directory token `projects/demo/src` treated as scopeIn ⇒ STRUCTURAL stamp at PREPARE vs NON_STRUCTURAL at Confirm (`MATERIALITY_CURRENT_MISMATCH`).

Qualification: BEHAVIOR PROVEN (DET) · DOCUMENTED in R24 · COVERAGE VERIFIED on target suites · KNOWN GAP: E-EXPLICIT lexical conservative (ACCEPT/DEFER).

---

## 8. CI run 41252627015 (pre-corr)

URL: https://github.com/mcleland147/sfia-workspace/actions/runs/41252627015
HEAD: a55181c6 · Detect/tsc/lint/build PASS · Vitest 6338 PASS / **9 FAIL** / 142 SKIP · Required Gate FAIL.

---

## 9. Neuf FAIL — causes racines

| ID | Test | Cause | Correctif |
|---|---|---|---|
| F1 | PRR digests | R24 absent | Atomic R24 + digests |
| F2A | queue not called | utterance ≠ E-EXPLICIT | harness → contrat speech-act |
| F2B | solicit not called | same | same |
| F2C | not STALE | no EC before LPS bump | same + EC proven |
| F3A/C3/D2/D4 | executionIntent other | builder invented other | pathless → null |
| F4 I11 | Confirm false | MATERIALITY_CURRENT_MISMATCH | file-token scopeIn |

---

## 10. Corrections Product

File: `prepareGenericExecutionContractDraft.ts`
- `isStandaloneRepoPathScopeToken(scope, {allowDirectory})` — default file extension; directory only if write
- `buildIntentAnalysisFromSolicitedMission`: read_only / file-path other+scopeIn / write|unknown other empty scopeIn / else **null**

No architectural pivot · no requirePositive=false · no fabricated PilotDecisionCandidate · no SHE change.

---

## 11. Évolution des tests

`p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts` — A/B/C contents now include « Prépare le contrat d'exécution… » (legitimate Pilote E-EXPLICIT). Assertions unchanged (queue/solicit/STALE behaviour).

Documentary + I11 assertions unchanged — Product restored to match historical contracts.

---

## 12. Invariants préservés

INV-MODEL-NE-CONSENT · INV-TOOL-NE-CONSENT · INV-E-OFFER-BIND · INV-NO-EXPLICIT-DOWNGRADE · INV-SCOPEIN-STANDALONE (file-token tightened) · INV-PATHLESS-INTENT-NULL (new, CORR) · INV-SHE-PRESERVED · anti-doublon R3 · no docs_write invent · no WRITE from path alone.

---

## 13. R1/R2/R3 non-régressions

positivePrepareAdmission 43 PASS · lumenCog 16 PASS · der16/gD4/toolFirst/SHE PASS.

---

## 14–16. Target suites

same-turn 4 PASS · documentaryPrepare 11 PASS · inspectionBindingSelect 15 PASS (I11 Confirm ok).

---

## 17. Intégration R24

Mechanism: `git cherry-pick --no-commit c683d761` then CORR-CI-632 narrative sync + digests vs Product corrective `1b8de9b0` + EOF whitespace trim.
Seven files: README · 03 · 06 · 07 · 08 · 09 · manifest.
No merge of #633 · no dependency on #633 for CI.

---

## 18. Manifest / digests

`lastReviewedCommit`: `1b8de9b02f1cbc1d3163f44c34cb9ebe0bd91707`
`lastReviewedAt`: `2026-11-01T00:05:00Z`
Epistemic: **AS-IMPLEMENTED ON PRODUCT PR CANDIDATE** ≠ CURRENT ON MAIN.
Checker: `node scripts/check-production-runtime-reference.mjs` OK after `--write-digests`.
Digest matching ≠ semantic exhaustiveness.

---

## 19. Inventaire fichiers (origin/main...HEAD)

```
A	projects/sfia-studio/app/__tests__/nora-cognitive-runtime/corrA1b01.secured.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S1.genericExecutionIntegrated.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.epS208.proof01.piloteResume.integrated.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.epS208.proof01.r1CkcSemantic.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.epS208.proof01.rInspect01.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.s8.projectFirst.integrated.d0.test.ts
A	projects/sfia-studio/app/__tests__/project-assistant/lumenCogPrepareCorr01.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.missionIdentityContinuitySession.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.pilotPresentationRecordBinding.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.she.singleHumanExecute.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.executionContractSimplification.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts
A	projects/sfia-studio/app/__tests__/project-assistant/positivePrepareAdmission.d0.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M	projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
M	projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
M	projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
M	projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
M	projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
M	projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
M	projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
M	projects/sfia-studio/production-runtime-reference/README.md
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json

```

Stat:
```
 .../corrA1b01.secured.d0.test.ts                   |  362 +++++++
 ...akgM5L3S1.genericExecutionIntegrated.d0.test.ts |    6 +
 ...S208.proof01.piloteResume.integrated.d0.test.ts |    1 +
 ...gM5L3S2.epS208.proof01.r1CkcSemantic.d0.test.ts |    4 +
 .../akgM5L3S2.epS208.proof01.rInspect01.d0.test.ts |    4 +
 ...akgM5L3S2.s8.projectFirst.integrated.d0.test.ts |    7 +
 .../lumenCogPrepareCorr01.d0.test.ts               |  387 +++++++
 ...ch.genericPrepareSameTurnCurrentness.d0.test.ts |   10 +-
 .../p6.der16.genericNoraToolInvocation.d0.test.ts  |   11 +-
 ...D4.genericPrepareWithoutSystematicHd.d0.test.ts |   79 ++
 ...aterialityBlock01.documentaryPrepare.d0.test.ts |    2 +
 .../p6.inspectionBindingSelect.d0.test.ts          |    3 +
 ....mHd01.authorityContinuityCorrection.d0.test.ts |    4 +
 ...p6.mHd01.genericMissionHumanDecision.d0.test.ts |    4 +
 ...d02.missionIdentityContinuitySession.d0.test.ts |    1 +
 ...mHd02.pilotPresentationRecordBinding.d0.test.ts |    1 +
 .../p6.projectScopedCursorSelection.d0.test.ts     |    4 +
 .../p6.she.singleHumanExecute.d0.test.ts           |    1 +
 ...irst.executionContractSimplification.d0.test.ts |    7 +
 .../p6.toolFirst.safetyClosureR1R2.d0.test.ts      |    6 +
 .../positivePrepareAdmission.d0.test.ts            | 1126 ++++++++++++++++++++
 .../surfaces/ConversationSurface.tsx               |   16 +-
 .../project-assistant/buildProjectSystemPrompt.ts  |   22 +-
 .../features/project-assistant/f2/orchestrateF2.ts |    6 +
 .../features/project-assistant/orchestrateTurn.ts  |   53 +
 .../w2/prepareGenericExecutionContractDraft.ts     |  581 +++++++++-
 .../noraAdaptivePresentation.ts                    |  500 ++++++++-
 .../productExecutionAgentsTools.ts                 |    3 +
 .../03-end-to-end-flow-catalog.md                  |   34 +
 .../06-persistence-restart-and-recovery.md         |   10 +
 .../07-authority-invariants-and-failure-modes.md   |   14 +
 .../08-test-proof-and-conformance-map.md           |   16 +
 ...9-known-gaps-reserves-and-current-boundaries.md |   15 +
 .../production-runtime-reference/README.md         |   14 +
 .../production-runtime-reference.manifest.json     |   31 +-
 35 files changed, 3257 insertions(+), 88 deletions(-)

```

---

## 20–22. Diffs complets (reconstitution)

### Product corrective commit `1b8de9b0` (FULL)

```
commit 1b8de9b02f1cbc1d3163f44c34cb9ebe0bd91707
Author:     Morris Cleland <morris@MacBook-Air.local>
AuthorDate: Sun Nov 1 01:02:23 2026 +0100
Commit:     Morris Cleland <morris@MacBook-Air.local>
CommitDate: Sun Nov 1 01:02:23 2026 +0100

    fix(studio): restore prepare currentness and materiality compatibility

    CORR-CI-632 — keep pathless documentary missions at executionIntent=null,
    restrict auto scopeIn to file tokens (directory only with explicit write),
    and adapt same-turn harness utterances to E-EXPLICIT contrat speech-acts.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts
index 3a4fcfc3..968a6d76 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts
@@ -461,7 +461,9 @@ describe("P6 arch — Generic PREPARE same-turn currentness", () => {
       oa,
       withAcw: true,
       content:
-        "Pour la V1, autoriser les inscriptions au-delà de la capacité avec avertissement, sans liste d'attente. Prépare une mission Cursor de lecture seule.",
+        // Slice D — E-EXPLICIT must be a clear PREPARE speech-act (contrat),
+        // not a model/tool solicit alone (CORR-CI-632 same-turn harness).
+        "Pour la V1, autoriser les inscriptions au-delà de la capacité avec avertissement, sans liste d'attente. Prépare le contrat d'exécution pour une mission Cursor de lecture seule.",
     });
     expect(turn.ok).toBe(true);
     if (!turn.ok) throw new Error(turn.message);
@@ -540,7 +542,8 @@ describe("P6 arch — Generic PREPARE same-turn currentness", () => {
       projectId,
       oa,
       withAcw: false,
-      content: "Prépare une mission Cursor de lecture seule sur le dépôt.",
+      content:
+        "Prépare le contrat d'exécution pour une mission Cursor de lecture seule sur le dépôt.",
     });
     expect(turn.ok).toBe(true);
     expect(spy).toHaveBeenCalledTimes(1);
@@ -558,7 +561,8 @@ describe("P6 arch — Generic PREPARE same-turn currentness", () => {
       projectId,
       oa,
       withAcw: false,
-      content: "Prépare la mission lecture seule.",
+      content:
+        "Prépare le contrat d'exécution pour la mission lecture seule.",
     });
     expect(turn.ok).toBe(true);

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index 9d47fcac..699298c2 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
@@ -1655,8 +1655,15 @@ export type SolicitGenericPrepareMissionFields = {
  * R3 Exit — standalone repository path token for scopeIn parity only.
  * DÉDUPLICATION ≠ QUALIFICATION WRITE: never promote narrative / URL / A/B
  * labels into mutation scopeIn. Whole-string match only (no embedded path).
+ *
+ * Default: file-like token with known extension (avoids directory-only strings
+ * flipping pathless materiality / STRUCTURAL stamps — CORR-CI-632 I11).
+ * `allowDirectory` — only when repositoryMutation is explicitly write.
  */
-export function isStandaloneRepoPathScopeToken(scope: string): boolean {
+export function isStandaloneRepoPathScopeToken(
+  scope: string,
+  opts?: { readonly allowDirectory?: boolean },
+): boolean {
   const s = scope.trim();
   if (!s) return false;
   // Narratives always contain whitespace — keep scope narrative, empty scopeIn.
@@ -1673,9 +1680,10 @@ export function isStandaloneRepoPathScopeToken(scope: string): boolean {
   const workspaceish =
     /^(projects|\.sfia|app|src|docs)[/\\]/.test(s) ||
     /^projects[/\\]/i.test(s);
-  // "A/B" labels without extension or workspace prefix are NOT repo paths.
-  if (!hasExt && !workspaceish) return false;
-  return hasExt || /[/\\]/.test(s);
+  if (hasExt) return workspaceish || /[/\\]/.test(s) || hasExt;
+  // Directory-only (e.g. projects/demo/src) — not auto scopeIn unless write.
+  if (opts?.allowDirectory && workspaceish && /[/\\]/.test(s)) return true;
+  return false;
 }

 /**
@@ -1698,11 +1706,41 @@ export function buildIntentAnalysisFromSolicitedMission(
     sig?.irreversible === true;
   const notes = fields.contextNotes?.trim() || null;
   const mutation = fields.repositoryMutation ?? null;
-  // R3 Exit — only a standalone path token may enter scopeIn for missionKey
-  // parity. read/none keep empty scopeIn. Never invent WRITE from path alone.
-  const pathLikeScope = !!scope && isStandaloneRepoPathScopeToken(scope);
+  // R3 Exit — file path tokens may enter scopeIn for missionKey parity.
+  // Pathless / undeclared mutation keep executionIntent=null (historical).
+  // read/none → read_only empty scopeIn. Never invent WRITE from path alone.
   const readOnly = mutation === "none" || mutation === "read";
+  const pathLikeScope =
+    !!scope &&
+    isStandaloneRepoPathScopeToken(scope, {
+      allowDirectory: mutation === "write",
+    });
   const scopeIn = !readOnly && pathLikeScope && scope ? [scope] : [];
+  const executionIntent: IntentAnalysisDto["executionIntent"] = readOnly
+    ? ({
+        intentKind: "read_only",
+        scopeIn: [],
+        scopeOut: [],
+        expectedOutputs: expectedOutcome ? [expectedOutcome] : [],
+        requiredCapabilities: [],
+      } as IntentAnalysisDto["executionIntent"])
+    : pathLikeScope && scope
+      ? ({
+          intentKind: "other",
+          scopeIn,
+          scopeOut: [],
+          expectedOutputs: expectedOutcome ? [expectedOutcome] : [],
+          requiredCapabilities: [],
+        } as IntentAnalysisDto["executionIntent"])
+      : mutation === "write" || mutation === "unknown"
+        ? ({
+            intentKind: "other",
+            scopeIn: [],
+            scopeOut: [],
+            expectedOutputs: expectedOutcome ? [expectedOutcome] : [],
+            requiredCapabilities: [],
+          } as IntentAnalysisDto["executionIntent"])
+        : null;
   const base: IntentAnalysisDto = {
     parseOk: true,
     intentClass: "execution_request",
@@ -1729,21 +1767,7 @@ export function buildIntentAnalysisFromSolicitedMission(
     expectedOutcome,
     criticalJustification: null,
     requestedOperation: null,
-    executionIntent: readOnly
-      ? ({
-          intentKind: "read_only",
-          scopeIn: [],
-          scopeOut: [],
-          expectedOutputs: expectedOutcome ? [expectedOutcome] : [],
-          requiredCapabilities: [],
-        } as IntentAnalysisDto["executionIntent"])
-      : ({
-          intentKind: "other",
-          scopeIn,
-          scopeOut: [],
-          expectedOutputs: expectedOutcome ? [expectedOutcome] : [],
-          requiredCapabilities: [],
-        } as IntentAnalysisDto["executionIntent"]),
+    executionIntent,
   };
   if (
     mutation === "none" ||

```

### R24 consolidate commit `1325d120` (FULL)

```
commit 1325d1204904eb5c0383fedafbde87ee96d4ee2a
Author:     Morris Cleland <morris@MacBook-Air.local>
AuthorDate: Sun Nov 1 01:03:37 2026 +0100
Commit:     Morris Cleland <morris@MacBook-Air.local>
CommitDate: Sun Nov 1 01:03:37 2026 +0100

    docs(studio): consolidate A+B+D R24 into Product PR #632

    Atomic reuptake of positive-admission runtime reference (ex-#633) onto the
    CORR-CI-632 Product corrective tree; refresh digests vs 1b8de9b0 candidate.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index e8c493ed..37f6c2d6 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -195,6 +195,40 @@ Descriptive Product routing map for the same conversational front door. **Does n
 - **Proof:** SHE (`p6.she.singleHumanExecute*`, GAP continuity/HD/finalization) + G-D4 / materiality / M-HD / DER16 / Option1 / Tool-First — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake). REAL NOT PROVEN.
 - **Status:** COMPLETE domain (legacy M3); Generic PREPARE + SHE Option A **CURRENT ON MAIN** (PR #590 `c9abdbc3`); Tool-First R1 **CURRENT ON MAIN** at tested scope (PR #588). DETERMINISTIC proof · ≠ REAL · ≠ P6 GLOBAL PASS

+
+
+## Overlay — GI-AKG-M5-A+B+D-01 Positive Product Admission (F04/F08 — AS-IMPLEMENTED ON PRODUCT PR CANDIDATE — NOT YET CURRENT ON MAIN — 2026-11-01)
+
+> **Epistemic class:** AS-IMPLEMENTED ON PRODUCT PR [#632](https://github.com/mcleland147/sfia-workspace/pull/632) Product corrective `1b8de9b02f1cbc1d3163f44c34cb9ebe0bd91707` (CORR-CI-632; delivery base `a55181c6…`) · R24 atomic in #632 · **≠ CURRENT ON MAIN** · DET proven · LIVE/REAL **NOT EXERCISED**.
+
+### Dual entry → one Product gate
+
+1. **F2 chat-first** — `resolveChatFirstGenericPrepareGo` → `solicitGenericExecutionPrepare` with `requirePositivePilotAdmission: true`, Pilote utterance, optional `expectedOfferFingerprint`.
+2. **F1 Nora tool** — `request_generic_execution_prepare` may **queue** only after positive admission evidence; finalize **revalidates** before write.
+3. **Common mutation point** — `resolvePositivePrepareAdmissionEvidence` then `prepareGenericExecutionContractDraft`. Tool solicitation / model DTO / absence of refuse **≠** admission.
+
+### Evidence classes
+
+| Class | Meaning |
+|---|---|
+| E-OFFER-ACCEPT | Pilote accept bound to unique CURRENT offer (project/session/cycle/fingerprint); mission rebound from offer |
+| E-EXPLICIT-PREPARE | Narrow direct prepare speech-act; independent of CURRENT offer when no offer reference |
+| no_go | refuse / citation / hedge / missing utterance / fingerprint mismatch / expected fingerprint with E-EXPLICIT bypass attempt |
+
+**Priority:** refuse/citation/hedge → CURRENT-offer bind (accept or prepare+offer-ref) → independent E-EXPLICIT → no_go. No silent E-OFFER→E-EXPLICIT downgrade.
+
+### ScopeIn (R3 Exit) + pathless materiality (CORR-CI-632)
+
+`buildIntentAnalysisFromSolicitedMission` may set `executionIntent.scopeIn` only for a **file-like standalone path token** (`isStandaloneRepoPathScopeToken`; directory-only workspace path allowed only when `repositoryMutation=write`). Narrative / URL / `A/B` labels / embedded paths stay narrative `scope`. `repositoryMutation` none/read → `read_only` empty scopeIn. Path alone **≠** WRITE invent. Pathless / undeclared mutation → `executionIntent=null` (historical documentary materiality; no invented `other`).
+
+### Routing note
+
+Same Product turn: F1 advisory XOR F2 chat-first prepare (`skipF1ForChatFirstPrepare`). Dual simultaneous orchestrator prepare is **not** a production scenario. Same-turn currentness harnesses use E-EXPLICIT **contrat** speech-acts (model/tool alone ≠ consent).
+
+### Proof
+
+`positivePrepareAdmission.d0.test.ts` · `lumenCogPrepareCorr01` · `p6.der16` · `p6.gD4` · `p6.toolFirst` · NAP/corrA1b01 · CORR-CI-632 suites (`genericPrepareSameTurnCurrentness` · `materialityBlock01.documentaryPrepare` · `inspectionBindingSelect`) — DET at tested scope. SHE unchanged.
+
 ## F09 — EC inspect / Confirmation / authority
 - **Objects:** InspectionAttestation, Confirmation, AuthorityVerificationReceipt
 - **Unified inspection (CURRENT):** Conversation / Execution / Trajectory share one exam contract (`ContractInspectionExamPanel` + `contractInspectionExam` helpers). Explicit open ≠ write; Attest requires presented facts; identity binding = `projectId` + `executionContractId` + `version` + `semanticFingerprint`. Contract change → reinspection. PREPARE must not auto-inspect. Trajectory does not invent inspection on PREPARE/Execute alone.
diff --git a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
index 4f7f41fb..bd06deff 100644
--- a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
+++ b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
@@ -209,3 +209,14 @@ Four situations must stay distinct (S2 / M-HD-01 HD11):
 **EP-S2-08-PROOF-01 persistence / remount (2026-10-28):** **HISTORICAL LOCAL CANDIDATE** at original authoring (**≠ CURRENT ON MAIN** then). **CURRENT ON MAIN** via [PR #626](https://github.com/mcleland147/sfia-workspace/pull/626) **MERGED** `2026-10-28T13:44:42Z` · merge **`3064047258e54cfc9a1f24e21d322ad6ae18217d`** · Product `e78db159…` · R24 `485ec3cb…` · [post-merge CI #40699255387](https://github.com/mcleland147/sfia-workspace/actions/runs/40699255387) **SUCCESS** · Required Gate **PASS** — at tested deterministic scope. Process remount = new OA on same durable SQLite + refs → Project/EC/Attempt + Evidence/RB/CE + W3-C recommendation/reserve rehydrate DET (`akgM5L3S2.epS208.proof01…` B2/B6 **PASS** after Option 1). Post-Evidence CKC orientation on remount remains eligibility-gated (R1 Option A): Attempt EC durable stamps (including preserved `repositoryMutationDeclared`) decide Delivery vs refuse — remount does not invent CycleInstance, invent `"write"`, or widen SHE authority. **Separation:** Process remount DET = **BEHAVIOR PROVEN AT TESTED SCOPE** · browser `/studio` remount E2E = **NOT PROVEN** · Nora/Pilote live UX = **NOT PROVEN** · EP-S2-08 still **PARTIAL** · ≠ recovery E2E overclaim.

 **≠** invent recovery E2E beyond DET proofs.
+
+## Overlay — GI-AKG-M5-A+B+D-01 pending offer / admission (AS-IMPLEMENTED ON PRODUCT PR CANDIDATE — NOT YET CURRENT ON MAIN — 2026-11-01)
+
+| Artefact | Persistence | Restart behaviour |
+|---|---|---|
+| Pending Generic PREPARE offer + fingerprint | Process-local (`pendingGenericPrepareOfferStore`) | Lost at restart → NO_CURRENT / STALE honesty; re-offer required |
+| Positive admission evidence | Turn-local / request-scoped (not a durable OA aggregate) | Must be re-established from current Pilote utterance + live offer |
+| Durable EC after admitted PREPARE | OA ExecutionContract tables | Survives restart; SHE Execute path unchanged |
+
+**Anti-claims:** offer process-local ≠ Authorization · no durable admissionKind stamp (accepted debt) · LIVE restart UX NOT PROVEN.
+
diff --git a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
index c158d876..2d580797 100644
--- a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
+++ b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
@@ -178,3 +178,18 @@ Governance STOP ≠ product defect: blocked continuation for UNKNOWN Artifact is
 | INV-L3S2-SHE-AUTHORITY | SHE authority unchanged; review refusal ≠ Cursor process failure | CURRENT ON MAIN DET · KEEP |

 Refusal codes (Product-local mapping): `EVIDENCE_PROJECT_MISMATCH`, `EVIDENCE_CONTRACT_MISMATCH`, `EVIDENCE_ATTEMPT_MISMATCH`, `EVIDENCE_CYCLE_MISMATCH`, `W3B_EVIDENCE_ADMISSION_REJECTED`.
+
+## Overlay — GI-AKG-M5-A+B+D-01 positive admission invariants (AS-IMPLEMENTED ON PRODUCT PR CANDIDATE — NOT YET CURRENT ON MAIN — 2026-11-01)
+
+| ID | Statement | Status (candidate) |
+|---|---|---|
+| INV-MODEL-NE-CONSENT | PilotDecisionCandidate / model DTO never suffices for PREPARE admission | DET BEHAVIOR PROVEN |
+| INV-TOOL-NE-CONSENT | Nora `request_generic_execution_prepare` solicitation ≠ Pilote consent | DET BEHAVIOR PROVEN |
+| INV-E-OFFER-BIND | E-OFFER-ACCEPT rebinds mission from CURRENT offer; fingerprint mismatch → NO_GO | DET BEHAVIOR PROVEN |
+| INV-NO-EXPLICIT-DOWNGRADE | expectedOfferFingerprint blocks E-EXPLICIT bypass | DET BEHAVIOR PROVEN |
+| INV-SCOPEIN-STANDALONE | scopeIn only for file-like standalone path tokens (directory-only with explicit write); narrative/URL/A/B excluded; path ≠ WRITE invent | DET BEHAVIOR PROVEN |
+| INV-PATHLESS-INTENT-NULL | pathless / undeclared mutation keep `executionIntent=null` (no invented `other`) | DET BEHAVIOR PROVEN (CORR-CI-632) |
+| INV-SHE-PRESERVED | PREPARE inspectable without auto HD/Attempt/Authorization; Execute remains separate | PRESERVED |
+
+Product corrective candidate: `1b8de9b02f1cbc1d3163f44c34cb9ebe0bd91707` (PR #632; CORR-CI-632). **≠ CURRENT ON MAIN**.
+
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index fc098786..b715ee33 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -277,3 +277,20 @@ Do **not** conflate Generic PREPARE eligibility with Artifact continuation. DETE
 > **Post-merge proof qualifier (2026-10-28):** [PR #626](https://github.com/mcleland147/sfia-workspace/pull/626) introduced **five** EP-S2-08-specific test suites (`akgM5L3S2.epS208.proof01.piloteResume.integrated.d0.test.ts` · `akgM5L3S2.epS208.proof01.r1CkcSemantic.d0.test.ts` · `akgM5L3S2.epS208.proof01.rInspect01.d0.test.ts` · `epS208.proof01.rInspect01.inspectionSurface.ui.test.tsx` · `epS208.proof01.piloteSurface.b5b6.ui.test.tsx`) plus **seven** Product source files in reviewed scope · source/feature head **`485ec3cb370dca46691e3432255a0033b3502a4d`** · merge **`3064047258e54cfc9a1f24e21d322ad6ae18217d`** · [post-merge CI #40699255387](https://github.com/mcleland147/sfia-workspace/actions/runs/40699255387) **SUCCESS** · **SFIA Studio Required Gate PASS**. Pre-existing `p6.mHd01.genericMissionHumanDecision.d0.test.ts` was **reused** as R-HD-01 non-regression oracle — blob `c8d6649104475909a646d8ef78f744afc27683cc` identical before (`3fb84630…`) and after (`30640472…`) #626 · **not** introduced by #626 · ≠ new M-HD-01 test commit · ≠ fresh isolated M-HD-01 re-execution claimed here. Historical local DET/jsdom counts above are **authoring-time evidence** — **not** re-asserted as independently re-run in this documentary cycle. CI Required Gate SUCCESS on merge SHA ≠ inference of browser E2E · ≠ REAL · ≠ EP-S2-08 PASS. Separation: five EP-S2-08 suites + Product source = **CURRENT ON MAIN via #626** · M-HD-01 = pre-existing reused oracle · browser `/studio` remount E2E = **NOT PROVEN** · REAL execution = **NOT PROVEN** · EP-S2-08 remains **PARTIAL**.

 Ceiling: **DETERMINISTIC PRODUCT INTEGRATION AT TESTED SCOPE**. ≠ browser `/studio` remount · ≠ live Pilot HD · ≠ EP-S2-08 PASS · ≠ REAL · ≠ Final Critical Readiness exit · jsdom ≠ browser.
+
+## Overlay — GI-AKG-M5-A+B+D-01 proof map (AS-IMPLEMENTED ON PRODUCT PR CANDIDATE — NOT YET CURRENT ON MAIN — 2026-11-01)
+
+| Flow / concern | Test path | Level |
+|---|---|---|
+| Positive admission R1/R2/R3 + M/O | `app/__tests__/project-assistant/positivePrepareAdmission.d0.test.ts` | DETERMINISTIC |
+| LUMEN consent + transverse A+B | `app/__tests__/project-assistant/lumenCogPrepareCorr01.d0.test.ts` | DETERMINISTIC |
+| Cognitive fidelity A | `app/__tests__/nora-cognitive-runtime/corrA1b01.secured.d0.test.ts` + NAP d0/UI | DETERMINISTIC |
+| F1 tool / F2 shared solicit | `p6.der16.genericNoraToolInvocation.d0.test.ts` | DETERMINISTIC |
+| SHE / materiality non-regression | `p6.gD4.*` · `p6.toolFirst.safetyClosureR1R2.d0.test.ts` | DETERMINISTIC |
+| Same-turn currentness (CORR-CI-632) | `p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts` | DETERMINISTIC |
+| Documentary pathless materiality (CORR-CI-632) | `p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts` | DETERMINISTIC |
+| Inspection Confirm/Select binding (CORR-CI-632) | `p6.inspectionBindingSelect.d0.test.ts` | DETERMINISTIC |
+| PRR digests (CORR-CI-632 F1) | `architecture/productionRuntimeReference.conformance.d0.test.ts` | DETERMINISTIC |
+
+**Campaign QA (CORR-CI-632):** target suites PASS locally · OpenAI LIVE NOT EXERCISED · Cursor REAL NOT EXERCISED · G-REAL NOT GRANTED · GitHub Required Gate resolved from CI on atomic Product+R24 HEAD.
+
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 4e420b91..05615223 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -612,3 +612,19 @@ E1–E6 SATISFIED · E7 WITH GOVERNED RESERVE · E8 = DISPOSITIONS APPROVED / FO
 | M2 debt register 38×20 | identities/statuses conserved | `df77b8a2…` immuable |

 **Anti-claims:** CORR-01 authoring ≠ Critical Re-Review APPROVED ≠ Digest Sync AUTHORIZED ≠ GLOBAL CONFORMANCE PASS ≠ project Git integrated ≠ AKG-M3 CLOSED ≠ P6/v3/REAL.
+
+## Overlay — GI-AKG-M5-A+B+D-01 known gaps (AS-IMPLEMENTED ON PRODUCT PR CANDIDATE — NOT YET CURRENT ON MAIN — 2026-11-01)
+
+| Reserve | Class | Disposition |
+|---|---|---|
+| E-EXPLICIT lexical FR incomplete | KNOWN GAP | DEFER — conservative classifier |
+| CURRENT offer process-local | KNOWN GAP | DEFER — restart honesty already fail-closed |
+| No durable admissionKind on EC | ACCEPT | Avoid schema/persistence pivot |
+| Dedup = same missionKey scope | ACCEPT | ≠ universal exactly-once |
+| Same-turn F1+F2 prepare | N/A routing | DOCUMENTED exclusivity |
+| OpenAI LIVE / Cursor REAL | NOT EXERCISED | G-REAL NOT GRANTED |
+| L3-S2 | OPEN | No auto-close |
+| Runtime v3 | NON ADOPTED | — |
+
+Product PR #632 corrective candidate `1b8de9b0…` (CORR-CI-632; delivery base `a55181c6…`). R24 documentary layer is **consolidated atomically into #632**; stacked Draft PR #633 is **SUPERSEDED** when closed without merge after verified reuptake.
+
diff --git a/projects/sfia-studio/production-runtime-reference/README.md b/projects/sfia-studio/production-runtime-reference/README.md
index 7a6d22f3..f6cb5a13 100644
--- a/projects/sfia-studio/production-runtime-reference/README.md
+++ b/projects/sfia-studio/production-runtime-reference/README.md
@@ -77,6 +77,20 @@ Canonical detail for lifecycle, known gaps, and main-vs-branch split: **[09 —
 | **Prior Option C baseline** | [PR #628](https://github.com/mcleland147/sfia-workspace/pull/628) **MERGED** — Option C Delivery remains ancestor ON MAIN (`c848b98c…`) · UX consolidation #630 extends it |
 | **Anti-claims** | ≠ L3 GLOBAL CLOSED · ≠ G-REAL · ≠ L4 · ≠ runtime v3 ADOPTED · ≠ UX LIVE PASS universal · model narrative recommendation duplication **OPEN reserve** · digest MATCH ≠ semantic exhaustiveness · CURRENT ON MAIN ≠ BEHAVIOR PROVEN GLOBAL |

+
+**GI-AKG-M5-A+B+D-01 — Positive Product Admission A+B+D + CORR-CI-632 (AS-IMPLEMENTED ON PRODUCT PR CANDIDATE — NOT YET CURRENT ON MAIN — 2026-11-01):**
+
+| Epistemic class | Element |
+|---|---|
+| **AS-IMPLEMENTED ON PRODUCT PR CANDIDATE** | [PR #632](https://github.com/mcleland147/sfia-workspace/pull/632) **OPEN** · Product corrective `1b8de9b02f1cbc1d3163f44c34cb9ebe0bd91707` (delivery base `a55181c6…`) · branch `feat/akg-m5-lumen-cog-prepare-corr-01` · R24 consolidated **atomically into #632** (PR #633 Draft **SUPERSEDED** when closed) · **≠ CURRENT ON MAIN** until merge + post-merge truth-sync |
+| **Product facts (candidate)** | Cognitive Fidelity A · TEST-15 citation/refuse ≠ consent · Option B/Slice D positive admission (E-OFFER-ACCEPT / E-EXPLICIT-PREPARE) shared F1/F2 · R1 model candidate ≠ consent · R2 CURRENT offer fingerprint bind · R3 anti-doublon + file-token scopeIn (directory-only only with explicit write; no narrative/URL/A/B WRITE invent) · CORR-CI-632: pathless/undeclared mutation → `executionIntent=null` (historical documentary materiality) |
+| **SHE** | PREPARE → INSPECT → Exécuter **PRESERVED** · no HD-before-PREPARE regression · PREPARE ≠ Attempt/Authorization |
+| **Proof ceiling** | **DETERMINISTIC AT TESTED SCOPE** — CORR-CI-632 target suites PASS · OpenAI LIVE / Cursor REAL **NOT EXERCISED** · G-REAL **NOT GRANTED** · GitHub Required Gate status resolved from CI on candidate HEAD |
+| **Reserves (ACCEPT/DEFER)** | E-EXPLICIT lexical conservative · offer process-local · no durable admissionKind · dedup ≠ universal exactly-once · same-turn dual F1+F2 prepare unreachable |
+| **Anti-claims** | ≠ MERGED · ≠ CURRENT ON MAIN · ≠ L3-S2 CLOSED · ≠ runtime v3 ADOPTED · ≠ LIVE PASS · digest MATCH ≠ semantic exhaustiveness · CI PASS ≠ Studio REAL BOUNDARY PROVEN |
+
+Volumes touched by this R24 candidate: **03 / 06 / 07 / 08 / 09** + README + manifest digests. Documentary layer lives on Product PR #632 (atomic Product+R24). Status remains **candidate** until Product merge + post-merge truth-sync.
+
 **Nora Adaptive Presentation Option C / AKG-M5 L3-S2 — BASELINE PRODUCT ON MAIN (PR #628 MERGED — 2026-10-30) — HISTORICAL AS TIP under GI-NAP #630 CURRENT:**

 | Epistemic class | Element |
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 8b3be21f..dfe9618e 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -1,13 +1,13 @@
 {
   "schemaVersion": 1,
   "kind": "SFIA_STUDIO_LIVING_PRODUCTION_RUNTIME_REFERENCE",
-  "lastReviewedCommit": "14fb0c33786a69ac57d27a9cd9638cfddb84de48",
-  "lastReviewedAt": "2026-10-31T13:45:00+01:00",
+  "lastReviewedCommit": "1b8de9b02f1cbc1d3163f44c34cb9ebe0bd91707",
+  "lastReviewedAt": "2026-11-01T00:05:00Z",
   "canonicalReadme": "projects/sfia-studio/production-runtime-reference/README.md",
   "volumes": [
     {
       "path": "projects/sfia-studio/production-runtime-reference/README.md",
-      "sha256_16": "0e6437ec275e841f"
+      "sha256_16": "edb1c2c16d326bfd"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md",
@@ -19,7 +19,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "370a559b19e5dad3"
+      "sha256_16": "0e08ea16b587067d"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
@@ -31,19 +31,19 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
-      "sha256_16": "d6d5fc56f2490688"
+      "sha256_16": "791140a82eb1337f"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
-      "sha256_16": "d1334b8ef9544abd"
+      "sha256_16": "f9e13ce3524a3636"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "1f76f4880ba1a11c"
+      "sha256_16": "b92a129063f6a594"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "859671290e2ddb36"
+      "sha256_16": "c860d2a18ff0f3ed"
     }
   ],
   "components": [
@@ -294,7 +294,10 @@
       "title": "ExecutionContract aggregate",
       "docSection": "02-runtime-object-catalog.md",
       "trackedSourcePaths": [
-        "projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts"
+        "projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts",
+        "projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts",
+        "projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts",
+        "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts"
       ],
       "flowIds": [
         "F08",
@@ -306,7 +309,11 @@
         "INV-EC-NO-EXPAND-WHAT",
         "INV-NO-EXEC-BEFORE-AUTH"
       ],
-      "testPaths": [],
+      "testPaths": [
+        "projects/sfia-studio/app/__tests__/project-assistant/positivePrepareAdmission.d0.test.ts",
+        "projects/sfia-studio/app/__tests__/project-assistant/lumenCogPrepareCorr01.d0.test.ts",
+        "projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts"
+      ],
       "dependsOn": [
         "OBJ-HD"
       ],
@@ -613,11 +620,11 @@
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts",
-      "sha256_16": "c8e879baee71175c"
+      "sha256_16": "21a836cb98ed444d"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
-      "sha256_16": "c8f491d05217ffc4"
+      "sha256_16": "3352bef3d153c9ac"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts",

```

### Whitespace/digest trim commit `4d69b4da` (FULL)

```
commit 4d69b4da21f957a186427f32fa4e93f60d38995c
Author:     Morris Cleland <morris@MacBook-Air.local>
AuthorDate: Sun Nov 1 01:05:23 2026 +0100
Commit:     Morris Cleland <morris@MacBook-Air.local>
CommitDate: Sun Nov 1 01:05:23 2026 +0100

    docs(studio): trim PRR trailing blank lines for CI whitespace gate

    CORR-CI-632 — keep R24 volumes check-clean vs main and refresh digests.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
index bd06deff..3fb068a3 100644
--- a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
+++ b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
@@ -219,4 +219,3 @@ Four situations must stay distinct (S2 / M-HD-01 HD11):
 | Durable EC after admitted PREPARE | OA ExecutionContract tables | Survives restart; SHE Execute path unchanged |

 **Anti-claims:** offer process-local ≠ Authorization · no durable admissionKind stamp (accepted debt) · LIVE restart UX NOT PROVEN.
-
diff --git a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
index 2d580797..7b72c45a 100644
--- a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
+++ b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
@@ -192,4 +192,3 @@ Refusal codes (Product-local mapping): `EVIDENCE_PROJECT_MISMATCH`, `EVIDENCE_CO
 | INV-SHE-PRESERVED | PREPARE inspectable without auto HD/Attempt/Authorization; Execute remains separate | PRESERVED |

 Product corrective candidate: `1b8de9b02f1cbc1d3163f44c34cb9ebe0bd91707` (PR #632; CORR-CI-632). **≠ CURRENT ON MAIN**.
-
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index b715ee33..df328b36 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -293,4 +293,3 @@ Ceiling: **DETERMINISTIC PRODUCT INTEGRATION AT TESTED SCOPE**. ≠ browser `/st
 | PRR digests (CORR-CI-632 F1) | `architecture/productionRuntimeReference.conformance.d0.test.ts` | DETERMINISTIC |

 **Campaign QA (CORR-CI-632):** target suites PASS locally · OpenAI LIVE NOT EXERCISED · Cursor REAL NOT EXERCISED · G-REAL NOT GRANTED · GitHub Required Gate resolved from CI on atomic Product+R24 HEAD.
-
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 05615223..46e4dd00 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -627,4 +627,3 @@ E1–E6 SATISFIED · E7 WITH GOVERNED RESERVE · E8 = DISPOSITIONS APPROVED / FO
 | Runtime v3 | NON ADOPTED | — |

 Product PR #632 corrective candidate `1b8de9b0…` (CORR-CI-632; delivery base `a55181c6…`). R24 documentary layer is **consolidated atomically into #632**; stacked Draft PR #633 is **SUPERSEDED** when closed without merge after verified reuptake.
-
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index dfe9618e..aca52c24 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -31,19 +31,19 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
-      "sha256_16": "791140a82eb1337f"
+      "sha256_16": "0f1bd0d018bddd77"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
-      "sha256_16": "f9e13ce3524a3636"
+      "sha256_16": "273ba3e4ea0bec50"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "b92a129063f6a594"
+      "sha256_16": "828289647facd6cb"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "c860d2a18ff0f3ed"
+      "sha256_16": "9f89e1bb119ede6b"
     }
   ],
   "components": [

```

### Builder current tip (FULL file for reconstitution of final Product intent)

<details><summary>prepareGenericExecutionContractDraft.ts @ HEAD (full)</summary>

```typescript
/**
 * G-D4 / T-A4 / Authority Continuity — generic ExecutionContract PREPARE
 * without systematic HumanDecision for non-structural missions.
 *
 * M-HD-01 — structural / HD-required missions may resume PREPARE only after a
 * verified OA HumanDecision (sourceType generic_mission, accept-prepare).
 * decisionRefs then carries that verified decisionId only. PREPARE ≠ EXECUTE.
 *
 * Confirm/Authorize remain separate Pilote acts. Empty decisionRefs at
 * confirmed require MATERIALITY:NON_STRUCTURAL stamp + CURRENT revalidation
 * (T-A4 schema G-D4).
 *
 * Reuses BuildExecutionContract + ValidateExecutionContract + generalist surface
 * + resolveTrustedProductLaunchContext + resolveContractSourceGroundingForPrepare.
 * No task catalog, no parallel engine, no synthetic HumanDecision.
 */

import { createHash, randomBytes } from "node:crypto";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalAuthorityForExecutionClass,
} from "@/lib/oa/decision";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import {
  CONTRACT_SOURCE_GROUNDING_INPUT_KEY,
  assertContractSourceGroundingHonest,
  assessExecutionMaterialityOrUnknown,
  isCurrentFullRepositoryRead,
  type ExecutionMaterialityAssessment,
} from "@/lib/oa/execution-contract";
import { classifyStudioProductProtectedPath } from "@/lib/oa/sandboxContract";
import {
  PRODUCT_CANONICAL_EXECUTION_ACTION,
  PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
  PRODUCT_CANONICAL_EXECUTION_SCOPE,
  PRODUCT_CANONICAL_EXECUTION_TARGET,
} from "./w3aProductExecutionSemantics";
import type { IntentAnalysisDto, PilotDecisionCandidate } from "../f2/types";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { resolveAuthoritativeProductMateriality } from "./resolveAuthoritativeProductMateriality";
import {
  resolveContractSourceGroundingForPrepare,
  type ContractSourceGroundingReader,
} from "./resolveContractSourceGrounding";
import {
  launchContextAsContractInputs,
  resolveTrustedProductLaunchContext,
} from "./resolveTrustedProductLaunchContext";
import {
  getPendingGenericPrepareOffer,
  rememberPendingGenericPrepareOffer,
  clearPendingGenericPrepareOffer,
  resolveProductPrepareOfferSessionKey,
  type PendingGenericPrepareMissionEffects,
  type PendingGenericPrepareOffer,
} from "./pendingGenericPrepareOfferStore";
import {
  validateExecutionIntentPayload,
  type ExecutionIntentPayload,
} from "../f2/executionIntentSchema";
import {
  isCapabilityWithinGenericPrepareEnvelope,
  resolveGenericPrepareCapabilityEnvelope,
  type GenericPrepareCapabilityResolution,
} from "./genericPrepareCapabilityEnvelope";
import {
  mapReversibilityExpectationToOa,
} from "./genericMissionSubject";
import {
  verifyGenericMissionHumanDecisionForContract,
  verifyGenericMissionHumanDecisionForPrepare,
} from "./verifyGenericMissionHumanDecisionForPrepare";
import {
  resolveGenericPrepareDocumentaryTarget,
} from "./resolveGenericPrepareDocumentaryTarget";

export {
  isCapabilityWithinGenericPrepareEnvelope,
  resolveGenericPrepareCapabilityEnvelope,
};
export type { GenericPrepareCapabilityResolution };

export type GenericMissionPrepareReadiness = {
  readonly ready: boolean;
  readonly structuralBlocked: boolean;
  /** Blocking gaps only — never a questionnaire. */
  readonly missingFields: readonly string[];
};

type PrepareSpeechAct = {
  readonly kind: "refuse" | "authorize";
  readonly index: number;
};

const PREPARE_REFUSAL_PATTERNS: readonly RegExp[] = [
  /\b(ne|n[''])\s*(me\s+)?(prépare|prepare|préparer|preparer)\s+(surtout\s+)?pas\b[\s\S]{0,80}\b(contrat|executioncontract|execution contract|mission)\b/giu,
  /\b(ne|n[''])\s*(me\s+)?(prépare|prepare|préparer|preparer)\s+rien\b[\s\S]{0,60}\b(cursor|contrat|mission|exécution|execution)\b/giu,
  /\b(refuse|refus\w*)\b[\s\S]{0,60}\b(pr[ée]par\w*|cr[ée]er?|cr[ée]e)\b[\s\S]{0,50}\b(contrat|executioncontract|execution contract|mission)\b/giu,
  /\b(ne\s+)?(cr[ée]e|creer|créer|crée)\s+(pas|aucun|aucune)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/giu,
  /\bsans\s+(cr[ée]er?|créer|crée)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/giu,
  /\b(pas|sans|aucune?|aucun)\s+(de\s+|d[''])?(contrat(\s+d['']exéc?cution)?|execution\s*contract)\b/giu,
  /\bsans\s+(préparer|preparer|prepare)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/giu,
  /\b(ne\s+)?(veux|veut|souhait\w*|lance|lancer)\s+pas\b[\s\S]{0,60}\b(contrat|mission(\s+(technique|d['']exécution|cursor))?|cursor)\b/giu,
  /\b(analyse|cadrage|proposition)\s+seulement\b[\s\S]{0,80}\bsans\b[\s\S]{0,60}\b(contrat|mission|exécution|execution|cursor)\b/giu,
  /\bsans\s+(lancer|préparer|preparer|prepare)\b[\s\S]{0,40}\b(mission|contrat|cursor|exécution|execution)\b/giu,
  /\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,80}\bpas\s+(de\s+|un\s+|une\s+)?(contrat|executioncontract|execution contract)\b/giu,
  /\bmais\s+(ne\s+)?(prépare|prepare|crée|creer|créer)\b[\s\S]{0,40}\b(pas|aucun|aucune)\b[\s\S]{0,40}\b(contrat|mission)\b/giu,
  /\b(finalement|non)\s*[,:]?\s*(ne\s+)?(le\s+)?(prépare|prepare|préparer|preparer)\s+pas\b/giu,
];

/** Positive PREPARE authorize acts (not EXECUTE). Temporal last-act wins vs refuse. */
const PREPARE_AUTHORIZE_PATTERNS: readonly RegExp[] = [
  /\b(maintenant|désormais|cette\s+fois|finalement|plutôt)\b[\s\S]{0,60}\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,50}\b(contrat|executioncontract|execution contract|mission)\b/giu,
  /\b(ok|oui|vas[- ]y|go|d['']accord)\b[\s\S]{0,40}\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract|mission)\b/giu,
  /\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,40}\b(le\s+|un\s+|une\s+)?(contrat(\s+d['']exéc?cution)?|execution\s*contract)\b/giu,
];

/**
 * Remove citations, code, and reported/example frames so quoted PREPARE
 * commands are not treated as current Pilote consent.
 * Deterministic span masking — not a general French NLP parser.
 */
export function stripNonAuthoritativePrepareSpans(text: string): string {
  let t = text;
  // Fenced / inline code
  t = t.replace(/```[\s\S]*?```/g, " ");
  t = t.replace(/`[^`]*`/g, " ");
  // Explicit citation delimiters only — never ASCII/typographic apostrophes
  // used in French (d'exécution, l'analyse), which would erase refuse/authorize acts.
  t = t.replace(/«[^»]*»/g, " ");
  t = t.replace(/"[^"]*"/g, " ");
  t = t.replace(/“[^”]*”/g, " ");
  t = t.replace(/‘[^’]*’/g, " ");
  // Reported / documentary / pedagogical frames introducing a command.
  t = t.replace(
    /\b(voici une phrase à analyser|phrase à analyser|que signifie(?:t|-elle| cette)?|explique(?:r)? (?:ce qu['']elle|cette|la)|dans (?:notre |la )?documentation|on trouve\s*:|exemple\s*:|par exemple\s*:|nora m['']a proposé(?: de)?|tu (?:m['']as|as) (?:dit|proposé)(?: de)?|elle a (?:dit|proposé)(?: de)?|il a (?:dit|proposé)(?: de)?)\b[\s\S]{0,160}/giu,
    " ",
  );
  return t.replace(/\s+/g, " ").trim();
}

/**
 * True when the utterance is primarily analysis / discussion of a PREPARE
 * phrase rather than a current instruction to prepare.
 */
export function isPrepareMetaAnalysisOrCitationFrame(text: string): boolean {
  const raw = text.trim();
  if (!raw) return false;
  const hasMeta =
    /\b(phrase à analyser|que signifie|explique(?:r)? (?:ce qu['']elle|cette)|dans (?:notre |la )?documentation|on trouve\s*:|exemple\s*:|comprendre pourquoi|pour l['']instant[\s\S]{0,80}(seulement|analyse)|je voudrais comprendre)\b/iu.test(
      raw,
    );
  if (!hasMeta) return false;
  // After stripping citations, no remaining direct authorize → meta-only.
  const cleaned = stripNonAuthoritativePrepareSpans(raw).toLowerCase();
  const acts = collectPrepareSpeechActsOn(cleaned);
  return !acts.some((a) => a.kind === "authorize");
}

function collectPrepareSpeechActsOn(text: string): PrepareSpeechAct[] {
  const acts: PrepareSpeechAct[] = [];
  for (const re of PREPARE_REFUSAL_PATTERNS) {
    re.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) {
      acts.push({ kind: "refuse", index: m.index });
      if (m.index === re.lastIndex) re.lastIndex += 1;
    }
  }
  for (const re of PREPARE_AUTHORIZE_PATTERNS) {
    re.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) {
      // Skip authorize matches that are actually refusals
      // ("prépare … pas … contrat", "surtout pas le contrat", …).
      const slice = text.slice(m.index, m.index + Math.max(m[0].length, 80));
      if (
        /\b(surtout\s+)?pas\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract|mission)\b/i.test(
          slice,
        ) ||
        /\brien\b[\s\S]{0,40}\b(contrat|cursor|mission)\b/i.test(slice)
      ) {
        continue;
      }
      acts.push({ kind: "authorize", index: m.index });
      if (m.index === re.lastIndex) re.lastIndex += 1;
    }
  }
  acts.sort((a, b) => a.index - b.index);
  return acts;
}

function collectPrepareSpeechActs(text: string): PrepareSpeechAct[] {
  // Scan authoritative spans only (citations / code / reported frames removed).
  return collectPrepareSpeechActsOn(stripNonAuthoritativePrepareSpans(text));
}

/**
 * Last explicit PREPARE speech-act in the utterance (refuse | authorize).
 * Chronology: later act wins. Citations do not count. Ambiguous → null.
 */
export function resolveLastExplicitPrepareSpeechAct(
  text: string,
): PrepareSpeechAct["kind"] | null {
  const t = text.trim().toLowerCase();
  if (!t) return null;
  const acts = collectPrepareSpeechActs(t);
  if (acts.length === 0) return null;
  return acts[acts.length - 1]!.kind;
}

/**
 * Explicit Pilote refusal of ExecutionContract PREPARE (TEST-15 / LUMEN).
 * Fail-closed at Product admission — cognition may solicit, but refusal
 * is never an authorization to PREPARE.
 *
 * Temporal rule: the **last** explicit refuse/authorize act in the message
 * is the current intention. Earlier "maintenant prépare" does not neutralize
 * a later "ne prépare pas".
 */
export function hasExplicitPrepareContractRefusal(text: string): boolean {
  const t = text.trim().toLowerCase();
  if (!t) return false;
  const last = resolveLastExplicitPrepareSpeechAct(t);
  if (last === "authorize") return false;
  if (last === "refuse") return true;
  return false;
}

/**
 * Explicit Pilote prepare-contract lexical intent (FR natural language).
 * Actionable work alone MUST NOT systematically PREPARE an EC (Q16 / Q20).
 * Explicit refusal outranks any positive substring match (TEST-15).
 */
export function hasExplicitPrepareContractIntent(text: string): boolean {
  const raw = text.trim();
  if (!raw) return false;
  if (hasExplicitPrepareContractRefusal(raw)) return false;
  if (isPrepareMetaAnalysisOrCitationFrame(raw)) return false;
  // Last authoritative act must be authorize (citations already stripped).
  if (resolveLastExplicitPrepareSpeechAct(raw) !== "authorize") return false;
  const t = stripNonAuthoritativePrepareSpans(raw).toLowerCase();
  if (!t) return false;
  if (
    /\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/.test(
      t,
    )
  ) {
    return true;
  }
  if (
    /\b(contrat d['']exécution|execution contract)\b[\s\S]{0,40}\b(prépare|prepare|préparer)\b/.test(
      t,
    )
  ) {
    return true;
  }
  if (
    /\b(ok|oui|vas[- ]y|go)\b[\s\S]{0,30}\b(prépare|prepare)\b[\s\S]{0,40}\b(contrat|mission)\b/.test(
      t,
    )
  ) {
    return true;
  }
  return false;
}

/**
 * Lexical accept of a CURRENT prepare recommendation only.
 * Never an execution GO. Never authoritative alone — requires pending offer.
 *
 * Slice D R1 — PilotDecisionCandidate (model INTENT CANDIDATE) is NEVER
 * sufficient admission evidence. Parameter retained for call-site stability
 * and is intentionally ignored for the GO decision.
 */
export function isChatFirstPrepareAcceptGo(input: {
  readonly text: string;
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
}): boolean {
  void input.pilotDecisionCandidate;
  if (hasExplicitPrepareContractRefusal(input.text)) return false;
  const t = input.text.trim().toLowerCase();
  if (!t) return false;
  // Strip DET harness markers — never treat model DTO as accept (R1).
  const cleaned = t
    .replace(/\b__[a-z0-9_]+__\b/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  // Short acceptives — only meaningful when a CURRENT prepare offer exists.
  if (
    /^(ok|oui|vas[- ]y|vasy|go|d['']accord|ok vas[- ]y|ok,?\s*vas[- ]y)[\s.!]*$/i.test(
      cleaned,
    )
  ) {
    return true;
  }
  if (
    /\b(ok|oui|vas[- ]y|go|d['']accord)\b[\s\S]{0,40}\b(pr[ée]pare|cursor|contrat|mission)\b/.test(
      cleaned,
    )
  ) {
    return true;
  }
  return false;
}

/**
 * Pilote utterance references a CURRENT prepare proposal/offer (not a new
 * independent mission). Narrow — not a new NLP family; binds R2 subject.
 */
export function referencesCurrentPrepareOffer(text: string): boolean {
  // Narrow — "pour cette mission" alone is often an independent PREPARE target,
  // not an accept of a CURRENT offer (lumenCog / T10).
  return /\b(cette\s+proposition|cette\s+offre|cette\s+recommandation|que\s+tu\s+(viens\s+de\s+)?propos|le\s+contrat\s+(d['']exécution\s+)?que\s+tu|pour\s+cette\s+(proposition|offre|recommandation))\b/iu.test(
    text,
  );
}

/**
 * Server-side: bind Pilot GO to a unique CURRENT prepare offer.
 * Ambiguous concurrent governed subjects → clarification (caller checks).
 * No offer / historical only → no invented prepare.
 *
 * Contractual priority (R2):
 * 1. Refuse / citation / hedge
 * 2. Accept bound to CURRENT offer (incl. prepare+offer reference)
 * 3. Independent explicit prepare (no offer reference)
 * 4. no_go
 */
export function resolveChatFirstGenericPrepareGo(input: {
  readonly projectId: string;
  /** null = S8 project-context (no active cycle). Matches only a null-cycle offer. */
  readonly cycleInstanceId: string | null;
  readonly text: string;
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
  readonly sessionKey?: string | null;
  readonly sessionDbPath?: string | null;
}):
  | { readonly kind: "prepare"; readonly offerFingerprint: string }
  | { readonly kind: "explicit_lexical_prepare" }
  | { readonly kind: "no_go"; readonly reason: string } {
  // TEST-15 / LUMEN — explicit refusal is Product-side absence of consent.
  if (hasExplicitPrepareContractRefusal(input.text)) {
    return { kind: "no_go", reason: "explicit_prepare_refusal" };
  }
  if (isPrepareMetaAnalysisOrCitationFrame(input.text)) {
    return { kind: "no_go", reason: "prepare_citation_or_analysis_not_consent" };
  }
  // Slice D / S7 — suggestive hedges are not a current PREPARE instruction.
  if (
    /\b(on pourrait|nous pourrions|je pourrais|tu pourrais|peut[- ]être|éventuellement)\b[\s\S]{0,80}\b(prépare|prepare|préparer|preparer)\b/iu.test(
      input.text,
    )
  ) {
    return { kind: "no_go", reason: "ambiguous_or_hedged_prepare_intent" };
  }

  const sessionKey = resolveProductPrepareOfferSessionKey({
    sessionKey: input.sessionKey,
    sessionDbPath: input.sessionDbPath,
  });
  const offer = getPendingGenericPrepareOffer(input.projectId, sessionKey);
  const acceptLexical = isChatFirstPrepareAcceptGo({
    text: input.text,
    // R1 — candidate ignored; keep signature for callers.
    pilotDecisionCandidate: input.pilotDecisionCandidate,
  });
  const refsOffer = referencesCurrentPrepareOffer(input.text);
  const explicitPrepare = hasExplicitPrepareContractIntent(input.text);

  // Priority 2 — bind CURRENT offer when Pilote accept or prepare+offer ref.
  if (offer && (acceptLexical || (explicitPrepare && refsOffer))) {
    if (offer.sessionKey !== sessionKey) {
      return { kind: "no_go", reason: "prepare_offer_session_mismatch" };
    }
    if ((offer.cycleInstanceId ?? null) !== (input.cycleInstanceId ?? null)) {
      return { kind: "no_go", reason: "prepare_offer_cycle_mismatch" };
    }
    return { kind: "prepare", offerFingerprint: offer.offerFingerprint };
  }

  // Offer referenced but missing / inapplicable → no silent E-EXPLICIT downgrade.
  if (refsOffer && !offer) {
    return { kind: "no_go", reason: "no_current_prepare_offer" };
  }
  if (refsOffer && offer) {
    // Accept/explicit+ref already handled; remaining = ambiguous reference.
    if ((offer.cycleInstanceId ?? null) !== (input.cycleInstanceId ?? null)) {
      return { kind: "no_go", reason: "prepare_offer_cycle_mismatch" };
    }
    if (offer.sessionKey !== sessionKey) {
      return { kind: "no_go", reason: "prepare_offer_session_mismatch" };
    }
  }

  // Priority 3 — independent direct PREPARE (no CURRENT-offer subject binding).
  if (explicitPrepare && !refsOffer) {
    return { kind: "explicit_lexical_prepare" };
  }

  if (acceptLexical && !offer) {
    return { kind: "no_go", reason: "no_current_prepare_offer" };
  }

  return { kind: "no_go", reason: "no_prepare_accept_signal" };
}

/**
 * Option B / Slice D — positive Product admission evidence for PREPARE.
 * Nora tool / model DTO / absence of refusal are NEVER sufficient alone.
 *
 * E-OFFER-ACCEPT — Pilote accept bound to unique CURRENT offer.
 * E-EXPLICIT-PREPARE — narrow direct prepare speech-act (heuristic, fail-closed).
 * E-UI-PREPARE — FUTURE / not implemented.
 */
export type PositivePrepareAdmissionEvidence =
  | {
      readonly kind: "e_offer_accept";
      readonly offerFingerprint: string;
      readonly code: "E_OFFER_ACCEPT";
    }
  | {
      readonly kind: "e_explicit_prepare";
      readonly code: "E_EXPLICIT_PREPARE";
    }
  | {
      readonly kind: "no_go";
      readonly code: string;
      readonly reason: string;
    };

export function resolvePositivePrepareAdmissionEvidence(input: {
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly text: string;
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
  readonly sessionKey?: string | null;
  readonly sessionDbPath?: string | null;
  /** When set (F2 offer-accept path), must still match CURRENT offer. */
  readonly expectedOfferFingerprint?: string | null;
}): PositivePrepareAdmissionEvidence {
  const text = (input.text ?? "").trim();
  if (!text) {
    return {
      kind: "no_go",
      code: "POSITIVE_PREPARE_ADMISSION_REQUIRED",
      reason: "missing_pilot_utterance",
    };
  }
  const go = resolveChatFirstGenericPrepareGo({
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    text,
    pilotDecisionCandidate: input.pilotDecisionCandidate,
    sessionKey: input.sessionKey,
    sessionDbPath: input.sessionDbPath,
  });
  const expected = input.expectedOfferFingerprint?.trim() || null;
  // T12 / R2 — expected fingerprint forces offer binding; E-EXPLICIT cannot bypass.
  if (expected && go.kind === "explicit_lexical_prepare") {
    return {
      kind: "no_go",
      code: "EXPECTED_OFFER_BINDING_REQUIRED",
      reason: "expected_fingerprint_blocks_explicit_bypass",
    };
  }
  if (go.kind === "no_go") {
    const code =
      go.reason === "explicit_prepare_refusal"
        ? "EXPLICIT_PREPARE_REFUSAL"
        : go.reason === "prepare_citation_or_analysis_not_consent"
          ? "PREPARE_CITATION_OR_ANALYSIS_NOT_CONSENT"
          : go.reason === "no_current_prepare_offer"
            ? "NO_CURRENT_PREPARE_OFFER"
            : go.reason === "prepare_offer_session_mismatch"
              ? "PREPARE_OFFER_SESSION_MISMATCH"
              : go.reason === "prepare_offer_cycle_mismatch"
                ? "PREPARE_OFFER_CYCLE_MISMATCH"
                : go.reason === "ambiguous_or_hedged_prepare_intent"
                  ? "AMBIGUOUS_OR_HEDGED_PREPARE_INTENT"
                  : go.reason === "no_prepare_accept_signal"
                    ? "POSITIVE_PREPARE_ADMISSION_REQUIRED"
                    : "POSITIVE_PREPARE_ADMISSION_REQUIRED";
    return { kind: "no_go", code, reason: go.reason };
  }
  if (go.kind === "explicit_lexical_prepare") {
    return { kind: "e_explicit_prepare", code: "E_EXPLICIT_PREPARE" };
  }
  if (expected && expected !== go.offerFingerprint) {
    return {
      kind: "no_go",
      code: "PREPARE_OFFER_FINGERPRINT_MISMATCH",
      reason: "expected_offer_fingerprint_mismatch",
    };
  }
  // Re-read CURRENT offer — refuse if consumed / restarted / swapped.
  const live = getCurrentGenericPrepareOffer(input.projectId, {
    sessionKey: input.sessionKey,
    sessionDbPath: input.sessionDbPath,
  });
  if (!live || live.offerFingerprint !== go.offerFingerprint) {
    return {
      kind: "no_go",
      code: "PREPARE_OFFER_STALE_OR_MISMATCH",
      reason: "offer_stale_or_missing_at_admission",
    };
  }
  if ((live.cycleInstanceId ?? null) !== (input.cycleInstanceId ?? null)) {
    return {
      kind: "no_go",
      code: "PREPARE_OFFER_CYCLE_MISMATCH",
      reason: "prepare_offer_cycle_mismatch",
    };
  }
  return {
    kind: "e_offer_accept",
    offerFingerprint: go.offerFingerprint,
    code: "E_OFFER_ACCEPT",
  };
}

export function assessGenericMissionPrepareReadiness(
  analysis: IntentAnalysisDto,
): GenericMissionPrepareReadiness {
  const signals = analysis.signals;
  const structuralBlocked = Boolean(
    signals?.structuralChange ||
      signals?.securityImpact ||
      signals?.architectureImpact ||
      signals?.dataImpact ||
      signals?.irreversible ||
      analysis.contradictionCandidate?.conflictPresent,
  );

  const objective = (analysis.objective ?? analysis.rephrasedRequest ?? "").trim();
  const expectedOutcome = (analysis.expectedOutcome ?? "").trim();
  const scope = (analysis.scope ?? "").trim();
  const missingFields: string[] = [];
  if (!objective) missingFields.push("objectif");
  if (!expectedOutcome && !scope) {
    missingFields.push("résultat attendu ou périmètre");
  }

  // D-P6-SHE-01 — structural signals no longer block PREPARE readiness.
  // HD / authority remain required before launch (Execute), not before an
  // inspectable proposal. Missing descriptive fields still block PREPARE.
  return {
    ready: missingFields.length === 0,
    structuralBlocked,
    missingFields,
  };
}

function collectProtectedPathHits(analysis: IntentAnalysisDto): string[] {
  const candidates = [
    ...(analysis.executionIntent?.scopeIn ?? []),
    ...(analysis.scope ? [analysis.scope] : []),
  ];
  const hits: string[] = [];
  for (const raw of candidates) {
    const path = raw.trim();
    if (!path || path.includes(" ")) continue;
    const hit = classifyStudioProductProtectedPath(path);
    if (hit) hits.push(path);
  }
  return hits;
}

function missionImpliesRepositoryWork(analysis: IntentAnalysisDto): boolean {
  const scopeIn = analysis.executionIntent?.scopeIn ?? [];
  if (scopeIn.some((p) => typeof p === "string" && p.trim().length > 0)) {
    return true;
  }
  const scope = (analysis.scope ?? "").trim();
  if (scope && !scope.includes(" ") && scope.includes("/")) return true;
  if (scope && /\.(ts|tsx|js|md|json|py|go|rs)\b/i.test(scope)) return true;
  return false;
}

/**
 * EP-S2-08-PROOF-01 Option 1 — preserve an already-declared mutation claim as an
 * inspectable EC input. Does NOT invent "write", does NOT authorize execution,
 * and does NOT add EFFECT_CLASS:local-write. Bounded non-mutating remains "none".
 * Absence stays null (fail-closed for Delivery WHAT at W3-C).
 */
function preserveDeclaredRepositoryMutation(input: {
  readonly boundedNonMutating: boolean;
  readonly analysisDeclared: unknown;
}): "none" | "read" | "write" | "unknown" | null {
  if (input.boundedNonMutating) return "none";
  const declared = input.analysisDeclared;
  if (
    declared === "none" ||
    declared === "read" ||
    declared === "write" ||
    declared === "unknown"
  ) {
    return declared;
  }
  return null;
}

/**
 * @deprecated Prefer resolveAuthoritativeProductMateriality — sync helper kept
 * for unit oracles that only have analysis (forces UNKNOWN without Product).
 */
export function assessMaterialityForGenericPrepare(
  analysis: IntentAnalysisDto,
): ExecutionMaterialityAssessment {
  // Without live Product context, never claim NON_STRUCTURAL (Q02).
  const protectedPathHits = collectProtectedPathHits(analysis);
  return assessExecutionMaterialityOrUnknown({
    productContextSufficient: false,
    facts: {
      modelSignals: analysis.signals
        ? {
            structuralChange: analysis.signals.structuralChange,
            securityImpact: analysis.signals.securityImpact,
            architectureImpact: analysis.signals.architectureImpact,
            dataImpact: analysis.signals.dataImpact,
            irreversible: analysis.signals.irreversible,
          }
        : null,
      contradictionConflictPresent: Boolean(
        analysis.contradictionCandidate?.conflictPresent,
      ),
      protectedPathHits,
      currentContradictionUnresolved: Boolean(
        analysis.contradictionCandidate?.conflictPresent,
      ),
    },
  });
}

export type PrepareGenericExecutionContractDraftInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly cycleInstanceId?: string | null;
  readonly analysis: IntentAnalysisDto;
  /**
   * M-HD-01 — durable OA HumanDecision id for structural resume.
   * Verified before decisionRefs is populated. Never fabricated.
   */
  readonly decisionId?: string | null;
  /** When true, bypass local authority env gate (DET tests). */
  readonly forceLocalAuthority?: boolean;
  /**
   * When true, Validate after Build (Product inspectable path).
   * Default true for G-D4 continuity. Tests may set false to assert draft-only.
   */
  readonly validateAfterBuild?: boolean;
  /** DET only — explicit server pin; never inferred from VITEST. */
  readonly pinnedBaseHeadSha?: string | null;
  readonly managedRepoRootBase?: string | null;
  readonly sourceGroundingReader?: ContractSourceGroundingReader | null;
  readonly sessionKey?: string | null;
  readonly sessionDbPath?: string | null;
};

export type PrepareGenericExecutionContractDraftResult =
  | {
      readonly ok: true;
      readonly contract: ExecutionContract;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
      readonly materiality: ExecutionMaterialityAssessment;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
    };

function stableMissionKey(input: {
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scope: string;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly materiality: string;
  /** M-HD-01 — bind EC identity to verified HD when present. */
  readonly decisionId?: string | null;
  readonly presentationDigest?: string | null;
}): string {
  const raw = [
    input.projectId,
    input.cycleInstanceId ?? "",
    input.objective,
    input.expectedOutcome,
    input.scope,
    input.scopeIn.join("|"),
    input.scopeOut.join("|"),
    input.materiality,
    input.decisionId?.trim() || "",
    input.presentationDigest?.trim() || "",
  ].join("\n");
  return createHash("sha256").update(raw).digest("hex").slice(0, 24);
}

export function extractMissionEffectsFromAnalysis(
  analysis: IntentAnalysisDto,
): PendingGenericPrepareMissionEffects {
  const rawEi = analysis.executionIntent ?? null;
  const validated = rawEi ? validateExecutionIntentPayload(rawEi) : null;
  const ei: ExecutionIntentPayload | null =
    validated && validated.ok ? validated.payload : null;
  const rev = ei?.reversibilityExpectation ?? null;
  return {
    intentKind: ei?.intentKind?.trim() || null,
    artifactType: ei?.artifactType?.trim() || null,
    proposedTargetPath: ei?.targetPath?.trim() || null,
    proposedArtifactFileName: ei?.artifactFileName?.trim() || null,
    proposedTargetRepositoryRef: ei?.targetRepositoryRef?.trim() || null,
    artifactBrief: ei?.artifactBrief?.trim() || null,
    contentRequirements: [...(ei?.contentRequirements ?? [])],
    expectedOutputs: [...(ei?.expectedOutputs ?? [])],
    proposedRequiredCapabilities: [...(ei?.requiredCapabilities ?? [])],
    validationExpectations: [...(ei?.validationExpectations ?? [])],
    evidenceRequirements: [...(ei?.evidenceRequirements ?? [])],
    requestedOperation:
      ei?.requestedOperation?.trim() ||
      analysis.requestedOperation?.trim() ||
      null,
    reversibilityExpectation:
      rev === "reversible" || rev === "irreversible" || rev === "unknown"
        ? rev
        : null,
    exitRequirementKinds: [...(ei?.exitRequirementKinds ?? [])],
  };
}

function offerFingerprintFor(input: {
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scope: string;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly missionEffects: PendingGenericPrepareMissionEffects;
}): string {
  const e = input.missionEffects;
  return createHash("sha256")
    .update(
      [
        input.projectId,
        input.cycleInstanceId ?? "",
        input.objective,
        input.expectedOutcome,
        input.scope,
        input.scopeIn.join("|"),
        input.scopeOut.join("|"),
        e.intentKind ?? "",
        e.artifactType ?? "",
        e.proposedTargetPath ?? "",
        e.proposedArtifactFileName ?? "",
        e.proposedRequiredCapabilities.join("|"),
        e.expectedOutputs.join("|"),
        e.requestedOperation ?? "",
        e.artifactBrief ?? "",
        e.contentRequirements.join("|"),
      ].join("\n"),
    )
    .digest("hex")
    .slice(0, 24);
}

/** Remember CURRENT prepare recommendation (Nora offered; Pilot has not GO'd). */
export function rememberGenericPrepareRecommendation(input: {
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly analysis: IntentAnalysisDto;
  readonly offeredAtIso: string;
  readonly sessionKey?: string | null;
  readonly sessionDbPath?: string | null;
}): string {
  const sessionKey = resolveProductPrepareOfferSessionKey({
    sessionKey: input.sessionKey,
    sessionDbPath: input.sessionDbPath,
  });
  const objective = (
    input.analysis.objective ??
    input.analysis.rephrasedRequest ??
    ""
  ).trim();
  const expectedOutcome = (input.analysis.expectedOutcome ?? objective).trim();
  const scopeNarrative = (input.analysis.scope ?? expectedOutcome).trim();
  const scopeIn = input.analysis.executionIntent?.scopeIn ?? [];
  const scopeOut = input.analysis.executionIntent?.scopeOut ?? [];
  const missionEffects = extractMissionEffectsFromAnalysis(input.analysis);
  const fp = offerFingerprintFor({
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    objective,
    expectedOutcome,
    scope: scopeNarrative,
    scopeIn,
    scopeOut,
    missionEffects,
  });
  rememberPendingGenericPrepareOffer({
    projectId: input.projectId,
    sessionKey,
    cycleInstanceId: input.cycleInstanceId,
    missionKey: fp,
    objective,
    expectedOutcome,
    scopeNarrative,
    scopeIn,
    scopeOut,
    outOfScope: input.analysis.outOfScope ?? [],
    stopConditions: input.analysis.stopConditions ?? [],
    risks: input.analysis.risks ?? [],
    reservations: input.analysis.reservations ?? [],
    signalStructuralChange: input.analysis.signals?.structuralChange === true,
    signalSecurityImpact: input.analysis.signals?.securityImpact === true,
    signalArchitectureImpact:
      input.analysis.signals?.architectureImpact === true,
    signalDataImpact: input.analysis.signals?.dataImpact === true,
    signalIrreversible: input.analysis.signals?.irreversible === true,
    contradictionConflictPresent: Boolean(
      input.analysis.contradictionCandidate?.conflictPresent,
    ),
    offeredAtIso: input.offeredAtIso,
    offerFingerprint: fp,
    missionEffects,
  });
  return fp;
}

/** Rebuild IntentAnalysis for PREPARE from the CURRENT pending offer (accept GO). */
export function analysisFromPendingGenericPrepareOffer(
  offer: PendingGenericPrepareOffer,
): IntentAnalysisDto {
  const effects = offer.missionEffects;
  const intentKind = effects?.intentKind?.trim() || "other";
  const executionIntent: NonNullable<IntentAnalysisDto["executionIntent"]> = {
    intentKind,
    artifactType: effects?.artifactType ?? null,
    // Candidate only — Product pathRoot / workspace still authoritative at PREPARE.
    targetPath: effects?.proposedTargetPath ?? null,
    artifactFileName: effects?.proposedArtifactFileName ?? null,
    targetRepositoryRef: effects?.proposedTargetRepositoryRef ?? null,
    scopeIn: [...offer.scopeIn],
    scopeOut: [...offer.scopeOut],
    expectedOutputs: [...(effects?.expectedOutputs ?? [])],
    requiredCapabilities: [...(effects?.proposedRequiredCapabilities ?? [])],
    validationExpectations: [...(effects?.validationExpectations ?? [])],
    evidenceRequirements: [...(effects?.evidenceRequirements ?? [])],
    requestedOperation: effects?.requestedOperation ?? null,
    reversibilityExpectation: effects?.reversibilityExpectation ?? null,
    artifactBrief: effects?.artifactBrief ?? null,
    contentRequirements: [...(effects?.contentRequirements ?? [])],
    exitRequirementKinds: [...(effects?.exitRequirementKinds ?? [])],
  };
  return {
    parseOk: true,
    intentClass: "actionable",
    candidateCycleTypeId: null,
    signals: {
      structuralChange: offer.signalStructuralChange,
      securityImpact: offer.signalSecurityImpact,
      architectureImpact: offer.signalArchitectureImpact,
      dataImpact: offer.signalDataImpact,
      irreversible: offer.signalIrreversible,
      lowRiskBounded: !offer.signalStructuralChange,
    },
    cognitiveWorkload: null,
    contradictionCandidate: offer.contradictionConflictPresent
      ? { conflictPresent: true, claimedEvidenceIds: [] }
      : null,
    challengeResponseAssessment: "sufficient",
    objective: offer.objective,
    scope: offer.scopeNarrative,
    rephrasedRequest: offer.objective,
    outOfScope: [...offer.outOfScope],
    risks: [...offer.risks],
    reservations: [...offer.reservations],
    stopConditions: [...offer.stopConditions],
    activatedBlocks: [],
    expectedOutcome: offer.expectedOutcome,
    criticalJustification: null,
    requestedOperation: effects?.requestedOperation ?? null,
    executionIntent,
  };
}

export function getCurrentGenericPrepareOffer(
  projectId: string,
  sessionKeyOrOpts?:
    | string
    | { readonly sessionKey?: string | null; readonly sessionDbPath?: string | null },
): PendingGenericPrepareOffer | null {
  const sessionKey =
    typeof sessionKeyOrOpts === "string"
      ? sessionKeyOrOpts
      : resolveProductPrepareOfferSessionKey({
          sessionKey: sessionKeyOrOpts?.sessionKey,
          sessionDbPath: sessionKeyOrOpts?.sessionDbPath,
        });
  return getPendingGenericPrepareOffer(projectId, sessionKey);
}

/**
 * Build (+ optional Validate) an inspectable generalist ExecutionContract.
 * Empty decisionRefs when non-structural. Structural resume requires verified HD.
 * Never records HumanDecision. Never auto-EXECUTE.
 */
export async function prepareGenericExecutionContractDraft(
  input: PrepareGenericExecutionContractDraftInput,
): Promise<PrepareGenericExecutionContractDraftResult> {
  const readiness = assessGenericMissionPrepareReadiness(input.analysis);
  if (readiness.missingFields.length > 0) {
    return {
      ok: false,
      code: "MISSION_INSUFFICIENTLY_QUALIFIED",
      message: `Informations manquantes pour préparer le contrat : ${readiness.missingFields.join(", ")}.`,
    };
  }

  // MATERIALITY-BLOCK-01 — documentary missions without concrete WHERE reuse
  // Product artifact target routing (pathRoot + cycle segment) BEFORE materiality.
  const documentaryBind = await resolveGenericPrepareDocumentaryTarget({
    oa: input.oa,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    analysis: input.analysis,
  });
  if (
    documentaryBind.kind === "needs_clarification" ||
    documentaryBind.kind === "blocked"
  ) {
    return {
      ok: false,
      code: documentaryBind.code,
      message: documentaryBind.message,
    };
  }
  const analysis = documentaryBind.analysis;
  const productDocumentaryTargetResolution =
    documentaryBind.documentaryTargetResolution;
  const resolvedAuthoritativeTargetPath =
    documentaryBind.kind === "resolved"
      ? documentaryBind.resolvedAuthoritativeTargetPath
      : documentaryBind.resolvedAuthoritativeTargetPath;

  const decisionId = input.decisionId?.trim() || null;
  let verifiedDecisionRefs: string[] = [];
  let verifiedPresentationDigest: string | null = null;
  let verifiedMissionSubjectId: string | null = null;
  let sealedHdEffects: {
    readonly requestedOperation: string | null;
    readonly reversibilityExpectation:
      | "reversible"
      | "irreversible"
      | "unknown"
      | null;
    readonly risks: readonly string[];
    readonly reservations: readonly string[];
    readonly intentKind: string | null;
    readonly artifactType: string | null;
    readonly expectedOutputs: readonly string[];
    readonly stopConditions: readonly string[];
    readonly repositoryBindingIdentity: string | null;
    readonly pathRoot: string | null;
    readonly impactSignals: {
      readonly structuralChange: boolean;
      readonly securityImpact: boolean;
      readonly architectureImpact: boolean;
      readonly dataImpact: boolean;
      readonly irreversible: boolean;
    };
  } | null = null;

  const proposedCapabilities =
    analysis.executionIntent?.requiredCapabilities ?? [];
  const capabilityResolution =
    resolveGenericPrepareCapabilityEnvelope(proposedCapabilities);
  if (!capabilityResolution.ok) {
    return {
      ok: false,
      code: capabilityResolution.code,
      message: `Capacités hors enveloppe généraliste Product — clarification ou gate requis : ${capabilityResolution.elevated.join(", ")}. Aucune HumanDecision artificielle ; aucune élévation silencieuse.`,
    };
  }

  const materialityResolution = await resolveAuthoritativeProductMateriality({
    oa: input.oa,
    projectId: input.projectId,
    analysis,
    cycleInstanceId: input.cycleInstanceId,
    isDocumentaryWriteMission:
      documentaryBind.kind === "resolved" ||
      productDocumentaryTargetResolution === "resolved_product",
  });
  const materiality = materialityResolution.assessment;
  const hdRequired =
    readiness.structuralBlocked || materiality.humanDecisionRequired;
  /**
   * D-P6-SHE-01 — STRUCTURAL / UNKNOWN may PREPARE an inspectable contract with
   * empty decisionRefs. HumanDecision is deferred to the explicit Execute
   * gesture (INV-SHE-PREPARE-NO-AUTHORITY / INV-SHE-STRUCTURAL-INSPECTABLE).
   * Optional pre-bound decisionId remains supported for resume paths.
   */
  let sheDeferredStructuralAuthority = false;

  if (hdRequired && decisionId) {
    const verified = await verifyGenericMissionHumanDecisionForPrepare({
      oa: input.oa,
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId?.trim() || null,
      decisionId,
      analysis,
    });
    if (!verified.ok) {
      return {
        ok: false,
        code: verified.code,
        message: verified.message,
      };
    }
    verifiedDecisionRefs = [verified.verified.decisionId];
    verifiedPresentationDigest = verified.verified.presentationDigest;
    verifiedMissionSubjectId = verified.verified.missionSubjectId;
    const sealedCtx =
      verified.verified.decision.decisionBasis?.genericMissionContext;
    if (!sealedCtx) {
      return {
        ok: false,
        code: "HD_BASIS_INVALID",
        message: "genericMissionContext absent après vérification HD.",
      };
    }
    // Authoritative accepted effects — stamp EC from sealed HD, not a parallel re-derivation.
    sealedHdEffects = {
      requestedOperation: sealedCtx.requestedOperation ?? null,
      reversibilityExpectation: sealedCtx.reversibilityExpectation ?? null,
      risks: [...sealedCtx.risks],
      reservations: [...sealedCtx.reservations],
      intentKind: sealedCtx.intentKind ?? null,
      artifactType: sealedCtx.artifactType ?? null,
      expectedOutputs: [...sealedCtx.expectedOutputs],
      stopConditions: [...sealedCtx.stopConditions],
      repositoryBindingIdentity: sealedCtx.repositoryBindingIdentity,
      pathRoot: sealedCtx.pathRoot,
      impactSignals: { ...sealedCtx.impactSignals },
    };
    // R-INSPECT-01 — sealed read_only / non-mutating intent cannot be silently
    // overridden by an analysis write declaration (no invented HD write approval).
    const analysisMutation = (
      analysis as { repositoryMutationDeclared?: unknown }
    ).repositoryMutationDeclared;
    if (
      sealedHdEffects.intentKind === "read_only" &&
      analysisMutation === "write"
    ) {
      return {
        ok: false,
        code: "HD_MUTATION_DECLARATION_CONFLICT",
        message:
          "HumanDecision scellée read_only contradictoire avec repositoryMutationDeclared=write — PREPARE refusé (fail-closed).",
      };
    }
  } else if (hdRequired) {
    sheDeferredStructuralAuthority = true;
    // decisionRefs stay []; honest MATERIALITY stamp remains on constraints.
  }
  // Non-structural / SHE-deferred: decisionRefs remain empty (no systematic HD at PREPARE).

  const services = input.oa.executionContractServices;
  if (!services?.buildExecutionContract) {
    return {
      ok: false,
      code: "EXECUTION_CONTRACT_SERVICES_UNAVAILABLE",
      message: "Services ExecutionContract indisponibles.",
    };
  }

  const objective = (
    analysis.objective ??
    analysis.rephrasedRequest ??
    ""
  ).trim();
  const expectedOutcome = (analysis.expectedOutcome ?? objective).trim();
  const scopeNarrative = (analysis.scope ?? expectedOutcome).trim();
  // Concrete WHERE after Product documentary bind (may include cycle workspace root).
  const scopeIn = analysis.executionIntent?.scopeIn ?? [];
  const outOfScope = analysis.outOfScope ?? [];
  const cycleInstanceId = input.cycleInstanceId?.trim() || undefined;
  // Nora proposals from the inbound analysis only — never promote Product-resolved
  // path as a Nora "proposal" (D-PC-09 / MATERIALITY-BLOCK-01).
  const noraMissionEffects = extractMissionEffectsFromAnalysis(input.analysis);
  const missionEffects =
    documentaryBind.kind === "resolved"
      ? {
          ...extractMissionEffectsFromAnalysis(analysis),
          proposedTargetPath: noraMissionEffects.proposedTargetPath,
          proposedArtifactFileName: noraMissionEffects.proposedArtifactFileName,
        }
      : extractMissionEffectsFromAnalysis(analysis);
  const proposedDocumentaryOutputCandidates = [
    ...noraMissionEffects.expectedOutputs,
    ...(noraMissionEffects.proposedTargetPath
      ? [noraMissionEffects.proposedTargetPath]
      : []),
    ...(noraMissionEffects.proposedArtifactFileName
      ? [noraMissionEffects.proposedArtifactFileName]
      : []),
  ].filter((v, i, arr) => v.trim().length > 0 && arr.indexOf(v) === i);
  const documentaryTargetResolution =
    productDocumentaryTargetResolution === "resolved_product"
      ? "resolved_product"
      : productDocumentaryTargetResolution === "unresolved_nora_candidate"
        ? "unresolved_nora_candidate"
        : proposedDocumentaryOutputCandidates.length > 0
          ? "unresolved_nora_candidate"
          : "not_applicable";
  // Contract expectedOutputs: Product-resolved path when available; else outcome text.
  // Never list unresolved Nora path candidates as authorized destinations.
  const contractExpectedOutputs = sealedHdEffects
    ? [...sealedHdEffects.expectedOutputs]
    : resolvedAuthoritativeTargetPath
      ? [resolvedAuthoritativeTargetPath]
      : [expectedOutcome];

  // D — source grounding / trusted launch when mission implies repository work
  // OR bounded pathless analysis (Cursor still needs Project binding — ≠ inventing
  // a documentary/Git mission target; scopeIn stays empty).
  const impliesGit = missionImpliesRepositoryWork(analysis);
  const needsLaunchContext =
    impliesGit || materialityResolution.facts.boundedNonMutatingAnalysis === true;
  let launchInputs: Record<string, unknown> = {};
  let sourcesToRead: string[] = [];
  let sourceGroundingPayload: unknown = null;

  if (needsLaunchContext) {
    const launch = await resolveTrustedProductLaunchContext({
      oa: input.oa,
      projectId: input.projectId,
      pinnedBaseHeadSha: input.pinnedBaseHeadSha,
      managedRepoRootBase: input.managedRepoRootBase,
    });
    if (!launch.ok) {
      return {
        ok: false,
        code: launch.code,
        message: launch.message,
      };
    }
    launchInputs = {
      ...launchContextAsContractInputs(launch.context),
      trustedLaunchContextPinnedAtPrepare: true,
      ...(materialityResolution.facts.boundedNonMutatingAnalysis
        ? {
            launchContextForBoundedAnalysisOnly: true,
            missionScopeInEmptyByDesign: true,
          }
        : {}),
    };
    // Declared READ sources only — mutation scopeIn is NOT a read claim
    // (search ≠ read). Empty declared → honesty NOT_APPLICABLE when no reader.
    const declaredReadSources: string[] = [];
    const sourceGrounding = await resolveContractSourceGroundingForPrepare({
      projectId: input.projectId,
      cycleInstanceId: cycleInstanceId ?? "",
      declaredSources: declaredReadSources,
      repositoryIdentity: launch.context.repositoryBindingIdentity,
      repositoryHeadSha: launch.context.baseHeadSha,
      reader: input.sourceGroundingReader ?? null,
    });
    const groundingHonest = assertContractSourceGroundingHonest(sourceGrounding);
    if (!groundingHonest.ok) {
      return {
        ok: false,
        code: groundingHonest.code,
        message: groundingHonest.message,
      };
    }
    sourceGroundingPayload = sourceGrounding;
    const groundedSourceRefs = sourceGrounding.readRefs
      .filter((ref) =>
        isCurrentFullRepositoryRead({
          ref,
          expectedRepositoryHeadSha: sourceGrounding.repositoryHeadSha,
          expectedCycleInstanceId: sourceGrounding.cycleInstanceId,
        }),
      )
      .map((ref) => ref.pathOrRef);
    sourcesToRead = [...new Set(groundedSourceRefs)];
    // Concrete inspectable WHERE: scopeIn and/or narrative scope required.
    const concreteScope =
      scopeIn.some((p) => typeof p === "string" && p.trim().length > 0) ||
      (scopeNarrative.trim().length > 0 &&
        (scopeNarrative.includes("/") || scopeNarrative.length >= 8));
    if (!concreteScope) {
      return {
        ok: false,
        code: "SOURCE_GROUNDING_INSUFFICIENT",
        message:
          "Mission dépôt sans périmètre concret vérifiable — préparation refusée (STOP honnête).",
      };
    }
  }

  const missionKey = stableMissionKey({
    projectId: input.projectId,
    cycleInstanceId: cycleInstanceId ?? null,
    objective,
    expectedOutcome,
    scope: scopeNarrative,
    scopeIn,
    scopeOut: outOfScope,
    materiality: materiality.materiality,
    decisionId: verifiedDecisionRefs[0] ?? null,
    presentationDigest: verifiedPresentationDigest,
  });
  const executionContractId = `xct:gen-prep:${missionKey}`;
  const idempotencyKey = `idem:gen-prep:${missionKey}`;
  const correlationId = `cor:gen-prep:${randomBytes(6).toString("hex")}`;

  const sealedOrAnalysisStops = sealedHdEffects
    ? [...sealedHdEffects.stopConditions]
    : [
        ...(analysis.stopConditions ?? []).filter((s) => s.trim().length > 0),
        "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE",
      ];
  const stopConditions = [
    ...sealedOrAnalysisStops,
    "AUTHORITY_DENIED",
    "CONTEXT_STALE",
    "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE",
    "PROTECTED_PATH_GATES_REMAIN_APPLICABLE",
    ...(materialityResolution.facts.boundedNonMutatingAnalysis
      ? ["NO_REPOSITORY_MUTATION_FOR_BOUNDED_ANALYSIS"]
      : []),
  ];
  const stopSeen = new Set<string>();
  const mergedStops = stopConditions.filter((s) => {
    if (stopSeen.has(s)) return false;
    stopSeen.add(s);
    return true;
  });

  const sealedOrAnalysisRisks = sealedHdEffects
    ? [...sealedHdEffects.risks]
    : [...(analysis.risks ?? [])];
  const sealedOrAnalysisReservations = sealedHdEffects
    ? [...sealedHdEffects.reservations]
    : [...(analysis.reservations ?? [])];

  const boundedNonMutating =
    materialityResolution.facts.boundedNonMutatingAnalysis === true;
  const constraints = [
    "PRODUCT_GOVERNED",
    "NO_ATTEMPT_AT_PREPARE",
    verifiedDecisionRefs.length > 0
      ? "PREPARE_AFTER_VERIFIED_GENERIC_MISSION_HD"
      : "PREPARE_WITHOUT_SYSTEMATIC_HD",
    "CURSOR_DETERMINES_HOW",
    "GENERIC_MISSION_NO_TASK_CATALOG",
    materiality.constraintToken,
    ...(boundedNonMutating
      ? [
          "MISSION_EFFECT:NO_REPOSITORY_MUTATION_DECLARED",
          "NO_INVENTED_DOCUMENTARY_OR_GIT_TARGET",
        ]
      : []),
    ...outOfScope.map((s) => `OUT_OF_SCOPE:${s}`),
    ...sealedOrAnalysisRisks.map((s) => `RISK:${s}`),
    ...sealedOrAnalysisReservations.map((s) => `RESERVATION:${s}`),
  ];

  const issuedAt = input.oa.clock.nowIso();
  const requiredAuthority = "N2" as const;
  const authority = registerLocalAuthorityForExecutionClass({
    authorityResolver: input.oa.authorityResolver,
    scope: PRODUCT_CANONICAL_EXECUTION_SCOPE,
    issuedAt,
    requiredAuthority,
    evidenceId: `evd:gen-prep:${missionKey}`,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return {
      ok: false,
      code: authority.code,
      message: authority.message,
    };
  }

  const materialityFacts = {
    ...materialityResolution.facts,
    assessedMateriality: materiality.materiality,
    reasonCodes: [...materiality.reasonCodes],
  };
  const currentness = materialityResolution.facts.productCurrentness;
  // Authoritative EC↔HD effect stamps (M-HD-01 binding). When HD verified,
  // missionSubjectId + presentationDigest + sealed effects are required on the EC.
  const stampedRevExpectation =
    sealedHdEffects?.reversibilityExpectation ??
    missionEffects.reversibilityExpectation;
  const stampedRequestedOperation =
    sealedHdEffects?.requestedOperation ?? missionEffects.requestedOperation;
  const stampedIntentKind =
    sealedHdEffects?.intentKind ?? missionEffects.intentKind;
  const stampedArtifactType =
    sealedHdEffects?.artifactType ?? missionEffects.artifactType;
  const stampedRepoIdentity =
    sealedHdEffects?.repositoryBindingIdentity ??
    currentness?.repositoryIdentity ??
    null;
  const stampedPathRoot =
    sealedHdEffects?.pathRoot ?? currentness?.pathRoot ?? null;
  const oaReversibility = mapReversibilityExpectationToOa(stampedRevExpectation);

  const built = await services.buildExecutionContract.execute({
    executionContractId,
    projectId: input.projectId,
    cycleInstanceId,
    decisionRefs: [...verifiedDecisionRefs],
    action: PRODUCT_CANONICAL_EXECUTION_ACTION,
    target: PRODUCT_CANONICAL_EXECUTION_TARGET,
    scope: PRODUCT_CANONICAL_EXECUTION_SCOPE,
    inputs: {
      objective,
      expectedOutcome,
      missionScopeNarrative: scopeNarrative,
      scopeIn,
      scopeOut: outOfScope,
      sourcesToRead,
      cursorDeterminesHow: true,
      prepareWithoutSystematicHumanDecision: verifiedDecisionRefs.length === 0,
      verifiedGenericMissionHumanDecisionId: verifiedDecisionRefs[0] ?? null,
      sheDeferredStructuralAuthority,
      missionSubjectId: verifiedMissionSubjectId,
      presentationDigest: verifiedPresentationDigest,
      humanDecisionCreated: false,
      executionAttemptCreated: false,
      prepareStatus: "draft_inspectable",
      materialityFacts,
      boundedNonMutatingAnalysis: boundedNonMutating,
      repositoryMutationDeclared: preserveDeclaredRepositoryMutation({
        boundedNonMutating,
        analysisDeclared: (
          analysis as {
            repositoryMutationDeclared?: unknown;
          }
        ).repositoryMutationDeclared,
      }),
      // Intent fidelity — inspectable mission effects (Pass 02 / EC↔HD).
      intentKind: boundedNonMutating
        ? stampedIntentKind ?? "read_only"
        : stampedIntentKind,
      artifactType: stampedArtifactType,
      requestedOperation: stampedRequestedOperation,
      reversibilityExpectation: stampedRevExpectation,
      risks: sealedOrAnalysisRisks,
      reservations: sealedOrAnalysisReservations,
      repositoryBindingIdentity: stampedRepoIdentity,
      pathRoot: stampedPathRoot,
      // Historical accepted impact signals (not a live Nora re-qualification).
      impactSignals: sealedHdEffects?.impactSignals ??
        (analysis.signals
          ? {
              structuralChange: Boolean(analysis.signals.structuralChange),
              securityImpact: Boolean(analysis.signals.securityImpact),
              architectureImpact: Boolean(analysis.signals.architectureImpact),
              dataImpact: Boolean(analysis.signals.dataImpact),
              irreversible: Boolean(analysis.signals.irreversible),
            }
          : null),
      artifactBrief: missionEffects.artifactBrief,
      contentRequirements: [...missionEffects.contentRequirements],
      validationExpectations: [...missionEffects.validationExpectations],
      // D-PC-09 — Nora path/name candidates are NON-AUTHORITATIVE.
      proposedTargetPath: noraMissionEffects.proposedTargetPath,
      proposedArtifactFileName: noraMissionEffects.proposedArtifactFileName,
      proposedDocumentaryOutputCandidates,
      proposedTargetPathAuthoritative: false,
      documentaryTargetResolution,
      // Server-owned destination when Product routing resolved it (≠ Nora candidate).
      resolvedAuthoritativeTargetPath,
      ...(resolvedAuthoritativeTargetPath
        ? {
            targetPath: resolvedAuthoritativeTargetPath,
            artifactFileName:
              documentaryBind.kind === "resolved"
                ? documentaryBind.artifactFileName
                : missionEffects.proposedArtifactFileName,
          }
        : {}),
      proposedRequiredCapabilities: [
        ...capabilityResolution.proposedCapabilities,
      ],
      capabilityResolution: capabilityResolution.resolution,
      contractCapabilitySurface: PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
      ...launchInputs,
      ...(sourceGroundingPayload
        ? { [CONTRACT_SOURCE_GROUNDING_INPUT_KEY]: sourceGroundingPayload }
        : {}),
      protectedPathHitsAtPrepare: collectProtectedPathHits(analysis),
    },
    expectedOutputs: contractExpectedOutputs,
    requiredCapabilities: [...capabilityResolution.contractCapabilities],
    requiredAuthority,
    constraints,
    stopConditions: mergedStops,
    evidenceRequirements: [
      "evreq:generic-prepare-mission-evidence",
      ...missionEffects.evidenceRequirements,
    ],
    reversibility: oaReversibility,
    idempotencyKey,
    correlationId,
    status: "draft",
    actor: LOCAL_PILOTE_ACTOR,
    authorityEvidenceId: authority.evidenceId,
  });

  let contract;
  let reusedExisting = false;
  if (!built.ok) {
    // Idempotent resume: same missionKey / executionContractId already built.
    if (built.error.detailCode === "CONTRACT_ALREADY_EXISTS") {
      const existing = await services.getExecutionContract.execute({
        executionContractId,
      });
      const reusableStatuses = new Set([
        "draft",
        "validated",
        "confirmation_required",
        "confirmed",
        "authorized",
      ]);
      const existingRefs = [...(existing.ok ? existing.contract.decisionRefs ?? [] : [])].sort();
      const wantedRefs = [...verifiedDecisionRefs].sort();
      const existingCaps = [
        ...(existing.ok ? existing.contract.requiredCapabilities ?? [] : []),
      ];
      const wantedCaps = [...capabilityResolution.contractCapabilities];
      const existingInputs = (existing.ok ? existing.contract.inputs ?? {} : {}) as Record<
        string,
        unknown
      >;
      const sameRefs = JSON.stringify(existingRefs) === JSON.stringify(wantedRefs);
      const sameCaps = JSON.stringify(existingCaps) === JSON.stringify(wantedCaps);
      const sameObjective =
        String(existingInputs.objective ?? "").trim() === objective.trim();
      const sameScope =
        String(existingInputs.missionScopeNarrative ?? "").trim() ===
          scopeNarrative.trim() &&
        JSON.stringify(existingInputs.scopeIn ?? []) === JSON.stringify(scopeIn) &&
        JSON.stringify(existingInputs.scopeOut ?? []) === JSON.stringify(outOfScope);
      const sameMateriality = (existing.ok ? existing.contract.constraints ?? [] : []).includes(
        materiality.constraintToken,
      );
      const sameDigest =
        !verifiedPresentationDigest ||
        String(existingInputs.presentationDigest ?? "") ===
          verifiedPresentationDigest;
      const statusOk =
        existing.ok && reusableStatuses.has(existing.contract.status);
      const notSuperseded =
        existing.ok && existing.contract.status !== "superseded";
      if (
        existing.ok &&
        existing.contract.projectId === input.projectId &&
        sameRefs &&
        sameCaps &&
        sameObjective &&
        sameScope &&
        sameMateriality &&
        sameDigest &&
        statusOk &&
        notSuperseded
      ) {
        // When HD resume: re-verify decision still applicable before reuse.
        if (verifiedDecisionRefs.length > 0) {
          for (const ref of verifiedDecisionRefs) {
            const hd = await verifyGenericMissionHumanDecisionForContract({
              oa: input.oa,
              projectId: input.projectId,
              decisionId: ref,
              contract: existing.contract,
            });
            if (!hd.ok) {
              return {
                ok: false,
                code: "CONTRACT_STALE",
                message: `EC existant non réutilisable — HD courante invalide (${hd.code}).`,
              };
            }
          }
        }
        contract = existing.contract;
        reusedExisting = true;
      } else {
        return {
          ok: false,
          code: "CONTRACT_STALE",
          message:
            "EC existant non réutilisable (statut/scope/effets/decisionRefs/currentness divergents).",
        };
      }
    } else {
      return {
        ok: false,
        code: built.error.detailCode,
        message: built.error.message,
      };
    }
  } else {
    contract = built.contract;
  }

  const shouldValidate =
    input.validateAfterBuild !== false && !reusedExisting;
  if (shouldValidate && services.validateExecutionContract) {
    const validated = await services.validateExecutionContract.execute({
      executionContractId: contract.executionContractId,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
    });
    if (!validated.ok) {
      return {
        ok: false,
        code: validated.error.detailCode,
        message: validated.error.message,
      };
    }
    contract = validated.contract;
  }

  // Prepare consumed the CURRENT offer (if any).
  clearPendingGenericPrepareOffer(
    input.projectId,
    resolveProductPrepareOfferSessionKey({
      sessionKey: input.sessionKey,
      sessionDbPath: input.sessionDbPath,
    }),
  );

  return {
    ok: true,
    contract,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
    materiality,
  };
}

export function genericMissionClarificationText(input: {
  readonly presentation: "test_provider" | "openai_live";
  readonly missingFields: readonly string[];
  readonly structuralBlocked: boolean;
  readonly recommendPrepare?: boolean;
  /** false = S8 project-context (no active cycle, none invented). Default true. */
  readonly hasActiveCycle?: boolean;
}): string {
  const head =
    input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
  const contextKept =
    input.hasActiveCycle === false
      ? "Contexte projet conservé — aucun cycle artificiel créé."
      : "Le cycle actif est conservé.";
  if (input.structuralBlocked) {
    // D-P6-SHE-01 — structural boundary is disclosed; PREPARE of an inspectable
    // proposal remains admissible. Authority is consumed at Execute, not here.
    return [
      head,
      contextKept,
      "Cette demande touche une frontière structurelle — le contrat d'exécution pourra être préparé pour inspection ; l'autorité Pilote sera consommée au clic Exécuter, pas à la préparation.",
      "Préparer ≠ autoriser ≠ exécuter. Rien n'a encore été exécuté.",
    ].join(" ");
  }
  if (input.recommendPrepare) {
    return [
      head,
      contextKept,
      "Je recommande de confier cette mission à Cursor.",
      "Je peux préparer le contrat d'exécution générique inspectable.",
      "Si tu es d'accord, dis-le-moi (par ex. « OK, vas-y ») — préparer ≠ autoriser ≠ exécuter.",
      "Rien n'a encore été exécuté.",
    ].join(" ");
  }
  const gaps = input.missingFields.join(", ");
  return [
    head,
    contextKept,
    `Pour préparer le contrat d'exécution, il me manque encore : ${gaps}.`,
    "La préparation reste distincte du lancement. Rien n'a encore été exécuté.",
  ].join(" ");
}

export function genericMissionPreparedText(input: {
  readonly presentation: "test_provider" | "openai_live";
  readonly executionContractId: string;
  readonly objective: string;
  readonly status: string;
}): string {
  const head =
    input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
  return [
    head,
    `J'ai préparé le contrat d'exécution correspondant à : ${input.objective}.`,
    `Contrat inspectable : ${input.executionContractId} (statut ${input.status} — non lancé).`,
    "Tu peux le consulter dans la trajectoire et me demander de l'ajuster avant d'autoriser l'exécution.",
    "Préparer ≠ autoriser ≠ exécuter. Aucune exécution n'a été lancée.",
  ].join(" ");
}

// ---------------------------------------------------------------------------
// D-ER-16…19 — Nora tool solicitation (Option 2). Thin Product service over
// the SAME backend: assess readiness → prepareGenericExecutionContractDraft.
// No parallel prepare engine · no task taxonomy · never an ExecutionAttempt.
// ---------------------------------------------------------------------------

/**
 * Same-turn currentness (P6 Option B) — Nora tool solicitation is recorded during
 * the Agents round; Product FINALIZES PREPARE only after durable turn writes
 * (ACW / reservation / LR) so the EC stamp binds the final LPS, not a mid-turn
 * snapshot invalidated by later epistemic materialization.
 * Does NOT weaken MATERIALITY_CURRENTNESS_STALE for post-turn mutations.
 */
export const GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION =
  "GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION" as const;

export const GENERIC_PREPARE_TURN_FINALIZATION_SUPPRESSED =
  "GENERIC_PREPARE_TURN_FINALIZATION_SUPPRESSED" as const;

/** Mission fields Nora may supply to the solicitation tool (NON-AUTHORITATIVE). */
export type SolicitGenericPrepareMissionFields = {
  readonly objective?: string | null;
  readonly expectedOutcome?: string | null;
  readonly scope?: string | null;
  readonly contextNotes?: string | null;
  /**
   * Optional repository-mutation claim. Product verifies; "write" without paths
   * stays fail-closed. "none"|"read" strengthens pathless non-mutating admission.
   */
  readonly repositoryMutation?: "none" | "read" | "write" | "unknown" | null;
  /** Conservative-only: a true flag can only make Product MORE cautious. */
  readonly impactSignals?: {
    readonly structuralChange?: boolean;
    readonly securityImpact?: boolean;
    readonly architectureImpact?: boolean;
    readonly dataImpact?: boolean;
    readonly irreversible?: boolean;
  } | null;
};

/**
 * R3 Exit — standalone repository path token for scopeIn parity only.
 * DÉDUPLICATION ≠ QUALIFICATION WRITE: never promote narrative / URL / A/B
 * labels into mutation scopeIn. Whole-string match only (no embedded path).
 *
 * Default: file-like token with known extension (avoids directory-only strings
 * flipping pathless materiality / STRUCTURAL stamps — CORR-CI-632 I11).
 * `allowDirectory` — only when repositoryMutation is explicitly write.
 */
export function isStandaloneRepoPathScopeToken(
  scope: string,
  opts?: { readonly allowDirectory?: boolean },
): boolean {
  const s = scope.trim();
  if (!s) return false;
  // Narratives always contain whitespace — keep scope narrative, empty scopeIn.
  if (/\s/.test(s)) return false;
  if (/^https?:\/\//i.test(s) || /^[a-z][a-z0-9+.-]*:\/\//i.test(s)) {
    return false;
  }
  // Reject path traversal / absolute FS as auto scopeIn (gates remain later).
  if (s.includes("..") || s.startsWith("/") || /^[a-z]:\\/i.test(s)) {
    return false;
  }
  const hasExt =
    /\.(ts|tsx|js|jsx|mjs|cjs|py|md|json|ya?ml)$/i.test(s);
  const workspaceish =
    /^(projects|\.sfia|app|src|docs)[/\\]/.test(s) ||
    /^projects[/\\]/i.test(s);
  if (hasExt) return workspaceish || /[/\\]/.test(s) || hasExt;
  // Directory-only (e.g. projects/demo/src) — not auto scopeIn unless write.
  if (opts?.allowDirectory && workspaceish && /[/\\]/.test(s)) return true;
  return false;
}

/**
 * Minimal IntentAnalysisDto for a tool-solicited mission. Safe defaults:
 * intentClass execution_request, NO executionIntent taxonomy, NO
 * continuationKind / artifactMaterializationOperation, NO cycle type.
 */
export function buildIntentAnalysisFromSolicitedMission(
  fields: SolicitGenericPrepareMissionFields,
): IntentAnalysisDto {
  const objective = fields.objective?.trim() || null;
  const expectedOutcome = fields.expectedOutcome?.trim() || null;
  const scope = fields.scope?.trim() || null;
  const sig = fields.impactSignals ?? null;
  const structural =
    sig?.structuralChange === true ||
    sig?.securityImpact === true ||
    sig?.architectureImpact === true ||
    sig?.dataImpact === true ||
    sig?.irreversible === true;
  const notes = fields.contextNotes?.trim() || null;
  const mutation = fields.repositoryMutation ?? null;
  // R3 Exit — file path tokens may enter scopeIn for missionKey parity.
  // Pathless / undeclared mutation keep executionIntent=null (historical).
  // read/none → read_only empty scopeIn. Never invent WRITE from path alone.
  const readOnly = mutation === "none" || mutation === "read";
  const pathLikeScope =
    !!scope &&
    isStandaloneRepoPathScopeToken(scope, {
      allowDirectory: mutation === "write",
    });
  const scopeIn = !readOnly && pathLikeScope && scope ? [scope] : [];
  const executionIntent: IntentAnalysisDto["executionIntent"] = readOnly
    ? ({
        intentKind: "read_only",
        scopeIn: [],
        scopeOut: [],
        expectedOutputs: expectedOutcome ? [expectedOutcome] : [],
        requiredCapabilities: [],
      } as IntentAnalysisDto["executionIntent"])
    : pathLikeScope && scope
      ? ({
          intentKind: "other",
          scopeIn,
          scopeOut: [],
          expectedOutputs: expectedOutcome ? [expectedOutcome] : [],
          requiredCapabilities: [],
        } as IntentAnalysisDto["executionIntent"])
      : mutation === "write" || mutation === "unknown"
        ? ({
            intentKind: "other",
            scopeIn: [],
            scopeOut: [],
            expectedOutputs: expectedOutcome ? [expectedOutcome] : [],
            requiredCapabilities: [],
          } as IntentAnalysisDto["executionIntent"])
        : null;
  const base: IntentAnalysisDto = {
    parseOk: true,
    intentClass: "execution_request",
    candidateCycleTypeId: null,
    signals: {
      structuralChange: sig?.structuralChange === true,
      securityImpact: sig?.securityImpact === true,
      architectureImpact: sig?.architectureImpact === true,
      dataImpact: sig?.dataImpact === true,
      irreversible: sig?.irreversible === true,
      lowRiskBounded: !structural,
    },
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: "sufficient",
    objective,
    scope,
    rephrasedRequest: objective,
    outOfScope: [],
    risks: [],
    reservations: notes ? [notes] : [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome,
    criticalJustification: null,
    requestedOperation: null,
    executionIntent,
  };
  if (
    mutation === "none" ||
    mutation === "read" ||
    mutation === "write" ||
    mutation === "unknown"
  ) {
    return {
      ...base,
      repositoryMutationDeclared: mutation,
    } as IntentAnalysisDto;
  }
  return base;
}

export type SolicitGenericExecutionPrepareInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  /** null = S8 project-context (no active cycle; none is ever created here). */
  readonly cycleInstanceId: string | null;
  /** Full analysis (F2) OR mission fields (Nora tool) — exactly one source. */
  readonly analysis?: IntentAnalysisDto;
  readonly mission?: SolicitGenericPrepareMissionFields;
  /**
   * Current Pilote utterance (Option B / Slice D). Required for conversational
   * F1/F2 admission unless M-HD-01 `decisionId` resume applies.
   * Nora tool / model fields alone never admit PREPARE.
   */
  readonly pilotUtterance?: string | null;
  /** Non-authoritative model candidate — never sufficient alone. */
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
  /** F2 offer-accept: fingerprint captured at GO, revalidated before write. */
  readonly expectedOfferFingerprint?: string | null;
  /**
   * When true (default), require E-OFFER-ACCEPT or E-EXPLICIT-PREPARE from the
   * Pilote utterance (or verified decisionId resume). Set false only for
   * non-conversational Product harnesses that call prepare via solicit without
   * a turn — prefer prepareGenericExecutionContractDraft for those paths.
   */
  readonly requirePositivePilotAdmission?: boolean;
  /** M-HD-01 — verified OA HumanDecision for structural resume. */
  readonly decisionId?: string | null;
  readonly sessionKey?: string | null;
  readonly sessionDbPath?: string | null;
  readonly forceLocalAuthority?: boolean;
  readonly pinnedBaseHeadSha?: string | null;
  readonly managedRepoRootBase?: string | null;
  readonly sourceGroundingReader?: ContractSourceGroundingReader | null;
};

/**
 * Immediate PREPARE result (drafted EC or fail-closed). Never deferred —
 * tool-time queueing uses {@link QueuedGenericPrepareForTurnFinalizationResult}.
 */
export type SolicitGenericExecutionPrepareResult =
  | {
      readonly ok: true;
      readonly code: "GENERIC_PREPARE_DRAFTED";
      readonly executionContractId: string;
      readonly contractStatus: string;
      readonly materiality: string;
      readonly cycleInstanceId: string | null;
      readonly projectContextOnly: boolean;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
      readonly message: string;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly missingFields?: readonly string[];
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
    };

/** Tool-time acknowledgement — no EC written yet (same-turn currentness). */
export type QueuedGenericPrepareForTurnFinalizationResult = {
  readonly ok: true;
  readonly code: typeof GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION;
  readonly deferredFinalize: true;
  readonly humanDecisionCreated: false;
  readonly executionAttemptCreated: false;
  readonly message: string;
};

/** Tool-time acknowledgement — no EC written yet (same-turn currentness). */
export function queueGenericPrepareForTurnFinalization(): QueuedGenericPrepareForTurnFinalizationResult {
  return {
    ok: true,
    code: GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION,
    deferredFinalize: true,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
    message:
      "Sollicitation Generic PREPARE enregistrée — Product finalisera le contrat après les écritures durables du tour (empreinte CURRENT). PREPARE ≠ AUTHORIZE ≠ EXECUTE ; aucun ExecutionAttempt créé.",
  };
}

/**
 * Thin Product service for Nora tool injection (D-ER-16). PREPARE only —
 * AUTHORIZE and EXECUTE remain separate Pilote/Studio acts. Always reports
 * executionAttemptCreated:false; JSON-serializable.
 */
export async function solicitGenericExecutionPrepare(
  input: SolicitGenericExecutionPrepareInput,
): Promise<SolicitGenericExecutionPrepareResult> {
  const projectId = input.projectId.trim();
  const fail = (
    code: string,
    message: string,
    missingFields?: readonly string[],
  ): SolicitGenericExecutionPrepareResult => ({
    ok: false,
    code,
    message,
    ...(missingFields ? { missingFields } : {}),
    humanDecisionCreated: false,
    executionAttemptCreated: false,
  });
  if (!projectId) {
    return fail("PRODUCT_PROJECT_REQUIRED", "Project requis pour préparer.");
  }

  const cycleInstanceId = input.cycleInstanceId?.trim() || null;
  const decisionId = input.decisionId?.trim() || null;
  const requirePositive = input.requirePositivePilotAdmission !== false;
  const utterance =
    typeof input.pilotUtterance === "string" ? input.pilotUtterance.trim() : "";

  let admissionKind:
    | "e_offer_accept"
    | "e_explicit_prepare"
    | "e_verified_hd_resume"
    | "harness_bypass" = "harness_bypass";
  let boundOfferFingerprint: string | null = null;

  if (requirePositive) {
    if (decisionId) {
      // M-HD-01 resume — still refuse if current utterance forbids PREPARE.
      if (utterance && hasExplicitPrepareContractRefusal(utterance)) {
        return fail(
          "EXPLICIT_PREPARE_REFUSAL",
          "Le Pilote a refusé explicitement la préparation d'un contrat d'exécution. Aucun EC n'a été créé.",
        );
      }
      if (utterance && isPrepareMetaAnalysisOrCitationFrame(utterance)) {
        return fail(
          "PREPARE_CITATION_OR_ANALYSIS_NOT_CONSENT",
          "La citation ou l'analyse d'une commande PREPARE n'est pas un consentement courant. Aucun EC n'a été créé.",
        );
      }
      admissionKind = "e_verified_hd_resume";
    } else {
      const admission = resolvePositivePrepareAdmissionEvidence({
        projectId,
        cycleInstanceId,
        text: utterance,
        pilotDecisionCandidate: input.pilotDecisionCandidate,
        sessionKey: input.sessionKey,
        sessionDbPath: input.sessionDbPath,
        expectedOfferFingerprint: input.expectedOfferFingerprint,
      });
      if (admission.kind === "no_go") {
        return fail(
          admission.code,
          admission.code === "EXPLICIT_PREPARE_REFUSAL"
            ? "Le Pilote a refusé explicitement la préparation d'un contrat d'exécution. Aucun EC n'a été créé."
            : admission.code === "PREPARE_CITATION_OR_ANALYSIS_NOT_CONSENT"
              ? "La citation ou l'analyse d'une commande PREPARE n'est pas un consentement courant. Aucun EC n'a été créé."
              : "Admission PREPARE refusée — aucune preuve positive Pilote applicable (E-OFFER-ACCEPT / E-EXPLICIT-PREPARE). Sollicitation Nora ≠ consentement. Aucun EC n'a été créé.",
        );
      }
      if (admission.kind === "e_offer_accept") {
        admissionKind = "e_offer_accept";
        boundOfferFingerprint = admission.offerFingerprint;
      } else {
        admissionKind = "e_explicit_prepare";
      }
      // Belt: expected fingerprint must never be ignored via E-EXPLICIT (R2/T12).
      if (
        input.expectedOfferFingerprint?.trim() &&
        admissionKind === "e_explicit_prepare"
      ) {
        return fail(
          "EXPECTED_OFFER_BINDING_REQUIRED",
          "Empreinte d'offre attendue : E-EXPLICIT ne peut pas contourner le binding CURRENT. Aucun EC n'a été créé.",
        );
      }
    }
  } else if (utterance) {
    // Harness bypass still honors refuse/citation when utterance is supplied.
    if (hasExplicitPrepareContractRefusal(utterance)) {
      return fail(
        "EXPLICIT_PREPARE_REFUSAL",
        "Le Pilote a refusé explicitement la préparation d'un contrat d'exécution. Aucun EC n'a été créé.",
      );
    }
    if (isPrepareMetaAnalysisOrCitationFrame(utterance)) {
      return fail(
        "PREPARE_CITATION_OR_ANALYSIS_NOT_CONSENT",
        "La citation ou l'analyse d'une commande PREPARE n'est pas un consentement courant. Aucun EC n'a été créé.",
      );
    }
  }

  // E-OFFER-ACCEPT — re-bind mission from CURRENT offer; refuse silent swap (X2).
  let analysis: IntentAnalysisDto;
  if (admissionKind === "e_offer_accept" && boundOfferFingerprint) {
    const offer = getCurrentGenericPrepareOffer(projectId, {
      sessionKey: input.sessionKey,
      sessionDbPath: input.sessionDbPath,
    });
    if (!offer || offer.offerFingerprint !== boundOfferFingerprint) {
      return fail(
        "PREPARE_OFFER_STALE_OR_MISMATCH",
        "Offre CURRENT absente ou divergente au moment de l'écriture. Aucun EC n'a été créé.",
      );
    }
    if ((offer.cycleInstanceId ?? null) !== cycleInstanceId) {
      return fail(
        "PREPARE_OFFER_CYCLE_MISMATCH",
        "Offre CURRENT hors cycle applicable. Aucun EC n'a été créé.",
      );
    }
    analysis = analysisFromPendingGenericPrepareOffer(offer);
  } else {
    analysis =
      input.analysis ??
      buildIntentAnalysisFromSolicitedMission(input.mission ?? {});
  }

  const readiness = assessGenericMissionPrepareReadiness(analysis);
  if (readiness.missingFields.length > 0) {
    return fail(
      "MISSION_INSUFFICIENTLY_QUALIFIED",
      `Informations manquantes pour préparer le contrat : ${readiness.missingFields.join(", ")}.`,
      readiness.missingFields,
    );
  }

  const prep = await prepareGenericExecutionContractDraft({
    oa: input.oa,
    projectId,
    cycleInstanceId,
    analysis,
    decisionId: input.decisionId,
    forceLocalAuthority: input.forceLocalAuthority,
    pinnedBaseHeadSha: input.pinnedBaseHeadSha,
    managedRepoRootBase: input.managedRepoRootBase,
    sourceGroundingReader: input.sourceGroundingReader,
    sessionKey: input.sessionKey,
    sessionDbPath: input.sessionDbPath,
  });
  if (!prep.ok) {
    // M-HD-02 — retain CURRENT offer so Pilot UI can seal/present without a
    // parallel PresentedMission store (process-local continuity only).
    if (
      prep.code === "STRUCTURAL_HUMAN_DECISION_REQUIRED" ||
      prep.code === "MATERIALITY_UNKNOWN"
    ) {
      rememberGenericPrepareRecommendation({
        projectId,
        cycleInstanceId,
        analysis,
        offeredAtIso: input.oa.clock.nowIso(),
        sessionKey: input.sessionKey,
        sessionDbPath: input.sessionDbPath,
      });
    }
    return fail(prep.code, prep.message);
  }
  return {
    ok: true,
    code: "GENERIC_PREPARE_DRAFTED",
    executionContractId: prep.contract.executionContractId,
    contractStatus: prep.contract.status,
    materiality: prep.materiality.materiality,
    cycleInstanceId,
    projectContextOnly: cycleInstanceId === null,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
    message:
      "Contrat d'exécution préparé et inspectable — non autorisé, non lancé. Préparer ≠ autoriser ≠ exécuter.",
  };
}

```

</details>

---

## 23. QA ciblée

- same-turn / documentaryPrepare / inspectionBindingSelect / positivePrepareAdmission / lumenCog / der16 / gD4 / toolFirst / SHE / PRR conformance — PASS
- corrA1b01 path: `__tests__/nora-cognitive-runtime/corrA1b01.secured.d0.test.ts` (covered in related NAP campaign lineage; cognitive fidelity retained in a55181c6)

---

## 24. QA globale (local CI contract)

- Vitest: **6347 PASS / 0 FAIL / 142 SKIP** (was 6338/9/142)
- tsc PASS · next lint PASS (2 pre-existing unused-var warnings) · next build PASS
- PRR checker PASS · governance node:test 75 PASS · secret scan PASS · `git diff --check origin/main...HEAD` clean

---

## 25. Validation CI distante

- Push FF verified · new run: `41255263412` (in progress at pack draft time — **UPDATE AFTER GATE**)
- SEE SECTION 25-FINAL below after Required Gate resolves.

---

## 26. Fake/Real Qualification

DETERMINISTIC / Fake fixtures / isolated SQLite only.
OpenAI LIVE NOT EXERCISED · Cursor REAL NOT EXERCISED · G-REAL NOT GRANTED.
Runtime `/Users/morris/Projects/sfia-workspace-run-akg-m5-l3s2-campaign-3020` untouched.
CI PASS ≠ Studio REAL BOUNDARY PROVEN.

---

## 27. Commits Product/R24

See §2 Final.

---

## 28. Remote HEAD #632

`4d69b4da21f957a186427f32fa4e93f60d38995c` on `origin/feat/akg-m5-lumen-cog-prepare-corr-01`

---

## 29. PR #632

URL: https://github.com/mcleland147/sfia-workspace/pull/632
Title: feat(studio): integrate A+B+D admission and R24 sync
State: OPEN · base main · head 4d69b4da
CI: Required Gate **PASS** (run 41255263412) · READY FOR MORRIS MERGE REVIEW

---

## 30. PR #633

URL: https://github.com/mcleland147/sfia-workspace/pull/633
**CLOSED / UNMERGED / SUPERSEDED BY #632** after Required Gate PASS + seven-file reuptake verified.

---

## 31. Dettes ACCEPT/DEFER/BLOCK

| Item | Class | Disposition |
|---|---|---|
| E-EXPLICIT lexical FR incomplete | KNOWN GAP | DEFER |
| Offer process-local | KNOWN GAP | DEFER |
| No durable admissionKind | ACCEPT | no persistence pivot |
| Dedup missionKey scope | ACCEPT | ≠ exactly-once universal |
| Same-turn dual F1+F2 | N/A | documented exclusivity |
| LIVE/REAL | NOT EXERCISED | G-REAL NOT |
| L3-S2 | OPEN | — |
| Runtime v3 | NON ADOPTED | — |

No Critical BLOCK remaining for CORR-CI-632 Product+R24 candidate after local 0 FAIL (remote Gate TBD).

---

## 32. R24 lifecycle

AS-IMPLEMENTED ON PRODUCT PR CANDIDATE · atomic in #632 · #633 to be SUPERSEDED · ≠ CURRENT ON MAIN until merge+truth-sync.

---

## 33. Git Review Index

| Ref | Role |
|---|---|
| 7dd49ecd | main baseline |
| a55181c6 | A+B+D delivery |
| 1b8de9b0 | CORR Product |
| 1325d120 | R24 consolidate |
| 4d69b4da | whitespace/digest tip HEAD |
| c683d761 | historical R24 tip (#633) |

---

## 34. Verdict consolidé

**SUCCESS** — CORR-CI-632 COMPLETE · PRODUCT + R24 ATOMIC #632 · Required Gate PASS · READY FOR MORRIS MERGE REVIEW
MERGE NOT PERFORMED · G-REAL NOT GRANTED · L3-S2 OPEN · runtime v3 NON ADOPTED

---

## 35. Gates Morris restants

1. ChatGPT review of unique PR #632
2. Morris merge decision (NOT GRANTED here)
3. Post-merge PRR truth-sync if needed
4. G-REAL / LIVE still NOT
5. L3-S2 close still NOT

---

## 25-FINAL / CI REMOTE — RESOLVED

- Run ID: **41255263412**
- URL: https://github.com/mcleland147/sfia-workspace/actions/runs/41255263412
- HEAD SHA: `4d69b4da21f957a186427f32fa4e93f60d38995c`
- Detect SFIA Studio changes: **SUCCESS**
- Build and validate SFIA Studio: **SUCCESS**
- SFIA Studio Required Gate: **SUCCESS**
- Conclusion: **success**
- Local Vitest pre-push: 6347 PASS / 0 FAIL / 142 SKIP
- Prior FAIL run 41252627015 (9 FAIL) superseded by this PASS

## 29-FINAL — PR #632

OPEN · head `4d69b4da` · Required Gate PASS · **READY FOR MORRIS MERGE REVIEW** (merge NOT performed)

## 30-FINAL — PR #633

**CLOSED / UNMERGED / SUPERSEDED BY #632** after verified seven-file R24 reuptake + Gate PASS.

## 34-FINAL — Verdict consolidé

**SUCCESS**

GI-AKG-M5-A+B+D-01
CORR-CI-632 COMPLETE
PRODUCT + R24 ATOMIC PR #632
CI REQUIRED GATE PASS
READY FOR MORRIS MERGE REVIEW
