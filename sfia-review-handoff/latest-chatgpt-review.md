# SFIA STUDIO — GCEC-CURSOR-REAL
STOP HANDOFF ENRICHMENT — MODIFIED CONTENT EMBEDDED

## TIMESTAMP
2026-09-11T18:13:42+02:00

## PURPOSE OF THIS HANDOFF
Regularize Review Handoff documentation only.

- NO StartExecution REAL
- NO Product commit
- NO Product push
- HEAD remains `290eca6544f93a898fc3920f99142dc6130ba05e`
- Four local uncommitted Product adaptations remain uncommitted
- Embed FULL diffs + FULL file contents so ChatGPT Critical Review can inspect the harness fix

Prior STOP handoff: `8ef03b9a0120ff8498218439c78389fbedd63887`
Prior STOP verdict remains binding:
**STOP — GCEC-CURSOR-REAL RECONCILIATION REQUIRED**

## GO MORRIS
GCEC-CURSOR-REAL was consumed in the prior attempt.
This publication is Review Handoff enrichment only (authorized process exception).

## GIT TRUTH
- worktree: `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310`
- branch: `delivery/sfia-studio-product-proof-qual-to-governed-cycle`
- HEAD: `290eca6544f93a898fc3920f99142dc6130ba05e`
- parent: `8d05732c0be7eced7a6acee71d1e1d990a1e8db0`
- origin/main: `a9f6c310a0826d0e5bd6f7264603382a86564db1`
- Product commit: NONE
- Product push: NONE
- REAL StartExecution in this regularization: NONE

## TRACKED / UNTRACKED LOCAL PRODUCT STATE
```
 M projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts
 M projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealDocsWrite.real.d0.test.ts
```

## STOP CONTEXT (UNCHANGED)
1. REAL path reached Gate D → StartExecution → adapter `adp:m4-cursor-cli-real` → `running` (~67ms spawn-ACK).
2. Harness incorrectly asserted `started.attempt.realProcessInvoked === true` (field undefined on Attempt aggregate).
3. Vitest failed; afterEach wiped disposable DB/execRoot/worktree → no retained processRef/observation/artifact.
4. Remote proof repo unchanged at `32c7c2008197e5c61b32c16479144e9863291358`; `docs/functional-design.md` ABSENT remotely.
5. §21 forbids automatic second REAL attempt without new Morris GO.

## HARNESS FIX SUMMARY (FOR CRITICAL REVIEW)
Replace invalid Attempt-field assertion with durable journal frontier proof:

- After StartExecution OK + status `running`, read
  `attempts.realBoundary.safetyJournal.findFrontierByAttempt(attemptId)`
- Require a `LAUNCHED` row with non-empty `processRef` matching `/^(pid:|proc:)/`
- Call `completeBoundedDocsWriteLaunch(..., awaitIfPending: true)` so pending spawn-ACK awaits terminal observation
- Default `awaitIfPending` remains `false` → T-R3-PENDING / T-R3-ASYNC-CONTINUATION preserved

## POST-FIX TEST COMMANDS AND RESULTS
Commands (REAL flags unset — ordinary suite; REAL harness skipped):
```
cd projects/sfia-studio/app
unset SFIA_STUDIO_CURSOR_REAL SFIA_GCEC_CURSOR_REAL_PROOF SFIA_GCEC_MANAGED_REPO_BASE
npx vitest run \
  __tests__/oa/cycle/gcecCursorRealDocsWrite.real.d0.test.ts \
  __tests__/project-assistant/preM6.realProductWiringResidual.test.ts \
  __tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts \
  __tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts \
  __tests__/oa/cycle/gcecD15Negatives.d0.test.ts
npm run typecheck
git diff --check -- <four adapted files>
```

Exact counts from `.tmp-sfia-review/gcec-cursor-real-postfix-tests.out`:
```
Test Files  4 passed | 1 skipped (5)
Tests  98 passed | 1 skipped (99)
```
- skipped file = REAL harness (dual env gate OFF) — expected
- typecheck: PASS
- git diff --check: PASS

## GATES
- GCEC-CURSOR-REAL: OPEN (STOP / reconciliation)
- GCEC-PUSH / GCEC-PR / GCEC-MERGE / GCEC-RUNTIME-V3: CLOSED
- No REAL relaunch in this regularization

## ANTI-CLAIMS
- enriched handoff ≠ REAL proof closed
- uncommitted adaptations ≠ authorized to commit yet (await ChatGPT Critical Review)
- documentation regularization ≠ second REAL attempt

## VERDICT (UNCHANGED)
**STOP — GCEC-CURSOR-REAL RECONCILIATION REQUIRED**

---

## EMBEDDED DIFFS (COMPLETE / USEFUL)

### MODIFIED: `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts`

Note: gateway instruction: no Shell / file-edit only / no README mutate

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
index ad2cfa6d..4e2af8ae 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
@@ -236,6 +236,9 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
         "Ne créer/modifier AUCUN autre fichier.",
         "Ne supprimer AUCUN fichier (noDelete=true).",
         "Ne pas commit, push, PR, merge, ni remote git.",
+        "Ne lancer aucune commande Shell.",
+        "Utiliser uniquement les outils d'édition de fichiers (Write/StrReplace).",
+        "Ne pas modifier README.md.",
         "En cas d'ambiguïté ou de chemin hors allowlist: STOP immédiatement.",
         `target=${request.target ?? ""}`,
         `action=${request.action ?? ""}`,
```

### MODIFIED: `projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts`

Note: awaitIfPending opt-in (default false preserves T-R3-PENDING/ASYNC)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts b/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
index eeab483a..33010ac2 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
@@ -92,6 +92,12 @@ export function toNoraObservationFacts(input: {
 export async function completeBoundedReadOnlyLaunch(input: {
   attempt: ExecutionAttempt;
   services: ExecutionAttemptServices;
+  /**
+   * When true and the process is still live after spawn-ACK, await terminal
+   * observation instead of returning status "running". Default false preserves
+   * async continuation (T-R3-PENDING / T-R3-ASYNC-CONTINUATION).
+   */
+  awaitIfPending?: boolean;
 }): Promise<CompleteBoundedReadOnlyLaunchResult> {
   const realBoundary = input.services.realBoundary;
   if (!realBoundary) {
@@ -147,13 +153,20 @@ export async function completeBoundedReadOnlyLaunch(input: {
     observation.timedOut !== true &&
     observation.exitCode === null;
   if (pendingObservation) {
-    return {
-      ok: true,
-      status: "running",
-      attempt: input.attempt,
-      observation,
-      facts: null,
-    };
+    if (input.awaitIfPending === true) {
+      // Opt-in for REAL harness / callers that want a single await-to-terminal.
+      observation = await realBoundary.launchPort.awaitCompletion(
+        launched.processRef,
+      );
+    } else {
+      return {
+        ok: true,
+        status: "running",
+        attempt: input.attempt,
+        observation,
+        facts: null,
+      };
+    }
   }

   if (!observation) {
```

### MODIFIED: `projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts`

