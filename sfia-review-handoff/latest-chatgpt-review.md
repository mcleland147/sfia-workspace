# STUDIO-RUNTIME-BOOTSTRAP-PROFILE-01
# SAME MACRO — PRODUCTION PACKAGING BOUNDED CORRECTION
# Cycle 7 — Intégration / DevOps — CRITICAL — RUN
# ZERO CURSOR PRODUCT REAL
# PRODUCTION PACKAGING CORRECTION COMPLETE

## Date / heure
2026-09-23T23:04:06+02:00

## Local Git Truth
- repo root: /Users/morris/Projects/sfia-workspace
- branch: fix/sfia-studio-product-real-readiness-pathroot-semantics
- HEAD: 128f3b7eb49cbba05d7735d5edc41a27822b0dee
- HEAD tree: 400d608e2a0be9b182925c46cd204a24cb1e0034
- origin/main: 66ffc0d2370d9ed7014348fd25994ce1cda3b3ad
- origin/main tree: 400d608e2a0be9b182925c46cd204a24cb1e0034
- tree vs qualified main: MATCH
- superseded handoff: 78905a3bd6ed481deb4664e10f297a2c263025f2 / blob 543734f7d17800d3fb01fff4862db939ffa42d6f
- git status --short:

```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/.env.example
 M projects/sfia-studio/app/README.md
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/w2/completeDocsWriteClaimEvidenceCompletion.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
 M projects/sfia-studio/app/package-lock.json
 M projects/sfia-studio/app/package.json
?? projects/sfia-studio/app/__tests__/project-assistant/automaticResultQualification.d0.test.ts
?? projects/sfia-studio/app/__tests__/vertical-slice-runtime/studioRuntimeProfilePreflight.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolveDocsWriteArtifactAbsolutePath.ts
?? projects/sfia-studio/app/lib/vertical-slice-runtime/studioRuntimeProfilePreflight.ts
?? projects/sfia-studio/app/scripts/studio-runtime-preflight.ts
```

- ARQ + prior bootstrap logic: PRESERVED (not modified this cycle except packaging test T11 append)
- project push: NONE
- Cursor Product REAL spawn: 0
- ExecutionAttempt: 0

## Finding RUNTIME-BOOTSTRAP-PACKAGING-01 — confirmed

Nominal path:
`npm start` → `npm run preflight:runtime` → `tsx scripts/studio-runtime-preflight.ts` → `next start`

Before correction:
- `tsx` was only in **devDependencies** → missing after `npm ci --omit=dev` → `tsx: command not found`
- `@next/env` imported directly but only available **transitively** via `next` (hoisting)

## Solution applied
Declare both as **direct runtime dependencies**; remove `tsx` from devDependencies; regenerate lock via `npm install --package-lock-only` (no hand-edit).

No preflight architecture change. No JS rewrite. No second env loader.

## Versions before / after

| Package | Before | After (declared) | Resolved |
|---|---|---|---|
| tsx | devDependencies ^4.20.5 | dependencies ^4.20.5 | 4.23.11 |
| @next/env | transitive only (via next) | dependencies ^15.3.3 | 15.5.20 |
| next | ^15.3.3 | unchanged | 15.5.20 |

`@next/env` range aligned with `next` (^15.3.3); resolved versions match (15.5.20).

## package.json final runtime deps (relevant)
```json
{
  "@next/env": "^15.3.3",
  "next": "^15.3.3",
  "tsx": "^4.20.5"
}
```
tsx in devDependencies: None

## package-lock top-level truth
```
lockfileVersion: 3
root.dependencies.tsx = ^4.20.5
root.dependencies.@next/env = ^15.3.3
root.devDependencies.tsx = None
node_modules/tsx.version = 4.23.11  (dev flag=None)
node_modules/@next/env.version = 15.5.20  (dev flag=None)
node_modules/next.version = 15.5.20

```

## package-lock diff stat
```
projects/sfia-studio/app/package-lock.json | 225 +++++++++++------------------
 1 file changed, 85 insertions(+), 140 deletions(-)
```

