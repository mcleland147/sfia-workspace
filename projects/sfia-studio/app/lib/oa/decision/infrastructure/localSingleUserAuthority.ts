/**
 * Server-owned local single-user decision authority (M3 → W2).
 * TEMPORARY WITH EXIT — enabled only via env or explicit test inject.
 * Client canActAsMorris / claimedAuthorityLevel are never trusted.
 *
 * W2 actor semantics: the product runtime decision-maker is the generic
 * **Pilote** (`LOCAL_PILOTE_ACTOR`). `authority: "morris"` remains the OA
 * domain authority CLASS for structuring decisions — it is not a persona.
 * The historical `LOCAL_MORRIS_M3_ACTOR` identity is preserved read-only so
 * decisions already recorded under it are never falsified or rewritten.
 */
import { randomUUID } from "node:crypto";
import type { MemoryAuthorityResolver } from "./memoryAuthorityResolver";
import type { AuthorityEvidence, OaActorReference } from "../domain/types";

export const M3_LOCAL_MORRIS_ACTOR_ID = "actor:local-morris-m3" as const;

export const LOCAL_PILOTE_ACTOR_ID = "actor:local-pilote" as const;

export const M3_LOCAL_AUTHORITY_SOURCE =
  "LOCAL_SINGLE_USER_AUTHORITY_TEMPORARY_WITH_EXIT" as const;

export const M3_LOCAL_AUTHORITY_ENV =
  "SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY" as const;

/**
 * Historical M3 runtime actor.
 * @deprecated W2 product runtime uses LOCAL_PILOTE_ACTOR. Kept so previously
 * recorded HumanDecisions remain readable and attributable as-is.
 */
export const LOCAL_MORRIS_M3_ACTOR: OaActorReference = Object.freeze({
  actorId: M3_LOCAL_MORRIS_ACTOR_ID,
  role: "decision_maker" as const,
  displayName: "Local Morris M3 (temporary with exit)",
  authorityLevel: "none" as const,
});

/** W2 product runtime decision-maker — generic role, no persona. */
export const LOCAL_PILOTE_ACTOR: OaActorReference = Object.freeze({
  actorId: LOCAL_PILOTE_ACTOR_ID,
  role: "decision_maker" as const,
  displayName: "Pilote",
  authorityLevel: "none" as const,
});

export function isM3LocalAuthorityEnabled(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return env[M3_LOCAL_AUTHORITY_ENV] === "1";
}

export type RegisterM3LocalAuthorityResult =
  | {
      ok: true;
      evidenceId: string;
      actor: OaActorReference;
      source: typeof M3_LOCAL_AUTHORITY_SOURCE;
    }
  | {
      ok: false;
      code: "AUTHORITY_NOT_CONFIGURED" | "AUTHORITY_REGISTER_FAILED";
      message: string;
    };

function registerLocalStructuringAuthority(input: {
  authorityResolver: MemoryAuthorityResolver;
  actor: OaActorReference;
  evidenceIdPrefix: string;
  scope: string;
  issuedAt: string;
  evidenceId?: string;
  forceEnable?: boolean;
  env?: NodeJS.ProcessEnv;
}): RegisterM3LocalAuthorityResult {
  const enabled =
    input.forceEnable === true ||
    isM3LocalAuthorityEnabled(input.env ?? process.env);
  if (!enabled) {
    return {
      ok: false,
      code: "AUTHORITY_NOT_CONFIGURED",
      message: `Local single-user structuring authority is not configured (fail-closed). Set ${M3_LOCAL_AUTHORITY_ENV}=1.`,
    };
  }

  const evidenceId =
    input.evidenceId ?? `${input.evidenceIdPrefix}:${randomUUID()}`;
  const evidence: AuthorityEvidence = {
    evidenceId,
    actorId: input.actor.actorId,
    level: "N3",
    scope: input.scope,
    issuedAt: input.issuedAt,
    source: M3_LOCAL_AUTHORITY_SOURCE,
    canActAsMorris: true,
  };

  try {
    const existing = input.authorityResolver.getEvidence(evidenceId);
    if (!existing) {
      input.authorityResolver.register(evidence);
    }
    return {
      ok: true,
      evidenceId,
      actor: input.actor,
      source: M3_LOCAL_AUTHORITY_SOURCE,
    };
  } catch (error) {
    return {
      ok: false,
      code: "AUTHORITY_REGISTER_FAILED",
      message:
        error instanceof Error
          ? error.message
          : "Failed to register local structuring decision authority.",
    };
  }
}

/**
 * W2 — register N3 + structuring-gate evidence for the generic Pilote actor.
 * Fail-closed when the local single-user authority env gate is off
 * (unless forceEnable for tests).
 */
export function registerLocalPiloteAuthority(input: {
  authorityResolver: MemoryAuthorityResolver;
  scope: string;
  issuedAt: string;
  evidenceId?: string;
  /** Test inject — bypasses env gate. */
  forceEnable?: boolean;
  env?: NodeJS.ProcessEnv;
}): RegisterM3LocalAuthorityResult {
  return registerLocalStructuringAuthority({
    ...input,
    actor: LOCAL_PILOTE_ACTOR,
    evidenceIdPrefix: "evd:local-pilote",
  });
}

/**
 * Historical M3 registration for the legacy Morris runtime actor.
 * @deprecated W2 product runtime uses registerLocalPiloteAuthority.
 */
export function registerM3LocalMorrisAuthority(input: {
  authorityResolver: MemoryAuthorityResolver;
  scope: string;
  issuedAt: string;
  evidenceId?: string;
  /** Test inject — bypasses env gate. */
  forceEnable?: boolean;
  env?: NodeJS.ProcessEnv;
}): RegisterM3LocalAuthorityResult {
  return registerLocalStructuringAuthority({
    ...input,
    actor: LOCAL_MORRIS_M3_ACTOR,
    evidenceIdPrefix: "evd:m3-local-morris",
  });
}
