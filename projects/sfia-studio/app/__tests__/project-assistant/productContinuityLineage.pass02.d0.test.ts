/**
 * PRODUCT-CONTINUITY CORRECTION PASS 02 — canonical Contract Result lineage
 * behavioral proofs (NOT grep).
 *
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  createInMemoryEvidenceReviewServices,
  CLAIM_EVALUATION_SCHEMA_VERSION,
  CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
  projectContractResultVerdict,
  type ClaimEvaluation,
  type Evidence,
} from "@/lib/oa/evidence-review";
import {
  computeExecutionContractSemanticMaterialFingerprint,
  executionContractSemanticMaterial,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";
import { captureBoundExecutionContractSnapshot } from "@/lib/oa/execution-attempt/domain/boundExecutionContract";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { resolveProductExecutionContext } from "@/features/project-assistant/w2/resolveProductExecutionContext";
import {
  deriveGovernedExecutionContinuityProjection,
  isContinuityLineageIntegrityCode,
} from "@/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection";
import { reconcileGovernedExecution } from "@/features/project-assistant/w2/reconcileGovernedExecution";
import { FixedClock } from "@/lib/oa/doctrine";

const NOW = "2026-09-16T18:00:00.000Z";
const PROJECT_ID = "prj:lineage-p2";
const ATTEMPT_ID = "xat:lineage-p2";
const EC_ID = "xct:lineage-p2";
const CYCLE_ID = "cyc:lineage-p2";
const ACTOR = { actorId: "actor:local-pilote", role: "project_owner" as const };

function makeContract(overrides: Partial<ExecutionContract> = {}): ExecutionContract {
  const base: ExecutionContract = {
    schemaVersion: "0.2.0-oa",
    executionContractId: EC_ID,
    projectId: PROJECT_ID,
    version: 3,
    status: "confirmed",
    semanticFingerprint: "fp:placeholder",
    action: "cursor.docs_write.apply",
    target: "workspace.isolated.docs_write",
    scope: "docs/",
    requiredAuthority: "N1",
    constraints: [],
    stopConditions: [],
    evidenceRequirements: [],
    expectedOutputs: ["docs artifact"],
    requiredCapabilities: ["cap:cursor.docs_write"],
    reversibility: "reversible",
    idempotencyKey: "idem:lineage-p2",
    correlationId: "cor:lineage-p2",
    cycleInstanceId: CYCLE_ID,
    ...overrides,
  };
  const material = executionContractSemanticMaterial(base);
  const fp = computeExecutionContractSemanticMaterialFingerprint(material);
  return { ...base, semanticFingerprint: fp };
}

function makeEvidence(
  evidenceId: string,
  attemptId: string = ATTEMPT_ID,
  projectId: string = PROJECT_ID,
): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId,
    type: "artifact",
    source: "attempt",
    sourceKind: "execution_attempt",
    location: `refs/${evidenceId}`,
    producedBy: ACTOR,
    producedAt: NOW,
    freshness: "fresh",
    status: "available",
    classification: "internal",
    storageMode: "metadata_only",
    availability: "available",
    retentionClass: "standard",
    legalHold: false,
    bindings: {
      projectId,
      executionAttemptId: attemptId,
      executionContractId: EC_ID,
    },
    containsSecrets: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: `prv:${evidenceId}`,
      actor: ACTOR,
      source: "execution_adapter",
      timestamp: NOW,
      correlationId: `cor:${evidenceId}`,
      projectId,
    },
    version: 1,
    createdAt: NOW,
  };
}

function makeAttempt(
  contract: ExecutionContract,
  overrides: Partial<ExecutionAttempt> = {},
): ExecutionAttempt {
  const snap = captureBoundExecutionContractSnapshot(contract);
  return {
    schemaVersion: "0.2.0-oa",
    attemptId: ATTEMPT_ID,
    executionContractId: contract.executionContractId,
    executionContractVersion: contract.version,
    executionContractSemanticFingerprint: snap.semanticFingerprint,
    selectedAgentRef: "agt:fixture",
    status: "succeeded",
    idempotencyKey: "idem:xat:lineage-p2",
    correlationId: "cor:xat:lineage-p2",
    version: 1,
    createdAt: NOW,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:xat",
      actor: ACTOR,
      source: "execution_adapter",
      timestamp: NOW,
      correlationId: "cor:xat",
      projectId: PROJECT_ID,
    },
    boundExecutionContract: snap,
    ...overrides,
  };
}

async function seedValidLineage(input?: {
  evidenceOrderInRepo?: readonly string[];
  bindingEvidenceOrder?: readonly string[];
  claimOverrides?: Partial<ClaimEvaluation>;
  bindingsOverrides?: Record<string, unknown>;
  contractOverrides?: Partial<ExecutionContract>;
  attemptOverrides?: Partial<ExecutionAttempt>;
}) {
  const contract = makeContract(input?.contractOverrides);
  const attempt = makeAttempt(contract, input?.attemptOverrides);
  const services = createInMemoryEvidenceReviewServices({
    clock: new FixedClock(NOW),
  });

  const repoOrder = input?.evidenceOrderInRepo ?? ["ev:B", "ev:A"];
  const bindOrder = input?.bindingEvidenceOrder ?? ["ev:A", "ev:B"];

  for (const id of repoOrder) {
    const ev = makeEvidence(id);
    await services.repository.create(ev, {
      evidenceId: id,
      fingerprint: `fp:${id}`,
      operation: "register",
    });
  }

  const created = await services.createReviewBundle.execute({
    reviewBundleId: "rb:lineage-p2",
    idempotencyKey: "idem:rb:lineage-p2",
    actor: ACTOR,
    projectId: PROJECT_ID,
    executionContractId: EC_ID,
    evidenceIds: [...bindOrder],
  });
  if (!created.ok) throw new Error(`rb create: ${JSON.stringify(created)}`);
  const frozen = await services.freezeReviewBundle.execute({
    reviewBundleId: "rb:lineage-p2",
    expectedVersion: created.reviewBundle.version,
    idempotencyKey: "idem:rb-freeze:lineage-p2",
    actor: ACTOR,
  });
  if (!frozen.ok) throw new Error(`rb freeze: ${JSON.stringify(frozen)}`);

  const snap = attempt.boundExecutionContract!;
  const bindings = {
    projectId: PROJECT_ID,
    cycleInstanceId: contract.cycleInstanceId ?? null,
    executionContractId: contract.executionContractId,
    executionContractVersion: contract.version,
    executionContractSemanticFingerprint: snap.semanticFingerprint,
    executionAttemptId: attempt.attemptId,
    reviewBundleId: frozen.reviewBundle.reviewBundleId,
    reviewBundleVersion:
      frozen.reviewBundle.frozenVersion ?? frozen.reviewBundle.version,
    evidenceRefs: [...bindOrder],
    ...(input?.bindingsOverrides ?? {}),
  };

  await services.claimEvaluationRepository.create({
    schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
    claimEvaluationId: "clm:lineage-p2",
    claimType: "conformite",
    claimStatement: "lineage pass2",
    criticality: "non_critical",
    evaluationMethod: "deterministic",
    requiredEvidenceRefs: [...bindOrder],
    providedEvidenceRefs: [...bindOrder],
    reviewBundleId: frozen.reviewBundle.reviewBundleId,
    reviewBundleVersion: bindings.reviewBundleVersion as number,
    status: "not_proven",
    proposedBy: ACTOR,
    proposedAt: NOW,
    evaluatedAt: NOW,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:clm",
      actor: ACTOR,
      source: "review",
      timestamp: NOW,
      correlationId: "cor:clm",
      projectId: PROJECT_ID,
    },
    version: 1,
    subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
    contractResultBindings: bindings as never,
    ...(input?.claimOverrides ?? {}),
  });

  return { contract, attempt, services, frozen, bindings };
}

function buildOa(input: {
  contract: ExecutionContract;
  attempt: ExecutionAttempt;
  services: ReturnType<typeof createInMemoryEvidenceReviewServices>;
}): RuntimeOaStack {
  return {
    projectServices: {
      getProject: {
        execute: async ({ projectId }: { projectId: string }) =>
          projectId === PROJECT_ID
            ? { ok: true as const, project: { projectId, name: "Lineage" } }
            : { ok: false as const, error: { detailCode: "NOT_FOUND" } },
      },
    },
    executionContractServices: {
      getExecutionContract: {
        execute: async ({
          executionContractId,
        }: {
          executionContractId: string;
        }) =>
          executionContractId === input.contract.executionContractId
            ? { ok: true as const, contract: input.contract }
            : { ok: false as const, error: { detailCode: "NOT_FOUND" } },
      },
      contracts: {
        listByProject: async (projectId: string) =>
          projectId === PROJECT_ID ? [input.contract] : [],
      },
    },
    executionAttemptServices: {
      getExecutionAttempt: {
        execute: async ({ attemptId }: { attemptId: string }) =>
          attemptId === input.attempt.attemptId
            ? { ok: true as const, attempt: input.attempt }
            : { ok: false as const, error: { detailCode: "NOT_FOUND" } },
      },
      listExecutionAttempts: {
        execute: async ({
          executionContractId,
        }: {
          executionContractId: string;
        }) =>
          executionContractId === input.contract.executionContractId
            ? { ok: true as const, attempts: [input.attempt] }
            : { ok: true as const, attempts: [] },
      },
    },
    evidenceReviewServices: input.services,
    cycleServices: {
      cycles: {
        listByProject: async () => [],
      },
    },
    clock: new FixedClock(NOW),
  } as unknown as RuntimeOaStack;
}

describe("PRODUCT-CONTINUITY CORRECTION PASS 02 — canonical lineage", () => {
  it("9.1 — multi-Evidence follows bindings order, not repository order", async () => {
    const seeded = await seedValidLineage({
      evidenceOrderInRepo: ["ev:B", "ev:A"],
      bindingEvidenceOrder: ["ev:A", "ev:B"],
    });
    const oa = buildOa(seeded);
    const resolved = await resolveProductExecutionContext({
      oa,
      projectId: PROJECT_ID,
      query: { kind: "byAttemptId", attemptId: ATTEMPT_ID },
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.context.evidence.evidenceIds).toEqual(["ev:A", "ev:B"]);
    expect(resolved.context.evidence.evidenceId).toBe("ev:A");
    expect(resolved.context.claimEvaluation.contractResultVerdict).toBe(
      "NOT_PROVEN",
    );
    expect(resolved.context.claimEvaluation.status).toBe("not_proven");
  });

  it("9.2 — EC id mismatch → BINDINGS_MISMATCH → RECOVERY_REQUIRED → Reconciler STOP", async () => {
    const seeded = await seedValidLineage({
      bindingsOverrides: { executionContractId: "xct:foreign" },
    });
    const oa = buildOa(seeded);
    const resolved = await resolveProductExecutionContext({
      oa,
      projectId: PROJECT_ID,
      query: { kind: "byAttemptId", attemptId: ATTEMPT_ID },
    });
    expect(resolved.ok).toBe(false);
    if (resolved.ok) return;
    expect(resolved.code).toBe("CONTRACT_RESULT_BINDINGS_MISMATCH");

    const continuity = await deriveGovernedExecutionContinuityProjection({
      oa,
      projectId: PROJECT_ID,
      query: { kind: "byAttemptId", attemptId: ATTEMPT_ID },
    });
    expect(continuity.ok).toBe(true);
    if (!continuity.ok) return;
    expect(continuity.projection.stage).toBe("RECOVERY_REQUIRED");
    expect(continuity.projection.blockingCode).toBe(
      "CONTRACT_RESULT_BINDINGS_MISMATCH",
    );
    expect(continuity.projection.recoveryRequired).toBe(true);
    expect(continuity.projection.nextDeterministicAction).toBe("NONE");

    const reconciled = await reconcileGovernedExecution({
      oa,
      projectId: PROJECT_ID,
      executionContractId: EC_ID,
      intent: "continue",
      forceLocalAuthority: true,
    });
    expect(reconciled.ok).toBe(true);
    if (!reconciled.ok) return;
    expect(reconciled.projection.stage).toBe("RECOVERY_REQUIRED");
    expect(reconciled.stoppedReason).toBe("recovery_required");
    expect(reconciled.transitionsApplied).toEqual([]);
  });

  it("9.3 — EC version mismatch → BINDINGS_MISMATCH", async () => {
    const seeded = await seedValidLineage({
      bindingsOverrides: { executionContractVersion: 99 },
    });
    const oa = buildOa(seeded);
    const resolved = await resolveProductExecutionContext({
      oa,
      projectId: PROJECT_ID,
      query: { kind: "byAttemptId", attemptId: ATTEMPT_ID },
    });
    expect(resolved.ok).toBe(false);
    if (resolved.ok) return;
    expect(resolved.code).toBe("CONTRACT_RESULT_BINDINGS_MISMATCH");
  });

  it("9.4 — semantic fingerprint mismatch → BINDINGS_MISMATCH", async () => {
    const seeded = await seedValidLineage({
      bindingsOverrides: {
        executionContractSemanticFingerprint: "fp:hostile-other",
      },
    });
    const oa = buildOa(seeded);
    const resolved = await resolveProductExecutionContext({
      oa,
      projectId: PROJECT_ID,
      query: { kind: "byAttemptId", attemptId: ATTEMPT_ID },
    });
    expect(resolved.ok).toBe(false);
    if (resolved.ok) return;
    expect(resolved.code).toBe("CONTRACT_RESULT_BINDINGS_MISMATCH");
  });

  it("9.5 — cycle instance mismatch → BINDINGS_MISMATCH", async () => {
    const seeded = await seedValidLineage({
      bindingsOverrides: { cycleInstanceId: "cyc:foreign" },
    });
    const oa = buildOa(seeded);
    const resolved = await resolveProductExecutionContext({
      oa,
      projectId: PROJECT_ID,
      query: { kind: "byAttemptId", attemptId: ATTEMPT_ID },
    });
    expect(resolved.ok).toBe(false);
    if (resolved.ok) return;
    expect(resolved.code).toBe("CONTRACT_RESULT_BINDINGS_MISMATCH");
  });

  it("9.6 — ReviewBundle version mismatch (same id) → BINDINGS_MISMATCH", async () => {
    const seeded = await seedValidLineage({
      bindingsOverrides: { reviewBundleVersion: 999 },
    });
    const oa = buildOa(seeded);
    const resolved = await resolveProductExecutionContext({
      oa,
      projectId: PROJECT_ID,
      query: { kind: "byAttemptId", attemptId: ATTEMPT_ID },
    });
    expect(resolved.ok).toBe(false);
    if (resolved.ok) return;
    expect(resolved.code).toBe("CONTRACT_RESULT_BINDINGS_MISMATCH");

    const continuity = await deriveGovernedExecutionContinuityProjection({
      oa,
      projectId: PROJECT_ID,
      query: { kind: "byAttemptId", attemptId: ATTEMPT_ID },
    });
    expect(continuity.ok).toBe(true);
    if (!continuity.ok) return;
    expect(continuity.projection.stage).toBe("RECOVERY_REQUIRED");
    expect(continuity.projection.blockingCode).toBe(
      "CONTRACT_RESULT_BINDINGS_MISMATCH",
    );
  });

  it("9.7a — missing Evidence ref → EVIDENCE_NOT_FOUND → RECOVERY_REQUIRED", async () => {
    const seeded = await seedValidLineage({
      bindingsOverrides: { evidenceRefs: ["ev:A", "ev:MISSING"] },
    });
    const oa = buildOa(seeded);
    const resolved = await resolveProductExecutionContext({
      oa,
      projectId: PROJECT_ID,
      query: { kind: "byAttemptId", attemptId: ATTEMPT_ID },
    });
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) expect(resolved.code).toBe("EVIDENCE_NOT_FOUND");

    const continuity = await deriveGovernedExecutionContinuityProjection({
      oa,
      projectId: PROJECT_ID,
      query: { kind: "byAttemptId", attemptId: ATTEMPT_ID },
    });
    expect(continuity.ok).toBe(true);
    if (!continuity.ok) return;
    expect(continuity.projection.stage).toBe("RECOVERY_REQUIRED");
    expect(continuity.projection.blockingCode).toBe("EVIDENCE_NOT_FOUND");
  });

  it("9.7b — Evidence bound to foreign Attempt → ATTEMPT_CONTRACT_MISMATCH", async () => {
    const seeded = await seedValidLineage({
      bindingsOverrides: { evidenceRefs: ["ev:A", "ev:FOREIGN"] },
    });
    const foreign = makeEvidence("ev:FOREIGN", "xat:other");
    await seeded.services.repository.create(foreign, {
      evidenceId: "ev:FOREIGN",
      fingerprint: "fp:foreign",
      operation: "register",
    });
    const oa = buildOa(seeded);
    const resolved = await resolveProductExecutionContext({
      oa,
      projectId: PROJECT_ID,
      query: { kind: "byAttemptId", attemptId: ATTEMPT_ID },
    });
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) expect(resolved.code).toBe("ATTEMPT_CONTRACT_MISMATCH");
  });

  it("9.7c — Evidence bound to foreign Project → EVIDENCE_PROJECT_MISMATCH", async () => {
    const seeded = await seedValidLineage({
      bindingsOverrides: { evidenceRefs: ["ev:A", "ev:XPROJ"] },
    });
    const foreign = makeEvidence("ev:XPROJ", ATTEMPT_ID, "prj:other");
    await seeded.services.repository.create(foreign, {
      evidenceId: "ev:XPROJ",
      fingerprint: "fp:xproj",
      operation: "register",
    });
    const oa = buildOa(seeded);
    const resolved = await resolveProductExecutionContext({
      oa,
      projectId: PROJECT_ID,
      query: { kind: "byAttemptId", attemptId: ATTEMPT_ID },
    });
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) expect(resolved.code).toBe("EVIDENCE_PROJECT_MISMATCH");
  });

  it("9.8 — ambiguous CE → CLAIM_EVALUATION_AMBIGUOUS → RECOVERY_REQUIRED", async () => {
    const seeded = await seedValidLineage();
    await seeded.services.claimEvaluationRepository.create({
      schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
      claimEvaluationId: "clm:lineage-p2-dup",
      claimType: "conformite",
      claimStatement: "dup",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: ["ev:A"],
      reviewBundleId: "rb:lineage-p2",
      reviewBundleVersion: seeded.bindings.reviewBundleVersion as number,
      status: "not_proven",
      proposedBy: ACTOR,
      proposedAt: NOW,
      evaluatedAt: NOW,
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prv:clm2",
        actor: ACTOR,
        source: "review",
        timestamp: NOW,
        correlationId: "cor:clm2",
        projectId: PROJECT_ID,
      },
      version: 1,
      subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
      contractResultBindings: seeded.bindings as never,
    });
    const oa = buildOa(seeded);
    const resolved = await resolveProductExecutionContext({
      oa,
      projectId: PROJECT_ID,
      query: { kind: "byAttemptId", attemptId: ATTEMPT_ID },
    });
    expect(resolved.ok).toBe(false);
    if (resolved.ok) return;
    expect(resolved.code).toBe("CLAIM_EVALUATION_AMBIGUOUS");

    const continuity = await deriveGovernedExecutionContinuityProjection({
      oa,
      projectId: PROJECT_ID,
      query: { kind: "byAttemptId", attemptId: ATTEMPT_ID },
    });
    expect(continuity.ok).toBe(true);
    if (!continuity.ok) return;
    expect(continuity.projection.stage).toBe("RECOVERY_REQUIRED");
    expect(continuity.projection.blockingCode).toBe("CLAIM_EVALUATION_AMBIGUOUS");

    const reconciled = await reconcileGovernedExecution({
      oa,
      projectId: PROJECT_ID,
      executionContractId: EC_ID,
      intent: "continue",
    });
    expect(reconciled.ok).toBe(true);
    if (!reconciled.ok) return;
    expect(reconciled.stoppedReason).toBe("recovery_required");
    expect(reconciled.transitionsApplied).toEqual([]);
  });

  it("9.9 — multiple Evidence without CE → EVIDENCE_LINEAGE_AMBIGUOUS", async () => {
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    for (const id of ["ev:X", "ev:Y"]) {
      await services.repository.create(makeEvidence(id), {
        evidenceId: id,
        fingerprint: `fp:${id}`,
        operation: "register",
      });
    }
    const oa = buildOa({ contract, attempt, services });
    const resolved = await resolveProductExecutionContext({
      oa,
      projectId: PROJECT_ID,
      query: { kind: "byAttemptId", attemptId: ATTEMPT_ID },
    });
    expect(resolved.ok).toBe(false);
    if (resolved.ok) return;
    expect(resolved.code).toBe("EVIDENCE_LINEAGE_AMBIGUOUS");

    const continuity = await deriveGovernedExecutionContinuityProjection({
      oa,
      projectId: PROJECT_ID,
      query: { kind: "byAttemptId", attemptId: ATTEMPT_ID },
    });
    expect(continuity.ok).toBe(true);
    if (!continuity.ok) return;
    expect(continuity.projection.stage).toBe("RECOVERY_REQUIRED");
    expect(continuity.projection.blockingCode).toBe("EVIDENCE_LINEAGE_AMBIGUOUS");
  });

  it("9.10 — incomplete bindings → CONTRACT_RESULT_BINDINGS_MISSING → RECOVERY_REQUIRED", async () => {
    const seeded = await seedValidLineage();
    // Corrupt durable CE: keep attempt linkage, drop required binding fields.
    const stored = await seeded.services.claimEvaluationReader.findById(
      "clm:lineage-p2",
    );
    expect(stored).toBeTruthy();
    if (!stored) return;
    seeded.services.claimEvaluationStore.claims.set("clm:lineage-p2", {
      ...stored,
      contractResultBindings: {
        executionAttemptId: ATTEMPT_ID,
      } as never,
    });
    const oa = buildOa(seeded);
    const resolved = await resolveProductExecutionContext({
      oa,
      projectId: PROJECT_ID,
      query: { kind: "byAttemptId", attemptId: ATTEMPT_ID },
    });
    expect(resolved.ok).toBe(false);
    if (resolved.ok) return;
    expect(resolved.code).toBe("CONTRACT_RESULT_BINDINGS_MISSING");

    const continuity = await deriveGovernedExecutionContinuityProjection({
      oa,
      projectId: PROJECT_ID,
      query: { kind: "byAttemptId", attemptId: ATTEMPT_ID },
    });
    expect(continuity.ok).toBe(true);
    if (!continuity.ok) return;
    expect(continuity.projection.stage).toBe("RECOVERY_REQUIRED");
    expect(continuity.projection.blockingCode).toBe(
      "CONTRACT_RESULT_BINDINGS_MISSING",
    );
  });

  it("9.11 — verdict mapping via projectContractResultVerdict", () => {
    expect(projectContractResultVerdict("pass")).toBe("PASS");
    expect(projectContractResultVerdict("fail")).toBe("FAIL");
    expect(projectContractResultVerdict("not_proven")).toBe("NOT_PROVEN");
    expect(projectContractResultVerdict("pending")).toBe("NOT_PROVEN");
    expect(projectContractResultVerdict("evaluating")).toBe("NOT_PROVEN");
    expect(projectContractResultVerdict("waived")).toBe("NOT_PROVEN");
  });

  it("query errors stay resolve errors — not RECOVERY_REQUIRED", async () => {
    const seeded = await seedValidLineage();
    const oa = buildOa(seeded);
    const missing = await resolveProductExecutionContext({
      oa,
      projectId: PROJECT_ID,
      query: { kind: "byAttemptId", attemptId: "xat:does-not-exist" },
    });
    expect(missing.ok).toBe(false);
    if (missing.ok) return;
    expect(missing.code).toBe("ATTEMPT_NOT_FOUND");
    expect(isContinuityLineageIntegrityCode(missing.code)).toBe(false);

    const continuity = await deriveGovernedExecutionContinuityProjection({
      oa,
      projectId: PROJECT_ID,
      query: { kind: "byAttemptId", attemptId: "xat:does-not-exist" },
    });
    expect(continuity.ok).toBe(false);
    if (continuity.ok) return;
    expect(continuity.code).toBe("ATTEMPT_NOT_FOUND");
  });

  it("closed integrity code set has no catch-all matching", () => {
    expect(isContinuityLineageIntegrityCode("CONTRACT_RESULT_BINDINGS_MISMATCH")).toBe(
      true,
    );
    expect(isContinuityLineageIntegrityCode("EVIDENCE_LINEAGE_AMBIGUOUS")).toBe(true);
    expect(isContinuityLineageIntegrityCode("PROJECT_ID_REQUIRED")).toBe(false);
    expect(isContinuityLineageIntegrityCode("ATTEMPT_NOT_FOUND")).toBe(false);
    expect(isContinuityLineageIntegrityCode("CONTRACT_RESULT_BINDINGS_MIS")).toBe(
      false,
    );
  });
});
