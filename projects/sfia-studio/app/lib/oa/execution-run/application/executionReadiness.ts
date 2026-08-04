import { readUntrustedPlainData } from "./untrustedExecutionData";

export type ReadinessStatus =
  | "demonstrated"
  | "not_demonstrated"
  | "blocked";

export type ReadinessLevel = {
  readonly status: ReadinessStatus;
  readonly reasons: readonly string[];
};

export type ExecutionReadinessAssessment = {
  readonly uxExploration: ReadinessLevel;
  readonly uiDelivery: ReadinessLevel;
  readonly strongRuntimeVerdict: ReadinessLevel;
  readonly openReserves: readonly string[];
};

export const D2D3_OPEN_RESERVES = [
  "R-QA-REV-01 — OPEN NOT LIFTED",
  "R-QA-REV-02 — OPEN NOT LIFTED",
  "R-QA-D2C-01 — OPEN NOT LIFTED",
  "Cursor product capabilities — UNVERIFIED",
  "memory process-local only",
  "R-PR-D2D2-01 — MINOR",
] as const;

const UI_DELIVERY: ReadinessLevel = {
  status: "not_demonstrated",
  reasons: [
    "no UI or accessibility delivery",
    "no Figma evidence",
    "no D3 transport selected",
  ],
};

const STRONG_RUNTIME: ReadinessLevel = {
  status: "blocked",
  reasons: [
    "G-D2D-CURSOR-01 not consumed",
    "G-D2D-PERSIST-01 not consumed",
    "Cursor unverified",
    "memory is process-local",
    "no live provider proof",
  ],
};

function notDemonstrated(reasons: readonly string[]): ExecutionReadinessAssessment {
  return {
    uxExploration: { status: "not_demonstrated", reasons },
    uiDelivery: UI_DELIVERY,
    strongRuntimeVerdict: STRONG_RUNTIME,
    openReserves: D2D3_OPEN_RESERVES,
  };
}

function isOfficialCompleteEvidence(
  evidence: unknown,
  runId: string,
  correlationId: string,
  source: string,
): boolean {
  if (!Array.isArray(evidence) || evidence.length === 0) return false;
  return evidence.some((item) => {
    if (!item || typeof item !== "object") return false;
    const e = item as Record<string, unknown>;
    return (
      e.official === true &&
      e.completeness === "complete" &&
      e.late === false &&
      e.runId === runId &&
      e.correlationId === correlationId &&
      e.source === source &&
      source === "fixture"
    );
  });
}

/**
 * Readiness from linked, validated artifacts only.
 * Boolean-only caller proofs are rejected as not_demonstrated.
 */
export function assessExecutionReadiness(
  artifacts: unknown,
): ExecutionReadinessAssessment {
  const copied = readUntrustedPlainData(artifacts, { redact: true });
  if (!copied.ok || !copied.value || typeof copied.value !== "object") {
    return notDemonstrated([
      "linked run, validated projection, and official evidence are required",
    ]);
  }
  const root = copied.value as Record<string, unknown>;

  // Explicitly reject the retired boolean-only proof API.
  if (
    "fixturePathDemonstrated" in root ||
    "projectionDemonstrated" in root ||
    "disclosuresDemonstrated" in root
  ) {
    return notDemonstrated([
      "boolean readiness proofs are not accepted; linked artifacts are required",
    ]);
  }

  const runRaw = root.run;
  if (!runRaw || typeof runRaw !== "object" || Array.isArray(runRaw)) {
    return notDemonstrated(["canonical ExecutionRun artifact is required"]);
  }
  const run = runRaw as Record<string, unknown>;
  const runId = typeof run.runId === "string" ? run.runId : null;
  const correlationId =
    typeof run.correlationId === "string" ? run.correlationId : null;
  const state = typeof run.state === "string" ? run.state : null;
  const disclosure =
    run.disclosure && typeof run.disclosure === "object"
      ? (run.disclosure as Record<string, unknown>)
      : null;
  const source =
    disclosure && typeof disclosure.source === "string"
      ? disclosure.source
      : null;

  if (!runId || !correlationId || !state || !source) {
    return notDemonstrated(["run identity, state, and source are required"]);
  }

  if (state !== "succeeded" || source !== "fixture") {
    return notDemonstrated([
      "UX exploration requires a succeeded fixture terminal",
    ]);
  }

  if (
    !isOfficialCompleteEvidence(run.evidence, runId, correlationId, source)
  ) {
    return notDemonstrated([
      "official complete non-late fixture evidence linked to the run is required",
    ]);
  }

  const persistence =
    run.persistence && typeof run.persistence === "object"
      ? (run.persistence as Record<string, unknown>)
      : null;
  if (
    !persistence ||
    persistence.kind !== "memory_process_local" ||
    persistence.durable !== false ||
    persistence.multiInstance !== false ||
    persistence.restartSafe !== false
  ) {
    return notDemonstrated(["process-local persistence disclosure is required"]);
  }

  const projectionRaw = root.projection;
  if (projectionRaw !== undefined) {
    if (typeof projectionRaw !== "object" || projectionRaw === null) {
      return notDemonstrated(["projection artifact must be a plain object"]);
    }
    const projection = projectionRaw as Record<string, unknown>;
    if (
      projection.runId !== runId ||
      projection.correlationId !== correlationId ||
      projection.source !== source
    ) {
      return notDemonstrated([
        "projection must share runId, correlationId, and source with the run",
      ]);
    }
  } else {
    // Composition may assess from run alone before projection materialization;
    // still require that a projection *could* be linked (same IDs present on run).
    // UX demonstrated only when a projection artifact is also supplied.
    return notDemonstrated([
      "validated projection of the same run is required for UX demonstration",
    ]);
  }

  const limits = disclosure?.limits;
  if (!Array.isArray(limits) || limits.length === 0) {
    return notDemonstrated(["source disclosure limits are required"]);
  }

  return {
    uxExploration: {
      status: "demonstrated",
      reasons: [
        "linked succeeded fixture run",
        "validated projection of the same run",
        "official complete evidence and disclosures demonstrated",
      ],
    },
    uiDelivery: UI_DELIVERY,
    strongRuntimeVerdict: STRONG_RUNTIME,
    openReserves: D2D3_OPEN_RESERVES,
  };
}
