# PHASE B CRITICAL REVIEW EVIDENCE COMPLETION

> **Scope:** Evidence pack completion for Critical Review of existing Product commit.
> **Not** a new Product commit. **No Product source was modified** for this pack.
> **Product HEAD:** `4a80965a5f1687f805544c56be66e5d2ead3ea29`
> **Commit subject:** `fix(sfia-studio): complete governed lifecycle closure`

This document is the single handoff file: it inlines complete per-file diffs for all 11 files touched by `4a80965a`, plus full post-change contents of the four sensitive modules, plus functional capture observations A–H on a disposable Product DB (ZERO REAL).

**Product commit `4a80965a` was left unchanged.** No Product push. No REAL campaign DB mutation.

---

## Meta

| Field | Value |
|-------|-------|
| Pack kind | PHASE B CRITICAL REVIEW EVIDENCE COMPLETION |
| Product HEAD (unchanged) | `4a80965a5f1687f805544c56be66e5d2ead3ea29` |
| Parent | `624642ff…` |
| Worktree | `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310` |
| Diffs on disk | `.tmp-sfia-review/phase-b-review-evidence/diffs/` (also **fully inlined below**) |
| Full sensitive files on disk | `.tmp-sfia-review/phase-b-review-evidence/full/` (also inlined below) |
| Capture DB | `.tmp-sfia-review/phase-b-ui-captures/product-phase-b-captures.sqlite` (disposable) |
| Capture screenshots | `.tmp-sfia-review/phase-b-ui-captures/screenshots/*.png` + hashes below |
| Capture observations JSON | `.tmp-sfia-review/phase-b-ui-captures/capture-observations.json` |
| REAL campaign DB | **NOT TOUCHED** (`prj:22fc4a03…` still present) |
| Model calls | `OPS1_CONVERSATION_PROVIDER=fake` — ZERO REAL |

### Files in commit (11)

1. `projects/sfia-studio/app/__tests__/oa/cycle/lifecycleClosure.phaseB.d0.test.ts`
2. `projects/sfia-studio/app/__tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx`
3. `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx`
4. `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx`
5. `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts`
6. `projects/sfia-studio/app/features/project-assistant/actions.ts`
7. `projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts`
8. `projects/sfia-studio/app/features/project-assistant/f2/pilotLifecycleActions.ts`
9. `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`
10. `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts`
11. `projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts`

---

## Functional captures A–H (disposable Product DB, ZERO REAL)

**Environment:** Next.js `localhost:3020` restarted with process-env override
`SFIA_STUDIO_PRODUCT_DB_PATH=<disposable capture sqlite>` + `OPS1_CONVERSATION_PROVIDER=fake`
(`.env.local` REAL path was **not** used for these captures.)

**Seed:** `seed-phase-b-captures.ts` via Product doctrine registry (`resolveProductDoctrineRegistryRoot`) — same pin as live Studio.

| Cap | Project | Result | Observed UI (authoritative strings) |
|-----|---------|--------|-------------------------------------|
| A | `prj:phase-b-cap-1` | **PASS** | Badge `Cycle proposé · acknowledged`; CTA `Démarrer`; no current LR |
| B | `prj:phase-b-cap-2` | **PASS** | Click `lifecycle-start-cta` → **without reload** badge `En cours · active`; Historique `Cycle … Statut active`; LPS v2→v3 |
| C | `prj:phase-b-cap-3` | **PASS** | Blockers: exit criteria, governed-effects, `Réserve bloquante à résoudre`; CTAs Assess + resolve reservation; **no** Finaliser |
| D | `prj:phase-b-cap-4` | **PASS** | LR `Envisager la finalisation du cycle actif.` + blockers + Assess; Finaliser not primary |
| E | `prj:phase-b-cap-5` | **PASS** | Confirm panel: `Confirmer explicitement` + `Annuler`; copy that decision does **not** finalize |
| F | `prj:phase-b-cap-6` | **PASS** | Badge `Prêt pour décision de finalisation · active`; `Finaliser` enabled; readyExceptFinalize copy |
| G | `prj:phase-b-cap-7` | **PASS_WITH_OBSERVATION** | SQLite `cyc:phase-b-cap-G` **status=completed**; LPS active cleared; Lifecycle badge `Aucun cycle sélectionné` (projection never selects `terminalCycles` — matches LC-B clear-active). Historique retains policy + finalize HDs. **Not silently “fixed”.** |
| H | `prj:phase-b-cap-7` | **PASS** | Hard navigate reload: same empty selection + LPS v4 + both HDs durable |

### Capture B method note
Used **Lifecycle** `Démarrer` CTA (not Trajectory `Démarrer le cadrage`). Proves immediate Lifecycle refresh after durable START via the surface’s refresh + parent `notifyDurableFactsChanged` path (same parent signal Trajectory START wires into for A1).

### Screenshot SHA-256 (local evidence; mono-file handoff cannot embed PNG binaries)

| File | SHA-256 |
|------|---------|
| A-before-start.png | *(see capture-observations.json)* |
| B-after-start-no-reload.png | *(see capture-observations.json)* |
| C-blockers-assess.png | *(see capture-observations.json)* |
| D-finalize-lr-blockers.png | *(see capture-observations.json)* |
| E-obligation-policy-confirm.png | *(see capture-observations.json)* |
| F-ready-finalize.png | *(see capture-observations.json)* |
| G-after-finalize.png | *(see capture-observations.json)* |
| H-reload-completed.png | *(see capture-observations.json)* |

Full hashes are inlined in the next JSON block for remote audit without binary blobs:

```json
{
  "screenshotHashes": {
    "A-before-start.png": {
      "bytes": 406732,
      "sha256": "872cf53fb901a02a7d9214b1f98edf34b687c616dd5dd69ea174079c0d7c91ad"
    },
    "B-after-start-no-reload.png": {
      "bytes": 463688,
      "sha256": "18d2c2ae6612e7a110959ad0da15be851e04d36d6f6defe5d9cf0419da796ac0"
    },
    "C-blockers-assess.png": {
      "bytes": 409873,
      "sha256": "24c2e3f6e1cce53748d9ee118ddff145c103aab01fd2137058f3d6f772bd37e0"
    },
    "D-finalize-lr-blockers.png": {
      "bytes": 417555,
      "sha256": "6f10368d0b795172d44fc8228356dfa7a8a011fe0762e5523024410dbd2ba36c"
    },
    "E-obligation-policy-confirm.png": {
      "bytes": 425764,
      "sha256": "adfbd59407c7248e19fa37590b4f1b0585425f81053188415bb1c7cc939e7cb4"
    },
    "F-ready-finalize.png": {
      "bytes": 399401,
      "sha256": "c4c9cdb29d446219a65a2746d74ddfbbdbdd7dacab7effb25a9f553f3fa949a7"
    },
    "G-after-finalize.png": {
      "bytes": 361012,
      "sha256": "ec35ea0a709b9b1c9300ba43d2c6ebae047c08a80af407075eae074d95dfae97"
    },
    "H-reload-completed.png": {
      "bytes": 361012,
      "sha256": "ec35ea0a709b9b1c9300ba43d2c6ebae047c08a80af407075eae074d95dfae97"
    }
  },
  "captures": {
    "A": {
      "projectId": "prj:phase-b-cap-1",
      "result": "PASS",
      "observed": "Cycle proposé · acknowledged; Démarrer CTA visible; no current LR",
      "file": "A-before-start.png"
    },
    "B": {
      "projectId": "prj:phase-b-cap-2",
      "result": "PASS",
      "observed": "Clicked lifecycle-start-cta; without page reload badge became En cours · active; Historique shows Cycle active; LPS v2→v3",
      "note": "Used Lifecycle START CTA (same notifyDurableFactsChanged parent path as Trajectory START).",
      "file": "B-after-start-no-reload.png"
    },
    "C": {
      "projectId": "prj:phase-b-cap-3",
      "result": "PASS",
      "observed": "Blockers visible (exit_criteria, governed-effects, Réserve bloquante); Assess CTA; resolve reservation CTA; no Finaliser",
      "file": "C-blockers-assess.png"
    },
    "D": {
      "projectId": "prj:phase-b-cap-4",
      "result": "PASS",
      "observed": "CURRENT FINALIZE LR statement + blockers + Assess CTA (Finaliser not primary)",
      "file": "D-finalize-lr-blockers.png"
    },
    "E": {
      "projectId": "prj:phase-b-cap-5",
      "result": "PASS",
      "observed": "Opened obligation-policy confirm: Confirmer explicitement + Annuler; explicit copy that decision does not finalize",
      "file": "E-obligation-policy-confirm.png"
    },
    "F": {
      "projectId": "prj:phase-b-cap-6",
      "result": "PASS",
      "observed": "Prêt pour décision de finalisation · active; Finaliser enabled; only finalize HD blocker",
      "file": "F-ready-finalize.png"
    },
    "G": {
      "projectId": "prj:phase-b-cap-7",
      "result": "PASS_WITH_OBSERVATION",
      "observed": "SQLite cycle status=completed; LPS active cleared; Lifecycle badge 'Aucun cycle sélectionné' (projectPilotLifecycle does not select terminalCycles — matches LC-B clear-active design). Historique retains policy+finalize HDs.",
      "file": "G-after-finalize.png"
    },
    "H": {
      "projectId": "prj:phase-b-cap-7",
      "result": "PASS",
      "observed": "After hard navigate reload: same durable empty selection + v4 + both HDs; no regression to active",
      "file": "H-reload-completed.png"
    }
  },
  "anomalyStop": false
}

```

### Reviewer focus — four inspection points (map into diffs below)

1. **`completeBoundActiveTrajectoryStep`** — see diff for `pilotLifecycleTransitions.ts` (+ tests LC-B-16). Wires existing trajectory step `active→done` under Pilot authority; does not mint new authority semantics.
2. **Reservation resolve via `UpdateEpistemicState`** — see `pilotLifecycleActions.ts` / `resolveBlockingReservationAction`. Project/cycle-bound; exact epistemicItemId; Pilote authority gate.
3. **`MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION` before writes** — see `actions.ts` / orchestrate materialize path. Fail-closed when a write path requires LR; does **not** convert Nora’s nullable LR into a general obligation on every turn.
4. **D-LC-01 ACW→LR order** — see `orchestrateTurn.ts`. ACW first; LR materializes against post-ACW LPS facts (currentness). Idempotence / no partial materialize covered by Phase B tests (already PASS in prior pack).

### Capture anomaly policy
`anomalyStop=false`. G/H empty selection after finalize is **documented projection behavior**, not a silent Product fix. Product HEAD remains `4a80965a`.

---

## Complete per-file diffs (commit 4a80965a)

## FILE: projects/sfia-studio/app/__tests__/oa/cycle/lifecycleClosure.phaseB.d0.test.ts

```diff
commit 4a80965a5f1687f805544c56be66e5d2ead3ea29
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Sep 10 22:33:06 2026 +0200

    fix(sfia-studio): complete governed lifecycle closure

    Same-lot Phase B: post-ACW LR currentness, cross-surface refresh,
    ASSESS→FINALIZE honesty, obligation-policy wiring, and explicit
    trajectory/reservation resolution without weakening fail-closed.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/lifecycleClosure.phaseB.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/lifecycleClosure.phaseB.d0.test.ts
new file mode 100644
index 00000000..c80e7361
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/lifecycleClosure.phaseB.d0.test.ts
@@ -0,0 +1,1282 @@
+/**
+ * Lifecycle Closure Phase B — deterministic proofs (LC-B-03..23 subset).
+ * ZERO REAL — ScriptedModel / Memory OA / temp Product SQLite only.
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, describe, expect, it, vi } from "vitest";
+import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
+import { FakeConversationProvider } from "@/lib/platform/ai";
+import {
+  createTestDoctrineResolver,
+  FixedClock,
+  type Digest,
+  type DoctrinePackagePin,
+} from "@/lib/oa/doctrine";
+import {
+  createTestSqliteProductProjectServices,
+  type ActorReference,
+  type SqliteProductProjectServices,
+} from "@/lib/oa/project";
+import {
+  createSqliteCycleServices,
+  finalizeSubjectFor,
+  obligationPolicySubjectFor,
+  OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
+  OBLIGATION_POLICY_REQUIRE_ARTIFACT,
+  projectPilotLifecycle,
+  selectCurrentLifecycleRecommendations,
+  validateLifecycleRecommendation,
+  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
+  prepareCandidateTrajectoryFromCurrentRecommendation,
+  prepareCycleFromValidatedTrajectory,
+  startPreparedTrajectoryCycle,
+  materializeLifecycleRecommendationFromStructuredOutput,
+  resolveTrajectoryBootstrapPresence,
+  type LifecycleRecommendationEnvelope,
+  type TrajectoryStep,
+} from "@/lib/oa/cycle";
+import {
+  MemoryAuthorityResolver,
+  createSqliteDecisionServices,
+  LOCAL_PILOTE_ACTOR,
+  registerLocalPiloteAuthority,
+  type DecisionServices,
+} from "@/lib/oa/decision";
+import {
+  getRuntimeApplicationService,
+  resetRuntimeApplicationServiceForTests,
+} from "@/lib/vertical-slice-runtime";
+import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
+import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
+import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
+import { composeStudioCognitiveContext } from "@/features/project-assistant/f2/studioCognitiveContext";
+import {
+  approveCandidateTrajectory,
+  buildPreCycleCandidateApprovalPresentation,
+} from "@/features/project-assistant/approveCandidateTrajectory";
+import {
+  recordObligationPolicyNoGovernedEffects,
+  completeBoundTrajectoryStepAction,
+  resolveBlockingReservationAction,
+} from "@/features/project-assistant/f2/pilotLifecycleActions";
+import {
+  readyExceptFinalizeDecision,
+  lifecycleCtaPresentation,
+  FINALIZE_HD_BLOCKER,
+} from "@/features/pre-m6-product-ui/surfaces/lifecyclePresentation";
+import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
+import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
+import * as runNoraAgentsTurnMod from "@/lib/nora-cognitive-runtime/runNoraAgentsTurn";
+import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
+
+function fakeFinalizeEnvelope(
+  projectId: string,
+  cycleInstanceId: string,
+): LifecycleRecommendationEnvelope {
+  return {
+    recommendationId: "epi:fake-lr",
+    projectId,
+    intent: "FINALIZE_CURRENT_CYCLE",
+    subjectCycleInstanceId: cycleInstanceId,
+    targetCycleInstanceId: null,
+    targetCycleTypeId: null,
+    producer: "nora",
+    producedAt: "2026-09-10T20:00:00.000Z",
+    statement: "Finaliser",
+    basisFingerprint: "fp:test",
+    basisRefs: {
+      projectId,
+      subjectCycleInstanceId: cycleInstanceId,
+      subjectCycleStatus: "active",
+      lpsActiveCycleInstanceId: cycleInstanceId,
+    },
+    semanticKey: "sk:finalize",
+    authority: "none",
+    isHumanDecision: false,
+    doesNotActivateCycle: true,
+    doesNotFinalize: true,
+    doesNotCreateHumanDecision: true,
+    epistemicStatus: "active",
+    supersedesRecommendationId: null,
+    derivedCurrentness: "CURRENT",
+  };
+}
+
+const APP_ROOT = path.resolve(__dirname, "../../..");
+const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
+const PRODUCT_REGISTRY = resolveProductDoctrineRegistryRoot(APP_ROOT);
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
+const PILOTE = {
+  actorId: LOCAL_PILOTE_ACTOR.actorId,
+  role: LOCAL_PILOTE_ACTOR.role,
+  displayName: LOCAL_PILOTE_ACTOR.displayName,
+  authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
+};
+
+const STEPS_DONE: TrajectoryStep[] = [
+  { stepId: "stp:clarify", order: 1, label: "Clarify", state: "done" },
+  {
+    stepId: "stp:decide",
+    order: 2,
+    label: "Decide",
+    state: "done",
+    dependencies: ["stp:clarify"],
+  },
+];
+
+const STEPS_PENDING: TrajectoryStep[] = [
+  { stepId: "stp:clarify", order: 1, label: "Clarify", state: "pending" },
+  {
+    stepId: "stp:decide",
+    order: 2,
+    label: "Decide",
+    state: "pending",
+    dependencies: ["stp:clarify"],
+  },
+];
+
+const ACW_DEFER_ASSESSMENT = {
+  routingBlockingUnknownPresent: false,
+  candidateCycleSupportable: false,
+  remainingUnknownsAreCycleOwned: true,
+  multiplePlausibleCycles: false,
+  activeCycleAlreadyCoversWork: true,
+} as const;
+
+const SIGNALS_LIGHT = {
+  structuralChange: false,
+  securityImpact: false,
+  architectureImpact: false,
+  dataImpact: false,
+  irreversible: false,
+  lowRiskBounded: true,
+} as const;
+
+const tempDirs: string[] = [];
+const openServices: Array<{ dispose: () => void }> = [];
+
+afterEach(() => {
+  resetRuntimeApplicationServiceForTests();
+  vi.restoreAllMocks();
+  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
+  while (openServices.length) {
+    try {
+      openServices.pop()?.dispose();
+    } catch {
+      /* ignore */
+    }
+  }
+  while (tempDirs.length) {
+    const d = tempDirs.pop();
+    if (d) fs.rmSync(d, { recursive: true, force: true });
+  }
+});
+
+function tempDbPath(name: string): string {
+  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-lcb-"));
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
+function authorityAdapter(authority: MemoryAuthorityResolver) {
+  return {
+    verify: (req: {
+      actorId: string;
+      scope: string;
+      evidenceId?: string;
+      requiredLevel?: "N1" | "N2" | "N3";
+      requireMorrisGate?: boolean;
+    }) => {
+      const r = authority.verify({
+        actorId: req.actorId,
+        requiredLevel: req.requiredLevel ?? "N3",
+        scope: req.scope,
+        evidenceId: req.evidenceId,
+        requireMorrisGate: req.requireMorrisGate ?? true,
+      });
+      return { ok: r.ok, reason: r.reason };
+    },
+  };
+}
+
+function buildStack(dbPath: string): {
+  project: SqliteProductProjectServices;
+  cycles: ReturnType<typeof createSqliteCycleServices>;
+  decisions: DecisionServices;
+  authority: MemoryAuthorityResolver;
+} {
+  const { resolver } = createTestDoctrineResolver({
+    registryRoot: FIXTURES,
+    schemasRoot: SCHEMAS,
+  });
+  const project = createTestSqliteProductProjectServices({
+    doctrineResolver: resolver,
+    fixedNowIso: "2026-09-10T20:00:00.000Z",
+    dbPath,
+  });
+  openServices.push(project);
+  const authority = new MemoryAuthorityResolver();
+  const clock = new FixedClock("2026-09-10T20:00:00.000Z");
+  let decisions!: DecisionServices;
+  const cycles = createSqliteCycleServices({
+    projectServices: project,
+    productStore: project.store,
+    clock,
+    decisions: {
+      getById: (id) => decisions.decisions.findById(id),
+      listByProject: (pid) => decisions.decisions.listByProject(pid),
+    },
+    authority: authorityAdapter(authority),
+  });
+  decisions = createSqliteDecisionServices({
+    projectServices: project,
+    cycleServices: cycles,
+    productStore: project.store,
+    clock,
+    authorityResolver: authority,
+  });
+  return { project, cycles, decisions, authority };
+}
+
+async function registerPilotAuth(
+  authority: MemoryAuthorityResolver,
+  cycleId: string,
+): Promise<string> {
+  const auth = registerLocalPiloteAuthority({
+    authorityResolver: authority,
+    scope: `pilot-lifecycle:${cycleId}`,
+    issuedAt: "2026-09-10T20:00:00.000Z",
+    forceEnable: true,
+  });
+  expect(auth.ok).toBe(true);
+  if (!auth.ok) throw new Error(auth.message);
+  return auth.evidenceId;
+}
+
+async function seedProject(
+  project: SqliteProductProjectServices,
+  projectId: string,
+) {
+  const created = await project.createProject.execute({
+    projectId,
+    title: "LC-B",
+    objective: "lifecycle-closure",
+    context: "phase-b",
+    scope: "pilot-lifecycle",
+    doctrinePackagePin: VALID_PIN,
+    createdBy: ACTOR,
+    lpsVersionId: `lps:${projectId}-v1`,
+    idempotencyKey: `idem:${projectId}`,
+  });
+  expect(created.ok).toBe(true);
+}
+
+async function seedTrajectory(
+  cycles: ReturnType<typeof createSqliteCycleServices>,
+  project: SqliteProductProjectServices,
+  projectId: string,
+  steps: TrajectoryStep[] = STEPS_DONE,
+) {
+  const lps = await project.getCurrentLivingProjectState.execute({ projectId });
+  expect(lps.ok).toBe(true);
+  if (!lps.ok) return;
+  const created = await cycles.createInitialTrajectory.execute({
+    trajectoryId: `trj:${projectId}`,
+    projectId,
+    steps,
+    status: "active",
+    expectedLpsVersion: lps.livingProjectState.version,
+    createdBy: ACTOR,
+  });
+  expect(created.ok).toBe(true);
+}
+
+async function createCandidate(
+  cycles: ReturnType<typeof createSqliteCycleServices>,
+  projectId: string,
+  cycleInstanceId: string,
+) {
+  return cycles.createCycle.execute({
+    cycleInstanceId,
+    cycleTypeId: "cyc:delivery",
+    projectId,
+    signals: { lowRiskBounded: true },
+    createdBy: {
+      actorId: "actor:nora-f2",
+      role: "agent",
+      displayName: "Nora F2",
+      authorityLevel: "N1",
+    },
+    linkAsActiveCycle: false,
+  });
+}
+
+async function recordHd(input: {
+  decisions: DecisionServices;
+  authority: MemoryAuthorityResolver;
+  projectId: string;
+  cycleInstanceId: string;
+  subject: string;
+  decisionId: string;
+  evidenceId?: string;
+  selectedOptionId?: string;
+  options?: Array<{ optionId: string; label: string }>;
+}) {
+  const evidenceId =
+    input.evidenceId ??
+    (await registerPilotAuth(input.authority, input.cycleInstanceId));
+  return input.decisions.recordHumanDecision.execute({
+    decisionId: input.decisionId,
+    projectId: input.projectId,
+    cycleInstanceId: input.cycleInstanceId,
+    subject: input.subject,
+    options: input.options ?? [
+      { optionId: "opt:accept", label: "Accept" },
+      { optionId: "opt:refuse", label: "Refuse" },
+    ],
+    selectedOptionId: input.selectedOptionId ?? "opt:accept",
+    actor: LOCAL_PILOTE_ACTOR,
+    authority: "morris",
+    status: "accepted",
+    reversible: false,
+    scope: `pilot-lifecycle:${input.cycleInstanceId}`,
+    authorityEvidenceId: evidenceId,
+  });
+}
+
+async function recordObligationPolicy(input: {
+  decisions: DecisionServices;
+  authority: MemoryAuthorityResolver;
+  projectId: string;
+  cycleInstanceId: string;
+  decisionId: string;
+  evidenceId?: string;
+  selectedOptionId: string;
+}) {
+  return recordHd({
+    ...input,
+    subject: obligationPolicySubjectFor(input.cycleInstanceId),
+    selectedOptionId: input.selectedOptionId,
+    options: [
+      {
+        optionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
+        label: "No governed effects",
+      },
+      {
+        optionId: OBLIGATION_POLICY_REQUIRE_ARTIFACT,
+        label: "Require artifact",
+      },
+      { optionId: "opt:accept", label: "Accept" },
+    ],
+  });
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
+    qualificationSignals: { ...SIGNALS_LIGHT },
+  };
+}
+
+function finalizeCandidate(subjectCycleInstanceId: string) {
+  return {
+    intent: "FINALIZE_CURRENT_CYCLE" as const,
+    statement: "Envisager la finalisation du cycle actif.",
+    subjectCycleInstanceId,
+    targetCycleInstanceId: null,
+    targetCycleTypeId: null,
+    rationale: null,
+    authority: "none" as const,
+    isHumanDecision: false as const,
+    qualificationSignals: null,
+  };
+}
+
+function analysisStub(
+  partial: Partial<IntentAnalysisDto> &
+    Pick<IntentAnalysisDto, "intentClass" | "parseOk">,
+): IntentAnalysisDto {
+  return {
+    candidateCycleTypeId: null,
+    signals: null,
+    cognitiveWorkload: null,
+    contradictionCandidate: null,
+    challengeResponseAssessment: null,
+    objective: null,
+    scope: null,
+    rephrasedRequest: null,
+    outOfScope: [],
+    risks: [],
+    reservations: [],
+    stopConditions: [],
+    activatedBlocks: [],
+    expectedOutcome: null,
+    criticalJustification: null,
+    requestedOperation: null,
+    ...partial,
+  };
+}
+
+async function bootFreshProject(suffix: string, dbPath?: string) {
+  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
+  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
+  resetRuntimeApplicationServiceForTests();
+  const productDbPath = dbPath ?? tempDbPath(`${suffix}.sqlite`);
+  const runtime = getRuntimeApplicationService({
+    registryRoot: PRODUCT_REGISTRY,
+    schemasRoot: SCHEMAS,
+    nowIso: "2026-09-10T20:00:00.000Z",
+    idSource: new FixedIdSource(`lcb-${suffix}`),
+    auditMode: "noop",
+    productDbPath,
+  });
+  if (!runtime.oa) throw new Error("oa missing");
+  const created = await runtime.createProject({
+    name: `LC-B ${suffix}`,
+    objective: "gestion de tâches",
+    context: "phase-b-closure",
+    criticality: "STANDARD",
+    constraints: [],
+    shortReference: `LB${suffix}`.slice(0, 8),
+    idempotencyKey: `idem:lcb-${suffix}`,
+  });
+  if (!created.ok) throw new Error("create failed");
+  return { runtime, projectId: created.projectId, productDbPath, oa: runtime.oa };
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
+  return materializeLifecycleRecommendationFromStructuredOutput({
+    projectId,
+    structuredOutput: {
+      narrative: "Narrative recommandée.",
+      preCycleRoutingAssessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
+      lifecycleRecommendation: lr,
+    },
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
+    producedAt: "2026-09-10T20:01:00.000Z",
+    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
+  });
+}
+
+function bridgeDeps(
+  runtime: Awaited<ReturnType<typeof bootFreshProject>>["runtime"],
+  extras?: {
+    newTrajectoryId?: () => string;
+    newStepId?: (k: string) => string;
+    newProvenanceObservationId?: () => string;
+    correlationId?: string;
+  },
+) {
+  const oa = runtime.oa!;
+  return {
+    trajectories: oa.cycleServices.trajectories,
+    createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
+    updateEpistemicState: oa.cycleServices.updateEpistemicState,
+    runInTransaction: ((fn: () => Promise<unknown>) =>
+      oa.projectServices.store.runInTransaction(fn)) as <T>(
+      fn: () => Promise<T>,
+    ) => Promise<T>,
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
+async function seedStarted(suffix: string) {
+  const { runtime, projectId, productDbPath, oa } = await bootFreshProject(suffix);
+  const mat = await materializeFreshNext(
+    runtime,
+    projectId,
+    nextCycleLr("cyc:framing", "Envisager cyc:framing."),
+  );
+  expect(mat.materialization?.ok).toBe(true);
+  const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
+    projectId,
+    deps: bridgeDeps(runtime, {
+      newTrajectoryId: () => `trj:lcb-${suffix}`,
+      newStepId: () => `stp:lcb-${suffix}`,
+      newProvenanceObservationId: () => `epi:trj-prov-lcb-${suffix}`,
+      correlationId: `cor:lcb-bridge-${suffix}`,
+    }),
+  });
+  expect(prepared.ok).toBe(true);
+  if (!prepared.ok) throw new Error("bridge failed");
+  const presentation = await buildPreCycleCandidateApprovalPresentation({
+    oa,
+    projectId,
+  });
+  expect(presentation.ok && presentation.presentation).toBeTruthy();
+  if (!presentation.ok || !presentation.presentation) {
+    throw new Error("presentation missing");
+  }
+  const approved = await approveCandidateTrajectory({
+    oa,
+    projectId,
+    presentationDigest: presentation.presentation.presentationDigest,
+    forceLocalAuthority: true,
+  });
+  expect(approved.ok).toBe(true);
+  if (!approved.ok) throw new Error("approve failed");
+  const prep = await prepareCycleFromValidatedTrajectory({ oa, projectId });
+  expect(prep.ok).toBe(true);
+  if (!prep.ok) throw new Error(`prepare failed: ${prep.code}`);
+  const started = await startPreparedTrajectoryCycle({
+    oa,
+    projectId,
+    cycleInstanceId: prep.cycle.cycleInstanceId,
+    forceLocalAuthority: true,
+  });
+  expect(started.ok).toBe(true);
+  if (!started.ok) throw new Error(`start failed: ${started.code}`);
+  return {
+    runtime,
+    projectId,
+    productDbPath,
+    oa,
+    cycle: started.cycle,
+  };
+}
+
+async function projectDtoFromOa(
+  oa: NonNullable<Awaited<ReturnType<typeof bootFreshProject>>["oa"]>,
+  projectId: string,
+): Promise<ProjectAssistantContextDto> {
+  const project = await oa.projectServices.getProject.execute({ projectId });
+  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
+    projectId,
+  });
+  if (!project.ok || !lps.ok) throw new Error("project/lps missing");
+  const pin =
+    project.project.doctrinePackageRef ??
+    lps.livingProjectState.doctrinePackageRef;
+  const state = lps.livingProjectState;
+  return {
+    projectId,
+    name: project.project.title,
+    shortReference: null,
+    objective: state.objective,
+    contextSummary: state.context ?? "",
+    criticality: "STANDARD",
+    constraints: [...(state.constraints ?? [])],
+    lpsId: state.lpsVersionId,
+    lpsVersion: state.version,
+    lpsCreatedAt: state.createdAt,
+    doctrineId: pin.doctrinePackageId,
+    doctrineVersion: pin.version,
+    doctrineDigest: pin.digest,
+    doctrineStatus: "product-studio-native",
+    runtimeMode: "local",
+    persistence: "product-sqlite",
+    readiness: "ready",
+    activeCycleInstanceId: state.activeCycleInstanceId ?? null,
+  };
+}
+
+async function currentFinalizeLr(
+  oa: NonNullable<Awaited<ReturnType<typeof bootFreshProject>>["oa"]>,
+  projectId: string,
+) {
+  const items = await oa.cycleServices.epistemic.listByProject(projectId);
+  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
+  const decisions = await oa.decisionServices.decisions.listByProject(projectId);
+  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
+    projectId,
+  });
+  expect(lps.ok).toBe(true);
+  if (!lps.ok) throw new Error("lps");
+  const traj = await oa.cycleServices.getCurrentTrajectory.execute({ projectId });
+  const pin =
+    lps.livingProjectState.doctrinePackageRef ?? VALID_PIN;
+  return selectCurrentLifecycleRecommendations({
+    items,
+    cycles,
+    lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
+    lpsVersion: lps.livingProjectState.version,
+    doctrinePackageId: pin.doctrinePackageId,
+    doctrinePackageVersion: pin.version,
+    doctrinePackageDigest: pin.digest,
+    trajectory: traj.ok ? traj.trajectory : null,
+    decisions,
+    evidence: [],
+    blockingReservationStatements: [],
+  }).filter((r) => r.intent === "FINALIZE_CURRENT_CYCLE");
+}
+
+// ─── LC-B-03 / 05 / 06 — post-ACW LR order via orchestrateTurn ───────────────
+
+describe("LC-B Phase B — post-ACW LR materialization (D-LC-01)", () => {
+  it("LC-B-03/05/06 — ACW+FINALIZE same turn: LR binds post-ACW LPS / CURRENT; one Agents call; no HD", async () => {
+    const s = await seedStarted("acw-lr");
+    const beforeLps =
+      await s.oa.projectServices.getCurrentLivingProjectState.execute({
+        projectId: s.projectId,
+      });
+    expect(beforeLps.ok).toBe(true);
+    if (!beforeLps.ok) return;
+    const lpsBefore = beforeLps.livingProjectState.version;
+    const hdBefore = await s.oa.decisionServices.decisions.listByProject(
+      s.projectId,
+    );
+    const cyclesBefore = await s.oa.cycleServices.cycles.listByProject(
+      s.projectId,
+    );
+
+    const dto = await projectDtoFromOa(s.oa, s.projectId);
+    const composed = await composeStudioCognitiveContext({
+      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
+      project: dto,
+      registryRoot: PRODUCT_REGISTRY,
+      oa: s.oa,
+    });
+    expect(composed.ok).toBe(true);
+    if (!composed.ok) throw new Error(composed.code);
+
+    const payload = {
+      narrative: "Travail in-cycle puis recommandation de finalisation.",
+      preCycleRoutingAssessment: { ...ACW_DEFER_ASSESSMENT },
+      lifecycleRecommendation: finalizeCandidate(s.cycle.cycleInstanceId),
+      activeCycleWork: {
+        items: [
+          {
+            type: "Observation",
+            statement: "Observation ACW same-turn pour bump LPS.",
+            confidence: "high",
+            blocking: false,
+          },
+        ],
+      },
+    };
+    const spy = vi.spyOn(runNoraAgentsTurnMod, "runNoraAgentsTurn");
+    const scripted = new ScriptedModel([
+      [assistantMessage(JSON.stringify(payload))],
+    ]);
+
+    const result = await orchestrateProjectAssistantTurn({
+      projectId: s.projectId,
+      content: "Peux-tu avancer puis recommander la finalisation?",
+      sessionDbPath: tempDbPath("acw-lr-sess.sqlite"),
+      simulateMemoryBUnavailable: true,
+      provider: new FakeConversationProvider({ scripted: ["unused"] }),
+      studioCognitiveContext: composed.context,
+      evalModelReasoningControl: {
+        modelId: "gpt-5.6-luna",
+        reasoningEffort: "none",
+        agentsModel: scripted,
+      },
+    });
+
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.lifecycleRecommendationMaterialized).toBe(true);
+    expect(spy).toHaveBeenCalledTimes(1);
+
+    const afterLps =
+      await s.oa.projectServices.getCurrentLivingProjectState.execute({
+        projectId: s.projectId,
+      });
+    expect(afterLps.ok).toBe(true);
+    if (!afterLps.ok) return;
+    expect(afterLps.livingProjectState.version).toBeGreaterThan(lpsBefore);
+
+    const current = await currentFinalizeLr(s.oa, s.projectId);
+    expect(current).toHaveLength(1);
+    expect(current[0]!.derivedCurrentness).toBe("CURRENT");
+    expect(current[0]!.basisRefs.lpsVersion).toBe(
+      afterLps.livingProjectState.version,
+    );
+    expect(current[0]!.basisRefs.lpsVersion).toBeGreaterThan(lpsBefore);
+
+    const hdAfter = await s.oa.decisionServices.decisions.listByProject(
+      s.projectId,
+    );
+    expect(hdAfter.length).toBe(hdBefore.length);
+    const cyclesAfter = await s.oa.cycleServices.cycles.listByProject(
+      s.projectId,
+    );
+    expect(cyclesAfter.map((c) => c.status)).toEqual(
+      cyclesBefore.map((c) => c.status),
+    );
+  });
+
+  it("LC-B-04 — later material LPS bump still makes FINALIZE LR STALE", async () => {
+    const s = await seedStarted("stale-later");
+    const dto = await projectDtoFromOa(s.oa, s.projectId);
+    const composed = await composeStudioCognitiveContext({
+      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
+      project: dto,
+      registryRoot: PRODUCT_REGISTRY,
+      oa: s.oa,
+    });
+    expect(composed.ok).toBe(true);
+    if (!composed.ok) throw new Error(composed.code);
+
+    const payload = {
+      narrative: "Finalize now.",
+      preCycleRoutingAssessment: { ...ACW_DEFER_ASSESSMENT },
+      lifecycleRecommendation: finalizeCandidate(s.cycle.cycleInstanceId),
+      activeCycleWork: {
+        items: [
+          {
+            type: "Observation",
+            statement: "ACW for first LPS bump.",
+            confidence: "medium",
+            blocking: false,
+          },
+        ],
+      },
+    };
+    const turn = await orchestrateProjectAssistantTurn({
+      projectId: s.projectId,
+      content: "Finalize?",
+      sessionDbPath: tempDbPath("stale-later-sess.sqlite"),
+      simulateMemoryBUnavailable: true,
+      provider: new FakeConversationProvider({ scripted: ["unused"] }),
+      studioCognitiveContext: composed.context,
+      evalModelReasoningControl: {
+        modelId: "gpt-5.6-luna",
+        reasoningEffort: "none",
+        agentsModel: new ScriptedModel([
+          [assistantMessage(JSON.stringify(payload))],
+        ]),
+      },
+    });
+    expect(turn.ok).toBe(true);
+    if (!turn.ok) return;
+    expect(turn.lifecycleRecommendationMaterialized).toBe(true);
+
+    const lps =
+      await s.oa.projectServices.getCurrentLivingProjectState.execute({
+        projectId: s.projectId,
+      });
+    expect(lps.ok).toBe(true);
+    if (!lps.ok) return;
+    const bumped = await s.oa.projectServices.appendLivingProjectStateVersion.execute({
+      projectId: s.projectId,
+      expectedVersion: lps.livingProjectState.version,
+      objective: `${lps.livingProjectState.objective} [later bump]`,
+      createdBy: ACTOR,
+    });
+    expect(bumped.ok).toBe(true);
+
+    const current = await currentFinalizeLr(s.oa, s.projectId);
+    expect(current).toHaveLength(0);
+    const items = await s.oa.cycleServices.epistemic.listByProject(s.projectId);
+    const lr = items.find(
+      (i) =>
+        i.source === "lifecycle-recommendation:nora" &&
+        i.lifecycleRecommendation?.intent === "FINALIZE_CURRENT_CYCLE",
+    );
+    expect(lr).toBeTruthy();
+  });
+});
+
+// ─── LC-B-07 — dual-intent FINALIZE wins ─────────────────────────────────────
+
+describe("LC-B Phase B — dual-intent (D-LC-04)", () => {
+  it("LC-B-07 — FINALIZE validator clears targetCycleTypeId (NEXT_CYCLE payload ignored)", async () => {
+    const stack = buildStack(tempDbPath("dual.sqlite"));
+    await seedProject(stack.project, "prj:lcb-dual");
+    await seedTrajectory(stack.cycles, stack.project, "prj:lcb-dual");
+    await createCandidate(stack.cycles, "prj:lcb-dual", "cyc:lcb-dual");
+    const ev = await registerPilotAuth(stack.authority, "cyc:lcb-dual");
+    await stack.cycles.pilotLifecycle.start({
+      cycleInstanceId: "cyc:lcb-dual",
+      projectId: "prj:lcb-dual",
+      createdBy: PILOTE,
+      authorityEvidenceId: ev,
+    });
+    const cycles = await stack.cycles.cycles.listByProject("prj:lcb-dual");
+    const lps = await stack.project.getCurrentLivingProjectState.execute({
+      projectId: "prj:lcb-dual",
+    });
+    expect(lps.ok).toBe(true);
+    if (!lps.ok) return;
+
+    const validated = validateLifecycleRecommendation({
+      projectId: "prj:lcb-dual",
+      candidate: {
+        intent: "FINALIZE_CURRENT_CYCLE",
+        statement: "Finaliser maintenant malgré next-cycle cible.",
+        subjectCycleInstanceId: "cyc:lcb-dual",
+        targetCycleInstanceId: null,
+        targetCycleTypeId: "cyc:functional-design",
+      },
+      cycles,
+      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
+    });
+    expect(validated.ok).toBe(true);
+    if (!validated.ok) return;
+    expect(validated.intent).toBe("FINALIZE_CURRENT_CYCLE");
+    expect(validated.targetCycleTypeId).toBeNull();
+    expect(validated.targetCycleInstanceId).toBeNull();
+    expect(validated.subjectCycleInstanceId).toBe("cyc:lcb-dual");
+  });
+});
+
+// ─── LC-B-10 / 13–15 / 16–17 / 18–22 — domain + Product actions ──────────────
+
+describe("LC-B Phase B — assess / policy / blockers / finalize", () => {
+  it("LC-B-10 — ASSESS creates no HumanDecision", async () => {
+    const stack = buildStack(tempDbPath("assess.sqlite"));
+    await seedProject(stack.project, "prj:lcb-assess");
+    await seedTrajectory(stack.cycles, stack.project, "prj:lcb-assess");
+    await createCandidate(stack.cycles, "prj:lcb-assess", "cyc:lcb-assess");
+    const ev = await registerPilotAuth(stack.authority, "cyc:lcb-assess");
+    await stack.cycles.pilotLifecycle.start({
+      cycleInstanceId: "cyc:lcb-assess",
+      projectId: "prj:lcb-assess",
+      createdBy: PILOTE,
+      authorityEvidenceId: ev,
+    });
+    const before = await stack.decisions.decisions.listByProject("prj:lcb-assess");
+    const assessed = await stack.cycles.pilotLifecycle.assess({
+      cycleInstanceId: "cyc:lcb-assess",
+      projectId: "prj:lcb-assess",
+    });
+    expect(assessed.ok).toBe(true);
+    const after = await stack.decisions.decisions.listByProject("prj:lcb-assess");
+    expect(after.length).toBe(before.length);
+  });
+
+  it("LC-B-13/14 — opt:no-governed-effects records one HD, no auto finalize", async () => {
+    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
+    const stack = buildStack(tempDbPath("policy.sqlite"));
+    await seedProject(stack.project, "prj:lcb-pol");
+    await seedTrajectory(stack.cycles, stack.project, "prj:lcb-pol");
+    await createCandidate(stack.cycles, "prj:lcb-pol", "cyc:lcb-pol");
+    const ev = await registerPilotAuth(stack.authority, "cyc:lcb-pol");
+    await stack.cycles.pilotLifecycle.start({
+      cycleInstanceId: "cyc:lcb-pol",
+      projectId: "prj:lcb-pol",
+      createdBy: PILOTE,
+      authorityEvidenceId: ev,
+    });
+    const before = await stack.decisions.decisions.listByProject("prj:lcb-pol");
+    const recorded = await recordObligationPolicyNoGovernedEffects({
+      projectId: "prj:lcb-pol",
+      cycleInstanceId: "cyc:lcb-pol",
+      cycleServices: stack.cycles,
+      decisionServices: stack.decisions,
+      authorityResolver: stack.authority,
+      nowIso: () => "2026-09-10T20:00:00.000Z",
+    });
+    expect(recorded.ok).toBe(true);
+    if (!recorded.ok) return;
+    const after = await stack.decisions.decisions.listByProject("prj:lcb-pol");
+    expect(after.length).toBe(before.length + 1);
+    const policy = after.find(
+      (d) => d.subject === obligationPolicySubjectFor("cyc:lcb-pol"),
+    );
+    expect(policy?.selectedOptionId).toBe(OBLIGATION_POLICY_NO_GOVERNED_EFFECTS);
+    const cycle = await stack.cycles.getCycle.execute({
+      cycleInstanceId: "cyc:lcb-pol",
+    });
+    expect(cycle.ok && cycle.cycle.status).toBe("active");
+    expect(recorded.assessment.canComplete).toBe(false);
+  });
+
+  it("LC-B-15 — APPLICABLE governed-effect family contradicts grouped N/A", async () => {
+    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
+    const stack = buildStack(tempDbPath("contra.sqlite"));
+    await seedProject(stack.project, "prj:lcb-contra");
+    await seedTrajectory(stack.cycles, stack.project, "prj:lcb-contra");
+    await createCandidate(stack.cycles, "prj:lcb-contra", "cyc:lcb-contra");
+    const ev = await registerPilotAuth(stack.authority, "cyc:lcb-contra");
+    await stack.cycles.pilotLifecycle.start({
+      cycleInstanceId: "cyc:lcb-contra",
+      projectId: "prj:lcb-contra",
+      createdBy: PILOTE,
+      authorityEvidenceId: ev,
+    });
+    await recordObligationPolicy({
+      decisions: stack.decisions,
+      authority: stack.authority,
+      projectId: "prj:lcb-contra",
+      cycleInstanceId: "cyc:lcb-contra",
+      decisionId: "dec:lcb-require-art",
+      evidenceId: ev,
+      selectedOptionId: OBLIGATION_POLICY_REQUIRE_ARTIFACT,
+    });
+    const refused = await recordObligationPolicyNoGovernedEffects({
+      projectId: "prj:lcb-contra",
+      cycleInstanceId: "cyc:lcb-contra",
+      cycleServices: stack.cycles,
+      decisionServices: stack.decisions,
+      authorityResolver: stack.authority,
+      nowIso: () => "2026-09-10T20:00:00.000Z",
+    });
+    expect(refused.ok).toBe(false);
+    if (refused.ok) return;
+    expect(refused.code).toBe("OBLIGATION_POLICY_CONTRADICTED");
+  });
+
+  it("LC-B-16 — completeBoundActiveTrajectoryStep removes exit_criteria_open", async () => {
+    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
+    const s = await seedStarted("exit");
+    const before = await s.oa.cycleServices.pilotLifecycle.assess({
+      cycleInstanceId: s.cycle.cycleInstanceId,
+      projectId: s.projectId,
+    });
+    expect(before.ok).toBe(true);
+    if (!before.ok) return;
+    expect(before.assessment.blockers).toContain("exit_criteria_open");
+
+    const closed = await completeBoundTrajectoryStepAction({
+      projectId: s.projectId,
+      cycleInstanceId: s.cycle.cycleInstanceId,
+      cycleServices: s.oa.cycleServices,
+      authorityResolver: s.oa.authorityResolver,
+      nowIso: () => "2026-09-10T20:00:00.000Z",
+    });
+    expect(closed.ok).toBe(true);
+    if (!closed.ok) return;
+    expect(closed.assessment.blockers).not.toContain("exit_criteria_open");
+  });
+
+  it("LC-B-17 — resolve blocking reservation removes blocking_reservations", async () => {
+    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
+    const s = await seedStarted("rsv");
+    const epi = await s.oa.cycleServices.updateEpistemicState.execute({
+      projectId: s.projectId,
+      createdBy: ACTOR,
+      items: [
+        {
+          epistemicItemId: "epi:lcb-block-rsv",
+          type: "Reservation",
+          statement: "Deadline definition still open",
+          status: "active",
+          blocking: true,
+        },
+      ],
+    });
+    expect(epi.ok).toBe(true);
+    const before = await s.oa.cycleServices.pilotLifecycle.assess({
+      cycleInstanceId: s.cycle.cycleInstanceId,
+      projectId: s.projectId,
+    });
+    expect(before.ok).toBe(true);
+    if (!before.ok) return;
+    expect(before.assessment.blockers).toContain("blocking_reservations");
+
+    const resolved = await resolveBlockingReservationAction({
+      projectId: s.projectId,
+      cycleInstanceId: s.cycle.cycleInstanceId,
+      epistemicItemId: "epi:lcb-block-rsv",
+      cycleServices: s.oa.cycleServices,
+      authorityResolver: s.oa.authorityResolver,
+      nowIso: () => "2026-09-10T20:00:00.000Z",
+    });
+    expect(resolved.ok).toBe(true);
+    if (!resolved.ok) return;
+    expect(resolved.assessment.blockers).not.toContain("blocking_reservations");
+  });
+
+  it("LC-B-18 — only finalize HD missing → readyExceptFinalize true", async () => {
+    const stack = buildStack(tempDbPath("ready.sqlite"));
+    await seedProject(stack.project, "prj:lcb-ready");
+    await seedTrajectory(stack.cycles, stack.project, "prj:lcb-ready");
+    await createCandidate(stack.cycles, "prj:lcb-ready", "cyc:lcb-ready");
+    const ev = await registerPilotAuth(stack.authority, "cyc:lcb-ready");
+    await stack.cycles.pilotLifecycle.start({
+      cycleInstanceId: "cyc:lcb-ready",
+      projectId: "prj:lcb-ready",
+      createdBy: PILOTE,
+      authorityEvidenceId: ev,
+    });
+    await recordObligationPolicy({
+      decisions: stack.decisions,
+      authority: stack.authority,
+      projectId: "prj:lcb-ready",
+      cycleInstanceId: "cyc:lcb-ready",
+      decisionId: "dec:lcb-ready-pol",
+      evidenceId: ev,
+      selectedOptionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
+    });
+    const assessed = await stack.cycles.pilotLifecycle.assess({
+      cycleInstanceId: "cyc:lcb-ready",
+      projectId: "prj:lcb-ready",
+    });
+    expect(assessed.ok).toBe(true);
+    if (!assessed.ok) return;
+    expect(assessed.assessment.canComplete).toBe(false);
+    expect(assessed.assessment.blockers).toContain(FINALIZE_HD_BLOCKER);
+    expect(readyExceptFinalizeDecision(assessed.assessment)).toBe(true);
+
+    const cycles = await stack.cycles.cycles.listByProject("prj:lcb-ready");
+    const lps = await stack.project.getCurrentLivingProjectState.execute({
+      projectId: "prj:lcb-ready",
+    });
+    const projection = projectPilotLifecycle({
+      projectId: "prj:lcb-ready",
+      cycles,
+      lpsActiveCycleInstanceId: lps.ok
+        ? lps.livingProjectState.activeCycleInstanceId
+        : null,
+      assessment: assessed.assessment,
+      currentRecommendations: [
+        fakeFinalizeEnvelope("prj:lcb-ready", "cyc:lcb-ready"),
+      ],
+    });
+    const cta = lifecycleCtaPresentation(projection);
+    expect(cta.readyExceptFinalize).toBe(true);
+    expect(cta.finalizeEnabled).toBe(true);
+    expect(cta.showAssess).toBe(false);
+  });
+
+  it("LC-B-19/20/21 — explicit finalize completes + clears LPS activeCycleInstanceId + reload", async () => {
+    const dbPath = tempDbPath("fin.sqlite");
+    const stack = buildStack(dbPath);
+    await seedProject(stack.project, "prj:lcb-fin");
+    await seedTrajectory(stack.cycles, stack.project, "prj:lcb-fin");
+    await createCandidate(stack.cycles, "prj:lcb-fin", "cyc:lcb-fin");
+    const ev = await registerPilotAuth(stack.authority, "cyc:lcb-fin");
+    await stack.cycles.pilotLifecycle.start({
+      cycleInstanceId: "cyc:lcb-fin",
+      projectId: "prj:lcb-fin",
+      createdBy: PILOTE,
+      authorityEvidenceId: ev,
+    });
+    await recordObligationPolicy({
+      decisions: stack.decisions,
+      authority: stack.authority,
+      projectId: "prj:lcb-fin",
+      cycleInstanceId: "cyc:lcb-fin",
+      decisionId: "dec:lcb-fin-pol",
+      evidenceId: ev,
+      selectedOptionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
+    });
+    await recordHd({
+      decisions: stack.decisions,
+      authority: stack.authority,
+      projectId: "prj:lcb-fin",
+      cycleInstanceId: "cyc:lcb-fin",
+      subject: finalizeSubjectFor("cyc:lcb-fin"),
+      decisionId: "dec:lcb-fin-hd",
+      evidenceId: ev,
+    });
+    const finalized = await stack.cycles.pilotLifecycle.finalize({
+      cycleInstanceId: "cyc:lcb-fin",
+      projectId: "prj:lcb-fin",
+      createdBy: PILOTE,
+      decisionId: "dec:lcb-fin-hd",
+      authorityEvidenceId: ev,
+    });
+    expect(finalized.ok).toBe(true);
+    if (!finalized.ok) return;
+    expect(finalized.assessment?.canComplete).toBe(true);
+    expect(finalized.cycle.status).toBe("completed");
+    expect(finalized.activeCycleInstanceId).toBeNull();
+
+    const lps = await stack.project.getCurrentLivingProjectState.execute({
+      projectId: "prj:lcb-fin",
+    });
+    expect(lps.ok).toBe(true);
+    if (!lps.ok) return;
+    expect(lps.livingProjectState.activeCycleInstanceId).toBeUndefined();
+
+    // Reload parity — reopen same sqlite via fresh stack binding.
+    stack.project.dispose();
+    openServices.pop();
+    const reopened = buildStack(dbPath);
+    const cycle = await reopened.cycles.getCycle.execute({
+      cycleInstanceId: "cyc:lcb-fin",
+    });
+    expect(cycle.ok && cycle.cycle.status).toBe("completed");
+    const lps2 = await reopened.project.getCurrentLivingProjectState.execute({
+      projectId: "prj:lcb-fin",
+    });
+    expect(lps2.ok).toBe(true);
+    if (!lps2.ok) return;
+    expect(lps2.livingProjectState.activeCycleInstanceId).toBeUndefined();
+  });
+
+  it("LC-B-22 — incomplete finalize returns canComplete false; cycle stays active", async () => {
+    const stack = buildStack(tempDbPath("inc.sqlite"));
+    await seedProject(stack.project, "prj:lcb-inc");
+    await seedTrajectory(
+      stack.cycles,
+      stack.project,
+      "prj:lcb-inc",
+      STEPS_PENDING,
+    );
+    await createCandidate(stack.cycles, "prj:lcb-inc", "cyc:lcb-inc");
+    const ev = await registerPilotAuth(stack.authority, "cyc:lcb-inc");
+    await stack.cycles.pilotLifecycle.start({
+      cycleInstanceId: "cyc:lcb-inc",
+      projectId: "prj:lcb-inc",
+      createdBy: PILOTE,
+      authorityEvidenceId: ev,
+    });
+    await recordObligationPolicy({
+      decisions: stack.decisions,
+      authority: stack.authority,
+      projectId: "prj:lcb-inc",
+      cycleInstanceId: "cyc:lcb-inc",
+      decisionId: "dec:lcb-inc-pol",
+      evidenceId: ev,
+      selectedOptionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
+    });
+    await recordHd({
+      decisions: stack.decisions,
+      authority: stack.authority,
+      projectId: "prj:lcb-inc",
+      cycleInstanceId: "cyc:lcb-inc",
+      subject: finalizeSubjectFor("cyc:lcb-inc"),
+      decisionId: "dec:lcb-inc-hd",
+      evidenceId: ev,
+    });
+    const incomplete = await stack.cycles.pilotLifecycle.finalize({
+      cycleInstanceId: "cyc:lcb-inc",
+      projectId: "prj:lcb-inc",
+      createdBy: PILOTE,
+      decisionId: "dec:lcb-inc-hd",
+      authorityEvidenceId: ev,
+    });
+    expect(incomplete.ok).toBe(true);
+    if (!incomplete.ok) return;
+    expect(incomplete.assessment?.canComplete).toBe(false);
+    expect(incomplete.assessment?.blockers).toContain("exit_criteria_open");
+    expect(incomplete.cycle.status).toBe("active");
+  });
+
+  it("LC-B-09/11 — projection assessment + CTA honesty when blockers remain", async () => {
+    const stack = buildStack(tempDbPath("cta.sqlite"));
+    await seedProject(stack.project, "prj:lcb-cta");
+    await seedTrajectory(
+      stack.cycles,
+      stack.project,
+      "prj:lcb-cta",
+      STEPS_PENDING,
+    );
+    await createCandidate(stack.cycles, "prj:lcb-cta", "cyc:lcb-cta");
+    const ev = await registerPilotAuth(stack.authority, "cyc:lcb-cta");
+    await stack.cycles.pilotLifecycle.start({
+      cycleInstanceId: "cyc:lcb-cta",
+      projectId: "prj:lcb-cta",
+      createdBy: PILOTE,
+      authorityEvidenceId: ev,
+    });
+    const assessed = await stack.cycles.pilotLifecycle.assess({
+      cycleInstanceId: "cyc:lcb-cta",
+      projectId: "prj:lcb-cta",
+    });
+    expect(assessed.ok).toBe(true);
+    if (!assessed.ok) return;
+    expect(assessed.assessment).toBeTruthy();
+    expect(assessed.assessment.blockers.length).toBeGreaterThan(0);
+
+    const cycles = await stack.cycles.cycles.listByProject("prj:lcb-cta");
+    const lps = await stack.project.getCurrentLivingProjectState.execute({
+      projectId: "prj:lcb-cta",
+    });
+    const projection = projectPilotLifecycle({
+      projectId: "prj:lcb-cta",
+      cycles,
+      lpsActiveCycleInstanceId: lps.ok
+        ? lps.livingProjectState.activeCycleInstanceId
+        : null,
+      assessment: assessed.assessment,
+    });
+    expect(projection.assessment).toBeTruthy();
+    const cta = lifecycleCtaPresentation(projection);
+    expect(cta.readyExceptFinalize).toBe(false);
+    expect(cta.finalizeEnabled).toBe(false);
+    expect(cta.showAssess).toBe(true);
+  });
+});
```

