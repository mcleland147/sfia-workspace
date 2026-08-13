# SFIA Studio M1 — Durable Project/LPS Product SQLite — FULL Review Pack

- **Horodatage:** 2026-08-13 09:09:27 CEST
- **Objectif:** Consommer G0-A/G0-B (Morris ADOPTED) et livrer M1 socle projet v3 fiable (Product persistence node:sqlite OA) avec preuve create → persist → restart → recover.
- **Cycle:** 8 — Delivery / implémentation
- **Profil:** Critical — fondation persistence OA, atomicité Project/LPS, restart safety, composition runtime.
- **Typologie:** EVOL
- **Branche Delivery:** `delivery/sfia-studio-m1-durable-project-lps`
- **HEAD / origin/main:** `3413d2e42243d5419f874a8ccf5a50341bb968d6`
- **Coverage:** created files full content = YES · modified sections complete / useful diff = YES · synthesis only = NO · review pack verdict = COMPLETE

---

## 1. Local Git Truth Check

| Check | Result |
|---|---|
| `origin/main` | `3413d2e42243d5419f874a8ccf5a50341bb968d6` PASS |
| HEAD (Delivery branch base) | `3413d2e42243d5419f874a8ccf5a50341bb968d6` PASS |
| Branche initiale avant switch | `architecture/sfia-studio-g0-convergence-persistence` (pré-M1) |
| Branche Delivery | `delivery/sfia-studio-m1-durable-project-lps` créée depuis `origin/main` |
| Tracked/staged avant M1 | clean (G0 pack + `.tmp-sfia-review/**` untracked OK) |
| G0 pack SHA préservé au switch | `15c34cb7dd4cec7cc74f54ed5e2a01e0e330e41788fa37a9ebc74bf3ec07b1dd` PASS |
| Collision branche | aucune PASS |
| Push projet | aucun |

### Git Review Index (état post-Delivery, pre-commit projet)

```
M projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/runtimeApplicationService.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
 M projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts
 M projects/sfia-studio/app/lib/oa/project/application/createProject.ts
 M projects/sfia-studio/app/lib/oa/project/index.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectStore.ts
 M projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
 M projects/sfia-studio/app/lib/vertical-slice-core/types.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/singleton.ts
 M projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
?? .tmp-sfia-review-pre.txt
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/oa/project/m1ProductSqliteDurability.test.ts
?? projects/sfia-studio/app/__tests__/oa/project/m1RestartProcessProof.test.ts
?? projects/sfia-studio/app/__tests__/oa/project/m1RestartProcessWorker.ts
?? projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/
?? projects/sfia-studio/app/lib/oa/project/ports/projectPersistenceUnitOfWorkPort.ts
?? projects/sfia-studio/convergence/sfia-studio-g0-architecture-persistence-decision-pack.md
```

```
.../ProjectAssistantPanel.test.tsx                 | 13 ++--
 .../project-assistant/f2.orchestrate.test.ts       |  7 ++-
 .../project-assistant/orchestrateTurn.test.ts      |  7 ++-
 .../localProjectComposition.test.ts                |  6 +-
 .../runtimeApplicationService.test.ts              | 11 +++-
 .../vertical-slice-ui/createProjectUi.test.tsx     | 26 +++++---
 .../vertical-slice-ui/projectWorkspaceUi.test.tsx  | 22 ++++---
 .../application/appendLivingProjectStateVersion.ts |  4 +-
 .../lib/oa/project/application/createProject.ts    |  4 +-
 projects/sfia-studio/app/lib/oa/project/index.ts   | 41 +++++++++---
 .../project/infrastructure/memoryProjectStore.ts   |  5 +-
 .../vertical-slice-core/localProjectComposition.ts | 25 ++++++--
 .../app/lib/vertical-slice-core/types.ts           | 11 +++-
 .../app/lib/vertical-slice-runtime/disclosures.ts  | 25 +++++---
 .../app/lib/vertical-slice-runtime/service.ts      | 18 ++++++
 .../app/lib/vertical-slice-runtime/singleton.ts    |  5 ++
 .../sfia-studio-convergence-build-doctrine.md      |  4 +-
 .../convergence/sfia-studio-convergence-roadmap.md | 73 +++++++++++-----------
 18 files changed, 202 insertions(+), 105 deletions(-)
```

```
M	projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/runtimeApplicationService.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
M	projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
M	projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts
M	projects/sfia-studio/app/lib/oa/project/application/createProject.ts
M	projects/sfia-studio/app/lib/oa/project/index.ts
M	projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectStore.ts
M	projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
M	projects/sfia-studio/app/lib/vertical-slice-core/types.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/singleton.ts
M	projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
M	projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
```

Staged: (vide)

---

## 2. SFIA Studio Convergence Pre-check

- triggered : oui
- capacité v3 : V3-F02 — Project/LPS durable et exploitable
- milestone : M1
- G0-A : ADOPTED par décision Morris
- G0-B : ADOPTED par décision Morris
- backbone : OA Native Backbone
- persistence : node:sqlite Product Store
- actifs : T-A1 COMPLETE · vertical-slice-runtime ADAPT · Memory Product repositories REPLACE (T-A1) · OPS1 HARVEST futur M4 · D1 FREEZE / disposition finale ouverte · execution-run disposition ouverte
- gap fermé : Project/LPS restart-safe · composition runtime durable (T-A1)
- dépendance G0 : SATISFIED
- preuve de sortie : create → fresh process → same Project/LPS/context/digest
- dette : SQLite mono-opérateur + exit Postgres · autres stores OA Memory hors M1
- exit : PostgreSQL uniquement sur besoin multi-writer/multi-user démontré
- capacité suivante : M2 — Pilotage cognitif v3 utilisable
- M2 NON AUTORISÉ dans ce cycle
- runtime v3 NON ADOPTED

---

## 3. Décisions G0 consommées (exactes)

### G0-A — ADOPTED (Morris · 2026-08-13 Europe/Paris)
OA Native Backbone + Harvest OPS1 Cursor.
- OA = backbone canonique Studio
- OPS1 = source de capacité Cursor à HARVEST derrière T-A5 (futur)
- OPS1 ≠ second moteur produit
- N’autorise PAS Cursor REAL ni Gate D dans M1

### G0-B — ADOPTED (Morris · 2026-08-13 Europe/Paris)
Product persistence `node:sqlite` isolée derrière ports OA ; exit contrôlé vers PostgreSQL sur besoin multi-writer/multi-user démontré.
- DB produit ≠ D1 ≠ OPS1 ≠ FinOps
- pas de dual-write
- pas de second modèle métier
- ports OA préservés
- PostgreSQL = exit futur, pas M1

**Statut G0 :** DECIDED — G0 CONSUMED
**M1 :** Delivery AUTHORIZED by Morris ; validation Morris post-preuve requise
**Inchangés :** Cursor REAL / Gate D / Auth/Ack / runtime v3 NON ADOPTED

---

## 4. Sources consultées (obligatoires)

PROCESSUS: cycle template, routing guide, operating model, rules/guardrails, knowledge layer, 02-fifteen-cycles-synthetic-map
CONVERGENCE: build doctrine, roadmap, G0 decision pack
V3 framing: 19, 26, 30, 32, 37
CODE: package.json (unchanged), oa/project/**, vertical-slice-core/**, vertical-slice-runtime/**, tests, d1/db+paths (pattern only), ops1/** & oa/finops/** READ ONLY isolation, .gitignore, CI workflow READ ONLY

---

## 5. Découverte technique avant changement

| Symbole | Rôle |
|---|---|
| `ProjectRepositoryPort` | CRUD Project |
| `LivingProjectStateRepositoryPort` | LPS versioning / current |
| `ProjectAuditJournalPort` | audit append-only |
| `MemoryProjectStore` | store mémoire + atomicité pré-M1 |
| `createInMemoryProjectServices` | factory Memory T-A1 |
| `CreateProject` / `AppendLivingProjectStateVersion` | use cases (dépendaient de MemoryProjectStore pour UoW) |
| `createLocalVerticalSliceServices` | composition `/studio` |
| `createRuntimeApplicationService` / singleton | runtime + dispose |
| `wireOaStack` | composition T-A2…T-A6 |
| Runtime disclosures | T-A7 honesty surface |
| Tests T-A1 + vertical-slice-runtime | baseline |

---

## 6. Architecture persistence M1 implémentée

- Technologie: **node:sqlite** (`DatabaseSync`) — **aucun package npm ajouté**
- Env: `SFIA_STUDIO_PRODUCT_DB_PATH` ; default `projects/sfia-studio/.sfia-exec/product/oa-product.sqlite` (gitignore `.sfia-exec/**`)
- Isolation: refuse chemins `d1.sqlite` / `ops1.sqlite` ; jamais DATABASE_URL FinOps
- Port transaction: `ProjectPersistenceUnitOfWorkPort.runInTransaction`
- Use cases: dépendent du port UoW (pas de la classe Memory concrète)
- Memory: continue à implémenter UoW pour tests ciblés
- Composition `/studio`: T-A1 via `createSqliteProductProjectServices` ; T-A2…T-A6 Memory via `wireOaStack` ; **une seule** instance ProjectServices partagée
- Dispose: `RuntimeApplicationService.dispose()` ferme la DB ; singleton reset
- Tests: DB temp unique si `NODE_ENV=test` sans env path

### Schéma SQLite M1
- `schema_meta`
- `oa_projects` (payload JSON + clés)
- `oa_lps` (versioned snapshots + superseded)
- `oa_lps_current` (project → current LPS)
- `oa_idempotency`
- `oa_audit_events` (append-only)
- `PRAGMA foreign_keys=ON`
- BEGIN/COMMIT/ROLLBACK fail-closed
- schema idempotent à l’ouverture

### Context / digest
- Pas d’agrégat `ContextSnapshot` OA dans le repo
- Contexte critique M1 = champs LPS (objective/context/scope) + `doctrinePackageRef` id/version/digest
- Qualifié dans Roadmap ; pas de STOP (exigence satisfaite sans nouvel agrégat)

### Disclosures post-M1
- `productPersistence: SQLITE_OA_PRODUCT_STORE`
- `persistence: PARTIAL_PROJECT_LPS_DURABLE`
- `projectLpsRestartSafe: true`
- `localDataVolatile: true` / `restartMayLoseState: true` (autres stacks Memory)
- Pas de FULLY_DURABLE / RUN_READY / PRODUCT_READY / V3_ADOPTED

---

## 7. Validations

| Check | Result |
|---|---|
| typecheck | PASS (0) |
| lint | PASS (0) |
| npm test | PASS — 160 files / 1625 tests (131 skipped) |
| build | PASS (0) |
| git diff --check | PASS |
| staged | none |
| package.json / lock | inchangés |
| protected paths (d1/ops1/finops/.github/method/prompts/framing) | none |
| sqlite tracked | none (gitignore) |
| secrets | none detected |
| Cursor REAL / Gate D | non introduits |
| runtime v3 | NON ADOPTED |

### Preuve restart
- `m1ProductSqliteDurability.test.ts` A–H (close/reopen DatabaseSync)
- `m1RestartProcessProof.test.ts` — **deux processus Node/tsx** (worker A create, worker B read) contre même fichier temp — **PASS**

### État M1
**IMPLEMENTED CANDIDATE — READY FOR MORRIS VALIDATION**

≠ M1 VALIDATED ≠ M2 autorisé ≠ runtime v3 ADOPTED ≠ commit/push/PR projet

### Dette / réserves
- Exit Postgres futur (multi-writer/multi-user démontré)
- T-A2…T-A6 restent Memory
- Disposition D1 / OPS1 / execution-run ouvertes
- Auth/Ack, Cursor REAL, Gate D ouverts

---

## 8. Fichiers créés (contenu complet)

### `projects/sfia-studio/app/lib/oa/project/ports/projectPersistenceUnitOfWorkPort.ts`

```
/**
 * Minimal transactional boundary for atomic Project + LPS mutations.
 * Memory and SQLite adapters both satisfy this port (M1).
 */
export interface ProjectPersistenceUnitOfWorkPort {
  runInTransaction<T>(fn: () => Promise<T>): Promise<T>;
}

```

### `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/paths.ts`

```
import fs from "node:fs";
import path from "node:path";

/**
 * OA Product SQLite path — isolated from D1 / OPS1 / FinOps.
 * Override: SFIA_STUDIO_PRODUCT_DB_PATH
 * Default: projects/sfia-studio/.sfia-exec/product/oa-product.sqlite
 */
export function resolveProductSqlitePath(
  overridePath?: string,
): string {
  const explicit =
    overridePath?.trim() || process.env.SFIA_STUDIO_PRODUCT_DB_PATH?.trim();
  if (explicit) {
    const resolved = path.resolve(explicit);
    ensureDir(path.dirname(resolved));
    assertNotAlienProductPath(resolved);
    return resolved;
  }

  // app cwd is typically projects/sfia-studio/app → studio root is parent
  const studioRoot = path.resolve(process.cwd(), "..");
  const productDir = path.join(studioRoot, ".sfia-exec", "product");
  ensureDir(productDir);
  const dbPath = path.join(productDir, "oa-product.sqlite");
  const execBase = path.resolve(studioRoot, ".sfia-exec");
  if (!dbPath.startsWith(execBase + path.sep)) {
    throw new Error("product_sqlite_path_outside_sfia_exec");
  }
  assertNotAlienProductPath(dbPath);
  return dbPath;
}

function assertNotAlienProductPath(dbPath: string): void {
  const base = path.basename(dbPath).toLowerCase();
  if (base === "d1.sqlite" || base === "ops1.sqlite") {
    throw new Error("product_sqlite_path_collides_with_parallel_engine");
  }
  const normalized = dbPath.replace(/\\/g, "/").toLowerCase();
  if (
    normalized.includes("/state/d1.sqlite") ||
    normalized.includes("/ops1/") ||
    normalized.endsWith("/d1.sqlite") ||
    normalized.endsWith("/ops1.sqlite")
  ) {
    throw new Error("product_sqlite_path_collides_with_parallel_engine");
  }
}

function ensureDir(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
}

```

### `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts`

```
import { DatabaseSync } from "node:sqlite";

export const PRODUCT_SCHEMA_VERSION = "m1-0.1.0" as const;

const SCHEMA_SQL = `
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS schema_meta (
  key TEXT PRIMARY KEY NOT NULL,
  value TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS oa_projects (
  project_id TEXT PRIMARY KEY NOT NULL,
  status TEXT NOT NULL,
  current_lps_version_id TEXT,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT
);

CREATE TABLE IF NOT EXISTS oa_lps (
  lps_version_id TEXT PRIMARY KEY NOT NULL,
  project_id TEXT NOT NULL,
  version INTEGER NOT NULL,
  status TEXT NOT NULL,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id),
  UNIQUE (project_id, version)
);

CREATE TABLE IF NOT EXISTS oa_lps_current (
  project_id TEXT PRIMARY KEY NOT NULL,
  lps_version_id TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id),
  FOREIGN KEY (lps_version_id) REFERENCES oa_lps(lps_version_id)
);

CREATE TABLE IF NOT EXISTS oa_idempotency (
  idempotency_key TEXT PRIMARY KEY NOT NULL,
  project_id TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id)
);

CREATE TABLE IF NOT EXISTS oa_audit_events (
  row_id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_type TEXT NOT NULL,
  occurred_at TEXT NOT NULL,
  project_id TEXT,
  correlation_id TEXT,
  payload_json TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_oa_lps_project_version
  ON oa_lps(project_id, version);
CREATE INDEX IF NOT EXISTS idx_oa_audit_project
  ON oa_audit_events(project_id, occurred_at);
`;

