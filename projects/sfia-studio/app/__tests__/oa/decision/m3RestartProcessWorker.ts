/**
 * Child-process worker for M3 restart proof A→B→C (R2).
 * Modes:
 *   create  — Product Project + Cycle
 *   go      — real saveProposal + recordF2Decision (NOT direct recordHumanDecision)
 *   prepare — prepareM3FromDecision with empty ProposalStore
 *   read    — reload decision/contract + fingerprint
 *
 * Usage: tsx m3RestartProcessWorker.ts <create|go|prepare|read> <dbPath> <projectId> [decisionId] [proposalId]
 */
import path from "node:path";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
} from "@/lib/oa/project";
import { createSqliteCycleServices } from "@/lib/oa/cycle";
import {
  MemoryAuthorityResolver,
  createSqliteDecisionServices,
} from "@/lib/oa/decision";
import { createSqliteExecutionContractServices } from "@/lib/oa/execution-contract";
import {
  getProposal,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import type { ProposalDto } from "@/features/project-assistant/f2/types";
import { prepareM3FromDecision } from "@/features/project-assistant/f3/prepareM3FromDecision";

const APP_ROOT = process.cwd();
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

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

function boot(dbPath: string) {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const projects = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-13T16:00:00.000Z",
    dbPath,
  });
  const cycles = createSqliteCycleServices({
    projectServices: projects,
    productStore: projects.store,
  });
  const authority = new MemoryAuthorityResolver();
  const decisions = createSqliteDecisionServices({
    projectServices: projects,
    cycleServices: cycles,
    productStore: projects.store,
    authorityResolver: authority,
  });
  const contracts = createSqliteExecutionContractServices({
    projectServices: projects,
    decisionServices: decisions,
    cycleServices: cycles,
    productStore: projects.store,
    authorityResolver: authority,
  });
  return { projects, cycles, decisions, contracts, authority };
}

function buildProposal(input: {
  proposalId: string;
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  cycleInstanceId: string;
}): ProposalDto {
  return {
    proposalId: input.proposalId,
    status: "PROPOSED",
    rephrasedRequest: "m3-e2e-requested-operation",
    objective: "m3-e2e-objective",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Standard",
    rationale: "m3-e2e-rationale",
    scope: "m3-e2e-scope",
    outOfScope: ["out-a"],
    activatedBlocks: ["block-a"],
    expectedOutcome: "m3-e2e-outcome",
    sources: ["source:test"],
    risks: ["risk-a"],
    reservations: [],
    stopConditions: ["STOP_E2E"],
    morrisGateRequired: true,
    nextPossibleStep: "morris-gate",
    contextSnapshot: {
      projectId: input.projectId,
      lpsId: input.lpsId,
      lpsVersion: input.lpsVersion,
      doctrineDigest: VALID_DIGEST,
      activeCycleInstanceId: input.cycleInstanceId,
      ckcResolutionRef: "ckc:m3-e2e",
    },
    processLocalNotice: "process-local",
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
  };
}

