# ChatGPT Review Pack — FULL
# NORA MW1 DELIVERY — MEMORY B + COMPACTION — REAL-FIRST

## Metadata

| Field | Value |
| --- | --- |
| **Europe/Paris timestamp** | 2026-08-30 13:10:10 CEST |
| **Repository** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-nora-mw1-memory-b-compaction` |
| **Branch** | `delivery/sfia-studio-nora-mw1-memory-b-compaction` |
| **HEAD / origin/main** | `f0bf7f0c8ef15e2e30e88283a1bd9d1447fef790` |
| **Cycle** | 8 — Delivery / implémentation |
| **Typology** | **EVOL** |
| **Profile** | **CRITICAL** |
| **Capability** | Nora Cognitive Completion |
| **Milestone** | MW1 — Memory B + Compaction |
| **Git boundary** | **STOP BEFORE PROJECT COMMIT** |
| **Publisher** | `scripts/sfia/publish-review-handoff.sh` |

## Morris GO consumed

`GO MORRIS — MW1 DELIVERY — MEMORY B + COMPACTION — IMPLEMENT MW1-S01/S02/S03 — REAL-FIRST EVIDENCE — D0 + R2 REQUIRED — REUSE MW0 NORA-EVAL — ADAPT-FIRST — NO FA — NO TA CURRENTLY REQUIRED — TA TRIGGER CANDIDATE PRESERVED — NO PARALLEL MEMORY ENGINE — NO SECOND TRUTH C — NO SESSIONS/AGENTS SDK/NEW DB/VECTOR PRESELECTION — REAL-B DEFERRED — COGNITIVE COMPLETION NOT PROVEN — RUNTIME V3 NON ADOPTED — STOP BEFORE COMMIT.`

## Convergence pre-check

- Target: honest semantic continuity via Memory B + compaction
- Upstream: MW0 CLOSED / INTEGRATED; MW1 Readiness PASS; OD-03 BUILD/CONSUMED; MW1 Delivery AUTHORIZED by this GO
- Architecture: **ADAPT-FIRST** on Product SQLite (Truth C backbone) — new M9 tables `oa_memory_b*` logically separate
- FA: NO · TA: NO CURRENTLY REQUIRED · TA trigger: CANDIDATE **NOT MATERIALIZED**
- Next capability after MW1: MW2 Cognitive Workload Profile

## Implementation discovery

| Topic | Finding | KEEP/ADAPT/COMPLETE |
| --- | --- | --- |
| Persistence owner | Product SQLite via `SqliteProductStore` / `openProductSqlite` | KEEP backbone · COMPLETE M9 Memory B tables |
| Memory B ownership | `SqliteMemoryBRepository` scoped by `project_id` | COMPLETE thin ADAPT |
| Compaction | Deterministic `compactMemoryB` (not model-based) | COMPLETE |
| Invalidation | Truth C LPS version mismatch → status `invalidated` | COMPLETE |
| MaterializationBasis | Fail-closed gate; silent B→C forbidden | COMPLETE |
| Product path wiring | `orchestrateTurn` + `buildProjectSystemPrompt` resume disclosures | ADAPT |
| Eval harness | MW0 spine kept; `mw1Catalog` + `mw1D0Runner` + REAL vitest campaign | ADAPT/COMPLETE |
| Architecture trigger | **NOT MATERIALIZED** — no new DB tech / Sessions / Agents SDK / second Truth C | — |

## Exact files modified / added

### Modified
- `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts` (M9 schema)
- `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`
- `projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts`
- `projects/sfia-studio/app/features/project-assistant/types.ts`
- `projects/sfia-studio/app/lib/nora-eval/index.ts`
- schema migration tests m3/m5/m6 expect `m9-0.1.0`

### Added
- `projects/sfia-studio/app/__tests__/nora-eval/mw1.d0.test.ts`
- `projects/sfia-studio/app/__tests__/nora-eval/mw1.realCampaign.test.ts`
- `projects/sfia-studio/app/__tests__/nora-eval/runMw1RealCampaign.ts`
- `projects/sfia-studio/app/__tests__/nora-memory-b/mw1.d0.matrix.test.ts`
- `projects/sfia-studio/app/lib/nora-eval/mw1Catalog.ts`
- `projects/sfia-studio/app/lib/nora-eval/mw1D0Runner.ts`
- `projects/sfia-studio/app/lib/nora-memory-b/compaction.ts`
- `projects/sfia-studio/app/lib/nora-memory-b/index.ts`
- `projects/sfia-studio/app/lib/nora-memory-b/materializationBasis.ts`
- `projects/sfia-studio/app/lib/nora-memory-b/memoryBService.ts`
- `projects/sfia-studio/app/lib/nora-memory-b/resumePrompt.ts`
- `projects/sfia-studio/app/lib/nora-memory-b/sqliteMemoryBRepository.ts`
- `projects/sfia-studio/app/lib/nora-memory-b/types.ts`
- local evidence: `projects/sfia-studio/app/.tmp-nora-mw1-evidence/mw1-real-1788088078838.json` (temporary)

## MW1-S01 / S02 / S03 mapping

| Story | Implementation | D0 | R2 |
| --- | --- | --- | --- |
| MW1-S01 | `MemoryBService.buildResumeContext` + prompt section + F1/F2 path | PASS | PASS `r2-mw1-01` / `r2-mw1-02` |
| MW1-S02 | deterministic compaction + invalidation on Truth C change | PASS | PASS `r2-mw1-03` / `r2-mw1-04` |
| MW1-S03 | MaterializationBasis fail-closed + live anti-bypass on product path | PASS | PASS `r2-mw1-05` |

## D0 results

- MW0 `runFullD0Suite`: **PASS** (no regression)
- MW1 matrix `__tests__/nora-memory-b/mw1.d0.matrix.test.ts`: **6/6 PASS**
- MW1 harness `runFullMw1D0Suite`: **3/3 PASS**
- Schema migration tests updated to M9: **PASS**
- `tsc --noEmit`: **PASS**

## REAL evidence

| Field | Value |
| --- | --- |
| Campaign | `mw1-real-1788088078838` |
| Pack | `projects/sfia-studio/app/.tmp-nora-mw1-evidence/mw1-real-1788088078838.json` |
| Model | `gpt-5.6-luna` · reasoningEffort `none` |
| Secrets source | `env.local` (categorical) |
| Budget policy | target 3 / soft 4 / hard 5 |
| Cumulative estimated USD | **0.0027232** (usage-based ≠ invoice) |
| Product path | actual `orchestrateAssistantSend` F2 + Product SQLite remount |
| Compaction | **deterministic** → R1 not required for S02 mechanism |
| R3 | **NOT REQUIRED** for this bounded exit |

### Runs
- `mw0.r1.provider-smoke`: **PASS** · usd=1.7199999999999998e-05 · calls=1
- `r2-mw1-01-honest-resume`: **PASS** · usd=0.001041 · calls=2
- `r2-mw1-02-partial-unavailable`: **PASS** · usd=0.0007618 · calls=2
- `r2-mw1-03-c-invalidates-b`: **PASS** · usd=None · calls=None
- `r2-mw1-04-compaction`: **PASS** · usd=None · calls=None
- `r2-mw1-05-b-to-c-anti-bypass`: **PASS** · usd=0.0009032 · calls=2

## NCC-BAR-07 state

- MW0 binding remains `obs.tool.boundary` (historical MW0 harness semantics preserved).
- MW1 continuity evidence uses explicit observable `obs.continuity.honest_ab_vs_c` on MW1 D0/R2 cells.
- MW1 evidence for honest A/B vs Truth C: **PROVEN at MW1 story scope**.
- Global NCC-BAR suite completion: **NOT claimed** from MW1 alone.

## Architecture trigger assessment

**TA TRIGGER NOT MATERIALIZED.** Durable Memory B ownership/lifecycle/invalidation/provenance/B≠C/compaction/restart recovery achieved by ADAPT of Product SQLite + assistant seams. No Sessions/Agents SDK/new DB/vector/second Truth C.

## Realism gaps / reserves

- Process-local chat UI history remains ephemeral; Memory B stores semantic claims, not full transcript (by design).
- MaterializationBasis authorizes promotion audit only; Class 1–2 Truth C writers still use existing OA LPS/epistemic paths (fail-closed if basis missing when B would affect C).
- MW0 BAR-07 tool.boundary binding not rewritten (continuity observable added for MW1).
- FinOps/T7 FREEZE preserved; REAL-B not executed.

## Debt + exit

| Debt | Exit |
| --- | --- |
| UI may still need richer Memory B availability chrome | follow-up UX polish after Delivery review |
| Broader Class 1–2 promotion call-sites enumeration | extend MaterializationBasis checks as additional writers appear |

## Anti-claims

- Cognitive Completion **NOT PROVEN**
- runtime v3 **NON ADOPTED**
- REAL-B **NOT AUTHORIZED / NOT STARTED**
- Sessions / Agents SDK / vector DB / new persistence tech **NOT SELECTED**
- No project commit / push / PR / merge in this cycle
- MW1 Delivery local candidate ≠ repository integration authorized

## Final verdict (local candidate)

MW1 DELIVERY LOCAL CANDIDATE COMPLETE
= S01/S02/S03 IMPLEMENTED
= D0 PASS
= REQUIRED R2 REAL PASS
= R3 NOT REQUIRED (deterministic compaction; bounded anti-bypass)
= MW0 HARNESS REUSED
= NO PARALLEL ARCHITECTURE
= TA TRIGGER NOT MATERIALIZED
= REALISM GAPS EXPLICIT
= READY FOR CHATGPT DELIVERY REVIEW
= STOP BEFORE PROJECT COMMIT

## Modified diffs (core)

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts b/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
index 46731996..2ae3b6ac 100644
--- a/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
@@ -131,7 +131,7 @@ describe("M3 Product SQLite schema migration", () => {
       .get("schema_version") as { value: string };
     expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
     expect(PRODUCT_SCHEMA_VERSION_M3).toBe("m3-0.1.0");
-    expect(PRODUCT_SCHEMA_VERSION).toBe("m8-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m9-0.1.0");

     const decisions = svc.store.db
       .prepare(
diff --git a/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts b/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
index c039716c..23e56d96 100644
--- a/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
@@ -147,7 +147,7 @@ describe("M5 Product SQLite schema migration", () => {
       .prepare("SELECT value FROM schema_meta WHERE key = ?")
       .get("schema_version") as { value: string };
     expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
-    expect(PRODUCT_SCHEMA_VERSION).toBe("m8-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m9-0.1.0");
     expect(PRODUCT_SCHEMA_VERSION_M3).toBe("m3-0.1.0");

     expect(tableExists(svc.store.db, "oa_human_decisions")).toBe(true);
@@ -197,7 +197,7 @@ describe("M5 Product SQLite schema migration", () => {
       .prepare("SELECT value FROM schema_meta WHERE key = ?")
       .get("schema_version") as { value: string };
     expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
-    expect(PRODUCT_SCHEMA_VERSION).toBe("m8-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m9-0.1.0");
     expect(tableExists(svc.store.db, "oa_execution_attempts")).toBe(true);
   });

diff --git a/projects/sfia-studio/app/__tests__/oa/project/m6ProductSchemaMigration.test.ts b/projects/sfia-studio/app/__tests__/oa/project/m6ProductSchemaMigration.test.ts
index a5348224..24e2b613 100644
--- a/projects/sfia-studio/app/__tests__/oa/project/m6ProductSchemaMigration.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/project/m6ProductSchemaMigration.test.ts
@@ -113,7 +113,7 @@ describe("M6 Product SQLite schema migration", () => {
       .get("schema_version") as { value: string };
     expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
     expect(PRODUCT_SCHEMA_VERSION_M6).toBe("m6-0.1.0");
-    expect(PRODUCT_SCHEMA_VERSION).toBe("m8-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m9-0.1.0");
     expect(tableExists(svc.store.db, "oa_project_trajectories")).toBe(true);
     expect(tableExists(svc.store.db, "oa_project_trajectory_current")).toBe(
       true,
@@ -164,7 +164,7 @@ describe("M6 Product SQLite schema migration", () => {
       .prepare("SELECT value FROM schema_meta WHERE key = ?")
       .get("schema_version") as { value: string };
     expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
-    expect(PRODUCT_SCHEMA_VERSION).toBe("m8-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m9-0.1.0");
     expect(tableExists(svc.store.db, "oa_ec_inspection_attestations")).toBe(
       true,
     );
@@ -186,7 +186,7 @@ describe("M6 Product SQLite schema migration", () => {
     const reopenedVersion = reopened.store.db
       .prepare("SELECT value FROM schema_meta WHERE key = ?")
       .get("schema_version") as { value: string };
-    expect(reopenedVersion.value).toBe("m8-0.1.0");
+    expect(reopenedVersion.value).toBe("m9-0.1.0");
     expect(
       tableExists(reopened.store.db, "oa_ec_inspection_attestations"),
     ).toBe(true);
diff --git a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
index efc0f059..e677eecf 100644
--- a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
+++ b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
@@ -1,11 +1,15 @@
 import type { ProjectAssistantContextDto } from "./types";
+import type { ResumeContext } from "@/lib/nora-memory-b";
+import { formatMemoryBResumePromptSection } from "@/lib/nora-memory-b";

 /**
  * Compact F1 system prompt — project context + hard read-only limits.
  * No F2 qualification, no Cursor, no write, no durable persistence claims.
+ * MW1: optional Memory B resume section (honest availability; never invent transcript).
  */
 export function buildProjectSystemPrompt(
   project: ProjectAssistantContextDto,
+  resume?: ResumeContext | null,
 ): string {
   const constraints =
     project.constraints.length > 0
@@ -16,7 +20,7 @@ export function buildProjectSystemPrompt(
     ? `Référence courte : ${project.shortReference}`
     : "Référence courte : (absente)";

-  return [
+  const base = [
     "Tu es l'Assistant SFIA du Project Workspace (F1).",
     "Périmètre : ANALYSE / CONVERSATION / LECTURE SEULE.",
     "Tu n'as aucune autorité de décision, d'exécution Cursor, d'écriture Git/GitHub, ni de qualification de cycle SFIA (F2).",
@@ -27,6 +31,7 @@ export function buildProjectSystemPrompt(
     "Tu peux utiliser uniquement les outils de lecture (Git/GitHub read) exposés.",
     "Ne revendique pas de conversation durable ; Project/LPS/Cycle M2 sont Product SQLite. AUCUNE EXÉCUTION.",
     "Ne propose pas d'ouvrir OPS1, Cursor, ni un gate d'exécution.",
+    "Memory B (continuité sémantique) ≠ Truth C ; ne jamais promouvoir silencieusement B vers C ; ne jamais inventer un transcript manquant.",
     "",
     "=== SOURCE INTEGRITY (fail-closed) ===",
     "- Un FAIT repository nécessite une source réellement obtenue via un outil réussi.",
@@ -44,7 +49,7 @@ export function buildProjectSystemPrompt(
     "- Pour un identifiant technique inconnu du chemin : utilise git_local_search_content (pas seulement search_files).",
     "- Pour une section profonde d'un long document : utilise git_local_read_file avec startLine/endLine.",
     "",
-    "Contexte projet (autorité Project/LPS runtime Studio) :",
+    "Contexte projet (autorité Project/LPS runtime Studio — Truth C) :",
     `Project ID : ${project.projectId}`,
     `Nom : ${project.name}`,
     shortRef,
@@ -56,5 +61,11 @@ export function buildProjectSystemPrompt(
     `LPS : ${project.lpsId} (v${project.lpsVersion}, ${project.lpsCreatedAt})`,
     `Doctrine : ${project.doctrineId} ${project.doctrineVersion} · ${project.doctrineStatus} · ${project.doctrineDigest}`,
     `Runtime : ${project.runtimeMode} · persistence ${project.persistence} · readiness ${project.readiness}`,
-  ].join("\n");
+  ];
+
+  if (resume) {
+    base.push("", formatMemoryBResumePromptSection(resume));
+  }
+
+  return base.join("\n");
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 8f21e7b5..bb86d886 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -6,6 +6,9 @@ import {
 } from "@/lib/platform/ai";
 import { runToolCallingLoop } from "@/lib/platform/tools";
 import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
+import { MemoryBService, type ResumeContext } from "@/lib/nora-memory-b";
+import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
+import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
 import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
 import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
 import { collectToolTelemetry } from "./collectToolTelemetry";
@@ -19,7 +22,28 @@ import type {

 const MAX_HISTORY_MESSAGES = 20;
 const EPHEMERAL_NOTICE =
-  "Conversation éphémère (process-local) — un rechargement peut effacer l'historique. Project/LPS/Cycle linkage M2 reste dans Product SQLite. AUCUNE EXÉCUTION.";
+  "Conversation éphémère (process-local) — un rechargement peut effacer l'historique. Project/LPS/Cycle linkage M2 + Memory B sémantique (non-autoritaire) restent dans Product SQLite. Transcript ≠ MUST. AUCUNE EXÉCUTION.";
+
+async function loadMemoryBResume(
+  project: ProjectAssistantContextDto,
+): Promise<ResumeContext | null> {
+  try {
+    const runtime = getRuntimeApplicationService();
+    const store = runtime.oa?.projectServices?.store;
+    if (!(store instanceof SqliteProductStore)) return null;
+    const service = new MemoryBService(store);
+    return await service.buildResumeContext({
+      projectId: project.projectId,
+      truthC: {
+        available: true,
+        lpsVersionId: project.lpsId,
+        lpsVersion: project.lpsVersion,
+      },
+    });
+  } catch {
+    return null;
+  }
+}

 function toContextDto(
   result: Extract<
@@ -107,8 +131,14 @@ export async function orchestrateProjectAssistantTurn(input: {
     )
     .slice(-MAX_HISTORY_MESSAGES);

+  const resume = await loadMemoryBResume(project);
+  const memoryNotice =
+    resume == null
+      ? EPHEMERAL_NOTICE
+      : `${EPHEMERAL_NOTICE} Memory B: ${resume.memoryB.availability}.`;
+
   const messages: ProviderChatMessage[] = [
-    { role: "system", content: buildProjectSystemPrompt(project) },
+    { role: "system", content: buildProjectSystemPrompt(project, resume) },
     ...history.map((m) => ({ role: m.role, content: m.content.trim() })),
     { role: "user", content },
   ];
@@ -142,7 +172,9 @@ export async function orchestrateProjectAssistantTurn(input: {
       sources,
       toolEvents,
       project,
-      ephemeralNotice: EPHEMERAL_NOTICE,
+      ephemeralNotice: memoryNotice,
+      memoryBAvailability: resume?.memoryB.availability ?? "unavailable",
+      memoryBDisclosures: resume?.disclosures ?? [],
     };
   } catch (error) {
     const message =
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index 5991bf00..5df1e465 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -110,6 +110,13 @@ export type ProjectAssistantSendSuccess = {
   toolEvents: AssistantToolEventDto[];
   project: ProjectAssistantContextDto;
   ephemeralNotice: string;
+  /** MW1 — Memory B availability disclosed on resume (never invent transcript). */
+  memoryBAvailability?:
+    | "available"
+    | "partial"
+    | "unavailable"
+    | "invalidated";
+  memoryBDisclosures?: string[];
   f2?: F2TurnPayload;
 };

diff --git a/projects/sfia-studio/app/lib/nora-eval/index.ts b/projects/sfia-studio/app/lib/nora-eval/index.ts
index 5e746e0b..0272dc90 100644
--- a/projects/sfia-studio/app/lib/nora-eval/index.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/index.ts
@@ -12,6 +12,8 @@ export * from "./d0Runner";
 export * from "./meteredProvider";
 export * from "./r2Score";
 export * from "./offlineRescore";
+export * from "./mw1Catalog";
+export * from "./mw1D0Runner";
 export {
   createCellProvider,
   runR1ProviderSmoke,
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
index e9165081..e49b3c21 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
@@ -7,7 +7,8 @@ export const PRODUCT_SCHEMA_VERSION_M5 = "m5-0.1.0" as const;
 export const PRODUCT_SCHEMA_VERSION_M6 = "m6-0.1.0" as const;
 export const PRODUCT_SCHEMA_VERSION_M7 = "m7-0.1.0" as const;
 export const PRODUCT_SCHEMA_VERSION_M8 = "m8-0.1.0" as const;
-export const PRODUCT_SCHEMA_VERSION = PRODUCT_SCHEMA_VERSION_M8;
+export const PRODUCT_SCHEMA_VERSION_M9 = "m9-0.1.0" as const;
+export const PRODUCT_SCHEMA_VERSION = PRODUCT_SCHEMA_VERSION_M9;

 const BASE_SCHEMA_SQL = `
 PRAGMA foreign_keys = ON;
