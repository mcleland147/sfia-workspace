# SFIA Review Pack — FULL

## 1. Timestamp (Europe/Paris)
2026-08-15 08:24:34 CEST

## 2. GO exact
GO MORRIS — COMMIT / PUSH / DRAFT PR — M5 DELIVERY — OPTION B + W1 — ZERO REAL — M6 NOT AUTHORIZED — M5 NOT CLOSED

## 3. Cycle / Profile / Typology
- Cycle: 13 — PR readiness / Git integration
- Profile: Critical
- Typology: EVOL
- CKC: fallback synthetic map Cycle 13 (candidate / cognitive guidance only)

## 4. Git Truth (pre-commit)
- Branch: delivery/sfia-studio-m5-evidence-return
- Initial HEAD/base: 129570dfd44af5b4d466cc3dc0c166d928d26ef5
- origin/main: 129570dfd44af5b4d466cc3dc0c166d928d26ef5
- Incoming handoff commit: 5e50214ca525e32adaf78db0d4ac3cbe04e92365
- Incoming handoff blob: 0c3bf28fde63a65682e960f540078ff673a9f56e
- Remote Delivery before push: ABSENT
- staged before: empty
- REAL env: unset

## 5. Candidate identity verification
- Reviewed handoff FULL pack compared to working tree project paths
- Exact match: 44 files (0 unexpected / 0 missing)
- Candidate content mutation this cycle: 0
- Untracked non-commit: .tmp-sfia-review/** only

## 6. Staging
- Method: explicit git add of 44 reviewed paths (no git add -A)
- Staged count: 44
- Forbidden paths staged: none
- Staged stat: 44 files changed, 4715 insertions(+), 58 deletions(-)
- git diff --cached --check: clean

## 7. Project commit
- PROJECT_COMMIT_SHA: 17461dad78f92a3d5e5e1d9bd36aa20d1e86ac11
- Parent: 129570dfd44af5b4d466cc3dc0c166d928d26ef5 (expected 129570dfd44af5b4d466cc3dc0c166d928d26ef5)
- Message: feat(sfia-studio): persist m5 evidence return path
- Hook mutation: none (post-commit clean except .tmp-sfia-review/)

## 8. Push
- Branch: delivery/sfia-studio-m5-evidence-return
- Remote SHA: 17461dad78f92a3d5e5e1d9bd36aa20d1e86ac11
- Force: false

## 9. Draft PR
- PR_NUMBER: 350
- PR_URL: https://github.com/mcleland147/sfia-workspace/pull/350
- state: OPEN
- draft: true
- base: main
- head: delivery/sfia-studio-m5-evidence-return
- head SHA: 17461dad78f92a3d5e5e1d9bd36aa20d1e86ac11
- commit count: 1
- changed files: 44 (exact candidate)
- mark-ready: 0
- merge: 0

## 10. CI observation
- Workflow: SFIA Studio CI
- Run id: 31869335131
- URL: https://github.com/mcleland147/sfia-workspace/actions/runs/31869335131
- Observed JSON: {"conclusion":"","databaseId":31869335131,"headSha":"17461dad78f92a3d5e5e1d9bd36aa20d1e86ac11","name":"SFIA Studio CI","status":"in_progress","url":"https://github.com/mcleland147/sfia-workspace/actions/runs/31869335131"}
- rerun: 0
- Note: contract allows PENDING without claiming final PR readiness

## 11. Architecture preserved
- M5-A OPTION B
- M5-B W1
- M5-C KEEP TEMPORARY WITH EXIT
- B1/B2/B3/C1/C2 PASS history preserved (no functional change this cycle)
- Product SQLite m5-0.1.0 in candidate
- W1 factual LPS write-back
- Recommendation anti-claims in PR body
- Restart proof in candidate tests
- ZERO REAL / M6 NOT AUTHORIZED / M5 NOT CLOSED
- technical journal unchanged / timeout unchanged

## 12. Non-blocking reserve
confirmAndExecuteF3Fixture optional productDurablePath fallback remains; Product server action passes flag explicitly. Hardening debt, not integration blocker.

## 13. Roadmap
This PR did NOT modify Convergence Roadmap. Snapshot on main predates Delivery GO.

## 14. Safety counters
- Candidate content changes: 0
- Project commits: 1
- Project push: 1 normal
- Draft PR: 1
- Mark ready / merge / branch delete: 0
- REAL / Gate D / M6 / journal retirement / timeout / roadmap / framing / method: 0

## 15. Final local Git status
?? .tmp-sfia-review/

## 16. Final remote refs
origin/main=129570dfd44af5b4d466cc3dc0c166d928d26ef5
129570dfd44af5b4d466cc3dc0c166d928d26ef5	refs/heads/main
17461dad78f92a3d5e5e1d9bd36aa20d1e86ac11	refs/heads/delivery/sfia-studio-m5-evidence-return
5e50214ca525e32adaf78db0d4ac3cbe04e92365	refs/heads/sfia/review-handoff

## 17. PR body

## Summary

- Integrate the reviewed **M5 Delivery** candidate only (M4 CLOSED; M5 Entry Qualification complete).
- Morris adopted **M5-A Option B**, **M5-B W1**, **M5-C KEEP TEMPORARY WITH EXIT**; Morris authorized M5 Delivery; local candidate completed multiple ChatGPT QA passes.
- This PR does **not** close M5, authorize M6, enable Cursor REAL, or modify Convergence Roadmap / Build Doctrine / framing / method.

## Architecture

**M5-A OPTION B:** ExecutionAttempt + Evidence + ReviewBundle use the existing OA Product SQLite backbone behind existing domain/ports/use cases.

**M5-B W1:** automatic FACTUAL LPS append for `evidenceIds` / `reviewBundleIds`. Recommendation remains Recommendation.

**M5-C:** M4 technical launch journal remains KEEP TEMPORARY WITH EXIT.

## Implementation

- Product schema additive bump `m3-0.1.0` → `m5-0.1.0`
- Durable ExecutionAttempt (+ durable result-recording budget)
- Durable Evidence + ReviewBundle
- Atomic OCC + atomic ReviewBundle reopen
- RuntimeOaStack Product wiring (`productDurablePath`)
- W1 factual LPS write-back + `SFIA_STUDIO_SYSTEM_FACTUAL_WRITER` provenance
- Restart-safe Nora/F3 readback (`rehydrateEvidenceOutcomeFromLps`)
- Truthful Product vs Memory F3 disclosures (`F3_PRODUCT_DURABLE_NOTICE` / `F3_PROCESS_LOCAL_NOTICE`; required `prepareF3Fixture` persistence flag)

## Proof

- Process A→B restart proof (terminal `succeeded` Attempt + same `resultRef`)
- Evidence via `IngestExecutionAttemptEvidence`; same Evidence/RB/LPS refs after restart
- `RecommendNextGate` recomputed; recommendation-only anti-claims
- Local QA: Vitest **1721** pass / 131 skipped; modeled governance **73** pass; typecheck / lint / build PASS; `git diff --check` clean
- **ZERO Cursor REAL**

## Anti-claims

- Recommendation ≠ HumanDecision
- Recommendation ≠ gate consumed
- Recommendation ≠ ExecutionAuthority
- factual LPS linkage ≠ structural trajectory approval
- durable Attempt ≠ technical journal obsolete

## M5 status

- M5 Delivery candidate implemented and reviewable
- **M5 CLOSED = NO**
- M5 exit acceptance = future Morris gate
- **M6 NOT AUTHORIZED**
- runtime v3 NON ADOPTED
- global v3 baseline NOT PROMOTED

## REAL / M4

- Cursor REAL = 0 for M5
- no Gate D grant; no REAL retry
- M4 remains CLOSED
- technical journal unchanged
- timeout remains 60000 KEEP FOR NOW
- `CURSOR_REAL_TIMEOUT_POLICY` remains OPEN / NON-BLOCKING

## Non-blocking reserve

`confirmAndExecuteF3Fixture` still has an optional `productDurablePath` fallback at the lower-level helper boundary. Current Product server action passes the persistence flag explicitly. This is **hardening debt**, not an M5 integration blocker.

## Roadmap

Convergence Roadmap on current `main` predates the consumed M5 Delivery GO. **This PR does NOT modify the Roadmap.** Roadmap synchronization, if required, belongs to a later governed post-merge/closure cycle.

## Merge

**Merge NOT AUTHORIZED** by this PR creation cycle. Separate Morris GO required after ChatGPT PR readiness review. Do not mark ready / merge from this cycle.

## Test plan

- [ ] Confirm PR remains Draft / OPEN until Morris GO
- [ ] Confirm SFIA Studio CI observes studio paths only
- [ ] Confirm patch identity = single commit `feat(sfia-studio): persist m5 evidence return path`
- [ ] ChatGPT PR readiness review of handoff + GitHub metadata
- [ ] Morris GO mark-ready / merge only if review passes


Made with [Cursor](https://cursor.com)

## 18. Reservations
- Merge not authorized until ChatGPT PR readiness + Morris GO
- CI may still be PENDING at pack time
- confirmAndExecuteF3Fixture optional fallback (non-blocking)

## 19. Next Morris gate
1. ChatGPT reads new remote handoff.
2. ChatGPT verifies GitHub main/branch/commit/PR/CI/FULL handoff.
3. ChatGPT PR readiness verdict.
4. Morris GO mark-ready/merge only if review passes.
5. Post-merge Cycle 14; M5 exit proof; Morris M5 closure; M6 only under future GO.

## 20. Verdict

M5 DELIVERY COMMITTED AND PUSHED — DRAFT PR CREATED — OPTION B + W1 PRESERVED — ZERO REAL — M6 NOT AUTHORIZED — M5 NOT CLOSED — CHATGPT PR READINESS REVIEW REQUIRED

# COMPLETE PROJECT COMMIT PATCH

commit 17461dad78f92a3d5e5e1d9bd36aa20d1e86ac11
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Sat Aug 15 08:23:25 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Sat Aug 15 08:23:25 2026 +0200

    feat(sfia-studio): persist m5 evidence return path

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../oa/decision/m3ProductSchemaMigration.test.ts   |  10 +-
 .../m5EvidenceReviewDurability.test.ts             | 381 +++++++++++++++
 .../execution-attempt/m5AttemptDurability.test.ts  | 250 ++++++++++
 .../oa/project/m5ProductSchemaMigration.test.ts    | 227 +++++++++
 .../oa/project/m5RestartProcessProof.test.ts       | 134 +++++
 .../__tests__/oa/project/m5RestartProcessWorker.ts | 538 +++++++++++++++++++++
 .../app/__tests__/oa/project/m5W1LpsAppend.test.ts | 212 ++++++++
 .../rehydrateEvidenceOutcomeFromLps.test.ts        | 214 ++++++++
 .../f3.fixtureVerticalSlice.test.ts                |   7 +
 .../m5C1C2DisclosureAndRehydrateAction.test.ts     | 242 +++++++++
 .../m5C1PrepareMemoryDisclosure.test.ts            | 178 +++++++
 .../app/features/project-assistant/actions.ts      | 103 +++-
 .../f3/appendEvidenceOutcomeToLps.ts               |  65 +++
 .../f3/confirmAndExecuteF3Fixture.ts               |  24 +-
 .../app/features/project-assistant/f3/constants.ts |  24 +
 .../app/features/project-assistant/f3/index.ts     |  11 +
 .../f3/ingestEvidenceAndRecommend.ts               |  28 ++
 .../project-assistant/f3/prepareF3Fixture.ts       |  15 +-
 .../f3/rehydrateEvidenceOutcomeFromLps.ts          | 242 +++++++++
 .../project-assistant/f3/systemFactualWriter.ts    |  20 +
 .../app/features/project-assistant/types.ts        |  38 +-
 .../app/lib/oa/evidence-review/index.ts            |  14 +-
 .../sqlite/createSqliteEvidenceReviewServices.ts   | 336 +++++++++++++
 .../sqlite/sqliteEvidenceRepository.ts             | 223 +++++++++
 .../sqlite/sqliteReviewBundleRepository.ts         | 327 +++++++++++++
 .../application/cancelExecutionAttempt.ts          |   4 +-
 .../application/recordExecutionFailure.ts          |   4 +-
 .../application/recordExecutionResult.ts           |   4 +-
 .../application/selectExecutionAgent.ts            |   4 +-
 .../application/startExecution.ts                  |   4 +-
 .../application/triggerAttemptTimeout.ts           |   4 +-
 .../app/lib/oa/execution-attempt/index.ts          |  15 +-
 .../sqlite/createSqliteExecutionAttemptServices.ts | 240 +++++++++
 .../sqlite/sqliteExecutionAttemptRepository.ts     | 348 +++++++++++++
 .../sqlite/sqliteExecutionAttemptTechnicalStore.ts |  49 ++
 .../ports/executionAttemptTechnicalStorePort.ts    |  21 +
 .../application/appendLivingProjectStateVersion.ts |  12 +
 .../sfia-studio/app/lib/oa/project/domain/types.ts |  10 +
 projects/sfia-studio/app/lib/oa/project/index.ts   |   1 +
 .../app/lib/oa/project/infrastructure/sqlite/db.ts |  87 +++-
 .../infrastructure/sqlite/productSqliteHandle.ts   |  14 +-
 .../infrastructure/sqlite/sqliteProductStore.ts    |  15 +-
 .../app/lib/vertical-slice-runtime/disclosures.ts  |  17 +-
 .../app/lib/vertical-slice-runtime/service.ts      |  57 ++-
 44 files changed, 4715 insertions(+), 58 deletions(-)

diff --git a/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts b/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
index 04202fb..e1fe203 100644
--- a/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
@@ -15,6 +15,7 @@ import {
 import {
   PRODUCT_SCHEMA_VERSION,
   PRODUCT_SCHEMA_VERSION_M2,
+  PRODUCT_SCHEMA_VERSION_M3,
   createTestSqliteProductProjectServices,
   type ActorReference,
   type SqliteProductProjectServices,
@@ -129,7 +130,8 @@ describe("M3 Product SQLite schema migration", () => {
       .prepare("SELECT value FROM schema_meta WHERE key = ?")
       .get("schema_version") as { value: string };
     expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
-    expect(PRODUCT_SCHEMA_VERSION).toBe("m3-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION_M3).toBe("m3-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m5-0.1.0");

     const decisions = svc.store.db
       .prepare(
@@ -141,8 +143,14 @@ describe("M3 Product SQLite schema migration", () => {
         `SELECT name FROM sqlite_master WHERE type='table' AND name='oa_execution_contracts'`,
       )
       .get() as { name?: string } | undefined;
+    const attempts = svc.store.db
+      .prepare(
+        `SELECT name FROM sqlite_master WHERE type='table' AND name='oa_execution_attempts'`,
+      )
+      .get() as { name?: string } | undefined;
     expect(decisions?.name).toBe("oa_human_decisions");
     expect(contracts?.name).toBe("oa_execution_contracts");
+    expect(attempts?.name).toBe("oa_execution_attempts");

     const project = await svc.getProject.execute({ projectId: "prj:m3-mig" });
     expect(project.ok).toBe(true);
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/m5EvidenceReviewDurability.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/m5EvidenceReviewDurability.test.ts
new file mode 100644
index 0000000..c101ecf
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/m5EvidenceReviewDurability.test.ts
@@ -0,0 +1,381 @@
+/**
+ * M5 — Evidence + ReviewBundle Product SQLite durability.
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, describe, expect, it } from "vitest";
+import {
+  createTestDoctrineResolver,
+  type Digest,
+  type DoctrinePackagePin,
+} from "@/lib/oa/doctrine";
+import {
+  createTestSqliteProductProjectServices,
+  type ActorReference,
+  type SqliteProductProjectServices,
+} from "@/lib/oa/project";
+import {
+  createTestSqliteEvidenceReviewServices,
+  type ActorReference as EvidenceActor,
+  type Digest as EvidenceDigest,
+} from "@/lib/oa/evidence-review";
+
+const APP_ROOT = path.resolve(__dirname, "../../..");
+const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
+const SCHEMAS = path.resolve(
+  APP_ROOT,
+  "../sfia-v3-modeled/v3-native-option-a/schemas",
+);
+
+const VALID_DIGEST =
+  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
+
+const EVIDENCE_DIGEST =
+  "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" as EvidenceDigest;
+
+const VALID_PIN: DoctrinePackagePin = {
+  doctrinePackageId: "pkg:studio-v3-oa",
+  version: "1.0.0",
+  digest: VALID_DIGEST,
+};
+
+const ACTOR: ActorReference = {
+  actorId: "actor:morris",
+  role: "project_owner",
+  displayName: "Morris",
+  authorityLevel: "N3",
+};
+
+const EV_ACTOR: EvidenceActor = {
+  actorId: "actor:morris",
+  role: "decision_maker",
+  authorityLevel: "N3",
+};
+
+const tempDirs: string[] = [];
+const openServices: Array<{ dispose: () => void }> = [];
+
+function tempDbPath(name: string): string {
+  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m5-ev-"));
+  tempDirs.push(dir);
+  return path.join(dir, name);
+}
+
+function openProjects(dbPath: string): SqliteProductProjectServices {
+  const { resolver } = createTestDoctrineResolver({
+    registryRoot: FIXTURES,
+    schemasRoot: SCHEMAS,
+  });
+  const svc = createTestSqliteProductProjectServices({
+    doctrineResolver: resolver,
+    fixedNowIso: "2026-08-15T09:00:00.000Z",
+    dbPath,
+  });
+  openServices.push(svc);
+  return svc;
+}
+
+afterEach(() => {
+  while (openServices.length) {
+    try {
+      openServices.pop()?.dispose();
+    } catch {
+      /* ignore */
+    }
+  }
+  while (tempDirs.length) {
+    const dir = tempDirs.pop();
+    if (dir) fs.rmSync(dir, { recursive: true, force: true });
+  }
+});
+
+describe("M5 Evidence/ReviewBundle durability", () => {
+  it("persists Evidence + ReviewBundle across Product SQLite reopen", async () => {
+    const dbPath = tempDbPath("ev-rb.sqlite");
+    const projects = openProjects(dbPath);
+    await projects.createProject.execute({
+      projectId: "prj:m5-ev",
+      title: "M5 Evidence",
+      objective: "m5-ev-objective",
+      doctrinePackagePin: VALID_PIN,
+      createdBy: ACTOR,
+      lpsVersionId: "lps:m5-ev-v1",
+      idempotencyKey: "idem:m5-ev-prj",
+    });
+
+    const services = createTestSqliteEvidenceReviewServices({
+      productStore: projects.store,
+      fixedNowIso: "2026-08-15T09:00:00.000Z",
+    });
+
+    const reg = await services.registerEvidence.execute({
+      evidenceId: "ev:m5-durable",
+      idempotencyKey: "idem:ev:m5-durable",
+      actor: EV_ACTOR,
+      type: "document",
+      source: "fixture",
+      sourceKind: "manual",
+      bindings: { projectId: "prj:m5-ev" },
+      classification: "internal",
+      storageMode: "metadata_only",
+      digest: EVIDENCE_DIGEST,
+    });
+    expect(reg.ok).toBe(true);
+
+    const bundle = await services.createReviewBundle.execute({
+      reviewBundleId: "rb:m5-durable",
+      idempotencyKey: "idem:rb:m5-durable",
+      actor: EV_ACTOR,
+      projectId: "prj:m5-ev",
+      evidenceIds: ["ev:m5-durable"],
+    });
+    expect(bundle.ok).toBe(true);
+
+    projects.dispose();
+    openServices.pop();
+
+    const projects2 = openProjects(dbPath);
+    const services2 = createTestSqliteEvidenceReviewServices({
+      productStore: projects2.store,
+    });
+    const evidence = await services2.repository.findById("ev:m5-durable");
+    expect(evidence?.status).toBe("available");
+    expect(evidence?.bindings.projectId).toBe("prj:m5-ev");
+    const rb = await services2.reviewBundleRepository.findById("rb:m5-durable");
+    expect(rb?.evidenceRefs).toEqual(["ev:m5-durable"]);
+    const byKey = await services2.repository.findByIdempotencyKey(
+      "idem:ev:m5-durable",
+    );
+    expect(byKey?.evidence.evidenceId).toBe("ev:m5-durable");
+  });
+
+  it("createSuccessorAndMarkSuperseded is transactional on Product SQLite", async () => {
+    const dbPath = tempDbPath("reopen.sqlite");
+    const projects = openProjects(dbPath);
+    const services = createTestSqliteEvidenceReviewServices({
+      productStore: projects.store,
+    });
+    const reg = await services.registerEvidence.execute({
+      evidenceId: "ev:m5-reopen",
+      idempotencyKey: "idem:ev:m5-reopen",
+      actor: EV_ACTOR,
+      type: "document",
+      source: "fixture",
+      sourceKind: "manual",
+      bindings: { projectId: "prj:m5-reopen" },
+      classification: "internal",
+      storageMode: "metadata_only",
+      digest: EVIDENCE_DIGEST,
+    });
+    expect(reg.ok).toBe(true);
+    const created = await services.createReviewBundle.execute({
+      reviewBundleId: "rb:m5-src",
+      idempotencyKey: "idem:rb:m5-src",
+      actor: EV_ACTOR,
+      projectId: "prj:m5-reopen",
+      evidenceIds: ["ev:m5-reopen"],
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+
+    // Freeze → start → complete so reopen is legal.
+    const frozen = await services.freezeReviewBundle.execute({
+      reviewBundleId: "rb:m5-src",
+      actor: EV_ACTOR,
+      expectedVersion: 1,
+      idempotencyKey: "idem:freeze:m5-src",
+    });
+    expect(frozen.ok).toBe(true);
+    const started = await services.startReview.execute({
+      reviewBundleId: "rb:m5-src",
+      actor: EV_ACTOR,
+      expectedVersion: 2,
+      idempotencyKey: "idem:start:m5-src",
+    });
+    expect(started.ok).toBe(true);
+    const completed = await services.completeReview.execute({
+      reviewBundleId: "rb:m5-src",
+      actor: EV_ACTOR,
+      expectedVersion: 3,
+      outcome: "accepted",
+      idempotencyKey: "idem:complete:m5-src",
+    });
+    expect(completed.ok).toBe(true);
+
+    const reopened = await services.reopenReview.execute({
+      reviewBundleId: "rb:m5-src",
+      successorReviewBundleId: "rb:m5-successor",
+      actor: EV_ACTOR,
+      expectedVersion: 4,
+      reason: "revise",
+      idempotencyKey: "idem:reopen:m5-src",
+    });
+    expect(reopened.ok).toBe(true);
+    if (!reopened.ok) return;
+    expect(reopened.reviewBundle.reviewBundleId).toBe("rb:m5-src");
+    expect(reopened.reviewBundle.status).toBe("superseded");
+    expect(reopened.successor?.reviewBundleId).toBe("rb:m5-successor");
+    expect(reopened.successor?.status).toBe("draft");
+
+    const superseded = await services.reviewBundleRepository.findById(
+      "rb:m5-src",
+    );
+    expect(superseded?.status).toBe("superseded");
+    const successor = await services.reviewBundleRepository.findById(
+      "rb:m5-successor",
+    );
+    expect(successor?.status).toBe("draft");
+  });
+
+  it("concurrent Evidence update expectedVersion=1 → one win, one VERSION_CONFLICT", async () => {
+    const dbPath = tempDbPath("ev-occ.sqlite");
+    const projects = openProjects(dbPath);
+    const services = createTestSqliteEvidenceReviewServices({
+      productStore: projects.store,
+    });
+    const reg = await services.registerEvidence.execute({
+      evidenceId: "ev:m5-occ",
+      idempotencyKey: "idem:ev:m5-occ",
+      actor: EV_ACTOR,
+      type: "document",
+      source: "fixture",
+      sourceKind: "manual",
+      bindings: { projectId: "prj:m5-occ" },
+      classification: "internal",
+      storageMode: "metadata_only",
+      digest: EVIDENCE_DIGEST,
+    });
+    expect(reg.ok).toBe(true);
+    if (!reg.ok) return;
+
+    const base = reg.evidence;
+    const results = await Promise.allSettled([
+      services.repository.update(
+        {
+          ...base,
+          status: "stale",
+          version: 2,
+          updatedAt: "2026-08-15T09:01:00.000Z",
+        },
+        1,
+      ),
+      services.repository.update(
+        {
+          ...base,
+          status: "stale",
+          version: 2,
+          updatedAt: "2026-08-15T09:02:00.000Z",
+        },
+        1,
+      ),
+    ]);
+
+    const fulfilled = results.filter((r) => r.status === "fulfilled");
+    const rejected = results.filter((r) => r.status === "rejected");
+    expect(fulfilled).toHaveLength(1);
+    expect(rejected).toHaveLength(1);
+    expect(rejected[0]).toMatchObject({
+      status: "rejected",
+      reason: expect.objectContaining({ detailCode: "VERSION_CONFLICT" }),
+    });
+    const loaded = await services.repository.findById("ev:m5-occ");
+    expect(loaded?.version).toBe(2);
+  });
+
+  it("concurrent createSuccessorAndMarkSuperseded → one wins, no orphan", async () => {
+    const dbPath = tempDbPath("reopen-concurrent.sqlite");
+    const projects = openProjects(dbPath);
+    const services = createTestSqliteEvidenceReviewServices({
+      productStore: projects.store,
+    });
+    const reg = await services.registerEvidence.execute({
+      evidenceId: "ev:m5-conc",
+      idempotencyKey: "idem:ev:m5-conc",
+      actor: EV_ACTOR,
+      type: "document",
+      source: "fixture",
+      sourceKind: "manual",
+      bindings: { projectId: "prj:m5-conc" },
+      classification: "internal",
+      storageMode: "metadata_only",
+      digest: EVIDENCE_DIGEST,
+    });
+    expect(reg.ok).toBe(true);
+
+    const created = await services.createReviewBundle.execute({
+      reviewBundleId: "rb:m5-conc-src",
+      idempotencyKey: "idem:rb:m5-conc-src",
+      actor: EV_ACTOR,
+      projectId: "prj:m5-conc",
+      evidenceIds: ["ev:m5-conc"],
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+
+    const frozen = await services.freezeReviewBundle.execute({
+      reviewBundleId: "rb:m5-conc-src",
+      actor: EV_ACTOR,
+      expectedVersion: 1,
+      idempotencyKey: "idem:freeze:m5-conc",
+    });
+    expect(frozen.ok).toBe(true);
+    const started = await services.startReview.execute({
+      reviewBundleId: "rb:m5-conc-src",
+      actor: EV_ACTOR,
+      expectedVersion: 2,
+      idempotencyKey: "idem:start:m5-conc",
+    });
+    expect(started.ok).toBe(true);
+    const completed = await services.completeReview.execute({
+      reviewBundleId: "rb:m5-conc-src",
+      actor: EV_ACTOR,
+      expectedVersion: 3,
+      outcome: "accepted",
+      idempotencyKey: "idem:complete:m5-conc",
+    });
+    expect(completed.ok).toBe(true);
+
+    const results = await Promise.allSettled([
+      services.reopenReview.execute({
+        reviewBundleId: "rb:m5-conc-src",
+        successorReviewBundleId: "rb:m5-conc-a",
+        actor: EV_ACTOR,
+        expectedVersion: 4,
+        reason: "revise-a",
+        idempotencyKey: "idem:reopen:m5-conc-a",
+      }),
+      services.reopenReview.execute({
+        reviewBundleId: "rb:m5-conc-src",
+        successorReviewBundleId: "rb:m5-conc-b",
+        actor: EV_ACTOR,
+        expectedVersion: 4,
+        reason: "revise-b",
+        idempotencyKey: "idem:reopen:m5-conc-b",
+      }),
+    ]);
+
+    const okResults = results.filter(
+      (r) => r.status === "fulfilled" && r.value.ok,
+    );
+    const failResults = results.filter(
+      (r) =>
+        r.status === "fulfilled" && !r.value.ok,
+    );
+    expect(okResults).toHaveLength(1);
+    expect(failResults).toHaveLength(1);
+    if (failResults[0]?.status === "fulfilled" && !failResults[0].value.ok) {
+      expect(failResults[0].value.error.detailCode).toBe("VERSION_CONFLICT");
+    }
+
+    const src = await services.reviewBundleRepository.findById("rb:m5-conc-src");
+    expect(src?.status).toBe("superseded");
+
+    const a = await services.reviewBundleRepository.findById("rb:m5-conc-a");
+    const b = await services.reviewBundleRepository.findById("rb:m5-conc-b");
+    const successors = [a, b].filter(Boolean);
+    expect(successors).toHaveLength(1);
+    expect(successors[0]?.status).toBe("draft");
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/m5AttemptDurability.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/m5AttemptDurability.test.ts
new file mode 100644
index 0000000..b9cfafc
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/m5AttemptDurability.test.ts
@@ -0,0 +1,250 @@
+/**
+ * M5 — ExecutionAttempt durability + durable resultRecordingAttempts budget.
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, describe, expect, it } from "vitest";
+import {
+  createTestDoctrineResolver,
+  type Digest,
+  type DoctrinePackagePin,
+} from "@/lib/oa/doctrine";
+import {
+  createTestSqliteProductProjectServices,
+  type ActorReference,
+  type SqliteProductProjectServices,
+} from "@/lib/oa/project";
+import {
+  SqliteExecutionAttemptRepository,
+  SqliteExecutionAttemptTechnicalStore,
+  type ExecutionAttempt,
+} from "@/lib/oa/execution-attempt";
+
+const APP_ROOT = path.resolve(__dirname, "../../..");
+const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
+const SCHEMAS = path.resolve(
+  APP_ROOT,
+  "../sfia-v3-modeled/v3-native-option-a/schemas",
+);
+
+const VALID_DIGEST =
+  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
+
+const VALID_PIN: DoctrinePackagePin = {
+  doctrinePackageId: "pkg:studio-v3-oa",
+  version: "1.0.0",
+  digest: VALID_DIGEST,
+};
+
+const ACTOR: ActorReference = {
+  actorId: "actor:morris",
+  role: "project_owner",
+  displayName: "Morris",
+  authorityLevel: "N3",
+};
+
+const NOW = "2026-08-15T08:30:00.000Z";
+
+const tempDirs: string[] = [];
+const openServices: Array<{ dispose: () => void }> = [];
+
+function tempDbPath(name: string): string {
+  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m5-att-"));
+  tempDirs.push(dir);
+  return path.join(dir, name);
+}
+
+function openProjects(dbPath: string): SqliteProductProjectServices {
+  const { resolver } = createTestDoctrineResolver({
+    registryRoot: FIXTURES,
+    schemasRoot: SCHEMAS,
+  });
+  const svc = createTestSqliteProductProjectServices({
+    doctrineResolver: resolver,
+    fixedNowIso: NOW,
+    dbPath,
+  });
+  openServices.push(svc);
+  return svc;
+}
+
+function baseAttempt(
+  overrides: Partial<ExecutionAttempt> & { attemptId: string },
+): ExecutionAttempt {
+  return {
+    schemaVersion: "0.2.0-oa",
+    executionContractId: "xct:m5-001",
+    executionContractVersion: 1,
+    selectedAgentRef: "agt:fixture",
+    status: "accepted",
+    idempotencyKey: `idem-${overrides.attemptId}`,
+    correlationId: "cor:m5-att",
+    version: 1,
+    createdAt: NOW,
+    provenance: {
+      schemaVersion: "0.1.0-oa",
+      provenanceRecordId: "prv:m5-att",
+      actor: { actorId: "actor:morris", role: "decision_maker" },
+      source: "human_decision",
+      timestamp: NOW,
+      correlationId: "cor:m5-att",
+    },
+    selectionStrategy: "capabilities_deterministic",
+    selectionProfile: "standard",
+    selectionExpiresAt: "2026-08-15T09:00:00.000Z",
+    ...overrides,
+  };
+}
+
+afterEach(() => {
+  while (openServices.length) {
+    try {
+      openServices.pop()?.dispose();
+    } catch {
+      /* ignore */
+    }
+  }
+  while (tempDirs.length) {
+    const dir = tempDirs.pop();
+    if (dir) fs.rmSync(dir, { recursive: true, force: true });
+  }
+});
+
+describe("M5 ExecutionAttempt durability", () => {
+  it("persists attempt + active index + result budget across reopen", async () => {
+    const dbPath = tempDbPath("attempt.sqlite");
+    const projects = openProjects(dbPath);
+    await projects.createProject.execute({
+      projectId: "prj:m5-att",
+      title: "M5 Attempt",
+      objective: "m5-att-objective",
+      doctrinePackagePin: VALID_PIN,
+      createdBy: ACTOR,
+      lpsVersionId: "lps:m5-att-v1",
+      idempotencyKey: "idem:m5-att-prj",
+    });
+
+    const repo = new SqliteExecutionAttemptRepository(projects.store);
+    const tech = new SqliteExecutionAttemptTechnicalStore(projects.store);
+    const attempt = baseAttempt({ attemptId: "xat:m5-durable" });
+    await repo.create(attempt);
+    await repo.reserveActiveContract(
+      attempt.executionContractId,
+      attempt.attemptId,
+    );
+    tech.resultRecordingAttempts.set(attempt.attemptId, 2);
+
+    const active = await repo.findActiveByContract(attempt.executionContractId);
+    expect(active?.attemptId).toBe("xat:m5-durable");
+    expect(tech.resultRecordingAttempts.get(attempt.attemptId)).toBe(2);
+
+    projects.dispose();
+    openServices.pop();
+
+    const projects2 = openProjects(dbPath);
+    const repo2 = new SqliteExecutionAttemptRepository(projects2.store);
+    const tech2 = new SqliteExecutionAttemptTechnicalStore(projects2.store);
+    const loaded = await repo2.findById("xat:m5-durable");
+    expect(loaded?.status).toBe("accepted");
+    expect(loaded?.idempotencyKey).toBe("idem-xat:m5-durable");
+    const active2 = await repo2.findActiveByContract("xct:m5-001");
+    expect(active2?.attemptId).toBe("xat:m5-durable");
+    expect(tech2.resultRecordingAttempts.get("xat:m5-durable")).toBe(2);
+  });
+
+  it("enforces OCC and active reservation on SQLite", async () => {
+    const dbPath = tempDbPath("occ.sqlite");
+    const projects = openProjects(dbPath);
+    const repo = new SqliteExecutionAttemptRepository(projects.store);
+    await repo.create(baseAttempt({ attemptId: "xat:m5-occ" }));
+    await expect(
+      repo.update(
+        baseAttempt({
+          attemptId: "xat:m5-occ",
+          status: "running",
+          version: 2,
+          startedAt: NOW,
+        }),
+        99,
+      ),
+    ).rejects.toMatchObject({ detailCode: "VERSION_CONFLICT" });
+
+    await repo.reserveActiveContract("xct:m5-001", "xat:m5-occ");
+    await expect(
+      repo.reserveActiveContract("xct:m5-001", "xat:other"),
+    ).rejects.toMatchObject({ detailCode: "EXECUTION_ALREADY_ACTIVE" });
+  });
+
+  it("concurrent update with same expectedVersion → one win, one VERSION_CONFLICT", async () => {
+    const dbPath = tempDbPath("occ-concurrent.sqlite");
+    const projects = openProjects(dbPath);
+    const repo = new SqliteExecutionAttemptRepository(projects.store);
+    await repo.create(baseAttempt({ attemptId: "xat:m5-occ-c" }));
+
+    const results = await Promise.allSettled([
+      repo.update(
+        baseAttempt({
+          attemptId: "xat:m5-occ-c",
+          status: "accepted",
+          version: 2,
+          updatedAt: NOW,
+          selectionExpiresAt: "2026-08-15T09:10:00.000Z",
+        }),
+        1,
+      ),
+      repo.update(
+        baseAttempt({
+          attemptId: "xat:m5-occ-c",
+          status: "accepted",
+          version: 2,
+          updatedAt: NOW,
+          selectionExpiresAt: "2026-08-15T09:20:00.000Z",
+        }),
+        1,
+      ),
+    ]);
+
+    const fulfilled = results.filter((r) => r.status === "fulfilled");
+    const rejected = results.filter((r) => r.status === "rejected");
+    expect(fulfilled).toHaveLength(1);
+    expect(rejected).toHaveLength(1);
+    expect(rejected[0]).toMatchObject({
+      status: "rejected",
+      reason: expect.objectContaining({ detailCode: "VERSION_CONFLICT" }),
+    });
+    const loaded = await repo.findById("xat:m5-occ-c");
+    expect(loaded?.version).toBe(2);
+  });
+
+  it("concurrent reserveActiveContract different attemptIds → one EXECUTION_ALREADY_ACTIVE", async () => {
+    const dbPath = tempDbPath("reserve-concurrent.sqlite");
+    const projects = openProjects(dbPath);
+    const repo = new SqliteExecutionAttemptRepository(projects.store);
+    await repo.create(
+      baseAttempt({ attemptId: "xat:m5-res-a", executionContractId: "xct:m5-res" }),
+    );
+    await repo.create(
+      baseAttempt({ attemptId: "xat:m5-res-b", executionContractId: "xct:m5-res" }),
+    );
+
+    const results = await Promise.allSettled([
+      repo.reserveActiveContract("xct:m5-res", "xat:m5-res-a"),
+      repo.reserveActiveContract("xct:m5-res", "xat:m5-res-b"),
+    ]);
+
+    const fulfilled = results.filter((r) => r.status === "fulfilled");
+    const rejected = results.filter((r) => r.status === "rejected");
+    expect(fulfilled).toHaveLength(1);
+    expect(rejected).toHaveLength(1);
+    expect(rejected[0]).toMatchObject({
+      status: "rejected",
+      reason: expect.objectContaining({
+        detailCode: "EXECUTION_ALREADY_ACTIVE",
+      }),
+    });
+    const active = await repo.findActiveByContract("xct:m5-res");
+    expect(["xat:m5-res-a", "xat:m5-res-b"]).toContain(active?.attemptId);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts b/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
new file mode 100644
index 0000000..d4f6c72
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
@@ -0,0 +1,227 @@
+/**
+ * M5 — Product SQLite migration M3→M5 (and M2→M5 ladder).
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { DatabaseSync } from "node:sqlite";
+import { afterEach, describe, expect, it } from "vitest";
+import {
+  createTestDoctrineResolver,
+  type Digest,
+  type DoctrinePackagePin,
+} from "@/lib/oa/doctrine";
+import {
+  PRODUCT_SCHEMA_VERSION,
+  PRODUCT_SCHEMA_VERSION_M2,
+  PRODUCT_SCHEMA_VERSION_M3,
+  createTestSqliteProductProjectServices,
+  type ActorReference,
+  type SqliteProductProjectServices,
+} from "@/lib/oa/project";
+import { createSqliteCycleServices } from "@/lib/oa/cycle";
+
+const APP_ROOT = path.resolve(__dirname, "../../..");
+const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
+const SCHEMAS = path.resolve(
+  APP_ROOT,
+  "../sfia-v3-modeled/v3-native-option-a/schemas",
+);
+
+const VALID_DIGEST =
+  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
+
+const VALID_PIN: DoctrinePackagePin = {
+  doctrinePackageId: "pkg:studio-v3-oa",
+  version: "1.0.0",
+  digest: VALID_DIGEST,
+};
+
+const ACTOR: ActorReference = {
+  actorId: "actor:morris",
+  role: "project_owner",
+  displayName: "Morris",
+  authorityLevel: "N3",
+};
+
+const tempDirs: string[] = [];
+const openServices: Array<{ dispose: () => void }> = [];
+
+function tempDbPath(name: string): string {
+  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m5-mig-"));
+  tempDirs.push(dir);
+  return path.join(dir, name);
+}
+
+function buildProjectServices(dbPath: string): SqliteProductProjectServices {
+  const { resolver } = createTestDoctrineResolver({
+    registryRoot: FIXTURES,
+    schemasRoot: SCHEMAS,
+  });
+  const svc = createTestSqliteProductProjectServices({
+    doctrineResolver: resolver,
+    fixedNowIso: "2026-08-15T08:00:00.000Z",
+    dbPath,
+  });
+  openServices.push(svc);
+  return svc;
+}
+
+function tableExists(
+  db: DatabaseSync,
+  name: string,
+): boolean {
+  const row = db
+    .prepare(
+      `SELECT name FROM sqlite_master WHERE type='table' AND name=?`,
+    )
+    .get(name) as { name?: string } | undefined;
+  return row?.name === name;
+}
+
+afterEach(() => {
+  while (openServices.length) {
+    try {
+      openServices.pop()?.dispose();
+    } catch {
+      /* ignore */
+    }
+  }
+  while (tempDirs.length) {
+    const dir = tempDirs.pop();
+    if (dir) fs.rmSync(dir, { recursive: true, force: true });
+  }
+});
+
+describe("M5 Product SQLite schema migration", () => {
+  it("migrates M3 DB additively to m5, preserves Project/LPS/Cycle/Decision tables", async () => {
+    const dbPath = tempDbPath("m3-legacy.sqlite");
+    {
+      const bootstrap = buildProjectServices(dbPath);
+      const created = await bootstrap.createProject.execute({
+        projectId: "prj:m5-mig",
+        title: "M3 legacy project",
+        objective: "preserve-m3",
+        context: "m3-context",
+        scope: "m3-scope",
+        doctrinePackagePin: VALID_PIN,
+        createdBy: ACTOR,
+        lpsVersionId: "lps:m5-mig-v1",
+        idempotencyKey: "idem:m5-mig",
+      });
+      expect(created.ok).toBe(true);
+      const cycles = createSqliteCycleServices({
+        projectServices: bootstrap,
+        productStore: bootstrap.store,
+      });
+      const cycle = await cycles.createCycle.execute({
+        cycleInstanceId: "cyc:m5-mig-1",
+        cycleTypeId: "cyc:delivery",
+        projectId: "prj:m5-mig",
+        signals: {},
+        createdBy: ACTOR,
+      });
+      expect(cycle.ok).toBe(true);
+      bootstrap.dispose();
+      openServices.pop();
+    }
+
+    {
+      const db = new DatabaseSync(dbPath);
+      db.exec("DROP TABLE IF EXISTS oa_execution_attempt_result_budget");
+      db.exec("DROP TABLE IF EXISTS oa_execution_attempt_active");
+      db.exec("DROP TABLE IF EXISTS oa_execution_attempts");
+      db.exec("DROP TABLE IF EXISTS oa_evidence_idempotency");
+      db.exec("DROP TABLE IF EXISTS oa_evidence");
+      db.exec("DROP TABLE IF EXISTS oa_review_bundle_idempotency");
+      db.exec("DROP TABLE IF EXISTS oa_review_bundles");
+      db.prepare(
+        `UPDATE schema_meta SET value = ? WHERE key = 'schema_version'`,
+      ).run(PRODUCT_SCHEMA_VERSION_M3);
+      db.close();
+    }
+
+    const svc = buildProjectServices(dbPath);
+    const version = svc.store.db
+      .prepare("SELECT value FROM schema_meta WHERE key = ?")
+      .get("schema_version") as { value: string };
+    expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m5-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION_M3).toBe("m3-0.1.0");
+
+    expect(tableExists(svc.store.db, "oa_human_decisions")).toBe(true);
+    expect(tableExists(svc.store.db, "oa_execution_contracts")).toBe(true);
+    expect(tableExists(svc.store.db, "oa_execution_attempts")).toBe(true);
+    expect(tableExists(svc.store.db, "oa_evidence")).toBe(true);
+    expect(tableExists(svc.store.db, "oa_review_bundles")).toBe(true);
+    expect(
+      tableExists(svc.store.db, "oa_execution_attempt_result_budget"),
+    ).toBe(true);
+
+    const project = await svc.getProject.execute({ projectId: "prj:m5-mig" });
+    expect(project.ok).toBe(true);
+    const cycles = createSqliteCycleServices({
+      projectServices: svc,
+      productStore: svc.store,
+    });
+    const cycle = await cycles.cycles.findById("cyc:m5-mig-1");
+    expect(cycle?.cycleInstanceId).toBe("cyc:m5-mig-1");
+  });
+
+  it("migrates M2 DB through M3+M5 ladder", async () => {
+    const dbPath = tempDbPath("m2-legacy.sqlite");
+    {
+      const bootstrap = buildProjectServices(dbPath);
+      bootstrap.dispose();
+      openServices.pop();
+    }
+    {
+      const db = new DatabaseSync(dbPath);
+      db.exec("DROP TABLE IF EXISTS oa_human_decisions");
+      db.exec("DROP TABLE IF EXISTS oa_execution_contracts");
+      db.exec("DROP TABLE IF EXISTS oa_execution_attempt_result_budget");
+      db.exec("DROP TABLE IF EXISTS oa_execution_attempt_active");
+      db.exec("DROP TABLE IF EXISTS oa_execution_attempts");
+      db.exec("DROP TABLE IF EXISTS oa_evidence_idempotency");
+      db.exec("DROP TABLE IF EXISTS oa_evidence");
+      db.exec("DROP TABLE IF EXISTS oa_review_bundle_idempotency");
+      db.exec("DROP TABLE IF EXISTS oa_review_bundles");
+      db.prepare(
+        `UPDATE schema_meta SET value = ? WHERE key = 'schema_version'`,
+      ).run(PRODUCT_SCHEMA_VERSION_M2);
+      db.close();
+    }
+    const svc = buildProjectServices(dbPath);
+    const version = svc.store.db
+      .prepare("SELECT value FROM schema_meta WHERE key = ?")
+      .get("schema_version") as { value: string };
+    expect(version.value).toBe("m5-0.1.0");
+    expect(tableExists(svc.store.db, "oa_execution_attempts")).toBe(true);
+  });
+
+  it("m5 reopen is idempotent", () => {
+    const dbPath = tempDbPath("m5-reopen.sqlite");
+    const a = buildProjectServices(dbPath);
+    a.dispose();
+    openServices.pop();
+    const b = buildProjectServices(dbPath);
+    const version = b.store.db
+      .prepare("SELECT value FROM schema_meta WHERE key = ?")
+      .get("schema_version") as { value: string };
+    expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
+  });
+
+  it("fails closed on unknown schema version", () => {
+    const dbPath = tempDbPath("unknown.sqlite");
+    const db = new DatabaseSync(dbPath);
+    db.exec(`
+CREATE TABLE schema_meta (key TEXT PRIMARY KEY NOT NULL, value TEXT NOT NULL);
+INSERT INTO schema_meta(key, value) VALUES ('schema_version', 'm99-future');
+`);
+    db.close();
+    expect(() => buildProjectServices(dbPath)).toThrow(
+      /product_sqlite_unsupported_schema/,
+    );
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/project/m5RestartProcessProof.test.ts b/projects/sfia-studio/app/__tests__/oa/project/m5RestartProcessProof.test.ts
new file mode 100644
index 0000000..ef7476c
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/project/m5RestartProcessProof.test.ts
@@ -0,0 +1,134 @@
+/**
+ * M5 B1 strong restart proof — two independent Node processes, same DB file.
+ * Real use cases: Attempt succeeded + Evidence(execution_attempt) + RB + W1 + rehydrate.
+ * @vitest-environment node
+ */
+import { spawnSync } from "node:child_process";
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+
+const APP_ROOT = path.resolve(__dirname, "../../..");
+const WORKER = path.join(
+  APP_ROOT,
+  "__tests__/oa/project/m5RestartProcessWorker.ts",
+);
+const TSX = path.join(APP_ROOT, "node_modules/.bin/tsx");
+
+describe("M5 process restart proof (B1)", () => {
+  it(
+    "create via real use cases in process A, rehydrate in process B",
+    () => {
+      expect(fs.existsSync(TSX)).toBe(true);
+      const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m5-proc-"));
+      const dbPath = path.join(dir, "oa-product.sqlite");
+      const projectId = "prj:m5-proc";
+
+      try {
+        const create = spawnSync(TSX, [WORKER, "create", dbPath, projectId], {
+          cwd: APP_ROOT,
+          encoding: "utf8",
+          env: { ...process.env },
+          timeout: 90_000,
+        });
+        expect(create.status, create.stderr || create.stdout).toBe(0);
+        const created = JSON.parse(create.stdout.trim()) as {
+          ok: boolean;
+          attemptId?: string;
+          resultRef?: string;
+          evidenceId?: string;
+          reviewBundleId?: string;
+          executionContractId?: string;
+          lpsVersion?: number;
+          evidence?: {
+            sourceKind?: string;
+            technicalResultRef?: string | null;
+            bindings?: Record<string, string | undefined>;
+          };
+          recommendation?: {
+            kind?: string;
+            executionAuthority?: boolean;
+            gateConsumed?: boolean;
+            decisionCreated?: boolean;
+            attemptAutoLaunchNextCycle?: boolean;
+          };
+        };
+        expect(created.ok).toBe(true);
+        expect(created.attemptId).toBe("xat:m5-proc");
+        expect(created.resultRef).toBe("res:m5-proc-fixture");
+        expect(created.evidenceId).toBe("ev:m5-proc");
+        expect(created.reviewBundleId).toBe("rb:m5-proc");
+        expect(created.executionContractId).toBe("xct:m5-proc");
+        expect(created.evidence?.sourceKind).toBe("execution_attempt");
+        expect(created.evidence?.technicalResultRef).toBe(
+          "res:m5-proc-fixture",
+        );
+        expect(created.evidence?.bindings?.projectId).toBe(projectId);
+        expect(created.evidence?.bindings?.executionContractId).toBe(
+          "xct:m5-proc",
+        );
+        expect(created.recommendation?.kind).toBe("recommendation");
+        expect(created.recommendation?.executionAuthority).toBe(false);
+        expect(created.recommendation?.gateConsumed).toBe(false);
+        expect(created.recommendation?.decisionCreated).toBe(false);
+        expect(created.recommendation?.attemptAutoLaunchNextCycle).toBe(false);
+
+        const read = spawnSync(TSX, [WORKER, "read", dbPath, projectId], {
+          cwd: APP_ROOT,
+          encoding: "utf8",
+          env: { ...process.env },
+          timeout: 90_000,
+        });
+        expect(read.status, read.stderr || read.stdout).toBe(0);
+        const loaded = JSON.parse(read.stdout.trim()) as {
+          ok: boolean;
+          attemptStatus?: string;
+          resultRef?: string;
+          evidenceId?: string;
+          reviewBundleId?: string;
+          evidence?: {
+            sourceKind?: string;
+            technicalResultRef?: string | null;
+            bindings?: Record<string, string | undefined>;
+          };
+          evidenceIds?: string[];
+          reviewBundleIds?: string[];
+          lpsVersion?: number;
+          recommendation?: {
+            kind?: string;
+            executionAuthority?: boolean;
+            gateConsumed?: boolean;
+            decisionCreated?: boolean;
+            attemptAutoLaunchNextCycle?: boolean;
+          };
+        };
+        expect(loaded.ok).toBe(true);
+        expect(loaded.attemptStatus).toBe("succeeded");
+        expect(loaded.resultRef).toBe(created.resultRef);
+        expect(loaded.evidenceId).toBe("ev:m5-proc");
+        expect(loaded.reviewBundleId).toBe("rb:m5-proc");
+        expect(loaded.evidence?.sourceKind).toBe("execution_attempt");
+        expect(loaded.evidence?.technicalResultRef).toBe(created.resultRef);
+        expect(loaded.evidence?.bindings?.projectId).toBe(projectId);
+        expect(loaded.evidence?.bindings?.executionContractId).toBe(
+          "xct:m5-proc",
+        );
+        expect(loaded.evidence?.bindings?.executionAttemptId).toBe(
+          "xat:m5-proc",
+        );
+        expect(loaded.evidenceIds).toEqual(["ev:m5-proc"]);
+        expect(loaded.reviewBundleIds).toEqual(["rb:m5-proc"]);
+        expect(loaded.lpsVersion).toBe(created.lpsVersion);
+        expect(loaded.recommendation?.kind).toBe("recommendation");
+        expect(loaded.recommendation?.executionAuthority).toBe(false);
+        expect(loaded.recommendation?.gateConsumed).toBe(false);
+        expect(loaded.recommendation?.decisionCreated).toBe(false);
+        expect(loaded.recommendation?.attemptAutoLaunchNextCycle).toBe(false);
+      } finally {
+        fs.rmSync(dir, { recursive: true, force: true });
+      }
+    },
+    90_000,
+  );
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/project/m5RestartProcessWorker.ts b/projects/sfia-studio/app/__tests__/oa/project/m5RestartProcessWorker.ts
new file mode 100644
index 0000000..44bfb6d
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/project/m5RestartProcessWorker.ts
@@ -0,0 +1,538 @@
+/**
+ * Child-process worker for M5 B1 restart proof.
+ * Usage: tsx m5RestartProcessWorker.ts <create|read> <dbPath> <projectId>
+ *
+ * Create: Product SQLite + real use cases (select → start → result → ingest → RB → W1).
+ * Read: reopen same dbPath, assert durability, rehydrate via RecommendNextGate path.
+ *
+ * Does NOT import vitest helpers (child process / tsx).
+ */
+import path from "node:path";
+import {
+  createTestDoctrineResolver,
+  FixedClock,
+  type Digest,
+  type DoctrinePackagePin,
+  type ProvenanceRecord,
+} from "@/lib/oa/doctrine";
+import {
+  createTestSqliteProductProjectServices,
+  type ActorReference,
+} from "@/lib/oa/project";
+import { createSqliteCycleServices } from "@/lib/oa/cycle";
+import {
+  createTestSqliteDecisionServices,
+  MemoryAuthorityResolver,
+} from "@/lib/oa/decision";
+import { createTestSqliteExecutionContractServices } from "@/lib/oa/execution-contract";
+import {
+  createTestSqliteExecutionAttemptServices,
+  TestExecutionAdapter,
+  type AgentDescriptor,
+} from "@/lib/oa/execution-attempt";
+import { createTestSqliteEvidenceReviewServices } from "@/lib/oa/evidence-review";
+import { appendEvidenceOutcomeToLps } from "@/features/project-assistant/f3/appendEvidenceOutcomeToLps";
+import { createAttemptReaderBridge } from "@/features/project-assistant/f3/attemptReaderBridge";
+import { rehydrateEvidenceOutcomeFromLps } from "@/features/project-assistant/f3/rehydrateEvidenceOutcomeFromLps";
+
+const APP_ROOT = path.resolve(__dirname, "../../..");
+const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
+const SCHEMAS = path.resolve(
+  APP_ROOT,
+  "../sfia-v3-modeled/v3-native-option-a/schemas",
+);
+
+const NOW = "2026-07-25T06:00:00.000Z";
+
+const VALID_DIGEST =
+  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
+
+const VALID_PIN: DoctrinePackagePin = {
+  doctrinePackageId: "pkg:studio-v3-oa",
+  version: "1.0.0",
+  digest: VALID_DIGEST,
+};
+
+const MORRIS_ACTOR: ActorReference = {
+  actorId: "actor:morris",
+  role: "decision_maker",
+  displayName: "Morris",
+  authorityLevel: "N3",
+};
+
+const CONTRACT_SCOPE = "docs+schemas+examples only";
+const CONTRACT_ACTION = "publish-modeled-pack";
+const CONTRACT_TARGET = "sfia-v3-modeled/v3-native-option-a";
+const CONTRACT_CAPABILITY = "cap:git-docs";
+
+const OPTIONS = [
+  { optionId: "opt:go", label: "Go", recommended: true },
+  { optionId: "opt:hold", label: "Hold" },
+];
+
+const ATTEMPT_ID = "xat:m5-proc";
+const CONTRACT_ID = "xct:m5-proc";
+const EVIDENCE_ID = "ev:m5-proc";
+const REVIEW_BUNDLE_ID = "rb:m5-proc";
+const DECISION_ID = "dec:m5-proc";
+const CYCLE_ID = "cyc:m5-proc";
+const RESULT_REF = "res:m5-proc-fixture";
+const AUTHORITY_EVIDENCE_ID = "evd:morris-n3";
+
+function provenance(actorId: string, id: string): ProvenanceRecord {
+  return {
+    schemaVersion: "0.1.0-oa",
+    provenanceRecordId: `prv:${id}`,
+    actor: { actorId, role: "system", authorityLevel: "N1" },
+    source: "system",
+    timestamp: NOW,
+    correlationId: "cor:agent-registry-fixture",
+  };
+}
+
+function agentDescriptor(
+  overrides: Partial<AgentDescriptor> & { agentId: string },
+): AgentDescriptor {
+  return {
+    schemaVersion: "0.1.0-oa",
+    agentType: "docs_writer",
+    adapterRef: "adp:test-fixture",
+    supportedCapabilities: [CONTRACT_CAPABILITY],
+    allowedActions: [CONTRACT_ACTION],
+    allowedTargets: [CONTRACT_TARGET],
+    allowedScopes: [CONTRACT_SCOPE],
+    trustLevel: "fixture",
+    executionMode: "adapter_sync_fixture",
+    healthStatus: "healthy",
+    version: 1,
+    enabled: true,
+    createdAt: NOW,
+    provenance: provenance("actor:system", overrides.agentId.replace(/\W/g, "")),
+    ...overrides,
+  };
+}
+
+function defaultAgents(): AgentDescriptor[] {
+  return [
+    agentDescriptor({ agentId: "agt:alpha" }),
+    agentDescriptor({ agentId: "agt:beta" }),
+    agentDescriptor({ agentId: "agt:disabled", enabled: false }),
+    agentDescriptor({ agentId: "agt:sick", healthStatus: "degraded" }),
+    agentDescriptor({
+      agentId: "agt:wrong-scope",
+      allowedScopes: ["everything"],
+    }),
+    agentDescriptor({
+      agentId: "agt:wrong-capability",
+      supportedCapabilities: ["cap:sql"],
+    }),
+  ];
+}
+
+function fail(code: number, payload: unknown): never {
+  console.error(JSON.stringify(payload));
+  process.exit(code);
+}
+
+function assertOk<T extends { ok: boolean }>(
+  result: T,
+  code: number,
+  label: string,
+): asserts result is T & { ok: true } {
+  if (!result.ok) {
+    fail(code, { label, result });
+  }
+}
+
+function registerMorris(
+  authority: MemoryAuthorityResolver,
+  scope: string,
+  evidenceId: string,
+): void {
+  try {
+    authority.register({
+      evidenceId,
+      actorId: "actor:morris",
+      level: "N3",
+      scope,
+      issuedAt: "2026-07-01T00:00:00.000Z",
+      source: "registry",
+      canActAsMorris: true,
+    });
+  } catch (err) {
+    if (!(err instanceof Error) || err.message !== "evidence_immutable") {
+      throw err;
+    }
+  }
+}
+
+async function boot(dbPath: string) {
+  const { resolver } = createTestDoctrineResolver({
+    registryRoot: FIXTURES,
+    schemasRoot: SCHEMAS,
+  });
+  const projects = createTestSqliteProductProjectServices({
+    doctrineResolver: resolver,
+    fixedNowIso: NOW,
+    dbPath,
+  });
+  const cycles = createSqliteCycleServices({
+    projectServices: projects,
+    productStore: projects.store,
+    clock: new FixedClock(NOW),
+  });
+  const authority = new MemoryAuthorityResolver();
+  const decisions = createTestSqliteDecisionServices({
+    projectServices: projects,
+    cycleServices: cycles,
+    productStore: projects.store,
+    authorityResolver: authority,
+    fixedNowIso: NOW,
+  });
+  const execution = createTestSqliteExecutionContractServices({
+    projectServices: projects,
+    decisionServices: decisions,
+    cycleServices: cycles,
+    productStore: projects.store,
+    authorityResolver: authority,
+    fixedNowIso: NOW,
+  });
+  const adapter = new TestExecutionAdapter();
+  const attempts = createTestSqliteExecutionAttemptServices({
+    decisionServices: decisions,
+    executionContractServices: execution,
+    productStore: projects.store,
+    agents: defaultAgents(),
+    adapter,
+    authorityResolver: authority,
+    fixedNowIso: NOW,
+  });
+  return { projects, cycles, decisions, authority, execution, attempts, adapter };
+}
+
+async function createMode(dbPath: string, projectId: string): Promise<void> {
+  const stack = await boot(dbPath);
+  try {
+    const created = await stack.projects.createProject.execute({
+      projectId,
+      title: "M5 Process Restart",
+      objective: "m5-process-restart-objective",
+      context: "m5-process-restart-context",
+      scope: "m5-process-restart-scope",
+      doctrinePackagePin: VALID_PIN,
+      createdBy: {
+        actorId: MORRIS_ACTOR.actorId,
+        role: "project_owner",
+        displayName: MORRIS_ACTOR.displayName,
+        authorityLevel: "N3",
+      },
+      lpsVersionId: "lps:m5-proc-v1",
+      idempotencyKey: `idem:${projectId}`,
+    });
+    assertOk(created, 2, "createProject");
+
+    registerMorris(stack.authority, CONTRACT_SCOPE, AUTHORITY_EVIDENCE_ID);
+    registerMorris(stack.authority, "subj:exec-gate", "evd:morris-subjexecgate");
+
+    const decided = await stack.decisions.recordHumanDecision.execute({
+      decisionId: DECISION_ID,
+      projectId,
+      subject: "subj:exec-gate",
+      options: OPTIONS,
+      selectedOptionId: "opt:go",
+      actor: MORRIS_ACTOR,
+      authority: "morris",
+      reversible: false,
+      authorityEvidenceId: "evd:morris-subjexecgate",
+    });
+    assertOk(decided, 3, "recordHumanDecision");
+
+    const cycle = await stack.cycles.createCycle.execute({
+      cycleInstanceId: CYCLE_ID,
+      cycleTypeId: "cyc:delivery",
+      projectId,
+      signals: {},
+      requestedProfile: "Standard",
+      createdBy: MORRIS_ACTOR,
+    });
+    assertOk(cycle, 4, "createCycle");
+
+    const built = await stack.execution.buildExecutionContract.execute({
+      executionContractId: CONTRACT_ID,
+      projectId,
+      decisionRefs: [DECISION_ID],
+      cycleInstanceId: CYCLE_ID,
+      action: CONTRACT_ACTION,
+      target: CONTRACT_TARGET,
+      scope: CONTRACT_SCOPE,
+      requiredCapabilities: [CONTRACT_CAPABILITY],
+      requiredAuthority: "N3",
+      constraints: ["no-runtime-code", "no-sql"],
+      stopConditions: ["DOCTRINE_UNRESOLVED", "AUTHORITY_DENIED"],
+      evidenceRequirements: ["evreq:schemas", "evreq:examples"],
+      reversibility: "partially_reversible",
+      idempotencyKey: "idem-xct-m5-proc",
+      correlationId: "cor:m5-proc",
+      actor: MORRIS_ACTOR,
+      authorityEvidenceId: AUTHORITY_EVIDENCE_ID,
+    });
+    assertOk(built, 5, "buildExecutionContract");
+
+    const validated = await stack.execution.validateExecutionContract.execute({
+      executionContractId: CONTRACT_ID,
+      actor: MORRIS_ACTOR,
+      authorityEvidenceId: AUTHORITY_EVIDENCE_ID,
+    });
+    assertOk(validated, 6, "validateExecutionContract");
+
+    const confirmationId = "cfm:m5-proc";
+    const requested = await stack.decisions.requestConfirmation.execute({
+      confirmationId,
+      level: "N3",
+      actionRef: "act:confirm-exec",
+      requestedBy: MORRIS_ACTOR,
+      requestedTo: MORRIS_ACTOR,
+      scope: CONTRACT_SCOPE,
+      idempotencyKey: `idem-${confirmationId}`,
+      decisionRef: DECISION_ID,
+    });
+    assertOk(requested, 7, "requestConfirmation");
+
+    const granted = await stack.decisions.grantConfirmation.execute({
+      confirmationId,
+      actor: MORRIS_ACTOR,
+      authorityEvidenceId: AUTHORITY_EVIDENCE_ID,
+    });
+    assertOk(granted, 8, "grantConfirmation");
+
+    const confirmed = await stack.execution.confirmExecutionContract.execute({
+      executionContractId: CONTRACT_ID,
+      confirmationId,
+      actor: MORRIS_ACTOR,
+      authorityEvidenceId: AUTHORITY_EVIDENCE_ID,
+      expectedVersion: validated.contract.version,
+    });
+    assertOk(confirmed, 9, "confirmExecutionContract");
+
+    const selected = await stack.attempts.selectExecutionAgent.execute({
+      attemptId: ATTEMPT_ID,
+      executionContractId: CONTRACT_ID,
+      idempotencyKey: "idem-attempt-m5-proc",
+      actor: MORRIS_ACTOR,
+      authorityEvidenceId: AUTHORITY_EVIDENCE_ID,
+      selectionProfile: "standard",
+    });
+    assertOk(selected, 10, "selectExecutionAgent");
+
+    const started = await stack.attempts.startExecution.execute({
+      attemptId: ATTEMPT_ID,
+      actor: MORRIS_ACTOR,
+      authorityEvidenceId: AUTHORITY_EVIDENCE_ID,
+    });
+    assertOk(started, 11, "startExecution");
+
+    const recorded = await stack.attempts.recordExecutionResult.execute({
+      attemptId: ATTEMPT_ID,
+      adapterId: "adp:test-fixture",
+      resultRef: RESULT_REF,
+      technicalExitCode: 0,
+    });
+    assertOk(recorded, 12, "recordExecutionResult");
+    if (recorded.attempt.status !== "succeeded") {
+      fail(12, {
+        label: "attempt_not_succeeded",
+        status: recorded.attempt.status,
+      });
+    }
+
+    const evidence = createTestSqliteEvidenceReviewServices({
+      productStore: stack.projects.store,
+      fixedNowIso: NOW,
+      attemptReader: createAttemptReaderBridge(stack.attempts.attempts),
+    });
+
+    const ingested = await evidence.ingestExecutionAttemptEvidence.execute({
+      evidenceId: EVIDENCE_ID,
+      executionAttemptId: ATTEMPT_ID,
+      idempotencyKey: "idem:ev:m5-proc",
+      actor: MORRIS_ACTOR,
+      classification: "internal",
+      storageMode: "metadata_only",
+      bindings: {
+        projectId,
+        executionContractId: CONTRACT_ID,
+      },
+    });
+    assertOk(ingested, 13, "ingestExecutionAttemptEvidence");
+
+    const bundle = await evidence.createReviewBundle.execute({
+      reviewBundleId: REVIEW_BUNDLE_ID,
+      idempotencyKey: "idem:rb:m5-proc",
+      actor: MORRIS_ACTOR,
+      projectId,
+      executionContractId: CONTRACT_ID,
+      evidenceIds: [EVIDENCE_ID],
+    });
+    assertOk(bundle, 14, "createReviewBundle");
+
+    const linked = await appendEvidenceOutcomeToLps({
+      projectId,
+      evidenceId: EVIDENCE_ID,
+      reviewBundleId: REVIEW_BUNDLE_ID,
+      projectServices: stack.projects,
+    });
+    if (!linked.ok) {
+      fail(15, { label: "appendEvidenceOutcomeToLps", linked });
+    }
+
+    const preRestart = await rehydrateEvidenceOutcomeFromLps({
+      projectId,
+      deps: {
+        projectServices: stack.projects,
+        evidenceReviewServices: evidence,
+      },
+    });
+    if (!preRestart.ok) {
+      fail(16, { label: "rehydrate_pre_restart", preRestart });
+    }
+
+    process.stdout.write(
+      `${JSON.stringify({
+        ok: true,
+        attemptId: ATTEMPT_ID,
+        resultRef: RESULT_REF,
+        evidenceId: EVIDENCE_ID,
+        reviewBundleId: REVIEW_BUNDLE_ID,
+        executionContractId: CONTRACT_ID,
+        lpsVersion: linked.lpsVersion,
+        evidence: {
+          sourceKind: ingested.evidence.sourceKind,
+          technicalResultRef: ingested.evidence.technicalResultRef ?? null,
+          bindings: ingested.evidence.bindings,
+        },
+        recommendation: {
+          kind: preRestart.recommendation.kind,
+          executionAuthority: preRestart.recommendation.executionAuthority,
+          gateConsumed: preRestart.recommendation.gateConsumed,
+          decisionCreated: preRestart.recommendation.decisionCreated,
+          attemptAutoLaunchNextCycle:
+            preRestart.recommendation.attemptAutoLaunchNextCycle,
+        },
+      })}\n`,
+    );
+  } finally {
+    stack.projects.dispose();
+  }
+}
+
+async function readMode(dbPath: string, projectId: string): Promise<void> {
+  const stack = await boot(dbPath);
+  try {
+    const evidence = createTestSqliteEvidenceReviewServices({
+      productStore: stack.projects.store,
+      fixedNowIso: NOW,
+      attemptReader: createAttemptReaderBridge(stack.attempts.attempts),
+    });
+
+    const attempt = await stack.attempts.attempts.findById(ATTEMPT_ID);
+    const ev = await evidence.repository.findById(EVIDENCE_ID);
+    const rb = await evidence.reviewBundleRepository.findById(REVIEW_BUNDLE_ID);
+    const lps = await stack.projects.getCurrentLivingProjectState.execute({
+      projectId,
+    });
+    if (!attempt || !ev || !rb || !lps.ok) {
+      process.stdout.write(
+        `${JSON.stringify({
+          ok: false,
+          attempt: !!attempt,
+          evidence: !!ev,
+          reviewBundle: !!rb,
+          lpsOk: lps.ok,
+        })}\n`,
+      );
+      process.exit(6);
+    }
+
+    if (attempt.status !== "succeeded") {
+      fail(7, { label: "attempt_status", status: attempt.status });
+    }
+    if (attempt.resultRef !== RESULT_REF) {
+      fail(7, {
+        label: "resultRef_mismatch",
+        expected: RESULT_REF,
+        actual: attempt.resultRef,
+      });
+    }
+    if (ev.sourceKind !== "execution_attempt") {
+      fail(8, { label: "sourceKind", sourceKind: ev.sourceKind });
+    }
+    if (ev.technicalResultRef !== RESULT_REF) {
+      fail(8, {
+        label: "technicalResultRef",
+        expected: RESULT_REF,
+        actual: ev.technicalResultRef,
+      });
+    }
+
+    const rehydrated = await rehydrateEvidenceOutcomeFromLps({
+      projectId,
+      deps: {
+        projectServices: stack.projects,
+        evidenceReviewServices: evidence,
+      },
+    });
+    if (!rehydrated.ok) {
+      fail(9, { label: "rehydrateEvidenceOutcomeFromLps", rehydrated });
+    }
+
+    process.stdout.write(
+      `${JSON.stringify({
+        ok: true,
+        attemptStatus: attempt.status,
+        resultRef: attempt.resultRef,
+        evidenceId: ev.evidenceId,
+        reviewBundleId: rb.reviewBundleId,
+        evidence: {
+          sourceKind: ev.sourceKind,
+          technicalResultRef: ev.technicalResultRef ?? null,
+          bindings: ev.bindings,
+        },
+        evidenceIds: lps.livingProjectState.evidenceIds ?? [],
+        reviewBundleIds: lps.livingProjectState.reviewBundleIds ?? [],
+        lpsVersion: lps.livingProjectState.version,
+        executionContractId: CONTRACT_ID,
+        recommendation: {
+          kind: rehydrated.recommendation.kind,
+          executionAuthority: rehydrated.recommendation.executionAuthority,
+          gateConsumed: rehydrated.recommendation.gateConsumed,
+          decisionCreated: rehydrated.recommendation.decisionCreated,
+          attemptAutoLaunchNextCycle:
+            rehydrated.recommendation.attemptAutoLaunchNextCycle,
+        },
+      })}\n`,
+    );
+  } finally {
+    stack.projects.dispose();
+  }
+}
+
+async function main(): Promise<void> {
+  const [, , mode, dbPath, projectId] = process.argv;
+  if (!mode || !dbPath || !projectId) {
+    throw new Error("usage: <create|read> <dbPath> <projectId>");
+  }
+  if (mode === "create") {
+    await createMode(dbPath, projectId);
+    return;
+  }
+  if (mode === "read") {
+    await readMode(dbPath, projectId);
+    return;
+  }
+  throw new Error(`unknown mode ${mode}`);
+}
+
+main().catch((err) => {
+  console.error(err instanceof Error ? err.stack : String(err));
+  process.exit(1);
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/project/m5W1LpsAppend.test.ts b/projects/sfia-studio/app/__tests__/oa/project/m5W1LpsAppend.test.ts
new file mode 100644
index 0000000..32f9029
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/project/m5W1LpsAppend.test.ts
@@ -0,0 +1,212 @@
+/**
+ * M5-B W1 — LPS factual evidenceIds / reviewBundleIds append + carry-forward.
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, describe, expect, it } from "vitest";
+import {
+  createTestDoctrineResolver,
+  type Digest,
+  type DoctrinePackagePin,
+} from "@/lib/oa/doctrine";
+import {
+  createTestSqliteProductProjectServices,
+  type ActorReference,
+  type SqliteProductProjectServices,
+} from "@/lib/oa/project";
+import { appendEvidenceOutcomeToLps } from "@/features/project-assistant/f3/appendEvidenceOutcomeToLps";
+import {
+  SFIA_STUDIO_SYSTEM_FACTUAL_WRITER,
+  SFIA_STUDIO_SYSTEM_FACTUAL_WRITER_ID,
+} from "@/features/project-assistant/f3/systemFactualWriter";
+import { LOCAL_MORRIS_ACTOR } from "@/features/project-assistant/f2/recordDecision";
+
+const APP_ROOT = path.resolve(__dirname, "../../..");
+const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
+const SCHEMAS = path.resolve(
+  APP_ROOT,
+  "../sfia-v3-modeled/v3-native-option-a/schemas",
+);
+
+const VALID_DIGEST =
+  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
+
+const VALID_PIN: DoctrinePackagePin = {
+  doctrinePackageId: "pkg:studio-v3-oa",
+  version: "1.0.0",
+  digest: VALID_DIGEST,
+};
+
+const ACTOR: ActorReference = {
+  actorId: "actor:morris",
+  role: "project_owner",
+  displayName: "Morris",
+  authorityLevel: "N3",
+};
+
+const tempDirs: string[] = [];
+const openServices: Array<{ dispose: () => void }> = [];
+
+function tempDbPath(name: string): string {
+  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m5-w1-"));
+  tempDirs.push(dir);
+  return path.join(dir, name);
+}
+
+function openProjects(dbPath: string): SqliteProductProjectServices {
+  const { resolver } = createTestDoctrineResolver({
+    registryRoot: FIXTURES,
+    schemasRoot: SCHEMAS,
+  });
+  const svc = createTestSqliteProductProjectServices({
+    doctrineResolver: resolver,
+    fixedNowIso: "2026-08-15T09:30:00.000Z",
+    dbPath,
+  });
+  openServices.push(svc);
+  return svc;
+}
+
+afterEach(() => {
+  while (openServices.length) {
+    try {
+      openServices.pop()?.dispose();
+    } catch {
+      /* ignore */
+    }
+  }
+  while (tempDirs.length) {
+    const dir = tempDirs.pop();
+    if (dir) fs.rmSync(dir, { recursive: true, force: true });
+  }
+});
+
+describe("M5 W1 LPS evidence/RB append", () => {
+  it("appends evidenceIds and reviewBundleIds factually", async () => {
+    const dbPath = tempDbPath("w1.sqlite");
+    const projects = openProjects(dbPath);
+    await projects.createProject.execute({
+      projectId: "prj:m5-w1",
+      title: "M5 W1",
+      objective: "m5-w1-objective",
+      context: "m5-w1-context",
+      scope: "m5-w1-scope",
+      doctrinePackagePin: VALID_PIN,
+      createdBy: ACTOR,
+      lpsVersionId: "lps:m5-w1-v1",
+      idempotencyKey: "idem:m5-w1",
+    });
+
+    const linked = await appendEvidenceOutcomeToLps({
+      projectId: "prj:m5-w1",
+      evidenceId: "ev:m5-w1",
+      reviewBundleId: "rb:m5-w1",
+      projectServices: projects,
+    });
+    expect(linked.ok).toBe(true);
+    if (!linked.ok) return;
+    expect(linked.lpsVersion).toBe(2);
+
+    const lps = await projects.getCurrentLivingProjectState.execute({
+      projectId: "prj:m5-w1",
+    });
+    expect(lps.ok).toBe(true);
+    if (!lps.ok) return;
+    expect(lps.livingProjectState.evidenceIds).toEqual(["ev:m5-w1"]);
+    expect(lps.livingProjectState.reviewBundleIds).toEqual(["rb:m5-w1"]);
+  });
+
+  it("uses system factual writer provenance (not Morris)", async () => {
+    const dbPath = tempDbPath("w1-prov.sqlite");
+    const projects = openProjects(dbPath);
+    await projects.createProject.execute({
+      projectId: "prj:m5-w1-prov",
+      title: "M5 W1 provenance",
+      objective: "m5-w1-prov-objective",
+      doctrinePackagePin: VALID_PIN,
+      createdBy: ACTOR,
+      lpsVersionId: "lps:m5-w1-prov-v1",
+      idempotencyKey: "idem:m5-w1-prov",
+    });
+
+    const seeded = await projects.appendLivingProjectStateVersion.execute({
+      projectId: "prj:m5-w1-prov",
+      expectedVersion: 1,
+      objective: "m5-w1-prov-objective",
+      createdBy: ACTOR,
+      decisionIds: ["dec:keep"],
+      trajectoryId: "trj:keep",
+      trajectoryVersion: 3,
+    });
+    expect(seeded.ok).toBe(true);
+    if (!seeded.ok) return;
+
+    const linked = await appendEvidenceOutcomeToLps({
+      projectId: "prj:m5-w1-prov",
+      evidenceId: "ev:m5-w1-prov",
+      reviewBundleId: "rb:m5-w1-prov",
+      projectServices: projects,
+    });
+    expect(linked.ok).toBe(true);
+    if (!linked.ok) return;
+
+    const lps = await projects.getCurrentLivingProjectState.execute({
+      projectId: "prj:m5-w1-prov",
+    });
+    expect(lps.ok).toBe(true);
+    if (!lps.ok) return;
+    const state = lps.livingProjectState;
+    expect(state.createdBy.role).toBe("system");
+    expect(state.createdBy.authorityLevel).toBe("none");
+    expect(state.createdBy.actorId).toBe(SFIA_STUDIO_SYSTEM_FACTUAL_WRITER_ID);
+    expect(state.createdBy.actorId).not.toBe(LOCAL_MORRIS_ACTOR.actorId);
+    expect(state.createdBy.actorId).toBe(
+      SFIA_STUDIO_SYSTEM_FACTUAL_WRITER.actorId,
+    );
+    expect(state.provenance?.actor.role).toBe("system");
+    expect(state.provenance?.actor.actorId).toBe(
+      SFIA_STUDIO_SYSTEM_FACTUAL_WRITER_ID,
+    );
+    expect(state.decisionIds).toEqual(["dec:keep"]);
+    expect(state.trajectoryId).toBe("trj:keep");
+    expect(state.trajectoryVersion).toBe(3);
+    expect(state.evidenceIds).toEqual(["ev:m5-w1-prov"]);
+    expect(state.reviewBundleIds).toEqual(["rb:m5-w1-prov"]);
+  });
+
+  it("preserves evidenceIds/reviewBundleIds when omitted on later append", async () => {
+    const dbPath = tempDbPath("carry.sqlite");
+    const projects = openProjects(dbPath);
+    await projects.createProject.execute({
+      projectId: "prj:m5-carry",
+      title: "M5 carry",
+      objective: "carry-objective",
+      doctrinePackagePin: VALID_PIN,
+      createdBy: ACTOR,
+      lpsVersionId: "lps:m5-carry-v1",
+      idempotencyKey: "idem:m5-carry",
+    });
+
+    await appendEvidenceOutcomeToLps({
+      projectId: "prj:m5-carry",
+      evidenceId: "ev:keep",
+      reviewBundleId: "rb:keep",
+      projectServices: projects,
+    });
+
+    const appended = await projects.appendLivingProjectStateVersion.execute({
+      projectId: "prj:m5-carry",
+      expectedVersion: 2,
+      objective: "carry-objective-v3",
+      createdBy: ACTOR,
+      decisionIds: ["dec:1"],
+    });
+    expect(appended.ok).toBe(true);
+    if (!appended.ok) return;
+    expect(appended.livingProjectState.evidenceIds).toEqual(["ev:keep"]);
+    expect(appended.livingProjectState.reviewBundleIds).toEqual(["rb:keep"]);
+    expect(appended.livingProjectState.decisionIds).toEqual(["dec:1"]);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/project/rehydrateEvidenceOutcomeFromLps.test.ts b/projects/sfia-studio/app/__tests__/oa/project/rehydrateEvidenceOutcomeFromLps.test.ts
new file mode 100644
index 0000000..bd77aad
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/project/rehydrateEvidenceOutcomeFromLps.test.ts
@@ -0,0 +1,214 @@
+/**
+ * M5 rehydrateEvidenceOutcomeFromLps — read-only LPS → RecommendNextGate.
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, describe, expect, it } from "vitest";
+import {
+  createTestDoctrineResolver,
+  type Digest,
+  type DoctrinePackagePin,
+} from "@/lib/oa/doctrine";
+import {
+  createTestSqliteProductProjectServices,
+  type ActorReference,
+  type SqliteProductProjectServices,
+} from "@/lib/oa/project";
+import {
+  createTestSqliteEvidenceReviewServices,
+  type ActorReference as EvidenceActor,
+  type Digest as EvidenceDigest,
+} from "@/lib/oa/evidence-review";
+import { appendEvidenceOutcomeToLps } from "@/features/project-assistant/f3/appendEvidenceOutcomeToLps";
+import { rehydrateEvidenceOutcomeFromLps } from "@/features/project-assistant/f3/rehydrateEvidenceOutcomeFromLps";
+
+const APP_ROOT = path.resolve(__dirname, "../../..");
+const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
+const SCHEMAS = path.resolve(
+  APP_ROOT,
+  "../sfia-v3-modeled/v3-native-option-a/schemas",
+);
+
+const VALID_DIGEST =
+  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
+
+const EVIDENCE_DIGEST =
+  "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" as EvidenceDigest;
+
+const VALID_PIN: DoctrinePackagePin = {
+  doctrinePackageId: "pkg:studio-v3-oa",
+  version: "1.0.0",
+  digest: VALID_DIGEST,
+};
+
+const ACTOR: ActorReference = {
+  actorId: "actor:morris",
+  role: "project_owner",
+  displayName: "Morris",
+  authorityLevel: "N3",
+};
+
+const EV_ACTOR: EvidenceActor = {
+  actorId: "actor:morris",
+  role: "decision_maker",
+  authorityLevel: "N3",
+};
+
+const tempDirs: string[] = [];
+const openServices: Array<{ dispose: () => void }> = [];
+
+function tempDbPath(name: string): string {
+  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m5-reh-"));
+  tempDirs.push(dir);
+  return path.join(dir, name);
+}
+
+function openProjects(dbPath: string): SqliteProductProjectServices {
+  const { resolver } = createTestDoctrineResolver({
+    registryRoot: FIXTURES,
+    schemasRoot: SCHEMAS,
+  });
+  const svc = createTestSqliteProductProjectServices({
+    doctrineResolver: resolver,
+    fixedNowIso: "2026-08-15T11:00:00.000Z",
+    dbPath,
+  });
+  openServices.push(svc);
+  return svc;
+}
+
+afterEach(() => {
+  while (openServices.length) {
+    try {
+      openServices.pop()?.dispose();
+    } catch {
+      /* ignore */
+    }
+  }
+  while (tempDirs.length) {
+    const dir = tempDirs.pop();
+    if (dir) fs.rmSync(dir, { recursive: true, force: true });
+  }
+});
+
+describe("rehydrateEvidenceOutcomeFromLps", () => {
+  it("reads LPS refs and returns recommendation-only DTO", async () => {
+    const dbPath = tempDbPath("rehydrate.sqlite");
+    const projects = openProjects(dbPath);
+    await projects.createProject.execute({
+      projectId: "prj:m5-reh",
+      title: "M5 rehydrate",
+      objective: "m5-reh-objective",
+      doctrinePackagePin: VALID_PIN,
+      createdBy: ACTOR,
+      lpsVersionId: "lps:m5-reh-v1",
+      idempotencyKey: "idem:m5-reh",
+    });
+
+    const evidence = createTestSqliteEvidenceReviewServices({
+      productStore: projects.store,
+      fixedNowIso: "2026-08-15T11:00:00.000Z",
+    });
+    const reg = await evidence.registerEvidence.execute({
+      evidenceId: "ev:m5-reh",
+      idempotencyKey: "idem:ev:m5-reh",
+      actor: EV_ACTOR,
+      type: "document",
+      source: "fixture",
+      sourceKind: "manual",
+      bindings: {
+        projectId: "prj:m5-reh",
+        executionContractId: "xct:m5-reh",
+      },
+      classification: "internal",
+      storageMode: "metadata_only",
+      digest: EVIDENCE_DIGEST,
+    });
+    expect(reg.ok).toBe(true);
+
+    const bundle = await evidence.createReviewBundle.execute({
+      reviewBundleId: "rb:m5-reh",
+      idempotencyKey: "idem:rb:m5-reh",
+      actor: EV_ACTOR,
+      projectId: "prj:m5-reh",
+      executionContractId: "xct:m5-reh",
+      evidenceIds: ["ev:m5-reh"],
+    });
+    expect(bundle.ok).toBe(true);
+
+    const linked = await appendEvidenceOutcomeToLps({
+      projectId: "prj:m5-reh",
+      evidenceId: "ev:m5-reh",
+      reviewBundleId: "rb:m5-reh",
+      projectServices: projects,
+    });
+    expect(linked.ok).toBe(true);
+
+    const lpsBefore = await projects.getCurrentLivingProjectState.execute({
+      projectId: "prj:m5-reh",
+    });
+    expect(lpsBefore.ok).toBe(true);
+    if (!lpsBefore.ok) return;
+    const versionBefore = lpsBefore.livingProjectState.version;
+
+    const rehydrated = await rehydrateEvidenceOutcomeFromLps({
+      projectId: "prj:m5-reh",
+      deps: {
+        projectServices: projects,
+        evidenceReviewServices: evidence,
+      },
+    });
+    expect(rehydrated.ok).toBe(true);
+    if (!rehydrated.ok) return;
+
+    expect(rehydrated.evidenceIds).toEqual(["ev:m5-reh"]);
+    expect(rehydrated.reviewBundleIds).toEqual(["rb:m5-reh"]);
+    expect(rehydrated.evidence).toHaveLength(1);
+    expect(rehydrated.reviewBundles).toHaveLength(1);
+    expect(rehydrated.subjectRef).toBe("xct:m5-reh");
+    expect(rehydrated.recommendation.kind).toBe("recommendation");
+    expect(rehydrated.recommendation.executionAuthority).toBe(false);
+    expect(rehydrated.recommendation.gateConsumed).toBe(false);
+    expect(rehydrated.recommendation.decisionCreated).toBe(false);
+    expect(rehydrated.recommendation.attemptAutoLaunchNextCycle).toBe(false);
+
+    const lpsAfter = await projects.getCurrentLivingProjectState.execute({
+      projectId: "prj:m5-reh",
+    });
+    expect(lpsAfter.ok).toBe(true);
+    if (!lpsAfter.ok) return;
+    expect(lpsAfter.livingProjectState.version).toBe(versionBefore);
+    expect(lpsAfter.livingProjectState.decisionIds ?? []).toEqual(
+      lpsBefore.livingProjectState.decisionIds ?? [],
+    );
+  });
+
+  it("fails closed when LPS has no evidence/RB refs", async () => {
+    const dbPath = tempDbPath("empty.sqlite");
+    const projects = openProjects(dbPath);
+    await projects.createProject.execute({
+      projectId: "prj:m5-empty",
+      title: "M5 empty",
+      objective: "empty",
+      doctrinePackagePin: VALID_PIN,
+      createdBy: ACTOR,
+      lpsVersionId: "lps:m5-empty-v1",
+      idempotencyKey: "idem:m5-empty",
+    });
+    const evidence = createTestSqliteEvidenceReviewServices({
+      productStore: projects.store,
+    });
+    const result = await rehydrateEvidenceOutcomeFromLps({
+      projectId: "prj:m5-empty",
+      deps: {
+        projectServices: projects,
+        evidenceReviewServices: evidence,
+      },
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.code).toBe("NO_EVIDENCE_OUTCOME_REFS");
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts
index d97e15d..ea79e0e 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts
@@ -168,6 +168,7 @@ describe("F3 native fixture vertical slice", () => {
         authorityResolver: runtime.oa!.authorityResolver,
         executionContractServices: runtime.oa!.executionContractServices,
         nowIso: () => runtime.oa!.clock.nowIso(),
+        productDurablePath: runtime.oa!.productDurablePath,
       },
     });
     expect(prepared.ok).toBe(true);
@@ -206,6 +207,7 @@ describe("F3 native fixture vertical slice", () => {
         authorityResolver: runtime.oa!.authorityResolver,
         executionContractServices: runtime.oa!.executionContractServices,
         nowIso: () => runtime.oa!.clock.nowIso(),
+        productDurablePath: runtime.oa!.productDurablePath,
       },
     });
     expect(prepared.ok).toBe(true);
@@ -227,6 +229,7 @@ describe("F3 native fixture vertical slice", () => {
         authorityResolver: runtime.oa!.authorityResolver,
         executionContractServices: runtime.oa!.executionContractServices,
         nowIso: () => runtime.oa!.clock.nowIso(),
+        productDurablePath: runtime.oa!.productDurablePath,
       },
     });
     expect(bad.ok).toBe(false);
@@ -247,6 +250,7 @@ describe("F3 native fixture vertical slice", () => {
         authorityResolver: runtime.oa!.authorityResolver,
         executionContractServices: runtime.oa!.executionContractServices,
         nowIso: () => runtime.oa!.clock.nowIso(),
+        productDurablePath: runtime.oa!.productDurablePath,
       },
     });
     expect(prepared.ok).toBe(true);
@@ -314,6 +318,7 @@ describe("F3 native fixture vertical slice", () => {
         authorityResolver: runtime.oa!.authorityResolver,
         executionContractServices: runtime.oa!.executionContractServices,
         nowIso: () => runtime.oa!.clock.nowIso(),
+        productDurablePath: runtime.oa!.productDurablePath,
       },
     });
     expect(prepared.ok).toBe(true);
@@ -372,6 +377,7 @@ describe("F3 native fixture vertical slice", () => {
         authorityResolver: runtime.oa!.authorityResolver,
         executionContractServices: runtime.oa!.executionContractServices,
         nowIso: () => runtime.oa!.clock.nowIso(),
+        productDurablePath: runtime.oa!.productDurablePath,
       },
     });
     expect(prepared.ok).toBe(true);
@@ -415,6 +421,7 @@ describe("F3 native fixture vertical slice", () => {
         authorityResolver: runtime.oa!.authorityResolver,
         executionContractServices: runtime.oa!.executionContractServices,
         nowIso: () => runtime.oa!.clock.nowIso(),
+        productDurablePath: runtime.oa!.productDurablePath,
       },
     });
     expect(prepared.ok).toBe(false);
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/m5C1C2DisclosureAndRehydrateAction.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/m5C1C2DisclosureAndRehydrateAction.test.ts
new file mode 100644
index 0000000..b1504eb
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/m5C1C2DisclosureAndRehydrateAction.test.ts
@@ -0,0 +1,242 @@
+/**
+ * C1/C2 — Product durable disclosure + direct rehydrate server action proof.
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, describe, expect, it } from "vitest";
+import {
+  projectAssistantRehydrateEvidenceOutcomeAction,
+} from "@/features/project-assistant/actions";
+import {
+  F3_PROCESS_LOCAL_NOTICE,
+  F3_PRODUCT_DURABLE_NOTICE,
+  resolveF3EphemeralNotice,
+  appendEvidenceOutcomeToLps,
+} from "@/features/project-assistant/f3";
+import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
+import {
+  getRuntimeApplicationService,
+  resetRuntimeApplicationServiceForTests,
+} from "@/lib/vertical-slice-runtime";
+import type { Digest as EvidenceDigest } from "@/lib/oa/evidence-review";
+
+const APP_ROOT = path.resolve(__dirname, "../..");
+const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
+const SCHEMAS_ROOT = path.resolve(
+  APP_ROOT,
+  "../sfia-v3-modeled/v3-native-option-a/schemas",
+);
+
+const EVIDENCE_DIGEST =
+  "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" as EvidenceDigest;
+
+const tempDirs: string[] = [];
+
+class FixedIdSource implements LocalProjectIdSource {
+  private project = 0;
+  private lps = 0;
+  private correlation = 0;
+  nextProjectId(): string {
+    this.project += 1;
+    return `prj:c12-${this.project}`;
+  }
+  nextLpsVersionId(): string {
+    this.lps += 1;
+    return `lps:c12-${this.lps}`;
+  }
+  nextCorrelationId(): string {
+    this.correlation += 1;
+    return `cor:c12-${this.correlation}`;
+  }
+}
+
+afterEach(() => {
+  resetRuntimeApplicationServiceForTests();
+  while (tempDirs.length) {
+    const dir = tempDirs.pop();
+    if (dir) fs.rmSync(dir, { recursive: true, force: true });
+  }
+});
+
+function bootProductRuntime() {
+  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-c12-"));
+  tempDirs.push(dir);
+  const dbPath = path.join(dir, "oa-product.sqlite");
+  resetRuntimeApplicationServiceForTests();
+  const runtime = getRuntimeApplicationService({
+    registryRoot: REGISTRY_ROOT,
+    schemasRoot: SCHEMAS_ROOT,
+    nowIso: "2026-08-15T12:00:00.000Z",
+    idSource: new FixedIdSource(),
+    auditMode: "noop",
+    productDbPath: dbPath,
+  });
+  expect(runtime.oa).toBeTruthy();
+  expect(runtime.oa!.productDurablePath).toBe(true);
+  return { runtime, dbPath };
+}
+
+describe("C1 F3 disclosure routing", () => {
+  it("routes Product durable vs Memory process-local notices", () => {
+    expect(resolveF3EphemeralNotice(true)).toBe(F3_PRODUCT_DURABLE_NOTICE);
+    expect(resolveF3EphemeralNotice(false)).toBe(F3_PROCESS_LOCAL_NOTICE);
+    expect(F3_PRODUCT_DURABLE_NOTICE).toMatch(/Product SQLite/i);
+    expect(F3_PRODUCT_DURABLE_NOTICE).toMatch(/REAL/i);
+    expect(F3_PRODUCT_DURABLE_NOTICE).not.toMatch(/efface/i);
+    expect(F3_PRODUCT_DURABLE_NOTICE).not.toMatch(/non persisté/i);
+    expect(F3_PRODUCT_DURABLE_NOTICE).not.toMatch(/M5 CLOSED/i);
+    expect(F3_PRODUCT_DURABLE_NOTICE).not.toMatch(/ADOPTED/i);
+    expect(F3_PROCESS_LOCAL_NOTICE).toMatch(/non persisté/i);
+  });
+});
+
+describe("C2 projectAssistantRehydrateEvidenceOutcomeAction", () => {
+  it("invokes the server action on Product SQLite and returns recommendation-only", async () => {
+    const { runtime } = bootProductRuntime();
+    const created = await runtime.createProject({
+      name: "C2 Rehydrate",
+      objective: "c2-rehydrate-objective",
+      context: "c2",
+      criticality: "STANDARD",
+      constraints: ["FIXTURE ONLY"],
+      shortReference: "C2R",
+      idempotencyKey: `idem:c2-${Date.now()}`,
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+    const projectId = created.project.projectId;
+
+    const evidence =
+      await runtime.oa!.evidenceReviewServices.registerEvidence.execute({
+        evidenceId: "ev:c2-action",
+        idempotencyKey: "idem:ev:c2-action",
+        actor: {
+          actorId: "actor:morris",
+          role: "decision_maker",
+          authorityLevel: "N3",
+        },
+        type: "document",
+        source: "fixture",
+        sourceKind: "manual",
+        bindings: { projectId },
+        classification: "internal",
+        storageMode: "metadata_only",
+        digest: EVIDENCE_DIGEST,
+      });
+    expect(evidence.ok).toBe(true);
+    if (!evidence.ok) return;
+
+    const bundle =
+      await runtime.oa!.evidenceReviewServices.createReviewBundle.execute({
+        reviewBundleId: "rb:c2-action",
+        idempotencyKey: "idem:rb:c2-action",
+        actor: {
+          actorId: "actor:morris",
+          role: "decision_maker",
+          authorityLevel: "N3",
+        },
+        projectId,
+        evidenceIds: [evidence.evidence.evidenceId],
+      });
+    expect(bundle.ok).toBe(true);
+    if (!bundle.ok) return;
+
+    const linked = await appendEvidenceOutcomeToLps({
+      projectId,
+      evidenceId: evidence.evidence.evidenceId,
+      reviewBundleId: bundle.reviewBundle.reviewBundleId,
+      projectServices: runtime.oa!.projectServices,
+    });
+    expect(linked.ok).toBe(true);
+    if (!linked.ok) return;
+
+    const beforeLps =
+      await runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
+        projectId,
+      });
+    expect(beforeLps.ok).toBe(true);
+    if (!beforeLps.ok) return;
+    const beforeVersion = beforeLps.livingProjectState.version;
+    const beforeDecisionIds = [
+      ...(beforeLps.livingProjectState.decisionIds ?? []),
+    ];
+    const beforeEvidenceIds = [
+      ...(beforeLps.livingProjectState.evidenceIds ?? []),
+    ];
+    const beforeRbIds = [
+      ...(beforeLps.livingProjectState.reviewBundleIds ?? []),
+    ];
+    const beforeTrajectoryId = beforeLps.livingProjectState.trajectoryId;
+    const beforeTrajectoryVersion =
+      beforeLps.livingProjectState.trajectoryVersion;
+
+    const result = await projectAssistantRehydrateEvidenceOutcomeAction({
+      projectId,
+    });
+
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.status).toBe("ok");
+    expect(result.project.projectId).toBe(projectId);
+    expect(result.evidenceIds).toEqual(["ev:c2-action"]);
+    expect(result.reviewBundleIds).toEqual(["rb:c2-action"]);
+    expect(result.evidence.map((e) => e.evidenceId)).toEqual(["ev:c2-action"]);
+    expect(result.reviewBundles.map((b) => b.reviewBundleId)).toEqual([
+      "rb:c2-action",
+    ]);
+    expect(result.recommendation.kind).toBe("recommendation");
+    expect(result.recommendation.executionAuthority).toBe(false);
+    expect(result.recommendation.gateConsumed).toBe(false);
+    expect(result.recommendation.decisionCreated).toBe(false);
+    expect(result.recommendation.attemptAutoLaunchNextCycle).toBe(false);
+    expect(result.ephemeralNotice).toBe(F3_PRODUCT_DURABLE_NOTICE);
+    expect(result.ephemeralNotice).not.toBe(F3_PROCESS_LOCAL_NOTICE);
+    expect(result.text).toContain(F3_PRODUCT_DURABLE_NOTICE);
+    expect(result.text).not.toMatch(/efface/i);
+
+    const afterLps =
+      await runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
+        projectId,
+      });
+    expect(afterLps.ok).toBe(true);
+    if (!afterLps.ok) return;
+    expect(afterLps.livingProjectState.version).toBe(beforeVersion);
+    expect(afterLps.livingProjectState.decisionIds ?? []).toEqual(
+      beforeDecisionIds,
+    );
+    expect(afterLps.livingProjectState.evidenceIds ?? []).toEqual(
+      beforeEvidenceIds,
+    );
+    expect(afterLps.livingProjectState.reviewBundleIds ?? []).toEqual(
+      beforeRbIds,
+    );
+    expect(afterLps.livingProjectState.trajectoryId).toBe(beforeTrajectoryId);
+    expect(afterLps.livingProjectState.trajectoryVersion).toBe(
+      beforeTrajectoryVersion,
+    );
+  });
+
+  it("fail-closes via server action when LPS has no evidence/RB refs", async () => {
+    const { runtime } = bootProductRuntime();
+    const created = await runtime.createProject({
+      name: "C2 Empty",
+      objective: "c2-empty",
+      context: "c2",
+      criticality: "STANDARD",
+      constraints: ["FIXTURE ONLY"],
+      shortReference: "C2E",
+      idempotencyKey: `idem:c2-empty-${Date.now()}`,
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+
+    const result = await projectAssistantRehydrateEvidenceOutcomeAction({
+      projectId: created.project.projectId,
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.code).toBe("NO_EVIDENCE_OUTCOME_REFS");
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/m5C1PrepareMemoryDisclosure.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/m5C1PrepareMemoryDisclosure.test.ts
new file mode 100644
index 0000000..591acd7
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/m5C1PrepareMemoryDisclosure.test.ts
@@ -0,0 +1,178 @@
+/**
+ * C1 residual — prepareF3Fixture Memory surface must return PROCESS_LOCAL notice.
+ * @vitest-environment node
+ */
+import path from "node:path";
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import {
+  prepareF3Fixture,
+  F3_PROCESS_LOCAL_NOTICE,
+  F3_PRODUCT_DURABLE_NOTICE,
+} from "@/features/project-assistant/f3";
+import {
+  createProposalId,
+  F2_PROCESS_LOCAL_NOTICE,
+  resetF2ProposalStoreForTests,
+  saveProposal,
+} from "@/features/project-assistant/f2/proposalStore";
+import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
+import {
+  createTestDoctrineResolver,
+  type Digest,
+  type DoctrinePackagePin,
+} from "@/lib/oa/doctrine";
+import { createTestProjectServices } from "@/lib/oa/project";
+import { createTestCycleServices } from "@/lib/oa/cycle";
+import {
+  MemoryAuthorityResolver,
+  createTestDecisionServices,
+} from "@/lib/oa/decision";
+import { createTestExecutionContractServices } from "@/lib/oa/execution-contract";
+
+const APP_ROOT = path.resolve(__dirname, "../..");
+const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
+const SCHEMAS = path.resolve(
+  APP_ROOT,
+  "../sfia-v3-modeled/v3-native-option-a/schemas",
+);
+
+const VALID_DIGEST =
+  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
+
+const VALID_PIN: DoctrinePackagePin = {
+  doctrinePackageId: "pkg:studio-v3-oa",
+  version: "1.0.0",
+  digest: VALID_DIGEST,
+};
+
+const NOW = "2026-08-15T13:00:00.000Z";
+
+describe("C1 prepareF3Fixture Memory disclosure surface", () => {
+  beforeEach(() => {
+    resetF2ProposalStoreForTests();
+  });
+  afterEach(() => {
+    resetF2ProposalStoreForTests();
+  });
+
+  it("returns F3_PROCESS_LOCAL_NOTICE when productDurablePath=false", async () => {
+    const { resolver } = createTestDoctrineResolver({
+      registryRoot: FIXTURES,
+      schemasRoot: SCHEMAS,
+    });
+    const projects = createTestProjectServices({
+      doctrineResolver: resolver,
+      fixedNowIso: NOW,
+    });
+    const cycles = createTestCycleServices({
+      projectServices: projects,
+      fixedNowIso: NOW,
+    });
+    const authority = new MemoryAuthorityResolver();
+    const decisions = createTestDecisionServices({
+      projectServices: projects,
+      cycleServices: cycles,
+      authorityResolver: authority,
+      fixedNowIso: NOW,
+    });
+    const contracts = createTestExecutionContractServices({
+      projectServices: projects,
+      cycleServices: cycles,
+      decisionServices: decisions,
+      fixedNowIso: NOW,
+    });
+
+    const created = await projects.createProject.execute({
+      projectId: "prj:c1-memory-prep",
+      title: "C1 Memory Prepare",
+      objective: "memory-prepare-objective",
+      context: "memory",
+      scope: "memory-scope",
+      doctrinePackagePin: VALID_PIN,
+      createdBy: {
+        actorId: "actor:morris",
+        role: "project_owner",
+        displayName: "Morris",
+        authorityLevel: "N3",
+      },
+      lpsVersionId: "lps:c1-memory-v1",
+      idempotencyKey: "idem:c1-memory-prep",
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+
+    const lps = await projects.getCurrentLivingProjectState.execute({
+      projectId: "prj:c1-memory-prep",
+    });
+    expect(lps.ok).toBe(true);
+    if (!lps.ok) return;
+
+    const proposal = saveProposal({
+      proposalId: createProposalId(),
+      status: "DECISION_REQUIRED",
+      rephrasedRequest: "Préparer fixture F3 memory",
+      objective: "Memory disclosure proof",
+      cycleTypeId: "cyc:delivery",
+      recommendedProfile: "Standard",
+      rationale: "C1 residual",
+      scope: "fixture-docs",
+      outOfScope: ["REAL"],
+      activatedBlocks: ["prepare"],
+      expectedOutcome: "PROCESS_LOCAL notice",
+      sources: [],
+      risks: [],
+      reservations: [],
+      stopConditions: ["AUCUNE EXÉCUTION RÉELLE"],
+      morrisGateRequired: true,
+      nextPossibleStep: "F3 PREPARE",
+      contextSnapshot: {
+        projectId: "prj:c1-memory-prep",
+        lpsId: lps.livingProjectState.lpsVersionId,
+        lpsVersion: lps.livingProjectState.version,
+        doctrineDigest: VALID_DIGEST,
+      },
+      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
+      executionForbidden: true,
+      noExecutingStatus: true,
+      agentBinding: "NOT_AVAILABLE",
+    });
+
+    const go = await recordF2Decision({
+      proposalId: proposal.proposalId,
+      projectId: "prj:c1-memory-prep",
+      decisionKind: "GO",
+      currentContext: proposal.contextSnapshot,
+      decisionServices: decisions,
+      authorityResolver: authority,
+      nowIso: () => NOW,
+      forceM3Authority: true,
+    });
+    expect(go.ok).toBe(true);
+    if (!go.ok) return;
+
+    const prepared = await prepareF3Fixture({
+      projectId: "prj:c1-memory-prep",
+      proposalId: go.proposal.proposalId,
+      decisionId: go.decision.decisionId,
+      currentContext: go.proposal.contextSnapshot,
+      deps: {
+        decisionServices: decisions,
+        authorityResolver: authority,
+        executionContractServices: contracts,
+        nowIso: () => NOW,
+        productDurablePath: false,
+      },
+    });
+
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) return;
+    expect(prepared.payload.processLocalNotice).toBe(F3_PROCESS_LOCAL_NOTICE);
+    expect(prepared.payload.processLocalNotice).not.toBe(
+      F3_PRODUCT_DURABLE_NOTICE,
+    );
+    expect(prepared.payload.disclosures).toContain(F3_PROCESS_LOCAL_NOTICE);
+    expect(prepared.payload.disclosures).not.toContain(
+      F3_PRODUCT_DURABLE_NOTICE,
+    );
+  });
+});
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index 4b05d0d..762461f 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -9,7 +9,8 @@ import type { F2DecisionKind } from "./f2/types";
 import { confirmAndExecuteF3Fixture } from "./f3/confirmAndExecuteF3Fixture";
 import { prepareF3Fixture } from "./f3/prepareF3Fixture";
 import { prepareM3FromDecision } from "./f3/prepareM3FromDecision";
-import { F3_PROCESS_LOCAL_NOTICE } from "./f3/constants";
+import { rehydrateEvidenceOutcomeFromLps } from "./f3/rehydrateEvidenceOutcomeFromLps";
+import { resolveF3EphemeralNotice } from "./f3/constants";
 import type {
   AssistantHistoryMessage,
   ProjectAssistantContextDto,
@@ -17,12 +18,14 @@ import type {
   ProjectAssistantExecuteF3Result,
   ProjectAssistantPrepareF3Result,
   ProjectAssistantPrepareM3Result,
+  ProjectAssistantRehydrateEvidenceOutcomeResult,
   ProjectAssistantSendResult,
 } from "./types";

 /**
  * Thin server action — Project Workspace Assistant (F1 + F2 + F3 fixture).
- * No OPS1 session. No Cursor REAL. No Git write. No durable persistence.
+ * No OPS1 session. No Cursor REAL. No Git write.
+ * Persistence durability follows RuntimeOaStack.productDurablePath (Product SQLite vs Memory).
  */
 export async function projectAssistantSendAction(input: {
   projectId: string;
@@ -243,6 +246,7 @@ export async function projectAssistantPrepareF3FixtureAction(input: {
       authorityResolver: runtime.oa.authorityResolver,
       executionContractServices: runtime.oa.executionContractServices,
       nowIso: () => runtime.oa!.clock.nowIso(),
+      productDurablePath: runtime.oa.productDurablePath,
     },
   });

@@ -259,6 +263,9 @@ export async function projectAssistantPrepareF3FixtureAction(input: {
   }

   const f3 = prepared.payload;
+  const persistenceNotice = resolveF3EphemeralNotice(
+    runtime.oa.productDurablePath,
+  );
   return {
     ok: true,
     status: "ok",
@@ -269,10 +276,10 @@ export async function projectAssistantPrepareF3FixtureAction(input: {
       `Contrat ${f3.contract.executionContractId} v${f3.contract.version} (${f3.contract.status})`,
       "AUCUNE EXÉCUTION",
       "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
-      F3_PROCESS_LOCAL_NOTICE,
+      persistenceNotice,
     ].join(" — "),
     project,
-    ephemeralNotice: F3_PROCESS_LOCAL_NOTICE,
+    ephemeralNotice: persistenceNotice,
     f2: null,
     f3,
   };
@@ -467,6 +474,8 @@ export async function projectAssistantConfirmAndExecuteF3FixtureAction(input: {
       executionAttemptServices: runtime.oa.executionAttemptServices,
       evidenceReviewServices: runtime.oa.evidenceReviewServices,
       fixtureAdapter: runtime.oa.fixtureAdapter,
+      projectServices: runtime.oa.projectServices,
+      productDurablePath: runtime.oa.productDurablePath,
       nowIso: () => runtime.oa!.clock.nowIso(),
     },
   });
@@ -484,6 +493,9 @@ export async function projectAssistantConfirmAndExecuteF3FixtureAction(input: {
   }

   const f3 = executed.payload;
+  const persistenceNotice = resolveF3EphemeralNotice(
+    runtime.oa.productDurablePath,
+  );
   return {
     ok: true,
     status: "ok",
@@ -499,10 +511,89 @@ export async function projectAssistantConfirmAndExecuteF3FixtureAction(input: {
       "RECOMMANDATION — PAS UNE DÉCISION MORRIS",
       "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
       "CURSOR REAL BLOQUÉ",
-      F3_PROCESS_LOCAL_NOTICE,
+      persistenceNotice,
     ].join(" — "),
     project,
-    ephemeralNotice: F3_PROCESS_LOCAL_NOTICE,
+    ephemeralNotice: persistenceNotice,
     f3,
   };
 }
+
+/**
+ * M5 durable Nora/F3 readback — LPS evidence/RB refs → RecommendNextGate.
+ * Strictly read-only: no Decision, no gate consume, no Attempt launch.
+ */
+export async function projectAssistantRehydrateEvidenceOutcomeAction(input: {
+  projectId: string;
+}): Promise<ProjectAssistantRehydrateEvidenceOutcomeResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      status: "rehydrate_error",
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Services OA process-local indisponibles pour rehydrate F3.",
+      mode: "unavailable",
+      retryable: false,
+    };
+  }
+
+  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
+  if (!projectResult.ok) {
+    return {
+      ok: false,
+      status: "project_not_found",
+      code: projectResult.error.code,
+      message: projectResult.error.message,
+      mode: "unavailable",
+      retryable: false,
+    };
+  }
+  const project = toContextDto(projectResult);
+
+  const rehydrated = await rehydrateEvidenceOutcomeFromLps({
+    projectId: input.projectId,
+    deps: {
+      projectServices: runtime.oa.projectServices,
+      evidenceReviewServices: runtime.oa.evidenceReviewServices,
+    },
+  });
+
+  if (!rehydrated.ok) {
+    return {
+      ok: false,
+      status: "rehydrate_error",
+      code: rehydrated.code,
+      message: rehydrated.message,
+      mode: "fixture",
+      retryable: false,
+      project,
+    };
+  }
+
+  const persistenceNotice = resolveF3EphemeralNotice(
+    runtime.oa.productDurablePath,
+  );
+  return {
+    ok: true,
+    status: "ok",
+    mode: "fixture",
+    presentation: "unconfirmed",
+    text: [
+      "REHYDRATE EVIDENCE OUTCOME",
+      `LPS v${rehydrated.lpsVersion}`,
+      `Evidence ${rehydrated.evidenceIds.join(", ") || "—"}`,
+      `ReviewBundle ${rehydrated.reviewBundleIds.join(", ") || "—"}`,
+      "RECOMMANDATION — PAS UNE DÉCISION MORRIS",
+      persistenceNotice,
+    ].join(" — "),
+    project,
+    ephemeralNotice: persistenceNotice,
+    evidence: rehydrated.evidence,
+    reviewBundles: rehydrated.reviewBundles,
+    recommendation: rehydrated.recommendation,
+    lpsVersion: rehydrated.lpsVersion,
+    evidenceIds: rehydrated.evidenceIds,
+    reviewBundleIds: rehydrated.reviewBundleIds,
+  };
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/appendEvidenceOutcomeToLps.ts b/projects/sfia-studio/app/features/project-assistant/f3/appendEvidenceOutcomeToLps.ts
new file mode 100644
index 0000000..8909047
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/f3/appendEvidenceOutcomeToLps.ts
@@ -0,0 +1,65 @@
+/**
+ * M5-B W1 — factual LPS append of evidenceIds / reviewBundleIds after
+ * successful Evidence ingest + ReviewBundle create.
+ * Recommendation remains Recommendation (not Decision / not gate consume).
+ */
+
+import type { ProjectServices } from "@/lib/oa/project";
+import { SFIA_STUDIO_SYSTEM_FACTUAL_WRITER } from "./systemFactualWriter";
+
+export type AppendEvidenceOutcomeToLpsResult =
+  | { ok: true; lpsVersion: number }
+  | { ok: false; code: string; message: string };
+
+export async function appendEvidenceOutcomeToLps(input: {
+  projectId: string;
+  evidenceId: string;
+  reviewBundleId: string;
+  projectServices: Pick<
+    ProjectServices,
+    "appendLivingProjectStateVersion" | "getCurrentLivingProjectState"
+  >;
+}): Promise<AppendEvidenceOutcomeToLpsResult> {
+  const current =
+    await input.projectServices.getCurrentLivingProjectState.execute({
+      projectId: input.projectId,
+    });
+  if (!current.ok) {
+    return {
+      ok: false,
+      code: current.error.detailCode,
+      message: current.error.message,
+    };
+  }
+
+  const lps = current.livingProjectState;
+  const evidenceIds = [
+    ...new Set([...(lps.evidenceIds ?? []), input.evidenceId]),
+  ];
+  const reviewBundleIds = [
+    ...new Set([...(lps.reviewBundleIds ?? []), input.reviewBundleId]),
+  ];
+
+  const appended =
+    await input.projectServices.appendLivingProjectStateVersion.execute({
+      projectId: input.projectId,
+      expectedVersion: lps.version,
+      objective: lps.objective,
+      context: lps.context,
+      scope: lps.scope,
+      // Automatic factual write-back — system actor, not Morris demo authority.
+      createdBy: SFIA_STUDIO_SYSTEM_FACTUAL_WRITER,
+      evidenceIds,
+      reviewBundleIds,
+    });
+
+  if (!appended.ok) {
+    return {
+      ok: false,
+      code: appended.error.detailCode,
+      message: appended.error.message,
+    };
+  }
+
+  return { ok: true, lpsVersion: appended.livingProjectState.version };
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts b/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts
index 261e3e6..8256b3d 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts
@@ -18,6 +18,7 @@ import type {
   TestExecutionAdapter,
 } from "@/lib/oa/execution-attempt";
 import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
+import type { ProjectServices } from "@/lib/oa/project";
 import type { F2ContextSnapshot } from "../f2/types";
 import { LOCAL_MORRIS_ACTOR } from "../f2/recordDecision";
 import {
@@ -27,9 +28,9 @@ import {
   F3_CONFIRM_ACTION_REF,
   F3_LABELS,
   F3_MODE,
-  F3_PROCESS_LOCAL_NOTICE,
   F3_REQUIRED_AUTHORITY,
   F3_SCOPE,
+  resolveF3EphemeralNotice,
 } from "./constants";
 import { ingestEvidenceAndRecommend } from "./ingestEvidenceAndRecommend";
 import type { F3ExecutePayload } from "./types";
@@ -43,6 +44,13 @@ export type ConfirmExecuteF3Deps = {
   evidenceReviewServices: EvidenceReviewServices;
   fixtureAdapter: TestExecutionAdapter;
   nowIso: () => string;
+  /** Product path — enables M5-B W1 LPS evidence/RB factual append. */
+  projectServices?: ProjectServices;
+  /**
+   * True when OA composition uses Product SQLite (Attempt/Evidence/RB durable).
+   * Defaults true when projectServices present; false for Memory/process-local.
+   */
+  productDurablePath?: boolean;
 };

 function authorityEvidenceIdForProposal(proposalId: string): string {
@@ -113,12 +121,20 @@ async function buildExecutePayload(input: {
     projectId: input.projectId,
     attemptId: input.attempt.attemptId,
     executionContractId: input.contract.executionContractId,
-    deps: { evidenceReviewServices: input.deps.evidenceReviewServices },
+    deps: {
+      evidenceReviewServices: input.deps.evidenceReviewServices,
+      projectServices: input.deps.projectServices,
+    },
   });
   if (!ingested.ok) {
     return ingested;
   }

+  const productDurable =
+    input.deps.productDurablePath ??
+    input.deps.projectServices !== undefined;
+  const persistenceNotice = resolveF3EphemeralNotice(productDurable);
+
   return {
     ok: true,
     payload: {
@@ -163,7 +179,7 @@ async function buildExecutePayload(input: {
         cursorRealBlocked: F3_LABELS.cursorRealBlocked,
         hardOpen: F3_LABELS.hardOpen,
       },
-      processLocalNotice: F3_PROCESS_LOCAL_NOTICE,
+      processLocalNotice: persistenceNotice,
       disclosures: [
         F3_LABELS.fixtureNoReal,
         F3_LABELS.noGitWrite,
@@ -172,7 +188,7 @@ async function buildExecutePayload(input: {
         F3_LABELS.hardOpen,
         F3_LABELS.noReadyClaim,
         F3_LABELS.noTa6Complete,
-        F3_PROCESS_LOCAL_NOTICE,
+        persistenceNotice,
       ],
     },
   };
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/constants.ts b/projects/sfia-studio/app/features/project-assistant/f3/constants.ts
index 60bacbc..5c3e44f 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/constants.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/constants.ts
@@ -47,9 +47,33 @@ export const F3_OPEN_HARD_RESERVATION_REFS = Object.freeze([
   "R-M01",
 ] as const);

+/**
+ * Honest only for a true Memory / process-local OA stack (no Product SQLite).
+ * Do NOT use on the Product SQLite M5 path.
+ */
 export const F3_PROCESS_LOCAL_NOTICE =
   "F3 fixture process-local — non persisté. Un redémarrage efface contrats, attempts et evidence. Aucune autorité d'exécution durable.";

+/**
+ * Product SQLite M5 path — fixture/no-effect execution with durable Attempt /
+ * Evidence / ReviewBundle / LPS evidence links. REAL remains disabled.
+ * Distinguishes execution mode (fixture) from persistence durability (Product).
+ */
+export const F3_PRODUCT_DURABLE_NOTICE =
+  "F3 fixture execution — Attempt, Evidence, ReviewBundle and LPS evidence links are persisted in Product SQLite. REAL execution remains disabled. Recommendation is not a Morris decision.";
+
+/**
+ * Route F3 ephemeral disclosure by OA composition persistence, not by
+ * execution mode (fixture vs REAL).
+ */
+export function resolveF3EphemeralNotice(
+  productDurablePath: boolean,
+): typeof F3_PRODUCT_DURABLE_NOTICE | typeof F3_PROCESS_LOCAL_NOTICE {
+  return productDurablePath
+    ? F3_PRODUCT_DURABLE_NOTICE
+    : F3_PROCESS_LOCAL_NOTICE;
+}
+
 export const F3_LABELS = Object.freeze({
   fixtureNoReal: "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
   noGitWrite: "AUCUN GIT WRITE PRODUIT",
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/index.ts b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
index ba86054..388de83 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/index.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
@@ -1,4 +1,9 @@
 export { F3_MODE, F3_ADAPTER_ID, F3_AGENT_ID, F3_LABELS } from "./constants";
+export {
+  F3_PROCESS_LOCAL_NOTICE,
+  F3_PRODUCT_DURABLE_NOTICE,
+  resolveF3EphemeralNotice,
+} from "./constants";
 export type {
   F3PreparePayload,
   F3ExecutePayload,
@@ -14,6 +19,12 @@ export { prepareM3FromDecision } from "./prepareM3FromDecision";
 export type { F3M3PreparePayload, PrepareM3Deps } from "./prepareM3FromDecision";
 export { confirmAndExecuteF3Fixture } from "./confirmAndExecuteF3Fixture";
 export { ingestEvidenceAndRecommend } from "./ingestEvidenceAndRecommend";
+export { appendEvidenceOutcomeToLps } from "./appendEvidenceOutcomeToLps";
+export { rehydrateEvidenceOutcomeFromLps } from "./rehydrateEvidenceOutcomeFromLps";
+export {
+  SFIA_STUDIO_SYSTEM_FACTUAL_WRITER,
+  SFIA_STUDIO_SYSTEM_FACTUAL_WRITER_ID,
+} from "./systemFactualWriter";
 export {
   createF3FixtureAgentDescriptor,
   createF3TestExecutionAdapter,
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts b/projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts
index 5c6039a..c4ad4b3 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts
@@ -1,10 +1,13 @@
 /**
  * IngestExecutionAttemptEvidence → CreateReviewBundle → RecommendNextGate.
  * Recommendation-only; HARD refs passed through; no auto-launch.
+ * M5-B W1: when projectServices present, append factual LPS evidence/RB ids.
  */

 import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
+import type { ProjectServices } from "@/lib/oa/project";
 import { LOCAL_MORRIS_ACTOR } from "../f2/recordDecision";
+import { appendEvidenceOutcomeToLps } from "./appendEvidenceOutcomeToLps";
 import {
   F3_LABELS,
   F3_MODE,
@@ -18,6 +21,11 @@ import type {

 export type IngestRecommendDeps = {
   evidenceReviewServices: EvidenceReviewServices;
+  /** When present (product path), perform M5-B W1 LPS factual link append. */
+  projectServices?: Pick<
+    ProjectServices,
+    "appendLivingProjectStateVersion" | "getCurrentLivingProjectState"
+  >;
 };

 export type IngestRecommendResult =
@@ -26,6 +34,7 @@ export type IngestRecommendResult =
       evidence: F3EvidenceDto;
       reviewBundle: F3ReviewBundleDto;
       recommendation: F3RecommendationDto;
+      lpsVersion?: number;
     }
   | { ok: false; code: string; message: string };

@@ -85,6 +94,24 @@ export async function ingestEvidenceAndRecommend(input: {
     };
   }

+  let lpsVersion: number | undefined;
+  if (input.deps.projectServices) {
+    const linked = await appendEvidenceOutcomeToLps({
+      projectId: input.projectId,
+      evidenceId: ingested.evidence.evidenceId,
+      reviewBundleId: bundle.reviewBundle.reviewBundleId,
+      projectServices: input.deps.projectServices,
+    });
+    if (!linked.ok) {
+      return {
+        ok: false,
+        code: linked.code,
+        message: linked.message,
+      };
+    }
+    lpsVersion = linked.lpsVersion;
+  }
+
   const recommended =
     await input.deps.evidenceReviewServices.recommendNextGate.execute({
       projectId: input.projectId,
@@ -163,5 +190,6 @@ export async function ingestEvidenceAndRecommend(input: {
       recommendationLabel: F3_LABELS.recommendationNotDecision,
       mode: F3_MODE,
     },
+    lpsVersion,
   };
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/prepareF3Fixture.ts b/projects/sfia-studio/app/features/project-assistant/f3/prepareF3Fixture.ts
index ee20d7c..a9313aa 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/prepareF3Fixture.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/prepareF3Fixture.ts
@@ -16,11 +16,11 @@ import {
   F3_EVIDENCE_REQUIREMENTS,
   F3_LABELS,
   F3_MODE,
-  F3_PROCESS_LOCAL_NOTICE,
   F3_REQUIRED_AUTHORITY,
   F3_SCOPE,
   F3_STOP_CONDITIONS,
   F3_TARGET,
+  resolveF3EphemeralNotice,
 } from "./constants";
 import type { F3PreparePayload } from "./types";
 import { validateF2ForPrepare } from "./validateF2ForPrepare";
@@ -30,6 +30,11 @@ export type PrepareF3Deps = {
   authorityResolver: MemoryAuthorityResolver;
   executionContractServices: ExecutionContractServices;
   nowIso: () => string;
+  /**
+   * Required: true = Product SQLite OA composition; false = Memory/process-local.
+   * Callers must not omit — no silent default.
+   */
+  productDurablePath: boolean;
 };

 function toContractDto(
@@ -184,6 +189,10 @@ export async function prepareF3Fixture(input: {
     };
   }

+  const persistenceNotice = resolveF3EphemeralNotice(
+    input.deps.productDurablePath,
+  );
+
   return {
     ok: true,
     payload: {
@@ -201,7 +210,7 @@ export async function prepareF3Fixture(input: {
         cursorRealBlocked: F3_LABELS.cursorRealBlocked,
         hardOpen: F3_LABELS.hardOpen,
       },
-      processLocalNotice: F3_PROCESS_LOCAL_NOTICE,
+      processLocalNotice: persistenceNotice,
       disclosures: [
         F3_LABELS.fixtureNoReal,
         F3_LABELS.noGitWrite,
@@ -209,7 +218,7 @@ export async function prepareF3Fixture(input: {
         F3_LABELS.hardOpen,
         F3_LABELS.noReadyClaim,
         F3_LABELS.noTa6Complete,
-        F3_PROCESS_LOCAL_NOTICE,
+        persistenceNotice,
       ],
     },
   };
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/rehydrateEvidenceOutcomeFromLps.ts b/projects/sfia-studio/app/features/project-assistant/f3/rehydrateEvidenceOutcomeFromLps.ts
new file mode 100644
index 0000000..c7e5227
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/f3/rehydrateEvidenceOutcomeFromLps.ts
@@ -0,0 +1,242 @@
+/**
+ * M5 durable Nora/F3 readback — STRICTLY read-only.
+ * current LPS → evidenceIds / reviewBundleIds → durable readers → RecommendNextGate.
+ * Does not write LPS, create Decision, consume gate, or launch Attempt.
+ */
+
+import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
+import type { ProjectServices } from "@/lib/oa/project";
+import {
+  F3_LABELS,
+  F3_MODE,
+  F3_OPEN_HARD_RESERVATION_REFS,
+} from "./constants";
+import { SFIA_STUDIO_SYSTEM_FACTUAL_WRITER } from "./systemFactualWriter";
+import type {
+  F3EvidenceDto,
+  F3RecommendationDto,
+  F3ReviewBundleDto,
+} from "./types";
+
+export type RehydrateEvidenceOutcomeDeps = {
+  projectServices: Pick<ProjectServices, "getCurrentLivingProjectState">;
+  evidenceReviewServices: Pick<
+    EvidenceReviewServices,
+    "evidenceReader" | "reviewBundleReader" | "recommendNextGate"
+  >;
+};
+
+export type RehydrateEvidenceOutcomeResult =
+  | {
+      ok: true;
+      projectId: string;
+      lpsVersion: number;
+      evidenceIds: string[];
+      reviewBundleIds: string[];
+      evidence: F3EvidenceDto[];
+      reviewBundles: F3ReviewBundleDto[];
+      subjectRef: string | null;
+      recommendation: F3RecommendationDto;
+    }
+  | { ok: false; code: string; message: string };
+
+export async function rehydrateEvidenceOutcomeFromLps(input: {
+  projectId: string;
+  deps: RehydrateEvidenceOutcomeDeps;
+}): Promise<RehydrateEvidenceOutcomeResult> {
+  const current =
+    await input.deps.projectServices.getCurrentLivingProjectState.execute({
+      projectId: input.projectId,
+    });
+  if (!current.ok) {
+    return {
+      ok: false,
+      code: current.error.detailCode,
+      message: current.error.message,
+    };
+  }
+
+  const lps = current.livingProjectState;
+  const evidenceIds = [...(lps.evidenceIds ?? [])];
+  const reviewBundleIds = [...(lps.reviewBundleIds ?? [])];
+
+  if (evidenceIds.length === 0 && reviewBundleIds.length === 0) {
+    return {
+      ok: false,
+      code: "NO_EVIDENCE_OUTCOME_REFS",
+      message: "LPS courant sans evidenceIds/reviewBundleIds.",
+    };
+  }
+
+  const evidenceDtos: F3EvidenceDto[] = [];
+  let subjectRef: string | null = null;
+
+  for (const evidenceId of evidenceIds) {
+    const evidence =
+      await input.deps.evidenceReviewServices.evidenceReader.findById(
+        evidenceId,
+      );
+    if (!evidence) {
+      return {
+        ok: false,
+        code: "EVIDENCE_REF_MISSING",
+        message: `Evidence ${evidenceId} référencée par LPS absente.`,
+      };
+    }
+    const boundProject = evidence.bindings.projectId;
+    if (boundProject && boundProject !== input.projectId) {
+      return {
+        ok: false,
+        code: "EVIDENCE_PROJECT_MISMATCH",
+        message: `Evidence ${evidenceId} project mismatch.`,
+      };
+    }
+    const contractId = evidence.bindings.executionContractId;
+    if (contractId) {
+      if (subjectRef && subjectRef !== contractId) {
+        return {
+          ok: false,
+          code: "EVIDENCE_CONTRACT_MISMATCH",
+          message: "Evidence refs span multiple executionContractId.",
+        };
+      }
+      subjectRef = contractId;
+    }
+    evidenceDtos.push({
+      evidenceId: evidence.evidenceId,
+      status: evidence.status,
+      sourceKind: evidence.sourceKind,
+      technicalResultRef: evidence.technicalResultRef ?? null,
+      verified: false,
+      mode: F3_MODE,
+    });
+  }
+
+  const reviewBundleDtos: F3ReviewBundleDto[] = [];
+  for (const reviewBundleId of reviewBundleIds) {
+    const bundle =
+      await input.deps.evidenceReviewServices.reviewBundleReader.findById(
+        reviewBundleId,
+      );
+    if (!bundle) {
+      return {
+        ok: false,
+        code: "REVIEW_BUNDLE_REF_MISSING",
+        message: `ReviewBundle ${reviewBundleId} référencé par LPS absent.`,
+      };
+    }
+    if (bundle.projectId !== input.projectId) {
+      return {
+        ok: false,
+        code: "REVIEW_BUNDLE_PROJECT_MISMATCH",
+        message: `ReviewBundle ${reviewBundleId} project mismatch.`,
+      };
+    }
+    if (bundle.executionContractId) {
+      if (subjectRef && subjectRef !== bundle.executionContractId) {
+        return {
+          ok: false,
+          code: "REVIEW_BUNDLE_CONTRACT_MISMATCH",
+          message: "ReviewBundle executionContractId incoherent with Evidence.",
+        };
+      }
+      subjectRef = bundle.executionContractId;
+    }
+    reviewBundleDtos.push({
+      reviewBundleId: bundle.reviewBundleId,
+      status: bundle.status,
+      version: bundle.version,
+      evidenceRefs: [...bundle.evidenceRefs],
+      mode: F3_MODE,
+    });
+  }
+
+  const evidenceRefs = [];
+  for (const evidenceId of evidenceIds) {
+    const evidence =
+      await input.deps.evidenceReviewServices.evidenceReader.findById(
+        evidenceId,
+      );
+    if (!evidence) {
+      return {
+        ok: false,
+        code: "EVIDENCE_REF_MISSING",
+        message: `Evidence ${evidenceId} disparue pendant rehydrate.`,
+      };
+    }
+    evidenceRefs.push({ id: evidence.evidenceId, version: evidence.version });
+  }
+
+  const reviewBundleRefs = [];
+  for (const reviewBundleId of reviewBundleIds) {
+    const bundle =
+      await input.deps.evidenceReviewServices.reviewBundleReader.findById(
+        reviewBundleId,
+      );
+    if (!bundle) {
+      return {
+        ok: false,
+        code: "REVIEW_BUNDLE_REF_MISSING",
+        message: `ReviewBundle ${reviewBundleId} disparu pendant rehydrate.`,
+      };
+    }
+    reviewBundleRefs.push({
+      id: bundle.reviewBundleId,
+      version: bundle.version,
+    });
+  }
+
+  const recommended =
+    await input.deps.evidenceReviewServices.recommendNextGate.execute({
+      projectId: input.projectId,
+      subjectRef: subjectRef ?? undefined,
+      evidenceRefs,
+      reviewBundleRefs,
+      openHardReservationRefs: [...F3_OPEN_HARD_RESERVATION_REFS],
+      attemptAutoLaunchNextCycle: false,
+      actor: SFIA_STUDIO_SYSTEM_FACTUAL_WRITER,
+      correlationId: `cor:m5-rehydrate:${input.projectId}:${lps.version}`,
+    });
+
+  if (!recommended.ok) {
+    return {
+      ok: false,
+      code: recommended.error.detailCode,
+      message: recommended.error.message,
+    };
+  }
+
+  const coordination = recommended.coordination;
+  const openHard = [...F3_OPEN_HARD_RESERVATION_REFS];
+  const hardBlockers = [
+    ...coordination.blockers
+      .filter((b) => b.code === "hard_reservation_open")
+      .map((b) => b.sourceId ?? b.code),
+    ...openHard.map((ref) => `${ref} OPEN`),
+  ];
+
+  return {
+    ok: true,
+    projectId: input.projectId,
+    lpsVersion: lps.version,
+    evidenceIds,
+    reviewBundleIds,
+    evidence: evidenceDtos,
+    reviewBundles: reviewBundleDtos,
+    subjectRef,
+    recommendation: {
+      kind: "recommendation",
+      status: coordination.status,
+      executionAuthority: false,
+      gateConsumed: false,
+      decisionCreated: false,
+      attemptAutoLaunchNextCycle: false,
+      openHardReservationRefs: openHard,
+      hardBlockers: [...new Set(hardBlockers)],
+      nextGateCode: coordination.nextGate?.gateCode ?? null,
+      nextActionCode: coordination.nextAction?.actionCode ?? null,
+      recommendationLabel: F3_LABELS.recommendationNotDecision,
+      mode: F3_MODE,
+    },
+  };
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/systemFactualWriter.ts b/projects/sfia-studio/app/features/project-assistant/f3/systemFactualWriter.ts
new file mode 100644
index 0000000..d0ef7df
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/f3/systemFactualWriter.ts
@@ -0,0 +1,20 @@
+/**
+ * M5-B W1 — system factual LPS writer.
+ * Not Morris, not decision_maker, authority none — automatic state linkage only.
+ */
+
+import type { ActorReference } from "@/lib/oa/doctrine";
+
+export const SFIA_STUDIO_SYSTEM_FACTUAL_WRITER_ID =
+  "actor:sfia-studio-system-factual-writer" as const;
+
+/**
+ * Stable Studio system actor for automatic factual LPS write-back.
+ * Must not be registered as authority evidence / canActAsMorris.
+ */
+export const SFIA_STUDIO_SYSTEM_FACTUAL_WRITER: ActorReference = Object.freeze({
+  actorId: SFIA_STUDIO_SYSTEM_FACTUAL_WRITER_ID,
+  role: "system",
+  displayName: "SFIA Studio system factual state writer",
+  authorityLevel: "none",
+});
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index 48e1d2f..d9fdf55 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -9,7 +9,13 @@ import type {
   ProposalDto,
   QualificationDto,
 } from "./f2/types";
-import type { F3ExecutePayload, F3PreparePayload } from "./f3/types";
+import type {
+  F3EvidenceDto,
+  F3ExecutePayload,
+  F3PreparePayload,
+  F3RecommendationDto,
+  F3ReviewBundleDto,
+} from "./f3/types";

 export type AssistantUiMode = "fixture" | "live" | "unavailable" | "unconfirmed";

@@ -211,3 +217,33 @@ export type ProjectAssistantExecuteF3Failure = {
 export type ProjectAssistantExecuteF3Result =
   | ProjectAssistantExecuteF3Success
   | ProjectAssistantExecuteF3Failure;
+
+export type ProjectAssistantRehydrateEvidenceOutcomeSuccess = {
+  ok: true;
+  status: "ok";
+  mode: "fixture";
+  presentation: "unconfirmed";
+  text: string;
+  project: ProjectAssistantContextDto;
+  ephemeralNotice: string;
+  evidence: F3EvidenceDto[];
+  reviewBundles: F3ReviewBundleDto[];
+  recommendation: F3RecommendationDto;
+  lpsVersion: number;
+  evidenceIds: string[];
+  reviewBundleIds: string[];
+};
+
+export type ProjectAssistantRehydrateEvidenceOutcomeFailure = {
+  ok: false;
+  status: "rehydrate_error" | "project_not_found";
+  code: string;
+  message: string;
+  mode: AssistantUiMode;
+  retryable: boolean;
+  project?: ProjectAssistantContextDto;
+};
+
+export type ProjectAssistantRehydrateEvidenceOutcomeResult =
+  | ProjectAssistantRehydrateEvidenceOutcomeSuccess
+  | ProjectAssistantRehydrateEvidenceOutcomeFailure;
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/index.ts b/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
index 474d8b4..45d97c4 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
@@ -88,6 +88,14 @@ export {

 export { MemoryEvidenceStore } from "./infrastructure/memoryEvidenceStore";
 export { MemoryEvidenceRepository } from "./infrastructure/memoryEvidenceRepository";
+export { SqliteEvidenceRepository } from "./infrastructure/sqlite/sqliteEvidenceRepository";
+export { SqliteReviewBundleRepository } from "./infrastructure/sqlite/sqliteReviewBundleRepository";
+export {
+  createSqliteEvidenceReviewServices,
+  createTestSqliteEvidenceReviewServices,
+  type CreateSqliteEvidenceReviewServicesOptions,
+  type SqliteEvidenceReviewServices,
+} from "./infrastructure/sqlite/createSqliteEvidenceReviewServices";
 export { FakeEvidencePayloadAdapter } from "./infrastructure/fakeEvidencePayloadAdapter";
 export type { FakePayloadScript } from "./infrastructure/fakeEvidencePayloadAdapter";
 export { FakeExecutionAttemptReader } from "./infrastructure/fakeExecutionAttemptReader";
@@ -162,16 +170,18 @@ import type { ClaimEvaluationReaderPort } from "./ports/claimEvaluationReader";
 import type { EvidenceAuditPort } from "./ports/evidenceAudit";
 import type { EvidencePayloadPort } from "./ports/evidencePayloadPort";
 import type { EvidenceReaderPort } from "./ports/evidenceReader";
+import type { EvidenceRepositoryPort } from "./ports/evidenceRepository";
 import type { ExecutionAttemptReaderPort } from "./ports/executionAttemptReader";
 import type { IdGeneratorPort } from "./ports/idGenerator";
 import type { MaturityAssessmentReaderPort } from "./ports/maturityAssessmentReader";
 import type { ReviewBundleReaderPort } from "./ports/reviewBundleReader";
+import type { ReviewBundleRepositoryPort } from "./ports/reviewBundleRepository";

 export type EvidenceReviewServices = {
   store: MemoryEvidenceStore;
-  repository: MemoryEvidenceRepository;
+  repository: EvidenceRepositoryPort;
   reviewBundleStore: MemoryReviewBundleStore;
-  reviewBundleRepository: MemoryReviewBundleRepository;
+  reviewBundleRepository: ReviewBundleRepositoryPort;
   reviewBundleReader: ReviewBundleReaderPort;
   claimEvaluationStore: MemoryClaimEvaluationStore;
   claimEvaluationRepository: MemoryClaimEvaluationRepository;
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts
new file mode 100644
index 0000000..e3800e9
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts
@@ -0,0 +1,336 @@
+import type { ClockPort } from "@/lib/oa/doctrine";
+import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
+import type { ProductSqliteHandle } from "@/lib/oa/project";
+import { AttachEvidenceToReviewBundle } from "../../application/attachEvidenceToReviewBundle";
+import { CompleteReview } from "../../application/completeReview";
+import { ConfirmClaimEvaluation } from "../../application/confirmClaimEvaluation";
+import { ConfirmMaturity } from "../../application/confirmMaturity";
+import { CreateReviewBundle } from "../../application/createReviewBundle";
+import { DowngradeMaturity } from "../../application/downgradeMaturity";
+import { EvaluateClaim } from "../../application/evaluateClaim";
+import { FreezeReviewBundle } from "../../application/freezeReviewBundle";
+import { IngestExecutionAttemptEvidence } from "../../application/ingestExecutionAttemptEvidence";
+import { MarkEvidenceUnavailable } from "../../application/markEvidenceUnavailable";
+import { ProposeMaturity } from "../../application/proposeMaturity";
+import { RecommendNextGate } from "../../application/recommendNextGate";
+import { RegisterEvidence } from "../../application/registerEvidence";
+import { RejectClaimEvaluation } from "../../application/rejectClaimEvaluation";
+import { RemoveEvidenceFromReviewBundle } from "../../application/removeEvidenceFromReviewBundle";
+import { ReopenReview } from "../../application/reopenReview";
+import { StartReview } from "../../application/startReview";
+import { VerifyEvidenceIntegrity } from "../../application/verifyEvidenceIntegrity";
+import { FakeClaimAuthority } from "../claimAuthorityAdapter";
+import { ClaimEvaluationRepositoryReader } from "../claimEvaluationRepositoryReader";
+import { EvidenceRepositoryReader } from "../evidenceRepositoryReader";
+import { FakeEvidencePayloadAdapter } from "../fakeEvidencePayloadAdapter";
+import { FakeExecutionAttemptReader } from "../fakeExecutionAttemptReader";
+import {
+  FixedIdGenerator,
+  RandomIdGenerator,
+} from "../idGenerator";
+import { MemoryClaimEvaluationRepository } from "../memoryClaimEvaluationRepository";
+import { MemoryClaimEvaluationStore } from "../memoryClaimEvaluationStore";
+import { MemoryEvidenceStore } from "../memoryEvidenceStore";
+import { MemoryMaturityAssessmentRepository } from "../memoryMaturityAssessmentRepository";
+import { MemoryMaturityAssessmentStore } from "../memoryMaturityAssessmentStore";
+import { MemoryReviewBundleStore } from "../memoryReviewBundleStore";
+import { MaturityAssessmentRepositoryReader } from "../maturityAssessmentRepositoryReader";
+import {
+  ConsoleEvidenceAuditJournal,
+  MemoryEvidenceAuditJournal,
+} from "../observability";
+import { ReviewBundleRepositoryReader } from "../reviewBundleRepositoryReader";
+import type { ClaimAuthorityPort } from "../../ports/claimAuthorityPort";
+import type { ClaimEvaluationReaderPort } from "../../ports/claimEvaluationReader";
+import type { EvidenceAuditPort } from "../../ports/evidenceAudit";
+import type { EvidencePayloadPort } from "../../ports/evidencePayloadPort";
+import type { EvidenceReaderPort } from "../../ports/evidenceReader";
+import type { EvidenceRepositoryPort } from "../../ports/evidenceRepository";
+import type { ExecutionAttemptReaderPort } from "../../ports/executionAttemptReader";
+import type { IdGeneratorPort } from "../../ports/idGenerator";
+import type { MaturityAssessmentReaderPort } from "../../ports/maturityAssessmentReader";
+import type { ReviewBundleReaderPort } from "../../ports/reviewBundleReader";
+import type { ReviewBundleRepositoryPort } from "../../ports/reviewBundleRepository";
+import { SqliteEvidenceRepository } from "./sqliteEvidenceRepository";
+import { SqliteReviewBundleRepository } from "./sqliteReviewBundleRepository";
+
+export type CreateSqliteEvidenceReviewServicesOptions = {
+  productStore: ProductSqliteHandle;
+  clock?: ClockPort;
+  audit?: EvidenceAuditPort;
+  ids?: IdGeneratorPort;
+  payload?: EvidencePayloadPort;
+  attemptReader?: ExecutionAttemptReaderPort;
+  evidenceReader?: EvidenceReaderPort;
+  claimAuthority?: ClaimAuthorityPort;
+  claimEvaluationStore?: MemoryClaimEvaluationStore;
+  maturityAssessmentStore?: MemoryMaturityAssessmentStore;
+};
+
+export type SqliteEvidenceReviewServices = {
+  store: MemoryEvidenceStore;
+  repository: EvidenceRepositoryPort;
+  reviewBundleStore: MemoryReviewBundleStore;
+  reviewBundleRepository: ReviewBundleRepositoryPort;
+  reviewBundleReader: ReviewBundleReaderPort;
+  claimEvaluationStore: MemoryClaimEvaluationStore;
+  claimEvaluationRepository: MemoryClaimEvaluationRepository;
+  claimEvaluationReader: ClaimEvaluationReaderPort;
+  claimAuthority: ClaimAuthorityPort;
+  maturityAssessmentStore: MemoryMaturityAssessmentStore;
+  maturityAssessmentRepository: MemoryMaturityAssessmentRepository;
+  maturityAssessmentReader: MaturityAssessmentReaderPort;
+  evidenceReader: EvidenceReaderPort;
+  payload: EvidencePayloadPort;
+  attemptReader: ExecutionAttemptReaderPort;
+  clock: ClockPort;
+  audit: EvidenceAuditPort;
+  ids: IdGeneratorPort;
+  productStore: ProductSqliteHandle;
+  registerEvidence: RegisterEvidence;
+  ingestExecutionAttemptEvidence: IngestExecutionAttemptEvidence;
+  verifyEvidenceIntegrity: VerifyEvidenceIntegrity;
+  markEvidenceUnavailable: MarkEvidenceUnavailable;
+  createReviewBundle: CreateReviewBundle;
+  attachEvidenceToReviewBundle: AttachEvidenceToReviewBundle;
+  removeEvidenceFromReviewBundle: RemoveEvidenceFromReviewBundle;
+  freezeReviewBundle: FreezeReviewBundle;
+  startReview: StartReview;
+  completeReview: CompleteReview;
+  reopenReview: ReopenReview;
+  evaluateClaim: EvaluateClaim;
+  confirmClaimEvaluation: ConfirmClaimEvaluation;
+  rejectClaimEvaluation: RejectClaimEvaluation;
+  proposeMaturity: ProposeMaturity;
+  confirmMaturity: ConfirmMaturity;
+  downgradeMaturity: DowngradeMaturity;
+  recommendNextGate: RecommendNextGate;
+};
+
+/**
+ * Evidence + ReviewBundle durable on Product SQLite (M5-A).
+ * ClaimEvaluation + MaturityAssessment remain Memory (out of minimal M5).
+ */
+export function createSqliteEvidenceReviewServices(
+  options: CreateSqliteEvidenceReviewServicesOptions,
+): SqliteEvidenceReviewServices {
+  const productStore = options.productStore;
+  // Type-compat placeholders — evidence/RB use SQLite repos, not these maps.
+  const store = new MemoryEvidenceStore();
+  const repository = new SqliteEvidenceRepository(productStore);
+  const reviewBundleStore = new MemoryReviewBundleStore();
+  const reviewBundleRepository = new SqliteReviewBundleRepository(productStore);
+  const reviewBundleReader = new ReviewBundleRepositoryReader(
+    reviewBundleRepository,
+  );
+  const claimEvaluationStore =
+    options.claimEvaluationStore ?? new MemoryClaimEvaluationStore();
+  const claimEvaluationRepository = new MemoryClaimEvaluationRepository(
+    claimEvaluationStore,
+  );
+  const claimEvaluationReader = new ClaimEvaluationRepositoryReader(
+    claimEvaluationRepository,
+    claimEvaluationStore,
+  );
+  const claimAuthority = options.claimAuthority ?? new FakeClaimAuthority();
+  const maturityAssessmentStore =
+    options.maturityAssessmentStore ?? new MemoryMaturityAssessmentStore();
+  const maturityAssessmentRepository = new MemoryMaturityAssessmentRepository(
+    maturityAssessmentStore,
+  );
+  const maturityAssessmentReader = new MaturityAssessmentRepositoryReader(
+    maturityAssessmentRepository,
+  );
+  const clock = options.clock ?? new SystemClock();
+  const audit = options.audit ?? new ConsoleEvidenceAuditJournal();
+  const ids = options.ids ?? new RandomIdGenerator();
+  const payload = options.payload ?? new FakeEvidencePayloadAdapter();
+  const attemptReader =
+    options.attemptReader ?? new FakeExecutionAttemptReader();
+  const evidenceReader =
+    options.evidenceReader ?? new EvidenceRepositoryReader(repository);
+
+  return {
+    store,
+    repository,
+    reviewBundleStore,
+    reviewBundleRepository,
+    reviewBundleReader,
+    claimEvaluationStore,
+    claimEvaluationRepository,
+    claimEvaluationReader,
+    claimAuthority,
+    maturityAssessmentStore,
+    maturityAssessmentRepository,
+    maturityAssessmentReader,
+    evidenceReader,
+    payload,
+    attemptReader,
+    clock,
+    audit,
+    ids,
+    productStore,
+    registerEvidence: new RegisterEvidence(repository, clock, audit, ids),
+    ingestExecutionAttemptEvidence: new IngestExecutionAttemptEvidence(
+      repository,
+      attemptReader,
+      clock,
+      audit,
+      ids,
+    ),
+    verifyEvidenceIntegrity: new VerifyEvidenceIntegrity(
+      repository,
+      payload,
+      clock,
+      audit,
+      ids,
+    ),
+    markEvidenceUnavailable: new MarkEvidenceUnavailable(
+      repository,
+      clock,
+      audit,
+      ids,
+    ),
+    createReviewBundle: new CreateReviewBundle(
+      reviewBundleRepository,
+      evidenceReader,
+      clock,
+      audit,
+      ids,
+    ),
+    attachEvidenceToReviewBundle: new AttachEvidenceToReviewBundle(
+      reviewBundleRepository,
+      evidenceReader,
+      clock,
+      audit,
+      ids,
+    ),
+    removeEvidenceFromReviewBundle: new RemoveEvidenceFromReviewBundle(
+      reviewBundleRepository,
+      evidenceReader,
+      clock,
+      audit,
+      ids,
+    ),
+    freezeReviewBundle: new FreezeReviewBundle(
+      reviewBundleRepository,
+      evidenceReader,
+      clock,
+      audit,
+      ids,
+    ),
+    startReview: new StartReview(reviewBundleRepository, clock, audit, ids),
+    completeReview: new CompleteReview(
+      reviewBundleRepository,
+      clock,
+      audit,
+      ids,
+    ),
+    reopenReview: new ReopenReview(reviewBundleRepository, clock, audit, ids),
+    evaluateClaim: new EvaluateClaim(
+      claimEvaluationRepository,
+      reviewBundleReader,
+      evidenceReader,
+      claimAuthority,
+      clock,
+      audit,
+      ids,
+    ),
+    confirmClaimEvaluation: new ConfirmClaimEvaluation(
+      claimEvaluationRepository,
+      reviewBundleReader,
+      evidenceReader,
+      claimAuthority,
+      clock,
+      audit,
+      ids,
+    ),
+    rejectClaimEvaluation: new RejectClaimEvaluation(
+      claimEvaluationRepository,
+      clock,
+      audit,
+      ids,
+    ),
+    proposeMaturity: new ProposeMaturity(
+      maturityAssessmentRepository,
+      claimEvaluationReader,
+      clock,
+      audit,
+      ids,
+    ),
+    confirmMaturity: new ConfirmMaturity(
+      maturityAssessmentRepository,
+      claimEvaluationReader,
+      claimAuthority,
+      clock,
+      audit,
+      ids,
+    ),
+    downgradeMaturity: new DowngradeMaturity(
+      maturityAssessmentRepository,
+      claimEvaluationReader,
+      claimAuthority,
+      clock,
+      audit,
+      ids,
+    ),
+    recommendNextGate: new RecommendNextGate(
+      evidenceReader,
+      reviewBundleReader,
+      claimEvaluationReader,
+      maturityAssessmentReader,
+      clock,
+      audit,
+      ids,
+    ),
+  };
+}
+
+export function createTestSqliteEvidenceReviewServices(
+  options: CreateSqliteEvidenceReviewServicesOptions & {
+    fixedNowIso?: string;
+  },
+): SqliteEvidenceReviewServices & {
+  fakePayload: FakeEvidencePayloadAdapter;
+  fakeAttempts: FakeExecutionAttemptReader;
+  memoryAudit: MemoryEvidenceAuditJournal;
+  fakeClaimAuthority: FakeClaimAuthority;
+} {
+  const fakePayload =
+    options.payload instanceof FakeEvidencePayloadAdapter
+      ? options.payload
+      : new FakeEvidencePayloadAdapter();
+  const fakeAttempts =
+    options.attemptReader instanceof FakeExecutionAttemptReader
+      ? options.attemptReader
+      : new FakeExecutionAttemptReader();
+  const memoryAudit =
+    options.audit instanceof MemoryEvidenceAuditJournal
+      ? options.audit
+      : new MemoryEvidenceAuditJournal();
+  const fakeClaimAuthority =
+    options.claimAuthority instanceof FakeClaimAuthority
+      ? options.claimAuthority
+      : new FakeClaimAuthority();
+
+  const services = createSqliteEvidenceReviewServices({
+    ...options,
+    clock:
+      options.clock ??
+      new FixedClock(options.fixedNowIso ?? "2026-08-15T07:00:00.000Z"),
+    audit: memoryAudit,
+    ids: options.ids ?? new FixedIdGenerator(),
+    payload: fakePayload,
+    // Preserve caller-provided bridges (e.g. createAttemptReaderBridge).
+    attemptReader: options.attemptReader ?? fakeAttempts,
+    claimAuthority: fakeClaimAuthority,
+  });
+
+  return {
+    ...services,
+    fakePayload,
+    fakeAttempts,
+    memoryAudit,
+    fakeClaimAuthority,
+  };
+}
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteEvidenceRepository.ts b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteEvidenceRepository.ts
new file mode 100644
index 0000000..ba9a6db
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteEvidenceRepository.ts
@@ -0,0 +1,223 @@
+import type { ProductSqliteHandle } from "@/lib/oa/project";
+import { EvidenceDomainError } from "../../domain/errors";
+import { validateEvidenceShape } from "../../domain/invariants";
+import type { Evidence } from "../../domain/types";
+import type {
+  EvidenceRepositoryPort,
+  IdempotencyRecord,
+} from "../../ports/evidenceRepository";
+
+type EvidenceRow = {
+  evidence_id: string;
+  project_id: string | null;
+  status: string;
+  idempotency_key: string | null;
+  version: number;
+  payload_json: string;
+};
+
+type IdempotencyRow = {
+  idempotency_key: string;
+  evidence_id: string;
+  fingerprint: string;
+  operation: string;
+};
+
+function cloneEvidence(evidence: Evidence): Evidence {
+  return structuredClone(evidence);
+}
+
+/**
+ * Durable Evidence repository on Product SQLite (M5).
+ * Mirrors MemoryEvidenceRepository OCC + IdempotencyRecord semantics.
+ */
+export class SqliteEvidenceRepository implements EvidenceRepositoryPort {
+  constructor(private readonly store: ProductSqliteHandle) {}
+
+  async findById(evidenceId: string): Promise<Evidence | null> {
+    const row = this.store.db
+      .prepare(
+        `SELECT evidence_id, project_id, status, idempotency_key, version, payload_json
+         FROM oa_evidence WHERE evidence_id = ?`,
+      )
+      .get(evidenceId) as EvidenceRow | undefined;
+    if (!row) return null;
+    return cloneEvidence(JSON.parse(row.payload_json) as Evidence);
+  }
+
+  async findByIdempotencyKey(idempotencyKey: string): Promise<{
+    evidence: Evidence;
+    record: IdempotencyRecord;
+  } | null> {
+    const row = this.store.db
+      .prepare(
+        `SELECT idempotency_key, evidence_id, fingerprint, operation
+         FROM oa_evidence_idempotency WHERE idempotency_key = ?`,
+      )
+      .get(idempotencyKey) as IdempotencyRow | undefined;
+    if (!row) return null;
+    const evidence = await this.findById(row.evidence_id);
+    if (!evidence) return null;
+    return {
+      evidence,
+      record: {
+        evidenceId: row.evidence_id,
+        fingerprint: row.fingerprint,
+        operation: row.operation as IdempotencyRecord["operation"],
+      },
+    };
+  }
+
+  async exists(evidenceId: string): Promise<boolean> {
+    const row = this.store.db
+      .prepare(`SELECT 1 AS ok FROM oa_evidence WHERE evidence_id = ?`)
+      .get(evidenceId) as { ok?: number } | undefined;
+    return row?.ok === 1;
+  }
+
+  async create(
+    evidence: Evidence,
+    record?: IdempotencyRecord,
+  ): Promise<void> {
+    const shape = validateEvidenceShape(evidence);
+    if (shape) {
+      throw new EvidenceDomainError(shape.detailCode, shape.reason);
+    }
+    if (evidence.version !== 1) {
+      throw new EvidenceDomainError(
+        "EVIDENCE_INVALID",
+        "create_requires_version_1",
+      );
+    }
+    if (await this.exists(evidence.evidenceId)) {
+      throw new EvidenceDomainError(
+        "EVIDENCE_ALREADY_EXISTS",
+        "evidence_id_taken",
+      );
+    }
+    if (record) {
+      const existing = await this.findByIdempotencyKey(
+        evidence.idempotencyKey ?? "",
+      );
+      if (existing && existing.evidence.evidenceId !== evidence.evidenceId) {
+        throw new EvidenceDomainError(
+          "IDEMPOTENCY_CONFLICT",
+          "idempotency_key_taken",
+        );
+      }
+    }
+    this.failIfForced();
+    const now = evidence.createdAt;
+    const payload = JSON.stringify(cloneEvidence(evidence));
+    this.store.db
+      .prepare(
+        `INSERT INTO oa_evidence(
+           evidence_id, project_id, status, idempotency_key, version,
+           payload_json, created_at, updated_at
+         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
+      )
+      .run(
+        evidence.evidenceId,
+        evidence.bindings.projectId ?? null,
+        evidence.status,
+        evidence.idempotencyKey ?? null,
+        evidence.version,
+        payload,
+        now,
+        now,
+      );
+    if (record && evidence.idempotencyKey) {
+      this.upsertIdempotency(evidence.idempotencyKey, record);
+    }
+  }
+
+  async update(
+    evidence: Evidence,
+    expectedVersion: number,
+    record?: IdempotencyRecord,
+  ): Promise<void> {
+    if (evidence.version !== expectedVersion + 1) {
+      throw new EvidenceDomainError("VERSION_CONFLICT", "version_not_monotone", {
+        expectedVersion,
+      });
+    }
+    const shape = validateEvidenceShape(evidence);
+    if (shape) {
+      throw new EvidenceDomainError(shape.detailCode, shape.reason);
+    }
+    this.failIfForced();
+    const now = evidence.updatedAt ?? evidence.createdAt;
+    const payload = JSON.stringify(cloneEvidence(evidence));
+    await this.store.runInTransaction(async () => {
+      const result = this.store.db
+        .prepare(
+          `UPDATE oa_evidence SET
+             project_id = ?,
+             status = ?,
+             idempotency_key = ?,
+             version = ?,
+             payload_json = ?,
+             updated_at = ?
+           WHERE evidence_id = ? AND version = ?`,
+        )
+        .run(
+          evidence.bindings.projectId ?? null,
+          evidence.status,
+          evidence.idempotencyKey ?? null,
+          evidence.version,
+          payload,
+          now,
+          evidence.evidenceId,
+          expectedVersion,
+        );
+      if (Number(result.changes) !== 1) {
+        const current = await this.findById(evidence.evidenceId);
+        if (!current) {
+          throw new EvidenceDomainError(
+            "EVIDENCE_NOT_FOUND",
+            "update_missing_evidence",
+          );
+        }
+        throw new EvidenceDomainError("VERSION_CONFLICT", "occ_mismatch", {
+          expectedVersion,
+          currentVersion: current.version,
+        });
+      }
+      if (record && evidence.idempotencyKey) {
+        this.upsertIdempotency(evidence.idempotencyKey, record);
+      }
+    });
+  }
+
+  private upsertIdempotency(
+    idempotencyKey: string,
+    record: IdempotencyRecord,
+  ): void {
+    this.store.db
+      .prepare(
+        `INSERT INTO oa_evidence_idempotency(
+           idempotency_key, evidence_id, fingerprint, operation
+         ) VALUES (?, ?, ?, ?)
+         ON CONFLICT(idempotency_key) DO UPDATE SET
+           evidence_id = excluded.evidence_id,
+           fingerprint = excluded.fingerprint,
+           operation = excluded.operation`,
+      )
+      .run(
+        idempotencyKey,
+        record.evidenceId,
+        record.fingerprint,
+        record.operation,
+      );
+  }
+
+  private failIfForced(): void {
+    if (this.store.failNextSave === "evidence") {
+      this.store.failNextSave = null;
+      throw new EvidenceDomainError(
+        "EVIDENCE_PERSISTENCE_FAILED",
+        "forced_evidence_save_failure",
+      );
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteReviewBundleRepository.ts b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteReviewBundleRepository.ts
new file mode 100644
index 0000000..37d00f6
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteReviewBundleRepository.ts
@@ -0,0 +1,327 @@
+import type { ProductSqliteHandle } from "@/lib/oa/project";
+import { ReviewBundleDomainError } from "../../domain/reviewBundleErrors";
+import { validateReviewBundleShape } from "../../domain/reviewBundleInvariants";
+import type { ReviewBundle } from "../../domain/reviewBundleTypes";
+import type {
+  ReviewBundleIdempotencyRecord,
+  ReviewBundleRepositoryPort,
+} from "../../ports/reviewBundleRepository";
+
+type BundleRow = {
+  review_bundle_id: string;
+  project_id: string;
+  status: string;
+  idempotency_key: string | null;
+  version: number;
+  payload_json: string;
+};
+
+type IdempotencyRow = {
+  idempotency_key: string;
+  review_bundle_id: string;
+  fingerprint: string;
+  operation: string;
+  successor_id: string | null;
+};
+
+function cloneBundle(bundle: ReviewBundle): ReviewBundle {
+  return structuredClone(bundle);
+}
+
+/**
+ * Durable ReviewBundle repository on Product SQLite (M5).
+ * createSuccessorAndMarkSuperseded runs inside productStore.runInTransaction.
+ */
+export class SqliteReviewBundleRepository
+  implements ReviewBundleRepositoryPort
+{
+  constructor(private readonly store: ProductSqliteHandle) {}
+
+  async findById(reviewBundleId: string): Promise<ReviewBundle | null> {
+    const row = this.store.db
+      .prepare(
+        `SELECT review_bundle_id, project_id, status, idempotency_key, version, payload_json
+         FROM oa_review_bundles WHERE review_bundle_id = ?`,
+      )
+      .get(reviewBundleId) as BundleRow | undefined;
+    if (!row) return null;
+    return cloneBundle(JSON.parse(row.payload_json) as ReviewBundle);
+  }
+
+  async findByIdempotencyKey(idempotencyKey: string): Promise<{
+    reviewBundle: ReviewBundle;
+    record: ReviewBundleIdempotencyRecord;
+    successor?: ReviewBundle;
+  } | null> {
+    const row = this.store.db
+      .prepare(
+        `SELECT idempotency_key, review_bundle_id, fingerprint, operation, successor_id
+         FROM oa_review_bundle_idempotency WHERE idempotency_key = ?`,
+      )
+      .get(idempotencyKey) as IdempotencyRow | undefined;
+    if (!row) return null;
+    const reviewBundle = await this.findById(row.review_bundle_id);
+    if (!reviewBundle) return null;
+    const successor = row.successor_id
+      ? ((await this.findById(row.successor_id)) ?? undefined)
+      : undefined;
+    return {
+      reviewBundle,
+      record: {
+        reviewBundleId: row.review_bundle_id,
+        fingerprint: row.fingerprint,
+        operation: row.operation as ReviewBundleIdempotencyRecord["operation"],
+      },
+      successor,
+    };
+  }
+
+  async exists(reviewBundleId: string): Promise<boolean> {
+    const row = this.store.db
+      .prepare(
+        `SELECT 1 AS ok FROM oa_review_bundles WHERE review_bundle_id = ?`,
+      )
+      .get(reviewBundleId) as { ok?: number } | undefined;
+    return row?.ok === 1;
+  }
+
+  async create(
+    bundle: ReviewBundle,
+    record?: ReviewBundleIdempotencyRecord & { successorId?: string },
+  ): Promise<void> {
+    const shape = validateReviewBundleShape(bundle);
+    if (shape) {
+      throw new ReviewBundleDomainError(shape.detailCode, shape.reason);
+    }
+    if (bundle.version !== 1) {
+      throw new ReviewBundleDomainError(
+        "REVIEW_BUNDLE_INVALID",
+        "create_requires_version_1",
+      );
+    }
+    if (await this.exists(bundle.reviewBundleId)) {
+      throw new ReviewBundleDomainError(
+        "REVIEW_BUNDLE_ALREADY_EXISTS",
+        "review_bundle_id_taken",
+      );
+    }
+    this.failIfForced();
+    this.insertBundle(bundle);
+    if (record && bundle.idempotencyKey) {
+      this.upsertIdempotency(bundle.idempotencyKey, record);
+    }
+  }
+
+  async update(
+    bundle: ReviewBundle,
+    expectedVersion: number,
+    record?: ReviewBundleIdempotencyRecord & { successorId?: string },
+  ): Promise<void> {
+    if (bundle.version !== expectedVersion + 1) {
+      throw new ReviewBundleDomainError(
+        "VERSION_CONFLICT",
+        "version_not_monotone",
+        { expectedVersion },
+      );
+    }
+    const shape = validateReviewBundleShape(bundle);
+    if (shape) {
+      throw new ReviewBundleDomainError(shape.detailCode, shape.reason);
+    }
+    this.failIfForced();
+    await this.store.runInTransaction(async () => {
+      const changes = this.updateBundleRowCas(bundle, expectedVersion);
+      if (changes !== 1) {
+        const current = await this.findById(bundle.reviewBundleId);
+        if (!current) {
+          throw new ReviewBundleDomainError(
+            "REVIEW_BUNDLE_NOT_FOUND",
+            "update_missing",
+          );
+        }
+        throw new ReviewBundleDomainError("VERSION_CONFLICT", "occ_mismatch", {
+          expectedVersion,
+          currentVersion: current.version,
+        });
+      }
+      if (record) {
+        const key = bundle.idempotencyKey;
+        if (key) {
+          this.upsertIdempotency(key, record);
+        }
+      }
+    });
+  }
+
+  async createSuccessorAndMarkSuperseded(
+    successor: ReviewBundle,
+    superseded: ReviewBundle,
+    expectedVersion: number,
+    record: ReviewBundleIdempotencyRecord & { successorId: string },
+  ): Promise<void> {
+    const successorShape = validateReviewBundleShape(successor);
+    if (successorShape) {
+      throw new ReviewBundleDomainError(
+        successorShape.detailCode,
+        successorShape.reason,
+      );
+    }
+    const supersededShape = validateReviewBundleShape(superseded);
+    if (supersededShape) {
+      throw new ReviewBundleDomainError(
+        supersededShape.detailCode,
+        supersededShape.reason,
+      );
+    }
+    if (successor.version !== 1) {
+      throw new ReviewBundleDomainError(
+        "REVIEW_BUNDLE_INVALID",
+        "successor_requires_version_1",
+      );
+    }
+    if (superseded.status !== "superseded") {
+      throw new ReviewBundleDomainError(
+        "REVIEW_BUNDLE_INVALID",
+        "source_must_be_superseded",
+      );
+    }
+    if (record.successorId !== successor.reviewBundleId) {
+      throw new ReviewBundleDomainError(
+        "REVIEW_BUNDLE_INVALID",
+        "record_successor_id_mismatch",
+      );
+    }
+    if (successor.reviewBundleId === superseded.reviewBundleId) {
+      throw new ReviewBundleDomainError(
+        "REVIEW_BUNDLE_INVALID",
+        "successor_must_differ_from_source",
+      );
+    }
+    if (superseded.version !== expectedVersion + 1) {
+      throw new ReviewBundleDomainError(
+        "VERSION_CONFLICT",
+        "version_not_monotone",
+        { expectedVersion },
+      );
+    }
+    if (!superseded.idempotencyKey) {
+      throw new ReviewBundleDomainError(
+        "REVIEW_BUNDLE_INVALID",
+        "reopen_idempotency_key_required",
+      );
+    }
+
+    await this.store.runInTransaction(async () => {
+      if (await this.exists(successor.reviewBundleId)) {
+        throw new ReviewBundleDomainError(
+          "REVIEW_BUNDLE_ALREADY_EXISTS",
+          "successor_review_bundle_id_taken",
+        );
+      }
+      this.failIfForced();
+      this.insertBundle(successor);
+      const changes = this.updateBundleRowCas(superseded, expectedVersion);
+      if (changes !== 1) {
+        const current = await this.findById(superseded.reviewBundleId);
+        if (!current) {
+          throw new ReviewBundleDomainError(
+            "REVIEW_BUNDLE_NOT_FOUND",
+            "reopen_source_missing",
+          );
+        }
+        throw new ReviewBundleDomainError("VERSION_CONFLICT", "occ_mismatch", {
+          expectedVersion,
+          currentVersion: current.version,
+        });
+      }
+      this.upsertIdempotency(superseded.idempotencyKey!, record);
+    });
+  }
+
+  private insertBundle(bundle: ReviewBundle): void {
+    const now = bundle.createdAt;
+    const payload = JSON.stringify(cloneBundle(bundle));
+    this.store.db
+      .prepare(
+        `INSERT INTO oa_review_bundles(
+           review_bundle_id, project_id, status, idempotency_key, version,
+           payload_json, created_at, updated_at
+         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
+      )
+      .run(
+        bundle.reviewBundleId,
+        bundle.projectId,
+        bundle.status,
+        bundle.idempotencyKey ?? null,
+        bundle.version,
+        payload,
+        now,
+        now,
+      );
+  }
+
+  /** Atomic CAS update — returns sqlite changes count. */
+  private updateBundleRowCas(
+    bundle: ReviewBundle,
+    expectedVersion: number,
+  ): number {
+    const now = bundle.updatedAt ?? bundle.createdAt;
+    const payload = JSON.stringify(cloneBundle(bundle));
+    const result = this.store.db
+      .prepare(
+        `UPDATE oa_review_bundles SET
+           project_id = ?,
+           status = ?,
+           idempotency_key = ?,
+           version = ?,
+           payload_json = ?,
+           updated_at = ?
+         WHERE review_bundle_id = ? AND version = ?`,
+      )
+      .run(
+        bundle.projectId,
+        bundle.status,
+        bundle.idempotencyKey ?? null,
+        bundle.version,
+        payload,
+        now,
+        bundle.reviewBundleId,
+        expectedVersion,
+      );
+    return Number(result.changes);
+  }
+
+  private upsertIdempotency(
+    idempotencyKey: string,
+    record: ReviewBundleIdempotencyRecord & { successorId?: string },
+  ): void {
+    this.store.db
+      .prepare(
+        `INSERT INTO oa_review_bundle_idempotency(
+           idempotency_key, review_bundle_id, fingerprint, operation, successor_id
+         ) VALUES (?, ?, ?, ?, ?)
+         ON CONFLICT(idempotency_key) DO UPDATE SET
+           review_bundle_id = excluded.review_bundle_id,
+           fingerprint = excluded.fingerprint,
+           operation = excluded.operation,
+           successor_id = excluded.successor_id`,
+      )
+      .run(
+        idempotencyKey,
+        record.reviewBundleId,
+        record.fingerprint,
+        record.operation,
+        record.successorId ?? null,
+      );
+  }
+
+  private failIfForced(): void {
+    if (this.store.failNextSave === "review_bundle") {
+      this.store.failNextSave = null;
+      throw new ReviewBundleDomainError(
+        "REVIEW_BUNDLE_PERSISTENCE_FAILED",
+        "forced_review_bundle_save_failure",
+      );
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts
index 03ea617..3f394db 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts
@@ -21,7 +21,7 @@ import type {
   ExecutionAttempt,
   ExecutionAttemptResult,
 } from "../domain/types";
-import type { MemoryExecutionAttemptStore } from "../infrastructure/memoryExecutionAttemptStore";
+import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
 import type { AgentRegistryPort } from "../ports/agentRegistry";
 import type { ExecutionAdapterPort } from "../ports/executionAdapter";
 import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
@@ -43,7 +43,7 @@ export class CancelExecutionAttempt {
     private readonly adapter: ExecutionAdapterPort,
     private readonly clock: ClockPort,
     private readonly audit: ExecutionAttemptAuditPort,
-    private readonly store: MemoryExecutionAttemptStore,
+    private readonly store: ExecutionAttemptTechnicalStorePort,
   ) {}

   async execute(
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts
index be8de58..6226702 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts
@@ -11,7 +11,7 @@ import type {
   ExecutionAttemptResult,
   RecordExecutionFailureRequest,
 } from "../domain/types";
-import type { MemoryExecutionAttemptStore } from "../infrastructure/memoryExecutionAttemptStore";
+import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
 import type { AgentRegistryPort } from "../ports/agentRegistry";
 import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
 import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
@@ -26,7 +26,7 @@ export class RecordExecutionFailure {
     private readonly registry: AgentRegistryPort,
     private readonly clock: ClockPort,
     private readonly audit: ExecutionAttemptAuditPort,
-    private readonly store: MemoryExecutionAttemptStore,
+    private readonly store: ExecutionAttemptTechnicalStorePort,
   ) {}

   async execute(
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
index 175cdc4..c0d5d0d 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
@@ -16,7 +16,7 @@ import type {
   ExecutionAttemptResult,
   RecordExecutionResultRequest,
 } from "../domain/types";
-import type { MemoryExecutionAttemptStore } from "../infrastructure/memoryExecutionAttemptStore";
+import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
 import type { AgentRegistryPort } from "../ports/agentRegistry";
 import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
 import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
@@ -33,7 +33,7 @@ export class RecordExecutionResult {
     private readonly clock: ClockPort,
     private readonly audit: ExecutionAttemptAuditPort,
     private readonly policy: AttemptPolicy,
-    private readonly store: MemoryExecutionAttemptStore,
+    private readonly store: ExecutionAttemptTechnicalStorePort,
   ) {}

   async execute(
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
index 5bb7b9f..a0f03b9 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
@@ -35,7 +35,7 @@ import type {
   SelectExecutionAgentRequest,
   SelectionStrategy,
 } from "../domain/types";
-import type { MemoryExecutionAttemptStore } from "../infrastructure/memoryExecutionAttemptStore";
+import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
 import type { AgentRegistryPort } from "../ports/agentRegistry";
 import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
 import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
@@ -59,7 +59,7 @@ export class SelectExecutionAgent {
     private readonly clock: ClockPort,
     private readonly audit: ExecutionAttemptAuditPort,
     private readonly policy: AttemptPolicy,
-    private readonly store?: MemoryExecutionAttemptStore,
+    private readonly store?: ExecutionAttemptTechnicalStorePort,
   ) {}

   async execute(
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index 9eb798c..576a400 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -52,7 +52,7 @@ import type {
   GateDGrant,
 } from "../domain/realLaunchSafety";
 import { isM4BoundedReadOnlyRealAgent } from "../infrastructure/m4BoundedReadOnlyCursorAgent";
-import type { MemoryExecutionAttemptStore } from "../infrastructure/memoryExecutionAttemptStore";
+import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
 import type { AgentRegistryPort } from "../ports/agentRegistry";
 import type { ExecutionAdapterPort } from "../ports/executionAdapter";
 import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
@@ -139,7 +139,7 @@ export class StartExecution {
     private readonly adapter: ExecutionAdapterPort,
     private readonly clock: ClockPort,
     private readonly audit: ExecutionAttemptAuditPort,
-    private readonly store?: MemoryExecutionAttemptStore,
+    private readonly store?: ExecutionAttemptTechnicalStorePort,
     private readonly realLaunchPort?: RealExecutionLaunchPort,
     private readonly safetyJournal?: RealLaunchSafetyJournalPort,
   ) {}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts
index fde1e69..0600f33 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts
@@ -19,7 +19,7 @@ import type {
   ExecutionAttemptResult,
   TriggerAttemptTimeoutRequest,
 } from "../domain/types";
-import type { MemoryExecutionAttemptStore } from "../infrastructure/memoryExecutionAttemptStore";
+import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
 import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
 import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
 import {
@@ -39,7 +39,7 @@ export class TriggerAttemptTimeout {
     private readonly clock: ClockPort,
     private readonly audit: ExecutionAttemptAuditPort,
     private readonly policy: AttemptPolicy,
-    private readonly store: MemoryExecutionAttemptStore,
+    private readonly store: ExecutionAttemptTechnicalStorePort,
   ) {}

   async execute(
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
index 85ec45b..2b74f41 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
@@ -46,6 +46,7 @@ export * from "./domain/invariants";
 export * from "./domain/realLaunchSafety";

 export * from "./ports/executionAttemptRepository";
+export * from "./ports/executionAttemptTechnicalStorePort";
 export * from "./ports/agentRegistry";
 export * from "./ports/executionAdapter";
 export * from "./ports/executionAttemptAudit";
@@ -86,6 +87,14 @@ export {

 export { MemoryExecutionAttemptStore } from "./infrastructure/memoryExecutionAttemptStore";
 export { MemoryExecutionAttemptRepository } from "./infrastructure/memoryExecutionAttemptRepository";
+export { SqliteExecutionAttemptRepository } from "./infrastructure/sqlite/sqliteExecutionAttemptRepository";
+export { SqliteExecutionAttemptTechnicalStore } from "./infrastructure/sqlite/sqliteExecutionAttemptTechnicalStore";
+export {
+  createSqliteExecutionAttemptServices,
+  createTestSqliteExecutionAttemptServices,
+  type CreateSqliteExecutionAttemptServicesOptions,
+  type SqliteExecutionAttemptServices,
+} from "./infrastructure/sqlite/createSqliteExecutionAttemptServices";
 export { MemoryAgentRegistry } from "./infrastructure/memoryAgentRegistry";
 export { TestExecutionAdapter } from "./infrastructure/testExecutionAdapter";
 export type {
@@ -169,6 +178,8 @@ import { TestExecutionAdapter } from "./infrastructure/testExecutionAdapter";
 import type { AgentDescriptor } from "./domain/types";
 import type { AgentRegistryPort } from "./ports/agentRegistry";
 import type { ExecutionAttemptAuditPort } from "./ports/executionAttemptAudit";
+import type { ExecutionAttemptRepositoryPort } from "./ports/executionAttemptRepository";
+import type { ExecutionAttemptTechnicalStorePort } from "./ports/executionAttemptTechnicalStorePort";
 import type { RealExecutionLaunchPort } from "./ports/realExecutionLaunchPort";
 import type { RealLaunchSafetyJournalPort } from "./ports/realLaunchSafetyJournalPort";

@@ -196,8 +207,8 @@ export type RealBoundaryWiring = {
 };

 export type ExecutionAttemptServices = {
-  store: MemoryExecutionAttemptStore;
-  attempts: MemoryExecutionAttemptRepository;
+  store: ExecutionAttemptTechnicalStorePort;
+  attempts: ExecutionAttemptRepositoryPort;
   registry: AgentRegistryPort;
   adapter: InjectableExecutionAdapter;
   audit: ExecutionAttemptAuditPort;
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
new file mode 100644
index 0000000..eccb4cd
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
@@ -0,0 +1,240 @@
+import type { ClockPort } from "@/lib/oa/doctrine";
+import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
+import type {
+  AuthorityResolverPort,
+  DecisionServices,
+} from "@/lib/oa/decision";
+import type { ExecutionContractServices } from "@/lib/oa/execution-contract";
+import type { ProductSqliteHandle } from "@/lib/oa/project";
+import {
+  resolveAttemptPolicy,
+  type AttemptPolicy,
+} from "../../application/attemptPolicy";
+import { CancelExecutionAttempt } from "../../application/cancelExecutionAttempt";
+import { CheckAttemptAuthorization } from "../../application/checkAttemptAuthorization";
+import { ExecutionContractStatusWriter } from "../../application/executionContractStatusWriter";
+import { GetExecutionAttempt } from "../../application/getExecutionAttempt";
+import { ListExecutionAttempts } from "../../application/listExecutionAttempts";
+import { RecordExecutionFailure } from "../../application/recordExecutionFailure";
+import { RecordExecutionResult } from "../../application/recordExecutionResult";
+import { RetryExecutionAttempt } from "../../application/retryExecutionAttempt";
+import { SelectExecutionAgent } from "../../application/selectExecutionAgent";
+import { StartExecution } from "../../application/startExecution";
+import { TriggerAttemptTimeout } from "../../application/triggerAttemptTimeout";
+import type { AgentDescriptor } from "../../domain/types";
+import { MemoryAgentRegistry } from "../memoryAgentRegistry";
+import { NoOpExecutionAdapter } from "../noOpExecutionAdapter";
+import {
+  ConsoleExecutionAttemptAuditJournal,
+  MemoryExecutionAttemptAuditJournal,
+} from "../observability";
+import { TestExecutionAdapter } from "../testExecutionAdapter";
+import type { AgentRegistryPort } from "../../ports/agentRegistry";
+import type { ExecutionAttemptAuditPort } from "../../ports/executionAttemptAudit";
+import type { ExecutionAttemptRepositoryPort } from "../../ports/executionAttemptRepository";
+import type { ExecutionAttemptTechnicalStorePort } from "../../ports/executionAttemptTechnicalStorePort";
+import { SqliteExecutionAttemptRepository } from "./sqliteExecutionAttemptRepository";
+import { SqliteExecutionAttemptTechnicalStore } from "./sqliteExecutionAttemptTechnicalStore";
+
+type InjectableExecutionAdapter = TestExecutionAdapter | NoOpExecutionAdapter;
+
+function isInjectableExecutionAdapter(
+  candidate: unknown,
+): candidate is InjectableExecutionAdapter {
+  return (
+    candidate instanceof TestExecutionAdapter ||
+    candidate instanceof NoOpExecutionAdapter
+  );
+}
+
+export type CreateSqliteExecutionAttemptServicesOptions = {
+  decisionServices: DecisionServices;
+  executionContractServices: ExecutionContractServices;
+  productStore: ProductSqliteHandle;
+  agents?: readonly AgentDescriptor[];
+  registry?: MemoryAgentRegistry;
+  adapter?: InjectableExecutionAdapter;
+  clock?: ClockPort;
+  audit?: ExecutionAttemptAuditPort;
+  policy?: Partial<AttemptPolicy>;
+  authorityResolver?: AuthorityResolverPort;
+};
+
+export type SqliteExecutionAttemptServices = {
+  store: ExecutionAttemptTechnicalStorePort;
+  attempts: ExecutionAttemptRepositoryPort;
+  registry: AgentRegistryPort;
+  adapter: InjectableExecutionAdapter;
+  audit: ExecutionAttemptAuditPort;
+  policy: AttemptPolicy;
+  contractStatusWriter: ExecutionContractStatusWriter;
+  productStore: ProductSqliteHandle;
+  selectExecutionAgent: SelectExecutionAgent;
+  startExecution: StartExecution;
+  cancelExecutionAttempt: CancelExecutionAttempt;
+  recordExecutionResult: RecordExecutionResult;
+  recordExecutionFailure: RecordExecutionFailure;
+  retryExecutionAttempt: RetryExecutionAttempt;
+  triggerAttemptTimeout: TriggerAttemptTimeout;
+  getExecutionAttempt: GetExecutionAttempt;
+  listExecutionAttempts: ListExecutionAttempts;
+  checkAttemptAuthorization: CheckAttemptAuthorization;
+};
+
+/**
+ * Durable ExecutionAttempt services on Product SQLite (M5-A).
+ * Does NOT wire realBoundary / Gate D / REAL launch (M4 REAL-OFF unchanged).
+ */
+export function createSqliteExecutionAttemptServices(
+  options: CreateSqliteExecutionAttemptServicesOptions,
+): SqliteExecutionAttemptServices {
+  if (options.registry && options.agents) {
+    throw new Error("execution_attempt_factory_registry_or_agents_not_both");
+  }
+  const registry =
+    options.registry ?? new MemoryAgentRegistry(options.agents ?? []);
+
+  const adapter = options.adapter ?? new NoOpExecutionAdapter();
+  if (!isInjectableExecutionAdapter(adapter)) {
+    throw new Error("execution_attempt_factory_adapter_not_allowed");
+  }
+
+  const clock = options.clock ?? new SystemClock();
+  const audit = options.audit ?? new ConsoleExecutionAttemptAuditJournal();
+  const authority =
+    options.authorityResolver ?? options.decisionServices.authority;
+  const policy = resolveAttemptPolicy(options.policy);
+
+  const store = new SqliteExecutionAttemptTechnicalStore(options.productStore);
+  const attempts = new SqliteExecutionAttemptRepository(options.productStore);
+
+  const contracts = options.executionContractServices.contracts;
+  const contractStatusWriter = new ExecutionContractStatusWriter(
+    contracts,
+    options.executionContractServices.store,
+    attempts,
+  );
+
+  const selectExecutionAgent = new SelectExecutionAgent(
+    attempts,
+    contracts,
+    options.executionContractServices.checkExecutionAuthorization,
+    options.decisionServices,
+    authority,
+    registry,
+    clock,
+    audit,
+    policy,
+    store,
+  );
+
+  return {
+    store,
+    attempts,
+    registry,
+    adapter,
+    audit,
+    policy,
+    contractStatusWriter,
+    productStore: options.productStore,
+    selectExecutionAgent,
+    startExecution: new StartExecution(
+      attempts,
+      contracts,
+      contractStatusWriter,
+      options.executionContractServices.checkExecutionAuthorization,
+      options.decisionServices,
+      authority,
+      registry,
+      adapter,
+      clock,
+      audit,
+      store,
+    ),
+    cancelExecutionAttempt: new CancelExecutionAttempt(
+      attempts,
+      contracts,
+      contractStatusWriter,
+      authority,
+      registry,
+      adapter,
+      clock,
+      audit,
+      store,
+    ),
+    recordExecutionResult: new RecordExecutionResult(
+      attempts,
+      contracts,
+      contractStatusWriter,
+      registry,
+      clock,
+      audit,
+      policy,
+      store,
+    ),
+    recordExecutionFailure: new RecordExecutionFailure(
+      attempts,
+      contracts,
+      contractStatusWriter,
+      registry,
+      clock,
+      audit,
+      store,
+    ),
+    retryExecutionAttempt: new RetryExecutionAttempt(
+      attempts,
+      contracts,
+      selectExecutionAgent,
+      authority,
+      clock,
+      audit,
+      policy,
+    ),
+    triggerAttemptTimeout: new TriggerAttemptTimeout(
+      attempts,
+      contracts,
+      contractStatusWriter,
+      authority,
+      clock,
+      audit,
+      policy,
+      store,
+    ),
+    getExecutionAttempt: new GetExecutionAttempt(attempts, clock, audit),
+    listExecutionAttempts: new ListExecutionAttempts(attempts, clock, audit),
+    checkAttemptAuthorization: new CheckAttemptAuthorization(
+      attempts,
+      contracts,
+      options.executionContractServices.checkExecutionAuthorization,
+      authority,
+      clock,
+      audit,
+    ),
+  };
+}
+
+export function createTestSqliteExecutionAttemptServices(
+  options: CreateSqliteExecutionAttemptServicesOptions & {
+    audit?: MemoryExecutionAttemptAuditJournal;
+    adapter?: TestExecutionAdapter | NoOpExecutionAdapter;
+    fixedNowIso?: string;
+  },
+): SqliteExecutionAttemptServices & {
+  audit: MemoryExecutionAttemptAuditJournal;
+} {
+  const audit = options.audit ?? new MemoryExecutionAttemptAuditJournal();
+  const clock =
+    options.clock ??
+    (options.fixedNowIso
+      ? new FixedClock(options.fixedNowIso)
+      : new FixedClock("2026-08-15T07:00:00.000Z"));
+  const adapter = options.adapter ?? new TestExecutionAdapter();
+  return createSqliteExecutionAttemptServices({
+    ...options,
+    adapter,
+    clock,
+    audit,
+  }) as SqliteExecutionAttemptServices & {
+    audit: MemoryExecutionAttemptAuditJournal;
+  };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteExecutionAttemptRepository.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteExecutionAttemptRepository.ts
new file mode 100644
index 0000000..027e6b7
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteExecutionAttemptRepository.ts
@@ -0,0 +1,348 @@
+import type { ProductSqliteHandle } from "@/lib/oa/project";
+import { ExecutionAttemptDomainError } from "../../domain/errors";
+import { isAttemptTerminal, validateAttemptShape } from "../../domain/invariants";
+import type { ExecutionAttempt } from "../../domain/types";
+import type {
+  ActiveIndexDrift,
+  ExecutionAttemptRepositoryPort,
+} from "../../ports/executionAttemptRepository";
+
+type AttemptRow = {
+  attempt_id: string;
+  execution_contract_id: string;
+  status: string;
+  idempotency_key: string;
+  version: number;
+  payload_json: string;
+};
+
+function cloneAttempt(attempt: ExecutionAttempt): ExecutionAttempt {
+  return structuredClone(attempt);
+}
+
+/**
+ * Durable ExecutionAttempt repository on Product SQLite (M5).
+ * Mirrors MemoryExecutionAttemptRepository OCC + active-index semantics.
+ */
+export class SqliteExecutionAttemptRepository
+  implements ExecutionAttemptRepositoryPort
+{
+  constructor(private readonly store: ProductSqliteHandle) {}
+
+  async findById(attemptId: string): Promise<ExecutionAttempt | null> {
+    const row = this.store.db
+      .prepare(
+        `SELECT attempt_id, execution_contract_id, status, idempotency_key,
+                version, payload_json
+         FROM oa_execution_attempts WHERE attempt_id = ?`,
+      )
+      .get(attemptId) as AttemptRow | undefined;
+    if (!row) return null;
+    return cloneAttempt(JSON.parse(row.payload_json) as ExecutionAttempt);
+  }
+
+  async findByIdempotencyKey(
+    idempotencyKey: string,
+  ): Promise<ExecutionAttempt | null> {
+    const row = this.store.db
+      .prepare(
+        `SELECT payload_json FROM oa_execution_attempts WHERE idempotency_key = ?`,
+      )
+      .get(idempotencyKey) as { payload_json?: string } | undefined;
+    if (!row?.payload_json) return null;
+    return cloneAttempt(JSON.parse(row.payload_json) as ExecutionAttempt);
+  }
+
+  async exists(attemptId: string): Promise<boolean> {
+    const row = this.store.db
+      .prepare(`SELECT 1 AS ok FROM oa_execution_attempts WHERE attempt_id = ?`)
+      .get(attemptId) as { ok?: number } | undefined;
+    return row?.ok === 1;
+  }
+
+  async create(attempt: ExecutionAttempt): Promise<void> {
+    const shape = validateAttemptShape(attempt);
+    if (shape) {
+      throw new ExecutionAttemptDomainError(shape.detailCode, shape.reason);
+    }
+    if (attempt.version !== 1) {
+      throw new ExecutionAttemptDomainError(
+        "ATTEMPT_INVALID",
+        "create_requires_version_1",
+      );
+    }
+    if (await this.exists(attempt.attemptId)) {
+      throw new ExecutionAttemptDomainError(
+        "ATTEMPT_ALREADY_EXISTS",
+        "attempt_id_taken",
+      );
+    }
+    const existingKeyOwner = await this.findByIdempotencyKey(
+      attempt.idempotencyKey,
+    );
+    if (
+      existingKeyOwner &&
+      existingKeyOwner.attemptId !== attempt.attemptId
+    ) {
+      throw new ExecutionAttemptDomainError(
+        "ATTEMPT_IDEMPOTENCY_CONFLICT",
+        "idempotency_key_taken",
+      );
+    }
+    this.failIfForced();
+    const now = attempt.createdAt;
+    const payload = JSON.stringify(cloneAttempt(attempt));
+    this.store.db
+      .prepare(
+        `INSERT INTO oa_execution_attempts(
+           attempt_id, execution_contract_id, status, idempotency_key,
+           version, result_recording_count, payload_json, created_at, updated_at
+         ) VALUES (?, ?, ?, ?, ?, 0, ?, ?, ?)`,
+      )
+      .run(
+        attempt.attemptId,
+        attempt.executionContractId,
+        attempt.status,
+        attempt.idempotencyKey,
+        attempt.version,
+        payload,
+        now,
+        now,
+      );
+  }
+
+  async update(
+    attempt: ExecutionAttempt,
+    expectedVersion: number,
+  ): Promise<void> {
+    if (attempt.version !== expectedVersion + 1) {
+      throw new ExecutionAttemptDomainError(
+        "VERSION_CONFLICT",
+        "version_not_monotone",
+        { expectedVersion },
+      );
+    }
+    const shape = validateAttemptShape(attempt);
+    if (shape) {
+      throw new ExecutionAttemptDomainError(shape.detailCode, shape.reason);
+    }
+    this.failIfForced();
+    const now = attempt.updatedAt ?? attempt.completedAt ?? attempt.createdAt;
+    const payload = JSON.stringify(cloneAttempt(attempt));
+    // Atomic CAS: OCC enforced by SQL WHERE version = expectedVersion.
+    const result = this.store.db
+      .prepare(
+        `UPDATE oa_execution_attempts SET
+           execution_contract_id = ?,
+           status = ?,
+           idempotency_key = ?,
+           version = ?,
+           payload_json = ?,
+           updated_at = ?
+         WHERE attempt_id = ? AND version = ?`,
+      )
+      .run(
+        attempt.executionContractId,
+        attempt.status,
+        attempt.idempotencyKey,
+        attempt.version,
+        payload,
+        now,
+        attempt.attemptId,
+        expectedVersion,
+      );
+    if (Number(result.changes) !== 1) {
+      const current = await this.findById(attempt.attemptId);
+      if (!current) {
+        throw new ExecutionAttemptDomainError(
+          "ATTEMPT_NOT_FOUND",
+          "update_missing_attempt",
+        );
+      }
+      throw new ExecutionAttemptDomainError("VERSION_CONFLICT", "occ_mismatch", {
+        expectedVersion,
+        currentVersion: current.version,
+      });
+    }
+  }
+
+  async listByContract(
+    executionContractId: string,
+  ): Promise<ExecutionAttempt[]> {
+    const rows = this.store.db
+      .prepare(
+        `SELECT payload_json FROM oa_execution_attempts
+         WHERE execution_contract_id = ?
+         ORDER BY attempt_id ASC`,
+      )
+      .all(executionContractId) as Array<{ payload_json: string }>;
+    return rows.map((row) =>
+      cloneAttempt(JSON.parse(row.payload_json) as ExecutionAttempt),
+    );
+  }
+
+  async findActiveByContract(
+    executionContractId: string,
+  ): Promise<ExecutionAttempt | null> {
+    const row = this.store.db
+      .prepare(
+        `SELECT attempt_id FROM oa_execution_attempt_active
+         WHERE execution_contract_id = ?`,
+      )
+      .get(executionContractId) as { attempt_id?: string } | undefined;
+    if (!row?.attempt_id) return null;
+    return this.findById(row.attempt_id);
+  }
+
+  async reserveActiveContract(
+    executionContractId: string,
+    attemptId: string,
+  ): Promise<void> {
+    // Atomic insert — never silently replace another attempt's reservation.
+    const result = this.store.db
+      .prepare(
+        `INSERT INTO oa_execution_attempt_active(execution_contract_id, attempt_id)
+         VALUES (?, ?)
+         ON CONFLICT(execution_contract_id) DO NOTHING`,
+      )
+      .run(executionContractId, attemptId);
+    if (Number(result.changes) === 1) {
+      return;
+    }
+    const current = this.store.db
+      .prepare(
+        `SELECT attempt_id FROM oa_execution_attempt_active
+         WHERE execution_contract_id = ?`,
+      )
+      .get(executionContractId) as { attempt_id?: string } | undefined;
+    if (current?.attempt_id === attemptId) {
+      return; // idempotent same attemptId
+    }
+    throw new ExecutionAttemptDomainError(
+      "EXECUTION_ALREADY_ACTIVE",
+      "active_attempt_already_reserved",
+    );
+  }
+
+  async releaseActiveContract(
+    executionContractId: string,
+    attemptId: string,
+  ): Promise<void> {
+    this.store.db
+      .prepare(
+        `DELETE FROM oa_execution_attempt_active
+         WHERE execution_contract_id = ? AND attempt_id = ?`,
+      )
+      .run(executionContractId, attemptId);
+  }
+
+  async rebuildActiveIndex(): Promise<void> {
+    await this.store.runInTransaction(async () => {
+      const rows = this.store.db
+        .prepare(
+          `SELECT payload_json FROM oa_execution_attempts ORDER BY attempt_id ASC`,
+        )
+        .all() as Array<{ payload_json: string }>;
+      const rebuilt = new Map<string, string>();
+      for (const row of rows) {
+        const attempt = JSON.parse(row.payload_json) as ExecutionAttempt;
+        if (isAttemptTerminal(attempt.status)) continue;
+        const existing = rebuilt.get(attempt.executionContractId);
+        if (existing && existing !== attempt.attemptId) {
+          throw new ExecutionAttemptDomainError(
+            "ACTIVE_INDEX_DRIFT",
+            "multiple_active_attempts_for_contract",
+          );
+        }
+        rebuilt.set(attempt.executionContractId, attempt.attemptId);
+      }
+      this.store.db.exec(`DELETE FROM oa_execution_attempt_active`);
+      const insert = this.store.db.prepare(
+        `INSERT INTO oa_execution_attempt_active(execution_contract_id, attempt_id)
+         VALUES (?, ?)`,
+      );
+      for (const [executionContractId, attemptId] of rebuilt) {
+        insert.run(executionContractId, attemptId);
+      }
+    });
+  }
+
+  async detectActiveIndexDrift(): Promise<ActiveIndexDrift[]> {
+    const drifts: ActiveIndexDrift[] = [];
+    const indexed = this.store.db
+      .prepare(
+        `SELECT execution_contract_id, attempt_id FROM oa_execution_attempt_active`,
+      )
+      .all() as Array<{ execution_contract_id: string; attempt_id: string }>;
+
+    for (const row of indexed) {
+      const attempt = await this.findById(row.attempt_id);
+      if (!attempt) {
+        drifts.push({
+          executionContractId: row.execution_contract_id,
+          attemptId: row.attempt_id,
+          reason: "indexed_attempt_missing",
+        });
+        continue;
+      }
+      if (isAttemptTerminal(attempt.status)) {
+        drifts.push({
+          executionContractId: row.execution_contract_id,
+          attemptId: row.attempt_id,
+          reason: "indexed_attempt_terminal",
+        });
+      }
+    }
+
+    const allRows = this.store.db
+      .prepare(`SELECT payload_json FROM oa_execution_attempts`)
+      .all() as Array<{ payload_json: string }>;
+    const seenActive = new Map<string, string>();
+    const activeIndex = new Map(
+      indexed.map((r) => [r.execution_contract_id, r.attempt_id] as const),
+    );
+
+    for (const row of allRows) {
+      const attempt = JSON.parse(row.payload_json) as ExecutionAttempt;
+      if (isAttemptTerminal(attempt.status)) continue;
+      const previous = seenActive.get(attempt.executionContractId);
+      if (previous && previous !== attempt.attemptId) {
+        drifts.push({
+          executionContractId: attempt.executionContractId,
+          attemptId: attempt.attemptId,
+          reason: "multiple_active_attempts",
+        });
+      }
+      seenActive.set(attempt.executionContractId, attempt.attemptId);
+      const indexedId = activeIndex.get(attempt.executionContractId);
+      if (indexedId !== attempt.attemptId) {
+        drifts.push({
+          executionContractId: attempt.executionContractId,
+          attemptId: attempt.attemptId,
+          reason: "active_attempt_not_indexed",
+        });
+      }
+    }
+    return drifts;
+  }
+
+  async assertActiveIndexConsistent(): Promise<void> {
+    const drifts = await this.detectActiveIndexDrift();
+    if (drifts.length > 0) {
+      throw new ExecutionAttemptDomainError(
+        "ACTIVE_INDEX_DRIFT",
+        `drift_${drifts[0].reason}`,
+      );
+    }
+  }
+
+  private failIfForced(): void {
+    if (this.store.failNextSave === "attempt") {
+      this.store.failNextSave = null;
+      throw new ExecutionAttemptDomainError(
+        "EXECUTION_PERSISTENCE_FAILED",
+        "forced_execution_attempt_save_failure",
+      );
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteExecutionAttemptTechnicalStore.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteExecutionAttemptTechnicalStore.ts
new file mode 100644
index 0000000..3341a2d
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteExecutionAttemptTechnicalStore.ts
@@ -0,0 +1,49 @@
+import type { ProductSqliteHandle } from "@/lib/oa/project";
+import type { ExecutionAttemptTechnicalStorePort } from "../../ports/executionAttemptTechnicalStorePort";
+
+/**
+ * Durable Map-like facade for result-recording budget.
+ * Persists to oa_execution_attempt_result_budget (side table).
+ */
+class SqliteResultRecordingAttemptsMap {
+  constructor(private readonly store: ProductSqliteHandle) {}
+
+  get(attemptId: string): number | undefined {
+    const row = this.store.db
+      .prepare(
+        `SELECT count FROM oa_execution_attempt_result_budget WHERE attempt_id = ?`,
+      )
+      .get(attemptId) as { count?: number } | undefined;
+    return typeof row?.count === "number" ? row.count : undefined;
+  }
+
+  set(attemptId: string, count: number): this {
+    this.store.db
+      .prepare(
+        `INSERT INTO oa_execution_attempt_result_budget(attempt_id, count)
+         VALUES (?, ?)
+         ON CONFLICT(attempt_id) DO UPDATE SET count = excluded.count`,
+      )
+      .run(attemptId, count);
+    return this;
+  }
+}
+
+/**
+ * Technical Attempt store over Product SQLite — shares UoW with contracts/LPS.
+ */
+export class SqliteExecutionAttemptTechnicalStore
+  implements ExecutionAttemptTechnicalStorePort
+{
+  readonly resultRecordingAttempts: SqliteResultRecordingAttemptsMap;
+
+  constructor(private readonly productStore: ProductSqliteHandle) {
+    this.resultRecordingAttempts = new SqliteResultRecordingAttemptsMap(
+      productStore,
+    );
+  }
+
+  async runInTransaction<T>(fn: () => Promise<T>): Promise<T> {
+    return this.productStore.runInTransaction(fn);
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/executionAttemptTechnicalStorePort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/executionAttemptTechnicalStorePort.ts
new file mode 100644
index 0000000..4bd4ea0
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/executionAttemptTechnicalStorePort.ts
@@ -0,0 +1,21 @@
+/**
+ * Technical store surface used by Attempt use-cases:
+ * - transactional unit of work
+ * - durable/process-local result-recording budget (RTA5-06)
+ *
+ * MemoryExecutionAttemptStore satisfies this structurally.
+ * SQLite backs resultRecordingAttempts via oa_execution_attempt_result_budget.
+ */
+export interface ExecutionAttemptTechnicalStorePort {
+  /**
+   * attemptId → bounded RecordExecutionResult attempts.
+   * Only get/set are required by application code; Map satisfies this.
+   */
+  resultRecordingAttempts: {
+    get(key: string): number | undefined;
+    set(key: string, value: number): unknown;
+  };
+  runInTransaction<T>(fn: () => Promise<T>): Promise<T>;
+  /** Test hook — force next Attempt persist to throw (Memory path). */
+  failNextSave?: boolean;
+}
diff --git a/projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts b/projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts
index d15101f..8b019b7 100644
--- a/projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts
+++ b/projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts
@@ -266,6 +266,18 @@ export class AppendLivingProjectStateVersion {
               : current.decisionIds
                 ? [...current.decisionIds]
                 : [],
+          evidenceIds:
+            request.evidenceIds !== undefined
+              ? [...request.evidenceIds]
+              : current.evidenceIds
+                ? [...current.evidenceIds]
+                : [],
+          reviewBundleIds:
+            request.reviewBundleIds !== undefined
+              ? [...request.reviewBundleIds]
+              : current.reviewBundleIds
+                ? [...current.reviewBundleIds]
+                : [],
           createdAt: timestamp,
           createdBy: structuredClone(request.createdBy),
           correlationId,
diff --git a/projects/sfia-studio/app/lib/oa/project/domain/types.ts b/projects/sfia-studio/app/lib/oa/project/domain/types.ts
index 4caed79..b3f1951 100644
--- a/projects/sfia-studio/app/lib/oa/project/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/project/domain/types.ts
@@ -125,6 +125,16 @@ export type AppendLivingProjectStateRequest = {
    * forward from the current LPS snapshot (same pattern as epistemicItemIds).
    */
   decisionIds?: string[];
+  /**
+   * Optional evidence id linkage (M5-B W1). When omitted, carried forward
+   * from the current LPS snapshot.
+   */
+  evidenceIds?: string[];
+  /**
+   * Optional review-bundle id linkage (M5-B W1). When omitted, carried
+   * forward from the current LPS snapshot.
+   */
+  reviewBundleIds?: string[];
 };

 /** Modeled ErrorRecord codes applicable to Project/LPS (M-OA). */
diff --git a/projects/sfia-studio/app/lib/oa/project/index.ts b/projects/sfia-studio/app/lib/oa/project/index.ts
index f42706f..133a5da 100644
--- a/projects/sfia-studio/app/lib/oa/project/index.ts
+++ b/projects/sfia-studio/app/lib/oa/project/index.ts
@@ -35,6 +35,7 @@ export {
   PRODUCT_SCHEMA_VERSION,
   PRODUCT_SCHEMA_VERSION_M1,
   PRODUCT_SCHEMA_VERSION_M2,
+  PRODUCT_SCHEMA_VERSION_M3,
 } from "./infrastructure/sqlite/db";
 export type { ProductSqliteHandle } from "./infrastructure/sqlite/productSqliteHandle";
 export { SqliteProductStore } from "./infrastructure/sqlite/sqliteProductStore";
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
index 54190ad..b11b5ff 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
@@ -2,7 +2,8 @@ import { DatabaseSync } from "node:sqlite";

 export const PRODUCT_SCHEMA_VERSION_M1 = "m1-0.1.0" as const;
 export const PRODUCT_SCHEMA_VERSION_M2 = "m2-0.1.0" as const;
-export const PRODUCT_SCHEMA_VERSION = "m3-0.1.0" as const;
+export const PRODUCT_SCHEMA_VERSION_M3 = "m3-0.1.0" as const;
+export const PRODUCT_SCHEMA_VERSION = "m5-0.1.0" as const;

 const BASE_SCHEMA_SQL = `
 PRAGMA foreign_keys = ON;
@@ -122,6 +123,78 @@ CREATE INDEX IF NOT EXISTS idx_oa_execution_contracts_idempotency
   ON oa_execution_contracts(idempotency_key);
 `;

+const M5_ATTEMPT_EVIDENCE_SCHEMA_SQL = `
+CREATE TABLE IF NOT EXISTS oa_execution_attempts (
+  attempt_id TEXT PRIMARY KEY NOT NULL,
+  execution_contract_id TEXT NOT NULL,
+  status TEXT NOT NULL,
+  idempotency_key TEXT NOT NULL UNIQUE,
+  version INTEGER NOT NULL,
+  result_recording_count INTEGER NOT NULL DEFAULT 0,
+  payload_json TEXT NOT NULL,
+  created_at TEXT NOT NULL,
+  updated_at TEXT
+);
+
+CREATE INDEX IF NOT EXISTS idx_oa_execution_attempts_contract
+  ON oa_execution_attempts(execution_contract_id, attempt_id);
+
+CREATE TABLE IF NOT EXISTS oa_execution_attempt_active (
+  execution_contract_id TEXT PRIMARY KEY NOT NULL,
+  attempt_id TEXT NOT NULL
+);
+
+CREATE TABLE IF NOT EXISTS oa_execution_attempt_result_budget (
+  attempt_id TEXT PRIMARY KEY NOT NULL,
+  count INTEGER NOT NULL
+);
+
+CREATE TABLE IF NOT EXISTS oa_evidence (
+  evidence_id TEXT PRIMARY KEY NOT NULL,
+  project_id TEXT,
+  status TEXT NOT NULL,
+  idempotency_key TEXT UNIQUE,
+  version INTEGER NOT NULL,
+  payload_json TEXT NOT NULL,
+  created_at TEXT NOT NULL,
+  updated_at TEXT
+);
+
+CREATE INDEX IF NOT EXISTS idx_oa_evidence_project
+  ON oa_evidence(project_id, created_at);
+
+CREATE TABLE IF NOT EXISTS oa_evidence_idempotency (
+  idempotency_key TEXT PRIMARY KEY NOT NULL,
+  evidence_id TEXT NOT NULL,
+  fingerprint TEXT NOT NULL,
+  operation TEXT NOT NULL,
+  FOREIGN KEY (evidence_id) REFERENCES oa_evidence(evidence_id)
+);
+
+CREATE TABLE IF NOT EXISTS oa_review_bundles (
+  review_bundle_id TEXT PRIMARY KEY NOT NULL,
+  project_id TEXT NOT NULL,
+  status TEXT NOT NULL,
+  idempotency_key TEXT UNIQUE,
+  version INTEGER NOT NULL,
+  payload_json TEXT NOT NULL,
+  created_at TEXT NOT NULL,
+  updated_at TEXT
+);
+
+CREATE INDEX IF NOT EXISTS idx_oa_review_bundles_project
+  ON oa_review_bundles(project_id, created_at);
+
+CREATE TABLE IF NOT EXISTS oa_review_bundle_idempotency (
+  idempotency_key TEXT PRIMARY KEY NOT NULL,
+  review_bundle_id TEXT NOT NULL,
+  fingerprint TEXT NOT NULL,
+  operation TEXT NOT NULL,
+  successor_id TEXT,
+  FOREIGN KEY (review_bundle_id) REFERENCES oa_review_bundles(review_bundle_id)
+);
+`;
+
 function readSchemaVersion(db: DatabaseSync): string | null {
   const row = db
     .prepare("SELECT value FROM schema_meta WHERE key = ?")
@@ -159,8 +232,12 @@ function applyM3(db: DatabaseSync): void {
   db.exec(M3_DECISION_CONTRACT_SCHEMA_SQL);
 }

+function applyM5(db: DatabaseSync): void {
+  db.exec(M5_ATTEMPT_EVIDENCE_SCHEMA_SQL);
+}
+
 /**
- * Open Product SQLite with additive M1→M2→M3 migration.
+ * Open Product SQLite with additive M1→M2→M3→M5 migration.
  * Fail closed on unknown/future schema versions.
  */
 export function openProductSqlite(dbPath: string): DatabaseSync {
@@ -172,13 +249,19 @@ export function openProductSqlite(dbPath: string): DatabaseSync {
   if (version === null || version === PRODUCT_SCHEMA_VERSION_M1) {
     applyM2(db);
     applyM3(db);
+    applyM5(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION_M2) {
     applyM3(db);
+    applyM5(db);
+    setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
+  } else if (version === PRODUCT_SCHEMA_VERSION_M3) {
+    applyM5(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION) {
     applyM2(db);
     applyM3(db);
+    applyM5(db);
   } else {
     try {
       db.close();
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
index a91f6cc..102fafc 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
@@ -2,10 +2,20 @@ import type { DatabaseSync } from "node:sqlite";
 import type { ProjectPersistenceUnitOfWorkPort } from "../../ports/projectPersistenceUnitOfWorkPort";

 /**
- * Shared Product SQLite handle for Project + Cycle + Decision + Contract (M3).
+ * Shared Product SQLite handle for Project + Cycle + Decision + Contract +
+ * Attempt/Evidence/ReviewBundle (M5).
  * Downstream adapters depend on this shape — not on SqliteProductStore class.
  */
 export type ProductSqliteHandle = ProjectPersistenceUnitOfWorkPort & {
   readonly db: DatabaseSync;
-  failNextSave?: "project" | "lps" | "cycle" | "decision" | "contract" | null;
+  failNextSave?:
+    | "project"
+    | "lps"
+    | "cycle"
+    | "decision"
+    | "contract"
+    | "attempt"
+    | "evidence"
+    | "review_bundle"
+    | null;
 };
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts
index 45c5e60..4734803 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts
@@ -13,7 +13,8 @@ type TransactionContext = {
 };

 /**
- * SQLite product UnitOfWork for Project/LPS (M1) + Cycle (M2) + Decision/Contract (M3).
+ * SQLite product UnitOfWork for Project/LPS (M1) + Cycle (M2) + Decision/Contract (M3)
+ * + Attempt/Evidence/ReviewBundle (M5).
  * Isolated file — not D1 / OPS1 / FinOps. Single Product DB authority.
  *
  * Nested reentrance: same async chain (AsyncLocalStorage) reuses the open
@@ -31,8 +32,16 @@ export class SqliteProductStore
   readonly dbPath: string;

   /** Test hook — force next save to throw (atomicity tests). */
-  failNextSave: "project" | "lps" | "cycle" | "decision" | "contract" | null =
-    null;
+  failNextSave:
+    | "project"
+    | "lps"
+    | "cycle"
+    | "decision"
+    | "contract"
+    | "attempt"
+    | "evidence"
+    | "review_bundle"
+    | null = null;

   private queue: Promise<void> = Promise.resolve();
   private readonly txLocal = new AsyncLocalStorage<TransactionContext>();
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
index dc1a9b6..516058f 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
@@ -2,22 +2,23 @@ import "./serverGuard";

 /**
  * D-V2-05 runtime disclosures — always attached to runtime results.
- * M3: Project/LPS + CycleInstance + HumanDecision + ExecutionContract Product SQLite
- * restart-safe; conversation/proposal/attempt/evidence remain process-local.
+ * M3–M5: Project/LPS/Cycle/Decision/Contract + Attempt/Evidence/ReviewBundle Product SQLite
+ * restart-safe on Product path; conversation/proposal remain process-local;
+ * Claims/Maturity/Confirmation remain Memory (out of minimal M5).
  * Not a product-ready / v3-ADOPTED / Cursor REAL / Gate D claim surface.
  */
 export interface RuntimeDisclosures {
   readonly runtimeMode: "LOCAL_PROCESS";
-  /** Partial: Project/LPS/Cycle/Decision/Contract M3 durable; other stacks process-local. */
+  /** Partial: Product SQLite durable for OA M1–M5 aggregates; conversation/proposal/Claims Memory remain process-local. */
   readonly persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE";
   readonly agentExecution: "DISABLED";
   readonly iam: "NOT_SELECTED";
   readonly productPersistence: "SQLITE_OA_PRODUCT_STORE";
   readonly delivery: "NOT_AUTHORIZED";
   readonly cutover: "NOT_AUTHORIZED";
-  /** True because conversation/proposal/attempt/evidence remain volatile. */
+  /** True because conversation/proposal (and Claims/Maturity Memory) remain volatile. */
   readonly localDataVolatile: true;
-  /** True for non-M3 OA state; Project/LPS/Cycle/Decision/Contract survive restart. */
+  /** True for non-durable stacks; Product Project/LPS/Cycle/Decision/Contract/Attempt/Evidence/RB survive restart. */
   readonly restartMayLoseState: true;
   readonly projectLpsRestartSafe: true;
   readonly cycleInstanceRestartSafe: true;
@@ -29,8 +30,10 @@ export interface RuntimeDisclosures {
 export const RUNTIME_DISCLOSURE_MESSAGES: readonly string[] = Object.freeze([
   "Mode local process-bound: the runtime lives in a single Node process.",
   "Project/LPS + CycleInstance + HumanDecision + ExecutionContract Product persistence uses an isolated node:sqlite store (G0-B / M1 / M2 / M3).",
-  "Conversation, Proposal F2, Attempt, and Evidence remain process-local and may be lost on restart.",
-  "Trajectory/Epistemic Memory remain process-local (out of M3 durability).",
+  "ExecutionAttempt, Evidence, ReviewBundle, and LPS evidence/RB links persist in Product SQLite (M5) on the Product path.",
+  "Conversation and Proposal F2 remain process-local and may be lost on restart.",
+  "ClaimEvaluation / MaturityAssessment / Confirmation remain Memory (out of minimal M5).",
+  "Trajectory/Epistemic Memory remain process-local (out of M3/M5 durability).",
   "Local single-user Morris authority is TEMPORARY WITH EXIT (server-owned; client claims ignored).",
   "Cursor PREPARE-only projection — executionAllowed=false, cursorReal=false, Gate D NOT_CONSUMED.",
   "IAM is not configured.",
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index 2c366c1..c8a60fc 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -33,11 +33,13 @@ import {
 } from "@/lib/oa/execution-contract";
 import {
   createInMemoryExecutionAttemptServices,
+  createSqliteExecutionAttemptServices,
   type ExecutionAttemptServices,
   type TestExecutionAdapter,
 } from "@/lib/oa/execution-attempt";
 import {
   createInMemoryEvidenceReviewServices,
+  createSqliteEvidenceReviewServices,
   type EvidenceReviewServices,
 } from "@/lib/oa/evidence-review";
 import type { ProjectServices } from "@/lib/oa/project";
@@ -98,6 +100,11 @@ export type RuntimeOaStack = {
   readonly evidenceReviewServices: EvidenceReviewServices;
   /** Explicit TestExecutionAdapter — never silent NoOp. */
   readonly fixtureAdapter: TestExecutionAdapter;
+  /**
+   * True when OA Attempt/Evidence/ReviewBundle/LPS path uses Product SQLite.
+   * Distinguishes persistence durability from fixture execution mode.
+   */
+  readonly productDurablePath: boolean;
 };

 function resolveAudit(
@@ -174,22 +181,45 @@ function wireOaStack(
   // EXPLICIT TestExecutionAdapter — never omit (factory default is NoOp).
   // M4 REAL-OFF default: do NOT wire realBoundary / SFIA_STUDIO_CURSOR_REAL here.
   // Opt-in REAL composition is explicit (journal + RealExecutionLaunchPort); no Fake defaults.
+  // M5-A: when Product SQLite is present, Attempt + Evidence/RB are durable;
+  // Claim/Maturity remain Memory; technical journal / Gate D unchanged.
   const fixtureAdapter = createF3TestExecutionAdapter();
   const fixtureAgent = createF3FixtureAgentDescriptor(clock.nowIso());
-  const executionAttemptServices = createInMemoryExecutionAttemptServices({
-    decisionServices,
-    executionContractServices,
-    agents: [fixtureAgent],
-    adapter: fixtureAdapter,
-    clock,
-    authorityResolver,
-    policy: { defaultMaxRetriesBudget: 0 },
-  });
+  const executionAttemptServices = productSqlite
+    ? createSqliteExecutionAttemptServices({
+        decisionServices,
+        executionContractServices,
+        productStore: productSqlite,
+        agents: [fixtureAgent],
+        adapter: fixtureAdapter,
+        clock,
+        authorityResolver,
+        policy: { defaultMaxRetriesBudget: 0 },
+      })
+    : createInMemoryExecutionAttemptServices({
+        decisionServices,
+        executionContractServices,
+        agents: [fixtureAgent],
+        adapter: fixtureAdapter,
+        clock,
+        authorityResolver,
+        policy: { defaultMaxRetriesBudget: 0 },
+      });

-  const evidenceReviewServices = createInMemoryEvidenceReviewServices({
-    clock,
-    attemptReader: createAttemptReaderBridge(executionAttemptServices.attempts),
-  });
+  const evidenceReviewServices = productSqlite
+    ? createSqliteEvidenceReviewServices({
+        productStore: productSqlite,
+        clock,
+        attemptReader: createAttemptReaderBridge(
+          executionAttemptServices.attempts,
+        ),
+      })
+    : createInMemoryEvidenceReviewServices({
+        clock,
+        attemptReader: createAttemptReaderBridge(
+          executionAttemptServices.attempts,
+        ),
+      });

   return Object.freeze({
     projectServices,
@@ -202,6 +232,7 @@ function wireOaStack(
     executionAttemptServices,
     evidenceReviewServices,
     fixtureAdapter,
+    productDurablePath: productSqlite !== null,
   });
 }


# PR CHANGED FILE LIST
projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
projects/sfia-studio/app/__tests__/oa/evidence-review/m5EvidenceReviewDurability.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/m5AttemptDurability.test.ts
projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
projects/sfia-studio/app/__tests__/oa/project/m5RestartProcessProof.test.ts
projects/sfia-studio/app/__tests__/oa/project/m5RestartProcessWorker.ts
projects/sfia-studio/app/__tests__/oa/project/m5W1LpsAppend.test.ts
projects/sfia-studio/app/__tests__/oa/project/rehydrateEvidenceOutcomeFromLps.test.ts
projects/sfia-studio/app/__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts
projects/sfia-studio/app/__tests__/project-assistant/m5C1C2DisclosureAndRehydrateAction.test.ts
projects/sfia-studio/app/__tests__/project-assistant/m5C1PrepareMemoryDisclosure.test.ts
projects/sfia-studio/app/features/project-assistant/actions.ts
projects/sfia-studio/app/features/project-assistant/f3/appendEvidenceOutcomeToLps.ts
projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts
projects/sfia-studio/app/features/project-assistant/f3/constants.ts
projects/sfia-studio/app/features/project-assistant/f3/index.ts
projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts
projects/sfia-studio/app/features/project-assistant/f3/prepareF3Fixture.ts
projects/sfia-studio/app/features/project-assistant/f3/rehydrateEvidenceOutcomeFromLps.ts
projects/sfia-studio/app/features/project-assistant/f3/systemFactualWriter.ts
projects/sfia-studio/app/features/project-assistant/types.ts
projects/sfia-studio/app/lib/oa/evidence-review/index.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteEvidenceRepository.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteReviewBundleRepository.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts
projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteExecutionAttemptRepository.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteExecutionAttemptTechnicalStore.ts
projects/sfia-studio/app/lib/oa/execution-attempt/ports/executionAttemptTechnicalStorePort.ts
projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts
projects/sfia-studio/app/lib/oa/project/domain/types.ts
projects/sfia-studio/app/lib/oa/project/index.ts
projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts

# COMPLETE PR PATCH (equivalent to commit)
diff --git a/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts b/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
index 04202fb1..e1fe2038 100644
--- a/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
@@ -15,6 +15,7 @@ import {
 import {
   PRODUCT_SCHEMA_VERSION,
   PRODUCT_SCHEMA_VERSION_M2,
+  PRODUCT_SCHEMA_VERSION_M3,
   createTestSqliteProductProjectServices,
   type ActorReference,
   type SqliteProductProjectServices,
@@ -129,7 +130,8 @@ describe("M3 Product SQLite schema migration", () => {
       .prepare("SELECT value FROM schema_meta WHERE key = ?")
       .get("schema_version") as { value: string };
     expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
-    expect(PRODUCT_SCHEMA_VERSION).toBe("m3-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION_M3).toBe("m3-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m5-0.1.0");

     const decisions = svc.store.db
       .prepare(
@@ -141,8 +143,14 @@ describe("M3 Product SQLite schema migration", () => {
         `SELECT name FROM sqlite_master WHERE type='table' AND name='oa_execution_contracts'`,
       )
       .get() as { name?: string } | undefined;
+    const attempts = svc.store.db
+      .prepare(
+        `SELECT name FROM sqlite_master WHERE type='table' AND name='oa_execution_attempts'`,
+      )
+      .get() as { name?: string } | undefined;
     expect(decisions?.name).toBe("oa_human_decisions");
     expect(contracts?.name).toBe("oa_execution_contracts");
+    expect(attempts?.name).toBe("oa_execution_attempts");

     const project = await svc.getProject.execute({ projectId: "prj:m3-mig" });
     expect(project.ok).toBe(true);
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/m5EvidenceReviewDurability.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/m5EvidenceReviewDurability.test.ts
new file mode 100644
index 00000000..c101ecf4
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/m5EvidenceReviewDurability.test.ts
@@ -0,0 +1,381 @@
+/**
+ * M5 — Evidence + ReviewBundle Product SQLite durability.
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, describe, expect, it } from "vitest";
+import {
+  createTestDoctrineResolver,
+  type Digest,
+  type DoctrinePackagePin,
+} from "@/lib/oa/doctrine";
+import {
+  createTestSqliteProductProjectServices,
+  type ActorReference,
+  type SqliteProductProjectServices,
+} from "@/lib/oa/project";
+import {
+  createTestSqliteEvidenceReviewServices,
+  type ActorReference as EvidenceActor,
+  type Digest as EvidenceDigest,
+} from "@/lib/oa/evidence-review";
+
+const APP_ROOT = path.resolve(__dirname, "../../..");
+const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
+const SCHEMAS = path.resolve(
+  APP_ROOT,
+  "../sfia-v3-modeled/v3-native-option-a/schemas",
+);
+
+const VALID_DIGEST =
+  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
+
+const EVIDENCE_DIGEST =
+  "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" as EvidenceDigest;
+
+const VALID_PIN: DoctrinePackagePin = {
+  doctrinePackageId: "pkg:studio-v3-oa",
+  version: "1.0.0",
+  digest: VALID_DIGEST,
+};
+
+const ACTOR: ActorReference = {
+  actorId: "actor:morris",
+  role: "project_owner",
+  displayName: "Morris",
+  authorityLevel: "N3",
+};
+
+const EV_ACTOR: EvidenceActor = {
+  actorId: "actor:morris",
+  role: "decision_maker",
+  authorityLevel: "N3",
+};
+
+const tempDirs: string[] = [];
+const openServices: Array<{ dispose: () => void }> = [];
+
+function tempDbPath(name: string): string {
+  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m5-ev-"));
+  tempDirs.push(dir);
+  return path.join(dir, name);
+}
+
+function openProjects(dbPath: string): SqliteProductProjectServices {
+  const { resolver } = createTestDoctrineResolver({
+    registryRoot: FIXTURES,
+    schemasRoot: SCHEMAS,
+  });
+  const svc = createTestSqliteProductProjectServices({
+    doctrineResolver: resolver,
+    fixedNowIso: "2026-08-15T09:00:00.000Z",
+    dbPath,
+  });
+  openServices.push(svc);
+  return svc;
+}
+
+afterEach(() => {
+  while (openServices.length) {
+    try {
+      openServices.pop()?.dispose();
+    } catch {
+      /* ignore */
+    }
+  }
+  while (tempDirs.length) {
+    const dir = tempDirs.pop();
+    if (dir) fs.rmSync(dir, { recursive: true, force: true });
+  }
+});
+
+describe("M5 Evidence/ReviewBundle durability", () => {
+  it("persists Evidence + ReviewBundle across Product SQLite reopen", async () => {
+    const dbPath = tempDbPath("ev-rb.sqlite");
+    const projects = openProjects(dbPath);
+    await projects.createProject.execute({
+      projectId: "prj:m5-ev",
+      title: "M5 Evidence",
+      objective: "m5-ev-objective",
+      doctrinePackagePin: VALID_PIN,
+      createdBy: ACTOR,
+      lpsVersionId: "lps:m5-ev-v1",
+      idempotencyKey: "idem:m5-ev-prj",
+    });
+
+    const services = createTestSqliteEvidenceReviewServices({
+      productStore: projects.store,
+      fixedNowIso: "2026-08-15T09:00:00.000Z",
+    });
+
+    const reg = await services.registerEvidence.execute({
+      evidenceId: "ev:m5-durable",
+      idempotencyKey: "idem:ev:m5-durable",
+      actor: EV_ACTOR,
+      type: "document",
+      source: "fixture",
+      sourceKind: "manual",
+      bindings: { projectId: "prj:m5-ev" },
+      classification: "internal",
+      storageMode: "metadata_only",
+      digest: EVIDENCE_DIGEST,
+    });
+    expect(reg.ok).toBe(true);
+
+    const bundle = await services.createReviewBundle.execute({
+      reviewBundleId: "rb:m5-durable",
+      idempotencyKey: "idem:rb:m5-durable",
+      actor: EV_ACTOR,
+      projectId: "prj:m5-ev",
+      evidenceIds: ["ev:m5-durable"],
+    });
+    expect(bundle.ok).toBe(true);
+
+    projects.dispose();
+    openServices.pop();
+
+    const projects2 = openProjects(dbPath);
+    const services2 = createTestSqliteEvidenceReviewServices({
+      productStore: projects2.store,
+    });
+    const evidence = await services2.repository.findById("ev:m5-durable");
+    expect(evidence?.status).toBe("available");
+    expect(evidence?.bindings.projectId).toBe("prj:m5-ev");
+    const rb = await services2.reviewBundleRepository.findById("rb:m5-durable");
+    expect(rb?.evidenceRefs).toEqual(["ev:m5-durable"]);
+    const byKey = await services2.repository.findByIdempotencyKey(
+      "idem:ev:m5-durable",
+    );
+    expect(byKey?.evidence.evidenceId).toBe("ev:m5-durable");
+  });
+
+  it("createSuccessorAndMarkSuperseded is transactional on Product SQLite", async () => {
+    const dbPath = tempDbPath("reopen.sqlite");
+    const projects = openProjects(dbPath);
+    const services = createTestSqliteEvidenceReviewServices({
+      productStore: projects.store,
+    });
+    const reg = await services.registerEvidence.execute({
+      evidenceId: "ev:m5-reopen",
+      idempotencyKey: "idem:ev:m5-reopen",
+      actor: EV_ACTOR,
+      type: "document",
+      source: "fixture",
+      sourceKind: "manual",
+      bindings: { projectId: "prj:m5-reopen" },
+      classification: "internal",
+      storageMode: "metadata_only",
+      digest: EVIDENCE_DIGEST,
+    });
+    expect(reg.ok).toBe(true);
+    const created = await services.createReviewBundle.execute({
+      reviewBundleId: "rb:m5-src",
+      idempotencyKey: "idem:rb:m5-src",
+      actor: EV_ACTOR,
+      projectId: "prj:m5-reopen",
+      evidenceIds: ["ev:m5-reopen"],
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+
+    // Freeze → start → complete so reopen is legal.
+    const frozen = await services.freezeReviewBundle.execute({
+      reviewBundleId: "rb:m5-src",
+      actor: EV_ACTOR,
+      expectedVersion: 1,
+      idempotencyKey: "idem:freeze:m5-src",
+    });
+    expect(frozen.ok).toBe(true);
+    const started = await services.startReview.execute({
+      reviewBundleId: "rb:m5-src",
+      actor: EV_ACTOR,
+      expectedVersion: 2,
+      idempotencyKey: "idem:start:m5-src",
+    });
+    expect(started.ok).toBe(true);
+    const completed = await services.completeReview.execute({
+      reviewBundleId: "rb:m5-src",
+      actor: EV_ACTOR,
+      expectedVersion: 3,
+      outcome: "accepted",
+      idempotencyKey: "idem:complete:m5-src",
+    });
+    expect(completed.ok).toBe(true);
+
+    const reopened = await services.reopenReview.execute({
+      reviewBundleId: "rb:m5-src",
+      successorReviewBundleId: "rb:m5-successor",
+      actor: EV_ACTOR,
+      expectedVersion: 4,
+      reason: "revise",
+      idempotencyKey: "idem:reopen:m5-src",
+    });
+    expect(reopened.ok).toBe(true);
+    if (!reopened.ok) return;
+    expect(reopened.reviewBundle.reviewBundleId).toBe("rb:m5-src");
+    expect(reopened.reviewBundle.status).toBe("superseded");
+    expect(reopened.successor?.reviewBundleId).toBe("rb:m5-successor");
+    expect(reopened.successor?.status).toBe("draft");
+
+    const superseded = await services.reviewBundleRepository.findById(
+      "rb:m5-src",
+    );
+    expect(superseded?.status).toBe("superseded");
+    const successor = await services.reviewBundleRepository.findById(
+      "rb:m5-successor",
+    );
+    expect(successor?.status).toBe("draft");
+  });
+
+  it("concurrent Evidence update expectedVersion=1 → one win, one VERSION_CONFLICT", async () => {
+    const dbPath = tempDbPath("ev-occ.sqlite");
+    const projects = openProjects(dbPath);
+    const services = createTestSqliteEvidenceReviewServices({
+      productStore: projects.store,
+    });
+    const reg = await services.registerEvidence.execute({
+      evidenceId: "ev:m5-occ",
+      idempotencyKey: "idem:ev:m5-occ",
+      actor: EV_ACTOR,
+      type: "document",
+      source: "fixture",
+      sourceKind: "manual",
+      bindings: { projectId: "prj:m5-occ" },
+      classification: "internal",
+      storageMode: "metadata_only",
+      digest: EVIDENCE_DIGEST,
+    });
+    expect(reg.ok).toBe(true);
+    if (!reg.ok) return;
+
+    const base = reg.evidence;
+    const results = await Promise.allSettled([
+      services.repository.update(
+        {
+          ...base,
+          status: "stale",
+          version: 2,
+          updatedAt: "2026-08-15T09:01:00.000Z",
+        },
+        1,
+      ),
+      services.repository.update(
+        {
+          ...base,
+          status: "stale",
+          version: 2,
+          updatedAt: "2026-08-15T09:02:00.000Z",
+        },
+        1,
+      ),
+    ]);
+
+    const fulfilled = results.filter((r) => r.status === "fulfilled");
+    const rejected = results.filter((r) => r.status === "rejected");
+    expect(fulfilled).toHaveLength(1);
+    expect(rejected).toHaveLength(1);
+    expect(rejected[0]).toMatchObject({
+      status: "rejected",
+      reason: expect.objectContaining({ detailCode: "VERSION_CONFLICT" }),
+    });
+    const loaded = await services.repository.findById("ev:m5-occ");
+    expect(loaded?.version).toBe(2);
+  });
+
+  it("concurrent createSuccessorAndMarkSuperseded → one wins, no orphan", async () => {
+    const dbPath = tempDbPath("reopen-concurrent.sqlite");
+    const projects = openProjects(dbPath);
+    const services = createTestSqliteEvidenceReviewServices({
+      productStore: projects.store,
+    });
+    const reg = await services.registerEvidence.execute({
+      evidenceId: "ev:m5-conc",
+      idempotencyKey: "idem:ev:m5-conc",
+      actor: EV_ACTOR,
+      type: "document",
+      source: "fixture",
+      sourceKind: "manual",
+      bindings: { projectId: "prj:m5-conc" },
+      classification: "internal",
+      storageMode: "metadata_only",
+      digest: EVIDENCE_DIGEST,
+    });
+    expect(reg.ok).toBe(true);
+
+    const created = await services.createReviewBundle.execute({
+      reviewBundleId: "rb:m5-conc-src",
+      idempotencyKey: "idem:rb:m5-conc-src",
+      actor: EV_ACTOR,
+      projectId: "prj:m5-conc",
+      evidenceIds: ["ev:m5-conc"],
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+
+    const frozen = await services.freezeReviewBundle.execute({
+      reviewBundleId: "rb:m5-conc-src",
+      actor: EV_ACTOR,
+      expectedVersion: 1,
+      idempotencyKey: "idem:freeze:m5-conc",
+    });
+    expect(frozen.ok).toBe(true);
+    const started = await services.startReview.execute({
+      reviewBundleId: "rb:m5-conc-src",
+      actor: EV_ACTOR,
+      expectedVersion: 2,
+      idempotencyKey: "idem:start:m5-conc",
+    });
+    expect(started.ok).toBe(true);
+    const completed = await services.completeReview.execute({
+      reviewBundleId: "rb:m5-conc-src",
+      actor: EV_ACTOR,
+      expectedVersion: 3,
+      outcome: "accepted",
+      idempotencyKey: "idem:complete:m5-conc",
+    });
+    expect(completed.ok).toBe(true);
+
+    const results = await Promise.allSettled([
+      services.reopenReview.execute({
+        reviewBundleId: "rb:m5-conc-src",
+        successorReviewBundleId: "rb:m5-conc-a",
+        actor: EV_ACTOR,
+        expectedVersion: 4,
+        reason: "revise-a",
+        idempotencyKey: "idem:reopen:m5-conc-a",
+      }),
+      services.reopenReview.execute({
+        reviewBundleId: "rb:m5-conc-src",
+        successorReviewBundleId: "rb:m5-conc-b",
+        actor: EV_ACTOR,
+        expectedVersion: 4,
+        reason: "revise-b",
+        idempotencyKey: "idem:reopen:m5-conc-b",
+      }),
+    ]);
+
+    const okResults = results.filter(
+      (r) => r.status === "fulfilled" && r.value.ok,
+    );
+    const failResults = results.filter(
+      (r) =>
+        r.status === "fulfilled" && !r.value.ok,
+    );
+    expect(okResults).toHaveLength(1);
+    expect(failResults).toHaveLength(1);
+    if (failResults[0]?.status === "fulfilled" && !failResults[0].value.ok) {
+      expect(failResults[0].value.error.detailCode).toBe("VERSION_CONFLICT");
+    }
+
+    const src = await services.reviewBundleRepository.findById("rb:m5-conc-src");
+    expect(src?.status).toBe("superseded");
+
+    const a = await services.reviewBundleRepository.findById("rb:m5-conc-a");
+    const b = await services.reviewBundleRepository.findById("rb:m5-conc-b");
+    const successors = [a, b].filter(Boolean);
+    expect(successors).toHaveLength(1);
+    expect(successors[0]?.status).toBe("draft");
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/m5AttemptDurability.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/m5AttemptDurability.test.ts
new file mode 100644
index 00000000..b9cfafc3
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/m5AttemptDurability.test.ts
@@ -0,0 +1,250 @@
+/**
+ * M5 — ExecutionAttempt durability + durable resultRecordingAttempts budget.
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, describe, expect, it } from "vitest";
+import {
+  createTestDoctrineResolver,
+  type Digest,
+  type DoctrinePackagePin,
+} from "@/lib/oa/doctrine";
+import {
+  createTestSqliteProductProjectServices,
+  type ActorReference,
+  type SqliteProductProjectServices,
+} from "@/lib/oa/project";
+import {
+  SqliteExecutionAttemptRepository,
+  SqliteExecutionAttemptTechnicalStore,
+  type ExecutionAttempt,
+} from "@/lib/oa/execution-attempt";
+
+const APP_ROOT = path.resolve(__dirname, "../../..");
+const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
+const SCHEMAS = path.resolve(
+  APP_ROOT,
+  "../sfia-v3-modeled/v3-native-option-a/schemas",
+);
+
+const VALID_DIGEST =
+  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
+
+const VALID_PIN: DoctrinePackagePin = {
+  doctrinePackageId: "pkg:studio-v3-oa",
+  version: "1.0.0",
+  digest: VALID_DIGEST,
+};
+
+const ACTOR: ActorReference = {
+  actorId: "actor:morris",
+  role: "project_owner",
+  displayName: "Morris",
+  authorityLevel: "N3",
+};
+
+const NOW = "2026-08-15T08:30:00.000Z";
+
+const tempDirs: string[] = [];
+const openServices: Array<{ dispose: () => void }> = [];
+
+function tempDbPath(name: string): string {
+  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m5-att-"));
+  tempDirs.push(dir);
+  return path.join(dir, name);
+}
+
+function openProjects(dbPath: string): SqliteProductProjectServices {
+  const { resolver } = createTestDoctrineResolver({
+    registryRoot: FIXTURES,
+    schemasRoot: SCHEMAS,
+  });
+  const svc = createTestSqliteProductProjectServices({
+    doctrineResolver: resolver,
+    fixedNowIso: NOW,
+    dbPath,
+  });
+  openServices.push(svc);
+  return svc;
+}
+
+function baseAttempt(
+  overrides: Partial<ExecutionAttempt> & { attemptId: string },
+): ExecutionAttempt {
+  return {
+    schemaVersion: "0.2.0-oa",
+    executionContractId: "xct:m5-001",
+    executionContractVersion: 1,
+    selectedAgentRef: "agt:fixture",
+    status: "accepted",
+    idempotencyKey: `idem-${overrides.attemptId}`,
+    correlationId: "cor:m5-att",
+    version: 1,
+    createdAt: NOW,
+    provenance: {
+      schemaVersion: "0.1.0-oa",
+      provenanceRecordId: "prv:m5-att",
+      actor: { actorId: "actor:morris", role: "decision_maker" },
+      source: "human_decision",
+      timestamp: NOW,
+      correlationId: "cor:m5-att",
+    },
+    selectionStrategy: "capabilities_deterministic",
+    selectionProfile: "standard",
+    selectionExpiresAt: "2026-08-15T09:00:00.000Z",
+    ...overrides,
+  };
+}
+
+afterEach(() => {
+  while (openServices.length) {
+    try {
+      openServices.pop()?.dispose();
+    } catch {
+      /* ignore */
+    }
+  }
+  while (tempDirs.length) {
+    const dir = tempDirs.pop();
+    if (dir) fs.rmSync(dir, { recursive: true, force: true });
+  }
+});
+
+describe("M5 ExecutionAttempt durability", () => {
+  it("persists attempt + active index + result budget across reopen", async () => {
+    const dbPath = tempDbPath("attempt.sqlite");
+    const projects = openProjects(dbPath);
+    await projects.createProject.execute({
+      projectId: "prj:m5-att",
+      title: "M5 Attempt",
+      objective: "m5-att-objective",
+      doctrinePackagePin: VALID_PIN,
+      createdBy: ACTOR,
+      lpsVersionId: "lps:m5-att-v1",
+      idempotencyKey: "idem:m5-att-prj",
+    });
+
+    const repo = new SqliteExecutionAttemptRepository(projects.store);
+    const tech = new SqliteExecutionAttemptTechnicalStore(projects.store);
+    const attempt = baseAttempt({ attemptId: "xat:m5-durable" });
+    await repo.create(attempt);
+    await repo.reserveActiveContract(
+      attempt.executionContractId,
+      attempt.attemptId,
+    );
+    tech.resultRecordingAttempts.set(attempt.attemptId, 2);
+
+    const active = await repo.findActiveByContract(attempt.executionContractId);
+    expect(active?.attemptId).toBe("xat:m5-durable");
+    expect(tech.resultRecordingAttempts.get(attempt.attemptId)).toBe(2);
+
+    projects.dispose();
+    openServices.pop();
+
+    const projects2 = openProjects(dbPath);
+    const repo2 = new SqliteExecutionAttemptRepository(projects2.store);
+    const tech2 = new SqliteExecutionAttemptTechnicalStore(projects2.store);
+    const loaded = await repo2.findById("xat:m5-durable");
+    expect(loaded?.status).toBe("accepted");
+    expect(loaded?.idempotencyKey).toBe("idem-xat:m5-durable");
+    const active2 = await repo2.findActiveByContract("xct:m5-001");
+    expect(active2?.attemptId).toBe("xat:m5-durable");
+    expect(tech2.resultRecordingAttempts.get("xat:m5-durable")).toBe(2);
+  });
+
+  it("enforces OCC and active reservation on SQLite", async () => {
+    const dbPath = tempDbPath("occ.sqlite");
+    const projects = openProjects(dbPath);
+    const repo = new SqliteExecutionAttemptRepository(projects.store);
+    await repo.create(baseAttempt({ attemptId: "xat:m5-occ" }));
+    await expect(
+      repo.update(
+        baseAttempt({
+          attemptId: "xat:m5-occ",
+          status: "running",
+          version: 2,
+          startedAt: NOW,
+        }),
+        99,
+      ),
+    ).rejects.toMatchObject({ detailCode: "VERSION_CONFLICT" });
+
+    await repo.reserveActiveContract("xct:m5-001", "xat:m5-occ");
+    await expect(
+      repo.reserveActiveContract("xct:m5-001", "xat:other"),
+    ).rejects.toMatchObject({ detailCode: "EXECUTION_ALREADY_ACTIVE" });
+  });
+
+  it("concurrent update with same expectedVersion → one win, one VERSION_CONFLICT", async () => {
+    const dbPath = tempDbPath("occ-concurrent.sqlite");
+    const projects = openProjects(dbPath);
+    const repo = new SqliteExecutionAttemptRepository(projects.store);
+    await repo.create(baseAttempt({ attemptId: "xat:m5-occ-c" }));
+
+    const results = await Promise.allSettled([
+      repo.update(
+        baseAttempt({
+          attemptId: "xat:m5-occ-c",
+          status: "accepted",
+          version: 2,
+          updatedAt: NOW,
+          selectionExpiresAt: "2026-08-15T09:10:00.000Z",
+        }),
+        1,
+      ),
+      repo.update(
+        baseAttempt({
+          attemptId: "xat:m5-occ-c",
+          status: "accepted",
+          version: 2,
+          updatedAt: NOW,
+          selectionExpiresAt: "2026-08-15T09:20:00.000Z",
+        }),
+        1,
+      ),
+    ]);
+
+    const fulfilled = results.filter((r) => r.status === "fulfilled");
+    const rejected = results.filter((r) => r.status === "rejected");
+    expect(fulfilled).toHaveLength(1);
+    expect(rejected).toHaveLength(1);
+    expect(rejected[0]).toMatchObject({
+      status: "rejected",
+      reason: expect.objectContaining({ detailCode: "VERSION_CONFLICT" }),
+    });
+    const loaded = await repo.findById("xat:m5-occ-c");
+    expect(loaded?.version).toBe(2);
+  });
+
+  it("concurrent reserveActiveContract different attemptIds → one EXECUTION_ALREADY_ACTIVE", async () => {
+    const dbPath = tempDbPath("reserve-concurrent.sqlite");
+    const projects = openProjects(dbPath);
+    const repo = new SqliteExecutionAttemptRepository(projects.store);
+    await repo.create(
+      baseAttempt({ attemptId: "xat:m5-res-a", executionContractId: "xct:m5-res" }),
+    );
+    await repo.create(
+      baseAttempt({ attemptId: "xat:m5-res-b", executionContractId: "xct:m5-res" }),
+    );
+
+    const results = await Promise.allSettled([
+      repo.reserveActiveContract("xct:m5-res", "xat:m5-res-a"),
+      repo.reserveActiveContract("xct:m5-res", "xat:m5-res-b"),
+    ]);
+
+    const fulfilled = results.filter((r) => r.status === "fulfilled");
+    const rejected = results.filter((r) => r.status === "rejected");
+    expect(fulfilled).toHaveLength(1);
+    expect(rejected).toHaveLength(1);
+    expect(rejected[0]).toMatchObject({
+      status: "rejected",
+      reason: expect.objectContaining({
+        detailCode: "EXECUTION_ALREADY_ACTIVE",
+      }),
+    });
+    const active = await repo.findActiveByContract("xct:m5-res");
+    expect(["xat:m5-res-a", "xat:m5-res-b"]).toContain(active?.attemptId);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts b/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
new file mode 100644
index 00000000..d4f6c725
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
@@ -0,0 +1,227 @@
+/**
+ * M5 — Product SQLite migration M3→M5 (and M2→M5 ladder).
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { DatabaseSync } from "node:sqlite";
+import { afterEach, describe, expect, it } from "vitest";
+import {
+  createTestDoctrineResolver,
+  type Digest,
+  type DoctrinePackagePin,
+} from "@/lib/oa/doctrine";
+import {
+  PRODUCT_SCHEMA_VERSION,
+  PRODUCT_SCHEMA_VERSION_M2,
+  PRODUCT_SCHEMA_VERSION_M3,
+  createTestSqliteProductProjectServices,
+  type ActorReference,
+  type SqliteProductProjectServices,
+} from "@/lib/oa/project";
+import { createSqliteCycleServices } from "@/lib/oa/cycle";
+
+const APP_ROOT = path.resolve(__dirname, "../../..");
+const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
+const SCHEMAS = path.resolve(
+  APP_ROOT,
+  "../sfia-v3-modeled/v3-native-option-a/schemas",
+);
+
+const VALID_DIGEST =
+  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
+
+const VALID_PIN: DoctrinePackagePin = {
+  doctrinePackageId: "pkg:studio-v3-oa",
+  version: "1.0.0",
+  digest: VALID_DIGEST,
+};
+
+const ACTOR: ActorReference = {
+  actorId: "actor:morris",
+  role: "project_owner",
+  displayName: "Morris",
+  authorityLevel: "N3",
+};
+
+const tempDirs: string[] = [];
+const openServices: Array<{ dispose: () => void }> = [];
+
+function tempDbPath(name: string): string {
+  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m5-mig-"));
+  tempDirs.push(dir);
+  return path.join(dir, name);
+}
+
+function buildProjectServices(dbPath: string): SqliteProductProjectServices {
+  const { resolver } = createTestDoctrineResolver({
+    registryRoot: FIXTURES,
+    schemasRoot: SCHEMAS,
+  });
+  const svc = createTestSqliteProductProjectServices({
+    doctrineResolver: resolver,
+    fixedNowIso: "2026-08-15T08:00:00.000Z",
+    dbPath,
+  });
+  openServices.push(svc);
+  return svc;
+}
+
+function tableExists(
+  db: DatabaseSync,
+  name: string,
+): boolean {
+  const row = db
+    .prepare(
+      `SELECT name FROM sqlite_master WHERE type='table' AND name=?`,
+    )
+    .get(name) as { name?: string } | undefined;
+  return row?.name === name;
+}
+
+afterEach(() => {
+  while (openServices.length) {
+    try {
+      openServices.pop()?.dispose();
+    } catch {
+      /* ignore */
+    }
+  }
+  while (tempDirs.length) {
+    const dir = tempDirs.pop();
+    if (dir) fs.rmSync(dir, { recursive: true, force: true });
+  }
+});
+
+describe("M5 Product SQLite schema migration", () => {
+  it("migrates M3 DB additively to m5, preserves Project/LPS/Cycle/Decision tables", async () => {
+    const dbPath = tempDbPath("m3-legacy.sqlite");
+    {
+      const bootstrap = buildProjectServices(dbPath);
+      const created = await bootstrap.createProject.execute({
+        projectId: "prj:m5-mig",
+        title: "M3 legacy project",
+        objective: "preserve-m3",
+        context: "m3-context",
+        scope: "m3-scope",
+        doctrinePackagePin: VALID_PIN,
+        createdBy: ACTOR,
+        lpsVersionId: "lps:m5-mig-v1",
+        idempotencyKey: "idem:m5-mig",
+      });
+      expect(created.ok).toBe(true);
+      const cycles = createSqliteCycleServices({
+        projectServices: bootstrap,
+        productStore: bootstrap.store,
+      });
+      const cycle = await cycles.createCycle.execute({
+        cycleInstanceId: "cyc:m5-mig-1",
+        cycleTypeId: "cyc:delivery",
+        projectId: "prj:m5-mig",
+        signals: {},
+        createdBy: ACTOR,
+      });
+      expect(cycle.ok).toBe(true);
+      bootstrap.dispose();
+      openServices.pop();
+    }
+
+    {
+      const db = new DatabaseSync(dbPath);
+      db.exec("DROP TABLE IF EXISTS oa_execution_attempt_result_budget");
+      db.exec("DROP TABLE IF EXISTS oa_execution_attempt_active");
+      db.exec("DROP TABLE IF EXISTS oa_execution_attempts");
+      db.exec("DROP TABLE IF EXISTS oa_evidence_idempotency");
+      db.exec("DROP TABLE IF EXISTS oa_evidence");
+      db.exec("DROP TABLE IF EXISTS oa_review_bundle_idempotency");
+      db.exec("DROP TABLE IF EXISTS oa_review_bundles");
+      db.prepare(
+        `UPDATE schema_meta SET value = ? WHERE key = 'schema_version'`,
+      ).run(PRODUCT_SCHEMA_VERSION_M3);
+      db.close();
+    }
+
+    const svc = buildProjectServices(dbPath);
+    const version = svc.store.db
+      .prepare("SELECT value FROM schema_meta WHERE key = ?")
+      .get("schema_version") as { value: string };
+    expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m5-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION_M3).toBe("m3-0.1.0");
+
+    expect(tableExists(svc.store.db, "oa_human_decisions")).toBe(true);
+    expect(tableExists(svc.store.db, "oa_execution_contracts")).toBe(true);
+    expect(tableExists(svc.store.db, "oa_execution_attempts")).toBe(true);
+    expect(tableExists(svc.store.db, "oa_evidence")).toBe(true);
+    expect(tableExists(svc.store.db, "oa_review_bundles")).toBe(true);
+    expect(
+      tableExists(svc.store.db, "oa_execution_attempt_result_budget"),
+    ).toBe(true);
+
+    const project = await svc.getProject.execute({ projectId: "prj:m5-mig" });
+    expect(project.ok).toBe(true);
+    const cycles = createSqliteCycleServices({
+      projectServices: svc,
+      productStore: svc.store,
+    });
+    const cycle = await cycles.cycles.findById("cyc:m5-mig-1");
+    expect(cycle?.cycleInstanceId).toBe("cyc:m5-mig-1");
+  });
+
+  it("migrates M2 DB through M3+M5 ladder", async () => {
+    const dbPath = tempDbPath("m2-legacy.sqlite");
+    {
+      const bootstrap = buildProjectServices(dbPath);
+      bootstrap.dispose();
+      openServices.pop();
+    }
+    {
+      const db = new DatabaseSync(dbPath);
+      db.exec("DROP TABLE IF EXISTS oa_human_decisions");
+      db.exec("DROP TABLE IF EXISTS oa_execution_contracts");
+      db.exec("DROP TABLE IF EXISTS oa_execution_attempt_result_budget");
+      db.exec("DROP TABLE IF EXISTS oa_execution_attempt_active");
+      db.exec("DROP TABLE IF EXISTS oa_execution_attempts");
+      db.exec("DROP TABLE IF EXISTS oa_evidence_idempotency");
+      db.exec("DROP TABLE IF EXISTS oa_evidence");
+      db.exec("DROP TABLE IF EXISTS oa_review_bundle_idempotency");
+      db.exec("DROP TABLE IF EXISTS oa_review_bundles");
+      db.prepare(
+        `UPDATE schema_meta SET value = ? WHERE key = 'schema_version'`,
+      ).run(PRODUCT_SCHEMA_VERSION_M2);
+      db.close();
+    }
+    const svc = buildProjectServices(dbPath);
+    const version = svc.store.db
+      .prepare("SELECT value FROM schema_meta WHERE key = ?")
+      .get("schema_version") as { value: string };
+    expect(version.value).toBe("m5-0.1.0");
+    expect(tableExists(svc.store.db, "oa_execution_attempts")).toBe(true);
+  });
+
+  it("m5 reopen is idempotent", () => {
+    const dbPath = tempDbPath("m5-reopen.sqlite");
+    const a = buildProjectServices(dbPath);
+    a.dispose();
+    openServices.pop();
+    const b = buildProjectServices(dbPath);
+    const version = b.store.db
+      .prepare("SELECT value FROM schema_meta WHERE key = ?")
+      .get("schema_version") as { value: string };
+    expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
+  });
+
+  it("fails closed on unknown schema version", () => {
+    const dbPath = tempDbPath("unknown.sqlite");
+    const db = new DatabaseSync(dbPath);
+    db.exec(`
+CREATE TABLE schema_meta (key TEXT PRIMARY KEY NOT NULL, value TEXT NOT NULL);
+INSERT INTO schema_meta(key, value) VALUES ('schema_version', 'm99-future');
+`);
+    db.close();
+    expect(() => buildProjectServices(dbPath)).toThrow(
+      /product_sqlite_unsupported_schema/,
+    );
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/project/m5RestartProcessProof.test.ts b/projects/sfia-studio/app/__tests__/oa/project/m5RestartProcessProof.test.ts
new file mode 100644
index 00000000..ef7476c6
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/project/m5RestartProcessProof.test.ts
@@ -0,0 +1,134 @@
+/**
+ * M5 B1 strong restart proof — two independent Node processes, same DB file.
+ * Real use cases: Attempt succeeded + Evidence(execution_attempt) + RB + W1 + rehydrate.
+ * @vitest-environment node
+ */
+import { spawnSync } from "node:child_process";
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+
+const APP_ROOT = path.resolve(__dirname, "../../..");
+const WORKER = path.join(
+  APP_ROOT,
+  "__tests__/oa/project/m5RestartProcessWorker.ts",
+);
+const TSX = path.join(APP_ROOT, "node_modules/.bin/tsx");
+
+describe("M5 process restart proof (B1)", () => {
+  it(
+    "create via real use cases in process A, rehydrate in process B",
+    () => {
+      expect(fs.existsSync(TSX)).toBe(true);
+      const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m5-proc-"));
+      const dbPath = path.join(dir, "oa-product.sqlite");
+      const projectId = "prj:m5-proc";
+
+      try {
+        const create = spawnSync(TSX, [WORKER, "create", dbPath, projectId], {
+          cwd: APP_ROOT,
+          encoding: "utf8",
+          env: { ...process.env },
+          timeout: 90_000,
+        });
+        expect(create.status, create.stderr || create.stdout).toBe(0);
+        const created = JSON.parse(create.stdout.trim()) as {
+          ok: boolean;
+          attemptId?: string;
+          resultRef?: string;
+          evidenceId?: string;
+          reviewBundleId?: string;
+          executionContractId?: string;
+          lpsVersion?: number;
+          evidence?: {
+            sourceKind?: string;
+            technicalResultRef?: string | null;
+            bindings?: Record<string, string | undefined>;
+          };
+          recommendation?: {
+            kind?: string;
+            executionAuthority?: boolean;
+            gateConsumed?: boolean;
+            decisionCreated?: boolean;
+            attemptAutoLaunchNextCycle?: boolean;
+          };
+        };
+        expect(created.ok).toBe(true);
+        expect(created.attemptId).toBe("xat:m5-proc");
+        expect(created.resultRef).toBe("res:m5-proc-fixture");
+        expect(created.evidenceId).toBe("ev:m5-proc");
+        expect(created.reviewBundleId).toBe("rb:m5-proc");
+        expect(created.executionContractId).toBe("xct:m5-proc");
+        expect(created.evidence?.sourceKind).toBe("execution_attempt");
+        expect(created.evidence?.technicalResultRef).toBe(
+          "res:m5-proc-fixture",
+        );
+        expect(created.evidence?.bindings?.projectId).toBe(projectId);
+        expect(created.evidence?.bindings?.executionContractId).toBe(
+          "xct:m5-proc",
+        );
+        expect(created.recommendation?.kind).toBe("recommendation");
+        expect(created.recommendation?.executionAuthority).toBe(false);
+        expect(created.recommendation?.gateConsumed).toBe(false);
+        expect(created.recommendation?.decisionCreated).toBe(false);
+        expect(created.recommendation?.attemptAutoLaunchNextCycle).toBe(false);
+
+        const read = spawnSync(TSX, [WORKER, "read", dbPath, projectId], {
+          cwd: APP_ROOT,
+          encoding: "utf8",
+          env: { ...process.env },
+          timeout: 90_000,
+        });
+        expect(read.status, read.stderr || read.stdout).toBe(0);
+        const loaded = JSON.parse(read.stdout.trim()) as {
+          ok: boolean;
+          attemptStatus?: string;
+          resultRef?: string;
+          evidenceId?: string;
+          reviewBundleId?: string;
+          evidence?: {
+            sourceKind?: string;
+            technicalResultRef?: string | null;
+            bindings?: Record<string, string | undefined>;
+          };
+          evidenceIds?: string[];
+          reviewBundleIds?: string[];
+          lpsVersion?: number;
+          recommendation?: {
+            kind?: string;
+            executionAuthority?: boolean;
+            gateConsumed?: boolean;
+            decisionCreated?: boolean;
+            attemptAutoLaunchNextCycle?: boolean;
+          };
+        };
+        expect(loaded.ok).toBe(true);
+        expect(loaded.attemptStatus).toBe("succeeded");
+        expect(loaded.resultRef).toBe(created.resultRef);
+        expect(loaded.evidenceId).toBe("ev:m5-proc");
+        expect(loaded.reviewBundleId).toBe("rb:m5-proc");
+        expect(loaded.evidence?.sourceKind).toBe("execution_attempt");
+        expect(loaded.evidence?.technicalResultRef).toBe(created.resultRef);
+        expect(loaded.evidence?.bindings?.projectId).toBe(projectId);
+        expect(loaded.evidence?.bindings?.executionContractId).toBe(
+          "xct:m5-proc",
+        );
+        expect(loaded.evidence?.bindings?.executionAttemptId).toBe(
+          "xat:m5-proc",
+        );
+        expect(loaded.evidenceIds).toEqual(["ev:m5-proc"]);
+        expect(loaded.reviewBundleIds).toEqual(["rb:m5-proc"]);
+        expect(loaded.lpsVersion).toBe(created.lpsVersion);
+        expect(loaded.recommendation?.kind).toBe("recommendation");
+        expect(loaded.recommendation?.executionAuthority).toBe(false);
+        expect(loaded.recommendation?.gateConsumed).toBe(false);
+        expect(loaded.recommendation?.decisionCreated).toBe(false);
+        expect(loaded.recommendation?.attemptAutoLaunchNextCycle).toBe(false);
+      } finally {
+        fs.rmSync(dir, { recursive: true, force: true });
+      }
+    },
+    90_000,
+  );
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/project/m5RestartProcessWorker.ts b/projects/sfia-studio/app/__tests__/oa/project/m5RestartProcessWorker.ts
new file mode 100644
index 00000000..44bfb6d0
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/project/m5RestartProcessWorker.ts
@@ -0,0 +1,538 @@
+/**
+ * Child-process worker for M5 B1 restart proof.
+ * Usage: tsx m5RestartProcessWorker.ts <create|read> <dbPath> <projectId>
+ *
+ * Create: Product SQLite + real use cases (select → start → result → ingest → RB → W1).
+ * Read: reopen same dbPath, assert durability, rehydrate via RecommendNextGate path.
+ *
+ * Does NOT import vitest helpers (child process / tsx).
+ */
+import path from "node:path";
+import {
+  createTestDoctrineResolver,
+  FixedClock,
+  type Digest,
+  type DoctrinePackagePin,
+  type ProvenanceRecord,
+} from "@/lib/oa/doctrine";
+import {
+  createTestSqliteProductProjectServices,
+  type ActorReference,
+} from "@/lib/oa/project";
+import { createSqliteCycleServices } from "@/lib/oa/cycle";
+import {
+  createTestSqliteDecisionServices,
+  MemoryAuthorityResolver,
+} from "@/lib/oa/decision";
+import { createTestSqliteExecutionContractServices } from "@/lib/oa/execution-contract";
+import {
+  createTestSqliteExecutionAttemptServices,
+  TestExecutionAdapter,
+  type AgentDescriptor,
+} from "@/lib/oa/execution-attempt";
+import { createTestSqliteEvidenceReviewServices } from "@/lib/oa/evidence-review";
+import { appendEvidenceOutcomeToLps } from "@/features/project-assistant/f3/appendEvidenceOutcomeToLps";
+import { createAttemptReaderBridge } from "@/features/project-assistant/f3/attemptReaderBridge";
+import { rehydrateEvidenceOutcomeFromLps } from "@/features/project-assistant/f3/rehydrateEvidenceOutcomeFromLps";
+
+const APP_ROOT = path.resolve(__dirname, "../../..");
+const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
+const SCHEMAS = path.resolve(
+  APP_ROOT,
+  "../sfia-v3-modeled/v3-native-option-a/schemas",
+);
+
+const NOW = "2026-07-25T06:00:00.000Z";
+
+const VALID_DIGEST =
+  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
+
+const VALID_PIN: DoctrinePackagePin = {
+  doctrinePackageId: "pkg:studio-v3-oa",
+  version: "1.0.0",
+  digest: VALID_DIGEST,
+};
+
+const MORRIS_ACTOR: ActorReference = {
+  actorId: "actor:morris",
+  role: "decision_maker",
+  displayName: "Morris",
+  authorityLevel: "N3",
+};
+
+const CONTRACT_SCOPE = "docs+schemas+examples only";
+const CONTRACT_ACTION = "publish-modeled-pack";
+const CONTRACT_TARGET = "sfia-v3-modeled/v3-native-option-a";
+const CONTRACT_CAPABILITY = "cap:git-docs";
+
+const OPTIONS = [
+  { optionId: "opt:go", label: "Go", recommended: true },
+  { optionId: "opt:hold", label: "Hold" },
+];
+
+const ATTEMPT_ID = "xat:m5-proc";
+const CONTRACT_ID = "xct:m5-proc";
+const EVIDENCE_ID = "ev:m5-proc";
+const REVIEW_BUNDLE_ID = "rb:m5-proc";
+const DECISION_ID = "dec:m5-proc";
+const CYCLE_ID = "cyc:m5-proc";
+const RESULT_REF = "res:m5-proc-fixture";
+const AUTHORITY_EVIDENCE_ID = "evd:morris-n3";
+
+function provenance(actorId: string, id: string): ProvenanceRecord {
+  return {
+    schemaVersion: "0.1.0-oa",
+    provenanceRecordId: `prv:${id}`,
+    actor: { actorId, role: "system", authorityLevel: "N1" },
+    source: "system",
+    timestamp: NOW,
+    correlationId: "cor:agent-registry-fixture",
+  };
+}
+
+function agentDescriptor(
+  overrides: Partial<AgentDescriptor> & { agentId: string },
+): AgentDescriptor {
+  return {
+    schemaVersion: "0.1.0-oa",
+    agentType: "docs_writer",
+    adapterRef: "adp:test-fixture",
+    supportedCapabilities: [CONTRACT_CAPABILITY],
+    allowedActions: [CONTRACT_ACTION],
+    allowedTargets: [CONTRACT_TARGET],
+    allowedScopes: [CONTRACT_SCOPE],
+    trustLevel: "fixture",
+    executionMode: "adapter_sync_fixture",
+    healthStatus: "healthy",
+    version: 1,
+    enabled: true,
+    createdAt: NOW,
+    provenance: provenance("actor:system", overrides.agentId.replace(/\W/g, "")),
+    ...overrides,
+  };
+}
+
+function defaultAgents(): AgentDescriptor[] {
+  return [
+    agentDescriptor({ agentId: "agt:alpha" }),
+    agentDescriptor({ agentId: "agt:beta" }),
+    agentDescriptor({ agentId: "agt:disabled", enabled: false }),
+    agentDescriptor({ agentId: "agt:sick", healthStatus: "degraded" }),
+    agentDescriptor({
+      agentId: "agt:wrong-scope",
+      allowedScopes: ["everything"],
+    }),
+    agentDescriptor({
+      agentId: "agt:wrong-capability",
+      supportedCapabilities: ["cap:sql"],
+    }),
+  ];
+}
+
+function fail(code: number, payload: unknown): never {
+  console.error(JSON.stringify(payload));
+  process.exit(code);
+}
+
+function assertOk<T extends { ok: boolean }>(
+  result: T,
+  code: number,
+  label: string,
+): asserts result is T & { ok: true } {
+  if (!result.ok) {
+    fail(code, { label, result });
+  }
+}
+
+function registerMorris(
+  authority: MemoryAuthorityResolver,
+  scope: string,
+  evidenceId: string,
+): void {
+  try {
+    authority.register({
+      evidenceId,
+      actorId: "actor:morris",
+      level: "N3",
+      scope,
+      issuedAt: "2026-07-01T00:00:00.000Z",
+      source: "registry",
+      canActAsMorris: true,
+    });
+  } catch (err) {
+    if (!(err instanceof Error) || err.message !== "evidence_immutable") {
+      throw err;
+    }
+  }
+}
+
+async function boot(dbPath: string) {
+  const { resolver } = createTestDoctrineResolver({
+    registryRoot: FIXTURES,
+    schemasRoot: SCHEMAS,
+  });
+  const projects = createTestSqliteProductProjectServices({
+    doctrineResolver: resolver,
+    fixedNowIso: NOW,
+    dbPath,
+  });
+  const cycles = createSqliteCycleServices({
+    projectServices: projects,
+    productStore: projects.store,
+    clock: new FixedClock(NOW),
+  });
+  const authority = new MemoryAuthorityResolver();
+  const decisions = createTestSqliteDecisionServices({
+    projectServices: projects,
+    cycleServices: cycles,
+    productStore: projects.store,
+    authorityResolver: authority,
+    fixedNowIso: NOW,
+  });
+  const execution = createTestSqliteExecutionContractServices({
+    projectServices: projects,
+    decisionServices: decisions,
+    cycleServices: cycles,
+    productStore: projects.store,
+    authorityResolver: authority,
+    fixedNowIso: NOW,
+  });
+  const adapter = new TestExecutionAdapter();
+  const attempts = createTestSqliteExecutionAttemptServices({
+    decisionServices: decisions,
+    executionContractServices: execution,
+    productStore: projects.store,
+    agents: defaultAgents(),
+    adapter,
+    authorityResolver: authority,
+    fixedNowIso: NOW,
+  });
+  return { projects, cycles, decisions, authority, execution, attempts, adapter };
+}
+
+async function createMode(dbPath: string, projectId: string): Promise<void> {
+  const stack = await boot(dbPath);
+  try {
+    const created = await stack.projects.createProject.execute({
+      projectId,
+      title: "M5 Process Restart",
+      objective: "m5-process-restart-objective",
+      context: "m5-process-restart-context",
+      scope: "m5-process-restart-scope",
+      doctrinePackagePin: VALID_PIN,
+      createdBy: {
+        actorId: MORRIS_ACTOR.actorId,
+        role: "project_owner",
+        displayName: MORRIS_ACTOR.displayName,
+        authorityLevel: "N3",
+      },
+      lpsVersionId: "lps:m5-proc-v1",
+      idempotencyKey: `idem:${projectId}`,
+    });
+    assertOk(created, 2, "createProject");
+
+    registerMorris(stack.authority, CONTRACT_SCOPE, AUTHORITY_EVIDENCE_ID);
+    registerMorris(stack.authority, "subj:exec-gate", "evd:morris-subjexecgate");
+
+    const decided = await stack.decisions.recordHumanDecision.execute({
+      decisionId: DECISION_ID,
+      projectId,
+      subject: "subj:exec-gate",
+      options: OPTIONS,
+      selectedOptionId: "opt:go",
+      actor: MORRIS_ACTOR,
+      authority: "morris",
+      reversible: false,
+      authorityEvidenceId: "evd:morris-subjexecgate",
+    });
+    assertOk(decided, 3, "recordHumanDecision");
+
+    const cycle = await stack.cycles.createCycle.execute({
+      cycleInstanceId: CYCLE_ID,
+      cycleTypeId: "cyc:delivery",
+      projectId,
+      signals: {},
+      requestedProfile: "Standard",
+      createdBy: MORRIS_ACTOR,
+    });
+    assertOk(cycle, 4, "createCycle");
+
+    const built = await stack.execution.buildExecutionContract.execute({
+      executionContractId: CONTRACT_ID,
+      projectId,
+      decisionRefs: [DECISION_ID],
+      cycleInstanceId: CYCLE_ID,
+      action: CONTRACT_ACTION,
+      target: CONTRACT_TARGET,
+      scope: CONTRACT_SCOPE,
+      requiredCapabilities: [CONTRACT_CAPABILITY],
+      requiredAuthority: "N3",
+      constraints: ["no-runtime-code", "no-sql"],
+      stopConditions: ["DOCTRINE_UNRESOLVED", "AUTHORITY_DENIED"],
+      evidenceRequirements: ["evreq:schemas", "evreq:examples"],
+      reversibility: "partially_reversible",
+      idempotencyKey: "idem-xct-m5-proc",
+      correlationId: "cor:m5-proc",
+      actor: MORRIS_ACTOR,
+      authorityEvidenceId: AUTHORITY_EVIDENCE_ID,
+    });
+    assertOk(built, 5, "buildExecutionContract");
+
+    const validated = await stack.execution.validateExecutionContract.execute({
+      executionContractId: CONTRACT_ID,
+      actor: MORRIS_ACTOR,
+      authorityEvidenceId: AUTHORITY_EVIDENCE_ID,
+    });
+    assertOk(validated, 6, "validateExecutionContract");
+
+    const confirmationId = "cfm:m5-proc";
+    const requested = await stack.decisions.requestConfirmation.execute({
+      confirmationId,
+      level: "N3",
+      actionRef: "act:confirm-exec",
+      requestedBy: MORRIS_ACTOR,
+      requestedTo: MORRIS_ACTOR,
+      scope: CONTRACT_SCOPE,
+      idempotencyKey: `idem-${confirmationId}`,
+      decisionRef: DECISION_ID,
+    });
+    assertOk(requested, 7, "requestConfirmation");
+
+    const granted = await stack.decisions.grantConfirmation.execute({
+      confirmationId,
+      actor: MORRIS_ACTOR,
+      authorityEvidenceId: AUTHORITY_EVIDENCE_ID,
+    });
+    assertOk(granted, 8, "grantConfirmation");
+
+    const confirmed = await stack.execution.confirmExecutionContract.execute({
+      executionContractId: CONTRACT_ID,
+      confirmationId,
+      actor: MORRIS_ACTOR,
+      authorityEvidenceId: AUTHORITY_EVIDENCE_ID,
+      expectedVersion: validated.contract.version,
+    });
+    assertOk(confirmed, 9, "confirmExecutionContract");
+
+    const selected = await stack.attempts.selectExecutionAgent.execute({
+      attemptId: ATTEMPT_ID,
+      executionContractId: CONTRACT_ID,
+      idempotencyKey: "idem-attempt-m5-proc",
+      actor: MORRIS_ACTOR,
+      authorityEvidenceId: AUTHORITY_EVIDENCE_ID,
+      selectionProfile: "standard",
+    });
+    assertOk(selected, 10, "selectExecutionAgent");
+
+    const started = await stack.attempts.startExecution.execute({
+      attemptId: ATTEMPT_ID,
+      actor: MORRIS_ACTOR,
+      authorityEvidenceId: AUTHORITY_EVIDENCE_ID,
+    });
+    assertOk(started, 11, "startExecution");
+
+    const recorded = await stack.attempts.recordExecutionResult.execute({
+      attemptId: ATTEMPT_ID,
+      adapterId: "adp:test-fixture",
+      resultRef: RESULT_REF,
+      technicalExitCode: 0,
+    });
+    assertOk(recorded, 12, "recordExecutionResult");
+    if (recorded.attempt.status !== "succeeded") {
+      fail(12, {
+        label: "attempt_not_succeeded",
+        status: recorded.attempt.status,
+      });
+    }
+
+    const evidence = createTestSqliteEvidenceReviewServices({
+      productStore: stack.projects.store,
+      fixedNowIso: NOW,
+      attemptReader: createAttemptReaderBridge(stack.attempts.attempts),
+    });
+
+    const ingested = await evidence.ingestExecutionAttemptEvidence.execute({
+      evidenceId: EVIDENCE_ID,
+      executionAttemptId: ATTEMPT_ID,
+      idempotencyKey: "idem:ev:m5-proc",
+      actor: MORRIS_ACTOR,
+      classification: "internal",
+      storageMode: "metadata_only",
+      bindings: {
+        projectId,
+        executionContractId: CONTRACT_ID,
+      },
+    });
+    assertOk(ingested, 13, "ingestExecutionAttemptEvidence");
+
+    const bundle = await evidence.createReviewBundle.execute({
+      reviewBundleId: REVIEW_BUNDLE_ID,
+      idempotencyKey: "idem:rb:m5-proc",
+      actor: MORRIS_ACTOR,
+      projectId,
+      executionContractId: CONTRACT_ID,
+      evidenceIds: [EVIDENCE_ID],
+    });
+    assertOk(bundle, 14, "createReviewBundle");
+
+    const linked = await appendEvidenceOutcomeToLps({
+      projectId,
+      evidenceId: EVIDENCE_ID,
+      reviewBundleId: REVIEW_BUNDLE_ID,
+      projectServices: stack.projects,
+    });
+    if (!linked.ok) {
+      fail(15, { label: "appendEvidenceOutcomeToLps", linked });
+    }
+
+    const preRestart = await rehydrateEvidenceOutcomeFromLps({
+      projectId,
+      deps: {
+        projectServices: stack.projects,
+        evidenceReviewServices: evidence,
+      },
+    });
+    if (!preRestart.ok) {
+      fail(16, { label: "rehydrate_pre_restart", preRestart });
+    }
+
+    process.stdout.write(
+      `${JSON.stringify({
+        ok: true,
+        attemptId: ATTEMPT_ID,
+        resultRef: RESULT_REF,
+        evidenceId: EVIDENCE_ID,
+        reviewBundleId: REVIEW_BUNDLE_ID,
+        executionContractId: CONTRACT_ID,
+        lpsVersion: linked.lpsVersion,
+        evidence: {
+          sourceKind: ingested.evidence.sourceKind,
+          technicalResultRef: ingested.evidence.technicalResultRef ?? null,
+          bindings: ingested.evidence.bindings,
+        },
+        recommendation: {
+          kind: preRestart.recommendation.kind,
+          executionAuthority: preRestart.recommendation.executionAuthority,
+          gateConsumed: preRestart.recommendation.gateConsumed,
+          decisionCreated: preRestart.recommendation.decisionCreated,
+          attemptAutoLaunchNextCycle:
+            preRestart.recommendation.attemptAutoLaunchNextCycle,
+        },
+      })}\n`,
+    );
+  } finally {
+    stack.projects.dispose();
+  }
+}
+
+async function readMode(dbPath: string, projectId: string): Promise<void> {
+  const stack = await boot(dbPath);
+  try {
+    const evidence = createTestSqliteEvidenceReviewServices({
+      productStore: stack.projects.store,
+      fixedNowIso: NOW,
+      attemptReader: createAttemptReaderBridge(stack.attempts.attempts),
+    });
+
+    const attempt = await stack.attempts.attempts.findById(ATTEMPT_ID);
+    const ev = await evidence.repository.findById(EVIDENCE_ID);
+    const rb = await evidence.reviewBundleRepository.findById(REVIEW_BUNDLE_ID);
+    const lps = await stack.projects.getCurrentLivingProjectState.execute({
+      projectId,
+    });
+    if (!attempt || !ev || !rb || !lps.ok) {
+      process.stdout.write(
+        `${JSON.stringify({
+          ok: false,
+          attempt: !!attempt,
+          evidence: !!ev,
+          reviewBundle: !!rb,
+          lpsOk: lps.ok,
+        })}\n`,
+      );
+      process.exit(6);
+    }
+
+    if (attempt.status !== "succeeded") {
+      fail(7, { label: "attempt_status", status: attempt.status });
+    }
+    if (attempt.resultRef !== RESULT_REF) {
+      fail(7, {
+        label: "resultRef_mismatch",
+        expected: RESULT_REF,
+        actual: attempt.resultRef,
+      });
+    }
+    if (ev.sourceKind !== "execution_attempt") {
+      fail(8, { label: "sourceKind", sourceKind: ev.sourceKind });
+    }
+    if (ev.technicalResultRef !== RESULT_REF) {
+      fail(8, {
+        label: "technicalResultRef",
+        expected: RESULT_REF,
+        actual: ev.technicalResultRef,
+      });
+    }
+
+    const rehydrated = await rehydrateEvidenceOutcomeFromLps({
+      projectId,
+      deps: {
+        projectServices: stack.projects,
+        evidenceReviewServices: evidence,
+      },
+    });
+    if (!rehydrated.ok) {
+      fail(9, { label: "rehydrateEvidenceOutcomeFromLps", rehydrated });
+    }
+
+    process.stdout.write(
+      `${JSON.stringify({
+        ok: true,
+        attemptStatus: attempt.status,
+        resultRef: attempt.resultRef,
+        evidenceId: ev.evidenceId,
+        reviewBundleId: rb.reviewBundleId,
+        evidence: {
+          sourceKind: ev.sourceKind,
+          technicalResultRef: ev.technicalResultRef ?? null,
+          bindings: ev.bindings,
+        },
+        evidenceIds: lps.livingProjectState.evidenceIds ?? [],
+        reviewBundleIds: lps.livingProjectState.reviewBundleIds ?? [],
+        lpsVersion: lps.livingProjectState.version,
+        executionContractId: CONTRACT_ID,
+        recommendation: {
+          kind: rehydrated.recommendation.kind,
+          executionAuthority: rehydrated.recommendation.executionAuthority,
+          gateConsumed: rehydrated.recommendation.gateConsumed,
+          decisionCreated: rehydrated.recommendation.decisionCreated,
+          attemptAutoLaunchNextCycle:
+            rehydrated.recommendation.attemptAutoLaunchNextCycle,
+        },
+      })}\n`,
+    );
+  } finally {
+    stack.projects.dispose();
+  }
+}
+
+async function main(): Promise<void> {
+  const [, , mode, dbPath, projectId] = process.argv;
+  if (!mode || !dbPath || !projectId) {
+    throw new Error("usage: <create|read> <dbPath> <projectId>");
+  }
+  if (mode === "create") {
+    await createMode(dbPath, projectId);
+    return;
+  }
+  if (mode === "read") {
+    await readMode(dbPath, projectId);
+    return;
+  }
+  throw new Error(`unknown mode ${mode}`);
+}
+
+main().catch((err) => {
+  console.error(err instanceof Error ? err.stack : String(err));
+  process.exit(1);
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/project/m5W1LpsAppend.test.ts b/projects/sfia-studio/app/__tests__/oa/project/m5W1LpsAppend.test.ts
new file mode 100644
index 00000000..32f90293
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/project/m5W1LpsAppend.test.ts
@@ -0,0 +1,212 @@
+/**
+ * M5-B W1 — LPS factual evidenceIds / reviewBundleIds append + carry-forward.
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, describe, expect, it } from "vitest";
+import {
+  createTestDoctrineResolver,
+  type Digest,
+  type DoctrinePackagePin,
+} from "@/lib/oa/doctrine";
+import {
+  createTestSqliteProductProjectServices,
+  type ActorReference,
+  type SqliteProductProjectServices,
+} from "@/lib/oa/project";
+import { appendEvidenceOutcomeToLps } from "@/features/project-assistant/f3/appendEvidenceOutcomeToLps";
+import {
+  SFIA_STUDIO_SYSTEM_FACTUAL_WRITER,
+  SFIA_STUDIO_SYSTEM_FACTUAL_WRITER_ID,
+} from "@/features/project-assistant/f3/systemFactualWriter";
+import { LOCAL_MORRIS_ACTOR } from "@/features/project-assistant/f2/recordDecision";
+
+const APP_ROOT = path.resolve(__dirname, "../../..");
+const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
+const SCHEMAS = path.resolve(
+  APP_ROOT,
+  "../sfia-v3-modeled/v3-native-option-a/schemas",
+);
+
+const VALID_DIGEST =
+  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
+
+const VALID_PIN: DoctrinePackagePin = {
+  doctrinePackageId: "pkg:studio-v3-oa",
+  version: "1.0.0",
+  digest: VALID_DIGEST,
+};
+
+const ACTOR: ActorReference = {
+  actorId: "actor:morris",
+  role: "project_owner",
+  displayName: "Morris",
+  authorityLevel: "N3",
+};
+
+const tempDirs: string[] = [];
+const openServices: Array<{ dispose: () => void }> = [];
+
+function tempDbPath(name: string): string {
+  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m5-w1-"));
+  tempDirs.push(dir);
+  return path.join(dir, name);
+}
+
+function openProjects(dbPath: string): SqliteProductProjectServices {
+  const { resolver } = createTestDoctrineResolver({
+    registryRoot: FIXTURES,
+    schemasRoot: SCHEMAS,
+  });
+  const svc = createTestSqliteProductProjectServices({
+    doctrineResolver: resolver,
+    fixedNowIso: "2026-08-15T09:30:00.000Z",
+    dbPath,
+  });
+  openServices.push(svc);
+  return svc;
+}
+
+afterEach(() => {
+  while (openServices.length) {
+    try {
+      openServices.pop()?.dispose();
+    } catch {
+      /* ignore */
+    }
+  }
+  while (tempDirs.length) {
+    const dir = tempDirs.pop();
+    if (dir) fs.rmSync(dir, { recursive: true, force: true });
+  }
+});
+
+describe("M5 W1 LPS evidence/RB append", () => {
+  it("appends evidenceIds and reviewBundleIds factually", async () => {
+    const dbPath = tempDbPath("w1.sqlite");
+    const projects = openProjects(dbPath);
+    await projects.createProject.execute({
+      projectId: "prj:m5-w1",
+      title: "M5 W1",
+      objective: "m5-w1-objective",
+      context: "m5-w1-context",
+      scope: "m5-w1-scope",
+      doctrinePackagePin: VALID_PIN,
+      createdBy: ACTOR,
+      lpsVersionId: "lps:m5-w1-v1",
+      idempotencyKey: "idem:m5-w1",
+    });
+
+    const linked = await appendEvidenceOutcomeToLps({
+      projectId: "prj:m5-w1",
+      evidenceId: "ev:m5-w1",
+      reviewBundleId: "rb:m5-w1",
+      projectServices: projects,
+    });
+    expect(linked.ok).toBe(true);
+    if (!linked.ok) return;
+    expect(linked.lpsVersion).toBe(2);
+
+    const lps = await projects.getCurrentLivingProjectState.execute({
+      projectId: "prj:m5-w1",
+    });
+    expect(lps.ok).toBe(true);
+    if (!lps.ok) return;
+    expect(lps.livingProjectState.evidenceIds).toEqual(["ev:m5-w1"]);
+    expect(lps.livingProjectState.reviewBundleIds).toEqual(["rb:m5-w1"]);
+  });
+
+  it("uses system factual writer provenance (not Morris)", async () => {
+    const dbPath = tempDbPath("w1-prov.sqlite");
+    const projects = openProjects(dbPath);
+    await projects.createProject.execute({
+      projectId: "prj:m5-w1-prov",
+      title: "M5 W1 provenance",
+      objective: "m5-w1-prov-objective",
+      doctrinePackagePin: VALID_PIN,
+      createdBy: ACTOR,
+      lpsVersionId: "lps:m5-w1-prov-v1",
+      idempotencyKey: "idem:m5-w1-prov",
+    });
+
+    const seeded = await projects.appendLivingProjectStateVersion.execute({
+      projectId: "prj:m5-w1-prov",
+      expectedVersion: 1,
+      objective: "m5-w1-prov-objective",
+      createdBy: ACTOR,
+      decisionIds: ["dec:keep"],
+      trajectoryId: "trj:keep",
+      trajectoryVersion: 3,
+    });
+    expect(seeded.ok).toBe(true);
+    if (!seeded.ok) return;
+
+    const linked = await appendEvidenceOutcomeToLps({
+      projectId: "prj:m5-w1-prov",
+      evidenceId: "ev:m5-w1-prov",
+      reviewBundleId: "rb:m5-w1-prov",
+      projectServices: projects,
+    });
+    expect(linked.ok).toBe(true);
+    if (!linked.ok) return;
+
+    const lps = await projects.getCurrentLivingProjectState.execute({
+      projectId: "prj:m5-w1-prov",
+    });
+    expect(lps.ok).toBe(true);
+    if (!lps.ok) return;
+    const state = lps.livingProjectState;
+    expect(state.createdBy.role).toBe("system");
+    expect(state.createdBy.authorityLevel).toBe("none");
+    expect(state.createdBy.actorId).toBe(SFIA_STUDIO_SYSTEM_FACTUAL_WRITER_ID);
+    expect(state.createdBy.actorId).not.toBe(LOCAL_MORRIS_ACTOR.actorId);
+    expect(state.createdBy.actorId).toBe(
+      SFIA_STUDIO_SYSTEM_FACTUAL_WRITER.actorId,
+    );
+    expect(state.provenance?.actor.role).toBe("system");
+    expect(state.provenance?.actor.actorId).toBe(
+      SFIA_STUDIO_SYSTEM_FACTUAL_WRITER_ID,
+    );
+    expect(state.decisionIds).toEqual(["dec:keep"]);
+    expect(state.trajectoryId).toBe("trj:keep");
+    expect(state.trajectoryVersion).toBe(3);
+    expect(state.evidenceIds).toEqual(["ev:m5-w1-prov"]);
+    expect(state.reviewBundleIds).toEqual(["rb:m5-w1-prov"]);
+  });
+
+  it("preserves evidenceIds/reviewBundleIds when omitted on later append", async () => {
+    const dbPath = tempDbPath("carry.sqlite");
+    const projects = openProjects(dbPath);
+    await projects.createProject.execute({
+      projectId: "prj:m5-carry",
+      title: "M5 carry",
+      objective: "carry-objective",
+      doctrinePackagePin: VALID_PIN,
+      createdBy: ACTOR,
+      lpsVersionId: "lps:m5-carry-v1",
+      idempotencyKey: "idem:m5-carry",
+    });
+
+    await appendEvidenceOutcomeToLps({
+      projectId: "prj:m5-carry",
+      evidenceId: "ev:keep",
+      reviewBundleId: "rb:keep",
+      projectServices: projects,
+    });
+
+    const appended = await projects.appendLivingProjectStateVersion.execute({
+      projectId: "prj:m5-carry",
+      expectedVersion: 2,
+      objective: "carry-objective-v3",
+      createdBy: ACTOR,
+      decisionIds: ["dec:1"],
+    });
+    expect(appended.ok).toBe(true);
+    if (!appended.ok) return;
+    expect(appended.livingProjectState.evidenceIds).toEqual(["ev:keep"]);
+    expect(appended.livingProjectState.reviewBundleIds).toEqual(["rb:keep"]);
+    expect(appended.livingProjectState.decisionIds).toEqual(["dec:1"]);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/project/rehydrateEvidenceOutcomeFromLps.test.ts b/projects/sfia-studio/app/__tests__/oa/project/rehydrateEvidenceOutcomeFromLps.test.ts
new file mode 100644
index 00000000..bd77aad2
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/project/rehydrateEvidenceOutcomeFromLps.test.ts
@@ -0,0 +1,214 @@
+/**
+ * M5 rehydrateEvidenceOutcomeFromLps — read-only LPS → RecommendNextGate.
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, describe, expect, it } from "vitest";
+import {
+  createTestDoctrineResolver,
+  type Digest,
+  type DoctrinePackagePin,
+} from "@/lib/oa/doctrine";
+import {
+  createTestSqliteProductProjectServices,
+  type ActorReference,
+  type SqliteProductProjectServices,
+} from "@/lib/oa/project";
+import {
+  createTestSqliteEvidenceReviewServices,
+  type ActorReference as EvidenceActor,
+  type Digest as EvidenceDigest,
+} from "@/lib/oa/evidence-review";
+import { appendEvidenceOutcomeToLps } from "@/features/project-assistant/f3/appendEvidenceOutcomeToLps";
+import { rehydrateEvidenceOutcomeFromLps } from "@/features/project-assistant/f3/rehydrateEvidenceOutcomeFromLps";
+
+const APP_ROOT = path.resolve(__dirname, "../../..");
+const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
+const SCHEMAS = path.resolve(
+  APP_ROOT,
+  "../sfia-v3-modeled/v3-native-option-a/schemas",
+);
+
+const VALID_DIGEST =
+  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
+
+const EVIDENCE_DIGEST =
+  "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" as EvidenceDigest;
+
+const VALID_PIN: DoctrinePackagePin = {
+  doctrinePackageId: "pkg:studio-v3-oa",
+  version: "1.0.0",
+  digest: VALID_DIGEST,
+};
+
+const ACTOR: ActorReference = {
+  actorId: "actor:morris",
+  role: "project_owner",
+  displayName: "Morris",
+  authorityLevel: "N3",
+};
+
+const EV_ACTOR: EvidenceActor = {
+  actorId: "actor:morris",
+  role: "decision_maker",
+  authorityLevel: "N3",
+};
+
+const tempDirs: string[] = [];
+const openServices: Array<{ dispose: () => void }> = [];
+
+function tempDbPath(name: string): string {
+  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m5-reh-"));
+  tempDirs.push(dir);
+  return path.join(dir, name);
+}
+
+function openProjects(dbPath: string): SqliteProductProjectServices {
+  const { resolver } = createTestDoctrineResolver({
+    registryRoot: FIXTURES,
+    schemasRoot: SCHEMAS,
+  });
+  const svc = createTestSqliteProductProjectServices({
+    doctrineResolver: resolver,
+    fixedNowIso: "2026-08-15T11:00:00.000Z",
+    dbPath,
+  });
+  openServices.push(svc);
+  return svc;
+}
+
+afterEach(() => {
+  while (openServices.length) {
+    try {
+      openServices.pop()?.dispose();
+    } catch {
+      /* ignore */
+    }
+  }
+  while (tempDirs.length) {
+    const dir = tempDirs.pop();
+    if (dir) fs.rmSync(dir, { recursive: true, force: true });
+  }
+});
+
+describe("rehydrateEvidenceOutcomeFromLps", () => {
+  it("reads LPS refs and returns recommendation-only DTO", async () => {
+    const dbPath = tempDbPath("rehydrate.sqlite");
+    const projects = openProjects(dbPath);
+    await projects.createProject.execute({
+      projectId: "prj:m5-reh",
+      title: "M5 rehydrate",
+      objective: "m5-reh-objective",
+      doctrinePackagePin: VALID_PIN,
+      createdBy: ACTOR,
+      lpsVersionId: "lps:m5-reh-v1",
+      idempotencyKey: "idem:m5-reh",
+    });
+
+    const evidence = createTestSqliteEvidenceReviewServices({
+      productStore: projects.store,
+      fixedNowIso: "2026-08-15T11:00:00.000Z",
+    });
+    const reg = await evidence.registerEvidence.execute({
+      evidenceId: "ev:m5-reh",
+      idempotencyKey: "idem:ev:m5-reh",
+      actor: EV_ACTOR,
+      type: "document",
+      source: "fixture",
+      sourceKind: "manual",
+      bindings: {
+        projectId: "prj:m5-reh",
+        executionContractId: "xct:m5-reh",
+      },
+      classification: "internal",
+      storageMode: "metadata_only",
+      digest: EVIDENCE_DIGEST,
+    });
+    expect(reg.ok).toBe(true);
+
+    const bundle = await evidence.createReviewBundle.execute({
+      reviewBundleId: "rb:m5-reh",
+      idempotencyKey: "idem:rb:m5-reh",
+      actor: EV_ACTOR,
+      projectId: "prj:m5-reh",
+      executionContractId: "xct:m5-reh",
+      evidenceIds: ["ev:m5-reh"],
+    });
+    expect(bundle.ok).toBe(true);
+
+    const linked = await appendEvidenceOutcomeToLps({
+      projectId: "prj:m5-reh",
+      evidenceId: "ev:m5-reh",
+      reviewBundleId: "rb:m5-reh",
+      projectServices: projects,
+    });
+    expect(linked.ok).toBe(true);
+
+    const lpsBefore = await projects.getCurrentLivingProjectState.execute({
+      projectId: "prj:m5-reh",
+    });
+    expect(lpsBefore.ok).toBe(true);
+    if (!lpsBefore.ok) return;
+    const versionBefore = lpsBefore.livingProjectState.version;
+
+    const rehydrated = await rehydrateEvidenceOutcomeFromLps({
+      projectId: "prj:m5-reh",
+      deps: {
+        projectServices: projects,
+        evidenceReviewServices: evidence,
+      },
+    });
+    expect(rehydrated.ok).toBe(true);
+    if (!rehydrated.ok) return;
+
+    expect(rehydrated.evidenceIds).toEqual(["ev:m5-reh"]);
+    expect(rehydrated.reviewBundleIds).toEqual(["rb:m5-reh"]);
+    expect(rehydrated.evidence).toHaveLength(1);
+    expect(rehydrated.reviewBundles).toHaveLength(1);
+    expect(rehydrated.subjectRef).toBe("xct:m5-reh");
+    expect(rehydrated.recommendation.kind).toBe("recommendation");
+    expect(rehydrated.recommendation.executionAuthority).toBe(false);
+    expect(rehydrated.recommendation.gateConsumed).toBe(false);
+    expect(rehydrated.recommendation.decisionCreated).toBe(false);
+    expect(rehydrated.recommendation.attemptAutoLaunchNextCycle).toBe(false);
+
+    const lpsAfter = await projects.getCurrentLivingProjectState.execute({
+      projectId: "prj:m5-reh",
+    });
+    expect(lpsAfter.ok).toBe(true);
+    if (!lpsAfter.ok) return;
+    expect(lpsAfter.livingProjectState.version).toBe(versionBefore);
+    expect(lpsAfter.livingProjectState.decisionIds ?? []).toEqual(
+      lpsBefore.livingProjectState.decisionIds ?? [],
+    );
+  });
+
+  it("fails closed when LPS has no evidence/RB refs", async () => {
+    const dbPath = tempDbPath("empty.sqlite");
+    const projects = openProjects(dbPath);
+    await projects.createProject.execute({
+      projectId: "prj:m5-empty",
+      title: "M5 empty",
+      objective: "empty",
+      doctrinePackagePin: VALID_PIN,
+      createdBy: ACTOR,
+      lpsVersionId: "lps:m5-empty-v1",
+      idempotencyKey: "idem:m5-empty",
+    });
+    const evidence = createTestSqliteEvidenceReviewServices({
+      productStore: projects.store,
+    });
+    const result = await rehydrateEvidenceOutcomeFromLps({
+      projectId: "prj:m5-empty",
+      deps: {
+        projectServices: projects,
+        evidenceReviewServices: evidence,
+      },
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.code).toBe("NO_EVIDENCE_OUTCOME_REFS");
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts
index d97e15dc..ea79e0e3 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts
@@ -168,6 +168,7 @@ describe("F3 native fixture vertical slice", () => {
         authorityResolver: runtime.oa!.authorityResolver,
         executionContractServices: runtime.oa!.executionContractServices,
         nowIso: () => runtime.oa!.clock.nowIso(),
+        productDurablePath: runtime.oa!.productDurablePath,
       },
     });
     expect(prepared.ok).toBe(true);
@@ -206,6 +207,7 @@ describe("F3 native fixture vertical slice", () => {
         authorityResolver: runtime.oa!.authorityResolver,
         executionContractServices: runtime.oa!.executionContractServices,
         nowIso: () => runtime.oa!.clock.nowIso(),
+        productDurablePath: runtime.oa!.productDurablePath,
       },
     });
     expect(prepared.ok).toBe(true);
@@ -227,6 +229,7 @@ describe("F3 native fixture vertical slice", () => {
         authorityResolver: runtime.oa!.authorityResolver,
         executionContractServices: runtime.oa!.executionContractServices,
         nowIso: () => runtime.oa!.clock.nowIso(),
+        productDurablePath: runtime.oa!.productDurablePath,
       },
     });
     expect(bad.ok).toBe(false);
@@ -247,6 +250,7 @@ describe("F3 native fixture vertical slice", () => {
         authorityResolver: runtime.oa!.authorityResolver,
         executionContractServices: runtime.oa!.executionContractServices,
         nowIso: () => runtime.oa!.clock.nowIso(),
+        productDurablePath: runtime.oa!.productDurablePath,
       },
     });
     expect(prepared.ok).toBe(true);
@@ -314,6 +318,7 @@ describe("F3 native fixture vertical slice", () => {
         authorityResolver: runtime.oa!.authorityResolver,
         executionContractServices: runtime.oa!.executionContractServices,
         nowIso: () => runtime.oa!.clock.nowIso(),
+        productDurablePath: runtime.oa!.productDurablePath,
       },
     });
     expect(prepared.ok).toBe(true);
@@ -372,6 +377,7 @@ describe("F3 native fixture vertical slice", () => {
         authorityResolver: runtime.oa!.authorityResolver,
         executionContractServices: runtime.oa!.executionContractServices,
         nowIso: () => runtime.oa!.clock.nowIso(),
+        productDurablePath: runtime.oa!.productDurablePath,
       },
     });
     expect(prepared.ok).toBe(true);
@@ -415,6 +421,7 @@ describe("F3 native fixture vertical slice", () => {
         authorityResolver: runtime.oa!.authorityResolver,
         executionContractServices: runtime.oa!.executionContractServices,
         nowIso: () => runtime.oa!.clock.nowIso(),
+        productDurablePath: runtime.oa!.productDurablePath,
       },
     });
     expect(prepared.ok).toBe(false);
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/m5C1C2DisclosureAndRehydrateAction.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/m5C1C2DisclosureAndRehydrateAction.test.ts
new file mode 100644
index 00000000..b1504ebd
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/m5C1C2DisclosureAndRehydrateAction.test.ts
@@ -0,0 +1,242 @@
+/**
+ * C1/C2 — Product durable disclosure + direct rehydrate server action proof.
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, describe, expect, it } from "vitest";
+import {
+  projectAssistantRehydrateEvidenceOutcomeAction,
+} from "@/features/project-assistant/actions";
+import {
+  F3_PROCESS_LOCAL_NOTICE,
+  F3_PRODUCT_DURABLE_NOTICE,
+  resolveF3EphemeralNotice,
+  appendEvidenceOutcomeToLps,
+} from "@/features/project-assistant/f3";
+import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
+import {
+  getRuntimeApplicationService,
+  resetRuntimeApplicationServiceForTests,
+} from "@/lib/vertical-slice-runtime";
+import type { Digest as EvidenceDigest } from "@/lib/oa/evidence-review";
+
+const APP_ROOT = path.resolve(__dirname, "../..");
+const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
+const SCHEMAS_ROOT = path.resolve(
+  APP_ROOT,
+  "../sfia-v3-modeled/v3-native-option-a/schemas",
+);
+
+const EVIDENCE_DIGEST =
+  "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" as EvidenceDigest;
+
+const tempDirs: string[] = [];
+
+class FixedIdSource implements LocalProjectIdSource {
+  private project = 0;
+  private lps = 0;
+  private correlation = 0;
+  nextProjectId(): string {
+    this.project += 1;
+    return `prj:c12-${this.project}`;
+  }
+  nextLpsVersionId(): string {
+    this.lps += 1;
+    return `lps:c12-${this.lps}`;
+  }
+  nextCorrelationId(): string {
+    this.correlation += 1;
+    return `cor:c12-${this.correlation}`;
+  }
+}
+
+afterEach(() => {
+  resetRuntimeApplicationServiceForTests();
+  while (tempDirs.length) {
+    const dir = tempDirs.pop();
+    if (dir) fs.rmSync(dir, { recursive: true, force: true });
+  }
+});
+
+function bootProductRuntime() {
+  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-c12-"));
+  tempDirs.push(dir);
+  const dbPath = path.join(dir, "oa-product.sqlite");
+  resetRuntimeApplicationServiceForTests();
+  const runtime = getRuntimeApplicationService({
+    registryRoot: REGISTRY_ROOT,
+    schemasRoot: SCHEMAS_ROOT,
+    nowIso: "2026-08-15T12:00:00.000Z",
+    idSource: new FixedIdSource(),
+    auditMode: "noop",
+    productDbPath: dbPath,
+  });
+  expect(runtime.oa).toBeTruthy();
+  expect(runtime.oa!.productDurablePath).toBe(true);
+  return { runtime, dbPath };
+}
+
+describe("C1 F3 disclosure routing", () => {
+  it("routes Product durable vs Memory process-local notices", () => {
+    expect(resolveF3EphemeralNotice(true)).toBe(F3_PRODUCT_DURABLE_NOTICE);
+    expect(resolveF3EphemeralNotice(false)).toBe(F3_PROCESS_LOCAL_NOTICE);
+    expect(F3_PRODUCT_DURABLE_NOTICE).toMatch(/Product SQLite/i);
+    expect(F3_PRODUCT_DURABLE_NOTICE).toMatch(/REAL/i);
+    expect(F3_PRODUCT_DURABLE_NOTICE).not.toMatch(/efface/i);
+    expect(F3_PRODUCT_DURABLE_NOTICE).not.toMatch(/non persisté/i);
+    expect(F3_PRODUCT_DURABLE_NOTICE).not.toMatch(/M5 CLOSED/i);
+    expect(F3_PRODUCT_DURABLE_NOTICE).not.toMatch(/ADOPTED/i);
+    expect(F3_PROCESS_LOCAL_NOTICE).toMatch(/non persisté/i);
+  });
+});
+
+describe("C2 projectAssistantRehydrateEvidenceOutcomeAction", () => {
+  it("invokes the server action on Product SQLite and returns recommendation-only", async () => {
+    const { runtime } = bootProductRuntime();
+    const created = await runtime.createProject({
+      name: "C2 Rehydrate",
+      objective: "c2-rehydrate-objective",
+      context: "c2",
+      criticality: "STANDARD",
+      constraints: ["FIXTURE ONLY"],
+      shortReference: "C2R",
+      idempotencyKey: `idem:c2-${Date.now()}`,
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+    const projectId = created.project.projectId;
+
+    const evidence =
+      await runtime.oa!.evidenceReviewServices.registerEvidence.execute({
+        evidenceId: "ev:c2-action",
+        idempotencyKey: "idem:ev:c2-action",
+        actor: {
+          actorId: "actor:morris",
+          role: "decision_maker",
+          authorityLevel: "N3",
+        },
+        type: "document",
+        source: "fixture",
+        sourceKind: "manual",
+        bindings: { projectId },
+        classification: "internal",
+        storageMode: "metadata_only",
+        digest: EVIDENCE_DIGEST,
+      });
+    expect(evidence.ok).toBe(true);
+    if (!evidence.ok) return;
+
+    const bundle =
+      await runtime.oa!.evidenceReviewServices.createReviewBundle.execute({
+        reviewBundleId: "rb:c2-action",
+        idempotencyKey: "idem:rb:c2-action",
+        actor: {
+          actorId: "actor:morris",
+          role: "decision_maker",
+          authorityLevel: "N3",
+        },
+        projectId,
+        evidenceIds: [evidence.evidence.evidenceId],
+      });
+    expect(bundle.ok).toBe(true);
+    if (!bundle.ok) return;
+
+    const linked = await appendEvidenceOutcomeToLps({
+      projectId,
+      evidenceId: evidence.evidence.evidenceId,
+      reviewBundleId: bundle.reviewBundle.reviewBundleId,
+      projectServices: runtime.oa!.projectServices,
+    });
+    expect(linked.ok).toBe(true);
+    if (!linked.ok) return;
+
+    const beforeLps =
+      await runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
+        projectId,
+      });
+    expect(beforeLps.ok).toBe(true);
+    if (!beforeLps.ok) return;
+    const beforeVersion = beforeLps.livingProjectState.version;
+    const beforeDecisionIds = [
+      ...(beforeLps.livingProjectState.decisionIds ?? []),
+    ];
+    const beforeEvidenceIds = [
+      ...(beforeLps.livingProjectState.evidenceIds ?? []),
+    ];
+    const beforeRbIds = [
+      ...(beforeLps.livingProjectState.reviewBundleIds ?? []),
+    ];
+    const beforeTrajectoryId = beforeLps.livingProjectState.trajectoryId;
+    const beforeTrajectoryVersion =
+      beforeLps.livingProjectState.trajectoryVersion;
+
+    const result = await projectAssistantRehydrateEvidenceOutcomeAction({
+      projectId,
+    });
+
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.status).toBe("ok");
+    expect(result.project.projectId).toBe(projectId);
+    expect(result.evidenceIds).toEqual(["ev:c2-action"]);
+    expect(result.reviewBundleIds).toEqual(["rb:c2-action"]);
+    expect(result.evidence.map((e) => e.evidenceId)).toEqual(["ev:c2-action"]);
+    expect(result.reviewBundles.map((b) => b.reviewBundleId)).toEqual([
+      "rb:c2-action",
+    ]);
+    expect(result.recommendation.kind).toBe("recommendation");
+    expect(result.recommendation.executionAuthority).toBe(false);
+    expect(result.recommendation.gateConsumed).toBe(false);
+    expect(result.recommendation.decisionCreated).toBe(false);
+    expect(result.recommendation.attemptAutoLaunchNextCycle).toBe(false);
+    expect(result.ephemeralNotice).toBe(F3_PRODUCT_DURABLE_NOTICE);
+    expect(result.ephemeralNotice).not.toBe(F3_PROCESS_LOCAL_NOTICE);
+    expect(result.text).toContain(F3_PRODUCT_DURABLE_NOTICE);
+    expect(result.text).not.toMatch(/efface/i);
+
+    const afterLps =
+      await runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
+        projectId,
+      });
+    expect(afterLps.ok).toBe(true);
+    if (!afterLps.ok) return;
+    expect(afterLps.livingProjectState.version).toBe(beforeVersion);
+    expect(afterLps.livingProjectState.decisionIds ?? []).toEqual(
+      beforeDecisionIds,
+    );
+    expect(afterLps.livingProjectState.evidenceIds ?? []).toEqual(
+      beforeEvidenceIds,
+    );
+    expect(afterLps.livingProjectState.reviewBundleIds ?? []).toEqual(
+      beforeRbIds,
+    );
+    expect(afterLps.livingProjectState.trajectoryId).toBe(beforeTrajectoryId);
+    expect(afterLps.livingProjectState.trajectoryVersion).toBe(
+      beforeTrajectoryVersion,
+    );
+  });
+
+  it("fail-closes via server action when LPS has no evidence/RB refs", async () => {
+    const { runtime } = bootProductRuntime();
+    const created = await runtime.createProject({
+      name: "C2 Empty",
+      objective: "c2-empty",
+      context: "c2",
+      criticality: "STANDARD",
+      constraints: ["FIXTURE ONLY"],
+      shortReference: "C2E",
+      idempotencyKey: `idem:c2-empty-${Date.now()}`,
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+
+    const result = await projectAssistantRehydrateEvidenceOutcomeAction({
+      projectId: created.project.projectId,
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.code).toBe("NO_EVIDENCE_OUTCOME_REFS");
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/m5C1PrepareMemoryDisclosure.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/m5C1PrepareMemoryDisclosure.test.ts
new file mode 100644
index 00000000..591acd7b
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/m5C1PrepareMemoryDisclosure.test.ts
@@ -0,0 +1,178 @@
+/**
+ * C1 residual — prepareF3Fixture Memory surface must return PROCESS_LOCAL notice.
+ * @vitest-environment node
+ */
+import path from "node:path";
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import {
+  prepareF3Fixture,
+  F3_PROCESS_LOCAL_NOTICE,
+  F3_PRODUCT_DURABLE_NOTICE,
+} from "@/features/project-assistant/f3";
+import {
+  createProposalId,
+  F2_PROCESS_LOCAL_NOTICE,
+  resetF2ProposalStoreForTests,
+  saveProposal,
+} from "@/features/project-assistant/f2/proposalStore";
+import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
+import {
+  createTestDoctrineResolver,
+  type Digest,
+  type DoctrinePackagePin,
+} from "@/lib/oa/doctrine";
+import { createTestProjectServices } from "@/lib/oa/project";
+import { createTestCycleServices } from "@/lib/oa/cycle";
+import {
+  MemoryAuthorityResolver,
+  createTestDecisionServices,
+} from "@/lib/oa/decision";
+import { createTestExecutionContractServices } from "@/lib/oa/execution-contract";
+
+const APP_ROOT = path.resolve(__dirname, "../..");
+const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
+const SCHEMAS = path.resolve(
+  APP_ROOT,
+  "../sfia-v3-modeled/v3-native-option-a/schemas",
+);
+
+const VALID_DIGEST =
+  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
+
+const VALID_PIN: DoctrinePackagePin = {
+  doctrinePackageId: "pkg:studio-v3-oa",
+  version: "1.0.0",
+  digest: VALID_DIGEST,
+};
+
+const NOW = "2026-08-15T13:00:00.000Z";
+
+describe("C1 prepareF3Fixture Memory disclosure surface", () => {
+  beforeEach(() => {
+    resetF2ProposalStoreForTests();
+  });
+  afterEach(() => {
+    resetF2ProposalStoreForTests();
+  });
+
+  it("returns F3_PROCESS_LOCAL_NOTICE when productDurablePath=false", async () => {
+    const { resolver } = createTestDoctrineResolver({
+      registryRoot: FIXTURES,
+      schemasRoot: SCHEMAS,
+    });
+    const projects = createTestProjectServices({
+      doctrineResolver: resolver,
+      fixedNowIso: NOW,
+    });
+    const cycles = createTestCycleServices({
+      projectServices: projects,
+      fixedNowIso: NOW,
+    });
+    const authority = new MemoryAuthorityResolver();
+    const decisions = createTestDecisionServices({
+      projectServices: projects,
+      cycleServices: cycles,
+      authorityResolver: authority,
+      fixedNowIso: NOW,
+    });
+    const contracts = createTestExecutionContractServices({
+      projectServices: projects,
+      cycleServices: cycles,
+      decisionServices: decisions,
+      fixedNowIso: NOW,
+    });
+
+    const created = await projects.createProject.execute({
+      projectId: "prj:c1-memory-prep",
+      title: "C1 Memory Prepare",
+      objective: "memory-prepare-objective",
+      context: "memory",
+      scope: "memory-scope",
+      doctrinePackagePin: VALID_PIN,
+      createdBy: {
+        actorId: "actor:morris",
+        role: "project_owner",
+        displayName: "Morris",
+        authorityLevel: "N3",
+      },
+      lpsVersionId: "lps:c1-memory-v1",
+      idempotencyKey: "idem:c1-memory-prep",
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+
+    const lps = await projects.getCurrentLivingProjectState.execute({
+      projectId: "prj:c1-memory-prep",
+    });
+    expect(lps.ok).toBe(true);
+    if (!lps.ok) return;
+
+    const proposal = saveProposal({
+      proposalId: createProposalId(),
+      status: "DECISION_REQUIRED",
+      rephrasedRequest: "Préparer fixture F3 memory",
+      objective: "Memory disclosure proof",
+      cycleTypeId: "cyc:delivery",
+      recommendedProfile: "Standard",
+      rationale: "C1 residual",
+      scope: "fixture-docs",
+      outOfScope: ["REAL"],
+      activatedBlocks: ["prepare"],
+      expectedOutcome: "PROCESS_LOCAL notice",
+      sources: [],
+      risks: [],
+      reservations: [],
+      stopConditions: ["AUCUNE EXÉCUTION RÉELLE"],
+      morrisGateRequired: true,
+      nextPossibleStep: "F3 PREPARE",
+      contextSnapshot: {
+        projectId: "prj:c1-memory-prep",
+        lpsId: lps.livingProjectState.lpsVersionId,
+        lpsVersion: lps.livingProjectState.version,
+        doctrineDigest: VALID_DIGEST,
+      },
+      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
+      executionForbidden: true,
+      noExecutingStatus: true,
+      agentBinding: "NOT_AVAILABLE",
+    });
+
+    const go = await recordF2Decision({
+      proposalId: proposal.proposalId,
+      projectId: "prj:c1-memory-prep",
+      decisionKind: "GO",
+      currentContext: proposal.contextSnapshot,
+      decisionServices: decisions,
+      authorityResolver: authority,
+      nowIso: () => NOW,
+      forceM3Authority: true,
+    });
+    expect(go.ok).toBe(true);
+    if (!go.ok) return;
+
+    const prepared = await prepareF3Fixture({
+      projectId: "prj:c1-memory-prep",
+      proposalId: go.proposal.proposalId,
+      decisionId: go.decision.decisionId,
+      currentContext: go.proposal.contextSnapshot,
+      deps: {
+        decisionServices: decisions,
+        authorityResolver: authority,
+        executionContractServices: contracts,
+        nowIso: () => NOW,
+        productDurablePath: false,
+      },
+    });
+
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) return;
+    expect(prepared.payload.processLocalNotice).toBe(F3_PROCESS_LOCAL_NOTICE);
+    expect(prepared.payload.processLocalNotice).not.toBe(
+      F3_PRODUCT_DURABLE_NOTICE,
+    );
+    expect(prepared.payload.disclosures).toContain(F3_PROCESS_LOCAL_NOTICE);
+    expect(prepared.payload.disclosures).not.toContain(
+      F3_PRODUCT_DURABLE_NOTICE,
+    );
+  });
+});
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index 4b05d0d4..762461f2 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -9,7 +9,8 @@ import type { F2DecisionKind } from "./f2/types";
 import { confirmAndExecuteF3Fixture } from "./f3/confirmAndExecuteF3Fixture";
 import { prepareF3Fixture } from "./f3/prepareF3Fixture";
 import { prepareM3FromDecision } from "./f3/prepareM3FromDecision";
-import { F3_PROCESS_LOCAL_NOTICE } from "./f3/constants";
+import { rehydrateEvidenceOutcomeFromLps } from "./f3/rehydrateEvidenceOutcomeFromLps";
+import { resolveF3EphemeralNotice } from "./f3/constants";
 import type {
   AssistantHistoryMessage,
   ProjectAssistantContextDto,
@@ -17,12 +18,14 @@ import type {
   ProjectAssistantExecuteF3Result,
   ProjectAssistantPrepareF3Result,
   ProjectAssistantPrepareM3Result,
+  ProjectAssistantRehydrateEvidenceOutcomeResult,
   ProjectAssistantSendResult,
 } from "./types";

 /**
  * Thin server action — Project Workspace Assistant (F1 + F2 + F3 fixture).
- * No OPS1 session. No Cursor REAL. No Git write. No durable persistence.
+ * No OPS1 session. No Cursor REAL. No Git write.
+ * Persistence durability follows RuntimeOaStack.productDurablePath (Product SQLite vs Memory).
  */
 export async function projectAssistantSendAction(input: {
   projectId: string;
@@ -243,6 +246,7 @@ export async function projectAssistantPrepareF3FixtureAction(input: {
       authorityResolver: runtime.oa.authorityResolver,
       executionContractServices: runtime.oa.executionContractServices,
       nowIso: () => runtime.oa!.clock.nowIso(),
+      productDurablePath: runtime.oa.productDurablePath,
     },
   });

@@ -259,6 +263,9 @@ export async function projectAssistantPrepareF3FixtureAction(input: {
   }

   const f3 = prepared.payload;
+  const persistenceNotice = resolveF3EphemeralNotice(
+    runtime.oa.productDurablePath,
+  );
   return {
     ok: true,
     status: "ok",
@@ -269,10 +276,10 @@ export async function projectAssistantPrepareF3FixtureAction(input: {
       `Contrat ${f3.contract.executionContractId} v${f3.contract.version} (${f3.contract.status})`,
       "AUCUNE EXÉCUTION",
       "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
-      F3_PROCESS_LOCAL_NOTICE,
+      persistenceNotice,
     ].join(" — "),
     project,
-    ephemeralNotice: F3_PROCESS_LOCAL_NOTICE,
+    ephemeralNotice: persistenceNotice,
     f2: null,
     f3,
   };
@@ -467,6 +474,8 @@ export async function projectAssistantConfirmAndExecuteF3FixtureAction(input: {
       executionAttemptServices: runtime.oa.executionAttemptServices,
       evidenceReviewServices: runtime.oa.evidenceReviewServices,
       fixtureAdapter: runtime.oa.fixtureAdapter,
+      projectServices: runtime.oa.projectServices,
+      productDurablePath: runtime.oa.productDurablePath,
       nowIso: () => runtime.oa!.clock.nowIso(),
     },
   });
@@ -484,6 +493,9 @@ export async function projectAssistantConfirmAndExecuteF3FixtureAction(input: {
   }

   const f3 = executed.payload;
+  const persistenceNotice = resolveF3EphemeralNotice(
+    runtime.oa.productDurablePath,
+  );
   return {
     ok: true,
     status: "ok",
@@ -499,10 +511,89 @@ export async function projectAssistantConfirmAndExecuteF3FixtureAction(input: {
       "RECOMMANDATION — PAS UNE DÉCISION MORRIS",
       "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
       "CURSOR REAL BLOQUÉ",
-      F3_PROCESS_LOCAL_NOTICE,
+      persistenceNotice,
     ].join(" — "),
     project,
-    ephemeralNotice: F3_PROCESS_LOCAL_NOTICE,
+    ephemeralNotice: persistenceNotice,
     f3,
   };
 }
+
+/**
+ * M5 durable Nora/F3 readback — LPS evidence/RB refs → RecommendNextGate.
+ * Strictly read-only: no Decision, no gate consume, no Attempt launch.
+ */
+export async function projectAssistantRehydrateEvidenceOutcomeAction(input: {
+  projectId: string;
+}): Promise<ProjectAssistantRehydrateEvidenceOutcomeResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      status: "rehydrate_error",
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Services OA process-local indisponibles pour rehydrate F3.",
+      mode: "unavailable",
+      retryable: false,
+    };
+  }
+
+  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
+  if (!projectResult.ok) {
+    return {
+      ok: false,
+      status: "project_not_found",
+      code: projectResult.error.code,
+      message: projectResult.error.message,
+      mode: "unavailable",
+      retryable: false,
+    };
+  }
+  const project = toContextDto(projectResult);
+
+  const rehydrated = await rehydrateEvidenceOutcomeFromLps({
+    projectId: input.projectId,
+    deps: {
+      projectServices: runtime.oa.projectServices,
+      evidenceReviewServices: runtime.oa.evidenceReviewServices,
+    },
+  });
+
+  if (!rehydrated.ok) {
+    return {
+      ok: false,
+      status: "rehydrate_error",
+      code: rehydrated.code,
+      message: rehydrated.message,
+      mode: "fixture",
+      retryable: false,
+      project,
+    };
+  }
+
+  const persistenceNotice = resolveF3EphemeralNotice(
+    runtime.oa.productDurablePath,
+  );
+  return {
+    ok: true,
+    status: "ok",
+    mode: "fixture",
+    presentation: "unconfirmed",
+    text: [
+      "REHYDRATE EVIDENCE OUTCOME",
+      `LPS v${rehydrated.lpsVersion}`,
+      `Evidence ${rehydrated.evidenceIds.join(", ") || "—"}`,
+      `ReviewBundle ${rehydrated.reviewBundleIds.join(", ") || "—"}`,
+      "RECOMMANDATION — PAS UNE DÉCISION MORRIS",
+      persistenceNotice,
+    ].join(" — "),
+    project,
+    ephemeralNotice: persistenceNotice,
+    evidence: rehydrated.evidence,
+    reviewBundles: rehydrated.reviewBundles,
+    recommendation: rehydrated.recommendation,
+    lpsVersion: rehydrated.lpsVersion,
+    evidenceIds: rehydrated.evidenceIds,
+    reviewBundleIds: rehydrated.reviewBundleIds,
+  };
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/appendEvidenceOutcomeToLps.ts b/projects/sfia-studio/app/features/project-assistant/f3/appendEvidenceOutcomeToLps.ts
new file mode 100644
index 00000000..89090478
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/f3/appendEvidenceOutcomeToLps.ts
@@ -0,0 +1,65 @@
+/**
+ * M5-B W1 — factual LPS append of evidenceIds / reviewBundleIds after
+ * successful Evidence ingest + ReviewBundle create.
+ * Recommendation remains Recommendation (not Decision / not gate consume).
+ */
+
+import type { ProjectServices } from "@/lib/oa/project";
+import { SFIA_STUDIO_SYSTEM_FACTUAL_WRITER } from "./systemFactualWriter";
+
+export type AppendEvidenceOutcomeToLpsResult =
+  | { ok: true; lpsVersion: number }
+  | { ok: false; code: string; message: string };
+
+export async function appendEvidenceOutcomeToLps(input: {
+  projectId: string;
+  evidenceId: string;
+  reviewBundleId: string;
+  projectServices: Pick<
+    ProjectServices,
+    "appendLivingProjectStateVersion" | "getCurrentLivingProjectState"
+  >;
+}): Promise<AppendEvidenceOutcomeToLpsResult> {
+  const current =
+    await input.projectServices.getCurrentLivingProjectState.execute({
+      projectId: input.projectId,
+    });
+  if (!current.ok) {
+    return {
+      ok: false,
+      code: current.error.detailCode,
+      message: current.error.message,
+    };
+  }
+
+  const lps = current.livingProjectState;
+  const evidenceIds = [
+    ...new Set([...(lps.evidenceIds ?? []), input.evidenceId]),
+  ];
+  const reviewBundleIds = [
+    ...new Set([...(lps.reviewBundleIds ?? []), input.reviewBundleId]),
+  ];
+
+  const appended =
+    await input.projectServices.appendLivingProjectStateVersion.execute({
+      projectId: input.projectId,
+      expectedVersion: lps.version,
+      objective: lps.objective,
+      context: lps.context,
+      scope: lps.scope,
+      // Automatic factual write-back — system actor, not Morris demo authority.
+      createdBy: SFIA_STUDIO_SYSTEM_FACTUAL_WRITER,
+      evidenceIds,
+      reviewBundleIds,
+    });
+
+  if (!appended.ok) {
+    return {
+      ok: false,
+      code: appended.error.detailCode,
+      message: appended.error.message,
+    };
+  }
+
+  return { ok: true, lpsVersion: appended.livingProjectState.version };
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts b/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts
index 261e3e6b..8256b3d1 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts
@@ -18,6 +18,7 @@ import type {
   TestExecutionAdapter,
 } from "@/lib/oa/execution-attempt";
 import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
+import type { ProjectServices } from "@/lib/oa/project";
 import type { F2ContextSnapshot } from "../f2/types";
 import { LOCAL_MORRIS_ACTOR } from "../f2/recordDecision";
 import {
@@ -27,9 +28,9 @@ import {
   F3_CONFIRM_ACTION_REF,
   F3_LABELS,
   F3_MODE,
-  F3_PROCESS_LOCAL_NOTICE,
   F3_REQUIRED_AUTHORITY,
   F3_SCOPE,
+  resolveF3EphemeralNotice,
 } from "./constants";
 import { ingestEvidenceAndRecommend } from "./ingestEvidenceAndRecommend";
 import type { F3ExecutePayload } from "./types";
@@ -43,6 +44,13 @@ export type ConfirmExecuteF3Deps = {
   evidenceReviewServices: EvidenceReviewServices;
   fixtureAdapter: TestExecutionAdapter;
   nowIso: () => string;
+  /** Product path — enables M5-B W1 LPS evidence/RB factual append. */
+  projectServices?: ProjectServices;
+  /**
+   * True when OA composition uses Product SQLite (Attempt/Evidence/RB durable).
+   * Defaults true when projectServices present; false for Memory/process-local.
+   */
+  productDurablePath?: boolean;
 };

 function authorityEvidenceIdForProposal(proposalId: string): string {
@@ -113,12 +121,20 @@ async function buildExecutePayload(input: {
     projectId: input.projectId,
     attemptId: input.attempt.attemptId,
     executionContractId: input.contract.executionContractId,
-    deps: { evidenceReviewServices: input.deps.evidenceReviewServices },
+    deps: {
+      evidenceReviewServices: input.deps.evidenceReviewServices,
+      projectServices: input.deps.projectServices,
+    },
   });
   if (!ingested.ok) {
     return ingested;
   }

+  const productDurable =
+    input.deps.productDurablePath ??
+    input.deps.projectServices !== undefined;
+  const persistenceNotice = resolveF3EphemeralNotice(productDurable);
+
   return {
     ok: true,
     payload: {
@@ -163,7 +179,7 @@ async function buildExecutePayload(input: {
         cursorRealBlocked: F3_LABELS.cursorRealBlocked,
         hardOpen: F3_LABELS.hardOpen,
       },
-      processLocalNotice: F3_PROCESS_LOCAL_NOTICE,
+      processLocalNotice: persistenceNotice,
       disclosures: [
         F3_LABELS.fixtureNoReal,
         F3_LABELS.noGitWrite,
@@ -172,7 +188,7 @@ async function buildExecutePayload(input: {
         F3_LABELS.hardOpen,
         F3_LABELS.noReadyClaim,
         F3_LABELS.noTa6Complete,
-        F3_PROCESS_LOCAL_NOTICE,
+        persistenceNotice,
       ],
     },
   };
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/constants.ts b/projects/sfia-studio/app/features/project-assistant/f3/constants.ts
index 60bacbc5..5c3e44fc 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/constants.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/constants.ts
@@ -47,9 +47,33 @@ export const F3_OPEN_HARD_RESERVATION_REFS = Object.freeze([
   "R-M01",
 ] as const);

+/**
+ * Honest only for a true Memory / process-local OA stack (no Product SQLite).
+ * Do NOT use on the Product SQLite M5 path.
+ */
 export const F3_PROCESS_LOCAL_NOTICE =
   "F3 fixture process-local — non persisté. Un redémarrage efface contrats, attempts et evidence. Aucune autorité d'exécution durable.";

+/**
+ * Product SQLite M5 path — fixture/no-effect execution with durable Attempt /
+ * Evidence / ReviewBundle / LPS evidence links. REAL remains disabled.
+ * Distinguishes execution mode (fixture) from persistence durability (Product).
+ */
+export const F3_PRODUCT_DURABLE_NOTICE =
+  "F3 fixture execution — Attempt, Evidence, ReviewBundle and LPS evidence links are persisted in Product SQLite. REAL execution remains disabled. Recommendation is not a Morris decision.";
+
+/**
+ * Route F3 ephemeral disclosure by OA composition persistence, not by
+ * execution mode (fixture vs REAL).
+ */
+export function resolveF3EphemeralNotice(
+  productDurablePath: boolean,
+): typeof F3_PRODUCT_DURABLE_NOTICE | typeof F3_PROCESS_LOCAL_NOTICE {
+  return productDurablePath
+    ? F3_PRODUCT_DURABLE_NOTICE
+    : F3_PROCESS_LOCAL_NOTICE;
+}
+
 export const F3_LABELS = Object.freeze({
   fixtureNoReal: "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
   noGitWrite: "AUCUN GIT WRITE PRODUIT",
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/index.ts b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
index ba860544..388de836 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/index.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
@@ -1,4 +1,9 @@
 export { F3_MODE, F3_ADAPTER_ID, F3_AGENT_ID, F3_LABELS } from "./constants";
+export {
+  F3_PROCESS_LOCAL_NOTICE,
+  F3_PRODUCT_DURABLE_NOTICE,
+  resolveF3EphemeralNotice,
+} from "./constants";
 export type {
   F3PreparePayload,
   F3ExecutePayload,
@@ -14,6 +19,12 @@ export { prepareM3FromDecision } from "./prepareM3FromDecision";
 export type { F3M3PreparePayload, PrepareM3Deps } from "./prepareM3FromDecision";
 export { confirmAndExecuteF3Fixture } from "./confirmAndExecuteF3Fixture";
 export { ingestEvidenceAndRecommend } from "./ingestEvidenceAndRecommend";
+export { appendEvidenceOutcomeToLps } from "./appendEvidenceOutcomeToLps";
+export { rehydrateEvidenceOutcomeFromLps } from "./rehydrateEvidenceOutcomeFromLps";
+export {
+  SFIA_STUDIO_SYSTEM_FACTUAL_WRITER,
+  SFIA_STUDIO_SYSTEM_FACTUAL_WRITER_ID,
+} from "./systemFactualWriter";
 export {
   createF3FixtureAgentDescriptor,
   createF3TestExecutionAdapter,
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts b/projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts
index 5c6039a3..c4ad4b35 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts
@@ -1,10 +1,13 @@
 /**
  * IngestExecutionAttemptEvidence → CreateReviewBundle → RecommendNextGate.
  * Recommendation-only; HARD refs passed through; no auto-launch.
+ * M5-B W1: when projectServices present, append factual LPS evidence/RB ids.
  */

 import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
+import type { ProjectServices } from "@/lib/oa/project";
 import { LOCAL_MORRIS_ACTOR } from "../f2/recordDecision";
+import { appendEvidenceOutcomeToLps } from "./appendEvidenceOutcomeToLps";
 import {
   F3_LABELS,
   F3_MODE,
@@ -18,6 +21,11 @@ import type {

 export type IngestRecommendDeps = {
   evidenceReviewServices: EvidenceReviewServices;
+  /** When present (product path), perform M5-B W1 LPS factual link append. */
+  projectServices?: Pick<
+    ProjectServices,
+    "appendLivingProjectStateVersion" | "getCurrentLivingProjectState"
+  >;
 };

 export type IngestRecommendResult =
@@ -26,6 +34,7 @@ export type IngestRecommendResult =
       evidence: F3EvidenceDto;
       reviewBundle: F3ReviewBundleDto;
       recommendation: F3RecommendationDto;
+      lpsVersion?: number;
     }
   | { ok: false; code: string; message: string };

@@ -85,6 +94,24 @@ export async function ingestEvidenceAndRecommend(input: {
     };
   }

+  let lpsVersion: number | undefined;
+  if (input.deps.projectServices) {
+    const linked = await appendEvidenceOutcomeToLps({
+      projectId: input.projectId,
+      evidenceId: ingested.evidence.evidenceId,
+      reviewBundleId: bundle.reviewBundle.reviewBundleId,
+      projectServices: input.deps.projectServices,
+    });
+    if (!linked.ok) {
+      return {
+        ok: false,
+        code: linked.code,
+        message: linked.message,
+      };
+    }
+    lpsVersion = linked.lpsVersion;
+  }
+
   const recommended =
     await input.deps.evidenceReviewServices.recommendNextGate.execute({
       projectId: input.projectId,
@@ -163,5 +190,6 @@ export async function ingestEvidenceAndRecommend(input: {
       recommendationLabel: F3_LABELS.recommendationNotDecision,
       mode: F3_MODE,
     },
+    lpsVersion,
   };
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/prepareF3Fixture.ts b/projects/sfia-studio/app/features/project-assistant/f3/prepareF3Fixture.ts
index ee20d7c6..a9313aa3 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/prepareF3Fixture.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/prepareF3Fixture.ts
@@ -16,11 +16,11 @@ import {
   F3_EVIDENCE_REQUIREMENTS,
   F3_LABELS,
   F3_MODE,
-  F3_PROCESS_LOCAL_NOTICE,
   F3_REQUIRED_AUTHORITY,
   F3_SCOPE,
   F3_STOP_CONDITIONS,
   F3_TARGET,
+  resolveF3EphemeralNotice,
 } from "./constants";
 import type { F3PreparePayload } from "./types";
 import { validateF2ForPrepare } from "./validateF2ForPrepare";
@@ -30,6 +30,11 @@ export type PrepareF3Deps = {
   authorityResolver: MemoryAuthorityResolver;
   executionContractServices: ExecutionContractServices;
   nowIso: () => string;
+  /**
+   * Required: true = Product SQLite OA composition; false = Memory/process-local.
+   * Callers must not omit — no silent default.
+   */
+  productDurablePath: boolean;
 };

 function toContractDto(
@@ -184,6 +189,10 @@ export async function prepareF3Fixture(input: {
     };
   }

+  const persistenceNotice = resolveF3EphemeralNotice(
+    input.deps.productDurablePath,
+  );
+
   return {
     ok: true,
     payload: {
@@ -201,7 +210,7 @@ export async function prepareF3Fixture(input: {
         cursorRealBlocked: F3_LABELS.cursorRealBlocked,
         hardOpen: F3_LABELS.hardOpen,
       },
-      processLocalNotice: F3_PROCESS_LOCAL_NOTICE,
+      processLocalNotice: persistenceNotice,
       disclosures: [
         F3_LABELS.fixtureNoReal,
         F3_LABELS.noGitWrite,
@@ -209,7 +218,7 @@ export async function prepareF3Fixture(input: {
         F3_LABELS.hardOpen,
         F3_LABELS.noReadyClaim,
         F3_LABELS.noTa6Complete,
-        F3_PROCESS_LOCAL_NOTICE,
+        persistenceNotice,
       ],
     },
   };
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/rehydrateEvidenceOutcomeFromLps.ts b/projects/sfia-studio/app/features/project-assistant/f3/rehydrateEvidenceOutcomeFromLps.ts
new file mode 100644
index 00000000..c7e52271
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/f3/rehydrateEvidenceOutcomeFromLps.ts
@@ -0,0 +1,242 @@
+/**
+ * M5 durable Nora/F3 readback — STRICTLY read-only.
+ * current LPS → evidenceIds / reviewBundleIds → durable readers → RecommendNextGate.
+ * Does not write LPS, create Decision, consume gate, or launch Attempt.
+ */
+
+import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
+import type { ProjectServices } from "@/lib/oa/project";
+import {
+  F3_LABELS,
+  F3_MODE,
+  F3_OPEN_HARD_RESERVATION_REFS,
+} from "./constants";
+import { SFIA_STUDIO_SYSTEM_FACTUAL_WRITER } from "./systemFactualWriter";
+import type {
+  F3EvidenceDto,
+  F3RecommendationDto,
+  F3ReviewBundleDto,
+} from "./types";
+
+export type RehydrateEvidenceOutcomeDeps = {
+  projectServices: Pick<ProjectServices, "getCurrentLivingProjectState">;
+  evidenceReviewServices: Pick<
+    EvidenceReviewServices,
+    "evidenceReader" | "reviewBundleReader" | "recommendNextGate"
+  >;
+};
+
+export type RehydrateEvidenceOutcomeResult =
+  | {
+      ok: true;
+      projectId: string;
+      lpsVersion: number;
+      evidenceIds: string[];
+      reviewBundleIds: string[];
+      evidence: F3EvidenceDto[];
+      reviewBundles: F3ReviewBundleDto[];
+      subjectRef: string | null;
+      recommendation: F3RecommendationDto;
+    }
+  | { ok: false; code: string; message: string };
+
+export async function rehydrateEvidenceOutcomeFromLps(input: {
+  projectId: string;
+  deps: RehydrateEvidenceOutcomeDeps;
+}): Promise<RehydrateEvidenceOutcomeResult> {
+  const current =
+    await input.deps.projectServices.getCurrentLivingProjectState.execute({
+      projectId: input.projectId,
+    });
+  if (!current.ok) {
+    return {
+      ok: false,
+      code: current.error.detailCode,
+      message: current.error.message,
+    };
+  }
+
+  const lps = current.livingProjectState;
+  const evidenceIds = [...(lps.evidenceIds ?? [])];
+  const reviewBundleIds = [...(lps.reviewBundleIds ?? [])];
+
+  if (evidenceIds.length === 0 && reviewBundleIds.length === 0) {
+    return {
+      ok: false,
+      code: "NO_EVIDENCE_OUTCOME_REFS",
+      message: "LPS courant sans evidenceIds/reviewBundleIds.",
+    };
+  }
+
+  const evidenceDtos: F3EvidenceDto[] = [];
+  let subjectRef: string | null = null;
+
+  for (const evidenceId of evidenceIds) {
+    const evidence =
+      await input.deps.evidenceReviewServices.evidenceReader.findById(
+        evidenceId,
+      );
+    if (!evidence) {
+      return {
+        ok: false,
+        code: "EVIDENCE_REF_MISSING",
+        message: `Evidence ${evidenceId} référencée par LPS absente.`,
+      };
+    }
+    const boundProject = evidence.bindings.projectId;
+    if (boundProject && boundProject !== input.projectId) {
+      return {
+        ok: false,
+        code: "EVIDENCE_PROJECT_MISMATCH",
+        message: `Evidence ${evidenceId} project mismatch.`,
+      };
+    }
+    const contractId = evidence.bindings.executionContractId;
+    if (contractId) {
+      if (subjectRef && subjectRef !== contractId) {
+        return {
+          ok: false,
+          code: "EVIDENCE_CONTRACT_MISMATCH",
+          message: "Evidence refs span multiple executionContractId.",
+        };
+      }
+      subjectRef = contractId;
+    }
+    evidenceDtos.push({
+      evidenceId: evidence.evidenceId,
+      status: evidence.status,
+      sourceKind: evidence.sourceKind,
+      technicalResultRef: evidence.technicalResultRef ?? null,
+      verified: false,
+      mode: F3_MODE,
+    });
+  }
+
+  const reviewBundleDtos: F3ReviewBundleDto[] = [];
+  for (const reviewBundleId of reviewBundleIds) {
+    const bundle =
+      await input.deps.evidenceReviewServices.reviewBundleReader.findById(
+        reviewBundleId,
+      );
+    if (!bundle) {
+      return {
+        ok: false,
+        code: "REVIEW_BUNDLE_REF_MISSING",
+        message: `ReviewBundle ${reviewBundleId} référencé par LPS absent.`,
+      };
+    }
+    if (bundle.projectId !== input.projectId) {
+      return {
+        ok: false,
+        code: "REVIEW_BUNDLE_PROJECT_MISMATCH",
+        message: `ReviewBundle ${reviewBundleId} project mismatch.`,
+      };
+    }
+    if (bundle.executionContractId) {
+      if (subjectRef && subjectRef !== bundle.executionContractId) {
+        return {
+          ok: false,
+          code: "REVIEW_BUNDLE_CONTRACT_MISMATCH",
+          message: "ReviewBundle executionContractId incoherent with Evidence.",
+        };
+      }
+      subjectRef = bundle.executionContractId;
+    }
+    reviewBundleDtos.push({
+      reviewBundleId: bundle.reviewBundleId,
+      status: bundle.status,
+      version: bundle.version,
+      evidenceRefs: [...bundle.evidenceRefs],
+      mode: F3_MODE,
+    });
+  }
+
+  const evidenceRefs = [];
+  for (const evidenceId of evidenceIds) {
+    const evidence =
+      await input.deps.evidenceReviewServices.evidenceReader.findById(
+        evidenceId,
+      );
+    if (!evidence) {
+      return {
+        ok: false,
+        code: "EVIDENCE_REF_MISSING",
+        message: `Evidence ${evidenceId} disparue pendant rehydrate.`,
+      };
+    }
+    evidenceRefs.push({ id: evidence.evidenceId, version: evidence.version });
+  }
+
+  const reviewBundleRefs = [];
+  for (const reviewBundleId of reviewBundleIds) {
+    const bundle =
+      await input.deps.evidenceReviewServices.reviewBundleReader.findById(
+        reviewBundleId,
+      );
+    if (!bundle) {
+      return {
+        ok: false,
+        code: "REVIEW_BUNDLE_REF_MISSING",
+        message: `ReviewBundle ${reviewBundleId} disparu pendant rehydrate.`,
+      };
+    }
+    reviewBundleRefs.push({
+      id: bundle.reviewBundleId,
+      version: bundle.version,
+    });
+  }
+
+  const recommended =
+    await input.deps.evidenceReviewServices.recommendNextGate.execute({
+      projectId: input.projectId,
+      subjectRef: subjectRef ?? undefined,
+      evidenceRefs,
+      reviewBundleRefs,
+      openHardReservationRefs: [...F3_OPEN_HARD_RESERVATION_REFS],
+      attemptAutoLaunchNextCycle: false,
+      actor: SFIA_STUDIO_SYSTEM_FACTUAL_WRITER,
+      correlationId: `cor:m5-rehydrate:${input.projectId}:${lps.version}`,
+    });
+
+  if (!recommended.ok) {
+    return {
+      ok: false,
+      code: recommended.error.detailCode,
+      message: recommended.error.message,
+    };
+  }
+
+  const coordination = recommended.coordination;
+  const openHard = [...F3_OPEN_HARD_RESERVATION_REFS];
+  const hardBlockers = [
+    ...coordination.blockers
+      .filter((b) => b.code === "hard_reservation_open")
+      .map((b) => b.sourceId ?? b.code),
+    ...openHard.map((ref) => `${ref} OPEN`),
+  ];
+
+  return {
+    ok: true,
+    projectId: input.projectId,
+    lpsVersion: lps.version,
+    evidenceIds,
+    reviewBundleIds,
+    evidence: evidenceDtos,
+    reviewBundles: reviewBundleDtos,
+    subjectRef,
+    recommendation: {
+      kind: "recommendation",
+      status: coordination.status,
+      executionAuthority: false,
+      gateConsumed: false,
+      decisionCreated: false,
+      attemptAutoLaunchNextCycle: false,
+      openHardReservationRefs: openHard,
+      hardBlockers: [...new Set(hardBlockers)],
+      nextGateCode: coordination.nextGate?.gateCode ?? null,
+      nextActionCode: coordination.nextAction?.actionCode ?? null,
+      recommendationLabel: F3_LABELS.recommendationNotDecision,
+      mode: F3_MODE,
+    },
+  };
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/systemFactualWriter.ts b/projects/sfia-studio/app/features/project-assistant/f3/systemFactualWriter.ts
new file mode 100644
index 00000000..d0ef7df4
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/f3/systemFactualWriter.ts
@@ -0,0 +1,20 @@
+/**
+ * M5-B W1 — system factual LPS writer.
+ * Not Morris, not decision_maker, authority none — automatic state linkage only.
+ */
+
+import type { ActorReference } from "@/lib/oa/doctrine";
+
+export const SFIA_STUDIO_SYSTEM_FACTUAL_WRITER_ID =
+  "actor:sfia-studio-system-factual-writer" as const;
+
+/**
+ * Stable Studio system actor for automatic factual LPS write-back.
+ * Must not be registered as authority evidence / canActAsMorris.
+ */
+export const SFIA_STUDIO_SYSTEM_FACTUAL_WRITER: ActorReference = Object.freeze({
+  actorId: SFIA_STUDIO_SYSTEM_FACTUAL_WRITER_ID,
+  role: "system",
+  displayName: "SFIA Studio system factual state writer",
+  authorityLevel: "none",
+});
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index 48e1d2f7..d9fdf550 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -9,7 +9,13 @@ import type {
   ProposalDto,
   QualificationDto,
 } from "./f2/types";
-import type { F3ExecutePayload, F3PreparePayload } from "./f3/types";
+import type {
+  F3EvidenceDto,
+  F3ExecutePayload,
+  F3PreparePayload,
+  F3RecommendationDto,
+  F3ReviewBundleDto,
+} from "./f3/types";

 export type AssistantUiMode = "fixture" | "live" | "unavailable" | "unconfirmed";

@@ -211,3 +217,33 @@ export type ProjectAssistantExecuteF3Failure = {
 export type ProjectAssistantExecuteF3Result =
   | ProjectAssistantExecuteF3Success
   | ProjectAssistantExecuteF3Failure;
+
+export type ProjectAssistantRehydrateEvidenceOutcomeSuccess = {
+  ok: true;
+  status: "ok";
+  mode: "fixture";
+  presentation: "unconfirmed";
+  text: string;
+  project: ProjectAssistantContextDto;
+  ephemeralNotice: string;
+  evidence: F3EvidenceDto[];
+  reviewBundles: F3ReviewBundleDto[];
+  recommendation: F3RecommendationDto;
+  lpsVersion: number;
+  evidenceIds: string[];
+  reviewBundleIds: string[];
+};
+
+export type ProjectAssistantRehydrateEvidenceOutcomeFailure = {
+  ok: false;
+  status: "rehydrate_error" | "project_not_found";
+  code: string;
+  message: string;
+  mode: AssistantUiMode;
+  retryable: boolean;
+  project?: ProjectAssistantContextDto;
+};
+
+export type ProjectAssistantRehydrateEvidenceOutcomeResult =
+  | ProjectAssistantRehydrateEvidenceOutcomeSuccess
+  | ProjectAssistantRehydrateEvidenceOutcomeFailure;
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/index.ts b/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
index 474d8b46..45d97c44 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
@@ -88,6 +88,14 @@ export {

 export { MemoryEvidenceStore } from "./infrastructure/memoryEvidenceStore";
 export { MemoryEvidenceRepository } from "./infrastructure/memoryEvidenceRepository";
+export { SqliteEvidenceRepository } from "./infrastructure/sqlite/sqliteEvidenceRepository";
+export { SqliteReviewBundleRepository } from "./infrastructure/sqlite/sqliteReviewBundleRepository";
+export {
+  createSqliteEvidenceReviewServices,
+  createTestSqliteEvidenceReviewServices,
+  type CreateSqliteEvidenceReviewServicesOptions,
+  type SqliteEvidenceReviewServices,
+} from "./infrastructure/sqlite/createSqliteEvidenceReviewServices";
 export { FakeEvidencePayloadAdapter } from "./infrastructure/fakeEvidencePayloadAdapter";
 export type { FakePayloadScript } from "./infrastructure/fakeEvidencePayloadAdapter";
 export { FakeExecutionAttemptReader } from "./infrastructure/fakeExecutionAttemptReader";
@@ -162,16 +170,18 @@ import type { ClaimEvaluationReaderPort } from "./ports/claimEvaluationReader";
 import type { EvidenceAuditPort } from "./ports/evidenceAudit";
 import type { EvidencePayloadPort } from "./ports/evidencePayloadPort";
 import type { EvidenceReaderPort } from "./ports/evidenceReader";
+import type { EvidenceRepositoryPort } from "./ports/evidenceRepository";
 import type { ExecutionAttemptReaderPort } from "./ports/executionAttemptReader";
 import type { IdGeneratorPort } from "./ports/idGenerator";
 import type { MaturityAssessmentReaderPort } from "./ports/maturityAssessmentReader";
 import type { ReviewBundleReaderPort } from "./ports/reviewBundleReader";
+import type { ReviewBundleRepositoryPort } from "./ports/reviewBundleRepository";

 export type EvidenceReviewServices = {
   store: MemoryEvidenceStore;
-  repository: MemoryEvidenceRepository;
+  repository: EvidenceRepositoryPort;
   reviewBundleStore: MemoryReviewBundleStore;
-  reviewBundleRepository: MemoryReviewBundleRepository;
+  reviewBundleRepository: ReviewBundleRepositoryPort;
   reviewBundleReader: ReviewBundleReaderPort;
   claimEvaluationStore: MemoryClaimEvaluationStore;
   claimEvaluationRepository: MemoryClaimEvaluationRepository;
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts
new file mode 100644
index 00000000..e3800e92
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts
@@ -0,0 +1,336 @@
+import type { ClockPort } from "@/lib/oa/doctrine";
+import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
+import type { ProductSqliteHandle } from "@/lib/oa/project";
+import { AttachEvidenceToReviewBundle } from "../../application/attachEvidenceToReviewBundle";
+import { CompleteReview } from "../../application/completeReview";
+import { ConfirmClaimEvaluation } from "../../application/confirmClaimEvaluation";
+import { ConfirmMaturity } from "../../application/confirmMaturity";
+import { CreateReviewBundle } from "../../application/createReviewBundle";
+import { DowngradeMaturity } from "../../application/downgradeMaturity";
+import { EvaluateClaim } from "../../application/evaluateClaim";
+import { FreezeReviewBundle } from "../../application/freezeReviewBundle";
+import { IngestExecutionAttemptEvidence } from "../../application/ingestExecutionAttemptEvidence";
+import { MarkEvidenceUnavailable } from "../../application/markEvidenceUnavailable";
+import { ProposeMaturity } from "../../application/proposeMaturity";
+import { RecommendNextGate } from "../../application/recommendNextGate";
+import { RegisterEvidence } from "../../application/registerEvidence";
+import { RejectClaimEvaluation } from "../../application/rejectClaimEvaluation";
+import { RemoveEvidenceFromReviewBundle } from "../../application/removeEvidenceFromReviewBundle";
+import { ReopenReview } from "../../application/reopenReview";
+import { StartReview } from "../../application/startReview";
+import { VerifyEvidenceIntegrity } from "../../application/verifyEvidenceIntegrity";
+import { FakeClaimAuthority } from "../claimAuthorityAdapter";
+import { ClaimEvaluationRepositoryReader } from "../claimEvaluationRepositoryReader";
+import { EvidenceRepositoryReader } from "../evidenceRepositoryReader";
+import { FakeEvidencePayloadAdapter } from "../fakeEvidencePayloadAdapter";
+import { FakeExecutionAttemptReader } from "../fakeExecutionAttemptReader";
+import {
+  FixedIdGenerator,
+  RandomIdGenerator,
+} from "../idGenerator";
+import { MemoryClaimEvaluationRepository } from "../memoryClaimEvaluationRepository";
+import { MemoryClaimEvaluationStore } from "../memoryClaimEvaluationStore";
+import { MemoryEvidenceStore } from "../memoryEvidenceStore";
+import { MemoryMaturityAssessmentRepository } from "../memoryMaturityAssessmentRepository";
+import { MemoryMaturityAssessmentStore } from "../memoryMaturityAssessmentStore";
+import { MemoryReviewBundleStore } from "../memoryReviewBundleStore";
+import { MaturityAssessmentRepositoryReader } from "../maturityAssessmentRepositoryReader";
+import {
+  ConsoleEvidenceAuditJournal,
+  MemoryEvidenceAuditJournal,
+} from "../observability";
+import { ReviewBundleRepositoryReader } from "../reviewBundleRepositoryReader";
+import type { ClaimAuthorityPort } from "../../ports/claimAuthorityPort";
+import type { ClaimEvaluationReaderPort } from "../../ports/claimEvaluationReader";
+import type { EvidenceAuditPort } from "../../ports/evidenceAudit";
+import type { EvidencePayloadPort } from "../../ports/evidencePayloadPort";
+import type { EvidenceReaderPort } from "../../ports/evidenceReader";
+import type { EvidenceRepositoryPort } from "../../ports/evidenceRepository";
+import type { ExecutionAttemptReaderPort } from "../../ports/executionAttemptReader";
+import type { IdGeneratorPort } from "../../ports/idGenerator";
+import type { MaturityAssessmentReaderPort } from "../../ports/maturityAssessmentReader";
+import type { ReviewBundleReaderPort } from "../../ports/reviewBundleReader";
+import type { ReviewBundleRepositoryPort } from "../../ports/reviewBundleRepository";
+import { SqliteEvidenceRepository } from "./sqliteEvidenceRepository";
+import { SqliteReviewBundleRepository } from "./sqliteReviewBundleRepository";
+
+export type CreateSqliteEvidenceReviewServicesOptions = {
+  productStore: ProductSqliteHandle;
+  clock?: ClockPort;
+  audit?: EvidenceAuditPort;
+  ids?: IdGeneratorPort;
+  payload?: EvidencePayloadPort;
+  attemptReader?: ExecutionAttemptReaderPort;
+  evidenceReader?: EvidenceReaderPort;
+  claimAuthority?: ClaimAuthorityPort;
+  claimEvaluationStore?: MemoryClaimEvaluationStore;
+  maturityAssessmentStore?: MemoryMaturityAssessmentStore;
+};
+
+export type SqliteEvidenceReviewServices = {
+  store: MemoryEvidenceStore;
+  repository: EvidenceRepositoryPort;
+  reviewBundleStore: MemoryReviewBundleStore;
+  reviewBundleRepository: ReviewBundleRepositoryPort;
+  reviewBundleReader: ReviewBundleReaderPort;
+  claimEvaluationStore: MemoryClaimEvaluationStore;
+  claimEvaluationRepository: MemoryClaimEvaluationRepository;
+  claimEvaluationReader: ClaimEvaluationReaderPort;
+  claimAuthority: ClaimAuthorityPort;
+  maturityAssessmentStore: MemoryMaturityAssessmentStore;
+  maturityAssessmentRepository: MemoryMaturityAssessmentRepository;
+  maturityAssessmentReader: MaturityAssessmentReaderPort;
+  evidenceReader: EvidenceReaderPort;
+  payload: EvidencePayloadPort;
+  attemptReader: ExecutionAttemptReaderPort;
+  clock: ClockPort;
+  audit: EvidenceAuditPort;
+  ids: IdGeneratorPort;
+  productStore: ProductSqliteHandle;
+  registerEvidence: RegisterEvidence;
+  ingestExecutionAttemptEvidence: IngestExecutionAttemptEvidence;
+  verifyEvidenceIntegrity: VerifyEvidenceIntegrity;
+  markEvidenceUnavailable: MarkEvidenceUnavailable;
+  createReviewBundle: CreateReviewBundle;
+  attachEvidenceToReviewBundle: AttachEvidenceToReviewBundle;
+  removeEvidenceFromReviewBundle: RemoveEvidenceFromReviewBundle;
+  freezeReviewBundle: FreezeReviewBundle;
+  startReview: StartReview;
+  completeReview: CompleteReview;
+  reopenReview: ReopenReview;
+  evaluateClaim: EvaluateClaim;
+  confirmClaimEvaluation: ConfirmClaimEvaluation;
+  rejectClaimEvaluation: RejectClaimEvaluation;
+  proposeMaturity: ProposeMaturity;
+  confirmMaturity: ConfirmMaturity;
+  downgradeMaturity: DowngradeMaturity;
+  recommendNextGate: RecommendNextGate;
+};
+
+/**
+ * Evidence + ReviewBundle durable on Product SQLite (M5-A).
+ * ClaimEvaluation + MaturityAssessment remain Memory (out of minimal M5).
+ */
+export function createSqliteEvidenceReviewServices(
+  options: CreateSqliteEvidenceReviewServicesOptions,
+): SqliteEvidenceReviewServices {
+  const productStore = options.productStore;
+  // Type-compat placeholders — evidence/RB use SQLite repos, not these maps.
+  const store = new MemoryEvidenceStore();
+  const repository = new SqliteEvidenceRepository(productStore);
+  const reviewBundleStore = new MemoryReviewBundleStore();
+  const reviewBundleRepository = new SqliteReviewBundleRepository(productStore);
+  const reviewBundleReader = new ReviewBundleRepositoryReader(
+    reviewBundleRepository,
+  );
+  const claimEvaluationStore =
+    options.claimEvaluationStore ?? new MemoryClaimEvaluationStore();
+  const claimEvaluationRepository = new MemoryClaimEvaluationRepository(
+    claimEvaluationStore,
+  );
+  const claimEvaluationReader = new ClaimEvaluationRepositoryReader(
+    claimEvaluationRepository,
+    claimEvaluationStore,
+  );
+  const claimAuthority = options.claimAuthority ?? new FakeClaimAuthority();
+  const maturityAssessmentStore =
+    options.maturityAssessmentStore ?? new MemoryMaturityAssessmentStore();
+  const maturityAssessmentRepository = new MemoryMaturityAssessmentRepository(
+    maturityAssessmentStore,
+  );
+  const maturityAssessmentReader = new MaturityAssessmentRepositoryReader(
+    maturityAssessmentRepository,
+  );
+  const clock = options.clock ?? new SystemClock();
+  const audit = options.audit ?? new ConsoleEvidenceAuditJournal();
+  const ids = options.ids ?? new RandomIdGenerator();
+  const payload = options.payload ?? new FakeEvidencePayloadAdapter();
+  const attemptReader =
+    options.attemptReader ?? new FakeExecutionAttemptReader();
+  const evidenceReader =
+    options.evidenceReader ?? new EvidenceRepositoryReader(repository);
+
+  return {
+    store,
+    repository,
+    reviewBundleStore,
+    reviewBundleRepository,
+    reviewBundleReader,
+    claimEvaluationStore,
+    claimEvaluationRepository,
+    claimEvaluationReader,
+    claimAuthority,
+    maturityAssessmentStore,
+    maturityAssessmentRepository,
+    maturityAssessmentReader,
+    evidenceReader,
+    payload,
+    attemptReader,
+    clock,
+    audit,
+    ids,
+    productStore,
+    registerEvidence: new RegisterEvidence(repository, clock, audit, ids),
+    ingestExecutionAttemptEvidence: new IngestExecutionAttemptEvidence(
+      repository,
+      attemptReader,
+      clock,
+      audit,
+      ids,
+    ),
+    verifyEvidenceIntegrity: new VerifyEvidenceIntegrity(
+      repository,
+      payload,
+      clock,
+      audit,
+      ids,
+    ),
+    markEvidenceUnavailable: new MarkEvidenceUnavailable(
+      repository,
+      clock,
+      audit,
+      ids,
+    ),
+    createReviewBundle: new CreateReviewBundle(
+      reviewBundleRepository,
+      evidenceReader,
+      clock,
+      audit,
+      ids,
+    ),
+    attachEvidenceToReviewBundle: new AttachEvidenceToReviewBundle(
+      reviewBundleRepository,
+      evidenceReader,
+      clock,
+      audit,
+      ids,
+    ),
+    removeEvidenceFromReviewBundle: new RemoveEvidenceFromReviewBundle(
+      reviewBundleRepository,
+      evidenceReader,
+      clock,
+      audit,
+      ids,
+    ),
+    freezeReviewBundle: new FreezeReviewBundle(
+      reviewBundleRepository,
+      evidenceReader,
+      clock,
+      audit,
+      ids,
+    ),
+    startReview: new StartReview(reviewBundleRepository, clock, audit, ids),
+    completeReview: new CompleteReview(
+      reviewBundleRepository,
+      clock,
+      audit,
+      ids,
+    ),
+    reopenReview: new ReopenReview(reviewBundleRepository, clock, audit, ids),
+    evaluateClaim: new EvaluateClaim(
+      claimEvaluationRepository,
+      reviewBundleReader,
+      evidenceReader,
+      claimAuthority,
+      clock,
+      audit,
+      ids,
+    ),
+    confirmClaimEvaluation: new ConfirmClaimEvaluation(
+      claimEvaluationRepository,
+      reviewBundleReader,
+      evidenceReader,
+      claimAuthority,
+      clock,
+      audit,
+      ids,
+    ),
+    rejectClaimEvaluation: new RejectClaimEvaluation(
+      claimEvaluationRepository,
+      clock,
+      audit,
+      ids,
+    ),
+    proposeMaturity: new ProposeMaturity(
+      maturityAssessmentRepository,
+      claimEvaluationReader,
+      clock,
+      audit,
+      ids,
+    ),
+    confirmMaturity: new ConfirmMaturity(
+      maturityAssessmentRepository,
+      claimEvaluationReader,
+      claimAuthority,
+      clock,
+      audit,
+      ids,
+    ),
+    downgradeMaturity: new DowngradeMaturity(
+      maturityAssessmentRepository,
+      claimEvaluationReader,
+      claimAuthority,
+      clock,
+      audit,
+      ids,
+    ),
+    recommendNextGate: new RecommendNextGate(
+      evidenceReader,
+      reviewBundleReader,
+      claimEvaluationReader,
+      maturityAssessmentReader,
+      clock,
+      audit,
+      ids,
+    ),
+  };
+}
+
+export function createTestSqliteEvidenceReviewServices(
+  options: CreateSqliteEvidenceReviewServicesOptions & {
+    fixedNowIso?: string;
+  },
+): SqliteEvidenceReviewServices & {
+  fakePayload: FakeEvidencePayloadAdapter;
+  fakeAttempts: FakeExecutionAttemptReader;
+  memoryAudit: MemoryEvidenceAuditJournal;
+  fakeClaimAuthority: FakeClaimAuthority;
+} {
+  const fakePayload =
+    options.payload instanceof FakeEvidencePayloadAdapter
+      ? options.payload
+      : new FakeEvidencePayloadAdapter();
+  const fakeAttempts =
+    options.attemptReader instanceof FakeExecutionAttemptReader
+      ? options.attemptReader
+      : new FakeExecutionAttemptReader();
+  const memoryAudit =
+    options.audit instanceof MemoryEvidenceAuditJournal
+      ? options.audit
+      : new MemoryEvidenceAuditJournal();
+  const fakeClaimAuthority =
+    options.claimAuthority instanceof FakeClaimAuthority
+      ? options.claimAuthority
+      : new FakeClaimAuthority();
+
+  const services = createSqliteEvidenceReviewServices({
+    ...options,
+    clock:
+      options.clock ??
+      new FixedClock(options.fixedNowIso ?? "2026-08-15T07:00:00.000Z"),
+    audit: memoryAudit,
+    ids: options.ids ?? new FixedIdGenerator(),
+    payload: fakePayload,
+    // Preserve caller-provided bridges (e.g. createAttemptReaderBridge).
+    attemptReader: options.attemptReader ?? fakeAttempts,
+    claimAuthority: fakeClaimAuthority,
+  });
+
+  return {
+    ...services,
+    fakePayload,
+    fakeAttempts,
+    memoryAudit,
+    fakeClaimAuthority,
+  };
+}
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteEvidenceRepository.ts b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteEvidenceRepository.ts
new file mode 100644
index 00000000..ba9a6dba
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteEvidenceRepository.ts
@@ -0,0 +1,223 @@
+import type { ProductSqliteHandle } from "@/lib/oa/project";
+import { EvidenceDomainError } from "../../domain/errors";
+import { validateEvidenceShape } from "../../domain/invariants";
+import type { Evidence } from "../../domain/types";
+import type {
+  EvidenceRepositoryPort,
+  IdempotencyRecord,
+} from "../../ports/evidenceRepository";
+
+type EvidenceRow = {
+  evidence_id: string;
+  project_id: string | null;
+  status: string;
+  idempotency_key: string | null;
+  version: number;
+  payload_json: string;
+};
+
+type IdempotencyRow = {
+  idempotency_key: string;
+  evidence_id: string;
+  fingerprint: string;
+  operation: string;
+};
+
+function cloneEvidence(evidence: Evidence): Evidence {
+  return structuredClone(evidence);
+}
+
+/**
+ * Durable Evidence repository on Product SQLite (M5).
+ * Mirrors MemoryEvidenceRepository OCC + IdempotencyRecord semantics.
+ */
+export class SqliteEvidenceRepository implements EvidenceRepositoryPort {
+  constructor(private readonly store: ProductSqliteHandle) {}
+
+  async findById(evidenceId: string): Promise<Evidence | null> {
+    const row = this.store.db
+      .prepare(
+        `SELECT evidence_id, project_id, status, idempotency_key, version, payload_json
+         FROM oa_evidence WHERE evidence_id = ?`,
+      )
+      .get(evidenceId) as EvidenceRow | undefined;
+    if (!row) return null;
+    return cloneEvidence(JSON.parse(row.payload_json) as Evidence);
+  }
+
+  async findByIdempotencyKey(idempotencyKey: string): Promise<{
+    evidence: Evidence;
+    record: IdempotencyRecord;
+  } | null> {
+    const row = this.store.db
+      .prepare(
+        `SELECT idempotency_key, evidence_id, fingerprint, operation
+         FROM oa_evidence_idempotency WHERE idempotency_key = ?`,
+      )
+      .get(idempotencyKey) as IdempotencyRow | undefined;
+    if (!row) return null;
+    const evidence = await this.findById(row.evidence_id);
+    if (!evidence) return null;
+    return {
+      evidence,
+      record: {
+        evidenceId: row.evidence_id,
+        fingerprint: row.fingerprint,
+        operation: row.operation as IdempotencyRecord["operation"],
+      },
+    };
+  }
+
+  async exists(evidenceId: string): Promise<boolean> {
+    const row = this.store.db
+      .prepare(`SELECT 1 AS ok FROM oa_evidence WHERE evidence_id = ?`)
+      .get(evidenceId) as { ok?: number } | undefined;
+    return row?.ok === 1;
+  }
+
+  async create(
+    evidence: Evidence,
+    record?: IdempotencyRecord,
+  ): Promise<void> {
+    const shape = validateEvidenceShape(evidence);
+    if (shape) {
+      throw new EvidenceDomainError(shape.detailCode, shape.reason);
+    }
+    if (evidence.version !== 1) {
+      throw new EvidenceDomainError(
+        "EVIDENCE_INVALID",
+        "create_requires_version_1",
+      );
+    }
+    if (await this.exists(evidence.evidenceId)) {
+      throw new EvidenceDomainError(
+        "EVIDENCE_ALREADY_EXISTS",
+        "evidence_id_taken",
+      );
+    }
+    if (record) {
+      const existing = await this.findByIdempotencyKey(
+        evidence.idempotencyKey ?? "",
+      );
+      if (existing && existing.evidence.evidenceId !== evidence.evidenceId) {
+        throw new EvidenceDomainError(
+          "IDEMPOTENCY_CONFLICT",
+          "idempotency_key_taken",
+        );
+      }
+    }
+    this.failIfForced();
+    const now = evidence.createdAt;
+    const payload = JSON.stringify(cloneEvidence(evidence));
+    this.store.db
+      .prepare(
+        `INSERT INTO oa_evidence(
+           evidence_id, project_id, status, idempotency_key, version,
+           payload_json, created_at, updated_at
+         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
+      )
+      .run(
+        evidence.evidenceId,
+        evidence.bindings.projectId ?? null,
+        evidence.status,
+        evidence.idempotencyKey ?? null,
+        evidence.version,
+        payload,
+        now,
+        now,
+      );
+    if (record && evidence.idempotencyKey) {
+      this.upsertIdempotency(evidence.idempotencyKey, record);
+    }
+  }
+
+  async update(
+    evidence: Evidence,
+    expectedVersion: number,
+    record?: IdempotencyRecord,
+  ): Promise<void> {
+    if (evidence.version !== expectedVersion + 1) {
+      throw new EvidenceDomainError("VERSION_CONFLICT", "version_not_monotone", {
+        expectedVersion,
+      });
+    }
+    const shape = validateEvidenceShape(evidence);
+    if (shape) {
+      throw new EvidenceDomainError(shape.detailCode, shape.reason);
+    }
+    this.failIfForced();
+    const now = evidence.updatedAt ?? evidence.createdAt;
+    const payload = JSON.stringify(cloneEvidence(evidence));
+    await this.store.runInTransaction(async () => {
+      const result = this.store.db
+        .prepare(
+          `UPDATE oa_evidence SET
+             project_id = ?,
+             status = ?,
+             idempotency_key = ?,
+             version = ?,
+             payload_json = ?,
+             updated_at = ?
+           WHERE evidence_id = ? AND version = ?`,
+        )
+        .run(
+          evidence.bindings.projectId ?? null,
+          evidence.status,
+          evidence.idempotencyKey ?? null,
+          evidence.version,
+          payload,
+          now,
+          evidence.evidenceId,
+          expectedVersion,
+        );
+      if (Number(result.changes) !== 1) {
+        const current = await this.findById(evidence.evidenceId);
+        if (!current) {
+          throw new EvidenceDomainError(
+            "EVIDENCE_NOT_FOUND",
+            "update_missing_evidence",
+          );
+        }
+        throw new EvidenceDomainError("VERSION_CONFLICT", "occ_mismatch", {
+          expectedVersion,
+          currentVersion: current.version,
+        });
+      }
+      if (record && evidence.idempotencyKey) {
+        this.upsertIdempotency(evidence.idempotencyKey, record);
+      }
+    });
+  }
+
+  private upsertIdempotency(
+    idempotencyKey: string,
+    record: IdempotencyRecord,
+  ): void {
+    this.store.db
+      .prepare(
+        `INSERT INTO oa_evidence_idempotency(
+           idempotency_key, evidence_id, fingerprint, operation
+         ) VALUES (?, ?, ?, ?)
+         ON CONFLICT(idempotency_key) DO UPDATE SET
+           evidence_id = excluded.evidence_id,
+           fingerprint = excluded.fingerprint,
+           operation = excluded.operation`,
+      )
+      .run(
+        idempotencyKey,
+        record.evidenceId,
+        record.fingerprint,
+        record.operation,
+      );
+  }
+
+  private failIfForced(): void {
+    if (this.store.failNextSave === "evidence") {
+      this.store.failNextSave = null;
+      throw new EvidenceDomainError(
+        "EVIDENCE_PERSISTENCE_FAILED",
+        "forced_evidence_save_failure",
+      );
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteReviewBundleRepository.ts b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteReviewBundleRepository.ts
new file mode 100644
index 00000000..37d00f67
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteReviewBundleRepository.ts
@@ -0,0 +1,327 @@
+import type { ProductSqliteHandle } from "@/lib/oa/project";
+import { ReviewBundleDomainError } from "../../domain/reviewBundleErrors";
+import { validateReviewBundleShape } from "../../domain/reviewBundleInvariants";
+import type { ReviewBundle } from "../../domain/reviewBundleTypes";
+import type {
+  ReviewBundleIdempotencyRecord,
+  ReviewBundleRepositoryPort,
+} from "../../ports/reviewBundleRepository";
+
+type BundleRow = {
+  review_bundle_id: string;
+  project_id: string;
+  status: string;
+  idempotency_key: string | null;
+  version: number;
+  payload_json: string;
+};
+
+type IdempotencyRow = {
+  idempotency_key: string;
+  review_bundle_id: string;
+  fingerprint: string;
+  operation: string;
+  successor_id: string | null;
+};
+
+function cloneBundle(bundle: ReviewBundle): ReviewBundle {
+  return structuredClone(bundle);
+}
+
+/**
+ * Durable ReviewBundle repository on Product SQLite (M5).
+ * createSuccessorAndMarkSuperseded runs inside productStore.runInTransaction.
+ */
+export class SqliteReviewBundleRepository
+  implements ReviewBundleRepositoryPort
+{
+  constructor(private readonly store: ProductSqliteHandle) {}
+
+  async findById(reviewBundleId: string): Promise<ReviewBundle | null> {
+    const row = this.store.db
+      .prepare(
+        `SELECT review_bundle_id, project_id, status, idempotency_key, version, payload_json
+         FROM oa_review_bundles WHERE review_bundle_id = ?`,
+      )
+      .get(reviewBundleId) as BundleRow | undefined;
+    if (!row) return null;
+    return cloneBundle(JSON.parse(row.payload_json) as ReviewBundle);
+  }
+
+  async findByIdempotencyKey(idempotencyKey: string): Promise<{
+    reviewBundle: ReviewBundle;
+    record: ReviewBundleIdempotencyRecord;
+    successor?: ReviewBundle;
+  } | null> {
+    const row = this.store.db
+      .prepare(
+        `SELECT idempotency_key, review_bundle_id, fingerprint, operation, successor_id
+         FROM oa_review_bundle_idempotency WHERE idempotency_key = ?`,
+      )
+      .get(idempotencyKey) as IdempotencyRow | undefined;
+    if (!row) return null;
+    const reviewBundle = await this.findById(row.review_bundle_id);
+    if (!reviewBundle) return null;
+    const successor = row.successor_id
+      ? ((await this.findById(row.successor_id)) ?? undefined)
+      : undefined;
+    return {
+      reviewBundle,
+      record: {
+        reviewBundleId: row.review_bundle_id,
+        fingerprint: row.fingerprint,
+        operation: row.operation as ReviewBundleIdempotencyRecord["operation"],
+      },
+      successor,
+    };
+  }
+
+  async exists(reviewBundleId: string): Promise<boolean> {
+    const row = this.store.db
+      .prepare(
+        `SELECT 1 AS ok FROM oa_review_bundles WHERE review_bundle_id = ?`,
+      )
+      .get(reviewBundleId) as { ok?: number } | undefined;
+    return row?.ok === 1;
+  }
+
+  async create(
+    bundle: ReviewBundle,
+    record?: ReviewBundleIdempotencyRecord & { successorId?: string },
+  ): Promise<void> {
+    const shape = validateReviewBundleShape(bundle);
+    if (shape) {
+      throw new ReviewBundleDomainError(shape.detailCode, shape.reason);
+    }
+    if (bundle.version !== 1) {
+      throw new ReviewBundleDomainError(
+        "REVIEW_BUNDLE_INVALID",
+        "create_requires_version_1",
+      );
+    }
+    if (await this.exists(bundle.reviewBundleId)) {
+      throw new ReviewBundleDomainError(
+        "REVIEW_BUNDLE_ALREADY_EXISTS",
+        "review_bundle_id_taken",
+      );
+    }
+    this.failIfForced();
+    this.insertBundle(bundle);
+    if (record && bundle.idempotencyKey) {
+      this.upsertIdempotency(bundle.idempotencyKey, record);
+    }
+  }
+
+  async update(
+    bundle: ReviewBundle,
+    expectedVersion: number,
+    record?: ReviewBundleIdempotencyRecord & { successorId?: string },
+  ): Promise<void> {
+    if (bundle.version !== expectedVersion + 1) {
+      throw new ReviewBundleDomainError(
+        "VERSION_CONFLICT",
+        "version_not_monotone",
+        { expectedVersion },
+      );
+    }
+    const shape = validateReviewBundleShape(bundle);
+    if (shape) {
+      throw new ReviewBundleDomainError(shape.detailCode, shape.reason);
+    }
+    this.failIfForced();
+    await this.store.runInTransaction(async () => {
+      const changes = this.updateBundleRowCas(bundle, expectedVersion);
+      if (changes !== 1) {
+        const current = await this.findById(bundle.reviewBundleId);
+        if (!current) {
+          throw new ReviewBundleDomainError(
+            "REVIEW_BUNDLE_NOT_FOUND",
+            "update_missing",
+          );
+        }
+        throw new ReviewBundleDomainError("VERSION_CONFLICT", "occ_mismatch", {
+          expectedVersion,
+          currentVersion: current.version,
+        });
+      }
+      if (record) {
+        const key = bundle.idempotencyKey;
+        if (key) {
+          this.upsertIdempotency(key, record);
+        }
+      }
+    });
+  }
+
+  async createSuccessorAndMarkSuperseded(
+    successor: ReviewBundle,
+    superseded: ReviewBundle,
+    expectedVersion: number,
+    record: ReviewBundleIdempotencyRecord & { successorId: string },
+  ): Promise<void> {
+    const successorShape = validateReviewBundleShape(successor);
+    if (successorShape) {
+      throw new ReviewBundleDomainError(
+        successorShape.detailCode,
+        successorShape.reason,
+      );
+    }
+    const supersededShape = validateReviewBundleShape(superseded);
+    if (supersededShape) {
+      throw new ReviewBundleDomainError(
+        supersededShape.detailCode,
+        supersededShape.reason,
+      );
+    }
+    if (successor.version !== 1) {
+      throw new ReviewBundleDomainError(
+        "REVIEW_BUNDLE_INVALID",
+        "successor_requires_version_1",
+      );
+    }
+    if (superseded.status !== "superseded") {
+      throw new ReviewBundleDomainError(
+        "REVIEW_BUNDLE_INVALID",
+        "source_must_be_superseded",
+      );
+    }
+    if (record.successorId !== successor.reviewBundleId) {
+      throw new ReviewBundleDomainError(
+        "REVIEW_BUNDLE_INVALID",
+        "record_successor_id_mismatch",
+      );
+    }
+    if (successor.reviewBundleId === superseded.reviewBundleId) {
+      throw new ReviewBundleDomainError(
+        "REVIEW_BUNDLE_INVALID",
+        "successor_must_differ_from_source",
+      );
+    }
+    if (superseded.version !== expectedVersion + 1) {
+      throw new ReviewBundleDomainError(
+        "VERSION_CONFLICT",
+        "version_not_monotone",
+        { expectedVersion },
+      );
+    }
+    if (!superseded.idempotencyKey) {
+      throw new ReviewBundleDomainError(
+        "REVIEW_BUNDLE_INVALID",
+        "reopen_idempotency_key_required",
+      );
+    }
+
+    await this.store.runInTransaction(async () => {
+      if (await this.exists(successor.reviewBundleId)) {
+        throw new ReviewBundleDomainError(
+          "REVIEW_BUNDLE_ALREADY_EXISTS",
+          "successor_review_bundle_id_taken",
+        );
+      }
+      this.failIfForced();
+      this.insertBundle(successor);
+      const changes = this.updateBundleRowCas(superseded, expectedVersion);
+      if (changes !== 1) {
+        const current = await this.findById(superseded.reviewBundleId);
+        if (!current) {
+          throw new ReviewBundleDomainError(
+            "REVIEW_BUNDLE_NOT_FOUND",
+            "reopen_source_missing",
+          );
+        }
+        throw new ReviewBundleDomainError("VERSION_CONFLICT", "occ_mismatch", {
+          expectedVersion,
+          currentVersion: current.version,
+        });
+      }
+      this.upsertIdempotency(superseded.idempotencyKey!, record);
+    });
+  }
+
+  private insertBundle(bundle: ReviewBundle): void {
+    const now = bundle.createdAt;
+    const payload = JSON.stringify(cloneBundle(bundle));
+    this.store.db
+      .prepare(
+        `INSERT INTO oa_review_bundles(
+           review_bundle_id, project_id, status, idempotency_key, version,
+           payload_json, created_at, updated_at
+         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
+      )
+      .run(
+        bundle.reviewBundleId,
+        bundle.projectId,
+        bundle.status,
+        bundle.idempotencyKey ?? null,
+        bundle.version,
+        payload,
+        now,
+        now,
+      );
+  }
+
+  /** Atomic CAS update — returns sqlite changes count. */
+  private updateBundleRowCas(
+    bundle: ReviewBundle,
+    expectedVersion: number,
+  ): number {
+    const now = bundle.updatedAt ?? bundle.createdAt;
+    const payload = JSON.stringify(cloneBundle(bundle));
+    const result = this.store.db
+      .prepare(
+        `UPDATE oa_review_bundles SET
+           project_id = ?,
+           status = ?,
+           idempotency_key = ?,
+           version = ?,
+           payload_json = ?,
+           updated_at = ?
+         WHERE review_bundle_id = ? AND version = ?`,
+      )
+      .run(
+        bundle.projectId,
+        bundle.status,
+        bundle.idempotencyKey ?? null,
+        bundle.version,
+        payload,
+        now,
+        bundle.reviewBundleId,
+        expectedVersion,
+      );
+    return Number(result.changes);
+  }
+
+  private upsertIdempotency(
+    idempotencyKey: string,
+    record: ReviewBundleIdempotencyRecord & { successorId?: string },
+  ): void {
+    this.store.db
+      .prepare(
+        `INSERT INTO oa_review_bundle_idempotency(
+           idempotency_key, review_bundle_id, fingerprint, operation, successor_id
+         ) VALUES (?, ?, ?, ?, ?)
+         ON CONFLICT(idempotency_key) DO UPDATE SET
+           review_bundle_id = excluded.review_bundle_id,
+           fingerprint = excluded.fingerprint,
+           operation = excluded.operation,
+           successor_id = excluded.successor_id`,
+      )
+      .run(
+        idempotencyKey,
+        record.reviewBundleId,
+        record.fingerprint,
+        record.operation,
+        record.successorId ?? null,
+      );
+  }
+
+  private failIfForced(): void {
+    if (this.store.failNextSave === "review_bundle") {
+      this.store.failNextSave = null;
+      throw new ReviewBundleDomainError(
+        "REVIEW_BUNDLE_PERSISTENCE_FAILED",
+        "forced_review_bundle_save_failure",
+      );
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts
index 03ea6176..3f394db8 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts
@@ -21,7 +21,7 @@ import type {
   ExecutionAttempt,
   ExecutionAttemptResult,
 } from "../domain/types";
-import type { MemoryExecutionAttemptStore } from "../infrastructure/memoryExecutionAttemptStore";
+import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
 import type { AgentRegistryPort } from "../ports/agentRegistry";
 import type { ExecutionAdapterPort } from "../ports/executionAdapter";
 import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
@@ -43,7 +43,7 @@ export class CancelExecutionAttempt {
     private readonly adapter: ExecutionAdapterPort,
     private readonly clock: ClockPort,
     private readonly audit: ExecutionAttemptAuditPort,
-    private readonly store: MemoryExecutionAttemptStore,
+    private readonly store: ExecutionAttemptTechnicalStorePort,
   ) {}

   async execute(
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts
index be8de584..62267028 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts
@@ -11,7 +11,7 @@ import type {
   ExecutionAttemptResult,
   RecordExecutionFailureRequest,
 } from "../domain/types";
-import type { MemoryExecutionAttemptStore } from "../infrastructure/memoryExecutionAttemptStore";
+import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
 import type { AgentRegistryPort } from "../ports/agentRegistry";
 import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
 import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
@@ -26,7 +26,7 @@ export class RecordExecutionFailure {
     private readonly registry: AgentRegistryPort,
     private readonly clock: ClockPort,
     private readonly audit: ExecutionAttemptAuditPort,
-    private readonly store: MemoryExecutionAttemptStore,
+    private readonly store: ExecutionAttemptTechnicalStorePort,
   ) {}

   async execute(
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
index 175cdc4a..c0d5d0da 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
@@ -16,7 +16,7 @@ import type {
   ExecutionAttemptResult,
   RecordExecutionResultRequest,
 } from "../domain/types";
-import type { MemoryExecutionAttemptStore } from "../infrastructure/memoryExecutionAttemptStore";
+import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
 import type { AgentRegistryPort } from "../ports/agentRegistry";
 import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
 import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
@@ -33,7 +33,7 @@ export class RecordExecutionResult {
     private readonly clock: ClockPort,
     private readonly audit: ExecutionAttemptAuditPort,
     private readonly policy: AttemptPolicy,
-    private readonly store: MemoryExecutionAttemptStore,
+    private readonly store: ExecutionAttemptTechnicalStorePort,
   ) {}

   async execute(
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
index 5bb7b9f6..a0f03b9c 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
@@ -35,7 +35,7 @@ import type {
   SelectExecutionAgentRequest,
   SelectionStrategy,
 } from "../domain/types";
-import type { MemoryExecutionAttemptStore } from "../infrastructure/memoryExecutionAttemptStore";
+import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
 import type { AgentRegistryPort } from "../ports/agentRegistry";
 import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
 import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
@@ -59,7 +59,7 @@ export class SelectExecutionAgent {
     private readonly clock: ClockPort,
     private readonly audit: ExecutionAttemptAuditPort,
     private readonly policy: AttemptPolicy,
-    private readonly store?: MemoryExecutionAttemptStore,
+    private readonly store?: ExecutionAttemptTechnicalStorePort,
   ) {}

   async execute(
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index 9eb798cc..576a400d 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -52,7 +52,7 @@ import type {
   GateDGrant,
 } from "../domain/realLaunchSafety";
 import { isM4BoundedReadOnlyRealAgent } from "../infrastructure/m4BoundedReadOnlyCursorAgent";
-import type { MemoryExecutionAttemptStore } from "../infrastructure/memoryExecutionAttemptStore";
+import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
 import type { AgentRegistryPort } from "../ports/agentRegistry";
 import type { ExecutionAdapterPort } from "../ports/executionAdapter";
 import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
@@ -139,7 +139,7 @@ export class StartExecution {
     private readonly adapter: ExecutionAdapterPort,
     private readonly clock: ClockPort,
     private readonly audit: ExecutionAttemptAuditPort,
-    private readonly store?: MemoryExecutionAttemptStore,
+    private readonly store?: ExecutionAttemptTechnicalStorePort,
     private readonly realLaunchPort?: RealExecutionLaunchPort,
     private readonly safetyJournal?: RealLaunchSafetyJournalPort,
   ) {}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts
index fde1e69e..0600f336 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts
@@ -19,7 +19,7 @@ import type {
   ExecutionAttemptResult,
   TriggerAttemptTimeoutRequest,
 } from "../domain/types";
-import type { MemoryExecutionAttemptStore } from "../infrastructure/memoryExecutionAttemptStore";
+import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
 import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
 import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
 import {
@@ -39,7 +39,7 @@ export class TriggerAttemptTimeout {
     private readonly clock: ClockPort,
     private readonly audit: ExecutionAttemptAuditPort,
     private readonly policy: AttemptPolicy,
-    private readonly store: MemoryExecutionAttemptStore,
+    private readonly store: ExecutionAttemptTechnicalStorePort,
   ) {}

   async execute(
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
index 85ec45b4..2b74f411 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
@@ -46,6 +46,7 @@ export * from "./domain/invariants";
 export * from "./domain/realLaunchSafety";

 export * from "./ports/executionAttemptRepository";
+export * from "./ports/executionAttemptTechnicalStorePort";
 export * from "./ports/agentRegistry";
 export * from "./ports/executionAdapter";
 export * from "./ports/executionAttemptAudit";
@@ -86,6 +87,14 @@ export {

 export { MemoryExecutionAttemptStore } from "./infrastructure/memoryExecutionAttemptStore";
 export { MemoryExecutionAttemptRepository } from "./infrastructure/memoryExecutionAttemptRepository";
+export { SqliteExecutionAttemptRepository } from "./infrastructure/sqlite/sqliteExecutionAttemptRepository";
+export { SqliteExecutionAttemptTechnicalStore } from "./infrastructure/sqlite/sqliteExecutionAttemptTechnicalStore";
+export {
+  createSqliteExecutionAttemptServices,
+  createTestSqliteExecutionAttemptServices,
+  type CreateSqliteExecutionAttemptServicesOptions,
+  type SqliteExecutionAttemptServices,
+} from "./infrastructure/sqlite/createSqliteExecutionAttemptServices";
 export { MemoryAgentRegistry } from "./infrastructure/memoryAgentRegistry";
 export { TestExecutionAdapter } from "./infrastructure/testExecutionAdapter";
 export type {
@@ -169,6 +178,8 @@ import { TestExecutionAdapter } from "./infrastructure/testExecutionAdapter";
 import type { AgentDescriptor } from "./domain/types";
 import type { AgentRegistryPort } from "./ports/agentRegistry";
 import type { ExecutionAttemptAuditPort } from "./ports/executionAttemptAudit";
+import type { ExecutionAttemptRepositoryPort } from "./ports/executionAttemptRepository";
+import type { ExecutionAttemptTechnicalStorePort } from "./ports/executionAttemptTechnicalStorePort";
 import type { RealExecutionLaunchPort } from "./ports/realExecutionLaunchPort";
 import type { RealLaunchSafetyJournalPort } from "./ports/realLaunchSafetyJournalPort";

@@ -196,8 +207,8 @@ export type RealBoundaryWiring = {
 };

 export type ExecutionAttemptServices = {
-  store: MemoryExecutionAttemptStore;
-  attempts: MemoryExecutionAttemptRepository;
+  store: ExecutionAttemptTechnicalStorePort;
+  attempts: ExecutionAttemptRepositoryPort;
   registry: AgentRegistryPort;
   adapter: InjectableExecutionAdapter;
   audit: ExecutionAttemptAuditPort;
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
new file mode 100644
index 00000000..eccb4cd6
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
@@ -0,0 +1,240 @@
+import type { ClockPort } from "@/lib/oa/doctrine";
+import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
+import type {
+  AuthorityResolverPort,
+  DecisionServices,
+} from "@/lib/oa/decision";
+import type { ExecutionContractServices } from "@/lib/oa/execution-contract";
+import type { ProductSqliteHandle } from "@/lib/oa/project";
+import {
+  resolveAttemptPolicy,
+  type AttemptPolicy,
+} from "../../application/attemptPolicy";
+import { CancelExecutionAttempt } from "../../application/cancelExecutionAttempt";
+import { CheckAttemptAuthorization } from "../../application/checkAttemptAuthorization";
+import { ExecutionContractStatusWriter } from "../../application/executionContractStatusWriter";
+import { GetExecutionAttempt } from "../../application/getExecutionAttempt";
+import { ListExecutionAttempts } from "../../application/listExecutionAttempts";
+import { RecordExecutionFailure } from "../../application/recordExecutionFailure";
+import { RecordExecutionResult } from "../../application/recordExecutionResult";
+import { RetryExecutionAttempt } from "../../application/retryExecutionAttempt";
+import { SelectExecutionAgent } from "../../application/selectExecutionAgent";
+import { StartExecution } from "../../application/startExecution";
+import { TriggerAttemptTimeout } from "../../application/triggerAttemptTimeout";
+import type { AgentDescriptor } from "../../domain/types";
+import { MemoryAgentRegistry } from "../memoryAgentRegistry";
+import { NoOpExecutionAdapter } from "../noOpExecutionAdapter";
+import {
+  ConsoleExecutionAttemptAuditJournal,
+  MemoryExecutionAttemptAuditJournal,
+} from "../observability";
+import { TestExecutionAdapter } from "../testExecutionAdapter";
+import type { AgentRegistryPort } from "../../ports/agentRegistry";
+import type { ExecutionAttemptAuditPort } from "../../ports/executionAttemptAudit";
+import type { ExecutionAttemptRepositoryPort } from "../../ports/executionAttemptRepository";
+import type { ExecutionAttemptTechnicalStorePort } from "../../ports/executionAttemptTechnicalStorePort";
+import { SqliteExecutionAttemptRepository } from "./sqliteExecutionAttemptRepository";
+import { SqliteExecutionAttemptTechnicalStore } from "./sqliteExecutionAttemptTechnicalStore";
+
+type InjectableExecutionAdapter = TestExecutionAdapter | NoOpExecutionAdapter;
+
+function isInjectableExecutionAdapter(
+  candidate: unknown,
+): candidate is InjectableExecutionAdapter {
+  return (
+    candidate instanceof TestExecutionAdapter ||
+    candidate instanceof NoOpExecutionAdapter
+  );
+}
+
+export type CreateSqliteExecutionAttemptServicesOptions = {
+  decisionServices: DecisionServices;
+  executionContractServices: ExecutionContractServices;
+  productStore: ProductSqliteHandle;
+  agents?: readonly AgentDescriptor[];
+  registry?: MemoryAgentRegistry;
+  adapter?: InjectableExecutionAdapter;
+  clock?: ClockPort;
+  audit?: ExecutionAttemptAuditPort;
+  policy?: Partial<AttemptPolicy>;
+  authorityResolver?: AuthorityResolverPort;
+};
+
+export type SqliteExecutionAttemptServices = {
+  store: ExecutionAttemptTechnicalStorePort;
+  attempts: ExecutionAttemptRepositoryPort;
+  registry: AgentRegistryPort;
+  adapter: InjectableExecutionAdapter;
+  audit: ExecutionAttemptAuditPort;
+  policy: AttemptPolicy;
+  contractStatusWriter: ExecutionContractStatusWriter;
+  productStore: ProductSqliteHandle;
+  selectExecutionAgent: SelectExecutionAgent;
+  startExecution: StartExecution;
+  cancelExecutionAttempt: CancelExecutionAttempt;
+  recordExecutionResult: RecordExecutionResult;
+  recordExecutionFailure: RecordExecutionFailure;
+  retryExecutionAttempt: RetryExecutionAttempt;
+  triggerAttemptTimeout: TriggerAttemptTimeout;
+  getExecutionAttempt: GetExecutionAttempt;
+  listExecutionAttempts: ListExecutionAttempts;
+  checkAttemptAuthorization: CheckAttemptAuthorization;
+};
+
+/**
+ * Durable ExecutionAttempt services on Product SQLite (M5-A).
+ * Does NOT wire realBoundary / Gate D / REAL launch (M4 REAL-OFF unchanged).
+ */
+export function createSqliteExecutionAttemptServices(
+  options: CreateSqliteExecutionAttemptServicesOptions,
+): SqliteExecutionAttemptServices {
+  if (options.registry && options.agents) {
+    throw new Error("execution_attempt_factory_registry_or_agents_not_both");
+  }
+  const registry =
+    options.registry ?? new MemoryAgentRegistry(options.agents ?? []);
+
+  const adapter = options.adapter ?? new NoOpExecutionAdapter();
+  if (!isInjectableExecutionAdapter(adapter)) {
+    throw new Error("execution_attempt_factory_adapter_not_allowed");
+  }
+
+  const clock = options.clock ?? new SystemClock();
+  const audit = options.audit ?? new ConsoleExecutionAttemptAuditJournal();
+  const authority =
+    options.authorityResolver ?? options.decisionServices.authority;
+  const policy = resolveAttemptPolicy(options.policy);
+
+  const store = new SqliteExecutionAttemptTechnicalStore(options.productStore);
+  const attempts = new SqliteExecutionAttemptRepository(options.productStore);
+
+  const contracts = options.executionContractServices.contracts;
+  const contractStatusWriter = new ExecutionContractStatusWriter(
+    contracts,
+    options.executionContractServices.store,
+    attempts,
+  );
+
+  const selectExecutionAgent = new SelectExecutionAgent(
+    attempts,
+    contracts,
+    options.executionContractServices.checkExecutionAuthorization,
+    options.decisionServices,
+    authority,
+    registry,
+    clock,
+    audit,
+    policy,
+    store,
+  );
+
+  return {
+    store,
+    attempts,
+    registry,
+    adapter,
+    audit,
+    policy,
+    contractStatusWriter,
+    productStore: options.productStore,
+    selectExecutionAgent,
+    startExecution: new StartExecution(
+      attempts,
+      contracts,
+      contractStatusWriter,
+      options.executionContractServices.checkExecutionAuthorization,
+      options.decisionServices,
+      authority,
+      registry,
+      adapter,
+      clock,
+      audit,
+      store,
+    ),
+    cancelExecutionAttempt: new CancelExecutionAttempt(
+      attempts,
+      contracts,
+      contractStatusWriter,
+      authority,
+      registry,
+      adapter,
+      clock,
+      audit,
+      store,
+    ),
+    recordExecutionResult: new RecordExecutionResult(
+      attempts,
+      contracts,
+      contractStatusWriter,
+      registry,
+      clock,
+      audit,
+      policy,
+      store,
+    ),
+    recordExecutionFailure: new RecordExecutionFailure(
+      attempts,
+      contracts,
+      contractStatusWriter,
+      registry,
+      clock,
+      audit,
+      store,
+    ),
+    retryExecutionAttempt: new RetryExecutionAttempt(
+      attempts,
+      contracts,
+      selectExecutionAgent,
+      authority,
+      clock,
+      audit,
+      policy,
+    ),
+    triggerAttemptTimeout: new TriggerAttemptTimeout(
+      attempts,
+      contracts,
+      contractStatusWriter,
+      authority,
+      clock,
+      audit,
+      policy,
+      store,
+    ),
+    getExecutionAttempt: new GetExecutionAttempt(attempts, clock, audit),
+    listExecutionAttempts: new ListExecutionAttempts(attempts, clock, audit),
+    checkAttemptAuthorization: new CheckAttemptAuthorization(
+      attempts,
+      contracts,
+      options.executionContractServices.checkExecutionAuthorization,
+      authority,
+      clock,
+      audit,
+    ),
+  };
+}
+
+export function createTestSqliteExecutionAttemptServices(
+  options: CreateSqliteExecutionAttemptServicesOptions & {
+    audit?: MemoryExecutionAttemptAuditJournal;
+    adapter?: TestExecutionAdapter | NoOpExecutionAdapter;
+    fixedNowIso?: string;
+  },
+): SqliteExecutionAttemptServices & {
+  audit: MemoryExecutionAttemptAuditJournal;
+} {
+  const audit = options.audit ?? new MemoryExecutionAttemptAuditJournal();
+  const clock =
+    options.clock ??
+    (options.fixedNowIso
+      ? new FixedClock(options.fixedNowIso)
+      : new FixedClock("2026-08-15T07:00:00.000Z"));
+  const adapter = options.adapter ?? new TestExecutionAdapter();
+  return createSqliteExecutionAttemptServices({
+    ...options,
+    adapter,
+    clock,
+    audit,
+  }) as SqliteExecutionAttemptServices & {
+    audit: MemoryExecutionAttemptAuditJournal;
+  };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteExecutionAttemptRepository.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteExecutionAttemptRepository.ts
new file mode 100644
index 00000000..027e6b7b
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteExecutionAttemptRepository.ts
@@ -0,0 +1,348 @@
+import type { ProductSqliteHandle } from "@/lib/oa/project";
+import { ExecutionAttemptDomainError } from "../../domain/errors";
+import { isAttemptTerminal, validateAttemptShape } from "../../domain/invariants";
+import type { ExecutionAttempt } from "../../domain/types";
+import type {
+  ActiveIndexDrift,
+  ExecutionAttemptRepositoryPort,
+} from "../../ports/executionAttemptRepository";
+
+type AttemptRow = {
+  attempt_id: string;
+  execution_contract_id: string;
+  status: string;
+  idempotency_key: string;
+  version: number;
+  payload_json: string;
+};
+
+function cloneAttempt(attempt: ExecutionAttempt): ExecutionAttempt {
+  return structuredClone(attempt);
+}
+
+/**
+ * Durable ExecutionAttempt repository on Product SQLite (M5).
+ * Mirrors MemoryExecutionAttemptRepository OCC + active-index semantics.
+ */
+export class SqliteExecutionAttemptRepository
+  implements ExecutionAttemptRepositoryPort
+{
+  constructor(private readonly store: ProductSqliteHandle) {}
+
+  async findById(attemptId: string): Promise<ExecutionAttempt | null> {
+    const row = this.store.db
+      .prepare(
+        `SELECT attempt_id, execution_contract_id, status, idempotency_key,
+                version, payload_json
+         FROM oa_execution_attempts WHERE attempt_id = ?`,
+      )
+      .get(attemptId) as AttemptRow | undefined;
+    if (!row) return null;
+    return cloneAttempt(JSON.parse(row.payload_json) as ExecutionAttempt);
+  }
+
+  async findByIdempotencyKey(
+    idempotencyKey: string,
+  ): Promise<ExecutionAttempt | null> {
+    const row = this.store.db
+      .prepare(
+        `SELECT payload_json FROM oa_execution_attempts WHERE idempotency_key = ?`,
+      )
+      .get(idempotencyKey) as { payload_json?: string } | undefined;
+    if (!row?.payload_json) return null;
+    return cloneAttempt(JSON.parse(row.payload_json) as ExecutionAttempt);
+  }
+
+  async exists(attemptId: string): Promise<boolean> {
+    const row = this.store.db
+      .prepare(`SELECT 1 AS ok FROM oa_execution_attempts WHERE attempt_id = ?`)
+      .get(attemptId) as { ok?: number } | undefined;
+    return row?.ok === 1;
+  }
+
+  async create(attempt: ExecutionAttempt): Promise<void> {
+    const shape = validateAttemptShape(attempt);
+    if (shape) {
+      throw new ExecutionAttemptDomainError(shape.detailCode, shape.reason);
+    }
+    if (attempt.version !== 1) {
+      throw new ExecutionAttemptDomainError(
+        "ATTEMPT_INVALID",
+        "create_requires_version_1",
+      );
+    }
+    if (await this.exists(attempt.attemptId)) {
+      throw new ExecutionAttemptDomainError(
+        "ATTEMPT_ALREADY_EXISTS",
+        "attempt_id_taken",
+      );
+    }
+    const existingKeyOwner = await this.findByIdempotencyKey(
+      attempt.idempotencyKey,
+    );
+    if (
+      existingKeyOwner &&
+      existingKeyOwner.attemptId !== attempt.attemptId
+    ) {
+      throw new ExecutionAttemptDomainError(
+        "ATTEMPT_IDEMPOTENCY_CONFLICT",
+        "idempotency_key_taken",
+      );
+    }
+    this.failIfForced();
+    const now = attempt.createdAt;
+    const payload = JSON.stringify(cloneAttempt(attempt));
+    this.store.db
+      .prepare(
+        `INSERT INTO oa_execution_attempts(
+           attempt_id, execution_contract_id, status, idempotency_key,
+           version, result_recording_count, payload_json, created_at, updated_at
+         ) VALUES (?, ?, ?, ?, ?, 0, ?, ?, ?)`,
+      )
+      .run(
+        attempt.attemptId,
+        attempt.executionContractId,
+        attempt.status,
+        attempt.idempotencyKey,
+        attempt.version,
+        payload,
+        now,
+        now,
+      );
+  }
+
+  async update(
+    attempt: ExecutionAttempt,
+    expectedVersion: number,
+  ): Promise<void> {
+    if (attempt.version !== expectedVersion + 1) {
+      throw new ExecutionAttemptDomainError(
+        "VERSION_CONFLICT",
+        "version_not_monotone",
+        { expectedVersion },
+      );
+    }
+    const shape = validateAttemptShape(attempt);
+    if (shape) {
+      throw new ExecutionAttemptDomainError(shape.detailCode, shape.reason);
+    }
+    this.failIfForced();
+    const now = attempt.updatedAt ?? attempt.completedAt ?? attempt.createdAt;
+    const payload = JSON.stringify(cloneAttempt(attempt));
+    // Atomic CAS: OCC enforced by SQL WHERE version = expectedVersion.
+    const result = this.store.db
+      .prepare(
+        `UPDATE oa_execution_attempts SET
+           execution_contract_id = ?,
+           status = ?,
+           idempotency_key = ?,
+           version = ?,
+           payload_json = ?,
+           updated_at = ?
+         WHERE attempt_id = ? AND version = ?`,
+      )
+      .run(
+        attempt.executionContractId,
+        attempt.status,
+        attempt.idempotencyKey,
+        attempt.version,
+        payload,
+        now,
+        attempt.attemptId,
+        expectedVersion,
+      );
+    if (Number(result.changes) !== 1) {
+      const current = await this.findById(attempt.attemptId);
+      if (!current) {
+        throw new ExecutionAttemptDomainError(
+          "ATTEMPT_NOT_FOUND",
+          "update_missing_attempt",
+        );
+      }
+      throw new ExecutionAttemptDomainError("VERSION_CONFLICT", "occ_mismatch", {
+        expectedVersion,
+        currentVersion: current.version,
+      });
+    }
+  }
+
+  async listByContract(
+    executionContractId: string,
+  ): Promise<ExecutionAttempt[]> {
+    const rows = this.store.db
+      .prepare(
+        `SELECT payload_json FROM oa_execution_attempts
+         WHERE execution_contract_id = ?
+         ORDER BY attempt_id ASC`,
+      )
+      .all(executionContractId) as Array<{ payload_json: string }>;
+    return rows.map((row) =>
+      cloneAttempt(JSON.parse(row.payload_json) as ExecutionAttempt),
+    );
+  }
+
+  async findActiveByContract(
+    executionContractId: string,
+  ): Promise<ExecutionAttempt | null> {
+    const row = this.store.db
+      .prepare(
+        `SELECT attempt_id FROM oa_execution_attempt_active
+         WHERE execution_contract_id = ?`,
+      )
+      .get(executionContractId) as { attempt_id?: string } | undefined;
+    if (!row?.attempt_id) return null;
+    return this.findById(row.attempt_id);
+  }
+
+  async reserveActiveContract(
+    executionContractId: string,
+    attemptId: string,
+  ): Promise<void> {
+    // Atomic insert — never silently replace another attempt's reservation.
+    const result = this.store.db
+      .prepare(
+        `INSERT INTO oa_execution_attempt_active(execution_contract_id, attempt_id)
+         VALUES (?, ?)
+         ON CONFLICT(execution_contract_id) DO NOTHING`,
+      )
+      .run(executionContractId, attemptId);
+    if (Number(result.changes) === 1) {
+      return;
+    }
+    const current = this.store.db
+      .prepare(
+        `SELECT attempt_id FROM oa_execution_attempt_active
+         WHERE execution_contract_id = ?`,
+      )
+      .get(executionContractId) as { attempt_id?: string } | undefined;
+    if (current?.attempt_id === attemptId) {
+      return; // idempotent same attemptId
+    }
+    throw new ExecutionAttemptDomainError(
+      "EXECUTION_ALREADY_ACTIVE",
+      "active_attempt_already_reserved",
+    );
+  }
+
+  async releaseActiveContract(
+    executionContractId: string,
+    attemptId: string,
+  ): Promise<void> {
+    this.store.db
+      .prepare(
+        `DELETE FROM oa_execution_attempt_active
+         WHERE execution_contract_id = ? AND attempt_id = ?`,
+      )
+      .run(executionContractId, attemptId);
+  }
+
+  async rebuildActiveIndex(): Promise<void> {
+    await this.store.runInTransaction(async () => {
+      const rows = this.store.db
+        .prepare(
+          `SELECT payload_json FROM oa_execution_attempts ORDER BY attempt_id ASC`,
+        )
+        .all() as Array<{ payload_json: string }>;
+      const rebuilt = new Map<string, string>();
+      for (const row of rows) {
+        const attempt = JSON.parse(row.payload_json) as ExecutionAttempt;
+        if (isAttemptTerminal(attempt.status)) continue;
+        const existing = rebuilt.get(attempt.executionContractId);
+        if (existing && existing !== attempt.attemptId) {
+          throw new ExecutionAttemptDomainError(
+            "ACTIVE_INDEX_DRIFT",
+            "multiple_active_attempts_for_contract",
+          );
+        }
+        rebuilt.set(attempt.executionContractId, attempt.attemptId);
+      }
+      this.store.db.exec(`DELETE FROM oa_execution_attempt_active`);
+      const insert = this.store.db.prepare(
+        `INSERT INTO oa_execution_attempt_active(execution_contract_id, attempt_id)
+         VALUES (?, ?)`,
+      );
+      for (const [executionContractId, attemptId] of rebuilt) {
+        insert.run(executionContractId, attemptId);
+      }
+    });
+  }
+
+  async detectActiveIndexDrift(): Promise<ActiveIndexDrift[]> {
+    const drifts: ActiveIndexDrift[] = [];
+    const indexed = this.store.db
+      .prepare(
+        `SELECT execution_contract_id, attempt_id FROM oa_execution_attempt_active`,
+      )
+      .all() as Array<{ execution_contract_id: string; attempt_id: string }>;
+
+    for (const row of indexed) {
+      const attempt = await this.findById(row.attempt_id);
+      if (!attempt) {
+        drifts.push({
+          executionContractId: row.execution_contract_id,
+          attemptId: row.attempt_id,
+          reason: "indexed_attempt_missing",
+        });
+        continue;
+      }
+      if (isAttemptTerminal(attempt.status)) {
+        drifts.push({
+          executionContractId: row.execution_contract_id,
+          attemptId: row.attempt_id,
+          reason: "indexed_attempt_terminal",
+        });
+      }
+    }
+
+    const allRows = this.store.db
+      .prepare(`SELECT payload_json FROM oa_execution_attempts`)
+      .all() as Array<{ payload_json: string }>;
+    const seenActive = new Map<string, string>();
+    const activeIndex = new Map(
+      indexed.map((r) => [r.execution_contract_id, r.attempt_id] as const),
+    );
+
+    for (const row of allRows) {
+      const attempt = JSON.parse(row.payload_json) as ExecutionAttempt;
+      if (isAttemptTerminal(attempt.status)) continue;
+      const previous = seenActive.get(attempt.executionContractId);
+      if (previous && previous !== attempt.attemptId) {
+        drifts.push({
+          executionContractId: attempt.executionContractId,
+          attemptId: attempt.attemptId,
+          reason: "multiple_active_attempts",
+        });
+      }
+      seenActive.set(attempt.executionContractId, attempt.attemptId);
+      const indexedId = activeIndex.get(attempt.executionContractId);
+      if (indexedId !== attempt.attemptId) {
+        drifts.push({
+          executionContractId: attempt.executionContractId,
+          attemptId: attempt.attemptId,
+          reason: "active_attempt_not_indexed",
+        });
+      }
+    }
+    return drifts;
+  }
+
+  async assertActiveIndexConsistent(): Promise<void> {
+    const drifts = await this.detectActiveIndexDrift();
+    if (drifts.length > 0) {
+      throw new ExecutionAttemptDomainError(
+        "ACTIVE_INDEX_DRIFT",
+        `drift_${drifts[0].reason}`,
+      );
+    }
+  }
+
+  private failIfForced(): void {
+    if (this.store.failNextSave === "attempt") {
+      this.store.failNextSave = null;
+      throw new ExecutionAttemptDomainError(
+        "EXECUTION_PERSISTENCE_FAILED",
+        "forced_execution_attempt_save_failure",
+      );
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteExecutionAttemptTechnicalStore.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteExecutionAttemptTechnicalStore.ts
new file mode 100644
index 00000000..3341a2d1
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteExecutionAttemptTechnicalStore.ts
@@ -0,0 +1,49 @@
+import type { ProductSqliteHandle } from "@/lib/oa/project";
+import type { ExecutionAttemptTechnicalStorePort } from "../../ports/executionAttemptTechnicalStorePort";
+
+/**
+ * Durable Map-like facade for result-recording budget.
+ * Persists to oa_execution_attempt_result_budget (side table).
+ */
+class SqliteResultRecordingAttemptsMap {
+  constructor(private readonly store: ProductSqliteHandle) {}
+
+  get(attemptId: string): number | undefined {
+    const row = this.store.db
+      .prepare(
+        `SELECT count FROM oa_execution_attempt_result_budget WHERE attempt_id = ?`,
+      )
+      .get(attemptId) as { count?: number } | undefined;
+    return typeof row?.count === "number" ? row.count : undefined;
+  }
+
+  set(attemptId: string, count: number): this {
+    this.store.db
+      .prepare(
+        `INSERT INTO oa_execution_attempt_result_budget(attempt_id, count)
+         VALUES (?, ?)
+         ON CONFLICT(attempt_id) DO UPDATE SET count = excluded.count`,
+      )
+      .run(attemptId, count);
+    return this;
+  }
+}
+
+/**
+ * Technical Attempt store over Product SQLite — shares UoW with contracts/LPS.
+ */
+export class SqliteExecutionAttemptTechnicalStore
+  implements ExecutionAttemptTechnicalStorePort
+{
+  readonly resultRecordingAttempts: SqliteResultRecordingAttemptsMap;
+
+  constructor(private readonly productStore: ProductSqliteHandle) {
+    this.resultRecordingAttempts = new SqliteResultRecordingAttemptsMap(
+      productStore,
+    );
+  }
+
+  async runInTransaction<T>(fn: () => Promise<T>): Promise<T> {
+    return this.productStore.runInTransaction(fn);
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/executionAttemptTechnicalStorePort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/executionAttemptTechnicalStorePort.ts
new file mode 100644
index 00000000..4bd4ea00
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/executionAttemptTechnicalStorePort.ts
@@ -0,0 +1,21 @@
+/**
+ * Technical store surface used by Attempt use-cases:
+ * - transactional unit of work
+ * - durable/process-local result-recording budget (RTA5-06)
+ *
+ * MemoryExecutionAttemptStore satisfies this structurally.
+ * SQLite backs resultRecordingAttempts via oa_execution_attempt_result_budget.
+ */
+export interface ExecutionAttemptTechnicalStorePort {
+  /**
+   * attemptId → bounded RecordExecutionResult attempts.
+   * Only get/set are required by application code; Map satisfies this.
+   */
+  resultRecordingAttempts: {
+    get(key: string): number | undefined;
+    set(key: string, value: number): unknown;
+  };
+  runInTransaction<T>(fn: () => Promise<T>): Promise<T>;
+  /** Test hook — force next Attempt persist to throw (Memory path). */
+  failNextSave?: boolean;
+}
diff --git a/projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts b/projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts
index d15101fb..8b019b71 100644
--- a/projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts
+++ b/projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts
@@ -266,6 +266,18 @@ export class AppendLivingProjectStateVersion {
               : current.decisionIds
                 ? [...current.decisionIds]
                 : [],
+          evidenceIds:
+            request.evidenceIds !== undefined
+              ? [...request.evidenceIds]
+              : current.evidenceIds
+                ? [...current.evidenceIds]
+                : [],
+          reviewBundleIds:
+            request.reviewBundleIds !== undefined
+              ? [...request.reviewBundleIds]
+              : current.reviewBundleIds
+                ? [...current.reviewBundleIds]
+                : [],
           createdAt: timestamp,
           createdBy: structuredClone(request.createdBy),
           correlationId,
diff --git a/projects/sfia-studio/app/lib/oa/project/domain/types.ts b/projects/sfia-studio/app/lib/oa/project/domain/types.ts
index 4caed793..b3f1951a 100644
--- a/projects/sfia-studio/app/lib/oa/project/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/project/domain/types.ts
@@ -125,6 +125,16 @@ export type AppendLivingProjectStateRequest = {
    * forward from the current LPS snapshot (same pattern as epistemicItemIds).
    */
   decisionIds?: string[];
+  /**
+   * Optional evidence id linkage (M5-B W1). When omitted, carried forward
+   * from the current LPS snapshot.
+   */
+  evidenceIds?: string[];
+  /**
+   * Optional review-bundle id linkage (M5-B W1). When omitted, carried
+   * forward from the current LPS snapshot.
+   */
+  reviewBundleIds?: string[];
 };

 /** Modeled ErrorRecord codes applicable to Project/LPS (M-OA). */
diff --git a/projects/sfia-studio/app/lib/oa/project/index.ts b/projects/sfia-studio/app/lib/oa/project/index.ts
index f42706f7..133a5da2 100644
--- a/projects/sfia-studio/app/lib/oa/project/index.ts
+++ b/projects/sfia-studio/app/lib/oa/project/index.ts
@@ -35,6 +35,7 @@ export {
   PRODUCT_SCHEMA_VERSION,
   PRODUCT_SCHEMA_VERSION_M1,
   PRODUCT_SCHEMA_VERSION_M2,
+  PRODUCT_SCHEMA_VERSION_M3,
 } from "./infrastructure/sqlite/db";
 export type { ProductSqliteHandle } from "./infrastructure/sqlite/productSqliteHandle";
 export { SqliteProductStore } from "./infrastructure/sqlite/sqliteProductStore";
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
index 54190ad2..b11b5ffd 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
@@ -2,7 +2,8 @@ import { DatabaseSync } from "node:sqlite";

 export const PRODUCT_SCHEMA_VERSION_M1 = "m1-0.1.0" as const;
 export const PRODUCT_SCHEMA_VERSION_M2 = "m2-0.1.0" as const;
-export const PRODUCT_SCHEMA_VERSION = "m3-0.1.0" as const;
+export const PRODUCT_SCHEMA_VERSION_M3 = "m3-0.1.0" as const;
+export const PRODUCT_SCHEMA_VERSION = "m5-0.1.0" as const;

 const BASE_SCHEMA_SQL = `
 PRAGMA foreign_keys = ON;
@@ -122,6 +123,78 @@ CREATE INDEX IF NOT EXISTS idx_oa_execution_contracts_idempotency
   ON oa_execution_contracts(idempotency_key);
 `;

+const M5_ATTEMPT_EVIDENCE_SCHEMA_SQL = `
+CREATE TABLE IF NOT EXISTS oa_execution_attempts (
+  attempt_id TEXT PRIMARY KEY NOT NULL,
+  execution_contract_id TEXT NOT NULL,
+  status TEXT NOT NULL,
+  idempotency_key TEXT NOT NULL UNIQUE,
+  version INTEGER NOT NULL,
+  result_recording_count INTEGER NOT NULL DEFAULT 0,
+  payload_json TEXT NOT NULL,
+  created_at TEXT NOT NULL,
+  updated_at TEXT
+);
+
+CREATE INDEX IF NOT EXISTS idx_oa_execution_attempts_contract
+  ON oa_execution_attempts(execution_contract_id, attempt_id);
+
+CREATE TABLE IF NOT EXISTS oa_execution_attempt_active (
+  execution_contract_id TEXT PRIMARY KEY NOT NULL,
+  attempt_id TEXT NOT NULL
+);
+
+CREATE TABLE IF NOT EXISTS oa_execution_attempt_result_budget (
+  attempt_id TEXT PRIMARY KEY NOT NULL,
+  count INTEGER NOT NULL
+);
+
+CREATE TABLE IF NOT EXISTS oa_evidence (
+  evidence_id TEXT PRIMARY KEY NOT NULL,
+  project_id TEXT,
+  status TEXT NOT NULL,
+  idempotency_key TEXT UNIQUE,
+  version INTEGER NOT NULL,
+  payload_json TEXT NOT NULL,
+  created_at TEXT NOT NULL,
+  updated_at TEXT
+);
+
+CREATE INDEX IF NOT EXISTS idx_oa_evidence_project
+  ON oa_evidence(project_id, created_at);
+
+CREATE TABLE IF NOT EXISTS oa_evidence_idempotency (
+  idempotency_key TEXT PRIMARY KEY NOT NULL,
+  evidence_id TEXT NOT NULL,
+  fingerprint TEXT NOT NULL,
+  operation TEXT NOT NULL,
+  FOREIGN KEY (evidence_id) REFERENCES oa_evidence(evidence_id)
+);
+
+CREATE TABLE IF NOT EXISTS oa_review_bundles (
+  review_bundle_id TEXT PRIMARY KEY NOT NULL,
+  project_id TEXT NOT NULL,
+  status TEXT NOT NULL,
+  idempotency_key TEXT UNIQUE,
+  version INTEGER NOT NULL,
+  payload_json TEXT NOT NULL,
+  created_at TEXT NOT NULL,
+  updated_at TEXT
+);
+
+CREATE INDEX IF NOT EXISTS idx_oa_review_bundles_project
+  ON oa_review_bundles(project_id, created_at);
+
+CREATE TABLE IF NOT EXISTS oa_review_bundle_idempotency (
+  idempotency_key TEXT PRIMARY KEY NOT NULL,
+  review_bundle_id TEXT NOT NULL,
+  fingerprint TEXT NOT NULL,
+  operation TEXT NOT NULL,
+  successor_id TEXT,
+  FOREIGN KEY (review_bundle_id) REFERENCES oa_review_bundles(review_bundle_id)
+);
+`;
+
 function readSchemaVersion(db: DatabaseSync): string | null {
   const row = db
     .prepare("SELECT value FROM schema_meta WHERE key = ?")
@@ -159,8 +232,12 @@ function applyM3(db: DatabaseSync): void {
   db.exec(M3_DECISION_CONTRACT_SCHEMA_SQL);
 }

+function applyM5(db: DatabaseSync): void {
+  db.exec(M5_ATTEMPT_EVIDENCE_SCHEMA_SQL);
+}
+
 /**
- * Open Product SQLite with additive M1→M2→M3 migration.
+ * Open Product SQLite with additive M1→M2→M3→M5 migration.
  * Fail closed on unknown/future schema versions.
  */
 export function openProductSqlite(dbPath: string): DatabaseSync {
@@ -172,13 +249,19 @@ export function openProductSqlite(dbPath: string): DatabaseSync {
   if (version === null || version === PRODUCT_SCHEMA_VERSION_M1) {
     applyM2(db);
     applyM3(db);
+    applyM5(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION_M2) {
     applyM3(db);
+    applyM5(db);
+    setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
+  } else if (version === PRODUCT_SCHEMA_VERSION_M3) {
+    applyM5(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION) {
     applyM2(db);
     applyM3(db);
+    applyM5(db);
   } else {
     try {
       db.close();
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
index a91f6cc3..102fafc0 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
@@ -2,10 +2,20 @@ import type { DatabaseSync } from "node:sqlite";
 import type { ProjectPersistenceUnitOfWorkPort } from "../../ports/projectPersistenceUnitOfWorkPort";

 /**
- * Shared Product SQLite handle for Project + Cycle + Decision + Contract (M3).
+ * Shared Product SQLite handle for Project + Cycle + Decision + Contract +
+ * Attempt/Evidence/ReviewBundle (M5).
  * Downstream adapters depend on this shape — not on SqliteProductStore class.
  */
 export type ProductSqliteHandle = ProjectPersistenceUnitOfWorkPort & {
   readonly db: DatabaseSync;
-  failNextSave?: "project" | "lps" | "cycle" | "decision" | "contract" | null;
+  failNextSave?:
+    | "project"
+    | "lps"
+    | "cycle"
+    | "decision"
+    | "contract"
+    | "attempt"
+    | "evidence"
+    | "review_bundle"
+    | null;
 };
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts
index 45c5e609..47348033 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts
@@ -13,7 +13,8 @@ type TransactionContext = {
 };

 /**
- * SQLite product UnitOfWork for Project/LPS (M1) + Cycle (M2) + Decision/Contract (M3).
+ * SQLite product UnitOfWork for Project/LPS (M1) + Cycle (M2) + Decision/Contract (M3)
+ * + Attempt/Evidence/ReviewBundle (M5).
  * Isolated file — not D1 / OPS1 / FinOps. Single Product DB authority.
  *
  * Nested reentrance: same async chain (AsyncLocalStorage) reuses the open
@@ -31,8 +32,16 @@ export class SqliteProductStore
   readonly dbPath: string;

   /** Test hook — force next save to throw (atomicity tests). */
-  failNextSave: "project" | "lps" | "cycle" | "decision" | "contract" | null =
-    null;
+  failNextSave:
+    | "project"
+    | "lps"
+    | "cycle"
+    | "decision"
+    | "contract"
+    | "attempt"
+    | "evidence"
+    | "review_bundle"
+    | null = null;

   private queue: Promise<void> = Promise.resolve();
   private readonly txLocal = new AsyncLocalStorage<TransactionContext>();
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
index dc1a9b64..516058f4 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
@@ -2,22 +2,23 @@ import "./serverGuard";

 /**
  * D-V2-05 runtime disclosures — always attached to runtime results.
- * M3: Project/LPS + CycleInstance + HumanDecision + ExecutionContract Product SQLite
- * restart-safe; conversation/proposal/attempt/evidence remain process-local.
+ * M3–M5: Project/LPS/Cycle/Decision/Contract + Attempt/Evidence/ReviewBundle Product SQLite
+ * restart-safe on Product path; conversation/proposal remain process-local;
+ * Claims/Maturity/Confirmation remain Memory (out of minimal M5).
  * Not a product-ready / v3-ADOPTED / Cursor REAL / Gate D claim surface.
  */
 export interface RuntimeDisclosures {
   readonly runtimeMode: "LOCAL_PROCESS";
-  /** Partial: Project/LPS/Cycle/Decision/Contract M3 durable; other stacks process-local. */
+  /** Partial: Product SQLite durable for OA M1–M5 aggregates; conversation/proposal/Claims Memory remain process-local. */
   readonly persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE";
   readonly agentExecution: "DISABLED";
   readonly iam: "NOT_SELECTED";
   readonly productPersistence: "SQLITE_OA_PRODUCT_STORE";
   readonly delivery: "NOT_AUTHORIZED";
   readonly cutover: "NOT_AUTHORIZED";
-  /** True because conversation/proposal/attempt/evidence remain volatile. */
+  /** True because conversation/proposal (and Claims/Maturity Memory) remain volatile. */
   readonly localDataVolatile: true;
-  /** True for non-M3 OA state; Project/LPS/Cycle/Decision/Contract survive restart. */
+  /** True for non-durable stacks; Product Project/LPS/Cycle/Decision/Contract/Attempt/Evidence/RB survive restart. */
   readonly restartMayLoseState: true;
   readonly projectLpsRestartSafe: true;
   readonly cycleInstanceRestartSafe: true;
@@ -29,8 +30,10 @@ export interface RuntimeDisclosures {
 export const RUNTIME_DISCLOSURE_MESSAGES: readonly string[] = Object.freeze([
   "Mode local process-bound: the runtime lives in a single Node process.",
   "Project/LPS + CycleInstance + HumanDecision + ExecutionContract Product persistence uses an isolated node:sqlite store (G0-B / M1 / M2 / M3).",
-  "Conversation, Proposal F2, Attempt, and Evidence remain process-local and may be lost on restart.",
-  "Trajectory/Epistemic Memory remain process-local (out of M3 durability).",
+  "ExecutionAttempt, Evidence, ReviewBundle, and LPS evidence/RB links persist in Product SQLite (M5) on the Product path.",
+  "Conversation and Proposal F2 remain process-local and may be lost on restart.",
+  "ClaimEvaluation / MaturityAssessment / Confirmation remain Memory (out of minimal M5).",
+  "Trajectory/Epistemic Memory remain process-local (out of M3/M5 durability).",
   "Local single-user Morris authority is TEMPORARY WITH EXIT (server-owned; client claims ignored).",
   "Cursor PREPARE-only projection — executionAllowed=false, cursorReal=false, Gate D NOT_CONSUMED.",
   "IAM is not configured.",
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index 2c366c1f..c8a60fc9 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -33,11 +33,13 @@ import {
 } from "@/lib/oa/execution-contract";
 import {
   createInMemoryExecutionAttemptServices,
+  createSqliteExecutionAttemptServices,
   type ExecutionAttemptServices,
   type TestExecutionAdapter,
 } from "@/lib/oa/execution-attempt";
 import {
   createInMemoryEvidenceReviewServices,
+  createSqliteEvidenceReviewServices,
   type EvidenceReviewServices,
 } from "@/lib/oa/evidence-review";
 import type { ProjectServices } from "@/lib/oa/project";
@@ -98,6 +100,11 @@ export type RuntimeOaStack = {
   readonly evidenceReviewServices: EvidenceReviewServices;
   /** Explicit TestExecutionAdapter — never silent NoOp. */
   readonly fixtureAdapter: TestExecutionAdapter;
+  /**
+   * True when OA Attempt/Evidence/ReviewBundle/LPS path uses Product SQLite.
+   * Distinguishes persistence durability from fixture execution mode.
+   */
+  readonly productDurablePath: boolean;
 };

 function resolveAudit(
@@ -174,22 +181,45 @@ function wireOaStack(
   // EXPLICIT TestExecutionAdapter — never omit (factory default is NoOp).
   // M4 REAL-OFF default: do NOT wire realBoundary / SFIA_STUDIO_CURSOR_REAL here.
   // Opt-in REAL composition is explicit (journal + RealExecutionLaunchPort); no Fake defaults.
+  // M5-A: when Product SQLite is present, Attempt + Evidence/RB are durable;
+  // Claim/Maturity remain Memory; technical journal / Gate D unchanged.
   const fixtureAdapter = createF3TestExecutionAdapter();
   const fixtureAgent = createF3FixtureAgentDescriptor(clock.nowIso());
-  const executionAttemptServices = createInMemoryExecutionAttemptServices({
-    decisionServices,
-    executionContractServices,
-    agents: [fixtureAgent],
-    adapter: fixtureAdapter,
-    clock,
-    authorityResolver,
-    policy: { defaultMaxRetriesBudget: 0 },
-  });
+  const executionAttemptServices = productSqlite
+    ? createSqliteExecutionAttemptServices({
+        decisionServices,
+        executionContractServices,
+        productStore: productSqlite,
+        agents: [fixtureAgent],
+        adapter: fixtureAdapter,
+        clock,
+        authorityResolver,
+        policy: { defaultMaxRetriesBudget: 0 },
+      })
+    : createInMemoryExecutionAttemptServices({
+        decisionServices,
+        executionContractServices,
+        agents: [fixtureAgent],
+        adapter: fixtureAdapter,
+        clock,
+        authorityResolver,
+        policy: { defaultMaxRetriesBudget: 0 },
+      });

-  const evidenceReviewServices = createInMemoryEvidenceReviewServices({
-    clock,
-    attemptReader: createAttemptReaderBridge(executionAttemptServices.attempts),
-  });
+  const evidenceReviewServices = productSqlite
+    ? createSqliteEvidenceReviewServices({
+        productStore: productSqlite,
+        clock,
+        attemptReader: createAttemptReaderBridge(
+          executionAttemptServices.attempts,
+        ),
+      })
+    : createInMemoryEvidenceReviewServices({
+        clock,
+        attemptReader: createAttemptReaderBridge(
+          executionAttemptServices.attempts,
+        ),
+      });

   return Object.freeze({
     projectServices,
@@ -202,6 +232,7 @@ function wireOaStack(
     executionAttemptServices,
     evidenceReviewServices,
     fixtureAdapter,
+    productDurablePath: productSqlite !== null,
   });
 }
