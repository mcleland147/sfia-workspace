// @vitest-environment node
/**
 * NATIVE-EXECUTION-LOOP-CONVERGENCE-01 — contract source grounding +
 * structured mission semantics (acceptance criteria / validation plan /
 * report requirements).
 *
 * Deterministic, no REAL, no StudyFlow, no model call.
 */
import { describe, expect, it } from "vitest";
import {
  assertContractSourceGroundingHonest,
  assertCursorPromptParityWithInspection,
  buildContractSourceGrounding,
  computeExecutionContractSemanticFingerprint,
  CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY,
  CONTRACT_REPORT_REQUIREMENTS_INPUT_KEY,
  CONTRACT_SOURCE_GROUNDING_INPUT_KEY,
  CONTRACT_VALIDATION_PLAN_INPUT_KEY,
  findAcceptanceCriterionForExpectedOutput,
  isRepositorySourceRef,
  parseContractAcceptanceCriteria,
  parseContractSourceGrounding,
  projectExecutionContractInspectionDisclosure,
  projectExecutionContractToCursorPrompt,
  resolveAcceptanceCriterionForExpectedOutput,
  type ContractSourceGroundingRef,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";

const READ_PATH = "docs/functional-design.md";
const UNREAD_PATH = "docs/never-opened.md";
const REPO = "acme/widget";
const SHA = "1".repeat(40);

function fullRead(
  pathOrRef: string,
  overrides: Partial<ContractSourceGroundingRef> = {},
): ContractSourceGroundingRef {
  return {
    pathOrRef,
    coverage: "full",
    origin: "remembered_prior_read",
    rememberedAtIso: "2026-09-01T00:00:00.000Z",
    cycleInstanceId: "cyc:nelc01",
    repositoryHeadSha: SHA,
    ...overrides,
  };
}

function contract(inputs: Record<string, unknown>): ExecutionContract {
  return {
    executionContractId: "xct:nelc01",
    projectId: "prj:nelc01",
    cycleInstanceId: "cyc:nelc01",
    decisionRefs: ["dec:nelc01"],
    version: 1,
    status: "validated",
    action: "cursor.mission.execute",
    target: "workspace.isolated.cursor",
    scope: "studio.product.cursor_mission",
    inputs,
    expectedOutputs: ["Diagnostic produit"],
    requiredCapabilities: ["cap:cursor.mission"],
    requiredAuthority: "N2",
    constraints: ["PRODUCT_GOVERNED"],
    stopConditions: ["AUTHORITY_DENIED"],
    evidenceRequirements: ["evreq:mission-result-for-nora-reevaluation"],
    reversibility: "reversible",
    idempotencyKey: "idem:nelc01",
    createdAt: "2026-09-01T00:00:00.000Z",
    updatedAt: "2026-09-01T00:00:00.000Z",
  } as unknown as ExecutionContract;
}

describe("contract source grounding — search is not read", () => {
  it("declared source with no durable read is UNREAD and blocks readiness", () => {
    const grounding = buildContractSourceGrounding({
      declaredSources: [UNREAD_PATH],
      readCoverage: [],
      repositoryIdentity: REPO,
      repositoryHeadSha: SHA,
    });
    expect(grounding.honesty).toBe("UNREAD");
    expect(grounding.unreadRequiredSources).toEqual([UNREAD_PATH]);
    const honest = assertContractSourceGroundingHonest(grounding);
    expect(honest.ok).toBe(false);
    if (honest.ok) throw new Error("expected fail-closed");
    expect(honest.code).toBe("SOURCE_GROUNDING_UNREAD");
    expect(honest.unreadSources).toEqual([UNREAD_PATH]);
  });

  it("partial read never counts as grounded", () => {
    const grounding = buildContractSourceGrounding({
      declaredSources: [READ_PATH],
      readCoverage: [
        {
          pathOrRef: READ_PATH,
          coverage: "partial",
          origin: "current_cycle_read",
          rememberedAtIso: null,
          cycleInstanceId: null,
          repositoryHeadSha: null,
        },
      ],
    });
    expect(grounding.honesty).toBe("UNREAD");
    expect(assertContractSourceGroundingHonest(grounding).ok).toBe(false);
  });

  it("full durable read grounds the declared source", () => {
    const grounding = buildContractSourceGrounding({
      declaredSources: [`${READ_PATH}#L1-120`],
      readCoverage: [fullRead(READ_PATH)],
      repositoryIdentity: REPO,
      repositoryHeadSha: SHA,
    });
    expect(grounding.honesty).toBe("READ_GROUNDED");
    expect(grounding.unreadRequiredSources).toEqual([]);
    expect(grounding.readRefs.map((r) => r.pathOrRef)).toEqual([READ_PATH]);
    expect(assertContractSourceGroundingHonest(grounding).ok).toBe(true);
  });

  it("mixed declared sources report only the unread ones", () => {
    const grounding = buildContractSourceGrounding({
      declaredSources: [READ_PATH, UNREAD_PATH],
      readCoverage: [fullRead(READ_PATH)],
    });
    expect(grounding.honesty).toBe("PARTIALLY_READ");
    expect(grounding.unreadRequiredSources).toEqual([UNREAD_PATH]);
    expect(assertContractSourceGroundingHonest(grounding).ok).toBe(false);
  });

  it("unreadable durable coverage is UNAVAILABLE, never grounded", () => {
    const grounding = buildContractSourceGrounding({
      declaredSources: [READ_PATH],
      readCoverage: null,
    });
    expect(grounding.honesty).toBe("UNAVAILABLE");
    expect(grounding.readRefs).toEqual([]);
    expect(assertContractSourceGroundingHonest(grounding).ok).toBe(false);
  });

  it("mission pseudo-refs are not repository sources", () => {
    expect(isRepositorySourceRef("attempt:xat:1")).toBe(false);
    expect(isRepositorySourceRef("product:current-project-facts")).toBe(false);
    expect(isRepositorySourceRef("docs/a.md")).toBe(true);
    const grounding = buildContractSourceGrounding({
      declaredSources: ["attempt:xat:1", "product:durable-facts"],
      readCoverage: [],
    });
    expect(grounding.honesty).toBe("NOT_APPLICABLE");
    expect(assertContractSourceGroundingHonest(grounding).ok).toBe(true);
  });

  it("round-trips through the durable inputs bag", () => {
    const grounding = buildContractSourceGrounding({
      declaredSources: [READ_PATH],
      readCoverage: [fullRead(READ_PATH)],
      repositoryIdentity: REPO,
      repositoryHeadSha: SHA,
    });
    const parsed = parseContractSourceGrounding(
      JSON.parse(JSON.stringify(grounding)),
    );
    expect(parsed).not.toBeNull();
    expect(parsed!.honesty).toBe("READ_GROUNDED");
    expect(parsed!.repositoryIdentity).toBe(REPO);
    expect(parsed!.repositoryHeadSha).toBe(SHA);
    expect(parseContractSourceGrounding({ version: 99 })).toBeNull();
  });

  it("never carries file contents — refs only", () => {
    const grounding = buildContractSourceGrounding({
      declaredSources: [READ_PATH],
      readCoverage: [fullRead(READ_PATH)],
    });
    const serialized = JSON.stringify(grounding);
    expect(serialized).not.toMatch(/content/i);
    for (const ref of grounding.readRefs) {
      expect(Object.keys(ref).sort()).toEqual([
        "coverage",
        "cycleInstanceId",
        "origin",
        "pathOrRef",
        "rememberedAtIso",
        "repositoryHeadSha",
      ]);
    }
  });
});

describe("acceptance criteria parsing", () => {
  it("drops malformed entries and distinguishes NONE from AMBIGUOUS", () => {
    const criteria = parseContractAcceptanceCriteria([
      { criterionId: "acc:01", statement: "S1", kind: "mission_diagnostic" },
      { criterionId: "acc:02", statement: "", kind: "mission_diagnostic" },
      { criterionId: "acc:03", statement: "S3", kind: "not_a_kind" },
      "nope",
    ]);
    expect(criteria.map((c) => c.criterionId)).toEqual(["acc:01"]);

    const ambiguous = parseContractAcceptanceCriteria([
      {
        criterionId: "acc:a",
        statement: "S",
        kind: "mission_diagnostic",
        expectedOutputRef: "EO",
      },
      {
        criterionId: "acc:b",
        statement: "S",
        kind: "mission_next_step",
        expectedOutputRef: "EO",
      },
    ]);
    // find* returns null for BOTH none and ambiguous — prefer resolve*.
    expect(findAcceptanceCriterionForExpectedOutput(ambiguous, "EO")).toBeNull();
    expect(findAcceptanceCriterionForExpectedOutput(ambiguous, "NONE")).toBeNull();
    expect(resolveAcceptanceCriterionForExpectedOutput(ambiguous, "NONE")).toEqual({
      kind: "none",
    });
    const amb = resolveAcceptanceCriterionForExpectedOutput(ambiguous, "EO");
    expect(amb.kind).toBe("ambiguous");
    if (amb.kind === "ambiguous") {
      expect(amb.matches).toHaveLength(2);
    }
    const unique = resolveAcceptanceCriterionForExpectedOutput(
      [
        {
          criterionId: "acc:1",
          statement: "S",
          kind: "mission_diagnostic",
          expectedOutputRef: "EO",
          targetPath: null,
        },
      ],
      "EO",
    );
    expect(unique.kind).toBe("unique");
  });
});

describe("inspection / prompt parity for new mission fields", () => {
  const grounding = buildContractSourceGrounding({
    declaredSources: [READ_PATH],
    readCoverage: [fullRead(READ_PATH)],
    repositoryIdentity: REPO,
    repositoryHeadSha: SHA,
  });
  const inputs = {
    objective: "Diagnostiquer le produit",
    [CONTRACT_SOURCE_GROUNDING_INPUT_KEY]: grounding,
    [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
      {
        criterionId: "acc:01:mission-diagnostic",
        statement: "Diagnostic produit",
        kind: "mission_diagnostic",
        expectedOutputRef: "Diagnostic produit",
        targetPath: null,
      },
    ],
    [CONTRACT_VALIDATION_PLAN_INPUT_KEY]: ["Aucun effet mutant exécuté"],
    [CONTRACT_REPORT_REQUIREMENTS_INPUT_KEY]: ["reportId propre au rapport"],
  };

  it("inspection disclosure exposes the structured fields", () => {
    const projected = projectExecutionContractInspectionDisclosure(
      contract(inputs),
    );
    expect(projected.ok).toBe(true);
    const d = projected.disclosure;
    expect(d.sourceGrounding?.honesty).toBe("READ_GROUNDED");
    expect(d.acceptanceCriteria?.[0]?.criterionId).toBe(
      "acc:01:mission-diagnostic",
    );
    expect(d.validationPlan).toEqual(["Aucun effet mutant exécuté"]);
    expect(d.reportRequirements).toEqual(["reportId propre au rapport"]);
  });

  it("absent fields stay null (never invented)", () => {
    const d = projectExecutionContractInspectionDisclosure(contract({}))
      .disclosure;
    expect(d.sourceGrounding).toBeNull();
    expect(d.acceptanceCriteria).toBeNull();
    expect(d.validationPlan).toBeNull();
    expect(d.reportRequirements).toBeNull();
  });

  it("Cursor prompt surfaces the same fields and passes parity", () => {
    const projection = projectExecutionContractToCursorPrompt({
      contract: contract(inputs),
      attemptId: "xat:nelc01",
    });
    expect(projection.promptText).toContain("honnêteté du grounding: READ_GROUNDED");
    expect(projection.promptText).toContain(`lu: ${READ_PATH} [full/`);
    expect(projection.promptText).toContain("acc:01:mission-diagnostic");
    expect(projection.promptText).toContain("Aucun effet mutant exécuté");
    expect(projection.promptText).toContain("reportId propre au rapport");
    expect(
      assertCursorPromptParityWithInspection({ projection }).ok,
    ).toBe(true);
  });

  it("unread declared sources are disclosed to Cursor, not hidden", () => {
    const ungrounded = buildContractSourceGrounding({
      declaredSources: [UNREAD_PATH],
      readCoverage: [],
    });
    const projection = projectExecutionContractToCursorPrompt({
      contract: contract({
        [CONTRACT_SOURCE_GROUNDING_INPUT_KEY]: ungrounded,
      }),
    });
    expect(projection.promptText).toContain(
      `non lu (ne pas revendiquer): ${UNREAD_PATH}`,
    );
    expect(
      assertCursorPromptParityWithInspection({ projection }).ok,
    ).toBe(true);
  });
});

describe("semanticFingerprint is material to the new mission fields", () => {
  const base = contract({ objective: "O" });

  function fingerprintWith(extra: Record<string, unknown>): string {
    return computeExecutionContractSemanticFingerprint(
      contract({ objective: "O", ...extra }),
    );
  }

  it("changes when source grounding changes", () => {
    const baseline = computeExecutionContractSemanticFingerprint(base);
    const grounded = fingerprintWith({
      [CONTRACT_SOURCE_GROUNDING_INPUT_KEY]: buildContractSourceGrounding({
        declaredSources: [READ_PATH],
        readCoverage: [fullRead(READ_PATH)],
      }),
    });
    const ungrounded = fingerprintWith({
      [CONTRACT_SOURCE_GROUNDING_INPUT_KEY]: buildContractSourceGrounding({
        declaredSources: [READ_PATH],
        readCoverage: [],
      }),
    });
    expect(grounded).not.toBe(baseline);
    expect(grounded).not.toBe(ungrounded);
  });

  it("changes when acceptance criteria change", () => {
    const one = fingerprintWith({
      [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
        {
          criterionId: "acc:01",
          statement: "S",
          kind: "mission_diagnostic",
          expectedOutputRef: "EO",
          targetPath: null,
        },
      ],
    });
    const two = fingerprintWith({
      [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
        {
          criterionId: "acc:01",
          statement: "S",
          kind: "manual_review",
          expectedOutputRef: "EO",
          targetPath: null,
        },
      ],
    });
    expect(one).not.toBe(two);
  });

  it("is stable for identical material", () => {
    expect(fingerprintWith({})).toBe(fingerprintWith({}));
  });
});
