/**
 * Multi-user Pilote S1 authority policy — BASE NONE + ACTION-SCOPED N1/N2/N3.
 *
 * Morris GO: PILOTE MULTI-USER AUTHORITY POLICY — BASE NONE + ACTION-SCOPED N1/N2/N3
 * Correction: B2 semantic binding via existing computeInspectionFingerprint.
 *
 * Trusted derivation (reuse): projectRequiredAuthorityFromEffects (W3-A).
 * Contract authority: contract.requiredAuthority checked directly vs projection.
 * Binding: AuthorityEvidence.scope = inspection fingerprint (lifecycle-stable).
 */

import type { AuthorityLevel } from "@/lib/oa/decision";
import type { AuthorityClass } from "@/lib/oa/execution-contract";
import { computeInspectionFingerprint } from "@/lib/oa/execution-contract/domain/inspectionAttestation";
import {
  actionForEffectClass,
  projectRequiredAuthorityFromEffects,
  type ExecutionEffectClass,
} from "@/features/project-assistant/w2/w3aQualifiedExecutionEffects";

export const PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN =
  "PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN" as const;

export const MORRIS_GATE_REQUIRED = "MORRIS_GATE_REQUIRED" as const;
export const MORRIS_AUTHORITY_NOT_AVAILABLE =
  "MORRIS_AUTHORITY_NOT_AVAILABLE" as const;
export const AUTHORITY_REQUIREMENT_UNTRUSTED =
  "AUTHORITY_REQUIREMENT_UNTRUSTED" as const;
export const AUTHORITY_REQUIREMENT_MISMATCH =
  "AUTHORITY_REQUIREMENT_MISMATCH" as const;
export const AUTHORITY_UNRESOLVED = "AUTHORITY_UNRESOLVED" as const;
export const CONTRACT_BINDING_MISMATCH = "CONTRACT_BINDING_MISMATCH" as const;
export const CONTRACT_CONTEXT_REQUIRED = "CONTRACT_CONTEXT_REQUIRED" as const;

export const PILOTE_S1_POLICY_ID =
  "AUTH_PILOTE_S1_BASE_NONE_ACTION_SCOPED_EFFECTS_PROJECTION" as const;

/**
 * Morris GO — MW6 HOSTED EXTERNAL DISCOVERY AUTHORITY POLICY — N2.
 * Server-owned constant mapping (not provider-string derived, not client-claimed).
 */
export const MW6_EXTERNAL_DISCOVERY_POLICY_ID =
  "MORRIS_MW6_HOSTED_EXTERNAL_DISCOVERY_AUTHORITY_N2" as const;
export const MW6_EXTERNAL_DISCOVERY_EFFECT_CLASS =
  "external-discovery" as const;
export const MW6_EXTERNAL_DISCOVERY_ACTION =
  "product:external-discovery" as const;
export const MW6_EXTERNAL_DISCOVERY_REQUIRED_AUTHORITY = "N2" as const;

/**
 * Exact server-owned authority for MW6 hosted external discovery.
 * Fixed N2 — never N1/N3 and never contextual.
 */
export function projectRequiredAuthorityForExternalDiscovery(): {
  ok: true;
  requiredAuthority: typeof MW6_EXTERNAL_DISCOVERY_REQUIRED_AUTHORITY;
  effectClass: typeof MW6_EXTERNAL_DISCOVERY_EFFECT_CLASS;
  action: typeof MW6_EXTERNAL_DISCOVERY_ACTION;
  policyId: typeof MW6_EXTERNAL_DISCOVERY_POLICY_ID;
  morrisConstructionGateRequired: false;
} {
  return {
    ok: true,
    requiredAuthority: MW6_EXTERNAL_DISCOVERY_REQUIRED_AUTHORITY,
    effectClass: MW6_EXTERNAL_DISCOVERY_EFFECT_CLASS,
    action: MW6_EXTERNAL_DISCOVERY_ACTION,
    policyId: MW6_EXTERNAL_DISCOVERY_POLICY_ID,
    morrisConstructionGateRequired: false,
  };
}

/**
 * Server-owned governed effects facts used for re-projection + coherence.
 * Claims never select the level. No contractRequiredAuthority field —
 * contract.requiredAuthority is the sole contract authority truth to CHECK.
 */
export type GovernedEffectsAuthorityInput = {
  effectClass: ExecutionEffectClass;
  rollbackAvailable: boolean;
  protectedBoundaries?: readonly string[];
  /** Must match concrete contract.scope */
  scopeIn: string;
  /** Must match concrete contract.target */
  target: string;
  claimedRequiredAuthority?: unknown;
};

