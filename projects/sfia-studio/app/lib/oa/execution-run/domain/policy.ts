/**
 * Pure Validation & Read-only Policy foundation (FD-04 / CAD-04).
 * Operates on contracts only — no FS/Git/provider I/O.
 */
import { normalizedFailure } from "./errors";
import type {
  ExecutionContext,
  ExecutionIntent,
  NormalizedFailure,
  ProviderCapabilityDescriptor,
} from "./types";
import { normalizeCanonicalPath } from "./sandboxContract";

export type PolicyInput = {
  readonly intent: ExecutionIntent;
  readonly context: ExecutionContext;
  readonly capability?: ProviderCapabilityDescriptor;
  readonly gateSatisfied?: boolean;
};

export type PolicyDecision =
  | { readonly ok: true }
  | { readonly ok: false; readonly failure: NormalizedFailure };

export function evaluateReadOnlyPolicy(input: PolicyInput): PolicyDecision {
  const { intent, context, capability } = input;
  const cid = intent.correlationId;

  if (intent.mutationRequested || context.permissions.gitWrite) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "mutation_forbidden",
        code: "MUTATION_FORBIDDEN",
        userMessage: "Git write or mutation intent is forbidden in D2-D",
        retryable: false,
        correlationId: cid,
      }),
    };
  }

  if (intent.arbitraryCommandRequested) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "validation",
        code: "VALIDATION_ERROR",
        userMessage: "Arbitrary commands are not permitted",
        retryable: false,
        correlationId: cid,
      }),
    };
  }

  if (intent.targetPath) {
    const canonical = normalizeCanonicalPath(intent.targetPath);
    if (!canonical.ok) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "protected_path",
          code: "PROTECTED_PATH",
          userMessage: "Target path is protected or invalid",
          retryable: false,
          correlationId: cid,
        }),
      };
    }
    if (context.protectedPaths?.length) {
      const hit = context.protectedPaths.some((p) => {
        const protectedCanonical = normalizeCanonicalPath(p);
        const prefix = protectedCanonical.ok
          ? protectedCanonical.normalized
          : p.replace(/\\/g, "/").replace(/\/+$/, "");
        return (
          canonical.normalized === prefix ||
          canonical.normalized.startsWith(`${prefix}/`)
        );
      });
      if (hit) {
        return {
          ok: false,
          failure: normalizedFailure({
            family: "protected_path",
            code: "PROTECTED_PATH",
            userMessage: "Target path is protected",
            retryable: false,
            correlationId: cid,
          }),
        };
      }
    }
  }

  if (!context.permissions.gitRead && intent.requestedLane === "git") {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "authorization",
        code: "AUTHORIZATION_ERROR",
        userMessage: "Insufficient permission for Git read",
        retryable: true,
        correlationId: cid,
      }),
    };
  }

  if (intent.requestedLane !== "none") {
    if (!capability) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "provider_unavailable",
          code: "PROVIDER_UNAVAILABLE",
          userMessage: "Provider capability descriptor is required",
          retryable: true,
          correlationId: cid,
        }),
      };
    }
    if (!capability.available) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "provider_unavailable",
          code: "PROVIDER_UNAVAILABLE",
          userMessage: "Requested provider is unavailable",
          retryable: true,
          correlationId: cid,
        }),
      };
    }
    if (!capability.readOnly) {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "mutation_forbidden",
          code: "MUTATION_FORBIDDEN",
          userMessage: "Provider must be read-only for D2-D",
          retryable: false,
          correlationId: cid,
        }),
      };
    }
    // G-D2D-CURSOR-01 is not consumed: never treat capability.verified as authority.
    if (intent.requestedLane === "cursor" || capability.lane === "cursor") {
      return {
        ok: false,
        failure: normalizedFailure({
          family: "sandbox_blocked",
          code: "SANDBOX_BLOCKED",
          userMessage: "Cursor product capabilities remain unverified",
          retryable: false,
          correlationId: cid,
        }),
      };
    }
  }

  if (intent.requiresHumanGate && input.gateSatisfied === false) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "human_gate_required",
        code: "HUMAN_GATE_REQUIRED",
        userMessage: "A structural human gate is required",
        retryable: true,
        correlationId: cid,
      }),
    };
  }

  if (intent.requestedSource !== context.declaredSource) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "source_mismatch",
        code: "SOURCE_MISMATCH",
        userMessage: "Declared source does not match requested source",
        retryable: false,
        correlationId: cid,
      }),
    };
  }

  return { ok: true };
}
