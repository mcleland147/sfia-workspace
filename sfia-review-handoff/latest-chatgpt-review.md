# SFIA STUDIO — NORA COGNITIVE COMPLETION
## CORR-MW4-PR-CI-01 — MW4 PR #461 CLIENT/SERVER BUILD BOUNDARY CORRECTION
### FULL Review Pack — Cycle 8 Delivery / RUN / CRITICAL

Generated UTC: 2026-09-03T09:10:58Z
Europe/Paris: 2026-09-03 11:10:58 CEST
Worktree: `/Users/morris/Projects/sfia-workspace-nora-mw4-grounding`
Branch: `delivery/sfia-studio-nora-mw4-grounding-durability`

---

## 1. Final verdict

**STOP — CORR-MW4-PR-CI-01 FAILED — CHATGPT REQUALIFICATION REQUIRED**

Primary Build-boundary correction **succeeded** (local `next build` PASS; GitHub **Build** step PASS on corrected HEAD).

GitHub **Required Gate** still FAIL because **Unit tests (Vitest)** failed on an **unrelated** MW2 test:

`mw2.corr04.truthCIntentStability.d0.test.ts` D0-10 — `expect(result.ok).toBe(true)` received false.

No opportunistic second product patch performed.

---

## A. Header / Authority

Morris GO CORR-MW4-PR-CI-01 consumed for:
- Local Git Truth
- bounded diagnosis of prior PR CI Build failure
- minimal import-boundary product correction
- local validation including production build
- one correction commit on existing delivery branch
- push of existing delivery branch
- CI evidence collection on PR #461
- FULL Review Pack + L3 handoff

NOT authorized / NOT performed: merge, force-push, main write, package/webpack/config change, architecture redesign, REAL campaign, MW4 closure, MW5.

---

## B–C. Sources / Convergence

Process: `sfia-cycle-execution-template.md` Cycle 8 Delivery correction; routing RUN/CRITICAL.
Capability MW4-S01/S02/S03 unchanged.
Architecture: ADAPT existing import boundary only. FA NO. TA NO.
Prior handoff: MW4-PROJECT-INTEGRATION-01 tip `e203481c…` / blob `1b4aeb81…` (STOP — PR CI FAILED).

---

## D. Entry Git Truth — PASS

| Field | Observed |
|---|---|
| repo | mcleland147/sfia-workspace |
| worktree | `/Users/morris/Projects/sfia-workspace-nora-mw4-grounding` |
| branch | `delivery/sfia-studio-nora-mw4-grounding-durability` |
| entry HEAD | `b9ed3f0199ad7382ce8b4bc77b6f10bd49316dab` |
| origin delivery | `b9ed3f0199ad7382ce8b4bc77b6f10bd49316dab` |
| origin/main | `deb34943dd85472644c221243cd7c0fd5369614e` |
| PR #461 | OPEN, base `deb34943dd85472644c221243cd7c0fd5369614e`, head `b9ed3f0199ad7382ce8b4bc77b6f10bd49316dab`, not merged, auto-merge null |
| dirty | `.tmp-sfia-review/**` + `node_modules` symlink only (isolated; not staged) |

---

## E. Prior CI failure (33734468200)

- Job Build and validate SFIA Studio → **Build** FAIL
- `next build` webpack `UnhandledSchemeError` on `node:*`
- Import chain: `ProjectWorkspacePage` → `presentationLabels` → `postEvidenceNoraAnalysis` → **`@/lib/nora-cognitive-runtime` barrel** → server modules
- Required Gate FAIL

---

## F. Root-cause analysis

`postEvidenceNoraAnalysis.ts` imported `buildPostEvidenceNarrativePolicyDisclosure` from the **global barrel** `@/lib/nora-cognitive-runtime`, which re-exports Node-only modules (`sessionPaths`, `productSqliteSession`, `sfiaAgentsTools`, …).

Client-safe leaf already existed: `@/lib/nora-cognitive-runtime/postEvidenceNarrativePolicy` (no `node:*` imports; pure disclosure helper).

Bounded repair: direct leaf import. Webpack/polyfill/config changes rejected by GO.

---

## G. Modified content

### File
`projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts`

Classification: ACCEPTED MW4 product boundary correction (single import path).

Semantic delta: **NONE**
Functional delta: **NONE**
Technical delta: presentation graph no longer pulls server barrel solely for MW4-S02 disclosure helper.

### Full useful diff
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
index f3bd655e..0563049f 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
@@ -13,7 +13,7 @@
  */

 import { resolveConversationProvider } from "@/lib/platform/ai";
