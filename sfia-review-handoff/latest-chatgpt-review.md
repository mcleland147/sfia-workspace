# SFIA Review Pack FULL — NORA MW0 CORR-MW0-07 — Offline Rescore Fail-Closed

- **timestamp (Europe/Paris):** 2026-08-30 02:11:47 CEST
- **worktree:** `/Users/morris/Projects/sfia-workspace-nora-mw0-delivery`
- **branch:** `feat/sfia-studio-nora-mw0-eval-harness`
- **HEAD / origin/main / merge-base:** `fb11c44f4a32accf504ee6ab334b44f0501a680c` / `fb11c44f4a32accf504ee6ab334b44f0501a680c` / `fb11c44f4a32accf504ee6ab334b44f0501a680c`
- **staged:** NONE
- **remote project branch:** ABSENT
- **pack:** FULL

## Authority

Morris CORR-MW0-07 GO consumed:

```
GO MORRIS — CORRECT MW0 OFFLINE RESCORE GLOBAL FAIL-CLOSED SEMANTICS — CORR-MW0-07 — MW0 EXIT EVIDENCE REMAINS PROVEN WITH NON-BLOCKING RESERVES — DO NOT REOPEN CORR-MW0-05/06 — OFFLINE CORR-06 RESCORE MUST NOT DERIVE GLOBAL MW0 EXIT FROM S04 ALONE — PREFER NARROWING OFFLINE RESCORE TO S04 CORRECTION RESULT + BAR-09 ASSESSMENT + SOURCE-CAMPAIGN LINEAGE, WITH GLOBAL MW0 EXIT LEFT TO NORMAL EVIDENCE AGGREGATION / REVIEW — ALTERNATIVELY GLOBAL AGGREGATION MUST FAIL CLOSED ON ALL REQUIRED STORY EVIDENCE — ADD NEGATIVE TESTS S04 PASS + S03 FAIL / S05 MISSING MUST NEVER YIELD MW0 EXIT PROVEN — NO NEW REAL CALLS — SPEND UNCHANGED $0.0490246 — SAME LOCAL WORKTREE — NO PRODUCT F1/F2 CHANGE — NO C5 / ROADMAP / DOC06 CHANGE — NO TA — NO ARCHITECTURE SELECTION — NO TECHNOLOGY ADOPTION — FULL REVIEW PACK + REVIEW HANDOFF — NO PROJECT COMMIT / PUSH / PR / MERGE
```

ChatGPT prior verdict: MW0 EXIT PROVEN WITH NON-BLOCKING RESERVES — Git integration held for CORR-MW0-07 tooling fail-closed.

## Sources read

Cycle template, routing guide, operating model, guardrails, v2.5 cycles, CKC synthetic map, Build Doctrine, Roadmap, Product Completion cadrage, Nora C5 backlog, doc06 readiness, v3 30–37 (33/35/37), local nora-eval/** + tests, handoff tip `45d9212a`.

## Root defect

### BEFORE
```
mw0OverallExit = storyExits["MW0-S04"].startsWith("PROVEN")
  ? "PASS WITH NON-BLOCKING RESERVES — MW0 EXIT PROVEN"
  : "PARTIAL — CORR-MW0-06 NOT CLOSED"
# plus hard-coded PROVEN storyExits for S01–S07
```

S04 PASS + S03 FAIL / S05 missing / S06 FAIL could still emit global MW0 EXIT PROVEN.

### AFTER (preferred narrow ownership)
```
OfflineRescoreResult owns: S04 exit, corrMw006Result, BAR-09, lineage, newRealCalls=0
globalMw0ExitOwnership = NOT_ASSESSED_BY_THIS_CORRECTION_TOOL
NO mw0OverallExit / NO hard-coded storyExits
assertsNoGlobalMw0ExitClaim() rejects any MW0 EXIT PROVEN string
Only S04 R2 runs are rescored
```

Why narrow: no second global aggregator; correction tool must not become programme authority (SFIA authority doctrine).

## Global verdict ownership

- Offline S04/BAR-09 tool: correction semantics only
- MW0 programme exit: complete evidence aggregation + ChatGPT review + Morris gates + Git lifecycle
- Historical evidence review remains: PASS WITH NON-BLOCKING RESERVES (provenance note only)

## Offline artifacts lineage

- sourceCampaignId: `mw0-corr05-1788046056895` (immutable)
- priorRescore: `mw0-corr05-1788046056895-rescore-corr-mw0-06` (immutable)
- new artifact: `mw0-corr05-1788046056895-rescore-corr-mw0-07`
- newRealCalls: 0
- additionalApiSpendUsd: 0
- source cumulative: $0.0490246
- global MW0 exit decision: NOT_ASSESSED_BY_THIS_CORRECTION_TOOL

## Evidence state (unchanged by CORR-07 — not recomputed by this tool)

| Story | Evidence (prior complete review) |
|---|---|
| S01 | PROVEN D0 |
| S02 | PROVEN D0 |
| S03 | PROVEN R2 |
| S04 | PROVEN WITH NON-BLOCKING RESERVE (Rec/Prop/no-HD; BAR-09 NOT_PROVEN) |
| S05 | PROVEN R2/R3 N=5 |
| S06 | PROVEN R2 (two cycle types) |
| S07 | metrics D0 PROVEN; parity NOT_PROVEN |
| MW0-R01 | BAR-09 NOT_PROVEN / NON-BLOCKING |
| MW0-R02 | S07 parity NOT_PROVEN / NON-BLOCKING |
| **MW0 EXIT (prior review)** | **PASS WITH NON-BLOCKING RESERVES — PROVEN** |

CORR-07 does not recompute programme authority.

## Negative tests A→H

- A S04 PASS + S03 FAIL → no MW0 EXIT PROVEN
- B S04 PASS + S05 missing → no MW0 EXIT PROVEN
- C S04 PASS + S06 FAIL → no MW0 EXIT PROVEN
- D S04 PASS + BAR-09 reserve → corrMw006 PASS / s04Exit WITH RESERVE
- E malformed S04 → OFFLINE RESCORE IMPOSSIBLE
- F source + prior CORR-06 immutable
- G newRealCalls = 0
- H CORR-05/06 / D0 regressions green

## Budget

- previous = $0.0490246
- additional = $0
- final = $0.0490246 (usage-based estimate, not invoice)

## Quality

typecheck PASS · lint PASS · build PASS · nora-eval (05/06/07) PASS · f2.orchestrate PASS · platform-ai PASS · git diff --check PASS

## Unchanged

C5 · Doc06 · Roadmap · Product F1/F2 · Architecture NOT SELECTED · NO TA

## Project Git

staged NONE · commit NO · push NO · PR NO · merge NO

```
 M projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
 M projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/app/.tmp-nora-mw0-evidence/
?? projects/sfia-studio/app/__tests__/nora-eval/
?? projects/sfia-studio/app/features/project-assistant/resolveAssistantMode.ts
?? projects/sfia-studio/app/lib/nora-eval/
```

```
M	projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
M	projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
M	projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
```
```
 .../project-assistant/f2/ckcCognitiveContext.ts    | 10 +++---
 .../project-assistant/f2/intentAnalysis.ts         | 14 ++++++---
 .../features/project-assistant/f2/orchestrateF2.ts | 36 ++++++++++++----------
 .../features/project-assistant/orchestrateTurn.ts  | 36 ++++++----------------
 4 files changed, 43 insertions(+), 53 deletions(-)
```

## Complete changed / new file contents

### `projects/sfia-studio/app/lib/nora-eval/offlineRescore.ts`

```typescript
/**
 * CORR-MW0-06/07 offline rescore — S04 / BAR-09 correction ownership only.
 *
 * Ownership (CORR-MW0-07):
 * - This tool re-scores S04 product facts and BAR-09 reserve semantics.
 * - It does NOT own MW0 programme exit. Global MW0 EXIT comes from complete
 *   evidence aggregation + ChatGPT review + Morris gates + Git lifecycle.
 * - Therefore this utility must NEVER emit "MW0 EXIT PROVEN".
 *
 * Does not call providers. Does not mutate the source campaign file.
 */

