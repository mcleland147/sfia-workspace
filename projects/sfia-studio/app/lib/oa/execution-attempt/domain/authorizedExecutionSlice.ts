/**
 * AuthorizedExecutionSlice — current authorized Cursor effects (D-GCEC-13/15).
 * Derived from EC ∩ agent capabilities ∩ HD ∩ Confirmations ∩ runtime policy.
 * Future gated effects are NOT granted in advance.
 * CR-GCEC-15: cap:cursor.docs_write does NOT imply Git effects.
 * CR-GCEC-19: protected Git effects require effect-target-bound Confirmation
 * (EC + effect + repo + branch/PR when applicable) — generic scope ≠ target identity.
 */
import { createHash } from "node:crypto";
import type { Confirmation } from "@/lib/oa/decision";
import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";

export type AuthorizedExecutionSlice = {
  executionContractId: string;
  attemptLineageKey: string;
  authorizedEffects: CursorAuthorizedEffectId[];
  blockedEffects: CursorAuthorizedEffectId[];
  reasons: string[];
};

const FILE_EFFECTS: CursorAuthorizedEffectId[] = [
  "filesystem.create",
  "filesystem.modify",
  "validation.run",
];

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
 * CR-GCEC-19 — exact target binding. No startsWith / includes fallback on
 * actionRef. Generic actionRef or generic scope alone never authorizes a
 * concrete repo/branch/PR effect.
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
  const scopeNeedle = GIT_EFFECT_CONFIRMATION_SCOPE[effect];
  const expected = buildGitEffectActionRef({
    executionContractId: match.executionContractId,
    effect,
    repositoryRef: match.repositoryRef ?? "",
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
    // Generic actionRef / scope must not substitute target identity.
    if (c.actionRef === scopeNeedle) return false;
    if (!scopeIndicatesEffectClass(c.scope, scopeNeedle, expected)) {
      return false;
    }
    return c.actionRef === expected;
  });
}

/**
 * Derive the current authorized effect slice.
 * Docs-write baseline: filesystem + validation when docs_write/artifact required.
 * Git effects require explicit evidenceRequirements + Confirmation per effect.
 */
export function deriveAuthorizedExecutionSlice(input: {
  executionContractId: string;
  attemptLineageKey?: string;
  requiredCapabilities?: readonly string[];
  evidenceRequirements?: readonly string[];
  confirmations?: readonly Confirmation[];
  nowIso?: string;
  allowDelete?: boolean;
  /** Effects already VERIFIED — excluded from authorized re-execution. */
  verifiedEffects?: readonly CursorAuthorizedEffectId[];
  /** Effects reported but awaiting verification — not re-authorized. */
  waitingVerificationEffects?: readonly CursorAuthorizedEffectId[];
  confirmationMatch?: {
    repositoryRef?: string;
    branchOrRef?: string;
    prNumber?: number;
    actorId?: string;
  };
}): AuthorizedExecutionSlice {
  const nowIso = input.nowIso ?? new Date().toISOString();
  const confirmations = input.confirmations ?? [];
  const verified = new Set(input.verifiedEffects ?? []);
  const waiting = new Set(input.waitingVerificationEffects ?? []);
  const authorized: CursorAuthorizedEffectId[] = [];
  const blocked: CursorAuthorizedEffectId[] = [];
  const reasons: string[] = [];

  const reqs = input.evidenceRequirements ?? [];
  // Docs-write / bounded write baseline: filesystem + validation.
  // CR-GCEC-15: Git is NEVER inferred from capabilities.
  for (const effect of FILE_EFFECTS) {
    if (verified.has(effect) || waiting.has(effect)) {
      blocked.push(effect);
      reasons.push(
        waiting.has(effect)
          ? `waiting_verification:${effect}`
          : `already_verified:${effect}`,
      );
      continue;
    }
    authorized.push(effect);
  }

  if (input.allowDelete) {
    if (!verified.has("filesystem.delete") && !waiting.has("filesystem.delete")) {
      authorized.push("filesystem.delete");
    }
  } else {
    blocked.push("filesystem.delete");
    reasons.push("no_delete_policy");
  }

  const gitCandidates: Array<
    Extract<
      CursorAuthorizedEffectId,
      "git.commit" | "git.push" | "github.pr.create" | "github.pr.merge"
    >
  > = ["git.commit", "git.push", "github.pr.create", "github.pr.merge"];

  for (const effect of gitCandidates) {
    const needed = reqs.some((r) => {
      if (effect === "git.commit")
        return r === "git:local_commit" || r === "git:commit";
      if (effect === "git.push")
        return r === "git:remote_push" || r === "git:push";
      if (effect === "github.pr.create") return r === "git:pull_request";
      if (effect === "github.pr.merge")
        return r === "git:merge" || r === "git:post_merge_verification";
      return false;
    });
    // CR-GCEC-15: NEVER infer Git from cap:cursor.docs_write or repo presence.
    if (!needed) {
      blocked.push(effect);
      continue;
    }
    if (verified.has(effect) || waiting.has(effect)) {
      blocked.push(effect);
      reasons.push(
        waiting.has(effect)
          ? `waiting_verification:${effect}`
          : `already_verified:${effect}`,
      );
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
