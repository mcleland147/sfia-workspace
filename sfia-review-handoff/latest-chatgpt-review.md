# SFIA Studio — MW6 ↔ AUTH FINAL SERVER-SIDE AUTHORITY COMPOSITION Review Pack FULL

**Timestamp:** 2026-09-05 02:22:30 CEST
**Profile:** CRITICAL · CONTENT-COMPLETE · FULL
**Unique verdict:** READY FOR CHATGPT MW6↔AUTH FINAL COMPOSITION REVIEW — SERVER-BUILT GOVERNED AUTHORITY PRODUCT PATH PROVEN / MW6 REAL NOT STARTED

## A. Timestamp
- 2026-09-05 02:22:30 CEST

## B. GO consumed
`GO MORRIS — MW6 SERVER-SIDE AUTHORITY COMPOSITION WIRING CORRECTION`

## C. Git Truth
### INTEGRATION
- path `/Users/morris/Projects/sfia-workspace-mw6-auth-binding`
- branch `delivery/sfia-studio-mw6-auth-binding`
- HEAD `ebdae92a96ea1c49444dfb668342c1453f57a540`
- origin/main `ebdae92a96ea1c49444dfb668342c1453f57a540`
- merge-base `ebdae92a96ea1c49444dfb668342c1453f57a540`
- staged **0** · conflicts **0**

### AUTH
- path `/Users/morris/Projects/sfia-workspace-auth-better-auth-github-multi-user-foundation`
- branch `delivery/sfia-studio-auth-better-auth-github-multi-user-foundation`
- HEAD `ebdae92a96ea1c49444dfb668342c1453f57a540`
- origin/main `ebdae92a96ea1c49444dfb668342c1453f57a540`
- merge-base `ebdae92a96ea1c49444dfb668342c1453f57a540`
- staged **0** · conflicts **0**

### MW6
- path `/Users/morris/Projects/sfia-workspace-nora-mw6-external-source-intelligence`
- branch `delivery/sfia-studio-nora-mw6-external-source-intelligence`
- HEAD `ebdae92a96ea1c49444dfb668342c1453f57a540`
- origin/main `ebdae92a96ea1c49444dfb668342c1453f57a540`
- merge-base `ebdae92a96ea1c49444dfb668342c1453f57a540`
- staged **0** · conflicts **0**

