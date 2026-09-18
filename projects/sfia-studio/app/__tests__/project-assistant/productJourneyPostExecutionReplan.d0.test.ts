/**
 * PRODUCT-JOURNEY-POST-EXECUTION-REPLAN-01 — portable PJR bar (CR-PJR-01..03).
 * CI-safe: tempProductDbPath / in-memory only. ZERO REAL. No campaign DB.
 * @vitest-environment node
 */
import fs from "node:fs";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { FixedClock } from "@/lib/oa/doctrine";
import type { Digest } from "@/lib/oa/doctrine";
import {
  BOUNDED_DOCS_WRITE_EO_TEMPLATE,
  CLAIM_EVALUATION_SCHEMA_VERSION,
  createInMemoryEvidenceReviewServices,
  docsWriteContractResultIdentity,
  DOCS_WRITE_CONTRACT_RESULT_ER_KEY,
  DOCS_WRITE_STRICT_EO_CORRECTION_REF,
  resolveCurrentContractResultClaimEvaluation,
} from "@/lib/oa/evidence-review";
import {
  computeExecutionContractSemanticMaterialFingerprint,
  executionContractSemanticMaterial,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";
import { captureBoundExecutionContractSnapshot } from "@/lib/oa/execution-attempt/domain/boundExecutionContract";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_TARGET,
} from "@/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent";
import { BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS } from "@/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
import { requalifyDocsWriteContractResult } from "@/features/project-assistant/w2/requalifyDocsWriteContractResult";
import {
  isEvidenceBackedNotProvenUnclaimed,
  recommendationFromOutcome,
  runW3cPostEvidenceLoop,
  findExistingW3cPostEvidence,
  w3cPayloadMatchesCurrentProduct,
  w3cRecommendationEpistemicId,
} from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
import { resolvePostEvidenceRecoveryContext } from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
import {
  materializeProductOutcomeFromAttempt,
  rehydrateProductOutcomeFromAttempt,
} from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import type { W3BProductTerminalProjection } from "@/features/project-assistant/w2/w3bProductTerminalProjection";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  proposeW2OptionsForProject,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";
import { LOCAL_PILOTE_ACTOR, registerLocalPiloteAuthority } from "@/lib/oa/decision";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";

const ACTOR = { actorId: "actor:pjr", role: "project_owner" as const };
const NOW = "2026-09-18T14:00:00.000Z";
const TARGET = "docs/functional-design.md";
const SANDBOX_TARGET = "projects/sfia-studio/.sandbox/pjr-portable.md";

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL = "1";
  delete process.env.SFIA_STUDIO_CURSOR_REAL_AUTHORIZED;
  setConversationProviderForTests(null);
});

afterEach(() => {
  cleanupW2TempDirs();
});

function makeDocsWriteContract(input?: {
  expectedOutputs?: string[];
  projectId?: string;
  executionContractId?: string;
}): ExecutionContract {
  const base: ExecutionContract = {
    schemaVersion: "0.2.0-oa",
    executionContractId: input?.executionContractId ?? "xct:pjr:docs",
    projectId: input?.projectId ?? "prj:pjr",
    cycleInstanceId: "cyc:pjr:1",
    version: 2,
    status: "confirmed",
    semanticFingerprint: "fp:pending",
    action: M4_BOUNDED_DOCS_WRITE_ACTION,
    target: TARGET,
    scope: "docs/",
    requiredAuthority: "N3",
    constraints: ["NO_COMMIT", "NO_PUSH", "NO_PR", "NO_MERGE"],
    stopConditions: [],
    evidenceRequirements: [DOCS_WRITE_CONTRACT_RESULT_ER_KEY],
    expectedOutputs: input?.expectedOutputs ?? [BOUNDED_DOCS_WRITE_EO_TEMPLATE],
    requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
    reversibility: "reversible",
    idempotencyKey: "idem:ec:pjr:docs",
    correlationId: "cor:ec:pjr:docs",
  };
  base.semanticFingerprint = computeExecutionContractSemanticMaterialFingerprint(
    executionContractSemanticMaterial(base),
  );
  return base;
}