/**
 * Concrete ExecutionContract semantic material for Auth S1.
 * Same field surface as computeInspectionFingerprint input (existing EC primitive).
 * requiredAuthority is mandatory and checked against server projection.
 */
export type AuthS1GovernedContractContext = Parameters<
  typeof computeInspectionFingerprint
>[0];

export type PiloteS1AuthorityPolicyResult =
  | {
      ok: true;
      level: AuthorityLevel;
      authorityClass: Exclude<AuthorityClass, "MORRIS">;
      policyId: typeof PILOTE_S1_POLICY_ID;
      effectClass: Exclude<ExecutionEffectClass, "unknown">;
      /** AuthorityEvidence.scope = computeInspectionFingerprint(contract) */
      authorityBindingScope: string;
      rationale: string;
      morrisConstructionGateRequired: false;
    }
  | {
      ok: false;
      code:
        | typeof PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN
        | typeof MORRIS_GATE_REQUIRED
        | typeof MORRIS_AUTHORITY_NOT_AVAILABLE
        | typeof AUTHORITY_REQUIREMENT_UNTRUSTED
        | typeof AUTHORITY_REQUIREMENT_MISMATCH
        | typeof AUTHORITY_UNRESOLVED
        | typeof CONTRACT_BINDING_MISMATCH
        | typeof CONTRACT_CONTEXT_REQUIRED;
      message: string;
    };

function isAuthorityClass(value: unknown): value is AuthorityClass {
  return (
    value === "N1" || value === "N2" || value === "N3" || value === "MORRIS"
  );
}

function isExecutionContractId(value: unknown): value is string {
  return typeof value === "string" && /^xct:[A-Za-z0-9][A-Za-z0-9:_\-.]*$/.test(value);
}

/**
 * Login / session-only — ALWAYS fail-closed.
 */
export function resolvePiloteS1AuthorityLevel(): PiloteS1AuthorityPolicyResult {
  return {
    ok: false,
    code: PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
    message:
      "Login/session alone cannot issue S1 AuthorityEvidence. " +
      "BASE NONE — provide a concrete governed ExecutionContract + effects context.",
  };
}

/**
 * Action-scoped + semantically bound S1 level from existing effects projection.
 */