## FILE: projects/sfia-studio/app/__tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx

```diff
commit 4a80965a5f1687f805544c56be66e5d2ead3ea29
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Sep 10 22:33:06 2026 +0200

    fix(sfia-studio): complete governed lifecycle closure

    Same-lot Phase B: post-ACW LR currentness, cross-surface refresh,
    ASSESS→FINALIZE honesty, obligation-policy wiring, and explicit
    trajectory/reservation resolution without weakening fail-closed.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx
new file mode 100644
index 00000000..0faf2e4e
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx
@@ -0,0 +1,262 @@
+/**
+ * Lifecycle Closure Phase B — presentation helpers + LifecycleSurface refresh.
+ * ZERO REAL — mocked server actions only.
+ * @vitest-environment jsdom
+ */
+import { cleanup, render, waitFor } from "@testing-library/react";
+import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
+import { LifecycleSurface } from "@/features/pre-m6-product-ui/surfaces/LifecycleSurface";
+import type {
+  FinalizationAssessment,
+  LifecycleRecommendationEnvelope,
+  PilotLifecycleProjection,
+} from "@/lib/oa/cycle";
+import {
+  canOfferGroupedNoGovernedEffects,
+  lifecycleCtaPresentation,
+  lifecycleStatusBadge,
+  nonHumanDecisionBlockers,
+  readyExceptFinalizeDecision,
+  FINALIZE_HD_BLOCKER,
+  blockerLabel,
+} from "@/features/pre-m6-product-ui/surfaces/lifecyclePresentation";
+
+function fakeFinalizeEnvelope(): LifecycleRecommendationEnvelope {
+  return {
+    recommendationId: "epi:lr",
+    projectId: "prj:ui",
+    intent: "FINALIZE_CURRENT_CYCLE",
+    subjectCycleInstanceId: "cyc:ui",
+    targetCycleInstanceId: null,
+    targetCycleTypeId: null,
+    producer: "nora",
+    producedAt: "2026-09-10T20:00:00.000Z",
+    statement: "Finaliser",
+    basisFingerprint: "fp:test",
+    basisRefs: {
+      projectId: "prj:ui",
+      subjectCycleInstanceId: "cyc:ui",
+      subjectCycleStatus: "active",
+      lpsActiveCycleInstanceId: "cyc:ui",
+    },
+    semanticKey: "sk:finalize",
+    authority: "none",
+    isHumanDecision: false,
+    doesNotActivateCycle: true,
+    doesNotFinalize: true,
+    doesNotCreateHumanDecision: true,
+    epistemicStatus: "active",
+    supersedesRecommendationId: null,
+    derivedCurrentness: "CURRENT",
+  };
+}
+
+const { projectionMock } = vi.hoisted(() => ({
+  projectionMock: vi.fn(),
+}));
+
+vi.mock("@/features/project-assistant/actions", () => ({
+  projectAssistantPilotLifecycleProjection: (...args: unknown[]) =>
+    projectionMock(...args),
+  projectAssistantPilotLifecycleAction: vi.fn(),
+  projectAssistantRecordObligationPolicyAction: vi.fn(),
+  projectAssistantCompleteTrajectoryStepAction: vi.fn(),
+  projectAssistantResolveBlockingReservationAction: vi.fn(),
+}));
+
+vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
+  projectAssistantPrepareCandidateTrajectoryAction: vi.fn(),
+}));
+
+afterEach(() => {
+  cleanup();
+});
+
+beforeEach(() => {
+  projectionMock.mockReset();
+});
+
+function assessment(
+  overrides: Partial<FinalizationAssessment> &
+    Pick<FinalizationAssessment, "blockers" | "canComplete" | "obligations">,
+): FinalizationAssessment {
+  return {
+    cycleInstanceId: "cyc:ui",
+    projectId: "prj:ui",
+    finalizeDecisionId: null,
+    finalizeAccepted: false,
+    assessedAt: "2026-09-10T20:00:00.000Z",
+    ...overrides,
+  };
+}
+
+function baseProjection(
+  overrides?: Partial<PilotLifecycleProjection>,
+): PilotLifecycleProjection {
+  return {
+    projectId: "prj:ui",
+    activeCycleInstanceId: "cyc:ui",
+    activeCycle: null,
+    pausedCycles: [],
+    candidateCycles: [],
+    supersededCycles: [],
+    terminalCycles: [],
+    selectedCycleInstanceId: "cyc:ui",
+    selectedStatus: "active",
+    selectionAmbiguous: false,
+    assessment: null,
+    cta: {
+      canStart: false,
+      canPause: true,
+      canResume: false,
+      canFinalize: true,
+      canCancel: true,
+    },
+    currentRecommendations: [],
+    ...overrides,
+  };
+}
+
+describe("LC-B Phase B — lifecyclePresentation helpers (D-LC-02/03)", () => {
+  it("LC-B-18 unit — readyExceptFinalize when only finalize HD blocker remains", () => {
+    const a = assessment({
+      canComplete: false,
+      blockers: [FINALIZE_HD_BLOCKER],
+      obligations: [
+        {
+          family: "human_decision",
+          status: "MISSING",
+          blocking: true,
+        },
+      ],
+    });
+    expect(nonHumanDecisionBlockers(a)).toEqual([]);
+    expect(readyExceptFinalizeDecision(a)).toBe(true);
+    expect(blockerLabel(FINALIZE_HD_BLOCKER)).toContain("Pilote");
+  });
+
+  it("LC-B-11 unit — non-HD blockers disable readyExceptFinalize", () => {
+    const a = assessment({
+      canComplete: false,
+      blockers: ["exit_criteria_open", FINALIZE_HD_BLOCKER],
+      obligations: [
+        { family: "exit_criteria", status: "BLOCKING", blocking: true },
+      ],
+    });
+    expect(readyExceptFinalizeDecision(a)).toBe(false);
+    expect(nonHumanDecisionBlockers(a)).toEqual(["exit_criteria_open"]);
+  });
+
+  it("LC-B-13 unit — canOfferGroupedNoGovernedEffects when UNKNOWN families", () => {
+    const a = assessment({
+      canComplete: false,
+      blockers: ["artifact_applicability_unknown"],
+      obligations: [
+        {
+          family: "artifact",
+          status: "PENDING",
+          applicability: "UNKNOWN",
+          blocking: true,
+        },
+        {
+          family: "evidence",
+          status: "PENDING",
+          applicability: "UNKNOWN",
+          blocking: true,
+        },
+      ],
+    });
+    expect(canOfferGroupedNoGovernedEffects(a)).toBe(true);
+  });
+
+  it("LC-B-15 unit — APPLICABLE family blocks grouped N/A offer", () => {
+    const a = assessment({
+      canComplete: false,
+      blockers: ["artifact_missing"],
+      obligations: [
+        {
+          family: "artifact",
+          status: "MISSING",
+          applicability: "APPLICABLE",
+          blocking: true,
+        },
+      ],
+    });
+    expect(canOfferGroupedNoGovernedEffects(a)).toBe(false);
+  });
+
+  it("CTA honesty — Finaliser enabled only when readyExceptFinalize", () => {
+    const ready = baseProjection({
+      assessment: assessment({
+        canComplete: false,
+        blockers: [FINALIZE_HD_BLOCKER],
+        obligations: [],
+      }),
+      currentRecommendations: [fakeFinalizeEnvelope()],
+    });
+    const ctaReady = lifecycleCtaPresentation(ready);
+    expect(ctaReady.finalizeEnabled).toBe(true);
+    expect(ctaReady.showFinalizePrimary).toBe(true);
+    expect(ctaReady.showAssess).toBe(false);
+    expect(lifecycleStatusBadge(ready).status).toBe("ready_finalize");
+
+    const blocked = baseProjection({
+      assessment: assessment({
+        canComplete: false,
+        blockers: ["blocking_reservations", FINALIZE_HD_BLOCKER],
+        obligations: [],
+      }),
+    });
+    const ctaBlocked = lifecycleCtaPresentation(blocked);
+    expect(ctaBlocked.finalizeEnabled).toBe(false);
+    expect(ctaBlocked.showAssess).toBe(true);
+    expect(lifecycleStatusBadge(blocked).status).toBe("finalization_open");
+  });
+});
+
+describe("LC-B-01 — LifecycleSurface durableRefreshSignal", () => {
+  it("bumps durableRefreshSignal → re-fetches projection (no full remount required)", async () => {
+    const candidate = baseProjection({
+      selectedCycleInstanceId: null,
+      selectedStatus: null,
+      activeCycleInstanceId: null,
+      cta: {
+        canStart: true,
+        canPause: false,
+        canResume: false,
+        canFinalize: false,
+        canCancel: false,
+      },
+    });
+    const active = baseProjection({
+      selectedStatus: "active",
+      activeCycleInstanceId: "cyc:ui",
+      selectedCycleInstanceId: "cyc:ui",
+    });
+
+    projectionMock
+      .mockResolvedValueOnce({
+        ok: true,
+        projection: candidate,
+      })
+      .mockResolvedValueOnce({
+        ok: true,
+        projection: active,
+      });
+
+    const { rerender } = render(
+      <LifecycleSurface projectId="prj:ui" durableRefreshSignal={0} />,
+    );
+
+    await waitFor(() => {
+      expect(projectionMock).toHaveBeenCalledTimes(1);
+    });
+
+    rerender(<LifecycleSurface projectId="prj:ui" durableRefreshSignal={1} />);
+
+    await waitFor(() => {
+      expect(projectionMock).toHaveBeenCalledTimes(2);
+    });
+    expect(projectionMock).toHaveBeenLastCalledWith({ projectId: "prj:ui" });
+  });
+});
```

## FILE: projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx

```diff
commit 4a80965a5f1687f805544c56be66e5d2ead3ea29
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Sep 10 22:33:06 2026 +0200

    fix(sfia-studio): complete governed lifecycle closure

    Same-lot Phase B: post-ACW LR currentness, cross-surface refresh,
    ASSESS→FINALIZE honesty, obligation-policy wiring, and explicit
    trajectory/reservation resolution without weakening fail-closed.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index 05b1369f..5c03c2ed 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -27,6 +27,8 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
   const [lpsOpen, setLpsOpen] = useState(false);
   const [recoveryProposeSignal, setRecoveryProposeSignal] = useState(0);
   const [trajectoryRefreshSignal, setTrajectoryRefreshSignal] = useState(0);
+  /** B1 — bump so LifecycleSurface reloads after Trajectory (or other) durable mutations. */
+  const [lifecycleRefreshSignal, setLifecycleRefreshSignal] = useState(0);
   const conversationRef = useRef<HTMLDivElement | null>(null);
   const refreshInFlight = useRef(false);

@@ -41,6 +43,12 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
     }
   }, [projectId]);

+  const notifyDurableFactsChanged = useCallback(() => {
+    void loadProject();
+    setTrajectoryRefreshSignal((n) => n + 1);
+    setLifecycleRefreshSignal((n) => n + 1);
+  }, [loadProject]);
+
   useEffect(() => {
     let cancelled = false;
     void getProjectRuntimeAction(projectId).then((next) => {
@@ -72,9 +80,7 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {

   const controller = useProductConversation({
     projectId,
-    onDurableFactsChanged: () => {
-      void loadProject();
-    },
+    onDurableFactsChanged: notifyDurableFactsChanged,
     onDurableEvidenceOutcomeChange: setDurableOutcome,
   });

@@ -196,10 +202,8 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
               >
                 <LifecycleSurface
                   projectId={projectId}
-                  onDurableFactsChanged={() => {
-                    void loadProject();
-                    setTrajectoryRefreshSignal((n) => n + 1);
-                  }}
+                  durableRefreshSignal={lifecycleRefreshSignal}
+                  onDurableFactsChanged={notifyDurableFactsChanged}
                   onEscalateTrajectory={() => {
                     const el = document.querySelector(
                       "[data-testid='w2-trajectory-panel']",
@@ -215,10 +219,7 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
                   composition="lps-embedded"
                   recoveryProposeSignal={recoveryProposeSignal}
                   durableRefreshSignal={trajectoryRefreshSignal}
-                  onDurableFactsChanged={() => {
-                    void loadProject();
-                    setTrajectoryRefreshSignal((n) => n + 1);
-                  }}
+                  onDurableFactsChanged={notifyDurableFactsChanged}
                 />
               </div>
             </section>
```

