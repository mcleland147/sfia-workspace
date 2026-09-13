/**
 * AuthorizedExecutionSlice — current authorized Cursor effects (D-GCEC-13/15).
 * Derived from EC ∩ agent capabilities ∩ HD ∩ Confirmations ∩ runtime policy.
 * Future gated effects are NOT granted in advance.
 * CR-GCEC-15: cap:cursor.docs_write does NOT imply Git effects.
 * CR-GCEC-19: protected Git effects require effect-target-bound Confirmation
 * (EC + effect + repo + branch/PR when applicable) — generic scope ≠ target identity.
 * CR-GCEC-24: Cursor executable effects ≠ Studio verification obligations.
 */
import { createHash } from "node:crypto";
import type { Confirmation } from "@/lib/oa/decision";
import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";
import { deriveExecutableEffectsFromContractRequirements } from "./contractEffectClassification";

export type AuthorizedExecutionSlice = {
  executionContractId: string;
  attemptLineageKey: string;
  authorizedEffects: CursorAuthorizedEffectId[];
  blockedEffects: CursorAuthorizedEffectId[];
  reasons: string[];
};

/** OA identifier max length — actionRef must stay within bound. */
export const OA_ACTION_REF_MAX_LENGTH = 128;

const GIT_EFFECT_CONFIRMATION_SCOPE: Record<
  Extract<
    CursorAuthorizedEffectId,
    "git.commit" | "git.push" | "github.pr.create" | "github.pr.merge"
  >,
  string
> = {
  "git.commit": "git:local_commit",
  "git.push": "git:remote_push",
  "github.pr.create": "git:pull_request",
  "github.pr.merge": "git:merge",
};

function sanitizeIdPart(value: string): string {
  return value.replace(/[^a-zA-Z0-9:._-]+/g, "");
}

function sanitizeRepoPart(value: string): string {
  return value.replace(/[^a-zA-Z0-9._-]+/g, "__");
}

/**
 * Canonical Confirmation actionRef for a protected Git effect.
 * Collision-safe under OA_ACTION_REF_MAX_LENGTH: when the plain form exceeds
 * the bound, use stable effect prefix + bounded EC + digest of the full
 * canonical target tuple (never truncate the distinguishing suffix alone).
 */
export function buildGitEffectActionRef(input: {
  executionContractId: string;
  effect:
    | "git.commit"
    | "git.push"
    | "github.pr.create"
    | "github.pr.merge";
  repositoryRef: string;
  branchOrRef?: string;
  prNumber?: number;
}): string {
  const scope = GIT_EFFECT_CONFIRMATION_SCOPE[input.effect];
  const scopeToken = scope.replace(/:/g, "-");
  const safeContract = sanitizeIdPart(input.executionContractId);
  const safeRepo = sanitizeRepoPart(input.repositoryRef);
  const parts = ["act", scopeToken, safeContract, safeRepo];
  if (input.branchOrRef) {
    parts.push(`ref:${sanitizeRepoPart(input.branchOrRef)}`);
  }
  if (input.prNumber != null) parts.push(`pr:${input.prNumber}`);
  const plain = parts.join(":");
  if (plain.length <= OA_ACTION_REF_MAX_LENGTH) return plain;

  const tuple = [
    input.executionContractId,
    input.effect,
    input.repositoryRef,
    input.branchOrRef ?? "",
    input.prNumber != null ? String(input.prNumber) : "",
  ].join("|");
  const digest = createHash("sha256").update(tuple).digest("hex").slice(0, 24);
  const ecBound =
    safeContract.length <= 48 ? safeContract : safeContract.slice(0, 48);
  const compact = `act:${scopeToken}:${ecBound}:${digest}`;
  return compact.length <= OA_ACTION_REF_MAX_LENGTH
    ? compact
    : compact.slice(0, OA_ACTION_REF_MAX_LENGTH);
}

export type GitEffectConfirmationMatch = {
  executionContractId: string;
  repositoryRef?: string;
  branchOrRef?: string;
  prNumber?: number;
  actorId?: string;
};

