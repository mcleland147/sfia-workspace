/**
 * CORR-A / CORR-B — identity ↔ remote fidelity and checkout origin fidelity.
 * DET only. Fake .git/config. No network, no clone.
 *
 * @vitest-environment node
 */
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  SEALED_GIT_TARGET_DEFAULT_BRANCH_ENV,
  SEALED_GIT_TARGET_IDENTITY_ENV,
  SEALED_GIT_TARGET_REMOTE_URL_ENV,
  resolveSealedGitTargetFromEnv,
} from "@/features/project-assistant/w2/resolveTrustedProductLaunchContext";
import { sealRepositoryBindingFromExecutionInputs } from "@/lib/oa/execution-attempt/application/startExecution";
import {
  ManagedProjectRepositoryResolver,
  guardedManagedRepoRootForProtectedGit,
  resolveIdentityMatchedLocalRepo,
  sanitizeManagedRepoIdentity,
} from "@/lib/oa/execution-attempt/infrastructure/managedProjectRepositoryResolver";

const IDENTITY = "acme/widget";
const HTTPS_ORIGIN = `https://github.com/${IDENTITY}.git`;
const SSH_ORIGIN = `git@github.com:${IDENTITY}.git`;

const temps: string[] = [];

afterEach(() => {
  while (temps.length > 0) {
    const dir = temps.pop();
    if (dir) rmSync(dir, { recursive: true, force: true });
  }
});

function tempBase(): string {
  const base = mkdtempSync(path.join(os.tmpdir(), "sfia-git-fidelity-"));
  temps.push(base);
  return base;
}

function writeDirCheckout(originUrl: string | null): {
  base: string;
  repoRoot: string;
} {
  const base = tempBase();
  const repoRoot = path.join(base, sanitizeManagedRepoIdentity(IDENTITY));
  const gitDir = path.join(repoRoot, ".git");
  mkdirSync(gitDir, { recursive: true });
  if (originUrl != null) {
    writeFileSync(
      path.join(gitDir, "config"),
      `[core]\n\trepositoryformatversion = 0\n[remote "origin"]\n\turl = ${originUrl}\n`,
      "utf8",
    );
  }
  return { base, repoRoot };
}

function writeWorktreeCheckout(originUrl: string): {
  base: string;
  repoRoot: string;
} {
  const base = tempBase();
  const repoRoot = path.join(base, sanitizeManagedRepoIdentity(IDENTITY));
  mkdirSync(repoRoot, { recursive: true });
  const mainGit = path.join(base, "main.git");
  const wtGit = path.join(mainGit, "worktrees", "wt");
  mkdirSync(wtGit, { recursive: true });
  writeFileSync(
    path.join(mainGit, "config"),
    `[remote "origin"]\n\turl = ${originUrl}\n`,
    "utf8",
  );
  writeFileSync(path.join(wtGit, "commondir"), "../..\n", "utf8");
  writeFileSync(path.join(wtGit, "HEAD"), "ref: refs/heads/main\n", "utf8");
  writeFileSync(path.join(repoRoot, ".git"), `gitdir: ${wtGit}\n`, "utf8");
  return { base, repoRoot };
}

