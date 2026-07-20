import { describe, expect, it, beforeEach } from "vitest";
import { mkdtempSync } from "node:fs";
import os from "node:os";
import path from "path";
import {
  buildEvidenceAnalysisPack,
  validateEvidenceAnalysisPack,
} from "../src/increment-e/evidencePack.js";
import { completePackBuildInput, sampleIncrementDReport } from "../src/increment-e/fixtures.js";
import { runAnalysisFixture } from "../src/ports/gptAnalysisLive.js";
import {
  assertCandidateAuthority,
  validateVerdictModelPayload,
} from "../src/validation/verdictCandidateValidator.js";
import { recordMorrisFinalDecision, regenerateCycleSummary } from "../src/increment-e/morrisDecision.js";
import { resetSessionCallCountForTests } from "../src/finops/qualificationLimits.js";
import { INC_E_SESSION_KEY, getAnalysisSessionCallCount } from "../src/finops/analysisLimits.js";
import { getSessionCallCount } from "../src/finops/qualificationLimits.js";
import { GPT_VERDICT_CANDIDATE_SCHEMA } from "../src/types/gptVerdictCandidate.js";

beforeEach(() => {
  resetSessionCallCountForTests();
});

describe("Increment E — EvidenceAnalysisPack", () => {
  it("complete report → pack valid", () => {
    const pack = buildEvidenceAnalysisPack(completePackBuildInput("anl-1"));
    const v = validateEvidenceAnalysisPack(pack);
    expect(v.ok).toBe(true);
    expect(pack.sanitized).toBe(true);
    expect(pack.closureAuthorized).toBe(false);
  });

  it("identical inputs → deterministic packHash", () => {
    const input = completePackBuildInput("anl-det", {});
    const a = buildEvidenceAnalysisPack({ ...input, generatedAt: "fixed" });
    const b = buildEvidenceAnalysisPack({ ...input, generatedAt: "fixed" });
    expect(a.packHash).toBe(b.packHash);
  });

  it("report missing remoteGitWrites → incomplete", () => {
    const report = sampleIncrementDReport();
    delete (report as { remoteGitWrites?: number }).remoteGitWrites;
    const pack = buildEvidenceAnalysisPack({
      ...completePackBuildInput("anl-2"),
      report,
    });
    expect(pack.reportCompleteness).toBe("incomplete");
    expect(validateEvidenceAnalysisPack(pack).ok).toBe(false);
  });

  it("review pack incomplete → blocked", () => {
    const pack = buildEvidenceAnalysisPack({
      ...completePackBuildInput("anl-3"),
      reviewPackCompleteness: "incomplete",
    });
    expect(validateEvidenceAnalysisPack(pack).ok).toBe(false);
  });

  it("secret in reservation → blocked", () => {
    const pack = buildEvidenceAnalysisPack({
      ...completePackBuildInput("anl-4"),
      report: sampleIncrementDReport({
        reservations: ["leak OPENAI_API_KEY=sk-abcdefghijklmnopqrstuvwxyz"],
      }),
    });
    // sanitization should redact before validate; if still present, fail
    const blob = JSON.stringify(pack);
    expect(blob).not.toMatch(/sk-abcdefghijklmnopqrstuvwxyz/);
  });

  it("analysisAuthorized false → blocked", () => {
    const pack = buildEvidenceAnalysisPack({
      ...completePackBuildInput("anl-5"),
      analysisAuthorized: false,
    });
    expect(validateEvidenceAnalysisPack(pack).ok).toBe(false);
  });
});

