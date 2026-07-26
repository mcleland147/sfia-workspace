/**
 * T-A6-D3 ClaimEvaluation — domain + Evaluate/Confirm/Reject lifecycle tests.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import type { ActorReference } from "@/lib/oa/evidence-review";
import { FakeClaimAuthority } from "@/lib/oa/evidence-review";
import { ACTOR, DIGEST_A, DIGEST_B, buildServices } from "./helpers";

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
  if (!verified.ok) return;
  expect(verified.evidence.status).toBe("verified");
}

async function freezeBundle(
  s: ReturnType<typeof buildServices>,
  rbId: string,
  evidenceIds: string[],
) {
  for (const id of evidenceIds) {
    await seedVerifiedEvidence(s, id);
  }
  const created = await s.createReviewBundle.execute({
    reviewBundleId: rbId,
    idempotencyKey: `idem-create-${rbId}`,
    actor: ACTOR,
    projectId: "prj:campus360-oa",
    evidenceIds,
  });
  expect(created.ok).toBe(true);
  const frozen = await s.freezeReviewBundle.execute({
    reviewBundleId: rbId,
    idempotencyKey: `idem-freeze-${rbId}`,
    actor: ACTOR,
    expectedVersion: 1,
  });
  expect(frozen.ok).toBe(true);
  if (!frozen.ok) return null;
  expect(frozen.reviewBundle.frozenVersion).toBe(2);
  return frozen.reviewBundle;
}

describe("T-A6-D3 EvaluateClaim — PASS fail-closed", () => {
  it("non_critical deterministic PASS with verified Evidence in snapshot", async () => {
    const s = buildServices();
    const bundle = await freezeBundle(s, "rb:clm-pass", ["ev:clm-pass-1"]);
    expect(bundle).toBeTruthy();
    const result = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:pass-001",
      idempotencyKey: "idem-clm-pass-001",
      actor: SYSTEM,
      claimType: "technique",
      claimStatement: "Schema examples validate under ajv",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: ["ev:clm-pass-1"],
      reviewBundleId: "rb:clm-pass",
      reviewBundleVersion: 2,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.claimEvaluation.status).toBe("pass");
    expect(result.claimEvaluation.confirmationAuthority).toBe(
      "system_deterministic",
    );
    expect(result.claimEvaluation.providedEvidenceRefs).toEqual([
      "ev:clm-pass-1",
    ]);
    expect(result.claimEvaluation.version).toBe(1);
  });

  it("never PASS with empty requiredEvidenceRefs", async () => {
    const s = buildServices();
    await freezeBundle(s, "rb:clm-empty", ["ev:clm-empty-1"]);
    const result = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:empty-001",
      idempotencyKey: "idem-clm-empty",
      actor: SYSTEM,
      claimType: "technique",
      claimStatement: "Empty required refs",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: [],
      reviewBundleId: "rb:clm-empty",
      reviewBundleVersion: 2,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.claimEvaluation.status).toBe("not_proven");
    expect(result.claimEvaluation.status).not.toBe("pass");
  });

  it("Evidence outside snapshot ⇒ not_proven", async () => {
    const s = buildServices();
    await freezeBundle(s, "rb:clm-out", ["ev:clm-out-1"]);
    await seedVerifiedEvidence(s, "ev:clm-out-2");
    const result = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:out-001",
      idempotencyKey: "idem-clm-out",
      actor: SYSTEM,
      claimType: "technique",
      claimStatement: "Outside snapshot",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: ["ev:clm-out-2"],
      reviewBundleId: "rb:clm-out",
      reviewBundleVersion: 2,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.claimEvaluation.status).toBe("not_proven");
    expect(
      result.claimEvaluation.evidenceAssessments?.[0]?.code,
    ).toBe("not_in_bundle");
  });

  it("unavailable Evidence cannot PASS", async () => {
    const s = buildServices();
    await seedVerifiedEvidence(s, "ev:clm-unavail");
    // Mark unavailable before freeze so snapshot captures unavailable.
    const ev = await s.repository.findById("ev:clm-unavail");
    expect(ev?.version).toBe(2);
    await s.markEvidenceUnavailable.execute({
      evidenceId: "ev:clm-unavail",
      actor: ACTOR,
      expectedVersion: 2,
      reason: "withdrawn",
      idempotencyKey: "idem-mark-unavail",
    });
    await s.createReviewBundle.execute({
      reviewBundleId: "rb:clm-unavail",
      idempotencyKey: "idem-rb-unavail",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
      evidenceIds: ["ev:clm-unavail"],
    });
    await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:clm-unavail",
      idempotencyKey: "idem-fz-unavail",
      actor: ACTOR,
      expectedVersion: 1,
    });
    const result = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:unavail-001",
      idempotencyKey: "idem-clm-unavail",
      actor: SYSTEM,
      claimType: "technique",
      claimStatement: "Unavailable evidence",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: ["ev:clm-unavail"],
      reviewBundleId: "rb:clm-unavail",
      reviewBundleVersion: 2,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.claimEvaluation.status).toBe("not_proven");
    expect(result.claimEvaluation.evidenceAssessments?.[0]?.code).toBe(
      "unavailable",
    );
  });

  it("non-verified Evidence cannot PASS", async () => {
    const s = buildServices();
    await s.registerEvidence.execute({
      evidenceId: "ev:clm-unverified",
      idempotencyKey: "idem-ev-unverified",
      actor: ACTOR,
      type: "document",
      source: "fixture",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "internal",
      storageMode: "metadata_only",
      digest: DIGEST_B,
    });
    await s.createReviewBundle.execute({
      reviewBundleId: "rb:clm-unverified",
      idempotencyKey: "idem-rb-unverified",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
      evidenceIds: ["ev:clm-unverified"],
    });
    await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:clm-unverified",
      idempotencyKey: "idem-fz-unverified",
      actor: ACTOR,
      expectedVersion: 1,
    });
    const result = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:unverified-001",
      idempotencyKey: "idem-clm-unverified",
      actor: SYSTEM,
      claimType: "technique",
      claimStatement: "Unverified evidence",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: ["ev:clm-unverified"],
      reviewBundleId: "rb:clm-unverified",
      reviewBundleVersion: 2,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.claimEvaluation.status).toBe("not_proven");
    expect(result.claimEvaluation.evidenceAssessments?.[0]?.code).toBe(
      "not_verified",
    );
  });

  it("wrong ReviewBundle frozen version rejected", async () => {
    const s = buildServices();
    await freezeBundle(s, "rb:clm-ver", ["ev:clm-ver-1"]);
    const result = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:ver-001",
      idempotencyKey: "idem-clm-ver",
      actor: SYSTEM,
      claimType: "technique",
      claimStatement: "Wrong version",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: ["ev:clm-ver-1"],
      reviewBundleId: "rb:clm-ver",
      reviewBundleVersion: 99,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe(
      "CLAIM_REVIEW_BUNDLE_VERSION_MISMATCH",
    );
  });
});

describe("T-A6-D3 ConfirmClaimEvaluation — authority", () => {
  it("Critical requires human confirm; system cannot confirm; self-review forbidden", async () => {
    const s = buildServices();
    s.fakeClaimAuthority.grant({
      actorId: REVIEWER.actorId,
      level: "N2",
      scope: "oa.claim_evaluation",
    });
    await freezeBundle(s, "rb:clm-crit", ["ev:clm-crit-1"]);
    const evaluated = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:crit-001",
      idempotencyKey: "idem-clm-crit-eval",
      actor: REVIEWER,
      claimType: "securite",
      claimStatement: "Evidence metadata remains clear of credentials",
      criticality: "critical",
      evaluationMethod: "human_review",
      requiredEvidenceRefs: ["ev:clm-crit-1"],
      reviewBundleId: "rb:clm-crit",
      reviewBundleVersion: 2,
    });
    expect(evaluated.ok).toBe(true);
    if (!evaluated.ok) return;
    expect(evaluated.claimEvaluation.status).toBe("evaluating");

    const sysConfirm = await s.confirmClaimEvaluation.execute({
      claimEvaluationId: "clm:crit-001",
      idempotencyKey: "idem-clm-crit-sys",
      actor: SYSTEM,
      expectedVersion: 1,
    });
    expect(sysConfirm.ok).toBe(false);
    if (sysConfirm.ok) return;
    expect(sysConfirm.error.detailCode).toBe("CLAIM_AUTHORITY_FORBIDDEN");

    const selfConfirm = await s.confirmClaimEvaluation.execute({
      claimEvaluationId: "clm:crit-001",
      idempotencyKey: "idem-clm-crit-self",
      actor: REVIEWER,
      expectedVersion: 1,
    });
    expect(selfConfirm.ok).toBe(false);
    if (selfConfirm.ok) return;
    expect(selfConfirm.error.detailCode).toBe("CLAIM_SELF_REVIEW_FORBIDDEN");

    // Re-propose by system then confirm by reviewer
    const s2 = buildServices();
    s2.fakeClaimAuthority.grant({
      actorId: REVIEWER.actorId,
      level: "N2",
      scope: "oa.claim_evaluation",
    });
    await freezeBundle(s2, "rb:clm-crit2", ["ev:clm-crit-2"]);
    const proposed = await s2.evaluateClaim.execute({
      claimEvaluationId: "clm:crit-002",
      idempotencyKey: "idem-clm-crit2-eval",
      actor: SYSTEM,
      claimType: "securite",
      claimStatement: "Evidence metadata remains clear of credentials",
      criticality: "critical",
      evaluationMethod: "human_review",
      requiredEvidenceRefs: ["ev:clm-crit-2"],
      reviewBundleId: "rb:clm-crit2",
      reviewBundleVersion: 2,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const confirmed = await s2.confirmClaimEvaluation.execute({
      claimEvaluationId: "clm:crit-002",
      idempotencyKey: "idem-clm-crit2-confirm",
      actor: REVIEWER,
      expectedVersion: 1,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;
    expect(confirmed.claimEvaluation.status).toBe("pass");
    expect(confirmed.claimEvaluation.confirmationAuthority).toBe(
      "authorized_human",
    );
    expect(confirmed.claimEvaluation.confirmedBy?.actorId).toBe(
      REVIEWER.actorId,
    );
  });

  it("structural PASS requires Morris gate; N3 without morris denied", async () => {
    const auth = new FakeClaimAuthority();
    auth.grant({
      actorId: MORRIS.actorId,
      level: "N3",
      scope: "oa.claim_evaluation",
      canActAsMorris: false,
    });
    const s = buildServices();
    // override authority on evaluate/confirm by rebuilding with grant
    s.fakeClaimAuthority.grant({
      actorId: MORRIS.actorId,
      level: "N3",
      scope: "oa.claim_evaluation",
      canActAsMorris: false,
    });
    await freezeBundle(s, "rb:clm-str", ["ev:clm-str-1"]);
    const evaluated = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:str-001",
      idempotencyKey: "idem-clm-str-eval",
      actor: SYSTEM,
      claimType: "maturite_support",
      claimStatement: "Structural boundary sound",
      criticality: "structural",
      evaluationMethod: "human_review",
      requiredEvidenceRefs: ["ev:clm-str-1"],
      reviewBundleId: "rb:clm-str",
      reviewBundleVersion: 2,
    });
    expect(evaluated.ok).toBe(true);
    if (!evaluated.ok) return;
    const denied = await s.confirmClaimEvaluation.execute({
      claimEvaluationId: "clm:str-001",
      idempotencyKey: "idem-clm-str-deny",
      actor: MORRIS,
      expectedVersion: 1,
    });
    expect(denied.ok).toBe(false);
    if (denied.ok) return;
    expect(denied.error.detailCode).toBe("CLAIM_AUTHORITY_FORBIDDEN");

    s.fakeClaimAuthority.grant({
      actorId: "actor:morris-gate",
      level: "N3",
      scope: "oa.claim_evaluation",
      canActAsMorris: true,
    });
    const morrisGate: ActorReference = {
      actorId: "actor:morris-gate",
      role: "decision_maker",
      authorityLevel: "N3",
    };
    const confirmed = await s.confirmClaimEvaluation.execute({
      claimEvaluationId: "clm:str-001",
      idempotencyKey: "idem-clm-str-ok",
      actor: morrisGate,
      expectedVersion: 1,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;
    expect(confirmed.claimEvaluation.confirmationAuthority).toBe("morris");
  });
});

describe("T-A6-D3 Waiver / Dispute / Reject / Supersession", () => {
  it("waiver requires human; system refused; waiver ≠ PASS", async () => {
    const s = buildServices();
    s.fakeClaimAuthority.grant({
      actorId: MORRIS.actorId,
      level: "N2",
      scope: "oa.claim_evaluation",
    });
    await freezeBundle(s, "rb:clm-wav", ["ev:clm-wav-1"]);
    const sys = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:wav-sys",
      idempotencyKey: "idem-wav-sys",
      actor: SYSTEM,
      claimType: "conformite",
      claimStatement: "Defer tablet UX",
      criticality: "non_critical",
      evaluationMethod: "human_review",
      requiredEvidenceRefs: ["ev:clm-wav-1"],
      reviewBundleId: "rb:clm-wav",
      reviewBundleVersion: 2,
      intent: "waive",
      waiverReason: "UX-U01 deferred",
    });
    expect(sys.ok).toBe(false);
    if (sys.ok) return;
    expect(sys.error.detailCode).toBe("CLAIM_WAIVER_FORBIDDEN");

    const waived = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:wav-001",
      idempotencyKey: "idem-wav-ok",
      actor: MORRIS,
      claimType: "conformite",
      claimStatement: "Defer tablet UX",
      criticality: "non_critical",
      evaluationMethod: "human_review",
      requiredEvidenceRefs: ["ev:clm-wav-1"],
      reviewBundleId: "rb:clm-wav",
      reviewBundleVersion: 2,
      intent: "waive",
      waiverReason: "UX-U01 deferred",
    });
    expect(waived.ok).toBe(true);
    if (!waived.ok) return;
    expect(waived.claimEvaluation.status).toBe("waived");
    expect(waived.claimEvaluation.status).not.toBe("pass");
    expect(waived.claimEvaluation.waiver?.reversible).toBe(true);
  });

  it("dispute blocks confirmation", async () => {
    const s = buildServices();
    s.fakeClaimAuthority.grant({
      actorId: REVIEWER.actorId,
      level: "N2",
      scope: "oa.claim_evaluation",
    });
    await freezeBundle(s, "rb:clm-disp", ["ev:clm-disp-1"]);
    const disputed = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:disp-001",
      idempotencyKey: "idem-disp",
      actor: REVIEWER,
      claimType: "technique",
      claimStatement: "Digest contested",
      criticality: "critical",
      evaluationMethod: "human_review",
      requiredEvidenceRefs: ["ev:clm-disp-1"],
      reviewBundleId: "rb:clm-disp",
      reviewBundleVersion: 2,
      intent: "dispute",
      disputeReason: "provenance contested",
    });
    expect(disputed.ok).toBe(true);
    if (!disputed.ok) return;
    expect(disputed.claimEvaluation.status).toBe("disputed");
    const confirm = await s.confirmClaimEvaluation.execute({
      claimEvaluationId: "clm:disp-001",
      idempotencyKey: "idem-disp-confirm",
      actor: REVIEWER,
      expectedVersion: 1,
    });
    expect(confirm.ok).toBe(false);
    if (confirm.ok) return;
    expect(confirm.error.detailCode).toBe("CLAIM_DISPUTED");
  });

  it("reject evaluating → fail|not_proven", async () => {
    const s = buildServices();
    await freezeBundle(s, "rb:clm-rej", ["ev:clm-rej-1"]);
    const evaluated = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:rej-001",
      idempotencyKey: "idem-rej-eval",
      actor: SYSTEM,
      claimType: "qualite",
      claimStatement: "Coverage complete",
      criticality: "critical",
      evaluationMethod: "assisted",
      requiredEvidenceRefs: ["ev:clm-rej-1"],
      reviewBundleId: "rb:clm-rej",
      reviewBundleVersion: 2,
    });
    expect(evaluated.ok).toBe(true);
    if (!evaluated.ok) return;
    const rejected = await s.rejectClaimEvaluation.execute({
      claimEvaluationId: "clm:rej-001",
      idempotencyKey: "idem-rej",
      actor: REVIEWER,
      expectedVersion: 1,
      outcome: "not_proven",
      reason: "insufficient coverage",
    });
    expect(rejected.ok).toBe(true);
    if (!rejected.ok) return;
    expect(rejected.claimEvaluation.status).toBe("not_proven");
  });

  it("supersession creates new claim without mutating prior", async () => {
    const s = buildServices();
    await freezeBundle(s, "rb:clm-sup", ["ev:clm-sup-1"]);
    const first = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:sup-old",
      idempotencyKey: "idem-sup-old",
      actor: SYSTEM,
      claimType: "technique",
      claimStatement: "First evaluation",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: ["ev:clm-sup-1"],
      reviewBundleId: "rb:clm-sup",
      reviewBundleVersion: 2,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    const second = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:sup-new",
      idempotencyKey: "idem-sup-new",
      actor: SYSTEM,
      claimType: "technique",
      claimStatement: "Re-evaluation",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: ["ev:clm-sup-1"],
      reviewBundleId: "rb:clm-sup",
      reviewBundleVersion: 2,
      supersedesClaimEvaluationId: "clm:sup-old",
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.claimEvaluation.supersedesClaimEvaluationId).toBe(
      "clm:sup-old",
    );
    const old = await s.claimEvaluationRepository.findById("clm:sup-old");
    expect(old?.status).toBe("pass");
    expect(old?.version).toBe(1);
  });

  it("idempotent evaluate replay", async () => {
    const s = buildServices();
    await freezeBundle(s, "rb:clm-idem", ["ev:clm-idem-1"]);
    const req = {
      claimEvaluationId: "clm:idem-001",
      idempotencyKey: "idem-clm-same",
      actor: SYSTEM,
      claimType: "technique" as const,
      claimStatement: "Replay",
      criticality: "non_critical" as const,
      evaluationMethod: "deterministic" as const,
      requiredEvidenceRefs: ["ev:clm-idem-1"],
      reviewBundleId: "rb:clm-idem",
      reviewBundleVersion: 2,
    };
    const first = await s.evaluateClaim.execute(req);
    const second = await s.evaluateClaim.execute(req);
    expect(first.ok && second.ok).toBe(true);
    if (!first.ok || !second.ok) return;
    expect(second.reusedFromIdempotencyKey).toBe(true);
    expect(second.claimEvaluation.claimEvaluationId).toBe(
      first.claimEvaluation.claimEvaluationId,
    );
  });

  it("never creates MaturityAssessment fields", async () => {
    const s = buildServices();
    await freezeBundle(s, "rb:clm-mat", ["ev:clm-mat-1"]);
    const result = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:mat-001",
      idempotencyKey: "idem-mat",
      actor: SYSTEM,
      claimType: "technique",
      claimStatement: "No maturity",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: ["ev:clm-mat-1"],
      reviewBundleId: "rb:clm-mat",
      reviewBundleVersion: 2,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(
      Object.prototype.hasOwnProperty.call(
        result.claimEvaluation,
        "maturityAssessmentId",
      ),
    ).toBe(false);
    expect(
      Object.prototype.hasOwnProperty.call(result.claimEvaluation, "autoPromoted"),
    ).toBe(false);
  });
});