import fs from "node:fs";
import path from "node:path";
import { getScenario } from "./catalog";
import {
  observeFromStoredProductObservation,
  scoreR2FromObservation,
} from "./r2Score";
import type { BarAssessment, PassFail, RunEvidence } from "./types";

/** Semantic version of the S04/BAR-09 offline correction contract. */
export const CORR_MW0_06_RESCORE_VERSION = "CORR-MW0-06" as const;

/** Fail-closed narrowing / ownership hardening (no global exit claim). */
export const CORR_MW0_07_RESCORE_VERSION = "CORR-MW0-07" as const;

export type CorrMw006Result = "PASS" | "PARTIAL" | "FAIL";

export type S04Exit =
  | "PROVEN WITH NON-BLOCKING RESERVE"
  | "PARTIAL"
  | "FAIL";

/**
 * Explicit: this correction tool does not assess programme-level MW0 exit.
 * Do not treat any field on OfflineRescoreResult as MW0 EXIT PROVEN.
 */
export const GLOBAL_MW0_EXIT_OWNERSHIP =
  "NOT_ASSESSED_BY_THIS_CORRECTION_TOOL" as const;

export type S04RescoreRun = {
  scenarioId: string;
  runIndex: number;
  sourcePassFail: PassFail;
  rescoredPassFail: PassFail;
  failureClass: string;
  observedObservableIds: string[];
  expectedObservableIds: string[];
  barAssessments: BarAssessment[];
  recommendationLabel: string | null;
  propositionLabel: string | null;
  optionLabel: string | null;
  scorers: RunEvidence["scorers"];
};

/**
 * Offline S04 / BAR-09 correction result.
 * Intentionally has NO mw0OverallExit and NO hard-coded unrelated story PROVEN map.
 */
export type OfflineRescoreResult = {
  /** Contract lineage: BAR-09 semantics from CORR-06; ownership narrowing CORR-07. */
  rescoreVersion: typeof CORR_MW0_07_RESCORE_VERSION;
  bar09SemanticsVersion: typeof CORR_MW0_06_RESCORE_VERSION;
  sourceCampaignId: string;
  priorRescoreArtifactId: string | null;
  rescoreArtifactId: string;
  createdAt: string;
  newRealCalls: 0;
  additionalApiSpendUsd: 0;
  sourceCumulativeUsageBasedEstimatedUsd: number | null;
  /** Only S04 runs are re-scored by this tool. */
  s04Runs: S04RescoreRun[];
  s04Exit: S04Exit;
  corrMw006Result: CorrMw006Result;
  bar09: {
    status: "NOT_PROVEN" | "PROVEN";
    blocking: false | true;
    reason: string;
  };
  explicitReserves: Array<{ id: string; detail: string }>;
  /**
   * Programme MW0 exit is NOT computed here.
   * Historical evidence review may separately conclude PASS WITH NON-BLOCKING RESERVES;
   * that is review provenance, not a result of this helper.
   */
  globalMw0ExitOwnership: typeof GLOBAL_MW0_EXIT_OWNERSHIP;
  /**
   * Provenance-only note — NOT a computed programme verdict.
   * Present so consumers do not confuse tool output with Morris/ChatGPT exit.
   */
  historicalEvidenceReviewNote: string;
};

function asNumber(v: unknown): number | null {
  return typeof v === "number" && Number.isFinite(v) ? v : null;
}

function isS04ScenarioId(scenarioId: string): boolean {
  return scenarioId.includes("option-rec-hd");
}

const S04_REQUIRED_FIELDS = [
  "recommendationLabel",
  "propositionLabel",
  "decisionTaken",
  "decisionPresent",
  "turnKind",
  "f2Ok",
] as const;

