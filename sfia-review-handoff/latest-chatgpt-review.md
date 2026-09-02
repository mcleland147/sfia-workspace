# ChatGPT Review Pack — SFIA Studio MW3 Epistemic Boundary Correction (CRIT-04 + CRIT-05)

| Field | Value |
| --- | --- |
| **Timestamp (Europe/Paris)** | 2026-09-02 20:18:58 CEST |
| **Timestamp (UTC)** | 2026-09-02T18:18:58Z |
| **Cycle** | Critical Review bounded correction #2 |
| **Type** | RUN |
| **Profile** | FULL / CRITICAL |
| **Capability** | MW3 — Evidence-backed contradiction disposition + Cognitive STOP honesty |
| **Milestone** | Nora Cognitive Completion — MW3 |
| **Repository** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-mw3-correction-2` |
| **Correction branch** | `cursor/mw3-epistemic-boundary-correction` · **LOCAL ONLY** · no upstream |
| **Entry substrate** | `4e123fc5699232cc976faaf5e1a63057b09e4369` |
| **MW3_EPISTEMIC_CORRECTION_ANCHOR** | `339d583ac9b5d91328838a7b9209e0fd3804bc98` |
| **origin/main** | `c352441c2a6ab012aecae7606e0bb9af8fc9e7e7` |
| **Previous Review Handoff entry** | `f4e04e9766781da436346b9e1e0ed1c63dd4d118` |
| **Recovery Handoff** | `969585c6c55b1e9c991e00b1a89284e01ba25ce5` |
| **Historical implementation** | `806e814420bd4049297edc910920d93fb6fc8037` — **LOST / provenance-only** |
| **source_handoff_commit (historical)** | `ab61c18a041b639cbaf1654980de3f7b87e060c8` |

REAL NOT EXECUTED — MORRIS REAL GO REQUIRED

MW3 NOT COMPLETE / NOT CLOSED

COGNITIVE COMPLETION NOT PROVEN

RUNTIME V3 NON ADOPTED

MW4 NOT AUTHORIZED

ROADMAP TRUTH-SYNC PENDING

PROJECT PUSH / PR / MERGE NOT PERFORMED

MW3 HISTORICAL IMPLEMENTATION SHA LOST

HISTORICAL BYTE/CODE PARITY NOT PROVEN

MW2-R01 / MW2-R02 / MW2-R03 CARRIED

---

## A. Git truth

LOCAL GIT TRUTH WINS.

| Item | Value |
| --- | --- |
| Worktree | `/Users/morris/Projects/sfia-workspace-mw3-correction-2` |
| Branch | `cursor/mw3-epistemic-boundary-correction` **LOCAL ONLY** |
| Entry | `4e123fc5699232cc976faaf5e1a63057b09e4369` |
| Current origin/main | `c352441c2a6ab012aecae7606e0bb9af8fc9e7e7` |
| Implementation anchor | `339d583ac9b5d91328838a7b9209e0fd3804bc98` |
| Final tip at pack write | `339d583ac9b5d91328838a7b9209e0fd3804bc98` (docs pack commit may follow) |

Previous correction worktree `/Users/morris/Projects/sfia-workspace-mw3-correction` (`cursor/mw3-cognitive-correction-post-recovery`) was inspected: app tree `4e123fc5..HEAD` empty (docs-only after implementation). New worktree created from **exactly** `4e123fc5`. Status at creation: clean. `move_agent_to_root` is not used for this local-only branch.

Untracked local `projects/sfia-studio/app/node_modules` symlink to recovery `node_modules` (lockfile match). **Not committed.**

No reset. No rebase. No stash. No project push.

---

## B. Morris authority

**GO consumed:** GO MW3 BOUNDED EPISTEMIC CORRECTION

Authorized: correct BLK-MW3-CRIT-04; correct BLK-MW3-CRIT-05; minimum types/schema/orchestration/Evidence-resolution; hostile deterministic tests; OA Evidence shape/path tests; preserve CRIT-02/03; local correction commit(s); Full Review Pack; canonical Review Handoff via bounded publisher.

**NOT authorized / NOT performed:** REAL OpenAI · MW3 closure · READY FOR REAL · Cognitive Completion proof · runtime v3 adoption · MW4 · Hosted Search · File Search · MCP source engine · new source subsystem · package upgrade · production model routing · Responses compaction adoption · new persistence · new Evidence aggregate/schema · generic epistemic/reasoning engine · Roadmap truth-sync · Build Doctrine/C1/C5/v3 mutation · project branch push · PR · merge · branch deletion · force operation.

---

## C. Sources read

Process: `prompts/templates/sfia-cycle-execution-template.md` · `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` · `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` · `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`.

Studio (validation only, **not mutated**): Build Doctrine · Roadmap · Product Completion cadrage/conception · C5 MW3-S01/S02 · doc08 trajectory · v3 33/34/35.

Review input: `f4e04e9766781da436346b9e1e0ed1c63dd4d118:sfia-review-handoff/latest-chatgpt-review.md`.

Code inspected before mutation: `deriveMw3Assessment.ts` · `contradictionDisposition.ts` · `mw3AvailableEvidence.ts` · `intentAnalysis.ts` · `orchestrateF2.ts` · OA Evidence types / `RegisterEvidence` / `validateBindings` · Fake provider · C01–C16 / C10–C12 tests.

---

## D. Convergence

Target: **MW3-S01** candidate vs evidence-backed contradiction; **MW3-S02** Cognitive STOP honesty.

Chain: MW0 eval spine → MW1 Option C / Memory B → MW2 CWP → **MW3 contradiction/STOP (this correction)** → MW4 later.

**MW4 NOT AUTHORIZED.**

KEEP: Option C; existing structured cognition call; `disposeContradiction`; `decideCognitiveStop`; public `projectAssistantSendAction`; OA Evidence repository; CRIT-02 precedence; CRIT-03 UI anatomy; MW0/MW2/MW3 deterministic spine.

ADAPT: contradiction candidate contract (policy fields removed); Studio-owned promotion policy; project-scoped Evidence resolution; C17–C24 tests.

REJECT: model-owned evidence promotion policy; cross-project Evidence acceptance; new Evidence architecture; new source engine; Hosted Search; parallel cognitive path.

**ROADMAP TRUTH-SYNC PENDING.** Versioned Roadmap still contains stale “MW3 not authorized/not started” wording. Morris GO supersedes that operational pointer for this local cycle. Roadmap file was **not** modified.

---

## E. ChatGPT re-review findings

### BLK-MW3-CRIT-04 — UNTRUSTED CANDIDATE CONTROLS PROMOTION POLICY

`Mw3ContradictionCandidateSignal` carried `requiredDomains`, `requiredSourceCount`, `freshnessMatters`. `deriveMw3ContradictionAssessment` forwarded those into `disposeContradiction`. The model could lower source count, disable freshness, or pick a convenient domain.

### BLK-MW3-CRIT-05 — EVIDENCE PROJECT/CONTEXT ISOLATION NOT PROVEN

`resolveAvailableContradictionPointers` accepted only `claimedEvidenceIds` and called `repository.findById` without current `projectId`. `mapOaEvidence` set `domain = "project"` when **any** `bindings.projectId` existed, without `=== current projectId`.

---

## F. Before/after ownership matrix

| Field | BEFORE | AFTER |
| --- | --- | --- |
| conflict signal | MODEL/NORA | MODEL/NORA |
| claimed Evidence IDs | MODEL/NORA | MODEL/NORA |
| source-count requirement | MODEL/NORA (could set 1) | **STUDIO/SFIA** (`MW3_STUDIO_REQUIRED_SOURCE_COUNT = 2`) |
| freshness requirement | MODEL/NORA (could set false) | **STUDIO/SFIA** (`MW3_STUDIO_FRESHNESS_MATTERS = true`) |
| context/domain requirement | MODEL/NORA (`requiredDomains`) | **STUDIO/SFIA** (`requiredDomains = [current projectId]`) |
| attribution | STUDIO/SFIA (`disposeContradiction`) | STUDIO/SFIA (unchanged) |
| governing invalidation semantic signal | MODEL/NORA | MODEL/NORA (untrusted; cannot create `evidence_backed` or bypass policy) |
| disposition | STUDIO/SFIA (`disposeContradiction`) | STUDIO/SFIA — now always under Studio policy on product path |
| STOP | STUDIO/SFIA (`decideCognitiveStop`) | STUDIO/SFIA — STOP only after Studio `evidence_backed` (CRIT-02 retained) |

---

## G. CRIT-04 correction

**Old defect:** untrusted candidate fields were treated as authoritative promotion policy.

**Fix:**

- Removed `requiredDomains` / `requiredSourceCount` / `freshnessMatters` from `Mw3ContradictionCandidateSignal`, F2 `CONTRADICTION_CANDIDATE_OBJECT_SCHEMA` (required list + properties), prompt, parser return object, and C01–C16 fixtures.
- Parser **ignores** legacy policy fields if a Fake/legacy payload still contains them.
- `deriveMw3ContradictionAssessment` now requires `projectId` and always injects Studio policy into `disposeContradiction` input.
- Prompt states: candidate is never Evidence, never final disposition, never promotion policy, never HumanDecision, never authority. `governingPremiseInvalidated` is a semantic hypothesis, not proof and not STOP.

Historical `disposeContradiction` unit tests that pass policy directly remain unchanged (controller still accepts explicit policy). Product path no longer lets the model supply that policy.

**Hostile proof:** C17 (source-count downgrade), C18 (freshness bypass), C19 (domain bypass), parser unit (legacy fields cannot change Studio bars).

Q1. Can a model-supplied field lower distinct source coverage below Studio policy? **NO**
Q2. Can a model disable freshness enforcement? **NO**
Q3. Can a model choose a convenient domain to get promotion? **NO**

---

## H. CRIT-05 correction

**Old defect:** Evidence lookup was not project-scoped; mapping did not verify `evidence.bindings.projectId === current projectId`.

**Fix:**

- Resolver contract: `resolveAvailableContradictionPointers({ projectId, claimedEvidenceIds })`.
- Pure `mapOaEvidenceForProject(evidence, currentProjectId)`:
  - null if project binding missing, blank, or mismatched;
  - else pointer with `domain = currentProjectId`, honest `freshness`, `attributable` = non-empty source AND status `available|verified`.
- Rejected Evidence contributes no accepted pointer (fail-closed, **no product throw**).
- Test catalog: `setMw3AvailableEvidenceForTests({ projectId, evidence: Evidence[] } | null)`. Fake replaces storage only. Mapping/filter still runs.
- Orchestration: `orchestrateAssistantSend` loads Project, then `deriveProductPathMw3Assessment(analysis, project.projectId)`.
- `projectAssistantSendAction` remains `{ projectId, content, history }` only. No client epistemic fields.

Q4. Can Evidence from another Project be promoted? **NO** (C20)
Q5. Can unbound Evidence be promoted? **NO** (C21)
Q6. Can same-project valid Evidence be promoted through normal product path? **YES** when Studio policy is satisfied (C22)

---

## I. OA Evidence mapping

Project binding rule: `evidence.bindings.projectId?.trim() === currentProjectId.trim()` else reject.

| Check | Rule |
| --- | --- |
| status | `available` or `verified` required for `attributable` |
| freshness | mapped honestly (`fresh` / `aging` / `stale` / `unknown`); Studio always enforces freshness (`stale`/`unknown` reject promotion) |
| source attribution | non-empty `evidence.source` required for `attributable` |
| coverage | ≥ 2 distinct attributable in-project source IDs |

Same-project stale/unattributable Evidence **is still mapped** so `disposeContradiction` can record `stale_evidence` / `missing_attribution`. Cross-project / unbound Evidence is **omitted** (no pointer).

C22 exercises `RegisterEvidence` on Product SQLite + `repository.findById` + `mapOaEvidenceForProject` + public `orchestrateAssistantSend`. Test catalog is **not** set for C20–C24.

**Realism/grounding boundary:** MW3 deterministic proof validates governed Evidence eligibility and contradiction disposition. It does **not** extract semantic claims from Evidence payloads. MW4 later strengthens narrative/provenance durability. MW6 later strengthens external source intelligence. This does **not** weaken fail-closed behavior.

---

## J. Hostile C17–C24 proof

| ID | Result | Observation |
| --- | --- | --- |
| parser | PASS | legacy `requiredSourceCount=1` / `freshnessMatters=false` / `requiredDomains` ignored; Studio bars remain 2 / true / `[projectId]`; schema no longer contains those fields |
| mapOaEvidenceForProject | PASS | same-project maps; cross-project / unbound / blank binding → null |
| C17 | PASS | one valid source + `requiredSourceCount=1` → `candidate`, no STOP, `insufficient_source_coverage` |
| C18 | PASS | two stale/unknown sources + `freshnessMatters=false` → `candidate`, no STOP |
| C19 | PASS | out-of-project Evidence + convenient `requiredDomains` → `candidate`, no STOP |
| C20 | PASS | OA Evidence `bindings.projectId = prj:other-project-b` while current is A → `candidate`, no STOP |
| C21 | PASS | OA Evidence bound only to `cycleInstanceId` (no `projectId`) → `candidate`, no STOP |
| C22 | PASS | two fresh attributable OA Evidence records on current Project via repository → `evidence_backed` |
| C23 | PASS | C22 eligibility + `governingPremiseInvalidated=true` → `COGNITIVE_STOP`, progress ≠ SUCCESS |
| C24 | PASS | `governingPremiseInvalidated=true` with one source + stale + cross-project → `candidate`, **NO STOP** |

Q7. Can `governingPremiseInvalidated=true` cause STOP with insufficient Evidence? **NO** (C24)
Q8. Can `governingPremiseInvalidated=true` cause STOP after Studio-owned `evidence_backed` qualification? **YES** (C23)

---

## K. C01–C16 regression

C01–C16 file: **13 PASS** (catalog now project-scoped `Evidence[]`; candidate policy fields removed; C14 asserts Studio policy).

C10–C12 panel anatomy: **3 PASS** (unchanged UX file).

---

## L. Historical regression

| Suite | Result |
| --- | --- |
| `mw3.s01.s02.dispositionStop.d0.test.ts` | 16 PASS |
| `mw3.turn.wiring.d0.test.ts` | 2 PASS |
| `mw3.disposition.eval.test.ts` | 3 PASS |
| `mw3.cognitiveStop.surface.d0.test.ts` | 5 PASS |
| `mw3.correction.c01-c16.d0.test.ts` | 13 PASS |
| F2 `f2.orchestrate.test.ts` | 14 PASS |
| `orchestrateTurn.test.ts` | 8 PASS |
| `nora-cognitive-runtime` + MW2 eval | 199 PASS including MW0 D0 **9 PASS** and all MW2 D0 files |
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `git diff --check` | PASS |

Recovery-era “5 files / 28 PASS” count predates C01–C16. Current historical MW3 controller + correction #1 product-path files remain green.

---

## M. CRIT-02 / CRIT-03 non-regression

Q9. Did CRIT-02 remain closed? **YES** — C07 unit (`localImpactOnly=true` + governing invalidation → STOP) + C07 product path + C23.

Q10. Did CRIT-03 remain closed? **YES** — C10–C12 panel anatomy unchanged and PASS.

---

## N. Fake/Real

Proof level entering: DETERMINISTIC PRODUCT WIRING.
Proof level expected/achieved: **DETERMINISTIC PRODUCT + OA EVIDENCE ELIGIBILITY**.

Fake allowed: model/OpenAI response (`FakeConversationProvider`); test catalog **storage** of OA `Evidence` objects.

Fake forbidden and **not** faked: final Evidence acceptance; project-scope decision (`mapOaEvidenceForProject`); source-count policy; freshness policy; disposition; Cognitive STOP.

C20–C24 use actual `registerEvidence` + Product SQLite repository. ZERO REAL OpenAI.

Proof level NOT claimed: REAL BOUNDARY PROVEN · END-TO-END REAL PROVEN.

ZERO REAL.

---

## O. Architecture

FA = **NO**
TA = **NO**

No new Evidence persistence field/schema. No new aggregate. No second model/agent loop. No Hosted Search / File Search / MCP / source engine. No generic verification engine. No claim graph. No parallel product path. No client epistemic authority. No new business-domain taxonomy — project context is the trusted domain boundary available today.

OpenAI cognition: **KEEP / ADAPT** (same structured call; candidate fields reduced).
SFIA evidence policy: **COMPLETE / HARDEN**.

---

## P. Files

Scope vs `4e123fc5`:

```
M  projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.c01-c16.d0.test.ts
A  projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.c17-c24.d0.test.ts
M  projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
M  projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
M  projects/sfia-studio/app/features/project-assistant/mw3AvailableEvidence.ts
M  projects/sfia-studio/app/lib/nora-cognitive-runtime/deriveMw3Assessment.ts
M  projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
```

7 files, +831 / −108.

Protected files **not** modified: Build Doctrine, Roadmap, cadrage, conception, C5, doc08, `sfia-v3-framing/**`, `prompts/templates/**`, `method/**`, `package.json`, `package-lock.json`.

Complete implementation diff of `339d583a` follows (new file included in full; modified files as complete useful diffs).

---

## Q. Git lifecycle

- Dedicated persistent worktree from exact `4e123fc5`.
- Local implementation commit `339d583a` — **not pushed**.
- Project branch has **no upstream**.
- Review Handoff: publish-in-cycle via `scripts/sfia/publish-review-handoff.sh` only (this pack).
- Expected remote entry before this publication: `f4e04e97`.
- Ancestors that must remain readable: `f4e04e97`, `969585c6`, `ab61c18a`.

---

## R. Reserves

1. ROADMAP TRUTH-SYNC PENDING — do not treat Roadmap wording as current MW3 operational truth.
2. MW3 HISTORICAL IMPLEMENTATION SHA LOST — `806e8144` provenance-only.
3. HISTORICAL BYTE/CODE PARITY NOT PROVEN.
4. MW3 does not extract semantic claims from Evidence payloads.
5. Current OA Evidence has no generic contradiction business-domain field; project binding is the trusted domain boundary today.
6. ZERO REAL — READY FOR REAL is **not** claimed.
7. Untracked `node_modules` symlink is local convenience only.

---

## S. Final verdict

**BLK-MW3-CRIT-04 TREATED — READY FOR CHATGPT RE-REVIEW**

**BLK-MW3-CRIT-05 TREATED — READY FOR CHATGPT RE-REVIEW**

**MW3 EPISTEMIC BOUNDARY DETERMINISTIC PROOF PASS**

**MW3 EPISTEMIC BOUNDARY CORRECTION COMPLETE — READY FOR CHATGPT CRITICAL RE-REVIEW**

This does **NOT** mean: READY FOR REAL · MW3 COMPLETE · MW3 CLOSED · Cognitive Completion PROVEN · runtime v3 ADOPTED · MW4 authorized.

FA NO · TA NO · ZERO REAL · project branch not pushed.

---

## Implementation diff (`339d583a`)

```
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.c01-c16.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.c01-c16.d0.test.ts
index 142b44a4..1241b10b 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.c01-c16.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.c01-c16.d0.test.ts
@@ -18,6 +18,7 @@ import {
   decideCognitiveStop,
   disposeContradiction,
   deriveMw3ContradictionAssessment,
+  MW3_STUDIO_REQUIRED_SOURCE_COUNT,
   type ContradictionEvidencePointer,
 } from "@/lib/nora-cognitive-runtime";
 import {
@@ -26,6 +27,9 @@ import {
 } from "@/lib/vertical-slice-runtime";
 import type { SemanticCognitiveWorkloadAssessment } from "@/features/project-assistant/f2/types";
 import type { Mw3ContradictionCandidateSignal } from "@/lib/nora-cognitive-runtime/deriveMw3Assessment";
+import type { Evidence } from "@/lib/oa/evidence-review/domain/types";
+import { EVIDENCE_SCHEMA_VERSION } from "@/lib/oa/evidence-review/domain/types";
+import { OA_SCHEMA_VERSION } from "@/lib/oa/doctrine/domain/types";

 const tempDirs: string[] = [];

@@ -77,7 +81,81 @@ function intentJson(input: {
   });
 }

-function freshGovernancePointers(): ContradictionEvidencePointer[] {
+function candidateConflict(
+  overrides: Partial<Mw3ContradictionCandidateSignal> = {},
+): Mw3ContradictionCandidateSignal {
+  return {
+    conflictPresent: true,
+    claimedEvidenceIds: [],
+    governingPremise: "FinOps freeze must hold",
+    governingPremiseInvalidated: false,
+    localImpactOnly: true,
+    fabricationAttempt: false,
+    ...overrides,
+  };
+}
+
+function catalogEvidence(input: {
+  evidenceId: string;
+  source: string;
+  projectId?: string | null;
+  freshness?: Evidence["freshness"];
+  status?: Evidence["status"];
+}): Evidence {
+  return {
+    schemaVersion: EVIDENCE_SCHEMA_VERSION,
+    evidenceId: input.evidenceId,
+    type: "artifact",
+    source: input.source,
+    sourceKind: "external",
+    producedAt: "2026-09-02T12:00:00.000Z",
+    freshness: input.freshness ?? "fresh",
+    status: input.status ?? "available",
+    classification: "internal",
+    storageMode: "metadata_only",
+    availability: "available",
+    bindings:
+      input.projectId === null
+        ? { cycleInstanceId: "cyc:unbound-mw3" }
+        : { projectId: input.projectId },
+    containsSecrets: false,
+    provenance: {
+      schemaVersion: OA_SCHEMA_VERSION,
+      provenanceRecordId: `prv:${input.evidenceId}`,
+      actor: {
+        actorId: "actor:morris",
+        role: "decision_maker",
+        authorityLevel: "N3",
+      },
+      source: "system",
+      timestamp: "2026-09-02T12:00:00.000Z",
+      correlationId: `cor:${input.evidenceId}`,
+    },
+    version: 1,
+    createdAt: "2026-09-02T12:00:00.000Z",
+  };
+}
+
+function seedCatalog(projectId: string, evidence: Evidence[]): void {
+  setMw3AvailableEvidenceForTests({ projectId, evidence });
+}
+
+function sameProjectEvidence(projectId: string): Evidence[] {
+  return [
+    catalogEvidence({
+      evidenceId: "ev:1",
+      source: "src:a",
+      projectId,
+    }),
+    catalogEvidence({
+      evidenceId: "ev:2",
+      source: "src:b",
+      projectId,
+    }),
+  ];
+}
+
+function controllerPointers(): ContradictionEvidencePointer[] {
   return [
     {
       evidenceId: "ev:1",
@@ -96,23 +174,6 @@ function freshGovernancePointers(): ContradictionEvidencePointer[] {
   ];
 }

-function candidateConflict(
-  overrides: Partial<Mw3ContradictionCandidateSignal> = {},
-): Mw3ContradictionCandidateSignal {
-  return {
-    conflictPresent: true,
-    claimedEvidenceIds: [],
-    requiredDomains: ["governance"],
-    requiredSourceCount: 2,
-    freshnessMatters: true,
-    governingPremise: "FinOps freeze must hold",
-    governingPremiseInvalidated: false,
-    localImpactOnly: true,
-    fabricationAttempt: false,
-    ...overrides,
-  };
-}
-
 describe("MW3 correction — public product path C01–C16 (subset)", () => {
   const prevReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
   const prevProvider = process.env.OPS1_CONVERSATION_PROVIDER;
@@ -221,7 +282,7 @@ describe("MW3 correction — public product path C01–C16 (subset)", () => {

   it("C03 — sufficient fresh attributable in-domain evidence → evidence_backed", async () => {
     const projectId = await createProject();
-    setMw3AvailableEvidenceForTests(freshGovernancePointers());
+    seedCatalog(projectId, sameProjectEvidence(projectId));
     setConversationProviderForTests(
       fakeFor(
         candidateConflict({
@@ -242,7 +303,7 @@ describe("MW3 correction — public product path C01–C16 (subset)", () => {

   it("C04 — public sendAction: evidence_backed + governing invalidation → COGNITIVE_STOP", async () => {
     const projectId = await createProject();
-    setMw3AvailableEvidenceForTests(freshGovernancePointers());
+    seedCatalog(projectId, sameProjectEvidence(projectId));
     setConversationProviderForTests(
       fakeFor(
         candidateConflict({
@@ -267,7 +328,7 @@ describe("MW3 correction — public product path C01–C16 (subset)", () => {

   it("C05 — evidence-backed non-governing continues honestly", async () => {
     const projectId = await createProject();
-    setMw3AvailableEvidenceForTests(freshGovernancePointers());
+    seedCatalog(projectId, sameProjectEvidence(projectId));
     setConversationProviderForTests(
       fakeFor(
         candidateConflict({
@@ -309,7 +370,7 @@ describe("MW3 correction — public product path C01–C16 (subset)", () => {
       conflictPresent: true,
       requiredSourceCount: 2,
       requiredDomains: ["governance"],
-      evidencePointers: freshGovernancePointers(),
+      evidencePointers: controllerPointers(),
     });
     const stop = decideCognitiveStop({
       disposition,
@@ -322,7 +383,7 @@ describe("MW3 correction — public product path C01–C16 (subset)", () => {
     expect(stop.outcome).toBe("COGNITIVE_STOP");

     const projectId = await createProject();
-    setMw3AvailableEvidenceForTests(freshGovernancePointers());
+    seedCatalog(projectId, sameProjectEvidence(projectId));
     setConversationProviderForTests(
       fakeFor(
         candidateConflict({
@@ -344,7 +405,7 @@ describe("MW3 correction — public product path C01–C16 (subset)", () => {

   it("C08 — model candidate with no valid evidence stays candidate", async () => {
     const projectId = await createProject();
-    setMw3AvailableEvidenceForTests([]);
+    seedCatalog(projectId, []);
     setConversationProviderForTests(
       fakeFor(
         candidateConflict({
@@ -365,21 +426,18 @@ describe("MW3 correction — public product path C01–C16 (subset)", () => {

   it("C09 — fabricated / stale / wrong-domain cannot promote evidence-backed", async () => {
     const projectId = await createProject();
-    setMw3AvailableEvidenceForTests([
-      {
+    seedCatalog(projectId, [
+      catalogEvidence({
         evidenceId: "ev:stale",
-        sourceId: "src:a",
-        domain: "governance",
+        source: "src:a",
+        projectId,
         freshness: "stale",
-        attributable: true,
-      },
-      {
+      }),
+      catalogEvidence({
         evidenceId: "ev:wrong",
-        sourceId: "src:b",
-        domain: "other",
-        freshness: "fresh",
-        attributable: true,
-      },
+        source: "src:b",
+        projectId: "prj:other-project",
+      }),
     ]);
     setConversationProviderForTests(
       fakeFor(
@@ -416,8 +474,14 @@ describe("MW3 correction — public product path C01–C16 (subset)", () => {
     const derived = deriveMw3ContradictionAssessment({
       candidate: candidateConflict(),
       availablePointers: [],
+      projectId: "prj:mw3-corr-c14",
       trustedSfiaProfile: null,
     });
+    expect(derived?.conflict.requiredSourceCount).toBe(
+      MW3_STUDIO_REQUIRED_SOURCE_COUNT,
+    );
+    expect(derived?.conflict.freshnessMatters).toBe(true);
+    expect(derived?.conflict.requiredDomains).toEqual(["prj:mw3-corr-c14"]);
     expect(derived).toBeTruthy();
     const disposition = disposeContradiction(derived!.conflict);
     expect(disposition.trustedSfiaProfile).toBeNull();
@@ -436,7 +500,7 @@ describe("MW3 correction — public product path C01–C16 (subset)", () => {

   it("C15 — strategy/reasoning variation cannot change truth disposition", async () => {
     const projectId = await createProject();
-    setMw3AvailableEvidenceForTests(freshGovernancePointers());
+    seedCatalog(projectId, sameProjectEvidence(projectId));
     const candidate = candidateConflict({
       claimedEvidenceIds: ["ev:1", "ev:2"],
     });
@@ -459,12 +523,11 @@ describe("MW3 correction — public product path C01–C16 (subset)", () => {

   it("C16 — low sourceBreadth cannot promote evidence-backed under required coverage", async () => {
     const projectId = await createProject();
-    setMw3AvailableEvidenceForTests([freshGovernancePointers()[0]!]);
+    seedCatalog(projectId, [sameProjectEvidence(projectId)[0]!]);
     setConversationProviderForTests(
       fakeFor(
         candidateConflict({
           claimedEvidenceIds: ["ev:1"],
-          requiredSourceCount: 2,
         }),
         mediumCwp("low"),
       ),
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.c17-c24.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.c17-c24.d0.test.ts
new file mode 100644
index 00000000..ebad149b
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.c17-c24.d0.test.ts
@@ -0,0 +1,621 @@
+/** @vitest-environment node */
+/**
+ * MW3 epistemic-boundary correction — C17–C24 hostile CRIT-04 / CRIT-05.
+ * Fake provider + OA Evidence eligibility. ZERO REAL OpenAI.
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
+import { setConversationProviderForTests } from "@/lib/platform/ai";
+import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
+import {
+  F2_INTENT_JSON_SCHEMA,
+  parseContradictionCandidate,
+  validateIntentAnalysisPayload,
+} from "@/features/project-assistant/f2/intentAnalysis";
+import {
+  mapOaEvidenceForProject,
+  resolveAvailableContradictionPointers,
+  setMw3AvailableEvidenceForTests,
+} from "@/features/project-assistant/mw3AvailableEvidence";
+import {
+  deriveMw3ContradictionAssessment,
+  MW3_STUDIO_FRESHNESS_MATTERS,
+  MW3_STUDIO_REQUIRED_SOURCE_COUNT,
+} from "@/lib/nora-cognitive-runtime";
+import {
+  getRuntimeApplicationService,
+  resetRuntimeApplicationServiceForTests,
+} from "@/lib/vertical-slice-runtime";
+import type { SemanticCognitiveWorkloadAssessment } from "@/features/project-assistant/f2/types";
+import type { Mw3ContradictionCandidateSignal } from "@/lib/nora-cognitive-runtime/deriveMw3Assessment";
+import type { Evidence } from "@/lib/oa/evidence-review/domain/types";
+import { EVIDENCE_SCHEMA_VERSION } from "@/lib/oa/evidence-review/domain/types";
+import { OA_SCHEMA_VERSION } from "@/lib/oa/doctrine/domain/types";
+
+const tempDirs: string[] = [];
+
+const ACTOR = {
+  actorId: "actor:morris",
+  role: "decision_maker" as const,
+  authorityLevel: "N3" as const,
+};
+
+function mediumCwp(): SemanticCognitiveWorkloadAssessment {
+  return {
+    ambiguity: "medium",
+    reasoningDepth: "high",
+    sourceBreadth: "medium",
+    toolDependency: "medium",
+    contradictionRisk: "high",
+    verificationNeed: "high",
+  };
+}
+
+function baseCandidate(
+  overrides: Partial<Mw3ContradictionCandidateSignal> = {},
+): Mw3ContradictionCandidateSignal {
+  return {
+    conflictPresent: true,
+    claimedEvidenceIds: [],
+    governingPremise: "FinOps freeze must hold",
+    governingPremiseInvalidated: false,
+    localImpactOnly: true,
+    fabricationAttempt: false,
+    ...overrides,
+  };
+}
+
+function catalogEvidence(input: {
+  evidenceId: string;
+  source: string;
+  projectId?: string | null;
+  freshness?: Evidence["freshness"];
+  status?: Evidence["status"];
+}): Evidence {
+  return {
+    schemaVersion: EVIDENCE_SCHEMA_VERSION,
+    evidenceId: input.evidenceId,
+    type: "artifact",
+    source: input.source,
+    sourceKind: "external",
+    producedAt: "2026-09-02T12:00:00.000Z",
+    freshness: input.freshness ?? "fresh",
+    status: input.status ?? "available",
+    classification: "internal",
+    storageMode: "metadata_only",
+    availability: "available",
+    bindings:
+      input.projectId === null
+        ? { cycleInstanceId: "cyc:unbound-mw3" }
+        : { projectId: input.projectId },
+    containsSecrets: false,
+    provenance: {
+      schemaVersion: OA_SCHEMA_VERSION,
+      provenanceRecordId: `prv:${input.evidenceId}`,
+      actor: ACTOR,
+      source: "system",
+      timestamp: "2026-09-02T12:00:00.000Z",
+      correlationId: `cor:${input.evidenceId}`,
+    },
+    version: 1,
+    createdAt: "2026-09-02T12:00:00.000Z",
+  };
+}
+
+function intentJson(
+  candidate: Record<string, unknown>,
+  cwp: SemanticCognitiveWorkloadAssessment = mediumCwp(),
+): string {
+  return JSON.stringify({
+    intentClass: "informative",
+    candidateCycleTypeId: null,
+    signals: null,
+    cognitiveWorkload: cwp,
+    contradictionCandidate: candidate,
+    objective: "Analyse contradiction",
+    scope: null,
+    rephrasedRequest: "Évaluer le conflit annoncé",
+    outOfScope: [],
+    risks: [],
+    reservations: [],
+    stopConditions: [],
+    activatedBlocks: [],
+    expectedOutcome: null,
+    criticalJustification: null,
+    requestedOperation: null,
+  });
+}
+
+function fakeFor(candidate: Record<string, unknown>) {
+  return new FakeConversationProvider({
+    scripted: [intentJson(candidate)],
+    toolScript: [
+      {
+        kind: "message",
+        text: "[TEST/FAKE] Nora informative reply. AUCUNE EXÉCUTION.",
+      },
+    ],
+  });
+}
+
+describe("MW3 epistemic boundary — C17–C24 / mapping", () => {
+  const prevReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
+  const prevProvider = process.env.OPS1_CONVERSATION_PROVIDER;
+  const prevKey = process.env.OPENAI_API_KEY;
+  const prevModel = process.env.OPENAI_MODEL;
+
+  beforeEach(() => {
+    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
+    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+    process.env.OPENAI_MODEL = "gpt-5.6-luna";
+    delete process.env.OPENAI_API_KEY;
+    resetRuntimeApplicationServiceForTests();
+    setConversationProviderForTests(null);
+    setMw3AvailableEvidenceForTests(null);
+  });
+
+  afterEach(() => {
+    setConversationProviderForTests(null);
+    setMw3AvailableEvidenceForTests(null);
+    if (prevReset === undefined) delete process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
+    else process.env.SFIA_V2_RUNTIME_ALLOW_RESET = prevReset;
+    if (prevProvider === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
+    else process.env.OPS1_CONVERSATION_PROVIDER = prevProvider;
+    if (prevKey === undefined) delete process.env.OPENAI_API_KEY;
+    else process.env.OPENAI_API_KEY = prevKey;
+    if (prevModel === undefined) delete process.env.OPENAI_MODEL;
+    else process.env.OPENAI_MODEL = prevModel;
+    resetRuntimeApplicationServiceForTests();
+    while (tempDirs.length) {
+      const d = tempDirs.pop();
+      if (d) fs.rmSync(d, { recursive: true, force: true });
+    }
+  });
+
+  async function createProject(name = "MW3 epistemic"): Promise<string> {
+    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw3-epist-"));
+    tempDirs.push(dir);
+    const runtime = getRuntimeApplicationService({
+      productDbPath: path.join(dir, "oa-product.sqlite"),
+      auditMode: "noop",
+    });
+    const created = await runtime.createProject({
+      name,
+      objective: "Epistemic boundary",
+      context: "Deterministic Fake + OA Evidence",
+      criticality: "STANDARD",
+      constraints: ["LECTURE SEULE"],
+      shortReference: "MW3E",
+      idempotencyKey: `idem:mw3e-${Date.now()}-${Math.random()}`,
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) throw new Error("setup failed");
+    return created.projectId;
+  }
+
+  async function registerOaEvidence(input: {
+    evidenceId: string;
+    source: string;
+    bindings: Evidence["bindings"];
+    freshness?: Evidence["freshness"];
+  }): Promise<Evidence> {
+    const runtime = getRuntimeApplicationService();
+    const services = runtime.oa?.evidenceReviewServices;
+    if (!services) throw new Error("OA Evidence services required");
+    const result = await services.registerEvidence.execute({
+      evidenceId: input.evidenceId,
+      idempotencyKey: `idem:${input.evidenceId}`,
+      actor: ACTOR,
+      type: "artifact",
+      source: input.source,
+      sourceKind: "external",
+      bindings: input.bindings,
+      classification: "internal",
+      storageMode: "metadata_only",
+      freshness: input.freshness ?? "fresh",
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) throw new Error(`register ${input.evidenceId} failed`);
+    return result.evidence;
+  }
+
+  it("parser — legacy policy fields cannot influence Studio assessment", () => {
+    const parsed = parseContradictionCandidate({
+      conflictPresent: true,
+      claimedEvidenceIds: ["ev:1"],
+      requiredDomains: [],
+      requiredSourceCount: 1,
+      freshnessMatters: false,
+      governingPremise: "FinOps freeze must hold",
+      governingPremiseInvalidated: true,
+      localImpactOnly: true,
+      fabricationAttempt: false,
+    });
+    expect(parsed).toMatchObject({
+      conflictPresent: true,
+      claimedEvidenceIds: ["ev:1"],
+      governingPremise: "FinOps freeze must hold",
+      governingPremiseInvalidated: true,
+      localImpactOnly: true,
+    });
+    expect(parsed).not.toHaveProperty("requiredSourceCount");
+    expect(parsed).not.toHaveProperty("freshnessMatters");
+    expect(parsed).not.toHaveProperty("requiredDomains");
+    expect(
+      Object.prototype.hasOwnProperty.call(parsed, "requiredSourceCount"),
+    ).toBe(false);
+
+    const schema = JSON.stringify(F2_INTENT_JSON_SCHEMA);
+    expect(schema).not.toContain("requiredSourceCount");
+    expect(schema).not.toContain("freshnessMatters");
+    expect(schema).not.toContain("requiredDomains");
+
+    const analysis = validateIntentAnalysisPayload(
+      JSON.parse(
+        intentJson({
+          conflictPresent: true,
+          claimedEvidenceIds: ["ev:1"],
+          requiredSourceCount: 1,
+          freshnessMatters: false,
+          requiredDomains: ["convenient"],
+          governingPremise: "x",
+          governingPremiseInvalidated: false,
+          localImpactOnly: true,
+          fabricationAttempt: false,
+        }),
+      ),
+    );
+    const derived = deriveMw3ContradictionAssessment({
+      candidate: analysis.contradictionCandidate!,
+      availablePointers: [
+        {
+          evidenceId: "ev:1",
+          sourceId: "src:a",
+          domain: "prj:current",
+          freshness: "fresh",
+          attributable: true,
+        },
+      ],
+      projectId: "prj:current",
+    });
+    expect(derived?.conflict.requiredSourceCount).toBe(
+      MW3_STUDIO_REQUIRED_SOURCE_COUNT,
+    );
+    expect(derived?.conflict.freshnessMatters).toBe(MW3_STUDIO_FRESHNESS_MATTERS);
+    expect(derived?.conflict.requiredDomains).toEqual(["prj:current"]);
+  });
+
+  it("mapOaEvidenceForProject — same-project maps; cross-project/unbound rejected", () => {
+    const current = "prj:alpha";
+    const ok = mapOaEvidenceForProject(
+      catalogEvidence({
+        evidenceId: "ev:ok",
+        source: "src:a",
+        projectId: current,
+      }),
+      current,
+    );
+    expect(ok).toMatchObject({
+      evidenceId: "ev:ok",
+      sourceId: "src:a",
+      domain: current,
+      freshness: "fresh",
+      attributable: true,
+    });
+
+    expect(
+      mapOaEvidenceForProject(
+        catalogEvidence({
+          evidenceId: "ev:other",
+          source: "src:a",
+          projectId: "prj:beta",
+        }),
+        current,
+      ),
+    ).toBeNull();
+
+    expect(
+      mapOaEvidenceForProject(
+        catalogEvidence({
+          evidenceId: "ev:unbound",
+          source: "src:a",
+          projectId: null,
+        }),
+        current,
+      ),
+    ).toBeNull();
+
+    const blank = catalogEvidence({
+      evidenceId: "ev:blank",
+      source: "src:a",
+      projectId: current,
+    });
+    blank.bindings.projectId = "   ";
+    expect(mapOaEvidenceForProject(blank, current)).toBeNull();
+  });
+
+  it("C17 — model source-count downgrade cannot promote one source", async () => {
+    const projectId = await createProject();
+    setMw3AvailableEvidenceForTests({
+      projectId,
+      evidence: [
+        catalogEvidence({
+          evidenceId: "ev:1",
+          source: "src:a",
+          projectId,
+        }),
+      ],
+    });
+    setConversationProviderForTests(
+      fakeFor({
+        ...baseCandidate({ claimedEvidenceIds: ["ev:1"] }),
+        requiredSourceCount: 1,
+      }),
+    );
+    const result = await orchestrateAssistantSend({
+      projectId,
+      content: "Downgrade source count.",
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) throw new Error("C17 failed");
+    expect(result.mw3?.disposition).toBe("candidate");
+    expect(result.mw3?.cognitiveStop).toBe(false);
+    expect(result.status).not.toBe("cognitive_stop");
+    expect(result.mw3?.insufficiencyReasons).toContain(
+      "insufficient_source_coverage",
+    );
+  });
+
+  it("C18 — model cannot disable freshness; stale stays candidate", async () => {
+    const projectId = await createProject();
+    setMw3AvailableEvidenceForTests({
+      projectId,
+      evidence: [
+        catalogEvidence({
+          evidenceId: "ev:1",
+          source: "src:a",
+          projectId,
+          freshness: "stale",
+        }),
+        catalogEvidence({
+          evidenceId: "ev:2",
+          source: "src:b",
+          projectId,
+          freshness: "unknown",
+        }),
+      ],
+    });
+    setConversationProviderForTests(
+      fakeFor({
+        ...baseCandidate({ claimedEvidenceIds: ["ev:1", "ev:2"] }),
+        freshnessMatters: false,
+      }),
+    );
+    const result = await orchestrateAssistantSend({
+      projectId,
+      content: "Bypass freshness.",
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) throw new Error("C18 failed");
+    expect(result.mw3?.disposition).toBe("candidate");
+    expect(result.mw3?.cognitiveStop).toBe(false);
+    expect(result.status).not.toBe("cognitive_stop");
+  });
+
+  it("C19 — model cannot choose a convenient domain for out-of-project Evidence", async () => {
+    const projectId = await createProject();
+    setMw3AvailableEvidenceForTests({
+      projectId,
+      evidence: [
+        catalogEvidence({
+          evidenceId: "ev:1",
+          source: "src:a",
+          projectId: "prj:other-context",
+        }),
+        catalogEvidence({
+          evidenceId: "ev:2",
+          source: "src:b",
+          projectId: "prj:other-context",
+        }),
+      ],
+    });
+    setConversationProviderForTests(
+      fakeFor({
+        ...baseCandidate({ claimedEvidenceIds: ["ev:1", "ev:2"] }),
+        requiredDomains: ["project", "governance"],
+      }),
+    );
+    const result = await orchestrateAssistantSend({
+      projectId,
+      content: "Convenient domain bypass.",
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) throw new Error("C19 failed");
+    expect(result.mw3?.disposition).toBe("candidate");
+    expect(result.mw3?.cognitiveStop).toBe(false);
+    expect(result.status).not.toBe("cognitive_stop");
+  });
+
+  it("C20 — cross-project OA Evidence is rejected", async () => {
+    const projectA = await createProject("Project A");
+    await registerOaEvidence({
+      evidenceId: "ev:cross-1",
+      source: "src:a",
+      bindings: { projectId: "prj:other-project-b" },
+    });
+    await registerOaEvidence({
+      evidenceId: "ev:cross-2",
+      source: "src:b",
+      bindings: { projectId: "prj:other-project-b" },
+    });
+    const found = await getRuntimeApplicationService().oa!.evidenceReviewServices.repository.findById(
+      "ev:cross-1",
+    );
+    expect(found?.bindings.projectId).toBe("prj:other-project-b");
+
+    setConversationProviderForTests(
+      fakeFor(
+        baseCandidate({ claimedEvidenceIds: ["ev:cross-1", "ev:cross-2"] }),
+      ),
+    );
+    const result = await orchestrateAssistantSend({
+      projectId: projectA,
+      content: "Use other project Evidence.",
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) throw new Error("C20 failed");
+    expect(result.mw3?.disposition).toBe("candidate");
+    expect(result.mw3?.cognitiveStop).toBe(false);
+    expect(result.status).not.toBe("cognitive_stop");
+  });
+
+  it("C21 — unbound OA Evidence is rejected", async () => {
+    const projectId = await createProject();
+    await registerOaEvidence({
+      evidenceId: "ev:unbound-1",
+      source: "src:a",
+      bindings: { cycleInstanceId: "cyc:unbound-mw3-c21" },
+    });
+    await registerOaEvidence({
+      evidenceId: "ev:unbound-2",
+      source: "src:b",
+      bindings: { cycleInstanceId: "cyc:unbound-mw3-c21" },
+    });
+    const found = await getRuntimeApplicationService().oa!.evidenceReviewServices.repository.findById(
+      "ev:unbound-1",
+    );
+    expect(found?.bindings.projectId).toBeUndefined();
+
+    setConversationProviderForTests(
+      fakeFor(
+        baseCandidate({
+          claimedEvidenceIds: ["ev:unbound-1", "ev:unbound-2"],
+        }),
+      ),
+    );
+    const result = await orchestrateAssistantSend({
+      projectId,
+      content: "Use unbound Evidence.",
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) throw new Error("C21 failed");
+    expect(result.mw3?.disposition).toBe("candidate");
+    expect(result.mw3?.cognitiveStop).toBe(false);
+  });
+
+  it("C22 — same-project valid OA Evidence promotes through repository mapping", async () => {
+    const projectId = await createProject();
+    const ev1 = await registerOaEvidence({
+      evidenceId: "ev:same-1",
+      source: "src:alpha",
+      bindings: { projectId },
+      freshness: "fresh",
+    });
+    const ev2 = await registerOaEvidence({
+      evidenceId: "ev:same-2",
+      source: "src:beta",
+      bindings: { projectId },
+      freshness: "fresh",
+    });
+    expect(mapOaEvidenceForProject(ev1, projectId)?.sourceId).toBe("src:alpha");
+    expect(mapOaEvidenceForProject(ev2, projectId)?.sourceId).toBe("src:beta");
+
+    const pointers = await resolveAvailableContradictionPointers({
+      projectId,
+      claimedEvidenceIds: ["ev:same-1", "ev:same-2"],
+    });
+    expect(pointers).toHaveLength(2);
+    expect(pointers.map((p) => p.domain)).toEqual([projectId, projectId]);
+
+    setConversationProviderForTests(
+      fakeFor(
+        baseCandidate({ claimedEvidenceIds: ["ev:same-1", "ev:same-2"] }),
+      ),
+    );
+    const result = await orchestrateAssistantSend({
+      projectId,
+      content: "Same-project Evidence-backed conflict.",
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) throw new Error("C22 failed");
+    expect(result.mw3?.disposition).toBe("evidence_backed");
+    expect(result.mw3?.cognitiveStop).toBe(false);
+    expect(result.mw3?.evidenceIds).toEqual(["ev:same-1", "ev:same-2"]);
+  });
+
+  it("C23 — same-project evidence_backed + governing invalidation → STOP", async () => {
+    const projectId = await createProject();
+    await registerOaEvidence({
+      evidenceId: "ev:stop-1",
+      source: "src:alpha",
+      bindings: { projectId },
+    });
+    await registerOaEvidence({
+      evidenceId: "ev:stop-2",
+      source: "src:beta",
+      bindings: { projectId },
+    });
+    setConversationProviderForTests(
+      fakeFor(
+        baseCandidate({
+          claimedEvidenceIds: ["ev:stop-1", "ev:stop-2"],
+          governingPremiseInvalidated: true,
+          localImpactOnly: false,
+        }),
+      ),
+    );
+    const result = await orchestrateAssistantSend({
+      projectId,
+      content: "Governing premise invalidated with proof.",
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) throw new Error("C23 failed");
+    expect(result.mw3?.disposition).toBe("evidence_backed");
+    expect(result.mw3?.cognitiveStop).toBe(true);
+    expect(result.status).toBe("cognitive_stop");
+    expect(result.mw3?.progression).toBe("COGNITIVE_STOP");
+    expect(result.mw3?.allowsSilentSuccess).toBe(false);
+  });
+
+  it("C24 — governing invalidation cannot STOP without Studio evidence_backed", async () => {
+    const projectId = await createProject();
+    await registerOaEvidence({
+      evidenceId: "ev:one-src",
+      source: "src:only",
+      bindings: { projectId },
+    });
+    await registerOaEvidence({
+      evidenceId: "ev:stale-src",
+      source: "src:stale",
+      bindings: { projectId },
+      freshness: "stale",
+    });
+    await registerOaEvidence({
+      evidenceId: "ev:foreign",
+      source: "src:foreign",
+      bindings: { projectId: "prj:not-current" },
+    });
+    setConversationProviderForTests(
+      fakeFor(
+        baseCandidate({
+          claimedEvidenceIds: ["ev:one-src", "ev:stale-src", "ev:foreign"],
+          governingPremiseInvalidated: true,
+          localImpactOnly: true,
+        }),
+      ),
+    );
+    const result = await orchestrateAssistantSend({
+      projectId,
+      content: "Self-trigger STOP with insufficient Evidence.",
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) throw new Error("C24 failed");
+    expect(result.mw3?.disposition).toBe("candidate");
+    expect(result.mw3?.cognitiveStop).toBe(false);
+    expect(result.status).not.toBe("cognitive_stop");
+    expect(result.mw3?.progression).not.toBe("COGNITIVE_STOP");
+  });
+});
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
index bd940300..7a775376 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
@@ -72,9 +72,6 @@ const CONTRADICTION_CANDIDATE_OBJECT_SCHEMA = {
   properties: {
     conflictPresent: { type: "boolean" },
     claimedEvidenceIds: CANDIDATE_POINTER_ARRAY,
-    requiredDomains: CANDIDATE_POINTER_ARRAY,
-    requiredSourceCount: { type: "integer" },
-    freshnessMatters: { type: "boolean" },
     governingPremise: NULLABLE_STRING,
     governingPremiseInvalidated: { type: "boolean" },
     localImpactOnly: { type: "boolean" },
@@ -83,9 +80,6 @@ const CONTRADICTION_CANDIDATE_OBJECT_SCHEMA = {
   required: [
     "conflictPresent",
     "claimedEvidenceIds",
-    "requiredDomains",
-    "requiredSourceCount",
-    "freshnessMatters",
     "governingPremise",
     "governingPremiseInvalidated",
     "localImpactOnly",
@@ -268,21 +262,11 @@ export function parseContradictionCandidate(
   if (typeof raw !== "object" || Array.isArray(raw)) return null;
   const obj = raw as Record<string, unknown>;
   if (typeof obj.conflictPresent !== "boolean") return null;
+  // Legacy promotion-policy fields (requiredDomains / requiredSourceCount /
+  // freshnessMatters) are ignored if present. Studio owns those bars.
   return {
     conflictPresent: obj.conflictPresent,
     claimedEvidenceIds: clipArray(obj.claimedEvidenceIds),
-    requiredDomains: Array.isArray(obj.requiredDomains)
-      ? clipArray(obj.requiredDomains)
-      : undefined,
-    requiredSourceCount:
-      typeof obj.requiredSourceCount === "number" &&
-      Number.isFinite(obj.requiredSourceCount)
-        ? Math.max(1, Math.floor(obj.requiredSourceCount))
-        : undefined,
-    freshnessMatters:
-      typeof obj.freshnessMatters === "boolean"
-        ? obj.freshnessMatters
-        : undefined,
     governingPremise: clip(obj.governingPremise),
     governingPremiseInvalidated:
       obj.governingPremiseInvalidated === true ? true : undefined,
@@ -444,9 +428,12 @@ medium/high: claims matériels nécessitent vérification / réconciliation / ev

 === contradictionCandidate (interne, non autoritaire) ===
 Signal CANDIDAT seulement. Ne s'auto-promouvoit JAMAIS en evidence_backed. Ne décide JAMAIS un Cognitive STOP.
+Ne définit JAMAIS la politique de promotion Evidence (couverture source, fraîcheur, contexte projet).
+Champs autorisés seulement: conflictPresent, claimedEvidenceIds, governingPremise, governingPremiseInvalidated, localImpactOnly, fabricationAttempt.
 conflictPresent=true seulement si un conflit apparent est identifié.
 claimedEvidenceIds: identifiants Evidence déjà existants éventuellement cités — ne PAS inventer d'Evidence.
 Si aucune Evidence réelle n'est identifiable: claimedEvidenceIds=[] et conserver le candidat.
+governingPremiseInvalidated est une hypothèse sémantique, pas une preuve et pas un STOP.
 contradictionRisk CWP n'est PAS une preuve et n'implique PAS contradictionCandidate.

 === AUTORITÉ ===
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index dce956d1..bfeb313e 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -55,15 +55,18 @@ const EPHEMERAL_NOTICE =

 async function deriveProductPathMw3Assessment(
   analysis: IntentAnalysisDto,
+  projectId: string,
 ): Promise<Mw3ContradictionAssessmentInput | null> {
   const candidate = analysis.contradictionCandidate;
   if (!candidate || candidate.conflictPresent !== true) return null;
   const availablePointers = await resolveAvailableContradictionPointers({
+    projectId,
     claimedEvidenceIds: candidate.claimedEvidenceIds,
   });
   return deriveMw3ContradictionAssessment({
     candidate,
     availablePointers,
+    projectId,
     sourceBreadth: analysis.cognitiveWorkload?.sourceBreadth ?? null,
     trustedSfiaProfile: null,
   });
@@ -465,7 +468,10 @@ export async function orchestrateAssistantSend(input: {

   const { analysis, model } = analysisResult;
   const presentation = modeResolution.presentation;
-  const contradictionAssessment = await deriveProductPathMw3Assessment(analysis);
+  const contradictionAssessment = await deriveProductPathMw3Assessment(
+    analysis,
+    project.projectId,
+  );

   // Repository read/search/Git-truth without mutation → F1 (no Cycle/LPS mutation).
   // Deterministic override when the classifier drifts to ambiguous/actionable for pure reads.
diff --git a/projects/sfia-studio/app/features/project-assistant/mw3AvailableEvidence.ts b/projects/sfia-studio/app/features/project-assistant/mw3AvailableEvidence.ts
index 3e393e01..8eae538f 100644
--- a/projects/sfia-studio/app/features/project-assistant/mw3AvailableEvidence.ts
+++ b/projects/sfia-studio/app/features/project-assistant/mw3AvailableEvidence.ts
@@ -1,69 +1,97 @@
 /**
- * MW3 — resolve claimed Evidence IDs against actual available metadata.
+ * MW3 — resolve claimed Evidence IDs against actual OA Evidence,
+ * scoped to the current Project.
  *
- * Fake/tests may substitute the source/Evidence lookup boundary.
- * SFIA still qualifies via disposeContradiction — this module does not
- * decide candidate vs evidence_backed.
+ * Fake/tests may substitute repository storage.
+ * Project-scope filtering, attribution mapping, and freshness metadata
+ * always go through mapOaEvidenceForProject.
  */
 import type { ContradictionEvidencePointer } from "@/lib/nora-cognitive-runtime";
 import type { Evidence } from "@/lib/oa/evidence-review/domain/types";
 import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";