describe("git target identity ↔ remote fidelity", () => {
  it("T1 HTTPS coherent accept, including synthesized remote when absent", () => {
    const provided = resolveSealedGitTargetFromEnv({
      [SEALED_GIT_TARGET_IDENTITY_ENV]: IDENTITY,
      [SEALED_GIT_TARGET_REMOTE_URL_ENV]: HTTPS_ORIGIN,
      [SEALED_GIT_TARGET_DEFAULT_BRANCH_ENV]: "main",
    });
    expect(provided).toEqual({
      identity: IDENTITY,
      remoteUrl: HTTPS_ORIGIN,
      defaultBranch: "main",
    });

    const synthesized = resolveSealedGitTargetFromEnv({
      [SEALED_GIT_TARGET_IDENTITY_ENV]: IDENTITY,
    });
    expect(synthesized).toEqual({
      identity: IDENTITY,
      remoteUrl: HTTPS_ORIGIN,
      defaultBranch: "main",
    });

    const sealed = sealRepositoryBindingFromExecutionInputs({
      identity: IDENTITY,
      remoteUrl: HTTPS_ORIGIN,
      defaultBranch: "main",
      pathRoot: "docs",
    });
    expect(sealed.ok).toBe(true);
    if (sealed.ok) {
      expect(sealed.binding.remoteUrl).toBe(HTTPS_ORIGIN);
      expect(sealed.binding.pathRoot).toBe("docs");
    }

    const synthesizedBinding = sealRepositoryBindingFromExecutionInputs({
      identity: IDENTITY,
    });
    expect(synthesizedBinding.ok).toBe(true);
    if (synthesizedBinding.ok) {
      expect(synthesizedBinding.binding.remoteUrl).toBe(HTTPS_ORIGIN);
    }
  });

  it("T2 SSH coherent accept", () => {
    const sshScp = resolveSealedGitTargetFromEnv({
      [SEALED_GIT_TARGET_IDENTITY_ENV]: IDENTITY,
      [SEALED_GIT_TARGET_REMOTE_URL_ENV]: SSH_ORIGIN,
    });
    expect(sshScp?.identity).toBe(IDENTITY);
    expect(sshScp?.remoteUrl).toBe(SSH_ORIGIN);

    const sshUrl = "ssh://git@github.com/acme/widget.git";
    const sshProtocol = resolveSealedGitTargetFromEnv({
      [SEALED_GIT_TARGET_IDENTITY_ENV]: IDENTITY,
      [SEALED_GIT_TARGET_REMOTE_URL_ENV]: sshUrl,
    });
    expect(sshProtocol?.remoteUrl).toBe(sshUrl);

    const sealed = sealRepositoryBindingFromExecutionInputs({
      identity: IDENTITY,
      remoteUrl: SSH_ORIGIN,
    });
    expect(sealed.ok).toBe(true);
    if (sealed.ok) expect(sealed.binding.remoteUrl).toBe(SSH_ORIGIN);
  });

  it("T3 owner/repo diverge refuse", () => {
    expect(
      resolveSealedGitTargetFromEnv({
        [SEALED_GIT_TARGET_IDENTITY_ENV]: IDENTITY,
        [SEALED_GIT_TARGET_REMOTE_URL_ENV]: "https://github.com/other/repo.git",
      }),
    ).toBeNull();
    expect(
      resolveSealedGitTargetFromEnv({
        [SEALED_GIT_TARGET_IDENTITY_ENV]: IDENTITY,
        [SEALED_GIT_TARGET_REMOTE_URL_ENV]: "git@github.com:acme/other.git",
      }),
    ).toBeNull();

    const sealed = sealRepositoryBindingFromExecutionInputs({
      identity: IDENTITY,
      remoteUrl: "https://github.com/other/repo.git",
    });
    expect(sealed).toEqual({
      ok: false,
      code: "REAL_WORKSPACE_INVALID",
      reason: "repository_remote_identity_mismatch",
    });
  });

  it("T4 non-github host refuse", () => {
    expect(
      resolveSealedGitTargetFromEnv({
        [SEALED_GIT_TARGET_IDENTITY_ENV]: IDENTITY,
        [SEALED_GIT_TARGET_REMOTE_URL_ENV]: "https://gitlab.com/acme/widget.git",
      }),
    ).toBeNull();
    expect(
      resolveSealedGitTargetFromEnv({
        [SEALED_GIT_TARGET_IDENTITY_ENV]: IDENTITY,
        [SEALED_GIT_TARGET_REMOTE_URL_ENV]:
          "https://github.com.evil.example/acme/widget.git",
      }),
    ).toBeNull();
    expect(
      resolveSealedGitTargetFromEnv({
        [SEALED_GIT_TARGET_IDENTITY_ENV]: IDENTITY,
        [SEALED_GIT_TARGET_REMOTE_URL_ENV]: "git@gitlab.com:acme/widget.git",
      }),
    ).toBeNull();
    expect(
      resolveSealedGitTargetFromEnv({
        [SEALED_GIT_TARGET_IDENTITY_ENV]: "not a repo",
        [SEALED_GIT_TARGET_REMOTE_URL_ENV]: HTTPS_ORIGIN,
      }),
    ).toBeNull();

    const sealed = sealRepositoryBindingFromExecutionInputs({
      identity: IDENTITY,
      remoteUrl: "https://example.com/acme/widget.git",
    });
    expect(sealed).toEqual({
      ok: false,
      code: "REAL_WORKSPACE_INVALID",
      reason: "repository_remote_identity_mismatch",
    });
  });

  it("T5 checkout .git with wrong HTTPS origin is refused", () => {
    const wrong = writeDirCheckout("https://github.com/other/repo.git");
    const resolved = resolveIdentityMatchedLocalRepo({
      identity: IDENTITY,
      managedRootBase: wrong.base,
    });
    expect(resolved).toEqual({
      ok: false,
      reason: "managed_repo_identity_mismatch",
    });

    const missingOrigin = writeDirCheckout(null);
    expect(
      resolveIdentityMatchedLocalRepo({
        identity: IDENTITY,
        managedRootBase: missingOrigin.base,
      }),
    ).toEqual({
      ok: false,
      reason: "managed_repo_identity_mismatch",
    });

    const coherent = writeDirCheckout(HTTPS_ORIGIN);
    const accepted = resolveIdentityMatchedLocalRepo({
      identity: IDENTITY,
      managedRootBase: coherent.base,
    });
    expect(accepted).toEqual({ ok: true, repoRoot: coherent.repoRoot });
  });

  it("T6 managed root absent → null", () => {
    const base = tempBase();
    const resolved = resolveIdentityMatchedLocalRepo({
      identity: IDENTITY,
      managedRootBase: base,
    });
    expect(resolved).toEqual({ ok: false, reason: "managed_repo_absent" });
    expect(
      new ManagedProjectRepositoryResolver().resolveIdentityMatchedLocalRepoRoot(
        { identity: IDENTITY },
        base,
      ),
    ).toBeNull();
  });

  it("T7 checkout .git with wrong SSH origin is refused", () => {
    const wrong = writeDirCheckout("git@github.com:other/repo.git");
    expect(
      resolveIdentityMatchedLocalRepo({
        identity: IDENTITY,
        managedRootBase: wrong.base,
      }),
    ).toEqual({
      ok: false,
      reason: "managed_repo_identity_mismatch",
    });

    const coherent = writeDirCheckout(SSH_ORIGIN);
    expect(
      resolveIdentityMatchedLocalRepo({
        identity: IDENTITY,
        managedRootBase: coherent.base,
      }),
    ).toEqual({ ok: true, repoRoot: coherent.repoRoot });
  });

  it("T8 worktree .git file is accepted only when the resolved origin matches", () => {
    const coherent = writeWorktreeCheckout(HTTPS_ORIGIN);
    expect(
      resolveIdentityMatchedLocalRepo({
        identity: IDENTITY,
        managedRootBase: coherent.base,
      }),
    ).toEqual({ ok: true, repoRoot: coherent.repoRoot });

    const wrong = writeWorktreeCheckout("https://github.com/other/repo.git");
    expect(
      resolveIdentityMatchedLocalRepo({
        identity: IDENTITY,
        managedRootBase: wrong.base,
      }),
    ).toEqual({
      ok: false,
      reason: "managed_repo_identity_mismatch",
    });
  });

  it("T9 protected path with insufficient checkout fails closed", () => {
    const wrong = writeDirCheckout("https://gitlab.com/acme/widget.git");
    const resolution = resolveIdentityMatchedLocalRepo({
      identity: IDENTITY,
      managedRootBase: wrong.base,
    });
    const guarded = guardedManagedRepoRootForProtectedGit({
      protectedGitPending: true,
      checked: true,
      resolution,
    });
    expect(guarded).toEqual({
      ok: false,
      code: "REAL_WORKSPACE_INVALID",
      reason: "managed_repo_identity_mismatch",
    });

    const absent = guardedManagedRepoRootForProtectedGit({
      protectedGitPending: true,
      checked: true,
      resolution: { ok: false, reason: "managed_repo_absent" },
    });
    expect(absent).toEqual({
      ok: false,
      code: "REAL_WORKSPACE_INVALID",
      reason: "managed_repo_absent",
    });

    const nonProtected = guardedManagedRepoRootForProtectedGit({
      protectedGitPending: false,
      checked: true,
      resolution,
    });
    expect(nonProtected).toEqual({ ok: true });
  });
});
