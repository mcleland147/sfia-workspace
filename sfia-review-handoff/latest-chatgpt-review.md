# SFIA Review Pack FULL — ML1 Targeted Pre-Push Corrections

| Field | Value |
| --- | --- |
| Date/time | 2026-11-04 15:02:50 CET |
| GO Morris | `GO ML1 — TARGETED PRE-PUSH CORRECTIONS / LOCAL ONLY` (2026-11-04) |
| Cycle | 8 / INC / CRITICAL |
| Product | `projects/sfia-studio-next/` |
| Branch | `sfia/next-access-preparation-continuity` (**LOCAL ONLY — not pushed**) |
| Base main | `61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Parent commit (preserved) | `0b982b3b6a09b16d7f5ae36f9794c3fc8b3614c2` |
| New local tip | `8767185234bab9b2cad7800771a6bfc0ae1d19e4` |
| Message | `fix(next): harden DEV auth and isolate ML1 setup and E2E` |
| Versioning | **NO RELEASE** / STABLE NOT AVAILABLE / RC NOT ASSIGNED / `0.0.0-dev` |
| Lane | DEV only (ENV-01) |

## Verdict (Cursor)

`ML1 PRE-PUSH TARGETED CORRECTIONS — LOCAL COMMIT READY FOR CHATGPT REVIEW`

Findings R1/R2/R3 from Critical Review of `0b982b3b6a09b16d7f5ae36f9794c3fc8b3614c2`: **CLOSED** with proofs below.

## Instruction ChatGPT (mandatory)

Relire sur Git la version courante `sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md`, comparer diff/code local reproduit, base et parent, tests, corrections R1/R2/R3, sources et preuves avant toute recommandation de GO Morris push projet.

## Git Review Index

| Ref | SHA |
| --- | --- |
| origin/main (local + ls-remote) | 61a6765a4e8d92760aab595b61b66aa2425906c6 |
| Commit 1 (unchanged parent) | 0b982b3b6a09b16d7f5ae36f9794c3fc8b3614c2 |
| Commit 2 (this cycle) | 8767185234bab9b2cad7800771a6bfc0ae1d19e4 |
| Prior handoff | cc97032c75752d61589646e4731ffd4be1792459 / blob d2008b9166866ca3b9cf933bcc4a9725765e1326 |

### State before

- Branch tip `0b982b3b6a09b16d7f5ae36f9794c3fc8b3614c2` unpublished
- Residual: `M .tmp-sfia-review/chatgpt-review.md`, `?? web/public/*.svg` (starter — excluded)

### State after

- Tip `8767185234bab9b2cad7800771a6bfc0ae1d19e4`; parent preserved; **no project push**
- Residual unchanged: tmp review + starter public SVGs

## Findings closure

### R1 / Correctif A — DEV session emit + consume — CLOSED

**Cause:** `startsWith('localhost')` accepted spoof hosts; multi-value XFF trusted via first element; consume ignored lane flags.

**Fix:** `isApprovedLoopbackAuthority` / `isApprovedLoopbackClientIp` exact match; reject commas/userinfo/invalid ports; `isDevAdapterConsumeAllowed` + `resolveDevAdapterSessionByToken` fail-closed when `STUDIO_LANE !== 'DEV'` or `STUDIO_DEV_TEST_LOGIN !== '1'`. Better Auth path unchanged (priority 1).

**Proof:**
- UNIT: `dev-login-host.test.ts` rejects `localhost.attacker.example`, `127.0.0.1.attacker.example`, multi XFF; consume gate matrix
- POSTGRES TEST ISOLATED (DEV DB, no schema wipe): identity-session emit rejections + **already-issued token null after lane→RECETTE / login disabled**
- GitHub OAuth path: not modified; Better Auth still first in `resolveStudioSession`

### R2 / Correctif B — migrations 001→002 — CLOSED

**Cause:** `db:migrate` / README applied only 001 while runtime needs `sessions.auth_mode` (002).

**Fix:** `scripts/db-migrate.sh` applies 001 then 002 with `ON_ERROR_STOP=1`; `npm run db:migrate`; README updated. Operator DEV data untouched (`Test 1` count=1 before/after).

**Proof:**
- POSTGRES TEST ISOLATED: temporary container `sfia-next-migtest-*` — fresh 001→002, `auth_mode` NOT NULL default unknown, DEV session insert, idempotent re-apply, ON_ERROR_STOP failure
- `npm run db:migrate` on existing DEV → OK; Test 1 preserved

### R3 / Correctif C — E2E Nora FAKE isolation — CLOSED

**Cause:** smoke accepted LIVE mode; `reuseExistingServer: true` could attach to LIVE-keyed :3100.

**Fix:** owned server `:3101` via `scripts/e2e-web-server.sh`; DB `sfia_next_e2e` (sibling, not `sfia_next_dev`); `reuseExistingServer: false`; `STUDIO_E2E=1` + neutralized `OPENAI_API_KEY`; adapter `mustUseNoraFixture()`; smoke **FAIL** if `openai-agents-sdk-live` present; assert fixture text.

**Proof:**
- UNIT: `nora-e2e-fixture.test.ts` — STUDIO_E2E=1 + fake key → `deterministic-fixture` (no LIVE path)
- BROWSER FAKE: Playwright 1 PASS on :3101; 0 LIVE mode text
- DEV `Test 1` still count=1; e2e projects live only in `sfia_next_e2e`

## Evidence classification

| Check | Class | Result |
| --- | --- | --- |
| `npm run test:unit` | UNIT | 10 PASS (4 files) |
| `npm run test:integration` | POSTGRES TEST ISOLATED (+ DEV for identity/create) | 26 PASS |
| migrations-fresh | POSTGRES TEST ISOLATED (temp container) | 3 PASS |
| `npm run test:e2e` | BROWSER FAKE | 1 PASS |
| `npx tsc --noEmit` (post-build) | UNIT | PASS |
| `npm run build` | UNIT | PASS |
| `npm run lint` | UNIT | PASS |
| `npm ls next postcss` | UNIT | next@15.5.29; postcss@8.5.32 overridden |
| `npm audit --omit=dev` | UNIT | no postcss/next GHSA reopen; remaining advisories are vitest/drizzle-kit/esbuild toolchain (dev-tree noise under omit=dev) — not force-fixed |
| Nora LIVE | LIVE API (PREVIOUS) | not re-run |
| GitHub OAuth callback | BROWSER USER LIVE (PREVIOUS) / NOT RUN interactive | unchanged |
| Figma pixel | INCONCLUSIVE | unchanged |
| Markdown rich | KNOWN GAP | unchanged |
| A05/A13/A15/A16/DATA-01 | open per prior scope | unchanged |

## Delivery / versioning

- DELIV-06 records commit1 `0b982b3b6a09b16d7f5ae36f9794c3fc8b3614c2`
- DELIV-07 records parent + tip resolved via Git (no circular self-SHA amend)
- **NO RELEASE**

## Files in commit 2 (`8767185234bab9b2cad7800771a6bfc0ae1d19e4`)

M	projects/sfia-studio-next/CHANGELOG.md
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/web/README.md
M	projects/sfia-studio-next/web/package.json
M	projects/sfia-studio-next/web/playwright.config.ts
A	projects/sfia-studio-next/web/scripts/db-migrate.sh
A	projects/sfia-studio-next/web/scripts/e2e-web-server.sh
M	projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
M	projects/sfia-studio-next/web/src/domains/identity/session.ts
M	projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
M	projects/sfia-studio-next/web/tests/integration/identity-session.pg.test.ts
A	projects/sfia-studio-next/web/tests/integration/migrations-fresh.pg.test.ts
A	projects/sfia-studio-next/web/tests/unit/dev-login-host.test.ts
A	projects/sfia-studio-next/web/tests/unit/nora-e2e-fixture.test.ts

## Diff complete parent..tip

```diff
diff --git a/projects/sfia-studio-next/CHANGELOG.md b/projects/sfia-studio-next/CHANGELOG.md
index ccb4dd2c..3de94e7b 100644
--- a/projects/sfia-studio-next/CHANGELOG.md
+++ b/projects/sfia-studio-next/CHANGELOG.md
@@ -3,6 +3,13 @@
 No promoted product release yet.
 
 ## Unreleased
+## Unreleased — ML1 targeted pre-push corrections 2026-11-04
+
+- D1: exact loopback Host/XFF parsing (reject `localhost.attacker.example` and multi-value XFF); DEV adapter consume fail-closed when lane ≠ DEV or test login disabled.
+- DB: `npm run db:migrate` applies `001` then `002` with `ON_ERROR_STOP`; fresh isolated container migration test.
+- E2E: owned Playwright server `:3101` + DB `sfia_next_e2e`; `STUDIO_E2E=1` forces Nora fixture; LIVE mode is FAIL in smoke.
+- STABLE/RC still NOT AVAILABLE / NO RELEASE.
+
 ## Unreleased — ML1 LIVE qualification consolidation 2026-11-04
 
 - D1: `ensurePilotForAuthUser` backfills `github_user_id` after late GitHub account link without changing PilotId; conflict ≠ merge.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index a8ecf1ca..ac5b18fd 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -82,3 +82,37 @@ Append-only logical journal of Cursor product deliveries.
 | Lane | DEV |
 | Tests | unit 3; integration 22; Playwright 1; build+tsc; npm audit prod postcss closed |
 | Status | ML1 LOCAL QUALIFICATION REVIEWABLE candidate — no project push/PR/merge |
+
+## delivery_id: DELIV-2026-11-04-ML1-LOCAL-06-PRECOMMIT
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-04 (Europe/Paris) |
+| Macro-lot | R5 / ML1 first local project commit |
+| Type | INC / same vertical |
+| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
+| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
+| Commit | `0b982b3b6a09b16d7f5ae36f9794c3fc8b3614c2` (parent = base; unpublished) |
+| Changes | ML1 web vertical + D1 lane fail-closed emit; matrice temporal DESIGN ONLY vs DEV |
+| Product version | `NO RELEASE` |
+| Status | LOCAL COMMIT — awaiting ChatGPT review / Morris push gate |
+
+## delivery_id: DELIV-2026-11-04-ML1-LOCAL-07-PREPUSH-CORRECTIONS
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-04 (Europe/Paris) |
+| Macro-lot | R5 / ML1 targeted pre-push corrections (same lot) |
+| Type | INC corrective / Critical Review findings |
+| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
+| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
+| Parent commit | `0b982b3b6a09b16d7f5ae36f9794c3fc8b3614c2` (preserved) |
+| Commit | recorded as HEAD of this delivery commit (exact SHA in Review Pack / `git rev-parse HEAD` after commit; no silent second commit for circular SHA) |
+| Changes | A: strict loopback + DEV consume fail-closed; B: `db:migrate` 001→002 + fresh-container proof; C: owned E2E :3101 / `sfia_next_e2e` / Nora fixture-only |
+| Product version | `NO RELEASE` |
+| Lane | DEV |
+| Schema | `001` + `002` via `npm run db:migrate` |
+| Tests | unit / integration (incl. isolated migrate container) / Playwright FAKE E2E — see Review Pack |
+| Status | LOCAL CORRECTIVE candidate — no project push/PR/merge |
+
+Decision: self-SHA not written into the versioned row to avoid a circular amend; ChatGPT must resolve tip SHA from Git after the local commit.
diff --git a/projects/sfia-studio-next/web/README.md b/projects/sfia-studio-next/web/README.md
index 8d7af2f0..b341bb96 100644
--- a/projects/sfia-studio-next/web/README.md
+++ b/projects/sfia-studio-next/web/README.md
@@ -7,7 +7,7 @@ Technical package under `projects/sfia-studio-next/web`.
 
 - Node ≥ 20
 - Docker PostgreSQL DEV: container `sfia-next-dev-pg` on `127.0.0.1:5433`
-- `.env.local` (not committed) — see `.env.example`
+- `.env.local` (not committed) — see `.env.example` for required keys (blank placeholders only)
 
 ## Start DEV (port 3100)
 
@@ -19,23 +19,28 @@ docker start sfia-next-dev-pg || docker run -d --name sfia-next-dev-pg \
   -e POSTGRES_DB=sfia_next_dev \
   -p 127.0.0.1:5433:5432 postgres:16-alpine
 
-# Migrate
-docker exec -i sfia-next-dev-pg psql -U sfia_next_dev -d sfia_next_dev \
-  < src/db/migrations/001_initial_studio_core.sql
+# Migrate (applies 001_initial_studio_core.sql then 002_session_auth_mode.sql; ON_ERROR_STOP)
+npm run db:migrate
 
 # App
 npm install
 npm run dev
 ```
 
-Open `http://127.0.0.1:3100`. With `STUDIO_DEV_TEST_LOGIN=1`, use Pilote A/B on `/login`.
-**DEV login is not GitHub OAuth proof.**
+Override target DB when needed:
+
+```bash
+SFIA_PG_DATABASE=other_db npm run db:migrate
+```
+
+Open `http://127.0.0.1:3100`. With `STUDIO_DEV_TEST_LOGIN=1` and `STUDIO_LANE=DEV`, use Pilote A/B on `/login`.
+**DEV login is not GitHub OAuth proof.** Emission and consumption both require DEV lane + loopback.
 
 ## Stack
 
 - Next.js 15.5.29 (patched 15.5 line)
 - Better Auth = OAuth session authority → PilotId provisioning; DEV loopback login adapter (not OAuth proof)
-- OpenAI Agents SDK adapter (LIVE only with key)
+- OpenAI Agents SDK adapter (LIVE only with key and outside E2E fixture force)
 - Project reopen: `GET /api/projects/:projectId` (owner-scoped, no `preparationId` query required)
 
 ## Tests
@@ -46,13 +51,15 @@ npm run test:integration
 npm run test:e2e
 ```
 
+`test:e2e` starts an **owned** server on `127.0.0.1:3101` against isolated DB `sfia_next_e2e` (same Postgres instance, separate database). It forces Nora fixture FAKE (`STUDIO_E2E=1`, `OPENAI_API_KEY` neutralized) and does **not** reuse the operator DEV server on `:3100`. Operator data in `sfia_next_dev` (including project « Test 1 ») is untouched.
+
 ## Fake / Real boundaries
 
 | Boundary | Status |
 |---|---|
 | GitHub OAuth | BLOCKED without client secrets; simulated identity→Pilot tests are NOT LIVE proof |
-| PostgreSQL | REAL DEV container on 5433 |
-| Nora | Deterministic fixture unless `OPENAI_API_KEY` set (LIVE bounded) |
-| Browser | Playwright REAL local browser + DEV fake identity |
+| PostgreSQL | REAL DEV container on 5433 (`sfia_next_dev`); E2E uses sibling DB `sfia_next_e2e` |
+| Nora | Deterministic fixture unless `OPENAI_API_KEY` set outside E2E; E2E always fixture |
+| Browser | Playwright REAL local browser + DEV fake identity on owned :3101 |
 | Figma native | PENDING — see `docs/ux-figma-pending.md` |
 | RECETTE/STABLE | NOT AVAILABLE |
diff --git a/projects/sfia-studio-next/web/package.json b/projects/sfia-studio-next/web/package.json
index c4a709c8..ed567714 100644
--- a/projects/sfia-studio-next/web/package.json
+++ b/projects/sfia-studio-next/web/package.json
@@ -7,7 +7,7 @@
     "build": "next build",
     "start": "next start -p 3100 -H 127.0.0.1",
     "lint": "next lint",
-    "db:migrate": "docker exec -i sfia-next-dev-pg psql -U sfia_next_dev -d sfia_next_dev < src/db/migrations/001_initial_studio_core.sql",
+    "db:migrate": "bash scripts/db-migrate.sh",
     "test": "vitest run",
     "test:unit": "vitest run tests/unit",
     "test:integration": "vitest run tests/integration",
diff --git a/projects/sfia-studio-next/web/playwright.config.ts b/projects/sfia-studio-next/web/playwright.config.ts
index 0ad35221..884eb09d 100644
--- a/projects/sfia-studio-next/web/playwright.config.ts
+++ b/projects/sfia-studio-next/web/playwright.config.ts
@@ -1,16 +1,23 @@
 import { defineConfig } from "@playwright/test";
 
+/**
+ * ML1 E2E — owned isolated server on :3101 + dedicated DB `sfia_next_e2e`.
+ * reuseExistingServer: false — never attach to operator DEV (:3100) which may hold OPENAI_API_KEY.
+ * Nora is forced FAKE via STUDIO_E2E / neutralized OPENAI_API_KEY in scripts/e2e-web-server.sh.
+ */
 export default defineConfig({
   testDir: "tests/e2e",
-  timeout: 60_000,
+  timeout: 90_000,
+  fullyParallel: false,
+  workers: 1,
   use: {
-    baseURL: "http://127.0.0.1:3100",
+    baseURL: "http://127.0.0.1:3101",
     trace: "on-first-retry",
   },
   webServer: {
-    command: "npm run dev",
-    url: "http://127.0.0.1:3100/login",
-    reuseExistingServer: true,
-    timeout: 120_000,
+    command: "bash scripts/e2e-web-server.sh",
+    url: "http://127.0.0.1:3101/login",
+    reuseExistingServer: false,
+    timeout: 180_000,
   },
 });
