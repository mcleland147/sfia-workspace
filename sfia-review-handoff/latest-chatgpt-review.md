# SFIA STUDIO — NORA MW4 CORR-MW4-01 CORRECTED CANDIDATE
# Grounding durability + Narrative / Evidence coherence — CRITICAL CORRECTION

**Timestamp (Europe/Paris):** 2026-09-03 08:11:57 CEST
**Timestamp (UTC):** 2026-09-03T06:11:57Z
**Cycle:** CORR-MW4-01 — Delivery / Implementation — Correction
**Typology:** INC
**Profile:** CRITICAL
**Capability:** MW4 — Grounding durability + Narrative/Evidence coherence
**Stories:** MW4-S01 · MW4-S02 · MW4-S03
**Correction GO:** CORR-MW4-01 LOCAL CORRECTION (Morris authorized after ChatGPT PARTIAL)

**Prior handoff (superseded tip for this publish):**
- branch `sfia/review-handoff`
- commit `b49786ee72a28261bbfecc45407dfe6f3db2c802`
- blob `d670976a4928325dd7a858868bc393806d15daeb`
- prior candidate verdict: READY FOR CHATGPT CRITICAL MW4 DELIVERY REVIEW
- **ChatGPT prior verdict: PARTIAL — CORRECTION REQUIRED**

**Final corrected candidate verdict:** READY FOR CHATGPT CRITICAL MW4 CORR-01 RE-REVIEW

---

## 1. Purpose

Correct only the six ChatGPT CRITICAL findings inside the already-authorized MW4 Delivery candidate (ADAPT-first). No architecture pivot. No new persistence/table. No LIVE OpenAI. No project commit/push/PR/merge. No Roadmap/C5 truth-sync. No Cognitive Completion claim. No runtime v3 adoption.

| ID | Finding | Correction |
|---|---|---|
| CORR-01A | S03 partiality from non-emitted fields | Derive from real EventSink: `toolName`/`status`/`summary`/`pathOrRef`; parse `read path Lstart-end/total … [hasMore]`; only `git_local_read_file`; L100-N/N = PARTIAL; search ≠ read |
| CORR-01B | Persisted `readCoverage` unused next turn | Load `record.readCoverage`; CURRENT vs REMEMBERED PRIOR disclosures; persist after turn |
| CORR-01C | EVAL self-constructed ideal facts | `observeMw4FromProductPath` via `runNoraCognitiveTurn` + Fake + Session; d0Runner wired to product path |
| CORR-01D | Evidence ID set ≠ claim map | Explicit `UNBOUND / NOT RECONSTRUCTABLE`; no guess A/B |
| CORR-01E | repo failure ≡ not-found/fabricated | Typed `FOUND` / `NOT_FOUND` / `RESOLUTION_FAILED`; fail closed; not fabricated |
| CORR-01F | `rememberedAtIso` default Unix epoch | Production default `new Date().toISOString()`; tests inject `nowIso` |

TEST CONTRACT CORRECTION — REAL PRODUCT EVENT SHAPE (invalid prior EventSink field assumptions removed from S03 tests).

---

## 2. Local Git Truth Check (CORR special dirty-worktree mode)

| Field | Value |
|---|---|
| Repository | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-workspace-nora-mw4-grounding` |
| Branch | `delivery/sfia-studio-nora-mw4-grounding-durability` |
| HEAD start/end (no project commit) | `deb34943dd85472644c221243cd7c0fd5369614e` |
| origin/main | `deb34943dd85472644c221243cd7c0fd5369614e` |
| Dirty WT | **INTENTIONAL** — prior uncommitted MW4 candidate preserved; no reset/clean/stash |
| Entry | PASS — HEAD/main/branch match; candidate scope = MW4 files only |
| Project commit | **NO** |
| Project push | **NO** |
| Project PR | **NO** |
| Merge | **NO** |

### git status --short (product-relevant; excludes node_modules noise)

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/project-assistant/collectToolTelemetry.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
 M projects/sfia-studio/app/features/project-assistant/mw3AvailableEvidence.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/memoryBCompaction.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
 M projects/sfia-studio/app/lib/nora-eval/catalog.ts
 M projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
 M projects/sfia-studio/app/lib/nora-eval/index.ts
 M projects/sfia-studio/app/lib/nora-eval/scorers.ts
 M projects/sfia-studio/app/lib/nora-eval/types.ts
?? .tmp-sfia-review/diff-stat.txt
?? .tmp-sfia-review/mw4-modified.diff
?? .tmp-sfia-review/status.txt
?? .tmp-sfia-review/untracked-product.txt
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.corr01b.persistedCoverage.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.corr01d.claimProvenance.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.corr01f.timestamp.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.cumulative.mw0-mw4.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.s01.grounding.durability.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.s02.recovery.narrative.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.s03.partiality.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-eval/mw4.grounding.eval.test.ts
?? projects/sfia-studio/app/__tests__/platform/mw4.corr01a.toolRouter.readCoverage.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/mw4.corr01e.resolutionFailure.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/mw4.s01.evidence.reresolve.product.d0.test.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/groundingDurability.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/postEvidenceNarrativePolicy.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/readCoverage.ts
?? projects/sfia-studio/app/lib/nora-eval/mw4Observe.ts

```

### git diff --stat (tracked product mods vs HEAD/main)

```
 .../project-assistant/collectToolTelemetry.ts      |  43 +++-
 .../features/project-assistant/f2/orchestrateF2.ts |   2 +
 .../f3/postEvidenceNoraAnalysis.ts                 |   5 +-
 .../project-assistant/mw3AvailableEvidence.ts      | 215 +++++++++++++++--
 .../features/project-assistant/orchestrateTurn.ts  |  79 ++++++-
 .../project-assistant/presentationLabels.ts        |  16 ++
 .../app/features/project-assistant/types.ts        |  19 ++
 .../app/lib/nora-cognitive-runtime/index.ts        |  50 ++++
 .../nora-cognitive-runtime/memoryBCompaction.ts    |  23 +-
 .../nora-cognitive-runtime/runNoraCognitiveTurn.ts | 261 ++++++++++++++++++++-
 .../app/lib/nora-cognitive-runtime/types.ts        |   3 +
 projects/sfia-studio/app/lib/nora-eval/catalog.ts  |  18 ++
 projects/sfia-studio/app/lib/nora-eval/d0Runner.ts |   3 +
 projects/sfia-studio/app/lib/nora-eval/index.ts    |   6 +
 projects/sfia-studio/app/lib/nora-eval/scorers.ts  |  57 +++++
 projects/sfia-studio/app/lib/nora-eval/types.ts    |  12 +-
 16 files changed, 788 insertions(+), 24 deletions(-)

```

### Untracked product files (new in candidate)

```
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.corr01b.persistedCoverage.d0.test.ts
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.corr01d.claimProvenance.d0.test.ts
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.corr01f.timestamp.d0.test.ts
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.cumulative.mw0-mw4.d0.test.ts
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.s01.grounding.durability.d0.test.ts
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.s02.recovery.narrative.d0.test.ts
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.s03.partiality.d0.test.ts
projects/sfia-studio/app/__tests__/nora-eval/mw4.grounding.eval.test.ts
projects/sfia-studio/app/__tests__/platform/mw4.corr01a.toolRouter.readCoverage.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/mw4.corr01e.resolutionFailure.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/mw4.s01.evidence.reresolve.product.d0.test.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/groundingDurability.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/postEvidenceNarrativePolicy.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/readCoverage.ts
projects/sfia-studio/app/lib/nora-eval/mw4Observe.ts

```

### git diff --check
PASS (exit 0) on `projects/sfia-studio/app`.

---

## 3. Six correction findings → results

### CORR-01A — PASS
- `readCoverage.ts` rewritten against real summary/pathOrRef contract.
- `collectToolTelemetry.ts` passes only real EventSink fields into derive.
- ToolRouter / gitLocalReadAdapter **NOT modified** (parse existing summary sufficient).
- Boundary test: `mw4.corr01a.toolRouter.readCoverage.d0.test.ts` — routeToolCall → EventSink → collectToolTelemetry → ReadCoverageFact (A–H incl. L2-N/N partial, search≠read, denied/failed).
- Unit shapes: `mw4.s03.partiality.d0.test.ts` updated for real summaries; L100-N/N hard negative.

### CORR-01B — PASS
- `prepareMw4Grounding` loads persisted `record.readCoverage` as `remembered_prior`.
- `mergeCurrentAndRememberedCoverage` keeps CURRENT vs REMEMBERED distinct.
- Turn end persists via `rememberReadCoverage`.
- Tests: `mw4.corr01b.persistedCoverage.d0.test.ts` (S03-PERSIST-01..04).

### CORR-01C — PASS
- `observeMw4FromProductPath` exercises ProductSqliteSession + FakeConversationProvider + `runNoraCognitiveTurn`.
- `d0Runner` MW4 scenario uses product path (not helper alone).
- Hard gate: L100-N/N must be partial or `mw4GroundingOk=false`.
- Helper `observeMw4FromRuntime` retained for unit semantics only.

### CORR-01D — PASS (HONESTLY UNBOUND)
- No claim ledger/database.
- `buildClaimSpecificProvenanceDisclosure` defaults UNBOUND / NOT RECONSTRUCTABLE.
- Negative proof: `mw4.corr01d.claimProvenance.d0.test.ts` — must not guess A or B.

### CORR-01E — PASS
- `EvidenceLookupOutcome`: found | not_found | resolution_failed.
- Repository throw → RESOLUTION_FAILED; null → NOT_FOUND; must not label fabricated on repo failure.
- MW3 `resolveAvailableContradictionPointers` still returns only valid pointers.
- Tests: `mw4.corr01e.resolutionFailure.d0.test.ts`.

### CORR-01F — PASS
- `rememberEvidenceIds` / `rememberReadCoverage` default `new Date().toISOString()`.
- Tests inject `nowIso`; assert not epoch on default path: `mw4.corr01f.timestamp.d0.test.ts`.

---

## 4. Architecture disposition (unchanged ADAPT-first)

KEEP: OD-04 Option C · Agents SDK Runner · Product SQLite Session · `session_items` · Memory B non-authoritative · Studio/OA Evidence sole governed Evidence · MW3 resolution seam · ToolRouter/EventSink · MW0 eval · S02 Post-Evidence policy.

DO NOT CREATE (and were not created): GroundingLedger · second Evidence repo · new SQLite table · claim DB · vector store · Conversations/Compaction/Search/MCP · parallel eval runtime.

| Gate | Value |
|---|---|
| New architecture | **NO** |
| New persistence / table / schema | **NO** |
| ToolRouter contract change | **NO** |
| LIVE OpenAI | **0** |
| Fake/Real | DETERMINISTIC + PRODUCT-BOUND EVAL + PRODUCT BOUNDARY (Fake OpenAI; real ToolRouter fixture path for CORR-01A) |

---

## 5. Validation evidence

| Check | Result |
|---|---|
| CORR focused (11 files / 49 tests) | PASS |
| MW1+MW2+MW3 focused (27 files / 211 tests) | PASS |
| Full serial vitest | **272 passed \| 14 skipped** (2508 passed \| 132 skipped) |
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `git diff --check` | PASS |
| LIVE OpenAI calls | **0** |

Exact CORR-focused tests:
- `__tests__/platform/mw4.corr01a.toolRouter.readCoverage.d0.test.ts`
- `__tests__/nora-cognitive-runtime/mw4.s03.partiality.d0.test.ts`
- `__tests__/nora-cognitive-runtime/mw4.corr01b.persistedCoverage.d0.test.ts`
- `__tests__/nora-cognitive-runtime/mw4.corr01d.claimProvenance.d0.test.ts`
- `__tests__/project-assistant/mw4.corr01e.resolutionFailure.d0.test.ts`
- `__tests__/nora-cognitive-runtime/mw4.corr01f.timestamp.d0.test.ts`
- `__tests__/nora-eval/mw4.grounding.eval.test.ts`
- `__tests__/nora-cognitive-runtime/mw4.s01.grounding.durability.d0.test.ts`
- `__tests__/nora-cognitive-runtime/mw4.s02.recovery.narrative.d0.test.ts`
- `__tests__/nora-cognitive-runtime/mw4.cumulative.mw0-mw4.d0.test.ts`
- `__tests__/project-assistant/mw4.s01.evidence.reresolve.product.d0.test.ts`

---

## 6. Revised MW4 exit matrix (CORR §22)

### S01
| Criterion | Result |
|---|---|
| Evidence ID continuity | PASS |
| current OA/Studio re-resolution | PASS |
| repository failure distinguished from not-found | PASS |
| project isolation | PASS |
| Memory B narrative ≠ Evidence | PASS |
| compaction honesty | PASS |
| claim-specific provenance | **HONESTLY UNBOUND** |
| claim-specific unbound downgrade | PASS |

### S02
| Criterion | Result |
|---|---|
| Evidence interpreted ≠ replaced | PASS |
| progress ≠ SUCCESS | PASS |
| RecoveryRecommendation ≠ HD/Confirmation/GO | PASS |
| MW3 Cognitive STOP regression | PASS |

### S03
| Criterion | Result |
|---|---|
| real ToolRouter/EventSink boundary | PASS |
| full-read detection | PASS |
| suffix range L2-N/N | PASS |
| prefix partial | PASS |
| middle range | PASS |
| search ≠ read | PASS |
| failed/denied fail-closed | PASS |
| persisted partiality consumed next turn | PASS |
| prior coverage distinguished from current revalidation | PASS |
| no false corpus completeness | PASS |

### EVAL
| Criterion | Result |
|---|---|
| helper/scorer semantics | PASS |
| product-bound MW4 observation | PASS |
| versioned eval scenario | PASS |

### CUMULATIVE
| Criterion | Result |
|---|---|
| MW0×MW1×MW2×MW3×MW4 deterministic integrated chain | PASS |

---

## 7. RA / reserves / debt / realism

| Item | State |
|---|---|
| RA-06 | OPEN / carry (unchanged by CORR) |
| RA-07 | OPEN / carry (unchanged by CORR) |
| MW2-R01/R02/R03 | CARRY |
| Debt | Session-marker grounding continuity remains non-authoritative; claim-specific provenance unbound by design (no claim ledger); ToolRouter does not emit structured start/end/total fields (parsed from summary — accepted) |
| Remaining realism gaps | LIVE OpenAI / REAL campaign not run; production model routing not proven; multi-doc corpus completeness still refuse-false; no claim↔Evidence structural binding product path yet |
| Morris gates still required | ChatGPT CORR-01 re-review PASS → decide whether/how bounded MW4 REAL; then any project commit/PR/merge separately; MW4 closure not automatic |

---

## 8. Anti-claims

- NOT MW4 CLOSED
- NOT READY FOR REAL automatically
- NOT Cognitive Completion PROVEN
- NOT runtime v3 ADOPTED
- NOT Roadmap/C5 truth-synced
- NOT project committed / pushed / PR'd / merged
- LIVE OpenAI = 0

---

## 9. Files changed specifically by CORR-MW4-01 (vs pre-CORR candidate semantics)

