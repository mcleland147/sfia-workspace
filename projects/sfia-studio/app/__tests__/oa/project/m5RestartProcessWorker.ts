/**
 * Child-process worker for M5 B1 restart proof.
 * Usage: tsx m5RestartProcessWorker.ts <create|read> <dbPath> <projectId>
 *
 * Create: Product SQLite + real use cases (select → start → result → ingest → RB → W1).
 * Read: reopen same dbPath, assert durability, rehydrate via RecommendNextGate path.
 *
 * Does NOT import vitest helpers (child process / tsx).
 */
import path from "node:path";
import {
  createTestDoctrineResolver,
  FixedClock,
  type Digest,
  type DoctrinePackagePin,
  type ProvenanceRecord,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
} from "@/lib/oa/project";
import { createSqliteCycleServices } from "@/lib/oa/cycle";
import {
  createTestSqliteDecisionServices,
  MemoryAuthorityResolver,
} from "@/lib/oa/decision";
import { createTestSqliteExecutionContractServices } from "@/lib/oa/execution-contract";
import {
  createTestSqliteExecutionAttemptServices,
  TestExecutionAdapter,
  type AgentDescriptor,
} from "@/lib/oa/execution-attempt";
import { createTestSqliteEvidenceReviewServices } from "@/lib/oa/evidence-review";
import { appendEvidenceOutcomeToLps } from "@/features/project-assistant/f3/appendEvidenceOutcomeToLps";
import { createAttemptReaderBridge } from "@/features/project-assistant/f3/attemptReaderBridge";
import { rehydrateEvidenceOutcomeFromLps } from "@/features/project-assistant/f3/rehydrateEvidenceOutcomeFromLps";

const APP_ROOT = path.resolve(__dirname, "../../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const NOW = "2026-07-25T06:00:00.000Z";

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const MORRIS_ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "decision_maker",
  displayName: "Morris",
  authorityLevel: "N3",
};

const CONTRACT_SCOPE = "docs+schemas+examples only";
const CONTRACT_ACTION = "publish-modeled-pack";
const CONTRACT_TARGET = "sfia-v3-modeled/v3-native-option-a";
const CONTRACT_CAPABILITY = "cap:git-docs";

const OPTIONS = [
  { optionId: "opt:go", label: "Go", recommended: true },
  { optionId: "opt:hold", label: "Hold" },
];

const ATTEMPT_ID = "xat:m5-proc";
const CONTRACT_ID = "xct:m5-proc";
const EVIDENCE_ID = "ev:m5-proc";
const REVIEW_BUNDLE_ID = "rb:m5-proc";
const DECISION_ID = "dec:m5-proc";
const CYCLE_ID = "cyc:m5-proc";
const RESULT_REF = "res:m5-proc-fixture";
const AUTHORITY_EVIDENCE_ID = "evd:morris-n3";

function provenance(actorId: string, id: string): ProvenanceRecord {
  return {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: `prv:${id}`,
    actor: { actorId, role: "system", authorityLevel: "N1" },
    source: "system",
    timestamp: NOW,
    correlationId: "cor:agent-registry-fixture",
  };
}

function agentDescriptor(
  overrides: Partial<AgentDescriptor> & { agentId: string },
): AgentDescriptor {
  return {
    schemaVersion: "0.1.0-oa",
    agentType: "docs_writer",
    adapterRef: "adp:test-fixture",
    supportedCapabilities: [CONTRACT_CAPABILITY],
    allowedActions: [CONTRACT_ACTION],
    allowedTargets: [CONTRACT_TARGET],
    allowedScopes: [CONTRACT_SCOPE],
    trustLevel: "fixture",
    executionMode: "adapter_sync_fixture",
    healthStatus: "healthy",
    version: 1,
    enabled: true,
    createdAt: NOW,
    provenance: provenance("actor:system", overrides.agentId.replace(/\W/g, "")),
    ...overrides,
  };
}

function defaultAgents(): AgentDescriptor[] {
  return [
    agentDescriptor({ agentId: "agt:alpha" }),
    agentDescriptor({ agentId: "agt:beta" }),
    agentDescriptor({ agentId: "agt:disabled", enabled: false }),
    agentDescriptor({ agentId: "agt:sick", healthStatus: "degraded" }),
    agentDescriptor({
      agentId: "agt:wrong-scope",
      allowedScopes: ["everything"],
    }),
    agentDescriptor({
      agentId: "agt:wrong-capability",
      supportedCapabilities: ["cap:sql"],
    }),
  ];
}

