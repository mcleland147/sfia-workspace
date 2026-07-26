/**
 * T-A6-D4 MaturityAssessment — Propose / Confirm / Downgrade lifecycle + fail-closed.
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

const MORRIS: ActorReference = {
  actorId: "actor:morris",
  role: "decision_maker",
  authorityLevel: "N3",
};

const SYSTEM: ActorReference = {
  actorId: "actor:studio",
  role: "system",
  authorityLevel: "none",
};

const AGENT: ActorReference = {
  actorId: "actor:agent-1",
  role: "agent",
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
}

/** Non-critical deterministic PASS claim ready for maturity. */
async function seedPassClaim(
  s: ReturnType<typeof buildServices>,
  opts: {
    claimId: string;
    evidenceId: string;
    rbId: string;
    claimType?:
      | "technique"
      | "conformite"
      | "qualite"
      | "securite"
      | "maturite_support";
  },
) {
  await freezeBundle(s, opts.rbId, [opts.evidenceId]);
  const evaluated = await s.evaluateClaim.execute({
    claimEvaluationId: opts.claimId,
    idempotencyKey: `idem-eval-${opts.claimId}`,
    actor: SYSTEM,
    claimType: opts.claimType ?? "technique",
    claimStatement: "Support maturity proposal",
    criticality: "non_critical",
    evaluationMethod: "deterministic",
    requiredEvidenceRefs: [opts.evidenceId],
    reviewBundleId: opts.rbId,
    reviewBundleVersion: 2,
  });
  expect(evaluated.ok).toBe(true);
  if (!evaluated.ok) return null;
  expect(evaluated.claimEvaluation.status).toBe("pass");
  return evaluated.claimEvaluation;
}

describe("T-A6-D4 ProposeMaturity", () => {
  it("proposes VALIDATED from eligible non-critical PASS (never auto-promoted)", async () => {
    const s = buildServices();
    const claim = await seedPassClaim(s, {
      claimId: "clm:mat-pass-001",
      evidenceId: "ev:mat-1",
      rbId: "rb:mat-1",
    });
    expect(claim).toBeTruthy();
    const proposed = await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:propose-001",
      idempotencyKey: "idem-mat-propose-001",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "pack:v3-native-option-a-modeled",
      requestedLevel: "MODELED",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-pass-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.maturityAssessment.autoPromoted).toBe(false);
    expect(proposed.maturityAssessment.status).toBe("proposed");
    expect(proposed.maturityAssessment.proposedLevel).toBe("MODELED");
    expect(proposed.maturityAssessment.claimBindings[0]?.eligibleForPositive).toBe(
      true,
    );
    expect(proposed.maturityAssessment.version).toBe(1);
  });

  it("refuses missing claim and wrong version", async () => {
    const s = buildServices();
    const missing = await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:missing-001",
      idempotencyKey: "idem-mat-missing",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "DOCUMENTED",
      claimBindings: [
        { claimEvaluationId: "clm:does-not-exist", claimEvaluationVersion: 1 },
      ],
    });
    expect(missing.ok).toBe(false);
    if (missing.ok) return;
    expect(missing.error.detailCode).toBe("MATURITY_CLAIM_NOT_FOUND");

    const claim = await seedPassClaim(s, {
      claimId: "clm:mat-ver-001",
      evidenceId: "ev:mat-ver",
      rbId: "rb:mat-ver",
    });
    const badVer = await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:badver-001",
      idempotencyKey: "idem-mat-badver",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "DOCUMENTED",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-ver-001",
          claimEvaluationVersion: claim!.version + 5,
        },
      ],
    });
    expect(badVer.ok).toBe(false);
    if (badVer.ok) return;
    expect(badVer.error.detailCode).toBe("MATURITY_CLAIM_VERSION_MISMATCH");
  });

  it("does not promote from waived or disputed claims", async () => {
    const s = buildServices();
    await freezeBundle(s, "rb:mat-waive", ["ev:mat-waive"]);
    s.fakeClaimAuthority.grant({
      actorId: REVIEWER.actorId,
      level: "N2",
      scope: "oa.claim_evaluation",
    });
    const waived = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:mat-waive-001",
      idempotencyKey: "idem-clm-waive",
      actor: REVIEWER,
      intent: "waive",
      claimType: "technique",
      claimStatement: "Waived claim",
      criticality: "non_critical",
      evaluationMethod: "human_review",
      requiredEvidenceRefs: ["ev:mat-waive"],
      reviewBundleId: "rb:mat-waive",
      reviewBundleVersion: 2,
      waiverReason: "temporary exception documented",
    });
    expect(waived.ok).toBe(true);
    if (!waived.ok) return;
    expect(waived.claimEvaluation.status).toBe("waived");

    const proposed = await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:from-waive",
      idempotencyKey: "idem-mat-waive",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "VALIDATED",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-waive-001",
          claimEvaluationVersion: waived.claimEvaluation.version,
        },
      ],
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.maturityAssessment.proposedLevel).toBe("DOCUMENTED");
    expect(
      proposed.maturityAssessment.claimBindings[0]?.eligibleForPositive,
    ).toBe(false);
    expect(proposed.maturityAssessment.gaps?.some((g) => g.code === "claim_waived")).toBe(
      true,
    );
  });

  it("blocks proposal when HARD reservation present", async () => {
    const s = buildServices();
    const claim = await seedPassClaim(s, {
      claimId: "clm:mat-block-001",
      evidenceId: "ev:mat-block",
      rbId: "rb:mat-block",
    });
    const proposed = await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:blocked-001",
      idempotencyKey: "idem-mat-blocked",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "IMPLEMENTED",
      blockingReservationRefs: ["res:hard-runtime-not-proven"],
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-block-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.maturityAssessment.status).toBe("blocked");
    expect(proposed.maturityAssessment.blockingReservationRefs.length).toBe(1);
  });

  it("idempotent propose replay / conflict", async () => {
    const s = buildServices();
    const claim = await seedPassClaim(s, {
      claimId: "clm:mat-idem-001",
      evidenceId: "ev:mat-idem",
      rbId: "rb:mat-idem",
    });
    const first = await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:idem-001",
      idempotencyKey: "idem-mat-idem-key",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "VALIDATED",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-idem-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    expect(first.ok).toBe(true);
    const replay = await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:idem-001",
      idempotencyKey: "idem-mat-idem-key",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "VALIDATED",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-idem-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    expect(replay.ok).toBe(true);
    if (!replay.ok) return;
    expect(replay.reusedFromIdempotencyKey).toBe(true);

    const conflict = await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:idem-002",
      idempotencyKey: "idem-mat-idem-key",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "MODELED",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-idem-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    expect(conflict.ok).toBe(false);
    if (conflict.ok) return;
    expect(conflict.error.detailCode).toBe("IDEMPOTENCY_CONFLICT");
  });
});

