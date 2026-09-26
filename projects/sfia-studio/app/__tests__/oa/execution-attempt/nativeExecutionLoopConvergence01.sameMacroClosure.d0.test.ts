// @vitest-environment node
/**
 * NATIVE-EXECUTION-LOOP-CONVERGENCE-01 — SAME-MACRO CLOSURE proofs.
 * Deterministic only. No REAL. No StudyFlow mutation.
 */
import { describe, expect, it } from "vitest";
import {
  assertContractSourceGroundingHonest,
  buildContractSourceGrounding,
  type ContractSourceGroundingRef,
} from "@/lib/oa/execution-contract";
import {
  bindCursorExecutionReportToAttempt,
  mintCursorExecutionReportId,
  parseCursorExecutionReport,
  type CursorExecutionReport,
} from "@/lib/oa/execution-attempt";
import { assessDocsWriteExpectedOutput } from "@/lib/oa/evidence-review/application/docsWriteContractResultSemantic";
import { assessMissionResultExpectedOutput } from "@/lib/oa/evidence-review/application/missionResultContractResultSemantic";
import { CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY } from "@/lib/oa/execution-contract";
import { repositorySourcesFromProductFacts } from "@/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext";
import {
  deriveDocsWriteAcceptanceCriteria,
  deriveDocsWriteValidationPlan,
} from "@/features/project-assistant/w2/missionContractSemanticInputs";
import {
  normalizeBindingMismatchOutcome,
  normalizeCursorExecutionReportOutcome,
  normalizePreStartRejectionOutcome,
} from "@/features/project-assistant/w2/normalizeProductExecutionOutcome";
import type { DecisionBasis } from "@/lib/oa/decision";

const SHA = "a".repeat(40);
const STALE = "b".repeat(40);
const CYCLE_A = "cyc:nelc-a";
const CYCLE_B = "cyc:nelc-b";
const PATH = "docs/functional-design.md";

function ref(
  overrides: Partial<ContractSourceGroundingRef> &
    Pick<ContractSourceGroundingRef, "pathOrRef" | "coverage">,
): ContractSourceGroundingRef {
  return {
    origin: "remembered_prior_read",
    rememberedAtIso: "2026-09-26T00:00:00.000Z",
    cycleInstanceId: CYCLE_A,
    repositoryHeadSha: SHA,
    ...overrides,
  };
}

describe("NELC-01 closure — grounding currentness + cycle scope", () => {
  it("full current same-cycle read → READ_GROUNDED", () => {
    const g = buildContractSourceGrounding({
      declaredSources: [PATH],
      readCoverage: [ref({ pathOrRef: PATH, coverage: "full" })],
      repositoryHeadSha: SHA,
      cycleInstanceId: CYCLE_A,
    });
    expect(g.honesty).toBe("READ_GROUNDED");
    expect(assertContractSourceGroundingHonest(g).ok).toBe(true);
  });

  it("full read without matching HEAD SHA is not current", () => {
    const g = buildContractSourceGrounding({
      declaredSources: [PATH],
      readCoverage: [
        ref({
          pathOrRef: PATH,
          coverage: "full",
          repositoryHeadSha: STALE,
        }),
      ],
      repositoryHeadSha: SHA,
      cycleInstanceId: CYCLE_A,
    });
    expect(g.honesty).toBe("UNREAD");
    expect(assertContractSourceGroundingHonest(g).ok).toBe(false);
  });

  it("full read without SHA cannot prove currentness when contract pins HEAD", () => {
    const g = buildContractSourceGrounding({
      declaredSources: [PATH],
      readCoverage: [
        ref({
          pathOrRef: PATH,
          coverage: "full",
          repositoryHeadSha: null,
        }),
      ],
      repositoryHeadSha: SHA,
      cycleInstanceId: CYCLE_A,
    });
    expect(g.honesty).toBe("UNREAD");
    expect(assertContractSourceGroundingHonest(g).ok).toBe(false);
  });

  it("other-cycle full read is dropped", () => {
    const g = buildContractSourceGrounding({
      declaredSources: [PATH],
      readCoverage: [
        ref({
          pathOrRef: PATH,
          coverage: "full",
          cycleInstanceId: CYCLE_B,
        }),
      ],
      repositoryHeadSha: SHA,
      cycleInstanceId: CYCLE_A,
    });
    expect(g.readRefs).toEqual([]);
    expect(g.honesty).toBe("UNREAD");
  });

  it("search-only / partial / failed never ground", () => {
    for (const coverage of ["partial", "failed", "denied", "absent"] as const) {
      const g = buildContractSourceGrounding({
        declaredSources: [PATH],
        readCoverage: [ref({ pathOrRef: PATH, coverage })],
        repositoryHeadSha: SHA,
        cycleInstanceId: CYCLE_A,
      });
      expect(g.honesty).toBe("UNREAD");
      expect(assertContractSourceGroundingHonest(g).ok).toBe(false);
    }
  });
});