Note: passes awaitIfPending through to RO completion

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts b/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts
index 9670400a..d7ba8b05 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts
@@ -67,10 +67,13 @@ export async function completeBoundedDocsWriteLaunch(input: {
   statusDiffPort?: LocalGitStatusDiffPort;
   /** Test-only injectable porcelain when git unavailable. */
   nameStatusText?: string;
+  /** See completeBoundedReadOnlyLaunch.awaitIfPending. */
+  awaitIfPending?: boolean;
 }): Promise<CompleteBoundedDocsWriteLaunchResult> {
   const base = await completeBoundedReadOnlyLaunch({
     attempt: input.attempt,
     services: input.services,
+    awaitIfPending: input.awaitIfPending,
   });
   if (!base.ok) return base;
   if (base.status !== "succeeded") {
```

### CREATED: `projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealDocsWrite.real.d0.test.ts`

Note: REAL-gated harness; journal LAUNCHED/processRef proof; awaitIfPending:true

```diff
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealDocsWrite.real.d0.test.ts
@@ NEW FILE @@
/**
 * GCEC-CURSOR-REAL — bounded REAL Cursor docs-write proof.
 *
 * NEVER runs in ordinary vitest suites.
 * Requires BOTH:
 *   SFIA_STUDIO_CURSOR_REAL=1
 *   SFIA_GCEC_CURSOR_REAL_PROOF=1
 * Plus env:
 *   SFIA_GCEC_MANAGED_REPO_BASE=/path/to/managed/base
 *   (clone at {base}/mcleland147__sfia-gcec-proof-task-manager @ BASE_SHA)
 *
 * Outer harness MUST NOT create docs/functional-design.md — only runtime Cursor.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { Confirmation } from "@/lib/oa/decision";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  ManagedProjectRepositoryResolver,
  sanitizeManagedRepoIdentity,
} from "@/lib/oa/execution-attempt";
import { NodeLocalGitStatusDiffPort } from "@/lib/oa/git-ports";
import { F3_CONFIRM_ACTION_REF } from "@/features/project-assistant/f3/constants";
import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import { completeBoundedDocsWriteLaunch } from "@/features/project-assistant/f3/completeBoundedDocsWriteLaunch";
import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import { FakeConversationProvider } from "@/lib/platform/ai";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
} from "@/lib/vertical-slice-runtime";
import {
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  prepareCandidateTrajectoryFromCurrentRecommendation,
  prepareCycleFromValidatedTrajectory,
  startPreparedTrajectoryCycle,
  materializeLifecycleRecommendationFromStructuredOutput,
  resolveTrajectoryBootstrapPresence,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import {
  approveCandidateTrajectory,
  buildPreCycleCandidateApprovalPresentation,
} from "@/features/project-assistant/approveCandidateTrajectory";

const ENABLED =
  process.env.SFIA_STUDIO_CURSOR_REAL === "1" &&
  process.env.SFIA_GCEC_CURSOR_REAL_PROOF === "1";

const APP_ROOT = path.resolve(__dirname, "../../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const IDENTITY = "mcleland147/sfia-gcec-proof-task-manager";
const BASE_SHA = "32c7c2008197e5c61b32c16479144e9863291358";
const TARGET_PATH = "docs/functional-design.md";
const BRANCH = "main";
const NOW = "2026-09-11T17:00:00.000Z";
const PILOTE = LOCAL_PILOTE_ACTOR;

const SIGNALS_LIGHT = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
} as const;

const ARTIFACT_BRIEF =
  "Functional design for a simple personal task manager (Gestion de tâches). Actor: single end user. Business object: Task.";

const CONTENT_REQUIREMENTS = [
  "Task fields: identifier, mandatory title, optional description, status, optional due date",
  "Statuses: TODO, IN_PROGRESS, DONE",
  "Flows: create task, list tasks, filter by status, edit task, change status",
  "Rules: blank title refused; status must be in defined set; due date optional",
  "Acceptance criteria: observable/testable for the flows above",
  "OUT OF SCOPE: authentication, multi-user, notifications, architecture, DB, API, framework, pixel UX",
];

const temps: string[] = [];

afterEach(() => {
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
  for (const t of temps.splice(0)) {
    try {
      fs.rmSync(t, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }
});

beforeEach(() => {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
});

function tempDir(prefix: string): string {
  const d = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  temps.push(d);
  return d;
}

function git(cwd: string, args: string[]): string {
  return execFileSync("git", args, {
    cwd,
    encoding: "utf8",
    shell: false,
  }).trim();
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:gcec-real-${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:gcec-real-${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:gcec-real-${this.prefix}-${this.n}`;
  }
}

function requireAuth(
  auth: ReturnType<typeof registerLocalPiloteAuthority>,
): string {
  if (!auth.ok) throw new Error(`auth: ${auth.code}`);
  return auth.evidenceId;
}

describe.skipIf(!ENABLED)("gcecCursorRealDocsWrite — REAL Product path", () => {
  it(
    "ONE StartExecution REAL Cursor creates docs/functional-design.md only",
    async () => {
      const managedBase = process.env.SFIA_GCEC_MANAGED_REPO_BASE?.trim();
      expect(managedBase, "SFIA_GCEC_MANAGED_REPO_BASE required").toBeTruthy();
      const sanitized = sanitizeManagedRepoIdentity(IDENTITY);
      const cloneRoot = path.join(managedBase!, sanitized);
      expect(fs.existsSync(path.join(cloneRoot, ".git"))).toBe(true);
      expect(git(cloneRoot, ["rev-parse", "HEAD"])).toBe(BASE_SHA);
      expect(fs.existsSync(path.join(cloneRoot, TARGET_PATH))).toBe(false);
      const resolved =
        new ManagedProjectRepositoryResolver().resolveLocalRepoRoot(
          { identity: IDENTITY },
          managedBase!,
        );
      expect(resolved).toBe(cloneRoot);
      // Must never target sfia-workspace
      expect(cloneRoot.includes("sfia-product-proof")).toBe(false);
      expect(cloneRoot.includes("sfia-workspace")).toBe(false);

      const root = tempDir("sfia-gcec-real-");
      const execRoot = path.join(root, "m4-worktrees");
      const safetyJournalPath = path.join(root, "m4", "launch-safety.sqlite");
      fs.mkdirSync(execRoot, { recursive: true });
      fs.mkdirSync(path.dirname(safetyJournalPath), { recursive: true });

      const runtime = getRuntimeApplicationService({
        registryRoot: REGISTRY_ROOT,
        schemasRoot: SCHEMAS_ROOT,
        nowIso: NOW,
        idSource: new FixedIdSource("docs"),
        auditMode: "noop",
        productDbPath: path.join(root, "oa.sqlite"),
        realBoundaryEnv: {
          ...process.env,
          SFIA_STUDIO_CURSOR_REAL: "1",
        },
        realBoundaryComposition: {
          managedRepoRootBase: managedBase!,
          execRoot,
          safetyJournalPath,
          // Ambient RO root must not be used for docs-write; still set away from Product.
          repoRoot: cloneRoot,
          studioRoot: path.resolve(APP_ROOT, ".."),
        },
      });
      const oa = runtime.oa!;
      expect(oa.executionAttemptServices.realBoundary).toBeTruthy();
      expect(
        oa.executionAttemptServices.realBoundary?.managedRepoRootBase,
      ).toBe(path.resolve(managedBase!));

      const created = await runtime.createProject({
        name: "Gestion de tâches",
        objective: "GCEC Cursor REAL docs-write proof",
        context: "proof-vehicle",
        criticality: "STANDARD",
        constraints: ["BOUNDED REAL DOCS-WRITE ONLY"],
        shortReference: "GCECREAL",
        idempotencyKey: "idem:gcec-cursor-real",
      });
      expect(created.ok).toBe(true);
      if (!created.ok) throw new Error("createProject failed");
      const projectId = created.project.projectId;

      const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
        projectId,
        actor: PILOTE,
        binding: {
          provider: "github",
          identity: IDENTITY,
          remoteUrl: `https://github.com/${IDENTITY}.git`,
          defaultBranch: BRANCH,
          pathRoot: "docs",
          baseSha: BASE_SHA,
        },
      });
      expect(bound.ok).toBe(true);

      const cycles0 = await oa.cycleServices.cycles.listByProject(projectId);
      const decisions0 = await oa.decisionServices.decisions.listByProject(
        projectId,
      );
      const lpsBoot =
        await oa.projectServices.getCurrentLivingProjectState.execute({
          projectId,
        });
      if (!lpsBoot.ok) throw new Error("lps");
      const presence = await resolveTrajectoryBootstrapPresence(
        oa.cycleServices.trajectories,
        projectId,
      );
      const projectBoot = await oa.projectServices.getProject.execute({
        projectId,
      });
      if (!projectBoot.ok || !projectBoot.project.doctrinePackageRef) {
        throw new Error("doctrine pin missing");
      }
      const pin = projectBoot.project.doctrinePackageRef;

      const mat = await materializeLifecycleRecommendationFromStructuredOutput({
        projectId,
        structuredOutput: {
          narrative: "Next cycle: Conception fonctionnelle.",
          preCycleRoutingAssessment: {
            ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
          },
          lifecycleRecommendation: {
            intent: "NEXT_CYCLE" as const,
            statement: "Conception fonctionnelle task manager.",
            subjectCycleInstanceId: null,
            targetCycleInstanceId: null,
            targetCycleTypeId: "cyc:functional-design",
            rationale: "GCEC-CURSOR-REAL",
            authority: "none" as const,
            isHumanDecision: false as const,
            qualificationSignals: { ...SIGNALS_LIGHT },
          },
        },
        updateEpistemicState: oa.cycleServices.updateEpistemicState,
        facts: {
          cycles: cycles0,
          lpsActiveCycleInstanceId:
            lpsBoot.livingProjectState.activeCycleInstanceId,
          lpsVersion: lpsBoot.livingProjectState.version,
          doctrinePackageId: pin.doctrinePackageId,
          doctrinePackageVersion: pin.version,
          doctrinePackageDigest: pin.digest,
          trajectory: null,
          trajectoryBootstrapPresence: presence,
          decisions: decisions0,
          evidence: [],
          epistemicItems: await oa.cycleServices.epistemic.listByProject(
            projectId,
          ),
        },
        producedAt: NOW,
        createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
      });
      expect(mat.materialization?.ok).toBe(true);

      const bridgeDeps = {
        trajectories: oa.cycleServices.trajectories,
        createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
        updateEpistemicState: oa.cycleServices.updateEpistemicState,
        runInTransaction: ((fn: () => Promise<unknown>) =>
          oa.projectServices.store.runInTransaction(fn)) as <T>(
          fn: () => Promise<T>,
        ) => Promise<T>,
        listEpistemicByProject: (pid: string) =>
          oa.cycleServices.epistemic.listByProject(pid),
        listCyclesByProject: (pid: string) =>
          oa.cycleServices.cycles.listByProject(pid),
        listDecisionsByProject: (pid: string) =>
          oa.decisionServices.decisions.listByProject(pid),
        listEvidenceByProject: (pid: string) =>
          oa.evidenceReviewServices.repository.listByProject(pid),
        getCurrentLps: (pid: string) =>
          oa.projectServices.getCurrentLivingProjectState.execute({
            projectId: pid,
          }),
        getProjectDoctrinePin: async (pid: string) => {
          const p = await oa.projectServices.getProject.execute({
            projectId: pid,
          });
          if (!p.ok) return null;
          const d = p.project.doctrinePackageRef;
          return d
            ? {
                doctrinePackageId: d.doctrinePackageId,
                version: d.version,
                digest: d.digest,
              }
            : null;
        },
        newTrajectoryId: () => `trj:gcec-real-${projectId}`,
        newStepId: () => `stp:fd-real`,
        newProvenanceObservationId: () => `epi:gcec-real-trj`,
        correlationId: `cor:gcec-real-bridge`,
      };

      const candidatePrepared =
        await prepareCandidateTrajectoryFromCurrentRecommendation({
          projectId,
          deps: bridgeDeps,
        });
      expect(candidatePrepared.ok).toBe(true);
      if (!candidatePrepared.ok) throw new Error(String(candidatePrepared));

      const presentation = await buildPreCycleCandidateApprovalPresentation({
        oa,
        projectId,
      });
      expect(presentation.ok && presentation.presentation).toBeTruthy();
      if (!presentation.ok || !presentation.presentation) {
        throw new Error("presentation");
      }
      const approved = await approveCandidateTrajectory({
        oa,
        projectId,
        presentationDigest: presentation.presentation.presentationDigest,
        forceLocalAuthority: true,
      });
      expect(approved.ok).toBe(true);
      if (!approved.ok) throw new Error(String(approved));

      const prep = await prepareCycleFromValidatedTrajectory({ oa, projectId });
      expect(prep.ok).toBe(true);
      if (!prep.ok) throw new Error(prep.code);
      const startedCycle = await startPreparedTrajectoryCycle({
        oa,
        projectId,
        cycleInstanceId: prep.cycle.cycleInstanceId,
        forceLocalAuthority: true,
      });
      expect(startedCycle.ok).toBe(true);
      if (!startedCycle.ok) throw new Error(startedCycle.code);
      const cycleInstanceId = startedCycle.cycle.cycleInstanceId;

      const overview = await runtime.getProject(projectId);
      expect(overview.ok).toBe(true);
      if (!overview.ok) throw new Error("overview");
      const provider = new FakeConversationProvider();
      const analyzed = await analyzeIntent({
        userContent:
          "__F2_DOCS_WRITE_GCEC__ produce functional design for personal task manager",
        projectSummary: overview.project.name ?? "Gestion de tâches",
        provider,
      });
      const snapshot = {
        projectId,
        lpsId: overview.livingState.id,
        lpsVersion: overview.livingState.version,
        doctrineDigest: overview.doctrine.digest,
        activeCycleInstanceId: cycleInstanceId,
        ckcResolutionRef: null as string | null,
      };
      const ei = analyzed.analysis.executionIntent;
      const proposal = saveProposal({
        proposalId: createProposalId(),
        status: "DECISION_REQUIRED",
        rephrasedRequest:
          analyzed.analysis.rephrasedRequest ?? "docs write task manager",
        objective:
          analyzed.analysis.objective ?? "Functional design task manager",
        cycleTypeId:
          analyzed.analysis.candidateCycleTypeId ?? "cyc:functional-design",
        recommendedProfile: "Standard",
        rationale: "GCEC-CURSOR-REAL",
        scope: "docs/functional-design.md uniquement",
        outOfScope: analyzed.analysis.outOfScope,
        activatedBlocks: analyzed.analysis.activatedBlocks,
        expectedOutcome: "docs/functional-design.md",
        sources: [],
        risks: analyzed.analysis.risks,
        reservations: analyzed.analysis.reservations,
        stopConditions: analyzed.analysis.stopConditions,
        morrisGateRequired: true,
        nextPossibleStep: "F3 PREPARE",
        contextSnapshot: snapshot,
        processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
        executionForbidden: true,
        noExecutingStatus: true,
        agentBinding: "NOT_AVAILABLE",
        requestedOperation: "cursor.docs_write.apply",
        executionIntent: {
          ...(ei && typeof ei === "object" ? ei : {}),
          intentKind: "docs_write",
          artifactType: "functional_design",
          targetRepositoryRef: IDENTITY,
          targetPath: TARGET_PATH,
          scopeIn: ["docs/"],
          scopeOut: ["src/", ".github/", "README.md"],
          expectedOutputs: [TARGET_PATH],
          requiredCapabilities: ["cap:cursor.docs_write"],
          validationExpectations: ["path_allowlist", "no_delete"],
          evidenceRequirements: [
            "git:local_commit",
            "git:remote_push",
            "git:pull_request",
            "git:ci_status",
            "git:review_status",
            "git:merge",
            "git:post_merge_verification",
          ],
          requestedOperation: "cursor.docs_write.apply",
          reversibilityExpectation: "reversible",
          artifactBrief: ARTIFACT_BRIEF,
          contentRequirements: CONTENT_REQUIREMENTS,
        },
      });
      const go = await recordF2Decision({
        proposalId: proposal.proposalId,
        projectId,
        decisionKind: "GO",
        currentContext: snapshot,
        decisionServices: oa.decisionServices,
        authorityResolver: oa.authorityResolver,
        nowIso: () => oa.clock.nowIso(),
        forceM3Authority: true,
      });
      expect(go.ok).toBe(true);
      if (!go.ok) throw new Error("go");
      const decisionId = go.decision.decisionId;

      const overviewAfter = await runtime.getProject(projectId);
      if (!overviewAfter.ok) throw new Error("overviewAfter");
      const prepared = await prepareAndResolveM3ProductPath({
        projectId,
        decisionId,
        currentContext: {
          projectId,
          lpsId: overviewAfter.livingState.id,
          lpsVersion: overviewAfter.livingState.version,
          doctrineDigest: overviewAfter.doctrine.digest,
          activeCycleInstanceId: cycleInstanceId,
        },
        deps: {
          decisionServices: oa.decisionServices,
          authorityResolver: oa.authorityResolver,
          executionContractServices: oa.executionContractServices,
          nowIso: () => oa.clock.nowIso(),
          forceM3Authority: true,
          preferBoundedDocsWriteProfile: true,
          boundedDocsWriteBaseHeadSha: BASE_SHA,
        },
      });
      expect(prepared.ok).toBe(true);
      if (!prepared.ok) throw new Error("prepareM3");
      const durableEc =
        await oa.executionContractServices.getExecutionContract.execute({
          executionContractId: prepared.payload.successor.executionContractId,
        });
      expect(durableEc.ok).toBe(true);
      if (!durableEc.ok) throw new Error("ec missing");
      let contract = durableEc.contract;
      expect(contract.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
      const inputs = (contract.inputs ?? {}) as Record<string, unknown>;
      expect(inputs.repositoryRef ?? inputs.targetRepositoryRef).toBe(IDENTITY);
      expect(inputs.targetPath).toBe(TARGET_PATH);
      expect(inputs.baseHeadSha).toBe(BASE_SHA);

      const execAuth = registerLocalPiloteAuthority({
        authorityResolver: oa.authorityResolver,
        scope: contract.scope,
        issuedAt: NOW,
        evidenceId: `evd:gcec-real-exec:${contract.executionContractId}`,
        forceEnable: true,
      });
      const gateConfirmId = `cfm:gate:${contract.executionContractId}`;
      const requested =
        await oa.decisionServices.requestConfirmation.execute({
          confirmationId: gateConfirmId,
          level: "N3",
          actionRef: F3_CONFIRM_ACTION_REF,
          requestedBy: PILOTE,
          requestedTo: PILOTE,
          scope: contract.scope,
          idempotencyKey: `idem:${gateConfirmId}`,
          decisionRef: decisionId,
        });
      expect(requested.ok).toBe(true);
      const grantedGate =
        await oa.decisionServices.grantConfirmation.execute({
          confirmationId: gateConfirmId,
          actor: PILOTE,
          authorityEvidenceId: requireAuth(execAuth),
        });
      expect(grantedGate.ok).toBe(true);
      const confirmed =
        await oa.executionContractServices.confirmExecutionContract.execute({
          executionContractId: contract.executionContractId,
          confirmationId: gateConfirmId,
          actor: PILOTE,
          authorityEvidenceId: requireAuth(execAuth),
          expectedVersion: contract.version,
        });
      expect(confirmed.ok).toBe(true);
      if (!confirmed.ok) throw new Error("confirm");
      contract = confirmed.contract;

      // Pre-flight: target still absent in clone (outer Cursor must not write)
      expect(fs.existsSync(path.join(cloneRoot, TARGET_PATH))).toBe(false);

      const attemptId = `xat:gcec-real:${contract.executionContractId}`.slice(
        0,
        128,
      );
      const attempts = oa.executionAttemptServices;
      const selected = await attempts.selectExecutionAgent.execute({
        attemptId,
        executionContractId: contract.executionContractId,
        idempotencyKey: `idem:sel:${attemptId}`,
        actor: PILOTE,
        authorityEvidenceId: requireAuth(execAuth),
        expectedContractVersion: contract.version,
        selectionProfile: "standard",
        selectionStrategy: "capabilities_deterministic",
        requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
        systemInitiated: true,
      });
      expect(selected.ok).toBe(true);
      if (!selected.ok) throw new Error(selected.error.message);

      const expiresAt = new Date(Date.parse(NOW) + 60 * 60 * 1000).toISOString();
      const grantId = `gd:gcec-real:${attemptId}`.slice(0, 128);
      const gate = await attempts.grantRealExecutionGate!.execute({
        grantId,
        attemptId,
        actor: PILOTE,
        expiresAt,
        authorityEvidenceId: requireAuth(execAuth),
      });
      expect(gate.ok).toBe(true);
      if (!gate.ok) throw new Error(gate.error.message);

      // ONE REAL StartExecution — no Git Confirmations → FS slice only
      const started = await attempts.startExecution.execute({
        attemptId,
        actor: PILOTE,
        authorityEvidenceId: requireAuth(execAuth),
        confirmations: [] as Confirmation[],
      });
      expect(started.ok).toBe(true);
      if (!started.ok) {
        throw new Error(
          `StartExecution failed: ${started.error.detailCode} ${started.error.internalCauseRef ?? ""} ${started.error.message}`,
        );
      }
      expect(started.attempt.status).toBe("running");
      // REAL spawn-ACK is proven via safety journal LAUNCHED + gateway path
      // (Attempt aggregate may not surface realProcessInvoked as a field).
      const frontiers =
        await attempts.realBoundary!.safetyJournal.findFrontierByAttempt(
          attemptId,
        );
      const launched = frontiers.find(
        (row) =>
          row.kind === "LAUNCHED" &&
          typeof row.processRef === "string" &&
          row.processRef.trim().length > 0,
      );
      expect(launched?.processRef).toBeTruthy();
      expect(String(launched!.processRef)).toMatch(/^(pid:|proc:)/);
      const attemptRunning =
        await attempts.getExecutionAttempt.execute({ attemptId });
      expect(attemptRunning.ok).toBe(true);
      if (!attemptRunning.ok) throw new Error("attempt missing");

      const completed = await completeBoundedDocsWriteLaunch({
        attempt: attemptRunning.attempt,
        services: attempts,
        targetPath: TARGET_PATH,
        pathAllowlist: ["docs/"],
        statusDiffPort: new NodeLocalGitStatusDiffPort(),
        awaitIfPending: true,
      });
      expect(completed.ok).toBe(true);
      if (!completed.ok) {
        throw new Error(`complete failed: ${completed.code} ${completed.message}`);
      }
      expect(completed.status).toBe("succeeded");
      if (completed.status !== "succeeded") throw new Error("not succeeded");

      const worktree = completed.facts.worktreeRef!;
      expect(worktree).toBeTruthy();
      expect(worktree.includes("sfia-product-proof")).toBe(false);
      expect(fs.existsSync(path.join(worktree, TARGET_PATH))).toBe(true);
      const artifactText = fs.readFileSync(
        path.join(worktree, TARGET_PATH),
        "utf8",
      );
      expect(artifactText.trim().length).toBeGreaterThan(80);
      expect(artifactText.toLowerCase()).toMatch(/task|tâche/);
      expect(fs.readFileSync(path.join(worktree, "README.md"), "utf8")).toBe(
        fs.readFileSync(path.join(cloneRoot, "README.md"), "utf8"),
      );
      expect(git(worktree, ["rev-parse", "HEAD"])).toBe(BASE_SHA);
      // No commit in worktree / clone
      expect(git(cloneRoot, ["rev-parse", "HEAD"])).toBe(BASE_SHA);
      expect(git(cloneRoot, ["status", "--porcelain"])).toMatch(/^$/);

      // Outer harness must not have created the artifact in clone root either
      // (worktree is isolated; clone stays clean)
      expect(fs.existsSync(path.join(cloneRoot, TARGET_PATH))).toBe(false);

      const ingested = await ingestDocsWriteArtifactEvidence({
        evidenceReviewServices: oa.evidenceReviewServices,
        projectId,
        cycleInstanceId,
        executionContractId: contract.executionContractId,
        executionAttemptId: attemptId,
        targetPath: TARGET_PATH,
        digest: completed.facts.digest,
        actor: PILOTE,
        nowIso: oa.clock.nowIso(),
      });
      expect(ingested.ok).toBe(true);
      if (!ingested.ok) throw new Error(ingested.code);

      const artLoaded = await oa.evidenceReviewServices.evidenceReader.findById(
        ingested.evidenceId,
      );
      expect(artLoaded).toBeTruthy();
      // Payload script for integrity (same pattern as deterministic E2E)
      const evidenceSvc = oa.evidenceReviewServices as typeof oa.evidenceReviewServices & {
        payload?: {
          setScript?: (
            id: string,
            s: { availability: "available"; digest: string },
          ) => void;
        };
      };
      evidenceSvc.payload?.setScript?.(ingested.evidenceId, {
        availability: "available",
        digest: completed.facts.digest,
      });
      const artVerified =
        await oa.evidenceReviewServices.verifyEvidenceIntegrity.execute({
          evidenceId: ingested.evidenceId,
          expectedVersion: artLoaded!.version,
          actor: PILOTE,
        });
      expect(artVerified.ok).toBe(true);

      const ecAfter =
        await oa.executionContractServices.getExecutionContract.execute({
          executionContractId: contract.executionContractId,
        });
      expect(ecAfter.ok).toBe(true);
      if (!ecAfter.ok) throw new Error("ec after");
      // Git requirements remain → EC must NOT be completed
      expect(ecAfter.contract.status).toBe("confirmed");
      expect(completed.attempt.status).toBe("succeeded");

      const cycleAfter = await oa.cycleServices.cycles.findById(cycleInstanceId);
      expect(cycleAfter?.status).not.toBe("closed");
      expect(cycleAfter?.status).not.toBe("finalized");

      // Persist proof facts for Review Pack (local dirt only)
      const outDir = path.resolve(
        APP_ROOT,
        "../../.tmp-sfia-review/gcec-cursor-real-proof",
      );
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(
        path.join(outDir, "facts.json"),
        JSON.stringify(
          {
            projectId,
            cycleInstanceId,
            executionContractId: contract.executionContractId,
            attemptId,
            grantId,
            processRef: completed.facts.processRef,
            worktreeRef: worktree,
            digest: completed.facts.digest,
            realProcessInvoked: true,
            exitCode: completed.observation.exitCode,
            timedOut: completed.observation.timedOut,
            durationMs: completed.observation.durationMs,
            authorizedEffectsHint: "filesystem only (no git Confirmation)",
            artifactPath: TARGET_PATH,
            artifactBytes: Buffer.byteLength(artifactText, "utf8"),
            workspaceHead: BASE_SHA,
            cloneHead: git(cloneRoot, ["rev-parse", "HEAD"]),
            evidenceId: ingested.evidenceId,
            ecStatus: ecAfter.contract.status,
            cycleStatus: cycleAfter?.status,
            stdoutCap: (completed.observation.stdout ?? "").slice(0, 2000),
            stderrCap: (completed.observation.stderr ?? "").slice(0, 1000),
          },
          null,
          2,
        ),
      );
      fs.writeFileSync(path.join(outDir, "functional-design.md"), artifactText);
    },
    20 * 60 * 1000,
  );
});
```

## FULL FILE EMBEDS (post-adaptation local working tree)

### FULL: `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts` (MODIFIED)

```typescript
/**
 * StudioCursorRealLaunchGateway — OA-owned REAL launch ACL (D-M4-01).
 *
 * Harvested concepts from OPS1 (no import from lib/ops1).
 * Default REAL process enablement OFF via SFIA_STUDIO_CURSOR_REAL.
 * Requires ProcessRunner + RealExecutionWorkspacePort (no Fake defaults).
 * Order: enablement → bin resolve → prepareWorkspace → runner.invoke.
 */
import { accessSync, constants } from "node:fs";
import path from "node:path";
import {
  isStudioCursorRealEnabled,
  M4_REAL_GATEWAY_ADAPTER_ID,
  SFIA_STUDIO_CURSOR_REAL_FLAG,
} from "../domain/realLaunchSafety";
import type {
  ProcessRunner,
  RealExecutionLaunchPort,
  RealLaunchRequest,
  RealLaunchResult,
  RealProcessObservation,
} from "../ports/realExecutionLaunchPort";
import type { RealExecutionWorkspacePort } from "../ports/realExecutionWorkspacePort";
import { DisabledRealProcessRunner } from "./nodeCursorProcessRunner";
import { assertResolvedTimeoutMs } from "@/lib/oa/execution-contract";
import {
  CURSOR_TRUST_MARKER_PATH_TOO_LONG_REASON,
  isCursorTrustMarkerPathCompatible,
} from "./cursorTrustMarkerPathCompatibility";
import { M4_BOUNDED_DOCS_WRITE_ACTION } from "./m4BoundedDocsWriteCursorAgent";

export type StudioCursorRealLaunchGatewayOptions = {
  readonly processRunner: ProcessRunner;
  readonly workspacePort: RealExecutionWorkspacePort;
  readonly env?: NodeJS.ProcessEnv;
  readonly resolveCursorBin?: () => string | null;
};

/** Copy of OPS1 resolveCursorBinPath pattern — no ops1 import. */
export function resolveCursorBinPath(
  env: NodeJS.ProcessEnv = process.env,
): string | null {
  const candidates = [
    env.SFIA_CURSOR_BIN,
    "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
    path.join(env.HOME ?? "", ".local/bin/cursor-agent"),
  ].filter(Boolean) as string[];
  for (const c of candidates) {
    try {
      accessSync(c, constants.X_OK);
      return c;
    } catch {
      /* next */
    }
  }
  return null;
}

export const resolveStudioCursorBinPath = resolveCursorBinPath;

export { DisabledRealProcessRunner };

export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
  readonly gatewayId = M4_REAL_GATEWAY_ADAPTER_ID;
  readonly externalEffects = true as const;

  private readonly runner: ProcessRunner;
  private readonly workspacePort: RealExecutionWorkspacePort;
  private readonly env: NodeJS.ProcessEnv;
  private readonly resolveBin: () => string | null;
  /**
   * Fallback only when the runner has no observe/awaitCompletion.
   * Live observation source is the runner registry when present
   * (single source — no competing snapshot).
   */
  private readonly fallbackObservations = new Map<
    string,
    RealProcessObservation
  >();

  constructor(options: StudioCursorRealLaunchGatewayOptions) {
    if (!options.processRunner) {
      throw new Error("studio_cursor_real_launch_process_runner_required");
    }
    if (!options.workspacePort) {
      throw new Error("studio_cursor_real_launch_workspace_port_required");
    }
    this.runner = options.processRunner;
    this.workspacePort = options.workspacePort;
    this.env = options.env ?? process.env;
    this.resolveBin =
      options.resolveCursorBin ?? (() => resolveCursorBinPath(this.env));
  }

  async launch(request: RealLaunchRequest): Promise<RealLaunchResult> {
    if (request.adapterRef !== this.gatewayId) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "adapter_ref_mismatch",
        realProcessInvoked: false,
        detailCode: "REAL_AGENT_PROFILE_INVALID",
      };
    }

    if (!isStudioCursorRealEnabled(this.env)) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "studio_cursor_real_disabled",
        realProcessInvoked: false,
        detailCode: "REAL_BOUNDARY_DISABLED",
      };
    }

    if (
      (request.target && request.target.includes("UNRESOLVED")) ||
      (request.action && request.action.includes("UNRESOLVED"))
    ) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "unresolved_contract_refused",
        realProcessInvoked: false,
        detailCode: "REAL_AGENT_PROFILE_INVALID",
      };
    }

    if (!assertResolvedTimeoutMs(request.timeoutMs)) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "resolved_timeout_ms_required",
        realProcessInvoked: false,
        detailCode: "REAL_LAUNCH_FAILED",
      };
    }

    const baseHeadSha =
      request.baseHeadSha ?? request.worktreeBaseHeadSha ?? "";
    if (!/^[0-9a-f]{40}$/i.test(baseHeadSha)) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "base_head_sha_invalid",
        realProcessInvoked: false,
        detailCode: "REAL_WORKSPACE_INVALID",
      };
    }

    const bin = this.resolveBin();
    if (!bin) {
      return {
        outcome: "fail",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "cursor_unavailable",
        realProcessInvoked: false,
        detailCode: "CURSOR_UNAVAILABLE",
      };
    }

    let workspacePath: string;
    try {
      const prepared = await this.workspacePort.prepareWorkspace({
        attemptId: request.attemptId,
        baseHeadSha,
        ...(request.managedRepoRoot
          ? { managedRepoRoot: request.managedRepoRoot }
          : {}),
        ...(request.repositoryBinding
          ? { repositoryBinding: request.repositoryBinding }
          : {}),
      });
      workspacePath = prepared.workspacePath;
    } catch (err) {
      const message = err instanceof Error ? err.message : "workspace_failed";
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: message.includes("REAL_WORKSPACE_INVALID")
          ? message
          : `workspace_prepare_failed:${message}`,
        realProcessInvoked: false,
        detailCode: "REAL_WORKSPACE_INVALID",
      };
    }

    if (!isCursorTrustMarkerPathCompatible(workspacePath)) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: CURSOR_TRUST_MARKER_PATH_TOO_LONG_REASON,
        realProcessInvoked: false,
        detailCode: "REAL_WORKSPACE_INVALID",
      };
    }

    // Fixed argv shape — executable is separate; no user-controlled shell.
    // --mode ask: local CLI help documents ask as read-only Q&A (no edits).
    // Docs-write uses default agent mode (omit --mode ask) + WRITE instruction.
    const isDocsWrite = request.action === M4_BOUNDED_DOCS_WRITE_ACTION;

    let instruction: string;
    if (isDocsWrite) {
      const spec = request.docsWriteSpec;
      if (!spec) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "docs_write_spec_missing",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      instruction = [
        "TÂCHE UNIQUE — bounded docs-write déterministe (GCEC).",
        `Créer ou modifier UNIQUEMENT le fichier: ${spec.targetPath}`,
        `Repository: ${spec.repositoryRef}`,
        `Écrire uniquement sous pathAllowlist: ${spec.pathAllowlist.join(", ")}`,
        `Type d'artifact: ${spec.artifactType}`,
        `Brief: ${spec.artifactBrief}`,
        `Exigences de contenu: ${spec.contentRequirements.join("; ")}`,
        `Scope IN: ${spec.scopeIn.join(", ") || "(none)"}`,
        `Scope OUT (interdit): ${spec.scopeOut.join(", ") || "(none)"}`,
        `Sorties attendues: ${spec.expectedOutputs.join(", ")}`,
        `Validations: ${spec.validationExpectations.join(", ") || "path_allowlist; no_delete"}`,
        "Ne créer/modifier AUCUN autre fichier.",
        "Ne supprimer AUCUN fichier (noDelete=true).",
        "Ne pas commit, push, PR, merge, ni remote git.",
        "Ne lancer aucune commande Shell.",
        "Utiliser uniquement les outils d'édition de fichiers (Write/StrReplace).",
        "Ne pas modifier README.md.",
        "En cas d'ambiguïté ou de chemin hors allowlist: STOP immédiatement.",
        `target=${request.target ?? ""}`,
        `action=${request.action ?? ""}`,
        `scope=${request.scope ?? ""}`,
        `fingerprint=${request.semanticFingerprint}`,
      ].join("\n");
    } else {
      instruction = [
        "TÂCHE UNIQUE — preuve read-only déterministe.",
        "Lire uniquement le fichier README.md à la racine du workspace.",
        "Ne modifier aucun fichier.",
        "Ne créer aucun fichier.",
        "Ne lancer aucune commande Shell.",
        "Ne faire aucune recherche récursive, Glob ou Grep.",
        "Ne consulter aucun autre fichier.",
        "Si README.md peut être lu, répondre exactement :",
        "M4_READ_ONLY_OK",
        "Si README.md ne peut pas être lu, répondre exactement :",
        "M4_READ_ONLY_UNAVAILABLE",
        `target=${request.target ?? ""}`,
        `action=${request.action ?? ""}`,
        `scope=${request.scope ?? ""}`,
        `fingerprint=${request.semanticFingerprint}`,
        "Aucune mutation, aucun git remote/commit/push/PR/merge.",
      ].join("\n");
    }

    const argv = isDocsWrite
      ? [
          "agent",
          "--print",
          "--workspace",
          workspacePath,
          "--trust",
          "--sandbox",
          "enabled",
          instruction,
        ]
      : [
          "agent",
          "--print",
          "--mode",
          "ask",
          "--workspace",
          workspacePath,
          "--trust",
          "--sandbox",
          "enabled",
          instruction,
        ];

    try {
      const invoked = await this.runner.invoke({
        attemptId: request.attemptId,
        executable: bin,
        cwd: workspacePath,
        argv,
        timeoutMs: request.timeoutMs,
        env: {
          ...this.env,
          [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
        },
      });

      if (!invoked.realProcessInvoked) {
        return {
          outcome: "fail",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "real_process_not_invoked",
          realProcessInvoked: false,
          detailCode: "REAL_LAUNCH_FAILED",
        };
      }

      if (typeof this.runner.observe !== "function") {
        this.fallbackObservations.set(invoked.processRef, {
          processRef: invoked.processRef,
          exitCode: invoked.observation?.exitCode ?? null,
          timedOut: invoked.observation?.timedOut ?? false,
          stdout: invoked.observation?.stdout ?? "",
          stderr: invoked.observation?.stderr ?? "",
          durationMs: invoked.observation?.durationMs ?? 0,
          realProcessInvoked: true,
          worktreeRef: workspacePath,
        });
      }

      return {
        outcome: "ack",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        realProcessInvoked: true,
        processRef: invoked.processRef,
        worktreeRef: workspacePath,
      };
    } catch {
      return {
        outcome: "fail",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "real_launch_threw",
        realProcessInvoked: false,
        detailCode: "REAL_LAUNCH_FAILED",
      };
    }
  }

  async observe(processRef: string): Promise<RealProcessObservation | null> {
    if (typeof this.runner.observe === "function") {
      return this.runner.observe(processRef);
    }
    return this.fallbackObservations.get(processRef) ?? null;
  }

  async awaitCompletion(
    processRef: string,
  ): Promise<RealProcessObservation | null> {
    if (typeof this.runner.awaitCompletion === "function") {
      return this.runner.awaitCompletion(processRef);
    }
    return this.observe(processRef);
  }
}

