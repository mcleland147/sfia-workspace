/**
 * StudioCursorRealLaunchGateway — OA-owned REAL launch ACL (D-M4-01).
 *
 * Harvested concepts from OPS1 (no import from lib/ops1).
 * Default REAL process enablement OFF via SFIA_STUDIO_CURSOR_REAL.
 * Requires ProcessRunner + RealExecutionWorkspacePort (no Fake defaults).
 * Order: enablement → bin resolve → prepareWorkspace → runner.invoke.
 */
import { accessSync, constants } from "node:fs";
import path from "node:path";
import {
  isStudioCursorRealEnabled,
  M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
  M4_BOUNDED_PR_MERGE_CURSOR_AGENT_ID,
  M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
  M4_REAL_GATEWAY_ADAPTER_ID,
  SFIA_STUDIO_CURSOR_REAL_FLAG,
} from "../domain/realLaunchSafety";
import type {
  ProcessRunner,
  RealExecutionLaunchPort,
  RealLaunchRequest,
  RealLaunchResult,
  RealProcessObservation,
} from "../ports/realExecutionLaunchPort";
import type { RealExecutionWorkspacePort } from "../ports/realExecutionWorkspacePort";
import { DisabledRealProcessRunner } from "./nodeCursorProcessRunner";
import { assertResolvedTimeoutMs } from "@/lib/oa/execution-contract";
import {
  CURSOR_TRUST_MARKER_PATH_TOO_LONG_REASON,
  isCursorTrustMarkerPathCompatible,
} from "./cursorTrustMarkerPathCompatibility";
import { M4_BOUNDED_DOCS_WRITE_ACTION } from "./m4BoundedDocsWriteCursorAgent";
import { M4_BOUNDED_LOCAL_COMMIT_ACTION } from "./m4BoundedLocalCommitCursorAgent";
import { M4_BOUNDED_REMOTE_PUSH_ACTION } from "./m4BoundedRemotePushCursorAgent";
import { M4_BOUNDED_PR_CREATE_ACTION } from "./m4BoundedPrCreateCursorAgent";
import { M4_BOUNDED_PR_MERGE_ACTION } from "./m4BoundedPrMergeCursorAgent";
import { isBoundedGitCommitOnlySlice } from "../domain/verifyLocalCommitFacts";
import { buildGitCommitLaunchSpec } from "../domain/gitCommitLaunchSpec";
import {
  buildGitPushLaunchSpec,
  isBoundedGitPushOnlySlice,
} from "../domain/gitPushLaunchSpec";
import {
  buildGitPrCreateLaunchSpec,
  isBoundedGitPrCreateOnlySlice,
} from "../domain/gitPrCreateLaunchSpec";
import {
  buildGitPrMergeLaunchSpec,
  isBoundedGitPrMergeOnlySlice,
} from "../domain/gitPrMergeLaunchSpec";
import {
  posixShellSingleQuote,
} from "../domain/shellSafeArg";
import {
  buildMutatingCursorConfinementEnv,
  isMutatingGcecCursorProfile,
  resolveMutatingConfinementEffectClass,
} from "./mutatingCursorConfinementEnv";

