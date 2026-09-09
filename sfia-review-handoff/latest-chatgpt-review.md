# SFIA Studio Review Pack — FULL

| Champ | Valeur |
| --- | --- |
| **Timestamp** | 2026-09-09 22:19:48 CEST |
| **Cycle ID** | `SFIA-STUDIO-GREENFIELD-CURRENT-RECOMMENDATION-TO-CANDIDATE-TRAJECTORY-BRIDGE-01` |
| **Typologie** | 8 — Delivery / implémentation · EVOL · CRITICAL |
| **GO Morris consommé** | `GO MORRIS — GREENFIELD CURRENT RECOMMENDATION → CANDIDATE PROJECT TRAJECTORY BRIDGE — DELIVERY` |
| **Décision structurelle** | D-RB-BOOT-01 / Option B2 |
| **Parent / LIVE-proven anchor** | `0b9a7370f04de9f1b6ebb3aca84d1dd6f15541ee` |
| **Candidate** | `3d986d042dacdfae873f07467eee1a20fae1f6d6` |
| **ZERO NEW REAL** | OUI |
| **Verdict** | GREENFIELD CURRENT RECOMMENDATION → CANDIDATE PROJECT TRAJECTORY BRIDGE — DETERMINISTIC CANDIDATE READY FOR CHATGPT CRITICAL REVIEW |

---

## 1. Local Git Truth — BEFORE

| Check | Observed |
| --- | --- |
| worktree | `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310` |
| branch | `delivery/sfia-studio-product-proof-qual-to-governed-cycle` |
| HEAD (anchor) | `0b9a7370f04de9f1b6ebb3aca84d1dd6f15541ee` |
| parent of anchor | `f70dc8ae9c25b237654a6db9ec44a875880afdde` |
| origin/main | `a9f6c310a0826d0e5bd6f7264603382a86564db1` |
| dirty Product | NONE (`.tmp-sfia-review/*` only) |
| amend 0b9a7370 | **NO** |

## 2. Local Git Truth — AFTER

| Check | Observed |
| --- | --- |
| new SHA | `3d986d042dacdfae873f07467eee1a20fae1f6d6` |
| parent | `0b9a7370f04de9f1b6ebb3aca84d1dd6f15541ee` (= LIVE-proven exact) |
| Product push | NONE |
| message | `feat(sfia-studio): bridge lifecycle recommendation to candidate trajectory` |

```
9 files changed, 1561 insertions(+), 3 deletions(-)
```

---

## 3. Sources

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
- `projects/sfia-studio/sfia-v3-framing/32-living-project-state-and-dynamic-trajectory.md`
- `projects/sfia-studio/sfia-v3-framing/33-epistemology-provenance-and-contradiction-model.md`
- Review Handoff LIVE (`e4f6cc4c` / LIVE BOUNDARY PROVEN on `0b9a7370`)

---

## 4. Convergence qualification

| Item | Value |
| --- | --- |
| V3 capabilities served | V3-F02 LPS · V3-F04 epistemology · V3-F06 ProjectTrajectory · V3-F09 governed trajectory evolution |
| Entry evidence | LIVE BOUNDARY PROVEN: fresh Project → CURRENT NEXT_CYCLE LR · traj=0 · cycle=0 · HD=0 · START=none |
| Gap closed | CURRENT NEXT_CYCLE LR → durable inspectable **candidate** ProjectTrajectory |
| Out of scope | HumanDecision · promotion · CycleInstance · START · EC · Cursor REAL · model call |

---

## 5. Architecture KEEP / ADAPT

**KEEP**

- Lifecycle Recommendation EpistemicItem + `selectCurrentLifecycleRecommendations`
- Exact trajectory presence (`hasAnyByProjectId` / `resolveTrajectoryBootstrapPresence`)
- `assessGreenfieldPreTrajectoryBootstrapEligibility` / `validateCanonicalTargetCycleTypeId`
- `CreateInitialTrajectory` (status=candidate, LPS OCC)
- `cycleTypeCatalog`
- LifecycleSurface / TrajectorySurface composition
- W2 qualificationInputs / proposeTrajectoryOptions **unchanged**

**ADAPT**

- New application seam `prepareCandidateTrajectoryFromCurrentRecommendation`
- New durable read `readPreCycleCandidateTrajectory`
- Thin server actions `preCycleCandidateTrajectoryActions.ts`
- Lifecycle CTA → « Préparer la trajectoire » invokes bridge (projectId only)
- TrajectorySurface pre-cycle candidate block + hide W2 propose when no active cycle + candidate present
- Scroll target fixed to `w2-trajectory-panel`

**W2 disposition**

W2 remains KEEP for active-cycle contexts. Bridge does **not** invent a fake CycleInstance, does not weaken `CYCLE_NOT_QUALIFIED`, does not call `w2ProposeTrajectoryOptions`. Pre-cycle UI gates the W2 CTA away when a durable candidate exists without active cycle.

---

## 6. Bridge contract

### Trigger

LifecycleSurface `lifecycle-trajectory-escalate` when `primaryNextCycleRecommendation` is CURRENT → label **Préparer la trajectoire** → `projectAssistantPrepareCandidateTrajectoryAction({ projectId })` → refresh → scroll TrajectorySurface.

### Server-owned CURRENT LR resolution

1. Fresh LPS / cycles / decisions / epistemic / presence reads
2. `selectCurrentLifecycleRecommendations`
3. `selectExactCurrentNextCycleRecommendation` — **exactly one** CURRENT NEXT_CYCLE or fail-closed (`TRJ_BRIDGE_NO_CURRENT_NEXT_CYCLE` / `TRJ_BRIDGE_AMBIGUOUS_CURRENT_NEXT_CYCLE`)
4. Reuse `assessGreenfieldPreTrajectoryBootstrapEligibility` (presence=never, 0 cycles, null active, no current HD, canonical target type)
5. Build **exactly one** pending step from catalog label for `targetCycleTypeId`
6. `CreateInitialTrajectory.execute` with `status=candidate`, `createdBy=NORA_LIFECYCLE_RECOMMENDATION_ACTOR`, `expectedLpsVersion` from freshly read LPS
7. Return provenance: recommendationId, semanticKey, targetCycleTypeId, trajectoryId, version, correlationId

### Ambiguity

Multiple CURRENT NEXT_CYCLE → fail-closed; never pick by array order.

### Canonical cycle

`validateCanonicalTargetCycleTypeId` + `getCycleTypeById` — active catalog only (e.g. `cyc:framing` → Cadrage).

### Candidate content

v1 · status candidate · one step · label = catalog · state pending · no invented future cycles · no `decidedByDecisionRef`.

### Currentness transition

Before: LR CURRENT (traj=none). After CreateInitial LPS/traj material facts change → source LR **honestly STALE**. Not rewritten.

### OCC / idempotence

- presence must be `never` before create
- LPS expectedVersion OCC via CreateInitialTrajectory
- second call → history present and/or LR no longer CURRENT → no second candidate

### Durable read

`readPreCycleCandidateTrajectory` uses LPS trajectoryVersion pointer + `findByProjectAndVersion`; never coerces candidate to current (`findCurrentByProjectId` remains null).

---

## 7. Product files changed

1. `prepareCandidateTrajectoryFromCurrentRecommendation.ts` (**NEW**)
2. `preCycleCandidateTrajectoryActions.ts` (**NEW**)
3. `candidateTrajectoryBridge.d0.test.ts` (**NEW** BAR-TRJ-01…24)
4. `lifecycleRecommendation/index.ts`
5. `LifecycleSurface.tsx`
6. `TrajectorySurface.tsx`
7. `ProjectWorkspacePage.tsx`
8. `trajectorySurface.ui.test.tsx`
9. `importBoundaries.test.ts`

---

## 8. BAR-TRJ-01…24

Covered in `candidateTrajectoryBridge.d0.test.ts` (+ structural UI/W2 assertions):

| BAR | Result |
| --- | --- |
| 01–05,22–24 | PASS prepare / single step / counts / not current / LPS via CreateInitial / no decision ref / one cycle only / no HD-Cycle-START |
| 06 | PASS LR becomes STALE |
| 07 | PASS no CURRENT refuse |
| 08 | PASS ambiguous fail-closed |
| 09 | PASS non-canonical refuse |
| 10/15 | PASS double invocation ≤1 candidate |
| 11 | PASS cycle present refuse |
| 12 | PASS HD incompatible refuse |
| 13 | PASS trajectory UNKNOWN refuse |
| 14 | PASS LPS OCC fail / no durable candidate |
| 16 | PASS durable rehydrate read |
| 17/18/20/21 | PASS CTA wiring / business copy / W2 not weakened / no model in bridge |
| 19 | PASS W2 active-cycle gate regression |

Focused: **13/13 PASS**
Full Vitest: **3364 passed / 135 skipped**
typecheck PASS · lint PASS · build PASS · `git diff --check` PASS

---

## 9. ZERO NEW REAL / authority

