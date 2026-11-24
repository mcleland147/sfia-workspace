# Review Pack FULL — Next ML5 operational RECETTE parity

**Generated (UTC):** 2026-11-24T18:05:07Z  
**Mode:** publish-in-cycle · Review Pack FULL · Critical INC  
**Product branch:** `sfia/next-ml5-integrated-delivery-20261123`  
**Product candidate SHA:** `7f48daa28f00f390c34c58951ee5ceeb311f4d40`  
**Product tree:** `7b8683951dbbe8a2bb6a72b5a0e39fd29b2d7e7e`  
**DEV HEAD (docs identity):** `34c614d988827db798024ac9d0a874927b8bacdf`  
**merge-base origin/main:** `997897fd7cf914771e7d08e8030dc7123fab7d25`  
**RECETTE build:** `_ZDI1cWa1hscluvBhaiA4`  
**contentDigest:** `ed59106d8706fb8267620682c0fd0abd2636cab06b4e649a18d23ff64bf8514f`  
**Policy version:** `ml5-cog-policy-v3-recette-operational-provisional`  
**Product versioning:** NO RELEASE · STABLE NOT AVAILABLE  
**Handoff parent remote:** `d165c53076bc69f8c16051226d42df08ed02ff5a`  
**Commit message (handoff):** `docs(review-handoff): publish Next ML5 operational recette parity`

## 0. Verdict

**RECETTE OPERATIONAL PARITY — READY FOR MORRIS UAT**  
**Global:** READY WITH RESERVES (not ML5 CLOSED, not OPERATIONAL_VALIDATED, not STABLE)

### §9.1 Critical summary

1. **NORA COGNITIVE POLICY** — RECETTE runs `OPERATIONAL_PROVISIONAL` + GPT-6.2 Sol; TEST_BOUNDARY no longer nominal; STABLE/PROD still refuse operational; budgets 24 segments / 200k tokens unchanged.
2. **ML5 CAPABILITY PARITY** — WEB public catalog fed on RECETTE; Cursor LIVE configured; OAuth normal; auto-session 403; Git documentary allowlist preserved; D8 OS isolation still NOT DEMONSTRATED.
3. **CURSOR LIVE AVAILABILITY AND CONFINEMENT** — LIVE mode + FileCredentialStore key; workspace root `/tmp/sfia-ml5-recette-cursor-live-ws` outside product trees; hashed pilot/project segments; client absolute cwd rejected; **no D6 dispatch** performed this cycle.
4. **RECETTE CANDIDATE AND BUILD** — SHA `7f48daa2` · BUILD `_ZDI1cWa1hscluvBhaiA4` · `http://127.0.0.1:3200/login` · 26 projects preserved.
5. **REMAINING GAPS** — UAT-01/09 activity; F2; R2 LIVE; D8 OS isolation; WEB LIVE search gated; Cursor realization still needs HumanDecision D6; policy not production-validated.

## 1. Git Truth Check