/** @deprecated Prefer StudioCursorRealLaunchGateway. */
export { StudioCursorRealLaunchGateway as CursorCliLaunchGateway };
```

### FULL: `projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts` (MODIFIED)

```typescript
/**
 * R3 — StartExecution ACK → awaitCompletion → terminal Attempt.
 * Does not change StartExecution spawn-ACK semantics.
 * No fixture fallback. No queue / worker / scheduler.
 */
import {
  M4_REAL_GATEWAY_ADAPTER_ID,
  type ExecutionAttempt,
  type ExecutionAttemptServices,
  type RealProcessObservation,
} from "@/lib/oa/execution-attempt";

export const NORA_STDOUT_CAP = 4 * 1024;
export const NORA_STDERR_CAP = 4 * 1024;

export type BoundedLaunchObservationFacts = {
  attemptId: string;
  processRef: string;
  exitCode: number | null;
  timedOut: boolean;
  durationMs: number;
  realProcessInvoked: boolean;
  technicalResultRef: string | null;
  stdout: string;
  stderr: string;
};

export type CompleteBoundedReadOnlyLaunchResult =
  | {
      ok: true;
      status: "succeeded";
      attempt: ExecutionAttempt;
      observation: RealProcessObservation;
      facts: BoundedLaunchObservationFacts;
    }
  | {
      ok: true;
      status: "running";
      attempt: ExecutionAttempt;
      observation: RealProcessObservation | null;
      facts: null;
    }
  | {
      ok: true;
      status: "failed" | "timeout";
      attempt: ExecutionAttempt;
      observation: RealProcessObservation | null;
      facts: BoundedLaunchObservationFacts | null;
    }
  | { ok: false; code: string; message: string };

