# SFIA Review Pack — FULL — Cycle 8 Residual Closure R1/R2/R3

## 1. Timestamp + timezone

- Timestamp: 2026-08-17 10:57:35 CEST
- Timezone: Europe/Paris

## 2. Cycle identity

- Repo: `mcleland147/sfia-workspace`
- Cycle: 8 — Delivery / implémentation — Pre-M6 REAL Product Wiring Amend — **residual closure pass**
- Typologie: INC — continuation bornée fermeture R1/R2/R3
- Profil: Critical
- CKC: aucun CKC détaillé Delivery disponible; routing/méthode v2.6 only. CKC not invented; not an execution authorization.

## 3. GO Morris consumed

`GO — CONTINUE CYCLE 8 DELIVERY AMEND / CLOSE RESIDUAL REAL PRODUCT WIRING / R1 LIVE COMPOSITION / R2 SERVER-SIDE HEAD PIN / R3 COMPLETION → RESULT → EVIDENCE → NORA / ZERO LIVE EXECUTION`

Authorized: local inspection, bounded mutations R1/R2/R3, deterministic tests, typecheck/lint/build/vitest, FULL review pack, L3 handoff publish only.

Not authorized: OpenAI live, Cursor REAL, project commit/push/PR/merge, DB cleanup, M6, UAT, runtime v3 ADOPTED.

## 4. Prior handoff reference

- Parent handoff commit: `05718206b5d832626c714c16e16a8b513b13d155`
- Parent handoff closed GAP-1…5; ChatGPT identified blocking residuals R1/R2/R3.

## 5. Git Truth PRE (residual pass start)

```
branch=delivery/sfia-studio-pre-m6-ui-option-a
HEAD=0d33478566627a9bf507d5a06323962d349308ee
origin/main=0d33478566627a9bf507d5a06323962d349308ee
origin/sfia/review-handoff=05718206b5d832626c714c16e16a8b513b13d155
staged=none
candidate=DIRTY (Pre-M6 Option A + GAP-1…5 present)
```

## 6. Git Truth POST (before handoff publish)

```
branch=delivery/sfia-studio-pre-m6-ui-option-a
HEAD=0d33478566627a9bf507d5a06323962d349308ee
origin/main=0d33478566627a9bf507d5a06323962d349308ee
origin/sfia/review-handoff=05718206b5d832626c714c16e16a8b513b13d155
staged=none
dirty candidate preserved — no project commit
```

## 7. Maturity / claims (mandatory)

M1→M5 FUNCTIONAL BACKBONE VALIDATED UNDER DETERMINISTIC QA, WITH SELECTIVE REAL BOUNDARY PROOFS; FULL REAL PRODUCT LOOP NOT YET PROVEN.

Statuses: Pre-M6 NON COMPLETE | G-UX-11 OPEN | UAT NOT READY | M6 NON AUTHORIZED | Runtime v3 NON ADOPTED | FULL REAL PRODUCT LOOP NOT YET PROVEN.

**Authorized verdict this pass:**

PASS — CYCLE 8 DELIVERY AMEND RESIDUAL CLOSURE IMPLEMENTED CANDIDATE / R1/R2/R3 CLOSED UNDER DETERMINISTIC FULL-CHAIN SIMULATION / REAL PRODUCT WIRING COMPLETE UNDER DETERMINISTIC TESTING / LIVE COMPOSITION PRESENT BUT OFF / ZERO REAL EXECUTED / READY FOR NEW FINAL CYCLE 9 DETERMINISTIC QA

**Forbidden claims:** REAL PRODUCT VALIDATED, FULL REAL PRODUCT LOOP PROVEN, READY FOR REAL, READY FOR UAT, PRE-M6 COMPLETE, G-UX-11 CLOSED, M6 AUTHORIZED, runtime v3 ADOPTED.

## 8. Residual closure summary

### R1 — LIVE boundary composition OFF-by-default — CLOSED

- **Implementation:** `composeStudioProductRealBoundary.ts` + wiring in `service.ts` / `createRuntimeApplicationService`.
- **OFF (`SFIA_STUDIO_CURSOR_REAL !== "1"`):** returns `undefined`; no safety DB, worktree, git, Cursor bin search, spawn.
- **ON (future):** composes existing M4 stack only: `StudioCursorRealLaunchGateway`, `NodeCursorProcessRunner`, `StudioGitWorktreeWorkspace`, `NodeGitCommandRunner`, `SqliteRealLaunchSafetyJournal` under `.sfia-exec`.
- **Proof:** T-R1-OFF, T-R1-CONSTRUCT (11/11 residual tests PASS).

### R2 — Server-side baseHeadSha pin — CLOSED

- **Implementation:** `resolveBoundedReadOnlyBaseHeadSha.ts` + integration in `prepareAndResolveM3ProductPath.ts`.
- Client `baseHeadSha`/`workspace`/`adapter`/`command`/`real` ignored (`void`).
- Bounded profile: server resolves `rev-parse --show-toplevel` + `rev-parse HEAD`, validates 40-hex, pins into `ExecutionContract.inputs.baseHeadSha`.
- Fail-closed: `BASE_HEAD_SHA_UNRESOLVED`, `BASE_HEAD_SHA_INVALID`.
- **Proof:** T-R2-HEAD, T-R2-HOSTILE, T-R2-INVALID.

### R3 — Completion bridge Cursor REAL (simulated) — CLOSED

- **Implementation:** `completeBoundedReadOnlyLaunch.ts` + `finishBoundedAttempt()` in `executeConfirmedBoundedReadOnlyContract.ts`.
- Flow: StartExecution ACK → `safetyJournal.findFrontierByAttempt` (LAUNCHED + processRef) → `observe` / `awaitCompletion` → terminal mapping → `RecordExecutionResult` | `RecordExecutionFailure` | `TriggerAttemptTimeout` → `ingestEvidenceAndRecommend` → Evidence/RB → Nora with bounded stdout/stderr (4 KiB) → LPS/rehydrate.
- StartExecution spawn-ACK semantics unchanged.
- **Proof:** T-R3-PENDING, T-R3-NONZERO, T-R3-TIMEOUT, T-R3-NO-AWAIT, T-R3-PROVIDER-FAILURE, **T-R3-E2E-SUCCESS** (single continuous chain).

## 9. T-R3-E2E-SUCCESS continuous chain proof

Simulated REAL chain (temp Product DB, FakeConversationProvider, TestOnlyRealExecutionLaunchPort, MemoryLaunchSafetyJournal, FakeGitCommandRunner):

Project → GO/HumanDecision → prepareAndResolve M3 bounded RO → ExecutionContract with server-pinned baseHeadSha → Confirmation → Gate D → StartExecution → running → simulated completion exitCode 0 → RecordExecutionResult → succeeded → Evidence (`ev:m4-bounded-ro:…`) → ReviewBundle (`rb:m4-bounded-ro:…`) → Fake Nora (stdout `SIMULATED_CURSOR_STDOUT_FOR_NORA` in provider context) → Recommendation (`executionAuthority=false`, `decisionCreated=false`) → LPS → rehydrateEvidenceOutcomeFromLps retrieves durable Evidence/RB/recommendation.

Assertions: launchCallCount=1, fixtureAdapter launch=0, contract=completed, no real Cursor process.

## 10. Validation commands + results

Env: `NODE_ENV=test SFIA_STUDIO_CURSOR_REAL= OPS1_CURSOR_REAL= OPS1_CONVERSATION_PROVIDER=fake OPENAI_API_KEY=`

| Suite | Result |
|-------|--------|
| preM6.realProductWiringResidual.test.ts (11) | PASS |
| preM6.realProductWiringAmend.test.ts (11) | PASS |
| qa-pre-m6-01.finalHardening.test.ts | PASS |
| qa-pre-m6-01.postGoDurableM3Path.test.ts | PASS |
| gux15.resolveM3ExecutionContract.test.ts | PASS |
| f3.fixtureVerticalSlice.test.ts | PASS |
| m5C1C2DisclosureAndRehydrateAction.test.ts | PASS |
| m4SpawnAckLifecycle.test.ts | PASS |
| importBoundaries.test.ts (updated allowlist) | PASS |
| Full vitest (1938 tests) | PASS (1807 run, 0 fail after importBoundaries fix) |
| tsc --noEmit | PASS |
| next lint | PASS |
| next build | PASS |

## 11. ZERO REAL / ZERO canonical DB mutation this pass