diff --git a/projects/sfia-studio-next/web/scripts/db-migrate.sh b/projects/sfia-studio-next/web/scripts/db-migrate.sh
new file mode 100755
index 00000000..93098108
--- /dev/null
+++ b/projects/sfia-studio-next/web/scripts/db-migrate.sh
@@ -0,0 +1,23 @@
+#!/usr/bin/env bash
+# Apply studio core migrations in order on a target Postgres database.
+# Defaults target the local DEV container/database — never RECETTE/STABLE.
+# Fail-closed: any SQL error aborts the script (ON_ERROR_STOP + set -e).
+set -euo pipefail
+
+ROOT="$(cd "$(dirname "$0")/.." && pwd)"
+CONTAINER="${SFIA_PG_CONTAINER:-sfia-next-dev-pg}"
+DB_USER="${SFIA_PG_USER:-sfia_next_dev}"
+DB_NAME="${SFIA_PG_DATABASE:-sfia_next_dev}"
+MIGRATIONS_DIR="${ROOT}/src/db/migrations"
+
+apply() {
+  local file="$1"
+  echo "Applying ${file} → ${CONTAINER}/${DB_NAME}"
+  docker exec -i "${CONTAINER}" \
+    psql -v ON_ERROR_STOP=1 -U "${DB_USER}" -d "${DB_NAME}" \
+    < "${MIGRATIONS_DIR}/${file}"
+}
+
+apply "001_initial_studio_core.sql"
+apply "002_session_auth_mode.sql"
+echo "db:migrate OK (001 then 002)"
diff --git a/projects/sfia-studio-next/web/scripts/e2e-web-server.sh b/projects/sfia-studio-next/web/scripts/e2e-web-server.sh
new file mode 100755
index 00000000..273db91d
--- /dev/null
+++ b/projects/sfia-studio-next/web/scripts/e2e-web-server.sh
@@ -0,0 +1,51 @@
+#!/usr/bin/env bash
+# Owned Playwright webServer: isolated port + DB + Nora fixture force.
+# Never reuses the operator DEV server on :3100. Never calls OpenAI LIVE.
+set -euo pipefail
+
+ROOT="$(cd "$(dirname "$0")/.." && pwd)"
+cd "${ROOT}"
+
+CONTAINER="${SFIA_PG_CONTAINER:-sfia-next-dev-pg}"
+DB_USER="${SFIA_PG_USER:-sfia_next_dev}"
+E2E_DB="${SFIA_E2E_DATABASE:-sfia_next_e2e}"
+E2E_PORT="${SFIA_E2E_PORT:-3101}"
+
+# Create dedicated E2E database on the same Postgres instance (does NOT touch sfia_next_dev).
+exists="$(docker exec "${CONTAINER}" psql -U "${DB_USER}" -d postgres -tAc \
+  "SELECT 1 FROM pg_database WHERE datname='${E2E_DB}'" | tr -d '[:space:]')"
+if [[ "${exists}" != "1" ]]; then
+  docker exec "${CONTAINER}" psql -U "${DB_USER}" -d postgres -v ON_ERROR_STOP=1 \
+    -c "CREATE DATABASE ${E2E_DB} OWNER ${DB_USER};"
+fi
+
+SFIA_PG_DATABASE="${E2E_DB}" bash "${ROOT}/scripts/db-migrate.sh"
+
+# Derive DATABASE_URL for e2e DB from .env.local without printing secrets.
+E2E_DATABASE_URL="$(
+  SFIA_E2E_DATABASE="${E2E_DB}" node --input-type=module <<'NODE'
+import { config } from "dotenv";
+import { resolve } from "path";
+config({ path: resolve(process.cwd(), ".env.local") });
+const base = process.env.DATABASE_URL;
+if (!base) {
+  console.error("DATABASE_URL missing from .env.local — cannot start E2E server");
+  process.exit(1);
+}
+const u = new URL(base);
+u.pathname = `/${process.env.SFIA_E2E_DATABASE || "sfia_next_e2e"}`;
+process.stdout.write(u.toString());
+NODE
+)"
+
+export DATABASE_URL="${E2E_DATABASE_URL}"
+export STUDIO_LANE=DEV
+export STUDIO_DEV_TEST_LOGIN=1
+export STUDIO_E2E=1
+export STUDIO_FORCE_NORA_FIXTURE=1
+# Neutralize LIVE key for this process (Next does not override existing env with .env.local).
+export OPENAI_API_KEY=
+unset OPENAI_API_KEY
+export OPENAI_API_KEY=
+
+exec npx next dev --turbopack -p "${E2E_PORT}" -H 127.0.0.1
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 5354f4dd..bf336b11 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -18,30 +18,55 @@ const SYSTEM_INSTRUCTIONS =
   "Tu ne crées jamais de projet, cycle, dépôt Git ni mandat. " +
   "Aucun outil à effet externe n'est disponible. Réponds en français, concis.";
 
