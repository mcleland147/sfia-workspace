# ChatGPT Review Pack — AUTH B2 SEMANTIC-BINDING DETERMINISTIC CORRECTION

## A. Metadata

- timestamp: 2026-09-04 21:25:23 +0200
- cycle: Cycle 8 — Delivery / continuation corrective — Auth B2 semantic binding
- profile: CRITICAL
- typology: EVOL
- branch: `delivery/sfia-studio-auth-better-auth-github-multi-user-foundation`
- HEAD / origin/main: `ebdae92a96ea1c49444dfb668342c1453f57a540`
- GO Morris consumed: **GO MORRIS — TARGETED AUTH B2 SEMANTIC-BINDING DETERMINISTIC CORRECTION**
- Input Review Handoff tip: `b543571233d6ce9e684951cc66ec34691d2705bf`
- Input canonical blob: `c8856ce4925487f39bb72791bcd559f84ff1b454`
- Product commit/push/PR/merge: **0**
- Review Handoff publication this cycle: **NOT PERFORMED — NO MORRIS PUSH GO**

## B. Git Truth

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/components/shell/StudioShell.tsx
 M projects/sfia-studio/app/components/shell/Topbar.tsx
 M projects/sfia-studio/app/lib/oa/execution-contract/application/authorityHelper.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/buildExecutionContract.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/cancelExecutionContract.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/checkExecutionAuthorization.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/supersedeExecutionContract.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/validateExecutionContract.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/index.ts
 M projects/sfia-studio/app/package-lock.json
 M projects/sfia-studio/app/package.json
?? projects/sfia-studio/app/.env.example
?? projects/sfia-studio/app/__tests__/auth/
?? projects/sfia-studio/app/app/api/auth/
?? projects/sfia-studio/app/app/login/
?? projects/sfia-studio/app/components/auth/
?? projects/sfia-studio/app/lib/auth/
?? projects/sfia-studio/app/middleware.ts
```

- staged=0 · conflicts=0 · Auth dirty candidate expected · no MW6 files in Auth worktree

## C. Convergence

- Capability: V3-F11 / V12 governed execution authority
- Milestone: Auth multi-user deterministic policy closure — semantic binding correction
- Assets: Better Auth 1.7.2 KEEP; AE schema KEEP; projectRequiredAuthorityFromEffects KEEP; computeInspectionFingerprint REUSE; executionContractId binding ADAPT→semantic; localSingleUserAuthority FREEZE; MW6 PRESERVE
- Closed retained: B1 bypass; B2-A distinct-ID; login none; N3≠Morris; TTL/collision; session binding
- Open closed this cycle: B2-B authority precedence; B2-C same-ID semantic substitution
- Next: ChatGPT deterministic re-review only

## D. ChatGPT findings consumed

- B1 AUTH S1 POLICY BYPASS — CLOSED / PASS (not reopened)
- B2-A distinct ExecutionContract IDs — CLOSED / PASS (retained)
- B2-B CONTRACT AUTHORITY PRECEDENCE GAP — CLOSED this cycle
- B2-C SAME-ID SEMANTIC SUBSTITUTION — CLOSED this cycle

## E. Discovery D1–D20

| ID | Answer |
|----|--------|
| D1 | ExecutionContractSemanticMaterial covers: executionContractId, projectId, cycleInstanceId?, decisionRefs?, confirmationRef?, doctrinePackageRef?, action, target, scope, inputs?, expectedOutputs?, requiredCapabilities, requiredAuthority, constraints, stopConditions, evidenceRequirements, reversibility, executionWindowClass?, idempotencyKey, supersedes*, adapterExportRef?, immutableAfterConfirm? |
| D2 | Yes — `computeExecutionContractSemanticMaterialFingerprint` / `computeExecutionContractSemanticFingerprint` / `computeInspectionFingerprint` work on material before persistence. |
| D3 | Yes — Auth issuance receives the same field surface as inspection fingerprint input (AuthS1GovernedContractContext = Parameters of computeInspectionFingerprint). |
| D4 | semanticFingerprint is computed at Build persist time; pre-Build equivalent is recomputed from request material via computeInspectionFingerprint. |
| D5 | S1 is issued before Build (authorityEvidenceId on Build request). No production call site yet issues Auth S1 in app routes; tests/helpers exercise the canonical issuer. |
| D6 | Future production call site: product path preparing BuildExecutionContractRequest with Auth-issued evidence (not wired this cycle beyond EC gates). |
| D7 | S1 is needed pre-Build; durable contract may not exist yet. |
| D8 | Existing canonical pre-Build semantic material = fields feeding `computeInspectionFingerprint` (execution-significant material minus confirmation binding fields). |
| D9 | Yes — AE.scope exact-match can carry the inspection fingerprint hex without AE schema extension. |
| D10 | Yes — issuance and all EC gates recompute via `computeInspectionFingerprint` from server-owned contract/request material. |
| D11 | Yes — Build/Validate/Confirm/Cancel/Supersede/Check all recompute; never trust caller opaque fingerprint. |
| D12 | Non-Auth evidence still verifies with business `contract.scope` (source-gated adapter). |
| D13 | Historical registry evidence unchanged; Auth S1 source-gated. |
| D14 | Supersede successor has distinct executionContractId (+ material) → distinct fingerprint; prior S1 cannot authorize successor (SEM-LIFE-02). |
| D15 | Build computes `preBuildSemantic` and verifies BEFORE constructing/persisting contract. |
| D16 | Existing inspection fingerprint already includes authority-bearing intent fields (action/target/scope/requiredAuthority/capabilities/constraints/stop/evidence/reversibility/idempotency/decisionRefs/etc.). |
| D17 | Choosing a custom narrower subset would be new architecture — avoided. |
| D18 | No circular Auth↔EC dependency: Auth imports existing EC inspection primitive; EC does not import Auth. |
| D19 | Full semanticFingerprint includes confirmationRef/immutableAfterConfirm and changes on Confirm. |
| D20 | Full semanticFingerprint is NOT stable across Confirm. **Existing** `computeInspectionFingerprint` deliberately excludes those fields and remains stable (documented in inspectionAttestation.ts). |

**Classification: OPTION 2 — EXISTING PRIMITIVE PARTIALLY SUFFICIENT — EXISTING STABLE PRE-BUILD MATERIAL/PRIMITIVE FOUND (`computeInspectionFingerprint`).**

## F. Fingerprint analysis

- Reused primitive: `computeInspectionFingerprint` from `domain/inspectionAttestation.ts`
- Material: full ExecutionContractSemanticMaterial minus confirmationRef/immutableAfterConfirm
- Lifecycle: stable Build→Validate→Confirm; supersede creates new identity/fingerprint
- Why not new architecture: existing documented EC inspection sufficiency primitive; no new hash engine; no AE schema field; no second resolver

## G. Modified content — FULL FILES

### `projects/sfia-studio/app/lib/auth/piloteS1AuthorityPolicy.ts`

```typescript
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
```

### `projects/sfia-studio/app/lib/auth/s1Authority.ts`

```typescript
/**
 * S1 AuthorityEvidence — single public Auth issuance path.
 *
 * B1: buildValidatedS1Evidence / registerS1EvidenceImmutable are module-private.
 * B2: AuthorityEvidence.scope = computeInspectionFingerprint(contract)
 *     (existing EC inspection primitive — lifecycle-stable across Confirmation).
 */

import { randomUUID } from "node:crypto";
import type {
  AuthorityEvidence,
  AuthorityLevel,
  AuthorityResolverPort,
} from "@/lib/oa/decision";
import {
  BETTER_AUTH_GITHUB_MULTI_USER_S1,
  S1_MAX_TTL_SECONDS,
  SESSION_COOKIE_MAX_AGE_SECONDS,
} from "./constants";
import {
  AUTHORITY_REQUIREMENT_MISMATCH,
  AUTHORITY_REQUIREMENT_UNTRUSTED,
  AUTHORITY_UNRESOLVED,
  CONTRACT_BINDING_MISMATCH,
  CONTRACT_CONTEXT_REQUIRED,
  MORRIS_AUTHORITY_NOT_AVAILABLE,
  MORRIS_GATE_REQUIRED,
  PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
  resolvePiloteS1AuthorityFromGovernedContract,
  resolvePiloteS1AuthorityLevel,
  type AuthS1GovernedContractContext,
  type GovernedEffectsAuthorityInput,
} from "./piloteS1AuthorityPolicy";
import type { ResolveCurrentPiloteResult } from "./resolveCurrentPilote";

export type IssueS1AuthorityEvidenceInput = {
  pilote: Extract<ResolveCurrentPiloteResult, { ok: true }>;
  authorityResolver: AuthorityResolverPort;
  /** Concrete governed ExecutionContract context — required for success. */
  contract?: AuthS1GovernedContractContext;
  /** Server-owned effects facts — required for success; re-projected for level. */
  governedEffects?: GovernedEffectsAuthorityInput;
  issuedAt: string;
  expiresAt: string;
  evidenceId?: string;
};

