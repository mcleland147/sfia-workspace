/**
 * T-A6-D5 RecommendNextGate — bounded coordination (read-only).
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
}

async function seedPassClaim(
  s: ReturnType<typeof buildServices>,
  opts: {
    claimId: string;
    evidenceId: string;
    rbId: string;
  },
) {
  await freezeBundle(s, opts.rbId, [opts.evidenceId]);
  const evaluated = await s.evaluateClaim.execute({
    claimEvaluationId: opts.claimId,
    idempotencyKey: `idem-eval-${opts.claimId}`,
    actor: SYSTEM,
    claimType: "technique",
    claimStatement: "Support maturity proposal",
    criticality: "non_critical",
    evaluationMethod: "deterministic",
    requiredEvidenceRefs: [opts.evidenceId],
    reviewBundleId: opts.rbId,
    reviewBundleVersion: 2,
  });
  expect(evaluated.ok).toBe(true);
  if (!evaluated.ok) return null;
  return evaluated.claimEvaluation;
}

async function seedProposedMaturity(
  s: ReturnType<typeof buildServices>,
  opts: {
    matId: string;
    claimId: string;
    evidenceId: string;
    rbId: string;
    requestedLevel?: "DOCUMENTED" | "VALIDATED" | "MODELED";
  },
) {
  const claim = await seedPassClaim(s, opts);
  expect(claim).toBeTruthy();
  const proposed = await s.proposeMaturity.execute({
    maturityAssessmentId: opts.matId,
    idempotencyKey: `idem-mat-${opts.matId}`,
    actor: SYSTEM,
    projectId: "prj:campus360-oa",
    subjectRef: "pack:v3-native-option-a-modeled",
    requestedLevel: opts.requestedLevel ?? "MODELED",
    claimBindings: [
      {
        claimEvaluationId: opts.claimId,
        claimEvaluationVersion: claim!.version,
      },
    ],
    reviewBundleRefs: [{ reviewBundleId: opts.rbId, version: 2 }],
    evidenceRefs: [opts.evidenceId],
  });
  expect(proposed.ok).toBe(true);
  if (!proposed.ok) return null;
  return proposed.maturityAssessment;
}

async function seedConfirmedMaturity(
  s: ReturnType<typeof buildServices>,
  opts: {
    matId: string;
    claimId: string;
    evidenceId: string;
    rbId: string;
  },
) {
  const mat = await seedProposedMaturity(s, {
    ...opts,
    requestedLevel: "VALIDATED",
  });
  expect(mat).toBeTruthy();
  s.fakeClaimAuthority.grant({
    actorId: REVIEWER.actorId,
    level: "N2",
    scope: "oa.maturity_assessment",
  });
  const confirmed = await s.confirmMaturity.execute({
    maturityAssessmentId: opts.matId,
    idempotencyKey: `idem-confirm-${opts.matId}`,
    actor: REVIEWER,
    expectedVersion: mat!.version,
  });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) return null;
  return confirmed.maturityAssessment;
}

describe("T-A6-D5 RecommendNextGate — contract / fail-closed", () => {
  it("refuses empty sources", async () => {
    const s = buildServices();
    const result = await s.recommendNextGate.execute({
      projectId: "prj:campus360-oa",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("COORDINATION_NO_SOURCES");
  });

  it("refuses auto-launch next cycle / T-A7", async () => {
    const s = buildServices();
    const result = await s.recommendNextGate.execute({
      projectId: "prj:campus360-oa",
      evidenceRefs: [{ id: "ev:any", version: 1 }],
      attemptAutoLaunchNextCycle: true,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("T_A7_AUTO_LAUNCH_FORBIDDEN");
    expect(result.error.errorCode).toBe("T_A7_AUTO_LAUNCH_FORBIDDEN");
  });

  it("refuses secret in actor displayName", async () => {
    const s = buildServices();
    const result = await s.recommendNextGate.execute({
      projectId: "prj:campus360-oa",
      evidenceRefs: [{ id: "ev:any", version: 1 }],
      actor: {
        actorId: "actor:bad",
        role: "system",
        authorityLevel: "none",
        displayName: "token=sk-secret-leak",
      },
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("COORDINATION_SECRET_FORBIDDEN");
  });
});

describe("T-A6-D5 RecommendNextGate — read-only / coherence", () => {
  it("does not mutate D1–D4 repositories", async () => {
    const s = buildServices();
    const mat = await seedProposedMaturity(s, {
      matId: "mat:d5-ro-001",
      claimId: "clm:d5-ro-001",
      evidenceId: "ev:d5-ro-001",
      rbId: "rb:d5-ro-001",
    });
    expect(mat).toBeTruthy();

    const beforeEv = await s.repository.findById("ev:d5-ro-001");
    const beforeRb = await s.reviewBundleRepository.findById("rb:d5-ro-001");
    const beforeCl = await s.claimEvaluationRepository.findById("clm:d5-ro-001");
    const beforeMat = await s.maturityAssessmentRepository.findById(
      "mat:d5-ro-001",
    );

    const result = await s.recommendNextGate.execute({
      projectId: "prj:campus360-oa",
      subjectRef: "pack:v3-native-option-a-modeled",
      maturityAssessmentId: "mat:d5-ro-001",
      maturityAssessmentVersion: mat!.version,
    });
    expect(result.ok).toBe(true);

    const afterEv = await s.repository.findById("ev:d5-ro-001");
    const afterRb = await s.reviewBundleRepository.findById("rb:d5-ro-001");
    const afterCl = await s.claimEvaluationRepository.findById("clm:d5-ro-001");
    const afterMat = await s.maturityAssessmentRepository.findById(
      "mat:d5-ro-001",
    );

    expect(afterEv).toEqual(beforeEv);
    expect(afterRb).toEqual(beforeRb);
    expect(afterCl).toEqual(beforeCl);
    expect(afterMat).toEqual(beforeMat);
  });

  it("returns defensive copies of blockers/gaps/snapshots", async () => {
    const s = buildServices();
    const mat = await seedProposedMaturity(s, {
      matId: "mat:d5-copy-001",
      claimId: "clm:d5-copy-001",
      evidenceId: "ev:d5-copy-001",
      rbId: "rb:d5-copy-001",
    });
    const result = await s.recommendNextGate.execute({
      projectId: "prj:campus360-oa",
      maturityAssessmentId: "mat:d5-copy-001",
      maturityAssessmentVersion: mat!.version,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const snaps = result.coordination.sourceSnapshots;
    const blockers = result.coordination.blockers;
    snaps.push({
      kind: "evidence",
      id: "ev:mutated",
      version: 99,
      status: "hacked",
    });
    blockers.push({ code: "source_missing" });
    const again = await s.recommendNextGate.execute({
      projectId: "prj:campus360-oa",
      maturityAssessmentId: "mat:d5-copy-001",
      maturityAssessmentVersion: mat!.version,
    });
    expect(again.ok).toBe(true);
    if (!again.ok) return;
    expect(
      again.coordination.sourceSnapshots.some((x) => x.id === "ev:mutated"),
    ).toBe(false);
  });

  it("flags missing claim and version mismatch", async () => {
    const s = buildServices();
    const missing = await s.recommendNextGate.execute({
      projectId: "prj:campus360-oa",
      claimEvaluationRefs: [{ id: "clm:missing", version: 1 }],
    });
    expect(missing.ok).toBe(true);
    if (!missing.ok) return;
    expect(missing.coordination.blockers.some((b) => b.code === "source_missing")).toBe(
      true,
    );
    expect(missing.coordination.nextGate).toBeUndefined();
    expect(missing.coordination.executionAuthority).toBe(false);
    expect(missing.coordination.gateConsumed).toBe(false);
    expect(missing.coordination.decisionCreated).toBe(false);
    expect(missing.coordination.kind).toBe("recommendation");

    const claim = await seedPassClaim(s, {
      claimId: "clm:d5-ver-001",
      evidenceId: "ev:d5-ver-001",
      rbId: "rb:d5-ver-001",
    });
    const badVer = await s.recommendNextGate.execute({
      projectId: "prj:campus360-oa",
      claimEvaluationRefs: [
        { id: "clm:d5-ver-001", version: claim!.version + 99 },
      ],
    });
    expect(badVer.ok).toBe(true);
    if (!badVer.ok) return;
    expect(
      badVer.coordination.blockers.some((b) => b.code === "version_mismatch"),
    ).toBe(true);
    expect(badVer.coordination.status).not.toBe("gate_candidate");
  });

  it("is deterministic regardless of claim ref order", async () => {
    const s = buildServices();
    const c1 = await seedPassClaim(s, {
      claimId: "clm:d5-ord-a",
      evidenceId: "ev:d5-ord-a",
      rbId: "rb:d5-ord-a",
    });
    const c2 = await seedPassClaim(s, {
      claimId: "clm:d5-ord-b",
      evidenceId: "ev:d5-ord-b",
      rbId: "rb:d5-ord-b",
    });
    const a = await s.recommendNextGate.execute({
      projectId: "prj:campus360-oa",
      claimEvaluationRefs: [
        { id: "clm:d5-ord-a", version: c1!.version },
        { id: "clm:d5-ord-b", version: c2!.version },
      ],
    });
    const b = await s.recommendNextGate.execute({
      projectId: "prj:campus360-oa",
      claimEvaluationRefs: [
        { id: "clm:d5-ord-b", version: c2!.version },
        { id: "clm:d5-ord-a", version: c1!.version },
      ],
    });
    expect(a.ok && b.ok).toBe(true);
    if (!a.ok || !b.ok) return;
    expect(a.coordination.status).toBe(b.coordination.status);
    expect(a.coordination.blockers).toEqual(b.coordination.blockers);
    expect(a.coordination.gaps.map((g) => g.code)).toEqual(
      b.coordination.gaps.map((g) => g.code),
    );
    expect(a.coordination.nextAction?.actionCode).toBe(
      b.coordination.nextAction?.actionCode,
    );
  });
});

describe("T-A6-D5 RecommendNextGate — recommendations", () => {
  it("recommends confirm_maturity for proposed coherent chain (no gate consumed)", async () => {
    const s = buildServices();
    const mat = await seedProposedMaturity(s, {
      matId: "mat:d5-prop-001",
      claimId: "clm:d5-prop-001",
      evidenceId: "ev:d5-prop-001",
      rbId: "rb:d5-prop-001",
    });
    const result = await s.recommendNextGate.execute({
      projectId: "prj:campus360-oa",
      subjectRef: "pack:v3-native-option-a-modeled",
      maturityAssessmentId: "mat:d5-prop-001",
      maturityAssessmentVersion: mat!.version,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.coordination.status).toBe("requires_human_decision");
    expect(result.coordination.nextAction?.actionCode).toBe("confirm_maturity");
    expect(result.coordination.nextAction?.kind).toBe("recommendation");
    expect(result.coordination.nextGate).toBeUndefined();
    expect(result.coordination.executionAuthority).toBe(false);
    expect(result.coordination.gateConsumed).toBe(false);
    expect(result.coordination.decisionCreated).toBe(false);
    expect(
      result.coordination.gaps.some((g) => g.code === "c1_c4_not_validated"),
    ).toBe(true);
  });

  it("emits gate_candidate solicit Morris GO when maturity confirmed (never consumed)", async () => {
    const s = buildServices();
    const mat = await seedConfirmedMaturity(s, {
      matId: "mat:d5-conf-001",
      claimId: "clm:d5-conf-001",
      evidenceId: "ev:d5-conf-001",
      rbId: "rb:d5-conf-001",
    });
    const result = await s.recommendNextGate.execute({
      projectId: "prj:campus360-oa",
      subjectRef: "pack:v3-native-option-a-modeled",
      maturityAssessmentId: "mat:d5-conf-001",
      maturityAssessmentVersion: mat!.version,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.coordination.status).toBe("gate_candidate");
    expect(result.coordination.nextGate?.gateCode).toBe(
      "SOLICIT_MORRIS_GO_FOR_NEXT_CYCLE",
    );
    expect(result.coordination.nextGate?.kind).toBe("recommendation");
    expect(result.coordination.nextGate?.gateConsumed).toBe(false);
    expect(result.coordination.nextGate?.decisionCreated).toBe(false);
    expect(result.coordination.nextGate?.authorityRequired).toBe("morris");
    expect(result.coordination.executionAuthority).toBe(false);
    expect(result.coordination.authorityRequirement.morrisRequired).toBe(true);
  });

  it("blocks on HARD reservation / R-M01 OPEN without closing it", async () => {
    const s = buildServices();
    const mat = await seedProposedMaturity(s, {
      matId: "mat:d5-hard-001",
      claimId: "clm:d5-hard-001",
      evidenceId: "ev:d5-hard-001",
      rbId: "rb:d5-hard-001",
    });
    const result = await s.recommendNextGate.execute({
      projectId: "prj:campus360-oa",
      maturityAssessmentId: "mat:d5-hard-001",
      maturityAssessmentVersion: mat!.version,
      openHardReservationRefs: ["R-M01"],
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.coordination.status).toBe("blocked");
    expect(
      result.coordination.blockers.some((b) => b.code === "hard_reservation_open"),
    ).toBe(true);
    expect(result.coordination.gaps.some((g) => g.code === "r_m01_open")).toBe(
      true,
    );
    expect(result.coordination.nextAction?.actionCode).toBe(
      "solicit_morris_arbitration",
    );
    expect(result.coordination.nextGate).toBeUndefined();
    // Maturity unchanged — reserve not closed
    const still = await s.maturityAssessmentRepository.findById("mat:d5-hard-001");
    expect(still?.status).toBe("proposed");
  });

  it("never recommends positively for disputed claim", async () => {
    const s = buildServices();
    s.fakeClaimAuthority.grant({
      actorId: REVIEWER.actorId,
      level: "N2",
      scope: "oa.claim_evaluation",
    });
    await freezeBundle(s, "rb:d5-disp-001", ["ev:d5-disp-001"]);
    const disputed = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:d5-disp-001",
      idempotencyKey: "idem-eval-disp",
      actor: REVIEWER,
      claimType: "technique",
      claimStatement: "Digest contested",
      criticality: "critical",
      evaluationMethod: "human_review",
      requiredEvidenceRefs: ["ev:d5-disp-001"],
      reviewBundleId: "rb:d5-disp-001",
      reviewBundleVersion: 2,
      intent: "dispute",
      disputeReason: "provenance contested",
    });
    expect(disputed.ok).toBe(true);
    if (!disputed.ok) return;
    expect(disputed.claimEvaluation.status).toBe("disputed");

    const result = await s.recommendNextGate.execute({
      projectId: "prj:campus360-oa",
      claimEvaluationRefs: [
        {
          id: "clm:d5-disp-001",
          version: disputed.claimEvaluation.version,
        },
      ],
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(
      result.coordination.blockers.some((b) => b.code === "claim_disputed"),
    ).toBe(true);
    expect(result.coordination.status).toBe("blocked");
    expect(result.coordination.nextGate).toBeUndefined();
    expect(result.coordination.nextAction?.actionCode).toBe("resolve_dispute");
    expect(result.coordination.executionAuthority).toBe(false);
  });
});