export function openProductSqlite(dbPath: string): DatabaseSync {
  const db = new DatabaseSync(dbPath);
  db.exec("PRAGMA foreign_keys = ON;");
  db.exec(SCHEMA_SQL);
  const existing = db
    .prepare("SELECT value FROM schema_meta WHERE key = ?")
    .get("schema_version") as { value?: string } | undefined;
  if (!existing?.value) {
    db.prepare(
      "INSERT INTO schema_meta(key, value) VALUES (?, ?)",
    ).run("schema_version", PRODUCT_SCHEMA_VERSION);
  }
  const integrity = db.prepare("PRAGMA integrity_check").get() as
    | Record<string, string>
    | undefined;
  const raw = integrity ? String(Object.values(integrity)[0] ?? "") : "";
  if (raw !== "ok") {
    try {
      db.close();
    } catch {
      /* ignore */
    }
    throw new Error("product_sqlite_integrity_failed");
  }
  return db;
}

```

### `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts`

```
import type { DatabaseSync } from "node:sqlite";
import type { ProjectPersistenceUnitOfWorkPort } from "../../ports/projectPersistenceUnitOfWorkPort";
import { openProductSqlite } from "./db";
import { resolveProductSqlitePath } from "./paths";

/**
 * SQLite product UnitOfWork for atomic Project + LPS mutations (M1).
 * Isolated file — not D1 / OPS1 / FinOps.
 */
export class SqliteProductStore implements ProjectPersistenceUnitOfWorkPort {
  readonly db: DatabaseSync;
  readonly dbPath: string;

  /** Test hook — force next save to throw (atomicity tests). */
  failNextSave: "project" | "lps" | null = null;

  private depth = 0;
  private queue: Promise<void> = Promise.resolve();

  constructor(dbPath?: string) {
    this.dbPath = resolveProductSqlitePath(dbPath);
    this.db = openProductSqlite(this.dbPath);
  }

  async runInTransaction<T>(fn: () => Promise<T>): Promise<T> {
    const run = async (): Promise<T> => {
      if (this.depth === 0) {
        this.db.exec("BEGIN IMMEDIATE");
      }
      this.depth += 1;
      try {
        const result = await fn();
        this.depth -= 1;
        if (this.depth === 0) {
          this.db.exec("COMMIT");
        }
        return result;
      } catch (err) {
        this.depth -= 1;
        if (this.depth === 0) {
          try {
            this.db.exec("ROLLBACK");
          } catch {
            /* ignore rollback errors after failed begin */
          }
        }
        throw err;
      }
    };

    const next = this.queue.then(run, run);
    this.queue = next.then(
      () => undefined,
      () => undefined,
    );
    return next;
  }

  close(): void {
    try {
      this.db.close();
    } catch {
      /* ignore */
    }
  }
}

```

### `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProjectRepository.ts`

```
import type { Project } from "../../domain/types";
import type { ProjectRepositoryPort } from "../../ports/projectRepositoryPort";
import type { SqliteProductStore } from "./sqliteProductStore";

export class SqliteProjectRepository implements ProjectRepositoryPort {
  constructor(private readonly store: SqliteProductStore) {}

  async findById(projectId: string): Promise<Project | null> {
    const row = this.store.db
      .prepare("SELECT payload_json FROM oa_projects WHERE project_id = ?")
      .get(projectId) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return structuredClone(JSON.parse(row.payload_json) as Project);
  }

  async exists(projectId: string): Promise<boolean> {
    const row = this.store.db
      .prepare("SELECT 1 AS ok FROM oa_projects WHERE project_id = ?")
      .get(projectId) as { ok?: number } | undefined;
    return row?.ok === 1;
  }

  async save(project: Project): Promise<void> {
    if (this.store.failNextSave === "project") {
      this.store.failNextSave = null;
      throw new Error("forced_project_save_failure");
    }
    const payload = JSON.stringify(structuredClone(project));
    this.store.db
      .prepare(
        `INSERT INTO oa_projects(
          project_id, status, current_lps_version_id, payload_json, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?)
        ON CONFLICT(project_id) DO UPDATE SET
          status = excluded.status,
          current_lps_version_id = excluded.current_lps_version_id,
          payload_json = excluded.payload_json,
          updated_at = excluded.updated_at`,
      )
      .run(
        project.projectId,
        project.status,
        project.currentLpsVersionId ?? null,
        payload,
        project.createdAt,
        project.updatedAt ?? null,
      );
  }

  async findIdempotency(idempotencyKey: string): Promise<string | null> {
    const row = this.store.db
      .prepare(
        "SELECT project_id FROM oa_idempotency WHERE idempotency_key = ?",
      )
      .get(idempotencyKey) as { project_id?: string } | undefined;
    return row?.project_id ?? null;
  }

  async putIdempotency(
    idempotencyKey: string,
    projectId: string,
  ): Promise<void> {
    this.store.db
      .prepare(
        `INSERT INTO oa_idempotency(idempotency_key, project_id, created_at)
         VALUES (?, ?, ?)
         ON CONFLICT(idempotency_key) DO UPDATE SET
           project_id = excluded.project_id`,
      )
      .run(idempotencyKey, projectId, new Date().toISOString());
  }
}

```

### `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteLivingProjectStateRepository.ts`

```
import type { LivingProjectState } from "../../domain/types";
import type { LivingProjectStateRepositoryPort } from "../../ports/livingProjectStateRepositoryPort";
import type { SqliteProductStore } from "./sqliteProductStore";

export class SqliteLivingProjectStateRepository
  implements LivingProjectStateRepositoryPort
{
  constructor(private readonly store: SqliteProductStore) {}

  async findById(lpsVersionId: string): Promise<LivingProjectState | null> {
    const row = this.store.db
      .prepare("SELECT payload_json FROM oa_lps WHERE lps_version_id = ?")
      .get(lpsVersionId) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return structuredClone(JSON.parse(row.payload_json) as LivingProjectState);
  }

  async findByProjectAndVersion(
    projectId: string,
    version: number,
  ): Promise<LivingProjectState | null> {
    const row = this.store.db
      .prepare(
        "SELECT payload_json FROM oa_lps WHERE project_id = ? AND version = ?",
      )
      .get(projectId, version) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return structuredClone(JSON.parse(row.payload_json) as LivingProjectState);
  }

  async findCurrentByProjectId(
    projectId: string,
  ): Promise<LivingProjectState | null> {
    const row = this.store.db
      .prepare(
        `SELECT l.payload_json AS payload_json
         FROM oa_lps_current c
         JOIN oa_lps l ON l.lps_version_id = c.lps_version_id
         WHERE c.project_id = ?`,
      )
      .get(projectId) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return structuredClone(JSON.parse(row.payload_json) as LivingProjectState);
  }

  async save(lps: LivingProjectState): Promise<void> {
    if (this.store.failNextSave === "lps") {
      this.store.failNextSave = null;
      throw new Error("forced_lps_save_failure");
    }
    const payload = JSON.stringify(structuredClone(lps));
    this.store.db
      .prepare(
        `INSERT INTO oa_lps(
          lps_version_id, project_id, version, status, payload_json, created_at
        ) VALUES (?, ?, ?, ?, ?, ?)
        ON CONFLICT(lps_version_id) DO UPDATE SET
          project_id = excluded.project_id,
          version = excluded.version,
          status = excluded.status,
          payload_json = excluded.payload_json,
          created_at = excluded.created_at`,
      )
      .run(
        lps.lpsVersionId,
        lps.projectId,
        lps.version,
        lps.status,
        payload,
        lps.createdAt,
      );

    if (lps.status === "active") {
      this.store.db
        .prepare(
          `INSERT INTO oa_lps_current(project_id, lps_version_id)
           VALUES (?, ?)
           ON CONFLICT(project_id) DO UPDATE SET
             lps_version_id = excluded.lps_version_id`,
        )
        .run(lps.projectId, lps.lpsVersionId);
    }
  }

  async markSuperseded(lpsVersionId: string): Promise<void> {
    const existing = await this.findById(lpsVersionId);
    if (!existing) {
      throw new Error("lps_missing_for_supersede");
    }
    const next = structuredClone(existing);
    next.status = "superseded";
    const payload = JSON.stringify(next);
    this.store.db
      .prepare(
        `UPDATE oa_lps
         SET status = ?, payload_json = ?
         WHERE lps_version_id = ?`,
      )
      .run("superseded", payload, lpsVersionId);
  }
}

```

### `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProjectAuditJournal.ts`

```
import type {
  ProjectAuditEvent,
  ProjectAuditJournalPort,
} from "../../ports/projectAuditJournalPort";
import type { SqliteProductStore } from "./sqliteProductStore";

/** Durable append-only audit journal for OA Product SQLite (M1). */
export class SqliteProjectAuditJournal implements ProjectAuditJournalPort {
  constructor(private readonly store: SqliteProductStore) {}

  append(event: ProjectAuditEvent): void {
    this.store.db
      .prepare(
        `INSERT INTO oa_audit_events(
          event_type, occurred_at, project_id, correlation_id, payload_json
        ) VALUES (?, ?, ?, ?, ?)`,
      )
      .run(
        event.event,
        event.ts,
        "projectId" in event ? (event.projectId ?? null) : null,
        "correlationId" in event ? (event.correlationId ?? null) : null,
        JSON.stringify(event),
      );
  }

  /** Test helper — read all durable audit rows. */
  listAll(): ProjectAuditEvent[] {
    const rows = this.store.db
      .prepare(
        "SELECT payload_json FROM oa_audit_events ORDER BY row_id ASC",
      )
      .all() as Array<{ payload_json: string }>;
    return rows.map((r) => JSON.parse(r.payload_json) as ProjectAuditEvent);
  }
}

```

### `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts`

```
import type {
  ClockPort,
  DoctrinePackageResolverPort,
} from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import { AppendLivingProjectStateVersion } from "../../application/appendLivingProjectStateVersion";
import { CreateProject } from "../../application/createProject";
import { GetCurrentLivingProjectState } from "../../application/getCurrentLivingProjectState";
import { GetLivingProjectStateVersion } from "../../application/getLivingProjectStateVersion";
import { GetProject } from "../../application/getProject";
import type { LivingProjectStateRepositoryPort } from "../../ports/livingProjectStateRepositoryPort";
import type { ProjectAuditJournalPort } from "../../ports/projectAuditJournalPort";
import type { ProjectPersistenceUnitOfWorkPort } from "../../ports/projectPersistenceUnitOfWorkPort";
import type { ProjectRepositoryPort } from "../../ports/projectRepositoryPort";
import { SqliteLivingProjectStateRepository } from "./sqliteLivingProjectStateRepository";
import { SqliteProductStore } from "./sqliteProductStore";
import { SqliteProjectAuditJournal } from "./sqliteProjectAuditJournal";
import { SqliteProjectRepository } from "./sqliteProjectRepository";

export type CreateSqliteProductProjectServicesOptions = {
  doctrineResolver: DoctrinePackageResolverPort;
  clock?: ClockPort;
  audit?: ProjectAuditJournalPort;
  /** Explicit product DB path (tests). Default: resolveProductSqlitePath(). */
  dbPath?: string;
};

export type SqliteProductProjectServices = {
  store: SqliteProductStore;
  projects: ProjectRepositoryPort;
  lps: LivingProjectStateRepositoryPort;
  audit: ProjectAuditJournalPort;
  createProject: CreateProject;
  getProject: GetProject;
  getCurrentLivingProjectState: GetCurrentLivingProjectState;
  getLivingProjectStateVersion: GetLivingProjectStateVersion;
  appendLivingProjectStateVersion: AppendLivingProjectStateVersion;
  dbPath: string;
  dispose: () => void;
};

/** Factory for OA Product SQLite Project/LPS services (M1). */
export function createSqliteProductProjectServices(
  options: CreateSqliteProductProjectServicesOptions,
): SqliteProductProjectServices {
  const store = new SqliteProductStore(options.dbPath);
  const projects = new SqliteProjectRepository(store);
  const lps = new SqliteLivingProjectStateRepository(store);
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new SqliteProjectAuditJournal(store);

  return {
    store,
    projects,
    lps,
    audit,
    dbPath: store.dbPath,
    dispose: () => store.close(),
    createProject: new CreateProject(
      projects,
      lps,
      options.doctrineResolver,
      clock,
      audit,
      store,
    ),
    getProject: new GetProject(projects, clock, audit),
    getCurrentLivingProjectState: new GetCurrentLivingProjectState(
      projects,
      lps,
      clock,
      audit,
    ),
    getLivingProjectStateVersion: new GetLivingProjectStateVersion(
      projects,
      lps,
      clock,
      audit,
    ),
    appendLivingProjectStateVersion: new AppendLivingProjectStateVersion(
      projects,
      lps,
      clock,
      audit,
      store,
    ),
  };
}

export function createTestSqliteProductProjectServices(
  options: CreateSqliteProductProjectServicesOptions & {
    audit?: SqliteProjectAuditJournal;
    fixedNowIso?: string;
    dbPath: string;
  },
): SqliteProductProjectServices & { audit: SqliteProjectAuditJournal } {
  const store = new SqliteProductStore(options.dbPath);
  const audit = options.audit ?? new SqliteProjectAuditJournal(store);
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-07-24T05:00:00.000Z"));
  const projects = new SqliteProjectRepository(store);
  const lps = new SqliteLivingProjectStateRepository(store);

  return {
    store,
    projects,
    lps,
    audit,
    dbPath: store.dbPath,
    dispose: () => store.close(),
    createProject: new CreateProject(
      projects,
      lps,
      options.doctrineResolver,
      clock,
      audit,
      store,
    ),
    getProject: new GetProject(projects, clock, audit),
    getCurrentLivingProjectState: new GetCurrentLivingProjectState(
      projects,
      lps,
      clock,
      audit,
    ),
    getLivingProjectStateVersion: new GetLivingProjectStateVersion(
      projects,
      lps,
      clock,
      audit,
    ),
    appendLivingProjectStateVersion: new AppendLivingProjectStateVersion(
      projects,
      lps,
      clock,
      audit,
      store,
    ),
  };
}

/** Type-only helper: Sqlite store satisfies UnitOfWork. */
export type { ProjectPersistenceUnitOfWorkPort };

