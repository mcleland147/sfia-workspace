# CONTRACT-RESULT-EXTENSIBILITY-IMPLEMENTATION-01 — FINAL PR-READINESS CORRECTION — Review Pack (FULL)

## A. Timestamp
2026-09-18 09:06:09 CEST (+0200)

Pack revision: **CONTRACT-RESULT-EXTENSIBILITY-IMPLEMENTATION-01 — FINAL PR-READINESS CORRECTION**

## B. Git Truth

| Item | Value |
| --- | --- |
| `origin/main` / HEAD | `bb6af3cabef663bd8619b85326dbc205057b7c7d` |
| Branch | `feat/sfia-studio-contract-result-extensibility-01` (**NOT pushed**) |
| Prior handoff | `sfia/review-handoff` @ `5a1e166f919fe82fa8ea2dd2c17c0f35543a618a` |
| Project commit/push/PR | **FORBIDDEN** |
| package-lock | **OUT OF SCOPE** |
| campaign DB | **OUT OF SCOPE** (read-only verify) |
| `git diff --check` | **PASS** |
| typecheck | **PASS** |

### Status (Product; excl. package-lock)
```
M projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts
 M projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrectionPass2.test.ts
 M projects/sfia-studio/app/__tests__/oa/evidence-review/optionBBoundSnapshot.test.ts
 M projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
 M projects/sfia-studio/app/features/project-assistant/f3/index.ts
 M projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
 M projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultAssessment.ts
 M projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemanticEvaluator.ts
 M projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts
 M projects/sfia-studio/app/lib/oa/evidence-review/index.ts
 M projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryClaimEvaluationRepository.ts
 M projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts
 M projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteClaimEvaluationRepository.ts
 M projects/sfia-studio/app/lib/oa/evidence-review/ports/claimEvaluationRepository.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
?? projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSemanticsRegistry.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/contractResultCrBlk04PreserveWhat.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/contractResultDocsWriteRequal.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/requalifyDocsWriteContractResult.ts
?? projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemantics.ts
?? projects/sfia-studio/app/lib/oa/evidence-review/application/docsWriteContractResultSemantic.ts
?? projects/sfia-studio/app/lib/oa/evidence-review/application/resolveCurrentContractResultClaimEvaluation.ts
?? projects/sfia-studio/app/lib/oa/evidence-review/application/tempArtifactContractResultSemantic.ts
?? projects/sfia-studio/convergence/sfia-studio-contract-result-extensibility-framing.md
```

### Diffstat
```
.../contractResultCorrection.test.ts               |   1 +
 .../contractResultCorrectionPass2.test.ts          |   3 +
 .../evidence-review/optionBBoundSnapshot.test.ts   |  16 +
 .../f3/completeBoundedReadOnlyLaunch.ts            |  11 +
 .../app/features/project-assistant/f3/index.ts     |   6 +
 .../w2/materializeW3bProductTerminal.ts            | 186 +++++++++++-
 .../application/contractResultAssessment.ts        |  72 +++--
 .../application/contractResultSemanticEvaluator.ts | 144 ++-------
 .../application/evaluateContractResult.ts          | 331 ++++++++++++++++++---
 .../app/lib/oa/evidence-review/index.ts            |  38 +++
 .../memoryClaimEvaluationRepository.ts             |  17 ++
 .../sqlite/createSqliteEvidenceReviewServices.ts   |   1 +
 .../sqlite/sqliteClaimEvaluationRepository.ts      |  11 +
 .../ports/claimEvaluationRepository.ts             |   2 +
 .../application/recordExecutionResult.ts           |   3 +
 .../app/lib/oa/execution-attempt/domain/types.ts   |   2 +
 .../convergence/sfia-studio-convergence-roadmap.md |   3 +-
 17 files changed, 642 insertions(+), 205 deletions(-)
```

## C. Prior blockers (unchanged CLOSED)

CR-BLK-01 / CR-BLK-02 / CR-BLK-03 — CLOSED (prior correction pack).

## D. CR-BLK-04 — preserve Contract WHAT

### Problem
Candidate injected `expectedOutputs: [BOUNDED_DOCS_WRITE_EO_TEMPLATE]` via `boundedDocsWriteM3ResolutionProfile` into `resolveM3ExecutionContract` → `SupersedeExecutionContract`, contracting business WHAT into a technical EO template.

### Architecture invariant
Execution profile resolves **HOW** (action / capability / constraints / ER coherence).
It MUST NOT silently replace **WHAT** (`expectedOutputs` / business outcome obligations).
Result Semantics Registry evaluates the bound contract; it does not rewrite the contract to make proof easier.

### Correction
1. Removed `expectedOutputs` from `boundedDocsWriteM3ResolutionProfile()`.
2. Removed `expectedOutputs?: string[]` from `M3ResolvedExecutionFields` and all supersede/matching plumbing introduced only for that workaround.
3. Canonical `SupersedeExecutionContract` already preserves predecessor `expectedOutputs` when no override is supplied — now used as designed.
4. `BOUNDED_DOCS_WRITE_EO_TEMPLATE` remains a supported deterministic EO form in the docs_write **Result Semantic** only (when an EC genuinely declares it).

### Before / after
| | Before | After |
| --- | --- | --- |
| Profile | injects EO template | **no** `expectedOutputs` field |
| M3 resolve → supersede | passes EO override | **omits** EO → prior WHAT preserved |
| Attempt 3 | strict NOT_PROVEN | **unchanged** strict NOT_PROVEN |

### Profile after correction
```ts
export function boundedDocsWriteM3ResolutionProfile(): M3ResolvedExecutionFields {
  return {
    action: M4_BOUNDED_DOCS_WRITE_ACTION,
    target: M4_BOUNDED_DOCS_WRITE_TARGET,
    requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
    reversibility: "reversible",
    scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
    constraints: [
      "BOUNDED DOCS-WRITE",
      "PATH_ALLOWLIST_ONLY",
      "TEXT_DOCS_ONLY",
      "NO_DELETE",
      "NO_COMMIT",
      "NO_GIT_REMOTE",
      "NO_PUSH",
      "NO_PR",
      "NO_MERGE",
      "GATE D REQUIRED",
      "NO WILDCARD",
    ],
    stopConditions: [
      "AUTHORITY_DENIED",
      "CONTEXT_STALE",
      "DECISION_NOT_CURRENT",
      "GATE_D_REQUIRED",
      "REAL_BOUNDARY_DISABLED",
      "BASE_SHA_DRIFT",
      "PATH_ESCAPE",
      "OUT_OF_SCOPE_WRITE",
    ],
    executionWindowClass: DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
    evidenceRequirements: [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS],
  };
}


```

### CR-BLK-04 focused diff
```diff

```

## E. Attempt 3 truth (unchanged; not rewritten)

| CE | status | supersedes |
| --- | --- | --- |
| `clm:w3b:b62e7e34320e78ea` | not_proven | — |
| `clm:docs-write:xat:w3a:c4c5670edb4658cc` | pass (historical permissive) | W3B |
| `clm:docs-write:strict-eo-v1:xat:w3a:c4c5670edb4658cc` | **not_proven** (current) | docs-write |

Attempts **3→3**. ZERO REAL. Bound free-form / conformité EO gap remains open — honest NOT_PROVEN.

## F. Tests

Focused suite **123 passed** including:
- `contractResultCrBlk04PreserveWhat.d0.test.ts` (T1–T6)
- registry / requal / CR-BLK-01/02/03 regressions
- temp-artifact / checkpoint F / import boundaries

typecheck **PASS** · diff-check **PASS** · ZERO REAL

## G. Roadmap tip
```
| **Timestamp maintenance CONTRACT-RESULT-EXTENSIBILITY-IMPLEMENTATION-01** | 2026-09-18 09:10:00 CEST (+0200) — **CONTRACT RESULT EXTENSIBILITY — FINAL PR-READINESS CORRECTION** · EVOL · CRITICAL · Macro **CONTRACT-RESULT-EXTENSIBILITY-IMPLEMENTATION-01** · CR-BLK-01/02/03/04 **CLOSED** · baseline `bb6af3ca` · branche `feat/sfia-studio-contract-result-extensibility-01` · **LOCAL CANDIDATE / NOT INTEGRATED ON MAIN** · docs-write M3 profile resolves **HOW** only (no `expectedOutputs` injection; predecessor WHAT preserved by SupersedeExecutionContract) · Attempt 3 current CE strict **not_proven** preserved · Attempts **3→3** · **ZERO REAL** · runtime v3 = **NON ADOPTED** · **≠** Product Journey READY · **≠** Attempt 3 Product PASS · next = Morris Git-integration gate · push/PR/merge **NOT AUTHORIZED** by this tip |
| **Timestamp maintenance historique PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-INTEGRATION-01 (pre-CONTRACT-RESULT-EXTENSIBILITY-IMPLEMENTATION-01)** | *(tip superseded by CONTRACT-RESULT-EXTENSIBILITY-IMPLEMENTATION-01 — HISTORICAL / SUPERSEDED AS CURRENT TIP)* — 2026-09-18 05:15:00 CEST (+0200) — **PRODUCT JOURNEY E2E REAL RECONCILIATION INTEGRATION** · Cycle **15** · Capitalisation / REX + intégration Git · EVOL · CRITICAL · Macro **PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-INTEGRATION-01** · parent campagne **PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01** · baseline pré-intégration `origin/main` `26478b1ea5b010c625f0c6039c969fac5c135cf5` · branche `qa/sfia-studio-product-journey-e2e-real-reconciliation-01` · checkpoints **R1–R12** consolidés · Product fixes **R1/R3/R4/R6/R7/R8/R10** = intégration candidate this PR · Attempt 1 FAIL · Attempt 2 FAIL Authentication required · Attempt 3 Cursor REAL **technical SUCCESS** · bounded docs_write filesystem effect + Artifact Evidence **PROVEN** in M4 isolated WT · Product Result remains **UNCLAIMED** · blocker = **ContractResult extensibility / Evidence wiring** (`no_applicable_contract_result_rule` for `cursor.docs_write.apply`) · capitalisation `projects/sfia-studio/convergence/product-journey-e2e-real-reconciliation-01-capitalization.md` · **ZERO REAL** this integration macro · runtime v3 = **NON ADOPTED** · global L5 = **NOT ADOPTED** · **≠** Product Journey E2E READY / COMPLETE · **≠** ContractResult docs_write PASS · **≠** runtime v3 ADOPTED · next after integration verified = **R13 — Contract Result extensibility framing — ZERO REAL** · **NOT STARTED / NOT AUTHORIZED** by this tip · repository lifecycle = **RESOLVE FROM GIT / PR evidence** |
```

## H. Framing header
```
# SFIA Studio — Contract Result Extensibility — Framing Pack

| Métadonnée | Valeur |
| --- | --- |
| **Rôle** | Pack de **framing / décision technique** — extensibilité ContractResult |
| **Statut** | **ADOPTED BY MORRIS — IMPLEMENTATION IN PROGRESS / NOT YET INTEGRATED ON MAIN** |
| **Macro** | `CONTRACT-RESULT-EXTENSIBILITY-FRAMING-01` (R13) |
| **Parent** | `PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01` |
| **Horodatage création** | 2026-09-18 06:15:00 CEST (+0200) |
| **Baseline Git** | `origin/main` `bb6af3cabef663bd8619b85326dbc205057b7c7d` (PR **#501** MERGED / POST-MERGE VERIFIED) |
| **Branche locale framing (historique)** | `arch/sfia-studio-contract-result-extensibility-framing-01` |
| **Branche locale implementation (non poussée)** | `feat/sfia-studio-contract-result-extensibility-01` |
| **Cycle** | Delivery / architecture implementation · **EVOL** · **CRITICAL** |
| **CKC** | `ckc:studio:technical-architecture` — CONTENT VALIDATED · **aucune autorité d’exécution** |
| **runtime v3** | **NON ADOPTED** |
| **global L5** | **NOT ADOPTED** |
| **REAL / Execute / new Attempt** | **ZERO** this macro |
| **Horodatage décision Morris** | 2026-09-18 — ADOPT RESULT SEMANTICS REGISTRY (server-owned static + frozen RB multi-Evidence AND + explicit CE supersession + A+B one ZERO-REAL macro + success REAL provenance adapt if non-structural) |
| **Implémentation locale** | `feat/sfia-studio-contract-result-extensibility-01` — registry + docs_write #2 + CR-BLK-01/02/03/04 closed · Execution profile resolves **HOW** only (must not inject/replace `expectedOutputs`) · Attempt 3 current CE `clm:docs-write:strict-eo-v1:…` **not_proven** (evidence gap) — **NOT integrated on main** |
| **Anti-claims** | ≠ Product Journey READY/COMPLETE · ≠ Attempt 3 Product PASS under strict EO · ≠ generic ContractResult all effect classes · ≠ Git/PR/CI semantics · ≠ runtime v3 ADOPTED · ≠ integrated on main |

---

## 1. Context / trigger

```

## I. Claims / reserves / verdict

PROVEN: CR-BLK-01..04 closed · Contract WHAT preserved on docs-write M3 resolve · Attempt 3 strict not_proven preserved · ZERO REAL

NOT CLAIMED: Attempt 3 PASS · Product Journey READY · generic CR all classes · v3 · project Git authorized

RESERVE: Attempt 3 EO conformité evidence gap remains acceptance-only.

**VERDICT: CONTRACT RESULT EXTENSIBILITY A+B — ALL CRITICAL REVIEW BLOCKERS CLOSED — CONTRACT WHAT PRESERVED — ATTEMPT 3 STRICT NOT_PROVEN TRUTH PRESERVED — READY FOR MORRIS GIT-INTEGRATION GATE**

## J. Candidate commit scope (staged-readiness; NOT committed)

Include Product registry/docs_write/supersession/wiring + CR-BLK-04 + framing + Roadmap + tests.
Exclude: `package-lock.json`, `.tmp-sfia-review/**`, campaign DB / M4 WTs.

---

## K. FULL DIFF — modified tracked Product files
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts
index 62fdc039..fbb010b6 100644
--- a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts
@@ -313,6 +313,7 @@ describe("W3-B contract result correction proofs", () => {
         }),
         findByIdempotencyKey: async () => null,
         exists: async () => true,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrectionPass2.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrectionPass2.test.ts
