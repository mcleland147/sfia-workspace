/**
 * R2 — server-side Git HEAD pin for bounded read-only ExecutionContract.inputs.
 * Never reads client mode/adapter/command/real/baseHeadSha.
 */
import {
  isFullGitSha,
  NodeGitCommandRunner,
  type GitCommandRunner,
} from "@/lib/oa/execution-attempt";

export type ResolveBoundedReadOnlyBaseHeadShaInput = {
  readonly gitRunner?: GitCommandRunner;
  readonly startDir?: string;
};

export type ResolveBoundedReadOnlyBaseHeadShaResult =
  | { ok: true; sha: string; repoRoot: string }
  | { ok: false; code: "BASE_HEAD_SHA_UNRESOLVED" | "BASE_HEAD_SHA_INVALID"; message: string };

export async function resolveBoundedReadOnlyBaseHeadSha(
  input: ResolveBoundedReadOnlyBaseHeadShaInput = {},
): Promise<ResolveBoundedReadOnlyBaseHeadShaResult> {
  const gitRunner = input.gitRunner ?? new NodeGitCommandRunner();
  const startDir = input.startDir ?? process.cwd();

  const toplevel = await gitRunner.run(
    ["rev-parse", "--show-toplevel"],
    startDir,
  );
  if (toplevel.exitCode !== 0) {
    return {
      ok: false,
      code: "BASE_HEAD_SHA_UNRESOLVED",
      message:
        "Impossible de résoudre le dépôt Git borné (rev-parse --show-toplevel).",
    };
  }
  const repoRoot = toplevel.stdout.trim();
  if (!repoRoot) {
    return {
      ok: false,
      code: "BASE_HEAD_SHA_UNRESOLVED",
      message: "Racine Git bornée vide — fail-closed.",
    };
  }

  const head = await gitRunner.run(["rev-parse", "HEAD"], repoRoot);
  if (head.exitCode !== 0) {
    return {
      ok: false,
      code: "BASE_HEAD_SHA_UNRESOLVED",
      message: "Impossible de résoudre HEAD du dépôt borné.",
    };
  }
  const sha = head.stdout.trim().toLowerCase();
  if (!isFullGitSha(sha)) {
    return {
      ok: false,
      code: "BASE_HEAD_SHA_INVALID",
      message: "HEAD du dépôt borné n'est pas un SHA Git 40-hex.",
    };
  }
  return { ok: true, sha, repoRoot };
}

export function validateBaseHeadSha(
  value: unknown,
): string | null {
  if (typeof value !== "string") return null;
  const sha = value.trim().toLowerCase();
  return isFullGitSha(sha) ? sha : null;
}
