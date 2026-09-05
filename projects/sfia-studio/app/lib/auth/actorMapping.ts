/**
 * Map verified GitHub immutable user id → SFIA OaActorReference (Pilote).
 * ActorReference.authorityLevel is never an authority proof.
 */

import type { ActorReference } from "@/lib/oa/doctrine";
import { GITHUB_ACTOR_ID_PREFIX } from "./constants";
import { isCanonicalGithubUserId } from "./allowlist";

export function githubActorId(githubUserId: string): string {
  if (!isCanonicalGithubUserId(githubUserId)) {
    throw new Error("invalid_github_user_id");
  }
  return `${GITHUB_ACTOR_ID_PREFIX}${githubUserId}`;
}

export function mapGithubIdentityToPiloteActor(input: {
  githubUserId: string;
  displayName?: string | null;
}): ActorReference {
  const actorId = githubActorId(input.githubUserId);
  const display =
    typeof input.displayName === "string" && input.displayName.trim().length > 0
      ? input.displayName.trim()
      : undefined;
  return {
    actorId,
    role: "decision_maker",
    ...(display ? { displayName: display } : {}),
    authorityLevel: "none",
  };
}

export function parseGithubUserIdFromActorId(
  actorId: string,
): string | null {
  if (!actorId.startsWith(GITHUB_ACTOR_ID_PREFIX)) return null;
  const id = actorId.slice(GITHUB_ACTOR_ID_PREFIX.length);
  return isCanonicalGithubUserId(id) ? id : null;
}