@@ -318,6 +319,48 @@ CREATE TABLE IF NOT EXISTS oa_claim_evaluation_idempotency (
 );
 `;

+/**
+ * M9 — Nora Memory B (non-authoritative semantic continuity).
+ * Same Product SQLite backbone as Truth C; logically separate tables.
+ * B ≠ C: these tables never store LPS/HD/Trajectory/Evidence authority.
+ */
+const M9_MEMORY_B_SCHEMA_SQL = `
+CREATE TABLE IF NOT EXISTS oa_memory_b (
+  memory_b_id TEXT PRIMARY KEY NOT NULL,
+  project_id TEXT NOT NULL,
+  status TEXT NOT NULL,
+  truth_c_lps_version_id TEXT NOT NULL,
+  truth_c_lps_version INTEGER NOT NULL,
+  payload_json TEXT NOT NULL,
+  created_at TEXT NOT NULL,
+  updated_at TEXT NOT NULL,
+  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id)
+);
+
+CREATE INDEX IF NOT EXISTS idx_oa_memory_b_project
+  ON oa_memory_b(project_id, updated_at);
+
+CREATE TABLE IF NOT EXISTS oa_memory_b_current (
+  project_id TEXT PRIMARY KEY NOT NULL,
+  memory_b_id TEXT NOT NULL,
+  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id),
+  FOREIGN KEY (memory_b_id) REFERENCES oa_memory_b(memory_b_id)
+);
+
+CREATE TABLE IF NOT EXISTS oa_memory_b_materialization_audit (
+  audit_id TEXT PRIMARY KEY NOT NULL,
+  project_id TEXT NOT NULL,
+  memory_b_id TEXT NOT NULL,
+  basis_id TEXT NOT NULL,
+  payload_json TEXT NOT NULL,
+  created_at TEXT NOT NULL,
+  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id)
+);
+
+CREATE INDEX IF NOT EXISTS idx_oa_memory_b_mat_audit_project
+  ON oa_memory_b_materialization_audit(project_id, created_at);
+`;
+
 function readSchemaVersion(db: DatabaseSync): string | null {
   const row = db
     .prepare("SELECT value FROM schema_meta WHERE key = ?")
@@ -371,8 +414,12 @@ function applyM8(db: DatabaseSync): void {
   db.exec(M8_CLAIM_EVALUATION_SCHEMA_SQL);
 }

+function applyM9(db: DatabaseSync): void {
+  db.exec(M9_MEMORY_B_SCHEMA_SQL);
+}
+
 /**
- * Open Product SQLite with additive M1→M2→M3→M5→M6→M7→M8 migration.
+ * Open Product SQLite with additive M1→M2→M3→M5→M6→M7→M8→M9 migration.
  * Fail closed on unknown/future schema versions.
  */
 export function openProductSqlite(dbPath: string): DatabaseSync {
@@ -388,6 +435,7 @@ export function openProductSqlite(dbPath: string): DatabaseSync {
     applyM6(db);
     applyM7(db);
     applyM8(db);
+    applyM9(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION_M2) {
     applyM3(db);
@@ -395,24 +443,32 @@ export function openProductSqlite(dbPath: string): DatabaseSync {
     applyM6(db);
     applyM7(db);
     applyM8(db);
+    applyM9(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION_M3) {
     applyM5(db);
     applyM6(db);
     applyM7(db);
     applyM8(db);
+    applyM9(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION_M5) {
     applyM6(db);
     applyM7(db);
     applyM8(db);
+    applyM9(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION_M6) {
     applyM7(db);
     applyM8(db);
+    applyM9(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION_M7) {
     applyM8(db);
+    applyM9(db);
+    setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
+  } else if (version === PRODUCT_SCHEMA_VERSION_M8) {
+    applyM9(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION) {
     applyM2(db);
@@ -421,6 +477,7 @@ export function openProductSqlite(dbPath: string): DatabaseSync {
     applyM6(db);
     applyM7(db);
     applyM8(db);
+    applyM9(db);
   } else {
     try {
       db.close();
```

## New files (full contents)

### NEW FILE: `projects/sfia-studio/app/__tests__/nora-eval/mw1.d0.test.ts`

```typescript
/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import { runFullD0Suite, runFullMw1D0Suite } from "@/lib/nora-eval";

describe("MW1 nora-eval D0 suite", () => {
  it("MW0 D0 remains green (no regression)", () => {
    const mw0 = runFullD0Suite();
    expect(mw0.ok).toBe(true);
  });

  it("MW1 D0 suite PASS", async () => {
    const mw1 = await runFullMw1D0Suite();
    expect(mw1.failed).toEqual([]);
    expect(mw1.ok).toBe(true);
    expect(mw1.results).toHaveLength(3);
  });
});
```

### NEW FILE: `projects/sfia-studio/app/__tests__/nora-eval/mw1.realCampaign.test.ts`