## package-lock useful excerpt (tsx / @next/env / former dev:true removals)
```diff
diff --git a/projects/sfia-studio/app/package-lock.json b/projects/sfia-studio/app/package-lock.json
index a511e682..3f81fe9c 100644
--- a/projects/sfia-studio/app/package-lock.json
+++ b/projects/sfia-studio/app/package-lock.json
@@ -9,4 +9,5 @@
+        "@next/env": "^15.3.3",
@@ -17,4 +18,5 @@
+        "tsx": "^4.20.5",
@@ -34,5 +36,4 @@
-        "tsx": "^4.20.5",
@@ -50,5 +51,5 @@
-      "dev": true,
@@ -232,5 +233,5 @@
-      "dev": true,
@@ -252,5 +253,5 @@
-      "dev": true,
@@ -276,5 +277,5 @@
-      "dev": true,
@@ -304,5 +305,5 @@
-      "dev": true,
@@ -327,5 +328,5 @@
-      "dev": true,
@@ -383,5 +384,4 @@
-      "dev": true,
@@ -400,5 +400,4 @@
-      "dev": true,
@@ -417,5 +416,4 @@
-      "dev": true,
@@ -434,5 +432,4 @@
-      "dev": true,
@@ -451,5 +448,4 @@
-      "dev": true,
@@ -468,5 +464,4 @@
-      "dev": true,
@@ -485,5 +480,4 @@
-      "dev": true,
@@ -502,5 +496,4 @@
-      "dev": true,
@@ -519,5 +512,4 @@
-      "dev": true,
@@ -536,5 +528,4 @@
-      "dev": true,
@@ -553,5 +544,4 @@
-      "dev": true,
@@ -570,5 +560,4 @@
-      "dev": true,
@@ -587,5 +576,4 @@
-      "dev": true,
@@ -604,5 +592,4 @@
-      "dev": true,
@@ -621,5 +608,4 @@
-      "dev": true,
@@ -638,5 +624,4 @@
-      "dev": true,
@@ -655,5 +640,4 @@
-      "dev": true,
@@ -672,5 +656,4 @@
-      "dev": true,
@@ -689,5 +672,4 @@
-      "dev": true,
@@ -706,5 +688,4 @@
-      "dev": true,
@@ -723,5 +704,4 @@
-      "dev": true,
@@ -740,5 +720,4 @@
-      "dev": true,
@@ -757,5 +736,4 @@
-      "dev": true,
@@ -774,5 +752,4 @@
-      "dev": true,
@@ -791,5 +768,4 @@
-      "dev": true,
@@ -808,5 +784,4 @@
-      "dev": true,
@@ -1556,5 +1531,5 @@
-      "dev": true,
@@ -2029,5 +2004,5 @@
-      "dev": true,
@@ -2048,5 +2023,4 @@
-      "dev": true,
@@ -2062,5 +2036,4 @@
-      "dev": true,
@@ -2076,5 +2049,4 @@
-      "dev": true,
@@ -2090,5 +2062,4 @@
-      "dev": true,
@@ -2104,5 +2075,4 @@
-      "dev": true,
@@ -2118,5 +2088,4 @@
-      "dev": true,
@@ -2132,5 +2101,4 @@
-      "dev": true,
@@ -2149,5 +2117,4 @@
-      "dev": true,
@@ -2166,5 +2133,4 @@
-      "dev": true,
@@ -2183,5 +2149,4 @@
-      "dev": true,
@@ -2200,5 +2165,4 @@
-      "dev": true,
@@ -2217,5 +2181,4 @@
-      "dev": true,
@@ -2234,5 +2197,4 @@
-      "dev": true,
@@ -2251,5 +2213,4 @@
-      "dev": true,
@@ -2268,5 +2229,4 @@
-      "dev": true,
@@ -2285,5 +2245,4 @@
-      "dev": true,
@@ -2302,5 +2261,4 @@
-      "dev": true,
@@ -2319,5 +2277,4 @@
-      "dev": true,
@@ -2336,5 +2293,4 @@
-      "dev": true,
@@ -2353,5 +2309,4 @@
-      "dev": true,
@@ -2367,5 +2322,4 @@
-      "dev": true,
@@ -2381,5 +2335,4 @@
-      "dev": true,
@@ -2395,5 +2348,4 @@
-      "dev": true,
@@ -2409,5 +2361,4 @@
-      "dev": true,
@@ -2423,5 +2374,4 @@
-      "dev": true,
@@ -2570,5 +2520,5 @@
-      "dev": true,
@@ -2581,5 +2531,5 @@
-      "dev": true,
@@ -2588,5 +2538,5 @@
-      "dev": true,
@@ -3295,5 +3245,5 @@
-      "dev": true,
@@ -3312,5 +3262,5 @@
-      "dev": true,
@@ -3339,5 +3289,5 @@
-      "dev": true,
@@ -3352,5 +3302,5 @@
-      "dev": true,
@@ -3367,5 +3317,5 @@
-      "dev": true,
@@ -3382,5 +3332,5 @@
-      "dev": true,
@@ -3395,5 +3345,5 @@
-      "dev": true,
@@ -3433,5 +3383,5 @@
-      "dev": true,
@@ -3662,5 +3612,5 @@
-      "dev": true,
@@ -3890,5 +3840,5 @@
-      "dev": true,
@@ -3980,5 +3930,5 @@
-      "dev": true,
@@ -4014,5 +3964,5 @@
-      "dev": true,
@@ -4094,5 +4044,5 @@
-      "dev": true,
@@ -4122,5 +4072,5 @@
-      "dev": true,
@@ -4207,5 +4157,5 @@
-      "dev": true,
@@ -4214,5 +4164,5 @@
-      "dev": true,
@@ -4335,5 +4285,5 @@
-      "dev": true,
@@ -4484,5 +4434,5 @@
-      "dev": true,
@@ -4554,5 +4504,4 @@
-      "dev": true,
@@ -5026,5 +4975,5 @@
-      "dev": true,
@@ -5069,5 +5018,5 @@
-      "dev": true,
@@ -5235,5 +5184,4 @@
-      "dev": true,
@@ -5598,5 +5546,5 @@
-      "dev": true,
@@ -5611,5 +5559,5 @@
-      "dev": true,
@@ -5625,5 +5573,5 @@
-      "dev": true,
@@ -5639,5 +5587,5 @@
-      "dev": true,
@@ -5997,5 +5945,5 @@
-      "dev": true,
@@ -6236,5 +6184,5 @@
-      "dev": true,
@@ -6414,5 +6362,5 @@
-      "dev": true,
@@ -6421,5 +6369,5 @@
-      "dev": true,
@@ -6438,5 +6386,5 @@
-      "dev": true,
@@ -6694,5 +6642,5 @@
-      "dev": true,
@@ -6942,5 +6890,5 @@
-      "dev": true,
```

