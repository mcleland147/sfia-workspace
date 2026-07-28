# ChatGPT Review Pack — FULL

## Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-28 21:20:35 CEST (+0200) |
| **Niveau** | FULL |
| **Gate** | `GO DECIDE T-A7 OPENING — SELECT O3 … KEEP B5 R1 R-M01 AND HARD OPEN` |
| **O3** | `DECIDED — ADOPTED BY MORRIS` |
| **T-A7** | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` |
| **Repo/Worktree/Branche** | `mcleland147/sfia-workspace` · `/Users/morris/Projects/sfia-workspace-t-a7-technical-readiness` · `framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness` |
| **HEAD initial** | `014103777ef620cfd1ca2520455d7e98a85530e3` |
| **HEAD lot1** | `47e26fdc851b82588aa5225aca84307543147160` |
| **Parent** | `014103777ef620cfd1ca2520455d7e98a85530e3` |
| **Tree** | `bdacf821197265b8ba2221d2158293b59855b7ae` |
| **Commit** | `feat(sfia-studio): implement T-A7 bounded readiness foundations` |
| **Push/PR** | **aucun** |
| **Tests** | 93 passed · typecheck OK |
| **F03.3** | `PARTIALLY SATISFIED — IMPLEMENTATION BLOCKERS REDUCED` |
| **Gate candidat** | `GO REVIEW T-A7 FIRST BOUNDED DEVELOPMENT LOT — ASSESS PR READINESS … — NO DELIVERY OR CUTOVER` (`NOT CONSUMED`) |

## Truth check
PASSED

## Plan de modification

| Surface | Fichiers | Modif | Tests | Risque | Rollback |
|---------|----------|-------|-------|--------|----------|
| Hold | `lib/d1/methodModeHold.ts` + `commands.ts` | gate transition | hold + foundation | med | revert |
| F11.2 | `lib/d1/operationalReadiness.ts` | query RO | readiness tests | low | revert |
| F13.4 | `lib/platform/t-a7/boundedHistoryRead.ts` | provider RO | history tests | low | revert |
| Docs | pack + `10` | O3 record | n/a | low | revert |

Interdits respectés : method/** · migrations · UI · HTTP · IAM · OPS1 fonctionnel.

## Blobs (extrait)

```
100644 blob c9fe3a373e156378500481235a91d1fff0288073	projects/sfia-studio/app/lib/d1/methodModeHold.ts
100644 blob 1ae8deac7792a78db3e9745c24b21cd7666e24f4	projects/sfia-studio/app/lib/d1/operationalReadiness.ts
100644 blob 2be059afa57d18b117c5cbd8d9148a7dad06344d	projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts
100644 blob d984dddc682997f0f715e4c5cab791b28004ce1b	projects/sfia-studio/app/lib/platform/t-a7/index.ts
100644 blob b166753969dc0439a12acb501b03038464d7cbc5	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/10-t-a7-first-bounded-development-lot.md
100644 blob e37be90ff99e6cdf0c6e4c3ea4e03ec2a3bee083	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
```

## Contenu complet — code fondations
### `projects/sfia-studio/app/lib/d1/methodModeHold.ts`

```typescript
/**
 * T-A7 Lot 1 — MethodMode hold (evaluation-only, no schema migration).
 * Default: ACTIVE while structural blockers remain open.
 * TEST/DIAGNOSTIC overrides are test-only and must not ship as product IAM.
 */

import { D1Error } from "./errors";
import { logD1 } from "./observability";

export const METHOD_MODE_HOLD_REASON_CODES = [
  "B5_OPEN",
  "R1_OPEN",
  "R_M01_OPEN",
  "HARD_OPEN",
  "T_A7_BOUNDED_LOT_ACTIVE",
  "F11_2_INCOMPLETE",
  "F13_4_INCOMPLETE",
] as const;

export type MethodModeHoldReasonCode =
  (typeof METHOD_MODE_HOLD_REASON_CODES)[number];

export interface MethodModeHoldReason {
  code: MethodModeHoldReasonCode;
  detail: string;
}

export interface MethodModeHoldState {
  active: boolean;
  reasons: readonly MethodModeHoldReason[];
  evaluatedAt: string;
  provenance: "governance-default" | "test-override";
  completeness: "BOUNDED_LOT_1";
}

export interface MethodModeTransitionDecision {
  allowed: boolean;
  hold: MethodModeHoldState;
  decision: "ALLOW" | "BLOCK";
  authorization: "NOT_AUTHORIZED_WHEN_HOLD_ACTIVE" | "ALLOWED_WHEN_HOLD_INACTIVE";
}

const DEFAULT_REASONS: readonly MethodModeHoldReason[] = [
  {
    code: "B5_OPEN",
    detail: "B5 remains OPEN — STOP BEFORE DELIVERY.",
  },
  {
    code: "R1_OPEN",
    detail: "R1 atomicity reserve remains OPEN.",
  },
  {
    code: "R_M01_OPEN",
    detail: "R-M01 ClaimEvaluator readiness remains OPEN.",
  },
  {
    code: "HARD_OPEN",
    detail: "HARD blockers remain OPEN HARD.",
  },
  {
    code: "T_A7_BOUNDED_LOT_ACTIVE",
    detail: "T-A7 OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY.",
  },
  {
    code: "F11_2_INCOMPLETE",
    detail: "F11.2 readiness foundation is incomplete vs cutover.",
  },
  {
    code: "F13_4_INCOMPLETE",
    detail: "F13.4 read-only foundation is incomplete vs final runtime view.",
  },
] as const;

let testOverride: MethodModeHoldState | null = null;

function nowIso(): string {
  return new Date().toISOString();
}

export function getDefaultMethodModeHoldState(
  evaluatedAt = nowIso(),
): MethodModeHoldState {
  return {
    active: true,
    reasons: DEFAULT_REASONS,
    evaluatedAt,
    provenance: "governance-default",
    completeness: "BOUNDED_LOT_1",
  };
}

export function readMethodModeHold(
  evaluatedAt = nowIso(),
): MethodModeHoldState {
  if (testOverride) {
    return {
      ...testOverride,
      evaluatedAt,
      reasons: [...testOverride.reasons],
    };
  }
  return getDefaultMethodModeHoldState(evaluatedAt);
}

export function decideMethodModeTransition(): MethodModeTransitionDecision {
  const hold = readMethodModeHold();
  if (hold.active && hold.reasons.length > 0) {
    return {
      allowed: false,
      hold,
      decision: "BLOCK",
      authorization: "NOT_AUTHORIZED_WHEN_HOLD_ACTIVE",
    };
  }
  return {
    allowed: true,
    hold,
    decision: "ALLOW",
    authorization: "ALLOWED_WHEN_HOLD_INACTIVE",
  };
}

export function assertMethodModeTransitionAllowed(): MethodModeTransitionDecision {
  const decision = decideMethodModeTransition();
  if (!decision.allowed) {
    const codes = decision.hold.reasons.map((r) => r.code).join(",");
    logD1("method_mode_hold_blocked", {
      status: "blocked",
      reasonCount: decision.hold.reasons.length,
      codes,
    });
    throw new D1Error(
      "CONFLICT",
      `MethodMode transition blocked by active hold (${codes}).`,
    );
  }
  logD1("method_mode_hold_allowed", {
    status: "allowed",
    provenance: decision.hold.provenance,
  });
  return decision;
}

/** TEST ONLY — restore default conservative hold. */
export function resetMethodModeHoldForTests(): void {
  testOverride = null;
}

/** TEST ONLY — override hold state (e.g. inactive for legacy foundation tests). */
export function setMethodModeHoldForTests(
  state: Omit<MethodModeHoldState, "evaluatedAt" | "provenance" | "completeness"> &
    Partial<
      Pick<MethodModeHoldState, "evaluatedAt" | "provenance" | "completeness">
    >,
): void {
  testOverride = {
    active: state.active,
    reasons: Object.freeze([...state.reasons]),
    evaluatedAt: state.evaluatedAt ?? nowIso(),
    provenance: state.provenance ?? "test-override",
    completeness: state.completeness ?? "BOUNDED_LOT_1",
  };
}
```

### `projects/sfia-studio/app/lib/d1/operationalReadiness.ts`

```typescript
/**
 * T-A7 Lot 1 — F11.2 minimal operational readiness (read-only, no UI, no HTTP required).
 * Assembles observed state; never mutates MethodMode or history.
 */

import {
  decideMethodModeTransition,
  readMethodModeHold,
  type MethodModeHoldState,
  type MethodModeTransitionDecision,
} from "@/lib/d1/methodModeHold";
import {
  defaultBoundedHistoryProvider,
  type BoundedHistoryAvailability,
  type BoundedHistoryPage,
  type BoundedHistoryProvider,
} from "@/lib/platform/t-a7/boundedHistoryRead";
import {
  METHOD_MODES,
  type MethodMode,
  type D1Project,
} from "@/lib/d1/types";
import { SFIA_CANONICAL_CORE_PATHS } from "@/lib/platform/sfia-context/canonicalPaths";

export type ReadinessUnknown = "UNKNOWN";

export interface OperationalReadinessLegacyDeps {
  readonly methodModesAuthorized: readonly MethodMode[];
  readonly canonicalCorePaths: readonly string[];
  readonly methodCorePathCount: number;
  readonly note: string;
}

export interface OperationalReadinessMigrationStatus {
  readonly status: "NOT_STARTED" | ReadinessUnknown;
  readonly detail: string;
}

export interface OperationalReadinessHealth {
  readonly status: "SIMULATED" | ReadinessUnknown;
  readonly detail: string;
}

export interface OperationalReadinessHistorySummary {
  readonly availability: BoundedHistoryAvailability | ReadinessUnknown;
  readonly returned: number;
  readonly gitCanonical: true;
  readonly completeness: "BOUNDED_LOT_1";
}

export interface OperationalReadinessSnapshot {
  readonly schemaVersion: "t-a7-f11.2-lot1";
  readonly evaluatedAt: string;
  readonly timezoneNote: "timestamps are ISO-8601 UTC (Z)";
  readonly completeness: "BOUNDED_LOT_1";
  readonly observed: {
    readonly projectId: string | null;
    readonly methodMode: MethodMode | null;
    readonly projectState: D1Project["state"] | null;
    readonly hold: MethodModeHoldState;
    readonly legacyDependencies: OperationalReadinessLegacyDeps;
    readonly migration: OperationalReadinessMigrationStatus;
    readonly health: OperationalReadinessHealth;
    readonly history: OperationalReadinessHistorySummary;
    readonly openBlockers: readonly string[];
  };
  readonly decision: MethodModeTransitionDecision["decision"];
  readonly recommendation: "KEEP_HOLD" | "NO_RECOMMENDATION";
  readonly authorization: MethodModeTransitionDecision["authorization"];
  readonly mutable: false;
  readonly adminUi: false;
  readonly writeCommands: false;
}

export interface OperationalReadinessQueryInput {
  readonly project?: D1Project | null;
  readonly historyProvider?: BoundedHistoryProvider;
  readonly historyLimit?: number;
}

function summarizeHistory(page: BoundedHistoryPage): OperationalReadinessHistorySummary {
  return {
    availability: page.availability,
    returned: page.returned,
    gitCanonical: true,
    completeness: "BOUNDED_LOT_1",
  };
}

export function queryOperationalReadiness(
  input: OperationalReadinessQueryInput = {},
): OperationalReadinessSnapshot {
  const hold = readMethodModeHold();
  const transition = decideMethodModeTransition();
  const historyProvider = input.historyProvider ?? defaultBoundedHistoryProvider;
  const historyPage = historyProvider.read({
    limit: input.historyLimit ?? 10,
  });
  const project = input.project ?? null;
  const methodCores = SFIA_CANONICAL_CORE_PATHS.filter((p) =>
    p.startsWith("method/"),
  );

  const snapshot: OperationalReadinessSnapshot = {
    schemaVersion: "t-a7-f11.2-lot1",
    evaluatedAt: new Date().toISOString(),
    timezoneNote: "timestamps are ISO-8601 UTC (Z)",
    completeness: "BOUNDED_LOT_1",
    observed: {
      projectId: project?.projectId ?? null,
      methodMode: project?.methodMode ?? null,
      projectState: project?.state ?? null,
      hold,
      legacyDependencies: {
        methodModesAuthorized: METHOD_MODES,
        canonicalCorePaths: [...SFIA_CANONICAL_CORE_PATHS],
        methodCorePathCount: methodCores.length,
        note: "Observed allowlisted dependencies only; not a removal plan.",
      },
      migration: {
        status: "NOT_STARTED",
        detail: "No migration authorized in T-A7 lot 1.",
      },
      health: {
        status: "SIMULATED",
        detail: "No production readiness probe; simulated/local observation only.",
      },
      history: summarizeHistory(historyPage),
      openBlockers: hold.reasons.map((r) => r.code),
    },
    decision: transition.decision,
    recommendation: transition.allowed ? "NO_RECOMMENDATION" : "KEEP_HOLD",
    authorization: transition.authorization,
    mutable: false,
    adminUi: false,
    writeCommands: false,
  };

  return Object.freeze({
    ...snapshot,
    observed: Object.freeze({
      ...snapshot.observed,
      hold: Object.freeze({
        ...snapshot.observed.hold,
        reasons: Object.freeze([...snapshot.observed.hold.reasons]),
      }),
      legacyDependencies: Object.freeze({
        ...snapshot.observed.legacyDependencies,
        methodModesAuthorized: Object.freeze([
          ...snapshot.observed.legacyDependencies.methodModesAuthorized,
        ]),
        canonicalCorePaths: Object.freeze([
          ...snapshot.observed.legacyDependencies.canonicalCorePaths,
        ]),
      }),
      migration: Object.freeze({ ...snapshot.observed.migration }),
      health: Object.freeze({ ...snapshot.observed.health }),
      history: Object.freeze({ ...snapshot.observed.history }),
      openBlockers: Object.freeze([...snapshot.observed.openBlockers]),
    }),
  });
}

/** Contract guard: readiness snapshot exposes no write surface. */
export function assertOperationalReadinessReadOnly(
  snapshot: OperationalReadinessSnapshot,
): void {
  if (
    snapshot.mutable !== false ||
    snapshot.adminUi !== false ||
    snapshot.writeCommands !== false
  ) {
    throw new Error("Operational readiness snapshot must remain read-only.");
  }
}
```

### `projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts`

```typescript
/**
 * T-A7 Lot 1 — F13.4 bounded read-only history foundation.
 * Git remains canonical. No migration, no durable store, no UI, no ACL/IAM.
 */

export const BOUNDED_HISTORY_MAX_ITEMS = 50 as const;

export type BoundedHistoryAvailability =
  | "PARTIAL"
  | "NOT_AVAILABLE"
  | "EMPTY";

export type BoundedHistoryEntryStatus = "HISTORICAL" | "ACTIVE_REFERENCE";

export interface BoundedHistoryEntry {
  readonly id: string;
  readonly category: string;
  readonly status: BoundedHistoryEntryStatus;
  readonly occurredAt: string;
  readonly gitProvenance: {
    readonly kind: "git-ref" | "documentary-pack" | "synthetic-fixture";
    readonly ref: string;
  };
  readonly metadata: Readonly<Record<string, string>>;
}

export interface BoundedHistoryPage {
  readonly availability: BoundedHistoryAvailability;
  readonly items: readonly BoundedHistoryEntry[];
  readonly limit: number;
  readonly returned: number;
  readonly truncated: boolean;
  readonly gitCanonical: true;
  readonly mutable: false;
  readonly evaluatedAt: string;
  readonly completeness: "BOUNDED_LOT_1";
  readonly note: string;
}

export interface BoundedHistoryReadRequest {
  readonly limit?: number;
}

export class BoundedHistoryMutationError extends Error {
  readonly code = "MUTATION_FORBIDDEN" as const;
  constructor(message = "F13.4 bounded history is read-only; mutation refused.") {
    super(message);
    this.name = "BoundedHistoryMutationError";
  }
}

export interface BoundedHistoryProvider {
  readonly read: (request?: BoundedHistoryReadRequest) => BoundedHistoryPage;
}

function freezeEntry(entry: BoundedHistoryEntry): BoundedHistoryEntry {
  return Object.freeze({
    ...entry,
    gitProvenance: Object.freeze({ ...entry.gitProvenance }),
    metadata: Object.freeze({ ...entry.metadata }),
  });
}

function freezePage(page: BoundedHistoryPage): BoundedHistoryPage {
  return Object.freeze({
    ...page,
    items: Object.freeze(page.items.map(freezeEntry)),
  });
}

/** Documentary/Git references known from T-A7 packs — not a full archive. */
const DOCUMENTARY_SEED: readonly BoundedHistoryEntry[] = Object.freeze([
  freezeEntry({
    id: "hist-t-a7-f03-f11-f13",
    category: "decision-pack",
    status: "HISTORICAL",
    occurredAt: "2026-07-28T17:54:21.000Z",
    gitProvenance: {
      kind: "git-ref",
      ref: "dad6e00344ad5750cd352db3af33c150c780491b",
    },
    metadata: {
      pack: "t-a7-f03-f11-f13-documentary-arbitration",
      pr: "285",
    },
  }),
  freezeEntry({
    id: "hist-t-a7-readme-post-merge",
    category: "decision-pack",
    status: "HISTORICAL",
    occurredAt: "2026-07-28T18:17:54.000Z",
    gitProvenance: {
      kind: "git-ref",
      ref: "2a3c59c46c105bae458d1a7329079c5f591da421",
    },
    metadata: {
      pack: "t-a7-f03-f11-f13-documentary-arbitration",
      pr: "286",
    },
  }),
  freezeEntry({
    id: "hist-t-a7-technical-readiness",
    category: "readiness-pack",
    status: "ACTIVE_REFERENCE",
    occurredAt: "2026-07-28T18:40:10.000Z",
    gitProvenance: {
      kind: "documentary-pack",
      ref: "projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/",
    },
    metadata: {
      lot: "bounded-technical-preparation-o2",
    },
  }),
]);

export function createDocumentaryBoundedHistoryProvider(
  seed: readonly BoundedHistoryEntry[] = DOCUMENTARY_SEED,
): BoundedHistoryProvider {
  const frozenSeed = Object.freeze(seed.map(freezeEntry));
  return {
    read(request: BoundedHistoryReadRequest = {}): BoundedHistoryPage {
      const rawLimit = request.limit ?? BOUNDED_HISTORY_MAX_ITEMS;
      if (!Number.isFinite(rawLimit) || rawLimit <= 0) {
        throw new RangeError("limit must be a positive number");
      }
      const limit = Math.min(Math.floor(rawLimit), BOUNDED_HISTORY_MAX_ITEMS);
      const slice = frozenSeed.slice(0, limit);
      return freezePage({
        availability: frozenSeed.length === 0 ? "EMPTY" : "PARTIAL",
        items: slice,
        limit,
        returned: slice.length,
        truncated: frozenSeed.length > slice.length,
        gitCanonical: true,
        mutable: false,
        evaluatedAt: new Date().toISOString(),
        completeness: "BOUNDED_LOT_1",
        note: "Git remains canonical. This page is a bounded documentary/metadata view only.",
      });
    },
  };
}

export function createUnavailableBoundedHistoryProvider(): BoundedHistoryProvider {
  return {
    read(request: BoundedHistoryReadRequest = {}): BoundedHistoryPage {
      const rawLimit = request.limit ?? BOUNDED_HISTORY_MAX_ITEMS;
      const limit = Math.min(
        Math.max(1, Math.floor(Number.isFinite(rawLimit) ? rawLimit : 1)),
        BOUNDED_HISTORY_MAX_ITEMS,
      );
      return freezePage({
        availability: "NOT_AVAILABLE",
        items: [],
        limit,
        returned: 0,
        truncated: false,
        gitCanonical: true,
        mutable: false,
        evaluatedAt: new Date().toISOString(),
        completeness: "BOUNDED_LOT_1",
        note: "Bounded history provider unavailable; Git remains canonical.",
      });
    },
  };
}

