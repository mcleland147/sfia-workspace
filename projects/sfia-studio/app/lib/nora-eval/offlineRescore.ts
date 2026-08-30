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
