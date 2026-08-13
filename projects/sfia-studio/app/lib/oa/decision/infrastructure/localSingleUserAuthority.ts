/**
 * Server-owned local single-user Morris authority (M3).
 * TEMPORARY WITH EXIT — enabled only via env or explicit test inject.
 * Client canActAsMorris / claimedAuthorityLevel are never trusted.
 */
import { randomUUID } from "node:crypto";
import type { MemoryAuthorityResolver } from "./memoryAuthorityResolver";
import type { AuthorityEvidence, OaActorReference } from "../domain/types";

export const M3_LOCAL_MORRIS_ACTOR_ID = "actor:local-morris-m3" as const;

export const M3_LOCAL_AUTHORITY_SOURCE =
  "LOCAL_SINGLE_USER_AUTHORITY_TEMPORARY_WITH_EXIT" as const;

export const M3_LOCAL_AUTHORITY_ENV =
  "SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY" as const;

export const LOCAL_MORRIS_M3_ACTOR: OaActorReference = Object.freeze({
  actorId: M3_LOCAL_MORRIS_ACTOR_ID,
  role: "decision_maker" as const,
  displayName: "Local Morris M3 (temporary with exit)",
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

/**
 * Register N3 + canActAsMorris evidence for a scope when M3 authority is enabled.
 * Fail-closed when disabled (unless forceEnable for tests).
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
  const enabled =
    input.forceEnable === true ||
    isM3LocalAuthorityEnabled(input.env ?? process.env);
  if (!enabled) {
    return {
      ok: false,
      code: "AUTHORITY_NOT_CONFIGURED",
      message:
        "Local single-user Morris authority is not configured (fail-closed). Set SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1.",
    };
  }

  const evidenceId =
    input.evidenceId ?? `evd:m3-local-morris:${randomUUID()}`;
  const evidence: AuthorityEvidence = {
    evidenceId,
    actorId: M3_LOCAL_MORRIS_ACTOR_ID,
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
      actor: LOCAL_MORRIS_M3_ACTOR,
      source: M3_LOCAL_AUTHORITY_SOURCE,
    };
  } catch (error) {
    return {
      ok: false,
      code: "AUTHORITY_REGISTER_FAILED",
      message:
        error instanceof Error
          ? error.message
          : "Failed to register M3 local Morris authority.",
    };
  }
}