function scopeIndicatesEffectClass(
  scope: string,
  scopeNeedle: string,
  expectedActionRef: string,
): boolean {
  const hyphen = scopeNeedle.replace(/:/g, "-");
  return (
    scope.includes(scopeNeedle) ||
    scope.includes(hyphen) ||
    scope === expectedActionRef
  );
}

/**
 * CR-GCEC-23H-A — canonical target must be complete before Confirmation can grant.
 * Incomplete identity never builds an authorizable actionRef.
 */
export function canonicalGitTargetCompleteForEffect(
  effect:
    | "git.commit"
    | "git.push"
    | "github.pr.create"
    | "github.pr.merge",
  match: GitEffectConfirmationMatch,
): boolean {
  if (!match.executionContractId?.trim()) return false;
  if (!match.repositoryRef?.trim()) return false;
  switch (effect) {
    case "git.commit":
      // Empty/whitespace branch is incomplete when supplied; undefined is allowed
      // when the EC never defined a working branch.
      if (match.branchOrRef !== undefined && !match.branchOrRef.trim()) {
        return false;
      }
      return true;
    case "git.push":
    case "github.pr.create":
      return Boolean(match.branchOrRef?.trim());
    case "github.pr.merge":
      return (
        Boolean(match.branchOrRef?.trim()) &&
        match.prNumber != null &&
        Number.isInteger(match.prNumber) &&
        match.prNumber >= 1
      );
  }
}

/**
 * CR-GCEC-19 — exact target binding. No startsWith / includes fallback on
 * actionRef. Generic actionRef or generic scope alone never authorizes a
 * concrete repo/branch/PR effect.
 * CR-GCEC-23H-A — incomplete canonical match ⇒ never authorize.
 */
export function confirmationGrantsEffect(
  confirmations: readonly Confirmation[],
  effect:
    | "git.commit"
    | "git.push"
    | "github.pr.create"
    | "github.pr.merge",
  nowIso: string,
  match: GitEffectConfirmationMatch,
): boolean {
  if (!canonicalGitTargetCompleteForEffect(effect, match)) {
    return false;
  }
  const scopeNeedle = GIT_EFFECT_CONFIRMATION_SCOPE[effect];
  const expected = buildGitEffectActionRef({
    executionContractId: match.executionContractId,
    effect,
    repositoryRef: match.repositoryRef!,
    branchOrRef: match.branchOrRef,
    prNumber: match.prNumber,
  });

  return confirmations.some((c) => {
    if (c.status !== "granted") return false;
    if (c.expiresAt && c.expiresAt < nowIso) return false;
    if (
      match.actorId &&
      c.requestedTo &&
      c.requestedTo.actorId !== match.actorId
    ) {
      return false;
    }
    if (c.actionRef === scopeNeedle) return false;
    if (!scopeIndicatesEffectClass(c.scope, scopeNeedle, expected)) {
      return false;
    }
    return c.actionRef === expected;
  });
}

/**
 * Derive the current authorized effect slice.
 * CR-GCEC-24: only Cursor-executable effects from the classification helper.
 * Git effects require Confirmation against server-derived confirmationMatch.
 */
