# SFIA Review Pack FULL — ML1 Environment Boundaries (pre-push guardrails)

| Field | Value |
| --- | --- |
| Date/time | 2026-11-04 15:18:55 CET (Europe/Paris context) |
| GO Morris | `GO ML1 — TARGETED PRE-PUSH CORRECTIONS / LOCAL ONLY` follow-on environment boundaries pack 2026-11-04 |
| Cycle | 8 / INC / CRITICAL |
| Product | `projects/sfia-studio-next/` |
| Branch | `sfia/next-access-preparation-continuity` (**LOCAL ONLY — not pushed**) |
| Base main | `61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Commit 1 (preserved) | `0b982b3b6a09b16d7f5ae36f9794c3fc8b3614c2` |
| Commit 2 (preserved) | `8767185234bab9b2cad7800771a6bfc0ae1d19e4` |
| Commit 3 (this cycle) | `0db58be8240a00593092048ee74299f19374f489` |
| Parent of C3 | `8767185234bab9b2cad7800771a6bfc0ae1d19e4` |
| Message | `fix(next): enforce DEV-only E2E and isolate test environment` |
| Versioning | **NO RELEASE** / STABLE NOT AVAILABLE / RC NOT ASSIGNED / `0.0.0-dev` |
| Lane | DEV only (ENV-01) |

## Verdict (Cursor)

`ML1 ENVIRONMENT GUARDRAILS FIXED — LOCAL COMMIT READY FOR CHATGPT REVIEW`

P1 / P2 / P3: **CLOSED** with proofs below.

## Instruction ChatGPT (mandatory)

Lire `sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` au nouveau SHA, examiner code/diff complet, tests, preuves R1–R3 et isolation DEV avant de recommander le GO Morris de push projet.

## Git Review Index

| Ref | SHA |
| --- | --- |
| origin/main | 61a6765a4e8d92760aab595b61b66aa2425906c6 |
| ML1 local chain | 0b982b3b6a09b16d7f5ae36f9794c3fc8b3614c2 → 8767185234bab9b2cad7800771a6bfc0ae1d19e4 → 0db58be8240a00593092048ee74299f19374f489 |
| Prior handoff | 7c5bda59e1c7f17031216e2069632678af207a7e / blob 27b31285d2a1f5afbfb27cc8be22bfdd8a260dfa |

### State before

- Tip `8767185234bab9b2cad7800771a6bfc0ae1d19e4`; residual `.tmp-sfia-review` + `web/public/*.svg` starter (preserved, not staged)

### State after

- Tip `0db58be8240a00593092048ee74299f19374f489`; commits 1–2 untouched; **no project push**; residual unchanged

## Guardrail results

### P1 — Nora fixture DEV-only — CLOSED (UNIT)

- `mustUseNoraFixture()` requires `STUDIO_LANE=DEV` AND (`STUDIO_E2E=1` OR `STUDIO_FORCE_NORA_FIXTURE=1`)
- Flags outside DEV / absent lane → `status=FAILED` (`NORA_FIXTURE_LANE_FORBIDDEN`) — no LIVE import, no FAKE COMPLETE usable text
- Missing `OPENAI_API_KEY` outside DEV → `FAILED` (`NORA_LIVE_KEY_REQUIRED`) — no silent FAKE
- DEV + E2E + key present → fixture COMPLETE (operator LIVE key still possible outside E2E)

### P2 — E2E PG preflight before mutation — CLOSED (UNIT + script)

- `src/lib/e2e-pg-gate.ts` + `scripts/e2e-preflight.ts` validate protocol/host/port/source DB + Docker loopback:`5433` mapping **before** CREATE/migrate
- Negative: remote host exit 2, empty stdout (zero URL emitted)
- Positive: operator=`sfia_next_dev` → e2e=`sfia_next_e2e`; Test 1 count=1 before/after E2E

### P3 — distDir isolation — CLOSED (UNIT + runtime)

- `next.config.ts`: `STUDIO_E2E=1` → `distDir=.next-e2e` else `.next`
- `.gitignore` includes `/.next-e2e/`
- `tsconfig.json` includes `.next-e2e/types/**/*.ts` (Next types for E2E cache)
- Runtime: after E2E, `.next-e2e` present; operator `.next` mtime **unchanged**

## Evidence table

| Check | Class | Result |
| --- | --- | --- |
| test:unit | UNIT | 22 PASS |
| test:integration | POSTGRES ISOLATED (+ DEV identity/create) | 26 PASS |
| test:e2e | BROWSER FAKE | 1 PASS (:3101, preflight OK, fixture FAKE) |
| tsc / build / lint | UNIT | PASS |
| npm ls next postcss | UNIT | 15.5.29 / 8.5.32 |
| npm audit --omit=dev | UNIT | no postcss/next reopen; toolchain noise only |
| Nora LIVE | LIVE USER PREVIOUS / NOT RUN | not re-run |
| OAuth callback | NOT RUN interactive | unchanged |
| A05/A13/A15/A16/DATA-01 | reserved | unchanged |
| Figma / Markdown rich | INCONCLUSIVE / KNOWN GAP | unchanged |

## Files in commit 3

M	projects/sfia-studio-next/CHANGELOG.md
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/web/.gitignore
M	projects/sfia-studio-next/web/README.md
M	projects/sfia-studio-next/web/next.config.ts
A	projects/sfia-studio-next/web/scripts/e2e-preflight.ts
M	projects/sfia-studio-next/web/scripts/e2e-web-server.sh
M	projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
A	projects/sfia-studio-next/web/src/lib/e2e-pg-gate.ts
M	projects/sfia-studio-next/web/tests/unit/dev-login-host.test.ts
A	projects/sfia-studio-next/web/tests/unit/e2e-pg-gate.test.ts
A	projects/sfia-studio-next/web/tests/unit/next-dist-dir.test.ts
M	projects/sfia-studio-next/web/tests/unit/nora-e2e-fixture.test.ts
M	projects/sfia-studio-next/web/tsconfig.json

## Diff complete C2..C3

```diff
diff --git a/projects/sfia-studio-next/CHANGELOG.md b/projects/sfia-studio-next/CHANGELOG.md
index 3de94e7b..493308af 100644
--- a/projects/sfia-studio-next/CHANGELOG.md
+++ b/projects/sfia-studio-next/CHANGELOG.md
@@ -3,6 +3,13 @@
 No promoted product release yet.
 
 ## Unreleased
+## Unreleased — ML1 environment boundaries 2026-11-04
+
+- Nora: fixture COMPLETE only when `STUDIO_LANE=DEV` + E2E/force flags; flags outside DEV → FAILED (no LIVE, no FAKE COMPLETE); missing key outside DEV → FAILED.
+- E2E: read-only Postgres preflight (loopback `:5433` / `sfia_next_dev` + Docker mapping) before any CREATE/migrate; target `sfia_next_e2e` only.
+- Next: `STUDIO_E2E=1` → `distDir=.next-e2e` (operator keeps `.next`).
+- STABLE/RC still NOT AVAILABLE / NO RELEASE.
+
 ## Unreleased — ML1 targeted pre-push corrections 2026-11-04
 
 - D1: exact loopback Host/XFF parsing (reject `localhost.attacker.example` and multi-value XFF); DEV adapter consume fail-closed when lane ≠ DEV or test login disabled.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index ac5b18fd..20639957 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -107,12 +107,27 @@ Append-only logical journal of Cursor product deliveries.
 | Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
 | Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
 | Parent commit | `0b982b3b6a09b16d7f5ae36f9794c3fc8b3614c2` (preserved) |