function makeAttempt(
  contract: ExecutionContract,
  attemptId: string,
): ExecutionAttempt {
  const snap = captureBoundExecutionContractSnapshot(contract);
  return {
    attemptId,
    executionContractId: contract.executionContractId,
    executionContractVersion: contract.version,
    executionContractSemanticFingerprint: snap.semanticFingerprint,
    boundExecutionContract: snap,
    status: "succeeded",
    resultRef: `res:${attemptId}`,
    selectedAgentRef: "agent:docs-write",
    version: 3,
    createdAt: NOW,
    updatedAt: NOW,
    completedAt: NOW,
  } as ExecutionAttempt;
}

function unclaimedWithoutCe(): W3BProductTerminalProjection {
  return {
    outcome: "UNCLAIMED",
    businessHeadline: "Non claimable",
    businessReason: "missing",
    claimAllowed: false,
    evidenceId: null,
    reviewBundleId: null,
    claimEvaluationId: null,
    claimEvaluationStatus: null,
    contractResultVerdict: null,
    evidenceStatus: null,
    evidenceSummary: null,
    reviewBundleCompleteness: null,
    governedBoundary: null,
    technicalDetail: {
      attemptId: "xat:x",
      attemptStatus: "succeeded",
      resultRef: null,
      errorRef: null,
      stopReason: null,
      stopOrigin: null,
      stopCode: null,
      executionContractId: "xct:x",
      executionContractVersion: 1,
    },
    reservations: [],
    antiClaims: {
      ready: false,
      w3Closed: false,
      productCompletionComplete: false,
      runtimeV3Adopted: false,
      realProven: false,
      cycleAutoClosed: false,
      projectAutoArchived: false,
    },
    cycleInstanceClosed: false,
    projectArchived: false,
    noraInvoked: false,
    replanInvoked: false,
    realExecution: false,
  };
}

describe("CR-PJR-01 — portable hygiene", () => {
  it("this suite has no absolute campaign DB path", () => {
    const src = fs.readFileSync(__filename, "utf8");
    expect(src).not.toMatch(
      /\/Users\/morris\/Projects\/sfia-studio-product-journey/,
    );
  });

  it("PJR-15 — arbitrary UNCLAIMED without evidence-backed CE is not admissible", () => {
    expect(isEvidenceBackedNotProvenUnclaimed(unclaimedWithoutCe())).toBe(
      false,
    );
  });

  it("PJR-02/07/08/09 — UNCLAIMED recommendation is recover without HD/auto-cycle", () => {
    const rec = recommendationFromOutcome({
      outcome: "UNCLAIMED",
      recommendNextGateStatus: null,
      nextActionCode: "complete_evidence",
    });
    expect(rec.kind).toBe("recover");
    expect(rec.nextStep).toBe("complete_evidence");
    expect(rec.requiresHumanDecision).toBe(false);
    expect(rec.decisionCreated).toBe(false);
    expect(rec.attemptAutoLaunchNextCycle).toBe(false);
  });
});

