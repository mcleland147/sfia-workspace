/**
 * GIT-C wrapper — transport must be disclosed; no silent fallback; no write.
 * Repository allowlist enforced at D2-D boundary (exact owner/repo), fail-closed.
 */
import type { GithubReadPort } from "@/lib/platform/repository/githubReadAdapter";
import { decideGithubRepo } from "@/lib/platform/security/pathPolicy";
import type { GitReadPort } from "../../ports/gitReadPort";
import type { GitReadRequest, ProviderInvocationResult } from "../../ports/providerResult";
import type { ProviderCapabilityDescriptor } from "../../domain/types";
import { validateUntrustedProviderRequest } from "../../domain/providerBoundary";
import { evaluateSandboxPath } from "../../domain/sandboxContract";
import { normalizedFailure } from "../../domain/errors";
import { invokeWithTimeoutAndCancellation } from "../../application/providerInvocation";
import { safeProviderRedactedSummary } from "../events/redactEventDetail";

export type PlatformGitReadOptions = {
  /** Required when request.timeoutMs omitted. */
  readonly defaultTimeoutMs?: number;
  /**
   * Exact "owner/repo" allowlist. If omitted, uses platform decideGithubRepo.
   * Empty array = deny all.
   */
  readonly repositoryAllowlist?: readonly string[];
  readonly pathAllowlistPrefixes?: readonly string[];
  readonly verified?: boolean;
};

export class PlatformGitReadAdapter implements GitReadPort {
  readonly lane = "git" as const;
  readonly transport: "gh-cli" | "rest" | "local-git";

  constructor(
    private readonly github: GithubReadPort,
    transport: "gh-cli" | "rest" | "local-git",
    private readonly opts?: PlatformGitReadOptions,
  ) {
    this.transport = transport;
  }

  describeCapability(): ProviderCapabilityDescriptor {
    return {
      lane: "git",
      capabilityId: `d2d2-git-platform:${this.transport}`,
      available: true,
      verified: this.opts?.verified === true,
      readOnly: true,
      supportsCancellation: true,
      supportsTimeout: true,
    };
  }

  private repoAllowed(owner: string, repo: string): boolean {
    if (this.opts?.repositoryAllowlist !== undefined) {
      return this.opts.repositoryAllowlist.includes(`${owner}/${repo}`);
    }
    return decideGithubRepo(owner, repo).allowed === true;
  }

