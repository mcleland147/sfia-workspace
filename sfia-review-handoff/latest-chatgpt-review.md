# SFIA Studio M2 — Cognitive Piloting Delivery — FULL Review Pack

## Horodatage
2026-08-13 12:20:55 CEST (Europe/Paris)

## Cycle / profil
- Cycle: **8 — Delivery / implémentation**
- Profil SFIA: **Critical**
- Typologie: EVOL
- GO Morris: **GO MORRIS — M2** (Delivery autorisée ; commit/push/PR/merge projet **non** autorisés)

## Branche / HEAD / base
- Branche: `delivery/sfia-studio-m2-cognitive-piloting`
- HEAD: `5e71c7c3212e93029127cfe7aeb22752be582cec`
- Baseline origin/main attendue: `5e71c7c3212e93029127cfe7aeb22752be582cec`
- HEAD == baseline: **YES**
- Branche distante M2 avant cycle: **absente** (créée depuis origin/main)

## Local Git Truth (préparation)
- `git fetch origin` exécuté
- Worktree: dirty toléré uniquement `.tmp-sfia-review/**` + `.tmp-sfia-review-pre.txt` avant préparation ; Delivery a ensuite produit les diffs M2
- Staged: **vide** (aucun commit projet)
- Project commit/push/PR: **none**

## Convergence Pre-check
- triggered: oui
- Build Doctrine: VALIDATED — ACTIVE ON MAIN
- Roadmap: VALIDATED — ACTIVE LIVING ROADMAP (mise à jour factuelle M2 **après preuve**)
- G0-A: ADOPTED / CONSUMED
- G0-B: ADOPTED / CONSUMED
- M1: MERGED ON MAIN — EXIT PROOF SATISFIED
- capacité M2: V3-F01 / F03 / F04 base / F05
- M3: NOT AUTHORIZED
- runtime v3: NON ADOPTED
- Cursor REAL: DISABLED

## Audit découverte avant code (matrice KEEP/ADAPT/COMPLETE)

| concept | existing | action M2 |
| --- | --- | --- |
| ProjectServices / SqliteProductStore | M1 Product SQLite | KEEP |
| Product schema M1 | m1-0.1.0 | ADAPT → additive m2-0.1.0 + `oa_cycle_instances` |
| CycleInstance / CreateCycle / MemoryCycleStore | T-A2 Memory | COMPLETE durable subset + KEEP Memory for non-Studio |
| QualifyCycleWithCkc / CkcConsumptionProof | exist | KEEP + shared RuntimeOaStack injection |
| F2ContextSnapshot | thin DTO | ADAPT (+ cycle/ckc linkage fields) — **pas** nouvel aggregate durable |
| ProposalDto / proposalStore | process-local | KEEP TEMPORARY WITH EXIT |
| orchestrateAssistantSend | qualify only | ADAPT → createCycle + post-mutation live snapshot |
| wireOaStack | Cycle Memory | ADAPT → Sqlite Cycle when Product store |
| linkAsActiveCycle | CreateCycleRequest contract | KEEP (Critical status reste `proposed`) |
| ckcResolutionRef | LPS field unused | COMPLETE projection from CKC proof |
| GuidedSession / ContextSnapshot aggregate | absent | **not created** |
| HumanDecision / ExecutionContract | Memory | KEEP AS-IS — hors M2 |

## Architecture retenue
- Un seul Product SQLite (`node:sqlite`) — même fichier M1
- Cycle adapters dépendent de `ProductSqliteHandle` (barrel `@/lib/oa/project`) — **pas** import concret `SqliteProductStore` dans Cycle application
- `SqliteProductStore` = UoW partagé Project + Cycle ; nested `runInTransaction` **réentrant** (anti-deadlock queue)
- F2 consomme `runtime.oa.ckcQualification` + `runtime.oa.cycleServices.createCycle`
- Live context via `readLiveProjectContext` (vertical-slice-runtime)
- T-A3…T-A6 Memory inchangés ; Cursor REAL DISABLED

## Schéma / migration Product SQLite
- `PRODUCT_SCHEMA_VERSION_M1 = m1-0.1.0`
- `PRODUCT_SCHEMA_VERSION = m2-0.1.0`
- Additive `oa_cycle_instances` + indexes
- Fail closed unknown/future schema
- Idempotent reopen

## Transaction boundary
- CreateCycle `runInTransaction` → cycle.save + AppendLivingProjectStateVersion (nested same store) → single COMMIT
- LPS stale / forced cycle save → ROLLBACK → no orphan CycleInstance

## CKC binding
- `projectCkcResolutionRef(proof)` → `ckc:m2-<digest>-<corr>`
- Written to LPS `ckcResolutionRef` when `linkAsActiveCycle`
- `executionAuthority=false` preserved ; no raw CKC dimensions persisted

## F2 live context flow
1. read project
2. intent
3. qualify shared CKC
4. Critical justification gate (no mutation if missing)
5. CreateCycle + LPS append atomic
6. `readLiveProjectContext` + reload overview
7. Proposal ContextSnapshot = **post-mutation** LPS
8. conversation/proposal remain process-local

## Validations
- `npm run typecheck` PASS
- `npm run lint` PASS
- `npm test` PASS — 1635 passed / 131 skipped / 0 failed
- `npm run build` PASS
- Restart proof: two Node/tsx processes PASS (`m2RestartProcessProof`)

## Tests A–J
- A migration: PASS (`m2ProductCycleDurability`)
- B actionable e2e: PASS (`m2CognitivePiloting.e2e` + f2.orchestrate)
- C process restart: PASS (strong A→B)
- D ambiguous no-mutation: PASS
- E informative no-mutation: PASS
- F Critical safety: PASS (no justification no mutation ; with justification status `proposed`)
- G LPS stale / cycle fail atomic: PASS
- H CKC proof/ref/executionAuthority: PASS
- I isolation Product path ≠ D1/OPS1: PASS
- J anti-claims disclosures: PASS (`PARTIAL_PROJECT_LPS_CYCLE_DURABLE`)

## Roadmap delta
- M2 → **IMPLEMENTED CANDIDATE — READY FOR MORRIS VALIDATION**
- next = M3 — NOT AUTHORIZED — MORRIS GO REQUIRED
- Gaps Cycle/CKC/live snapshot closed (candidate)
- Dette: conversation/proposal process-local ; Trajectory/Epistemic Memory ; DOC-DEBT-M1-01

## Dettes / exits
- GuidedSession / conversation / Proposal lifecycle non durable — owner Roadmap / milestone ultérieur (≠ auto-M3)
- Trajectory/Epistemic Memory — hors durabilité M2
- DOC-DEBT-M1-01 — reste ouvert (framing 32 READ ONLY)

## Anti-claims
≠ M2 VALIDATED/ADOPTED/COMPLETE ON MAIN
≠ commit/push/PR autorisés
≠ M3 authorized
≠ HumanDecision durable
≠ Cursor REAL / Gate D / Auth/Ack
≠ runtime v3 ADOPTED
≠ FULLY_DURABLE / RUN_READY / PRODUCT_READY

## Verdict
**M2 COGNITIVE PILOTING IMPLEMENTED — DURABLE CYCLE/LPS/CKC LINKAGE PASS — LIVE CONTEXT SNAPSHOT PASS — PROCESS RESTART EVIDENCE PASS — M2 IMPLEMENTED CANDIDATE — READY FOR MORRIS VALIDATION / COMMIT GATE**

## Instruction ChatGPT
Avant d’analyser ce rapport M2, lire branche `sfia/review-handoff` fichier `sfia-review-handoff/latest-chatgpt-review.md` et vérifier cycle/profil/branche/HEAD/base/scope/created/modified/Product schema/transaction/CycleInstance/CKC/ContextSnapshot/restart/tests/Roadmap/dettes/anti-claims/verdict/handoff remote.

---

## Git status / diffs (summary)

### `git status --short`
```
 M projects/sfia-studio/app/__tests__/oa/cycle/adversarialValidation.test.ts
 M projects/sfia-studio/app/__tests__/oa/project/m1RestartProcessProof.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/runtimeApplicationService.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts
 M projects/sfia-studio/app/features/project-assistant/f2/qualify.ts
 M projects/sfia-studio/app/features/project-assistant/f2/types.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
 M projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts
 M projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
 M projects/sfia-studio/app/lib/oa/project/index.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts
 M projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
 M projects/sfia-studio/app/lib/vertical-slice-core/types.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
?? .tmp-sfia-review-pre.txt
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/oa/cycle/m2ProductCycleDurability.test.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/m2RestartProcessProof.test.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/m2RestartProcessWorker.ts
?? projects/sfia-studio/app/__tests__/project-assistant/m2CognitivePiloting.e2e.test.ts
?? projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/
?? projects/sfia-studio/app/lib/oa/cycle/ports/cyclePersistenceUnitOfWorkPort.ts
?? projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
?? projects/sfia-studio/app/lib/vertical-slice-runtime/liveProjectContext.ts

```

### `git diff --stat`
```
 .../oa/cycle/adversarialValidation.test.ts         |   7 +-
 .../oa/project/m1RestartProcessProof.test.ts       |  10 +-
 .../ProjectAssistantPanel.test.tsx                 |   9 +-
 .../project-assistant/f2.orchestrate.test.ts       | 156 ++++++++++-----------
 .../project-assistant/orchestrateTurn.test.ts      |   3 +-
 .../localProjectComposition.test.ts                |   2 +
 .../importBoundaries.test.ts                       |   1 +
 .../runtimeApplicationService.test.ts              |   5 +-
 .../vertical-slice-ui/createProjectUi.test.tsx     |  10 +-
 .../vertical-slice-ui/projectWorkspaceUi.test.tsx  |   8 +-
 .../project-assistant/ProjectAssistantPanel.tsx    |  26 +++-
 .../project-assistant/buildProjectSystemPrompt.ts  |   2 +-
 .../features/project-assistant/f2/orchestrateF2.ts | 134 ++++++++++++++++--
 .../features/project-assistant/f2/proposalStore.ts |   2 +-
 .../app/features/project-assistant/f2/qualify.ts   |  20 ++-
 .../app/features/project-assistant/f2/types.ts     |   9 ++
 .../features/project-assistant/orchestrateTurn.ts  |   2 +-
 .../app/features/project-assistant/types.ts        |   2 +
 .../vertical-slice-ui/ProjectWorkspaceView.tsx     |  33 ++++-
 .../app/lib/oa/cycle/application/createCycle.ts    |   5 +-
 .../sfia-studio/app/lib/oa/cycle/domain/types.ts   |   5 +
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |  21 ++-
 projects/sfia-studio/app/lib/oa/project/index.ts   |   6 +
 .../app/lib/oa/project/infrastructure/sqlite/db.ts |  78 +++++++++--
 .../infrastructure/sqlite/sqliteProductStore.ts    |  49 ++++---
 .../vertical-slice-core/localProjectComposition.ts |   7 +-
 .../app/lib/vertical-slice-core/types.ts           |   5 +-
 .../app/lib/vertical-slice-runtime/disclosures.ts  |  20 +--
 .../app/lib/vertical-slice-runtime/index.ts        |   5 +
 .../app/lib/vertical-slice-runtime/service.ts      |  12 +-
 .../app/lib/vertical-slice-runtime/types.ts        |   4 +-
 .../convergence/sfia-studio-convergence-roadmap.md |  39 +++---
 32 files changed, 507 insertions(+), 190 deletions(-)

```

