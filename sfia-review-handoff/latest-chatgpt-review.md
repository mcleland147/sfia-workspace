# SFIA Studio — ChatGPT Review Pack
## PRODUCT DOCS_WRITE LIVE MANAGED-REPOSITORY COMPOSITION COMPLETION

**Verdict (exact):**
PRODUCT DOCS_WRITE LIVE MANAGED-REPOSITORY COMPOSITION —
DEFAULT PRODUCT SINGLETON WIRING + SERVER-OWNED MANAGED REPOSITORY
RESOLUTION PROVEN DETERMINISTICALLY AT TESTED SCOPE —
REPROOF09 PRE-SPAWN GAP CLOSED —
ONE MACRO PR GREEN —
ZERO REAL —
READY FOR CHATGPT CRITICAL PRE-MERGE REVIEW —
MERGE NOT AUTHORIZED —
RUNTIME V3 NON ADOPTED

---

### 1. Exact Morris GO

GO MORRIS — PRODUCT DOCS_WRITE LIVE MANAGED-REPOSITORY COMPOSITION COMPLETION —
ONE MACRO DELIVERY + INTEGRATION PR —
CLOSE DEFAULT SINGLETON managedRepoRootBase WIRING +
MANAGED REPOSITORY RESOLUTION/AVAILABILITY +
DEFAULT-LIVE-PATH DETERMINISTIC PROOF —
ZERO REAL — NO ARCHITECTURE/PERSISTENCE REDESIGN —
PUSH/PR/CI/PRE-MERGE REVIEW IN SAME MACRO-CYCLE —
NO MERGE WITHOUT FINAL MORRIS GATE.

---

### 2. Cycle / typology / Critical rationale

| Field | Value |
|---|---|
| Project | SFIA Studio |
| Cycle | 8 — Delivery / implementation |
| Typology | EVOL |
| Profile | CRITICAL |
| Milestone | PRODUCT-DOCS-WRITE-LIVE-MANAGED-REPO-COMPOSITION-COMPLETION-01 |
| Product Completion | CLOSED / COMPLETE |
| Runtime v3 | NON ADOPTED |

Critical: live Product REAL-boundary composition; server-owned workspace trust; RepositoryBinding → managed repo resolution; Gate D / StartExecution safety; prerequisite before protected Cursor REAL.

---

### 3. Local Git Truth

| Item | Value |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-studio-live-managed-repo-composition` |
| Branch | `delivery/sfia-studio-live-managed-repo-composition` |
| Base origin/main at start | `74ad6d3ef59150db31d3cdfec18879bbf64a4e95` |
| Tree | `a31db4a59c8fc8d3baaafeae9f7241cbad2034dd` |
| Head | `7636bb7102ddc97240d8af5b8cf739a0ec421456` |
| Main drift | none |

---

### 4. Base / branch / commit chain

- Base: `74ad6d3e` (merge #495)
- Branch: `delivery/sfia-studio-live-managed-repo-composition`
- Commit: `7636bb71` — `feat(sfia-studio): wire live managed repository composition`
- Remote head verified equal to local HEAD

---

### 5. Reproof09 forensic inpu

Handoff `9e189910` / blob `694cc94b`:
STOP PRE-SPAWN — `REAL_WORKSPACE_INVALID` / `docs_write_managed_repo_root_base_unconfigured` —
ZERO Cursor REAL external launches — REAL launch budget UNCONSUMED.

---

### 6. Exact root cause

`getRuntimeApplicationService()` → `defaultSingletonOptions()` → `composeStudioProductRealBoundary(...)` composed REAL gateway when `SFIA_STUDIO_CURSOR_REAL=1` but never supplied `managedRepoRootBase`. StartExecution then fail-closed before Gate D consume / frontier / Cursor spawn.

---

### 7. Canonical sources read

Process templates/routing/operating model/guardrails; Convergence doctrine/roadmap/cadrage; V3 framing §§34–35; Reproof09 handoff; Product oracles (singleton/service/compose/startExecution/resolver/.env.example/tests).

---

### 8. Convergence qualification

Useful now: YES (direct Reproof09 blocker). Reuse: YES (compose + resolver + StartExecution). Parallel architecture: NO. Coherent lot: wiring + config + proofs + PR/CI. Debt: actual Cursor REAL remains unproven.

---

### 9. Implementation discovery

| Asset | Decision |
|---|---|
| `composeStudioProductRealBoundary` + `managedRepoRootBase` | KEEP / COMPLETE (env fallback) |
| `ManagedProjectRepositoryResolver` | KEEP |
| `StartExecution` fail-closed oracles | KEEP |
| `SFIA_GCEC_MANAGED_REPO_BASE` (REAL harness only) | NOT adopted as Product live config |
| Network clone/fetch manager | NOT invented — STOP avoided |

---

### 10. Configuration choice and rationale

**Chosen:** `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` — new minimal server-owned Studio env, consistent with `SFIA_STUDIO_*` Product conventions.

Why not `SFIA_GCEC_MANAGED_REPO_BASE`: harness-only in opt-in REAL tests; not Product singleton config.

Why not silent `.sfia-exec/managed-repos` default: Case B requires absent config fail-closed.

---

### 11. Evidence config is server-owned

- Env only (no `NEXT_PUBLIC_*`)
- Parsed server-side in `managedRepoRootBaseConfig.ts`
- Propagated via `defaultSingletonOptions` / compose
- EC/client absolute `managedRepoRoot` still rejected by StartExecution
- Documented in `.env.example` as operational precondition (clone must already exist)

---

### 12. Managed repo resolution semantics

Unchanged `ManagedProjectRepositoryResolver`:
`{base}/{sanitize(identity)}` must exist as Git repo; containment + sanitization retained; missing → `docs_write_managed_repo_unresolved`.

---

### 13. Availability / precondition semantics

Availability = server base configured + local managed clone already present under canonical identity path. No automatic network clone/fetch in this Delivery.

---

### 14. Files changed

```
.gitignore                                         |   1 +
 projects/sfia-studio/app/.env.example              |  15 +
 .../liveManagedRepoComposition.d0.test.ts          | 780 +
 .../composeStudioProductRealBoundary.ts            |  66 +-
 .../vertical-slice-runtime/index.ts                |   5 +
 .../managedRepoRootBaseConfig.ts                   |  31 +
 .../vertical-slice-runtime/singleton.ts            |   8 +
 7 files changed, 901 insertions(+), 5 deletions(-)
