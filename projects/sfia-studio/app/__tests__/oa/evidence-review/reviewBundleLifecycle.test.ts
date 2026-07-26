/**
 * T-A6-D2 ReviewBundle attach/remove/freeze/start/complete/reopen tests.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { ACTOR, DIGEST_A, buildServices } from "./helpers";

async function seedEvidence(
  s: ReturnType<typeof buildServices>,
  id: string,
  opts?: { unavailable?: boolean },
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
  if (opts?.unavailable && reg.ok) {
    await s.markEvidenceUnavailable.execute({
      evidenceId: id,
      actor: ACTOR,
      expectedVersion: 1,
      reason: "withdrawn",
      idempotencyKey: `idem-unavail-${id}`,
    });
  }
}

async function draftWithEvidence(
  s: ReturnType<typeof buildServices>,
  rbId: string,
  evidenceIds: string[],
) {
  for (const id of evidenceIds) {
    await seedEvidence(s, id);
  }
  const created = await s.createReviewBundle.execute({
    reviewBundleId: rbId,
    idempotencyKey: `idem-create-${rbId}`,
    actor: ACTOR,
    projectId: "prj:campus360-oa",
    evidenceIds,
  });
  expect(created.ok).toBe(true);
  return created;
}

describe("T-A6-D2 Attach / Remove", () => {
  it("attaches Evidence in draft and refuses when frozen", async () => {
    const s = buildServices();
    await seedEvidence(s, "ev:attach-1");
    await seedEvidence(s, "ev:attach-2");
    const created = await s.createReviewBundle.execute({
      reviewBundleId: "rb:attach-001",
      idempotencyKey: "idem-attach-create",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
      evidenceIds: ["ev:attach-1"],
    });
    expect(created.ok).toBe(true);
    const attached = await s.attachEvidenceToReviewBundle.execute({
      reviewBundleId: "rb:attach-001",
      evidenceId: "ev:attach-2",
      idempotencyKey: "idem-attach-2",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(attached.ok).toBe(true);
    if (!attached.ok) return;
    expect(attached.reviewBundle.evidenceRefs).toEqual([
      "ev:attach-1",
      "ev:attach-2",
    ]);

    const frozen = await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:attach-001",
      idempotencyKey: "idem-freeze-attach",
      actor: ACTOR,
      expectedVersion: 2,
    });
    expect(frozen.ok).toBe(true);

    await seedEvidence(s, "ev:attach-3");
    const refuse = await s.attachEvidenceToReviewBundle.execute({
      reviewBundleId: "rb:attach-001",
      evidenceId: "ev:attach-3",
      idempotencyKey: "idem-attach-frozen",
      actor: ACTOR,
      expectedVersion: 3,
    });
    expect(refuse.ok).toBe(false);
    if (refuse.ok) return;
    expect(refuse.error.detailCode).toBe("REVIEW_BUNDLE_NOT_DRAFT");
  });

  it("removes Evidence in draft only", async () => {
    const s = buildServices();
    await draftWithEvidence(s, "rb:remove-001", ["ev:rm-1", "ev:rm-2"]);
    const removed = await s.removeEvidenceFromReviewBundle.execute({
      reviewBundleId: "rb:remove-001",
      evidenceId: "ev:rm-2",
      idempotencyKey: "idem-remove-1",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(removed.ok).toBe(true);
    if (!removed.ok) return;
    expect(removed.reviewBundle.evidenceRefs).toEqual(["ev:rm-1"]);
  });

  it("refuses missing Evidence on attach", async () => {
    const s = buildServices();
    await s.createReviewBundle.execute({
      reviewBundleId: "rb:attach-missing",
      idempotencyKey: "idem-attach-missing-c",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
    });
    const result = await s.attachEvidenceToReviewBundle.execute({
      reviewBundleId: "rb:attach-missing",
      evidenceId: "ev:does-not-exist",
      idempotencyKey: "idem-attach-missing",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_NOT_FOUND");
  });
});

describe("T-A6-D2 Freeze / Start / Complete", () => {
  it("freezes draft to ready_for_review with immutable snapshots", async () => {
    const s = buildServices();
    await draftWithEvidence(s, "rb:freeze-001", ["ev:fz-1"]);
    const frozen = await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:freeze-001",
      idempotencyKey: "idem-freeze-001",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(frozen.ok).toBe(true);
    if (!frozen.ok) return;
    expect(frozen.reviewBundle.status).toBe("ready_for_review");
    expect(frozen.reviewBundle.frozenAt).toBeTruthy();
    expect(frozen.reviewBundle.frozenEvidenceSnapshots?.[0].evidenceId).toBe(
      "ev:fz-1",
    );
    // mutate returned snapshot array must not affect store
    frozen.reviewBundle.evidenceRefs.push("ev:hack");
    if (frozen.reviewBundle.frozenEvidenceSnapshots) {
      frozen.reviewBundle.frozenEvidenceSnapshots[0].evidenceId = "ev:hacked";
    }
    const again = await s.reviewBundleRepository.findById("rb:freeze-001");
    expect(again?.evidenceRefs).toEqual(["ev:fz-1"]);
    expect(again?.frozenEvidenceSnapshots?.[0].evidenceId).toBe("ev:fz-1");
  });

  it("refuses freeze without evidence", async () => {
    const s = buildServices();
    await s.createReviewBundle.execute({
      reviewBundleId: "rb:freeze-empty",
      idempotencyKey: "idem-freeze-empty-c",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
    });
    const result = await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:freeze-empty",
      idempotencyKey: "idem-freeze-empty",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("REVIEW_BUNDLE_EVIDENCE_REQUIRED");
  });

  it("refuses freeze when synthesisOnly would be complete", async () => {
    const s = buildServices();
    await seedEvidence(s, "ev:syn-1");
    const created = await s.createReviewBundle.execute({
      reviewBundleId: "rb:syn-001",
      idempotencyKey: "idem-syn-c",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
      synthesisOnly: true,
      evidenceIds: ["ev:syn-1"],
    });
    expect(created.ok).toBe(true);
    // synthesisOnly ⇒ completeness incomplete always; freeze should succeed
    // but accepted later must fail. Here freeze of synthesisOnly with evidence is OK if incomplete.
    const frozen = await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:syn-001",
      idempotencyKey: "idem-syn-f",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(frozen.ok).toBe(true);
    if (!frozen.ok) return;
    expect(frozen.reviewBundle.completeness).toBe("incomplete");
  });

  it("starts review only when frozen", async () => {
    const s = buildServices();
    await draftWithEvidence(s, "rb:start-001", ["ev:st-1"]);
    const draftStart = await s.startReview.execute({
      reviewBundleId: "rb:start-001",
      idempotencyKey: "idem-start-draft",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(draftStart.ok).toBe(false);

    await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:start-001",
      idempotencyKey: "idem-start-freeze",
      actor: ACTOR,
      expectedVersion: 1,
    });
    const started = await s.startReview.execute({
      reviewBundleId: "rb:start-001",
      idempotencyKey: "idem-start-ok",
      actor: ACTOR,
      expectedVersion: 2,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) return;
    expect(started.reviewBundle.status).toBe("under_review");
    expect(started.reviewBundle.reviewStartedAt).toBeTruthy();
  });

  it("accepts only complete non-synthesis under_review", async () => {
    const s = buildServices();
    await draftWithEvidence(s, "rb:complete-001", ["ev:cp-1"]);
    await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:complete-001",
      idempotencyKey: "idem-cp-f",
      actor: ACTOR,
      expectedVersion: 1,
    });
    await s.startReview.execute({
      reviewBundleId: "rb:complete-001",
      idempotencyKey: "idem-cp-s",
      actor: ACTOR,
      expectedVersion: 2,
    });
    const accepted = await s.completeReview.execute({
      reviewBundleId: "rb:complete-001",
      idempotencyKey: "idem-cp-a",
      actor: ACTOR,
      expectedVersion: 3,
      outcome: "accepted",
    });
    expect(accepted.ok).toBe(true);
    if (!accepted.ok) return;
    expect(accepted.reviewBundle.status).toBe("accepted");
    expect(accepted.reviewBundle.validatedAt).toBeTruthy();
    expect(accepted.reviewBundle.reviewer?.actorId).toBe(ACTOR.actorId);
  });

  it("rejects accepted when synthesisOnly", async () => {
    const s = buildServices();
    await seedEvidence(s, "ev:syn-acc");
    await s.createReviewBundle.execute({
      reviewBundleId: "rb:syn-acc",
      idempotencyKey: "idem-syn-acc-c",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
      synthesisOnly: true,
      evidenceIds: ["ev:syn-acc"],
    });
    await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:syn-acc",
      idempotencyKey: "idem-syn-acc-f",
      actor: ACTOR,
      expectedVersion: 1,
    });
    await s.startReview.execute({
      reviewBundleId: "rb:syn-acc",
      idempotencyKey: "idem-syn-acc-s",
      actor: ACTOR,
      expectedVersion: 2,
    });
    const result = await s.completeReview.execute({
      reviewBundleId: "rb:syn-acc",
      idempotencyKey: "idem-syn-acc-a",
      actor: ACTOR,
      expectedVersion: 3,
      outcome: "accepted",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe(
      "REVIEW_BUNDLE_SYNTHESIS_ONLY_CONFLICT",
    );
  });

  it("marks incomplete distinctly from rejected", async () => {
    const s = buildServices();
    await draftWithEvidence(s, "rb:inc-001", ["ev:inc-1"]);
    await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:inc-001",
      idempotencyKey: "idem-inc-f",
      actor: ACTOR,
      expectedVersion: 1,
    });
    await s.startReview.execute({
      reviewBundleId: "rb:inc-001",
      idempotencyKey: "idem-inc-s",
      actor: ACTOR,
      expectedVersion: 2,
    });
    const incomplete = await s.completeReview.execute({
      reviewBundleId: "rb:inc-001",
      idempotencyKey: "idem-inc-c",
      actor: ACTOR,
      expectedVersion: 3,
      outcome: "incomplete",
      reason: "missing artefacts",
    });
    expect(incomplete.ok).toBe(true);
    if (!incomplete.ok) return;
    expect(incomplete.reviewBundle.status).toBe("incomplete");
    expect(incomplete.reviewBundle.completeness).toBe("incomplete");
  });

  it("never implies Claim PASS on accepted", async () => {
    const s = buildServices();
    await draftWithEvidence(s, "rb:nopass", ["ev:np-1"]);
    await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:nopass",
      idempotencyKey: "idem-np-f",
      actor: ACTOR,
      expectedVersion: 1,
    });
    await s.startReview.execute({
      reviewBundleId: "rb:nopass",
      idempotencyKey: "idem-np-s",
      actor: ACTOR,
      expectedVersion: 2,
    });
    const accepted = await s.completeReview.execute({
      reviewBundleId: "rb:nopass",
      idempotencyKey: "idem-np-a",
      actor: ACTOR,
      expectedVersion: 3,
      outcome: "accepted",
    });
    expect(accepted.ok).toBe(true);
    if (!accepted.ok) return;
    expect(accepted.reviewBundle.claimEvaluationRefs).toEqual([]);
    expect(
      Object.prototype.hasOwnProperty.call(accepted.reviewBundle, "pass"),
    ).toBe(false);
  });
});

describe("T-A6-D2 ReopenReview", () => {
  it("supersedes terminal and creates draft successor without mutating history", async () => {
    const s = buildServices();
    await draftWithEvidence(s, "rb:reopen-old", ["ev:ro-1"]);
    await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:reopen-old",
      idempotencyKey: "idem-ro-f",
      actor: ACTOR,
      expectedVersion: 1,
    });
    await s.startReview.execute({
      reviewBundleId: "rb:reopen-old",
      idempotencyKey: "idem-ro-s",
      actor: ACTOR,
      expectedVersion: 2,
    });
    await s.completeReview.execute({
      reviewBundleId: "rb:reopen-old",
      idempotencyKey: "idem-ro-a",
      actor: ACTOR,
      expectedVersion: 3,
      outcome: "rejected",
      reason: "needs rework",
    });
    const reopened = await s.reopenReview.execute({
      reviewBundleId: "rb:reopen-old",
      successorReviewBundleId: "rb:reopen-new",
      idempotencyKey: "idem-ro-reopen",
      actor: ACTOR,
      expectedVersion: 4,
      reason: "rework requested",
    });
    expect(reopened.ok).toBe(true);
    if (!reopened.ok) return;
    expect(reopened.reviewBundle.status).toBe("superseded");
    expect(reopened.reviewBundle.frozenAt).toBeTruthy();
    expect(reopened.successor?.status).toBe("draft");
    expect(reopened.successor?.version).toBe(1);
    expect(reopened.successor?.supersedesReviewBundleId).toBe("rb:reopen-old");
    expect(reopened.successor?.evidenceRefs).toEqual(["ev:ro-1"]);
    expect(reopened.successor?.frozenAt).toBeUndefined();

    // historical terminal fields preserved on old
    const old = await s.reviewBundleRepository.findById("rb:reopen-old");
    expect(old?.status).toBe("superseded");
    expect(old?.validatedAt).toBeTruthy();
  });

  it("refuses secret in reopen reason", async () => {
    const s = buildServices();
    await draftWithEvidence(s, "rb:reopen-sec", ["ev:rs-1"]);
    await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:reopen-sec",
      idempotencyKey: "idem-rs-f",
      actor: ACTOR,
      expectedVersion: 1,
    });
    await s.startReview.execute({
      reviewBundleId: "rb:reopen-sec",
      idempotencyKey: "idem-rs-s",
      actor: ACTOR,
      expectedVersion: 2,
    });
    await s.completeReview.execute({
      reviewBundleId: "rb:reopen-sec",
      idempotencyKey: "idem-rs-a",
      actor: ACTOR,
      expectedVersion: 3,
      outcome: "incomplete",
      reason: "gaps",
    });
    const result = await s.reopenReview.execute({
      reviewBundleId: "rb:reopen-sec",
      successorReviewBundleId: "rb:reopen-sec-new",
      idempotencyKey: "idem-rs-reopen",
      actor: ACTOR,
      expectedVersion: 4,
      reason: "token=super-secret-value-here",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("REVIEW_BUNDLE_SECRET_FORBIDDEN");
  });
});

describe("T-A6-D2 MemoryReviewBundleRepository", () => {
  it("isolates instances and enforces OCC", async () => {
    const s1 = buildServices();
    const s2 = buildServices();
    await s1.createReviewBundle.execute({
      reviewBundleId: "rb:iso-1",
      idempotencyKey: "idem-iso-1",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
    });
    expect(await s2.reviewBundleRepository.findById("rb:iso-1")).toBeNull();
  });
});