index 5f41d2f3..e786e234 100644
--- a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrectionPass2.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrectionPass2.test.ts
@@ -141,12 +141,14 @@ describe("W3-B correction pass 2", () => {
         findById: async () => null,
         findByIdempotencyKey: async () => null,
         exists: async () => false,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
       { nowIso: () => "2026-08-24T00:00:00.000Z" },
       { append: () => {} },
       { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:1" },
+      { findById: async (id: string) => (id === goodEvidence.evidenceId ? goodEvidence : null) },
     ).execute({
       claimEvaluationId: "clm:w3b:unknown",
       idempotencyKey: "idem:ce:unknown",
@@ -286,6 +288,7 @@ describe("W3-B correction pass 2", () => {
         }),
         findByIdempotencyKey: async () => null,
         exists: async () => true,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/optionBBoundSnapshot.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/optionBBoundSnapshot.test.ts
index 60c09d54..517b5813 100644
--- a/projects/sfia-studio/app/__tests__/oa/evidence-review/optionBBoundSnapshot.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/optionBBoundSnapshot.test.ts
@@ -298,12 +298,14 @@ describe("Option B — Contract Result snapshot-only + freshness", () => {
         findById: async () => null,
         findByIdempotencyKey: async () => null,
         exists: async () => false,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
       { nowIso: () => "2026-08-24T00:00:00.000Z" },
       { append: () => {} },
       { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:1" },
+      { findById: async (id: string) => (id === evidence.evidenceId ? evidence : null) },
     ).execute({
       claimEvaluationId: "clm:w3b:missing-snap",
       idempotencyKey: "idem:ce:missing-snap",
@@ -350,12 +352,14 @@ describe("Option B — Contract Result snapshot-only + freshness", () => {
         findById: async () => null,
         findByIdempotencyKey: async () => null,
         exists: async () => false,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
       { nowIso: () => "2026-08-24T00:00:00.000Z" },
       { append: () => {} },
       { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:1" },
+      { findById: async (id: string) => (id === evidence.evidenceId ? evidence : null) },
     ).execute({
       claimEvaluationId: "clm:w3b:corrupt-snap",
       idempotencyKey: "idem:ce:corrupt-snap",
@@ -582,6 +586,7 @@ describe("Option B — Confirm exact binding", () => {
         }),
         findByIdempotencyKey: async () => null,
         exists: async () => true,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
@@ -740,6 +745,7 @@ describe("Option B — Confirm exact binding", () => {
         }),
         findByIdempotencyKey: async () => null,
         exists: async () => true,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
@@ -898,6 +904,7 @@ describe("Option B — Confirm exact binding", () => {
         }),
         findByIdempotencyKey: async () => null,
         exists: async () => true,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
@@ -1168,12 +1175,14 @@ describe("Option B micro-correction OB01 — canonical snapshot validation", ()
         findById: async () => null,
         findByIdempotencyKey: async () => null,
         exists: async () => false,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
       { nowIso: () => "2026-08-24T00:00:00.000Z" },
       { append: () => {} },
       { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:1" },
+      { findById: async (id: string) => (id === evidence.evidenceId ? evidence : null) },
     ).execute({
       claimEvaluationId: "clm:w3b:ob01",
       idempotencyKey: `idem:ce:ob01:${JSON.stringify(snapOverrides).slice(0, 40)}`,
@@ -1205,12 +1214,14 @@ describe("Option B micro-correction OB01 — canonical snapshot validation", ()
         findById: async () => null,
         findByIdempotencyKey: async () => null,
         exists: async () => false,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
       { nowIso: () => "2026-08-24T00:00:00.000Z" },
       { append: () => {} },
       { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:1" },
+      { findById: async (id: string) => (id === evidence.evidenceId ? evidence : null) },
     ).execute({
       claimEvaluationId: "clm:w3b:ob01-proj",
       idempotencyKey: "idem:ce:ob01-proj",
@@ -1240,12 +1251,14 @@ describe("Option B micro-correction OB01 — canonical snapshot validation", ()
         findById: async () => null,
         findByIdempotencyKey: async () => null,
         exists: async () => false,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
       { nowIso: () => "2026-08-24T00:00:00.000Z" },
       { append: () => {} },
       { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:1" },
+      { findById: async (id: string) => (id === evidence.evidenceId ? evidence : null) },
     ).execute({
       claimEvaluationId: "clm:w3b:ob01-cycle",
       idempotencyKey: "idem:ce:ob01-cycle",
@@ -1398,6 +1411,7 @@ describe("Option B micro-correction OB01 — canonical snapshot validation", ()
           }),
           findByIdempotencyKey: async () => null,
           exists: async () => true,
+        listByProject: async () => [],
           create: async () => {},
           update: async () => {},
         },
@@ -1565,6 +1579,7 @@ describe("Option B micro-correction OB02 — real attempt.status at Confirm", ()
         }),
         findByIdempotencyKey: async () => null,
         exists: async () => true,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
@@ -1747,6 +1762,7 @@ describe("Option B micro-correction OB03 — W3-B freshness at Confirm", () => {
         }),
         findByIdempotencyKey: async () => null,
         exists: async () => true,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts b/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
index 1c9739ce..1d3c5ae7 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
@@ -307,6 +307,16 @@ export async function completeBoundedReadOnlyLaunch(input: {
   }

   const resultRef = resultRefForAttempt(input.attempt.attemptId);
+  const successDiagnostic = buildProcessFailureDiagnostic({
+    observation,
+    boundaryProofMode:
+      input.services.realBoundary?.launchPort.boundaryProofMode ===
+        "cursor_real" ||
+      input.services.realBoundary?.launchPort.boundaryProofMode ===
+        "deterministic_fake"
+        ? input.services.realBoundary.launchPort.boundaryProofMode
+        : undefined,
+  });
   const recorded = await input.services.recordExecutionResult.execute({
     attemptId: input.attempt.attemptId,
     adapterId: M4_REAL_GATEWAY_ADAPTER_ID,
@@ -314,6 +324,7 @@ export async function completeBoundedReadOnlyLaunch(input: {
     technicalExitCode: 0,
     durationMs: observation.durationMs,
     expectedAttemptVersion: input.attempt.version,
+    processDiagnostic: successDiagnostic,
   });
   if (!recorded.ok || !recorded.attempt) {
     return {
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/index.ts b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
index eece03eb..e5df860c 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/index.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
@@ -111,3 +111,9 @@ export {
   createF3TestExecutionAdapter,
 } from "./fixtureAgent";
 export { createAttemptReaderBridge } from "./attemptReaderBridge";
+export { BOUNDED_DOCS_WRITE_EO_TEMPLATE } from "@/lib/oa/evidence-review";
+export { requalifyDocsWriteContractResult } from "../w2/requalifyDocsWriteContractResult";
+export type {
+  RequalifyDocsWriteContractResultInput,
+  RequalifyDocsWriteContractResultResult,
+} from "../w2/requalifyDocsWriteContractResult";
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
index ad829eb5..dcd71f2f 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
@@ -2,13 +2,17 @@
  * W3-B FC-12 — Materialize + rehydrate Product Terminal from durable facts.
  * Ingest all terminals → ReviewBundle → EvaluateContractResult → FC-11 projection.
  * W3-C: after successful projection, consume Evidence via post-Evidence loop (no re-ingest).
+ * Docs-write: freeze rb:docs-write + evaluate docs-write CE (may supersede w3b CE).
  */
 import { createHash } from "node:crypto";
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
 import type { ExecutionContract } from "@/lib/oa/execution-contract";
 import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
+import { M4_BOUNDED_DOCS_WRITE_ACTION } from "@/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent";
 import type { ClaimEvaluation, Evidence, ReviewBundle } from "@/lib/oa/evidence-review";
+import { resolveCurrentContractResultClaimEvaluation } from "@/lib/oa/evidence-review";
+import { requalifyDocsWriteContractResult } from "./requalifyDocsWriteContractResult";
 import {
   projectW3bProductTerminal,
   productReservationsForAttempt,
@@ -118,6 +122,95 @@ function projectFromFacts(input: {
   return projectW3bProductTerminal(input);
 }

+function boundActionOf(
+  attempt: ExecutionAttempt,
+  contract: ExecutionContract,
+): string {
+  return (
+    attempt.boundExecutionContract?.semanticMaterial?.action ?? contract.action
+  );
+}
+
+async function materializeDocsWriteProductTerminal(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly attempt: ExecutionAttempt;
+  readonly contract: ExecutionContract;
+}): Promise<MaterializeW3bProductTerminalResult> {
+  const services = input.oa.evidenceReviewServices!;
+  const requalified = await requalifyDocsWriteContractResult({
+    evidenceReviewServices: services,
+    attempt: input.attempt,
+    contract: input.contract,
+    actor: LOCAL_PILOTE_ACTOR,
+  });
+  if (!requalified.ok) {
+    return {
+      ok: false,
+      code: requalified.code,
+      message: requalified.message,
+    };
+  }
+
+  const segment = input.attempt.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
+  const evidenceId = `ev:docs-write:${segment}`.slice(0, 128);
+  const evidence = await services.evidenceReader.findById(evidenceId);
+
+  const product = projectFromFacts({
+    attempt: input.attempt,
+    contract: input.contract,
+    evidence: evidence ?? null,
+    reviewBundle: requalified.reviewBundle,
+    claimEvaluation: requalified.claimEvaluation,
+  });
+
+  const reusedFromIdempotency = Boolean(requalified.reusedFromIdempotencyKey);
+
+  if (product.evidenceId) {
+    const existing = await findExistingW3cPostEvidence({
+      oa: input.oa,
+      projectId: input.projectId,
+      evidenceId: product.evidenceId,
+      attemptId: input.attempt.attemptId,
+    });
+    if (existing) {
+      return {
+        ok: true,
+        reusedFromIdempotency,
+        product,
+        postEvidence: existing,
+      };
+    }
+    const rehydrated = await rehydrateW3cPostEvidenceFromLps({
+      oa: input.oa,
+      projectId: input.projectId,
+      product,
+    });
+    if (rehydrated.ok) {
+      return {
+        ok: true,
+        reusedFromIdempotency,
+        product,
+        postEvidence: rehydrated,
+      };
+    }
+  }
+
+  const postEvidence = await runW3cPostEvidenceLoop({
+    oa: input.oa,
+    projectId: input.projectId,
+    attemptId: input.attempt.attemptId,
+    product,
+  });
+
+  return {
+    ok: true,
+    reusedFromIdempotency,
+    product,
+    postEvidence,
+  };
+}
+
 /** Write path — ingest Evidence + RB + Contract Result CE + project. */
 export async function materializeW3bProductTerminal(input: {
   readonly oa: RuntimeOaStack;
@@ -134,6 +227,26 @@ export async function materializeW3bProductTerminal(input: {
   const loaded = await loadAttemptAndContract(input);
   if (!loaded.ok) return loaded;
   const { attempt, contract } = loaded;
+
+  // Docs-write Product claim path only when Artifact Evidence exists (typically
+  // succeeded REAL/fixture ingest). Failed docs_write Attempts without Artifact
+  // Evidence keep the technical W3-B materialize path for recovery/UNCLAIMED.
+  if (boundActionOf(attempt, contract) === M4_BOUNDED_DOCS_WRITE_ACTION) {
+    const servicesProbe = input.oa.evidenceReviewServices!;
+    const segment = attempt.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
+    const docsWriteEvidenceId = `ev:docs-write:${segment}`.slice(0, 128);
+    const docsWriteEvidence =
+      await servicesProbe.evidenceReader.findById(docsWriteEvidenceId);
+    if (docsWriteEvidence) {
+      return materializeDocsWriteProductTerminal({
+        oa: input.oa,
+        projectId: input.projectId,
+        attempt,
+        contract,
+      });
+    }
+  }
+
   const ids = w3bEvidenceIdentity(attempt.attemptId);
   const services = input.oa.evidenceReviewServices!;

@@ -255,13 +368,13 @@ export async function materializeW3bProductTerminal(input: {
     reviewBundle: frozenReviewBundle,
   });

-    if (!evaluated.ok) {
-      // Surface shape reason in test/dev failures.
-      const detail = evaluated.error.internalCauseRef ?? evaluated.error.message;
-      return {
-        ok: false,
-        code: evaluated.error.detailCode,
-        message: detail,
+  if (!evaluated.ok) {
+    // Surface shape reason in test/dev failures.
+    const detail = evaluated.error.internalCauseRef ?? evaluated.error.message;
+    return {
+      ok: false,
+      code: evaluated.error.detailCode,
+      message: detail,
       product: projectFromFacts({
         attempt,
         contract,
@@ -342,16 +455,59 @@ export async function rehydrateW3bProductTerminal(input: {
   const loaded = await loadAttemptAndContract(input);
   if (!loaded.ok) return loaded;
   const { attempt, contract } = loaded;
-  const ids = w3bEvidenceIdentity(attempt.attemptId);
   const services = input.oa.evidenceReviewServices!;
+  const isDocsWrite =
+    boundActionOf(attempt, contract) === M4_BOUNDED_DOCS_WRITE_ACTION;

-  const evidence = await services.evidenceReader.findById(ids.evidenceId);
-  const reviewBundle = await services.reviewBundleReader.findById(
-    ids.reviewBundleId,
-  );
-  const claimEvaluation = await services.claimEvaluationReader.findById(
-    ids.claimEvaluationId,
-  );
+  let evidence: Evidence | null = null;
+  let reviewBundle: ReviewBundle | null = null;
+  let claimEvaluation: ClaimEvaluation | null = null;
+
+  if (isDocsWrite) {
+    const segment = attempt.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
+    const evidenceId = `ev:docs-write:${segment}`.slice(0, 128);
+    const reviewBundleId = `rb:docs-write:${segment}`.slice(0, 128);
+    evidence = (await services.evidenceReader.findById(evidenceId)) ?? null;
+    reviewBundle =
+      (await services.reviewBundleReader.findById(reviewBundleId)) ?? null;
+    const resolved = await resolveCurrentContractResultClaimEvaluation({
+      repo: services.claimEvaluationRepository,
+      projectId: input.projectId,
+      executionAttemptId: attempt.attemptId,
+    });
+    if (resolved.status === "ambiguous") {
+      return {
+        ok: false,
+        code: "CONTRACT_RESULT_CLAIM_LINEAGE_AMBIGUOUS",
+        message: `Multiple active ContractResult CEs — fail-closed: ${resolved.claimEvaluationIds.join(",")}`,
+      };
+    }
+    claimEvaluation =
+      resolved.status === "one" ? resolved.claimEvaluation : null;
+  } else {
+    const ids = w3bEvidenceIdentity(attempt.attemptId);
+    evidence = (await services.evidenceReader.findById(ids.evidenceId)) ?? null;
+    reviewBundle =
+      (await services.reviewBundleReader.findById(ids.reviewBundleId)) ?? null;
+    const resolved = await resolveCurrentContractResultClaimEvaluation({
+      repo: services.claimEvaluationRepository,
+      projectId: input.projectId,
+      executionAttemptId: attempt.attemptId,
+    });
+    if (resolved.status === "ambiguous") {
+      return {
+        ok: false,
+        code: "CONTRACT_RESULT_CLAIM_LINEAGE_AMBIGUOUS",
+        message: `Multiple active ContractResult CEs — fail-closed: ${resolved.claimEvaluationIds.join(",")}`,
+      };
+    }
+    claimEvaluation =
+      resolved.status === "one"
+        ? resolved.claimEvaluation
+        : ((await services.claimEvaluationReader.findById(
+            ids.claimEvaluationId,
+          )) ?? null);
+  }

   if (!evidence || !reviewBundle || !claimEvaluation) {
     return {
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultAssessment.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultAssessment.ts
index a0968637..10cd5433 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultAssessment.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultAssessment.ts
@@ -1,9 +1,11 @@
 /**
  * TD-W3B-02 Option B + ARCH-R02 — deterministic EO/ER assessment for contract-result mode.
  * Identity: (bound semanticFingerprint, kind, ordinal). Material from Attempt snapshot only.
+ * Dispatches to the applicable Result Semantics Registry entry (AND over evidences).
  */
 import type { ExecutionContractSemanticMaterial } from "@/lib/oa/execution-contract";
 import type { Evidence, ExecutionAttemptSnapshot } from "../domain/types";
+import type { ReviewBundleEvidenceSnapshot } from "../domain/reviewBundleTypes";
 import type {
   ContractResultAssessmentProvenance,
   ExpectedOutputAssessment,
@@ -11,27 +13,40 @@ import type {
 } from "../domain/contractResultTypes";
 import { buildContractResultItemId } from "../domain/contractResultTypes";
 import {
-  assessTempArtifactEvidenceRequirement,
-  assessTempArtifactExpectedOutput,
-  resolveApplicableContractResultRule,
-} from "./contractResultSemanticEvaluator";
+  resolveApplicableContractResultSemantics,
+  type ContractResultSemantic,
+} from "./contractResultSemantics";

 export type ContractResultAssessmentInput = {
   /** Bound semantic material from Attempt.boundExecutionContract — not latest EC. */
   readonly semanticMaterial: ExecutionContractSemanticMaterial;
   readonly semanticFingerprint: string;
   readonly attempt: ExecutionAttemptSnapshot;
-  readonly evidence: Evidence;
+  /** @deprecated prefer evidences — single Evidence kept for back-compat call sites. */
+  readonly evidence?: Evidence;
+  readonly evidences?: readonly Evidence[];
   readonly evaluatedAt: string;
   readonly evaluatorRef?: string;
-  readonly frozenEvidenceSnapshot?: {
-    evidenceId: string;
-    evidenceVersion: number;
-    status: string;
-    availability: string;
-  };
+  readonly frozenEvidenceSnapshot?: ReviewBundleEvidenceSnapshot;
+  readonly frozenEvidenceSnapshots?: readonly ReviewBundleEvidenceSnapshot[];
 };

+function resolveEvidences(
+  input: ContractResultAssessmentInput,
+): readonly Evidence[] {
+  if (input.evidences && input.evidences.length > 0) return input.evidences;
+  if (input.evidence) return [input.evidence];
+  return [];
+}
+
+function resolveFrozenSnapshots(
+  input: ContractResultAssessmentInput,
+): readonly ReviewBundleEvidenceSnapshot[] {
+  if (input.frozenEvidenceSnapshots) return input.frozenEvidenceSnapshots;
+  if (input.frozenEvidenceSnapshot) return [input.frozenEvidenceSnapshot];
+  return [];
+}
+
 function provenance(
   input: ContractResultAssessmentInput,
   ruleRef?: string,
@@ -43,14 +58,23 @@ function provenance(
   };
 }

+function resolveSemantic(
+  material: ExecutionContractSemanticMaterial,
+): ContractResultSemantic | null {
+  const resolved = resolveApplicableContractResultSemantics(material);
+  if (resolved.status === "one") return resolved.semantic;
+  return null;
+}
+
 export function assessExpectedOutputs(
   input: ContractResultAssessmentInput,
 ): ExpectedOutputAssessment[] {
   const fp = input.semanticFingerprint;
   const outputs = input.semanticMaterial.expectedOutputs ?? [];
-  const rule = resolveApplicableContractResultRule(input.semanticMaterial);
-  const ruleRef = rule.applicable ? rule.ruleRef : undefined;
+  const semantic = resolveSemantic(input.semanticMaterial);
+  const ruleRef = semantic?.ruleRef;
   const prov = provenance(input, ruleRef);
+  const evidences = resolveEvidences(input);

   return outputs.map((expectation, ordinal) => {
     let result: ExpectedOutputAssessment["result"] = "NOT_PROVEN";
@@ -61,12 +85,13 @@ export function assessExpectedOutputs(
       input.attempt.stopOrigin === "SYSTEM_GOVERNED_STOP"
     ) {
       result = "NOT_PROVEN";
-    } else if (rule.applicable) {
-      result = assessTempArtifactExpectedOutput({
+    } else if (semantic) {
+      result = semantic.assessExpectedOutput({
         expectation,
         ordinal,
         attempt: input.attempt,
-        evidence: input.evidence,
+        evidences,
+        material: input.semanticMaterial,
       });
     }
     return {
@@ -89,9 +114,11 @@ export function assessEvidenceRequirements(
 ): EvidenceRequirementAssessment[] {
   const fp = input.semanticFingerprint;
   const requirements = input.semanticMaterial.evidenceRequirements ?? [];
-  const rule = resolveApplicableContractResultRule(input.semanticMaterial);
-  const ruleRef = rule.applicable ? rule.ruleRef : undefined;
+  const semantic = resolveSemantic(input.semanticMaterial);
+  const ruleRef = semantic?.ruleRef;
   const prov = provenance(input, ruleRef);
+  const evidences = resolveEvidences(input);
+  const frozenSnapshots = resolveFrozenSnapshots(input);

   return requirements.map((requirement, ordinal) => {
     let result: EvidenceRequirementAssessment["result"] = "NOT_PROVEN";
@@ -100,13 +127,14 @@ export function assessEvidenceRequirements(
       input.attempt.status === "timeout"
     ) {
       result = "NOT_SATISFIED";
-    } else if (rule.applicable) {
-      result = assessTempArtifactEvidenceRequirement({
+    } else if (semantic) {
+      result = semantic.assessEvidenceRequirement({
         requirement,
         ordinal,
         attempt: input.attempt,
-        evidence: input.evidence,
-        frozenSnapshot: input.frozenEvidenceSnapshot,
+        evidences,
+        frozenSnapshots,
+        material: input.semanticMaterial,
       });
     }
     return {
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemanticEvaluator.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemanticEvaluator.ts
index 76e5486a..738a3365 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemanticEvaluator.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemanticEvaluator.ts
@@ -1,121 +1,27 @@
 /**
- * W3-B ARCH-R02 — bounded server-owned Contract Result semantic evaluator.
- * No NLP, no resultRef-alone PASS, no Evidence-available-alone ER satisfaction.
+ * W3-B ARCH-R02 — back-compat barrel for Contract Result semantic helpers.
+ * Implementation lives in tempArtifact / docsWrite / registry modules.
  */
-import type { Evidence, EvidenceStatus, ExecutionAttemptSnapshot } from "../domain/types";
-import type { ReviewBundleEvidenceSnapshot } from "../domain/reviewBundleTypes";
-
-export const W3B_TEMP_ARTIFACT_RULE_REF =
-  "w3b-contract-result/product-generate-temporary-artifact-v1" as const;
-
-export const W3B_TEMP_ARTIFACT_OPERATION_KEY =
-  "product:generate-temporary-artifact" as const;
-
-export const W3B_TEMP_ARTIFACT_CAPABILITY = "cap:product-temp-artifact" as const;
-
-export const W3B_TEMP_ARTIFACT_EO_TEMPLATE =
-  "Résultat d'exécution — generate-temporary-artifact" as const;
-
-export const W3B_TEMP_ARTIFACT_ER_KEY = "evreq:generate-temporary-artifact" as const;
-
-/** Governed W3-A execute path mints res:w3a:<hex> — server-owned shape only. */
-const W3A_RESULT_REF_PATTERN = /^res:w3a:[a-f0-9]+$/;
-
-const W3B_USABLE_EVIDENCE_STATUSES = new Set<EvidenceStatus>([
-  "available",
-  "verified",
-]);
-
-/** Positive allowlist — undefined/unknown/stale/aging cannot satisfy ER. */
-const W3B_USABLE_EVIDENCE_FRESHNESS = new Set(["fresh"]);
-
-export type ApplicableContractResultRule =
-  | { readonly applicable: true; readonly ruleRef: typeof W3B_TEMP_ARTIFACT_RULE_REF }
-  | { readonly applicable: false; readonly ruleRef: null };
-
-export function resolveApplicableContractResultRule(
-  material: Pick<
-    { action: string; requiredCapabilities?: string[] },
-    "action" | "requiredCapabilities"
-  >,
-): ApplicableContractResultRule {
-  if (material.action !== W3B_TEMP_ARTIFACT_OPERATION_KEY) {
-    return { applicable: false, ruleRef: null };
-  }
-  if (!material.requiredCapabilities?.includes(W3B_TEMP_ARTIFACT_CAPABILITY)) {
-    return { applicable: false, ruleRef: null };
-  }
-  return { applicable: true, ruleRef: W3B_TEMP_ARTIFACT_RULE_REF };
-}
-
-export function tempArtifactExecutionFactsHold(input: {
-  attempt: ExecutionAttemptSnapshot;
-  evidence: Evidence;
-}): boolean {
-  if (input.attempt.status !== "succeeded") return false;
-  const resultRef = input.attempt.resultRef?.trim();
-  if (!resultRef || !W3A_RESULT_REF_PATTERN.test(resultRef)) return false;
-  return input.evidence.technicalResultRef === resultRef;
-}
-
-/** W3-B bounded ER validity — stale/rejected/unavailable Evidence cannot satisfy ER. */
-export function isW3bContractResultEvidenceUsable(input: {
-  evidence: Evidence;
-  snapshot: ReviewBundleEvidenceSnapshot | undefined;
-}): boolean {
-  const { evidence, snapshot } = input;
-  if (!snapshot) return false;
-  if (snapshot.evidenceId !== evidence.evidenceId) return false;
-  if (snapshot.evidenceVersion !== evidence.version) return false;
-  if (snapshot.availability !== "available") return false;
-  if (!W3B_USABLE_EVIDENCE_STATUSES.has(snapshot.status as EvidenceStatus)) {
-    return false;
-  }
-  if (evidence.availability !== "available") return false;
-  if (!W3B_USABLE_EVIDENCE_STATUSES.has(evidence.status)) return false;
-  if (
-    !evidence.freshness ||
-    !W3B_USABLE_EVIDENCE_FRESHNESS.has(evidence.freshness)
-  ) {
-    return false;
-  }
-  return true;
-}
-
-export function evidenceMatchesFrozenSnapshot(input: {
-  evidence: Evidence;
-  snapshot: ReviewBundleEvidenceSnapshot | undefined;
-}): boolean {
-  return isW3bContractResultEvidenceUsable(input);
-}
-
-export function assessTempArtifactExpectedOutput(input: {
-  expectation: string;
-  ordinal: number;
-  attempt: ExecutionAttemptSnapshot;
-  evidence: Evidence;
-}): "PASS" | "NOT_PROVEN" | "FAIL" {
-  if (input.attempt.status === "failed" || input.attempt.status === "timeout") {
-    return "FAIL";
-  }
-  if (input.ordinal !== 0) return "NOT_PROVEN";
-  if (input.expectation !== W3B_TEMP_ARTIFACT_EO_TEMPLATE) return "NOT_PROVEN";
-  if (!tempArtifactExecutionFactsHold(input)) return "NOT_PROVEN";
-  return "PASS";
-}
-
-export function assessTempArtifactEvidenceRequirement(input: {
-  requirement: string;
-  ordinal: number;
-  attempt: ExecutionAttemptSnapshot;
-  evidence: Evidence;
-  frozenSnapshot: ReviewBundleEvidenceSnapshot | undefined;
-}): "SATISFIED" | "NOT_SATISFIED" | "NOT_PROVEN" {
-  if (input.ordinal !== 0) return "NOT_PROVEN";
-  if (input.requirement !== W3B_TEMP_ARTIFACT_ER_KEY) return "NOT_PROVEN";
-  if (!evidenceMatchesFrozenSnapshot({ evidence: input.evidence, snapshot: input.frozenSnapshot })) {
-    return "NOT_PROVEN";
-  }
-  if (!tempArtifactExecutionFactsHold(input)) return "NOT_SATISFIED";
-  return "SATISFIED";
-}
+export {
+  W3B_TEMP_ARTIFACT_RULE_REF,
+  W3B_TEMP_ARTIFACT_OPERATION_KEY,
+  W3B_TEMP_ARTIFACT_CAPABILITY,
+  W3B_TEMP_ARTIFACT_EO_TEMPLATE,
+  W3B_TEMP_ARTIFACT_ER_KEY,
+  tempArtifactExecutionFactsHold,
+  isW3bContractResultEvidenceUsable,
+  evidenceMatchesFrozenSnapshot,
+  assessTempArtifactExpectedOutput,
+  assessTempArtifactEvidenceRequirement,
+} from "./tempArtifactContractResultSemantic";
+
+export {
+  resolveApplicableContractResultRule,
+  resolveApplicableContractResultSemantics,
+  CONTRACT_RESULT_SEMANTICS,
+  type ApplicableContractResultRule,
+  type ContractResultSemantic,
+  type ContractResultSemanticApplicability,
+  type ContractResultEvidenceSelection,
+  type ResolveApplicableContractResultSemanticsResult,
+} from "./contractResultSemantics";
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts
index 80234cff..ede08b46 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts
@@ -1,6 +1,7 @@
 /**
  * EvaluateContractResult — TD-W3B-01 contract-result ClaimEvaluation owner (FC-12).
  * Server writes canonical status only; claimStatement is audit projection.
+ * Evidence selection is server-owned via Result Semantics Registry.
  */
 import type { ClockPort } from "@/lib/oa/doctrine";
 import type { ExecutionContract } from "@/lib/oa/execution-contract";
@@ -29,6 +30,7 @@ import type { Evidence } from "../domain/types";
 import type { ReviewBundle } from "../domain/reviewBundleTypes";
 import type { EvidenceAuditPort } from "../ports/evidenceAudit";
 import type { ClaimEvaluationRepositoryPort } from "../ports/claimEvaluationRepository";
+import type { EvidenceReaderPort } from "../ports/evidenceReader";
 import type { IdGeneratorPort } from "../ports/idGenerator";
 import {
   assessExpectedOutputs,
@@ -36,7 +38,7 @@ import {
   buildContractResultClaimStatement,
   deriveCanonicalContractResultStatus,
 } from "./contractResultAssessment";
-import { resolveApplicableContractResultRule } from "./contractResultSemanticEvaluator";
+import { resolveApplicableContractResultSemantics } from "./contractResultSemantics";
 import type { ExecutionContractSemanticMaterial } from "@/lib/oa/execution-contract";
 import {
   assertIdempotencyKey,
@@ -51,18 +53,25 @@ export type EvaluateContractResultRequest = {
   actor: ActorReference;
   contract: ExecutionContract;
   attempt: ExecutionAttemptSnapshot;
-  evidence: Evidence;
+  /**
+   * @deprecated optional — server selects from frozen RB; if provided must be among selected.
+   */
+  evidence?: Evidence;
   reviewBundle: ReviewBundle;
+  supersedesClaimEvaluationId?: string;
   correlationId?: string;
   nowIso?: string;
 };

+const SUPERSESSION_CHAIN_MAX = 32;
+
 export class EvaluateContractResult {
   constructor(
     private readonly repo: ClaimEvaluationRepositoryPort,
     private readonly clock: ClockPort,
     private readonly audit: EvidenceAuditPort,
     private readonly ids: IdGeneratorPort,
+    private readonly evidenceReader: EvidenceReaderPort,
   ) {}

   async execute(
@@ -120,7 +129,7 @@ export class EvaluateContractResult {
         return fail("CLAIM_EVALUATION_INVALID", "idempotency_key_too_short");
       }

-      const { contract, attempt, evidence, reviewBundle } = request;
+      const { contract, attempt, reviewBundle } = request;

       if (contract.executionContractId !== attempt.executionContractId) {
         return fail("CLAIM_EVALUATION_INVALID", "contract_attempt_mismatch");
@@ -144,9 +153,6 @@ export class EvaluateContractResult {
         }
       }

-      if (evidence.bindings.executionAttemptId !== attempt.attemptId) {
-        return fail("CLAIM_EVALUATION_INVALID", "evidence_attempt_mismatch");
-      }
       if (reviewBundle.completeness !== "complete") {
         return fail("CLAIM_REVIEW_BUNDLE_INVALID", "review_bundle_incomplete");
       }
@@ -169,30 +175,11 @@ export class EvaluateContractResult {
         );
       }

-      const frozenSnapshot = (reviewBundle.frozenEvidenceSnapshots ?? []).find(
-        (s) => s.evidenceId === evidence.evidenceId,
-      );
-      if (!frozenSnapshot) {
-        return fail(
-          "CLAIM_EVIDENCE_NOT_IN_REVIEW_BUNDLE",
-          "evidence_not_in_frozen_snapshot",
-        );
-      }
-      if (frozenSnapshot.evidenceVersion !== evidence.version) {
-        return fail(
-          "CLAIM_EVIDENCE_VERSION_MISMATCH",
-          "evidence_version_frozen_mismatch",
-        );
-      }
-
+      const frozenSnapshots = reviewBundle.frozenEvidenceSnapshots ?? [];
       const missingSnapshot = !snap;
-      // Historical missing snapshot: do NOT reconstruct EO/ER from latest EC.
-      // Use empty assessment lists + durable not_proven.
       const semanticMaterial = (snap?.semanticMaterial ?? {
         executionContractId: attempt.executionContractId,
-        projectId:
-          evidence.bindings.projectId ??
-          contract.projectId,
+        projectId: contract.projectId,
         action: "",
         target: "",
         scope: "",
@@ -206,9 +193,228 @@ export class EvaluateContractResult {
         idempotencyKey: "",
       }) as ExecutionContractSemanticMaterial;
       const boundFingerprint = snap?.semanticFingerprint ?? "";
-      const applicableRule = missingSnapshot
-        ? ({ applicable: false, ruleRef: null } as const)
-        : resolveApplicableContractResultRule(semanticMaterial);
+
+      const semanticsResolution = missingSnapshot
+        ? ({ status: "none" } as const)
+        : resolveApplicableContractResultSemantics(semanticMaterial);
+
+      if (semanticsResolution.status === "ambiguous") {
+        return fail(
+          "CLAIM_EVALUATION_INVALID",
+          "ambiguous_contract_result_semantics",
+        );
+      }
+
+      const applicableSemantic =
+        semanticsResolution.status === "one"
+          ? semanticsResolution.semantic
+          : null;
+
+      let selectedEvidenceIds: string[] = [];
+      let evidences: Evidence[] = [];
+      let evidenceIncomplete = false;
+
+      if (applicableSemantic) {
+        const selection = applicableSemantic.selectEvidenceIds({
+          material: semanticMaterial,
+          attempt,
+          frozenSnapshots,
+        });
+        selectedEvidenceIds = [...selection.requiredEvidenceIds];
+
+        if (selection.incompleteReason || selectedEvidenceIds.length === 0) {
+          evidenceIncomplete = true;
+        } else {
+          for (const evidenceId of selectedEvidenceIds) {
+            const frozenSnapshot = frozenSnapshots.find(
+              (s) => s.evidenceId === evidenceId,
+            );
+            if (!frozenSnapshot) {
+              return fail(
+                "CLAIM_EVIDENCE_NOT_IN_REVIEW_BUNDLE",
+                "evidence_not_in_frozen_snapshot",
+              );
+            }
+            const loaded = await this.evidenceReader.findById(evidenceId);
+            if (!loaded) {
+              // Id present in frozen RB but unloadable → hard fail (corrupt).
+              return fail(
+                "CLAIM_EVIDENCE_NOT_IN_REVIEW_BUNDLE",
+                "evidence_load_failed_for_frozen_id",
+              );
+            }
+            if (frozenSnapshot.evidenceVersion !== loaded.version) {
+              return fail(
+                "CLAIM_EVIDENCE_VERSION_MISMATCH",
+                "evidence_version_frozen_mismatch",
+              );
+            }
+            evidences.push(loaded);
+          }
+        }
+
+        if (
+          request.evidence &&
+          !selectedEvidenceIds.includes(request.evidence.evidenceId)
+        ) {
+          return fail(
+            "CLAIM_EVALUATION_INVALID",
+            "evidence_not_selected_by_semantic",
+          );
+        }
+
+        // Optional request.evidence: if provided and selected, prefer its instance
+        // when already in the loaded set (identity match); otherwise keep loaded.
+        if (
+          request.evidence &&
+          selectedEvidenceIds.includes(request.evidence.evidenceId) &&
+          !evidences.some((e) => e.evidenceId === request.evidence!.evidenceId)
+        ) {
+          evidences.push(request.evidence);
+        }
+      } else if (request.evidence) {
+        // Zero-match semantic with deprecated evidence still present: keep soft path.
+        const frozenSnapshot = frozenSnapshots.find(
+          (s) => s.evidenceId === request.evidence!.evidenceId,
+        );
+        if (!frozenSnapshot) {
+          return fail(
+            "CLAIM_EVIDENCE_NOT_IN_REVIEW_BUNDLE",
+            "evidence_not_in_frozen_snapshot",
+          );
+        }
+        if (frozenSnapshot.evidenceVersion !== request.evidence.version) {
+          return fail(
+            "CLAIM_EVIDENCE_VERSION_MISMATCH",
+            "evidence_version_frozen_mismatch",
+          );
+        }
+        if (
+          request.evidence.bindings.executionAttemptId !== attempt.attemptId
+        ) {
+          return fail("CLAIM_EVALUATION_INVALID", "evidence_attempt_mismatch");
+        }
+        selectedEvidenceIds = [request.evidence.evidenceId];
+        evidences = [request.evidence];
+      }
+
+      // Supersession validation (before create).
+      if (request.supersedesClaimEvaluationId) {
+        if (!isClaimEvaluationId(request.supersedesClaimEvaluationId)) {
+          return fail(
+            "CLAIM_EVALUATION_INVALID",
+            "supersedes_claim_evaluation_id_invalid",
+          );
+        }
+        if (
+          request.supersedesClaimEvaluationId === request.claimEvaluationId
+        ) {
+          return fail(
+            "CLAIM_EVALUATION_INVALID",
+            "supersedes_self_forbidden",
+          );
+        }
+        const prior = await this.repo.findById(
+          request.supersedesClaimEvaluationId,
+        );
+        if (!prior) {
+          return fail(
+            "CLAIM_EVALUATION_NOT_FOUND",
+            "superseded_claim_missing",
+          );
+        }
+        if (
+          prior.subjectKind !==
+          CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT
+        ) {
+          return fail(
+            "CLAIM_EVALUATION_INVALID",
+            "supersedes_not_contract_result",
+          );
+        }
+        if (
+          prior.contractResultBindings?.executionAttemptId !==
+          attempt.attemptId
+        ) {
+          return fail(
+            "CLAIM_EVALUATION_INVALID",
+            "supersedes_attempt_mismatch",
+          );
+        }
+        if (
+          prior.contractResultBindings?.executionContractId !==
+          attempt.executionContractId
+        ) {
+          return fail(
+            "CLAIM_EVALUATION_INVALID",
+            "supersedes_contract_mismatch",
+          );
+        }
+        const priorProjectId = prior.contractResultBindings?.projectId;
+        const attemptProjectId =
+          attempt.boundExecutionContract?.semanticMaterial?.projectId ??
+          request.contract.projectId;
+        if (
+          priorProjectId &&
+          attemptProjectId &&
+          priorProjectId !== attemptProjectId
+        ) {
+          return fail(
+            "CLAIM_EVALUATION_INVALID",
+            "supersedes_project_mismatch",
+          );
+        }
+        if (
+          prior.contractResultBindings?.executionContractVersion !== undefined &&
+          prior.contractResultBindings.executionContractVersion !==
+            attempt.executionContractVersion
+        ) {
+          return fail(
+            "CLAIM_EVALUATION_INVALID",
+            "supersedes_contract_version_mismatch",
+          );
+        }
+        const priorFp =
+          prior.contractResultBindings?.executionContractSemanticFingerprint;
+        if (
+          priorFp &&
+          boundFingerprint &&
+          priorFp !== boundFingerprint
+        ) {
+          return fail(
+            "CLAIM_EVALUATION_INVALID",
+            "supersedes_semantic_fingerprint_mismatch",
+          );
+        }
+        // Cycle / depth — walk prior chain; refuse cycle OR silent truncation.
+        let cursor: string | undefined = prior.supersedesClaimEvaluationId;
+        let depth = 0;
+        const seen = new Set<string>([prior.claimEvaluationId]);
+        while (cursor && depth < SUPERSESSION_CHAIN_MAX) {
+          if (cursor === request.claimEvaluationId) {
+            return fail(
+              "CLAIM_EVALUATION_INVALID",
+              "supersedes_cycle_detected",
+            );
+          }
+          if (seen.has(cursor)) {
+            return fail(
+              "CLAIM_EVALUATION_INVALID",
+              "supersedes_cycle_detected",
+            );
+          }
+          seen.add(cursor);
+          const next = await this.repo.findById(cursor);
+          cursor = next?.supersedesClaimEvaluationId;
+          depth += 1;
+        }
+        if (cursor) {
+          return fail(
+            "CLAIM_EVALUATION_INVALID",
+            "supersedes_chain_too_deep",
+          );
+        }
+      }

       const fingerprint = fingerprintCommand(
         registerFingerprintBody({
@@ -220,6 +426,12 @@ export class EvaluateContractResult {
           contractVersion: attempt.executionContractVersion,
           semanticFingerprint: boundFingerprint,
           actor: request.actor,
+          ...(request.supersedesClaimEvaluationId
+            ? {
+                supersedesClaimEvaluationId:
+                  request.supersedesClaimEvaluationId,
+              }
+            : {}),
         }),
       );

@@ -246,14 +458,21 @@ export class EvaluateContractResult {
         semanticMaterial,
         semanticFingerprint: boundFingerprint || "missing-bound-snapshot",
         attempt,
-        evidence,
+        evidences,
         evaluatedAt: timestamp,
-        frozenEvidenceSnapshot: frozenSnapshot,
+        frozenEvidenceSnapshots: frozenSnapshots,
       };
-      const expectedOutputAssessments = missingSnapshot
+      const forceNotProven =
+        missingSnapshot ||
+        !applicableSemantic ||
+        evidenceIncomplete;
+
+      const expectedOutputAssessments = forceNotProven
         ? (semanticMaterial.expectedOutputs ?? []).map((expectation, ordinal) => ({
             itemId: {
-              semanticFingerprint: "missing-bound-snapshot",
+              semanticFingerprint: missingSnapshot
+                ? "missing-bound-snapshot"
+                : boundFingerprint || "missing-bound-snapshot",
               itemKind: "EO" as const,
               ordinal,
             },
@@ -266,11 +485,13 @@ export class EvaluateContractResult {
             },
           }))
         : assessExpectedOutputs(assessmentInput);
-      const evidenceRequirementAssessments = missingSnapshot
+      const evidenceRequirementAssessments = forceNotProven
         ? (semanticMaterial.evidenceRequirements ?? []).map(
             (requirement, ordinal) => ({
               itemId: {
-                semanticFingerprint: "missing-bound-snapshot",
+                semanticFingerprint: missingSnapshot
+                  ? "missing-bound-snapshot"
+                  : boundFingerprint || "missing-bound-snapshot",
                 itemKind: "ER" as const,
                 ordinal,
               },
@@ -285,8 +506,7 @@ export class EvaluateContractResult {
           )
         : assessEvidenceRequirements(assessmentInput);

-      // Missing snapshot with empty EO/ER lists: still emit durable not_proven CE.
-      const status = missingSnapshot
+      const status = forceNotProven
         ? "not_proven"
         : deriveCanonicalContractResultStatus({
             attemptStatus: attempt.status,
@@ -294,6 +514,19 @@ export class EvaluateContractResult {
             evidenceRequirementAssessments,
           });

+      const evidenceRefs =
+        selectedEvidenceIds.length > 0
+          ? selectedEvidenceIds
+          : evidences.map((e) => e.evidenceId);
+
+      const notApplicableReason = missingSnapshot
+        ? "historical_attempt_missing_bound_snapshot"
+        : !applicableSemantic
+          ? "no_applicable_contract_result_rule"
+          : evidenceIncomplete
+            ? "contract_result_evidence_incomplete"
+            : undefined;
+
       const claimEvaluation: ClaimEvaluation = {
         schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
         claimEvaluationId: request.claimEvaluationId,
@@ -305,17 +538,13 @@ export class EvaluateContractResult {
           boundContractVersion: attempt.executionContractVersion,
           expectedOutputCount: expectedOutputAssessments.length,
           evidenceRequirementCount: evidenceRequirementAssessments.length,
-          notApplicableReason: missingSnapshot
-            ? "historical_attempt_missing_bound_snapshot"
-            : applicableRule.applicable
-              ? undefined
-              : "no_applicable_contract_result_rule",
+          notApplicableReason,
         }),
         criticality: "non_critical",
         evaluationMethod: "deterministic",
-        ...(applicableRule.applicable ? { ruleRef: applicableRule.ruleRef } : {}),
-        requiredEvidenceRefs: [evidence.evidenceId],
-        providedEvidenceRefs: [evidence.evidenceId],
+        ...(applicableSemantic ? { ruleRef: applicableSemantic.ruleRef } : {}),
+        requiredEvidenceRefs: [...evidenceRefs],
+        providedEvidenceRefs: [...evidenceRefs],
         reviewBundleId: reviewBundle.reviewBundleId,
         reviewBundleVersion: reviewBundle.frozenVersion,
         status,
@@ -336,11 +565,17 @@ export class EvaluateContractResult {
         version: 1,
         idempotencyKey: request.idempotencyKey,
         subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
+        ...(request.supersedesClaimEvaluationId
+          ? {
+              supersedesClaimEvaluationId:
+                request.supersedesClaimEvaluationId,
+            }
+          : {}),
         contractResultBindings: {
           projectId: semanticMaterial.projectId || contract.projectId,
           cycleInstanceId:
             (semanticMaterial.cycleInstanceId ??
-              evidence.bindings.cycleInstanceId ??
+              evidences[0]?.bindings.cycleInstanceId ??
               contract.cycleInstanceId) ?? null,
           executionContractId: attempt.executionContractId,
           executionContractVersion: attempt.executionContractVersion,
@@ -349,7 +584,7 @@ export class EvaluateContractResult {
           executionAttemptId: attempt.attemptId,
           reviewBundleId: reviewBundle.reviewBundleId,
           reviewBundleVersion: reviewBundle.frozenVersion,
-          evidenceRefs: [evidence.evidenceId],
+          evidenceRefs: [...evidenceRefs],
         },
         expectedOutputAssessments,
         evidenceRequirementAssessments,
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/index.ts b/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
index 6cf2853e..4e1133f0 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
@@ -100,6 +100,43 @@ export { EvaluateContractResult } from "./application/evaluateContractResult";
 export type { EvaluateContractResultRequest } from "./application/evaluateContractResult";
 export { projectContractResultVerdict } from "./application/contractResultVerdictProjection";
 export * from "./domain/contractResultTypes";
+export {
+  resolveApplicableContractResultRule,
+  resolveApplicableContractResultSemantics,
+  CONTRACT_RESULT_SEMANTICS,
+  type ApplicableContractResultRule,
+  type ContractResultSemantic,
+  type ContractResultSemanticApplicability,
+  type ContractResultEvidenceSelection,
+  type ResolveApplicableContractResultSemanticsResult,
+} from "./application/contractResultSemantics";
+export {
+  W3B_TEMP_ARTIFACT_RULE_REF,
+  W3B_TEMP_ARTIFACT_OPERATION_KEY,
+  W3B_TEMP_ARTIFACT_CAPABILITY,
+  W3B_TEMP_ARTIFACT_EO_TEMPLATE,
+  W3B_TEMP_ARTIFACT_ER_KEY,
+  tempArtifactExecutionFactsHold,
+  isW3bContractResultEvidenceUsable,
+  evidenceMatchesFrozenSnapshot,
+  assessTempArtifactExpectedOutput,
+  assessTempArtifactEvidenceRequirement,
+} from "./application/tempArtifactContractResultSemantic";
+export {
+  DOCS_WRITE_CONTRACT_RESULT_RULE_REF,
+  DOCS_WRITE_CONTRACT_RESULT_ER_KEY,
+  BOUNDED_DOCS_WRITE_EO_TEMPLATE,
+  DOCS_WRITE_STRICT_EO_CORRECTION_REF,
+  docsWriteContractResultIdentity,
+  docsWriteArtifactFactsHold,
+  assessDocsWriteExpectedOutput,
+  assessDocsWriteEvidenceRequirement,
+  docsWriteContractResultSemantic,
+} from "./application/docsWriteContractResultSemantic";
+export {
+  resolveCurrentContractResultClaimEvaluation,
+  type ResolveCurrentContractResultClaimEvaluationResult,
+} from "./application/resolveCurrentContractResultClaimEvaluation";
 export { SqliteClaimEvaluationRepository } from "./infrastructure/sqlite/sqliteClaimEvaluationRepository";
 export { ConfirmClaimEvaluation } from "./application/confirmClaimEvaluation";
 export { RejectClaimEvaluation } from "./application/rejectClaimEvaluation";
@@ -401,6 +438,7 @@ export function createInMemoryEvidenceReviewServices(
       clock,
       audit,
       ids,
+      evidenceReader,
     ),
     confirmClaimEvaluation: new ConfirmClaimEvaluation(
       claimEvaluationRepository,
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryClaimEvaluationRepository.ts b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryClaimEvaluationRepository.ts
index 0ee62cab..c3ad2185 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryClaimEvaluationRepository.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryClaimEvaluationRepository.ts
@@ -35,6 +35,23 @@ export class MemoryClaimEvaluationRepository
     return this.store.claims.has(claimEvaluationId);
   }

+  async listByProject(projectId: string): Promise<ClaimEvaluation[]> {
+    const out: ClaimEvaluation[] = [];
+    for (const claim of this.store.claims.values()) {
+      const boundProject = claim.contractResultBindings?.projectId;
+      const provenanceProject = claim.provenance?.projectId;
+      if (boundProject === projectId || provenanceProject === projectId) {
+        out.push(structuredClone(claim));
+      }
+    }
+    return out.sort((a, b) => {
+      const aAt = a.proposedAt ?? "";
+      const bAt = b.proposedAt ?? "";
+      if (aAt !== bAt) return aAt < bAt ? -1 : 1;
+      return a.claimEvaluationId < b.claimEvaluationId ? -1 : 1;
+    });
+  }
+
   async create(
     claim: ClaimEvaluation,
     record?: ClaimEvaluationIdempotencyRecord,
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts
index 2a4b0bec..7a6ebb1b 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts
@@ -243,6 +243,7 @@ export function createSqliteEvidenceReviewServices(
       clock,
       audit,
       ids,
+      evidenceReader,
     ),
     confirmClaimEvaluation: new ConfirmClaimEvaluation(
       claimEvaluationRepository,
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteClaimEvaluationRepository.ts b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteClaimEvaluationRepository.ts
index d8c436ad..ccf8c919 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteClaimEvaluationRepository.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteClaimEvaluationRepository.ts
@@ -76,6 +76,17 @@ export class SqliteClaimEvaluationRepository
     return row?.ok === 1;
   }

+  async listByProject(projectId: string): Promise<ClaimEvaluation[]> {
+    const rows = this.store.db
+      .prepare(
+        `SELECT payload_json FROM oa_claim_evaluations WHERE project_id = ? ORDER BY created_at ASC`,
+      )
+      .all(projectId) as Array<{ payload_json: string }>;
+    return rows.map((row) =>
+      cloneClaim(JSON.parse(row.payload_json) as ClaimEvaluation),
+    );
+  }
+
   async create(
     claim: ClaimEvaluation,
     record?: ClaimEvaluationIdempotencyRecord,
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/ports/claimEvaluationRepository.ts b/projects/sfia-studio/app/lib/oa/evidence-review/ports/claimEvaluationRepository.ts
index b223a667..c7d916ac 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/ports/claimEvaluationRepository.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/ports/claimEvaluationRepository.ts
@@ -17,6 +17,8 @@ export interface ClaimEvaluationRepositoryPort {
     record: ClaimEvaluationIdempotencyRecord;
   } | null>;
   exists(claimEvaluationId: string): Promise<boolean>;
+  /** Contract-result / project scoping — no schema migration required. */
+  listByProject(projectId: string): Promise<ClaimEvaluation[]>;
   create(
     claim: ClaimEvaluation,
     record?: ClaimEvaluationIdempotencyRecord,
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
index e0787a9b..63f588c0 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
@@ -158,6 +158,9 @@ export class RecordExecutionResult {
         technicalExitCode: request.technicalExitCode,
         durationMs: request.durationMs,
         logRefs: request.logRefs ? [...request.logRefs] : attempt.logRefs,
+        ...(request.processDiagnostic
+          ? { processDiagnostic: request.processDiagnostic }
+          : {}),
         updatedAt: timestamp,
         version: attempt.version + 1,
       };
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
index 88a52e28..52bd35f1 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
@@ -274,6 +274,8 @@ export type RecordExecutionResultRequest = {
   technicalExitCode?: number;
   durationMs?: number;
   logRefs?: string[];
+  /** Optional redacted process diagnostic (success path — same shape as failure). */
+  processDiagnostic?: ExecutionAttempt["processDiagnostic"];
   correlationId?: string;
   expectedAttemptVersion?: number;
   nowIso?: string;
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index fbdb6ef0..d3747d85 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,7 +4,8 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
-| **Timestamp maintenance PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-INTEGRATION-01** | 2026-09-18 05:15:00 CEST (+0200) — **PRODUCT JOURNEY E2E REAL RECONCILIATION INTEGRATION** · Cycle **15** · Capitalisation / REX + intégration Git · EVOL · CRITICAL · Macro **PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-INTEGRATION-01** · parent campagne **PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01** · baseline pré-intégration `origin/main` `26478b1ea5b010c625f0c6039c969fac5c135cf5` · branche `qa/sfia-studio-product-journey-e2e-real-reconciliation-01` · checkpoints **R1–R12** consolidés · Product fixes **R1/R3/R4/R6/R7/R8/R10** = intégration candidate this PR · Attempt 1 FAIL · Attempt 2 FAIL Authentication required · Attempt 3 Cursor REAL **technical SUCCESS** · bounded docs_write filesystem effect + Artifact Evidence **PROVEN** in M4 isolated WT · Product Result remains **UNCLAIMED** · blocker = **ContractResult extensibility / Evidence wiring** (`no_applicable_contract_result_rule` for `cursor.docs_write.apply`) · capitalisation `projects/sfia-studio/convergence/product-journey-e2e-real-reconciliation-01-capitalization.md` · **ZERO REAL** this integration macro · runtime v3 = **NON ADOPTED** · global L5 = **NOT ADOPTED** · **≠** Product Journey E2E READY / COMPLETE · **≠** ContractResult docs_write PASS · **≠** runtime v3 ADOPTED · next after integration verified = **R13 — Contract Result extensibility framing — ZERO REAL** · **NOT STARTED / NOT AUTHORIZED** by this tip · repository lifecycle = **RESOLVE FROM GIT / PR evidence** |
+| **Timestamp maintenance CONTRACT-RESULT-EXTENSIBILITY-IMPLEMENTATION-01** | 2026-09-18 09:10:00 CEST (+0200) — **CONTRACT RESULT EXTENSIBILITY — FINAL PR-READINESS CORRECTION** · EVOL · CRITICAL · Macro **CONTRACT-RESULT-EXTENSIBILITY-IMPLEMENTATION-01** · CR-BLK-01/02/03/04 **CLOSED** · baseline `bb6af3ca` · branche `feat/sfia-studio-contract-result-extensibility-01` · **LOCAL CANDIDATE / NOT INTEGRATED ON MAIN** · docs-write M3 profile resolves **HOW** only (no `expectedOutputs` injection; predecessor WHAT preserved by SupersedeExecutionContract) · Attempt 3 current CE strict **not_proven** preserved · Attempts **3→3** · **ZERO REAL** · runtime v3 = **NON ADOPTED** · **≠** Product Journey READY · **≠** Attempt 3 Product PASS · next = Morris Git-integration gate · push/PR/merge **NOT AUTHORIZED** by this tip |
+| **Timestamp maintenance historique PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-INTEGRATION-01 (pre-CONTRACT-RESULT-EXTENSIBILITY-IMPLEMENTATION-01)** | *(tip superseded by CONTRACT-RESULT-EXTENSIBILITY-IMPLEMENTATION-01 — HISTORICAL / SUPERSEDED AS CURRENT TIP)* — 2026-09-18 05:15:00 CEST (+0200) — **PRODUCT JOURNEY E2E REAL RECONCILIATION INTEGRATION** · Cycle **15** · Capitalisation / REX + intégration Git · EVOL · CRITICAL · Macro **PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-INTEGRATION-01** · parent campagne **PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01** · baseline pré-intégration `origin/main` `26478b1ea5b010c625f0c6039c969fac5c135cf5` · branche `qa/sfia-studio-product-journey-e2e-real-reconciliation-01` · checkpoints **R1–R12** consolidés · Product fixes **R1/R3/R4/R6/R7/R8/R10** = intégration candidate this PR · Attempt 1 FAIL · Attempt 2 FAIL Authentication required · Attempt 3 Cursor REAL **technical SUCCESS** · bounded docs_write filesystem effect + Artifact Evidence **PROVEN** in M4 isolated WT · Product Result remains **UNCLAIMED** · blocker = **ContractResult extensibility / Evidence wiring** (`no_applicable_contract_result_rule` for `cursor.docs_write.apply`) · capitalisation `projects/sfia-studio/convergence/product-journey-e2e-real-reconciliation-01-capitalization.md` · **ZERO REAL** this integration macro · runtime v3 = **NON ADOPTED** · global L5 = **NOT ADOPTED** · **≠** Product Journey E2E READY / COMPLETE · **≠** ContractResult docs_write PASS · **≠** runtime v3 ADOPTED · next after integration verified = **R13 — Contract Result extensibility framing — ZERO REAL** · **NOT STARTED / NOT AUTHORIZED** by this tip · repository lifecycle = **RESOLVE FROM GIT / PR evidence** |
 | **Timestamp maintenance historique PRODUCT-DOCS-WRITE-REAL-PASS-POST-MERGE-TRUTH-SYNC-01 (pre-PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-INTEGRATION-01)** | *(tip superseded by PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-INTEGRATION-01 — HISTORICAL / SUPERSEDED AS CURRENT TIP)* — 2026-09-17 18:25:36 CEST (+0200) — **PRODUCT DOCS_WRITE REAL PASS POST-MERGE TRUTH-SYNC** · Cycle **15** · Capitalisation / REX · DOC · CRITICAL · Macro **PRODUCT-DOCS-WRITE-REAL-PASS-POST-MERGE-TRUTH-SYNC-01** · parent macro **PRODUCT-DOCS-WRITE-REAL-PASS-CAPITALISATION-01** · GO Morris post-merge documentary truth-sync #499 **CONSUMED** (local docs + commit only) · PR **#499 MERGED** `docs(sfia-studio): capitalize Product docs-write REAL proof` · head `9981483f8c158bec07364e14e626cdf2c3fd1e34` · merge `3907177f7788d23d640c5bdcd1cee8e01615762f` · parents `b739ddd3826ea4df640e3f34f97a966d85f8d214` + `9981483f8c158bec07364e14e626cdf2c3fd1e34` · capitalisation = **INTEGRATED ON MAIN / POST-MERGE VERIFIED** · pre-merge CI **`35236024162` SUCCESS** · Required Gate **PASS** · post-merge CI **`35245046244` SUCCESS** · Required Gate **PASS** · `headSha=3907177f7788d23d640c5bdcd1cee8e01615762f` · merge lifecycle #499 = **COMPLETED / CONSUMED** · post-merge verification = **PASS** · claim **AUTHENTICATED PRODUCT DOCS_WRITE REAL PROVEN AT TESTED HISTORICAL PROJECT SCOPE** · **ZERO REAL** · Product code **UNCHANGED** · runtime v3 = **NON ADOPTED** · global L5 = **NOT ADOPTED** · **ACTIVE CONSTRUCTION PRIORITY = NORA COGNITIVE COMPLETION** **PRESERVED** · next Product capability candidate = **PRODUCT-JOURNEY-POST-EXECUTION-REPLAN** · **NOT STARTED / NOT AUTHORIZED** by this truth-sync · this documentary truth-sync = **LOCAL CANDIDATE** · Review Handoff publication **PENDING** (distinct Morris remote push gate) · push/PR/merge of this truth-sync = **DISTINCT Morris gates** · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT / origin/main / PR evidence** · **≠** E2E FULL REAL PROVEN · **≠** Product Journey complete to Nora replanning · **≠** docs_write generalized · **≠** Cursor autonomy · **≠** runtime v3 ADOPTED · **≠** global L5 · **≠** new REAL authorization · **≠** PRODUCT-JOURNEY-POST-EXECUTION-REPLAN started · **≠** push/PR/merge authorized by proof |
 | **Timestamp maintenance historique PRODUCT-DOCS-WRITE-REAL-PASS-CAPITALISATION-01 (pre-PRODUCT-DOCS-WRITE-REAL-PASS-POST-MERGE-TRUTH-SYNC-01)** | *(tip superseded by PRODUCT-DOCS-WRITE-REAL-PASS-POST-MERGE-TRUTH-SYNC-01 — HISTORICAL / SUPERSEDED AS CURRENT TIP)* — 2026-09-17 16:15:39 CEST (+0200) — **PRODUCT DOCS_WRITE REAL PASS CAPITALISATION** · Cycle **15** · Capitalisation / REX · DOC · CRITICAL · Macro **PRODUCT-DOCS-WRITE-REAL-PASS-CAPITALISATION-01** · GO capitalisation locale **CONSUMED** · GO Review Handoff + push + PR **CONSUMED** · remédiation gouvernance PR499 in-cycle · Product PR **#498 MERGED** `fix(sfia-studio): close docs-write REAL path and completion` · merge/main `b739ddd3826ea4df640e3f34f97a966d85f8d214` · post-merge CI **`35215299343` SUCCESS** · Required Gate **PASS** · Fresh Authenticated Product Reproof09 REAL = **PASS** · claim **AUTHENTICATED PRODUCT DOCS_WRITE REAL PROVEN AT TESTED HISTORICAL PROJECT SCOPE** · 1 Product Execute / 1 Cursor REAL spawn / 0 retry · exact target `projects/sfia-studio/.sandbox/gestion-de-taches.md` **PASS** · Attempt terminal **`succeeded`** **PASS** · Evidence/ReviewBundle **PASS** · restart/no-relaunch **PASS** · capitalisation asset `projects/sfia-studio/convergence/sfia-studio-product-docs-write-real-pass-capitalisation.md` = **CANDIDATE PR #499 / remote branch / pending merge** · PR **#499** `docs(sfia-studio): capitalize Product docs-write REAL proof` · base `main` @ `b739ddd3826ea4df640e3f34f97a966d85f8d214` · pre-remediation head `f0b7c414394e2bb51ae93ec159027682d0bdc1c4` · runtime v3 = **NON ADOPTED** · global L5 = **NOT ADOPTED** · **ACTIVE CONSTRUCTION PRIORITY = NORA COGNITIVE COMPLETION** **PRESERVED** · next Product capability candidate = **PRODUCT-JOURNEY-POST-EXECUTION-REPLAN** · **NOT STARTED / NOT AUTHORIZED** by this capitalisation · **ZERO REAL** this DOC cycle · Product code **unchanged** · Review Handoff = **PUBLISHED / REMOTE VERIFIED** · pre-remediation handoff `2bd065dfc15ff5577ef83f78feebd05c5738d231` · remediation handoff republish-in-cycle for new HEAD · GO push/PR = **CONSUMED** · PR **#499 OPEN** · merge = **DISTINCT PENDING Morris gate** · **≠** E2E FULL REAL PROVEN · **≠** Product Journey complete to Nora replanning · **≠** docs_write generalized · **≠** Cursor autonomy · **≠** runtime v3 ADOPTED · **≠** global L5 · **≠** new REAL authorization · **≠** push/PR/merge authorized by proof |
 | **Timestamp maintenance historique GCEC-D-CAPABLE-POST-MERGE-DOCUMENTARY-TRUTH-SYNC-01 (pre-PRODUCT-DOCS-WRITE-REAL-PASS-CAPITALISATION-01)** | *(tip superseded by PRODUCT-DOCS-WRITE-REAL-PASS-CAPITALISATION-01)* — 2026-09-13 20:26 CEST (+0200) — **GCEC D-CAPABLE POST-MERGE DOCUMENTARY TRUTH-SYNC** · Cycle **15** · Capitalisation / REX · DOC · CRITICAL · GO **GCEC D-CAPABLE POST-MERGE DOCUMENTARY TRUTH-SYNC — ROADMAP + CAPITALISATION — MAIN 76E2D786 — ZERO REAL** **CONSUMED** · placement GO **USE `projects/sfia-studio/convergence/sfia-studio-gcec-d-capable-post-merge-capitalisation.md` AS GCEC PROJECT CAPITALISATION TARGET** **CONSUMED** · GO **GCEC D-CAPABLE POST-MERGE DOCUMENTARY TRUTH-SYNC — PROJECT GIT INTEGRATION — COMMIT + PUSH + PR + CI + CHATGPT CRITICAL REVIEW — CONDITIONAL MERGE — ZERO REAL** **CONSUMED** · **GCEC lane truth-sync only** (not automatic global Nora top priority) · Product GCEC D-capable chain = **INTEGRATED ON MAIN / POST-MERGE VERIFIED** · integration anchor `origin/main` @ `76e2d7869be439313b1c52bf4083aa105e5c6293` *(milestone post-merge anchor · living Roadmap **≠** permanent HEAD embed · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT / `origin/main` / PR evidence**)* · PR **#481 MERGED** `feat(sfia-studio): integrate GCEC D-capable Product chain` · base `c481610caa3527edabeca8c860ab27c18a6a738e` · head `f42103881ea952f445672ed7781da59a465893d8` · merge `76e2d7869be439313b1c52bf4083aa105e5c6293` · parents `c481610c…` + `f4210388…` · head→merge content delta **ZERO** · source branch `delivery/sfia-studio-gcec-d-ephemeral-secret-bridge` **PRESERVED** @ `f4210388…` · post-merge CI **`34772652845` SUCCESS** (Detect / Build / Required Gate) · Roadmap **intentionally unmodified** by Product PR #481 · remaining debt = documentary drift treated by this documentary package · repository closure requires exact project Git integration and post-merge verification · repository lifecycle = RESOLVE FROM CURRENT GIT / PR EVIDENCE · A/B/C historical REAL **PROVEN AT TESTED SCOPE** **PRESERVED** · Cursor full-capability technical executor = **RO REAL-BACKED AT TESTED SCOPE** · cross-EC C→D continuity = **DETERMINISTICALLY PROVEN + REAL-BACKED BY D CAMPAIGN AT TESTED SCOPE** (VERIFIED prior Evidence + fresh RepositoryRead · ≠ ambient trust · ≠ blanket A→E) · D / `github.pr.create` = **REAL PROVEN AT TESTED SCOPE** · E / `github.pr.merge` = **REAL NOT PROVEN / NOT AUTHORIZED BY THIS CYCLE** · phase-scoped ExecutionContracts = **adopted construction trajectory** (one EC = one bounded execution intent · multiple sequential ECs may follow durable truth · A→D harness = proof/capability harness **≠** normative runtime orchestration · no monolithic A→D replay required as normative precondition for D or E) · technical capability **≠** execution authority · protected Git effects retain gates/Confirmations/authority · runtime v3 = **NON ADOPTED** · global L5 = **NOT ADOPTED** · **ACTIVE CONSTRUCTION PRIORITY = NORA COGNITIVE COMPLETION** (NORA-FIRST unchanged · GCEC ≠ global Studio top priority) · next GCEC continuation (if any) = **DISTINCT Morris GO for E / `github.pr.merge`** — **NOT** default next global capability · **NOT AUTHORIZED** by this DOC cycle · project Git integration GO **CONSUMED** — repository lifecycle = **RESOLVE FROM CURRENT GIT / PR EVIDENCE** · **ZERO GCEC REAL** this documentary integration cycle · **≠** E/merge REAL proven · **≠** merge authorized · **≠** generalized PR/Git autonomy · **≠** production autonomy · **≠** runtime v3 ADOPTED · **≠** global L5 · **≠** method promotion · **≠** Build Doctrine / C1 / v3 framing mutation · **≠** Product mutation · **≠** Nora priority displaced |

```

---

## L. FULL CONTENT — key new / untracked files
```
===== FILE: projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemantics.ts =====
/**
 * Server-owned static Result Semantics Registry for EvaluateContractResult.
 * One engine; many semantics. Unknown / zero-match → soft not_proven.
 * Ambiguous (multiple applicable) → hard fail at EvaluateContractResult.
 */
import type { ExecutionContractSemanticMaterial } from "@/lib/oa/execution-contract";
import type { Evidence, ExecutionAttemptSnapshot } from "../domain/types";
import type { ReviewBundleEvidenceSnapshot } from "../domain/reviewBundleTypes";
import { docsWriteContractResultSemantic } from "./docsWriteContractResultSemantic";
import {
  tempArtifactContractResultSemantic,
  W3B_TEMP_ARTIFACT_RULE_REF,
} from "./tempArtifactContractResultSemantic";

export type ContractResultSemanticApplicability =
  | { applicable: true; ruleRef: string }
  | { applicable: false; ruleRef: null };

export type ContractResultEvidenceSelection = {
  readonly requiredEvidenceIds: readonly string[];
  /** fail-closed reason if selection incomplete */
  readonly incompleteReason?: string;
};

export type ContractResultSemantic = {
  readonly id: string;
  readonly ruleRef: string;
  isApplicable(
    material: Pick<
      ExecutionContractSemanticMaterial,
      "action" | "requiredCapabilities"
    >,
  ): boolean;
  /** Select Evidence ids from frozen snapshots only — AND semantics */
  selectEvidenceIds(input: {
    material: ExecutionContractSemanticMaterial;
    attempt: ExecutionAttemptSnapshot;
    frozenSnapshots: readonly ReviewBundleEvidenceSnapshot[];
  }): ContractResultEvidenceSelection;
  assessExpectedOutput(input: {
    expectation: string;
    ordinal: number;
    attempt: ExecutionAttemptSnapshot;
    evidences: readonly Evidence[];
    material: ExecutionContractSemanticMaterial;
  }): "PASS" | "NOT_PROVEN" | "FAIL";
  assessEvidenceRequirement(input: {
    requirement: string;
    ordinal: number;
    attempt: ExecutionAttemptSnapshot;
    evidences: readonly Evidence[];
    frozenSnapshots: readonly ReviewBundleEvidenceSnapshot[];
    material: ExecutionContractSemanticMaterial;
  }): "SATISFIED" | "NOT_SATISFIED" | "NOT_PROVEN";
};

/** Static server-owned registry — compile-time entries only. */
export const CONTRACT_RESULT_SEMANTICS: readonly ContractResultSemantic[] = [
  tempArtifactContractResultSemantic,
  docsWriteContractResultSemantic,
];

export type ResolveApplicableContractResultSemanticsResult =
  | { status: "none" }
  | { status: "one"; semantic: ContractResultSemantic }
  | { status: "ambiguous"; ruleRefs: string[] };

export function resolveApplicableContractResultSemantics(
  material: Pick<
    ExecutionContractSemanticMaterial,
    | "action"
    | "requiredCapabilities"
    | "evidenceRequirements"
    | "expectedOutputs"
  >,
): ResolveApplicableContractResultSemanticsResult {
  const matches = CONTRACT_RESULT_SEMANTICS.filter((s) =>
    s.isApplicable(material),
  );
  if (matches.length === 0) return { status: "none" };
  if (matches.length === 1) {
    return { status: "one", semantic: matches[0]! };
  }
  return {
    status: "ambiguous",
    ruleRefs: matches.map((s) => s.ruleRef),
  };
}

/** Back-compat wrapper used by old call sites. */
export type ApplicableContractResultRule =
  | { readonly applicable: true; readonly ruleRef: string }
  | { readonly applicable: false; readonly ruleRef: null };

export function resolveApplicableContractResultRule(
  material: Pick<
    ExecutionContractSemanticMaterial,
    "action" | "requiredCapabilities" | "evidenceRequirements" | "expectedOutputs"
  >,
): ApplicableContractResultRule {
  const resolved = resolveApplicableContractResultSemantics(material);
  if (resolved.status === "one") {
    return { applicable: true, ruleRef: resolved.semantic.ruleRef };
  }
  // Ambiguous and none both surface as non-applicable at the soft-rule layer;
  // EvaluateContractResult fails hard on ambiguous before assessment.
  return { applicable: false, ruleRef: null };
}

export { W3B_TEMP_ARTIFACT_RULE_REF };

===== FILE: projects/sfia-studio/app/lib/oa/evidence-review/application/docsWriteContractResultSemantic.ts =====
/**
 * Contract Result semantic entry #2 — cursor.docs_write.apply (bounded docs-write).
 */
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
} from "@/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent";
import type { Evidence, EvidenceStatus, ExecutionAttemptSnapshot } from "../domain/types";
import type { ReviewBundleEvidenceSnapshot } from "../domain/reviewBundleTypes";
import type {
  ContractResultEvidenceSelection,
  ContractResultSemantic,
} from "./contractResultSemantics";
import { isW3bContractResultEvidenceUsable } from "./tempArtifactContractResultSemantic";

export const DOCS_WRITE_CONTRACT_RESULT_RULE_REF =
  "w3b-contract-result/cursor-docs-write-apply-v1" as const;

export const DOCS_WRITE_CONTRACT_RESULT_ER_KEY =
  "evreq:docs_write_artifact" as const;

export const BOUNDED_DOCS_WRITE_EO_TEMPLATE =
  "Résultat d'exécution — cursor.docs_write.apply" as const;

export const DOCS_WRITE_ARTIFACT_EVIDENCE_SOURCE =
  "execution_attempt:docs_write" as const;

/**
 * Correction identity for re-evaluation after semantic rule change.
 * Must never overwrite prior CE ids (`clm:docs-write:{attempt}` / W3-B).
 */
export const DOCS_WRITE_STRICT_EO_CORRECTION_REF = "strict-eo-v1" as const;

/** Identity helpers for docs-write Contract Result ClaimEvaluations. */
export function docsWriteContractResultIdentity(
  attemptId: string,
  options?: { readonly correctionRef?: string },
): {
  claimEvaluationId: string;
  claimEvaluationIdempotencyKey: string;
  evidenceId: string;
  reviewBundleId: string;
} {
  const segment = attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
  const correction = options?.correctionRef?.replace(/[^a-zA-Z0-9:_-]/g, "");
  if (correction) {
    return {
      claimEvaluationId: `clm:docs-write:${correction}:${segment}`.slice(0, 128),
      claimEvaluationIdempotencyKey: `idem:docs-write-ce:${correction}:${attemptId}`,
      evidenceId: `ev:docs-write:${segment}`.slice(0, 128),
      reviewBundleId: `rb:docs-write:${segment}`.slice(0, 128),
    };
  }
  return {
    claimEvaluationId: `clm:docs-write:${segment}`.slice(0, 128),
    claimEvaluationIdempotencyKey: `idem:docs-write-ce:${attemptId}`,
    evidenceId: `ev:docs-write:${segment}`.slice(0, 128),
    reviewBundleId: `rb:docs-write:${segment}`.slice(0, 128),
  };
}

export function docsWriteArtifactFactsHold(input: {
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
  material: {
    executionContractId?: string;
    projectId?: string;
    cycleInstanceId?: string;
  };
}): boolean {
  const { attempt, evidence, material } = input;
  if (attempt.status !== "succeeded") return false;
  if (evidence.type !== "artifact") return false;
  if (evidence.source !== DOCS_WRITE_ARTIFACT_EVIDENCE_SOURCE) return false;
  if (evidence.bindings.executionAttemptId !== attempt.attemptId) return false;

  // Fail-closed: executionContractId must be present and exact — never "valid by absence".
  const contractId =
    material.executionContractId ?? attempt.executionContractId;
  if (!evidence.bindings.executionContractId) return false;
  if (evidence.bindings.executionContractId !== contractId) return false;

  const projectId = material.projectId;
  if (projectId) {
    if (!evidence.bindings.projectId) return false;
    if (evidence.bindings.projectId !== projectId) return false;
  }

  const cycleId = material.cycleInstanceId;
  if (
    cycleId &&
    evidence.bindings.cycleInstanceId &&
    evidence.bindings.cycleInstanceId !== cycleId
  ) {
    return false;
  }

  if (!evidence.digest) return false;
  if (!evidence.location?.trim()) return false;
  return true;
}

/** Artifact-adapted usability — same freeze/status/freshness gates as W3-B. */
export function isDocsWriteContractResultEvidenceUsable(input: {
  evidence: Evidence;
  snapshot: ReviewBundleEvidenceSnapshot | undefined;
}): boolean {
  return isW3bContractResultEvidenceUsable(input);
}

function pickDocsWriteArtifactEvidence(
  evidences: readonly Evidence[],
  attempt: ExecutionAttemptSnapshot,
  material: {
    executionContractId?: string;
    projectId?: string;
    cycleInstanceId?: string;
  },
): Evidence | undefined {
  const matches = evidences.filter((e) =>
    docsWriteArtifactFactsHold({ attempt, evidence: e, material }),
  );
  return matches.length === 1 ? matches[0] : undefined;
}

function isPathShapedExpectedOutput(expectation: string): boolean {
  return (
    expectation.includes("/") ||
    /\.(md|txt|json|ya?ml|ts|tsx|js|jsx)$/i.test(expectation)
  );
}

/**
 * docs_write EO PASS only for deterministic forms:
 * 1) exact canonical bounded EO template;
 * 2) path-shaped EO that exactly equals durable Artifact Evidence.location.
 * Unknown / free-form prose → NOT_PROVEN (no NLP, no fuzzy PASS).
 */
export function assessDocsWriteExpectedOutput(input: {
  expectation: string;
  ordinal: number;
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
  material: {
    executionContractId?: string;
    projectId?: string;
    cycleInstanceId?: string;
    inputs?: Record<string, unknown>;
  };
}): "PASS" | "NOT_PROVEN" | "FAIL" {
  if (input.attempt.status === "failed" || input.attempt.status === "timeout") {
    return "FAIL";
  }
  if (
    !docsWriteArtifactFactsHold({
      attempt: input.attempt,
      evidence: input.evidence,
      material: input.material,
    })
  ) {
    return "NOT_PROVEN";
  }
  const location = input.evidence.location?.trim() ?? "";
  const expectation = input.expectation.trim();
  if (!expectation) return "NOT_PROVEN";
  if (expectation === BOUNDED_DOCS_WRITE_EO_TEMPLATE) {
    return "PASS";
  }
  if (isPathShapedExpectedOutput(expectation)) {
    return location.length > 0 && expectation === location
      ? "PASS"
      : "NOT_PROVEN";
  }
  return "NOT_PROVEN";
}

export function assessDocsWriteEvidenceRequirement(input: {
  requirement: string;
  ordinal: number;
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
  frozenSnapshot: ReviewBundleEvidenceSnapshot | undefined;
  material: {
    executionContractId?: string;
    projectId?: string;
    cycleInstanceId?: string;
  };
}): "SATISFIED" | "NOT_SATISFIED" | "NOT_PROVEN" {
  if (input.ordinal !== 0) return "NOT_PROVEN";
  if (input.requirement !== DOCS_WRITE_CONTRACT_RESULT_ER_KEY) {
    return "NOT_PROVEN";
  }
  if (
    !isDocsWriteContractResultEvidenceUsable({
      evidence: input.evidence,
      snapshot: input.frozenSnapshot,
    })
  ) {
    return "NOT_PROVEN";
  }
  if (
    !docsWriteArtifactFactsHold({
      attempt: input.attempt,
      evidence: input.evidence,
      material: input.material,
    })
  ) {
    return "NOT_SATISFIED";
  }
  return "SATISFIED";
}

export const docsWriteContractResultSemantic: ContractResultSemantic = {
  id: "docs-write",
  ruleRef: DOCS_WRITE_CONTRACT_RESULT_RULE_REF,
  isApplicable(material) {
    if (material.action !== M4_BOUNDED_DOCS_WRITE_ACTION) return false;
    return Boolean(
      material.requiredCapabilities?.includes(M4_BOUNDED_DOCS_WRITE_CAPABILITY),
    );
  },
  selectEvidenceIds(input): ContractResultEvidenceSelection {
    const frozen = input.frozenSnapshots;
    if (frozen.length === 0) {
      return {
        requiredEvidenceIds: [],
        incompleteReason: "no_frozen_evidence_snapshots",
      };
    }
    // Select all frozen ids; after load, assessors require exactly one docs_write artifact.
    return {
      requiredEvidenceIds: frozen.map((s) => s.evidenceId),
    };
  },
  assessExpectedOutput(input) {
    const evidence = pickDocsWriteArtifactEvidence(
      input.evidences,
      input.attempt,
      input.material,
    );
    if (!evidence) return "NOT_PROVEN";
    return assessDocsWriteExpectedOutput({
      expectation: input.expectation,
      ordinal: input.ordinal,
      attempt: input.attempt,
      evidence,
      material: input.material,
    });
  },
  assessEvidenceRequirement(input) {
    const evidence = pickDocsWriteArtifactEvidence(
      input.evidences,
      input.attempt,
      input.material,
    );
    if (!evidence) return "NOT_PROVEN";
    const frozenSnapshot = input.frozenSnapshots.find(
      (s) => s.evidenceId === evidence.evidenceId,
    );
    return assessDocsWriteEvidenceRequirement({
      requirement: input.requirement,
      ordinal: input.ordinal,
      attempt: input.attempt,
      evidence,
      frozenSnapshot,
      material: input.material,
    });
  },
};

/** @deprecated unused status set re-export for tests that may widen usability. */
export const DOCS_WRITE_USABLE_EVIDENCE_STATUSES = new Set<EvidenceStatus>([
  "available",
  "verified",
]);

===== FILE: projects/sfia-studio/app/lib/oa/evidence-review/application/resolveCurrentContractResultClaimEvaluation.ts =====
/**
 * Resolve the current (non-superseded) Contract Result ClaimEvaluation for an Attempt.
 *
 * Fail-closed lineage:
 * - 0 active CE → none
 * - exactly 1 active CE → one
 * - >1 active non-superseded CE → ambiguous (never pick by timestamp/id)
 */
import { CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT } from "../domain/contractResultTypes";
import type { ClaimEvaluation } from "../domain/claimEvaluationTypes";
import type { ClaimEvaluationRepositoryPort } from "../ports/claimEvaluationRepository";

export type ResolveCurrentContractResultClaimEvaluationResult =
  | { readonly status: "none" }
  | { readonly status: "one"; readonly claimEvaluation: ClaimEvaluation }
  | {
      readonly status: "ambiguous";
      readonly claimEvaluationIds: readonly string[];
    };

export async function resolveCurrentContractResultClaimEvaluation(input: {
  repo: ClaimEvaluationRepositoryPort;
  projectId: string;
  executionAttemptId: string;
}): Promise<ResolveCurrentContractResultClaimEvaluationResult> {
  const all = await input.repo.listByProject(input.projectId);
  const forAttempt = all.filter(
    (c) =>
      c.subjectKind === CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT &&
      c.contractResultBindings?.executionAttemptId ===
        input.executionAttemptId,
  );
  if (forAttempt.length === 0) return { status: "none" };

  const superseded = new Set<string>();
  for (const c of forAttempt) {
    if (c.supersedesClaimEvaluationId) {
      superseded.add(c.supersedesClaimEvaluationId);
    }
  }

  const current = forAttempt.filter(
    (c) => !superseded.has(c.claimEvaluationId),
  );
  if (current.length === 0) return { status: "none" };
  if (current.length === 1) {
    return {
      status: "one",
      claimEvaluation: structuredClone(current[0]!),
    };
  }

  const claimEvaluationIds = [...current.map((c) => c.claimEvaluationId)].sort();
  return { status: "ambiguous", claimEvaluationIds };
}

===== FILE: projects/sfia-studio/app/features/project-assistant/w2/requalifyDocsWriteContractResult.ts =====
/**
 * Requalify docs_write Contract Result from durable Evidence + RB — ZERO new Attempt.
 * Freeze rb:docs-write if draft, evaluate with docs-write CE id, supersede prior CE.
 */
import { createHash } from "node:crypto";
import type { ActorReference } from "@/lib/oa/doctrine";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import type {
  ClaimEvaluation,
  EvidenceReviewServices,
  ReviewBundle,
} from "@/lib/oa/evidence-review";
import {
  docsWriteContractResultIdentity,
  resolveCurrentContractResultClaimEvaluation,
} from "@/lib/oa/evidence-review";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";

function w3bClaimEvaluationIdForAttempt(attemptId: string): string {
  const digest = createHash("sha256").update(attemptId).digest("hex").slice(0, 16);
  return `clm:w3b:${digest}`;
}

export type RequalifyDocsWriteContractResultInput = {
  evidenceReviewServices: EvidenceReviewServices;
  attempt: ExecutionAttempt;
  contract: ExecutionContract;
  actor?: ActorReference;
  correlationId?: string;
  nowIso?: string;
  /**
   * When set, allocates a new immutable CE identity for re-evaluation
   * (never overwrites prior docs_write / W3-B CE ids).
   */
  correctionRef?: string;
};

export type RequalifyDocsWriteContractResultResult =
  | {
      ok: true;
      claimEvaluation: ClaimEvaluation;
      reviewBundle: ReviewBundle;
      supersededClaimEvaluationId?: string;
      reusedFromIdempotencyKey?: boolean;
    }
  | { ok: false; code: string; message: string };

export async function requalifyDocsWriteContractResult(
  input: RequalifyDocsWriteContractResultInput,
): Promise<RequalifyDocsWriteContractResultResult> {
  const actor = input.actor ?? LOCAL_PILOTE_ACTOR;
  const services = input.evidenceReviewServices;
  if (!services.evaluateContractResult) {
    return {
      ok: false,
      code: "CONTRACT_RESULT_EVALUATOR_UNAVAILABLE",
      message: "EvaluateContractResult indisponible — fail-closed.",
    };
  }

  const ids = docsWriteContractResultIdentity(input.attempt.attemptId, {
    ...(input.correctionRef ? { correctionRef: input.correctionRef } : {}),
  });
  const evidence = await services.evidenceReader.findById(ids.evidenceId);
  if (!evidence) {
    return {
      ok: false,
      code: "DOCS_WRITE_EVIDENCE_MISSING",
      message: `Evidence ${ids.evidenceId} introuvable — ingest docs_write requis.`,
    };
  }

  let reviewBundle = await services.reviewBundleReader.findById(
    ids.reviewBundleId,
  );
  if (!reviewBundle) {
    return {
      ok: false,
      code: "DOCS_WRITE_REVIEW_BUNDLE_MISSING",
      message: `ReviewBundle ${ids.reviewBundleId} introuvable.`,
    };
  }

  if (!reviewBundle.frozenAt && reviewBundle.status === "draft") {
    const frozen = await services.freezeReviewBundle.execute({
      reviewBundleId: ids.reviewBundleId,
      expectedVersion: reviewBundle.version,
      idempotencyKey: `idem:docs-write-rb-freeze:${input.attempt.attemptId}`,
      actor,
      correlationId: input.correlationId,
      nowIso: input.nowIso,
    });
    if (!frozen.ok) {
      return {
        ok: false,
        code: frozen.error.detailCode,
        message: frozen.error.message,
      };
    }
    reviewBundle = frozen.reviewBundle;
  } else if (!reviewBundle.frozenAt || !reviewBundle.frozenVersion) {
    return {
      ok: false,
      code: "DOCS_WRITE_REVIEW_BUNDLE_NOT_FROZEN",
      message: "ReviewBundle docs_write non frozen — fail-closed.",
    };
  }

  const projectId =
    input.contract.projectId ||
    evidence.bindings.projectId ||
    reviewBundle.projectId;

  let supersededClaimEvaluationId: string | undefined;
  const current = await resolveCurrentContractResultClaimEvaluation({
    repo: services.claimEvaluationRepository,
    projectId,
    executionAttemptId: input.attempt.attemptId,
  });
  if (current.status === "ambiguous") {
    return {
      ok: false,
      code: "CONTRACT_RESULT_CLAIM_LINEAGE_AMBIGUOUS",
      message: `Multiple active ContractResult CEs — fail-closed: ${current.claimEvaluationIds.join(",")}`,
    };
  }
  if (
    current.status === "one" &&
    current.claimEvaluation.claimEvaluationId !== ids.claimEvaluationId
  ) {
    supersededClaimEvaluationId = current.claimEvaluation.claimEvaluationId;
  } else if (current.status === "none") {
    const w3bCe = await services.claimEvaluationReader.findById(
      w3bClaimEvaluationIdForAttempt(input.attempt.attemptId),
    );
    if (w3bCe && w3bCe.claimEvaluationId !== ids.claimEvaluationId) {
      supersededClaimEvaluationId = w3bCe.claimEvaluationId;
    }
  }

  const evaluated = await services.evaluateContractResult.execute({
    claimEvaluationId: ids.claimEvaluationId,
    idempotencyKey: ids.claimEvaluationIdempotencyKey,
    actor,
    contract: input.contract,
    attempt: {
      attemptId: input.attempt.attemptId,
      executionContractId: input.attempt.executionContractId,
      executionContractVersion: input.attempt.executionContractVersion,
      executionContractSemanticFingerprint:
        input.attempt.executionContractSemanticFingerprint,
      boundExecutionContract: input.attempt.boundExecutionContract,
      status: input.attempt.status,
      resultRef: input.attempt.resultRef,
      errorRef: input.attempt.errorRef,
      stopReason: input.attempt.stopReason,
      cancelledAt: input.attempt.cancelledAt,
      failedAt: input.attempt.failedAt,
      timedOutAt: input.attempt.timedOutAt,
      stopOrigin: input.attempt.stopOrigin,
      stopCode: input.attempt.stopCode,
      stopSourceRef: input.attempt.stopSourceRef,
      stopObservedAt: input.attempt.stopObservedAt,
      completedAt: input.attempt.completedAt,
      selectedAgentRef: input.attempt.selectedAgentRef,
    },
    reviewBundle,
    ...(supersededClaimEvaluationId
      ? { supersedesClaimEvaluationId: supersededClaimEvaluationId }
      : {}),
    correlationId: input.correlationId,
    nowIso: input.nowIso,
  });

  if (!evaluated.ok) {
    return {
      ok: false,
      code: evaluated.error.detailCode,
      message:
        evaluated.error.internalCauseRef ?? evaluated.error.message,
    };
  }

  return {
    ok: true,
    claimEvaluation: evaluated.claimEvaluation,
    reviewBundle,
    ...(supersededClaimEvaluationId
      ? { supersededClaimEvaluationId }
      : {}),
    reusedFromIdempotencyKey: evaluated.reusedFromIdempotencyKey,
  };
}

===== FILE: projects/sfia-studio/app/__tests__/project-assistant/contractResultCrBlk04PreserveWhat.d0.test.ts =====
/**
 * CR-BLK-04 — docs-write M3 resolution must preserve predecessor expectedOutputs (WHAT).
 * HOW (action/capability/ER) may change; WHAT must not be silently contracted.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterAll, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import { createTestSqliteProductProjectServices } from "@/lib/oa/project";
import { createSqliteCycleServices } from "@/lib/oa/cycle";
import {
  LOCAL_MORRIS_M3_ACTOR,
  MemoryAuthorityResolver,
  computeDecisionBasisSourceDigest,
  createTestSqliteDecisionServices,
  registerM3LocalMorrisAuthority,
  type DecisionBasis,
} from "@/lib/oa/decision";
import { createTestSqliteExecutionContractServices } from "@/lib/oa/execution-contract";
import {
  boundedDocsWriteM3ResolutionProfile,
  BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON,
} from "@/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile";
import {
  resolveM3ExecutionContract,
  canonicalM3PrepareContractId,
  canonicalM3PrepareIdempotencyKey,
} from "@/features/project-assistant/f3/resolveM3ExecutionContract";
import {
  assessExpectedOutputs,
} from "@/lib/oa/evidence-review/application/contractResultAssessment";
import {
  BOUNDED_DOCS_WRITE_EO_TEMPLATE,
  DOCS_WRITE_CONTRACT_RESULT_ER_KEY,
} from "@/lib/oa/evidence-review";
import {
  computeExecutionContractSemanticMaterialFingerprint,
  executionContractSemanticMaterial,
} from "@/lib/oa/execution-contract";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
} from "@/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { Evidence } from "@/lib/oa/evidence-review";

const NOW = "2026-09-18T09:00:00.000Z";
const PROJECT_ID = "prj:cr-blk-04";
const APP_ROOT = path.resolve(__dirname, "../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);
const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const PRODUCT_WHAT = [
  "Le fichier Markdown matérialisé au chemin cible",
  "Vérification de l’existence et de la conformité minimale du fichier",
] as const;

function docsWriteEc(
  overrides: Partial<ExecutionContract> = {},
): ExecutionContract {
  const base: ExecutionContract = {
    schemaVersion: "0.2.0-oa",
    executionContractId: "xct:cr-blk-04:base",
    projectId: PROJECT_ID,
    version: 1,
    status: "confirmed",
    semanticFingerprint: "fp:pending",
    action: M4_BOUNDED_DOCS_WRITE_ACTION,
    target: "workspace.isolated.docs_write",
    scope: "workspace.isolated.docs_write",
    requiredAuthority: "N3",
    constraints: [],
    stopConditions: [],
    evidenceRequirements: [DOCS_WRITE_CONTRACT_RESULT_ER_KEY],
    expectedOutputs: [BOUNDED_DOCS_WRITE_EO_TEMPLATE],
    requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
    reversibility: "reversible",
    idempotencyKey: "idem:cr-blk-04:base",
    correlationId: "cor:cr-blk-04:base",
    ...overrides,
  };
  const material = executionContractSemanticMaterial(base);
  base.semanticFingerprint =
    computeExecutionContractSemanticMaterialFingerprint(material);
  return base;
}

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

afterAll(() => {
  while (openServices.length) openServices.pop()?.dispose();
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

async function boot(dbPath: string) {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const projects = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: NOW,
    dbPath,
  });
  openServices.push(projects);
  const cycles = createSqliteCycleServices({
    projectServices: projects,
    productStore: projects.store,
  });
  const authority = new MemoryAuthorityResolver();
  const decisions = createTestSqliteDecisionServices({
    projectServices: projects,
    cycleServices: cycles,
    productStore: projects.store,
    authorityResolver: authority,
  });
  const contracts = createTestSqliteExecutionContractServices({
    projectServices: projects,
    decisionServices: decisions,
    cycleServices: cycles,
    productStore: projects.store,
    authorityResolver: authority,
  });
  return { projects, decisions, contracts, authority };
}

describe("CR-BLK-04 — preserve Contract WHAT on docs-write M3 resolution", () => {
  it("T1/T2/T3 — profile does not inject EO template; resolve preserves predecessor WHAT", async () => {
    const profile = boundedDocsWriteM3ResolutionProfile();
    expect(profile).not.toHaveProperty("expectedOutputs");
    expect(JSON.stringify(profile)).not.toContain(BOUNDED_DOCS_WRITE_EO_TEMPLATE);

    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-cr-blk-04-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa.sqlite");
    const stack = await boot(dbPath);
    const decisionId = "dec:cr-blk-04-preserve";

    const createdProject = await stack.projects.createProject.execute({
      projectId: PROJECT_ID,
      title: "CR-BLK-04",
      objective: "preserve WHAT",
      context: "docs-write",
      scope: "cr-blk-04",
      doctrinePackagePin: VALID_PIN,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
      lpsVersionId: "lps:cr-blk-04-v1",
      idempotencyKey: "idem:cr-blk-04-prj",
    });
    expect(createdProject.ok).toBe(true);

    const lps = await stack.projects.getCurrentLivingProjectState.execute({
      projectId: PROJECT_ID,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;

    const scope = `decision:${decisionId}`;
    const auth = registerM3LocalMorrisAuthority({
      authorityResolver: stack.authority,
      scope,
      issuedAt: NOW,
      forceEnable: true,
      evidenceId: `evd:m3:${decisionId}`,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;

    const basis: DecisionBasis = {
      sourceType: "proposal",
      sourceRef: "prop:cr-blk-04",
      sourceDigest: computeDecisionBasisSourceDigest({
        objective: "cr-blk-04",
        op: "docs_write",
      }),
      projectId: PROJECT_ID,
      proposalContext: {
        lpsId: lps.livingProjectState.lpsVersionId,
        lpsVersion: lps.livingProjectState.version,
        doctrineDigest: VALID_DIGEST,
      },
      executionBasis: {
        objective: "cr-blk-04",
        scope,
        cycleTypeId: "cyc:delivery",
        requestedOperation: "docs_write",
        expectedOutputs: [...PRODUCT_WHAT],
      },
    };
    const decided = await stack.decisions.recordHumanDecision.execute({
      decisionId,
      projectId: PROJECT_ID,
      subject: decisionId,
      options: [{ optionId: "opt:go", label: "GO" }],
      selectedOptionId: "opt:go",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope,
      authorityEvidenceId: auth.evidenceId,
      status: "accepted",
      decisionBasis: basis,
    });
    expect(decided.ok).toBe(true);

    const originalId = canonicalM3PrepareContractId(decisionId);
    const prior = await stack.contracts.buildExecutionContract.execute({
      executionContractId: originalId,
      projectId: PROJECT_ID,
      decisionRefs: [decisionId],
      action: "UNRESOLVED_ACTION",
      target: "UNRESOLVED_TARGET",
      scope,
      requiredCapabilities: ["cap:unresolved"],
      requiredAuthority: "MORRIS",
      reversibility: "reversible",
      constraints: ["PREPARE_ONLY", "NO_ATTEMPT"],
      stopConditions: ["AUTHORITY_DENIED"],
      evidenceRequirements: ["evreq:docs_write_artifact"],
      expectedOutputs: [...PRODUCT_WHAT],
      idempotencyKey: canonicalM3PrepareIdempotencyKey(decisionId),
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    expect(prior.ok).toBe(true);
    if (!prior.ok) return;
    expect(prior.contract.expectedOutputs).toEqual([...PRODUCT_WHAT]);

    const validated =
      await stack.contracts.validateExecutionContract.execute({
        executionContractId: originalId,
        actor: LOCAL_MORRIS_M3_ACTOR,
        authorityEvidenceId: auth.evidenceId,
      });
    expect(validated.ok).toBe(true);
    if (!validated.ok) return;

    const resolved = await resolveM3ExecutionContract({
      projectId: PROJECT_ID,
      decisionId,
      originalExecutionContractId: originalId,
      expectedOriginalVersion: validated.contract.version,
      resolution: boundedDocsWriteM3ResolutionProfile(),
      supersessionReason: BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON,
      successorExecutionContractId: "xct:m3-res:dec:cr-blk-04-preserve",
      deps: {
        decisionServices: stack.decisions,
        authorityResolver: stack.authority,
        executionContractServices: stack.contracts,
        nowIso: () => NOW,
        forceM3Authority: true,
      },
    });
    if (!resolved.ok) {
      throw new Error(
        `resolve failed: ${resolved.code} — ${resolved.message}`,
      );
    }

    expect(resolved.successor.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
    expect(resolved.successor.requiredCapabilities).toEqual([
      M4_BOUNDED_DOCS_WRITE_CAPABILITY,
    ]);

    const loaded = await stack.contracts.getExecutionContract.execute({
      executionContractId: resolved.successor.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(loaded.contract.expectedOutputs).toEqual([...PRODUCT_WHAT]);
    expect(loaded.contract.expectedOutputs).not.toEqual([
      BOUNDED_DOCS_WRITE_EO_TEMPLATE,
    ]);
    expect(loaded.contract.expectedOutputs?.join("\0")).not.toContain(
      BOUNDED_DOCS_WRITE_EO_TEMPLATE,
    );

    const priorReload = await stack.contracts.getExecutionContract.execute({
      executionContractId: originalId,
    });
    expect(priorReload.ok).toBe(true);
    if (!priorReload.ok) return;
    expect(priorReload.contract.expectedOutputs).toEqual([...PRODUCT_WHAT]);
  });

  it("T4 — registry still PASSes canonical docs-write EO when EC declares it", () => {
    const c = docsWriteEc({
      executionContractId: "xct:cr-blk-04:canonical-eo",
      expectedOutputs: [BOUNDED_DOCS_WRITE_EO_TEMPLATE],
      inputs: { targetPath: "docs/out.md" },
      idempotencyKey: "idem:cr-blk-04:can",
      correlationId: "cor:cr-blk-04:can",
    });
    const material = executionContractSemanticMaterial(c);
    const evidence: Evidence = {
      schemaVersion: "0.2.0-oa",
      evidenceId: "ev:docs-write:xat:cr-blk-04:can",
      type: "artifact",
      source: "execution_attempt:docs_write",
      sourceKind: "external",
      location: "docs/out.md",
      digest:
        "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" as Digest,
      producedBy: { actorId: "actor:t", role: "project_owner" },
      producedAt: NOW,
      freshness: "fresh",
      status: "available",
      classification: "internal",
      storageMode: "metadata_only",
      availability: "available",
      retentionClass: "standard",
      legalHold: false,
      bindings: {
        projectId: PROJECT_ID,
        executionContractId: c.executionContractId,
        executionAttemptId: "xat:cr-blk-04:can",
      },
      containsSecrets: false,
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prv:t",
        actor: { actorId: "actor:t", role: "project_owner" },
        source: "execution_adapter",
        timestamp: NOW,
        correlationId: "cor:t",
        projectId: PROJECT_ID,
      },
      version: 1,
      createdAt: NOW,
    };
    const eo = assessExpectedOutputs({
      semanticMaterial: material,
      semanticFingerprint: c.semanticFingerprint as string,
      attempt: {
        attemptId: "xat:cr-blk-04:can",
        executionContractId: c.executionContractId,
        executionContractVersion: 1,
        status: "succeeded",
      },
      evidences: [evidence],
      evaluatedAt: NOW,
    });
    expect(eo[0]?.result).toBe("PASS");
  });

  it("T5 — exact-path EO PASSes only when Evidence.location matches", () => {
    const location = "docs/exact-path.md";
    const c = docsWriteEc({
      executionContractId: "xct:cr-blk-04:path",
      expectedOutputs: [location],
      idempotencyKey: "idem:cr-blk-04:path",
      correlationId: "cor:cr-blk-04:path",
    });
    const material = executionContractSemanticMaterial(c);
    const mkEv = (loc: string): Evidence => ({
      schemaVersion: "0.2.0-oa",
      evidenceId: "ev:docs-write:xat:cr-blk-04:path",
      type: "artifact",
      source: "execution_attempt:docs_write",
      sourceKind: "external",
      location: loc,
      digest:
        "sha256:bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb" as Digest,
      producedBy: { actorId: "actor:t", role: "project_owner" },
      producedAt: NOW,
      freshness: "fresh",
      status: "available",
      classification: "internal",
      storageMode: "metadata_only",
      availability: "available",
      retentionClass: "standard",
      legalHold: false,
      bindings: {
        projectId: PROJECT_ID,
        executionContractId: c.executionContractId,
        executionAttemptId: "xat:cr-blk-04:path",
      },
      containsSecrets: false,
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prv:t",
        actor: { actorId: "actor:t", role: "project_owner" },
        source: "execution_adapter",
        timestamp: NOW,
        correlationId: "cor:t",
        projectId: PROJECT_ID,
      },
      version: 1,
      createdAt: NOW,
    });
    const pass = assessExpectedOutputs({
      semanticMaterial: material,
      semanticFingerprint: c.semanticFingerprint as string,
      attempt: {
        attemptId: "xat:cr-blk-04:path",
        executionContractId: c.executionContractId,
        executionContractVersion: 1,
        status: "succeeded",
      },
      evidences: [mkEv(location)],
      evaluatedAt: NOW,
    });
    expect(pass[0]?.result).toBe("PASS");
    const fail = assessExpectedOutputs({
      semanticMaterial: material,
      semanticFingerprint: c.semanticFingerprint as string,
      attempt: {
        attemptId: "xat:cr-blk-04:path",
        executionContractId: c.executionContractId,
        executionContractVersion: 1,
        status: "succeeded",
      },
      evidences: [mkEv("docs/other.md")],
      evaluatedAt: NOW,
    });
    expect(fail[0]?.result).toBe("NOT_PROVEN");
  });

  it("T6 — free-form / conformity EO remains NOT_PROVEN with artifact alone", () => {
    const c = docsWriteEc({
      executionContractId: "xct:cr-blk-04:free",
      expectedOutputs: [...PRODUCT_WHAT],
      inputs: {
        targetPath:
          "projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md",
      },
      idempotencyKey: "idem:cr-blk-04:free",
      correlationId: "cor:cr-blk-04:free",
    });
    const material = executionContractSemanticMaterial(c);
    const evidence: Evidence = {
      schemaVersion: "0.2.0-oa",
      evidenceId: "ev:docs-write:xat:cr-blk-04:free",
      type: "artifact",
      source: "execution_attempt:docs_write",
      sourceKind: "external",
      location:
        "projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md",
      digest:
        "sha256:cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc" as Digest,
      producedBy: { actorId: "actor:t", role: "project_owner" },
      producedAt: NOW,
      freshness: "fresh",
      status: "available",
      classification: "internal",
      storageMode: "metadata_only",
      availability: "available",
      retentionClass: "standard",
      legalHold: false,
      bindings: {
        projectId: PROJECT_ID,
        executionContractId: c.executionContractId,
        executionAttemptId: "xat:cr-blk-04:free",
      },
      containsSecrets: false,
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prv:t",
        actor: { actorId: "actor:t", role: "project_owner" },
        source: "execution_adapter",
        timestamp: NOW,
        correlationId: "cor:t",
        projectId: PROJECT_ID,
      },
      version: 1,
      createdAt: NOW,
    };
    const eo = assessExpectedOutputs({
      semanticMaterial: material,
      semanticFingerprint: c.semanticFingerprint as string,
      attempt: {
        attemptId: "xat:cr-blk-04:free",
        executionContractId: c.executionContractId,
        executionContractVersion: 1,
        status: "succeeded",
      },
      evidences: [evidence],
      evaluatedAt: NOW,
    });
    expect(eo.every((a) => a.result === "NOT_PROVEN")).toBe(true);
  });
});

===== FILE: projects/sfia-studio/convergence/sfia-studio-contract-result-extensibility-framing.md =====
# SFIA Studio — Contract Result Extensibility — Framing Pack

| Métadonnée | Valeur |
| --- | --- |
| **Rôle** | Pack de **framing / décision technique** — extensibilité ContractResult |
| **Statut** | **ADOPTED BY MORRIS — IMPLEMENTATION IN PROGRESS / NOT YET INTEGRATED ON MAIN** |
| **Macro** | `CONTRACT-RESULT-EXTENSIBILITY-FRAMING-01` (R13) |
| **Parent** | `PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01` |
| **Horodatage création** | 2026-09-18 06:15:00 CEST (+0200) |
| **Baseline Git** | `origin/main` `bb6af3cabef663bd8619b85326dbc205057b7c7d` (PR **#501** MERGED / POST-MERGE VERIFIED) |
| **Branche locale framing (historique)** | `arch/sfia-studio-contract-result-extensibility-framing-01` |
| **Branche locale implementation (non poussée)** | `feat/sfia-studio-contract-result-extensibility-01` |
| **Cycle** | Delivery / architecture implementation · **EVOL** · **CRITICAL** |
| **CKC** | `ckc:studio:technical-architecture` — CONTENT VALIDATED · **aucune autorité d’exécution** |
| **runtime v3** | **NON ADOPTED** |
| **global L5** | **NOT ADOPTED** |
| **REAL / Execute / new Attempt** | **ZERO** this macro |
| **Horodatage décision Morris** | 2026-09-18 — ADOPT RESULT SEMANTICS REGISTRY (server-owned static + frozen RB multi-Evidence AND + explicit CE supersession + A+B one ZERO-REAL macro + success REAL provenance adapt if non-structural) |
| **Implémentation locale** | `feat/sfia-studio-contract-result-extensibility-01` — registry + docs_write #2 + CR-BLK-01/02/03/04 closed · Execution profile resolves **HOW** only (must not inject/replace `expectedOutputs`) · Attempt 3 current CE `clm:docs-write:strict-eo-v1:…` **not_proven** (evidence gap) — **NOT integrated on main** |
| **Anti-claims** | ≠ Product Journey READY/COMPLETE · ≠ Attempt 3 Product PASS under strict EO · ≠ generic ContractResult all effect classes · ≠ Git/PR/CI semantics · ≠ runtime v3 ADOPTED · ≠ integrated on main |

---

## 1. Context / trigger

La campagne Product Journey E2E REAL Reconciliation a prouvé (Attempt 3) qu’un Cursor REAL gouverné peut écrire un artifact Markdown borné et que l’Evidence Artifact docs_write existe avec digest conforme.

Le Product Result reste **UNCLAIMED** parce que le moteur ContractResult actuel :

1. n’a **aucune règle applicable** pour `cursor.docs_write.apply` / `evreq:docs_write_artifact` (`no_applicable_contract_result_rule`) ;
2. sur le chemin W3-B Product, évalue l’Evidence **technique** (`ev:w3b:…`) plutôt que l’Evidence Artifact docs_write (`ev:docs-write:…`) ;
3. (secondaire) n’expose pas durablement sur Attempt **succeeded** les mêmes signaux de provenance REAL que le chemin failure (`processDiagnostic`).

R13 **ne ré-litige pas** Attempt 3. Il qualifie l’architecture minimale pour qu’**un seul** moteur ContractResult puisse évaluer de futures classes d’effets à partir d’Evidence fiables, **sans** hardcoder durablement chaque action dans le cœur, **sans** second moteur, **sans** sur-concevoir toutes les opérations futures.

---

## 2. Current architecture

### 2.1 Flow (état factuel sur `bb6af3ca`)

```
ExecutionContract (live)
  → executionContractSemanticMaterial()          [lib/oa/execution-contract]
  → captureBoundExecutionContractSnapshot         [Attempt.boundExecutionContract — durable Option B]
ExecutionAttempt (terminal)
  → Evidence                                      [durable ; Product W3-B : 1 Evidence/Attempt]
  → ReviewBundle (evidenceRefs[])                 [durable ; freeze → frozenEvidenceSnapshots]
  → EvaluateContractResult.execute                [single Evidence in request]
       → validateBoundExecutionContractSnapshot
       → resolveApplicableContractResultRule      [HARD-CODED — 1 rule]
       → assessExpectedOutputs / assessEvidenceRequirements
       → deriveCanonicalContractResultStatus      [AND]
       → ClaimEvaluation create (version: 1)      [durable SoT]
  → projectContractResultVerdict / W3-B Product terminal
```

### 2.2 Owner / types / propriétés

| Étape | Module | Durable ? | Cardinalité | Couplage |
| --- | --- | --- | --- | --- |
| Semantic material | `semanticFingerprint.ts` → `ExecutionContractSemanticMaterial` | Live EC + bound copy | 1 | Flat : action, caps, EO, ER, target, scope, inputs… |
| Bound snapshot | `boundExecutionContract.ts` | **Oui** sur Attempt | 0..1 | CR lit **uniquement** le bound, pas le live EC |
| Evidence | Evidence domain | **Oui** | N possibles ; Product path = 1 | W3-B : `ev:w3b:{sha16}` ; docs_write : `ev:docs-write:{attempt}` |
| ReviewBundle | RB domain | **Oui** | N `evidenceRefs` ; freeze obligatoire pour CR | Attach/reopen/supersede existent |
| EvaluateContractResult | `evaluateContractResult.ts` | Écrit CE | **1 Evidence** dans la request | Evidence doit être dans frozen snapshot |
| Rule resolve | `contractResultSemanticEvaluator.ts` | Soft | **1 règle hard-codée** | `action === product:generate-temporary-artifact` ∧ `cap:product-temp-artifact` |
| EO/ER assess | `contractResultAssessment.ts` | Dans CE | N EO × N ER ; **AND** | Assessors temp-artifact seulement si rule applicable |
| ClaimEvaluation | CE domain | **Oui** create-only (CR) | 1 CE / (id, idempotencyKey) | `subjectKind = execution_contract_result` |
| Product terminal | `materializeW3bProductTerminal.ts` | Projection | SUCCESS ⇔ Attempt succeeded ∧ CE pass ∧ bindings | Pinned ids `clm:w3b:…` / `idem:w3b-ce:…` |

### 2.3 Fail-closed / idempotency

- **Hard fail (pas de CE)** : mismatch ids, bound corrupt, Evidence hors RB / version mismatch, RB non frozen / incomplete / synthesisOnly, conflit fingerprint idempotency, evaluator unavailable.
- **Soft durable `not_proven`** : bound manquant ; **`no_applicable_contract_result_rule`** ; EO/ER non satisfaits.
- **PASS canonique** : Attempt `succeeded` ∧ **tous** EO PASS ∧ **tous** ER SATISFIED ∧ **listes non vides**. Pas de PASS sur `resultRef` seul ni sur Evidence `available` seul (invariants temp-artifact).
- **Idempotency body** : claimEvaluationId, idempotencyKey, reviewBundleId, attemptId, contractId, contractVersion, semanticFingerprint, actor. Même clé + même fingerprint → **reuse** (pas de recalcul).

### 2.4 GENERIC vs SPECIFIC

| Déjà GENERIC | Actuellement SPECIFIC |
| --- | --- |
| Evidence / RB (N refs, freeze, reopen) | `resolveApplicableContractResultRule` — une seule règle |
| ClaimEvaluation aggregate + OCC | `assessTempArtifactExpectedOutput` / `…EvidenceRequirement` |
| Shell `EvaluateContractResult` (bindings, RB gates, fingerprint) | Constantes W3-B EO template FR + `evreq:generate-temporary-artifact` + pattern `res:w3a:` |
| Bound snapshot Option B | Product W3-B ids pinned + 1 Evidence technique |
| `deriveCanonicalContractResultStatus` (AND) | docs_write : ingest Artifact + RB **draft**, **jamais** `EvaluateContractResult` |
| W3-A `ExecutionEffectClass` → action/cap/`evreq:{class}` (préparation) | Typed Git Evidence sources (hors CR evaluator) |

**Conclusion :** le shell ClaimEvaluation/ContractResult est générique ; la **sémantique de résultat** est fermée sur un seul couple action+capability. Ce n’est **pas** un registry manqué que R12 contourne : la seam d’extension n’existe pas encore — docs_write **s’arrête avant** l’évaluation.

---

## 3. R12 concrete failure

| Fait | Valeur |
| --- | --- |
| Attempt | `xat:w3a:c4c5670edb4658cc` |
| Technical | `succeeded` / exit 0 |
| Effect | Markdown attendu dans M4 WT isolé |
| Artifact Evidence | `ev:docs-write:xat:w3a:c4c5670edb4658cc` — digest match |
| CE | `not_proven` · reason `no_applicable_contract_result_rule` |
| Rule supportée | uniquement `product:generate-temporary-artifact` + `cap:product-temp-artifact` |
| Evidence évaluée (W3-B) | technique `ev:w3b:…` / `resultRef`, **pas** Artifact docs_write |
| Fingerprint drift | **KEEP** (non-bloquant) |

Ne pas fabriquer de PASS. Ne pas muter Attempt 3.

---

## 4. Problem statement

**Question structurante :**

> How does one existing ContractResult engine deterministically evaluate many future classes of contract outcomes from trustworthy Evidence, without becoming action-hardcoded or over-generalized?

Concrètement : comment répondre « Quels outcomes le contrat exigeait-il, et les Evidence observées les prouvent-elles ? » pour docs_write **et** (demain) commit / push / PR / CI / merge, **sans** :

- second moteur ContractResult ;
- hardcoding pérenne action-par-action **dans le cœur** comme architecture finale sans décision Morris ;
- schéma déclaratif sur-généralisé trop tôt ;
- PASS non fail-closed (status-only / resultRef-only).

---

## 5. Invariants

1. **Un seul** moteur EvaluateContractResult / ClaimEvaluation `execution_contract_result`.
2. Assessment sur **bound snapshot** uniquement (pas live EC).
3. Deterministic + **fail-closed** ; unknown rule → `not_proven` (soft) ou reject (hard) — jamais PASS silencieux.
4. Evidence **traçable** dans ReviewBundle **frozen** ; pas de PASS sur narration.
5. **HOW ≠ WHAT** : routing/executor ≠ expected outcomes / EvidenceRequirements.
6. Authority / capability / Confirmation restent hors du PASS métier sauf si le contrat les exige explicitement comme ER.
7. Pas de plugin marketplace / client-controlled rule selection.
8. Temporary bricks only **WITH EXIT** (Build Doctrine R5/A7).
9. runtime v3 reste **NON ADOPTED** ; Build Doctrine / C1 **inchangés** par R13.
10. docs_write = **cas révélateur**, pas architecture cible exclusive.

---

## 6. Existing reusable assets

- `EvaluateContractResult` shell + CE subject `execution_contract_result`
- `ExecutionContractSemanticMaterial.expectedOutputs` + `evidenceRequirements` (**WHAT** déjà nommé)
- Bound snapshot Option B
- ReviewBundle multi-Evidence + freeze/reopen
- `ingestDocsWriteArtifactEvidence` (Artifact Evidence + RB draft)
- W3-A `ExecutionEffectClass` / `evreq:{class}` (préparation EC)
- Typed Git Evidence sources (`git:local_commit`, …) — preuve hors CR aujourd’hui
- Canonical AND status derivation
- Idempotency fingerprint + create-only CE (auditabilité)

**Pas de types OA nommés `ExpectedEffect` / `EffectKind`.** Closest : `expectedOutputs`, `ExecutionEffectClass`, ops1 legacy `expectedEffects` (hors OA CR).

---

## 7. Result-semantics extension axes

| Axe | Existe déjà ? | Usage CR aujourd’hui | Candidat extension ? |
| --- | --- | --- | --- |
| A. concrete `action` | Oui | **Gate** rule | Oui (applicability) |
| B. `requiredCapabilities` | Oui | **Gate** rule | Oui (applicability) |
| C. `evidenceRequirements` / `evreq:*` | Oui | Assessed **si** rule applicable | **Oui — WHAT primary** |
| D. `expectedOutputs` | Oui (pas ExpectedEffect) | Assessed **si** rule applicable | **Oui — WHAT primary** |
| E. target/resource class | `target` / `scope` | Fingerprint only | Secondaire |
| F. compound policy | `ruleRef` + reviewPolicyRef | 1 constante W3-B | Oui (versioned ruleRef) |
| G. `ExecutionEffectClass` | Oui (W3-A) | Indirect (build EC) | Préparation, pas discriminator CR final |

**Lecture factuelle :** l’extensibilité ne doit **pas** inventer un nouveau concept « ExpectedEffect » tant que `expectedOutputs` + `evidenceRequirements` portent le WHAT. Le discriminant d’**applicabilité** reste naturellement **(action ∧ capabilities)** ; le discriminant d’**assessment** est **(EO templates + ER keys)** porté par le material bound, délégué à des assessors enregistrés.

---

## 8. Multi-Evidence model

| Question | Conclusion minimale |
| --- | --- |
| API actuelle | **1** Evidence dans `EvaluateContractResultRequest` |
| RB | **N** Evidence possibles |
| CR lit-il tout le RB ? | **Non** — seulement l’Evidence request |
| Combinaison EO/ER | **AND** ; pas d’OR |
| Futur docs_write | 1 Artifact Evidence suffit souvent (digest+path+type) |
| Futur commit/push/PR/CI | Souvent **plusieurs** Evidence typées dans **un** RB |

**Modèle minimal recommandé (framing) :**

- Conserver **un** ReviewBundle frozen comme unité d’audit.
- Étendre la sélection d’Evidence : l’assessor / rule peut exiger **un sous-ensemble nommé** des `frozenEvidenceSnapshots` (AND), pas un flatten obligatoire en une seule Evidence.
- Court terme (docs_write) : sélectionner l’Artifact Evidence docs_write depuis le RB (éventuellement seul membre).
- Ne **pas** introduire d’OR dans R13 ; OR = dette future explicite si un cas réel l’exige.

---

## 9. Options

### OPTION 1 — Action-specific rules (impératif dans le evaluator)

Chaque nouvelle action (`cursor.docs_write.apply`, `git.commit`, …) ajoute une branche dans `resolveApplicableContractResultRule` + assessors dédiés dans le même module (ou fichiers jumeaux).

| | |
| --- | --- |
| **Taille** | Petite pour 1–2 actions ; croît linéairement |
| **Couplage** | Fort au cœur `contractResultSemanticEvaluator` |
| **Maintenance** | Chaque action = diff cœur + tests |
| **Testabilité** | Bonne (unitaire) |
| **Forces** | Simple, immédiat, zéro abstraction nouvelle |
| **Debt** | Hardcoding durable dans le cœur ; docs_write peut devenir « l’architecture » par accident |
| **Exit** | Extraire vers registry (Option 2) dès la 2ᵉ/3ᵉ règle |

Option **valide**, pas un strawman — surtout si Morris veut un micro-lot docs_write only **TEMPORARY WITH EXIT** explicite.

### OPTION 2 — Extensible Result Semantics Registry (reco technique candidate)

**Un** moteur EvaluateContractResult inchangé dans ses invariants. Remplacer le hard-code de `resolveApplicableContractResultRule` + le branchement assessors par un **registry server-owned, static/compile-time** de *Result Semantics* :

Chaque entrée :

- **applicability** : prédicat déterministe sur bound material (typiquement `action` + `requiredCapabilities`) ;
- **`ruleRef` versionné** ;
- **EO assessor** / **ER assessor** (WHAT) ;
- **Evidence selector** : choisit 1..N snapshots frozen du RB (fail-closed si manquant) ;
- **reviewPolicyRef** compatible.

Propriétés :

- pas de marketplace / pas de règles client-controlled ;
- unknown → `applicable: false` → `not_proven` (`no_applicable_contract_result_rule`) ;
- temp-artifact devient la **première** entrée registry (comportement préservé) ;
- docs_write = **deuxième** entrée (pas un one-off hors registry) ;
- futurs commit/push/PR/CI = nouvelles entrées **sans** toucher le shell EvaluateContractResult.

### OPTION 3 — Declarative contract-driven result semantics

Le contrat porte un schéma déclaratif versionné d’effets attendus (predicates génériques) interprété par un moteur générique sans registry d’assessors.

| | |
| --- | --- |
| **Forces** | Maximalement « WHAT in contract » |
| **Risques** | Sur-généralisation ; schema/migration ; validation complexe ; sécurité des predicates ; maturité Product insuffisante |
| **Compat** | ECs existants n’ont pas ce schéma ; `expectedOutputs` sont des strings FR libres aujourd’hui |
| **Verdict framing** | **Excessif** pour la maturité actuelle |

### OPTION 4 (si utile) — Temporary Option 1 for docs_write WITH EXIT → Option 2

Séquence : Lot B docs_write en Option 1 **explicitement temporaire**, exit = extraction registry Option 2 avant toute 3ᵉ action. Acceptable seulement si Morris veut un PASS docs_write plus rapide **avec** exit daté. Sinon préférer Option 2 dès Lot A.

---

## 10. Tradeoffs

| Critère | Opt 1 | Opt 2 | Opt 3 |
| --- | --- | --- | --- |
| Reuse moteur unique | Oui | Oui | Oui (mais moteur devient interpréteur) |
| Pas d’archi parallèle | Oui | Oui | Risque de « second langage » |
| Deterministic / fail-closed | Oui | Oui | Oui si predicates bornés |
| Auditabilité (`ruleRef`) | Oui | Oui (meilleure versioning) | Dépend schéma |
| Evidence traceability | Oui | Oui (+ selector multi) | Oui |
| Bound snapshot compat | Oui | Oui | Migration schéma probable |
| Back-compat temp-artifact | Oui | Oui (1ʳᵉ entrée) | Reprise EO strings |
| No migration preferred | Oui | Oui | Non / risqué |
| Extensibilité Git/PR/CI | Coûteux | Naturelle | Théorique |
| Effort | Minimal court terme | Petit-moyen | Élevé |
| Complexité cognitive | Basse puis dette | Moyenne stable | Haute |
| Testabilité | Bonne | Bonne (isolation entrée) | Difficile |
| Idempotency / re-eval | Inchangé | Inchangé | Inchangé + schema |
| HOW/WHAT separation | Faible (tout dans ifs) | Forte (applicability vs assessors) | Maximale |
| Progressive delivery | Oui | Oui (A→B→C) | Difficile |
| Debt/exit | Exit → Opt 2 | Exit = registry frozen + ruleRefs | Exit = simplification |

---

## 11a. Morris decision (ADOPTED)

**ADOPT RESULT SEMANTICS REGISTRY ARCHITECTURE** — server-owned static registry · frozen ReviewBundle multi-Evidence AND · explicit ClaimEvaluation supersession · implement Lot A+B as one ZERO-REAL macro · success REAL provenance adapt if non-structural.

Implementation status (local, not on main): registry live; temp-artifact entry #1; docs_write entry #2; Critical Review blockers CR-BLK-01/02/03/04 **CLOSED**; **HOW ≠ WHAT** — `boundedDocsWriteM3ResolutionProfile` does **not** inject `BOUNDED_DOCS_WRITE_EO_TEMPLATE` into successor `expectedOutputs` (SupersedeExecutionContract preserves predecessor WHAT when no override); Attempt 3 ZERO-REAL strict current CE remains **not_proven**; project commit/push/PR **FORBIDDEN** until Morris Git-integration gate.

## 11. Technical recommendation candidate (historical — now consumed)


**PREFERRED (Cursor technical recommendation — NOT a Morris decision) : OPTION 2 — Result Semantics Registry.**

### Pourquoi

- Réutilise le shell EvaluateContractResult / CE / bound snapshot / AND status **tels quels**.
- Corrige le vrai gap : **fermeture** de `resolveApplicableContractResultRule` + assessors hard-codés.
- Empêche docs_write de devenir l’architecture par accident (Option 1 sans exit).
- Évite le sur-design déclaratif (Option 3) alors que `expectedOutputs` / `evidenceRequirements` existent déjà.
- Aligné Build Doctrine : reuse, pas de parallèle, temporary-with-exit si une étape Option 1 est jamais choisie.

### Exact reuse points

- `EvaluateContractResult` request/gates/fingerprint/create CE
- `deriveCanonicalContractResultStatus`
- Bound `semanticMaterial.expectedOutputs` / `evidenceRequirements`
- ReviewBundle freeze + frozen snapshots
- Existing temp-artifact assessors → **ported as first registry entry**
- `ingestDocsWriteArtifactEvidence` → Evidence + RB (freeze à ajouter côté wiring Product)

### Exact new abstraction(s)

- `ContractResultSemantic` (ou nom équivalent) : applicability + ruleRef + EO/ER assess + EvidenceSelector
- `CONTRACT_RESULT_SEMANTICS` : tableau/static map **server-owned**
- `resolveApplicableContractResultRule` devient lookup registry (API publique stable)

### Inchangé

- ClaimEvaluation schema / subjectKind
- Bound snapshot Option B
- Product SUCCESS projection rules (CE pass ∧ Attempt succeeded)
- Build Doctrine / C1 / runtime v3 NON ADOPTED
- Pas de second moteur

### Footprint attendu

- Lot A : registry seam + migration code temp-artifact → entrée #1 + tests non-régression
- Lot B : entrée docs_write + Evidence selector Artifact + wiring freeze RB docs_write + EvaluateContractResult + tests + requal Attempt 3 **sans REAL** si lifecycle B
- Lot C : futures classes seulement quand une capacité Product réelle les exige

### Migration

**Non** (préféré) — pas de migration SQLite si CE/RB/Evidence actuels suffisent ; nouveaux `ruleRef` / CE ids seulement.

### docs_write comme première preuve non one-off

Deuxième **entrée registry**, pas branche orpheline hors modèle. Même fail-closed, mêmes invariants Evidence frozen.

### Futurs Git/PR/CI

Nouvelles entrées registry + Evidence typées déjà amorcées (`TypedGitEvidenceSource`) ; **hors** R13 implementation.

### Risks

- Registry trop large trop tôt → limiter Lot C
- Evidence selector mal borné → PASS partiel → exiger AND explicite des snapshots requis
- Product id pinning W3-B (`clm:w3b:`) → stratégie d’identité CE docs_write à trancher (voir §13)

### Stop conditions

- Tentation de second moteur
- Rule selection client-controlled
- PASS status-only / resultRef-only
- Migration persistence « pour le plaisir »
- Implémenter commit/push/PR/CI dans le premier lot d’implémentation

---

## 12. Decision status

Morris a **ADOPTED** Option 2 (+ supersession + A+B + provenance adapt if non-structural).
La recommandation technique §11 est **CONSUMED**.
Reste ouvert : **Git integration** (commit/push/PR/merge) — gate Morris distinct.

---

## 13. Attempt 3 requalification analysis

| Question | Fait |
| --- | --- |
| Même `idem:w3b-ce:{attempt}` | **Reuse** CE `not_proven` — **pas** de recalcul |
| EvaluateContractResult | **create-only** `version: 1` — pas d’update in-place |
| `supersedesClaimEvaluationId` | Existe sur CE / EvaluateClaim ; **pas** branché sur EvaluateContractResult |
| Evidence Artifact | **Déjà** durable `ev:docs-write:xat:w3a:c4c5670edb4658cc` |
| RB docs_write | **draft** — freeze **non** fait |
| Nouveau REAL | **Non requis** pour re-prouver l’effet fichier déjà Evidence-backed |

### Classification : **B — CLOSED LOCALLY; Attempt 3 = NOT_PROVEN under strict EO (CASE B)**

**B — small non-structural lifecycle wiring** — implemented as `requalifyDocsWriteContractResult` (canonical freeze + EvaluateContractResult + `supersedesClaimEvaluationId`).

Bound Attempt 3 `expectedOutputs` (from durable bound snapshot — not live EC):

1. `Le fichier Markdown matérialisé au chemin cible` → **NOT_PROVEN** (free-form prose; not canonical EO template; not path-shaped)
2. `Vérification de l’existence et de la conformité minimale du fichier` → **NOT_PROVEN** (content/conformity obligation; Artifact Evidence metadata does not prove « conformité minimale »)

`evreq:docs_write_artifact` → **SATISFIED** (Artifact Evidence bindings/digest/location hold).

Overall ClaimEvaluation status → **not_proven** (AND of EO).

Campaign DB (`pje2e-real-01`) post Critical Review correction (2026-09-18):

| Fact | Value |
| --- | --- |
| Attempts | **3 → 3** (no new Attempt) |
| CE lineage | `clm:w3b:b62e7e34320e78ea` `not_proven` → `clm:docs-write:xat:w3a:c4c5670edb4658cc` historical `pass` (permissive EO, immutable) → `clm:docs-write:strict-eo-v1:xat:w3a:c4c5670edb4658cc` **current** `not_proven` |
| REAL | **ZERO** |

**Evidence gap (acceptance only):** bound EO wording requires content/conformity proof not carried by current Artifact Evidence schema; do not invent Evidence; do not read live EC as substitute.

**Interdit (toujours) :** rewrite SQLite / mutation Attempt 3 / fake PASS / new REAL.

---

## 14. Success-path REAL provenance disposition

| Fait | |
| --- | --- |
| `processDiagnostic` | Persisté via `recordExecutionFailure` ; **absent** du chemin success dans execution-attempt application |
| UI | `productReservationsForAttempt` lit `processDiagnostic.realProcessInvoked` (et proxies) |
| Effet | SUCCESS REAL peut afficher encore la sémantique « substitution » / antiClaims.realProven=false |

**Disposition candidate : DEFER** (ne pilote pas l’architecture ContractResult).

**ADAPT IN SAME IMPLEMENTATION** acceptable seulement comme sidecar non-bloquant du Lot B si le coût est trivial (symétrie success/failure de `processDiagnostic` déjà typé). Sinon **DEFER** explicitement hors CR extensibility.

**KEEP** fingerprint drift R12.

---

## 15. Migration / backward compatibility

| Asset | Impact Option 2 |
| --- | --- |
| temp-artifact CR | Préservé comme entrée #1 ; tests non-régression obligatoires |
| Historical CE | Immutables ; nouveaux CE pour nouvelles evals |
| Bound EC snapshots | Inchangés |
| RB / Evidence | Inchangés ; freeze docs_write draft |
| Attempt 3 | Lecture seule ; pas de mutation |
| QA deterministic | Étendre suites ; ne pas casser W3-B |
| SQLite schema | **Aucune migration préférée** |

Si une migration s’avérait nécessaire → **STOP** / Morris structural gate séparé.

---

## 16. Progressive implementation trajectory

### Lot A — Core extensibility seam

- Introduire registry Result Semantics
- Porter temp-artifact comme entrée #1
- Tests non-régression W3-B / EvaluateContractResult
- **ZERO REAL** · pas de docs_write PASS encore

### Lot B — docs_write first additional semantic

- Entrée registry docs_write (`cursor.docs_write.apply` + `cap:cursor.docs_write` + `evreq:docs_write_artifact` / EO material)
- Evidence selector → Artifact Evidence
- Freeze RB docs_write + EvaluateContractResult wiring Product
- Requalification déterministe Attempt 3 **si** classification B confirmée par Morris
- Provenance success-path : DEFER ou sidecar minimal
- **ZERO REAL** préféré

### Lot C — Future effect classes

- Seulement quand une capacité Product réelle l’exige (commit/push/PR/CI/merge)
- Pas de micro-cycle par fichier
- Pas d’implémentation dans R13

**Forme d’implémentation post-décision :** un macro cohérent pouvant contenir A+B s’ils restent petits ; **pas** un micro-cycle R1-style par action.

---

## 17. Debt / exit

| Brick | Exit |
| --- | --- |
| Si Opt 1 temporaire docs_write | Exit daté → extraction registry Opt 2 avant 3ᵉ action |
| Registry Opt 2 | Exit = ruleRefs versionnés + allowlist server-owned figée par lot |
| CE dual-id (w3b vs docs_write) | Exit = sélection Product unique documentée / éventuelle supersession |
| Provenance success DEFER | Exit = lot dédié ou sidecar B |

---

## 18. Morris decisions required

1. **Architecture principale** : Option 1 · Option 2 · Option 3 · Option 4 (1→2 with exit) ?
2. **Evidence model** : confirmer selector multi-Evidence AND depuis RB frozen (vs garder 1 Evidence API long-terme) ?
3. **Attempt 3 requal** : accepter classification **B** (freeze + new CE ids + selector) ? Exiger sous-point **C** supersession ?
4. **Provenance success-path** : DEFER vs ADAPT in Lot B ?
5. **Périmètre premier lot d’implémentation** : A only · A+B · autre ?
6. **GO d’implémentation** distinct après décision (R13 n’autorise **aucun** code Product).

---

## 19. Claims allowed / forbidden

### Allowed (après framing)

- Architecture CR actuelle factuellement mappée
- Options d’extensibilité qualifiées
- Recommandation technique **candidate**
- Requalification Attempt 3 classée **B** (avec réserve C supersession)
- ZERO REAL / ZERO Product implementation

### Forbidden

- Architecture ADOPTED
- docs_write ContractResult fixed / PASS
- Attempt 3 Product PASS
- Generalized Git effects supported
- Product Journey READY / COMPLETE
- runtime v3 ADOPTED

---

## 20. Next gate

**Après décision Morris :** macro d’implémentation Contract Result extensibility (Lot A[+B]) — **ZERO REAL** jusqu’à GO explicite distinct.

**Hors scope immédiat :** R13 n’autorise pas commit/push/PR/merge de ce document ; publication = Review Handoff L3 uniquement jusqu’à GO Morris d’intégration documentaire éventuel.

---

## Annexe A — Source map (code)

| Chemin | Rôle |
| --- | --- |
| `app/lib/oa/evidence-review/application/contractResultSemanticEvaluator.ts` | Rule hard-codée + assessors temp-artifact |
| `app/lib/oa/evidence-review/application/contractResultAssessment.ts` | EO/ER dispatch + AND status |
| `app/lib/oa/evidence-review/application/evaluateContractResult.ts` | Shell CR · 1 Evidence · create CE |
| `app/lib/oa/evidence-review/application/contractResultReviewPolicy.ts` | Policy bypass Morris structural gate (W3-B) |
| `app/lib/oa/evidence-review/application/contractResultVerdictProjection.ts` | Projection verdict |
| `app/lib/oa/evidence-review/domain/contractResultTypes.ts` | Bindings / subjectKind |
| `app/lib/oa/execution-contract/domain/semanticFingerprint.ts` | Semantic material |
| `app/lib/oa/execution-attempt/domain/boundExecutionContract.ts` | Bound snapshot |
| `app/features/project-assistant/w2/materializeW3bProductTerminal.ts` | Product CR orchestration |
| `app/features/project-assistant/w2/w3bProductTerminalProjection.ts` | Terminal + reservations |
| `app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts` | Artifact Evidence + RB draft |
| `app/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts` | ER docs_write profile |

## Annexe B — Roadmap note (candidate only — NOT applied in R13)

Tip actuel déjà correct : next = R13 framing · NOT STARTED.
**Ne pas modifier** la Roadmap dans R13. Après décision Morris + éventuelle intégration doc, tip factuel du type : « R13 framing QUALIFIED / decision PENDING|CONSUMED ».


```