function buildBoundedLocalCommitInstruction(input: {
  readonly spec: NonNullable<RealLaunchRequest["gitCommitSpec"]>;
  readonly target?: string;
  readonly action?: string;
  readonly scope?: string;
  readonly semanticFingerprint: string;
}): string {
  const paths = input.spec.exactPaths.join(", ");
  const pathList = input.spec.exactPaths.map((p) => `  - ${p}`).join("\n");
  return [
    "TÂCHE UNIQUE — bounded local git.commit déterministe (GCEC).",
    `Repository: ${input.spec.repositoryRef}`,
    `Expected parent HEAD (H0): ${input.spec.expectedParentSha}`,
    `Commit message exacte (une seule ligne sujet): ${input.spec.commitMessage}`,
    "Chemins exacts autorisés à stager (UNIQUEMENT ceux-ci):",
    pathList,
    "Séquence Shell autorisée UNIQUEMENT (aucune autre commande):",
    "  git status --short",
    `  git diff -- ${input.spec.exactPaths.join(" ")}`,
    `  git add -- ${input.spec.exactPaths.join(" ")}`,
    "  git diff --cached --name-only",
    "  git diff --cached --check",
    `  git commit -m ${JSON.stringify(input.spec.commitMessage)}`,
    "  git rev-parse HEAD",
    "  git show --format=fuller --name-only --no-patch HEAD",
    "INTERDIT: push, fetch mutatif, pull, remote add/set-url, branch create/delete,",
    "checkout, switch, reset, restore, rebase, merge, amend, tag, clean,",
    "toute édition de fichier (Write/StrReplace), toute suppression,",
    "PR/merge GitHub, wildcard path, script shell fourni par l'appelant.",
    `Paths summary: ${paths}`,
    "Utiliser Shell uniquement pour la séquence ci-dessus. Aucun outil d'édition.",
    "En cas d'ambiguïté: STOP immédiatement sans mutation.",
    `target=${input.target ?? ""}`,
    `action=${input.action ?? ""}`,
    `scope=${input.scope ?? ""}`,
    `fingerprint=${input.semanticFingerprint}`,
  ].join("\n");
}

function buildBoundedRemotePushInstruction(input: {
  readonly spec: NonNullable<RealLaunchRequest["gitPushSpec"]>;
  readonly target?: string;
  readonly action?: string;
  readonly scope?: string;
  readonly semanticFingerprint: string;
}): string {
  const branchRef = `refs/heads/${input.spec.branchName}`;
  return [
    "TÂCHE UNIQUE — bounded remote git.push déterministe (GCEC).",
    `Repository: ${input.spec.repositoryRef}`,
    `Remote exact: ${input.spec.remoteName}`,
    `Branch exacte (feature only): ${input.spec.branchName}`,
    `Local ref exacte: ${branchRef}`,
    `Expected commit SHA: ${input.spec.expectedCommitSha}`,
    "Séquence Shell autorisée UNIQUEMENT (STOP sans mutation si échec):",
    `  1) git remote get-url ${input.spec.remoteName}`,
    `     → l'URL observée DOIT identifier le même dépôt que repositoryRef=${input.spec.repositoryRef}`,
    `       (https://github.com/<owner>/<repo>[.git] ou git@github.com:<owner>/<repo>[.git]).`,
    `       Sinon: STOP — ne pas pousser.`,
    `  2) git rev-parse ${branchRef}`,
    `     → le SHA observé DOIT être exactement ${input.spec.expectedCommitSha}.`,
    `       Absent / mismatch / usage de HEAD seul à la place de ${branchRef}: STOP — ne pas pousser.`,
    `  3) Seulement si (1)+(2) OK:`,
    `     git push ${input.spec.remoteName} ${branchRef}:${input.spec.branchName}`,
    "INTERDIT: --force / -f / --force-with-lease, --delete / :branch delete,",
    "--tags / --follow-tags, push vers main/master, fetch mutatif, pull,",
    "remote add/set-url, checkout, reset, rebase, merge, amend, PR/merge GitHub,",
    "édition de fichiers, script shell fourni par l'appelant,",
    "substituer HEAD au ref de branche, auto-créer la branche locale absente.",
    "force=false delete=false noTags=true — non négociable.",
    "En cas d'ambiguïté: STOP immédiatement sans mutation.",
    `target=${input.target ?? ""}`,
    `action=${input.action ?? ""}`,
    `scope=${input.scope ?? ""}`,
    `fingerprint=${input.semanticFingerprint}`,
  ].join("\n");
}