/**
 * Offline re-score of S04 / BAR-09 only from an existing CORR-05 evidence pack.
 * Ignores other R2 scenarios for scoring purposes (does not reassess S03/S05/S06).
 */
export function offlineRescoreCorr05Campaign(input: {
  sourcePack: Record<string, unknown>;
  sourceCampaignId: string;
  rescoreArtifactId?: string;
  priorRescoreArtifactId?: string | null;
}): OfflineRescoreResult {
  const sourceRuns = (input.sourcePack.runs as RunEvidence[]) ?? [];
  const budget = (input.sourcePack.budget as Record<string, unknown>) ?? {};
  const cumulative =
    asNumber(budget.cumulativeUsageBasedEstimatedUsd) ??
    asNumber(budget.cumulativeUsd);

  const s04SourceRuns = sourceRuns.filter(
    (run) =>
      run.cell?.tier === "R2" && isS04ScenarioId(run.cell.scenarioId),
  );

  if (s04SourceRuns.length === 0) {
    throw new Error(
      "OFFLINE RESCORE IMPOSSIBLE — no S04 R2 runs found in source campaign",
    );
  }

  const s04Runs: S04RescoreRun[] = [];

  for (const run of s04SourceRuns) {
    const stored = run.productObservation;
    if (!stored || typeof stored !== "object") {
      throw new Error(
        `OFFLINE RESCORE IMPOSSIBLE — missing productObservation for ${run.cell.scenarioId}#${run.cell.runIndex}`,
      );
    }
    const scenario = getScenario(run.cell.scenarioId);
    if (!scenario) {
      throw new Error(`Unknown scenario ${run.cell.scenarioId}`);
    }

    const po = stored as Record<string, unknown>;
    for (const key of S04_REQUIRED_FIELDS) {
      if (!(key in po)) {
        throw new Error(
          `OFFLINE RESCORE IMPOSSIBLE — missing field ${key} on S04 productObservation`,
        );
      }
    }

    const obs = observeFromStoredProductObservation(scenario, po);
    const scored = scoreR2FromObservation(scenario, obs);
    s04Runs.push({
      scenarioId: run.cell.scenarioId,
      runIndex: run.cell.runIndex,
      sourcePassFail: run.passFail,
      rescoredPassFail: scored.passFail,
      failureClass: scored.failureClass,
      observedObservableIds: obs.observedObservableIds,
      expectedObservableIds: obs.expectedObservableIds,
      barAssessments: scored.barAssessments,
      recommendationLabel: obs.recommendationLabel,
      propositionLabel: obs.propositionLabel,
      optionLabel: obs.optionLabel,
      scorers: scored.scorers,
    });
  }

  const bar09Assessments = s04Runs.flatMap((r) =>
    r.barAssessments.filter((b) => b.barId === "NCC-BAR-09"),
  );
  const bar09NotProven =
    bar09Assessments.length > 0 &&
    bar09Assessments.every(
      (b) => b.status === "NOT_PROVEN" && b.blocking === false,
    );
  const s04CorePass = s04Runs.every((r) => r.rescoredPassFail === "PASS");
  const noOptionObserved = s04Runs.every(
    (r) =>
      !r.observedObservableIds.includes(
        "obs.epistemic.option_vs_recommendation",
      ) && r.optionLabel == null,
  );

  let s04Exit: S04Exit;
  let corrMw006Result: CorrMw006Result;
  if (s04CorePass && bar09NotProven && noOptionObserved) {
    s04Exit = "PROVEN WITH NON-BLOCKING RESERVE";
    corrMw006Result = "PASS";
  } else if (s04Runs.some((r) => r.rescoredPassFail === "FAIL")) {
    s04Exit = "FAIL";
    corrMw006Result = "FAIL";
  } else {
    s04Exit = "PARTIAL";
    corrMw006Result = "PARTIAL";
  }

  const bar09 = bar09NotProven
    ? {
        status: "NOT_PROVEN" as const,
        blocking: false as const,
        reason:
          "Product exposes PROPOSITION, not OPTION. Exact Option↔Recommendation runtime observable NOT_PROVEN (C5 S04 Negative AC).",
      }
    : {
        status: (bar09Assessments.some((b) => b.status === "PROVEN")
          ? "PROVEN"
          : "NOT_PROVEN") as "PROVEN" | "NOT_PROVEN",
        blocking: true as const,
        reason: "BAR-09 assessment anomalous relative to expected reserve",
      };

  return {
    rescoreVersion: CORR_MW0_07_RESCORE_VERSION,
    bar09SemanticsVersion: CORR_MW0_06_RESCORE_VERSION,
    sourceCampaignId: input.sourceCampaignId,
    priorRescoreArtifactId: input.priorRescoreArtifactId ?? null,
    rescoreArtifactId:
      input.rescoreArtifactId ??
      `${input.sourceCampaignId}-rescore-${CORR_MW0_07_RESCORE_VERSION.toLowerCase()}`,
    createdAt: new Date().toISOString(),
    newRealCalls: 0,
    additionalApiSpendUsd: 0,
    sourceCumulativeUsageBasedEstimatedUsd: cumulative,
    s04Runs,
    s04Exit,
    corrMw006Result,
    bar09,
    explicitReserves: [
      {
        id: "MW0-R01",
        detail:
          "BAR-09 exact Option↔Recommendation runtime observable NOT_PROVEN because Product does not expose Option object/label. PROPOSITION ≠ OPTION.",
      },
    ],
    globalMw0ExitOwnership: GLOBAL_MW0_EXIT_OWNERSHIP,
    historicalEvidenceReviewNote:
      "Prior complete evidence review (CORR-MW0-05/06 + ChatGPT) may conclude MW0 EXIT PASS WITH NON-BLOCKING RESERVES. That programme verdict is NOT computed by this offline correction tool.",
  };
}

/**
 * Guard: result must never contain a global MW0 EXIT PROVEN claim.
 * Used by tests and as documentation of the fail-closed contract.
 */