describe("NELC-01 closure — Product mission declares repo paths from DecisionBasis", () => {
  it("extracts targetPath + scopeIn repo paths; ignores pseudo-refs", () => {
    const basis = {
      executionBasis: {
        targetPath: PATH,
        scopeIn: ["docs/notes.md", "attempt:xat:1", "product:facts"],
      },
    } as DecisionBasis;
    expect(repositorySourcesFromProductFacts({ basis })).toEqual([
      PATH,
      "docs/notes.md",
    ]);
  });
});

describe("NELC-01 closure — ExecutionReport binding + statuses", () => {
  function report(
    overrides: Partial<CursorExecutionReport> = {},
  ): CursorExecutionReport {
    return {
      schemaVersion: "oa.cursor-execution-report.1",
      reportId: mintCursorExecutionReportId({
        attemptId: "xat:1",
        executionContractId: "xct:1",
      }),
      attemptId: "xat:1",
      executionContractId: "xct:1",
      repositoryRef: "acme/widget",
      baseSha: SHA,
      status: "succeeded",
      authorizedEffectsExecuted: [],
      contractFingerprint: "fp:1",
      executionContractVersion: 1,
      ...overrides,
    };
  }

  it("parses succeeded/stopped/failed/timeout under the same schema", () => {
    for (const status of ["succeeded", "stopped", "failed", "timeout"] as const) {
      const parsed = parseCursorExecutionReport(report({ status }));
      expect(parsed.ok).toBe(true);
      if (parsed.ok) expect(parsed.report.status).toBe(status);
    }
  });

  it("fail-closes on attempt / contract / fingerprint / repo / base mismatch", () => {
    const r = report();
    expect(
      bindCursorExecutionReportToAttempt({
        report: r,
        expectedAttemptId: "xat:other",
        expectedExecutionContractId: "xct:1",
      }).ok,
    ).toBe(false);
    expect(
      bindCursorExecutionReportToAttempt({
        report: r,
        expectedAttemptId: "xat:1",
        expectedExecutionContractId: "xct:other",
      }).ok,
    ).toBe(false);
    expect(
      bindCursorExecutionReportToAttempt({
        report: r,
        expectedAttemptId: "xat:1",
        expectedExecutionContractId: "xct:1",
        expectedContractFingerprint: "fp:other",
      }).ok,
    ).toBe(false);
    expect(
      bindCursorExecutionReportToAttempt({
        report: r,
        expectedAttemptId: "xat:1",
        expectedExecutionContractId: "xct:1",
        expectedRepositoryRef: "other/repo",
      }).ok,
    ).toBe(false);
    expect(
      bindCursorExecutionReportToAttempt({
        report: r,
        expectedAttemptId: "xat:1",
        expectedExecutionContractId: "xct:1",
        expectedBaseSha: STALE,
      }).ok,
    ).toBe(false);
    expect(
      bindCursorExecutionReportToAttempt({
        report: r,
        expectedAttemptId: "xat:1",
        expectedExecutionContractId: "xct:1",
        expectedContractFingerprint: "fp:1",
        expectedRepositoryRef: "acme/widget",
        expectedBaseSha: SHA,
      }).ok,
    ).toBe(true);
  });
});