- No OpenAI / Agents / CKC cognition in bridge
- No env mutation
- No live Product DB mutation in tests (temp sqlite)
- CycleInstance = 0 · HumanDecision = 0 · START/EC = none on success path
- Recommendation remains Epistemic Recommendation; candidate has no decidedByDecisionRef
- Actor = Nora lifecycle non-authoritative (`actor:nora`, authorityLevel N1) — not Pilote decision actor

---

## 10. Reserves

| Reserve | Status |
| --- | --- |
| RESERVE-QA-MOCK-01 | OPEN / untouched |
| LIVE bridge | OPEN — needs future GO Morris |
| Candidate → HumanDecision | **NEXT CAPABILITY** (out of scope) |
| Trajectory promotion / START | NOT proven |
| R2 / runtime v3 ADOPTED / PR READY | NO |

---

## 11. Anti-claims

Does **not** mean: HumanDecision bridge · validated trajectory · START · Task App delivered · END-TO-END REAL · R2 closed · PR ready · v3 ADOPTED.

**Claim maximum:** CURRENT NEXT_CYCLE LR can be transformed into a durable single-step candidate ProjectTrajectory; inspectable/restart-safe; non-authoritative; ZERO NEW REAL.

---

## 12. Next capability

**candidate ProjectTrajectory → HumanDecision explicite Pilote** (new GO required).

---

## 13. EXPLOITABLE MODIFIED CONTENT

Unified diff `0b9a7370f04de9f1b6ebb3aca84d1dd6f15541ee..3d986d042dacdfae873f07467eee1a20fae1f6d6` for all Product files in this Delivery:

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index 186481db..68f9682c 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -48,6 +48,17 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
   }),
 }));

+vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
+  projectAssistantReadPreCycleCandidateTrajectoryAction: vi
+    .fn()
+    .mockResolvedValue({
+      ok: true,
+      candidate: null,
+      activeCycleInstanceId: "cycinst:test-active",
+    }),
+  projectAssistantPrepareCandidateTrajectoryAction: vi.fn(),
+}));
+
 afterEach(() => {
   cleanup();
 });
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryBridge.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryBridge.d0.test.ts
new file mode 100644
index 00000000..b6e9aaa9
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryBridge.d0.test.ts
@@ -0,0 +1,764 @@
+/** @vitest-environment node */
+/**
+ * GREENFIELD CURRENT LR → CANDIDATE PROJECT TRAJECTORY BRIDGE — BAR-TRJ-01…24
+ * ZERO NEW REAL. D-RB-BOOT-01 / Option B2.
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, describe, expect, it, vi } from "vitest";
+import {
+  materializeLifecycleRecommendationFromStructuredOutput,
+  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
+  prepareCandidateTrajectoryFromCurrentRecommendation,
+  readPreCycleCandidateTrajectory,
+  resolveTrajectoryBootstrapPresence,
+  selectCurrentLifecycleRecommendations,
+  selectExactCurrentNextCycleRecommendation,
+  buildSingleRecommendedCycleStep,
+  rebuildBasisRefsForRecommendation,
+  deriveLifecycleRecommendationCurrentness,
+} from "@/lib/oa/cycle";
+import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
+import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
+import type { ActorReference } from "@/lib/oa/project";
+import {
+  getRuntimeApplicationService,
+  resetRuntimeApplicationServiceForTests,
+} from "@/lib/vertical-slice-runtime";
+import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
+import { getCycleTypeById } from "@/lib/oa/cycle/domain/cycleTypeCatalog";
+import { isCurrentHumanDecisionStatus } from "@/lib/oa/cycle/application/assessFinalization";
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
+const tempDirs: string[] = [];
+
+afterEach(() => {
+  resetRuntimeApplicationServiceForTests();
+  vi.restoreAllMocks();
+  while (tempDirs.length) {
+    const d = tempDirs.pop();
+    if (d) fs.rmSync(d, { recursive: true, force: true });
+  }
+});
+
+function tempDbPath(name: string): string {
+  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "trj-bridge-"));
+  tempDirs.push(dir);
+  return path.join(dir, name);
+}
+
+class FixedIdSource implements LocalProjectIdSource {
+  private n = 0;
+  constructor(private readonly prefix: string) {}
+  nextProjectId(): string {
+    this.n += 1;
+    return `prj:${this.prefix}-${this.n}`;
+  }
+  nextLpsVersionId(): string {
+    return `lps:${this.prefix}-${this.n}`;
+  }
+  nextCorrelationId(): string {
+    return `cor:${this.prefix}-${this.n}`;
+  }
+}
+
+function nextCycleLr(targetCycleTypeId: string, statement: string) {
+  return {
+    intent: "NEXT_CYCLE" as const,
+    statement,
+    subjectCycleInstanceId: null,
+    targetCycleInstanceId: null,
+    targetCycleTypeId,
+    rationale: "Prochain travail gouverné supportable.",
+    authority: "none" as const,
+    isHumanDecision: false as const,
+  };
+}
+
+function productTurn(
+  lr: ReturnType<typeof nextCycleLr>,
+  narrative = "Narrative Cadrage recommandée.",
+) {
+  return {
+    narrative,
+    preCycleRoutingAssessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
+    lifecycleRecommendation: lr,
+  };
+}
+
+async function bootFreshProject(suffix: string) {
+  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
+  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
+  resetRuntimeApplicationServiceForTests();
+  const runtime = getRuntimeApplicationService({
+    registryRoot: FIXTURES,
+    schemasRoot: SCHEMAS,
+    nowIso: "2026-09-09T20:00:00.000Z",
+    idSource: new FixedIdSource(`trj-${suffix}`),
+    auditMode: "noop",
+    productDbPath: tempDbPath(`${suffix}.sqlite`),
+  });
+  if (!runtime.oa) throw new Error("oa missing");
+  const created = await runtime.createProject({
+    name: `Fresh bridge ${suffix}`,
+    objective: "gestion de tâches",
+    context: "application web personnelle",
+    criticality: "STANDARD",
+    constraints: [],
+    shortReference: `TRJ${suffix}`,
+    idempotencyKey: `idem:trj-${suffix}`,
+  });
+  if (!created.ok) throw new Error("create failed");
+  return { runtime, projectId: created.projectId };
+}
+
+async function materializeFreshNext(
+  runtime: Awaited<ReturnType<typeof bootFreshProject>>["runtime"],
+  projectId: string,
+  lr: ReturnType<typeof nextCycleLr>,
+) {
+  const oa = runtime.oa!;
+  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
+  const decisions = await oa.decisionServices.decisions.listByProject(projectId);
+  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
+    projectId,
+  });
+  if (!lps.ok) throw new Error("lps missing");
+  const presence = await resolveTrajectoryBootstrapPresence(
+    oa.cycleServices.trajectories,
+    projectId,
+  );
+  const project = await oa.projectServices.getProject.execute({ projectId });
+  const doctrine =
+    (project.ok ? project.project.doctrinePackageRef : null) ?? VALID_PIN;
+  const result = await materializeLifecycleRecommendationFromStructuredOutput({
+    projectId,
+    structuredOutput: productTurn(lr),
+    updateEpistemicState: oa.cycleServices.updateEpistemicState,
+    facts: {
+      cycles,
+      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
+      lpsVersion: lps.livingProjectState.version,
+      doctrinePackageId: doctrine.doctrinePackageId,
+      doctrinePackageVersion: doctrine.version,
+      doctrinePackageDigest: doctrine.digest,
+      trajectory: null,
+      trajectoryBootstrapPresence: presence,
+      decisions,
+      evidence: [],
+      epistemicItems: await oa.cycleServices.epistemic.listByProject(projectId),
+    },
+    producedAt: "2026-09-09T20:01:00.000Z",
+    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
+  });
+  return result;
+}
+
+function expectMaterialized(
+  mat: Awaited<ReturnType<typeof materializeFreshNext>>,
+) {
+  expect(mat.recommendationAttempted).toBe(true);
+  expect(mat.materialization?.ok).toBe(true);
+  if (!mat.materialization || !mat.materialization.ok) {
+    throw new Error(
+      `materialization failed: ${mat.materialization && !mat.materialization.ok ? mat.materialization.code : "null"}`,
+    );
+  }
+  return mat.materialization;
+}
+
+function bridgeDeps(
+  runtime: Awaited<ReturnType<typeof bootFreshProject>>["runtime"],
+  extras?: {
+    newTrajectoryId?: () => string;
+    newStepId?: (k: string) => string;
+    correlationId?: string;
+  },
+) {
+  const oa = runtime.oa!;
+  return {
+    trajectories: oa.cycleServices.trajectories,
+    createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
+    listEpistemicByProject: (projectId: string) =>
+      oa.cycleServices.epistemic.listByProject(projectId),
+    listCyclesByProject: (projectId: string) =>
+      oa.cycleServices.cycles.listByProject(projectId),
+    listDecisionsByProject: (projectId: string) =>
+      oa.decisionServices.decisions.listByProject(projectId),
+    listEvidenceByProject: (projectId: string) =>
+      oa.evidenceReviewServices.repository.listByProject(projectId),
+    getCurrentLps: (projectId: string) =>
+      oa.projectServices.getCurrentLivingProjectState.execute({ projectId }),
+    getProjectDoctrinePin: async (projectId: string) => {
+      const project = await oa.projectServices.getProject.execute({ projectId });
+      if (!project.ok) return null;
+      const pin = project.project.doctrinePackageRef;
+      return pin
+        ? {
+            doctrinePackageId: pin.doctrinePackageId,
+            version: pin.version,
+            digest: pin.digest,
+          }
+        : null;
+    },
+    ...extras,
+  };
+}
+
+describe("GREENFIELD LR → CANDIDATE TRAJECTORY BRIDGE — BAR-TRJ", () => {
+  it("BAR-TRJ-01/02/03/04/05/22/23/24 — prepare succeeds with single catalog step, no authority", async () => {
+    const { runtime, projectId } = await bootFreshProject("01");
+    const mat = await materializeFreshNext(
+      runtime,
+      projectId,
+      nextCycleLr("cyc:framing", "Envisager un Cadrage."),
+    );
+    const materialized = expectMaterialized(mat);
+
+    const lpsBefore = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
+      { projectId },
+    );
+    expect(lpsBefore.ok).toBe(true);
+    const versionBefore = lpsBefore.ok ? lpsBefore.livingProjectState.version : 0;
+
+    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
+      projectId,
+      deps: bridgeDeps(runtime, {
+        newTrajectoryId: () => "trj:lr-bridge-fixed01",
+        newStepId: () => "stp:cadrage-fixed01",
+        correlationId: "cor:trj-bridge-01",
+      }),
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) return;
+
+    expect(prepared.recommendationId).toBe(materialized.item.epistemicItemId);
+    expect(prepared.targetCycleTypeId).toBe("cyc:framing");
+    expect(prepared.catalogLabel).toBe(getCycleTypeById("cyc:framing")!.label);
+    expect(prepared.trajectoryId).toBe("trj:lr-bridge-fixed01");
+    expect(prepared.trajectoryVersion).toBe(1);
+    expect(prepared.correlationId).toBe("cor:trj-bridge-01");
+
+    const traj = await runtime.oa!.cycleServices.trajectories.findByProjectAndVersion(
+      projectId,
+      1,
+    );
+    expect(traj).not.toBeNull();
+    expect(traj!.status).toBe("candidate");
+    expect(traj!.version).toBe(1);
+    expect(traj!.steps).toHaveLength(1);
+    expect(traj!.steps[0]!.label).toBe("Cadrage");
+    expect(traj!.steps[0]!.state).toBe("pending");
+    expect(traj!.steps[0]!.stepId).toBe("stp:cadrage-fixed01");
+    expect(traj!.decidedByDecisionRef).toBeUndefined();
+
+    expect(
+      await runtime.oa!.cycleServices.trajectories.findCurrentByProjectId(
+        projectId,
+      ),
+    ).toBeNull();
+
+    expect(
+      (await runtime.oa!.cycleServices.cycles.listByProject(projectId)).length,
+    ).toBe(0);
+    expect(
+      (await runtime.oa!.decisionServices.decisions.listByProject(projectId))
+        .length,
+    ).toBe(0);
+    const lpsAfter = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
+      { projectId },
+    );
+    expect(lpsAfter.ok).toBe(true);
+    if (lpsAfter.ok) {
+      expect(lpsAfter.livingProjectState.version).toBeGreaterThan(versionBefore);
+      expect(lpsAfter.livingProjectState.trajectoryId).toBe(
+        "trj:lr-bridge-fixed01",
+      );
+      expect(lpsAfter.livingProjectState.trajectoryVersion).toBe(1);
+      expect(lpsAfter.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
+    }
+  });
+
+  it("BAR-TRJ-06 — source CURRENT LR becomes STALE after candidate material basis change", async () => {
+    const { runtime, projectId } = await bootFreshProject("06");
+    const mat = await materializeFreshNext(
+      runtime,
+      projectId,
+      nextCycleLr("cyc:framing", "Envisager un Cadrage."),
+    );
+    const materialized = expectMaterialized(mat);
+
+    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
+      projectId,
+      deps: bridgeDeps(runtime, {
+        newTrajectoryId: () => "trj:lr-bridge-fixed06",
+        newStepId: () => "stp:cadrage-fixed06",
+      }),
+    });
+    expect(prepared.ok).toBe(true);
+
+    const oa = runtime.oa!;
+    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId,
+    });
+    expect(lps.ok).toBe(true);
+    if (!lps.ok) return;
+    const traj = await oa.cycleServices.trajectories.findByProjectAndVersion(
+      projectId,
+      1,
+    );
+    expect(traj).not.toBeNull();
+    const project = await oa.projectServices.getProject.execute({ projectId });
+    const doctrine =
+      (project.ok ? project.project.doctrinePackageRef : null) ?? VALID_PIN;
+
+    const current = selectCurrentLifecycleRecommendations({
+      items: await oa.cycleServices.epistemic.listByProject(projectId),
+      cycles: await oa.cycleServices.cycles.listByProject(projectId),
+      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
+      lpsVersion: lps.livingProjectState.version,
+      doctrinePackageId: doctrine.doctrinePackageId,
+      doctrinePackageVersion: doctrine.version,
+      doctrinePackageDigest: doctrine.digest,
+      trajectory: traj,
+      decisions: await oa.decisionServices.decisions.listByProject(projectId),
+      evidence: [],
+    });
+    expect(current.filter((r) => r.intent === "NEXT_CYCLE")).toHaveLength(0);
+
+    const rebuilt = rebuildBasisRefsForRecommendation({
+      item: materialized.item,
+      facts: {
+        cycles: [],
+        lpsActiveCycleInstanceId: null,
+        lpsVersion: lps.livingProjectState.version,
+        doctrinePackageId: doctrine.doctrinePackageId,
+        doctrinePackageVersion: doctrine.version,
+        doctrinePackageDigest: doctrine.digest,
+        trajectory: traj,
+        decisions: [],
+        evidence: [],
+      },
+    });
+    expect(rebuilt).not.toBeNull();
+    expect(
+      deriveLifecycleRecommendationCurrentness({
+        item: materialized.item,
+        currentBasisRefs: rebuilt!,
+      }),
+    ).toBe("STALE");
+  });
+
+  it("BAR-TRJ-07 — no CURRENT NEXT_CYCLE refuses without mutation", async () => {
+    const { runtime, projectId } = await bootFreshProject("07");
+    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
+      projectId,
+      deps: bridgeDeps(runtime),
+    });
+    expect(prepared.ok).toBe(false);
+    if (prepared.ok) return;
+    expect(prepared.code).toBe("TRJ_BRIDGE_NO_CURRENT_NEXT_CYCLE");
+    expect(
+      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
+    ).toBe(false);
+  });
+
+  it("BAR-TRJ-08 — multiple CURRENT NEXT_CYCLE fail-closed", async () => {
+    const { runtime, projectId } = await bootFreshProject("08");
+    expectMaterialized(
+      await materializeFreshNext(
+        runtime,
+        projectId,
+        nextCycleLr("cyc:framing", "Cadrage A."),
+      ),
+    );
+    // Ambiguity unit: selector refuses >1 CURRENT NEXT_CYCLE without picking by order.
+    const envelopes = [
+      {
+        recommendationId: "epi:lr:a",
+        projectId,
+        intent: "NEXT_CYCLE" as const,
+        subjectCycleInstanceId: null,
+        targetCycleInstanceId: null,
+        targetCycleTypeId: "cyc:framing",
+        producer: "nora" as const,
+        producedAt: "2026-09-09T20:01:00.000Z",
+        statement: "A",
+        basisFingerprint: "fp-a",
+        basisRefs: { projectId },
+        semanticKey: "key-a",
+        authority: "none" as const,
+        isHumanDecision: false as const,
+        doesNotActivateCycle: true as const,
+        doesNotFinalize: true as const,
+        doesNotCreateHumanDecision: true as const,
+        epistemicStatus: "active" as const,
+        supersedesRecommendationId: null,
+        derivedCurrentness: "CURRENT" as const,
+      },
+      {
+        recommendationId: "epi:lr:b",
+        projectId,
+        intent: "NEXT_CYCLE" as const,
+        subjectCycleInstanceId: null,
+        targetCycleInstanceId: null,
+        targetCycleTypeId: "cyc:architecture",
+        producer: "nora" as const,
+        producedAt: "2026-09-09T20:02:00.000Z",
+        statement: "B",
+        basisFingerprint: "fp-b",
+        basisRefs: { projectId },
+        semanticKey: "key-b",
+        authority: "none" as const,
+        isHumanDecision: false as const,
+        doesNotActivateCycle: true as const,
+        doesNotFinalize: true as const,
+        doesNotCreateHumanDecision: true as const,
+        epistemicStatus: "active" as const,
+        supersedesRecommendationId: null,
+        derivedCurrentness: "CURRENT" as const,
+      },
+    ];
+    const selected = selectExactCurrentNextCycleRecommendation(envelopes);
+    expect(selected.ok).toBe(false);
+    if (!selected.ok) {
+      expect(selected.code).toBe("TRJ_BRIDGE_AMBIGUOUS_CURRENT_NEXT_CYCLE");
+    }
+  });
+
+  it("BAR-TRJ-09 — non-canonical targetCycleTypeId fail-closed", async () => {
+    const step = buildSingleRecommendedCycleStep({
+      targetCycleTypeId: "Cadrage",
+      stepId: "stp:bad",
+    });
+    expect(step.ok).toBe(false);
+    if (!step.ok) {
+      expect(step.code).toMatch(/LR_TARGET_CYCLE_TYPE/);
+    }
+  });
+
+  it("BAR-TRJ-10/15 — existing candidate refuses second prepare; double invocation ≤1", async () => {
+    const { runtime, projectId } = await bootFreshProject("10");
+    expectMaterialized(
+      await materializeFreshNext(
+        runtime,
+        projectId,
+        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
+      ),
+    );
+    const first = await prepareCandidateTrajectoryFromCurrentRecommendation({
+      projectId,
+      deps: bridgeDeps(runtime, {
+        newTrajectoryId: () => "trj:lr-bridge-fixed10a",
+        newStepId: () => "stp:cadrage-fixed10a",
+      }),
+    });
+    expect(first.ok).toBe(true);
+
+    const second = await prepareCandidateTrajectoryFromCurrentRecommendation({
+      projectId,
+      deps: bridgeDeps(runtime, {
+        newTrajectoryId: () => "trj:lr-bridge-fixed10b",
+        newStepId: () => "stp:cadrage-fixed10b",
+      }),
+    });
+    expect(second.ok).toBe(false);
+    if (!second.ok) {
+      expect(
+        second.code === "TRJ_BRIDGE_TRAJECTORY_HISTORY_PRESENT" ||
+          second.code === "TRJ_BRIDGE_NO_CURRENT_NEXT_CYCLE",
+      ).toBe(true);
+    }
+    const v2 = await runtime.oa!.cycleServices.trajectories.findByProjectAndVersion(
+      projectId,
+      2,
+    );
+    expect(v2).toBeNull();
+    expect(
+      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
+    ).toBe(true);
+  });
+
+  it("BAR-TRJ-11 — CycleInstance present refuses bridge", async () => {
+    const { runtime, projectId } = await bootFreshProject("11");
+    expectMaterialized(
+      await materializeFreshNext(
+        runtime,
+        projectId,
+        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
+      ),
+    );
+    const deps = bridgeDeps(runtime);
+    deps.listCyclesByProject = async () =>
+      [
+        {
+          cycleInstanceId: "cycinst:trj-bridge-11",
+          projectId,
+          cycleTypeId: "cyc:framing",
+          status: "active",
+        },
+      ] as never;
+    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
+      projectId,
+      deps,
+    });
+    expect(prepared.ok).toBe(false);
+    if (!prepared.ok) {
+      expect(
+        prepared.code === "LR_BOOTSTRAP_CYCLE_PRESENT" ||
+          prepared.code === "TRJ_BRIDGE_NO_CURRENT_NEXT_CYCLE",
+      ).toBe(true);
+    }
+    expect(
+      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
+    ).toBe(false);
+  });
+
+  it("BAR-TRJ-12 — incompatible current HumanDecision refuses", async () => {
+    const { runtime, projectId } = await bootFreshProject("12");
+    expectMaterialized(
+      await materializeFreshNext(
+        runtime,
+        projectId,
+        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
+      ),
+    );
+    expect(isCurrentHumanDecisionStatus("accepted")).toBe(true);
+    const deps = bridgeDeps(runtime);
+    deps.listDecisionsByProject = async () =>
+      [
+        {
+          decisionId: "hd:fake-12",
+          projectId,
+          status: "accepted",
+          subject: "trajectory",
+          authority: "N2",
+          actor: {
+            actorId: "actor:pilote",
+            role: "project_owner",
+            authorityLevel: "N2",
+          },
+          selectedOptionId: "opt:x",
+          effectiveAt: "2026-09-09T20:00:00.000Z",
+        },
+      ] as never;
+    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
+      projectId,
+      deps,
+    });
+    expect(prepared.ok).toBe(false);
+    if (!prepared.ok) {
+      // HD either makes LR STALE (basis fingerprint) or fails greenfield eligibility.
+      expect(
+        prepared.code === "LR_BOOTSTRAP_HD_PRESENT" ||
+          prepared.code === "TRJ_BRIDGE_NO_CURRENT_NEXT_CYCLE",
+      ).toBe(true);
+    }
+    expect(
+      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
+    ).toBe(false);
+  });
+
+  it("BAR-TRJ-13 — trajectory read UNKNOWN fail-closed", async () => {
+    const { runtime, projectId } = await bootFreshProject("13");
+    expectMaterialized(
+      await materializeFreshNext(
+        runtime,
+        projectId,
+        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
+      ),
+    );
+    const deps = bridgeDeps(runtime);
+    deps.trajectories = {
+      ...deps.trajectories,
+      findCurrentByProjectId: async () => {
+        throw new Error("boom");
+      },
+      hasAnyByProjectId: async () => {
+        throw new Error("boom");
+      },
+    };
+    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
+      projectId,
+      deps,
+    });
+    expect(prepared.ok).toBe(false);
+    if (!prepared.ok) {
+      expect(prepared.code).toBe("TRJ_BRIDGE_TRAJECTORY_UNKNOWN");
+    }
+  });
+
+  it("BAR-TRJ-14 — LPS OCC failure leaves no second trajectory", async () => {
+    const { runtime, projectId } = await bootFreshProject("14");
+    expectMaterialized(
+      await materializeFreshNext(
+        runtime,
+        projectId,
+        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
+      ),
+    );
+    const deps = bridgeDeps(runtime, {
+      newTrajectoryId: () => "trj:lr-bridge-occ14",
+      newStepId: () => "stp:cadrage-occ14",
+    });
+    const originalCreate = deps.createInitialTrajectory;
+    deps.createInitialTrajectory = {
+      execute: async (request) =>
+        originalCreate.execute({
+          ...request,
+          expectedLpsVersion: request.expectedLpsVersion + 99,
+        }),
+    } as typeof originalCreate;
+    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
+      projectId,
+      deps,
+    });
+    expect(prepared.ok).toBe(false);
+    if (!prepared.ok) {
+      expect(prepared.code).toBe("LPS_VERSION_CONFLICT");
+    }
+    expect(
+      await runtime.oa!.cycleServices.trajectories.findCurrentByProjectId(
+        projectId,
+      ),
+    ).toBeNull();
+    expect(
+      (await runtime.oa!.decisionServices.decisions.listByProject(projectId))
+        .length,
+    ).toBe(0);
+    // UoW rollback: no durable candidate row.
+    expect(
+      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
+    ).toBe(false);
+  });
+
+  it("BAR-TRJ-16 — durable candidate read survives fresh rehydrate", async () => {
+    const { runtime, projectId } = await bootFreshProject("16");
+    expectMaterialized(
+      await materializeFreshNext(
+        runtime,
+        projectId,
+        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
+      ),
+    );
+    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
+      projectId,
+      deps: bridgeDeps(runtime, {
+        newTrajectoryId: () => "trj:lr-bridge-fixed16",
+        newStepId: () => "stp:cadrage-fixed16",
+      }),
+    });
+    expect(prepared.ok).toBe(true);
+
+    const read1 = await readPreCycleCandidateTrajectory({
+      projectId,
+      trajectories: runtime.oa!.cycleServices.trajectories,
+      getCurrentLps: (pid) =>
+        runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
+          projectId: pid,
+        }),
+      listCyclesByProject: (pid) =>
+        runtime.oa!.cycleServices.cycles.listByProject(pid),
+    });
+    expect(read1.ok).toBe(true);
+    if (!read1.ok || !read1.candidate) throw new Error("missing candidate");
+    expect(read1.candidate.status).toBe("candidate");
+    expect(read1.candidate.isEffectiveCurrent).toBe(false);
+    expect(read1.candidate.catalogLabel).toBe("Cadrage");
+    expect(read1.candidate.steps).toHaveLength(1);
+
+    // Fresh reader path (no React) — second call equals first.
+    const read2 = await readPreCycleCandidateTrajectory({
+      projectId,
+      trajectories: runtime.oa!.cycleServices.trajectories,
+      getCurrentLps: (pid) =>
+        runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
+          projectId: pid,
+        }),
+      listCyclesByProject: (pid) =>
+        runtime.oa!.cycleServices.cycles.listByProject(pid),
+    });
+    expect(read2.ok && read2.candidate?.trajectoryId).toBe(
+      read1.candidate.trajectoryId,
+    );
+  });
+
+  it("BAR-TRJ-17/18/20/21 — CTA bridge wiring + no W2 weaken + no model call (structural)", () => {
+    const lifecycleSrc = fs.readFileSync(
+      path.resolve(
+        APP_ROOT,
+        "features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx",
+      ),
+      "utf8",
+    );
+    expect(lifecycleSrc).toContain("Préparer la trajectoire");
+    expect(lifecycleSrc).toContain(
+      "projectAssistantPrepareCandidateTrajectoryAction",
+    );
+    expect(lifecycleSrc).toContain("preCycleCandidateTrajectoryActions");
+    expect(lifecycleSrc).toContain("projectId");
+    expect(lifecycleSrc).not.toMatch(
+      /prepareCandidateTrajectoryFromCurrentRecommendation\(\{[\s\S]*targetCycleTypeId:/,
+    );
+
+    const trajSrc = fs.readFileSync(
+      path.resolve(
+        APP_ROOT,
+        "features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx",
+      ),
+      "utf8",
+    );
+    expect(trajSrc).toContain("Trajectoire proposée");
+    expect(trajSrc).toContain("en attente de décision");
+    expect(trajSrc).toContain("pre-cycle-candidate-trajectory");
+    expect(trajSrc).toContain("activeCycleInstanceId");
+    // Pre-cycle candidate hides W2 propose (gated), does not weaken qualificationInputs.
+    const qualSrc = fs.readFileSync(
+      path.resolve(
+        APP_ROOT,
+        "features/project-assistant/w2/qualificationInputs.ts",
+      ),
+      "utf8",
+    );
+    expect(qualSrc).toContain("CYCLE_NOT_QUALIFIED");
+    expect(qualSrc).toContain("activeCycleInstanceId");
+
+    const bridgeSrc = fs.readFileSync(
+      path.resolve(
+        APP_ROOT,
+        "lib/oa/cycle/application/lifecycleRecommendation/prepareCandidateTrajectoryFromCurrentRecommendation.ts",
+      ),
+      "utf8",
+    );
+    expect(bridgeSrc).not.toMatch(/openai|OpenAI|runNora|Agents/i);
+    expect(bridgeSrc).toContain("createInitialTrajectory.execute");
+    expect(bridgeSrc).toContain("NORA_LIFECYCLE_RECOMMENDATION_ACTOR");
+  });
+
+  it("BAR-TRJ-19 — W2 proposeTrajectoryOptions module still requires active cycle (regression)", () => {
+    const src = fs.readFileSync(
+      path.resolve(
+        APP_ROOT,
+        "features/project-assistant/w2/qualificationInputs.ts",
+      ),
+      "utf8",
+    );
+    expect(src).toMatch(/Aucun cycle qualifié n'est actif/);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 619c4715..4f0e2931 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -89,6 +89,7 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/f3/e2eOptionATerminalAttempt.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f3/e2eOptionATerminalAttempt.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
       "features/project-assistant/mw3AvailableEvidence.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/preCycleCandidateTrajectoryActions.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/actions.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/actions.ts:@/lib/vertical-slice-runtime/liveProjectContext",
       "features/project-assistant/w2/amendExecutionContract.ts:@/lib/vertical-slice-runtime",
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index fba20c82..05b1369f 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -26,6 +26,7 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
     useState<ProjectAssistantRehydrateEvidenceOutcomeSuccess | null>(null);
   const [lpsOpen, setLpsOpen] = useState(false);
   const [recoveryProposeSignal, setRecoveryProposeSignal] = useState(0);
+  const [trajectoryRefreshSignal, setTrajectoryRefreshSignal] = useState(0);
   const conversationRef = useRef<HTMLDivElement | null>(null);
   const refreshInFlight = useRef(false);

@@ -197,10 +198,11 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
                   projectId={projectId}
                   onDurableFactsChanged={() => {
                     void loadProject();
+                    setTrajectoryRefreshSignal((n) => n + 1);
                   }}
                   onEscalateTrajectory={() => {
                     const el = document.querySelector(
-                      "[data-testid='trajectory-surface']",
+                      "[data-testid='w2-trajectory-panel']",
                     );
                     if (el instanceof HTMLElement) {
                       el.scrollIntoView({ behavior: "smooth", block: "start" });
@@ -212,8 +214,10 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
                   projectId={projectId}
                   composition="lps-embedded"
                   recoveryProposeSignal={recoveryProposeSignal}
+                  durableRefreshSignal={trajectoryRefreshSignal}
                   onDurableFactsChanged={() => {
                     void loadProject();
+                    setTrajectoryRefreshSignal((n) => n + 1);
                   }}
                 />
               </div>
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
index 3409d00f..29128d53 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
@@ -5,6 +5,7 @@ import {
   projectAssistantPilotLifecycleAction,
   projectAssistantPilotLifecycleProjection,
 } from "@/features/project-assistant/actions";
+import { projectAssistantPrepareCandidateTrajectoryAction } from "@/features/project-assistant/preCycleCandidateTrajectoryActions";
 import type { PilotLifecycleProjection } from "@/lib/oa/cycle";
 import { SFIA_ASSISTANT_ANSWERED_EVENT } from "@/features/project-assistant/presentationLabels";
 import {
@@ -251,9 +252,38 @@ export function LifecycleSurface({
             type="button"
             className={styles.btnSecondary}
             data-testid="lifecycle-trajectory-escalate"
-            onClick={() => onEscalateTrajectory?.()}
+            disabled={busy !== null}
+            onClick={() => {
+              if (nextRec) {
+                void (async () => {
+                  setBusy("PREPARE_TRAJECTORY");
+                  try {
+                    const result =
+                      await projectAssistantPrepareCandidateTrajectoryAction({
+                        projectId,
+                      });
+                    if (!result.ok) {
+                      setError(
+                        result.message ??
+                          result.code ??
+                          "Préparation de trajectoire refusée.",
+                      );
+                      return;
+                    }
+                    setError(null);
+                    await refresh();
+                    onDurableFactsChanged?.();
+                    onEscalateTrajectory?.();
+                  } finally {
+                    setBusy(null);
+                  }
+                })();
+                return;
+              }
+              onEscalateTrajectory?.();
+            }}
           >
-            Trajectoire
+            {nextRec ? "Préparer la trajectoire" : "Trajectoire"}
           </button>
         ) : null}
       </div>
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 50e19af0..8d4a34bd 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -26,6 +26,7 @@ import {
   w2ProposeTrajectoryOptionsAction,
   w2RehydrateProductOutcomeAction,
 } from "@/features/project-assistant/w2/actions";
+import { projectAssistantReadPreCycleCandidateTrajectoryAction } from "@/features/project-assistant/preCycleCandidateTrajectoryActions";
 import type {
   AmendExecutionContractSuccess,
   ContractInspectionStateDto,
@@ -129,12 +130,15 @@ export function TrajectorySurface({
   projectId,
   onDurableFactsChanged,
   recoveryProposeSignal = 0,
+  durableRefreshSignal = 0,
   composition = "standalone",
 }: {
   projectId: string;
   onDurableFactsChanged?: () => void;
   /** B1 — increment from RecoverySurface requalify to reuse proposeOptions(). */
   recoveryProposeSignal?: number;
