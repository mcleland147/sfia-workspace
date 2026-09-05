/**
 * MW6 PRE-REAL — campaign-scoped technical safety/cost envelope.
 *
 * Distinct from NoraTurnBudget (per-model-turn function-tool slots).
 * Distinct from business authorization / Morris GO.
 *
 * PRE-REAL-01: TEST/FIXTURE authority ≠ Morris authority. No runtime boolean
 * can authorize LIVE OpenAI hosted execution.
 *
 * PRE-REAL-02: One campaignId → one canonical in-process budget envelope.
 * Reacquisition cannot silently reset. Fabricated objects cannot bypass lease.
 *
 * R-PRE-REAL-03: Canonical handle ≠ mutable authority. Limits/counters live in
 * private LeaseRecord; callers hold a frozen read-only view. Enforcement never
 * trusts caller-visible property writes.
 *
 * R-PRE-REAL-04: No callable product/runtime registry reset/clear-all.
 *
 * R-PRE-REAL-05: Hard limits must be finite + non-negative integer (finite
 * fractions floor; NaN / ±Infinity rejected — never registered).
 *
 * R-PRE-REAL-06: Governed mutation / clamp / providerData numerics must never
 * write or emit NaN / ±Infinity into authoritative state or max_tool_calls.
 *
 * R-PRE-REAL-07: Final providerData materialization requires already-valid
 * Number.isSafeInteger(max_tool_calls) >= 0 (no silent floor at final boundary).
 *
 * R-PRE-REAL-08: All authoritative budget quantities operate in the
 * Number.isSafeInteger domain (finite alone is insufficient).
 *
 * REALISM GAP — campaign lease is process-local (no durable persistence).
 *
 * H17: TOTAL_REAL_CALLS_UNDER_MORRIS_GO authorized=100 / historical observed=141.
 */

import {
  assertMw6ExternalDiscoveryEffectiveHumanAuthorization,
  buildMw6CurrentExternalDiscoveryIntent,
  buildMw6ExternalDiscoveryContractSemantic,
  computeMw6CurrentIntentFingerprint,
  type Mw6AuthorizedExternalDiscoveryContract,
  type Mw6ExternalDiscoveryContractInput,
} from "@/lib/auth/mw6ExternalDiscoveryBinding";
import { MW6_EXTERNAL_DISCOVERY_ACTION } from "@/lib/auth/piloteS1AuthorityPolicy";
import { computeInspectionFingerprint } from "@/lib/oa/execution-contract/domain/inspectionAttestation";
import {
  resolveMw6RealAuthorization,
  type Mw6RealAuthorizationMatchContext,
} from "./mw6RealAuthorization";
import type {
  SourceProviderBinding,
  SourceStrategyDecision,
} from "./sourceIntelligenceContract";

export const H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS = 100;
export const H17_HISTORICAL_OBSERVED_AGGREGATE_CALLS = 141;

export type {
  Mw6AuthorizedExternalDiscoveryContract,
  Mw6ExternalDiscoveryContractInput,
};

export type HostedHardCapCapability =
  | "provider_max_tool_calls"
  | "unsupported_unproven";

export type CampaignBudgetDenialCode =
  | "MODEL_INVOCATION_CAP_REACHED"
  | "HOSTED_WEB_OP_CAP_REACHED"
  | "AGGREGATE_REAL_CALL_CAP_REACHED"
  | "REAL_PREFLIGHT_BLOCKED"
  | "REAL_AUTHORITY_NOT_BOUND"
  | "AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED"
  | "AUTHORITY_DENIED"
  | "HOSTED_HARD_CAP_UNENFORCEABLE"
  | "CAMPAIGN_LEASE_INVALID"
  | "NORA_CAMPAIGN_BUDGET_SPEC_MISMATCH"
  | "INVALID_BUDGET";

/**
 * Public campaign HANDLE — frozen read-only view over private lease state.
 * Possession of this object does NOT grant authority to mutate budget.
 */
export type NoraCampaignBudget = {
  readonly campaignId: string;
  readonly maxModelInvocations: number;
  readonly consumedModelInvocations: number;
  readonly maxHostedWebOperations: number;
  readonly consumedHostedWebOperations: number;
  readonly maxAggregateRealCalls: number;
  readonly consumedAggregateRealCalls: number;
  readonly hostedHardCapCapability: HostedHardCapCapability;
  readonly limitReached: boolean;
  readonly denialCode: CampaignBudgetDenialCode | null;
  readonly denialReason: string | null;
};

export type CreateNoraCampaignBudgetInput = {
  campaignId: string;
  maxModelInvocations: number;
  maxHostedWebOperations: number;
  maxAggregateRealCalls?: number;
  hostedHardCapCapability?: HostedHardCapCapability;
};

/** Immutable lease identity for mismatch checks. */
export type NoraCampaignBudgetSpec = {
  readonly campaignId: string;
  readonly maxModelInvocations: number;
  readonly maxHostedWebOperations: number;
  readonly maxAggregateRealCalls: number;
  readonly hostedHardCapCapability: HostedHardCapCapability;
};

type LeaseInternalState = {
  consumedModelInvocations: number;
  consumedHostedWebOperations: number;
  consumedAggregateRealCalls: number;
  limitReached: boolean;
  denialCode: CampaignBudgetDenialCode | null;
  denialReason: string | null;
};

