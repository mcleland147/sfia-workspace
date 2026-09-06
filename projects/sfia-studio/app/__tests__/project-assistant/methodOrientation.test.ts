/** @vitest-environment node */
/**
 * CORR-PROOF-03 E1 — pure methodOrientation unit proofs (I6 + orientation contract).
 * ZERO LIVE OpenAI.
 */
import { describe, expect, it } from "vitest";
import {
  composeAdvisoryMethodContext,
  resolveMethodOrientation,
} from "@/features/project-assistant/f2/methodOrientation";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";

function stubAnalysis(
  partial: Partial<IntentAnalysisDto> &
    Pick<IntentAnalysisDto, "intentClass" | "parseOk">,
): IntentAnalysisDto {
  return {
    candidateCycleTypeId: null,
    signals: null,
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: null,
    objective: null,
    scope: null,
    rephrasedRequest: null,
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    ...partial,
  };
}

function stubProject(
  overrides?: Partial<ProjectAssistantContextDto>,
): ProjectAssistantContextDto {
  return {
    projectId: "prj:test",
    name: "Suivi de contrat",
    shortReference: "SC",
    objective: "Suivre les contrats B2B",
    contextSummary: "MC Consulting IT",
    criticality: "STANDARD",
    constraints: [],
    lpsId: "lps:test",
    lpsVersion: 1,
    lpsCreatedAt: "2026-09-06T00:00:00.000Z",
    doctrineId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
    doctrineVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
    doctrineStatus: "product-studio-native",
    doctrineDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
    runtimeMode: "test",
    persistence: "sqlite",
    readiness: "ready",
    ...overrides,
  };
}

describe("methodOrientation — pure orientation", () => {
  it("RESOLVED_FROM_INTENT_CANDIDATE when parseOk + known candidate", () => {
    const o = resolveMethodOrientation(
      stubAnalysis({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
    );
    expect(o.state).toBe("RESOLVED_FROM_INTENT_CANDIDATE");
    expect(o.candidateCycleTypeId).toBe("cyc:framing");
  });

  it("UNRESOLVED when parseOk false", () => {
    const o = resolveMethodOrientation(
      stubAnalysis({
        intentClass: "informative",
        parseOk: false,
        candidateCycleTypeId: "cyc:framing",
      }),
    );
    expect(o.state).toBe("UNRESOLVED");
    expect(o.candidateCycleTypeId).toBeNull();
  });

  it("UNRESOLVED when candidate null", () => {
    expect(
      resolveMethodOrientation(
        stubAnalysis({ intentClass: "informative", parseOk: true }),
      ).state,
    ).toBe("UNRESOLVED");
  });

  it("UNRESOLVED when candidate unknown — does not invent", () => {
    const o = resolveMethodOrientation(
      stubAnalysis({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:not-a-real-cycle",
      }),
    );
    expect(o.state).toBe("UNRESOLVED");
    expect(o.candidateCycleTypeId).toBeNull();
  });

  it("I6 — orientation is pure / non-mutating (frozen)", () => {
    const analysis = stubAnalysis({
      intentClass: "informative",
      parseOk: true,
      candidateCycleTypeId: "cyc:delivery",
    });
    const before = JSON.stringify(analysis);
    const o = resolveMethodOrientation(analysis);
    expect(Object.isFrozen(o)).toBe(true);
    expect(JSON.stringify(analysis)).toBe(before);
  });
});

describe("composeAdvisoryMethodContext — read-only CKC", () => {
  const registryRoot = resolveProductDoctrineRegistryRoot();

  it("loads read-only CKC lens for resolved framing orientation", () => {
    const ctx = composeAdvisoryMethodContext({
      analysis: stubAnalysis({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: stubProject(),
      registryRoot,
    });
    expect(ctx.orientation.state).toBe("RESOLVED_FROM_INTENT_CANDIDATE");
    expect(ctx.ckcLoaded).toBe(true);
    expect(ctx.ckcLensSection).toBeTruthy();
    expect(ctx.sourceLimit).toBe("none");
    expect(ctx.cycleLabel).toMatch(/Cadrage/i);
  });

  it("doctrine unavailable → sourceLimit without inventing CKC", () => {
    const ctx = composeAdvisoryMethodContext({
      analysis: stubAnalysis({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: stubProject({
        doctrineId: "",
        doctrineVersion: "",
        doctrineDigest: "",
      }),
      registryRoot,
    });
    expect(ctx.ckcLoaded).toBe(false);
    expect(ctx.sourceLimit).toBe("doctrine_unavailable");
    expect(ctx.ckcLensSection).toBeNull();
  });

  it("unresolved orientation does not invent CKC lens", () => {
    const ctx = composeAdvisoryMethodContext({
      analysis: stubAnalysis({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: null,
      }),
      project: stubProject(),
      registryRoot,
    });
    expect(ctx.orientation.state).toBe("UNRESOLVED");
    expect(ctx.ckcLoaded).toBe(false);
    expect(ctx.ckcLensSection).toBeNull();
  });

  it("unknown registry / bad pin → ckc_unavailable governed degradation", () => {
    const ctx = composeAdvisoryMethodContext({
      analysis: stubAnalysis({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: stubProject({
        doctrineId: "pkg:does-not-exist",
        doctrineVersion: "9.9.9",
        doctrineDigest: "sha256:deadbeef",
      }),
      registryRoot,
    });
    expect(ctx.ckcLoaded).toBe(false);
    expect(ctx.sourceLimit).toBe("ckc_unavailable");
  });
});
