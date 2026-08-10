/** @vitest-environment node */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import {
  evaluateMorrisGateRequired,
} from "@/features/project-assistant/f2/gatePolicy";
import {
  resetF2ProposalStoreForTests,
  getProposal,
  saveProposal,
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
} from "@/features/project-assistant/f2/proposalStore";
import { validateIntentAnalysisPayload } from "@/features/project-assistant/f2/intentAnalysis";
import { qualifyWithCkc } from "@/features/project-assistant/f2/qualify";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

const { getProjectRuntimeActionMock } = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", async () => {
  const actual = await vi.importActual<
    typeof import("@/lib/vertical-slice-runtime/actions")
  >("@/lib/vertical-slice-runtime/actions");
  return {
    ...actual,
    getProjectRuntimeAction: getProjectRuntimeActionMock,
  };
});

const SUCCESS = {
  ok: true as const,
  project: {
    projectId: "prj:f2-demo",
    name: "Projet F2",
    shortReference: "F2",
    objective: "Tester qualification et gate.",
    contextSummary: "Contexte process-local F2.",
    criticality: "STANDARD" as const,
    constraints: ["Lecture seule"],
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "digest:f2",
    status: "RESOLVED",
  },
  livingState: {
    id: "lps:f2-demo",
    version: 1 as const,
    createdAt: "2026-08-10T12:00:00.000Z",
  },
  readiness: {
    status: "NOT_READY" as const,
    hard: "OPEN" as const,
    tA6: "INCOMPLETE" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "NOT_SELECTED" as const,
    realAgentExecution: "DISABLED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    runReady: false as const,
    productReady: false as const,
  },
  disclosures: {
    runtimeMode: "LOCAL_PROCESS" as const,
    persistence: "NOT_GUARANTEED" as const,
    agentExecution: "DISABLED" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "NOT_SELECTED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    localDataVolatile: true as const,
    restartMayLoseState: true as const,
    messages: [] as const,
  },
};

