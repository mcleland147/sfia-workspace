/**
 * Shared complete Increment D report projection for Increment E tests / live pack.
 */

export function sampleIncrementDReport(overrides: Record<string, unknown> = {}) {
  return {
    schemaVersion: "cursor-execution-report-1.0.0",
    executionId: "exec-inc-d-c9f0bec1-5755-40d5-8284-ad6b05597b7c",
    requestId: "req-inc-d-live-1784528437254",
    correlationId: "corr-inc-d-live-1784528437254",
    contractId: "ctr-inc-d-live-001",
    contractHash: "75eeca7668c69c4db9ec1d3afab60563cd1db1ab68b4107f3fd76155ba1c1d78",
    expectedBranch: "delivery/sfia-studio-poc-increment-d",
    actualBranch: "delivery/sfia-studio-poc-increment-d",
    expectedHead: "9926238a0be3c2e7ce745ee95321281ef49f0465",
    actualHead: "9926238a0be3c2e7ce745ee95321281ef49f0465",
    status: "SUCCEEDED",
    filesCreated: ["output.md"],
    filesModified: [],
    filesDeleted: [],
    outOfAllowlistChanges: [],
    remoteGitWrites: 0,
    networkUsed: false,
    stopRequested: false,
    timeout: false,
    reservations: [
      "Sandbox Markdown proof succeeded",
      "Remote Git writes: 0",
      "Candidate proof only — Morris decision required",
      "Increment E / GPT analysis not authorized at D time",
    ],
    mode: "live",
    realCursorProcessInvoked: true,
    s1ContractCursorMode: "fixture",
    analysisAuthorized: false,
    morrisDecisionRequired: true,
    ...overrides,
  };
}

export function completePackBuildInput(
  analysisRequestId: string,
  reportOverrides: Record<string, unknown> = {},
) {
  const report = sampleIncrementDReport(reportOverrides);
  return {
    analysisRequestId,
    report,
    qualificationId: null,
    reviewPackCompleteness: "complete" as const,
    reviewPackHasModifiedContent: true,
    analysisAuthorized: true,
    tests: {
      harnessPassed: true,
      appPassed: true,
      e2ePassed: true,
      notes: ["A–D regression green at Increment D merge"],
    },
    securityChecks: {
      secretsScanPassed: true,
      notes: ["no secrets in Increment D commit"],
    },
    provenFacts: [
      "Increment D Cursor sandbox SUCCEEDED",
      "PR #233 merged to main a766eb3",
      "remoteGitWrites=0",
    ],
    sourceReferences: [
      "cursor-execution-report",
      "increment-d-sandbox-proof",
      "pr-233-merge",
    ],
  };
}