type LeaseRecord = {
  spec: NoraCampaignBudgetSpec;
  state: LeaseInternalState;
  handle: NoraCampaignBudget;
};

/** Process-local canonical campaign owner. NOT durable across process restart. */
const activeCampaignLeases = new Map<string, LeaseRecord>();
/** Handle → authoritative lease. Only acquire()-created handles are registered. */
const handleToLease = new WeakMap<object, LeaseRecord>();

export class CampaignLeaseError extends Error {
  constructor(
    readonly code: CampaignBudgetDenialCode,
    message: string,
  ) {
    super(message);
    this.name = "CampaignLeaseError";
  }
}

/**
 * Upstream normalize → non-negative safe integer (R-PRE-REAL-05/06/08).
 * Finite fractions → floor. Finite negatives → 0.
 * NaN / ±Infinity / unsafe integer result → INVALID_BUDGET.
 *
 * Exported for sibling runtime modules (e.g. no-campaign maxTurns).
 * NOT part of the public Nora barrel.
 */
export function normalizeSafeNonNegativeInteger(
  name: string,
  value: unknown,
): number {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new CampaignLeaseError(
      "INVALID_BUDGET",
      `Campaign numeric "${name}" must be a finite number (rejected ${String(value)}).`,
    );
  }
  const normalized = Math.max(0, Math.floor(value));
  if (!Number.isSafeInteger(normalized) || normalized < 0) {
    throw new CampaignLeaseError(
      "INVALID_BUDGET",
      `Campaign numeric "${name}" must normalize to a non-negative safe integer (rejected ${String(value)} → ${String(normalized)}).`,
    );
  }
  return normalized;
}

/** Hard-limit alias — same safe-integer domain. */
function normalizeHardLimit(name: string, value: unknown): number {
  return normalizeSafeNonNegativeInteger(name, value);
}

/** Governed count alias — same safe-integer domain. */
function normalizeNonNegativeCount(name: string, value: unknown): number {
  return normalizeSafeNonNegativeInteger(name, value);
}

/**
 * Final providerData / already-resolved count boundary (R-PRE-REAL-07).
 * NO silent floor/clamp — must already be a non-negative safe integer.
 */
export function requireSafeNonNegativeInteger(
  name: string,
  value: unknown,
): number {
  if (
    typeof value !== "number" ||
    !Number.isSafeInteger(value) ||
    value < 0
  ) {
    throw new CampaignLeaseError(
      "INVALID_BUDGET",
      `"${name}" must be a non-negative safe integer (rejected ${String(value)}).`,
    );
  }
  return value;
}

function normalizeSpec(
  input: CreateNoraCampaignBudgetInput,
): NoraCampaignBudgetSpec {
  const maxModel = normalizeHardLimit(
    "maxModelInvocations",
    input.maxModelInvocations,
  );
  const maxHosted = normalizeHardLimit(
    "maxHostedWebOperations",
    input.maxHostedWebOperations,
  );
  const maxAgg =
    input.maxAggregateRealCalls === undefined
      ? maxModel
      : normalizeHardLimit("maxAggregateRealCalls", input.maxAggregateRealCalls);
  return Object.freeze({
    campaignId: input.campaignId,
    maxModelInvocations: maxModel,
    maxHostedWebOperations: maxHosted,
    maxAggregateRealCalls: maxAgg,
    hostedHardCapCapability:
      input.hostedHardCapCapability ?? "provider_max_tool_calls",
  });
}

function specsEqual(a: NoraCampaignBudgetSpec, b: NoraCampaignBudgetSpec): boolean {
  return (
    a.campaignId === b.campaignId &&
    a.maxModelInvocations === b.maxModelInvocations &&
    a.maxHostedWebOperations === b.maxHostedWebOperations &&
    a.maxAggregateRealCalls === b.maxAggregateRealCalls &&
    a.hostedHardCapCapability === b.hostedHardCapCapability
  );
}

function createCanonicalHandle(lease: LeaseRecord): NoraCampaignBudget {
  // Getters always read private LeaseRecord — assignment/defineProperty cannot
  // redirect enforcement to caller-supplied values.
  const handle = Object.freeze({
    get campaignId() {
      return lease.spec.campaignId;
    },
    get maxModelInvocations() {
      return lease.spec.maxModelInvocations;
    },
    get consumedModelInvocations() {
      return lease.state.consumedModelInvocations;
    },
    get maxHostedWebOperations() {
      return lease.spec.maxHostedWebOperations;
    },
    get consumedHostedWebOperations() {
      return lease.state.consumedHostedWebOperations;
    },
    get maxAggregateRealCalls() {
      return lease.spec.maxAggregateRealCalls;
    },
    get consumedAggregateRealCalls() {
      return lease.state.consumedAggregateRealCalls;
    },
    get hostedHardCapCapability() {
      return lease.spec.hostedHardCapCapability;
    },
    get limitReached() {
      return lease.state.limitReached;
    },
    get denialCode() {
      return lease.state.denialCode;
    },
    get denialReason() {
      return lease.state.denialReason;
    },
  }) as NoraCampaignBudget;
  handleToLease.set(handle, lease);
  return handle;
}

/**
 * Build an unregistered budget object for negative/fabricated-object proofs.
 * Does NOT create a canonical lease. Must never become authoritative.
 */