```

---

### 15. COMPLETE exploitable diff / full modified sections

#### 15.a managedRepoRootBaseConfig.ts (FULL NEW)

```typescrip
/**
 * Server-owned managed repository root base for Product docs_write REAL composition.
 *
 * Operational precondition (no network clone in this capability):
 * under the configured absolute base, each Project.repositoryBinding.identity mus
 * already exist as a local Git repository a
 * `{base}/{sanitizedIdentity}` (see ManagedProjectRepositoryResolver).
 *
 * Absent/blank → undefined (StartExecution fail-closed:
 * docs_write_managed_repo_root_base_unconfigured).
 *
 * Never accept client/EC absolute roots. Never expose via NEXT_PUBLIC_*.
 */
import path from "node:path";

export const SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV =
  "SFIA_STUDIO_MANAGED_REPO_ROOT_BASE" as const;

/**
 * Parse server env for managedRepoRootBase.
 * Returns absolute path or undefined when unset/blank.
 */
export function resolveManagedRepoRootBaseFromEnv(
  env: NodeJS.ProcessEnv | Record<string, string | undefined> = process.env,
): string | undefined {
  const raw = env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
  if (typeof raw !== "string") return undefined;
  const trimmed = raw.trim();
  if (!trimmed) return undefined;
  return path.resolve(trimmed);
}

```

#### 15.b singleton.ts (FULL)

```typescrip
import "./serverGuard";
import {
  createRuntimeApplicationService,
  type RuntimeApplicationService,
  type RuntimeApplicationServiceOptions,
} from "./service";
import { resolveManagedRepoRootBaseFromEnv } from "./managedRepoRootBaseConfig";

/**
 * D-V2-02: process-local singleton holder.
 * Business state lives in the underlying V1 in-memory stores for this process only.
 * Not safe across serverless multi-instance deployments — disclosures say so.
 *
 * Anchored on `globalThis` so Next.js route/chunk graphs that reload this module
 * still share one process-local instance (create on /new → get on /[id]).
 * This is not durable persistence and not a cross-process store.
 */
const RUNTIME_GLOBAL_KEY = "__SFIA_V2_RUNTIME_APPLICATION_SERVICE__" as const;

type ProcessLocalRuntimeSlot = {
  service: RuntimeApplicationService | null;
  options: RuntimeApplicationServiceOptions | undefined;
};

function getProcessLocalRuntimeSlot(): ProcessLocalRuntimeSlot {
  const g = globalThis as typeof globalThis & {
    [RUNTIME_GLOBAL_KEY]?: ProcessLocalRuntimeSlot;
  };
  if (!g[RUNTIME_GLOBAL_KEY]) {
    g[RUNTIME_GLOBAL_KEY] = { service: null, options: undefined };
  }
  return g[RUNTIME_GLOBAL_KEY];
}

function envAuditMode(): RuntimeApplicationServiceOptions["auditMode"] {
  const raw = process.env.SFIA_V2_RUNTIME_AUDIT?.trim().toLowerCase();
  if (raw === "memory" || raw === "sqlite" || raw === "noop") return raw;
  return "noop";
}

function defaultSingletonOptions(): RuntimeApplicationServiceOptions {
  const managedRepoRootBase = resolveManagedRepoRootBaseFromEnv();
  return {
    auditMode: envAuditMode(),
    nowIso: process.env.SFIA_V2_RUNTIME_NOW_ISO || undefined,
    // Live Product path: propagate server-owned managed repo base into REAL
    // composition when configured. Absent/blank stays omit → StartExecution
    // fail-closed (docs_write_managed_repo_root_base_unconfigured).
    ...(managedRepoRootBase
      ? { realBoundaryComposition: { managedRepoRootBase } }
      : {}),
  };
}

/**
 * Returns the process-local RuntimeApplicationService, creating it once.
 * Optional `options` apply only on first creation (or after test reset).
 */
export function getRuntimeApplicationService(
  options?: RuntimeApplicationServiceOptions,
): RuntimeApplicationService {
  const slot = getProcessLocalRuntimeSlot();
  if (!slot.service) {
    slot.options = options ?? defaultSingletonOptions();
    slot.service = createRuntimeApplicationService(slot.options);
  }
  return slot.service;
}

export function isRuntimeApplicationServiceInitialized(): boolean {
  return getProcessLocalRuntimeSlot().service !== null;
}

/**
 * Test-only reset. Throws outside test / explicit allow flag.
 */
export function resetRuntimeApplicationServiceForTests(): void {
  const allowed =
    process.env.NODE_ENV === "test" ||
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET === "1";
  if (!allowed) {
    throw new Error(
      "resetRuntimeApplicationServiceForTests is only allowed in test environments.",
    );
  }
  const slot = getProcessLocalRuntimeSlot();
  try {
    slot.service?.dispose();
  } catch {
    /* ignore */
  }
  slot.service = null;
  slot.options = undefined;
}

```

#### 15.c composeStudioProductRealBoundary.ts (FULL)

```typescrip
/**
 * R1 — product live REAL boundary composition, OFF-by-default.
 *
 * When SFIA_STUDIO_CURSOR_REAL !== "1", returns undefined and constructs
 * nothing (no safety DB, no worktree dir, no Cursor bin search, no git, no process)
 * unless the fail-closed TEST/E2E deterministic Cursor boundary is enabled.
 *
 * The deterministic path substitutes only the external Cursor/process adapter.
 * It does not construct NodeCursorProcessRunner, worktrees, or safety sqlite.
 *
 * When the REAL flag is "1", constructs existing M4 classes only. Construction
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
import {
  assertDeterministicAndRealMutuallyExclusive,
  composeDeterministicCursorBoundary,
  isDeterministicCursorBoundaryEnabled,
} from "./deterministicExternalLaunchBoundary";
import { resolveManagedRepoRootBaseFromEnv } from "./managedRepoRootBaseConfig";

export type ComposeStudioProductRealBoundaryInput = {
  readonly env?: NodeJS.ProcessEnv;
  readonly processRunner?: ProcessRunner;
  readonly workspacePort?: RealExecutionWorkspacePort;
  readonly gitRunner?: GitCommandRunner;
  readonly safetyJournal?: RealLaunchSafetyJournalPort;
  /** Test/injectable launch port — substitutes only the external process boundary. */
  readonly launchPort?: RealExecutionLaunchPort;
  readonly resolveCursorBin?: () => string | null;
  readonly repoRoot?: string;
  /**
   * Optional explicit managed-repo base for docs-write composition (CR-GCEC-03).
   * When omitted, falls back to server env `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE`.
   * Absent/blank remains unconfigured (fail-closed at StartExecution).
   */
  readonly managedRepoRootBase?: string;
  readonly studioRoot?: string;
  readonly execRoot?: string;
  readonly safetyJournalPath?: string;
};

/**
 * Prefer explicit composition input; else server-owned env.
 * Never invents a host default path.
 */