- OpenAI live calls: 0
- Cursor REAL / NodeCursorProcessRunner live spawn: 0
- Real git worktree runtime: 0
- `SFIA_STUDIO_CURSOR_REAL` global OFF in all tests
- All new/residual tests use temp Product SQLite (`mkdtempSync`)
- **Canonical Product DB mutation this pass: 0**
- Historical C8 pollution (`prj:c8-t1-1` … `prj:c8-t12-1`) untouched — reserve documented in parent handoff

## 12. Files touched — residual pass only

**Created:**
- `lib/vertical-slice-runtime/composeStudioProductRealBoundary.ts`
- `lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha.ts`
- `features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts`
- `__tests__/project-assistant/preM6.realProductWiringResidual.test.ts`

**Modified:**
- `lib/vertical-slice-runtime/service.ts`, `index.ts`
- `features/project-assistant/f3/prepareAndResolveM3ProductPath.ts`
- `features/project-assistant/f3/executeConfirmedBoundedReadOnlyContract.ts`
- `features/project-assistant/f3/ingestEvidenceAndRecommend.ts`
- `features/project-assistant/f3/postEvidenceNoraAnalysis.ts`
- `features/project-assistant/f3/index.ts`
- `__tests__/oa/execution-attempt/support/testOnlyRealExecutionLaunchPort.ts`
- `__tests__/oa/execution-attempt/support/fakeSpawnAndGit.ts`
- `__tests__/vertical-slice-runtime/importBoundaries.test.ts`

**Not modified:** M4 core infra, doctrine, Roadmap, migrations, UI layout/CSS, OPS1.

## 13. Reserves

- Historical `studio.m4.real_off` scope reserve
- Old C8 Product DB pollution untouched
- Production action path uses default server HEAD resolver when bounded profile selected via env/test flag (no client SHA)
- First REAL still requires distinct Morris GO + `SFIA_STUDIO_CURSOR_REAL=1`

## 14. Verdict

**PASS — CYCLE 8 DELIVERY AMEND RESIDUAL CLOSURE IMPLEMENTED CANDIDATE**

R1/R2/R3 CLOSED UNDER DETERMINISTIC FULL-CHAIN SIMULATION | REAL PRODUCT WIRING COMPLETE UNDER DETERMINISTIC TESTING | LIVE COMPOSITION PRESENT BUT OFF | ZERO REAL EXECUTED | READY FOR NEW FINAL CYCLE 9 DETERMINISTIC QA

## 15. Next capability (NOT executed)

NEW FINAL CYCLE 9 — DETERMINISTIC QA (requires ChatGPT validation of this handoff first).

---

## 16. Cycle-specific PRE→POST diff (complete)

# Cycle 8 residual pass — PRE (handoff 05718206) → POST diff
# Generated: 2026-08-17 10:57:35 CEST


===== NEW FILE projects/sfia-studio/app/lib/vertical-slice-runtime/composeStudioProductRealBoundary.ts =====
/**
 * R1 — product live REAL boundary composition, OFF-by-default.
 *
 * When SFIA_STUDIO_CURSOR_REAL !== "1", returns undefined and constructs
 * nothing (no safety DB, no worktree dir, no Cursor bin search, no git, no process).
 *
 * When the flag is "1", constructs existing M4 classes only. Construction
 * does not launch a process, search the Cursor binary, or run git.
 * Launch remains gated by HumanDecision → Contract → Confirmation →
 * agent selection → Gate D → StartExecution.
 */
import fs from "node:fs";
import path from "node:path";
import {
  isStudioCursorRealEnabled,
  NodeCursorProcessRunner,
  NodeGitCommandRunner,
  SqliteRealLaunchSafetyJournal,
  StudioCursorRealLaunchGateway,
  StudioGitWorktreeWorkspace,
  type GitCommandRunner,
  type ProcessRunner,
  type RealBoundaryWiring,
  type RealExecutionLaunchPort,
  type RealExecutionWorkspacePort,
  type RealLaunchSafetyJournalPort,
} from "@/lib/oa/execution-attempt";

export type ComposeStudioProductRealBoundaryInput = {
  readonly env?: NodeJS.ProcessEnv;
  readonly processRunner?: ProcessRunner;
  readonly workspacePort?: RealExecutionWorkspacePort;
  readonly gitRunner?: GitCommandRunner;
  readonly safetyJournal?: RealLaunchSafetyJournalPort;
  readonly resolveCursorBin?: () => string | null;
  readonly repoRoot?: string;
  readonly studioRoot?: string;
  readonly execRoot?: string;
  readonly safetyJournalPath?: string;
};

export function resolveStudioSfiaExecRoot(studioRoot?: string): string {
  const root = path.resolve(studioRoot ?? path.resolve(process.cwd(), ".."));
  return path.join(root, ".sfia-exec");
}

/**
 * Filesystem-only git toplevel discovery. Does not spawn git.
 */
export function findGitToplevelByDotGit(startDir: string): string | null {
  let dir = path.resolve(startDir);
  for (;;) {
    if (fs.existsSync(path.join(dir, ".git"))) return dir;
    const parent = path.dirname(dir);
    if (parent === dir) return null;
    dir = parent;
  }
}

export function composeStudioProductRealBoundary(
  input: ComposeStudioProductRealBoundaryInput = {},
): RealBoundaryWiring | undefined {
  const env = input.env ?? process.env;
  if (!isStudioCursorRealEnabled(env)) {
    return undefined;
  }

  const studioRoot = path.resolve(
    input.studioRoot ?? path.resolve(process.cwd(), ".."),
  );
  const execBase = resolveStudioSfiaExecRoot(studioRoot);
  const execRoot = path.resolve(
    input.execRoot ?? path.join(execBase, "m4-worktrees"),
  );
  const safetyJournalPath = path.resolve(
    input.safetyJournalPath ??
      path.join(execBase, "m4", "launch-safety.sqlite"),
  );
  const repoRoot = path.resolve(
    input.repoRoot ??
      findGitToplevelByDotGit(process.cwd()) ??
      path.resolve(process.cwd(), "../.."),
  );

  const processRunner = input.processRunner ?? new NodeCursorProcessRunner();
  const gitRunner = input.gitRunner ?? new NodeGitCommandRunner();
  const workspacePort =
    input.workspacePort ??
    new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner,
    });
  const safetyJournal =
    input.safetyJournal ??
    (() => {
      fs.mkdirSync(path.dirname(safetyJournalPath), { recursive: true });
      return new SqliteRealLaunchSafetyJournal({
        databasePath: safetyJournalPath,
      });
    })();
  const launchPort: RealExecutionLaunchPort =
    new StudioCursorRealLaunchGateway({
      processRunner,
      workspacePort,
      env,
      resolveCursorBin: input.resolveCursorBin,
    });

  return Object.freeze({
    launchPort,
    safetyJournal,
  });
}

===== NEW FILE projects/sfia-studio/app/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha.ts =====
/**
 * R2 — server-side Git HEAD pin for bounded read-only ExecutionContract.inputs.
 * Never reads client mode/adapter/command/real/baseHeadSha.
 */
import {
  isFullGitSha,
  NodeGitCommandRunner,
  type GitCommandRunner,
} from "@/lib/oa/execution-attempt";

export type ResolveBoundedReadOnlyBaseHeadShaInput = {
  readonly gitRunner?: GitCommandRunner;
  readonly startDir?: string;
};

export type ResolveBoundedReadOnlyBaseHeadShaResult =
  | { ok: true; sha: string; repoRoot: string }
  | { ok: false; code: "BASE_HEAD_SHA_UNRESOLVED" | "BASE_HEAD_SHA_INVALID"; message: string };

export async function resolveBoundedReadOnlyBaseHeadSha(
  input: ResolveBoundedReadOnlyBaseHeadShaInput = {},
): Promise<ResolveBoundedReadOnlyBaseHeadShaResult> {
  const gitRunner = input.gitRunner ?? new NodeGitCommandRunner();
  const startDir = input.startDir ?? process.cwd();

  const toplevel = await gitRunner.run(
    ["rev-parse", "--show-toplevel"],
    startDir,
  );
  if (toplevel.exitCode !== 0) {
    return {
      ok: false,
      code: "BASE_HEAD_SHA_UNRESOLVED",
      message:
        "Impossible de résoudre le dépôt Git borné (rev-parse --show-toplevel).",
    };
  }
  const repoRoot = toplevel.stdout.trim();
  if (!repoRoot) {
    return {
      ok: false,
      code: "BASE_HEAD_SHA_UNRESOLVED",
      message: "Racine Git bornée vide — fail-closed.",
    };
  }

  const head = await gitRunner.run(["rev-parse", "HEAD"], repoRoot);
  if (head.exitCode !== 0) {
    return {
      ok: false,
      code: "BASE_HEAD_SHA_UNRESOLVED",
      message: "Impossible de résoudre HEAD du dépôt borné.",
    };
  }
  const sha = head.stdout.trim().toLowerCase();
  if (!isFullGitSha(sha)) {
    return {
      ok: false,
      code: "BASE_HEAD_SHA_INVALID",
      message: "HEAD du dépôt borné n'est pas un SHA Git 40-hex.",
    };
  }
  return { ok: true, sha, repoRoot };
}