## DIFF — package.json
```diff
diff --git a/projects/sfia-studio/app/package.json b/projects/sfia-studio/app/package.json
index 7e975028..302de252 100644
--- a/projects/sfia-studio/app/package.json
+++ b/projects/sfia-studio/app/package.json
@@ -6,7 +6,9 @@
   "scripts": {
     "dev": "next dev --port 3020",
     "build": "next build",
-    "start": "next start --port 3020",
+    "preflight:runtime": "tsx scripts/studio-runtime-preflight.ts",
+    "start": "npm run preflight:runtime && next start --port 3020",
+    "start:skip-preflight": "next start --port 3020",
     "lint": "next lint",
     "typecheck": "tsc --noEmit",
     "test": "vitest run",
@@ -18,6 +20,7 @@
     "finops:t7:rollout": "tsx scripts/finops-t7-shadow-rollout.ts"
   },
   "dependencies": {
+    "@next/env": "^15.3.3",
     "@openai/agents": "^0.17.0",
     "ajv": "^6.15.0",
     "better-auth": "1.7.2",
@@ -26,6 +29,7 @@
     "pg": "~8.22.0",
     "react": "^19.1.0",
     "react-dom": "^19.1.0",
+    "tsx": "^4.20.5",
     "zod": "^4.5.4"
   },
   "devDependencies": {
@@ -43,7 +47,6 @@
     "eslint-config-next": "^15.3.3",
     "jsdom": "^26.1.0",
     "node-pg-migrate": "^8.0.4",
-    "tsx": "^4.20.5",
     "typescript": "^5.8.3",
     "vitest": "^3.1.2"
   }

```