```

### `projects/sfia-studio/app/__tests__/oa/project/m1ProductSqliteDurability.test.ts`

```
/**
 * M1 — OA Product SQLite Project/LPS durability proofs.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  resolveProductSqlitePath,
  SqliteProjectAuditJournal,
  type ActorReference,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";

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
const openServices: SqliteProductProjectServices[] = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m1-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

function buildSqliteServices(dbPath: string) {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const svc = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-13T06:00:00.000Z",
    dbPath,
  });
  openServices.push(svc);
  return svc;
}

afterEach(() => {
  while (openServices.length) {
    const svc = openServices.pop();
    try {
      svc?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("M1 Product SQLite durability", () => {
  it("A — create durable: reopen same DB recovers Project + LPS", async () => {
    const dbPath = tempDbPath("a-product.sqlite");
    const svc1 = buildSqliteServices(dbPath);
    const created = await svc1.createProject.execute({
      projectId: "prj:m1-a",
      title: "M1 Durable",
      objective: "Restart-safe Project/LPS",
      context: "critical-context-alpha",
      scope: "scope-campus",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      correlationId: "cor:m1-a",
      lpsVersionId: "lps:m1-a-v1",
      idempotencyKey: "idem:m1-a",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    svc1.dispose();

    const svc2 = buildSqliteServices(dbPath);
    const project = await svc2.getProject.execute({ projectId: "prj:m1-a" });
    const lps = await svc2.getCurrentLivingProjectState.execute({
      projectId: "prj:m1-a",
    });
    expect(project.ok).toBe(true);
    expect(lps.ok).toBe(true);
    if (!project.ok || !lps.ok) return;
    expect(project.project.projectId).toBe("prj:m1-a");
    expect(project.project.currentLpsVersionId).toBe("lps:m1-a-v1");
    expect(lps.livingProjectState.version).toBe(1);
    expect(lps.livingProjectState.objective).toBe("Restart-safe Project/LPS");
    expect(lps.livingProjectState.context).toBe("critical-context-alpha");
    expect(lps.livingProjectState.scope).toBe("scope-campus");
    expect(lps.livingProjectState.doctrinePackageRef.digest).toBe(VALID_DIGEST);
    expect(lps.livingProjectState.doctrinePackageRef.doctrinePackageId).toBe(
      VALID_PIN.doctrinePackageId,
    );
    expect(lps.livingProjectState.doctrinePackageRef.version).toBe(
      VALID_PIN.version,
    );
  });

  it("B — idempotency restart-safe", async () => {
    const dbPath = tempDbPath("b-product.sqlite");
    const svc1 = buildSqliteServices(dbPath);
    const first = await svc1.createProject.execute({
      projectId: "prj:m1-b",
      title: "Idem",
      objective: "idem objective",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      idempotencyKey: "idem:m1-b",
      lpsVersionId: "lps:m1-b-v1",
    });
    expect(first.ok).toBe(true);
    svc1.dispose();

    const svc2 = buildSqliteServices(dbPath);
    const second = await svc2.createProject.execute({
      projectId: "prj:m1-b-other",
      title: "Should reuse",
      objective: "ignored",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      idempotencyKey: "idem:m1-b",
      lpsVersionId: "lps:m1-b-v2",
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.reusedFromIdempotencyKey).toBe(true);
    expect(second.project.projectId).toBe("prj:m1-b");
    expect(second.livingProjectState.lpsVersionId).toBe("lps:m1-b-v1");
  });

  it("C — LPS append durable + superseded readable", async () => {
    const dbPath = tempDbPath("c-product.sqlite");
    const svc1 = buildSqliteServices(dbPath);
    const created = await svc1.createProject.execute({
      projectId: "prj:m1-c",
      title: "Append",
      objective: "v1",
      context: "ctx-v1",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m1-c-v1",
    });
    expect(created.ok).toBe(true);
    const appended = await svc1.appendLivingProjectStateVersion.execute({
      projectId: "prj:m1-c",
      expectedVersion: 1,
      objective: "v2",
      context: "ctx-v2",
      createdBy: ACTOR,
      lpsVersionId: "lps:m1-c-v2",
    });
    expect(appended.ok).toBe(true);
    svc1.dispose();

    const svc2 = buildSqliteServices(dbPath);
    const current = await svc2.getCurrentLivingProjectState.execute({
      projectId: "prj:m1-c",
    });
    const prior = await svc2.getLivingProjectStateVersion.execute({
      projectId: "prj:m1-c",
      version: 1,
    });
    expect(current.ok).toBe(true);
    expect(prior.ok).toBe(true);
    if (!current.ok || !prior.ok) return;
    expect(current.livingProjectState.version).toBe(2);
    expect(current.livingProjectState.lpsVersionId).toBe("lps:m1-c-v2");
    expect(current.livingProjectState.context).toBe("ctx-v2");
    expect(prior.livingProjectState.status).toBe("superseded");
    expect(prior.livingProjectState.objective).toBe("v1");
  });

  it("D — optimistic concurrency conflict leaves no partial mutation", async () => {
    const dbPath = tempDbPath("d-product.sqlite");
    const svc = buildSqliteServices(dbPath);
    await svc.createProject.execute({
      projectId: "prj:m1-d",
      title: "Conflict",
      objective: "base",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m1-d-v1",
    });
    const conflict = await svc.appendLivingProjectStateVersion.execute({
      projectId: "prj:m1-d",
      expectedVersion: 99,
      objective: "should-fail",
      createdBy: ACTOR,
      lpsVersionId: "lps:m1-d-bad",
    });
    expect(conflict.ok).toBe(false);
    if (conflict.ok) return;
    expect(conflict.error.detailCode).toBe("LPS_VERSION_CONFLICT");
    const current = await svc.getCurrentLivingProjectState.execute({
      projectId: "prj:m1-d",
    });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    expect(current.livingProjectState.version).toBe(1);
    expect(current.livingProjectState.lpsVersionId).toBe("lps:m1-d-v1");
    const missing = await svc.lps.findById("lps:m1-d-bad");
    expect(missing).toBeNull();
  });

  it("E — transaction rollback on forced LPS save failure", async () => {
    const dbPath = tempDbPath("e-product.sqlite");
    const svc = buildSqliteServices(dbPath);
    svc.store.failNextSave = "lps";
    const result = await svc.createProject.execute({
      projectId: "prj:m1-e",
      title: "Rollback",
      objective: "should not persist",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m1-e-v1",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("PERSISTENCE_FAILURE");
    expect(await svc.projects.exists("prj:m1-e")).toBe(false);
    expect(await svc.lps.findById("lps:m1-e-v1")).toBeNull();
  });

  it("F — product path isolation from D1/OPS1 names", () => {
    expect(() => resolveProductSqlitePath("/tmp/d1.sqlite")).toThrow(
      /parallel_engine/,
    );
    expect(() => resolveProductSqlitePath("/tmp/ops1.sqlite")).toThrow(
      /parallel_engine/,
    );
    const ok = resolveProductSqlitePath(tempDbPath("oa-product.sqlite"));
    expect(path.basename(ok)).toBe("oa-product.sqlite");
  });

  it("G — audit append-only survives reopen", async () => {
    const dbPath = tempDbPath("g-product.sqlite");
    const svc1 = buildSqliteServices(dbPath);
    await svc1.createProject.execute({
      projectId: "prj:m1-g",
      title: "Audit",
      objective: "audit",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m1-g-v1",
    });
    const before = (svc1.audit as SqliteProjectAuditJournal).listAll().length;
    expect(before).toBeGreaterThan(0);
    svc1.dispose();

    const svc2 = buildSqliteServices(dbPath);
    const after = (svc2.audit as SqliteProjectAuditJournal).listAll();
    expect(after.length).toBe(before);
    expect(after.some((e) => e.event === "oa.project.created")).toBe(true);
  });

  it("H — doctrine digest + context survive restart", async () => {
    const dbPath = tempDbPath("h-product.sqlite");
    const svc1 = buildSqliteServices(dbPath);
    await svc1.createProject.execute({
      projectId: "prj:m1-h",
      title: "Digest",
      objective: "obj-h",
      context: "critical-context-h",
      scope: "scope-h",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m1-h-v1",
    });
    svc1.dispose();
    const svc2 = buildSqliteServices(dbPath);
    const lps = await svc2.getCurrentLivingProjectState.execute({
      projectId: "prj:m1-h",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.context).toBe("critical-context-h");
    expect(lps.livingProjectState.scope).toBe("scope-h");
    expect(lps.livingProjectState.doctrinePackageRef.digest).toBe(VALID_DIGEST);
  });
});

```

### `projects/sfia-studio/app/__tests__/oa/project/m1RestartProcessProof.test.ts`

```
/**
 * M1 strong restart proof — two independent Node processes, same DB file.
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
  "__tests__/oa/project/m1RestartProcessWorker.ts",
);
const TSX = path.join(APP_ROOT, "node_modules/.bin/tsx");

describe("M1 process restart proof", () => {
  it("create in process A, read in process B against same SQLite file", () => {
    expect(fs.existsSync(TSX)).toBe(true);
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m1-proc-"));
    const dbPath = path.join(dir, "oa-product.sqlite");
    const projectId = "prj:m1-proc";

    try {
      const create = spawnSync(TSX, [WORKER, "create", dbPath, projectId], {
        cwd: APP_ROOT,
        encoding: "utf8",
        env: { ...process.env },
      });
      expect(create.status, create.stderr || create.stdout).toBe(0);
      const created = JSON.parse(create.stdout.trim()) as {
        ok: boolean;
        currentLpsVersionId?: string;
        digest?: string;
      };
      expect(created.ok).toBe(true);

      const read = spawnSync(TSX, [WORKER, "read", dbPath, projectId], {
        cwd: APP_ROOT,
        encoding: "utf8",
        env: { ...process.env },
      });
      expect(read.status, read.stderr || read.stdout).toBe(0);
      const loaded = JSON.parse(read.stdout.trim()) as {
        ok: boolean;
        projectId?: string;
        currentLpsVersionId?: string;
        version?: number;
        objective?: string;
        context?: string;
        scope?: string;
        digest?: string;
        doctrinePackageId?: string;
        doctrineVersion?: string;
      };
      expect(loaded.ok).toBe(true);
      expect(loaded.projectId).toBe(projectId);
      expect(loaded.currentLpsVersionId).toBe(created.currentLpsVersionId);
      expect(loaded.version).toBe(1);
      expect(loaded.objective).toBe("process-restart-objective");
      expect(loaded.context).toBe("process-restart-context");
      expect(loaded.scope).toBe("process-restart-scope");
      expect(loaded.digest).toBe(created.digest);
      expect(loaded.doctrinePackageId).toBe("pkg:studio-v3-oa");
      expect(loaded.doctrineVersion).toBe("1.0.0");
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
});

```

### `projects/sfia-studio/app/__tests__/oa/project/m1RestartProcessWorker.ts`

```
/**
 * Child-process worker for M1 restart proof (invoked via tsx).
 * Usage: tsx m1RestartProcessWorker.ts <create|read> <dbPath> <projectId>
 */
import path from "node:path";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import { createTestSqliteProductProjectServices } from "@/lib/oa/project";

/** Spawn sets cwd to projects/sfia-studio/app */
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

async function main(): Promise<void> {
  const [, , mode, dbPath, projectId] = process.argv;
  if (!mode || !dbPath || !projectId) {
    throw new Error("usage: <create|read> <dbPath> <projectId>");
  }

  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const svc = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-13T06:30:00.000Z",
    dbPath,
  });

  try {
    if (mode === "create") {
      const result = await svc.createProject.execute({
        projectId,
        title: "Process Restart",
        objective: "process-restart-objective",
        context: "process-restart-context",
        scope: "process-restart-scope",
        doctrinePackagePin: VALID_PIN,
        createdBy: {
          actorId: "actor:morris",
          role: "project_owner",
          displayName: "Morris",
          authorityLevel: "N3",
        },
        lpsVersionId: "lps:m1-proc-v1",
        idempotencyKey: `idem:${projectId}`,
      });
      if (!result.ok) {
        console.error(JSON.stringify(result.error));
        process.exit(2);
      }
      process.stdout.write(
        `${JSON.stringify({
          ok: true,
          currentLpsVersionId: result.project.currentLpsVersionId,
          digest: result.livingProjectState.doctrinePackageRef.digest,
          context: result.livingProjectState.context,
        })}\n`,
      );
      return;
    }

    if (mode === "read") {
      const project = await svc.getProject.execute({ projectId });
      const lps = await svc.getCurrentLivingProjectState.execute({ projectId });
      if (!project.ok || !lps.ok) {
        process.stdout.write(`${JSON.stringify({ ok: false })}\n`);
        process.exit(3);
      }
      process.stdout.write(
        `${JSON.stringify({
          ok: true,
          projectId: project.project.projectId,
          currentLpsVersionId: project.project.currentLpsVersionId,
          version: lps.livingProjectState.version,
          objective: lps.livingProjectState.objective,
          context: lps.livingProjectState.context,
          scope: lps.livingProjectState.scope,
          digest: lps.livingProjectState.doctrinePackageRef.digest,
          doctrinePackageId:
            lps.livingProjectState.doctrinePackageRef.doctrinePackageId,
          doctrineVersion: lps.livingProjectState.doctrinePackageRef.version,
        })}\n`,
      );
      return;
    }

    throw new Error(`unknown mode ${mode}`);
  } finally {
    svc.dispose();
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.stack : String(err));
  process.exit(1);
});

```

### `projects/sfia-studio/convergence/sfia-studio-g0-architecture-persistence-decision-pack.md`

```
# SFIA Studio G0 — Architecture de convergence & Product persistence — Decision Pack

| Métadonnée | Valeur |
| --- | --- |
| **Rôle** | Pack de **décision** Gate G0 (architecture + Product persistence) |
| **Statut** | **DECIDED — G0 CONSUMED** |
| **Horodatage création** | 2026-08-13 07:56:31 +0200 (Europe/Paris) |
| **Horodatage décision Morris** | 2026-08-13 08:40:00 +0200 (Europe/Paris) — G0-A/B ADOPTED |
| **Horodatage traçabilité Delivery M1** | 2026-08-13 08:54:53 +0200 (Europe/Paris) |
| **Base Git** | `origin/main` `3413d2e42243d5419f874a8ccf5a50341bb968d6` |
| **Branche Delivery** | `delivery/sfia-studio-m1-durable-project-lps` (non poussée) |
| **Cycle G0** | 6 — Architecture technique · Profil **Critical** |
| **Cycle M1** | 8 — Delivery / implémentation · Profil **Critical** |
| **Gate** | G0 — **CONSUMED** |
| **G0-A** | **ADOPTED** — OA Native Backbone + Harvest OPS1 Cursor |
| **G0-B** | **ADOPTED** — Product persistence `node:sqlite` isolée derrière ports OA ; exit Postgres sur multi-writer/multi-user démontré |
| **Build Doctrine / Roadmap** | **VALIDATED** gouvernance ; alignement factuel G0 dans ce Delivery |
| **Runtime v3** | **NON ADOPTED** |
| **Cursor REAL / Gate D** | **NOT AUTHORIZED / NOT CONSUMED** |
| **Anti-claims** | ≠ M1 VALIDATED · ≠ M2 autorisé · ≠ Cursor REAL · ≠ Gate D · ≠ Auth/Ack promu · ≠ runtime ADOPTED · ≠ PostgreSQL Product maintenant · ≠ D1/FinOps = Product Store · ≠ dual-write · ≠ troisième moteur |

---

## 1. Executive decision summary