export function validateBaseHeadSha(
  value: unknown,
): string | null {
  if (typeof value !== "string") return null;
  const sha = value.trim().toLowerCase();
  return isFullGitSha(sha) ? sha : null;
}

===== NEW FILE projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts =====
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
    return {
      ok: true,
      status: "running",
      attempt: input.attempt,
      observation,
      facts: null,
    };
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
    const startedMs = Date.parse(input.attempt.startedAt ?? "") || Date.now();
    const timed = await input.services.triggerAttemptTimeout.execute({
      attemptId: input.attempt.attemptId,
      autoSafety: true,
      nowIso: new Date(startedMs + 31 * 60 * 1000).toISOString(),
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

===== NEW FILE projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringResidual.test.ts =====
/**
 * Cycle 8 residual closure — R1/R2/R3 deterministic simulation.
 * ZERO OpenAI live. ZERO Cursor REAL process.
 * @vitest-environment node
 */
import path from "node:path";
import os from "node:os";
import { mkdtempSync } from "node:fs";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  confirmAndExecuteResolvedM3,
  prepareAndResolveM3ProductPath,
  rehydrateEvidenceOutcomeFromLps,
} from "@/features/project-assistant/f3";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import {
  assertStudioCursorRealOffForTests,
  isStudioCursorRealEnabled,
  M4_REAL_GATEWAY_ADAPTER_ID,
  MemoryLaunchSafetyJournal,
  NodeCursorProcessRunner,
  StudioCursorRealLaunchGateway,
  type RealExecutionLaunchPort,
} from "@/lib/oa/execution-attempt";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  composeStudioProductRealBoundary,
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
} from "@/lib/vertical-slice-runtime";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
  type ProviderChatMessage,
  type ProviderCompletionResult,
} from "@/lib/platform/ai";
import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";
import {
  FakeGitCommandRunner,
  FakeRealExecutionWorkspacePort,
  FakeSpawnPrimitive,
} from "../oa/execution-attempt/support/fakeSpawnAndGit";

const APP_ROOT = path.resolve(__dirname, "../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);
const TEST_BOUNDED_BASE_HEAD_SHA =
  "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";

class FixedIdSource implements LocalProjectIdSource {
  private project = 0;
  private lps = 0;
  private correlation = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.project += 1;
    return `prj:c8r-${this.prefix}-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:c8r-${this.prefix}-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:c8r-${this.prefix}-${this.correlation}`;
  }
}

const testEnv = (overrides: Record<string, string>): NodeJS.ProcessEnv =>
  ({ ...process.env, ...overrides }) as NodeJS.ProcessEnv;

class CapturingFakeProvider extends FakeConversationProvider {
  readonly completeCalls: ProviderChatMessage[][] = [];
  constructor(
    options: ConstructorParameters<typeof FakeConversationProvider>[0] = {},
  ) {
    super(options);
  }
  override async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    this.completeCalls.push(messages.map((m) => ({ ...m })));
    return super.complete(messages);
  }
}

function createRuntime(
  prefix: string,
  options?: {
    realBoundary?: {
      launchPort: TestOnlyRealExecutionLaunchPort;
      safetyJournal: MemoryLaunchSafetyJournal;
    };
    realBoundaryEnv?: NodeJS.ProcessEnv;
    realBoundaryComposition?: Parameters<
      typeof composeStudioProductRealBoundary
    >[0];
  },
): RuntimeApplicationService {
  resetRuntimeApplicationServiceForTests();
  const dir = mkdtempSync(path.join(os.tmpdir(), `sfia-c8r-${prefix}-`));
  return getRuntimeApplicationService({
    registryRoot: REGISTRY_ROOT,
    schemasRoot: SCHEMAS_ROOT,
    nowIso: "2026-08-16T18:00:00.000Z",
    idSource: new FixedIdSource(prefix),
    auditMode: "noop",
    realBoundary: options?.realBoundary,
    realBoundaryEnv: options?.realBoundaryEnv,
    realBoundaryComposition: options?.realBoundaryComposition,
    productDbPath: path.join(dir, "oa-product.sqlite"),
  });
}

async function seedGo(runtime: RuntimeApplicationService, label: string) {
  const created = await runtime.createProject({
    name: `C8R ${label}`,
    objective: "Cycle 8 residual closure",
    context: "ZERO REAL",
    criticality: "STANDARD",
    constraints: ["SIMULATED REAL ONLY"],
    shortReference: "C8RR",
    idempotencyKey: `c8r-${label}-${Date.now()}-${Math.random()}`,
  });
  if (!created.ok) throw new Error("create failed");
  const projectId = created.project.projectId;
  const overview = await runtime.getProject(projectId);
  if (!overview.ok) throw new Error("overview failed");
  const proposalSnapshot = {
    projectId,
    lpsId: overview.livingState.id,
    lpsVersion: overview.livingState.version,
    doctrineDigest: overview.doctrine.digest,
  };
  const proposal = saveProposal({
    proposalId: createProposalId(),
    status: "DECISION_REQUIRED",
    rephrasedRequest: "Residual wiring",
    objective: "R1/R2/R3",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Standard",
    rationale: "residual",
    scope: "wiring",
    outOfScope: ["LIVE REAL"],
    activatedBlocks: ["prepare"],
    expectedOutcome: "closed gaps",
    sources: [],
    risks: [],
    reservations: [],
    stopConditions: ["ZERO LIVE"],
    morrisGateRequired: true,
    nextPossibleStep: "GO",
    contextSnapshot: proposalSnapshot,
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
  });
  const go = await recordF2Decision({
    proposalId: proposal.proposalId,
    projectId,
    decisionKind: "GO",
    currentContext: proposalSnapshot,
    decisionServices: runtime.oa!.decisionServices,
    authorityResolver: runtime.oa!.authorityResolver,
    nowIso: () => runtime.oa!.clock.nowIso(),
    forceM3Authority: true,
  });
  if (!go.ok) throw new Error("go failed");
  const after = await runtime.getProject(projectId);
  if (!after.ok) throw new Error("overview after failed");
  return {
    projectId,
    decisionId: go.decision.decisionId,
    currentContext: {
      projectId,
      lpsId: after.livingState.id,
      lpsVersion: after.livingState.version,
      doctrineDigest: after.doctrine.digest,
    },
  };
}

function prepareDeps(
  runtime: RuntimeApplicationService,
  extra?: {
    preferBoundedReadOnlyProfile?: boolean;
    boundedReadOnlyBaseHeadSha?: string;
    gitCommandRunner?: FakeGitCommandRunner;
    resolveBoundedReadOnlyHead?: () => Promise<string | null> | string | null;
  },
) {
  return {
    decisionServices: runtime.oa!.decisionServices,
    authorityResolver: runtime.oa!.authorityResolver,
    executionContractServices: runtime.oa!.executionContractServices,
    nowIso: () => runtime.oa!.clock.nowIso(),
    forceM3Authority: true,
    preferBoundedReadOnlyProfile: extra?.preferBoundedReadOnlyProfile,
    boundedReadOnlyBaseHeadSha: extra?.boundedReadOnlyBaseHeadSha,
    gitCommandRunner: extra?.gitCommandRunner,
    resolveBoundedReadOnlyHead: extra?.resolveBoundedReadOnlyHead,
  };
}

function confirmDeps(runtime: RuntimeApplicationService) {
  return {
    decisionServices: runtime.oa!.decisionServices,
    authorityResolver: runtime.oa!.authorityResolver,
    executionContractServices: runtime.oa!.executionContractServices,
    executionAttemptServices: runtime.oa!.executionAttemptServices,
    evidenceReviewServices: runtime.oa!.evidenceReviewServices,
    fixtureAdapter: runtime.oa!.fixtureAdapter,
    nowIso: () => runtime.oa!.clock.nowIso(),
    projectServices: runtime.oa!.projectServices,
    productDurablePath: runtime.oa!.productDurablePath,
    forceM3Authority: true,
  };
}