-| Commit | recorded as HEAD of this delivery commit (exact SHA in Review Pack / `git rev-parse HEAD` after commit; no silent second commit for circular SHA) |
+| Commit | `8767185234bab9b2cad7800771a6bfc0ae1d19e4` (parent `0b982b3b…`; unpublished) |
 | Changes | A: strict loopback + DEV consume fail-closed; B: `db:migrate` 001→002 + fresh-container proof; C: owned E2E :3101 / `sfia_next_e2e` / Nora fixture-only |
 | Product version | `NO RELEASE` |
 | Lane | DEV |
 | Schema | `001` + `002` via `npm run db:migrate` |
 | Tests | unit / integration (incl. isolated migrate container) / Playwright FAKE E2E — see Review Pack |
-| Status | LOCAL CORRECTIVE candidate — no project push/PR/merge |
+| Status | LOCAL CORRECTIVE — preserved under subsequent guardrail commit |
+
+## delivery_id: DELIV-2026-11-04-ML1-LOCAL-08-ENV-BOUNDARIES
 
-Decision: self-SHA not written into the versioned row to avoid a circular amend; ChatGPT must resolve tip SHA from Git after the local commit.
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-04 (Europe/Paris) |
+| Macro-lot | R5 / ML1 pre-push environment boundaries (same lot) |
+| Type | INC corrective / isolation guardrails |
+| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
+| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
+| Parent commit | `8767185234bab9b2cad7800771a6bfc0ae1d19e4` (preserved; commits 1–2 untouched) |
+| Commit | tip SHA after this delivery commit (resolve via `git rev-parse HEAD`; no circular amend) |
+| Changes | P1: Nora fixture DEV-only + fail-closed outside DEV / missing key; P2: E2E PG preflight before CREATE/migrate; P3: `distDir` `.next-e2e` vs `.next` |
+| Product version | `NO RELEASE` |
+| Lane | DEV |
+| Tests | unit 22; integration 26; Playwright FAKE 1; build/tsc/lint — see Review Pack |
+| Status | LOCAL CORRECTIVE candidate — no project push/PR/merge |
diff --git a/projects/sfia-studio-next/web/.gitignore b/projects/sfia-studio-next/web/.gitignore
index 55fbb831..8eb49b56 100644
--- a/projects/sfia-studio-next/web/.gitignore
+++ b/projects/sfia-studio-next/web/.gitignore
@@ -18,6 +18,7 @@
 
 # next.js
 /.next/
+/.next-e2e/
 /out/
 
 # production