export function createNoraCampaignBudget(
  input: CreateNoraCampaignBudgetInput,
): NoraCampaignBudget {
  const spec = normalizeSpec(input);
  return Object.freeze({
    campaignId: spec.campaignId,
    maxModelInvocations: spec.maxModelInvocations,
    consumedModelInvocations: 0,
    maxHostedWebOperations: spec.maxHostedWebOperations,
    consumedHostedWebOperations: 0,
    maxAggregateRealCalls: spec.maxAggregateRealCalls,
    consumedAggregateRealCalls: 0,
    hostedHardCapCapability: spec.hostedHardCapCapability,
    limitReached: false,
    denialCode: null,
    denialReason: null,
  });
}

/**
 * Acquire the canonical in-process budget for a campaignId.
 *
 * Same spec → same handle (authoritative counters preserved).
 * Different immutable limits → fail closed (no silent widen/reset).
 */
export function acquireNoraCampaignBudget(
  input: CreateNoraCampaignBudgetInput,
): NoraCampaignBudget {
  const spec = normalizeSpec(input);
  const existing = activeCampaignLeases.get(spec.campaignId);
  if (!existing) {
    const state: LeaseInternalState = {
      consumedModelInvocations: 0,
      consumedHostedWebOperations: 0,
      consumedAggregateRealCalls: 0,
      limitReached: false,
      denialCode: null,
      denialReason: null,
    };
    const lease: LeaseRecord = {
      spec,
      state,
      handle: null as unknown as NoraCampaignBudget,
    };
    lease.handle = createCanonicalHandle(lease);
    activeCampaignLeases.set(spec.campaignId, lease);
    return lease.handle;
  }
  if (!specsEqual(existing.spec, spec)) {
    throw new CampaignLeaseError(
      "NORA_CAMPAIGN_BUDGET_SPEC_MISMATCH",
      `Campaign "${spec.campaignId}" already active with different immutable limits/capabilities — refusing silent reset/widen.`,
    );
  }
  return existing.handle;
}

/**
 * Resolve authoritative private lease. Never trust caller-visible properties.
 */
function resolveLease(budget: NoraCampaignBudget): LeaseRecord {
  const lease = handleToLease.get(budget);
  if (!lease || lease.handle !== budget) {
    throw new CampaignLeaseError(
      "CAMPAIGN_LEASE_INVALID",
      `Campaign budget for "${String((budget as { campaignId?: string })?.campaignId ?? "?")}" is not the canonical active lease — refusing dispatch.`,
    );
  }
  const active = activeCampaignLeases.get(lease.spec.campaignId);
  if (active !== lease || active.handle !== budget) {
    throw new CampaignLeaseError(
      "CAMPAIGN_LEASE_INVALID",
      `Campaign budget for "${lease.spec.campaignId}" is not the canonical active lease — refusing dispatch.`,
    );
  }
  return lease;
}

/** True when budget is the canonical registered handle for its campaignId. */
export function isCanonicalCampaignBudget(
  budget: NoraCampaignBudget | null | undefined,
): boolean {
  if (!budget || typeof budget !== "object") return false;
  const lease = handleToLease.get(budget);
  if (!lease || lease.handle !== budget) return false;
  const active = activeCampaignLeases.get(lease.spec.campaignId);
  return active === lease && active.handle === budget;
}

/**
 * Fail closed if budget is fabricated / unregistered / wrong identity.
 */
export function requireCanonicalCampaignBudget(
  budget: NoraCampaignBudget,
): void {
  resolveLease(budget);
}

/**
 * Tighten-only campaign denial (false→true; null denial→bounded denial).
 * Cannot clear limitReached/denial, widen limits, or reset counters.
 */
export function markCampaignBudgetBlocked(
  budget: NoraCampaignBudget,
  denialCode: CampaignBudgetDenialCode,
  denialReason: string,
): void {
  const lease = resolveLease(budget);
  lease.state.limitReached = true;
  if (lease.state.denialCode == null) {
    lease.state.denialCode = denialCode;
    lease.state.denialReason = denialReason;
  }
}

function deny(
  lease: LeaseRecord,
  code: CampaignBudgetDenialCode,
  reason: string,
): void {
  lease.state.limitReached = true;
  lease.state.denialCode = code;
  lease.state.denialReason = reason;
}

export function remainingModelInvocations(b: NoraCampaignBudget): number {
  const lease = resolveLease(b);
  return Math.max(
    0,
    lease.spec.maxModelInvocations - lease.state.consumedModelInvocations,
  );
}

export function remainingHostedWebOperations(b: NoraCampaignBudget): number {
  const lease = resolveLease(b);
  return Math.max(
    0,
    lease.spec.maxHostedWebOperations - lease.state.consumedHostedWebOperations,
  );
}

export function remainingAggregateRealCalls(b: NoraCampaignBudget): number {
  const lease = resolveLease(b);
  return Math.max(
    0,
    lease.spec.maxAggregateRealCalls - lease.state.consumedAggregateRealCalls,
  );
}

/**
 * Pre-dispatch claim for one model invocation.
 * Requires canonical lease. Returns false WITHOUT incrementing past the cap.
 * Counters only move forward via this / claimHostedWebOperations.
 */