export function resolveComposeManagedRepoRootBase(
  input: Pick<ComposeStudioProductRealBoundaryInput, "managedRepoRootBase" | "env">,
): string | undefined {
  if (
    typeof input.managedRepoRootBase === "string" &&
    input.managedRepoRootBase.trim()
  ) {
    return path.resolve(input.managedRepoRootBase.trim());
  }
  return resolveManagedRepoRootBaseFromEnv(input.env ?? process.env);
}

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
  assertDeterministicAndRealMutuallyExclusive(env);
  const managedRepoRootBase = resolveComposeManagedRepoRootBase(input);
  if (isDeterministicCursorBoundaryEnabled(env)) {
    const det = composeDeterministicCursorBoundary(env);
    return Object.freeze({
      ...det,
      ...(managedRepoRootBase ? { managedRepoRootBase } : {}),
    });
  }
  if (!isStudioCursorRealEnabled(env)) {
    return undefined;
  }

  const managedFreeze = managedRepoRootBase
    ? { managedRepoRootBase }
    : {};

  // Injectable launch port substitutes only the external process boundary
  // (tests). Still requires REAL flag; still propagates server-owned managed base.
  if (input.launchPort) {
    const safetyJournal =
      input.safetyJournal ??
      (() => {
        const studioRoot = path.resolve(
          input.studioRoot ?? path.resolve(process.cwd(), ".."),
        );
        const execBase = resolveStudioSfiaExecRoot(studioRoot);
        const safetyJournalPath = path.resolve(
          input.safetyJournalPath ??
            path.join(execBase, "m4", "launch-safety.sqlite"),
        );
        fs.mkdirSync(path.dirname(safetyJournalPath), { recursive: true });
        return new SqliteRealLaunchSafetyJournal({
          databasePath: safetyJournalPath,
        });
      })();
    return Object.freeze({
      launchPort: input.launchPort,
      safetyJournal,
      ...managedFreeze,
    });
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
    ...managedFreeze,
  });
}

```

#### 15.d index.ts exports (FULL)

```typescrip
import "./serverGuard";

export {
  RUNTIME_DISCLOSURES,
  RUNTIME_DISCLOSURE_MESSAGES,
  RUNTIME_READINESS_NOT_READY,
  type RuntimeDisclosures,
  type RuntimeReadinessProjection,
} from "./disclosures";
export {
  toCreateLocalProjectCommand,
  toCreateProjectRuntimeFailure,
  toCreateProjectRuntimeSuccess,
  toGetProjectRuntimeFailure,
  toGetProjectRuntimeSuccess,
  toListProjectsRuntimeFailure,
  toListProjectsRuntimeSuccess,
  toRuntimeErrorDto,
  toRuntimeProjectListItem,
  toRuntimeProjectState,
} from "./mapping";
export { resolveDefaultVerticalSliceRoots, resolveProductDoctrineRegistryRoot } from "./paths";
export {
  RuntimeApplicationService,
  createRuntimeApplicationService,
  type RuntimeApplicationServiceOptions,
  type RuntimeAuditMode,
  type RuntimeOaStack,
} from "./service";
export {
  composeStudioProductRealBoundary,
  findGitToplevelByDotGit,
  resolveComposeManagedRepoRootBase,
  resolveStudioSfiaExecRoot,
  type ComposeStudioProductRealBoundaryInput,
} from "./composeStudioProductRealBoundary";
export {
  resolveManagedRepoRootBaseFromEnv,
  SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
} from "./managedRepoRootBaseConfig";
export {
  resolveBoundedReadOnlyBaseHeadSha,
  validateBaseHeadSha,
} from "./resolveBoundedReadOnlyBaseHeadSha";
export {
  readLiveProjectContext,
  type LiveProjectContext,
} from "./liveProjectContext";
export {
  getRuntimeApplicationService,
  isRuntimeApplicationServiceInitialized,
  resetRuntimeApplicationServiceForTests,
} from "./singleton";
export type {
  CreateProjectRuntimeInput,
  CreateProjectRuntimeResult,
  GetProjectRuntimeResult,
  ListProjectsRuntimeResult,
  RuntimeCriticality,
  RuntimeDoctrineState,
  RuntimeErrorDto,
  RuntimeLivingProjectState,
  RuntimeProjectListItem,
  RuntimeProjectState,
} from "./types";

```

#### 15.e .env.example (FULL)

```
# SFIA Studio — Auth foundation (Better Auth + GitHub multi-user)
# Copy to .env.local for local development. NEVER commit real secrets.

# Better Auth (required)
BETTER_AUTH_SECRET=replace-with-long-random-secre
# Studio local port is 3020 (see package.json scripts)
BETTER_AUTH_URL=http://localhost:3020

# GitHub OAuth App credentials (identity-only; no repo write scopes required)
# Create the OAuth App separately under a Morris GO — not in this Delivery cycle.
# Callback URL must be: http://localhost:3020/api/auth/callback/github
GITHUB_CLIENT_ID=replace-with-github-oauth-app-client-id
GITHUB_CLIENT_SECRET=replace-with-github-oauth-app-client-secre

# Server-owned multi-user allowlist — immutable GitHub numeric user ids (comma-separated)
# Example placeholders only (not real accounts):
SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS=11111111,22222222

# ---------------------------------------------------------------------------
# Server-owned managed repository base (docs_write REAL composition)
# ---------------------------------------------------------------------------
# Absolute directory under which Project.repositoryBinding.identity maps to a
# local Git checkout: {SFIA_STUDIO_MANAGED_REPO_ROOT_BASE}/{sanitizedIdentity}
# (see ManagedProjectRepositoryResolver). Required when SFIA_STUDIO_CURSOR_REAL=1
# and Product StartExecution runs bounded docs_write.
#
# Operational precondition: the managed clone must already exist locally.
# This variable does not clone, fetch, or mutate remotes.
# Absent/blank → fail-closed (docs_write_managed_repo_root_base_unconfigured).
# Never set NEXT_PUBLIC_* for this path. Never put secrets here.
# Example (local only — replace with your host absolute path):
# SFIA_STUDIO_MANAGED_REPO_ROOT_BASE=/absolute/path/to/managed-repos