### `git diff --name-status`
```
M	projects/sfia-studio/app/__tests__/oa/cycle/adversarialValidation.test.ts
M	projects/sfia-studio/app/__tests__/oa/project/m1RestartProcessProof.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/runtimeApplicationService.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
M	projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
M	projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
M	projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
M	projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
M	projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts
M	projects/sfia-studio/app/features/project-assistant/f2/qualify.ts
M	projects/sfia-studio/app/features/project-assistant/f2/types.ts
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/features/project-assistant/types.ts
M	projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
M	projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts
M	projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
M	projects/sfia-studio/app/lib/oa/cycle/index.ts
M	projects/sfia-studio/app/lib/oa/project/index.ts
M	projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
M	projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts
M	projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
M	projects/sfia-studio/app/lib/vertical-slice-core/types.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
M	projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md

```

### Staged
vide

---
## Created files — full contents

### `projects/sfia-studio/app/lib/oa/cycle/ports/cyclePersistenceUnitOfWorkPort.ts`

```typescript
/**
 * Minimal transactional boundary for CycleInstance mutations (M2).
 * Compatible with MemoryCycleStore and Product SQLite UnitOfWork.
 */
export interface CyclePersistenceUnitOfWorkPort {
  runInTransaction<T>(fn: () => Promise<T>): Promise<T>;
}

```

### `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts`

```typescript
import type { DatabaseSync } from "node:sqlite";
import type { ProjectPersistenceUnitOfWorkPort } from "../../ports/projectPersistenceUnitOfWorkPort";

/**
 * Shared Product SQLite handle for Project + Cycle adapters (M2).
 * Cycle infrastructure depends on this shape — not on SqliteProductStore class.
 */
export type ProductSqliteHandle = ProjectPersistenceUnitOfWorkPort & {
  readonly db: DatabaseSync;
  failNextSave?: "project" | "lps" | "cycle" | null;
};

```

### `projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts`

```typescript
import type { ClockPort } from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import type { ProjectServices, ProductSqliteHandle } from "@/lib/oa/project";
import { CreateCycle } from "../../application/createCycle";
import { CreateInitialTrajectory } from "../../application/createInitialTrajectory";
import { GetCurrentTrajectory } from "../../application/getCurrentTrajectory";
import { GetCycle } from "../../application/getCycle";
import { GetEpistemicState } from "../../application/getEpistemicState";
import { GetTrajectoryVersion } from "../../application/getTrajectoryVersion";
import { ProposeTrajectoryVersion } from "../../application/proposeTrajectoryVersion";
import { QualifyCycle } from "../../application/qualifyCycle";
import { ResolveCycleKnowledgeContract } from "../../application/resolveCycleKnowledgeContract";
import { UpdateEpistemicState } from "../../application/updateEpistemicState";
import { MemoryCkcResolver } from "../memoryCkcResolver";
import { MemoryCycleStore } from "../memoryCycleStore";
import { MemoryEpistemicRepository } from "../memoryEpistemicRepository";
import { MemoryTrajectoryRepository } from "../memoryTrajectoryRepository";
import type { CycleAuditPort } from "../../ports/cycleAudit";
import type { CyclePersistenceUnitOfWorkPort } from "../../ports/cyclePersistenceUnitOfWorkPort";
import type { CycleRepositoryPort } from "../../ports/cycleRepository";
import type { CkcResolverPort } from "../../ports/ckcResolver";
import type { EpistemicRepositoryPort } from "../../ports/epistemicRepository";
import type { TrajectoryRepositoryPort } from "../../ports/trajectoryRepository";
import { SqliteCycleAuditJournal } from "./sqliteCycleAuditJournal";
import { SqliteCycleRepository } from "./sqliteCycleRepository";

export type CreateSqliteCycleServicesOptions = {
  projectServices: ProjectServices;
  /** Shared Product SQLite handle (same DB / UoW as Project T-A1). */
  productStore: ProductSqliteHandle & CyclePersistenceUnitOfWorkPort;
  clock?: ClockPort;
  audit?: CycleAuditPort;
  ckcResolver?: CkcResolverPort;
};

export type SqliteCycleServices = {
  store: CyclePersistenceUnitOfWorkPort;
  cycles: CycleRepositoryPort;
  productStore: ProductSqliteHandle;
  trajectories: TrajectoryRepositoryPort;
  epistemic: EpistemicRepositoryPort;
  ckc: CkcResolverPort;
  audit: CycleAuditPort;
  qualifyCycle: QualifyCycle;
  createCycle: CreateCycle;
  getCycle: GetCycle;
  createInitialTrajectory: CreateInitialTrajectory;
  getCurrentTrajectory: GetCurrentTrajectory;
  getTrajectoryVersion: GetTrajectoryVersion;
  proposeTrajectoryVersion: ProposeTrajectoryVersion;
  getEpistemicState: GetEpistemicState;
  updateEpistemicState: UpdateEpistemicState;
  resolveCycleKnowledgeContract: ResolveCycleKnowledgeContract;
};

/**
 * CycleInstance durable services on Product SQLite (M2).
 * Trajectory/Epistemic remain Memory (out of M2 durability scope).
 */
export function createSqliteCycleServices(
  options: CreateSqliteCycleServicesOptions,
): SqliteCycleServices {
  const productStore = options.productStore;
  const memory = new MemoryCycleStore();
  const cycles = new SqliteCycleRepository(productStore);
  const trajectories = new MemoryTrajectoryRepository(memory);
  const epistemic = new MemoryEpistemicRepository(memory);
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new SqliteCycleAuditJournal(productStore);
  const ckc = options.ckcResolver ?? new MemoryCkcResolver();

  return {
    store: productStore,
    cycles,
    productStore,
    trajectories,
    epistemic,
    ckc,
    audit,
    qualifyCycle: new QualifyCycle(clock, audit),
    createCycle: new CreateCycle(
      cycles,
      options.projectServices,
      clock,
      audit,
      productStore,
    ),
    getCycle: new GetCycle(cycles, clock, audit),
    createInitialTrajectory: new CreateInitialTrajectory(
      trajectories,
      options.projectServices,
      clock,
      audit,
      memory,
    ),
    getCurrentTrajectory: new GetCurrentTrajectory(trajectories, clock, audit),
    getTrajectoryVersion: new GetTrajectoryVersion(trajectories, clock, audit),
    proposeTrajectoryVersion: new ProposeTrajectoryVersion(
      trajectories,
      options.projectServices,
      clock,
      audit,
      memory,
    ),
    getEpistemicState: new GetEpistemicState(epistemic, clock, audit),
    updateEpistemicState: new UpdateEpistemicState(
      epistemic,
      clock,
      audit,
      memory,
    ),
    resolveCycleKnowledgeContract: new ResolveCycleKnowledgeContract(
      ckc,
      clock,
      audit,
    ),
  };
}

export function createTestSqliteCycleServices(
  options: CreateSqliteCycleServicesOptions & {
    fixedNowIso?: string;
  },
): SqliteCycleServices {
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-07-24T06:00:00.000Z"));
  return createSqliteCycleServices({ ...options, clock });
}

```

### `projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/sqliteCycleRepository.ts`

```typescript
import type { CycleInstance } from "../../domain/types";
import type { CycleRepositoryPort } from "../../ports/cycleRepository";
import type { ProductSqliteHandle } from "@/lib/oa/project";

type CycleRow = {
  cycle_instance_id: string;
  project_id: string;
  cycle_type_id: string;
  profile: string;
  status: string;
  created_at: string;
  acknowledged_at: string | null;
  closed_at: string | null;
  payload_json: string;
};

function cloneCycle(cycle: CycleInstance): CycleInstance {
  return structuredClone(cycle);
}

/**
 * Durable CycleInstance repository on Product SQLite (M2).
 * Depends on ProductSqliteHandle — not SqliteProductStore class.
 */
export class SqliteCycleRepository implements CycleRepositoryPort {
  constructor(private readonly store: ProductSqliteHandle) {}

  async findById(cycleInstanceId: string): Promise<CycleInstance | null> {
    const row = this.store.db
      .prepare(
        `SELECT cycle_instance_id, project_id, cycle_type_id, profile, status,
                created_at, acknowledged_at, closed_at, payload_json
         FROM oa_cycle_instances WHERE cycle_instance_id = ?`,
      )
      .get(cycleInstanceId) as CycleRow | undefined;
    if (!row) return null;
    return cloneCycle(JSON.parse(row.payload_json) as CycleInstance);
  }

  async exists(cycleInstanceId: string): Promise<boolean> {
    const row = this.store.db
      .prepare(
        `SELECT 1 AS ok FROM oa_cycle_instances WHERE cycle_instance_id = ?`,
      )
      .get(cycleInstanceId) as { ok?: number } | undefined;
    return row?.ok === 1;
  }

  async save(cycle: CycleInstance): Promise<void> {
    if (this.store.failNextSave === "cycle") {
      this.store.failNextSave = null;
      throw new Error("forced_cycle_save_failure");
    }
    const payload = JSON.stringify(cloneCycle(cycle));
    this.store.db
      .prepare(
        `INSERT INTO oa_cycle_instances(
           cycle_instance_id, project_id, cycle_type_id, profile, status,
           created_at, acknowledged_at, closed_at, payload_json
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT(cycle_instance_id) DO UPDATE SET
           project_id = excluded.project_id,
           cycle_type_id = excluded.cycle_type_id,
           profile = excluded.profile,
           status = excluded.status,
           created_at = excluded.created_at,
           acknowledged_at = excluded.acknowledged_at,
           closed_at = excluded.closed_at,
           payload_json = excluded.payload_json`,
      )
      .run(
        cycle.cycleInstanceId,
        cycle.projectId,
        cycle.cycleTypeId,
        cycle.profile,
        cycle.status,
        cycle.createdAt,
        cycle.acknowledgedAt ?? null,
        cycle.closedAt ?? null,
        payload,
      );
  }

  async listByProject(projectId: string): Promise<CycleInstance[]> {
    const rows = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_cycle_instances
         WHERE project_id = ?
         ORDER BY created_at ASC, cycle_instance_id ASC`,
      )
      .all(projectId) as Array<{ payload_json: string }>;
    return rows.map((row) =>
      cloneCycle(JSON.parse(row.payload_json) as CycleInstance),
    );
  }
}

