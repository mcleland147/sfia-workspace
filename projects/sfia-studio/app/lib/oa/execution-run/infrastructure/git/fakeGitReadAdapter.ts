import type { GitReadPort } from "../../ports/gitReadPort";
import type { GitReadRequest, ProviderInvocationResult } from "../../ports/providerResult";
import type { ProviderCapabilityDescriptor } from "../../domain/types";
import { validateUntrustedProviderRequest } from "../../domain/providerBoundary";
import { evaluateSandboxPath } from "../../domain/sandboxContract";
import { normalizedFailure } from "../../domain/errors";
import { safeProviderRedactedSummary } from "../events/redactEventDetail";

export type FakeGitReadOptions = {
  /**
   * Exact "owner/repo" entries. Empty array = deny all (fail-closed).
   * Required — no implicit world-open allowlist.
   */
  readonly repositoryAllowlist: readonly string[];
  readonly pathAllowlistPrefixes?: readonly string[];
};

/** Read-only fake Git adapter — no write methods. verified=false. */
export class FakeGitReadAdapter implements GitReadPort {
  readonly lane = "git" as const;
  readonly transport = "fake" as const;

  constructor(private readonly opts: FakeGitReadOptions) {}

  describeCapability(): ProviderCapabilityDescriptor {
    return {
      lane: "git",
      capabilityId: "d2d2-git-fake",
      available: true,
      verified: false,
      readOnly: true,
      supportsCancellation: true,
      supportsTimeout: true,
    };
  }

  private repoAllowed(owner: string, repo: string): boolean {
    const full = `${owner}/${repo}`;
    return this.opts.repositoryAllowlist.includes(full);
  }

  async read(request: GitReadRequest): Promise<ProviderInvocationResult> {
    const boundary = validateUntrustedProviderRequest(request);
    if (!boundary.ok) return { kind: "failure", failure: boundary.failure };
    if (request.timeoutMs === undefined) {
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

    if (request.kind === "path_meta" || request.path) {
      const pathDecision = evaluateSandboxPath({
        path: request.path ?? "",
        allowlistRepos: this.opts.pathAllowlistPrefixes ?? [
          "projects/sfia-studio/",
          "README.md",
        ],
      });
      if (request.kind === "path_meta" && !request.path) {
        return {
          kind: "failure",
          failure: normalizedFailure({
            family: "validation",
            code: "VALIDATION_ERROR",
            userMessage: "path required for path_meta",
            retryable: false,
            correlationId: request.correlationId,
          }),
        };
      }
      if (!pathDecision.allowed) {
        return {
          kind: "failure",
          failure: normalizedFailure({
            family: "protected_path",
            code: "PROTECTED_PATH",
            userMessage: `Git path denied: ${pathDecision.reason}`,
            retryable: false,
            correlationId: request.correlationId,
          }),
        };
      }
      if (request.kind === "path_meta") {
        return {
          kind: "success",
          completeness: "complete",
          redactedSummary: safeProviderRedactedSummary({
            adapter: "FAKE/GIT-C",
            operation: "path_meta",
            status: "ok",
            transport: "fake",
            kind: "path_meta",
          }),
          disclosureNotes: ["transport=fake", "read_only=true", "path_meta=evaluated_no_content"],
          usage: { status: "unavailable", reason: "git read has no token usage" },
        };
      }
    }

    return {
      kind: "success",
      completeness: "complete",
      redactedSummary: safeProviderRedactedSummary({
        adapter: "FAKE/GIT-C",
        operation: "read",
        status: "ok",
        transport: "fake",
        kind: request.kind,
      }),
      disclosureNotes: ["transport=fake", "read_only=true", "write=false", "verified=false"],
      usage: { status: "unavailable", reason: "git read has no token usage" },
    };
  }
}