-import { buildPostEvidenceNarrativePolicyDisclosure } from "@/lib/nora-cognitive-runtime";
+import { buildPostEvidenceNarrativePolicyDisclosure } from "@/lib/nora-cognitive-runtime/postEvidenceNarrativePolicy";

 /** Same marker string as f2/ckcCognitiveContext — keep in sync (string only). */
 const CKC_COGNITIVE_REASONING_SYSTEM_MARKER =

```

### Post-correction import region (exploitable context)
```ts
/**
 * GAP-4 — bounded post-Evidence Nora/provider analysis.
 * Uses resolveConversationProvider() only. Never instantiates OpenAI here.
 * Result is a Recommendation, never a HumanDecision / GO / new contract.
 *
 * W3-D / US-P1-14: when a resolved product-native CKC prompt section is supplied,
 * it is injected into the same cognitive marker seam used by F2/W2 — no parallel
 * resolver / orchestrator. Absence of CKC is handled by the caller (fail-closed).
 *
 * IMPORTANT: do not import `@/features/project-assistant/f2/ckcCognitiveContext`
 * here — that module loads Node filesystem doctrine I/O and must stay off the
 * client presentation graph (presentationLabels → postEvidenceNoraAnalysis).
 */

import { resolveConversationProvider } from "@/lib/platform/ai";
import { buildPostEvidenceNarrativePolicyDisclosure } from "@/lib/nora-cognitive-runtime/postEvidenceNarrativePolicy";

/** Same marker string as f2/ckcCognitiveContext — keep in sync (string only). */
const CKC_COGNITIVE_REASONING_SYSTEM_MARKER =
  "SFIA Studio CKC COGNITIVE REASONING" as const;

export const POST_EVIDENCE_NORA_SENTINEL =
  "[[SFIA_POST_EVIDENCE_NORA_ANALYSIS]]" as const;
export const POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL =
  "[[SFIA_POST_EVIDENCE_NORA_UNAVAILABLE]]" as const;
/** Exact post-Evidence Recommendation payload — durable in existing LPS context. */
export const W3C_POST_EVIDENCE_RECOMMENDATION_SENTINEL =
  "[[W3C_POST_EVIDENCE_RECOMMENDATION_V1]]" as const;

export type PostEvidenceAnalysisFacts = {
  projectId: string;
  executionContractId: string;
  executionContractStatus: string;
  executionContractAction: string;
  attemptId: string;
  attemptStatus: string;
  selectedAgentRef: string;
  adapterRef: string;
  executionMode: string;
  realProcessInvoked: boolean;
  evidenceId: string;
  reviewBundleId: string;
  technicalResultRef: string | null;
  reservations: readonly string[];
  processRef?: string;
  exitCode?: number | null;
  timedOut?: boolean;
  durationMs?: number;
  stdout?: string;
  stderr?: string;
};

export type PostEvidenceAnalysisResult =
  | {
      ok: true;
      text: string;
      providerId: string;
    }
  | {
      ok: false;
      code: "POST_EVIDENCE_ANALYSIS_UNAVAILABLE";
      message: string;
      providerId: string | null;
    };

const ANALYSIS_SYSTEM = `Tu es Nora, analyste post-exécution SFIA Studio.
Tu produis UNIQUEMENT une recommandation non autoritaire à partir des faits durables fournis.
Interdit:
- créer une HumanDecision;
- transformer la recommandation en GO Morris;
- lancer un ExecutionContract / Attempt;
- demander des secrets;
- inventer une preuve REAL.
Réponds en français, court, factuel.

${buildPostEvidenceNarrativePolicyDisclosure()}`;