export function resolvePiloteS1AuthorityFromGovernedContract(input: {
  contract: AuthS1GovernedContractContext;
  governedEffects: GovernedEffectsAuthorityInput;
}): PiloteS1AuthorityPolicyResult {
  const { contract, governedEffects } = input;

  if (!isExecutionContractId(contract.executionContractId?.trim())) {
    return {
      ok: false,
      code: CONTRACT_CONTEXT_REQUIRED,
      message:
        "executionContractId is required (xct:…) for Auth S1 contract binding.",
    };
  }

  if (
    typeof contract.projectId !== "string" ||
    contract.projectId.trim().length === 0
  ) {
    return {
      ok: false,
      code: CONTRACT_CONTEXT_REQUIRED,
      message: "projectId is required for Auth S1 semantic binding.",
    };
  }

  if (
    typeof contract.idempotencyKey !== "string" ||
    contract.idempotencyKey.trim().length === 0
  ) {
    return {
      ok: false,
      code: CONTRACT_CONTEXT_REQUIRED,
      message: "idempotencyKey is required for Auth S1 semantic binding.",
    };
  }

  if (
    !Array.isArray(contract.requiredCapabilities) ||
    !Array.isArray(contract.constraints) ||
    !Array.isArray(contract.stopConditions) ||
    !Array.isArray(contract.evidenceRequirements) ||
    typeof contract.reversibility !== "string"
  ) {
    return {
      ok: false,
      code: CONTRACT_CONTEXT_REQUIRED,
      message:
        "Semantic contract arrays/reversibility are required for inspection fingerprint binding.",
    };
  }

  const action = contract.action?.trim();
  const contractScope = contract.scope?.trim();
  const contractTarget = contract.target?.trim();
  const effectsScope = governedEffects.scopeIn?.trim();
  const effectsTarget = governedEffects.target?.trim();

  if (!action || !contractScope || !contractTarget) {
    return {
      ok: false,
      code: CONTRACT_CONTEXT_REQUIRED,
      message: "Concrete contract action/target/scope are required.",
    };
  }
  if (!effectsScope || !effectsTarget) {
    return {
      ok: false,
      code: CONTRACT_CONTEXT_REQUIRED,
      message: "Governed effects scopeIn/target are required for coherence.",
    };
  }

  if (effectsScope !== contractScope) {
    return {
      ok: false,
      code: CONTRACT_BINDING_MISMATCH,
      message: "Governed effects scopeIn does not match contract.scope.",
    };
  }
  if (effectsTarget !== contractTarget) {
    return {
      ok: false,
      code: CONTRACT_BINDING_MISMATCH,
      message: "Governed effects target does not match contract.target.",
    };
  }

  // contract.requiredAuthority is mandatory contract truth — never optional,
  // never selected from effects.caller fields.
  if (
    contract.requiredAuthority === undefined ||
    contract.requiredAuthority === null
  ) {
    return {
      ok: false,
      code: AUTHORITY_REQUIREMENT_UNTRUSTED,
      message: "contract.requiredAuthority is required for Auth S1 issuance.",
    };
  }

  if (!isAuthorityClass(contract.requiredAuthority)) {
    return {
      ok: false,
      code: AUTHORITY_REQUIREMENT_UNTRUSTED,
      message: "contract.requiredAuthority is not a trusted AuthorityClass.",
    };
  }

  if (contract.requiredAuthority === "MORRIS") {
    return {
      ok: false,
      code: MORRIS_AUTHORITY_NOT_AVAILABLE,
      message:
        "Auth path cannot satisfy MORRIS AuthorityClass. N3 ≠ Morris.",
    };
  }

  const claimed = governedEffects.claimedRequiredAuthority;
  if (claimed === "MORRIS") {
    return {
      ok: false,
      code: MORRIS_AUTHORITY_NOT_AVAILABLE,
      message:
        "Auth path cannot satisfy MORRIS AuthorityClass. N3 ≠ Morris.",
    };
  }

  if (governedEffects.effectClass === "unknown") {
    return {
      ok: false,
      code: AUTHORITY_UNRESOLVED,
      message: "Effect class unknown — authority fail-closed.",
    };
  }

  const expectedAction = actionForEffectClass(governedEffects.effectClass);
  if (expectedAction !== action) {
    return {
      ok: false,
      code: CONTRACT_BINDING_MISMATCH,
      message:
        `Effect class action (${expectedAction}) does not match contract.action (${action}).`,
    };
  }

  const projected = projectRequiredAuthorityFromEffects({
    effectClass: governedEffects.effectClass,
    rollbackAvailable: governedEffects.rollbackAvailable,
    protectedBoundaries: [...(governedEffects.protectedBoundaries ?? [])],
  });

  if (!projected.ok) {
    return {
      ok: false,
      code: AUTHORITY_UNRESOLVED,
      message: projected.message,
    };
  }

  if (projected.morrisConstructionGateRequired) {
    return {
      ok: false,
      code: MORRIS_GATE_REQUIRED,
      message:
        "Morris construction gate required — Auth S1 cannot satisfy it.",
    };
  }

  const serverClass = projected.requiredAuthority;
  if (serverClass !== "N1" && serverClass !== "N2" && serverClass !== "N3") {
    return {
      ok: false,
      code: AUTHORITY_UNRESOLVED,
      message: `Untrusted AuthorityClass from projection: ${String(serverClass)}`,
    };
  }

  // Sole level source = projection. Contract authority is CHECKED, never selected.
  if (contract.requiredAuthority !== serverClass) {
    return {
      ok: false,
      code: AUTHORITY_REQUIREMENT_MISMATCH,
      message:
        "contract.requiredAuthority does not match server effect projection.",
    };
  }

  if (claimed !== undefined && claimed !== null) {
    if (!isAuthorityClass(claimed) || claimed !== serverClass) {
      return {
        ok: false,
        code: AUTHORITY_REQUIREMENT_MISMATCH,
        message:
          "Client-claimed requiredAuthority does not match server effect projection.",
      };
    }
  }

  // Existing EC primitive — excludes confirmationRef / immutableAfterConfirm.
  const authorityBindingScope = computeInspectionFingerprint(contract);

  return {
    ok: true,
    level: serverClass,
    authorityClass: serverClass,
    policyId: PILOTE_S1_POLICY_ID,
    effectClass: governedEffects.effectClass,
    authorityBindingScope,
    morrisConstructionGateRequired: false,
    rationale:
      `Exact S1 ${serverClass} from projectRequiredAuthorityFromEffects(` +
      `effectClass=${governedEffects.effectClass}); AuthorityEvidence.scope=` +
      `computeInspectionFingerprint (semantic binding).`,
  };
}

/** @deprecated Use resolvePiloteS1AuthorityFromGovernedContract */
export function resolvePiloteS1AuthorityFromGovernedEffects(
  input: GovernedEffectsAuthorityInput,
): PiloteS1AuthorityPolicyResult {
  void input;
  return {
    ok: false,
    code: CONTRACT_CONTEXT_REQUIRED,
    message:
      "Governed effects alone are insufficient — provide concrete ExecutionContract context.",
  };
}
