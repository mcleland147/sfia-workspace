/**
 * C1 residual — prepareF3Fixture process-local disclosure surface must return
 * PROCESS_LOCAL notice when productDurablePath=false.
 *
 * CR-CI506-06 — after CR-PCONT-03, recordF2Decision wraps HD+DecisionRef in
 * projectServices.store.runInTransaction. MemoryProjectStore serializes via a
 * non-reentrant queue and deadlocks when nested (HD → Append LPS). Product
 * SQLite store supports nested ALS reentrance. This fixture therefore uses the
 * Product SQLite runtime for DecisionRef durability while still asserting the
 * process-local F3 disclosure (productDurablePath=false).
 *
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
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
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  createRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

const APP_ROOT = path.resolve(__dirname, "../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const NOW = "2026-08-15T13:00:00.000Z";

class FixedIdSource implements LocalProjectIdSource {
  private project = 0;
  private lps = 0;
  private correlation = 0;
  nextProjectId(): string {
    this.project += 1;
    return `prj:c1-mem-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:c1-mem-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:c1-mem-${this.correlation}`;
  }
}

function tempDb(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-c1-mem-"));
  return path.join(dir, "oa-product.sqlite");
}

describe("C1 prepareF3Fixture Memory disclosure surface", () => {
  beforeEach(() => {
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });
  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  it("returns F3_PROCESS_LOCAL_NOTICE when productDurablePath=false", async () => {
    const runtime = createRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: NOW,
      idSource: new FixedIdSource(),
      auditMode: "noop",
      productDbPath: tempDb(),
    });
    const oa = runtime.oa!;

    const created = await runtime.createProject({
      name: "C1 Memory Prepare",
      objective: "memory-prepare-objective",
      context: "memory",
      criticality: "STANDARD",
      constraints: ["No REAL"],
      shortReference: "C1MEM",
      idempotencyKey: "idem:c1-memory-prep",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;

    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;

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

    const go = await recordF2Decision({
      proposalId: proposal.proposalId,
      projectId,
      decisionKind: "GO",
      currentContext: proposal.contextSnapshot,
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      nowIso: () => oa.clock.nowIso(),
      forceM3Authority: true,
      oa,
    });
    expect(go.ok).toBe(true);
    if (!go.ok) return;

    const prepared = await prepareF3Fixture({
      projectId,
      proposalId: go.proposal.proposalId,
      decisionId: go.decision.decisionId,
      currentContext: go.proposal.contextSnapshot,
      deps: {
        decisionServices: oa.decisionServices,
        authorityResolver: oa.authorityResolver,
        executionContractServices: oa.executionContractServices,
        nowIso: () => oa.clock.nowIso(),
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
  }, 30_000);
});