## FILE: projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx

```diff
commit 4a80965a5f1687f805544c56be66e5d2ead3ea29
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Sep 10 22:33:06 2026 +0200

    fix(sfia-studio): complete governed lifecycle closure

    Same-lot Phase B: post-ACW LR currentness, cross-surface refresh,
    ASSESS→FINALIZE honesty, obligation-policy wiring, and explicit
    trajectory/reservation resolution without weakening fail-closed.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
index 29128d53..d40c9131 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
@@ -2,17 +2,25 @@

 import { useCallback, useEffect, useState } from "react";
 import {
+  projectAssistantCompleteTrajectoryStepAction,
   projectAssistantPilotLifecycleAction,
   projectAssistantPilotLifecycleProjection,
+  projectAssistantRecordObligationPolicyAction,
+  projectAssistantResolveBlockingReservationAction,
 } from "@/features/project-assistant/actions";
 import { projectAssistantPrepareCandidateTrajectoryAction } from "@/features/project-assistant/preCycleCandidateTrajectoryActions";
 import type { PilotLifecycleProjection } from "@/lib/oa/cycle";
 import { SFIA_ASSISTANT_ANSWERED_EVENT } from "@/features/project-assistant/presentationLabels";
 import {
+  blockerLabel,
   lifecycleCtaPresentation,
   lifecycleStatusBadge,
+  nonHumanDecisionBlockers,
+  obligationFamilyLabel,
+  obligationStatusLabel,
   primaryFinalizeRecommendation,
   primaryNextCycleRecommendation,
+  readyExceptFinalizeDecision,
 } from "./lifecyclePresentation";
 import styles from "./LifecycleSurface.module.css";

@@ -22,10 +30,13 @@ import styles from "./LifecycleSurface.module.css";
  */
 export function LifecycleSurface({
   projectId,
+  durableRefreshSignal = 0,
   onDurableFactsChanged,
   onEscalateTrajectory,
 }: {
   projectId: string;
+  /** B1 — parent bumps after Trajectory (or other) durable mutations. */
+  durableRefreshSignal?: number;
   onDurableFactsChanged?: () => void;
   onEscalateTrajectory?: () => void;
 }) {
@@ -33,7 +44,9 @@ export function LifecycleSurface({
     null,
   );
   const [error, setError] = useState<string | null>(null);
+  const [info, setInfo] = useState<string | null>(null);
   const [busy, setBusy] = useState<string | null>(null);
+  const [policyConfirmOpen, setPolicyConfirmOpen] = useState(false);

   const refresh = useCallback(async () => {
     const result = await projectAssistantPilotLifecycleProjection({ projectId });
@@ -50,6 +63,12 @@ export function LifecycleSurface({
     void refresh();
   }, [refresh]);

+  useEffect(() => {
+    if (durableRefreshSignal > 0) {
+      void refresh();
+    }
+  }, [durableRefreshSignal, refresh]);
+
   useEffect(() => {
     const onAnswered = () => {
       void refresh();
@@ -61,11 +80,12 @@ export function LifecycleSurface({
   }, [refresh]);

   async function runAction(
-    action: "START" | "PAUSE" | "RESUME" | "FINALIZE" | "CANCEL" | "REEVALUATE",
+    action: "START" | "PAUSE" | "RESUME" | "FINALIZE" | "CANCEL" | "ASSESS" | "REEVALUATE",
     opts?: { requiresReplanHumanDecision?: boolean },
   ) {
     if (!projection?.selectedCycleInstanceId) return;
     setBusy(action);
+    setInfo(null);
     try {
       const result = await projectAssistantPilotLifecycleAction({
         projectId,
@@ -77,7 +97,95 @@ export function LifecycleSurface({
         setError(result.message ?? result.code ?? "Action refusée.");
       } else {
         setError(null);
-        await refresh();
+        if (result.status === "finalize_incomplete") {
+          setInfo(
+            result.message ??
+              "Finalisation incomplète — des conditions restent ouvertes.",
+          );
+        } else if (action === "ASSESS") {
+          setInfo("Conditions de finalisation actualisées.");
+        } else {
+          setInfo(null);
+        }
+        if (result.projection) {
+          setProjection(result.projection);
+        } else {
+          await refresh();
+        }
+        onDurableFactsChanged?.();
+      }
+    } finally {
+      setBusy(null);
+    }
+  }
+
+  async function confirmObligationPolicy() {
+    if (!projection?.selectedCycleInstanceId) return;
+    setBusy("OBLIGATION_POLICY");
+    setInfo(null);
+    try {
+      const result = await projectAssistantRecordObligationPolicyAction({
+        projectId,
+        cycleInstanceId: projection.selectedCycleInstanceId,
+      });
+      if (!result.ok) {
+        setError(result.message ?? result.code ?? "Politique refusée.");
+      } else {
+        setError(null);
+        setPolicyConfirmOpen(false);
+        setInfo(
+          result.message ??
+            "Politique d’obligations enregistrée — aucune finalisation automatique.",
+        );
+        if (result.projection) setProjection(result.projection);
+        else await refresh();
+        onDurableFactsChanged?.();
+      }
+    } finally {
+      setBusy(null);
+    }
+  }
+
+  async function completeTrajectoryStep() {
+    if (!projection?.selectedCycleInstanceId) return;
+    setBusy("COMPLETE_TRAJECTORY_STEP");
+    setInfo(null);
+    try {
+      const result = await projectAssistantCompleteTrajectoryStepAction({
+        projectId,
+        cycleInstanceId: projection.selectedCycleInstanceId,
+      });
+      if (!result.ok) {
+        setError(result.message ?? result.code ?? "Clôture d’étape refusée.");
+      } else {
+        setError(null);
+        setInfo(result.message ?? "Critère de sortie clôturé.");
+        if (result.projection) setProjection(result.projection);
+        else await refresh();
+        onDurableFactsChanged?.();
+      }
+    } finally {
+      setBusy(null);
+    }
+  }
+
+  async function resolveReservation(epistemicItemId: string) {
+    if (!projection?.selectedCycleInstanceId) return;
+    setBusy(`RESOLVE_RESERVATION:${epistemicItemId}`);
+    setInfo(null);
+    try {
+      const result = await projectAssistantResolveBlockingReservationAction({
+        projectId,
+        cycleInstanceId: projection.selectedCycleInstanceId,
+        epistemicItemId,
+      });
+      if (!result.ok) {
+        setError(result.message ?? result.code ?? "Résolution refusée.");
+      } else {
+        setError(null);
+        setInfo(result.message ?? "Réserve résolue.");
+        if (result.projection) setProjection(result.projection);
+        else await refresh();
         onDurableFactsChanged?.();
       }
     } finally {
@@ -107,6 +215,10 @@ export function LifecycleSurface({
   const cta = lifecycleCtaPresentation(projection);
   const finalizeRec = primaryFinalizeRecommendation(projection);
   const nextRec = primaryNextCycleRecommendation(projection);
+  const nonHd = nonHumanDecisionBlockers(projection.assessment);
+  const ready = readyExceptFinalizeDecision(projection.assessment);
+  const exitOpen = nonHd.includes("exit_criteria_open");
+  const reservations = projection.blockingReservations ?? [];

   return (
     <aside
@@ -134,6 +246,11 @@ export function LifecycleSurface({
           {error}
         </p>
       ) : null}
+      {info ? (
+        <p className={styles.muted} data-testid="lifecycle-info" role="status">
+          {info}
+        </p>
+      ) : null}

       {finalizeRec || nextRec ? (
         <section
@@ -145,10 +262,15 @@ export function LifecycleSurface({
           <p className={styles.recStatement}>
             {(finalizeRec ?? nextRec)!.statement}
           </p>
-          <p className={styles.recMeta}>
-            {(finalizeRec ?? nextRec)!.intent.replace(/_/g, " ")} ·{" "}
-            {(finalizeRec ?? nextRec)!.derivedCurrentness}
-          </p>
+          {finalizeRec ? (
+            <p className={styles.recMeta} data-testid="lifecycle-finalize-rec-notice">
+              Nora recommande de finaliser ce cycle
+            </p>
+          ) : (
+            <p className={styles.recMeta}>
+              {(nextRec)!.intent.replace(/_/g, " ")}
+            </p>
+          )}
           <p className={styles.distinction}>
             Recommandation ≠ décision Pilote · n’active pas le cycle
           </p>
@@ -162,16 +284,131 @@ export function LifecycleSurface({
         </section>
       )}

-      {projection.assessment && !projection.assessment.canComplete ? (
-        <section className={styles.block} data-testid="lifecycle-finalization-obligations">
-          <h3 className={styles.blockTitle}>Obligations de finalisation</h3>
+      {projection.assessment ? (
+        <section
+          className={styles.block}
+          data-testid="lifecycle-finalization-obligations"
+        >
+          <h3 className={styles.blockTitle}>Conditions de finalisation</h3>
+          {ready ? (
+            <p className={styles.muted} data-testid="lifecycle-ready-finalize">
+              Prêt pour décision de finalisation — seule la décision Pilote
+              « Finaliser » reste requise.
+            </p>
+          ) : nonHd.length > 0 ? (
+            <ul data-testid="lifecycle-blocker-list">
+              {nonHd.map((b) => (
+                <li key={b} data-blocker={b}>
+                  {blockerLabel(b)}
+                </li>
+              ))}
+            </ul>
+          ) : (
+            <p className={styles.muted}>
+              Assessment disponible — vérifiez les obligations ci-dessous.
+            </p>
+          )}
+          <ul data-testid="lifecycle-obligation-list">
+            {projection.assessment.obligations.map((o) => (
+              <li key={o.family} data-family={o.family} data-status={o.status}>
+                {obligationFamilyLabel(o.family)} — {obligationStatusLabel(o)}
+              </li>
+            ))}
+          </ul>
+        </section>
+      ) : projection.selectedStatus === "active" ||
+        projection.selectedStatus === "paused" ||
+        projection.selectedStatus === "blocked" ? (
+        <section className={styles.block} data-testid="lifecycle-assessment-unavailable">
+          <h3 className={styles.blockTitle}>Conditions de finalisation</h3>
           <p className={styles.muted}>
-            Des obligations restent ouvertes — la recommandation FINALIZE n’est
-            pas une éligibilité.
+            Assessment indisponible — fail-closed (aucune finalisation).
           </p>
         </section>
       ) : null}

+      {exitOpen ? (
+        <section className={styles.block} data-testid="lifecycle-exit-criteria-resolve">
+          <h3 className={styles.blockTitle}>Critères de sortie</h3>
+          <p className={styles.muted}>
+            L’étape de trajectoire liée au cycle est encore ouverte.
+          </p>
+          <button
+            type="button"
+            className={styles.btnSecondary}
+            disabled={busy !== null}
+            data-testid="lifecycle-complete-trajectory-step"
+            onClick={() => void completeTrajectoryStep()}
+          >
+            Clôturer l’étape de trajectoire liée
+          </button>
+        </section>
+      ) : null}
+
+      {reservations.length > 0 ? (
+        <section className={styles.block} data-testid="lifecycle-reservation-resolve">
+          <h3 className={styles.blockTitle}>Réserves bloquantes</h3>
+          {reservations.map((r) => (
+            <div key={r.epistemicItemId} data-testid="lifecycle-blocking-reservation">
+              <p className={styles.muted}>{r.statement}</p>
+              <button
+                type="button"
+                className={styles.btnSecondary}
+                disabled={busy !== null}
+                data-testid="lifecycle-resolve-reservation"
+                data-epistemic-id={r.epistemicItemId}
+                onClick={() => void resolveReservation(r.epistemicItemId)}
+              >
+                Marquer la réserve comme résolue
+              </button>
+            </div>
+          ))}
+        </section>
+      ) : null}
+
+      {cta.showGroupedObligationPolicy ? (
+        <section className={styles.block} data-testid="lifecycle-obligation-policy">
+          <h3 className={styles.blockTitle}>Effets gouvernés</h3>
+          {!policyConfirmOpen ? (
+            <button
+              type="button"
+              className={styles.btnSecondary}
+              disabled={busy !== null}
+              data-testid="lifecycle-obligation-policy-cta"
+              onClick={() => setPolicyConfirmOpen(true)}
+            >
+              Confirmer qu’aucun effet gouverné n’est requis pour ce cycle
+            </button>
+          ) : (
+            <div data-testid="lifecycle-obligation-policy-confirm">
+              <p className={styles.muted}>
+                Cette décision signifie que ce cycle ne requiert pas d’artefact,
+                d’exécution gouvernée, d’Evidence, de ReviewBundle ni d’effet
+                Git. Elle n’est jamais automatique et ne finalise pas le cycle.
+              </p>
+              <button
+                type="button"
+                className={styles.btnPrimary}
+                disabled={busy !== null}
+                data-testid="lifecycle-obligation-policy-confirm-cta"
+                onClick={() => void confirmObligationPolicy()}
+              >
+                Confirmer explicitement
+              </button>
+              <button
+                type="button"
+                className={styles.btnSecondary}
+                disabled={busy !== null}
+                data-testid="lifecycle-obligation-policy-cancel"
+                onClick={() => setPolicyConfirmOpen(false)}
+              >
+                Annuler
+              </button>
+            </div>
+          )}
+        </section>
+      ) : null}
+
       {cta.showReplan ? (
         <section className={styles.block} data-testid="lifecycle-resume-drift">
           <h3 className={styles.blockTitle}>Dérive à la reprise</h3>
@@ -214,6 +451,17 @@ export function LifecycleSurface({
             Démarrer
           </button>
         ) : null}
+        {cta.showAssess ? (
+          <button
+            type="button"
+            className={styles.btnSecondary}
+            disabled={busy !== null}
+            data-testid="lifecycle-assess-cta"
+            onClick={() => void runAction("ASSESS")}
+          >
+            Vérifier les conditions de finalisation
+          </button>
+        ) : null}
         {cta.showFinalizePrimary ? (
           <button
             type="button"
```

## FILE: projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts

```diff
commit 4a80965a5f1687f805544c56be66e5d2ead3ea29
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Sep 10 22:33:06 2026 +0200

    fix(sfia-studio): complete governed lifecycle closure

    Same-lot Phase B: post-ACW LR currentness, cross-surface refresh,
    ASSESS→FINALIZE honesty, obligation-policy wiring, and explicit
    trajectory/reservation resolution without weakening fail-closed.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts
index 5d2d22fe..10214963 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts
@@ -1,3 +1,7 @@
+import type {
+  FinalizationAssessment,
+  FinalizationObligation,
+} from "@/lib/oa/cycle";
 import type { PilotLifecycleProjection } from "@/lib/oa/cycle";
 import type { LifecycleRecommendationEnvelope } from "@/lib/oa/cycle";

@@ -6,10 +10,119 @@ export type LifecycleUiStatus =
   | "candidate"
   | "blocked_drift"
   | "finalization_open"
+  | "ready_finalize"
   | "completed_next"
   | "paused"
   | "empty";

+/** HumanDecision FINALIZE absence alone — does not block showing Finaliser CTA. */
+export const FINALIZE_HD_BLOCKER = "finalize_human_decision_absent";
+
+export function nonHumanDecisionBlockers(
+  assessment: FinalizationAssessment | null | undefined,
+): string[] {
+  if (!assessment) return [];
+  return assessment.blockers.filter((b) => b !== FINALIZE_HD_BLOCKER);
+}
+
+/**
+ * D-LC-02 — ready for authoritative Finaliser when every non-HD blocker is clear
+ * and only the Pilot FINALIZE HumanDecision (or canComplete) remains.
+ */
+export function readyExceptFinalizeDecision(
+  assessment: FinalizationAssessment | null | undefined,
+): boolean {
+  if (!assessment) return false;
+  if (assessment.canComplete) return true;
+  const nonHd = nonHumanDecisionBlockers(assessment);
+  return (
+    nonHd.length === 0 &&
+    assessment.blockers.includes(FINALIZE_HD_BLOCKER)
+  );
+}
+
+export function obligationFamilyLabel(family: string): string {
+  switch (family) {
+    case "exit_criteria":
+      return "Critères de sortie";
+    case "artifact":
+      return "Artefact";
+    case "execution_contract":
+      return "Contrat d’exécution";
+    case "evidence":
+      return "Evidence";
+    case "review_bundle":
+      return "ReviewBundle";
+    case "git_repository":
+      return "Dépôt Git";
+    case "human_decision":
+      return "Décision finale du Pilote";
+    case "blockers":
+      return "Réserve bloquante";
+    default:
+      return family;
+  }
+}
+
+export function blockerLabel(blockerId: string): string {
+  switch (blockerId) {
+    case "exit_criteria_open":
+      return "Critères de sortie encore ouverts";
+    case "artifact_applicability_unknown":
+    case "execution_contract_applicability_unknown":
+    case "evidence_applicability_unknown":
+    case "review_bundle_applicability_unknown":
+    case "git_repository_applicability_unknown":
+      return "Applicabilité des effets gouvernés à confirmer";
+    case "blocking_reservations":
+      return "Réserve bloquante à résoudre";
+    case FINALIZE_HD_BLOCKER:
+      return "Décision finale du Pilote requise";
+    default:
+      return blockerId;
+  }
+}
+
+export function obligationStatusLabel(o: FinalizationObligation): string {
+  if (o.applicability === "NOT_APPLICABLE") return "Non applicable";
+  if (o.applicability === "UNKNOWN") return "À confirmer";
+  if (o.status === "SATISFIED") return "Satisfait";
+  if (o.status === "BLOCKING" || o.blocking) return "Bloquant";
+  if (o.status === "PENDING") return "En attente";
+  if (o.status === "MISSING") return "Manquant";
+  return o.status;
+}
+
+/** Governed-effect families covered by opt:no-governed-effects. */
+export const GOVERNED_EFFECT_FAMILIES = [
+  "artifact",
+  "git_repository",
+  "execution_contract",
+  "evidence",
+  "review_bundle",
+] as const;
+
+/**
+ * D-LC-03 — show grouped N/A CTA when those families are UNKNOWN
+ * and none is positively APPLICABLE with open obligation.
+ */
+export function canOfferGroupedNoGovernedEffects(
+  assessment: FinalizationAssessment | null | undefined,
+): boolean {
+  if (!assessment) return false;
+  const byFamily = new Map(
+    assessment.obligations.map((o) => [o.family, o] as const),
+  );
+  let unknownCount = 0;
+  for (const family of GOVERNED_EFFECT_FAMILIES) {
+    const o = byFamily.get(family);
+    if (!o) continue;
+    if (o.applicability === "APPLICABLE") return false;
+    if (o.applicability === "UNKNOWN") unknownCount += 1;
+  }
+  return unknownCount > 0;
+}
+
 export function lifecycleStatusBadge(
   projection: PilotLifecycleProjection,
 ): { status: LifecycleUiStatus; label: string } {
@@ -22,18 +135,19 @@ export function lifecycleStatusBadge(
     return { status: "blocked_drift", label: "Bloqué / dérive" };
   }
   if (projection.selectedStatus === "active") {
-    const finalizeRec = (projection.currentRecommendations ?? []).find(
-      (r) =>
-        r.intent === "FINALIZE_CURRENT_CYCLE" &&
-        r.derivedCurrentness === "CURRENT",
-    );
-    if (projection.assessment && !projection.assessment.canComplete) {
-      return { status: "finalization_open", label: "Finalisation en cours" };
+    if (readyExceptFinalizeDecision(projection.assessment)) {
+      return {
+        status: "ready_finalize",
+        label: "Prêt pour décision de finalisation",
+      };
+    }
+    if (
+      projection.assessment &&
+      nonHumanDecisionBlockers(projection.assessment).length > 0
+    ) {
+      return { status: "finalization_open", label: "En cours" };
     }
-    return {
-      status: "active",
-      label: finalizeRec ? "En cours" : "En cours",
-    };
+    return { status: "active", label: "En cours" };
   }
   if (
     projection.selectedStatus === "proposed" ||
@@ -77,18 +191,24 @@ export function primaryNextCycleRecommendation(
 }

 /**
- * CTA honesty: Recommendation never grants authority.
- * Dirty resume never exposes clean RESUME.
+ * D-LC-02 CTA honesty:
+ * - canFinalize (domain) = transition attemptable from status
+ * - Finaliser CTA enabled only when readyExceptFinalizeDecision
+ * - Assessment CTA when attemptable but non-HD blockers remain
+ * Recommendation never grants authority.
  */
 export function lifecycleCtaPresentation(projection: PilotLifecycleProjection): {
   showFinalizePrimary: boolean;
   showFinalizeSecondary: boolean;
+  showAssess: boolean;
   showStart: boolean;
   showResume: boolean;
   showReplan: boolean;
   showTrajectoryEscalation: boolean;
+  showGroupedObligationPolicy: boolean;
   finalizeEnabled: boolean;
   resumeEnabled: boolean;
+  readyExceptFinalize: boolean;
 } {
   const finalizeRec = primaryFinalizeRecommendation(projection);
   const nextRec = primaryNextCycleRecommendation(projection);
@@ -96,23 +216,32 @@ export function lifecycleCtaPresentation(projection: PilotLifecycleProjection):
   const dirtyResume =
     projection.selectedStatus === "paused" &&
     projection.resumeReconciliation?.clean === false;
+  const attemptable = projection.cta.canFinalize;
+  const ready = readyExceptFinalizeDecision(projection.assessment);
+  const nonHd = nonHumanDecisionBlockers(projection.assessment);
+  const showAssess = Boolean(
+    attemptable &&
+      !ready &&
+      (nonHd.length > 0 || projection.assessment == null),
+  );

   return {
-    showFinalizePrimary: Boolean(
-      finalizeRec && projection.cta.canFinalize,
-    ),
-    showFinalizeSecondary: Boolean(
-      !finalizeRec && projection.cta.canFinalize,
-    ),
+    showFinalizePrimary: Boolean(finalizeRec && attemptable && ready),
+    showFinalizeSecondary: Boolean(!finalizeRec && attemptable && ready),
+    showAssess,
     showStart: projection.cta.canStart,
     showResume: projection.cta.canResume && !dirtyResume,
     showReplan: dirtyResume,
     showTrajectoryEscalation: Boolean(
       nextRec ||
-        (projection.candidateCycles.length > 1) ||
+        projection.candidateCycles.length > 1 ||
         projection.selectionAmbiguous,
     ),
-    finalizeEnabled: projection.cta.canFinalize,
+    showGroupedObligationPolicy: Boolean(
+      attemptable && canOfferGroupedNoGovernedEffects(projection.assessment),
+    ),
+    finalizeEnabled: attemptable && ready,
     resumeEnabled: projection.cta.canResume && resumeClean && !dirtyResume,
+    readyExceptFinalize: ready,
   };
 }
```

## FILE: projects/sfia-studio/app/features/project-assistant/actions.ts

```diff
commit 4a80965a5f1687f805544c56be66e5d2ead3ea29
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Sep 10 22:33:06 2026 +0200

    fix(sfia-studio): complete governed lifecycle closure

    Same-lot Phase B: post-ACW LR currentness, cross-surface refresh,
    ASSESS→FINALIZE honesty, obligation-policy wiring, and explicit
    trajectory/reservation resolution without weakening fail-closed.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index 60bf5258..14d6ce09 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -13,6 +13,7 @@ import {
   type PilotLifecycleProjection,
   selectCurrentLifecycleRecommendations,
   isPausedStatus,
+  isTerminalCycleStatus,
   assessResumeReconciliation,
   deriveLifecycleBlockersFromEpistemicItems,
 } from "@/lib/oa/cycle";
@@ -1048,6 +1049,38 @@ async function buildAssistantPilotLifecycleProjection(
     currentRecommendations,
   });

+  // D-LC-02 — attach canonical FinalizationAssessment for selected non-terminal cycle.
+  if (
+    projection.selectedCycleInstanceId &&
+    projection.selectedStatus &&
+    !isTerminalCycleStatus(projection.selectedStatus)
+  ) {
+    try {
+      const assessed = await runtime.oa.cycleServices.pilotLifecycle.assess({
+        cycleInstanceId: projection.selectedCycleInstanceId,
+        projectId,
+      });
+      if (assessed.ok) {
+        projection.assessment = assessed.assessment;
+      } else {
+        projection.assessment = null;
+      }
+    } catch {
+      projection.assessment = null;
+    }
+    projection.blockingReservations = epistemicItems
+      .filter(
+        (i) =>
+          i.type === "Reservation" &&
+          i.status === "active" &&
+          i.blocking === true,
+      )
+      .map((i) => ({
+        epistemicItemId: i.epistemicItemId,
+        statement: i.statement,
+      }));
+  }
+
   if (
     projection.selectedStatus &&
     isPausedStatus(projection.selectedStatus) &&
@@ -1296,9 +1329,15 @@ export async function projectAssistantPilotLifecycleAction(input: {
   const projection = await buildAssistantPilotLifecycleProjection(
     input.projectId,
   );
+  const incompleteFinalize =
+    executed.action === "FINALIZE" &&
+    executed.assessment &&
+    typeof executed.assessment === "object" &&
+    "canComplete" in executed.assessment &&
+    (executed.assessment as { canComplete?: boolean }).canComplete === false;
   return {
     ok: true,
-    status: "ok",
+    status: incompleteFinalize ? "finalize_incomplete" : "ok",
     action: executed.action,
     cycleStatus: executed.result?.ok ? executed.result.cycle.status : undefined,
     activeCycleInstanceId: executed.result?.ok
@@ -1317,6 +1356,170 @@ export async function projectAssistantPilotLifecycleAction(input: {
     selectedStatus: projection?.selectedStatus,
     selectionAmbiguous: projection?.selectionAmbiguous,
     cta: projection?.cta,
-    message: `Pilot lifecycle ${executed.action} applied.`,
+    message: incompleteFinalize
+      ? "Finalisation incomplète — des conditions restent ouvertes."
+      : `Pilot lifecycle ${executed.action} applied.`,
+  };
+}
+
+export async function projectAssistantRecordObligationPolicyAction(input: {
+  projectId: string;
+  cycleInstanceId: string;
+}): Promise<{
+  ok: boolean;
+  status: string;
+  code?: string;
+  message?: string;
+  decisionId?: string;
+  assessment?: unknown;
+  projection?: PilotLifecycleProjection;
+}> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      status: "oa_unavailable",
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Obligation-policy unavailable.",
+    };
+  }
+  const { recordObligationPolicyNoGovernedEffects } = await import(
+    "./f2/pilotLifecycleActions"
+  );
+  const executed = await recordObligationPolicyNoGovernedEffects({
+    projectId: input.projectId,
+    cycleInstanceId: input.cycleInstanceId,
+    cycleServices: runtime.oa.cycleServices,
+    decisionServices: runtime.oa.decisionServices,
+    authorityResolver: runtime.oa.authorityResolver,
+    nowIso: () => runtime.oa!.clock.nowIso(),
+  });
+  const projection = await buildAssistantPilotLifecycleProjection(
+    input.projectId,
+  );
+  if (!executed.ok) {
+    return {
+      ok: false,
+      status: "lifecycle_error",
+      code: executed.code,
+      message: executed.message,
+      assessment: executed.assessment,
+      projection: projection ?? undefined,
+    };
+  }
+  return {
+    ok: true,
+    status: "ok",
+    decisionId: executed.decisionId,
+    assessment: executed.assessment,
+    projection: projection ?? undefined,
+    message:
+      "Politique d’obligations enregistrée — aucune finalisation automatique.",
+  };
+}
+
+export async function projectAssistantCompleteTrajectoryStepAction(input: {
+  projectId: string;
+  cycleInstanceId: string;
+}): Promise<{
+  ok: boolean;
+  status: string;
+  code?: string;
+  message?: string;
+  stepId?: string;
+  assessment?: unknown;
+  projection?: PilotLifecycleProjection;
+}> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      status: "oa_unavailable",
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Trajectory step close unavailable.",
+    };
+  }
+  const { completeBoundTrajectoryStepAction } = await import(
+    "./f2/pilotLifecycleActions"
+  );
+  const executed = await completeBoundTrajectoryStepAction({
+    projectId: input.projectId,
+    cycleInstanceId: input.cycleInstanceId,
+    cycleServices: runtime.oa.cycleServices,
+    authorityResolver: runtime.oa.authorityResolver,
+    nowIso: () => runtime.oa!.clock.nowIso(),
+  });
+  const projection = await buildAssistantPilotLifecycleProjection(
+    input.projectId,
+  );
+  if (!executed.ok) {
+    return {
+      ok: false,
+      status: "lifecycle_error",
+      code: executed.code,
+      message: executed.message,
+      projection: projection ?? undefined,
+    };
+  }
+  return {
+    ok: true,
+    status: "ok",
+    stepId: executed.stepId,
+    assessment: executed.assessment,
+    projection: projection ?? undefined,
+    message: "Critère de sortie clôturé pour l’étape liée.",
+  };
+}
+
+export async function projectAssistantResolveBlockingReservationAction(input: {
+  projectId: string;
+  cycleInstanceId: string;
+  epistemicItemId: string;
+}): Promise<{
+  ok: boolean;
+  status: string;
+  code?: string;
+  message?: string;
+  assessment?: unknown;
+  projection?: PilotLifecycleProjection;
+}> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      status: "oa_unavailable",
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Reservation resolve unavailable.",
+    };
+  }
+  const { resolveBlockingReservationAction } = await import(
+    "./f2/pilotLifecycleActions"
+  );
+  const executed = await resolveBlockingReservationAction({
+    projectId: input.projectId,
+    cycleInstanceId: input.cycleInstanceId,
+    epistemicItemId: input.epistemicItemId,
+    cycleServices: runtime.oa.cycleServices,
+    authorityResolver: runtime.oa.authorityResolver,
+    nowIso: () => runtime.oa!.clock.nowIso(),
+  });
+  const projection = await buildAssistantPilotLifecycleProjection(
+    input.projectId,
+  );
+  if (!executed.ok) {
+    return {
+      ok: false,
+      status: "lifecycle_error",
+      code: executed.code,
+      message: executed.message,
+      projection: projection ?? undefined,
+    };
+  }
+  return {
+    ok: true,
+    status: "ok",
+    assessment: executed.assessment,
+    projection: projection ?? undefined,
+    message: "Réserve bloquante résolue.",
   };
 }
```

## FILE: projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts

```diff
commit 4a80965a5f1687f805544c56be66e5d2ead3ea29
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Sep 10 22:33:06 2026 +0200

    fix(sfia-studio): complete governed lifecycle closure

    Same-lot Phase B: post-ACW LR currentness, cross-surface refresh,
    ASSESS→FINALIZE honesty, obligation-policy wiring, and explicit
    trajectory/reservation resolution without weakening fail-closed.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
index e8129c30..cb114248 100644
--- a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
+++ b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
@@ -128,6 +128,10 @@ export function buildProjectSystemPrompt(
     "états métier ou signaux d'urgence appartenant au cycle candidat.",
     "lifecycleRecommendation (si émise) : intent NEXT_CYCLE ou FINALIZE_CURRENT_CYCLE ;",
     "authority conceptuelle aucune ; isHumanDecision false ; statement et rationale lisibles Pilote ;",
+    "PRIORITÉ D'INTENT (D-LC-04) :",
+    "- Tant qu'un cycle courant non terminal doit se clore → FINALIZE_CURRENT_CYCLE uniquement ;",
+    "  un prochain cycle peut être expliqué dans la narrative, jamais typé NEXT_CYCLE concurrent.",
+    "- NEXT_CYCLE seulement après cycle courant completed / aucune clôture courante en attente.",
     "targetCycleTypeId DOIT être un identifiant catalogue Studio exact (ex. cyc:framing pour le label « Cadrage »).",
     "Jamais un label humain seul (« Cadrage », « Delivery ») ni un id inventé.",
     "Identifiants catalogue actifs : " +
```

## FILE: projects/sfia-studio/app/features/project-assistant/f2/pilotLifecycleActions.ts