describe("Cycle 8 — Pre-M6 REAL product wiring residual closure", () => {
  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.SFIA_STUDIO_PRODUCT_DB_PATH;
    delete process.env.SFIA_STUDIO_CURSOR_REAL;
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    assertStudioCursorRealOffForTests();
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    assertStudioCursorRealOffForTests();
    expect(isStudioCursorRealEnabled()).toBe(false);
  });

  it("T-R1-OFF — live boundary factory returns undefined when flag OFF", () => {
    expect(
      composeStudioProductRealBoundary({
        env: testEnv({ SFIA_STUDIO_CURSOR_REAL: "0" }),
      }),
    ).toBeUndefined();
    const runtime = createRuntime("r1-off", {
      realBoundaryEnv: testEnv({ SFIA_STUDIO_CURSOR_REAL: "0" }),
    });
    expect(runtime.oa!.executionAttemptServices.realBoundary).toBeUndefined();
    expect(runtime.oa!.executionAttemptServices.grantRealExecutionGate).toBeUndefined();
  });

  it("T-R1-CONSTRUCT — env ON builds existing M4 classes without launch/git/spawn", () => {
    const spawn = new FakeSpawnPrimitive();
    const git = new FakeGitCommandRunner();
    const workspace = new FakeRealExecutionWorkspacePort();
    const journal = new MemoryLaunchSafetyJournal();
    const boundary = composeStudioProductRealBoundary({
      env: testEnv({ SFIA_STUDIO_CURSOR_REAL: "1", HOME: os.tmpdir() }),
      processRunner: new NodeCursorProcessRunner({
        spawnPrimitive: spawn.asSpawnPrimitive(),
      }),
      workspacePort: workspace,
      gitRunner: git,
      safetyJournal: journal,
      resolveCursorBin: () => "/tmp/fake-cursor-bin",
      repoRoot: mkdtempSync(path.join(os.tmpdir(), "sfia-c8r-repo-")),
      execRoot: mkdtempSync(path.join(os.tmpdir(), "sfia-c8r-exec-")),
    });
    expect(boundary).toBeDefined();
    expect(boundary!.launchPort).toBeInstanceOf(StudioCursorRealLaunchGateway);
    expect(spawn.calls.length).toBe(0);
    expect(git.calls.length).toBe(0);
    expect(workspace.prepares.length).toBe(0);
  });

  it("T-R2-HEAD — server fake git HEAD is pinned into ExecutionContract.inputs", async () => {
    const git = new FakeGitCommandRunner({
      baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
    });
    const runtime = createRuntime("r2-head", {
      realBoundary: {
        launchPort: new TestOnlyRealExecutionLaunchPort({ holdCompletion: true }),
        safetyJournal: new MemoryLaunchSafetyJournal(),
      },
    });
    const seeded = await seedGo(runtime, "r2-head");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime, {
        preferBoundedReadOnlyProfile: true,
        gitCommandRunner: git,
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const loaded =
      await runtime.oa!.executionContractServices.getExecutionContract.execute({
        executionContractId: prepared.payload.successor.executionContractId,
      });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(
      (loaded.contract.inputs as { baseHeadSha?: string }).baseHeadSha,
    ).toBe(TEST_BOUNDED_BASE_HEAD_SHA.toLowerCase());
    expect(git.calls.some((c) => c.argv[0] === "rev-parse")).toBe(true);
  });

  it("T-R2-HOSTILE — client baseHeadSha is ignored", async () => {
    const git = new FakeGitCommandRunner({
      baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
    });
    const runtime = createRuntime("r2-hostile");
    const seeded = await seedGo(runtime, "r2-hostile");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      baseHeadSha: "cccccccccccccccccccccccccccccccccccccccc",
      workspace: "/tmp/hostile",
      adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
      deps: prepareDeps(runtime, {
        preferBoundedReadOnlyProfile: true,
        gitCommandRunner: git,
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const loaded =
      await runtime.oa!.executionContractServices.getExecutionContract.execute({
        executionContractId: prepared.payload.successor.executionContractId,
      });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(
      (loaded.contract.inputs as { baseHeadSha?: string }).baseHeadSha,
    ).toBe(TEST_BOUNDED_BASE_HEAD_SHA.toLowerCase());
  });

  it("T-R2-INVALID — invalid server HEAD fails closed before launch", async () => {
    const git = new FakeGitCommandRunner({ baseHeadSha: "not-a-sha" });
    const runtime = createRuntime("r2-invalid", {
      realBoundary: {
        launchPort: new TestOnlyRealExecutionLaunchPort(),
        safetyJournal: new MemoryLaunchSafetyJournal(),
      },
    });
    const seeded = await seedGo(runtime, "r2-invalid");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime, {
        preferBoundedReadOnlyProfile: true,
        gitCommandRunner: git,
      }),
    });
    expect(prepared.ok).toBe(false);
    if (prepared.ok) return;
    expect(prepared.code).toBe("BASE_HEAD_SHA_INVALID");
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
  });

  it("T-R3-PENDING — simulated ACK stays running without Evidence", async () => {
    const launchPort = new TestOnlyRealExecutionLaunchPort({ holdCompletion: true });
    const runtime = createRuntime("r3-pending", {
      realBoundary: { launchPort, safetyJournal: new MemoryLaunchSafetyJournal() },
    });
    const seeded = await seedGo(runtime, "r3-pending");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime, {
        preferBoundedReadOnlyProfile: true,
        gitCommandRunner: new FakeGitCommandRunner({
          baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
        }),
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const executed = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: prepared.payload.successor.executionContractId,
      expectedContractVersion: prepared.payload.successor.version,
      deps: confirmDeps(runtime),
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.payload.attempt.status).toBe("running");
    expect(executed.payload.evidence.evidenceId).toBe("ev:pending-real");
    expect(launchPort.launchCallCount).toBe(1);
  });

  it("T-R3-NONZERO — completion exit != 0 yields terminal failure, no Evidence", async () => {
    const launchPort = new TestOnlyRealExecutionLaunchPort({
      holdCompletion: false,
      completionExitCode: 2,
    });
    const runtime = createRuntime("r3-nonzero", {
      realBoundary: { launchPort, safetyJournal: new MemoryLaunchSafetyJournal() },
    });
    const seeded = await seedGo(runtime, "r3-nonzero");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime, {
        preferBoundedReadOnlyProfile: true,
        gitCommandRunner: new FakeGitCommandRunner({
          baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
        }),
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const executed = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: prepared.payload.successor.executionContractId,
      expectedContractVersion: prepared.payload.successor.version,
      deps: confirmDeps(runtime),
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.payload.attempt.status).toBe("failed");
    expect(executed.payload.evidence.evidenceId).toBe("ev:pending-real");
    expect(executed.payload.recommendation.analysisStatus).toBe("not_attempted");
  });

  it("T-R3-TIMEOUT — timedOut completion yields timeout/failure without Evidence", async () => {
    const launchPort = new TestOnlyRealExecutionLaunchPort({
      holdCompletion: false,
      completionTimedOut: true,
    });
    const runtime = createRuntime("r3-timeout", {
      realBoundary: { launchPort, safetyJournal: new MemoryLaunchSafetyJournal() },
    });
    const seeded = await seedGo(runtime, "r3-timeout");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime, {
        preferBoundedReadOnlyProfile: true,
        gitCommandRunner: new FakeGitCommandRunner({
          baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
        }),
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const executed = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: prepared.payload.successor.executionContractId,
      expectedContractVersion: prepared.payload.successor.version,
      deps: confirmDeps(runtime),
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(["timeout", "failed"]).toContain(executed.payload.attempt.status);
    expect(executed.payload.evidence.evidenceId).toBe("ev:pending-real");
  });

  it("T-R3-NO-AWAIT — launch port without awaitCompletion fails closed", async () => {
    const noAwaitPort: RealExecutionLaunchPort = {
      gatewayId: M4_REAL_GATEWAY_ADAPTER_ID,
      externalEffects: true,
      async launch(request) {
        return {
          outcome: "ack",
          gatewayId: M4_REAL_GATEWAY_ADAPTER_ID,
          attemptId: request.attemptId,
          realProcessInvoked: true,
          processRef: `proc:no-await:${request.attemptId}`,
        };
      },
      async observe() {
        return null;
      },
    };
    const runtime = createRuntime("r3-no-await", {
      realBoundary: {
        launchPort: noAwaitPort as never,
        safetyJournal: new MemoryLaunchSafetyJournal(),
      },
    });
    const seeded = await seedGo(runtime, "r3-no-await");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime, {
        preferBoundedReadOnlyProfile: true,
        gitCommandRunner: new FakeGitCommandRunner({
          baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
        }),
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const executed = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: prepared.payload.successor.executionContractId,
      expectedContractVersion: prepared.payload.successor.version,
      deps: confirmDeps(runtime),
    });
    expect(executed.ok).toBe(false);
    if (executed.ok) return;
    expect(executed.code).toBe("REAL_AWAIT_COMPLETION_REQUIRED");
  });

  it("T-R3-PROVIDER-FAILURE — simulated success keeps Evidence/RB, Nora unavailable", async () => {
    const provider = new CapturingFakeProvider({ failOnCall: 1 });
    setConversationProviderForTests(provider);
    const launchPort = new TestOnlyRealExecutionLaunchPort({
      holdCompletion: false,
      completionExitCode: 0,
      completionStdout: "cursor-readonly-stdout",
    });
    const runtime = createRuntime("r3-provider-fail", {
      realBoundary: { launchPort, safetyJournal: new MemoryLaunchSafetyJournal() },
    });
    const seeded = await seedGo(runtime, "r3-provider-fail");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime, {
        preferBoundedReadOnlyProfile: true,
        gitCommandRunner: new FakeGitCommandRunner({
          baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
        }),
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const executed = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: prepared.payload.successor.executionContractId,
      expectedContractVersion: prepared.payload.successor.version,
      deps: confirmDeps(runtime),
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.payload.attempt.status).toBe("succeeded");
    expect(executed.payload.evidence.evidenceId.startsWith("ev:m4-bounded-ro:")).toBe(
      true,
    );
    expect(executed.payload.recommendation.analysisStatus).toBe("unavailable");
    expect(executed.payload.recommendation.decisionCreated).toBe(false);
  });

  it("T-R3-E2E-SUCCESS — one continuous simulated REAL chain through Nora + rehydrate", async () => {
    const provider = new CapturingFakeProvider({
      scripted: ["[TEST/FAKE] Nora post-Cursor simulated stdout analysis"],
    });
    setConversationProviderForTests(provider);
    const launchPort = new TestOnlyRealExecutionLaunchPort({
      holdCompletion: false,
      completionExitCode: 0,
      completionStdout: "SIMULATED_CURSOR_STDOUT_FOR_NORA",
      completionStderr: "",
    });
    const runtime = createRuntime("r3-e2e", {
      realBoundary: { launchPort, safetyJournal: new MemoryLaunchSafetyJournal() },
    });
    const seeded = await seedGo(runtime, "r3-e2e");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      currentContext: seeded.currentContext,
      deps: prepareDeps(runtime, {
        preferBoundedReadOnlyProfile: true,
        gitCommandRunner: new FakeGitCommandRunner({
          baseHeadSha: TEST_BOUNDED_BASE_HEAD_SHA,
        }),
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;

    const executed = await confirmAndExecuteResolvedM3({
      projectId: seeded.projectId,
      decisionId: seeded.decisionId,
      executionContractId: prepared.payload.successor.executionContractId,
      expectedContractVersion: prepared.payload.successor.version,
      deps: confirmDeps(runtime),
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;

    expect(launchPort.launchCallCount).toBe(1);
    expect(runtime.oa!.fixtureAdapter.launchCallCount).toBe(0);
    expect(executed.payload.attempt.status).toBe("succeeded");
    expect(executed.payload.contract.status).toBe("completed");
    expect(executed.payload.attempt.resultRef).toBeTruthy();
    expect(executed.payload.evidence.evidenceId.startsWith("ev:m4-bounded-ro:")).toBe(
      true,
    );
    expect(executed.payload.reviewBundle.reviewBundleId.startsWith("rb:m4-bounded-ro:")).toBe(
      true,
    );
    expect(provider.completeCalls.length).toBe(1);
    const userPayload = provider.completeCalls[0]?.find((m) => m.role === "user")
      ?.content;
    expect(userPayload).toContain("SIMULATED_CURSOR_STDOUT_FOR_NORA");
    expect(executed.payload.recommendation.executionAuthority).toBe(false);
    expect(executed.payload.recommendation.decisionCreated).toBe(false);
    expect(executed.payload.recommendation.analysisStatus).toBe("available");

    const rehydrated = await rehydrateEvidenceOutcomeFromLps({
      projectId: seeded.projectId,
      deps: {
        projectServices: runtime.oa!.projectServices,
        evidenceReviewServices: runtime.oa!.evidenceReviewServices,
      },
    });
    expect(rehydrated.ok).toBe(true);
    if (!rehydrated.ok) return;
    expect(rehydrated.evidence.map((e) => e.evidenceId)).toContain(
      executed.payload.evidence.evidenceId,
    );
    expect(rehydrated.reviewBundles.map((b) => b.reviewBundleId)).toContain(
      executed.payload.reviewBundle.reviewBundleId,
    );
    expect(rehydrated.recommendation?.analysisText).toContain("Nora post-Cursor");
  });
});

===== DIFF projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts =====
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-real-wiring-amend-r2/pre-cycle/files/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts	2026-08-17 08:57:46
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts	2026-08-17 10:46:11
@@ -41,6 +41,10 @@
   type TestExecutionAdapter,
 } from "@/lib/oa/execution-attempt";
 import {
+  composeStudioProductRealBoundary,
+  type ComposeStudioProductRealBoundaryInput,
+} from "./composeStudioProductRealBoundary";
+import {
   createInMemoryEvidenceReviewServices,
   createSqliteEvidenceReviewServices,
   type EvidenceReviewServices,
@@ -93,12 +97,20 @@
    */
   readonly facade?: LocalProjectFacade;
   /**
-   * Optional M4 REAL boundary. Default undefined / OFF.
-   * Tests inject a fake RealExecutionLaunchPort. Production may inject
-   * StudioCursorRealLaunchGateway later under an explicit GO — this cycle
-   * does not instantiate the live gateway.
+   * Optional M4 REAL boundary. Explicit inject wins (tests).
+   * Otherwise composed OFF-by-default from SFIA_STUDIO_CURSOR_REAL.
    */
   readonly realBoundary?: RealBoundaryWiring;
+  /**
+   * Env snapshot for live-boundary composition only. Never used to spawn.
+   * Tests inject `{ SFIA_STUDIO_CURSOR_REAL: "1" }` with fake deps.
+   */
+  readonly realBoundaryEnv?: NodeJS.ProcessEnv;
+  /**
+   * Test/production overrides for composeStudioProductRealBoundary.
+   * Construction still launches nothing.
+   */
+  readonly realBoundaryComposition?: ComposeStudioProductRealBoundaryInput;
 }

 export type RuntimeOaStack = {
@@ -367,8 +379,14 @@
     productDbPath: options.productDbPath,
   });