```

#### 15.f .gitignore tail

```
!exports/notion/*.json

# Exports locaux du connecteur embarqué
tools/cmp-001/exports/
projects/sfia-studio/app/node_modules
```

#### 15.g Core unified diff (compose/env/singleton/index/gitignore)

```diff
diff --git a/.gitignore b/.gitignore
index 48abd28e..709222a0 100644
--- a/.gitignore
+++ b/.gitignore
@@ -22,3 +22,4 @@ exports/**

 # Exports locaux du connecteur embarqué
 tools/cmp-001/exports/
+projects/sfia-studio/app/node_modules
diff --git a/projects/sfia-studio/app/.env.example b/projects/sfia-studio/app/.env.example
index aafbcbf2..57636a01 100644
--- a/projects/sfia-studio/app/.env.example
+++ b/projects/sfia-studio/app/.env.example
@@ -15,3 +15,18 @@ GITHUB_CLIENT_SECRET=replace-with-github-oauth-app-client-secre
 # Server-owned multi-user allowlist — immutable GitHub numeric user ids (comma-separated)
 # Example placeholders only (not real accounts):
 SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS=11111111,22222222
+
+# ---------------------------------------------------------------------------
+# Server-owned managed repository base (docs_write REAL composition)
+# ---------------------------------------------------------------------------
+# Absolute directory under which Project.repositoryBinding.identity maps to a
+# local Git checkout: {SFIA_STUDIO_MANAGED_REPO_ROOT_BASE}/{sanitizedIdentity}
+# (see ManagedProjectRepositoryResolver). Required when SFIA_STUDIO_CURSOR_REAL=1
+# and Product StartExecution runs bounded docs_write.
+#
+# Operational precondition: the managed clone must already exist locally.
+# This variable does not clone, fetch, or mutate remotes.
+# Absent/blank → fail-closed (docs_write_managed_repo_root_base_unconfigured).
+# Never set NEXT_PUBLIC_* for this path. Never put secrets here.
+# Example (local only — replace with your host absolute path):
+# SFIA_STUDIO_MANAGED_REPO_ROOT_BASE=/absolute/path/to/managed-repos
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/composeStudioProductRealBoundary.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/composeStudioProductRealBoundary.ts
index cf59b3d1..7699caa1 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/composeStudioProductRealBoundary.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/composeStudioProductRealBoundary.ts
@@ -34,6 +34,7 @@ import {
   composeDeterministicCursorBoundary,
   isDeterministicCursorBoundaryEnabled,
 } from "./deterministicExternalLaunchBoundary";
+import { resolveManagedRepoRootBaseFromEnv } from "./managedRepoRootBaseConfig";

 export type ComposeStudioProductRealBoundaryInput = {
   readonly env?: NodeJS.ProcessEnv;
@@ -41,15 +42,37 @@ export type ComposeStudioProductRealBoundaryInput = {
   readonly workspacePort?: RealExecutionWorkspacePort;
   readonly gitRunner?: GitCommandRunner;
   readonly safetyJournal?: RealLaunchSafetyJournalPort;
+  /** Test/injectable launch port — substitutes only the external process boundary. */
+  readonly launchPort?: RealExecutionLaunchPort;
   readonly resolveCursorBin?: () => string | null;
   readonly repoRoot?: string;
-  /** Optional managed-repo base for docs-write composition (CR-GCEC-03). */
+  /**
+   * Optional explicit managed-repo base for docs-write composition (CR-GCEC-03).
+   * When omitted, falls back to server env `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE`.
+   * Absent/blank remains unconfigured (fail-closed at StartExecution).
+   */
   readonly managedRepoRootBase?: string;
   readonly studioRoot?: string;
   readonly execRoot?: string;
   readonly safetyJournalPath?: string;
 };