describe("T-A6-D4 ConfirmMaturity", () => {
  it("confirms proposed maturity for human; refuses system/agent/blocked", async () => {
    const s = buildServices();
    s.fakeClaimAuthority.grant({
      actorId: REVIEWER.actorId,
      level: "N2",
      scope: "oa.maturity_assessment",
    });
    const claim = await seedPassClaim(s, {
      claimId: "clm:mat-conf-001",
      evidenceId: "ev:mat-conf",
      rbId: "rb:mat-conf",
    });
    const proposed = await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:conf-001",
      idempotencyKey: "idem-mat-conf-p",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "VALIDATED",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-conf-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const sys = await s.confirmMaturity.execute({
      maturityAssessmentId: "mat:conf-001",
      idempotencyKey: "idem-mat-conf-sys",
      actor: SYSTEM,
      expectedVersion: 1,
    });
    expect(sys.ok).toBe(false);
    if (!sys.ok) {
      expect(sys.error.detailCode).toBe("MATURITY_AUTHORITY_FORBIDDEN");
    }

    const agent = await s.confirmMaturity.execute({
      maturityAssessmentId: "mat:conf-001",
      idempotencyKey: "idem-mat-conf-agent",
      actor: AGENT,
      expectedVersion: 1,
    });
    expect(agent.ok).toBe(false);

    const ok = await s.confirmMaturity.execute({
      maturityAssessmentId: "mat:conf-001",
      idempotencyKey: "idem-mat-conf-ok",
      actor: REVIEWER,
      expectedVersion: 1,
    });
    expect(ok.ok).toBe(true);
    if (!ok.ok) return;
    expect(ok.maturityAssessment.status).toBe("confirmed");
    expect(ok.maturityAssessment.confirmedLevel).toBe("VALIDATED");
    expect(ok.maturityAssessment.autoPromoted).toBe(false);
    expect(ok.maturityAssessment.confirmedBy?.role).not.toBe("system");
  });

  it("refuses confirm when HARD reserves present", async () => {
    const s = buildServices();
    s.fakeClaimAuthority.grant({
      actorId: REVIEWER.actorId,
      level: "N2",
      scope: "oa.maturity_assessment",
    });
    const claim = await seedPassClaim(s, {
      claimId: "clm:mat-conf-block",
      evidenceId: "ev:mat-conf-block",
      rbId: "rb:mat-conf-block",
    });
    const proposed = await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:conf-block",
      idempotencyKey: "idem-mat-conf-block-p",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "VALIDATED",
      blockingReservationRefs: ["res:hard-1"],
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-conf-block",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.maturityAssessment.status).toBe("blocked");
    const confirmed = await s.confirmMaturity.execute({
      maturityAssessmentId: "mat:conf-block",
      idempotencyKey: "idem-mat-conf-block-c",
      actor: REVIEWER,
      expectedVersion: 1,
    });
    expect(confirmed.ok).toBe(false);
    if (confirmed.ok) return;
    expect(confirmed.error.detailCode).toBe("MATURITY_BLOCKED_BY_RESERVATION");
  });
});