function capBytes(value: string, cap: number): string {
  if (value.length <= cap) return value;
  return value.slice(0, cap);
}

function resultRefForAttempt(attemptId: string): string {
  const segment = attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
  const ref = `res:m4:${segment}`.slice(0, 128);
  return ref;
}

function hasAwaitCompletion(
  port: unknown,
): port is { awaitCompletion: (processRef: string) => Promise<RealProcessObservation | null> } {
  return (
    !!port &&
    typeof port === "object" &&
    typeof (port as { awaitCompletion?: unknown }).awaitCompletion ===
      "function"
  );
}

export function toNoraObservationFacts(input: {
  attemptId: string;
  observation: RealProcessObservation;
  technicalResultRef: string | null;
}): BoundedLaunchObservationFacts {
  return {
    attemptId: input.attemptId,
    processRef: input.observation.processRef,
    exitCode: input.observation.exitCode,
    timedOut: input.observation.timedOut,
    durationMs: input.observation.durationMs,
    realProcessInvoked: input.observation.realProcessInvoked,
    technicalResultRef: input.technicalResultRef,
    stdout: capBytes(input.observation.stdout ?? "", NORA_STDOUT_CAP),
    stderr: capBytes(input.observation.stderr ?? "", NORA_STDERR_CAP),
  };
}

