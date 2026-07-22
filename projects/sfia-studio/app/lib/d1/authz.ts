import {
  D1_MONO_OPERATOR_ACTOR_ID,
  type D1Project,
} from "./types";
import { D1Error } from "./errors";

/** I1 AuthZ stub: single operator owns all actions. */
export function requireMonoOperator(actorId = D1_MONO_OPERATOR_ACTOR_ID): string {
  if (actorId !== D1_MONO_OPERATOR_ACTOR_ID) {
    throw new D1Error(
      "UNAUTHORIZED",
      "D1-I1 mono-opérateur uniquement (actor-mono-i1).",
    );
  }
  return actorId;
}

export function assertProjectOwner(
  project: D1Project,
  actorId = D1_MONO_OPERATOR_ACTOR_ID,
): void {
  requireMonoOperator(actorId);
  if (project.ownerActorId !== actorId) {
    throw new D1Error("UNAUTHORIZED", "Acteur non propriétaire du projet.");
  }
}