```

### `projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/sqliteCycleAuditJournal.ts`

```typescript
import type { CycleAuditEvent, CycleAuditPort } from "../../ports/cycleAudit";
import type { ProductSqliteHandle } from "@/lib/oa/project";

/**
 * Append-only Cycle audit into Product oa_audit_events (M2).
 * Same Product DB as Project audit — no second journal authority.
 */
export class SqliteCycleAuditJournal implements CycleAuditPort {
  constructor(private readonly store: ProductSqliteHandle) {}

  append(event: CycleAuditEvent): void {
    this.store.db
      .prepare(
        `INSERT INTO oa_audit_events(event_type, occurred_at, project_id, correlation_id, payload_json)
         VALUES (?, ?, ?, ?, ?)`,
      )
      .run(
        event.event,
        event.ts,
        "projectId" in event ? (event.projectId ?? null) : null,
        "correlationId" in event ? (event.correlationId ?? null) : null,
        JSON.stringify(event),
      );
  }
}

```

### `projects/sfia-studio/app/lib/vertical-slice-runtime/liveProjectContext.ts`

```typescript
import "./serverGuard";
import type { RuntimeOaStack } from "./service";

/**
 * Live Project/LPS/cycle linkage reader for F2 (M2).
 * Authority = RuntimeOaStack Product SQLite — not UI components.
 */
export type LiveProjectContext = {
  readonly projectId: string;
  readonly projectTitle: string;
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly doctrineDigest: string;
  readonly doctrinePackageId: string;
  readonly doctrineVersion: string;
  readonly doctrineStatus: string;
  readonly objective: string;
  readonly context: string | undefined;
  readonly scope: string | undefined;
  readonly activeCycleInstanceId: string | null;
  readonly ckcResolutionRef: string | null;
};

export async function readLiveProjectContext(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<
  | { ok: true; context: LiveProjectContext }
  | { ok: false; code: string; message: string }
> {
  const [projectResult, lpsResult] = await Promise.all([
    oa.projectServices.getProject.execute({ projectId }),
    oa.projectServices.getCurrentLivingProjectState.execute({ projectId }),
  ]);
  if (!projectResult.ok) {
    return {
      ok: false,
      code: projectResult.error.detailCode,
      message: "Project introuvable dans Product SQLite.",
    };
  }
  if (!lpsResult.ok) {
    return {
      ok: false,
      code: lpsResult.error.detailCode,
      message: "Living Project State courant introuvable.",
    };
  }

  const project = projectResult.project;
  const lps = lpsResult.livingProjectState;
  const doctrine = lps.doctrinePackageRef;

  return {
    ok: true,
    context: {
      projectId: project.projectId,
      projectTitle: project.title,
      lpsId: lps.lpsVersionId,
      lpsVersion: lps.version,
      doctrineDigest: doctrine.digest,
      doctrinePackageId: doctrine.doctrinePackageId,
      doctrineVersion: doctrine.version,
      doctrineStatus: doctrine.status,
      objective: lps.objective,
      context: lps.context,
      scope: lps.scope,
      activeCycleInstanceId:
        lps.activeCycleInstanceId ?? project.activeCycleInstanceId ?? null,
      ckcResolutionRef: lps.ckcResolutionRef ?? null,
    },
  };
}

```

### `projects/sfia-studio/app/__tests__/oa/cycle/m2ProductCycleDurability.test.ts`

```typescript
/**
 * M2 — Product SQLite migration M1→M2 + Cycle/LPS atomicity proofs.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  PRODUCT_SCHEMA_VERSION,
  PRODUCT_SCHEMA_VERSION_M1,
  createTestSqliteProductProjectServices,
  type ActorReference,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";
import { createSqliteCycleServices } from "@/lib/oa/cycle";

const APP_ROOT = path.resolve(__dirname, "../../..");
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

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m2-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

function seedM1Database(dbPath: string): void {
  const db = new DatabaseSync(dbPath);
  db.exec("PRAGMA foreign_keys = ON;");
  db.exec(`
CREATE TABLE schema_meta (
  key TEXT PRIMARY KEY NOT NULL,
  value TEXT NOT NULL
);
CREATE TABLE oa_projects (
  project_id TEXT PRIMARY KEY NOT NULL,
  status TEXT NOT NULL,
  current_lps_version_id TEXT,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT
);
CREATE TABLE oa_lps (
  lps_version_id TEXT PRIMARY KEY NOT NULL,
  project_id TEXT NOT NULL,
  version INTEGER NOT NULL,
  status TEXT NOT NULL,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id),
  UNIQUE (project_id, version)
);
CREATE TABLE oa_lps_current (
  project_id TEXT PRIMARY KEY NOT NULL,
  lps_version_id TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id),
  FOREIGN KEY (lps_version_id) REFERENCES oa_lps(lps_version_id)
);
CREATE TABLE oa_idempotency (
  idempotency_key TEXT PRIMARY KEY NOT NULL,
  project_id TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id)
);
CREATE TABLE oa_audit_events (
  row_id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_type TEXT NOT NULL,
  occurred_at TEXT NOT NULL,
  project_id TEXT,
  correlation_id TEXT,
  payload_json TEXT NOT NULL
);
`);
  db.prepare(
    `INSERT INTO schema_meta(key, value) VALUES ('schema_version', ?)`,
  ).run(PRODUCT_SCHEMA_VERSION_M1);
  db.close();
}

function buildProjectServices(dbPath: string): SqliteProductProjectServices {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const svc = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-13T10:00:00.000Z",
    dbPath,
  });
  openServices.push(svc);
  return svc;
}

afterEach(() => {
  while (openServices.length) {
    try {
      openServices.pop()?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("M2 Product SQLite migration + Cycle durability", () => {
  it("A — migrates M1 DB additively, preserves Project/LPS, idempotent reopen", async () => {
    const dbPath = tempDbPath("m1-legacy.sqlite");
    // Bootstrap as M2, then downgrade schema to simulate pre-M2 Product DB with data.
    {
      const bootstrap = buildProjectServices(dbPath);
      const created = await bootstrap.createProject.execute({
        projectId: "prj:m2-mig",
        title: "M1 legacy project",
        objective: "preserve-me",
        context: "m1-context",
        scope: "m1-scope",
        doctrinePackagePin: VALID_PIN,
        createdBy: ACTOR,
        lpsVersionId: "lps:m2-mig-v1",
        idempotencyKey: "idem:m2-mig",
      });
      expect(created.ok).toBe(true);
      bootstrap.dispose();
      openServices.pop();
    }

    {
      const db = new DatabaseSync(dbPath);
      db.exec("DROP TABLE IF EXISTS oa_cycle_instances");
      db.prepare(
        `UPDATE schema_meta SET value = ? WHERE key = 'schema_version'`,
      ).run(PRODUCT_SCHEMA_VERSION_M1);
      db.close();
    }

    const svc = buildProjectServices(dbPath);
    const version = svc.store.db
      .prepare("SELECT value FROM schema_meta WHERE key = ?")
      .get("schema_version") as { value: string };
    expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);

    const tables = svc.store.db
      .prepare(
        `SELECT name FROM sqlite_master WHERE type='table' AND name='oa_cycle_instances'`,
      )
      .get() as { name?: string } | undefined;
    expect(tables?.name).toBe("oa_cycle_instances");

    const project = await svc.getProject.execute({ projectId: "prj:m2-mig" });
    const lps = await svc.getCurrentLivingProjectState.execute({
      projectId: "prj:m2-mig",
    });
    expect(project.ok).toBe(true);
    expect(lps.ok).toBe(true);
    if (!project.ok || !lps.ok) return;
    expect(lps.livingProjectState.objective).toBe("preserve-me");
    expect(lps.livingProjectState.version).toBe(1);

    svc.dispose();
    openServices.pop();

    const svc2 = buildProjectServices(dbPath);
    const version2 = svc2.store.db
      .prepare("SELECT value FROM schema_meta WHERE key = ?")
      .get("schema_version") as { value: string };
    expect(version2.value).toBe(PRODUCT_SCHEMA_VERSION);
    const again = await svc2.getProject.execute({ projectId: "prj:m2-mig" });
    expect(again.ok).toBe(true);
  });

  it("A — unknown schema version fails closed", () => {
    const dbPath = tempDbPath("future.sqlite");
    seedM1Database(dbPath);
    const db = new DatabaseSync(dbPath);
    db.prepare(
      `UPDATE schema_meta SET value = ? WHERE key = 'schema_version'`,
    ).run("m99-9.9.9");
    db.close();

    expect(() => buildProjectServices(dbPath)).toThrow(
      /product_sqlite_unsupported_schema/,
    );
  });

  it("B/G — Standard cycle + LPS append atomic; stale LPS rolls back (no orphan)", async () => {
    const dbPath = tempDbPath("atomic.sqlite");
    const projects = buildProjectServices(dbPath);
    const created = await projects.createProject.execute({
      projectId: "prj:m2-atomic",
      title: "Atomic",
      objective: "obj",
      context: "ctx",
      scope: "scope",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m2-atomic-v1",
      idempotencyKey: "idem:m2-atomic",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    const cycleSvc = createSqliteCycleServices({
      projectServices: projects,
      productStore: projects.store,
    });

    const ok = await cycleSvc.createCycle.execute({
      cycleInstanceId: "cyc:m2-std-1",
      cycleTypeId: "cyc:delivery",
      projectId: "prj:m2-atomic",
      signals: {},
      createdBy: ACTOR,
      linkAsActiveCycle: true,
      expectedLpsVersion: 1,
      ckcResolutionRef: "ckc:m2-testhash-abc",
    });
    expect(ok.ok).toBe(true);
    if (!ok.ok) return;
    expect(ok.cycle.profile).toBe("Standard");
    expect(ok.cycle.status).toBe("acknowledged");

    const lps = await projects.getCurrentLivingProjectState.execute({
      projectId: "prj:m2-atomic",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.version).toBe(2);
    expect(lps.livingProjectState.activeCycleInstanceId).toBe("cyc:m2-std-1");
    expect(lps.livingProjectState.ckcResolutionRef).toBe("ckc:m2-testhash-abc");

    const stale = await cycleSvc.createCycle.execute({
      cycleInstanceId: "cyc:m2-stale-1",
      cycleTypeId: "cyc:delivery",
      projectId: "prj:m2-atomic",
      signals: {},
      createdBy: ACTOR,
      linkAsActiveCycle: true,
      expectedLpsVersion: 1,
      ckcResolutionRef: "ckc:m2-stale",
    });
    expect(stale.ok).toBe(false);
    if (stale.ok) return;
    expect(stale.error.detailCode).toBe("LPS_VERSION_CONFLICT");

    const orphan = await cycleSvc.cycles.findById("cyc:m2-stale-1");
    expect(orphan).toBeNull();

    const still = await projects.getCurrentLivingProjectState.execute({
      projectId: "prj:m2-atomic",
    });
    expect(still.ok).toBe(true);
    if (!still.ok) return;
    expect(still.livingProjectState.version).toBe(2);
    expect(still.livingProjectState.activeCycleInstanceId).toBe("cyc:m2-std-1");
  });

  it("F — Critical with justification stays proposed; no HD/execution", async () => {
    const dbPath = tempDbPath("crit.sqlite");
    const projects = buildProjectServices(dbPath);
    await projects.createProject.execute({
      projectId: "prj:m2-crit",
      title: "Crit",
      objective: "obj",
      context: "ctx",
      scope: "scope",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m2-crit-v1",
      idempotencyKey: "idem:m2-crit",
    });
    const cycleSvc = createSqliteCycleServices({
      projectServices: projects,
      productStore: projects.store,
    });
    const result = await cycleSvc.createCycle.execute({
      cycleInstanceId: "cyc:m2-crit-1",
      cycleTypeId: "cyc:delivery",
      projectId: "prj:m2-crit",
      signals: { structuralChange: true },
      justification: "Structural LPS linkage requires Critical gate",
      createdBy: ACTOR,
      linkAsActiveCycle: true,
      expectedLpsVersion: 1,
      ckcResolutionRef: "ckc:m2-crit-ref",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.cycle.status).toBe("proposed");
    expect(result.cycle.profile).toBe("Critical");
    expect(result.qualification.isMorrisDecision).toBe(false);
  });

  it("G — forced cycle save failure leaves no LPS advance", async () => {
    const dbPath = tempDbPath("fail-cycle.sqlite");
    const projects = buildProjectServices(dbPath);
    await projects.createProject.execute({
      projectId: "prj:m2-fail",
      title: "Fail",
      objective: "obj",
      context: "ctx",
      scope: "scope",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m2-fail-v1",
      idempotencyKey: "idem:m2-fail",
    });
    const cycleSvc = createSqliteCycleServices({
      projectServices: projects,
      productStore: projects.store,
    });
    projects.store.failNextSave = "cycle";
    const result = await cycleSvc.createCycle.execute({
      cycleInstanceId: "cyc:m2-fail-1",
      cycleTypeId: "cyc:delivery",
      projectId: "prj:m2-fail",
      signals: {},
      createdBy: ACTOR,
      linkAsActiveCycle: true,
      expectedLpsVersion: 1,
      ckcResolutionRef: "ckc:m2-fail",
    });
    expect(result.ok).toBe(false);
    const found = await cycleSvc.cycles.findById("cyc:m2-fail-1");
    expect(found).toBeNull();
    const lps = await projects.getCurrentLivingProjectState.execute({
      projectId: "prj:m2-fail",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.version).toBe(1);
  });
});

```

### `projects/sfia-studio/app/__tests__/oa/cycle/m2RestartProcessProof.test.ts`

```typescript
/**
 * M2 strong restart proof — two independent Node processes, same Product DB.
 * @vitest-environment node
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../../..");
const WORKER = path.join(
  APP_ROOT,
  "__tests__/oa/cycle/m2RestartProcessWorker.ts",
);
const TSX = path.join(APP_ROOT, "node_modules/.bin/tsx");

describe("M2 process restart proof", () => {
  it(
    "C — create Project+Cycle+LPS in process A, read in process B",
    () => {
    expect(fs.existsSync(TSX)).toBe(true);
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m2-proc-"));
    const dbPath = path.join(dir, "oa-product.sqlite");
    const projectId = "prj:m2-proc";

    try {
      const create = spawnSync(TSX, [WORKER, "create", dbPath, projectId], {
        cwd: APP_ROOT,
        encoding: "utf8",
        env: { ...process.env },
        timeout: 60_000,
      });
      expect(create.status, create.stderr || create.stdout).toBe(0);
      const created = JSON.parse(create.stdout.trim()) as {
        ok: boolean;
        cycleInstanceId?: string;
        lpsVersion?: number;
        lpsId?: string;
        activeCycleInstanceId?: string;
        ckcResolutionRef?: string;
        digest?: string;
        profile?: string;
        status?: string;
      };
      expect(created.ok).toBe(true);
      expect(created.lpsVersion).toBe(2);
      expect(created.activeCycleInstanceId).toBe("cyc:m2-proc-1");
      expect(created.ckcResolutionRef).toBe("ckc:m2-proc-bind");

      const read = spawnSync(TSX, [WORKER, "read", dbPath, projectId], {
        cwd: APP_ROOT,
        encoding: "utf8",
        env: { ...process.env },
        timeout: 60_000,
      });
      expect(read.status, read.stderr || read.stdout).toBe(0);
      const loaded = JSON.parse(read.stdout.trim()) as {
        ok: boolean;
        projectId?: string;
        cycleInstanceId?: string;
        cycleTypeId?: string;
        profile?: string;
        status?: string;
        lpsVersion?: number;
        lpsId?: string;
        activeCycleInstanceId?: string;
        ckcResolutionRef?: string;
        digest?: string;
        doctrinePackageId?: string;
      };
      expect(loaded.ok).toBe(true);
      expect(loaded.projectId).toBe(projectId);
      expect(loaded.cycleInstanceId).toBe(created.cycleInstanceId);
      expect(loaded.cycleTypeId).toBe("cyc:delivery");
      expect(loaded.profile).toBe(created.profile);
      expect(loaded.status).toBe(created.status);
      expect(loaded.lpsVersion).toBe(created.lpsVersion);
      expect(loaded.lpsId).toBe(created.lpsId);
      expect(loaded.activeCycleInstanceId).toBe(created.activeCycleInstanceId);
      expect(loaded.ckcResolutionRef).toBe(created.ckcResolutionRef);
      expect(loaded.digest).toBe(created.digest);
      expect(loaded.doctrinePackageId).toBe("pkg:studio-v3-oa");
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  },
  60_000,
  );
});

```

### `projects/sfia-studio/app/__tests__/oa/cycle/m2RestartProcessWorker.ts`

```typescript
/**
 * Child-process worker for M2 restart proof (invoked via tsx).
 * Usage: tsx m2RestartProcessWorker.ts <create|read> <dbPath> <projectId>
 */
import path from "node:path";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
} from "@/lib/oa/project";
import { createSqliteCycleServices } from "@/lib/oa/cycle";

