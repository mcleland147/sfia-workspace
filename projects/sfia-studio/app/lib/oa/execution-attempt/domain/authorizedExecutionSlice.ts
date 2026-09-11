/**
 * AuthorizedExecutionSlice — current authorized Cursor effects (D-GCEC-13).
 * Derived from EC ∩ agent capabilities ∩ HD ∩ Confirmations ∩ runtime policy.
 * Future gated effects are NOT granted in advance.
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

function confirmationGrants(
  confirmations: readonly Confirmation[],
  scopeNeedle: string,
  nowIso: string,
): boolean {
  return confirmations.some((c) => {
    if (c.status !== "granted") return false;
    if (c.expiresAt && c.expiresAt < nowIso) return false;
    return c.scope.includes(scopeNeedle) || c.actionRef === scopeNeedle;
  });
}

/**
 * Derive the current authorized effect slice.
 * Docs-write baseline: filesystem + validation.
 * Git effects require explicit Confirmation per effect.
 */
export function deriveAuthorizedExecutionSlice(input: {
  executionContractId: string;
  attemptLineageKey?: string;
  requiredCapabilities?: readonly string[];
  evidenceRequirements?: readonly string[];
  confirmations?: readonly Confirmation[];
  nowIso?: string;
  /** When true, filesystem.delete may be authorized (default false / noDelete). */
  allowDelete?: boolean;
}): AuthorizedExecutionSlice {
  const nowIso = input.nowIso ?? new Date().toISOString();
  const confirmations = input.confirmations ?? [];
  const authorized: CursorAuthorizedEffectId[] = [...FILE_EFFECTS];
  const blocked: CursorAuthorizedEffectId[] = [];
  const reasons: string[] = [];

  if (input.allowDelete) {
    authorized.push("filesystem.delete");
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

  const reqs = input.evidenceRequirements ?? [];
  const wantsGit =
    reqs.some((r) => r.startsWith("git:")) ||
    (input.requiredCapabilities ?? []).some((c) =>
      /git|github|cursor\.docs_write/i.test(c),
    );

  for (const effect of gitCandidates) {
    const needed =
      wantsGit ||
      reqs.some((r) => {
        if (effect === "git.commit")
          return r === "git:local_commit" || r === "git:commit";
        if (effect === "git.push")
          return r === "git:remote_push" || r === "git:push";
        if (effect === "github.pr.create") return r === "git:pull_request";
        if (effect === "github.pr.merge") return r === "git:merge";
        return false;
      });
    if (!needed) {
      blocked.push(effect);
      continue;
    }
    const scope = GIT_EFFECT_CONFIRMATION_SCOPE[effect];
    if (confirmationGrants(confirmations, scope, nowIso)) {
      authorized.push(effect);
    } else {
      blocked.push(effect);
      reasons.push(`confirmation_required:${scope}`);
    }
  }

  // github.pr.update follows create confirmation when create authorized
  if (
    authorized.includes("github.pr.create") &&
    !authorized.includes("github.pr.update")
  ) {
    // keep update blocked unless separately confirmed — conservative
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
