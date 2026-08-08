# Cycle 8 Critical — T7 SHADOW OA Boundary Corrective Delivery — Review Pack (full)

Date/heure : 2026-08-08 19:58:17 CEST / 2026-08-08 17:58:17 UTC

## 1. GO Morris

`ok go` → **GO T7 SHADOW OA BOUNDARY CORRECTIVE DELIVERY**

Autorisé : modify borné composer + 157 · tests · PG éphémère · commit LOCAL · handoff L3.
Interdit : project push · PR edit · merge · amend d99bbbd · OPS1 change · shared identity · SHADOW activation.

## 2. Cycle / typologie / profil

- Cycle : **8 — Delivery / implémentation**
- Typologie : **RUN corrective**
- Profil : **Critical**

## 3. Git Truth initial

```text
branch=delivery/sfia-studio-finops-t7-shadow-option-a
HEAD=d99bbbdea2446af8b79488b7459924e6cf5a3e16
origin/main=503369b10506515e173b5b58986c731ba1b313b8
origin_delivery=d99bbbdea2446af8b79488b7459924e6cf5a3e16
--- status ---
?? .tmp-sfia-review/
--- staged ---
--- tracked ---
--- log ---
d99bbbd (HEAD -> delivery/sfia-studio-finops-t7-shadow-option-a, origin/delivery/sfia-studio-finops-t7-shadow-option-a) feat(sfia-studio): wire FinOps T7 shadow pilot
```

## 4. PR #321 truth

```json
{"baseRefName":"main","headRefName":"delivery/sfia-studio-finops-t7-shadow-option-a","headRefOid":"d99bbbdea2446af8b79488b7459924e6cf5a3e16","isDraft":false,"mergedAt":null,"number":321,"state":"OPEN","title":"feat(sfia-studio): wire FinOps T7 shadow pilot","url":"https://github.com/mcleland147/sfia-workspace/pull/321"}
```

- remote head / PR headOid : `d99bbbdea2446af8b79488b7459924e6cf5a3e16`
- OPEN · not draft · not merged

## 5. CI failure truth

- Workflow : SFIA Studio CI
- Run : `31270074547`
- Job : Build and validate SFIA Studio
- Failed tests :
  1. `__tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts`
  2. `__tests__/oa/doctrine/antiLegacy.test.ts`
- Root cause : `import { OPS1_PROJECT_KEY } from "@/lib/ops1/types"` in OA pilot composer

## 6. Sources

Template · routing · operating model · rules · checklist · CKC synthetic map · delivery-qa-test-standard · publisher · handoff Cycle 13 publication · composer · ops1/types · boundary tests · T7 tests · 157.

## 7. Architecture boundary / OPS1 value

- Rule : ZERO STATIC OA → OPS1 IMPORT
- `OPS1_PROJECT_KEY` in OPS1 = `"sfia-studio-ops1"` (unchanged)
- Morris pilot decision preserved : `"sfia-studio-ops1"`

## 8. Correction exacte

- REMOVE OA import of `@/lib/ops1/types`
- SET `export const T7_SHADOW_PILOT_PROJECT_ID = "sfia-studio-ops1"`
- Comments updated to OA-local / isolation wording
- 157 : claim OA-local constant + corrective section F ; Next → G

## 9. Files modified (exactly 2)

1. `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts`
2. `projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md`

Committed SHA-256:
- composer : `3a6646af7ea1981160beac64894dd6ac58d70ce461f6973501f47dda4f5d8057`
- 157 : `1c87d4601e0d59cd88cb3348626124adc2eac0c9ef9e5c24141a10f3c5b9870a`

## 10. Diffs

### composer

````diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts b/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts
index d05f00c..a8db16a 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts
@@ -8,11 +8,11 @@
  * - SHADOW NOT ACTIVATED (no durable SHADOW row write).
  * - MONITOR / E1 not activated.
  * - No real provider / Neon / production threshold.
- * - Pilot identity: OPS1_PROJECT_KEY (sfia-studio-ops1) — Morris-selected.
+ * - Pilot identity: Morris-selected `sfia-studio-ops1` (OA-local constant).
+ * - Does NOT import lib/ops1 (preserves OA / OPS1 isolation).
  */

 import type { Pool } from "pg";