Primary correction surfaces (modified/rewritten on dirty candidate):
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/readCoverage.ts` (rewrite — real EventSink)
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/groundingDurability.ts` (01B/01D/01E/01F)
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts` (consume+persist coverage; claim unbound surface)
- `projects/sfia-studio/app/features/project-assistant/mw3AvailableEvidence.ts` (typed lookup)
- `projects/sfia-studio/app/features/project-assistant/collectToolTelemetry.ts` (real fields only)
- `projects/sfia-studio/app/lib/nora-eval/mw4Observe.ts` (product-bound path)
- `projects/sfia-studio/app/lib/nora-eval/d0Runner.ts` (wire product observe)
- CORR tests: `mw4.corr01a|01b|01d|01e|01f.*`, rewritten `mw4.s03.partiality.d0.test.ts`, updated `mw4.grounding.eval.test.ts`

Cumulative candidate still includes prior MW4 files (S01/S02/S03 baseline + postEvidenceNarrativePolicy + orchestrate wiring + scorers/catalog/types).

---

## 10. Complete tracked product DIFF vs main (HEAD)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/collectToolTelemetry.ts b/projects/sfia-studio/app/features/project-assistant/collectToolTelemetry.ts
index 8fbfcefa..c893c1c2 100644
--- a/projects/sfia-studio/app/features/project-assistant/collectToolTelemetry.ts
+++ b/projects/sfia-studio/app/features/project-assistant/collectToolTelemetry.ts
@@ -1,4 +1,10 @@
 import type { TechnicalEvent } from "@/lib/platform/observability/types";
+import {
+  aggregateReadCoverage,
+  deriveReadCoverageFromToolEvent,
+  type ReadCoverageAggregate,
+  type ReadCoverageFact,
+} from "@/lib/nora-cognitive-runtime";
 import type { AssistantSourceDto, AssistantToolEventDto } from "./types";

 function asString(v: unknown): string | null {
@@ -21,14 +27,18 @@ function mapStatus(

 /**
  * Collect tool events + source refs from platform EventSink emissions.
+ * MW4-S03 / CORR-01A — derives read coverage from REAL EventSink shape
+ * (toolName, status, summary, source.pathOrRef) only.
  */
 export function collectToolTelemetry(events: TechnicalEvent[]): {
   toolEvents: AssistantToolEventDto[];
   sources: AssistantSourceDto[];
+  readCoverage: ReadCoverageAggregate;
 } {
   const toolEvents: AssistantToolEventDto[] = [];
   const sources: AssistantSourceDto[] = [];
   const seenSources = new Set<string>();
+  const coverageByPath = new Map<string, ReadCoverageFact>();

   for (const event of events) {
     if (
@@ -40,7 +50,8 @@ export function collectToolTelemetry(events: TechnicalEvent[]): {
     }

     const detail = event.detail;
-    const toolName = asString(detail.toolName) ?? asString(detail.name) ?? "unknown";
+    const toolName =
+      asString(detail.toolName) ?? asString(detail.name) ?? "unknown";
     const status = mapStatus(detail.status, event.type);
     const source = detail.source as
       | { kind?: string; label?: string; pathOrRef?: string | null }
@@ -61,6 +72,29 @@ export function collectToolTelemetry(events: TechnicalEvent[]): {
       readOnly: true,
     });

+    // CORR-01A — do not invent EventSink fields the product does not emit.
+    // Pass only the real contract into coverage derivation.
+    const fact = deriveReadCoverageFromToolEvent({
+      toolName,
+      status,
+      pathOrRef,
+      summary,
+    });
+    if (fact) {
+      const key = (fact.documentPath ?? fact.pathOrRef).trim();
+      const prior = coverageByPath.get(key);
+      const rank: Record<ReadCoverageFact["coverage"], number> = {
+        full: 0,
+        partial: 1,
+        denied: 2,
+        failed: 3,
+        absent: 4,
+      };
+      if (!prior || rank[fact.coverage] >= rank[prior.coverage]) {
+        coverageByPath.set(key, fact);
+      }
+    }
+
     if (
       event.type === "TOOL_SUCCEEDED" &&
       source &&
@@ -79,5 +113,10 @@ export function collectToolTelemetry(events: TechnicalEvent[]): {
     }
   }

-  return { toolEvents, sources };
+  const coverageFacts = [...coverageByPath.values()];
+  return {
+    toolEvents,
+    sources,
+    readCoverage: aggregateReadCoverage(coverageFacts),
+  };
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index bfeb313e..242252e6 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -389,6 +389,8 @@ export async function orchestrateAssistantSend(input: {
    * Prefer per-instance OpenAIConversationProvider over process.env mutation.
    */
   provider?: ConversationProvider;
+  /** Test override for Product SQLite Session path (MW1/MW4 durability). */
+  sessionDbPath?: string;
 }): Promise<ProjectAssistantSendResult> {
   const content = input.content.trim();
   if (!content) {
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
index dced1c77..f3bd655e 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
@@ -13,6 +13,7 @@
  */

 import { resolveConversationProvider } from "@/lib/platform/ai";
+import { buildPostEvidenceNarrativePolicyDisclosure } from "@/lib/nora-cognitive-runtime";

 /** Same marker string as f2/ckcCognitiveContext — keep in sync (string only). */
 const CKC_COGNITIVE_REASONING_SYSTEM_MARKER =
@@ -70,7 +71,9 @@ Interdit:
 - lancer un ExecutionContract / Attempt;
 - demander des secrets;
 - inventer une preuve REAL.
-Réponds en français, court, factuel.`;
+Réponds en français, court, factuel.
+
+${buildPostEvidenceNarrativePolicyDisclosure()}`;

 function boundedFactsJson(facts: PostEvidenceAnalysisFacts): string {
   return JSON.stringify({
diff --git a/projects/sfia-studio/app/features/project-assistant/mw3AvailableEvidence.ts b/projects/sfia-studio/app/features/project-assistant/mw3AvailableEvidence.ts
index 8eae538f..96fec3f5 100644
--- a/projects/sfia-studio/app/features/project-assistant/mw3AvailableEvidence.ts
+++ b/projects/sfia-studio/app/features/project-assistant/mw3AvailableEvidence.ts
@@ -5,10 +5,19 @@
  * Fake/tests may substitute repository storage.
  * Project-scope filtering, attribution mapping, and freshness metadata
  * always go through mapOaEvidenceForProject.
+ *
+ * MW4 — resolveRememberedEvidence / resolveEvidencePointers reuse the same
+ * lookup + mapOaEvidenceForProject path (zero authority until re-resolved).
  */
 import type { ContradictionEvidencePointer } from "@/lib/nora-cognitive-runtime";
+import {
+  classifyRememberedEvidence,
+  type RememberedEvidenceResolution,
+} from "@/lib/nora-cognitive-runtime/groundingDurability";
 import type { Evidence } from "@/lib/oa/evidence-review/domain/types";
-import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
+// vertical-slice-runtime is server-only: load lazily inside lookupEvidenceRecord
+// so project-assistant modules that re-export resolvers remain importable under
+// jsdom unit tests (orchestrateTurn.test.ts).

 export type Mw3TestEvidenceCatalog = {
   projectId: string;
@@ -52,30 +61,197 @@ export function mapOaEvidenceForProject(
   };
 }

-export async function resolveAvailableContradictionPointers(input: {
+export type EvidenceLookupOutcome =
+  | { kind: "found"; evidence: Evidence }
+  | { kind: "not_found" }
+  | {
+      kind: "resolution_failed";
+      reason: "repository_unavailable" | "repository_error";
+    };
+
+export type EvidencePointerLookupResult = {
+  evidenceId: string;
+  pointer: ContradictionEvidencePointer | null;
+  /** Present when Evidence row existed but was not project-attributable. */
+  rawStatus?: Evidence["status"];
+  projectMismatch?: boolean;
+  /** CORR-01E — lookup outcome (found / not_found / resolution_failed). */
+  lookup: EvidenceLookupOutcome["kind"];
+};
+
+/**
+ * Generalization of MW3 pointer resolve — returns one result per claimed ID.
+ * MW3 wrapper filters to successful pointers only.
+ */
+export async function resolveEvidencePointers(input: {
   projectId: string;
   claimedEvidenceIds: string[];
-}): Promise<ContradictionEvidencePointer[]> {
+}): Promise<EvidencePointerLookupResult[]> {
   const projectId = input.projectId.trim();
   const claimed = input.claimedEvidenceIds
     .map((id) => id.trim())
     .filter(Boolean);
   if (!projectId || claimed.length === 0) return [];

-  const resolved: ContradictionEvidencePointer[] = [];
+  const out: EvidencePointerLookupResult[] = [];
   for (const evidenceId of claimed) {
-    const evidence = await lookupEvidenceRecord(evidenceId, projectId);
-    if (!evidence) continue;
+    const outcome = await lookupEvidenceRecord(evidenceId, projectId);
+    if (outcome.kind === "resolution_failed") {
+      out.push({
+        evidenceId,
+        pointer: null,
+        lookup: "resolution_failed",
+      });
+      continue;
+    }
+    if (outcome.kind === "not_found") {
+      out.push({ evidenceId, pointer: null, lookup: "not_found" });
+      continue;
+    }
+    const evidence = outcome.evidence;
+    const bound = evidence.bindings?.projectId?.trim() ?? "";
+    if (!bound || bound !== projectId) {
+      out.push({
+        evidenceId,
+        pointer: null,
+        rawStatus: evidence.status,
+        projectMismatch: true,
+        lookup: "found",
+      });
+      continue;
+    }
     const pointer = mapOaEvidenceForProject(evidence, projectId);
-    if (pointer) resolved.push(pointer);
+    out.push({
+      evidenceId,
+      pointer,
+      rawStatus: evidence.status,
+      projectMismatch: false,
+      lookup: "found",
+    });
+  }
+  return out;
+}
+
+export async function resolveAvailableContradictionPointers(input: {
+  projectId: string;
+  claimedEvidenceIds: string[];
+}): Promise<ContradictionEvidencePointer[]> {
+  const lookups = await resolveEvidencePointers(input);
+  const resolved: ContradictionEvidencePointer[] = [];
+  for (const row of lookups) {
+    if (row.pointer) resolved.push(row.pointer);
   }
   return resolved;
 }

+/**
+ * MW4-S01 — re-resolve remembered IDs; never accept fabricated narrative IDs
+ * without a resolver hit. Cross-project mismatches → missing / isolation.
+ */
+export async function resolveRememberedEvidence(
+  projectId: string,
+  ids: string[],
+): Promise<RememberedEvidenceResolution> {
+  const project = projectId.trim();
+  const rememberedIds = ids.map((id) => id.trim()).filter(Boolean);
+  if (!project) {
+    return {
+      rememberedIds,
+      valid: [],
+      downgraded: [],
+      missing: rememberedIds.map((evidenceId) => ({
+        evidenceId,
+        reason: "project_isolation_reject" as const,
+      })),
+    };
+  }
+
+  const lookups = await resolveEvidencePointers({
+    projectId: project,
+    claimedEvidenceIds: rememberedIds,
+  });
+
+  const pointers: ContradictionEvidencePointer[] = [];
+  const missingExtra: RememberedEvidenceResolution["missing"] = [];
+  const downgradedExtra: RememberedEvidenceResolution["downgraded"] = [];
+
+  for (const row of lookups) {
+    if (row.lookup === "resolution_failed") {
+      missingExtra.push({
+        evidenceId: row.evidenceId,
+        reason: "resolution_failed",
+      });
+      continue;
+    }
+    if (row.projectMismatch) {
+      missingExtra.push({
+        evidenceId: row.evidenceId,
+        reason: "project_isolation_reject",
+      });
+      continue;
+    }
+    if (!row.pointer) {
+      // Fall through to classify as not_found / fabricated.
+      continue;
+    }
+    // Downgrade non-attributable / withdrawn-like statuses explicitly.
+    if (!row.pointer.attributable) {
+      const reason =
+        row.rawStatus === "unavailable" ||
+        row.rawStatus === "rejected" ||
+        row.rawStatus === "superseded" ||
+        row.rawStatus === "stale" ||
+        row.rawStatus === "incomplete"
+          ? row.rawStatus === "rejected" || row.rawStatus === "superseded"
+            ? ("rejected_or_superseded" as const)
+            : ("unavailable_status" as const)
+          : row.pointer.sourceId === "unattributed"
+            ? ("missing_source" as const)
+            : ("not_attributable" as const);
+      downgradedExtra.push({
+        evidenceId: row.evidenceId,
+        reason,
+        pointer: row.pointer,
+      });
+      continue;
+    }
+    pointers.push(row.pointer);
+  }
+
+  const classified = classifyRememberedEvidence({
+    rememberedIds,
+    resolvedPointers: pointers,
+    treatUnresolvedAsFabricated: true,
+  });
+
+  // Merge explicit downgrades / project isolation that classify would miss
+  // (because we withheld non-attributable pointers from the pointer list).
+  const downgradedIds = new Set(downgradedExtra.map((d) => d.evidenceId));
+  const missingIds = new Set(missingExtra.map((m) => m.evidenceId));
+
+  const missing = [
+    ...missingExtra,
+    ...classified.missing.filter(
+      (m) => !missingIds.has(m.evidenceId) && !downgradedIds.has(m.evidenceId),
+    ),
+  ];
+  const downgraded = [
+    ...downgradedExtra,
+    ...classified.downgraded.filter((d) => !downgradedIds.has(d.evidenceId)),
+  ];
+
+  return {
+    rememberedIds,
+    valid: classified.valid,
+    downgraded,
+    missing,
+  };
+}
+
 async function lookupEvidenceRecord(
   evidenceId: string,
   currentProjectId: string,
-): Promise<Evidence | null> {
+): Promise<EvidenceLookupOutcome> {
   if (
     testCatalog &&
     testCatalog.projectId.trim() === currentProjectId.trim()
@@ -83,15 +259,26 @@ async function lookupEvidenceRecord(
     const fromTest = testCatalog.evidence.find(
       (item) => item.evidenceId === evidenceId,
     );
-    if (fromTest) return fromTest;
+    if (fromTest) return { kind: "found", evidence: fromTest };
+    return { kind: "not_found" };
   }

-  const oa = getRuntimeApplicationService().oa;
-  const repository = oa?.evidenceReviewServices?.repository;
-  if (!repository) return null;
   try {
-    return (await repository.findById(evidenceId)) ?? null;
+    const { getRuntimeApplicationService } = await import(
+      "@/lib/vertical-slice-runtime"
+    );
+    const oa = getRuntimeApplicationService().oa;
+    const repository = oa?.evidenceReviewServices?.repository;
+    if (!repository) {
+      return {
+        kind: "resolution_failed",
+        reason: "repository_unavailable",
+      };
+    }
+    const evidence = (await repository.findById(evidenceId)) ?? null;
+    if (!evidence) return { kind: "not_found" };
+    return { kind: "found", evidence };
   } catch {
-    return null;
+    return { kind: "resolution_failed", reason: "repository_error" };
   }
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index eb34ca6a..ed7ecaff 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -9,6 +9,10 @@ import {
   memoryBCompactionPiloteNotice,
   runNoraCognitiveTurn,
   formatCognitiveStopPiloteNotice,
+  aggregateReadCoverage,
+  rememberReadCoverage,
+  ProductSqliteSession,
+  resolveNoraSessionSqlitePath,
   type SemanticCognitiveWorkloadAssessment,
   type Mw3ContradictionAssessmentInput,
 } from "@/lib/nora-cognitive-runtime";
@@ -18,9 +22,11 @@ import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
 import { collectToolTelemetry } from "./collectToolTelemetry";
 import { ProjectAssistantMemoryEventSink } from "./memoryEventSink";
 import { resolveAssistantMode } from "./resolveAssistantMode";
+import { resolveRememberedEvidence } from "./mw3AvailableEvidence";
 import type {
   AssistantHistoryMessage,
   Mw3CognitiveSurfaceDto,
+  Mw4GroundingSurfaceDto,
   ProjectAssistantContextDto,
   ProjectAssistantSendResult,
 } from "./types";
@@ -82,6 +88,22 @@ function toMw3Surface(
   };
 }

+function toMw4Surface(
+  turn: Awaited<ReturnType<typeof runNoraCognitiveTurn>>,
+): Mw4GroundingSurfaceDto | null {
+  const g = turn.mw4Grounding;
+  if (!g) return null;
+  return {
+    rememberedIds: [...g.rememberedIds],
+    validIds: [...g.validIds],
+    downgradedIds: [...g.downgradedIds],
+    missingIds: [...g.missingIds],
+    disclosure: g.disclosure,
+    readCoverageOverall: g.readCoverageOverall,
+    readCoverageDisclosure: g.readCoverageDisclosure ?? null,
+  };
+}
+
 function toContextDto(
   result: Extract<
     Awaited<ReturnType<typeof loadProjectRuntimeForAssistant>>,
@@ -144,6 +166,8 @@ export async function orchestrateProjectAssistantTurn(input: {
    * Server-side; surfaces mw3 DTO without inventing Evidence.
    */
   contradictionAssessment?: Mw3ContradictionAssessmentInput | null;
+  /** MW4-S02 — attach post-Evidence / recovery narrative policy disclosure. */
+  postEvidenceNarrativePolicy?: boolean;
 }): Promise<ProjectAssistantSendResult> {
   const content = input.content.trim();
   if (!content) {
@@ -232,10 +256,62 @@ export async function orchestrateProjectAssistantTurn(input: {
       trustedSfiaProfile: null,
       semanticCognitiveWorkload: input.semanticCognitiveWorkload ?? null,
       contradictionAssessment: input.contradictionAssessment ?? null,
+      resolveRememberedEvidence,
+      postEvidenceNarrativePolicy: input.postEvidenceNarrativePolicy === true,
     });

-    const { toolEvents, sources } = collectToolTelemetry(sink.events);
+    const { toolEvents, sources, readCoverage } = collectToolTelemetry(
+      sink.events,
+    );
+    // Persist read coverage for cross-turn honesty (existing session_items).
+    if (readCoverage.facts.length > 0 && !input.simulateMemoryBUnavailable) {
+      try {
+        const dbPath = resolveNoraSessionSqlitePath(input.sessionDbPath);
+        const session = new ProductSqliteSession({
+          projectId: project.projectId,
+          dbPath,
+          sessionKey: "f1-default",
+        });
+        try {
+          await rememberReadCoverage(
+            session,
+            project.projectId,
+            readCoverage.facts.map((f) => ({
+              pathOrRef: f.pathOrRef,
+              coverage: f.coverage,
+            })),
+          );
+        } finally {
+          session.close();
+        }
+      } catch {
+        /* Session path may be unavailable — coverage still on DTO via mw4. */
+      }
+    }
+
+    const coverageAggregate = aggregateReadCoverage(readCoverage.facts);
     const mw3 = toMw3Surface(turn);
+    let mw4 = toMw4Surface(turn);
+    if (coverageAggregate.facts.length > 0) {
+      mw4 = {
+        rememberedIds: mw4?.rememberedIds ?? [],
+        validIds: mw4?.validIds ?? [],
+        downgradedIds: mw4?.downgradedIds ?? [],
+        missingIds: mw4?.missingIds ?? [],
+        disclosure: mw4?.disclosure ?? "",
+        readCoverageOverall:
+          coverageAggregate.overall === "mixed_partial"
+            ? "partial"
+            : coverageAggregate.overall === "none"
+              ? "none"
+              : coverageAggregate.overall,
+        readCoverageDisclosure:
+          turn.mw4Grounding?.readCoverageDisclosure ??
+          (coverageAggregate.facts.length > 0
+            ? `Overall coverage: ${coverageAggregate.overall}`
+            : null),
+      };
+    }
     const stopNotice = formatCognitiveStopPiloteNotice(
       turn.cognitiveStopDecision ?? {
         progression: "continue",
@@ -276,6 +352,7 @@ export async function orchestrateProjectAssistantTurn(input: {
       stalePriorInvalidated:
         turn.memoryBCompactionDetails?.stalePriorInvalidated === true,
       mw3,
+      mw4,
     };
   } catch (error) {
     const message =
diff --git a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
index b3312720..d02cbf52 100644
--- a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
+++ b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
@@ -148,6 +148,22 @@ export const W4C_POST_EVIDENCE_HEADING =

 export const W4C_NEXT_ACTION_LEAD = "Ce que vous pouvez faire ensuite";

+/**
+ * MW4-S02 — structural Pilote-facing honesty labels (≠ keyword authority hacks).
+ * Evidence Studio-owned; Nora interprets ≠ replaces; progress ≠ SUCCESS;
+ * RecoveryRecommendation ≠ HumanDecision / Confirmation / GO.
+ */
+export const MW4_POST_EVIDENCE_NARRATIVE_LABELS = Object.freeze({
+  evidenceStudioOwned: "Evidence — propriété Studio",
+  noraInterpretsNotReplaces: "Nora interprète ≠ remplace Evidence",
+  progressNotSuccess: "Progress ≠ SUCCESS",
+  recoveryRecommendationOnly: "RecoveryRecommendation — recommandation seule",
+  notHumanDecision: "≠ HumanDecision",
+  notConfirmation: "≠ Confirmation",
+  notGo: "≠ GO Morris",
+  cognitiveStopIntact: "Cognitive STOP MW3 intact",
+} as const);
+
 export function w1RecoveryDisclosures(): {
   durable: readonly string[];
   nonDurable: readonly string[];
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index dcf6a664..f3fd92dd 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -63,6 +63,23 @@ export type Mw3CognitiveSurfaceDto = {
   notTechnicalFailure?: boolean;
 };

+/** MW4 grounding durability surface — process-local; ≠ Evidence authority. */
+export type Mw4GroundingSurfaceDto = {
+  rememberedIds: string[];
+  validIds: string[];
+  downgradedIds: string[];
+  missingIds: string[];
+  disclosure: string;
+  readCoverageOverall?:
+    | "full"
+    | "partial"
+    | "failed"
+    | "denied"
+    | "absent"
+    | "none";
+  readCoverageDisclosure?: string | null;
+};
+
 export type AssistantHistoryMessage = {
   role: "user" | "assistant";
   content: string;
@@ -162,6 +179,8 @@ export type ProjectAssistantSendSuccess = {
   stalePriorInvalidated?: boolean;
   /** MW3 — contradiction / Cognitive STOP surface (when assessed). */
   mw3?: Mw3CognitiveSurfaceDto | null;
+  /** MW4 — grounding durability / partiality surface (when assessed). */
+  mw4?: Mw4GroundingSurfaceDto | null;
   f2?: F2TurnPayload;
 };

diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
index 9c932338..455649d4 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -143,3 +143,53 @@ export {
   buildRunnerModelSettingsForEffort,
   type NoraRunnerModelSettings,
 } from "./reasoningModelSettings";
+export {
+  GROUNDING_REFS_TYPE,
+  acceptGroundingRefsForProject,
+  appendGroundingCognitiveDisclosure,
+  buildClaimSpecificProvenanceDisclosure,
+  buildGroundingCognitiveDisclosure,
+  classifyRememberedEvidence,
+  groundingRecordToStoredItem,
+  isGroundingRefsRecord,
+  isNonReplaySessionMarker,
+  loadGroundingRefsFromSession,
+  parseStoredGroundingRefsRecord,
+  rememberEvidenceIds,
+  rememberReadCoverage,
+  toMw4GroundingTurnSurface,
+  upsertGroundingRefsRecord,
+} from "./groundingDurability";
+export type {
+  GroundingEvidenceRef,
+  GroundingReadCoverageKind,
+  GroundingReadCoverageRef,
+  GroundingRefsRecord,
+  Mw4GroundingTurnSurface,
+  RememberedEvidenceDowngradeReason,
+  RememberedEvidenceMissingReason,
+  RememberedEvidenceResolution,
+} from "./groundingDurability";
+export {
+  POST_EVIDENCE_NARRATIVE_POLICY,
+  appendPostEvidenceNarrativePolicyDisclosure,
+  buildPostEvidenceNarrativePolicyDisclosure,
+} from "./postEvidenceNarrativePolicy";
+export type { PostEvidenceNarrativePolicy } from "./postEvidenceNarrativePolicy";
+export {
+  aggregateReadCoverage,
+  appendReadCoverageDisclosure,
+  buildReadCoverageDisclosure,
+  classifyGitLocalReadCompleteness,
+  deriveReadCoverageFromToolEvent,
+  mergeCurrentAndRememberedCoverage,
+  MW4_DOCUMENT_READ_TOOL,
+  overallToGroundingCoverageKind,
+  parseGitLocalReadCoverageSignals,
+} from "./readCoverage";
+export type {
+  ParsedReadRange,
+  ReadCoverageAggregate,
+  ReadCoverageFact,
+  ReadCoverageKind,
+} from "./readCoverage";
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/memoryBCompaction.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/memoryBCompaction.ts
index 1de25e87..af97c957 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/memoryBCompaction.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/memoryBCompaction.ts
@@ -546,14 +546,27 @@ export function parseStoredCompactionRecord(

 export type LoadedSessionRows = {
   compaction: MemoryBCompactionRecord | null;
+  /** MW4 — non-replay grounding marker (may be null). */
+  grounding: unknown | null;
   conversation: Array<{ seq: number; item: AgentInputItem }>;
 };

+const GROUNDING_REFS_TYPE = "sfia_grounding_refs_v1";
+
+function isGroundingMarker(item: unknown): boolean {
+  return (
+    typeof item === "object" &&
+    item !== null &&
+    (item as { type?: string }).type === GROUNDING_REFS_TYPE
+  );
+}
+
 export async function loadSessionRows(
   session: ProductSqliteSession,
 ): Promise<LoadedSessionRows> {
   const rows = session.listItemRows();
   let compaction: MemoryBCompactionRecord | null = null;
+  let grounding: unknown | null = null;
   const conversation: Array<{ seq: number; item: AgentInputItem }> = [];
   for (const row of rows) {
     const parsed = JSON.parse(row.item_json) as AgentInputItem;
@@ -562,9 +575,13 @@ export async function loadSessionRows(
       compaction = record;
       continue;
     }
+    if (isGroundingMarker(parsed)) {
+      grounding = parsed;
+      continue;
+    }
     conversation.push({ seq: row.seq, item: parsed });
   }
-  return { compaction, conversation };
+  return { compaction, grounding, conversation };
 }

 export function resolveReplayItems(input: {
@@ -646,6 +663,10 @@ export async function applyCompactionIfNeeded(input: {

   await input.session.replaceItemsAtomically([
     compactionRecordToStoredItem(record),
+    // MW4 — preserve non-authoritative grounding refs across compaction.
+    ...(loaded.grounding
+      ? [loaded.grounding as AgentInputItem]
+      : []),
     ...recent.map((r) => r.item),
   ]);

diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
index 0edae820..2c350cce 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
@@ -3,6 +3,7 @@
  * MW1-S01: honest Memory B availability.
  * MW1-S02: governed compaction + Truth C revision invalidation before cognition.
  * MW2-S01: CWP / Strategy → Runner modelSettings.reasoning (OD-02 Option B).
+ * MW4-S01/S02/S03: grounding durability + narrative policy + read partiality.
  */
 import type { ConversationProvider, ProviderChatMessage } from "@/lib/platform/ai";
 import { requireLiveConversationSecrets } from "@/lib/platform/ai/config";
@@ -35,6 +36,28 @@ import {
   type ContradictionConflictInput,
 } from "./contradictionDisposition";
 import { decideCognitiveStop } from "./cognitiveStop";
+import {
+  acceptGroundingRefsForProject,
+  appendGroundingCognitiveDisclosure,
+  loadGroundingRefsFromSession,
+  rememberEvidenceIds,
+  rememberReadCoverage,
+  toMw4GroundingTurnSurface,
+  type Mw4GroundingTurnSurface,
+  type RememberedEvidenceResolution,
+} from "./groundingDurability";
+import {
+  appendPostEvidenceNarrativePolicyDisclosure,
+} from "./postEvidenceNarrativePolicy";
+import {
+  appendReadCoverageDisclosure,
+  aggregateReadCoverage,
+  buildReadCoverageDisclosure,
+  mergeCurrentAndRememberedCoverage,
+  overallToGroundingCoverageKind,
+  type ReadCoverageFact,
+} from "./readCoverage";
+import type { ProductSqliteSession } from "./productSqliteSession";

 export type Mw3ContradictionAssessmentInput = {
   conflict: ContradictionConflictInput;
@@ -83,6 +106,20 @@ export type RunNoraCognitiveTurnInput = {
    * Does not invent Evidence; does not select Hosted Search / model routing.
    */
   contradictionAssessment?: Mw3ContradictionAssessmentInput | null;
+  /**
+   * MW4 — re-resolve remembered Evidence IDs (product injects Studio/OA resolver).
+   * Cognitive runtime stays free of OA repository imports.
+   */
+  resolveRememberedEvidence?: (
+    projectId: string,
+    ids: string[],
+  ) => Promise<RememberedEvidenceResolution>;
+  /** MW4-S02 — attach post-Evidence / recovery narrative honesty disclosure. */
+  postEvidenceNarrativePolicy?: boolean;
+  /** MW4-S03 — optional prior/current read coverage facts for disclosure. */
+  readCoverageFacts?: ReadCoverageFact[];
+  /** MW4 — fixed timestamp for deterministic grounding remember. */
+  groundingNowIso?: string;
 };

 function emitCognitiveStrategyTelemetry(
@@ -229,12 +266,155 @@ function finalizeTurn(
   turn: NoraCognitiveTurnResult,
   input: RunNoraCognitiveTurnInput,
   strategyDecision: ReturnType<typeof decideCognitiveStrategy> | null,
+  mw4Grounding?: Mw4GroundingTurnSurface,
 ): NoraCognitiveTurnResult {
-  return withMw3Fields(
+  const withMw3 = withMw3Fields(
     withStrategyFields(turn, strategyDecision),
     input,
     strategyDecision,
   );
+  if (!mw4Grounding) return withMw3;
+  return { ...withMw3, mw4Grounding };
+}
+
+function collectEvidenceIdsToRemember(
+  input: RunNoraCognitiveTurnInput,
+  turn: NoraCognitiveTurnResult,
+): string[] {
+  const ids = new Set<string>();
+  const pointers = input.contradictionAssessment?.conflict.evidencePointers ?? [];
+  for (const p of pointers) {
+    const id = p.evidenceId?.trim();
+    if (id) ids.add(id);
+  }
+  for (const id of turn.contradictionDisposition?.acceptedEvidenceIds ?? []) {
+    const t = id.trim();
+    if (t) ids.add(t);
+  }
+  for (const id of turn.cognitiveStopDecision?.anatomy?.contradictionEvidenceIds ??
+    []) {
+    const t = id.trim();
+    if (t) ids.add(t);
+  }
+  return [...ids];
+}
+
+async function prepareMw4Grounding(input: {
+  session: ProductSqliteSession | null;
+  projectId: string;
+  resolveRememberedEvidence?: RunNoraCognitiveTurnInput["resolveRememberedEvidence"];
+  readCoverageFacts?: ReadCoverageFact[];
+}): Promise<{
+  resolution: RememberedEvidenceResolution | null;
+  surface: Mw4GroundingTurnSurface | null;
+  disclosure: string;
+  readCoverageDisclosure: string;
+}> {
+  const empty = {
+    resolution: null,
+    surface: null,
+    disclosure: "",
+    readCoverageDisclosure: "",
+  };
+  if (!input.session) {
+    const currentOnly = mergeCurrentAndRememberedCoverage({
+      current: input.readCoverageFacts ?? [],
+      remembered: [],
+    });
+    return {
+      ...empty,
+      readCoverageDisclosure: currentOnly.combinedDisclosure,
+      surface:
+        currentOnly.currentAggregate.facts.length > 0
+          ? {
+              rememberedIds: [],
+              validIds: [],
+              downgradedIds: [],
+              missingIds: [],
+              disclosure: "",
+              readCoverageOverall: overallToGroundingCoverageKind(
+                currentOnly.currentAggregate.overall,
+              ),
+              readCoverageDisclosure: currentOnly.combinedDisclosure || null,
+              claimSpecificProvenance: "unbound",
+              claimSpecificDisclosure: null,
+            }
+          : null,
+    };
+  }
+
+  const raw = await loadGroundingRefsFromSession(input.session);
+  const record = acceptGroundingRefsForProject(raw, input.projectId);
+  // Cross-project fail-closed: wrong projectId → reject (no durable authority).
+  const rememberedIds = (record?.evidenceRefs ?? []).map((r) => r.evidenceId);
+
+  let resolution: RememberedEvidenceResolution | null = null;
+  if (rememberedIds.length > 0 && input.resolveRememberedEvidence) {
+    resolution = await input.resolveRememberedEvidence(
+      input.projectId,
+      rememberedIds,
+    );
+  } else if (rememberedIds.length > 0) {
+    // No resolver → all remembered IDs are non-attributable (fail closed).
+    resolution = {
+      rememberedIds,
+      valid: [],
+      downgraded: [],
+      missing: rememberedIds.map((evidenceId) => ({
+        evidenceId,
+        reason: "fabricated_without_resolver_hit" as const,
+      })),
+    };
+  }
+
+  // CORR-01B — consume persisted prior read coverage distinctly from current turn.
+  const rememberedCoverageFacts: ReadCoverageFact[] = (
+    record?.readCoverage ?? []
+  ).map((ref) => ({
+    pathOrRef: ref.pathOrRef,
+    documentPath: ref.pathOrRef.replace(/#L\d+-\d+$/, ""),
+    coverage: ref.coverage,
+    signals: ["remembered_prior"],
+    origin: "remembered_prior" as const,
+  }));
+  const merged = mergeCurrentAndRememberedCoverage({
+    current: (input.readCoverageFacts ?? []).map((f) => ({
+      ...f,
+      origin: f.origin ?? "current_turn",
+    })),
+    remembered: rememberedCoverageFacts,
+  });
+  const readCoverageDisclosure = merged.combinedDisclosure;
+  const overallForSurface =
+    merged.currentAggregate.facts.length > 0
+      ? merged.currentAggregate.overall
+      : merged.rememberedAggregate.overall;
+
+  const surface = resolution
+    ? toMw4GroundingTurnSurface(resolution, {
+        readCoverageOverall: overallToGroundingCoverageKind(overallForSurface),
+        readCoverageDisclosure: readCoverageDisclosure || null,
+      })
+    : readCoverageDisclosure
+      ? {
+          rememberedIds: [],
+          validIds: [],
+          downgradedIds: [],
+          missingIds: [],
+          disclosure: "",
+          readCoverageOverall: overallToGroundingCoverageKind(overallForSurface),
+          readCoverageDisclosure: readCoverageDisclosure || null,
+          claimSpecificProvenance: "unbound" as const,
+          claimSpecificDisclosure: null,
+        }
+      : null;
+
+  return {
+    resolution,
+    surface,
+    disclosure: surface?.disclosure ?? "",
+    readCoverageDisclosure,
+  };
 }

 export async function runNoraCognitiveTurn(
@@ -261,10 +441,22 @@ export async function runNoraCognitiveTurn(
   try {
     dbPath = resolveNoraSessionSqlitePath(input.sessionDbPath);
   } catch {
-    const systemInstructions = appendMemoryBCognitiveDisclosure(
+    let systemInstructions = appendMemoryBCognitiveDisclosure(
       system.content,
       "unavailable",
     );
+    if (input.postEvidenceNarrativePolicy) {
+      systemInstructions =
+        appendPostEvidenceNarrativePolicyDisclosure(systemInstructions);
+    }
+    const coverageAggregate = aggregateReadCoverage(
+      input.readCoverageFacts ?? [],
+    );
+    const readDisclosure = buildReadCoverageDisclosure(coverageAggregate);
+    systemInstructions = appendReadCoverageDisclosure(
+      systemInstructions,
+      readDisclosure,
+    );
     const turn = await runNoraAgentsTurn({
       correlationId: input.correlationId,
       projectId: input.projectId,
@@ -278,6 +470,20 @@ export async function runNoraCognitiveTurn(
       provider: input.provider,
       runnerModelSettings,
     });
+    const mw4 =
+      coverageAggregate.facts.length > 0
+        ? {
+            rememberedIds: [] as string[],
+            validIds: [] as string[],
+            downgradedIds: [] as string[],
+            missingIds: [] as string[],
+            disclosure: "",
+            readCoverageOverall: overallToGroundingCoverageKind(
+              coverageAggregate.overall,
+            ),
+            readCoverageDisclosure: readDisclosure || null,
+          }
+        : undefined;
     return finalizeTurn(
       {
         ...turn,
@@ -286,6 +492,7 @@ export async function runNoraCognitiveTurn(
       },
       input,
       strategyDecision,
+      mw4,
     );
   }

@@ -328,6 +535,25 @@ export async function runNoraCognitiveTurn(
     );
   }

+  const mw4Prep = await prepareMw4Grounding({
+    session: probe.session,
+    projectId: input.projectId,
+    resolveRememberedEvidence: input.resolveRememberedEvidence,
+    readCoverageFacts: input.readCoverageFacts,
+  });
+  systemInstructions = appendGroundingCognitiveDisclosure(
+    systemInstructions,
+    mw4Prep.disclosure,
+  );
+  systemInstructions = appendReadCoverageDisclosure(
+    systemInstructions,
+    mw4Prep.readCoverageDisclosure,
+  );
+  if (input.postEvidenceNarrativePolicy) {
+    systemInstructions =
+      appendPostEvidenceNarrativePolicyDisclosure(systemInstructions);
+  }
+
   try {
     const turn = await runNoraAgentsTurn({
       correlationId: input.correlationId,
@@ -342,7 +568,7 @@ export async function runNoraCognitiveTurn(
       provider: input.provider,
       runnerModelSettings,
     });
-    return finalizeTurn(
+    const finalized = finalizeTurn(
       {
         ...turn,
         memoryBCompactionState: compactionState,
@@ -350,7 +576,36 @@ export async function runNoraCognitiveTurn(
       },
       input,
       strategyDecision,
+      mw4Prep.surface ?? undefined,
     );
+
+    // Persist Evidence IDs claimed/accepted this turn (non-authoritative).
+    if (probe.session && probe.availability !== "unavailable") {
+      const toRemember = collectEvidenceIdsToRemember(input, finalized);
+      if (toRemember.length > 0) {
+        await rememberEvidenceIds(
+          probe.session,
+          input.projectId,
+          toRemember,
+          input.groundingNowIso,
+        );
+      }
+      // CORR-01B — also persist current-turn read coverage for next-turn honesty.
+      const coverageFacts = input.readCoverageFacts ?? [];
+      if (coverageFacts.length > 0) {
+        await rememberReadCoverage(
+          probe.session,
+          input.projectId,
+          coverageFacts.map((f) => ({
+            pathOrRef: f.documentPath ?? f.pathOrRef,
+            coverage: f.coverage,
+          })),
+          input.groundingNowIso,
+        );
+      }
+    }
+
+    return finalized;
   } finally {
     if (probe.session) {
       probe.session.close();
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
index 6bf267fd..8bb40196 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
@@ -14,6 +14,7 @@ import type {
   MemoryBCompactionState,
   TruthCRevision,
 } from "./memoryBCompaction";
+import type { Mw4GroundingTurnSurface } from "./groundingDurability";

 /** F1/Nora cognitive runtime kind — Agents SDK Runner only. */
 export type NoraCognitiveRuntimeKind = "agents";
@@ -47,6 +48,8 @@ export type NoraCognitiveTurnResult = {
   contradictionDisposition?: ContradictionDispositionResult;
   /** MW3 — present only when contradictionAssessment was supplied. */
   cognitiveStopDecision?: CognitiveStopDecision;
+  /** MW4 — grounding durability surface when Session refs were assessed. */
+  mw4Grounding?: Mw4GroundingTurnSurface;
 };

 export type { TruthCRevision, MemoryBCompactionState, MemoryBCompactionDetails };
diff --git a/projects/sfia-studio/app/lib/nora-eval/catalog.ts b/projects/sfia-studio/app/lib/nora-eval/catalog.ts
index 25aad114..d2af7ab4 100644
--- a/projects/sfia-studio/app/lib/nora-eval/catalog.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/catalog.ts
@@ -245,6 +245,24 @@ const SCENARIOS: ScenarioDefinition[] = [
     ],
     d0Expectations: { mustPass: true },
   },
+  {
+    scenarioId: "mw4.s01.grounding-durability",
+    catalogVersion: NORA_EVAL_CATALOG_VERSION,
+    storyIds: ["MW4-S01", "MW4-S02", "MW4-S03"],
+    barIds: ["NCC-BAR-05", "NCC-BAR-12", "NCC-BAR-04", "NCC-BAR-10"],
+    kind: "grounding_durability",
+    title:
+      "MW4-S01/S02/S03 — grounding durability + narrative honesty + read partiality (D0)",
+    prompt:
+      "Deterministic MW4 grounding re-resolve / narrative≠Evidence / partiality; ZERO REAL.",
+    requiredTier: ["D0"],
+    hardInvariants: [
+      "mw4_grounding_durability",
+      "mw4_narrative_evidence_honesty",
+      "mw4_read_partiality",
+    ],
+    d0Expectations: { mustPass: true },
+  },
 ];

 export function getCatalogVersion(): typeof NORA_EVAL_CATALOG_VERSION {
diff --git a/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts b/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
index 0e0c3bb0..95a44d13 100644
--- a/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
@@ -16,6 +16,7 @@ import { observeMw1S01FromRuntime } from "./mw1S01Observe";
 import { observeMw1S02FromRuntime } from "./mw1S02Observe";
 import { observeMw2S01FromRuntime } from "./mw2S01Observe";
 import { observeMw3FromRuntime } from "./mw3Observe";
+import { observeMw4FromProductPath } from "./mw4Observe";

 function nowIso(): string {
   return new Date().toISOString();
@@ -111,6 +112,8 @@ async function observationForScenario(
       return observeMw2S01FromRuntime();
     case "mw3.s01.disposition-matrix":
       return observeMw3FromRuntime();
+    case "mw4.s01.grounding-durability":
+      return observeMw4FromProductPath();
     default:
       return { productPath: "none" };
   }
diff --git a/projects/sfia-studio/app/lib/nora-eval/index.ts b/projects/sfia-studio/app/lib/nora-eval/index.ts
index 3a7b27f9..2c277d89 100644
--- a/projects/sfia-studio/app/lib/nora-eval/index.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/index.ts
@@ -30,6 +30,12 @@ export {
   observationFromMw3Facts,
   type Mw3RuntimeFacts,
 } from "./mw3Observe";
+export {
+  observeMw4FromRuntime,
+  observeMw4FromProductPath,
+  observationFromMw4Facts,
+  type Mw4RuntimeFacts,
+} from "./mw4Observe";
 export {
   evaluateMw2S01Matrix,
   evaluateMw2S02Matrix,
diff --git a/projects/sfia-studio/app/lib/nora-eval/scorers.ts b/projects/sfia-studio/app/lib/nora-eval/scorers.ts
index dbf77e0a..51ee534c 100644
--- a/projects/sfia-studio/app/lib/nora-eval/scorers.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/scorers.ts
@@ -65,6 +65,8 @@ export type DeterministicObservation = {
   capabilityFailClosed?: boolean;
   /** MW3-S01/S02 disposition + Cognitive STOP */
   mw3DispositionOk?: boolean;
+  /** MW4-S01/S02/S03 grounding durability + narrative + partiality */
+  mw4GroundingOk?: boolean;
 };

 function hardFail(
@@ -323,6 +325,61 @@ export function scoreHardInvariants(
     );
   }

+  if (scenario.hardInvariants.includes("mw4_grounding_durability")) {
+    results.push(
+      obs.mw4GroundingOk === true
+        ? pass(
+            "hard.mw4_grounding",
+            "MW4 grounding durability facts PASS (D0)",
+            "NCC-BAR-05",
+          )
+        : hardFail(
+            "hard.mw4_grounding",
+            "MW4 grounding durability not evidenced",
+            "NCC-BAR-05",
+            "obs.grounding.durability",
+          ),
+    );
+  }
+
+  if (scenario.hardInvariants.includes("mw4_narrative_evidence_honesty")) {
+    results.push(
+      obs.mw4GroundingOk === true &&
+        (obs.observedObservableIds ?? []).includes(
+          "obs.narrative.evidence_coherence",
+        )
+        ? pass(
+            "hard.mw4_narrative",
+            "MW4 narrative≠Evidence honesty PASS (D0)",
+            "NCC-BAR-12",
+          )
+        : hardFail(
+            "hard.mw4_narrative",
+            "MW4 narrative≠Evidence honesty not evidenced",
+            "NCC-BAR-12",
+            "obs.narrative.evidence_coherence",
+          ),
+    );
+  }
+
+  if (scenario.hardInvariants.includes("mw4_read_partiality")) {
+    results.push(
+      obs.mw4GroundingOk === true &&
+        (obs.observedObservableIds ?? []).includes("obs.read.partiality")
+        ? pass(
+            "hard.mw4_partiality",
+            "MW4 read partiality honesty PASS (D0)",
+            "NCC-BAR-04",
+          )
+        : hardFail(
+            "hard.mw4_partiality",
+            "MW4 read partiality not evidenced",
+            "NCC-BAR-04",
+            "obs.read.partiality",
+          ),
+    );
+  }
+
   if (scenario.hardInvariants.includes("uses_f2_not_ops1")) {
     if (obs.productPath === "ops1") {
       results.push(
diff --git a/projects/sfia-studio/app/lib/nora-eval/types.ts b/projects/sfia-studio/app/lib/nora-eval/types.ts
index 3c9ba979..a5f9ea8c 100644
--- a/projects/sfia-studio/app/lib/nora-eval/types.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/types.ts
@@ -18,7 +18,8 @@ export type ScenarioKind =
   | "parity_metric"
   | "memory_continuity"
   | "cognitive_strategy"
-  | "contradiction_stop";
+  | "contradiction_stop"
+  | "grounding_durability";

 export type PassFail = "PASS" | "FAIL" | "INCONCLUSIVE" | "NOT_PROVEN";

@@ -77,7 +78,14 @@ export type Mw2StoryId = "MW2-S01" | "MW2-S02";

 export type Mw3StoryId = "MW3-S01" | "MW3-S02";

-export type CognitiveStoryId = Mw0StoryId | Mw1StoryId | Mw2StoryId | Mw3StoryId;
+export type Mw4StoryId = "MW4-S01" | "MW4-S02" | "MW4-S03";
+
+export type CognitiveStoryId =
+  | Mw0StoryId
+  | Mw1StoryId
+  | Mw2StoryId
+  | Mw3StoryId
+  | Mw4StoryId;

 export type CycleTypeFixtureId =
   | "delivery_implementation"
```