```diff
commit 4a80965a5f1687f805544c56be66e5d2ead3ea29
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Sep 10 22:33:06 2026 +0200

    fix(sfia-studio): complete governed lifecycle closure

    Same-lot Phase B: post-ACW LR currentness, cross-surface refresh,
    ASSESS→FINALIZE honesty, obligation-policy wiring, and explicit
    trajectory/reservation resolution without weakening fail-closed.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/features/project-assistant/f2/pilotLifecycleActions.ts b/projects/sfia-studio/app/features/project-assistant/f2/pilotLifecycleActions.ts
index f4ff371e..6cd8f9b6 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/pilotLifecycleActions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/pilotLifecycleActions.ts
@@ -465,3 +465,253 @@ export async function executePilotLifecycleAction(input: {
     }
   }
 }
+
+/** D-LC-03 — explicit Pilote obligation-policy HD (never automatic). */
+export async function recordObligationPolicyNoGovernedEffects(input: {
+  projectId: string;
+  cycleInstanceId: string;
+  cycleServices: CycleServices;
+  decisionServices: DecisionServices;
+  authorityResolver: MemoryAuthorityResolver;
+  nowIso: () => string;
+}): Promise<
+  | {
+      ok: true;
+      decisionId: string;
+      assessment: FinalizationAssessment;
+    }
+  | { ok: false; code: string; message: string; assessment?: FinalizationAssessment }
+> {
+  const {
+    obligationPolicySubjectFor,
+    OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
+  } = await import("@/lib/oa/cycle");
+  const nowIso = input.nowIso();
+  const assessedBefore = await input.cycleServices.pilotLifecycle.assess({
+    cycleInstanceId: input.cycleInstanceId,
+    projectId: input.projectId,
+  });
+  if (!assessedBefore.ok) {
+    return {
+      ok: false,
+      code: assessedBefore.error.detailCode,
+      message: assessedBefore.error.message,
+    };
+  }
+  // Fail-closed: refuse grouped N/A when a governed-effect family is positively APPLICABLE.
+  for (const o of assessedBefore.assessment.obligations) {
+    if (
+      (o.family === "artifact" ||
+        o.family === "git_repository" ||
+        o.family === "execution_contract" ||
+        o.family === "evidence" ||
+        o.family === "review_bundle") &&
+      o.applicability === "APPLICABLE"
+    ) {
+      return {
+        ok: false,
+        code: "OBLIGATION_POLICY_CONTRADICTED",
+        message:
+          "Des effets gouvernés sont déjà applicables — la confirmation groupée n’est pas disponible.",
+        assessment: assessedBefore.assessment,
+      };
+    }
+  }
+
+  const scope = `pilot-lifecycle:${input.cycleInstanceId}`;
+  const auth = await ensurePiloteAuthority({
+    authorityResolver: input.authorityResolver,
+    scope,
+    nowIso,
+  });
+  if (!auth.ok) return auth;
+
+  const decisionId = `dec:pilot-life:${randomUUID()}`;
+  const subject = obligationPolicySubjectFor(input.cycleInstanceId);
+  const recorded = await input.decisionServices.recordHumanDecision.execute({
+    decisionId,
+    projectId: input.projectId,
+    cycleInstanceId: input.cycleInstanceId,
+    subject,
+    options: [
+      {
+        optionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
+        label: "Aucun effet gouverné requis",
+      },
+      { optionId: "opt:refuse", label: "Refuse" },
+    ],
+    selectedOptionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
+    actor: PILOTE,
+    authority: "morris",
+    status: "accepted",
+    reversible: false,
+    scope,
+    authorityEvidenceId: auth.evidenceId,
+    rationale: "Pilot obligation-policy: no governed effects for this cycle",
+  });
+  if (!recorded.ok) {
+    return {
+      ok: false,
+      code: recorded.error.detailCode,
+      message: recorded.error.message,
+    };
+  }
+
+  const assessed = await input.cycleServices.pilotLifecycle.assess({
+    cycleInstanceId: input.cycleInstanceId,
+    projectId: input.projectId,
+  });
+  if (!assessed.ok) {
+    return {
+      ok: false,
+      code: assessed.error.detailCode,
+      message: assessed.error.message,
+    };
+  }
+  return {
+    ok: true,
+    decisionId,
+    assessment: assessed.assessment,
+  };
+}
+
+/** D-LC-05 — close bound active trajectory step via existing domain step states. */
+export async function completeBoundTrajectoryStepAction(input: {
+  projectId: string;
+  cycleInstanceId: string;
+  cycleServices: CycleServices;
+  authorityResolver: MemoryAuthorityResolver;
+  nowIso: () => string;
+}): Promise<
+  | { ok: true; stepId: string; assessment: FinalizationAssessment }
+  | { ok: false; code: string; message: string }
+> {
+  const nowIso = input.nowIso();
+  const scope = `pilot-lifecycle:${input.cycleInstanceId}`;
+  const auth = await ensurePiloteAuthority({
+    authorityResolver: input.authorityResolver,
+    scope,
+    nowIso,
+  });
+  if (!auth.ok) return auth;
+
+  const closed =
+    await input.cycleServices.pilotLifecycle.completeBoundActiveTrajectoryStep({
+      projectId: input.projectId,
+      cycleInstanceId: input.cycleInstanceId,
+      createdBy: PILOTE,
+    });
+  if (!closed.ok) {
+    return {
+      ok: false,
+      code: closed.error.detailCode,
+      message: closed.error.message,
+    };
+  }
+  const assessed = await input.cycleServices.pilotLifecycle.assess({
+    cycleInstanceId: input.cycleInstanceId,
+    projectId: input.projectId,
+  });
+  if (!assessed.ok) {
+    return {
+      ok: false,
+      code: assessed.error.detailCode,
+      message: assessed.error.message,
+    };
+  }
+  return {
+    ok: true,
+    stepId: closed.stepId,
+    assessment: assessed.assessment,
+  };
+}
+
+/** D-LC-05 — resolve blocking Reservation via existing UpdateEpistemicState. */
+export async function resolveBlockingReservationAction(input: {
+  projectId: string;
+  cycleInstanceId: string;
+  epistemicItemId: string;
+  cycleServices: CycleServices;
+  authorityResolver: MemoryAuthorityResolver;
+  nowIso: () => string;
+}): Promise<
+  | { ok: true; epistemicItemId: string; assessment: FinalizationAssessment }
+  | { ok: false; code: string; message: string }
+> {
+  const nowIso = input.nowIso();
+  const scope = `pilot-lifecycle:${input.cycleInstanceId}`;
+  const auth = await ensurePiloteAuthority({
+    authorityResolver: input.authorityResolver,
+    scope,
+    nowIso,
+  });
+  if (!auth.ok) return auth;
+
+  const items = await input.cycleServices.epistemic.listByProject(
+    input.projectId,
+  );
+  const target = items.find((i) => i.epistemicItemId === input.epistemicItemId);
+  if (!target) {
+    return {
+      ok: false,
+      code: "EPISTEMIC_NOT_FOUND",
+      message: "Réserve introuvable.",
+    };
+  }
+  if (target.type !== "Reservation") {
+    return {
+      ok: false,
+      code: "EPISTEMIC_INVALID",
+      message: "L’élément n’est pas une réserve.",
+    };
+  }
+  if (target.status !== "active" || target.blocking !== true) {
+    return {
+      ok: false,
+      code: "EPISTEMIC_INVALID",
+      message: "La réserve n’est pas une réserve bloquante active.",
+    };
+  }
+
+  const updated = await input.cycleServices.updateEpistemicState.execute({
+    projectId: input.projectId,
+    createdBy: PILOTE,
+    items: [
+      {
+        epistemicItemId: target.epistemicItemId,
+        type: "Reservation",
+        statement: target.statement,
+        source: target.source,
+        status: "resolved",
+        blocking: false,
+        confidence: target.confidence,
+        relatedObjects: target.relatedObjects,
+        provenance: target.provenance,
+      },
+    ],
+  });
+  if (!updated.ok) {
+    return {
+      ok: false,
+      code: updated.error.detailCode,
+      message: updated.error.message,
+    };
+  }
+
+  const assessed = await input.cycleServices.pilotLifecycle.assess({
+    cycleInstanceId: input.cycleInstanceId,
+    projectId: input.projectId,
+  });
+  if (!assessed.ok) {
+    return {
+      ok: false,
+      code: assessed.error.detailCode,
+      message: assessed.error.message,
+    };
+  }
+  return {
+    ok: true,
+    epistemicItemId: target.epistemicItemId,
+    assessment: assessed.assessment,
+  };
+}
```

## FILE: projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts

```diff
commit 4a80965a5f1687f805544c56be66e5d2ead3ea29
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Sep 10 22:33:06 2026 +0200

    fix(sfia-studio): complete governed lifecycle closure

    Same-lot Phase B: post-ACW LR currentness, cross-surface refresh,
    ASSESS→FINALIZE honesty, obligation-policy wiring, and explicit
    trajectory/reservation resolution without weakening fail-closed.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 33ff33e9..23feb4bc 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -384,7 +384,9 @@ export async function orchestrateProjectAssistantTurn(input: {
     let lifecycleRecommendationMaterialized: boolean | null = null;
     let lifecycleRecommendationCode: string | null = null;

-    // Same Product turn — optional LR materialization (no second model call).
+    // D-LC-01 — same Product turn: extract → fail-closed contradiction →
+    // ACW first (when present) → then LR against final post-ACW basis.
+    // No second model call. No fingerprint rewrite.
     if (turn.structuredOutput !== undefined) {
       const { extractLifecycleCandidateFromStructuredOutput } = await import(
         "@/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn"
@@ -396,9 +398,8 @@ export async function orchestrateProjectAssistantTurn(input: {
         assistantText = extracted.narrative;
       }
       // Positive enforcement: EMIT without LR is a structured contradiction.
+      // Fail BEFORE any durable writes (ACW or LR).
       // Never invent LR; never treat as normal conversational success.
-      // Seams 1–3 alone are insufficient because this short-circuit previously
-      // skipped materialize and returned ok:true silently.
       if (
         extracted.kind === "product_turn" &&
         extracted.boundaryContradiction ===
@@ -413,141 +414,8 @@ export async function orchestrateProjectAssistantTurn(input: {
           retryable: false,
         };
       }
-      if (!extracted.candidate) {
-        lifecycleRecommendationMaterialized = false;
-      } else {
-        // OA access via authorized Project Assistant seam (mw3AvailableEvidence
-        // lazy runtime import) — never import vertical-slice-runtime here.
-        const oaResolved = await resolveOaStackForLifecycleRecommendation();
-        if (oaResolved.ok) {
-          const oa = oaResolved.oa;
-          const cycles = await oa.cycleServices.cycles.listByProject(
-            project.projectId,
-          );
-          const lps =
-            await oa.projectServices.getCurrentLivingProjectState.execute({
-              projectId: project.projectId,
-            });
-          const projectRow = await oa.projectServices.getProject.execute({
-            projectId: project.projectId,
-          });
-          const failedMaterialDimensions =
-            new Set<LifecycleRecommendationMaterialDimension>();
-          if (!lps.ok) {
-            failedMaterialDimensions.add("lps");
-          }
-          if (!projectRow.ok) {
-            failedMaterialDimensions.add("doctrine");
-          }
-
-          let trajectory = null;
-          let trajectoryBootstrapPresence = await resolveTrajectoryBootstrapPresence(
-            oa.cycleServices.trajectories,
-            project.projectId,
-          );
-          if (trajectoryBootstrapPresence.kind === "unknown") {
-            failedMaterialDimensions.add("trajectory");
-            trajectory = null;
-          } else if (trajectoryBootstrapPresence.kind === "current") {
-            trajectory = trajectoryBootstrapPresence.trajectory;
-          } else {
-            trajectory = null;
-          }
-
-          let decisions: Awaited<
-            ReturnType<typeof oa.decisionServices.decisions.listByProject>
-          > = [];
-          try {
-            decisions = await oa.decisionServices.decisions.listByProject(
-              project.projectId,
-            );
-          } catch {
-            failedMaterialDimensions.add("decisions");
-            decisions = [];
-          }
-
-          let evidence: Awaited<
-            ReturnType<
-              typeof oa.evidenceReviewServices.repository.listByProject
-            >
-          > = [];
-          try {
-            evidence =
-              await oa.evidenceReviewServices.repository.listByProject(
-                project.projectId,
-              );
-          } catch {
-            failedMaterialDimensions.add("evidence");
-            evidence = [];
-          }
-
-          let epistemicItems: Awaited<
-            ReturnType<typeof oa.cycleServices.epistemic.listByProject>
-          > = [];
-          try {
-            epistemicItems = await oa.cycleServices.epistemic.listByProject(
-              project.projectId,
-            );
-          } catch {
-            failedMaterialDimensions.add("epistemic_blockers");
-            epistemicItems = [];
-          }
-
-          const doctrinePin = projectRow.ok
-            ? (projectRow.project.doctrinePackageRef ??
-              (lps.ok ? lps.livingProjectState.doctrinePackageRef : undefined))
-            : undefined;
-          const producedAt = new Date().toISOString();
-          const mat =
-            await materializeLifecycleRecommendationFromStructuredOutput({
-              projectId: project.projectId,
-              structuredOutput: turn.structuredOutput,
-              updateEpistemicState: oa.cycleServices.updateEpistemicState,
-              facts: {
-                cycles,
-                lpsActiveCycleInstanceId: lps.ok
-                  ? lps.livingProjectState.activeCycleInstanceId
-                  : null,
-                lpsVersion: lps.ok ? lps.livingProjectState.version : null,
-                doctrinePackageId: doctrinePin?.doctrinePackageId ?? null,
-                doctrinePackageVersion: doctrinePin?.version ?? null,
-                doctrinePackageDigest: doctrinePin?.digest ?? null,
-                trajectory,
-                trajectoryBootstrapPresence,
-                decisions,
-                evidence,
-                epistemicItems,
-                failedMaterialDimensions,
-              },
-              producedAt,
-              createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
-              correlationId: `f1:${project.projectId}`,
-            });
-          if (mat.narrative) {
-            assistantText = mat.narrative;
-          }
-          if (mat.recommendationAttempted) {
-            lifecycleRecommendationMaterialized =
-              mat.materialization?.ok === true;
-            lifecycleRecommendationCode =
-              mat.materialization && !mat.materialization.ok
-                ? mat.materialization.code
-                : mat.materialization?.ok
-                  ? null
-                  : "LR_MATERIALIZE_UNKNOWN";
-          } else {
-            lifecycleRecommendationMaterialized = false;
-          }
-        } else {
-          lifecycleRecommendationMaterialized = false;
-          lifecycleRecommendationCode = "LR_BASIS_UNAVAILABLE";
-        }
-      }
-    }

-    // D-GF-ACW-01/02 — same Product turn structured output; no second model call.
-    // Materialize non-authoritative active-cycle EpistemicItems when eligible.
-    if (turn.structuredOutput !== undefined) {
+      // D-GF-ACW-01/02 — materialize ACW FIRST when items present + eligible.
       const coherent = normalizeNoraProductTurnStructuredOutput(
         turn.structuredOutput,
       );
@@ -729,6 +597,139 @@ export async function orchestrateProjectAssistantTurn(input: {
           }
         }
       }
+
+      // D-LC-01 — LR AFTER ACW (or with current facts when no ACW items).
+      // Reload durable basis so currentness binds post-ACW LPS version / epistemic.
+      if (!extracted.candidate) {
+        lifecycleRecommendationMaterialized = false;
+      } else {
+        // OA access via authorized Project Assistant seam (mw3AvailableEvidence
+        // lazy runtime import) — never import vertical-slice-runtime here.
+        const oaResolved = await resolveOaStackForLifecycleRecommendation();
+        if (oaResolved.ok) {
+          const oa = oaResolved.oa;
+          const cycles = await oa.cycleServices.cycles.listByProject(
+            project.projectId,
+          );
+          const lps =
+            await oa.projectServices.getCurrentLivingProjectState.execute({
+              projectId: project.projectId,
+            });
+          const projectRow = await oa.projectServices.getProject.execute({
+            projectId: project.projectId,
+          });
+          const failedMaterialDimensions =
+            new Set<LifecycleRecommendationMaterialDimension>();
+          if (!lps.ok) {
+            failedMaterialDimensions.add("lps");
+          }
+          if (!projectRow.ok) {
+            failedMaterialDimensions.add("doctrine");
+          }
+
+          let trajectory = null;
+          let trajectoryBootstrapPresence = await resolveTrajectoryBootstrapPresence(
+            oa.cycleServices.trajectories,
+            project.projectId,
+          );
+          if (trajectoryBootstrapPresence.kind === "unknown") {
+            failedMaterialDimensions.add("trajectory");
+            trajectory = null;
+          } else if (trajectoryBootstrapPresence.kind === "current") {
+            trajectory = trajectoryBootstrapPresence.trajectory;
+          } else {
+            trajectory = null;
+          }
+
+          let decisions: Awaited<
+            ReturnType<typeof oa.decisionServices.decisions.listByProject>
+          > = [];
+          try {
+            decisions = await oa.decisionServices.decisions.listByProject(
+              project.projectId,
+            );
+          } catch {
+            failedMaterialDimensions.add("decisions");
+            decisions = [];
+          }
+
+          let evidence: Awaited<
+            ReturnType<
+              typeof oa.evidenceReviewServices.repository.listByProject
+            >
+          > = [];
+          try {
+            evidence =
+              await oa.evidenceReviewServices.repository.listByProject(
+                project.projectId,
+              );
+          } catch {
+            failedMaterialDimensions.add("evidence");
+            evidence = [];
+          }
+
+          let epistemicItems: Awaited<
+            ReturnType<typeof oa.cycleServices.epistemic.listByProject>
+          > = [];
+          try {
+            epistemicItems = await oa.cycleServices.epistemic.listByProject(
+              project.projectId,
+            );
+          } catch {
+            failedMaterialDimensions.add("epistemic_blockers");
+            epistemicItems = [];
+          }
+
+          const doctrinePin = projectRow.ok
+            ? (projectRow.project.doctrinePackageRef ??
+              (lps.ok ? lps.livingProjectState.doctrinePackageRef : undefined))
+            : undefined;
+          const producedAt = new Date().toISOString();
+          const mat =
+            await materializeLifecycleRecommendationFromStructuredOutput({
+              projectId: project.projectId,
+              structuredOutput: turn.structuredOutput,
+              updateEpistemicState: oa.cycleServices.updateEpistemicState,
+              facts: {
+                cycles,
+                lpsActiveCycleInstanceId: lps.ok
+                  ? lps.livingProjectState.activeCycleInstanceId
+                  : null,
+                lpsVersion: lps.ok ? lps.livingProjectState.version : null,
+                doctrinePackageId: doctrinePin?.doctrinePackageId ?? null,
+                doctrinePackageVersion: doctrinePin?.version ?? null,
+                doctrinePackageDigest: doctrinePin?.digest ?? null,
+                trajectory,
+                trajectoryBootstrapPresence,
+                decisions,
+                evidence,
+                epistemicItems,
+                failedMaterialDimensions,
+              },
+              producedAt,
+              createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
+              correlationId: `f1:${project.projectId}`,
+            });
+          if (mat.narrative) {
+            assistantText = mat.narrative;
+          }
+          if (mat.recommendationAttempted) {
+            lifecycleRecommendationMaterialized =
+              mat.materialization?.ok === true;
+            lifecycleRecommendationCode =
+              mat.materialization && !mat.materialization.ok
+                ? mat.materialization.code
+                : mat.materialization?.ok
+                  ? null
+                  : "LR_MATERIALIZE_UNKNOWN";
+          } else {
+            lifecycleRecommendationMaterialized = false;
+          }
+        } else {
+          lifecycleRecommendationMaterialized = false;
+          lifecycleRecommendationCode = "LR_BASIS_UNAVAILABLE";
+        }
+      }
     }

     const { toolEvents, sources, readCoverage } = collectToolTelemetry(
```

## FILE: projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts

```diff
commit 4a80965a5f1687f805544c56be66e5d2ead3ea29
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Sep 10 22:33:06 2026 +0200

    fix(sfia-studio): complete governed lifecycle closure

    Same-lot Phase B: post-ACW LR currentness, cross-surface refresh,
    ASSESS→FINALIZE honesty, obligation-policy wiring, and explicit
    trajectory/reservation resolution without weakening fail-closed.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts
index 45ff1334..b8344b35 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts
@@ -46,6 +46,11 @@ export type PilotLifecycleProjection = {
    * Recommendation ≠ canFinalize / canStart / HumanDecision.
    */
   currentRecommendations?: LifecycleRecommendationEnvelope[];
+  /** D-LC-05 aids — blocking reservations visible for explicit Pilot resolve. */
+  blockingReservations?: ReadonlyArray<{
+    epistemicItemId: string;
+    statement: string;
+  }>;
   /** Resume reconciliation when selected cycle is paused — never cleared by HD alone. */
   resumeReconciliation?: {
     clean: boolean;
```

## FILE: projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts

```diff
commit 4a80965a5f1687f805544c56be66e5d2ead3ea29
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Sep 10 22:33:06 2026 +0200

    fix(sfia-studio): complete governed lifecycle closure

    Same-lot Phase B: post-ACW LR currentness, cross-surface refresh,
    ASSESS→FINALIZE honesty, obligation-policy wiring, and explicit
    trajectory/reservation resolution without weakening fail-closed.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts b/projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts
index 6085c260..7099dc1e 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts
@@ -1216,6 +1216,138 @@ export class PilotLifecycleTransitions {
     return { ok: true, assessment, durationMs: Date.now() - started };
   }

+  /**
+   * D-LC-05 — close the cycle-bound active trajectory step (active → done).
+   * Completes existing domain step states used by exit_criteria assessment.
+   * Does not FINALIZE the cycle and does not invent a new aggregate.
+   */
+  async completeBoundActiveTrajectoryStep(request: {
+    projectId: string;
+    cycleInstanceId: string;
+    createdBy: StartCycleRequest["createdBy"];
+    correlationId?: string;
+  }): Promise<
+    | {
+        ok: true;
+        trajectory: import("../domain/types").ProjectTrajectory;
+        stepId: string;
+        durationMs: number;
+      }
+    | {
+        ok: false;
+        error: ReturnType<typeof createCycleError>;
+        durationMs: number;
+      }
+  > {
+    const started = Date.now();
+    const timestamp = this.deps.clock.nowIso();
+    const correlationId = request.correlationId ?? `cor:traj-step-${Date.now()}`;
+    const cycle = await this.deps.cycles.findById(request.cycleInstanceId);
+    if (!cycle || cycle.projectId !== request.projectId) {
+      return {
+        ok: false,
+        error: createCycleError({
+          detailCode: "CYCLE_NOT_FOUND",
+          timestamp,
+          projectId: request.projectId,
+          cycleInstanceId: request.cycleInstanceId,
+        }),
+        durationMs: Date.now() - started,
+      };
+    }
+    if (cycle.status !== "active") {
+      return {
+        ok: false,
+        error: createCycleError({
+          detailCode: "CYCLE_LIFECYCLE_DENIED",
+          timestamp,
+          projectId: request.projectId,
+          cycleInstanceId: request.cycleInstanceId,
+          internalCauseRef: "trajectory_step_close_requires_active_cycle",
+        }),
+        durationMs: Date.now() - started,
+      };
+    }
+    const trajectoryId = cycle.trajectoryId;
+    const trajectoryVersion = cycle.trajectoryVersion;
+    const stepId = cycle.trajectoryStepId;
+    if (!trajectoryId || trajectoryVersion == null || !stepId) {
+      return {
+        ok: false,
+        error: createCycleError({
+          detailCode: "CYCLE_LIFECYCLE_DENIED",
+          timestamp,
+          projectId: request.projectId,
+          cycleInstanceId: request.cycleInstanceId,
+          internalCauseRef: "cycle_trajectory_binding_missing",
+        }),
+        durationMs: Date.now() - started,
+      };
+    }
+
+    try {
+      const persist = async () => {
+        const traj = await this.deps.trajectories.findByProjectAndVersion(
+          request.projectId,
+          trajectoryVersion,
+        );
+        if (!traj || traj.trajectoryId !== trajectoryId) {
+          throw new Error("trajectory_binding_missing");
+        }
+        const stepIdx = traj.steps.findIndex((s) => s.stepId === stepId);
+        if (stepIdx < 0) throw new Error("trajectory_step_missing");
+        const step = traj.steps[stepIdx]!;
+        if (step.state === "done" || step.state === "skipped") {
+          return traj;
+        }
+        if (step.state !== "active") {
+          throw new Error(`trajectory_step_not_active:${step.state}`);
+        }
+        const nextSteps = traj.steps.map((s, i) =>
+          i === stepIdx ? { ...s, state: "done" as const } : s,
+        );
+        const next = { ...traj, steps: nextSteps };
+        await this.deps.trajectories.save(next);
+        return next;
+      };
+
+      const next =
+        this.deps.store != null
+          ? await this.deps.store.runInTransaction(persist)
+          : await persist();
+      const durationMs = Date.now() - started;
+      this.deps.audit.append({
+        event: "oa.cycle.lifecycle_transition",
+        ts: timestamp,
+        correlationId,
+        projectId: request.projectId,
+        cycleInstanceId: request.cycleInstanceId,
+        action: "COMPLETE_TRAJECTORY_STEP",
+        fromStatus: cycle.status,
+        toStatus: cycle.status,
+        actorId: request.createdBy.actorId,
+        result: "ok",
+        detailCode: "TRAJECTORY_STEP_DONE",
+        durationMs,
+      });
+      return { ok: true, trajectory: next, stepId, durationMs };
+    } catch (err) {
+      const durationMs = Date.now() - started;
+      return {
+        ok: false,
+        error: createCycleError({
+          detailCode: "PERSISTENCE_FAILURE",
+          timestamp,
+          projectId: request.projectId,
+          cycleInstanceId: request.cycleInstanceId,
+          internalCauseRef:
+            err instanceof Error ? err.message : "trajectory_step_close_failed",
+        }),
+        durationMs,
+      };
+    }
+  }
+
   /**
    * Re-evaluate after obligations change; completes when ready without new FINALIZE.
    */
```

---

## Full post-change contents (sensitive files)

All four files are under ~2000 lines; full file contents follow (as of Product HEAD `4a80965a`).

Focus notes for reviewers:
- `pilotLifecycleTransitions.ts` — complete `boundActiveTrajectoryStep` region + surrounding lifecycle transitions
- `orchestrateTurn.ts` — D-LC-01 ACW→LR block
- `actions.ts` — assessment projection + new actions
- `pilotLifecycleActions.ts` — obligation policy + reservation resolve + trajectory step

## FULL FILE: projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts

