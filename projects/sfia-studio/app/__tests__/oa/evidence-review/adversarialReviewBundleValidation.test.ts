/**
 * T-A6-D2 adversarial validation — freeze immutability, reopen atomicity,
 * unavailable completeness, actor secrets.
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

async function toAccepted(
  s: ReturnType<typeof buildServices>,
  rbId: string,
  evidenceId: string,
) {
  await seedEvidence(s, evidenceId);
  await s.createReviewBundle.execute({
    reviewBundleId: rbId,
    idempotencyKey: `idem-create-${rbId}`,
    actor: ACTOR,
    projectId: "prj:campus360-oa",
    evidenceIds: [evidenceId],
  });
  await s.freezeReviewBundle.execute({
    reviewBundleId: rbId,
    idempotencyKey: `idem-f-${rbId}`,
    actor: ACTOR,
    expectedVersion: 1,
  });
  await s.startReview.execute({
    reviewBundleId: rbId,
    idempotencyKey: `idem-s-${rbId}`,
    actor: ACTOR,
    expectedVersion: 2,
  });
  const accepted = await s.completeReview.execute({
    reviewBundleId: rbId,
    idempotencyKey: `idem-a-${rbId}`,
    actor: ACTOR,
    expectedVersion: 3,
    outcome: "accepted",
  });
  expect(accepted.ok).toBe(true);
  return accepted;
}

describe("T-A6-D2 adversarial — completeness / unavailable", () => {
  it("marks draft incomplete when attached Evidence is unavailable", async () => {
    const s = buildServices();
    await seedEvidence(s, "ev:adv-unavail", { unavailable: true });
    const created = await s.createReviewBundle.execute({
      reviewBundleId: "rb:adv-unavail",
      idempotencyKey: "idem-adv-unavail-create",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
      evidenceIds: ["ev:adv-unavail"],
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    expect(created.reviewBundle.completeness).toBe("incomplete");

    const frozen = await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:adv-unavail",
      idempotencyKey: "idem-adv-unavail-freeze",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(frozen.ok).toBe(true);
    if (!frozen.ok) return;
    expect(frozen.reviewBundle.completeness).toBe("incomplete");
    expect(frozen.reviewBundle.frozenEvidenceSnapshots?.[0]?.availability).toBe(
      "unavailable",
    );

    await s.startReview.execute({
      reviewBundleId: "rb:adv-unavail",
      idempotencyKey: "idem-adv-unavail-start",
      actor: ACTOR,
      expectedVersion: 2,
    });
    const accepted = await s.completeReview.execute({
      reviewBundleId: "rb:adv-unavail",
      idempotencyKey: "idem-adv-unavail-acc",
      actor: ACTOR,
      expectedVersion: 3,
      outcome: "accepted",
    });
    expect(accepted.ok).toBe(false);
    if (accepted.ok) return;
    expect(accepted.error.detailCode).toBe("REVIEW_BUNDLE_INCOMPLETE");
  });
});

describe("T-A6-D2 adversarial — freeze snapshot immutability", () => {
  it("keeps frozen Evidence version after Evidence mutation", async () => {
    const s = buildServices();
    await seedEvidence(s, "ev:adv-snap");
    await s.createReviewBundle.execute({
      reviewBundleId: "rb:adv-snap",
      idempotencyKey: "idem-adv-snap-c",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
      evidenceIds: ["ev:adv-snap"],
    });
    const frozen = await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:adv-snap",
      idempotencyKey: "idem-adv-snap-f",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(frozen.ok).toBe(true);
    if (!frozen.ok) return;
    const frozenVersion =
      frozen.reviewBundle.frozenEvidenceSnapshots?.[0]?.evidenceVersion;
    expect(frozenVersion).toBe(1);

    const marked = await s.markEvidenceUnavailable.execute({
      evidenceId: "ev:adv-snap",
      actor: ACTOR,
      expectedVersion: 1,
      reason: "later withdrawal",
      idempotencyKey: "idem-adv-snap-u",
    });
    expect(marked.ok).toBe(true);
    if (!marked.ok) return;
    expect(marked.evidence.version).toBe(2);

    const still = await s.reviewBundleRepository.findById("rb:adv-snap");
    expect(still?.frozenEvidenceSnapshots?.[0]?.evidenceVersion).toBe(1);
    expect(still?.frozenEvidenceSnapshots?.[0]?.availability).not.toBe(
      "unavailable",
    );

    // external mutation of returned snapshot must not corrupt store
    still!.frozenEvidenceSnapshots![0].evidenceVersion = 999;
    const again = await s.reviewBundleRepository.findById("rb:adv-snap");
    expect(again?.frozenEvidenceSnapshots?.[0]?.evidenceVersion).toBe(1);
  });
});

describe("T-A6-D2 adversarial — reopen atomicity / idempotence", () => {
  it("fails closed on forced save — no orphan successor, retry succeeds", async () => {
    const s = buildServices();
    await toAccepted(s, "rb:adv-atom-old", "ev:adv-atom");

    s.reviewBundleStore.failNextSave = true;
    const failed = await s.reopenReview.execute({
      reviewBundleId: "rb:adv-atom-old",
      successorReviewBundleId: "rb:adv-atom-new",
      idempotencyKey: "idem-adv-atom-reopen",
      actor: ACTOR,
      expectedVersion: 4,
      reason: "retry after forced failure",
    });
    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect(failed.error.detailCode).toBe("REVIEW_BUNDLE_PERSISTENCE_FAILED");

    expect(await s.reviewBundleRepository.findById("rb:adv-atom-new")).toBeNull();
    const old = await s.reviewBundleRepository.findById("rb:adv-atom-old");
    expect(old?.status).toBe("accepted");
    expect(old?.version).toBe(4);

    const retry = await s.reopenReview.execute({
      reviewBundleId: "rb:adv-atom-old",
      successorReviewBundleId: "rb:adv-atom-new",
      idempotencyKey: "idem-adv-atom-reopen",
      actor: ACTOR,
      expectedVersion: 4,
      reason: "retry after forced failure",
    });
    expect(retry.ok).toBe(true);
    if (!retry.ok) return;
    expect(retry.reviewBundle.status).toBe("superseded");
    expect(retry.successor?.reviewBundleId).toBe("rb:adv-atom-new");
    expect(retry.successor?.status).toBe("draft");

    const replay = await s.reopenReview.execute({
      reviewBundleId: "rb:adv-atom-old",
      successorReviewBundleId: "rb:adv-atom-new",
      idempotencyKey: "idem-adv-atom-reopen",
      actor: ACTOR,
      expectedVersion: 4,
      reason: "retry after forced failure",
    });
    expect(replay.ok).toBe(true);
    if (!replay.ok) return;
    expect(replay.reusedFromIdempotencyKey).toBe(true);
    expect(replay.successor?.reviewBundleId).toBe("rb:adv-atom-new");

    // no second successor from same idempotency key
    const allIds = [...s.reviewBundleStore.bundles.keys()].filter((id) =>
      id.startsWith("rb:adv-atom"),
    );
    expect(allIds.sort()).toEqual(["rb:adv-atom-new", "rb:adv-atom-old"]);
  });

  it("refuses secret in reopen actor displayName", async () => {
    const s = buildServices();
    await toAccepted(s, "rb:adv-sec-old", "ev:adv-sec");
    const result = await s.reopenReview.execute({
      reviewBundleId: "rb:adv-sec-old",
      successorReviewBundleId: "rb:adv-sec-new",
      idempotencyKey: "idem-adv-sec-reopen",
      actor: {
        ...ACTOR,
        displayName: "bearer token=leak-me-now-please",
      },
      expectedVersion: 4,
      reason: "safe reason",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("REVIEW_BUNDLE_SECRET_FORBIDDEN");
    expect(await s.reviewBundleRepository.findById("rb:adv-sec-new")).toBeNull();
  });
});