export async function completeBoundedReadOnlyLaunch(input: {
  attempt: ExecutionAttempt;
  services: ExecutionAttemptServices;
  /**
   * When true and the process is still live after spawn-ACK, await terminal
   * observation instead of returning status "running". Default false preserves
   * async continuation (T-R3-PENDING / T-R3-ASYNC-CONTINUATION).
   */
  awaitIfPending?: boolean;
}): Promise<CompleteBoundedReadOnlyLaunchResult> {
  const realBoundary = input.services.realBoundary;
  if (!realBoundary) {
    return {
      ok: false,
      code: "REAL_BOUNDARY_REQUIRED",
      message:
        "Completion REAL refusée — realBoundary absent (fail-closed, pas de fallback fixture).",
    };
  }

  const frontiers = await realBoundary.safetyJournal.findFrontierByAttempt(
    input.attempt.attemptId,
  );
  const launched = frontiers.find(
    (row) =>
      row.kind === "LAUNCHED" &&
      typeof row.processRef === "string" &&
      row.processRef.trim().length > 0,
  );
  if (!launched?.processRef) {
    return {
      ok: false,
      code: "REAL_LAUNCH_FRONTIER_REQUIRED",
      message:
        "Frontier LAUNCHED / processRef absent — fail-closed, pas de fallback fixture.",
    };
  }
  if (launched.attemptId !== input.attempt.attemptId) {
    return {
      ok: false,
      code: "REAL_LAUNCH_FRONTIER_MISMATCH",
      message: "Frontier LAUNCHED / Attempt mismatch — fail-closed.",
    };
  }

  if (!hasAwaitCompletion(realBoundary.launchPort)) {
    return {
      ok: false,
      code: "REAL_AWAIT_COMPLETION_REQUIRED",
      message:
        "Launch port sans awaitCompletion — fail-closed, pas de resultRef inventé.",
    };
  }

  let observation: RealProcessObservation | null = null;
  if (typeof realBoundary.launchPort.observe === "function") {
    observation = await realBoundary.launchPort.observe(launched.processRef);
  }
  const pendingObservation =
    observation !== null &&
    observation.realProcessInvoked === true &&
    observation.timedOut !== true &&
    observation.exitCode === null;
  if (pendingObservation) {
    if (input.awaitIfPending === true) {
      // Opt-in for REAL harness / callers that want a single await-to-terminal.
      observation = await realBoundary.launchPort.awaitCompletion(
        launched.processRef,
      );
    } else {
      return {
        ok: true,
        status: "running",
        attempt: input.attempt,
        observation,
        facts: null,
      };
    }
  }

  if (!observation) {
    observation = await realBoundary.launchPort.awaitCompletion(
      launched.processRef,
    );
  }
  if (!observation) {
    return {
      ok: false,
      code: "REAL_COMPLETION_OBSERVATION_REQUIRED",
      message: "Observation de completion nulle — fail-closed.",
    };
  }
  if (observation.processRef !== launched.processRef) {
    return {
      ok: false,
      code: "REAL_COMPLETION_PROCESS_MISMATCH",
      message: "processRef observation ≠ frontier — fail-closed.",
    };
  }

  if (
    observation.timedOut !== true &&
    observation.exitCode === null &&
    observation.realProcessInvoked === true
  ) {
    return {
      ok: true,
      status: "running",
      attempt: input.attempt,
      observation,
      facts: null,
    };
  }

  if (observation.timedOut === true) {
    const timed = await input.services.triggerAttemptTimeout.execute({
      attemptId: input.attempt.attemptId,
      autoSafety: true,
      expectedAttemptVersion: input.attempt.version,
    });
    if (!timed.ok || !timed.attempt) {
      const failed = await input.services.recordExecutionFailure.execute({
        attemptId: input.attempt.attemptId,
        adapterId: M4_REAL_GATEWAY_ADAPTER_ID,
        stopReason: "EXECUTION_TIMEOUT",
        durationMs: observation.durationMs,
        expectedAttemptVersion: input.attempt.version,
      });
      if (!failed.ok || !failed.attempt) {
        return {
          ok: false,
          code: timed.ok ? "REAL_TIMEOUT_RECORD_FAILED" : timed.error.detailCode,
          message:
            timed.ok
              ? "Timeout Cursor observé mais Attempt non terminalisé."
              : timed.error.message,
        };
      }
      return {
        ok: true,
        status: "timeout",
        attempt: failed.attempt,
        observation,
        facts: toNoraObservationFacts({
          attemptId: input.attempt.attemptId,
          observation,
          technicalResultRef: null,
        }),
      };
    }
    return {
      ok: true,
      status: "timeout",
      attempt: timed.attempt,
      observation,
      facts: toNoraObservationFacts({
        attemptId: input.attempt.attemptId,
        observation,
        technicalResultRef: null,
      }),
    };
  }

  const success =
    observation.realProcessInvoked === true &&
    observation.timedOut === false &&
    observation.exitCode === 0;

  if (!success) {
    const failed = await input.services.recordExecutionFailure.execute({
      attemptId: input.attempt.attemptId,
      adapterId: M4_REAL_GATEWAY_ADAPTER_ID,
      stopReason: "REAL_PROCESS_NONZERO_EXIT",
      technicalExitCode: observation.exitCode ?? undefined,
      durationMs: observation.durationMs,
      expectedAttemptVersion: input.attempt.version,
    });
    if (!failed.ok || !failed.attempt) {
      return {
        ok: false,
        code: failed.ok ? "REAL_FAILURE_RECORD_FAILED" : failed.error.detailCode,
        message: failed.ok
          ? "Échec Cursor observé mais Attempt non terminalisé."
          : failed.error.message,
      };
    }
    return {
      ok: true,
      status: "failed",
      attempt: failed.attempt,
      observation,
      facts: toNoraObservationFacts({
        attemptId: input.attempt.attemptId,
        observation,
        technicalResultRef: null,
      }),
    };
  }

  const resultRef = resultRefForAttempt(input.attempt.attemptId);
  const recorded = await input.services.recordExecutionResult.execute({
    attemptId: input.attempt.attemptId,
    adapterId: M4_REAL_GATEWAY_ADAPTER_ID,
    resultRef,
    technicalExitCode: 0,
    durationMs: observation.durationMs,
    expectedAttemptVersion: input.attempt.version,
  });
  if (!recorded.ok || !recorded.attempt) {
    return {
      ok: false,
      code: recorded.ok
        ? "REAL_RESULT_RECORD_FAILED"
        : recorded.error.detailCode,
      message: recorded.ok
        ? "RecordExecutionResult n'a pas terminalisé l'Attempt."
        : recorded.error.message,
    };
  }
  if (recorded.attempt.status !== "succeeded" || !recorded.attempt.resultRef) {
    return {
      ok: false,
      code: "REAL_RESULT_NOT_SUCCEEDED",
      message:
        "Attempt post-RecordExecutionResult n'est pas succeeded+resultRef.",
    };
  }

  return {
    ok: true,
    status: "succeeded",
    attempt: recorded.attempt,
    observation,
    facts: toNoraObservationFacts({
      attemptId: recorded.attempt.attemptId,
      observation,
      technicalResultRef: recorded.attempt.resultRef,
    }),
  };
}
```

### FULL: `projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts` (MODIFIED)

```typescript
/**
 * CR-GCEC-04 / D-GCEC-11 / CR-GCEC-14 — complete bounded docs-write launch.
 * Awaits observation, independently verifies workspace file effects (no stdout trust).
 */