  async read(request: GitReadRequest): Promise<ProviderInvocationResult> {
    const boundary = validateUntrustedProviderRequest(request);
    if (!boundary.ok) return { kind: "failure", failure: boundary.failure };

    const timeoutMs = request.timeoutMs ?? this.opts?.defaultTimeoutMs;
    if (timeoutMs === undefined) {
      return {
        kind: "failure",
        failure: normalizedFailure({
          family: "validation",
          code: "VALIDATION_ERROR",
          userMessage: "timeoutMs required (no invented default)",
          retryable: false,
          correlationId: request.correlationId,
        }),
      };
    }

    if (!this.repoAllowed(request.owner, request.repo)) {
      return {
        kind: "failure",
        failure: normalizedFailure({
          family: "authorization",
          code: "AUTHORIZATION_ERROR",
          userMessage: "Repository not allowlisted",
          retryable: false,
          correlationId: request.correlationId,
        }),
      };
    }

    const outcome = await invokeWithTimeoutAndCancellation(
      async (signal) => {
        if (signal.aborted) {
          return {
            kind: "cancelled" as const,
            failure: normalizedFailure({
              family: "cancelled",
              code: "CANCELLED",
              userMessage: "Git read cancelled",
              retryable: false,
              correlationId: request.correlationId,
            }),
          };
        }
        try {
          if (request.kind === "path_meta") {
            if (!request.path) {
              return {
                kind: "failure" as const,
                failure: normalizedFailure({
                  family: "validation",
                  code: "VALIDATION_ERROR",
                  userMessage: "path required for path_meta",
                  retryable: false,
                  correlationId: request.correlationId,
                }),
              };
            }
            const pathDecision = evaluateSandboxPath({
              path: request.path,
              allowlistRepos: this.opts?.pathAllowlistPrefixes ?? [
                "projects/sfia-studio/",
                "README.md",
              ],
            });
            if (!pathDecision.allowed) {
              return {
                kind: "failure" as const,
                failure: normalizedFailure({
                  family: "protected_path",
                  code: "PROTECTED_PATH",
                  userMessage: `Git path denied: ${pathDecision.reason}`,
                  retryable: false,
                  correlationId: request.correlationId,
                }),
              };
            }
            return {
              kind: "success" as const,
              completeness: "complete" as const,
              redactedSummary: safeProviderRedactedSummary({
                adapter: `GIT-C/${this.transport}`,
                operation: "path_meta",
                status: "ok",
                transport: this.transport,
                kind: "path_meta",
              }),
              disclosureNotes: [
                `transport=${this.transport}`,
                "read_only=true",
                "path_meta=evaluated_no_content",
              ],
              usage: { status: "unavailable" as const, reason: "git read has no token usage" },
            };
          }
          if (request.kind === "repository") {
            await this.github.getRepository(request.owner, request.repo);
            return {
              kind: "success" as const,
              completeness: "complete" as const,
              redactedSummary: safeProviderRedactedSummary({
                adapter: `GIT-C/${this.transport}`,
                operation: "read",
                status: "ok",
                transport: this.transport,
                kind: "repository",
              }),
              disclosureNotes: [`transport=${this.transport}`, "read_only=true"],
              usage: { status: "unavailable" as const, reason: "git read has no token usage" },
            };
          }
          if (request.kind === "branch") {
            const ref = request.ref ?? "main";
            await this.github.getBranch(request.owner, request.repo, ref);
            return {
              kind: "success" as const,
              completeness: "complete" as const,
              redactedSummary: safeProviderRedactedSummary({
                adapter: `GIT-C/${this.transport}`,
                operation: "read",
                status: "ok",
                transport: this.transport,
                kind: "branch",
              }),
              disclosureNotes: [`transport=${this.transport}`, "read_only=true"],
              usage: { status: "unavailable" as const, reason: "git read has no token usage" },
            };
          }
          if (request.kind === "commit") {
            const sha = request.ref ?? "";
            await this.github.getCommit(request.owner, request.repo, sha);
            return {
              kind: "success" as const,
              completeness: "complete" as const,
              redactedSummary: safeProviderRedactedSummary({
                adapter: `GIT-C/${this.transport}`,
                operation: "read",
                status: "ok",
                transport: this.transport,
                kind: "commit",
              }),
              disclosureNotes: [`transport=${this.transport}`, "read_only=true"],
              usage: { status: "unavailable" as const, reason: "git read has no token usage" },
            };
          }
          return {
            kind: "failure" as const,
            failure: normalizedFailure({
              family: "validation",
              code: "VALIDATION_ERROR",
              userMessage: "Unsupported git read kind",
              retryable: false,
              correlationId: request.correlationId,
            }),
          };
        } catch (err) {
          const msg = err instanceof Error ? err.message : "git read failed";
          const auth = /auth|401|403/i.test(msg);
          const rate = /rate.?limit|429/i.test(msg);
          return {
            kind: "failure" as const,
            failure: normalizedFailure({
              family: auth ? "authentication" : rate ? "rate_limited" : "provider_unavailable",
              code: auth
                ? "AUTHENTICATION_ERROR"
                : rate
                  ? "RATE_LIMITED"
                  : "PROVIDER_UNAVAILABLE",
              userMessage: "Git read failed",
              retryable: rate,
              correlationId: request.correlationId,
            }),
          };
        }
      },
      { timeoutMs, signal: request.signal, correlationId: request.correlationId, maxRetries: 0 },
    );

    if (outcome.status === "completed") return outcome.result;
    if (outcome.status === "timed_out") return { kind: "timed_out", failure: outcome.failure };
    if (outcome.status === "cancelled") return { kind: "cancelled", failure: outcome.failure };
    return { kind: "failure", failure: outcome.failure };
  }
}