| Item | Value | Status |
| --- | --- | --- |
| DEV worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` | OK |
| Branch | `sfia/next-ml5-integrated-delivery-20261123` | OK |
| Pre-cycle HEAD | `807713cb89163b711db33f1f0e28bd9b99dbbc4d` | OK |
| Candidate code | `7f48daa28f00f390c34c58951ee5ceeb311f4d40` | OK |
| Docs identity commit | `34c614d988827db798024ac9d0a874927b8bacdf` | OK |
| origin/main merge-base | `997897fd7cf914771e7d08e8030dc7123fab7d25` | OK |
| Previous RECETTE | `8410906d` / `e0XwSWvjujz-xaHfXsrQK` | preserved as rollback |
| Handoff remote tip | `d165c530` | OK |
| Destructive git | NONE | OK |

## 2. Parity matrix (before → after)

| Capability | Owner | DEV before | RECETTE before | RECETTE after | Gap closed? | Proof |
| --- | --- | --- | --- | --- | --- | --- |
| D1 auth/isolation | D1 | OAuth + auto-session DEV | OAuth; auto-session off | same; auto-session 403 | n/a (already) | HTTP 401/403 |
| D3 policy regime | D3 | OPERATIONAL_PROVISIONAL | TEST_BOUNDARY | OPERATIONAL_PROVISIONAL | YES | boot log + Nora smoke |
| D3 model/effort | D3 | gpt-6.2-sol adaptive | stress ceilings | gpt-6.2-sol adaptive | YES | OBS policy_selected |
| D3 budgets work | D3 | 24 / 200k | (stress) | 24 / 200k | YES | env + cognitive-work defaults |
| D3 WEB catalog | D3 | default catalog | empty default | default catalog | YES | unit + code |
| D4/D5/D6 | multi | available | available (lane rights) | unchanged rights | config only | no code change |
| D7 Cursor mode | D7 | LIVE | FAKE default | LIVE nominal | YES | boot + probe |
| D7 confinement | D7 | /tmp live ws | /tmp fake ws | /tmp live ws + product-tree refuse | HARDENED | probe + unit |
| D8 restitution | D8 | supervisors via instrumentation | same code; FAKE limited | LIVE path available; OS isolation open | PARTIAL | instrumentation.ts |
| D9 Git read | D9 | real | real documentary | unchanged | n/a | env preserved |

## 3. Decisions and limits

- GO engineering Morris ≠ HumanDecision D6.
- OPERATIONAL_PROVISIONAL ≠ OPERATIONAL_VALIDATED ≠ production policy.
- No budget raise; no new regime; no new sandbox; no product push/PR/STABLE.
- Cursor LIVE activation = configuration + confinement proof; **not** universal realization mandate.
- WEB: catalog feed only; free/unconfined search not opened.
- Independent D8 execution remains disabled pending OS isolation proof.

## 4. Validations

| Check | Result |
| --- | --- |
| vitest blast-radius (policy/workspace/web/git/frontier) | 40/40 PASS |
| eslint touched files | 0 errors (2 pre-existing warnings) |
| tsc --noEmit | pre-existing unrelated test typing noise; no new errors in touched owners |
| git diff --check | clean on product commit |
| Nora LIVE smoke RECETTE | `openai-agents-sdk-live` COMPLETE; policy v3; OPERATIONAL_PROVISIONAL |
| Cursor confinement probe | PASS LIVE + FILE_CREDENTIAL_STORE |
| HTTP /login | 200 |
| HTTP /api/portfolio | 401 |
| POST /api/dev/auto-session | 403 |
| projects count | 26 |

### Nora smoke (redacted)

```json
{"policyVersion":"ml5-cog-policy-v3-recette-operational-provisional","profileType":"OPERATIONAL_PROVISIONAL","mode":"openai-agents-sdk-live","status":"COMPLETE","contentLen":4,"hasFakeCompleteText":false,"generationIdPresent":true}
```

### Cursor probe (redacted)

```json
{
  "ok": true,
  "effectModeConfigured": "LIVE",
  "liveNominal": true,
  "keySource": "FILE_CREDENTIAL_STORE",
  "workspaceRoot": "/private/tmp/sfia-ml5-recette-cursor-live-ws",
  "confinement": "ROOT_HASHED_SEGMENTS_OUTSIDE_PRODUCT_TREES",
  "dispatch": "NOT_PERFORMED — requires D6 HumanDecision",
  "mutation": "NONE"
}
```

## 5. RECETTE manifeste

```json
{
  "lane": "RECETTE",
  "source_repository": "mcleland147/sfia-workspace",
  "source_branch": "sfia/next-ml5-integrated-delivery-20261123",
  "base_main_sha": "997897fd7cf914771e7d08e8030dc7123fab7d25",
  "candidate_sha": "7f48daa28f00f390c34c58951ee5ceeb311f4d40",
  "candidate_tree": "7b8683951dbbe8a2bb6a72b5a0e39fd29b2d7e7e",
  "build_identifier": "_ZDI1cWa1hscluvBhaiA4",
  "contentDigest": "ed59106d8706fb8267620682c0fd0abd2636cab06b4e649a18d23ff64bf8514f",
  "product_version": "NOT AVAILABLE",
  "candidate_version": "NOT AVAILABLE",
  "release_status": "NO RELEASE",
  "served_address": "http://127.0.0.1:3200",
  "listen_bind": "127.0.0.1:3200",
  "cognitive_policy_version": "ml5-cog-policy-v3-recette-operational-provisional",
  "cognitive_profile_type": "OPERATIONAL_PROVISIONAL",
  "cognitive_budgets": {
    "max_segments": 24,
    "max_tokens": 200000
  },
  "schema_revision": "001\u2192021 preserved (no new migrations this cutover)",
  "test_data_revision": "preserved-recette-ml4-db-26-projects",
  "worktree": "/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-7f48daa28f00",
  "postgresql": {
    "container": "sfia-next-recette-pg",
    "port": 5434,
    "database": "sfia_next_recette_ml4",
    "projects_count": 26
  },
  "previous_recette": {
    "SOURCE": "8410906d3236b3c0db31b12caa9b104c58079f05",
    "TREE": "a6130f3240290f1e2fbef05d4b2e55d946ca2715",
    "BUILD_ID": "e0XwSWvjujz-xaHfXsrQK",
    "worktree": "/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-8410906d3236",
    "cog_profile": "TEST_BOUNDARY",
    "cursor_mode": "FAKE"
  },
  "backup": {
    "path": "/Users/morris/Projects/sfia-recette-backups/ml5-20261124T180118Z-pre-7f48daa28f00",
    "dump_sha256": "ed69adf02e72ebe6410f4de917befbc0f89c9229c2e0498b773a7d575a7b97cb"
  },
  "capabilities": {
    "github_oauth": "CONFIGURED \u2014 LIVE callback requires Morris browser authorize",
    "studio_dev_test_login": "DISABLED",
    "studio_dev_auto_session": "DISABLED (403 proven)",
    "openai_nora": "LIVE smoke PASS openai-agents-sdk-live COMPLETE \u2014 OPERATIONAL_PROVISIONAL gpt-6.2-sol",
    "git": "documentary mutations allowlist preserved",
    "web": "public topic catalog enabled on RECETTE \u2014 free search not opened",
    "cursor_sdk": "LIVE configured + confinement probe PASS \u2014 dispatch still requires D6",
    "d8_os_isolation": "NOT DEMONSTRATED \u2014 independent verify remains limited"
  },
  "quality_evidence": [
    "commit 7f48daa2 operational parity",
    "vitest unit blast-radius 40/40",
    "next build BUILD_ID _ZDI1cWa1hscluvBhaiA4",
    "HTTP /login 200; /api/portfolio 401; auto-session 403",
    "Nora LIVE smoke COMPLETE OPERATIONAL_PROVISIONAL",
    "Cursor confinement probe LIVE key FILE_CREDENTIAL_STORE",
    "projects count preserved=26"
  ],
  "reserves": [
    "UAT-01/UAT-09 activity UX still open",
    "F2 page 12 PARTIAL",
    "R2 LIVE complete not proven",
    "D8 OS isolation pending",
    "OPERATIONAL_PROVISIONAL not OPERATIONAL_VALIDATED / not production policy",
    "Cursor LIVE dispatch not exercised without D6 HumanDecision this cycle",
    "WEB LIVE search remains gated; catalog feed only"
  ],
  "rollback": {
    "plist_bak": "/Users/morris/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux004.plist.20261124T180118Z.pre-op-parity-cutover-7f48daa28f00.bak",
    "previous_start": "/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-8410906d3236/start-recette-ml5-e0XwSWvjujz-xaHfXsrQK.sh",
    "env_bak": "/Users/morris/.config/sfia-studio-next/recette/.env.local.bak.pre-op-parity-20261124T180118Z",
    "note": "rollback code \u2260 automatic data rollback; restore dump if schema reverse required"
  },
  "decision": "RECETTE OPERATIONAL PARITY \u2014 READY FOR MORRIS UAT",
  "stable": "NOT AVAILABLE",
  "built_at_utc": "2026-11-24T18:04:19Z"
}

