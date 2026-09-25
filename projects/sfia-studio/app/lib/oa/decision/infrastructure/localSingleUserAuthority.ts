/**
 * Server-owned local single-user decision authority (M3 → W2 → Option A → R1).
 * TEMPORARY WITH EXIT — enabled only via env or explicit test inject.
 * Client canActAsPilot / canActAsMorris / claimedAuthorityLevel are never trusted.
 *
 * Option A: Pilot and Morris are DISTINCT authority classes.
 * - registerLocalPiloteAuthority → N3 + canActAsPilot (NOT canActAsMorris)
 * - registerLocalMorrisGateAuthority → N3 + canActAsMorris (NOT canActAsPilot)
 *
 * R1 env naming:
 * - Canonical Pilot: `SFIA_STUDIO_LOCAL_PILOT_AUTHORITY`
 * - Canonical Morris gate: `SFIA_STUDIO_LOCAL_MORRIS_GATE_AUTHORITY`
 * - Legacy alias (deprecated): `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY`
 *
 * Precedence (per gate family):
 * 1. If the canonical env for that family is defined → its value wins (`=== "1"`).
 * 2. Else legacy alias may enable that helper as compatibility only.
 * 3. Each helper still creates ONLY its own grant — never dual-grant evidence.
 *
 * Pilot canonical alone never enables Morris. Morris canonical alone never enables Pilot.
 * Legacy alone may enable either helper separately (each still single-grant).
 */
import { randomUUID } from "node:crypto";
import type { MemoryAuthorityResolver } from "./memoryAuthorityResolver";
import type { AuthorityEvidence, OaActorReference } from "../domain/types";

export const M3_LOCAL_MORRIS_ACTOR_ID = "actor:local-morris-m3" as const;

export const LOCAL_PILOTE_ACTOR_ID = "actor:local-pilote" as const;

export const M3_LOCAL_AUTHORITY_SOURCE =
  "LOCAL_SINGLE_USER_AUTHORITY_TEMPORARY_WITH_EXIT" as const;

/** Canonical Pilot local-authority enable env. */
export const LOCAL_PILOT_AUTHORITY_ENV =
  "SFIA_STUDIO_LOCAL_PILOT_AUTHORITY" as const;

/** Canonical Morris-gate local-authority enable env. */
export const LOCAL_MORRIS_GATE_AUTHORITY_ENV =
  "SFIA_STUDIO_LOCAL_MORRIS_GATE_AUTHORITY" as const;

/**
 * @deprecated Compatibility alias only. Prefer LOCAL_PILOT_AUTHORITY_ENV /
 * LOCAL_MORRIS_GATE_AUTHORITY_ENV. Does not create dual-grant evidence.
 */
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

function envKeyDefined(
  env: NodeJS.ProcessEnv,
  key: string,
): boolean {
  return Object.prototype.hasOwnProperty.call(env, key);
}

/**
 * Pilot enable with canonical-over-legacy precedence.
 * Canonical defined (even as "0") → canonical wins; else legacy fallback.
 */
export function isLocalPilotAuthorityEnabled(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  if (envKeyDefined(env, LOCAL_PILOT_AUTHORITY_ENV)) {
    return env[LOCAL_PILOT_AUTHORITY_ENV] === "1";
  }
  return env[M3_LOCAL_AUTHORITY_ENV] === "1";
}

/**
 * Morris-gate enable with canonical-over-legacy precedence.
 * Pilot canonical alone does NOT enable Morris.
 */
export function isLocalMorrisGateAuthorityEnabled(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  if (envKeyDefined(env, LOCAL_MORRIS_GATE_AUTHORITY_ENV)) {
    return env[LOCAL_MORRIS_GATE_AUTHORITY_ENV] === "1";
  }
  return env[M3_LOCAL_AUTHORITY_ENV] === "1";
}

/**
 * @deprecated Prefer isLocalPilotAuthorityEnabled. Kept for preflight/callers
 * that historically checked the legacy env name.
 */