function buildBoundedPrCreateInstruction(input: {
  readonly spec: NonNullable<RealLaunchRequest["gitPrCreateSpec"]>;
  readonly target?: string;
  readonly action?: string;
  readonly scope?: string;
  readonly semanticFingerprint: string;
}): string {
  const qRepo = posixShellSingleQuote(input.spec.repositoryRef);
  const qHead = posixShellSingleQuote(input.spec.headBranch);
  const qBase = posixShellSingleQuote(input.spec.baseBranch);
  const qTitle = posixShellSingleQuote(input.spec.title);
  const qBody =
    input.spec.body != null
      ? posixShellSingleQuote(input.spec.body)
      : undefined;
  const branchRefApi = `repos/${input.spec.repositoryRef}/git/ref/heads/${input.spec.headBranch}`;
  return [
    "TÂCHE UNIQUE — bounded github.pr.create déterministe (GCEC).",
    `Repository: ${input.spec.repositoryRef}`,
    `Head branch exacte: ${input.spec.headBranch}`,
    `Base branch exacte: ${input.spec.baseBranch}`,
    `Expected head SHA (lié au push C): ${input.spec.expectedHeadSha}`,
    `Title exact: ${input.spec.title}`,
    ...(input.spec.body ? [`Body: ${input.spec.body}`] : []),
    "Avant gh pr create (lecture seule — lier remote head au SHA pushé):",
    `  1) gh api ${posixShellSingleQuote(branchRefApi)} --jq .object.sha`,
    `     → le SHA observé DOIT être exactement ${input.spec.expectedHeadSha}.`,
    "       Absent / mismatch: STOP — ne pas créer la PR.",
    "Commande autorisée UNIQUEMENT (après (1) OK):",
    `  gh pr create --repo ${qRepo} --head ${qHead} --base ${qBase} --title ${qTitle}` +
      (qBody ? ` --body ${qBody}` : ""),
    "INTERDIT: omettre --repo, --auto-merge / enable auto-merge, merge, squash, rebase,",
    "push force, delete branch, édition hors PR create, script shell libre,",
    "JSON.stringify / interpolation non quotée du body (les $(...) restent littéraux via quotes).",
    "En cas d'ambiguïté: STOP immédiatement sans mutation.",
    `target=${input.target ?? ""}`,
    `action=${input.action ?? ""}`,
    `scope=${input.scope ?? ""}`,
    `fingerprint=${input.semanticFingerprint}`,
  ].join("\n");
}

function buildBoundedPrMergeInstruction(input: {
  readonly spec: NonNullable<RealLaunchRequest["gitPrMergeSpec"]>;
  readonly target?: string;
  readonly action?: string;
  readonly scope?: string;
  readonly semanticFingerprint: string;
}): string {
  const methodFlag =
    input.spec.mergeMethod === "squash"
      ? "--squash"
      : input.spec.mergeMethod === "rebase"
        ? "--rebase"
        : "--merge";
  const qRepo = posixShellSingleQuote(input.spec.repositoryRef);
  return [
    "TÂCHE UNIQUE — bounded github.pr.merge déterministe (GCEC).",
    `Repository: ${input.spec.repositoryRef}`,
    `PR number exact (obligatoire): ${input.spec.prNumber}`,
    `Expected head SHA: ${input.spec.expectedHeadSha}`,
    `Expected head branch: ${input.spec.expectedHeadBranch}`,
    `Expected base branch: ${input.spec.expectedBaseBranch}`,
    `Merge method: ${input.spec.mergeMethod}`,
    "Avant merge (défense en profondeur — StartExecution fresh RepositoryRead est l'autorité):",
    `  gh pr view ${input.spec.prNumber} --repo ${qRepo} --json state,headRefOid,baseRefName,headRefName`,
    "  Comparer EXPLICITEMENT les quatre champs; STOP sur tout mismatch AVANT gh pr merge:",
    "    - state == OPEN",
    `    - headRefOid == ${input.spec.expectedHeadSha}`,
    `    - headRefName == ${input.spec.expectedHeadBranch}`,
    `    - baseRefName == ${input.spec.expectedBaseBranch}`,
    "Commande autorisée UNIQUEMENT (après les quatre comparaisons OK):",
    `  gh pr merge ${input.spec.prNumber} --repo ${qRepo} ${methodFlag}`,
    "INTERDIT: omettre --repo, autre PR number, --admin, --auto, enable auto-merge,",
    "delete branch / --delete-branch, force push, script shell libre.",
    "En cas d'ambiguïté: STOP immédiatement sans mutation.",
    `target=${input.target ?? ""}`,
    `action=${input.action ?? ""}`,
    `scope=${input.scope ?? ""}`,
    `fingerprint=${input.semanticFingerprint}`,
  ].join("\n");
}