export function claimModelInvocation(budget: NoraCampaignBudget): boolean {
  const lease = resolveLease(budget);
  if (
    lease.state.consumedAggregateRealCalls >= lease.spec.maxAggregateRealCalls
  ) {
    deny(
      lease,
      "AGGREGATE_REAL_CALL_CAP_REACHED",
      `Aggregate REAL/provider-call cap reached (${lease.state.consumedAggregateRealCalls}/${lease.spec.maxAggregateRealCalls}).`,
    );
    return false;
  }
  if (lease.state.consumedModelInvocations >= lease.spec.maxModelInvocations) {
    deny(
      lease,
      "MODEL_INVOCATION_CAP_REACHED",
      `Model invocation cap reached (${lease.state.consumedModelInvocations}/${lease.spec.maxModelInvocations}).`,
    );
    return false;
  }
  const nextModel = lease.state.consumedModelInvocations + 1;
  const nextAgg = lease.state.consumedAggregateRealCalls + 1;
  if (!Number.isSafeInteger(nextModel) || !Number.isSafeInteger(nextAgg)) {
    throw new CampaignLeaseError(
      "INVALID_BUDGET",
      "Model claim would leave safe-integer domain — refusing mutation.",
    );
  }
  lease.state.consumedModelInvocations = nextModel;
  lease.state.consumedAggregateRealCalls = nextAgg;
  return true;
}

export function claimHostedWebOperations(
  budget: NoraCampaignBudget,
  count: number,
): boolean {
  const lease = resolveLease(budget);
  // Validate BEFORE any mutation — NaN/±Infinity/unsafe must never poison counters.
  const n = normalizeNonNegativeCount("claimHostedWebOperations.count", count);
  if (n === 0) return true;
  // Overflow-safe: compare claim against remaining, never rely on unsafe addition alone.
  const remainingHosted =
    lease.spec.maxHostedWebOperations - lease.state.consumedHostedWebOperations;
  if (n > remainingHosted) {
    deny(
      lease,
      "HOSTED_WEB_OP_CAP_REACHED",
      `Hosted web op claim ${n} would exceed cap (${lease.state.consumedHostedWebOperations}/${lease.spec.maxHostedWebOperations}).`,
    );
    return false;
  }
  const nextConsumed = lease.state.consumedHostedWebOperations + n;
  if (
    !Number.isSafeInteger(nextConsumed) ||
    nextConsumed < 0 ||
    nextConsumed > lease.spec.maxHostedWebOperations
  ) {
    throw new CampaignLeaseError(
      "INVALID_BUDGET",
      "Hosted claim would produce non-safe or out-of-bounds consumed counter.",
    );
  }
  lease.state.consumedHostedWebOperations = nextConsumed;
  return true;
}

export type RunnerBudgetClamp = {
  maxTurns: number;
  maxToolCalls: number | null;
  attachHostedWebSearch: boolean;
  reasonCodes: string[];
};

export function clampRunnerBudgetForCampaign(input: {
  campaign: NoraCampaignBudget;
  requestedMaxTurns: number;
  wantHostedWebSearch: boolean;
}): RunnerBudgetClamp {
  const lease = resolveLease(input.campaign);
  const reasons: string[] = [];
  const remainingModel = Math.max(
    0,
    lease.spec.maxModelInvocations - lease.state.consumedModelInvocations,
  );
  const remainingHosted = Math.max(
    0,
    lease.spec.maxHostedWebOperations - lease.state.consumedHostedWebOperations,
  );
  const remainingAgg = Math.max(
    0,
    lease.spec.maxAggregateRealCalls - lease.state.consumedAggregateRealCalls,
  );

  // Non-finite requestedMaxTurns → fail closed (no unlimited/NaN Runner).
  let maxTurns = normalizeNonNegativeCount(
    "requestedMaxTurns",
    input.requestedMaxTurns,
  );
  if (maxTurns > remainingModel) {
    reasons.push("clamped_maxTurns_to_remaining_model");
    maxTurns = remainingModel;
  }
  if (maxTurns > remainingAgg) {
    reasons.push("clamped_maxTurns_to_remaining_aggregate_real");
    maxTurns = remainingAgg;
  }

  let attach = input.wantHostedWebSearch === true;
  let maxToolCalls: number | null = null;

  if (attach) {
    if (lease.spec.hostedHardCapCapability !== "provider_max_tool_calls") {
      attach = false;
      maxToolCalls = null;
      reasons.push("hosted_hard_cap_unenforceable_detach");
    } else if (remainingHosted <= 0) {
      attach = false;
      maxToolCalls = null;
      reasons.push("hosted_remaining_zero_detach");
    } else if (maxTurns <= 0) {
      attach = false;
      maxToolCalls = null;
      reasons.push("no_model_turns_left_detach");
    } else {
      // Overflow-safe derivation: maxToolCalls <= floor(remainingHosted / maxTurns)
      let perResponse = Math.floor(remainingHosted / maxTurns);
      if (perResponse < 1) {
        maxTurns = 1;
        perResponse = remainingHosted;
        reasons.push("forced_single_turn_for_hosted_cap");
      }
      maxToolCalls = perResponse;
      reasons.push("provider_max_tool_calls_configured");
    }
  }

  if (maxToolCalls != null) {
    requireSafeNonNegativeInteger("computed.max_tool_calls", maxToolCalls);
    // Safety decision uses division, not potentially-unsafe multiplication.
    if (maxTurns > 0 && maxToolCalls > Math.floor(remainingHosted / maxTurns)) {
      throw new CampaignLeaseError(
        "INVALID_BUDGET",
        "Invariant violated: max_tool_calls > floor(remainingHosted / maxTurns).",
      );
    }
  }

  return {
    maxTurns,
    maxToolCalls,
    attachHostedWebSearch: attach,
    reasonCodes: reasons,
  };
}