diff --git a/projects/sfia-studio-next/web/README.md b/projects/sfia-studio-next/web/README.md
index b341bb96..715023e0 100644
--- a/projects/sfia-studio-next/web/README.md
+++ b/projects/sfia-studio-next/web/README.md
@@ -51,7 +51,7 @@ npm run test:integration
 npm run test:e2e
 ```
 
-`test:e2e` starts an **owned** server on `127.0.0.1:3101` against isolated DB `sfia_next_e2e` (same Postgres instance, separate database). It forces Nora fixture FAKE (`STUDIO_E2E=1`, `OPENAI_API_KEY` neutralized) and does **not** reuse the operator DEV server on `:3100`. Operator data in `sfia_next_dev` (including project « Test 1 ») is untouched.
+`test:e2e` starts an **owned** server on `127.0.0.1:3101` against isolated DB `sfia_next_e2e` (same Postgres instance, separate database). Preflight (`scripts/e2e-preflight.ts`) validates operator `DATABASE_URL` (loopback `:5433` / `sfia_next_dev`) and Docker port mapping **before** any `CREATE DATABASE` or migrate. Nora fixture FAKE requires `STUDIO_LANE=DEV` + `STUDIO_E2E=1` (`OPENAI_API_KEY` neutralized). Cache dir: `.next-e2e` (operator DEV keeps `.next`). Does **not** reuse `:3100`. Operator data in `sfia_next_dev` (including project « Test 1 ») is untouched.
 
 ## Fake / Real boundaries
 
diff --git a/projects/sfia-studio-next/web/next.config.ts b/projects/sfia-studio-next/web/next.config.ts
index e9ffa308..ce941117 100644
--- a/projects/sfia-studio-next/web/next.config.ts
+++ b/projects/sfia-studio-next/web/next.config.ts
@@ -1,7 +1,13 @@
 import type { NextConfig } from "next";
 
+/**
+ * Operator DEV (:3100) keeps default `.next`.
+ * Playwright E2E runner sets STUDIO_E2E=1 → dedicated `.next-e2e` cache.
+ */
+const isE2E = process.env.STUDIO_E2E === "1";
+
 const nextConfig: NextConfig = {
-  /* config options here */
+  distDir: isE2E ? ".next-e2e" : ".next",
 };
 
 export default nextConfig;
diff --git a/projects/sfia-studio-next/web/scripts/e2e-preflight.ts b/projects/sfia-studio-next/web/scripts/e2e-preflight.ts
new file mode 100755
index 00000000..99dc5755
--- /dev/null
+++ b/projects/sfia-studio-next/web/scripts/e2e-preflight.ts
@@ -0,0 +1,64 @@
+#!/usr/bin/env npx tsx
+/**
+ * Read-only E2E Postgres preflight. Fail-closed BEFORE any CREATE DATABASE / migrate.
+ * On success: prints E2E DATABASE_URL alone on stdout (caller captures; never log it).
+ * Diagnostics go to stderr without credentials.
+ */
+import { config } from "dotenv";
+import { resolve, dirname } from "path";
+import { fileURLToPath } from "url";
+import { execFileSync } from "child_process";
+import {
+  assertApprovedOperatorDatabaseUrl,
+  assertContainerLoopbackPortMapping,
+  buildE2eDatabaseUrl,
+  E2E_PG_EXPECTED,
+} from "../src/lib/e2e-pg-gate";
+
+const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
+config({ path: resolve(root, ".env.local") });
+
+const container = process.env.SFIA_PG_CONTAINER || E2E_PG_EXPECTED.container;
+const e2eDb = process.env.SFIA_E2E_DATABASE || E2E_PG_EXPECTED.e2eDatabase;
+
+try {
+  assertApprovedOperatorDatabaseUrl(process.env.DATABASE_URL);
+
+  let portOut: string;
+  try {
+    portOut = execFileSync("docker", ["port", container, "5432"], {
+      encoding: "utf8",
+      stdio: ["ignore", "pipe", "pipe"],
+    });
+  } catch {
+    console.error(
+      `STOP — NEXT ENVIRONMENT GATE FAILED: docker port ${container} 5432 unavailable`,
+    );
+    process.exit(2);
+  }
+  assertContainerLoopbackPortMapping(portOut, E2E_PG_EXPECTED.port);
+
+  const built = buildE2eDatabaseUrl(process.env.DATABASE_URL!, e2eDb);
+  if (built.operatorDatabase === built.e2eDatabase) {
+    console.error("STOP — NEXT ENVIRONMENT GATE FAILED: target equals source");
+    process.exit(2);
+  }
+  if (built.operatorDatabase !== E2E_PG_EXPECTED.operatorDatabase) {
+    console.error("STOP — NEXT ENVIRONMENT GATE FAILED: operator DB identity mismatch");
+    process.exit(2);
+  }
+  if (built.e2eDatabase !== E2E_PG_EXPECTED.e2eDatabase) {
+    console.error("STOP — NEXT ENVIRONMENT GATE FAILED: E2E DB identity mismatch");
+    process.exit(2);
+  }
+
+  console.error(
+    `e2e-preflight OK: operator=${built.operatorDatabase} → e2e=${built.e2eDatabase} container=${container} port=${E2E_PG_EXPECTED.port}`,
+  );
+  process.stdout.write(built.e2eDatabaseUrl);
+} catch (e) {
+  const code = e && typeof e === "object" && "code" in e ? String((e as { code: string }).code) : "E2E_PG_GATE";
+  const msg = e instanceof Error ? e.message : String(e);
+  console.error(`STOP — NEXT ENVIRONMENT GATE FAILED: ${code}: ${msg}`);
+  process.exit(2);
+}
diff --git a/projects/sfia-studio-next/web/scripts/e2e-web-server.sh b/projects/sfia-studio-next/web/scripts/e2e-web-server.sh
index 273db91d..390d669e 100755
--- a/projects/sfia-studio-next/web/scripts/e2e-web-server.sh
+++ b/projects/sfia-studio-next/web/scripts/e2e-web-server.sh
@@ -1,6 +1,7 @@
 #!/usr/bin/env bash
-# Owned Playwright webServer: isolated port + DB + Nora fixture force.
+# Owned Playwright webServer: isolated port + DB + Nora fixture force + separate distDir.
 # Never reuses the operator DEV server on :3100. Never calls OpenAI LIVE.
+# CREATE DATABASE / migrate happen ONLY after read-only preflight passes.
 set -euo pipefail
 
 ROOT="$(cd "$(dirname "$0")/.." && pwd)"
@@ -11,7 +12,17 @@ DB_USER="${SFIA_PG_USER:-sfia_next_dev}"
 E2E_DB="${SFIA_E2E_DATABASE:-sfia_next_e2e}"
 E2E_PORT="${SFIA_E2E_PORT:-3101}"
 
-# Create dedicated E2E database on the same Postgres instance (does NOT touch sfia_next_dev).
+# --- P2: read-only preflight BEFORE any mutation ---
+E2E_DATABASE_URL="$(
+  SFIA_PG_CONTAINER="${CONTAINER}" SFIA_E2E_DATABASE="${E2E_DB}" \
+    npx --yes tsx "${ROOT}/scripts/e2e-preflight.ts"
+)"
+if [[ -z "${E2E_DATABASE_URL}" ]]; then
+  echo "STOP — NEXT ENVIRONMENT GATE FAILED: empty E2E DATABASE_URL" >&2
+  exit 2
+fi
+
+# Mutations only against approved E2E DB name on the verified DEV container.
 exists="$(docker exec "${CONTAINER}" psql -U "${DB_USER}" -d postgres -tAc \
   "SELECT 1 FROM pg_database WHERE datname='${E2E_DB}'" | tr -d '[:space:]')"
 if [[ "${exists}" != "1" ]]; then
@@ -21,23 +32,6 @@ fi
 
 SFIA_PG_DATABASE="${E2E_DB}" bash "${ROOT}/scripts/db-migrate.sh"
 
-# Derive DATABASE_URL for e2e DB from .env.local without printing secrets.
-E2E_DATABASE_URL="$(
-  SFIA_E2E_DATABASE="${E2E_DB}" node --input-type=module <<'NODE'
-import { config } from "dotenv";
-import { resolve } from "path";
-config({ path: resolve(process.cwd(), ".env.local") });
-const base = process.env.DATABASE_URL;
-if (!base) {
-  console.error("DATABASE_URL missing from .env.local — cannot start E2E server");
-  process.exit(1);
-}
-const u = new URL(base);
-u.pathname = `/${process.env.SFIA_E2E_DATABASE || "sfia_next_e2e"}`;
-process.stdout.write(u.toString());
-NODE
-)"
-
 export DATABASE_URL="${E2E_DATABASE_URL}"
 export STUDIO_LANE=DEV
 export STUDIO_DEV_TEST_LOGIN=1
@@ -48,4 +42,5 @@ export OPENAI_API_KEY=
 unset OPENAI_API_KEY
 export OPENAI_API_KEY=
 
+# P3: STUDIO_E2E=1 → next.config distDir=.next-e2e (operator keeps .next)
 exec npx next dev --turbopack -p "${E2E_PORT}" -H 127.0.0.1
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index bf336b11..4a51c0cf 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -18,18 +18,36 @@ const SYSTEM_INSTRUCTIONS =
   "Tu ne crées jamais de projet, cycle, dépôt Git ni mandat. " +
   "Aucun outil à effet externe n'est disponible. Réponds en français, concis.";
 
+function isDevLane(): boolean {
+  return process.env.STUDIO_LANE === "DEV";
+}
+
+function fixtureFlagsRequested(): boolean {
+  return process.env.STUDIO_E2E === "1" || process.env.STUDIO_FORCE_NORA_FIXTURE === "1";
+}
+
 /**
- * Explicit fixture force — allowed only for DEV / automated E2E.
- * Outside DEV (and without STUDIO_E2E), requesting a force is ignored for LIVE path
- * and the caller must not treat that as a silent production kill-switch.
+ * True only when intentional fixture is allowed: DEV lane + E2E/force flag.
+ * Outside DEV, flags never silently activate fixture (see generateNoraReply fail-closed).
  */
 export function mustUseNoraFixture(): boolean {
-  if (process.env.STUDIO_E2E === "1") return true;
-  if (process.env.STUDIO_FORCE_NORA_FIXTURE === "1") {
-    // Fail-closed outside DEV: force flag alone is not enough in non-DEV lanes.
-    return process.env.STUDIO_LANE === "DEV";
-  }
-  return false;
+  return isDevLane() && fixtureFlagsRequested();
+}
+
+/** Flags set while lane is not DEV — caller must fail closed (no FAKE COMPLETE, no LIVE). */
+export function noraFixtureFlagsOutsideDev(): boolean {
+  return fixtureFlagsRequested() && !isDevLane();
+}
+
+function boundaryFail(generationId: string, reason: string): NoraGenerateResult {
+  return {
+    generationId,
+    // mode marks that no OpenAI network path was taken
+    mode: "deterministic-fixture",
+    status: "FAILED",
+    streamingProvisional: false,
+    content: `Nora boundary FAILED: ${reason}. Aucun appel OpenAI; aucune réponse FAKE utilisable.`,
+  };
 }
 
 function fixtureReply(input: NoraGenerateInput, generationId: string): NoraGenerateResult {
@@ -49,24 +67,40 @@ function fixtureReply(input: NoraGenerateInput, generationId: string): NoraGener
 /**
  * D3 adapter — OpenAI Agents SDK behind this boundary when LIVE key present.
  * NEVER activates MemorySession / ConversationsSession as authority.
- * Without OPENAI_API_KEY: deterministic fixture only (NOT LIVE proof).
- * STUDIO_E2E=1 / STUDIO_FORCE_NORA_FIXTURE=1 (DEV only): fixture even if a key is present —
- * prevents Playwright reuse of a LIVE-keyed DEV server from emitting paid calls.
+ *
+ * Boundaries:
+ * - STUDIO_E2E / STUDIO_FORCE_NORA_FIXTURE → fixture COMPLETE only when STUDIO_LANE=DEV
+ * - Same flags outside DEV → FAILED (no LIVE, no FAKE COMPLETE)
+ * - Missing OPENAI_API_KEY in DEV → fixture COMPLETE (local DEV convenience)
+ * - Missing OPENAI_API_KEY outside DEV → FAILED (never silent FAKE in RECETTE/STABLE)
  */
 export async function generateNoraReply(input: NoraGenerateInput): Promise<NoraGenerateResult> {
   const generationId = newId("gen");
 
+  if (noraFixtureFlagsOutsideDev()) {
+    return boundaryFail(
+      generationId,
+      "NORA_FIXTURE_LANE_FORBIDDEN (STUDIO_E2E/FORCE requires STUDIO_LANE=DEV)",
+    );
+  }
+
   if (mustUseNoraFixture()) {
     return fixtureReply(input, generationId);
   }
 
   const key = process.env.OPENAI_API_KEY?.trim();
   if (!key) {
+    if (!isDevLane()) {
+      return boundaryFail(
+        generationId,
+        "NORA_LIVE_KEY_REQUIRED outside DEV (no silent FAKE fallback)",
+      );
+    }
     return fixtureReply(input, generationId);
   }
 
   try {
-    // Dynamic import keeps fixture path free of SDK side-effects when no key / E2E.
+    // Dynamic import keeps fixture/boundary paths free of SDK side-effects.
     const { Agent, run } = await import("@openai/agents");
     const agent = new Agent({
       name: "Nora",
@@ -78,8 +112,6 @@ export async function generateNoraReply(input: NoraGenerateInput): Promise<NoraG
       `${input.userText}\n\nContexte autorisé (borné):\n` +
       (input.contextSnippets.length ? input.contextSnippets.join("\n") : "(vide)");
 
-    // Non-streamed finalization: only COMPLETE after SDK result is obtained.
-    // Streaming UI may show provisional fragments separately; PG commit happens in service.
     const result = await run(agent, prompt, {
       maxTurns: 1,
     });
diff --git a/projects/sfia-studio-next/web/src/lib/e2e-pg-gate.ts b/projects/sfia-studio-next/web/src/lib/e2e-pg-gate.ts
new file mode 100644
index 00000000..18fd8928
--- /dev/null
+++ b/projects/sfia-studio-next/web/src/lib/e2e-pg-gate.ts
@@ -0,0 +1,159 @@
+/**
+ * Fail-closed gate for Playwright E2E Postgres targeting.
+ * Pure validation — no CREATE DATABASE, no migrations, no network to OpenAI.
+ */
+
+export const E2E_PG_EXPECTED = {
+  hosts: ["127.0.0.1", "localhost"] as const,
+  port: 5433,
+  operatorDatabase: "sfia_next_dev",
+  e2eDatabase: "sfia_next_e2e",
+  container: "sfia-next-dev-pg",
+} as const;
+
+export type E2ePgGateErrorCode =
+  | "E2E_PG_URL_MISSING"
+  | "E2E_PG_URL_INVALID"
+  | "E2E_PG_PROTOCOL_FORBIDDEN"
+  | "E2E_PG_HOST_FORBIDDEN"
+  | "E2E_PG_PORT_FORBIDDEN"
+  | "E2E_PG_SOURCE_DB_FORBIDDEN"
+  | "E2E_PG_TARGET_FORBIDDEN"
+  | "E2E_PG_TARGET_EQ_SOURCE"
+  | "E2E_PG_USERINFO_AMBIGUOUS"
+  | "E2E_PG_CONTAINER_MAPPING_FORBIDDEN";
+
+export class E2ePgGateError extends Error {
+  readonly code: E2ePgGateErrorCode;
+  constructor(code: E2ePgGateErrorCode, message: string) {
+    super(message);
+    this.code = code;
+    this.name = "E2ePgGateError";
+  }
+}
+
+function databaseNameFromPathname(pathname: string): string {
+  const raw = pathname.replace(/^\//, "");
+  const db = raw.split("/")[0] ?? "";
+  return decodeURIComponent(db);
+}
+
+/**
+ * Validate operator DATABASE_URL is the approved local DEV Postgres identity.
+ * Does not rewrite; does not print credentials.
+ */
+export function assertApprovedOperatorDatabaseUrl(raw: string | undefined | null): URL {
+  if (raw == null || String(raw).trim() === "") {
+    throw new E2ePgGateError("E2E_PG_URL_MISSING", "DATABASE_URL missing");
+  }
+  let u: URL;
+  try {
+    u = new URL(String(raw).trim());
+  } catch {
+    throw new E2ePgGateError("E2E_PG_URL_INVALID", "DATABASE_URL is not a valid URL");
+  }
+
+  if (u.protocol !== "postgres:" && u.protocol !== "postgresql:") {
+    throw new E2ePgGateError(
+      "E2E_PG_PROTOCOL_FORBIDDEN",
+      `protocol must be postgres/postgresql (got ${u.protocol})`,
+    );
+  }
+
+  const host = u.hostname.toLowerCase();
+  if (!(E2E_PG_EXPECTED.hosts as readonly string[]).includes(host)) {
+    throw new E2ePgGateError(
+      "E2E_PG_HOST_FORBIDDEN",
+      "host must be exact loopback 127.0.0.1 or localhost",
+    );
+  }
+
+  // Empty port would default to 5432 — not our DEV mapping.
+  const port = u.port === "" ? 5432 : Number(u.port);
+  if (port !== E2E_PG_EXPECTED.port) {
+    throw new E2ePgGateError(
+      "E2E_PG_PORT_FORBIDDEN",
+      `port must be ${E2E_PG_EXPECTED.port} (got ${port})`,
+    );
+  }
+
+  const sourceDb = databaseNameFromPathname(u.pathname);
+  if (!sourceDb) {
+    throw new E2ePgGateError("E2E_PG_SOURCE_DB_FORBIDDEN", "source database name missing");
+  }
+  if (sourceDb === E2E_PG_EXPECTED.e2eDatabase) {
+    throw new E2ePgGateError(
+      "E2E_PG_SOURCE_DB_FORBIDDEN",
+      "operator URL must point at sfia_next_dev, not sfia_next_e2e",
+    );
+  }
+  if (sourceDb !== E2E_PG_EXPECTED.operatorDatabase) {
+    throw new E2ePgGateError(
+      "E2E_PG_SOURCE_DB_FORBIDDEN",
+      `operator database must be ${E2E_PG_EXPECTED.operatorDatabase}`,
+    );
+  }
+
+  return u;
+}
+
+/**
+ * Build E2E URL from a validated operator URL. Target must be sfia_next_e2e only.
+ */
+export function buildE2eDatabaseUrl(
+  operatorUrl: string,
+  e2eDatabase: string = E2E_PG_EXPECTED.e2eDatabase,
+): { operatorDatabase: string; e2eDatabase: string; e2eDatabaseUrl: string } {
+  const u = assertApprovedOperatorDatabaseUrl(operatorUrl);
+  const operatorDatabase = databaseNameFromPathname(u.pathname);
+
+  if (e2eDatabase !== E2E_PG_EXPECTED.e2eDatabase) {
+    throw new E2ePgGateError(
+      "E2E_PG_TARGET_FORBIDDEN",
+      `E2E database must be ${E2E_PG_EXPECTED.e2eDatabase}`,
+    );
+  }
+  if (e2eDatabase === operatorDatabase) {
+    throw new E2ePgGateError("E2E_PG_TARGET_EQ_SOURCE", "E2E target must differ from operator DB");
+  }
+
+  const e2e = new URL(u.toString());
+  e2e.pathname = `/${e2eDatabase}`;
+  return {
+    operatorDatabase,
+    e2eDatabase,
+    e2eDatabaseUrl: e2e.toString(),
+  };
+}
+
+/**
+ * Parse `docker port <container> 5432` output; require loopback → 5433.
+ * Example approved: `127.0.0.1:5433`
+ */
+export function assertContainerLoopbackPortMapping(
+  dockerPortOutput: string,
+  expectedHostPort: number = E2E_PG_EXPECTED.port,
+): void {
+  const lines = dockerPortOutput
+    .split("\n")
+    .map((l) => l.trim())
+    .filter(Boolean);
+  if (lines.length === 0) {
+    throw new E2ePgGateError(
+      "E2E_PG_CONTAINER_MAPPING_FORBIDDEN",
+      "docker port mapping empty",
+    );
+  }
+  // Approved formats only: 127.0.0.1:5433 | localhost:5433 | [::1]:5433 (not 0.0.0.0).
+  const approved = lines.some((line) => {
+    const loopback = /^(?:127\.0\.0\.1|localhost|\[::1\]):(\d+)$/i.exec(line);
+    if (!loopback) return false;
+    return Number(loopback[1]) === expectedHostPort;
+  });
+  if (!approved) {
+    throw new E2ePgGateError(
+      "E2E_PG_CONTAINER_MAPPING_FORBIDDEN",
+      `container must map 5432/tcp to loopback:${expectedHostPort}`,
+    );
+  }
+}
diff --git a/projects/sfia-studio-next/web/tests/unit/dev-login-host.test.ts b/projects/sfia-studio-next/web/tests/unit/dev-login-host.test.ts
index a0f5fe2b..d0c0a51c 100644
--- a/projects/sfia-studio-next/web/tests/unit/dev-login-host.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/dev-login-host.test.ts
@@ -93,10 +93,12 @@ describe("Nora fixture force boundary", () => {
     }
   });
 
-  it("STUDIO_E2E=1 forces fixture regardless of lane (owned E2E runner)", () => {
+  it("STUDIO_E2E=1 forces fixture only in DEV (not RECETTE)", () => {
     process.env.STUDIO_E2E = "1";
-    process.env.STUDIO_LANE = "RECETTE";
+    process.env.STUDIO_LANE = "DEV";
     expect(mustUseNoraFixture()).toBe(true);
+    process.env.STUDIO_LANE = "RECETTE";
+    expect(mustUseNoraFixture()).toBe(false);
   });
 
   it("STUDIO_FORCE_NORA_FIXTURE=1 only forces fixture in DEV", () => {
diff --git a/projects/sfia-studio-next/web/tests/unit/e2e-pg-gate.test.ts b/projects/sfia-studio-next/web/tests/unit/e2e-pg-gate.test.ts
new file mode 100644
index 00000000..7d578652
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/e2e-pg-gate.test.ts
@@ -0,0 +1,71 @@
+import { describe, expect, it } from "vitest";
+import {
+  assertApprovedOperatorDatabaseUrl,
+  assertContainerLoopbackPortMapping,
+  buildE2eDatabaseUrl,
+  E2ePgGateError,
+} from "@/lib/e2e-pg-gate";
+
+const good =
+  "postgres://sfia_next_dev:local-only@127.0.0.1:5433/sfia_next_dev";
+
+function expectCode(fn: () => unknown, code: string) {
+  try {
+    fn();
+    expect.unreachable("expected throw");
+  } catch (e) {
+    expect(e).toBeInstanceOf(E2ePgGateError);
+    expect((e as E2ePgGateError).code).toBe(code);
+  }
+}
+
+describe("E2E Postgres preflight gate (no writes)", () => {
+  it("accepts approved operator URL and builds distinct e2e URL", () => {
+    const u = assertApprovedOperatorDatabaseUrl(good);
+    expect(u.hostname).toBe("127.0.0.1");
+    expect(u.port).toBe("5433");
+    const built = buildE2eDatabaseUrl(good);
+    expect(built.operatorDatabase).toBe("sfia_next_dev");
+    expect(built.e2eDatabase).toBe("sfia_next_e2e");
+    expect(built.e2eDatabaseUrl).toContain("/sfia_next_e2e");
+    expect(built.e2eDatabaseUrl).not.toMatch(/\/sfia_next_dev$/);
+  });
+
+  it("rejects missing / invalid / remote / wrong port / wrong source DB", () => {
+    expectCode(() => assertApprovedOperatorDatabaseUrl(undefined), "E2E_PG_URL_MISSING");
+    expectCode(() => assertApprovedOperatorDatabaseUrl("not-a-url"), "E2E_PG_URL_INVALID");
+    expectCode(
+      () => assertApprovedOperatorDatabaseUrl("postgres://u:p@db.example.com:5433/sfia_next_dev"),
+      "E2E_PG_HOST_FORBIDDEN",
+    );
+    expectCode(
+      () => assertApprovedOperatorDatabaseUrl("postgres://u:p@127.0.0.1:5432/sfia_next_dev"),
+      "E2E_PG_PORT_FORBIDDEN",
+    );
+    expectCode(
+      () => assertApprovedOperatorDatabaseUrl("postgres://u:p@127.0.0.1:5433/sfia_next_e2e"),
+      "E2E_PG_SOURCE_DB_FORBIDDEN",
+    );
+    expectCode(
+      () => assertApprovedOperatorDatabaseUrl("postgres://u:p@127.0.0.1:5433/other_db"),
+      "E2E_PG_SOURCE_DB_FORBIDDEN",
+    );
+    expectCode(
+      () => assertApprovedOperatorDatabaseUrl("mysql://u:p@127.0.0.1:5433/sfia_next_dev"),
+      "E2E_PG_PROTOCOL_FORBIDDEN",
+    );
+  });
+
+  it("rejects non-approved target DB name", () => {
+    expectCode(() => buildE2eDatabaseUrl(good, "sfia_next_dev"), "E2E_PG_TARGET_FORBIDDEN");
+    expectCode(() => buildE2eDatabaseUrl(good, "recette_db"), "E2E_PG_TARGET_FORBIDDEN");
+  });
+
+  it("accepts loopback docker port mapping and rejects 0.0.0.0 / wrong port", () => {
+    expect(() => assertContainerLoopbackPortMapping("127.0.0.1:5433\n")).not.toThrow();
+    expect(() => assertContainerLoopbackPortMapping("localhost:5433")).not.toThrow();
+    expectCode(() => assertContainerLoopbackPortMapping("0.0.0.0:5433"), "E2E_PG_CONTAINER_MAPPING_FORBIDDEN");
+    expectCode(() => assertContainerLoopbackPortMapping("127.0.0.1:5432"), "E2E_PG_CONTAINER_MAPPING_FORBIDDEN");
+    expectCode(() => assertContainerLoopbackPortMapping(""), "E2E_PG_CONTAINER_MAPPING_FORBIDDEN");
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/next-dist-dir.test.ts b/projects/sfia-studio-next/web/tests/unit/next-dist-dir.test.ts
new file mode 100644
index 00000000..d768956a
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/next-dist-dir.test.ts
@@ -0,0 +1,25 @@
+import { afterEach, describe, expect, it, vi } from "vitest";
+
+describe("Next distDir isolation (operator vs E2E)", () => {
+  const prev = process.env.STUDIO_E2E;
+
+  afterEach(() => {
+    if (prev === undefined) delete process.env.STUDIO_E2E;
+    else process.env.STUDIO_E2E = prev;
+    vi.resetModules();
+  });
+
+  it("operator (no STUDIO_E2E) uses .next", async () => {
+    delete process.env.STUDIO_E2E;
+    vi.resetModules();
+    const mod = await import("../../next.config");
+    expect(mod.default.distDir).toBe(".next");
+  });
+
+  it("E2E (STUDIO_E2E=1) uses .next-e2e", async () => {
+    process.env.STUDIO_E2E = "1";
+    vi.resetModules();
+    const mod = await import("../../next.config");
+    expect(mod.default.distDir).toBe(".next-e2e");
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/nora-e2e-fixture.test.ts b/projects/sfia-studio-next/web/tests/unit/nora-e2e-fixture.test.ts
index 2fea9144..962e4a36 100644
--- a/projects/sfia-studio-next/web/tests/unit/nora-e2e-fixture.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/nora-e2e-fixture.test.ts
@@ -1,7 +1,11 @@
 import { describe, expect, it, afterEach } from "vitest";
-import { generateNoraReply } from "@/domains/conversation/nora-adapter";
+import {
+  generateNoraReply,
+  mustUseNoraFixture,
+  noraFixtureFlagsOutsideDev,
+} from "@/domains/conversation/nora-adapter";
 
-describe("Nora E2E fixture isolation", () => {
+describe("Nora E2E / lane fixture boundaries", () => {
   const prev = {
     e2e: process.env.STUDIO_E2E,
     key: process.env.OPENAI_API_KEY,
@@ -22,10 +26,12 @@ describe("Nora E2E fixture isolation", () => {
     }
   });
 
-  it("STUDIO_E2E=1 returns deterministic-fixture even when OPENAI_API_KEY is set (no LIVE path)", async () => {
+  it("DEV + STUDIO_E2E=1 → fixture COMPLETE even if key present (no LIVE path)", async () => {
     process.env.STUDIO_E2E = "1";
     process.env.STUDIO_LANE = "DEV";
     process.env.OPENAI_API_KEY = "sk-test-must-not-be-used";
+    expect(mustUseNoraFixture()).toBe(true);
+    expect(noraFixtureFlagsOutsideDev()).toBe(false);
     const result = await generateNoraReply({
       userText: "ping e2e isolation",
       contextSnippets: [],
@@ -33,6 +39,65 @@ describe("Nora E2E fixture isolation", () => {
     expect(result.mode).toBe("deterministic-fixture");
     expect(result.status).toBe("COMPLETE");
     expect(result.content).toMatch(/fixture FAKE/);
-    expect(result.content).not.toMatch(/openai-agents-sdk-live/);
+  });
+
+  it("DEV without E2E/force + no key → fixture COMPLETE (local DEV convenience)", async () => {
+    delete process.env.STUDIO_E2E;
+    delete process.env.STUDIO_FORCE_NORA_FIXTURE;
+    process.env.STUDIO_LANE = "DEV";
+    delete process.env.OPENAI_API_KEY;
+    expect(mustUseNoraFixture()).toBe(false);
+    const result = await generateNoraReply({ userText: "dev no key", contextSnippets: [] });
+    expect(result.status).toBe("COMPLETE");
+    expect(result.mode).toBe("deterministic-fixture");
+  });
+
+  it("RECETTE + STUDIO_E2E=1 → FAILED (no FAKE COMPLETE, no LIVE)", async () => {
+    process.env.STUDIO_E2E = "1";
+    process.env.STUDIO_LANE = "RECETTE";
+    process.env.OPENAI_API_KEY = "sk-test-must-not-be-used";
+    expect(mustUseNoraFixture()).toBe(false);
+    expect(noraFixtureFlagsOutsideDev()).toBe(true);
+    const result = await generateNoraReply({ userText: "blocked", contextSnippets: [] });
+    expect(result.status).toBe("FAILED");
+    expect(result.content).toMatch(/NORA_FIXTURE_LANE_FORBIDDEN/);
+    expect(result.content).not.toMatch(/fixture FAKE, not LIVE/);
+  });
+
+  it("STABLE + STUDIO_E2E=1 → FAILED", async () => {
+    process.env.STUDIO_E2E = "1";
+    process.env.STUDIO_LANE = "STABLE";
+    delete process.env.OPENAI_API_KEY;
+    const result = await generateNoraReply({ userText: "blocked", contextSnippets: [] });
+    expect(result.status).toBe("FAILED");
+    expect(result.content).toMatch(/NORA_FIXTURE_LANE_FORBIDDEN/);
+  });
+
+  it("absent lane + STUDIO_E2E=1 → FAILED", async () => {
+    process.env.STUDIO_E2E = "1";
+    delete process.env.STUDIO_LANE;
+    const result = await generateNoraReply({ userText: "blocked", contextSnippets: [] });
+    expect(result.status).toBe("FAILED");
+    expect(noraFixtureFlagsOutsideDev()).toBe(true);
+  });
+
+  it("RECETTE without key and without E2E flags → FAILED (no silent FAKE)", async () => {
+    delete process.env.STUDIO_E2E;
+    delete process.env.STUDIO_FORCE_NORA_FIXTURE;
+    process.env.STUDIO_LANE = "RECETTE";
+    delete process.env.OPENAI_API_KEY;
+    const result = await generateNoraReply({ userText: "no fake", contextSnippets: [] });
+    expect(result.status).toBe("FAILED");
+    expect(result.content).toMatch(/NORA_LIVE_KEY_REQUIRED/);
+    expect(result.content).not.toMatch(/fixture FAKE, not LIVE/);
+  });
+
+  it("STUDIO_FORCE_NORA_FIXTURE outside DEV → FAILED", async () => {
+    delete process.env.STUDIO_E2E;
+    process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
+    process.env.STUDIO_LANE = "RECETTE";
+    const result = await generateNoraReply({ userText: "force blocked", contextSnippets: [] });
+    expect(result.status).toBe("FAILED");
+    expect(mustUseNoraFixture()).toBe(false);
   });
 });
diff --git a/projects/sfia-studio-next/web/tsconfig.json b/projects/sfia-studio-next/web/tsconfig.json
index c1334095..2e834742 100644
--- a/projects/sfia-studio-next/web/tsconfig.json
+++ b/projects/sfia-studio-next/web/tsconfig.json
@@ -22,6 +22,6 @@
       "@/*": ["./src/*"]
     }
   },
-  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
+  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts", ".next-e2e/types/**/*.ts"],
   "exclude": ["node_modules"]
 }
```