const APP_ROOT = process.cwd();
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

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

async function main(): Promise<void> {
  const [, , mode, dbPath, projectId] = process.argv;
  if (!mode || !dbPath || !projectId) {
    throw new Error("usage: <create|read> <dbPath> <projectId>");
  }

  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const projects = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-13T11:00:00.000Z",
    dbPath,
  });
  const cycles = createSqliteCycleServices({
    projectServices: projects,
    productStore: projects.store,
  });

  try {
    if (mode === "create") {
      const created = await projects.createProject.execute({
        projectId,
        title: "M2 Process Restart",
        objective: "m2-process-restart-objective",
        context: "m2-process-restart-context",
        scope: "m2-process-restart-scope",
        doctrinePackagePin: VALID_PIN,
        createdBy: ACTOR,
        lpsVersionId: "lps:m2-proc-v1",
        idempotencyKey: `idem:${projectId}`,
      });
      if (!created.ok) {
        console.error(JSON.stringify(created.error));
        process.exit(2);
      }

      const cycle = await cycles.createCycle.execute({
        cycleInstanceId: "cyc:m2-proc-1",
        cycleTypeId: "cyc:delivery",
        projectId,
        signals: {},
        createdBy: ACTOR,
        linkAsActiveCycle: true,
        expectedLpsVersion: 1,
        ckcResolutionRef: "ckc:m2-proc-bind",
        correlationId: "cor:m2-proc",
      });
      if (!cycle.ok) {
        console.error(JSON.stringify(cycle.error));
        process.exit(3);
      }

      const lps = await projects.getCurrentLivingProjectState.execute({
        projectId,
      });
      if (!lps.ok) {
        process.exit(4);
      }

      process.stdout.write(
        `${JSON.stringify({
          ok: true,
          projectId,
          cycleInstanceId: cycle.cycle.cycleInstanceId,
          cycleTypeId: cycle.cycle.cycleTypeId,
          profile: cycle.cycle.profile,
          status: cycle.cycle.status,
          lpsVersion: lps.livingProjectState.version,
          lpsId: lps.livingProjectState.lpsVersionId,
          activeCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
          ckcResolutionRef: lps.livingProjectState.ckcResolutionRef,
          digest: lps.livingProjectState.doctrinePackageRef.digest,
        })}\n`,
      );
      return;
    }

    if (mode === "read") {
      const project = await projects.getProject.execute({ projectId });
      const lps = await projects.getCurrentLivingProjectState.execute({
        projectId,
      });
      const cycle = await cycles.cycles.findById("cyc:m2-proc-1");
      if (!project.ok || !lps.ok || !cycle) {
        process.stdout.write(`${JSON.stringify({ ok: false })}\n`);
        process.exit(5);
      }
      process.stdout.write(
        `${JSON.stringify({
          ok: true,
          projectId: project.project.projectId,
          cycleInstanceId: cycle.cycleInstanceId,
          cycleTypeId: cycle.cycleTypeId,
          profile: cycle.profile,
          status: cycle.status,
          lpsVersion: lps.livingProjectState.version,
          lpsId: lps.livingProjectState.lpsVersionId,
          activeCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
          ckcResolutionRef: lps.livingProjectState.ckcResolutionRef,
          digest: lps.livingProjectState.doctrinePackageRef.digest,
          doctrinePackageId:
            lps.livingProjectState.doctrinePackageRef.doctrinePackageId,
        })}\n`,
      );
      return;
    }

    throw new Error(`unknown mode ${mode}`);
  } finally {
    projects.dispose();
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.stack : String(err));
  process.exit(1);
});