+  /** Increment after Lifecycle bridge / durable mutations to rehydrate candidate. */
+  durableRefreshSignal?: number;
   /**
    * H-01 Option A: embed visually in the LPS piloting region.
    * Presentation-only — does not change ProjectTrajectory domain identity.
@@ -143,6 +147,17 @@ export function TrajectorySurface({
 }) {
   const [busy, setBusy] = useState<Busy>(null);
   const [error, setError] = useState<string | null>(null);
+  const [preCycleCandidate, setPreCycleCandidate] = useState<{
+    trajectoryId: string;
+    version: number;
+    status: "candidate";
+    steps: readonly { stepId: string; order: number; label: string; state: string }[];
+    catalogLabel: string | null;
+    targetCycleTypeId: string | null;
+  } | null>(null);
+  const [activeCycleInstanceId, setActiveCycleInstanceId] = useState<
+    string | null
+  >(null);
   const [optionSet, setOptionSet] = useState<TrajectoryOptionSetDto | null>(
     null,
   );
@@ -217,6 +232,29 @@ export function TrajectorySurface({
     onDurableFactsChanged?.();
   }, [projectId, onDurableFactsChanged]);

+  const refreshPreCycleCandidate = useCallback(async () => {
+    const result = await projectAssistantReadPreCycleCandidateTrajectoryAction({
+      projectId,
+    });
+    if (!result.ok) {
+      setPreCycleCandidate(null);
+      setActiveCycleInstanceId(null);
+      return;
+    }
+    setActiveCycleInstanceId(result.activeCycleInstanceId ?? null);
+    setPreCycleCandidate(result.candidate ?? null);
+  }, [projectId]);
+
+  useEffect(() => {
+    void refreshPreCycleCandidate();
+  }, [refreshPreCycleCandidate]);
+
+  useEffect(() => {
+    if (durableRefreshSignal > 0) {
+      void refreshPreCycleCandidate();
+    }
+  }, [durableRefreshSignal, refreshPreCycleCandidate]);
+
   useEffect(() => {
     if (recoveryProposeSignal > 0) {
       void proposeOptions();
@@ -621,6 +659,40 @@ export function TrajectorySurface({
         </p>
       ) : null}

+      {preCycleCandidate && !activeCycleInstanceId ? (
+        <section
+          className={styles.block}
+          aria-labelledby="pre-cycle-candidate-title"
+          data-testid="pre-cycle-candidate-trajectory"
+        >
+          <h3 id="pre-cycle-candidate-title" className={styles.blockTitle}>
+            Trajectoire proposée
+          </h3>
+          <p className={styles.blockNote}>
+            Cycle proposé :{" "}
+            {preCycleCandidate.catalogLabel ??
+              preCycleCandidate.steps[0]?.label ??
+              "—"}
+          </p>
+          <p className={styles.blockNote} data-testid="pre-cycle-candidate-status">
+            Statut : candidate / en attente de décision · Non décidée · Aucun
+            cycle démarré
+          </p>
+          <ul className={styles.optionList} data-testid="pre-cycle-candidate-steps">
+            {preCycleCandidate.steps.map((step) => (
+              <li key={step.stepId} className={styles.option}>
+                <div className={styles.optionHead}>
+                  <span className={styles.optionBadge}>Étape {step.order}</span>
+                  <span className={styles.optionLabel}>{step.label}</span>
+                </div>
+                <p className={styles.optionIntent}>En attente</p>
+              </li>
+            ))}
+          </ul>
+        </section>
+      ) : null}
+
+      {activeCycleInstanceId || !preCycleCandidate ? (
       <div className={styles.actions}>
         <button
           type="button"
@@ -637,6 +709,7 @@ export function TrajectorySurface({
           </span>
         ) : null}
       </div>
+      ) : null}

       {optionSet ? (
         <>
diff --git a/projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts b/projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts
new file mode 100644
index 00000000..7ce30e05
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts
@@ -0,0 +1,153 @@
+"use server";
+
+/**
+ * Greenfield pre-cycle candidate trajectory bridge — thin server actions.
+ * Client may send projectId only. ZERO model calls. No HD / Cycle / START.
+ */
+
+import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
+import {
+  prepareCandidateTrajectoryFromCurrentRecommendation,
+  readPreCycleCandidateTrajectory,
+} from "@/lib/oa/cycle";
+
+export async function projectAssistantPrepareCandidateTrajectoryAction(input: {
+  projectId: string;
+}): Promise<{
+  ok: boolean;
+  code?: string;
+  message?: string;
+  recommendationId?: string;
+  semanticKey?: string;
+  targetCycleTypeId?: string;
+  catalogLabel?: string;
+  trajectoryId?: string;
+  trajectoryVersion?: number;
+  stepId?: string;
+  correlationId?: string;
+  lpsVersionAfter?: number;
+}> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      code: "OA_UNAVAILABLE",
+      message: "Runtime OA indisponible.",
+    };
+  }
+  const oa = runtime.oa;
+  const result = await prepareCandidateTrajectoryFromCurrentRecommendation({
+    projectId: input.projectId,
+    deps: {
+      trajectories: oa.cycleServices.trajectories,
+      createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
+      listEpistemicByProject: (projectId) =>
+        oa.cycleServices.epistemic.listByProject(projectId),
+      listCyclesByProject: (projectId) =>
+        oa.cycleServices.cycles.listByProject(projectId),
+      listDecisionsByProject: (projectId) =>
+        oa.decisionServices.decisions.listByProject(projectId),
+      listEvidenceByProject: (projectId) =>
+        oa.evidenceReviewServices.repository.listByProject(projectId),
+      getCurrentLps: (projectId) =>
+        oa.projectServices.getCurrentLivingProjectState.execute({ projectId }),
+      getProjectDoctrinePin: async (projectId) => {
+        const project = await oa.projectServices.getProject.execute({
+          projectId,
+        });
+        if (!project.ok) return null;
+        const pin = project.project.doctrinePackageRef;
+        return pin
+          ? {
+              doctrinePackageId: pin.doctrinePackageId,
+              version: pin.version,
+              digest: pin.digest,
+            }
+          : null;
+      },
+    },
+  });
+  if (!result.ok) {
+    return {
+      ok: false,
+      code: result.code,
+      message: result.reason,
+      correlationId: result.correlationId,
+    };
+  }
+  return {
+    ok: true,
+    recommendationId: result.recommendationId,
+    semanticKey: result.semanticKey,
+    targetCycleTypeId: result.targetCycleTypeId,
+    catalogLabel: result.catalogLabel,
+    trajectoryId: result.trajectoryId,
+    trajectoryVersion: result.trajectoryVersion,
+    stepId: result.stepId,
+    correlationId: result.correlationId,
+    lpsVersionAfter: result.lpsVersionAfter,
+  };
+}
+
+export async function projectAssistantReadPreCycleCandidateTrajectoryAction(input: {
+  projectId: string;
+}): Promise<{
+  ok: boolean;
+  code?: string;
+  message?: string;
+  candidate?: {
+    trajectoryId: string;
+    version: number;
+    status: "candidate";
+    projectId: string;
+    steps: readonly {
+      stepId: string;
+      order: number;
+      label: string;
+      state: string;
+    }[];
+    catalogLabel: string | null;
+    targetCycleTypeId: string | null;
+    decidedByDecisionRef: null;
+    isEffectiveCurrent: false;
+  } | null;
+  activeCycleInstanceId?: string | null;
+}> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      code: "OA_UNAVAILABLE",
+      message: "Runtime OA indisponible.",
+    };
+  }
+  const oa = runtime.oa;
+  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
+    projectId: input.projectId,
+  });
+  const activeCycleInstanceId = lps.ok
+    ? (lps.livingProjectState.activeCycleInstanceId ?? null)
+    : null;
+
+  const result = await readPreCycleCandidateTrajectory({
+    projectId: input.projectId,
+    trajectories: oa.cycleServices.trajectories,
+    getCurrentLps: (projectId) =>
+      oa.projectServices.getCurrentLivingProjectState.execute({ projectId }),
+    listCyclesByProject: (projectId) =>
+      oa.cycleServices.cycles.listByProject(projectId),
+  });
+  if (!result.ok) {
+    return {
+      ok: false,
+      code: result.code,
+      message: result.reason,
+      activeCycleInstanceId,
+    };
+  }
+  return {
+    ok: true,
+    candidate: result.candidate,
+    activeCycleInstanceId,
+  };
+}
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts
index b96fa119..4e6fe79b 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts
@@ -9,3 +9,4 @@ export * from "./materializeFromProductTurn";
 export * from "./materialReaderContract";
 export * from "./noraActor";
 export * from "./greenfieldLifecycleBootstrap";