describe("F2 orchestration AC coverage", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    getProjectRuntimeActionMock.mockReset();
    getProjectRuntimeActionMock.mockResolvedValue(SUCCESS);
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
  });

  it("AC-F2-01 informative remains F1 without proposal", async () => {
    const result = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Résume l'objectif __F2_INFORMATIVE__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.turnKind).toBe("f1_informative");
    expect(result.f2?.proposal).toBeNull();
    expect(result.text).toMatch(/TEST\/FAKE/);
  });

  it("AC-F2-02/04/05/06/08/09/10 actionable qualifies and proposes", async () => {
    const result = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Prépare la prochaine étape __F2_ACTIONABLE__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.qualification).toBeTruthy();
    expect(result.f2?.qualification?.isMorrisDecision).toBe(false);
    expect(result.f2?.qualification?.recommendationLabel).toMatch(/RECOMMANDATION/);
    expect(result.f2?.proposal).toBeTruthy();
    expect(result.f2?.proposal?.outOfScope.length).toBeGreaterThan(0);
    expect(result.f2?.labels.noExecution).toBe("AUCUNE EXÉCUTION");
    expect(result.f2?.proposal?.agentBinding).toBe("NOT_AVAILABLE");
    expect(JSON.stringify(result.f2?.proposal)).not.toMatch(/executing|completed|failed/);
  });

  it("AC-F2-03 ambiguous asks clarification without proposal", async () => {
    const result = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Fais le nécessaire __F2_AMBIGUOUS__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.turnKind).toBe("f2_clarification");
    expect(result.f2?.proposal).toBeNull();
    expect(result.text).toMatch(/Clarification/i);
  });

  it("AC-F2-11 critical without justification blocks", async () => {
    const result = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Change sécurité __F2_CRITICAL_NO_JUSTIFICATION__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.proposal).toBeNull();
    expect(result.text).toMatch(/Critical/i);
    expect(result.f2?.qualification?.requiresJustificationForCritical).toBe(true);
  });

  it("AC-F2-12/25 execution request may propose but blocks execution + gate", async () => {
    const result = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Lance Cursor et crée une PR __F2_EXECUTION__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.executionBlocked).toBe(true);
    expect(result.f2?.proposal?.morrisGateRequired).toBe(true);
    expect(result.f2?.proposal?.status).toBe("DECISION_REQUIRED");
    expect(result.text).toMatch(/AUCUNE EXÉCUTION/);
  });

  it("fail-closed on invalid JSON / unknown cycle / incomplete signals", () => {
    expect(validateIntentAnalysisPayload(null).intentClass).toBe("ambiguous");
    expect(validateIntentAnalysisPayload(null).parseOk).toBe(false);
    expect(validateIntentAnalysisPayload("not-json").parseOk).toBe(false);
    expect(
      validateIntentAnalysisPayload({
        intentClass: "actionable",
        candidateCycleTypeId: "cyc:unknown",
        signals: {
          structuralChange: true,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: true,
        },
      }).parseOk,
    ).toBe(false);
    expect(
      validateIntentAnalysisPayload({
        intentClass: "actionable",
        candidateCycleTypeId: "cyc:delivery",
        signals: { structuralChange: true },
      }).parseOk,
    ).toBe(false);
    expect(
      validateIntentAnalysisPayload({
        intentClass: "actionable",
        candidateCycleTypeId: "cyc:delivery",
        signals: null,
      }).parseOk,
    ).toBe(false);
  });

  it("structured actionable / structuring payloads parse successfully", () => {
    const actionable = validateIntentAnalysisPayload({
      intentClass: "actionable",
      candidateCycleTypeId: "cyc:delivery",
      signals: {
        structuralChange: false,
        securityImpact: false,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: true,
      },
      objective: "Préparer livraison",
      scope: "borné",
      rephrasedRequest: "Proposition delivery",
      outOfScope: ["exécution"],
      risks: [],
      reservations: [],
      stopConditions: ["AUCUNE EXÉCUTION"],
      activatedBlocks: ["qualification"],
      expectedOutcome: "proposition",
      criticalJustification: null,
      requestedOperation: null,
    });
    expect(actionable.parseOk).toBe(true);
    expect(actionable.intentClass).toBe("actionable");
    expect(actionable.candidateCycleTypeId).toBe("cyc:delivery");
    expect(actionable.signals?.lowRiskBounded).toBe(true);

    const structuring = validateIntentAnalysisPayload({
      intentClass: "actionable",
      candidateCycleTypeId: "cyc:functional-architecture",
      signals: {
        structuralChange: true,
        securityImpact: false,
        architectureImpact: true,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: false,
      },
      objective: "Architecture",
      scope: "structurant",
      rephrasedRequest: "Changement architecture",
      outOfScope: ["PR"],
      risks: ["impact"],
      reservations: [],
      stopConditions: [],
      activatedBlocks: ["gate"],
      expectedOutcome: "gate",
      criticalJustification: "justifié",
      requestedOperation: "architecture change",
    });
    expect(structuring.parseOk).toBe(true);
    expect(structuring.candidateCycleTypeId).toBe("cyc:functional-architecture");
  });

  it("AC-F2 structured path: markers + no openai import + no profile/decision/execution leakage", async () => {
    const fs = await import("node:fs");
    const path = await import("node:path");
    const f2Dir = path.join(process.cwd(), "features/project-assistant/f2");
    for (const file of fs.readdirSync(f2Dir)) {
      if (!file.endsWith(".ts")) continue;
      const src = fs.readFileSync(path.join(f2Dir, file), "utf8");
      expect(src).not.toMatch(/from\s+["']openai["']/);
      expect(src).not.toMatch(/require\(["']openai["']\)/);
    }

    const actionable = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Prépare la prochaine étape __F2_ACTIONABLE__",
    });
    expect(actionable.ok).toBe(true);
    if (!actionable.ok) return;
    expect(actionable.presentation).toBe("test_provider");
    expect(actionable.model).toBe("fake-test-model");
    expect(actionable.f2?.qualification?.isMorrisDecision).toBe(false);
    expect(actionable.f2?.qualification?.recommendedProfile).toBeTruthy();
    // Profile comes from CKC qualify — never from raw model intent JSON fields.
    expect(actionable.f2?.qualification).not.toHaveProperty("profile");
    expect(actionable.f2?.labels.noExecution).toBe("AUCUNE EXÉCUTION");
    expect(actionable.f2?.proposal?.agentBinding).toBe("NOT_AVAILABLE");
    expect(actionable.f2?.proposal?.executionForbidden).toBe(true);

    const structuring = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Fais évoluer l'architecture __F2_STRUCTURING__",
    });
    expect(structuring.ok).toBe(true);
    if (!structuring.ok) return;
    expect(structuring.f2?.proposal).toBeTruthy();
    expect(structuring.f2?.qualification?.isMorrisDecision).toBe(false);
  });

  it("completeStructured is used for F2 analysis and preserves complete() F1 compatibility", async () => {
    const { FakeConversationProvider } = await import(
      "@/lib/platform/ai/fakeProvider"
    );
    const provider = new FakeConversationProvider();
    const structuredSpy = vi.spyOn(provider, "completeStructured");
    const completeSpy = vi.spyOn(provider, "complete");
    setConversationProviderForTests(provider);

    const f2 = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Résume __F2_INFORMATIVE__",
    });
    expect(f2.ok).toBe(true);
    expect(structuredSpy).toHaveBeenCalled();
    const structuredArg = structuredSpy.mock.calls[0]?.[0];
    expect(structuredArg?.schemaName).toBe("f2_intent_analysis");
    expect(structuredArg?.jsonSchema).toMatchObject({
      type: "object",
      additionalProperties: false,
    });
    expect(f2.ok && f2.model).toBe("fake-test-model");

    // Legacy complete() path remains available for non-F2 / F1-style text.
    const plain = await provider.complete([{ role: "user", content: "ping" }]);
    expect(plain.text).toContain("TEST/FAKE");
    expect(completeSpy).toHaveBeenCalled();
  });

  it("AC-F2-22/23 qualify uses catalog + isMorrisDecision false", async () => {
    const q = await qualifyWithCkc({
      cycleTypeId: "cyc:capitalization",
      signals: {
        structuralChange: false,
        securityImpact: false,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: true,
      },
      correlationId: "cor:test-cap",
    });
    expect(q.ok).toBe(true);
    if (!q.ok) return;
    expect(q.qualification.isMorrisDecision).toBe(false);
    expect(q.qualification.capitalizationViaCycleTypeId).toBe(true);
    expect(q.qualification.recommendedProfile).not.toMatch(/capitalization/i);
  });

  it("gate policy is deterministic server-side", () => {
    const baseIntent = {
      intentClass: "actionable" as const,
      candidateCycleTypeId: "cyc:delivery",
      signals: {
        structuralChange: false,
        securityImpact: false,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: true,
      },
      objective: "x",
      scope: "y",
      rephrasedRequest: "z",
      outOfScope: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      activatedBlocks: [],
      expectedOutcome: null,
      criticalJustification: null,
      requestedOperation: null,
      parseOk: true,
    };
    expect(
      evaluateMorrisGateRequired({
        recommendedProfile: "Standard",
        signals: baseIntent.signals!,
        intent: baseIntent,
      }),
    ).toBe(false);
    expect(
      evaluateMorrisGateRequired({
        recommendedProfile: "Critical",
        signals: baseIntent.signals!,
        intent: baseIntent,
      }),
    ).toBe(true);
    expect(
      evaluateMorrisGateRequired({
        recommendedProfile: "Standard",
        signals: { ...baseIntent.signals!, architectureImpact: true },
        intent: { ...baseIntent, requestedOperation: "create pr" },
      }),
    ).toBe(true);
  });
});