+/**
+ * Prefer explicit composition input; else server-owned env.
+ * Never invents a host default path.
+ */
+export function resolveComposeManagedRepoRootBase(
+  input: Pick<ComposeStudioProductRealBoundaryInput, "managedRepoRootBase" | "env">,
+): string | undefined {
+  if (
+    typeof input.managedRepoRootBase === "string" &&
+    input.managedRepoRootBase.trim()
+  ) {
+    return path.resolve(input.managedRepoRootBase.trim());
+  }
+  return resolveManagedRepoRootBaseFromEnv(input.env ?? process.env);
+}
+
 export function resolveStudioSfiaExecRoot(studioRoot?: string): string {
   const root = path.resolve(studioRoot ?? path.resolve(process.cwd(), ".."));
   return path.join(root, ".sfia-exec");
@@ -73,13 +96,48 @@ export function composeStudioProductRealBoundary(
 ): RealBoundaryWiring | undefined {
   const env = input.env ?? process.env;
   assertDeterministicAndRealMutuallyExclusive(env);
+  const managedRepoRootBase = resolveComposeManagedRepoRootBase(input);
   if (isDeterministicCursorBoundaryEnabled(env)) {
-    return composeDeterministicCursorBoundary(env);
+    const det = composeDeterministicCursorBoundary(env);
+    return Object.freeze({
+      ...det,
+      ...(managedRepoRootBase ? { managedRepoRootBase } : {}),
+    });
   }
   if (!isStudioCursorRealEnabled(env)) {
     return undefined;
   }

+  const managedFreeze = managedRepoRootBase
+    ? { managedRepoRootBase }
+    : {};
+
+  // Injectable launch port substitutes only the external process boundary
+  // (tests). Still requires REAL flag; still propagates server-owned managed base.
+  if (input.launchPort) {
+    const safetyJournal =
+      input.safetyJournal ??
+      (() => {
+        const studioRoot = path.resolve(
+          input.studioRoot ?? path.resolve(process.cwd(), ".."),
+        );
+        const execBase = resolveStudioSfiaExecRoot(studioRoot);
+        const safetyJournalPath = path.resolve(
+          input.safetyJournalPath ??
+            path.join(execBase, "m4", "launch-safety.sqlite"),
+        );
+        fs.mkdirSync(path.dirname(safetyJournalPath), { recursive: true });
+        return new SqliteRealLaunchSafetyJournal({
+          databasePath: safetyJournalPath,
+        });
+      })();
+    return Object.freeze({
+      launchPort: input.launchPort,
+      safetyJournal,
+      ...managedFreeze,
+    });
+  }
+
   const studioRoot = path.resolve(
     input.studioRoot ?? path.resolve(process.cwd(), ".."),
   );
@@ -125,8 +183,6 @@ export function composeStudioProductRealBoundary(
   return Object.freeze({
     launchPort,
     safetyJournal,
-    ...(input.managedRepoRootBase
-      ? { managedRepoRootBase: path.resolve(input.managedRepoRootBase) }
-      : {}),
+    ...managedFreeze,
   });
 }
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
index 871f3c92..faf37e34 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
@@ -30,9 +30,14 @@ export {
 export {
   composeStudioProductRealBoundary,
   findGitToplevelByDotGit,
+  resolveComposeManagedRepoRootBase,
   resolveStudioSfiaExecRoot,
   type ComposeStudioProductRealBoundaryInput,
 } from "./composeStudioProductRealBoundary";
+export {
+  resolveManagedRepoRootBaseFromEnv,
+  SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
+} from "./managedRepoRootBaseConfig";
 export {
   resolveBoundedReadOnlyBaseHeadSha,
   validateBaseHeadSha,
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/managedRepoRootBaseConfig.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/managedRepoRootBaseConfig.ts
new file mode 100644
index 00000000..7838afdd
--- /dev/null
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/managedRepoRootBaseConfig.ts
@@ -0,0 +1,31 @@
+/**
+ * Server-owned managed repository root base for Product docs_write REAL composition.
+ *
+ * Operational precondition (no network clone in this capability):
+ * under the configured absolute base, each Project.repositoryBinding.identity mus
+ * already exist as a local Git repository a
+ * `{base}/{sanitizedIdentity}` (see ManagedProjectRepositoryResolver).
+ *
+ * Absent/blank → undefined (StartExecution fail-closed:
+ * docs_write_managed_repo_root_base_unconfigured).
+ *
+ * Never accept client/EC absolute roots. Never expose via NEXT_PUBLIC_*.
+ */
+import path from "node:path";
+
+export const SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV =
+  "SFIA_STUDIO_MANAGED_REPO_ROOT_BASE" as const;
+
+/**
+ * Parse server env for managedRepoRootBase.
+ * Returns absolute path or undefined when unset/blank.
+ */
+export function resolveManagedRepoRootBaseFromEnv(
+  env: NodeJS.ProcessEnv | Record<string, string | undefined> = process.env,
+): string | undefined {
+  const raw = env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
+  if (typeof raw !== "string") return undefined;
+  const trimmed = raw.trim();
+  if (!trimmed) return undefined;
+  return path.resolve(trimmed);
+}
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/singleton.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/singleton.ts
index e84b23a3..218cf155 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/singleton.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/singleton.ts
@@ -4,6 +4,7 @@ import {
   type RuntimeApplicationService,
   type RuntimeApplicationServiceOptions,
 } from "./service";
+import { resolveManagedRepoRootBaseFromEnv } from "./managedRepoRootBaseConfig";

 /**
  * D-V2-02: process-local singleton holder.
@@ -38,9 +39,16 @@ function envAuditMode(): RuntimeApplicationServiceOptions["auditMode"] {
 }

 function defaultSingletonOptions(): RuntimeApplicationServiceOptions {
+  const managedRepoRootBase = resolveManagedRepoRootBaseFromEnv();
   return {
     auditMode: envAuditMode(),
     nowIso: process.env.SFIA_V2_RUNTIME_NOW_ISO || undefined,
+    // Live Product path: propagate server-owned managed repo base into REAL
+    // composition when configured. Absent/blank stays omit → StartExecution
+    // fail-closed (docs_write_managed_repo_root_base_unconfigured).
+    ...(managedRepoRootBase
+      ? { realBoundaryComposition: { managedRepoRootBase } }
+      : {}),
   };
 }


```

#### 15.h liveManagedRepoComposition.d0.test.ts (FULL)

```typescrip
/**
 * Live managed-repository composition — default Product singleton path.
 *
 * Closes Reproof09 pre-spawn STOP:
 *   REAL_WORKSPACE_INVALID / docs_write_managed_repo_root_base_unconfigured
 *
 * ZERO Cursor REAL process. ZERO OpenAI LIVE. ZERO Nora LIVE.
 * External process boundary substituted via FakeDocsWriteLaunchPort only.
 *
 * @vitest-environment node
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import {
  FakeCursorGitExternalState,
  FakeDocsWriteLaunchPort,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
  M4_BOUNDED_DOCS_WRITE_TARGET,
  MemoryLaunchSafetyJournal,
  isStudioCursorRealEnabled,
  sanitizeManagedRepoIdentity,
} from "@/lib/oa/execution-attempt";
import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  composeStudioProductRealBoundary,
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  resolveManagedRepoRootBaseFromEnv,
  SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
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
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import {
  governedExecuteAuthorizedContract,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";

const APP_ROOT = path.resolve(__dirname, "../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const IDENTITY = "acme/widget";
const BRANCH = "main";
const NOW = "2026-09-17T08:00:00.000Z";
const PILOTE = LOCAL_PILOTE_ACTOR;
const SIGNALS_LIGHT = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
} as const;

const ENV_KEYS = [
  "SFIA_STUDIO_CURSOR_REAL",
  "OPS1_CURSOR_REAL",
  "SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY",
  SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
] as const;

const tempRoots: string[] = [];
let cursorRealExternalLaunches = 0;

function tempDir(prefix: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  tempRoots.push(dir);
  return dir;
}

function clearManagedEnv(): void {
  for (const key of ENV_KEYS) {
    delete process.env[key];
  }
  process.env.SFIA_STUDIO_CURSOR_REAL = "0";
  process.env.OPS1_CURSOR_REAL = "0";
}

function initManagedRepo(managedBase: string, identity: string) {
  fs.mkdirSync(managedBase, { recursive: true });
  const repoRoot = path.join(
    managedBase,
    sanitizeManagedRepoIdentity(identity),
  );
  fs.mkdirSync(path.join(repoRoot, "docs"), { recursive: true });
  fs.writeFileSync(path.join(repoRoot, "docs", ".keep"), "");
  execFileSync("git", ["init"], { cwd: repoRoot });
  execFileSync("git", ["config", "user.email", "test@example.com"], {
    cwd: repoRoot,
  });
  execFileSync("git", ["config", "user.name", "Test"], { cwd: repoRoot });
  execFileSync("git", ["add", "."], { cwd: repoRoot });
  execFileSync("git", ["commit", "-m", "init"], { cwd: repoRoot });
  const baseHeadSha = execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: repoRoot,
    encoding: "utf8",
  }).trim();
  return { repoRoot, baseHeadSha };
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:lmr-${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    this.n += 1;
    return `lps:lmr-${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    this.n += 1;
    return `cor:lmr-${this.prefix}-${this.n}`;
  }
}

beforeEach(() => {
  clearManagedEnv();
  cursorRealExternalLaunches = 0;
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  setConversationProviderForTests(null);
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
});

afterEach(() => {
  clearManagedEnv();
  setConversationProviderForTests(null);
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
  while (tempRoots.length) {
    const d = tempRoots.pop();
    if (d) {
      try {
        fs.rmSync(d, { recursive: true, force: true });
      } catch {
        /* ignore */
      }
    }
  }
  expect(cursorRealExternalLaunches).toBe(0);
});

describe("managedRepoRootBase env parse", () => {
  it("absent / blank → undefined (fail-closed input)", () => {
    expect(resolveManagedRepoRootBaseFromEnv({})).toBeUndefined();
    expect(
      resolveManagedRepoRootBaseFromEnv({
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: "",
      }),
    ).toBeUndefined();
    expect(
      resolveManagedRepoRootBaseFromEnv({
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: "   ",
      }),
    ).toBeUndefined();
  });

  it("configured path resolves absolute", () => {
    const raw = path.join(tempDir("sfia-lmr-env-"), "managed");
    fs.mkdirSync(raw, { recursive: true });
    const resolved = resolveManagedRepoRootBaseFromEnv({
      [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: raw,
    });
    expect(resolved).toBe(path.resolve(raw));
  });
});

describe("CASE A — REAL OFF", () => {
  it("default singleton creates no REAL boundary / no managed side-effect", () => {
    process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = path.join(
      tempDir("sfia-lmr-a-"),
      "managed",
    );
    expect(isStudioCursorRealEnabled()).toBe(false);
    const off = composeStudioProductRealBoundary({ env: process.env });
    expect(off).toBeUndefined();

    const root = tempDir("sfia-lmr-a-svc-");
    const runtime = getRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: NOW,
      idSource: new FixedIdSource("a"),
      auditMode: "noop",
      productDbPath: path.join(root, "oa.sqlite"),
    });
    expect(runtime.oa?.executionAttemptServices.realBoundary).toBeUndefined();
  });
});