/** Refuse mutation attempts against a frozen page (contract guard). */
export function assertBoundedHistoryImmutable(page: BoundedHistoryPage): void {
  if (page.mutable !== false || page.gitCanonical !== true) {
    throw new BoundedHistoryMutationError(
      "Bounded history page must declare mutable=false and gitCanonical=true.",
    );
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (page as any).items = [];
    throw new BoundedHistoryMutationError(
      "Bounded history page was mutable unexpectedly.",
    );
  } catch (error) {
    if (error instanceof BoundedHistoryMutationError) throw error;
    // TypeError from frozen object — expected
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (page.items as any).push({});
    throw new BoundedHistoryMutationError(
      "Bounded history items array was mutable unexpectedly.",
    );
  } catch (error) {
    if (error instanceof BoundedHistoryMutationError) throw error;
  }
}

export const defaultBoundedHistoryProvider =
  createDocumentaryBoundedHistoryProvider();
```

### `projects/sfia-studio/app/lib/platform/t-a7/index.ts`

```typescript
/** Platform T-A7 bounded foundations (lot 1). */
export * from "./boundedHistoryRead";
```

### `projects/sfia-studio/app/lib/d1/commands.ts`

```typescript
import { D1ProjectRepository } from "./repository";
import { openD1Db, nowIso, resetD1DbForTests } from "./db";
import { createAuditEventId, createCorrelationId, createProjectId } from "./ids";
import { validateCreateProjectInput, assertMethodMode } from "./domain";
import { requireMonoOperator } from "./authz";
import { D1Error } from "./errors";
import {
  D1_DEFAULT_WORKSPACE_ID,
  D1_MONO_OPERATOR_ACTOR_ID,
  type CreateProjectInput,
  type D1Project,
  type SelectMethodModeInput,
} from "./types";
import { logD1 } from "./observability";
import { assertMethodModeTransitionAllowed } from "./methodModeHold";

export { resetD1DbForTests };

export interface CreateProjectResult {
  project: D1Project;
  idempotent: boolean;
}

export function createProject(
  input: CreateProjectInput,
  repo = new D1ProjectRepository(openD1Db()),
): CreateProjectResult {
  const started = Date.now();
  try {
    validateCreateProjectInput(input);
    const actorId = requireMonoOperator();

    const cached = repo.getIdempotentResponse(input.idempotencyKey.trim());
    if (cached) {
      const parsed = JSON.parse(cached) as { project: D1Project };
      logD1("project_create", {
        status: "idempotent",
        projectId: parsed.project.projectId,
        durationMs: Date.now() - started,
      });
      return { project: parsed.project, idempotent: true };
    }

    const correlationId = input.correlationId?.trim() || createCorrelationId();
    const ts = nowIso();
    const projectId = createProjectId();
    const state = input.activate ? "ACTIVE" : "DRAFT";
    const project: D1Project = {
      projectId,
      workspaceId: D1_DEFAULT_WORKSPACE_ID,
      name: input.name.trim(),
      objective: input.objective.trim(),
      initialContextSummary: input.initialContextSummary?.trim() || null,
      methodMode: input.methodMode,
      state,
      ownerActorId: actorId,
      createdAt: ts,
      updatedAt: ts,
      version: 1,
    };

    const events: Array<{
      eventId: string;
      eventType: "PROJECT_CREATED" | "PROJECT_MODE_SELECTED" | "PROJECT_ACTIVATED";
      actorId: string;
      correlationId: string;
      payload: Record<string, unknown>;
    }> = [
      {
        eventId: createAuditEventId(),
        eventType: "PROJECT_CREATED",
        actorId,
        correlationId,
        payload: {
          name: project.name,
          methodMode: project.methodMode,
          state: project.state,
          monoOperator: true,
        },
      },
      {
        eventId: createAuditEventId(),
        eventType: "PROJECT_MODE_SELECTED",
        actorId,
        correlationId,
        payload: { methodMode: project.methodMode },
      },
    ];
    if (state === "ACTIVE") {
      events.push({
        eventId: createAuditEventId(),
        eventType: "PROJECT_ACTIVATED",
        actorId,
        correlationId,
        payload: { from: "DRAFT", to: "ACTIVE" },
      });
    }

    const responseJson = JSON.stringify({ project });
    const outcome = repo.createProjectAtomic({
      project,
      assignments: [
        {
          principalId: actorId,
          projectId,
          role: "project_owner",
          createdAt: ts,
        },
        {
          principalId: actorId,
          projectId,
          role: "decision_maker",
          createdAt: ts,
        },
      ],
      events,
      idempotencyKey: input.idempotencyKey.trim(),
      responseJson,
    });

    if (outcome.kind === "idempotent") {
      const parsed = JSON.parse(outcome.responseJson) as { project: D1Project };
      logD1("project_create", {
        status: "idempotent",
        projectId: parsed.project.projectId,
        durationMs: Date.now() - started,
      });
      return { project: parsed.project, idempotent: true };
    }

    logD1("project_create", {
      status: "ok",
      projectId,
      durationMs: Date.now() - started,
    });
    return { project, idempotent: false };
  } catch (error) {
    logD1("project_create", {
      status: "failed",
      durationMs: Date.now() - started,
      errorCode: error instanceof D1Error ? error.code : "UNKNOWN",
    });
    throw error;
  }
}

export function selectMethodMode(
  input: SelectMethodModeInput,
  repo = new D1ProjectRepository(openD1Db()),
): D1Project {
  const started = Date.now();
  try {
    const actorId = requireMonoOperator();
    assertMethodMode(input.methodMode);
    assertMethodModeTransitionAllowed();
    const current = repo.getProject(input.projectId);
    if (!current) {
      throw new D1Error("NOT_FOUND", "Projet introuvable.");
    }
    if (current.ownerActorId !== actorId) {
      throw new D1Error("UNAUTHORIZED", "Acteur non propriétaire.");
    }

    const activate = input.activate !== false;
    const nextState =
      activate && input.methodMode ? "ACTIVE" : current.state === "ACTIVE" ? "ACTIVE" : "DRAFT";

    const updated = repo.selectMethodModeAtomic({
      projectId: input.projectId,
      methodMode: input.methodMode,
      expectedVersion: input.expectedVersion,
      nextState,
      actorId,
      correlationId: input.correlationId?.trim() || createCorrelationId(),
      eventIds: {
        mode: createAuditEventId(),
        activated:
          nextState === "ACTIVE" && current.state !== "ACTIVE"
            ? createAuditEventId()
            : undefined,
      },
    });

    logD1("method_mode_selected", {
      status: "ok",
      projectId: updated.projectId,
      durationMs: Date.now() - started,
    });
    return updated;
  } catch (error) {
    logD1("method_mode_selected", {
      status: "failed",
      durationMs: Date.now() - started,
      errorCode: error instanceof D1Error ? error.code : "UNKNOWN",
    });
    throw error;
  }
}

export function listWorkspaceProjects(
  workspaceId = D1_DEFAULT_WORKSPACE_ID,
  repo = new D1ProjectRepository(openD1Db()),
): D1Project[] {
  requireMonoOperator();
  return repo.listProjects(workspaceId);
}

export function getProject(
  projectId: string,
  repo = new D1ProjectRepository(openD1Db()),
): D1Project {
  requireMonoOperator();
  const project = repo.getProject(projectId);
  if (!project) {
    throw new D1Error("NOT_FOUND", "Projet introuvable.");
  }
  return project;
}

export function listProjectAudit(
  projectId: string,
  repo = new D1ProjectRepository(openD1Db()),
) {
  requireMonoOperator();
  return repo.listAuditEvents(projectId);
}

export { D1_MONO_OPERATOR_ACTOR_ID };
```

### `projects/sfia-studio/app/lib/d1/index.ts`

```typescript
export * from "./types";
export * from "./commands";
export * from "./errors";
export * from "./methodModeHold";
export * from "./operationalReadiness";
export { resetD1DbForTests } from "./db";
```

## Contenu complet — tests nouveaux/modifiés clés
### `projects/sfia-studio/app/__tests__/d1/t-a7-method-mode-hold.test.ts`

```typescript
/** @vitest-environment node */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createProject, selectMethodMode } from "@/lib/d1/commands";
import { resetD1DbForTests } from "@/lib/d1/db";
import { D1Error } from "@/lib/d1/errors";
import {
  assertMethodModeTransitionAllowed,
  decideMethodModeTransition,
  getDefaultMethodModeHoldState,
  readMethodModeHold,
  resetMethodModeHoldForTests,
  setMethodModeHoldForTests,
} from "@/lib/d1/methodModeHold";

describe("T-A7 lot1 MethodMode hold", () => {
  let tmpDir: string;

  beforeEach(() => {
    resetD1DbForTests();
    resetMethodModeHoldForTests();
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "d1-hold-"));
    process.env.D1_SQLITE_PATH = path.join(tmpDir, "d1.sqlite");
  });

  afterEach(() => {
    resetD1DbForTests();
    resetMethodModeHoldForTests();
    delete process.env.D1_SQLITE_PATH;
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it("defaults to an active conservative hold with structured reasons", () => {
    const hold = getDefaultMethodModeHoldState();
    expect(hold.active).toBe(true);
    expect(hold.reasons.length).toBeGreaterThanOrEqual(7);
    expect(hold.reasons.map((r) => r.code)).toEqual(
      expect.arrayContaining([
        "B5_OPEN",
        "R1_OPEN",
        "R_M01_OPEN",
        "HARD_OPEN",
        "T_A7_BOUNDED_LOT_ACTIVE",
        "F11_2_INCOMPLETE",
        "F13_4_INCOMPLETE",
      ]),
    );
  });

  it("blocks transitions while hold is active", () => {
    const decision = decideMethodModeTransition();
    expect(decision.allowed).toBe(false);
    expect(decision.decision).toBe("BLOCK");
    expect(() => assertMethodModeTransitionAllowed()).toThrow(D1Error);

    const { project } = createProject({
      name: "Hold Block",
      objective: "cannot switch",
      methodMode: "SFIA_V2_6",
      activate: false,
      idempotencyKey: "hold-block-1",
    });
    expect(() =>
      selectMethodMode({
        projectId: project.projectId,
        methodMode: "TRANSITION",
        expectedVersion: project.version,
      }),
    ).toThrow(/hold/i);
  });

  it("allows transitions when hold is inactive (test override)", () => {
    setMethodModeHoldForTests({ active: false, reasons: [] });
    const decision = decideMethodModeTransition();
    expect(decision.allowed).toBe(true);
    expect(decision.decision).toBe("ALLOW");

    const { project } = createProject({
      name: "Hold Allow",
      objective: "can switch",
      methodMode: "SFIA_V2_6",
      activate: false,
      idempotencyKey: "hold-allow-1",
    });
    const updated = selectMethodMode({
      projectId: project.projectId,
      methodMode: "TRANSITION",
      expectedVersion: project.version,
      activate: true,
    });
    expect(updated.methodMode).toBe("TRANSITION");
  });

  it("readMethodModeHold is deterministic for reason codes", () => {
    const a = readMethodModeHold("2026-07-28T19:00:00.000Z");
    const b = readMethodModeHold("2026-07-28T19:00:00.000Z");
    expect(a.reasons.map((r) => r.code)).toEqual(b.reasons.map((r) => r.code));
    expect(a.active).toBe(b.active);
  });
});
```

### `projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts`

```typescript
/** @vitest-environment node */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  assertOperationalReadinessReadOnly,
  queryOperationalReadiness,
} from "@/lib/d1/operationalReadiness";
import {
  resetMethodModeHoldForTests,
  setMethodModeHoldForTests,
} from "@/lib/d1/methodModeHold";
import {
  createUnavailableBoundedHistoryProvider,
} from "@/lib/platform/t-a7/boundedHistoryRead";

describe("T-A7 lot1 F11.2 operational readiness", () => {
  beforeEach(() => {
    resetMethodModeHoldForTests();
  });

  afterEach(() => {
    resetMethodModeHoldForTests();
  });

  it("returns a frozen read-only snapshot with hold and blockers", () => {
    const snap = queryOperationalReadiness();
    expect(snap.schemaVersion).toBe("t-a7-f11.2-lot1");
    expect(snap.mutable).toBe(false);
    expect(snap.adminUi).toBe(false);
    expect(snap.writeCommands).toBe(false);
    expect(snap.observed.hold.active).toBe(true);
    expect(snap.observed.openBlockers.length).toBeGreaterThan(0);
    expect(snap.decision).toBe("BLOCK");
    expect(snap.authorization).toBe("NOT_AUTHORIZED_WHEN_HOLD_ACTIVE");
    expect(snap.observed.migration.status).toBe("NOT_STARTED");
    expect(snap.observed.health.status).toBe("SIMULATED");
    expect(snap.observed.history.gitCanonical).toBe(true);
    assertOperationalReadinessReadOnly(snap);
    expect(() => {
      // @ts-expect-error intentional mutation attempt
      snap.mutable = true;
    }).toThrow();
  });

  it("serializes stably for core contract fields", () => {
    const snap = queryOperationalReadiness();
    const json = JSON.stringify({
      schemaVersion: snap.schemaVersion,
      mutable: snap.mutable,
      writeCommands: snap.writeCommands,
      adminUi: snap.adminUi,
      decision: snap.decision,
      blockers: snap.observed.openBlockers,
    });
    expect(json).toContain("t-a7-f11.2-lot1");
    expect(json).toContain("B5_OPEN");
  });

  it("exposes UNKNOWN/partial history when provider unavailable", () => {
    const snap = queryOperationalReadiness({
      historyProvider: createUnavailableBoundedHistoryProvider(),
    });
    expect(snap.observed.history.availability).toBe("NOT_AVAILABLE");
    expect(snap.observed.history.returned).toBe(0);
  });

  it("reflects inactive hold without recommending keep", () => {
    setMethodModeHoldForTests({ active: false, reasons: [] });
    const snap = queryOperationalReadiness();
    expect(snap.decision).toBe("ALLOW");
    expect(snap.recommendation).toBe("NO_RECOMMENDATION");
  });
});
```

### `projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts`

```typescript
/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import {
  BOUNDED_HISTORY_MAX_ITEMS,
  assertBoundedHistoryImmutable,
  createDocumentaryBoundedHistoryProvider,
  createUnavailableBoundedHistoryProvider,
  BoundedHistoryMutationError,
} from "@/lib/platform/t-a7/boundedHistoryRead";
import { queryOperationalReadiness } from "@/lib/d1/operationalReadiness";
import { resetMethodModeHoldForTests } from "@/lib/d1/methodModeHold";

