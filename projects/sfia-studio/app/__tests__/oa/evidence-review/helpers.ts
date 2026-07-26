/**
 * Shared fixtures for T-A6-D1 Evidence tests.
 * @vitest-environment node
 */
import type { ActorReference, Digest } from "@/lib/oa/evidence-review";
import { createTestEvidenceReviewServices } from "@/lib/oa/evidence-review";

export const NOW = "2026-07-26T02:00:00.000Z";

export const DIGEST_A =
  "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" as Digest;
export const DIGEST_B =
  "sha256:bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb" as Digest;

export const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "decision_maker",
  authorityLevel: "N3",
};

export const SYSTEM_ACTOR: ActorReference = {
  actorId: "actor:studio",
  role: "system",
  authorityLevel: "none",
};

export function buildServices() {
  return createTestEvidenceReviewServices({ fixedNowIso: NOW });
}