function fail(code: number, payload: unknown): never {
  console.error(JSON.stringify(payload));
  process.exit(code);
}

function assertOk<T extends { ok: boolean }>(
  result: T,
  code: number,
  label: string,
): asserts result is T & { ok: true } {
  if (!result.ok) {
    fail(code, { label, result });
  }
}

function registerMorris(
  authority: MemoryAuthorityResolver,
  scope: string,
  evidenceId: string,
): void {
  try {
    authority.register({
      evidenceId,
      actorId: "actor:morris",
      level: "N3",
      scope,
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
      canActAsMorris: true,
    });
  } catch (err) {
    if (!(err instanceof Error) || err.message !== "evidence_immutable") {
      throw err;
    }
  }
}

async function boot(dbPath: string) {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const projects = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: NOW,
    dbPath,
  });
  const cycles = createSqliteCycleServices({
    projectServices: projects,
    productStore: projects.store,
    clock: new FixedClock(NOW),
  });
  const authority = new MemoryAuthorityResolver();
  const decisions = createTestSqliteDecisionServices({
    projectServices: projects,
    cycleServices: cycles,
    productStore: projects.store,
    authorityResolver: authority,
    fixedNowIso: NOW,
  });
  const execution = createTestSqliteExecutionContractServices({
    projectServices: projects,
    decisionServices: decisions,
    cycleServices: cycles,
    productStore: projects.store,
    authorityResolver: authority,
    fixedNowIso: NOW,
  });
  const adapter = new TestExecutionAdapter();
  const attempts = createTestSqliteExecutionAttemptServices({
    decisionServices: decisions,
    executionContractServices: execution,
    productStore: projects.store,
    agents: defaultAgents(),
    adapter,
    authorityResolver: authority,
    fixedNowIso: NOW,
  });
  return { projects, cycles, decisions, authority, execution, attempts, adapter };
}