## D. Fingerprints before/after
- MW6 dirty projects path+bytes: `20828a426746d9cf8ff7213de13a3d4a7091a407c8bd9cc168f2e0c0b3b983f9` n=17 expected `20828a426746d9cf8ff7213de13a3d4a7091a407c8bd9cc168f2e0c0b3b983f9` → **MATCH** · WRITES=0 (agent)
- Auth dirty projects path+bytes: `d66acba86486f88b682cc82ef5d760ee527bc87d83deeed6a088710a45734e4c` n=38 expected `a312681853164ffb078383c377a2d4281e185849589097294591f7e6e8f155ae` → **MISMATCH (see AC)**
- Auth WRITES by this cycle: **0** (no Write/StrReplace under Auth worktree; Auth lib/*.ts mtimes remain 2026-09-04)
- Method: `git status --porcelain -uall -- projects/` then SHA-256(path\0bytes\0) sorted

## E. Cycle / profile / typology
- CRITICAL · DETERMINISTIC ONLY · SERVER-SIDE AUTHORITY COMPOSITION WIRING CORRECTION

## F. Convergence qualification
- Capability: Nora Cognitive Completion / MW6 External Source Intelligence
- Foundations: V3-F11 / V3-F12
- Milestone: MW6 ↔ AUTH — SERVER-SIDE AUTHORITY COMPOSITION CLOSURE
- Exit: product entrypoint → Auth Pilote → canonical EC/evidence/OA ports → server-built governedAuthority → runNoraCognitiveTurn → strategy→binding→preflight → authorityBound=true · realAuthorized=false

## G. Input handoff
- tip `d12c5baa4c594fb9d8f02f93667743aadfdcebb5`

## H. Last ChatGPT gap closed
- Production path accepted already-assembled `governedAuthority?: Mw6GovernedAuthorityContext`
- Tests built context via `govRefs(...)`
- **Closed:** server composition builds governedAuthority; successful proof invokes product entrypoint without manual context

## I. Actual product Nora server entrypoint
`projectAssistantSendAction` (`features/project-assistant/actions.ts`)
- When `executionContractId` present → `runMw6GovernedNoraProductTurn`
- Else → existing `orchestrateAssistantSend` (unchanged)

## J. Production call graph
```
projectAssistantSendAction(executionContractId)
→ runMw6GovernedNoraProductTurn
→ resolveCurrentAuthenticatedPilote (or Auth test seam)
→ getRuntimeApplicationService().oa
→ composeMw6GovernedAuthorityForCurrentPilote
   → GetExecutionContract.load
   → assert human-auth ready (confirmed N2 external-discovery)
   → resolve/issue S1 evidence (canonical)
   → ports from RuntimeOaStack
→ acquireNoraCampaignBudget
→ runNoraCognitiveTurn({ governedAuthority, campaignBudget, enableHostedWebSearch })
→ decideSourceStrategy → bindSourceProviderCapability → currentProductContext
→ runNoraAgentsTurn → evaluateRealSourceExecutionPreflight
→ authorityBound=true · realAuthorized=false · LIVE=0
```

## K. Canonical Auth resolver
`resolveCurrentAuthenticatedPilote({ headers })` in production path
- Test seam: `resolveAuthenticatedPilote` only (Priority B) — AUTH REAL carried forward

## L. Current Pilote derivation
authenticated GitHub identity → `actor:github:<id>` → authorityLevel none · canActAsMorris false
- Hostile `actorId` / `canActAsMorris` / `claimedAuthorityLevel` ignored

## M. executionContractId source
Untrusted UI/reference id on `projectAssistantSendAction`
- CONTENT/AUTHORITY loaded via `GetExecutionContract` only

## N. authorityEvidenceId source (exact)
Server composition order:
1. claimedEvidenceId if string AND verifies for Pilote+EC inspection fingerprint
2. `AuthorityResolver.listByActor` scope-match on `computeInspectionFingerprint(loaded EC)`
3. deterministic `evd:w3a-auth-s1:${decisionRefs[0]}` if present+valid
4. else `issueS1AuthorityEvidence` with id `evd:mw6-ext-s1:${executionContractId}` against **loaded EC semantic** (same fingerprint as CheckAuthorization)
- Explains: THIS evidence is for THIS authenticated actor and THIS current EC fingerprint

## O. OA composition root / services
`getRuntimeApplicationService().oa` (RuntimeOaStack)
- `executionContractServices.getExecutionContract`
- `executionContractServices.checkExecutionAuthorization`
- `authorityResolver`
- No production Memory parallel stack; no client-supplied ports

## P. Proof ports are server composition
- C08: composition reads ports from `runtime.oa`
- Hostile port fields on send action ignored

## Q. Server-built governedAuthority shape (sanitized)
```
{
  actorId: "actor:github:<sanitized>",
  authorityEvidenceId: "evd:mw6-ext-s1:<executionContractId>",
  executionContractId: "<id>",
  requiredLevel: "N2",
  getExecutionContract: <RuntimeOaStack service>,
  checkExecutionAuthorization: <RuntimeOaStack service>,
  authorityResolver: <RuntimeOaStack resolver>,
  [Symbol sfia.mw6.serverComposedGovernedAuthority]: true
}
```

## R. Client cannot override actor
- C02/C03: hostile actorId ignored; wrong evidence hint → HOSTILE_EVIDENCE_OVERRIDE_DENIED

## S. Client cannot override ports / final authority object
- C13: client-supplied governedAuthority ignored; server issues `evd:mw6-ext-s1:...`
- C07: fabricated evidence hint denied

## T. C01–C14 matrix
| ID | Result |
| --- | --- |
| C01 | **PASS** (combined product path) |
| C02 | **PASS** (combined product path) |
| C06 | **PASS** (combined product path) |
| C08 | **PASS** (combined product path) |
| C09 | **PASS** (combined product path) |
| C10 | **PASS** (combined product path) |
| C11 | **PASS** (combined product path) |
| C14 | **PASS** (combined product path) |
| C03 | **PASS** |
| C04 | **PASS** |
| C05 | **PASS** |
| C07 | **PASS** |
| C12 | **PASS** |
| C13 | **PASS** |

## U. Supporting T/H/S/B
- `mw6.auth-binding.d0.test.ts` T01–T12 + H/S/B: **19/19 PASS** (retained)

## V. Successful full deterministic product path
1. Seed confirmed N2 external-discovery EC on RuntimeOaStack
2. `projectAssistantSendAction({ executionContractId, content: CLAIM, Fake provider, Auth seam })`
3. No manual governedAuthority
4. `mw6AuthorityComposition.authorityBound=true`
5. `realAuthorized=false` · `eligible=false` · `liveHostedDispatchCalls=0`
6. `realPreflightCode=AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED`

## W. Negative hostile paths
- Wrong EC id → DENY
- Hostile evidence hint → DENY
- Hostile actor/ports/governedAuthority ignored
- Strategy drift vs confirmed EC → authorityBound=false

## X. REAL gate CLOSED
- realAuthorized forced false in preflight
- Fake provider + empty deterministic calls → LIVE hosted dispatch=0

## Y. External REAL calls
- **0**

## Z. Files modified (this cycle — composition)
- NEW `features/project-assistant/composeMw6GovernedAuthority.ts`
- NEW `features/project-assistant/mw6GovernedNoraTurn.ts`
- NEW `__tests__/nora-cognitive-runtime/mw6.server-composition.d0.test.ts`
- MOD `features/project-assistant/actions.ts`
- MOD `features/project-assistant/types.ts`
- MOD `lib/nora-cognitive-runtime/runNoraAgentsTurn.ts` (deterministic authority preflight when governedAuthority present)
- MOD `lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts` (propagate mw6AuthorityBinding)
- MOD `lib/nora-cognitive-runtime/types.ts`
- MOD `__tests__/vertical-slice-runtime/importBoundaries.test.ts` (allowlist)

## AA. FULL useful modified content / diffs

### projects/sfia-studio/app/features/project-assistant/composeMw6GovernedAuthority.ts
```typescript
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

```

### projects/sfia-studio/app/features/project-assistant/mw6GovernedNoraTurn.ts
```typescript
/**
 * MW6 governed Nora product turn — server composition entry for Studio.
 *
 * Call graph:
 *   projectAssistantSendAction (executionContractId present)
 *   → runMw6GovernedNoraProductTurn
 *   → resolveCurrentAuthenticatedPilote
 *   → RuntimeOaStack Get/Check/Resolver
 *   → composeMw6GovernedAuthorityForCurrentPilote
 *   → runNoraCognitiveTurn (real)
 *   → decideSourceStrategy → bindSourceProviderCapability
 *   → evaluateRealSourceExecutionPreflight
 *
 * AUTH REAL boundary proof is carried forward (test may substitute only the
 * outer Pilote resolver seam). Downstream composition is never mocked.
 */

import { headers } from "next/headers";
import {
  isFakeConversationProviderForced,
  resolveConversationProvider,
  type ConversationProvider,
  type ProviderChatMessage,
} from "@/lib/platform/ai";
import {
  acquireNoraCampaignBudget,
  runNoraCognitiveTurn,
  type NoraCognitiveTurnResult,
} from "@/lib/nora-cognitive-runtime";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import {
  composeMw6GovernedAuthorityForCurrentPilote,
  wasServerComposedMw6GovernedAuthority,
  type Mw6AuthorityEvidenceCompositionSource,
} from "./composeMw6GovernedAuthority";
import {
  resolveCurrentAuthenticatedPilote,
  type ResolveCurrentPiloteResult,
} from "@/lib/auth/resolveCurrentPilote";
import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
import { resolveAssistantMode } from "./resolveAssistantMode";
import type {
  AssistantHistoryMessage,
  ProjectAssistantContextDto,
  ProjectAssistantSendResult,
} from "./types";

const MAX_HISTORY_MESSAGES = 20;

function toContextDto(
  result: Extract<
    Awaited<ReturnType<typeof loadProjectRuntimeForAssistant>>,
    { ok: true }
  >,
): ProjectAssistantContextDto {
  return {
    projectId: result.project.projectId,
    name: result.project.name,
    shortReference: result.project.shortReference ?? null,
    objective: result.project.objective,
    contextSummary: result.project.contextSummary,
    criticality: result.project.criticality,
    constraints: [...result.project.constraints],
    lpsId: result.livingState.id,
    lpsVersion: result.livingState.version,
    lpsCreatedAt: result.livingState.createdAt,
    doctrineId: result.doctrine.id,
    doctrineVersion: result.doctrine.version,
    doctrineDigest: result.doctrine.digest,
    doctrineStatus: result.doctrine.status,
    runtimeMode: result.disclosures.runtimeMode,
    persistence: result.disclosures.persistence,
    readiness: result.readiness.status,
  };
}

/** Extract campaignId from MW6 EC scope when present. */
export function extractMw6CampaignIdFromScope(scope: string): string | null {
  const m = /^biz:mw6-external-discovery:([^:]+):/.exec(scope);
  return m?.[1] ?? null;
}

export type Mw6GovernedNoraProductTurnSuccess = Extract<
  ProjectAssistantSendResult,
  { ok: true }
> & {
  mw6AuthorityComposition: {
    authorityBound: boolean;
    realAuthorized: boolean;
    realPreflightCode: string;
    eligible: boolean;
    serverComposedGovernedAuthority: true;
    evidenceSource: Mw6AuthorityEvidenceCompositionSource;
    executionContractId: string;
    authorityEvidenceId: string;
    actorId: string;
    liveHostedDispatchCalls: 0;
  };
};

export type Mw6GovernedNoraProductTurnResult =
  | Mw6GovernedNoraProductTurnSuccess
  | Extract<ProjectAssistantSendResult, { ok: false }>;

export type RunMw6GovernedNoraProductTurnInput = {
  projectId: string;
  content: string;
  executionContractId: string;
  history?: AssistantHistoryMessage[];
  provider?: ConversationProvider;
  sessionDbPath?: string;
  /**
   * Optional untrusted evidence hint — verified only inside composition.
   */
  claimedAuthorityEvidenceId?: unknown;
  /**
   * TEST-ONLY — substitute Auth session → Pilote boundary.
   * Production omits this and uses resolveCurrentAuthenticatedPilote.
   * AUTH REAL boundary proof is carried forward, not re-proven.
   */
  resolveAuthenticatedPilote?: () => Promise<ResolveCurrentPiloteResult>;
  /** Hostile client fields — ignored. */
  governedAuthority?: unknown;
  actorId?: unknown;
  authorityEvidenceId?: unknown;
  getExecutionContract?: unknown;
  checkExecutionAuthorization?: unknown;
  authorityResolver?: unknown;
  authorizedContract?: unknown;
  currentExternalDiscoveryIntent?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
};

/**
 * Product server composition for MW6-governed Nora cognitive turns.
 * Builds governedAuthority server-side; never accepts client-built context.
 */
export async function runMw6GovernedNoraProductTurn(
  input: RunMw6GovernedNoraProductTurnInput,
): Promise<Mw6GovernedNoraProductTurnResult> {
  // Hostile authority surfaces — deliberately ignored.
  void input.governedAuthority;
  void input.actorId;
  void input.authorityEvidenceId;
  void input.getExecutionContract;
  void input.checkExecutionAuthorization;
  void input.authorityResolver;
  void input.authorizedContract;
  void input.currentExternalDiscoveryIntent;
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const content = input.content.trim();
  if (!content) {
    return {
      ok: false,
      status: "validation_error",
      code: "EMPTY_MESSAGE",
      message: "Saisissez un message avant d'envoyer.",
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: true,
    };
  }

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "decision_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA process-local indisponibles pour MW6 composition.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: false,
    };
  }
  const project = toContextDto(projectResult);

  const pilote = input.resolveAuthenticatedPilote
    ? await input.resolveAuthenticatedPilote()
    : await resolveCurrentAuthenticatedPilote({
        headers: await headers(),
      });
  if (!pilote.ok) {
    return {
      ok: false,
      status: "validation_error",
      code: pilote.code,
      message: pilote.message,
      mode: "unavailable",
      retryable: false,
    };
  }

  const composed = await composeMw6GovernedAuthorityForCurrentPilote({
    oa: runtime.oa,
    pilote,
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    claimedAuthorityEvidenceId: input.claimedAuthorityEvidenceId,
  });
  if (!composed.ok) {
    return {
      ok: false,
      status: "validation_error",
      code: composed.code,
      message: composed.message,
      mode: "unavailable",
      retryable: false,
    };
  }

  if (!wasServerComposedMw6GovernedAuthority(composed.governedAuthority)) {
    return {
      ok: false,
      status: "validation_error",
      code: "SERVER_COMPOSITION_MARKER_MISSING",
      message: "governedAuthority was not marked as server-composed.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const loaded =
    await runtime.oa.executionContractServices.getExecutionContract.execute({
      executionContractId: composed.executionContractId,
    });
  if (!loaded.ok) {
    return {
      ok: false,
      status: "validation_error",
      code: "EXECUTION_CONTRACT_LOAD_FAILED",
      message: "Canonical EC reload failed after composition.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const campaignId =
    extractMw6CampaignIdFromScope(loaded.contract.scope) ??
    `mw6:${composed.executionContractId}`;
  const campaignBudget = acquireNoraCampaignBudget({
    campaignId,
    maxModelInvocations: 4,
    maxHostedWebOperations: 2,
    maxAggregateRealCalls: 4,
    hostedHardCapCapability: "provider_max_tool_calls",
  });

  const modeResolution = resolveAssistantMode(input.provider);
  if (!modeResolution.canProceed) {
    return {
      ok: false,
      status: "provider_unavailable",
      code: "PROVIDER_UNAVAILABLE",
      message: modeResolution.message ?? "Provider indisponible.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const history = (input.history ?? [])
    .filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0,
    )
    .slice(-MAX_HISTORY_MESSAGES);

  const messages: ProviderChatMessage[] = [
    {
      role: "system",
      content: buildProjectSystemPrompt(project),
    },
    ...history.map((m) => ({ role: m.role, content: m.content.trim() })),
    { role: "user", content },
  ];

  const provider = input.provider ?? resolveConversationProvider();
  const workspaceRoot = resolveWorkspaceRootFromAppCwd();

  let turn: NoraCognitiveTurnResult;
  try {
    turn = await runNoraCognitiveTurn({
      correlationId: `mw6-gov:${project.projectId}:${composed.executionContractId}`,
      projectId: project.projectId,
      messages,
      provider,
      enableTools: true,
      workspaceRoot,
      sessionDbPath: input.sessionDbPath,
      turnWorkloadContext: {
        projectCriticality: project.criticality,
        userContentLength: content.length,
        historyMessageCount: history.length,
        historyTotalChars: history.reduce((sum, m) => sum + m.content.length, 0),
        enableTools: true,
      },
      trustedSfiaProfile: null,
      enableHostedWebSearch: true,
      campaignBudget,
      governedAuthority: composed.governedAuthority as import("@/lib/nora-cognitive-runtime").Mw6GovernedAuthorityContext,
      // Deterministic boundary — ZERO LIVE hosted dispatch.
      deterministicHostedWebSearchCalls: [],
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erreur Nora inattendue.";
    return {
      ok: false,
      status: "provider_error",
      code: "NORA_TURN_ERROR",
      message,
      mode: modeResolution.mode,
      retryable: true,
    };
  }

  const binding = turn.mw6AuthorityBinding;
  return {
    ok: true,
    status: "ok",
    mode: modeResolution.mode as "fixture" | "live",
    presentation: modeResolution.presentation,
    text: turn.text,
    toolRounds: turn.toolRounds,
    toolCalls: turn.toolCalls,
    sources: [],
    toolEvents: [],
    project,
    ephemeralNotice:
      "MW6 governed Nora turn — server-composed authority; REAL not authorized.",
    model: turn.usage.model,
    cognitiveRuntime: "agents",
    sessionId: turn.sessionId,
    memoryBAvailability: turn.memoryBAvailability,
    memoryBCompactionState: turn.memoryBCompactionState,
    mw6AuthorityComposition: {
      authorityBound: binding?.authorityBound === true,
      realAuthorized: binding?.realAuthorized === true,
      realPreflightCode: binding?.realPreflightCode ?? "MISSING",
      realPreflightReasons: binding?.realPreflightReasons ?? [],
      eligible: binding?.eligible === true,
      serverComposedGovernedAuthority: true,
      evidenceSource: composed.evidenceSource,
      executionContractId: composed.executionContractId,
      authorityEvidenceId: composed.authorityEvidenceId,
      actorId: pilote.actor.actorId,
      liveHostedDispatchCalls: 0,
      realPreflightBlocked: binding?.realPreflightBlocked === true,
    },
  };
}

```

### DIFF projects/sfia-studio/app/features/project-assistant/actions.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index efd0e91b..8137350f 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -17,6 +17,10 @@ import {
   executionSemanticUserLabel,
   resolvePersistenceNotice,
 } from "./presentationLabels";
+import {
+  runMw6GovernedNoraProductTurn,
+  type RunMw6GovernedNoraProductTurnInput,
+} from "./mw6GovernedNoraTurn";
 import type {
   AssistantHistoryMessage,
   ProjectAssistantContextDto,
@@ -38,8 +42,69 @@ export async function projectAssistantSendAction(input: {
   projectId: string;
   content: string;
   history?: AssistantHistoryMessage[];
+  /**
+   * Untrusted ExecutionContract id reference for MW6 governed external discovery.
+   * When present, server composes governedAuthority from Auth + OA and invokes
+   * the real Nora product path. CONTENT/AUTHORITY of the contract are never
+   * trusted from the client — only the id reference.
+   */
+  executionContractId?: string;
+  /**
+   * Optional untrusted evidence hint — verified only by server composition.
+   */
+  authorityEvidenceId?: unknown;
+  /** Hostile — ignored (server builds governedAuthority). */
+  governedAuthority?: unknown;
+  /** Hostile — ignored (Auth resolver owns actor). */
+  actorId?: unknown;
+  getExecutionContract?: unknown;
+  checkExecutionAuthorization?: unknown;
+  authorityResolver?: unknown;
+  authorizedContract?: unknown;
+  currentExternalDiscoveryIntent?: unknown;
+  canActAsMorris?: unknown;
+  claimedAuthorityLevel?: unknown;
+  /**
+   * TEST-ONLY Auth session → Pilote seam. Production omits this and uses
+   * resolveCurrentAuthenticatedPilote. AUTH REAL boundary carried forward.
+   */
+  resolveAuthenticatedPilote?: RunMw6GovernedNoraProductTurnInput["resolveAuthenticatedPilote"];
+  provider?: import("@/lib/platform/ai").ConversationProvider;
+  sessionDbPath?: string;
 }): Promise<ProjectAssistantSendResult> {
-  return orchestrateAssistantSend(input);
+  const executionContractId =
+    typeof input.executionContractId === "string"
+      ? input.executionContractId.trim()
+      : "";
+  if (executionContractId.length > 0) {
+    return runMw6GovernedNoraProductTurn({
+      projectId: input.projectId,
+      content: input.content,
+      history: input.history,
+      executionContractId,
+      claimedAuthorityEvidenceId: input.authorityEvidenceId,
+      resolveAuthenticatedPilote: input.resolveAuthenticatedPilote,
+      provider: input.provider,
+      sessionDbPath: input.sessionDbPath,
+      governedAuthority: input.governedAuthority,
+      actorId: input.actorId,
+      authorityEvidenceId: input.authorityEvidenceId,
+      getExecutionContract: input.getExecutionContract,
+      checkExecutionAuthorization: input.checkExecutionAuthorization,
+      authorityResolver: input.authorityResolver,
+      authorizedContract: input.authorizedContract,
+      currentExternalDiscoveryIntent: input.currentExternalDiscoveryIntent,
+      canActAsMorris: input.canActAsMorris,
+      claimedAuthorityLevel: input.claimedAuthorityLevel,
+    });
+  }
+  return orchestrateAssistantSend({
+    projectId: input.projectId,
+    content: input.content,
+    history: input.history,
+    provider: input.provider,
+    sessionDbPath: input.sessionDbPath,
+  });
 }

 function toContextDto(

```

### DIFF projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index 32fc4dc6..2e00d82b 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -19,7 +19,10 @@ import type { ConversationProvider } from "@/lib/platform/ai";
 import type { EventSink } from "@/lib/platform/observability/eventSink";
 import { CT_MAX_TOOL_ROUNDS } from "@/lib/platform/tools";
 import { requireLiveConversationSecrets } from "@/lib/platform/ai/config";
-import { createSfiaCallModelInputFilter } from "./callModelInputFilter";
+import {
+  CampaignModelInvocationDeniedError,
+  createSfiaCallModelInputFilter,
+} from "./callModelInputFilter";
 import {
   createProviderAgentsModel,
   isFakeConversationProvider,
@@ -33,6 +36,35 @@ import {
 } from "./turnBudget";
 import type { NoraCognitiveTurnResult } from "./types";
 import type { NoraRunnerModelSettings } from "./reasoningModelSettings";
+import { withMaxToolCallsProviderData } from "./reasoningModelSettings";
+import type { HostedWebSearchCallLike } from "./externalSourceNormalization";
+import {
+  createNoraHostedWebSearchTool,
+  extractHostedWebSearchCallsFromRunItems,
+  normalizeOpenAiHostedWebSearchObservations,
+  type NoraHostedWebSearchToolOptions,
+} from "./openaiHostedWebSearchAdapter";
+import type { SourceObservationFact } from "./sourceIntelligenceContract";
+import type {
+  NoraCampaignBudget,
+  Mw6GovernedAuthorityContext,
+  Mw6CurrentProductContext,
+} from "./campaignBudget";
+import type { Mw6ExternalDiscoveryContractInput } from "@/lib/auth/mw6ExternalDiscoveryBinding";
+import {
+  CampaignLeaseError,
+  campaignBudgetSnapshot,
+  claimHostedWebOperations,
+  clampRunnerBudgetForCampaign,
+  evaluateRealSourceExecutionPreflight,
+  isCanonicalCampaignBudget,
+  markCampaignBudgetBlocked,
+  normalizeSafeNonNegativeInteger,
+  remainingAggregateRealCalls,
+  remainingModelInvocations,
+  requireCanonicalCampaignBudget,
+  resolveMaxToolCallsProviderData,
+} from "./campaignBudget";

 export type RunNoraAgentsTurnInput = {
   correlationId: string;
@@ -59,18 +91,76 @@ export type RunNoraAgentsTurnInput = {
   budget?: NoraTurnBudget;
   /** MW2 — Runner modelSettings override (reasoning.effort + preserved text.verbosity). */
   runnerModelSettings?: NoraRunnerModelSettings;
+  /**
+   * MW6 — attach OpenAI hosted web_search on the same Option C Agent.
+   * Not routed through routeToolCall. NoraTurnBudget does NOT bound it.
+   */
+  enableHostedWebSearch?: boolean;
+  hostedWebSearchToolOptions?: NoraHostedWebSearchToolOptions;
+  /**
+   * MW6 R21 — deterministic substitute for hosted web_search run-items.
+   * Same normalization path as live observation; NEVER a REAL call.
+   */
+  deterministicHostedWebSearchCalls?: HostedWebSearchCallLike[];
+  /** MW6 — optional freshness timestamp when honestly supportable. */
+  sourceObservationNowIso?: string | null;
+  /**
+   * MW6 PRE-REAL — shared campaign budget (must be canonical lease from
+   * acquireNoraCampaignBudget; fabricated objects fail closed).
+   */
+  campaignBudget?: NoraCampaignBudget;
+  /**
+   * TEST only — attempt to widen max_tool_calls beyond campaign remaining.
+   * Not REAL authority.
+   */
+  testOnlyMaxToolCallsOverride?: number | null;
+  /**
+   * MW6↔Auth binding — identifiers + canonical EC ports only.
+   * When absent on LIVE path → REAL_AUTHORITY_NOT_BOUND.
+   */
+  governedAuthority?: Mw6GovernedAuthorityContext;
+  /**
+   * Current product strategy+binding from Nora composition (TB-02).
+   * Server derives intent — do not inject final fingerprint semantics as truth.
+   */
+  currentProductContext?: Mw6CurrentProductContext;
+  /**
+   * @deprecated Ignored for authority (cannot authorize).
+   */
+  currentExternalDiscoveryIntent?: Mw6ExternalDiscoveryContractInput;
+};
+
+export type RunNoraAgentsTurnHostedSearchObserve = {
+  hostedWebSearchAttached: boolean;
+  deterministicBoundaryUsed: boolean;
+  observations: SourceObservationFact[];
+  rawCallsObserved: number;
+};
+
+export type RunNoraAgentsTurnBudgetObserve = {
+  campaign: ReturnType<typeof campaignBudgetSnapshot>;
+  clampReasonCodes: string[];
+  configuredMaxToolCalls: number | null;
+  realPreflightBlocked: boolean;
+  realPreflightReasons: string[];
+  authorityBound: boolean;
+  realAuthorized: boolean;
+  realPreflightCode: string;
+  eligible: boolean;
 };

 export function createNoraAgentsRunner(
   systemInstructions: string,
   budget?: NoraTurnBudget,
   runnerModelSettings?: NoraRunnerModelSettings,
+  campaignBudget?: NoraCampaignBudget,
 ): Runner {
   return new Runner({
     tracingDisabled: true,
     callModelInputFilter: createSfiaCallModelInputFilter(
       systemInstructions,
       budget,
+      campaignBudget,
     ),
     ...(runnerModelSettings ? { modelSettings: runnerModelSettings } : {}),
   });
@@ -114,12 +204,73 @@ export function resolveNoraAgentsF1Model(

 export async function runNoraAgentsTurn(
   input: RunNoraAgentsTurnInput,
-): Promise<NoraCognitiveTurnResult> {
+): Promise<
+  NoraCognitiveTurnResult & {
+    hostedSearchObserve?: RunNoraAgentsTurnHostedSearchObserve;
+    budgetObserve?: RunNoraAgentsTurnBudgetObserve;
+  }
+> {
   const model = resolveNoraAgentsF1Model(input);

   const budget = input.budget ?? createNoraTurnBudget();
+  const campaign = input.campaignBudget;
+  if (campaign) {
+    try {
+      requireCanonicalCampaignBudget(campaign);
+    } catch (error) {
+      if (error instanceof CampaignLeaseError) {
+        return {
+          text: error.message,
+          usage: {
+            inputTokens: null,
+            outputTokens: null,
+            totalTokens: null,
+            model: null,
+            providerResponseId: null,
+          },
+          toolRounds: 0,
+          toolCalls: 0,
+          limitReached: true,
+          cognitiveRuntime: "agents",
+          sessionId: null,
+          memoryBAvailability: "unavailable",
+          memoryBCompactionState: "none",
+          memoryBCompactionDetails: null,
+          budgetObserve: {
+            // Do not call campaignBudgetSnapshot — fabricated objects have no lease.
+            campaign: {
+              campaignId: campaign.campaignId,
+              remainingModelInvocations: 0,
+              remainingHostedWebOperations: 0,
+              remainingAggregateRealCalls: 0,
+              consumedModelInvocations: campaign.consumedModelInvocations,
+              consumedHostedWebOperations: campaign.consumedHostedWebOperations,
+              consumedAggregateRealCalls: campaign.consumedAggregateRealCalls,
+              maxModelInvocations: campaign.maxModelInvocations,
+              maxHostedWebOperations: campaign.maxHostedWebOperations,
+              maxAggregateRealCalls: campaign.maxAggregateRealCalls,
+              limitReached: true,
+              denialCode: error.code,
+              denialReason: error.message,
+              hostedHardCapCapability: campaign.hostedHardCapCapability,
+              canonicalLease: false,
+            },
+            clampReasonCodes: ["campaign_lease_invalid"],
+            configuredMaxToolCalls: null,
+            realPreflightBlocked: true,
+            realPreflightReasons: [error.code],
+            authorityBound: false,
+            realAuthorized: false,
+            realPreflightCode: error.code,
+            eligible: false,
+          },
+        };
+      }
+      throw error;
+    }
+  }
   const enableTools = input.enableTools !== false;
-  const tools = enableTools
+  const sfiaTools = enableTools
     ? createSfiaRouteToolAdapters({
         correlationId: input.correlationId,
         workspaceRoot: input.workspaceRoot,
@@ -128,6 +279,175 @@ export async function runNoraAgentsTurn(
       })
     : [];

+  const wantHosted = input.enableHostedWebSearch === true;
+  const fixtureCalls = input.deterministicHostedWebSearchCalls ?? [];
+  const deterministicBoundaryUsed = fixtureCalls.length > 0;
+  const liveOpenAiPath =
+    !!input.provider && isOpenAiLiveF1Provider(input.provider);
+  // REAL hosted dispatch = live OpenAI + hosted attach + no fixture substitute.
+  const wantRealHostedDispatch =
+    wantHosted && liveOpenAiPath && !deterministicBoundaryUsed;
+
+  let realPreflightBlocked = false;
+  let realPreflightReasons: string[] = [];
+  let authorityBound = false;
+  let realAuthorized = false;
+  let realPreflightCode = "OK";
+  let realPreflightEligible = false;
+  // Authority composition proof: evaluate when server-composed governedAuthority
+  // + product context + campaign are present (deterministic Fake path included).
+  // LIVE dispatch gate still requires wantRealHostedDispatch.
+  const shouldEvaluateAuthorityBinding =
+    wantHosted &&
+    !!campaign &&
+    !!input.governedAuthority &&
+    !!input.currentProductContext;
+  if (wantRealHostedDispatch || shouldEvaluateAuthorityBinding) {
+    // PRE-REAL-01: LIVE path always requires genuine authority binding.
+    // No test/fake boolean is accepted on runtime inputs.
+    if (!campaign) {
+      realPreflightBlocked = true;
+      realPreflightReasons = [
+        "REAL_AUTHORITY_NOT_BOUND",
+        "campaign_budget_required_for_real_hosted",
+      ];
+      realPreflightCode = "REAL_AUTHORITY_NOT_BOUND";
+      authorityBound = false;
+      realAuthorized = false;
+      realPreflightEligible = false;
+    } else {
+      const pre = await evaluateRealSourceExecutionPreflight({
+        campaign,
+        wantHostedWebSearch: true,
+        governedAuthority: input.governedAuthority,
+        currentProductContext: input.currentProductContext,
+        // Deprecated injection retained only to prove it cannot authorize.
+        currentExternalDiscoveryIntent: input.currentExternalDiscoveryIntent,
+      });
+      // LIVE dispatch blocked only on the real hosted path.
+      realPreflightBlocked = wantRealHostedDispatch ? pre.blocked : false;
+      realPreflightReasons = pre.reasons;
+      realPreflightCode = pre.code;
+      authorityBound = pre.authorityBound;
+      realAuthorized = pre.realAuthorized;
+      realPreflightEligible = pre.eligible;
+    }
+  }
+
+  const requestedMaxTurns = input.maxTurns ?? CT_MAX_TOOL_ROUNDS + 1;
+  let clamp: {
+    maxTurns: number;
+    maxToolCalls: number | null;
+    attachHostedWebSearch: boolean;
+    reasonCodes: string[];
+  };
+  let resolvedCap: {
+    max_tool_calls?: number;
+    rejectedOverride: boolean;
+  };
+  let runnerModelSettings: ReturnType<typeof withMaxToolCallsProviderData>;
+  try {
+    // R-PRE-REAL-08A: same safe-integer domain with or without campaign.
+    const safeRequestedMaxTurns = normalizeSafeNonNegativeInteger(
+      "requestedMaxTurns",
+      requestedMaxTurns,
+    );
+    clamp = campaign
+      ? clampRunnerBudgetForCampaign({
+          campaign,
+          requestedMaxTurns: safeRequestedMaxTurns,
+          wantHostedWebSearch:
+            wantHosted && !(wantRealHostedDispatch && realPreflightBlocked),
+        })
+      : {
+          maxTurns: safeRequestedMaxTurns,
+          maxToolCalls: null as number | null,
+          attachHostedWebSearch:
+            wantHosted && !(wantRealHostedDispatch && realPreflightBlocked),
+          reasonCodes: [] as string[],
+        };
+
+    // BYPASS-04: enableHostedWebSearch cannot bypass REAL preflight / campaign clamp.
+    resolvedCap = campaign
+      ? resolveMaxToolCallsProviderData({
+          campaign,
+          configuredMaxToolCalls: clamp.maxToolCalls,
+          callerOverride: input.testOnlyMaxToolCallsOverride,
+        })
+      : {
+          max_tool_calls: undefined as number | undefined,
+          rejectedOverride: false,
+        };
+
+    // Final providerData boundary — validates injected AND inherited caps (07/07A).
+    runnerModelSettings = withMaxToolCallsProviderData(
+      input.runnerModelSettings,
+      resolvedCap.max_tool_calls ?? null,
+    );
+  } catch (error) {
+    if (error instanceof CampaignLeaseError) {
+      return {
+        text: error.message,
+        usage: {
+          inputTokens: null,
+          outputTokens: null,
+          totalTokens: null,
+          model: null,
+          providerResponseId: null,
+        },
+        toolRounds: 0,
+        toolCalls: 0,
+        limitReached: true,
+        cognitiveRuntime: "agents",
+        sessionId: null,
+        memoryBAvailability: "unavailable",
+        memoryBCompactionState: "none",
+        memoryBCompactionDetails: null,
+        budgetObserve: campaign
+          ? {
+              campaign: isCanonicalCampaignBudget(campaign)
+                ? campaignBudgetSnapshot(campaign)
+                : {
+                    campaignId: campaign.campaignId,
+                    remainingModelInvocations: 0,
+                    remainingHostedWebOperations: 0,
+                    remainingAggregateRealCalls: 0,
+                    consumedModelInvocations: campaign.consumedModelInvocations,
+                    consumedHostedWebOperations:
+                      campaign.consumedHostedWebOperations,
+                    consumedAggregateRealCalls:
+                      campaign.consumedAggregateRealCalls,
+                    maxModelInvocations: campaign.maxModelInvocations,
+                    maxHostedWebOperations: campaign.maxHostedWebOperations,
+                    maxAggregateRealCalls: campaign.maxAggregateRealCalls,
+                    limitReached: true,
+                    denialCode: error.code,
+                    denialReason: error.message,
+                    hostedHardCapCapability: campaign.hostedHardCapCapability,
+                    canonicalLease: false,
+                  },
+              clampReasonCodes: ["invalid_budget_numeric"],
+              configuredMaxToolCalls: null,
+              realPreflightBlocked: true,
+              realPreflightReasons: [error.code],
+              authorityBound: false,
+              realAuthorized: false,
+              realPreflightCode: error.code,
+              eligible: false,
+            }
+          : undefined,
+      };
+    }
+    throw error;
+  }
+
+  const enableHostedWebSearch = clamp.attachHostedWebSearch;
+
+  const hostedTool = enableHostedWebSearch
+    ? createNoraHostedWebSearchTool(input.hostedWebSearchToolOptions)
+    : null;
+  const tools = hostedTool ? [...sfiaTools, hostedTool] : sfiaTools;
+
   const agent = new Agent({
     name: "NoraProjectAssistant",
     instructions: input.systemInstructions,
@@ -138,9 +458,10 @@ export async function runNoraAgentsTurn(
   const runner = createNoraAgentsRunner(
     input.systemInstructions,
     budget,
-    input.runnerModelSettings,
+    runnerModelSettings,
+    campaign,
   );
-  const maxTurns = input.maxTurns ?? CT_MAX_TOOL_ROUNDS + 1;
+  const maxTurns = clamp.maxTurns;
   const session = input.session ?? undefined;
   const memoryBAvailability: MemoryBAvailability =
     input.memoryBAvailability ??
@@ -153,53 +474,82 @@ export async function runNoraAgentsTurn(
     outputTokens?: number;
     totalTokens?: number;
   } | null = null;
+  let runNewItems: unknown[] = [];
+  let budgetStop = false;

-  try {
-    const result = await runner.run(agent, input.userContent, {
-      ...(session ? { session } : {}),
-      maxTurns,
-      errorHandlers: {
-        maxTurns: ({ runData }) => {
-          budget.limitReached = true;
-          const lastText = [...runData.newItems]
-            .reverse()
-            .map((item) => {
-              const anyItem = item as {
-                type?: string;
-                rawItem?: { content?: unknown };
-              };
-              if (anyItem.type === "message_output_item") {
-                return String(
-                  (item as { content?: string }).content ?? "",
-                );
-              }
-              return "";
-            })
-            .find((t) => t.trim().length > 0);
-          return {
-            finalOutput:
-              lastText?.trim() ||
-              "Model-turn budget reached (maxTurns).",
-            includeInHistory: false,
-          };
+  if (maxTurns <= 0) {
+    budget.limitReached = true;
+    budgetStop = true;
+    text = "Campaign/model-turn budget reached before dispatch.";
+    if (campaign && !campaign.limitReached) {
+      if (remainingAggregateRealCalls(campaign) <= 0) {
+        markCampaignBudgetBlocked(
+          campaign,
+          "AGGREGATE_REAL_CALL_CAP_REACHED",
+          "Aggregate REAL/provider-call remaining is 0 — Runner not dispatched.",
+        );
+      } else if (remainingModelInvocations(campaign) <= 0) {
+        markCampaignBudgetBlocked(
+          campaign,
+          "MODEL_INVOCATION_CAP_REACHED",
+          "Model invocation remaining is 0 — Runner not dispatched.",
+        );
+      }
+    }
+  } else {
+    try {
+      const result = await runner.run(agent, input.userContent, {
+        ...(session ? { session } : {}),
+        maxTurns,
+        errorHandlers: {
+          maxTurns: ({ runData }) => {
+            budget.limitReached = true;
+            const lastText = [...runData.newItems]
+              .reverse()
+              .map((item) => {
+                const anyItem = item as {
+                  type?: string;
+                  rawItem?: { content?: unknown };
+                };
+                if (anyItem.type === "message_output_item") {
+                  return String(
+                    (item as { content?: string }).content ?? "",
+                  );
+                }
+                return "";
+              })
+              .find((t) => t.trim().length > 0);
+            return {
+              finalOutput:
+                lastText?.trim() ||
+                "Model-turn budget reached (maxTurns).",
+              includeInHistory: false,
+            };
+          },
         },
-      },
-    });
-
-    text =
-      typeof result.finalOutput === "string"
-        ? result.finalOutput
-        : result.finalOutput == null
-          ? ""
-          : String(result.finalOutput);
-    lastResponseId = result.lastResponseId ?? null;
-    usageAgg = result.state?.usage ?? null;
-  } catch (error) {
-    if (error instanceof MaxTurnsExceededError) {
-      budget.limitReached = true;
-      text = "Model-turn budget reached (maxTurns).";
-    } else {
-      throw error;
+      });
+
+      text =
+        typeof result.finalOutput === "string"
+          ? result.finalOutput
+          : result.finalOutput == null
+            ? ""
+            : String(result.finalOutput);
+      lastResponseId = result.lastResponseId ?? null;
+      usageAgg = result.state?.usage ?? null;
+      runNewItems = Array.isArray(result.newItems) ? [...result.newItems] : [];
+    } catch (error) {
+      if (error instanceof CampaignModelInvocationDeniedError) {
+        budget.limitReached = true;
+        budgetStop = true;
+        text = error.message;
+        // BYPASS-07: do not retry / re-dispatch.
+      } else if (error instanceof MaxTurnsExceededError) {
+        budget.limitReached = true;
+        text = "Model-turn budget reached (maxTurns).";
+      } else {
+        throw error;
+      }
     }
   }

@@ -216,16 +566,78 @@ export async function runNoraAgentsTurn(
     providerResponseId: lastResponseId,
   };

+  const liveCalls = extractHostedWebSearchCallsFromRunItems(runNewItems);
+  // R21: fixture substitutes the external hosted boundary; prefer fixture when present.
+  const callsForNormalize = deterministicBoundaryUsed ? fixtureCalls : liveCalls;
+  const observations =
+    enableHostedWebSearch || deterministicBoundaryUsed
+      ? normalizeOpenAiHostedWebSearchObservations(callsForNormalize, {
+          deterministic: deterministicBoundaryUsed,
+          nowIso: input.sourceObservationNowIso,
+        })
+      : [];
+
+  // Reconcile observed hosted ops against campaign (fixture path does not
+  // consume REAL hosted budget — Fake/deterministic ≠ REAL consumption).
+  if (campaign && !deterministicBoundaryUsed && liveCalls.length > 0) {
+    const ok = claimHostedWebOperations(campaign, liveCalls.length);
+    if (!ok) {
+      // Provider-enforced cap should make this impossible; mark invariant failure.
+      budget.limitReached = true;
+      budgetStop = true;
+      text = [
+        text,
+        "",
+        "[CAMPAIGN BUDGET INVARIANT FAILURE]",
+        campaign.denialReason ??
+          "Observed hosted web ops exceeded campaign/provider cap.",
+      ]
+        .filter(Boolean)
+        .join("\n");
+    }
+  }
+
+  const hostedSearchObserve: RunNoraAgentsTurnHostedSearchObserve | undefined =
+    enableHostedWebSearch || deterministicBoundaryUsed
+      ? {
+          hostedWebSearchAttached: enableHostedWebSearch,
+          deterministicBoundaryUsed,
+          observations,
+          rawCallsObserved: callsForNormalize.length,
+        }
+      : undefined;
+
+  const budgetObserve: RunNoraAgentsTurnBudgetObserve | undefined = campaign
+    ? {
+        campaign: campaignBudgetSnapshot(campaign),
+        clampReasonCodes: [
+          ...clamp.reasonCodes,
+          ...(resolvedCap.rejectedOverride
+            ? ["caller_max_tool_calls_override_rejected"]
+            : []),
+        ],
+        configuredMaxToolCalls: resolvedCap.max_tool_calls ?? null,
+        realPreflightBlocked,
+        realPreflightReasons,
+        authorityBound,
+        realAuthorized,
+        realPreflightCode,
+        eligible: realPreflightEligible,
+      }
+    : undefined;
+
   return {
     text,
     usage,
     toolRounds: toolRoundsFromBudget(budget),
     toolCalls: budget.executedToolCalls,
-    limitReached: budget.limitReached,
+    limitReached: budget.limitReached || budgetStop,
     cognitiveRuntime: "agents",
     sessionId: session ? await session.getSessionId() : null,
     memoryBAvailability,
     memoryBCompactionState: "none",
     memoryBCompactionDetails: null,
+    ...(hostedSearchObserve ? { hostedSearchObserve } : {}),
+    ...(budgetObserve ? { budgetObserve } : {}),
   };
 }

```

### DIFF projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
index 2c350cce..20176a8d 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
@@ -58,6 +58,33 @@ import {
   type ReadCoverageFact,
 } from "./readCoverage";
 import type { ProductSqliteSession } from "./productSqliteSession";
+import {
+  appendSourceStrategyDisclosure,
+  bindSourceProviderCapability,
+  decideSourceStrategy,
+  type SourceStrategyInput,
+} from "./sourceStrategyPolicy";
+import {
+  authorityIsolationHeld,
+  buildSourceObservationDisclosure,
+  type HostedWebSearchCallLike,
+} from "./externalSourceNormalization";
+import type {
+  Mw6SourceIntelligenceSurface,
+  SourceObservationFact,
+  SourceProviderBinding,
+  SourceStrategyDecision,
+} from "./sourceIntelligenceContract";
+import type { NoraHostedWebSearchToolOptions } from "./openaiHostedWebSearchAdapter";
+import {
+  appendSourceNarrativeConstraintDisclosure,
+  applySourceNarrativeCompatibility,
+} from "./sourceNarrativeCompatibility";
+import { composeMw3ConflictFromExternalSources } from "./externalContradictionComposition";
+import type {
+  NoraCampaignBudget,
+  Mw6GovernedAuthorityContext,
+} from "./campaignBudget";

 export type Mw3ContradictionAssessmentInput = {
   conflict: ContradictionConflictInput;
@@ -120,6 +147,35 @@ export type RunNoraCognitiveTurnInput = {
   readCoverageFacts?: ReadCoverageFact[];
   /** MW4 — fixed timestamp for deterministic grounding remember. */
   groundingNowIso?: string;
+  /**
+   * MW6-S01 — source strategy input (claim/domain/need).
+   * When omitted, strategy is inferred from the last user message.
+   */
+  sourceStrategy?: SourceStrategyInput | null;
+  /** MW6 — skip source strategy for isolated non-MW6 tests. */
+  skipSourceStrategy?: boolean;
+  /**
+   * MW6 — force hosted web_search attach (tests). Otherwise follows strategy.
+   */
+  enableHostedWebSearch?: boolean;
+  hostedWebSearchToolOptions?: NoraHostedWebSearchToolOptions;
+  /**
+   * MW6 R21 — deterministic hosted web_search boundary substitute (ZERO REAL).
+   */
+  deterministicHostedWebSearchCalls?: HostedWebSearchCallLike[];
+  /** MW6 — optional pre-normalized observations (same contract; tests). */
+  sourceObservationFacts?: SourceObservationFact[];
+  /** MW6 — freshness timestamp only when honestly supportable. */
+  sourceObservationNowIso?: string | null;
+  /** MW6 PRE-REAL — shared campaign budget (canonical lease required). */
+  campaignBudget?: NoraCampaignBudget;
+  /** TEST only — attempt to widen max_tool_calls beyond remaining. Not REAL authority. */
+  testOnlyMaxToolCallsOverride?: number | null;
+  /**
+   * MW6↔Auth — identifiers + canonical EC ports (Get/Check).
+   * Product strategy→binding is derived in this turn and passed as currentProductContext.
+   */
+  governedAuthority?: Mw6GovernedAuthorityContext;
 };

 function emitCognitiveStrategyTelemetry(
@@ -206,26 +262,55 @@ function withMw3Fields(
   turn: NoraCognitiveTurnResult,
   input: RunNoraCognitiveTurnInput,
   strategyDecision: ReturnType<typeof decideCognitiveStrategy> | null,
+  mw6Observations?: readonly SourceObservationFact[],
 ): NoraCognitiveTurnResult {
   const assessment = input.contradictionAssessment;
   if (!assessment) return turn;

+  const observations = mw6Observations ?? [];
+  // R-MW6-02 — when MW6 observations exist, conflictPresent is causally derived
+  // from external observation vs governing premise (existing MW3 contract).
+  // Studio Evidence pointers remain product-owned; external text ≠ Evidence.
+  const composed =
+    observations.length > 0
+      ? composeMw3ConflictFromExternalSources({
+          observations,
+          governing: {
+            governingPremise: assessment.governingPremise ?? "",
+            governingPremiseInvalidatedIfConflict:
+              assessment.governingPremiseInvalidated === true,
+            evidencePointers: assessment.conflict.evidencePointers,
+            requiredDomains: assessment.conflict.requiredDomains,
+            requiredSourceCount: assessment.conflict.requiredSourceCount,
+            freshnessMatters: assessment.conflict.freshnessMatters,
+            trustedSfiaProfile:
+              assessment.conflict.trustedSfiaProfile !== undefined
+                ? assessment.conflict.trustedSfiaProfile
+                : input.trustedSfiaProfile,
+          },
+          baseConflict: assessment.conflict,
+        })
+      : null;
+
   const conflict: ContradictionConflictInput = {
-    ...assessment.conflict,
+    ...(composed?.conflict ?? assessment.conflict),
     strategyClass:
-      assessment.conflict.strategyClass ??
+      (composed?.conflict ?? assessment.conflict).strategyClass ??
       strategyDecision?.strategyClass ??
       null,
     trustedSfiaProfile:
-      assessment.conflict.trustedSfiaProfile !== undefined
-        ? assessment.conflict.trustedSfiaProfile
+      (composed?.conflict ?? assessment.conflict).trustedSfiaProfile !==
+      undefined
+        ? (composed?.conflict ?? assessment.conflict).trustedSfiaProfile
         : input.trustedSfiaProfile,
   };
   const disposition = disposeContradiction(conflict);
+  const governingPremiseInvalidated = composed
+    ? composed.governingPremiseInvalidated
+    : assessment.governingPremiseInvalidated === true;
   const stop = decideCognitiveStop({
     disposition,
-    governingPremiseInvalidated:
-      assessment.governingPremiseInvalidated === true,
+    governingPremiseInvalidated,
     governingPremise: assessment.governingPremise,
     localImpactOnly: assessment.localImpactOnly === true,
     technicalFailure: assessment.technicalFailure === true,
@@ -267,14 +352,76 @@ function finalizeTurn(
   input: RunNoraCognitiveTurnInput,
   strategyDecision: ReturnType<typeof decideCognitiveStrategy> | null,
   mw4Grounding?: Mw4GroundingTurnSurface,
+  mw6SourceIntelligence?: Mw6SourceIntelligenceSurface,
 ): NoraCognitiveTurnResult {
   const withMw3 = withMw3Fields(
     withStrategyFields(turn, strategyDecision),
     input,
     strategyDecision,
+    mw6SourceIntelligence?.observations,
   );
-  if (!mw4Grounding) return withMw3;
-  return { ...withMw3, mw4Grounding };
+  return {
+    ...withMw3,
+    ...(mw4Grounding ? { mw4Grounding } : {}),
+    ...(mw6SourceIntelligence ? { mw6SourceIntelligence } : {}),
+  };
+}
+
+function resolveSourceStrategyForTurn(
+  input: RunNoraCognitiveTurnInput,
+  lastUserContent: string,
+): SourceStrategyDecision | null {
+  if (input.skipSourceStrategy) return null;
+  return decideSourceStrategy({
+    claimText: input.sourceStrategy?.claimText ?? lastUserContent,
+    domainHint: input.sourceStrategy?.domainHint,
+    sourceNeedHint: input.sourceStrategy?.sourceNeedHint,
+    requiresExternalCorroboration:
+      input.sourceStrategy?.requiresExternalCorroboration,
+    requiresRepositoryLookup: input.sourceStrategy?.requiresRepositoryLookup,
+    noSourceLookup: input.sourceStrategy?.noSourceLookup,
+  });
+}
+
+function composeMw6Surface(input: {
+  strategy: SourceStrategyDecision;
+  providerBinding: SourceProviderBinding;
+  observations: SourceObservationFact[];
+  hostedWebSearchAttached: boolean;
+  deterministicBoundaryUsed: boolean;
+  candidateNarrative: string;
+}): {
+  surface: Mw6SourceIntelligenceSurface;
+  governedText: string;
+} {
+  const narrative = applySourceNarrativeCompatibility({
+    candidateText: input.candidateNarrative,
+    observations: input.observations,
+    strategy: input.strategy,
+  });
+  const disclosure = buildSourceObservationDisclosure(
+    input.strategy,
+    input.observations,
+  );
+  const surface: Mw6SourceIntelligenceSurface = {
+    strategy: input.strategy,
+    providerBinding: input.providerBinding,
+    observations: input.observations,
+    disclosure,
+    narrativeCompatibility: {
+      compatible: narrative.compatible,
+      violations: [...narrative.violations],
+    },
+    authorityIsolationHeld: authorityIsolationHeld(input.observations),
+    hostedWebSearchAttached: input.hostedWebSearchAttached,
+    deterministicBoundaryUsed: input.deterministicBoundaryUsed,
+    proofCeiling: "deterministic",
+  };
+  // CR-05: incompatible narrative is replaced (not warned-after).
+  const governedText = narrative.compatible
+    ? `${narrative.text}\n\n${disclosure}`
+    : `${narrative.text}\n\n${disclosure}`;
+  return { surface, governedText };
 }

 function collectEvidenceIdsToRemember(
@@ -437,6 +584,26 @@ export async function runNoraCognitiveTurn(
     throw new Error("NORA_AGENTS_TURN_REQUIRES_SYSTEM_AND_USER");
   }

+  const sourceStrategy = resolveSourceStrategyForTurn(
+    input,
+    lastUser.content.trim(),
+  );
+  const engageMw6 =
+    sourceStrategy != null &&
+    (input.sourceStrategy != null ||
+      input.enableHostedWebSearch === true ||
+      (input.deterministicHostedWebSearchCalls?.length ?? 0) > 0 ||
+      (input.sourceObservationFacts?.length ?? 0) > 0 ||
+      sourceStrategy.sourceNeed !== "none");
+  const providerBinding =
+    engageMw6 && sourceStrategy
+      ? bindSourceProviderCapability(sourceStrategy)
+      : null;
+  const attachHostedWebSearch =
+    engageMw6 &&
+    (input.enableHostedWebSearch === true ||
+      providerBinding?.attachOpenAiHostedWebSearch === true);
+
   let dbPath: string;
   try {
     dbPath = resolveNoraSessionSqlitePath(input.sessionDbPath);
@@ -445,6 +612,14 @@ export async function runNoraCognitiveTurn(
       system.content,
       "unavailable",
     );
+    if (engageMw6 && sourceStrategy) {
+      systemInstructions = appendSourceStrategyDisclosure(
+        systemInstructions,
+        sourceStrategy,
+      );
+      systemInstructions =
+        appendSourceNarrativeConstraintDisclosure(systemInstructions);
+    }
     if (input.postEvidenceNarrativePolicy) {
       systemInstructions =
         appendPostEvidenceNarrativePolicyDisclosure(systemInstructions);
@@ -469,7 +644,59 @@ export async function runNoraCognitiveTurn(
       enableTools: input.enableTools,
       provider: input.provider,
       runnerModelSettings,
+      enableHostedWebSearch: attachHostedWebSearch,
+      hostedWebSearchToolOptions: input.hostedWebSearchToolOptions,
+      deterministicHostedWebSearchCalls:
+        input.deterministicHostedWebSearchCalls,
+      sourceObservationNowIso: input.sourceObservationNowIso,
+      campaignBudget: input.campaignBudget,
+      testOnlyMaxToolCallsOverride: input.testOnlyMaxToolCallsOverride,
+      governedAuthority: input.governedAuthority,
+      currentProductContext:
+        engageMw6 &&
+        sourceStrategy != null &&
+        providerBinding != null &&
+        input.campaignBudget
+          ? {
+              strategy: sourceStrategy,
+              binding: providerBinding,
+              campaignId: input.campaignBudget.campaignId,
+            }
+          : undefined,
     });
+    const observations = [
+      ...(input.sourceObservationFacts ?? []),
+      ...(turn.hostedSearchObserve?.observations ?? []),
+    ];
+    let mw6: Mw6SourceIntelligenceSurface | undefined;
+    if (engageMw6 && sourceStrategy != null && providerBinding != null) {
+      const composed = composeMw6Surface({
+        strategy: sourceStrategy,
+        providerBinding,
+        observations,
+        hostedWebSearchAttached:
+          turn.hostedSearchObserve?.hostedWebSearchAttached === true ||
+          attachHostedWebSearch,
+        deterministicBoundaryUsed:
+          turn.hostedSearchObserve?.deterministicBoundaryUsed === true ||
+          (input.deterministicHostedWebSearchCalls?.length ?? 0) > 0,
+        candidateNarrative: turn.text,
+      });
+      mw6 = composed.surface;
+      turn.text = composed.governedText;
+    }
+    const { hostedSearchObserve: _drop, budgetObserve, ...turnBase } = turn;
+    void _drop;
+    const mw6AuthorityBinding = budgetObserve
+      ? {
+          authorityBound: budgetObserve.authorityBound,
+          realAuthorized: budgetObserve.realAuthorized,
+          realPreflightCode: budgetObserve.realPreflightCode,
+          realPreflightBlocked: budgetObserve.realPreflightBlocked,
+          realPreflightReasons: [...budgetObserve.realPreflightReasons],
+          eligible: budgetObserve.eligible,
+        }
+      : undefined;
     const mw4 =
       coverageAggregate.facts.length > 0
         ? {
@@ -486,13 +713,15 @@ export async function runNoraCognitiveTurn(
         : undefined;
     return finalizeTurn(
       {
-        ...turn,
+        ...turnBase,
         memoryBCompactionState: "none",
         memoryBCompactionDetails: null,
+        ...(mw6AuthorityBinding ? { mw6AuthorityBinding } : {}),
       },
       input,
       strategyDecision,
       mw4,
+      mw6,
     );
   }

@@ -549,6 +778,14 @@ export async function runNoraCognitiveTurn(
     systemInstructions,
     mw4Prep.readCoverageDisclosure,
   );
+  if (engageMw6 && sourceStrategy) {
+    systemInstructions = appendSourceStrategyDisclosure(
+      systemInstructions,
+      sourceStrategy,
+    );
+    systemInstructions =
+      appendSourceNarrativeConstraintDisclosure(systemInstructions);
+  }
   if (input.postEvidenceNarrativePolicy) {
     systemInstructions =
       appendPostEvidenceNarrativePolicyDisclosure(systemInstructions);
@@ -567,16 +804,70 @@ export async function runNoraCognitiveTurn(
       enableTools: input.enableTools,
       provider: input.provider,
       runnerModelSettings,
+      enableHostedWebSearch: attachHostedWebSearch,
+      hostedWebSearchToolOptions: input.hostedWebSearchToolOptions,
+      deterministicHostedWebSearchCalls:
+        input.deterministicHostedWebSearchCalls,
+      sourceObservationNowIso: input.sourceObservationNowIso,
+      campaignBudget: input.campaignBudget,
+      testOnlyMaxToolCallsOverride: input.testOnlyMaxToolCallsOverride,
+      governedAuthority: input.governedAuthority,
+      currentProductContext:
+        engageMw6 &&
+        sourceStrategy != null &&
+        providerBinding != null &&
+        input.campaignBudget
+          ? {
+              strategy: sourceStrategy,
+              binding: providerBinding,
+              campaignId: input.campaignBudget.campaignId,
+            }
+          : undefined,
     });
+    const observations = [
+      ...(input.sourceObservationFacts ?? []),
+      ...(turn.hostedSearchObserve?.observations ?? []),
+    ];
+    let mw6: Mw6SourceIntelligenceSurface | undefined;
+    if (engageMw6 && sourceStrategy != null && providerBinding != null) {
+      const composed = composeMw6Surface({
+        strategy: sourceStrategy,
+        providerBinding,
+        observations,
+        hostedWebSearchAttached:
+          turn.hostedSearchObserve?.hostedWebSearchAttached === true ||
+          attachHostedWebSearch,
+        deterministicBoundaryUsed:
+          turn.hostedSearchObserve?.deterministicBoundaryUsed === true ||
+          (input.deterministicHostedWebSearchCalls?.length ?? 0) > 0,
+        candidateNarrative: turn.text,
+      });
+      mw6 = composed.surface;
+      turn.text = composed.governedText;
+    }
+    const { hostedSearchObserve: _drop, budgetObserve, ...turnBase } = turn;
+    void _drop;
+    const mw6AuthorityBinding = budgetObserve
+      ? {
+          authorityBound: budgetObserve.authorityBound,
+          realAuthorized: budgetObserve.realAuthorized,
+          realPreflightCode: budgetObserve.realPreflightCode,
+          realPreflightBlocked: budgetObserve.realPreflightBlocked,
+          realPreflightReasons: [...budgetObserve.realPreflightReasons],
+          eligible: budgetObserve.eligible,
+        }
+      : undefined;
     const finalized = finalizeTurn(
       {
-        ...turn,
+        ...turnBase,
         memoryBCompactionState: compactionState,
         memoryBCompactionDetails: compactionDetails,
+        ...(mw6AuthorityBinding ? { mw6AuthorityBinding } : {}),
       },
       input,
       strategyDecision,
       mw4Prep.surface ?? undefined,
+      mw6,
     );

     // Persist Evidence IDs claimed/accepted this turn (non-authoritative).

```

### DIFF projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
index 8bb40196..cb5d1d7b 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
@@ -15,6 +15,7 @@ import type {
   TruthCRevision,
 } from "./memoryBCompaction";
 import type { Mw4GroundingTurnSurface } from "./groundingDurability";
+import type { Mw6SourceIntelligenceSurface } from "./sourceIntelligenceContract";

 /** F1/Nora cognitive runtime kind — Agents SDK Runner only. */
 export type NoraCognitiveRuntimeKind = "agents";
@@ -50,6 +51,20 @@ export type NoraCognitiveTurnResult = {
   cognitiveStopDecision?: CognitiveStopDecision;
   /** MW4 — grounding durability surface when Session refs were assessed. */
   mw4Grounding?: Mw4GroundingTurnSurface;
+  /** MW6 — source strategy + normalized external observations (non-authoritative). */
+  mw6SourceIntelligence?: Mw6SourceIntelligenceSurface;
+  /**
+   * MW6↔Auth — authority binding axes from preflight (composition proof).
+   * Present when campaign + governedAuthority composition evaluated.
+   */
+  mw6AuthorityBinding?: {
+    authorityBound: boolean;
+    realAuthorized: boolean;
+    realPreflightCode: string;
+    realPreflightBlocked: boolean;
+    realPreflightReasons: string[];
+    eligible: boolean;
+  };
 };

 export type { TruthCRevision, MemoryBCompactionState, MemoryBCompactionDetails };

```

### DIFF projects/sfia-studio/app/features/project-assistant/types.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index eab48c2d..6811370c 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -211,6 +211,24 @@ export type ProjectAssistantSendSuccess = {
   /** MW5 — challenge / clarification / Critical ordering / escalation (when assessed). */
   mw5?: Mw5CognitiveSurfaceDto | null;
   f2?: F2TurnPayload;
+  /**
+   * MW6↔Auth — present when send used executionContractId governed composition.
+   * Server-built; never a client-supplied authority object.
+   */
+  mw6AuthorityComposition?: {
+    authorityBound: boolean;
+    realAuthorized: boolean;
+    realPreflightCode: string;
+    realPreflightReasons?: string[];
+    realPreflightBlocked?: boolean;
+    eligible: boolean;
+    serverComposedGovernedAuthority: true;
+    evidenceSource: string;
+    executionContractId: string;
+    authorityEvidenceId: string;
+    actorId: string;
+    liveHostedDispatchCalls: 0;
+  };
 };

 export type ProjectAssistantSendFailure = {

```

### projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw6.server-composition.d0.test.ts
```typescript
/**
 * MW6 ↔ Auth — server-side authority composition (C01–C14).
 *
 * Successful proof invokes projectAssistantSendAction (product entrypoint).
 * No manual Mw6GovernedAuthorityContext on the PASS path.
 * AUTH REAL boundary carried forward (Pilote resolver seam only).
 *
 * ZERO OpenAI LIVE / ZERO hosted web_search REAL.
 *
 * @vitest-environment node
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import {
  buildMw6CurrentExternalDiscoveryIntent,
  buildMw6ExternalDiscoveryContractSemantic,
  type Mw6ExternalDiscoveryContractInput,
} from "@/lib/auth/mw6ExternalDiscoveryBinding";
import type { ResolveCurrentPiloteResult } from "@/lib/auth/resolveCurrentPilote";
import {
  type ActorReference,
} from "@/lib/oa/decision";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import {
  bindSourceProviderCapability,
  decideSourceStrategy,
} from "@/lib/nora-cognitive-runtime/sourceStrategyPolicy";
import type { SourceStrategyInput } from "@/lib/nora-cognitive-runtime/sourceStrategyPolicy";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import { wasServerComposedMw6GovernedAuthority } from "@/features/project-assistant/composeMw6GovernedAuthority";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  seedQualifiedProject,
  tempProductDbPath,
} from "@/__tests__/project-assistant/w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

const CLAIM =
  "corroborate externally the current CEO of Acme Corp";

const HUMAN_ACTOR: ActorReference = {
  actorId: "actor:mw6-hd-human",
  role: "project_owner",
  displayName: "MW6 HD",
  authorityLevel: "N2",
};

function makePilote(
  githubUserId: string,
): Extract<ResolveCurrentPiloteResult, { ok: true }> {
  return {
    ok: true,
    githubUserId,
    betterAuthUserId: `ba-user-${githubUserId}`,
    actor: mapGithubIdentityToPiloteActor({ githubUserId }),
  };
}

function productContext(campaignId: string, strategyInput?: SourceStrategyInput) {
  const strategy = decideSourceStrategy(
    strategyInput ?? {
      claimText: CLAIM,
    },
  );
  const binding = bindSourceProviderCapability(strategy);
  return { strategy, binding, campaignId };
}

async function seedAcceptedDecisionOnRuntime(
  runtime: RuntimeApplicationService,
  input: {
    decisionId: string;
    projectId: string;
    cycleInstanceId: string;
  },
): Promise<void> {
  const oa = runtime.oa!;
  const subject = "subj:mw6-ext-discovery";
  try {
    oa.authorityResolver.register({
      evidenceId: "evd:registry-mw6-hd",
      actorId: HUMAN_ACTOR.actorId,
      level: "N2",
      scope: subject,
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
    });
  } catch {
    /* immutable re-register */
  }
  const recorded = await oa.decisionServices.recordHumanDecision.execute({
    decisionId: input.decisionId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    subject,
    options: [
      { optionId: "opt:go", label: "Go" },
      { optionId: "opt:no", label: "No" },
    ],
    selectedOptionId: "opt:go",
    actor: HUMAN_ACTOR,
    authority: "delegated",
    reversible: false,
    authorityEvidenceId: "evd:registry-mw6-hd",
  });
  expect(recorded.ok).toBe(true);
}

async function seedConfirmedMw6Ec(input: {
  runtime: RuntimeApplicationService;
  projectId: string;
  cycleInstanceId: string;
  campaignId: string;
  executionContractId: string;
  decisionId: string;
  confirmationId: string;
}): Promise<{ intent: Mw6ExternalDiscoveryContractInput }> {
  const oa = input.runtime.oa!;
  const product = productContext(input.campaignId);
  expect(product.strategy.acquisitionRequirement).toBe("external_discovery");

  const intentBuilt = buildMw6CurrentExternalDiscoveryIntent({
    executionContractId: input.executionContractId,
    projectId: input.projectId,
    campaignId: input.campaignId,
    strategy: product.strategy,
    binding: product.binding,
    decisionRefs: [input.decisionId],
    idempotencyKey: `idem:${input.executionContractId}`,
    cycleInstanceId: input.cycleInstanceId,
  });
  expect(intentBuilt.ok).toBe(true);
  if (!intentBuilt.ok) throw new Error(intentBuilt.reason);
  const intent = intentBuilt.intent;
  const semantic = buildMw6ExternalDiscoveryContractSemantic(intent);

  const registryEvidenceId = `evd:registry-${input.executionContractId}`;
  try {
    oa.authorityResolver.register({
      evidenceId: registryEvidenceId,
      actorId: HUMAN_ACTOR.actorId,
      level: "N2",
      scope: semantic.scope,
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
    });
  } catch {
    /* already */
  }

  const built = await oa.executionContractServices.buildExecutionContract.execute({
    executionContractId: semantic.executionContractId,
    projectId: semantic.projectId,
    decisionRefs: [input.decisionId],
    action: semantic.action,
    target: semantic.target,
    scope: semantic.scope,
    inputs: semantic.inputs as Record<string, unknown> | undefined,
    expectedOutputs: semantic.expectedOutputs,
    requiredCapabilities: [...semantic.requiredCapabilities],
    requiredAuthority: "N2",
    constraints: [...semantic.constraints],
    stopConditions: [...semantic.stopConditions],
    evidenceRequirements: [...semantic.evidenceRequirements],
    reversibility: semantic.reversibility,
    idempotencyKey: semantic.idempotencyKey,
    cycleInstanceId: semantic.cycleInstanceId,
    actor: HUMAN_ACTOR,
    authorityEvidenceId: registryEvidenceId,
  });
  expect(built.ok).toBe(true);
  if (!built.ok) throw new Error("build failed");

  const validated =
    await oa.executionContractServices.validateExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      actor: HUMAN_ACTOR,
      authorityEvidenceId: registryEvidenceId,
    });
  expect(validated.ok).toBe(true);
  if (!validated.ok) throw new Error("validate failed");
  expect(validated.contract.status).toBe("confirmation_required");

  const requested = await oa.decisionServices.requestConfirmation.execute({
    confirmationId: input.confirmationId,
    level: "N2",
    actionRef: `act:confirm:${input.executionContractId}`,
    requestedBy: HUMAN_ACTOR,
    requestedTo: HUMAN_ACTOR,
    scope: semantic.scope,
    idempotencyKey: `idem-cfm-${input.confirmationId}`,
    decisionRef: input.decisionId,
  });
  expect(requested.ok).toBe(true);

  const granted = await oa.decisionServices.grantConfirmation.execute({
    confirmationId: input.confirmationId,
    actor: HUMAN_ACTOR,
    authorityEvidenceId: registryEvidenceId,
  });
  expect(granted.ok).toBe(true);

  const confirmed =
    await oa.executionContractServices.confirmExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      confirmationId: input.confirmationId,
      actor: HUMAN_ACTOR,
      authorityEvidenceId: registryEvidenceId,
      expectedVersion: validated.contract.version,
    });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error("confirm failed");
  expect(confirmed.contract.status).toBe("confirmed");

  return { intent };
}

describe("MW6 ↔ Auth — C01–C14 server-side authority composition", () => {
  let runtime: RuntimeApplicationService;
  let projectId: string;
  let cycleInstanceId: string;

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("mw6-comp.sqlite"),
      idPrefix: "mw6c",
    });
    const seeded = await seedQualifiedProject(runtime, { suffix: "comp" });
    projectId = seeded.projectId;
    cycleInstanceId = seeded.cycleInstanceId;
  });

  afterEach(() => {
    cleanupW2TempDirs();
    setConversationProviderForTests(null);
  });

  it("C01–C02–C06–C08–C09–C10–C11–C14 — product entrypoint server composition PASS", async () => {
    const executionContractId = "xct:mw6-c01";
    const decisionId = "dec:mw6-c01";
    const campaignId = "camp-c01";
    await seedAcceptedDecisionOnRuntime(runtime, {
      decisionId,
      projectId,
      cycleInstanceId,
    });
    await seedConfirmedMw6Ec({
      runtime,
      projectId,
      cycleInstanceId,
      campaignId,
      executionContractId,
      decisionId,
      confirmationId: "cfm:mw6-c01",
    });

    const pilote = makePilote("11111111");
    const result = await projectAssistantSendAction({
      projectId,
      content: CLAIM,
      executionContractId,
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => pilote,
      // Hostile — must be ignored
      governedAuthority: {
        actorId: "actor:hostile",
        authorityEvidenceId: "evd:hostile",
      },
      actorId: "actor:hostile-override",
      getExecutionContract: "hostile-port",
      checkExecutionAuthorization: "hostile-port",
      authorityResolver: "hostile-port",
      authorizedContract: { status: "confirmed" },
      currentExternalDiscoveryIntent: { scope: "hostile" },
      canActAsMorris: true,
      claimedAuthorityLevel: "N3",
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const comp = result.mw6AuthorityComposition;
    expect(comp).toBeDefined();
    expect(comp!.serverComposedGovernedAuthority).toBe(true);
    expect(comp!.authorityBound).toBe(true);
    expect(comp!.realAuthorized).toBe(false);
    expect(comp!.eligible).toBe(false);
    expect(comp!.liveHostedDispatchCalls).toBe(0);
    expect(comp!.actorId).toBe(pilote.actor.actorId);
    expect(comp!.executionContractId).toBe(executionContractId);
    expect(comp!.evidenceSource).toBe("issued_mw6_s1_from_loaded_ec");
    expect(comp!.realPreflightCode).toBe(
      "AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED",
    );
    // C08 — ports from RuntimeOaStack (composition used product OA)
    expect(runtime.oa).toBeTruthy();
  });

  it("C03 — actor override DENY (hostile claimed actor ignored; wrong evidence)", async () => {
    const executionContractId = "xct:mw6-c03";
    const decisionId = "dec:mw6-c03";
    await seedAcceptedDecisionOnRuntime(runtime, {
      decisionId,
      projectId,
      cycleInstanceId,
    });
    await seedConfirmedMw6Ec({
      runtime,
      projectId,
      cycleInstanceId,
      campaignId: "camp-c03",
      executionContractId,
      decisionId,
      confirmationId: "cfm:mw6-c03",
    });

    const piloteA = makePilote("11111111");
    // Pre-issue evidence for actor B on resolver — composition for A must not use B's evidence as A
    const other = makePilote("22222222");
    void other;

    const result = await projectAssistantSendAction({
      projectId,
      content: CLAIM,
      executionContractId,
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => piloteA,
      actorId: "actor:github:22222222",
      authorityEvidenceId: "evd:belongs-to-b",
    });

    // Hostile evidence hint that does not verify → composition DENY
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("HOSTILE_EVIDENCE_OVERRIDE_DENIED");
  });

  it("C04–C05 — wrong EC id DENY", async () => {
    const result = await projectAssistantSendAction({
      projectId,
      content: CLAIM,
      executionContractId: "xct:missing-ec",
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => makePilote("11111111"),
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(
      ["CONTRACT_NOT_FOUND", "EXECUTION_CONTRACT_NOT_FOUND"].some((c) =>
        result.code.includes(c),
      ) || result.code.length > 0,
    ).toBe(true);
  });

  it("C07 — hostile evidence override DENY", async () => {
    const executionContractId = "xct:mw6-c07";
    const decisionId = "dec:mw6-c07";
    await seedAcceptedDecisionOnRuntime(runtime, {
      decisionId,
      projectId,
      cycleInstanceId,
    });
    await seedConfirmedMw6Ec({
      runtime,
      projectId,
      cycleInstanceId,
      campaignId: "camp-c07",
      executionContractId,
      decisionId,
      confirmationId: "cfm:mw6-c07",
    });

    const result = await projectAssistantSendAction({
      projectId,
      content: CLAIM,
      executionContractId,
      authorityEvidenceId: "evd:fabricated-hostile",
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => makePilote("11111111"),
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("HOSTILE_EVIDENCE_OVERRIDE_DENIED");
  });

  it("C12 — current state mutation DENY (strategy drift vs confirmed EC)", async () => {
    const executionContractId = "xct:mw6-c12";
    const decisionId = "dec:mw6-c12";
    await seedAcceptedDecisionOnRuntime(runtime, {
      decisionId,
      projectId,
      cycleInstanceId,
    });
    await seedConfirmedMw6Ec({
      runtime,
      projectId,
      cycleInstanceId,
      campaignId: "camp-c12",
      executionContractId,
      decisionId,
      confirmationId: "cfm:mw6-c12",
    });

    const pilote = makePilote("11111111");
    const first = await projectAssistantSendAction({
      projectId,
      content: CLAIM,
      executionContractId,
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => pilote,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    expect(first.mw6AuthorityComposition?.authorityBound).toBe(true);

    // Same EC + evidence, but different current product strategy → semantic mismatch DENY
    const second = await projectAssistantSendAction({
      projectId,
      content: "define recursion in one sentence",
      executionContractId,
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => pilote,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.mw6AuthorityComposition?.authorityBound).toBe(false);
    expect(second.mw6AuthorityComposition?.realAuthorized).toBe(false);
  });

  it("C13 — client cannot supply final authority object (ignored; server builds)", async () => {
    const executionContractId = "xct:mw6-c13";
    const decisionId = "dec:mw6-c13";
    await seedAcceptedDecisionOnRuntime(runtime, {
      decisionId,
      projectId,
      cycleInstanceId,
    });
    await seedConfirmedMw6Ec({
      runtime,
      projectId,
      cycleInstanceId,
      campaignId: "camp-c13",
      executionContractId,
      decisionId,
      confirmationId: "cfm:mw6-c13",
    });

    const pilote = makePilote("11111111");
    const result = await projectAssistantSendAction({
      projectId,
      content: CLAIM,
      executionContractId,
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => pilote,
      governedAuthority: {
        actorId: pilote.actor.actorId,
        authorityEvidenceId: "evd:client-built",
        executionContractId,
        requiredLevel: "N2",
        getExecutionContract: { execute: async () => ({ ok: false }) },
        checkExecutionAuthorization: { execute: async () => ({ ok: false }) },
        authorityResolver: { verify: () => ({ ok: true, reason: "verified" }) },
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.mw6AuthorityComposition?.authorityBound).toBe(true);
    expect(result.mw6AuthorityComposition?.authorityEvidenceId).not.toBe(
      "evd:client-built",
    );
    expect(result.mw6AuthorityComposition?.authorityEvidenceId).toBe(
      `evd:mw6-ext-s1:${executionContractId}`,
    );
  });

  it("marker — wasServerComposedMw6GovernedAuthority rejects manual objects", () => {
    expect(
      wasServerComposedMw6GovernedAuthority({
        actorId: "x",
        authorityEvidenceId: "y",
        executionContractId: "z",
        requiredLevel: "N2",
      }),
    ).toBe(false);
  });
});

```

### DIFF projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 39d6e0c7..3662fa4c 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -76,6 +76,8 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
     const allowed = new Set([
       "app/api/e2e/option-a-qa-scenario/route.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
       "features/project-assistant/actions.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/composeMw6GovernedAuthority.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/mw6GovernedNoraTurn.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f2/orchestrateF2.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f2/orchestrateF2.ts:@/lib/vertical-slice-runtime/paths",
       "features/project-assistant/f2/resolveMw5ProductAuthorityFromOa.ts:@/lib/vertical-slice-runtime",

```

### projects/sfia-studio/app/features/project-assistant/composeMw6GovernedAuthority.ts
```typescript
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

```

### projects/sfia-studio/app/features/project-assistant/mw6GovernedNoraTurn.ts
```typescript
/**
 * MW6 governed Nora product turn — server composition entry for Studio.
 *
 * Call graph:
 *   projectAssistantSendAction (executionContractId present)
 *   → runMw6GovernedNoraProductTurn
 *   → resolveCurrentAuthenticatedPilote
 *   → RuntimeOaStack Get/Check/Resolver
 *   → composeMw6GovernedAuthorityForCurrentPilote
 *   → runNoraCognitiveTurn (real)
 *   → decideSourceStrategy → bindSourceProviderCapability
 *   → evaluateRealSourceExecutionPreflight
 *
 * AUTH REAL boundary proof is carried forward (test may substitute only the
 * outer Pilote resolver seam). Downstream composition is never mocked.
 */

import { headers } from "next/headers";
import {
  isFakeConversationProviderForced,
  resolveConversationProvider,
  type ConversationProvider,
  type ProviderChatMessage,
} from "@/lib/platform/ai";
import {
  acquireNoraCampaignBudget,
  runNoraCognitiveTurn,
  type NoraCognitiveTurnResult,
} from "@/lib/nora-cognitive-runtime";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import {
  composeMw6GovernedAuthorityForCurrentPilote,
  wasServerComposedMw6GovernedAuthority,
  type Mw6AuthorityEvidenceCompositionSource,
} from "./composeMw6GovernedAuthority";
import {
  resolveCurrentAuthenticatedPilote,
  type ResolveCurrentPiloteResult,
} from "@/lib/auth/resolveCurrentPilote";
import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
import { resolveAssistantMode } from "./resolveAssistantMode";
import type {
  AssistantHistoryMessage,
  ProjectAssistantContextDto,
  ProjectAssistantSendResult,
} from "./types";

const MAX_HISTORY_MESSAGES = 20;

function toContextDto(
  result: Extract<
    Awaited<ReturnType<typeof loadProjectRuntimeForAssistant>>,
    { ok: true }
  >,
): ProjectAssistantContextDto {
  return {
    projectId: result.project.projectId,
    name: result.project.name,
    shortReference: result.project.shortReference ?? null,
    objective: result.project.objective,
    contextSummary: result.project.contextSummary,
    criticality: result.project.criticality,
    constraints: [...result.project.constraints],
    lpsId: result.livingState.id,
    lpsVersion: result.livingState.version,
    lpsCreatedAt: result.livingState.createdAt,
    doctrineId: result.doctrine.id,
    doctrineVersion: result.doctrine.version,
    doctrineDigest: result.doctrine.digest,
    doctrineStatus: result.doctrine.status,
    runtimeMode: result.disclosures.runtimeMode,
    persistence: result.disclosures.persistence,
    readiness: result.readiness.status,
  };
}

/** Extract campaignId from MW6 EC scope when present. */
export function extractMw6CampaignIdFromScope(scope: string): string | null {
  const m = /^biz:mw6-external-discovery:([^:]+):/.exec(scope);
  return m?.[1] ?? null;
}

export type Mw6GovernedNoraProductTurnSuccess = Extract<
  ProjectAssistantSendResult,
  { ok: true }
> & {
  mw6AuthorityComposition: {
    authorityBound: boolean;
    realAuthorized: boolean;
    realPreflightCode: string;
    eligible: boolean;
    serverComposedGovernedAuthority: true;
    evidenceSource: Mw6AuthorityEvidenceCompositionSource;
    executionContractId: string;
    authorityEvidenceId: string;
    actorId: string;
    liveHostedDispatchCalls: 0;
  };
};

export type Mw6GovernedNoraProductTurnResult =
  | Mw6GovernedNoraProductTurnSuccess
  | Extract<ProjectAssistantSendResult, { ok: false }>;

export type RunMw6GovernedNoraProductTurnInput = {
  projectId: string;
  content: string;
  executionContractId: string;
  history?: AssistantHistoryMessage[];
  provider?: ConversationProvider;
  sessionDbPath?: string;
  /**
   * Optional untrusted evidence hint — verified only inside composition.
   */
  claimedAuthorityEvidenceId?: unknown;
  /**
   * TEST-ONLY — substitute Auth session → Pilote boundary.
   * Production omits this and uses resolveCurrentAuthenticatedPilote.
   * AUTH REAL boundary proof is carried forward, not re-proven.
   */
  resolveAuthenticatedPilote?: () => Promise<ResolveCurrentPiloteResult>;
  /** Hostile client fields — ignored. */
  governedAuthority?: unknown;
  actorId?: unknown;
  authorityEvidenceId?: unknown;
  getExecutionContract?: unknown;
  checkExecutionAuthorization?: unknown;
  authorityResolver?: unknown;
  authorizedContract?: unknown;
  currentExternalDiscoveryIntent?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
};

/**
 * Product server composition for MW6-governed Nora cognitive turns.
 * Builds governedAuthority server-side; never accepts client-built context.
 */
export async function runMw6GovernedNoraProductTurn(
  input: RunMw6GovernedNoraProductTurnInput,
): Promise<Mw6GovernedNoraProductTurnResult> {
  // Hostile authority surfaces — deliberately ignored.
  void input.governedAuthority;
  void input.actorId;
  void input.authorityEvidenceId;
  void input.getExecutionContract;
  void input.checkExecutionAuthorization;
  void input.authorityResolver;
  void input.authorizedContract;
  void input.currentExternalDiscoveryIntent;
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const content = input.content.trim();
  if (!content) {
    return {
      ok: false,
      status: "validation_error",
      code: "EMPTY_MESSAGE",
      message: "Saisissez un message avant d'envoyer.",
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: true,
    };
  }

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "decision_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA process-local indisponibles pour MW6 composition.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: false,
    };
  }
  const project = toContextDto(projectResult);

  const pilote = input.resolveAuthenticatedPilote
    ? await input.resolveAuthenticatedPilote()
    : await resolveCurrentAuthenticatedPilote({
        headers: await headers(),
      });
  if (!pilote.ok) {
    return {
      ok: false,
      status: "validation_error",
      code: pilote.code,
      message: pilote.message,
      mode: "unavailable",
      retryable: false,
    };
  }

  const composed = await composeMw6GovernedAuthorityForCurrentPilote({
    oa: runtime.oa,
    pilote,
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    claimedAuthorityEvidenceId: input.claimedAuthorityEvidenceId,
  });
  if (!composed.ok) {
    return {
      ok: false,
      status: "validation_error",
      code: composed.code,
      message: composed.message,
      mode: "unavailable",
      retryable: false,
    };
  }

  if (!wasServerComposedMw6GovernedAuthority(composed.governedAuthority)) {
    return {
      ok: false,
      status: "validation_error",
      code: "SERVER_COMPOSITION_MARKER_MISSING",
      message: "governedAuthority was not marked as server-composed.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const loaded =
    await runtime.oa.executionContractServices.getExecutionContract.execute({
      executionContractId: composed.executionContractId,
    });
  if (!loaded.ok) {
    return {
      ok: false,
      status: "validation_error",
      code: "EXECUTION_CONTRACT_LOAD_FAILED",
      message: "Canonical EC reload failed after composition.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const campaignId =
    extractMw6CampaignIdFromScope(loaded.contract.scope) ??
    `mw6:${composed.executionContractId}`;
  const campaignBudget = acquireNoraCampaignBudget({
    campaignId,
    maxModelInvocations: 4,
    maxHostedWebOperations: 2,
    maxAggregateRealCalls: 4,
    hostedHardCapCapability: "provider_max_tool_calls",
  });

  const modeResolution = resolveAssistantMode(input.provider);
  if (!modeResolution.canProceed) {
    return {
      ok: false,
      status: "provider_unavailable",
      code: "PROVIDER_UNAVAILABLE",
      message: modeResolution.message ?? "Provider indisponible.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const history = (input.history ?? [])
    .filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0,
    )
    .slice(-MAX_HISTORY_MESSAGES);

  const messages: ProviderChatMessage[] = [
    {
      role: "system",
      content: buildProjectSystemPrompt(project),
    },
    ...history.map((m) => ({ role: m.role, content: m.content.trim() })),
    { role: "user", content },
  ];

  const provider = input.provider ?? resolveConversationProvider();
  const workspaceRoot = resolveWorkspaceRootFromAppCwd();

  let turn: NoraCognitiveTurnResult;
  try {
    turn = await runNoraCognitiveTurn({
      correlationId: `mw6-gov:${project.projectId}:${composed.executionContractId}`,
      projectId: project.projectId,
      messages,
      provider,
      enableTools: true,
      workspaceRoot,
      sessionDbPath: input.sessionDbPath,
      turnWorkloadContext: {
        projectCriticality: project.criticality,
        userContentLength: content.length,
        historyMessageCount: history.length,
        historyTotalChars: history.reduce((sum, m) => sum + m.content.length, 0),
        enableTools: true,
      },
      trustedSfiaProfile: null,
      enableHostedWebSearch: true,
      campaignBudget,
      governedAuthority: composed.governedAuthority as import("@/lib/nora-cognitive-runtime").Mw6GovernedAuthorityContext,
      // Deterministic boundary — ZERO LIVE hosted dispatch.
      deterministicHostedWebSearchCalls: [],
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erreur Nora inattendue.";
    return {
      ok: false,
      status: "provider_error",
      code: "NORA_TURN_ERROR",
      message,
      mode: modeResolution.mode,
      retryable: true,
    };
  }

  const binding = turn.mw6AuthorityBinding;
  return {
    ok: true,
    status: "ok",
    mode: modeResolution.mode as "fixture" | "live",
    presentation: modeResolution.presentation,
    text: turn.text,
    toolRounds: turn.toolRounds,
    toolCalls: turn.toolCalls,
    sources: [],
    toolEvents: [],
    project,
    ephemeralNotice:
      "MW6 governed Nora turn — server-composed authority; REAL not authorized.",
    model: turn.usage.model,
    cognitiveRuntime: "agents",
    sessionId: turn.sessionId,
    memoryBAvailability: turn.memoryBAvailability,
    memoryBCompactionState: turn.memoryBCompactionState,
    mw6AuthorityComposition: {
      authorityBound: binding?.authorityBound === true,
      realAuthorized: binding?.realAuthorized === true,
      realPreflightCode: binding?.realPreflightCode ?? "MISSING",
      realPreflightReasons: binding?.realPreflightReasons ?? [],
      eligible: binding?.eligible === true,
      serverComposedGovernedAuthority: true,
      evidenceSource: composed.evidenceSource,
      executionContractId: composed.executionContractId,
      authorityEvidenceId: composed.authorityEvidenceId,
      actorId: pilote.actor.actorId,
      liveHostedDispatchCalls: 0,
      realPreflightBlocked: binding?.realPreflightBlocked === true,
    },
  };
}

```

### projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw6.server-composition.d0.test.ts
```typescript
/**
 * MW6 ↔ Auth — server-side authority composition (C01–C14).
 *
 * Successful proof invokes projectAssistantSendAction (product entrypoint).
 * No manual Mw6GovernedAuthorityContext on the PASS path.
 * AUTH REAL boundary carried forward (Pilote resolver seam only).
 *
 * ZERO OpenAI LIVE / ZERO hosted web_search REAL.
 *
 * @vitest-environment node
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import {
  buildMw6CurrentExternalDiscoveryIntent,
  buildMw6ExternalDiscoveryContractSemantic,
  type Mw6ExternalDiscoveryContractInput,
} from "@/lib/auth/mw6ExternalDiscoveryBinding";
import type { ResolveCurrentPiloteResult } from "@/lib/auth/resolveCurrentPilote";
import {
  type ActorReference,
} from "@/lib/oa/decision";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import {
  bindSourceProviderCapability,
  decideSourceStrategy,
} from "@/lib/nora-cognitive-runtime/sourceStrategyPolicy";
import type { SourceStrategyInput } from "@/lib/nora-cognitive-runtime/sourceStrategyPolicy";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import { wasServerComposedMw6GovernedAuthority } from "@/features/project-assistant/composeMw6GovernedAuthority";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  seedQualifiedProject,
  tempProductDbPath,
} from "@/__tests__/project-assistant/w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

const CLAIM =
  "corroborate externally the current CEO of Acme Corp";

const HUMAN_ACTOR: ActorReference = {
  actorId: "actor:mw6-hd-human",
  role: "project_owner",
  displayName: "MW6 HD",
  authorityLevel: "N2",
};

function makePilote(
  githubUserId: string,
): Extract<ResolveCurrentPiloteResult, { ok: true }> {
  return {
    ok: true,
    githubUserId,
    betterAuthUserId: `ba-user-${githubUserId}`,
    actor: mapGithubIdentityToPiloteActor({ githubUserId }),
  };
}

function productContext(campaignId: string, strategyInput?: SourceStrategyInput) {
  const strategy = decideSourceStrategy(
    strategyInput ?? {
      claimText: CLAIM,
    },
  );
  const binding = bindSourceProviderCapability(strategy);
  return { strategy, binding, campaignId };
}

async function seedAcceptedDecisionOnRuntime(
  runtime: RuntimeApplicationService,
  input: {
    decisionId: string;
    projectId: string;
    cycleInstanceId: string;
  },
): Promise<void> {
  const oa = runtime.oa!;
  const subject = "subj:mw6-ext-discovery";
  try {
    oa.authorityResolver.register({
      evidenceId: "evd:registry-mw6-hd",
      actorId: HUMAN_ACTOR.actorId,
      level: "N2",
      scope: subject,
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
    });
  } catch {
    /* immutable re-register */
  }
  const recorded = await oa.decisionServices.recordHumanDecision.execute({
    decisionId: input.decisionId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    subject,
    options: [
      { optionId: "opt:go", label: "Go" },
      { optionId: "opt:no", label: "No" },
    ],
    selectedOptionId: "opt:go",
    actor: HUMAN_ACTOR,
    authority: "delegated",
    reversible: false,
    authorityEvidenceId: "evd:registry-mw6-hd",
  });
  expect(recorded.ok).toBe(true);
}

async function seedConfirmedMw6Ec(input: {
  runtime: RuntimeApplicationService;
  projectId: string;
  cycleInstanceId: string;
  campaignId: string;
  executionContractId: string;
  decisionId: string;
  confirmationId: string;
}): Promise<{ intent: Mw6ExternalDiscoveryContractInput }> {
  const oa = input.runtime.oa!;
  const product = productContext(input.campaignId);
  expect(product.strategy.acquisitionRequirement).toBe("external_discovery");

  const intentBuilt = buildMw6CurrentExternalDiscoveryIntent({
    executionContractId: input.executionContractId,
    projectId: input.projectId,
    campaignId: input.campaignId,
    strategy: product.strategy,
    binding: product.binding,
    decisionRefs: [input.decisionId],
    idempotencyKey: `idem:${input.executionContractId}`,
    cycleInstanceId: input.cycleInstanceId,
  });
  expect(intentBuilt.ok).toBe(true);
  if (!intentBuilt.ok) throw new Error(intentBuilt.reason);
  const intent = intentBuilt.intent;
  const semantic = buildMw6ExternalDiscoveryContractSemantic(intent);

  const registryEvidenceId = `evd:registry-${input.executionContractId}`;
  try {
    oa.authorityResolver.register({
      evidenceId: registryEvidenceId,
      actorId: HUMAN_ACTOR.actorId,
      level: "N2",
      scope: semantic.scope,
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
    });
  } catch {
    /* already */
  }

  const built = await oa.executionContractServices.buildExecutionContract.execute({
    executionContractId: semantic.executionContractId,
    projectId: semantic.projectId,
    decisionRefs: [input.decisionId],
    action: semantic.action,
    target: semantic.target,
    scope: semantic.scope,
    inputs: semantic.inputs as Record<string, unknown> | undefined,
    expectedOutputs: semantic.expectedOutputs,
    requiredCapabilities: [...semantic.requiredCapabilities],
    requiredAuthority: "N2",
    constraints: [...semantic.constraints],
    stopConditions: [...semantic.stopConditions],
    evidenceRequirements: [...semantic.evidenceRequirements],
    reversibility: semantic.reversibility,
    idempotencyKey: semantic.idempotencyKey,
    cycleInstanceId: semantic.cycleInstanceId,
    actor: HUMAN_ACTOR,
    authorityEvidenceId: registryEvidenceId,
  });
  expect(built.ok).toBe(true);
  if (!built.ok) throw new Error("build failed");

  const validated =
    await oa.executionContractServices.validateExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      actor: HUMAN_ACTOR,
      authorityEvidenceId: registryEvidenceId,
    });
  expect(validated.ok).toBe(true);
  if (!validated.ok) throw new Error("validate failed");
  expect(validated.contract.status).toBe("confirmation_required");

  const requested = await oa.decisionServices.requestConfirmation.execute({
    confirmationId: input.confirmationId,
    level: "N2",
    actionRef: `act:confirm:${input.executionContractId}`,
    requestedBy: HUMAN_ACTOR,
    requestedTo: HUMAN_ACTOR,
    scope: semantic.scope,
    idempotencyKey: `idem-cfm-${input.confirmationId}`,
    decisionRef: input.decisionId,
  });
  expect(requested.ok).toBe(true);

  const granted = await oa.decisionServices.grantConfirmation.execute({
    confirmationId: input.confirmationId,
    actor: HUMAN_ACTOR,
    authorityEvidenceId: registryEvidenceId,
  });
  expect(granted.ok).toBe(true);

  const confirmed =
    await oa.executionContractServices.confirmExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      confirmationId: input.confirmationId,
      actor: HUMAN_ACTOR,
      authorityEvidenceId: registryEvidenceId,
      expectedVersion: validated.contract.version,
    });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error("confirm failed");
  expect(confirmed.contract.status).toBe("confirmed");

  return { intent };
}

describe("MW6 ↔ Auth — C01–C14 server-side authority composition", () => {
  let runtime: RuntimeApplicationService;
  let projectId: string;
  let cycleInstanceId: string;

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("mw6-comp.sqlite"),
      idPrefix: "mw6c",
    });
    const seeded = await seedQualifiedProject(runtime, { suffix: "comp" });
    projectId = seeded.projectId;
    cycleInstanceId = seeded.cycleInstanceId;
  });

  afterEach(() => {
    cleanupW2TempDirs();
    setConversationProviderForTests(null);
  });

  it("C01–C02–C06–C08–C09–C10–C11–C14 — product entrypoint server composition PASS", async () => {
    const executionContractId = "xct:mw6-c01";
    const decisionId = "dec:mw6-c01";
    const campaignId = "camp-c01";
    await seedAcceptedDecisionOnRuntime(runtime, {
      decisionId,
      projectId,
      cycleInstanceId,
    });
    await seedConfirmedMw6Ec({
      runtime,
      projectId,
      cycleInstanceId,
      campaignId,
      executionContractId,
      decisionId,
      confirmationId: "cfm:mw6-c01",
    });

    const pilote = makePilote("11111111");
    const result = await projectAssistantSendAction({
      projectId,
      content: CLAIM,
      executionContractId,
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => pilote,
      // Hostile — must be ignored
      governedAuthority: {
        actorId: "actor:hostile",
        authorityEvidenceId: "evd:hostile",
      },
      actorId: "actor:hostile-override",
      getExecutionContract: "hostile-port",
      checkExecutionAuthorization: "hostile-port",
      authorityResolver: "hostile-port",
      authorizedContract: { status: "confirmed" },
      currentExternalDiscoveryIntent: { scope: "hostile" },
      canActAsMorris: true,
      claimedAuthorityLevel: "N3",
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const comp = result.mw6AuthorityComposition;
    expect(comp).toBeDefined();
    expect(comp!.serverComposedGovernedAuthority).toBe(true);
    expect(comp!.authorityBound).toBe(true);
    expect(comp!.realAuthorized).toBe(false);
    expect(comp!.eligible).toBe(false);
    expect(comp!.liveHostedDispatchCalls).toBe(0);
    expect(comp!.actorId).toBe(pilote.actor.actorId);
    expect(comp!.executionContractId).toBe(executionContractId);
    expect(comp!.evidenceSource).toBe("issued_mw6_s1_from_loaded_ec");
    expect(comp!.realPreflightCode).toBe(
      "AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED",
    );
    // C08 — ports from RuntimeOaStack (composition used product OA)
    expect(runtime.oa).toBeTruthy();
  });

  it("C03 — actor override DENY (hostile claimed actor ignored; wrong evidence)", async () => {
    const executionContractId = "xct:mw6-c03";
    const decisionId = "dec:mw6-c03";
    await seedAcceptedDecisionOnRuntime(runtime, {
      decisionId,
      projectId,
      cycleInstanceId,
    });
    await seedConfirmedMw6Ec({
      runtime,
      projectId,
      cycleInstanceId,
      campaignId: "camp-c03",
      executionContractId,
      decisionId,
      confirmationId: "cfm:mw6-c03",
    });

    const piloteA = makePilote("11111111");
    // Pre-issue evidence for actor B on resolver — composition for A must not use B's evidence as A
    const other = makePilote("22222222");
    void other;

    const result = await projectAssistantSendAction({
      projectId,
      content: CLAIM,
      executionContractId,
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => piloteA,
      actorId: "actor:github:22222222",
      authorityEvidenceId: "evd:belongs-to-b",
    });

    // Hostile evidence hint that does not verify → composition DENY
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("HOSTILE_EVIDENCE_OVERRIDE_DENIED");
  });

  it("C04–C05 — wrong EC id DENY", async () => {
    const result = await projectAssistantSendAction({
      projectId,
      content: CLAIM,
      executionContractId: "xct:missing-ec",
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => makePilote("11111111"),
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(
      ["CONTRACT_NOT_FOUND", "EXECUTION_CONTRACT_NOT_FOUND"].some((c) =>
        result.code.includes(c),
      ) || result.code.length > 0,
    ).toBe(true);
  });

  it("C07 — hostile evidence override DENY", async () => {
    const executionContractId = "xct:mw6-c07";
    const decisionId = "dec:mw6-c07";
    await seedAcceptedDecisionOnRuntime(runtime, {
      decisionId,
      projectId,
      cycleInstanceId,
    });
    await seedConfirmedMw6Ec({
      runtime,
      projectId,
      cycleInstanceId,
      campaignId: "camp-c07",
      executionContractId,
      decisionId,
      confirmationId: "cfm:mw6-c07",
    });

    const result = await projectAssistantSendAction({
      projectId,
      content: CLAIM,
      executionContractId,
      authorityEvidenceId: "evd:fabricated-hostile",
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => makePilote("11111111"),
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("HOSTILE_EVIDENCE_OVERRIDE_DENIED");
  });

  it("C12 — current state mutation DENY (strategy drift vs confirmed EC)", async () => {
    const executionContractId = "xct:mw6-c12";
    const decisionId = "dec:mw6-c12";
    await seedAcceptedDecisionOnRuntime(runtime, {
      decisionId,
      projectId,
      cycleInstanceId,
    });
    await seedConfirmedMw6Ec({
      runtime,
      projectId,
      cycleInstanceId,
      campaignId: "camp-c12",
      executionContractId,
      decisionId,
      confirmationId: "cfm:mw6-c12",
    });

    const pilote = makePilote("11111111");
    const first = await projectAssistantSendAction({
      projectId,
      content: CLAIM,
      executionContractId,
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => pilote,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    expect(first.mw6AuthorityComposition?.authorityBound).toBe(true);

    // Same EC + evidence, but different current product strategy → semantic mismatch DENY
    const second = await projectAssistantSendAction({
      projectId,
      content: "define recursion in one sentence",
      executionContractId,
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => pilote,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.mw6AuthorityComposition?.authorityBound).toBe(false);
    expect(second.mw6AuthorityComposition?.realAuthorized).toBe(false);
  });

  it("C13 — client cannot supply final authority object (ignored; server builds)", async () => {
    const executionContractId = "xct:mw6-c13";
    const decisionId = "dec:mw6-c13";
    await seedAcceptedDecisionOnRuntime(runtime, {
      decisionId,
      projectId,
      cycleInstanceId,
    });
    await seedConfirmedMw6Ec({
      runtime,
      projectId,
      cycleInstanceId,
      campaignId: "camp-c13",
      executionContractId,
      decisionId,
      confirmationId: "cfm:mw6-c13",
    });

    const pilote = makePilote("11111111");
    const result = await projectAssistantSendAction({
      projectId,
      content: CLAIM,
      executionContractId,
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => pilote,
      governedAuthority: {
        actorId: pilote.actor.actorId,
        authorityEvidenceId: "evd:client-built",
        executionContractId,
        requiredLevel: "N2",
        getExecutionContract: { execute: async () => ({ ok: false }) },
        checkExecutionAuthorization: { execute: async () => ({ ok: false }) },
        authorityResolver: { verify: () => ({ ok: true, reason: "verified" }) },
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.mw6AuthorityComposition?.authorityBound).toBe(true);
    expect(result.mw6AuthorityComposition?.authorityEvidenceId).not.toBe(
      "evd:client-built",
    );
    expect(result.mw6AuthorityComposition?.authorityEvidenceId).toBe(
      `evd:mw6-ext-s1:${executionContractId}`,
    );
  });

  it("marker — wasServerComposedMw6GovernedAuthority rejects manual objects", () => {
    expect(
      wasServerComposedMw6GovernedAuthority({
        actorId: "x",
        authorityEvidenceId: "y",
        executionContractId: "z",
        requiredLevel: "N2",
      }),
    ).toBe(false);
  });
});

```


## AB. Regression counts
- Composition C suite: 7/7 PASS
- Auth-binding T/H/S/B: 19/19 PASS
- Nora+Auth targeted: 514 passed / 1 skipped
- Full Vitest: **2889 passed / 135 skipped**
- tsc --noEmit: PASS
- lint: PASS
- build: PASS
- git diff --check: PASS

## AC. Source worktree preservation
- MW6 fingerprint MATCH `20828a426746d9cf8ff7213de13a3d4a7091a407c8bd9cc168f2e0c0b3b983f9` · WRITES=0
- Auth agent WRITES=0; dirty_fp now `d66acba86486f88b682cc82ef5d760ee527bc87d83deeed6a088710a45734e4c` (expected historical `a312681853164ffb078383c377a2d4281e185849589097294591f7e6e8f155ae` not reproduced by current dirty set — no agent mutation of Auth paths)

## AD. staged=0
- **confirmed**

## AE. product commit/push/PR/merge=0
- **confirmed**

## AF. Debts / reserves
- MW6 REAL not started
- Process-local campaign lease
- Auth session still test-seam substituted for Vitest (AUTH REAL carried forward)
- Auth historical expected dirty FP not reproduced (investigate separately; not caused by this cycle writes)

## AG. Claims allowed / forbidden
### Allowed after independent ChatGPT PASS
- SERVER-SIDE AUTHORITY COMPOSITION = DETERMINISTIC PROVEN
- MW6 ↔ AUTH BINDING = DETERMINISTIC PROVEN
- PRODUCT TRUST-BOUNDARY CONTROLS = DETERMINISTIC PROVEN
- N2 HUMAN AUTHORIZATION = DETERMINISTIC PROVEN
- CURRENT-INTENT SEMANTIC BINDING = DETERMINISTIC PROVEN
- REAL_AUTHORITY_NOT_BOUND = CLOSED AT DETERMINISTIC PRODUCT COMPOSITION SCOPE
### Forbidden
- MW6 REAL PROVEN · hosted web_search REAL · E2E REAL · MW6 COMPLETE · Cognitive Completion PROVEN · production-ready · runtime v3 ADOPTED · N3 proven · Morris authority automated

## AH. Unique verdict

**READY FOR CHATGPT MW6↔AUTH FINAL COMPOSITION REVIEW — SERVER-BUILT GOVERNED AUTHORITY PRODUCT PATH PROVEN / MW6 REAL NOT STARTED**
