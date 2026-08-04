/**
 * D2D2-08 fixture Cursor adapter — cannot launch commands or mutate Git.
 * live=false always. Capability verified=false always.
 */
import type { CursorExecutionPort } from "../../ports/cursorExecutionPort";
import type {
  CursorFixtureRequest,
  ProviderInvocationResult,
} from "../../ports/providerResult";
import type { ProviderCapabilityDescriptor } from "../../domain/types";
import { validateUntrustedProviderRequest } from "../../domain/providerBoundary";
import {
  evaluateSandboxMutationGuards,
  evaluateSandboxPath,
} from "../../domain/sandboxContract";
import { normalizedFailure } from "../../domain/errors";
import { safeProviderRedactedSummary } from "../events/redactEventDetail";

export class FixtureCursorExecutionAdapter implements CursorExecutionPort {
  readonly lane = "cursor" as const;
  readonly live = false as const;

  describeCapability(): ProviderCapabilityDescriptor {
    return {
      lane: "cursor",
      capabilityId: "d2d2-cursor-fixture",
      available: true,
      verified: false,
      readOnly: true,
      supportsCancellation: true,
      supportsTimeout: true,
    };
  }

  async executeFixture(request: CursorFixtureRequest): Promise<ProviderInvocationResult> {
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

    // Observed anchors must be independent — never copy expected into observed.
    const mutation = evaluateSandboxMutationGuards({
      mutationRequested: false,
      arbitraryCommandRequested: false,
      gitWriteRequested: false,
      observedBranch: request.observedBranch,
      expectedBranch: request.expectedBranch,
      observedHead: request.observedHead,
      expectedHead: request.expectedHead,
    });
    if (!("allowed" in mutation) || mutation.allowed !== true) {
      return {
        kind: "failure",
        failure: normalizedFailure({
          family: "sandbox_blocked",
          code: "SANDBOX_BLOCKED",
          userMessage: `Cursor fixture blocked: ${(mutation as { reason: string }).reason}`,
          retryable: false,
          correlationId: request.correlationId,
        }),
      };
    }

    const pathMatch = /path=([^\s]+)/.exec(request.instructionSummary);
    if (pathMatch) {
      const pathDecision = evaluateSandboxPath({
        path: pathMatch[1],
        allowlistRepos: request.allowlistRepos,
        protectedPaths: request.protectedPaths,
      });
      if (!pathDecision.allowed) {
        return {
          kind: "failure",
          failure: normalizedFailure({
            family:
              pathDecision.reason === "protected" ? "protected_path" : "sandbox_blocked",
            code:
              pathDecision.reason === "protected" ? "PROTECTED_PATH" : "SANDBOX_BLOCKED",
            userMessage: `Cursor fixture path denied: ${pathDecision.reason}`,
            retryable: false,
            correlationId: request.correlationId,
          }),
        };
      }
    }

    return {
      kind: "success",
      completeness: "complete",
      redactedSummary: safeProviderRedactedSummary({
        adapter: "FIXTURE/CURSOR",
        operation: "fixture",
        status: "ok",
      }),
      disclosureNotes: [
        "cursorUnverified=true",
        "live=false",
        "verified=false",
        "G-D2D-CURSOR-01=NOT_CONSUMED",
        "no_command_execution",
        "no_git_write",
      ],
      usage: { status: "unavailable", reason: "fixture cursor has no usage" },
    };
  }
}