## Full contents of new files

### `projects/sfia-studio-next/web/scripts/e2e-preflight.ts`
```
#!/usr/bin/env npx tsx
/**
 * Read-only E2E Postgres preflight. Fail-closed BEFORE any CREATE DATABASE / migrate.
 * On success: prints E2E DATABASE_URL alone on stdout (caller captures; never log it).
 * Diagnostics go to stderr without credentials.
 */
import { config } from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { execFileSync } from "child_process";
import {
  assertApprovedOperatorDatabaseUrl,
  assertContainerLoopbackPortMapping,
  buildE2eDatabaseUrl,
  E2E_PG_EXPECTED,
} from "../src/lib/e2e-pg-gate";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
config({ path: resolve(root, ".env.local") });

const container = process.env.SFIA_PG_CONTAINER || E2E_PG_EXPECTED.container;
const e2eDb = process.env.SFIA_E2E_DATABASE || E2E_PG_EXPECTED.e2eDatabase;

try {
  assertApprovedOperatorDatabaseUrl(process.env.DATABASE_URL);

  let portOut: string;
  try {
    portOut = execFileSync("docker", ["port", container, "5432"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch {
    console.error(
      `STOP — NEXT ENVIRONMENT GATE FAILED: docker port ${container} 5432 unavailable`,
    );
    process.exit(2);
  }
  assertContainerLoopbackPortMapping(portOut, E2E_PG_EXPECTED.port);

  const built = buildE2eDatabaseUrl(process.env.DATABASE_URL!, e2eDb);
  if (built.operatorDatabase === built.e2eDatabase) {
    console.error("STOP — NEXT ENVIRONMENT GATE FAILED: target equals source");
    process.exit(2);
  }
  if (built.operatorDatabase !== E2E_PG_EXPECTED.operatorDatabase) {
    console.error("STOP — NEXT ENVIRONMENT GATE FAILED: operator DB identity mismatch");
    process.exit(2);
  }
  if (built.e2eDatabase !== E2E_PG_EXPECTED.e2eDatabase) {
    console.error("STOP — NEXT ENVIRONMENT GATE FAILED: E2E DB identity mismatch");
    process.exit(2);
  }

  console.error(
    `e2e-preflight OK: operator=${built.operatorDatabase} → e2e=${built.e2eDatabase} container=${container} port=${E2E_PG_EXPECTED.port}`,
  );
  process.stdout.write(built.e2eDatabaseUrl);
} catch (e) {
  const code = e && typeof e === "object" && "code" in e ? String((e as { code: string }).code) : "E2E_PG_GATE";
  const msg = e instanceof Error ? e.message : String(e);
  console.error(`STOP — NEXT ENVIRONMENT GATE FAILED: ${code}: ${msg}`);
  process.exit(2);
}
```