export function resolveMaxToolCallsProviderData(input: {
  campaign: NoraCampaignBudget;
  configuredMaxToolCalls: number | null;
  callerOverride?: number | null;
}): { max_tool_calls?: number; rejectedOverride: boolean } {
  const lease = resolveLease(input.campaign);
  if (input.configuredMaxToolCalls == null) {
    return { rejectedOverride: false };
  }
  // Upstream normalize to safe integer — never emit unsafe/non-finite.
  let value = normalizeSafeNonNegativeInteger(
    "configuredMaxToolCalls",
    input.configuredMaxToolCalls,
  );
  let rejected = false;
  if (input.callerOverride != null) {
    if (
      typeof input.callerOverride !== "number" ||
      !Number.isFinite(input.callerOverride)
    ) {
      rejected = true;
    } else {
      let o: number;
      try {
        o = normalizeSafeNonNegativeInteger(
          "callerOverride",
          input.callerOverride,
        );
      } catch {
        // Unsafe/invalid override: reject/ignore — never widen, never emit.
        rejected = true;
        o = -1;
      }
      if (!rejected) {
        if (o > value) {
          rejected = true;
        } else {
          value = o;
        }
      }
    }
  }
  const remaining = Math.max(
    0,
    lease.spec.maxHostedWebOperations - lease.state.consumedHostedWebOperations,
  );
  if (value > remaining) {
    value = remaining;
    rejected = true;
  }
  requireSafeNonNegativeInteger("resolved.max_tool_calls", value);
  return { max_tool_calls: value, rejectedOverride: rejected };
}

/**
 * Technical budget/capability readiness only.
 * NEVER Morris GO REAL / HumanDecision / Confirmation / ExecutionContract.
 */
export function evaluateCampaignBudgetCapabilityOnly(input: {
  campaign: NoraCampaignBudget;
  wantHostedWebSearch: boolean;
}): {
  capabilitySatisfied: boolean;
  reasons: string[];
} {
  const lease = resolveLease(input.campaign);
  const reasons: string[] = [];
  if (lease.spec.maxModelInvocations <= 0) {
    reasons.push("invalid_model_budget");
  }
  const remainingModel = Math.max(
    0,
    lease.spec.maxModelInvocations - lease.state.consumedModelInvocations,
  );
  const remainingAgg = Math.max(
    0,
    lease.spec.maxAggregateRealCalls - lease.state.consumedAggregateRealCalls,
  );
  const remainingHosted = Math.max(
    0,
    lease.spec.maxHostedWebOperations - lease.state.consumedHostedWebOperations,
  );
  if (remainingModel <= 0) {
    reasons.push("remaining_model_zero");
  }
  if (remainingAgg <= 0) {
    reasons.push("remaining_aggregate_real_zero");
  }
  if (input.wantHostedWebSearch) {
    if (lease.spec.hostedHardCapCapability !== "provider_max_tool_calls") {
      reasons.push("hosted_hard_cap_unenforceable");
    }
    if (remainingHosted <= 0) {
      reasons.push("remaining_hosted_zero");
    }
  }
  return { capabilitySatisfied: reasons.length === 0, reasons };
}

export type RealSourceExecutionPreflightInput = {
  campaign: NoraCampaignBudget;
  wantHostedWebSearch: boolean;
  /**
   * Governed Auth S1 context — identifiers + canonical ports only.
   * Absent → authorityBound=false (REAL_AUTHORITY_NOT_BOUND).
   */
  governedAuthority?: Mw6GovernedAuthorityContext;
  /**
   * Current MW6 product state (strategy + binding) from Nora composition.
   * Server derives intent + fingerprint — never trust a caller-built final intent.
   */
  currentProductContext?: Mw6CurrentProductContext;
  /**
   * Server-owned clock for REAL grant expiry (deterministic tests).
   * Client payloads cannot supply this through ProjectAssistantSendInput.
   */
  nowIso?: string;
  /**
   * @deprecated Ignored for authority. Kept only so callers cannot authorize
   * by injecting a final semantic object (T08).
   */
  currentExternalDiscoveryIntent?: Mw6ExternalDiscoveryContractInput;
  /**
   * @deprecated Hostile client fields — structurally ignored for REAL axis.
   * Presence must never authorize realAuthorized.
   */
  realAuthorized?: unknown;
  realAuthorization?: unknown;
  morrisGo?: unknown;
  realGate?: unknown;
  goReal?: unknown;
  allowReal?: unknown;
  mw6RealProofGrant?: unknown;
  realProofGrant?: unknown;
};

/**
 * Canonical GetExecutionContract port (application use-case shape).
 * Injected from composition — no second store.
 */