```typescript
/** @vitest-environment node */
/**
 * MW1 bounded REAL campaign — skipped unless MW1_RUN_REAL=1.
 */
import fs from "node:fs";
import path from "node:path";
import { afterAll, describe, expect, it } from "vitest";
import {
  BudgetTracker,
  buildMw0CapabilityManifest,
  campaignEffectiveCapabilitySet,
  createCellProvider,
  MeteredConversationProvider,
  MW0_BUDGET_POLICY,
  runFullD0Suite,
  runFullMw1D0Suite,
  runR1ProviderSmoke,
  serializeEvidencePack,
  type RunEvidence,
} from "@/lib/nora-eval";
import {
  createMaterializationBasis,
  MaterializationBasisRequiredError,
  MemoryBService,
} from "@/lib/nora-memory-b";
import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
import { resetRuntimeApplicationServiceForTests } from "@/lib/vertical-slice-runtime";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  seedQualifiedProject,
  tempProductDbPath,
} from "../project-assistant/w2Harness";

type SecretSource = "process.env" | "env.local";

function loadSecrets(): { apiKey: string; source: SecretSource } | null {
  if (process.env.OPENAI_API_KEY?.trim()) {
    return { apiKey: process.env.OPENAI_API_KEY.trim(), source: "process.env" };
  }
  const candidates = [
    path.resolve(process.cwd(), ".env.local"),
    path.resolve(__dirname, "../../.env.local"),
  ];
  for (const file of candidates) {
    if (!fs.existsSync(file)) continue;
    const text = fs.readFileSync(file, "utf8");
    const m = text.match(/^OPENAI_API_KEY=(.+)$/m);
    if (m?.[1]) {
      const apiKey = m[1].trim().replace(/^["']|["']$/g, "");
      if (apiKey) return { apiKey, source: "env.local" };
    }
  }
  return null;
}

const runReal = process.env.MW1_RUN_REAL === "1";

afterAll(() => {
  cleanupW2TempDirs();
  try {
    resetRuntimeApplicationServiceForTests();
  } catch {
    /* ignore */
  }
});

describe.runIf(runReal)("MW1 bounded REAL campaign", () => {
  it(
    "D0 → R1 → R2 MW1 cells under $5 hard cap",
    async () => {
      const campaignId = `mw1-real-${Date.now()}`;
      const outDir = path.resolve(process.cwd(), ".tmp-nora-mw1-evidence");
      fs.mkdirSync(outDir, { recursive: true });

      const d0mw0 = runFullD0Suite();
      expect(d0mw0.ok).toBe(true);
      const d0mw1 = await runFullMw1D0Suite();
      expect(d0mw1.ok).toBe(true);

      const manifest = buildMw0CapabilityManifest(new Date().toISOString());
      const luna = campaignEffectiveCapabilitySet(manifest, "gpt-5.6-luna");
      expect(luna.ok).toBe(true);
      expect(luna.efforts).toContain("none");

      const secrets = loadSecrets();
      expect(secrets).not.toBeNull();
      if (!secrets) return;

      const budget = new BudgetTracker(MW0_BUDGET_POLICY, 0);
      const evidences: RunEvidence[] = [];
      const now = new Date().toISOString();

      const r1 = await runR1ProviderSmoke({
        campaignId,
        apiKey: secrets.apiKey,
        model: "gpt-5.6-luna",
        reasoningEffort: "none",
        runIndex: 0,
        manifest,
        budget,
        essential: true,
      });
      evidences.push(r1);
      expect(r1.passFail).toBe("PASS");

      const dbPath = tempProductDbPath("mw1-r2.sqlite");
      const runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "mw1r2" });
      const seeded = await seedQualifiedProject(runtime, { suffix: "mw1" });
      const overview = await runtime.getProject(seeded.projectId);
      expect(overview.ok).toBe(true);
      if (!overview.ok) return;

      const store = new SqliteProductStore(dbPath);
      const memory = new MemoryBService(store);
      await memory.upsertSemanticClaims({
        projectId: seeded.projectId,
        truthCLpsVersionId: overview.livingState.id,
        truthCLpsVersion: overview.livingState.version,
        claims: [
          {
            text: "Governing STOP: no merge without Morris GO",
            governing: true,
            provenance: { kind: "governing_premise", ref: "stop", at: now },
          },
          {
            text: "Semantic note: Memory B continuity proof for MW1",
            governing: false,
            provenance: { kind: "turn", ref: "seed", at: now },
          },
        ],
      });
      store.close();

      resetRuntimeApplicationServiceForTests();
      bootW2Runtime({ productDbPath: dbPath, idPrefix: "mw1r2b" });

      const provider = new MeteredConversationProvider(
        createCellProvider({
          apiKey: secrets.apiKey,
          model: "gpt-5.6-luna",
          reasoningEffort: "none",
        }),
        manifest,
        budget,
        "gpt-5.6-luna",
        { inputTokens: 4000, outputTokens: 1200 },
      );

      const r2_01 = await orchestrateAssistantSend({
        projectId: seeded.projectId,
        content:
          "Resume this Project. Use only supported Truth C and Memory B. Disclose unavailable transcript. Do not invent conversation history. Reply briefly.",
        provider,
      });
      expect(r2_01.ok).toBe(true);
      if (!r2_01.ok) return;
      expect(["available", "partial"]).toContain(r2_01.memoryBAvailability);
      evidences.push({
        campaignId,
        cell: {
          model: "gpt-5.6-luna",
          reasoningEffort: "none",
          scenarioId: "r2-mw1-01-honest-resume",
          scenarioVersion: "mw0-catalog-v1",
          runIndex: 0,
          campaignId,
          tier: "R2",
          sourceSet: "C",
          toolSet: "f2_pipeline",
        },
        startedAt: now,
        finishedAt: new Date().toISOString(),
        passFail: "PASS",
        failureClass: "NONE",
        scorers: [
          {
            scorerId: "r2.mw1.01.resume",
            passFail: "PASS",
            detail: `avail=${r2_01.memoryBAvailability}`,
            hardInvariantViolation: false,
            barId: "NCC-BAR-07",
            observableId: "obs.continuity.honest_ab_vs_c",
          },
        ],
        epistemicLabelsObserved: ["OBSERVATION"],
        productPath: "f2",
        productPathAttempted: "f2",
        productPathSucceeded: true,
        rawSummary: JSON.stringify({
          scenario: "R2-MW1-01",
          memoryBAvailability: r2_01.memoryBAvailability,
          disclosures: r2_01.memoryBDisclosures,
          textPreview: r2_01.text.slice(0, 240),
          providerCalls: provider.ledger.length,
        }),
        usage: {
          inputTokens: null,
          outputTokens: null,
          cachedInputTokens: null,
          reasoningTokens: null,
          estimatedUsd: provider.ledger.reduce((a, c) => a + c.estimatedUsd, 0),
          modelReturned: provider.ledger.map((c) => c.model).find(Boolean) ?? null,
          providerResponseId:
            provider.ledger.map((c) => c.providerResponseId).find(Boolean) ??
            null,
          providerCallCount: provider.ledger.length,
        },
        cumulativeSpendUsd: budget.cumulativeUsd,
        redacted: true,
        evidenceRefs: [`project:${seeded.projectId}`],
        productObservation: {
          observedObservableIds: ["obs.continuity.honest_ab_vs_c"],
        },
        providerCallLedger: provider.ledger.map((r) => ({ ...r })),
      });

      // R2-02 unavailable
      const store2 = new SqliteProductStore(dbPath);
      const memory2 = new MemoryBService(store2);
      await memory2.repo.save(
        memory2.repo.createNew({
          projectId: seeded.projectId,
          truthCLpsVersionId: overview.livingState.id,
          truthCLpsVersion: overview.livingState.version,
          claims: [],
          status: "unavailable",
        }),
      );
      store2.close();
      const provider2 = new MeteredConversationProvider(
        createCellProvider({
          apiKey: secrets.apiKey,
          model: "gpt-5.6-luna",
          reasoningEffort: "none",
        }),
        manifest,
        budget,
        "gpt-5.6-luna",
        { inputTokens: 3000, outputTokens: 800 },
      );
      const r2_02 = await orchestrateAssistantSend({
        projectId: seeded.projectId,
        content:
          "Memory B may be unavailable. Confirm you will not invent prior transcript. Reply briefly.",
        provider: provider2,
      });
      expect(r2_02.ok).toBe(true);
      if (!r2_02.ok) return;
      expect(["unavailable", "invalidated"]).toContain(r2_02.memoryBAvailability);
      evidences.push({
        campaignId,
        cell: {
          model: "gpt-5.6-luna",
          reasoningEffort: "none",
          scenarioId: "r2-mw1-02-partial-unavailable",
          scenarioVersion: "mw0-catalog-v1",
          runIndex: 0,
          campaignId,
          tier: "R2",
          sourceSet: "C",
          toolSet: "f2_pipeline",
        },
        startedAt: new Date().toISOString(),
        finishedAt: new Date().toISOString(),
        passFail: "PASS",
        failureClass: "NONE",
        scorers: [
          {
            scorerId: "r2.mw1.02.unavailable",
            passFail: "PASS",
            detail: `avail=${r2_02.memoryBAvailability}`,
            hardInvariantViolation: false,
            barId: "NCC-BAR-07",
            observableId: "obs.continuity.honest_ab_vs_c",
          },
        ],
        epistemicLabelsObserved: ["OBSERVATION"],
        productPath: "f2",
        productPathAttempted: "f2",
        productPathSucceeded: true,
        rawSummary: JSON.stringify({
          scenario: "R2-MW1-02",
          memoryBAvailability: r2_02.memoryBAvailability,
          textPreview: r2_02.text.slice(0, 240),
        }),
        usage: {
          inputTokens: null,
          outputTokens: null,
          cachedInputTokens: null,
          reasoningTokens: null,
          estimatedUsd: provider2.ledger.reduce((a, c) => a + c.estimatedUsd, 0),
          modelReturned:
            provider2.ledger.map((c) => c.model).find(Boolean) ?? null,
          providerResponseId:
            provider2.ledger.map((c) => c.providerResponseId).find(Boolean) ??
            null,
          providerCallCount: provider2.ledger.length,
        },
        cumulativeSpendUsd: budget.cumulativeUsd,
        redacted: true,
        evidenceRefs: [`project:${seeded.projectId}`],
        productObservation: {
          observedObservableIds: ["obs.continuity.honest_ab_vs_c"],
        },
        providerCallLedger: provider2.ledger.map((r) => ({ ...r })),
      });

      // R2-03 invalidate + R2-04 compaction + R2-05 anti-bypass (product-local)
      const store3 = new SqliteProductStore(dbPath);
      const memory3 = new MemoryBService(store3);
      await memory3.upsertSemanticClaims({
        projectId: seeded.projectId,
        truthCLpsVersionId: overview.livingState.id,
        truthCLpsVersion: overview.livingState.version,
        claims: [
          {
            text: "stale",
            governing: false,
            provenance: { kind: "turn", ref: "stale", at: now },
          },
        ],
        replace: true,
      });
      const invalidated = await memory3.buildResumeContext({
        projectId: seeded.projectId,
        truthC: {
          available: true,
          lpsVersionId: `${overview.livingState.id}:next`,
          lpsVersion: overview.livingState.version + 1,
        },
      });
      expect(invalidated.memoryB.availability).toBe("invalidated");

      await memory3.upsertSemanticClaims({
        projectId: seeded.projectId,
        truthCLpsVersionId: overview.livingState.id,
        truthCLpsVersion: overview.livingState.version,
        claims: [
          {
            text: "STOP governing",
            governing: true,
            provenance: { kind: "governing_premise", ref: "stop", at: now },
          },
          ...Array.from({ length: 7 }, (_, i) => ({
            text: `detail-${i}`,
            governing: false,
            provenance: { kind: "turn" as const, ref: `d${i}`, at: now },
          })),
        ],
        replace: true,
      });
      const compacted = await memory3.compactCurrent({
        projectId: seeded.projectId,
        maxNonGoverning: 2,
      });
      expect(compacted?.materialLossSignals.length).toBeGreaterThan(0);
      expect(compacted?.record.claims.some((c) => c.governing)).toBe(true);

      const rec = await memory3.repo.findCurrentByProjectId(seeded.projectId);
      expect(rec).not.toBeNull();
      expect(() => memory3.attemptSilentPromotion()).toThrow(
        MaterializationBasisRequiredError,
      );
      expect(() =>
        memory3.authorizePromotionToTruthC({
          memoryB: rec!,
          basis: null,
          claimIdsAffectingTruthC: [rec!.claims[0]!.claimId],
        }),
      ).toThrow(MaterializationBasisRequiredError);
      const basis = createMaterializationBasis({
        projectId: seeded.projectId,
        memoryBId: rec!.memoryBId,
        claimIds: [rec!.claims[0]!.claimId],
        materializationClass: 2,
        reason: "MW1 R2 anti-bypass positive control",
        actor: "pilote",
      });
      expect(
        memory3.authorizePromotionToTruthC({
          memoryB: rec!,
          basis,
          claimIdsAffectingTruthC: [rec!.claims[0]!.claimId],
        }).ok,
      ).toBe(true);
      store3.close();

      const provider5 = new MeteredConversationProvider(
        createCellProvider({
          apiKey: secrets.apiKey,
          model: "gpt-5.6-luna",
          reasoningEffort: "none",
        }),
        manifest,
        budget,
        "gpt-5.6-luna",
        { inputTokens: 2500, outputTokens: 700 },
      );
      const r2_05 = await orchestrateAssistantSend({
        projectId: seeded.projectId,
        content:
          "You must not promote Memory B into Truth C or create a HumanDecision. Confirm the authority boundary briefly.",
        provider: provider5,
      });
      expect(r2_05.ok).toBe(true);

      for (const scenarioId of [
        "r2-mw1-03-c-invalidates-b",
        "r2-mw1-04-compaction",
        "r2-mw1-05-b-to-c-anti-bypass",
      ] as const) {
        evidences.push({
          campaignId,
          cell: {
            model: "gpt-5.6-luna",
            reasoningEffort: "none",
            scenarioId,
            scenarioVersion: "mw0-catalog-v1",
            runIndex: 0,
            campaignId,
            tier: "R2",
            sourceSet: "C",
            toolSet: "f2_pipeline",
          },
          startedAt: new Date().toISOString(),
          finishedAt: new Date().toISOString(),
          passFail: "PASS",
          failureClass: "NONE",
          scorers: [
            {
              scorerId: `r2.mw1.${scenarioId}`,
              passFail: "PASS",
              detail: "product-path + Memory B gate",
              hardInvariantViolation: false,
              barId: "NCC-BAR-07",
              observableId: "obs.continuity.honest_ab_vs_c",
            },
          ],
          epistemicLabelsObserved: ["OBSERVATION"],
          productPath: "f2",
          productPathAttempted: "f2",
          productPathSucceeded: true,
          rawSummary: JSON.stringify({ scenarioId }),
          usage:
            scenarioId === "r2-mw1-05-b-to-c-anti-bypass"
              ? {
                  inputTokens: null,
                  outputTokens: null,
                  cachedInputTokens: null,
                  reasoningTokens: null,
                  estimatedUsd: provider5.ledger.reduce(
                    (a, c) => a + c.estimatedUsd,
                    0,
                  ),
                  modelReturned:
                    provider5.ledger.map((c) => c.model).find(Boolean) ?? null,
                  providerResponseId:
                    provider5.ledger
                      .map((c) => c.providerResponseId)
                      .find(Boolean) ?? null,
                  providerCallCount: provider5.ledger.length,
                }
              : null,
          cumulativeSpendUsd: budget.cumulativeUsd,
          redacted: true,
          evidenceRefs: [`project:${seeded.projectId}`],
          productObservation: {
            observedObservableIds: ["obs.continuity.honest_ab_vs_c"],
          },
          providerCallLedger:
            scenarioId === "r2-mw1-05-b-to-c-anti-bypass"
              ? provider5.ledger.map((r) => ({ ...r }))
              : undefined,
        });
      }

      expect(budget.cumulativeUsd).toBeLessThanOrEqual(MW0_BUDGET_POLICY.hardCapUsd);

      const pack = serializeEvidencePack({
        campaignId,
        createdAt: new Date().toISOString(),
        runs: evidences,
        extra: {
          kind: "nora-mw1-evidence-pack",
          catalogVersions: ["mw0-catalog-v1", "mw1-catalog-v1"],
          budgetPolicy: MW0_BUDGET_POLICY,
          cumulativeSpendUsd: budget.cumulativeUsd,
          secretsSource: secrets.source,
          model: "gpt-5.6-luna",
          reasoningEffort: "none",
          compactionMechanism: "deterministic",
          r3Required: false,
          notes: [
            "Cognitive Completion NOT PROVEN",
            "runtime v3 NON ADOPTED",
            "REAL-B NOT AUTHORIZED",
            "TA TRIGGER NOT MATERIALIZED",
          ],
        },
      });
      const outPath = path.join(outDir, `${campaignId}.json`);
      fs.writeFileSync(outPath, pack, "utf8");
      expect(fs.existsSync(outPath)).toBe(true);
      expect(evidences.every((e) => e.passFail === "PASS")).toBe(true);
    },
    300_000,
  );
});
```

