/**
 * MW6 ↔ Auth — server-side Mw6GovernedAuthorityContext composition.
 *
 * Assembles already-existing Studio/Auth/OA primitives only:
 * - authenticated Pilote (caller-supplied from resolveCurrentAuthenticatedPilote)
 * - GetExecutionContract / CheckExecutionAuthorization / AuthorityResolver
 *   from RuntimeOaStack
 * - canonical authorityEvidenceId via retrieve-or-issue on the adopted S1 path
 *
 * Does NOT: decide N2 policy, persist new registries, invent AuthorityResolver,
 * accept client-built governedAuthority / ports / actor as truth.
 *
 * Note: types live here (auth) to avoid auth↔nora import cycles.
 * campaignBudget.Mw6GovernedAuthorityContext is structurally compatible.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { computeInspectionFingerprint } from "@/lib/oa/execution-contract/domain/inspectionAttestation";
import { MW6_EXTERNAL_DISCOVERY_ACTION } from "@/lib/auth/piloteS1AuthorityPolicy";
import {
  assertMw6ExternalDiscoveryEffectiveHumanAuthorization,
  buildMw6ExternalDiscoveryGovernedEffects,
  issueMw6ExternalDiscoveryS1,
  type Mw6ExternalDiscoveryContractInput,
} from "@/lib/auth/mw6ExternalDiscoveryBinding";
import { issueS1AuthorityEvidence } from "@/lib/auth/s1Authority";
import type { ResolveCurrentPiloteResult } from "@/lib/auth/resolveCurrentPilote";
import { S1_MAX_TTL_SECONDS } from "@/lib/auth/constants";

const SERVER_COMPOSED = Symbol.for("sfia.mw6.serverComposedGovernedAuthority");

const composedContexts = new WeakSet<object>();

/** True iff context was built by composeMw6GovernedAuthorityForCurrentPilote. */
export function wasServerComposedMw6GovernedAuthority(
  ctx: object | null | undefined,
): boolean {
  if (!ctx || typeof ctx !== "object") return false;
  return (
    composedContexts.has(ctx) ||
    (ctx as { [SERVER_COMPOSED]?: boolean })[SERVER_COMPOSED] === true
  );
}

/**
 * Server-composed governed authority bag — structurally compatible with
 * nora-cognitive-runtime Mw6GovernedAuthorityContext.
 */
export type ServerComposedMw6GovernedAuthority = {
  actorId: string;
  authorityEvidenceId: string;
  executionContractId: string;
  requiredLevel: "N2";
  getExecutionContract: RuntimeOaStack["executionContractServices"]["getExecutionContract"];
  checkExecutionAuthorization: RuntimeOaStack["executionContractServices"]["checkExecutionAuthorization"];
  authorityResolver: RuntimeOaStack["authorityResolver"];
};

export type ComposeMw6GovernedAuthorityInput = {
  readonly oa: RuntimeOaStack;
  readonly pilote: Extract<ResolveCurrentPiloteResult, { ok: true }>;
  readonly projectId: string;
  /** Untrusted reference — content/authority loaded canonically. */
  readonly executionContractId: string;
  /**
   * Optional untrusted evidence hint. Accepted only when it verifies for the
   * authenticated Pilote against the loaded EC inspection fingerprint.
   * Cannot invent authority; wrong hint → DENY.
   */
  readonly claimedAuthorityEvidenceId?: unknown;
};

export type Mw6AuthorityEvidenceCompositionSource =
  | "claimed_verified"
  | "resolver_scope_match"
  | "w3a_auth_s1_deterministic"
  | "issued_mw6_s1_from_loaded_ec";

export type ComposeMw6GovernedAuthorityResult =
  | {
      ok: true;
      governedAuthority: ServerComposedMw6GovernedAuthority;
      authorityEvidenceId: string;
      executionContractId: string;
      evidenceSource: Mw6AuthorityEvidenceCompositionSource;
    }
  | { ok: false; code: string; message: string };

function contractToMw6Intent(contract: {
  executionContractId: string;
  projectId: string;
  scope: string;
  target: string;
  cycleInstanceId?: string;
  decisionRefs?: string[];
  inputs?: Record<string, unknown>;
  expectedOutputs?: string[];
  constraints?: string[];
  stopConditions?: string[];
  evidenceRequirements?: string[];
  idempotencyKey: string;
  adapterExportRef?: string;
}): Mw6ExternalDiscoveryContractInput {
  return {
    executionContractId: contract.executionContractId,
    projectId: contract.projectId,
    scope: contract.scope,
    target: contract.target,
    cycleInstanceId: contract.cycleInstanceId,
    decisionRefs: contract.decisionRefs ? [...contract.decisionRefs] : undefined,
    inputs: contract.inputs,
    expectedOutputs: contract.expectedOutputs
      ? [...contract.expectedOutputs]
      : undefined,
    constraints: contract.constraints ? [...contract.constraints] : undefined,
    stopConditions: contract.stopConditions
      ? [...contract.stopConditions]
      : undefined,
    evidenceRequirements: contract.evidenceRequirements
      ? [...contract.evidenceRequirements]
      : undefined,
    idempotencyKey: contract.idempotencyKey,
    adapterExportRef: contract.adapterExportRef,
  };
}