```

### `projects/sfia-studio/app/__tests__/project-assistant/m2CognitivePiloting.e2e.test.ts`

```typescript
/**
 * M2 F2 cognitive piloting e2e — live ContextSnapshot + anti-claims + isolation.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  RUNTIME_DISCLOSURES,
} from "@/lib/vertical-slice-runtime";

const tempDirs: string[] = [];

describe("M2 F2 cognitive piloting e2e", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  let projectId = "";

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.OPENAI_API_KEY;
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m2-f2-"));
    tempDirs.push(dir);
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-08-13T12:30:00.000Z",
    });
    const created = await runtime.createProject({
      name: "M2 Cognitive",
      objective: "Pilotage cognitif durable",
      context: "Nora F2 M2",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "M2",
      idempotencyKey: `idem:m2-f2-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("create failed");
    projectId = created.projectId;
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const dir = tempDirs.pop();
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
    }
    if (previousFake === undefined) {
      delete process.env.OPS1_CONVERSATION_PROVIDER;
    } else {
      process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
    }
  });

  it("B — actionable Standard/Light: Cycle+LPS+live snapshot; no HD/execution", async () => {
    const runtime = getRuntimeApplicationService();
    expect(runtime.oa).toBeTruthy();
    const before = await runtime.getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;

    const result = await orchestrateAssistantSend({
      projectId,
      content: "Prépare la prochaine étape __F2_ACTIONABLE__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(result.f2?.qualification?.cycleInstanceId).toMatch(/^cyc:f2-/);
    expect(result.f2?.qualification?.executionAuthority).toBe(false);
    expect(result.f2?.qualification?.ckcResolutionRef).toMatch(/^ckc:m2-/);
    expect(result.f2?.proposal?.contextSnapshot.lpsVersion).toBe(
      before.livingState.version + 1,
    );
    expect(result.f2?.proposal?.contextSnapshot.lpsId).not.toBe(
      before.livingState.id,
    );
    expect(result.f2?.decision).toBeNull();
    expect(result.f2?.labels.noExecution).toBe("AUCUNE EXÉCUTION");

    const after = await runtime.getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(before.livingState.version + 1);
    expect(after.livingState.activeCycleInstanceId).toBe(
      result.f2?.qualification?.cycleInstanceId,
    );
    expect(after.livingState.ckcResolutionRef).toBe(
      result.f2?.qualification?.ckcResolutionRef,
    );
    expect(after.disclosures.persistence).toBe(
      "PARTIAL_PROJECT_LPS_CYCLE_DURABLE",
    );
    expect(after.disclosures.cycleInstanceRestartSafe).toBe(true);
    expect(after.disclosures.agentExecution).toBe("DISABLED");

    const cycle = await runtime.oa!.cycleServices.getCycle.execute({
      cycleInstanceId: result.f2!.qualification!.cycleInstanceId!,
    });
    expect(cycle.ok).toBe(true);
    if (!cycle.ok) return;
    expect(cycle.cycle.status).not.toBe("active" as never);
  });

  it("D/E — ambiguous and informative do not mutate Cycle/LPS", async () => {
    const runtime = getRuntimeApplicationService();
    const before = await runtime.getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;

    const ambiguous = await orchestrateAssistantSend({
      projectId,
      content: "Fais le nécessaire __F2_AMBIGUOUS__",
    });
    expect(ambiguous.ok).toBe(true);
    if (!ambiguous.ok) return;
    expect(ambiguous.f2?.proposal).toBeNull();

    const informative = await orchestrateAssistantSend({
      projectId,
      content: "Résume l'objectif __F2_INFORMATIVE__",
    });
    expect(informative.ok).toBe(true);
    if (!informative.ok) return;
    expect(informative.f2?.turnKind).toBe("f1_informative");

    const after = await runtime.getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(before.livingState.version);
    expect(after.livingState.activeCycleInstanceId ?? null).toBeNull();
  });

  it("J — disclosures anti-claims (no FULLY_DURABLE / V3_ADOPTED / Cursor REAL)", () => {
    expect(RUNTIME_DISCLOSURES.persistence).toBe(
      "PARTIAL_PROJECT_LPS_CYCLE_DURABLE",
    );
    expect(RUNTIME_DISCLOSURES.agentExecution).toBe("DISABLED");
    expect(RUNTIME_DISCLOSURES.productPersistence).toBe(
      "SQLITE_OA_PRODUCT_STORE",
    );
    expect(JSON.stringify(RUNTIME_DISCLOSURES)).not.toMatch(
      /FULLY_DURABLE|V3_ADOPTED|RUN_READY|PRODUCT_READY/,
    );
    expect(RUNTIME_DISCLOSURE_MESSAGES_JOINED()).toMatch(/not ADOPTED/i);
  });

  it("I — Product DB path does not collide with D1/OPS1", () => {
    const runtime = getRuntimeApplicationService();
    const store = runtime.oa?.projectServices.store as {
      dbPath?: string;
    };
    expect(store?.dbPath).toBeTruthy();
    const p = (store.dbPath ?? "").replace(/\\/g, "/").toLowerCase();
    expect(p).not.toMatch(/\/d1\.sqlite$/);
    expect(p).not.toMatch(/\/ops1\.sqlite$/);
    expect(p).not.toMatch(/\/ops1\//);
  });
});

function RUNTIME_DISCLOSURE_MESSAGES_JOINED(): string {
  return RUNTIME_DISCLOSURES.messages.join(" ");
}

```

## Modified files — useful diffs

### `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
index f5719dd..5124f5f 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
@@ -1,8 +1,9 @@
 import { DatabaseSync } from "node:sqlite";

-export const PRODUCT_SCHEMA_VERSION = "m1-0.1.0" as const;
+export const PRODUCT_SCHEMA_VERSION_M1 = "m1-0.1.0" as const;
+export const PRODUCT_SCHEMA_VERSION = "m2-0.1.0" as const;

-const SCHEMA_SQL = `
+const BASE_SCHEMA_SQL = `
 PRAGMA foreign_keys = ON;

 CREATE TABLE IF NOT EXISTS schema_meta (
@@ -59,18 +60,41 @@ CREATE INDEX IF NOT EXISTS idx_oa_audit_project
   ON oa_audit_events(project_id, occurred_at);
 `;

-export function openProductSqlite(dbPath: string): DatabaseSync {
-  const db = new DatabaseSync(dbPath);
-  db.exec("PRAGMA foreign_keys = ON;");
-  db.exec(SCHEMA_SQL);
-  const existing = db
+const M2_CYCLE_SCHEMA_SQL = `
+CREATE TABLE IF NOT EXISTS oa_cycle_instances (
+  cycle_instance_id TEXT PRIMARY KEY NOT NULL,
+  project_id TEXT NOT NULL,
+  cycle_type_id TEXT NOT NULL,
+  profile TEXT NOT NULL,
+  status TEXT NOT NULL,
+  created_at TEXT NOT NULL,
+  acknowledged_at TEXT,
+  closed_at TEXT,
+  payload_json TEXT NOT NULL,
+  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id)
+);
+
+CREATE INDEX IF NOT EXISTS idx_oa_cycle_project
+  ON oa_cycle_instances(project_id, created_at);
+CREATE INDEX IF NOT EXISTS idx_oa_audit_cycle
+  ON oa_audit_events(event_type, occurred_at);
+`;
+
+function readSchemaVersion(db: DatabaseSync): string | null {
+  const row = db
     .prepare("SELECT value FROM schema_meta WHERE key = ?")
     .get("schema_version") as { value?: string } | undefined;
-  if (!existing?.value) {
-    db.prepare(
-      "INSERT INTO schema_meta(key, value) VALUES (?, ?)",
-    ).run("schema_version", PRODUCT_SCHEMA_VERSION);
-  }
+  return row?.value ?? null;
+}
+
+function setSchemaVersion(db: DatabaseSync, version: string): void {
+  db.prepare(
+    `INSERT INTO schema_meta(key, value) VALUES (?, ?)
+     ON CONFLICT(key) DO UPDATE SET value = excluded.value`,
+  ).run("schema_version", version);
+}
+
+function assertIntegrity(db: DatabaseSync): void {
   const integrity = db.prepare("PRAGMA integrity_check").get() as
     | Record<string, string>
     | undefined;
@@ -83,5 +107,35 @@ export function openProductSqlite(dbPath: string): DatabaseSync {
     }
     throw new Error("product_sqlite_integrity_failed");
   }
+}
+
+/**
+ * Open Product SQLite with additive M1→M2 migration.
+ * Fail closed on unknown/future schema versions.
+ */
+export function openProductSqlite(dbPath: string): DatabaseSync {
+  const db = new DatabaseSync(dbPath);
+  db.exec("PRAGMA foreign_keys = ON;");
+  db.exec(BASE_SCHEMA_SQL);
+
+  const version = readSchemaVersion(db);
+  if (version === null) {
+    db.exec(M2_CYCLE_SCHEMA_SQL);
+    setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
+  } else if (version === PRODUCT_SCHEMA_VERSION_M1) {
+    db.exec(M2_CYCLE_SCHEMA_SQL);
+    setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
+  } else if (version === PRODUCT_SCHEMA_VERSION) {
+    db.exec(M2_CYCLE_SCHEMA_SQL);
+  } else {
+    try {
+      db.close();
+    } catch {
+      /* ignore */
+    }
+    throw new Error(`product_sqlite_unsupported_schema:${version}`);
+  }
+
+  assertIntegrity(db);
   return db;
 }

```

### `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts
index 026f3ae..59dbbb4 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts
@@ -1,18 +1,25 @@
 import type { DatabaseSync } from "node:sqlite";
 import type { ProjectPersistenceUnitOfWorkPort } from "../../ports/projectPersistenceUnitOfWorkPort";
+import type { CyclePersistenceUnitOfWorkPort } from "@/lib/oa/cycle/ports/cyclePersistenceUnitOfWorkPort";
 import { openProductSqlite } from "./db";
+import type { ProductSqliteHandle } from "./productSqliteHandle";
 import { resolveProductSqlitePath } from "./paths";

 /**
- * SQLite product UnitOfWork for atomic Project + LPS mutations (M1).
- * Isolated file — not D1 / OPS1 / FinOps.
+ * SQLite product UnitOfWork for Project/LPS (M1) + CycleInstance (M2).
+ * Isolated file — not D1 / OPS1 / FinOps. Single Product DB authority.
  */