## DIFF — README.md
```diff
diff --git a/projects/sfia-studio/app/README.md b/projects/sfia-studio/app/README.md
index 5f1b2a54..602d55f4 100644
--- a/projects/sfia-studio/app/README.md
+++ b/projects/sfia-studio/app/README.md
@@ -9,17 +9,38 @@ Frontend Next.js 15 pour les 4 écrans Figma P0 (`lrjA1WEyRpL05vKR8k29LO`).
 - Port local : **3020**
 - Fixtures locales uniquement — **aucun backend**

+## Runtime profile (Product local)
+
+Persistance locale : `app/.env.local` (gitignored). Contrat versionné : `app/.env.example`.
+
+Next.js 15 charge `.env.local` automatiquement pour `npm run dev` et `npm start` (server-side). Aucun export shell manuel n'est requis.
+
+```bash
+cp .env.example .env.local   # puis renseigner le profil Product local
+npm run preflight:runtime    # fail-closed avant parcours produit
+npm run build && npm start   # start exécute le preflight automatiquement
+```
+
+`SFIA_STUDIO_CURSOR_REAL` reste **OFF by default** dans Git. Ne jamais committer `=1`.
+`SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` est **TEMPORARY WITH EXIT**.
+
+`tsx` et `@next/env` sont des **dependencies runtime** (pas seulement dev) : `npm start` → `preflight:runtime` doit fonctionner après `npm ci --omit=dev`.
+
+`npm run start:skip-preflight` n'est **pas** le démarrage Product normal — uniquement diagnostic / récupération opérateur explicite.
+
 ## Scripts

 ```bash
 npm install
 npm run dev          # http://127.0.0.1:3020
+npm run preflight:runtime
 npm run lint
 npm run typecheck
 npm test
 npm run test:e2e
 npm run build
-npm start
+npm start            # preflight:runtime && next start (chemin Product nominal)
+# npm run start:skip-preflight  # diagnostic only — NOT Product normal start
 ```

 ## Routes P0
@@ -33,30 +54,8 @@ npm start

 ## Contraintes P0

-- **Pas** de `app/api`, middleware auth, `.env`, Tailwind, ni appels Git distants
-- Actions Git/Cursor **simulées** (`Simulation — aucune action Git réelle`)
+- **Pas** de secrets commités, ni `NEXT_PUBLIC_*` pour les clés SFIA server-owned
+- Actions Git/Cursor **simulées** hors profil REAL local explicite
 - `Recommendation` (copilot) ≠ `MorrisDecision` (gate humain)
 - Onglet **Preuves** et gear rail : désactivés (simulation)
 - Captures E2E 1440×1024 → `../../.tmp-sfia-review/screenshots/`
-
-## Structure
-
-```
-app/                 # App Router pages
-components/shell/    # StudioShell, rail, topbar, copilot
-components/ui/       # Card, pills, gates, evidence, metrics
-features/            # Écrans P0
-fixtures/            # Données déterministes FR
-lib/domain/          # Types + guards
-lib/adapters/        # Ports fixtures-only
-styles/              # tokens.css, shell.module.css
-__tests__/           # Vitest + Testing Library
-e2e/                 # Playwright smoke
-```
-
-## Figma frames
-
-- P0-00C `19:2` — shell **floating** (rail/workspace/copilot inset)
-- P0-01/02/03 — shell **flush** (rail pleine hauteur + topbar)
-
-Tokens extraits manuellement depuis `get_design_context` (variables Figma vides).

```

## COLD PROD INSTALL PROVEN — `npm ci --omit=dev`

Isolated temp dir with only package.json + package-lock.json:

```
PROOF_DIR=/tmp/sfia-runtime-packaging-X2xGsj
npm ci --omit=dev → added 179 packages
tsx_bin=PRESENT
@next/env 15.5.20
tsx 4.23.11
next 15.5.20
direct_runtime_deps=OK
tsx --version → tsx v4.23.11
tsx -e "import { loadEnvConfig } from '@next/env'" → loadEnvConfig function
eslint=ABSENT
```

Claim: **COLD PROD INSTALL PROVEN** for tsx + @next/env runtime availability.

Reserve: `vitest` still appears under omit=dev because **better-auth@1.7.2** depends on it (pre-existing; unrelated to this finding).