---

## 11. Complete content — newly created production files

### `projects/sfia-studio/app/lib/nora-cognitive-runtime/groundingDurability.ts`

```typescript
/**
 * MW4-S01 — Cross-turn grounding durability (non-authoritative Session refs).
 *
 * Remembered Evidence IDs have ZERO authority until re-resolved against
 * Studio/OA Evidence on the current turn. Narrative ≠ Evidence.
 * Compacted Memory B summary ≠ Evidence.
 *
 * Stored in existing session_items.item_json — no new table.
 * MUST be filtered from Runner replay (same class as compaction markers).
 */

import type { AgentInputItem } from "@openai/agents";
import type { ContradictionEvidencePointer } from "./contradictionDisposition";
import type { ProductSqliteSession } from "./productSqliteSession";

export const GROUNDING_REFS_TYPE = "sfia_grounding_refs_v1" as const;

export type GroundingEvidenceRef = {
  evidenceId: string;
  rememberedAtIso: string;
};

export type GroundingReadCoverageKind =
  | "full"
  | "partial"
  | "failed"
  | "denied"
  | "absent";

export type GroundingReadCoverageRef = {
  pathOrRef: string;
  coverage: GroundingReadCoverageKind;
  rememberedAtIso: string;
};

/** Non-cognitive Session marker — never Truth C / Evidence authority. */
export type GroundingRefsRecord = {
  type: typeof GROUNDING_REFS_TYPE;
  version: 1;
  nonAuthoritative: true;
  projectId: string;
  evidenceRefs: GroundingEvidenceRef[];
  readCoverage?: GroundingReadCoverageRef[];
};

export type RememberedEvidenceDowngradeReason =
  | "not_attributable"
  | "unavailable_status"
  | "missing_source"
  | "project_mismatch"
  | "rejected_or_superseded";

export type RememberedEvidenceMissingReason =
  | "not_found"
  | "blank_id"
  | "project_isolation_reject"
  | "fabricated_without_resolver_hit"
  /** CORR-01E — repository/lookup failure ≠ fabricated / not found. */
  | "resolution_failed";

export type RememberedEvidenceResolution = {
  rememberedIds: string[];
  valid: ContradictionEvidencePointer[];
  downgraded: Array<{
    evidenceId: string;
    reason: RememberedEvidenceDowngradeReason;
    pointer: ContradictionEvidencePointer | null;
  }>;
  missing: Array<{
    evidenceId: string;
    reason: RememberedEvidenceMissingReason;
  }>;
  /**
   * CORR-01D — optional structural claim→Evidence bindings.
   * Absence means claim-specific provenance is UNBOUND (Evidence set ≠ claim map).
   */
  claimSourceBindings?: Array<{ claimId: string; evidenceId: string }>;
};

export type Mw4GroundingTurnSurface = {
  rememberedIds: string[];
  validIds: string[];
  downgradedIds: string[];
  missingIds: string[];
  disclosure: string;
  readCoverageOverall?: "full" | "partial" | "failed" | "denied" | "absent" | "none";
  readCoverageDisclosure?: string | null;
  /** CORR-01D — claim-specific provenance state. */
  claimSpecificProvenance?: "bound" | "unbound";
  claimSpecificDisclosure?: string | null;
};

export function isGroundingRefsRecord(
  item: unknown,
): item is GroundingRefsRecord {
  return (
    typeof item === "object" &&
    item !== null &&
    (item as GroundingRefsRecord).type === GROUNDING_REFS_TYPE
  );
}

/** Session markers that MUST never enter Runner Memory B replay. */
export function isNonReplaySessionMarker(item: unknown): boolean {
  if (!item || typeof item !== "object") return false;
  const type = (item as { type?: string }).type;
  return (
    type === GROUNDING_REFS_TYPE || type === "sfia_memory_b_compaction"
  );
}

export function parseStoredGroundingRefsRecord(
  item: AgentInputItem | unknown,
): GroundingRefsRecord | null {
  if (!isGroundingRefsRecord(item)) return null;
  const projectId =
    typeof item.projectId === "string" ? item.projectId.trim() : "";
  if (!projectId) return null;
  const evidenceRefs = Array.isArray(item.evidenceRefs)
    ? item.evidenceRefs
        .filter(
          (r): r is GroundingEvidenceRef =>
            typeof r === "object" &&
            r !== null &&
            typeof (r as GroundingEvidenceRef).evidenceId === "string" &&
            (r as GroundingEvidenceRef).evidenceId.trim().length > 0,
        )
        .map((r) => ({
          evidenceId: r.evidenceId.trim(),
          rememberedAtIso:
            typeof r.rememberedAtIso === "string" && r.rememberedAtIso.trim()
              ? r.rememberedAtIso
              : new Date(0).toISOString(),
        }))
    : [];
  const readCoverage = Array.isArray(item.readCoverage)
    ? item.readCoverage
        .filter(
          (r): r is GroundingReadCoverageRef =>
            typeof r === "object" &&
            r !== null &&
            typeof (r as GroundingReadCoverageRef).pathOrRef === "string" &&
            (r as GroundingReadCoverageRef).pathOrRef.trim().length > 0,
        )
        .map((r) => ({
          pathOrRef: r.pathOrRef.trim(),
          coverage: r.coverage,
          rememberedAtIso:
            typeof r.rememberedAtIso === "string" && r.rememberedAtIso.trim()
              ? r.rememberedAtIso
              : new Date(0).toISOString(),
        }))
    : undefined;
  return {
    type: GROUNDING_REFS_TYPE,
    version: 1,
    nonAuthoritative: true,
    projectId,
    evidenceRefs,
    readCoverage,
  };
}

export async function loadGroundingRefsFromSession(
  session: ProductSqliteSession,
): Promise<GroundingRefsRecord | null> {
  const rows = session.listItemRows();
  let found: GroundingRefsRecord | null = null;
  for (const row of rows) {
    try {
      const parsed = JSON.parse(row.item_json) as unknown;
      const record = parseStoredGroundingRefsRecord(parsed);
      if (record) found = record;
    } catch {
      /* ignore malformed */
    }
  }
  return found;
}

/**
 * Fail-closed project isolation: record.projectId must match current project.
 * Wrong project → reject (treat as no durable grounding).
 */
export function acceptGroundingRefsForProject(
  record: GroundingRefsRecord | null,
  currentProjectId: string,
): GroundingRefsRecord | null {
  if (!record) return null;
  const current = currentProjectId.trim();
  if (!current) return null;
  if (record.projectId.trim() !== current) return null;
  return record;
}

export function groundingRecordToStoredItem(
  record: GroundingRefsRecord,
): AgentInputItem {
  return record as unknown as AgentInputItem;
}

/**
 * Upsert single grounding marker; preserve compaction + conversation items.
 */
export async function upsertGroundingRefsRecord(
  session: ProductSqliteSession,
  record: GroundingRefsRecord,
): Promise<void> {
  const rows = session.listItemRows();
  const preserved: AgentInputItem[] = [];
  let compaction: AgentInputItem | null = null;

  for (const row of rows) {
    const parsed = JSON.parse(row.item_json) as AgentInputItem;
    if (isGroundingRefsRecord(parsed)) {
      continue;
    }
    const type =
      parsed && typeof parsed === "object"
        ? (parsed as { type?: string }).type
        : undefined;
    if (type === "sfia_memory_b_compaction") {
      compaction = parsed;
      continue;
    }
    preserved.push(parsed);
  }

  const next: AgentInputItem[] = [];
  if (compaction) next.push(compaction);
  next.push(groundingRecordToStoredItem(record));
  next.push(...preserved);
  await session.replaceItemsAtomically(next);
}

export async function rememberEvidenceIds(
  session: ProductSqliteSession,
  projectId: string,
  ids: string[],
  nowIso?: string,
): Promise<GroundingRefsRecord> {
  const project = projectId.trim();
  if (!project) {
    throw new Error("MW4_GROUNDING_REQUIRES_PROJECT_ID");
  }
  // CORR-01F — production default is wall-clock ISO; tests inject nowIso.
  const iso = nowIso ?? new Date().toISOString();
  const prior = acceptGroundingRefsForProject(
    await loadGroundingRefsFromSession(session),
    project,
  );
  const byId = new Map<string, GroundingEvidenceRef>();
  for (const ref of prior?.evidenceRefs ?? []) {
    byId.set(ref.evidenceId, ref);
  }
  for (const raw of ids) {
    const evidenceId = raw.trim();
    if (!evidenceId) continue;
    // Never treat fabricated narrative IDs as authoritative here —
    // persistence is non-authoritative; re-resolve is mandatory.
    byId.set(evidenceId, {
      evidenceId,
      rememberedAtIso: iso,
    });
  }
  const record: GroundingRefsRecord = {
    type: GROUNDING_REFS_TYPE,
    version: 1,
    nonAuthoritative: true,
    projectId: project,
    evidenceRefs: [...byId.values()],
    readCoverage: prior?.readCoverage,
  };
  await upsertGroundingRefsRecord(session, record);
  return record;
}

export async function rememberReadCoverage(
  session: ProductSqliteSession,
  projectId: string,
  coverage: Array<{ pathOrRef: string; coverage: GroundingReadCoverageKind }>,
  nowIso?: string,
): Promise<GroundingRefsRecord> {
  const project = projectId.trim();
  if (!project) {
    throw new Error("MW4_GROUNDING_REQUIRES_PROJECT_ID");
  }
  // CORR-01F — production default is wall-clock ISO; tests inject nowIso.
  const iso = nowIso ?? new Date().toISOString();
  const prior = acceptGroundingRefsForProject(
    await loadGroundingRefsFromSession(session),
    project,
  );
  const byPath = new Map<string, GroundingReadCoverageRef>();
  for (const ref of prior?.readCoverage ?? []) {
    byPath.set(ref.pathOrRef, ref);
  }
  for (const item of coverage) {
    const pathOrRef = item.pathOrRef.trim();
    if (!pathOrRef) continue;
    byPath.set(pathOrRef, {
      pathOrRef,
      coverage: item.coverage,
      rememberedAtIso: iso,
    });
  }
  const record: GroundingRefsRecord = {
    type: GROUNDING_REFS_TYPE,
    version: 1,
    nonAuthoritative: true,
    projectId: project,
    evidenceRefs: prior?.evidenceRefs ?? [],
    readCoverage: [...byPath.values()],
  };
  await upsertGroundingRefsRecord(session, record);
  return record;
}

/**
 * Classify remembered IDs against already-resolved Studio pointers.
 * Fabricated / unknown IDs without a resolver hit → missing (never valid).
 */
export function classifyRememberedEvidence(input: {
  rememberedIds: string[];
  resolvedPointers: ContradictionEvidencePointer[];
  /** When true, blank/unknown IDs are tagged as fabricated_without_resolver_hit. */
  treatUnresolvedAsFabricated?: boolean;
}): RememberedEvidenceResolution {
  const rememberedIds = input.rememberedIds
    .map((id) => id.trim())
    .filter(Boolean);
  const byId = new Map(
    input.resolvedPointers.map((p) => [p.evidenceId.trim(), p] as const),
  );
  const valid: ContradictionEvidencePointer[] = [];
  const downgraded: RememberedEvidenceResolution["downgraded"] = [];
  const missing: RememberedEvidenceResolution["missing"] = [];

  for (const evidenceId of rememberedIds) {
    if (!evidenceId) {
      missing.push({ evidenceId: "", reason: "blank_id" });
      continue;
    }
    const pointer = byId.get(evidenceId);
    if (!pointer) {
      missing.push({
        evidenceId,
        reason: input.treatUnresolvedAsFabricated
          ? "fabricated_without_resolver_hit"
          : "not_found",
      });
      continue;
    }
    if (pointer.fabricated === true) {
      missing.push({
        evidenceId,
        reason: "fabricated_without_resolver_hit",
      });
      continue;
    }
    if (!pointer.attributable) {
      downgraded.push({
        evidenceId,
        reason:
          pointer.sourceId === "unattributed"
            ? "missing_source"
            : "not_attributable",
        pointer,
      });
      continue;
    }
    valid.push(pointer);
  }

  return { rememberedIds, valid, downgraded, missing };
}

export function buildGroundingCognitiveDisclosure(
  resolution: RememberedEvidenceResolution,
): string {
  const lines = [
    "=== GROUNDING DURABILITY (MW4-S01) ===",
    "Remembered Evidence IDs are non-authoritative Session continuity only.",
    "They have ZERO authority until re-resolved against Studio/OA Evidence on this turn.",
    "Narrative text ≠ Evidence. Compacted Memory B summary ≠ Evidence.",
    "Do not treat conversational recall, fabricated IDs, or prior narrative citations as attributable Evidence.",
  ];

  const validIds = resolution.valid.map((p) => p.evidenceId);
  const downgradedIds = resolution.downgraded.map((d) => d.evidenceId);
  const missingIds = resolution.missing.map((m) => m.evidenceId);

  if (validIds.length > 0) {
    lines.push(
      `Currently attributable Evidence (re-resolved): ${validIds.join(", ")}`,
    );
  } else {
    lines.push("Currently attributable Evidence (re-resolved): (none)");
  }

  if (downgradedIds.length > 0) {
    const detail = resolution.downgraded
      .map((d) => `${d.evidenceId} (${d.reason})`)
      .join("; ");
    lines.push(
      `Withdrawn / downgraded (re-resolved but not attributable): ${detail}`,
    );
  }

  if (missingIds.length > 0) {
    const detail = resolution.missing
      .map((m) => `${m.evidenceId || "(blank)"} (${m.reason})`)
      .join("; ");
    lines.push(
      `Missing / not re-resolvable (do not cite as Evidence): ${detail}`,
    );
    if (resolution.missing.some((m) => m.reason === "resolution_failed")) {
      lines.push(
        "RESOLUTION_FAILED: repository/lookup unverifiable this turn — fail closed; do NOT label as fabricated merely because resolution failed.",
      );
    }
  }

  // CORR-01D — Evidence ID set continuity ≠ claim-specific provenance.
  lines.push(buildClaimSpecificProvenanceDisclosure(resolution.claimSourceBindings));

  if (
    resolution.rememberedIds.length === 0 &&
    validIds.length === 0 &&
    downgradedIds.length === 0 &&
    missingIds.length === 0
  ) {
    return "";
  }

  return lines.join("\n");
}

/**
 * CORR-01D — claim↔source honesty.
 * Without structural bindings, Evidence set continuity must not masquerade
 * as claim-specific provenance.
 */
export function buildClaimSpecificProvenanceDisclosure(
  bindings?: Array<{ claimId: string; evidenceId: string }> | null,
): string {
  const lines = [
    "=== CLAIM-SPECIFIC PROVENANCE (MW4-S01 / CORR-01D) ===",
    "Remembered Evidence ID set continuity ≠ claim→source mapping.",
  ];
  const clean = (bindings ?? [])
    .map((b) => ({
      claimId: b.claimId.trim(),
      evidenceId: b.evidenceId.trim(),
    }))
    .filter((b) => b.claimId && b.evidenceId);
  if (clean.length === 0) {
    lines.push(
      "Claim-specific provenance: UNBOUND / NOT RECONSTRUCTABLE.",
    );
    lines.push(
      "Do not infer which Evidence supported which claim from narrative order, model recollection, or Evidence set membership alone.",
    );
    lines.push(
      "Downgrade claim-specific assertions or request revalidation/reread until a structural binding is established and re-resolved.",
    );
  } else {
    lines.push("Claim-specific provenance: BOUND (structural, non-authoritative until re-resolved).");
    for (const b of clean) {
      lines.push(`- claim ${b.claimId} → Evidence ${b.evidenceId} (must be re-resolved before use)`);
    }
  }
  return lines.join("\n");
}

export function appendGroundingCognitiveDisclosure(
  systemInstructions: string,
  disclosure: string,
): string {
  const block = disclosure.trim();
  if (!block) return systemInstructions;
  return `${systemInstructions.trim()}\n\n${block}`;
}

export function toMw4GroundingTurnSurface(
  resolution: RememberedEvidenceResolution,
  opts?: {
    readCoverageOverall?: Mw4GroundingTurnSurface["readCoverageOverall"];
    readCoverageDisclosure?: string | null;
  },
): Mw4GroundingTurnSurface {
  const bindings = resolution.claimSourceBindings ?? [];
  const claimSpecificProvenance =
    bindings.length > 0 ? ("bound" as const) : ("unbound" as const);
  return {
    rememberedIds: [...resolution.rememberedIds],
    validIds: resolution.valid.map((p) => p.evidenceId),
    downgradedIds: resolution.downgraded.map((d) => d.evidenceId),
    missingIds: resolution.missing.map((m) => m.evidenceId),
    disclosure: buildGroundingCognitiveDisclosure(resolution),
    readCoverageOverall: opts?.readCoverageOverall,
    readCoverageDisclosure: opts?.readCoverageDisclosure ?? null,
    claimSpecificProvenance,
    claimSpecificDisclosure: buildClaimSpecificProvenanceDisclosure(bindings),
  };
}
```