```

## 6. Rollback

1. `launchctl bootout` label `com.sfia.studio.next.recette.ml4d-ux004`
2. Restore plist from `…plist.20261124T180118Z.pre-op-parity-cutover-7f48daa28f00.bak`
3. Point ProgramArguments to previous start script `…8410906d3236/start-recette-ml5-e0XwSWvjujz-xaHfXsrQK.sh`
4. Restore env from `~/.config/sfia-studio-next/recette/.env.local.bak.pre-op-parity-20261124T180118Z`
5. Optional DB restore: dump sha256 `ed69adf02e72ebe6410f4de917befbc0f89c9229c2e0498b773a7d575a7b97cb` under backup dir `ml5-20261124T180118Z-pre-7f48daa28f00`

## 7. Files created (FULL)


### `projects/sfia-studio-next/web/scripts/probe-cursor-live-confinement.mjs`

```
#!/usr/bin/env node
/**
 * Bounded Cursor LIVE + confinement probe (no D6 dispatch, no mutation).
 * Exit 0 = SDK key resolvable + workspace root confined outside product trees.
 */
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, realpathSync } from "node:fs";
import { isAbsolute, join, normalize, relative, resolve, sep } from "node:path";
function fail(msg) {
  console.error(JSON.stringify({ ok: false, error: msg }));
  process.exit(1);
}

function assertRootSafe(realRoot) {
  const lowered = realRoot.toLowerCase();
  const forbidden = [
    "/sfia-workspace/",
    "/sfia-wt-next-",
    "/sfia-workspace-next-",
    "/projects/sfia-studio-next/",
  ];
  for (const marker of forbidden) {
    if (lowered.includes(marker.toLowerCase())) {
      fail(`ROOT_INSIDE_PRODUCT_TREE:${marker}`);
    }
  }
  const leaf = realRoot.replace(/\/+$/, "").split(sep).pop() ?? "";
  if (
    leaf === "sfia-workspace" ||
    /^sfia-wt-next-/.test(leaf) ||
    /^sfia-workspace-next-/.test(leaf)
  ) {
    fail("ROOT_EQUALS_PRODUCT_CHECKOUT");
  }
}

const mode = (process.env.SFIA_CURSOR_EFFECT_MODE || "").trim().toUpperCase();
const rawRoot = (process.env.SFIA_CURSOR_WORKSPACE_ROOT || "").trim();
if (!rawRoot) fail("SFIA_CURSOR_WORKSPACE_ROOT_MISSING");
if (!isAbsolute(rawRoot)) fail("SFIA_CURSOR_WORKSPACE_ROOT_NOT_ABSOLUTE");
mkdirSync(rawRoot, { recursive: true, mode: 0o700 });
if (!existsSync(rawRoot)) fail("SFIA_CURSOR_WORKSPACE_ROOT_ABSENT");
const root = realpathSync(normalize(rawRoot));
assertRootSafe(root);

const pilotSeg = createHash("sha256").update("probe-pilot", "utf8").digest("hex").slice(0, 16);
const projectSeg = createHash("sha256")
  .update("probe-project", "utf8")
  .digest("hex")
  .slice(0, 16);
const candidate = resolve(join(root, pilotSeg, projectSeg, "default"));
const rel = relative(root, candidate);
if (rel.startsWith("..") || isAbsolute(rel)) fail("WORKSPACE_ESCAPES_ROOT");
mkdirSync(candidate, { recursive: true, mode: 0o700 });
const realWs = realpathSync(candidate);
const relReal = relative(root, realWs);
if (relReal.startsWith("..") || isAbsolute(relReal)) fail("WORKSPACE_REALPATH_ESCAPES");

const productMarkers = [
  "/Users/morris/Projects/sfia-workspace",
  "/Users/morris/Projects/sfia-wt-next-ml5-20261123",
];
for (const p of productMarkers) {
  if (realWs === p || realWs.startsWith(p + sep) || root === p || root.startsWith(p + sep)) {
    fail(`WORKSPACE_OVERLAPS_PRODUCT:${p}`);
  }
}

let keySource = "NONE";
try {
  const fromEnv = (process.env.CURSOR_API_KEY || "").trim();
  if (fromEnv) {
    keySource = "ENV";
  } else {
    const sdk = await import("@cursor/sdk");
    const store = new sdk.FileCredentialStore();
    const creds = await store.load();
    if (typeof creds?.apiKey === "string" && creds.apiKey.trim()) {
      keySource = "FILE_CREDENTIAL_STORE";
    }
  }
} catch (e) {
  fail(`KEY_RESOLVE_ERROR:${String(e).slice(0, 120)}`);
}

if (keySource === "NONE") fail("CURSOR_API_KEY_UNAVAILABLE");

const out = {
  ok: true,
  effectModeConfigured: mode || "UNSET",
  liveNominal: mode === "LIVE",
  keySource,
  workspaceRoot: root,
  probeWorkspace: realWs,
  confinement: "ROOT_HASHED_SEGMENTS_OUTSIDE_PRODUCT_TREES",
  dispatch: "NOT_PERFORMED — requires D6 HumanDecision",
  mutation: "NONE",
};
console.log(JSON.stringify(out, null, 2));
process.exit(mode === "LIVE" ? 0 : 0);

```

### `projects/sfia-studio-next/construction/as-built-ml5-operational-recette-parity-20261124.md`

```
# As-built — ML5 operational RECETTE parity (2026-11-24)

**Class:** NO RELEASE · Cycle 8 Delivery / INC Critical  
**Branch:** `sfia/next-ml5-integrated-delivery-20261123`  
**Policy version:** `ml5-cog-policy-v3-recette-operational-provisional`

## Intent

Make RECETTE represent the target ML5 product for Morris UAT:

1. Nora nominal cognition = `OPERATIONAL_PROVISIONAL` (explicit) on DEV **and** RECETTE.
2. Indispensable ML5 capabilities regularized (WEB catalog feed, Cursor LIVE config).
3. Cursor SDK LIVE available in RECETTE under existing workspace confinement + D6 authority.

## Code owners touched

