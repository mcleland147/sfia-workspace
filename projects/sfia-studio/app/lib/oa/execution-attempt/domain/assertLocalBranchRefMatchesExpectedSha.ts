/**
 * CR-01 — Fake / gateway parity: local branch ref must exist and equal expected SHA.
 * Does NOT consult HEAD as a substitute for refs/heads/<branch>.
 */
export function assertLocalBranchRefMatchesExpectedSha(input: {
  readonly branchHeads: ReadonlyMap<string, string>;
  readonly branchName: string;
  readonly expectedCommitSha: string;
}): { ok: true; sha: string } | { ok: false; reason: string } {
  const branch = input.branchName.trim();
  if (!branch) {
    return { ok: false, reason: "git_push_local_ref_missing" };
  }
  if (!input.branchHeads.has(branch)) {
    return { ok: false, reason: "git_push_local_ref_missing" };
  }
  const observed = input.branchHeads.get(branch)!.trim().toLowerCase();
  const expected = input.expectedCommitSha.trim().toLowerCase();
  if (!/^[0-9a-f]{40}$/.test(expected) || !/^[0-9a-f]{40}$/.test(observed)) {
    return { ok: false, reason: "git_push_local_ref_sha_mismatch" };
  }
  if (observed !== expected) {
    return { ok: false, reason: "git_push_local_ref_sha_mismatch" };
  }
  return { ok: true, sha: observed };
}

/**
 * Repository remote URL must identify the same GitHub repo as repositoryRef
 * (owner/name). Used by Fake push path and documented in gateway push instruction.
 */
export function assertRemoteUrlMatchesRepositoryRef(input: {
  readonly remoteUrl: string;
  readonly repositoryRef: string;
}): { ok: true } | { ok: false; reason: string } {
  if (
    typeof input.remoteUrl !== "string" ||
    !input.remoteUrl.trim()
  ) {
    return { ok: false, reason: "git_push_remote_url_missing" };
  }
  const identity = input.repositoryRef.trim().toLowerCase();
  if (!identity || !/^[^/\s]+\/[^/\s]+$/.test(identity)) {
    return { ok: false, reason: "git_push_remote_url_mismatch" };
  }
  const normalized = input.remoteUrl
    .trim()
    .replace(/\.git$/i, "")
    .replace(/^git@github\.com:/i, "https://github.com/")
    .replace(/^ssh:\/\/git@github\.com\//i, "https://github.com/")
    .toLowerCase();
  const expectedHttps = `https://github.com/${identity}`;
  if (normalized !== expectedHttps) {
    return { ok: false, reason: "git_push_remote_url_mismatch" };
  }
  return { ok: true };
}