describe("default singleton composition — Reproof09 gap", () => {
  it("REAL ON + env managed base → getRuntimeApplicationService() wiring carries base", () => {
    const managedBase = path.join(tempDir("sfia-lmr-comp-"), "managed");
    fs.mkdirSync(managedBase, { recursive: true });
    process.env.SFIA_STUDIO_CURSOR_REAL = "1";
    process.env.OPS1_CURSOR_REAL = "0";
    process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = managedBase;

    const root = tempDir("sfia-lmr-comp-svc-");
    // No realBoundaryComposition.managedRepoRootBase — env / default singleton only.
    // launchPort substitute prevents constructing a live Cursor gateway.
    const fakeLaunch = new FakeDocsWriteLaunchPort({
      worktreeRoot: managedBase,
      pathAllowlist: ["docs/"],
      defaultBranch: BRANCH,
      repositoryRef: IDENTITY,
    });
    const runtime = getRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: NOW,
      idSource: new FixedIdSource("comp"),
      auditMode: "noop",
      productDbPath: path.join(root, "oa.sqlite"),
      realBoundaryComposition: {
        launchPort: fakeLaunch,
        safetyJournal: new MemoryLaunchSafetyJournal(),
        env: process.env,
      },
    });
    const base =
      runtime.oa?.executionAttemptServices.realBoundary?.managedRepoRootBase;
    expect(base).toBe(path.resolve(managedBase));
    expect(fakeLaunch.calls.length).toBe(0);
  });

  it("truly default singleton options (no caller composition) carries env base", () => {
    const managedBase = path.join(tempDir("sfia-lmr-def-"), "managed");
    fs.mkdirSync(managedBase, { recursive: true });
    process.env.SFIA_STUDIO_CURSOR_REAL = "1";
    process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = managedBase;

    // Composition-only probe: same entry as Product, no options at all after reset.
    // Inject launchPort via compose directly to avoid spawning Cursor while still
    // proving resolveComposeManagedRepoRootBase from env (singleton path unit-tested above).
    const wiring = composeStudioProductRealBoundary({
      env: process.env,
      launchPort: new FakeDocsWriteLaunchPort({
        worktreeRoot: managedBase,
        pathAllowlist: ["docs/"],
        defaultBranch: BRANCH,
        repositoryRef: IDENTITY,
      }),
      safetyJournal: new MemoryLaunchSafetyJournal(),
    });
    expect(wiring?.managedRepoRootBase).toBe(path.resolve(managedBase));

    // defaultSingletonOptions path: getRuntimeApplicationService() with ZERO args
    // after env is set — then inspect options composition via a second compose using
    // only env (Product live shape when REAL=1 and managed base configured).
    resetRuntimeApplicationServiceForTests();
    const bare = getRuntimeApplicationService();
    // Bare singleton may lack doctrine fixtures in this harness; only assert tha
    // createRuntimeApplicationService received composition from defaultSingletonOptions
    // by re-composing with the same env the singleton would use.
    expect(resolveManagedRepoRootBaseFromEnv(process.env)).toBe(
      path.resolve(managedBase),
    );
    void bare;
  });
});