async function createMode(dbPath: string, projectId: string): Promise<void> {
  const stack = await boot(dbPath);
  try {
    const created = await stack.projects.createProject.execute({
      projectId,
      title: "M5 Process Restart",
      objective: "m5-process-restart-objective",
      context: "m5-process-restart-context",
      scope: "m5-process-restart-scope",
      doctrinePackagePin: VALID_PIN,
      createdBy: {
        actorId: MORRIS_ACTOR.actorId,
        role: "project_owner",
        displayName: MORRIS_ACTOR.displayName,
        authorityLevel: "N3",
      },
      lpsVersionId: "lps:m5-proc-v1",
      idempotencyKey: `idem:${projectId}`,
    });
    assertOk(created, 2, "createProject");

    registerMorris(stack.authority, CONTRACT_SCOPE, AUTHORITY_EVIDENCE_ID);
    registerMorris(stack.authority, "subj:exec-gate", "evd:morris-subjexecgate");

    const decided = await stack.decisions.recordHumanDecision.execute({
      decisionId: DECISION_ID,
      projectId,
      subject: "subj:exec-gate",
      options: OPTIONS,
      selectedOptionId: "opt:go",
      actor: MORRIS_ACTOR,
      authority: "morris",
      reversible: false,
      authorityEvidenceId: "evd:morris-subjexecgate",
    });
    assertOk(decided, 3, "recordHumanDecision");

    const cycle = await stack.cycles.createCycle.execute({
      cycleInstanceId: CYCLE_ID,
      cycleTypeId: "cyc:delivery",
      projectId,
      signals: {},
      requestedProfile: "Standard",
      createdBy: MORRIS_ACTOR,
    });
    assertOk(cycle, 4, "createCycle");

    const built = await stack.execution.buildExecutionContract.execute({
      executionContractId: CONTRACT_ID,
      projectId,
      decisionRefs: [DECISION_ID],
      cycleInstanceId: CYCLE_ID,
      action: CONTRACT_ACTION,
      target: CONTRACT_TARGET,
      scope: CONTRACT_SCOPE,
      requiredCapabilities: [CONTRACT_CAPABILITY],
      requiredAuthority: "N3",
      constraints: ["no-runtime-code", "no-sql"],
      stopConditions: ["DOCTRINE_UNRESOLVED", "AUTHORITY_DENIED"],
      evidenceRequirements: ["evreq:schemas", "evreq:examples"],
      reversibility: "partially_reversible",
      idempotencyKey: "idem-xct-m5-proc",
      correlationId: "cor:m5-proc",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: AUTHORITY_EVIDENCE_ID,
    });
    assertOk(built, 5, "buildExecutionContract");

    const validated = await stack.execution.validateExecutionContract.execute({
      executionContractId: CONTRACT_ID,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: AUTHORITY_EVIDENCE_ID,
    });
    assertOk(validated, 6, "validateExecutionContract");

    const confirmationId = "cfm:m5-proc";
    const requested = await stack.decisions.requestConfirmation.execute({
      confirmationId,
      level: "N3",
      actionRef: "act:confirm-exec",
      requestedBy: MORRIS_ACTOR,
      requestedTo: MORRIS_ACTOR,
      scope: CONTRACT_SCOPE,
      idempotencyKey: `idem-${confirmationId}`,
      decisionRef: DECISION_ID,
    });
    assertOk(requested, 7, "requestConfirmation");

    const granted = await stack.decisions.grantConfirmation.execute({
      confirmationId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: AUTHORITY_EVIDENCE_ID,
    });
    assertOk(granted, 8, "grantConfirmation");

    const confirmed = await stack.execution.confirmExecutionContract.execute({
      executionContractId: CONTRACT_ID,
      confirmationId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: AUTHORITY_EVIDENCE_ID,
      expectedVersion: validated.contract.version,
    });
    assertOk(confirmed, 9, "confirmExecutionContract");

    const selected = await stack.attempts.selectExecutionAgent.execute({
      attemptId: ATTEMPT_ID,
      executionContractId: CONTRACT_ID,
      idempotencyKey: "idem-attempt-m5-proc",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: AUTHORITY_EVIDENCE_ID,
      selectionProfile: "standard",
    });
    assertOk(selected, 10, "selectExecutionAgent");

    const started = await stack.attempts.startExecution.execute({
      attemptId: ATTEMPT_ID,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: AUTHORITY_EVIDENCE_ID,
    });
    assertOk(started, 11, "startExecution");

    const recorded = await stack.attempts.recordExecutionResult.execute({
      attemptId: ATTEMPT_ID,
      adapterId: "adp:test-fixture",
      resultRef: RESULT_REF,
      technicalExitCode: 0,
    });
    assertOk(recorded, 12, "recordExecutionResult");
    if (recorded.attempt.status !== "succeeded") {
      fail(12, {
        label: "attempt_not_succeeded",
        status: recorded.attempt.status,
      });
    }

    const evidence = createTestSqliteEvidenceReviewServices({
      productStore: stack.projects.store,
      fixedNowIso: NOW,
      attemptReader: createAttemptReaderBridge(stack.attempts.attempts),
    });

    const ingested = await evidence.ingestExecutionAttemptEvidence.execute({
      evidenceId: EVIDENCE_ID,
      executionAttemptId: ATTEMPT_ID,
      idempotencyKey: "idem:ev:m5-proc",
      actor: MORRIS_ACTOR,
      classification: "internal",
      storageMode: "metadata_only",
      bindings: {
        projectId,
        executionContractId: CONTRACT_ID,
      },
    });
    assertOk(ingested, 13, "ingestExecutionAttemptEvidence");

    const bundle = await evidence.createReviewBundle.execute({
      reviewBundleId: REVIEW_BUNDLE_ID,
      idempotencyKey: "idem:rb:m5-proc",
      actor: MORRIS_ACTOR,
      projectId,
      executionContractId: CONTRACT_ID,
      evidenceIds: [EVIDENCE_ID],
    });
    assertOk(bundle, 14, "createReviewBundle");

    const linked = await appendEvidenceOutcomeToLps({
      projectId,
      evidenceId: EVIDENCE_ID,
      reviewBundleId: REVIEW_BUNDLE_ID,
      projectServices: stack.projects,
    });
    if (!linked.ok) {
      fail(15, { label: "appendEvidenceOutcomeToLps", linked });
    }

    const preRestart = await rehydrateEvidenceOutcomeFromLps({
      projectId,
      deps: {
        projectServices: stack.projects,
        evidenceReviewServices: evidence,
      },
    });
    if (!preRestart.ok) {
      fail(16, { label: "rehydrate_pre_restart", preRestart });
    }

    process.stdout.write(
      `${JSON.stringify({
        ok: true,
        attemptId: ATTEMPT_ID,
        resultRef: RESULT_REF,
        evidenceId: EVIDENCE_ID,
        reviewBundleId: REVIEW_BUNDLE_ID,
        executionContractId: CONTRACT_ID,
        lpsVersion: linked.lpsVersion,
        evidence: {
          sourceKind: ingested.evidence.sourceKind,
          technicalResultRef: ingested.evidence.technicalResultRef ?? null,
          bindings: ingested.evidence.bindings,
        },
        recommendation: {
          kind: preRestart.recommendation.kind,
          executionAuthority: preRestart.recommendation.executionAuthority,
          gateConsumed: preRestart.recommendation.gateConsumed,
          decisionCreated: preRestart.recommendation.decisionCreated,
          attemptAutoLaunchNextCycle:
            preRestart.recommendation.attemptAutoLaunchNextCycle,
        },
      })}\n`,
    );
  } finally {
    stack.projects.dispose();
  }
}