describe("CR-PJR-02 — rematerialize vs correctionRef re-evaluation", () => {
  async function seedNotProvenDocsWrite(attemptId: string) {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeDocsWriteContract({
      expectedOutputs: [
        "Free-form expected output that cannot PASS artifact location",
      ],
    });
    const attempt = makeAttempt(contract, attemptId);
    const ingested = await ingestDocsWriteArtifactEvidence({
      evidenceReviewServices: services,
      projectId: contract.projectId!,
      cycleInstanceId: contract.cycleInstanceId!,
      executionContractId: contract.executionContractId,
      executionAttemptId: attemptId,
      targetPath: TARGET,
      digest:
        "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" as Digest,
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(ingested.ok).toBe(true);
    if (!ingested.ok) throw new Error("ingest");

    const first = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) throw new Error(first.message);
    expect(first.claimEvaluation.status).toBe("not_proven");
    return { services, contract, attempt, first };
  }

  it("plain rematerialize reuses current docs-write CE (CASE A)", async () => {
    const attemptId = "xat:w3a:pjr-case-a";
    const { services, contract, attempt, first } =
      await seedNotProvenDocsWrite(attemptId);
    const again = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(again.ok).toBe(true);
    if (!again.ok) return;
    expect(again.claimEvaluation.claimEvaluationId).toBe(
      first.claimEvaluation.claimEvaluationId,
    );
    expect(again.reusedFromIdempotencyKey).toBe(true);
  });

  it("explicit correctionRef creates successor CE superseding current (CASE B)", async () => {
    const attemptId = "xat:w3a:pjr-case-b";
    const { services, contract, attempt, first } =
      await seedNotProvenDocsWrite(attemptId);
    const successor = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: "corr-v2",
    });
    expect(successor.ok).toBe(true);
    if (!successor.ok) return;
    const expectedId = docsWriteContractResultIdentity(attemptId, {
      correctionRef: "corr-v2",
    }).claimEvaluationId;
    expect(successor.claimEvaluation.claimEvaluationId).toBe(expectedId);
    expect(successor.supersededClaimEvaluationId).toBe(
      first.claimEvaluation.claimEvaluationId,
    );
    const current = await resolveCurrentContractResultClaimEvaluation({
      repo: services.claimEvaluationRepository,
      projectId: contract.projectId!,
      executionAttemptId: attemptId,
    });
    expect(current.status).toBe("one");
    if (current.status === "one") {
      expect(current.claimEvaluation.claimEvaluationId).toBe(expectedId);
    }
  });

  it("same correctionRef rerun reuses current (CASE C)", async () => {
    const attemptId = "xat:w3a:pjr-case-c";
    const { services, contract, attempt } =
      await seedNotProvenDocsWrite(attemptId);
    const firstCorr = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: DOCS_WRITE_STRICT_EO_CORRECTION_REF,
    });
    expect(firstCorr.ok).toBe(true);
    if (!firstCorr.ok) return;
    const again = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: DOCS_WRITE_STRICT_EO_CORRECTION_REF,
    });
    expect(again.ok).toBe(true);
    if (!again.ok) return;
    expect(again.claimEvaluation.claimEvaluationId).toBe(
      firstCorr.claimEvaluation.claimEvaluationId,
    );
    expect(again.reusedFromIdempotencyKey).toBe(true);
  });

  it("ancestor / historical correction identity fails closed (CASE E)", async () => {
    const attemptId = "xat:w3a:pjr-case-e";
    const { services, contract, attempt } =
      await seedNotProvenDocsWrite(attemptId);
    const firstCorr = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: "hist-a",
    });
    expect(firstCorr.ok).toBe(true);
    if (!firstCorr.ok) return;
    const secondCorr = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: "hist-b",
    });
    expect(secondCorr.ok).toBe(true);
    if (!secondCorr.ok) return;

    // Re-create superseded hist-a identity → refuse.
    const cycle = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: "hist-a",
    });
    expect(cycle.ok).toBe(false);
    if (!cycle.ok) {
      expect(cycle.code).toBe("CONTRACT_RESULT_CORRECTION_LINEAGE_INVALID");
    }

    // Ordinary rematerialize still reuses current hist-b.
    const rematerialize = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(rematerialize.ok).toBe(true);
    if (!rematerialize.ok) return;
    expect(rematerialize.claimEvaluation.claimEvaluationId).toBe(
      secondCorr.claimEvaluation.claimEvaluationId,
    );
  });

  it("ambiguous current CE fails closed (CASE D)", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeDocsWriteContract();
    const attemptId = "xat:w3a:pjr-case-d";
    const attempt = makeAttempt(contract, attemptId);
    const ingested = await ingestDocsWriteArtifactEvidence({
      evidenceReviewServices: services,
      projectId: contract.projectId!,
      cycleInstanceId: contract.cycleInstanceId!,
      executionContractId: contract.executionContractId,
      executionAttemptId: attemptId,
      targetPath: TARGET,
      digest:
        "sha256:bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb" as Digest,
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(ingested.ok).toBe(true);
    if (!ingested.ok) return;

    // Two active non-superseding ContractResult CEs → ambiguous.
    for (const id of ["clm:docs-write:amb-a", "clm:docs-write:amb-b"]) {
      await services.claimEvaluationRepository.create({
        schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
        claimEvaluationId: id,
        claimType: "conformite",
        claimStatement: "ambiguous fixture",
        criticality: "non_critical",
        evaluationMethod: "deterministic",
        requiredEvidenceRefs: [ingested.evidenceId!],
        reviewBundleId: ingested.reviewBundleId!,
        reviewBundleVersion: 1,
        status: "not_proven",
        proposedBy: ACTOR,
        proposedAt: NOW,
        evaluatedAt: NOW,
        provenance: {
          schemaVersion: "0.1.0-oa",
          provenanceRecordId: `prv:${id}`,
          actor: ACTOR,
          source: "review",
          timestamp: NOW,
          correlationId: `cor:${id}`,
          projectId: contract.projectId!,
        },
        version: 1,
        subjectKind: "execution_contract_result",
        contractResultBindings: {
          projectId: contract.projectId!,
          cycleInstanceId: contract.cycleInstanceId!,
          executionContractId: contract.executionContractId,
          executionContractVersion: contract.version,
          executionContractSemanticFingerprint:
            attempt.executionContractSemanticFingerprint!,
          executionAttemptId: attemptId,
          reviewBundleId: ingested.reviewBundleId!,
          reviewBundleVersion: 1,
          evidenceRefs: [ingested.evidenceId!],
        },
      });
    }

    const result = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.code).toBe("CONTRACT_RESULT_CLAIM_LINEAGE_AMBIGUOUS");
    }
  });
});

