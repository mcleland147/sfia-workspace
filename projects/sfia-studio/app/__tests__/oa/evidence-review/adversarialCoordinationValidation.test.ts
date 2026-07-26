/**
 * T-A6-D5 adversarial coordination validation — fail-closed / anti-claims.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { ACTOR, DIGEST_A, buildServices } from "./helpers";
import type { ActorReference } from "@/lib/oa/evidence-review";

const SYSTEM: ActorReference = {
  actorId: "actor:studio",
  role: "system",
  authorityLevel: "none",
};

async function seedVerified(
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

describe("T-A6-D5 adversarial RecommendNextGate", () => {
  it("never treats waived claim as positive gate candidate", async () => {
    const s = buildServices();
    s.fakeClaimAuthority.grant({
      actorId: ACTOR.actorId,
      level: "N2",
      scope: "oa.claim_evaluation",
    });
    await seedVerified(s, "ev:d5-wav-1");
    await s.createReviewBundle.execute({
      reviewBundleId: "rb:d5-wav",
      idempotencyKey: "idem-rb-wav",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
      evidenceIds: ["ev:d5-wav-1"],
    });
    await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:d5-wav",
      idempotencyKey: "idem-fr-wav",
      actor: ACTOR,
      expectedVersion: 1,
    });
    const waived = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:d5-wav",
      idempotencyKey: "idem-wav",
      actor: ACTOR,
      claimType: "technique",
      claimStatement: "Waived claim",
      criticality: "non_critical",
      evaluationMethod: "human_review",
      requiredEvidenceRefs: ["ev:d5-wav-1"],
      reviewBundleId: "rb:d5-wav",
      reviewBundleVersion: 2,
      intent: "waive",
      waiverReason: "temporary exception documented",
    });
    expect(waived.ok).toBe(true);
    if (!waived.ok) return;
    expect(waived.claimEvaluation.status).toBe("waived");

    const result = await s.recommendNextGate.execute({
      projectId: "prj:campus360-oa",
      claimEvaluationRefs: [
        { id: "clm:d5-wav", version: waived.claimEvaluation.version },
      ],
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(
      result.coordination.blockers.some((b) => b.code === "claim_waived"),
    ).toBe(true);
    expect(result.coordination.status).not.toBe("gate_candidate");
    expect(result.coordination.nextGate).toBeUndefined();
    expect(result.coordination.executionAuthority).toBe(false);
    expect(result.coordination.decisionCreated).toBe(false);
    expect(result.coordination.gateConsumed).toBe(false);
  });

  it("draft review bundle never yields gate_candidate", async () => {
    const s = buildServices();
    await seedVerified(s, "ev:d5-draft-1");
    await s.createReviewBundle.execute({
      reviewBundleId: "rb:d5-draft",
      idempotencyKey: "idem-rb-draft",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
      evidenceIds: ["ev:d5-draft-1"],
    });
    const result = await s.recommendNextGate.execute({
      projectId: "prj:campus360-oa",
      reviewBundleRefs: [{ id: "rb:d5-draft", version: 1 }],
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(
      result.coordination.blockers.some(
        (b) => b.code === "review_bundle_not_frozen",
      ),
    ).toBe(true);
    expect(result.coordination.status).not.toBe("gate_candidate");
    expect(result.coordination.nextGate).toBeUndefined();
  });

  it("audit events are refs-only and never claim gate consumed", async () => {
    const s = buildServices();
    await seedVerified(s, "ev:d5-aud-1");
    await s.recommendNextGate.execute({
      projectId: "prj:campus360-oa",
      evidenceRefs: [{ id: "ev:d5-aud-1", version: 2 }],
      actor: SYSTEM,
    });
    const events = s.memoryAudit.events.filter((e) =>
      e.event.startsWith("oa.coordination."),
    );
    expect(events.length).toBeGreaterThan(0);
    for (const ev of events) {
      const raw = JSON.stringify(ev);
      expect(raw).not.toMatch(/sk-|password|Bearer /i);
      expect(raw).not.toContain('"gateConsumed":true');
      expect(raw).not.toContain('"executionAuthority":true');
    }
  });
});
