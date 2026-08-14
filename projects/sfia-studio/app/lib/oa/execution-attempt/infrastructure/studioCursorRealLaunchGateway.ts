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

export type StudioCursorRealLaunchGatewayOptions = {
  readonly processRunner: ProcessRunner;
  readonly workspacePort: RealExecutionWorkspacePort;
  readonly env?: NodeJS.ProcessEnv;
  readonly resolveCursorBin?: () => string | null;
  readonly defaultTimeoutMs?: number;
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
  private readonly timeoutMs: number;
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
    this.timeoutMs = options.defaultTimeoutMs ?? 60_000;
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
      const prepared = await this.workspacePort.prepareWorkspace({
        attemptId: request.attemptId,
        baseHeadSha,
      });
      workspacePath = prepared.workspacePath;
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

    // Fixed argv shape — executable is separate; no user-controlled shell.
    // --mode ask: local CLI help documents ask as read-only Q&A (no edits).
    // Shell under ask remains unresolved by help alone; future REAL must observe.
    const instruction = [
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

    const argv = [
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

    try {
      const invoked = await this.runner.invoke({
        attemptId: request.attemptId,
        executable: bin,
        cwd: workspacePath,
        argv,
        timeoutMs: this.timeoutMs,
        env: {
          ...this.env,
          [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
        },
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