## Startup proof (workspace)
```
env -u SFIA_STUDIO_* npm run preflight:runtime
→ STUDIO RUNTIME PROFILE READY
→ repository: mcleland147/sfia-workspace (PASS)
→ cursorReal: READY
→ realBoundaryConstructed: false
```

`npm start` chain (short-lived; preflight observed before next listen):
```
> npm run preflight:runtime && next start --port 3020
STUDIO RUNTIME PROFILE READY
… then next start hit EADDRINUSE :3020 (existing local `npm run dev`) — preflight PASS proven; process stopped; no Product interaction.
```

## Tests
| Suite | Count | Result |
|---|---|---|
| studioRuntimeProfilePreflight.d0.test.ts | 11 (T1–T10 + T11 packaging) | PASS |

T11 asserts `dependencies.tsx` + `dependencies[@next/env]` present and `devDependencies.tsx` absent.

## ZERO REAL / Attempts / Secrets
- Cursor Product REAL spawn: 0
- ExecutionAttempt: 0
- StartExecution: 0
- FocusFlow untouched
- `.env.local` NOT included; no secrets logged

## Fichiers modifiés (this correction)
1. projects/sfia-studio/app/package.json
2. projects/sfia-studio/app/package-lock.json
3. projects/sfia-studio/app/README.md (start:skip-preflight = diagnostic only; runtime deps note)
4. projects/sfia-studio/app/__tests__/vertical-slice-runtime/studioRuntimeProfilePreflight.d0.test.ts (T11 only)

Not modified: studioRuntimeProfilePreflight.ts, studio-runtime-preflight.ts, .env.local, ARQ files, doctrine/roadmap/C1.

## Success criteria
- SC-01 tsx runtime under omit=dev: PASS
- SC-02 @next/env direct: PASS
- SC-03 lock coherent: PASS
- SC-04 cold install proven: PASS
- SC-05 preflight sans export shell: PASS
- SC-06 bootstrap tests PASS (11/11)
- SC-07 ZERO REAL: PASS
- SC-08 Attempts 0: PASS
- SC-09 secrets not exposed: PASS
- SC-10 prior macros preserved: PASS

## Décisions Morris
- GO packaging only
- No project push / PR / merge

## Réserves
- better-auth still pulls vitest into omit=dev installs (pre-existing).
- `npm start` proof hit EADDRINUSE because Studio `dev` already bound :3020; preflight portion of the chain still proven.
- `start:skip-preflight` retained as diagnostic/recovery only — not Product nominal.

## Verdict
**STUDIO-RUNTIME-BOOTSTRAP-PROFILE-01 — PRODUCTION PACKAGING CORRECTION COMPLETE — READY FOR CHATGPT RE-REVIEW**

---

## CONTENU INTÉGRAL — studioRuntimeProfilePreflight.d0.test.ts (updated; T11 packaging)