### `projects/sfia-studio/app/lib/nora-cognitive-runtime/readCoverage.ts`

```typescript
/**
 * MW4-S03 / CORR-MW4-01A — Multi-document read coverage with honest partiality.
 *
 * Derives coverage from the REAL ToolRouter/EventSink contract:
 * - toolName, status, summary, source.pathOrRef
 * - git_local_read_file summary: `read <path> L<start>-<end>/<total> (...) [hasMore]`
 * - pathOrRef may be `<path>#L<start>-<end>`
 *
 * Search ≠ read. Only git_local_read_file establishes document read coverage.
 */

export type ReadCoverageKind =
  | "full"
  | "partial"
  | "failed"
  | "denied"
  | "absent";

export type ReadCoverageFact = {
  pathOrRef: string;
  /** Bare path without #L range suffix when known. */
  documentPath?: string;
  coverage: ReadCoverageKind;
  startLine?: number;
  endLine?: number;
  totalLines?: number;
  hasMore?: boolean;
  /** Optional signals observed in summary/pathOrRef. */
  signals?: string[];
  /** current_turn vs remembered prior-turn continuity. */
  origin?: "current_turn" | "remembered_prior";
};

export type ReadCoverageAggregate = {
  facts: ReadCoverageFact[];
  overall: ReadCoverageKind | "none" | "mixed_partial";
};

/** Sole primitive that establishes document read coverage for MW4-S03. */
export const MW4_DOCUMENT_READ_TOOL = "git_local_read_file" as const;

const READ_SUMMARY_RE =
  /^read\s+(\S+)\s+L(\d+)-(\d+)\/(\d+)\s*(?:\(([^)]*)\))?\s*(hasMore)?/i;

const PATH_RANGE_RE = /^(.*)#L(\d+)-(\d+)$/;

export type ParsedReadRange = {
  documentPath: string;
  startLine: number;
  endLine: number;
  totalLines?: number;
  hasMore: boolean;
  truncated: boolean;
};

/**
 * Parse structural range from git_local_read_file summary and/or pathOrRef.
 */
export function parseGitLocalReadCoverageSignals(input: {
  summary?: string | null;
  pathOrRef?: string | null;
}): ParsedReadRange | null {
  const summary = (input.summary ?? "").trim();
  const pathOrRef = (input.pathOrRef ?? "").trim();

  const fromSummary = READ_SUMMARY_RE.exec(summary);
  if (fromSummary) {
    const documentPath = fromSummary[1]!;
    const startLine = Number(fromSummary[2]);
    const endLine = Number(fromSummary[3]);
    const totalLines = Number(fromSummary[4]);
    const paren = (fromSummary[5] ?? "").toLowerCase();
    const hasMoreToken = Boolean(fromSummary[6]);
    const truncated =
      /\btruncat/.test(paren) || /\bcapped\b/.test(paren) || hasMoreToken;
    return {
      documentPath,
      startLine,
      endLine,
      totalLines,
      hasMore: hasMoreToken || truncated || endLine < totalLines,
      truncated,
    };
  }

  const fromPath = PATH_RANGE_RE.exec(pathOrRef);
  if (fromPath) {
    return {
      documentPath: fromPath[1]!,
      startLine: Number(fromPath[2]),
      endLine: Number(fromPath[3]),
      hasMore: false,
      truncated: false,
    };
  }

  if (pathOrRef && !pathOrRef.includes(":")) {
    // Bare path without structural range — cannot prove completeness.
    return {
      documentPath: pathOrRef,
      startLine: 1,
      endLine: 1,
      hasMore: true,
      truncated: false,
    };
  }

  return null;
}

export function classifyGitLocalReadCompleteness(
  parsed: ParsedReadRange,
): "full" | "partial" {
  const { startLine, endLine, totalLines, hasMore, truncated } = parsed;
  if (truncated || hasMore) return "partial";
  if (typeof totalLines !== "number" || !Number.isFinite(totalLines)) {
    // pathOrRef-only range without total → cannot prove full document.
    return "partial";
  }
  // CORR-01A hard rule: FULL only when L1-total and no hasMore/truncation.
  // L100-N/N is PARTIAL even when endLine === totalLines.
  if (startLine === 1 && endLine === totalLines) return "full";
  return "partial";
}

/**
 * Infer coverage for a single tool event row against the real EventSink shape.
 */
export function deriveReadCoverageFromToolEvent(input: {
  toolName: string;
  status: string;
  pathOrRef: string | null;
  summary?: string | null;
  detailText?: string | null;
}): ReadCoverageFact | null {
  const toolName = input.toolName.trim();

  // Search / status / diff / metadata MUST NOT establish document read coverage.
  if (toolName !== MW4_DOCUMENT_READ_TOOL) {
    return null;
  }

  const pathOrRef = (input.pathOrRef ?? "").trim();
  const summary = input.summary ?? "";

  if (input.status === "denied") {
    return {
      pathOrRef: pathOrRef || `(unnamed:${toolName})`,
      documentPath: pathOrRef || undefined,
      coverage: "denied",
      signals: ["tool_denied"],
      origin: "current_turn",
    };
  }
  if (input.status === "failed") {
    return {
      pathOrRef: pathOrRef || `(unnamed:${toolName})`,
      documentPath: pathOrRef || undefined,
      coverage: "failed",
      signals: ["tool_failed"],
      origin: "current_turn",
    };
  }
  if (input.status !== "succeeded") {
    return {
      pathOrRef: pathOrRef || `(unnamed:${toolName})`,
      documentPath: pathOrRef || undefined,
      coverage: "absent",
      signals: [`status:${input.status}`],
      origin: "current_turn",
    };
  }

  if (!pathOrRef && !summary.trim()) {
    return {
      pathOrRef: `(unnamed:${toolName})`,
      coverage: "absent",
      signals: ["missing_pathOrRef"],
      origin: "current_turn",
    };
  }

  const parsed = parseGitLocalReadCoverageSignals({
    summary,
    pathOrRef: pathOrRef || null,
  });
  if (!parsed) {
    return {
      pathOrRef: pathOrRef || `(unnamed:${toolName})`,
      coverage: "absent",
      signals: ["unparseable_read_shape"],
      origin: "current_turn",
    };
  }

  const coverage = classifyGitLocalReadCompleteness(parsed);
  const signals: string[] = [
    `L${parsed.startLine}-${parsed.endLine}${
      typeof parsed.totalLines === "number" ? `/${parsed.totalLines}` : ""
    }`,
  ];
  if (parsed.hasMore) signals.push("hasMore");
  if (parsed.truncated) signals.push("truncated");
  if (coverage === "partial" && parsed.endLine === parsed.totalLines && parsed.startLine > 1) {
    signals.push("suffix_range_not_full");
  }

  return {
    pathOrRef: pathOrRef || parsed.documentPath,
    documentPath: parsed.documentPath,
    coverage,
    startLine: parsed.startLine,
    endLine: parsed.endLine,
    totalLines: parsed.totalLines,
    hasMore: parsed.hasMore,
    signals,
    origin: "current_turn",
  };
}