describe("CR-PJR-03 — W3-C current-CE awareness", () => {
  it("payload match helper rejects CE / outcome drift", () => {
    const base = {
      evidenceId: "ev:docs-write:x",
      attemptId: "xat:x",
      reviewBundleId: "rb:docs-write:x",
      claimEvaluationId: "clm:docs-write:a",
      productOutcome: "UNCLAIMED",
    };
    const product = {
      evidenceId: "ev:docs-write:x",
      reviewBundleId: "rb:docs-write:x",
      claimEvaluationId: "clm:docs-write:a",
      outcome: "UNCLAIMED" as const,
      technicalDetail: { attemptId: "xat:x" },
    };
    expect(w3cPayloadMatchesCurrentProduct(base, product)).toBe(true);
    expect(
      w3cPayloadMatchesCurrentProduct(base, {
        ...product,
        claimEvaluationId: "clm:docs-write:b",
      }),
    ).toBe(false);
    expect(
      w3cPayloadMatchesCurrentProduct(base, {
        ...product,
        outcome: "SUCCESS",
      }),
    ).toBe(false);
  });

  it("Epistemic id binds Evidence+CE when CE present", () => {
    const a = w3cRecommendationEpistemicId("ev:x", "clm:a");
    const b = w3cRecommendationEpistemicId("ev:x", "clm:b");
    const legacy = w3cRecommendationEpistemicId("ev:x");
    expect(a).not.toBe(b);
    expect(a).not.toBe(legacy);
  });
});