export type StudioCursorRealLaunchGatewayOptions = {
  readonly processRunner: ProcessRunner;
  readonly workspacePort: RealExecutionWorkspacePort;
  readonly env?: NodeJS.ProcessEnv;
  readonly resolveCursorBin?: () => string | null;
};

/** Copy of OPS1 resolveCursorBinPath pattern — no ops1 import. */
export function resolveCursorBinPath(
  env: NodeJS.ProcessEnv = process.env,
): string | null {
  const candidates = [
    env.SFIA_CURSOR_BIN,
    "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
    path.join(env.HOME ?? "", ".local/bin/cursor-agent"),
  ].filter(Boolean) as string[];
  for (const c of candidates) {
    try {
      accessSync(c, constants.X_OK);
      return c;
    } catch {
      /* next */
    }
  }
  return null;
}

export const resolveStudioCursorBinPath = resolveCursorBinPath;

export { DisabledRealProcessRunner };

export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
  readonly gatewayId = M4_REAL_GATEWAY_ADAPTER_ID;
  readonly externalEffects = true as const;

  private readonly runner: ProcessRunner;
  private readonly workspacePort: RealExecutionWorkspacePort;
  private readonly env: NodeJS.ProcessEnv;
  private readonly resolveBin: () => string | null;
  /**
   * Fallback only when the runner has no observe/awaitCompletion.
   * Live observation source is the runner registry when present
   * (single source — no competing snapshot).
   */
  private readonly fallbackObservations = new Map<
    string,
    RealProcessObservation
  >();

  constructor(options: StudioCursorRealLaunchGatewayOptions) {
    if (!options.processRunner) {
      throw new Error("studio_cursor_real_launch_process_runner_required");
    }
    if (!options.workspacePort) {
      throw new Error("studio_cursor_real_launch_workspace_port_required");
    }
    this.runner = options.processRunner;
    this.workspacePort = options.workspacePort;
    this.env = options.env ?? process.env;
    this.resolveBin =
      options.resolveCursorBin ?? (() => resolveCursorBinPath(this.env));
  }

  async launch(request: RealLaunchRequest): Promise<RealLaunchResult> {
    if (request.adapterRef !== this.gatewayId) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "adapter_ref_mismatch",
        realProcessInvoked: false,
        detailCode: "REAL_AGENT_PROFILE_INVALID",
      };
    }

    if (!isStudioCursorRealEnabled(this.env)) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "studio_cursor_real_disabled",
        realProcessInvoked: false,
        detailCode: "REAL_BOUNDARY_DISABLED",
      };
    }

    if (
      (request.target && request.target.includes("UNRESOLVED")) ||
      (request.action && request.action.includes("UNRESOLVED"))
    ) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "unresolved_contract_refused",
        realProcessInvoked: false,
        detailCode: "REAL_AGENT_PROFILE_INVALID",
      };
    }

    if (!assertResolvedTimeoutMs(request.timeoutMs)) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "resolved_timeout_ms_required",
        realProcessInvoked: false,
        detailCode: "REAL_LAUNCH_FAILED",
      };
    }

    const baseHeadSha =
      request.baseHeadSha ?? request.worktreeBaseHeadSha ?? "";
    if (!/^[0-9a-f]{40}$/i.test(baseHeadSha)) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "base_head_sha_invalid",
        realProcessInvoked: false,
        detailCode: "REAL_WORKSPACE_INVALID",
      };
    }

    const bin = this.resolveBin();
    if (!bin) {
      return {
        outcome: "fail",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "cursor_unavailable",
        realProcessInvoked: false,
        detailCode: "CURSOR_UNAVAILABLE",
      };
    }

    let workspacePath: string;
    try {
      const continuation = request.workspaceContinuation;
      if (continuation) {
        if (
          typeof continuation.priorAttemptId !== "string" ||
          !continuation.priorAttemptId.trim() ||
          typeof (continuation as { workspacePath?: unknown }).workspacePath ===
            "string"
        ) {
          return {
            outcome: "reject",
            gatewayId: this.gatewayId,
            attemptId: request.attemptId,
            reason: "REAL_WORKSPACE_INVALID:continuation_descriptor_invalid",
            realProcessInvoked: false,
            detailCode: "REAL_WORKSPACE_INVALID",
          };
        }
        if (!this.workspacePort.resumeVerifiedWorkspace) {
          return {
            outcome: "reject",
            gatewayId: this.gatewayId,
            attemptId: request.attemptId,
            reason: "REAL_WORKSPACE_INVALID:resume_unsupported",
            realProcessInvoked: false,
            detailCode: "REAL_WORKSPACE_INVALID",
          };
        }
        const resumed = await this.workspacePort.resumeVerifiedWorkspace({
          currentAttemptId: request.attemptId,
          priorAttemptId: continuation.priorAttemptId,
          expectedHeadSha: continuation.expectedHeadSha,
          expectedVerifiedFiles: continuation.expectedVerifiedFiles,
          ...(request.managedRepoRoot
            ? { managedRepoRoot: request.managedRepoRoot }
            : {}),
          ...(request.repositoryBinding
            ? { repositoryBinding: request.repositoryBinding }
            : {}),
        });
        workspacePath = resumed.workspacePath;
      } else {
        const prepared = await this.workspacePort.prepareWorkspace({
          attemptId: request.attemptId,
          baseHeadSha,
          ...(request.managedRepoRoot
            ? { managedRepoRoot: request.managedRepoRoot }
            : {}),
          ...(request.repositoryBinding
            ? { repositoryBinding: request.repositoryBinding }
            : {}),
        });
        workspacePath = prepared.workspacePath;
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "workspace_failed";
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: message.includes("REAL_WORKSPACE_INVALID")
          ? message
          : `workspace_prepare_failed:${message}`,
        realProcessInvoked: false,
        detailCode: "REAL_WORKSPACE_INVALID",
      };
    }

    if (!isCursorTrustMarkerPathCompatible(workspacePath)) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: CURSOR_TRUST_MARKER_PATH_TOO_LONG_REASON,
        realProcessInvoked: false,
        detailCode: "REAL_WORKSPACE_INVALID",
      };
    }

    // Profile is structured (specs + agent + exclusive slice) — never inferred from prompt prose.
    const gitCommitSpec = request.gitCommitSpec;
    const gitPushSpec = request.gitPushSpec;
    const gitPrCreateSpec = request.gitPrCreateSpec;
    const gitPrMergeSpec = request.gitPrMergeSpec;
    const isLocalCommitProfile =
      Boolean(gitCommitSpec) ||
      request.action === M4_BOUNDED_LOCAL_COMMIT_ACTION;
    const isRemotePushProfile =
      !isLocalCommitProfile &&
      (Boolean(gitPushSpec) ||
        request.action === M4_BOUNDED_REMOTE_PUSH_ACTION);
    const isPrCreateProfile =
      !isLocalCommitProfile &&
      !isRemotePushProfile &&
      (Boolean(gitPrCreateSpec) ||
        request.action === M4_BOUNDED_PR_CREATE_ACTION);
    const isPrMergeProfile =
      !isLocalCommitProfile &&
      !isRemotePushProfile &&
      !isPrCreateProfile &&
      (Boolean(gitPrMergeSpec) ||
        request.action === M4_BOUNDED_PR_MERGE_ACTION);
    const isDocsWrite =
      !isLocalCommitProfile &&
      !isRemotePushProfile &&
      !isPrCreateProfile &&
      !isPrMergeProfile &&
      request.action === M4_BOUNDED_DOCS_WRITE_ACTION;

    const rejectFreeShell = (): RealLaunchResult | null => {
      if (
        typeof (request as { freeShellScript?: unknown }).freeShellScript ===
          "string" ||
        typeof (request as { shellCommand?: unknown }).shellCommand === "string"
      ) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "git_effect_free_shell_rejected",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      return null;
    };

    if (isLocalCommitProfile) {
      if (!gitCommitSpec) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "git_commit_spec_missing",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      // GC-10 — current bounded GCEC commit profile requires Cont01 continuation
      // (Attempt B resume). Progressive Fake paths may omit gateway REAL launch.
      if (!request.workspaceContinuation) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "git_commit_continuation_required",
          realProcessInvoked: false,
          detailCode: "REAL_WORKSPACE_INVALID",
        };
      }
      const auth = request.authorizedEffects;
      if (!isBoundedGitCommitOnlySlice(auth)) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason:
            auth == null
              ? "git_commit_authorized_effects_missing"
              : auth.length === 0
                ? "git_commit_authorized_effects_empty"
                : "git_commit_slice_not_commit_only",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      // GC-01: commit profile requires exact local-commit AgentDescriptor.
      // gitCommitSpec alone MUST NOT select the profile / widen authority.
      // Under current EC action/capability/target/scope identity, Attempt B
      // cannot honestly select this agent for a docs-write EC (STOP escalation).
      if (
        request.selectedAgentRef !== "agt:m4.cursor.bounded_local_commit"
      ) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason:
            request.selectedAgentRef === "agt:m4.cursor.bounded_docs_write"
              ? "git_commit_agent_capability_bypass"
              : "git_commit_selected_agent_invalid",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      // Re-validate structured values (fail closed before Shell child).
      const revalidated = buildGitCommitLaunchSpec({
        repositoryRef: gitCommitSpec.repositoryRef,
        expectedParentSha: gitCommitSpec.expectedParentSha,
        exactPaths: gitCommitSpec.exactPaths,
        commitMessage: gitCommitSpec.commitMessage,
        ...(gitCommitSpec.branchOrRef
          ? { branchOrRef: gitCommitSpec.branchOrRef }
          : {}),
      });
      if (!revalidated.ok) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: revalidated.reason,
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      const freeShell = rejectFreeShell();
      if (freeShell) return freeShell;
    }

    if (isRemotePushProfile) {
      if (!gitPushSpec) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "git_push_spec_missing",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      const auth = request.authorizedEffects;
      if (!isBoundedGitPushOnlySlice(auth)) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason:
            auth == null
              ? "git_push_authorized_effects_missing"
              : "git_push_slice_not_push_only",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      if (request.selectedAgentRef !== M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason:
            request.selectedAgentRef === "agt:m4.cursor.bounded_docs_write" ||
            request.selectedAgentRef === "agt:m4.cursor.bounded_local_commit"
              ? "git_push_agent_capability_bypass"
              : "git_push_selected_agent_invalid",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      if (gitPushSpec.force !== false || gitPushSpec.delete !== false) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "git_push_force_or_delete_rejected",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      const revalidated = buildGitPushLaunchSpec({
        repositoryRef: gitPushSpec.repositoryRef,
        remoteName: gitPushSpec.remoteName,
        branchName: gitPushSpec.branchName,
        expectedCommitSha: gitPushSpec.expectedCommitSha,
        force: false,
        delete: false,
        noTags: true,
      });
      if (!revalidated.ok) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: revalidated.reason,
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      const freeShell = rejectFreeShell();
      if (freeShell) return freeShell;
    }

    if (isPrCreateProfile) {
      if (!gitPrCreateSpec) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "git_pr_create_spec_missing",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      const auth = request.authorizedEffects;
      if (!isBoundedGitPrCreateOnlySlice(auth)) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "git_pr_create_slice_not_create_only",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      if (request.selectedAgentRef !== M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "git_pr_create_agent_capability_bypass",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      const revalidated = buildGitPrCreateLaunchSpec({
        repositoryRef: gitPrCreateSpec.repositoryRef,
        headBranch: gitPrCreateSpec.headBranch,
        baseBranch: gitPrCreateSpec.baseBranch,
        title: gitPrCreateSpec.title,
        expectedHeadSha: gitPrCreateSpec.expectedHeadSha,
        ...(gitPrCreateSpec.body != null ? { body: gitPrCreateSpec.body } : {}),
        expectedBaseBranch: gitPrCreateSpec.baseBranch,
        claimedAutoMerge: (request as { autoMerge?: unknown }).autoMerge,
      });
      if (!revalidated.ok) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: revalidated.reason,
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      const freeShell = rejectFreeShell();
      if (freeShell) return freeShell;
    }

    if (isPrMergeProfile) {
      if (!gitPrMergeSpec) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "git_pr_merge_spec_missing",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      const auth = request.authorizedEffects;
      if (!isBoundedGitPrMergeOnlySlice(auth)) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "git_pr_merge_slice_not_merge_only",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      if (request.selectedAgentRef !== M4_BOUNDED_PR_MERGE_CURSOR_AGENT_ID) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "git_pr_merge_agent_capability_bypass",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      const revalidated = buildGitPrMergeLaunchSpec({
        repositoryRef: gitPrMergeSpec.repositoryRef,
        prNumber: gitPrMergeSpec.prNumber,
        expectedHeadSha: gitPrMergeSpec.expectedHeadSha,
        expectedHeadBranch: gitPrMergeSpec.expectedHeadBranch,
        expectedBaseBranch: gitPrMergeSpec.expectedBaseBranch,
        mergeMethod: gitPrMergeSpec.mergeMethod,
      });
      if (!revalidated.ok) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: revalidated.reason,
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      const freeShell = rejectFreeShell();
      if (freeShell) return freeShell;
    }

    let instruction: string;
    if (isLocalCommitProfile && gitCommitSpec) {
      instruction = buildBoundedLocalCommitInstruction({
        spec: gitCommitSpec,
        target: request.target,
        action: request.action,
        scope: request.scope,
        semanticFingerprint: request.semanticFingerprint,
      });
    } else if (isRemotePushProfile && gitPushSpec) {
      instruction = buildBoundedRemotePushInstruction({
        spec: gitPushSpec,
        target: request.target,
        action: request.action,
        scope: request.scope,
        semanticFingerprint: request.semanticFingerprint,
      });
    } else if (isPrCreateProfile && gitPrCreateSpec) {
      instruction = buildBoundedPrCreateInstruction({
        spec: gitPrCreateSpec,
        target: request.target,
        action: request.action,
        scope: request.scope,
        semanticFingerprint: request.semanticFingerprint,
      });
    } else if (isPrMergeProfile && gitPrMergeSpec) {
      instruction = buildBoundedPrMergeInstruction({
        spec: gitPrMergeSpec,
        target: request.target,
        action: request.action,
        scope: request.scope,
        semanticFingerprint: request.semanticFingerprint,
      });
    } else if (isDocsWrite) {
      const spec = request.docsWriteSpec;
      if (!spec) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "docs_write_spec_missing",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      instruction = [
        "TÂCHE UNIQUE — bounded docs-write déterministe (GCEC).",
        `Créer ou modifier UNIQUEMENT le fichier: ${spec.targetPath}`,
        `Repository: ${spec.repositoryRef}`,
        `Écrire uniquement sous pathAllowlist: ${spec.pathAllowlist.join(", ")}`,
        `Type d'artifact: ${spec.artifactType}`,
        `Brief: ${spec.artifactBrief}`,
        `Exigences de contenu: ${spec.contentRequirements.join("; ")}`,
        `Scope IN: ${spec.scopeIn.join(", ") || "(none)"}`,
        `Scope OUT (interdit): ${spec.scopeOut.join(", ") || "(none)"}`,
        `Sorties attendues: ${spec.expectedOutputs.join(", ")}`,
        `Validations: ${spec.validationExpectations.join(", ") || "path_allowlist; no_delete"}`,
        "Ne créer/modifier AUCUN autre fichier.",
        "Ne supprimer AUCUN fichier (noDelete=true).",
        "Ne pas commit, push, PR, merge, ni remote git.",
        "Ne lancer aucune commande Shell.",
        "Utiliser uniquement les outils d'édition de fichiers (Write/StrReplace).",
        "Ne pas modifier README.md.",
        "En cas d'ambiguïté ou de chemin hors allowlist: STOP immédiatement.",
        `target=${request.target ?? ""}`,
        `action=${request.action ?? ""}`,
        `scope=${request.scope ?? ""}`,
        `fingerprint=${request.semanticFingerprint}`,
      ].join("\n");
    } else {
      instruction = [
        "TÂCHE UNIQUE — preuve read-only déterministe.",
        "Lire uniquement le fichier README.md à la racine du workspace.",
        "Ne modifier aucun fichier.",
        "Ne créer aucun fichier.",
        "Ne lancer aucune commande Shell.",
        "Ne faire aucune recherche récursive, Glob ou Grep.",
        "Ne consulter aucun autre fichier.",
        "Si README.md peut être lu, répondre exactement :",
        "M4_READ_ONLY_OK",
        "Si README.md ne peut pas être lu, répondre exactement :",
        "M4_READ_ONLY_UNAVAILABLE",
        `target=${request.target ?? ""}`,
        `action=${request.action ?? ""}`,
        `scope=${request.scope ?? ""}`,
        `fingerprint=${request.semanticFingerprint}`,
        "Aucune mutation, aucun git remote/commit/push/PR/merge.",
      ].join("\n");
    }

    // Docs-write + git mutation profiles: default agent mode (omit --mode ask).
    // RO: --mode ask. All keep --print + --workspace + --trust + --sandbox enabled.
    const usesAgentMode =
      isDocsWrite ||
      isLocalCommitProfile ||
      isRemotePushProfile ||
      isPrCreateProfile ||
      isPrMergeProfile;
    const argv = usesAgentMode
      ? [
          "agent",
          "--print",
          "--workspace",
          workspacePath,
          "--trust",
          "--sandbox",
          "enabled",
          instruction,
        ]
      : [
          "agent",
          "--print",
          "--mode",
          "ask",
          "--workspace",
          workspacePath,
          "--trust",
          "--sandbox",
          "enabled",
          instruction,
        ];

    // D-GCEC-CONF-02A / D-GCEC-EXEC-01: mutating A+B+C+D+E get server-owned env
    // confinement; effect-sensitive (local vs remote_git vs remote_github).
    // RO / other profiles keep minimal non-mutating spawn env (no auth strip).
    // Prompt forbids remain defense-in-depth — NOT the technical authority boundary.
    // Proves REMOTE AUTH ENVIRONMENT POLICY only — NOT AUTH REAL.
    const childEnv = isMutatingGcecCursorProfile({
      isDocsWrite,
      isLocalCommitProfile,
      isRemotePushProfile,
      isPrCreateProfile,
      isPrMergeProfile,
    })
      ? buildMutatingCursorConfinementEnv(this.env, {
          effectClass: resolveMutatingConfinementEffectClass({
            isRemotePushProfile,
            isPrCreateProfile,
            isPrMergeProfile,
          }),
        })
      : {
          ...this.env,
          [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
          GIT_TERMINAL_PROMPT: "0",
          GCM_INTERACTIVE: "Never",
        };

    try {
      const invoked = await this.runner.invoke({
        attemptId: request.attemptId,
        executable: bin,
        cwd: workspacePath,
        argv,
        timeoutMs: request.timeoutMs,
        env: childEnv,
      });

      if (!invoked.realProcessInvoked) {
        return {
          outcome: "fail",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "real_process_not_invoked",
          realProcessInvoked: false,
          detailCode: "REAL_LAUNCH_FAILED",
        };
      }

      if (typeof this.runner.observe !== "function") {
        this.fallbackObservations.set(invoked.processRef, {
          processRef: invoked.processRef,
          exitCode: invoked.observation?.exitCode ?? null,
          timedOut: invoked.observation?.timedOut ?? false,
          stdout: invoked.observation?.stdout ?? "",
          stderr: invoked.observation?.stderr ?? "",
          durationMs: invoked.observation?.durationMs ?? 0,
          realProcessInvoked: true,
          worktreeRef: workspacePath,
        });
      }

      return {
        outcome: "ack",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        realProcessInvoked: true,
        processRef: invoked.processRef,
        worktreeRef: workspacePath,
      };
    } catch {
      return {
        outcome: "fail",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "real_launch_threw",
        realProcessInvoked: false,
        detailCode: "REAL_LAUNCH_FAILED",
      };
    }
  }

  async observe(processRef: string): Promise<RealProcessObservation | null> {
    if (typeof this.runner.observe === "function") {
      return this.runner.observe(processRef);
    }
    return this.fallbackObservations.get(processRef) ?? null;
  }

  async awaitCompletion(
    processRef: string,
  ): Promise<RealProcessObservation | null> {
    if (typeof this.runner.awaitCompletion === "function") {
      return this.runner.awaitCompletion(processRef);
    }
    return this.observe(processRef);
  }
}

/** @deprecated Prefer StudioCursorRealLaunchGateway. */
export { StudioCursorRealLaunchGateway as CursorCliLaunchGateway };