async function readMode(dbPath: string, projectId: string): Promise<void> {
  const stack = await boot(dbPath);
  try {
    const evidence = createTestSqliteEvidenceReviewServices({
      productStore: stack.projects.store,
      fixedNowIso: NOW,
      attemptReader: createAttemptReaderBridge(stack.attempts.attempts),
    });

    const attempt = await stack.attempts.attempts.findById(ATTEMPT_ID);
    const ev = await evidence.repository.findById(EVIDENCE_ID);
    const rb = await evidence.reviewBundleRepository.findById(REVIEW_BUNDLE_ID);
    const lps = await stack.projects.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!attempt || !ev || !rb || !lps.ok) {
      process.stdout.write(
        `${JSON.stringify({
          ok: false,
          attempt: !!attempt,
          evidence: !!ev,
          reviewBundle: !!rb,
          lpsOk: lps.ok,
        })}\n`,
      );
      process.exit(6);
    }

    if (attempt.status !== "succeeded") {
      fail(7, { label: "attempt_status", status: attempt.status });
    }
    if (attempt.resultRef !== RESULT_REF) {
      fail(7, {
        label: "resultRef_mismatch",
        expected: RESULT_REF,
        actual: attempt.resultRef,
      });
    }
    if (ev.sourceKind !== "execution_attempt") {
      fail(8, { label: "sourceKind", sourceKind: ev.sourceKind });
    }
    if (ev.technicalResultRef !== RESULT_REF) {
      fail(8, {
        label: "technicalResultRef",
        expected: RESULT_REF,
        actual: ev.technicalResultRef,
      });
    }

    const rehydrated = await rehydrateEvidenceOutcomeFromLps({
      projectId,
      deps: {
        projectServices: stack.projects,
        evidenceReviewServices: evidence,
      },
    });
    if (!rehydrated.ok) {
      fail(9, { label: "rehydrateEvidenceOutcomeFromLps", rehydrated });
    }

    process.stdout.write(
      `${JSON.stringify({
        ok: true,
        attemptStatus: attempt.status,
        resultRef: attempt.resultRef,
        evidenceId: ev.evidenceId,
        reviewBundleId: rb.reviewBundleId,
        evidence: {
          sourceKind: ev.sourceKind,
          technicalResultRef: ev.technicalResultRef ?? null,
          bindings: ev.bindings,
        },
        evidenceIds: lps.livingProjectState.evidenceIds ?? [],
        reviewBundleIds: lps.livingProjectState.reviewBundleIds ?? [],
        lpsVersion: lps.livingProjectState.version,
        executionContractId: CONTRACT_ID,
        recommendation: {
          kind: rehydrated.recommendation.kind,
          executionAuthority: rehydrated.recommendation.executionAuthority,
          gateConsumed: rehydrated.recommendation.gateConsumed,
          decisionCreated: rehydrated.recommendation.decisionCreated,
          attemptAutoLaunchNextCycle:
            rehydrated.recommendation.attemptAutoLaunchNextCycle,
        },
      })}\n`,
    );
  } finally {
    stack.projects.dispose();
  }
}

async function main(): Promise<void> {
  const [, , mode, dbPath, projectId] = process.argv;
  if (!mode || !dbPath || !projectId) {
    throw new Error("usage: <create|read> <dbPath> <projectId>");
  }
  if (mode === "create") {
    await createMode(dbPath, projectId);
    return;
  }
  if (mode === "read") {
    await readMode(dbPath, projectId);
    return;
  }
  throw new Error(`unknown mode ${mode}`);
}

main().catch((err) => {
  console.error(err instanceof Error ? err.stack : String(err));
  process.exit(1);
});
