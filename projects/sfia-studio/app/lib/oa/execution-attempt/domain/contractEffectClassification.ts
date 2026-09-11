/**
 * CR-GCEC-24 — pure mapping: Cursor executable effects vs Studio verification obligations.
 * No Requirement Engine. No persistence.
 */
import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";

export type VerificationObligationId =
  | "git:ci_status"
  | "git:review_status"
  | "git:post_merge_verification";

const VERIFICATION_ONLY = new Set<string>([
  "git:ci_status",
  "git:review_status",
  "git:post_merge_verification",
]);

export function isStudioVerificationObligation(req: string): boolean {
  return VERIFICATION_ONLY.has(req);
}

/**
 * Derive Cursor-executable effects from effective EC requirements.
 * Verification-only families never produce Cursor mutation effects.
 */
export function deriveExecutableEffectsFromContractRequirements(input: {
  evidenceRequirements?: readonly string[];
  expectedOutputs?: readonly string[];
  requiredCapabilities?: readonly string[];
  /** When true (docs_write createOrModify), filesystem create+modify may both be allowed. */
  allowFilesystemCreateOrModify?: boolean;
}): {
  executableEffects: CursorAuthorizedEffectId[];
  verificationObligations: VerificationObligationId[];
} {
  const reqs = [
    ...(input.evidenceRequirements ?? []),
    ...(input.expectedOutputs ?? []).map((o) =>
      /artifact/i.test(o) ? "artifact" : o,
    ),
  ];
  const executable: CursorAuthorizedEffectId[] = [];
  const verification: VerificationObligationId[] = [];

  const wantsArtifact =
    reqs.some((r) => /artifact|docs_write|filesystem/i.test(r)) ||
    (input.expectedOutputs ?? []).some((o) => /artifact/i.test(o)) ||
    (input.requiredCapabilities ?? []).some((c) => /docs_write/i.test(c));

  const wantsValidation = reqs.some((r) => /validation|tests?/i.test(r));

  if (wantsArtifact) {
    // createOrModify envelope: both may be authorized; completion uses actual result.
    executable.push("filesystem.create", "filesystem.modify");
  }
  if (wantsValidation) {
    executable.push("validation.run");
  }

  for (const r of reqs) {
    if (r === "git:local_commit" || r === "git:commit") {
      if (!executable.includes("git.commit")) executable.push("git.commit");
    } else if (r === "git:remote_push" || r === "git:push") {
      if (!executable.includes("git.push")) executable.push("git.push");
    } else if (r === "git:pull_request") {
      if (!executable.includes("github.pr.create"))
        executable.push("github.pr.create");
    } else if (r === "git:merge") {
      // CR-GCEC-24 — ONLY explicit merge authorizes Cursor merge.
      // post_merge_verification must NOT map here.
      if (!executable.includes("github.pr.merge"))
        executable.push("github.pr.merge");
    } else if (r === "git:ci_status") {
      if (!verification.includes("git:ci_status"))
        verification.push("git:ci_status");
    } else if (r === "git:review_status") {
      if (!verification.includes("git:review_status"))
        verification.push("git:review_status");
    } else if (r === "git:post_merge_verification") {
      if (!verification.includes("git:post_merge_verification"))
        verification.push("git:post_merge_verification");
    }
  }

  void input.allowFilesystemCreateOrModify;
  return { executableEffects: executable, verificationObligations: verification };
}

export function deriveVerificationObligationsFromContractRequirements(input: {
  evidenceRequirements?: readonly string[];
}): VerificationObligationId[] {
  return deriveExecutableEffectsFromContractRequirements({
    evidenceRequirements: input.evidenceRequirements,
  }).verificationObligations;
}