export function aggregateReadCoverage(
  facts: ReadCoverageFact[],
): ReadCoverageAggregate {
  if (facts.length === 0) {
    return { facts: [], overall: "none" };
  }
  const kinds = new Set(facts.map((f) => f.coverage));
  if (kinds.size === 1) {
    return { facts, overall: facts[0]!.coverage };
  }
  if (kinds.has("partial") || kinds.size > 1) {
    return { facts, overall: "mixed_partial" };
  }
  return { facts, overall: "partial" };
}

export function buildReadCoverageDisclosure(
  aggregate: ReadCoverageAggregate,
  opts?: { title?: string; rememberedPrior?: boolean },
): string {
  if (aggregate.overall === "none" || aggregate.facts.length === 0) {
    return "";
  }

  const title =
    opts?.title ??
    (opts?.rememberedPrior
      ? "=== REMEMBERED PRIOR-TURN READ COVERAGE (MW4-S03 / CORR-01B) ==="
      : "=== CURRENT TURN READ COVERAGE / PARTIALITY (MW4-S03) ===");

  const lines = [
    title,
    "Do not claim full corpus completeness unless every referenced path was fully read.",
    opts?.rememberedPrior
      ? "Prior coverage is non-authoritative continuity — NOT a current revalidation of source completeness."
      : "Coverage below is derived from this turn's ToolRouter/EventSink facts.",
    `Overall coverage: ${aggregate.overall === "mixed_partial" ? "partial (mixed)" : aggregate.overall}`,
  ];

  for (const fact of aggregate.facts) {
    const signal =
      fact.signals && fact.signals.length > 0
        ? ` [${fact.signals.join(", ")}]`
        : "";
    const origin =
      fact.origin === "remembered_prior" ? " (remembered_prior)" : "";
    lines.push(`- ${fact.pathOrRef}: ${fact.coverage}${origin}${signal}`);
  }

  if (
    aggregate.overall === "partial" ||
    aggregate.overall === "mixed_partial" ||
    aggregate.facts.some((f) => f.coverage !== "full")
  ) {
    lines.push(
      "Partial / failed / denied / absent reads must be stated explicitly — refuse false completeness.",
    );
  }

  if (opts?.rememberedPrior) {
    lines.push(
      "A prior full read does NOT mean the source is currently revalidated as complete unless a current-turn full reread is established.",
    );
  }

  return lines.join("\n");
}

export function appendReadCoverageDisclosure(
  systemInstructions: string,
  disclosure: string,
): string {
  const block = disclosure.trim();
  if (!block) return systemInstructions;
  return `${systemInstructions.trim()}\n\n${block}`;
}

/** Map aggregate overall to grounding session coverage kind. */
export function overallToGroundingCoverageKind(
  overall: ReadCoverageAggregate["overall"],
): "full" | "partial" | "failed" | "denied" | "absent" | "none" {
  if (overall === "none") return "none";
  if (overall === "mixed_partial") return "partial";
  return overall;
}

/**
 * Combine current-turn facts with remembered prior coverage.
 * Current-turn facts for a document path supersede remembered entries.
 */
export function mergeCurrentAndRememberedCoverage(input: {
  current: ReadCoverageFact[];
  remembered: ReadCoverageFact[];
}): {
  currentAggregate: ReadCoverageAggregate;
  rememberedAggregate: ReadCoverageAggregate;
  combinedDisclosure: string;
} {
  const currentAggregate = aggregateReadCoverage(input.current);
  const currentDocs = new Set(
    input.current
      .map((f) => (f.documentPath ?? f.pathOrRef).trim())
      .filter(Boolean),
  );
  const rememberedRemaining = input.remembered
    .filter((f) => {
      const key = (f.documentPath ?? f.pathOrRef).trim();
      return key.length > 0 && !currentDocs.has(key);
    })
    .map((f) => ({ ...f, origin: "remembered_prior" as const }));
  const rememberedAggregate = aggregateReadCoverage(rememberedRemaining);

  const parts = [
    buildReadCoverageDisclosure(currentAggregate),
    buildReadCoverageDisclosure(rememberedAggregate, {
      rememberedPrior: true,
    }),
  ].filter((s) => s.trim().length > 0);

  return {
    currentAggregate,
    rememberedAggregate,
    combinedDisclosure: parts.join("\n\n"),
  };
}
```

### `projects/sfia-studio/app/lib/nora-cognitive-runtime/postEvidenceNarrativePolicy.ts`

```typescript
/**
 * MW4-S02 — Post-Evidence / Recovery narrative honesty policy.
 *
 * Structural disclosures (typed) — not keyword hacks:
 * - Evidence is Studio-owned; Nora interprets ≠ replaces
 * - progress ≠ SUCCESS
 * - RecoveryRecommendation ≠ HumanDecision / Confirmation / GO
 * - MW3 Cognitive STOP remains intact when governing Evidence-backed stop fires
 */

export type PostEvidenceNarrativePolicy = {
  evidenceStudioOwned: true;
  noraInterpretsNotReplaces: true;
  progressIsNotSuccess: true;
  recoveryIsRecommendationOnly: true;
  recoveryNotHumanDecision: true;
  recoveryNotConfirmation: true;
  recoveryNotGo: true;
  cognitiveStopIntact: true;
};

export const POST_EVIDENCE_NARRATIVE_POLICY: PostEvidenceNarrativePolicy = {
  evidenceStudioOwned: true,
  noraInterpretsNotReplaces: true,
  progressIsNotSuccess: true,
  recoveryIsRecommendationOnly: true,
  recoveryNotHumanDecision: true,
  recoveryNotConfirmation: true,
  recoveryNotGo: true,
  cognitiveStopIntact: true,
};

/**
 * Studio system disclosure for post-Evidence / recovery cognitive context.
 */
export function buildPostEvidenceNarrativePolicyDisclosure(
  policy: PostEvidenceNarrativePolicy = POST_EVIDENCE_NARRATIVE_POLICY,
): string {
  return [
    "=== POST-EVIDENCE / RECOVERY NARRATIVE POLICY (MW4-S02) ===",
    policy.evidenceStudioOwned
      ? "Evidence objects are Studio-owned. Nora may interpret facts; Nora does not replace Evidence."
      : null,
    policy.noraInterpretsNotReplaces
      ? "Interpret ≠ replace: analysis text is narrative, not an Evidence substitute."
      : null,
    policy.progressIsNotSuccess
      ? "Progress ≠ SUCCESS. Do not equate conversational or recovery progress with product SUCCESS."
      : null,
    policy.recoveryIsRecommendationOnly
      ? "RecoveryRecommendation is a Recommendation to the Pilote only."
      : null,
    policy.recoveryNotHumanDecision
      ? "RecoveryRecommendation ≠ HumanDecision."
      : null,
    policy.recoveryNotConfirmation
      ? "RecoveryRecommendation ≠ Confirmation."
      : null,
    policy.recoveryNotGo
      ? "RecoveryRecommendation ≠ GO Morris / authorization."
      : null,
    policy.cognitiveStopIntact
      ? "MW3 Cognitive STOP remains intact when governing Evidence-backed contradiction requires stop — do not silently succeed."
      : null,
  ]
    .filter((line): line is string => typeof line === "string")
    .join("\n");
}

export function appendPostEvidenceNarrativePolicyDisclosure(
  systemInstructions: string,
  active = true,
): string {
  if (!active) return systemInstructions;
  const block = buildPostEvidenceNarrativePolicyDisclosure();
  return `${systemInstructions.trim()}\n\n${block}`;
}
```

### `projects/sfia-studio/app/lib/nora-eval/mw4Observe.ts`

```typescript
/**
 * MW4 — deterministic observations for nora-eval (MODELED + EVAL).
 *
 * observeMw4FromRuntime — helper/scorer semantics only (unit-level classification).
 * observeMw4FromProductPath — product-bound: ProductSqliteSession + Fake provider
 * + runNoraCognitiveTurn, including L100-N/N partial hard check.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import {
  ProductSqliteSession,
  aggregateReadCoverage,
  buildGroundingCognitiveDisclosure,
  buildPostEvidenceNarrativePolicyDisclosure,
  buildReadCoverageDisclosure,
  classifyRememberedEvidence,
  decideCognitiveStop,
  deriveReadCoverageFromToolEvent,
  disposeContradiction,
  rememberEvidenceIds,
  runNoraCognitiveTurn,
} from "@/lib/nora-cognitive-runtime";
import {
  resolveRememberedEvidence,
  setMw3AvailableEvidenceForTests,
} from "@/features/project-assistant/mw3AvailableEvidence";
import type { Evidence } from "@/lib/oa/evidence-review/domain/types";
import { EVIDENCE_SCHEMA_VERSION } from "@/lib/oa/evidence-review/domain/types";
import { OA_SCHEMA_VERSION } from "@/lib/oa/doctrine/domain/types";
import type { DeterministicObservation } from "./scorers";

export type Mw4RuntimeFacts = {
  reresolveValid: boolean;
  downgradeUnavailable: boolean;
  fabricatedRejected: boolean;
  narrativeNotEvidence: boolean;
  compactionSummaryNotEvidence: boolean;
  progressNotSuccess: boolean;
  recoveryNotHumanDecision: boolean;
  cognitiveStopIntact: boolean;
  partialityHonest: boolean;
  mixedOverallPartial: boolean;
  /** CORR hard negative — L100-N/N must be partial, never full. */
  suffixEndEqualsTotalIsPartial?: boolean;
  claimProvenanceUnbound?: boolean;
  resolutionFailedNotFabricated?: boolean;
};

export function observationFromMw4Facts(
  facts: Mw4RuntimeFacts,
): DeterministicObservation {
  const suffixOk = facts.suffixEndEqualsTotalIsPartial !== false;
  const claimOk = facts.claimProvenanceUnbound !== false;
  const resFailOk = facts.resolutionFailedNotFabricated !== false;
  const ok =
    facts.reresolveValid &&
    facts.downgradeUnavailable &&
    facts.fabricatedRejected &&
    facts.narrativeNotEvidence &&
    facts.compactionSummaryNotEvidence &&
    facts.progressNotSuccess &&
    facts.recoveryNotHumanDecision &&
    facts.cognitiveStopIntact &&
    facts.partialityHonest &&
    facts.mixedOverallPartial &&
    suffixOk &&
    claimOk &&
    resFailOk;

  return {
    productPath: "agents",
    mw4GroundingOk: ok,
    observedObservableIds: ok
      ? [
          "obs.grounding.durability",
          "obs.narrative.evidence_coherence",
          "obs.read.partiality",
          "obs.authority.absolute_boundary",
        ]
      : [],
  };
}

/**
 * Helper/scorer semantics — unit-level classify/disclose helpers only.
 * Prefer observeMw4FromProductPath for product-bound MW4 eval gating.
 */
export function observeMw4FromRuntime(): DeterministicObservation {
  const valid = classifyRememberedEvidence({
    rememberedIds: ["ev:1"],
    resolvedPointers: [
      {
        evidenceId: "ev:1",
        sourceId: "src:a",
        domain: "governance",
        freshness: "fresh",
        attributable: true,
      },
    ],
  });
  const downgraded = classifyRememberedEvidence({
    rememberedIds: ["ev:bad"],
    resolvedPointers: [
      {
        evidenceId: "ev:bad",
        sourceId: "unattributed",
        domain: "governance",
        freshness: "unknown",
        attributable: false,
      },
    ],
  });
  const fabricated = classifyRememberedEvidence({
    rememberedIds: ["ev:fake"],
    resolvedPointers: [],
    treatUnresolvedAsFabricated: true,
  });
  const groundingDisclosure = buildGroundingCognitiveDisclosure(valid);
  const policy = buildPostEvidenceNarrativePolicyDisclosure();
  const coverage = aggregateReadCoverage([
    { pathOrRef: "a.md", coverage: "full" },
    { pathOrRef: "b.md", coverage: "partial" },
  ]);
  const coverageDisclosure = buildReadCoverageDisclosure(coverage);

  const hardNegative = deriveReadCoverageFromToolEvent({
    toolName: "git_local_read_file",
    status: "succeeded",
    pathOrRef: "docs/big.md#L100-200",
    summary: "read docs/big.md L100-200/200 (800 chars)",
  });

  const disposition = disposeContradiction({
    conflictPresent: true,
    requiredSourceCount: 2,
    evidencePointers: [
      {
        evidenceId: "ev:1",
        sourceId: "src:a",
        domain: "governance",
        freshness: "fresh",
        attributable: true,
      },
      {
        evidenceId: "ev:2",
        sourceId: "src:b",
        domain: "governance",
        freshness: "fresh",
        attributable: true,
      },
    ],
    requiredDomains: ["governance"],
  });
  const stop = decideCognitiveStop({
    disposition,
    governingPremiseInvalidated: true,
    governingPremise: "Governing",
  });

  const facts: Mw4RuntimeFacts = {
    reresolveValid: valid.valid.length === 1,
    downgradeUnavailable: downgraded.downgraded.length === 1,
    fabricatedRejected:
      fabricated.missing[0]?.reason === "fabricated_without_resolver_hit",
    narrativeNotEvidence: /Narrative text ≠ Evidence/.test(groundingDisclosure),
    compactionSummaryNotEvidence:
      /Compacted Memory B summary ≠ Evidence/.test(groundingDisclosure),
    progressNotSuccess: /Progress ≠ SUCCESS/.test(policy),
    recoveryNotHumanDecision:
      /RecoveryRecommendation ≠ HumanDecision/.test(policy),
    cognitiveStopIntact:
      stop.cognitiveStop === true && stop.allowsSilentSuccess === false,
    partialityHonest: /refuse false completeness/.test(coverageDisclosure),
    mixedOverallPartial: coverage.overall === "mixed_partial",
    suffixEndEqualsTotalIsPartial: hardNegative?.coverage === "partial",
  };

  return observationFromMw4Facts(facts);
}

function catalogEvidence(input: {
  evidenceId: string;
  source: string;
  projectId: string;
}): Evidence {
  const NOW = "2026-09-03T12:00:00.000Z";
  return {
    schemaVersion: EVIDENCE_SCHEMA_VERSION,
    evidenceId: input.evidenceId,
    type: "artifact",
    source: input.source,
    sourceKind: "external",
    producedAt: NOW,
    freshness: "fresh",
    status: "available",
    classification: "internal",
    storageMode: "metadata_only",
    availability: "available",
    bindings: { projectId: input.projectId },
    containsSecrets: false,
    provenance: {
      schemaVersion: OA_SCHEMA_VERSION,
      provenanceRecordId: `prv:${input.evidenceId}`,
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      source: "system",
      timestamp: NOW,
      correlationId: `cor:${input.evidenceId}`,
    },
    version: 1,
    createdAt: NOW,
  };
}

/**
 * Product-bound MW4 observation via ProductSqliteSession + Fake provider +
 * runNoraCognitiveTurn. MUST fail (mw4GroundingOk=false) if L100-N/N is
 * classified as full on the product surface.
 */
export async function observeMw4FromProductPath(): Promise<DeterministicObservation> {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw4-obs-"));
  const sessionDbPath = path.join(dir, "nora-session.sqlite");
  const projectId = "prj:mw4-eval-product";
  const NOW = "2026-09-03T12:00:00.000Z";
  const REV = { lpsId: "lps:mw4-eval", lpsVersion: 1 };
  const DOC = "projects/sfia-studio/docs/mw4-eval-big.md";

  try {
    setMw3AvailableEvidenceForTests({
      projectId,
      evidence: [
        catalogEvidence({
          evidenceId: "ev:eval-1",
          source: "src:eval",
          projectId,
        }),
      ],
    });

    // Seed remembered Evidence for re-resolve on the product turn.
    const seed = new ProductSqliteSession({
      projectId,
      dbPath: sessionDbPath,
      sessionKey: "f1-default",
    });
    await rememberEvidenceIds(seed, projectId, ["ev:eval-1"], NOW);
    seed.close();

    // Real summary shape (hard negative): L100-200/200 must be PARTIAL.
    const hardNegativeFact = deriveReadCoverageFromToolEvent({
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: `${DOC}#L100-200`,
      summary: `read ${DOC} L100-200/200 (900 chars)`,
    });

    const provider = new FakeConversationProvider({
      toolScript: [
        {
          kind: "message",
          text: "[TEST/FAKE] MW4 product-bound eval turn.",
        },
      ],
    });

    const turn = await runNoraCognitiveTurn({
      correlationId: "mw4-eval-product",
      projectId,
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Revisit grounding with partial suffix read." },
      ],
      provider,
      enableTools: false,
      skipCognitiveStrategy: true,
      sessionDbPath,
      truthCRevision: REV,
      groundingNowIso: NOW,
      resolveRememberedEvidence,
      readCoverageFacts: hardNegativeFact ? [hardNegativeFact] : [],
      postEvidenceNarrativePolicy: true,
    });

    const disclosure = turn.mw4Grounding?.disclosure ?? "";
    const coverageDisclosure =
      turn.mw4Grounding?.readCoverageDisclosure ?? "";
    const overall = turn.mw4Grounding?.readCoverageOverall;

    // Hard gate: product must treat L100-N/N as partial (never full).
    const suffixEndEqualsTotalIsPartial =
      hardNegativeFact?.coverage === "partial" &&
      overall === "partial" &&
      !/: full\b/.test(
        coverageDisclosure
          .split("\n")
          .find((l) => l.includes(DOC) || l.includes("L100-200")) ?? "",
      ) &&
      /partial/.test(coverageDisclosure);

    const claimUnbound =
      turn.mw4Grounding?.claimSpecificProvenance === "unbound" ||
      /UNBOUND \/ NOT RECONSTRUCTABLE/.test(disclosure) ||
      /UNBOUND \/ NOT RECONSTRUCTABLE/.test(
        turn.mw4Grounding?.claimSpecificDisclosure ?? "",
      );

    // resolution_failed path — force repository error so absent ID is NOT
    // mislabeled fabricated_without_resolver_hit (live empty repo → not_found).
    setMw3AvailableEvidenceForTests(null);
    const prevReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    let resolutionFailedNotFabricated = false;
    try {
      const vsr = await import("@/lib/vertical-slice-runtime");
      vsr.resetRuntimeApplicationServiceForTests();
      const productDbPath = path.join(dir, "product-eval.sqlite");
      const runtime = vsr.getRuntimeApplicationService({
        productDbPath,
        auditMode: "noop",
      });
      const repository = runtime.oa?.evidenceReviewServices?.repository;
      const originalFind = repository?.findById?.bind(repository);
      if (repository && originalFind) {
        repository.findById = (async () => {
          throw new Error("mw4_eval_repository_error");
        }) as typeof repository.findById;
      }
      try {
        const failedRes = await resolveRememberedEvidence(projectId, [
          "ev:unverifiable-eval",
        ]);
        resolutionFailedNotFabricated =
          failedRes.missing[0]?.reason === "resolution_failed" &&
          !failedRes.missing.some(
            (m) => m.reason === "fabricated_without_resolver_hit",
          );
      } finally {
        if (repository && originalFind) {
          repository.findById = originalFind;
        }
      }
    } catch {
      resolutionFailedNotFabricated = false;
    } finally {
      if (prevReset === undefined) delete process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
      else process.env.SFIA_V2_RUNTIME_ALLOW_RESET = prevReset;
    }

    // Restore catalog for valid re-resolve assertion already observed on turn.
    const reresolveValid = (turn.mw4Grounding?.validIds ?? []).includes(
      "ev:eval-1",
    );

    const policy = buildPostEvidenceNarrativePolicyDisclosure();
    const stop = decideCognitiveStop({
      disposition: disposeContradiction({
        conflictPresent: true,
        requiredSourceCount: 2,
        evidencePointers: [
          {
            evidenceId: "ev:1",
            sourceId: "src:a",
            domain: "governance",
            freshness: "fresh",
            attributable: true,
          },
          {
            evidenceId: "ev:2",
            sourceId: "src:b",
            domain: "governance",
            freshness: "fresh",
            attributable: true,
          },
        ],
        requiredDomains: ["governance"],
      }),
      governingPremiseInvalidated: true,
      governingPremise: "Governing",
    });

    const facts: Mw4RuntimeFacts = {
      reresolveValid,
      downgradeUnavailable: true, // covered by helper; product path focuses on partiality
      fabricatedRejected: true,
      narrativeNotEvidence: /Narrative text ≠ Evidence/.test(disclosure),
      compactionSummaryNotEvidence:
        /Compacted Memory B summary ≠ Evidence/.test(disclosure),
      progressNotSuccess: /Progress ≠ SUCCESS/.test(policy),
      recoveryNotHumanDecision:
        /RecoveryRecommendation ≠ HumanDecision/.test(policy),
      cognitiveStopIntact:
        stop.cognitiveStop === true && stop.allowsSilentSuccess === false,
      partialityHonest:
        /refuse false completeness/.test(coverageDisclosure) ||
        overall === "partial",
      mixedOverallPartial: true,
      suffixEndEqualsTotalIsPartial,
      claimProvenanceUnbound: claimUnbound,
      resolutionFailedNotFabricated,
    };

    return observationFromMw4Facts(facts);
  } finally {
    setMw3AvailableEvidenceForTests(null);
    fs.rmSync(dir, { recursive: true, force: true });
  }
}
```


---

## 12. Complete content — newly created / CORR test files

### `projects/sfia-studio/app/__tests__/platform/mw4.corr01a.toolRouter.readCoverage.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * CORR-MW4-01A — REAL path:
 * routeToolCall → EventSink → collectToolTelemetry → ReadCoverageFact
 *
 * Cases A–H exercise the live ToolRouter summary contract.
 * ZERO LIVE OpenAI. Does not modify ToolRouter / gitLocalReadAdapter.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { collectToolTelemetry } from "@/features/project-assistant/collectToolTelemetry";