```typescript
/**
 * CORR-PROOF-05 — Pilot-governed CycleInstance lifecycle transitions.
 * START / PAUSE / RESUME / FINALIZE / CANCEL (+ auto-complete when ready).
 * Never uses evaluateMorrisGateRequired / morrisGateRequired as authority.
 */
import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ReviewBundle } from "@/lib/oa/evidence-review/domain/reviewBundleTypes";
import type { ProjectServices } from "@/lib/oa/project";
import { createCycleError } from "../domain/errors";
import {
  assertAtMostOneActiveCycle,
  assertLifecycleTransition,
  targetStatusForAction,
} from "../domain/lifecycleInvariants";
import type {
  AssessFinalizationRequest,
  AssessFinalizationResult,
  CancelCycleRequest,
  CycleInstance,
  EpistemicItem,
  FinalizationApplicabilityRules,
  FinalizeCycleRequest,
  PauseCycleRequest,
  PilotLifecycleResult,
  ResumeCycleRequest,
  StartCycleRequest,
} from "../domain/types";
import type { CycleAuditPort } from "../ports/cycleAudit";
import type { CyclePersistenceUnitOfWorkPort } from "../ports/cyclePersistenceUnitOfWorkPort";
import type { CycleRepositoryPort } from "../ports/cycleRepository";
import type { TrajectoryRepositoryPort } from "../ports/trajectoryRepository";
import {
  assessFinalizationObligations,
  isAcceptedCancelDecision,
  isAcceptedFinalizeDecision,
  isAcceptedResumeReplanDecision,
  isAcceptedStartTrajectoryDecision,
  type AssessFinalizationInput,
} from "./assessFinalization";
import {
  assessResumeReconciliation,
  buildPauseReconciliationSnapshot,
} from "./assessResumeReconciliation";
import { assessStartReadiness } from "./assessStartReadiness";
import {
  deriveFinalizationApplicability,
  type DerivableExecutionContract,
} from "./deriveFinalizationApplicability";
import {
  deriveLifecycleBlockersFromEpistemicItems,
  lifecycleBlockersFromReaderFailure,
  type LifecycleBlockerSnapshot,
} from "./deriveLifecycleBlockers";
import {
  assertTrajectoryBoundCycleStartReady,
  classifyTrajectoryBinding,
  type QualifyCycleWithCkcPort,
  type TrajectoryBindingClass,
} from "./lifecycleRecommendation/assertTrajectoryBoundCycleStartReady";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

export type LifecycleDecisionReader = {
  getById(decisionId: string): Promise<HumanDecision | null>;
  listByProject(projectId: string): Promise<HumanDecision[]>;
};

export type LifecycleEvidenceReader = {
  listByProject(projectId: string): Promise<Evidence[]>;
};

export type LifecycleReviewBundleReader = {
  listByProject(projectId: string): Promise<ReviewBundle[]>;
};

export type LifecycleEpistemicReader = {
  listByProject(projectId: string): Promise<EpistemicItem[]>;
};

export type LifecycleExecutionSnapshotReader = {
  listContractsByProject?(projectId: string): Promise<
    Array<DerivableExecutionContract>
  >;
  listAttemptsByProject?(projectId: string): Promise<
    Array<{
      attemptId: string;
      contractId?: string;
      terminalState?: string;
    }>
  >;
};

/** Narrow authority verify surface for Pilot lifecycle mutations. */
export type PilotLifecycleAuthorityPort = {
  verify(request: {
    actorId: string;
    scope: string;
    evidenceId?: string;
    requiredLevel?: "N1" | "N2" | "N3";
    requireMorrisGate?: boolean;
  }): { ok: boolean; reason?: string };
};

export type PilotLifecycleDeps = {
  cycles: CycleRepositoryPort;
  trajectories: TrajectoryRepositoryPort;
  projectServices: ProjectServices;
  clock: ClockPort;
  audit: CycleAuditPort;
  store?: CyclePersistenceUnitOfWorkPort;
  decisions?: LifecycleDecisionReader;
  evidence?: LifecycleEvidenceReader;
  reviewBundles?: LifecycleReviewBundleReader;
  execution?: LifecycleExecutionSnapshotReader;
  epistemic?: LifecycleEpistemicReader;
  authority?: PilotLifecycleAuthorityPort;
  /**
   * CR-START-01 — required for trajectory-bound START (fail-closed if missing).
   * Wired once from vertical-slice-runtime via create*CycleServices.
   */
  qualifyCycleWithCkc?: QualifyCycleWithCkcPort;
  /**
   * Optional static applicability override — test-only / low-level.
   * Product `buildAssessment` always derives from durable facts and ignores this.
   */
  applicabilityRules?: FinalizationApplicabilityRules;
};

function authorityNotConfiguredReason(reason?: string): boolean {
  if (!reason) return true;
  const r = reason.toLowerCase();
  return (
    r.includes("no_evidence") ||
    r.includes("not_configured") ||
    r.includes("not configured") ||
    r.includes("evidence_not_found") ||
    r === "authority_port_unavailable"
  );
}

async function appendLpsActiveLink(input: {
  projectServices: ProjectServices;
  projectId: string;
  createdBy: StartCycleRequest["createdBy"];
  correlationId: string;
  expectedLpsVersion?: number;
  activeCycleInstanceId: string | null;
  /** D-GF-START-01 — bind CKC on LPS at START for trajectory-derived cycles. */
  ckcResolutionRef?: string;
}): Promise<{ ok: true; version: number } | { ok: false; detail: string; currentVersion?: number }> {
  const current =
    await input.projectServices.getCurrentLivingProjectState.execute({
      projectId: input.projectId,
    });
  if (!current.ok) {
    return { ok: false, detail: "missing_current_lps" };
  }
  const expected =
    input.expectedLpsVersion ?? current.livingProjectState.version;
  const appended =
    await input.projectServices.appendLivingProjectStateVersion.execute({
      projectId: input.projectId,
      expectedVersion: expected,
      objective: current.livingProjectState.objective,
      createdBy: input.createdBy,
      correlationId: input.correlationId,
      context: current.livingProjectState.context,
      scope: current.livingProjectState.scope,
      activeCycleInstanceId: input.activeCycleInstanceId,
      ...(input.ckcResolutionRef !== undefined
        ? { ckcResolutionRef: input.ckcResolutionRef }
        : {}),
    });
  if (!appended.ok) {
    if (appended.error.detailCode === "LPS_VERSION_CONFLICT") {
      return {
        ok: false,
        detail: "lps_version_conflict",
        currentVersion: appended.error.currentVersion,
      };
    }
    return { ok: false, detail: "lps_append_failed" };
  }
  return { ok: true, version: appended.livingProjectState.version };
}

export class PilotLifecycleTransitions {
  constructor(private readonly deps: PilotLifecycleDeps) {}

  async start(request: StartCycleRequest): Promise<PilotLifecycleResult> {
    const started = Date.now();
    const timestamp = this.deps.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createCycleError>[0]>,
    ): PilotLifecycleResult => {
      const durationMs = Date.now() - started;
      const error = createCycleError({
        detailCode,
        timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        internalCauseRef,
        ...extra,
      });
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        action: "START",
        fromStatus: "unknown",
        toStatus: "unknown",
        actorId: request.createdBy.actorId,
        decisionRef: request.decisionId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    if (!request.createdBy?.actorId) {
      return fail("CYCLE_LIFECYCLE_DENIED", "actor_required");
    }

    const authGate = this.verifyAuthority({
      actorId: request.createdBy.actorId,
      cycleInstanceId: request.cycleInstanceId,
      evidenceId: request.authorityEvidenceId,
    });
    if (!authGate.ok) {
      return fail(authGate.detailCode, authGate.internalCauseRef);
    }

    // Peek binding before mutation — INCOMPLETE must not fall through to legacy.
    const peek = await this.deps.cycles.findById(request.cycleInstanceId);
    if (!peek || peek.projectId !== request.projectId) {
      return fail("CYCLE_NOT_FOUND", "missing_cycle");
    }
    const peekBinding = classifyTrajectoryBinding(peek);
    if (peekBinding === "INCOMPLETE_TRAJECTORY_BINDING") {
      return fail("CYCLE_START_NOT_READY", "TRAJECTORY_BINDING_INCOMPLETE");
    }

    if (peekBinding === "COMPLETE_TRAJECTORY_BOUND") {
      // CR-START-01A — guard + readiness + persist must share one Product UoW.
      if (!this.deps.store) {
        return fail("CYCLE_START_NOT_READY", "START_UOW_UNAVAILABLE");
      }
      // persistLifecycleMutation catches and returns ok:false without rethrowing.
      // Re-throw !ok inside the outer UoW so BEGIN/COMMIT rolls back any writes
      // (same pattern as startPreparedTrajectoryCycle facade).
      try {
        return await this.deps.store.runInTransaction(async () => {
          const result = await this.startCompleteTrajectoryBoundInsideUow({
            request,
            started,
            timestamp,
            correlationId,
            fail,
          });
          if (!result.ok) {
            const err = new Error("COMPLETE_START_UOW_ROLLBACK") as Error & {
              pilotResult: PilotLifecycleResult;
            };
            err.pilotResult = result;
            throw err;
          }
          return result;
        });
      } catch (err) {
        if (
          err instanceof Error &&
          err.message === "COMPLETE_START_UOW_ROLLBACK" &&
          "pilotResult" in err
        ) {
          return (err as Error & { pilotResult: PilotLifecycleResult })
            .pilotResult;
        }
        return fail(
          "PERSISTENCE_FAILURE",
          err instanceof Error ? err.message : "complete_start_uow_failed",
        );
      }
    }

    return this.startLegacyUnbound({
      request,
      started,
      timestamp,
      correlationId,
      fail,
      cycle: peek,
    });
  }

  /**
   * COMPLETE_TRAJECTORY_BOUND START body — caller must already be inside
   * `store.runInTransaction`. Nested `persistLifecycleMutation` joins the same UoW.
   */
  private async startCompleteTrajectoryBoundInsideUow(input: {
    request: StartCycleRequest;
    started: number;
    timestamp: string;
    correlationId: string;
    fail: (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createCycleError>[0]>,
    ) => PilotLifecycleResult;
  }): Promise<PilotLifecycleResult> {
    const { request, started, timestamp, correlationId, fail } = input;

    const projectResult = await this.deps.projectServices.getProject.execute({
      projectId: request.projectId,
    });
    const projectOk = projectResult.ok;
    if (!projectOk) {
      return fail("PROJECT_NOT_FOUND", "missing_project");
    }

    const cycle = await this.deps.cycles.findById(request.cycleInstanceId);
    if (!cycle || cycle.projectId !== request.projectId) {
      return fail("CYCLE_NOT_FOUND", "missing_cycle");
    }

    const binding: TrajectoryBindingClass = classifyTrajectoryBinding(cycle);
    if (binding === "INCOMPLETE_TRAJECTORY_BINDING") {
      return fail("CYCLE_START_NOT_READY", "TRAJECTORY_BINDING_INCOMPLETE");
    }
    if (binding !== "COMPLETE_TRAJECTORY_BOUND") {
      return fail("CYCLE_START_NOT_READY", "TRAJECTORY_BINDING_INCOMPLETE");
    }

    if (isTerminalGuard(cycle)) {
      return fail("CYCLE_TERMINAL", `terminal_${cycle.status}`);
    }
    const transition = assertLifecycleTransition({
      from: cycle.status,
      action: "START",
    });
    if (transition) return fail(transition.detailCode, transition.reason);

    const siblings = await this.deps.cycles.listByProject(request.projectId);
    const single = assertAtMostOneActiveCycle({
      cycles: siblings,
      excludeCycleInstanceId: request.cycleInstanceId,
    });
    const siblingActiveExists = Boolean(single);

    const lps =
      await this.deps.projectServices.getCurrentLivingProjectState.execute({
        projectId: request.projectId,
      });
    const lpsReadable = lps.ok;
    const lpsActiveCycleInstanceId = lps.ok
      ? lps.livingProjectState.activeCycleInstanceId
      : undefined;

    const ready = await assertTrajectoryBoundCycleStartReady({
      projectId: request.projectId,
      cycle,
      projectServices: this.deps.projectServices,
      trajectories: this.deps.trajectories,
      decisions: this.deps.decisions,
      epistemic: this.deps.epistemic,
      qualifyCycleWithCkc: this.deps.qualifyCycleWithCkc,
    });
    if (!ready.ok) {
      return fail("CYCLE_START_NOT_READY", ready.code);
    }
    const guardedCkcResolutionRef = ready.ckcResolutionRef;

    const trajectory = await this.loadTrajectory(request.projectId);
    const decisions = this.deps.decisions
      ? await this.deps.decisions.listByProject(request.projectId)
      : [];

    const doctrineReadable = Boolean(
      (projectResult.ok && projectResult.project.doctrinePackageRef) ||
        (lps.ok && lps.livingProjectState.doctrinePackageRef),
    );

    const blockersSnap = await this.loadBlockers(request.projectId);
    // COMPLETE greenfield: ignore start-trajectory HD hints — candidate HD is SoT.
    const readiness = assessStartReadiness({
      assessedAt: timestamp,
      projectOk,
      cycle,
      projectId: request.projectId,
      lpsReadable,
      lpsActiveCycleInstanceId,
      siblingActiveExists,
      trajectory,
      decisions,
      doctrineReadable,
      blockingReservationStatements: blockersSnap.ok
        ? blockersSnap.statements
        : undefined,
      blockerSourceUnreadable: !blockersSnap.ok,
    });

    const nonHdBlockers = readiness.blockers.filter(
      (b) => b !== "start_trajectory_hd_missing_or_invalid",
    );
    if (
      nonHdBlockers.length > 0 ||
      (!readiness.ready && !readiness.requiresTrajectoryHumanDecision)
    ) {
      return fail(
        "CYCLE_START_NOT_READY",
        readiness.blockers.join("|") || "start_not_ready",
      );
    }

    // COMPLETE must not create/consume start-trajectory HD; fail closed if readiness asks.
    if (readiness.requiresTrajectoryHumanDecision) {
      return fail(
        "CYCLE_DECISION_REQUIRED",
        "start_trajectory_hd_not_applicable_for_complete_binding",
      );
    }

    if (single) return fail(single.detailCode, single.reason);

    const next: CycleInstance = {
      ...structuredClone(cycle),
      status: "active",
      acknowledgedAt: cycle.acknowledgedAt ?? timestamp,
      pauseReconciliation: null,
    };

    return this.persistLifecycleMutation({
      action: "START",
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
      createdBy: request.createdBy,
      correlationId,
      expectedLpsVersion: request.expectedLpsVersion,
      decisionId: request.decisionId,
      fromStatus: cycle.status,
      toStatus: "active",
      next,
      setActiveLink: request.cycleInstanceId,
      clearActiveLink: false,
      started,
      timestamp,
      fail,
      ckcResolutionRef: guardedCkcResolutionRef ?? cycle.ckcResolutionRef,
      activateTrajectoryStep: {
        trajectoryId: cycle.trajectoryId!,
        trajectoryVersion: cycle.trajectoryVersion!,
        stepId: cycle.trajectoryStepId!,
      },
    });
  }

  /** LEGACY_UNBOUND START — unchanged persist shape (no trajectory strong guard). */
  private async startLegacyUnbound(input: {
    request: StartCycleRequest;
    started: number;
    timestamp: string;
    correlationId: string;
    fail: (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createCycleError>[0]>,
    ) => PilotLifecycleResult;
    cycle: CycleInstance;
  }): Promise<PilotLifecycleResult> {
    const { request, started, timestamp, correlationId, fail } = input;
    let cycle = input.cycle;

    const projectResult = await this.deps.projectServices.getProject.execute({
      projectId: request.projectId,
    });
    const projectOk = projectResult.ok;
    if (!projectOk) {
      return fail("PROJECT_NOT_FOUND", "missing_project");
    }

    // Fresh re-read — refuse if binding became incomplete/complete mid-flight.
    const fresh = await this.deps.cycles.findById(request.cycleInstanceId);
    if (!fresh || fresh.projectId !== request.projectId) {
      return fail("CYCLE_NOT_FOUND", "missing_cycle");
    }
    const freshBinding = classifyTrajectoryBinding(fresh);
    if (freshBinding !== "LEGACY_UNBOUND") {
      return fail("CYCLE_START_NOT_READY", "TRAJECTORY_BINDING_INCOMPLETE");
    }
    cycle = fresh;

    if (isTerminalGuard(cycle)) {
      return fail("CYCLE_TERMINAL", `terminal_${cycle.status}`);
    }
    const transition = assertLifecycleTransition({
      from: cycle.status,
      action: "START",
    });
    if (transition) return fail(transition.detailCode, transition.reason);

    const siblings = await this.deps.cycles.listByProject(request.projectId);
    const single = assertAtMostOneActiveCycle({
      cycles: siblings,
      excludeCycleInstanceId: request.cycleInstanceId,
    });
    const siblingActiveExists = Boolean(single);

    const lps =
      await this.deps.projectServices.getCurrentLivingProjectState.execute({
        projectId: request.projectId,
      });
    const lpsReadable = lps.ok;
    const lpsActiveCycleInstanceId = lps.ok
      ? lps.livingProjectState.activeCycleInstanceId
      : undefined;

    const trajectory = await this.loadTrajectory(request.projectId);
    const decisions = this.deps.decisions
      ? await this.deps.decisions.listByProject(request.projectId)
      : [];

    const doctrineReadable = Boolean(
      (projectResult.ok && projectResult.project.doctrinePackageRef) ||
        (lps.ok && lps.livingProjectState.doctrinePackageRef),
    );

    const blockersSnap = await this.loadBlockers(request.projectId);
    const readiness = assessStartReadiness({
      assessedAt: timestamp,
      projectOk,
      cycle,
      projectId: request.projectId,
      lpsReadable,
      lpsActiveCycleInstanceId,
      siblingActiveExists,
      trajectory,
      decisions,
      decisionId: request.decisionId,
      doctrineReadable,
      blockingReservationStatements: blockersSnap.ok
        ? blockersSnap.statements
        : undefined,
      blockerSourceUnreadable: !blockersSnap.ok,
    });

    const nonHdBlockers = readiness.blockers.filter(
      (b) => b !== "start_trajectory_hd_missing_or_invalid",
    );
    if (
      nonHdBlockers.length > 0 ||
      (!readiness.ready && !readiness.requiresTrajectoryHumanDecision)
    ) {
      return fail(
        "CYCLE_START_NOT_READY",
        readiness.blockers.join("|") || "start_not_ready",
      );
    }

    if (readiness.requiresTrajectoryHumanDecision) {
      if (!this.deps.decisions) {
        return fail("CYCLE_DECISION_REQUIRED", "decision_reader_unavailable");
      }
      let hd: HumanDecision | null = null;
      if (request.decisionId) {
        hd = await this.deps.decisions.getById(request.decisionId);
      } else {
        hd =
          decisions.find((d) =>
            isAcceptedStartTrajectoryDecision(
              d,
              request.cycleInstanceId,
              request.projectId,
            ),
          ) ?? null;
      }
      if (
        !hd ||
        !isAcceptedStartTrajectoryDecision(
          hd,
          request.cycleInstanceId,
          request.projectId,
        )
      ) {
        return fail(
          "CYCLE_DECISION_REQUIRED",
          "start_trajectory_hd_missing_or_invalid",
        );
      }
    }

    if (single) return fail(single.detailCode, single.reason);

    const next: CycleInstance = {
      ...structuredClone(cycle),
      status: "active",
      acknowledgedAt: cycle.acknowledgedAt ?? timestamp,
      pauseReconciliation: null,
    };

    return this.persistLifecycleMutation({
      action: "START",
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
      createdBy: request.createdBy,
      correlationId,
      expectedLpsVersion: request.expectedLpsVersion,
      decisionId: request.decisionId,
      fromStatus: cycle.status,
      toStatus: "active",
      next,
      setActiveLink: request.cycleInstanceId,
      clearActiveLink: false,
      started,
      timestamp,
      fail,
    });
  }

  async pause(request: PauseCycleRequest): Promise<PilotLifecycleResult> {
    const started = Date.now();
    const timestamp = this.deps.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createCycleError>[0]>,
    ): PilotLifecycleResult => {
      const durationMs = Date.now() - started;
      const error = createCycleError({
        detailCode,
        timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        internalCauseRef,
        ...extra,
      });
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        action: "PAUSE",
        fromStatus: "unknown",
        toStatus: "unknown",
        actorId: request.createdBy.actorId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    if (!request.createdBy?.actorId) {
      return fail("CYCLE_LIFECYCLE_DENIED", "actor_required");
    }

    const authGate = this.verifyAuthority({
      actorId: request.createdBy.actorId,
      cycleInstanceId: request.cycleInstanceId,
      evidenceId: request.authorityEvidenceId,
    });
    if (!authGate.ok) {
      return fail(authGate.detailCode, authGate.internalCauseRef);
    }

    const projectResult = await this.deps.projectServices.getProject.execute({
      projectId: request.projectId,
    });
    if (!projectResult.ok) {
      return fail("PROJECT_NOT_FOUND", "missing_project");
    }

    const cycle = await this.deps.cycles.findById(request.cycleInstanceId);
    if (!cycle || cycle.projectId !== request.projectId) {
      return fail("CYCLE_NOT_FOUND", "missing_cycle");
    }
    if (isTerminalGuard(cycle)) {
      return fail("CYCLE_TERMINAL", `terminal_${cycle.status}`);
    }
    const transition = assertLifecycleTransition({
      from: cycle.status,
      action: "PAUSE",
    });
    if (transition) return fail(transition.detailCode, transition.reason);

    const lps =
      await this.deps.projectServices.getCurrentLivingProjectState.execute({
        projectId: request.projectId,
      });
    const trajectory = await this.loadTrajectory(request.projectId);
    const decisions = this.deps.decisions
      ? await this.deps.decisions.listByProject(request.projectId)
      : [];
    const evidence = this.deps.evidence
      ? await this.deps.evidence.listByProject(request.projectId)
      : [];

    const doctrinePin =
      projectResult.project.doctrinePackageRef ??
      (lps.ok ? lps.livingProjectState.doctrinePackageRef : undefined);

    const blockersSnap = await this.loadBlockers(request.projectId);
    const pauseReconciliation = buildPauseReconciliationSnapshot({
      pausedAt: timestamp,
      lpsVersion: lps.ok ? lps.livingProjectState.version : 0,
      lpsActiveCycleInstanceId: lps.ok
        ? lps.livingProjectState.activeCycleInstanceId
        : null,
      objective: lps.ok ? lps.livingProjectState.objective : "",
      context: lps.ok ? (lps.livingProjectState.context ?? "") : "",
      scope: lps.ok ? (lps.livingProjectState.scope ?? "") : "",
      doctrinePackageId: doctrinePin?.doctrinePackageId,
      doctrinePackageVersion: doctrinePin?.version,
      doctrinePackageDigest: doctrinePin?.digest,
      trajectory,
      decisions,
      evidence,
      blockerSnapshotState: blockersSnap.ok ? "KNOWN" : "UNKNOWN",
      blockerSnapshotReason: blockersSnap.ok ? undefined : blockersSnap.reason,
      blockingReservationStatements: blockersSnap.ok
        ? blockersSnap.statements
        : undefined,
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
    });

    const next: CycleInstance = {
      ...structuredClone(cycle),
      status: "paused",
      pauseReconciliation,
    };

    return this.persistLifecycleMutation({
      action: "PAUSE",
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
      createdBy: request.createdBy,
      correlationId,
      expectedLpsVersion: request.expectedLpsVersion,
      fromStatus: cycle.status,
      toStatus: "paused",
      next,
      setActiveLink: null,
      clearActiveLink: true,
      started,
      timestamp,
      fail,
    });
  }

  async resume(request: ResumeCycleRequest): Promise<PilotLifecycleResult> {
    const started = Date.now();
    const timestamp = this.deps.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createCycleError>[0]>,
    ): PilotLifecycleResult => {
      const durationMs = Date.now() - started;
      const error = createCycleError({
        detailCode,
        timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        internalCauseRef,
        ...extra,
      });
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        action: "RESUME",
        fromStatus: "paused",
        toStatus: "paused",
        actorId: request.createdBy.actorId,
        decisionRef: request.decisionId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    if (!request.createdBy?.actorId) {
      return fail("CYCLE_LIFECYCLE_DENIED", "actor_required");
    }

    const authGate = this.verifyAuthority({
      actorId: request.createdBy.actorId,
      cycleInstanceId: request.cycleInstanceId,
      evidenceId: request.authorityEvidenceId,
    });
    if (!authGate.ok) {
      return fail(authGate.detailCode, authGate.internalCauseRef);
    }

    const projectResult = await this.deps.projectServices.getProject.execute({
      projectId: request.projectId,
    });
    if (!projectResult.ok) {
      return fail("PROJECT_NOT_FOUND", "missing_project");
    }

    const cycle = await this.deps.cycles.findById(request.cycleInstanceId);
    if (!cycle || cycle.projectId !== request.projectId) {
      return fail("CYCLE_NOT_FOUND", "missing_cycle");
    }
    if (isTerminalGuard(cycle)) {
      return fail("CYCLE_TERMINAL", `terminal_${cycle.status}`);
    }
    const transition = assertLifecycleTransition({
      from: cycle.status,
      action: "RESUME",
    });
    if (transition) return fail(transition.detailCode, transition.reason);

    const siblings = await this.deps.cycles.listByProject(request.projectId);
    const single = assertAtMostOneActiveCycle({
      cycles: siblings,
      excludeCycleInstanceId: request.cycleInstanceId,
    });

    const lps =
      await this.deps.projectServices.getCurrentLivingProjectState.execute({
        projectId: request.projectId,
      });
    const trajectory = await this.loadTrajectory(request.projectId);
    const decisions = this.deps.decisions
      ? await this.deps.decisions.listByProject(request.projectId)
      : [];
    const evidence = this.deps.evidence
      ? await this.deps.evidence.listByProject(request.projectId)
      : [];

    const doctrinePin =
      projectResult.project.doctrinePackageRef ??
      (lps.ok ? lps.livingProjectState.doctrinePackageRef : undefined);

    const blockersSnap = await this.loadBlockers(request.projectId);
    const reconciliation = assessResumeReconciliation({
      cycle,
      projectId: request.projectId,
      lpsReadable: lps.ok,
      lpsVersion: lps.ok ? lps.livingProjectState.version : 0,
      lpsActiveCycleInstanceId: lps.ok
        ? lps.livingProjectState.activeCycleInstanceId
        : undefined,
      objective: lps.ok ? lps.livingProjectState.objective : "",
      context: lps.ok ? (lps.livingProjectState.context ?? "") : "",
      scope: lps.ok ? (lps.livingProjectState.scope ?? "") : "",
      doctrinePackageId: doctrinePin?.doctrinePackageId,
      doctrinePackageVersion: doctrinePin?.version,
      doctrinePackageDigest: doctrinePin?.digest,
      trajectory,
      decisions,
      evidence,
      blockingReservationStatements: blockersSnap.ok
        ? blockersSnap.statements
        : undefined,
      blockerSourceUnreadable: !blockersSnap.ok,
      siblingActiveExists: Boolean(single),
      callerMaterialDriftHint: request.materialDriftDetected === true,
    });

    if (!reconciliation.clean) {
      // Stay paused; ensure LPS active pointer is cleared.
      // Only a clean reconciliation may activate — replan HD does not override drift.
      if (lps.ok && lps.livingProjectState.activeCycleInstanceId != null) {
        try {
          await appendLpsActiveLink({
            projectServices: this.deps.projectServices,
            projectId: request.projectId,
            createdBy: request.createdBy,
            correlationId,
            expectedLpsVersion: request.expectedLpsVersion,
            activeCycleInstanceId: null,
          });
        } catch {
          /* best-effort clear; drift denial still returned */
        }
      }
      const replanAsserted =
        request.requiresReplanHumanDecision === true ||
        reconciliation.requiresReplanHumanDecision;
      if (replanAsserted && request.decisionId) {
        if (!this.deps.decisions) {
          return fail("CYCLE_DECISION_REQUIRED", "decision_reader_unavailable");
        }
        const hd = await this.deps.decisions.getById(request.decisionId);
        if (
          !hd ||
          !isAcceptedResumeReplanDecision(
            hd,
            request.cycleInstanceId,
            request.projectId,
          )
        ) {
          return fail(
            "CYCLE_DECISION_REQUIRED",
            "resume_replan_hd_missing_or_invalid",
          );
        }
      }
      return fail(
        "CYCLE_RESUME_DRIFT",
        reconciliation.driftReasons.join("|") || "resume_drift",
      );
    }

    // Clean path: no replan HD required.
    void request.requiresReplanHumanDecision;

    if (single) return fail(single.detailCode, single.reason);

    const next: CycleInstance = {
      ...structuredClone(cycle),
      status: "active",
      acknowledgedAt: cycle.acknowledgedAt ?? timestamp,
      pauseReconciliation: null,
    };

    return this.persistLifecycleMutation({
      action: "RESUME",
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
      createdBy: request.createdBy,
      correlationId,
      expectedLpsVersion: request.expectedLpsVersion,
      decisionId: request.decisionId,
      fromStatus: cycle.status,
      toStatus: "active",
      next,
      setActiveLink: request.cycleInstanceId,
      clearActiveLink: false,
      started,
      timestamp,
      fail,
    });
  }

  async finalize(request: FinalizeCycleRequest): Promise<PilotLifecycleResult> {
    const started = Date.now();
    const timestamp = this.deps.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
      assessment?: AssessFinalizationResult extends { ok: true }
        ? never
        : import("../domain/types").FinalizationAssessment,
    ): PilotLifecycleResult => {
      const durationMs = Date.now() - started;
      const error = createCycleError({
        detailCode,
        timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        internalCauseRef,
      });
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        action: "FINALIZE",
        fromStatus: "unknown",
        toStatus: "unknown",
        actorId: request.createdBy.actorId,
        decisionRef: request.decisionId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, assessment, durationMs };
    };

    if (!request.createdBy?.actorId) {
      return fail("CYCLE_LIFECYCLE_DENIED", "actor_required");
    }

    const authGate = this.verifyAuthority({
      actorId: request.createdBy.actorId,
      cycleInstanceId: request.cycleInstanceId,
      evidenceId: request.authorityEvidenceId,
    });
    if (!authGate.ok) {
      return fail(authGate.detailCode, authGate.internalCauseRef);
    }

    if (!this.deps.decisions) {
      return fail("CYCLE_DECISION_REQUIRED", "decision_reader_unavailable");
    }

    const cycle = await this.deps.cycles.findById(request.cycleInstanceId);
    if (!cycle || cycle.projectId !== request.projectId) {
      return fail("CYCLE_NOT_FOUND", "missing_cycle");
    }
    if (isTerminalGuard(cycle)) {
      return fail("CYCLE_TERMINAL", `terminal_${cycle.status}`);
    }
    const transition = assertLifecycleTransition({
      from: cycle.status,
      action: "FINALIZE",
    });
    if (transition) return fail(transition.detailCode, transition.reason);

    const decision = await this.deps.decisions.getById(request.decisionId);
    if (
      !decision ||
      !isAcceptedFinalizeDecision(
        decision,
        request.cycleInstanceId,
        request.projectId,
      )
    ) {
      return fail("CYCLE_DECISION_REQUIRED", "finalize_hd_missing_or_invalid");
    }

    const assessment = await this.buildAssessment({
      cycle,
      projectId: request.projectId,
      finalizeDecisionId: request.decisionId,
      assessedAt: timestamp,
    });

    this.deps.audit.append({
      event: "oa.cycle.finalization_assessed",
      ts: timestamp,
      correlationId,
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
      decisionRef: request.decisionId,
      canComplete: assessment.canComplete,
      blockers: assessment.blockers,
      result: "ok",
      durationMs: Date.now() - started,
    });

    if (!assessment.canComplete) {
      const durationMs = Date.now() - started;
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        action: "FINALIZE",
        fromStatus: cycle.status,
        toStatus: cycle.status,
        actorId: request.createdBy.actorId,
        decisionRef: request.decisionId,
        result: "ok",
        detailCode: "CYCLE_FINALIZE_INCOMPLETE",
        durationMs,
      });
      return {
        ok: true,
        cycle: structuredClone(cycle),
        assessment,
        durationMs,
      };
    }

    // Auto-complete — no second Close click
    return this.completeFromAssessment({
      cycle,
      projectId: request.projectId,
      createdBy: request.createdBy,
      correlationId,
      expectedLpsVersion: request.expectedLpsVersion,
      decisionId: request.decisionId,
      assessment,
      started,
      timestamp,
    });
  }

  async cancel(request: CancelCycleRequest): Promise<PilotLifecycleResult> {
    const started = Date.now();
    const timestamp = this.deps.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
    ): PilotLifecycleResult => {
      const durationMs = Date.now() - started;
      const error = createCycleError({
        detailCode,
        timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        internalCauseRef,
      });
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        action: "CANCEL",
        fromStatus: "unknown",
        toStatus: "unknown",
        actorId: request.createdBy.actorId,
        decisionRef: request.decisionId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    if (!request.createdBy?.actorId) {
      return fail("CYCLE_LIFECYCLE_DENIED", "actor_required");
    }

    const authGate = this.verifyAuthority({
      actorId: request.createdBy.actorId,
      cycleInstanceId: request.cycleInstanceId,
      evidenceId: request.authorityEvidenceId,
    });
    if (!authGate.ok) {
      return fail(authGate.detailCode, authGate.internalCauseRef);
    }

    if (!this.deps.decisions) {
      return fail("CYCLE_DECISION_REQUIRED", "decision_reader_unavailable");
    }
    const decision = await this.deps.decisions.getById(request.decisionId);
    if (
      !decision ||
      !isAcceptedCancelDecision(
        decision,
        request.cycleInstanceId,
        request.projectId,
      )
    ) {
      return fail("CYCLE_DECISION_REQUIRED", "cancel_hd_missing_or_invalid");
    }

    return this.runTransition({
      action: "CANCEL",
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
      createdBy: request.createdBy,
      correlationId,
      expectedLpsVersion: request.expectedLpsVersion,
      decisionId: request.decisionId,
      authorityEvidenceId: request.authorityEvidenceId,
      setActiveLink: null,
      clearActiveLink: true,
      setClosedAt: true,
      skipAuthority: true,
    });
  }

  async assess(
    request: AssessFinalizationRequest,
  ): Promise<AssessFinalizationResult> {
    const started = Date.now();
    const timestamp = this.deps.clock.nowIso();
    const cycle = await this.deps.cycles.findById(request.cycleInstanceId);
    if (!cycle || cycle.projectId !== request.projectId) {
      return {
        ok: false,
        error: createCycleError({
          detailCode: "CYCLE_NOT_FOUND",
          timestamp,
          projectId: request.projectId,
          cycleInstanceId: request.cycleInstanceId,
        }),
        durationMs: Date.now() - started,
      };
    }
    const assessment = await this.buildAssessment({
      cycle,
      projectId: request.projectId,
      finalizeDecisionId: request.finalizeDecisionId ?? null,
      assessedAt: timestamp,
    });
    this.deps.audit.append({
      event: "oa.cycle.finalization_assessed",
      ts: timestamp,
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
      decisionRef: assessment.finalizeDecisionId ?? undefined,
      canComplete: assessment.canComplete,
      blockers: assessment.blockers,
      result: "ok",
      durationMs: Date.now() - started,
    });
    return { ok: true, assessment, durationMs: Date.now() - started };
  }

  /**
   * D-LC-05 — close the cycle-bound active trajectory step (active → done).
   * Completes existing domain step states used by exit_criteria assessment.
   * Does not FINALIZE the cycle and does not invent a new aggregate.
   */
  async completeBoundActiveTrajectoryStep(request: {
    projectId: string;
    cycleInstanceId: string;
    createdBy: StartCycleRequest["createdBy"];
    correlationId?: string;
  }): Promise<
    | {
        ok: true;
        trajectory: import("../domain/types").ProjectTrajectory;
        stepId: string;
        durationMs: number;
      }
    | {
        ok: false;
        error: ReturnType<typeof createCycleError>;
        durationMs: number;
      }
  > {
    const started = Date.now();
    const timestamp = this.deps.clock.nowIso();
    const correlationId = request.correlationId ?? `cor:traj-step-${Date.now()}`;
    const cycle = await this.deps.cycles.findById(request.cycleInstanceId);
    if (!cycle || cycle.projectId !== request.projectId) {
      return {
        ok: false,
        error: createCycleError({
          detailCode: "CYCLE_NOT_FOUND",
          timestamp,
          projectId: request.projectId,
          cycleInstanceId: request.cycleInstanceId,
        }),
        durationMs: Date.now() - started,
      };
    }
    if (cycle.status !== "active") {
      return {
        ok: false,
        error: createCycleError({
          detailCode: "CYCLE_LIFECYCLE_DENIED",
          timestamp,
          projectId: request.projectId,
          cycleInstanceId: request.cycleInstanceId,
          internalCauseRef: "trajectory_step_close_requires_active_cycle",
        }),
        durationMs: Date.now() - started,
      };
    }
    const trajectoryId = cycle.trajectoryId;
    const trajectoryVersion = cycle.trajectoryVersion;
    const stepId = cycle.trajectoryStepId;
    if (!trajectoryId || trajectoryVersion == null || !stepId) {
      return {
        ok: false,
        error: createCycleError({
          detailCode: "CYCLE_LIFECYCLE_DENIED",
          timestamp,
          projectId: request.projectId,
          cycleInstanceId: request.cycleInstanceId,
          internalCauseRef: "cycle_trajectory_binding_missing",
        }),
        durationMs: Date.now() - started,
      };
    }

    try {
      const persist = async () => {
        const traj = await this.deps.trajectories.findByProjectAndVersion(
          request.projectId,
          trajectoryVersion,
        );
        if (!traj || traj.trajectoryId !== trajectoryId) {
          throw new Error("trajectory_binding_missing");
        }
        const stepIdx = traj.steps.findIndex((s) => s.stepId === stepId);
        if (stepIdx < 0) throw new Error("trajectory_step_missing");
        const step = traj.steps[stepIdx]!;
        if (step.state === "done" || step.state === "skipped") {
          return traj;
        }
        if (step.state !== "active") {
          throw new Error(`trajectory_step_not_active:${step.state}`);
        }
        const nextSteps = traj.steps.map((s, i) =>
          i === stepIdx ? { ...s, state: "done" as const } : s,
        );
        const next = { ...traj, steps: nextSteps };
        await this.deps.trajectories.save(next);
        return next;
      };

      const next =
        this.deps.store != null
          ? await this.deps.store.runInTransaction(persist)
          : await persist();
      const durationMs = Date.now() - started;
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        action: "COMPLETE_TRAJECTORY_STEP",
        fromStatus: cycle.status,
        toStatus: cycle.status,
        actorId: request.createdBy.actorId,
        result: "ok",
        detailCode: "TRAJECTORY_STEP_DONE",
        durationMs,
      });
      return { ok: true, trajectory: next, stepId, durationMs };
    } catch (err) {
      const durationMs = Date.now() - started;
      return {
        ok: false,
        error: createCycleError({
          detailCode: "PERSISTENCE_FAILURE",
          timestamp,
          projectId: request.projectId,
          cycleInstanceId: request.cycleInstanceId,
          internalCauseRef:
            err instanceof Error ? err.message : "trajectory_step_close_failed",
        }),
        durationMs,
      };
    }
  }

  /**
   * Re-evaluate after obligations change; completes when ready without new FINALIZE.
   */
  async reevaluateAndComplete(input: {
    cycleInstanceId: string;
    projectId: string;
    createdBy: StartCycleRequest["createdBy"];
    correlationId?: string;
    expectedLpsVersion?: number;
  }): Promise<PilotLifecycleResult> {
    const started = Date.now();
    const timestamp = this.deps.clock.nowIso();
    const correlationId = input.correlationId ?? newId("cor");
    const cycle = await this.deps.cycles.findById(input.cycleInstanceId);
    if (!cycle || cycle.projectId !== input.projectId) {
      return {
        ok: false,
        error: createCycleError({
          detailCode: "CYCLE_NOT_FOUND",
          timestamp,
          correlationId,
          projectId: input.projectId,
          cycleInstanceId: input.cycleInstanceId,
        }),
        durationMs: Date.now() - started,
      };
    }
    if (cycle.status === "completed" || cycle.status === "cancelled") {
      return {
        ok: false,
        error: createCycleError({
          detailCode: "CYCLE_TERMINAL",
          timestamp,
          correlationId,
          projectId: input.projectId,
          cycleInstanceId: input.cycleInstanceId,
          internalCauseRef: "already_terminal",
        }),
        durationMs: Date.now() - started,
      };
    }
    const assessment = await this.buildAssessment({
      cycle,
      projectId: input.projectId,
      assessedAt: timestamp,
    });
    if (!assessment.canComplete) {
      return {
        ok: true,
        cycle: structuredClone(cycle),
        assessment,
        durationMs: Date.now() - started,
      };
    }
    return this.completeFromAssessment({
      cycle,
      projectId: input.projectId,
      createdBy: input.createdBy,
      correlationId,
      expectedLpsVersion: input.expectedLpsVersion,
      decisionId: assessment.finalizeDecisionId ?? undefined,
      assessment,
      started,
      timestamp,
    });
  }

  private verifyAuthority(input: {
    actorId: string;
    cycleInstanceId: string;
    evidenceId?: string;
  }):
    | { ok: true }
    | {
        ok: false;
        detailCode: "AUTHORITY_NOT_CONFIGURED" | "CYCLE_LIFECYCLE_DENIED";
        internalCauseRef: string;
      } {
    if (!this.deps.authority) {
      return {
        ok: false,
        detailCode: "AUTHORITY_NOT_CONFIGURED",
        internalCauseRef: "authority_port_unavailable",
      };
    }
    const result = this.deps.authority.verify({
      actorId: input.actorId,
      scope: `pilot-lifecycle:${input.cycleInstanceId}`,
      evidenceId: input.evidenceId,
      requiredLevel: "N3",
      requireMorrisGate: true,
    });
    if (result.ok) return { ok: true };
    if (authorityNotConfiguredReason(result.reason)) {
      return {
        ok: false,
        detailCode: "AUTHORITY_NOT_CONFIGURED",
        internalCauseRef: result.reason ?? "authority_not_configured",
      };
    }
    return {
      ok: false,
      detailCode: "CYCLE_LIFECYCLE_DENIED",
      internalCauseRef: result.reason ?? "authority_denied",
    };
  }

  private async buildAssessment(input: {
    cycle: CycleInstance;
    projectId: string;
    finalizeDecisionId?: string | null;
    assessedAt: string;
  }) {
    const decisions = this.deps.decisions
      ? await this.deps.decisions.listByProject(input.projectId)
      : [];
    const evidence = this.deps.evidence
      ? await this.deps.evidence.listByProject(input.projectId)
      : [];
    const reviewBundles = this.deps.reviewBundles
      ? await this.deps.reviewBundles.listByProject(input.projectId)
      : [];
    const trajectory = await this.loadTrajectory(input.projectId);

    const executionContracts = this.deps.execution?.listContractsByProject
      ? await this.deps.execution.listContractsByProject(input.projectId)
      : [];
    const executionAttempts = this.deps.execution?.listAttemptsByProject
      ? await this.deps.execution.listAttemptsByProject(input.projectId)
      : [];

    // Product path: always derive from durable facts (ignore static applicabilityRules).
    const applicability = deriveFinalizationApplicability({
      cycleInstanceId: input.cycle.cycleInstanceId,
      projectId: input.projectId,
      trajectory,
      decisions,
      evidence,
      reviewBundles,
      executionContracts,
    });

    const blockersSnap = await this.loadBlockers(input.projectId);
    const blockingReservationStatements = blockersSnap.ok
      ? blockersSnap.statements
      : ["blocker_source_unreadable"];

    const snapshot: AssessFinalizationInput = {
      cycle: input.cycle,
      projectId: input.projectId,
      assessedAt: input.assessedAt,
      decisions,
      evidence,
      reviewBundles,
      trajectory,
      finalizeDecisionId: input.finalizeDecisionId,
      executionContracts,
      executionAttempts,
      applicability,
      blockingReservationStatements,
    };
    return assessFinalizationObligations(snapshot);
  }

  private async loadBlockers(
    projectId: string,
  ): Promise<LifecycleBlockerSnapshot> {
    if (!this.deps.epistemic) {
      return lifecycleBlockersFromReaderFailure("epistemic_reader_unavailable");
    }
    try {
      const items = await this.deps.epistemic.listByProject(projectId);
      return deriveLifecycleBlockersFromEpistemicItems(items);
    } catch {
      return lifecycleBlockersFromReaderFailure("epistemic_unreadable");
    }
  }

  private async loadTrajectory(projectId: string) {
    try {
      return await this.deps.trajectories.findCurrentByProjectId(projectId);
    } catch {
      return null;
    }
  }

  private async completeFromAssessment(input: {
    cycle: CycleInstance;
    projectId: string;
    createdBy: StartCycleRequest["createdBy"];
    correlationId: string;
    expectedLpsVersion?: number;
    decisionId?: string;
    assessment: import("../domain/types").FinalizationAssessment;
    started: number;
    timestamp: string;
  }): Promise<PilotLifecycleResult> {
    const fromStatus = input.cycle.status;
    const next: CycleInstance = {
      ...structuredClone(input.cycle),
      status: "completed",
      closedAt: input.timestamp,
      pauseReconciliation: null,
    };

    try {
      const persist = async () => {
        await this.deps.cycles.save(next);
        const lps = await appendLpsActiveLink({
          projectServices: this.deps.projectServices,
          projectId: input.projectId,
          createdBy: input.createdBy,
          correlationId: input.correlationId,
          expectedLpsVersion: input.expectedLpsVersion,
          activeCycleInstanceId: null,
        });
        if (!lps.ok) {
          const err = new Error(lps.detail) as Error & {
            currentVersion?: number;
          };
          err.currentVersion = lps.currentVersion;
          throw err;
        }
        return lps.version;
      };
      let version: number | undefined;
      if (this.deps.store) {
        version = await this.deps.store.runInTransaction(persist);
      } else {
        version = await persist();
      }
      const durationMs = Date.now() - input.started;
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: input.timestamp,
        correlationId: input.correlationId,
        projectId: input.projectId,
        cycleInstanceId: input.cycle.cycleInstanceId,
        action: "COMPLETE",
        fromStatus,
        toStatus: "completed",
        actorId: input.createdBy.actorId,
        decisionRef: input.decisionId,
        result: "ok",
        durationMs,
      });
      return {
        ok: true,
        cycle: next,
        livingProjectStateVersion: version,
        activeCycleInstanceId: null,
        assessment: input.assessment,
        durationMs,
      };
    } catch (err) {
      const durationMs = Date.now() - input.started;
      const detail =
        err instanceof Error && err.message === "lps_version_conflict"
          ? "LPS_VERSION_CONFLICT"
          : "PERSISTENCE_FAILURE";
      return {
        ok: false,
        error: createCycleError({
          detailCode: detail,
          timestamp: input.timestamp,
          correlationId: input.correlationId,
          projectId: input.projectId,
          cycleInstanceId: input.cycle.cycleInstanceId,
          currentVersion:
            err instanceof Error
              ? (err as Error & { currentVersion?: number }).currentVersion
              : undefined,
        }),
        assessment: input.assessment,
        durationMs,
      };
    }
  }

  private async persistLifecycleMutation(input: {
    action: "START" | "PAUSE" | "RESUME" | "CANCEL";
    projectId: string;
    cycleInstanceId: string;
    createdBy: StartCycleRequest["createdBy"];
    correlationId: string;
    expectedLpsVersion?: number;
    decisionId?: string;
    fromStatus: CycleInstance["status"];
    toStatus: CycleInstance["status"];
    next: CycleInstance;
    setActiveLink: string | null;
    clearActiveLink: boolean;
    started: number;
    timestamp: string;
    fail: (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createCycleError>[0]>,
    ) => PilotLifecycleResult;
    /** D-GF-START-01 — written to LPS on START for trajectory-derived cycles. */
    ckcResolutionRef?: string;
    /** D-GF-START-01 — activate exact pending step in the same UoW. */
    activateTrajectoryStep?: {
      trajectoryId: string;
      trajectoryVersion: number;
      stepId: string;
    };
  }): Promise<PilotLifecycleResult> {
    try {
      const persist = async () => {
        if (input.action === "START" || input.action === "RESUME") {
          const siblings = await this.deps.cycles.listByProject(input.projectId);
          const single = assertAtMostOneActiveCycle({
            cycles: siblings,
            excludeCycleInstanceId: input.cycleInstanceId,
          });
          if (single) {
            throw new Error(single.reason);
          }
        }
        await this.deps.cycles.save(input.next);

        if (input.action === "START" && input.activateTrajectoryStep) {
          const binding = input.activateTrajectoryStep;
          const traj = await this.deps.trajectories.findByProjectAndVersion(
            input.projectId,
            binding.trajectoryVersion,
          );
          if (!traj || traj.trajectoryId !== binding.trajectoryId) {
            throw new Error("trajectory_binding_missing");
          }
          const stepIdx = traj.steps.findIndex(
            (s) => s.stepId === binding.stepId,
          );
          if (stepIdx < 0) {
            throw new Error("trajectory_step_missing");
          }
          const step = traj.steps[stepIdx]!;
          if (step.state !== "pending") {
            throw new Error(`trajectory_step_not_pending:${step.state}`);
          }
          const nextSteps = traj.steps.map((s, i) =>
            i === stepIdx ? { ...s, state: "active" as const } : s,
          );
          await this.deps.trajectories.save({
            ...traj,
            steps: nextSteps,
          });
        }

        if (input.clearActiveLink || input.setActiveLink !== undefined) {
          const linkTarget = input.clearActiveLink ? null : input.setActiveLink;
          const lps = await appendLpsActiveLink({
            projectServices: this.deps.projectServices,
            projectId: input.projectId,
            createdBy: input.createdBy,
            correlationId: input.correlationId,
            expectedLpsVersion: input.expectedLpsVersion,
            activeCycleInstanceId: linkTarget,
            ...(input.action === "START" && input.ckcResolutionRef
              ? { ckcResolutionRef: input.ckcResolutionRef }
              : {}),
          });
          if (!lps.ok) {
            const err = new Error(lps.detail) as Error & {
              currentVersion?: number;
            };
            err.currentVersion = lps.currentVersion;
            throw err;
          }
          return lps.version;
        }
        return undefined;
      };

      let version: number | undefined;
      if (this.deps.store) {
        version = await this.deps.store.runInTransaction(persist);
      } else {
        version = await persist();
      }

      const durationMs = Date.now() - input.started;
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: input.timestamp,
        correlationId: input.correlationId,
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        action: input.action,
        fromStatus: input.fromStatus,
        toStatus: input.toStatus,
        actorId: input.createdBy.actorId,
        decisionRef: input.decisionId,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        cycle: input.next,
        livingProjectStateVersion: version,
        activeCycleInstanceId: input.clearActiveLink
          ? null
          : input.setActiveLink,
        durationMs,
      };
    } catch (err) {
      if (err instanceof Error && err.message.startsWith("active_exists")) {
        return input.fail("CYCLE_ALREADY_ACTIVE_EXISTS", err.message);
      }
      if (err instanceof Error && err.message === "lps_version_conflict") {
        return input.fail("LPS_VERSION_CONFLICT", "expected_version_mismatch", {
          expectedVersion: input.expectedLpsVersion,
          currentVersion: (err as Error & { currentVersion?: number })
            .currentVersion,
        });
      }
      if (
        err instanceof Error &&
        (err.message.startsWith("trajectory_") ||
          err.message.startsWith("trajectory_step_"))
      ) {
        return input.fail("CYCLE_START_NOT_READY", err.message);
      }
      return input.fail("PERSISTENCE_FAILURE", "lifecycle_persist_failed");
    }
  }

  private async runTransition(input: {
    action: "START" | "PAUSE" | "RESUME" | "CANCEL";
    projectId: string;
    cycleInstanceId: string;
    createdBy: StartCycleRequest["createdBy"];
    correlationId?: string;
    expectedLpsVersion?: number;
    decisionId?: string;
    authorityEvidenceId?: string;
    setActiveLink: string | null;
    clearActiveLink: boolean;
    setClosedAt?: boolean;
    skipAuthority?: boolean;
  }): Promise<PilotLifecycleResult> {
    const started = Date.now();
    const timestamp = this.deps.clock.nowIso();
    const correlationId = input.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createCycleError>[0]>,
    ): PilotLifecycleResult => {
      const durationMs = Date.now() - started;
      const error = createCycleError({
        detailCode,
        timestamp,
        correlationId,
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        internalCauseRef,
        ...extra,
      });
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: timestamp,
        correlationId,
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        action: input.action,
        fromStatus: "unknown",
        toStatus: "unknown",
        actorId: input.createdBy.actorId,
        decisionRef: input.decisionId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    if (!input.createdBy?.actorId) {
      return fail("CYCLE_LIFECYCLE_DENIED", "actor_required");
    }

    if (!input.skipAuthority) {
      const authGate = this.verifyAuthority({
        actorId: input.createdBy.actorId,
        cycleInstanceId: input.cycleInstanceId,
        evidenceId: input.authorityEvidenceId,
      });
      if (!authGate.ok) {
        return fail(authGate.detailCode, authGate.internalCauseRef);
      }
    }

    const projectResult = await this.deps.projectServices.getProject.execute({
      projectId: input.projectId,
    });
    if (!projectResult.ok) {
      return fail("PROJECT_NOT_FOUND", "missing_project");
    }

    const cycle = await this.deps.cycles.findById(input.cycleInstanceId);
    if (!cycle || cycle.projectId !== input.projectId) {
      return fail("CYCLE_NOT_FOUND", "missing_cycle");
    }

    if (isTerminalGuard(cycle)) {
      return fail("CYCLE_TERMINAL", `terminal_${cycle.status}`);
    }

    const transition = assertLifecycleTransition({
      from: cycle.status,
      action: input.action,
    });
    if (transition) return fail(transition.detailCode, transition.reason);

    const toStatus = targetStatusForAction(input.action);
    if (!toStatus) {
      return fail("CYCLE_TRANSITION_INVALID", "no_target_status");
    }

    if (input.action === "START" || input.action === "RESUME") {
      const siblings = await this.deps.cycles.listByProject(input.projectId);
      const single = assertAtMostOneActiveCycle({
        cycles: siblings,
        excludeCycleInstanceId: input.cycleInstanceId,
      });
      if (single) return fail(single.detailCode, single.reason);

      const lps =
        await this.deps.projectServices.getCurrentLivingProjectState.execute({
          projectId: input.projectId,
        });
      if (lps.ok) {
        const activeId = lps.livingProjectState.activeCycleInstanceId;
        if (activeId && activeId !== input.cycleInstanceId) {
          return fail(
            "CYCLE_ALREADY_ACTIVE_EXISTS",
            `lps_active_pointer:${activeId}`,
          );
        }
      }
    }

    const next: CycleInstance = {
      ...structuredClone(cycle),
      status: toStatus,
      closedAt: input.setClosedAt ? timestamp : cycle.closedAt,
      acknowledgedAt:
        toStatus === "active" && !cycle.acknowledgedAt
          ? timestamp
          : cycle.acknowledgedAt,
      pauseReconciliation:
        input.action === "CANCEL" ? null : cycle.pauseReconciliation,
    };

    return this.persistLifecycleMutation({
      action: input.action,
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
      createdBy: input.createdBy,
      correlationId,
      expectedLpsVersion: input.expectedLpsVersion,
      decisionId: input.decisionId,
      fromStatus: cycle.status,
      toStatus,
      next,
      setActiveLink: input.setActiveLink,
      clearActiveLink: input.clearActiveLink,
      started,
      timestamp,
      fail,
    });
  }
}

function isTerminalGuard(cycle: CycleInstance): boolean {
  return cycle.status === "completed" || cycle.status === "cancelled";
}
```