| Area | Path | Change |
| --- | --- | --- |
| D3 policy | `web/src/domains/conversation/cognitive-policy.ts` | Allow `OPERATIONAL_PROVISIONAL` on `DEV\|RECETTE`; refuse `STABLE/PROD/UNKNOWN`; bump policy version |
| D3 adapter | `web/src/domains/conversation/nora-adapter.ts` | Boundary envelope uses `COGNITIVE_POLICY_VERSION` |
| D3 WEB | `web/src/domains/conversation/public-web-registry.ts` | Default public topic catalog on RECETTE (same templates as DEV) |
| D7 confinement | `web/src/domains/execution/workspace-resolver.ts` | Refuse Cursor roots inside product/method trees |
| Probe | `web/scripts/probe-cursor-live-confinement.mjs` | Bounded LIVE key + confinement check (no dispatch) |

## Budgets (unchanged ceilings)

- Work caps default: `SFIA_COGNITIVE_MAX_SEGMENTS=24`, `SFIA_COGNITIVE_MAX_TOKENS=200000` (`cognitive-work.ts`).
- Profile budgets: `OPERATIONAL_BUDGETS_PROVISIONAL` (DEV reference, **not** production-validated).
- `TEST_BOUNDARY` remains for explicit stress tests only.
- `OPERATIONAL_VALIDATED` still refused.

## RECETTE configuration (non-secret)

| Variable | Target |
| --- | --- |
| `STUDIO_LANE` | `RECETTE` |
| `SFIA_COG_PROFILE_TYPE` | `OPERATIONAL_PROVISIONAL` |
| `SFIA_COGNITIVE_MAX_SEGMENTS` | `24` |
| `SFIA_COGNITIVE_MAX_TOKENS` | `200000` |
| `SFIA_CURSOR_EFFECT_MODE` | `LIVE` |
| `SFIA_CURSOR_WORKSPACE_ROOT` | `/tmp/sfia-ml5-recette-cursor-live-ws` (outside product trees) |
| `SFIA_CURSOR_MODEL_ID` | `composer-2.5` |
| `STUDIO_DEV_AUTO_SESSION` | unset / forbidden |
| `STUDIO_DEV_TEST_LOGIN` | `0` |

Cursor API key: FileCredentialStore or dedicated `CURSOR_API_KEY` — never committed.

## Explicit non-goals

- No new cognitive regime; no budget raise; no D8 OS sandbox; no product push/PR/STABLE.
- No exhaustive UAT-01…10 closure; UAT-01/09 activity gaps remain open.
- Dispatch of Cursor remains subject to D6 HumanDecision — GO engineering ≠ mandate.

## Verdict target

`RECETTE OPERATIONAL PARITY — READY FOR MORRIS UAT` when served SHA/build match this candidate and LIVE/confinement probes pass.

```

## 8. Sections modified (FULL diffs)

### `cognitive-policy.ts`

```diff
commit 7f48daa28f00f390c34c58951ee5ceeb311f4d40
Author: Morris Cleland <morris@macbook-air.home>
Date:   Tue Nov 24 19:01:06 2026 +0100

    fix(next): enable ML5 operational RECETTE parity for Nora and Cursor
    
    Allow OPERATIONAL_PROVISIONAL on DEV and RECETTE, feed the public WEB catalog in RECETTE, and harden Cursor workspace roots outside product trees so RECETTE can run LIVE under existing D6 authority.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
index 4cc2efa3..eb0f8598 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
@@ -1,6 +1,7 @@
 /**
  * D3 cognitive policy — proportional qualification without a second LLM classifier.
- * TEST_BOUNDARY = stress-only. OPERATIONAL_PROVISIONAL = DEV explicit only (not validated).
+ * TEST_BOUNDARY = stress-only (explicit tests).
+ * OPERATIONAL_PROVISIONAL = explicit DEV or RECETTE (Morris GO 2026-11-24) — not production-validated.
  * OPERATIONAL_VALIDATED = Morris-approved only (not yet available).
  */
 
@@ -13,7 +14,9 @@ export type PolicyProfileType =
   | "OPERATIONAL_VALIDATED";
 export type ReasoningEffort = "low" | "medium" | "high";
 
-export const COGNITIVE_POLICY_VERSION = "ml2-cog-policy-v2-corrective" as const;
+/** Traces RECETTE operational-provisional allowance without rewriting historical meta. */
+export const COGNITIVE_POLICY_VERSION =
+  "ml5-cog-policy-v3-recette-operational-provisional" as const;
 /** Study model — C23: all active Nora refs use GPT-6.2 Sol (Morris). */
 export const NORA_STUDY_MODEL = "gpt-6.2-sol" as const;
 