+  const composedBoundary =
+    options.realBoundary ??
+    composeStudioProductRealBoundary({
+      ...(options.realBoundaryComposition ?? {}),
+      env: options.realBoundaryEnv ?? options.realBoundaryComposition?.env,
+    });
   const oa = wireOaStack(services.projectServices, services.clock, {
-    realBoundary: options.realBoundary,
+    realBoundary: composedBoundary,
   });
   return new RuntimeApplicationService(
     services.facade,

===== DIFF projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts =====
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-real-wiring-amend-r2/pre-cycle/files/projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts	2026-08-16 18:31:47
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts	2026-08-17 10:51:42
@@ -28,6 +28,16 @@
   type RuntimeOaStack,
 } from "./service";
 export {
+  composeStudioProductRealBoundary,
+  findGitToplevelByDotGit,
+  resolveStudioSfiaExecRoot,
+  type ComposeStudioProductRealBoundaryInput,
+} from "./composeStudioProductRealBoundary";
+export {
+  resolveBoundedReadOnlyBaseHeadSha,
+  validateBaseHeadSha,
+} from "./resolveBoundedReadOnlyBaseHeadSha";
+export {
   readLiveProjectContext,
   type LiveProjectContext,
 } from "./liveProjectContext";

===== DIFF projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts =====
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-real-wiring-amend-r2/pre-cycle/files/projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts	2026-08-17 09:03:52
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts	2026-08-17 10:46:35
@@ -20,6 +20,11 @@
   type ResolveM3Success,
 } from "./resolveM3ExecutionContract";
 import { selectProductM3ResolutionProfile } from "./selectProductM3ResolutionProfile";