## FULL FILE: projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts

```typescript
import {
  isFakeConversationProviderForced,
  resolveConversationProvider,
  type ConversationProvider,
  type ProviderChatMessage,
} from "@/lib/platform/ai";
import {
  memoryBPiloteNotice,
  memoryBCompactionPiloteNotice,
  runNoraCognitiveTurn,
  formatCognitiveStopPiloteNotice,
  aggregateReadCoverage,
  rememberReadCoverage,
  ProductSqliteSession,
  resolveNoraSessionSqlitePath,
  type SemanticCognitiveWorkloadAssessment,
  type Mw3ContradictionAssessmentInput,
  type NoraEvalModelReasoningControl,
  type NoraAgentsUsdAccounting,
  type NoraCampaignBudget,
} from "@/lib/nora-cognitive-runtime";
import {
  MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
  NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
  normalizeNoraProductTurnStructuredOutput,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import { materializeLifecycleRecommendationFromStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn";
import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "@/lib/oa/cycle/application/lifecycleRecommendation/noraActor";
import type { LifecycleRecommendationMaterialDimension } from "@/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract";
import {
  LIFECYCLE_RECOMMENDATION_MATERIALIZE_FAILURE_PILOTE_NOTICE,
  lifecycleRecommendationMaterializeFailurePiloteNotice,
} from "./lifecycleRecommendationPiloteNotice";
import { materializeActiveCycleWork } from "./materializeActiveCycleWork";
import { resolveOrMintLogicalProductTurn } from "./logicalProductTurn";
import {
  normalizeProductTurnHistory,
} from "./turnPayloadCanonical";
import { buildActiveCycleWorkContextSeal } from "./f2/activeCycleCognitiveContext";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
import { collectToolTelemetry } from "./collectToolTelemetry";
import { ProjectAssistantMemoryEventSink } from "./memoryEventSink";
import { resolveAssistantMode } from "./resolveAssistantMode";
import {
  resolveRememberedEvidence,
  resolveOaStackForLifecycleRecommendation,
} from "./mw3AvailableEvidence";
import type { AdvisoryMethodContext } from "./f2/methodOrientation";
import type { StudioCognitiveContext } from "./f2/studioCognitiveContext";
import type {
  AssistantHistoryMessage,
  Mw3CognitiveSurfaceDto,
  Mw4GroundingSurfaceDto,
  ProjectAssistantContextDto,
  ProjectAssistantSendResult,
} from "./types";
import { resolveTrajectoryBootstrapPresence } from "@/lib/oa/cycle/application/lifecycleRecommendation/greenfieldLifecycleBootstrap";

// PRODUCT_TURN_MAX_HISTORY_MESSAGES imported from turnPayloadCanonical (shared).

function buildEphemeralNotice(
  memoryBAvailability:
    | "available_with_history"
    | "available_empty"
    | "unavailable",
  memoryBCompactionState:
    | "none"
    | "compacted_no_loss"
    | "compacted_with_loss"
    | "stale_invalidated",
  stalePriorInvalidated?: boolean,
  cognitiveStopNotice?: string | null,
  lifecycleMaterializeNotice?: string | null,
): string {
  const base = memoryBPiloteNotice(memoryBAvailability);
  const compaction = memoryBCompactionPiloteNotice(memoryBCompactionState, {
    stalePriorInvalidated,
  });
  const parts = [
    lifecycleMaterializeNotice,
    cognitiveStopNotice,
    compaction,
    base,
  ].filter((p): p is string => typeof p === "string" && p.trim().length > 0);
  return parts.join(" ");
}

function toMw3Surface(
  turn: Awaited<ReturnType<typeof runNoraCognitiveTurn>>,
): Mw3CognitiveSurfaceDto | null {
  const disposition = turn.contradictionDisposition;
  const stop = turn.cognitiveStopDecision;
  if (!disposition || !stop) return null;
  return {
    disposition: disposition.disposition,
    progression: stop.outcome,
    cognitiveStop: stop.cognitiveStop,
    reason: stop.anatomy?.reason ?? disposition.disclosure,
    evidenceIds: stop.anatomy?.contradictionEvidenceIds ?? [
      ...disposition.acceptedEvidenceIds,
    ],
    sourceIds: stop.anatomy?.sourceIds ?? [...disposition.acceptedSourceIds],
    governingPremise: stop.anatomy?.governingPremise || null,
    nextAction: stop.anatomy?.nextAction ?? null,
    insufficiencyReasons: [...disposition.insufficiencyReasons],
    allowsSilentSuccess: false,
    blockedImpact: stop.cognitiveStop
      ? `Progression bloquée — prémisse gouvernante invalidée${
          stop.anatomy?.governingPremise
            ? ` (${stop.anatomy.governingPremise})`
            : ""
        }.`
      : null,
    mayContinue:
      stop.cognitiveStop !== true && stop.progression === "continue",
    notTechnicalFailure: stop.progression !== "technical_failure",
  };
}

function toMw4Surface(
  turn: Awaited<ReturnType<typeof runNoraCognitiveTurn>>,
): Mw4GroundingSurfaceDto | null {
  const g = turn.mw4Grounding;
  if (!g) return null;
  return {
    rememberedIds: [...g.rememberedIds],
    validIds: [...g.validIds],
    downgradedIds: [...g.downgradedIds],
    missingIds: [...g.missingIds],
    disclosure: g.disclosure,
    readCoverageOverall: g.readCoverageOverall,
    readCoverageDisclosure: g.readCoverageDisclosure ?? null,
  };
}

function toContextDto(
  result: Extract<
    Awaited<ReturnType<typeof loadProjectRuntimeForAssistant>>,
    { ok: true }
  >,
): ProjectAssistantContextDto {
  return {
    projectId: result.project.projectId,
    name: result.project.name,
    shortReference: result.project.shortReference ?? null,
    objective: result.project.objective,
    contextSummary: result.project.contextSummary,
    criticality: result.project.criticality,
    constraints: [...result.project.constraints],
    lpsId: result.livingState.id,
    lpsVersion: result.livingState.version,
    lpsCreatedAt: result.livingState.createdAt,
    doctrineId: result.doctrine.id,
    doctrineVersion: result.doctrine.version,
    doctrineDigest: result.doctrine.digest,
    doctrineStatus: result.doctrine.status,
    runtimeMode: result.disclosures.runtimeMode,
    persistence: result.disclosures.persistence,
    readiness: result.readiness.status,
    activeCycleInstanceId: result.livingState.activeCycleInstanceId ?? null,
    ckcResolutionRef: result.livingState.ckcResolutionRef ?? null,
  };
}

/**
 * Thin F1 orchestration — Option C single Agents Runner path (Fake + target).
 * SFIA routeToolCall remains the tool authorization boundary.
 */
export async function orchestrateProjectAssistantTurn(input: {
  projectId: string;
  content: string;
  history?: AssistantHistoryMessage[];
  /**
   * Optional server-side provider injection (eval / tests).
   * Prefer per-instance OpenAIConversationProvider over process.env mutation.
   */
  provider?: ConversationProvider;
  /** Test override for Product SQLite Session path. */
  sessionDbPath?: string;
  /**
   * Test injection — forces Memory B UNAVAILABLE (MW1-S01).
   * Same product path; no second runtime.
   */
  simulateMemoryBUnavailable?: boolean;
  /**
   * CORR-MW2-REAL-01 — INTERNAL semantic CWP from analyzeIntent.
   * Server-side only; never part of ProjectAssistantSendResult.
   */
  semanticCognitiveWorkload?: SemanticCognitiveWorkloadAssessment | null;
  /**
   * CORR-MW2-REAL-04 — INTERNAL full Truth C / LPS context for F1 system prompt.
   * Server-side only; does not expand ProjectAssistantContextDto / client DTO.
   */
  truthCContext?: string | null;
  /**
   * CORR-PROOF-03 E1 — INTERNAL non-mutating method orientation + optional CKC lens.
   * Server-side only; never client-authoritative.
   */
  methodContext?: AdvisoryMethodContext | null;
  /**
   * CORR-PROOF-04 — INTERNAL Studio Cognitive Context envelope.
   * Server-side only; never client-authoritative. Supersedes methodContext when set.
   */
  studioCognitiveContext?: StudioCognitiveContext | null;
  /**
   * MW3 — optional contradiction assessment (tests/eval/product when facts exist).
   * Server-side; surfaces mw3 DTO without inventing Evidence.
   */
  contradictionAssessment?: Mw3ContradictionAssessmentInput | null;
  /** MW4-S02 — attach post-Evidence / recovery narrative policy disclosure. */
  postEvidenceNarrativePolicy?: boolean;
  /**
   * INTERNAL / EVAL-ONLY — Stage A cell model×effort pin.
   * Never part of ProjectAssistant client DTO. Absent → production default.
   */
  evalModelReasoningControl?: NoraEvalModelReasoningControl;
  /** INTERNAL / EVAL-ONLY — Agents USD authorization envelope bridge. */
  usdAccounting?: NoraAgentsUsdAccounting;
  /** INTERNAL / EVAL-ONLY — shared canonical campaign budget lease. */
  campaignBudget?: NoraCampaignBudget;
  /**
   * D-GF-ACW-02 Option A — optional re-present of server-issued logical turn id.
   * Production ACW identity; never client-invented.
   */
  logicalTurnId?: string;
  /**
   * Opaque client transport retry correlation (untrusted).
   * NOT Product turn identity — Session-adjacent lookup only.
   */
  turnRetryKey?: string;
  /**
   * TEST-ONLY — explicit correlation override (skips Session mint).
   * Prefer logicalTurnId for production and new tests.
   */
  turnCorrelationId?: string;
}): Promise<ProjectAssistantSendResult> {
  const content = input.content.trim();
  if (!content) {
    return {
      ok: false,
      status: "validation_error",
      code: "EMPTY_MESSAGE",
      message: "Saisissez un message avant d'envoyer.",
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: true,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: false,
    };
  }

  const project = toContextDto(projectResult);
  const modeResolution = resolveAssistantMode(input.provider);
  if (!modeResolution.canProceed) {
    return {
      ok: false,
      status: "provider_unavailable",
      code: "PROVIDER_UNAVAILABLE",
      message: modeResolution.message ?? "Provider indisponible.",
      mode: "unavailable",
      retryable: false,
    };
  }

  // D-GF-ACW-02 — accept-boundary logical turn id BEFORE model call.
  // Test turnCorrelationId override skips Session mint (BAR-WORK compatibility).
  // Session open failure must NOT abort Truth C / conversational continuity
  // (MW1 Memory B unavailable). ACW materialization remains fail-closed when
  // no durable logicalTurnId is available.
  //
  // Normalize history FIRST so conflict digest seals the exact provider envelope.
  const history = normalizeProductTurnHistory(input.history);
  let logicalTurnId: string | null = null;
  const testCorrOverride = input.turnCorrelationId?.trim() || null;
  if (testCorrOverride) {
    logicalTurnId = testCorrOverride;
  } else {
    const resolvedTurn = resolveOrMintLogicalProductTurn({
      projectId: project.projectId,
      sessionDbPath: input.sessionDbPath,
      presentedLogicalTurnId: input.logicalTurnId,
      turnRetryKey: input.turnRetryKey,
      content,
      history,
      cycleInstanceId:
        input.studioCognitiveContext?.activeCycle?.cycleInstanceId ?? null,
      nowIso: new Date().toISOString(),
    });
    if (!resolvedTurn.ok) {
      if (resolvedTurn.code === "LOGICAL_TURN_UNKNOWN") {
        return {
          ok: false,
          status: "validation_error",
          code: "LOGICAL_TURN_UNKNOWN",
          message:
            "Identifiant de tour logique inconnu pour cette session.",
          mode: modeResolution.mode,
          retryable: false,
          logicalTurnId: null,
        };
      }
      if (resolvedTurn.code === "LOGICAL_TURN_RETRY_CONFLICT") {
        return {
          ok: false,
          status: "validation_error",
          code: "LOGICAL_TURN_RETRY_CONFLICT",
          message:
            "Jeton de reprise en conflit avec une soumission déjà acceptée.",
          mode: modeResolution.mode,
          retryable: false,
          logicalTurnId: null,
        };
      }
      // LOGICAL_TURN_SESSION_UNAVAILABLE — continue without ACW identity.
      logicalTurnId = null;
    } else {
      logicalTurnId = resolvedTurn.logicalTurnId;
    }
  }

  const messages: ProviderChatMessage[] = [
    {
      role: "system",
      content: buildProjectSystemPrompt(project, {
        truthCContext: input.truthCContext,
        methodContext: input.methodContext ?? null,
        studioCognitiveContext: input.studioCognitiveContext ?? null,
      }),
    },
    ...history.map((m) => ({ role: m.role, content: m.content })),
    { role: "user", content },
  ];

  const sink = new ProjectAssistantMemoryEventSink();
  const workspaceRoot = resolveWorkspaceRootFromAppCwd();
  const provider = input.provider ?? resolveConversationProvider();
  const presentation = modeResolution.presentation;

  try {
    const turn = await runNoraCognitiveTurn({
      correlationId: `f1:${project.projectId}`,
      projectId: project.projectId,
      messages,
      provider,
      enableTools: true,
      sink,
      workspaceRoot,
      sessionDbPath: input.sessionDbPath,
      simulateMemoryBUnavailable: input.simulateMemoryBUnavailable,
      truthCRevision: {
        lpsId: project.lpsId,
        lpsVersion: project.lpsVersion,
      },
      turnWorkloadContext: {
        projectCriticality: project.criticality,
        userContentLength: content.length,
        historyMessageCount: history.length,
        historyTotalChars: history.reduce((sum, m) => sum + m.content.length, 0),
        enableTools: true,
      },
      trustedSfiaProfile: null,
      semanticCognitiveWorkload: input.semanticCognitiveWorkload ?? null,
      contradictionAssessment: input.contradictionAssessment ?? null,
      resolveRememberedEvidence,
      postEvidenceNarrativePolicy: input.postEvidenceNarrativePolicy === true,
      evalModelReasoningControl: input.evalModelReasoningControl,
      usdAccounting: input.usdAccounting,
      campaignBudget: input.campaignBudget,
      outputType: NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
    });

    let assistantText = turn.text;
    let lifecycleRecommendationMaterialized: boolean | null = null;
    let lifecycleRecommendationCode: string | null = null;

    // D-LC-01 — same Product turn: extract → fail-closed contradiction →
    // ACW first (when present) → then LR against final post-ACW basis.
    // No second model call. No fingerprint rewrite.
    if (turn.structuredOutput !== undefined) {
      const { extractLifecycleCandidateFromStructuredOutput } = await import(
        "@/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn"
      );
      const extracted = extractLifecycleCandidateFromStructuredOutput(
        turn.structuredOutput,
      );
      if (extracted.narrative) {
        assistantText = extracted.narrative;
      }
      // Positive enforcement: EMIT without LR is a structured contradiction.
      // Fail BEFORE any durable writes (ACW or LR).
      // Never invent LR; never treat as normal conversational success.
      if (
        extracted.kind === "product_turn" &&
        extracted.boundaryContradiction ===
          MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION
      ) {
        return {
          ok: false,
          status: "validation_error",
          code: MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
          message: LIFECYCLE_RECOMMENDATION_MATERIALIZE_FAILURE_PILOTE_NOTICE,
          mode: modeResolution.mode,
          retryable: false,
        };
      }

      // D-GF-ACW-01/02 — materialize ACW FIRST when items present + eligible.
      const coherent = normalizeNoraProductTurnStructuredOutput(
        turn.structuredOutput,
      );
      const acwItems = coherent?.activeCycleWork?.items ?? [];
      if (acwItems.length > 0) {
        const assessment = coherent?.preCycleRoutingAssessment;
        const disposition = coherent?.disposition;
        const eligibleDefer =
          disposition === "DEFER_TO_ACTIVE_CYCLE" ||
          assessment?.activeCycleAlreadyCoversWork === true;

        // CR-ACW-01 — FORBIDDEN fallback to project.activeCycleInstanceId.
        // Require studioCognitiveContext + activeCycle + workEligible + seal.
        const studio = input.studioCognitiveContext ?? null;
        const contextSeal = buildActiveCycleWorkContextSeal({
          projectId: project.projectId,
          activeCycle: studio?.activeCycle ?? null,
        });
        if (
          !eligibleDefer ||
          !studio ||
          !studio.activeCycle ||
          studio.activeCycle.workEligible !== true ||
          !contextSeal
        ) {
          return {
            ok: false,
            status: "validation_error",
            code: !eligibleDefer
              ? "ACTIVE_CYCLE_WORK_NOT_ELIGIBLE"
              : "ACTIVE_CYCLE_CONTEXT_REQUIRED",
            message: !eligibleDefer
              ? "Travail de cycle actif émis hors contexte éligible — aucune écriture partielle."
              : "Contexte cycle actif studio requis pour matérialiser le travail cognitif — aucune écriture partielle.",
            mode: modeResolution.mode,
            retryable: false,
            logicalTurnId,
          };
        }

        // Option A: ACW write requires durable Session-adjacent logical turn id.
        if (!logicalTurnId) {
          return {
            ok: false,
            status: "validation_error",
            code: "LOGICAL_TURN_SESSION_UNAVAILABLE",
            message:
              "Session indisponible pour l'identité de tour logique — aucune écriture ACW.",
            mode: modeResolution.mode,
            retryable: false,
            logicalTurnId: null,
          };
        }

        const activeCycleId = contextSeal.cycleInstanceId;
        {
          const oaResolved = await resolveOaStackForLifecycleRecommendation();
          if (!oaResolved.ok) {
            return {
              ok: false,
              status: "validation_error",
              code: "ACTIVE_CYCLE_WORK_OA_UNAVAILABLE",
              message:
                "Impossible de matérialiser le travail du cycle actif (runtime indisponible).",
              mode: modeResolution.mode,
              retryable: false,
              logicalTurnId,
            };
          }
          const oa = oaResolved.oa;
          const cycleLoad = await oa.cycleServices.getCycle.execute({
            cycleInstanceId: activeCycleId,
          });
          const lpsNow =
            await oa.projectServices.getCurrentLivingProjectState.execute({
              projectId: project.projectId,
            });
          if (!cycleLoad.ok) {
            return {
              ok: false,
              status: "validation_error",
              code: "ACTIVE_CYCLE_NOT_FOUND",
              message: "Cycle actif introuvable avant matérialisation.",
              mode: modeResolution.mode,
              retryable: false,
              logicalTurnId,
            };
          }
          if (!lpsNow.ok) {
            return {
              ok: false,
              status: "validation_error",
              code: "LPS_UNAVAILABLE",
              message: "LPS indisponible avant matérialisation du travail cycle.",
              mode: modeResolution.mode,
              retryable: false,
              logicalTurnId,
            };
          }
          if (cycleLoad.cycle.status !== "active") {
            return {
              ok: false,
              status: "validation_error",
              code: "ACTIVE_CYCLE_NOT_ELIGIBLE",
              message:
                "Le cycle n'est plus actif — aucune écriture partielle du travail cognitif.",
              mode: modeResolution.mode,
              retryable: false,
              logicalTurnId,
            };
          }
          if (
            (lpsNow.livingProjectState.activeCycleInstanceId ?? null) !==
            activeCycleId
          ) {
            return {
              ok: false,
              status: "validation_error",
              code: "ACTIVE_CYCLE_LPS_POINTER_STALE",
              message:
                "Pointeur LPS du cycle actif modifié — aucune écriture partielle.",
              mode: modeResolution.mode,
              retryable: false,
              logicalTurnId,
            };
          }

          let existingItems: Awaited<
            ReturnType<typeof oa.cycleServices.epistemic.listByProject>
          > = [];
          try {
            existingItems = await oa.cycleServices.epistemic.listByProject(
              project.projectId,
            );
          } catch {
            existingItems = [];
          }

          // Production key = durable logical turn id (no random f1-acw keys).
          const turnCorrelationId = logicalTurnId!;
          const producedAt = new Date().toISOString();
          const mat = await materializeActiveCycleWork({
            items: acwItems,
            facts: {
              projectId: project.projectId,
              activeCycleInstanceId: activeCycleId,
              lpsVersion: lpsNow.livingProjectState.version,
              lpsObjective: lpsNow.livingProjectState.objective,
              existingEpistemicItemIds:
                lpsNow.livingProjectState.epistemicItemIds ?? [],
              existingItems,
              turnCorrelationId,
              contextSeal,
            },
            updateEpistemicState: oa.cycleServices.updateEpistemicState,
            appendLivingProjectStateVersion:
              oa.projectServices.appendLivingProjectStateVersion,
            getCurrentLivingProjectState:
              oa.projectServices.getCurrentLivingProjectState,
            getCycle: oa.cycleServices.getCycle,
            runInTransaction: oa.cycleServices.store.runInTransaction.bind(
              oa.cycleServices.store,
            ),
            producedAt,
            createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
          });
          if (!mat.ok) {
            return {
              ok: false,
              status: "validation_error",
              code: mat.code,
              message:
                mat.reason ||
                "Échec de matérialisation du travail cognitif du cycle actif.",
              mode: modeResolution.mode,
              retryable: false,
              logicalTurnId,
            };
          }
        }
      }

      // D-LC-01 — LR AFTER ACW (or with current facts when no ACW items).
      // Reload durable basis so currentness binds post-ACW LPS version / epistemic.
      if (!extracted.candidate) {
        lifecycleRecommendationMaterialized = false;
      } else {
        // OA access via authorized Project Assistant seam (mw3AvailableEvidence
        // lazy runtime import) — never import vertical-slice-runtime here.
        const oaResolved = await resolveOaStackForLifecycleRecommendation();
        if (oaResolved.ok) {
          const oa = oaResolved.oa;
          const cycles = await oa.cycleServices.cycles.listByProject(
            project.projectId,
          );
          const lps =
            await oa.projectServices.getCurrentLivingProjectState.execute({
              projectId: project.projectId,
            });
          const projectRow = await oa.projectServices.getProject.execute({
            projectId: project.projectId,
          });
          const failedMaterialDimensions =
            new Set<LifecycleRecommendationMaterialDimension>();
          if (!lps.ok) {
            failedMaterialDimensions.add("lps");
          }
          if (!projectRow.ok) {
            failedMaterialDimensions.add("doctrine");
          }

          let trajectory = null;
          let trajectoryBootstrapPresence = await resolveTrajectoryBootstrapPresence(
            oa.cycleServices.trajectories,
            project.projectId,
          );
          if (trajectoryBootstrapPresence.kind === "unknown") {
            failedMaterialDimensions.add("trajectory");
            trajectory = null;
          } else if (trajectoryBootstrapPresence.kind === "current") {
            trajectory = trajectoryBootstrapPresence.trajectory;
          } else {
            trajectory = null;
          }

          let decisions: Awaited<
            ReturnType<typeof oa.decisionServices.decisions.listByProject>
          > = [];
          try {
            decisions = await oa.decisionServices.decisions.listByProject(
              project.projectId,
            );
          } catch {
            failedMaterialDimensions.add("decisions");
            decisions = [];
          }

          let evidence: Awaited<
            ReturnType<
              typeof oa.evidenceReviewServices.repository.listByProject
            >
          > = [];
          try {
            evidence =
              await oa.evidenceReviewServices.repository.listByProject(
                project.projectId,
              );
          } catch {
            failedMaterialDimensions.add("evidence");
            evidence = [];
          }

          let epistemicItems: Awaited<
            ReturnType<typeof oa.cycleServices.epistemic.listByProject>
          > = [];
          try {
            epistemicItems = await oa.cycleServices.epistemic.listByProject(
              project.projectId,
            );
          } catch {
            failedMaterialDimensions.add("epistemic_blockers");
            epistemicItems = [];
          }

          const doctrinePin = projectRow.ok
            ? (projectRow.project.doctrinePackageRef ??
              (lps.ok ? lps.livingProjectState.doctrinePackageRef : undefined))
            : undefined;
          const producedAt = new Date().toISOString();
          const mat =
            await materializeLifecycleRecommendationFromStructuredOutput({
              projectId: project.projectId,
              structuredOutput: turn.structuredOutput,
              updateEpistemicState: oa.cycleServices.updateEpistemicState,
              facts: {
                cycles,
                lpsActiveCycleInstanceId: lps.ok
                  ? lps.livingProjectState.activeCycleInstanceId
                  : null,
                lpsVersion: lps.ok ? lps.livingProjectState.version : null,
                doctrinePackageId: doctrinePin?.doctrinePackageId ?? null,
                doctrinePackageVersion: doctrinePin?.version ?? null,
                doctrinePackageDigest: doctrinePin?.digest ?? null,
                trajectory,
                trajectoryBootstrapPresence,
                decisions,
                evidence,
                epistemicItems,
                failedMaterialDimensions,
              },
              producedAt,
              createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
              correlationId: `f1:${project.projectId}`,
            });
          if (mat.narrative) {
            assistantText = mat.narrative;
          }
          if (mat.recommendationAttempted) {
            lifecycleRecommendationMaterialized =
              mat.materialization?.ok === true;
            lifecycleRecommendationCode =
              mat.materialization && !mat.materialization.ok
                ? mat.materialization.code
                : mat.materialization?.ok
                  ? null
                  : "LR_MATERIALIZE_UNKNOWN";
          } else {
            lifecycleRecommendationMaterialized = false;
          }
        } else {
          lifecycleRecommendationMaterialized = false;
          lifecycleRecommendationCode = "LR_BASIS_UNAVAILABLE";
        }
      }
    }

    const { toolEvents, sources, readCoverage } = collectToolTelemetry(
      sink.events,
    );
    // Persist read coverage for cross-turn honesty (existing session_items).
    if (readCoverage.facts.length > 0 && !input.simulateMemoryBUnavailable) {
      try {
        const dbPath = resolveNoraSessionSqlitePath(input.sessionDbPath);
        const session = new ProductSqliteSession({
          projectId: project.projectId,
          dbPath,
          sessionKey: "f1-default",
        });
        try {
          await rememberReadCoverage(
            session,
            project.projectId,
            readCoverage.facts.map((f) => ({
              pathOrRef: f.pathOrRef,
              coverage: f.coverage,
            })),
          );
        } finally {
          session.close();
        }
      } catch {
        /* Session path may be unavailable — coverage still on DTO via mw4. */
      }
    }

    const coverageAggregate = aggregateReadCoverage(readCoverage.facts);
    const mw3 = toMw3Surface(turn);
    let mw4 = toMw4Surface(turn);
    if (coverageAggregate.facts.length > 0) {
      mw4 = {
        rememberedIds: mw4?.rememberedIds ?? [],
        validIds: mw4?.validIds ?? [],
        downgradedIds: mw4?.downgradedIds ?? [],
        missingIds: mw4?.missingIds ?? [],
        disclosure: mw4?.disclosure ?? "",
        readCoverageOverall:
          coverageAggregate.overall === "mixed_partial"
            ? "partial"
            : coverageAggregate.overall === "none"
              ? "none"
              : coverageAggregate.overall,
        readCoverageDisclosure:
          turn.mw4Grounding?.readCoverageDisclosure ??
          (coverageAggregate.facts.length > 0
            ? `Overall coverage: ${coverageAggregate.overall}`
            : null),
      };
    }
    const stopNotice = formatCognitiveStopPiloteNotice(
      turn.cognitiveStopDecision ?? {
        progression: "continue",
        outcome: "PROGRESS_OK",
        cognitiveStop: false,
        anatomy: null,
        surfacedDisposition: "none",
        allowsSilentSuccess: false,
      },
    );
    const lrMaterializeNotice =
      lifecycleRecommendationMaterializeFailurePiloteNotice({
        recommendationAttempted:
          lifecycleRecommendationMaterialized === false &&
          Boolean(lifecycleRecommendationCode),
        materialized: lifecycleRecommendationMaterialized,
        code: lifecycleRecommendationCode,
      });
    const ephemeralNotice = buildEphemeralNotice(
      turn.memoryBAvailability,
      turn.memoryBCompactionState,
      turn.memoryBCompactionDetails?.stalePriorInvalidated === true,
      stopNotice,
      lrMaterializeNotice,
    );
    const status =
      turn.cognitiveStopDecision?.cognitiveStop === true
        ? ("cognitive_stop" as const)
        : ("ok" as const);

    return {
      ok: true,
      status,
      text: assistantText,
      mode: modeResolution.mode,
      presentation,
      model: turn.usage?.model ?? null,
      toolRounds: turn.toolRounds,
      toolCalls: turn.toolCalls,
      sources,
      toolEvents,
      project,
      ephemeralNotice,
      cognitiveRuntime: turn.cognitiveRuntime,
      sessionId: turn.sessionId,
      memoryBAvailability: turn.memoryBAvailability,
      memoryBCompactionState: turn.memoryBCompactionState,
      stalePriorInvalidated:
        turn.memoryBCompactionDetails?.stalePriorInvalidated === true,
      mw3,
      mw4,
      lifecycleRecommendationMaterialized,
      lifecycleRecommendationCode,
      logicalTurnId,
    };
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Erreur provider inattendue.";
    return {
      ok: false,
      status: "provider_error",
      code: "PROVIDER_ERROR",
      message:
        message === "FAKE_PROVIDER_ERROR"
          ? "Le fournisseur de démonstration a signalé une erreur. Réessayez manuellement."
          : message,
      mode: modeResolution.mode,
      retryable: true,
      logicalTurnId,
    };
  }
}
```