export function isM3LocalAuthorityEnabled(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return isLocalPilotAuthorityEnabled(env);
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

type GateKind = "pilot" | "morris";

function enableHint(gate: GateKind): string {
  if (gate === "pilot") {
    return `${LOCAL_PILOT_AUTHORITY_ENV}=1 (or deprecated ${M3_LOCAL_AUTHORITY_ENV}=1)`;
  }
  return `${LOCAL_MORRIS_GATE_AUTHORITY_ENV}=1 (or deprecated ${M3_LOCAL_AUTHORITY_ENV}=1)`;
}

function registerLocalGateAuthority(input: {
  authorityResolver: MemoryAuthorityResolver;
  actor: OaActorReference;
  evidenceIdPrefix: string;
  scope: string;
  issuedAt: string;
  gate: GateKind;
  evidenceId?: string;
  forceEnable?: boolean;
  env?: NodeJS.ProcessEnv;
}): RegisterM3LocalAuthorityResult {
  const env = input.env ?? process.env;
  const enabled =
    input.forceEnable === true ||
    (input.gate === "pilot"
      ? isLocalPilotAuthorityEnabled(env)
      : isLocalMorrisGateAuthorityEnabled(env));
  if (!enabled) {
    return {
      ok: false,
      code: "AUTHORITY_NOT_CONFIGURED",
      message: `Local single-user ${input.gate} authority is not configured (fail-closed). Set ${enableHint(input.gate)}.`,
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
    ...(input.gate === "pilot"
      ? { canActAsPilot: true }
      : { canActAsMorris: true }),
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
          : `Failed to register local ${input.gate} decision authority.`,
    };
  }
}

/**
 * Register N3 + canActAsPilot for the generic Pilote actor.
 * Does NOT grant canActAsMorris.
 * Fail-closed when the local Pilot authority env gate is off
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
  return registerLocalGateAuthority({
    ...input,
    actor: LOCAL_PILOTE_ACTOR,
    evidenceIdPrefix: "evd:local-pilote",
    gate: "pilot",
  });
}

/**
 * Explicit Morris-gate evidence for a given actor (local single-user).
 * Separate from Pilot grant — same human may hold both, but each decision
 * consumes only the gate it requests.
 * Default actor = LOCAL_PILOTE_ACTOR (product dual-grant for true Morris EC).
 */
export function registerLocalMorrisGateAuthority(input: {
  authorityResolver: MemoryAuthorityResolver;
  scope: string;
  issuedAt: string;
  /** Defaults to LOCAL_PILOTE_ACTOR for product Morris EC dual-grant. */
  actor?: OaActorReference;
  evidenceId?: string;
  forceEnable?: boolean;
  env?: NodeJS.ProcessEnv;
}): RegisterM3LocalAuthorityResult {
  return registerLocalGateAuthority({
    ...input,
    actor: input.actor ?? LOCAL_PILOTE_ACTOR,
    evidenceIdPrefix: "evd:local-morris-gate",
    gate: "morris",
  });
}

/**
 * Select local single-user evidence for an ExecutionContract requiredAuthority.
 * - MORRIS → explicit Morris gate (canActAsMorris)
 * - N1|N2|N3 → Pilot evidence (N3 level; canActAsPilot; no Morris conflation)
 */
export function registerLocalAuthorityForExecutionClass(input: {
  authorityResolver: MemoryAuthorityResolver;
  scope: string;
  issuedAt: string;
  requiredAuthority: string;
  evidenceId?: string;
  forceEnable?: boolean;
  env?: NodeJS.ProcessEnv;
}): RegisterM3LocalAuthorityResult {
  if (input.requiredAuthority === "MORRIS") {
    return registerLocalMorrisGateAuthority(input);
  }
  return registerLocalPiloteAuthority(input);
}

/**
 * Historical M3 registration for a true Morris authority evidence.
 * Grants canActAsMorris only — does NOT implicitly grant canActAsPilot.
 * @deprecated Prefer registerLocalMorrisGateAuthority for product dual-grant;
 * kept so LOCAL_MORRIS_M3_ACTOR evidence remains creatable for historical tests.
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
  return registerLocalGateAuthority({
    ...input,
    actor: LOCAL_MORRIS_M3_ACTOR,
    evidenceIdPrefix: "evd:m3-local-morris",
    gate: "morris",
  });
}