-let testCatalog: ContradictionEvidencePointer[] | null = null;
+export type Mw3TestEvidenceCatalog = {
+  projectId: string;
+  evidence: Evidence[];
+};

-/** Test-only Fake source/Evidence boundary. Never a client DTO field. */
+let testCatalog: Mw3TestEvidenceCatalog | null = null;
+
+/** Test-only Fake Evidence storage. Never a client DTO field. */
 export function setMw3AvailableEvidenceForTests(
-  pointers: ContradictionEvidencePointer[] | null,
+  catalog: Mw3TestEvidenceCatalog | null,
 ): void {
-  testCatalog = pointers;
+  testCatalog = catalog;
+}
+
+/**
+ * Map OA Evidence onto a contradiction pointer only when bound to the
+ * current Project. Returns null for missing/blank/mismatched project binding.
+ */
+export function mapOaEvidenceForProject(
+  evidence: Evidence,
+  currentProjectId: string,
+): ContradictionEvidencePointer | null {
+  const current = currentProjectId.trim();
+  if (!current) return null;
+  const bound = evidence.bindings?.projectId?.trim() ?? "";
+  if (!bound || bound !== current) return null;
+
+  const source = evidence.source?.trim() ?? "";
+  const attributable =
+    source.length > 0 &&
+    (evidence.status === "available" || evidence.status === "verified");
+
+  return {
+    evidenceId: evidence.evidenceId,
+    sourceId: source || "unattributed",
+    domain: current,
+    freshness: evidence.freshness ?? "unknown",
+    attributable,
+    fabricated: false,
+  };
 }

 export async function resolveAvailableContradictionPointers(input: {
+  projectId: string;
   claimedEvidenceIds: string[];
 }): Promise<ContradictionEvidencePointer[]> {
+  const projectId = input.projectId.trim();
   const claimed = input.claimedEvidenceIds
     .map((id) => id.trim())
     .filter(Boolean);
-  if (claimed.length === 0) return [];
+  if (!projectId || claimed.length === 0) return [];

   const resolved: ContradictionEvidencePointer[] = [];
   for (const evidenceId of claimed) {
-    const fromTest = testCatalog?.find((p) => p.evidenceId === evidenceId);
-    if (fromTest) {
-      resolved.push({ ...fromTest });
-      continue;
-    }
-    const fromOa = await lookupOaEvidence(evidenceId);
-    if (fromOa) resolved.push(fromOa);
+    const evidence = await lookupEvidenceRecord(evidenceId, projectId);
+    if (!evidence) continue;
+    const pointer = mapOaEvidenceForProject(evidence, projectId);
+    if (pointer) resolved.push(pointer);
   }
   return resolved;
 }