+export * from "./prepareCandidateTrajectoryFromCurrentRecommendation";
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/prepareCandidateTrajectoryFromCurrentRecommendation.ts b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/prepareCandidateTrajectoryFromCurrentRecommendation.ts
new file mode 100644
index 00000000..df2ed236
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/prepareCandidateTrajectoryFromCurrentRecommendation.ts
@@ -0,0 +1,521 @@
+/**
+ * Greenfield bridge (D-RB-BOOT-01 / Option B2):
+ * CURRENT NEXT_CYCLE Lifecycle Recommendation → durable candidate ProjectTrajectory.
+ *
+ * Deterministic Product mechanics only — no model call, no HD, no CycleInstance, no START.
+ * Reuses greenfield bootstrap eligibility + CreateInitialTrajectory.
+ */
+import { randomBytes } from "node:crypto";
+import type { HumanDecision } from "@/lib/oa/decision";
+import type { Evidence } from "@/lib/oa/evidence-review";
+import type { ActorReference } from "@/lib/oa/doctrine";
+import {
+  CYCLE_TYPE_CATALOG,
+  getCycleTypeById,
+} from "../../domain/cycleTypeCatalog";
+import type {
+  CycleInstance,
+  EpistemicItem,
+  ProjectTrajectory,
+  TrajectoryStep,
+} from "../../domain/types";
+import type { CreateInitialTrajectory } from "../createInitialTrajectory";
+import type { TrajectoryRepositoryPort } from "../../ports/trajectoryRepository";
+import {
+  assessGreenfieldPreTrajectoryBootstrapEligibility,
+  resolveTrajectoryBootstrapPresence,
+  validateCanonicalTargetCycleTypeId,
+} from "./greenfieldLifecycleBootstrap";
+import {
+  selectCurrentLifecycleRecommendations,
+  type RebuildLifecycleRecommendationBasisFacts,
+} from "./currentness";
+import type { LifecycleRecommendationMaterialDimension } from "./materialReaderContract";
+import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "./noraActor";
+import type { LifecycleRecommendationEnvelope } from "./types";
+
+function newCorId(): string {
+  return `cor:${randomBytes(8).toString("hex")}`;
+}
+
+function newTrajectoryId(): string {
+  return `trj:lr-bridge-${randomBytes(6).toString("hex")}`;
+}
+
+function newStepId(canonicalKey: string): string {
+  const slug = canonicalKey.replace(/[^a-z0-9-]/gi, "").slice(0, 24) || "cycle";
+  return `stp:${slug}-${randomBytes(4).toString("hex")}`;
+}
+
+export type PrepareCandidateTrajectoryDeps = {
+  trajectories: TrajectoryRepositoryPort;
+  createInitialTrajectory: CreateInitialTrajectory;
+  listEpistemicByProject: (projectId: string) => Promise<EpistemicItem[]>;
+  listCyclesByProject: (projectId: string) => Promise<CycleInstance[]>;
+  listDecisionsByProject: (projectId: string) => Promise<HumanDecision[]>;
+  listEvidenceByProject?: (projectId: string) => Promise<Evidence[]>;
+  getCurrentLps: (projectId: string) => Promise<
+    | {
+        ok: true;
+        livingProjectState: {
+          version: number;
+          activeCycleInstanceId?: string | null;
+          trajectoryId?: string | null;
+          trajectoryVersion?: number | null;
+          doctrinePackageRef?: {
+            doctrinePackageId: string;
+            version: string;
+            digest: string;
+          };
+        };
+      }
+    | { ok: false }
+  >;
+  getProjectDoctrinePin?: (projectId: string) => Promise<{
+    doctrinePackageId: string;
+    version: string;
+    digest: string;
+  } | null>;
+  /** Injected for tests — defaults to Nora lifecycle non-authoritative actor. */
+  createdBy?: ActorReference;
+  /** Injected ids for deterministic tests. */
+  newTrajectoryId?: () => string;
+  newStepId?: (canonicalKey: string) => string;
+  correlationId?: string;
+};
+
+export type PrepareCandidateTrajectorySuccess = {
+  ok: true;
+  projectId: string;
+  recommendationId: string;
+  semanticKey: string;
+  targetCycleTypeId: string;
+  catalogLabel: string;
+  trajectoryId: string;
+  trajectoryVersion: number;
+  stepId: string;
+  correlationId: string;
+  lpsVersionAfter: number;
+  sourceDerivedCurrentnessBefore: "CURRENT";
+};
+
+export type PrepareCandidateTrajectoryFailure = {
+  ok: false;
+  code: string;
+  reason: string;
+  correlationId: string;
+};
+
+export type PrepareCandidateTrajectoryResult =
+  | PrepareCandidateTrajectorySuccess
+  | PrepareCandidateTrajectoryFailure;
+
+/**
+ * Resolve exactly one CURRENT NEXT_CYCLE Lifecycle Recommendation from durable truth.
+ * Ambiguity (0 or >1) → fail-closed.
+ */
+export function selectExactCurrentNextCycleRecommendation(
+  current: readonly LifecycleRecommendationEnvelope[],
+):
+  | { ok: true; recommendation: LifecycleRecommendationEnvelope }
+  | { ok: false; code: string; reason: string } {
+  const next = current.filter(
+    (r) =>
+      r.intent === "NEXT_CYCLE" && r.derivedCurrentness === "CURRENT",
+  );
+  if (next.length === 0) {
+    return {
+      ok: false,
+      code: "TRJ_BRIDGE_NO_CURRENT_NEXT_CYCLE",
+      reason: "no_current_next_cycle_lifecycle_recommendation",
+    };
+  }
+  if (next.length > 1) {
+    return {
+      ok: false,
+      code: "TRJ_BRIDGE_AMBIGUOUS_CURRENT_NEXT_CYCLE",
+      reason: "multiple_current_next_cycle_recommendations",
+    };
+  }
+  return { ok: true, recommendation: next[0]! };
+}
+
+export function buildSingleRecommendedCycleStep(input: {
+  targetCycleTypeId: string;
+  stepId: string;
+}):
+  | { ok: true; step: TrajectoryStep; catalogLabel: string; cycleTypeId: string }
+  | { ok: false; code: string; reason: string } {
+  const gate = validateCanonicalTargetCycleTypeId(input.targetCycleTypeId);
+  if (!gate.ok) {
+    return { ok: false, code: gate.code, reason: gate.reason };
+  }
+  const entry = getCycleTypeById(gate.cycleTypeId);
+  if (!entry || entry.lifecycleStatus !== "active") {
+    return {
+      ok: false,
+      code: "LR_TARGET_CYCLE_TYPE_NOT_SELECTABLE",
+      reason: "target_cycle_type_not_selectable",
+    };
+  }
+  return {
+    ok: true,
+    cycleTypeId: entry.cycleTypeId,
+    catalogLabel: entry.label,
+    step: {
+      stepId: input.stepId,
+      order: 1,
+      label: entry.label,
+      state: "pending",
+    },
+  };
+}
+
+/**
+ * Server-owned bridge. Client must supply projectId only.
+ */
+export async function prepareCandidateTrajectoryFromCurrentRecommendation(input: {
+  projectId: string;
+  deps: PrepareCandidateTrajectoryDeps;
+  blockingReservationStatements?: readonly string[];
+  failedMaterialDimensions?: ReadonlySet<LifecycleRecommendationMaterialDimension>;
+}): Promise<PrepareCandidateTrajectoryResult> {
+  const correlationId = input.deps.correlationId ?? newCorId();
+  const fail = (code: string, reason: string): PrepareCandidateTrajectoryFailure => ({
+    ok: false,
+    code,
+    reason,
+    correlationId,
+  });
+
+  const projectId = input.projectId;
+  if (!projectId || !projectId.startsWith("prj:")) {
+    return fail("TRJ_BRIDGE_PROJECT_INVALID", "project_id_invalid");
+  }
+
+  const lpsResult = await input.deps.getCurrentLps(projectId);
+  if (!lpsResult.ok) {
+    return fail("TRJ_BRIDGE_LPS_UNAVAILABLE", "current_lps_unreadable");
+  }
+  const lps = lpsResult.livingProjectState;
+  const expectedLpsVersion = lps.version;
+
+  let epistemicItems: EpistemicItem[];
+  let cycles: CycleInstance[];
+  let decisions: HumanDecision[];
+  let evidence: Evidence[] = [];
+  const failed = new Set<LifecycleRecommendationMaterialDimension>(
+    input.failedMaterialDimensions ?? [],
+  );
+
+  try {
+    epistemicItems = await input.deps.listEpistemicByProject(projectId);
+  } catch {
+    return fail("TRJ_BRIDGE_EPISTEMIC_UNAVAILABLE", "epistemic_reader_failed");
+  }
+  try {
+    cycles = await input.deps.listCyclesByProject(projectId);
+  } catch {
+    return fail("TRJ_BRIDGE_CYCLES_UNAVAILABLE", "cycle_reader_failed");
+  }
+  try {
+    decisions = await input.deps.listDecisionsByProject(projectId);
+  } catch {
+    return fail("TRJ_BRIDGE_DECISIONS_UNAVAILABLE", "decision_reader_failed");
+  }
+  if (input.deps.listEvidenceByProject) {
+    try {
+      evidence = await input.deps.listEvidenceByProject(projectId);
+    } catch {
+      failed.add("evidence");
+    }
+  }
+
+  const presence = await resolveTrajectoryBootstrapPresence(
+    input.deps.trajectories,
+    projectId,
+  );
+  if (presence.kind === "unknown") {
+    return fail("TRJ_BRIDGE_TRAJECTORY_UNKNOWN", presence.reason);
+  }
+  if (presence.kind !== "never") {
+    return fail(
+      presence.kind === "current"
+        ? "TRJ_BRIDGE_TRAJECTORY_CURRENT_PRESENT"
+        : "TRJ_BRIDGE_TRAJECTORY_HISTORY_PRESENT",
+      presence.kind === "current"
+        ? "current_trajectory_present"
+        : "prior_or_candidate_trajectory_exists",
+    );
+  }
+
+  const doctrinePin =
+    (await input.deps.getProjectDoctrinePin?.(projectId)) ??
+    lps.doctrinePackageRef ??
+    null;
+
+  const facts: RebuildLifecycleRecommendationBasisFacts = {
+    cycles,
+    lpsActiveCycleInstanceId: lps.activeCycleInstanceId ?? null,
+    lpsVersion: lps.version,
+    doctrinePackageId: doctrinePin?.doctrinePackageId ?? null,
+    doctrinePackageVersion: doctrinePin?.version ?? null,
+    doctrinePackageDigest: doctrinePin?.digest ?? null,
+    trajectory: null,
+    decisions,
+    evidence,
+    blockingReservationStatements: input.blockingReservationStatements ?? [],
+  };
+
+  const current = selectCurrentLifecycleRecommendations({
+    items: epistemicItems,
+    ...facts,
+    failedMaterialDimensions: failed,
+  });
+
+  const selected = selectExactCurrentNextCycleRecommendation(current);
+  if (!selected.ok) {
+    return fail(selected.code, selected.reason);
+  }
+  const recommendation = selected.recommendation;
+
+  if (recommendation.epistemicStatus !== "active") {
+    return fail(
+      "TRJ_BRIDGE_RECOMMENDATION_NOT_ACTIVE",
+      "recommendation_epistemic_status_not_active",
+    );
+  }
+  if (recommendation.authority !== "none") {
+    return fail("TRJ_BRIDGE_AUTHORITY_FORBIDDEN", "authority_must_be_none");
+  }
+  if (recommendation.isHumanDecision !== false) {
+    return fail(
+      "TRJ_BRIDGE_HUMAN_DECISION_FORBIDDEN",
+      "recommendation_must_not_be_human_decision",
+    );
+  }
+  if (recommendation.subjectCycleInstanceId) {
+    return fail(
+      "TRJ_BRIDGE_SUBJECT_FORBIDDEN",
+      "subject_cycle_not_allowed_for_greenfield_bridge",
+    );
+  }
+  if (recommendation.targetCycleInstanceId) {
+    return fail(
+      "TRJ_BRIDGE_TARGET_INSTANCE_FORBIDDEN",
+      "target_cycle_instance_not_allowed_for_greenfield_bridge",
+    );
+  }
+
+  const eligibility = assessGreenfieldPreTrajectoryBootstrapEligibility({
+    candidate: {
+      intent: recommendation.intent,
+      statement: recommendation.statement,
+      subjectCycleInstanceId: recommendation.subjectCycleInstanceId,
+      targetCycleInstanceId: recommendation.targetCycleInstanceId,
+      targetCycleTypeId: recommendation.targetCycleTypeId,
+    },
+    presence,
+    cycles,
+    lpsActiveCycleInstanceId: lps.activeCycleInstanceId ?? null,
+    decisions,
+  });
+  if (!eligibility.eligible) {
+    return fail(eligibility.code, eligibility.reason);
+  }
+
+  const targetCycleTypeId = recommendation.targetCycleTypeId;
+  if (!targetCycleTypeId) {
+    return fail(
+      "LR_TARGET_CYCLE_TYPE_MISSING",
+      "target_cycle_type_required_for_type_based_next",
+    );
+  }
+
+  const mkStepId = input.deps.newStepId ?? newStepId;
+  const entry = getCycleTypeById(targetCycleTypeId);
+  const canonicalKey = entry?.canonicalKey ?? "cycle";
+  const stepId = mkStepId(canonicalKey);
+  const stepBuild = buildSingleRecommendedCycleStep({
+    targetCycleTypeId,
+    stepId,
+  });
+  if (!stepBuild.ok) {
+    return fail(stepBuild.code, stepBuild.reason);
+  }
+
+  const trajectoryId = (input.deps.newTrajectoryId ?? newTrajectoryId)();
+  const createdBy =
+    input.deps.createdBy ?? NORA_LIFECYCLE_RECOMMENDATION_ACTOR;
+
+  const created = await input.deps.createInitialTrajectory.execute({
+    trajectoryId,
+    projectId,
+    steps: [stepBuild.step],
+    status: "candidate",
+    createdBy,
+    correlationId,
+    expectedLpsVersion,
+  });
+
+  if (!created.ok) {
+    return fail(
+      created.error.detailCode,
+      created.error.internalCauseRef ?? "create_initial_trajectory_failed",
+    );
+  }
+
+  const trajectory = created.trajectory;
+  if (trajectory.decidedByDecisionRef) {
+    return fail(
+      "TRJ_BRIDGE_DECISION_REF_LEAK",
+      "candidate_must_not_carry_decision_ref",
+    );
+  }
+
+  return {
+    ok: true,
+    projectId,
+    recommendationId: recommendation.recommendationId,
+    semanticKey: recommendation.semanticKey,
+    targetCycleTypeId: stepBuild.cycleTypeId,
+    catalogLabel: stepBuild.catalogLabel,
+    trajectoryId: trajectory.trajectoryId,
+    trajectoryVersion: trajectory.version,
+    stepId: stepBuild.step.stepId,
+    correlationId,
+    lpsVersionAfter: created.livingProjectStateVersion ?? expectedLpsVersion + 1,
+    sourceDerivedCurrentnessBefore: "CURRENT",
+  };
+}
+
+/**
+ * Durable read of a pre-cycle candidate ProjectTrajectory (not current).
+ * Prefer LPS trajectory pointer when present; never coerces candidate to current.
+ */
+export async function readPreCycleCandidateTrajectory(input: {
+  projectId: string;
+  trajectories: TrajectoryRepositoryPort;
+  getCurrentLps: PrepareCandidateTrajectoryDeps["getCurrentLps"];
+  listCyclesByProject: (projectId: string) => Promise<CycleInstance[]>;
+}): Promise<
+  | {
+      ok: true;
+      candidate: {
+        trajectoryId: string;
+        version: number;
+        status: "candidate";
+        projectId: string;
+        steps: readonly TrajectoryStep[];
+        catalogLabel: string | null;
+        targetCycleTypeId: string | null;
+        decidedByDecisionRef: null;
+        isEffectiveCurrent: false;
+      };
+    }
+  | { ok: true; candidate: null }
+  | { ok: false; code: string; reason: string }
+> {
+  const lpsResult = await input.getCurrentLps(input.projectId);
+  if (!lpsResult.ok) {
+    return { ok: false, code: "TRJ_BRIDGE_LPS_UNAVAILABLE", reason: "lps_unreadable" };
+  }
+  const lps = lpsResult.livingProjectState;
+
+  try {
+    const cycles = await input.listCyclesByProject(input.projectId);
+    if (cycles.length > 0 || lps.activeCycleInstanceId) {
+      // Pre-cycle candidate surface is only for greenfield-before-cycle.
+      // Still allow reading LPS-linked candidate if present, but callers gate UI.
+    }
+  } catch {
+    return {
+      ok: false,
+      code: "TRJ_BRIDGE_CYCLES_UNAVAILABLE",
+      reason: "cycle_reader_failed",
+    };
+  }
+
+  let trajectory: ProjectTrajectory | null = null;
+  try {
+    if (
+      typeof lps.trajectoryVersion === "number" &&
+      lps.trajectoryVersion >= 1
+    ) {
+      trajectory =
+        (await input.trajectories.findByProjectAndVersion(
+          input.projectId,
+          lps.trajectoryVersion,
+        )) ?? null;
+    }
+    if (!trajectory) {
+      const presence = await resolveTrajectoryBootstrapPresence(
+        input.trajectories,
+        input.projectId,
+      );
+      if (presence.kind === "unknown") {
+        return {
+          ok: false,
+          code: "TRJ_BRIDGE_TRAJECTORY_UNKNOWN",
+          reason: presence.reason,
+        };
+      }
+      if (presence.kind === "history_without_current") {
+        trajectory =
+          (await input.trajectories.findByProjectAndVersion(
+            input.projectId,
+            1,
+          )) ?? null;
+      }
+    }
+  } catch (error) {
+    return {
+      ok: false,
+      code: "TRJ_BRIDGE_TRAJECTORY_UNKNOWN",
+      reason:
+        error instanceof Error ? error.message : "trajectory_reader_failed",
+    };
+  }
+
+  if (!trajectory || trajectory.status !== "candidate") {
+    return { ok: true, candidate: null };
+  }
+
+  const current = await input.trajectories.findCurrentByProjectId(
+    input.projectId,
+  );
+  if (current && current.trajectoryId === trajectory.trajectoryId) {
+    // Candidate must not be effective current — refuse to mis-present.
+    return { ok: true, candidate: null };
+  }
+
+  const first = trajectory.steps[0] ?? null;
+  let targetCycleTypeId: string | null = null;
+  let catalogLabel: string | null = first?.label ?? null;
+  if (first?.label) {
+    // Reverse-resolve catalog label → id when unique (presentation aid only).
+    // Canonical identity remains the source Recommendation / bridge result.
+    const matches = CYCLE_TYPE_CATALOG.entries.filter(
+      (e) => e.label === first.label && e.lifecycleStatus === "active",
+    );
+    if (matches.length === 1) {
+      targetCycleTypeId = matches[0]!.cycleTypeId;
+      catalogLabel = matches[0]!.label;
+    }
+  }
+
+  return {
+    ok: true,
+    candidate: {
+      trajectoryId: trajectory.trajectoryId,
+      version: trajectory.version,
+      status: "candidate",
+      projectId: trajectory.projectId,
+      steps: trajectory.steps,
+      catalogLabel,
+      targetCycleTypeId,
+      decidedByDecisionRef: null,
+      isEffectiveCurrent: false,
+    },
+  };
+}

```

---

## 14. Final verdict

# GREENFIELD CURRENT RECOMMENDATION → CANDIDATE PROJECT TRAJECTORY BRIDGE — DETERMINISTIC CANDIDATE READY FOR CHATGPT CRITICAL REVIEW

Awaiting ChatGPT Critical Review.
No LIVE. No Product push. No PR.