```typescript
/**
 * STUDIO-RUNTIME-BOOTSTRAP-PROFILE-01 — runtime profile preflight tests.
 * ZERO Cursor Product REAL / ZERO ExecutionAttempt.
 * @vitest-environment node
 */
import { afterEach, describe, expect, it } from "vitest";
import { mkdtempSync, mkdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import {
  runStudioRuntimeProfilePreflight,
  STUDIO_RUNTIME_PROFILE_NOT_READY,
  STUDIO_RUNTIME_PROFILE_ENV_KEYS,
} from "@/lib/vertical-slice-runtime/studioRuntimeProfilePreflight";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { M3_LOCAL_AUTHORITY_ENV } from "@/lib/oa/decision/infrastructure/localSingleUserAuthority";
import { SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY_FLAG } from "@/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary";
import { SFIA_STUDIO_CURSOR_REAL_FLAG } from "@/lib/oa/execution-attempt";
import { execFileSync } from "node:child_process";

const IDENTITY = "acme/runtime-preflight";
const REMOTE = "https://github.com/acme/runtime-preflight.git";

function baseEnv(overrides: Record<string, string | undefined> = {}): Record<
  string,
  string | undefined
> {
  return {
    SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY: IDENTITY,
    SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL: REMOTE,
    SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH: "main",
    [M3_LOCAL_AUTHORITY_ENV]: "1",
    [SFIA_STUDIO_CURSOR_REAL_FLAG]: "0",
    [SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY_FLAG]: undefined,
    ...overrides,
  };
}

function seedManagedClone(managedBase: string, identity: string): string {
  const sanitized = identity.replace(/[^a-zA-Z0-9._-]+/g, "__");
  const clone = path.join(managedBase, sanitized);
  mkdirSync(clone, { recursive: true });
  execFileSync("git", ["init"], { cwd: clone, stdio: "ignore" });
  return clone;
}

describe("studioRuntimeProfilePreflight", () => {
  const tmpDirs: string[] = [];
  afterEach(() => {
    for (const d of tmpDirs.splice(0)) {
      try {
        rmSync(d, { recursive: true, force: true });
      } catch {
        /* ignore */
      }
    }
  });

  it("T1 — repository env complete → preflight PASS repository section", () => {
    const managedBase = mkdtempSync(path.join(tmpdir(), "sfia-rt-t1-"));
    tmpDirs.push(managedBase);
    seedManagedClone(managedBase, IDENTITY);
    const r = runStudioRuntimeProfilePreflight({
      env: baseEnv({ [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase }),
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.sections.repository).toBe("PASS");
    expect(r.repositoryIdentity).toBe(IDENTITY);
  });

  it("T2 — missing repository identity/remote → FAIL-CLOSED", () => {
    const r = runStudioRuntimeProfilePreflight({
      env: baseEnv({
        SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY: "",
        SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL: "",
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: "/tmp/unused",
      }),
      requireManagedClonePresent: false,
    });
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.code).toBe(STUDIO_RUNTIME_PROFILE_NOT_READY);
    expect(r.sections.repository).toBe("FAIL");
    expect(r.blockers).toEqual(
      expect.arrayContaining([
        "REPOSITORY_IDENTITY_MISSING",
        "REPOSITORY_REMOTE_MISSING",
      ]),
    );
    expect(r.message).toContain(STUDIO_RUNTIME_PROFILE_NOT_READY);
  });

  it("T3 — local authority missing → FAIL-CLOSED", () => {
    const managedBase = mkdtempSync(path.join(tmpdir(), "sfia-rt-t3-"));
    tmpDirs.push(managedBase);
    seedManagedClone(managedBase, IDENTITY);
    const r = runStudioRuntimeProfilePreflight({
      env: baseEnv({
        [M3_LOCAL_AUTHORITY_ENV]: "0",
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
      }),
    });
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.blockers).toContain("LOCAL_AUTHORITY_NOT_CONFIGURED");
    expect(r.sections.authority).toBe("FAIL");
  });

  it("T4 — managed root missing → FAIL-CLOSED", () => {
    const r = runStudioRuntimeProfilePreflight({
      env: baseEnv({
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: "",
      }),
      requireManagedClonePresent: false,
    });
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.blockers).toContain("MANAGED_REPO_ROOT_BASE_UNCONFIGURED");
    expect(r.sections.managedRepository).toBe("FAIL");
  });

  it("T5 — managed repo expected absent → FAIL-CLOSED with precise diagnostic", () => {
    const managedBase = mkdtempSync(path.join(tmpdir(), "sfia-rt-t5-"));
    tmpDirs.push(managedBase);
    // base exists but clone missing
    const r = runStudioRuntimeProfilePreflight({
      env: baseEnv({ [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase }),
    });
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.sections.managedRepository).toBe("FAIL");
    const absent = r.blockers.find((b) => b.startsWith("MANAGED_REPO_ABSENT:"));
    expect(absent).toBeTruthy();
    expect(absent).toContain(managedBase);
  });

  it("T6 — deterministic + REAL → FAIL-CLOSED via canonical rule", () => {
    const managedBase = mkdtempSync(path.join(tmpdir(), "sfia-rt-t6-"));
    tmpDirs.push(managedBase);
    seedManagedClone(managedBase, IDENTITY);
    const r = runStudioRuntimeProfilePreflight({
      env: baseEnv({
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
        [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
        [SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY_FLAG]: "1",
      }),
    });
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.blockers).toContain("DETERMINISTIC_AND_REAL_MUTUALLY_EXCLUSIVE");
    expect(r.sections.deterministicRealExclusive).toBe("FAIL");
  });

  it("T7 — REAL OFF → no REAL boundary constructed", () => {
    const managedBase = mkdtempSync(path.join(tmpdir(), "sfia-rt-t7-"));
    tmpDirs.push(managedBase);
    seedManagedClone(managedBase, IDENTITY);
    const r = runStudioRuntimeProfilePreflight({
      env: baseEnv({
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
        [SFIA_STUDIO_CURSOR_REAL_FLAG]: "0",
      }),
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.cursorReal).toBe("OFF");
    expect(r.realBoundaryConstructed).toBe(false);
  });

  it("T8 — .env.local persistence / startup proof via @next/env child process", () => {
    const appDir = path.resolve(__dirname, "../..");
    const cleanEnv: NodeJS.ProcessEnv = { ...process.env };
    for (const k of STUDIO_RUNTIME_PROFILE_ENV_KEYS) {
      delete cleanEnv[k];
    }
    delete cleanEnv.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY;
    delete cleanEnv.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL;
    delete cleanEnv.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH;
    delete cleanEnv.SFIA_STUDIO_MANAGED_REPO_ROOT_BASE;
    delete cleanEnv.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    delete cleanEnv.SFIA_STUDIO_CURSOR_REAL;
    delete cleanEnv.SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY;

    // No shell export of Product profile — child must load .env.local via @next/env.
    // Next skips .env.local when NODE_ENV=test; simulate `npm start` with production.
    cleanEnv.NODE_ENV = "production";

    const result = spawnSync(
      path.join(appDir, "node_modules/.bin/tsx"),
      [path.join(appDir, "scripts/studio-runtime-preflight.ts")],
      {
        cwd: appDir,
        env: cleanEnv,
        encoding: "utf8",
      },
    );
    expect(result.status, result.stderr || result.stdout).toBe(0);
    expect(result.stdout).toContain("STUDIO RUNTIME PROFILE READY");
    expect(result.stdout).toMatch(/repository: .+\(PASS\)/);
    // T9 adjacent — no secret material in CLI output
    expect(result.stdout.toLowerCase()).not.toMatch(
      /replace-with|client.secret|better_auth_secret=|ghp_|github_pat_/,
    );
    expect(result.stderr.toLowerCase()).not.toMatch(
      /replace-with|client.secret|better_auth_secret=|ghp_|github_pat_/,
    );
  });

  it("T9 — secrets never appear in preflight message", () => {
    const r = runStudioRuntimeProfilePreflight({
      env: baseEnv({
        BETTER_AUTH_SECRET: "super-secret-value-do-not-leak",
        GITHUB_CLIENT_SECRET: "gh-secret-do-not-leak",
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: "",
      }),
      requireManagedClonePresent: false,
    });
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.message).not.toContain("super-secret-value-do-not-leak");
    expect(r.message).not.toContain("gh-secret-do-not-leak");
  });

  it("T10 — no Cursor launch / no ExecutionAttempt side effects", () => {
    const managedBase = mkdtempSync(path.join(tmpdir(), "sfia-rt-t10-"));
    tmpDirs.push(managedBase);
    seedManagedClone(managedBase, IDENTITY);
    const r = runStudioRuntimeProfilePreflight({
      env: baseEnv({
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
        [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
      }),
    });
    // REAL=1 is allowed for profile READY display without constructing/launching.
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.cursorReal).toBe("READY");
    expect(r.realBoundaryConstructed).toBe(false);
  });

  it("T11 — packaging: tsx + @next/env are direct runtime dependencies", () => {
    const pkgPath = path.resolve(__dirname, "../../package.json");
    const pkg = JSON.parse(
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require("node:fs").readFileSync(pkgPath, "utf8"),
    ) as {
      dependencies?: Record<string, string>;
      devDependencies?: Record<string, string>;
    };
    expect(pkg.dependencies?.tsx).toBeTruthy();
    expect(pkg.dependencies?.["@next/env"]).toBeTruthy();
    expect(pkg.devDependencies?.tsx).toBeUndefined();
  });
});
```