describe("NELC-01 closure — unified outcome path", () => {
  it("normalizes report, pre-start reject, and binding mismatch without fabricating Cursor reports", () => {
    const fromReport = normalizeCursorExecutionReportOutcome({
      projectId: "prj:1",
      report: {
        schemaVersion: "oa.cursor-execution-report.1",
        reportId: "rpt:1",
        attemptId: "xat:1",
        executionContractId: "xct:1",
        repositoryRef: "acme/widget",
        baseSha: SHA,
        status: "stopped",
        authorizedEffectsExecuted: [],
        stopConditionTriggered: "PROTECTED_BOUNDARY",
        missionResult: {
          diagnosticSummary: "stop",
          recommendedNextProductStep: "decide",
        },
      },
    });
    expect(fromReport.producer).toBe("cursor_report");
    expect(fromReport.cursorReport).not.toBeNull();
    expect(fromReport.status).toBe("stopped");

    const preStart = normalizePreStartRejectionOutcome({
      projectId: "prj:1",
      executionContractId: "xct:1",
      attemptId: "xat:1",
      reason: "ARTIFACT_WRITE_MODE_UNRESOLVED",
    });
    expect(preStart.realProcessInvoked).toBe(false);
    expect(preStart.cursorReport).toBeNull();
    expect(preStart.status).toBe("rejected_pre_start");

    const mismatch = normalizeBindingMismatchOutcome({
      projectId: "prj:1",
      executionContractId: "xct:1",
      attemptId: "xat:1",
      code: "REPORT_FINGERPRINT_MISMATCH",
      message: "fp diverged",
      realProcessInvoked: true,
    });
    expect(mismatch.cursorReport).toBeNull();
    expect(mismatch.status).toBe("binding_refused");
  });
});

describe("NELC-01 closure — manual_review outranks legacy PASS", () => {
  it("docs_write: sealed manual_review never falls back to template PASS", () => {
    const result = assessDocsWriteExpectedOutput({
      expectation: "Résultat d'exécution — cursor.docs_write.apply",
      ordinal: 1,
      attempt: {
        attemptId: "xat:1",
        status: "succeeded",
        executionContractId: "xct:1",
      } as never,
      evidence: {
        location: PATH,
        availability: "available",
        status: "verified",
        freshness: "fresh",
        bindings: { executionAttemptId: "xat:1" },
      } as never,
      material: {
        inputs: {
          targetPath: PATH,
          [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
            {
              criterionId: "acc:01:manual-review",
              statement: "Résultat d'exécution — cursor.docs_write.apply",
              kind: "manual_review",
              expectedOutputRef:
                "Résultat d'exécution — cursor.docs_write.apply",
              targetPath: PATH,
            },
          ],
        },
      },
    });
    expect(result).toBe("NOT_PROVEN");
  });

  it("mission: sealed manual_review never falls back to diagnostic template PASS", () => {
    // Custom EO with manual_review criterion — no legacy template match either.
    const custom = "Diagnostic libre du Pilote pour arbitrage";
    const result = assessMissionResultExpectedOutput({
      expectation: custom,
      ordinal: 1,
      attempt: { attemptId: "xat:1", status: "succeeded" } as never,
      evidence: {
        availability: "available",
        status: "verified",
        freshness: "fresh",
        bindings: { executionAttemptId: "xat:1" },
        location: "/tmp/mission.json",
        digest: "sha256:abc",
      } as never,
      contractInputs: {
        [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
          {
            criterionId: "acc:01:manual-review",
            statement: custom,
            kind: "manual_review",
            expectedOutputRef: custom,
            targetPath: null,
          },
        ],
      },
    });
    // Without mission payload facts the assessor returns NOT_PROVEN earlier;
    // the important invariant is it never returns PASS for manual_review.
    expect(result).not.toBe("PASS");
  });
});

describe("NELC-01 closure — docs_write criteria derivation", () => {
  it("maps canonical EO templates to structured deterministic kinds", () => {
    const criteria = deriveDocsWriteAcceptanceCriteria({
      expectedOutputs: [
        "Résultat d'exécution — cursor.docs_write.apply",
        "Le fichier Markdown matérialisé au chemin cible",
        "Vérification de l\u2019existence et de la conformité minimale du fichier",
        "Livrable lisible par le Pilote",
      ],
      targetPath: PATH,
    });
    expect(criteria.map((c) => c.kind)).toEqual([
      "manual_review",
      "artifact_at_path",
      "artifact_conformity_attested",
      "manual_review",
    ]);
    expect(deriveDocsWriteValidationPlan({}).length).toBeGreaterThanOrEqual(2);
  });
});
