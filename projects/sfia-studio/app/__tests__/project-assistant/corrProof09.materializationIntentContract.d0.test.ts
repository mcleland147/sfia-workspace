/**
 * CORR-PROOF-09 — Critical Review remediation (CR-09-01 / CR-09-02).
 * Option B: dedicated artifactMaterializationOperation; generic surfaces restored.
 * Deterministic — ZERO REAL / ZERO LIVE / ZERO dogfood mutation.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import Ajv from "ajv";
import {
  enrichExecutionIntentFromBinding,
  F2_ARTIFACT_MATERIALIZATION_CAPABILITIES,
  F2_ARTIFACT_MATERIALIZATION_OPERATION,
  hasCompatibleDocsWriteMaterializationEffect,
  isQualifiedArtifactMaterializationContinuation,
} from "@/features/project-assistant/f2/activeCycleGovernedContinuation";
import {
  F2_EXECUTION_INTENT_JSON_SCHEMA,
  validateExecutionIntentPayload,
} from "@/features/project-assistant/f2/executionIntentSchema";
import {
  F2_ARTIFACT_MATERIALIZATION_OPERATION_SCHEMA_ENUM,
} from "@/features/project-assistant/f2/f2CanonicalOperations";
import {
  F2_INTENT_JSON_SCHEMA,
  validateIntentAnalysisPayload,
} from "@/features/project-assistant/f2/intentAnalysis";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";

function baseSignals() {
  return {
    structuralChange: false,
    securityImpact: false,
    architectureImpact: false,
    dataImpact: false,
    irreversible: false,
    lowRiskBounded: true,
  };
}

function ei(overrides?: Record<string, unknown>) {
  return {
    intentKind: "docs_write",
    artifactType: null,
    targetRepositoryRef: null,
    targetPath: null,
    artifactFileName: null,
    scopeIn: [],
    scopeOut: [],
    expectedOutputs: [],
    requiredCapabilities: ["cap:cursor.docs_write"],
    validationExpectations: [],
    evidenceRequirements: [],
    requestedOperation: null,
    reversibilityExpectation: null,
    artifactBrief: "Livrable requis",
    contentRequirements: [],
    exitRequirementKinds: [],
    ...overrides,
  };
}

function analysis(overrides?: Record<string, unknown>): IntentAnalysisDto {
  return validateIntentAnalysisPayload({
    intentClass: "execution_request",
    candidateCycleTypeId: "cyc:framing",
    signals: baseSignals(),
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: null,
    continuationKind: "active_cycle_artifact_materialization",
    artifactMaterializationOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
    objective: "matérialiser",
    scope: "docs",
    rephrasedRequest: "Matérialise ce livrable.",
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: ei(),
    ...overrides,
  });
}

describe("CORR-PROOF-09 remediation — CR-09-01 / CR-09-02", () => {
  it("T01 — generic top-level requestedOperation remains free-form outside Artifact", () => {
    for (const op of ["architecture change", "create pr", "cursor create pr"]) {
      const dto = validateIntentAnalysisPayload({
        intentClass: "actionable",
        candidateCycleTypeId: "cyc:delivery",
        signals: baseSignals(),
        cognitiveWorkload: null,
        contradictionCandidate: null,
        challengeResponseAssessment: null,
        continuationKind: null,
        artifactMaterializationOperation: null,
        objective: "x",
        scope: "x",
        rephrasedRequest: "x",
        outOfScope: [],
        risks: [],
        reservations: [],
        stopConditions: [],
        activatedBlocks: [],
        expectedOutcome: null,
        criticalJustification: null,
        requestedOperation: op,
        executionIntent: null,
      });
      expect(dto.parseOk).toBe(true);
      expect(dto.requestedOperation).toBe(op);
      expect(isQualifiedArtifactMaterializationContinuation(dto)).toBe(false);
    }
  });

  it("T02 — informative non-execution remains unchanged", () => {
    const dto = validateIntentAnalysisPayload({
      intentClass: "informative",
      candidateCycleTypeId: "cyc:framing",
      signals: null,
      cognitiveWorkload: null,
      contradictionCandidate: null,
      challengeResponseAssessment: null,
      continuationKind: null,
      artifactMaterializationOperation: null,
      objective: "expliquer",
      scope: null,
      rephrasedRequest: "Qu'est-ce que le livrable ?",
      outOfScope: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      activatedBlocks: [],
      expectedOutcome: null,
      criticalJustification: null,
      requestedOperation: null,
      executionIntent: null,
    });
    expect(dto.parseOk).toBe(true);
    expect(isQualifiedArtifactMaterializationContinuation(dto)).toBe(false);
  });

  it("T03 — generic docs_write without continuationKind is not Artifact continuation", () => {
    const dto = analysis({
      continuationKind: null,
      artifactMaterializationOperation: null,
      requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
      executionIntent: ei({
        requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
      }),
    });
    expect(dto.parseOk).toBe(true);
    expect(isQualifiedArtifactMaterializationContinuation(dto)).toBe(false);
  });

  it("T04/T05 — dedicated producer schema enum is only cursor.docs_write.apply | null", () => {
    expect(F2_ARTIFACT_MATERIALIZATION_OPERATION_SCHEMA_ENUM).toEqual([
      "cursor.docs_write.apply",
    ]);
    expect(F2_ARTIFACT_MATERIALIZATION_OPERATION_SCHEMA_ENUM).not.toContain(
      "github.pr.merge",
    );

    const ajv = new Ajv({ allErrors: true });
    const validateIntent = ajv.compile(F2_INTENT_JSON_SCHEMA);
    const base = {
      intentClass: "execution_request",
      candidateCycleTypeId: "cyc:framing",
      signals: baseSignals(),
      cognitiveWorkload: null,
      contradictionCandidate: null,
      challengeResponseAssessment: null,
      objective: "x",
      scope: "x",
      rephrasedRequest: "x",
      outOfScope: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      activatedBlocks: [],
      expectedOutcome: null,
      criticalJustification: null,
      requestedOperation: null,
      executionIntent: ei(),
      continuationKind: "active_cycle_artifact_materialization",
    };
    expect(
      validateIntent({
        ...base,
        artifactMaterializationOperation: "cursor.docs_write.apply",
      }),
    ).toBe(true);
    expect(
      validateIntent({ ...base, artifactMaterializationOperation: null }),
    ).toBe(true);
    expect(
      validateIntent({
        ...base,
        artifactMaterializationOperation: "github.pr.merge",
      }),
    ).toBe(false);
  });

  it("T06 — hostile github.pr.merge via direct DTO still fails closed", () => {
    const dto = analysis({
      artifactMaterializationOperation: null,
      requestedOperation: "github.pr.merge",
      executionIntent: ei({
        requestedOperation: "github.pr.merge",
        requiredCapabilities: ["cap:github.pr.merge"],
      }),
    });
    expect(dto.parseOk).toBe(true);
    expect(hasCompatibleDocsWriteMaterializationEffect(dto)).toBe(false);
    expect(isQualifiedArtifactMaterializationContinuation(dto)).toBe(false);
  });

  it("T06b — dedicated field set but contradictory generic merge still blocked", () => {
    const dto = analysis({
      artifactMaterializationOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
      requestedOperation: "github.pr.merge",
      executionIntent: ei({ requestedOperation: "github.pr.merge" }),
    });
    expect(hasCompatibleDocsWriteMaterializationEffect(dto)).toBe(false);
  });

  it("T07 — NL cannot satisfy dedicated canonical field", () => {
    const dto = analysis({
      artifactMaterializationOperation:
        "Matérialiser le livrable documentaire requis du cycle actif",
    });
    expect(dto.parseOk).toBe(false);
    expect(hasCompatibleDocsWriteMaterializationEffect(dto)).toBe(false);
  });

  it("T08 — canonical continuation passes compatibility", () => {
    const dto = analysis();
    expect(dto.parseOk).toBe(true);
    expect(dto.artifactMaterializationOperation).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );
    expect(hasCompatibleDocsWriteMaterializationEffect(dto)).toBe(true);
    expect(isQualifiedArtifactMaterializationContinuation(dto)).toBe(true);
  });

  it("T09 — docs_write alone without dedicated field does not unlock", () => {
    const dto = analysis({
      artifactMaterializationOperation: null,
      executionIntent: ei({
        requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
      }),
      requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
    });
    expect(hasCompatibleDocsWriteMaterializationEffect(dto)).toBe(false);
  });

  it("T10 — targetPath null → clarification, no invented path", () => {
    const enriched = enrichExecutionIntentFromBinding({
      analysisIntent: {
        intentKind: "docs_write",
        requestedOperation: null,
        requiredCapabilities: [],
        targetPath: null,
        reversibilityExpectation: null,
      },
      binding: {
        provider: "github",
        identity: "acme/gestion-taches",
        remoteUrl: "https://github.com/acme/gestion-taches.git",
        defaultBranch: "main",
        pathRoot: "docs/",
      },
    });
    expect(enriched.needsTargetClarification).toBe(true);
    expect(enriched.executionIntent?.targetPath).toBeNull();
    expect(enriched.executionIntent?.requestedOperation).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );
  });

  it("T11 — traversal rejected", () => {
    const enriched = enrichExecutionIntentFromBinding({
      analysisIntent: {
        intentKind: "docs_write",
        requestedOperation: null,
        requiredCapabilities: [],
        targetPath: "../secrets/x.md",
        reversibilityExpectation: null,
      },
      binding: {
        provider: "github",
        identity: "acme/gestion-taches",
        remoteUrl: "https://github.com/acme/gestion-taches.git",
        defaultBranch: "main",
        pathRoot: "docs/",
      },
    });
    expect(enriched.needsTargetClarification).toBe(true);
    expect(enriched.executionIntent?.targetPath).toBeNull();
  });

  it("T17/T18 — unsourced affirmative reversibility stripped; unknown safe", () => {
    const binding = {
      provider: "github" as const,
      identity: "acme/gestion-taches",
      remoteUrl: "https://github.com/acme/gestion-taches.git",
      defaultBranch: "main",
      pathRoot: "docs/",
    };
    const stripped = enrichExecutionIntentFromBinding({
      analysisIntent: {
        intentKind: "docs_write",
        requestedOperation: null,
        requiredCapabilities: [],
        targetPath: "docs/x.md",
        reversibilityExpectation: "reversible",
      },
      binding,
    });
    expect(stripped.executionIntent?.reversibilityExpectation).toBeNull();

    const unknown = enrichExecutionIntentFromBinding({
      analysisIntent: {
        intentKind: "docs_write",
        requestedOperation: null,
        requiredCapabilities: [],
        targetPath: "docs/x.md",
        reversibilityExpectation: "unknown",
      },
      binding,
    });
    expect(unknown.executionIntent?.reversibilityExpectation).toBe("unknown");
  });

  it("T19/T20 — enrich canonicalizes action + capability", () => {
    const enriched = enrichExecutionIntentFromBinding({
      analysisIntent: {
        intentKind: "docs_write",
        requestedOperation: null,
        requiredCapabilities: ["docs_write", "cap:github.pr.merge"],
        targetPath: "docs/x.md",
        reversibilityExpectation: null,
      },
      binding: {
        provider: "github",
        identity: "acme/gestion-taches",
        remoteUrl: "https://github.com/acme/gestion-taches.git",
        defaultBranch: "main",
        pathRoot: "docs/",
      },
    });
    expect(enriched.executionIntent?.requestedOperation).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );
    expect(enriched.executionIntent?.requiredCapabilities).toEqual([
      ...F2_ARTIFACT_MATERIALIZATION_CAPABILITIES,
    ]);
  });

  it("T22 — executionIntent.requestedOperation remains free-form in schema", () => {
    const ajv = new Ajv({ allErrors: true });
    const validateEi = ajv.compile(F2_EXECUTION_INTENT_JSON_SCHEMA);
    expect(validateEi(ei({ requestedOperation: "architecture change" }))).toBe(
      true,
    );
    expect(validateEi(ei({ requestedOperation: "github.pr.merge" }))).toBe(
      true,
    );
    expect(
      validateEi(ei({ requestedOperation: "cursor.docs_write.apply" })),
    ).toBe(true);
    expect(validateExecutionIntentPayload(ei({ requestedOperation: "create pr" })).ok).toBe(
      true,
    );
  });

  it("T22b — OpenAI intent schema remains Ajv-valid", () => {
    const ajv = new Ajv({ allErrors: true });
    const validateIntent = ajv.compile(F2_INTENT_JSON_SCHEMA);
    expect(
      validateIntent({
        intentClass: "execution_request",
        candidateCycleTypeId: "cyc:framing",
        signals: baseSignals(),
        cognitiveWorkload: null,
        contradictionCandidate: null,
        challengeResponseAssessment: null,
        objective: "x",
        scope: "x",
        rephrasedRequest: "x",
        outOfScope: [],
        risks: [],
        reservations: [],
        stopConditions: [],
        activatedBlocks: [],
        expectedOutcome: null,
        criticalJustification: null,
        requestedOperation: "architecture change",
        executionIntent: ei({ requestedOperation: "create pr" }),
        continuationKind: null,
        artifactMaterializationOperation: null,
      }),
    ).toBe(true);
  });
});
