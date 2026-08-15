/**
 * C1 residual — prepareF3Fixture Memory surface must return PROCESS_LOCAL notice.
 * @vitest-environment node
 */
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  prepareF3Fixture,
  F3_PROCESS_LOCAL_NOTICE,
  F3_PRODUCT_DURABLE_NOTICE,
} from "@/features/project-assistant/f3";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import { createTestProjectServices } from "@/lib/oa/project";
import { createTestCycleServices } from "@/lib/oa/cycle";
import {
  MemoryAuthorityResolver,
  createTestDecisionServices,
} from "@/lib/oa/decision";
import { createTestExecutionContractServices } from "@/lib/oa/execution-contract";

const APP_ROOT = path.resolve(__dirname, "../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const NOW = "2026-08-15T13:00:00.000Z";

describe("C1 prepareF3Fixture Memory disclosure surface", () => {
  beforeEach(() => {
    resetF2ProposalStoreForTests();
  });
  afterEach(() => {
    resetF2ProposalStoreForTests();
  });

  it("returns F3_PROCESS_LOCAL_NOTICE when productDurablePath=false", async () => {
    const { resolver } = createTestDoctrineResolver({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
    });
    const projects = createTestProjectServices({
      doctrineResolver: resolver,
      fixedNowIso: NOW,
    });
    const cycles = createTestCycleServices({
      projectServices: projects,
      fixedNowIso: NOW,
    });
    const authority = new MemoryAuthorityResolver();
    const decisions = createTestDecisionServices({
      projectServices: projects,
      cycleServices: cycles,
      authorityResolver: authority,
      fixedNowIso: NOW,
    });
    const contracts = createTestExecutionContractServices({
      projectServices: projects,
      cycleServices: cycles,
      decisionServices: decisions,
      fixedNowIso: NOW,
    });

    const created = await projects.createProject.execute({
      projectId: "prj:c1-memory-prep",
      title: "C1 Memory Prepare",
      objective: "memory-prepare-objective",
      context: "memory",
      scope: "memory-scope",
      doctrinePackagePin: VALID_PIN,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
      lpsVersionId: "lps:c1-memory-v1",
      idempotencyKey: "idem:c1-memory-prep",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    const lps = await projects.getCurrentLivingProjectState.execute({
      projectId: "prj:c1-memory-prep",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;

    const proposal = saveProposal({
      proposalId: createProposalId(),
      status: "DECISION_REQUIRED",
      rephrasedRequest: "Préparer fixture F3 memory",
      objective: "Memory disclosure proof",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      rationale: "C1 residual",
      scope: "fixture-docs",
      outOfScope: ["REAL"],
      activatedBlocks: ["prepare"],
      expectedOutcome: "PROCESS_LOCAL notice",
      sources: [],
      risks: [],
      reservations: [],
      stopConditions: ["AUCUNE EXÉCUTION RÉELLE"],
      morrisGateRequired: true,
      nextPossibleStep: "F3 PREPARE",
      contextSnapshot: {
        projectId: "prj:c1-memory-prep",
        lpsId: lps.livingProjectState.lpsVersionId,
        lpsVersion: lps.livingProjectState.version,
        doctrineDigest: VALID_DIGEST,
      },
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
    });

    const go = await recordF2Decision({
      proposalId: proposal.proposalId,
      projectId: "prj:c1-memory-prep",
      decisionKind: "GO",
      currentContext: proposal.contextSnapshot,
      decisionServices: decisions,
      authorityResolver: authority,
      nowIso: () => NOW,
      forceM3Authority: true,
    });
    expect(go.ok).toBe(true);
    if (!go.ok) return;

    const prepared = await prepareF3Fixture({
      projectId: "prj:c1-memory-prep",
      proposalId: go.proposal.proposalId,
      decisionId: go.decision.decisionId,
      currentContext: go.proposal.contextSnapshot,
      deps: {
        decisionServices: decisions,
        authorityResolver: authority,
        executionContractServices: contracts,
        nowIso: () => NOW,
        productDurablePath: false,
      },
    });

    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.processLocalNotice).toBe(F3_PROCESS_LOCAL_NOTICE);
    expect(prepared.payload.processLocalNotice).not.toBe(
      F3_PRODUCT_DURABLE_NOTICE,
    );
    expect(prepared.payload.disclosures).toContain(F3_PROCESS_LOCAL_NOTICE);
    expect(prepared.payload.disclosures).not.toContain(
      F3_PRODUCT_DURABLE_NOTICE,
    );
  });
});
