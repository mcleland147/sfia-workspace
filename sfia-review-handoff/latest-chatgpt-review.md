# SFIA STUDIO — NORA MW4 DELIVERY CANDIDATE
# Grounding durability + Narrative / Evidence coherence

**Timestamp (Europe/Paris):** 2026-09-03 07:28:04 CEST
**Timestamp (UTC):** 2026-09-03T05:28:04Z
**Cycle:** Cycle 8 — Delivery / Implementation
**Typology:** INC
**Profile:** CRITICAL
**Capability:** MW4 — Grounding durability + Narrative/Evidence coherence
**Stories:** MW4-S01 · MW4-S02 · MW4-S03

**Final candidate verdict:** READY FOR CHATGPT CRITICAL MW4 DELIVERY REVIEW

---

## 1. Purpose

Local MW4 Delivery candidate implementing ADAPT-first:
- cross-turn grounding durability with Studio/OA Evidence re-resolution (S01);
- post-Evidence / Recovery narrative honesty (S02);
- multi-document read coverage with honest partiality (S03).

Authorized: local implementation + deterministic/EVAL/product-boundary tests + Review Pack + L3 handoff only.
Not authorized: LIVE OpenAI REAL · project commit/push/PR/merge · Roadmap/C5 truth-sync · architecture pivot · Cognitive Completion claim · runtime v3 adoption · production routing.

---

## 2. Local Git Truth Check

| Field | Value |
|---|---|
| Repository | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-workspace-nora-mw4-grounding` |
| Branch | `delivery/sfia-studio-nora-mw4-grounding-durability` |
| Starting / ending HEAD (no project commit) | `deb34943dd85472644c221243cd7c0fd5369614e` |
| origin/main | `deb34943dd85472644c221243cd7c0fd5369614e` (expected `deb34943dd85472644c221243cd7c0fd5369614e`) |
| Entry | PASS — clean WT created from origin/main; prior chat WT dirty left untouched; no silent absorption of pre-existing MW4 |
| Project commit | **NO** |
| Project push | **NO** |
| Project PR | **NO** |
| Merge | **NO** |

### git status (product-relevant)

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
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.cumulative.mw0-mw4.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.s01.grounding.durability.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.s02.recovery.narrative.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.s03.partiality.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-eval/mw4.grounding.eval.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/mw4.s01.evidence.reresolve.product.d0.test.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/groundingDurability.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/postEvidenceNarrativePolicy.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/readCoverage.ts
?? projects/sfia-studio/app/lib/nora-eval/mw4Observe.ts

```

### git diff --stat

```
 .../project-assistant/collectToolTelemetry.ts      |  50 ++++-
 .../features/project-assistant/f2/orchestrateF2.ts |   2 +
 .../f3/postEvidenceNoraAnalysis.ts                 |   5 +-
 .../project-assistant/mw3AvailableEvidence.ts      | 169 ++++++++++++++++-
 .../features/project-assistant/orchestrateTurn.ts  |  79 +++++++-
 .../project-assistant/presentationLabels.ts        |  16 ++
 .../app/features/project-assistant/types.ts        |  19 ++
 .../app/lib/nora-cognitive-runtime/index.ts        |  44 +++++
 .../nora-cognitive-runtime/memoryBCompaction.ts    |  23 ++-
 .../nora-cognitive-runtime/runNoraCognitiveTurn.ts | 202 ++++++++++++++++++++-
 .../app/lib/nora-cognitive-runtime/types.ts        |   3 +
 projects/sfia-studio/app/lib/nora-eval/catalog.ts  |  18 ++
 projects/sfia-studio/app/lib/nora-eval/d0Runner.ts |   3 +
 projects/sfia-studio/app/lib/nora-eval/index.ts    |   5 +
 projects/sfia-studio/app/lib/nora-eval/scorers.ts  |  57 ++++++
 projects/sfia-studio/app/lib/nora-eval/types.ts    |  12 +-
 16 files changed, 688 insertions(+), 19 deletions(-)

```

---

## 3. Git Review Index