### `projects/sfia-studio-next/web/src/lib/e2e-pg-gate.ts`
```
/**
 * Fail-closed gate for Playwright E2E Postgres targeting.
 * Pure validation — no CREATE DATABASE, no migrations, no network to OpenAI.
 */

export const E2E_PG_EXPECTED = {
  hosts: ["127.0.0.1", "localhost"] as const,
  port: 5433,
  operatorDatabase: "sfia_next_dev",
  e2eDatabase: "sfia_next_e2e",
  container: "sfia-next-dev-pg",
} as const;

export type E2ePgGateErrorCode =
  | "E2E_PG_URL_MISSING"
  | "E2E_PG_URL_INVALID"
  | "E2E_PG_PROTOCOL_FORBIDDEN"
  | "E2E_PG_HOST_FORBIDDEN"
  | "E2E_PG_PORT_FORBIDDEN"
  | "E2E_PG_SOURCE_DB_FORBIDDEN"
  | "E2E_PG_TARGET_FORBIDDEN"
  | "E2E_PG_TARGET_EQ_SOURCE"
  | "E2E_PG_USERINFO_AMBIGUOUS"
  | "E2E_PG_CONTAINER_MAPPING_FORBIDDEN";

export class E2ePgGateError extends Error {
  readonly code: E2ePgGateErrorCode;
  constructor(code: E2ePgGateErrorCode, message: string) {
    super(message);
    this.code = code;
    this.name = "E2ePgGateError";
  }
}

function databaseNameFromPathname(pathname: string): string {
  const raw = pathname.replace(/^\//, "");
  const db = raw.split("/")[0] ?? "";
  return decodeURIComponent(db);
}

/**
 * Validate operator DATABASE_URL is the approved local DEV Postgres identity.
 * Does not rewrite; does not print credentials.
 */
export function assertApprovedOperatorDatabaseUrl(raw: string | undefined | null): URL {
  if (raw == null || String(raw).trim() === "") {
    throw new E2ePgGateError("E2E_PG_URL_MISSING", "DATABASE_URL missing");
  }
  let u: URL;
  try {
    u = new URL(String(raw).trim());
  } catch {
    throw new E2ePgGateError("E2E_PG_URL_INVALID", "DATABASE_URL is not a valid URL");
  }

  if (u.protocol !== "postgres:" && u.protocol !== "postgresql:") {
    throw new E2ePgGateError(
      "E2E_PG_PROTOCOL_FORBIDDEN",
      `protocol must be postgres/postgresql (got ${u.protocol})`,
    );
  }

  const host = u.hostname.toLowerCase();
  if (!(E2E_PG_EXPECTED.hosts as readonly string[]).includes(host)) {
    throw new E2ePgGateError(
      "E2E_PG_HOST_FORBIDDEN",
      "host must be exact loopback 127.0.0.1 or localhost",
    );
  }

  // Empty port would default to 5432 — not our DEV mapping.
  const port = u.port === "" ? 5432 : Number(u.port);
  if (port !== E2E_PG_EXPECTED.port) {
    throw new E2ePgGateError(
      "E2E_PG_PORT_FORBIDDEN",
      `port must be ${E2E_PG_EXPECTED.port} (got ${port})`,
    );
  }

  const sourceDb = databaseNameFromPathname(u.pathname);
  if (!sourceDb) {
    throw new E2ePgGateError("E2E_PG_SOURCE_DB_FORBIDDEN", "source database name missing");
  }
  if (sourceDb === E2E_PG_EXPECTED.e2eDatabase) {
    throw new E2ePgGateError(
      "E2E_PG_SOURCE_DB_FORBIDDEN",
      "operator URL must point at sfia_next_dev, not sfia_next_e2e",
    );
  }
  if (sourceDb !== E2E_PG_EXPECTED.operatorDatabase) {
    throw new E2ePgGateError(
      "E2E_PG_SOURCE_DB_FORBIDDEN",
      `operator database must be ${E2E_PG_EXPECTED.operatorDatabase}`,
    );
  }

  return u;
}

/**
 * Build E2E URL from a validated operator URL. Target must be sfia_next_e2e only.
 */
export function buildE2eDatabaseUrl(
  operatorUrl: string,
  e2eDatabase: string = E2E_PG_EXPECTED.e2eDatabase,
): { operatorDatabase: string; e2eDatabase: string; e2eDatabaseUrl: string } {
  const u = assertApprovedOperatorDatabaseUrl(operatorUrl);
  const operatorDatabase = databaseNameFromPathname(u.pathname);

  if (e2eDatabase !== E2E_PG_EXPECTED.e2eDatabase) {
    throw new E2ePgGateError(
      "E2E_PG_TARGET_FORBIDDEN",
      `E2E database must be ${E2E_PG_EXPECTED.e2eDatabase}`,
    );
  }
  if (e2eDatabase === operatorDatabase) {
    throw new E2ePgGateError("E2E_PG_TARGET_EQ_SOURCE", "E2E target must differ from operator DB");
  }

  const e2e = new URL(u.toString());
  e2e.pathname = `/${e2eDatabase}`;
  return {
    operatorDatabase,
    e2eDatabase,
    e2eDatabaseUrl: e2e.toString(),
  };
}

/**
 * Parse `docker port <container> 5432` output; require loopback → 5433.
 * Example approved: `127.0.0.1:5433`
 */
export function assertContainerLoopbackPortMapping(
  dockerPortOutput: string,
  expectedHostPort: number = E2E_PG_EXPECTED.port,
): void {
  const lines = dockerPortOutput
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  if (lines.length === 0) {
    throw new E2ePgGateError(
      "E2E_PG_CONTAINER_MAPPING_FORBIDDEN",
      "docker port mapping empty",
    );
  }
  // Approved formats only: 127.0.0.1:5433 | localhost:5433 | [::1]:5433 (not 0.0.0.0).
  const approved = lines.some((line) => {
    const loopback = /^(?:127\.0\.0\.1|localhost|\[::1\]):(\d+)$/i.exec(line);
    if (!loopback) return false;
    return Number(loopback[1]) === expectedHostPort;
  });
  if (!approved) {
    throw new E2ePgGateError(
      "E2E_PG_CONTAINER_MAPPING_FORBIDDEN",
      `container must map 5432/tcp to loopback:${expectedHostPort}`,
    );
  }
}
```

