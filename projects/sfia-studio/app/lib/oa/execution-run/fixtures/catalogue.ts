/**
 * Deterministic D2-D1 fixture catalogue — source always fixture.
 */
import type {
  ExecutionContext,
  ExecutionIntent,
  NormalizedFailure,
  ProviderCapabilityDescriptor,
} from "../domain/types";
import { normalizedFailure } from "../domain/errors";

export type FixtureScenarioId =
  | "nominal"
  | "validation_failure"
  | "auth_failure"
  | "provider_unavailable"
  | "rate_limit"
  | "timeout"
  | "cancellation"
  | "blocked_gate"
  | "protected_path"
  | "mutation_forbidden"
  | "partial_result"
  | "invalid_provider_result"
  | "late_result"
  | "secret_redaction"
  | "source_mismatch";

export type FixtureScenario = {
  readonly id: FixtureScenarioId;
  readonly source: "fixture";
  readonly intent: ExecutionIntent;
  readonly context: ExecutionContext;
  readonly capability?: ProviderCapabilityDescriptor;
  readonly expectedFailure?: NormalizedFailure;
  readonly notes: string;
};

const baseContext = (over: Partial<ExecutionContext> = {}): ExecutionContext => ({
  projectId: "project:d2d1-fixture",
  actorId: "actor:fixture",
  declaredSource: "fixture",
  protectedPaths: [".env", "secrets"],
  permissions: { gitRead: true, gitWrite: false, providerInvoke: true },
  ...over,
});

const baseIntent = (over: Partial<ExecutionIntent> = {}): ExecutionIntent => ({
  intentId: "intent:fixture:base",
  correlationId: "corr:fixture:base",
  requestedLane: "ai",
  operation: "summarize_read_only",
  requestedSource: "fixture",
  requiresHumanGate: false,
  mutationRequested: false,
  arbitraryCommandRequested: false,
  ...over,
});

const aiCapability: ProviderCapabilityDescriptor = {
  lane: "ai",
  capabilityId: "ai:fixture",
  available: true,
  verified: true,
  readOnly: true,
  supportsCancellation: true,
  supportsTimeout: true,
};

export const FIXTURE_CATALOGUE: readonly FixtureScenario[] = [
  {
    id: "nominal",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:nominal", correlationId: "corr:fixture:nominal" }),
    context: baseContext(),
    capability: aiCapability,
    notes: "Happy path idle→running→succeeded",
  },
  {
    id: "validation_failure",
    source: "fixture",
    intent: baseIntent({
      intentId: "intent:fixture:validation",
      correlationId: "corr:fixture:validation",
      operation: "",
    }),
    context: baseContext(),
    capability: aiCapability,
    notes: "Invalid operation empty — schema deny",
  },
  {
    id: "auth_failure",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:auth", correlationId: "corr:fixture:auth", requestedLane: "git" }),
    context: baseContext({ permissions: { gitRead: false, gitWrite: false, providerInvoke: false } }),
    capability: { ...aiCapability, lane: "git", capabilityId: "git:fixture" },
    expectedFailure: normalizedFailure({
      family: "authorization",
      code: "AUTHORIZATION_ERROR",
      userMessage: "Insufficient permission for Git read",
      retryable: true,
      correlationId: "corr:fixture:auth",
    }),
    notes: "Authorization deny",
  },
  {
    id: "provider_unavailable",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:unavail", correlationId: "corr:fixture:unavail" }),
    context: baseContext(),
    capability: { ...aiCapability, available: false },
    notes: "Provider unavailable",
  },
  {
    id: "rate_limit",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:rate", correlationId: "corr:fixture:rate" }),
    context: baseContext(),
    capability: aiCapability,
    expectedFailure: normalizedFailure({
      family: "rate_limited",
      code: "RATE_LIMITED",
      userMessage: "Provider rate limited",
      retryable: true,
      correlationId: "corr:fixture:rate",
    }),
    notes: "Represents rate limit failure object",
  },
  {
    id: "timeout",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:timeout", correlationId: "corr:fixture:timeout" }),
    context: baseContext(),
    capability: aiCapability,
    notes: "running→timed_out",
  },
  {
    id: "cancellation",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:cancel", correlationId: "corr:fixture:cancel" }),
    context: baseContext(),
    capability: aiCapability,
    notes: "running→cancelled",
  },
  {
    id: "blocked_gate",
    source: "fixture",
    intent: baseIntent({
      intentId: "intent:fixture:gate",
      correlationId: "corr:fixture:gate",
      requiresHumanGate: true,
    }),
    context: baseContext(),
    capability: aiCapability,
    notes: "Human gate required blocks engagement when unsatisfied",
  },
  {
    id: "protected_path",
    source: "fixture",
    intent: baseIntent({
      intentId: "intent:fixture:path",
      correlationId: "corr:fixture:path",
      targetPath: ".env/token",
    }),
    context: baseContext(),
    capability: aiCapability,
    notes: "Protected path deny",
  },
  {
    id: "mutation_forbidden",
    source: "fixture",
    intent: baseIntent({
      intentId: "intent:fixture:mutate",
      correlationId: "corr:fixture:mutate",
      mutationRequested: true,
    }),
    context: baseContext(),
    capability: aiCapability,
    notes: "Mutation forbidden",
  },
  {
    id: "partial_result",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:partial", correlationId: "corr:fixture:partial" }),
    context: baseContext(),
    capability: aiCapability,
    notes: "Partial never succeeded",
  },
  {
    id: "invalid_provider_result",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:invalid", correlationId: "corr:fixture:invalid" }),
    context: baseContext(),
    capability: aiCapability,
    notes: "Invalid provider result → failed",
  },
  {
    id: "late_result",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:late", correlationId: "corr:fixture:late" }),
    context: baseContext(),
    capability: aiCapability,
    notes: "Late result evidence-only",
  },
  {
    id: "secret_redaction",
    source: "fixture",
    intent: baseIntent({ intentId: "intent:fixture:secret", correlationId: "corr:fixture:secret" }),
    context: baseContext(),
    capability: aiCapability,
    expectedFailure: normalizedFailure({
      family: "authentication",
      code: "AUTHENTICATION_ERROR",
      userMessage: "Credentials unavailable",
      retryable: true,
      correlationId: "corr:fixture:secret",
    }),
    notes: "Failure object never carries secrets",
  },
  {
    id: "source_mismatch",
    source: "fixture",
    intent: baseIntent({
      intentId: "intent:fixture:mismatch",
      correlationId: "corr:fixture:mismatch",
      requestedSource: "real",
    }),
    context: baseContext({ declaredSource: "fixture" }),
    capability: aiCapability,
    notes: "Source mismatch deny",
  },
] as const;

export function getFixture(id: FixtureScenarioId): FixtureScenario {
  const found = FIXTURE_CATALOGUE.find((f) => f.id === id);
  if (!found) throw new Error(`missing_fixture:${id}`);
  return found;
}
