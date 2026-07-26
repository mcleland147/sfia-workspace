/**
 * T-A6-D4 adversarial validation — Confirm re-assess, no DOCUMENTED without eligible,
 * IMPLEMENTED/ADOPTED Morris, defensive copies.
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
  await s.registerEvidence.execute({
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
  s.fakePayload.setScript(id, { digest: DIGEST_A });
  await s.verifyEvidenceIntegrity.execute({
    evidenceId: id,
    actor: ACTOR,
    expectedVersion: 1,
  });
}

async function freezeBundle(
  s: ReturnType<typeof buildServices>,
  rbId: string,
  evidenceIds: string[],
) {
  for (const id of evidenceIds) await seedVerifiedEvidence(s, id);
  await s.createReviewBundle.execute({
    reviewBundleId: rbId,
    idempotencyKey: `idem-create-${rbId}`,
    actor: ACTOR,
    projectId: "prj:campus360-oa",
    evidenceIds,
  });
  await s.freezeReviewBundle.execute({
    reviewBundleId: rbId,
    idempotencyKey: `idem-freeze-${rbId}`,
    actor: ACTOR,
    expectedVersion: 1,
  });
}

async function seedPassClaim(
  s: ReturnType<typeof buildServices>,
  claimId: string,
  evidenceId: string,
  rbId: string,
) {
  await freezeBundle(s, rbId, [evidenceId]);
  const evaluated = await s.evaluateClaim.execute({
    claimEvaluationId: claimId,
    idempotencyKey: `idem-eval-${claimId}`,
    actor: SYSTEM,
    claimType: "technique",
    claimStatement: "Support maturity",
    criticality: "non_critical",
    evaluationMethod: "deterministic",
    requiredEvidenceRefs: [evidenceId],
    reviewBundleId: rbId,
    reviewBundleVersion: 2,
  });
  expect(evaluated.ok).toBe(true);
  if (!evaluated.ok) return null;
  return evaluated.claimEvaluation;
}

describe("T-A6-D4 adversarial — Confirm re-assessment", () => {
  it("refuses Confirm after bound claim is superseded post-propose", async () => {
    const s = buildServices();
    s.fakeClaimAuthority.grant({
      actorId: REVIEWER.actorId,
      level: "N2",
      scope: "oa.maturity_assessment",
    });
    const claim = await seedPassClaim(
      s,
      "clm:adv-sup-old",
      "ev:adv-sup",
      "rb:adv-sup",
    );
    expect(claim).toBeTruthy();
    const proposed = await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:adv-sup",
      idempotencyKey: "idem-mat-adv-sup-p",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "VALIDATED",
      claimBindings: [
        {
          claimEvaluationId: "clm:adv-sup-old",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const successor = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:adv-sup-new",
      idempotencyKey: "idem-clm-adv-sup-new",
      actor: SYSTEM,
      claimType: "technique",
      claimStatement: "Superseding evaluation",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: ["ev:adv-sup"],
      reviewBundleId: "rb:adv-sup",
      reviewBundleVersion: 2,
      supersedesClaimEvaluationId: "clm:adv-sup-old",
    });
    expect(successor.ok).toBe(true);
    expect(await s.claimEvaluationReader.isSuperseded("clm:adv-sup-old")).toBe(
      true,
    );

    const confirmed = await s.confirmMaturity.execute({
      maturityAssessmentId: "mat:adv-sup",
      idempotencyKey: "idem-mat-adv-sup-c",
      actor: REVIEWER,
      expectedVersion: 1,
    });
    expect(confirmed.ok).toBe(false);
    if (confirmed.ok) return;
    expect(
      confirmed.error.detailCode === "MATURITY_CLAIM_SUPERSEDED" ||
        confirmed.error.detailCode === "MATURITY_CLAIM_NOT_ELIGIBLE",
    ).toBe(true);
  });
});

describe("T-A6-D4 adversarial — IMPLEMENTED Morris + defensive copies", () => {
  it("refuses IMPLEMENTED confirm without Morris gate", async () => {
    const s = buildServices();
    s.fakeClaimAuthority.grant({
      actorId: REVIEWER.actorId,
      level: "N2",
      scope: "oa.maturity_assessment",
    });
    s.fakeClaimAuthority.grant({
      actorId: REVIEWER.actorId,
      level: "N2",
      scope: "oa.claim_evaluation",
    });
    // Build critical confirmed claim to support IMPLEMENTED
    await freezeBundle(s, "rb:adv-impl", ["ev:adv-impl"]);
    const evaluated = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:adv-impl-001",
      idempotencyKey: "idem-clm-adv-impl-e",
      actor: SYSTEM,
      claimType: "securite",
      claimStatement: "Critical claim",
      criticality: "critical",
      evaluationMethod: "human_review",
      requiredEvidenceRefs: ["ev:adv-impl"],
      reviewBundleId: "rb:adv-impl",
      reviewBundleVersion: 2,
    });
    expect(evaluated.ok).toBe(true);
    if (!evaluated.ok) return;
    expect(evaluated.claimEvaluation.status).toBe("evaluating");
    const claimConfirmed = await s.confirmClaimEvaluation.execute({
      claimEvaluationId: "clm:adv-impl-001",
      idempotencyKey: "idem-clm-adv-impl-c",
      actor: REVIEWER,
      expectedVersion: 1,
    });
    expect(claimConfirmed.ok).toBe(true);
    if (!claimConfirmed.ok) return;

    const proposed = await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:adv-impl",
      idempotencyKey: "idem-mat-adv-impl-p",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "IMPLEMENTED",
      claimBindings: [
        {
          claimEvaluationId: "clm:adv-impl-001",
          claimEvaluationVersion: claimConfirmed.claimEvaluation.version,
        },
      ],
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.maturityAssessment.proposedLevel).toBe("IMPLEMENTED");

    const confirmed = await s.confirmMaturity.execute({
      maturityAssessmentId: "mat:adv-impl",
      idempotencyKey: "idem-mat-adv-impl-c",
      actor: REVIEWER,
      expectedVersion: 1,
    });
    expect(confirmed.ok).toBe(false);
    if (confirmed.ok) return;
    expect(confirmed.error.detailCode).toBe("MATURITY_AUTHORITY_FORBIDDEN");
  });

  it("defensive copies on maturity get", async () => {
    const s = buildServices();
    const claim = await seedPassClaim(
      s,
      "clm:adv-clone-001",
      "ev:adv-clone",
      "rb:adv-clone",
    );
    await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:adv-clone",
      idempotencyKey: "idem-mat-adv-clone",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "VALIDATED",
      claimBindings: [
        {
          claimEvaluationId: "clm:adv-clone-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    const got = await s.maturityAssessmentRepository.findById("mat:adv-clone");
    expect(got).toBeTruthy();
    if (!got) return;
    got.status = "confirmed";
    got.claimBindings[0]!.eligibleForPositive = false;
    const again = await s.maturityAssessmentRepository.findById("mat:adv-clone");
    expect(again?.status).toBe("proposed");
    expect(again?.claimBindings[0]?.eligibleForPositive).toBe(true);
  });
});