export function deriveAuthorizedExecutionSlice(input: {
  executionContractId: string;
  attemptLineageKey?: string;
  requiredCapabilities?: readonly string[];
  evidenceRequirements?: readonly string[];
  expectedOutputs?: readonly string[];
  confirmations?: readonly Confirmation[];
  nowIso?: string;
  allowDelete?: boolean;
  /** Effects already VERIFIED — excluded from authorized re-execution. */
  verifiedEffects?: readonly CursorAuthorizedEffectId[];
  /** Effects reported but awaiting verification — not re-authorized. */
  waitingVerificationEffects?: readonly CursorAuthorizedEffectId[];
  /**
   * CR-GCEC-23 — MUST be server-derived target identity.
   * Domain helper still accepts the shape; StartExecution must not pass
   * caller confirmationMatch as authority.
   */
  confirmationMatch?: {
    repositoryRef?: string;
    branchOrRef?: string;
    prNumber?: number;
    actorId?: string;
  };
  /**
   * CR-GCEC-23H-A/B — protected Git effects whose canonical server target is
   * unavailable (missing binding resolver, missing/ambiguous VERIFIED PR, etc.).
   * These MUST NOT be authorized even if Confirmation appears to match.
   */
  unavailableProtectedEffects?: readonly CursorAuthorizedEffectId[];
}): AuthorizedExecutionSlice {
  const nowIso = input.nowIso ?? new Date().toISOString();
  const confirmations = input.confirmations ?? [];
  const verified = new Set(input.verifiedEffects ?? []);
  const waiting = new Set(input.waitingVerificationEffects ?? []);
  const unavailable = new Set(input.unavailableProtectedEffects ?? []);
  const authorized: CursorAuthorizedEffectId[] = [];
  const blocked: CursorAuthorizedEffectId[] = [];
  const reasons: string[] = [];

  const classified = deriveExecutableEffectsFromContractRequirements({
    evidenceRequirements: input.evidenceRequirements ?? [],
    expectedOutputs: input.expectedOutputs,
    requiredCapabilities: input.requiredCapabilities,
    allowFilesystemCreateOrModify: true,
  });

  for (const effect of classified.executableEffects) {
    if (verified.has(effect) || waiting.has(effect)) {
      blocked.push(effect);
      reasons.push(
        waiting.has(effect)
          ? `waiting_verification:${effect}`
          : `already_verified:${effect}`,
      );
      continue;
    }
    const isGit =
      effect === "git.commit" ||
      effect === "git.push" ||
      effect === "github.pr.create" ||
      effect === "github.pr.merge";
    if (isGit) {
      if (unavailable.has(effect)) {
        blocked.push(effect);
        reasons.push(`canonical_target_unavailable:${effect}`);
        continue;
      }
      if (
        confirmationGrantsEffect(confirmations, effect, nowIso, {
          executionContractId: input.executionContractId,
          ...input.confirmationMatch,
        })
      ) {
        authorized.push(effect);
      } else {
        blocked.push(effect);
        reasons.push(
          `confirmation_required:${GIT_EFFECT_CONFIRMATION_SCOPE[effect]}`,
        );
      }
      continue;
    }
    authorized.push(effect);
  }

  // Non-executable Git candidates remain blocked (never inferred).
  for (const effect of [
    "git.commit",
    "git.push",
    "github.pr.create",
    "github.pr.merge",
  ] as const) {
    if (
      !classified.executableEffects.includes(effect) &&
      !blocked.includes(effect) &&
      !authorized.includes(effect)
    ) {
      blocked.push(effect);
    }
  }

  if (input.allowDelete) {
    if (!verified.has("filesystem.delete") && !waiting.has("filesystem.delete")) {
      authorized.push("filesystem.delete");
    }
  } else if (!blocked.includes("filesystem.delete")) {
    blocked.push("filesystem.delete");
    reasons.push("no_delete_policy");
  }

  // CR-GCEC-24 — validation.run must NOT appear when not executable.
  if (
    !classified.executableEffects.includes("validation.run") &&
    !blocked.includes("validation.run")
  ) {
    blocked.push("validation.run");
    reasons.push("validation_not_required");
  }

  if (
    authorized.includes("github.pr.create") &&
    !authorized.includes("github.pr.update")
  ) {
    if (!blocked.includes("github.pr.update")) {
      blocked.push("github.pr.update");
    }
  }

  return {
    executionContractId: input.executionContractId,
    attemptLineageKey:
      input.attemptLineageKey ?? input.executionContractId,
    authorizedEffects: authorized,
    blockedEffects: blocked,
    reasons,
  };
}

export function sliceAllows(
  slice: AuthorizedExecutionSlice,
  effect: CursorAuthorizedEffectId,
): boolean {
  return slice.authorizedEffects.includes(effect);
}