describe("T-A7 lot1 F13.4 bounded history foundation", () => {
  it("reads a bounded immutable documentary page with Git canonical", () => {
    const provider = createDocumentaryBoundedHistoryProvider();
    const page = provider.read({ limit: 2 });
    expect(page.gitCanonical).toBe(true);
    expect(page.mutable).toBe(false);
    expect(page.availability).toBe("PARTIAL");
    expect(page.returned).toBe(2);
    expect(page.truncated).toBe(true);
    expect(page.limit).toBe(2);
    assertBoundedHistoryImmutable(page);
  });

  it("enforces max limit", () => {
    const provider = createDocumentaryBoundedHistoryProvider();
    const page = provider.read({ limit: 10_000 });
    expect(page.limit).toBe(BOUNDED_HISTORY_MAX_ITEMS);
    expect(page.returned).toBeLessThanOrEqual(BOUNDED_HISTORY_MAX_ITEMS);
  });

  it("supports unavailable provider without claiming full archive", () => {
    const page = createUnavailableBoundedHistoryProvider().read();
    expect(page.availability).toBe("NOT_AVAILABLE");
    expect(page.items).toEqual([]);
    expect(page.gitCanonical).toBe(true);
  });

  it("refuses mutation semantics via contract helper", () => {
    const page = createDocumentaryBoundedHistoryProvider().read({ limit: 1 });
    expect(() => assertBoundedHistoryImmutable(page)).not.toThrow(
      BoundedHistoryMutationError,
    );
  });

  it("integrates with F11.2 readiness without circular product writes", () => {
    resetMethodModeHoldForTests();
    const snap = queryOperationalReadiness({
      historyProvider: createDocumentaryBoundedHistoryProvider(),
      historyLimit: 1,
    });
    expect(snap.observed.history.returned).toBe(1);
    expect(snap.observed.history.availability).toBe("PARTIAL");
    expect(snap.writeCommands).toBe(false);
  });
});
```

### `projects/sfia-studio/app/__tests__/platform/t-a7-f11-f13-absence.probe.test.ts`

```typescript
/** @vitest-environment node */
/**
 * TEST/DIAGNOSTIC ONLY — updated after T-A7 lot 1 foundations.
 * Asserts foundations exist as bounded lot-1 modules (not final API/UI/cutover).
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../..");

describe("T-A7 lot1 foundation presence (bounded)", () => {
  it("exposes MethodMode hold module", () => {
    expect(
      fs.existsSync(path.join(APP_ROOT, "lib/d1/methodModeHold.ts")),
    ).toBe(true);
  });

  it("exposes F11.2 operational readiness module (no HTTP route required)", () => {
    expect(
      fs.existsSync(path.join(APP_ROOT, "lib/d1/operationalReadiness.ts")),
    ).toBe(true);
    const appRouter = path.join(APP_ROOT, "app");
    const hasReadinessRoute =
      fs.existsSync(appRouter) &&
      fs
        .readdirSync(appRouter, { recursive: true })
        .map(String)
        .some((p) => /readiness|cutover/i.test(p) && /route\.ts$/.test(p));
    expect(hasReadinessRoute).toBe(false);
  });

  it("exposes F13.4 bounded history foundation under platform/t-a7", () => {
    expect(
      fs.existsSync(
        path.join(APP_ROOT, "lib/platform/t-a7/boundedHistoryRead.ts"),
      ),
    ).toBe(true);
  });
});
```

### `projects/sfia-studio/app/__tests__/d1/project-foundation.test.ts`

```typescript
import { describe, expect, it, beforeEach, afterEach } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  assertMethodMode,
  assertNoForbiddenClaim,
  canActivate,
  validateCreateProjectInput,
} from "@/lib/d1/domain";
import { D1Error } from "@/lib/d1/errors";
import {
  createProject,
  listProjectAudit,
  resetD1DbForTests,
  selectMethodMode,
} from "@/lib/d1/commands";
import {
  resetMethodModeHoldForTests,
  setMethodModeHoldForTests,
} from "@/lib/d1/methodModeHold";

describe("d1 domain", () => {
  it("accepts authorized method modes", () => {
    expect(assertMethodMode("SFIA_V2_6")).toBe("SFIA_V2_6");
    expect(assertMethodMode("V3_CANDIDATE")).toBe("V3_CANDIDATE");
  });

  it("rejects forbidden claims", () => {
    expect(() => assertNoForbiddenClaim("go V3-ADOPTED now")).toThrow(D1Error);
    expect(() => assertNoForbiddenClaim("V3_IMPLEMENTED")).toThrow(D1Error);
  });

  it("validates create input", () => {
    expect(() =>
      validateCreateProjectInput({
        name: "",
        objective: "x",
        methodMode: "SFIA_V2_6",
        activate: true,
        idempotencyKey: "k",
      }),
    ).toThrow(D1Error);
  });

  it("allows activate only from DRAFT with mode", () => {
    expect(canActivate("DRAFT", "TRANSITION")).toBe(true);
    expect(canActivate("DRAFT", null)).toBe(false);
    expect(canActivate("ACTIVE", "TRANSITION")).toBe(false);
  });
});

describe("d1 repository commands", () => {
  let tmpDir: string;

  beforeEach(() => {
    resetD1DbForTests();
    resetMethodModeHoldForTests();
    setMethodModeHoldForTests({ active: false, reasons: [] });
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "d1-i1-"));
    process.env.D1_SQLITE_PATH = path.join(tmpDir, "d1.sqlite");
  });

  afterEach(() => {
    resetD1DbForTests();
    resetMethodModeHoldForTests();
    delete process.env.D1_SQLITE_PATH;
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it("creates project with audit and mono-operator assignments", () => {
    const { project, idempotent } = createProject({
      name: "Demo Framing",
      objective: "Cadrer D1-I1",
      methodMode: "V3_CANDIDATE",
      activate: true,
      idempotencyKey: "key-1",
    });
    expect(idempotent).toBe(false);
    expect(project.state).toBe("ACTIVE");
    expect(project.methodMode).toBe("V3_CANDIDATE");
    const audit = listProjectAudit(project.projectId);
    const types = audit.map((e) => e.eventType);
    expect(types).toContain("PROJECT_CREATED");
    expect(types).toContain("PROJECT_MODE_SELECTED");
    expect(types).toContain("PROJECT_ACTIVATED");
  });

  it("is idempotent on duplicate key", () => {
    const a = createProject({
      name: "Idem",
      objective: "same",
      methodMode: "SFIA_V2_6",
      activate: false,
      idempotencyKey: "key-dup",
    });
    const b = createProject({
      name: "Idem changed",
      objective: "different",
      methodMode: "TRANSITION",
      activate: true,
      idempotencyKey: "key-dup",
    });
    expect(b.idempotent).toBe(true);
    expect(b.project.projectId).toBe(a.project.projectId);
    expect(b.project.name).toBe("Idem");
  });

  it("selects method mode with optimistic locking", () => {
    const { project } = createProject({
      name: "Mode",
      objective: "switch",
      methodMode: "SFIA_V2_6",
      activate: false,
      idempotencyKey: "key-mode",
    });
    const updated = selectMethodMode({
      projectId: project.projectId,
      methodMode: "TRANSITION",
      expectedVersion: project.version,
      activate: true,
    });
    expect(updated.methodMode).toBe("TRANSITION");
    expect(updated.state).toBe("ACTIVE");
    expect(updated.version).toBe(project.version + 1);
    expect(() =>
      selectMethodMode({
        projectId: project.projectId,
        methodMode: "V3_CANDIDATE",
        expectedVersion: project.version,
      }),
    ).toThrow(D1Error);
  });
});
```

### `projects/sfia-studio/app/__tests__/d1/intake-c4.test.ts`

```typescript
import { describe, expect, it, beforeEach, afterEach } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  buildConfirmationIntent,
  asStrictBoolean,
  draftFingerprint,
} from "@/lib/d1/confirmation/validate";
import { buildConfirmationSummary } from "@/lib/d1/confirmation/summary";
import { executeConfirmedMutation } from "@/lib/d1/confirmation/executeConfirmation";
import { EXISTING_PROJECT_PERSISTENCE_NOTE } from "@/lib/d1/confirmation/types";
import { D1Error } from "@/lib/d1/errors";
import {
  createProject,
  getProject,
  resetD1DbForTests,
  selectMethodMode,
} from "@/lib/d1/commands";
import {
  resetMethodModeHoldForTests,
  setMethodModeHoldForTests,
} from "@/lib/d1/methodModeHold";

describe("D1-C4 confirmation contracts", () => {
  it("allowlists actionType and requires explicit confirmation", () => {
    expect(() =>
      buildConfirmationIntent({
        sessionLocalId: "s",
        proposalId: "rrp-1",
        matchId: null,
        actionType: "DELETE_EVERYTHING" as never,
        targetProjectId: null,
        projectDraft: null,
        expectedProjectVersion: null,
        expectedUpdatedAt: null,
        idempotencyKey: "k",
        explicitConfirmation: true,
      }),
    ).toThrow(D1Error);

    expect(() =>
      buildConfirmationIntent({
        sessionLocalId: "s",
        proposalId: "rrp-1",
        matchId: null,
        actionType: "CREATE_PROJECT",
        targetProjectId: null,
        projectDraft: {
          name: "A",
          objective: "B",
          initialContextSummary: "",
          activate: true,
        },
        expectedProjectVersion: null,
        expectedUpdatedAt: null,
        idempotencyKey: "k",
        explicitConfirmation: false,
      }),
    ).toThrow(/explicite/i);

    expect(() => asStrictBoolean("true", "x")).toThrow(D1Error);
  });

  it("rejects client Project ID on CREATE_PROJECT", () => {
    expect(() =>
      buildConfirmationIntent({
        sessionLocalId: "s",
        proposalId: "rrp-1",
        matchId: null,
        actionType: "CREATE_PROJECT",
        targetProjectId: "proj-hack",
        projectDraft: {
          name: "A",
          objective: "B",
          initialContextSummary: "",
          activate: true,
        },
        expectedProjectVersion: null,
        expectedUpdatedAt: null,
        idempotencyKey: "k1",
        explicitConfirmation: true,
      }),
    ).toThrow(/interdit targetProjectId/i);
  });
});

describe("D1-C4 bounded mutations", () => {
  let tmpDir: string;

  beforeEach(() => {
    resetD1DbForTests();
    resetMethodModeHoldForTests();
    setMethodModeHoldForTests({ active: false, reasons: [] });
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "d1-c4-"));
    process.env.D1_SQLITE_PATH = path.join(tmpDir, "d1.sqlite");
  });

  afterEach(() => {
    resetD1DbForTests();
    resetMethodModeHoldForTests();
    delete process.env.D1_SQLITE_PATH;
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it("creates project only with explicit confirmation and audits", () => {
    const without = executeConfirmedMutation({
      sessionLocalId: "s1",
      proposalId: "rrp-1",
      matchId: null,
      actionType: "CREATE_PROJECT",
      targetProjectId: null,
      projectDraft: {
        name: "Contrats C4",
        objective: "Suivi contrats",
        initialContextSummary: "contexte",
        activate: true,
      },
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-c4-1",
      explicitConfirmation: false,
    });
    expect(without.status).toBe("REJECTED");

    const created = executeConfirmedMutation({
      sessionLocalId: "s1",
      proposalId: "rrp-1",
      matchId: null,
      actionType: "CREATE_PROJECT",
      targetProjectId: null,
      projectDraft: {
        name: "Contrats C4",
        objective: "Suivi contrats",
        initialContextSummary: "contexte",
        activate: true,
      },
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-c4-1",
      explicitConfirmation: true,
    });
    expect(created.status).toBe("SUCCEEDED");
    expect(created.projectId).toMatch(/^proj-/);
    expect(created.auditEventId).toBeTruthy();
    const reread = getProject(created.projectId!);
    expect(reread.name).toBe("Contrats C4");
  });

  it("replays same key same payload without duplicate", () => {
    const draft = {
      name: "Idem C4",
      objective: "obj",
      initialContextSummary: "",
      activate: true,
    };
    const a = executeConfirmedMutation({
      sessionLocalId: "s2",
      proposalId: "rrp-2",
      matchId: null,
      actionType: "CREATE_PROJECT",
      targetProjectId: null,
      projectDraft: draft,
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-same",
      explicitConfirmation: true,
    });
    const b = executeConfirmedMutation({
      sessionLocalId: "s2",
      proposalId: "rrp-2",
      matchId: null,
      actionType: "CREATE_PROJECT",
      targetProjectId: null,
      projectDraft: draft,
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-same",
      explicitConfirmation: true,
    });
    expect(a.status).toBe("SUCCEEDED");
    expect(b.status).toBe("ALREADY_APPLIED");
    expect(b.idempotentReplay).toBe(true);
    expect(b.projectId).toBe(a.projectId);
  });

  it("conflicts when same key different payload", () => {
    executeConfirmedMutation({
      sessionLocalId: "s3",
      proposalId: "rrp-3",
      matchId: null,
      actionType: "CREATE_PROJECT",
      targetProjectId: null,
      projectDraft: {
        name: "Alpha",
        objective: "o1",
        initialContextSummary: "",
        activate: true,
      },
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-conflict",
      explicitConfirmation: true,
    });
    const conflict = executeConfirmedMutation({
      sessionLocalId: "s3",
      proposalId: "rrp-3",
      matchId: null,
      actionType: "CREATE_PROJECT",
      targetProjectId: null,
      projectDraft: {
        name: "Beta",
        objective: "o2",
        initialContextSummary: "",
        activate: true,
      },
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-conflict",
      explicitConfirmation: true,
    });
    expect(conflict.status).toBe("CONFLICT");
    expect(conflict.errorCode).toBe("IDEMPOTENCY");
  });

  it("existing project confirm is NO_MUTATION without invented link", () => {
    const { project } = createProject({
      name: "Campus360",
      objective: "Gestion",
      methodMode: "V3_CANDIDATE",
      activate: true,
      idempotencyKey: "seed-campus",
    });
    const result = executeConfirmedMutation({
      sessionLocalId: "s4",
      proposalId: "rrp-4",
      matchId: "match-1",
      actionType: "CONFIRM_EXISTING_PROJECT_CONTEXT",
      targetProjectId: project.projectId,
      projectDraft: null,
      expectedProjectVersion: project.version,
      expectedUpdatedAt: project.updatedAt,
      idempotencyKey: "idem-exist",
      explicitConfirmation: true,
    });
    expect(result.status).toBe("NO_MUTATION");
    expect(result.persistenceNote).toBe(EXISTING_PROJECT_PERSISTENCE_NOTE);
    expect(result.projectId).toBe(project.projectId);
  });

  it("detects stale existing project conflict", () => {
    const { project } = createProject({
      name: "Stale",
      objective: "obj",
      methodMode: "V3_CANDIDATE",
      activate: false,
      idempotencyKey: "seed-stale",
    });
    selectMethodMode({
      projectId: project.projectId,
      methodMode: "V3_CANDIDATE",
      expectedVersion: project.version,
      activate: true,
    });
    const updated = getProject(project.projectId);
    const result = executeConfirmedMutation({
      sessionLocalId: "s5",
      proposalId: "rrp-5",
      matchId: null,
      actionType: "CONFIRM_EXISTING_PROJECT_CONTEXT",
      targetProjectId: project.projectId,
      projectDraft: null,
      expectedProjectVersion: project.version,
      expectedUpdatedAt: project.updatedAt,
      idempotencyKey: "idem-stale",
      explicitConfirmation: true,
    });
    expect(result.status).toBe("CONFLICT");
    expect(updated.version).not.toBe(project.version);
  });

  it("analyze-only and cancel produce no mutation", () => {
    const ao = executeConfirmedMutation({
      sessionLocalId: "s6",
      proposalId: "rrp-6",
      matchId: null,
      actionType: "ANALYZE_ONLY",
      targetProjectId: null,
      projectDraft: null,
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-ao",
      explicitConfirmation: true,
    });
    expect(ao.status).toBe("NO_MUTATION");

    const cancel = executeConfirmedMutation({
      sessionLocalId: "s6",
      proposalId: "rrp-6",
      matchId: null,
      actionType: "CANCEL",
      targetProjectId: null,
      projectDraft: null,
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-cancel",
      explicitConfirmation: true,
    });
    expect(cancel.status).toBe("CANCELLED");
  });

  it("missing existing project returns CONFLICT", () => {
    const result = executeConfirmedMutation({
      sessionLocalId: "s7",
      proposalId: "rrp-7",
      matchId: null,
      actionType: "CONFIRM_EXISTING_PROJECT_CONTEXT",
      targetProjectId: "proj-missing-does-not-exist",
      projectDraft: null,
      expectedProjectVersion: 1,
      expectedUpdatedAt: "2026-01-01T00:00:00.000Z",
      idempotencyKey: "idem-missing",
      explicitConfirmation: true,
    });
    expect(result.status).toBe("CONFLICT");
    expect(result.errorCode).toBe("NOT_FOUND");
  });

  it("summary builder labels actions clearly", () => {
    const create = buildConfirmationSummary({
      actionType: "CREATE_PROJECT",
      draft: {
        name: "X",
        objective: "Y",
        initialContextSummary: "",
        activate: true,
      },
    });
    expect(create.actionLabel).toBe("Créer ce projet");
    expect(create.confirmationRequired).toBe(true);
    expect(
      draftFingerprint({
        name: "X",
        objective: "Y",
        initialContextSummary: "",
        activate: true,
      }),
    ).toContain("X");
  });
});
```

## Contenu complet — docs pack touchés
### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md`

```markdown
# T-A7 — Technical readiness framing

| Champ | Valeur |
|-------|--------|
| **Gate O3 (consommé)** | `GO DECIDE T-A7 OPENING — SELECT O3 FOR A FIRST BOUNDED DEVELOPMENT LOT LIMITED TO METHODMODE HOLD F11.2 READINESS CONTRACT AND F13.4 READ-ONLY FOUNDATION — NO DELIVERY OR CUTOVER — KEEP B5 R1 R-M01 AND HARD OPEN` |
| **O3** | `DECIDED — ADOPTED BY MORRIS` |
| **T-A7** | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` |
| **Date lot 1** | 2026-07-28 21:19:12 CEST (+0200) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness` |
| **Base** | `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421` |
| **Push / PR projet** | **aucun** |
| **F03.3 évaluation** | `F03.3 PARTIALLY SATISFIED — IMPLEMENTATION BLOCKERS REDUCED` |
| **F11.2 / F13.4 décisions** | `DECIDED` · fondations lot 1 livrées (≠ finales) |
| **B5 / R1 / R-M01** | `OPEN` |
| **HARD** | `OPEN HARD` |
| **Delivery / cutover** | `NOT AUTHORIZED` |
| **T-A6 / Option A** | `NOT DECLARED` / `NOT COMPLETE` |
| **Persistence / IAM / RGPD** | `NOT SELECTED` / `NOT SELECTED` / `NOT VALIDATED` |

## Lot 1 livré

1. MethodMode hold (défaut actif)
2. F11.2 readiness read-only interne
3. F13.4 historique RO borné (Git canonique)

Détail : `10-t-a7-first-bounded-development-lot.md`

## Anti-claims

- T-A7 borné ≠ fully open · ≠ delivery/cutover ready
- hold ≠ blockers fermés
- fondations ≠ API/UI/vue finales

## Gate candidat suivant

`GO REVIEW T-A7 FIRST BOUNDED DEVELOPMENT LOT — ASSESS PR READINESS FOR METHODMODE HOLD F11.2 READINESS FOUNDATION AND F13.4 READ-ONLY FOUNDATION — NO DELIVERY OR CUTOVER`

**Statut :** `NOT CONSUMED`

## Verdict

`T-A7 FIRST BOUNDED DEVELOPMENT LOT IMPLEMENTED LOCALLY — O3 DECISION RECORDED — METHODMODE HOLD IMPLEMENTED — F11.2 READINESS FOUNDATION IMPLEMENTED READ-ONLY — F13.4 READ-ONLY FOUNDATION IMPLEMENTED WITH GIT REMAINING CANONICAL — TESTS PASS — NO MIGRATION IAM ADMIN UI DELIVERY OR CUTOVER — B5 R1 R-M01 AND HARD REMAIN OPEN — T-A7 OPEN FOR FIRST BOUNDED DEVELOPMENT LOT ONLY — PROJECT BRANCH NOT PUSHED`
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/02-p03-p11-readiness-matrix.md`

```markdown
# 02 — Matrice de readiness P03–P11

| Champ | Valeur |
|-------|--------|
| **Document** | `02-p03-p11-readiness-matrix.md` |
| **Source canonique des définitions** | `t-a7-legacy-cutover-framing/02-t-a7-cutover-preconditions.md` |
| **Base d’observation** | `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421` + preuves O2 locales |
| **Date/heure/fuseau** | 2026-07-28 20:54:03 CEST (+0200) |
| **Statut matrice** | `QUALIFIED — EVIDENCE-BASED — UPDATED AFTER O2 CAMPAIGN — NOT AN AUTHORIZATION` |
| **T-A7** | `NOT OPEN` |

> Les préconditions restent **candidates au sens cutover**. Leur qualification ici **n’autorise** ni préparation technique exécutable au-delà du gate O2 courant, ni delivery, ni cutover.

---

## 1. Légende des statuts

| Statut | Sens |
|--------|------|
| `SATISFIED — EVIDENCED` | preuve Git / contrat / test vérifiable pour l’exigence **telle que formulée** |
| `PARTIAL — EVIDENCED` | preuves partielles ; écart explicite |
| `MISSING — EVIDENCED` | absence de preuve / capacité constatée |
| `UNKNOWN — EVIDENCE REQUIRED` | donnée ou mesure non collectée |
| `FAILED — BLOCKER CONFIRMED` | échec confirmé |
| `NOT APPLICABLE — JUSTIFIED` | hors jeu pour le niveau considéré |

---

## 2. Matrice P03–P11 (après campagne O2)

| ID | Exigence canonique | Preuves Git / tests O2 | Statut **avant** | Statut **après** | Écart restant | Risque | Action future | Gate | Stop |
|----|--------------------|------------------------|------------------|------------------|---------------|--------|---------------|------|------|
| P03 | `canonicalPaths` → DoctrinePackage registry | `canonicalPaths.ts` · probe consumers · digest | PARTIAL | `PARTIAL — EVIDENCED` | pas d’adoption produit globale ; method cores encore allowlistés | fallback silencieux | remplacement registry sous gate distinct | F03 | SC-05 · SC-02 |
| P04 | `sourceLoader` → package loader + digest | `sourceLoader` · canonicalEngine · asymmetry probe | PARTIAL | `PARTIAL — EVIDENCED` | pas de loader cutover produit unique | package stale | design loader cible | F03 | SC-05 |
| P05 | `contextResolver` → CkcResolver + doctrine | CKC mémoire · OA sans import method | PARTIAL | `PARTIAL — EVIDENCED` | guidance-only ; lectures method hors OA via loader | doctrine v2.6 résiduelle | boundary CKC + tests runtime | F03 | SC-05 |
| P06 | session / MethodMode → OA correlation | MethodMode D1 actif · hold absent (probe) | MISSING | `MISSING — EVIDENCED` | pas de remplacement session OA | residual MethodMode | design session OA | F03 · F11 | SC-04 |
| P07 | MethodMode retiré cible OA | METHOD_MODES actif · foundation tests | MISSING | `MISSING — EVIDENCED` | MethodMode présent | cutover prématuré | inventaire + hold futur | F03 · F11 | SC-04 |
| P08 | lectures `method/**` absentes OA | OA sans import method · loader lit cores | MISSING | `MISSING — EVIDENCED` | lectures actives via allowlist fermée | lecture legacy | CI + runtime no-fallback global | F03 | SC-02 |
| P09 | badges v2.6 retirés OA | UI OA native absente (probe F11) | MISSING | `MISSING — EVIDENCED` | pas de surfaces OA product | confusion UX | design UI OA | F11 | SC-04 |
| P10 | OPS1 ACL / isolation | import boundaries · isolation probe · allowlist | PARTIAL | `PARTIAL — EVIDENCED` | pas d’ACL cutover ; live cross-call non instrumenté | double identité | implémentation isolation sous gate | F13 · W1-D04 | SC-03 · SC-12 |
| P11 | historique legacy RO | F13.4 décidé · absence runtime prouvée | MISSING | `MISSING — EVIDENCED` | politique non appliquée | mutation historique | vue RO sous gate F13 | F13 | SC-06 |

---

## 3. Synthèse après O2

### Satisfaits (remplacement OA)

Aucun P03–P11 en `SATISFIED — EVIDENCED` pour l’exigence de **remplacement** Option A.

### Partiels renforcés

P03 · P04 · P05 · P10

### Manquants (capacité runtime)

P06 · P07 · P08 · P09 · P11

### Unknown résiduels

| Sujet | Statut |
|-------|--------|
| Cross-call dynamique live session | `PARTIAL` static / live `UNKNOWN — ENVIRONMENT LIMITATION` (worktree sans `.sfia-exec`) |
| Hits allowlist production | `NO LOCAL HITS — LIMITED EVIDENCE` ≠ production |
| Volumes production | `LOCAL … — PRODUCTION UNKNOWN` |
| Durée conservation F13 | `UNKNOWN` |
| IAM | `NOT SELECTED` |

---

## 4. Anti-claims

- tests verts ≠ delivery / cutover ;
- PARTIAL renforcé ≠ SATISFIED remplacement ;
- isolation static ≠ isolation runtime cutover ;
- volumes locaux ≠ volumes production.

---

## 5. Verdict section

`P03–P11 REASSESSED AFTER O2 — 0 SATISFIED / 4 PARTIAL / 5 MISSING — GAPS REDUCED ON EVIDENCE DEPTH — NO AUTHORIZATION`


---

## 8. Lot 1 update (O3)

| ID | Effet lot 1 |
|----|-------------|
| P06 | hold/transition control **PARTIAL** (hold actif ; session OA remplacement toujours MISSING) |
| P07 | MethodMode **toujours présent** ; retrait toujours MISSING ; hold empêche transition prématurée |
| P08 | lectures method allowlist toujours actives — MISSING remplacement |
| P09 | UI OA absente — MISSING |
| P10 | OPS1 isolation inchangée (pas de mod OPS1) |
| P11 | fondation F13.4 RO **PARTIAL** (métadonnées) — pas enforcement produit final |

`0 SATISFIED remplacement OA` conservé. Progression = contrôles/fondations, pas cutover.
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/05-evidence-and-non-regression-plan.md`

```markdown
# 05 — Plan de preuves et non-régression

| Champ | Valeur |
|-------|--------|
| **Document** | `05-evidence-and-non-regression-plan.md` |
| **Statut** | `CATALOGUED — O2 CAMPAIGN EXECUTED ON PRIORITY IDS — NO PRODUCT TESTS FOR F11/F13 FINAL` |
| **Date initiale** | 2026-07-28 20:36:49 CEST (+0200) |
| **Date MAJ O2** | 2026-07-28 20:54:03 CEST (+0200) |

---

## 1. Catalogue (statuts après O2)

| ID | Surface | Preuve attendue | Méthode | Auto? | Niveau | Gate | Statut **avant** | Statut **après O2** |
|----|---------|-----------------|---------|-------|--------|------|------------------|---------------------|
| E-MM-01 | MethodMode | inventaire modes | relecture | partiel | L1 | F03 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-MM-02 | MethodMode | tests D1 select | foundation | oui | L3 | prep | PARTIAL | `PARTIAL — EVIDENCED` (tests verts) |
| E-MM-03 | MethodMode | hold flag | probe absence | oui | L1 | SC-04 | MISSING | `MISSING — EVIDENCED` (absence confirmée) |
| E-D1-01 | D1 | import boundary | import-boundaries | oui | L3 | W1-D04 | SATISFIED (boundary) | `SATISFIED — EVIDENCED` (boundary only) |
| E-D1-02 | D1 | shared provider | resolveProvider + probe | non | L1–L2 | W1-D04 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-CP-01 | Canon | digest stable | loader/canonicalEngine | oui | L1–L3 | P03/P04 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-CP-02 | Consommateurs | map consumers | probe consumers | partiel | L1 | W1-D02 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-CP-03 | Consommateurs | no-fallback produit | probe OA + loader deny | oui | L4 | P08 | MISSING | `PARTIAL — EVIDENCED` |
| E-OPS-01 | OPS1 | allowlist deny-default | allowlist tests | oui | L3 | P10 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-OPS-02 | OPS1 | path-policy deny method | asymmetry probe | oui | L3 | P10 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-OPS-03 | OPS1 | no-cross-call | isolation probe static | oui | L1–L5 | W1-D04 | UNKNOWN | `PARTIAL — EVIDENCED` |
| E-OPS-04 | OPS1 | e2e I1–I6 | non exécutés ce cycle | oui | L5 | prep | PARTIAL | `PARTIAL — EVIDENCED` (inchangé — non rejoués) |
| E-OPS-05 | OPS1 | hits allowlist method/ | probe hits | partiel | L1–L3 | W1-D04 | UNKNOWN | `NO LOCAL HITS — LIMITED EVIDENCE` |
| E-F11-01 | F11.2 | contrat API | absence route prouvée | non | L0–L1 | F11 | MISSING | `MISSING — EVIDENCED` (absence) |
| E-F11-02 | F11.2 | audit lecture | — | oui | L4 | F11 | MISSING | `MISSING — EVIDENCED` |
| E-F11-03 | F11.2 | deny-write | — | oui | L3 | F11 | MISSING | `MISSING — EVIDENCED` |
| E-F13-01 | F13.4 | Git archive | packs | oui | L1 | F13 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-F13-02 | F13.4 | vue RO | absence module | oui | L1 | F13 | MISSING | `MISSING — EVIDENCED` (absence) |
| E-F13-03 | F13.4 | journal accès | — | oui | L4 | F13 | MISSING | `MISSING — EVIDENCED` |
| E-PER-01 | Persistence | volumes | probe + métriques RO | non | L1 | F10 | UNKNOWN | `LOCAL VOLUME EVIDENCE COLLECTED — PRODUCTION UNKNOWN` |
| E-IAM-01 | IAM | modèle | — | non | L0 | F10 | NOT SELECTED | `NOT SELECTED` |
| E-AUD-01 | Audit OA | journal durable | — | partiel | L2–L5 | P23 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-OBS-01 | Observabilité | health réel | absence readiness | oui | L1 | F11 | MISSING | `MISSING — EVIDENCED` (absence) |
| E-CI-01 | CI | import boundary | tests | oui | L4 | P24 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-RB-01 | Rollback | R0 revert | Git | oui | L1 | pack | SATISFIED | `SATISFIED — EVIDENCED` |
| E-RB-02 | Rollback | R1–R3 drills | — | partiel | L5 | SC-06 | MISSING | `MISSING — EVIDENCED` |

---

## 2. Anti-claims

- campagne O2 ≠ F11/F13 implémentés ;
- PARTIAL E-OPS-03 ≠ runtime live exhaustif ;
- volumes locaux ≠ production ;
- catalogue mis à jour ≠ preuves cutover.

---

## 3. Verdict section

`EVIDENCE CATALOGUE UPDATED AFTER O2 — PRIORITY UNKNOWN/PARTIAL IDS ADVANCED — F11/F13 FINAL STILL MISSING — NO PRODUCT IMPLEMENTATION`


---

## LOT 1 UPDATE

| ID | Après lot 1 |
|----|-------------|
| E-MM-03 | `PARTIAL — EVIDENCED` — hold implémenté (défaut actif) |
| E-F11-01 | `PARTIAL — EVIDENCED` — contrat interne read-only |
| E-F13-02 | `PARTIAL — EVIDENCED` — fondation RO bornée (≠ vue finale) |
| E-OBS-01 | `PARTIAL — EVIDENCED` — health SIMULATED exposé |
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/06-holds-and-stop-conditions.md`

```markdown
# 06 — Holds, anti-bypass et stop conditions

| Champ | Valeur |
|-------|--------|
| **Document** | `06-holds-and-stop-conditions.md` |
| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
| **T-A7** | `NOT OPEN` |
| **Statut** | `HOLDS ACTIVE — ANTI-BYPASS DOCUMENTED` |

---

## 1. Holds obligatoires (toujours actifs)

| Hold | Statut exigé | Sens |
|------|--------------|------|
| T-A7 | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` | ≠ fully open · ≠ delivery |
| F03.3 | décidée ≠ satisfaite | `IMPLEMENTATION BLOCKERS REDUCED` · pas SATISFIED global |
| F11.2 | décidée ≠ API disponible | pas d’implémentation |
| F13.4 | décidée ≠ historique RO disponible | pas de vue runtime |
| Isolation OPS1 | design **validé tech** ≠ réalisée | inchangé lot 1 |
| MethodMode hold | **implémenté (défaut actif)** | ≠ blockers fermés |
| F11.2 fondation | **implémentée RO** | ≠ API finale / cutover |
| F13.4 fondation | **implémentée RO bornée** | ≠ vue runtime finale |
| B5 | `OPEN` | STOP BEFORE DELIVERY |
| R1 | `OPEN` | atomicité non résolue |
| R-M01 | `OPEN` | ClaimEvaluator readiness |
| HARD (R-T-A3-1/2…) | `OPEN HARD` | autorité / atomicité |
| Persistence / IAM | `NOT SELECTED` | pas de sélection implicite |
| RGPD production | `NOT VALIDATED` | U-M02 ouvert |
| T-A6 COMPLETE | `NOT DECLARED` | |
| Option A | `NOT COMPLETE` | |
| Delivery preparation | `NOT AUTHORIZED` | |
| Delivery | `NOT AUTHORIZED` | |
| Cutover | `NOT AUTHORIZED` | |

---

## 2. Anti-bypass

| Mécanisme | Contenu |
|-----------|---------|
| Gates séquencés | Wave 1 → F03/F11/F13 → readiness → **décision ouverture** → prep bornée → delivery → cutover |
| Pas de saut A→D | aucune transition automatique framing → cutover |
| HARD non ignorables | critère F03.3 « aucun blocker HARD ignoré » |
| Path-policy ≠ IAM | stop si confondus |
| Décision ≠ implémentation | F* / W1* ne valent pas code |
| B5 | bloque delivery même si framing vert |
| Review handoff | consommation post-cycle ChatGPT — ne remplace pas gate Morris |

---

## 3. Stop conditions (héritage + readiness)

| ID | Trigger | Action |
|----|---------|--------|
| SC-02 | mod `method/**` hors gate | STOP |
| SC-03 | mod OPS1 hors gate | STOP · isoler |
| SC-04 | MethodMode retiré sans P03–P09 | STOP |
| SC-05 | remplacements legacy incomplets | STOP activation |
| SC-06 | rollback/hold non démontrable avant cutover | STOP |
| SC-07 | real execution sans HARD/persistence/IAM | STOP |
| SC-12 | OPS1 présenté comme v3 / hors Option A | STOP |
| W1-S1 | inventaire = autorisation retrait | STOP |
| W1-S3 | vague 1 = T-A7 OPEN | STOP |
| W1-S4 | prep technique sans F03/F11/F13 décidés | *(contenu F maintenant décidé — hold passe à satisfaction/impl)* |
| W1-S5 | retrait sans isolation OPS1 définie/validée | STOP |
| A52-B5 | delivery avec B5 OPEN non accepté | STOP BEFORE DELIVERY |
| TR-S-01 | preuve absente présentée comme SATISFIED | STOP |
| TR-S-02 | contradiction documentaire (décision vs anti-claim) | STOP |
| TR-S-03 | dépendance UNKNOWN traitée comme nulle | STOP |
| TR-S-04 | mutation historique possible non holdée | STOP |
| TR-S-05 | frontière OPS1 ambiguë | STOP |
| TR-S-PP-IAM | path-policy confondue avec IAM | STOP |
| TR-S-06 | rollback non démontrable au niveau requis | STOP |
| TR-S-07 | volume/migration non qualifiés avant mutation data | STOP |
| TR-S-08 | blocker HARD contourné | STOP |
| TR-S-09 | scope élargi hors pack readiness / hors gate | STOP |
| TR-S-10 | claim T-A7 OPEN sans bulletin Morris | STOP |

---

## 4. Mapping preuves absentes → stops

| Preuve manquante | Stop |
|------------------|------|
| E-OPS-03 cross-call | TR-S-05 · W1-S5 |
| E-F11-* API | ne pas claim cutover ready |
| E-F13-02/03 RO | TR-S-04 · P11 |
| E-PER-01 volumes | TR-S-07 |
| E-RB-02 drills | SC-06 / TR-S-06 au niveau cutover |

---

## 5. Anti-claims

- hold documenté ≠ hold runtime ;
- stop condition ≠ rollback prouvé ;
- F* décidées ≠ holds levés ;
- readiness pack ≠ bypass vers delivery.

---

## 6. Verdict section

`HOLDS ACTIVE — ANTI-BYPASS AND STOP CONDITIONS DOCUMENTED — O2 DOES NOT LIFT T-A7 NOT OPEN — HARD NOT IGNORED`


## Lot 1 note

T-A7 ouvert **uniquement** pour le lot borné. Delivery/cutover restent NOT AUTHORIZED.
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/07-f03-3-satisfaction-assessment.md`

```markdown
# 07 — Évaluation de satisfaction F03.3

| Champ | Valeur |
|-------|--------|
| **Document** | `07-f03-3-satisfaction-assessment.md` |
| **Décision** | D-T-A7-F03 = **F03.3** (`DECIDED — ADOPTED BY MORRIS`) |
| **Date initiale** | 2026-07-28 20:36:49 CEST (+0200) |
| **Date réévaluation O2** | 2026-07-28 20:54:03 CEST (+0200) |
| **Verdict avant** | `F03.3 PARTIALLY SATISFIED — BLOCKERS IDENTIFIED` |
| **Verdict après O2** | `F03.3 PARTIALLY SATISFIED — BLOCKERS REDUCED` |
| **Verdict après lot 1** | `F03.3 PARTIALLY SATISFIED — IMPLEMENTATION BLOCKERS REDUCED` |
| **Prep technique O2** | autorisée par gate courant · **bornée** |
| **Prep au-delà / delivery / cutover** | `PROHIBITED` |
| **T-A7** | `NOT OPEN` |

---

## 1. Matrice de satisfaction (après O2)

| Critère F03.3 | Avant | Après | Preuve | Écart | Bloquant prep bornée ? | Bloquant lot dev ? |
|---------------|-------|-------|--------|-------|------------------------|--------------------|
| Inventaire legacy validé | SATISFIED | `SATISFIED — EVIDENCED` | Wave 1 | — | Non | Non (doc) |
| Dépendances actives confirmées | SATISFIED | `SATISFIED — EVIDENCED` | W1-D02 + probes | — | Non | Non (doc) |
| Candidats retrait identifiés | SATISFIED | `SATISFIED — EVIDENCED` | W1-D03 | — | Non | Non |
| Plan W1-B | SATISFIED | `SATISFIED — EVIDENCED` | W1-D01 | — | Non | Non |
| Matrice P03–P11 qualifiée | SATISFIED (qualif) | `SATISFIED — EVIDENCED` (qualif + MAJ O2) | `02` | 5 MISSING runtime | Non | **Oui** si retrait |
| Isolation OPS1 définie | PARTIAL | `SATISFIED — EVIDENCED` (design+validation tech) | `03` validé O2 | **non implémentée** | Non pour doc | **Oui** avant retrait |
| F11 décidée | SATISFIED | `SATISFIED — EVIDENCED` | F11.2 | ≠ API | Non | **Oui** cutover |
| F13 décidée | SATISFIED | `SATISFIED — EVIDENCED` | F13.4 | ≠ RO | Non | **Oui** retrait |
| Rollback documenté | SATISFIED (doc) | `SATISFIED — EVIDENCED` (doc) | `04` | NOT TESTED R1–R3 | Non doc | **Oui** cutover |
| Preuves non-régression candidates | PARTIAL | `PARTIAL — EVIDENCED` | `05` + O2 | F11/F13/E-RB-02 MISSING | Partiel | **Oui** |
| Anti-bypass | SATISFIED | `SATISFIED — EVIDENCED` | `06` | holds doc | Non | Non |
| HARD non ignoré | SATISFIED (non-ignorance) | `SATISFIED — EVIDENCED` | HARD OPEN HARD | non fermé | Non O2 | **Oui** delivery/real-exec |

---

## 2. Lecture du verdict après O2

### Pourquoi `BLOCKERS REDUCED`

- contrat OPS1 **validé techniquement** (static + allowlist + asymétrie) ;
- E-OPS-03 / E-OPS-05 / E-PER-01 / E-CP-* avancés ;
- P03/P04/P10 preuves approfondies ;
- absences F11/F13/hold **prouvées** (clarifie le backlog).

### Pourquoi pas `F03.3 SATISFIED — EVIDENCED`

- P06–P09 / P11 toujours `MISSING` pour capacités runtime ;
- F11.2 / F13.4 non disponibles ;
- rollback R1–R3 non testé ;
- HARD / B5 / R1 / R-M01 ouverts ;
- E-OPS-03 live dynamique limité environnement.

### Conséquence

- O2 courant : preuves collectées · **pas** d’ouverture T-A7 ;
- O3 développement borné : **non supporté** par les preuves restantes.

---

## 3. Blockers levés / restants

### Levés ou réduits

| Blocker | Effet |
|---------|-------|
| OPS1 design non confronté au code | → validé tech, pas implémenté |
| E-OPS-03 UNKNOWN | → PARTIAL static |
| E-OPS-05 UNKNOWN | → NO LOCAL HITS limited |
| E-PER-01 UNKNOWN | → volumes locaux agrégés |
| Asymétrie path-policy non testée | → QUALIFIED |

### Restants

1. Implémentation isolation OPS1 (future — hors O2).
2. P06–P09 / P11 capacités runtime.
3. API F11.2 / vue F13.4.
4. Hold MethodMode (E-MM-03).
5. HARD / B5 / R1 / R-M01.
6. Rollback drills R1–R3.
7. Preuves production (volumes / hits).

---

## 4. Anti-claims

- BLOCKERS REDUCED ≠ T-A7 OPEN ;
- validation contrat ≠ implémentation ;
- O2 ≠ développement fonctionnel.

---

## 5. Verdict

`F03.3 PARTIALLY SATISFIED — BLOCKERS REDUCED`


---

## LOT 1 VERDICT

`F03.3 PARTIALLY SATISFIED — IMPLEMENTATION BLOCKERS REDUCED`

Motifs de non-SATISFIED : P06–P09/P11 non verts pour remplacement ; HARD/B5 ouverts ; F11/F13 non finales ; rollback R1–R3 non testés.
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/08-morris-t-a7-opening-decision-pack.md`

```markdown
# 08 — Morris decision pack — ouverture T-A7

| Champ | Valeur |
|-------|--------|
| **O3** | `DECIDED — ADOPTED BY MORRIS` |
| **T-A7** | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` |
| **Date** | 2026-07-28 21:19:12 CEST (+0200) |
| **Delivery / cutover** | `NOT AUTHORIZED` |
| **B5 / R1 / R-M01 / HARD** | `OPEN` / `OPEN` / `OPEN` / `OPEN HARD` |

## O3 ENREGISTRÉE

Périmètre lot 1 : MethodMode hold · F11.2 RO · F13.4 RO foundation.

Options historiques O1/O2/O4 : non retenues pour cette ouverture.

**Aucune** présélection pour le lot suivant.

## Gate candidat

`GO REVIEW T-A7 FIRST BOUNDED DEVELOPMENT LOT — ASSESS PR READINESS FOR METHODMODE HOLD F11.2 READINESS FOUNDATION AND F13.4 READ-ONLY FOUNDATION — NO DELIVERY OR CUTOVER`

`NOT CONSUMED`
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/09-bounded-technical-preparation-results.md`

```markdown
# 09 — Bounded technical preparation results (O2)

| Champ | Valeur |
|-------|--------|
| **Document** | `09-bounded-technical-preparation-results.md` |
| **Gate** | `GO ADDRESS T-A7 TECHNICAL READINESS BLOCKERS — AUTHORIZE BOUNDED TECHNICAL PREPARATION FOR OPS1 VALIDATION EVIDENCE COLLECTION AND P03-P11 GAP REDUCTION ONLY — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Option** | **O2** — préparation technique bornée uniquement |
| **Date/heure/fuseau** | 2026-07-28 20:54:03 CEST (+0200) |
| **HEAD framing parent** | `a33f4a32c09a6a4e58a32f7a42a07ea05fbcd563` |
| **T-A7** | `NOT OPEN` |
| **Développement fonctionnel** | **non** |

---

## 1. Campagne exécutée

| Phase | Contenu |
|-------|---------|
| A | inventaire tests / sources |
| B | plan probes (fichiers ci-dessous) |
| C | scope validation (tests only) |
| D | exécution vitest non destructive |
| E | analyse + volumes locaux agrégés |
| F | mise à jour pack |

### Fichiers techniques autorisés (avant commit)

| Fichier | Preuve | Réversibilité | Risque |
|---------|--------|---------------|--------|
| `__tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts` | E-OPS-03 static / P10 | git revert | faible |
| `__tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts` | E-OPS-05 | git revert | faible |
| `__tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts` | asymétrie policy/loader | git revert | faible |
| `__tests__/platform/t-a7-canonical-consumers.probe.test.ts` | E-CP-02/03 · P03 | git revert | faible |
| `__tests__/platform/t-a7-local-volume.probe.test.ts` | E-PER-01 | git revert | faible |
| `__tests__/platform/t-a7-f11-f13-absence.probe.test.ts` | F11/F13 absence · E-MM-03 | git revert | faible |

**Aucun** fichier produit · API · UI · migration · `method/**` · OPS1/MethodMode fonctionnel.

---

## 2. Environnement

| Élément | Valeur |
|---------|--------|
| OS | darwin 25.6.0 |
| CWD tests | `…/sfia-workspace-t-a7-technical-readiness/projects/sfia-studio/app` |
| Runner | vitest 3.2.7 |
| node_modules | symlink temporaire vers checkout principal (retiré avant commit) |
| Réseau | non utilisé |
| Production | non |

---

## 3. Commandes exécutées

```text
npm test -- \
  __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts \
  __tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts \
  __tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts \
  __tests__/platform/t-a7-canonical-consumers.probe.test.ts \
  __tests__/platform/t-a7-local-volume.probe.test.ts \
  __tests__/platform/t-a7-f11-f13-absence.probe.test.ts \
  __tests__/platform/import-boundaries.test.ts \
  __tests__/ops1/allowlistEvaluation.test.ts \
  __tests__/ops1/sfia/canonicalEngine.test.ts \
  __tests__/oa/project/antiLegacy.test.ts \
  __tests__/oa/doctrine/antiLegacy.test.ts \
  __tests__/d1/project-foundation.test.ts
```

**Résultat :** 12 files · **63 tests passed** · durée ~1.96s · exit 0.

**Non exécutés :** e2e Playwright OPS1 I1–I6 (nécessite browser/env ; hors besoin minimal de cette campagne) · `next build` (pas de code produit) · lint global (tests only).

---

## 4. Résultats par preuve

| ID | Verdict campagne | Détail |
|----|------------------|--------|
| E-OPS-03 | `PARTIAL — EVIDENCED` | 0 imports statiques OPS1↔OA, OPS1↔D1, D1↔OPS1 ; surface D1 intake sans import OPS1 ; pas de probe d’appels dynamiques live |
| E-OPS-05 | `NO LOCAL HITS — LIMITED EVIDENCE` | 0 clés `method/` dans policy ; tous chemins method/ échantillonnés DENIED/INVALID (read/modify/create) |
| E-CP-02 | `PARTIAL — EVIDENCED` | consommateurs platform + wrappers OPS1 `lib/ops1/sfia/*` |
| E-CP-03 | `PARTIAL — EVIDENCED` | OA n’importe pas `method/` ; loader refuse hors allowlist ; fallback produit global non prouvé absente au runtime |
| Path-policy/loader | `ASYMMETRY QUALIFIED — NO POLICY CHANGE AUTHORIZED` | CT deny method/ · loader lit cores allowlistés · digest OK |
| E-PER-01 | `LOCAL VOLUME EVIDENCE COLLECTED — PRODUCTION UNKNOWN` | worktree : sqlite absents ; checkout principal local : ops1.sqlite 2 277 376 B / 14 tables / 4615 rows agg ; d1.sqlite 360 448 B / 4 tables / 909 rows — **métriques agrégées seulement** |
| E-MM-03 | `MISSING — EVIDENCED` | aucun hold flag MethodMode dans `lib/d1` |
| F11.2 | absence prouvée | aucune route readiness/cutover/methodmode |
| F13.4 | absence prouvée | aucun module legacy-history / RO runtime |

---

## 5. Import boundaries / cross-call / allowlist / asymétrie

| Axe | Résultat |
|-----|----------|
| Import boundaries (existant + probe) | D1↛OPS1 · platform↛D1/OPS1 · OA↛OPS1 · OPS1↛OA — **verts** |
| Cross-call runtime | couche **statique** verte ; live session **non instrumentée** → PARTIAL |
| Hits allowlist method/ | **aucun** hit policy ; denials structurels — limited local evidence |
| Path-policy vs loader | asymétrie **qualifiée** · **aucun** changement de policy |

---

## 6. Volumes

`LOCAL VOLUME EVIDENCE COLLECTED — PRODUCTION UNKNOWN`

Limite : données dans `.sfia-exec` du checkout principal (gitignored), absentes du worktree. Non extrapolable production.

---

## 7. P03–P11 avant → après

| ID | Avant | Après | Motif |
|----|-------|-------|-------|
| P03 | PARTIAL | `PARTIAL — EVIDENCED` (renforcé) | consumers + digest + closed list |
| P04 | PARTIAL | `PARTIAL — EVIDENCED` (renforcé) | loader digest tests verts |
| P05 | PARTIAL | `PARTIAL — EVIDENCED` | inchangé structurellement ; OA sans import method |
| P06 | MISSING | `MISSING — EVIDENCED` | pas de session OA remplacement |
| P07 | MISSING | `MISSING — EVIDENCED` | MethodMode actif ; hold absent |
| P08 | MISSING | `MISSING — EVIDENCED` (gap réduit partiellement) | lectures method via loader allowlist toujours actives |
| P09 | MISSING | `MISSING — EVIDENCED` | UI OA absente |
| P10 | PARTIAL | `PARTIAL — EVIDENCED` (renforcé) | isolation static OPS1 validée |
| P11 | MISSING | `MISSING — EVIDENCED` | F13.4 runtime absente (prouvé) |

---

## 8. Contrat OPS1

**Verdict :** `OPS1 ISOLATION CONTRACT VALIDATED FOR FUTURE IMPLEMENTATION — NOT IMPLEMENTED`

Axes : cohérence code ✓ · testabilité ✓ · réversibilité ✓ · path-policy≠IAM ✓.

Résiduels : probe live dynamique optionnelle ; surface partagée D1/platform documentée ≠ identité commune ; wrappers TEMP à conserver jusqu’à gate dédié.

**Pas** une décision Morris d’implémentation.

---

## 9. Rollback

| Action | Mécanisme |
|--------|-----------|
| Tests/probes | `git revert` du commit evidence |
| Symlink node_modules | retiré avant commit |
| DB | **aucune** écriture campagne (lectures RO agrégées hors worktree) |

---

## 10. Findings

| Sévérité | Finding |
|----------|---------|
| Info | Asymétrie path-policy deny vs loader allow — confirmée par tests |
| Info | Volumes locaux disponibles hors worktree seulement |
| Info | Hold MethodMode absent (E-MM-03) |
| None Critical/Major produit | — |

---

## 11. Verdict section

`BOUNDED TECHNICAL PREPARATION CAMPAIGN COMPLETED — 63 TESTS PASSED — BLOCKERS REDUCED WITHOUT PRODUCT IMPLEMENTATION — T-A7 NOT OPEN`


## LOT 1 FOLLOW-ON

O3 adopté · fondations implémentées localement · voir `10`.
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/10-t-a7-first-bounded-development-lot.md`

```markdown
# 10 — T-A7 first bounded development lot (O3)

| Champ | Valeur |
|-------|--------|
| **Gate** | `GO DECIDE T-A7 OPENING — SELECT O3 FOR A FIRST BOUNDED DEVELOPMENT LOT LIMITED TO METHODMODE HOLD F11.2 READINESS CONTRACT AND F13.4 READ-ONLY FOUNDATION — NO DELIVERY OR CUTOVER — KEEP B5 R1 R-M01 AND HARD OPEN` |
| **Décision** | **O3** — `DECIDED — ADOPTED BY MORRIS` |
| **T-A7** | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` |
| **Date/heure/fuseau** | 2026-07-28 21:19:12 CEST (+0200) |
| **Parent commit** | `014103777ef620cfd1ca2520455d7e98a85530e3` |
| **Delivery / cutover** | `NOT AUTHORIZED` |

## Scope exact

| Inclus | Exclu |
|--------|-------|
| MethodMode hold (évaluation) | Migration / schéma DB |
| F11.2 readiness read-only interne | Route HTTP / UI admin |
| F13.4 fondation historique RO | Vue runtime complète / ACL / IAM |
| Tests + docs pack | `method/**` · OPS1 fonctionnel · delivery |

## Architecture minimale

```
lib/d1/methodModeHold.ts          → hold + gate selectMethodMode
lib/d1/operationalReadiness.ts    → F11.2 query (compose hold + history)
lib/d1/commands.ts                → assert hold before transition
lib/platform/t-a7/boundedHistoryRead.ts → F13.4 provider documentary/Git refs
```

Couplage lecture : F11.2 → hold + F13 page summary. Aucune mutation croisée.

## MethodMode hold

- Défaut **ACTIVE** avec raisons : B5 · R1 · R-M01 · HARD · T-A7 lot · F11 incomplete · F13 incomplete.
- `selectMethodMode` refuse si hold actif (`D1Error CONFLICT`).
- Overrides **TEST ONLY**.
- Anti-claim : hold ≠ blockers fermés · ≠ IAM.

## F11.2

- `queryOperationalReadiness()` snapshot frozen · `mutable/adminUi/writeCommands=false`.
- Expose hold, blockers, deps canoniques, migration NOT_STARTED, health SIMULATED, history summary.
- Verdict surface : `F11.2 READINESS FOUNDATION IMPLEMENTED — READ-ONLY — NO ADMIN UI — NOT CUTOVER COMPLETE`

## F13.4

- Provider documentary seed + unavailable provider.
- Max 50 items · immutable · `gitCanonical=true`.
- Verdict surface : `F13.4 READ-ONLY FOUNDATION IMPLEMENTED — GIT REMAINS CANONICAL — NO MIGRATION OR FINAL RUNTIME VIEW`

## Sécurité / données

- Pas de PII · métadonnées packs/Git seulement · pas d’élargissement path-policy · path-policy ≠ IAM.

## Tests

- hold · readiness · history · integration · foundation · intake-c4 (hold override) · probes O2 · import-boundaries
- **93 passed** (suite d1 + probes ciblés) · typecheck OK

## Limitations / blockers restants

- B5/R1/R-M01/HARD OPEN
- Pas d’API HTTP F11 · pas de vue finale F13 · pas de hold persistant DB
- P06–P11 non SATISFIED remplacement OA
- F03.3 reste partielle

## Rollback

`git revert` du commit lot 1.

## Anti-claims

- T-A7 borné ≠ fully open · lot ≠ delivery · hold ≠ fermeture réserves · F11/F13 fondations ≠ finales.

## Verdict

`T-A7 FIRST BOUNDED DEVELOPMENT LOT IMPLEMENTED LOCALLY — O3 DECISION RECORDED — METHODMODE HOLD · F11.2 · F13.4 FOUNDATIONS — TESTS PASS — NO DELIVERY OR CUTOVER`
```

## Résultats validation

- vitest: 16 files / 93 tests passed
- typecheck: OK
- eslint ciblé: OK (0 errors)
- build: non exécuté (pas de route/UI Next nécessaire)

## Gouvernance

O3 DECIDED · T-A7 OPEN bounded lot only · B5/R1/R-M01 OPEN · HARD OPEN HARD · delivery/cutover NOT AUTHORIZED · persistence/IAM NOT SELECTED · RGPD NOT VALIDATED · T-A6 NOT DECLARED · Option A NOT COMPLETE

## Actions non exécutées

push/PR/merge · migration · IAM · UI · method/** · OPS1 fonctionnel · delivery/cutover · Notion/CMP

## Findings

Info only — hold défaut casse les tests legacy sans override (corrigé dans foundation/intake-c4). Aucun Critical/Major ouvert.

## Diff complet utile

```diff
commit 47e26fdc851b82588aa5225aca84307543147160
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Tue Jul 28 21:20:08 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Tue Jul 28 21:20:08 2026 +0200

    feat(sfia-studio): implement T-A7 bounded readiness foundations

    Co-authored-by: Cursor <cursoragent@cursor.com>
---
 .../sfia-studio/app/__tests__/d1/intake-c4.test.ts |   7 +
 .../app/__tests__/d1/project-foundation.test.ts    |  11 +-
 .../app/__tests__/d1/t-a7-method-mode-hold.test.ts | 102 +++++++++++
 .../d1/t-a7-operational-readiness.test.ts          |  72 ++++++++
 .../ops1/t-a7-allowlist-method-hits.probe.test.ts  |   3 +-
 .../platform/t-a7-bounded-history.test.ts          |  57 ++++++
 .../platform/t-a7-f11-f13-absence.probe.test.ts    |  90 +++-------
 projects/sfia-studio/app/lib/d1/commands.ts        |   2 +
 projects/sfia-studio/app/lib/d1/index.ts           |   2 +
 projects/sfia-studio/app/lib/d1/methodModeHold.ts  | 163 +++++++++++++++++
 .../sfia-studio/app/lib/d1/operationalReadiness.ts | 175 ++++++++++++++++++
 .../app/lib/platform/t-a7/boundedHistoryRead.ts    | 197 +++++++++++++++++++++
 .../sfia-studio/app/lib/platform/t-a7/index.ts     |   2 +
 .../02-p03-p11-readiness-matrix.md                 |  16 ++
 .../05-evidence-and-non-regression-plan.md         |  12 ++
 .../06-holds-and-stop-conditions.md                |  14 +-
 .../07-f03-3-satisfaction-assessment.md            |  12 +-
 .../08-morris-t-a7-opening-decision-pack.md        | 115 ++----------
 .../09-bounded-technical-preparation-results.md    |   5 +
 .../10-t-a7-first-bounded-development-lot.md       |  77 ++++++++
 .../t-a7-technical-readiness-framing/README.md     |  71 +++-----
 21 files changed, 980 insertions(+), 225 deletions(-)

diff --git a/projects/sfia-studio/app/__tests__/d1/intake-c4.test.ts b/projects/sfia-studio/app/__tests__/d1/intake-c4.test.ts
index bb35e9f..d39db63 100644
--- a/projects/sfia-studio/app/__tests__/d1/intake-c4.test.ts
+++ b/projects/sfia-studio/app/__tests__/d1/intake-c4.test.ts
@@ -17,6 +17,10 @@ import {
   resetD1DbForTests,
   selectMethodMode,
 } from "@/lib/d1/commands";
+import {
+  resetMethodModeHoldForTests,
+  setMethodModeHoldForTests,
+} from "@/lib/d1/methodModeHold";

 describe("D1-C4 confirmation contracts", () => {
   it("allowlists actionType and requires explicit confirmation", () => {
@@ -86,12 +90,15 @@ describe("D1-C4 bounded mutations", () => {

   beforeEach(() => {
     resetD1DbForTests();
+    resetMethodModeHoldForTests();
+    setMethodModeHoldForTests({ active: false, reasons: [] });
     tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "d1-c4-"));
     process.env.D1_SQLITE_PATH = path.join(tmpDir, "d1.sqlite");
   });

   afterEach(() => {
     resetD1DbForTests();
+    resetMethodModeHoldForTests();
     delete process.env.D1_SQLITE_PATH;
     fs.rmSync(tmpDir, { recursive: true, force: true });
   });
diff --git a/projects/sfia-studio/app/__tests__/d1/project-foundation.test.ts b/projects/sfia-studio/app/__tests__/d1/project-foundation.test.ts
index 79c20bd..4b3e17a 100644
--- a/projects/sfia-studio/app/__tests__/d1/project-foundation.test.ts
+++ b/projects/sfia-studio/app/__tests__/d1/project-foundation.test.ts
@@ -1,6 +1,6 @@
 import { describe, expect, it, beforeEach, afterEach } from "vitest";
 import fs from "node:fs";
-import os from "node:fs";
+import os from "node:os";
 import path from "node:path";
 import {
   assertMethodMode,
@@ -15,6 +15,10 @@ import {
   resetD1DbForTests,
   selectMethodMode,
 } from "@/lib/d1/commands";
+import {
+  resetMethodModeHoldForTests,
+  setMethodModeHoldForTests,
+} from "@/lib/d1/methodModeHold";

 describe("d1 domain", () => {
   it("accepts authorized method modes", () => {
@@ -51,12 +55,15 @@ describe("d1 repository commands", () => {

   beforeEach(() => {
     resetD1DbForTests();
-    tmpDir = fs.mkdtempSync(path.join(require("node:os").tmpdir(), "d1-i1-"));
+    resetMethodModeHoldForTests();
+    setMethodModeHoldForTests({ active: false, reasons: [] });
+    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "d1-i1-"));
     process.env.D1_SQLITE_PATH = path.join(tmpDir, "d1.sqlite");
   });

   afterEach(() => {
     resetD1DbForTests();
+    resetMethodModeHoldForTests();
     delete process.env.D1_SQLITE_PATH;
     fs.rmSync(tmpDir, { recursive: true, force: true });
   });
diff --git a/projects/sfia-studio/app/__tests__/d1/t-a7-method-mode-hold.test.ts b/projects/sfia-studio/app/__tests__/d1/t-a7-method-mode-hold.test.ts
new file mode 100644
index 0000000..6c15def
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/d1/t-a7-method-mode-hold.test.ts
@@ -0,0 +1,102 @@
+/** @vitest-environment node */
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { createProject, selectMethodMode } from "@/lib/d1/commands";
+import { resetD1DbForTests } from "@/lib/d1/db";
+import { D1Error } from "@/lib/d1/errors";
+import {
+  assertMethodModeTransitionAllowed,
+  decideMethodModeTransition,
+  getDefaultMethodModeHoldState,
+  readMethodModeHold,
+  resetMethodModeHoldForTests,
+  setMethodModeHoldForTests,
+} from "@/lib/d1/methodModeHold";
+
+describe("T-A7 lot1 MethodMode hold", () => {
+  let tmpDir: string;
+
+  beforeEach(() => {
+    resetD1DbForTests();
+    resetMethodModeHoldForTests();
+    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "d1-hold-"));
+    process.env.D1_SQLITE_PATH = path.join(tmpDir, "d1.sqlite");
+  });
+
+  afterEach(() => {
+    resetD1DbForTests();
+    resetMethodModeHoldForTests();
+    delete process.env.D1_SQLITE_PATH;
+    fs.rmSync(tmpDir, { recursive: true, force: true });
+  });
+
+  it("defaults to an active conservative hold with structured reasons", () => {
+    const hold = getDefaultMethodModeHoldState();
+    expect(hold.active).toBe(true);
+    expect(hold.reasons.length).toBeGreaterThanOrEqual(7);
+    expect(hold.reasons.map((r) => r.code)).toEqual(
+      expect.arrayContaining([
+        "B5_OPEN",
+        "R1_OPEN",
+        "R_M01_OPEN",
+        "HARD_OPEN",
+        "T_A7_BOUNDED_LOT_ACTIVE",
+        "F11_2_INCOMPLETE",
+        "F13_4_INCOMPLETE",
+      ]),
+    );
+  });
+
+  it("blocks transitions while hold is active", () => {
+    const decision = decideMethodModeTransition();
+    expect(decision.allowed).toBe(false);
+    expect(decision.decision).toBe("BLOCK");
+    expect(() => assertMethodModeTransitionAllowed()).toThrow(D1Error);
+
+    const { project } = createProject({
+      name: "Hold Block",
+      objective: "cannot switch",
+      methodMode: "SFIA_V2_6",
+      activate: false,
+      idempotencyKey: "hold-block-1",
+    });
+    expect(() =>
+      selectMethodMode({
+        projectId: project.projectId,
+        methodMode: "TRANSITION",
+        expectedVersion: project.version,
+      }),
+    ).toThrow(/hold/i);
+  });
+
+  it("allows transitions when hold is inactive (test override)", () => {
+    setMethodModeHoldForTests({ active: false, reasons: [] });
+    const decision = decideMethodModeTransition();
+    expect(decision.allowed).toBe(true);
+    expect(decision.decision).toBe("ALLOW");
+
+    const { project } = createProject({
+      name: "Hold Allow",
+      objective: "can switch",
+      methodMode: "SFIA_V2_6",
+      activate: false,
+      idempotencyKey: "hold-allow-1",
+    });
+    const updated = selectMethodMode({
+      projectId: project.projectId,
+      methodMode: "TRANSITION",
+      expectedVersion: project.version,
+      activate: true,
+    });
+    expect(updated.methodMode).toBe("TRANSITION");
+  });
+
+  it("readMethodModeHold is deterministic for reason codes", () => {
+    const a = readMethodModeHold("2026-07-28T19:00:00.000Z");
+    const b = readMethodModeHold("2026-07-28T19:00:00.000Z");
+    expect(a.reasons.map((r) => r.code)).toEqual(b.reasons.map((r) => r.code));
+    expect(a.active).toBe(b.active);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts b/projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts
new file mode 100644
index 0000000..d29fe3b
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/d1/t-a7-operational-readiness.test.ts
@@ -0,0 +1,72 @@
+/** @vitest-environment node */
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import {
+  assertOperationalReadinessReadOnly,
+  queryOperationalReadiness,
+} from "@/lib/d1/operationalReadiness";
+import {
+  resetMethodModeHoldForTests,
+  setMethodModeHoldForTests,
+} from "@/lib/d1/methodModeHold";
+import {
+  createUnavailableBoundedHistoryProvider,
+} from "@/lib/platform/t-a7/boundedHistoryRead";
+
+describe("T-A7 lot1 F11.2 operational readiness", () => {
+  beforeEach(() => {
+    resetMethodModeHoldForTests();
+  });
+
+  afterEach(() => {
+    resetMethodModeHoldForTests();
+  });
+
+  it("returns a frozen read-only snapshot with hold and blockers", () => {
+    const snap = queryOperationalReadiness();
+    expect(snap.schemaVersion).toBe("t-a7-f11.2-lot1");
+    expect(snap.mutable).toBe(false);
+    expect(snap.adminUi).toBe(false);
+    expect(snap.writeCommands).toBe(false);
+    expect(snap.observed.hold.active).toBe(true);
+    expect(snap.observed.openBlockers.length).toBeGreaterThan(0);
+    expect(snap.decision).toBe("BLOCK");
+    expect(snap.authorization).toBe("NOT_AUTHORIZED_WHEN_HOLD_ACTIVE");
+    expect(snap.observed.migration.status).toBe("NOT_STARTED");
+    expect(snap.observed.health.status).toBe("SIMULATED");
+    expect(snap.observed.history.gitCanonical).toBe(true);
+    assertOperationalReadinessReadOnly(snap);
+    expect(() => {
+      // @ts-expect-error intentional mutation attempt
+      snap.mutable = true;
+    }).toThrow();
+  });
+
+  it("serializes stably for core contract fields", () => {
+    const snap = queryOperationalReadiness();
+    const json = JSON.stringify({
+      schemaVersion: snap.schemaVersion,
+      mutable: snap.mutable,
+      writeCommands: snap.writeCommands,
+      adminUi: snap.adminUi,
+      decision: snap.decision,
+      blockers: snap.observed.openBlockers,
+    });
+    expect(json).toContain("t-a7-f11.2-lot1");
+    expect(json).toContain("B5_OPEN");
+  });
+
+  it("exposes UNKNOWN/partial history when provider unavailable", () => {
+    const snap = queryOperationalReadiness({
+      historyProvider: createUnavailableBoundedHistoryProvider(),
+    });
+    expect(snap.observed.history.availability).toBe("NOT_AVAILABLE");
+    expect(snap.observed.history.returned).toBe(0);
+  });
+
+  it("reflects inactive hold without recommending keep", () => {
+    setMethodModeHoldForTests({ active: false, reasons: [] });
+    const snap = queryOperationalReadiness();
+    expect(snap.decision).toBe("ALLOW");
+    expect(snap.recommendation).toBe("NO_RECOMMENDATION");
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts b/projects/sfia-studio/app/__tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts
index 6293b04..0b58506 100644
--- a/projects/sfia-studio/app/__tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts
+++ b/projects/sfia-studio/app/__tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts
@@ -5,7 +5,6 @@
  * Does not persist, does not mutate workspace files, does not call network.
  */
 import os from "node:os";
-import path from "node:path";
 import { describe, expect, it } from "vitest";
 import {
   CAMPUS360_ALLOWLIST_POLICY,
@@ -41,7 +40,7 @@ describe("T-A7 probe — allowlist method/ hits (E-OPS-05)", () => {
     }> = [];

     for (const candidate of METHOD_CANDIDATES) {
-      for (const mode of ["read", "modify", "create"] as const) {
+      for (const mode of ["READ", "MODIFY", "CREATE"] as const) {
         const result = evaluateAllowlist({
           actionCandidateId: ACTION_ID,
           actionVersion: 1,
diff --git a/projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts b/projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts
new file mode 100644
index 0000000..7668e30
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/platform/t-a7-bounded-history.test.ts
@@ -0,0 +1,57 @@
+/** @vitest-environment node */
+import { describe, expect, it } from "vitest";
+import {
+  BOUNDED_HISTORY_MAX_ITEMS,
+  assertBoundedHistoryImmutable,
+  createDocumentaryBoundedHistoryProvider,
+  createUnavailableBoundedHistoryProvider,
+  BoundedHistoryMutationError,
+} from "@/lib/platform/t-a7/boundedHistoryRead";
+import { queryOperationalReadiness } from "@/lib/d1/operationalReadiness";
+import { resetMethodModeHoldForTests } from "@/lib/d1/methodModeHold";
+
+describe("T-A7 lot1 F13.4 bounded history foundation", () => {
+  it("reads a bounded immutable documentary page with Git canonical", () => {
+    const provider = createDocumentaryBoundedHistoryProvider();
+    const page = provider.read({ limit: 2 });
+    expect(page.gitCanonical).toBe(true);
+    expect(page.mutable).toBe(false);
+    expect(page.availability).toBe("PARTIAL");
+    expect(page.returned).toBe(2);
+    expect(page.truncated).toBe(true);
+    expect(page.limit).toBe(2);
+    assertBoundedHistoryImmutable(page);
+  });
+
+  it("enforces max limit", () => {
+    const provider = createDocumentaryBoundedHistoryProvider();
+    const page = provider.read({ limit: 10_000 });
+    expect(page.limit).toBe(BOUNDED_HISTORY_MAX_ITEMS);
+    expect(page.returned).toBeLessThanOrEqual(BOUNDED_HISTORY_MAX_ITEMS);
+  });
+
+  it("supports unavailable provider without claiming full archive", () => {
+    const page = createUnavailableBoundedHistoryProvider().read();
+    expect(page.availability).toBe("NOT_AVAILABLE");
+    expect(page.items).toEqual([]);
+    expect(page.gitCanonical).toBe(true);
+  });
+
+  it("refuses mutation semantics via contract helper", () => {
+    const page = createDocumentaryBoundedHistoryProvider().read({ limit: 1 });
+    expect(() => assertBoundedHistoryImmutable(page)).not.toThrow(
+      BoundedHistoryMutationError,
+    );
+  });
+
+  it("integrates with F11.2 readiness without circular product writes", () => {
+    resetMethodModeHoldForTests();
+    const snap = queryOperationalReadiness({
+      historyProvider: createDocumentaryBoundedHistoryProvider(),
+      historyLimit: 1,
+    });
+    expect(snap.observed.history.returned).toBe(1);
+    expect(snap.observed.history.availability).toBe("PARTIAL");
+    expect(snap.writeCommands).toBe(false);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/platform/t-a7-f11-f13-absence.probe.test.ts b/projects/sfia-studio/app/__tests__/platform/t-a7-f11-f13-absence.probe.test.ts
index 5254fe9..d4432d9 100644
--- a/projects/sfia-studio/app/__tests__/platform/t-a7-f11-f13-absence.probe.test.ts
+++ b/projects/sfia-studio/app/__tests__/platform/t-a7-f11-f13-absence.probe.test.ts
@@ -1,8 +1,7 @@
 /** @vitest-environment node */
 /**
- * TEST/DIAGNOSTIC ONLY — T-A7 bounded preparation.
- * Proves F11.2 read/readiness API and F13.4 RO runtime view are ABSENT.
- * Does not invent architecture or implement product surfaces.
+ * TEST/DIAGNOSTIC ONLY — updated after T-A7 lot 1 foundations.
+ * Asserts foundations exist as bounded lot-1 modules (not final API/UI/cutover).
  */
 import fs from "node:fs";
 import path from "node:path";
@@ -10,71 +9,32 @@ import { describe, expect, it } from "vitest";

 const APP_ROOT = path.resolve(__dirname, "../..");

-function listFiles(dir: string, predicate: (name: string) => boolean): string[] {
-  if (!fs.existsSync(dir)) return [];
-  const out: string[] = [];
-  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
-    const full = path.join(dir, entry.name);
-    if (entry.isDirectory()) {
-      if (entry.name === "node_modules" || entry.name === ".next") continue;
-      out.push(...listFiles(full, predicate));
-    } else if (predicate(entry.name)) {
-      out.push(full);
-    }
-  }
-  return out;
-}
-
-describe("T-A7 probe — F11.2 / F13.4 absence (no product implementation)", () => {
-  it("finds no dedicated F11.2 readiness/cutover API route under app/", () => {
-    const appRouter = path.join(APP_ROOT, "app");
-    const routeFiles = listFiles(
-      appRouter,
-      (n) => n === "route.ts" || n === "route.js",
-    );
-    const readinessHits = routeFiles.filter((f) => {
-      const rel = path.relative(APP_ROOT, f).toLowerCase();
-      return (
-        rel.includes("readiness") ||
-        rel.includes("cutover") ||
-        rel.includes("method-mode") ||
-        rel.includes("methodmode")
-      );
-    });
-    expect(readinessHits).toEqual([]);
+describe("T-A7 lot1 foundation presence (bounded)", () => {
+  it("exposes MethodMode hold module", () => {
+    expect(
+      fs.existsSync(path.join(APP_ROOT, "lib/d1/methodModeHold.ts")),
+    ).toBe(true);
   });

-  it("finds no F13.4 legacy history read-only runtime module", () => {
-    const lib = path.join(APP_ROOT, "lib");
-    const tsFiles = listFiles(lib, (n) => /\.(ts|tsx)$/.test(n));
-    const hits = tsFiles.filter((f) => {
-      const rel = path.relative(APP_ROOT, f).toLowerCase();
-      return (
-        rel.includes("legacy-history") ||
-        rel.includes("legacy_history") ||
-        rel.includes("history-readonly") ||
-        rel.includes("f13")
-      );
-    });
-    expect(hits).toEqual([]);
+  it("exposes F11.2 operational readiness module (no HTTP route required)", () => {
+    expect(
+      fs.existsSync(path.join(APP_ROOT, "lib/d1/operationalReadiness.ts")),
+    ).toBe(true);
+    const appRouter = path.join(APP_ROOT, "app");
+    const hasReadinessRoute =
+      fs.existsSync(appRouter) &&
+      fs
+        .readdirSync(appRouter, { recursive: true })
+        .map(String)
+        .some((p) => /readiness|cutover/i.test(p) && /route\.ts$/.test(p));
+    expect(hasReadinessRoute).toBe(false);
   });

-  it("documents MethodMode hold flag absence (E-MM-03 contract gap)", () => {
-    const d1Files = listFiles(path.join(APP_ROOT, "lib/d1"), (n) =>
-      /\.(ts|tsx)$/.test(n),
-    );
-    const holdMentions: string[] = [];
-    for (const file of d1Files) {
-      const text = fs.readFileSync(file, "utf8");
-      if (
-        /CUTOVER_HOLD|METHODMODE_HOLD|holdFlag.*MethodMode|MethodMode.*hold/i.test(
-          text,
-        )
-      ) {
-        holdMentions.push(path.relative(APP_ROOT, file));
-      }
-    }
-    // Absence is evidence of MISSING hold capability — not a product defect to fix here.
-    expect(holdMentions).toEqual([]);
+  it("exposes F13.4 bounded history foundation under platform/t-a7", () => {
+    expect(
+      fs.existsSync(
+        path.join(APP_ROOT, "lib/platform/t-a7/boundedHistoryRead.ts"),
+      ),
+    ).toBe(true);
   });
 });
diff --git a/projects/sfia-studio/app/lib/d1/commands.ts b/projects/sfia-studio/app/lib/d1/commands.ts
index 38d6d1f..6a82de6 100644
--- a/projects/sfia-studio/app/lib/d1/commands.ts
+++ b/projects/sfia-studio/app/lib/d1/commands.ts
@@ -12,6 +12,7 @@ import {
   type SelectMethodModeInput,
 } from "./types";
 import { logD1 } from "./observability";
+import { assertMethodModeTransitionAllowed } from "./methodModeHold";

 export { resetD1DbForTests };

@@ -151,6 +152,7 @@ export function selectMethodMode(
   try {
     const actorId = requireMonoOperator();
     assertMethodMode(input.methodMode);
+    assertMethodModeTransitionAllowed();
     const current = repo.getProject(input.projectId);
     if (!current) {
       throw new D1Error("NOT_FOUND", "Projet introuvable.");
diff --git a/projects/sfia-studio/app/lib/d1/index.ts b/projects/sfia-studio/app/lib/d1/index.ts
index f4cc430..8ada524 100644
--- a/projects/sfia-studio/app/lib/d1/index.ts
+++ b/projects/sfia-studio/app/lib/d1/index.ts
@@ -1,4 +1,6 @@
 export * from "./types";
 export * from "./commands";
 export * from "./errors";
+export * from "./methodModeHold";
+export * from "./operationalReadiness";
 export { resetD1DbForTests } from "./db";
diff --git a/projects/sfia-studio/app/lib/d1/methodModeHold.ts b/projects/sfia-studio/app/lib/d1/methodModeHold.ts
new file mode 100644
index 0000000..c9fe3a3
--- /dev/null
+++ b/projects/sfia-studio/app/lib/d1/methodModeHold.ts
@@ -0,0 +1,163 @@
+/**
+ * T-A7 Lot 1 — MethodMode hold (evaluation-only, no schema migration).
+ * Default: ACTIVE while structural blockers remain open.
+ * TEST/DIAGNOSTIC overrides are test-only and must not ship as product IAM.
+ */
+
+import { D1Error } from "./errors";
+import { logD1 } from "./observability";
+
+export const METHOD_MODE_HOLD_REASON_CODES = [
+  "B5_OPEN",
+  "R1_OPEN",
+  "R_M01_OPEN",
+  "HARD_OPEN",
+  "T_A7_BOUNDED_LOT_ACTIVE",
+  "F11_2_INCOMPLETE",
+  "F13_4_INCOMPLETE",
+] as const;
+
+export type MethodModeHoldReasonCode =
+  (typeof METHOD_MODE_HOLD_REASON_CODES)[number];
+
+export interface MethodModeHoldReason {
+  code: MethodModeHoldReasonCode;
+  detail: string;
+}
+
+export interface MethodModeHoldState {
+  active: boolean;
+  reasons: readonly MethodModeHoldReason[];
+  evaluatedAt: string;
+  provenance: "governance-default" | "test-override";
+  completeness: "BOUNDED_LOT_1";
+}
+
+export interface MethodModeTransitionDecision {
+  allowed: boolean;
+  hold: MethodModeHoldState;
+  decision: "ALLOW" | "BLOCK";
+  authorization: "NOT_AUTHORIZED_WHEN_HOLD_ACTIVE" | "ALLOWED_WHEN_HOLD_INACTIVE";
+}
+
+const DEFAULT_REASONS: readonly MethodModeHoldReason[] = [
+  {
+    code: "B5_OPEN",
+    detail: "B5 remains OPEN — STOP BEFORE DELIVERY.",
+  },
+  {
+    code: "R1_OPEN",
+    detail: "R1 atomicity reserve remains OPEN.",
+  },
+  {
+    code: "R_M01_OPEN",
+    detail: "R-M01 ClaimEvaluator readiness remains OPEN.",
+  },
+  {
+    code: "HARD_OPEN",
+    detail: "HARD blockers remain OPEN HARD.",
+  },
+  {
+    code: "T_A7_BOUNDED_LOT_ACTIVE",
+    detail: "T-A7 OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY.",
+  },
+  {
+    code: "F11_2_INCOMPLETE",
+    detail: "F11.2 readiness foundation is incomplete vs cutover.",
+  },
+  {
+    code: "F13_4_INCOMPLETE",
+    detail: "F13.4 read-only foundation is incomplete vs final runtime view.",
+  },
+] as const;
+
+let testOverride: MethodModeHoldState | null = null;
+
+function nowIso(): string {
+  return new Date().toISOString();
+}
+
+export function getDefaultMethodModeHoldState(
+  evaluatedAt = nowIso(),
+): MethodModeHoldState {
+  return {
+    active: true,
+    reasons: DEFAULT_REASONS,
+    evaluatedAt,
+    provenance: "governance-default",
+    completeness: "BOUNDED_LOT_1",
+  };
+}
+
+export function readMethodModeHold(
+  evaluatedAt = nowIso(),
+): MethodModeHoldState {
+  if (testOverride) {
+    return {
+      ...testOverride,
+      evaluatedAt,
+      reasons: [...testOverride.reasons],
+    };
+  }
+  return getDefaultMethodModeHoldState(evaluatedAt);
+}
+
+export function decideMethodModeTransition(): MethodModeTransitionDecision {
+  const hold = readMethodModeHold();
+  if (hold.active && hold.reasons.length > 0) {
+    return {
+      allowed: false,
+      hold,
+      decision: "BLOCK",
+      authorization: "NOT_AUTHORIZED_WHEN_HOLD_ACTIVE",
+    };
+  }
+  return {
+    allowed: true,
+    hold,
+    decision: "ALLOW",
+    authorization: "ALLOWED_WHEN_HOLD_INACTIVE",
+  };
+}
+
+export function assertMethodModeTransitionAllowed(): MethodModeTransitionDecision {
+  const decision = decideMethodModeTransition();
+  if (!decision.allowed) {
+    const codes = decision.hold.reasons.map((r) => r.code).join(",");
+    logD1("method_mode_hold_blocked", {
+      status: "blocked",
+      reasonCount: decision.hold.reasons.length,
+      codes,
+    });
+    throw new D1Error(
+      "CONFLICT",
+      `MethodMode transition blocked by active hold (${codes}).`,
+    );
+  }
+  logD1("method_mode_hold_allowed", {
+    status: "allowed",
+    provenance: decision.hold.provenance,
+  });
+  return decision;
+}
+
+/** TEST ONLY — restore default conservative hold. */
+export function resetMethodModeHoldForTests(): void {
+  testOverride = null;
+}
+
+/** TEST ONLY — override hold state (e.g. inactive for legacy foundation tests). */
+export function setMethodModeHoldForTests(
+  state: Omit<MethodModeHoldState, "evaluatedAt" | "provenance" | "completeness"> &
+    Partial<
+      Pick<MethodModeHoldState, "evaluatedAt" | "provenance" | "completeness">
+    >,
+): void {
+  testOverride = {
+    active: state.active,
+    reasons: Object.freeze([...state.reasons]),
+    evaluatedAt: state.evaluatedAt ?? nowIso(),
+    provenance: state.provenance ?? "test-override",
+    completeness: state.completeness ?? "BOUNDED_LOT_1",
+  };
+}
diff --git a/projects/sfia-studio/app/lib/d1/operationalReadiness.ts b/projects/sfia-studio/app/lib/d1/operationalReadiness.ts
new file mode 100644
index 0000000..1ae8dea
--- /dev/null
+++ b/projects/sfia-studio/app/lib/d1/operationalReadiness.ts
@@ -0,0 +1,175 @@
+/**
+ * T-A7 Lot 1 — F11.2 minimal operational readiness (read-only, no UI, no HTTP required).
+ * Assembles observed state; never mutates MethodMode or history.
+ */
+
+import {
+  decideMethodModeTransition,
+  readMethodModeHold,
+  type MethodModeHoldState,
+  type MethodModeTransitionDecision,
+} from "@/lib/d1/methodModeHold";
+import {
+  defaultBoundedHistoryProvider,
+  type BoundedHistoryAvailability,
+  type BoundedHistoryPage,
+  type BoundedHistoryProvider,
+} from "@/lib/platform/t-a7/boundedHistoryRead";
+import {
+  METHOD_MODES,
+  type MethodMode,
+  type D1Project,
+} from "@/lib/d1/types";
+import { SFIA_CANONICAL_CORE_PATHS } from "@/lib/platform/sfia-context/canonicalPaths";
+
+export type ReadinessUnknown = "UNKNOWN";
+
+export interface OperationalReadinessLegacyDeps {
+  readonly methodModesAuthorized: readonly MethodMode[];
+  readonly canonicalCorePaths: readonly string[];
+  readonly methodCorePathCount: number;
+  readonly note: string;
+}
+
+export interface OperationalReadinessMigrationStatus {
+  readonly status: "NOT_STARTED" | ReadinessUnknown;
+  readonly detail: string;
+}
+
+export interface OperationalReadinessHealth {
+  readonly status: "SIMULATED" | ReadinessUnknown;
+  readonly detail: string;
+}
+
+export interface OperationalReadinessHistorySummary {
+  readonly availability: BoundedHistoryAvailability | ReadinessUnknown;
+  readonly returned: number;
+  readonly gitCanonical: true;
+  readonly completeness: "BOUNDED_LOT_1";
+}
+
+export interface OperationalReadinessSnapshot {
+  readonly schemaVersion: "t-a7-f11.2-lot1";
+  readonly evaluatedAt: string;
+  readonly timezoneNote: "timestamps are ISO-8601 UTC (Z)";
+  readonly completeness: "BOUNDED_LOT_1";
+  readonly observed: {
+    readonly projectId: string | null;
+    readonly methodMode: MethodMode | null;
+    readonly projectState: D1Project["state"] | null;
+    readonly hold: MethodModeHoldState;
+    readonly legacyDependencies: OperationalReadinessLegacyDeps;
+    readonly migration: OperationalReadinessMigrationStatus;
+    readonly health: OperationalReadinessHealth;
+    readonly history: OperationalReadinessHistorySummary;
+    readonly openBlockers: readonly string[];
+  };
+  readonly decision: MethodModeTransitionDecision["decision"];
+  readonly recommendation: "KEEP_HOLD" | "NO_RECOMMENDATION";
+  readonly authorization: MethodModeTransitionDecision["authorization"];
+  readonly mutable: false;
+  readonly adminUi: false;
+  readonly writeCommands: false;
+}
+
+export interface OperationalReadinessQueryInput {
+  readonly project?: D1Project | null;
+  readonly historyProvider?: BoundedHistoryProvider;
+  readonly historyLimit?: number;
+}
+
+function summarizeHistory(page: BoundedHistoryPage): OperationalReadinessHistorySummary {
+  return {
+    availability: page.availability,
+    returned: page.returned,
+    gitCanonical: true,
+    completeness: "BOUNDED_LOT_1",
+  };
+}
+
+export function queryOperationalReadiness(
+  input: OperationalReadinessQueryInput = {},
+): OperationalReadinessSnapshot {
+  const hold = readMethodModeHold();
+  const transition = decideMethodModeTransition();
+  const historyProvider = input.historyProvider ?? defaultBoundedHistoryProvider;
+  const historyPage = historyProvider.read({
+    limit: input.historyLimit ?? 10,
+  });
+  const project = input.project ?? null;
+  const methodCores = SFIA_CANONICAL_CORE_PATHS.filter((p) =>
+    p.startsWith("method/"),
+  );
+
+  const snapshot: OperationalReadinessSnapshot = {
+    schemaVersion: "t-a7-f11.2-lot1",
+    evaluatedAt: new Date().toISOString(),
+    timezoneNote: "timestamps are ISO-8601 UTC (Z)",
+    completeness: "BOUNDED_LOT_1",
+    observed: {
+      projectId: project?.projectId ?? null,
+      methodMode: project?.methodMode ?? null,
+      projectState: project?.state ?? null,
+      hold,
+      legacyDependencies: {
+        methodModesAuthorized: METHOD_MODES,
+        canonicalCorePaths: [...SFIA_CANONICAL_CORE_PATHS],
+        methodCorePathCount: methodCores.length,
+        note: "Observed allowlisted dependencies only; not a removal plan.",
+      },
+      migration: {
+        status: "NOT_STARTED",
+        detail: "No migration authorized in T-A7 lot 1.",
+      },
+      health: {
+        status: "SIMULATED",
+        detail: "No production readiness probe; simulated/local observation only.",
+      },
+      history: summarizeHistory(historyPage),
+      openBlockers: hold.reasons.map((r) => r.code),
+    },
+    decision: transition.decision,
+    recommendation: transition.allowed ? "NO_RECOMMENDATION" : "KEEP_HOLD",
+    authorization: transition.authorization,
+    mutable: false,
+    adminUi: false,
+    writeCommands: false,
+  };
+
+  return Object.freeze({
+    ...snapshot,
+    observed: Object.freeze({
+      ...snapshot.observed,
+      hold: Object.freeze({
+        ...snapshot.observed.hold,
+        reasons: Object.freeze([...snapshot.observed.hold.reasons]),
+      }),
+      legacyDependencies: Object.freeze({
+        ...snapshot.observed.legacyDependencies,
+        methodModesAuthorized: Object.freeze([
+          ...snapshot.observed.legacyDependencies.methodModesAuthorized,
+        ]),
+        canonicalCorePaths: Object.freeze([
+          ...snapshot.observed.legacyDependencies.canonicalCorePaths,
+        ]),
+      }),
+      migration: Object.freeze({ ...snapshot.observed.migration }),
+      health: Object.freeze({ ...snapshot.observed.health }),
+      history: Object.freeze({ ...snapshot.observed.history }),
+      openBlockers: Object.freeze([...snapshot.observed.openBlockers]),
+    }),
+  });
+}
+
+/** Contract guard: readiness snapshot exposes no write surface. */
+export function assertOperationalReadinessReadOnly(
+  snapshot: OperationalReadinessSnapshot,
+): void {
+  if (
+    snapshot.mutable !== false ||
+    snapshot.adminUi !== false ||
+    snapshot.writeCommands !== false
+  ) {
+    throw new Error("Operational readiness snapshot must remain read-only.");
+  }
+}
diff --git a/projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts b/projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts
new file mode 100644
index 0000000..2be059a
--- /dev/null
+++ b/projects/sfia-studio/app/lib/platform/t-a7/boundedHistoryRead.ts
@@ -0,0 +1,197 @@
+/**
+ * T-A7 Lot 1 — F13.4 bounded read-only history foundation.
+ * Git remains canonical. No migration, no durable store, no UI, no ACL/IAM.
+ */
+
+export const BOUNDED_HISTORY_MAX_ITEMS = 50 as const;
+
+export type BoundedHistoryAvailability =
+  | "PARTIAL"
+  | "NOT_AVAILABLE"
+  | "EMPTY";
+
+export type BoundedHistoryEntryStatus = "HISTORICAL" | "ACTIVE_REFERENCE";
+
+export interface BoundedHistoryEntry {
+  readonly id: string;
+  readonly category: string;
+  readonly status: BoundedHistoryEntryStatus;
+  readonly occurredAt: string;
+  readonly gitProvenance: {
+    readonly kind: "git-ref" | "documentary-pack" | "synthetic-fixture";
+    readonly ref: string;
+  };
+  readonly metadata: Readonly<Record<string, string>>;
+}
+
+export interface BoundedHistoryPage {
+  readonly availability: BoundedHistoryAvailability;
+  readonly items: readonly BoundedHistoryEntry[];
+  readonly limit: number;
+  readonly returned: number;
+  readonly truncated: boolean;
+  readonly gitCanonical: true;
+  readonly mutable: false;
+  readonly evaluatedAt: string;
+  readonly completeness: "BOUNDED_LOT_1";
+  readonly note: string;
+}
+
+export interface BoundedHistoryReadRequest {
+  readonly limit?: number;
+}
+
+export class BoundedHistoryMutationError extends Error {
+  readonly code = "MUTATION_FORBIDDEN" as const;
+  constructor(message = "F13.4 bounded history is read-only; mutation refused.") {
+    super(message);
+    this.name = "BoundedHistoryMutationError";
+  }
+}
+
+export interface BoundedHistoryProvider {
+  readonly read: (request?: BoundedHistoryReadRequest) => BoundedHistoryPage;
+}
+
+function freezeEntry(entry: BoundedHistoryEntry): BoundedHistoryEntry {
+  return Object.freeze({
+    ...entry,
+    gitProvenance: Object.freeze({ ...entry.gitProvenance }),
+    metadata: Object.freeze({ ...entry.metadata }),
+  });
+}
+
+function freezePage(page: BoundedHistoryPage): BoundedHistoryPage {
+  return Object.freeze({
+    ...page,
+    items: Object.freeze(page.items.map(freezeEntry)),
+  });
+}
+
+/** Documentary/Git references known from T-A7 packs — not a full archive. */
+const DOCUMENTARY_SEED: readonly BoundedHistoryEntry[] = Object.freeze([
+  freezeEntry({
+    id: "hist-t-a7-f03-f11-f13",
+    category: "decision-pack",
+    status: "HISTORICAL",
+    occurredAt: "2026-07-28T17:54:21.000Z",
+    gitProvenance: {
+      kind: "git-ref",
+      ref: "dad6e00344ad5750cd352db3af33c150c780491b",
+    },
+    metadata: {
+      pack: "t-a7-f03-f11-f13-documentary-arbitration",
+      pr: "285",
+    },
+  }),
+  freezeEntry({
+    id: "hist-t-a7-readme-post-merge",
+    category: "decision-pack",
+    status: "HISTORICAL",
+    occurredAt: "2026-07-28T18:17:54.000Z",
+    gitProvenance: {
+      kind: "git-ref",
+      ref: "2a3c59c46c105bae458d1a7329079c5f591da421",
+    },
+    metadata: {
+      pack: "t-a7-f03-f11-f13-documentary-arbitration",
+      pr: "286",
+    },
+  }),
+  freezeEntry({
+    id: "hist-t-a7-technical-readiness",
+    category: "readiness-pack",
+    status: "ACTIVE_REFERENCE",
+    occurredAt: "2026-07-28T18:40:10.000Z",
+    gitProvenance: {
+      kind: "documentary-pack",
+      ref: "projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/",
+    },
+    metadata: {
+      lot: "bounded-technical-preparation-o2",
+    },
+  }),
+]);
+
+export function createDocumentaryBoundedHistoryProvider(
+  seed: readonly BoundedHistoryEntry[] = DOCUMENTARY_SEED,
+): BoundedHistoryProvider {
+  const frozenSeed = Object.freeze(seed.map(freezeEntry));
+  return {
+    read(request: BoundedHistoryReadRequest = {}): BoundedHistoryPage {
+      const rawLimit = request.limit ?? BOUNDED_HISTORY_MAX_ITEMS;
+      if (!Number.isFinite(rawLimit) || rawLimit <= 0) {
+        throw new RangeError("limit must be a positive number");
+      }
+      const limit = Math.min(Math.floor(rawLimit), BOUNDED_HISTORY_MAX_ITEMS);
+      const slice = frozenSeed.slice(0, limit);
+      return freezePage({
+        availability: frozenSeed.length === 0 ? "EMPTY" : "PARTIAL",
+        items: slice,
+        limit,
+        returned: slice.length,
+        truncated: frozenSeed.length > slice.length,
+        gitCanonical: true,
+        mutable: false,
+        evaluatedAt: new Date().toISOString(),
+        completeness: "BOUNDED_LOT_1",
+        note: "Git remains canonical. This page is a bounded documentary/metadata view only.",
+      });
+    },
+  };
+}
+
+export function createUnavailableBoundedHistoryProvider(): BoundedHistoryProvider {
+  return {
+    read(request: BoundedHistoryReadRequest = {}): BoundedHistoryPage {
+      const rawLimit = request.limit ?? BOUNDED_HISTORY_MAX_ITEMS;
+      const limit = Math.min(
+        Math.max(1, Math.floor(Number.isFinite(rawLimit) ? rawLimit : 1)),
+        BOUNDED_HISTORY_MAX_ITEMS,
+      );
+      return freezePage({
+        availability: "NOT_AVAILABLE",
+        items: [],
+        limit,
+        returned: 0,
+        truncated: false,
+        gitCanonical: true,
+        mutable: false,
+        evaluatedAt: new Date().toISOString(),
+        completeness: "BOUNDED_LOT_1",
+        note: "Bounded history provider unavailable; Git remains canonical.",
+      });
+    },
+  };
+}
+
+/** Refuse mutation attempts against a frozen page (contract guard). */
+export function assertBoundedHistoryImmutable(page: BoundedHistoryPage): void {
+  if (page.mutable !== false || page.gitCanonical !== true) {
+    throw new BoundedHistoryMutationError(
+      "Bounded history page must declare mutable=false and gitCanonical=true.",
+    );
+  }
+  try {
+    // eslint-disable-next-line @typescript-eslint/no-explicit-any
+    (page as any).items = [];
+    throw new BoundedHistoryMutationError(
+      "Bounded history page was mutable unexpectedly.",
+    );
+  } catch (error) {
+    if (error instanceof BoundedHistoryMutationError) throw error;
+    // TypeError from frozen object — expected
+  }
+  try {
+    // eslint-disable-next-line @typescript-eslint/no-explicit-any
+    (page.items as any).push({});
+    throw new BoundedHistoryMutationError(
+      "Bounded history items array was mutable unexpectedly.",
+    );
+  } catch (error) {
+    if (error instanceof BoundedHistoryMutationError) throw error;
+  }
+}
+
+export const defaultBoundedHistoryProvider =
+  createDocumentaryBoundedHistoryProvider();
diff --git a/projects/sfia-studio/app/lib/platform/t-a7/index.ts b/projects/sfia-studio/app/lib/platform/t-a7/index.ts
new file mode 100644
index 0000000..d984ddd
--- /dev/null
+++ b/projects/sfia-studio/app/lib/platform/t-a7/index.ts
@@ -0,0 +1,2 @@
+/** Platform T-A7 bounded foundations (lot 1). */
+export * from "./boundedHistoryRead";
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/02-p03-p11-readiness-matrix.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/02-p03-p11-readiness-matrix.md
index 73db23e..af70284 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/02-p03-p11-readiness-matrix.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/02-p03-p11-readiness-matrix.md
@@ -80,3 +80,19 @@ P06 · P07 · P08 · P09 · P11
 ## 5. Verdict section

 `P03–P11 REASSESSED AFTER O2 — 0 SATISFIED / 4 PARTIAL / 5 MISSING — GAPS REDUCED ON EVIDENCE DEPTH — NO AUTHORIZATION`
+
+
+---
+
+## 8. Lot 1 update (O3)
+
+| ID | Effet lot 1 |
+|----|-------------|
+| P06 | hold/transition control **PARTIAL** (hold actif ; session OA remplacement toujours MISSING) |
+| P07 | MethodMode **toujours présent** ; retrait toujours MISSING ; hold empêche transition prématurée |
+| P08 | lectures method allowlist toujours actives — MISSING remplacement |
+| P09 | UI OA absente — MISSING |
+| P10 | OPS1 isolation inchangée (pas de mod OPS1) |
+| P11 | fondation F13.4 RO **PARTIAL** (métadonnées) — pas enforcement produit final |
+
+`0 SATISFIED remplacement OA` conservé. Progression = contrôles/fondations, pas cutover.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/05-evidence-and-non-regression-plan.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/05-evidence-and-non-regression-plan.md
index b1eadf1..2d727c1 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/05-evidence-and-non-regression-plan.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/05-evidence-and-non-regression-plan.md
@@ -54,3 +54,15 @@
 ## 3. Verdict section

 `EVIDENCE CATALOGUE UPDATED AFTER O2 — PRIORITY UNKNOWN/PARTIAL IDS ADVANCED — F11/F13 FINAL STILL MISSING — NO PRODUCT IMPLEMENTATION`
+
+
+---
+
+## LOT 1 UPDATE
+
+| ID | Après lot 1 |
+|----|-------------|
+| E-MM-03 | `PARTIAL — EVIDENCED` — hold implémenté (défaut actif) |
+| E-F11-01 | `PARTIAL — EVIDENCED` — contrat interne read-only |
+| E-F13-02 | `PARTIAL — EVIDENCED` — fondation RO bornée (≠ vue finale) |
+| E-OBS-01 | `PARTIAL — EVIDENCED` — health SIMULATED exposé |
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/06-holds-and-stop-conditions.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/06-holds-and-stop-conditions.md
index ec7bff7..6f0ec64 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/06-holds-and-stop-conditions.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/06-holds-and-stop-conditions.md
@@ -13,11 +13,14 @@

 | Hold | Statut exigé | Sens |
 |------|--------------|------|
-| T-A7 | `NOT OPEN` | framing readiness ≠ ouverture |
-| F03.3 | décidée ≠ satisfaite | set **partiel réduit** (`BLOCKERS REDUCED`) ; prep hors gate O2 interdite |
+| T-A7 | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` | ≠ fully open · ≠ delivery |
+| F03.3 | décidée ≠ satisfaite | `IMPLEMENTATION BLOCKERS REDUCED` · pas SATISFIED global |
 | F11.2 | décidée ≠ API disponible | pas d’implémentation |
 | F13.4 | décidée ≠ historique RO disponible | pas de vue runtime |
-| Isolation OPS1 | design **validé tech** ≠ réalisée | contrat validé O2 · **non implémenté** |
+| Isolation OPS1 | design **validé tech** ≠ réalisée | inchangé lot 1 |
+| MethodMode hold | **implémenté (défaut actif)** | ≠ blockers fermés |
+| F11.2 fondation | **implémentée RO** | ≠ API finale / cutover |
+| F13.4 fondation | **implémentée RO bornée** | ≠ vue runtime finale |
 | B5 | `OPEN` | STOP BEFORE DELIVERY |
 | R1 | `OPEN` | atomicité non résolue |
 | R-M01 | `OPEN` | ClaimEvaluator readiness |
@@ -100,3 +103,8 @@
 ## 6. Verdict section

 `HOLDS ACTIVE — ANTI-BYPASS AND STOP CONDITIONS DOCUMENTED — O2 DOES NOT LIFT T-A7 NOT OPEN — HARD NOT IGNORED`
+
+
+## Lot 1 note
+
+T-A7 ouvert **uniquement** pour le lot borné. Delivery/cutover restent NOT AUTHORIZED.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/07-f03-3-satisfaction-assessment.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/07-f03-3-satisfaction-assessment.md
index cf04c3c..3799b52 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/07-f03-3-satisfaction-assessment.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/07-f03-3-satisfaction-assessment.md
@@ -7,7 +7,8 @@
 | **Date initiale** | 2026-07-28 20:36:49 CEST (+0200) |
 | **Date réévaluation O2** | 2026-07-28 20:54:03 CEST (+0200) |
 | **Verdict avant** | `F03.3 PARTIALLY SATISFIED — BLOCKERS IDENTIFIED` |
-| **Verdict après** | `F03.3 PARTIALLY SATISFIED — BLOCKERS REDUCED` |
+| **Verdict après O2** | `F03.3 PARTIALLY SATISFIED — BLOCKERS REDUCED` |
+| **Verdict après lot 1** | `F03.3 PARTIALLY SATISFIED — IMPLEMENTATION BLOCKERS REDUCED` |
 | **Prep technique O2** | autorisée par gate courant · **bornée** |
 | **Prep au-delà / delivery / cutover** | `PROHIBITED` |
 | **T-A7** | `NOT OPEN` |
@@ -92,3 +93,12 @@
 ## 5. Verdict

 `F03.3 PARTIALLY SATISFIED — BLOCKERS REDUCED`
+
+
+---
+
+## LOT 1 VERDICT
+
+`F03.3 PARTIALLY SATISFIED — IMPLEMENTATION BLOCKERS REDUCED`
+
+Motifs de non-SATISFIED : P06–P09/P11 non verts pour remplacement ; HARD/B5 ouverts ; F11/F13 non finales ; rollback R1–R3 non testés.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/08-morris-t-a7-opening-decision-pack.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/08-morris-t-a7-opening-decision-pack.md
index 4a3735c..a6adff5 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/08-morris-t-a7-opening-decision-pack.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/08-morris-t-a7-opening-decision-pack.md
@@ -1,112 +1,23 @@
-# 08 — Morris decision pack — ouverture T-A7 (après O2)
+# 08 — Morris decision pack — ouverture T-A7

 | Champ | Valeur |
 |-------|--------|
-| **Document** | `08-morris-t-a7-opening-decision-pack.md` |
-| **Statut** | `MORRIS DECISION REQUIRED` |
-| **Date MAJ O2** | 2026-07-28 20:54:03 CEST (+0200) |
-| **T-A7 actuel** | `NOT OPEN` |
-| **Évaluation F03.3** | `F03.3 PARTIALLY SATISFIED — BLOCKERS REDUCED` |
-| **O2 gate courant** | consommé pour prep bornée — **ne présélectionne pas** la suite |
-| **Présélection** | **aucune** |
+| **O3** | `DECIDED — ADOPTED BY MORRIS` |
+| **T-A7** | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` |
+| **Date** | 2026-07-28 21:19:12 CEST (+0200) |
+| **Delivery / cutover** | `NOT AUTHORIZED` |
+| **B5 / R1 / R-M01 / HARD** | `OPEN` / `OPEN` / `OPEN` / `OPEN HARD` |

----
+## O3 ENREGISTRÉE

-## Question
+Périmètre lot 1 : MethodMode hold · F11.2 RO · F13.4 RO foundation.

-**T-A7 peut-il être ouvert pour un premier lot de développement borné ?**
+Options historiques O1/O2/O4 : non retenues pour cette ouverture.

----
+**Aucune** présélection pour le lot suivant.

-## Options
+## Gate candidat

-### O1 — Ne pas ouvrir T-A7
+`GO REVIEW T-A7 FIRST BOUNDED DEVELOPMENT LOT — ASSESS PR READINESS FOR METHODMODE HOLD F11.2 READINESS FOUNDATION AND F13.4 READ-ONLY FOUNDATION — NO DELIVERY OR CUTOVER`

-Conserver `NOT OPEN` · capitaliser preuves · pas de nouveau lot technique.
-
-### O2 — Continuer la préparation technique bornée
-
-Poursuivre preuves restantes (live cross-call optionnel · hold design doc · e2e ciblés · drills rollback doc) **sans** développement fonctionnel.
-
-### O3 — Ouvrir un premier lot de développement borné
-
-**Non supporté** tant que P06–P09/P11 MISSING · F11/F13 absents · HARD/B5 ouverts · isolation non implémentée.
-
-### O4 — Custom
-
-Ex. valider formellement le contrat OPS1 comme GO d’implémentation future séparée · ou cadrer micro-lot hold MethodMode **documentaire**.
-
----
-
-## Preuves nouvelles (O2)
-
-- 6 probes + 6 suites existantes · 63 tests verts ;
-- isolation static OPS1↔OA ;
-- allowlist method/ denials ;
-- asymétrie path-policy/loader ;
-- volumes locaux agrégés ;
-- absences F11/F13/hold prouvées.
-
-## Blockers levés / restants
-
-Voir `07` §3.
-
-## Régression
-
-Aucune régression détectée sur suites rejouées.
-
-## Recommandation repo-informed (non décisionnelle)
-
-**Statut :** `RECOMMENDED — NOT DECIDED`
-
-**Recommandation :** **O2** (continuer prep bornée sur résiduels) **ou** **O1** si pause ; **pas O3**.
-
-### Périmètre candidat futur (si O2)
-
-| Inclus | Exclu |
-|--------|-------|
-| probes live optionnels | `method/**` |
-| e2e OPS1 ciblés read-only | mod fonctionnelle OPS1/MethodMode |
-| docs hold MethodMode | API F11 · vue F13 · delivery |
-
-### Gates candidats (non consommés)
-
-```
-GO CONTINUE T-A7 BOUNDED TECHNICAL PREPARATION — ADDRESS REMAINING EVIDENCE AND CONTRACT BLOCKERS ONLY — KEEP T-A7 NOT OPEN
-```
-
-(Si F03.3 devenait SATISFIED plus tard :)
-
-```
-GO DECIDE T-A7 OPENING — REVIEW UPDATED TECHNICAL EVIDENCE — SELECT O1 O2 O3 OR CUSTOM — NO DELIVERY OR CUTOVER WITHOUT DISTINCT GATE
-```
-
----
-
-## Bulletin D-T-A7-OPEN
-
-| Champ | Valeur |
-|-------|--------|
-| **Options** | O1 · O2 · O3 · O4 |
-| **Recommandation** | O2 (ou O1) · pas O3 |
-| **Anti-claims** | recommandation ≠ décision · O2 ≠ delivery · validation OPS1 ≠ implémentation · T-A7 reste NOT OPEN jusqu’à GO distinct |
-| **Champ** | `MORRIS DECISION REQUIRED` |
-
-**Aucune option n’est pré-cochée comme décision.**
-
----
-
-## Garde-fous
-
-- F03.3 / F11.2 / F13.4 / combinaison `DECIDED` inchangées ;
-- B5/R1/R-M01 `OPEN` · HARD `OPEN HARD` ;
-- T-A6 COMPLETE `NOT DECLARED` · Option A `NOT COMPLETE` ;
-- T-A7 `NOT OPEN` ;
-- delivery preparation / delivery / cutover `NOT AUTHORIZED` ;
-- persistence/IAM `NOT SELECTED` · RGPD `NOT VALIDATED`.
-
----
-
-## Verdict section
-
-`MORRIS OPENING DECISION PACK UPDATED AFTER O2 WITHOUT PRESELECTION — RECOMMENDATION O2 OR O1 — O3 NOT SUPPORTED — T-A7 NOT OPEN`
+`NOT CONSUMED`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/09-bounded-technical-preparation-results.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/09-bounded-technical-preparation-results.md
index 5118b26..364c6d1 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/09-bounded-technical-preparation-results.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/09-bounded-technical-preparation-results.md
@@ -162,3 +162,8 @@ Résiduels : probe live dynamique optionnelle ; surface partagée D1/platform do
 ## 11. Verdict section

 `BOUNDED TECHNICAL PREPARATION CAMPAIGN COMPLETED — 63 TESTS PASSED — BLOCKERS REDUCED WITHOUT PRODUCT IMPLEMENTATION — T-A7 NOT OPEN`
+
+
+## LOT 1 FOLLOW-ON
+
+O3 adopté · fondations implémentées localement · voir `10`.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/10-t-a7-first-bounded-development-lot.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/10-t-a7-first-bounded-development-lot.md
new file mode 100644
index 0000000..b166753
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/10-t-a7-first-bounded-development-lot.md
@@ -0,0 +1,77 @@
+# 10 — T-A7 first bounded development lot (O3)
+
+| Champ | Valeur |
+|-------|--------|
+| **Gate** | `GO DECIDE T-A7 OPENING — SELECT O3 FOR A FIRST BOUNDED DEVELOPMENT LOT LIMITED TO METHODMODE HOLD F11.2 READINESS CONTRACT AND F13.4 READ-ONLY FOUNDATION — NO DELIVERY OR CUTOVER — KEEP B5 R1 R-M01 AND HARD OPEN` |
+| **Décision** | **O3** — `DECIDED — ADOPTED BY MORRIS` |
+| **T-A7** | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` |
+| **Date/heure/fuseau** | 2026-07-28 21:19:12 CEST (+0200) |
+| **Parent commit** | `014103777ef620cfd1ca2520455d7e98a85530e3` |
+| **Delivery / cutover** | `NOT AUTHORIZED` |
+
+## Scope exact
+
+| Inclus | Exclu |
+|--------|-------|
+| MethodMode hold (évaluation) | Migration / schéma DB |
+| F11.2 readiness read-only interne | Route HTTP / UI admin |
+| F13.4 fondation historique RO | Vue runtime complète / ACL / IAM |
+| Tests + docs pack | `method/**` · OPS1 fonctionnel · delivery |
+
+## Architecture minimale
+
+```
+lib/d1/methodModeHold.ts          → hold + gate selectMethodMode
+lib/d1/operationalReadiness.ts    → F11.2 query (compose hold + history)
+lib/d1/commands.ts                → assert hold before transition
+lib/platform/t-a7/boundedHistoryRead.ts → F13.4 provider documentary/Git refs
+```
+
+Couplage lecture : F11.2 → hold + F13 page summary. Aucune mutation croisée.
+
+## MethodMode hold
+
+- Défaut **ACTIVE** avec raisons : B5 · R1 · R-M01 · HARD · T-A7 lot · F11 incomplete · F13 incomplete.
+- `selectMethodMode` refuse si hold actif (`D1Error CONFLICT`).
+- Overrides **TEST ONLY**.
+- Anti-claim : hold ≠ blockers fermés · ≠ IAM.
+
+## F11.2
+
+- `queryOperationalReadiness()` snapshot frozen · `mutable/adminUi/writeCommands=false`.
+- Expose hold, blockers, deps canoniques, migration NOT_STARTED, health SIMULATED, history summary.
+- Verdict surface : `F11.2 READINESS FOUNDATION IMPLEMENTED — READ-ONLY — NO ADMIN UI — NOT CUTOVER COMPLETE`
+
+## F13.4
+
+- Provider documentary seed + unavailable provider.
+- Max 50 items · immutable · `gitCanonical=true`.
+- Verdict surface : `F13.4 READ-ONLY FOUNDATION IMPLEMENTED — GIT REMAINS CANONICAL — NO MIGRATION OR FINAL RUNTIME VIEW`
+
+## Sécurité / données
+
+- Pas de PII · métadonnées packs/Git seulement · pas d’élargissement path-policy · path-policy ≠ IAM.
+
+## Tests
+
+- hold · readiness · history · integration · foundation · intake-c4 (hold override) · probes O2 · import-boundaries
+- **93 passed** (suite d1 + probes ciblés) · typecheck OK
+
+## Limitations / blockers restants
+
+- B5/R1/R-M01/HARD OPEN
+- Pas d’API HTTP F11 · pas de vue finale F13 · pas de hold persistant DB
+- P06–P11 non SATISFIED remplacement OA
+- F03.3 reste partielle
+
+## Rollback
+
+`git revert` du commit lot 1.
+
+## Anti-claims
+
+- T-A7 borné ≠ fully open · lot ≠ delivery · hold ≠ fermeture réserves · F11/F13 fondations ≠ finales.
+
+## Verdict
+
+`T-A7 FIRST BOUNDED DEVELOPMENT LOT IMPLEMENTED LOCALLY — O3 DECISION RECORDED — METHODMODE HOLD · F11.2 · F13.4 FOUNDATIONS — TESTS PASS — NO DELIVERY OR CUTOVER`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
index b115c47..e37be90 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
@@ -2,70 +2,41 @@

 | Champ | Valeur |
 |-------|--------|
-| **Gate framing (historique)** | `GO FRAME T-A7 TECHNICAL READINESS — … — KEEP T-A7 NOT OPEN` |
-| **Gate O2 (consommé)** | `GO ADDRESS T-A7 TECHNICAL READINESS BLOCKERS — AUTHORIZE BOUNDED TECHNICAL PREPARATION FOR OPS1 VALIDATION EVIDENCE COLLECTION AND P03-P11 GAP REDUCTION ONLY — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
-| **Option O2** | `OUVRIR UNIQUEMENT UNE PRÉPARATION TECHNIQUE BORNÉE` — **consommée** (preuves) · **≠** ouverture T-A7 |
-| **Date framing** | 2026-07-28 20:36:49 CEST (+0200) |
-| **Date campagne O2** | 2026-07-28 20:54:03 CEST (+0200) |
-| **Cycle / profil** | 9 — QA (+6 · 7 · 10 · 12 · 15 · 1) · Critical |
+| **Gate O3 (consommé)** | `GO DECIDE T-A7 OPENING — SELECT O3 FOR A FIRST BOUNDED DEVELOPMENT LOT LIMITED TO METHODMODE HOLD F11.2 READINESS CONTRACT AND F13.4 READ-ONLY FOUNDATION — NO DELIVERY OR CUTOVER — KEEP B5 R1 R-M01 AND HARD OPEN` |
+| **O3** | `DECIDED — ADOPTED BY MORRIS` |
+| **T-A7** | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` |
+| **Date lot 1** | 2026-07-28 21:19:12 CEST (+0200) |
+| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness` |
 | **Base** | `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421` |
-| **Branche locale** | `framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness` |
-| **Worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-technical-readiness` |
-| **Push / PR / merge projet** | **aucun** |
-| **T-A7** | `NOT OPEN` |
-| **Delivery preparation / delivery / cutover** | `NOT AUTHORIZED` |
-| **Développement fonctionnel T-A7** | **non** |
-| **F03 / F11 / F13 / combinaison** | `DECIDED — ADOPTED BY MORRIS` (F03.3 · F11.2 · F13.4) |
-| **Évaluation F03.3** | `F03.3 PARTIALLY SATISFIED — BLOCKERS REDUCED` |
-| **Contrat OPS1** | `VALIDATED FOR FUTURE IMPLEMENTATION — NOT IMPLEMENTED` |
-| **W1-B / W1-D01…D05** | `DECIDED` (inchangées) |
+| **Push / PR projet** | **aucun** |
+| **F03.3 évaluation** | `F03.3 PARTIALLY SATISFIED — IMPLEMENTATION BLOCKERS REDUCED` |
+| **F11.2 / F13.4 décisions** | `DECIDED` · fondations lot 1 livrées (≠ finales) |
 | **B5 / R1 / R-M01** | `OPEN` |
 | **HARD** | `OPEN HARD` |
-| **T-A6 COMPLETE** | `NOT DECLARED` |
-| **Option A** | `NOT COMPLETE` |
-| **Persistence / IAM** | `NOT SELECTED` |
-| **RGPD production** | `NOT VALIDATED` |
+| **Delivery / cutover** | `NOT AUTHORIZED` |
+| **T-A6 / Option A** | `NOT DECLARED` / `NOT COMPLETE` |
+| **Persistence / IAM / RGPD** | `NOT SELECTED` / `NOT SELECTED` / `NOT VALIDATED` |

-## Objectif
+## Lot 1 livré

-Readiness documentaire + **campagne O2 bornée** : valider le contrat OPS1 par preuves, collecter UNKNOWN/PARTIAL, réévaluer F03.3, mettre à jour le bulletin Morris — **sans** développement produit.
+1. MethodMode hold (défaut actif)
+2. F11.2 readiness read-only interne
+3. F13.4 historique RO borné (Git canonique)

-## Périmètre O2
-
-- tests/probes non destructifs ;
-- MAJ pack readiness ;
-- commit local ;
-- review pack + handoff.
-
-## Hors périmètre
-
-- ouverture T-A7 · développement fonctionnel ;
-- implémentation F11.2 / F13.4 · API · UI · migrations ;
-- mod `method/**` · OPS1/MethodMode fonctionnels ;
-- delivery / cutover · push/PR/merge projet.
-
-## Livrables
-
-| Fichier | Rôle |
-|---------|------|
-| `01`–`08` | framing + matrices + bulletin (MAJ O2) |
-| `09-bounded-technical-preparation-results.md` | résultats campagne O2 |
-| `README.md` | synthèse |
-| 6 probes sous `app/__tests__/**` | preuves techniques |
+Détail : `10-t-a7-first-bounded-development-lot.md`

 ## Anti-claims

-- O2 ≠ T-A7 OPEN ;
-- validation OPS1 ≠ isolation implémentée ;
-- tests verts ≠ delivery/cutover ;
-- F03.3 BLOCKERS REDUCED ≠ SATISFIED global.
+- T-A7 borné ≠ fully open · ≠ delivery/cutover ready
+- hold ≠ blockers fermés
+- fondations ≠ API/UI/vue finales

 ## Gate candidat suivant

-`GO CONTINUE T-A7 BOUNDED TECHNICAL PREPARATION — ADDRESS REMAINING EVIDENCE AND CONTRACT BLOCKERS ONLY — KEEP T-A7 NOT OPEN`
+`GO REVIEW T-A7 FIRST BOUNDED DEVELOPMENT LOT — ASSESS PR READINESS FOR METHODMODE HOLD F11.2 READINESS FOUNDATION AND F13.4 READ-ONLY FOUNDATION — NO DELIVERY OR CUTOVER`

 **Statut :** `NOT CONSUMED`

 ## Verdict

-`T-A7 BOUNDED TECHNICAL PREPARATION COMPLETED — OPS1 VALIDATION EVIDENCE COLLECTED — P03 TO P11 GAPS REASSESSED — READINESS BLOCKERS REDUCED WITHOUT PRODUCT IMPLEMENTATION — F03.3 REEVALUATED FROM EXECUTED EVIDENCE — MORRIS DECISION PACK UPDATED WITHOUT PRESELECTION — NO FUNCTIONAL DEVELOPMENT — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — PROJECT BRANCH NOT PUSHED`
+`T-A7 FIRST BOUNDED DEVELOPMENT LOT IMPLEMENTED LOCALLY — O3 DECISION RECORDED — METHODMODE HOLD IMPLEMENTED — F11.2 READINESS FOUNDATION IMPLEMENTED READ-ONLY — F13.4 READ-ONLY FOUNDATION IMPLEMENTED WITH GIT REMAINING CANONICAL — TESTS PASS — NO MIGRATION IAM ADMIN UI DELIVERY OR CUTOVER — B5 R1 R-M01 AND HARD REMAIN OPEN — T-A7 OPEN FOR FIRST BOUNDED DEVELOPMENT LOT ONLY — PROJECT BRANCH NOT PUSHED`
```

## Verdict

`T-A7 FIRST BOUNDED DEVELOPMENT LOT IMPLEMENTED LOCALLY — O3 DECISION RECORDED — METHODMODE HOLD IMPLEMENTED — F11.2 READINESS FOUNDATION IMPLEMENTED READ-ONLY — F13.4 READ-ONLY FOUNDATION IMPLEMENTED WITH GIT REMAINING CANONICAL — TESTS PASS — NO MIGRATION IAM ADMIN UI DELIVERY OR CUTOVER — B5 R1 R-M01 AND HARD REMAIN OPEN — T-A7 OPEN FOR FIRST BOUNDED DEVELOPMENT LOT ONLY — PROJECT BRANCH NOT PUSHED`