## FULL FILE: projects/sfia-studio/app/features/project-assistant/actions.ts

```typescript
"use server";

import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import { orchestrateAssistantSend } from "./f2/orchestrateF2";
import { recordF2Decision } from "./f2/recordDecision";
import {
  executePilotLifecycleAction,
  type PilotLifecycleActionKind,
} from "./f2/pilotLifecycleActions";
import {
  projectPilotLifecycle,
  type PilotLifecycleProjection,
  selectCurrentLifecycleRecommendations,
  isPausedStatus,
  isTerminalCycleStatus,
  assessResumeReconciliation,
  deriveLifecycleBlockersFromEpistemicItems,
} from "@/lib/oa/cycle";
import type { LifecycleRecommendationMaterialDimension } from "@/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract";
import { F2_PROCESS_LOCAL_NOTICE } from "./f2/proposalStore";
import type { F2DecisionKind } from "./f2/types";
import { confirmAndExecuteF3Fixture } from "./f3/confirmAndExecuteF3Fixture";
import { confirmAndExecuteResolvedM3 } from "./f3/confirmAndExecuteResolvedM3";
import { prepareF3Fixture } from "./f3/prepareF3Fixture";
import { prepareM3FromDecision } from "./f3/prepareM3FromDecision";
import { prepareAndResolveM3ProductPath } from "./f3/prepareAndResolveM3ProductPath";
import { rehydrateEvidenceOutcomeFromLps } from "./f3/rehydrateEvidenceOutcomeFromLps";
import { resolveF3EphemeralNotice } from "./f3/constants";
import {
  executionSemanticUserLabel,
  resolvePersistenceNotice,
} from "./presentationLabels";
import {
  runMw6GovernedNoraProductTurn,
  type RunMw6GovernedNoraProductTurnInput,
} from "./mw6GovernedNoraTurn";
import type {
  AssistantHistoryMessage,
  ProjectAssistantContextDto,
  ProjectAssistantDecideResult,
  ProjectAssistantExecuteF3Result,
  ProjectAssistantPrepareF3Result,
  ProjectAssistantPrepareM3Result,
  ProjectAssistantPrepareResolvedM3Result,
  ProjectAssistantRehydrateEvidenceOutcomeResult,
  ProjectAssistantSendResult,
} from "./types";

/**
 * Thin server action — Project Workspace Assistant (F1 + F2 + F3 fixture).
 * No OPS1 session. No Cursor REAL. No Git write.
 * Persistence durability follows RuntimeOaStack.productDurablePath (Product SQLite vs Memory).
 */
export async function projectAssistantSendAction(input: {
  projectId: string;
  content: string;
  history?: AssistantHistoryMessage[];
  /**
   * Untrusted ExecutionContract id reference for MW6 governed external discovery.
   * When present, server composes governedAuthority from Auth + OA and invokes
   * the real Nora product path. CONTENT/AUTHORITY of the contract are never
   * trusted from the client — only the id reference.
   */
  executionContractId?: string;
  /**
   * Optional untrusted evidence hint — verified only by server composition.
   */
  authorityEvidenceId?: unknown;
  /** Hostile — ignored (server builds governedAuthority). */
  governedAuthority?: unknown;
  /** Hostile — ignored (Auth resolver owns actor). */
  actorId?: unknown;
  getExecutionContract?: unknown;
  checkExecutionAuthorization?: unknown;
  authorityResolver?: unknown;
  authorizedContract?: unknown;
  currentExternalDiscoveryIntent?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
  /**
   * TEST-ONLY Auth session → Pilote seam. Production omits this and uses
   * resolveCurrentAuthenticatedPilote. AUTH REAL boundary carried forward.
   */
  resolveAuthenticatedPilote?: RunMw6GovernedNoraProductTurnInput["resolveAuthenticatedPilote"];
  provider?: import("@/lib/platform/ai").ConversationProvider;
  sessionDbPath?: string;
  /**
   * D-GF-ACW-02 — optional re-present of server-issued logical Product turn id.
   * Untrusted until Session lookup; client-invented ids fail LOGICAL_TURN_UNKNOWN.
   */
  logicalTurnId?: string;
  /**
   * Opaque client transport retry correlation (untrusted).
   * NOT Product turn identity / SFIA authority — Session-adjacent lookup only.
   */
  turnRetryKey?: string;
}): Promise<ProjectAssistantSendResult> {
  const executionContractId =
    typeof input.executionContractId === "string"
      ? input.executionContractId.trim()
      : "";
  if (executionContractId.length > 0) {
    return runMw6GovernedNoraProductTurn({
      projectId: input.projectId,
      content: input.content,
      history: input.history,
      executionContractId,
      claimedAuthorityEvidenceId: input.authorityEvidenceId,
      resolveAuthenticatedPilote: input.resolveAuthenticatedPilote,
      provider: input.provider,
      sessionDbPath: input.sessionDbPath,
      governedAuthority: input.governedAuthority,
      actorId: input.actorId,
      authorityEvidenceId: input.authorityEvidenceId,
      getExecutionContract: input.getExecutionContract,
      checkExecutionAuthorization: input.checkExecutionAuthorization,
      authorityResolver: input.authorityResolver,
      authorizedContract: input.authorizedContract,
      currentExternalDiscoveryIntent: input.currentExternalDiscoveryIntent,
      canActAsMorris: input.canActAsMorris,
      claimedAuthorityLevel: input.claimedAuthorityLevel,
    });
  }
  return orchestrateAssistantSend({
    projectId: input.projectId,
    content: input.content,
    history: input.history,
    provider: input.provider,
    sessionDbPath: input.sessionDbPath,
    logicalTurnId: input.logicalTurnId,
    turnRetryKey: input.turnRetryKey,
  });
}

function toContextDto(
  result: Extract<
    Awaited<ReturnType<typeof loadProjectRuntimeForAssistant>>,
    { ok: true }
  >,
): ProjectAssistantContextDto {
  return {
    projectId: result.project.projectId,
    name: result.project.name,
    shortReference: result.project.shortReference ?? null,
    objective: result.project.objective,
    contextSummary: result.project.contextSummary,
    criticality: result.project.criticality,
    constraints: [...result.project.constraints],
    lpsId: result.livingState.id,
    lpsVersion: result.livingState.version,
    lpsCreatedAt: result.livingState.createdAt,
    doctrineId: result.doctrine.id,
    doctrineVersion: result.doctrine.version,
    doctrineDigest: result.doctrine.digest,
    doctrineStatus: result.doctrine.status,
    runtimeMode: result.disclosures.runtimeMode,
    persistence: result.disclosures.persistence,
    readiness: result.readiness.status,
  };
}

/**
 * Morris gate decision — client may only send proposalId, decisionKind,
 * optional reserves, projectId. Authority is registered server-side.
 */
export async function projectAssistantDecideAction(input: {
  projectId: string;
  proposalId: string;
  decisionKind: F2DecisionKind;
  reservesText?: string | null;
  /** Hostile — ignored if present. */
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<ProjectAssistantDecideResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "decision_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA process-local indisponibles pour la décision F2.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: "unavailable",
      retryable: false,
    };
  }
  const project = toContextDto(projectResult);

  const recorded = await recordF2Decision({
    proposalId: input.proposalId,
    projectId: input.projectId,
    decisionKind: input.decisionKind,
    reservesText: input.reservesText,
    canActAsMorris: input.canActAsMorris,
    claimedAuthorityLevel: input.claimedAuthorityLevel,
    currentContext: {
      projectId: project.projectId,
      lpsId: project.lpsId,
      lpsVersion: project.lpsVersion,
      doctrineDigest: project.doctrineDigest,
    },
    decisionServices: runtime.oa.decisionServices,
    authorityResolver: runtime.oa.authorityResolver,
    nowIso: () => runtime.oa!.clock.nowIso(),
  });

  if (!recorded.ok) {
    return {
      ok: false,
      status: recorded.code === "STALE" ? "stale" : "decision_error",
      code: recorded.code,
      message: recorded.message,
      mode: "fixture",
      retryable: recorded.code === "STALE",
      proposal: recorded.proposal ?? null,
    };
  }

  const { decision, proposal } = recorded;
  const textParts = [
    "DÉCISION PRISE",
    `${decision.kind} capturée pour ${proposal.proposalId}.`,
    `Scope: ${decision.scope}.`,
    decision.readyForNextGatedStep
      ? "READY FOR NEXT GATED STEP"
      : "Proposition non approuvée.",
    "AUCUNE EXÉCUTION",
    F2_PROCESS_LOCAL_NOTICE,
  ];

  return {
    ok: true,
    status: "ok",
    mode: "fixture",
    presentation: "unconfirmed",
    text: textParts.join(" — "),
    project,
    ephemeralNotice: F2_PROCESS_LOCAL_NOTICE,
    f2: {
      turnKind: "f2_decision",
      intentClass: "actionable",
      qualification: null,
      proposal,
      decision,
      labels: {
        recommendation: null,
        proposition: "PROPOSITION",
        decisionRequired: null,
        decisionTaken: "DÉCISION PRISE",
        noExecution: "AUCUNE EXÉCUTION",
      },
      executionBlocked: true,
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    },
  };
}

/**
 * F3 PREPARE — Build+Validate ExecutionContract only.
 * No client authority. Hostile mode/adapter/agent/command rejected.
 */
export async function projectAssistantPrepareF3FixtureAction(input: {
  projectId: string;
  proposalId: string;
  decisionId: string;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  real?: unknown;
  selectedAgentRef?: unknown;
  executionMode?: unknown;
  trustLevel?: unknown;
  authorityEvidenceId?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<ProjectAssistantPrepareF3Result> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;
  void input.selectedAgentRef;
  void input.executionMode;
  void input.trustLevel;
  void input.authorityEvidenceId;
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "prepare_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA process-local indisponibles pour F3 PREPARE.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: "unavailable",
      retryable: false,
    };
  }
  const project = toContextDto(projectResult);

  const prepared = await prepareF3Fixture({
    projectId: input.projectId,
    proposalId: input.proposalId,
    decisionId: input.decisionId,
    mode: input.mode,
    adapterRef: input.adapterRef,
    agentId: input.agentId,
    command: input.command,
    currentContext: {
      projectId: project.projectId,
      lpsId: project.lpsId,
      lpsVersion: project.lpsVersion,
      doctrineDigest: project.doctrineDigest,
    },
    deps: {
      decisionServices: runtime.oa.decisionServices,
      authorityResolver: runtime.oa.authorityResolver,
      executionContractServices: runtime.oa.executionContractServices,
      nowIso: () => runtime.oa!.clock.nowIso(),
      productDurablePath: runtime.oa.productDurablePath,
    },
  });

  if (!prepared.ok) {
    return {
      ok: false,
      status: prepared.code === "STALE" ? "stale" : "prepare_error",
      code: prepared.code,
      message: prepared.message,
      mode: "fixture",
      retryable: prepared.code === "STALE",
      proposal: (prepared.proposal as ProjectAssistantPrepareF3FailureProposal) ?? null,
    };
  }

  const f3 = prepared.payload;
  const persistenceNotice = resolveF3EphemeralNotice(
    runtime.oa.productDurablePath,
  );
  return {
    ok: true,
    status: "ok",
    mode: "fixture",
    presentation: "unconfirmed",
    text: [
      "F3 PREPARE",
      `Contrat ${f3.contract.executionContractId} v${f3.contract.version} (${f3.contract.status})`,
      "AUCUNE EXÉCUTION",
      "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
      persistenceNotice,
    ].join(" — "),
    project,
    ephemeralNotice: persistenceNotice,
    f2: null,
    f3,
  };
}

/**
 * F3 M3 PREPARE — from durable decisionId (no ProposalStore).
 * Exact contract from DecisionBasis. Cursor PREPARE-only. No Attempt.
 */
export async function projectAssistantPrepareM3Action(input: {
  projectId: string;
  decisionId: string;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  real?: unknown;
  selectedAgentRef?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<ProjectAssistantPrepareM3Result> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;
  void input.selectedAgentRef;
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "prepare_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA indisponibles pour M3 PREPARE.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: "unavailable",
      retryable: false,
    };
  }
  const project = toContextDto(projectResult);

  const prepared = await prepareM3FromDecision({
    projectId: input.projectId,
    decisionId: input.decisionId,
    currentContext: {
      projectId: project.projectId,
      lpsId: project.lpsId,
      lpsVersion: project.lpsVersion,
      doctrineDigest: project.doctrineDigest,
      activeCycleInstanceId: project.activeCycleInstanceId,
      ckcResolutionRef: project.ckcResolutionRef,
    },
    deps: {
      decisionServices: runtime.oa.decisionServices,
      authorityResolver: runtime.oa.authorityResolver,
      executionContractServices: runtime.oa.executionContractServices,
      nowIso: () => runtime.oa!.clock.nowIso(),
    },
  });

  if (!prepared.ok) {
    return {
      ok: false,
      status: prepared.code === "CONTEXT_STALE" ? "stale" : "prepare_error",
      code: prepared.code,
      message: prepared.message,
      mode: "fixture",
      retryable: prepared.code === "CONTEXT_STALE",
    };
  }

  const f3 = prepared.payload;
  return {
    ok: true,
    status: "ok",
    mode: "m3_prepare",
    presentation: "unconfirmed",
    text: [
      "M3 PREPARE",
      `Contrat ${f3.contract.executionContractId} v${f3.contract.version} (${f3.contract.status})`,
      `Fingerprint ${f3.contract.semanticFingerprint.slice(0, 12)}…`,
      "AUCUNE EXÉCUTION",
      "CURSOR PREPARE-ONLY",
      "NO GATE D",
    ].join(" — "),
    project,
    ephemeralNotice:
      "M3 PREPARE durable — Decision + ExecutionContract Product SQLite. Cursor REAL bloqué.",
    f3,
  };
}

/**
 * Canonical post-GO product path:
 * prepareM3FromDecision → resolveM3ExecutionContract (fixture-safe ZERO REAL).
 * Returns the resolved successor for explicit Confirmation. No StartExecution.
 */
export async function projectAssistantPrepareResolvedM3Action(input: {
  projectId: string;
  decisionId: string;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  real?: unknown;
  selectedAgentRef?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<ProjectAssistantPrepareResolvedM3Result> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;
  void input.selectedAgentRef;
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "prepare_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA indisponibles pour M3 PREPARE+RESOLVE.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: "unavailable",
      retryable: false,
    };
  }
  const project = toContextDto(projectResult);

  const prepared = await prepareAndResolveM3ProductPath({
    projectId: input.projectId,
    decisionId: input.decisionId,
    currentContext: {
      projectId: project.projectId,
      lpsId: project.lpsId,
      lpsVersion: project.lpsVersion,
      doctrineDigest: project.doctrineDigest,
      activeCycleInstanceId: project.activeCycleInstanceId,
      ckcResolutionRef: project.ckcResolutionRef,
    },
    deps: {
      decisionServices: runtime.oa.decisionServices,
      authorityResolver: runtime.oa.authorityResolver,
      executionContractServices: runtime.oa.executionContractServices,
      nowIso: () => runtime.oa!.clock.nowIso(),
    },
  });

  if (!prepared.ok) {
    return {
      ok: false,
      status: prepared.code === "CONTEXT_STALE" ? "stale" : "prepare_error",
      code: prepared.code,
      message: prepared.message,
      mode: "fixture",
      retryable: prepared.code === "CONTEXT_STALE",
    };
  }

  const f3 = prepared.payload;
  return {
    ok: true,
    status: "ok",
    mode: "m3_resolved_fixture",
    presentation: "unconfirmed",
    text: [
      "Contrat d'exécution prêt à confirmer",
      `Successeur ${f3.successor.executionContractId} v${f3.successor.version} (${f3.successor.status})`,
      `Action ${f3.successor.action} · cible ${f3.successor.target}`,
      "Confirmation process-local requise — aucune tentative démarrée",
      "AUCUNE EXÉCUTION RÉELLE",
    ].join(" — "),
    project,
    ephemeralNotice:
      "Contrat durable résolu (HumanDecision + DecisionBasis). Confirmation process-local. Cursor REAL bloqué.",
    f3,
  };
}

type ProjectAssistantPrepareF3FailureProposal =
  import("./f2/types").ProposalDto | null;

/**
 * F3 confirm + fixture execute + evidence reinjection.
 * No client authority. Hostile REAL/adapter/agent/command rejected.
 */
export async function projectAssistantConfirmAndExecuteF3FixtureAction(input: {
  projectId: string;
  proposalId: string;
  decisionId: string;
  executionContractId: string;
  expectedContractVersion: number;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  real?: unknown;
  selectedAgentRef?: unknown;
  executionMode?: unknown;
  trustLevel?: unknown;
  authorityEvidenceId?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<ProjectAssistantExecuteF3Result> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;
  void input.selectedAgentRef;
  void input.executionMode;
  void input.trustLevel;
  void input.authorityEvidenceId;
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "execute_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA process-local indisponibles pour F3 EXECUTE.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: "unavailable",
      retryable: false,
    };
  }
  const project = toContextDto(projectResult);

  const executed = await confirmAndExecuteF3Fixture({
    projectId: input.projectId,
    proposalId: input.proposalId,
    decisionId: input.decisionId,
    executionContractId: input.executionContractId,
    expectedContractVersion: input.expectedContractVersion,
    mode: input.mode,
    adapterRef: input.adapterRef,
    agentId: input.agentId,
    command: input.command,
    real: input.real,
    currentContext: {
      projectId: project.projectId,
      lpsId: project.lpsId,
      lpsVersion: project.lpsVersion,
      doctrineDigest: project.doctrineDigest,
    },
    deps: {
      decisionServices: runtime.oa.decisionServices,
      authorityResolver: runtime.oa.authorityResolver,
      executionContractServices: runtime.oa.executionContractServices,
      executionAttemptServices: runtime.oa.executionAttemptServices,
      evidenceReviewServices: runtime.oa.evidenceReviewServices,
      fixtureAdapter: runtime.oa.fixtureAdapter,
      projectServices: runtime.oa.projectServices,
      productDurablePath: runtime.oa.productDurablePath,
      nowIso: () => runtime.oa!.clock.nowIso(),
    },
  });

  if (!executed.ok) {
    return {
      ok: false,
      status: executed.code === "STALE" ? "stale" : "execute_error",
      code: executed.code,
      message: executed.message,
      mode: "fixture",
      retryable: executed.code === "STALE",
      proposal: (executed.proposal as ProjectAssistantPrepareF3FailureProposal) ?? null,
    };
  }

  const f3 = executed.payload;
  const persistenceNotice = resolveF3EphemeralNotice(
    runtime.oa.productDurablePath,
  );
  return {
    ok: true,
    status: "ok",
    mode: "fixture",
    presentation: "unconfirmed",
    text: [
      f3.reusedExistingAttempt
        ? "F3 FIXTURE DÉJÀ EXÉCUTÉE (idempotent)"
        : "F3 FIXTURE EXÉCUTÉE",
      `Attempt ${f3.attempt.attemptId} · ${f3.attempt.status}`,
      `Evidence ${f3.evidence.evidenceId} · non verified`,
      `ReviewBundle ${f3.reviewBundle.reviewBundleId}`,
      "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
      "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
      "CURSOR REAL BLOQUÉ",
      persistenceNotice,
    ].join(" — "),
    project,
    ephemeralNotice: persistenceNotice,
    f3,
  };
}

/**
 * Canonical post-GO confirm + fixture-safe execute on resolved M3 successor.
 * No Proposal validation. Confirmation is process-local (not persisted as authority).
 */
export async function projectAssistantConfirmAndExecuteResolvedM3Action(input: {
  projectId: string;
  decisionId: string;
  executionContractId: string;
  expectedContractVersion: number;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  real?: unknown;
  selectedAgentRef?: unknown;
  executionMode?: unknown;
  trustLevel?: unknown;
  authorityEvidenceId?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<ProjectAssistantExecuteF3Result> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;
  void input.selectedAgentRef;
  void input.executionMode;
  void input.trustLevel;
  void input.authorityEvidenceId;
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "execute_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA indisponibles pour M3 EXECUTE.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: "unavailable",
      retryable: false,
    };
  }
  const project = toContextDto(projectResult);

  const executed = await confirmAndExecuteResolvedM3({
    projectId: input.projectId,
    decisionId: input.decisionId,
    executionContractId: input.executionContractId,
    expectedContractVersion: input.expectedContractVersion,
    mode: input.mode,
    adapterRef: input.adapterRef,
    agentId: input.agentId,
    command: input.command,
    real: input.real,
    deps: {
      decisionServices: runtime.oa.decisionServices,
      authorityResolver: runtime.oa.authorityResolver,
      executionContractServices: runtime.oa.executionContractServices,
      executionAttemptServices: runtime.oa.executionAttemptServices,
      evidenceReviewServices: runtime.oa.evidenceReviewServices,
      fixtureAdapter: runtime.oa.fixtureAdapter,
      projectServices: runtime.oa.projectServices,
      productDurablePath: runtime.oa.productDurablePath,
      nowIso: () => runtime.oa!.clock.nowIso(),
    },
  });

  if (!executed.ok) {
    return {
      ok: false,
      status: "execute_error",
      code: executed.code,
      message: executed.message,
      mode: "fixture",
      retryable: false,
    };
  }

  const f3 = executed.payload;
  const persistenceNotice = resolvePersistenceNotice({
    productDurablePath: runtime.oa.productDurablePath,
    mode: f3.mode,
    kind: "execute",
  });
  const semantic = executionSemanticUserLabel({
    mode: f3.mode,
    payloadMode: f3.mode,
    executionMode: f3.attempt.executionMode,
    adapterId: f3.attempt.adapterId,
    adapterRef: f3.attempt.adapterRef,
    realProcessInvoked: f3.attempt.realProcessInvoked,
    realExecution: f3.realExecution,
    processRef: f3.attempt.processRef,
    evidenceId: f3.evidence.evidenceId,
  });
  const isCursorReal = f3.mode === "CURSOR_CLI_REAL";
  return {
    ok: true,
    status: "ok",
    mode: "fixture",
    presentation: "unconfirmed",
    text: [
      isCursorReal
        ? f3.reusedExistingAttempt
          ? "M3 EXÉCUTION CURSOR — MÊME TENTATIVE"
          : "M3 EXÉCUTION CURSOR ENREGISTRÉE"
        : f3.reusedExistingAttempt
          ? "M3 FIXTURE DÉJÀ EXÉCUTÉE (idempotent)"
          : "M3 FIXTURE EXÉCUTÉE",
      `Attempt ${f3.attempt.attemptId} · ${f3.attempt.status}`,
      `Evidence ${f3.evidence.evidenceId} · non verified`,
      `ReviewBundle ${f3.reviewBundle.reviewBundleId}`,
      "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
      semantic,
      isCursorReal ? null : "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
      isCursorReal ? null : "CURSOR REAL BLOQUÉ",
      persistenceNotice,
    ]
      .filter((part): part is string => Boolean(part))
      .join(" — "),
    project,
    ephemeralNotice: persistenceNotice,
    f3,
  };
}

/**
 * M5 durable Nora/F3 readback — LPS evidence/RB refs → RecommendNextGate.
 * Strictly read-only: no Decision, no gate consume, no Attempt launch.
 */
export async function projectAssistantRehydrateEvidenceOutcomeAction(input: {
  projectId: string;
}): Promise<ProjectAssistantRehydrateEvidenceOutcomeResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "rehydrate_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA process-local indisponibles pour rehydrate F3.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: "unavailable",
      retryable: false,
    };
  }
  const project = toContextDto(projectResult);

  const rehydrated = await rehydrateEvidenceOutcomeFromLps({
    projectId: input.projectId,
    deps: {
      projectServices: runtime.oa.projectServices,
      evidenceReviewServices: runtime.oa.evidenceReviewServices,
    },
  });

  if (!rehydrated.ok) {
    return {
      ok: false,
      status: "rehydrate_error",
      code: rehydrated.code,
      message: rehydrated.message,
      mode: "fixture",
      retryable: false,
      project,
    };
  }

  const persistenceNotice = resolvePersistenceNotice({
    productDurablePath: runtime.oa.productDurablePath,
    mode: rehydrated.recommendation.mode,
    kind: "rehydrate",
  });
  return {
    ok: true,
    status: "ok",
    mode: "fixture",
    presentation: "unconfirmed",
    text: [
      "REHYDRATE EVIDENCE OUTCOME",
      `LPS v${rehydrated.lpsVersion}`,
      `Evidence ${rehydrated.evidenceIds.join(", ") || "—"}`,
      `ReviewBundle ${rehydrated.reviewBundleIds.join(", ") || "—"}`,
      "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
      persistenceNotice,
    ].join(" — "),
    project,
    ephemeralNotice: persistenceNotice,
    evidence: rehydrated.evidence,
    reviewBundles: rehydrated.reviewBundles,
    recommendation: rehydrated.recommendation,
    lpsVersion: rehydrated.lpsVersion,
    evidenceIds: rehydrated.evidenceIds,
    reviewBundleIds: rehydrated.reviewBundleIds,
  };
}


async function buildAssistantPilotLifecycleProjection(
  projectId: string,
): Promise<PilotLifecycleProjection | null> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return null;
  const cycles = await runtime.oa.cycleServices.cycles.listByProject(projectId);
  const lps =
    await runtime.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
  const lpsActive = lps.ok
    ? lps.livingProjectState.activeCycleInstanceId
    : null;
  let epistemicItems: Awaited<
    ReturnType<typeof runtime.oa.cycleServices.epistemic.listByProject>
  > = [];
  let epistemicReaderFailed = false;
  try {
    epistemicItems = await runtime.oa.cycleServices.epistemic.listByProject(
      projectId,
    );
  } catch {
    epistemicReaderFailed = true;
    epistemicItems = [];
  }

  let trajectory = null;
  let trajectoryReaderFailed = false;
  try {
    const traj = await runtime.oa.cycleServices.getCurrentTrajectory.execute({
      projectId,
    });
    trajectory = traj.ok ? traj.trajectory : null;
  } catch {
    trajectoryReaderFailed = true;
    trajectory = null;
  }

  let decisions: Awaited<
    ReturnType<typeof runtime.oa.decisionServices.decisions.listByProject>
  > = [];
  let decisionReaderFailed = false;
  try {
    decisions =
      await runtime.oa.decisionServices.decisions.listByProject(projectId);
  } catch {
    decisionReaderFailed = true;
    decisions = [];
  }

  let evidence: Awaited<
    ReturnType<
      typeof runtime.oa.evidenceReviewServices.repository.listByProject
    >
  > = [];
  let evidenceReaderFailed = false;
  try {
    evidence =
      await runtime.oa.evidenceReviewServices.repository.listByProject(
        projectId,
      );
  } catch {
    evidenceReaderFailed = true;
    evidence = [];
  }

  const projectResult = await runtime.oa.projectServices.getProject.execute({
    projectId,
  });
  const doctrinePin = projectResult.ok
    ? (projectResult.project.doctrinePackageRef ??
      (lps.ok ? lps.livingProjectState.doctrinePackageRef : undefined))
    : lps.ok
      ? lps.livingProjectState.doctrinePackageRef
      : undefined;
  const blockersSnap = deriveLifecycleBlockersFromEpistemicItems(epistemicItems);

  const failedMaterialDimensions =
    new Set<LifecycleRecommendationMaterialDimension>();
  if (!lps.ok) failedMaterialDimensions.add("lps");
  if (trajectoryReaderFailed) failedMaterialDimensions.add("trajectory");
  if (decisionReaderFailed) failedMaterialDimensions.add("decisions");
  if (evidenceReaderFailed) failedMaterialDimensions.add("evidence");
  if (epistemicReaderFailed) failedMaterialDimensions.add("epistemic_blockers");

  const currentRecommendations = selectCurrentLifecycleRecommendations({
    items: epistemicItems,
    cycles,
    lpsActiveCycleInstanceId: lpsActive,
    lpsVersion: lps.ok ? lps.livingProjectState.version : null,
    doctrinePackageId: doctrinePin?.doctrinePackageId ?? null,
    doctrinePackageVersion: doctrinePin?.version ?? null,
    doctrinePackageDigest: doctrinePin?.digest ?? null,
    trajectory,
    decisions,
    evidence,
    blockingReservationStatements: blockersSnap.statements,
    failedMaterialDimensions,
  });

  const projection = projectPilotLifecycle({
    projectId,
    cycles,
    lpsActiveCycleInstanceId: lpsActive,
    currentRecommendations,
  });

  // D-LC-02 — attach canonical FinalizationAssessment for selected non-terminal cycle.
  if (
    projection.selectedCycleInstanceId &&
    projection.selectedStatus &&
    !isTerminalCycleStatus(projection.selectedStatus)
  ) {
    try {
      const assessed = await runtime.oa.cycleServices.pilotLifecycle.assess({
        cycleInstanceId: projection.selectedCycleInstanceId,
        projectId,
      });
      if (assessed.ok) {
        projection.assessment = assessed.assessment;
      } else {
        projection.assessment = null;
      }
    } catch {
      projection.assessment = null;
    }
    projection.blockingReservations = epistemicItems
      .filter(
        (i) =>
          i.type === "Reservation" &&
          i.status === "active" &&
          i.blocking === true,
      )
      .map((i) => ({
        epistemicItemId: i.epistemicItemId,
        statement: i.statement,
      }));
  }

  if (
    projection.selectedStatus &&
    isPausedStatus(projection.selectedStatus) &&
    projection.selectedCycleInstanceId
  ) {
    const selected = cycles.find(
      (c) => c.cycleInstanceId === projection.selectedCycleInstanceId,
    );
    if (!selected) {
      projection.resumeReconciliation = {
        clean: false,
        detailCode: "CYCLE_RESUME_DRIFT",
        reason: "selected_cycle_missing",
      };
      projection.cta = { ...projection.cta, canResume: false };
      return projection;
    }

    if (!projectResult.ok) {
      projection.resumeReconciliation = {
        clean: false,
        detailCode: "CYCLE_RESUME_DRIFT",
        reason: "project_unreadable",
      };
      projection.cta = { ...projection.cta, canResume: false };
      return projection;
    }

    if (trajectoryReaderFailed) {
      projection.resumeReconciliation = {
        clean: false,
        detailCode: "CYCLE_RESUME_DRIFT",
        reason: "trajectory_reader_unavailable",
      };
      projection.cta = { ...projection.cta, canResume: false };
      return projection;
    }
    if (decisionReaderFailed) {
      projection.resumeReconciliation = {
        clean: false,
        detailCode: "CYCLE_RESUME_DRIFT",
        reason: "decision_reader_unavailable",
      };
      projection.cta = { ...projection.cta, canResume: false };
      return projection;
    }
    if (evidenceReaderFailed) {
      projection.resumeReconciliation = {
        clean: false,
        detailCode: "CYCLE_RESUME_DRIFT",
        reason: "evidence_reader_unavailable",
      };
      projection.cta = { ...projection.cta, canResume: false };
      return projection;
    }

    try {
      const siblingActiveExists = cycles.some(
        (c) =>
          c.status === "active" &&
          c.cycleInstanceId !== selected.cycleInstanceId,
      );

      const reconciliation = assessResumeReconciliation({
        cycle: selected,
        projectId,
        lpsReadable: lps.ok,
        lpsVersion: lps.ok ? lps.livingProjectState.version : 0,
        lpsActiveCycleInstanceId: lpsActive,
        objective: lps.ok ? lps.livingProjectState.objective : "",
        context: lps.ok ? (lps.livingProjectState.context ?? "") : "",
        scope: lps.ok ? (lps.livingProjectState.scope ?? "") : "",
        doctrinePackageId: doctrinePin?.doctrinePackageId,
        doctrinePackageVersion: doctrinePin?.version,
        doctrinePackageDigest: doctrinePin?.digest,
        trajectory,
        decisions,
        evidence,
        blockingReservationStatements: blockersSnap.statements,
        blockerSourceUnreadable: epistemicReaderFailed,
        siblingActiveExists,
      });

      projection.resumeReconciliation = {
        clean: reconciliation.clean,
        detailCode: reconciliation.clean ? null : "CYCLE_RESUME_DRIFT",
        reason: reconciliation.clean
          ? "assess_resume_reconciliation_clean"
          : reconciliation.driftReasons.join(",") || "dirty",
      };
      projection.cta = {
        ...projection.cta,
        canResume: projection.cta.canResume && reconciliation.clean,
      };
    } catch {
      projection.resumeReconciliation = {
        clean: false,
        detailCode: "CYCLE_RESUME_DRIFT",
        reason: "reconciliation_facts_unavailable",
      };
      projection.cta = { ...projection.cta, canResume: false };
    }
  }

  return projection;
}

/**
 * CORR-PROOF-05 — durable Pilot lifecycle projection (reload without F2).
 */
export async function projectAssistantPilotLifecycleProjection(input: {
  projectId: string;
}): Promise<{
  ok: boolean;
  status: string;
  code?: string;
  message?: string;
  projection?: PilotLifecycleProjection;
  selectedCycleInstanceId?: string | null;
  selectedStatus?: string | null;
  activeCycleInstanceId?: string | null;
  selectionAmbiguous?: boolean;
  cta?: PilotLifecycleProjection["cta"];
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "oa_unavailable",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA indisponibles pour Pilot lifecycle projection.",
    };
  }
  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
    };
  }
  const projection = await buildAssistantPilotLifecycleProjection(
    input.projectId,
  );
  if (!projection) {
    return {
      ok: false,
      status: "projection_unavailable",
      code: "OA_STACK_UNAVAILABLE",
      message: "Pilot lifecycle projection unavailable.",
    };
  }
  return {
    ok: true,
    status: "ok",
    projection,
    selectedCycleInstanceId: projection.selectedCycleInstanceId,
    selectedStatus: projection.selectedStatus,
    activeCycleInstanceId: projection.activeCycleInstanceId,
    selectionAmbiguous: projection.selectionAmbiguous,
    cta: projection.cta,
  };
}

/**
 * CORR-PROOF-05 — Pilot lifecycle transitions (START/PAUSE/RESUME/FINALIZE/CANCEL).
 * Never uses morrisGateRequired as Pilot lifecycle authority.
 */
export async function projectAssistantPilotLifecycleAction(input: {
  projectId: string;
  cycleInstanceId: string;
  action: PilotLifecycleActionKind;
  materialDriftDetected?: boolean;
  requiresTrajectoryHumanDecision?: boolean;
  requiresReplanHumanDecision?: boolean;
}): Promise<{
  ok: boolean;
  status: string;
  code?: string;
  message?: string;
  action?: PilotLifecycleActionKind;
  cycleStatus?: string;
  activeCycleInstanceId?: string | null;
  assessment?: unknown;
  decisionId?: string;
  project?: ProjectAssistantContextDto;
  projection?: PilotLifecycleProjection;
  selectedCycleInstanceId?: string | null;
  selectedStatus?: string | null;
  selectionAmbiguous?: boolean;
  cta?: PilotLifecycleProjection["cta"];
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "oa_unavailable",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA indisponibles pour Pilot lifecycle.",
    };
  }
  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
    };
  }
  const project = toContextDto(projectResult);
  const executed = await executePilotLifecycleAction({
    action: input.action,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    cycleServices: runtime.oa.cycleServices,
    projectServices: runtime.oa.projectServices,
    decisionServices: runtime.oa.decisionServices,
    authorityResolver: runtime.oa.authorityResolver,
    nowIso: () => runtime.oa!.clock.nowIso(),
    materialDriftDetected: input.materialDriftDetected,
    requiresTrajectoryHumanDecision: input.requiresTrajectoryHumanDecision,
    requiresReplanHumanDecision: input.requiresReplanHumanDecision,
  });
  if (!executed.ok) {
    const projection = await buildAssistantPilotLifecycleProjection(
      input.projectId,
    );
    return {
      ok: false,
      status: "lifecycle_error",
      code: executed.code,
      message: executed.message,
      assessment: executed.assessment,
      project,
      projection: projection ?? undefined,
      selectedCycleInstanceId: projection?.selectedCycleInstanceId,
      selectedStatus: projection?.selectedStatus,
      selectionAmbiguous: projection?.selectionAmbiguous,
      cta: projection?.cta,
    };
  }
  const reloaded = await loadProjectRuntimeForAssistant(input.projectId);
  const nextProject = reloaded.ok ? toContextDto(reloaded) : project;
  const projection = await buildAssistantPilotLifecycleProjection(
    input.projectId,
  );
  const incompleteFinalize =
    executed.action === "FINALIZE" &&
    executed.assessment &&
    typeof executed.assessment === "object" &&
    "canComplete" in executed.assessment &&
    (executed.assessment as { canComplete?: boolean }).canComplete === false;
  return {
    ok: true,
    status: incompleteFinalize ? "finalize_incomplete" : "ok",
    action: executed.action,
    cycleStatus: executed.result?.ok ? executed.result.cycle.status : undefined,
    activeCycleInstanceId: executed.result?.ok
      ? (executed.result.activeCycleInstanceId ??
        projection?.activeCycleInstanceId ??
        nextProject.activeCycleInstanceId ??
        null)
      : projection?.activeCycleInstanceId ??
        nextProject.activeCycleInstanceId ??
        null,
    assessment: executed.assessment,
    decisionId: executed.decisionId,
    project: nextProject,
    projection: projection ?? undefined,
    selectedCycleInstanceId: projection?.selectedCycleInstanceId,
    selectedStatus: projection?.selectedStatus,
    selectionAmbiguous: projection?.selectionAmbiguous,
    cta: projection?.cta,
    message: incompleteFinalize
      ? "Finalisation incomplète — des conditions restent ouvertes."
      : `Pilot lifecycle ${executed.action} applied.`,
  };
}

export async function projectAssistantRecordObligationPolicyAction(input: {
  projectId: string;
  cycleInstanceId: string;
}): Promise<{
  ok: boolean;
  status: string;
  code?: string;
  message?: string;
  decisionId?: string;
  assessment?: unknown;
  projection?: PilotLifecycleProjection;
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "oa_unavailable",
      code: "OA_STACK_UNAVAILABLE",
      message: "Obligation-policy unavailable.",
    };
  }
  const { recordObligationPolicyNoGovernedEffects } = await import(
    "./f2/pilotLifecycleActions"
  );
  const executed = await recordObligationPolicyNoGovernedEffects({
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    cycleServices: runtime.oa.cycleServices,
    decisionServices: runtime.oa.decisionServices,
    authorityResolver: runtime.oa.authorityResolver,
    nowIso: () => runtime.oa!.clock.nowIso(),
  });
  const projection = await buildAssistantPilotLifecycleProjection(
    input.projectId,
  );
  if (!executed.ok) {
    return {
      ok: false,
      status: "lifecycle_error",
      code: executed.code,
      message: executed.message,
      assessment: executed.assessment,
      projection: projection ?? undefined,
    };
  }
  return {
    ok: true,
    status: "ok",
    decisionId: executed.decisionId,
    assessment: executed.assessment,
    projection: projection ?? undefined,
    message:
      "Politique d’obligations enregistrée — aucune finalisation automatique.",
  };
}

export async function projectAssistantCompleteTrajectoryStepAction(input: {
  projectId: string;
  cycleInstanceId: string;
}): Promise<{
  ok: boolean;
  status: string;
  code?: string;
  message?: string;
  stepId?: string;
  assessment?: unknown;
  projection?: PilotLifecycleProjection;
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "oa_unavailable",
      code: "OA_STACK_UNAVAILABLE",
      message: "Trajectory step close unavailable.",
    };
  }
  const { completeBoundTrajectoryStepAction } = await import(
    "./f2/pilotLifecycleActions"
  );
  const executed = await completeBoundTrajectoryStepAction({
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    cycleServices: runtime.oa.cycleServices,
    authorityResolver: runtime.oa.authorityResolver,
    nowIso: () => runtime.oa!.clock.nowIso(),
  });
  const projection = await buildAssistantPilotLifecycleProjection(
    input.projectId,
  );
  if (!executed.ok) {
    return {
      ok: false,
      status: "lifecycle_error",
      code: executed.code,
      message: executed.message,
      projection: projection ?? undefined,
    };
  }
  return {
    ok: true,
    status: "ok",
    stepId: executed.stepId,
    assessment: executed.assessment,
    projection: projection ?? undefined,
    message: "Critère de sortie clôturé pour l’étape liée.",
  };
}

export async function projectAssistantResolveBlockingReservationAction(input: {
  projectId: string;
  cycleInstanceId: string;
  epistemicItemId: string;
}): Promise<{
  ok: boolean;
  status: string;
  code?: string;
  message?: string;
  assessment?: unknown;
  projection?: PilotLifecycleProjection;
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "oa_unavailable",
      code: "OA_STACK_UNAVAILABLE",
      message: "Reservation resolve unavailable.",
    };
  }
  const { resolveBlockingReservationAction } = await import(
    "./f2/pilotLifecycleActions"
  );
  const executed = await resolveBlockingReservationAction({
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    epistemicItemId: input.epistemicItemId,
    cycleServices: runtime.oa.cycleServices,
    authorityResolver: runtime.oa.authorityResolver,
    nowIso: () => runtime.oa!.clock.nowIso(),
  });
  const projection = await buildAssistantPilotLifecycleProjection(
    input.projectId,
  );
  if (!executed.ok) {
    return {
      ok: false,
      status: "lifecycle_error",
      code: executed.code,
      message: executed.message,
      projection: projection ?? undefined,
    };
  }
  return {
    ok: true,
    status: "ok",
    assessment: executed.assessment,
    projection: projection ?? undefined,
    message: "Réserve bloquante résolue.",
  };
}
```