describe("F2 decisions with shared OA stack", () => {
  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({ auditMode: "noop" });
    const created = await runtime.createProject({
      name: "Projet F2 Decision",
      objective: "Décisions Morris process-local",
      context: "Contexte F2 gate",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "F2D",
      idempotencyKey: `f2-dec-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("create failed");
    (globalThis as { __f2ProjectId?: string }).__f2ProjectId =
      created.project.projectId;
    getProjectRuntimeActionMock.mockImplementation(async (projectId: string) => {
      return runtime.getProject(projectId);
    });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  async function seedProposal(projectId: string) {
    const runtime = getRuntimeApplicationService();
    const overview = await runtime.getProject(projectId);
    if (!overview.ok) throw new Error("missing project");
    const proposal = saveProposal({
      proposalId: createProposalId(),
      status: "DECISION_REQUIRED",
      rephrasedRequest: "Proposition structurant",
      objective: "Arch change",
      cycleTypeId: "cyc:functional-architecture",
      recommendedProfile: "Standard",
      rationale: "test",
      scope: "architecture",
      outOfScope: ["execution"],
      activatedBlocks: ["gate"],
      expectedOutcome: "decision",
      sources: [],
      risks: [],
      reservations: [],
      stopConditions: ["AUCUNE EXÉCUTION"],
      morrisGateRequired: true,
      nextPossibleStep: "Décision Morris",
      contextSnapshot: {
        projectId,
        lpsId: overview.livingState.id,
        lpsVersion: overview.livingState.version,
        doctrineDigest: overview.doctrine.digest,
      },
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
    });
    return { proposal, runtime, overview };
  }

  it("AC-F2-13/14/15/16 GO / NO-GO / AMEND / no execution", async () => {
    const projectId = (globalThis as { __f2ProjectId?: string }).__f2ProjectId!;
    const { proposal, runtime } = await seedProposal(projectId);
    expect(runtime.oa).toBeTruthy();

    const go = await recordF2Decision({
      proposalId: proposal.proposalId,
      projectId,
      decisionKind: "GO",
      canActAsMorris: true, // hostile client claim ignored; server registers evidence
      claimedAuthorityLevel: "N3",
      currentContext: proposal.contextSnapshot,
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      nowIso: () => runtime.oa!.clock.nowIso(),
    });
    expect(go.ok).toBe(true);
    if (!go.ok) return;
    expect(go.decision.executionPerformed).toBe(false);
    expect(go.decision.readyForNextGatedStep).toBe(true);
    expect(go.proposal.status).toBe("APPROVED");

    const { proposal: p2 } = await seedProposal(projectId);
    const noGo = await recordF2Decision({
      proposalId: p2.proposalId,
      projectId,
      decisionKind: "NO_GO",
      currentContext: p2.contextSnapshot,
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      nowIso: () => runtime.oa!.clock.nowIso(),
    });
    expect(noGo.ok).toBe(true);
    if (!noGo.ok) return;
    expect(noGo.proposal.status).toBe("REFUSED");
    expect(noGo.decision.executionPerformed).toBe(false);

    const { proposal: p3 } = await seedProposal(projectId);
    const amend = await recordF2Decision({
      proposalId: p3.proposalId,
      projectId,
      decisionKind: "AMEND",
      currentContext: p3.contextSnapshot,
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      nowIso: () => runtime.oa!.clock.nowIso(),
    });
    expect(amend.ok).toBe(true);
    if (!amend.ok) return;
    expect(amend.proposal.status).toBe("AMENDMENT_REQUIRED");
  });

  it("AC-F2-19 stale mismatch refuses GO", async () => {
    const projectId = (globalThis as { __f2ProjectId?: string }).__f2ProjectId!;
    const { proposal, runtime } = await seedProposal(projectId);
    const stale = await recordF2Decision({
      proposalId: proposal.proposalId,
      projectId,
      decisionKind: "GO",
      currentContext: {
        ...proposal.contextSnapshot,
        doctrineDigest: "digest:changed",
      },
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      nowIso: () => runtime.oa!.clock.nowIso(),
    });
    expect(stale.ok).toBe(false);
    if (stale.ok) return;
    expect(stale.code).toBe("STALE");
    expect(getProposal(proposal.proposalId)?.status).toBe("STALE");
  });

  it("AC-F2-26 missing proposal after reset has no durable authority claim", () => {
    resetF2ProposalStoreForTests();
    expect(getProposal("prop:missing")).toBeNull();
  });
});