**Décisions Morris G0 — ADOPTED (plus récentes que l’état candidat initial de ce pack).**

| Axe | Décision | Statut |
| --- | --- | --- |
| **G0-A Architecture** | **OA Native Backbone + Harvest OPS1 Cursor** | **ADOPTED** |
| **G0-B Persistence** | **`node:sqlite` Product Store** derrière ports OA ; DB distincte de D1/OPS1/FinOps ; exit Postgres si multi-writer/multi-user démontré | **ADOPTED** |

**Impact autorisé :** Delivery M1 (Project/LPS durable) sur backbone OA + Product SQLite.

**Limites inchangées :** Cursor REAL · Gate D · Auth.js/Critical Ack · disposition finale OPS1/D1/execution-run · runtime v3 NON ADOPTED · PostgreSQL Product **non** implémenté en M1 · pas de dual-write.

**Observation historique (pré-décision).** Sur `main` baseline, `/studio` était Memory process-local ; Product persistence était `NOT_SELECTED`. Ces faits sont **supersédés** pour G0-A/B par la décision Morris ci-dessus ; M1 Delivery aligne le code.

---

## 2. Sources / evidence

### 2.1 Gouvernance / processus

| Source | Rôle |
| --- | --- |
| `prompts/templates/sfia-cycle-execution-template.md` | Template exécution + handoff L3 |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | Routing |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | Operating model |
| `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | Garde-fous |
| `method/sfia-fast-track/core/sfia-knowledge-layer.md` | Knowledge Layer |
| CKC pilot `…/pilots/03-architecture-technique.md` | **status=candidate** · usage=experimental cognitive guidance · **autorité d’exécution = aucune** |

### 2.2 Convergence VALIDATED

| Source | Sections utiles |
| --- | --- |
| `convergence/sfia-studio-convergence-build-doctrine.md` | Anti-claims ; couches 1–3 ; questions de sortie |
| `convergence/sfia-studio-convergence-roadmap.md` | B3–B6 ; **G0** ; **M1** ; Option 1 reco ; open gates |
| `projects/sfia-studio/README.md` | Statuts convergence |

### 2.3 Doctrine v3 applicable (destination — NON ADOPTED runtime)

`sfia-v3-framing/10`, `19`, `26`, `30`, `32`, `34`, `36`, `37` — Git vs SQL ; D3/D5 ; LPS sélectif ; HumanDecision/ExecutionContract immuables ; V3-F02.

### 2.4 Preuve Option 1 / Option 2

| Option | Preuve Git | Autorité |
| --- | --- | --- |
| **Option 1** — OA Native Backbone + Harvest OPS1 Cursor | Roadmap B3 (VALIDATED) + audit blob `31a5db07…` (commit handoff `c5b417dc…`) | Reco VALIDATED + détail audit |
| **Option 2** — Dual-Shell (OA front + OPS1 execution) | **Uniquement** audit blob `31a5db07…` / commit `c5b417dc…` | **Candidate audit** — **absente** du corps VALIDATED Roadmap (nommée seulement « Option 1 vs 2 ») |

**Réserve provenance Option 2 :** définition Git réelle trouvée ; **pas** reproduite dans les docs VALIDATED. Pas de contradiction multi-sources de même autorité — **omission** Roadmap, pas conflit.

### 2.5 Code (read-only) — preuves clés

| Actif | Preuve |
| --- | --- |
| Composition `/studio` | `lib/vertical-slice-runtime/service.ts` → `wireOaStack` |
| Memory T-A1…T-A6 | `lib/oa/{project,cycle,decision,execution-contract,execution-attempt,evidence-review}/infrastructure/memory*` |
| Disclosure | `lib/vertical-slice-runtime/disclosures.ts` → `productPersistence: "NOT_SELECTED"` |
| D1 SQLite | `lib/d1/db.ts` (`node:sqlite`, tables `d1_*`) |
| OPS1 SQLite + Cursor | `lib/ops1/db.ts`, adapters Cursor |
| FinOps Postgres | `package.json` `pg@~8.22.0` ; `db/migrations/*finops*` ; `lib/oa/finops/infrastructure/postgres/*` |
| Deps SQLite npm | **ABSENT** `better-sqlite3` / drizzle / prisma — SQLite via **`node:sqlite`** |

---

## 3. Current-state architecture map

```text
/studio (Nora F1–F3)
  └─ vertical-slice-runtime.getRuntimeApplicationService (process-local)
       └─ wireOaStack
            T-A1 Project/LPS     → Memory*
            T-A2 Cycle/CKC       → Memory*
            T-A3 HumanDecision   → Memory* + demo authority
            T-A4 ExecutionContract → Memory*
            T-A5 Attempt         → Memory* + TestExecutionAdapter (FIXTURE)
            T-A6 Evidence/RB     → Memory* (UI reinjection ; pas LPS writeback)

PARALLEL (non F3 authority chain):
  /projects  → D1 node:sqlite (durable local, modèle projet distinct)
  /ops1      → OPS1 node:sqlite + Cursor fixture/REAL (flag)
  execution-run → Memory (+ ombres FinOps) — non branché F1–F3
  FinOps     → PostgreSQL (coût/contrôle) — transverse ≠ Product persistence
```

**Observation :** multi-surfaces durables **coexistent** avec un backbone Studio **non durable**. G0 doit empêcher la poursuite de plusieurs moteurs métier concurrents.

---

## 4. Asset disposition matrix

*Classifications = **recommandations de convergence** jusqu’à GO Morris (alignées Roadmap B4), sauf KEEP d’usage factuel.*

| Actif | Preuve | Classification reco | Conséquence G0/M1 |
| --- | --- | --- | --- |
| T-A0 Doctrine FS | `lib/oa/doctrine` | **KEEP** | Pin doctrine M1+ |
| T-A1 Project/LPS ports + Memory | `lib/oa/project` | **COMPLETE** ports · **REPLACE** Memory | Cœur M1 |
| T-A2 Cycle/CKC | `lib/oa/cycle` | **ADAPT** / **COMPLETE** | Aval M2 |
| T-A3 HD | `lib/oa/decision` | **COMPLETE** · durable ultérieur | Aval M3 |
| T-A4 Contract | `lib/oa/execution-contract` | **KEEP** / **COMPLETE** | Aval M3–M4 |
| T-A5 Attempt/Adapter | `lib/oa/execution-attempt` | **ADAPT** / **HARVEST** OPS1 | Aval M4 |
| T-A6 Evidence/RB | `lib/oa/evidence-review` | **COMPLETE** | Aval M5 |
| T-A7 rails | `lib/platform/t-a7` | **KEEP** | Honesty / disclosures |
| vertical-slice-runtime | `wireOaStack` | **KEEP** / **ADAPT** | Composition switch M1 |
| F1/F2/F3 UI | `features/project-assistant` | **KEEP** / **ADAPT** | Remplacer bindings demo/fixture progressivement |
| OPS1 Cursor | `lib/ops1` | **HARVEST** (+ FREEZE UI growth) | Adapter T-A5 post-M1 |
| D1 `/projects` | `lib/d1` | **FREEZE** / **RETIRE LATER** | Pas Product persistence cible |
| execution-run | `lib/oa/execution-run` | **FREEZE** | Pas 3e moteur |
| FinOps Postgres | `lib/oa/finops` + `db/migrations` | **KEEP** isolé | ≠ Product DB |
| Auth.js / Critical Ack | dirty hors main | **COMPLETE** après GO promotion | Hors G0 |
| Memory* product stores | factories Memory* | **REPLACE** | Derrière ports post-G0-B |

---

## 5. Decision criteria

Sans scoring artificiel. Critères dérivés doctrine + Roadmap G0/M1 :

1. Alignement doctrine v3 (boucle Project→…→Evidence→LPS) sans ADOPT runtime.
2. **Un seul backbone** de construction Studio (anti multi-moteurs).
3. Réutilisation maximale ports/UI OA déjà wired.
4. Pas d’architecture parallèle permanente.
5. Déblocage **rapide et honnête** de M1 (restart-safe Project/LPS).
6. Frontières **Git** (defs/docs/preuves commitables) vs **SQL** (état vivant).
7. Transactionnel courant + **audit append-only** (pas event sourcing intégral).
8. HumanDecision / ExecutionContract exécuté / Evidence / ReviewBundle sealed — immuables ou versionnés.
9. Réversibilité via ports (adapters swappable).
10. Migration / exit explicites pour toute étape temporaire.
11. Sécurité : isolation store produit ; secrets hors Git ; pas de claim « sécurisé » sans preuve.
12. Performance réaliste mono-opérateur (pas de SLA inventé).
13. Exploitabilité locale ; coût non chiffré si non observable.
14. Horizon mono-opérateur → multi-projet/multi-user sans lock-in silencieux.
15. Compatibilité M2–M6 (HD durable, harvest Cursor, Evidence→LPS).
16. Impact disposition D1 / OPS1 / execution-run **recommandée**, sans consommer ces gates.

---

## 6. Architecture options

### 6.1 Option 1 — OA Native Backbone + Harvest OPS1 Cursor

| Champ | Contenu |
| --- | --- |
| **Définition** | Backbone canonique = T-A0→T-A7 + `vertical-slice-runtime` + F1/F2/F3. OPS1 = **source harvest** Cursor → port T-A5 `ExecutionAdapter`. execution-run **FREEZE**. D1 **FREEZE/RETIRE LATER**. FinOps reste transverse. |
| **Preuves** | Roadmap B3/B4 ; audit `31a5db07` ; code `wireOaStack` + `lib/ops1` |
| **Conservé** | Ports OA, UI Studio, T-A7 honesty, platform AI |
| **Harvest / ADAPT** | OPS1 Cursor adapter ; composition switch persistence |
| **REPLACE** | Memory* product stores |
| **Flux cible** | UI → VS → T-A1…T-A4 → (Ack futur) → T-A5(+adapter harvesté) → T-A6 → LPS |
| **Bénéfices** | Alignement F3 ; un seul authority chain ; réutilisation max ; harvest REAL sans 2e produit |
| **Risques** | Travail adapter ; UIs parallèles résiduelles jusqu’à disposition ; dépendance G0-B |
| **Dette** | Coexistence temporaire D1/OPS1 UI |
| **Coût transition** | Principalement Delivery M1+ (adapters) — non chiffré |
| **Réversibilité** | **Haute** via ports |
| **Impact M1** | Direct : brancher durable Project/LPS sur composition existante |
| **Impact M2–M6** | Chemin clair (HD → Contract → Harvest → Evidence→LPS) |
| **Architecture parallèle créée ?** | **Non** (réduit le parallèle) |
| **Exit legacy** | D1 après M1 stable ; OPS1 UI freeze ; exec-run quarantine |
| **Pour retenir** | Critères 1–5, 9, 15 |
| **Pour écarter** | — |

### 6.2 Option 2 — Dual-Shell (OA front + OPS1 execution)

| Champ | Contenu |
| --- | --- |
| **Définition** | OA = gouvernance/décision front ; OPS1 reste **moteur d’exécution** ; pont anti-corruption OPS1 report → T-A6 Evidence. |
| **Preuves** | Audit blob `31a5db07` / `c5b417dc` **uniquement** (pas dans Roadmap VALIDATED body) |
| **Conservé** | OPS1 Cursor REAL path ; F2 OA |
| **Créé** | Bridge durable OA↔OPS1 |
| **Flux cible** | UI → F2/OA → bridge → OPS1 session/Cursor → report → bridge → T-A6 |
| **Bénéfices** | REAL opportuniste plus rapide (OPS1 déjà capable) |
| **Risques** | Perpétue **deux moteurs** ; Evidence/autorité fragmentés ; lutte contre intent F3 single chain |
| **Dette** | **Haute** coexistence |
| **Réversibilité** | **Faible** (approfondit dépendance produit OPS1) |
| **Impact M1** | Ambigu (quel store Project fait autorité ?) |
| **Impact M2–M6** | Complexifie HD/Contract/Attempt unifiés |
| **Architecture parallèle créée ?** | **Oui** (institutionnalise Dual-Shell) |
| **Pour retenir** | Si priorité demo REAL > cohérence backbone |
| **Pour écarter** | Critères 2, 4, 15 ; Roadmap G0 « un seul backbone » |

### 6.3 Non-option (refusée comme pair)

**FinOps Postgres + execution-run comme backbone produit** — écartée comme 3e pair (audit + Roadmap) : FinOps = coût transverse ; Product persistence NOT_SELECTED ; F3 vise T-A4→T-A5→T-A6.

---

## 7. Architecture recommendation — NOT DECIDED

**Observation.** Le code `/studio` est déjà compositionnellement OA ; Option 2 officialiserait le parallèle que G0 doit fermer.

**Options.** Option 1 vs Option 2 (ci-dessus).

**Trade-offs.** Option 1 = plus de travail adapter + G0-B avant REAL, mais backbone unique. Option 2 = REAL plus tôt, dette structurelle plus chère.

**Recommendation.** **Option 1 — OA Native Backbone + Harvest OPS1 Cursor.**

**Confidence / réserves.**

- Haute confiance relative au critère « un seul backbone » + preuves code.
- Réserve : définition Option 2 **hors** docs VALIDATED (audit only) — Morris doit confirmer qu’il accepte cette définition Git candidate.
- Réserve : harvest OPS1 / Ack / Gate D restent **hors** G0 (gates ouverts).

**Decision Required — Morris (G0-A).** PENDING.

---

## 8. Product persistence contract

*Contrat logique (doctrine) — **indépendant** du choix tech. Tech = G0-B.*

### 8.1 Git vs store runtime

| Appartient à **Git** | Appartient au **store runtime (SQL)** |
| --- | --- |
| Doctrine / définitions / schemas | Project courant, LPS (sélectif), digests |
| Docs projet commitables | CycleInstance, sessions (quand activés) |
| Preuves **committables** (paths) | HumanDecision, ExecutionContract, Attempt meta |
| | Evidence meta + refs ; ReviewBundle sealed |
| | Audit append-only ; assignments |
| | Idempotency / optimistic versions |

### 8.2 Transactionnel vs immuable

| Transactionnel (état courant) | Append-only / sealed |
| --- | --- |
| Project, pointeurs latest LPS/version | HumanDecision |
| Assignments, soft-delete flags | ExecutionContract **exécuté** |
| | Evidence, ReviewBundle sealed, audit events |

**Correction :** nouvelle version / révocation / événement correctif — jamais mute silencieuse (`26`).

### 8.3 LPS — persister / ne pas persister (`32`)

**Persister :** identité · pin doctrine · décisions validées · gates · trajectoire validée · réserves · preuves référencées · digests · audit.

**Ne pas persister :** raisonnement interne brut · scores opaques · reco-as-decision · hyp-as-fact · prompts temporaires · dimensions CKC brutes · copies v2.6.

### 8.4 M1 minimal attendu (boundary — non implémenté)

- create Project → persister Project + LPS/digests nécessaires ;
- restart process → retrouver **même** Project/LPS/contexte critique ;
- ports T-A1 préservés ; disclosure `productPersistence` mis à jour **seulement en Delivery M1** après GO ;
- backup/recovery M1 : copie fichier store local **ou** dump SQL selon tech — à préciser en Delivery, pas ici.

### 8.5 Abstractions à préserver

`ProjectRepositoryPort` · `LivingProjectStateRepositoryPort` · audit journal ports — **adapters** swappables. Pas de fuite SQL dans UI/features.

---

## 9. Persistence options

### 9.1 P-SQLite — Product store local `node:sqlite`

| Champ | Contenu |
| --- | --- |
| **Fit M1** | Fort pour mono-opérateur : fichier local, restart-safe, zéro service managé |
| **Fit Option 1** | Fort : adapter derrière ports OA ; composition `wireOaStack` |
| **Réutilisation D1** | **Patterns** (`node:sqlite`) oui ; **schéma/UI D1** non (éviter fusion modèles) |
| **Isolation ports** | Oui — nouvelle DB produit **distincte** de `d1.sqlite` / `ops1.sqlite` |
| **Restart safety** | Oui (fichier process-local path contrôlé) |
| **Transactions / audit** | Supportable (SQL + table audit append-only) — schéma **hors** ce cycle |
| **Concurrence / multi-user** | Limites connues SQLite ; OK horizon mono-opérateur ; **exit** requis avant multi-writer |
| **Backup / portability** | Copie fichier ; simple |
| **Dépendances** | Déjà utilisées (`node:sqlite`) ; **pas** de nouvelle dep npm obligatoire |
| **Coût** | Local — **non chiffré** (pas de prix managé) |
| **Dette** | Migration future si multi-user |
| **Réversibilité** | Haute via ports si schéma borné |
| **Risques** | Confusion avec D1 si path/schéma mal isolés ; pas « production multi-tenant » |

### 9.2 P-Postgres — Product store PostgreSQL (DB **≠** FinOps)

| Champ | Contenu |
| --- | --- |
| **Fit M1** | Possible (driver `pg` déjà présent) mais **service/ops** plus lourds pour M1 mono-opérateur |
| **Fit Option 1** | Fort long terme (multi-user, concurrence) |
| **Réutilisation FinOps** | Driver/migrations tooling oui ; **tables/DB FinOps non** (isolation stricte) |
| **Restart safety** | Oui si DB disponible |
| **Concurrence / multi-user** | Meilleur fit futur |
| **Backup** | Dump/managed — ops à définir |
| **Dépendances** | `pg` + `node-pg-migrate` déjà là |
| **Coût** | Local possible ; managé = **risque coût prématuré** (non chiffré ici) |
| **Dette** | Ops/secrets/`DATABASE_URL` produit dès M1 |
| **Réversibilité** | Haute via ports |
| **Risques** | Couplage accidentel FinOps ; sur-ingénierie M1 |

### 9.3 P-SQLite→Postgres (trajectoire temporaire)

| Champ | Contenu |
| --- | --- |
| **Cible finale** | PostgreSQL product DB isolée |
| **Condition de sortie** | Besoin multi-writer / multi-user **démontré** OU limite SQLite rencontrée en usage réel |
| **Règles** | Ports stables ; **pas** de dual-write incontrôlé ; un seul modèle métier ; migration batch versionnée |
| **Coût migration** | Non chiffré ; borne Delivery dédiée |
| **Risque** | Trajectoire oubliée sans exit → dette |

*Cette trajectoire est compatible avec une **sélection P-SQLite maintenant** + exit documenté — elle n’est pas une 3e tech distincte obligatoire.*

---

## 10. Persistence recommendation — NOT DECIDED

**Observation.** Product persistence = `NOT_SELECTED` dans disclosures T-A7 / runtime. FinOps Postgres et D1 SQLite **existent** mais ne sont **pas** le store produit Studio.

**Options.** P-SQLite vs P-Postgres (P-trajectoire = mode d’exit de P-SQLite).

**Trade-offs.** P-SQLite minimise ops M1 et réutilise le runtime Node SQLite déjà dans l’arbre. P-Postgres anticipe multi-user mais charge M1 et risque de service managé prématuré.

**Recommendation.** **P-SQLite (`node:sqlite`) product store derrière ports OA**, fichier/DB **distincts** de D1/OPS1/FinOps, avec **exit explicite vers Postgres** quand multi-writer/multi-user devient un besoin réel (P-trajectoire).

**Confidence / réserves.**

- Fit mono-opérateur / M1 : bon.
- Ne pas traiter D1 comme cible « parce qu’elle existe ».
- Ne pas traiter FinOps Postgres comme Product persistence.
- Aucun benchmark inventé ; aucun claim scalable/secure/production-ready.
- Schéma physique = **hors G0** (Delivery M1 après GO).

**Decision Required — Morris (G0-B).** PENDING.

---

## 11. Combined compatibility check

| G0-A \ G0-B | P-SQLite | P-Postgres |
| --- | --- | --- |
| **Option 1** | **Compatible (reco croisée)** — adapters OA Memory→SQLite | Compatible — adapters OA→PG ; ops plus lourds M1 |
| **Option 2** | Possible mais **autorité Project floue** (OA vs OPS1 sqlite) | Possible ; aggrave dualité + ops |

**Règle anti-implicite :** choisir Option 1 **ne sélectionne pas** la DB ; choisir P-SQLite **ne valide pas** le backbone.

**Matrice écartée :** Option 2 + FinOps-as-product — non recommandée.

---

## 12. M1 impact / delivery boundary

*Si Morris accepte les recommandations — **autorisation Delivery M1 séparée** requise. Aucune implémentation ici.*

| Élément | Contenu |
| --- | --- |
| **Capacité** | V3-F02 Project/LPS durable et exploitable |
| **Outcome** | create → restart process → même Project/LPS/digest |
| **Ports** | Implémenter adapters durables T-A1 (+ audit) ; brancher `wireOaStack` / composition |
| **COMPLETE/ADAPT** | T-A1 COMPLETE stores ; composition ADAPT |
| **HARVEST** | Non requis pour M1 (OPS1 = M4) |
| **FREEZE/RETIRE LATER** | D1 UI growth ; execution-run features ; OPS1 UI growth (reco) |
| **Dette temporaire** | Coexistence D1 UI jusqu’à disposition post-M1 |
| **Exit proof M1** | Preuve e2e restart-safe documentée |
| **Hors M1** | Cursor REAL ; Gate D ; Auth promotion ; multi-region ; schéma « all aggregates » |

---

## 13. Debt / exits / reversibility

| Dette / temporaire | Cible | Condition de sortie | Exit |
| --- | --- | --- | --- |
| Memory* product | Adapters durables | GO G0-B + Delivery M1 | Remplacer factories Memory dans composition |
| D1 UI parallèle | Disposition | M1 stable | FREEZE → RETIRE LATER / bridge borné |
| OPS1 UI | Freeze growth | post-harvest M4 | UI non étendue ; adapter only |
| execution-run | Quarantine | decision disposition | Pas de nouvelles features indépendantes |
| P-SQLite mono-op | Postgres product | multi-writer réel | Migration batch ; ports inchangés |
| Dual-Shell si choisi | Convergence Option 1 | dette Dual-Shell | Coût élevé — raison d’écarter Option 2 |

---

## 14. Risks / reservations

| Id | Classe | Risque / réserve | Mitigation |
| --- | --- | --- | --- |
| R1 | Provenance | Option 2 absente du corps Roadmap VALIDATED | Pack cite audit `31a5db07` ; Morris confirme définition |
| R2 | Confusion | D1/OPS1 sqlite ≠ Product store | Paths/DB séparés ; FREEZE D1 |
| R3 | Confusion | FinOps Postgres ≠ Product persistence | Isolation DB/schema ; KEEP isolé |
| R4 | Sécu | Données projet peuvent inclure contexte personnel | Soft delete + rétention RUN future ; pas de politique RUN ici |
| R5 | Sécu | Claims « sécurisé / tamper-proof » | Interdits sans preuve ; audit append-only = modèle logique |
| R6 | Perf | Volumétrie non démontrée | Pas de SLA inventé ; SQLite OK mono-op déclaré |
| R7 | FinOps | Service managé prématuré si P-Postgres M1 | Préférer P-SQLite M1 sauf GO contraire |
| R8 | Scope | Implémentation / migration tentante | Hors périmètre G0 — STOP si exigée |
| R9 | Doc | Template historique Layer 1 ChatGPT = PENDING vs PR #336 ACTIVE | Divergence hors périmètre G0 — notée, non corrigée |
| R10 | Gouvernance | Recommandation ≠ décision | G0-A/B restent PENDING |

**Blocs activés (proportionnés) :** FinOps lens · RSSI · Performance · RGPD bornée — ci-dessus. **Pas** UX/Figma, Delivery code, DevOps mod, Release.

---

## 15. Morris Decision Gate

### G0-A — Architecture convergence

| Élément | Valeur |
| --- | --- |
| **Options** | (1) OA Native Backbone + Harvest OPS1 Cursor · (2) Dual-Shell OA front + OPS1 execution |
| **Recommendation (historique)** | Option 1 |
| **Choix Morris** | **ADOPTED — Option 1 — OA Native Backbone + Harvest OPS1 Cursor** |
| **Horodatage** | 2026-08-13 08:40:00 +0200 (Europe/Paris) |

### G0-B — Product persistence

| Élément | Valeur |
| --- | --- |
| **Options** | (P-SQLite) `node:sqlite` isolé · (P-Postgres) PostgreSQL ≠ FinOps |
| **Recommendation (historique)** | P-SQLite + exit Postgres |
| **Choix Morris** | **ADOPTED — node:sqlite Product Store isolé derrière ports OA ; exit Postgres sur besoin multi-writer/multi-user démontré** |
| **Horodatage** | 2026-08-13 08:40:00 +0200 (Europe/Paris) |

### Gates / décisions Roadmap **non consommés** (restent ouverts)

1. Promotion Auth.js / Critical Ack — Decision Required
2. Cursor REAL / Gate D — NOT AUTHORIZED / NOT CONSUMED
3. Disposition finale OPS1 / D1 / execution-run — Decision Required
4. Runtime v3 — **NON ADOPTED**

### Statut G0

**DECIDED — G0 CONSUMED** — source : décision Morris explicite ; tracée ici + Convergence Roadmap. Build Doctrine n’est pas l’autorité d’architecture/persistence.

---

## 16. Build Doctrine exit questions (auto-check)

| Question | Réponse pack |
| --- | --- |
| Capacité v3 débloquée ? | Précondition backbone + persistence → débloque V3-F02 / M1 |
| Utile maintenant ? | Oui — sans G0, M1 multi-moteur |
| Actifs réutilisables ? | Oui — ports OA, VS, harvest OPS1 |
| Architecture parallèle ? | Option 1 la réduit ; Option 2 l’institutionnalise |
| Gaps cohérents fermés ensemble ? | G0-A + G0-B liés mais **décisions séparées** |
| Preuve de sortie ? | Décisions Morris écrites consommables par Delivery M1 |
| Capacité suivante ? | M1 |
| Dette ? | Temporaires avec exits (§13) ; pas d’implémentation spéculative |
| Automatisable ou arbitrage humain ? | **Arbitrage humain Morris** |
| Gate Morris ? | **Oui — G0-A + G0-B** |

---

## 17. Verdict documentaire (pack)

**DECIDED — G0 CONSUMED**

G0-A et G0-B sont des **décisions Morris**. M1 Delivery est **autorisé** et implémenté comme **IMPLEMENTED CANDIDATE** jusqu’à validation Morris post-exécution.
≠ M1 VALIDATED · ≠ runtime v3 ADOPTED · ≠ Cursor REAL · ≠ Gate D.

```

## 9. Diffs utiles fichiers modifiés

### `projects/sfia-studio/app/lib/oa/project/application/createProject.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/application/createProject.ts b/projects/sfia-studio/app/lib/oa/project/application/createProject.ts
index 96e0a95..8f307e4 100644
--- a/projects/sfia-studio/app/lib/oa/project/application/createProject.ts
+++ b/projects/sfia-studio/app/lib/oa/project/application/createProject.ts
@@ -19,7 +19,7 @@ import type {
 import type { LivingProjectStateRepositoryPort } from "../ports/livingProjectStateRepositoryPort";
 import type { ProjectAuditJournalPort } from "../ports/projectAuditJournalPort";
 import type { ProjectRepositoryPort } from "../ports/projectRepositoryPort";
-import type { MemoryProjectStore } from "../infrastructure/memoryProjectStore";
+import type { ProjectPersistenceUnitOfWorkPort } from "../ports/projectPersistenceUnitOfWorkPort";

 function newId(prefix: "lps" | "prv" | "cor"): string {
   return `${prefix}:${randomBytes(8).toString("hex")}`;
@@ -55,7 +55,7 @@ export class CreateProject {
     private readonly doctrine: DoctrinePackageResolverPort,
     private readonly clock: ClockPort,
     private readonly audit: ProjectAuditJournalPort,
-    private readonly store?: MemoryProjectStore,
+    private readonly store?: ProjectPersistenceUnitOfWorkPort,
   ) {}

   async execute(request: CreateProjectRequest): Promise<CreateProjectResult> {

```

### `projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts b/projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts
index 7291914..d15101f 100644
--- a/projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts
+++ b/projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts
@@ -19,7 +19,7 @@ import type {
 import type { LivingProjectStateRepositoryPort } from "../ports/livingProjectStateRepositoryPort";
 import type { ProjectAuditJournalPort } from "../ports/projectAuditJournalPort";
 import type { ProjectRepositoryPort } from "../ports/projectRepositoryPort";
-import type { MemoryProjectStore } from "../infrastructure/memoryProjectStore";
+import type { ProjectPersistenceUnitOfWorkPort } from "../ports/projectPersistenceUnitOfWorkPort";

 function newId(prefix: "lps" | "prv" | "cor"): string {
   return `${prefix}:${randomBytes(8).toString("hex")}`;
@@ -69,7 +69,7 @@ export class AppendLivingProjectStateVersion {
     private readonly lps: LivingProjectStateRepositoryPort,
     private readonly clock: ClockPort,
     private readonly audit: ProjectAuditJournalPort,
-    private readonly store?: MemoryProjectStore,
+    private readonly store?: ProjectPersistenceUnitOfWorkPort,
   ) {}

   async execute(

```

### `projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectStore.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectStore.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectStore.ts
index 18e896b..79abbc3 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectStore.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectStore.ts
@@ -1,8 +1,9 @@
 /**
  * Shared in-memory store with transactional helper for atomic Project + LPS create.
- * Reversible candidate — NOT DATABASE SELECTED (T-A1-D06).
+ * Still used by unit tests; Studio composition root uses SQLite Product Store (M1 / G0-B).
  */
 import type { LivingProjectState, Project } from "../domain/types";