import {
  type ExecutionAttempt,
  type ExecutionAttemptServices,
  type RealProcessObservation,
  parseCursorExecutionReport,
  type CursorExecutionReport,
  verifyWorkspaceFileEffects,
} from "@/lib/oa/execution-attempt";
import {
  NodeLocalGitStatusDiffPort,
  type LocalGitStatusDiffPort,
} from "@/lib/oa/git-ports";
import {
  completeBoundedReadOnlyLaunch,
  type CompleteBoundedReadOnlyLaunchResult,
} from "./completeBoundedReadOnlyLaunch";

export type DocsWriteCompletionFacts = {
  attemptId: string;
  processRef: string;
  targetPath: string;
  digest: string;
  touchedFiles: string[];
  worktreeRef: string | null;
  stdout: string;
  /** Cursor claim report when present — never trusted alone. */
  cursorReport?: CursorExecutionReport;
};

export type CompleteBoundedDocsWriteLaunchResult =
  | {
      ok: true;
      status: "succeeded";
      attempt: ExecutionAttempt;
      observation: RealProcessObservation;
      facts: DocsWriteCompletionFacts;
    }
  | Extract<
      CompleteBoundedReadOnlyLaunchResult,
      { ok: true; status: "running" | "failed" | "timeout" } | { ok: false }
    >;

function tryParseReportFromStdout(stdout: string): CursorExecutionReport | null {
  const marker = "CURSOR_EXECUTION_REPORT_JSON=";
  const idx = stdout.indexOf(marker);
  if (idx < 0) return null;
  const json = stdout.slice(idx + marker.length).trim().split("\n")[0] ?? "";
  try {
    const parsed = parseCursorExecutionReport(JSON.parse(json));
    return parsed.ok ? parsed.report : null;
  } catch {
    return null;
  }
}