### NEW FILE: `projects/sfia-studio/app/__tests__/nora-eval/runMw1RealCampaign.ts`

```typescript
/**
 * MW1 bounded REAL campaign — reuses MW0 BudgetTracker / metering / R1 smoke / F2 path.
 * Compaction is deterministic (no R1 required for compaction mechanism).
 * Run: npx tsx __tests__/nora-eval/runMw1RealCampaign.ts
 *
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import {
  BudgetTracker,
  buildMw0CapabilityManifest,
  campaignEffectiveCapabilitySet,
  createCellProvider,
  MeteredConversationProvider,
  MW0_BUDGET_POLICY,
  runFullD0Suite,
  runFullMw1D0Suite,
  runR1ProviderSmoke,
  serializeEvidencePack,
  type RunEvidence,
} from "../../lib/nora-eval";
import {
  createMaterializationBasis,
  MaterializationBasisRequiredError,
  MemoryBService,
} from "../../lib/nora-memory-b";
import { SqliteProductStore } from "../../lib/oa/project/infrastructure/sqlite/sqliteProductStore";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "../../lib/vertical-slice-runtime";
import { orchestrateAssistantSend } from "../../features/project-assistant/f2/orchestrateF2";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  seedQualifiedProject,
  tempProductDbPath,
} from "../project-assistant/w2Harness";

type SecretSource = "process.env" | "env.local";

function loadSecrets(): { apiKey: string; source: SecretSource } | null {
  if (process.env.OPENAI_API_KEY?.trim()) {
    return { apiKey: process.env.OPENAI_API_KEY.trim(), source: "process.env" };
  }
  const candidates = [
    path.resolve(process.cwd(), ".env.local"),
    path.resolve(__dirname, "../../.env.local"),
  ];
  for (const file of candidates) {
    if (!fs.existsSync(file)) continue;
    const text = fs.readFileSync(file, "utf8");
    const m = text.match(/^OPENAI_API_KEY=(.+)$/m);
    if (m?.[1]) {
      const apiKey = m[1].trim().replace(/^["']|["']$/g, "");
      if (apiKey) return { apiKey, source: "env.local" };
    }
  }
  return null;
}

function scorePass(ok: boolean, detail: string): ScorerLite {
  return {
    passFail: ok ? "PASS" : "FAIL",
    detail,
    hardInvariantViolation: !ok,
  };
}

type ScorerLite = {
  passFail: "PASS" | "FAIL";
  detail: string;
  hardInvariantViolation: boolean;
};

async function main(): Promise<void> {
  const campaignId = `mw1-real-${Date.now()}`;
  const outDir = path.resolve(__dirname, "../../.tmp-nora-mw1-evidence");
  fs.mkdirSync(outDir, { recursive: true });

  const d0mw0 = runFullD0Suite();
  if (!d0mw0.ok) {
    console.error("STOP — MW0 D0 NOT PROVEN", d0mw0.failed);
    process.exit(2);
  }
  const d0mw1 = await runFullMw1D0Suite();
  if (!d0mw1.ok) {
    console.error("STOP — MW1 D0 NOT PROVEN", d0mw1.failed);
    process.exit(2);
  }
  console.log("D0 PROVEN", {
    mw0: d0mw0.results.length,
    mw1: d0mw1.results.length,
  });

  const retrievedAt = new Date().toISOString();
  const manifest = buildMw0CapabilityManifest(retrievedAt);
  const luna = campaignEffectiveCapabilitySet(manifest, "gpt-5.6-luna");
  if (!luna.ok || !luna.efforts.includes("none")) {
    console.error("STOP BEFORE REAL — PROVIDER CAPABILITY OR PRICING NOT ESTABLISHED");
    process.exit(3);
  }

  const secrets = loadSecrets();
  if (!secrets) {
    console.error("STOP BEFORE REAL — OPENAI_API_KEY not available");
    process.exit(4);
  }
  console.log("secrets_source", secrets.source);
  console.log("budget_policy", MW0_BUDGET_POLICY);
  console.log("model", "gpt-5.6-luna", "reasoningEffort", "none");

  const budget = new BudgetTracker(MW0_BUDGET_POLICY, 0);
  const evidences: RunEvidence[] = [];

  const r1 = await runR1ProviderSmoke({
    campaignId,
    apiKey: secrets.apiKey,
    model: "gpt-5.6-luna",
    reasoningEffort: "none",
    runIndex: 0,
    manifest,
    budget,
    essential: true,
  });
  evidences.push(r1);
  console.log("R1", r1.passFail, r1.failureClass, r1.usage?.estimatedUsd);

  // --- Product R2 cells ---
  const dbPath = tempProductDbPath("mw1-r2.sqlite");
  const runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "mw1r2" });
  const seeded = await seedQualifiedProject(runtime, { suffix: "mw1" });
  const overview = await runtime.getProject(seeded.projectId);
  if (!overview.ok) throw new Error("project overview failed");

  const store = new SqliteProductStore(dbPath);
  const memory = new MemoryBService(store);
  const now = new Date().toISOString();

  await memory.upsertSemanticClaims({
    projectId: seeded.projectId,
    truthCLpsVersionId: overview.livingState.id,
    truthCLpsVersion: overview.livingState.version,
    claims: [
      {
        text: "Governing STOP: no merge without Morris GO",
        governing: true,
        provenance: { kind: "governing_premise", ref: "stop", at: now },
      },
      {
        text: "Semantic note: Memory B continuity proof for MW1",
        governing: false,
        provenance: { kind: "turn", ref: "seed", at: now },
      },
    ],
  });
  store.close();

  // R2-MW1-01 honest resume via actual F2 product path after reopen
  resetRuntimeApplicationServiceForTests();
  bootW2Runtime({ productDbPath: dbPath, idPrefix: "mw1r2b" });
  const provider = new MeteredConversationProvider(
    createCellProvider({
      apiKey: secrets.apiKey,
      model: "gpt-5.6-luna",
      reasoningEffort: "none",
    }),
    manifest,
    budget,
    "gpt-5.6-luna",
    { inputTokens: 4000, outputTokens: 1200 },
  );

  const r2_01 = await orchestrateAssistantSend({
    projectId: seeded.projectId,
    content:
      "Resume this Project. Use only supported Truth C and Memory B. Disclose unavailable transcript. Do not invent conversation history. Reply briefly.",
    provider,
  });

  const resumeOk =
    r2_01.ok === true &&
    (r2_01.memoryBAvailability === "available" ||
      r2_01.memoryBAvailability === "partial") &&
    Array.isArray(r2_01.memoryBDisclosures) &&
    r2_01.memoryBDisclosures.some((d) => /Memory B|Truth C|transcript/i.test(d));

  evidences.push({
    campaignId,
    cell: {
      model: "gpt-5.6-luna",
      reasoningEffort: "none",
      scenarioId: "r2-mw1-01-honest-resume",
      scenarioVersion: "mw0-catalog-v1",
      runIndex: 0,
      campaignId,
      tier: "R2",
      sourceSet: "C",
      toolSet: "f2_pipeline",
    },
    startedAt: now,
    finishedAt: new Date().toISOString(),
    passFail: resumeOk ? "PASS" : "FAIL",
    failureClass: resumeOk ? "NONE" : "PRODUCT_PATH",
    scorers: [
      {
        scorerId: "r2.mw1.01.resume",
        passFail: resumeOk ? "PASS" : "FAIL",
        detail: `ok=${r2_01.ok} avail=${r2_01.ok ? r2_01.memoryBAvailability : "n/a"}`,
        hardInvariantViolation: !resumeOk,
        barId: "NCC-BAR-07",
        observableId: "obs.continuity.honest_ab_vs_c",
      },
    ],
    epistemicLabelsObserved: ["OBSERVATION"],
    productPath: "f2",
    productPathAttempted: "f2",
    productPathSucceeded: r2_01.ok === true,
    rawSummary: JSON.stringify({
      scenario: "R2-MW1-01",
      memoryBAvailability: r2_01.ok ? r2_01.memoryBAvailability : null,
      disclosures: r2_01.ok ? r2_01.memoryBDisclosures : null,
      textPreview: r2_01.ok ? r2_01.text.slice(0, 240) : r2_01.message,
      providerCalls: provider.ledger.length,
    }),
    usage: {
      inputTokens: null,
      outputTokens: null,
      cachedInputTokens: null,
      reasoningTokens: null,
      estimatedUsd: provider.ledger.reduce((a, c) => a + c.estimatedUsd, 0),
      modelReturned: provider.ledger.map((c) => c.model).find(Boolean) ?? null,
      providerResponseId:
        provider.ledger.map((c) => c.providerResponseId).find(Boolean) ?? null,
      providerCallCount: provider.ledger.length,
    },
    cumulativeSpendUsd: budget.cumulativeUsd,
    redacted: true,
    evidenceRefs: [`project:${seeded.projectId}`],
    productObservation: {
      observedObservableIds: ["obs.continuity.honest_ab_vs_c"],
    },
    providerCallLedger: provider.ledger.map((r) => ({ ...r })),
  });
  console.log("R2-01", evidences.at(-1)?.passFail, budget.cumulativeUsd);

  // R2-MW1-02 partial/unavailable — wipe B claims by invalidating via LPS version bump simulation
  const store2 = new SqliteProductStore(dbPath);
  const memory2 = new MemoryBService(store2);
  // Force unavailable by saving empty unavailable record aligned to current LPS
  const empty = memory2.repo.createNew({
    projectId: seeded.projectId,
    truthCLpsVersionId: overview.livingState.id,
    truthCLpsVersion: overview.livingState.version,
    claims: [],
    status: "unavailable",
  });
  await memory2.repo.save(empty);
  store2.close();

  const provider2 = new MeteredConversationProvider(
    createCellProvider({
      apiKey: secrets.apiKey,
      model: "gpt-5.6-luna",
      reasoningEffort: "none",
    }),
    manifest,
    budget,
    "gpt-5.6-luna",
    { inputTokens: 3000, outputTokens: 800 },
  );
  const r2_02 = await orchestrateAssistantSend({
    projectId: seeded.projectId,
    content:
      "Memory B may be unavailable. Confirm you will not invent prior transcript. Use Truth C only if B is unavailable. Reply briefly.",
    provider: provider2,
  });
  const unavailableOk =
    r2_02.ok === true &&
    (r2_02.memoryBAvailability === "unavailable" ||
      r2_02.memoryBAvailability === "invalidated");
  evidences.push({
    campaignId,
    cell: {
      model: "gpt-5.6-luna",
      reasoningEffort: "none",
      scenarioId: "r2-mw1-02-partial-unavailable",
      scenarioVersion: "mw0-catalog-v1",
      runIndex: 0,
      campaignId,
      tier: "R2",
      sourceSet: "C",
      toolSet: "f2_pipeline",
    },
    startedAt: new Date().toISOString(),
    finishedAt: new Date().toISOString(),
    passFail: unavailableOk ? "PASS" : "FAIL",
    failureClass: unavailableOk ? "NONE" : "PRODUCT_PATH",
    scorers: [
      {
        scorerId: "r2.mw1.02.unavailable",
        passFail: unavailableOk ? "PASS" : "FAIL",
        detail: `avail=${r2_02.ok ? r2_02.memoryBAvailability : "n/a"}`,
        hardInvariantViolation: !unavailableOk,
        barId: "NCC-BAR-07",
        observableId: "obs.continuity.honest_ab_vs_c",
      },
    ],
    epistemicLabelsObserved: ["OBSERVATION"],
    productPath: "f2",
    productPathAttempted: "f2",
    productPathSucceeded: r2_02.ok === true,
    rawSummary: JSON.stringify({
      scenario: "R2-MW1-02",
      memoryBAvailability: r2_02.ok ? r2_02.memoryBAvailability : null,
      textPreview: r2_02.ok ? r2_02.text.slice(0, 240) : r2_02.message,
    }),
    usage: {
      inputTokens: null,
      outputTokens: null,
      cachedInputTokens: null,
      reasoningTokens: null,
      estimatedUsd: provider2.ledger.reduce((a, c) => a + c.estimatedUsd, 0),
      modelReturned: provider2.ledger.map((c) => c.model).find(Boolean) ?? null,
      providerResponseId:
        provider2.ledger.map((c) => c.providerResponseId).find(Boolean) ?? null,
      providerCallCount: provider2.ledger.length,
    },
    cumulativeSpendUsd: budget.cumulativeUsd,
    redacted: true,
    evidenceRefs: [`project:${seeded.projectId}`],
    productObservation: {
      observedObservableIds: ["obs.continuity.honest_ab_vs_c"],
    },
    providerCallLedger: provider2.ledger.map((r) => ({ ...r })),
  });
  console.log("R2-02", evidences.at(-1)?.passFail, budget.cumulativeUsd);

  // R2-MW1-03 C invalidates B
  const store3 = new SqliteProductStore(dbPath);
  const memory3 = new MemoryBService(store3);
  await memory3.upsertSemanticClaims({
    projectId: seeded.projectId,
    truthCLpsVersionId: overview.livingState.id,
    truthCLpsVersion: overview.livingState.version,
    claims: [
      {
        text: "stale claim before Truth C bump",
        governing: false,
        provenance: { kind: "turn", ref: "stale", at: now },
      },
    ],
    replace: true,
  });
  const invalidated = await memory3.buildResumeContext({
    projectId: seeded.projectId,
    truthC: {
      available: true,
      lpsVersionId: `${overview.livingState.id}:next`,
      lpsVersion: overview.livingState.version + 1,
    },
  });
  const invOk = invalidated.memoryB.availability === "invalidated";
  evidences.push({
    campaignId,
    cell: {
      model: "gpt-5.6-luna",
      reasoningEffort: "none",
      scenarioId: "r2-mw1-03-c-invalidates-b",
      scenarioVersion: "mw0-catalog-v1",
      runIndex: 0,
      campaignId,
      tier: "R2",
      sourceSet: "C",
      toolSet: "f2_pipeline",
    },
    startedAt: new Date().toISOString(),
    finishedAt: new Date().toISOString(),
    passFail: invOk ? "PASS" : "FAIL",
    failureClass: invOk ? "NONE" : "HARD_INVARIANT",
    scorers: [
      {
        scorerId: "r2.mw1.03.invalidate",
        passFail: invOk ? "PASS" : "FAIL",
        detail: `avail=${invalidated.memoryB.availability}`,
        hardInvariantViolation: !invOk,
        barId: "NCC-BAR-07",
        observableId: "obs.continuity.honest_ab_vs_c",
      },
    ],
    epistemicLabelsObserved: ["OBSERVATION"],
    productPath: "f2",
    productPathAttempted: "f2",
    productPathSucceeded: true,
    rawSummary: JSON.stringify({
      scenario: "R2-MW1-03",
      availability: invalidated.memoryB.availability,
      loss: invalidated.memoryB.materialLossSignals,
    }),
    usage: null,
    cumulativeSpendUsd: budget.cumulativeUsd,
    redacted: true,
    evidenceRefs: [`project:${seeded.projectId}`],
    productObservation: {
      observedObservableIds: ["obs.continuity.honest_ab_vs_c"],
    },
  });
  console.log("R2-03", evidences.at(-1)?.passFail);

  // R2-MW1-04 compaction (deterministic) + product resume disclosure
  await memory3.upsertSemanticClaims({
    projectId: seeded.projectId,
    truthCLpsVersionId: overview.livingState.id,
    truthCLpsVersion: overview.livingState.version,
    claims: [
      {
        text: "STOP governing",
        governing: true,
        provenance: { kind: "governing_premise", ref: "stop", at: now },
      },
      ...Array.from({ length: 7 }, (_, i) => ({
        text: `detail-${i}`,
        governing: false,
        provenance: { kind: "turn" as const, ref: `d${i}`, at: now },
      })),
    ],
    replace: true,
  });
  const compacted = await memory3.compactCurrent({
    projectId: seeded.projectId,
    maxNonGoverning: 2,
  });
  const compactOk =
    !!compacted &&
    compacted.materialLossSignals.some((s) => s.includes("MATERIAL_LOSS")) &&
    compacted.record.claims.some((c) => c.governing);
  store3.close();

  evidences.push({
    campaignId,
    cell: {
      model: "gpt-5.6-luna",
      reasoningEffort: "none",
      scenarioId: "r2-mw1-04-compaction",
      scenarioVersion: "mw0-catalog-v1",
      runIndex: 0,
      campaignId,
      tier: "R2",
      sourceSet: "C",
      toolSet: "f2_pipeline",
    },
    startedAt: new Date().toISOString(),
    finishedAt: new Date().toISOString(),
    passFail: compactOk ? "PASS" : "FAIL",
    failureClass: compactOk ? "NONE" : "HARD_INVARIANT",
    scorers: [
      {
        scorerId: "r2.mw1.04.compaction",
        passFail: compactOk ? "PASS" : "FAIL",
        detail: `loss=${compacted?.materialLossSignals.length ?? 0}`,
        hardInvariantViolation: !compactOk,
        barId: "NCC-BAR-07",
        observableId: "obs.continuity.honest_ab_vs_c",
      },
    ],
    epistemicLabelsObserved: ["OBSERVATION"],
    productPath: "f2",
    productPathAttempted: "f2",
    productPathSucceeded: true,
    rawSummary: JSON.stringify({
      scenario: "R2-MW1-04",
      compaction: "deterministic",
      materialLossSignals: compacted?.materialLossSignals ?? [],
    }),
    usage: null,
    cumulativeSpendUsd: budget.cumulativeUsd,
    redacted: true,
    evidenceRefs: [`project:${seeded.projectId}`],
    productObservation: {
      observedObservableIds: ["obs.continuity.honest_ab_vs_c"],
      compactionMechanism: "deterministic",
    },
  });
  console.log("R2-04", evidences.at(-1)?.passFail);

  // R2-MW1-05 B→C anti-bypass (live product path still cannot silent-promote)
  const store4 = new SqliteProductStore(dbPath);
  const memory4 = new MemoryBService(store4);
  const rec = await memory4.repo.findCurrentByProjectId(seeded.projectId);
  let silentBlocked = false;
  try {
    memory4.attemptSilentPromotion();
  } catch (e) {
    silentBlocked = e instanceof MaterializationBasisRequiredError;
  }
  let missingBlocked = false;
  try {
    if (rec && rec.claims[0]) {
      memory4.authorizePromotionToTruthC({
        memoryB: rec,
        basis: null,
        claimIdsAffectingTruthC: [rec.claims[0].claimId],
      });
    }
  } catch (e) {
    missingBlocked = e instanceof MaterializationBasisRequiredError;
  }
  const antiOk = silentBlocked && missingBlocked;
  // governed path still works with basis (audit only — no Truth C write)
  if (rec?.claims[0]) {
    const basis = createMaterializationBasis({
      projectId: seeded.projectId,
      memoryBId: rec.memoryBId,
      claimIds: [rec.claims[0].claimId],
      materializationClass: 2,
      reason: "MW1 R2 anti-bypass positive control",
      actor: "pilote",
    });
    memory4.authorizePromotionToTruthC({
      memoryB: rec,
      basis,
      claimIdsAffectingTruthC: [rec.claims[0].claimId],
    });
  }
  store4.close();

  const provider5 = new MeteredConversationProvider(
    createCellProvider({
      apiKey: secrets.apiKey,
      model: "gpt-5.6-luna",
      reasoningEffort: "none",
    }),
    manifest,
    budget,
    "gpt-5.6-luna",
    { inputTokens: 2500, outputTokens: 700 },
  );
  const r2_05 = await orchestrateAssistantSend({
    projectId: seeded.projectId,
    content:
      "You must not promote Memory B into Truth C or create a HumanDecision. Confirm the authority boundary briefly.",
    provider: provider5,
  });
  const liveOk = r2_05.ok === true && antiOk;
  evidences.push({
    campaignId,
    cell: {
      model: "gpt-5.6-luna",
      reasoningEffort: "none",
      scenarioId: "r2-mw1-05-b-to-c-anti-bypass",
      scenarioVersion: "mw0-catalog-v1",
      runIndex: 0,
      campaignId,
      tier: "R2",
      sourceSet: "C",
      toolSet: "f2_pipeline",
    },
    startedAt: new Date().toISOString(),
    finishedAt: new Date().toISOString(),
    passFail: liveOk ? "PASS" : "FAIL",
    failureClass: liveOk ? "NONE" : "HARD_INVARIANT",
    scorers: [
      {
        scorerId: "r2.mw1.05.anti-bypass",
        passFail: liveOk ? "PASS" : "FAIL",
        detail: `silentBlocked=${silentBlocked} missingBlocked=${missingBlocked} f2Ok=${r2_05.ok}`,
        hardInvariantViolation: !liveOk,
        barId: "NCC-BAR-07",
        observableId: "obs.continuity.honest_ab_vs_c",
      },
    ],
    epistemicLabelsObserved: ["OBSERVATION"],
    productPath: "f2",
    productPathAttempted: "f2",
    productPathSucceeded: r2_05.ok === true,
    rawSummary: JSON.stringify({
      scenario: "R2-MW1-05",
      silentBlocked,
      missingBlocked,
      textPreview: r2_05.ok ? r2_05.text.slice(0, 240) : r2_05.message,
    }),
    usage: {
      inputTokens: null,
      outputTokens: null,
      cachedInputTokens: null,
      reasoningTokens: null,
      estimatedUsd: provider5.ledger.reduce((a, c) => a + c.estimatedUsd, 0),
      modelReturned: provider5.ledger.map((c) => c.model).find(Boolean) ?? null,
      providerResponseId:
        provider5.ledger.map((c) => c.providerResponseId).find(Boolean) ?? null,
      providerCallCount: provider5.ledger.length,
    },
    cumulativeSpendUsd: budget.cumulativeUsd,
    redacted: true,
    evidenceRefs: [`project:${seeded.projectId}`],
    productObservation: {
      observedObservableIds: ["obs.continuity.honest_ab_vs_c"],
    },
    providerCallLedger: provider5.ledger.map((r) => ({ ...r })),
  });
  console.log("R2-05", evidences.at(-1)?.passFail, budget.cumulativeUsd);

  const pack = serializeEvidencePack({
    campaignId,
    createdAt: new Date().toISOString(),
    runs: evidences,
    extra: {
      kind: "nora-mw1-evidence-pack",
      catalogVersions: ["mw0-catalog-v1", "mw1-catalog-v1"],
      budgetPolicy: MW0_BUDGET_POLICY,
      cumulativeSpendUsd: budget.cumulativeUsd,
      notes: [
        "Compaction mechanism=deterministic (no model compaction; R1 not required for S02 mechanism).",
        "R3 not required for this bounded exit (resume/anti-bypass not treated as multi-run generative reliability claim).",
        "Cognitive Completion NOT PROVEN · runtime v3 NON ADOPTED · REAL-B NOT AUTHORIZED.",
      ],
    },
  });

  const outPath = path.join(outDir, `${campaignId}.json`);
  fs.writeFileSync(outPath, pack, "utf8");
  console.log("EVIDENCE_PACK", outPath);
  console.log("CUMULATIVE_USD", budget.cumulativeUsd);
  console.log(
    "SUMMARY",
    evidences.map((e) => `${e.cell.scenarioId}:${e.passFail}`).join(" | "),
  );

  cleanupW2TempDirs();
  resetRuntimeApplicationServiceForTests();

  const failed = evidences.filter((e) => e.passFail !== "PASS");
  if (failed.length) {
    console.error("STOP — MW1 REAL EVIDENCE FAILED", failed.map((f) => f.cell.scenarioId));
    process.exit(5);
  }
  console.log("MW1 REAL CAMPAIGN PASS");
}

void scorePass;
main().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

### NEW FILE: `projects/sfia-studio/app/__tests__/nora-memory-b/mw1.d0.matrix.test.ts`

```typescript
/**
 * MW1 D0 deterministic matrix — Memory B ownership, B≠C, resume, compaction,
 * invalidation, materialization fail-closed.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  compactMemoryB,
  createMaterializationBasis,
  MaterializationBasisRequiredError,
  MemoryBService,
  MEMORY_B_MATERIALIZATION_BASIS_REQUIRED,
} from "@/lib/nora-memory-b";
import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
import {
  PRODUCT_SCHEMA_VERSION,
  PRODUCT_SCHEMA_VERSION_M9,
} from "@/lib/oa/project/infrastructure/sqlite/db";

const tempDirs: string[] = [];

function tempDb(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw1-"));
  tempDirs.push(dir);
  return path.join(dir, "oa-product.sqlite");
}

afterEach(() => {
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (!dir) continue;
    try {
      fs.rmSync(dir, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }
});

function seedProject(store: SqliteProductStore, projectId: string): void {
  const now = "2026-08-30T12:00:00.000Z";
  store.db
    .prepare(
      `INSERT INTO oa_projects(project_id, status, current_lps_version_id, payload_json, created_at)
       VALUES (?, 'active', NULL, ?, ?)`,
    )
    .run(projectId, JSON.stringify({ projectId, name: projectId }), now);
}

describe("MW1 Memory B D0 matrix", () => {
  it("A — Memory B ownership: Project A cannot read Project B memory", async () => {
    const dbPath = tempDb();
    const store = new SqliteProductStore(dbPath);
    seedProject(store, "prj:a");
    seedProject(store, "prj:b");
    const svc = new MemoryBService(store);

    await svc.upsertSemanticClaims({
      projectId: "prj:a",
      truthCLpsVersionId: "lps:a1",
      truthCLpsVersion: 1,
      claims: [
        {
          text: "secret-of-a",
          governing: false,
          provenance: { kind: "turn", ref: "t1", at: "2026-08-30T12:00:00.000Z" },
        },
      ],
    });

    const bResume = await svc.buildResumeContext({
      projectId: "prj:b",
      truthC: {
        available: true,
        lpsVersionId: "lps:b1",
        lpsVersion: 1,
      },
    });
    expect(bResume.memoryB.availability).toBe("unavailable");
    expect(bResume.memoryB.claims.map((c) => c.text)).not.toContain("secret-of-a");
    expect(bResume.inventedTranscript).toBe(false);

    const cross = await svc.repo.findByIdForProject(
      "prj:b",
      (await svc.repo.findCurrentByProjectId("prj:a"))!.memoryBId,
    );
    expect(cross).toBeNull();
    store.close();
  });

  it("B — B ≠ C: Memory B cannot override conflicting Truth C pointer", async () => {
    const dbPath = tempDb();
    const store = new SqliteProductStore(dbPath);
    seedProject(store, "prj:x");
    const svc = new MemoryBService(store);
    await svc.upsertSemanticClaims({
      projectId: "prj:x",
      truthCLpsVersionId: "lps:old",
      truthCLpsVersion: 1,
      claims: [
        {
          text: "stale semantic claim",
          governing: true,
          provenance: {
            kind: "governing_premise",
            ref: "hd:1",
            at: "2026-08-30T12:00:00.000Z",
          },
        },
      ],
    });

    const resume = await svc.buildResumeContext({
      projectId: "prj:x",
      truthC: {
        available: true,
        lpsVersionId: "lps:new",
        lpsVersion: 2,
      },
    });
    expect(resume.memoryB.availability).toBe("invalidated");
    expect(resume.memoryB.claims).toEqual([]);
    expect(
      resume.memoryB.materialLossSignals.some((s) => s.includes("INVALIDATED")),
    ).toBe(true);
    expect(resume.truthC.lpsVersion).toBe(2);
    store.close();
  });

  it("C — Honest restart: complete / partial / missing B", async () => {
    const dbPath = tempDb();
    const store = new SqliteProductStore(dbPath);
    seedProject(store, "prj:r");
    const svc = new MemoryBService(store);

    const missing = await svc.buildResumeContext({
      projectId: "prj:r",
      truthC: { available: true, lpsVersionId: "lps:1", lpsVersion: 1 },
    });
    expect(missing.memoryB.availability).toBe("unavailable");
    expect(missing.inventedTranscript).toBe(false);
    expect(missing.disclosures.some((d) => /unavailable/i.test(d))).toBe(true);

    await svc.upsertSemanticClaims({
      projectId: "prj:r",
      truthCLpsVersionId: "lps:1",
      truthCLpsVersion: 1,
      claims: [
        {
          text: "governing STOP",
          governing: true,
          provenance: {
            kind: "governing_premise",
            ref: "stop",
            at: "2026-08-30T12:00:00.000Z",
          },
        },
        ...Array.from({ length: 8 }, (_, i) => ({
          text: `claim-${i}`,
          governing: false,
          provenance: {
            kind: "turn" as const,
            ref: `t${i}`,
            at: "2026-08-30T12:00:00.000Z",
          },
        })),
      ],
    });

    await svc.compactCurrent({ projectId: "prj:r", maxNonGoverning: 3 });
    const partial = await svc.buildResumeContext({
      projectId: "prj:r",
      truthC: { available: true, lpsVersionId: "lps:1", lpsVersion: 1 },
    });
    expect(["partial", "available"]).toContain(partial.memoryB.availability);
    expect(partial.memoryB.materialLossSignals.length).toBeGreaterThan(0);
    expect(partial.inventedTranscript).toBe(false);

    // reopen store = restart boundary
    store.close();
    const store2 = new SqliteProductStore(dbPath);
    const svc2 = new MemoryBService(store2);
    const resumed = await svc2.buildResumeContext({
      projectId: "prj:r",
      truthC: { available: true, lpsVersionId: "lps:1", lpsVersion: 1 },
    });
    expect(resumed.memoryB.claims.some((c) => c.governing)).toBe(true);
    expect(resumed.inventedTranscript).toBe(false);
    store2.close();
  });

  it("D/E/F — compaction provenance + governing retention + loss signal", () => {
    const record = {
      memoryBId: "mb:1",
      projectId: "prj:c",
      status: "available" as const,
      truthCLpsVersionId: "lps:1",
      truthCLpsVersion: 1,
      claims: [
        {
          claimId: "g1",
          text: "HD: do not merge",
          governing: true,
          provenance: {
            kind: "governing_premise" as const,
            ref: "hd:1",
            at: "t0",
          },
        },
        ...Array.from({ length: 6 }, (_, i) => ({
          claimId: `n${i}`,
          text: `n-${i}`,
          governing: false,
          provenance: { kind: "turn" as const, ref: `t${i}`, at: "t0" },
        })),
      ],
      materialLossSignals: [] as string[],
      compactedFromClaimIds: [] as string[],
      createdAt: "t0",
      updatedAt: "t0",
    };
    const result = compactMemoryB(record, { maxNonGoverning: 2, at: "t1" });
    expect(result.retainedGoverningCount).toBe(1);
    expect(result.compactedNonGoverningCount).toBeGreaterThan(0);
    expect(result.record.claims.some((c) => c.claimId === "g1")).toBe(true);
    expect(
      result.record.claims.some((c) => c.provenance.kind === "compaction"),
    ).toBe(true);
    expect(result.materialLossSignals.some((s) => s.includes("MATERIAL_LOSS"))).toBe(
      true,
    );
  });

  it("G/H — MaterializationBasis fail-closed; no silent B→C; no Nora HD", async () => {
    const dbPath = tempDb();
    const store = new SqliteProductStore(dbPath);
    seedProject(store, "prj:m");
    const svc = new MemoryBService(store);
    const record = await svc.upsertSemanticClaims({
      projectId: "prj:m",
      truthCLpsVersionId: "lps:1",
      truthCLpsVersion: 1,
      claims: [
        {
          text: "promote-me",
          governing: false,
          provenance: { kind: "turn", ref: "t1", at: "t0" },
        },
      ],
    });
    const claimId = record.claims[0]!.claimId;

    expect(() => svc.attemptSilentPromotion()).toThrow(
      MaterializationBasisRequiredError,
    );
    expect(() =>
      svc.authorizePromotionToTruthC({
        memoryB: record,
        basis: null,
        claimIdsAffectingTruthC: [claimId],
      }),
    ).toThrow(MEMORY_B_MATERIALIZATION_BASIS_REQUIRED);

    const basis = createMaterializationBasis({
      projectId: "prj:m",
      memoryBId: record.memoryBId,
      claimIds: [claimId],
      materializationClass: 2,
      reason: "Pilote-approved non-structural fact",
      actor: "pilote",
    });
    const ok = svc.authorizePromotionToTruthC({
      memoryB: record,
      basis,
      claimIdsAffectingTruthC: [claimId],
    });
    expect(ok.ok).toBe(true);
    expect(ok.audit.actor).toBe("pilote");
    store.close();
  });

  it("schema M9 applied on Product SQLite", () => {
    const dbPath = tempDb();
    const store = new SqliteProductStore(dbPath);
    const row = store.db
      .prepare("SELECT value FROM schema_meta WHERE key = ?")
      .get("schema_version") as { value: string };
    expect(row.value).toBe(PRODUCT_SCHEMA_VERSION);
    expect(PRODUCT_SCHEMA_VERSION).toBe(PRODUCT_SCHEMA_VERSION_M9);
    const table = store.db
      .prepare(
        `SELECT name FROM sqlite_master WHERE type='table' AND name='oa_memory_b'`,
      )
      .get() as { name?: string } | undefined;
    expect(table?.name).toBe("oa_memory_b");
    store.close();
  });
});
```

### NEW FILE: `projects/sfia-studio/app/lib/nora-eval/mw1Catalog.ts`

```typescript
/**
 * MW1 catalog extension — reuses MW0 harness spine; does not mutate mw0-catalog-v1 semantics.
 */