export type Mw6GetExecutionContractPort = {
  execute(request: {
    executionContractId: string;
    correlationId?: string;
  }): Promise<
    | {
        ok: true;
        contract: Mw6AuthorizedExternalDiscoveryContract & {
          version?: number;
          requiredCapabilities?: string[];
        };
      }
    | { ok: false; error?: { detailCode?: string } }
  >;
};

/**
 * Canonical CheckExecutionAuthorization port.
 * Governs actor↔evidence relation + decision freshness + execution-ready status.
 */
export type Mw6CheckExecutionAuthorizationPort = {
  execute(request: {
    executionContractId: string;
    action: string;
    target: string;
    scope: string;
    actor: { actorId: string; displayName?: string; role?: string };
    authorityEvidenceId?: string;
    correlationId?: string;
  }): Promise<
    | {
        ok: true;
        authorized: true;
        contract: Mw6AuthorizedExternalDiscoveryContract & {
          version?: number;
        };
      }
    | {
        ok: false;
        authorized?: false;
        error?: { detailCode?: string; internalCauseRef?: string };
      }
  >;
};

/**
 * Product-derived MW6 source state (not a fingerprint-bearing authority object).
 */
export type Mw6CurrentProductContext = {
  strategy: SourceStrategyDecision;
  binding: SourceProviderBinding;
  /** Server-owned campaign identity for intent scope composition. */
  campaignId: string;
  /** Optional idempotency override; defaults to loaded contract.idempotencyKey. */
  idempotencyKey?: string;
};

/**
 * Server-owned authority verification context for MW6 hosted external discovery.
 *
 * Trust reduction: caller supplies IDs + ports; NEVER a confirmed-contract snapshot
 * as authority truth. Fabricated `authorizedContract` fields are ignored.
 */
export type Mw6GovernedAuthorityContext = {
  actorId: string;
  authorityEvidenceId: string;
  executionContractId: string;
  /** Must equal Morris policy N2 for external_discovery. */
  requiredLevel: "N2";
  /**
   * Canonical loader — GetExecutionContract application service.
   */
  getExecutionContract: Mw6GetExecutionContractPort;
  /**
   * Canonical authorization evaluator — CheckExecutionAuthorization.
   * Owns actor/evidence binding + accepted decisionRefs + execution-ready status.
   */
  checkExecutionAuthorization: Mw6CheckExecutionAuthorizationPort;
  authorityResolver: {
    verify(request: {
      actorId: string;
      requiredLevel: "N1" | "N2" | "N3";
      scope: string;
      evidenceId?: string;
      requireMorrisGate?: boolean;
    }): {
      ok: boolean;
      reason: string;
      verifiedLevel?: "N1" | "N2" | "N3";
      canActAsMorris?: boolean;
      evidenceId?: string;
    };
  };
  /**
   * @deprecated Ignored — fabricated confirmed snapshots cannot authorize (T02).
   */
  authorizedContract?: Mw6AuthorizedExternalDiscoveryContract;
  /**
   * @deprecated Ignored for verify — diagnostic only.
   */
  callerAssertedScope?: string;
};

export type RealSourceExecutionPreflightResult = {
  /** LIVE hosted dispatch eligibility — requires authorityBound AND realAuthorized. */
  eligible: boolean;
  /** LIVE blocked (true unless both axes allow). */
  blocked: boolean;
  code: CampaignBudgetDenialCode | "OK";
  reasons: string[];
  /** Budget/capability may be OK while REAL remains blocked. */
  capabilitySatisfied: boolean;
  /** Auth S1 verified for external_discovery N2 after canonical load+authz. */
  authorityBound: boolean;
  /**
   * Construction REAL axis — server-owned Morris proof grant match.
   * Orthogonal to authorityBound; never implied by N2 / Confirmation / S1.
   */
  realAuthorized: boolean;
};

/**
 * LIVE REAL hosted/source execution preflight (async — loads canonical EC).
 *
 * Orthogonal axes:
 * - AUTHORITY: GetExecutionContract → CheckExecutionAuthorization →
 *   product-derived intent fingerprint → AuthorityResolver N2 verify
 * - REAL: server-owned Morris proof grant (SFIA_MW6_REAL_PROOF_GRANT_JSON)
 *   exact-scope matched — never authorityBound ⇒ realAuthorized
 *
 * Fabricated authorizedContract / injected final intent / client REAL flags
 * are never authority or REAL truth.
 */