| Item | Value |
|---|---|
| Base | origin/main @ deb34943… (MW3 closure PR #460) |
| Candidate branch | delivery/sfia-studio-nora-mw4-grounding-durability |
| Candidate state | **LOCAL / UNCOMMITTED** |
| Prior product | MW3 PR #459 MERGED · closure PR #460 MERGED |

---

## 4. Authoritative sources read

PROCESS: cycle template / v2.6 routing-operating-guardrails (as applicable)
STUDIO: Build Doctrine · Convergence Roadmap
PRODUCT: 01 cadrage
NORA: C1–C5 · MW0 readiness · OD-04 decision · trajectory 08 · MW2 readiness 09
V3: 33 epistemology · 35 artifact/evidence
IMPL seams: mw3AvailableEvidence · orchestrateTurn · orchestrateF2 · collectToolTelemetry · runNoraCognitiveTurn · runNoraAgentsTurn · productSqliteSession · memoryBCompaction · callModelInputFilter · types · nora-eval · oa/evidence-review (READ-ONLY)
TESTS: existing MW0–MW3 D0/EVAL patterns

---

## 5. Exact MW4 source-lock implemented

### MW4-S01 — Cross-turn grounding durability + narrative ≠ evidence
- Persist non-authoritative Evidence ID refs in existing `session_items` as `sfia_grounding_refs_v1` (no new table)
- Filter from Runner replay like compaction
- Re-resolve every turn via shared Studio/OA Evidence resolver (generalized from MW3)
- Fail closed: missing / wrong project / unavailable / rejected / superseded / non-attributable / fabricated narrative IDs
- Compaction honesty: marker survives; compacted narrative ≠ Evidence

### MW4-S02 — Post-Evidence / Recovery narrative honesty
- Typed `PostEvidenceNarrativePolicy` + Studio disclosure
- Evidence Studio-owned; interpret ≠ replace; progress ≠ SUCCESS; Recovery ≠ HD/Confirmation/GO
- MW3 Cognitive STOP intact

### MW4-S03 — Multi-document honest partiality
- Derive coverage from tool telemetry (full/partial/failed/denied/absent)
- Mixed → overall partial; disclosure refuses false corpus completeness

---

## 6. Architecture disposition (ADAPT-first preserved)

| Decision | Disposition |
|---|---|
| OD-04 Option C / Agents Runner / Product SQLite Session | KEEP |
| Memory B | KEEP non-authoritative continuity |
| Studio/OA Evidence | KEEP sole governed Evidence |
| Evidence resolve | REUSE/GENERALIZE MW3 `mw3AvailableEvidence` (`resolveEvidencePointers` + `resolveRememberedEvidence`) |
| Persistence | existing `session_items.item_json` typed marker only |
| New table / vector / Conversations / Compaction / Trace-as-Evidence / File Search / Web Search / MCP | **NOT ADOPTED** |
| Parallel grounding engine | **NOT CREATED** |

Lazy dynamic import of `@/lib/vertical-slice-runtime` inside Evidence lookup preserves jsdom unit-test importability of `orchestrateTurn` (fix after MW4 static import regression).

---

## 7. OpenAI fit disposition preserved

KEEP: Agents SDK Runner · Product SQLite Session · current reasoning/model-settings path
DEFER/NOT ADOPT: Responses Compaction · Conversations · Trace-as-Evidence · Hosted Web/File Search · MCP
LIVE OpenAI call count this cycle: **0**
package.json / package-lock: **UNCHANGED**

---

## 8. Files created

- `projects/sfia-studio/app/lib/nora-cognitive-runtime/groundingDurability.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/postEvidenceNarrativePolicy.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/readCoverage.ts`
- `projects/sfia-studio/app/lib/nora-eval/mw4Observe.ts`
- `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.s01.grounding.durability.d0.test.ts`
- `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.s02.recovery.narrative.d0.test.ts`
- `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.s03.partiality.d0.test.ts`
- `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.cumulative.mw0-mw4.d0.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/mw4.s01.evidence.reresolve.product.d0.test.ts`
- `projects/sfia-studio/app/__tests__/nora-eval/mw4.grounding.eval.test.ts`

## 9. Files modified

- `features/project-assistant/mw3AvailableEvidence.ts` (+ resolveEvidencePointers / resolveRememberedEvidence; lazy VSR import)
- `features/project-assistant/orchestrateTurn.ts`
- `features/project-assistant/f2/orchestrateF2.ts`
- `features/project-assistant/collectToolTelemetry.ts`
- `features/project-assistant/f3/postEvidenceNoraAnalysis.ts`
- `features/project-assistant/presentationLabels.ts`
- `features/project-assistant/types.ts`
- `lib/nora-cognitive-runtime/memoryBCompaction.ts`
- `lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts`
- `lib/nora-cognitive-runtime/types.ts`
- `lib/nora-cognitive-runtime/index.ts`
- `lib/nora-eval/catalog.ts` · `d0Runner.ts` · `scorers.ts` · `types.ts` · `index.ts`

---

## 10. Tests and exact results

| Gate | Result |
|---|---|
| MW4 targeted D0/EVAL/product (6 files + MW3 c01-c16 in combined run) | **PASS** (35 tests in MW4+c01 combined; MW4-only 22 earlier) |
| MW1 compaction unit | **21/21 PASS** |
| MW2 focused (cwp + corr04) | **PASS** |
| MW3 focused (disposition/wiring/eval/c01–c24/surface) | **PASS** |
| Cumulative MW0→MW4 D0 | **PASS** |
| importBoundaries | **PASS** |
| orchestrateTurn.test (jsdom) after lazy-import fix | **8/8 PASS** (was FAIL under static VSR import) |
| typecheck | **PASS** |
| lint | **PASS** |
| git diff --check | **PASS** |
| Full serial vitest (pre-fix) | 266 passed / 1 failed (orchestrateTurn server-only) / 14 skipped |
| Full serial vitest (post-fix) | **PASS — 267 files / 2481 tests · 14 skipped (FinOps postgres) · 0 failed** |

Fake/Real: Fake OpenAI provider + test Evidence catalog on **same** product orchestration; OA repository path exercised in MW3 C20–C24 style mapping tests. No LIVE OpenAI.

---

## 11. MW4 exit matrix

### MW4-S01
| Criterion | Status |
|---|---|
| cross-turn provenance | **PASS** |
| current Evidence re-resolution | **PASS** |
| missing/stale Evidence downgrade | **PASS** |
| Memory B narrative ≠ Evidence | **PASS** |
| compaction honesty | **PASS** |
| project isolation | **PASS** |

### MW4-S02
| Criterion | Status |
|---|---|
| Evidence interpreted not replaced | **PASS** |
| progress ≠ SUCCESS | **PASS** |
| RecoveryRecommendation ≠ HumanDecision | **PASS** |
| no invented GO/HD/Confirmation | **PASS** |

### MW4-S03
| Criterion | Status |
|---|---|
| partial ranges recognized | **PASS** |
| multi-doc mixed coverage | **PASS** |
| failed read fail-closed | **PASS** |
| no false corpus completeness | **PASS** |

### CUMULATIVE
MW0×MW1×MW2×MW3×MW4 deterministic integrated chain: **PASS**

---

## 12. Scope compliance

- WRITE allowlist respected
- No package.json / lock / migrations / CI / Roadmap / C5 / doctrine / OA ownership changes
- No new SQLite CREATE TABLE
- No parallel Evidence store

---

## 13. Reserves / debt

- MW2-R01 / MW2-R02 / MW2-R03 **CARRIED**
- RA-06 **OPEN NON_BLOCKING** (MW4-S03 addresses honest partiality at proven D0/boundary scope; does not globally close RA-06)
- RA-07 **OPEN parity** (MW4-S01 proves cross-turn re-resolve durability at candidate scope; does **not** globally close RA-07)
- MW4 REAL OpenAI proof **NOT EXECUTED** — distinct later gate
- Cognitive Completion **NOT PROVEN**
- runtime v3 **NON ADOPTED**
- Production model routing **NOT SELECTED**

Temporary debt: none requiring new persistence. Exit = ChatGPT critical review → Morris next gate (possible bounded REAL requalification).

---

## 14. Decisions Morris still required

1. ChatGPT CRITICAL MW4 Delivery review of this candidate
2. Whether bounded MW4 REAL OpenAI proof is necessary/ready
3. Distinct GO for project Git integration / PR (not this cycle)
4. MW4 closure NOT authorized by this cycle
5. MW5 NOT authorized

---

## 15. Anti-claims

- MW4 NOT COMPLETE / NOT CLOSED
- NOT READY FOR REAL automatically
- Cognitive Completion NOT PROVEN
- runtime v3 NOT ADOPTED
- production routing NOT SELECTED
- RA-06 / RA-07 NOT globally closed
- no project commit/push/PR/merge performed
- LIVE OpenAI calls = 0
- Responses Compaction / Conversations / Trace-as-Evidence / hosted search / MCP NOT adopted

---

## 16. Explicit claims allowed

- MW4 DETERMINISTIC / EVAL / PRODUCT-BOUNDARY **CANDIDATE PROVEN** at source-locked S01/S02/S03 scope
- Local candidate ready for ChatGPT critical review
- Architecture ADAPT-first preserved; no parallel persistence

---

## 17. Complete modified content

### 17.a Modified-file unified diff

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/collectToolTelemetry.ts b/projects/sfia-studio/app/features/project-assistant/collectToolTelemetry.ts
index 8fbfcefa..8915ffcd 100644
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
@@ -21,14 +27,17 @@ function mapStatus(

 /**
  * Collect tool events + source refs from platform EventSink emissions.
+ * MW4-S03 — also derives read coverage / partiality facts.
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
@@ -40,7 +49,8 @@ export function collectToolTelemetry(events: TechnicalEvent[]): {
     }

     const detail = event.detail;
-    const toolName = asString(detail.toolName) ?? asString(detail.name) ?? "unknown";
+    const toolName =
+      asString(detail.toolName) ?? asString(detail.name) ?? "unknown";
     const status = mapStatus(detail.status, event.type);
     const source = detail.source as
       | { kind?: string; label?: string; pathOrRef?: string | null }
@@ -51,6 +61,15 @@ export function collectToolTelemetry(events: TechnicalEvent[]): {
       asString(detail.path);
     const summary = asString(detail.summary) ?? asString(detail.message);
     const errorCode = asString(detail.errorCode);
+    const detailText = [
+      summary,
+      asString(detail.message),
+      typeof detail.truncated === "boolean" && detail.truncated ? "truncated" : null,
+      typeof detail.hasMore === "boolean" && detail.hasMore ? "hasMore" : null,
+      typeof detail.offset === "number" ? `offset=${detail.offset}` : null,
+    ]
+      .filter(Boolean)
+      .join(" ");

     toolEvents.push({
       toolName,
@@ -61,6 +80,28 @@ export function collectToolTelemetry(events: TechnicalEvent[]): {
       readOnly: true,
     });

+    const fact = deriveReadCoverageFromToolEvent({
+      toolName,
+      status,
+      pathOrRef,
+      summary,
+      detailText,
+    });
+    if (fact) {
+      // Prefer worst coverage when the same path appears multiple times.
+      const prior = coverageByPath.get(fact.pathOrRef);
+      const rank: Record<ReadCoverageFact["coverage"], number> = {
+        full: 0,
+        partial: 1,
+        denied: 2,
+        failed: 3,
+        absent: 4,
+      };
+      if (!prior || rank[fact.coverage] >= rank[prior.coverage]) {
+        coverageByPath.set(fact.pathOrRef, fact);
+      }
+    }
+
     if (
       event.type === "TOOL_SUCCEEDED" &&
       source &&
@@ -79,5 +120,10 @@ export function collectToolTelemetry(events: TechnicalEvent[]): {
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
index 8eae538f..7ddeb53c 100644
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
@@ -52,26 +61,165 @@ export function mapOaEvidenceForProject(
   };
 }

-export async function resolveAvailableContradictionPointers(input: {
+export type EvidencePointerLookupResult = {
+  evidenceId: string;
+  pointer: ContradictionEvidencePointer | null;
+  /** Present when Evidence row existed but was not project-attributable. */
+  rawStatus?: Evidence["status"];
+  projectMismatch?: boolean;
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
     const evidence = await lookupEvidenceRecord(evidenceId, projectId);
-    if (!evidence) continue;
+    if (!evidence) {
+      out.push({ evidenceId, pointer: null });
+      continue;
+    }
+    const bound = evidence.bindings?.projectId?.trim() ?? "";
+    if (!bound || bound !== projectId) {
+      out.push({
+        evidenceId,
+        pointer: null,
+        rawStatus: evidence.status,
+        projectMismatch: true,
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
@@ -86,10 +234,13 @@ async function lookupEvidenceRecord(
     if (fromTest) return fromTest;
   }

-  const oa = getRuntimeApplicationService().oa;
-  const repository = oa?.evidenceReviewServices?.repository;
-  if (!repository) return null;
   try {
+    const { getRuntimeApplicationService } = await import(
+      "@/lib/vertical-slice-runtime"
+    );
+    const oa = getRuntimeApplicationService().oa;
+    const repository = oa?.evidenceReviewServices?.repository;
+    if (!repository) return null;
     return (await repository.findById(evidenceId)) ?? null;
   } catch {
     return null;
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
index 9c932338..9a0b05a6 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -143,3 +143,47 @@ export {
   buildRunnerModelSettingsForEffort,
   type NoraRunnerModelSettings,
 } from "./reasoningModelSettings";
+export {
+  GROUNDING_REFS_TYPE,
+  acceptGroundingRefsForProject,
+  appendGroundingCognitiveDisclosure,
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
+  deriveReadCoverageFromToolEvent,
+  overallToGroundingCoverageKind,
+} from "./readCoverage";
+export type {
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
index 0edae820..01509252 100644
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
@@ -35,6 +36,26 @@ import {
   type ContradictionConflictInput,
 } from "./contradictionDisposition";
 import { decideCognitiveStop } from "./cognitiveStop";
+import {
+  acceptGroundingRefsForProject,
+  appendGroundingCognitiveDisclosure,
+  loadGroundingRefsFromSession,
+  rememberEvidenceIds,
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
+  overallToGroundingCoverageKind,
+  type ReadCoverageFact,
+} from "./readCoverage";
+import type { ProductSqliteSession } from "./productSqliteSession";

 export type Mw3ContradictionAssessmentInput = {
   conflict: ContradictionConflictInput;
@@ -83,6 +104,20 @@ export type RunNoraCognitiveTurnInput = {
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
@@ -229,12 +264,111 @@ function finalizeTurn(
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
+  if (!input.session) return empty;
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
+  const coverageAggregate = aggregateReadCoverage(input.readCoverageFacts ?? []);
+  const readCoverageDisclosure = buildReadCoverageDisclosure(coverageAggregate);
+  const surface = resolution
+    ? toMw4GroundingTurnSurface(resolution, {
+        readCoverageOverall: overallToGroundingCoverageKind(
+          coverageAggregate.overall,
+        ),
+        readCoverageDisclosure: readCoverageDisclosure || null,
+      })
+    : coverageAggregate.facts.length > 0
+      ? {
+          rememberedIds: [],
+          validIds: [],
+          downgradedIds: [],
+          missingIds: [],
+          disclosure: "",
+          readCoverageOverall: overallToGroundingCoverageKind(
+            coverageAggregate.overall,
+          ),
+          readCoverageDisclosure: readCoverageDisclosure || null,
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
@@ -261,10 +395,22 @@ export async function runNoraCognitiveTurn(
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
@@ -278,6 +424,20 @@ export async function runNoraCognitiveTurn(
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
@@ -286,6 +446,7 @@ export async function runNoraCognitiveTurn(
       },
       input,
       strategyDecision,
+      mw4,
     );
   }

@@ -328,6 +489,25 @@ export async function runNoraCognitiveTurn(
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
@@ -342,7 +522,7 @@ export async function runNoraCognitiveTurn(
       provider: input.provider,
       runnerModelSettings,
     });
-    return finalizeTurn(
+    const finalized = finalizeTurn(
       {
         ...turn,
         memoryBCompactionState: compactionState,
@@ -350,7 +530,23 @@ export async function runNoraCognitiveTurn(
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
index 0e0c3bb0..6e282e2f 100644
--- a/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
@@ -16,6 +16,7 @@ import { observeMw1S01FromRuntime } from "./mw1S01Observe";
 import { observeMw1S02FromRuntime } from "./mw1S02Observe";
 import { observeMw2S01FromRuntime } from "./mw2S01Observe";
 import { observeMw3FromRuntime } from "./mw3Observe";
+import { observeMw4FromRuntime } from "./mw4Observe";

 function nowIso(): string {
   return new Date().toISOString();
@@ -111,6 +112,8 @@ async function observationForScenario(
       return observeMw2S01FromRuntime();
     case "mw3.s01.disposition-matrix":
       return observeMw3FromRuntime();
+    case "mw4.s01.grounding-durability":
+      return observeMw4FromRuntime();
     default:
       return { productPath: "none" };
   }
diff --git a/projects/sfia-studio/app/lib/nora-eval/index.ts b/projects/sfia-studio/app/lib/nora-eval/index.ts
index 3a7b27f9..e0100298 100644
--- a/projects/sfia-studio/app/lib/nora-eval/index.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/index.ts
@@ -30,6 +30,11 @@ export {
   observationFromMw3Facts,
   type Mw3RuntimeFacts,
 } from "./mw3Observe";
+export {
+  observeMw4FromRuntime,
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

### 17.b New files (complete)

### NEW FILE: `projects/sfia-studio/app/lib/nora-cognitive-runtime/groundingDurability.ts`

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
  | "fabricated_without_resolver_hit";

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
};

export type Mw4GroundingTurnSurface = {
  rememberedIds: string[];
  validIds: string[];
  downgradedIds: string[];
  missingIds: string[];
  disclosure: string;
  readCoverageOverall?: "full" | "partial" | "failed" | "denied" | "absent" | "none";
  readCoverageDisclosure?: string | null;
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
  const iso = nowIso ?? new Date(0).toISOString();
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
  const iso = nowIso ?? new Date(0).toISOString();
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
  }

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
  return {
    rememberedIds: [...resolution.rememberedIds],
    validIds: resolution.valid.map((p) => p.evidenceId),
    downgradedIds: resolution.downgraded.map((d) => d.evidenceId),
    missingIds: resolution.missing.map((m) => m.evidenceId),
    disclosure: buildGroundingCognitiveDisclosure(resolution),
    readCoverageOverall: opts?.readCoverageOverall,
    readCoverageDisclosure: opts?.readCoverageDisclosure ?? null,
  };
}

```
### NEW FILE: `projects/sfia-studio/app/lib/nora-cognitive-runtime/postEvidenceNarrativePolicy.ts`

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
### NEW FILE: `projects/sfia-studio/app/lib/nora-cognitive-runtime/readCoverage.ts`

```typescript
/**
 * MW4-S03 — Multi-document read coverage with honest partiality.
 * Derived from tool telemetry facts — never invents corpus completeness.
 */

export type ReadCoverageKind =
  | "full"
  | "partial"
  | "failed"
  | "denied"
  | "absent";

export type ReadCoverageFact = {
  pathOrRef: string;
  coverage: ReadCoverageKind;
  /** Optional signals observed in summary/detail. */
  signals?: string[];
};

export type ReadCoverageAggregate = {
  facts: ReadCoverageFact[];
  overall: ReadCoverageKind | "none" | "mixed_partial";
};

const PARTIAL_SIGNAL =
  /\b(truncat(?:ed|ion)?|hasMore|partial|ranged|range|offset|limit|not\s+exhaustive|incomplete)\b/i;

/**
 * Infer coverage for a single tool event row.
 */
export function deriveReadCoverageFromToolEvent(input: {
  toolName: string;
  status: string;
  pathOrRef: string | null;
  summary?: string | null;
  detailText?: string | null;
}): ReadCoverageFact | null {
  const pathOrRef = (input.pathOrRef ?? "").trim();
  if (!pathOrRef) {
    // No path — still record absent only for explicit read tools.
    if (!/read|search|file|content/i.test(input.toolName)) return null;
    return {
      pathOrRef: `(unnamed:${input.toolName})`,
      coverage: "absent",
      signals: ["missing_pathOrRef"],
    };
  }

  const blob = `${input.summary ?? ""}\n${input.detailText ?? ""}`;
  const signals: string[] = [];

  if (input.status === "denied") {
    return { pathOrRef, coverage: "denied", signals: ["tool_denied"] };
  }
  if (input.status === "failed") {
    return { pathOrRef, coverage: "failed", signals: ["tool_failed"] };
  }
  if (input.status !== "succeeded") {
    return { pathOrRef, coverage: "absent", signals: [`status:${input.status}`] };
  }

  if (PARTIAL_SIGNAL.test(blob)) {
    const match = blob.match(PARTIAL_SIGNAL);
    if (match?.[0]) signals.push(match[0].toLowerCase());
    return { pathOrRef, coverage: "partial", signals };
  }

  return { pathOrRef, coverage: "full", signals };
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
  // Mixed → overall partial (honest: not full corpus).
  if (kinds.has("partial") || kinds.size > 1) {
    return { facts, overall: "mixed_partial" };
  }
  return { facts, overall: "partial" };
}

export function buildReadCoverageDisclosure(
  aggregate: ReadCoverageAggregate,
): string {
  if (aggregate.overall === "none" || aggregate.facts.length === 0) {
    return "";
  }

  const lines = [
    "=== READ COVERAGE / PARTIALITY (MW4-S03) ===",
    "Do not claim full corpus completeness unless every referenced path was fully read.",
    `Overall coverage: ${aggregate.overall === "mixed_partial" ? "partial (mixed)" : aggregate.overall}`,
  ];

  for (const fact of aggregate.facts) {
    const signal =
      fact.signals && fact.signals.length > 0
        ? ` [${fact.signals.join(", ")}]`
        : "";
    lines.push(`- ${fact.pathOrRef}: ${fact.coverage}${signal}`);
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

```
### NEW FILE: `projects/sfia-studio/app/lib/nora-eval/mw4Observe.ts`

```typescript
/**
 * MW4 — deterministic observations for nora-eval (MODELED + EVAL).
 */
import {
  buildGroundingCognitiveDisclosure,
  buildPostEvidenceNarrativePolicyDisclosure,
  buildReadCoverageDisclosure,
  aggregateReadCoverage,
  classifyRememberedEvidence,
  decideCognitiveStop,
  disposeContradiction,
} from "@/lib/nora-cognitive-runtime";
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
};

export function observationFromMw4Facts(
  facts: Mw4RuntimeFacts,
): DeterministicObservation {
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
    facts.mixedOverallPartial;

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
  };

  return observationFromMw4Facts(facts);
}

```
### NEW FILE: `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.s01.grounding.durability.d0.test.ts`

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
### NEW FILE: `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.s02.recovery.narrative.d0.test.ts`

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
### NEW FILE: `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.s03.partiality.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * MW4-S03 — Multi-doc honest partiality from tool telemetry D0.
 * ZERO LIVE OpenAI.
 */
import { describe, expect, it } from "vitest";
import {
  aggregateReadCoverage,
  buildReadCoverageDisclosure,
  deriveReadCoverageFromToolEvent,
} from "@/lib/nora-cognitive-runtime";
import { collectToolTelemetry } from "@/features/project-assistant/collectToolTelemetry";
import type { TechnicalEvent } from "@/lib/platform/observability/types";

function toolEvent(
  type: "TOOL_SUCCEEDED" | "TOOL_DENIED" | "TOOL_FAILED",
  detail: Record<string, unknown>,
): TechnicalEvent {
  return {
    type,
    correlationId: "mw4-s03",
    timestamp: "2026-09-03T12:00:00.000Z",
    detail,
  } as TechnicalEvent;
}

describe("MW4-S03 — read coverage partiality D0", () => {
  it("full read when succeeded without truncation signals", () => {
    const fact = deriveReadCoverageFromToolEvent({
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: "docs/a.md",
      summary: "Read complete file",
    });
    expect(fact?.coverage).toBe("full");
  });

  it("partial when truncated / hasMore / ranged signals present", () => {
    const truncated = deriveReadCoverageFromToolEvent({
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: "docs/b.md",
      summary: "content truncated at limit",
    });
    expect(truncated?.coverage).toBe("partial");

    const ranged = deriveReadCoverageFromToolEvent({
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: "docs/c.md",
      detailText: "hasMore=true offset=100",
    });
    expect(ranged?.coverage).toBe("partial");
  });

  it("failed / denied / absent statuses", () => {
    expect(
      deriveReadCoverageFromToolEvent({
        toolName: "git_local_read_file",
        status: "failed",
        pathOrRef: "docs/d.md",
      })?.coverage,
    ).toBe("failed");
    expect(
      deriveReadCoverageFromToolEvent({
        toolName: "git_local_read_file",
        status: "denied",
        pathOrRef: "docs/e.md",
      })?.coverage,
    ).toBe("denied");
  });

  it("mixed coverage aggregates to overall partial", () => {
    const agg = aggregateReadCoverage([
      { pathOrRef: "a.md", coverage: "full" },
      { pathOrRef: "b.md", coverage: "partial" },
      { pathOrRef: "c.md", coverage: "failed" },
    ]);
    expect(agg.overall).toBe("mixed_partial");
    const disclosure = buildReadCoverageDisclosure(agg);
    expect(disclosure).toMatch(/Overall coverage: partial \(mixed\)/);
    expect(disclosure).toMatch(/refuse false completeness/);
    expect(disclosure).toMatch(/a\.md: full/);
    expect(disclosure).toMatch(/b\.md: partial/);
    expect(disclosure).toMatch(/c\.md: failed/);
  });

  it("collectToolTelemetry derives coverage from EventSink events", () => {
    const { readCoverage } = collectToolTelemetry([
      toolEvent("TOOL_SUCCEEDED", {
        toolName: "git_local_read_file",
        pathOrRef: "README.md",
        summary: "ok",
        truncated: false,
        source: { kind: "git_local", label: "README", pathOrRef: "README.md" },
      }),
      toolEvent("TOOL_SUCCEEDED", {
        toolName: "git_local_read_file",
        pathOrRef: "LARGE.md",
        summary: "ranged read",
        truncated: true,
        hasMore: true,
        source: { kind: "git_local", label: "LARGE", pathOrRef: "LARGE.md" },
      }),
      toolEvent("TOOL_DENIED", {
        toolName: "git_local_read_file",
        pathOrRef: "secret.env",
        summary: "denied by path policy",
      }),
    ]);
    expect(readCoverage.facts.length).toBe(3);
    expect(readCoverage.overall).toBe("mixed_partial");
    const large = readCoverage.facts.find((f) => f.pathOrRef === "LARGE.md");
    expect(large?.coverage).toBe("partial");
    const denied = readCoverage.facts.find((f) => f.pathOrRef === "secret.env");
    expect(denied?.coverage).toBe("denied");
  });
});

```
### NEW FILE: `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw4.cumulative.mw0-mw4.d0.test.ts`

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
### NEW FILE: `projects/sfia-studio/app/__tests__/project-assistant/mw4.s01.evidence.reresolve.product.d0.test.ts`

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
### NEW FILE: `projects/sfia-studio/app/__tests__/nora-eval/mw4.grounding.eval.test.ts`

```typescript
/** @vitest-environment node */
/**
 * MW4 eval catalog scenario D0 — MODELED + EVAL.
 * Fake/deterministic only — ZERO REAL OpenAI.
 */
import { describe, expect, it } from "vitest";
import { getScenario } from "@/lib/nora-eval/catalog";
import { runD0Scenario } from "@/lib/nora-eval/d0Runner";
import { observeMw4FromRuntime } from "@/lib/nora-eval/mw4Observe";

describe("MW4 eval — grounding durability scenario", () => {
  it("catalog includes mw4.s01.grounding-durability", () => {
    const s = getScenario("mw4.s01.grounding-durability");
    expect(s).toBeDefined();
    expect(s?.storyIds).toEqual(["MW4-S01", "MW4-S02", "MW4-S03"]);
    expect(s?.hardInvariants).toContain("mw4_grounding_durability");
    expect(s?.hardInvariants).toContain("mw4_narrative_evidence_honesty");
    expect(s?.hardInvariants).toContain("mw4_read_partiality");
  });

  it("observeMw4FromRuntime passes MW4 facts", () => {
    const obs = observeMw4FromRuntime();
    expect(obs.mw4GroundingOk).toBe(true);
    expect(obs.observedObservableIds).toContain("obs.grounding.durability");
    expect(obs.observedObservableIds).toContain("obs.read.partiality");
  });

  it("D0 scenario run includes MW4 hard invariants PASS", async () => {
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


---

## 18. Final verdict

# READY FOR CHATGPT CRITICAL MW4 DELIVERY REVIEW

**Next gate:** ChatGPT reads this handoff → CRITICAL MW4 Delivery review → corrections if needed → requalify bounded REAL if appropriate → Morris decides next gate.

MW4 closure NOT authorized. MW5 NOT authorized. Project Git integration NOT authorized by this cycle.