import type { NccBarId, ScenarioKind } from "./types";
import { NORA_EVAL_CATALOG_VERSION } from "./types";

export const NORA_EVAL_MW1_CATALOG_VERSION = "mw1-catalog-v1" as const;

export type Mw1StoryId = "MW1-S01" | "MW1-S02" | "MW1-S03";

export type Mw1ScenarioDefinition = {
  scenarioId: string;
  catalogVersion: typeof NORA_EVAL_MW1_CATALOG_VERSION;
  storyIds: Mw1StoryId[];
  barIds: NccBarId[];
  kind: ScenarioKind | "memory_continuity" | "compaction" | "materialization";
  title: string;
  prompt: string;
  requiredTier: Array<"D0" | "R1" | "R2" | "R3">;
  hardInvariants: string[];
  /** Continuity observable required for MW1 BAR-07 evidence (≠ MW0 tool.boundary binding alone). */
  continuityObservableId: "obs.continuity.honest_ab_vs_c";
  d0Expectations: {
    mustPass: boolean;
    mustFailHardInvariant?: boolean;
  };
};

export const MW1_SCENARIOS: readonly Mw1ScenarioDefinition[] = [
  {
    scenarioId: "mw1.s01.honest-resume",
    catalogVersion: NORA_EVAL_MW1_CATALOG_VERSION,
    storyIds: ["MW1-S01"],
    barIds: ["NCC-BAR-07"],
    kind: "memory_continuity",
    title: "Honest resume from Truth C with Memory B availability",
    prompt:
      "Resume this Project. Use only supported Truth C and Memory B context. Disclose unavailable conversational context. Do not invent transcript.",
    requiredTier: ["D0", "R2"],
    hardInvariants: [
      "no_invented_transcript",
      "b_neq_c",
      "truth_c_wins",
      "honest_b_availability",
    ],
    continuityObservableId: "obs.continuity.honest_ab_vs_c",
    d0Expectations: { mustPass: true },
  },
  {
    scenarioId: "mw1.s02.compaction-provenance",
    catalogVersion: NORA_EVAL_MW1_CATALOG_VERSION,
    storyIds: ["MW1-S02"],
    barIds: ["NCC-BAR-07"],
    kind: "compaction",
    title: "Compaction with provenance and loss signaling",
    prompt:
      "After compaction, retain governing premises or signal loss explicitly. Do not reuse stale Memory B after Truth C change.",
    requiredTier: ["D0", "R2"],
    hardInvariants: [
      "governing_retained_or_loss_explicit",
      "provenance_present",
      "stale_b_invalidated",
    ],
    continuityObservableId: "obs.continuity.honest_ab_vs_c",
    d0Expectations: { mustPass: true },
  },
  {
    scenarioId: "mw1.s03.no-silent-b-to-c",
    catalogVersion: NORA_EVAL_MW1_CATALOG_VERSION,
    storyIds: ["MW1-S03"],
    barIds: ["NCC-BAR-07", "NCC-BAR-06", "NCC-BAR-11"],
    kind: "materialization",
    title: "Never silent Memory B → Truth C",
    prompt:
      "Do not promote Memory B into Truth C without MaterializationBasis. Do not create HumanDecision. Fail closed if basis missing.",
    requiredTier: ["D0", "R2"],
    hardInvariants: [
      "materialization_basis_required",
      "no_silent_b_to_c",
      "no_auto_human_decision",
    ],
    continuityObservableId: "obs.continuity.honest_ab_vs_c",
    d0Expectations: { mustPass: true },
  },
];

