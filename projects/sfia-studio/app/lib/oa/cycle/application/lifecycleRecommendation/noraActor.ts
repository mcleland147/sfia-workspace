/**
 * Nora actor for Lifecycle Recommendation durable provenance.
 * Recommendation cognitive origin = Nora/agent; authority remains none.
 * Never LOCAL_PILOTE_ACTOR — Pilote authors HumanDecisions, not Nora Recommendations.
 */
import type { ActorReference } from "@/lib/oa/doctrine";

/** Repository-consistent Nora agent actor (matches Cycle create / LR delivery tests). */
export const NORA_LIFECYCLE_RECOMMENDATION_ACTOR: ActorReference = Object.freeze({
  actorId: "actor:nora",
  role: "agent",
  displayName: "Nora",
  authorityLevel: "N1",
});