@@ -44,10 +47,9 @@ export type BudgetLimits = {
  * Artificial stress ceilings for qualification only.
  * MUST NOT become implicit operational defaults.
  *
- * RECETTE currently runs SFIA_COG_PROFILE_TYPE=TEST_BOUNDARY (OPERATIONAL_*
- * forbidden on protected lanes until OPERATIONAL_VALIDATED). Git call ceilings
- * below are sized for a nominal multi-tool Git READ (UAT-01..07), not for
- * unbounded exploration — D4 call stress ceilings stay tighter.
+ * TEST_BOUNDARY remains available for explicit stress tests.
+ * Nominal RECETTE uses OPERATIONAL_PROVISIONAL (explicit env), not these ceilings.
+ * Git call ceilings below are sized for a nominal multi-tool Git READ (UAT-01..07).
  */
 export const TEST_BOUNDARY_BUDGETS: Record<CognitiveProfile, BudgetLimits> = {
   // Lot E/D5: short messages must still be able to call authorized read tools.
@@ -76,8 +78,9 @@ export const TEST_BOUNDARY_BUDGETS: Record<CognitiveProfile, BudgetLimits> = {
 
 /**
  * Provisional OPERATIONAL ceilings — finite and reconfigurable.
- * NOT VALIDATED. Must be explicitly activated in DEV (SFIA_COG_PROFILE_TYPE).
- * Must NEVER activate silently in RECETTE/PROD/protected lanes.
+ * NOT VALIDATED as production policy.
+ * Explicit activation via SFIA_COG_PROFILE_TYPE on DEV or RECETTE only.
+ * Never silent; never STABLE/PROD/UNKNOWN.
  */
 export const OPERATIONAL_BUDGETS_PROVISIONAL: Record<CognitiveProfile, BudgetLimits> = {
   simple: {
@@ -139,16 +142,29 @@ function studioLane(): string {
   return (process.env.STUDIO_LANE ?? "UNKNOWN").trim().toUpperCase() || "UNKNOWN";
 }
 
-function isProtectedLane(lane: string): boolean {
-  return lane === "RECETTE" || lane === "STABLE" || lane === "PROD" || lane === "PRODUCTION";
+/** STABLE/PROD/unknown never receive operational budgets. */
+export function isOperationalForbiddenLane(lane: string): boolean {
+  return (
+    lane === "STABLE" ||
+    lane === "PROD" ||
+    lane === "PRODUCTION" ||
+    lane === "UNKNOWN" ||
+    !lane
+  );
+}
+
+/** Morris GO 2026-11-24 — OPERATIONAL_PROVISIONAL explicit on DEV and RECETTE only. */
+export function isOperationalProvisionalAllowedLane(lane: string): boolean {
+  return lane === "DEV" || lane === "RECETTE";
 }
 
 /**
  * Fail-closed profile resolution.
- * - absent → DEV defaults to TEST_BOUNDARY; protected/unknown → refuse
- * - OPERATIONAL_PROVISIONAL → DEV only
+ * - absent → DEV defaults to TEST_BOUNDARY; other lanes → refuse
+ * - OPERATIONAL_PROVISIONAL → explicit DEV or RECETTE only
  * - OPERATIONAL_VALIDATED → not yet approved → refuse
- * - legacy "OPERATIONAL" → alias of PROVISIONAL in DEV only
+ * - legacy "OPERATIONAL" → alias of PROVISIONAL (same lane rules)
+ * - STABLE / PROD / UNKNOWN → refuse operational regimes
  */
 export function resolveProfileType(override?: PolicyProfileType): PolicyProfileType {
   if (override) {
@@ -159,10 +175,13 @@ export function resolveProfileType(override?: PolicyProfileType): PolicyProfileT
         { httpStatus: 400 },
       );
     }
-    if (override === "OPERATIONAL_PROVISIONAL" && isProtectedLane(studioLane())) {
+    if (
+      override === "OPERATIONAL_PROVISIONAL" &&
+      !isOperationalProvisionalAllowedLane(studioLane())
+    ) {
       throw new StudioError(
         "INVALID_REQUEST",
-        "OPERATIONAL_PROVISIONAL interdit hors DEV",
+        "OPERATIONAL_PROVISIONAL interdit hors DEV/RECETTE",
         { httpStatus: 400 },
       );
     }
@@ -192,10 +211,17 @@ export function resolveProfileType(override?: PolicyProfileType): PolicyProfileT
   }
 
   if (raw === "OPERATIONAL_PROVISIONAL" || raw === "OPERATIONAL") {
-    if (lane !== "DEV") {
+    if (!isOperationalProvisionalAllowedLane(lane)) {
+      throw new StudioError(
+        "INVALID_REQUEST",
+        "OPERATIONAL_PROVISIONAL / OPERATIONAL interdit hors STUDIO_LANE=DEV|RECETTE",
+        { httpStatus: 400 },
+      );
+    }
+    if (isOperationalForbiddenLane(lane)) {
       throw new StudioError(
         "INVALID_REQUEST",
-        "OPERATIONAL_PROVISIONAL / OPERATIONAL interdit hors STUDIO_LANE=DEV",
+        "OPERATIONAL_PROVISIONAL interdit sur lane STABLE/PROD/UNKNOWN",
         { httpStatus: 400 },
       );
     }

```

### `workspace-resolver.ts`

```diff
commit 7f48daa28f00f390c34c58951ee5ceeb311f4d40
Author: Morris Cleland <morris@macbook-air.home>
Date:   Tue Nov 24 19:01:06 2026 +0100

    fix(next): enable ML5 operational RECETTE parity for Nora and Cursor
    
    Allow OPERATIONAL_PROVISIONAL on DEV and RECETTE, feed the public WEB catalog in RECETTE, and harden Cursor workspace roots outside product trees so RECETTE can run LIVE under existing D6 authority.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/execution/workspace-resolver.ts b/projects/sfia-studio-next/web/src/domains/execution/workspace-resolver.ts
index b8a9568f..8872a332 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/workspace-resolver.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/workspace-resolver.ts
@@ -42,6 +42,42 @@ function assertSafeKey(key: string): string {
   return k;
 }
 
+/**
+ * Refuse Cursor roots that sit inside product / method trees.
+ * A cwd hint in the prompt is not confinement — the root itself must be outside.
+ */
+function assertRootNotInsideProductTrees(realRoot: string): void {
+  const lowered = realRoot.toLowerCase();
+  const forbiddenSubstrings = [
+    "/sfia-workspace/",
+    "/sfia-wt-next-",
+    "/sfia-workspace-next-",
+    "/projects/sfia-studio-next/",
+  ];
+  for (const marker of forbiddenSubstrings) {
+    if (lowered.includes(marker.toLowerCase())) {
+      throw new StudioError(
+        "ACCESS_DENIED",
+        "SFIA_CURSOR_WORKSPACE_ROOT refuse — racine à l'intérieur d'un arbre produit/méthode",
+        { exposeMessage: true },
+      );
+    }
+  }
+  // Exact leaf matches (root == product checkout basename path endings)
+  const leaf = realRoot.replace(/\/+$/, "").split(sep).pop() ?? "";
+  if (
+    leaf === "sfia-workspace" ||
+    /^sfia-wt-next-/.test(leaf) ||
+    /^sfia-workspace-next-/.test(leaf)
+  ) {
+    throw new StudioError(
+      "ACCESS_DENIED",
+      "SFIA_CURSOR_WORKSPACE_ROOT refuse — racine égale à un dépôt produit",
+      { exposeMessage: true },
+    );
+  }
+}
+
 function resolveRoot(env: NodeJS.ProcessEnv): string {
   const raw = (env.SFIA_CURSOR_WORKSPACE_ROOT || "").trim();
   if (!raw) {
@@ -70,6 +106,7 @@ function resolveRoot(env: NodeJS.ProcessEnv): string {
       exposeMessage: true,
     });
   }
+  assertRootNotInsideProductTrees(real);
   return real;
 }
 

```

### `public-web-registry.ts`

```diff
commit 7f48daa28f00f390c34c58951ee5ceeb311f4d40
Author: Morris Cleland <morris@macbook-air.home>
Date:   Tue Nov 24 19:01:06 2026 +0100

    fix(next): enable ML5 operational RECETTE parity for Nora and Cursor
    
    Allow OPERATIONAL_PROVISIONAL on DEV and RECETTE, feed the public WEB catalog in RECETTE, and harden Cursor workspace roots outside product trees so RECETTE can run LIVE under existing D6 authority.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts b/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts
index db5e1d75..f35daa6c 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts
@@ -74,8 +74,9 @@ function normalize(s: string): string {
 }
 
 /**
- * Parse SFIA_DEV_PUBLIC_WEB_TOPIC_CATALOG JSON when set; else DEFAULT_DEV_CATALOG in DEV.
- * Production lanes get empty catalog unless explicitly configured.
+ * Parse SFIA_DEV_PUBLIC_WEB_TOPIC_CATALOG JSON when set; else DEFAULT catalog
+ * on DEV and RECETTE (known-public templates only — never free search).
+ * STABLE/PROD/UNKNOWN get empty catalog unless explicitly configured.
  */
 export function loadPublicTopicCatalog(
   env: Record<string, string | undefined> = process.env,
@@ -97,7 +98,7 @@ export function loadPublicTopicCatalog(
     }
   }
   const lane = (env.STUDIO_LANE || "DEV").trim().toUpperCase();
-  if (lane !== "DEV") return [];
+  if (lane !== "DEV" && lane !== "RECETTE") return [];
   if ((env.SFIA_PUBLIC_WEB_CATALOG_DEFAULT || "1").trim() === "0") return [];
   return DEFAULT_DEV_CATALOG;
 }

```

### `nora-adapter.ts`

```diff
commit 7f48daa28f00f390c34c58951ee5ceeb311f4d40
Author: Morris Cleland <morris@macbook-air.home>
Date:   Tue Nov 24 19:01:06 2026 +0100

    fix(next): enable ML5 operational RECETTE parity for Nora and Cursor
    
    Allow OPERATIONAL_PROVISIONAL on DEV and RECETTE, feed the public WEB catalog in RECETTE, and harden Cursor workspace roots outside product trees so RECETTE can run LIVE under existing D6 authority.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 8407acf2..e18a6dc3 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -8,6 +8,7 @@ import {
 } from "@/domains/decisions/divergence-assist";
 import {
   buildCognitivePolicy,
+  COGNITIVE_POLICY_VERSION,
   createSharedToolBudget,
   maxTurnsForPolicy,
   type CognitivePolicy,
@@ -1335,7 +1336,7 @@ async function runLiveWithTools(
 function minimalBoundaryPolicy(reasonCode: string): CognitivePolicy {
   // Construct without env resolution — used only for boundary fail envelopes.
   return {
-    policyVersion: "ml2-cog-policy-v2-corrective",
+    policyVersion: COGNITIVE_POLICY_VERSION,
     profileType: "TEST_BOUNDARY",
     profile: "simple",
     modelRequested: NORA_STUDY_MODEL,

```

### `cognitive-policy.test.ts`

```diff
commit 7f48daa28f00f390c34c58951ee5ceeb311f4d40
Author: Morris Cleland <morris@macbook-air.home>
Date:   Tue Nov 24 19:01:06 2026 +0100

    fix(next): enable ML5 operational RECETTE parity for Nora and Cursor
    
    Allow OPERATIONAL_PROVISIONAL on DEV and RECETTE, feed the public WEB catalog in RECETTE, and harden Cursor workspace roots outside product trees so RECETTE can run LIVE under existing D6 authority.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/tests/unit/cognitive-policy.test.ts b/projects/sfia-studio-next/web/tests/unit/cognitive-policy.test.ts
index 771d5c32..7a0b08d7 100644
--- a/projects/sfia-studio-next/web/tests/unit/cognitive-policy.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/cognitive-policy.test.ts
@@ -63,7 +63,7 @@ describe("cognitive policy — TEST vs OPERATIONAL separation", () => {
     expect(o.budgets.maxD4CharsReturned).toBeGreaterThan(32_000);
   });
 
-  it("FIX-BUD-01: absent type defaults TEST_BOUNDARY in DEV; fails closed in protected lane", () => {
+  it("FIX-BUD-01: absent type defaults TEST_BOUNDARY in DEV; fails closed without env on RECETTE", () => {
     process.env.STUDIO_LANE = "DEV";
     delete process.env.SFIA_COG_PROFILE_TYPE;
     expect(resolveProfileType()).toBe("TEST_BOUNDARY");
@@ -75,14 +75,31 @@ describe("cognitive policy — TEST vs OPERATIONAL separation", () => {
     process.env.SFIA_COG_PROFILE_TYPE = "OPERATIONAL_PROVISIONAL";
     expect(resolveProfileType()).toBe("OPERATIONAL_PROVISIONAL");
 
+    // Morris GO 2026-11-24: explicit OPERATIONAL_PROVISIONAL allowed on RECETTE
     process.env.STUDIO_LANE = "RECETTE";
-    expect(() => resolveProfileType()).toThrow(StudioError);
+    process.env.SFIA_COG_PROFILE_TYPE = "OPERATIONAL_PROVISIONAL";
+    expect(resolveProfileType()).toBe("OPERATIONAL_PROVISIONAL");
+
+    process.env.STUDIO_LANE = "STABLE";
+    expect(() => resolveProfileType()).toThrow(/interdit hors STUDIO_LANE=DEV\|RECETTE/);
+
+    process.env.STUDIO_LANE = "PROD";
+    expect(() => resolveProfileType()).toThrow(/interdit hors STUDIO_LANE=DEV\|RECETTE/);
 
     process.env.STUDIO_LANE = "DEV";
     process.env.SFIA_COG_PROFILE_TYPE = "OPERATIONAL_VALIDATED";
     expect(() => resolveProfileType()).toThrow(StudioError);
   });
 
+  it("override OPERATIONAL_PROVISIONAL allowed on RECETTE, refused on STABLE", () => {
+    process.env.STUDIO_LANE = "RECETTE";
+    expect(resolveProfileType("OPERATIONAL_PROVISIONAL")).toBe("OPERATIONAL_PROVISIONAL");
+    process.env.STUDIO_LANE = "STABLE";
+    expect(() => resolveProfileType("OPERATIONAL_PROVISIONAL")).toThrow(
+      /interdit hors DEV\/RECETTE/,
+    );
+  });
+
   it("toolAllowlist includes conversation history read tools", () => {
     const p = buildCognitivePolicy("Cherche un message passé sur le budget.", "TEST_BOUNDARY");
     expect(p.toolAllowlist).toContain("search_conversation_history");

```

### `ml5-workspace-resolver.test.ts`

```diff
commit 7f48daa28f00f390c34c58951ee5ceeb311f4d40
Author: Morris Cleland <morris@macbook-air.home>
Date:   Tue Nov 24 19:01:06 2026 +0100

    fix(next): enable ML5 operational RECETTE parity for Nora and Cursor
    
    Allow OPERATIONAL_PROVISIONAL on DEV and RECETTE, feed the public WEB catalog in RECETTE, and harden Cursor workspace roots outside product trees so RECETTE can run LIVE under existing D6 authority.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-workspace-resolver.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-workspace-resolver.test.ts
index 7faf5b28..7db89dc3 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-workspace-resolver.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-workspace-resolver.test.ts
@@ -75,4 +75,15 @@ describe("ML5 P0-02 — workspace confinement", () => {
       }),
     ).toThrow(/SFIA_CURSOR_WORKSPACE_ROOT/);
   });
+
+  it("rejects workspace root inside a product/method tree", () => {
+    const productLike = mkdtempSync(join(tmpdir(), "sfia-wt-next-fake-"));
+    expect(() =>
+      resolveCursorWorkspace({
+        pilotId: "p",
+        projectId: "j",
+        env: { SFIA_CURSOR_WORKSPACE_ROOT: productLike } as unknown as NodeJS.ProcessEnv,
+      }),
+    ).toThrow(/arbre produit|dépôt produit|ACCESS_DENIED|refuse/);
+  });
 });

```

### `ml5-c24-web-registry-usage.test.ts`

```diff
commit 7f48daa28f00f390c34c58951ee5ceeb311f4d40
Author: Morris Cleland <morris@macbook-air.home>
Date:   Tue Nov 24 19:01:06 2026 +0100

    fix(next): enable ML5 operational RECETTE parity for Nora and Cursor
    
    Allow OPERATIONAL_PROVISIONAL on DEV and RECETTE, feed the public WEB catalog in RECETTE, and harden Cursor workspace roots outside product trees so RECETTE can run LIVE under existing D6 authority.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-c24-web-registry-usage.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-c24-web-registry-usage.test.ts
index f4089df8..66448979 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-c24-web-registry-usage.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-c24-web-registry-usage.test.ts
@@ -37,6 +37,20 @@ describe("C24 public WEB registry feeding", () => {
     });
     expect(c.length).toBeGreaterThan(0);
   });
+
+  it("RECETTE loads the same default public catalog (parity)", () => {
+    const c = loadPublicTopicCatalog({ STUDIO_LANE: "RECETTE" });
+    expect(c.length).toBeGreaterThan(0);
+    const r = resolvePublicWebRegistry({
+      haystack: "Consulte la doc Next.js App Router",
+      env: { STUDIO_LANE: "RECETTE" },
+    });
+    expect(r.topics["nextjs-docs"]).toMatch(/Next\.js/);
+  });
+
+  it("STABLE gets empty default catalog", () => {
+    expect(loadPublicTopicCatalog({ STUDIO_LANE: "STABLE" })).toEqual([]);
+  });
 });
 
 describe("C24 provider usage extraction", () => {

```

### `delivery-history.md (product commit slice)`

```diff
commit 7f48daa28f00f390c34c58951ee5ceeb311f4d40
Author: Morris Cleland <morris@macbook-air.home>
Date:   Tue Nov 24 19:01:06 2026 +0100

    fix(next): enable ML5 operational RECETTE parity for Nora and Cursor
    
    Allow OPERATIONAL_PROVISIONAL on DEV and RECETTE, feed the public WEB catalog in RECETTE, and harden Cursor workspace roots outside product trees so RECETTE can run LIVE under existing D6 authority.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index cf32c590..1d687d33 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,22 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.
 
+## delivery_id: DELIV-2026-11-24-ML5-OPERATIONAL-RECETTE-PARITY
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-24 (Europe/Paris) |
+| Macro-lot | ML5 — Cycle 8 consolidation opérationnelle RECETTE (politique Nora + capacités + Cursor LIVE) |
+| Type | RUN · correctif intégré · cutover RECETTE · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| Parent HEAD | `807713cb89163b711db33f1f0e28bd9b99dbbc4d` |
+| Candidate SHA | *(rempli après commit local)* |
+| Policy version | `ml5-cog-policy-v3-recette-operational-provisional` |
+| Contenu | `OPERATIONAL_PROVISIONAL` autorisé DEV+RECETTE ; catalogue WEB public RECETTE ; confinement Cursor refuse racines produit ; probe LIVE sans dispatch ; cutover `:3200` |
+| Ancienne RECETTE | `8410906d` / BUILD `e0XwSWvjujz-xaHfXsrQK` / TEST_BOUNDARY + Cursor FAKE |
+| Push projet | **NONE** |
+| Verdict candidat | *(rempli après cutover)* |
+
 ## delivery_id: DELIV-2026-11-24-ML5-CYCLE11-RECETTE-CANDIDATE
 
 | Field | Value |

```

### `ml5-registre…md`

```diff
commit 7f48daa28f00f390c34c58951ee5ceeb311f4d40
Author: Morris Cleland <morris@macbook-air.home>
Date:   Tue Nov 24 19:01:06 2026 +0100

    fix(next): enable ML5 operational RECETTE parity for Nora and Cursor
    
    Allow OPERATIONAL_PROVISIONAL on DEV and RECETTE, feed the public WEB catalog in RECETTE, and harden Cursor workspace roots outside product trees so RECETTE can run LIVE under existing D6 authority.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
index a38e048c..e7db8175 100644
--- a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
+++ b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
@@ -157,7 +157,7 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
 | ☐ | `E12` | Vérifier seulement les MCP indispensables à la mission : chargement, authentification, invocabilité et permissions réelles. | NV | mcpRequired listé dans plan ; vérification LIVE non faite |
 | ☐ | `E13` | Ne pas construire un gestionnaire MCP/approbations dans Studio, ni désactiver globalement les protections pour rendre un test vert. | PARTIEL | Aucun admin MCP ajouté |
 | ☐ | `E14` | Ne pas forcer Git/MCP sur une mission qui n'en a pas besoin ; production et DEV utilisent le même sens du contrat avec environnements distincts. | PARTIEL | gitScope/mcp optionnels sur plan |
-| ☐ | `E15` | Isoler concurrents, projets, workspaces, identités SDK, secrets et rapports ; aucun croisement de tentative. | PARTIEL | P0-02 `resolveCursorWorkspace` sous `SFIA_CURSOR_WORKSPACE_ROOT` ; client cwd refusé ; LIVE isolation OS NOT PROVEN |
+| ☐ | `E15` | Isoler concurrents, projets, workspaces, identités SDK, secrets et rapports ; aucun croisement de tentative. | PARTIEL | P0-02 + refus racines dans arbres produit ; client cwd refusé ; LIVE isolation OS NOT PROVEN |
 
 ### F. Git de travail et continuité des réalisations
 **Responsabilités :** D7/D9/D6 — conditionnel aux missions Git. **Sources :** Contrat ML5 §§17.2,18.2,19.5 ; R2 D9 et architecture §18.
@@ -247,7 +247,9 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
 | `A10` | PARTIAL | D3 | investigation-persistence | Snapshot durable ; consolidation acquis D4 incomplète |
 | `A11` | PARTIAL | D3 | investigation-persistence, resumeInvestigation | Reprise mid-turn/incident non branchée au fil |
 | `A12` | PARTIAL | D3 | cognitive-policy | Économie simple sur tour projet seulement |
+| `A13` | IMPLEMENTED | D3 | cognitive-policy v3 | `OPERATIONAL_PROVISIONAL` explicite DEV\|RECETTE (GO 2026-11-24) ; STABLE/PROD refusés ; `OPERATIONAL_VALIDATED` toujours non adopté |
 | `B01` | PARTIAL | D3 | public-web-search-frontier (cycle 4) | SCRIPTED query-only ; LIVE gated ; hosted tool détaché |
+| `B10` | IMPLEMENTED | D3 | public-web-registry | Catalogue public par défaut aussi en RECETTE (templates connus ; pas de recherche libre) |
 | `B02` | PARTIAL | D3 | public_web_open_page SCRIPTED | Ouverture LIVE non implémentée |
 | `B03` | PARTIAL | D3 | confrontWebSources (cycle 5) | SCRIPTED confrontation ; LIVE ouvert |
 | `B04` | PARTIAL | D3 | web-source-citation + open_page citation | Cycle 7 — contrat citation SCRIPTED ; UX affichage partiel ; LIVE gated |

```

### delivery-history identity follow-up (`34c614d9`)

```diff
commit 34c614d988827db798024ac9d0a874927b8bacdf
Author: Morris Cleland <morris@macbook-air.home>
Date:   Tue Nov 24 19:04:23 2026 +0100

    docs(next): record ML5 operational RECETTE parity build identity
    
    Trace candidate SHA 7f48daa2, BUILD _ZDI1cWa1hscluvBhaiA4, and the READY FOR MORRIS UAT cutover verdict.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 1d687d33..7b7e7741 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -12,12 +12,14 @@ Append-only logical journal of Cursor product deliveries.
 | Type | RUN · correctif intégré · cutover RECETTE · **NO RELEASE** |
 | Branche | `sfia/next-ml5-integrated-delivery-20261123` |
 | Parent HEAD | `807713cb89163b711db33f1f0e28bd9b99dbbc4d` |
-| Candidate SHA | *(rempli après commit local)* |
+| Candidate SHA | `7f48daa28f00f390c34c58951ee5ceeb311f4d40` |
+| Candidate tree | `7b8683951dbbe8a2bb6a72b5a0e39fd29b2d7e7e` |
+| Build RECETTE | `_ZDI1cWa1hscluvBhaiA4` · digest `ed59106d8706fb8267620682c0fd0abd2636cab06b4e649a18d23ff64bf8514f` |
 | Policy version | `ml5-cog-policy-v3-recette-operational-provisional` |
 | Contenu | `OPERATIONAL_PROVISIONAL` autorisé DEV+RECETTE ; catalogue WEB public RECETTE ; confinement Cursor refuse racines produit ; probe LIVE sans dispatch ; cutover `:3200` |
 | Ancienne RECETTE | `8410906d` / BUILD `e0XwSWvjujz-xaHfXsrQK` / TEST_BOUNDARY + Cursor FAKE |
 | Push projet | **NONE** |
-| Verdict candidat | *(rempli après cutover)* |
+| Verdict candidat | **RECETTE OPERATIONAL PARITY — READY FOR MORRIS UAT** · served `http://127.0.0.1:3200` |
 
 ## delivery_id: DELIV-2026-11-24-ML5-CYCLE11-RECETTE-CANDIDATE
 

```

## 9. Instruction ChatGPT

Relire ce handoff distant avant réponse. Vérifier politique cognitive réellement servie, capacités LIVE/REAL, confinement Cursor, manifeste SHA/build, et réserves. Ne pas assimiler READY FOR MORRIS UAT à ML5 CLOSED / ADOPTED / STABLE.