+import {
+  resolveBoundedReadOnlyBaseHeadSha,
+  validateBaseHeadSha,
+} from "@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha";
+import type { GitCommandRunner } from "@/lib/oa/execution-attempt";

 export type PrepareAndResolveM3Deps = PrepareM3Deps &
   ResolveM3Deps & {
@@ -30,10 +35,17 @@
     preferBoundedReadOnlyProfile?: boolean;
     /**
      * Server/test only contract-bound workspace pin for the REAL successor.
-     * Never accepted from the client. Required by existing StartExecution
-     * extractContractBaseHeadSha before any launchPort call.
+     * Never accepted from the client. If omitted on the bounded profile,
+     * HEAD is resolved server-side via gitCommandRunner / default resolver.
      */
     boundedReadOnlyBaseHeadSha?: string;
+    /**
+     * Server/test Git HEAD resolver. Never from the client.
+     * Used when boundedReadOnlyBaseHeadSha is not provided.
+     */
+    resolveBoundedReadOnlyHead?: () => Promise<string | null> | string | null;
+    gitCommandRunner?: GitCommandRunner;
+    gitStartDir?: string;
   };

 export type F3M3ResolvedPayload = {
@@ -62,6 +74,8 @@
   agentId?: unknown;
   command?: unknown;
   real?: unknown;
+  baseHeadSha?: unknown;
+  workspace?: unknown;
   deps: PrepareAndResolveM3Deps;
 }): Promise<
   | { ok: true; payload: F3M3ResolvedPayload }
@@ -72,6 +86,8 @@
   void input.agentId;
   void input.command;
   void input.real;
+  void input.baseHeadSha;
+  void input.workspace;

   const prepared = await prepareM3FromDecision({
     projectId: input.projectId,
@@ -86,19 +102,45 @@
   const selected = selectProductM3ResolutionProfile({
     preferBoundedReadOnlyProfile: input.deps.preferBoundedReadOnlyProfile === true,
   });
-  const boundedSha = input.deps.boundedReadOnlyBaseHeadSha?.trim() ?? "";
-  const resolution =
-    selected.kind === "bounded_read_only" &&
-    /^[0-9a-f]{40}$/i.test(boundedSha)
-      ? {
-          ...selected.profile,
-          inputs: {
-            ...(selected.profile.inputs ?? {}),
-            baseHeadSha: boundedSha.toLowerCase(),
-          },
-        }
-      : selected.profile;

+  let resolution = selected.profile;
+  if (selected.kind === "bounded_read_only") {
+    let sha: string | null = null;
+    if (input.deps.boundedReadOnlyBaseHeadSha !== undefined) {
+      sha = validateBaseHeadSha(input.deps.boundedReadOnlyBaseHeadSha);
+    } else if (input.deps.resolveBoundedReadOnlyHead) {
+      sha = validateBaseHeadSha(await input.deps.resolveBoundedReadOnlyHead());
+    } else {
+      const resolved = await resolveBoundedReadOnlyBaseHeadSha({
+        gitRunner: input.deps.gitCommandRunner,
+        startDir: input.deps.gitStartDir,
+      });
+      if (!resolved.ok) {
+        return {
+          ok: false,
+          code: resolved.code,
+          message: resolved.message,
+        };
+      }
+      sha = resolved.sha;
+    }
+    if (!sha) {
+      return {
+        ok: false,
+        code: "BASE_HEAD_SHA_INVALID",
+        message:
+          "baseHeadSha server-side invalide ou absent — fail-closed avant Confirmation / Gate D.",
+      };
+    }
+    resolution = {
+      ...selected.profile,
+      inputs: {
+        ...(selected.profile.inputs ?? {}),
+        baseHeadSha: sha,
+      },
+    };
+  }
+
   const resolved = await resolveM3ExecutionContract({
     projectId: input.projectId,
     decisionId: input.decisionId,

===== DIFF projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedReadOnlyContract.ts =====
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-real-wiring-amend-r2/pre-cycle/files/projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedReadOnlyContract.ts	2026-08-17 08:56:26
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedReadOnlyContract.ts	2026-08-17 10:47:39
@@ -24,8 +24,10 @@
   resolveF3EphemeralNotice,
 } from "./constants";
 import { deriveAttemptProvenance } from "./deriveAttemptProvenance";
+import { completeBoundedReadOnlyLaunch } from "./completeBoundedReadOnlyLaunch";
 import { ingestEvidenceAndRecommend } from "./ingestEvidenceAndRecommend";
 import type { F3ExecutePayload } from "./types";
+import type { BoundedLaunchObservationFacts } from "./completeBoundedReadOnlyLaunch";

 export type BoundedReadOnlyPipelineDeps = {
   decisionServices: DecisionServices;
@@ -186,6 +188,105 @@
   };
 }

+async function finishBoundedAttempt(input: {
+  projectId: string;
+  decisionId: string;
+  proposal: ProposalDto | null;
+  contract: ExecutionContract;
+  attempt: {
+    attemptId: string;
+    status: string;
+    selectedAgentRef: string;
+    resultRef?: string;
+    selectionStrategy?: string;
+    launchedAt?: string;
+    irreversibleEffectsPossible?: boolean;
+    version?: number;
+    startedAt?: string;
+  };
+  launchCount: number;
+  reusedExistingAttempt: boolean;
+  extraDisclosures: readonly string[];
+  productDurablePath: boolean;
+  deps: BoundedReadOnlyPipelineDeps;
+}): Promise<
+  | { ok: true; payload: F3ExecutePayload }
+  | { ok: false; code: string; message: string }
+> {
+  const attempts = input.deps.executionAttemptServices;
+  let attempt = input.attempt;
+  let facts: BoundedLaunchObservationFacts | null = null;
+  const extra = [...input.extraDisclosures];
+
+  if (attempt.status === "running" && !attempt.resultRef) {
+    const completed = await completeBoundedReadOnlyLaunch({
+      attempt: attempt as never,
+      services: attempts,
+    });
+    if (!completed.ok) return completed;
+    attempt = completed.attempt;
+    facts = completed.facts;
+    if (completed.status === "running") {
+      extra.push(
+        "REAL process ACK — completion still pending; no Evidence candidate",
+      );
+    } else if (completed.status === "timeout") {
+      extra.push("REAL process timed out — no Evidence candidate");
+    } else if (completed.status === "failed") {
+      extra.push("REAL process non-zero exit — no Evidence candidate");
+    }
+  }
+
+  const agent = attempts.registry.getAgent(attempt.selectedAgentRef);
+  const provenance = deriveAttemptProvenance({ attempt, agent });
+
+  const refreshed =
+    await input.deps.executionContractServices.getExecutionContract.execute({
+      executionContractId: input.contract.executionContractId,
+    });
+  const contract = refreshed.ok ? refreshed.contract : input.contract;
+
+  let ingested:
+    | Extract<
+        Awaited<ReturnType<typeof ingestEvidenceAndRecommend>>,
+        { ok: true }
+      >
+    | undefined;
+  if (attempt.status === "succeeded" && attempt.resultRef) {
+    const result = await ingestEvidenceAndRecommend({
+      projectId: input.projectId,
+      attemptId: attempt.attemptId,
+      executionContractId: contract.executionContractId,
+      provenance,
+      executionObservation: facts,
+      deps: {
+        evidenceReviewServices: input.deps.evidenceReviewServices,
+        projectServices: input.deps.projectServices,
+        executionAttemptServices: attempts,
+        executionContractServices: input.deps.executionContractServices,
+      },
+    });
+    if (!result.ok) return result;
+    ingested = result;
+  }
+
+  return {
+    ok: true,
+    payload: buildPayload({
+      proposal: input.proposal,
+      decisionId: input.decisionId,
+      contract,
+      attempt,
+      launchCount: input.launchCount,
+      reusedExistingAttempt: input.reusedExistingAttempt,
+      extraDisclosures: extra,
+      productDurablePath: input.productDurablePath,
+      provenance,
+      ingested,
+    }),
+  };
+}
+
 export async function executeConfirmedBoundedReadOnlyContract(input: {
   projectId: string;
   decisionId: string;
@@ -233,48 +334,18 @@
       (a) => a.status === "succeeded" || a.status === "running",
     );
     if (reusable) {
-      const agent = attempts.registry.getAgent(reusable.selectedAgentRef);
-      const provenance = deriveAttemptProvenance({
+      return finishBoundedAttempt({
+        projectId: input.projectId,
+        decisionId: input.decisionId,
+        proposal: input.proposal,
+        contract,
         attempt: reusable,
-        agent,
+        launchCount: launchCallCountOf(realBoundary.launchPort),
+        reusedExistingAttempt: true,
+        extraDisclosures,
+        productDurablePath: productDurable,
+        deps: input.deps,
       });
-      let ingested:
-        | Extract<
-            Awaited<ReturnType<typeof ingestEvidenceAndRecommend>>,
-            { ok: true }
-          >
-        | undefined;
-      if (reusable.status === "succeeded" && reusable.resultRef) {
-        const result = await ingestEvidenceAndRecommend({
-          projectId: input.projectId,
-          attemptId: reusable.attemptId,
-          executionContractId: contract.executionContractId,
-          provenance,
-          deps: {
-            evidenceReviewServices: input.deps.evidenceReviewServices,
-            projectServices: input.deps.projectServices,
-            executionAttemptServices: attempts,
-            executionContractServices: input.deps.executionContractServices,
-          },
-        });
-        if (!result.ok) return result;
-        ingested = result;
-      }
-      return {
-        ok: true,
-        payload: buildPayload({
-          proposal: input.proposal,
-          decisionId: input.decisionId,
-          contract,
-          attempt: reusable,
-          launchCount: launchCallCountOf(realBoundary.launchPort),
-          reusedExistingAttempt: true,
-          extraDisclosures,
-          productDurablePath: productDurable,
-          provenance,
-          ingested,
-        }),
-      };
     }
   }

@@ -404,52 +475,16 @@
     };
   }

-  const attempt = started.attempt;
-  const agent = attempts.registry.getAgent(attempt.selectedAgentRef);
-  const provenance = deriveAttemptProvenance({ attempt, agent });
-
-  const refreshed =
-    await input.deps.executionContractServices.getExecutionContract.execute({
-      executionContractId: contract.executionContractId,
-    });
-  if (refreshed.ok) contract = refreshed.contract;
-
-  let ingested:
-    | Extract<
-        Awaited<ReturnType<typeof ingestEvidenceAndRecommend>>,
-        { ok: true }
-      >
-    | undefined;
-  if (attempt.status === "succeeded" && attempt.resultRef) {
-    const result = await ingestEvidenceAndRecommend({
-      projectId: input.projectId,
-      attemptId: attempt.attemptId,
-      executionContractId: contract.executionContractId,
-      provenance,
-      deps: {
-        evidenceReviewServices: input.deps.evidenceReviewServices,
-        projectServices: input.deps.projectServices,
-        executionAttemptServices: attempts,
-        executionContractServices: input.deps.executionContractServices,
-      },
-    });
-    if (!result.ok) return result;
-    ingested = result;
-  }
-
-  return {
-    ok: true,
-    payload: buildPayload({
-      proposal: input.proposal,
-      decisionId: input.decisionId,
-      contract,
-      attempt,
-      launchCount: launchCallCountOf(realBoundary.launchPort),
-      reusedExistingAttempt: false,
-      extraDisclosures,
-      productDurablePath: productDurable,
-      provenance,
-      ingested,
-    }),
-  };
+  return finishBoundedAttempt({
+    projectId: input.projectId,
+    decisionId: input.decisionId,
+    proposal: input.proposal,
+    contract,
+    attempt: started.attempt,
+    launchCount: launchCallCountOf(realBoundary.launchPort),
+    reusedExistingAttempt: false,
+    extraDisclosures,
+    productDurablePath: productDurable,
+    deps: input.deps,
+  });
 }

===== DIFF projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts =====
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-real-wiring-amend-r2/pre-cycle/files/projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts	2026-08-17 08:54:19
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts	2026-08-17 10:47:54
@@ -106,6 +106,16 @@
   executionContractId: string;
   deps: IngestRecommendDeps;
   provenance?: DerivedAttemptProvenance;
+  executionObservation?: {
+    processRef: string;
+    exitCode: number | null;
+    timedOut: boolean;
+    durationMs: number;
+    realProcessInvoked: boolean;
+    technicalResultRef: string | null;
+    stdout: string;
+    stderr: string;
+  } | null;
 }): Promise<IngestRecommendResult> {
   const provenance = await resolveProvenance({
     attemptId: input.attemptId,
@@ -235,6 +245,12 @@
       ...F3_OPEN_HARD_RESERVATION_REFS,
       "HARD remain OPEN — BLOCKS REAL",
     ],
+    processRef: input.executionObservation?.processRef,
+    exitCode: input.executionObservation?.exitCode,
+    timedOut: input.executionObservation?.timedOut,
+    durationMs: input.executionObservation?.durationMs,
+    stdout: input.executionObservation?.stdout,
+    stderr: input.executionObservation?.stderr,
   });

   const analysisNote = formatPostEvidenceAnalysisForLps(

===== DIFF projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts =====
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-real-wiring-amend-r2/pre-cycle/files/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts	2026-08-17 08:52:25
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts	2026-08-17 10:47:51
@@ -26,6 +26,12 @@
   reviewBundleId: string;
   technicalResultRef: string | null;
   reservations: readonly string[];
+  processRef?: string;
+  exitCode?: number | null;
+  timedOut?: boolean;
+  durationMs?: number;
+  stdout?: string;
+  stderr?: string;
 };

 export type PostEvidenceAnalysisResult =
