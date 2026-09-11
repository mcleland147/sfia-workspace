/**
 * AuthorizedExecutionSlice — current authorized Cursor effects (D-GCEC-13/15).
 * Derived from EC ∩ agent capabilities ∩ HD ∩ Confirmations ∩ runtime policy.
 * Future gated effects are NOT granted in advance.
 * CR-GCEC-15: cap:cursor.docs_write does NOT imply Git effects.
 */
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
  const safeRepo = input.repositoryRef.replace(/[^a-zA-Z0-9._-]+/g, "__");
  const safeContract = input.executionContractId.replace(
    /[^a-zA-Z0-9:._-]+/g,
    "",
  );
  const parts = ["act", scope.replace(/:/g, "-"), safeContract, safeRepo];
  if (input.branchOrRef) {
    parts.push(`ref:${input.branchOrRef.replace(/[^a-zA-Z0-9._-]+/g, "__")}`);
  }
  if (input.prNumber != null) parts.push(`pr:${input.prNumber}`);
  const joined = parts.join(":");
  // OA identifier max length 128 — keep prefix discriminative.
  return joined.length <= 128 ? joined : joined.slice(0, 128);
}

function confirmationGrantsEffect(
  confirmations: readonly Confirmation[],
  effect:
    | "git.commit"
    | "git.push"
    | "github.pr.create"
    | "github.pr.merge",
  nowIso: string,
  match?: {
    executionContractId?: string;
    repositoryRef?: string;
    branchOrRef?: string;
    prNumber?: number;
    actorId?: string;
  },
): boolean {
  const scopeNeedle = GIT_EFFECT_CONFIRMATION_SCOPE[effect];
  return confirmations.some((c) => {
    if (c.status !== "granted") return false;
    if (c.expiresAt && c.expiresAt < nowIso) return false;
    if (
      match?.actorId &&
      c.requestedTo &&
      c.requestedTo.actorId !== match.actorId
    ) {
      return false;
    }
    const scopeOk =
      c.scope.includes(scopeNeedle) || c.actionRef === scopeNeedle;
    if (!scopeOk && match?.executionContractId) {
      const expected = buildGitEffectActionRef({
        executionContractId: match.executionContractId,
        effect,
        repositoryRef: match.repositoryRef ?? "",
        branchOrRef: match.branchOrRef,
        prNumber: match.prNumber,
      });
      if (c.actionRef !== expected && !c.actionRef.startsWith(expected)) {
        // Allow exact actionRef built for this effect+target
        if (
          !c.actionRef.includes(scopeNeedle.replace(/:/g, "-")) ||
          (match.repositoryRef &&
            !c.actionRef.includes(match.repositoryRef.replace(/\//g, "__")))
        ) {
          return false;
        }
        if (
          match.prNumber != null &&
          !c.actionRef.includes(`pr:${match.prNumber}`)
        ) {
          return false;
        }
        if (
          match.repositoryRef &&
          c.actionRef.includes("__") &&
          !c.actionRef.includes(match.repositoryRef.replace(/\//g, "__"))
        ) {
          return false;
        }
      }
    } else if (!scopeOk) {
      return false;
    }
    // Target binding: if actionRef encodes repo/PR, enforce match
    if (match?.repositoryRef && c.actionRef.includes("__")) {
      if (!c.actionRef.includes(match.repositoryRef.replace(/\//g, "__"))) {
        return false;
      }
    }
    if (match?.prNumber != null && c.actionRef.includes("pr:")) {
      if (!c.actionRef.includes(`pr:${match.prNumber}`)) return false;
    }
    return true;
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