describe("T-A6-D4 DowngradeMaturity", () => {
  it("explicit downgrade supersedes source atomically; refuses system", async () => {
    const s = buildServices();
    s.fakeClaimAuthority.grant({
      actorId: REVIEWER.actorId,
      level: "N2",
      scope: "oa.maturity_assessment",
    });
    s.fakeClaimAuthority.grant({
      actorId: MORRIS.actorId,
      level: "N3",
      scope: "oa.maturity_assessment",
      canActAsMorris: true,
    });
    const claim = await seedPassClaim(s, {
      claimId: "clm:mat-down-001",
      evidenceId: "ev:mat-down",
      rbId: "rb:mat-down",
    });
    const proposed = await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:down-src",
      idempotencyKey: "idem-mat-down-p",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "MODELED",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-down-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const confirmed = await s.confirmMaturity.execute({
      maturityAssessmentId: "mat:down-src",
      idempotencyKey: "idem-mat-down-c",
      actor: REVIEWER,
      expectedVersion: 1,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;

    const sysDown = await s.downgradeMaturity.execute({
      sourceMaturityAssessmentId: "mat:down-src",
      successorMaturityAssessmentId: "mat:down-new",
      idempotencyKey: "idem-mat-down-sys",
      actor: SYSTEM,
      expectedVersion: 2,
      targetLevel: "VALIDATED",
      downgradeReason: "evidence invalidated after confirm",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-down-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    expect(sysDown.ok).toBe(false);
    if (!sysDown.ok) {
      expect(sysDown.error.detailCode).toBe("MATURITY_DOWNGRADE_FORBIDDEN");
    }

    const down = await s.downgradeMaturity.execute({
      sourceMaturityAssessmentId: "mat:down-src",
      successorMaturityAssessmentId: "mat:down-new",
      idempotencyKey: "idem-mat-down-ok",
      actor: REVIEWER,
      expectedVersion: 2,
      targetLevel: "VALIDATED",
      downgradeReason: "evidence invalidated after confirm",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-down-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    expect(down.ok).toBe(true);
    if (!down.ok) return;
    expect(down.maturityAssessment?.status).toBe("superseded");
    expect(down.successor?.supersedesMaturityAssessmentId).toBe("mat:down-src");
    expect(down.successor?.downgradeReason).toContain("invalidated");
    expect(down.successor?.proposedLevel).toBe("VALIDATED");
    expect(down.successor?.autoPromoted).toBe(false);

    const source = await s.maturityAssessmentRepository.findById("mat:down-src");
    expect(source?.status).toBe("superseded");
    expect(source?.claimBindings[0]?.claimEvaluationId).toBe("clm:mat-down-001");

    const replay = await s.downgradeMaturity.execute({
      sourceMaturityAssessmentId: "mat:down-src",
      successorMaturityAssessmentId: "mat:down-new",
      idempotencyKey: "idem-mat-down-ok",
      actor: REVIEWER,
      expectedVersion: 2,
      targetLevel: "VALIDATED",
      downgradeReason: "evidence invalidated after confirm",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-down-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    expect(replay.ok).toBe(true);
    if (!replay.ok) return;
    expect(replay.reusedFromIdempotencyKey).toBe(true);
  });

  it("refuses secret in downgrade reason", async () => {
    const s = buildServices();
    s.fakeClaimAuthority.grant({
      actorId: REVIEWER.actorId,
      level: "N2",
      scope: "oa.maturity_assessment",
    });
    const claim = await seedPassClaim(s, {
      claimId: "clm:mat-sec-001",
      evidenceId: "ev:mat-sec",
      rbId: "rb:mat-sec",
    });
    await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:sec-src",
      idempotencyKey: "idem-mat-sec-p",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "VALIDATED",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-sec-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    const bad = await s.downgradeMaturity.execute({
      sourceMaturityAssessmentId: "mat:sec-src",
      successorMaturityAssessmentId: "mat:sec-new",
      idempotencyKey: "idem-mat-sec-d",
      actor: REVIEWER,
      expectedVersion: 1,
      targetLevel: "DOCUMENTED",
      downgradeReason: "token=super-secret-value-here",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-sec-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    expect(bad.ok).toBe(false);
    if (bad.ok) return;
    expect(bad.error.detailCode).toBe("MATURITY_SECRET_FORBIDDEN");
  });
});

describe("T-A6-D4 repository / defensive copies", () => {
  it("defensive copy after get; independent stores", async () => {
    const s = buildServices();
    const claim = await seedPassClaim(s, {
      claimId: "clm:mat-clone-001",
      evidenceId: "ev:mat-clone",
      rbId: "rb:mat-clone",
    });
    await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:clone-001",
      idempotencyKey: "idem-mat-clone",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "DOCUMENTED",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-clone-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    const got = await s.maturityAssessmentRepository.findById("mat:clone-001");
    expect(got).toBeTruthy();
    if (!got) return;
    got.status = "confirmed";
    got.claimBindings.push({
      claimEvaluationId: "clm:injected",
      claimEvaluationVersion: 1,
      claimType: "technique",
      criticality: "non_critical",
      status: "pass",
      eligibleForPositive: true,
      reviewBundleId: "rb:x",
      reviewBundleVersion: 1,
    });
    const again = await s.maturityAssessmentRepository.findById("mat:clone-001");
    expect(again?.status).toBe("proposed");
    expect(again?.claimBindings).toHaveLength(1);
  });
});