describe("CR-PJR portable docs_write UNCLAIMED recover (temp DB)", () => {
  it("succeeded Attempt + frozen docs_write Evidence/RB + CE not_proven → UNCLAIMED recover + restart; CE-B invalidates recover A", async () => {
    const db = tempProductDbPath("pjr-portable.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pjrport" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "pjr" });
    const oa = runtime.oa!;
    const projectId = seeded.projectId;
    const attemptId = `xat:w3a:pjrport-${Date.now().toString(16).slice(-8)}`;
    const ecId = `xct:pjr:${Date.now().toString(16).slice(-8)}`;

    const proposed = await proposeW2OptionsForProject(runtime, projectId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) throw new Error("propose");
    const decided = await decideTrajectory({
      oa,
      projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) throw new Error("decide");
    const decisionId = decided.decision.decisionId;

    const authority = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: "studio.gcec.docs_write",
      issuedAt: oa.clock.nowIso(),
      evidenceId: `evd:pjr-seed:${ecId}`,
      forceEnable: true,
    });
    expect(authority.ok).toBe(true);
    if (!authority.ok) throw new Error(authority.code);

    const built = await oa.executionContractServices!.buildExecutionContract.execute({
      executionContractId: ecId,
      projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      decisionRefs: [decisionId],
      action: M4_BOUNDED_DOCS_WRITE_ACTION,
      target: M4_BOUNDED_DOCS_WRITE_TARGET,
      scope: "studio.gcec.docs_write",
      inputs: {
        targetPath: SANDBOX_TARGET,
        targetRepositoryRef: "mcleland147/sfia-workspace",
        repositoryRef: "mcleland147/sfia-workspace",
        pathAllowlist: ["projects/sfia-studio/.sandbox/"],
        contentRequirements: ["markdown heading", "acceptance criteria"],
      },
      requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
      requiredAuthority: "MORRIS",
      constraints: [
        "BOUNDED DOCS-WRITE",
        "PATH_ALLOWLIST_ONLY",
        "TEXT_DOCS_ONLY",
        "NO_DELETE",
        "NO_COMMIT",
        "NO_GIT_REMOTE",
        "NO_PUSH",
        "NO_PR",
        "NO_MERGE",
        "GATE D REQUIRED",
        "NO WILDCARD",
        "PREPARE_ONLY",
      ],
      stopConditions: ["AUTHORITY_DENIED", "CONTEXT_STALE", "DECISION_NOT_CURRENT"],
      evidenceRequirements: [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS],
      reversibility: "reversible",
      idempotencyKey: `idem:ec:${ecId}`,
      correlationId: `cor:ec:${ecId}`,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
    });
    if (!built.ok) {
      throw new Error(
        `build EC failed: ${built.error?.detailCode ?? "?"} ${built.error?.message ?? JSON.stringify(built)}`,
      );
    }
    const contract = {
      ...built.contract,
      status: "confirmed" as const,
      expectedOutputs: [
        "Free-form EO that yields NOT_PROVEN against artifact location",
      ],
      evidenceRequirements: [
        ...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS,
        DOCS_WRITE_CONTRACT_RESULT_ER_KEY,
      ],
    };
    contract.semanticFingerprint =
      computeExecutionContractSemanticMaterialFingerprint(
        executionContractSemanticMaterial(contract),
      );
    await oa.executionContractServices!.contracts.save(contract);

    const snap = captureBoundExecutionContractSnapshot(contract);
    const attempt = {
      schemaVersion: "0.2.0-oa" as const,
      attemptId,
      executionContractId: contract.executionContractId,
      executionContractVersion: contract.version,
      executionContractSemanticFingerprint: snap.semanticFingerprint,
      boundExecutionContract: snap,
      selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
      status: "succeeded" as const,
      idempotencyKey: `idem:att:${attemptId}`,
      correlationId: `cor:att:${attemptId}`,
      version: 1,
      createdAt: NOW,
      updatedAt: NOW,
      completedAt: NOW,
      launchedAt: NOW,
      startedAt: NOW,
      resultRef: `res:${attemptId}`,
      irreversibleEffectsPossible: true,
      provenance: {
        schemaVersion: "0.1.0-oa" as const,
        provenanceRecordId: `prv:${attemptId}`,
        actor: LOCAL_PILOTE_ACTOR,
        source: "system" as const,
        timestamp: NOW,
        correlationId: `cor:att:${attemptId}`,
      },
    };
    await oa.executionAttemptServices!.attempts.create(attempt as never);

    const ingested = await ingestDocsWriteArtifactEvidence({
      evidenceReviewServices: oa.evidenceReviewServices!,
      projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      executionContractId: contract.executionContractId,
      executionAttemptId: attemptId,
      targetPath: SANDBOX_TARGET,
      digest:
        "sha256:cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc" as Digest,
      actor: LOCAL_PILOTE_ACTOR,
      nowIso: NOW,
    });
    expect(ingested.ok).toBe(true);
    if (!ingested.ok) throw new Error("ingest");

    const requal = await requalifyDocsWriteContractResult({
      evidenceReviewServices: oa.evidenceReviewServices!,
      attempt: attempt as ExecutionAttempt,
      contract,
      actor: LOCAL_PILOTE_ACTOR,
      nowIso: NOW,
    });
    expect(requal.ok).toBe(true);
    if (!requal.ok) throw new Error(requal.message);
    expect(requal.claimEvaluation.status).toBe("not_proven");
    const ceA = requal.claimEvaluation.claimEvaluationId;

    const materialized = await materializeProductOutcomeFromAttempt({
      oa,
      projectId,
      attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) throw new Error(JSON.stringify(materialized));
    expect(materialized.product.outcome).toBe("UNCLAIMED");
    expect(materialized.product.claimAllowed).toBe(false);
    expect(materialized.product.claimEvaluationId).toBe(ceA);
    expect(isEvidenceBackedNotProvenUnclaimed(materialized.product)).toBe(true);
    expect(materialized.postEvidence?.ok).toBe(true);
    if (!materialized.postEvidence || !materialized.postEvidence.ok) {
      throw new Error("postEvidence");
    }
    expect(materialized.postEvidence.recommendation.kind).toBe("recover");
    expect(materialized.postEvidence.recommendation.requiresHumanDecision).toBe(
      false,
    );
    expect(materialized.postEvidence.recommendation.decisionCreated).toBe(
      false,
    );
    expect(
      materialized.postEvidence.recommendation.attemptAutoLaunchNextCycle,
    ).toBe(false);
    expect(materialized.postEvidence.noraInvoked).toBe(true);
    expect(materialized.postEvidence.claimEvaluationId).toBe(ceA);

    const recovery = await resolvePostEvidenceRecoveryContext({
      oa,
      projectId,
    });
    expect(recovery.ok).toBe(true);
    if (!recovery.ok) throw new Error("recovery");
    expect(recovery.context).not.toBeNull();
    expect(recovery.context!.productOutcome).toBe("UNCLAIMED");
    expect(recovery.context!.evidenceId).toBe(ingested.evidenceId);
    expect(recovery.context!.businessEffectProven).toBe(false);

    const listedBefore =
      await oa.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId: contract.executionContractId,
      });
    expect(listedBefore.ok && listedBefore.attempts.length).toBe(1);

    const rehydrated = await rehydrateProductOutcomeFromAttempt({
      oa,
      projectId,
      attemptId,
    });
    expect(rehydrated.ok).toBe(true);
    if (!rehydrated.ok) throw new Error("rehydrate");
    expect(rehydrated.product.outcome).toBe("UNCLAIMED");
    expect(rehydrated.postEvidence?.ok).toBe(true);

    const corr = await requalifyDocsWriteContractResult({
      evidenceReviewServices: oa.evidenceReviewServices!,
      attempt: attempt as ExecutionAttempt,
      contract,
      actor: LOCAL_PILOTE_ACTOR,
      nowIso: NOW,
      correctionRef: "corr-b",
    });
    expect(corr.ok).toBe(true);
    if (!corr.ok) throw new Error(corr.message);
    const ceB = corr.claimEvaluation.claimEvaluationId;
    expect(ceB).not.toBe(ceA);

    const afterCorr = await materializeProductOutcomeFromAttempt({
      oa,
      projectId,
      attemptId,
    });
    expect(afterCorr.ok).toBe(true);
    if (!afterCorr.ok) throw new Error(JSON.stringify(afterCorr));
    expect(afterCorr.product.claimEvaluationId).toBe(ceB);
    expect(afterCorr.product.outcome).toBe("UNCLAIMED");
    expect(afterCorr.postEvidence?.ok).toBe(true);
    if (!afterCorr.postEvidence || !afterCorr.postEvidence.ok) {
      throw new Error("post B");
    }
    expect(afterCorr.postEvidence.claimEvaluationId).toBe(ceB);
    expect(afterCorr.postEvidence.recommendation.kind).toBe("recover");

    const staleA = await findExistingW3cPostEvidence({
      oa,
      projectId,
      evidenceId: ingested.evidenceId!,
      attemptId,
      product: {
        ...afterCorr.product,
        claimEvaluationId: ceA,
      },
    });
    expect(staleA).toBeNull();

    const currentB = await findExistingW3cPostEvidence({
      oa,
      projectId,
      evidenceId: ingested.evidenceId!,
      attemptId,
      product: afterCorr.product,
    });
    expect(currentB).not.toBeNull();
    expect(currentB!.claimEvaluationId).toBe(ceB);

    // CE-B PASS — same semantic fingerprint (evaluate forbids EO mutation on supersede).
    // Create immutable PASS successor via repository for W3-C invalidation proof.
    const cePass = `clm:docs-write:corr-pass:${attemptId}`.slice(0, 128);
    await oa.evidenceReviewServices!.claimEvaluationRepository.create({
      ...corr.claimEvaluation,
      claimEvaluationId: cePass,
      status: "pass",
      claimStatement: "Contract result assessment (pass) — test successor",
      supersedesClaimEvaluationId: ceB,
      idempotencyKey: `idem:docs-write-ce:corr-pass:${attemptId}`,
      provenance: {
        ...corr.claimEvaluation.provenance,
        provenanceRecordId: `prv:${cePass}`,
        correlationId: `cor:${cePass}`,
      },
    });

    const afterPass = await materializeProductOutcomeFromAttempt({
      oa,
      projectId,
      attemptId,
    });
    expect(afterPass.ok).toBe(true);
    if (!afterPass.ok) throw new Error(JSON.stringify(afterPass));
    expect(afterPass.product.claimEvaluationId).toBe(cePass);
    expect(afterPass.product.outcome).toBe("SUCCESS");
    expect(afterPass.postEvidence?.ok).toBe(true);
    if (!afterPass.postEvidence || !afterPass.postEvidence.ok) {
      throw new Error("post pass");
    }
    expect(afterPass.postEvidence.recommendation.kind).toBe("continue");
    expect(afterPass.postEvidence.productOutcome).toBe("SUCCESS");

    const recoverStale = await findExistingW3cPostEvidence({
      oa,
      projectId,
      evidenceId: ingested.evidenceId!,
      attemptId,
      product: {
        evidenceId: ingested.evidenceId!,
        reviewBundleId: ingested.reviewBundleId!,
        claimEvaluationId: ceB,
        outcome: "UNCLAIMED",
        technicalDetail: { attemptId },
      },
    });
    expect(recoverStale).toBeNull();

    const recoveryAfterPass = await resolvePostEvidenceRecoveryContext({
      oa,
      projectId,
    });
    expect(recoveryAfterPass.ok).toBe(true);
    if (recoveryAfterPass.ok) {
      expect(recoveryAfterPass.context).toBeNull();
    }

    const listedAfter =
      await oa.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId: contract.executionContractId,
      });
    expect(listedAfter.ok && listedAfter.attempts.length).toBe(1);

    const refused = await runW3cPostEvidenceLoop({
      oa,
      projectId,
      attemptId,
      product: unclaimedWithoutCe(),
    });
    expect(refused.ok).toBe(false);
    if (!refused.ok) expect(refused.code).toBe("PRODUCT_UNCLAIMED");
  });
});