describe("Increment E — GPT analysis fixture", () => {
  it("manual confirmation required", () => {
    const r = runAnalysisFixture({
      requestId: "req-e",
      correlationId: "corr-e",
      confirmedByUser: false,
      packBuild: completePackBuildInput("anl-6"),
      proofDir: mkdtempSync(path.join(os.tmpdir(), "inc-e-")),
    });
    expect(r.ok).toBe(false);
    expect(r.status).toBe("CONFIRMATION_REQUIRED");
    expect(r.retriesAttempted).toBe(0);
  });

  it("incomplete pack blocks GPT", () => {
    const r = runAnalysisFixture({
      requestId: "req-e",
      correlationId: "corr-e",
      confirmedByUser: true,
      packBuild: {
        ...completePackBuildInput("anl-7"),
        reviewPackCompleteness: "incomplete",
      },
      proofDir: mkdtempSync(path.join(os.tmpdir(), "inc-e-")),
    });
    expect(r.ok).toBe(false);
    expect(r.status).toBe("PACK_INCOMPLETE");
    expect(r.liveInvoked).toBe(false);
    expect(r.eventsLogged).toContain("gpt.analysis.pack_incomplete_blocked");
  });

  it("fixture produces candidate awaiting Morris", () => {
    const beforeQ = getSessionCallCount("studio-session");
    const r = runAnalysisFixture({
      requestId: "req-inc-d-live-1784528437254",
      correlationId: "corr-inc-d-live-1784528437254",
      confirmedByUser: true,
      packBuild: completePackBuildInput("anl-8"),
      proofDir: mkdtempSync(path.join(os.tmpdir(), "inc-e-")),
    });
    expect(r.ok).toBe(true);
    expect(r.candidate?.candidateOnly).toBe(true);
    expect(r.candidate?.closureAuthorized).toBe(false);
    expect(r.candidate?.morrisDecisionRequired).toBe(true);
    expect(r.analysisUiState).toBe("AWAITING_MORRIS_FINAL_DECISION");
    expect(r.retriesAttempted).toBe(0);
    expect(getSessionCallCount("studio-session")).toBe(beforeQ);
  });
});

describe("Increment E — verdict validation", () => {
  const base = {
    schemaVersion: GPT_VERDICT_CANDIDATE_SCHEMA,
    analysisRequestId: "a",
    requestId: "r",
    correlationId: "c",
    status: "PROVED_WITH_RESERVATIONS" as const,
    proven: ["remoteGitWrites=0"],
    notProven: [] as string[],
    gaps: [] as string[],
    risks: [] as string[],
    reservations: ["Candidate only"],
    requiredMorrisDecisions: ["CLOSE_SLICE or CORRECT"],
    recommendedNextAction: "AWAIT_MORRIS" as const,
    evidenceReferences: ["cursor-execution-report"],
    confidenceNote: "bounded to pack",
    limitations: ["No OS network proof"],
  };
  const expected = {
    analysisRequestId: "a",
    requestId: "r",
    correlationId: "c",
    allowedEvidenceRefs: ["cursor-execution-report"],
  };

  it("1. affirmative MVP claim → reject", () => {
    const v = validateVerdictModelPayload(
      { ...base, proven: ["This slice is MVP-ready for production"] },
      expected,
    );
    expect(v.ok).toBe(false);
    expect(v.code).toBe("AUTHORITY_BREACH");
  });

  it("2. affirmative production claim → reject", () => {
    const v = validateVerdictModelPayload(
      { ...base, proven: ["this is production-ready", "approved for production"] },
      expected,
    );
    expect(v.ok).toBe(false);
    expect(v.code).toBe("AUTHORITY_BREACH");
  });

  it("2b. the MVP is validated → reject", () => {
    const v = validateVerdictModelPayload({ ...base, proven: ["the MVP is validated"] }, expected);
    expect(v.ok).toBe(false);
    expect(v.code).toBe("AUTHORITY_BREACH");
  });

  it("3. affirmed Morris decision → reject", () => {
    const v = validateVerdictModelPayload(
      { ...base, proven: ["Morris has approved", "I authorize CLOSE_SLICE now"] },
      expected,
    );
    expect(v.ok).toBe(false);
    expect(v.code).toBe("AUTHORITY_BREACH");
  });

  it("4. affirmed closure → reject", () => {
    const v = validateVerdictModelPayload({ ...base, proven: ["the cycle is closed"] }, expected);
    expect(v.ok).toBe(false);
    expect(v.code).toBe("AUTHORITY_BREACH");
  });

  it("5–8. prudent negations accepted", () => {
    const v = validateVerdictModelPayload(
      {
        ...base,
        notProven: [
          "not production-ready",
          "no MVP claim is made",
          "this does not prove production readiness",
          "Morris decision is still required",
          "closure is not authorized",
        ],
      },
      expected,
    );
    expect(v.ok).toBe(true);
  });

  it("9. negation + real affirmative claim → reject", () => {
    const v = validateVerdictModelPayload(
      {
        ...base,
        notProven: ["not production-ready"],
        proven: ["this is production-ready"],
      },
      expected,
    );
    expect(v.ok).toBe(false);
    expect(v.code).toBe("AUTHORITY_BREACH");
  });

  it("10. casing / punctuation variants of affirmative → reject", () => {
    const v = validateVerdictModelPayload(
      { ...base, proven: ["THIS IS Production-Ready!!!"] },
      expected,
    );
    expect(v.ok).toBe(false);
    expect(v.code).toBe("AUTHORITY_BREACH");
  });

  it("11. invalid JSON object shape → reject", () => {
    const v = validateVerdictModelPayload("not-json-object", expected);
    expect(v.ok).toBe(false);
    expect(v.code).toBe("INVALID_RESPONSE");
  });

  it("12. missing required section → reject", () => {
    const { proven: _p, ...missing } = base;
    const v = validateVerdictModelPayload(missing, expected);
    expect(v.ok).toBe(false);
    expect(v.code).toBe("INVALID_RESPONSE");
  });

  it("13. unknown evidence reference → reject", () => {
    const v = validateVerdictModelPayload(
      { ...base, evidenceReferences: ["unknown-source-xyz"] },
      expected,
    );
    expect(v.ok).toBe(false);
    expect(v.code).toBe("INVALID_RESPONSE");
  });

  it("14. candidateOnly=false → reject", () => {
    const v = assertCandidateAuthority({
      candidateOnly: false,
      closureAuthorized: false,
      morrisDecisionRequired: true,
    });
    expect(v.ok).toBe(false);
    expect(v.code).toBe("AUTHORITY_BREACH");
  });

  it("15. closureAuthorized=true → reject", () => {
    const v = assertCandidateAuthority({
      candidateOnly: true,
      closureAuthorized: true,
      morrisDecisionRequired: true,
    });
    expect(v.ok).toBe(false);
    expect(v.code).toBe("AUTHORITY_BREACH");
  });

  it("16. morrisDecisionRequired=false → reject", () => {
    const v = assertCandidateAuthority({
      candidateOnly: true,
      closureAuthorized: false,
      morrisDecisionRequired: false,
    });
    expect(v.ok).toBe(false);
    expect(v.code).toBe("AUTHORITY_BREACH");
  });
});