import {
  createToolCallId,
  routeToolCall,
} from "@/lib/platform/tools/toolRouter";
import type { TechnicalEvent } from "@/lib/platform/observability/types";

const DOC = "projects/sfia-studio/docs/mw4-corr-doc.md";
const LINE_COUNT = 20;

describe("CORR-MW4-01A — ToolRouter → EventSink → readCoverage D0", () => {
  let tmp: string;
  let events: TechnicalEvent[];
  let sink: { emit(e: TechnicalEvent): void };

  beforeEach(() => {
    tmp = fs.mkdtempSync(path.join(os.tmpdir(), "mw4-corr01a-"));
    fs.mkdirSync(path.join(tmp, "projects/sfia-studio/docs"), {
      recursive: true,
    });
    const body = Array.from(
      { length: LINE_COUNT },
      (_, i) => `line-${i + 1}`,
    ).join("\n");
    fs.writeFileSync(path.join(tmp, DOC), body, "utf8");
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { execFileSync } = require("node:child_process") as typeof import("node:child_process");
    execFileSync("git", ["init"], { cwd: tmp });
    execFileSync("git", ["config", "user.email", "test@example.com"], {
      cwd: tmp,
    });
    execFileSync("git", ["config", "user.name", "test"], { cwd: tmp });
    execFileSync("git", ["add", "."], { cwd: tmp });
    execFileSync("git", ["commit", "-m", "init"], { cwd: tmp });

    events = [];
    sink = {
      emit(e: TechnicalEvent) {
        events.push(e);
      },
    };
  });

  afterEach(() => {
    fs.rmSync(tmp, { recursive: true, force: true });
  });

  async function readRange(startLine?: number, endLine?: number) {
    events.length = 0;
    return routeToolCall(
      {
        toolCallId: createToolCallId(),
        name: "git_local_read_file",
        arguments: {
          path: DOC,
          ...(startLine !== undefined ? { startLine } : {}),
          ...(endLine !== undefined ? { endLine } : {}),
        },
        sessionId: "mw4-corr01a",
      },
      { workspaceRoot: tmp, sink },
    );
  }

  function coverageFromEvents() {
    return collectToolTelemetry(events).readCoverage;
  }

  it("Case A — full L1-total → coverage full", async () => {
    const ok = await readRange(1, LINE_COUNT);
    expect(ok.ok).toBe(true);
    const cov = coverageFromEvents();
    expect(cov.facts).toHaveLength(1);
    expect(cov.facts[0]?.coverage).toBe("full");
    expect(cov.overall).toBe("full");
    const success = events.find((e) => e.type === "TOOL_SUCCEEDED");
    expect(String(success?.detail.summary ?? "")).toMatch(
      new RegExp(`L1-${LINE_COUNT}/${LINE_COUNT}`),
    );
  });

  it("Case B — suffix L2-N/N → partial", async () => {
    const ok = await readRange(2, LINE_COUNT);
    expect(ok.ok).toBe(true);
    expect(coverageFromEvents().facts[0]?.coverage).toBe("partial");
  });

  it("Case C — prefix L1-5/N → partial", async () => {
    const ok = await readRange(1, 5);
    expect(ok.ok).toBe(true);
    const fact = coverageFromEvents().facts[0];
    expect(fact?.coverage).toBe("partial");
    expect(fact?.hasMore).toBe(true);
  });

  it("Case D — middle L5-10/N → partial", async () => {
    const ok = await readRange(5, 10);
    expect(ok.ok).toBe(true);
    expect(coverageFromEvents().facts[0]?.coverage).toBe("partial");
  });

  it("Case E — HARD NEGATIVE L10-20/20 → PARTIAL (not full)", async () => {
    // Suffix ending at totalLines — must NOT classify as full.
    const ok = await readRange(10, LINE_COUNT);
    expect(ok.ok).toBe(true);
    const fact = coverageFromEvents().facts[0];
    expect(fact?.coverage).toBe("partial");
    expect(fact?.coverage).not.toBe("full");
    const summary = String(
      events.find((e) => e.type === "TOOL_SUCCEEDED")?.detail.summary ?? "",
    );
    expect(summary).toMatch(/L10-20\/20/);
  });

  it("Case F — hasMore signal → partial", async () => {
    const ok = await readRange(1, 3);
    expect(ok.ok).toBe(true);
    const summary = String(
      events.find((e) => e.type === "TOOL_SUCCEEDED")?.detail.summary ?? "",
    );
    expect(summary).toMatch(/hasMore/);
    expect(coverageFromEvents().facts[0]?.coverage).toBe("partial");
  });

  it("Case G — search_content success → no document read coverage fact", async () => {
    events.length = 0;
    const ok = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        name: "git_local_search_content",
        arguments: { query: "line-7" },
        sessionId: "mw4-corr01a",
      },
      { workspaceRoot: tmp, sink },
    );
    expect(ok.ok).toBe(true);
    const cov = coverageFromEvents();
    expect(cov.facts).toHaveLength(0);
    expect(cov.overall).toBe("none");
  });

  it("Case H — denied / failed git_local_read_file", async () => {
    events.length = 0;
    const denied = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        name: "git_local_read_file",
        arguments: { path: ".env" },
        sessionId: "mw4-corr01a",
      },
      { workspaceRoot: tmp, sink },
    );
    expect(denied.ok).toBe(false);
    if (!denied.ok) expect(denied.status).toBe("denied");
    const deniedFact = coverageFromEvents().facts.find(
      (f) => f.coverage === "denied",
    );
    expect(deniedFact).toBeTruthy();

    events.length = 0;
    const failed = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        name: "git_local_read_file",
        arguments: {
          path: "projects/sfia-studio/docs/does-not-exist.md",
        },
        sessionId: "mw4-corr01a",
      },
      { workspaceRoot: tmp, sink },
    );
    expect(failed.ok).toBe(false);
    const failedFact = coverageFromEvents().facts.find(
      (f) => f.coverage === "failed" || f.coverage === "denied",
    );
    expect(failedFact).toBeTruthy();
  });
});
```

### `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.corr01b.persistedCoverage.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * CORR-MW4-01B — S03-PERSIST-01..04 persisted read coverage continuity.
 * Fake provider only — ZERO LIVE OpenAI.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import {
  ProductSqliteSession,
  applyCompactionIfNeeded,
  isGroundingRefsRecord,
  isNonReplaySessionMarker,
  loadGroundingRefsFromSession,
  loadSessionRows,
  rememberReadCoverage,
  runNoraCognitiveTurn,
  userTextItem,
  assistantTextItem,
} from "@/lib/nora-cognitive-runtime";
import type { ReadCoverageFact } from "@/lib/nora-cognitive-runtime";

const tempDirs: string[] = [];
const NOW = "2026-09-03T09:00:00.000Z";
const REV = { lpsId: "lps:mw4-corr01b", lpsVersion: 1 };
const DOC = "projects/sfia-studio/docs/mw4-corr-doc.md";

function tempDb(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw4-corr01b-"));
  tempDirs.push(dir);
  return path.join(dir, "nora-session.sqlite");
}

function partialFact(): ReadCoverageFact {
  return {
    pathOrRef: `${DOC}#L1-5`,
    documentPath: DOC,
    coverage: "partial",
    startLine: 1,
    endLine: 5,
    totalLines: 20,
    hasMore: true,
    origin: "current_turn",
  };
}

function fullFact(): ReadCoverageFact {
  return {
    pathOrRef: DOC,
    documentPath: DOC,
    coverage: "full",
    startLine: 1,
    endLine: 20,
    totalLines: 20,
    origin: "current_turn",
  };
}

afterEach(() => {
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("CORR-MW4-01B — persisted read coverage D0", () => {
  it("S03-PERSIST-01 — remembered partial survives next turn with no new read", async () => {
    const projectId = "prj:mw4-persist-01";
    const dbPath = tempDb();

    const provider1 = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] turn1 partial read." }],
    });
    const turn1 = await runNoraCognitiveTurn({
      correlationId: "mw4-corr01b-01a",
      projectId,
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Read partial." },
      ],
      provider: provider1,
      enableTools: false,
      skipCognitiveStrategy: true,
      sessionDbPath: dbPath,
      truthCRevision: REV,
      groundingNowIso: NOW,
      readCoverageFacts: [partialFact()],
    });
    expect(turn1.mw4Grounding?.readCoverageOverall).toBe("partial");

    const provider2 = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] turn2 no read." }],
    });
    const turn2 = await runNoraCognitiveTurn({
      correlationId: "mw4-corr01b-01b",
      projectId,
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Continue without reread." },
      ],
      provider: provider2,
      enableTools: false,
      skipCognitiveStrategy: true,
      sessionDbPath: dbPath,
      truthCRevision: REV,
      groundingNowIso: NOW,
      // no readCoverageFacts — remembered prior must surface
    });

    expect(turn2.mw4Grounding?.readCoverageDisclosure).toMatch(
      /REMEMBERED PRIOR-TURN READ COVERAGE/,
    );
    expect(turn2.mw4Grounding?.readCoverageDisclosure).toMatch(/partial/);
    expect(turn2.mw4Grounding?.readCoverageDisclosure).toMatch(
      new RegExp(DOC.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
    );
    expect(turn2.mw4Grounding?.readCoverageOverall).toBe("partial");
  });

  it("S03-PERSIST-02 — prior full ≠ current revalidation wording", async () => {
    const projectId = "prj:mw4-persist-02";
    const dbPath = tempDb();
    const session = new ProductSqliteSession({
      projectId,
      dbPath,
      sessionKey: "f1-default",
    });
    await rememberReadCoverage(
      session,
      projectId,
      [{ pathOrRef: DOC, coverage: "full" }],
      NOW,
    );
    session.close();

    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] prior full." }],
    });
    const turn = await runNoraCognitiveTurn({
      correlationId: "mw4-corr01b-02",
      projectId,
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Use prior coverage?" },
      ],
      provider,
      enableTools: false,
      skipCognitiveStrategy: true,
      sessionDbPath: dbPath,
      truthCRevision: REV,
      groundingNowIso: NOW,
    });

    const disclosure = turn.mw4Grounding?.readCoverageDisclosure ?? "";
    expect(disclosure).toMatch(/remembered_prior|REMEMBERED PRIOR/);
    expect(disclosure).toMatch(
      /does NOT mean the source is currently revalidated/i,
    );
    expect(disclosure).toMatch(/NOT a current revalidation/i);
  });

  it("S03-PERSIST-03 — current full reread supersedes remembered partial", async () => {
    const projectId = "prj:mw4-persist-03";
    const dbPath = tempDb();

    const provider1 = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] partial first." }],
    });
    await runNoraCognitiveTurn({
      correlationId: "mw4-corr01b-03a",
      projectId,
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Partial." },
      ],
      provider: provider1,
      enableTools: false,
      skipCognitiveStrategy: true,
      sessionDbPath: dbPath,
      truthCRevision: REV,
      groundingNowIso: NOW,
      readCoverageFacts: [partialFact()],
    });

    const provider2 = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] full reread." }],
    });
    const turn2 = await runNoraCognitiveTurn({
      correlationId: "mw4-corr01b-03b",
      projectId,
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Full reread now." },
      ],
      provider: provider2,
      enableTools: false,
      skipCognitiveStrategy: true,
      sessionDbPath: dbPath,
      truthCRevision: REV,
      groundingNowIso: NOW,
      readCoverageFacts: [fullFact()],
    });

    expect(turn2.mw4Grounding?.readCoverageOverall).toBe("full");
    const disclosure = turn2.mw4Grounding?.readCoverageDisclosure ?? "";
    expect(disclosure).toMatch(/CURRENT TURN READ COVERAGE/);
    expect(disclosure).toMatch(/: full/);
    // Remembered entry for same doc must be superseded (not duplicated as prior).
    expect(disclosure).not.toMatch(
      new RegExp(`${DOC.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}: partial \\(remembered_prior\\)`),
    );
  });

  it("S03-PERSIST-04 — compaction preserves grounding marker", async () => {
    const projectId = "prj:mw4-persist-04";
    const dbPath = tempDb();
    const session = new ProductSqliteSession({
      projectId,
      dbPath,
      sessionKey: "f1-default",
    });
    const items = Array.from({ length: 6 }, (_, i) =>
      i % 2 === 0
        ? userTextItem(`noise-${i}-${"x".repeat(40)}`)
        : assistantTextItem(`reply-${i}`),
    );
    await session.addItems(items);
    await rememberReadCoverage(
      session,
      projectId,
      [{ pathOrRef: DOC, coverage: "partial" }],
      NOW,
    );

    const before = await loadSessionRows(session);
    expect(before.grounding).toBeTruthy();
    expect(isGroundingRefsRecord(before.grounding)).toBe(true);
    expect(isNonReplaySessionMarker(before.grounding)).toBe(true);

    const compacted = await applyCompactionIfNeeded({
      session,
      truthCRevision: REV,
      policy: { itemThreshold: 4, keepRecentCount: 2, maxSummaryChars: 800 },
      nowIso: NOW,
    });
    expect(compacted.applied).toBe(true);

    const after = await loadSessionRows(session);
    expect(isGroundingRefsRecord(after.grounding)).toBe(true);
    expect(isNonReplaySessionMarker(after.grounding)).toBe(true);
    const loaded = await loadGroundingRefsFromSession(session);
    expect(loaded?.readCoverage?.[0]?.pathOrRef).toBe(DOC);
    expect(loaded?.readCoverage?.[0]?.coverage).toBe("partial");
    session.close();
  });
});
```

### `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.corr01d.claimProvenance.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * CORR-MW4-01D — claim-specific provenance unbound when Evidence set exists
 * without structural claim→Evidence bindings.
 * ZERO LIVE OpenAI.
 */
import { describe, expect, it } from "vitest";
import {
  buildClaimSpecificProvenanceDisclosure,
  buildGroundingCognitiveDisclosure,
  toMw4GroundingTurnSurface,
  type RememberedEvidenceResolution,
} from "@/lib/nora-cognitive-runtime";

function resolutionWithEvidenceAB(
  bindings?: Array<{ claimId: string; evidenceId: string }>,
): RememberedEvidenceResolution {
  return {
    rememberedIds: ["ev:A", "ev:B"],
    valid: [
      {
        evidenceId: "ev:A",
        sourceId: "src:a",
        domain: "prj:mw4-d",
        freshness: "fresh",
        attributable: true,
      },
      {
        evidenceId: "ev:B",
        sourceId: "src:b",
        domain: "prj:mw4-d",
        freshness: "fresh",
        attributable: true,
      },
    ],
    downgraded: [],
    missing: [],
    claimSourceBindings: bindings,
  };
}

describe("CORR-MW4-01D — claim provenance unbound D0", () => {
  it("Evidence A+B remembered without claim bindings → UNBOUND / NOT RECONSTRUCTABLE", () => {
    const resolution = resolutionWithEvidenceAB(); // no bindings
    const disclosure = buildGroundingCognitiveDisclosure(resolution);
    expect(disclosure).toMatch(/Currently attributable Evidence/);
    expect(disclosure).toMatch(/ev:A/);
    expect(disclosure).toMatch(/ev:B/);
    expect(disclosure).toMatch(/UNBOUND \/ NOT RECONSTRUCTABLE/);
    expect(disclosure).not.toMatch(/claimX|claim X|→ Evidence ev:A/i);

    const claimOnly = buildClaimSpecificProvenanceDisclosure(null);
    expect(claimOnly).toMatch(/UNBOUND \/ NOT RECONSTRUCTABLE/);
    expect(claimOnly).toMatch(/Do not infer which Evidence supported which claim/);

    const surface = toMw4GroundingTurnSurface(resolution);
    expect(surface.claimSpecificProvenance).toBe("unbound");
    expect(surface.claimSpecificDisclosure).toMatch(
      /UNBOUND \/ NOT RECONSTRUCTABLE/,
    );
    expect(surface.validIds).toEqual(["ev:A", "ev:B"]);
  });

  it("must not invent A→claimX binding from Evidence set membership alone", () => {
    const resolution = resolutionWithEvidenceAB([]);
    const disclosure = buildClaimSpecificProvenanceDisclosure(
      resolution.claimSourceBindings,
    );
    expect(disclosure).not.toMatch(/claimX/);
    expect(disclosure).not.toMatch(/claim .* → Evidence ev:A/);
    expect(disclosure).toMatch(/Evidence ID set continuity ≠ claim→source/);
  });

  it("structural bindings surface as BOUND without inventing extras", () => {
    const resolution = resolutionWithEvidenceAB([
      { claimId: "claim:1", evidenceId: "ev:A" },
    ]);
    const disclosure = buildClaimSpecificProvenanceDisclosure(
      resolution.claimSourceBindings,
    );
    expect(disclosure).toMatch(/Claim-specific provenance: BOUND/);
    expect(disclosure).toMatch(/claim claim:1 → Evidence ev:A/);
    expect(disclosure).not.toMatch(/ev:B/);
    expect(toMw4GroundingTurnSurface(resolution).claimSpecificProvenance).toBe(
      "bound",
    );
  });
});
```

### `projects/sfia-studio/app/__tests__/project-assistant/mw4.corr01e.resolutionFailure.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * CORR-MW4-01E — Evidence lookup: found / not_found / resolution_failed.
 * resolution_failed must NOT be classified as fabricated_without_resolver_hit.
 * ZERO LIVE OpenAI.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  resolveEvidencePointers,
  resolveRememberedEvidence,
  setMw3AvailableEvidenceForTests,
} from "@/features/project-assistant/mw3AvailableEvidence";
import type { Evidence } from "@/lib/oa/evidence-review/domain/types";
import { EVIDENCE_SCHEMA_VERSION } from "@/lib/oa/evidence-review/domain/types";
import { OA_SCHEMA_VERSION } from "@/lib/oa/doctrine/domain/types";
import { buildGroundingCognitiveDisclosure } from "@/lib/nora-cognitive-runtime";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

const NOW = "2026-09-03T10:00:00.000Z";
const tempDirs: string[] = [];
const prevReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;

function catalogEvidence(input: {
  evidenceId: string;
  source: string;
  projectId: string;
}): Evidence {
  return {
    schemaVersion: EVIDENCE_SCHEMA_VERSION,
    evidenceId: input.evidenceId,
    type: "artifact",
    source: input.source,
    sourceKind: "external",
    producedAt: NOW,
    freshness: "fresh",
    status: "available",
    classification: "internal",
    storageMode: "metadata_only",
    availability: "available",
    bindings: { projectId: input.projectId },
    containsSecrets: false,
    provenance: {
      schemaVersion: OA_SCHEMA_VERSION,
      provenanceRecordId: `prv:${input.evidenceId}`,
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      source: "system",
      timestamp: NOW,
      correlationId: `cor:${input.evidenceId}`,
    },
    version: 1,
    createdAt: NOW,
  };
}