+import type { ProjectPersistenceUnitOfWorkPort } from "../ports/projectPersistenceUnitOfWorkPort";

 type Snapshot = {
   projects: Map<string, Project>;
@@ -40,7 +41,7 @@ function restoreSnapshot(store: MemoryProjectStore, snap: Snapshot): void {
   store.idempotency = snap.idempotency;
 }

-export class MemoryProjectStore {
+export class MemoryProjectStore implements ProjectPersistenceUnitOfWorkPort {
   projects = new Map<string, Project>();
   lpsById = new Map<string, LivingProjectState>();
   lpsIndex = new Map<string, string>();

```

### `projects/sfia-studio/app/lib/oa/project/index.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/index.ts b/projects/sfia-studio/app/lib/oa/project/index.ts
index d2ec340..279324e 100644
--- a/projects/sfia-studio/app/lib/oa/project/index.ts
+++ b/projects/sfia-studio/app/lib/oa/project/index.ts
@@ -2,7 +2,8 @@
  * T-A1 Project / LPS Foundation — public barrel.
  *
  * Isolated Option A v3-native module. Consumes T-A0 doctrine ports only.
- * Does not replace d1 / OPS1 / MethodMode. In-memory persistence only (reversible).
+ * Does not replace d1 / OPS1 / MethodMode.
+ * Studio composition uses SQLite Product Store (G0-B / M1); Memory remains for tests.
  */

 export * from "./domain/types";
@@ -12,6 +13,7 @@ export * from "./domain/invariants";
 export * from "./ports/projectRepositoryPort";
 export * from "./ports/livingProjectStateRepositoryPort";
 export * from "./ports/projectAuditJournalPort";
+export * from "./ports/projectPersistenceUnitOfWorkPort";

 export { CreateProject } from "./application/createProject";
 export { GetProject } from "./application/getProject";
@@ -27,6 +29,18 @@ export {
   MemoryProjectAuditJournal,
 } from "./infrastructure/observability";

+export { resolveProductSqlitePath } from "./infrastructure/sqlite/paths";
+export { SqliteProductStore } from "./infrastructure/sqlite/sqliteProductStore";
+export { SqliteProjectRepository } from "./infrastructure/sqlite/sqliteProjectRepository";
+export { SqliteLivingProjectStateRepository } from "./infrastructure/sqlite/sqliteLivingProjectStateRepository";
+export { SqliteProjectAuditJournal } from "./infrastructure/sqlite/sqliteProjectAuditJournal";
+export {
+  createSqliteProductProjectServices,
+  createTestSqliteProductProjectServices,
+  type CreateSqliteProductProjectServicesOptions,
+  type SqliteProductProjectServices,
+} from "./infrastructure/sqlite/createSqliteProductProjectServices";
+
 import type {
   ClockPort,
   DoctrinePackageResolverPort,
@@ -44,18 +58,23 @@ import {
   ConsoleProjectAuditJournal,
   MemoryProjectAuditJournal,
 } from "./infrastructure/observability";
+import type { LivingProjectStateRepositoryPort } from "./ports/livingProjectStateRepositoryPort";
 import type { ProjectAuditJournalPort } from "./ports/projectAuditJournalPort";
+import type { ProjectPersistenceUnitOfWorkPort } from "./ports/projectPersistenceUnitOfWorkPort";
+import type { ProjectRepositoryPort } from "./ports/projectRepositoryPort";

 export type ProjectServices = {
-  store: MemoryProjectStore;
-  projects: MemoryProjectRepository;
-  lps: MemoryLivingProjectStateRepository;
+  store: ProjectPersistenceUnitOfWorkPort;
+  projects: ProjectRepositoryPort;
+  lps: LivingProjectStateRepositoryPort;
   audit: ProjectAuditJournalPort;
   createProject: CreateProject;
   getProject: GetProject;
   getCurrentLivingProjectState: GetCurrentLivingProjectState;
   getLivingProjectStateVersion: GetLivingProjectStateVersion;
   appendLivingProjectStateVersion: AppendLivingProjectStateVersion;
+  /** Optional dispose for durable backends (SQLite). */
+  dispose?: () => void;
 };

 export type CreateInMemoryProjectServicesOptions = {
@@ -64,10 +83,10 @@ export type CreateInMemoryProjectServicesOptions = {
   audit?: ProjectAuditJournalPort;
 };

-/** Factory for in-memory Project/LPS services (runtime candidate / tests). */
+/** Factory for in-memory Project/LPS services (unit tests / non-Studio callers). */
 export function createInMemoryProjectServices(
   options: CreateInMemoryProjectServicesOptions,
-): ProjectServices {
+): ProjectServices & { store: MemoryProjectStore } {
   const store = new MemoryProjectStore();
   const projects = new MemoryProjectRepository(store);
   const lps = new MemoryLivingProjectStateRepository(store);
@@ -115,7 +134,10 @@ export function createTestProjectServices(
     audit?: MemoryProjectAuditJournal;
     fixedNowIso?: string;
   },
-): ProjectServices & { audit: MemoryProjectAuditJournal } {
+): ProjectServices & {
+  store: MemoryProjectStore;
+  audit: MemoryProjectAuditJournal;
+} {
   const audit = options.audit ?? new MemoryProjectAuditJournal();
   const clock =
     options.clock ??
@@ -126,5 +148,8 @@ export function createTestProjectServices(
     ...options,
     clock,
     audit,
-  }) as ProjectServices & { audit: MemoryProjectAuditJournal };
+  }) as ProjectServices & {
+    store: MemoryProjectStore;
+    audit: MemoryProjectAuditJournal;
+  };
 }

```

### `projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts b/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
index 328e3bc..985edf2 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
@@ -1,4 +1,7 @@
 import { randomUUID } from "node:crypto";
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
 import {
   AjvSchemaValidationAdapter,
   FilesystemDoctrinePackageRepository,
@@ -12,7 +15,7 @@ import {
 } from "@/lib/oa/doctrine";
 import {
   MemoryProjectAuditJournal,
-  createInMemoryProjectServices,
+  createSqliteProductProjectServices,
   type LivingProjectState,
   type Project,
   type ProjectServices,
@@ -241,7 +244,7 @@ function buildProjection(
     }),
     localMode: true,
     iam: "NOT_SELECTED",
-    productPersistence: "NOT_SELECTED",
+    productPersistence: "SQLITE_OA_PRODUCT_STORE",
     realAgentExecution: "NOT_AVAILABLE",
     delivery: "NOT_AUTHORIZED",
     cutover: "NOT_AUTHORIZED",
@@ -448,7 +451,7 @@ class LocalProjectFacadeImpl implements LocalProjectFacade {
 export const LOCAL_VERTICAL_SLICE_ARCHITECTURE: LocalVerticalSliceArchitecture =
   Object.freeze({
     accessSurface: "HEADLESS_INTERNAL",
-    businessState: "OA_MEMORY",
+    businessState: "OA_PRODUCT_SQLITE_T_A1",
     doctrine: "T_A0_LOCAL_REGISTRY",
     project: "T_A1_PROJECT_LPS",
     audit: "OPTIONAL_BOUNDED_LOCAL",
@@ -457,7 +460,7 @@ export const LOCAL_VERTICAL_SLICE_ARCHITECTURE: LocalVerticalSliceArchitecture =
     react: false,
     network: false,
     iam: "NOT_SELECTED",
-    productPersistence: "NOT_SELECTED",
+    productPersistence: "SQLITE_OA_PRODUCT_STORE",
     realAgentExecution: "NOT_AVAILABLE",
   });

@@ -478,10 +481,22 @@ export function createLocalVerticalSliceServices(
     clock,
     new MemoryDoctrineAuditJournal(),
   );
-  const projectServices = createInMemoryProjectServices({
+  // Vitest/process-local suites expect isolated Product DB per composition.
+  // Production/default resolves via SFIA_STUDIO_PRODUCT_DB_PATH / .sfia-exec/product.
+  const productDbPath =
+    options.productDbPath ??
+    (process.env.NODE_ENV === "test" &&
+    !process.env.SFIA_STUDIO_PRODUCT_DB_PATH?.trim()
+      ? path.join(
+          fs.mkdtempSync(path.join(os.tmpdir(), "sfia-product-")),
+          "oa-product.sqlite",
+        )
+      : undefined);
+  const projectServices = createSqliteProductProjectServices({
     doctrineResolver,
     clock,
     audit: new MemoryProjectAuditJournal(),
+    dbPath: productDbPath,
   });
   const idSource = options.idSource ?? new RandomLocalProjectIdSource();
   const audit =

```

### `projects/sfia-studio/app/lib/vertical-slice-core/types.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-core/types.ts b/projects/sfia-studio/app/lib/vertical-slice-core/types.ts
index 922bd1a..b762d78 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-core/types.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-core/types.ts
@@ -46,7 +46,7 @@ export interface LocalProjectCreationView {
   readonly lps: LocalProjectLpsProjection;
   readonly localMode: true;
   readonly iam: "NOT_SELECTED";
-  readonly productPersistence: "NOT_SELECTED";
+  readonly productPersistence: "SQLITE_OA_PRODUCT_STORE";
   readonly realAgentExecution: "NOT_AVAILABLE";
   readonly delivery: "NOT_AUTHORIZED";
   readonly cutover: "NOT_AUTHORIZED";
@@ -100,7 +100,7 @@ export type GetLocalProjectOverviewResult =

 export interface LocalVerticalSliceArchitecture {
   readonly accessSurface: "HEADLESS_INTERNAL";
-  readonly businessState: "OA_MEMORY";
+  readonly businessState: "OA_PRODUCT_SQLITE_T_A1";
   readonly doctrine: "T_A0_LOCAL_REGISTRY";
   readonly project: "T_A1_PROJECT_LPS";
   readonly audit: "OPTIONAL_BOUNDED_LOCAL";
@@ -109,7 +109,7 @@ export interface LocalVerticalSliceArchitecture {
   readonly react: false;
   readonly network: false;
   readonly iam: "NOT_SELECTED";
-  readonly productPersistence: "NOT_SELECTED";
+  readonly productPersistence: "SQLITE_OA_PRODUCT_STORE";
   readonly realAgentExecution: "NOT_AVAILABLE";
 }

@@ -126,4 +126,9 @@ export interface LocalVerticalSliceCompositionOptions {
   readonly idSource?: LocalProjectIdSource;
   readonly nowIso?: string;
   readonly audit?: import("./audit").LocalProjectCreationAuditPort;
+  /**
+   * Explicit OA Product SQLite path (tests). Default resolves via
+   * SFIA_STUDIO_PRODUCT_DB_PATH / .sfia-exec/product/oa-product.sqlite.
+   */
+  readonly productDbPath?: string;
 }

```

### `projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
index bda2177..3edf5c6 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
@@ -2,40 +2,47 @@ import "./serverGuard";

 /**
  * D-V2-05 runtime disclosures — always attached to runtime results.
- * Not a product-ready claim surface.
+ * M1: Project/LPS Product SQLite is restart-safe; other OA stacks remain process-local.
+ * Not a product-ready / v3-ADOPTED claim surface.
  */
 export interface RuntimeDisclosures {
   readonly runtimeMode: "LOCAL_PROCESS";
-  readonly persistence: "NOT_GUARANTEED";
+  /** Partial: T-A1 Project/LPS durable; T-A2…T-A6 still process-local Memory. */
+  readonly persistence: "PARTIAL_PROJECT_LPS_DURABLE";
   readonly agentExecution: "DISABLED";
   readonly iam: "NOT_SELECTED";
-  readonly productPersistence: "NOT_SELECTED";
+  readonly productPersistence: "SQLITE_OA_PRODUCT_STORE";
   readonly delivery: "NOT_AUTHORIZED";
   readonly cutover: "NOT_AUTHORIZED";
+  /** True because non-T-A1 OA state remains volatile. */
   readonly localDataVolatile: true;
+  /** True for cycle/decision/contract/attempt/evidence Memory; Project/LPS survive restart. */
   readonly restartMayLoseState: true;
+  readonly projectLpsRestartSafe: true;
   readonly messages: readonly string[];
 }

 export const RUNTIME_DISCLOSURE_MESSAGES: readonly string[] = Object.freeze([
   "Mode local process-bound: the runtime lives in a single Node process.",
-  "Business data is temporary and may be lost on restart or hot reload.",
+  "Project/LPS Product persistence uses an isolated node:sqlite store (G0-B / M1).",
+  "Other OA business state (cycle/decision/contract/attempt/evidence) remains process-local Memory and may be lost on restart.",
   "IAM is not configured.",
-  "Product persistence is not selected.",
   "Real agent execution is disabled.",
   "Delivery and cutover are not authorized.",
+  "Runtime v3 is not ADOPTED.",
 ]);

 export const RUNTIME_DISCLOSURES: RuntimeDisclosures = Object.freeze({
   runtimeMode: "LOCAL_PROCESS",
-  persistence: "NOT_GUARANTEED",
+  persistence: "PARTIAL_PROJECT_LPS_DURABLE",
   agentExecution: "DISABLED",
   iam: "NOT_SELECTED",
-  productPersistence: "NOT_SELECTED",
+  productPersistence: "SQLITE_OA_PRODUCT_STORE",
   delivery: "NOT_AUTHORIZED",
   cutover: "NOT_AUTHORIZED",
   localDataVolatile: true,
   restartMayLoseState: true,
+  projectLpsRestartSafe: true,
   messages: RUNTIME_DISCLOSURE_MESSAGES,
 });

@@ -48,7 +55,7 @@ export interface RuntimeReadinessProjection {
   readonly hard: "OPEN";
   readonly tA6: "INCOMPLETE";
   readonly iam: "NOT_SELECTED";
-  readonly productPersistence: "NOT_SELECTED";
+  readonly productPersistence: "SQLITE_OA_PRODUCT_STORE";
   readonly realAgentExecution: "DISABLED";
   readonly delivery: "NOT_AUTHORIZED";
   readonly cutover: "NOT_AUTHORIZED";
@@ -62,7 +69,7 @@ export const RUNTIME_READINESS_NOT_READY: RuntimeReadinessProjection =
     hard: "OPEN",
     tA6: "INCOMPLETE",
     iam: "NOT_SELECTED",
-    productPersistence: "NOT_SELECTED",
+    productPersistence: "SQLITE_OA_PRODUCT_STORE",
     realAgentExecution: "DISABLED",
     delivery: "NOT_AUTHORIZED",
     cutover: "NOT_AUTHORIZED",

```

### `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index c2d6c3e..736a084 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -70,6 +70,10 @@ export interface RuntimeApplicationServiceOptions {
    */
   readonly auditMode?: RuntimeAuditMode;
   readonly sqliteAuditStore?: BoundedAtomicAuditStore;
+  /**
+   * OA Product SQLite path (M1). Isolated from D1/OPS1/FinOps.
+   */
+  readonly productDbPath?: string;
   /**
    * Escape hatch for tests: inject a fully built V1 facade.
    * Production path builds via createLocalVerticalSliceServices.
@@ -172,15 +176,27 @@ export class RuntimeApplicationService {
   private readonly facade: LocalProjectFacade;
   readonly architecture: LocalVerticalSliceServices["architecture"];
   readonly oa: RuntimeOaStack | null;
+  private readonly disposeProduct?: () => void;

   constructor(
     facade: LocalProjectFacade,
     architecture: LocalVerticalSliceServices["architecture"],
     oa: RuntimeOaStack | null = null,
+    disposeProduct?: () => void,
   ) {
     this.facade = facade;
     this.architecture = architecture;
     this.oa = oa;
+    this.disposeProduct = disposeProduct;
+  }
+
+  /** Release durable Product SQLite handles (tests / shutdown). */
+  dispose(): void {
+    try {
+      this.disposeProduct?.();
+    } catch {
+      /* ignore */
+    }
   }

   /** Use case: Create Project via V1 facade. */
@@ -229,6 +245,7 @@ export function createRuntimeApplicationService(
     idSource: options.idSource,
     nowIso: options.nowIso,
     audit: resolveAudit(options.auditMode ?? "noop", options.sqliteAuditStore),
+    productDbPath: options.productDbPath,
   });

   const oa = wireOaStack(services.projectServices, services.clock);
@@ -236,5 +253,6 @@ export function createRuntimeApplicationService(
     services.facade,
     services.architecture,
     oa,
+    services.projectServices.dispose,
   );
 }

```

### `projects/sfia-studio/app/lib/vertical-slice-runtime/singleton.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/singleton.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/singleton.ts
index 6725f19..e84b23a 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/singleton.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/singleton.ts
@@ -76,6 +76,11 @@ export function resetRuntimeApplicationServiceForTests(): void {
     );
   }
   const slot = getProcessLocalRuntimeSlot();
+  try {
+    slot.service?.dispose();
+  } catch {
+    /* ignore */
+  }
   slot.service = null;
   slot.options = undefined;
 }

```

### `projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
index 0e96bd2..6a62bd3 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
@@ -69,7 +69,7 @@ describe("visible slice V1 local composition", () => {
     const services = createLocalVerticalSliceServices(createOptions());
     expect(services.architecture).toEqual({
       accessSurface: "HEADLESS_INTERNAL",
-      businessState: "OA_MEMORY",
+      businessState: "OA_PRODUCT_SQLITE_T_A1",
       doctrine: "T_A0_LOCAL_REGISTRY",
       project: "T_A1_PROJECT_LPS",
       audit: "OPTIONAL_BOUNDED_LOCAL",
@@ -78,7 +78,7 @@ describe("visible slice V1 local composition", () => {
       react: false,
       network: false,
       iam: "NOT_SELECTED",
-      productPersistence: "NOT_SELECTED",
+      productPersistence: "SQLITE_OA_PRODUCT_STORE",
       realAgentExecution: "NOT_AVAILABLE",
     });
     expect(Object.isFrozen(services.architecture)).toBe(true);
@@ -159,7 +159,7 @@ describe("visible slice V1 Project/LPS happy path", () => {
       },
       localMode: true,
       iam: "NOT_SELECTED",
-      productPersistence: "NOT_SELECTED",
+      productPersistence: "SQLITE_OA_PRODUCT_STORE",
       realAgentExecution: "NOT_AVAILABLE",
       delivery: "NOT_AUTHORIZED",
       cutover: "NOT_AUTHORIZED",

```

### `projects/sfia-studio/app/__tests__/vertical-slice-runtime/runtimeApplicationService.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/runtimeApplicationService.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/runtimeApplicationService.test.ts
index 1f8468e..5b40a97 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/runtimeApplicationService.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/runtimeApplicationService.test.ts
@@ -83,7 +83,9 @@ describe("V2-A1 RuntimeApplicationService", () => {
     expect(result.readiness.productReady).toBe(false);
     expect(result.disclosures).toEqual(RUNTIME_DISCLOSURES);
     expect(result.disclosures.runtimeMode).toBe("LOCAL_PROCESS");
-    expect(result.disclosures.persistence).toBe("NOT_GUARANTEED");
+    expect(result.disclosures.persistence).toBe("PARTIAL_PROJECT_LPS_DURABLE");
+    expect(result.disclosures.productPersistence).toBe("SQLITE_OA_PRODUCT_STORE");
+    expect(result.disclosures.projectLpsRestartSafe).toBe(true);
     expect(result.disclosures.agentExecution).toBe("DISABLED");
     expect(result.auditStatus).toBe("DISABLED");
     expect(result.reusedFromIdempotencyKey).toBe(false);
@@ -121,7 +123,7 @@ describe("V2-A1 RuntimeApplicationService", () => {
     expect(missing).toMatchObject({
       ok: false,
       error: { code: "PROJECT_NOT_FOUND" },
-      disclosures: { persistence: "NOT_GUARANTEED" },
+      disclosures: { persistence: "PARTIAL_PROJECT_LPS_DURABLE" },
     });
   });

@@ -204,7 +206,10 @@ describe("V2-A1 RuntimeApplicationService", () => {

   it("exposes headless architecture flags without product persistence or agent", () => {
     const runtime = createService();
-    expect(runtime.architecture.productPersistence).toBe("NOT_SELECTED");
+    expect(runtime.architecture.productPersistence).toBe(
+      "SQLITE_OA_PRODUCT_STORE",
+    );
+    expect(runtime.architecture.businessState).toBe("OA_PRODUCT_SQLITE_T_A1");
     expect(runtime.architecture.realAgentExecution).toBe("NOT_AVAILABLE");
     expect(runtime.architecture.react).toBe(false);
     expect(runtime.architecture.network).toBe(false);

```

### `projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx b/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
index 492a659..6d9b836 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
@@ -24,14 +24,15 @@ vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
 vi.mock("@/lib/vertical-slice-runtime/disclosures", () => ({
   RUNTIME_DISCLOSURES: {
     runtimeMode: "LOCAL_PROCESS",
-    persistence: "NOT_GUARANTEED",
+    persistence: "PARTIAL_PROJECT_LPS_DURABLE",
     agentExecution: "DISABLED",
     iam: "NOT_SELECTED",
-    productPersistence: "NOT_SELECTED",
+    productPersistence: "SQLITE_OA_PRODUCT_STORE",
     delivery: "NOT_AUTHORIZED",
     cutover: "NOT_AUTHORIZED",
-    localDataVolatile: true,
-    restartMayLoseState: true,
+    localDataVolatile: true as const,
+    restartMayLoseState: true as const,
+    projectLpsRestartSafe: true as const,
     messages: [],
   },
   RUNTIME_READINESS_NOT_READY: {
@@ -39,7 +40,7 @@ vi.mock("@/lib/vertical-slice-runtime/disclosures", () => ({
     hard: "OPEN",
     tA6: "INCOMPLETE",
     iam: "NOT_SELECTED",
-    productPersistence: "NOT_SELECTED",
+    productPersistence: "SQLITE_OA_PRODUCT_STORE",
     realAgentExecution: "DISABLED",
     delivery: "NOT_AUTHORIZED",
     cutover: "NOT_AUTHORIZED",
@@ -94,7 +95,7 @@ const SUCCESS_RESULT = {
     hard: "OPEN" as const,
     tA6: "INCOMPLETE" as const,
     iam: "NOT_SELECTED" as const,
-    productPersistence: "NOT_SELECTED" as const,
+    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
     realAgentExecution: "DISABLED" as const,
     delivery: "NOT_AUTHORIZED" as const,
     cutover: "NOT_AUTHORIZED" as const,
@@ -103,14 +104,15 @@ const SUCCESS_RESULT = {
   },
   disclosures: {
     runtimeMode: "LOCAL_PROCESS" as const,
-    persistence: "NOT_GUARANTEED" as const,
+    persistence: "PARTIAL_PROJECT_LPS_DURABLE" as const,
     agentExecution: "DISABLED" as const,
     iam: "NOT_SELECTED" as const,
-    productPersistence: "NOT_SELECTED" as const,
+    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
     delivery: "NOT_AUTHORIZED" as const,
     cutover: "NOT_AUTHORIZED" as const,
     localDataVolatile: true as const,
     restartMayLoseState: true as const,
+    projectLpsRestartSafe: true as const,
     messages: ["Temporary local data"],
   },
   reusedFromIdempotencyKey: false,
@@ -168,7 +170,9 @@ describe("V2-A2 Create Project UI", () => {
       screen.getByText(/entrée de qualification uniquement/i),
     ).toBeVisible();
     expect(screen.getAllByText("LOCAL_PROCESS").length).toBeGreaterThan(0);
-    expect(screen.getAllByText("NOT_GUARANTEED").length).toBeGreaterThan(0);
+    expect(
+      screen.getAllByText("PARTIAL_PROJECT_LPS_DURABLE").length,
+    ).toBeGreaterThan(0);
     expect(screen.getAllByText(/AGENT DISABLED/).length).toBeGreaterThan(0);
     expect(screen.queryByLabelText(/email|organisation|token/i)).toBeNull();
     await waitFor(() =>
@@ -380,7 +384,9 @@ describe("V2-A2 Create Project UI", () => {
     expect(screen.getByText("pkg:studio-v3-oa")).toBeVisible();
     expect(screen.getByText("lps:v2-a2-1")).toBeVisible();
     expect(screen.getAllByText("NOT_READY").length).toBeGreaterThan(0);
-    expect(screen.getAllByText("NOT_GUARANTEED").length).toBeGreaterThan(0);
+    expect(
+      screen.getAllByText("PARTIAL_PROJECT_LPS_DURABLE").length,
+    ).toBeGreaterThan(0);
     expect(
       screen.getByRole("link", { name: "Ouvrir l’espace de travail" }),
     ).toHaveAttribute("href", "/studio/projects/prj%3Av2-a2-1");

```

### `projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx b/projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
index 0ed58a0..a8814fa 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
@@ -21,14 +21,15 @@ vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
 vi.mock("@/lib/vertical-slice-runtime/disclosures", () => ({
   RUNTIME_DISCLOSURES: {
     runtimeMode: "LOCAL_PROCESS",
-    persistence: "NOT_GUARANTEED",
+    persistence: "PARTIAL_PROJECT_LPS_DURABLE",
     agentExecution: "DISABLED",
     iam: "NOT_SELECTED",
-    productPersistence: "NOT_SELECTED",
+    productPersistence: "SQLITE_OA_PRODUCT_STORE",
     delivery: "NOT_AUTHORIZED",
     cutover: "NOT_AUTHORIZED",
-    localDataVolatile: true,
-    restartMayLoseState: true,
+    localDataVolatile: true as const,
+    restartMayLoseState: true as const,
+    projectLpsRestartSafe: true as const,
     messages: [],
   },
   RUNTIME_READINESS_NOT_READY: {
@@ -36,7 +37,7 @@ vi.mock("@/lib/vertical-slice-runtime/disclosures", () => ({
     hard: "OPEN",
     tA6: "INCOMPLETE",
     iam: "NOT_SELECTED",
-    productPersistence: "NOT_SELECTED",
+    productPersistence: "SQLITE_OA_PRODUCT_STORE",
     realAgentExecution: "DISABLED",
     delivery: "NOT_AUTHORIZED",
     cutover: "NOT_AUTHORIZED",
@@ -90,7 +91,7 @@ const SUCCESS_RESULT = {
     hard: "OPEN" as const,
     tA6: "INCOMPLETE" as const,
     iam: "NOT_SELECTED" as const,
-    productPersistence: "NOT_SELECTED" as const,
+    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
     realAgentExecution: "DISABLED" as const,
     delivery: "NOT_AUTHORIZED" as const,
     cutover: "NOT_AUTHORIZED" as const,
@@ -99,14 +100,15 @@ const SUCCESS_RESULT = {
   },
   disclosures: {
     runtimeMode: "LOCAL_PROCESS" as const,
-    persistence: "NOT_GUARANTEED" as const,
+    persistence: "PARTIAL_PROJECT_LPS_DURABLE" as const,
     agentExecution: "DISABLED" as const,
     iam: "NOT_SELECTED" as const,
-    productPersistence: "NOT_SELECTED" as const,
+    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
     delivery: "NOT_AUTHORIZED" as const,
     cutover: "NOT_AUTHORIZED" as const,
     localDataVolatile: true as const,
     restartMayLoseState: true as const,
+    projectLpsRestartSafe: true as const,
     messages: [] as const,
   },
 };
@@ -146,7 +148,9 @@ describe("V2-A3 Project Workspace UI", () => {
     expect(screen.getAllByText("REAL_LOCAL_CORE").length).toBeGreaterThan(0);
     expect(screen.getAllByText("NOT_READY").length).toBeGreaterThan(0);
     expect(screen.getAllByText("LOCAL_PROCESS").length).toBeGreaterThan(0);
-    expect(screen.getAllByText("NOT_GUARANTEED").length).toBeGreaterThan(0);
+    expect(
+      screen.getAllByText("PARTIAL_PROJECT_LPS_DURABLE").length,
+    ).toBeGreaterThan(0);
     expect(screen.getByText(/AGENT DISABLED/)).toBeVisible();
     expect(
       within(screen.getByLabelText("Contraintes")).getAllByText("Sans IAM"),

```

### `projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
index d014533..4495dc5 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
+++ b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
@@ -80,7 +80,7 @@ const SUCCESS_RESULT = {
     hard: "OPEN" as const,
     tA6: "INCOMPLETE" as const,
     iam: "NOT_SELECTED" as const,
-    productPersistence: "NOT_SELECTED" as const,
+    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
     realAgentExecution: "DISABLED" as const,
     delivery: "NOT_AUTHORIZED" as const,
     cutover: "NOT_AUTHORIZED" as const,
@@ -89,14 +89,15 @@ const SUCCESS_RESULT = {
   },
   disclosures: {
     runtimeMode: "LOCAL_PROCESS" as const,
-    persistence: "NOT_GUARANTEED" as const,
+    persistence: "PARTIAL_PROJECT_LPS_DURABLE" as const,
     agentExecution: "DISABLED" as const,
     iam: "NOT_SELECTED" as const,
-    productPersistence: "NOT_SELECTED" as const,
+    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
     delivery: "NOT_AUTHORIZED" as const,
     cutover: "NOT_AUTHORIZED" as const,
     localDataVolatile: true as const,
     restartMayLoseState: true as const,
+    projectLpsRestartSafe: true as const,
     messages: [] as const,
   },
 };
@@ -142,7 +143,7 @@ describe("F1 ProjectAssistantPanel UI", () => {
         doctrineDigest: "digest:f1-ui",
         doctrineStatus: "RESOLVED",
         runtimeMode: "LOCAL_PROCESS",
-        persistence: "NOT_GUARANTEED",
+        persistence: "PARTIAL_PROJECT_LPS_DURABLE",
         readiness: "NOT_READY",
       },
       ephemeralNotice: "Conversation éphémère",
@@ -232,7 +233,7 @@ describe("F1 ProjectAssistantPanel UI", () => {
         doctrineDigest: "digest:f1-ui",
         doctrineStatus: "RESOLVED",
         runtimeMode: "LOCAL_PROCESS",
-        persistence: "NOT_GUARANTEED",
+        persistence: "PARTIAL_PROJECT_LPS_DURABLE",
         readiness: "NOT_READY",
       },
       ephemeralNotice: "Conversation éphémère",
@@ -293,7 +294,7 @@ describe("F1 ProjectAssistantPanel UI", () => {
         doctrineDigest: "digest:f1-ui",
         doctrineStatus: "RESOLVED",
         runtimeMode: "LOCAL_PROCESS",
-        persistence: "NOT_GUARANTEED",
+        persistence: "PARTIAL_PROJECT_LPS_DURABLE",
         readiness: "NOT_READY",
       },
       ephemeralNotice: "éphémère",

```

### `projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
index d87d1b8..733b514 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
@@ -66,7 +66,7 @@ const SUCCESS = {
     hard: "OPEN" as const,
     tA6: "INCOMPLETE" as const,
     iam: "NOT_SELECTED" as const,
-    productPersistence: "NOT_SELECTED" as const,
+    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
     realAgentExecution: "DISABLED" as const,
     delivery: "NOT_AUTHORIZED" as const,
     cutover: "NOT_AUTHORIZED" as const,
@@ -75,14 +75,15 @@ const SUCCESS = {
   },
   disclosures: {
     runtimeMode: "LOCAL_PROCESS" as const,
-    persistence: "NOT_GUARANTEED" as const,
+    persistence: "PARTIAL_PROJECT_LPS_DURABLE" as const,
     agentExecution: "DISABLED" as const,
     iam: "NOT_SELECTED" as const,
-    productPersistence: "NOT_SELECTED" as const,
+    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
     delivery: "NOT_AUTHORIZED" as const,
     cutover: "NOT_AUTHORIZED" as const,
     localDataVolatile: true as const,
     restartMayLoseState: true as const,
+    projectLpsRestartSafe: true as const,
     messages: [] as const,
   },
 };

```

### `projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts
index 0bb8d36..3dc9d7d 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts
@@ -43,7 +43,7 @@ const SUCCESS = {
     hard: "OPEN" as const,
     tA6: "INCOMPLETE" as const,
     iam: "NOT_SELECTED" as const,
-    productPersistence: "NOT_SELECTED" as const,
+    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
     realAgentExecution: "DISABLED" as const,
     delivery: "NOT_AUTHORIZED" as const,
     cutover: "NOT_AUTHORIZED" as const,
@@ -52,14 +52,15 @@ const SUCCESS = {
   },
   disclosures: {
     runtimeMode: "LOCAL_PROCESS" as const,
-    persistence: "NOT_GUARANTEED" as const,
+    persistence: "PARTIAL_PROJECT_LPS_DURABLE" as const,
     agentExecution: "DISABLED" as const,
     iam: "NOT_SELECTED" as const,
-    productPersistence: "NOT_SELECTED" as const,
+    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
     delivery: "NOT_AUTHORIZED" as const,
     cutover: "NOT_AUTHORIZED" as const,
     localDataVolatile: true as const,
     restartMayLoseState: true as const,
+    projectLpsRestartSafe: true as const,
     messages: [] as const,
   },
 };

```

### `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md b/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
index 50d5fdf..a0d95f4 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
@@ -21,8 +21,8 @@ Ce document **n’est pas** :
 - une doctrine produit runtime remplaçant `sfia-v3-framing/30`–`37` ;
 - une autorisation d’adoption runtime v3 ;
 - une baseline méthodologique globale remplaçant SFIA v2.6 ;
-- une décision d’architecture technique (Option 1 reste **recommandation** jusqu’à GO Morris) ;
-- une sélection Product persistence ;
+- une décision d’architecture technique **consommée hors de ce fichier** (G0-A **ADOPTED** — OA Native Backbone + Harvest OPS1 Cursor ; source : décision Morris + `sfia-studio-g0-architecture-persistence-decision-pack.md` / Roadmap) ;
+- une sélection Product persistence **consommée hors de ce fichier** (G0-B **ADOPTED** — `node:sqlite` Product Store OA ; même source) ;
 - une autorisation Cursor REAL / Gate D ;
 - le contenu des Instructions projet ChatGPT (couche 1 = **ACTIVE** — couche externe, hors contenu de ce fichier).


```

### `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 7a12c11..1be7e62 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -30,7 +30,7 @@ Fondations V3-F01…F15 = couverture doctrine progressive (B9).

 | Capacité | État observé |
 | --- | --- |
-| `/studio` Project create/view | WIRED — process-local Memory T-A1 |
+| `/studio` Project create/view | WIRED — **Product SQLite T-A1** (G0-B / M1 candidate) |
 | F1 Nora chat | WIRED — contextual assistant |
 | F2 qualification / proposal / Morris gate | WIRED — process-local + demo authority |
 | F3 T-A4→T-A5→T-A6 | WIRED — **FIXTURE ONLY** (`TestExecutionAdapter`) |
@@ -39,7 +39,8 @@ Fondations V3-F01…F15 = couverture doctrine progressive (B9).
 | D1 SQLite projects | EXISTS — UI `/projects` parallèle |
 | execution-run D2-D | EXISTS — **non** branché F1–F3 |
 | FinOps Postgres | EXISTS — transverse ; ≠ Product persistence |
-| Product persistence | **NOT_SELECTED** |
+| Product persistence | **SELECTED — node:sqlite OA Product Store** (G0-B ADOPTED) |
+| Architecture convergence | **Option 1 ADOPTED** — OA Native Backbone + Harvest OPS1 Cursor (G0-A) |
 | Cursor REAL depuis Nora | **0** |
 | Gate D | **NOT CONSUMED** |

@@ -51,9 +52,10 @@ Fondations V3-F01…F15 = couverture doctrine progressive (B9).
 | SqliteAuthorityAttemptJournal wiring | Présent localement ; pilot-bounded ; ≠ Product persistence |
 | Classification | Observation / prérequis candidat — **promotion = Decision Required** |

-### Recommandation d’audit (≠ décision)
+### Recommandation d’audit (historique — supersédée)

-Option 1 — OA Native Backbone + Harvest OPS1 Cursor = **RECOMMENDATION — NOT DECIDED**.
+Option 1 — OA Native Backbone + Harvest OPS1 Cursor était **RECOMMENDATION — NOT DECIDED**.
+**Décision Morris G0-A :** désormais **ADOPTED**.

 ## B4. Asset disposition matrix (actuelle)

@@ -77,18 +79,18 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | D1 `/projects` | `lib/d1` | **FREEZE** / **RETIRE LATER** (**RECOMMENDATION**) | Parallèle durable |
 | FinOps | `lib/oa/finops` | **KEEP** isolé + **FREEZE** lots non bloquants (**RECOMMENDATION**) | Transverse cost ≠ Product persistence |
 | Auth.js / Critical Ack candidate | dirty only | **COMPLETE** (après GO promotion) | Prérequis REAL Critical |
-| Persistence Memory OA | factories Memory* | **REPLACE** (adapters durables derrière ports) | Decision Required tech |
+| Persistence Memory OA | factories Memory* (T-A2…T-A6) | **REPLACE** progressif (T-A1 = SQLite Product) | Decision Required tech hors T-A1 |

 ## B5. Gap map → boucle cible

 | Gap | Statut | Bloque |
 | --- | --- | --- |
-| Project/LPS durable | MISSING | M1, contextSnapshot |
+| Project/LPS durable | **IMPLEMENTED CANDIDATE** (M1) | M2+ |
 | GuidedSession / historique durable | PARTIAL / MISSING | M2 daily use |
 | CycleInstance réel lié F2 | EXISTS BUT NOT WIRED | M2/M3 |
 | HumanDecision durable/authoritative | PROCESS_LOCAL / demo | M3, Gate D |
 | CKC ↔ cycle binding | PARTIAL (qualify only) | M2 |
-| live contextSnapshot | BLOCKED (no durable project) | F2 final / contracts |
+| live contextSnapshot | PARTIAL — LPS+doctrine digests durables ; agrégat ContextSnapshot **absent** | M2 |
 | ExecutionContract from real HD | FIXTURE path only | M3/M4 |
 | Cursor projection canonique | PARTIAL | M3/M4 |
 | Cursor REAL behind T-A5 | MISSING on Nora | M4 |
@@ -96,7 +98,7 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | Evidence durable | MISSING | M5 |
 | ReviewBundle → LPS writeback | MISSING | M5/M6 |
 | Nora post-exec analysis | PARTIAL (UI cards) | M5 |
-| Restart safety Studio core | MISSING | M1+ |
+| Restart safety Studio core | **PARTIAL** — Project/LPS restart-safe ; autres OA Memory | M2+ |
 | IAM/authz product-grade | PARTIAL (candidate Auth.js) | M4/M8 |

 ## B6. Decisions / gates
@@ -105,14 +107,15 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid

 - Build Doctrine + Convergence Roadmap = **VALIDATED** construction governance by Morris
 - intégrées sur main via PR #334 (`1d09e4159932b3885817911e10a2d29a82ae9ea7`)
+- **G0-A** Architecture = **ADOPTED** — OA Native Backbone + Harvest OPS1 Cursor (Morris · 2026-08-13)
+- **G0-B** Product persistence = **ADOPTED** — `node:sqlite` Product Store isolé derrière ports OA ; exit Postgres sur multi-writer/multi-user démontré (Morris · 2026-08-13)
+- preuve décisions : `convergence/sfia-studio-g0-architecture-persistence-decision-pack.md`

 ### Décisions / gates toujours ouverts (non tranchés ici)

-1. Architecture convergence Option 1 vs 2 — **Decision Required**
-2. Product persistence technology — **NOT_SELECTED**
-3. Promotion Auth.js / Critical Ack candidate — **Decision Required**
-4. Cursor REAL / Gate D — **NOT AUTHORIZED / NOT CONSUMED**
-5. Disposition OPS1 / D1 / execution-run — **Decision Required**
+1. Promotion Auth.js / Critical Ack candidate — **Decision Required**
+2. Cursor REAL / Gate D — **NOT AUTHORIZED / NOT CONSUMED**
+3. Disposition OPS1 / D1 / execution-run — **Decision Required**

 ## B7–B8. Roadmap capability-driven (milestones)

@@ -124,17 +127,17 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | **Capacité v3** | Précondition : un seul backbone de construction (évite multi-moteurs) |
 | **Outcome** | Morris tranche Option architecture + Product persistence (compact) |
 | **Fondations** | transversal (débloque F02/F05/F12…) |
-| **État actuel** | Audit complet ; Option 1 **recommandée** ; persistence NOT_SELECTED |
-| **Actifs** | audit handoff ; Build Doctrine |
-| **Gaps** | décisions structurantes ouvertes |
-| **Travaux** | pack décision compact — **pas** long cycle architecture gratuit |
-| **Gates Morris** | OUI — architecture + persistence |
-| **Hors périmètre** | implémentation ; Cursor REAL |
-| **Preuve de sortie** | décisions écrites consommables par Delivery |
-| **Dette tolérée** | aucune implementation speculative |
+| **État actuel** | **G0-A/B ADOPTED** (Morris) ; Delivery M1 en cours / candidate |
+| **Actifs** | decision pack G0 ; Build Doctrine ; Roadmap |
+| **Gaps** | — (décisions structurantes consommées) |
+| **Travaux** | décisions écrites — **consommées** |
+| **Gates Morris** | **CONSUMED** — architecture + persistence |
+| **Hors périmètre** | Cursor REAL (reste hors) |
+| **Preuve de sortie** | décision Morris + `sfia-studio-g0-architecture-persistence-decision-pack.md` |
+| **Dette tolérée** | aucune implementation speculative au stade G0 |
 | **Exit dette** | N/A |
 | **Next** | M1 |
-| **Statut** | **READY FOR DECISION** |
+| **Statut** | **DECIDED / CONSUMED** |

 ### Milestone 1 — Socle projet v3 fiable

@@ -143,18 +146,18 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | **ID** | M1 |
 | **Capacité v3** | V3-F02 LPS (+ Project) durable et exploitable |
 | **Outcome** | Morris crée/reprend un Project et retrouve LPS/contexte critique après redémarrage |
-| **État actuel** | Memory process-local `/studio` |
-| **Actifs** | T-A1 ports ; vertical-slice UI ; doctrine FS |
-| **Classification** | COMPLETE T-A1 ; ADAPT composition |
-| **Gaps** | L1 durable repo ; L4 contextSnapshot ; L10 composition switch |
-| **Dépendances** | G0 persistence |
-| **Gates** | Delivery après G0 |
-| **Hors périmètre** | Cursor REAL ; multi-region |
+| **État actuel** | Product SQLite OA (`node:sqlite`) derrière ports T-A1 ; composition `/studio` branchée |
+| **Actifs** | T-A1 ports ; SQLite Product Store ; vertical-slice UI ; doctrine FS |
+| **Classification** | COMPLETE T-A1 stores ; ADAPT composition |
+| **Gaps** | L4 ContextSnapshot agrégat dédié **absent** du repo — contexte critique M1 = LPS fields + doctrinePackageRef digest (qualifié) |
+| **Dépendances** | G0 persistence — **SATISFIED** (G0-B ADOPTED) |
+| **Gates** | Delivery **AUTHORIZED** by Morris (post G0) ; validation Morris post-preuve requise |
+| **Hors périmètre** | Cursor REAL ; multi-region ; PostgreSQL Product |
 | **Preuve e2e** | create → restart process → get same project/LPS/digest |
-| **Dette** | coexistence temporaire D1 UI |
-| **Exit dette** | disposition D1 après M1 stable |
+| **Dette** | coexistence temporaire D1 UI ; autres OA Memory ; exit SQLite→Postgres |
+| **Exit dette** | disposition D1 après M1 stable ; Postgres si multi-writer démontré |
 | **Next** | M2 |
-| **Statut** | **NOT STARTED** (prérequis G0) |
+| **Statut** | **IMPLEMENTED CANDIDATE — READY FOR MORRIS VALIDATION** |

 ### Milestone 2 — Pilotage cognitif v3 utilisable

@@ -268,8 +271,7 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid

 ```text
 CRITICAL PATH:
-  G0 (archi+persistence)
-  → M1 durable Project/LPS
+  M1 durable Project/LPS
   → M2 Nora contextuel durable
   → M3 HD durable + ExecutionContract exact
   → M4 Cursor REAL borné (T-A5+harvest+Ack+Gate D)
@@ -278,7 +280,8 @@ CRITICAL PATH:

 TRANSVERSE LATER: FinOps capture optionnelle · multi-user · observability depth · F08/F10 depth
 FROZEN (RECOMMENDATION until GO): execution-run feature growth · OPS1 UI expansion · FinOps lots non bloquants · D1 feature growth
-DECISION REQUIRED: Option 1/2 · persistence tech · OPS1/D1/execution-run disposition · Ack promotion
+DECISION REQUIRED: OPS1/D1/execution-run disposition · Ack promotion
+G0 CONSUMED: Option 1 ADOPTED · Product persistence node:sqlite ADOPTED
 ```

 ## B11. Freeze / stop-doing (**RECOMMENDATION**)

```

---

## 10. Verdict

**G0 DECISIONS RECORDED — M1 PROJECT/LPS SQLITE DURABILITY IMPLEMENTED — RESTART-SAFE EVIDENCE PASS — M1 IMPLEMENTED CANDIDATE — READY FOR MORRIS VALIDATION / COMMIT GATE**

review pack verdict = COMPLETE
created files full content = YES
modified sections / useful diff = YES
synthesis only = NO

Capacité suivante (NON AUTORISÉE ici): M2
Actions interdites sans nouveau GO Morris: git add/commit/push/PR projet · merge · M2 · Cursor REAL · Gate D · Auth/Ack · Postgres Product · cleanup D1/OPS1/execution-run · force push

---
Generated: 2026-08-13 09:09:27 CEST