## FULL FILE: projects/sfia-studio/app/features/project-assistant/f2/pilotLifecycleActions.ts

```typescript
/**
 * CORR-PROOF-05 — Project Assistant Pilot lifecycle server helpers.
 * Pilot lifecycle authority ≠ Morris construction gate.
 *
 * Static guard: forceEnable must not appear in this Product file.
 * registerLocalPiloteAuthority is env-gated fail-closed (AUTHORITY_NOT_CONFIGURED).
 * Tests may forceEnable only outside this Product path.
 */
import { randomUUID } from "node:crypto";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
  type DecisionServices,
  type MemoryAuthorityResolver,
} from "@/lib/oa/decision";
import {
  cancelSubjectFor,
  classifyTrajectoryBinding,
  finalizeSubjectFor,
  startTrajectorySubjectFor,
  resumeReplanSubjectFor,
  type CycleServices,
  type FinalizationAssessment,
  type PilotLifecycleResult,
} from "@/lib/oa/cycle";
import type { ProjectServices } from "@/lib/oa/project";

export type PilotLifecycleActionKind =
  | "START"
  | "PAUSE"
  | "RESUME"
  | "FINALIZE"
  | "CANCEL"
  | "ASSESS"
  | "REEVALUATE";

const PILOTE = LOCAL_PILOTE_ACTOR;

async function ensurePiloteAuthority(input: {
  authorityResolver: MemoryAuthorityResolver;
  scope: string;
  nowIso: string;
}): Promise<{ ok: true; evidenceId: string } | { ok: false; code: string; message: string }> {
  const authority = registerLocalPiloteAuthority({
    authorityResolver: input.authorityResolver,
    scope: input.scope,
    issuedAt: input.nowIso,
  });
  if (!authority.ok) {
    return { ok: false, code: authority.code, message: authority.message };
  }

  const verified = input.authorityResolver.verify({
    actorId: LOCAL_PILOTE_ACTOR.actorId,
    requiredLevel: "N3",
    scope: input.scope,
    evidenceId: authority.evidenceId,
    requireMorrisGate: true,
  });
  if (!verified.ok) {
    const reason = verified.reason ?? "authority_verify_failed";
    const notConfigured =
      reason === "no_evidence" ||
      reason === "evidence_not_found" ||
      reason.includes("not_configured") ||
      reason.includes("not configured");
    return {
      ok: false,
      code: notConfigured ? "AUTHORITY_NOT_CONFIGURED" : "CYCLE_LIFECYCLE_DENIED",
      message: reason,
    };
  }
  return { ok: true, evidenceId: authority.evidenceId };
}

async function recordLifecycleDecision(input: {
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  projectId: string;
  cycleInstanceId: string;
  subject: string;
  selectedOptionId: string;
  nowIso: string;
  /** Reuse evidence already obtained via ensurePiloteAuthority. */
  authorityEvidenceId?: string;
}): Promise<
  | { ok: true; decisionId: string; evidenceId: string }
  | { ok: false; code: string; message: string }
> {
  const scope = `pilot-lifecycle:${input.cycleInstanceId}`;
  let evidenceId = input.authorityEvidenceId;
  if (!evidenceId) {
    const auth = await ensurePiloteAuthority({
      authorityResolver: input.authorityResolver,
      scope,
      nowIso: input.nowIso,
    });
    if (!auth.ok) return auth;
    evidenceId = auth.evidenceId;
  }

  const decisionId = `dec:pilot-life:${randomUUID()}`;
  const recorded = await input.decisionServices.recordHumanDecision.execute({
    decisionId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    subject: input.subject,
    options: [
      { optionId: "opt:accept", label: "Accept" },
      { optionId: "opt:refuse", label: "Refuse" },
    ],
    selectedOptionId: input.selectedOptionId,
    actor: PILOTE,
    // Technical OA authority class for structuring Pilot HD — not Morris runtime UX.
    authority: "morris",
    status: "accepted",
    reversible: false,
    scope,
    authorityEvidenceId: evidenceId,
    rationale: `Pilot lifecycle ${input.subject}`,
  });
  if (!recorded.ok) {
    return {
      ok: false,
      code: recorded.error.detailCode,
      message: recorded.error.message,
    };
  }
  return { ok: true, decisionId, evidenceId };
}

export async function executePilotLifecycleAction(input: {
  action: PilotLifecycleActionKind;
  projectId: string;
  cycleInstanceId: string;
  cycleServices: CycleServices;
  projectServices: ProjectServices;
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  nowIso: () => string;
  /** RESUME only — caller-detected material drift (hint; server owns SoT). */
  materialDriftDetected?: boolean;
  /** START hint only — server assessStartReadiness decides HD requirement. */
  requiresTrajectoryHumanDecision?: boolean;
  /** RESUME hint only — server assessResumeReconciliation decides. */
  requiresReplanHumanDecision?: boolean;
}): Promise<
  | {
      ok: true;
      action: PilotLifecycleActionKind;
      result?: PilotLifecycleResult;
      assessment?: FinalizationAssessment;
      decisionId?: string;
      authorityEvidenceId?: string;
    }
  | {
      ok: false;
      code: string;
      message: string;
      assessment?: FinalizationAssessment;
    }
> {
  const createdBy = {
    actorId: PILOTE.actorId,
    role: PILOTE.role,
    displayName: PILOTE.displayName,
    authorityLevel: PILOTE.authorityLevel,
  };

  const lps = await input.projectServices.getCurrentLivingProjectState.execute({
    projectId: input.projectId,
  });
  const expectedLpsVersion = lps.ok
    ? lps.livingProjectState.version
    : undefined;

  const scope = `pilot-lifecycle:${input.cycleInstanceId}`;

  switch (input.action) {
    case "START": {
      const auth = await ensurePiloteAuthority({
        authorityResolver: input.authorityResolver,
        scope,
        nowIso: input.nowIso(),
      });
      if (!auth.ok) return auth;

      // CR-START-01B/C — classify before any recordLifecycleDecision.
      const cycle = await input.cycleServices.cycles.findById(
        input.cycleInstanceId,
      );
      if (!cycle || cycle.projectId !== input.projectId) {
        return {
          ok: false,
          code: "CYCLE_NOT_FOUND",
          message: "Cycle instance was not found.",
        };
      }
      const binding = classifyTrajectoryBinding(cycle);
      if (binding === "INCOMPLETE_TRAJECTORY_BINDING") {
        return {
          ok: false,
          code: "TRAJECTORY_BINDING_INCOMPLETE",
          message: "Trajectory binding is incomplete.",
        };
      }

      let decisionId: string | undefined;
      if (binding === "COMPLETE_TRAJECTORY_BOUND") {
        // CR-START-01C — never parasite-create start+trajectory HD for greenfield.
        // Ignore requiresTrajectoryHumanDecision hint; do not auto-create HD after.
      } else if (input.requiresTrajectoryHumanDecision) {
        // LEGACY_UNBOUND — preserve historical pre-record behavior.
        const hd = await recordLifecycleDecision({
          decisionServices: input.decisionServices,
          authorityResolver: input.authorityResolver,
          projectId: input.projectId,
          cycleInstanceId: input.cycleInstanceId,
          subject: startTrajectorySubjectFor(input.cycleInstanceId),
          selectedOptionId: "opt:accept",
          nowIso: input.nowIso(),
          authorityEvidenceId: auth.evidenceId,
        });
        if (!hd.ok) return hd;
        decisionId = hd.decisionId;
      }
      const result = await input.cycleServices.pilotLifecycle.start({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
        createdBy,
        expectedLpsVersion,
        requiresTrajectoryHumanDecision:
          binding === "COMPLETE_TRAJECTORY_BOUND"
            ? false
            : input.requiresTrajectoryHumanDecision,
        decisionId:
          binding === "COMPLETE_TRAJECTORY_BOUND" ? undefined : decisionId,
        authorityEvidenceId: auth.evidenceId,
      });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
        };
      }
      return {
        ok: true,
        action: "START",
        result,
        decisionId,
        authorityEvidenceId: auth.evidenceId,
      };
    }
    case "PAUSE": {
      const auth = await ensurePiloteAuthority({
        authorityResolver: input.authorityResolver,
        scope,
        nowIso: input.nowIso(),
      });
      if (!auth.ok) return auth;
      const result = await input.cycleServices.pilotLifecycle.pause({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
        createdBy,
        expectedLpsVersion,
        authorityEvidenceId: auth.evidenceId,
      });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
        };
      }
      return {
        ok: true,
        action: "PAUSE",
        result,
        authorityEvidenceId: auth.evidenceId,
      };
    }
    case "RESUME": {
      const auth = await ensurePiloteAuthority({
        authorityResolver: input.authorityResolver,
        scope,
        nowIso: input.nowIso(),
      });
      if (!auth.ok) return auth;

      let decisionId: string | undefined;
      if (input.requiresReplanHumanDecision) {
        const hd = await recordLifecycleDecision({
          decisionServices: input.decisionServices,
          authorityResolver: input.authorityResolver,
          projectId: input.projectId,
          cycleInstanceId: input.cycleInstanceId,
          subject: resumeReplanSubjectFor(input.cycleInstanceId),
          selectedOptionId: "opt:accept",
          nowIso: input.nowIso(),
          authorityEvidenceId: auth.evidenceId,
        });
        if (!hd.ok) return hd;
        decisionId = hd.decisionId;
      }
      const result = await input.cycleServices.pilotLifecycle.resume({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
        createdBy,
        expectedLpsVersion,
        materialDriftDetected: input.materialDriftDetected,
        requiresReplanHumanDecision: input.requiresReplanHumanDecision,
        decisionId,
        authorityEvidenceId: auth.evidenceId,
      });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
          assessment: result.assessment,
        };
      }
      return {
        ok: true,
        action: "RESUME",
        result,
        decisionId,
        authorityEvidenceId: auth.evidenceId,
      };
    }
    case "FINALIZE": {
      const auth = await ensurePiloteAuthority({
        authorityResolver: input.authorityResolver,
        scope,
        nowIso: input.nowIso(),
      });
      if (!auth.ok) return auth;
      const hd = await recordLifecycleDecision({
        decisionServices: input.decisionServices,
        authorityResolver: input.authorityResolver,
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        subject: finalizeSubjectFor(input.cycleInstanceId),
        selectedOptionId: "opt:accept",
        nowIso: input.nowIso(),
        authorityEvidenceId: auth.evidenceId,
      });
      if (!hd.ok) return hd;
      const result = await input.cycleServices.pilotLifecycle.finalize({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
        createdBy,
        decisionId: hd.decisionId,
        expectedLpsVersion,
        authorityEvidenceId: auth.evidenceId,
      });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
          assessment: result.assessment,
        };
      }
      return {
        ok: true,
        action: "FINALIZE",
        result,
        assessment: result.assessment,
        decisionId: hd.decisionId,
        authorityEvidenceId: auth.evidenceId,
      };
    }
    case "CANCEL": {
      const auth = await ensurePiloteAuthority({
        authorityResolver: input.authorityResolver,
        scope,
        nowIso: input.nowIso(),
      });
      if (!auth.ok) return auth;
      const hd = await recordLifecycleDecision({
        decisionServices: input.decisionServices,
        authorityResolver: input.authorityResolver,
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        subject: cancelSubjectFor(input.cycleInstanceId),
        selectedOptionId: "opt:accept",
        nowIso: input.nowIso(),
        authorityEvidenceId: auth.evidenceId,
      });
      if (!hd.ok) return hd;
      const result = await input.cycleServices.pilotLifecycle.cancel({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
        createdBy,
        decisionId: hd.decisionId,
        expectedLpsVersion,
        authorityEvidenceId: auth.evidenceId,
      });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
        };
      }
      return {
        ok: true,
        action: "CANCEL",
        result,
        decisionId: hd.decisionId,
        authorityEvidenceId: auth.evidenceId,
      };
    }
    case "ASSESS": {
      const assessed = await input.cycleServices.pilotLifecycle.assess({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
      });
      if (!assessed.ok) {
        return {
          ok: false,
          code: assessed.error.detailCode,
          message: assessed.error.message,
        };
      }
      return {
        ok: true,
        action: "ASSESS",
        assessment: assessed.assessment,
      };
    }
    case "REEVALUATE": {
      const result =
        await input.cycleServices.pilotLifecycle.reevaluateAndComplete({
          cycleInstanceId: input.cycleInstanceId,
          projectId: input.projectId,
          createdBy,
          expectedLpsVersion,
        });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
          assessment: result.assessment,
        };
      }
      return {
        ok: true,
        action: "REEVALUATE",
        result,
        assessment: result.assessment,
      };
    }
    default: {
      const _exhaustive: never = input.action;
      void _exhaustive;
      return {
        ok: false,
        code: "CYCLE_LIFECYCLE_DENIED",
        message: "Unknown Pilot lifecycle action.",
      };
    }
  }
}

/** D-LC-03 — explicit Pilote obligation-policy HD (never automatic). */
export async function recordObligationPolicyNoGovernedEffects(input: {
  projectId: string;
  cycleInstanceId: string;
  cycleServices: CycleServices;
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  nowIso: () => string;
}): Promise<
  | {
      ok: true;
      decisionId: string;
      assessment: FinalizationAssessment;
    }
  | { ok: false; code: string; message: string; assessment?: FinalizationAssessment }
> {
  const {
    obligationPolicySubjectFor,
    OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
  } = await import("@/lib/oa/cycle");
  const nowIso = input.nowIso();
  const assessedBefore = await input.cycleServices.pilotLifecycle.assess({
    cycleInstanceId: input.cycleInstanceId,
    projectId: input.projectId,
  });
  if (!assessedBefore.ok) {
    return {
      ok: false,
      code: assessedBefore.error.detailCode,
      message: assessedBefore.error.message,
    };
  }
  // Fail-closed: refuse grouped N/A when a governed-effect family is positively APPLICABLE.
  for (const o of assessedBefore.assessment.obligations) {
    if (
      (o.family === "artifact" ||
        o.family === "git_repository" ||
        o.family === "execution_contract" ||
        o.family === "evidence" ||
        o.family === "review_bundle") &&
      o.applicability === "APPLICABLE"
    ) {
      return {
        ok: false,
        code: "OBLIGATION_POLICY_CONTRADICTED",
        message:
          "Des effets gouvernés sont déjà applicables — la confirmation groupée n’est pas disponible.",
        assessment: assessedBefore.assessment,
      };
    }
  }

  const scope = `pilot-lifecycle:${input.cycleInstanceId}`;
  const auth = await ensurePiloteAuthority({
    authorityResolver: input.authorityResolver,
    scope,
    nowIso,
  });
  if (!auth.ok) return auth;

  const decisionId = `dec:pilot-life:${randomUUID()}`;
  const subject = obligationPolicySubjectFor(input.cycleInstanceId);
  const recorded = await input.decisionServices.recordHumanDecision.execute({
    decisionId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    subject,
    options: [
      {
        optionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
        label: "Aucun effet gouverné requis",
      },
      { optionId: "opt:refuse", label: "Refuse" },
    ],
    selectedOptionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
    actor: PILOTE,
    authority: "morris",
    status: "accepted",
    reversible: false,
    scope,
    authorityEvidenceId: auth.evidenceId,
    rationale: "Pilot obligation-policy: no governed effects for this cycle",
  });
  if (!recorded.ok) {
    return {
      ok: false,
      code: recorded.error.detailCode,
      message: recorded.error.message,
    };
  }

  const assessed = await input.cycleServices.pilotLifecycle.assess({
    cycleInstanceId: input.cycleInstanceId,
    projectId: input.projectId,
  });
  if (!assessed.ok) {
    return {
      ok: false,
      code: assessed.error.detailCode,
      message: assessed.error.message,
    };
  }
  return {
    ok: true,
    decisionId,
    assessment: assessed.assessment,
  };
}

/** D-LC-05 — close bound active trajectory step via existing domain step states. */
export async function completeBoundTrajectoryStepAction(input: {
  projectId: string;
  cycleInstanceId: string;
  cycleServices: CycleServices;
  authorityResolver: MemoryAuthorityResolver;
  nowIso: () => string;
}): Promise<
  | { ok: true; stepId: string; assessment: FinalizationAssessment }
  | { ok: false; code: string; message: string }
> {
  const nowIso = input.nowIso();
  const scope = `pilot-lifecycle:${input.cycleInstanceId}`;
  const auth = await ensurePiloteAuthority({
    authorityResolver: input.authorityResolver,
    scope,
    nowIso,
  });
  if (!auth.ok) return auth;

  const closed =
    await input.cycleServices.pilotLifecycle.completeBoundActiveTrajectoryStep({
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
      createdBy: PILOTE,
    });
  if (!closed.ok) {
    return {
      ok: false,
      code: closed.error.detailCode,
      message: closed.error.message,
    };
  }
  const assessed = await input.cycleServices.pilotLifecycle.assess({
    cycleInstanceId: input.cycleInstanceId,
    projectId: input.projectId,
  });
  if (!assessed.ok) {
    return {
      ok: false,
      code: assessed.error.detailCode,
      message: assessed.error.message,
    };
  }
  return {
    ok: true,
    stepId: closed.stepId,
    assessment: assessed.assessment,
  };
}

/** D-LC-05 — resolve blocking Reservation via existing UpdateEpistemicState. */
export async function resolveBlockingReservationAction(input: {
  projectId: string;
  cycleInstanceId: string;
  epistemicItemId: string;
  cycleServices: CycleServices;
  authorityResolver: MemoryAuthorityResolver;
  nowIso: () => string;
}): Promise<
  | { ok: true; epistemicItemId: string; assessment: FinalizationAssessment }
  | { ok: false; code: string; message: string }
> {
  const nowIso = input.nowIso();
  const scope = `pilot-lifecycle:${input.cycleInstanceId}`;
  const auth = await ensurePiloteAuthority({
    authorityResolver: input.authorityResolver,
    scope,
    nowIso,
  });
  if (!auth.ok) return auth;

  const items = await input.cycleServices.epistemic.listByProject(
    input.projectId,
  );
  const target = items.find((i) => i.epistemicItemId === input.epistemicItemId);
  if (!target) {
    return {
      ok: false,
      code: "EPISTEMIC_NOT_FOUND",
      message: "Réserve introuvable.",
    };
  }
  if (target.type !== "Reservation") {
    return {
      ok: false,
      code: "EPISTEMIC_INVALID",
      message: "L’élément n’est pas une réserve.",
    };
  }
  if (target.status !== "active" || target.blocking !== true) {
    return {
      ok: false,
      code: "EPISTEMIC_INVALID",
      message: "La réserve n’est pas une réserve bloquante active.",
    };
  }

  const updated = await input.cycleServices.updateEpistemicState.execute({
    projectId: input.projectId,
    createdBy: PILOTE,
    items: [
      {
        epistemicItemId: target.epistemicItemId,
        type: "Reservation",
        statement: target.statement,
        source: target.source,
        status: "resolved",
        blocking: false,
        confidence: target.confidence,
        relatedObjects: target.relatedObjects,
        provenance: target.provenance,
      },
    ],
  });
  if (!updated.ok) {
    return {
      ok: false,
      code: updated.error.detailCode,
      message: updated.error.message,
    };
  }

  const assessed = await input.cycleServices.pilotLifecycle.assess({
    cycleInstanceId: input.cycleInstanceId,
    projectId: input.projectId,
  });
  if (!assessed.ok) {
    return {
      ok: false,
      code: assessed.error.detailCode,
      message: assessed.error.message,
    };
  }
  return {
    ok: true,
    epistemicItemId: target.epistemicItemId,
    assessment: assessed.assessment,
  };
}
```

---

## End of draft beginning

Remaining Critical Review narrative, capture fills (A–H), and adjudication criteria to be appended later. Product remains at HEAD `4a80965a5f1687f805544c56be66e5d2ead3ea29` with no new Product commit from this pack.