### `projects/sfia-studio-next/web/tests/unit/e2e-pg-gate.test.ts`
```
import { describe, expect, it } from "vitest";
import {
  assertApprovedOperatorDatabaseUrl,
  assertContainerLoopbackPortMapping,
  buildE2eDatabaseUrl,
  E2ePgGateError,
} from "@/lib/e2e-pg-gate";

const good =
  "postgres://sfia_next_dev:local-only@127.0.0.1:5433/sfia_next_dev";

function expectCode(fn: () => unknown, code: string) {
  try {
    fn();
    expect.unreachable("expected throw");
  } catch (e) {
    expect(e).toBeInstanceOf(E2ePgGateError);
    expect((e as E2ePgGateError).code).toBe(code);
  }
}

describe("E2E Postgres preflight gate (no writes)", () => {
  it("accepts approved operator URL and builds distinct e2e URL", () => {
    const u = assertApprovedOperatorDatabaseUrl(good);
    expect(u.hostname).toBe("127.0.0.1");
    expect(u.port).toBe("5433");
    const built = buildE2eDatabaseUrl(good);
    expect(built.operatorDatabase).toBe("sfia_next_dev");
    expect(built.e2eDatabase).toBe("sfia_next_e2e");
    expect(built.e2eDatabaseUrl).toContain("/sfia_next_e2e");
    expect(built.e2eDatabaseUrl).not.toMatch(/\/sfia_next_dev$/);
  });

  it("rejects missing / invalid / remote / wrong port / wrong source DB", () => {
    expectCode(() => assertApprovedOperatorDatabaseUrl(undefined), "E2E_PG_URL_MISSING");
    expectCode(() => assertApprovedOperatorDatabaseUrl("not-a-url"), "E2E_PG_URL_INVALID");
    expectCode(
      () => assertApprovedOperatorDatabaseUrl("postgres://u:p@db.example.com:5433/sfia_next_dev"),
      "E2E_PG_HOST_FORBIDDEN",
    );
    expectCode(
      () => assertApprovedOperatorDatabaseUrl("postgres://u:p@127.0.0.1:5432/sfia_next_dev"),
      "E2E_PG_PORT_FORBIDDEN",
    );
    expectCode(
      () => assertApprovedOperatorDatabaseUrl("postgres://u:p@127.0.0.1:5433/sfia_next_e2e"),
      "E2E_PG_SOURCE_DB_FORBIDDEN",
    );
    expectCode(
      () => assertApprovedOperatorDatabaseUrl("postgres://u:p@127.0.0.1:5433/other_db"),
      "E2E_PG_SOURCE_DB_FORBIDDEN",
    );
    expectCode(
      () => assertApprovedOperatorDatabaseUrl("mysql://u:p@127.0.0.1:5433/sfia_next_dev"),
      "E2E_PG_PROTOCOL_FORBIDDEN",
    );
  });

  it("rejects non-approved target DB name", () => {
    expectCode(() => buildE2eDatabaseUrl(good, "sfia_next_dev"), "E2E_PG_TARGET_FORBIDDEN");
    expectCode(() => buildE2eDatabaseUrl(good, "recette_db"), "E2E_PG_TARGET_FORBIDDEN");
  });

  it("accepts loopback docker port mapping and rejects 0.0.0.0 / wrong port", () => {
    expect(() => assertContainerLoopbackPortMapping("127.0.0.1:5433\n")).not.toThrow();
    expect(() => assertContainerLoopbackPortMapping("localhost:5433")).not.toThrow();
    expectCode(() => assertContainerLoopbackPortMapping("0.0.0.0:5433"), "E2E_PG_CONTAINER_MAPPING_FORBIDDEN");
    expectCode(() => assertContainerLoopbackPortMapping("127.0.0.1:5432"), "E2E_PG_CONTAINER_MAPPING_FORBIDDEN");
    expectCode(() => assertContainerLoopbackPortMapping(""), "E2E_PG_CONTAINER_MAPPING_FORBIDDEN");
  });
});
```