@@ -67,6 +73,12 @@
     reviewBundleId: facts.reviewBundleId,
     technicalResultRef: facts.technicalResultRef,
     reservations: [...facts.reservations],
+    processRef: facts.processRef,
+    exitCode: facts.exitCode,
+    timedOut: facts.timedOut,
+    durationMs: facts.durationMs,
+    stdout: facts.stdout,
+    stderr: facts.stderr,
   });
 }


===== DIFF projects/sfia-studio/app/features/project-assistant/f3/index.ts =====
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-real-wiring-amend-r2/pre-cycle/files/projects/sfia-studio/app/features/project-assistant/f3/index.ts	2026-08-17 08:58:11
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/features/project-assistant/f3/index.ts	2026-08-17 10:51:42
@@ -45,6 +45,11 @@
   authorizedM3ResolutionKind,
 } from "./selectProductM3ResolutionProfile";
 export { deriveAttemptProvenance, F3_REAL_MODE } from "./deriveAttemptProvenance";
+export { completeBoundedReadOnlyLaunch } from "./completeBoundedReadOnlyLaunch";
+export type {
+  BoundedLaunchObservationFacts,
+  CompleteBoundedReadOnlyLaunchResult,
+} from "./completeBoundedReadOnlyLaunch";
 export { executeConfirmedBoundedReadOnlyContract } from "./executeConfirmedBoundedReadOnlyContract";
 export { prepareAndResolveM3ProductPath } from "./prepareAndResolveM3ProductPath";
 export type {

===== DIFF projects/sfia-studio/app/__tests__/oa/execution-attempt/support/testOnlyRealExecutionLaunchPort.ts =====
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-real-wiring-amend-r2/pre-cycle/files/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/testOnlyRealExecutionLaunchPort.ts	2026-08-14 09:01:57
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/testOnlyRealExecutionLaunchPort.ts	2026-08-17 10:51:17
@@ -18,6 +18,11 @@
    * resolveSimulatedCompletion() — models spawn ACK ≠ process completion.
    */
   readonly holdCompletion?: boolean;
+  /** Terminal exit code used when holdCompletion is false (default 0). */
+  readonly completionExitCode?: number;
+  readonly completionTimedOut?: boolean;
+  readonly completionStdout?: string;
+  readonly completionStderr?: string;
   readonly behavior?:
     | { outcome: "ack"; processRef?: string }
     | {
@@ -51,6 +56,10 @@
     TestOnlyRealExecutionLaunchPortOptions["behavior"]
   >;
   private readonly holdCompletion: boolean;
+  private readonly completionExitCode: number;
+  private readonly completionTimedOut: boolean;
+  private readonly completionStdout: string;
+  private readonly completionStderr: string;
   private readonly observations = new Map<string, RealProcessObservation>();
   private readonly completionResolvers = new Map<
     string,
@@ -66,6 +75,10 @@
     this.gatewayId = options.gatewayId ?? M4_REAL_GATEWAY_ADAPTER_ID;
     this.behavior = options.behavior ?? { outcome: "ack" };
     this.holdCompletion = options.holdCompletion ?? true;
+    this.completionExitCode = options.completionExitCode ?? 0;
+    this.completionTimedOut = options.completionTimedOut ?? false;
+    this.completionStdout = options.completionStdout ?? "";
+    this.completionStderr = options.completionStderr ?? "";
   }

   setBehavior(
@@ -128,11 +141,11 @@
     } else {
       const done: RealProcessObservation = {
         processRef,
-        exitCode: 0,
-        timedOut: false,
-        stdout: "",
-        stderr: "",
-        durationMs: 0,
+        exitCode: this.completionTimedOut ? null : this.completionExitCode,
+        timedOut: this.completionTimedOut,
+        stdout: this.completionStdout,
+        stderr: this.completionStderr,
+        durationMs: 1,
         realProcessInvoked: true,
       };
       this.observations.set(processRef, done);

===== DIFF projects/sfia-studio/app/__tests__/oa/execution-attempt/support/fakeSpawnAndGit.ts =====
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/pre-m6-real-wiring-amend-r2/pre-cycle/files/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/fakeSpawnAndGit.ts	2026-08-14 09:01:40
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/fakeSpawnAndGit.ts	2026-08-17 10:55:40
@@ -159,17 +159,20 @@
   readonly calls: Array<{ argv: readonly string[]; cwd: string }> = [];
   private readonly scripted: GitCommandResult[];
   private headOverride: string | null = null;
+  private repoRootOverride: string | null = null;
   private failOn?: (argv: readonly string[]) => GitCommandResult | null;

   constructor(
     options: {
       baseHeadSha?: string;
+      repoRoot?: string;
       results?: GitCommandResult[];
       failOn?: (argv: readonly string[]) => GitCommandResult | null;
     } = {},
   ) {
     this.scripted = options.results ?? [];
     this.headOverride = options.baseHeadSha ?? null;
+    this.repoRootOverride = options.repoRoot ?? null;
     this.failOn = options.failOn;
   }

@@ -196,6 +199,13 @@
     if (argv[0] === "worktree" && argv[1] === "add") {
       return { stdout: "", stderr: "", exitCode: 0 };
     }
+    if (argv[0] === "rev-parse" && argv[1] === "--show-toplevel") {
+      return {
+        stdout: `${this.repoRootOverride ?? cwd}\n`,
+        stderr: "",
+        exitCode: 0,
+      };
+    }
     if (argv[0] === "rev-parse" && argv[1] === "HEAD") {
       return {
         stdout: `${this.headOverride ?? "0".repeat(40)}\n`,

===== NEW FILE projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts =====
/** @vitest-environment node */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../..");
const RUNTIME_ROOT = path.join(APP_ROOT, "lib/vertical-slice-runtime");

function listSourceFiles(root: string): string[] {
  const files: string[] = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const full = path.join(root, entry.name);
    if (entry.isDirectory()) files.push(...listSourceFiles(full));
    else if (/\.(ts|tsx)$/.test(entry.name)) files.push(full);
  }
  return files;
}

describe("V2-A1 vertical-slice-runtime import boundaries", () => {
  it("keeps the runtime free of UI, fixtures, client storage, and agent imports", () => {
    const forbidden =
      /(?:from|require\()\s*["'](?:react|react-dom|next\/link|next\/navigation|next\/image|@\/app|@\/components|@\/features|@\/lib\/vertical-slice(?:\/|["'])|@\/lib\/harness|@\/lib\/ops1|@\/lib\/agents)|\b(?:sessionStorage|localStorage|document|window)\s*[.(]/;
    const violations = listSourceFiles(RUNTIME_ROOT).flatMap((file) =>
      fs
        .readFileSync(file, "utf8")
        .split("\n")
        .map((line, index) => ({
          file: path.relative(APP_ROOT, file),
          line: index + 1,
          text: line.trim(),
        }))
        .filter((entry) => forbidden.test(entry.text)),
    );
    expect(violations).toEqual([]);
  });

  it("does not import product-persistence stores as business state", () => {
    // Audit may reference BoundedAtomicAuditStore types; forbidding db.ts and
    // treating SQLite as product persistence rehydration.
    const forbidden =
      /@\/lib\/d1\/db|productPersistence\s*:\s*["']SELECTED["']|runReady\s*:\s*true|productReady\s*:\s*true/;
    const violations = listSourceFiles(RUNTIME_ROOT).flatMap((file) =>
      fs
        .readFileSync(file, "utf8")
        .split("\n")
        .map((line, index) => ({
          file: path.relative(APP_ROOT, file),
          line: index + 1,
          text: line.trim(),
        }))
        .filter((entry) => forbidden.test(entry.text)),
    );
    expect(violations).toEqual([]);
  });

  it("allows only the bounded V2 UI runtime entrypoints", () => {
    const uiRoots = [
      path.join(APP_ROOT, "app"),
      path.join(APP_ROOT, "components"),
      path.join(APP_ROOT, "features"),
    ];
    const imports = uiRoots.flatMap((root) =>
      listSourceFiles(root).flatMap((file) =>
        fs
          .readFileSync(file, "utf8")
          .split("\n")
          .map((line, index) => ({
            file: path.relative(APP_ROOT, file),
            line: index + 1,
            text: line.trim(),
          }))
          .filter((entry) => /@\/lib\/vertical-slice-runtime/.test(entry.text)),
      ),
    );

    const allowed = new Set([
      "app/api/e2e/option-a-qa-scenario/route.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
      "features/project-assistant/actions.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/f2/orchestrateF2.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/f3/confirmAndExecuteResolvedM3.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/f3/confirmAndExecuteResolvedM3.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
      "features/project-assistant/f3/prepareAndResolveM3ProductPath.ts:@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha",
      "features/project-assistant/f3/e2eOptionATerminalAttempt.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/f3/e2eOptionATerminalAttempt.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
      "features/pre-m6-product-ui/NewProjectIntentionPage.tsx:@/lib/vertical-slice-runtime/actions",
      "features/pre-m6-product-ui/ProjectWorkspacePage.tsx:@/lib/vertical-slice-runtime/actions",
      "features/pre-m6-product-ui/ProjectsPage.tsx:@/lib/vertical-slice-runtime/actions",
      "features/pre-m6-product-ui/types.ts:@/lib/vertical-slice-runtime/actions",
      "features/studio-projects/LivingProjectStatePanel.tsx:@/lib/vertical-slice-runtime/actions",
      "features/studio-projects/ProjectHistoryPanel.tsx:@/lib/vertical-slice-runtime/actions",
      "features/studio-projects/ProjectPrincipalClient.tsx:@/lib/vertical-slice-runtime/actions",
      "features/studio-projects/StudioProjectsHome.tsx:@/lib/vertical-slice-runtime/actions",
      "features/studio-projects/StudioProjectsHome.tsx:@/lib/vertical-slice-runtime",
      "features/vertical-slice-ui/CreateProjectForm.tsx:@/lib/vertical-slice-runtime/actions",
      "features/vertical-slice-ui/ProjectWorkspaceClient.tsx:@/lib/vertical-slice-runtime/actions",
      "features/vertical-slice-ui/ProjectWorkspaceView.tsx:@/lib/vertical-slice-runtime/actions",
    ]);
    const normalized = imports.map((entry) => {
      const modulePath = entry.text.match(
        /@\/lib\/vertical-slice-runtime(?:\/[^"']+)?/,
      )?.[0];
      return `${entry.file}:${modulePath}`;
    });

    expect(new Set(normalized)).toEqual(allowed);
  });

  it("keeps V2-A2/V2-A3 UI free of core, internal runtime, D1, fixtures, storage, network, and agents", () => {
    const roots = [
      path.join(APP_ROOT, "app/studio"),
      path.join(APP_ROOT, "app/studio/projects/new"),
      path.join(APP_ROOT, "app/studio/projects/[id]"),
      path.join(APP_ROOT, "features/vertical-slice-ui"),
      path.join(APP_ROOT, "features/studio-projects"),
    ];
    const forbidden =
      /@\/lib\/(?:vertical-slice-core|vertical-slice-runtime\/(?:service|singleton|mapping|paths|serverGuard|index)|d1|harness|ops1|agents)|@\/features\/d1|@\/fixtures|\b(?:sessionStorage|localStorage|fetch)\s*[.(]/;
    const violations = roots.flatMap((root) =>
      listSourceFiles(root).flatMap((file) =>
        fs
          .readFileSync(file, "utf8")
          .split("\n")
          .map((line, index) => ({
            file: path.relative(APP_ROOT, file),
            line: index + 1,
            text: line.trim(),
          }))
          .filter((entry) => forbidden.test(entry.text)),
      ),
    );
    expect(violations).toEqual([]);
  });

  it("keeps V1 core free of runtime dependency (one-way reuse)", () => {
    const coreRoot = path.join(APP_ROOT, "lib/vertical-slice-core");
    const violations = listSourceFiles(coreRoot).flatMap((file) =>
      fs
        .readFileSync(file, "utf8")
        .split("\n")
        .map((line, index) => ({
          file: path.relative(APP_ROOT, file),
          line: index + 1,
          text: line.trim(),
        }))
        .filter((entry) =>
          /@\/lib\/vertical-slice-runtime/.test(entry.text),
        ),
    );
    expect(violations).toEqual([]);
  });
});