export async function evaluateRealSourceExecutionPreflight(
  input: RealSourceExecutionPreflightInput,
): Promise<RealSourceExecutionPreflightResult> {
  resolveLease(input.campaign);
  const capability = evaluateCampaignBudgetCapabilityOnly(input);
  const nowIso = input.nowIso ?? new Date().toISOString();

  // Hostile client/caller REAL fields — explicitly voided (B13/B14).
  void input.realAuthorized;
  void input.realAuthorization;
  void input.morrisGo;
  void input.realGate;
  void input.goReal;
  void input.allowReal;
  void input.mw6RealProofGrant;
  void input.realProofGrant;

  let matchContext: Mw6RealAuthorizationMatchContext | null = null;

  const resolveReal = (): boolean => {
    const decision = resolveMw6RealAuthorization({
      context: matchContext
        ? { ...matchContext, nowIso }
        : null,
    });
    return decision.authorized === true;
  };

  const denyAuthority = (
    extraReasons: string[],
  ): RealSourceExecutionPreflightResult => {
    const realAuthorized = resolveReal();
    return {
      eligible: false,
      blocked: true,
      code: "AUTHORITY_DENIED",
      reasons: ["AUTHORITY_DENIED", ...extraReasons, ...capability.reasons],
      capabilitySatisfied: capability.capabilitySatisfied,
      authorityBound: false,
      realAuthorized,
    };
  };

  if (!input.governedAuthority) {
    const realAuthorized = resolveReal();
    const reasons = ["REAL_AUTHORITY_NOT_BOUND", ...capability.reasons];
    return {
      eligible: false,
      blocked: true,
      code: "REAL_AUTHORITY_NOT_BOUND",
      reasons,
      capabilitySatisfied: capability.capabilitySatisfied,
      authorityBound: false,
      realAuthorized,
    };
  }

  const gov = input.governedAuthority;
  // Explicitly ignore fabricated snapshots / caller fingerprint assertions.
  void gov.authorizedContract;
  void gov.callerAssertedScope;
  void input.currentExternalDiscoveryIntent;

  if (gov.requiredLevel !== "N2") {
    return denyAuthority(["external_discovery_requires_N2"]);
  }
  if (!gov.executionContractId?.trim()) {
    return denyAuthority(["execution_contract_id_absent"]);
  }
  if (!input.currentProductContext) {
    return denyAuthority(["current_product_context_absent"]);
  }

  // TB-01 — load CURRENT contract from canonical store (not caller snapshot).
  const loaded = await gov.getExecutionContract.execute({
    executionContractId: gov.executionContractId,
  });
  if (!loaded.ok) {
    return denyAuthority([
      "execution_contract_not_found",
      loaded.error?.detailCode ?? "CONTRACT_NOT_FOUND",
    ]);
  }
  const storeContract = loaded.contract;

  if (storeContract.executionContractId !== gov.executionContractId) {
    return denyAuthority(["loaded_contract_id_mismatch"]);
  }
  if (storeContract.requiredAuthority !== "N2") {
    return denyAuthority(["loaded_contract_requiredAuthority_not_N2"]);
  }
  if (storeContract.action !== MW6_EXTERNAL_DISCOVERY_ACTION) {
    return denyAuthority(["loaded_contract_action_not_external_discovery"]);
  }

  // Local human-auth readiness (confirmed + confirmationRef + decisionRefs).
  const humanAuth =
    assertMw6ExternalDiscoveryEffectiveHumanAuthorization(storeContract);
  if (!humanAuth.ok) {
    return denyAuthority([`human_authorization:${humanAuth.reason}`]);
  }

  // TB-02 — derive current intent from product strategy+binding + loaded EC IDs.
  const product = input.currentProductContext;
  if (product.campaignId !== input.campaign.campaignId) {
    // Prefer campaign lease identity as server-owned campaign truth.
    // Mismatch between context campaignId and lease is fail-closed.
    return denyAuthority(["current_product_campaign_id_mismatch"]);
  }
  const intentBuilt = buildMw6CurrentExternalDiscoveryIntent({
    executionContractId: storeContract.executionContractId,
    projectId: storeContract.projectId,
    campaignId: product.campaignId,
    strategy: product.strategy,
    binding: product.binding,
    decisionRefs: [...(storeContract.decisionRefs ?? [])],
    idempotencyKey:
      product.idempotencyKey ?? storeContract.idempotencyKey,
    cycleInstanceId: storeContract.cycleInstanceId,
    adapterExportRef: storeContract.adapterExportRef,
  });
  if (!intentBuilt.ok) {
    return denyAuthority([`current_intent_derive:${intentBuilt.reason}`]);
  }
  const currentIntent = intentBuilt.intent;
  const { fingerprint: currentIntentFingerprint, semantic: intentSemantic } =
    computeMw6CurrentIntentFingerprint(currentIntent);

  // Intent must match the authorized contract's inspection semantic.
  const contractSemanticForFp = buildMw6ExternalDiscoveryContractSemantic({
    executionContractId: storeContract.executionContractId,
    projectId: storeContract.projectId,
    scope: storeContract.scope,
    target: storeContract.target,
    cycleInstanceId: storeContract.cycleInstanceId,
    decisionRefs: [...(storeContract.decisionRefs ?? [])],
    inputs: storeContract.inputs,
    expectedOutputs: storeContract.expectedOutputs,
    constraints: storeContract.constraints
      ? [...storeContract.constraints]
      : undefined,
    stopConditions: storeContract.stopConditions
      ? [...storeContract.stopConditions]
      : undefined,
    evidenceRequirements: storeContract.evidenceRequirements
      ? [...storeContract.evidenceRequirements]
      : undefined,
    idempotencyKey: storeContract.idempotencyKey,
    adapterExportRef: storeContract.adapterExportRef,
  });
  // Prefer direct inspection of store material when fields already match builder defaults;
  // equality against intent fingerprint is the authority gate.
  const contractFingerprint = computeInspectionFingerprint(
    contractSemanticForFp,
  );
  if (currentIntentFingerprint !== contractFingerprint) {
    return denyAuthority(["current_intent_contract_semantic_mismatch"]);
  }
  if (
    intentSemantic.action !== storeContract.action ||
    currentIntent.target !== storeContract.target ||
    currentIntent.scope !== storeContract.scope
  ) {
    return denyAuthority(["current_intent_action_scope_mismatch"]);
  }

  // Match context available for REAL axis (orthogonal to remaining auth checks).
  matchContext = {
    projectId: storeContract.projectId,
    executionContractId: storeContract.executionContractId,
    action: MW6_EXTERNAL_DISCOVERY_ACTION,
    requiredAuthority: "N2",
    semanticFingerprint: currentIntentFingerprint,
    campaignId: product.campaignId,
    nowIso,
  };

  // TB-03 — canonical actor/evidence relation via CheckExecutionAuthorization.
  // Rule: HD actor need not equal executor; executor must present evidence that
  // verifies for (actorId, requiredLevel, Auth-S1 inspection fingerprint scope).
  const checked = await gov.checkExecutionAuthorization.execute({
    executionContractId: storeContract.executionContractId,
    action: storeContract.action,
    target: storeContract.target,
    scope: storeContract.scope,
    actor: { actorId: gov.actorId },
    authorityEvidenceId: gov.authorityEvidenceId,
    correlationId: `mw6-preflight:${storeContract.executionContractId}`,
  });
  if (!checked.ok || checked.authorized !== true) {
    const detail =
      !checked.ok && "error" in checked
        ? checked.error?.internalCauseRef ??
          checked.error?.detailCode ??
          "authorization_denied"
        : "authorization_denied";
    return denyAuthority([`check_execution_authorization:${detail}`]);
  }

  // Current-intent fingerprint verify (equals contract FP after coherence).
  const verified = gov.authorityResolver.verify({
    actorId: gov.actorId,
    evidenceId: gov.authorityEvidenceId,
    scope: currentIntentFingerprint,
    requiredLevel: "N2",
    requireMorrisGate: false,
  });
  if (!verified.ok) {
    return denyAuthority([`verify:${verified.reason}`]);
  }
  if (verified.canActAsMorris === true) {
    return denyAuthority(["canActAsMorris_not_permitted_for_mw6_binding"]);
  }

  const authorityBound = true;
  const realAuthorized = resolveReal();

  if (!realAuthorized) {
    return {
      eligible: false,
      blocked: true,
      code: "AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED",
      reasons: [
        "AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED",
        "MW6_REAL_NOT_AUTHORIZED",
        ...capability.reasons,
      ],
      capabilitySatisfied: capability.capabilitySatisfied,
      authorityBound,
      realAuthorized: false,
    };
  }

  if (!capability.capabilitySatisfied) {
    const code: CampaignBudgetDenialCode = capability.reasons.includes(
      "remaining_hosted_zero",
    )
      ? "HOSTED_WEB_OP_CAP_REACHED"
      : capability.reasons.includes("remaining_aggregate_real_zero")
        ? "AGGREGATE_REAL_CALL_CAP_REACHED"
        : capability.reasons.includes("remaining_model_zero")
          ? "MODEL_INVOCATION_CAP_REACHED"
          : capability.reasons.includes("hosted_hard_cap_unenforceable")
            ? "HOSTED_HARD_CAP_UNENFORCEABLE"
            : "REAL_PREFLIGHT_BLOCKED";
    return {
      eligible: false,
      blocked: true,
      code,
      reasons: [
        "REAL_PREFLIGHT_BLOCKED",
        "campaign_budget_exhausted",
        ...capability.reasons,
      ],
      capabilitySatisfied: false,
      authorityBound,
      realAuthorized: true,
    };
  }

  return {
    eligible: true,
    blocked: false,
    code: "OK",
    reasons: [],
    capabilitySatisfied: true,
    authorityBound: true,
    realAuthorized: true,
  };
}

