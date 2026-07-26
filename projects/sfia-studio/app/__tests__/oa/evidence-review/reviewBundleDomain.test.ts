/**
 * T-A6-D2 ReviewBundle domain + lifecycle tests.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  computeCompleteness,
  isTerminalReviewStatus,
  sortEvidenceRefs,
  validateReviewBundleShape,
  type ReviewBundle,
} from "@/lib/oa/evidence-review";
import { ACTOR, NOW, buildServices } from "./helpers";

function baseBundle(overrides: Partial<ReviewBundle> = {}): ReviewBundle {
  return {
    schemaVersion: "0.2.0-oa",
    reviewBundleId: "rb:domain-001",
    projectId: "prj:campus360-oa",
    version: 1,
    evidenceRefs: ["ev:manual-001"],
    claimEvaluationRefs: [],
    completeness: "incomplete",
    status: "draft",
    createdAt: NOW,
    synthesisOnly: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:rb-domain-001",
      actor: ACTOR,
      source: "review",
      timestamp: NOW,
      correlationId: "cor:rb-domain-001",
    },
    ...overrides,
  };
}

describe("T-A6-D2 ReviewBundle domain", () => {
  it("accepts a valid draft", () => {
    expect(validateReviewBundleShape(baseBundle())).toBeNull();
  });

  it("requires frozenAt for post-draft statuses", () => {
    expect(
      validateReviewBundleShape(
        baseBundle({ status: "ready_for_review", version: 2 }),
      )?.detailCode,
    ).toBe("REVIEW_BUNDLE_NOT_FROZEN");
  });

  it("accepted requires complete and non-synthesis", () => {
    expect(
      validateReviewBundleShape(
        baseBundle({
          status: "accepted",
          completeness: "incomplete",
          frozenAt: NOW,
          validatedAt: NOW,
          reviewer: ACTOR,
          version: 3,
        }),
      )?.detailCode,
    ).toBe("REVIEW_BUNDLE_SYNTHESIS_ONLY_CONFLICT");
  });

  it("incomplete status requires incomplete completeness", () => {
    expect(
      validateReviewBundleShape(
        baseBundle({
          status: "incomplete",
          completeness: "complete",
          frozenAt: NOW,
          version: 3,
        }),
      )?.detailCode,
    ).toBe("REVIEW_BUNDLE_INCOMPLETE");
  });

  it("synthesisOnly cannot be complete", () => {
    expect(
      validateReviewBundleShape(
        baseBundle({ synthesisOnly: true, completeness: "complete" }),
      )?.detailCode,
    ).toBe("REVIEW_BUNDLE_SYNTHESIS_ONLY_CONFLICT");
  });

  it("forbids claimEvaluationRefs in D2", () => {
    expect(
      validateReviewBundleShape(
        baseBundle({ claimEvaluationRefs: ["clm:x"] }),
      )?.detailCode,
    ).toBe("REVIEW_BUNDLE_INVALID");
  });

  it("sorts evidence refs deterministically", () => {
    expect(sortEvidenceRefs(["ev:b", "ev:a", "ev:c"])).toEqual([
      "ev:a",
      "ev:b",
      "ev:c",
    ]);
  });

  it("computes completeness", () => {
    expect(
      computeCompleteness({ evidenceRefs: [], synthesisOnly: false }),
    ).toBe("incomplete");
    expect(
      computeCompleteness({
        evidenceRefs: ["ev:a"],
        synthesisOnly: true,
      }),
    ).toBe("incomplete");
    expect(
      computeCompleteness({
        evidenceRefs: ["ev:a"],
        synthesisOnly: false,
      }),
    ).toBe("complete");
  });

  it("marks terminal statuses", () => {
    expect(isTerminalReviewStatus("accepted")).toBe(true);
    expect(isTerminalReviewStatus("draft")).toBe(false);
  });
});

describe("T-A6-D2 CreateReviewBundle", () => {
  it("creates draft ReviewBundle", async () => {
    const s = buildServices();
    await s.registerEvidence.execute({
      evidenceId: "ev:rb-create-1",
      idempotencyKey: "idem-ev-rb-create-1",
      actor: ACTOR,
      type: "document",
      source: "notes",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "public",
      storageMode: "metadata_only",
    });
    const result = await s.createReviewBundle.execute({
      reviewBundleId: "rb:create-001",
      idempotencyKey: "idem-rb-create-001",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
      evidenceIds: ["ev:rb-create-1"],
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.reviewBundle.status).toBe("draft");
    expect(result.reviewBundle.version).toBe(1);
    expect(result.reviewBundle.claimEvaluationRefs).toEqual([]);
    expect(result.reviewBundle.frozenAt).toBeUndefined();
  });

  it("replays idempotent create", async () => {
    const s = buildServices();
    const req = {
      reviewBundleId: "rb:idem-001",
      idempotencyKey: "idem-rb-idem-001",
      actor: ACTOR,
      projectId: "prj:campus360-oa" as const,
    };
    const a = await s.createReviewBundle.execute(req);
    const b = await s.createReviewBundle.execute(req);
    expect(a.ok && b.ok).toBe(true);
    if (!b.ok) return;
    expect(b.reusedFromIdempotencyKey).toBe(true);
  });

  it("conflicts on idempotency fingerprint mismatch", async () => {
    const s = buildServices();
    await s.createReviewBundle.execute({
      reviewBundleId: "rb:idem-c1",
      idempotencyKey: "idem-rb-conflict-001",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
    });
    const conflict = await s.createReviewBundle.execute({
      reviewBundleId: "rb:idem-c2",
      idempotencyKey: "idem-rb-conflict-001",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
      synthesisOnly: true,
    });
    expect(conflict.ok).toBe(false);
    if (conflict.ok) return;
    expect(conflict.error.detailCode).toBe("IDEMPOTENCY_CONFLICT");
  });
});