+/**
+ * Explicit fixture force — allowed only for DEV / automated E2E.
+ * Outside DEV (and without STUDIO_E2E), requesting a force is ignored for LIVE path
+ * and the caller must not treat that as a silent production kill-switch.
+ */
+export function mustUseNoraFixture(): boolean {
+  if (process.env.STUDIO_E2E === "1") return true;
+  if (process.env.STUDIO_FORCE_NORA_FIXTURE === "1") {
+    // Fail-closed outside DEV: force flag alone is not enough in non-DEV lanes.
+    return process.env.STUDIO_LANE === "DEV";
+  }
+  return false;
+}
+
+function fixtureReply(input: NoraGenerateInput, generationId: string): NoraGenerateResult {
+  const ctx = input.contextSnippets.slice(0, 3).join(" | ");
+  return {
+    generationId,
+    mode: "deterministic-fixture",
+    status: "COMPLETE",
+    streamingProvisional: false,
+    content:
+      `Nora (fixture FAKE, not LIVE): j'ai bien noté « ${input.userText.slice(0, 240)} ». ` +
+      `Je peux clarifier l'intention et proposer un aperçu de projet sans créer quoi que ce soit. ` +
+      (ctx ? `Contexte autorisé: ${ctx.slice(0, 200)}` : "Aucun acquis supplémentaire chargé."),
+  };
+}
+
 /**
  * D3 adapter — OpenAI Agents SDK behind this boundary when LIVE key present.
  * NEVER activates MemorySession / ConversationsSession as authority.
  * Without OPENAI_API_KEY: deterministic fixture only (NOT LIVE proof).
+ * STUDIO_E2E=1 / STUDIO_FORCE_NORA_FIXTURE=1 (DEV only): fixture even if a key is present —
+ * prevents Playwright reuse of a LIVE-keyed DEV server from emitting paid calls.
  */
 export async function generateNoraReply(input: NoraGenerateInput): Promise<NoraGenerateResult> {
   const generationId = newId("gen");
+
+  if (mustUseNoraFixture()) {
+    return fixtureReply(input, generationId);
+  }
+
   const key = process.env.OPENAI_API_KEY?.trim();
   if (!key) {
-    const ctx = input.contextSnippets.slice(0, 3).join(" | ");
-    return {
-      generationId,
-      mode: "deterministic-fixture",
-      status: "COMPLETE",
-      streamingProvisional: false,
-      content:
-        `Nora (fixture FAKE, not LIVE): j'ai bien noté « ${input.userText.slice(0, 240)} ». ` +
-        `Je peux clarifier l'intention et proposer un aperçu de projet sans créer quoi que ce soit. ` +
-        (ctx ? `Contexte autorisé: ${ctx.slice(0, 200)}` : "Aucun acquis supplémentaire chargé."),
-    };
+    return fixtureReply(input, generationId);
   }
 
   try {
-    // Dynamic import keeps fixture path free of SDK side-effects when no key.
+    // Dynamic import keeps fixture path free of SDK side-effects when no key / E2E.
     const { Agent, run } = await import("@openai/agents");
     const agent = new Agent({
       name: "Nora",
diff --git a/projects/sfia-studio-next/web/src/domains/identity/session.ts b/projects/sfia-studio-next/web/src/domains/identity/session.ts
index 568c33eb..6d6005f5 100644
--- a/projects/sfia-studio-next/web/src/domains/identity/session.ts
+++ b/projects/sfia-studio-next/web/src/domains/identity/session.ts
@@ -67,9 +67,22 @@ async function resolveBetterAuthStudioSession(): Promise<StudioSession | null> {
   }
 }
 
-async function resolveDevAdapterSession(): Promise<StudioSession | null> {
-  const jar = await cookies();
-  const token = jar.get(COOKIE)?.value;
+/**
+ * Consume-time gate for DEV test sessions.
+ * A cookie issued earlier must not remain valid once the lane leaves DEV or the adapter is disabled.
+ */
+export function isDevAdapterConsumeAllowed(): boolean {
+  return process.env.STUDIO_LANE === "DEV" && process.env.STUDIO_DEV_TEST_LOGIN === "1";
+}
+
+/**
+ * Consume path for a DEV adapter token (shared by cookie resolver and tests).
+ * Fail-closed when lane/adapter flags leave DEV — even if the row is unexpired.
+ */
+export async function resolveDevAdapterSessionByToken(
+  token: string,
+): Promise<StudioSession | null> {
+  if (!isDevAdapterConsumeAllowed()) return null;
   if (!token) return null;
 
   const rows = await db
@@ -101,6 +114,13 @@ async function resolveDevAdapterSession(): Promise<StudioSession | null> {
   };
 }
 
+async function resolveDevAdapterSession(): Promise<StudioSession | null> {
+  const jar = await cookies();
+  const token = jar.get(COOKIE)?.value;
+  if (!token) return null;
+  return resolveDevAdapterSessionByToken(token);
+}
+
 export async function requireStudioSession(): Promise<StudioSession> {
   const s = await resolveStudioSession();
   if (!s) {
@@ -126,15 +146,48 @@ export type DevLoginGateInput = {
   realIp?: string | null;
 };
 
-function isLoopbackHost(value: string | null | undefined): boolean {
-  const host = (value ?? "").toLowerCase().split(",")[0]?.trim() ?? "";
-  if (!host) return false;
-  return (
-    host.startsWith("127.0.0.1") ||
-    host.startsWith("localhost") ||
-    host.startsWith("[::1]") ||
-    host === "::1"
-  );
+/**
+ * Exact loopback authority check — no prefix/suffix tricks (e.g. localhost.attacker.example).
+ * Allows: localhost[:port], 127.0.0.1[:port], [::1][:port], ::1.
+ * Rejects: commas/multi-value, userinfo, empty, non-loopback, invalid ports.
+ */
+export function isApprovedLoopbackAuthority(value: string | null | undefined): boolean {
+  if (value == null) return false;
+  const raw = value.trim().toLowerCase();
+  if (!raw) return false;
+  // Ambiguous multi-value header — never trust a partial first element.
+  if (raw.includes(",")) return false;
+  if (raw.includes("@")) return false;
+  if (/\s/.test(raw)) return false;
+
+  if (raw === "::1") return true;
+
+  const v4 = /^(127\.0\.0\.1)(?::(\d{1,5}))?$/.exec(raw);
+  if (v4) return isValidPort(v4[2]);
+
+  const local = /^(localhost)(?::(\d{1,5}))?$/.exec(raw);
+  if (local) return isValidPort(local[2]);
+
+  const v6 = /^\[::1\](?::(\d{1,5}))?$/.exec(raw);
+  if (v6) return isValidPort(v6[1]);
+
+  return false;
+}
+
+function isValidPort(port: string | undefined): boolean {
+  if (port === undefined) return true;
+  const n = Number(port);
+  return Number.isInteger(n) && n >= 1 && n <= 65535;
+}
+
+/**
+ * X-Forwarded-For / client IP: exactly one loopback address, no ports, no chain.
+ */
+export function isApprovedLoopbackClientIp(value: string | null | undefined): boolean {
+  if (value == null || value.trim() === "") return false;
+  const raw = value.trim().toLowerCase();
+  if (raw.includes(",") || raw.includes("@") || /\s/.test(raw)) return false;
+  return raw === "127.0.0.1" || raw === "::1" || raw === "[::1]";
 }
 
 function assertDevTestLoginAllowed(gate: DevLoginGateInput) {
@@ -146,17 +199,17 @@ function assertDevTestLoginAllowed(gate: DevLoginGateInput) {
     throw new Error("DEV_TEST_LOGIN_LANE_FORBIDDEN");
   }
   // Host alone is forgeable. Next DEV may set x-forwarded-* to loopback — allow only if
-  // every present forwarding signal is itself loopback. Non-loopback forward = reject.
-  if (!isLoopbackHost(gate.host)) {
+  // every present forwarding signal is itself an exact loopback authority.
+  if (!isApprovedLoopbackAuthority(gate.host)) {
     throw new Error("DEV_TEST_LOGIN_HOST_FORBIDDEN");
   }
-  if (gate.forwardedHost && !isLoopbackHost(gate.forwardedHost)) {
+  if (gate.forwardedHost != null && gate.forwardedHost !== "" && !isApprovedLoopbackAuthority(gate.forwardedHost)) {
     throw new Error("DEV_TEST_LOGIN_PROXY_FORBIDDEN");
   }
-  if (gate.forwardedFor && !isLoopbackHost(gate.forwardedFor)) {
+  if (gate.forwardedFor != null && gate.forwardedFor !== "" && !isApprovedLoopbackClientIp(gate.forwardedFor)) {
     throw new Error("DEV_TEST_LOGIN_PROXY_FORBIDDEN");
   }
-  if (gate.realIp && !isLoopbackHost(gate.realIp)) {
+  if (gate.realIp != null && gate.realIp !== "" && !isApprovedLoopbackClientIp(gate.realIp)) {
     throw new Error("DEV_TEST_LOGIN_PROXY_FORBIDDEN");
   }
 }
diff --git a/projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
index 600bce67..debfca36 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
@@ -1,7 +1,7 @@
 import { test, expect } from "@playwright/test";
 import path from "path";
 
-test("DEV fake login → sas → message → document → create → portfolio reopen by projectId", async ({
+test("DEV fake login → sas → message Nora FAKE → document → create → portfolio reopen by projectId", async ({
   page,
   context,
 }) => {
@@ -16,12 +16,13 @@ test("DEV fake login → sas → message → document → create → portfolio r
 
   await page.getByPlaceholder("Écrire à Nora…").fill("Bonjour Nora depuis Playwright");
   await page.getByRole("button", { name: "Envoyer" }).click();
-  // DEV may run fixture FAKE or Agents SDK LIVE depending on OPENAI_API_KEY presence.
-  await expect(
-    page.getByText(/Nora (deterministic-fixture|openai-agents-sdk-live) · COMPLETE|Nora \(fixture FAKE, not LIVE\)/, {
-      exact: false,
-    }),
-  ).toBeVisible({ timeout: 30000 });
+
+  // Automated E2E MUST be fixture FAKE — LIVE mode is a hard FAIL (paid/network boundary).
+  await expect(page.getByText("openai-agents-sdk-live")).toHaveCount(0);
+  await expect(page.getByText("Nora (fixture FAKE, not LIVE)", { exact: false })).toBeVisible({
+    timeout: 30000,
+  });
+  await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible();
 
   await page.getByPlaceholder("Nom du projet").fill("Projet Playwright");
   await page.getByPlaceholder("Résumé inspecté").fill("résumé test");
diff --git a/projects/sfia-studio-next/web/tests/integration/identity-session.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/identity-session.pg.test.ts
index 4e47024d..377bdb1b 100644
--- a/projects/sfia-studio-next/web/tests/integration/identity-session.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/identity-session.pg.test.ts
@@ -83,9 +83,11 @@ describe("D1 identity → Pilot provisioning (simulated OAuth association)", ()
     expect(a.pilotId).not.toBe(b.pilotId);
   });
 
-  it("DEV login gate rejects absent/non-DEV lane, non-loopback Host/proxy; allows DEV+loopback", async () => {
+  it("DEV login gate rejects absent/non-DEV lane, spoof Host/proxy; allows DEV+loopback", async () => {
     const prevLane = process.env.STUDIO_LANE;
+    const prevLogin = process.env.STUDIO_DEV_TEST_LOGIN;
     try {
+      process.env.STUDIO_DEV_TEST_LOGIN = "1";
       delete process.env.STUDIO_LANE;
       await expect(
         createDevTestSession("a", { host: "127.0.0.1:3100" }),
@@ -104,6 +106,13 @@ describe("D1 identity → Pilot provisioning (simulated OAuth association)", ()
         }),
       ).rejects.toThrow(/PROXY_FORBIDDEN/);
 
+      await expect(
+        createDevTestSession("a", {
+          host: "127.0.0.1:3100",
+          forwardedFor: "127.0.0.1, 1.2.3.4",
+        }),
+      ).rejects.toThrow(/PROXY_FORBIDDEN/);
+
       await expect(
         createDevTestSession("a", {
           host: "127.0.0.1:3100",
@@ -115,6 +124,20 @@ describe("D1 identity → Pilot provisioning (simulated OAuth association)", ()
         createDevTestSession("a", { host: "evil.example.com" }),
       ).rejects.toThrow(/HOST_FORBIDDEN/);
 
+      await expect(
+        createDevTestSession("a", { host: "localhost.attacker.example" }),
+      ).rejects.toThrow(/HOST_FORBIDDEN/);
+
+      await expect(
+        createDevTestSession("a", { host: "127.0.0.1.attacker.example" }),
+      ).rejects.toThrow(/HOST_FORBIDDEN/);
+
+      process.env.STUDIO_DEV_TEST_LOGIN = "0";
+      await expect(
+        createDevTestSession("a", { host: "127.0.0.1:3100" }),
+      ).rejects.toThrow(/DISABLED/);
+      process.env.STUDIO_DEV_TEST_LOGIN = "1";
+
       // Next DEV often mirrors loopback into x-forwarded-* — still allowed.
       const created = await createDevTestSession("a", {
         host: "127.0.0.1:3100",
@@ -129,6 +152,38 @@ describe("D1 identity → Pilot provisioning (simulated OAuth association)", ()
     } finally {
       if (prevLane === undefined) delete process.env.STUDIO_LANE;
       else process.env.STUDIO_LANE = prevLane;
+      if (prevLogin === undefined) delete process.env.STUDIO_DEV_TEST_LOGIN;
+      else process.env.STUDIO_DEV_TEST_LOGIN = prevLogin;
+    }
+  });
+
+  it("already-issued DEV cookie/token fails closed after lane leaves DEV", async () => {
+    const { resolveDevAdapterSessionByToken } = await import("@/domains/identity/session");
+    const prevLane = process.env.STUDIO_LANE;
+    const prevLogin = process.env.STUDIO_DEV_TEST_LOGIN;
+    try {
+      process.env.STUDIO_LANE = "DEV";
+      process.env.STUDIO_DEV_TEST_LOGIN = "1";
+      const created = await createDevTestSession("a", { host: "127.0.0.1:3100" });
+
+      const ok = await resolveDevAdapterSessionByToken(created.token);
+      expect(ok?.sessionId).toBe(created.sessionId);
+      expect(ok?.authMode).toBe("dev-test-login");
+
+      process.env.STUDIO_LANE = "RECETTE";
+      expect(await resolveDevAdapterSessionByToken(created.token)).toBeNull();
+
+      process.env.STUDIO_LANE = "DEV";
+      process.env.STUDIO_DEV_TEST_LOGIN = "0";
+      expect(await resolveDevAdapterSessionByToken(created.token)).toBeNull();
+
+      process.env.STUDIO_DEV_TEST_LOGIN = "1";
+      await revokeSession(created.sessionId);
+    } finally {
+      if (prevLane === undefined) delete process.env.STUDIO_LANE;
+      else process.env.STUDIO_LANE = prevLane;
+      if (prevLogin === undefined) delete process.env.STUDIO_DEV_TEST_LOGIN;
+      else process.env.STUDIO_DEV_TEST_LOGIN = prevLogin;
     }
   });
 
diff --git a/projects/sfia-studio-next/web/tests/integration/migrations-fresh.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/migrations-fresh.pg.test.ts
new file mode 100644
index 00000000..203d2276
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/integration/migrations-fresh.pg.test.ts
@@ -0,0 +1,151 @@
+/**
+ * Fresh-install migration proof on an isolated temporary Postgres container.
+ * Does NOT touch sfia-next-dev-pg / sfia_next_dev / project "Test 1".
+ */
+import { afterAll, beforeAll, describe, expect, it } from "vitest";
+import { execFileSync, execSync } from "node:child_process";
+import { readFileSync } from "node:fs";
+import { resolve } from "node:path";
+import postgres from "postgres";
+
+const CONTAINER = `sfia-next-migtest-${process.pid}-${Date.now()}`;
+const HOST_PORT = 55432 + (process.pid % 200);
+const PASSWORD = "migtest-local-only";
+const USER = "sfia_mig";
+const DB = "sfia_mig";
+const migrationsDir = resolve(__dirname, "../../src/db/migrations");
+
+function dockerOk(): boolean {
+  try {
+    execSync("docker info", { stdio: "ignore" });
+    return true;
+  } catch {
+    return false;
+  }
+}
+
+function applySql(file: string, database = DB) {
+  const sql = readFileSync(resolve(migrationsDir, file), "utf8");
+  execFileSync(
+    "docker",
+    ["exec", "-i", CONTAINER, "psql", "-v", "ON_ERROR_STOP=1", "-U", USER, "-d", database],
+    { input: sql, stdio: ["pipe", "pipe", "pipe"] },
+  );
+}
+
+describe.skipIf(!dockerOk())("migrations 001→002 on fresh isolated Postgres", () => {
+  let sql: ReturnType<typeof postgres> | null = null;
+
+  beforeAll(async () => {
+    execFileSync(
+      "docker",
+      [
+        "run",
+        "-d",
+        "--rm",
+        "--name",
+        CONTAINER,
+        "-e",
+        `POSTGRES_USER=${USER}`,
+        "-e",
+        `POSTGRES_PASSWORD=${PASSWORD}`,
+        "-e",
+        `POSTGRES_DB=${DB}`,
+        "-p",
+        `127.0.0.1:${HOST_PORT}:5432`,
+        "postgres:16-alpine",
+      ],
+      { stdio: "pipe" },
+    );
+
+    // Wait until the named DB accepts SQL (pg_isready alone can race ahead of initdb).
+    const deadline = Date.now() + 90_000;
+    for (;;) {
+      try {
+        execFileSync(
+          "docker",
+          [
+            "exec",
+            CONTAINER,
+            "psql",
+            "-U",
+            USER,
+            "-d",
+            DB,
+            "-v",
+            "ON_ERROR_STOP=1",
+            "-c",
+            "SELECT 1;",
+          ],
+          { stdio: "pipe" },
+        );
+        break;
+      } catch {
+        if (Date.now() > deadline) {
+          throw new Error(`TIMEOUT waiting for ${CONTAINER}/${DB} on :${HOST_PORT}`);
+        }
+        await new Promise((r) => setTimeout(r, 500));
+      }
+    }
+
+    sql = postgres(`postgres://${USER}:${PASSWORD}@127.0.0.1:${HOST_PORT}/${DB}`, {
+      max: 1,
+    });
+  }, 90_000);
+
+  afterAll(async () => {
+    await sql?.end({ timeout: 5 }).catch(() => undefined);
+    try {
+      execFileSync("docker", ["rm", "-f", CONTAINER], { stdio: "pipe" });
+    } catch {
+      /* already removed */
+    }
+  }, 30_000);
+
+  it("applies 001 then 002; auth_mode exists with default; DEV session insert works", async () => {
+    applySql("001_initial_studio_core.sql");
+    applySql("002_session_auth_mode.sql");
+
+    const cols = await sql!`
+      SELECT column_name, column_default, is_nullable
+      FROM information_schema.columns
+      WHERE table_name = 'sessions' AND column_name = 'auth_mode'
+    `;
+    expect(cols).toHaveLength(1);
+    expect(String(cols[0].column_default)).toMatch(/unknown/);
+    expect(cols[0].is_nullable).toBe("NO");
+
+    await sql!`INSERT INTO pilots (id, display_name) VALUES ('pilot_mig', 'Mig Pilot')`;
+    await sql!`
+      INSERT INTO users (id, name, email, email_verified, pilot_id)
+      VALUES ('user_mig', 'Mig', 'mig@local', true, 'pilot_mig')
+    `;
+    await sql!`
+      INSERT INTO sessions (id, token, user_id, expires_at, auth_mode)
+      VALUES (
+        'sid_mig',
+        'tok_mig',
+        'user_mig',
+        now() + interval '1 day',
+        'dev-test-login'
+      )
+    `;
+    const rows = await sql!`SELECT auth_mode FROM sessions WHERE id = 'sid_mig'`;
+    expect(rows[0].auth_mode).toBe("dev-test-login");
+  });
+
+  it("re-applying 001+002 is idempotent (IF NOT EXISTS / IF NOT EXISTS column)", () => {
+    expect(() => applySql("001_initial_studio_core.sql")).not.toThrow();
+    expect(() => applySql("002_session_auth_mode.sql")).not.toThrow();
+  });
+
+  it("controlled failure when a migration SQL is broken (ON_ERROR_STOP)", () => {
+    expect(() => {
+      execFileSync(
+        "docker",
+        ["exec", "-i", CONTAINER, "psql", "-v", "ON_ERROR_STOP=1", "-U", USER, "-d", DB],
+        { input: "SELECT 1; SELECT * FROM definitely_missing_relation_xyz;", stdio: "pipe" },
+      );
+    }).toThrow();
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/dev-login-host.test.ts b/projects/sfia-studio-next/web/tests/unit/dev-login-host.test.ts
new file mode 100644
index 00000000..a0f5fe2b
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/dev-login-host.test.ts
@@ -0,0 +1,110 @@
+import { describe, expect, it, afterEach } from "vitest";
+import {
+  isApprovedLoopbackAuthority,
+  isApprovedLoopbackClientIp,
+  isDevAdapterConsumeAllowed,
+} from "@/domains/identity/session";
+import { mustUseNoraFixture } from "@/domains/conversation/nora-adapter";
+
+describe("DEV loopback authority (strict)", () => {
+  it("accepts exact loopback forms used by local Next", () => {
+    expect(isApprovedLoopbackAuthority("127.0.0.1")).toBe(true);
+    expect(isApprovedLoopbackAuthority("127.0.0.1:3100")).toBe(true);
+    expect(isApprovedLoopbackAuthority("localhost")).toBe(true);
+    expect(isApprovedLoopbackAuthority("localhost:3100")).toBe(true);
+    expect(isApprovedLoopbackAuthority("[::1]")).toBe(true);
+    expect(isApprovedLoopbackAuthority("[::1]:3100")).toBe(true);
+    expect(isApprovedLoopbackAuthority("::1")).toBe(true);
+  });
+
+  it("rejects prefix/suffix spoof and malformed Host", () => {
+    expect(isApprovedLoopbackAuthority("localhost.attacker.example")).toBe(false);
+    expect(isApprovedLoopbackAuthority("127.0.0.1.attacker.example")).toBe(false);
+    expect(isApprovedLoopbackAuthority("evil.localhost")).toBe(false);
+    expect(isApprovedLoopbackAuthority("127.0.0.1:99999")).toBe(false);
+    expect(isApprovedLoopbackAuthority("user@127.0.0.1")).toBe(false);
+    expect(isApprovedLoopbackAuthority("127.0.0.1,evil.com")).toBe(false);
+    expect(isApprovedLoopbackAuthority("evil.example.com")).toBe(false);
+    expect(isApprovedLoopbackAuthority("")).toBe(false);
+    expect(isApprovedLoopbackAuthority(null)).toBe(false);
+  });
+
+  it("rejects ambiguous or external X-Forwarded-For chains", () => {
+    expect(isApprovedLoopbackClientIp("127.0.0.1")).toBe(true);
+    expect(isApprovedLoopbackClientIp("::1")).toBe(true);
+    expect(isApprovedLoopbackClientIp("1.2.3.4")).toBe(false);
+    expect(isApprovedLoopbackClientIp("127.0.0.1, 1.2.3.4")).toBe(false);
+    expect(isApprovedLoopbackClientIp("127.0.0.1,127.0.0.1")).toBe(false);
+    expect(isApprovedLoopbackClientIp("127.0.0.1:3100")).toBe(false);
+  });
+});
+
+describe("DEV adapter consume gate", () => {
+  const prevLane = process.env.STUDIO_LANE;
+  const prevLogin = process.env.STUDIO_DEV_TEST_LOGIN;
+
+  afterEach(() => {
+    if (prevLane === undefined) delete process.env.STUDIO_LANE;
+    else process.env.STUDIO_LANE = prevLane;
+    if (prevLogin === undefined) delete process.env.STUDIO_DEV_TEST_LOGIN;
+    else process.env.STUDIO_DEV_TEST_LOGIN = prevLogin;
+  });
+
+  it("allows consume only when STUDIO_LANE=DEV and STUDIO_DEV_TEST_LOGIN=1", () => {
+    process.env.STUDIO_LANE = "DEV";
+    process.env.STUDIO_DEV_TEST_LOGIN = "1";
+    expect(isDevAdapterConsumeAllowed()).toBe(true);
+
+    process.env.STUDIO_LANE = "RECETTE";
+    expect(isDevAdapterConsumeAllowed()).toBe(false);
+
+    process.env.STUDIO_LANE = "STABLE";
+    expect(isDevAdapterConsumeAllowed()).toBe(false);
+
+    delete process.env.STUDIO_LANE;
+    process.env.STUDIO_DEV_TEST_LOGIN = "1";
+    expect(isDevAdapterConsumeAllowed()).toBe(false);
+
+    process.env.STUDIO_LANE = "DEV";
+    process.env.STUDIO_DEV_TEST_LOGIN = "0";
+    expect(isDevAdapterConsumeAllowed()).toBe(false);
+
+    delete process.env.STUDIO_DEV_TEST_LOGIN;
+    process.env.STUDIO_LANE = "DEV";
+    expect(isDevAdapterConsumeAllowed()).toBe(false);
+  });
+});
+
+describe("Nora fixture force boundary", () => {
+  const prev = {
+    e2e: process.env.STUDIO_E2E,
+    force: process.env.STUDIO_FORCE_NORA_FIXTURE,
+    lane: process.env.STUDIO_LANE,
+  };
+
+  afterEach(() => {
+    for (const [k, v] of Object.entries({
+      STUDIO_E2E: prev.e2e,
+      STUDIO_FORCE_NORA_FIXTURE: prev.force,
+      STUDIO_LANE: prev.lane,
+    })) {
+      if (v === undefined) delete process.env[k];
+      else process.env[k] = v;
+    }
+  });
+
+  it("STUDIO_E2E=1 forces fixture regardless of lane (owned E2E runner)", () => {
+    process.env.STUDIO_E2E = "1";
+    process.env.STUDIO_LANE = "RECETTE";
+    expect(mustUseNoraFixture()).toBe(true);
+  });
+
+  it("STUDIO_FORCE_NORA_FIXTURE=1 only forces fixture in DEV", () => {
+    delete process.env.STUDIO_E2E;
+    process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
+    process.env.STUDIO_LANE = "DEV";
+    expect(mustUseNoraFixture()).toBe(true);
+    process.env.STUDIO_LANE = "RECETTE";
+    expect(mustUseNoraFixture()).toBe(false);
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/nora-e2e-fixture.test.ts b/projects/sfia-studio-next/web/tests/unit/nora-e2e-fixture.test.ts
new file mode 100644
index 00000000..2fea9144
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/nora-e2e-fixture.test.ts
@@ -0,0 +1,38 @@
+import { describe, expect, it, afterEach } from "vitest";
+import { generateNoraReply } from "@/domains/conversation/nora-adapter";
+
+describe("Nora E2E fixture isolation", () => {
+  const prev = {
+    e2e: process.env.STUDIO_E2E,
+    key: process.env.OPENAI_API_KEY,
+    force: process.env.STUDIO_FORCE_NORA_FIXTURE,
+    lane: process.env.STUDIO_LANE,
+  };
+
+  afterEach(() => {
+    const map: Record<string, string | undefined> = {
+      STUDIO_E2E: prev.e2e,
+      OPENAI_API_KEY: prev.key,
+      STUDIO_FORCE_NORA_FIXTURE: prev.force,
+      STUDIO_LANE: prev.lane,
+    };
+    for (const [k, v] of Object.entries(map)) {
+      if (v === undefined) delete process.env[k];
+      else process.env[k] = v;
+    }
+  });
+
+  it("STUDIO_E2E=1 returns deterministic-fixture even when OPENAI_API_KEY is set (no LIVE path)", async () => {
+    process.env.STUDIO_E2E = "1";
+    process.env.STUDIO_LANE = "DEV";
+    process.env.OPENAI_API_KEY = "sk-test-must-not-be-used";
+    const result = await generateNoraReply({
+      userText: "ping e2e isolation",
+      contextSnippets: [],
+    });
+    expect(result.mode).toBe("deterministic-fixture");
+    expect(result.status).toBe("COMPLETE");
+    expect(result.content).toMatch(/fixture FAKE/);
+    expect(result.content).not.toMatch(/openai-agents-sdk-live/);
+  });
+});
```

## Full contents of new files

### `projects/sfia-studio-next/web/scripts/db-migrate.sh`
```
#!/usr/bin/env bash
# Apply studio core migrations in order on a target Postgres database.
# Defaults target the local DEV container/database — never RECETTE/STABLE.
# Fail-closed: any SQL error aborts the script (ON_ERROR_STOP + set -e).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CONTAINER="${SFIA_PG_CONTAINER:-sfia-next-dev-pg}"
DB_USER="${SFIA_PG_USER:-sfia_next_dev}"
DB_NAME="${SFIA_PG_DATABASE:-sfia_next_dev}"
MIGRATIONS_DIR="${ROOT}/src/db/migrations"

apply() {
  local file="$1"
  echo "Applying ${file} → ${CONTAINER}/${DB_NAME}"
  docker exec -i "${CONTAINER}" \
    psql -v ON_ERROR_STOP=1 -U "${DB_USER}" -d "${DB_NAME}" \
    < "${MIGRATIONS_DIR}/${file}"
}

apply "001_initial_studio_core.sql"
apply "002_session_auth_mode.sql"
echo "db:migrate OK (001 then 002)"
```

### `projects/sfia-studio-next/web/scripts/e2e-web-server.sh`
```
#!/usr/bin/env bash
# Owned Playwright webServer: isolated port + DB + Nora fixture force.
# Never reuses the operator DEV server on :3100. Never calls OpenAI LIVE.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "${ROOT}"

CONTAINER="${SFIA_PG_CONTAINER:-sfia-next-dev-pg}"
DB_USER="${SFIA_PG_USER:-sfia_next_dev}"
E2E_DB="${SFIA_E2E_DATABASE:-sfia_next_e2e}"
E2E_PORT="${SFIA_E2E_PORT:-3101}"

# Create dedicated E2E database on the same Postgres instance (does NOT touch sfia_next_dev).
exists="$(docker exec "${CONTAINER}" psql -U "${DB_USER}" -d postgres -tAc \
  "SELECT 1 FROM pg_database WHERE datname='${E2E_DB}'" | tr -d '[:space:]')"
if [[ "${exists}" != "1" ]]; then
  docker exec "${CONTAINER}" psql -U "${DB_USER}" -d postgres -v ON_ERROR_STOP=1 \
    -c "CREATE DATABASE ${E2E_DB} OWNER ${DB_USER};"
fi

SFIA_PG_DATABASE="${E2E_DB}" bash "${ROOT}/scripts/db-migrate.sh"

# Derive DATABASE_URL for e2e DB from .env.local without printing secrets.
E2E_DATABASE_URL="$(
  SFIA_E2E_DATABASE="${E2E_DB}" node --input-type=module <<'NODE'
import { config } from "dotenv";
import { resolve } from "path";
config({ path: resolve(process.cwd(), ".env.local") });
const base = process.env.DATABASE_URL;
if (!base) {
  console.error("DATABASE_URL missing from .env.local — cannot start E2E server");
  process.exit(1);
}
const u = new URL(base);
u.pathname = `/${process.env.SFIA_E2E_DATABASE || "sfia_next_e2e"}`;
process.stdout.write(u.toString());
NODE
)"

export DATABASE_URL="${E2E_DATABASE_URL}"
export STUDIO_LANE=DEV
export STUDIO_DEV_TEST_LOGIN=1
export STUDIO_E2E=1
export STUDIO_FORCE_NORA_FIXTURE=1
# Neutralize LIVE key for this process (Next does not override existing env with .env.local).
export OPENAI_API_KEY=
unset OPENAI_API_KEY
export OPENAI_API_KEY=

exec npx next dev --turbopack -p "${E2E_PORT}" -H 127.0.0.1
```

### `projects/sfia-studio-next/web/tests/integration/migrations-fresh.pg.test.ts`
```
/**
 * Fresh-install migration proof on an isolated temporary Postgres container.
 * Does NOT touch sfia-next-dev-pg / sfia_next_dev / project "Test 1".
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { execFileSync, execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import postgres from "postgres";

const CONTAINER = `sfia-next-migtest-${process.pid}-${Date.now()}`;
const HOST_PORT = 55432 + (process.pid % 200);
const PASSWORD = "migtest-local-only";
const USER = "sfia_mig";
const DB = "sfia_mig";
const migrationsDir = resolve(__dirname, "../../src/db/migrations");

function dockerOk(): boolean {
  try {
    execSync("docker info", { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

function applySql(file: string, database = DB) {
  const sql = readFileSync(resolve(migrationsDir, file), "utf8");
  execFileSync(
    "docker",
    ["exec", "-i", CONTAINER, "psql", "-v", "ON_ERROR_STOP=1", "-U", USER, "-d", database],
    { input: sql, stdio: ["pipe", "pipe", "pipe"] },
  );
}

describe.skipIf(!dockerOk())("migrations 001→002 on fresh isolated Postgres", () => {
  let sql: ReturnType<typeof postgres> | null = null;

  beforeAll(async () => {
    execFileSync(
      "docker",
      [
        "run",
        "-d",
        "--rm",
        "--name",
        CONTAINER,
        "-e",
        `POSTGRES_USER=${USER}`,
        "-e",
        `POSTGRES_PASSWORD=${PASSWORD}`,
        "-e",
        `POSTGRES_DB=${DB}`,
        "-p",
        `127.0.0.1:${HOST_PORT}:5432`,
        "postgres:16-alpine",
      ],
      { stdio: "pipe" },
    );

    // Wait until the named DB accepts SQL (pg_isready alone can race ahead of initdb).
    const deadline = Date.now() + 90_000;
    for (;;) {
      try {
        execFileSync(
          "docker",
          [
            "exec",
            CONTAINER,
            "psql",
            "-U",
            USER,
            "-d",
            DB,
            "-v",
            "ON_ERROR_STOP=1",
            "-c",
            "SELECT 1;",
          ],
          { stdio: "pipe" },
        );
        break;
      } catch {
        if (Date.now() > deadline) {
          throw new Error(`TIMEOUT waiting for ${CONTAINER}/${DB} on :${HOST_PORT}`);
        }
        await new Promise((r) => setTimeout(r, 500));
      }
    }

    sql = postgres(`postgres://${USER}:${PASSWORD}@127.0.0.1:${HOST_PORT}/${DB}`, {
      max: 1,
    });
  }, 90_000);

  afterAll(async () => {
    await sql?.end({ timeout: 5 }).catch(() => undefined);
    try {
      execFileSync("docker", ["rm", "-f", CONTAINER], { stdio: "pipe" });
    } catch {
      /* already removed */
    }
  }, 30_000);

  it("applies 001 then 002; auth_mode exists with default; DEV session insert works", async () => {
    applySql("001_initial_studio_core.sql");
    applySql("002_session_auth_mode.sql");

    const cols = await sql!`
      SELECT column_name, column_default, is_nullable
      FROM information_schema.columns
      WHERE table_name = 'sessions' AND column_name = 'auth_mode'
    `;
    expect(cols).toHaveLength(1);
    expect(String(cols[0].column_default)).toMatch(/unknown/);
    expect(cols[0].is_nullable).toBe("NO");

    await sql!`INSERT INTO pilots (id, display_name) VALUES ('pilot_mig', 'Mig Pilot')`;
    await sql!`
      INSERT INTO users (id, name, email, email_verified, pilot_id)
      VALUES ('user_mig', 'Mig', 'mig@local', true, 'pilot_mig')
    `;
    await sql!`
      INSERT INTO sessions (id, token, user_id, expires_at, auth_mode)
      VALUES (
        'sid_mig',
        'tok_mig',
        'user_mig',
        now() + interval '1 day',
        'dev-test-login'
      )
    `;
    const rows = await sql!`SELECT auth_mode FROM sessions WHERE id = 'sid_mig'`;
    expect(rows[0].auth_mode).toBe("dev-test-login");
  });

  it("re-applying 001+002 is idempotent (IF NOT EXISTS / IF NOT EXISTS column)", () => {
    expect(() => applySql("001_initial_studio_core.sql")).not.toThrow();
    expect(() => applySql("002_session_auth_mode.sql")).not.toThrow();
  });

  it("controlled failure when a migration SQL is broken (ON_ERROR_STOP)", () => {
    expect(() => {
      execFileSync(
        "docker",
        ["exec", "-i", CONTAINER, "psql", "-v", "ON_ERROR_STOP=1", "-U", USER, "-d", DB],
        { input: "SELECT 1; SELECT * FROM definitely_missing_relation_xyz;", stdio: "pipe" },
      );
    }).toThrow();
  });
});
```

### `projects/sfia-studio-next/web/tests/unit/dev-login-host.test.ts`
```
import { describe, expect, it, afterEach } from "vitest";
import {
  isApprovedLoopbackAuthority,
  isApprovedLoopbackClientIp,
  isDevAdapterConsumeAllowed,
} from "@/domains/identity/session";
import { mustUseNoraFixture } from "@/domains/conversation/nora-adapter";

describe("DEV loopback authority (strict)", () => {
  it("accepts exact loopback forms used by local Next", () => {
    expect(isApprovedLoopbackAuthority("127.0.0.1")).toBe(true);
    expect(isApprovedLoopbackAuthority("127.0.0.1:3100")).toBe(true);
    expect(isApprovedLoopbackAuthority("localhost")).toBe(true);
    expect(isApprovedLoopbackAuthority("localhost:3100")).toBe(true);
    expect(isApprovedLoopbackAuthority("[::1]")).toBe(true);
    expect(isApprovedLoopbackAuthority("[::1]:3100")).toBe(true);
    expect(isApprovedLoopbackAuthority("::1")).toBe(true);
  });

  it("rejects prefix/suffix spoof and malformed Host", () => {
    expect(isApprovedLoopbackAuthority("localhost.attacker.example")).toBe(false);
    expect(isApprovedLoopbackAuthority("127.0.0.1.attacker.example")).toBe(false);
    expect(isApprovedLoopbackAuthority("evil.localhost")).toBe(false);
    expect(isApprovedLoopbackAuthority("127.0.0.1:99999")).toBe(false);
    expect(isApprovedLoopbackAuthority("user@127.0.0.1")).toBe(false);
    expect(isApprovedLoopbackAuthority("127.0.0.1,evil.com")).toBe(false);
    expect(isApprovedLoopbackAuthority("evil.example.com")).toBe(false);
    expect(isApprovedLoopbackAuthority("")).toBe(false);
    expect(isApprovedLoopbackAuthority(null)).toBe(false);
  });

  it("rejects ambiguous or external X-Forwarded-For chains", () => {
    expect(isApprovedLoopbackClientIp("127.0.0.1")).toBe(true);
    expect(isApprovedLoopbackClientIp("::1")).toBe(true);
    expect(isApprovedLoopbackClientIp("1.2.3.4")).toBe(false);
    expect(isApprovedLoopbackClientIp("127.0.0.1, 1.2.3.4")).toBe(false);
    expect(isApprovedLoopbackClientIp("127.0.0.1,127.0.0.1")).toBe(false);
    expect(isApprovedLoopbackClientIp("127.0.0.1:3100")).toBe(false);
  });
});

describe("DEV adapter consume gate", () => {
  const prevLane = process.env.STUDIO_LANE;
  const prevLogin = process.env.STUDIO_DEV_TEST_LOGIN;

  afterEach(() => {
    if (prevLane === undefined) delete process.env.STUDIO_LANE;
    else process.env.STUDIO_LANE = prevLane;
    if (prevLogin === undefined) delete process.env.STUDIO_DEV_TEST_LOGIN;
    else process.env.STUDIO_DEV_TEST_LOGIN = prevLogin;
  });

  it("allows consume only when STUDIO_LANE=DEV and STUDIO_DEV_TEST_LOGIN=1", () => {
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_DEV_TEST_LOGIN = "1";
    expect(isDevAdapterConsumeAllowed()).toBe(true);

    process.env.STUDIO_LANE = "RECETTE";
    expect(isDevAdapterConsumeAllowed()).toBe(false);

    process.env.STUDIO_LANE = "STABLE";
    expect(isDevAdapterConsumeAllowed()).toBe(false);

    delete process.env.STUDIO_LANE;
    process.env.STUDIO_DEV_TEST_LOGIN = "1";
    expect(isDevAdapterConsumeAllowed()).toBe(false);

    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_DEV_TEST_LOGIN = "0";
    expect(isDevAdapterConsumeAllowed()).toBe(false);

    delete process.env.STUDIO_DEV_TEST_LOGIN;
    process.env.STUDIO_LANE = "DEV";
    expect(isDevAdapterConsumeAllowed()).toBe(false);
  });
});

describe("Nora fixture force boundary", () => {
  const prev = {
    e2e: process.env.STUDIO_E2E,
    force: process.env.STUDIO_FORCE_NORA_FIXTURE,
    lane: process.env.STUDIO_LANE,
  };

  afterEach(() => {
    for (const [k, v] of Object.entries({
      STUDIO_E2E: prev.e2e,
      STUDIO_FORCE_NORA_FIXTURE: prev.force,
      STUDIO_LANE: prev.lane,
    })) {
      if (v === undefined) delete process.env[k];
      else process.env[k] = v;
    }
  });

  it("STUDIO_E2E=1 forces fixture regardless of lane (owned E2E runner)", () => {
    process.env.STUDIO_E2E = "1";
    process.env.STUDIO_LANE = "RECETTE";
    expect(mustUseNoraFixture()).toBe(true);
  });

  it("STUDIO_FORCE_NORA_FIXTURE=1 only forces fixture in DEV", () => {
    delete process.env.STUDIO_E2E;
    process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
    process.env.STUDIO_LANE = "DEV";
    expect(mustUseNoraFixture()).toBe(true);
    process.env.STUDIO_LANE = "RECETTE";
    expect(mustUseNoraFixture()).toBe(false);
  });
});
```

### `projects/sfia-studio-next/web/tests/unit/nora-e2e-fixture.test.ts`
```
import { describe, expect, it, afterEach } from "vitest";
import { generateNoraReply } from "@/domains/conversation/nora-adapter";

describe("Nora E2E fixture isolation", () => {
  const prev = {
    e2e: process.env.STUDIO_E2E,
    key: process.env.OPENAI_API_KEY,
    force: process.env.STUDIO_FORCE_NORA_FIXTURE,
    lane: process.env.STUDIO_LANE,
  };

  afterEach(() => {
    const map: Record<string, string | undefined> = {
      STUDIO_E2E: prev.e2e,
      OPENAI_API_KEY: prev.key,
      STUDIO_FORCE_NORA_FIXTURE: prev.force,
      STUDIO_LANE: prev.lane,
    };
    for (const [k, v] of Object.entries(map)) {
      if (v === undefined) delete process.env[k];
      else process.env[k] = v;
    }
  });

  it("STUDIO_E2E=1 returns deterministic-fixture even when OPENAI_API_KEY is set (no LIVE path)", async () => {
    process.env.STUDIO_E2E = "1";
    process.env.STUDIO_LANE = "DEV";
    process.env.OPENAI_API_KEY = "sk-test-must-not-be-used";
    const result = await generateNoraReply({
      userText: "ping e2e isolation",
      contextSnippets: [],
    });
    expect(result.mode).toBe("deterministic-fixture");
    expect(result.status).toBe("COMPLETE");
    expect(result.content).toMatch(/fixture FAKE/);
    expect(result.content).not.toMatch(/openai-agents-sdk-live/);
  });
});
```


## Command log (redacted)

```
npm run test:unit          → 10 PASS
npm run test:integration   → 26 PASS
npm run test:e2e           → 1 PASS (baseURL 127.0.0.1:3101)
npx tsc --noEmit           → PASS (after next build refreshed .next/types)
npm run build              → PASS
npm run lint               → PASS
npm run db:migrate         → OK 001 then 002; Test 1 count=1
npm ls next postcss        → 15.5.29 / 8.5.32
npm audit --omit=dev       → no postcss/next prod reopen; toolchain noise only
```

## Gaps / reserves

- Project branch still **unpublished**; Morris push gate separate after ChatGPT review
- Interactive GitHub OAuth callback LIVE still NOT RUN this cycle
- RECETTE/STABLE NOT AVAILABLE
- Handoff L3 is the only authorized remote write

## STOP conditions — none triggered

No project push/PR/merge; operator DEV data preserved; E2E isolated; no secrets in pack.