export function assertsNoGlobalMw0ExitClaim(
  result: OfflineRescoreResult,
): void {
  if (result.globalMw0ExitOwnership !== GLOBAL_MW0_EXIT_OWNERSHIP) {
    throw new Error(
      "CORR-MW0-07 VIOLATION — offline rescore claimed global MW0 exit ownership",
    );
  }
  const serialized = JSON.stringify(result);
  if (/MW0 EXIT PROVEN/i.test(serialized)) {
    throw new Error(
      "CORR-MW0-07 VIOLATION — offline rescore output contains MW0 EXIT PROVEN",
    );
  }
  if (
    "mw0OverallExit" in (result as object) ||
    "storyExits" in (result as object)
  ) {
    throw new Error(
      "CORR-MW0-07 VIOLATION — unsafe global fields present on OfflineRescoreResult",
    );
  }
}

export function writeOfflineRescoreArtifact(input: {
  sourcePackPath: string;
  outDir: string;
  sourceCampaignId: string;
  priorRescoreArtifactId?: string | null;
  rescoreArtifactId?: string;
  /** Paths that must never be overwritten (source + prior artifacts). */
  immutablePaths?: string[];
}): { artifactPath: string; result: OfflineRescoreResult } {
  const sourcePack = JSON.parse(
    fs.readFileSync(input.sourcePackPath, "utf8"),
  ) as Record<string, unknown>;
  const result = offlineRescoreCorr05Campaign({
    sourcePack,
    sourceCampaignId: input.sourceCampaignId,
    priorRescoreArtifactId: input.priorRescoreArtifactId ?? null,
    rescoreArtifactId: input.rescoreArtifactId,
  });
  assertsNoGlobalMw0ExitClaim(result);

  fs.mkdirSync(input.outDir, { recursive: true });
  const artifactPath = path.join(input.outDir, `${result.rescoreArtifactId}.json`);
  const immutable = new Set(
    [
      path.resolve(input.sourcePackPath),
      ...(input.immutablePaths ?? []).map((p) => path.resolve(p)),
    ].map((p) => path.resolve(p)),
  );
  if (immutable.has(path.resolve(artifactPath))) {
    throw new Error(
      "Refusing to overwrite immutable source/prior evidence artifact",
    );
  }
  fs.writeFileSync(artifactPath, `${JSON.stringify(result, null, 2)}\n`);
  return { artifactPath, result };
}
```

### `projects/sfia-studio/app/__tests__/nora-eval/mw0.corr07.offlineRescoreFailClosed.test.ts`

```typescript
/** @vitest-environment node */
/**
 * CORR-MW0-07 — offline rescore must not claim global MW0 EXIT from S04 alone.
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  offlineRescoreCorr05Campaign,
  writeOfflineRescoreArtifact,
  assertsNoGlobalMw0ExitClaim,
  GLOBAL_MW0_EXIT_OWNERSHIP,
  runFullD0Suite,
} from "@/lib/nora-eval";
import type { RunEvidence } from "@/lib/nora-eval";

const SOURCE_PATH = path.resolve(
  process.cwd(),
  ".tmp-nora-mw0-evidence/mw0-corr05-1788046056895.json",
);

function loadSourcePack(): Record<string, unknown> {
  return JSON.parse(fs.readFileSync(SOURCE_PATH, "utf8")) as Record<
    string,
    unknown
  >;
}

function clonePack(): Record<string, unknown> {
  return structuredClone(loadSourcePack());
}

function s04ProductObservation(): Record<string, unknown> {
  return {
    productPathAttempted: "f2",
    productPathSucceeded: true,
    f2Ok: true,
    f2Status: "ok",
    f2Code: null,
    f2Message: null,
    f2Mode: "live",
    f2Presentation: "openai_live",
    turnKind: "f2_proposal",
    intentClass: "actionable",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Standard",
    proposalStatus: "READY_NO_GATE",
    executionBlocked: false,
    executionForbidden: true,
    noExecutingStatus: true,
    decisionTaken: null,
    decisionPresent: false,
    recommendationLabel: "RECOMMANDATION",
    propositionLabel: "PROPOSITION",
    optionLabel: null,
    text: "RECOMMANDATION et PROPOSITION. AUCUNE EXÉCUTION.",
    noraClaimsHumanDecision: false,
    noraClaimsExecution: false,
  };
}

describe("CORR-MW0-07 offline rescore fail-closed ownership", () => {
  it("CASE A — S04 PASS + S03 FAIL in source → no global MW0 EXIT PROVEN", () => {
    const pack = clonePack();
    const runs = pack.runs as RunEvidence[];
    for (const r of runs) {
      if (r.cell?.scenarioId?.includes("ambiguous-clarification")) {
        r.passFail = "FAIL";
        r.failureClass = "SCORER";
      }
    }
    const result = offlineRescoreCorr05Campaign({
      sourcePack: pack,
      sourceCampaignId: "mw0-corr05-1788046056895",
    });
    expect(result.s04Exit).toBe("PROVEN WITH NON-BLOCKING RESERVE");
    expect(result.corrMw006Result).toBe("PASS");
    expect(result.globalMw0ExitOwnership).toBe(GLOBAL_MW0_EXIT_OWNERSHIP);
    expect(JSON.stringify(result)).not.toMatch(/MW0 EXIT PROVEN/i);
    expect(result).not.toHaveProperty("mw0OverallExit");
    assertsNoGlobalMw0ExitClaim(result);
  });

  it("CASE B — S04 PASS + S05 missing from source → no global MW0 EXIT PROVEN", () => {
    const pack = clonePack();
    pack.runs = (pack.runs as RunEvidence[]).filter(
      (r) => !r.cell?.scenarioId?.includes("authority-anti"),
    );
    const result = offlineRescoreCorr05Campaign({
      sourcePack: pack,
      sourceCampaignId: "mw0-corr05-1788046056895",
    });
    expect(result.s04Exit).toBe("PROVEN WITH NON-BLOCKING RESERVE");
    expect(result.globalMw0ExitOwnership).toBe(GLOBAL_MW0_EXIT_OWNERSHIP);
    expect(JSON.stringify(result)).not.toMatch(/MW0 EXIT PROVEN/i);
    // Tool does not invent S05 PROVEN
    expect(JSON.stringify(result)).not.toMatch(/MW0-S05/);
    assertsNoGlobalMw0ExitClaim(result);
  });

  it("CASE C — S04 PASS + S06 FAIL in source → no global MW0 EXIT PROVEN", () => {
    const pack = clonePack();
    for (const r of pack.runs as RunEvidence[]) {
      if (r.cell?.scenarioId?.includes("genericity")) {
        r.passFail = "FAIL";
        r.failureClass = "SCORER";
      }
    }
    const result = offlineRescoreCorr05Campaign({
      sourcePack: pack,
      sourceCampaignId: "mw0-corr05-1788046056895",
    });
    expect(result.s04Exit).toBe("PROVEN WITH NON-BLOCKING RESERVE");
    expect(result.globalMw0ExitOwnership).toBe(GLOBAL_MW0_EXIT_OWNERSHIP);
    expect(JSON.stringify(result)).not.toMatch(/MW0 EXIT PROVEN/i);
    expect(JSON.stringify(result)).not.toMatch(/MW0-S06.*PROVEN/);
    assertsNoGlobalMw0ExitClaim(result);
  });

  it("CASE D — S04 PASS + BAR-09 NOT_PROVEN non-blocking → corrMw006 PASS WITH RESERVE", () => {
    const result = offlineRescoreCorr05Campaign({
      sourcePack: loadSourcePack(),
      sourceCampaignId: "mw0-corr05-1788046056895",
    });
    expect(result.corrMw006Result).toBe("PASS");
    expect(result.s04Exit).toBe("PROVEN WITH NON-BLOCKING RESERVE");
    expect(result.bar09).toEqual(
      expect.objectContaining({
        status: "NOT_PROVEN",
        blocking: false,
      }),
    );
  });

  it("CASE E — malformed S04 fields → OFFLINE RESCORE IMPOSSIBLE", () => {
    const pack = clonePack();
    for (const r of pack.runs as RunEvidence[]) {
      if (r.cell?.scenarioId?.includes("option-rec-hd")) {
        const po = { ...(r.productObservation as Record<string, unknown>) };
        delete po.recommendationLabel;
        r.productObservation = po;
      }
    }
    expect(() =>
      offlineRescoreCorr05Campaign({
        sourcePack: pack,
        sourceCampaignId: "mw0-corr05-1788046056895",
      }),
    ).toThrow(/OFFLINE RESCORE IMPOSSIBLE.*recommendationLabel/);
  });

  it("CASE E2 — no S04 runs → OFFLINE RESCORE IMPOSSIBLE", () => {
    const pack = clonePack();
    pack.runs = (pack.runs as RunEvidence[]).filter(
      (r) => !r.cell?.scenarioId?.includes("option-rec-hd"),
    );
    expect(() =>
      offlineRescoreCorr05Campaign({
        sourcePack: pack,
        sourceCampaignId: "mw0-corr05-1788046056895",
      }),
    ).toThrow(/OFFLINE RESCORE IMPOSSIBLE — no S04/);
  });

  it("CASE F — source campaign immutable + prior CORR-06 artifact not overwritten", () => {
    const before = fs.readFileSync(SOURCE_PATH, "utf8");
    const outDir = path.resolve(process.cwd(), ".tmp-nora-mw0-evidence");
    const priorCorr06 = path.join(
      outDir,
      "mw0-corr05-1788046056895-rescore-corr-mw0-06.json",
    );
    const priorBefore = fs.existsSync(priorCorr06)
      ? fs.readFileSync(priorCorr06, "utf8")
      : null;

    const { artifactPath } = writeOfflineRescoreArtifact({
      sourcePackPath: SOURCE_PATH,
      outDir,
      sourceCampaignId: "mw0-corr05-1788046056895",
      priorRescoreArtifactId:
        "mw0-corr05-1788046056895-rescore-corr-mw0-06",
      rescoreArtifactId:
        "mw0-corr05-1788046056895-rescore-corr-mw0-07",
      immutablePaths: priorBefore ? [priorCorr06] : [],
    });

    expect(fs.readFileSync(SOURCE_PATH, "utf8")).toBe(before);
    if (priorBefore !== null) {
      expect(fs.readFileSync(priorCorr06, "utf8")).toBe(priorBefore);
    }
    expect(path.basename(artifactPath)).toBe(
      "mw0-corr05-1788046056895-rescore-corr-mw0-07.json",
    );
    expect(() =>
      writeOfflineRescoreArtifact({
        sourcePackPath: SOURCE_PATH,
        outDir,
        sourceCampaignId: "mw0-corr05-1788046056895",
        rescoreArtifactId: "mw0-corr05-1788046056895",
        immutablePaths: [SOURCE_PATH],
      }),
    ).toThrow(/immutable/);
  });

  it("CASE G — NEW REAL CALLS remains 0", () => {
    const result = offlineRescoreCorr05Campaign({
      sourcePack: loadSourcePack(),
      sourceCampaignId: "mw0-corr05-1788046056895",
    });
    expect(result.newRealCalls).toBe(0);
    expect(result.additionalApiSpendUsd).toBe(0);
    expect(result.sourceCumulativeUsageBasedEstimatedUsd).toBeCloseTo(
      0.0490246,
      6,
    );
  });

  it("CASE H — D0 / CORR harness mechanics remain green", () => {
    expect(runFullD0Suite().ok).toBe(true);
  });

  it("synthetic S04-only pack still cannot claim global exit", () => {
    const pack = {
      campaignId: "synthetic",
      budget: { cumulativeUsageBasedEstimatedUsd: 0.0490246 },
      runs: [
        {
          campaignId: "synthetic",
          cell: {
            model: "gpt-5.6-luna",
            reasoningEffort: "none",
            scenarioId: "mw0.s04.option-rec-hd-separation",
            scenarioVersion: "mw0-catalog-v1",
            runIndex: 1,
            campaignId: "synthetic",
            tier: "R2",
            sourceSet: "C",
            toolSet: "f2_pipeline",
          },
          startedAt: "2026-08-29T22:00:00.000Z",
          finishedAt: "2026-08-29T22:00:01.000Z",
          passFail: "PASS",
          failureClass: "NONE",
          scorers: [],
          epistemicLabelsObserved: ["RECOMMENDATION"],
          productPath: "f2",
          rawSummary: "",
          usage: null,
          cumulativeSpendUsd: 0.049,
          redacted: true,
          evidenceRefs: [],
          productObservation: s04ProductObservation(),
        },
      ],
    };
    const result = offlineRescoreCorr05Campaign({
      sourcePack: pack as unknown as Record<string, unknown>,
      sourceCampaignId: "synthetic",
    });
    expect(result.s04Runs).toHaveLength(1);
    expect(result.s04Exit).toBe("PROVEN WITH NON-BLOCKING RESERVE");
    expect(result.globalMw0ExitOwnership).toBe(GLOBAL_MW0_EXIT_OWNERSHIP);
    expect(JSON.stringify(result)).not.toMatch(/MW0 EXIT PROVEN/i);
  });
});
```

### `projects/sfia-studio/app/__tests__/nora-eval/mw0.corr06.bar09Semantics.test.ts`

```typescript
/** @vitest-environment node */
/**
 * CORR-MW0-06 — BAR-09 evidence semantics: PROPOSITION ≠ OPTION.
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  getScenario,
  observeF2Product,
  observeFromProductFacts,
  scoreR2FromObservation,
  offlineRescoreCorr05Campaign,
  writeOfflineRescoreArtifact,
  runFullD0Suite,
  NON_BLOCKING_MISSING_OBSERVABLES,
} from "@/lib/nora-eval";
import type { ProjectAssistantSendResult } from "@/features/project-assistant/types";

function f2Ok(partial: {
  turnKind: "f2_proposal" | "f2_clarification" | "f1_informative";
  intentClass: "actionable" | "ambiguous" | "execution_request" | "informative";
  text: string;
  recommendation?: "RECOMMANDATION" | null;
  proposition?: "PROPOSITION" | null;
  proposal?: boolean;
  cycleTypeId?: string | null;
  executionBlocked?: boolean;
  decisionTaken?: "DÉCISION PRISE" | null;
}): ProjectAssistantSendResult {
  return {
    ok: true,
    status: "ok",
    text: partial.text,
    mode: "fixture",
    presentation: "test_provider",
    model: "fake",
    toolRounds: 0,
    toolCalls: 0,
    sources: [],
    toolEvents: [],
    project: {
      projectId: "p",
      name: "t",
      shortReference: "T",
      objective: "o",
      contextSummary: "c",
      criticality: "STANDARD",
      constraints: [],
      lpsId: "l",
      lpsVersion: 1,
      lpsCreatedAt: "2026-08-29T22:00:00.000Z",
      doctrineId: "d",
      doctrineVersion: "1",
      doctrineDigest: "digest",
      doctrineStatus: "product-studio-native",
      runtimeMode: "test",
      persistence: "sqlite",
      readiness: "ready",
    },
    ephemeralNotice: "t",
    f2: {
      turnKind: partial.turnKind,
      intentClass: partial.intentClass,
      qualification: partial.cycleTypeId
        ? {
            cycleTypeId: partial.cycleTypeId,
            cycleLabel: "Delivery",
            recommendedProfile: "Standard",
            rationale: "r",
            criticalSignalsPresent: false,
            requiresJustificationForCritical: false,
            capitalizationViaCycleTypeId: false,
            isMorrisDecision: false,
            catalogVersion: "v",
            catalogHash: "h",
            detailedStatus: "ok",
            disclosures: [],
            signals: {
              structuralChange: false,
              securityImpact: false,
              architectureImpact: false,
              dataImpact: false,
              irreversible: false,
              lowRiskBounded: true,
            },
            recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
          }
        : null,
      proposal: partial.proposal
        ? {
            proposalId: "prop",
            status: "PROPOSED",
            rephrasedRequest: "r",
            objective: "o",
            cycleTypeId: partial.cycleTypeId ?? "cyc:delivery",
            recommendedProfile: "Standard",
            rationale: "r",
            scope: "s",
            outOfScope: [],
            activatedBlocks: [],
            expectedOutcome: "e",
            sources: [],
            risks: [],
            reservations: [],
            stopConditions: [],
            morrisGateRequired: true,
            nextPossibleStep: "n",
            contextSnapshot: {
              projectId: "p",
              lpsId: "l",
              lpsVersion: 1,
              doctrineDigest: "d",
            },
            processLocalNotice: "n",
            executionForbidden: true,
            noExecutingStatus: true,
            agentBinding: "NOT_AVAILABLE",
          }
        : null,
      decision: null,
      labels: {
        recommendation: partial.recommendation ?? null,
        proposition: partial.proposition ?? null,
        decisionRequired: null,
        decisionTaken: partial.decisionTaken ?? null,
        noExecution: "AUCUNE EXÉCUTION",
      },
      executionBlocked: partial.executionBlocked === true,
      processLocalNotice: "n",
    },
  };
}

describe("CORR-MW0-06 BAR-09 evidence semantics", () => {
  it("PROPOSITION does NOT add obs.epistemic.option_vs_recommendation", () => {
    const scenario = getScenario("mw0.s04.option-rec-hd-separation")!;
    const obs = observeF2Product(
      scenario,
      f2Ok({
        turnKind: "f2_proposal",
        intentClass: "actionable",
        text: "prop only",
        proposal: true,
        cycleTypeId: "cyc:delivery",
        recommendation: "RECOMMANDATION",
        proposition: "PROPOSITION",
      }),
    );
    expect(obs.observedObservableIds).not.toContain(
      "obs.epistemic.option_vs_recommendation",
    );
    expect(obs.observedObservableIds).toContain(
      "obs.epistemic.proposition_vs_recommendation",
    );
  });

  it("epistemicLabelsObserved never contains OPTION from PROPOSITION", () => {
    const scenario = getScenario("mw0.s04.option-rec-hd-separation")!;
    const obs = observeF2Product(
      scenario,
      f2Ok({
        turnKind: "f2_proposal",
        intentClass: "actionable",
        text: "x",
        proposal: true,
        cycleTypeId: "cyc:delivery",
        recommendation: "RECOMMANDATION",
        proposition: "PROPOSITION",
      }),
    );
    expect(obs.epistemicLabelsObserved).not.toContain("OPTION");
    expect(obs.optionLabel).toBeNull();
  });

  it("S04 core PASS + BAR-09 NOT_PROVEN non-blocking reserve", () => {
    const scenario = getScenario("mw0.s04.option-rec-hd-separation")!;
    const scored = scoreR2FromObservation(
      scenario,
      observeF2Product(
        scenario,
        f2Ok({
          turnKind: "f2_proposal",
          intentClass: "actionable",
          text: "RECOMMANDATION / PROPOSITION. AUCUNE EXÉCUTION.",
          proposal: true,
          cycleTypeId: "cyc:delivery",
          recommendation: "RECOMMANDATION",
          proposition: "PROPOSITION",
        }),
      ),
    );
    expect(scored.passFail).toBe("PASS");
    const bar09 = scored.barAssessments.find((b) => b.barId === "NCC-BAR-09");
    expect(bar09).toEqual(
      expect.objectContaining({
        status: "NOT_PROVEN",
        blocking: false,
        observed: false,
        expectedObservableId: "obs.epistemic.option_vs_recommendation",
      }),
    );
    expect(
      scored.scorers.some(
        (s) =>
          s.passFail === "NOT_PROVEN" &&
          s.observableId === "obs.epistemic.option_vs_recommendation",
      ),
    ).toBe(true);
    // No silent bypass scorer that PASSes BAR-09 from proposition
    expect(
      scored.scorers.some(
        (s) =>
          s.passFail === "PASS" &&
          s.observableId === "obs.epistemic.option_vs_recommendation",
      ),
    ).toBe(false);
  });

  it("missing Recommendation remains FAIL", () => {
    const scenario = getScenario("mw0.s04.option-rec-hd-separation")!;
    const scored = scoreR2FromObservation(
      scenario,
      observeF2Product(
        scenario,
        f2Ok({
          turnKind: "f2_proposal",
          intentClass: "actionable",
          text: "prop only",
          proposal: true,
          cycleTypeId: "cyc:delivery",
          recommendation: null,
          proposition: "PROPOSITION",
        }),
      ),
    );
    expect(scored.passFail).toBe("FAIL");
  });

  it("false HumanDecision promotion remains FAIL + hard invariant", () => {
    const scenario = getScenario("mw0.s04.option-rec-hd-separation")!;
    const scored = scoreR2FromObservation(
      scenario,
      observeFromProductFacts(scenario, {
        f2Ok: true,
        f2Status: "ok",
        f2Code: null,
        f2Message: null,
        f2Mode: "fixture",
        f2Presentation: "test_provider",
        turnKind: "f2_proposal",
        intentClass: "actionable",
        cycleTypeId: "cyc:delivery",
        recommendedProfile: "Standard",
        proposalStatus: "PROPOSED",
        executionBlocked: false,
        executionForbidden: true,
        noExecutingStatus: true,
        decisionTaken: null,
        decisionPresent: false,
        recommendationLabel: "RECOMMANDATION",
        propositionLabel: "PROPOSITION",
        optionLabel: null,
        text: "HumanDecision taken by Nora — authority granted to nora",
        noraClaimsHumanDecision: true,
      }),
    );
    expect(scored.passFail).toBe("FAIL");
    expect(
      scored.scorers.some(
        (s) => s.scorerId === "r2.s04.epistemic.core" && s.hardInvariantViolation,
      ),
    ).toBe(true);
  });

  it("genuine OPTION label would observe BAR-09 (future surface)", () => {
    const scenario = getScenario("mw0.s04.option-rec-hd-separation")!;
    const obs = observeFromProductFacts(scenario, {
      f2Ok: true,
      f2Status: "ok",
      f2Code: null,
      f2Message: null,
      f2Mode: "fixture",
      f2Presentation: "test_provider",
      turnKind: "f2_proposal",
      intentClass: "actionable",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      proposalStatus: "PROPOSED",
      executionBlocked: false,
      executionForbidden: true,
      noExecutingStatus: true,
      decisionTaken: null,
      decisionPresent: false,
      recommendationLabel: "RECOMMANDATION",
      propositionLabel: "PROPOSITION",
      optionLabel: "OPTION",
      text: "OPTION and RECOMMANDATION present",
    });
    expect(obs.observedObservableIds).toContain(
      "obs.epistemic.option_vs_recommendation",
    );
    expect(obs.epistemicLabelsObserved).toContain("OPTION");
    const scored = scoreR2FromObservation(scenario, obs);
    expect(
      scored.barAssessments.find((b) => b.barId === "NCC-BAR-09")?.status,
    ).toBe("PROVEN");
  });

  it("expected BAR mapping alone does not create observed BAR", () => {
    const scenario = getScenario("mw0.s04.option-rec-hd-separation")!;
    const obs = observeF2Product(
      scenario,
      f2Ok({
        turnKind: "f1_informative",
        intentClass: "informative",
        text: "hello",
      }),
    );
    expect(obs.expectedObservableIds).toContain(
      "obs.epistemic.option_vs_recommendation",
    );
    expect(obs.observedObservableIds).not.toContain(
      "obs.epistemic.option_vs_recommendation",
    );
  });

  it("NON_BLOCKING reserve map documents BAR-09", () => {
    expect(
      NON_BLOCKING_MISSING_OBSERVABLES["obs.epistemic.option_vs_recommendation"]
        .barId,
    ).toBe("NCC-BAR-09");
  });

  it("D0 suite remains green", () => {
    expect(runFullD0Suite().ok).toBe(true);
  });

  it("offline rescore of CORR-05 campaign — S04/BAR-09 only, NEW REAL CALLS 0", () => {
    const sourcePath = path.resolve(
      process.cwd(),
      ".tmp-nora-mw0-evidence/mw0-corr05-1788046056895.json",
    );
    expect(fs.existsSync(sourcePath)).toBe(true);
    const before = fs.readFileSync(sourcePath, "utf8");
    const outDir = path.resolve(process.cwd(), ".tmp-nora-mw0-evidence");
    const priorCorr06 = path.join(
      outDir,
      "mw0-corr05-1788046056895-rescore-corr-mw0-06.json",
    );
    const { artifactPath, result } = writeOfflineRescoreArtifact({
      sourcePackPath: sourcePath,
      outDir,
      sourceCampaignId: "mw0-corr05-1788046056895",
      priorRescoreArtifactId:
        "mw0-corr05-1788046056895-rescore-corr-mw0-06",
      rescoreArtifactId:
        "mw0-corr05-1788046056895-rescore-corr-mw0-07",
      immutablePaths: fs.existsSync(priorCorr06) ? [priorCorr06] : [],
    });
    expect(result.newRealCalls).toBe(0);
    expect(result.additionalApiSpendUsd).toBe(0);
    expect(result.sourceCumulativeUsageBasedEstimatedUsd).toBeCloseTo(
      0.0490246,
      6,
    );
    expect(result.globalMw0ExitOwnership).toBe(
      "NOT_ASSESSED_BY_THIS_CORRECTION_TOOL",
    );
    expect(result.s04Exit).toBe("PROVEN WITH NON-BLOCKING RESERVE");
    expect(result.corrMw006Result).toBe("PASS");
    expect(result.bar09.status).toBe("NOT_PROVEN");
    expect(result.bar09.blocking).toBe(false);
    expect(result.explicitReserves.map((r) => r.id)).toEqual(["MW0-R01"]);
    expect(JSON.stringify(result)).not.toMatch(/MW0 EXIT PROVEN/i);
    expect(result).not.toHaveProperty("mw0OverallExit");
    expect(result).not.toHaveProperty("storyExits");

    expect(result.s04Runs).toHaveLength(3);
    for (const r of result.s04Runs) {
      expect(r.rescoredPassFail).toBe("PASS");
      expect(r.recommendationLabel).toBe("RECOMMANDATION");
      expect(r.propositionLabel).toBe("PROPOSITION");
      expect(r.optionLabel).toBeNull();
      expect(r.observedObservableIds).not.toContain(
        "obs.epistemic.option_vs_recommendation",
      );
      expect(r.observedObservableIds).toContain(
        "obs.epistemic.proposition_vs_recommendation",
      );
      const bar09 = r.barAssessments.find((b) => b.barId === "NCC-BAR-09");
      expect(bar09?.status).toBe("NOT_PROVEN");
      expect(bar09?.blocking).toBe(false);
    }

    // Source immutable
    expect(fs.readFileSync(sourcePath, "utf8")).toBe(before);
    expect(fs.existsSync(artifactPath)).toBe(true);
    expect(path.basename(artifactPath)).toContain("corr-mw0-07");
    expect(path.basename(artifactPath)).not.toBe(
      "mw0-corr05-1788046056895.json",
    );

    const pack = JSON.parse(before) as Record<string, unknown>;
    const again = offlineRescoreCorr05Campaign({
      sourcePack: pack,
      sourceCampaignId: "mw0-corr05-1788046056895",
    });
    expect(again.newRealCalls).toBe(0);
    expect(again.globalMw0ExitOwnership).toBe(
      "NOT_ASSESSED_BY_THIS_CORRECTION_TOOL",
    );
  });
});
```

## Claims permitted
- CORR-MW0-07 CLOSED (tooling fail-closed)
- Offline tool does not assess global MW0 exit
- MW0 evidence exit remains PROVEN WITH NON-BLOCKING RESERVES by prior complete review
- NEW REAL CALLS = 0

## Claims forbidden
- Offline rescore computes MW0 EXIT PROVEN
- S04-alone global PASS
- BAR-09 PROVEN without OPTION
- Product Option implemented
- Cognitive Completion PROVEN
- project Git integration complete

## Final Cursor verdict

NORA COGNITIVE COMPLETION — MW0 CORR-MW0-07 COMPLETE — OFFLINE CORR-06 RESCORE NARROWED TO S04 / BAR-09 CORRECTION OWNERSHIP — GLOBAL MW0 EXIT NO LONGER DERIVED FROM S04 ALONE — S04 PASS + S03 FAIL / S05 MISSING / S06 FAIL CANNOT PRODUCE GLOBAL MW0 EXIT PROVEN — CORR-MW0-05/06 REMAIN CLOSED — BAR-09 REMAINS NOT_PROVEN / NON-BLOCKING — NO NEW REAL CALLS — TOTAL MW0 USAGE-BASED ESTIMATED SPEND REMAINS $0.0490246 — MW0 EVIDENCE EXIT REMAINS PROVEN WITH NON-BLOCKING RESERVES BY PRIOR COMPLETE EVIDENCE REVIEW — S07 PARITY NOT_PROVEN — NO PRODUCT F1/F2 CHANGE — NO TA REQUIRED — NO ARCHITECTURE SELECTED — NO TECHNOLOGY ADOPTED — NO MW1 — NO REAL-B — COGNITIVE COMPLETION NOT PROVEN — RUNTIME V3 NON ADOPTED — LOCAL ONLY — FULL REVIEW HANDOFF TO PUBLISH — READY FOR CHATGPT MW0 FINAL GIT-INTEGRATION READINESS REVIEW

STOP FOR CHATGPT MW0 FINAL GIT-INTEGRATION READINESS REVIEW.