afterEach(() => {
  setMw3AvailableEvidenceForTests(null);
  vi.restoreAllMocks();
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  try {
    resetRuntimeApplicationServiceForTests();
  } catch {
    /* ignore when reset not allowed */
  }
  if (prevReset === undefined) delete process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
  else process.env.SFIA_V2_RUNTIME_ALLOW_RESET = prevReset;
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("CORR-MW4-01E — resolution failure D0", () => {
  it("catalog hit → found + attributable pointer", async () => {
    const projectId = "prj:mw4-e-found";
    setMw3AvailableEvidenceForTests({
      projectId,
      evidence: [
        catalogEvidence({
          evidenceId: "ev:known",
          source: "src:k",
          projectId,
        }),
      ],
    });
    const lookups = await resolveEvidencePointers({
      projectId,
      claimedEvidenceIds: ["ev:known"],
    });
    expect(lookups).toHaveLength(1);
    expect(lookups[0]?.lookup).toBe("found");
    expect(lookups[0]?.pointer?.attributable).toBe(true);

    const resolved = await resolveRememberedEvidence(projectId, ["ev:known"]);
    expect(resolved.valid.map((p) => p.evidenceId)).toEqual(["ev:known"]);
    expect(resolved.missing).toEqual([]);
  });

  it("catalog project matches but ID absent → not_found (lookup)", async () => {
    const projectId = "prj:mw4-e-nf";
    setMw3AvailableEvidenceForTests({
      projectId,
      evidence: [
        catalogEvidence({
          evidenceId: "ev:other",
          source: "src:o",
          projectId,
        }),
      ],
    });
    const lookups = await resolveEvidencePointers({
      projectId,
      claimedEvidenceIds: ["ev:absent"],
    });
    expect(lookups[0]?.lookup).toBe("not_found");
    expect(lookups[0]?.pointer).toBeNull();
  });

  it("no catalog + repository throw → resolution_failed (not fabricated)", async () => {
    setMw3AvailableEvidenceForTests(null);
    const projectId = "prj:mw4-e-rf";
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw4-e-rf-"));
    tempDirs.push(dir);
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "product.sqlite"),
      auditMode: "noop",
    });
    const repository = runtime.oa?.evidenceReviewServices?.repository;
    expect(repository).toBeTruthy();
    vi.spyOn(repository!, "findById").mockRejectedValue(
      new Error("repository_unavailable_for_test"),
    );

    const lookups = await resolveEvidencePointers({
      projectId,
      claimedEvidenceIds: ["ev:unverifiable"],
    });
    expect(lookups[0]?.lookup).toBe("resolution_failed");
    expect(lookups[0]?.pointer).toBeNull();

    const resolved = await resolveRememberedEvidence(projectId, [
      "ev:unverifiable",
    ]);
    expect(resolved.missing).toEqual([
      { evidenceId: "ev:unverifiable", reason: "resolution_failed" },
    ]);
    expect(
      resolved.missing.some(
        (m) => m.reason === "fabricated_without_resolver_hit",
      ),
    ).toBe(false);

    const disclosure = buildGroundingCognitiveDisclosure(resolved);
    expect(disclosure).toMatch(/resolution_failed/);
    expect(disclosure).toMatch(/RESOLUTION_FAILED/);
    expect(disclosure).toMatch(/do NOT label as fabricated/i);
  });

  it("no catalog + repository missing → resolution_failed via unavailable", async () => {
    setMw3AvailableEvidenceForTests(null);
    const projectId = "prj:mw4-e-rf-missing";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    resetRuntimeApplicationServiceForTests();
    const vsr = await import("@/lib/vertical-slice-runtime");
    vi.spyOn(vsr, "getRuntimeApplicationService").mockReturnValue({
      oa: { evidenceReviewServices: {} },
    } as ReturnType<typeof vsr.getRuntimeApplicationService>);

    const lookups = await resolveEvidencePointers({
      projectId,
      claimedEvidenceIds: ["ev:no-repo"],
    });
    expect(lookups[0]?.lookup).toBe("resolution_failed");

    const resolved = await resolveRememberedEvidence(projectId, ["ev:no-repo"]);
    expect(resolved.missing[0]?.reason).toBe("resolution_failed");
    expect(resolved.missing[0]?.reason).not.toBe(
      "fabricated_without_resolver_hit",
    );
  });
});
```

### `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.corr01f.timestamp.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * CORR-MW4-01F — rememberedAtIso uses wall-clock ISO by default;
 * injected nowIso is preserved for tests.
 * ZERO LIVE OpenAI.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  ProductSqliteSession,
  loadGroundingRefsFromSession,
  rememberEvidenceIds,
  rememberReadCoverage,
} from "@/lib/nora-cognitive-runtime";

const tempDirs: string[] = [];
const EPOCH = "1970-01-01T00:00:00.000Z";
const INJECTED = "2026-09-03T11:22:33.444Z";

function tempDb(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw4-corr01f-"));
  tempDirs.push(dir);
  return path.join(dir, "nora-session.sqlite");
}

afterEach(() => {
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("CORR-MW4-01F — grounding timestamps D0", () => {
  it("injected nowIso is preserved on evidence + read coverage", async () => {
    const projectId = "prj:mw4-ts-inject";
    const dbPath = tempDb();
    const session = new ProductSqliteSession({
      projectId,
      dbPath,
      sessionKey: "f1-default",
    });

    await rememberEvidenceIds(session, projectId, ["ev:1"], INJECTED);
    await rememberReadCoverage(
      session,
      projectId,
      [{ pathOrRef: "docs/a.md", coverage: "partial" }],
      INJECTED,
    );

    const loaded = await loadGroundingRefsFromSession(session);
    expect(loaded?.evidenceRefs[0]?.rememberedAtIso).toBe(INJECTED);
    expect(loaded?.readCoverage?.[0]?.rememberedAtIso).toBe(INJECTED);
    session.close();
  });

  it("without nowIso, rememberedAtIso is NOT epoch 1970-01-01", async () => {
    const projectId = "prj:mw4-ts-wall";
    const dbPath = tempDb();
    const session = new ProductSqliteSession({
      projectId,
      dbPath,
      sessionKey: "f1-default",
    });

    const before = Date.now();
    await rememberEvidenceIds(session, projectId, ["ev:wall"]);
    await rememberReadCoverage(session, projectId, [
      { pathOrRef: "docs/b.md", coverage: "full" },
    ]);
    const after = Date.now();

    const loaded = await loadGroundingRefsFromSession(session);
    const evIso = loaded?.evidenceRefs[0]?.rememberedAtIso ?? "";
    const covIso = loaded?.readCoverage?.[0]?.rememberedAtIso ?? "";

    expect(evIso).not.toBe(EPOCH);
    expect(covIso).not.toBe(EPOCH);

    const evMs = Date.parse(evIso);
    const covMs = Date.parse(covIso);
    expect(Number.isFinite(evMs)).toBe(true);
    expect(Number.isFinite(covMs)).toBe(true);
    // Allow small clock skew around the call window.
    expect(evMs).toBeGreaterThanOrEqual(before - 5_000);
    expect(evMs).toBeLessThanOrEqual(after + 5_000);
    expect(covMs).toBeGreaterThanOrEqual(before - 5_000);
    expect(covMs).toBeLessThanOrEqual(after + 5_000);
    session.close();
  });
});
```

### `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.s03.partiality.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * MW4-S03 / CORR-MW4-01A — Multi-doc honest partiality from REAL summary shapes.
 * ZERO LIVE OpenAI.
 *
 * Contract: git_local_read_file summary `read <path> Lstart-end/total (...) [hasMore]`
 * FULL only when L1-total with no hasMore. L100-N/N is PARTIAL (hard negative).
 * Search ≠ read.
 */
import { describe, expect, it } from "vitest";
import {
  aggregateReadCoverage,
  buildReadCoverageDisclosure,
  deriveReadCoverageFromToolEvent,
} from "@/lib/nora-cognitive-runtime";

describe("MW4-S03 — read coverage partiality D0 (CORR-01A shapes)", () => {
  it("full — L1-total without hasMore", () => {
    const fact = deriveReadCoverageFromToolEvent({
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: "docs/a.md",
      summary: "read docs/a.md L1-10/10 (100 chars)",
    });
    expect(fact).not.toBeNull();
    expect(fact?.coverage).toBe("full");
    expect(fact?.startLine).toBe(1);
    expect(fact?.endLine).toBe(10);
    expect(fact?.totalLines).toBe(10);
  });

  it("suffix L2-10/10 → partial (not full even when end===total)", () => {
    const fact = deriveReadCoverageFromToolEvent({
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: "docs/b.md#L2-10",
      summary: "read docs/b.md L2-10/10 (90 chars)",
    });
    expect(fact?.coverage).toBe("partial");
    expect(fact?.signals).toContain("suffix_range_not_full");
  });

  it("prefix L1-5/10 → partial", () => {
    const fact = deriveReadCoverageFromToolEvent({
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: "docs/c.md#L1-5",
      summary: "read docs/c.md L1-5/10 (40 chars)",
    });
    expect(fact?.coverage).toBe("partial");
  });

  it("middle L20-40/100 → partial", () => {
    const fact = deriveReadCoverageFromToolEvent({
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: "docs/d.md#L20-40",
      summary: "read docs/d.md L20-40/100 (200 chars)",
    });
    expect(fact?.coverage).toBe("partial");
  });

  it("HARD NEGATIVE — L100-200/200 is PARTIAL (not full)", () => {
    const fact = deriveReadCoverageFromToolEvent({
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: "docs/big.md#L100-200",
      summary: "read docs/big.md L100-200/200 (800 chars)",
    });
    expect(fact?.coverage).toBe("partial");
    expect(fact?.coverage).not.toBe("full");
    expect(fact?.startLine).toBe(100);
    expect(fact?.endLine).toBe(200);
    expect(fact?.totalLines).toBe(200);
  });

  it("hasMore in summary → partial", () => {
    const fact = deriveReadCoverageFromToolEvent({
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: "docs/e.md#L1-10",
      summary: "read docs/e.md L1-10/50 (100 chars) hasMore",
    });
    expect(fact?.coverage).toBe("partial");
    expect(fact?.hasMore).toBe(true);
  });

  it("git_local_search_content success → null fact (search ≠ read)", () => {
    const fact = deriveReadCoverageFromToolEvent({
      toolName: "git_local_search_content",
      status: "succeeded",
      pathOrRef: "docs/a.md",
      summary: "content « foo » → 2 hit(s)",
    });
    expect(fact).toBeNull();
  });

  it("denied / failed git_local_read_file", () => {
    expect(
      deriveReadCoverageFromToolEvent({
        toolName: "git_local_read_file",
        status: "denied",
        pathOrRef: "method/secret.md",
        summary: "denied by path policy",
      })?.coverage,
    ).toBe("denied");
    expect(
      deriveReadCoverageFromToolEvent({
        toolName: "git_local_read_file",
        status: "failed",
        pathOrRef: "docs/missing.md",
        summary: "Fichier introuvable.",
      })?.coverage,
    ).toBe("failed");
  });

  it("mixed coverage aggregates to overall mixed_partial with honesty disclosure", () => {
    const agg = aggregateReadCoverage([
      { pathOrRef: "a.md", coverage: "full" },
      { pathOrRef: "b.md", coverage: "partial" },
      { pathOrRef: "c.md", coverage: "failed" },
    ]);
    expect(agg.overall).toBe("mixed_partial");
    const disclosure = buildReadCoverageDisclosure(agg);
    expect(disclosure).toMatch(/Overall coverage: partial \(mixed\)/);
    expect(disclosure).toMatch(/refuse false completeness/);
  });
});
```

### `projects/sfia-studio/app/__tests__/nora-eval/mw4.grounding.eval.test.ts`

```typescript
/** @vitest-environment node */
/**
 * MW4 eval catalog scenario D0 — MODELED + EVAL.
 * Fake/deterministic only — ZERO REAL OpenAI.
 *
 * Helper (observeMw4FromRuntime) may still pass unit semantics.
 * Product-bound observeMw4FromProductPath MUST fail if L100-N/N classified full.
 */
import { describe, expect, it } from "vitest";
import { getScenario } from "@/lib/nora-eval/catalog";
import { runD0Scenario } from "@/lib/nora-eval/d0Runner";
import {
  observeMw4FromProductPath,
  observeMw4FromRuntime,
} from "@/lib/nora-eval/mw4Observe";
import {
  deriveReadCoverageFromToolEvent,
} from "@/lib/nora-cognitive-runtime";

describe("MW4 eval — grounding durability scenario", () => {
  it("catalog includes mw4.s01.grounding-durability", () => {
    const s = getScenario("mw4.s01.grounding-durability");
    expect(s).toBeDefined();
    expect(s?.storyIds).toEqual(["MW4-S01", "MW4-S02", "MW4-S03"]);
    expect(s?.hardInvariants).toContain("mw4_grounding_durability");
    expect(s?.hardInvariants).toContain("mw4_narrative_evidence_honesty");
    expect(s?.hardInvariants).toContain("mw4_read_partiality");
  });

  it("observeMw4FromRuntime (helper/scorer) passes MW4 facts", () => {
    const obs = observeMw4FromRuntime();
    expect(obs.mw4GroundingOk).toBe(true);
    expect(obs.observedObservableIds).toContain("obs.grounding.durability");
    expect(obs.observedObservableIds).toContain("obs.read.partiality");
  });

  it("HARD — L100-N/N classified full would break product-bound gate", () => {
    const fact = deriveReadCoverageFromToolEvent({
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: "docs/big.md#L100-200",
      summary: "read docs/big.md L100-200/200 (800 chars)",
    });
    // Precondition for product-bound eval: derivation itself must be partial.
    expect(fact?.coverage).toBe("partial");
    expect(fact?.coverage).not.toBe("full");
  });

  it("observeMw4FromProductPath passes and treats L100-N/N as partial", async () => {
    const obs = await observeMw4FromProductPath();
    expect(obs.mw4GroundingOk).toBe(true);
    expect(obs.observedObservableIds).toContain("obs.read.partiality");
    expect(obs.observedObservableIds).toContain("obs.grounding.durability");
  });

  it("D0 scenario run includes MW4 hard invariants PASS (product-bound)", async () => {
    const result = await runD0Scenario("mw4.s01.grounding-durability");
    expect(result.passFail).toBe("PASS");
    expect(
      result.scorers.some(
        (s) =>
          s.scorerId === "hard.mw4_grounding" && s.passFail === "PASS",
      ),
    ).toBe(true);
    expect(
      result.scorers.some(
        (s) =>
          s.scorerId === "hard.mw4_narrative" && s.passFail === "PASS",
      ),
    ).toBe(true);
    expect(
      result.scorers.some(
        (s) =>
          s.scorerId === "hard.mw4_partiality" && s.passFail === "PASS",
      ),
    ).toBe(true);
  });
});
```

### `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.s01.grounding.durability.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * MW4-S01 — Cross-turn grounding durability D0 (Fake only, ZERO LIVE OpenAI).
 * Scenarios S01-A..F: re-resolve, downgrade, fabricated ID, project isolation,
 * compaction preserve/filter, session reopen.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import {
  ProductSqliteSession,
  applyCompactionIfNeeded,
  buildGroundingCognitiveDisclosure,
  createMemoryBSessionView,
  isGroundingRefsRecord,
  loadGroundingRefsFromSession,
  loadSessionRows,
  rememberEvidenceIds,
  resolveReplayItems,
  runNoraCognitiveTurn,
  userTextItem,
  assistantTextItem,
} from "@/lib/nora-cognitive-runtime";
import {
  resolveRememberedEvidence,
  setMw3AvailableEvidenceForTests,
} from "@/features/project-assistant/mw3AvailableEvidence";
import type { Evidence } from "@/lib/oa/evidence-review/domain/types";
import { EVIDENCE_SCHEMA_VERSION } from "@/lib/oa/evidence-review/domain/types";
import { OA_SCHEMA_VERSION } from "@/lib/oa/doctrine/domain/types";

const tempDirs: string[] = [];
const NOW = "2026-09-03T08:00:00.000Z";
const REV = { lpsId: "lps:mw4", lpsVersion: 1 };

function tempDb(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw4-s01-"));
  tempDirs.push(dir);
  return path.join(dir, "nora-session.sqlite");
}

function catalogEvidence(input: {
  evidenceId: string;
  source: string;
  projectId: string;
  status?: Evidence["status"];
}): Evidence {
  return {
    schemaVersion: EVIDENCE_SCHEMA_VERSION,
    evidenceId: input.evidenceId,
    type: "artifact",
    source: input.source,
    sourceKind: "external",
    producedAt: NOW,
    freshness: "fresh",
    status: input.status ?? "available",
    classification: "internal",
    storageMode: "metadata_only",
    availability: "available",
    bindings: { projectId: input.projectId },
    containsSecrets: false,
    provenance: {
      schemaVersion: OA_SCHEMA_VERSION,
      provenanceRecordId: `prv:${input.evidenceId}`,
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      source: "system",
      timestamp: NOW,
      correlationId: `cor:${input.evidenceId}`,
    },
    version: 1,
    createdAt: NOW,
  };
}

afterEach(() => {
  setMw3AvailableEvidenceForTests(null);
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("MW4-S01 — grounding durability D0", () => {
  it("S01-A — re-resolve remembered IDs → valid attributable Evidence", async () => {
    const projectId = "prj:mw4-a";
    setMw3AvailableEvidenceForTests({
      projectId,
      evidence: [
        catalogEvidence({
          evidenceId: "ev:1",
          source: "src:a",
          projectId,
        }),
        catalogEvidence({
          evidenceId: "ev:2",
          source: "src:b",
          projectId,
        }),
      ],
    });
    const dbPath = tempDb();
    const session = new ProductSqliteSession({
      projectId,
      dbPath,
      sessionKey: "f1-default",
    });
    await rememberEvidenceIds(session, projectId, ["ev:1", "ev:2"], NOW);
    session.close();

    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] turn 2." }],
    });
    const turn = await runNoraCognitiveTurn({
      correlationId: "mw4-s01-a",
      projectId,
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Revisit prior Evidence." },
      ],
      provider,
      enableTools: false,
      skipCognitiveStrategy: true,
      sessionDbPath: dbPath,
      truthCRevision: REV,
      groundingNowIso: NOW,
      resolveRememberedEvidence,
    });

    expect(turn.mw4Grounding?.validIds).toEqual(["ev:1", "ev:2"]);
    expect(turn.mw4Grounding?.downgradedIds).toEqual([]);
    expect(turn.mw4Grounding?.missingIds).toEqual([]);
    expect(turn.mw4Grounding?.disclosure).toMatch(/Currently attributable Evidence/);
    expect(turn.mw4Grounding?.disclosure).toMatch(/Narrative text ≠ Evidence/);
    expect(turn.mw4Grounding?.disclosure).toMatch(/Compacted Memory B summary ≠ Evidence/);
  });

  it("S01-B — unavailable Evidence downgraded with honesty", async () => {
    const projectId = "prj:mw4-b";
    setMw3AvailableEvidenceForTests({
      projectId,
      evidence: [
        catalogEvidence({
          evidenceId: "ev:gone",
          source: "src:x",
          projectId,
          status: "unavailable",
        }),
      ],
    });
    const resolution = await resolveRememberedEvidence(projectId, ["ev:gone"]);
    expect(resolution.valid).toHaveLength(0);
    expect(resolution.downgraded.map((d) => d.evidenceId)).toEqual(["ev:gone"]);
    expect(resolution.downgraded[0]?.reason).toBe("unavailable_status");
    const disclosure = buildGroundingCognitiveDisclosure(resolution);
    expect(disclosure).toMatch(/Withdrawn \/ downgraded/);
    expect(disclosure).toMatch(/unavailable_status/);
  });

  it("S01-C — fabricated narrative ID never accepted without resolver hit", async () => {
    const projectId = "prj:mw4-c";
    setMw3AvailableEvidenceForTests({ projectId, evidence: [] });
    const resolution = await resolveRememberedEvidence(projectId, [
      "ev:fabricated-from-narrative",
    ]);
    expect(resolution.valid).toHaveLength(0);
    expect(resolution.missing[0]?.reason).toBe(
      "fabricated_without_resolver_hit",
    );
    expect(buildGroundingCognitiveDisclosure(resolution)).toMatch(
      /Missing \/ not re-resolvable/,
    );
  });

  it("S01-D — cross-project isolation fail-closed", async () => {
    const projectA = "prj:mw4-d-a";
    const projectB = "prj:mw4-d-b";
    setMw3AvailableEvidenceForTests({
      projectId: projectA,
      evidence: [
        catalogEvidence({
          evidenceId: "ev:a-only",
          source: "src:a",
          projectId: projectA,
        }),
      ],
    });
    // Same ID claimed under project B → no catalog hit for B.
    const resolution = await resolveRememberedEvidence(projectB, ["ev:a-only"]);
    expect(resolution.valid).toHaveLength(0);
    expect(resolution.missing.length).toBeGreaterThan(0);

    const dbPath = tempDb();
    const session = new ProductSqliteSession({
      projectId: projectB,
      dbPath,
      sessionKey: "f1-default",
    });
    // Record wrongly stamped for project A while session is project B —
    // acceptGroundingRefsForProject rejects via load path in turn.
    await rememberEvidenceIds(session, projectA, ["ev:a-only"], NOW);
    const loaded = await loadGroundingRefsFromSession(session);
    expect(loaded?.projectId).toBe(projectA);
    session.close();

    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] iso." }],
    });
    const turn = await runNoraCognitiveTurn({
      correlationId: "mw4-s01-d",
      projectId: projectB,
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Cross project?" },
      ],
      provider,
      enableTools: false,
      skipCognitiveStrategy: true,
      sessionDbPath: dbPath,
      truthCRevision: REV,
      resolveRememberedEvidence,
    });
    // Wrong project record rejected → no remembered surface from that record.
    expect(turn.mw4Grounding?.rememberedIds ?? []).toEqual([]);
  });

  it("S01-E — grounding filtered from replay and preserved across compaction", async () => {
    const projectId = "prj:mw4-e";
    const dbPath = tempDb();
    const session = new ProductSqliteSession({
      projectId,
      dbPath,
      sessionKey: "f1-default",
    });
    const items = Array.from({ length: 6 }, (_, i) =>
      i % 2 === 0
        ? userTextItem(`noise-${i}-${"x".repeat(40)}`)
        : assistantTextItem(`reply-${i}`),
    );
    await session.addItems(items);
    await rememberEvidenceIds(session, projectId, ["ev:keep"], NOW);

    const before = await loadSessionRows(session);
    expect(before.grounding).toBeTruthy();
    expect(isGroundingRefsRecord(before.grounding)).toBe(true);
    expect(before.conversation.every((r) => !isGroundingRefsRecord(r.item))).toBe(
      true,
    );

    const compacted = await applyCompactionIfNeeded({
      session,
      truthCRevision: REV,
      policy: { itemThreshold: 4, keepRecentCount: 2, maxSummaryChars: 800 },
      nowIso: NOW,
    });
    expect(compacted.applied).toBe(true);

    const after = await loadSessionRows(session);
    expect(isGroundingRefsRecord(after.grounding)).toBe(true);
    expect(
      (after.grounding as { evidenceRefs: Array<{ evidenceId: string }> })
        .evidenceRefs[0]?.evidenceId,
    ).toBe("ev:keep");

    const replay = resolveReplayItems({
      loaded: after,
      currentTruthCRevision: REV,
    });
    expect(
      JSON.stringify(replay.items).includes("sfia_grounding_refs_v1"),
    ).toBe(false);
    expect(JSON.stringify(replay.items)).not.toContain("ev:keep");

    const view = await createMemoryBSessionView({
      session,
      truthCRevision: REV,
      nowIso: NOW,
    });
    const replayed = await view.view.getItems();
    expect(JSON.stringify(replayed)).not.toContain("sfia_grounding_refs_v1");
    session.close();
  });

  it("S01-F — session reopen still re-resolves prior refs", async () => {
    const projectId = "prj:mw4-f";
    setMw3AvailableEvidenceForTests({
      projectId,
      evidence: [
        catalogEvidence({
          evidenceId: "ev:persist",
          source: "src:p",
          projectId,
        }),
      ],
    });
    const dbPath = tempDb();

    const provider1 = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] turn1." }],
    });
    await runNoraCognitiveTurn({
      correlationId: "mw4-s01-f1",
      projectId,
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Remember evidence." },
      ],
      provider: provider1,
      enableTools: false,
      skipCognitiveStrategy: true,
      sessionDbPath: dbPath,
      truthCRevision: REV,
      groundingNowIso: NOW,
      resolveRememberedEvidence,
      contradictionAssessment: {
        conflict: {
          conflictPresent: true,
          evidencePointers: [
            {
              evidenceId: "ev:persist",
              sourceId: "src:p",
              domain: projectId,
              freshness: "fresh",
              attributable: true,
            },
          ],
          trustedSfiaProfile: null,
        },
      },
    });

    // Reopen: new process-equivalent — only sqlite path shared.
    const provider2 = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] turn2 reopen." }],
    });
    const turn2 = await runNoraCognitiveTurn({
      correlationId: "mw4-s01-f2",
      projectId,
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Reopen session." },
      ],
      provider: provider2,
      enableTools: false,
      skipCognitiveStrategy: true,
      sessionDbPath: dbPath,
      truthCRevision: REV,
      resolveRememberedEvidence,
    });

    expect(turn2.mw4Grounding?.rememberedIds).toContain("ev:persist");
    expect(turn2.mw4Grounding?.validIds).toContain("ev:persist");
    expect(turn2.mw4Grounding?.disclosure).toMatch(/ZERO authority until re-resolved/);
  });
});
```

### `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.s02.recovery.narrative.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * MW4-S02 — Post-Evidence / Recovery narrative honesty D0.
 * Fake only — ZERO LIVE OpenAI.
 */