### `projects/sfia-studio-next/web/tests/unit/next-dist-dir.test.ts`
```
import { afterEach, describe, expect, it, vi } from "vitest";

describe("Next distDir isolation (operator vs E2E)", () => {
  const prev = process.env.STUDIO_E2E;

  afterEach(() => {
    if (prev === undefined) delete process.env.STUDIO_E2E;
    else process.env.STUDIO_E2E = prev;
    vi.resetModules();
  });

  it("operator (no STUDIO_E2E) uses .next", async () => {
    delete process.env.STUDIO_E2E;
    vi.resetModules();
    const mod = await import("../../next.config");
    expect(mod.default.distDir).toBe(".next");
  });

  it("E2E (STUDIO_E2E=1) uses .next-e2e", async () => {
    process.env.STUDIO_E2E = "1";
    vi.resetModules();
    const mod = await import("../../next.config");
    expect(mod.default.distDir).toBe(".next-e2e");
  });
});
```

## Command log (redacted)

```
npm run test:unit → 22 PASS
npm run test:integration → 26 PASS
npm run test:e2e → 1 PASS (preflight OK; .next-e2e created; .next mtime unchanged; Test 1=1)
npx tsc --noEmit → PASS
npm run build → PASS
npm run lint → PASS
DATABASE_URL=…@evil.example… e2e-preflight → exit 2 HOST_FORBIDDEN (0 bytes stdout)
```

## Gaps / reserves

- Project branch still unpublished; Morris push gate separate after ChatGPT review
- NO RELEASE / RECETTE/STABLE NOT AVAILABLE
- Handoff L3 is the only authorized remote write

## STOP conditions — none triggered

NO PROJECT PUSH / NO PR / NO MERGE