async function main(): Promise<void> {
  const [, , mode, dbPath, projectId, idArg, proposalIdArg] = process.argv;
  if (!mode || !dbPath || !projectId) {
    throw new Error(
      "usage: <create|go|prepare|read> <dbPath> <projectId> [decisionId|proposalId] [proposalId]",
    );
  }

  const stack = boot(dbPath);
  try {
    if (mode === "create") {
      const created = await stack.projects.createProject.execute({
        projectId,
        title: "M3 Process Restart",
        objective: "m3-process-restart-objective",
        context: "m3-process-restart-context",
        scope: "m3-process-restart-scope",
        doctrinePackagePin: VALID_PIN,
        createdBy: ACTOR,
        lpsVersionId: "lps:m3-proc-v1",
        idempotencyKey: `idem:${projectId}`,
      });
      if (!created.ok) {
        console.error(JSON.stringify(created.error));
        process.exit(2);
      }
      const cycle = await stack.cycles.createCycle.execute({
        cycleInstanceId: "cyc:m3-proc-1",
        cycleTypeId: "cyc:delivery",
        projectId,
        signals: {},
        createdBy: ACTOR,
        linkAsActiveCycle: true,
        expectedLpsVersion: 1,
        ckcResolutionRef: "ckc:m3-proc-bind",
      });
      if (!cycle.ok) {
        console.error(JSON.stringify(cycle.error));
        process.exit(3);
      }
      const lps = await stack.projects.getCurrentLivingProjectState.execute({
        projectId,
      });
      if (!lps.ok) process.exit(4);
      process.stdout.write(
        `${JSON.stringify({
          ok: true,
          projectId,
          lpsVersion: lps.livingProjectState.version,
          lpsId: lps.livingProjectState.lpsVersionId,
          cycleInstanceId: cycle.cycle.cycleInstanceId,
        })}\n`,
      );
      return;
    }

    if (mode === "go") {
      // Process A — real ProposalStore + recordF2Decision (anti-bypass).
      const proposalId = idArg ?? "prop:m3-e2e";
      const lps = await stack.projects.getCurrentLivingProjectState.execute({
        projectId,
      });
      if (!lps.ok) process.exit(5);

      const proposal = buildProposal({
        proposalId,
        projectId,
        lpsId: lps.livingProjectState.lpsVersionId,
        lpsVersion: lps.livingProjectState.version,
        cycleInstanceId: "cyc:m3-proc-1",
      });

      // MUST call saveProposal — not invent DecisionBasis.
      const saved = saveProposal(proposal);
      if (getProposal(proposalId) === null) {
        process.stdout.write(
          `${JSON.stringify({ ok: false, code: "PROPOSAL_SAVE_FAILED" })}\n`,
        );
        process.exit(6);
      }

      const decided = await recordF2Decision({
        proposalId,
        projectId,
        decisionKind: "GO",
        currentContext: saved.contextSnapshot,
        decisionServices: stack.decisions,
        authorityResolver: stack.authority,
        nowIso: () => "2026-08-13T16:00:00.000Z",
        forceM3Authority: true,
      });
      if (!decided.ok) {
        console.error(JSON.stringify(decided));
        process.exit(7);
      }

      const durable = await stack.decisions.getHumanDecision.execute({
        decisionId: decided.decision.decisionId,
      });
      if (!durable.ok || !durable.decision.decisionBasis) {
        process.stdout.write(
          `${JSON.stringify({ ok: false, code: "BASIS_MISSING" })}\n`,
        );
        process.exit(8);
      }
      const basis = durable.decision.decisionBasis;
      if (basis.sourceRef !== proposalId) {
        process.stdout.write(
          `${JSON.stringify({ ok: false, code: "SOURCE_REF_MISMATCH" })}\n`,
        );
        process.exit(9);
      }

      const lpsAfter = await stack.projects.getCurrentLivingProjectState.execute({
        projectId,
      });
      if (!lpsAfter.ok) process.exit(10);

      process.stdout.write(
        `${JSON.stringify({
          ok: true,
          path: "recordF2Decision",
          proposalId,
          decisionId: decided.decision.decisionId,
          sourceRef: basis.sourceRef,
          sourceDigest: basis.sourceDigest,
          requestedOperation: basis.executionBasis.requestedOperation,
          lpsVersion: lpsAfter.livingProjectState.version,
          decisionIds: lpsAfter.livingProjectState.decisionIds,
          proposalPresentInProcessA: getProposal(proposalId) !== null,
          // Anti-cheat markers for the parent test:
          usedSaveProposal: true,
          usedRecordF2Decision: true,
          manuallyBuiltDecisionBasis: false,
        })}\n`,
      );
      return;
    }

    if (mode === "prepare") {
      const decisionId = idArg ?? "dec:m3-proc-1";
      const proposalId = proposalIdArg ?? "prop:m3-e2e";

      // Process B — ProposalStore MUST be empty (new process).
      const proposalInB = getProposal(proposalId);
      if (proposalInB !== null) {
        process.stdout.write(
          `${JSON.stringify({
            ok: false,
            code: "PROPOSAL_UNEXPECTEDLY_PRESENT",
          })}\n`,
        );
        process.exit(11);
      }

      const lps = await stack.projects.getCurrentLivingProjectState.execute({
        projectId,
      });
      if (!lps.ok) process.exit(12);

      const prepared = await prepareM3FromDecision({
        projectId,
        decisionId,
        currentContext: {
          projectId,
          lpsId: lps.livingProjectState.lpsVersionId,
          lpsVersion: lps.livingProjectState.version,
          doctrineDigest: VALID_DIGEST,
          activeCycleInstanceId: "cyc:m3-proc-1",
          ckcResolutionRef: "ckc:m3-e2e",
        },
        deps: {
          decisionServices: stack.decisions,
          authorityResolver: stack.authority,
          executionContractServices: stack.contracts,
          nowIso: () => "2026-08-13T16:00:00.000Z",
          forceM3Authority: true,
        },
      });
      if (!prepared.ok) {
        console.error(JSON.stringify(prepared));
        process.exit(13);
      }

      const loaded = await stack.contracts.getExecutionContract.execute({
        executionContractId: prepared.payload.contract.executionContractId,
      });
      if (!loaded.ok) process.exit(14);

      const { computeExecutionContractSemanticFingerprint } = await import(
        "@/lib/oa/execution-contract"
      );
      const persistedFingerprint =
        prepared.payload.contract.semanticFingerprint;
      const recomputedAfterValidate =
        computeExecutionContractSemanticFingerprint(loaded.contract);

      process.stdout.write(
        `${JSON.stringify({
          ok: true,
          decisionId,
          contractId: prepared.payload.contract.executionContractId,
          fingerprint: persistedFingerprint,
          persistedFingerprint,
          recomputedAfterValidate,
          action: prepared.payload.contract.action,
          target: prepared.payload.contract.target,
          stopConditions: loaded.contract.stopConditions,
          requiredCapabilities: loaded.contract.requiredCapabilities,
          reversibility: loaded.contract.reversibility,
          status: loaded.contract.status,
          version: loaded.contract.version,
          proposalPresentInProcessB: getProposal(proposalId) !== null,
          projectionOnly: prepared.payload.cursorProjection.projectionOnly,
          executionAllowed: prepared.payload.executionAllowed,
          cursorReal: prepared.payload.cursorReal,
          gateD: prepared.payload.cursorProjection.gateD,
          selectedAgentRef: prepared.payload.cursorProjection.selectedAgentRef,
          attemptCreated: prepared.payload.attemptCreated,
          projectionFingerprint: prepared.payload.cursorProjection.fingerprint,
        })}\n`,
      );
      return;
    }

    if (mode === "read") {
      const decisionId = idArg ?? "dec:m3-proc-1";
      const proposalId = proposalIdArg ?? "prop:m3-e2e";
      const loaded = await stack.decisions.getHumanDecision.execute({
        decisionId,
      });
      if (!loaded.ok) process.exit(15);
      const contracts = await stack.contracts.listExecutionContractHistory.execute({
        projectId,
      });
      if (!contracts.ok || contracts.contracts.length === 0) process.exit(16);
      const contract = contracts.contracts[0]!;
      const { projectCursorPrepareOnly, computeExecutionContractSemanticFingerprint } =
        await import("@/lib/oa/execution-contract");
      const projection = projectCursorPrepareOnly(contract);
      const persistedFingerprint = contract.semanticFingerprint;
      const recomputedFingerprint =
        computeExecutionContractSemanticFingerprint(contract);
      process.stdout.write(
        `${JSON.stringify({
          ok: true,
          decisionId: loaded.decision.decisionId,
          contractId: contract.executionContractId,
          fingerprint: persistedFingerprint,
          persistedFingerprint,
          recomputedFingerprint,
          projectionFingerprint: projection.fingerprint,
          proposalPresentInProcessC: getProposal(proposalId) !== null,
          projectionOnly: projection.projectionOnly,
          executionAllowed: projection.executionAllowed,
          cursorReal: projection.cursorReal,
          gateD: projection.gateD,
          selectedAgentRef: projection.selectedAgentRef,
        })}\n`,
      );
      return;
    }

    throw new Error(`unknown mode ${mode}`);
  } finally {
    stack.projects.dispose();
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.stack : String(err));
  process.exit(1);
});
