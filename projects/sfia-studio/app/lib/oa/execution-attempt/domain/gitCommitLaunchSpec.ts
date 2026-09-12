/**
 * Server-derived GitCommitLaunchSpec (GCEC bounded local commit).
 * Canonical type — import/re-export; do not duplicate in ports.
 * No free cwd / shell / wildcard. Paths from VERIFIED continuation / EC only.
 * CR-GCEC-GC-03: strict shell-safe grammar for Shell-exposed agent profile.
 */

/** Canonical commit launch contract (single source of truth). */
export type GitCommitLaunchSpec = {
  readonly repositoryRef: string;
  readonly expectedParentSha: string;
  readonly exactPaths: readonly string[];
  readonly commitMessage: string;
  /** Optional branch/ref already modeled on the EC / binding. */
  readonly branchOrRef?: string;
};

/** Bounded subject length for this capability (single-line git subject). */
export const GIT_COMMIT_SUBJECT_MAX_LENGTH = 72;

const FULL_SHA_RE = /^[0-9a-f]{40}$/i;

/** Forbidden characters / patterns in exactPaths for Shell-oriented profile. */
const PATH_FORBIDDEN_RE =
  /[\x00-\x1f\x7f\\ '"$`;&|<>(){}[\]*?!]|\/\.(\.($|\/))|^-|\/-|^\.|\/\.$/;

/** Forbidden in commit subject for this bounded profile. */
const SUBJECT_FORBIDDEN_RE = /[\x00-\x1f\x7f$`"'\\;&|<>(){}[\]*?!\n\r]/;

function isFullSha(v: unknown): v is string {
  return typeof v === "string" && FULL_SHA_RE.test(v.trim());
}

/**
 * Strict relative POSIX path for this capability.
 * Fail closed — never silently normalize hostile input into a safe path.
 */
export function assertShellSafeRelativePath(
  raw: string,
): { ok: true; path: string } | { ok: false; reason: string } {
  if (typeof raw !== "string" || raw.length === 0) {
    return { ok: false, reason: "git_commit_exact_path_empty" };
  }
  if (raw !== raw.trim()) {
    return { ok: false, reason: "git_commit_exact_path_whitespace" };
  }
  if (raw.includes(" ") || /\s/.test(raw)) {
    return { ok: false, reason: "git_commit_exact_path_whitespace" };
  }
  if (raw.startsWith("/") || raw.startsWith("~")) {
    return { ok: false, reason: "git_commit_exact_path_absolute" };
  }
  if (raw.includes("\\")) {
    return { ok: false, reason: "git_commit_exact_path_backslash" };
  }
  if (raw.includes("..")) {
    return { ok: false, reason: "git_commit_exact_path_dotdot" };
  }
  if (raw.startsWith("-") || raw.split("/").some((c) => c.startsWith("-"))) {
    return { ok: false, reason: "git_commit_exact_path_leading_dash" };
  }
  if (PATH_FORBIDDEN_RE.test(raw)) {
    return { ok: false, reason: "git_commit_exact_path_unsafe" };
  }
  if (!/^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(raw)) {
    return { ok: false, reason: "git_commit_exact_path_charset" };
  }
  if (raw.includes("//") || raw.endsWith("/")) {
    return { ok: false, reason: "git_commit_exact_path_invalid" };
  }
  // Allowed proof path remains valid: docs/functional-design.md
  return { ok: true, path: raw };
}

/**
 * Strict single-line commit subject for this capability.
 */
export function assertShellSafeCommitSubject(
  raw: string,
): { ok: true; message: string } | { ok: false; reason: string } {
  if (typeof raw !== "string") {
    return { ok: false, reason: "git_commit_message_missing" };
  }
  if (raw !== raw.trim()) {
    return { ok: false, reason: "git_commit_message_whitespace" };
  }
  const message = raw.trim();
  if (!message) {
    return { ok: false, reason: "git_commit_message_missing" };
  }
  if (message.includes("\n") || message.includes("\r")) {
    return { ok: false, reason: "git_commit_message_multiline" };
  }
  if (message.length > GIT_COMMIT_SUBJECT_MAX_LENGTH) {
    return { ok: false, reason: "git_commit_message_too_long" };
  }
  if (SUBJECT_FORBIDDEN_RE.test(message) || /\$\(|\$\{/.test(message)) {
    return { ok: false, reason: "git_commit_message_unsafe" };
  }
  // Allow alphanumerics, spaces, and a small punctuation set for "docs: …"
  if (!/^[A-Za-z0-9][A-Za-z0-9 .,:_/+-]*$/.test(message)) {
    return { ok: false, reason: "git_commit_message_charset" };
  }
  return { ok: true, message };
}

/**
 * Build commit launch spec from server-owned facts.
 * Fail closed on empty paths, hostile grammar, missing message.
 */
export function buildGitCommitLaunchSpec(input: {
  readonly repositoryRef: string;
  readonly expectedParentSha: string;
  readonly exactPaths: readonly string[];
  readonly commitMessage: string;
  readonly branchOrRef?: string;
}):
  | { ok: true; spec: GitCommitLaunchSpec }
  | { ok: false; reason: string } {
  const repositoryRef = input.repositoryRef.trim();
  if (!repositoryRef) {
    return { ok: false, reason: "git_commit_repository_ref_missing" };
  }
  if (!isFullSha(input.expectedParentSha)) {
    return { ok: false, reason: "git_commit_expected_parent_sha_invalid" };
  }
  const message = assertShellSafeCommitSubject(input.commitMessage);
  if (!message.ok) return message;

  if (input.exactPaths.length === 0) {
    return { ok: false, reason: "git_commit_exact_paths_empty" };
  }
  const exactPaths: string[] = [];
  for (const raw of input.exactPaths) {
    const n = assertShellSafeRelativePath(raw);
    if (!n.ok) return n;
    exactPaths.push(n.path);
  }
  const unique = [...new Set(exactPaths)].sort();
  if (unique.length !== exactPaths.length) {
    return { ok: false, reason: "git_commit_exact_paths_duplicate" };
  }
  if (input.branchOrRef != null && input.branchOrRef.trim()) {
    const branch = input.branchOrRef.trim();
    if (
      /[\x00-\x1f\x7f$`"'\\;&|<>(){}[\]*?!]/.test(branch) ||
      branch.includes("..") ||
      branch.startsWith("-")
    ) {
      return { ok: false, reason: "git_commit_branch_or_ref_unsafe" };
    }
  }
  return {
    ok: true,
    spec: {
      repositoryRef,
      expectedParentSha: input.expectedParentSha.trim().toLowerCase(),
      exactPaths: unique,
      commitMessage: message.message,
      ...(input.branchOrRef?.trim()
        ? { branchOrRef: input.branchOrRef.trim() }
        : {}),
    },
  };
}

/**
 * Derive trusted commit message from EC inputs / docs-write brief.
 * Never accept hostile free-form outside EC boundary.
 */
export function deriveTrustedCommitMessage(input: {
  readonly contractInputs: Record<string, unknown>;
  readonly docsWriteArtifactBrief?: string;
}): { ok: true; message: string } | { ok: false; reason: string } {
  const fromInput = input.contractInputs.commitMessage;
  if (typeof fromInput === "string" && fromInput.trim()) {
    return assertShellSafeCommitSubject(fromInput);
  }
  const brief = input.docsWriteArtifactBrief?.trim();
  if (brief) {
    return assertShellSafeCommitSubject(`docs: ${brief}`);
  }
  return { ok: false, reason: "git_commit_message_untrusted_or_missing" };
}