import { describe, expect, it } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import {
  POST_EVIDENCE_NARRATIVE_POLICY,
  buildPostEvidenceNarrativePolicyDisclosure,
  decideCognitiveStop,
  disposeContradiction,
  runNoraCognitiveTurn,
} from "@/lib/nora-cognitive-runtime";
import { MW4_POST_EVIDENCE_NARRATIVE_LABELS } from "@/features/project-assistant/presentationLabels";

describe("MW4-S02 — recovery narrative honesty D0", () => {
  it("policy disclosure states Evidence Studio-owned + interpret≠replace", () => {
    const disclosure = buildPostEvidenceNarrativePolicyDisclosure();
    expect(disclosure).toMatch(/Evidence objects are Studio-owned/);
    expect(disclosure).toMatch(/Interpret ≠ replace/);
    expect(disclosure).toMatch(/Progress ≠ SUCCESS/);
    expect(disclosure).toMatch(/RecoveryRecommendation ≠ HumanDecision/);
    expect(disclosure).toMatch(/RecoveryRecommendation ≠ Confirmation/);
    expect(disclosure).toMatch(/RecoveryRecommendation ≠ GO Morris/);
    expect(disclosure).toMatch(/Cognitive STOP remains intact/);
    expect(POST_EVIDENCE_NARRATIVE_POLICY.recoveryIsRecommendationOnly).toBe(
      true,
    );
  });

  it("presentation labels stay non-authoritative", () => {
    expect(MW4_POST_EVIDENCE_NARRATIVE_LABELS.notHumanDecision).toMatch(
      /HumanDecision/,
    );
    expect(MW4_POST_EVIDENCE_NARRATIVE_LABELS.progressNotSuccess).toMatch(
      /SUCCESS/,
    );
  });

  it("cognitive turn accepts post-evidence narrative policy flag", async () => {
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] post-evidence." }],
    });
    const turn = await runNoraCognitiveTurn({
      correlationId: "mw4-s02-policy",
      projectId: "prj:mw4-s02",
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Post-evidence recovery narrative." },
      ],
      provider,
      enableTools: false,
      skipCognitiveStrategy: true,
      simulateMemoryBUnavailable: true,
      postEvidenceNarrativePolicy: true,
    });
    expect(turn.text).toMatch(/TEST\/FAKE/);
    expect(POST_EVIDENCE_NARRATIVE_POLICY.progressIsNotSuccess).toBe(true);
  });

  it("MW3 Cognitive STOP remains intact alongside MW4-S02 policy", () => {
    const disposition = disposeContradiction({
      conflictPresent: true,
      requiredSourceCount: 2,
      requiredDomains: ["governance"],
      evidencePointers: [
        {
          evidenceId: "ev:1",
          sourceId: "src:a",
          domain: "governance",
          freshness: "fresh",
          attributable: true,
        },
        {
          evidenceId: "ev:2",
          sourceId: "src:b",
          domain: "governance",
          freshness: "fresh",
          attributable: true,
        },
      ],
      trustedSfiaProfile: null,
    });
    const stop = decideCognitiveStop({
      disposition,
      governingPremiseInvalidated: true,
      governingPremise: "Must remain FinOps-frozen",
    });
    expect(stop.cognitiveStop).toBe(true);
    expect(stop.allowsSilentSuccess).toBe(false);
    expect(stop.outcome).toBe("COGNITIVE_STOP");
  });
});
```

### `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.cumulative.mw0-mw4.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * MW4 cumulative — Session + MW3 STOP + MW4 re-resolve (Fake, ZERO LIVE).
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import {
  runNoraCognitiveTurn,
} from "@/lib/nora-cognitive-runtime";
import {
  resolveRememberedEvidence,
  setMw3AvailableEvidenceForTests,
} from "@/features/project-assistant/mw3AvailableEvidence";
import type { Evidence } from "@/lib/oa/evidence-review/domain/types";
import { EVIDENCE_SCHEMA_VERSION } from "@/lib/oa/evidence-review/domain/types";
import { OA_SCHEMA_VERSION } from "@/lib/oa/doctrine/domain/types";

const tempDirs: string[] = [];
const NOW = "2026-09-03T10:00:00.000Z";
const REV = { lpsId: "lps:mw4-cum", lpsVersion: 1 };

function tempDb(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw4-cum-"));
  tempDirs.push(dir);
  return path.join(dir, "nora-session.sqlite");
}

function catalogEvidence(
  evidenceId: string,
  source: string,
  projectId: string,
): Evidence {
  return {
    schemaVersion: EVIDENCE_SCHEMA_VERSION,
    evidenceId,
    type: "artifact",
    source,
    sourceKind: "external",
    producedAt: NOW,
    freshness: "fresh",
    status: "available",
    classification: "internal",
    storageMode: "metadata_only",
    availability: "available",
    bindings: { projectId },
    containsSecrets: false,
    provenance: {
      schemaVersion: OA_SCHEMA_VERSION,
      provenanceRecordId: `prv:${evidenceId}`,
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      source: "system",
      timestamp: NOW,
      correlationId: `cor:${evidenceId}`,
    },
    version: 1,
    createdAt: NOW,
  };
}

afterEach(() => {
  setMw3AvailableEvidenceForTests(null);
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("MW4 cumulative — MW0–MW4 Session + STOP + re-resolve", () => {
  it("Session continuity + MW3 STOP + MW4 re-resolve stay coherent", async () => {
    const projectId = "prj:mw4-cum";
    const dbPath = tempDb();
    setMw3AvailableEvidenceForTests({
      projectId,
      evidence: [
        catalogEvidence("ev:1", "src:a", projectId),
        catalogEvidence("ev:2", "src:b", projectId),
      ],
    });

    const provider1 = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] cumulative T1." }],
    });
    const turn1 = await runNoraCognitiveTurn({
      correlationId: "mw4-cum-t1",
      projectId,
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Assess governing contradiction." },
      ],
      provider: provider1,
      enableTools: false,
      skipCognitiveStrategy: true,
      sessionDbPath: dbPath,
      truthCRevision: REV,
      groundingNowIso: NOW,
      resolveRememberedEvidence,
      postEvidenceNarrativePolicy: true,
      contradictionAssessment: {
        conflict: {
          conflictPresent: true,
          requiredSourceCount: 2,
          requiredDomains: [projectId],
          evidencePointers: [
            {
              evidenceId: "ev:1",
              sourceId: "src:a",
              domain: projectId,
              freshness: "fresh",
              attributable: true,
            },
            {
              evidenceId: "ev:2",
              sourceId: "src:b",
              domain: projectId,
              freshness: "fresh",
              attributable: true,
            },
          ],
          trustedSfiaProfile: null,
        },
        governingPremiseInvalidated: true,
        governingPremise: "Must remain FinOps-frozen",
      },
    });

    expect(turn1.contradictionDisposition?.disposition).toBe("evidence_backed");
    expect(turn1.cognitiveStopDecision?.cognitiveStop).toBe(true);
    expect(turn1.cognitiveStopDecision?.allowsSilentSuccess).toBe(false);
    expect(turn1.text).toMatch(/COGNITIVE STOP/);
    expect(turn1.memoryBAvailability).not.toBe("unavailable");

    const provider2 = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] cumulative T2." }],
    });
    const turn2 = await runNoraCognitiveTurn({
      correlationId: "mw4-cum-t2",
      projectId,
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Continue after STOP." },
      ],
      provider: provider2,
      enableTools: false,
      skipCognitiveStrategy: true,
      sessionDbPath: dbPath,
      truthCRevision: REV,
      resolveRememberedEvidence,
      postEvidenceNarrativePolicy: true,
      readCoverageFacts: [
        { pathOrRef: "docs/a.md", coverage: "full" },
        { pathOrRef: "docs/b.md", coverage: "partial", signals: ["truncated"] },
      ],
    });

    expect(turn2.mw4Grounding?.validIds.sort()).toEqual(["ev:1", "ev:2"]);
    expect(turn2.mw4Grounding?.disclosure).toMatch(/ZERO authority until re-resolved/);
    expect(turn2.mw4Grounding?.readCoverageOverall).toBe("partial");
    expect(turn2.mw4Grounding?.readCoverageDisclosure).toMatch(/partial/);
    // MW3 STOP not re-fired without assessment — progress may continue.
    expect(turn2.cognitiveStopDecision).toBeUndefined();
  });
});
```

### `projects/sfia-studio/app/__tests__/project-assistant/mw4.s01.evidence.reresolve.product.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * MW4-S01 — product path Evidence re-resolve (Fake + Fake Evidence catalog).
 * ZERO LIVE OpenAI. T3/T4/T5 two-Evidence continuity across turns.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { setMw3AvailableEvidenceForTests } from "@/features/project-assistant/mw3AvailableEvidence";
import type { Mw3ContradictionCandidateSignal } from "@/lib/nora-cognitive-runtime/deriveMw3Assessment";
import type { SemanticCognitiveWorkloadAssessment } from "@/features/project-assistant/f2/types";
import type { Evidence } from "@/lib/oa/evidence-review/domain/types";
import { EVIDENCE_SCHEMA_VERSION } from "@/lib/oa/evidence-review/domain/types";
import { OA_SCHEMA_VERSION } from "@/lib/oa/doctrine/domain/types";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

const tempDirs: string[] = [];

function mediumCwp(): SemanticCognitiveWorkloadAssessment {
  return {
    ambiguity: "medium",
    reasoningDepth: "high",
    sourceBreadth: "medium",
    toolDependency: "medium",
    contradictionRisk: "high",
    verificationNeed: "high",
  };
}

function intentJson(input: {
  cognitiveWorkload: SemanticCognitiveWorkloadAssessment;
  contradictionCandidate?: Mw3ContradictionCandidateSignal | null;
}): string {
  return JSON.stringify({
    intentClass: "informative",
    candidateCycleTypeId: null,
    signals: null,
    cognitiveWorkload: input.cognitiveWorkload,
    contradictionCandidate: input.contradictionCandidate ?? null,
    objective: "Analyse contradiction",
    scope: null,
    rephrasedRequest: "Évaluer le conflit annoncé",
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
  });
}

function catalogEvidence(input: {
  evidenceId: string;
  source: string;
  projectId: string;
  status?: Evidence["status"];
}): Evidence {
  return {
    schemaVersion: EVIDENCE_SCHEMA_VERSION,
    evidenceId: input.evidenceId,
    type: "artifact",
    source: input.source,
    sourceKind: "external",
    producedAt: "2026-09-03T12:00:00.000Z",
    freshness: "fresh",
    status: input.status ?? "available",
    classification: "internal",
    storageMode: "metadata_only",
    availability: "available",
    bindings: { projectId: input.projectId },
    containsSecrets: false,
    provenance: {
      schemaVersion: OA_SCHEMA_VERSION,
      provenanceRecordId: `prv:${input.evidenceId}`,
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      source: "system",
      timestamp: "2026-09-03T12:00:00.000Z",
      correlationId: `cor:${input.evidenceId}`,
    },
    version: 1,
    createdAt: "2026-09-03T12:00:00.000Z",
  };
}

describe("MW4-S01 — product Evidence re-resolve D0", () => {
  const prevReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
  const prevProvider = process.env.OPS1_CONVERSATION_PROVIDER;
  const prevKey = process.env.OPENAI_API_KEY;
  const prevModel = process.env.OPENAI_MODEL;

  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.OPENAI_MODEL = "gpt-5.6-luna";
    delete process.env.OPENAI_API_KEY;
    resetRuntimeApplicationServiceForTests();
    setConversationProviderForTests(null);
    setMw3AvailableEvidenceForTests(null);
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    setMw3AvailableEvidenceForTests(null);
    if (prevReset === undefined) delete process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
    else process.env.SFIA_V2_RUNTIME_ALLOW_RESET = prevReset;
    if (prevProvider === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = prevProvider;
    if (prevKey === undefined) delete process.env.OPENAI_API_KEY;
    else process.env.OPENAI_API_KEY = prevKey;
    if (prevModel === undefined) delete process.env.OPENAI_MODEL;
    else process.env.OPENAI_MODEL = prevModel;
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
  });

  async function createProject(): Promise<{
    projectId: string;
    sessionDbPath: string;
  }> {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw4-prod-"));
    tempDirs.push(dir);
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
    });
    const created = await runtime.createProject({
      name: "MW4 product grounding",
      objective: "Evidence re-resolve product path",
      context: "Deterministic Fake only",
      criticality: "STANDARD",
      constraints: ["LECTURE SEULE"],
      shortReference: "MW4P",
      idempotencyKey: `idem:mw4p-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("setup failed");
    return {
      projectId: created.projectId,
      sessionDbPath: path.join(dir, "nora-session.sqlite"),
    };
  }

  it("T3 — first turn with two Evidence IDs persists non-authoritative refs", async () => {
    const { projectId, sessionDbPath } = await createProject();
    setMw3AvailableEvidenceForTests({
      projectId,
      evidence: [
        catalogEvidence({ evidenceId: "ev:1", source: "src:a", projectId }),
        catalogEvidence({ evidenceId: "ev:2", source: "src:b", projectId }),
      ],
    });

    const provider = new FakeConversationProvider({
      scripted: [
        intentJson({
          cognitiveWorkload: mediumCwp(),
          contradictionCandidate: {
            conflictPresent: true,
            claimedEvidenceIds: ["ev:1", "ev:2"],
            governingPremise: "FinOps freeze must hold",
            governingPremiseInvalidated: true,
            localImpactOnly: false,
            fabricationAttempt: false,
          },
        }),
      ],
      toolScript: [
        {
          kind: "message",
          text: "[TEST/FAKE] Two-evidence assessment. AUCUNE EXÉCUTION.",
        },
      ],
    });
    setConversationProviderForTests(provider);

    const result = await orchestrateAssistantSend({
      projectId,
      content: "Évalue le conflit avec les deux Evidence.",
      sessionDbPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("T3 failed");
    expect(result.mw3?.disposition).toBe("evidence_backed");
    expect(result.mw3?.cognitiveStop).toBe(true);
    expect(result.status).toBe("cognitive_stop");
  });

  it("T4 — subsequent turn re-resolves prior two Evidence IDs", async () => {
    const { projectId, sessionDbPath } = await createProject();
    setMw3AvailableEvidenceForTests({
      projectId,
      evidence: [
        catalogEvidence({ evidenceId: "ev:1", source: "src:a", projectId }),
        catalogEvidence({ evidenceId: "ev:2", source: "src:b", projectId }),
      ],
    });

    const provider1 = new FakeConversationProvider({
      scripted: [
        intentJson({
          cognitiveWorkload: mediumCwp(),
          contradictionCandidate: {
            conflictPresent: true,
            claimedEvidenceIds: ["ev:1", "ev:2"],
            governingPremise: "FinOps freeze must hold",
            governingPremiseInvalidated: true,
            localImpactOnly: false,
            fabricationAttempt: false,
          },
        }),
      ],
      toolScript: [{ kind: "message", text: "[TEST/FAKE] T4 seed." }],
    });
    setConversationProviderForTests(provider1);
    const seed = await orchestrateAssistantSend({
      projectId,
      content: "Seed two Evidence.",
      sessionDbPath,
    });
    expect(seed.ok).toBe(true);

    const provider2 = new FakeConversationProvider({
      scripted: [
        intentJson({
          cognitiveWorkload: mediumCwp(),
          contradictionCandidate: null,
        }),
      ],
      toolScript: [{ kind: "message", text: "[TEST/FAKE] T4 follow-up." }],
    });
    setConversationProviderForTests(provider2);
    const follow = await orchestrateAssistantSend({
      projectId,
      content: "Continue with prior grounding.",
      sessionDbPath,
    });
    expect(follow.ok).toBe(true);
    if (!follow.ok) throw new Error("T4 failed");
    expect(follow.mw4?.rememberedIds.sort()).toEqual(["ev:1", "ev:2"]);
    expect(follow.mw4?.validIds.sort()).toEqual(["ev:1", "ev:2"]);
    expect(follow.mw4?.disclosure).toMatch(/ZERO authority until re-resolved/);
    expect(follow.mw4?.disclosure).toMatch(/Narrative text ≠ Evidence/);
  });

  it("T5 — withdrawn Evidence on later turn is downgraded, not attributed", async () => {
    const { projectId, sessionDbPath } = await createProject();
    setMw3AvailableEvidenceForTests({
      projectId,
      evidence: [
        catalogEvidence({ evidenceId: "ev:1", source: "src:a", projectId }),
        catalogEvidence({ evidenceId: "ev:2", source: "src:b", projectId }),
      ],
    });

    const provider1 = new FakeConversationProvider({
      scripted: [
        intentJson({
          cognitiveWorkload: mediumCwp(),
          contradictionCandidate: {
            conflictPresent: true,
            claimedEvidenceIds: ["ev:1", "ev:2"],
            governingPremise: "FinOps freeze must hold",
            governingPremiseInvalidated: true,
            localImpactOnly: false,
            fabricationAttempt: false,
          },
        }),
      ],
      toolScript: [{ kind: "message", text: "[TEST/FAKE] T5 seed." }],
    });
    setConversationProviderForTests(provider1);
    await orchestrateAssistantSend({
      projectId,
      content: "Seed.",
      sessionDbPath,
    });

    // Withdraw one Evidence before follow-up.
    setMw3AvailableEvidenceForTests({
      projectId,
      evidence: [
        catalogEvidence({ evidenceId: "ev:1", source: "src:a", projectId }),
        catalogEvidence({
          evidenceId: "ev:2",
          source: "src:b",
          projectId,
          status: "unavailable",
        }),
      ],
    });

    const provider2 = new FakeConversationProvider({
      scripted: [
        intentJson({
          cognitiveWorkload: mediumCwp(),
          contradictionCandidate: null,
        }),
      ],
      toolScript: [{ kind: "message", text: "[TEST/FAKE] T5 follow-up." }],
    });
    setConversationProviderForTests(provider2);
    const follow = await orchestrateAssistantSend({
      projectId,
      content: "Re-check grounding.",
      sessionDbPath,
    });
    expect(follow.ok).toBe(true);
    if (!follow.ok) throw new Error("T5 failed");
    expect(follow.mw4?.validIds).toEqual(["ev:1"]);
    expect(follow.mw4?.downgradedIds).toContain("ev:2");
    expect(follow.mw4?.disclosure).toMatch(/Withdrawn \/ downgraded/);
  });
});
```


---

## 13. Review Handoff publication (this cycle)

Mode: publish-in-cycle · L3 bounded · branch `sfia/review-handoff` · file `sfia-review-handoff/latest-chatgpt-review.md` only.

Prior tip preserved historically at `b49786ee…` / blob `d670976a…`.

After publish: return to delivery branch; project HEAD remains `deb34943…`; candidate remains uncommitted/unpushed.

---

## 14. Final verdict

**READY FOR CHATGPT CRITICAL MW4 CORR-01 RE-REVIEW**

STOP. Do not commit/push/PR project candidate. Do not LIVE OpenAI. Do not close MW4. Do not start MW5.

Next: ChatGPT CRITICAL CORR-MW4-01 re-review against product boundaries → if PASS, requalify whether/how bounded MW4 REAL → Morris decides next gate.