export function campaignBudgetSnapshot(budget: NoraCampaignBudget): {
  campaignId: string;
  remainingModelInvocations: number;
  remainingHostedWebOperations: number;
  remainingAggregateRealCalls: number;
  consumedModelInvocations: number;
  consumedHostedWebOperations: number;
  consumedAggregateRealCalls: number;
  maxModelInvocations: number;
  maxHostedWebOperations: number;
  maxAggregateRealCalls: number;
  limitReached: boolean;
  denialCode: CampaignBudgetDenialCode | null;
  denialReason: string | null;
  hostedHardCapCapability: HostedHardCapCapability;
  canonicalLease: boolean;
} {
  const lease = resolveLease(budget);
  return {
    campaignId: lease.spec.campaignId,
    remainingModelInvocations: remainingModelInvocations(budget),
    remainingHostedWebOperations: remainingHostedWebOperations(budget),
    remainingAggregateRealCalls: remainingAggregateRealCalls(budget),
    consumedModelInvocations: lease.state.consumedModelInvocations,
    consumedHostedWebOperations: lease.state.consumedHostedWebOperations,
    consumedAggregateRealCalls: lease.state.consumedAggregateRealCalls,
    maxModelInvocations: lease.spec.maxModelInvocations,
    maxHostedWebOperations: lease.spec.maxHostedWebOperations,
    maxAggregateRealCalls: lease.spec.maxAggregateRealCalls,
    limitReached: lease.state.limitReached,
    denialCode: lease.state.denialCode,
    denialReason: lease.state.denialReason,
    hostedHardCapCapability: lease.spec.hostedHardCapCapability,
    canonicalLease: true,
  };
}
