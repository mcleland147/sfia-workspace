/**
 * PRODUCT-JOURNEY-CLAIM-EVIDENCE-COMPLETION-01 — EC-01..EC-23 + CR-CEC-01/02/03.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { FixedClock } from "@/lib/oa/doctrine";
import type { Digest } from "@/lib/oa/doctrine";
import {
  createInMemoryEvidenceReviewServices,
  docsWriteContractResultIdentity,
  docsWriteConformityTechnicalResultRef,
  DOCS_WRITE_CONTRACT_RESULT_ER_KEY,
  DOCS_WRITE_EO_MATERIALIZED_MARKDOWN_AT_TARGET,
  DOCS_WRITE_EO_MIN_CONFORMITY_VERIFICATION,
  DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF,
  DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE,
  DOCS_WRITE_STRICT_EO_CORRECTION_REF,
  DOCS_WRITE_VE_FILE_EXISTS_AT_TARGET,
  DOCS_WRITE_VE_REQUIRED_SECTIONS_PRESENT,
  expectedDocsWriteConformityOracleFingerprint,
  extractDocsWriteMinConformityCriteria,
  extractDocsWriteMinConformityCriteriaFromBoundAttempt,
  resolveCurrentContractResultClaimEvaluation,
  stripMarkdownFencedCodeBlocks,
  verifyDocsWriteMinConformityFromBytes,
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
} from "@/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
import { requalifyDocsWriteContractResult } from "@/features/project-assistant/w2/requalifyDocsWriteContractResult";
import { completeDocsWriteClaimEvidenceCompletion } from "@/features/project-assistant/w2/completeDocsWriteClaimEvidenceCompletion";
import { createHash } from "node:crypto";

const ACTOR = { actorId: "actor:cec", role: "project_owner" as const };
const NOW = "2026-09-18T16:00:00.000Z";
const ATTEMPT_ID = "xat:w3a:c4c5670edb4658cc";
const PROJECT_ID = "prj:e3fe8a45-5c9e-4651-bd2c-bde1cdf77c38";
const CYCLE_ID = "cyc:trj-979cf448c5a6f0e7685f937f";
const TARGET = "projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md";
const CONTENT_REQUIREMENTS = [
  "Objectif",
  "Périmètre inclus",
  "Périmètre exclu",
  "Besoins principaux",
  "Critères de succès",
  "Prochaine étape",
] as const;
const VALIDATION_EXPECTATIONS = [
  DOCS_WRITE_VE_FILE_EXISTS_AT_TARGET,
  DOCS_WRITE_VE_REQUIRED_SECTIONS_PRESENT,
] as const;

const GOOD_MARKDOWN = `# Gestion de tâches

## Objectif
Texte.

## Périmètre inclus
Inclus.

## Périmètre exclu
Exclu.

## Besoins principaux
Besoins.

## Critères de succès
Succès.

## Prochaine étape
Suite.
`;

function digestOf(bytes: Buffer): Digest {
  return `sha256:${createHash("sha256").update(bytes).digest("hex")}` as Digest;
}

function makeContract(overrides?: {
  expectedOutputs?: string[];
  inputs?: Record<string, unknown>;
}): ExecutionContract {
  const base: ExecutionContract = {
    schemaVersion: "0.2.0-oa",
    executionContractId: "xct:m3-res:dec:w2-trj:e00839c5-5022-4bd8-8243-f0a2dd6e79cb",
    projectId: PROJECT_ID,
    cycleInstanceId: CYCLE_ID,
    version: 2,
    status: "confirmed",
    semanticFingerprint: "fp:pending",
    action: M4_BOUNDED_DOCS_WRITE_ACTION,
    target: TARGET,
    scope: "projects/sfia-studio/.sandbox",
    requiredAuthority: "N3",
    constraints: ["NO_COMMIT", "NO_PUSH", "NO_PR", "NO_MERGE"],
    stopConditions: [],
    evidenceRequirements: [DOCS_WRITE_CONTRACT_RESULT_ER_KEY],
    expectedOutputs: overrides?.expectedOutputs ?? [
      DOCS_WRITE_EO_MATERIALIZED_MARKDOWN_AT_TARGET,
      DOCS_WRITE_EO_MIN_CONFORMITY_VERIFICATION,
    ],
    requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
    reversibility: "reversible",
    idempotencyKey: "idem:ec:cec:docs",
    correlationId: "cor:ec:cec:docs",
    inputs: overrides?.inputs ?? {
      targetPath: TARGET,
      contentRequirements: [...CONTENT_REQUIREMENTS],
      validationExpectations: [...VALIDATION_EXPECTATIONS],
      artifactType: "Markdown",
    },
  };
  base.semanticFingerprint = computeExecutionContractSemanticMaterialFingerprint(
    executionContractSemanticMaterial(base),
  );
  return base;
}

function makeAttempt(
  contract: ExecutionContract,
  options?: { omitBound?: boolean; omitBoundInputs?: boolean },
): ExecutionAttempt {
  const snap = captureBoundExecutionContractSnapshot(contract);
  if (options?.omitBound) {
    return {
      attemptId: ATTEMPT_ID,
      executionContractId: contract.executionContractId,
      executionContractVersion: contract.version,
      executionContractSemanticFingerprint: snap.semanticFingerprint,
      status: "succeeded",
      resultRef: "res:m4:xat:w3a:c4c5670edb4658cc",
      selectedAgentRef: "agent:docs-write",
      version: 3,
      createdAt: NOW,
      updatedAt: NOW,
    } as ExecutionAttempt;
  }
  if (options?.omitBoundInputs) {
    return {
      attemptId: ATTEMPT_ID,
      executionContractId: contract.executionContractId,
      executionContractVersion: contract.version,
      executionContractSemanticFingerprint: snap.semanticFingerprint,
      boundExecutionContract: {
        ...snap,
        semanticMaterial: {
          ...snap.semanticMaterial,
          inputs: undefined as unknown as Record<string, unknown>,
        },
      },
      status: "succeeded",
      resultRef: "res:m4:xat:w3a:c4c5670edb4658cc",
      selectedAgentRef: "agent:docs-write",
      version: 3,
      createdAt: NOW,
      updatedAt: NOW,
    } as ExecutionAttempt;
  }
  return {
    attemptId: ATTEMPT_ID,
    executionContractId: contract.executionContractId,
    executionContractVersion: contract.version,
    executionContractSemanticFingerprint: snap.semanticFingerprint,
    boundExecutionContract: snap,
    status: "succeeded",
    resultRef: "res:m4:xat:w3a:c4c5670edb4658cc",
    selectedAgentRef: "agent:docs-write",
    version: 3,
    createdAt: NOW,
    updatedAt: NOW,
  } as ExecutionAttempt;
}

async function seedArtifactOnly(input: {
  services: ReturnType<typeof createInMemoryEvidenceReviewServices>;
  contract: ExecutionContract;
  attempt: ExecutionAttempt;
  bytes: Buffer;
  location?: string;
}) {
  const digest = digestOf(input.bytes);
  const ingested = await ingestDocsWriteArtifactEvidence({
    evidenceReviewServices: input.services,
    projectId: PROJECT_ID,
    cycleInstanceId: CYCLE_ID,
    executionContractId: input.contract.executionContractId,
    executionAttemptId: input.attempt.attemptId,
    targetPath: input.location ?? TARGET,
    digest,
    actor: ACTOR,
    nowIso: NOW,
  });
  expect(ingested.ok).toBe(true);
  if (!ingested.ok) throw new Error(ingested.message);
  const rb = await input.services.reviewBundleReader.findById(
    ingested.reviewBundleId,
  );
  if (rb && !rb.frozenAt) {
    const frozen = await input.services.freezeReviewBundle.execute({
      reviewBundleId: ingested.reviewBundleId,
      expectedVersion: rb.version,
      idempotencyKey: `idem:seed-freeze:${ingested.reviewBundleId}`,
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(frozen.ok).toBe(true);
  }
  return { digest, evidenceId: ingested.evidenceId, reviewBundleId: ingested.reviewBundleId };
}

function validConformityRef(attempt: ExecutionAttempt): string {
  const fp = expectedDocsWriteConformityOracleFingerprint(attempt);
  if (!fp) throw new Error("expected oracle fingerprint missing");
  return docsWriteConformityTechnicalResultRef(fp);
}

describe("claim evidence completion EC-01..EC-23", () => {
  it("EC-01 — historical-shaped EO + Artifact only → NOT_PROVEN", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    await seedArtifactOnly({
      services,
      contract,
      attempt,
      bytes: Buffer.from(GOOD_MARKDOWN, "utf8"),
    });
    const rq = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: DOCS_WRITE_STRICT_EO_CORRECTION_REF,
    });
    expect(rq.ok).toBe(true);
    if (!rq.ok) return;
    expect(rq.claimEvaluation.status).toBe("not_proven");
    const eo = rq.claimEvaluation.expectedOutputAssessments ?? [];
    expect(eo.map((a) => a.result)).toEqual(["PASS", "NOT_PROVEN"]);
  });

  it("EC-02 — Artifact + conformity Evidence → both EO PASS / CE pass", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const bytes = Buffer.from(GOOD_MARKDOWN, "utf8");
    await seedArtifactOnly({ services, contract, attempt, bytes });
    const done = await completeDocsWriteClaimEvidenceCompletion({
      evidenceReviewServices: services,
      attempt,
      contract,
      artifactBytes: bytes,
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(done.ok).toBe(true);
    if (!done.ok) return;
    expect(done.claimEvaluation.status).toBe("pass");
    expect(
      (done.claimEvaluation.expectedOutputAssessments ?? []).map((a) => a.result),
    ).toEqual(["PASS", "PASS"]);
    expect(done.conformityEvidence.source).toBe(
      DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE,
    );
    expect(done.conformityEvidence.technicalResultRef).toBe(
      validConformityRef(attempt),
    );
    expect(done.oracleFingerprint).toHaveLength(64);
    // Historical RB unchanged identity still frozen.
    const hist = await services.reviewBundleReader.findById(
      docsWriteContractResultIdentity(ATTEMPT_ID).reviewBundleId,
    );
    expect(hist?.status).toBe("ready_for_review");
    expect(hist?.frozenAt).toBeTruthy();
    expect(hist?.evidenceRefs).toEqual([
      docsWriteContractResultIdentity(ATTEMPT_ID).evidenceId,
    ]);
  });

  it("EC-03 — unknown EO → NOT_PROVEN even with conformity", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract({
      expectedOutputs: [
        DOCS_WRITE_EO_MATERIALIZED_MARKDOWN_AT_TARGET,
        "Texte libre arbitraire non supporté",
      ],
    });
    const attempt = makeAttempt(contract);
    const bytes = Buffer.from(GOOD_MARKDOWN, "utf8");
    await seedArtifactOnly({ services, contract, attempt, bytes });
    const done = await completeDocsWriteClaimEvidenceCompletion({
      evidenceReviewServices: services,
      attempt,
      contract,
      artifactBytes: bytes,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: "evidence-completion-unknown-eo",
    });
    expect(done.ok).toBe(true);
    if (!done.ok) return;
    expect(done.claimEvaluation.status).toBe("not_proven");
  });

  it("EC-04 — wrong artifact digest on conformity → no PASS", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const bytes = Buffer.from(GOOD_MARKDOWN, "utf8");
    await seedArtifactOnly({ services, contract, attempt, bytes });
    const ids = docsWriteContractResultIdentity(ATTEMPT_ID, {
      correctionRef: DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF,
      scopeReviewBundle: true,
    });
    await services.registerEvidence.execute({
      evidenceId: ids.conformityEvidenceId,
      idempotencyKey: "idem:bad-digest",
      actor: ACTOR,
      type: "attestation",
      source: DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE,
      sourceKind: "system",
      bindings: {
        projectId: PROJECT_ID,
        cycleInstanceId: CYCLE_ID,
        executionContractId: contract.executionContractId,
        executionAttemptId: ATTEMPT_ID,
      },
      classification: "internal",
      storageMode: "metadata_only",
      status: "available",
      location: TARGET,
      digest: "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" as Digest,
      technicalResultRef: validConformityRef(attempt),
      nowIso: NOW,
    });
    const created = await services.createReviewBundle.execute({
      reviewBundleId: ids.reviewBundleId,
      idempotencyKey: "idem:rb-bad",
      actor: ACTOR,
      projectId: PROJECT_ID,
      cycleInstanceId: CYCLE_ID,
      executionContractId: contract.executionContractId,
      evidenceIds: [ids.evidenceId, ids.conformityEvidenceId],
      nowIso: NOW,
    });
    expect(created.ok).toBe(true);
    const rb = await services.reviewBundleReader.findById(ids.reviewBundleId);
    expect(rb).toBeTruthy();
    await services.freezeReviewBundle.execute({
      reviewBundleId: ids.reviewBundleId,
      expectedVersion: rb!.version,
      idempotencyKey: "idem:freeze-bad",
      actor: ACTOR,
      nowIso: NOW,
    });
    const rq = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF,
      scopeReviewBundle: true,
    });
    expect(rq.ok).toBe(true);
    if (!rq.ok) return;
    expect(rq.claimEvaluation.status).toBe("not_proven");
  });

  it("EC-05 — wrong path → no PASS on materialized EO", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const bytes = Buffer.from(GOOD_MARKDOWN, "utf8");
    await seedArtifactOnly({
      services,
      contract,
      attempt,
      bytes,
      location: "projects/sfia-studio/.sandbox/wrong.md",
    });
    const rq = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: "path-mismatch-v1",
    });
    expect(rq.ok).toBe(true);
    if (!rq.ok) return;
    expect(rq.claimEvaluation.status).toBe("not_proven");
    expect(rq.claimEvaluation.expectedOutputAssessments?.[0]?.result).toBe(
      "NOT_PROVEN",
    );
  });

  async function seedWrongConformityBinding(input: {
    correctionRef: string;
    mutateBindings: (correct: {
      projectId: string;
      cycleInstanceId: string;
      executionContractId: string;
      executionAttemptId: string;
    }) => {
      projectId: string;
      cycleInstanceId: string;
      executionContractId: string;
      executionAttemptId: string;
    };
  }) {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const bytes = Buffer.from(GOOD_MARKDOWN, "utf8");
    await seedArtifactOnly({ services, contract, attempt, bytes });
    const ids = docsWriteContractResultIdentity(ATTEMPT_ID, {
      correctionRef: input.correctionRef,
      scopeReviewBundle: true,
    });
    const correct = {
      projectId: PROJECT_ID,
      cycleInstanceId: CYCLE_ID,
      executionContractId: contract.executionContractId,
      executionAttemptId: ATTEMPT_ID,
    };
    await services.registerEvidence.execute({
      evidenceId: ids.conformityEvidenceId,
      idempotencyKey: `idem:bind-${input.correctionRef}`,
      actor: ACTOR,
      type: "attestation",
      source: DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE,
      sourceKind: "system",
      bindings: input.mutateBindings(correct),
      classification: "internal",
      storageMode: "metadata_only",
      status: "available",
      location: TARGET,
      digest: digestOf(bytes),
      technicalResultRef: validConformityRef(attempt),
      nowIso: NOW,
    });
    await services.createReviewBundle.execute({
      reviewBundleId: ids.reviewBundleId,
      idempotencyKey: `idem:rb-${input.correctionRef}`,
      actor: ACTOR,
      projectId: PROJECT_ID,
      cycleInstanceId: CYCLE_ID,
      executionContractId: contract.executionContractId,
      evidenceIds: [ids.evidenceId, ids.conformityEvidenceId],
      nowIso: NOW,
    });
    const rb = await services.reviewBundleReader.findById(ids.reviewBundleId);
    await services.freezeReviewBundle.execute({
      reviewBundleId: ids.reviewBundleId,
      expectedVersion: rb!.version,
      idempotencyKey: `idem:freeze-${input.correctionRef}`,
      actor: ACTOR,
      nowIso: NOW,
    });
    return requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: input.correctionRef,
      scopeReviewBundle: true,
    });
  }

  it("EC-06 — wrong Attempt binding → no PASS", async () => {
    const rq = await seedWrongConformityBinding({
      correctionRef: "bind-fail-attempt",
      mutateBindings: (c) => ({ ...c, executionAttemptId: "xat:w3a:other-attempt" }),
    });
    expect(rq.ok).toBe(true);
    if (!rq.ok) return;
    expect(rq.claimEvaluation.status).toBe("not_proven");
  });

  it("EC-07 — wrong EC binding → no PASS", async () => {
    const rq = await seedWrongConformityBinding({
      correctionRef: "bind-fail-ec",
      mutateBindings: (c) => ({ ...c, executionContractId: "xct:other-contract" }),
    });
    expect(rq.ok).toBe(true);
    if (!rq.ok) return;
    expect(rq.claimEvaluation.status).toBe("not_proven");
  });

  it("EC-08 — wrong project binding → no PASS", async () => {
    const rq = await seedWrongConformityBinding({
      correctionRef: "bind-fail-project",
      mutateBindings: (c) => ({ ...c, projectId: "prj:other" }),
    });
    expect(rq.ok).toBe(true);
    if (!rq.ok) return;
    expect(rq.claimEvaluation.status).toBe("not_proven");
  });

  it("EC-08b — wrong cycle binding → no PASS", async () => {
    const rq = await seedWrongConformityBinding({
      correctionRef: "bind-fail-cycle",
      mutateBindings: (c) => ({ ...c, cycleInstanceId: "cyc:other-cycle" }),
    });
    expect(rq.ok).toBe(true);
    if (!rq.ok) return;
    expect(rq.claimEvaluation.status).toBe("not_proven");
  });

  it("EC-09 — stale/rejected conformity → no PASS", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const bytes = Buffer.from(GOOD_MARKDOWN, "utf8");
    await seedArtifactOnly({ services, contract, attempt, bytes });
    const ids = docsWriteContractResultIdentity(ATTEMPT_ID, {
      correctionRef: "stale-conf-v1",
      scopeReviewBundle: true,
    });
    await services.registerEvidence.execute({
      evidenceId: ids.conformityEvidenceId,
      idempotencyKey: "idem:stale",
      actor: ACTOR,
      type: "attestation",
      source: DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE,
      sourceKind: "system",
      bindings: {
        projectId: PROJECT_ID,
        cycleInstanceId: CYCLE_ID,
        executionContractId: contract.executionContractId,
        executionAttemptId: ATTEMPT_ID,
      },
      classification: "internal",
      storageMode: "metadata_only",
      status: "rejected",
      location: TARGET,
      digest: digestOf(bytes),
      technicalResultRef: validConformityRef(attempt),
      nowIso: NOW,
    });
    await services.createReviewBundle.execute({
      reviewBundleId: ids.reviewBundleId,
      idempotencyKey: "idem:rb-stale",
      actor: ACTOR,
      projectId: PROJECT_ID,
      cycleInstanceId: CYCLE_ID,
      executionContractId: contract.executionContractId,
      evidenceIds: [ids.evidenceId, ids.conformityEvidenceId],
      nowIso: NOW,
    });
    const rb = await services.reviewBundleReader.findById(ids.reviewBundleId);
    await services.freezeReviewBundle.execute({
      reviewBundleId: ids.reviewBundleId,
      expectedVersion: rb!.version,
      idempotencyKey: "idem:freeze-stale",
      actor: ACTOR,
      nowIso: NOW,
    });
    const rq = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: "stale-conf-v1",
      scopeReviewBundle: true,
    });
    expect(rq.ok).toBe(true);
    if (!rq.ok) return;
    expect(rq.claimEvaluation.status).toBe("not_proven");
  });

  it("EC-10..15 — freeze, lineage, correctionRef successor + idempotent", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const bytes = Buffer.from(GOOD_MARKDOWN, "utf8");
    await seedArtifactOnly({ services, contract, attempt, bytes });

    // Seed prior current CE as strict-eo not_proven.
    const strict = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: DOCS_WRITE_STRICT_EO_CORRECTION_REF,
    });
    expect(strict.ok).toBe(true);
    if (!strict.ok) return;
    expect(strict.claimEvaluation.status).toBe("not_proven");

    const first = await completeDocsWriteClaimEvidenceCompletion({
      evidenceReviewServices: services,
      attempt,
      contract,
      artifactBytes: bytes,
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    expect(first.claimEvaluation.status).toBe("pass");
    expect(first.claimEvaluation.claimEvaluationId).toContain(
      "evidence-completion-v2",
    );
    expect(first.reviewBundle.frozenAt).toBeTruthy();
    expect(first.reviewBundle.frozenEvidenceSnapshots?.length).toBe(2);
    expect(first.claimEvaluation.supersedesClaimEvaluationId).toBe(
      strict.claimEvaluation.claimEvaluationId,
    );

    const second = await completeDocsWriteClaimEvidenceCompletion({
      evidenceReviewServices: services,
      attempt,
      contract,
      artifactBytes: bytes,
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.claimEvaluation.claimEvaluationId).toBe(
      first.claimEvaluation.claimEvaluationId,
    );
    expect(second.reusedFromIdempotencyKey).toBe(true);

    const current = await resolveCurrentContractResultClaimEvaluation({
      repo: services.claimEvaluationRepository,
      projectId: PROJECT_ID,
      executionAttemptId: ATTEMPT_ID,
    });
    expect(current.status).toBe("one");
    if (current.status !== "one") return;
    expect(current.claimEvaluation.claimEvaluationId).toBe(
      first.claimEvaluation.claimEvaluationId,
    );
    // Old CE immutable
    const old = await services.claimEvaluationReader.findById(
      strict.claimEvaluation.claimEvaluationId,
    );
    expect(old?.status).toBe("not_proven");
  });

  it("CR-CEC-01 — bound inputs absent + live contract populated → FAIL-CLOSED", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract, { omitBoundInputs: true });
    const bytes = Buffer.from(GOOD_MARKDOWN, "utf8");
    await seedArtifactOnly({ services, contract, attempt, bytes });
    const done = await completeDocsWriteClaimEvidenceCompletion({
      evidenceReviewServices: services,
      attempt,
      contract,
      artifactBytes: bytes,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: "bound-missing-inputs",
    });
    expect(done.ok).toBe(false);
    if (done.ok) return;
    expect(done.code).toBe("BOUND_ACCEPTANCE_ORACLE_MISSING");
  });

  it("CR-CEC-01 — bound snapshot absent + live contract populated → FAIL-CLOSED", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract, { omitBound: true });
    const bytes = Buffer.from(GOOD_MARKDOWN, "utf8");
    await seedArtifactOnly({ services, contract, attempt, bytes });
    const done = await completeDocsWriteClaimEvidenceCompletion({
      evidenceReviewServices: services,
      attempt,
      contract,
      artifactBytes: bytes,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: "bound-missing-snap",
    });
    expect(done.ok).toBe(false);
    if (done.ok) return;
    expect(done.code).toBe("BOUND_ACCEPTANCE_ORACLE_MISSING");
  });

  it("CR-CEC-01 — live contract criteria differ from bound → bound wins", async () => {
    const boundContract = makeContract();
    const attempt = makeAttempt(boundContract);
    const liveContract = makeContract({
      inputs: {
        targetPath: "projects/sfia-studio/.sandbox/live-different.md",
        contentRequirements: ["WrongHeading"],
        validationExpectations: [...VALIDATION_EXPECTATIONS],
        artifactType: "Markdown",
      },
    });
    const extracted = extractDocsWriteMinConformityCriteriaFromBoundAttempt(
      attempt,
    );
    expect(extracted.ok).toBe(true);
    if (!extracted.ok) return;
    expect(extracted.criteria.targetPath).toBe(TARGET);
    expect(extracted.criteria.contentRequirements).toEqual([
      ...CONTENT_REQUIREMENTS,
    ]);
    // Live contract must not be consulted — different target ignored.
    expect(liveContract.inputs?.targetPath).not.toBe(
      extracted.criteria.targetPath,
    );
  });

  it("CR-CEC-02 — v1 static technicalResultRef rejected; oracle fingerprint required", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeContract();
    const attempt = makeAttempt(contract);
    const bytes = Buffer.from(GOOD_MARKDOWN, "utf8");
    await seedArtifactOnly({ services, contract, attempt, bytes });
    const ids = docsWriteContractResultIdentity(ATTEMPT_ID, {
      correctionRef: "oracle-fp-v1-reject",
      scopeReviewBundle: true,
    });
    await services.registerEvidence.execute({
      evidenceId: ids.conformityEvidenceId,
      idempotencyKey: "idem:v1-ref",
      actor: ACTOR,
      type: "attestation",
      source: DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE,
      sourceKind: "system",
      bindings: {
        projectId: PROJECT_ID,
        cycleInstanceId: CYCLE_ID,
        executionContractId: contract.executionContractId,
        executionAttemptId: ATTEMPT_ID,
      },
      classification: "internal",
      storageMode: "metadata_only",
      status: "available",
      location: TARGET,
      digest: digestOf(bytes),
      technicalResultRef: "docs_write_min_conformity:v1:headings_present",
      nowIso: NOW,
    });
    await services.createReviewBundle.execute({
      reviewBundleId: ids.reviewBundleId,
      idempotencyKey: "idem:rb-v1-ref",
      actor: ACTOR,
      projectId: PROJECT_ID,
      cycleInstanceId: CYCLE_ID,
      executionContractId: contract.executionContractId,
      evidenceIds: [ids.evidenceId, ids.conformityEvidenceId],
      nowIso: NOW,
    });
    const rb = await services.reviewBundleReader.findById(ids.reviewBundleId);
    await services.freezeReviewBundle.execute({
      reviewBundleId: ids.reviewBundleId,
      expectedVersion: rb!.version,
      idempotencyKey: "idem:freeze-v1-ref",
      actor: ACTOR,
      nowIso: NOW,
    });
    const rq = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
      correctionRef: "oracle-fp-v1-reject",
      scopeReviewBundle: true,
    });
    expect(rq.ok).toBe(true);
    if (!rq.ok) return;
    expect(rq.claimEvaluation.status).toBe("not_proven");
  });

  it("CR-CEC-03 — unknown validationExpectation → BOUND_ACCEPTANCE_ORACLE_UNSUPPORTED", () => {
    const criteria = extractDocsWriteMinConformityCriteria(
      {
        targetPath: TARGET,
        contentRequirements: [...CONTENT_REQUIREMENTS],
        validationExpectations: ["Quelque chose d'inconnu"],
        artifactType: "Markdown",
      },
      "fp:test",
    );
    expect(criteria.ok).toBe(false);
    if (criteria.ok) return;
    expect(criteria.code).toBe("BOUND_ACCEPTANCE_ORACLE_UNSUPPORTED");
  });

  it("CR-CEC-03 — headings inside fenced code blocks do NOT PASS", () => {
    const criteria = extractDocsWriteMinConformityCriteria(
      {
        targetPath: TARGET,
        contentRequirements: [...CONTENT_REQUIREMENTS],
        validationExpectations: [...VALIDATION_EXPECTATIONS],
        artifactType: "Markdown",
      },
      "fp:fence",
    );
    expect(criteria.ok).toBe(true);
    if (!criteria.ok) return;
    const fencedOnly = `# Title

\`\`\`markdown
## Objectif
## Périmètre inclus
## Périmètre exclu
## Besoins principaux
## Critères de succès
## Prochaine étape
\`\`\`
`;
    const fail = verifyDocsWriteMinConformityFromBytes({
      bytes: Buffer.from(fencedOnly, "utf8"),
      artifactPath: TARGET,
      criteria: criteria.criteria,
    });
    expect(fail.ok).toBe(false);
    if (fail.ok) return;
    expect(fail.code).toBe("CONFORMITY_HEADINGS_MISSING");

    const stripped = stripMarkdownFencedCodeBlocks(fencedOnly);
    expect(stripped).not.toMatch(/^## Objectif/m);
  });

  it("EC-20..23 — no HD / Attempts unchanged / ZERO REAL / verifier oracle", () => {
    const criteria = extractDocsWriteMinConformityCriteria(
      {
        targetPath: TARGET,
        contentRequirements: [...CONTENT_REQUIREMENTS],
        validationExpectations: [...VALIDATION_EXPECTATIONS],
        artifactType: "Markdown",
      },
      "fp:oracle",
    );
    expect(criteria.ok).toBe(true);
    if (!criteria.ok) return;
    const pass = verifyDocsWriteMinConformityFromBytes({
      bytes: Buffer.from(GOOD_MARKDOWN, "utf8"),
      artifactPath: TARGET,
      criteria: criteria.criteria,
    });
    expect(pass.ok).toBe(true);
    if (pass.ok) {
      expect(pass.technicalResultRef).toMatch(
        /^docs_write_min_conformity:v2:oracle:[a-f0-9]{64}$/,
      );
    }
    const fail = verifyDocsWriteMinConformityFromBytes({
      bytes: Buffer.from("# alone\n", "utf8"),
      artifactPath: TARGET,
      criteria: criteria.criteria,
    });
    expect(fail.ok).toBe(false);
    // Governance: this suite never creates HumanDecision / trajectory / Attempt.
    expect(ATTEMPT_ID).toBe("xat:w3a:c4c5670edb4658cc");
    expect(DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF).toBe(
      "evidence-completion-v2",
    );
  });
});