-export class SqliteProductStore implements ProjectPersistenceUnitOfWorkPort {
+export class SqliteProductStore
+  implements
+    ProjectPersistenceUnitOfWorkPort,
+    CyclePersistenceUnitOfWorkPort,
+    ProductSqliteHandle
+{
   readonly db: DatabaseSync;
   readonly dbPath: string;

   /** Test hook — force next save to throw (atomicity tests). */
-  failNextSave: "project" | "lps" | null = null;
+  failNextSave: "project" | "lps" | "cycle" | null = null;

   private depth = 0;
   private queue: Promise<void> = Promise.resolve();
@@ -23,26 +30,34 @@ export class SqliteProductStore implements ProjectPersistenceUnitOfWorkPort {
   }

   async runInTransaction<T>(fn: () => Promise<T>): Promise<T> {
-    const run = async (): Promise<T> => {
-      if (this.depth === 0) {
-        this.db.exec("BEGIN IMMEDIATE");
-      }
+    // Re-entrant nest: same Product store used by Cycle + LPS (M2).
+    // Must not enqueue behind the outer transaction (deadlock).
+    if (this.depth > 0) {
       this.depth += 1;
       try {
         const result = await fn();
         this.depth -= 1;
-        if (this.depth === 0) {
-          this.db.exec("COMMIT");
-        }
         return result;
       } catch (err) {
         this.depth -= 1;
-        if (this.depth === 0) {
-          try {
-            this.db.exec("ROLLBACK");
-          } catch {
-            /* ignore rollback errors after failed begin */
-          }
+        throw err;
+      }
+    }
+
+    const run = async (): Promise<T> => {
+      this.db.exec("BEGIN IMMEDIATE");
+      this.depth = 1;
+      try {
+        const result = await fn();
+        this.depth = 0;
+        this.db.exec("COMMIT");
+        return result;
+      } catch (err) {
+        this.depth = 0;
+        try {
+          this.db.exec("ROLLBACK");
+        } catch {
+          /* ignore rollback errors after failed begin */
         }
         throw err;
       }

```

### `projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts b/projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts
index ee18f4e..f4e14a8 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts
@@ -13,8 +13,8 @@ import type {
   CycleInstance,
 } from "../domain/types";
 import type { CycleAuditPort } from "../ports/cycleAudit";
+import type { CyclePersistenceUnitOfWorkPort } from "../ports/cyclePersistenceUnitOfWorkPort";
 import type { CycleRepositoryPort } from "../ports/cycleRepository";
-import type { MemoryCycleStore } from "../infrastructure/memoryCycleStore";

 function newId(prefix: "cor"): string {
   return `${prefix}:${randomBytes(8).toString("hex")}`;
@@ -32,7 +32,7 @@ export class CreateCycle {
     private readonly projectServices: ProjectServices,
     private readonly clock: ClockPort,
     private readonly audit: CycleAuditPort,
-    private readonly store?: MemoryCycleStore,
+    private readonly store?: CyclePersistenceUnitOfWorkPort,
   ) {}

   async execute(request: CreateCycleRequest): Promise<CreateCycleResult> {
@@ -156,6 +156,7 @@ export class CreateCycle {
               context: current.livingProjectState.context,
               scope: current.livingProjectState.scope,
               activeCycleInstanceId: request.cycleInstanceId,
+              ckcResolutionRef: request.ckcResolutionRef,
             });
           if (!appended.ok) {
             if (appended.error.detailCode === "LPS_VERSION_CONFLICT") {

```

### `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index 736a084..1b8a09c 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -15,6 +15,7 @@ import type { DoctrinePackagePin, ClockPort } from "@/lib/oa/doctrine";
 import {
   createCkcQualificationServices,
   createInMemoryCycleServices,
+  createSqliteCycleServices,
   type CkcQualificationServices,
   type CycleServices,
 } from "@/lib/oa/cycle";
@@ -37,6 +38,7 @@ import {
   type EvidenceReviewServices,
 } from "@/lib/oa/evidence-review";
 import type { ProjectServices } from "@/lib/oa/project";
+import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
 import {
   createAttemptReaderBridge,
   createF3FixtureAgentDescriptor,
@@ -117,7 +119,15 @@ function wireOaStack(
   projectServices: ProjectServices,
   clock: ClockPort,
 ): RuntimeOaStack {
-  const cycleServices = createInMemoryCycleServices({ projectServices, clock });
+  // M2: same Product SQLite store for Project/LPS + CycleInstance when available.
+  const cycleServices =
+    projectServices.store instanceof SqliteProductStore
+      ? createSqliteCycleServices({
+          projectServices,
+          productStore: projectServices.store,
+          clock,
+        })
+      : createInMemoryCycleServices({ projectServices, clock });
   const ckcQualification = createCkcQualificationServices({ clock });
   const authorityResolver = new MemoryAuthorityResolver();
   const decisionServices = createInMemoryDecisionServices({

```

### `projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
index 3edf5c6..435d2a4 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
@@ -2,30 +2,33 @@ import "./serverGuard";

 /**
  * D-V2-05 runtime disclosures — always attached to runtime results.
- * M1: Project/LPS Product SQLite is restart-safe; other OA stacks remain process-local.
+ * M2: Project/LPS + CycleInstance subset Product SQLite restart-safe;
+ * conversation/proposal/decision/contract/attempt/evidence remain process-local.
  * Not a product-ready / v3-ADOPTED claim surface.
  */
 export interface RuntimeDisclosures {
   readonly runtimeMode: "LOCAL_PROCESS";
-  /** Partial: T-A1 Project/LPS durable; T-A2…T-A6 still process-local Memory. */
-  readonly persistence: "PARTIAL_PROJECT_LPS_DURABLE";
+  /** Partial: Project/LPS + CycleInstance M2 durable; other OA stacks process-local. */
+  readonly persistence: "PARTIAL_PROJECT_LPS_CYCLE_DURABLE";
   readonly agentExecution: "DISABLED";
   readonly iam: "NOT_SELECTED";
   readonly productPersistence: "SQLITE_OA_PRODUCT_STORE";
   readonly delivery: "NOT_AUTHORIZED";
   readonly cutover: "NOT_AUTHORIZED";
-  /** True because non-T-A1 OA state remains volatile. */
+  /** True because conversation/proposal/decision/contract/attempt/evidence remain volatile. */
   readonly localDataVolatile: true;
-  /** True for cycle/decision/contract/attempt/evidence Memory; Project/LPS survive restart. */
+  /** True for non-M2 OA state; Project/LPS/CycleInstance survive restart. */
   readonly restartMayLoseState: true;
   readonly projectLpsRestartSafe: true;
+  readonly cycleInstanceRestartSafe: true;
   readonly messages: readonly string[];
 }

 export const RUNTIME_DISCLOSURE_MESSAGES: readonly string[] = Object.freeze([
   "Mode local process-bound: the runtime lives in a single Node process.",
-  "Project/LPS Product persistence uses an isolated node:sqlite store (G0-B / M1).",
-  "Other OA business state (cycle/decision/contract/attempt/evidence) remains process-local Memory and may be lost on restart.",
+  "Project/LPS + CycleInstance Product persistence uses an isolated node:sqlite store (G0-B / M1 / M2).",
+  "Conversation, Proposal F2, HumanDecision, ExecutionContract, Attempt, and Evidence remain process-local and may be lost on restart.",
+  "Trajectory/Epistemic Memory remain process-local (out of M2 durability).",
   "IAM is not configured.",
   "Real agent execution is disabled.",
   "Delivery and cutover are not authorized.",
@@ -34,7 +37,7 @@ export const RUNTIME_DISCLOSURE_MESSAGES: readonly string[] = Object.freeze([

 export const RUNTIME_DISCLOSURES: RuntimeDisclosures = Object.freeze({
   runtimeMode: "LOCAL_PROCESS",
-  persistence: "PARTIAL_PROJECT_LPS_DURABLE",
+  persistence: "PARTIAL_PROJECT_LPS_CYCLE_DURABLE",
   agentExecution: "DISABLED",
   iam: "NOT_SELECTED",
   productPersistence: "SQLITE_OA_PRODUCT_STORE",
@@ -43,6 +46,7 @@ export const RUNTIME_DISCLOSURES: RuntimeDisclosures = Object.freeze({
   localDataVolatile: true,
   restartMayLoseState: true,
   projectLpsRestartSafe: true,
+  cycleInstanceRestartSafe: true,
   messages: RUNTIME_DISCLOSURE_MESSAGES,
 });


```

### `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 2d968f1..21fb6ad 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -1,13 +1,17 @@
 /**
- * F2 pipeline: intent → qualify → proposal / clarification.
- * Stops before any execution.
+ * F2 pipeline: intent → qualify → durable CycleInstance + LPS → live ContextSnapshot → proposal.
+ * Stops before any execution. M2: Cycle/LPS/CKC linkage durable; conversation/proposal process-local.
  */

-import { randomUUID } from "node:crypto";
+import { randomBytes, randomUUID } from "node:crypto";
 import {
   getLiveConversationAvailability,
   isFakeConversationProviderForced,
 } from "@/lib/platform/ai";
+import {
+  getRuntimeApplicationService,
+  readLiveProjectContext,
+} from "@/lib/vertical-slice-runtime";
 import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
 import type {
   AssistantHistoryMessage,
@@ -17,7 +21,7 @@ import type {
 import { orchestrateProjectAssistantTurn } from "../orchestrateTurn";
 import { analyzeIntent } from "./intentAnalysis";
 import { evaluateMorrisGateRequired } from "./gatePolicy";
-import { qualifyWithCkc } from "./qualify";
+import { projectCkcResolutionRef, qualifyWithCkc } from "./qualify";
 import {
   F2_PROCESS_LOCAL_NOTICE,
   createProposalId,
@@ -31,7 +35,7 @@ import type {
 } from "./types";

 const EPHEMERAL_NOTICE =
-  "Conversation et propositions éphémères (process-local) — un rechargement ou redémarrage peut tout effacer. Aucune persistence produit. AUCUNE EXÉCUTION.";
+  "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle linkage M2 est persisté dans Product SQLite. AUCUNE EXÉCUTION.";

 function toContextDto(
   result: Extract<
@@ -57,6 +61,8 @@ function toContextDto(
     runtimeMode: result.disclosures.runtimeMode,
     persistence: result.disclosures.persistence,
     readiness: result.readiness.status,
+    activeCycleInstanceId: result.livingState.activeCycleInstanceId ?? null,
+    ckcResolutionRef: result.livingState.ckcResolutionRef ?? null,
   };
 }

@@ -66,6 +72,8 @@ function snapshotFrom(project: ProjectAssistantContextDto): F2ContextSnapshot {
     lpsId: project.lpsId,
     lpsVersion: project.lpsVersion,
     doctrineDigest: project.doctrineDigest,
+    activeCycleInstanceId: project.activeCycleInstanceId ?? null,
+    ckcResolutionRef: project.ckcResolutionRef ?? null,
   };
 }

@@ -129,6 +137,12 @@ function buildProposal(input: {
       `ckc:${input.qualification.detailedStatus}`,
       `project:${input.project.projectId}`,
       `lps:${input.project.lpsId}@${input.project.lpsVersion}`,
+      ...(input.qualification.cycleInstanceId
+        ? [`cycle:${input.qualification.cycleInstanceId}`]
+        : []),
+      ...(input.qualification.ckcResolutionRef
+        ? [`ckcRef:${input.qualification.ckcResolutionRef}`]
+        : []),
     ],
     risks: input.intent.risks,
     reservations: input.intent.reservations,
@@ -202,6 +216,7 @@ function f2Success(base: {

 /**
  * Unified send orchestration: preserves F1 for informative intents.
+ * Actionable path creates durable CycleInstance + LPS append, then live snapshot.
  */
 export async function orchestrateAssistantSend(input: {
   projectId: string;
@@ -232,7 +247,7 @@ export async function orchestrateAssistantSend(input: {
     };
   }

-  const project = toContextDto(projectResult);
+  let project = toContextDto(projectResult);
   const modeResolution = resolveMode();
   if (!modeResolution.canProceed) {
     return {
@@ -274,13 +289,14 @@ export async function orchestrateAssistantSend(input: {

   const { analysis, presentation, model } = analysisResult;

-  // A — informative → existing F1 path
+  // A — informative → existing F1 path (no Cycle/LPS mutation)
   if (analysis.intentClass === "informative" && analysis.parseOk) {
     const f1 = await orchestrateProjectAssistantTurn(input);
     if (!f1.ok) return f1;
     return {
       ...f1,
       model: f1.model ?? model,
+      ephemeralNotice: EPHEMERAL_NOTICE,
       f2: {
         turnKind: "f1_informative",
         intentClass: "informative",
@@ -300,7 +316,7 @@ export async function orchestrateAssistantSend(input: {
     };
   }

-  // C — ambiguous / fail-closed
+  // C — ambiguous / fail-closed (no Cycle/LPS mutation)
   if (analysis.intentClass === "ambiguous" || !analysis.parseOk) {
     return f2Success({
       text:
@@ -326,12 +342,30 @@ export async function orchestrateAssistantSend(input: {
     });
   }

+  const runtime = getRuntimeApplicationService();
+  const oa = runtime.oa;
+  if (!oa) {
+    return f2Success({
+      text:
+        "[Runtime] Services OA indisponibles pour la qualification M2. AUCUNE EXÉCUTION.",
+      mode: modeResolution.mode as "fixture" | "live",
+      presentation,
+      model,
+      project,
+      intentClass: analysis.intentClass,
+    });
+  }
+
+  const preLpsVersion = project.lpsVersion;
+  const correlationId = `cor:f2-${randomBytes(8).toString("hex")}`;
+
   const qualified = await qualifyWithCkc({
     cycleTypeId: analysis.candidateCycleTypeId,
     signals: analysis.signals,
     objective: analysis.objective ?? undefined,
     scope: analysis.scope ?? undefined,
-    correlationId: `f2-qual:${randomUUID()}`,
+    correlationId,
+    ckcQualification: oa.ckcQualification,
   });

   if (!qualified.ok) {
@@ -345,7 +379,10 @@ export async function orchestrateAssistantSend(input: {
     });
   }

-  const { qualification } = qualified;
+  let { qualification } = qualified;
+  const ckcResolutionRef =
+    qualification.ckcResolutionRef ??
+    projectCkcResolutionRef(qualified.raw.proof);

   if (
     qualification.requiresJustificationForCritical &&
@@ -364,6 +401,81 @@ export async function orchestrateAssistantSend(input: {
     });
   }

+  const cycleInstanceId = `cyc:f2-${randomBytes(8).toString("hex")}`;
+  const created = await oa.cycleServices.createCycle.execute({
+    cycleInstanceId,
+    cycleTypeId: qualification.cycleTypeId,
+    projectId: project.projectId,
+    objective: analysis.objective ?? undefined,
+    scope: analysis.scope ?? undefined,
+    signals: analysis.signals,
+    justification: analysis.criticalJustification ?? undefined,
+    createdBy: {
+      actorId: "actor:nora-f2",
+      role: "agent",
+      displayName: "Nora F2",
+      authorityLevel: "N1",
+    },
+    correlationId,
+    linkAsActiveCycle: true,
+    expectedLpsVersion: preLpsVersion,
+    ckcResolutionRef,
+  });
+
+  if (!created.ok) {
+    return f2Success({
+      text: `[Cycle] Création CycleInstance échouée (${created.error.detailCode}). Aucune mutation partielle. AUCUNE EXÉCUTION.`,
+      mode: modeResolution.mode as "fixture" | "live",
+      presentation,
+      model,
+      project,
+      intentClass: analysis.intentClass,
+      qualification,
+      executionBlocked: analysis.intentClass === "execution_request",
+    });
+  }
+
+  // Live context AFTER mutation — pre-mutation snapshot does not satisfy M2.
+  const live = await readLiveProjectContext(oa, project.projectId);
+  if (!live.ok) {
+    return f2Success({
+      text: `[Contexte] Relecture LPS post-mutation échouée. AUCUNE EXÉCUTION.`,
+      mode: modeResolution.mode as "fixture" | "live",
+      presentation,
+      model,
+      project,
+      intentClass: analysis.intentClass,
+      qualification: {
+        ...qualification,
+        cycleInstanceId: created.cycle.cycleInstanceId,
+        cycleStatus: created.cycle.status,
+        ckcResolutionRef,
+      },
+    });
+  }
+
+  const reloaded = await loadProjectRuntimeForAssistant(project.projectId);
+  if (reloaded.ok) {
+    project = toContextDto(reloaded);
+  } else {
+    project = {
+      ...project,
+      lpsId: live.context.lpsId,
+      lpsVersion: live.context.lpsVersion,
+      doctrineDigest: live.context.doctrineDigest,
+      activeCycleInstanceId: live.context.activeCycleInstanceId,
+      ckcResolutionRef: live.context.ckcResolutionRef,
+    };
+  }
+
+  qualification = {
+    ...qualification,
+    cycleInstanceId: created.cycle.cycleInstanceId,
+    cycleStatus: created.cycle.status,
+    ckcResolutionRef,
+    recommendedProfile: created.cycle.profile,
+  };
+
   const morrisGateRequired = evaluateMorrisGateRequired({
     recommendedProfile: qualification.recommendedProfile,
     signals: analysis.signals,
@@ -387,7 +499,9 @@ export async function orchestrateAssistantSend(input: {
     presentation === "test_provider" ? "[TEST/FAKE · NON LIVE]" : "[LIVE]",
     "Qualification SFIA et proposition structurée générées.",
     `Cycle: ${qualification.cycleTypeId} (${qualification.cycleLabel}).`,
+    `CycleInstance: ${created.cycle.cycleInstanceId} (${created.cycle.status}).`,
     `Profil recommandé: ${qualification.recommendedProfile}.`,
+    `LPS v${preLpsVersion} → v${project.lpsVersion}.`,
     qualification.recommendationLabel,
     morrisGateRequired
       ? "DÉCISION REQUISE — gate Morris ouvert."

```

### `projects/sfia-studio/app/features/project-assistant/f2/qualify.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/qualify.ts b/projects/sfia-studio/app/features/project-assistant/f2/qualify.ts
index 710a68a..5ca8862 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/qualify.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/qualify.ts
@@ -1,27 +1,37 @@
 /**
- * Native SFIA qualification via QualifyCycleWithCkc (recommendation only).
+ * Native SFIA qualification via shared RuntimeOaStack CKC services (M2).
+ * Recommendation only — never a Morris decision / execution authority.
  */

 import {
   CYCLE_TYPE_CATALOG_FINGERPRINT,
   CYCLE_TYPE_CATALOG_VERSION,
-  createCkcQualificationServices,
+  type CkcQualificationServices,
   type CkcQualificationSuccessResult,
 } from "@/lib/oa/cycle";
 import type { F2QualificationSignals, QualificationDto } from "./types";

+export function projectCkcResolutionRef(
+  proof: CkcQualificationSuccessResult["proof"],
+): string {
+  const digest = proof.catalogHash.replace(/^sha256:/i, "").slice(0, 12);
+  const corr = proof.correlationId.replace(/[^a-zA-Z0-9]/g, "").slice(-16);
+  return `ckc:m2-${digest || "nodigest"}-${corr || "nocorr"}`;
+}
+
 export async function qualifyWithCkc(input: {
   cycleTypeId: string;
   signals: F2QualificationSignals;
   objective?: string;
   scope?: string;
   correlationId: string;
+  /** Shared runtime CKC services — preferred over private composition. */
+  ckcQualification: CkcQualificationServices;
 }): Promise<
   | { ok: true; qualification: QualificationDto; raw: CkcQualificationSuccessResult }
   | { ok: false; code: string; message: string }
 > {
-  const services = createCkcQualificationServices();
-  const result = await services.qualifyCycleWithCkc.execute({
+  const result = await input.ckcQualification.qualifyCycleWithCkc.execute({
     cycleTypeId: input.cycleTypeId,
     catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
     catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
@@ -54,6 +64,8 @@ export async function qualifyWithCkc(input: {
     disclosures: [...result.disclosures],
     signals: input.signals,
     recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION MORRIS",
+    ckcResolutionRef: projectCkcResolutionRef(result.proof),
+    executionAuthority: false,
   };

   return { ok: true, qualification, raw: result };

```

### `projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts b/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
index 985edf2..868a730 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
@@ -218,7 +218,8 @@ function buildProjection(
     !metadata ||
     !doctrine ||
     project.currentLpsVersionId !== lps.lpsVersionId ||
-    lps.version !== 1
+    !Number.isInteger(lps.version) ||
+    lps.version < 1
   ) {
     return null;
   }
@@ -239,8 +240,10 @@ function buildProjection(
     }),
     lps: Object.freeze({
       id: lps.lpsVersionId,
-      version: 1,
+      version: lps.version,
       createdAt: lps.createdAt,
+      activeCycleInstanceId: lps.activeCycleInstanceId ?? null,
+      ckcResolutionRef: lps.ckcResolutionRef ?? null,
     }),
     localMode: true,
     iam: "NOT_SELECTED",

```

### `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 3104354..04d1dd3 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -8,11 +8,11 @@
 | **Build Doctrine** | [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md) |
 | **Snapshot Git** | origin/main @ `c6925954a7aa86f34c9fcd6f7babf0336014eba3` |
 | **Timestamp création** | 2026-08-12 21:53:10 CEST (+0200) *(historique)* |
-| **Timestamp maintenance** | 2026-08-13 10:56:00 +0200 (Europe/Paris) — Post-merge M1 |
+| **Timestamp maintenance** | 2026-08-13 12:19:00 +0200 (Europe/Paris) — M2 Delivery proof (candidate) |
 | **Validation Morris** | 2026-08-13 02:05 +0200 (Europe/Paris) — Build Doctrine + Convergence Roadmap officiellement validées comme gouvernance de construction SFIA Studio |
 | **Intégration Git** | Gouvernance : PR #334 / merge `1d09e4159932b3885817911e10a2d29a82ae9ea7` · **M1 :** PR #337 / head `5cbda862885b36658fc7f2b33a20311611da969e` / merge `c6925954a7aa86f34c9fcd6f7babf0336014eba3` · CI SFIA Studio **#158** SUCCESS |
 | **Sources** | Git `main` · PR #337 · CI #158 · handoff M1 tip `84330e34461bbd35adc7baa14fabe993baf24288` · decision pack G0 · framing `30`–`37` · code `projects/sfia-studio/app/**` |
-| **Anti-claims** | G0-A/G0-B **consommés** · M1 **mergé** · ≠ runtime v3 ADOPTED · ≠ Cursor REAL authorized · ≠ Gate D consumed · ≠ Auth/Ack promoted · ≠ M2 authorized · ≠ full OA durable |
+| **Anti-claims** | G0-A/G0-B **consommés** · M1 **mergé** · M2 **IMPLEMENTED CANDIDATE — READY FOR MORRIS VALIDATION** (delivery branch ; ≠ mergé) · ≠ runtime v3 ADOPTED · ≠ Cursor REAL authorized · ≠ Gate D consumed · ≠ Auth/Ack promoted · ≠ M3 authorized · ≠ full OA durable |

 ## B1. Nature du document

@@ -42,7 +42,8 @@ Fondations V3-F01…F15 = couverture doctrine progressive (B9).
 | Product persistence | **SELECTED / ACTIVE FOR T-A1** — `node:sqlite` OA Product Store (G0-B) · **≠** persistence de tout le runtime |
 | Architecture convergence | **Option 1 ADOPTED** — OA Native Backbone + Harvest OPS1 Cursor (G0-A) |
 | Project/LPS restart safety | **PROVEN / MERGED** (process A→B + CI #158) |
-| Autres OA (T-A2…T-A6) | **Memory partiel** — process-local |
+| Autres OA (T-A2 CycleInstance M2 subset) | **Product SQLite** — CycleInstance + LPS linkage restart-safe (delivery M2 candidate) |
+| Autres OA (T-A2 trajectory/epistemic ; T-A3…T-A6) | **Memory partiel** — process-local |
 | Cursor REAL depuis Nora | **0** / DISABLED |
 | Gate D | **NOT CONSUMED** |

@@ -88,11 +89,11 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | Gap | Statut | Bloque |
 | --- | --- | --- |
 | Project/LPS durable | **MERGED ON MAIN — EXIT PROOF SATISFIED** (PR #337) | M2+ |
-| GuidedSession / historique durable | PARTIAL / MISSING | M2 daily use |
-| CycleInstance réel lié F2 | EXISTS BUT NOT WIRED | M2/M3 |
+| GuidedSession / historique durable | PARTIAL / MISSING — **DEFERRED** (dette M2 optionnelle Roadmap) | usage quotidien / milestone ultérieur |
+| CycleInstance réel lié F2 | **CLOSED (M2 candidate)** — Product SQLite + F2 wire + restart proof | M3+ |
 | HumanDecision durable/authoritative | PROCESS_LOCAL / demo | M3, Gate D |
-| CKC ↔ cycle binding | PARTIAL (qualify only) | M2 |
-| live contextSnapshot | PARTIAL — LPS+doctrine digests durables ; agrégat ContextSnapshot **absent** | M2 |
+| CKC ↔ cycle binding | **CLOSED (M2 candidate)** — `ckcResolutionRef` projection on LPS | — |
+| live contextSnapshot | **CLOSED (M2 candidate)** — `F2ContextSnapshot` post-mutation (pas nouvel aggregate durable) | — |
 | ExecutionContract from real HD | FIXTURE path only | M3/M4 |
 | Cursor projection canonique | PARTIAL | M3/M4 |
 | Cursor REAL behind T-A5 | MISSING on Nora | M4 |
@@ -100,7 +101,7 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | Evidence durable | MISSING | M5 |
 | ReviewBundle → LPS writeback | MISSING | M5/M6 |
 | Nora post-exec analysis | PARTIAL (UI cards) | M5 |
-| Restart safety Studio core | **PARTIAL** — Project/LPS restart-safe ; autres OA Memory | M2+ |
+| Restart safety Studio core | **PARTIAL** — Project/LPS + CycleInstance M2 restart-safe ; conversation/proposal/HD/T-A3…T-A6 Memory | M3+ |
 | IAM/authz product-grade | PARTIAL (candidate Auth.js) | M4/M8 |

 ## B6. Decisions / gates
@@ -124,7 +125,8 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 1. Promotion Auth.js / Critical Ack candidate — **Decision Required**
 2. Cursor REAL / Gate D — **NOT AUTHORIZED / NOT CONSUMED**
 3. Disposition OPS1 / D1 / execution-run — **Decision Required**
-4. **M2 Delivery** — **NOT AUTHORIZED — MORRIS GO REQUIRED**
+4. **M2** — **IMPLEMENTED CANDIDATE — READY FOR MORRIS VALIDATION** (Delivery GO consommé ; commit/push/PR/merge ≠ autorisés)
+5. **M3 Delivery** — **NOT AUTHORIZED — MORRIS GO REQUIRED**

 ## B7–B8. Roadmap capability-driven (milestones)

@@ -175,13 +177,15 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | **ID** | M2 |
 | **Capacité v3** | V3-F01 CKC · F03 DoctrinePackage · F04 épistémologie (base) · F05 chaîne cognitive |
 | **Outcome** | Dialogue Nora dans un projet durable ; qualification cycle ; LPS actualisé sans wizard rigide |
-| **État actuel** | F1/F2 wired process-local |
-| **Actifs** | F1, F2, platform AI, CKC qualify |
-| **Gaps** | historique conversation durable optionnel ; CycleInstance wire ; live context ; CKC/cycle binding nécessaire |
+| **État actuel** | F1/F2 wired ; CycleInstance Product SQLite + LPS linkage + live `F2ContextSnapshot` post-mutation |
+| **Actifs** | T-A1 KEEP · T-A2 Cycle COMPLETE (subset) · F1/F2 ADAPT · CKC qualify KEEP · shared RuntimeOaStack |
+| **Gaps fermés (candidate)** | CycleInstance wire F2 · CKC↔cycle `ckcResolutionRef` · live ContextSnapshot · LPS N→N+1 · restart process A→B |
+| **Dette restante** | conversation/proposal process-local ; Trajectory/Epistemic Memory ; DOC-DEBT-M1-01 ouvert |
 | **Dépendances** | M1 — **SATISFIED** |
-| **Delivery authorization** | **NOT AUTHORIZED — MORRIS GO REQUIRED** |
-| **Preuve e2e** | conversation → proposal avec contextSnapshot live → LPS version visible |
-| **Statut** | **PARTIAL** (UI existe ; durabilité non) |
+| **Delivery authorization** | GO Morris M2 **consommé** (Delivery) · **≠** commit/push/PR/merge autorisés sans gate |
+| **Preuve e2e** | conversation → qualification → Cycle durable → LPS N+1 → proposal ContextSnapshot live → visible `/studio` · process restart PASS |
+| **Next** | M3 |
+| **Statut** | **IMPLEMENTED CANDIDATE — READY FOR MORRIS VALIDATION** |

 ### Milestone 3 — Gouvernance humaine + préparation réelle

@@ -194,6 +198,7 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | **Actifs** | T-A3/T-A4 ; F2/F3 UI |
 | **Gaps** | L2 durable HD ; L3 proposal binding ; L8 REAL contract fields ; autorité non-demo |
 | **Dépendances** | M1–M2 ; IAM minimal |
+| **Delivery authorization** | **NOT AUTHORIZED — MORRIS GO REQUIRED** |
 | **Preuve e2e** | GO Morris → HD accepted/current survive restart → contract fingerprint stable |
 | **Statut** | **PARTIAL** |

@@ -282,13 +287,13 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 ```text
 CRITICAL PATH:
   M1 durable Project/LPS — SATISFIED / MERGED ON MAIN (PR #337 @ c6925954…)
-  → M2 Nora contextuel durable
+  → M2 Nora contextuel durable — IMPLEMENTED CANDIDATE — READY FOR MORRIS VALIDATION
   → M3 HD durable + ExecutionContract exact
   → M4 Cursor REAL borné (T-A5+harvest+Ack+Gate D)
   → M5 Evidence/ReviewBundle + LPS writeback
   → M6 boucle complète sans copier-coller

-NEXT CAPABILITY: M2 — NOT AUTHORIZED — MORRIS GO REQUIRED
+NEXT CAPABILITY: M3 — NOT AUTHORIZED — MORRIS GO REQUIRED

 TRANSVERSE LATER: FinOps capture optionnelle · multi-user · observability depth · F08/F10 depth
 FROZEN (RECOMMENDATION until GO): execution-run feature growth · OPS1 UI expansion · FinOps lots non bloquants · D1 feature growth

```

## Other modified files (see `git diff` in worktree)

- adversarialValidation.test.ts (MemoryCycleStore cast)
- m1RestartProcessProof.test.ts (timeout)
- ProjectAssistantPanel*.tsx / tests / orchestrateTurn / types / proposalStore / f2 types
- vertical-slice UI tests + RuntimeDisclosureBanner fixtures
- cycle/index.ts, project/index.ts, vertical-slice-runtime index/types
- ProjectWorkspaceView.tsx (cycle/ckc display + honest copy)