function boundedFactsJson(facts: PostEvidenceAnalysisFacts): string {
  return JSON.stringify({
    projectId: facts.projectId,
    executionContractId: facts.executionContractId,
    executionContractStatus: facts.executionContractStatus,
    executionContractAction: facts.executionContractAction,
    attemptId: facts.attemptId,
    attemptStatus: facts.attemptStatus,
    selectedAgentRef: facts.selectedAgentRef,
    adapterRef: facts.adapterRef,
    executionMode: facts.executionMode,
    realProcessInvoked: facts.realProcessInvoked,
    evidenceId: facts.evidenceId,
```

Leaf `postEvidenceNarrativePolicy.ts`: **unchanged**.

No other product/test files modified.

---

## H. Local validation

| Gate | Result |
|---|---|
| node | v24.16.0 (matches CI node-version 24) |
| npm | 11.13.0 |
| git diff --check | PASS |
| typecheck | PASS |
| lint | PASS |
| **production build (`npm run build`)** | **PASS** — Compiled successfully |
| focused MW4 S02/S01/eval | PASS — 4 files / 18 tests |
| full `npm test` (`--no-file-parallelism --testTimeout=60000`) | PASS — 272\|14 files; 2508\|132 tests |

ZERO REAL.

---

## I. Project Git lifecycle

| Field | Value |
|---|---|
| correction commit | `01956bdc808d459a5def4a7018ab7a1b16530f42` |
| tree | `ea13979ce28761c34a369f61c748294925042ba0` |
| parent | `b9ed3f0199ad7382ce8b4bc77b6f10bd49316dab` (exact pre-correction HEAD) |
| message | `fix(sfia-studio): keep MW4 post-evidence policy off server runtime barrel` |
| staged files | only `postEvidenceNoraAnalysis.ts` |
| push | YES → `origin/delivery/sfia-studio-nora-mw4-grounding-durability` |
| remote parity | PASS (`01956bdc808d459a5def4a7018ab7a1b16530f42`) |
| origin/main | unchanged `deb34943dd85472644c221243cd7c0fd5369614e` |
| amend / force-push | NO |

---

## J. PR #461 / GitHub CI

| Field | Value |
|---|---|
| PR | https://github.com/mcleland147/sfia-workspace/pull/461 |
| state | OPEN / NOT MERGED |
| base | main @ `deb34943dd85472644c221243cd7c0fd5369614e` |
| corrected head | `01956bdc808d459a5def4a7018ab7a1b16530f42` |
| auto-merge | NO |
| workflow run | https://github.com/mcleland147/sfia-workspace/actions/runs/33736962747 |
| Detect | SUCCESS |
| **Build** | **SUCCESS** (primary CORR target) |
| Unit tests (Vitest) | **FAILURE** — 1 failed / 2507 passed / 132 skipped |
| Required Gate | **FAILURE** |

### Unit-test failure (not the Build-boundary defect)
- File: `__tests__/nora-cognitive-runtime/mw2.corr04.truthCIntentStability.d0.test.ts`
- Case: `D0-10 — client boundary: no CWP / Truth C leak`
- Assertion: `expect(result.ok).toBe(true)` → received `false` at line 474
- Local re-run of same file on corrected HEAD: **PASS** (12/12)
- Classification: **TEST / CI non-determinism or unrelated MW2 path** — **not** the prior webpack `node:*` Build defect; **not** fixed by further import-boundary edits in this GO
- Per GO: no second opportunistic product correction; preserve and STOP

---

## K. Reserves

| ID | State |
|---|---|
| **R-MW4-PR-CI-01** | **PARTIALLY ADDRESSED** — Build boundary fixed (local Build + CI Build SUCCESS). **Not CLOSED** because Required Gate still red. |
| **R-MW4-PR-CI-02** | **NEW** — CI Unit tests fail on MW2 corr04 D0-10 (`result.ok===false`) under parallel `npm test` on SHA `01956bdc808d459a5def4a7018ab7a1b16530f42`; local isolated/full serial PASS. Requires ChatGPT/Morris requalification (flake vs latent product). |
| RA-06 / RA-07 | CARRY |
| MW2-R01 / R02 / R03 | CARRY |
| R-MW4-REAL-02 | CARRY |

---

## L. Architecture

FA NO · TA NO · persistence NO · package/dependency NO · ZERO REAL · no parallel client runtime · no webpack polyfill

---

## M. Anti-claims

- MW4 NOT CLOSED / NOT MERGED
- Cognitive Completion NOT PROVEN
- runtime v3 NON ADOPTED
- production routing NOT SELECTED
- MW5 NOT AUTHORIZED
- CORR-MW4-PR-CI-01 NOT fully accepted (Required Gate red)
- prior REAL proof NOT upgraded by this correction

---

## N. Final acceptance matrix

ROUTING: Cycle 8 Delivery correction / RUN / CRITICAL — **PASS**
CONVERGENCE: MW4 link / source-lock unchanged / ADAPT — **PASS**
LOCAL GIT TRUTH: **PASS**
ROOT CAUSE (barrel leak): **PASS** (diagnosed)
PATCH (leaf import): **PASS**
LOCAL QA (incl. Build): **PASS**
PROJECT GIT: **PASS**
PR #461 topology: **PASS**
CI Build: **PASS**
CI Unit tests: **FAIL**
CI Required Gate: **FAIL**
RESERVES: R-MW4-PR-CI-01 partial; R-MW4-PR-CI-02 new — documented
REAL: ZERO — **PASS**
REVIEW: this pack + handoff below
GOVERNANCE: merge NO · MW4 closed NO · MW5 NOT AUTHORIZED — **PASS**

---

## NEXT

STOP for ChatGPT CRITICAL requalification of:
1. whether CORR-MW4-PR-CI-01 Build-boundary scope can be accepted as PASS-with-reserve despite Required Gate red; and/or
2. distinct handling of R-MW4-PR-CI-02 (MW2 D0-10 CI unit failure).

Do **not** merge PR #461 on current HEAD while Required Gate fails.