export async function completeBoundedDocsWriteLaunch(input: {
  attempt: ExecutionAttempt;
  services: ExecutionAttemptServices;
  /** Expected relative target path (from docsWriteSpec / EC.inputs). */
  targetPath?: string;
  pathAllowlist?: readonly string[];
  /** Independent full-worktree status/diff (CR-GCEC-14). */
  statusDiffPort?: LocalGitStatusDiffPort;
  /** Test-only injectable porcelain when git unavailable. */
  nameStatusText?: string;
  /** See completeBoundedReadOnlyLaunch.awaitIfPending. */
  awaitIfPending?: boolean;
}): Promise<CompleteBoundedDocsWriteLaunchResult> {
  const base = await completeBoundedReadOnlyLaunch({
    attempt: input.attempt,
    services: input.services,
    awaitIfPending: input.awaitIfPending,
  });
  if (!base.ok) return base;
  if (base.status !== "succeeded") {
    return base as CompleteBoundedDocsWriteLaunchResult;
  }

  const stdout = base.observation.stdout ?? "";
  const cursorReport = tryParseReportFromStdout(stdout);
  const targetPath =
    input.targetPath?.trim() ||
    cursorReport?.fileEffects?.created[0] ||
    cursorReport?.fileEffects?.modified[0] ||
    "docs/functional-design.md";
  const worktreeRef = base.observation.worktreeRef ?? null;
  const pathAllowlist =
    input.pathAllowlist ??
    (targetPath.startsWith("docs/") ? ["docs/"] : [targetPath]);

  if (!worktreeRef) {
    return {
      ok: false,
      code: "DOCS_WRITE_WORKTREE_MISSING",
      message: "Docs-write completion missing worktree for independent verify.",
    };
  }

  const statusDiffPort =
    input.statusDiffPort ??
    (input.nameStatusText ? undefined : new NodeLocalGitStatusDiffPort());

  const verified = await verifyWorkspaceFileEffects({
    worktreePath: worktreeRef,
    pathAllowlist,
    targetPath,
    report: cursorReport,
    ...(statusDiffPort ? { statusDiffPort } : {}),
    ...(input.nameStatusText ? { nameStatusText: input.nameStatusText } : {}),
  });

  if (!verified.ok) {
    return {
      ok: false,
      code: "DOCS_WRITE_WORKSPACE_VERIFY_FAILED",
      message: verified.reason,
    };
  }

  return {
    ok: true,
    status: "succeeded",
    attempt: base.attempt,
    observation: base.observation,
    facts: {
      attemptId: input.attempt.attemptId,
      processRef: base.observation.processRef,
      targetPath: verified.targetPath,
      digest: verified.digest,
      touchedFiles: verified.touchedFiles,
      worktreeRef,
      stdout: base.facts?.stdout ?? stdout,
      ...(cursorReport ? { cursorReport } : {}),
    },
  };
}
```

### FULL: `projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealDocsWrite.real.d0.test.ts` (CREATED)

```typescript
/**
 * GCEC-CURSOR-REAL — bounded REAL Cursor docs-write proof.
 *
 * NEVER runs in ordinary vitest suites.
 * Requires BOTH:
 *   SFIA_STUDIO_CURSOR_REAL=1
 *   SFIA_GCEC_CURSOR_REAL_PROOF=1
 * Plus env:
 *   SFIA_GCEC_MANAGED_REPO_BASE=/path/to/managed/base
 *   (clone at {base}/mcleland147__sfia-gcec-proof-task-manager @ BASE_SHA)
 *
 * Outer harness MUST NOT create docs/functional-design.md — only runtime Cursor.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { Confirmation } from "@/lib/oa/decision";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  ManagedProjectRepositoryResolver,
  sanitizeManagedRepoIdentity,
} from "@/lib/oa/execution-attempt";
import { NodeLocalGitStatusDiffPort } from "@/lib/oa/git-ports";
import { F3_CONFIRM_ACTION_REF } from "@/features/project-assistant/f3/constants";
import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import { completeBoundedDocsWriteLaunch } from "@/features/project-assistant/f3/completeBoundedDocsWriteLaunch";
import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import { FakeConversationProvider } from "@/lib/platform/ai";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
} from "@/lib/vertical-slice-runtime";
import {
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  prepareCandidateTrajectoryFromCurrentRecommendation,
  prepareCycleFromValidatedTrajectory,
  startPreparedTrajectoryCycle,
  materializeLifecycleRecommendationFromStructuredOutput,
  resolveTrajectoryBootstrapPresence,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import {
  approveCandidateTrajectory,
  buildPreCycleCandidateApprovalPresentation,
} from "@/features/project-assistant/approveCandidateTrajectory";

const ENABLED =
  process.env.SFIA_STUDIO_CURSOR_REAL === "1" &&
  process.env.SFIA_GCEC_CURSOR_REAL_PROOF === "1";

const APP_ROOT = path.resolve(__dirname, "../../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const IDENTITY = "mcleland147/sfia-gcec-proof-task-manager";
const BASE_SHA = "32c7c2008197e5c61b32c16479144e9863291358";
const TARGET_PATH = "docs/functional-design.md";
const BRANCH = "main";
const NOW = "2026-09-11T17:00:00.000Z";
const PILOTE = LOCAL_PILOTE_ACTOR;

const SIGNALS_LIGHT = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
} as const;

const ARTIFACT_BRIEF =
  "Functional design for a simple personal task manager (Gestion de tâches). Actor: single end user. Business object: Task.";

const CONTENT_REQUIREMENTS = [
  "Task fields: identifier, mandatory title, optional description, status, optional due date",
  "Statuses: TODO, IN_PROGRESS, DONE",
  "Flows: create task, list tasks, filter by status, edit task, change status",
  "Rules: blank title refused; status must be in defined set; due date optional",
  "Acceptance criteria: observable/testable for the flows above",
  "OUT OF SCOPE: authentication, multi-user, notifications, architecture, DB, API, framework, pixel UX",
];

const temps: string[] = [];

afterEach(() => {
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
  for (const t of temps.splice(0)) {
    try {
      fs.rmSync(t, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }
});

beforeEach(() => {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
});

function tempDir(prefix: string): string {
  const d = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  temps.push(d);
  return d;
}

function git(cwd: string, args: string[]): string {
  return execFileSync("git", args, {
    cwd,
    encoding: "utf8",
    shell: false,
  }).trim();
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:gcec-real-${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:gcec-real-${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:gcec-real-${this.prefix}-${this.n}`;
  }
}

function requireAuth(
  auth: ReturnType<typeof registerLocalPiloteAuthority>,
): string {
  if (!auth.ok) throw new Error(`auth: ${auth.code}`);
  return auth.evidenceId;
}

describe.skipIf(!ENABLED)("gcecCursorRealDocsWrite — REAL Product path", () => {
  it(
    "ONE StartExecution REAL Cursor creates docs/functional-design.md only",
    async () => {
      const managedBase = process.env.SFIA_GCEC_MANAGED_REPO_BASE?.trim();
      expect(managedBase, "SFIA_GCEC_MANAGED_REPO_BASE required").toBeTruthy();
      const sanitized = sanitizeManagedRepoIdentity(IDENTITY);
      const cloneRoot = path.join(managedBase!, sanitized);
      expect(fs.existsSync(path.join(cloneRoot, ".git"))).toBe(true);
      expect(git(cloneRoot, ["rev-parse", "HEAD"])).toBe(BASE_SHA);
      expect(fs.existsSync(path.join(cloneRoot, TARGET_PATH))).toBe(false);
      const resolved =
        new ManagedProjectRepositoryResolver().resolveLocalRepoRoot(
          { identity: IDENTITY },
          managedBase!,
        );
      expect(resolved).toBe(cloneRoot);
      // Must never target sfia-workspace
      expect(cloneRoot.includes("sfia-product-proof")).toBe(false);
      expect(cloneRoot.includes("sfia-workspace")).toBe(false);

      const root = tempDir("sfia-gcec-real-");
      const execRoot = path.join(root, "m4-worktrees");
      const safetyJournalPath = path.join(root, "m4", "launch-safety.sqlite");
      fs.mkdirSync(execRoot, { recursive: true });
      fs.mkdirSync(path.dirname(safetyJournalPath), { recursive: true });

      const runtime = getRuntimeApplicationService({
        registryRoot: REGISTRY_ROOT,
        schemasRoot: SCHEMAS_ROOT,
        nowIso: NOW,
        idSource: new FixedIdSource("docs"),
        auditMode: "noop",
        productDbPath: path.join(root, "oa.sqlite"),
        realBoundaryEnv: {
          ...process.env,
          SFIA_STUDIO_CURSOR_REAL: "1",
        },
        realBoundaryComposition: {
          managedRepoRootBase: managedBase!,
          execRoot,
          safetyJournalPath,
          // Ambient RO root must not be used for docs-write; still set away from Product.
          repoRoot: cloneRoot,
          studioRoot: path.resolve(APP_ROOT, ".."),
        },
      });
      const oa = runtime.oa!;
      expect(oa.executionAttemptServices.realBoundary).toBeTruthy();
      expect(
        oa.executionAttemptServices.realBoundary?.managedRepoRootBase,
      ).toBe(path.resolve(managedBase!));

      const created = await runtime.createProject({
        name: "Gestion de tâches",
        objective: "GCEC Cursor REAL docs-write proof",
        context: "proof-vehicle",
        criticality: "STANDARD",
        constraints: ["BOUNDED REAL DOCS-WRITE ONLY"],
        shortReference: "GCECREAL",
        idempotencyKey: "idem:gcec-cursor-real",
      });
      expect(created.ok).toBe(true);
      if (!created.ok) throw new Error("createProject failed");
      const projectId = created.project.projectId;

      const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
        projectId,
        actor: PILOTE,
        binding: {
          provider: "github",
          identity: IDENTITY,
          remoteUrl: `https://github.com/${IDENTITY}.git`,
          defaultBranch: BRANCH,
          pathRoot: "docs",
          baseSha: BASE_SHA,
        },
      });
      expect(bound.ok).toBe(true);

      const cycles0 = await oa.cycleServices.cycles.listByProject(projectId);
      const decisions0 = await oa.decisionServices.decisions.listByProject(
        projectId,
      );
      const lpsBoot =
        await oa.projectServices.getCurrentLivingProjectState.execute({
          projectId,
        });
      if (!lpsBoot.ok) throw new Error("lps");
      const presence = await resolveTrajectoryBootstrapPresence(
        oa.cycleServices.trajectories,
        projectId,
      );
      const projectBoot = await oa.projectServices.getProject.execute({
        projectId,
      });
      if (!projectBoot.ok || !projectBoot.project.doctrinePackageRef) {
        throw new Error("doctrine pin missing");
      }
      const pin = projectBoot.project.doctrinePackageRef;

      const mat = await materializeLifecycleRecommendationFromStructuredOutput({
        projectId,
        structuredOutput: {
          narrative: "Next cycle: Conception fonctionnelle.",
          preCycleRoutingAssessment: {
            ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
          },
          lifecycleRecommendation: {
            intent: "NEXT_CYCLE" as const,
            statement: "Conception fonctionnelle task manager.",
            subjectCycleInstanceId: null,
            targetCycleInstanceId: null,
            targetCycleTypeId: "cyc:functional-design",
            rationale: "GCEC-CURSOR-REAL",
            authority: "none" as const,
            isHumanDecision: false as const,
            qualificationSignals: { ...SIGNALS_LIGHT },
          },
        },
        updateEpistemicState: oa.cycleServices.updateEpistemicState,
        facts: {
          cycles: cycles0,
          lpsActiveCycleInstanceId:
            lpsBoot.livingProjectState.activeCycleInstanceId,
          lpsVersion: lpsBoot.livingProjectState.version,
          doctrinePackageId: pin.doctrinePackageId,
          doctrinePackageVersion: pin.version,
          doctrinePackageDigest: pin.digest,
          trajectory: null,
          trajectoryBootstrapPresence: presence,
          decisions: decisions0,
          evidence: [],
          epistemicItems: await oa.cycleServices.epistemic.listByProject(
            projectId,
          ),
        },
        producedAt: NOW,
        createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
      });
      expect(mat.materialization?.ok).toBe(true);

      const bridgeDeps = {
        trajectories: oa.cycleServices.trajectories,
        createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
        updateEpistemicState: oa.cycleServices.updateEpistemicState,
        runInTransaction: ((fn: () => Promise<unknown>) =>
          oa.projectServices.store.runInTransaction(fn)) as <T>(
          fn: () => Promise<T>,
        ) => Promise<T>,
        listEpistemicByProject: (pid: string) =>
          oa.cycleServices.epistemic.listByProject(pid),
        listCyclesByProject: (pid: string) =>
          oa.cycleServices.cycles.listByProject(pid),
        listDecisionsByProject: (pid: string) =>
          oa.decisionServices.decisions.listByProject(pid),
        listEvidenceByProject: (pid: string) =>
          oa.evidenceReviewServices.repository.listByProject(pid),
        getCurrentLps: (pid: string) =>
          oa.projectServices.getCurrentLivingProjectState.execute({
            projectId: pid,
          }),
        getProjectDoctrinePin: async (pid: string) => {
          const p = await oa.projectServices.getProject.execute({
            projectId: pid,
          });
          if (!p.ok) return null;
          const d = p.project.doctrinePackageRef;
          return d
            ? {
                doctrinePackageId: d.doctrinePackageId,
                version: d.version,
                digest: d.digest,
              }
            : null;
        },
        newTrajectoryId: () => `trj:gcec-real-${projectId}`,
        newStepId: () => `stp:fd-real`,
        newProvenanceObservationId: () => `epi:gcec-real-trj`,
        correlationId: `cor:gcec-real-bridge`,
      };

      const candidatePrepared =
        await prepareCandidateTrajectoryFromCurrentRecommendation({
          projectId,
          deps: bridgeDeps,
        });
      expect(candidatePrepared.ok).toBe(true);
      if (!candidatePrepared.ok) throw new Error(String(candidatePrepared));

      const presentation = await buildPreCycleCandidateApprovalPresentation({
        oa,
        projectId,
      });
      expect(presentation.ok && presentation.presentation).toBeTruthy();
      if (!presentation.ok || !presentation.presentation) {
        throw new Error("presentation");
      }
      const approved = await approveCandidateTrajectory({
        oa,
        projectId,
        presentationDigest: presentation.presentation.presentationDigest,
        forceLocalAuthority: true,
      });
      expect(approved.ok).toBe(true);
      if (!approved.ok) throw new Error(String(approved));

      const prep = await prepareCycleFromValidatedTrajectory({ oa, projectId });
      expect(prep.ok).toBe(true);
      if (!prep.ok) throw new Error(prep.code);
      const startedCycle = await startPreparedTrajectoryCycle({
        oa,
        projectId,
        cycleInstanceId: prep.cycle.cycleInstanceId,
        forceLocalAuthority: true,
      });
      expect(startedCycle.ok).toBe(true);
      if (!startedCycle.ok) throw new Error(startedCycle.code);
      const cycleInstanceId = startedCycle.cycle.cycleInstanceId;

      const overview = await runtime.getProject(projectId);
      expect(overview.ok).toBe(true);
      if (!overview.ok) throw new Error("overview");
      const provider = new FakeConversationProvider();
      const analyzed = await analyzeIntent({
        userContent:
          "__F2_DOCS_WRITE_GCEC__ produce functional design for personal task manager",
        projectSummary: overview.project.name ?? "Gestion de tâches",
        provider,
      });
      const snapshot = {
        projectId,
        lpsId: overview.livingState.id,
        lpsVersion: overview.livingState.version,
        doctrineDigest: overview.doctrine.digest,
        activeCycleInstanceId: cycleInstanceId,
        ckcResolutionRef: null as string | null,
      };
      const ei = analyzed.analysis.executionIntent;
      const proposal = saveProposal({
        proposalId: createProposalId(),
        status: "DECISION_REQUIRED",
        rephrasedRequest:
          analyzed.analysis.rephrasedRequest ?? "docs write task manager",
        objective:
          analyzed.analysis.objective ?? "Functional design task manager",
        cycleTypeId:
          analyzed.analysis.candidateCycleTypeId ?? "cyc:functional-design",
        recommendedProfile: "Standard",
        rationale: "GCEC-CURSOR-REAL",
        scope: "docs/functional-design.md uniquement",
        outOfScope: analyzed.analysis.outOfScope,
        activatedBlocks: analyzed.analysis.activatedBlocks,
        expectedOutcome: "docs/functional-design.md",
        sources: [],
        risks: analyzed.analysis.risks,
        reservations: analyzed.analysis.reservations,
        stopConditions: analyzed.analysis.stopConditions,
        morrisGateRequired: true,
        nextPossibleStep: "F3 PREPARE",
        contextSnapshot: snapshot,
        processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
        executionForbidden: true,
        noExecutingStatus: true,
        agentBinding: "NOT_AVAILABLE",
        requestedOperation: "cursor.docs_write.apply",
        executionIntent: {
          ...(ei && typeof ei === "object" ? ei : {}),
          intentKind: "docs_write",
          artifactType: "functional_design",
          targetRepositoryRef: IDENTITY,
          targetPath: TARGET_PATH,
          scopeIn: ["docs/"],
          scopeOut: ["src/", ".github/", "README.md"],
          expectedOutputs: [TARGET_PATH],
          requiredCapabilities: ["cap:cursor.docs_write"],
          validationExpectations: ["path_allowlist", "no_delete"],
          evidenceRequirements: [
            "git:local_commit",
            "git:remote_push",
            "git:pull_request",
            "git:ci_status",
            "git:review_status",
            "git:merge",
            "git:post_merge_verification",
          ],
          requestedOperation: "cursor.docs_write.apply",
          reversibilityExpectation: "reversible",
          artifactBrief: ARTIFACT_BRIEF,
          contentRequirements: CONTENT_REQUIREMENTS,
        },
      });
      const go = await recordF2Decision({
        proposalId: proposal.proposalId,
        projectId,
        decisionKind: "GO",
        currentContext: snapshot,
        decisionServices: oa.decisionServices,
        authorityResolver: oa.authorityResolver,
        nowIso: () => oa.clock.nowIso(),
        forceM3Authority: true,
      });
      expect(go.ok).toBe(true);
      if (!go.ok) throw new Error("go");
      const decisionId = go.decision.decisionId;

      const overviewAfter = await runtime.getProject(projectId);
      if (!overviewAfter.ok) throw new Error("overviewAfter");
      const prepared = await prepareAndResolveM3ProductPath({
        projectId,
        decisionId,
        currentContext: {
          projectId,
          lpsId: overviewAfter.livingState.id,
          lpsVersion: overviewAfter.livingState.version,
          doctrineDigest: overviewAfter.doctrine.digest,
          activeCycleInstanceId: cycleInstanceId,
        },
        deps: {
          decisionServices: oa.decisionServices,
          authorityResolver: oa.authorityResolver,
          executionContractServices: oa.executionContractServices,
          nowIso: () => oa.clock.nowIso(),
          forceM3Authority: true,
          preferBoundedDocsWriteProfile: true,
          boundedDocsWriteBaseHeadSha: BASE_SHA,
        },
      });
      expect(prepared.ok).toBe(true);
      if (!prepared.ok) throw new Error("prepareM3");
      const durableEc =
        await oa.executionContractServices.getExecutionContract.execute({
          executionContractId: prepared.payload.successor.executionContractId,
        });
      expect(durableEc.ok).toBe(true);
      if (!durableEc.ok) throw new Error("ec missing");
      let contract = durableEc.contract;
      expect(contract.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
      const inputs = (contract.inputs ?? {}) as Record<string, unknown>;
      expect(inputs.repositoryRef ?? inputs.targetRepositoryRef).toBe(IDENTITY);
      expect(inputs.targetPath).toBe(TARGET_PATH);
      expect(inputs.baseHeadSha).toBe(BASE_SHA);

      const execAuth = registerLocalPiloteAuthority({
        authorityResolver: oa.authorityResolver,
        scope: contract.scope,
        issuedAt: NOW,
        evidenceId: `evd:gcec-real-exec:${contract.executionContractId}`,
        forceEnable: true,
      });
      const gateConfirmId = `cfm:gate:${contract.executionContractId}`;
      const requested =
        await oa.decisionServices.requestConfirmation.execute({
          confirmationId: gateConfirmId,
          level: "N3",
          actionRef: F3_CONFIRM_ACTION_REF,
          requestedBy: PILOTE,
          requestedTo: PILOTE,
          scope: contract.scope,
          idempotencyKey: `idem:${gateConfirmId}`,
          decisionRef: decisionId,
        });
      expect(requested.ok).toBe(true);
      const grantedGate =
        await oa.decisionServices.grantConfirmation.execute({
          confirmationId: gateConfirmId,
          actor: PILOTE,
          authorityEvidenceId: requireAuth(execAuth),
        });
      expect(grantedGate.ok).toBe(true);
      const confirmed =
        await oa.executionContractServices.confirmExecutionContract.execute({
          executionContractId: contract.executionContractId,
          confirmationId: gateConfirmId,
          actor: PILOTE,
          authorityEvidenceId: requireAuth(execAuth),
          expectedVersion: contract.version,
        });
      expect(confirmed.ok).toBe(true);
      if (!confirmed.ok) throw new Error("confirm");
      contract = confirmed.contract;

      // Pre-flight: target still absent in clone (outer Cursor must not write)
      expect(fs.existsSync(path.join(cloneRoot, TARGET_PATH))).toBe(false);

      const attemptId = `xat:gcec-real:${contract.executionContractId}`.slice(
        0,
        128,
      );
      const attempts = oa.executionAttemptServices;
      const selected = await attempts.selectExecutionAgent.execute({
        attemptId,
        executionContractId: contract.executionContractId,
        idempotencyKey: `idem:sel:${attemptId}`,
        actor: PILOTE,
        authorityEvidenceId: requireAuth(execAuth),
        expectedContractVersion: contract.version,
        selectionProfile: "standard",
        selectionStrategy: "capabilities_deterministic",
        requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
        systemInitiated: true,
      });
      expect(selected.ok).toBe(true);
      if (!selected.ok) throw new Error(selected.error.message);

      const expiresAt = new Date(Date.parse(NOW) + 60 * 60 * 1000).toISOString();
      const grantId = `gd:gcec-real:${attemptId}`.slice(0, 128);
      const gate = await attempts.grantRealExecutionGate!.execute({
        grantId,
        attemptId,
        actor: PILOTE,
        expiresAt,
        authorityEvidenceId: requireAuth(execAuth),
      });
      expect(gate.ok).toBe(true);
      if (!gate.ok) throw new Error(gate.error.message);

      // ONE REAL StartExecution — no Git Confirmations → FS slice only
      const started = await attempts.startExecution.execute({
        attemptId,
        actor: PILOTE,
        authorityEvidenceId: requireAuth(execAuth),
        confirmations: [] as Confirmation[],
      });
      expect(started.ok).toBe(true);
      if (!started.ok) {
        throw new Error(
          `StartExecution failed: ${started.error.detailCode} ${started.error.internalCauseRef ?? ""} ${started.error.message}`,
        );
      }
      expect(started.attempt.status).toBe("running");
      // REAL spawn-ACK is proven via safety journal LAUNCHED + gateway path
      // (Attempt aggregate may not surface realProcessInvoked as a field).
      const frontiers =
        await attempts.realBoundary!.safetyJournal.findFrontierByAttempt(
          attemptId,
        );
      const launched = frontiers.find(
        (row) =>
          row.kind === "LAUNCHED" &&
          typeof row.processRef === "string" &&
          row.processRef.trim().length > 0,
      );
      expect(launched?.processRef).toBeTruthy();
      expect(String(launched!.processRef)).toMatch(/^(pid:|proc:)/);
      const attemptRunning =
        await attempts.getExecutionAttempt.execute({ attemptId });
      expect(attemptRunning.ok).toBe(true);
      if (!attemptRunning.ok) throw new Error("attempt missing");

      const completed = await completeBoundedDocsWriteLaunch({
        attempt: attemptRunning.attempt,
        services: attempts,
        targetPath: TARGET_PATH,
        pathAllowlist: ["docs/"],
        statusDiffPort: new NodeLocalGitStatusDiffPort(),
        awaitIfPending: true,
      });
      expect(completed.ok).toBe(true);
      if (!completed.ok) {
        throw new Error(`complete failed: ${completed.code} ${completed.message}`);
      }
      expect(completed.status).toBe("succeeded");
      if (completed.status !== "succeeded") throw new Error("not succeeded");

      const worktree = completed.facts.worktreeRef!;
      expect(worktree).toBeTruthy();
      expect(worktree.includes("sfia-product-proof")).toBe(false);
      expect(fs.existsSync(path.join(worktree, TARGET_PATH))).toBe(true);
      const artifactText = fs.readFileSync(
        path.join(worktree, TARGET_PATH),
        "utf8",
      );
      expect(artifactText.trim().length).toBeGreaterThan(80);
      expect(artifactText.toLowerCase()).toMatch(/task|tâche/);
      expect(fs.readFileSync(path.join(worktree, "README.md"), "utf8")).toBe(
        fs.readFileSync(path.join(cloneRoot, "README.md"), "utf8"),
      );
      expect(git(worktree, ["rev-parse", "HEAD"])).toBe(BASE_SHA);
      // No commit in worktree / clone
      expect(git(cloneRoot, ["rev-parse", "HEAD"])).toBe(BASE_SHA);
      expect(git(cloneRoot, ["status", "--porcelain"])).toMatch(/^$/);

      // Outer harness must not have created the artifact in clone root either
      // (worktree is isolated; clone stays clean)
      expect(fs.existsSync(path.join(cloneRoot, TARGET_PATH))).toBe(false);

      const ingested = await ingestDocsWriteArtifactEvidence({
        evidenceReviewServices: oa.evidenceReviewServices,
        projectId,
        cycleInstanceId,
        executionContractId: contract.executionContractId,
        executionAttemptId: attemptId,
        targetPath: TARGET_PATH,
        digest: completed.facts.digest,
        actor: PILOTE,
        nowIso: oa.clock.nowIso(),
      });
      expect(ingested.ok).toBe(true);
      if (!ingested.ok) throw new Error(ingested.code);

      const artLoaded = await oa.evidenceReviewServices.evidenceReader.findById(
        ingested.evidenceId,
      );
      expect(artLoaded).toBeTruthy();
      // Payload script for integrity (same pattern as deterministic E2E)
      const evidenceSvc = oa.evidenceReviewServices as typeof oa.evidenceReviewServices & {
        payload?: {
          setScript?: (
            id: string,
            s: { availability: "available"; digest: string },
          ) => void;
        };
      };
      evidenceSvc.payload?.setScript?.(ingested.evidenceId, {
        availability: "available",
        digest: completed.facts.digest,
      });
      const artVerified =
        await oa.evidenceReviewServices.verifyEvidenceIntegrity.execute({
          evidenceId: ingested.evidenceId,
          expectedVersion: artLoaded!.version,
          actor: PILOTE,
        });
      expect(artVerified.ok).toBe(true);

      const ecAfter =
        await oa.executionContractServices.getExecutionContract.execute({
          executionContractId: contract.executionContractId,
        });
      expect(ecAfter.ok).toBe(true);
      if (!ecAfter.ok) throw new Error("ec after");
      // Git requirements remain → EC must NOT be completed
      expect(ecAfter.contract.status).toBe("confirmed");
      expect(completed.attempt.status).toBe("succeeded");

      const cycleAfter = await oa.cycleServices.cycles.findById(cycleInstanceId);
      expect(cycleAfter?.status).not.toBe("closed");
      expect(cycleAfter?.status).not.toBe("finalized");

      // Persist proof facts for Review Pack (local dirt only)
      const outDir = path.resolve(
        APP_ROOT,
        "../../.tmp-sfia-review/gcec-cursor-real-proof",
      );
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(
        path.join(outDir, "facts.json"),
        JSON.stringify(
          {
            projectId,
            cycleInstanceId,
            executionContractId: contract.executionContractId,
            attemptId,
            grantId,
            processRef: completed.facts.processRef,
            worktreeRef: worktree,
            digest: completed.facts.digest,
            realProcessInvoked: true,
            exitCode: completed.observation.exitCode,
            timedOut: completed.observation.timedOut,
            durationMs: completed.observation.durationMs,
            authorizedEffectsHint: "filesystem only (no git Confirmation)",
            artifactPath: TARGET_PATH,
            artifactBytes: Buffer.byteLength(artifactText, "utf8"),
            workspaceHead: BASE_SHA,
            cloneHead: git(cloneRoot, ["rev-parse", "HEAD"]),
            evidenceId: ingested.evidenceId,
            ecStatus: ecAfter.contract.status,
            cycleStatus: cycleAfter?.status,
            stdoutCap: (completed.observation.stdout ?? "").slice(0, 2000),
            stderrCap: (completed.observation.stderr ?? "").slice(0, 1000),
          },
          null,
          2,
        ),
      );
      fs.writeFileSync(path.join(outDir, "functional-design.md"), artifactText);
    },
    20 * 60 * 1000,
  );
});
```

## HARNESS CRITICAL REGION (journal LAUNCHED + awaitIfPending)

Excerpt from REAL harness after StartExecution (also present in FULL embed above):

```typescript
expect(started.attempt.status).toBe("running");
const frontiers =
  await attempts.realBoundary!.safetyJournal.findFrontierByAttempt(attemptId);
const launched = frontiers.find(
  (row) =>
    row.kind === "LAUNCHED" &&
    typeof row.processRef === "string" &&
    row.processRef.trim().length > 0,
);
expect(launched?.processRef).toBeTruthy();
expect(String(launched!.processRef)).toMatch(/^(pid:|proc:)/);

const completed = await completeBoundedDocsWriteLaunch({
  attempt: attemptRunning.attempt,
  services: attempts,
  targetPath: TARGET_PATH,
  pathAllowlist: ["docs/"],
  statusDiffPort: new NodeLocalGitStatusDiffPort(),
  awaitIfPending: true,
});
```

## RECOMMENDED NEXT (NOT EXECUTED HERE)
After ChatGPT Critical Review PASS of these adaptations:
1. one bounded Morris GO
2. local commit of the four validated files
3. exactly ONE new REAL StartExecution with fixed harness
4. still no push / PR / merge