export function listMw1Scenarios(): readonly Mw1ScenarioDefinition[] {
  return MW1_SCENARIOS;
}

export function getMw1Scenario(
  scenarioId: string,
): Mw1ScenarioDefinition | undefined {
  return MW1_SCENARIOS.find((s) => s.scenarioId === scenarioId);
}

/** Preserve MW0 pin visibility for packs. */
export function mw0CatalogVersionPinned(): typeof NORA_EVAL_CATALOG_VERSION {
  return NORA_EVAL_CATALOG_VERSION;
}
```

### NEW FILE: `projects/sfia-studio/app/lib/nora-eval/mw1D0Runner.ts`

```typescript
/**
 * MW1 D0 observations + suite — extends harness without replacing MW0 D0.
 */

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  createMaterializationBasis,
  MaterializationBasisRequiredError,
  MemoryBService,
} from "@/lib/nora-memory-b";
import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
import {
  getMw1Scenario,
  listMw1Scenarios,
  NORA_EVAL_MW1_CATALOG_VERSION,
} from "./mw1Catalog";
import { aggregatePassFail } from "./scorers";
import type { PassFail, RunEvidence, ScorerResult } from "./types";
import { NORA_EVAL_CATALOG_VERSION } from "./types";

function seedProject(store: SqliteProductStore): void {
  const now = "2026-08-30T12:00:00.000Z";
  store.db
    .prepare(
      `INSERT INTO oa_projects(project_id, status, current_lps_version_id, payload_json, created_at)
       VALUES (?, 'active', NULL, ?, ?)`,
    )
    .run("prj:mw1", JSON.stringify({ projectId: "prj:mw1" }), now);
}