export type IssueS1AuthorityEvidenceResult =
  | { ok: true; evidence: AuthorityEvidence }
  | {
      ok: false;
      code:
        | "INVALID_SCOPE"
        | "INVALID_ISSUED_AT"
        | "INVALID_EXPIRES_AT"
        | "INVALID_EVIDENCE_LIFETIME"
        | "EVIDENCE_ID_COLLISION"
        | "REGISTER_FAILED"
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

function parseIsoMs(value: string): number | null {
  if (typeof value !== "string" || value.trim().length === 0) return null;
  const ms = Date.parse(value);
  return Number.isFinite(ms) ? ms : null;
}

/** Lifetime validation only — does not emit/register authority. */
export function validateS1EvidenceLifetime(input: {
  issuedAt: string;
  expiresAt: string;
  maxTtlSeconds?: number;
}):
  | { ok: true; issuedAtMs: number; expiresAtMs: number; ttlSeconds: number }
  | {
      ok: false;
      code: "INVALID_ISSUED_AT" | "INVALID_EXPIRES_AT" | "INVALID_EVIDENCE_LIFETIME";
      message: string;
    } {
  const maxTtl = input.maxTtlSeconds ?? S1_MAX_TTL_SECONDS;
  if (maxTtl > SESSION_COOKIE_MAX_AGE_SECONDS) {
    return {
      ok: false,
      code: "INVALID_EVIDENCE_LIFETIME",
      message: "Configured max TTL exceeds session cookie max age.",
    };
  }

  const issuedAtMs = parseIsoMs(input.issuedAt);
  if (issuedAtMs === null) {
    return {
      ok: false,
      code: "INVALID_ISSUED_AT",
      message: "issuedAt must be a parseable ISO timestamp.",
    };
  }

  const expiresAtMs = parseIsoMs(input.expiresAt);
  if (expiresAtMs === null) {
    return {
      ok: false,
      code: "INVALID_EXPIRES_AT",
      message: "expiresAt is required and must be a parseable ISO timestamp.",
    };
  }

  if (expiresAtMs <= issuedAtMs) {
    return {
      ok: false,
      code: "INVALID_EVIDENCE_LIFETIME",
      message: "expiresAt must be strictly greater than issuedAt.",
    };
  }

  const ttlSeconds = (expiresAtMs - issuedAtMs) / 1000;
  if (ttlSeconds > maxTtl) {
    return {
      ok: false,
      code: "INVALID_EVIDENCE_LIFETIME",
      message: `S1 TTL exceeds max allowed (${maxTtl}s / session cookie bound).`,
    };
  }

  return { ok: true, issuedAtMs, expiresAtMs, ttlSeconds };
}

/** Module-private — not exported from lib/auth (B1). */
function registerS1EvidenceImmutable(
  authorityResolver: AuthorityResolverPort,
  evidence: AuthorityEvidence,
):
  | { ok: true; evidence: AuthorityEvidence }
  | {
      ok: false;
      code: "EVIDENCE_ID_COLLISION" | "REGISTER_FAILED";
      message: string;
    } {
  try {
    const existing = authorityResolver.getEvidence(evidence.evidenceId);
    if (existing) {
      return {
        ok: false,
        code: "EVIDENCE_ID_COLLISION",
        message: "evidenceId already registered; AuthorityEvidence is immutable.",
      };
    }
    authorityResolver.register(evidence);
    const stored = authorityResolver.getEvidence(evidence.evidenceId);
    if (!stored) {
      return {
        ok: false,
        code: "REGISTER_FAILED",
        message: "Evidence register did not persist the record.",
      };
    }
    return { ok: true, evidence: stored };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to register S1 evidence.";
    if (message === "evidence_immutable") {
      return {
        ok: false,
        code: "EVIDENCE_ID_COLLISION",
        message: "evidenceId already registered; AuthorityEvidence is immutable.",
      };
    }
    return { ok: false, code: "REGISTER_FAILED", message };
  }
}

/** Module-private — not exported from lib/auth (B1). */
function buildValidatedS1Evidence(input: {
  pilote: Extract<ResolveCurrentPiloteResult, { ok: true }>;
  /** Must be executionContractId for Auth S1 binding. */
  authorityBindingScope: string;
  issuedAt: string;
  expiresAt: string;
  level: AuthorityLevel;
  evidenceId?: string;
}):
  | { ok: true; evidence: AuthorityEvidence }
  | {
      ok: false;
      code:
        | "INVALID_SCOPE"
        | "INVALID_ISSUED_AT"
        | "INVALID_EXPIRES_AT"
        | "INVALID_EVIDENCE_LIFETIME";
      message: string;
    } {
  const scope = input.authorityBindingScope?.trim();
  if (!scope) {
    return {
      ok: false,
      code: "INVALID_SCOPE",
      message: "AuthorityEvidence binding scope (executionContractId) is required.",
    };
  }

  const lifetime = validateS1EvidenceLifetime({
    issuedAt: input.issuedAt,
    expiresAt: input.expiresAt,
  });
  if (!lifetime.ok) return lifetime;

  const evidenceId =
    input.evidenceId ??
    `evd:github-s1:${input.pilote.githubUserId}:${randomUUID()}`;

  return {
    ok: true,
    evidence: {
      evidenceId,
      actorId: input.pilote.actor.actorId,
      level: input.level,
      scope,
      issuedAt: input.issuedAt,
      expiresAt: input.expiresAt,
      source: BETTER_AUTH_GITHUB_MULTI_USER_S1,
      canActAsMorris: false,
    },
  };
}

/**
 * Canonical (sole) public Auth S1 issuance path.
 * Requires concrete contract + governed effects; never login-only.
 */
export function issueS1AuthorityEvidence(
  input: IssueS1AuthorityEvidenceInput,
): IssueS1AuthorityEvidenceResult {
  if (!input.contract || !input.governedEffects) {
    const loginOnly = resolvePiloteS1AuthorityLevel();
    if (loginOnly.ok) {
      return {
        ok: false,
        code: PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
        message: "Unexpected login policy success — fail-closed.",
      };
    }
    return { ok: false, code: loginOnly.code, message: loginOnly.message };
  }

  const policy = resolvePiloteS1AuthorityFromGovernedContract({
    contract: input.contract,
    governedEffects: input.governedEffects,
  });

  if (!policy.ok) {
    return {
      ok: false,
      code: policy.code,
      message: policy.message,
    };
  }

  const built = buildValidatedS1Evidence({
    pilote: input.pilote,
    authorityBindingScope: policy.authorityBindingScope,
    issuedAt: input.issuedAt,
    expiresAt: input.expiresAt,
    level: policy.level,
    evidenceId: input.evidenceId,
  });
  if (!built.ok) return built;

  return registerS1EvidenceImmutable(input.authorityResolver, built.evidence);
}
```

### `projects/sfia-studio/app/lib/auth/index.ts`

```typescript
/**
 * SFIA Studio authentication / identity foundation (Better Auth + GitHub).
 *
 * Public S1 issuance surface: issueS1AuthorityEvidence ONLY.
 * buildValidatedS1Evidence / registerS1EvidenceImmutable are NOT exported (B1).
 */

export * from "./constants";
export * from "./allowlist";
export * from "./actorMapping";
export {
  createSfiaAuth,
  getSfiaAuth,
  resetSfiaAuthSingletonForTests,
  assertStatelessAuthConfig,
  type CreateSfiaAuthOptions,
  type SfiaAuth,
} from "./auth";
export {
  resolveCurrentAuthenticatedPilote,
  requireCurrentPilote,
  type ResolveCurrentPiloteInput,
  type ResolveCurrentPiloteResult,
} from "./resolveCurrentPilote";
export {
  readSessionBoundGithubProviderAccount,
  type BoundGithubProviderAccount,
  type ReadBoundGithubAccountResult,
} from "./providerAccountBinding";
export {
  resolvePiloteS1AuthorityLevel,
  resolvePiloteS1AuthorityFromGovernedContract,
  resolvePiloteS1AuthorityFromGovernedEffects,
  PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
  MORRIS_GATE_REQUIRED,
  MORRIS_AUTHORITY_NOT_AVAILABLE,
  AUTHORITY_REQUIREMENT_UNTRUSTED,
  AUTHORITY_REQUIREMENT_MISMATCH,
  AUTHORITY_UNRESOLVED,
  CONTRACT_BINDING_MISMATCH,
  CONTRACT_CONTEXT_REQUIRED,
  PILOTE_S1_POLICY_ID,
  type PiloteS1AuthorityPolicyResult,
  type GovernedEffectsAuthorityInput,
  type AuthS1GovernedContractContext,
} from "./piloteS1AuthorityPolicy";
export {
  issueS1AuthorityEvidence,
  validateS1EvidenceLifetime,
  type IssueS1AuthorityEvidenceInput,
  type IssueS1AuthorityEvidenceResult,
} from "./s1Authority";
```

### `projects/sfia-studio/app/lib/oa/execution-contract/application/authorityHelper.ts`

```typescript
/**
 * Shared authority helpers for T-A4 — consume T-A3 AuthorityResolverPort only.
 * MORRIS = N3 verified ∧ canActAsMorris=true. N3 ≠ Morris.
 *
 * Auth S1 binding adaptation (reuse, not new engine):
 * BETTER_AUTH_GITHUB_MULTI_USER_S1 evidence uses AuthorityEvidence.scope =
 * computeInspectionFingerprint(contract) — existing EC inspection primitive
 * (excludes confirmationRef / immutableAfterConfirm for lifecycle stability).
 */
import type {
  AuthorityEvidence,
  AuthorityLevel,
  AuthorityResolverPort,
  VerifyAuthorityResult,
} from "@/lib/oa/decision";
import { computeInspectionFingerprint } from "../domain/inspectionAttestation";
import type { AuthorityClass } from "../domain/types";

/** Must match lib/auth/constants BETTER_AUTH_GITHUB_MULTI_USER_S1 (no auth import). */
export const AUTH_S1_EVIDENCE_SOURCE = "BETTER_AUTH_GITHUB_MULTI_USER_S1" as const;

export type AuthS1BindingContractSemantic = Parameters<
  typeof computeInspectionFingerprint
>[0];

/**
 * Resolve the scope string passed to AuthorityResolver.verify for a contract.
 * Auth-origin S1 evidence is bound to the inspection semantic fingerprint.
 */
export function resolveExecutionAuthorityVerifyScope(input: {
  contractScope: string;
  evidence: AuthorityEvidence | null | undefined;
  /**
   * Server-owned contract semantic material for Auth S1 binding recomputation.
   * Required whenever evidence.source is Auth S1; never trusted from client alone.
   */
  contractSemantic?: AuthS1BindingContractSemantic | null;
}): string {
  if (input.evidence?.source === AUTH_S1_EVIDENCE_SOURCE) {
    if (!input.contractSemantic) {
      // Fail-closed: never match a legitimate evidence.scope.
      return "auth-s1-binding:unavailable";
    }
    return computeInspectionFingerprint(input.contractSemantic);
  }
  return input.contractScope;
}

export function authorityClassToVerify(input: {
  requiredAuthority: AuthorityClass;
  actorId: string;
  scope: string;
  evidenceId?: string;
  claimedAuthorityLevel?: string;
  displayName?: string;
}): {
  actorId: string;
  requiredLevel: AuthorityLevel;
  scope: string;
  evidenceId?: string;
  requireMorrisGate?: boolean;
  authorityLevel?: AuthorityLevel | "none";
  displayName?: string;
} {
  const requireMorrisGate = input.requiredAuthority === "MORRIS";
  const requiredLevel: AuthorityLevel =
    input.requiredAuthority === "MORRIS"
      ? "N3"
      : (input.requiredAuthority as AuthorityLevel);

  return {
    actorId: input.actorId,
    requiredLevel,
    scope: input.scope,
    evidenceId: input.evidenceId,
    requireMorrisGate,
    // Hostile injection deliberately passed through so resolver can ignore it.
    authorityLevel: input.claimedAuthorityLevel as
      | AuthorityLevel
      | "none"
      | undefined,
    displayName: input.displayName,
  };
}

export function verifyRequiredAuthority(
  authority: AuthorityResolverPort,
  input: {
    requiredAuthority: AuthorityClass;
    actorId: string;
    scope: string;
    evidenceId?: string;
    claimedAuthorityLevel?: string;
    displayName?: string;
  },
): VerifyAuthorityResult {
  return authority.verify(authorityClassToVerify(input));
}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/application/buildExecutionContract.ts`

```typescript
import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { CycleServices } from "@/lib/oa/cycle";
import type {
  AuthorityResolverPort,
  DecisionServices,
} from "@/lib/oa/decision";
import type { ProjectServices } from "@/lib/oa/project";
import { createExecutionError } from "../domain/errors";
import {
  assertNotTa5Injection,
  cloneContractArrays,
  contractIdempotencyFingerprint,
  EXECUTION_CONTRACT_SCHEMA_VERSION,
  validateBuildFields,
} from "../domain/invariants";
import { computeExecutionContractSemanticFingerprint } from "../domain/semanticFingerprint";
import type {
  ActorReference,
  AuthorityClass,
  BuildExecutionContractRequest,
  ExecutionContract,
  ExecutionContractResult,
  Reversibility,
} from "../domain/types";
import type { ExecutionContractPersistenceUnitOfWorkPort } from "../ports/executionContractPersistenceUnitOfWorkPort";
import type { ExecutionAuditPort } from "../ports/executionAudit";
import type { ExecutionContractRepositoryPort } from "../ports/executionContractRepository";
import {
  resolveExecutionAuthorityVerifyScope,
  verifyRequiredAuthority,
} from "./authorityHelper";

function newId(prefix: "cor" | "prv"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

type BuildSnapshot = {
  executionContractId: string;
  projectId: string;
  cycleInstanceId: string | undefined;
  action: string;
  target: string;
  scope: string;
  requiredAuthority: AuthorityClass;
  reversibility: Reversibility;
  executionWindowClass: BuildExecutionContractRequest["executionWindowClass"];
  idempotencyKey: string;
  correlationId: string;
  status: "draft" | "proposed";
  adapterExportRef: string | undefined;
  actor: ActorReference;
  authorityEvidenceId: string | undefined;
  claimedAuthorityLevel: string | undefined;
  doctrinePackageRef: BuildExecutionContractRequest["doctrinePackageRef"];
};

/**
 * BuildExecutionContract — create draft|proposed.
 * Requires project exists; decisionRefs accepted+current same project.
 * Does NOT consume Confirmation.
 * Does NOT set selectedAgentRef / T-A5 statuses.
 *
 * B1: snapshot request fields BEFORE any await (TOCTOU).
 */
export class BuildExecutionContract {
  constructor(
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly authority: AuthorityResolverPort,
    private readonly projectServices: ProjectServices,
    private readonly cycleServices: CycleServices | undefined,
    private readonly decisionServices: DecisionServices,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAuditPort,
    private readonly store?: ExecutionContractPersistenceUnitOfWorkPort,
  ) {}

  async execute(
    request: BuildExecutionContractRequest,
  ): Promise<ExecutionContractResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createExecutionError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createExecutionError>[0]>,
    ): ExecutionContractResult => {
      const durationMs = Date.now() - started;
      const error = createExecutionError({
        detailCode,
        timestamp,
        correlationId,
        projectId: extra?.projectId ?? request.projectId,
        executionContractId:
          extra?.executionContractId ?? request.executionContractId,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.execution_contract.built",
        ts: timestamp,
        correlationId,
        projectId: error.projectId ?? request.projectId,
        executionContractId:
          error.executionContractId ?? request.executionContractId,
        status: request.status ?? "draft",
        requiredAuthority: String(request.requiredAuthority),
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      if (!request.actor?.actorId) {
        return fail("CONTRACT_INVALID", "actor_required");
      }

      const ta5 = assertNotTa5Injection({
        status: request.status,
        selectedAgentRef: request.selectedAgentRef,
      });
      if (ta5) {
        return fail(ta5.detailCode, ta5.reason);
      }
      // Hostile claimedAuthorityLevel ignored after snapshot for audit trail.
      void request.claimedAuthorityLevel;

      const cloned = cloneContractArrays({
        decisionRefs: request.decisionRefs,
        requiredCapabilities: request.requiredCapabilities,
        constraints: request.constraints,
        stopConditions: request.stopConditions,
        evidenceRequirements: request.evidenceRequirements,
        expectedOutputs: request.expectedOutputs,
        inputs: request.inputs,
      });

      const snap: BuildSnapshot = {
        executionContractId: request.executionContractId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        action: request.action,
        target: request.target,
        scope: request.scope,
        requiredAuthority: request.requiredAuthority,
        reversibility: request.reversibility,
        executionWindowClass: request.executionWindowClass,
        idempotencyKey: request.idempotencyKey,
        correlationId,
        status: request.status ?? "draft",
        adapterExportRef: request.adapterExportRef,
        actor: structuredClone(request.actor),
        authorityEvidenceId: request.authorityEvidenceId,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
        doctrinePackageRef: request.doctrinePackageRef
          ? structuredClone(request.doctrinePackageRef)
          : undefined,
      };

      const fieldViolation = validateBuildFields({
        executionContractId: snap.executionContractId,
        projectId: snap.projectId,
        cycleInstanceId: snap.cycleInstanceId,
        decisionRefs: cloned.decisionRefs,
        action: snap.action,
        target: snap.target,
        scope: snap.scope,
        requiredCapabilities: cloned.requiredCapabilities,
        requiredAuthority: snap.requiredAuthority,
        constraints: cloned.constraints,
        stopConditions: cloned.stopConditions,
        evidenceRequirements: cloned.evidenceRequirements,
        reversibility: snap.reversibility,
        executionWindowClass: snap.executionWindowClass,
        idempotencyKey: snap.idempotencyKey,
        correlationId: snap.correlationId,
        status: snap.status,
      });
      if (fieldViolation) {
        return fail(fieldViolation.detailCode, fieldViolation.reason);
      }

      const existingById = await this.contracts.findById(
        snap.executionContractId,
      );
      if (existingById) {
        return fail("CONTRACT_ALREADY_EXISTS", "duplicate_id");
      }

      const byIdem = await this.contracts.findByIdempotencyKey(
        snap.idempotencyKey,
      );
      if (byIdem) {
        const fp = contractIdempotencyFingerprint({
          projectId: snap.projectId,
          action: snap.action,
          target: snap.target,
          scope: snap.scope,
          requiredAuthority: snap.requiredAuthority,
          decisionRefs: cloned.decisionRefs,
          constraints: cloned.constraints,
          requiredCapabilities: cloned.requiredCapabilities,
          stopConditions: cloned.stopConditions,
          evidenceRequirements: cloned.evidenceRequirements,
          reversibility: snap.reversibility,
          executionWindowClass: snap.executionWindowClass,
          status: snap.status,
        });
        const existingFp = contractIdempotencyFingerprint({
          projectId: byIdem.projectId,
          action: byIdem.action,
          target: byIdem.target,
          scope: byIdem.scope,
          requiredAuthority: byIdem.requiredAuthority,
          decisionRefs: byIdem.decisionRefs ?? [],
          constraints: byIdem.constraints,
          requiredCapabilities: byIdem.requiredCapabilities,
          stopConditions: byIdem.stopConditions,
          evidenceRequirements: byIdem.evidenceRequirements,
          reversibility: byIdem.reversibility,
          executionWindowClass: byIdem.executionWindowClass,
          status: byIdem.status,
        });
        if (fp === existingFp) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.execution_contract.built",
            ts: timestamp,
            correlationId,
            projectId: byIdem.projectId,
            executionContractId: byIdem.executionContractId,
            status: byIdem.status,
            requiredAuthority: byIdem.requiredAuthority,
            result: "ok",
            durationMs,
            reusedFromIdempotencyKey: true,
          });
          return {
            ok: true,
            contract: structuredClone(byIdem),
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("CONTRACT_IDEMPOTENCY_CONFLICT", "idempotency_mismatch");
      }

      const projectResult = await this.projectServices.getProject.execute({
        projectId: snap.projectId,
      });
      if (!projectResult.ok) {
        return fail("PROJECT_NOT_FOUND", "missing_project");
      }

      if (snap.cycleInstanceId) {
        if (!this.cycleServices) {
          return fail("CYCLE_NOT_FOUND", "cycle_services_unavailable");
        }
        const cycleResult = await this.cycleServices.getCycle.execute({
          cycleInstanceId: snap.cycleInstanceId,
        });
        if (!cycleResult.ok) {
          return fail("CYCLE_NOT_FOUND", "missing_cycle");
        }
        if (cycleResult.cycle.projectId !== snap.projectId) {
          return fail("CYCLE_PROJECT_MISMATCH", "cycle_project_mismatch");
        }
      }

      for (const decisionId of cloned.decisionRefs) {
        const decisionResult =
          await this.decisionServices.getHumanDecision.execute({
            decisionId,
            correlationId,
          });
        if (!decisionResult.ok) {
          return fail("DECISION_NOT_FOUND", "missing_decision", {
            executionContractId: snap.executionContractId,
            projectId: snap.projectId,
          });
        }
        const d = decisionResult.decision;
        if (d.projectId !== snap.projectId) {
          return fail("DECISION_REQUIRED", "decision_project_mismatch");
        }
        if (d.status !== "accepted") {
          return fail("DECISION_NOT_CURRENT", `decision_status_${d.status}`);
        }
      }

      const authEvidence = snap.authorityEvidenceId
        ? this.authority.getEvidence(snap.authorityEvidenceId)
        : null;
      // Pre-Build Auth S1 binding: recompute inspection fingerprint from request
      // semantic material BEFORE persistence (existing EC primitive).
      const preBuildSemantic = {
        executionContractId: snap.executionContractId,
        projectId: snap.projectId,
        cycleInstanceId: snap.cycleInstanceId,
        decisionRefs: cloned.decisionRefs,
        doctrinePackageRef: snap.doctrinePackageRef,
        action: snap.action,
        target: snap.target,
        scope: snap.scope,
        inputs: cloned.inputs,
        expectedOutputs:
          cloned.expectedOutputs.length > 0
            ? cloned.expectedOutputs
            : undefined,
        requiredCapabilities: cloned.requiredCapabilities,
        requiredAuthority: snap.requiredAuthority,
        constraints: cloned.constraints,
        stopConditions: cloned.stopConditions,
        evidenceRequirements: cloned.evidenceRequirements,
        reversibility: snap.reversibility,
        executionWindowClass: snap.executionWindowClass,
        idempotencyKey: snap.idempotencyKey,
        adapterExportRef: snap.adapterExportRef,
      };
      const verifyScope = resolveExecutionAuthorityVerifyScope({
        contractScope: snap.scope,
        evidence: authEvidence,
        contractSemantic: preBuildSemantic,
      });
      const verification = verifyRequiredAuthority(this.authority, {
        requiredAuthority: snap.requiredAuthority,
        actorId: snap.actor.actorId,
        scope: verifyScope,
        evidenceId: snap.authorityEvidenceId,
        claimedAuthorityLevel: snap.claimedAuthorityLevel,
        displayName: snap.actor.displayName,
      });
      this.audit.append({
        event: "oa.authority.verified",
        ts: timestamp,
        correlationId,
        actorId: snap.actor.actorId,
        requiredLevel:
          snap.requiredAuthority === "MORRIS" ? "N3" : snap.requiredAuthority,
        scope: verifyScope,
        ok: verification.ok,
        verifiedLevel: verification.verifiedLevel,
        reason: verification.reason,
        canActAsMorris: verification.canActAsMorris,
        durationMs: Date.now() - started,
      });
      if (!verification.ok) {
        return fail(
          verification.reason === "scope_mismatch"
            ? "AUTHORITY_SCOPE_MISMATCH"
            : "AUTHORITY_DENIED",
          verification.reason,
        );
      }

      const contract: ExecutionContract = {
        schemaVersion: EXECUTION_CONTRACT_SCHEMA_VERSION,
        executionContractId: snap.executionContractId,
        projectId: snap.projectId,
        cycleInstanceId: snap.cycleInstanceId,
        decisionRefs: cloned.decisionRefs,
        doctrinePackageRef: snap.doctrinePackageRef
          ? structuredClone(snap.doctrinePackageRef)
          : undefined,
        action: snap.action,
        target: snap.target,
        scope: snap.scope,
        inputs: cloned.inputs,
        expectedOutputs:
          cloned.expectedOutputs.length > 0
            ? cloned.expectedOutputs
            : undefined,
        requiredCapabilities: cloned.requiredCapabilities,
        requiredAuthority: snap.requiredAuthority,
        constraints: cloned.constraints,
        stopConditions: cloned.stopConditions,
        evidenceRequirements: cloned.evidenceRequirements,
        reversibility: snap.reversibility,
        ...(snap.executionWindowClass
          ? { executionWindowClass: snap.executionWindowClass }
          : {}),
        idempotencyKey: snap.idempotencyKey,
        correlationId: snap.correlationId,
        status: snap.status,
        version: 1,
        adapterExportRef: snap.adapterExportRef,
        provenance: {
          schemaVersion: "0.1.0-oa",
          provenanceRecordId: newId("prv"),
          actor: structuredClone(snap.actor),
          source: "execution_adapter",
          timestamp,
          correlationId,
          projectId: snap.projectId,
          cycleInstanceId: snap.cycleInstanceId,
        },
      };
      contract.semanticFingerprint =
        computeExecutionContractSemanticFingerprint(contract);

      const persist = async () => {
        const again = await this.contracts.findById(snap.executionContractId);
        if (again) {
          throw Object.assign(new Error("exists"), {
            detailCode: "CONTRACT_ALREADY_EXISTS" as const,
          });
        }
        await this.contracts.save(contract);
      };

      try {
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch (err) {
        if (
          err &&
          typeof err === "object" &&
          "detailCode" in err
        ) {
          return fail(
            (err as { detailCode: Parameters<typeof createExecutionError>[0]["detailCode"] })
              .detailCode,
            err instanceof Error ? err.message : "race",
          );
        }
        return fail("PERSISTENCE_FAILURE", "atomic_build_failed");
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_contract.built",
        ts: timestamp,
        correlationId,
        projectId: contract.projectId,
        executionContractId: contract.executionContractId,
        status: contract.status,
        requiredAuthority: contract.requiredAuthority,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        contract: structuredClone(contract),
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/application/checkExecutionAuthorization.ts`

```typescript
import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { CycleServices } from "@/lib/oa/cycle";
import type {
  AuthorityResolverPort,
  DecisionServices,
} from "@/lib/oa/decision";
import { createExecutionError } from "../domain/errors";
import {
  denyByDefaultMatch,
  hasConfirmationConstraintContradiction,
  isExecutionReadyStatus,
  isTa5Status,
} from "../domain/invariants";
import type {
  ActorReference,
  CheckAuthorizationResult,
  CheckExecutionAuthorizationRequest,
} from "../domain/types";
import type { ExecutionAuditPort } from "../ports/executionAudit";
import type { ExecutionContractRepositoryPort } from "../ports/executionContractRepository";
import {
  resolveExecutionAuthorityVerifyScope,
  verifyRequiredAuthority,
} from "./authorityHelper";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

type CheckSnapshot = {
  executionContractId: string;
  action: string;
  target: string;
  scope: string;
  actor: ActorReference;
  authorityEvidenceId: string | undefined;
  claimedAuthorityLevel: string | undefined;
};

/**
 * CheckExecutionAuthorization — gate for T-A5 StartExecution.
 * NEVER mutates. NEVER executes. Deny-by-default on action/target/scope.
 *
 * Requires: execute-ready status (confirmed, or validated+N1 with
 * EXECUTION_CONFIRMATION_EVALUATED:NOT_REQUIRED and no EFFECT_CONFIRMATION_REQUIRED),
 * not cancelled/superseded, not T-A5 status, decisions still accepted+current,
 * Critical ack if applicable, authority OK.
 */
export class CheckExecutionAuthorization {
  constructor(
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly authority: AuthorityResolverPort,
    private readonly decisionServices: DecisionServices,
    private readonly cycleServices: CycleServices | undefined,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAuditPort,
  ) {}

  async execute(
    request: CheckExecutionAuthorizationRequest,
  ): Promise<CheckAuthorizationResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createExecutionError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createExecutionError>[0]>,
    ): CheckAuthorizationResult => {
      const durationMs = Date.now() - started;
      const error = createExecutionError({
        detailCode,
        timestamp,
        correlationId,
        executionContractId: request.executionContractId,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.execution_contract.authorization_checked",
        ts: timestamp,
        correlationId,
        projectId: extra?.projectId ?? "prj:unknown",
        executionContractId: request.executionContractId,
        authorized: false,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, authorized: false, error, durationMs };
    };

    try {
      if (!request.actor?.actorId) {
        return fail("CONTRACT_INVALID", "actor_required");
      }

      const snap: CheckSnapshot = {
        executionContractId: request.executionContractId,
        action: request.action,
        target: request.target,
        scope: request.scope,
        actor: structuredClone(request.actor),
        authorityEvidenceId: request.authorityEvidenceId,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
      };
      void snap.claimedAuthorityLevel;

      const contract = await this.contracts.findById(snap.executionContractId);
      if (!contract) {
        return fail("CONTRACT_NOT_FOUND", "missing_contract");
      }
      if (isTa5Status(contract.status)) {
        return fail("TA5_STATUS_REFUSED", `ta5_status_${contract.status}`, {
          projectId: contract.projectId,
        });
      }
      if (contract.status === "cancelled" || contract.status === "superseded") {
        return fail("STATE_CONFLICT", `status_${contract.status}`, {
          projectId: contract.projectId,
        });
      }
      if (hasConfirmationConstraintContradiction(contract.constraints)) {
        return fail(
          "CONTRACT_INVALID",
          "confirmation_constraint_contradiction",
          { projectId: contract.projectId },
        );
      }
      if (!isExecutionReadyStatus(contract)) {
        return fail("STATE_CONFLICT", `not_confirmed_${contract.status}`, {
          projectId: contract.projectId,
        });
      }

      // Current = no successor has superseded this contract.
      const successors = await this.contracts.listSuperseding(
        contract.executionContractId,
      );
      if (successors.length > 0) {
        return fail("STATE_CONFLICT", "not_current_has_successor", {
          projectId: contract.projectId,
        });
      }

      const matchErr = denyByDefaultMatch({
        contractAction: contract.action,
        contractTarget: contract.target,
        contractScope: contract.scope,
        requestedAction: snap.action,
        requestedTarget: snap.target,
        requestedScope: snap.scope,
      });
      if (matchErr) {
        return fail(matchErr.detailCode, matchErr.reason, {
          projectId: contract.projectId,
        });
      }

      if (contract.cycleInstanceId) {
        if (!this.cycleServices) {
          return fail("CYCLE_NOT_FOUND", "cycle_services_unavailable", {
            projectId: contract.projectId,
          });
        }
        const cycleResult = await this.cycleServices.getCycle.execute({
          cycleInstanceId: contract.cycleInstanceId,
        });
        if (!cycleResult.ok) {
          return fail("CYCLE_NOT_FOUND", "missing_cycle", {
            projectId: contract.projectId,
          });
        }
        if (
          cycleResult.cycle.profile === "Critical" &&
          cycleResult.cycle.status === "proposed"
        ) {
          return fail(
            "CRITICAL_NOT_ACKNOWLEDGED",
            "critical_proposed_no_public_ack",
            { projectId: contract.projectId },
          );
        }
      }

      const decisionRefs = contract.decisionRefs ?? [];
      for (const decisionId of decisionRefs) {
        const decisionResult =
          await this.decisionServices.getHumanDecision.execute({
            decisionId,
            correlationId,
          });
        if (!decisionResult.ok) {
          return fail("DECISION_NOT_FOUND", "missing_decision", {
            projectId: contract.projectId,
          });
        }
        if (decisionResult.decision.projectId !== contract.projectId) {
          return fail("DECISION_REQUIRED", "decision_project_mismatch", {
            projectId: contract.projectId,
          });
        }
        if (decisionResult.decision.status !== "accepted") {
          return fail(
            "DECISION_NOT_CURRENT",
            `decision_status_${decisionResult.decision.status}`,
            { projectId: contract.projectId },
          );
        }
      }

      const authEvidence = snap.authorityEvidenceId
        ? this.authority.getEvidence(snap.authorityEvidenceId)
        : null;
      const verifyScope = resolveExecutionAuthorityVerifyScope({
        contractScope: contract.scope,
        evidence: authEvidence,
        contractSemantic: contract,
      });

      const verification = verifyRequiredAuthority(this.authority, {
        requiredAuthority: contract.requiredAuthority,
        actorId: snap.actor.actorId,
        scope: verifyScope,
        evidenceId: snap.authorityEvidenceId,
        claimedAuthorityLevel: snap.claimedAuthorityLevel,
        displayName: snap.actor.displayName,
      });
      this.audit.append({
        event: "oa.authority.verified",
        ts: timestamp,
        correlationId,
        actorId: snap.actor.actorId,
        requiredLevel:
          contract.requiredAuthority === "MORRIS"
            ? "N3"
            : contract.requiredAuthority,
        scope: verifyScope,
        ok: verification.ok,
        verifiedLevel: verification.verifiedLevel,
        reason: verification.reason,
        canActAsMorris: verification.canActAsMorris,
        durationMs: Date.now() - started,
      });
      if (!verification.ok) {
        return fail(
          verification.reason === "scope_mismatch"
            ? "AUTHORITY_SCOPE_MISMATCH"
            : "AUTHORITY_DENIED",
          verification.reason,
          { projectId: contract.projectId },
        );
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_contract.authorization_checked",
        ts: timestamp,
        correlationId,
        projectId: contract.projectId,
        executionContractId: contract.executionContractId,
        authorized: true,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        authorized: true,
        contract: structuredClone(contract),
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/application/validateExecutionContract.ts`

```typescript
import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { AuthorityResolverPort } from "@/lib/oa/decision";
import { createExecutionError } from "../domain/errors";
import {
  hasConfirmationConstraintContradiction,
  isTa5Status,
} from "../domain/invariants";
import type {
  ActorReference,
  ExecutionContract,
  ExecutionContractResult,
  ValidateExecutionContractRequest,
} from "../domain/types";
import type { ExecutionContractPersistenceUnitOfWorkPort } from "../ports/executionContractPersistenceUnitOfWorkPort";
import type { ExecutionAuditPort } from "../ports/executionAudit";
import type { ExecutionContractRepositoryPort } from "../ports/executionContractRepository";
import {
  resolveExecutionAuthorityVerifyScope,
  verifyRequiredAuthority,
} from "./authorityHelper";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

type ValidateSnapshot = {
  executionContractId: string;
  actor: ActorReference;
  authorityEvidenceId: string | undefined;
  expectedVersion: number | undefined;
  claimedAuthorityLevel: string | undefined;
};

/**
 * ValidateExecutionContract — draft|proposed → validated | confirmation_required.
 * Does NOT consume Confirmation.
 * Does NOT produce confirmed or T-A5 statuses.
 *
 * Status derivation:
 * - EFFECT_CONFIRMATION_REQUIRED constraint → confirmation_required
 *   (effect-driven Confirmation, independent of requiredAuthority)
 * - else N1 → validated
 * - else N2|N3|MORRIS → confirmation_required
 */
export class ValidateExecutionContract {
  constructor(
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly authority: AuthorityResolverPort,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAuditPort,
    private readonly store?: ExecutionContractPersistenceUnitOfWorkPort,
  ) {}

  async execute(
    request: ValidateExecutionContractRequest,
  ): Promise<ExecutionContractResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createExecutionError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createExecutionError>[0]>,
    ): ExecutionContractResult => {
      const durationMs = Date.now() - started;
      const error = createExecutionError({
        detailCode,
        timestamp,
        correlationId,
        executionContractId: request.executionContractId,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.execution_contract.validated",
        ts: timestamp,
        correlationId,
        projectId: extra?.projectId ?? "prj:unknown",
        executionContractId: request.executionContractId,
        status: "unknown",
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      if (!request.actor?.actorId) {
        return fail("CONTRACT_INVALID", "actor_required");
      }

      const snap: ValidateSnapshot = {
        executionContractId: request.executionContractId,
        actor: structuredClone(request.actor),
        authorityEvidenceId: request.authorityEvidenceId,
        expectedVersion: request.expectedVersion,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
      };
      void snap.claimedAuthorityLevel;

      const existing = await this.contracts.findById(snap.executionContractId);
      if (!existing) {
        return fail("CONTRACT_NOT_FOUND", "missing_contract");
      }
      if (isTa5Status(existing.status)) {
        return fail("TA5_STATUS_REFUSED", `ta5_status_${existing.status}`, {
          projectId: existing.projectId,
        });
      }
      if (existing.status !== "draft" && existing.status !== "proposed") {
        return fail(
          "STATE_CONFLICT",
          `status_${existing.status}`,
          { projectId: existing.projectId },
        );
      }
      if (
        snap.expectedVersion !== undefined &&
        snap.expectedVersion !== existing.version
      ) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          projectId: existing.projectId,
          expectedVersion: snap.expectedVersion,
          currentVersion: existing.version,
        });
      }
      if (hasConfirmationConstraintContradiction(existing.constraints)) {
        return fail(
          "CONTRACT_INVALID",
          "confirmation_constraint_contradiction",
          { projectId: existing.projectId },
        );
      }

      const authEvidence = snap.authorityEvidenceId
        ? this.authority.getEvidence(snap.authorityEvidenceId)
        : null;
      const verifyScope = resolveExecutionAuthorityVerifyScope({
        contractScope: existing.scope,
        evidence: authEvidence,
        contractSemantic: existing,
      });
      const verification = verifyRequiredAuthority(this.authority, {
        requiredAuthority: existing.requiredAuthority,
        actorId: snap.actor.actorId,
        scope: verifyScope,
        evidenceId: snap.authorityEvidenceId,
        claimedAuthorityLevel: snap.claimedAuthorityLevel,
        displayName: snap.actor.displayName,
      });
      this.audit.append({
        event: "oa.authority.verified",
        ts: timestamp,
        correlationId,
        actorId: snap.actor.actorId,
        requiredLevel:
          existing.requiredAuthority === "MORRIS"
            ? "N3"
            : existing.requiredAuthority,
        scope: existing.scope,
        ok: verification.ok,
        verifiedLevel: verification.verifiedLevel,
        reason: verification.reason,
        canActAsMorris: verification.canActAsMorris,
        durationMs: Date.now() - started,
      });
      if (!verification.ok) {
        return fail(
          verification.reason === "scope_mismatch"
            ? "AUTHORITY_SCOPE_MISMATCH"
            : "AUTHORITY_DENIED",
          verification.reason,
          { projectId: existing.projectId },
        );
      }

      const nextStatus =
        existing.constraints.some((c) =>
          c.startsWith("EFFECT_CONFIRMATION_REQUIRED"),
        )
          ? "confirmation_required"
          : existing.requiredAuthority === "N1"
            ? "validated"
            : "confirmation_required";

      let contract: ExecutionContract | undefined;

      const persist = async () => {
        const current = await this.contracts.findById(snap.executionContractId);
        if (!current) {
          throw Object.assign(new Error("missing"), {
            detailCode: "CONTRACT_NOT_FOUND" as const,
          });
        }
        if (current.status !== "draft" && current.status !== "proposed") {
          throw Object.assign(new Error("status"), {
            detailCode: "STATE_CONFLICT" as const,
          });
        }
        if (
          snap.expectedVersion !== undefined &&
          snap.expectedVersion !== current.version
        ) {
          throw Object.assign(new Error("occ"), {
            detailCode: "VERSION_CONFLICT" as const,
            expectedVersion: snap.expectedVersion,
            currentVersion: current.version,
          });
        }
        const next: ExecutionContract = {
          ...current,
          status: nextStatus,
          version: current.version + 1,
        };
        await this.contracts.save(next);
        contract = next;
      };

      try {
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch (err) {
        if (err && typeof err === "object" && "detailCode" in err) {
          const e = err as {
            detailCode: Parameters<typeof createExecutionError>[0]["detailCode"];
            expectedVersion?: number;
            currentVersion?: number;
          };
          return fail(e.detailCode, "race", {
            projectId: existing.projectId,
            expectedVersion: e.expectedVersion,
            currentVersion: e.currentVersion,
          });
        }
        return fail("PERSISTENCE_FAILURE", "atomic_validate_failed", {
          projectId: existing.projectId,
        });
      }

      if (!contract) {
        return fail("PERSISTENCE_FAILURE", "atomic_validate_incomplete", {
          projectId: existing.projectId,
        });
      }

      const durationMs = Date.now() - started;
      const eventName =
        contract.status === "confirmation_required"
          ? "oa.execution_contract.confirmation_required"
          : "oa.execution_contract.validated";
      this.audit.append({
        event: eventName,
        ts: timestamp,
        correlationId,
        projectId: contract.projectId,
        executionContractId: contract.executionContractId,
        status: contract.status,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        contract: structuredClone(contract),
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts`

```typescript
import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { CycleServices } from "@/lib/oa/cycle";
import type {
  AuthorityResolverPort,
  DecisionServices,
} from "@/lib/oa/decision";
import { createExecutionError } from "../domain/errors";
import {
  assertConfirmationBinding,
  hasConfirmationConstraintContradiction,
  isTa5Status,
} from "../domain/invariants";
import type {
  ActorReference,
  ConfirmExecutionContractRequest,
  ExecutionContract,
  ExecutionContractResult,
} from "../domain/types";
import type { ExecutionContractPersistenceUnitOfWorkPort } from "../ports/executionContractPersistenceUnitOfWorkPort";
import type { ExecutionAuditPort } from "../ports/executionAudit";
import type { ExecutionContractRepositoryPort } from "../ports/executionContractRepository";
import type { CancelExecutionContract } from "./cancelExecutionContract";
import {
  resolveExecutionAuthorityVerifyScope,
  verifyRequiredAuthority,
} from "./authorityHelper";
import { computeExecutionContractSemanticFingerprint } from "../domain/semanticFingerprint";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

type ConfirmSnapshot = {
  executionContractId: string;
  confirmationId: string;
  actor: ActorReference;
  authorityEvidenceId: string | undefined;
  expectedVersion: number | undefined;
  claimedAuthorityLevel: string | undefined;
  nowIso: string | undefined;
};

/**
 * ConfirmExecutionContract — validated|confirmation_required → confirmed.
 *
 * Option B (R-T-A3-2 harden): persist confirmed with confirmationRef FIRST,
 * then consume Confirmation via DecisionServices.consumeConfirmation.
 * If consume fails, compensate by CancelExecutionContract on the just-
 * confirmed row. confirmationId is known before consume (request field).
 *
 * Residual R-T-A3-2 OPEN: if consume fails AND compensate cancel also fails,
 * contract may remain confirmed with an unconsumed confirmationRef.
 *
 * Critical fail-closed (R-T-A3-1 OPEN): if linked cycle is Critical and still
 * `proposed` (no public AcknowledgeCriticalCycle API), Confirm fails.
 */
export class ConfirmExecutionContract {
  constructor(
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly authority: AuthorityResolverPort,
    private readonly decisionServices: DecisionServices,
    private readonly cycleServices: CycleServices | undefined,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAuditPort,
    private readonly store?: ExecutionContractPersistenceUnitOfWorkPort,
    private readonly cancelExecutionContract?: CancelExecutionContract,
  ) {}

  async execute(
    request: ConfirmExecutionContractRequest,
  ): Promise<ExecutionContractResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createExecutionError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createExecutionError>[0]>,
    ): ExecutionContractResult => {
      const durationMs = Date.now() - started;
      const error = createExecutionError({
        detailCode,
        timestamp,
        correlationId,
        executionContractId: request.executionContractId,
        confirmationId: request.confirmationId,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.execution_contract.confirmed",
        ts: timestamp,
        correlationId,
        projectId: extra?.projectId ?? "prj:unknown",
        executionContractId: request.executionContractId,
        confirmationId: request.confirmationId,
        status: "unknown",
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      if (!request.actor?.actorId) {
        return fail("CONTRACT_INVALID", "actor_required");
      }

      const snap: ConfirmSnapshot = {
        executionContractId: request.executionContractId,
        confirmationId: request.confirmationId,
        actor: structuredClone(request.actor),
        authorityEvidenceId: request.authorityEvidenceId,
        expectedVersion: request.expectedVersion,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
        nowIso: request.nowIso,
      };
      void snap.claimedAuthorityLevel;

      const existing = await this.contracts.findById(snap.executionContractId);
      if (!existing) {
        return fail("CONTRACT_NOT_FOUND", "missing_contract");
      }
      if (isTa5Status(existing.status)) {
        return fail("TA5_STATUS_REFUSED", `ta5_status_${existing.status}`, {
          projectId: existing.projectId,
        });
      }
      if (
        existing.status !== "validated" &&
        existing.status !== "confirmation_required"
      ) {
        return fail("STATE_CONFLICT", `status_${existing.status}`, {
          projectId: existing.projectId,
        });
      }
      if (
        snap.expectedVersion !== undefined &&
        snap.expectedVersion !== existing.version
      ) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          projectId: existing.projectId,
          expectedVersion: snap.expectedVersion,
          currentVersion: existing.version,
        });
      }
      if (hasConfirmationConstraintContradiction(existing.constraints)) {
        return fail(
          "CONTRACT_INVALID",
          "confirmation_constraint_contradiction",
          { projectId: existing.projectId },
        );
      }

      // Critical fail-closed — R-T-A3-1: no public ack API on Cycle.
      if (existing.cycleInstanceId) {
        if (!this.cycleServices) {
          return fail("CYCLE_NOT_FOUND", "cycle_services_unavailable", {
            projectId: existing.projectId,
          });
        }
        const cycleResult = await this.cycleServices.getCycle.execute({
          cycleInstanceId: existing.cycleInstanceId,
        });
        if (!cycleResult.ok) {
          return fail("CYCLE_NOT_FOUND", "missing_cycle", {
            projectId: existing.projectId,
          });
        }
        const cycle = cycleResult.cycle;
        if (cycle.projectId !== existing.projectId) {
          return fail("CYCLE_PROJECT_MISMATCH", "cycle_project_mismatch", {
            projectId: existing.projectId,
          });
        }
        if (cycle.profile === "Critical" && cycle.status === "proposed") {
          return fail(
            "CRITICAL_NOT_ACKNOWLEDGED",
            "critical_proposed_no_public_ack",
            { projectId: existing.projectId },
          );
        }
      }

      // Decision freshness: accepted + same project + not superseded.
      const decisionRefs = existing.decisionRefs ?? [];
      for (const decisionId of decisionRefs) {
        const decisionResult =
          await this.decisionServices.getHumanDecision.execute({
            decisionId,
            correlationId,
          });
        if (!decisionResult.ok) {
          return fail("DECISION_NOT_FOUND", "missing_decision", {
            projectId: existing.projectId,
          });
        }
        const d = decisionResult.decision;
        if (d.projectId !== existing.projectId) {
          return fail("DECISION_REQUIRED", "decision_project_mismatch", {
            projectId: existing.projectId,
          });
        }
        if (d.status !== "accepted") {
          return fail("DECISION_NOT_CURRENT", `decision_status_${d.status}`, {
            projectId: existing.projectId,
          });
        }
      }

      // Pre-check confirmation via public repository port (no mutate yet).
      const confirmation =
        await this.decisionServices.confirmations.findById(
          snap.confirmationId,
        );
      if (!confirmation) {
        return fail("CONFIRMATION_NOT_FOUND", "missing_confirmation", {
          projectId: existing.projectId,
        });
      }
      if (confirmation.status === "consumed") {
        return fail(
          "CONFIRMATION_ALREADY_CONSUMED",
          "already_consumed",
          { projectId: existing.projectId },
        );
      }
      if (confirmation.status !== "granted") {
        return fail("CONFIRMATION_REQUIRED", `status_${confirmation.status}`, {
          projectId: existing.projectId,
        });
      }

      const binding = assertConfirmationBinding({
        confirmationScope: confirmation.scope,
        confirmationLevel: confirmation.level,
        confirmationDecisionRef: confirmation.decisionRef,
        contractScope: existing.scope,
        requiredAuthority: existing.requiredAuthority,
        contractDecisionRefs: decisionRefs,
      });
      if (binding) {
        return fail(binding.detailCode, binding.reason, {
          projectId: existing.projectId,
        });
      }

      const authEvidence = snap.authorityEvidenceId
        ? this.authority.getEvidence(snap.authorityEvidenceId)
        : null;
      const verifyScope = resolveExecutionAuthorityVerifyScope({
        contractScope: existing.scope,
        evidence: authEvidence,
        contractSemantic: existing,
      });
      const verification = verifyRequiredAuthority(this.authority, {
        requiredAuthority: existing.requiredAuthority,
        actorId: snap.actor.actorId,
        scope: verifyScope,
        evidenceId: snap.authorityEvidenceId,
        claimedAuthorityLevel: snap.claimedAuthorityLevel,
        displayName: snap.actor.displayName,
      });
      this.audit.append({
        event: "oa.authority.verified",
        ts: timestamp,
        correlationId,
        actorId: snap.actor.actorId,
        requiredLevel:
          existing.requiredAuthority === "MORRIS"
            ? "N3"
            : existing.requiredAuthority,
        scope: existing.scope,
        ok: verification.ok,
        verifiedLevel: verification.verifiedLevel,
        reason: verification.reason,
        canActAsMorris: verification.canActAsMorris,
        durationMs: Date.now() - started,
      });
      if (!verification.ok) {
        return fail(
          verification.reason === "scope_mismatch"
            ? "AUTHORITY_SCOPE_MISMATCH"
            : "AUTHORITY_DENIED",
          verification.reason,
          { projectId: existing.projectId },
        );
      }

      // Option B: persist confirmed WITH confirmationRef BEFORE consume.
      let contract: ExecutionContract | undefined;
      const persist = async () => {
        const current = await this.contracts.findById(snap.executionContractId);
        if (!current) {
          throw Object.assign(new Error("missing"), {
            detailCode: "CONTRACT_NOT_FOUND" as const,
          });
        }
        if (
          current.status !== "validated" &&
          current.status !== "confirmation_required"
        ) {
          throw Object.assign(new Error("status"), {
            detailCode: "STATE_CONFLICT" as const,
          });
        }
        if (
          snap.expectedVersion !== undefined &&
          snap.expectedVersion !== current.version
        ) {
          throw Object.assign(new Error("occ"), {
            detailCode: "VERSION_CONFLICT" as const,
            expectedVersion: snap.expectedVersion,
            currentVersion: current.version,
          });
        }
        const next: ExecutionContract = {
          ...current,
          status: "confirmed",
          confirmationRef: snap.confirmationId,
          immutableAfterConfirm: true,
          version: current.version + 1,
        };
        // confirmationRef / immutableAfterConfirm are semantic material fields —
        // refresh fingerprint so Attempt-bound Option B capture can verify.
        next.semanticFingerprint =
          computeExecutionContractSemanticFingerprint(next);
        await this.contracts.save(next);
        contract = next;
      };

      try {
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch (err) {
        // Persist failed before consume — confirmation remains granted.
        if (err && typeof err === "object" && "detailCode" in err) {
          const e = err as {
            detailCode: Parameters<typeof createExecutionError>[0]["detailCode"];
            expectedVersion?: number;
            currentVersion?: number;
          };
          return fail(e.detailCode, "pre_consume_persist_race", {
            projectId: existing.projectId,
            expectedVersion: e.expectedVersion,
            currentVersion: e.currentVersion,
          });
        }
        return fail("PERSISTENCE_FAILURE", "pre_consume_persist_failed", {
          projectId: existing.projectId,
        });
      }

      if (!contract) {
        return fail("PERSISTENCE_FAILURE", "pre_consume_incomplete", {
          projectId: existing.projectId,
        });
      }

      // Consume confirmation via public T-A3 use-case (decision store txn).
      const consumeResult =
        await this.decisionServices.consumeConfirmation.execute({
          confirmationId: snap.confirmationId,
          actor: snap.actor,
          correlationId,
          nowIso: snap.nowIso ?? timestamp,
        });
      if (!consumeResult.ok) {
        // Compensate: cancel the just-confirmed contract (Option B).
        let compensated = false;
        if (this.cancelExecutionContract) {
          const cancelResult = await this.cancelExecutionContract.execute({
            executionContractId: snap.executionContractId,
            reason:
              "Compensate confirm after confirmation consume failure (R-T-A3-2 Option B)",
            actor: snap.actor,
            authorityEvidenceId: snap.authorityEvidenceId,
            correlationId,
            claimedAuthorityLevel: snap.claimedAuthorityLevel,
          });
          compensated = cancelResult.ok;
        }
        const mapped =
          consumeResult.error.detailCode === "CONFIRMATION_EXPIRED"
            ? "CONFIRMATION_EXPIRED"
            : consumeResult.error.detailCode === "CONFIRMATION_ALREADY_CONSUMED"
              ? "CONFIRMATION_ALREADY_CONSUMED"
              : consumeResult.error.detailCode === "CONFIRMATION_NOT_FOUND"
                ? "CONFIRMATION_NOT_FOUND"
                : "CONFIRMATION_CONSUME_FAILED";
        if (!compensated) {
          // Residual R-T-A3-2: confirmed row may remain with unconsumed cfm.
          return fail(
            "PERSISTENCE_FAILURE",
            `post_persist_consume_failed_compensate_failed:${consumeResult.error.detailCode}`,
            { projectId: existing.projectId },
          );
        }
        return fail(mapped, `post_persist_consume_compensated`, {
          projectId: existing.projectId,
        });
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_contract.confirmed",
        ts: timestamp,
        correlationId,
        projectId: contract.projectId,
        executionContractId: contract.executionContractId,
        confirmationId: snap.confirmationId,
        status: contract.status,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        contract: structuredClone(contract),
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/application/cancelExecutionContract.ts`

```typescript
import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { AuthorityResolverPort } from "@/lib/oa/decision";
import { createExecutionError } from "../domain/errors";
import {
  isTa5Status,
  isValidSupersessionReason,
  PRE_EXEC_CANCEL_STATUSES,
} from "../domain/invariants";
import type {
  ActorReference,
  CancelExecutionContractRequest,
  ExecutionContract,
  ExecutionContractResult,
} from "../domain/types";
import type { ExecutionContractPersistenceUnitOfWorkPort } from "../ports/executionContractPersistenceUnitOfWorkPort";
import type { ExecutionAuditPort } from "../ports/executionAudit";
import type { ExecutionContractRepositoryPort } from "../ports/executionContractRepository";
import {
  resolveExecutionAuthorityVerifyScope,
  verifyRequiredAuthority,
} from "./authorityHelper";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

type CancelSnapshot = {
  executionContractId: string;
  reason: string;
  actor: ActorReference;
  authorityEvidenceId: string | undefined;
  expectedVersion: number | undefined;
  claimedAuthorityLevel: string | undefined;
};

/**
 * CancelExecutionContract — maps to catalog CancelExecution (pre-exec).
 * Only pre-exec statuses (draft|proposed|validated|confirmation_required|confirmed).
 * Reason required (non-whitespace). Does NOT cancel post-start / T-A5 path.
 */
export class CancelExecutionContract {
  constructor(
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly authority: AuthorityResolverPort,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAuditPort,
    private readonly store?: ExecutionContractPersistenceUnitOfWorkPort,
  ) {}

  async execute(
    request: CancelExecutionContractRequest,
  ): Promise<ExecutionContractResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createExecutionError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createExecutionError>[0]>,
    ): ExecutionContractResult => {
      const durationMs = Date.now() - started;
      const error = createExecutionError({
        detailCode,
        timestamp,
        correlationId,
        executionContractId: request.executionContractId,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.execution_contract.cancelled",
        ts: timestamp,
        correlationId,
        projectId: extra?.projectId ?? "prj:unknown",
        executionContractId: request.executionContractId,
        status: "unknown",
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      if (!request.actor?.actorId) {
        return fail("CONTRACT_INVALID", "actor_required");
      }
      if (!isValidSupersessionReason(request.reason)) {
        return fail("CONTRACT_INVALID", "cancel_reason_required");
      }

      const snap: CancelSnapshot = {
        executionContractId: request.executionContractId,
        reason: request.reason,
        actor: structuredClone(request.actor),
        authorityEvidenceId: request.authorityEvidenceId,
        expectedVersion: request.expectedVersion,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
      };
      void snap.claimedAuthorityLevel;
      void snap.reason;

      const existing = await this.contracts.findById(snap.executionContractId);
      if (!existing) {
        return fail("CONTRACT_NOT_FOUND", "missing_contract");
      }
      if (isTa5Status(existing.status)) {
        return fail("TA5_STATUS_REFUSED", `ta5_post_start_${existing.status}`, {
          projectId: existing.projectId,
        });
      }
      if (!PRE_EXEC_CANCEL_STATUSES.has(existing.status)) {
        return fail("STATE_CONFLICT", `status_${existing.status}`, {
          projectId: existing.projectId,
        });
      }
      if (
        snap.expectedVersion !== undefined &&
        snap.expectedVersion !== existing.version
      ) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          projectId: existing.projectId,
          expectedVersion: snap.expectedVersion,
          currentVersion: existing.version,
        });
      }

      const authEvidence = snap.authorityEvidenceId
        ? this.authority.getEvidence(snap.authorityEvidenceId)
        : null;
      const verifyScope = resolveExecutionAuthorityVerifyScope({
        contractScope: existing.scope,
        evidence: authEvidence,
        contractSemantic: existing,
      });
      const verification = verifyRequiredAuthority(this.authority, {
        requiredAuthority: existing.requiredAuthority,
        actorId: snap.actor.actorId,
        scope: verifyScope,
        evidenceId: snap.authorityEvidenceId,
        claimedAuthorityLevel: snap.claimedAuthorityLevel,
        displayName: snap.actor.displayName,
      });
      this.audit.append({
        event: "oa.authority.verified",
        ts: timestamp,
        correlationId,
        actorId: snap.actor.actorId,
        requiredLevel:
          existing.requiredAuthority === "MORRIS"
            ? "N3"
            : existing.requiredAuthority,
        scope: existing.scope,
        ok: verification.ok,
        verifiedLevel: verification.verifiedLevel,
        reason: verification.reason,
        canActAsMorris: verification.canActAsMorris,
        durationMs: Date.now() - started,
      });
      if (!verification.ok) {
        return fail(
          verification.reason === "scope_mismatch"
            ? "AUTHORITY_SCOPE_MISMATCH"
            : "AUTHORITY_DENIED",
          verification.reason,
          { projectId: existing.projectId },
        );
      }

      let contract: ExecutionContract | undefined;

      const persist = async () => {
        const current = await this.contracts.findById(snap.executionContractId);
        if (!current) {
          throw Object.assign(new Error("missing"), {
            detailCode: "CONTRACT_NOT_FOUND" as const,
          });
        }
        if (isTa5Status(current.status)) {
          throw Object.assign(new Error("ta5"), {
            detailCode: "TA5_STATUS_REFUSED" as const,
          });
        }
        if (!PRE_EXEC_CANCEL_STATUSES.has(current.status)) {
          throw Object.assign(new Error("status"), {
            detailCode: "STATE_CONFLICT" as const,
          });
        }
        if (
          snap.expectedVersion !== undefined &&
          snap.expectedVersion !== current.version
        ) {
          throw Object.assign(new Error("occ"), {
            detailCode: "VERSION_CONFLICT" as const,
            expectedVersion: snap.expectedVersion,
            currentVersion: current.version,
          });
        }
        const next: ExecutionContract = {
          ...current,
          status: "cancelled",
          supersessionReason: snap.reason,
          version: current.version + 1,
        };
        await this.contracts.save(next);
        contract = next;
      };

      try {
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch (err) {
        if (err && typeof err === "object" && "detailCode" in err) {
          const e = err as {
            detailCode: Parameters<typeof createExecutionError>[0]["detailCode"];
            expectedVersion?: number;
            currentVersion?: number;
          };
          return fail(e.detailCode, "race", {
            projectId: existing.projectId,
            expectedVersion: e.expectedVersion,
            currentVersion: e.currentVersion,
          });
        }
        return fail("PERSISTENCE_FAILURE", "atomic_cancel_failed", {
          projectId: existing.projectId,
        });
      }

      if (!contract) {
        return fail("PERSISTENCE_FAILURE", "atomic_cancel_incomplete", {
          projectId: existing.projectId,
        });
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_contract.cancelled",
        ts: timestamp,
        correlationId,
        projectId: contract.projectId,
        executionContractId: contract.executionContractId,
        status: contract.status,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        contract: structuredClone(contract),
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/application/supersedeExecutionContract.ts`

```typescript
import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { AuthorityResolverPort } from "@/lib/oa/decision";
import { createExecutionError } from "../domain/errors";
import {
  assertNoSelfSupersession,
  assertNotTa5Injection,
  assertPrefixedId,
  cloneContractArrays,
  EXECUTION_CONTRACT_SCHEMA_VERSION,
  isTa5Status,
  isValidSupersessionReason,
  validateBuildFields,
} from "../domain/invariants";
import { computeExecutionContractSemanticFingerprint } from "../domain/semanticFingerprint";
import type {
  ActorReference,
  AuthorityClass,
  ExecutionContract,
  ExecutionContractResult,
  Reversibility,
  SupersedeExecutionContractRequest,
} from "../domain/types";
import type { ExecutionContractPersistenceUnitOfWorkPort } from "../ports/executionContractPersistenceUnitOfWorkPort";
import type { ExecutionAuditPort } from "../ports/executionAudit";
import type { ExecutionContractRepositoryPort } from "../ports/executionContractRepository";
import {
  resolveExecutionAuthorityVerifyScope,
  verifyRequiredAuthority,
} from "./authorityHelper";

function newId(prefix: "cor" | "prv"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

type SupersedeSnapshot = {
  newExecutionContractId: string;
  supersedesExecutionContractId: string;
  supersessionReason: string;
  actor: ActorReference;
  authorityEvidenceId: string | undefined;
  expectedVersion: number | undefined;
  claimedAuthorityLevel: string | undefined;
  action: string | undefined;
  target: string | undefined;
  scope: string | undefined;
  requiredAuthority: AuthorityClass | undefined;
  reversibility: Reversibility | undefined;
  executionWindowClass: SupersedeExecutionContractRequest["executionWindowClass"];
  idempotencyKey: string | undefined;
  adapterExportRef: string | undefined;
  status: "draft" | "proposed";
  selectedAgentRef: string | undefined;
};

/**
 * SupersedeExecutionContract — new id + supersedesExecutionContractId + reason.
 * Old → superseded immutable; successor becomes the current in the lineage.
 * Self-supersession rejected. Concurrent OCC via expectedVersion.
 * Reverse superseded-by is derived at read time (listSuperseding).
 * Successor initial status must be draft|proposed; T-A5 injection refused.
 */
export class SupersedeExecutionContract {
  constructor(
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly authority: AuthorityResolverPort,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAuditPort,
    private readonly store?: ExecutionContractPersistenceUnitOfWorkPort,
  ) {}

  async execute(
    request: SupersedeExecutionContractRequest,
  ): Promise<ExecutionContractResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createExecutionError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createExecutionError>[0]>,
    ): ExecutionContractResult => {
      const durationMs = Date.now() - started;
      const error = createExecutionError({
        detailCode,
        timestamp,
        correlationId,
        executionContractId: request.newExecutionContractId,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.execution_contract.superseded",
        ts: timestamp,
        correlationId,
        projectId: extra?.projectId ?? "prj:unknown",
        executionContractId: request.newExecutionContractId,
        supersedesExecutionContractId: request.supersedesExecutionContractId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      if (!request.actor?.actorId) {
        return fail("CONTRACT_INVALID", "actor_required");
      }
      if (!isValidSupersessionReason(request.supersessionReason)) {
        return fail("SUPERSESSION_REASON_INVALID", "whitespace_zwsp_or_empty");
      }

      const ta5 = assertNotTa5Injection({
        status: request.status,
        selectedAgentRef: request.selectedAgentRef,
      });
      if (ta5) {
        return fail(ta5.detailCode, ta5.reason);
      }

      const selfErr = assertNoSelfSupersession(
        request.newExecutionContractId,
        request.supersedesExecutionContractId,
      );
      if (selfErr) {
        return fail(selfErr.detailCode, selfErr.reason);
      }

      const newIdErr = assertPrefixedId(
        request.newExecutionContractId,
        "xct:",
      );
      if (newIdErr) {
        return fail(newIdErr.detailCode, newIdErr.reason);
      }
      const oldIdErr = assertPrefixedId(
        request.supersedesExecutionContractId,
        "xct:",
      );
      if (oldIdErr) {
        return fail(oldIdErr.detailCode, oldIdErr.reason);
      }

      const initialStatus = request.status ?? "draft";
      if (initialStatus !== "draft" && initialStatus !== "proposed") {
        return fail("CONTRACT_INVALID", "supersede_status_invalid");
      }

      const cloned = cloneContractArrays({
        decisionRefs: request.decisionRefs,
        requiredCapabilities: request.requiredCapabilities,
        constraints: request.constraints,
        stopConditions: request.stopConditions,
        evidenceRequirements: request.evidenceRequirements,
        expectedOutputs: request.expectedOutputs,
        inputs: request.inputs,
      });

      const snap: SupersedeSnapshot = {
        newExecutionContractId: request.newExecutionContractId,
        supersedesExecutionContractId: request.supersedesExecutionContractId,
        supersessionReason: request.supersessionReason,
        actor: structuredClone(request.actor),
        authorityEvidenceId: request.authorityEvidenceId,
        expectedVersion: request.expectedVersion,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
        action: request.action,
        target: request.target,
        scope: request.scope,
        requiredAuthority: request.requiredAuthority,
        reversibility: request.reversibility,
        executionWindowClass: request.executionWindowClass,
        idempotencyKey: request.idempotencyKey,
        adapterExportRef: request.adapterExportRef,
        status: initialStatus,
        selectedAgentRef: undefined,
      };
      void snap.claimedAuthorityLevel;
      void snap.selectedAgentRef;

      const prior = await this.contracts.findById(
        snap.supersedesExecutionContractId,
      );
      if (!prior) {
        return fail("CONTRACT_NOT_FOUND", "missing_prior");
      }
      if (isTa5Status(prior.status)) {
        return fail("TA5_STATUS_REFUSED", `ta5_status_${prior.status}`, {
          projectId: prior.projectId,
        });
      }
      if (prior.status === "superseded" || prior.status === "cancelled") {
        return fail("STATE_CONFLICT", `prior_status_${prior.status}`, {
          projectId: prior.projectId,
        });
      }
      if (
        snap.expectedVersion !== undefined &&
        snap.expectedVersion !== prior.version
      ) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          projectId: prior.projectId,
          expectedVersion: snap.expectedVersion,
          currentVersion: prior.version,
        });
      }

      const existingNew = await this.contracts.findById(
        snap.newExecutionContractId,
      );
      if (existingNew) {
        return fail("CONTRACT_ALREADY_EXISTS", "duplicate_successor", {
          projectId: prior.projectId,
        });
      }

      const requiredAuthority =
        snap.requiredAuthority ?? prior.requiredAuthority;
      const scope = snap.scope ?? prior.scope;
      const action = snap.action ?? prior.action;
      const target = snap.target ?? prior.target;
      const reversibility = snap.reversibility ?? prior.reversibility;
      const executionWindowClass =
        snap.executionWindowClass ?? prior.executionWindowClass;
      // Explicit overrides (including empty arrays) take precedence — no silent fallback.
      const decisionRefs =
        request.decisionRefs !== undefined
          ? cloned.decisionRefs
          : [...(prior.decisionRefs ?? [])];
      const requiredCapabilities =
        request.requiredCapabilities !== undefined
          ? cloned.requiredCapabilities
          : [...prior.requiredCapabilities];
      const constraints =
        request.constraints !== undefined
          ? cloned.constraints
          : [...prior.constraints];
      const stopConditions =
        request.stopConditions !== undefined
          ? cloned.stopConditions
          : [...prior.stopConditions];
      const evidenceRequirements =
        request.evidenceRequirements !== undefined
          ? cloned.evidenceRequirements
          : [...prior.evidenceRequirements];
      const idempotencyKey =
        snap.idempotencyKey ??
        `${prior.idempotencyKey}-supersede-${snap.newExecutionContractId}`;

      // Validate successor fields like Build when overrides (or merged) present.
      const fieldViolation = validateBuildFields({
        executionContractId: snap.newExecutionContractId,
        projectId: prior.projectId,
        cycleInstanceId: prior.cycleInstanceId,
        decisionRefs,
        action,
        target,
        scope,
        requiredCapabilities,
        requiredAuthority,
        constraints,
        stopConditions,
        evidenceRequirements,
        reversibility,
        executionWindowClass,
        idempotencyKey,
        correlationId,
        status: snap.status,
      });
      if (fieldViolation) {
        return fail(fieldViolation.detailCode, fieldViolation.reason, {
          projectId: prior.projectId,
        });
      }

      const authEvidence = snap.authorityEvidenceId
        ? this.authority.getEvidence(snap.authorityEvidenceId)
        : null;
      const successorSemantic = {
        executionContractId: snap.newExecutionContractId,
        projectId: prior.projectId,
        cycleInstanceId: prior.cycleInstanceId,
        decisionRefs,
        doctrinePackageRef: prior.doctrinePackageRef
          ? structuredClone(prior.doctrinePackageRef)
          : undefined,
        action,
        target,
        scope,
        inputs:
          cloned.inputs !== undefined
            ? cloned.inputs
            : prior.inputs
              ? structuredClone(prior.inputs)
              : undefined,
        expectedOutputs:
          cloned.expectedOutputs.length > 0
            ? cloned.expectedOutputs
            : prior.expectedOutputs
              ? [...prior.expectedOutputs]
              : undefined,
        requiredCapabilities,
        requiredAuthority,
        constraints,
        stopConditions,
        evidenceRequirements,
        reversibility,
        executionWindowClass,
        idempotencyKey,
        supersedesExecutionContractId: snap.supersedesExecutionContractId,
        supersessionReason: snap.supersessionReason,
        adapterExportRef: snap.adapterExportRef ?? prior.adapterExportRef,
      };
      const verifyScope = resolveExecutionAuthorityVerifyScope({
        contractScope: scope,
        evidence: authEvidence,
        contractSemantic: successorSemantic,
      });
      const verification = verifyRequiredAuthority(this.authority, {
        requiredAuthority,
        actorId: snap.actor.actorId,
        scope: verifyScope,
        evidenceId: snap.authorityEvidenceId,
        claimedAuthorityLevel: snap.claimedAuthorityLevel,
        displayName: snap.actor.displayName,
      });
      this.audit.append({
        event: "oa.authority.verified",
        ts: timestamp,
        correlationId,
        actorId: snap.actor.actorId,
        requiredLevel:
          requiredAuthority === "MORRIS" ? "N3" : requiredAuthority,
        scope: verifyScope,
        ok: verification.ok,
        verifiedLevel: verification.verifiedLevel,
        reason: verification.reason,
        canActAsMorris: verification.canActAsMorris,
        durationMs: Date.now() - started,
      });
      if (!verification.ok) {
        return fail(
          verification.reason === "scope_mismatch"
            ? "AUTHORITY_SCOPE_MISMATCH"
            : "AUTHORITY_DENIED",
          verification.reason,
          { projectId: prior.projectId },
        );
      }

      const successor: ExecutionContract = {
        schemaVersion: EXECUTION_CONTRACT_SCHEMA_VERSION,
        executionContractId: snap.newExecutionContractId,
        projectId: prior.projectId,
        cycleInstanceId: prior.cycleInstanceId,
        decisionRefs,
        doctrinePackageRef: prior.doctrinePackageRef
          ? structuredClone(prior.doctrinePackageRef)
          : undefined,
        action,
        target,
        scope,
        inputs:
          cloned.inputs !== undefined
            ? cloned.inputs
            : prior.inputs
              ? structuredClone(prior.inputs)
              : undefined,
        expectedOutputs:
          cloned.expectedOutputs.length > 0
            ? cloned.expectedOutputs
            : prior.expectedOutputs
              ? [...prior.expectedOutputs]
              : undefined,
        requiredCapabilities,
        requiredAuthority,
        constraints,
        stopConditions,
        evidenceRequirements,
        reversibility,
        ...(executionWindowClass ? { executionWindowClass } : {}),
        idempotencyKey,
        correlationId,
        status: snap.status,
        version: 1,
        supersedesExecutionContractId: snap.supersedesExecutionContractId,
        supersessionReason: snap.supersessionReason,
        adapterExportRef: snap.adapterExportRef ?? prior.adapterExportRef,
        provenance: {
          schemaVersion: "0.1.0-oa",
          provenanceRecordId: newId("prv"),
          actor: structuredClone(snap.actor),
          source: "execution_adapter",
          timestamp,
          correlationId,
          projectId: prior.projectId,
          cycleInstanceId: prior.cycleInstanceId,
          supersedes: snap.supersedesExecutionContractId,
        },
      };
      successor.semanticFingerprint =
        computeExecutionContractSemanticFingerprint(successor);

      let supersededContract: ExecutionContract | undefined;
      let savedSuccessor: ExecutionContract | undefined;

      const persist = async () => {
        const current = await this.contracts.findById(
          snap.supersedesExecutionContractId,
        );
        if (!current) {
          throw Object.assign(new Error("missing"), {
            detailCode: "CONTRACT_NOT_FOUND" as const,
          });
        }
        if (current.status === "superseded" || current.status === "cancelled") {
          throw Object.assign(new Error("already"), {
            detailCode: "STATE_CONFLICT" as const,
          });
        }
        if (isTa5Status(current.status)) {
          throw Object.assign(new Error("ta5"), {
            detailCode: "TA5_STATUS_REFUSED" as const,
          });
        }
        if (
          snap.expectedVersion !== undefined &&
          snap.expectedVersion !== current.version
        ) {
          throw Object.assign(new Error("occ"), {
            detailCode: "VERSION_CONFLICT" as const,
            expectedVersion: snap.expectedVersion,
            currentVersion: current.version,
          });
        }
        const again = await this.contracts.findById(
          snap.newExecutionContractId,
        );
        if (again) {
          throw Object.assign(new Error("exists"), {
            detailCode: "CONTRACT_ALREADY_EXISTS" as const,
          });
        }

        const oldNext: ExecutionContract = {
          ...current,
          status: "superseded",
          supersessionReason: snap.supersessionReason,
          version: current.version + 1,
        };
        await this.contracts.save(oldNext);
        await this.contracts.save(successor);
        supersededContract = oldNext;
        savedSuccessor = successor;
      };

      try {
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch (err) {
        if (err && typeof err === "object" && "detailCode" in err) {
          const e = err as {
            detailCode: Parameters<typeof createExecutionError>[0]["detailCode"];
            expectedVersion?: number;
            currentVersion?: number;
          };
          return fail(e.detailCode, "race", {
            projectId: prior.projectId,
            expectedVersion: e.expectedVersion,
            currentVersion: e.currentVersion,
          });
        }
        return fail("PERSISTENCE_FAILURE", "atomic_supersede_failed", {
          projectId: prior.projectId,
        });
      }

      if (!savedSuccessor || !supersededContract) {
        return fail("PERSISTENCE_FAILURE", "atomic_supersede_incomplete", {
          projectId: prior.projectId,
        });
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_contract.superseded",
        ts: timestamp,
        correlationId,
        projectId: savedSuccessor.projectId,
        executionContractId: savedSuccessor.executionContractId,
        supersedesExecutionContractId: snap.supersedesExecutionContractId,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        contract: structuredClone(savedSuccessor),
        supersededContract: structuredClone(supersededContract),
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/index.ts`

```typescript
/**
 * T-A4 ExecutionContract Governance — public barrel.
 *
 * Isolated Option A v3-native module. Consumes T-A1 project, T-A2 cycle,
 * T-A3 decision/confirmation/authority public APIs only. Does not replace
 * d1 / OPS1 / MethodMode. Studio composition uses Product SQLite (M3);
 * Memory remains for tests.
 *
 * Ownership: T-A4 through confirmed (+ cancelled pre-exec, superseded).
 * T-A5 statuses (executing|completed|failed) and selectedAgentRef are REFUSED.
 *
 * Critical cycle acknowledgment: T-A2 has no public AcknowledgeCriticalCycle
 * API. ConfirmExecutionContract fail-closes when Critical cycle is still
 * `proposed` (R-T-A3-1 OPEN).
 *
 * Confirmation consumption: ConfirmExecutionContract persists confirmed with
 * confirmationRef first, then calls DecisionServices.consumeConfirmation.
 * On consume failure, compensates via CancelExecutionContract (Option B).
 * Residual R-T-A3-2 OPEN if compensate cancel also fails.
 */

export * from "./domain/types";
export * from "./domain/errors";
export * from "./domain/invariants";
export {
  computeExecutionContractSemanticFingerprint,
  computeExecutionContractSemanticMaterialFingerprint,
  executionContractSemanticMaterial,
  type ExecutionContractSemanticMaterial,
} from "./domain/semanticFingerprint";
export {
  DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
  EXECUTION_WINDOW_CLASSES,
  PRE_M6_EXECUTION_WINDOW_CAP_MS,
  PRE_M6_EXECUTION_WINDOW_MS,
  assertResolvedTimeoutMs,
  isExecutionWindowClass,
  resolveExecutionWindowClass,
  resolveExecutionWindowForStart,
  type ExecutionWindowClass,
  type ExecutionWindowResolveResult,
  type ResolvedExecutionWindow,
} from "./domain/executionWindowPolicy";

export {
  computeInspectionFingerprint,
  evaluateInspectionSufficiency,
  type InspectionAttestation,
  type InspectionInsufficiencyReason,
  type InspectionSufficiency,
} from "./domain/inspectionAttestation";
export type {
  AgentCapabilitySufficiency,
  AuthorityVerificationBlockedReason,
  AuthorityVerificationOutcome,
  AuthorityVerificationReceipt,
} from "./domain/authorityVerificationReceipt";

export * from "./ports/executionContractRepository";
export * from "./ports/executionAudit";
export * from "./ports/executionContractPersistenceUnitOfWorkPort";
export type { InspectionAttestationRepositoryPort } from "./ports/inspectionAttestationRepository";
export type { AuthorityVerificationReceiptRepositoryPort } from "./ports/authorityVerificationReceiptRepository";

export { BuildExecutionContract } from "./application/buildExecutionContract";
export { GetExecutionContract } from "./application/getExecutionContract";
export { ListExecutionContractHistory } from "./application/listExecutionContractHistory";
export { ValidateExecutionContract } from "./application/validateExecutionContract";
export { ConfirmExecutionContract } from "./application/confirmExecutionContract";
export { SupersedeExecutionContract } from "./application/supersedeExecutionContract";
export { CancelExecutionContract } from "./application/cancelExecutionContract";
export { CheckExecutionAuthorization } from "./application/checkExecutionAuthorization";
export {
  GetContractInspectionState,
  RecordContractInspection,
  type GetContractInspectionStateResult,
  type RecordContractInspectionRequest,
  type RecordContractInspectionResult,
} from "./application/recordContractInspection";
export {
  RecordAuthorityVerification,
  type RecordAuthorityVerificationRequest,
} from "./application/recordAuthorityVerification";

export {
  projectCursorPrepareOnly,
  type CursorPrepareOnlyProjection,
} from "./projection/cursorPrepareOnlyProjection";

export { MemoryExecutionContractStore } from "./infrastructure/memoryExecutionContractStore";
export { MemoryExecutionContractRepository } from "./infrastructure/memoryExecutionContractRepository";
export { MemoryInspectionAttestationRepository } from "./infrastructure/memoryInspectionAttestationRepository";
export { MemoryAuthorityVerificationReceiptRepository } from "./infrastructure/memoryAuthorityVerificationReceiptRepository";
export { SqliteInspectionAttestationRepository } from "./infrastructure/sqlite/sqliteInspectionAttestationRepository";
export { SqliteAuthorityVerificationReceiptRepository } from "./infrastructure/sqlite/sqliteAuthorityVerificationReceiptRepository";
export {
  ConsoleExecutionAuditJournal,
  MemoryExecutionAuditJournal,
} from "./infrastructure/observability";
export { SqliteExecutionContractRepository } from "./infrastructure/sqlite/sqliteExecutionContractRepository";
export { SqliteExecutionAuditJournal } from "./infrastructure/sqlite/sqliteExecutionAuditJournal";
export {
  createSqliteExecutionContractServices,
  createTestSqliteExecutionContractServices,
  type CreateSqliteExecutionContractServicesOptions,
  type SqliteExecutionContractServices,
} from "./infrastructure/sqlite/createSqliteExecutionContractServices";

import type { ClockPort } from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import type { CycleServices } from "@/lib/oa/cycle";
import type {
  AuthorityResolverPort,
  DecisionServices,
} from "@/lib/oa/decision";
import type { ProjectServices } from "@/lib/oa/project";
import { BuildExecutionContract } from "./application/buildExecutionContract";
import { CancelExecutionContract } from "./application/cancelExecutionContract";
import { CheckExecutionAuthorization } from "./application/checkExecutionAuthorization";
import { ConfirmExecutionContract } from "./application/confirmExecutionContract";
import { GetExecutionContract } from "./application/getExecutionContract";
import { ListExecutionContractHistory } from "./application/listExecutionContractHistory";
import { SupersedeExecutionContract } from "./application/supersedeExecutionContract";
import { ValidateExecutionContract } from "./application/validateExecutionContract";
import { GetContractInspectionState, RecordContractInspection } from "./application/recordContractInspection";
import { RecordAuthorityVerification } from "./application/recordAuthorityVerification";
import { MemoryExecutionContractRepository } from "./infrastructure/memoryExecutionContractRepository";
import { MemoryExecutionContractStore } from "./infrastructure/memoryExecutionContractStore";
import { MemoryAuthorityVerificationReceiptRepository } from "./infrastructure/memoryAuthorityVerificationReceiptRepository";
import { MemoryInspectionAttestationRepository } from "./infrastructure/memoryInspectionAttestationRepository";
import {
  ConsoleExecutionAuditJournal,
  MemoryExecutionAuditJournal,
} from "./infrastructure/observability";
import type { ExecutionAuditPort } from "./ports/executionAudit";
import type { ExecutionContractPersistenceUnitOfWorkPort } from "./ports/executionContractPersistenceUnitOfWorkPort";
import type { ExecutionContractRepositoryPort } from "./ports/executionContractRepository";
import type { InspectionAttestationRepositoryPort } from "./ports/inspectionAttestationRepository";
import type { AuthorityVerificationReceiptRepositoryPort } from "./ports/authorityVerificationReceiptRepository";

export type ExecutionContractServices = {
  store: ExecutionContractPersistenceUnitOfWorkPort;
  contracts: ExecutionContractRepositoryPort;
  audit: ExecutionAuditPort;
  /** W2 (D-W2-04) — append-only inspection proof. */
  inspectionAttestations: InspectionAttestationRepositoryPort;
  /** W2 (TD-C6-03) — append-only authority evaluation snapshots. */
  authorityReceipts: AuthorityVerificationReceiptRepositoryPort;
  buildExecutionContract: BuildExecutionContract;
  getExecutionContract: GetExecutionContract;
  listExecutionContractHistory: ListExecutionContractHistory;
  validateExecutionContract: ValidateExecutionContract;
  confirmExecutionContract: ConfirmExecutionContract;
  supersedeExecutionContract: SupersedeExecutionContract;
  cancelExecutionContract: CancelExecutionContract;
  checkExecutionAuthorization: CheckExecutionAuthorization;
  recordContractInspection: RecordContractInspection;
  getContractInspectionState: GetContractInspectionState;
  recordAuthorityVerification: RecordAuthorityVerification;
};

export type CreateInMemoryExecutionContractServicesOptions = {
  projectServices: ProjectServices;
  decisionServices: DecisionServices;
  cycleServices?: CycleServices;
  clock?: ClockPort;
  audit?: ExecutionAuditPort;
  /** Defaults to decisionServices.authority (T-A3 AuthorityResolverPort). */
  authorityResolver?: AuthorityResolverPort;
};

/** Factory for in-memory ExecutionContract governance services. */
export function createInMemoryExecutionContractServices(
  options: CreateInMemoryExecutionContractServicesOptions,
): ExecutionContractServices {
  const store = new MemoryExecutionContractStore();
  const contracts = new MemoryExecutionContractRepository(store);
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleExecutionAuditJournal();
  const authority =
    options.authorityResolver ?? options.decisionServices.authority;
  const inspectionAttestations = new MemoryInspectionAttestationRepository();
  const authorityReceipts = new MemoryAuthorityVerificationReceiptRepository();

  const cancelExecutionContract = new CancelExecutionContract(
    contracts,
    authority,
    clock,
    audit,
    store,
  );

  return {
    store,
    contracts,
    audit,
    inspectionAttestations,
    authorityReceipts,
    buildExecutionContract: new BuildExecutionContract(
      contracts,
      authority,
      options.projectServices,
      options.cycleServices,
      options.decisionServices,
      clock,
      audit,
      store,
    ),
    getExecutionContract: new GetExecutionContract(contracts, clock, audit),
    listExecutionContractHistory: new ListExecutionContractHistory(
      contracts,
      clock,
      audit,
    ),
    validateExecutionContract: new ValidateExecutionContract(
      contracts,
      authority,
      clock,
      audit,
      store,
    ),
    confirmExecutionContract: new ConfirmExecutionContract(
      contracts,
      authority,
      options.decisionServices,
      options.cycleServices,
      clock,
      audit,
      store,
      cancelExecutionContract,
    ),
    supersedeExecutionContract: new SupersedeExecutionContract(
      contracts,
      authority,
      clock,
      audit,
      store,
    ),
    cancelExecutionContract,
    checkExecutionAuthorization: new CheckExecutionAuthorization(
      contracts,
      authority,
      options.decisionServices,
      options.cycleServices,
      clock,
      audit,
    ),
    recordContractInspection: new RecordContractInspection(
      contracts,
      inspectionAttestations,
      clock,
    ),
    getContractInspectionState: new GetContractInspectionState(
      contracts,
      inspectionAttestations,
    ),
    recordAuthorityVerification: new RecordAuthorityVerification(
      authorityReceipts,
      clock,
    ),
  };
}

export function createTestExecutionContractServices(
  options: CreateInMemoryExecutionContractServicesOptions & {
    audit?: MemoryExecutionAuditJournal;
    fixedNowIso?: string;
  },
): ExecutionContractServices & {
  audit: MemoryExecutionAuditJournal;
} {
  const audit = options.audit ?? new MemoryExecutionAuditJournal();
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-07-25T06:00:00.000Z"));
  return createInMemoryExecutionContractServices({
    ...options,
    clock,
    audit,
  }) as ExecutionContractServices & {
    audit: MemoryExecutionAuditJournal;
  };
}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/domain/inspectionAttestation.ts`

```typescript
/**
 * W2 / D-W2-04 — ExecutionContract InspectionAttestation.
 *
 * An attestation records that a human inspected one exact ExecutionContract,
 * identified by `executionContractId` + `contractVersion` + fingerprints +
 * `actor` + `inspectedAt`.
 *
 * It is PROOF, never permission:
 *   - it introduces no new ExecutionContract business status;
 *   - it never grants authority on its own;
 *   - it becomes insufficient as soon as the contract changes materially.
 *
 * Sufficiency is decided on `inspectionFingerprint`: the execution-significant
 * material of the contract (action, target, scope, inputs, capabilities,
 * authority, constraints, stop conditions, evidence, reversibility, window,
 * idempotency, decision refs, doctrine, supersession lineage).
 *
 * Deliberately excluded from that fingerprint: `confirmationRef` and
 * `immutableAfterConfirm`. Attaching a Confirmation is the step the product
 * performs *after* inspection in the mandated order (PREPARED → INSPECTED →
 * Confirmation if required → authority). It changes no executable intent, so it
 * cannot invalidate the inspection that legitimately preceded it. Every other
 * material amendment — and any supersession, which yields a new contract
 * identity with no attestation at all — invalidates the previous attestation
 * and requires re-inspection before Confirmation/authority.
 *
 * `validated` ≠ inspected, `confirmation_required` ≠ inspected: an EC status is
 * never read as inspection proof.
 */

import { createHash } from "node:crypto";
import { canonicalizeJson } from "@/lib/oa/doctrine";
import type { ActorReference } from "@/lib/oa/doctrine";
import {
  executionContractSemanticMaterial,
  type ExecutionContractSemanticMaterial,
} from "./semanticFingerprint";

export type InspectionAttestation = {
  schemaVersion: "0.1.0-oa";
  attestationId: string;
  executionContractId: string;
  contractVersion: number;
  /** Execution-significant fingerprint — decides sufficiency. */
  inspectionFingerprint: string;
  /** Full contract semantic fingerprint at inspection time — audit only. */
  semanticFingerprint: string;
  projectId?: string;
  actor: ActorReference;
  inspectedAt: string;
  /** Contract facts the inspector confirmed having read. */
  inspectedFacts: string[];
  /** Free-form reserves raised during inspection (non-blocking record). */
  inspectionReserves?: string[];
  /** Structural denials — an attestation is never an authorization. */
  grantsAuthority: false;
  isConfirmation: false;
};

export type InspectionInsufficiencyReason =
  | "no_attestation"
  | "material_change"
  | "contract_fingerprint_absent";

export type InspectionSufficiency =
  | { sufficient: true; attestation: InspectionAttestation }
  | {
      sufficient: false;
      reason: InspectionInsufficiencyReason;
      staleAttestation?: InspectionAttestation;
    };

/**
 * Execution-significant fingerprint of a contract: the semantic material minus
 * the Confirmation binding fields (see module note).
 */
export function computeInspectionFingerprint(
  contract: Parameters<typeof executionContractSemanticMaterial>[0],
): string {
  const material = executionContractSemanticMaterial(contract);
  const executable: Partial<ExecutionContractSemanticMaterial> = { ...material };
  delete executable.confirmationRef;
  delete executable.immutableAfterConfirm;
  return createHash("sha256")
    .update(canonicalizeJson(executable), "utf8")
    .digest("hex");
}

/**
 * Deny-by-default sufficiency check against the contract as it exists now.
 * A contract whose fingerprint cannot be resolved can never be proved inspected.
 */
export function evaluateInspectionSufficiency(input: {
  attestations: readonly InspectionAttestation[];
  executionContractId: string;
  currentInspectionFingerprint: string | undefined;
}): InspectionSufficiency {
  const relevant = input.attestations
    .filter((a) => a.executionContractId === input.executionContractId)
    .slice()
    .sort((a, b) => (a.inspectedAt < b.inspectedAt ? 1 : -1));

  if (relevant.length === 0) {
    return { sufficient: false, reason: "no_attestation" };
  }
  if (!input.currentInspectionFingerprint) {
    return {
      sufficient: false,
      reason: "contract_fingerprint_absent",
      staleAttestation: relevant[0],
    };
  }

  const match = relevant.find(
    (a) => a.inspectionFingerprint === input.currentInspectionFingerprint,
  );
  if (match) {
    return { sufficient: true, attestation: match };
  }

  return {
    sufficient: false,
    reason: "material_change",
    staleAttestation: relevant[0]!,
  };
}
```

### `projects/sfia-studio/app/lib/oa/execution-contract/domain/semanticFingerprint.ts`

```typescript
/**
 * SHA-256 semantic fingerprint for ExecutionContract (M3).
 * Canonical JSON over execution-significant fields; excludes volatile provenance
 * and T-A4 lifecycle metadata (status, version) that do not change intent.
 *
 * Nested objects are persistence-normalized (JSON round-trip) so undefined keys
 * cannot make build-time hashes diverge from reload/recompute.
 */
import { createHash } from "node:crypto";
import { canonicalizeJson } from "@/lib/oa/doctrine";
import type { ExecutionContract } from "./types";

/** Drop undefined keys the same way SQLite payload_json persistence does. */
function persistenceNormalize<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

export type ExecutionContractSemanticMaterial = {
  executionContractId: string;
  projectId: string;
  cycleInstanceId?: string;
  decisionRefs?: string[];
  confirmationRef?: string;
  doctrinePackageRef?: ExecutionContract["doctrinePackageRef"];
  action: string;
  target: string;
  scope: string;
  inputs?: Record<string, unknown>;
  expectedOutputs?: string[];
  requiredCapabilities: string[];
  requiredAuthority: ExecutionContract["requiredAuthority"];
  constraints: string[];
  stopConditions: string[];
  evidenceRequirements: string[];
  reversibility: ExecutionContract["reversibility"];
  executionWindowClass?: ExecutionContract["executionWindowClass"];
  idempotencyKey: string;
  supersedesExecutionContractId?: string;
  supersessionReason?: string;
  adapterExportRef?: string;
  immutableAfterConfirm?: true;
};

export function executionContractSemanticMaterial(
  contract: Pick<
    ExecutionContract,
    | "executionContractId"
    | "projectId"
    | "cycleInstanceId"
    | "decisionRefs"
    | "confirmationRef"
    | "doctrinePackageRef"
    | "action"
    | "target"
    | "scope"
    | "inputs"
    | "expectedOutputs"
    | "requiredCapabilities"
    | "requiredAuthority"
    | "constraints"
    | "stopConditions"
    | "evidenceRequirements"
    | "reversibility"
    | "executionWindowClass"
    | "idempotencyKey"
    | "supersedesExecutionContractId"
    | "supersessionReason"
    | "adapterExportRef"
    | "immutableAfterConfirm"
  >,
): ExecutionContractSemanticMaterial {
  const material: ExecutionContractSemanticMaterial = {
    executionContractId: contract.executionContractId,
    projectId: contract.projectId,
    action: contract.action,
    target: contract.target,
    scope: contract.scope,
    requiredCapabilities: [...contract.requiredCapabilities],
    requiredAuthority: contract.requiredAuthority,
    constraints: [...contract.constraints],
    stopConditions: [...contract.stopConditions],
    evidenceRequirements: [...contract.evidenceRequirements],
    reversibility: contract.reversibility,
    idempotencyKey: contract.idempotencyKey,
  };
  if (contract.executionWindowClass !== undefined) {
    material.executionWindowClass = contract.executionWindowClass;
  }
  if (contract.cycleInstanceId !== undefined) {
    material.cycleInstanceId = contract.cycleInstanceId;
  }
  if (contract.decisionRefs !== undefined) {
    material.decisionRefs = [...contract.decisionRefs];
  }
  if (contract.confirmationRef !== undefined) {
    material.confirmationRef = contract.confirmationRef;
  }
  if (contract.doctrinePackageRef !== undefined) {
    material.doctrinePackageRef = persistenceNormalize(
      contract.doctrinePackageRef,
    );
  }
  if (contract.inputs !== undefined) {
    material.inputs = persistenceNormalize(contract.inputs);
  }
  if (contract.expectedOutputs !== undefined) {
    material.expectedOutputs = [...contract.expectedOutputs];
  }
  if (contract.supersedesExecutionContractId !== undefined) {
    material.supersedesExecutionContractId =
      contract.supersedesExecutionContractId;
  }
  if (contract.supersessionReason !== undefined) {
    material.supersessionReason = contract.supersessionReason;
  }
  if (contract.adapterExportRef !== undefined) {
    material.adapterExportRef = contract.adapterExportRef;
  }
  if (contract.immutableAfterConfirm !== undefined) {
    material.immutableAfterConfirm = contract.immutableAfterConfirm;
  }
  return material;
}

/** Primitive: fingerprint an already-built semantic material payload. */
export function computeExecutionContractSemanticMaterialFingerprint(
  material: ExecutionContractSemanticMaterial,
): string {
  const canonical = canonicalizeJson(material);
  return createHash("sha256").update(canonical, "utf8").digest("hex");
}

export function computeExecutionContractSemanticFingerprint(
  contract: Parameters<typeof executionContractSemanticMaterial>[0],
): string {
  return computeExecutionContractSemanticMaterialFingerprint(
    executionContractSemanticMaterial(contract),
  );
}
```

### `projects/sfia-studio/app/__tests__/auth/policy-action-scoped-s1.test.ts`

```typescript
/**
 * POLICY-01…15 + BYPASS-* + BIND-* + REG-* — Auth policy / contract-binding closure.
 * ZERO real GitHub / OpenAI / web_search.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryAuthorityResolver } from "@/lib/oa/decision";
import {
  resolveExecutionAuthorityVerifyScope,
  verifyRequiredAuthority,
} from "@/lib/oa/execution-contract/application/authorityHelper";
import * as AuthPublic from "@/lib/auth";
import {
  createSfiaAuth,
  resetSfiaAuthSingletonForTests,
} from "@/lib/auth/auth";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import { resolveCurrentAuthenticatedPilote } from "@/lib/auth/resolveCurrentPilote";
import { issueS1AuthorityEvidence } from "@/lib/auth/s1Authority";
import {
  AUTHORITY_REQUIREMENT_MISMATCH,
  AUTHORITY_REQUIREMENT_UNTRUSTED,
  AUTHORITY_UNRESOLVED,
  CONTRACT_BINDING_MISMATCH,
  CONTRACT_CONTEXT_REQUIRED,
  MORRIS_AUTHORITY_NOT_AVAILABLE,
  MORRIS_GATE_REQUIRED,
  PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
  resolvePiloteS1AuthorityFromGovernedContract,
  resolvePiloteS1AuthorityFromGovernedEffects,
  resolvePiloteS1AuthorityLevel,
  type AuthS1GovernedContractContext,
  type GovernedEffectsAuthorityInput,
} from "@/lib/auth/piloteS1AuthorityPolicy";
import { BETTER_AUTH_GITHUB_MULTI_USER_S1 } from "@/lib/auth/constants";
import { computeInspectionFingerprint } from "@/lib/oa/execution-contract/domain/inspectionAttestation";
import { headersWithAccountCookie } from "./helpers/accountCookie";

const TEST_ENV = {
  BETTER_AUTH_SECRET: "test-secret-at-least-32-characters-long!!",
  BETTER_AUTH_URL: "http://localhost:3020",
  GITHUB_CLIENT_ID: "test-github-client-id",
  GITHUB_CLIENT_SECRET: "test-github-client-secret",
  SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "11111111,22222222",
} as unknown as NodeJS.ProcessEnv;

const piloteA = {
  ok: true as const,
  githubUserId: "11111111",
  betterAuthUserId: "ba-user-a",
  actor: mapGithubIdentityToPiloteActor({ githubUserId: "11111111" }),
};

function futureWindow() {
  const issuedAt = new Date().toISOString();
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
  return { issuedAt, expiresAt };
}

function makeContract(
  overrides: Partial<AuthS1GovernedContractContext> & {
    executionContractId: string;
    action: string;
  },
): AuthS1GovernedContractContext {
  const base: AuthS1GovernedContractContext = {
    executionContractId: overrides.executionContractId,
    projectId: overrides.projectId ?? "prj:demo",
    action: overrides.action,
    target: overrides.target ?? "tgt:demo",
    scope: overrides.scope ?? "biz:shared-scope",
    requiredAuthority: overrides.requiredAuthority ?? "N1",
    requiredCapabilities: overrides.requiredCapabilities ?? ["cap:demo"],
    constraints: overrides.constraints ?? ["c:demo"],
    stopConditions: overrides.stopConditions ?? ["stop:demo"],
    evidenceRequirements: overrides.evidenceRequirements ?? ["evreq:demo"],
    reversibility: overrides.reversibility ?? "partially_reversible",
    idempotencyKey:
      overrides.idempotencyKey ?? `idem:${overrides.executionContractId}`,
  };
  if (overrides.decisionRefs !== undefined) {
    base.decisionRefs = overrides.decisionRefs;
  }
  if (overrides.cycleInstanceId !== undefined) {
    base.cycleInstanceId = overrides.cycleInstanceId;
  }
  if (overrides.inputs !== undefined) {
    base.inputs = overrides.inputs;
  }
  if (overrides.expectedOutputs !== undefined) {
    base.expectedOutputs = overrides.expectedOutputs;
  }
  if (overrides.executionWindowClass !== undefined) {
    base.executionWindowClass = overrides.executionWindowClass;
  }
  if (overrides.requiredAuthority !== undefined) {
    base.requiredAuthority = overrides.requiredAuthority;
  }
  return base;
}

function bindingScope(contract: AuthS1GovernedContractContext): string {
  return computeInspectionFingerprint(contract);
}

function makeEffects(
  effectClass: GovernedEffectsAuthorityInput["effectClass"],
  contract: AuthS1GovernedContractContext,
  extras: Partial<GovernedEffectsAuthorityInput> = {},
): GovernedEffectsAuthorityInput {
  return {
    effectClass,
    rollbackAvailable: extras.rollbackAvailable ?? true,
    protectedBoundaries: extras.protectedBoundaries ?? [],
    scopeIn: extras.scopeIn ?? contract.scope,
    target: extras.target ?? contract.target,
    claimedRequiredAuthority: extras.claimedRequiredAuthority,
  };
}

function issueFor(
  resolver: MemoryAuthorityResolver,
  contract: AuthS1GovernedContractContext,
  effectClass: GovernedEffectsAuthorityInput["effectClass"],
  evidenceId: string,
  extras: Partial<GovernedEffectsAuthorityInput> = {},
) {
  const { issuedAt, expiresAt } = futureWindow();
  return issueS1AuthorityEvidence({
    pilote: piloteA,
    authorityResolver: resolver,
    contract,
    governedEffects: makeEffects(effectClass, contract, extras),
    issuedAt,
    expiresAt,
    evidenceId,
  });
}

describe("AUTH POLICY Morris BASE NONE + ACTION-SCOPED", () => {
  beforeEach(() => {
    resetSfiaAuthSingletonForTests();
  });
  afterEach(() => {
    resetSfiaAuthSingletonForTests();
    vi.restoreAllMocks();
  });

  it("POLICY-01 login only → actor authority none; no S1", () => {
    expect(piloteA.actor.authorityLevel).toBe("none");
    expect(resolvePiloteS1AuthorityLevel().ok).toBe(false);
    const resolver = new MemoryAuthorityResolver();
    const { issuedAt, expiresAt } = futureWindow();
    const issued = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      issuedAt,
      expiresAt,
    });
    expect(issued.ok).toBe(false);
    if (!issued.ok) {
      expect(issued.code).toBe(PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN);
    }
  });

  it("POLICY-02 trusted N1 effect → exact S1 N1; canActAsMorris=false", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:pol02",
      action: "product:read",
      requiredAuthority: "N1",
    });
    const issued = issueFor(resolver, contract, "read", "evd:pol02");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N1");
    expect(issued.evidence.canActAsMorris).toBe(false);
    expect(issued.evidence.scope).toBe(bindingScope(contract));
    expect(issued.evidence.source).toBe(BETTER_AUTH_GITHUB_MULTI_USER_S1);
  });

  it("POLICY-03 trusted N2 effect → exact S1 N2", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:pol03",
      action: "product:commit",
      requiredAuthority: "N2",
    });
    const issued = issueFor(resolver, contract, "commit", "evd:pol03");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N2");
    expect(issued.evidence.scope).toBe(bindingScope(contract));
  });

  it("POLICY-04 trusted N3 effect → exact S1 N3", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:pol04",
      action: "product:push",
      requiredAuthority: "N3",
    });
    const issued = issueFor(resolver, contract, "push", "evd:pol04");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N3");
    expect(issued.evidence.canActAsMorris).toBe(false);
  });

  it("POLICY-05 MORRIS / Morris construction gate → FAIL-CLOSED", () => {
    const gate = resolvePiloteS1AuthorityFromGovernedContract({
      contract: makeContract({
        executionContractId: "xct:gate",
        action: "product:baseline-promotion",
      }),
      governedEffects: makeEffects(
        "baseline-promotion",
        makeContract({
          executionContractId: "xct:gate",
          action: "product:baseline-promotion",
        }),
        { rollbackAvailable: false },
      ),
    });
    expect(gate.ok).toBe(false);
    if (!gate.ok) expect(gate.code).toBe(MORRIS_GATE_REQUIRED);

    const claimMorris = resolvePiloteS1AuthorityFromGovernedContract({
      contract: makeContract({
        executionContractId: "xct:morris-claim",
        action: "product:read",
        requiredAuthority: "N1",
      }),
      governedEffects: makeEffects(
        "read",
        makeContract({
          executionContractId: "xct:morris-claim",
          action: "product:read",
        }),
        { claimedRequiredAuthority: "MORRIS" },
      ),
    });
    expect(claimMorris.ok).toBe(false);
    if (!claimMorris.ok) {
      expect(claimMorris.code).toBe(MORRIS_AUTHORITY_NOT_AVAILABLE);
    }

    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:pol05-n3",
      action: "product:push",
      requiredAuthority: "N3",
    });
    const n3 = issueFor(resolver, contract, "push", "evd:pol05-n3");
    expect(n3.ok).toBe(true);
    if (!n3.ok) return;
    const verifyScope = resolveExecutionAuthorityVerifyScope({
      contractScope: contract.scope,
      evidence: n3.evidence,
      contractSemantic: contract,
    });
    const morrisCheck = verifyRequiredAuthority(resolver, {
      requiredAuthority: "MORRIS",
      actorId: piloteA.actor.actorId,
      scope: verifyScope,
      evidenceId: n3.evidence.evidenceId,
    });
    expect(morrisCheck.ok).toBe(false);
    expect(morrisCheck.reason).toBe("morris_gate_denied");
  });

  it("POLICY-06 client claims N1 while server requires N3 → no downgrade", () => {
    const contract = makeContract({
      executionContractId: "xct:pol06",
      action: "product:push",
      requiredAuthority: "N3",
    });
    const r = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("push", contract, {
        claimedRequiredAuthority: "N1",
      }),
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(AUTHORITY_REQUIREMENT_MISMATCH);
  });

  it("POLICY-07 client claims N3 while server requires N1 → no self-escalation", () => {
    const contract = makeContract({
      executionContractId: "xct:pol07",
      action: "product:read",
      requiredAuthority: "N1",
    });
    const r = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("read", contract, {
        claimedRequiredAuthority: "N3",
      }),
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(AUTHORITY_REQUIREMENT_MISMATCH);
  });

  it("POLICY-08 client claims MORRIS → denied; canActAsMorris false", () => {
    const contract = makeContract({
      executionContractId: "xct:pol08",
      action: "product:commit",
      requiredAuthority: "N2",
    });
    const r = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("commit", contract, {
        claimedRequiredAuthority: "MORRIS",
      }),
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(MORRIS_AUTHORITY_NOT_AVAILABLE);
  });

  it("POLICY-09 no trusted requirement → PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN", () => {
    const r = resolvePiloteS1AuthorityLevel();
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN);
  });

  it("POLICY-10 malformed/unknown authority → fail closed", () => {
    const contract = makeContract({
      executionContractId: "xct:pol10",
      action: "product:read",
    });
    const unknown = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("unknown", contract),
    });
    expect(unknown.ok).toBe(false);
    if (!unknown.ok) expect(unknown.code).toBe(AUTHORITY_UNRESOLVED);

    const badClaim = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("read", contract, {
        claimedRequiredAuthority: "N9",
      }),
    });
    expect(badClaim.ok).toBe(false);
    if (!badClaim.ok) expect(badClaim.code).toBe(AUTHORITY_REQUIREMENT_MISMATCH);
  });

  it("POLICY-11 contract binding — S1 for Contract A cannot authorize Contract B", () => {
    const resolver = new MemoryAuthorityResolver();
    const contractA = makeContract({
      executionContractId: "xct:pol11-a",
      action: "product:push",
      scope: "biz:shared",
      requiredAuthority: "N3",
    });
    const issued = issueFor(resolver, contractA, "push", "evd:pol11");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    const contractB = makeContract({
      executionContractId: "xct:pol11-b",
      action: "product:push",
      scope: "biz:shared",
      requiredAuthority: "N3",
    });
    const cross = resolver.verify({
      actorId: piloteA.actor.actorId,
      requiredLevel: "N3",
      scope: bindingScope(contractB),
      evidenceId: issued.evidence.evidenceId,
    });
    expect(cross.ok).toBe(false);
    expect(cross.reason).toBe("scope_mismatch");
  });

  it("POLICY-12 middleware/session resolution does not issue S1", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: {
        id: "ba-user-a",
        name: "A",
        email: "a@example.com",
        emailVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      session: {
        id: "sess-a",
        userId: "ba-user-a",
        token: "t",
        createdAt: new Date(),
        updatedAt: new Date(),
        expiresAt: new Date(Date.now() + 60_000),
      },
    } as never);

    const resolver = new MemoryAuthorityResolver();
    const before = resolver.listByActor(piloteA.actor.actorId).length;
    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
    });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.actor.authorityLevel).toBe("none");
    expect(resolver.listByActor(piloteA.actor.actorId).length).toBe(before);
  });

  it("POLICY-13 cross-user session B + provider A → SESSION_USER_MISMATCH", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: {
        id: "ba-user-b",
        name: "B",
        email: "b@example.com",
        emailVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      session: {
        id: "sess-b",
        userId: "ba-user-b",
        token: "t",
        createdAt: new Date(),
        updatedAt: new Date(),
        expiresAt: new Date(Date.now() + 60_000),
      },
    } as never);
    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("SESSION_USER_MISMATCH");
  });

  it("POLICY-14 protected hot path → zero GitHub provider network", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: {
        id: "ba-user-a",
        name: "A",
        email: "a@example.com",
        emailVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      session: {
        id: "sess-a",
        userId: "ba-user-a",
        token: "t",
        createdAt: new Date(),
        updatedAt: new Date(),
        expiresAt: new Date(Date.now() + 60_000),
      },
    } as never);
    const hits: string[] = [];
    const original = globalThis.fetch;
    globalThis.fetch = vi.fn(async (input: RequestInfo | URL) => {
      hits.push(String(input));
      throw new Error("NETWORK");
    }) as typeof fetch;
    try {
      expect(vi.spyOn(auth.api, "accountInfo")).not.toHaveBeenCalled();
      await resolveCurrentAuthenticatedPilote({ auth, headers, env: TEST_ENV });
      expect(hits).toEqual([]);
    } finally {
      globalThis.fetch = original;
    }
  });

  it("POLICY-15 allowlist removal → deny before S1", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: {
        id: "ba-user-a",
        name: "A",
        email: "a@example.com",
        emailVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      session: {
        id: "sess-a",
        userId: "ba-user-a",
        token: "t",
        createdAt: new Date(),
        updatedAt: new Date(),
        expiresAt: new Date(Date.now() + 60_000),
      },
    } as never);
    const denied = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: {
        ...TEST_ENV,
        SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "22222222",
      } as NodeJS.ProcessEnv,
    });
    expect(denied.ok).toBe(false);
    if (!denied.ok) expect(denied.code).toBe("ALLOWLIST_DENIED");
  });
});

describe("BYPASS — Auth S1 policy surface", () => {
  it("BYPASS-01 no public Auth export buildValidatedS1Evidence", () => {
    expect("buildValidatedS1Evidence" in AuthPublic).toBe(false);
    expect(
      (AuthPublic as Record<string, unknown>).buildValidatedS1Evidence,
    ).toBeUndefined();
  });

  it("BYPASS-02 no public Auth export registerS1EvidenceImmutable", () => {
    expect("registerS1EvidenceImmutable" in AuthPublic).toBe(false);
    expect(
      (AuthPublic as Record<string, unknown>).registerS1EvidenceImmutable,
    ).toBeUndefined();
  });

  it("BYPASS-03 no Auth N3 without canonical policy evaluation", () => {
    const effectsOnly = resolvePiloteS1AuthorityFromGovernedEffects({
      effectClass: "push",
      rollbackAvailable: true,
      scopeIn: "biz:x",
      target: "tgt:x",
    });
    expect(effectsOnly.ok).toBe(false);
    if (!effectsOnly.ok) {
      expect(effectsOnly.code).toBe(CONTRACT_CONTEXT_REQUIRED);
    }

    const resolver = new MemoryAuthorityResolver();
    const { issuedAt, expiresAt } = futureWindow();
    const issued = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      issuedAt,
      expiresAt,
      evidenceId: "evd:bypass03",
    });
    expect(issued.ok).toBe(false);
    expect(resolver.getEvidence("evd:bypass03")).toBeNull();
  });

  it("BYPASS-04 legitimate N3 hierarchy uses action-scoped issuance", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bypass04",
      action: "product:push",
      requiredAuthority: "N3",
    });
    const issued = issueFor(resolver, contract, "push", "evd:bypass04");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N3");
    expect(issued.evidence.canActAsMorris).toBe(false);
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N2",
        scope: bindingScope(contract),
        evidenceId: issued.evidence.evidenceId,
      }).ok,
    ).toBe(true);
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N3",
        scope: bindingScope(contract),
        evidenceId: issued.evidence.evidenceId,
        requireMorrisGate: true,
      }).reason,
    ).toBe("morris_gate_denied");
  });
});

describe("BIND — ExecutionContract / action binding", () => {
  it("BIND-01 trusted read contract → exact N1 S1", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bind01",
      action: "product:read",
      requiredAuthority: "N1",
    });
    const issued = issueFor(resolver, contract, "read", "evd:bind01");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N1");
    expect(issued.evidence.scope).toBe(bindingScope(contract));
  });

  it("BIND-02 trusted commit contract → exact N2 S1", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bind02",
      action: "product:commit",
      requiredAuthority: "N2",
    });
    const issued = issueFor(resolver, contract, "commit", "evd:bind02");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N2");
  });

  it("BIND-03 trusted push contract → exact N3 S1", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bind03",
      action: "product:push",
      requiredAuthority: "N3",
    });
    const issued = issueFor(resolver, contract, "push", "evd:bind03");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N3");
  });

  it("BIND-04 effects=push / contract requiredAuthority=N1 → DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bind04",
      action: "product:push",
      requiredAuthority: "N1",
    });
    const issued = issueFor(resolver, contract, "push", "evd:bind04");
    expect(issued.ok).toBe(false);
    if (!issued.ok) expect(issued.code).toBe(AUTHORITY_REQUIREMENT_MISMATCH);
  });

  it("BIND-05 effects=read / contract requiredAuthority=N3 → DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bind05",
      action: "product:read",
      requiredAuthority: "N3",
    });
    const issued = issueFor(resolver, contract, "read", "evd:bind05");
    expect(issued.ok).toBe(false);
    if (!issued.ok) expect(issued.code).toBe(AUTHORITY_REQUIREMENT_MISMATCH);
  });

  it("BIND-06 effects action ≠ contract action → DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bind06",
      action: "product:read",
      requiredAuthority: "N1",
    });
    const issued = issueFor(resolver, contract, "push", "evd:bind06");
    expect(issued.ok).toBe(false);
    if (!issued.ok) expect(issued.code).toBe(CONTRACT_BINDING_MISMATCH);
  });

  it("BIND-07 effects/contract scope mismatch → DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bind07",
      action: "product:read",
      scope: "biz:a",
      requiredAuthority: "N1",
    });
    const issued = issueFor(resolver, contract, "read", "evd:bind07", {
      scopeIn: "biz:b",
    });
    expect(issued.ok).toBe(false);
    if (!issued.ok) expect(issued.code).toBe(CONTRACT_BINDING_MISMATCH);
  });

  it("BIND-08 target mismatch → DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bind08",
      action: "product:read",
      target: "tgt:a",
      requiredAuthority: "N1",
    });
    const issued = issueFor(resolver, contract, "read", "evd:bind08", {
      target: "tgt:b",
    });
    expect(issued.ok).toBe(false);
    if (!issued.ok) expect(issued.code).toBe(CONTRACT_BINDING_MISMATCH);
  });

  it("BIND-09 unknown/missing trusted effect context → DENY", () => {
    const effectsOnly = resolvePiloteS1AuthorityFromGovernedEffects({
      effectClass: "read",
      rollbackAvailable: true,
      scopeIn: "biz:x",
      target: "tgt:x",
    });
    expect(effectsOnly.ok).toBe(false);
    if (!effectsOnly.ok) {
      expect(effectsOnly.code).toBe(CONTRACT_CONTEXT_REQUIRED);
    }

    const resolver = new MemoryAuthorityResolver();
    const { issuedAt, expiresAt } = futureWindow();
    const issued = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      issuedAt,
      expiresAt,
      evidenceId: "evd:bind09",
      contract: makeContract({
        executionContractId: "xct:bind09",
        action: "product:read",
      }),
      // missing governedEffects
    });
    expect(issued.ok).toBe(false);
    if (!issued.ok) {
      expect(issued.code).toBe(PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN);
    }
  });

  it("BIND-10 MORRIS contract/claim → DENY", () => {
    const contract = makeContract({
      executionContractId: "xct:bind10",
      action: "product:push",
      requiredAuthority: "MORRIS",
    });
    const r = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("push", contract),
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(MORRIS_AUTHORITY_NOT_AVAILABLE);
  });

  it("BIND-11 morrisConstructionGateRequired → DENY", () => {
    const contract = makeContract({
      executionContractId: "xct:bind11",
      action: "product:doctrine-change",
    });
    const r = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("doctrine-change", contract, {
        rollbackAvailable: false,
      }),
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(MORRIS_GATE_REQUIRED);
  });

  it("BIND-12 Contract A S1 cannot authorize Contract B (same actor/N/business scope)", () => {
    const resolver = new MemoryAuthorityResolver();
    const sharedBiz = "biz:identical-business-scope";
    const contractA = makeContract({
      executionContractId: "xct:bind12-a",
      action: "product:push",
      scope: sharedBiz,
      target: "tgt:same",
      requiredAuthority: "N3",
    });
    const contractB = makeContract({
      executionContractId: "xct:bind12-b",
      action: "product:push",
      scope: sharedBiz,
      target: "tgt:same",
      requiredAuthority: "N3",
    });
    const issuedA = issueFor(resolver, contractA, "push", "evd:bind12-a");
    expect(issuedA.ok).toBe(true);
    if (!issuedA.ok) return;

    // Adapter maps Auth S1 verify to executionContractId — not business scope.
    const scopeForB = resolveExecutionAuthorityVerifyScope({
      contractScope: contractB.scope,
      evidence: issuedA.evidence,
      contractSemantic: contractB,
    });
    expect(scopeForB).toBe(bindingScope(contractB));
    expect(scopeForB).not.toBe(issuedA.evidence.scope);

    const cross = resolver.verify({
      actorId: piloteA.actor.actorId,
      requiredLevel: "N3",
      scope: scopeForB,
      evidenceId: issuedA.evidence.evidenceId,
    });
    expect(cross.ok).toBe(false);
    expect(cross.reason).toBe("scope_mismatch");

    // Same business scope alone would have wrongly matched pre-correction.
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N3",
        scope: sharedBiz,
        evidenceId: issuedA.evidence.evidenceId,
      }).reason,
    ).toBe("scope_mismatch");
  });

  it("BIND-13 Contract A S1 cannot authorize Contract B with different action", () => {
    const resolver = new MemoryAuthorityResolver();
    const contractA = makeContract({
      executionContractId: "xct:bind13-a",
      action: "product:read",
      requiredAuthority: "N1",
    });
    const contractB = makeContract({
      executionContractId: "xct:bind13-b",
      action: "product:commit",
      requiredAuthority: "N2",
    });
    const issuedA = issueFor(resolver, contractA, "read", "evd:bind13-a");
    expect(issuedA.ok).toBe(true);
    if (!issuedA.ok) return;
    const scopeB = resolveExecutionAuthorityVerifyScope({
      contractScope: contractB.scope,
      evidence: issuedA.evidence,
      contractSemantic: contractB,
    });
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N2",
        scope: scopeB,
        evidenceId: issuedA.evidence.evidenceId,
      }).reason,
    ).toBe("scope_mismatch");
  });

  it("BIND-14 Contract A S1 cannot authorize Contract B with different target/scope", () => {
    const resolver = new MemoryAuthorityResolver();
    const contractA = makeContract({
      executionContractId: "xct:bind14-a",
      action: "product:commit",
      scope: "biz:a",
      target: "tgt:a",
      requiredAuthority: "N2",
    });
    const contractB = makeContract({
      executionContractId: "xct:bind14-b",
      action: "product:commit",
      scope: "biz:b",
      target: "tgt:b",
      requiredAuthority: "N2",
    });
    const issuedA = issueFor(resolver, contractA, "commit", "evd:bind14-a");
    expect(issuedA.ok).toBe(true);
    if (!issuedA.ok) return;
    const scopeB = resolveExecutionAuthorityVerifyScope({
      contractScope: contractB.scope,
      evidence: issuedA.evidence,
      contractSemantic: contractB,
    });
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N2",
        scope: scopeB,
        evidenceId: issuedA.evidence.evidenceId,
      }).reason,
    ).toBe("scope_mismatch");
  });

  it("BIND-15 login/session/allowlist → authorityLevel=none and zero S1", async () => {
    expect(piloteA.actor.authorityLevel).toBe("none");
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: {
        id: "ba-user-a",
        name: "A",
        email: "a@example.com",
        emailVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      session: {
        id: "sess-a",
        userId: "ba-user-a",
        token: "t",
        createdAt: new Date(),
        updatedAt: new Date(),
        expiresAt: new Date(Date.now() + 60_000),
      },
    } as never);
    const resolver = new MemoryAuthorityResolver();
    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
    });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.actor.authorityLevel).toBe("none");
    expect(resolver.listByActor(piloteA.actor.actorId)).toEqual([]);
  });
});

describe("REG — regression matrix", () => {
  beforeEach(() => {
    resetSfiaAuthSingletonForTests();
  });
  afterEach(() => {
    resetSfiaAuthSingletonForTests();
    vi.restoreAllMocks();
  });

  it("REG-01 session B + provider A still SESSION_USER_MISMATCH", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: {
        id: "ba-user-b",
        name: "B",
        email: "b@example.com",
        emailVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      session: {
        id: "sess-b",
        userId: "ba-user-b",
        token: "t",
        createdAt: new Date(),
        updatedAt: new Date(),
        expiresAt: new Date(Date.now() + 60_000),
      },
    } as never);
    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("SESSION_USER_MISMATCH");
  });

  it("REG-02 allowlist removal still denies before S1", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: {
        id: "ba-user-a",
        name: "A",
        email: "a@example.com",
        emailVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      session: {
        id: "sess-a",
        userId: "ba-user-a",
        token: "t",
        createdAt: new Date(),
        updatedAt: new Date(),
        expiresAt: new Date(Date.now() + 60_000),
      },
    } as never);
    const denied = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: {
        ...TEST_ENV,
        SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "22222222",
      } as NodeJS.ProcessEnv,
    });
    expect(denied.ok).toBe(false);
    if (!denied.ok) expect(denied.code).toBe("ALLOWLIST_DENIED");
  });

  it("REG-03 protected Auth identity hot path still zero GitHub provider network", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: {
        id: "ba-user-a",
        name: "A",
        email: "a@example.com",
        emailVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      session: {
        id: "sess-a",
        userId: "ba-user-a",
        token: "t",
        createdAt: new Date(),
        updatedAt: new Date(),
        expiresAt: new Date(Date.now() + 60_000),
      },
    } as never);
    const hits: string[] = [];
    const original = globalThis.fetch;
    globalThis.fetch = vi.fn(async (input: RequestInfo | URL) => {
      hits.push(String(input));
      throw new Error("NETWORK");
    }) as typeof fetch;
    try {
      await resolveCurrentAuthenticatedPilote({ auth, headers, env: TEST_ENV });
      expect(hits).toEqual([]);
    } finally {
      globalThis.fetch = original;
    }
  });

  it("REG-04 TTL max remains bounded to session max", () => {
    const { validateS1EvidenceLifetime } = AuthPublic;
    const issuedAt = "2026-09-04T12:00:00.000Z";
    const over = new Date(
      Date.parse(issuedAt) + (AuthPublic.SESSION_COOKIE_MAX_AGE_SECONDS + 1) * 1000,
    ).toISOString();
    const r = validateS1EvidenceLifetime({ issuedAt, expiresAt: over });
    expect(r.ok).toBe(false);
  });

  it("REG-05 duplicate evidenceId remains fail-closed", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:reg05",
      action: "product:read",
      requiredAuthority: "N1",
    });
    const first = issueFor(resolver, contract, "read", "evd:reg05");
    expect(first.ok).toBe(true);
    const second = issueFor(resolver, contract, "read", "evd:reg05");
    expect(second.ok).toBe(false);
    if (!second.ok) expect(second.code).toBe("EVIDENCE_ID_COLLISION");
    expect(resolver.getEvidence("evd:reg05")?.level).toBe("N1");
    expect(resolver.getEvidence("evd:reg05")?.canActAsMorris).toBe(false);
  });

  it("REG-06 expired S1 remains denied", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:reg06",
      action: "product:read",
      requiredAuthority: "N1",
    });
    const issued = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      contract,
      governedEffects: makeEffects("read", contract),
      issuedAt: "2020-01-01T00:00:00.000Z",
      expiresAt: "2020-01-01T01:00:00.000Z",
      evidenceId: "evd:reg06",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N1",
        scope: bindingScope(contract),
        evidenceId: "evd:reg06",
      }).reason,
    ).toBe("expired");
  });

  it("REG-07 N2 cannot satisfy N3", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:reg07",
      action: "product:commit",
      requiredAuthority: "N2",
    });
    const issued = issueFor(resolver, contract, "commit", "evd:reg07");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N3",
        scope: bindingScope(contract),
        evidenceId: issued.evidence.evidenceId,
      }).reason,
    ).toBe("level_insufficient");
  });

  it("REG-08 N3 cannot satisfy MORRIS", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:reg08",
      action: "product:push",
      requiredAuthority: "N3",
    });
    const issued = issueFor(resolver, contract, "push", "evd:reg08");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.canActAsMorris).toBe(false);
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N3",
        scope: bindingScope(contract),
        evidenceId: issued.evidence.evidenceId,
        requireMorrisGate: true,
      }).reason,
    ).toBe("morris_gate_denied");
  });
});

describe("AUTHSEM — contract authority precedence", () => {
  it("AUTHSEM-A01 contract.requiredAuthority missing → DENY", () => {
    const base = makeContract({
      executionContractId: "xct:authsem-a01",
      action: "product:read",
      requiredAuthority: "N1",
    });
    const { requiredAuthority: _drop, ...without } = base;
    const r = resolvePiloteS1AuthorityFromGovernedContract({
      contract: without as AuthS1GovernedContractContext,
      governedEffects: makeEffects("read", base),
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(AUTHORITY_REQUIREMENT_UNTRUSTED);
  });

  it("AUTHSEM-A02 contract=N1 / projection=N3 / hostile effects.contractRequiredAuthority=N3 → DENY", () => {
    const contract = makeContract({
      executionContractId: "xct:authsem-a02",
      action: "product:push",
      requiredAuthority: "N1",
    });
    const r = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: {
        ...makeEffects("push", contract),
        contractRequiredAuthority: "N3",
      } as GovernedEffectsAuthorityInput & {
        contractRequiredAuthority: "N3";
      },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(AUTHORITY_REQUIREMENT_MISMATCH);
  });

  it("AUTHSEM-A03 contract=N3 / projection=N1 / hostile effects.contractRequiredAuthority=N1 → DENY", () => {
    const contract = makeContract({
      executionContractId: "xct:authsem-a03",
      action: "product:read",
      requiredAuthority: "N3",
    });
    const r = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: {
        ...makeEffects("read", contract),
        contractRequiredAuthority: "N1",
      } as GovernedEffectsAuthorityInput & {
        contractRequiredAuthority: "N1";
      },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(AUTHORITY_REQUIREMENT_MISMATCH);
  });

  it("AUTHSEM-A04 contract=N3 / projection=N3 → PASS", () => {
    const contract = makeContract({
      executionContractId: "xct:authsem-a04",
      action: "product:push",
      requiredAuthority: "N3",
    });
    const r = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("push", contract),
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.level).toBe("N3");
    expect(r.authorityBindingScope).toBe(bindingScope(contract));
  });

  it("AUTHSEM-A05 claimedRequiredAuthority cannot alter result", () => {
    const contract = makeContract({
      executionContractId: "xct:authsem-a05",
      action: "product:commit",
      requiredAuthority: "N2",
    });
    const escalate = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("commit", contract, {
        claimedRequiredAuthority: "N3",
      }),
    });
    expect(escalate.ok).toBe(false);
    if (!escalate.ok) {
      expect(escalate.code).toBe(AUTHORITY_REQUIREMENT_MISMATCH);
    }

    const ok = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("commit", contract, {
        claimedRequiredAuthority: "N2",
      }),
    });
    expect(ok.ok).toBe(true);
    if (!ok.ok) return;
    expect(ok.level).toBe("N2");
  });
});
```

### `projects/sfia-studio/app/__tests__/auth/semantic-binding-build.test.ts`

```typescript
/**
 * SEM-BUILD / SEM-LIFE — Auth S1 semantic binding via actual BuildExecutionContract.
 * Reuses computeInspectionFingerprint (existing EC inspection primitive).
 * ZERO real GitHub / OpenAI / web_search.
 *
 * @vitest-environment node
 */

import { beforeEach, describe, expect, it } from "vitest";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import { issueS1AuthorityEvidence } from "@/lib/auth/s1Authority";
import type { AuthS1GovernedContractContext } from "@/lib/auth/piloteS1AuthorityPolicy";
import { BETTER_AUTH_GITHUB_MULTI_USER_S1 } from "@/lib/auth/constants";
import {
  computeInspectionFingerprint,
  type BuildExecutionContractRequest,
} from "@/lib/oa/execution-contract";
import {
  baseBuildRequest,
  buildStack,
  grantConfirmation,
  registerMorris,
  seedAcceptedDecision,
  seedProject,
  type Stack,
} from "../oa/execution-contract/helpers";

const pilote = {
  ok: true as const,
  githubUserId: "11111111",
  betterAuthUserId: "ba-user-a",
  actor: mapGithubIdentityToPiloteActor({ githubUserId: "11111111" }),
};

function futureWindow() {
  // MemoryAuthorityResolver.verify uses wall-clock Date.now() for expiry.
  const issuedAt = new Date(Date.now() - 60_000).toISOString();
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
  return { issuedAt, expiresAt };
}

function semanticFromBuild(
  req: BuildExecutionContractRequest,
): AuthS1GovernedContractContext {
  return {
    executionContractId: req.executionContractId,
    projectId: req.projectId,
    cycleInstanceId: req.cycleInstanceId,
    decisionRefs: req.decisionRefs,
    doctrinePackageRef: req.doctrinePackageRef,
    action: req.action,
    target: req.target,
    scope: req.scope,
    inputs: req.inputs,
    expectedOutputs: req.expectedOutputs,
    requiredCapabilities: [...req.requiredCapabilities],
    requiredAuthority: req.requiredAuthority,
    constraints: [...req.constraints],
    stopConditions: [...req.stopConditions],
    evidenceRequirements: [...req.evidenceRequirements],
    reversibility: req.reversibility,
    executionWindowClass: req.executionWindowClass,
    idempotencyKey: req.idempotencyKey,
    adapterExportRef: req.adapterExportRef,
  };
}

function effectForAuthority(
  requiredAuthority: "N1" | "N2" | "N3",
): {
  effectClass: "read" | "commit" | "push";
  action: string;
} {
  if (requiredAuthority === "N1") {
    return { effectClass: "read", action: "product:read" };
  }
  if (requiredAuthority === "N2") {
    return { effectClass: "commit", action: "product:commit" };
  }
  return { effectClass: "push", action: "product:push" };
}

function authBuildRequest(
  overrides: Partial<BuildExecutionContractRequest> = {},
): BuildExecutionContractRequest {
  const requiredAuthority = (overrides.requiredAuthority ?? "N3") as
    | "N1"
    | "N2"
    | "N3"
    | "MORRIS";
  const mapped =
    requiredAuthority === "MORRIS"
      ? { effectClass: "push" as const, action: "product:push" }
      : effectForAuthority(requiredAuthority);
  const { action: actionOverride, ...rest } = overrides;
  return baseBuildRequest({
    executionContractId: "xct:sem-bind-001",
    target: "tgt:sem-a",
    scope: "biz:sem-a",
    requiredAuthority: requiredAuthority === "MORRIS" ? "MORRIS" : requiredAuthority,
    idempotencyKey: "idem-sem-bind-001",
    actor: pilote.actor,
    authorityEvidenceId: "evd:sem-bind-s1",
    action: actionOverride ?? mapped.action,
    ...rest,
  });
}

async function issueMatchingS1(
  stack: Stack,
  req: BuildExecutionContractRequest,
  evidenceId = "evd:sem-bind-s1",
) {
  const contract = semanticFromBuild(req);
  const mapped = effectForAuthority(
    req.requiredAuthority as "N1" | "N2" | "N3",
  );
  const { issuedAt, expiresAt } = futureWindow();
  return issueS1AuthorityEvidence({
    pilote,
    authorityResolver: stack.decisions.authority,
    contract,
    governedEffects: {
      effectClass: mapped.effectClass,
      rollbackAvailable: true,
      protectedBoundaries: [],
      scopeIn: contract.scope,
      target: contract.target,
    },
    issuedAt,
    expiresAt,
    evidenceId,
  });
}

describe("SEM-BUILD Auth S1 semantic binding via BuildExecutionContract", () => {
  let stack: Stack;

  beforeEach(async () => {
    stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
  });

  it("SEM-BUILD-01 legitimate S1 for semantic A → Build A PASS", async () => {
    const req = authBuildRequest({ requiredAuthority: "N3" });
    const issued = await issueMatchingS1(stack, req);
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.source).toBe(BETTER_AUTH_GITHUB_MULTI_USER_S1);
    expect(issued.evidence.scope).toBe(
      computeInspectionFingerprint(semanticFromBuild(req)),
    );
    const built = await stack.execution.buildExecutionContract.execute(req);
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    expect(built.contract.executionContractId).toBe(req.executionContractId);
    const stored = await stack.execution.getExecutionContract.execute({
      executionContractId: req.executionContractId,
    });
    expect(stored.ok).toBe(true);
  });

  it("SEM-BUILD-02 same ID, different action → DENY before persistence", async () => {
    const reqA = authBuildRequest({
      requiredAuthority: "N3",
      action: "product:push",
    });
    const issued = await issueMatchingS1(stack, reqA);
    expect(issued.ok).toBe(true);

    const reqB = authBuildRequest({
      requiredAuthority: "N3",
      action: "product:pull-request",
      // push and pull-request both project N3 — authority class matches; action differs.
    });
    // Cannot issue matching S1 for pull-request with push effects; use same S1 from A.
    const built = await stack.execution.buildExecutionContract.execute({
      ...reqB,
      authorityEvidenceId: "evd:sem-bind-s1",
    });
    expect(built.ok).toBe(false);
    if (built.ok) return;
    expect(built.error.detailCode).toBe("AUTHORITY_SCOPE_MISMATCH");
    const stored = await stack.execution.getExecutionContract.execute({
      executionContractId: reqA.executionContractId,
    });
    expect(stored.ok).toBe(false);
  });

  it("SEM-BUILD-03 same ID, different target → DENY", async () => {
    const reqA = authBuildRequest({ target: "tgt:sem-a" });
    expect((await issueMatchingS1(stack, reqA)).ok).toBe(true);
    const built = await stack.execution.buildExecutionContract.execute({
      ...reqA,
      target: "tgt:sem-b",
    });
    expect(built.ok).toBe(false);
    if (!built.ok) {
      expect(built.error.detailCode).toBe("AUTHORITY_SCOPE_MISMATCH");
    }
  });

  it("SEM-BUILD-04 same ID, different business scope → DENY", async () => {
    const reqA = authBuildRequest({ scope: "biz:sem-a" });
    expect((await issueMatchingS1(stack, reqA)).ok).toBe(true);
    const built = await stack.execution.buildExecutionContract.execute({
      ...reqA,
      scope: "biz:sem-b",
    });
    expect(built.ok).toBe(false);
    if (!built.ok) {
      expect(built.error.detailCode).toBe("AUTHORITY_SCOPE_MISMATCH");
    }
  });

  it("SEM-BUILD-05 S1 N3 for push cannot Build read/N1 same ID (hierarchy ≠ semantic)", async () => {
    const reqPush = authBuildRequest({
      requiredAuthority: "N3",
      action: "product:push",
    });
    expect((await issueMatchingS1(stack, reqPush)).ok).toBe(true);

    const reqRead = authBuildRequest({
      requiredAuthority: "N1",
      action: "product:read",
      authorityEvidenceId: "evd:sem-bind-s1",
    });
    const built = await stack.execution.buildExecutionContract.execute(reqRead);
    expect(built.ok).toBe(false);
    if (!built.ok) {
      expect(built.error.detailCode).toBe("AUTHORITY_SCOPE_MISMATCH");
    }
  });

  it("SEM-BUILD-06 same ID, requiredAuthority changed → DENY", async () => {
    const reqN3 = authBuildRequest({
      requiredAuthority: "N3",
      action: "product:push",
    });
    expect((await issueMatchingS1(stack, reqN3)).ok).toBe(true);
    // Keep push action but claim N2 — invalid product pairing; still semantic mismatch on requiredAuthority field.
    const built = await stack.execution.buildExecutionContract.execute({
      ...reqN3,
      requiredAuthority: "N2",
    });
    expect(built.ok).toBe(false);
    if (!built.ok) {
      expect(built.error.detailCode).toBe("AUTHORITY_SCOPE_MISMATCH");
    }
  });

  it("SEM-BUILD-07 mismatch leaves repository without unauthorized contract", async () => {
    const reqA = authBuildRequest();
    expect((await issueMatchingS1(stack, reqA)).ok).toBe(true);
    await stack.execution.buildExecutionContract.execute({
      ...reqA,
      target: "tgt:hostile",
    });
    const stored = await stack.execution.getExecutionContract.execute({
      executionContractId: reqA.executionContractId,
    });
    expect(stored.ok).toBe(false);
  });

  it("SEM-BUILD-08 exact semantic match remains authorized", async () => {
    const req = authBuildRequest({
      requiredAuthority: "N2",
      action: "product:commit",
    });
    expect((await issueMatchingS1(stack, req)).ok).toBe(true);
    const first = await stack.execution.buildExecutionContract.execute(req);
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    const verify = stack.decisions.authority.verify({
      actorId: pilote.actor.actorId,
      requiredLevel: "N2",
      scope: computeInspectionFingerprint(first.contract),
      evidenceId: "evd:sem-bind-s1",
    });
    expect(verify.ok).toBe(true);
  });

  it("SEM-BUILD-09 non-Auth evidence still verifies with contract.scope", async () => {
    await seedAcceptedDecision(stack, {
      decisionId: "dec:oa-morris",
      subject: "subj:morris-build",
      authority: "morris",
    });
    const req = baseBuildRequest({
      executionContractId: "xct:non-auth-001",
      decisionRefs: ["dec:oa-morris"],
      idempotencyKey: "idem-non-auth-001",
      authorityEvidenceId: "evd:morris-n3",
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    const built = await stack.execution.buildExecutionContract.execute(req);
    expect(built.ok).toBe(true);
  });

  it("SEM-BUILD-10 Auth evidence for ID A does not authorize ID B", async () => {
    const reqA = authBuildRequest({
      executionContractId: "xct:sem-a",
      idempotencyKey: "idem-sem-a",
    });
    expect((await issueMatchingS1(stack, reqA, "evd:sem-a")).ok).toBe(true);
    const reqB = authBuildRequest({
      executionContractId: "xct:sem-b",
      idempotencyKey: "idem-sem-b",
      authorityEvidenceId: "evd:sem-a",
    });
    const built = await stack.execution.buildExecutionContract.execute(reqB);
    expect(built.ok).toBe(false);
    if (!built.ok) {
      expect(built.error.detailCode).toBe("AUTHORITY_SCOPE_MISMATCH");
    }
  });

  it("SEM-BUILD-11 MORRIS remains fail-closed for Auth S1", async () => {
    const req = authBuildRequest({ requiredAuthority: "MORRIS" });
    const { issuedAt, expiresAt } = futureWindow();
    const issued = issueS1AuthorityEvidence({
      pilote,
      authorityResolver: stack.decisions.authority,
      contract: semanticFromBuild({
        ...req,
        requiredAuthority: "N3",
        action: "product:push",
      }),
      governedEffects: {
        effectClass: "push",
        rollbackAvailable: true,
        scopeIn: req.scope,
        target: req.target,
      },
      issuedAt,
      expiresAt,
      evidenceId: "evd:sem-morris",
    });
    // Issuance for N3 push works; Build requiring MORRIS with that evidence must deny morris gate.
    expect(issued.ok).toBe(true);
    const built = await stack.execution.buildExecutionContract.execute({
      ...req,
      requiredAuthority: "MORRIS",
      action: "product:push",
      authorityEvidenceId: "evd:sem-morris",
    });
    expect(built.ok).toBe(false);
    if (!built.ok) {
      // Auth cannot issue MORRIS-bound S1; N3 Auth S1 cannot authorize MORRIS build.
      expect(["AUTHORITY_DENIED", "AUTHORITY_SCOPE_MISMATCH"]).toContain(
        built.error.detailCode,
      );
    }
  });

  it("SEM-BUILD-12 canActAsMorris remains false on Auth S1", async () => {
    const req = authBuildRequest();
    const issued = await issueMatchingS1(stack, req);
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.canActAsMorris).toBe(false);
  });
});

describe("SEM-LIFE Auth S1 binding across EC lifecycle", () => {
  async function prepStack(): Promise<Stack> {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    return stack;
  }

  it("SEM-LIFE-01 Validate/Confirm still works with inspection fingerprint binding", async () => {
    const stack = await prepStack();

    const req = authBuildRequest({ requiredAuthority: "N3" });
    expect((await issueMatchingS1(stack, req)).ok).toBe(true);
    const built = await stack.execution.buildExecutionContract.execute(req);
    expect(built.ok).toBe(true);
    if (!built.ok) return;

    const fpBeforeConfirm = computeInspectionFingerprint(built.contract);
    expect(fpBeforeConfirm).toBe(
      stack.decisions.authority.getEvidence("evd:sem-bind-s1")?.scope,
    );

    const validated = await stack.execution.validateExecutionContract.execute({
      executionContractId: req.executionContractId,
      actor: pilote.actor,
      authorityEvidenceId: "evd:sem-bind-s1",
    });
    expect(validated.ok).toBe(true);
    if (!validated.ok) return;
    expect(validated.contract.status).toBe("confirmation_required");

    stack.decisions.authority.register({
      evidenceId: "evd:morris-cfm-sem",
      actorId: "actor:morris",
      level: "N3",
      scope: req.scope,
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
      canActAsMorris: true,
    });
    const confirmationId = await grantConfirmation(stack, {
      decisionRef: "dec:oa-001",
      scope: req.scope,
      evidenceId: "evd:morris-cfm-sem",
    });
    const confirmed = await stack.execution.confirmExecutionContract.execute({
      executionContractId: req.executionContractId,
      confirmationId,
      actor: pilote.actor,
      authorityEvidenceId: "evd:sem-bind-s1",
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;
    expect(computeInspectionFingerprint(confirmed.contract)).toBe(
      fpBeforeConfirm,
    );
    expect(confirmed.contract.confirmationRef).toBe(confirmationId);
    expect(confirmed.contract.immutableAfterConfirm).toBe(true);
  });

  it("SEM-LIFE-02 Auth binding cannot authorize superseding semantic contract", async () => {
    const stack = await prepStack();

    const req = authBuildRequest();
    expect((await issueMatchingS1(stack, req)).ok).toBe(true);
    const built = await stack.execution.buildExecutionContract.execute(req);
    expect(built.ok).toBe(true);

    const supersede = await stack.execution.supersedeExecutionContract.execute({
      newExecutionContractId: "xct:sem-successor",
      supersedesExecutionContractId: req.executionContractId,
      supersessionReason: "intent-change",
      actor: pilote.actor,
      authorityEvidenceId: "evd:sem-bind-s1",
      action: "product:push",
      target: "tgt:changed",
      scope: "biz:changed",
      requiredAuthority: "N3",
      requiredCapabilities: ["cap:git-docs"],
      constraints: ["no-runtime-code"],
      stopConditions: ["AUTHORITY_DENIED"],
      evidenceRequirements: ["evreq:schemas"],
      reversibility: "partially_reversible",
      decisionRefs: req.decisionRefs,
    });
    expect(supersede.ok).toBe(false);
    if (!supersede.ok) {
      expect(supersede.error.detailCode).toBe("AUTHORITY_SCOPE_MISMATCH");
    }
  });

  it("SEM-LIFE-03 Cancel uses current contract semantic binding", async () => {
    const stack = await prepStack();
    const req = authBuildRequest();
    expect((await issueMatchingS1(stack, req)).ok).toBe(true);
    expect((await stack.execution.buildExecutionContract.execute(req)).ok).toBe(
      true,
    );
    const cancelled = await stack.execution.cancelExecutionContract.execute({
      executionContractId: req.executionContractId,
      actor: pilote.actor,
      authorityEvidenceId: "evd:sem-bind-s1",
      reason: "abort",
    });
    expect(cancelled.ok).toBe(true);
  });
});
```

### `projects/sfia-studio/app/__tests__/auth/binding-s1-adversarial.test.ts`

```typescript
/**
 * AUTH-BIND / AUTH-S1 / AUTH-POLICY — adversarial deterministic correction suite.
 * ZERO real GitHub OAuth / OpenAI / web_search.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryAuthorityResolver } from "@/lib/oa/decision";
import {
  createSfiaAuth,
  resetSfiaAuthSingletonForTests,
} from "@/lib/auth/auth";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import { resolveCurrentAuthenticatedPilote } from "@/lib/auth/resolveCurrentPilote";
import { readSessionBoundGithubProviderAccount } from "@/lib/auth/providerAccountBinding";
import {
  issueS1AuthorityEvidence,
  validateS1EvidenceLifetime,
} from "@/lib/auth/s1Authority";
import {
  PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
  resolvePiloteS1AuthorityLevel,
} from "@/lib/auth/piloteS1AuthorityPolicy";
import { SESSION_COOKIE_MAX_AGE_SECONDS } from "@/lib/auth/constants";
import { computeInspectionFingerprint } from "@/lib/oa/execution-contract/domain/inspectionAttestation";
import { headersWithAccountCookie } from "./helpers/accountCookie";

const TEST_ENV = {
  BETTER_AUTH_SECRET: "test-secret-at-least-32-characters-long!!",
  BETTER_AUTH_URL: "http://localhost:3020",
  GITHUB_CLIENT_ID: "test-github-client-id",
  GITHUB_CLIENT_SECRET: "test-github-client-secret",
  SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "11111111,22222222",
} as unknown as NodeJS.ProcessEnv;

function installNetworkSentinel() {
  const hits: string[] = [];
  const originalFetch = globalThis.fetch;
  globalThis.fetch = vi.fn(async (input: RequestInfo | URL) => {
    const url = String(input);
    hits.push(url);
    throw new Error(`NETWORK_SENTINEL_BLOCKED:${url}`);
  }) as typeof fetch;
  return {
    hits,
    restore: () => {
      globalThis.fetch = originalFetch;
    },
  };
}

describe("AUTH-BIND session↔provider (better-auth@1.7.2 account_data)", () => {
  beforeEach(() => {
    resetSfiaAuthSingletonForTests();
  });
  afterEach(() => {
    resetSfiaAuthSingletonForTests();
    vi.restoreAllMocks();
  });

  it("AUTH-BIND-01 A session + A provider subject → PASS", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    const sentinel = installNetworkSentinel();
    try {
      vi.spyOn(auth.api, "getSession").mockResolvedValue({
        user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
        session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
      } as never);

      const r = await resolveCurrentAuthenticatedPilote({
        auth,
        headers,
        env: TEST_ENV,
      });
      expect(r.ok).toBe(true);
      if (r.ok) {
        expect(r.githubUserId).toBe("11111111");
        expect(r.betterAuthUserId).toBe("ba-user-a");
        expect(r.betterAuthUserId).not.toBe(r.githubUserId);
      }
      expect(sentinel.hits.filter((u) => u.includes("api.github.com"))).toEqual(
        [],
      );
    } finally {
      sentinel.restore();
    }
  });

  it("AUTH-BIND-02 B session + A provider/account state → DENY", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-b", name: "B", email: "b@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-b", userId: "ba-user-b", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);

    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("SESSION_USER_MISMATCH");
  });

  it("AUTH-BIND-03 session valid + provider state missing → DENY", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);

    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers: new Headers(),
      env: TEST_ENV,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("PROVIDER_ACCOUNT_MISSING");
  });

  it("AUTH-BIND-04 provider != GitHub → DENY", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
      providerId: "google",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);

    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("PROVIDER_NOT_GITHUB");
  });

  it("AUTH-BIND-05 GitHub accountId malformed → DENY", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "not-a-github-id",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);

    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("GITHUB_ID_INVALID");
  });

  it("AUTH-BIND-06/07/08 hostile claims ignored", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);

    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
      claimedGithubUserId: "22222222",
      claimedRole: "Admin",
      claimedCanActAsMorris: true,
    });
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.githubUserId).toBe("11111111");
      expect(r.actor.role).toBe("decision_maker");
    }
  });

  it("AUTH-BIND-09 allowlist removal after session → DENY", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);

    const removed = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: {
        ...TEST_ENV,
        SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "22222222",
      } as NodeJS.ProcessEnv,
    });
    expect(removed.ok).toBe(false);
    if (!removed.ok) expect(removed.code).toBe("ALLOWLIST_DENIED");
  });

  it("AUTH-BIND-10 two allowlisted users → distinct actor IDs", () => {
    const a = mapGithubIdentityToPiloteActor({ githubUserId: "11111111" });
    const b = mapGithubIdentityToPiloteActor({ githubUserId: "22222222" });
    expect(a.actorId).not.toBe(b.actorId);
  });

  it("AUTH-BIND-11 protected identity resolution → zero GitHub provider network", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);
    const spyAccountInfo = vi.spyOn(auth.api, "accountInfo");
    const sentinel = installNetworkSentinel();
    try {
      await resolveCurrentAuthenticatedPilote({ auth, headers, env: TEST_ENV });
      expect(spyAccountInfo).not.toHaveBeenCalled();
      expect(sentinel.hits).toEqual([]);
    } finally {
      sentinel.restore();
    }
  });

  it("AUTH-BIND-12 cookie payload includes userId; public accountInfo shape does not invent binding", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    const bound = await readSessionBoundGithubProviderAccount({
      auth,
      headers,
      sessionUserId: "ba-user-a",
    });
    expect(bound.ok).toBe(true);
    if (bound.ok) {
      expect(bound.account.betterAuthUserId).toBe("ba-user-a");
      expect(bound.account.githubUserId).toBe("11111111");
    }

    // Missing userId in cookie → deny (cannot bind)
    const headersNoUser = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
      omitUserId: true,
    });
    const missing = await readSessionBoundGithubProviderAccount({
      auth,
      headers: headersNoUser,
      sessionUserId: "ba-user-a",
    });
    expect(missing.ok).toBe(false);
    if (!missing.ok) expect(missing.code).toBe("ACCOUNT_USER_ID_MISSING");
  });
});

describe("AUTH-POLICY S1 level", () => {
  it("AUTH-POLICY-01 login alone does not imply N3 — NOT PROVEN without governed effects", () => {
    const policy = resolvePiloteS1AuthorityLevel();
    expect(policy.ok).toBe(false);
    if (!policy.ok) {
      expect(policy.code).toBe(PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN);
    }
  });

  it("AUTH-S1-01 issueS1 without contract fails; with read contract → N1", () => {
    const resolver = new MemoryAuthorityResolver();
    const issuedAt = new Date().toISOString();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
    const pilote = {
      ok: true as const,
      githubUserId: "11111111",
      betterAuthUserId: "ba-user-a",
      actor: mapGithubIdentityToPiloteActor({ githubUserId: "11111111" }),
    };
    const blocked = issueS1AuthorityEvidence({
      pilote,
      authorityResolver: resolver,
      issuedAt,
      expiresAt,
    });
    expect(blocked.ok).toBe(false);
    if (!blocked.ok) {
      expect(blocked.code).toBe(PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN);
    }

    const contract = {
      executionContractId: "xct:auth-s1-01",
      projectId: "prj:demo",
      action: "product:read",
      target: "tgt:demo",
      scope: "biz:demo",
      requiredAuthority: "N1" as const,
      requiredCapabilities: ["cap:demo"],
      constraints: ["c:demo"],
      stopConditions: ["stop:demo"],
      evidenceRequirements: ["evreq:demo"],
      reversibility: "partially_reversible" as const,
      idempotencyKey: "idem:auth-s1-01",
    };
    const ok = issueS1AuthorityEvidence({
      pilote,
      authorityResolver: resolver,
      contract,
      governedEffects: {
        effectClass: "read",
        rollbackAvailable: true,
        protectedBoundaries: [],
        scopeIn: contract.scope,
        target: contract.target,
      },
      issuedAt,
      expiresAt,
      evidenceId: "evd:auth-s1-01",
    });
    expect(ok.ok).toBe(true);
    if (ok.ok) {
      expect(ok.evidence.level).toBe("N1");
      expect(ok.evidence.canActAsMorris).toBe(false);
      expect(ok.evidence.scope).toBe(computeInspectionFingerprint(contract));
    }
  });
});

describe("AUTH-S1 lifetime + collision integrity", () => {
  const pilote = {
    ok: true as const,
    githubUserId: "11111111",
    betterAuthUserId: "ba-user-a",
    actor: mapGithubIdentityToPiloteActor({ githubUserId: "11111111" }),
  };

  it("AUTH-S1-02 missing/empty expiresAt → FAIL", () => {
    expect(
      validateS1EvidenceLifetime({
        issuedAt: "2026-09-04T12:00:00.000Z",
        expiresAt: "",
      }).ok,
    ).toBe(false);
  });

  it("AUTH-S1-03 invalid issuedAt → FAIL", () => {
    const r = validateS1EvidenceLifetime({
      issuedAt: "not-a-date",
      expiresAt: "2026-09-04T13:00:00.000Z",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("INVALID_ISSUED_AT");
  });

  it("AUTH-S1-04 invalid expiresAt → FAIL", () => {
    const r = validateS1EvidenceLifetime({
      issuedAt: "2026-09-04T12:00:00.000Z",
      expiresAt: "nope",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("INVALID_EXPIRES_AT");
  });

  it("AUTH-S1-05 expiresAt <= issuedAt → FAIL", () => {
    const r = validateS1EvidenceLifetime({
      issuedAt: "2026-09-04T12:00:00.000Z",
      expiresAt: "2026-09-04T12:00:00.000Z",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("INVALID_EVIDENCE_LIFETIME");
  });

  it("AUTH-S1-06 TTL over session max → FAIL", () => {
    const issuedAt = "2026-09-04T12:00:00.000Z";
    const overMs =
      Date.parse(issuedAt) + (SESSION_COOKIE_MAX_AGE_SECONDS + 1) * 1000;
    const r = validateS1EvidenceLifetime({
      issuedAt,
      expiresAt: new Date(overMs).toISOString(),
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("INVALID_EVIDENCE_LIFETIME");
  });

  it("AUTH-S1-07 evidence expired → resolver refuses", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = {
      executionContractId: "xct:expired-test",
      projectId: "prj:demo",
      action: "product:read",
      target: "tgt:demo",
      scope: "biz:demo",
      requiredAuthority: "N1" as const,
      requiredCapabilities: ["cap:demo"],
      constraints: ["c:demo"],
      stopConditions: ["stop:demo"],
      evidenceRequirements: ["evreq:demo"],
      reversibility: "partially_reversible" as const,
      idempotencyKey: "idem:expired",
    };
    const built = issueS1AuthorityEvidence({
      pilote,
      authorityResolver: resolver,
      contract,
      governedEffects: {
        effectClass: "read",
        rollbackAvailable: true,
        protectedBoundaries: [],
        scopeIn: contract.scope,
        target: contract.target,
      },
      issuedAt: "2020-01-01T00:00:00.000Z",
      expiresAt: "2020-01-01T01:00:00.000Z",
      evidenceId: "evd:expired-test",
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    const v = resolver.verify({
      actorId: pilote.actor.actorId,
      requiredLevel: "N1",
      scope: computeInspectionFingerprint(contract),
      evidenceId: "evd:expired-test",
    });
    expect(v.ok).toBe(false);
    expect(v.reason).toBe("expired");
  });

  it("AUTH-S1-08/09 duplicate evidenceId → FAIL-CLOSED; registry unchanged", () => {
    const resolver = new MemoryAuthorityResolver();
    const issuedAt = new Date().toISOString();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
    const contract = {
      executionContractId: "xct:collision",
      projectId: "prj:demo",
      action: "product:read",
      target: "tgt:demo",
      scope: "biz:demo",
      requiredAuthority: "N1" as const,
      requiredCapabilities: ["cap:demo"],
      constraints: ["c:demo"],
      stopConditions: ["stop:demo"],
      evidenceRequirements: ["evreq:demo"],
      reversibility: "partially_reversible" as const,
      idempotencyKey: "idem:collision",
    };
    const first = issueS1AuthorityEvidence({
      pilote,
      authorityResolver: resolver,
      contract,
      governedEffects: {
        effectClass: "read",
        rollbackAvailable: true,
        protectedBoundaries: [],
        scopeIn: contract.scope,
        target: contract.target,
      },
      issuedAt,
      expiresAt,
      evidenceId: "evd:collision",
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;

    const second = issueS1AuthorityEvidence({
      pilote,
      authorityResolver: resolver,
      contract: {
        ...contract,
        executionContractId: "xct:collision-other",
        idempotencyKey: "idem:collision-other",
      },
      governedEffects: {
        effectClass: "read",
        rollbackAvailable: true,
        protectedBoundaries: [],
        scopeIn: contract.scope,
        target: contract.target,
      },
      issuedAt,
      expiresAt,
      evidenceId: "evd:collision",
    });
    expect(second.ok).toBe(false);
    if (!second.ok) expect(second.code).toBe("EVIDENCE_ID_COLLISION");

    const stored = resolver.getEvidence("evd:collision");
    expect(stored?.canActAsMorris).toBe(false);
    expect(stored?.level).toBe("N1");
    expect(stored?.actorId).toBe(pilote.actor.actorId);
    expect(stored?.scope).toBe(computeInspectionFingerprint(contract));
  });

  it("AUTH-S1-10/11/12/13 actor/scope/morris/canActAsMorris invariants", () => {
    const resolver = new MemoryAuthorityResolver();
    const issuedAt = new Date().toISOString();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
    const contract = {
      executionContractId: "xct:verify",
      projectId: "prj:demo",
      action: "product:commit",
      target: "tgt:demo",
      scope: "biz:demo",
      requiredAuthority: "N2" as const,
      requiredCapabilities: ["cap:demo"],
      constraints: ["c:demo"],
      stopConditions: ["stop:demo"],
      evidenceRequirements: ["evreq:demo"],
      reversibility: "partially_reversible" as const,
      idempotencyKey: "idem:verify",
    };
    const built = issueS1AuthorityEvidence({
      pilote,
      authorityResolver: resolver,
      contract,
      governedEffects: {
        effectClass: "commit",
        rollbackAvailable: true,
        protectedBoundaries: [],
        scopeIn: contract.scope,
        target: contract.target,
      },
      issuedAt,
      expiresAt,
      evidenceId: "evd:verify",
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    expect(built.evidence.canActAsMorris).toBe(false);

    expect(
      resolver.verify({
        actorId: "actor:github:22222222",
        requiredLevel: "N2",
        scope: computeInspectionFingerprint(contract),
        evidenceId: "evd:verify",
      }).reason,
    ).toBe("actor_mismatch");

    expect(
      resolver.verify({
        actorId: pilote.actor.actorId,
        requiredLevel: "N2",
        scope: "xct:other",
        evidenceId: "evd:verify",
      }).reason,
    ).toBe("scope_mismatch");

    expect(
      resolver.verify({
        actorId: pilote.actor.actorId,
        requiredLevel: "N2",
        scope: computeInspectionFingerprint(contract),
        evidenceId: "evd:verify",
        requireMorrisGate: true,
      }).reason,
    ).toBe("morris_gate_denied");
  });
});
```

### `projects/sfia-studio/app/__tests__/auth/allowlist-actor-s1.test.ts`

```typescript
/**
 * AUTH-D01→D26 — allowlist, actor mapping, S1 authority, hostile input.
 * ZERO real GitHub OAuth.
 */

import { describe, expect, it } from "vitest";
import { MemoryAuthorityResolver } from "@/lib/oa/decision";
import {
  authorizeByGithubLoginOrEmail,
  canonicalizeGithubUserId,
  isGithubUserAllowed,
  parseAllowedGithubUserIds,
} from "@/lib/auth/allowlist";
import {
  githubActorId,
  mapGithubIdentityToPiloteActor,
} from "@/lib/auth/actorMapping";
import { issueS1AuthorityEvidence } from "@/lib/auth/s1Authority";
import {
  BETTER_AUTH_GITHUB_MULTI_USER_S1,
  PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
} from "@/lib/auth";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import { computeInspectionFingerprint } from "@/lib/oa/execution-contract/domain/inspectionAttestation";

describe("AUTH allowlist multi-user", () => {
  it("AUTH-D01 parses two valid users", () => {
    const r = parseAllowedGithubUserIds("11111111,22222222");
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.ids).toEqual(["11111111", "22222222"]);
  });

  it("AUTH-D02 parses N users", () => {
    const r = parseAllowedGithubUserIds("1,2,3,4,5");
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.ids).toHaveLength(5);
  });

  it("AUTH-D03 deduplicates", () => {
    const r = parseAllowedGithubUserIds("10,10, 11 ,10");
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.ids).toEqual(["10", "11"]);
  });

  it("AUTH-D04 missing config fails closed", () => {
    const r = parseAllowedGithubUserIds(undefined);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("ALLOWLIST_MISSING");
  });

  it("AUTH-D05 empty config fails closed", () => {
    const r = parseAllowedGithubUserIds("   ");
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("ALLOWLIST_EMPTY");
  });

  it("AUTH-D06 malformed member fails closed", () => {
    expect(parseAllowedGithubUserIds("12,abc").ok).toBe(false);
    expect(parseAllowedGithubUserIds("12,").ok).toBe(false);
    expect(parseAllowedGithubUserIds("0").ok).toBe(false);
    expect(parseAllowedGithubUserIds("-1").ok).toBe(false);
    expect(parseAllowedGithubUserIds("1.5").ok).toBe(false);
  });

  it("AUTH-D07 login/email/displayName cannot authorize", () => {
    expect(authorizeByGithubLoginOrEmail("morris")).toBe(false);
    expect(authorizeByGithubLoginOrEmail("a@b.co")).toBe(false);
    const ids = ["11111111"];
    expect(isGithubUserAllowed("morris", ids)).toBe(false);
  });

  it("AUTH-D08/D09/D10 allow A+B deny C", () => {
    const ids = ["11111111", "22222222"];
    expect(isGithubUserAllowed("11111111", ids)).toBe(true);
    expect(isGithubUserAllowed("22222222", ids)).toBe(true);
    expect(isGithubUserAllowed("33333333", ids)).toBe(false);
  });

  it("AUTH-D14/D15 removal A blocks A not B", () => {
    let ids = ["11111111", "22222222"];
    ids = ids.filter((id) => id !== "11111111");
    expect(isGithubUserAllowed("11111111", ids)).toBe(false);
    expect(isGithubUserAllowed("22222222", ids)).toBe(true);
  });
});

describe("AUTH actor mapping", () => {
  it("AUTH-D11/D12/D13/D22 distinct Pilote actors", () => {
    const a = mapGithubIdentityToPiloteActor({
      githubUserId: "11111111",
      displayName: "Alice",
    });
    const b = mapGithubIdentityToPiloteActor({
      githubUserId: "22222222",
      displayName: "Bob",
    });
    expect(a.actorId).toBe("actor:github:11111111");
    expect(b.actorId).toBe("actor:github:22222222");
    expect(a.actorId).not.toBe(b.actorId);
    expect(a.role).toBe("decision_maker");
    expect(b.role).toBe("decision_maker");
    expect(a.authorityLevel).toBe("none");
    expect(b.authorityLevel).toBe("none");
  });

  it("AUTH-D26 historical local-pilote id remains distinct", () => {
    expect(LOCAL_PILOTE_ACTOR.actorId).toBe("actor:local-pilote");
    expect(githubActorId("11111111")).not.toBe(LOCAL_PILOTE_ACTOR.actorId);
  });
});

describe("AUTH S1 AuthorityEvidence", () => {
  it("AUTH-D23/D24/D25 no auto-N3; collision-safe register; canActAsMorris false", () => {
    const resolver = new MemoryAuthorityResolver();
    const piloteA = {
      ok: true as const,
      githubUserId: "11111111",
      betterAuthUserId: "ba-user-a",
      actor: mapGithubIdentityToPiloteActor({ githubUserId: "11111111" }),
    };
    const piloteB = {
      ok: true as const,
      githubUserId: "22222222",
      betterAuthUserId: "ba-user-b",
      actor: mapGithubIdentityToPiloteActor({ githubUserId: "22222222" }),
    };

    const issuedAt = new Date().toISOString();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();

    const blocked = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      issuedAt,
      expiresAt,
    });
    expect(blocked.ok).toBe(false);
    if (!blocked.ok) {
      expect(blocked.code).toBe(PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN);
    }

    const contract = {
      executionContractId: "xct:auth-d23",
      projectId: "prj:demo",
      action: "product:read",
      target: "tgt:demo",
      scope: "biz:demo",
      requiredAuthority: "N1" as const,
      requiredCapabilities: ["cap:demo"],
      constraints: ["c:demo"],
      stopConditions: ["stop:demo"],
      evidenceRequirements: ["evreq:demo"],
      reversibility: "partially_reversible" as const,
      idempotencyKey: "idem:auth-d23",
    };
    const bind = computeInspectionFingerprint(contract);
    const issued = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      contract,
      governedEffects: {
        effectClass: "read",
        rollbackAvailable: true,
        protectedBoundaries: [],
        scopeIn: contract.scope,
        target: contract.target,
      },
      issuedAt,
      expiresAt,
      evidenceId: "evd:github-s1:test-a",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.source).toBe(BETTER_AUTH_GITHUB_MULTI_USER_S1);
    expect(issued.evidence.canActAsMorris).toBe(false);
    expect(issued.evidence.scope).toBe(bind);

    const okA = resolver.verify({
      actorId: piloteA.actor.actorId,
      requiredLevel: "N1",
      scope: bind,
      evidenceId: issued.evidence.evidenceId,
      requireMorrisGate: false,
    });
    expect(okA.ok).toBe(true);

    const misuseB = resolver.verify({
      actorId: piloteB.actor.actorId,
      requiredLevel: "N1",
      scope: bind,
      evidenceId: issued.evidence.evidenceId,
    });
    expect(misuseB.ok).toBe(false);
    expect(misuseB.reason).toBe("actor_mismatch");

    const morrisGate = resolver.verify({
      actorId: piloteA.actor.actorId,
      requiredLevel: "N1",
      scope: bind,
      evidenceId: issued.evidence.evidenceId,
      requireMorrisGate: true,
    });
    expect(morrisGate.ok).toBe(false);
    expect(morrisGate.reason).toBe("morris_gate_denied");
  });

  it("AUTH-D16/D17/D18 canonicalize ignores hostile non-id shapes", () => {
    expect(canonicalizeGithubUserId("11111111")).toBe("11111111");
    expect(canonicalizeGithubUserId(11111111)).toBe("11111111");
    expect(canonicalizeGithubUserId("Pilote")).toBeNull();
    expect(canonicalizeGithubUserId({ canActAsMorris: true })).toBeNull();
    expect(canonicalizeGithubUserId(true)).toBeNull();
  });
});
```



## H. Authority precedence proof

- Removed `governedEffects.contractRequiredAuthority` from Auth policy path
- `contract.requiredAuthority` mandatory; checked directly vs `projectRequiredAuthorityFromEffects`
- AUTHSEM-A01 missing → DENY
- AUTHSEM-A02 contract=N1 / push projection=N3 / hostile effects.contractRequiredAuthority=N3 → DENY (masking impossible)
- AUTHSEM-A03 contract=N3 / read projection=N1 / hostile N1 → DENY
- AUTHSEM-A04 contract=N3 / projection=N3 → PASS
- AUTHSEM-A05 claimedRequiredAuthority cannot alter level

## I. Semantic-binding mechanism

1. Issuance: `authorityBindingScope = computeInspectionFingerprint(contract)` → AE.scope
2. Build: preBuildSemantic from snap+cloned arrays → `resolveExecutionAuthorityVerifyScope` recomputes fingerprint for Auth S1 source
3. Other EC gates: pass existing/successor contract as contractSemantic
4. Non-Auth: still business contract.scope
5. Lifecycle: inspection FP unchanged after confirmationRef set

## J. Same-ID adversarial proof (actual BuildExecutionContract)

- SEM-BUILD-01 PASS exact A
- SEM-BUILD-02 DENY different action
- SEM-BUILD-03 DENY different target
- SEM-BUILD-04 DENY different business scope
- SEM-BUILD-05 DENY N3-push S1 vs read/N1 Build despite hierarchy
- SEM-BUILD-06 DENY requiredAuthority change
- SEM-BUILD-07 no unauthorized persist
- SEM-BUILD-08 exact match still verifies
- SEM-BUILD-09 non-Auth registry path preserved
- SEM-BUILD-10 ID A ↛ ID B
- SEM-BUILD-11 MORRIS fail-closed
- SEM-BUILD-12 canActAsMorris=false

## K. Non-Auth regression

SEM-BUILD-09 + full EC suite 143/143 PASS

## L. N3≠Morris

SEM-BUILD-11/12 + REG-08 + POLICY-05 PASS

## M. Test outputs

```
npx vitest run __tests__/auth
# 6 files, 103 tests PASS

npx vitest run __tests__/oa/decision __tests__/oa/execution-contract
# 15 files, 143 tests PASS

npx vitest run
# 288 passed | 16 skipped; 2741 passed | 134 skipped

npx tsc --noEmit → 0
npm run lint → No ESLint warnings or errors
npm run build → Compiled successfully
git diff --check → 0
```

## N. Fake/Real

DETERMINISTIC ONLY · REAL=0

## O. MW6 preservation

FP before=after `20828a426746d9cf8ff7213de13a3d4a7091a407c8bd9cc168f2e0c0b3b983f9`
**MW6 UNTOUCHED = YES**

## P. Debt/reserves

T-A4 generic requiredAuthority · AUTH REAL · MW6 binding · auth→W3-A + auth→inspectionFingerprint coupling (accepted reuse)

## Q. Claims

Allowed: AUTH deterministic semantic-binding policy closure proven; ready for ChatGPT final deterministic re-review.
Forbidden: AUTH REAL; MW6 BOUND/REAL/COMPLETE; runtime v3 ADOPTED; production-ready auth.

## R. Verdict

**READY FOR CHATGPT AUTH POLICY FINAL DETERMINISTIC RE-REVIEW**

REVIEW HANDOFF PUBLICATION = NOT PERFORMED — NO MORRIS PUSH GO