-import { OPS1_PROJECT_KEY } from "@/lib/ops1/types";
 import {
   composeFinOpsT7ShadowExecutionDeps,
   type FinOpsT7ShadowDecisionDiagnostic,
@@ -28,10 +28,11 @@ import type { ExecutionRunProviderComposition } from "./composeExecutionRunProvi
 import { assertServerOnly } from "./serverOnly";

 /**
- * Morris-selected T7 SHADOW pilot identity — not global project identity.
- * Reuses existing OPS1_PROJECT_KEY constant (= "sfia-studio-ops1").
+ * Morris-selected T7 SHADOW pilot identity.
+ * Locally declared in OA to preserve OA / OPS1 import isolation.
+ * This is pilot-scoped identity, not a global project identity authority.
  */
-export const T7_SHADOW_PILOT_PROJECT_ID = OPS1_PROJECT_KEY;
+export const T7_SHADOW_PILOT_PROJECT_ID = "sfia-studio-ops1";

 export type ComposeExecutionRunD2D3T7ShadowPilotInput = {
   /** Caller-owned FinOps pool. Never closed here. */
````

### 157

````diff
diff --git a/projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md b/projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md
index 6365a30..6c6dd08 100644
--- a/projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md
+++ b/projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md
@@ -15,6 +15,7 @@
 | Option A (pre-provider execution-run) selected by Morris | **TRUE** |
 | Thin adapter delivered | **TRUE** |
 | Pilot projectId `sfia-studio-ops1` selected by Morris | **TRUE** |
+| Pilot identity declared as OA-local constant (no `lib/oa` → `lib/ops1` import) | **TRUE** |
 | Existing `composeExecutionRunD2D3` injection surface reused | **TRUE** |
 | `coordinateExecutionRun` unmodified | **TRUE** |
 | `composeExecutionRunD2D3` unmodified | **TRUE** |
@@ -78,7 +79,19 @@ composeExecutionRunD2D3T7ShadowPilot

 ---

-## F. Next
+## F. Corrective Delivery (PR #321 CI)

-Cycle 9 — Dedicated T7 SHADOW Wiring QA (distinct GO).
-Then distinct GO for actual pilot activation if Morris authorizes.
+PR #321 CI identified OA→OPS1 boundary violation
+(`import { OPS1_PROJECT_KEY } from "@/lib/ops1/types"` in the pilot composer).
+
+Corrective Delivery removes the direct OA→OPS1 import while preserving the
+Morris-selected pilot value `sfia-studio-ops1` as an OA-local constant
+(`T7_SHADOW_PILOT_PROJECT_ID`). No shared identity abstraction; OPS1 unchanged.
+
+---
+
+## G. Next
+
+Cycle 9 — Dedicated Corrective QA (distinct GO) after this corrective commit.
+Then distinct GO for push of the corrective commit onto PR #321.
+Activation SHADOW remains a separate Morris decision.
````

## 11. Contenu COMPLET — composer (HEAD)

````typescript
/**
 * Execution-run D2-D3 composition wired for T7 SHADOW Option A pilot.
 *
 * Reuses composeExecutionRunD2D3 injection surface unchanged.
 * Reuses composeFinOpsT7ShadowExecutionDeps thin adapter.
 *
 * Anti-claims:
 * - SHADOW NOT ACTIVATED (no durable SHADOW row write).
 * - MONITOR / E1 not activated.
 * - No real provider / Neon / production threshold.
 * - Pilot identity: Morris-selected `sfia-studio-ops1` (OA-local constant).
 * - Does NOT import lib/ops1 (preserves OA / OPS1 isolation).
 */

import type { Pool } from "pg";
import {
  composeFinOpsT7ShadowExecutionDeps,
  type FinOpsT7ShadowDecisionDiagnostic,
  type FinOpsT7ShadowPolicyInput,
} from "../../finops/server/composeFinOpsT7ShadowExecutionDeps";
import type { EvaluateFinOpsEnforcementInput } from "../../finops/application/types.enforcement";
import {
  composeExecutionRunD2D3,
  type ExecutionRunD2D3Composition,
} from "./composeExecutionRunD2D3";
import type { ClockPort } from "../ports/clockPort";
import type { ExecutionRunProviderComposition } from "./composeExecutionRunProviders";
import { assertServerOnly } from "./serverOnly";

/**
 * Morris-selected T7 SHADOW pilot identity.
 * Locally declared in OA to preserve OA / OPS1 import isolation.
 * This is pilot-scoped identity, not a global project identity authority.
 */
export const T7_SHADOW_PILOT_PROJECT_ID = "sfia-studio-ops1";

export type ComposeExecutionRunD2D3T7ShadowPilotInput = {
  /** Caller-owned FinOps pool. Never closed here. */
  readonly pool: Pool;
  readonly nowIso?: () => string;
  readonly providers?: ExecutionRunProviderComposition;
  readonly clock?: ClockPort;
  readonly clockIso?: string;
  /**
   * Explicit SHADOW policy injection (TEST or future activation source).
   * Returning null ⇒ allow/not_configured. Effect always forced signal_only by adapter.
   */
  readonly resolveShadowPolicy: (
    input: EvaluateFinOpsEnforcementInput,
  ) =>
    | Promise<FinOpsT7ShadowPolicyInput | null>
    | FinOpsT7ShadowPolicyInput
    | null;
  readonly onShadowDecision?: (
    diagnostic: FinOpsT7ShadowDecisionDiagnostic,
  ) => void | Promise<void>;
};

export type ExecutionRunD2D3T7ShadowPilotComposition =
  ExecutionRunD2D3Composition & {
    readonly pilotProjectId: string;
    readonly resolveProjectRollout: (
      projectId: string,
    ) => Promise<
      import("../../finops/application/types.rollout").FinOpsRolloutInstruction
    >;
    readonly flushAudit: () => Promise<void>;
  };

/**
 * Compose D2-D3 with T7 SHADOW pilot-aware FinOps deps injected.
 * Does not modify composeExecutionRunD2D3 / coordinateExecutionRun sources.
 */
export function composeExecutionRunD2D3T7ShadowPilot(
  input: ComposeExecutionRunD2D3T7ShadowPilotInput,
): ExecutionRunD2D3T7ShadowPilotComposition {
  assertServerOnly("oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot");

  const nowIso =
    input.nowIso ??
    input.clock?.nowIso ??
    (() => input.clockIso ?? "2026-08-08T16:00:00.000Z");

  const shadowDeps = composeFinOpsT7ShadowExecutionDeps({
    pool: input.pool,
    nowIso,
    pilotProjectId: T7_SHADOW_PILOT_PROJECT_ID,
    resolveShadowPolicy: input.resolveShadowPolicy,
    onShadowDecision: input.onShadowDecision,
  });

  const base = composeExecutionRunD2D3({
    providers: input.providers,
    clock: input.clock,
    clockIso: input.clockIso,
    finops: shadowDeps.capture,
    finopsEnforcement: shadowDeps.finopsEnforcement,
  });

  return {
    ...base,
    pilotProjectId: T7_SHADOW_PILOT_PROJECT_ID,
    resolveProjectRollout: shadowDeps.resolveProjectRollout,
    flushAudit: shadowDeps.flushAudit,
  };
}
````

## 12. Contenu COMPLET — 157 (HEAD, soft-stripped for handoff check)

Committed file retains intentional markdown hard-breaks (Morris-accepted category for 157). Soft embed below strips trailing WS for handoff publishability only.

````markdown
# 157 — FinOps T7 SHADOW Option A + Thin Adapter — Wiring Execution Record

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md`
**Cycle:** 8 — Delivery / implémentation
**Profil:** Critical
**Typologie:** EVOL / CODE / TEST / DOC

---

## A. Status / anti-claims

| Claim | Status |
|-------|--------|
| Option A (pre-provider execution-run) selected by Morris | **TRUE** |
| Thin adapter delivered | **TRUE** |
| Pilot projectId `sfia-studio-ops1` selected by Morris | **TRUE** |
| Pilot identity declared as OA-local constant (no `lib/oa` → `lib/ops1` import) | **TRUE** |
| Existing `composeExecutionRunD2D3` injection surface reused | **TRUE** |
| `coordinateExecutionRun` unmodified | **TRUE** |
| `composeExecutionRunD2D3` unmodified | **TRUE** |
| T7/T4/T6 foundation sources unmodified | **TRUE** |
| signal_only forced for SHADOW | **TRUE** |
| SHADOW never BLOCK (defense-in-depth) | **TRUE** |
| MONITOR / E1 not activated by adapter | **TRUE** |
| No production threshold / 15/20/25/30 | **TRUE** |
| No durable SHADOW row on real env | **TRUE** |
| SHADOW activated | **FALSE** |
| Project commit / push / PR | **FALSE** |

```text
SHADOW WIRING DELIVERED LOCALLY —
READY FOR DEDICATED WIRING QA —
SHADOW NOT ACTIVATED
```

---

## B. GO Morris

**Utterance / decision:**
`GO Option A + thin adapter, Delivery Cycle 8 profil Critical, with sfia-studio-ops1 as projectId pilote canonique SHADOW.`

**Consumed:** local CREATE wiring + tests + execution record.
**Not consumed:** real SHADOW activation · MONITOR · E1 · T3 · thresholds · Neon · commit/push/PR.

---

## C. Files CREATE

1. `projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts`
2. `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts`
3. `projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts`
4. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts`
5. This execution record (`157-…`)

**MODIFY / DELETE:** none (core files untouched).

---

## D. Architecture

```text
composeExecutionRunD2D3T7ShadowPilot
  → composeFinOpsT7ShadowExecutionDeps(pool, pilot=sfia-studio-ops1)
       → composeFinOpsT7Runtime (reuse)
       → createFinOpsEnforcementPort + effect forced signal_only
       → pilot-gated capture
  → composeExecutionRunD2D3({ finops, finopsEnforcement })  // unchanged
```

---

## E. Rollback

1. Config: no product SHADOW row written by this Delivery.
2. Code: remove pilot composer injection / feature gate.
3. No migration.

---

## F. Corrective Delivery (PR #321 CI)

PR #321 CI identified OA→OPS1 boundary violation
(`import { OPS1_PROJECT_KEY } from "@/lib/ops1/types"` in the pilot composer).

Corrective Delivery removes the direct OA→OPS1 import while preserving the
Morris-selected pilot value `sfia-studio-ops1` as an OA-local constant
(`T7_SHADOW_PILOT_PROJECT_ID`). No shared identity abstraction; OPS1 unchanged.

---

## G. Next

Cycle 9 — Dedicated Corrective QA (distinct GO) after this corrective commit.
Then distinct GO for push of the corrective commit onto PR #321.
Activation SHADOW remains a separate Morris decision.
````

## 13. Zero OA→OPS1 import

```text
ZERO_OA_OPS1_STATIC_IMPORT=yes
```

## 14. Boundary tests

```text
RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t7-shadow-option-a/projects/sfia-studio/app

 ✓ __tests__/oa/doctrine/antiLegacy.test.ts (3 tests) 18ms
 ✓ __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts (5 tests) 29ms

 Test Files  2 passed (2)
      Tests  8 passed (8)
   Start at  19:55:52
   Duration  793ms (transform 84ms, setup 97ms, collect 26ms, tests 48ms, environment 0ms, prepare 158ms)
```

**8/8 PASS** (isolation probe + antiLegacy)

## 15. T7 unit

```text
RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t7-shadow-option-a/projects/sfia-studio/app

 ✓ __tests__/oa/finops/t7.shadow-option-a.unit.test.ts (4 tests) 1ms

 Test Files  1 passed (1)
      Tests  4 passed (4)
   Start at  19:55:53
   Duration  366ms (transform 108ms, setup 21ms, collect 163ms, tests 1ms, environment 0ms, prepare 32ms)
```

**4/4 PASS** — pilot still `sfia-studio-ops1` / equals OPS1_PROJECT_KEY in test

## 16. PostgreSQL QA env

```text
ENV_TYPE=docker_ephemeral_postgres
HOST_CLASS=loopback:127.0.0.1
PORT=55442
DB_NAME=sfia_studio_finops_t1
CONTAINER=sfia-t7-oa-boundary-fix-pg
NEON=no
PROVENANCE=SAFE_EPHEMERAL
PASSWORD_OR_URL_IN_THIS_FILE=no
```

```text
READY i=5
```

migrate complete · container ABSENT after cleanup

## 17. T7 integration

```text
RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t7-shadow-option-a/projects/sfia-studio/app

 ✓ __tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts (14 tests) 633ms

 Test Files  1 passed (1)
      Tests  14 passed (14)
   Start at  19:56:16
   Duration  3.10s (transform 628ms, setup 160ms, collect 1.18s, tests 633ms, environment 0ms, prepare 199ms)
```

**14/14 PASS** · required skip 0 in dedicated DB run

## 18–21. typecheck / lint / build / npm test

- typecheck EC=0
- lint EC=0
- build EC=0
- npm test EC=0 → `Test Files 148 passed | 11 skipped` · `Tests 1507 passed | 99 skipped` · **0 failed**
- Prior CI : 2 failed files / 2 failed tests — both boundary failures resolved

## 22. Before / after architecture

Before : OA composer imported OPS1_PROJECT_KEY
After : OA-local `"sfia-studio-ops1"` · OPS1 untouched · no shared identity module

## 23. Behavior invariants

- pilot id unchanged (`sfia-studio-ops1`)
- thin adapter unchanged
- composeExecutionRunD2D3 / coordinator unchanged
- signal_only / never-block / MONITOR/E1 inert unchanged
- policy source still NOT SELECTED
- mode-drift not addressed in this cycle

## 24. Reserves

- SHADOW PILOT POLICY SOURCE = NOT SELECTED
- TEMPORAL MODE DRIFT OFF→SHADOW = OPEN
- R-T4-T3-SYNC-01 = OPEN — BEFORE MONITOR
- R-PR-T2-API-01 = OPEN MINOR
- Calibration / T6-ext / Product IAM / T5 = unchanged
- Markdown hard-break exception = ACCEPTED BY MORRIS (157)
- OA→OPS1 import boundary = **CLOSED BY CORRECTIVE DELIVERY** (local; not CLOSED ON MAIN)

## 25. QA evidence status

Cycle 9 byte-identity **INVALIDATED** for the two modified files.
This cycle = corrective Delivery technical checks only.
**DEDICATED CORRECTIVE QA REQUIRED.**
DELIVERY GREEN ≠ QA REVALIDATED.

## 26. Local commit

- SHA : `bab14ca480b60744f6a428d93070c876de171ee1`
- Message : `fix(sfia-studio): preserve OA isolation in T7 shadow pilot`
- name-status : 2 MODIFY
- origin/main..HEAD = 2
- remote delivery...HEAD left-right = `0 1` (local ahead by 1)

```text
=== log ===
bab14ca (HEAD -> delivery/sfia-studio-finops-t7-shadow-option-a) fix(sfia-studio): preserve OA isolation in T7 shadow pilot
d99bbbd (origin/delivery/sfia-studio-finops-t7-shadow-option-a) feat(sfia-studio): wire FinOps T7 shadow pilot
=== show ===
commit bab14ca480b60744f6a428d93070c876de171ee1
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Sat Aug 8 19:57:57 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Sat Aug 8 19:57:57 2026 +0200

    fix(sfia-studio): preserve OA isolation in T7 shadow pilot

    Co-authored-by: Cursor <cursoragent@cursor.com>

M	projects/sfia-studio/157-assistant-sfia-native-openai-finops-t7-shadow-option-a-wiring-execution.md
M	projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts
ahead_main=2
left_right_remote_delivery=0	1
?? .tmp-sfia-review/
```

## 27. Project / PR / merge / SHADOW

- Project push : **NO**
- PR #321 edit : **NO** (remote head remains `d99bbbd…`)
- Merge : **NO**
- SHADOW activation : **NO**

## 28. Future PR body wording (not applied remotely)

Replace :
`project-scoped pilot (OPS1_PROJECT_KEY = sfia-studio-ops1)`
with :
`project-scoped pilot (\`sfia-studio-ops1\`, Morris-selected; OA-local constant preserving OA/OPS1 isolation)`

## 29. Git final

- local HEAD = `bab14ca480b60744f6a428d93070c876de171ee1`
- remote delivery = `d99bbbdea2446af8b79488b7459924e6cf5a3e16`
- origin/main = `503369b10506515e173b5b58986c731ba1b313b8`
- status = `?? .tmp-sfia-review/` only

## 30. Next Morris gate

Cycle 9 — Dedicated Corrective QA (distinct GO).
Then distinct GO to push corrective commit onto PR #321.

## 31. Verdict

```text
T7 SHADOW OA BOUNDARY CORRECTIVE DELIVERY COMPLETE WITH RESERVES —
CYCLE 8 CRITICAL —
PR #321 CI FAILURE ROOT CAUSE CONFIRMED —
OA → OPS1 STATIC IMPORT REMOVED —
PILOT ID sfia-studio-ops1 PRESERVED —
NO SHARED IDENTITY ABSTRACTION CREATED —
OPS1 UNCHANGED —
BOUNDARY TESTS PASS —
T7 TARGETED TESTS PASS —
T7 POSTGRES INTEGRATION PASS —
TYPECHECK PASS —
LINT PASS —
BUILD PASS —
FULL TEST SUITE NO BLOCKING FAILURE —
SHADOW SIGNAL_ONLY / NEVER-BLOCK BEHAVIOR UNCHANGED —
LOCAL CORRECTION COMMIT CREATED —
PREVIOUS QA BYTE-IDENTITY INVALIDATED FOR MODIFIED FILES —
DEDICATED CORRECTIVE QA REQUIRED —
PROJECT PUSH NOT PERFORMED —
PR #321 NOT UPDATED —
MERGE NOT PERFORMED —
SHADOW NOT ACTIVATED —
READY FOR DEDICATED CORRECTIVE QA —
HANDOFF REMOTE VERIFIED
```