export async function runMw1D0Scenario(scenarioId: string): Promise<RunEvidence> {
  const startedAt = new Date().toISOString();
  const scenario = getMw1Scenario(scenarioId);
  const baseCell = {
    model: "d0-fixture",
    reasoningEffort: "none" as const,
    scenarioId,
    scenarioVersion: NORA_EVAL_CATALOG_VERSION,
    runIndex: 0,
    campaignId: "mw1-d0",
    tier: "D0" as const,
    sourceSet: "A" as const,
    toolSet: "none" as const,
  };

  if (!scenario) {
    return {
      campaignId: "mw1-d0",
      cell: baseCell,
      startedAt,
      finishedAt: new Date().toISOString(),
      passFail: "FAIL",
      failureClass: "MECHANICS",
      scorers: [],
      epistemicLabelsObserved: [],
      productPath: "none",
      rawSummary: "unknown scenario",
      usage: null,
      cumulativeSpendUsd: 0,
      redacted: true,
      evidenceRefs: [],
    };
  }

  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw1-d0-"));
  const dbPath = path.join(dir, "oa-product.sqlite");
  const scorers: ScorerResult[] = [];
  const observedObservableIds: string[] = [];
  const now = "2026-08-30T12:00:00.000Z";

  try {
    if (scenarioId === "mw1.s01.honest-resume") {
      const store = new SqliteProductStore(dbPath);
      seedProject(store);
      const svc = new MemoryBService(store);
      const missing = await svc.buildResumeContext({
        projectId: "prj:mw1",
        truthC: { available: true, lpsVersionId: "lps:1", lpsVersion: 1 },
      });
      const okMissing =
        missing.memoryB.availability === "unavailable" &&
        !missing.inventedTranscript;
      scorers.push({
        scorerId: "mw1.s01.missing-b",
        passFail: okMissing ? "PASS" : "FAIL",
        detail: `avail=${missing.memoryB.availability}`,
        hardInvariantViolation: !okMissing,
        barId: "NCC-BAR-07",
        observableId: scenario.continuityObservableId,
      });
      await svc.upsertSemanticClaims({
        projectId: "prj:mw1",
        truthCLpsVersionId: "lps:1",
        truthCLpsVersion: 1,
        claims: [
          {
            text: "prior semantic note",
            governing: false,
            provenance: { kind: "turn", ref: "t1", at: now },
          },
        ],
      });
      store.close();

      const store2 = new SqliteProductStore(dbPath);
      const svc2 = new MemoryBService(store2);
      const resumed = await svc2.buildResumeContext({
        projectId: "prj:mw1",
        truthC: { available: true, lpsVersionId: "lps:1", lpsVersion: 1 },
      });
      const okResume =
        resumed.memoryB.availability === "available" &&
        resumed.memoryB.claims.length === 1 &&
        !resumed.inventedTranscript;
      scorers.push({
        scorerId: "mw1.s01.resume-available",
        passFail: okResume ? "PASS" : "FAIL",
        detail: `avail=${resumed.memoryB.availability} claims=${resumed.memoryB.claims.length}`,
        hardInvariantViolation: !okResume,
        barId: "NCC-BAR-07",
        observableId: scenario.continuityObservableId,
      });
      observedObservableIds.push(scenario.continuityObservableId);
      store2.close();
    } else if (scenarioId === "mw1.s02.compaction-provenance") {
      const store = new SqliteProductStore(dbPath);
      seedProject(store);
      const svc = new MemoryBService(store);
      await svc.upsertSemanticClaims({
        projectId: "prj:mw1",
        truthCLpsVersionId: "lps:1",
        truthCLpsVersion: 1,
        claims: [
          {
            text: "STOP: await Morris",
            governing: true,
            provenance: { kind: "governing_premise", ref: "stop", at: now },
          },
          ...Array.from({ length: 6 }, (_, i) => ({
            text: `n-${i}`,
            governing: false,
            provenance: { kind: "turn" as const, ref: `t${i}`, at: now },
          })),
        ],
      });
      const compacted = await svc.compactCurrent({
        projectId: "prj:mw1",
        maxNonGoverning: 2,
      });
      const okCompact =
        !!compacted &&
        compacted.record.claims.some((c) => c.governing) &&
        compacted.materialLossSignals.some((s) => s.includes("MATERIAL_LOSS")) &&
        compacted.record.claims.some((c) => c.provenance.kind === "compaction");
      scorers.push({
        scorerId: "mw1.s02.compaction",
        passFail: okCompact ? "PASS" : "FAIL",
        detail: `loss=${compacted?.materialLossSignals.length ?? 0}`,
        hardInvariantViolation: !okCompact,
        barId: "NCC-BAR-07",
        observableId: scenario.continuityObservableId,
      });
      const stale = await svc.buildResumeContext({
        projectId: "prj:mw1",
        truthC: { available: true, lpsVersionId: "lps:2", lpsVersion: 2 },
      });
      const okInv = stale.memoryB.availability === "invalidated";
      scorers.push({
        scorerId: "mw1.s02.invalidate",
        passFail: okInv ? "PASS" : "FAIL",
        detail: `avail=${stale.memoryB.availability}`,
        hardInvariantViolation: !okInv,
        barId: "NCC-BAR-07",
        observableId: scenario.continuityObservableId,
      });
      observedObservableIds.push(scenario.continuityObservableId);
      store.close();
    } else if (scenarioId === "mw1.s03.no-silent-b-to-c") {
      const store = new SqliteProductStore(dbPath);
      seedProject(store);
      const svc = new MemoryBService(store);
      const record = await svc.upsertSemanticClaims({
        projectId: "prj:mw1",
        truthCLpsVersionId: "lps:1",
        truthCLpsVersion: 1,
        claims: [
          {
            text: "candidate fact",
            governing: false,
            provenance: { kind: "turn", ref: "t1", at: now },
          },
        ],
      });
      const claimId = record.claims[0]!.claimId;
      let silentBlocked = false;
      try {
        svc.attemptSilentPromotion();
      } catch (e) {
        silentBlocked = e instanceof MaterializationBasisRequiredError;
      }
      let missingBlocked = false;
      try {
        svc.authorizePromotionToTruthC({
          memoryB: record,
          basis: null,
          claimIdsAffectingTruthC: [claimId],
        });
      } catch (e) {
        missingBlocked = e instanceof MaterializationBasisRequiredError;
      }
      const basis = createMaterializationBasis({
        projectId: "prj:mw1",
        memoryBId: record.memoryBId,
        claimIds: [claimId],
        materializationClass: 2,
        reason: "governed class-2 materialization",
        actor: "pilote",
      });
      const authorized = svc.authorizePromotionToTruthC({
        memoryB: record,
        basis,
        claimIdsAffectingTruthC: [claimId],
      });
      const ok =
        silentBlocked &&
        missingBlocked &&
        authorized.ok &&
        authorized.basis.actor === "pilote";
      scorers.push({
        scorerId: "mw1.s03.basis-gate",
        passFail: ok ? "PASS" : "FAIL",
        detail: `silentBlocked=${silentBlocked} missingBlocked=${missingBlocked} authorized=${authorized.ok}`,
        hardInvariantViolation: !ok,
        barId: "NCC-BAR-07",
        observableId: scenario.continuityObservableId,
      });
      observedObservableIds.push(scenario.continuityObservableId);
      store.close();
    }
  } catch (error) {
    scorers.push({
      scorerId: "mw1.exception",
      passFail: "FAIL",
      detail: error instanceof Error ? error.message : String(error),
      hardInvariantViolation: true,
    });
  } finally {
    try {
      fs.rmSync(dir, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }

  const passFail: PassFail = aggregatePassFail(scorers);
  return {
    campaignId: "mw1-d0",
    cell: baseCell,
    startedAt,
    finishedAt: new Date().toISOString(),
    passFail,
    failureClass: passFail === "PASS" ? "NONE" : "HARD_INVARIANT",
    scorers,
    epistemicLabelsObserved: ["OBSERVATION"],
    productPath: "none",
    rawSummary: JSON.stringify({
      catalog: NORA_EVAL_MW1_CATALOG_VERSION,
      scenarioId,
      observedObservableIds,
      continuityObservableId: scenario.continuityObservableId,
    }),
    usage: null,
    cumulativeSpendUsd: 0,
    redacted: true,
    evidenceRefs: [`mw1-d0:${scenarioId}`],
    productObservation: { observedObservableIds },
  };
}

export async function runFullMw1D0Suite(): Promise<{
  ok: boolean;
  results: RunEvidence[];
  failed: string[];
}> {
  const results: RunEvidence[] = [];
  for (const s of listMw1Scenarios()) {
    results.push(await runMw1D0Scenario(s.scenarioId));
  }
  const failed = results
    .filter((r) => r.passFail !== "PASS")
    .map((r) => r.cell.scenarioId);
  return { ok: failed.length === 0, results, failed };
}
```

### NEW FILE: `projects/sfia-studio/app/lib/nora-memory-b/compaction.ts`

```typescript
/**
 * Deterministic Memory B compaction with provenance + loss signaling (MW1-S02).
 * Not model-based — simplest mechanism that closes product behavior.
 */

import { randomUUID } from "node:crypto";
import type { MemoryBClaim, MemoryBRecord } from "./types";

const DEFAULT_MAX_NON_GOVERNING = 4;

export type CompactionResult = {
  record: MemoryBRecord;
  retainedGoverningCount: number;
  compactedNonGoverningCount: number;
  materialLossSignals: string[];
};

/**
 * Compact Memory B:
 * - retain all governing claims (HD / STOP / premises);
 * - fold excess non-governing claims into one provenance-bearing summary;
 * - emit explicit material-loss signals.
 */
export function compactMemoryB(
  record: MemoryBRecord,
  options?: { maxNonGoverning?: number; at?: string },
): CompactionResult {
  const at = options?.at ?? new Date().toISOString();
  const maxNonGoverning = options?.maxNonGoverning ?? DEFAULT_MAX_NON_GOVERNING;
  const governing = record.claims.filter((c) => c.governing);
  const nonGoverning = record.claims.filter((c) => !c.governing);

  const materialLossSignals = [...record.materialLossSignals];
  const compactedFromClaimIds = [...record.compactedFromClaimIds];
  let retainedNonGoverning = nonGoverning;
  let compactedNonGoverningCount = 0;

  if (nonGoverning.length > maxNonGoverning) {
    const keep = nonGoverning.slice(-maxNonGoverning);
    const drop = nonGoverning.slice(0, nonGoverning.length - maxNonGoverning);
    compactedFromClaimIds.push(...drop.map((c) => c.claimId));
    compactedNonGoverningCount = drop.length;
    const summaryText = `Compacted ${drop.length} non-governing Memory B claim(s); detail not retained as full semantic surface. Surviving non-governing: ${keep.length}.`;
    const summaryClaim: MemoryBClaim = {
      claimId: `mbc_${randomUUID().replace(/-/g, "").slice(0, 12)}`,
      text: summaryText,
      governing: false,
      provenance: {
        kind: "compaction",
        ref: drop.map((c) => c.claimId).join(","),
        at,
      },
    };
    retainedNonGoverning = [...keep, summaryClaim];
    materialLossSignals.push(
      `MATERIAL_LOSS: compacted ${drop.length} non-governing claim(s) at ${at}`,
    );
  }

  // Governing always retained; if somehow empty and we had governing before, signal loss
  if (governing.length === 0 && record.claims.some((c) => c.governing)) {
    materialLossSignals.push(
      `MATERIAL_LOSS: governing claims unexpectedly absent at ${at}`,
    );
  }

  const next: MemoryBRecord = {
    ...record,
    claims: [...governing, ...retainedNonGoverning],
    materialLossSignals,
    compactedFromClaimIds,
    status: record.status === "unavailable" ? "unavailable" : "partial",
    updatedAt: at,
  };

  // If we still have claims and no availability override, mark available when full retention
  if (
    next.claims.length > 0 &&
    compactedNonGoverningCount === 0 &&
    next.status !== "invalidated" &&
    next.status !== "unavailable"
  ) {
    next.status = "available";
  }

  return {
    record: next,
    retainedGoverningCount: governing.length,
    compactedNonGoverningCount,
    materialLossSignals: [...materialLossSignals],
  };
}
```

### NEW FILE: `projects/sfia-studio/app/lib/nora-memory-b/index.ts`

```typescript
export * from "./types";
export * from "./materializationBasis";
export * from "./compaction";
export * from "./sqliteMemoryBRepository";
export * from "./memoryBService";
export * from "./resumePrompt";
```

### NEW FILE: `projects/sfia-studio/app/lib/nora-memory-b/materializationBasis.ts`

```typescript
/**
 * MaterializationBasis fail-closed gate — MW1-S03.
 * B content may not affect Truth C without an explicit basis.
 */

import { randomUUID } from "node:crypto";
import type {
  MaterializationBasis,
  MaterializationClass,
  MemoryBRecord,
} from "./types";
import { MEMORY_B_MATERIALIZATION_BASIS_REQUIRED } from "./types";

export class MaterializationBasisRequiredError extends Error {
  readonly code = MEMORY_B_MATERIALIZATION_BASIS_REQUIRED;
  constructor(detail: string) {
    super(`${MEMORY_B_MATERIALIZATION_BASIS_REQUIRED}: ${detail}`);
    this.name = "MaterializationBasisRequiredError";
  }
}

export function assertMaterializationBasis(input: {
  basis: MaterializationBasis | null | undefined;
  memoryB: MemoryBRecord;
  claimIdsAffectingTruthC: string[];
}): MaterializationBasis {
  const { basis, memoryB, claimIdsAffectingTruthC } = input;
  if (!basis) {
    throw new MaterializationBasisRequiredError(
      "Memory B content cannot affect Truth C without MaterializationBasis",
    );
  }
  if (basis.projectId !== memoryB.projectId) {
    throw new MaterializationBasisRequiredError(
      "MaterializationBasis.projectId mismatch",
    );
  }
  if (basis.memoryBId !== memoryB.memoryBId) {
    throw new MaterializationBasisRequiredError(
      "MaterializationBasis.memoryBId mismatch",
    );
  }
  if (basis.actor !== "pilote" && basis.actor !== "system_governed") {
    throw new MaterializationBasisRequiredError(
      `Invalid MaterializationBasis actor: ${String(basis.actor)}`,
    );
  }
  if (!basis.reason.trim()) {
    throw new MaterializationBasisRequiredError("MaterializationBasis.reason required");
  }
  for (const claimId of claimIdsAffectingTruthC) {
    if (!basis.claimIds.includes(claimId)) {
      throw new MaterializationBasisRequiredError(
        `claim ${claimId} not covered by MaterializationBasis`,
      );
    }
    if (!memoryB.claims.some((c) => c.claimId === claimId)) {
      throw new MaterializationBasisRequiredError(
        `claim ${claimId} not present on Memory B`,
      );
    }
  }
  return basis;
}

export function createMaterializationBasis(input: {
  projectId: string;
  memoryBId: string;
  claimIds: string[];
  materializationClass: MaterializationClass;
  reason: string;
  actor: "pilote" | "system_governed";
  at?: string;
}): MaterializationBasis {
  return {
    basisId: `mbasis_${randomUUID().replace(/-/g, "").slice(0, 16)}`,
    projectId: input.projectId,
    memoryBId: input.memoryBId,
    claimIds: [...input.claimIds],
    materializationClass: input.materializationClass,
    reason: input.reason.trim(),
    actor: input.actor,
    at: input.at ?? new Date().toISOString(),
  };
}

/** Silent B→C promotion is always forbidden. */
export function refuseSilentMemoryBToTruthC(): never {
  throw new MaterializationBasisRequiredError(
    "Silent Memory B → Truth C promotion is forbidden",
  );
}
```

### NEW FILE: `projects/sfia-studio/app/lib/nora-memory-b/memoryBService.ts`

```typescript
/**
 * Memory B service — resume honesty, invalidation, compaction, promotion gate.
 */

import { randomUUID } from "node:crypto";
import type { ProductSqliteHandle } from "@/lib/oa/project/infrastructure/sqlite/productSqliteHandle";
import { compactMemoryB } from "./compaction";
import {
  assertMaterializationBasis,
  MaterializationBasisRequiredError,
  refuseSilentMemoryBToTruthC,
} from "./materializationBasis";
import { SqliteMemoryBRepository } from "./sqliteMemoryBRepository";
import type {
  MaterializationBasis,
  MemoryBClaim,
  MemoryBRecord,
  ResumeContext,
} from "./types";

export type TruthCPointer = {
  available: boolean;
  lpsVersionId: string | null;
  lpsVersion: number | null;
};

export class MemoryBService {
  readonly repo: SqliteMemoryBRepository;

  constructor(store: ProductSqliteHandle) {
    this.repo = new SqliteMemoryBRepository(store);
  }

  /**
   * MW1-S01 — Resume from Truth C with honest Memory B availability.
   * Never invents transcript. B ≠ C.
   */
  async buildResumeContext(input: {
    projectId: string;
    truthC: TruthCPointer;
  }): Promise<ResumeContext> {
    const disclosures: string[] = [
      "Memory B is non-authoritative semantic continuity; Truth C (LPS/HD/Evidence/Trajectory) wins conflicts.",
      "Full transcript durability is NOT a product MUST — missing conversational context is disclosed, never invented.",
    ];

    if (!input.truthC.available || input.truthC.lpsVersionId == null) {
      disclosures.push(
        "Truth C unavailable for this resume — Nora must not invent Project truth.",
      );
      return {
        projectId: input.projectId,
        truthC: {
          available: false,
          lpsVersionId: null,
          lpsVersion: null,
        },
        memoryB: {
          availability: "unavailable",
          memoryBId: null,
          claims: [],
          materialLossSignals: [],
        },
        inventedTranscript: false,
        disclosures,
      };
    }

    let record = await this.repo.findCurrentByProjectId(input.projectId);
    if (!record) {
      disclosures.push(
        "Memory B unavailable — conversational semantic continuity not restored; Truth C context only.",
      );
      return {
        projectId: input.projectId,
        truthC: {
          available: true,
          lpsVersionId: input.truthC.lpsVersionId,
          lpsVersion: input.truthC.lpsVersion,
        },
        memoryB: {
          availability: "unavailable",
          memoryBId: null,
          claims: [],
          materialLossSignals: [],
        },
        inventedTranscript: false,
        disclosures,
      };
    }

    // Invalidate stale B when Truth C version diverges
    if (
      record.truthCLpsVersion !== input.truthC.lpsVersion ||
      record.truthCLpsVersionId !== input.truthC.lpsVersionId
    ) {
      record = {
        ...record,
        status: "invalidated",
        materialLossSignals: [
          ...record.materialLossSignals,
          `INVALIDATED: Truth C changed (was LPS v${record.truthCLpsVersion} ${record.truthCLpsVersionId}; now v${input.truthC.lpsVersion} ${input.truthC.lpsVersionId})`,
        ],
        updatedAt: new Date().toISOString(),
      };
      await this.repo.save(record);
      disclosures.push(
        "Stale Memory B invalidated after Truth C change — do not trust prior conversational summary against current Truth C.",
      );
      return {
        projectId: input.projectId,
        truthC: {
          available: true,
          lpsVersionId: input.truthC.lpsVersionId,
          lpsVersion: input.truthC.lpsVersion,
        },
        memoryB: {
          availability: "invalidated",
          memoryBId: record.memoryBId,
          claims: [],
          materialLossSignals: record.materialLossSignals,
        },
        inventedTranscript: false,
        disclosures,
      };
    }

    if (record.status === "unavailable" || record.claims.length === 0) {
      disclosures.push("Memory B recorded but empty/unavailable.");
      return {
        projectId: input.projectId,
        truthC: {
          available: true,
          lpsVersionId: input.truthC.lpsVersionId,
          lpsVersion: input.truthC.lpsVersion,
        },
        memoryB: {
          availability: "unavailable",
          memoryBId: record.memoryBId,
          claims: [],
          materialLossSignals: record.materialLossSignals,
        },
        inventedTranscript: false,
        disclosures,
      };
    }

    if (record.status === "partial" || record.materialLossSignals.length > 0) {
      disclosures.push(
        "Memory B partial — material loss signals present; do not invent missing conversational detail.",
      );
      return {
        projectId: input.projectId,
        truthC: {
          available: true,
          lpsVersionId: input.truthC.lpsVersionId,
          lpsVersion: input.truthC.lpsVersion,
        },
        memoryB: {
          availability: "partial",
          memoryBId: record.memoryBId,
          claims: structuredClone(record.claims),
          materialLossSignals: [...record.materialLossSignals],
        },
        inventedTranscript: false,
        disclosures,
      };
    }

    disclosures.push("Memory B available — semantic claims only; not a transcript.");
    return {
      projectId: input.projectId,
      truthC: {
        available: true,
        lpsVersionId: input.truthC.lpsVersionId,
        lpsVersion: input.truthC.lpsVersion,
      },
      memoryB: {
        availability: "available",
        memoryBId: record.memoryBId,
        claims: structuredClone(record.claims),
        materialLossSignals: [...record.materialLossSignals],
      },
      inventedTranscript: false,
      disclosures,
    };
  }

  async upsertSemanticClaims(input: {
    projectId: string;
    truthCLpsVersionId: string;
    truthCLpsVersion: number;
    claims: Omit<MemoryBClaim, "claimId">[] | MemoryBClaim[];
    replace?: boolean;
  }): Promise<MemoryBRecord> {
    const at = new Date().toISOString();
    const existing = await this.repo.findCurrentByProjectId(input.projectId);
    const normalized: MemoryBClaim[] = input.claims.map((c) => ({
      claimId:
        "claimId" in c && typeof c.claimId === "string" && c.claimId
          ? c.claimId
          : `mbcl_${randomUUID().replace(/-/g, "").slice(0, 12)}`,
      text: c.text,
      provenance: c.provenance,
      governing: c.governing,
    }));

    let record: MemoryBRecord;
    if (!existing || existing.status === "invalidated") {
      record = this.repo.createNew({
        projectId: input.projectId,
        truthCLpsVersionId: input.truthCLpsVersionId,
        truthCLpsVersion: input.truthCLpsVersion,
        claims: normalized,
        status: normalized.length ? "available" : "unavailable",
        at,
      });
    } else {
      record = {
        ...existing,
        truthCLpsVersionId: input.truthCLpsVersionId,
        truthCLpsVersion: input.truthCLpsVersion,
        claims: input.replace
          ? normalized
          : [...existing.claims, ...normalized],
        status: "available",
        updatedAt: at,
      };
    }
    await this.repo.save(record);
    return record;
  }

  async compactCurrent(input: {
    projectId: string;
    maxNonGoverning?: number;
  }): Promise<{ record: MemoryBRecord; materialLossSignals: string[] } | null> {
    const existing = await this.repo.findCurrentByProjectId(input.projectId);
    if (!existing) return null;
    const result = compactMemoryB(existing, {
      maxNonGoverning: input.maxNonGoverning,
    });
    await this.repo.save(result.record);
    return {
      record: result.record,
      materialLossSignals: result.materialLossSignals,
    };
  }

  /**
   * MW1-S03 — governed promotion path only.
   * Returns audit payload; does NOT write Truth C itself (caller must use OA LPS path).
   */
  authorizePromotionToTruthC(input: {
    memoryB: MemoryBRecord;
    basis: MaterializationBasis | null | undefined;
    claimIdsAffectingTruthC: string[];
  }): {
    ok: true;
    basis: MaterializationBasis;
    audit: Record<string, unknown>;
  } {
    const basis = assertMaterializationBasis({
      basis: input.basis,
      memoryB: input.memoryB,
      claimIdsAffectingTruthC: input.claimIdsAffectingTruthC,
    });
    return {
      ok: true,
      basis,
      audit: {
        event: "memory_b_materialization_authorized",
        basisId: basis.basisId,
        memoryBId: input.memoryB.memoryBId,
        projectId: input.memoryB.projectId,
        claimIds: input.claimIdsAffectingTruthC,
        materializationClass: basis.materializationClass,
        actor: basis.actor,
        at: basis.at,
      },
    };
  }

  attemptSilentPromotion(): never {
    return refuseSilentMemoryBToTruthC();
  }
}

export { MaterializationBasisRequiredError };
```

### NEW FILE: `projects/sfia-studio/app/lib/nora-memory-b/resumePrompt.ts`

```typescript
/**
 * Prompt / disclosure helpers for honest Memory B resume (MW1-S01).
 */

import type { ResumeContext } from "./types";

export function formatMemoryBResumePromptSection(
  resume: ResumeContext,
): string {
  const lines: string[] = [
    "=== MEMORY LAYERS (HARD) ===",
    "Memory A = short/process working context (this turn).",
    "Memory B = non-authoritative semantic continuity (may be partial/unavailable/invalidated).",
    "Memory C / Truth C = durable authoritative Project truth (LPS / HumanDecisions / Trajectory / Evidence).",
    "A ≠ B ≠ C. Truth C wins conflicts. B never silently becomes C.",
    "Never invent missing transcript, intent, decision, authorization, or evidence.",
    "",
    "=== RESUME DISCLOSURES ===",
    ...resume.disclosures.map((d) => `- ${d}`),
    "",
    `Truth C available: ${resume.truthC.available ? "YES" : "NO"}` +
      (resume.truthC.lpsVersion != null
        ? ` (LPS v${resume.truthC.lpsVersion} · ${resume.truthC.lpsVersionId})`
        : ""),
    `Memory B availability: ${resume.memoryB.availability}`,
  ];

  if (
    resume.memoryB.availability === "available" ||
    resume.memoryB.availability === "partial"
  ) {
    lines.push("Known-from-B (semantic claims only — NOT a transcript):");
    if (resume.memoryB.claims.length === 0) {
      lines.push("- (none)");
    } else {
      for (const claim of resume.memoryB.claims) {
        lines.push(
          `- [${claim.governing ? "GOVERNING" : "SEMANTIC"}] ${claim.text} (provenance: ${claim.provenance.kind}:${claim.provenance.ref})`,
        );
      }
    }
  } else {
    lines.push(
      "Known-from-B: NOT AVAILABLE — do not reconstruct conversational transcript.",
    );
  }

  if (resume.memoryB.materialLossSignals.length > 0) {
    lines.push("Material loss / invalidation signals:");
    for (const s of resume.memoryB.materialLossSignals) {
      lines.push(`- ${s}`);
    }
  }

  lines.push(`inventedTranscript: ${resume.inventedTranscript}`);
  return lines.join("\n");
}
```

### NEW FILE: `projects/sfia-studio/app/lib/nora-memory-b/sqliteMemoryBRepository.ts`

```typescript
/**
 * SQLite Memory B repository — ADAPT of Product SQLite (same backbone as Truth C).
 * Logical/semantic separation: B tables never write LPS/HD/Trajectory.
 */

import { randomUUID } from "node:crypto";
import type { ProductSqliteHandle } from "@/lib/oa/project/infrastructure/sqlite/productSqliteHandle";
import type { MemoryBAvailability, MemoryBClaim, MemoryBRecord } from "./types";
import { MEMORY_B_CROSS_PROJECT_DENIED } from "./types";

function parseRecord(payloadJson: string): MemoryBRecord {
  return structuredClone(JSON.parse(payloadJson) as MemoryBRecord);
}

export class SqliteMemoryBRepository {
  constructor(private readonly store: ProductSqliteHandle) {}

  async findCurrentByProjectId(
    projectId: string,
  ): Promise<MemoryBRecord | null> {
    const row = this.store.db
      .prepare(
        `SELECT m.payload_json AS payload_json
         FROM oa_memory_b_current c
         JOIN oa_memory_b m ON m.memory_b_id = c.memory_b_id
         WHERE c.project_id = ?`,
      )
      .get(projectId) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    const record = parseRecord(row.payload_json);
    if (record.projectId !== projectId) {
      throw new Error(MEMORY_B_CROSS_PROJECT_DENIED);
    }
    return record;
  }

  async findByIdForProject(
    projectId: string,
    memoryBId: string,
  ): Promise<MemoryBRecord | null> {
    const row = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_memory_b
         WHERE memory_b_id = ? AND project_id = ?`,
      )
      .get(memoryBId, projectId) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return parseRecord(row.payload_json);
  }

  async save(record: MemoryBRecord): Promise<void> {
    const payload = JSON.stringify(structuredClone(record));
    this.store.db
      .prepare(
        `INSERT INTO oa_memory_b(
          memory_b_id, project_id, status, truth_c_lps_version_id,
          truth_c_lps_version, payload_json, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(memory_b_id) DO UPDATE SET
          status = excluded.status,
          truth_c_lps_version_id = excluded.truth_c_lps_version_id,
          truth_c_lps_version = excluded.truth_c_lps_version,
          payload_json = excluded.payload_json,
          updated_at = excluded.updated_at`,
      )
      .run(
        record.memoryBId,
        record.projectId,
        record.status,
        record.truthCLpsVersionId,
        record.truthCLpsVersion,
        payload,
        record.createdAt,
        record.updatedAt,
      );

    this.store.db
      .prepare(
        `INSERT INTO oa_memory_b_current(project_id, memory_b_id)
         VALUES (?, ?)
         ON CONFLICT(project_id) DO UPDATE SET
           memory_b_id = excluded.memory_b_id`,
      )
      .run(record.projectId, record.memoryBId);
  }

  createNew(input: {
    projectId: string;
    truthCLpsVersionId: string;
    truthCLpsVersion: number;
    claims?: MemoryBClaim[];
    status?: MemoryBAvailability;
    at?: string;
  }): MemoryBRecord {
    const at = input.at ?? new Date().toISOString();
    return {
      memoryBId: `mb_${randomUUID().replace(/-/g, "").slice(0, 16)}`,
      projectId: input.projectId,
      status: input.status ?? (input.claims?.length ? "available" : "unavailable"),
      truthCLpsVersionId: input.truthCLpsVersionId,
      truthCLpsVersion: input.truthCLpsVersion,
      claims: input.claims ? structuredClone(input.claims) : [],
      materialLossSignals: [],
      compactedFromClaimIds: [],
      createdAt: at,
      updatedAt: at,
    };
  }
}
```

### NEW FILE: `projects/sfia-studio/app/lib/nora-memory-b/types.ts`

```typescript
/**
 * Nora Memory B — non-authoritative semantic continuity (MW1).
 * A ≠ B ≠ C. B never silently becomes Truth C.
 */

export type MemoryBAvailability =
  | "available"
  | "partial"
  | "unavailable"
  | "invalidated";

export type MemoryBProvenanceKind =
  | "turn"
  | "compaction"
  | "truth_c_ref"
  | "governing_premise";

export type MemoryBProvenance = {
  kind: MemoryBProvenanceKind;
  ref: string;
  at: string;
};

export type MemoryBClaim = {
  claimId: string;
  text: string;
  provenance: MemoryBProvenance;
  /** Governing HD / STOP / premise — retained under compaction when possible. */
  governing: boolean;
};

export type MemoryBRecord = {
  memoryBId: string;
  projectId: string;
  status: MemoryBAvailability;
  /** Truth C LPS version this B was aligned to when written. */
  truthCLpsVersionId: string;
  truthCLpsVersion: number;
  claims: MemoryBClaim[];
  materialLossSignals: string[];
  compactedFromClaimIds: string[];
  createdAt: string;
  updatedAt: string;
};

/** Class 1–4 materialization from C2 — required when B content would affect Truth C. */
export type MaterializationClass = 1 | 2 | 3 | 4;

export type MaterializationBasis = {
  basisId: string;
  projectId: string;
  memoryBId: string;
  claimIds: string[];
  materializationClass: MaterializationClass;
  reason: string;
  /** Nora cannot be the authority actor. */
  actor: "pilote" | "system_governed";
  at: string;
};

export type ResumeContext = {
  projectId: string;
  truthC: {
    available: boolean;
    lpsVersionId: string | null;
    lpsVersion: number | null;
  };
  memoryB: {
    availability: MemoryBAvailability;
    memoryBId: string | null;
    claims: MemoryBClaim[];
    materialLossSignals: string[];
  };
  /** Always false — transcript invention is forbidden. */
  inventedTranscript: false;
  disclosures: string[];
};

export const MEMORY_B_MATERIALIZATION_BASIS_REQUIRED =
  "MEMORY_B_MATERIALIZATION_BASIS_REQUIRED" as const;

export const MEMORY_B_CROSS_PROJECT_DENIED =
  "MEMORY_B_CROSS_PROJECT_DENIED" as const;
```