-async function lookupOaEvidence(
+async function lookupEvidenceRecord(
   evidenceId: string,
-): Promise<ContradictionEvidencePointer | null> {
+  currentProjectId: string,
+): Promise<Evidence | null> {
+  if (
+    testCatalog &&
+    testCatalog.projectId.trim() === currentProjectId.trim()
+  ) {
+    const fromTest = testCatalog.evidence.find(
+      (item) => item.evidenceId === evidenceId,
+    );
+    if (fromTest) return fromTest;
+  }
+
   const oa = getRuntimeApplicationService().oa;
-    const repository = oa?.evidenceReviewServices?.repository;
-    if (!repository) return null;
-    try {
-      const evidence = await repository.findById(evidenceId);
-    if (!evidence) return null;
-    return mapOaEvidence(evidence);
+  const repository = oa?.evidenceReviewServices?.repository;
+  if (!repository) return null;
+  try {
+    return (await repository.findById(evidenceId)) ?? null;
   } catch {
     return null;
   }
 }
-
-function mapOaEvidence(evidence: Evidence): ContradictionEvidencePointer {
-  const attributable =
-    Boolean(evidence.source?.trim()) &&
-    (evidence.status === "available" || evidence.status === "verified");
-  return {
-    evidenceId: evidence.evidenceId,
-    sourceId: evidence.source,
-    domain: evidence.bindings.projectId ? "project" : "unknown",
-    freshness: evidence.freshness ?? "unknown",
-    attributable,
-    fabricated: false,
-  };
-}
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/deriveMw3Assessment.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/deriveMw3Assessment.ts
index 04e381db..e5685966 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/deriveMw3Assessment.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/deriveMw3Assessment.ts
@@ -2,29 +2,38 @@
  * MW3 — derive contradictionAssessment from an untrusted cognitive candidate
  * plus actual available Evidence/source pointers.
  *
- * Model/candidate assertions NEVER self-promote to evidence_backed.
- * Promotion remains exclusive to disposeContradiction.
+ * MODEL CANDIDATE ≠ EVIDENCE POLICY.
+ * Promotion policy is Studio-owned. disposeContradiction remains the
+ * exclusive candidate vs evidence_backed controller.
  */
 import type { ContradictionEvidencePointer } from "./contradictionDisposition";
 import type { Mw3ContradictionAssessmentInput } from "./runNoraCognitiveTurn";
 import type { CognitiveStrategyClass } from "./cognitiveWorkloadPolicy";

-/** Untrusted cognitive candidate — not Evidence, not Truth C, not a final STOP. */
+/**
+ * Untrusted cognitive candidate — not Evidence, not Truth C, not STOP,
+ * and not promotion policy.
+ */
 export type Mw3ContradictionCandidateSignal = {
   conflictPresent: boolean;
   claimedEvidenceIds: string[];
-  requiredDomains?: string[];
-  requiredSourceCount?: number;
-  freshnessMatters?: boolean;
   governingPremise?: string | null;
   governingPremiseInvalidated?: boolean;
   localImpactOnly?: boolean;
   fabricationAttempt?: boolean;
 };

+/** Studio-owned MW3 source-vs-source promotion floor. Model cannot lower this. */
+export const MW3_STUDIO_REQUIRED_SOURCE_COUNT = 2;
+
+/** Studio-owned MW3 freshness enforcement. Model cannot disable this. */
+export const MW3_STUDIO_FRESHNESS_MATTERS = true;
+
 export function deriveMw3ContradictionAssessment(input: {
   candidate: Mw3ContradictionCandidateSignal;
   availablePointers: ContradictionEvidencePointer[];
+  /** Current Project identity — trusted context/domain boundary. */
+  projectId: string;
   sourceBreadth?: "low" | "medium" | "high" | "unknown" | null;
   trustedSfiaProfile?: string | null;
   strategyClass?: CognitiveStrategyClass | null;
@@ -33,6 +42,17 @@ export function deriveMw3ContradictionAssessment(input: {
     return null;
   }

+  const projectId = input.projectId.trim();
+  if (!projectId) {
+    return null;
+  }
+
+  const studioPolicy = {
+    requiredSourceCount: MW3_STUDIO_REQUIRED_SOURCE_COUNT,
+    freshnessMatters: MW3_STUDIO_FRESHNESS_MATTERS,
+    requiredDomains: [projectId],
+  };
+
   const availableById = new Map(
     input.availablePointers.map((p) => [p.evidenceId, p]),
   );
@@ -44,9 +64,7 @@ export function deriveMw3ContradictionAssessment(input: {
       conflict: {
         conflictPresent: true,
         evidencePointers: [],
-        requiredDomains: input.candidate.requiredDomains,
-        requiredSourceCount: input.candidate.requiredSourceCount,
-        freshnessMatters: input.candidate.freshnessMatters,
+        ...studioPolicy,
         fabricationAttempt: true,
         sourceBreadth: input.sourceBreadth ?? null,
         trustedSfiaProfile: input.trustedSfiaProfile ?? null,
@@ -79,9 +97,7 @@ export function deriveMw3ContradictionAssessment(input: {
     conflict: {
       conflictPresent: true,
       evidencePointers,
-      requiredDomains: input.candidate.requiredDomains,
-      requiredSourceCount: input.candidate.requiredSourceCount,
-      freshnessMatters: input.candidate.freshnessMatters,
+      ...studioPolicy,
       sourceBreadth: input.sourceBreadth ?? null,
       trustedSfiaProfile: input.trustedSfiaProfile ?? null,
       strategyClass: input.strategyClass ?? null,
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
index 1836bfd2..9c932338 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -115,6 +115,8 @@ export {
 } from "./cognitiveStop";
 export {
   deriveMw3ContradictionAssessment,
+  MW3_STUDIO_REQUIRED_SOURCE_COUNT,
+  MW3_STUDIO_FRESHNESS_MATTERS,
   type Mw3ContradictionCandidateSignal,
 } from "./deriveMw3Assessment";
 export {

```