function markServerComposed(
  ctx: ServerComposedMw6GovernedAuthority,
): ServerComposedMw6GovernedAuthority {
  composedContexts.add(ctx);
  Object.defineProperty(ctx, SERVER_COMPOSED, {
    value: true,
    enumerable: false,
    configurable: false,
    writable: false,
  });
  return ctx;
}

/**
 * Compose Mw6GovernedAuthorityContext for the current authenticated Pilote.
 *
 * Evidence source order (canonical):
 * 1. claimedAuthorityEvidenceId if string and verifies for pilote+EC fingerprint
 * 2. AuthorityResolver.listByActor scope-match on EC fingerprint
 * 3. deterministic W3-A Auth S1 id `evd:w3a-auth-s1:${decisionRefs[0]}` if present+valid
 * 4. issueMw6ExternalDiscoveryS1 from loaded EC semantic (adopted S1 path; no new store)
 */
export async function composeMw6GovernedAuthorityForCurrentPilote(
  input: ComposeMw6GovernedAuthorityInput,
): Promise<ComposeMw6GovernedAuthorityResult> {
  const executionContractId = input.executionContractId.trim();
  if (!executionContractId) {
    return {
      ok: false,
      code: "EXECUTION_CONTRACT_ID_REQUIRED",
      message: "executionContractId reference is required.",
    };
  }

  const { oa, pilote } = input;
  const loaded =
    await oa.executionContractServices.getExecutionContract.execute({
      executionContractId,
    });
  if (!loaded.ok) {
    return {
      ok: false,
      code: loaded.error.detailCode,
      message: "ExecutionContract introuvable — composition refusée.",
    };
  }
  const contract = loaded.contract;

  if (contract.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message: "ExecutionContract n'appartient pas au projet demandé.",
    };
  }
  if (contract.action !== MW6_EXTERNAL_DISCOVERY_ACTION) {
    return {
      ok: false,
      code: "ACTION_NOT_EXTERNAL_DISCOVERY",
      message: "ExecutionContract action ≠ product:external-discovery.",
    };
  }
  if (contract.requiredAuthority !== "N2") {
    return {
      ok: false,
      code: "REQUIRED_AUTHORITY_NOT_N2",
      message: "ExecutionContract requiredAuthority ≠ N2.",
    };
  }

  const humanAuth = assertMw6ExternalDiscoveryEffectiveHumanAuthorization({
    executionContractId: contract.executionContractId,
    projectId: contract.projectId,
    status: contract.status,
    requiredAuthority: contract.requiredAuthority,
    action: contract.action,
    target: contract.target,
    scope: contract.scope,
    confirmationRef: contract.confirmationRef,
    decisionRefs: contract.decisionRefs,
    cycleInstanceId: contract.cycleInstanceId,
    inputs: contract.inputs,
    expectedOutputs: contract.expectedOutputs,
    requiredCapabilities: contract.requiredCapabilities,
    constraints: contract.constraints,
    stopConditions: contract.stopConditions,
    evidenceRequirements: contract.evidenceRequirements,
    reversibility: contract.reversibility,
    idempotencyKey: contract.idempotencyKey,
    adapterExportRef: contract.adapterExportRef,
  });
  if (!humanAuth.ok) {
    return {
      ok: false,
      code: "HUMAN_AUTHORIZATION_NOT_READY",
      message: humanAuth.reason,
    };
  }

  const intent = contractToMw6Intent(contract);
  // Must match CheckExecutionAuthorization Auth-S1 verify scope exactly:
  // computeInspectionFingerprint(loaded contract) — not a rebuilt subset.
  const fingerprint = computeInspectionFingerprint(contract);
  const actorId = pilote.actor.actorId;
  const resolver = oa.authorityResolver;

  const tryEvidence = (
    evidenceId: string,
  ): { ok: true; evidenceId: string } | { ok: false; reason: string } => {
    const ev = resolver.getEvidence(evidenceId);
    if (!ev) return { ok: false, reason: "evidence_not_found" };
    if (ev.actorId !== actorId) return { ok: false, reason: "actor_mismatch" };
    if (ev.scope !== fingerprint) return { ok: false, reason: "scope_mismatch" };
    const verified = resolver.verify({
      actorId,
      evidenceId,
      scope: fingerprint,
      requiredLevel: "N2",
      requireMorrisGate: false,
    });
    if (!verified.ok) return { ok: false, reason: verified.reason };
    if (verified.canActAsMorris === true) {
      return { ok: false, reason: "canActAsMorris_not_permitted" };
    }
    return { ok: true, evidenceId };
  };

  let authorityEvidenceId: string | null = null;
  let evidenceSource: Mw6AuthorityEvidenceCompositionSource =
    "issued_mw6_s1_from_loaded_ec";

  if (typeof input.claimedAuthorityEvidenceId === "string") {
    const claimed = input.claimedAuthorityEvidenceId.trim();
    if (claimed) {
      const tried = tryEvidence(claimed);
      if (!tried.ok) {
        return {
          ok: false,
          code: "HOSTILE_EVIDENCE_OVERRIDE_DENIED",
          message: `claimed authorityEvidenceId rejected: ${tried.reason}`,
        };
      }
      authorityEvidenceId = tried.evidenceId;
      evidenceSource = "claimed_verified";
    }
  }

  if (!authorityEvidenceId) {
    const candidates = resolver.listByActor(actorId);
    const match = candidates.find((e) => e.scope === fingerprint);
    if (match) {
      const tried = tryEvidence(match.evidenceId);
      if (tried.ok) {
        authorityEvidenceId = tried.evidenceId;
        evidenceSource = "resolver_scope_match";
      }
    }
  }

  if (!authorityEvidenceId) {
    const decisionId = (contract.decisionRefs ?? [])[0];
    if (decisionId) {
      const w3aId = `evd:w3a-auth-s1:${decisionId}`;
      const tried = tryEvidence(w3aId);
      if (tried.ok) {
        authorityEvidenceId = tried.evidenceId;
        evidenceSource = "w3a_auth_s1_deterministic";
      }
    }
  }

  if (!authorityEvidenceId) {
    const deterministicId = `evd:mw6-ext-s1:${contract.executionContractId}`;
    const existing = resolver.getEvidence(deterministicId);
    if (existing) {
      const tried = tryEvidence(deterministicId);
      if (!tried.ok) {
        return {
          ok: false,
          code: "STALE_EVIDENCE_FOR_CURRENT_EC",
          message: `Existing MW6 S1 evidence no longer matches current EC fingerprint (${tried.reason}).`,
        };
      }
      authorityEvidenceId = tried.evidenceId;
      evidenceSource = "issued_mw6_s1_from_loaded_ec";
    } else {
      const issuedAt = new Date().toISOString();
      const issuedAtMs = Date.parse(issuedAt);
      const expiresAt = Number.isFinite(issuedAtMs)
        ? new Date(issuedAtMs + S1_MAX_TTL_SECONDS * 1000).toISOString()
        : issuedAt;
      // Issue against the loaded EC semantic so CheckAuthorization verify scope matches.
      const issued = issueS1AuthorityEvidence({
        pilote,
        authorityResolver: resolver,
        contract: {
          executionContractId: contract.executionContractId,
          projectId: contract.projectId,
          cycleInstanceId: contract.cycleInstanceId,
          decisionRefs: contract.decisionRefs
            ? [...contract.decisionRefs]
            : undefined,
          action: contract.action,
          target: contract.target,
          scope: contract.scope,
          inputs: contract.inputs,
          expectedOutputs: contract.expectedOutputs
            ? [...contract.expectedOutputs]
            : undefined,
          requiredCapabilities: [...contract.requiredCapabilities],
          requiredAuthority: contract.requiredAuthority,
          constraints: [...contract.constraints],
          stopConditions: [...contract.stopConditions],
          evidenceRequirements: [...contract.evidenceRequirements],
          reversibility: contract.reversibility,
          executionWindowClass: contract.executionWindowClass,
          idempotencyKey: contract.idempotencyKey,
          adapterExportRef: contract.adapterExportRef,
        },
        governedEffects: buildMw6ExternalDiscoveryGovernedEffects({
          scope: contract.scope,
          target: contract.target,
        }),
        issuedAt,
        expiresAt,
        evidenceId: deterministicId,
      });
      if (!issued.ok) {
        // Fallback: MW6 intent builder path (may diverge if EC lacks window class).
        const fallback = issueMw6ExternalDiscoveryS1({
          pilote,
          authorityResolver: resolver,
          contract: intent,
          issuedAt,
          expiresAt,
          evidenceId: deterministicId,
        });
        if (!fallback.ok) {
          return {
            ok: false,
            code: issued.code,
            message: issued.message,
          };
        }
        authorityEvidenceId = fallback.evidence.evidenceId;
        evidenceSource = "issued_mw6_s1_from_loaded_ec";
      } else {
        authorityEvidenceId = issued.evidence.evidenceId;
        evidenceSource = "issued_mw6_s1_from_loaded_ec";
      }
    }
  }

  const governedAuthority = markServerComposed({
    actorId,
    authorityEvidenceId,
    executionContractId: contract.executionContractId,
    requiredLevel: "N2",
    getExecutionContract: oa.executionContractServices.getExecutionContract,
    checkExecutionAuthorization:
      oa.executionContractServices.checkExecutionAuthorization,
    authorityResolver: resolver,
  });

  return {
    ok: true,
    governedAuthority,
    authorityEvidenceId,
    executionContractId: contract.executionContractId,
    evidenceSource,
  };
}
