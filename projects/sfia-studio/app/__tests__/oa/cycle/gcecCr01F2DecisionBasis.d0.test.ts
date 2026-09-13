/**
 * CR-GCEC-01 — actual F2 structured intent → DecisionBasis → PREPARE.
 * Fake provider only; ZERO OpenAI REAL.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  createRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { FakeConversationProvider } from "@/lib/platform/ai";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import { prepareM3FromDecision } from "@/features/project-assistant/f3/prepareM3FromDecision";
import { M4_BOUNDED_DOCS_WRITE_ACTION } from "@/lib/oa/execution-attempt";

describe("CR-GCEC-01 — F2 executionIntent → DecisionBasis → PREPARE", () => {
  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  it("fake structured provider → analyzeIntent → HD DecisionBasis → prepareM3 docs_write", async () => {
    const runtime = await createRuntimeApplicationService();
    const created = await runtime.createProject({
      name: "GCEC CR01",
      objective: "Functional design via structured intent",
      context: "deterministic",
      criticality: "STANDARD",
      constraints: ["FIXTURE ONLY"],
      shortReference: "GCECCR01",
      idempotencyKey: `idem:gcec-cr01-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;

    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;

    const provider = new FakeConversationProvider();
    const analyzed = await analyzeIntent({
      userContent: "__F2_DOCS_WRITE_GCEC__ produce functional design",
      projectSummary: overview.project.name ?? "GCEC CR01",
      provider,
    });
    expect(analyzed.analysis.parseOk).toBe(true);
    expect(analyzed.analysis.executionIntent?.intentKind).toBe("docs_write");
    expect(analyzed.analysis.executionIntent?.targetPath).toBe(
      "docs/functional-design.md",
    );
    expect(analyzed.analysis.executionIntent?.targetRepositoryRef).toBe(
      "acme/widget",
    );

    const snapshot = {
      projectId,
      lpsId: overview.livingState.id,
      lpsVersion: overview.livingState.version,
      doctrineDigest: overview.doctrine.digest,
      activeCycleInstanceId: overview.livingState.activeCycleInstanceId ?? null,
      ckcResolutionRef: null as string | null,
    };

    const proposal = saveProposal({
      proposalId: createProposalId(),
      status: "DECISION_REQUIRED",
      rephrasedRequest:
        analyzed.analysis.rephrasedRequest ??
        "Produire docs/functional-design.md",
      objective: analyzed.analysis.objective ?? "Functional design",
      cycleTypeId: analyzed.analysis.candidateCycleTypeId ?? "cyc:functional-design",
      recommendedProfile: "Standard",
      rationale: "CR-GCEC-01 wiring",
      scope: analyzed.analysis.scope ?? "docs/",
      outOfScope: analyzed.analysis.outOfScope,
      activatedBlocks: analyzed.analysis.activatedBlocks,
      expectedOutcome:
        analyzed.analysis.expectedOutcome ?? "artifact functional-design",
      sources: [],
      risks: analyzed.analysis.risks,
      reservations: analyzed.analysis.reservations,
      stopConditions: analyzed.analysis.stopConditions,
      morrisGateRequired: true,
      nextPossibleStep: "F3 PREPARE",
      contextSnapshot: snapshot,
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
      requestedOperation: analyzed.analysis.requestedOperation,
      executionIntent: analyzed.analysis.executionIntent,
    });

    const go = await recordF2Decision({
      proposalId: proposal.proposalId,
      projectId,
      decisionKind: "GO",
      currentContext: snapshot,
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      nowIso: () => runtime.oa!.clock.nowIso(),
      forceM3Authority: true,
    });
    expect(go.ok).toBe(true);
    if (!go.ok) return;

    const durable = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: go.decision.decisionId,
    });
    expect(durable.ok).toBe(true);
    if (!durable.ok) return;
    const eb = durable.decision.decisionBasis?.executionBasis;
    expect(eb?.intentKind).toBe("docs_write");
    expect(eb?.targetPath).toBe("docs/functional-design.md");
    expect(eb?.targetRepositoryRef).toBe("acme/widget");
    expect(eb?.requestedOperation).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
    expect(eb?.artifactBrief).toBeTruthy();
    expect(eb?.contentRequirements?.length).toBeGreaterThan(0);

    const overviewAfter = await runtime.getProject(projectId);
    expect(overviewAfter.ok).toBe(true);
    if (!overviewAfter.ok) return;
    const currentContext = {
      projectId,
      lpsId: overviewAfter.livingState.id,
      lpsVersion: overviewAfter.livingState.version,
      doctrineDigest: overviewAfter.doctrine.digest,
    };

    const prepared = await prepareM3FromDecision({
      projectId,
      decisionId: go.decision.decisionId,
      currentContext,
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
        forceM3Authority: true,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.contract.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
    expect(prepared.payload.contract.target).toBe(
      "workspace.isolated.docs_write",
    );
    expect(prepared.payload.contract.requiredCapabilities).toContain(
      "cap:cursor.docs_write",
    );
    expect(prepared.payload.contract.stopConditions).not.toContain(
      "TARGET_UNRESOLVED",
    );
    // Durable EC may omit opaque inputs on prepare DTO — assert via DecisionBasis + action/target/caps.
    expect(prepared.payload.contract.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
    const durableEc =
      await runtime.oa!.executionContractServices.getExecutionContract.execute({
        executionContractId: prepared.payload.contract.executionContractId,
      });
    expect(durableEc.ok).toBe(true);
    if (!durableEc.ok) return;
    expect(durableEc.contract.inputs?.targetPath).toBe(
      "docs/functional-design.md",
    );
    expect(
      durableEc.contract.inputs?.targetRepositoryRef ??
        durableEc.contract.inputs?.repositoryRef,
    ).toBe("acme/widget");
  });

  it("missing target in executionIntent → PREPARE stays fail-closed TARGET_UNRESOLVED", async () => {
    const runtime = await createRuntimeApplicationService();
    const created = await runtime.createProject({
      name: "GCEC CR01 missing target",
      objective: "Incomplete intent",
      context: "deterministic",
      criticality: "STANDARD",
      constraints: ["FIXTURE ONLY"],
      shortReference: "GCECCR01M",
      idempotencyKey: `idem:gcec-cr01-miss-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;

    const snapshot = {
      projectId,
      lpsId: overview.livingState.id,
      lpsVersion: overview.livingState.version,
      doctrineDigest: overview.doctrine.digest,
    };

    const proposal = saveProposal({
      proposalId: createProposalId(),
      status: "DECISION_REQUIRED",
      rephrasedRequest: "Incomplete docs write",
      objective: "Incomplete",
      cycleTypeId: "cyc:functional-design",
      recommendedProfile: "Standard",
      rationale: "CR-GCEC-01 N1",
      scope: "docs/",
      outOfScope: [],
      activatedBlocks: [],
      expectedOutcome: "none",
      sources: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      morrisGateRequired: true,
      nextPossibleStep: "F3 PREPARE",
      contextSnapshot: snapshot,
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
      requestedOperation: M4_BOUNDED_DOCS_WRITE_ACTION,
      executionIntent: {
        intentKind: "docs_write",
        artifactType: "functional_design",
        targetRepositoryRef: null,
        targetPath: null,
        scopeIn: ["docs/"],
        scopeOut: [],
        expectedOutputs: [],
        requiredCapabilities: ["cap:cursor.docs_write"],
        validationExpectations: [],
        evidenceRequirements: [],
        requestedOperation: M4_BOUNDED_DOCS_WRITE_ACTION,
        reversibilityExpectation: "reversible",
        artifactBrief: "incomplete",
        contentRequirements: [],
      },
    });

    const go = await recordF2Decision({
      proposalId: proposal.proposalId,
      projectId,
      decisionKind: "GO",
      currentContext: snapshot,
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      nowIso: () => runtime.oa!.clock.nowIso(),
      forceM3Authority: true,
    });
    expect(go.ok).toBe(true);
    if (!go.ok) return;

    const overviewAfter = await runtime.getProject(projectId);
    expect(overviewAfter.ok).toBe(true);
    if (!overviewAfter.ok) return;

    const prepared = await prepareM3FromDecision({
      projectId,
      decisionId: go.decision.decisionId,
      currentContext: {
        projectId,
        lpsId: overviewAfter.livingState.id,
        lpsVersion: overviewAfter.livingState.version,
        doctrineDigest: overviewAfter.doctrine.digest,
      },
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => runtime.oa!.clock.nowIso(),
        forceM3Authority: true,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.contract.target).toBe("UNRESOLVED_TARGET");
    expect(prepared.payload.contract.stopConditions).toContain(
      "TARGET_UNRESOLVED",
    );
  });
});