describe("Increment E — Morris decision / summary", () => {
  it("CLOSE_SLICE produces CycleSummary; ABANDON is not success claim", () => {
    const analysis = runAnalysisFixture({
      requestId: "req-inc-d-live-1784528437254",
      correlationId: "corr-inc-d-live-1784528437254",
      confirmedByUser: true,
      packBuild: completePackBuildInput("anl-9"),
      proofDir: mkdtempSync(path.join(os.tmpdir(), "inc-e-")),
    });
    expect(analysis.candidate).toBeTruthy();
    const pack = buildEvidenceAnalysisPack(completePackBuildInput("anl-9"));
    const close = recordMorrisFinalDecision({
      verdict: analysis.candidate!,
      pack,
      action: "CLOSE_SLICE",
    });
    expect(close.ok).toBe(true);
    expect(close.summary?.scope).toBe("current-vertical-slice-only");
    expect(close.summary?.mvpClaim).toBe(false);
    expect(close.summary?.productionReadyClaim).toBe(false);
    expect(close.summary?.finalStatus).toBe("CLOSED_WITH_RESERVATIONS");
    expect(close.decision?.closureAuthorized).toBe(true);
    expect(close.decision?.verdictId).toBe(analysis.candidate!.verdictId);
    expect(close.uiStatus).toBe("CLOSED_WITH_RESERVATIONS");
    expect(close.summary?.morrisDecisionRecorded).toBe(true);
    expect(close.summary?.closureAuthorized).toBe(true);
    expect(close.summary?.candidateSnapshot.status).toBe(analysis.candidate!.status);
    expect(close.summary?.candidateSnapshot.closureAuthorized).toBe(false);
    expect(close.summary?.notProven.join(" ")).not.toMatch(/Morris final decision/i);
    expect(close.summary?.notProven.join(" ")).not.toMatch(/Increment E completion/i);
    expect(close.summary?.gaps.join(" ")).not.toMatch(/No Morris decision recorded/i);
    expect(close.summary?.risks.join(" ")).not.toMatch(/closureAuthorized=false/i);
    expect(close.summary?.reservations.join(" ")).not.toMatch(/Morris decision required/i);
    expect(close.summary?.resolvedByMorrisDecision.length).toBeGreaterThan(0);
    expect(close.summary?.finalState.awaitingMorrisDecision).toBe(false);

    const double = recordMorrisFinalDecision({
      verdict: analysis.candidate!,
      pack,
      action: "CLOSE_SLICE",
      priorDecisionIdForVerdict: close.decision!.decisionId,
    });
    expect(double.ok).toBe(false);
    expect(double.code).toBe("DECISION_ALREADY_RECORDED");

    const abandon = recordMorrisFinalDecision({
      verdict: analysis.candidate!,
      pack,
      action: "ABANDON",
    });
    expect(abandon.ok).toBe(true);
    expect(abandon.summary).toBeUndefined();
    expect(abandon.decision?.closureAuthorized).toBe(false);
  });

  it("RELAUNCH requires new GO flag", () => {
    const analysis = runAnalysisFixture({
      requestId: "req-inc-d-live-1784528437254",
      correlationId: "corr-inc-d-live-1784528437254",
      confirmedByUser: true,
      packBuild: completePackBuildInput("anl-10"),
      proofDir: mkdtempSync(path.join(os.tmpdir(), "inc-e-")),
    });
    const pack = buildEvidenceAnalysisPack(completePackBuildInput("anl-10"));
    const r = recordMorrisFinalDecision({
      verdict: analysis.candidate!,
      pack,
      action: "RELAUNCH_WITH_NEW_GO",
    });
    expect(r.decision?.requiresNewGo).toBe(true);
    expect(r.summary).toBeUndefined();
  });

  it("CORRECT does not produce summary", () => {
    const analysis = runAnalysisFixture({
      requestId: "req-inc-d-live-1784528437254",
      correlationId: "corr-inc-d-live-1784528437254",
      confirmedByUser: true,
      packBuild: completePackBuildInput("anl-11"),
      proofDir: mkdtempSync(path.join(os.tmpdir(), "inc-e-")),
    });
    const pack = buildEvidenceAnalysisPack(completePackBuildInput("anl-11"));
    const r = recordMorrisFinalDecision({
      verdict: analysis.candidate!,
      pack,
      action: "CORRECT",
    });
    expect(r.ok).toBe(true);
    expect(r.summary).toBeUndefined();
  });

  it("regenerateCycleSummary keeps decision/candidate and clears pre-decision awaits", () => {
    const analysis = runAnalysisFixture({
      requestId: "req-inc-d-live-1784528437254",
      correlationId: "corr-inc-d-live-1784528437254",
      confirmedByUser: true,
      packBuild: completePackBuildInput("anl-12"),
      proofDir: mkdtempSync(path.join(os.tmpdir(), "inc-e-")),
    });
    const pack = buildEvidenceAnalysisPack(completePackBuildInput("anl-12"));
    const close = recordMorrisFinalDecision({
      verdict: analysis.candidate!,
      pack,
      action: "CLOSE_SLICE",
      decisionId: "dec-fixed-regen-1",
      decidedAt: "2026-07-20T08:47:24.672Z",
      unresolvedReservations: ["industrialisation", "validation MVP", "production readiness"],
    });
    expect(close.ok).toBe(true);
    const prevId = close.summary!.summaryId;
    const regen = regenerateCycleSummary({
      decision: close.decision!,
      verdict: analysis.candidate!,
      pack,
      analysisCalls: analysis.candidate!.finOps.callNumber,
      previousSummaryId: prevId,
    });
    expect(regen.ok).toBe(true);
    if (!regen.ok) return;
    expect(regen.summary.decisionId).toBe("dec-fixed-regen-1");
    expect(regen.summary.timestamps.decidedAt).toBe("2026-07-20T08:47:24.672Z");
    expect(regen.summary.previousSummaryId).toBe(prevId);
    expect(regen.summary.verdictId).toBe(analysis.candidate!.verdictId);
    expect(analysis.candidate!.status).toBe("PROVED_WITH_RESERVATIONS"); // fixture default
    expect(regen.summary.candidateSnapshot.closureAuthorized).toBe(false);
    expect(regen.summary.notProven).not.toContain("Morris final decision");
    expect(regen.summary.notProven).not.toContain("Increment E completion");
    expect(regen.summary.gaps.every((g) => !/No Morris decision recorded/i.test(g))).toBe(true);
    expect(regen.summary.risks.every((r) => !/closureAuthorized=false/i.test(r))).toBe(true);
    expect(regen.summary.reservations.every((r) => !/Morris decision required/i.test(r))).toBe(true);
    expect(regen.summary.unresolvedReservations).toEqual([
      "industrialisation",
      "validation MVP",
      "production readiness",
    ]);
    expect(regen.summary.mvpClaim).toBe(false);
    expect(regen.summary.productionReadyClaim).toBe(false);
  });
});