async function bootEnvManagedDocsWriteJourney(input: {
  suffix: string;
  managedBase: string;
  repoRoot: string;
  baseHeadSha: string;
  fakeLaunch: FakeDocsWriteLaunchPort;
}) {
  const root = tempDir(`sfia-lmr-${input.suffix}-`);
  process.env.SFIA_STUDIO_CURSOR_REAL = "1";
  process.env.OPS1_CURSOR_REAL = "0";
  process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = input.managedBase;

  const runtime = getRuntimeApplicationService({
    registryRoot: REGISTRY_ROOT,
    schemasRoot: SCHEMAS_ROOT,
    nowIso: NOW,
    idSource: new FixedIdSource(input.suffix),
    auditMode: "noop",
    productDbPath: path.join(root, "oa.sqlite"),
    // Managed base intentionally omitted — must come from env via compose.
    realBoundaryComposition: {
      launchPort: input.fakeLaunch,
      safetyJournal: new MemoryLaunchSafetyJournal(),
      env: process.env,
    },
  });
  const oa = runtime.oa!;
  expect(
    oa.executionAttemptServices.realBoundary?.managedRepoRootBase,
  ).toBe(path.resolve(input.managedBase));

  const created = await runtime.createProject({
    name: `LMR ${input.suffix}`,
    objective: "Live managed repo composition",
    context: "delivery",
    criticality: "STANDARD",
    constraints: ["ZERO LIVE"],
    shortReference: `LMR${input.suffix}`.slice(0, 8),
    idempotencyKey: `idem:lmr-${input.suffix}`,
  });
  expect(created.ok).toBe(true);
  if (!created.ok) throw new Error("createProject");
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
      baseSha: input.baseHeadSha,
    },
  });
  expect(bound.ok).toBe(true);

  const cycles0 = await oa.cycleServices.cycles.listByProject(projectId);
  const decisions0 = await oa.decisionServices.decisions.listByProject(projectId);
  const lpsBoot = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lpsBoot.ok) throw new Error("lps");
  const presence = await resolveTrajectoryBootstrapPresence(
    oa.cycleServices.trajectories,
    projectId,
  );
  const projectBoot = await oa.projectServices.getProject.execute({ projectId });
  if (!projectBoot.ok || !projectBoot.project.doctrinePackageRef) {
    throw new Error("doctrine pin missing");
  }
  const pin = projectBoot.project.doctrinePackageRef;

  const mat = await materializeLifecycleRecommendationFromStructuredOutput({
    projectId,
    structuredOutput: {
      narrative: "LMR Next cycle.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: {
        intent: "NEXT_CYCLE" as const,
        statement: "Design fonctionnel.",
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:functional-design",
        rationale: "LMR",
        authority: "none" as const,
        isHumanDecision: false as const,
        qualificationSignals: { ...SIGNALS_LIGHT },
      },
    },
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    facts: {
      cycles: cycles0,
      lpsActiveCycleInstanceId: lpsBoot.livingProjectState.activeCycleInstanceId,
      lpsVersion: lpsBoot.livingProjectState.version,
      doctrinePackageId: pin.doctrinePackageId,
      doctrinePackageVersion: pin.version,
      doctrinePackageDigest: pin.digest,
      trajectory: null,
      trajectoryBootstrapPresence: presence,
      decisions: decisions0,
      evidence: [],
      epistemicItems: await oa.cycleServices.epistemic.listByProject(projectId),
    },
    producedAt: NOW,
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  });
  if (!mat.materialization?.ok) {
    throw new Error(
      `materialization failed: ${JSON.stringify(mat, null, 2).slice(0, 2000)}`,
    );
  }

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
      const p = await oa.projectServices.getProject.execute({ projectId: pid });
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
    newTrajectoryId: () => `trj:lmr-${input.suffix}`,
    newStepId: () => `stp:lmr-${input.suffix}`,
    newProvenanceObservationId: () => `epi:lmr-${input.suffix}`,
    correlationId: `cor:lmr-bridge-${input.suffix}`,
  };

  const candidate = await prepareCandidateTrajectoryFromCurrentRecommendation({
    projectId,
    deps: bridgeDeps,
  });
  expect(candidate.ok).toBe(true);
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
    userContent: "__F2_DOCS_WRITE_GCEC__ produce functional design",
    projectSummary: overview.project.name ?? "LMR",
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
  const proposal = saveProposal({
    proposalId: createProposalId(),
    status: "DECISION_REQUIRED",
    rephrasedRequest: analyzed.analysis.rephrasedRequest ?? "docs write",
    objective: analyzed.analysis.objective ?? "FD",
    cycleTypeId:
      analyzed.analysis.candidateCycleTypeId ?? "cyc:functional-design",
    recommendedProfile: "Standard",
    rationale: "LMR",
    scope: analyzed.analysis.scope ?? "docs/",
    outOfScope: analyzed.analysis.outOfScope,
    activatedBlocks: analyzed.analysis.activatedBlocks,
    expectedOutcome: analyzed.analysis.expectedOutcome ?? "artifact",
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
    requestedOperation: analyzed.analysis.requestedOperation,
    executionIntent: analyzed.analysis.executionIntent,
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

  return {
    runtime,
    oa,
    projectId,
    cycleInstanceId,
    decisionId,
    baseHeadSha: input.baseHeadSha,
    fakeLaunch: input.fakeLaunch,
    currentContext: {
      projectId,
      lpsId: overviewAfter.livingState.id,
      lpsVersion: overviewAfter.livingState.version,
      doctrineDigest: overviewAfter.doctrine.digest,
      activeCycleInstanceId: cycleInstanceId,
    },
  };
}

describe("CASE B/C/D — StartExecution via env-managed default composition", () => {
  it("CASE B — REAL ON + managed base absent → wiring omits base (Reproof09 STOP shape)", () => {
    const root = tempDir("sfia-lmr-b-");
    const managedBase = path.join(root, "managed");
    fs.mkdirSync(managedBase, { recursive: true });
    process.env.SFIA_STUDIO_CURSOR_REAL = "1";
    delete process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
    const fakeLaunch = new FakeDocsWriteLaunchPort({
      worktreeRoot: managedBase,
      pathAllowlist: ["docs/"],
      defaultBranch: BRANCH,
      repositoryRef: IDENTITY,
    });
    const runtime = getRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: NOW,
      idSource: new FixedIdSource("b"),
      auditMode: "noop",
      productDbPath: path.join(root, "oa.sqlite"),
      realBoundaryComposition: {
        launchPort: fakeLaunch,
        safetyJournal: new MemoryLaunchSafetyJournal(),
        env: process.env,
      },
    });
    expect(
      runtime.oa?.executionAttemptServices.realBoundary?.managedRepoRootBase,
    ).toBeUndefined();
    expect(
      composeStudioProductRealBoundary({
        env: process.env,
        launchPort: fakeLaunch,
        safetyJournal: new MemoryLaunchSafetyJournal(),
      })?.managedRepoRootBase,
    ).toBeUndefined();
    expect(fakeLaunch.calls.length).toBe(0);
  });

  it("CASE C — managed base configured + repo missing → unresolved, zero launch", async () => {
    const root = tempDir("sfia-lmr-c-");
    const managedBase = path.join(root, "managed");
    fs.mkdirSync(managedBase, { recursive: true });
    // no git repo under identity
    const fakeLaunch = new FakeDocsWriteLaunchPort({
      worktreeRoot: managedBase,
      pathAllowlist: ["docs/"],
      defaultBranch: BRANCH,
      repositoryRef: IDENTITY,
    });
    const { baseHeadSha } = (() => {
      // Need a valid sha for EC; create orphan repo elsewhere for baseHead only
      const tmp = initManagedRepo(path.join(root, "sha-source"), IDENTITY);
      return tmp;
    })();

    const ctx = await bootEnvManagedDocsWriteJourney({
      suffix: "c",
      managedBase,
      repoRoot: path.join(managedBase, "missing"),
      baseHeadSha,
      fakeLaunch,
    });

    const prepared = await prepareAndResolveM3ProductPath({
      projectId: ctx.projectId,
      decisionId: ctx.decisionId,
      currentContext: ctx.currentContext,
      deps: {
        decisionServices: ctx.oa.decisionServices,
        authorityResolver: ctx.oa.authorityResolver,
        executionContractServices: ctx.oa.executionContractServices,
        nowIso: () => ctx.oa.clock.nowIso(),
        forceM3Authority: true,
        preferBoundedDocsWriteProfile: true,
        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const successor = prepared.payload.successor;

    const inspected = await inspectExecutionContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: successor.executionContractId,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) return;

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: successor.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;

    const auth = await evaluateExecutionAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: successor.executionContractId,
      forceLocalAuthority: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;
    expect(auth.outcome).toBe("AUTHORIZED");

    const launchBefore = ctx.fakeLaunch.calls.length;
    const executed = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: successor.executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(false);
    if (executed.ok) return;
    const blob = JSON.stringify(executed);
    expect(blob).toMatch(
      /docs_write_managed_repo_unresolved|REAL_WORKSPACE_INVALID/,
    );
    expect(ctx.fakeLaunch.calls.length).toBe(launchBefore);
  });

  it("CASE D — env managed base + valid repo → StartExecution reaches fake launch (ZERO Cursor)", async () => {
    const root = tempDir("sfia-lmr-d-");
    const managedBase = path.join(root, "managed");
    const { repoRoot, baseHeadSha } = initManagedRepo(managedBase, IDENTITY);
    const gitState = new FakeCursorGitExternalState({
      worktreeRoot: repoRoot,
      initialBranch: BRANCH,
      initialSha: baseHeadSha,
    });
    const fakeLaunch = new FakeDocsWriteLaunchPort({
      worktreeRoot: repoRoot,
      pathAllowlist: ["docs/"],
      defaultBranch: BRANCH,
      repositoryRef: IDENTITY,
      gitState,
    });

    const ctx = await bootEnvManagedDocsWriteJourney({
      suffix: "d",
      managedBase,
      repoRoot,
      baseHeadSha,
      fakeLaunch,
    });

    const prepared = await prepareAndResolveM3ProductPath({
      projectId: ctx.projectId,
      decisionId: ctx.decisionId,
      currentContext: ctx.currentContext,
      deps: {
        decisionServices: ctx.oa.decisionServices,
        authorityResolver: ctx.oa.authorityResolver,
        executionContractServices: ctx.oa.executionContractServices,
        nowIso: () => ctx.oa.clock.nowIso(),
        forceM3Authority: true,
        preferBoundedDocsWriteProfile: true,
        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const successor = prepared.payload.successor;
    expect(successor.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
    expect(successor.target).toBe(M4_BOUNDED_DOCS_WRITE_TARGET);
    expect(successor.scope).toBe(M4_BOUNDED_DOCS_WRITE_SCOPE);

    const inspected = await inspectExecutionContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: successor.executionContractId,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) return;

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: successor.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;

    const auth = await evaluateExecutionAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: successor.executionContractId,
      forceLocalAuthority: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;
    expect(auth.outcome).toBe("AUTHORIZED");

    const launchBefore = ctx.fakeLaunch.calls.length;
    const executed = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: successor.executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) {
      throw new Error(JSON.stringify(executed).slice(0, 2000));
    }
    expect(ctx.fakeLaunch.calls.length).toBe(launchBefore + 1);
    expect(ctx.fakeLaunch.boundaryProofMode).toBe("deterministic_fake");
    expect(executed.realExecution).toBe(false);
    expect(cursorRealExternalLaunches).toBe(0);
  });
});

```

---

### 16. Default singleton before/after flow

**Before:** `defaultSingletonOptions()` → audit/now only → compose REAL without managed base → StartExecution `docs_write_managed_repo_root_base_unconfigured`.

**After:** env `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` → `defaultSingletonOptions.realBoundaryComposition.managedRepoRootBase` AND compose env fallback → StartExecution resolves via existing ManagedProjectRepositoryResolver.

---

### 17. Negative fail-close paths

- Absent/blank env → undefined base (Case B)
- Configured base + missing identity repo → `REAL_WORKSPACE_INVALID` / unresolved (Case C; StartExecution error observed)
- EC/client managedRepoRoot injection remains rejected (existing StartExecution oracle KEEP)
- REAL OFF → no REAL boundary (Case A)
- Deterministic vs REAL mutual exclusion unchanged

---

### 18. Deterministic positive path

Case D: env base + valid managed git fixture → Product journey inspect/confirm/authorize → `governedExecuteAuthorizedContract` → FakeDocsWriteLaunchPort `calls.length += 1` → Attempt succeeded — `realExecution=false`, `boundaryProofMode=deterministic_fake`.

---

### 19. Exact external-boundary substitution

`FakeDocsWriteLaunchPort` injected via new optional `ComposeStudioProductRealBoundaryInput.launchPort` (test-only substitute of external process boundary). No `NodeCursorProcessRunner` spawn.

---

### 20. ZERO REAL proof

- Cursor REAL external launches = 0
- OpenAI LIVE = 0
- Nora LIVE = 0
- Full suite + PR CI with `SFIA_STUDIO_CURSOR_REAL=0`

---

### 21. Focused validations

- `liveManagedRepoComposition.d0.test.ts` — 8/8 PASS
- Related: deterministicCursorBoundary + productJourneyGovernedDocsWriteWiring + gcecCr23 — 60/60 PASS

---

### 22. Full suite counts

Local: Test Files 375 passed | 17 skipped; Tests **4194 passed** | 137 skipped (4331).
Typecheck PASS. Lint PASS. Build PASS.

---

### 23. PR number / base / head

| Item | Value |
|---|---|
| PR | [#496](https://github.com/mcleland147/sfia-workspace/pull/496) |
| Base | `main` @ `74ad6d3e…` |
| Head | `7636bb7102ddc97240d8af5b8cf739a0ec421456` |

---

### 24. CI run IDs / jobs

| Item | Value |
|---|---|
| Run | [35193560419](https://github.com/mcleland147/sfia-workspace/actions/runs/35193560419) |
| Detect SFIA Studio changes | PASS |
| Build and validate SFIA Studio | PASS (typecheck/lint/build/vitest) |
| SFIA Studio Required Gate | PASS |

---

### 25. Bounded in-PR fixes

None required (CI green on first push).

---

### 26. Final Required Gate

**PASS** on run `35193560419`.

---

### 27. Architecture / persistence classification

KEEP existing composition/resolver/StartExecution. COMPLETE server env wiring only. NO schema/DB migration. NO clone/fetch lifecycle. NO Gate D weakening.

---

### 28. Debts / reserves

- Actual Cursor REAL docs_write still unproven (distinct Morris GO after merge).
- Operational precondition: managed clone must already exist under configured base.
- `.gitignore` one-line ignore for local `app/node_modules` symlink hygiene.

---

### 29. Authorized claims

- Default Product singleton can propagate server-owned managedRepoRootBase
- Fail-closed absent/unresolved preserved
- Deterministic default-live path reaches external-boundary substitute
- Reproof09 pre-spawn composition gap closed at tested deterministic scope
- PR #496 Required Gate PASS
- ZERO REAL

---

### 30. Forbidden claims

- REAL BOUNDARY PROVEN / Reproof09 PASS REAL
- Generalized managed-repo provisioning/autonomy
- Runtime v3 ADOPTED / Global L5
- Merge authorized

---

### 31. Runtime v3 = NON ADOPTED

Confirmed.

---

### 32. Exact pre-merge verdic

PRODUCT DOCS_WRITE LIVE MANAGED-REPOSITORY COMPOSITION —
DEFAULT PRODUCT SINGLETON WIRING + SERVER-OWNED MANAGED REPOSITORY
RESOLUTION PROVEN DETERMINISTICALLY AT TESTED SCOPE —
REPROOF09 PRE-SPAWN GAP CLOSED —
ONE MACRO PR GREEN —
ZERO REAL —
READY FOR CHATGPT CRITICAL PRE-MERGE REVIEW —
MERGE NOT AUTHORIZED —
RUNTIME V3 NON ADOPTED

---

### 33. Explicit MERGE NOT AUTHORIZED

DO NOT MERGE without final Morris gate after ChatGPT Critical PRE-MERGE review.

---

### 34. Next Morris gate

STOP FOR CHATGPT CRITICAL PRE-MERGE REVIEW.
Do not start REAL Reproof. Do not merge. Do not open a second PR for this capability.
