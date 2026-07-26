/**
 * T-A6-D3 adversarial validation — Confirm re-assessment, snapshot freeze,
 * defensive copies, draft RB refusal.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import type { ActorReference } from "@/lib/oa/evidence-review";
import { ACTOR, DIGEST_A, buildServices } from "./helpers";

const REVIEWER: ActorReference = {
  actorId: "actor:reviewer-1",
  role: "reviewer",
  authorityLevel: "N2",
};

const SYSTEM: ActorReference = {
  actorId: "actor:studio",
  role: "system",
  authorityLevel: "none",
};

async function seedVerifiedEvidence(
  s: ReturnType<typeof buildServices>,
  id: string,
) {
  const reg = await s.registerEvidence.execute({
    evidenceId: id,
    idempotencyKey: `idem-${id}`,
    actor: ACTOR,
    type: "document",
    source: "fixture",
    sourceKind: "manual",
    bindings: { projectId: "prj:campus360-oa" },
    classification: "internal",
    storageMode: "metadata_only",
    digest: DIGEST_A,
  });
  expect(reg.ok).toBe(true);
  s.fakePayload.setScript(id, { digest: DIGEST_A });
  const verified = await s.verifyEvidenceIntegrity.execute({
    evidenceId: id,
    actor: ACTOR,
    expectedVersion: 1,
  });
  expect(verified.ok).toBe(true);
}

async function freezeBundle(
  s: ReturnType<typeof buildServices>,
  rbId: string,
  evidenceIds: string[],
) {
  for (const id of evidenceIds) {
    await seedVerifiedEvidence(s, id);
  }
  await s.createReviewBundle.execute({
    reviewBundleId: rbId,
    idempotencyKey: `idem-create-${rbId}`,
    actor: ACTOR,
    projectId: "prj:campus360-oa",
    evidenceIds,
  });
  const frozen = await s.freezeReviewBundle.execute({
    reviewBundleId: rbId,
    idempotencyKey: `idem-freeze-${rbId}`,
    actor: ACTOR,
    expectedVersion: 1,
  });
  expect(frozen.ok).toBe(true);
  return frozen.ok ? frozen.reviewBundle : null;
}

describe("T-A6-D3 adversarial — Confirm re-assessment", () => {
  it("refuses Confirm after Evidence becomes unavailable post-evaluate", async () => {
    const s = buildServices();
    s.fakeClaimAuthority.grant({
      actorId: REVIEWER.actorId,
      level: "N2",
      scope: "oa.claim_evaluation",
    });
    await freezeBundle(s, "rb:adv-confirm", ["ev:adv-confirm-1"]);
    const evaluated = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:adv-confirm-001",
      idempotencyKey: "idem-adv-confirm-eval",
      actor: SYSTEM,
      claimType: "securite",
      claimStatement: "Evidence remains usable",
      criticality: "critical",
      evaluationMethod: "human_review",
      requiredEvidenceRefs: ["ev:adv-confirm-1"],
      reviewBundleId: "rb:adv-confirm",
      reviewBundleVersion: 2,
    });
    expect(evaluated.ok).toBe(true);
    if (!evaluated.ok) return;
    expect(evaluated.claimEvaluation.status).toBe("evaluating");

    const marked = await s.markEvidenceUnavailable.execute({
      evidenceId: "ev:adv-confirm-1",
      actor: ACTOR,
      expectedVersion: 2,
      reason: "withdrawn after evaluate",
      idempotencyKey: "idem-adv-confirm-unavail",
    });
    expect(marked.ok).toBe(true);

    const confirmed = await s.confirmClaimEvaluation.execute({
      claimEvaluationId: "clm:adv-confirm-001",
      idempotencyKey: "idem-adv-confirm-ok",
      actor: REVIEWER,
      expectedVersion: 1,
    });
    expect(confirmed.ok).toBe(false);
    if (confirmed.ok) return;
    expect(
      confirmed.error.detailCode === "CLAIM_EVIDENCE_UNAVAILABLE" ||
        confirmed.error.detailCode === "CLAIM_EVIDENCE_VERSION_MISMATCH" ||
        confirmed.error.detailCode === "CLAIM_EVIDENCE_NOT_VERIFIED",
    ).toBe(true);
  });
});

describe("T-A6-D3 adversarial — snapshot freeze status", () => {
  it("refuses PASS when frozen snapshot recorded unavailable", async () => {
    const s = buildServices();
    await seedVerifiedEvidence(s, "ev:adv-snap-unavail");
    await s.markEvidenceUnavailable.execute({
      evidenceId: "ev:adv-snap-unavail",
      actor: ACTOR,
      expectedVersion: 2,
      reason: "withdrawn before freeze",
      idempotencyKey: "idem-adv-snap-unavail",
    });
    await s.createReviewBundle.execute({
      reviewBundleId: "rb:adv-snap",
      idempotencyKey: "idem-rb-adv-snap",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
      evidenceIds: ["ev:adv-snap-unavail"],
    });
    await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:adv-snap",
      idempotencyKey: "idem-fz-adv-snap",
      actor: ACTOR,
      expectedVersion: 1,
    });
    const result = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:adv-snap-001",
      idempotencyKey: "idem-clm-adv-snap",
      actor: SYSTEM,
      claimType: "technique",
      claimStatement: "Snapshot unavailable cannot PASS",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: ["ev:adv-snap-unavail"],
      reviewBundleId: "rb:adv-snap",
      reviewBundleVersion: 2,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.claimEvaluation.status).toBe("not_proven");
    expect(result.claimEvaluation.evidenceAssessments?.[0]?.code).toBe(
      "unavailable",
    );
  });
});

describe("T-A6-D3 adversarial — draft RB / defensive copies", () => {
  it("refuses EvaluateClaim against draft ReviewBundle", async () => {
    const s = buildServices();
    await seedVerifiedEvidence(s, "ev:adv-draft-1");
    await s.createReviewBundle.execute({
      reviewBundleId: "rb:adv-draft",
      idempotencyKey: "idem-rb-adv-draft",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
      evidenceIds: ["ev:adv-draft-1"],
    });
    const result = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:adv-draft-001",
      idempotencyKey: "idem-clm-adv-draft",
      actor: SYSTEM,
      claimType: "technique",
      claimStatement: "Draft bundle refused",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: ["ev:adv-draft-1"],
      reviewBundleId: "rb:adv-draft",
      reviewBundleVersion: 1,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("CLAIM_REVIEW_BUNDLE_INVALID");
  });

  it("defensive copies: mutating returned claim does not corrupt store", async () => {
    const s = buildServices();
    await freezeBundle(s, "rb:adv-clone", ["ev:adv-clone-1"]);
    const result = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:adv-clone-001",
      idempotencyKey: "idem-clm-adv-clone",
      actor: SYSTEM,
      claimType: "technique",
      claimStatement: "Clone safety",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: ["ev:adv-clone-1"],
      reviewBundleId: "rb:adv-clone",
      reviewBundleVersion: 2,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    result.claimEvaluation.status = "disputed";
    result.claimEvaluation.requiredEvidenceRefs.push("ev:injected");
    const again = await s.claimEvaluationRepository.findById("clm:adv-clone-001");
    expect(again?.status).toBe("pass");
    expect(again?.requiredEvidenceRefs).toEqual(["ev:adv-clone-1"]);
  });
});
