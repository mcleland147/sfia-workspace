# SFIA Studio — MW6 REAL BRIDGE FINAL BOUNDED CORRECTION Review Pack FULL

**Timestamp:** 2026-09-05 10:19:55 CEST
**Profile:** CRITICAL · CONTENT-COMPLETE · FULL · DETERMINISTIC · MONO-CYCLE
**Unique verdict:** READY FOR CHATGPT MW6 REAL BRIDGE FINAL REVIEW — CAMPAIGN EXACT-MATCH PROVEN / RUNTIME GOVERNANCE-TEXT DECOUPLED / SERVER-OWNED DEFAULT-DENY REAL BRIDGE FINAL DETERMINISTIC PROOF PASS / PRODUCT PRE-FLIGHT ELIGIBILITY PRESERVED / NEW FINAL INTEGRATION CANDIDATE ANCHOR MINTED / OPENAI LIVE 0 / MW6 REAL NOT RETRIED

## A. Timestamp
- 2026-09-05 10:19:55 CEST

## B. GO consumed
`GO MORRIS — MW6 REAL BRIDGE FINAL BOUNDED CORRECTION — CAMPAIGN EXACT-MATCH + GOVERNANCE-TEXT DECOUPLING`

## C. Git Truth
### AUTH
- path `/Users/morris/Projects/sfia-workspace-auth-better-auth-github-multi-user-foundation`
- branch `delivery/sfia-studio-auth-better-auth-github-multi-user-foundation`
- HEAD `ebdae92a96ea1c49444dfb668342c1453f57a540`
- origin/main `ebdae92a96ea1c49444dfb668342c1453f57a540`
- staged **0** · conflicts **0**

### MW6
- path `/Users/morris/Projects/sfia-workspace-nora-mw6-external-source-intelligence`
- branch `delivery/sfia-studio-nora-mw6-external-source-intelligence`
- HEAD `ebdae92a96ea1c49444dfb668342c1453f57a540`
- origin/main `ebdae92a96ea1c49444dfb668342c1453f57a540`
- staged **0** · conflicts **0**

### INTEGRATION
- path `/Users/morris/Projects/sfia-workspace-mw6-auth-binding`
- branch `delivery/sfia-studio-mw6-auth-binding`
- HEAD `ebdae92a96ea1c49444dfb668342c1453f57a540`
- origin/main `ebdae92a96ea1c49444dfb668342c1453f57a540`
- staged **0** · conflicts **0**

### HANDOFF
- path `/Users/morris/Projects/sfia-workspace/sfia-review-handoff`
- branch `sfia/review-handoff`
- HEAD `8624af4ddbdaf5db642bc2a854214375c3ec68d4`
- origin/main `ebdae92a96ea1c49444dfb668342c1453f57a540`
- staged **0** · conflicts **0**

## D. main/base
- `ebdae92a96ea1c49444dfb668342c1453f57a540`

## E. Input handoff
- `8624af4ddbdaf5db642bc2a854214375c3ec68d4`

## F. Cycle / profile / typology
- Type 8 Delivery · RUN / final bounded correction · CRITICAL · DETERMINISTIC ONLY · NO OpenAI LIVE

## G. Convergence Pre-check
- Capability: Nora Cognitive Completion → MW6 External Source Intelligence
- Entry: bridge core ACCEPTED BY CHATGPT with 2 blocking reserves; OpenAI LIVE=0; REAL retry NOT AUTHORIZED
- Gaps closed: (1) campaign exact-match when grant binds campaign; (2) governance-text removed from runtime
- Exit: final deterministic candidate + B01–B20 + CAMP-05 + no historical GO text + green regressions + new anchor

## H. Fake/Real qualification
- Applicable YES · External boundary OpenAI hosted web_search
- This cycle: DETERMINISTIC ONLY · OpenAI LIVE **0** · web_search LIVE **0**
- Level: REAL authorization bridge FINAL DETERMINISTIC PROVEN
- NOT: MW6 REAL BOUNDARY / hosted web_search REAL / END-TO-END REAL

## I. Auth V1 BEFORE/FINAL
- `24c9f908a529f2d00f0003cd985d763648ac949111389021d198711d27a475e7` · n=38 · MATCH / MATCH

## J. MW6 FP BEFORE/FINAL
- `20828a426746d9cf8ff7213de13a3d4a7091a407c8bd9cc168f2e0c0b3b983f9` · n=17 · MATCH / MATCH

## K. Integration input anchor
- `MW6-AUTH-INTEGRATION-BRIDGE-CANDIDATE-ANCHOR-V1` = `a7419f16b0cead3391e1faf9e194c6867e5fa07b041d0bd3e26cf267bf1d2892` · count=66 · **MATCH** before writes

## L. Exact two blocking reservations
- **CORR-01** — grant.campaignId defined + context.campaignId absent previously authorized; must DENY
- **CORR-02** — runtime special-cased historical GO text; must remove conversational denylist

## M. Exact files changed
| path | disposition |
| --- | --- |
| `projects/sfia-studio/app/lib/nora-cognitive-runtime/mw6RealAuthorization.ts` | MODIFIED |
| `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw6.real-authorization-bridge.d0.test.ts` | MODIFIED |
- campaignBudget.ts / index.ts / Auth / OA / W2 / package: **READ ONLY / 0 writes**
- Scope vs a7419 content delta: **exactly these 2 files**

## N. COMPLETE USEFUL DIFF / modified sections

### N1. CORR-01 campaign matcher (before → after)
```diff
-  if (
-    grant.campaignId !== undefined &&
-    context.campaignId !== undefined &&
-    grant.campaignId !== context.campaignId
-  ) {
+  // Optional in grant schema; when present, exact match against context is mandatory
+  // (including deny when context.campaignId is absent).
+  if (
+    grant.campaignId !== undefined &&
+    grant.campaignId !== context.campaignId
+  ) {
```

### N2. CORR-02 decisionRef (before → after)
```diff
-  // Never auto-recognize the consumed prior REAL GO title as a grant.
-  if (
-    o.decisionRef.trim() === "<historical GO text>" ||
-    o.decisionRef.includes("<historical GO text>")
-  ) {
-    return { ok: false, code: "GRANT_MALFORMED" };
-  }
+  // decisionRef: required non-empty provenance only — opaque to runtime.
```
(Historical GO string intentionally not re-stated in this pack beyond noting removal.)

### N3. FULL current mw6RealAuthorization.ts
```typescript
/**
 * MW6 REAL authorization — construction-gate consumer (TEMPORARY WITH EXIT).
 *
 * Orthogonal to Pilote authority (HumanDecision / Confirmation / S1).
 * Server-owned only: reads SFIA_MW6_REAL_PROOF_GRANT_JSON (never NEXT_PUBLIC_*).
 * Default-deny. No persistence. No client-controlled grant.
 *
 * Exit: replace/retire when a generalized construction REAL-gate is designed.
 *
 * Does NOT authorize OpenAI LIVE by itself — only the REAL axis of preflight.
 *
 * Trust root: process env under Morris-controlled proof cycle (not cryptographic).
 * decisionRef is provenance only — grant lifecycle / Morris gate freshness is
 * governed by the construction cycle that provisions the envelope, not by
 * hard-coded decision text.
 */

import { MW6_EXTERNAL_DISCOVERY_ACTION } from "@/lib/auth/piloteS1AuthorityPolicy";

export const MW6_REAL_PROOF_GRANT_ENV = "SFIA_MW6_REAL_PROOF_GRANT_JSON" as const;
export const MW6_REAL_PROOF_PURPOSE =
  "mw6_external_discovery_bounded_real" as const;
export const MW6_REAL_PROOF_GRANT_VERSION = "v1" as const;
export { MW6_EXTERNAL_DISCOVERY_ACTION };

export type Mw6RealProofGrantV1 = {
  version: typeof MW6_REAL_PROOF_GRANT_VERSION;
  purpose: typeof MW6_REAL_PROOF_PURPOSE;
  decisionRef: string;
  projectId: string;
  executionContractId: string;
  action: typeof MW6_EXTERNAL_DISCOVERY_ACTION;
  requiredAuthority: "N2";
  semanticFingerprint: string;
  expiresAt: string;
  campaignId?: string;
  notBefore?: string;
};

export type Mw6RealAuthorizationMatchContext = {
  projectId: string;
  executionContractId: string;
  action: string;
  requiredAuthority: "N2";
  semanticFingerprint: string;
  /**
   * Optional on context. When the grant includes campaignId, context.campaignId
   * must be exactly equal (absent context campaign → CAMPAIGN_MISMATCH).
   */
  campaignId?: string;
  nowIso: string;
};

export type Mw6RealAuthorizationDecision = {
  authorized: boolean;
  code:
    | "OK"
    | "GRANT_ABSENT"
    | "GRANT_MALFORMED"
    | "GRANT_EXPIRED"
    | "GRANT_NOT_YET_VALID"
    | "PURPOSE_MISMATCH"
    | "PROJECT_MISMATCH"
    | "EXECUTION_CONTRACT_MISMATCH"
    | "ACTION_MISMATCH"
    | "REQUIRED_AUTHORITY_MISMATCH"
    | "SEMANTIC_FINGERPRINT_MISMATCH"
    | "CAMPAIGN_MISMATCH"
    | "CONTEXT_INCOMPLETE";
  matchedScope: boolean;
  expired: boolean;
  /** Provenance only — not cryptographic proof. Never log raw grant. */
  decisionRef?: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function parseIsoMs(value: string): number | null {
  const t = Date.parse(value);
  return Number.isFinite(t) ? t : null;
}

/**
 * Pure parse — never throws into REAL-open. Malformed → GRANT_MALFORMED.
 * Does not log grant contents.
 */
export function parseMw6RealProofGrantJson(
  raw: string | undefined | null,
):
  | { ok: true; grant: Mw6RealProofGrantV1 }
  | { ok: false; code: "GRANT_ABSENT" | "GRANT_MALFORMED" } {
  if (raw === undefined || raw === null || String(raw).trim() === "") {
    return { ok: false, code: "GRANT_ABSENT" };
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(String(raw));
  } catch {
    return { ok: false, code: "GRANT_MALFORMED" };
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    return { ok: false, code: "GRANT_MALFORMED" };
  }
  const o = parsed as Record<string, unknown>;
  // Reject prototype pollution vectors — only own enumerable keys matter;
  // unknown keys are ignored (fail-open on extras), required keys enforced.
  if (o.version !== MW6_REAL_PROOF_GRANT_VERSION) {
    return { ok: false, code: "GRANT_MALFORMED" };
  }
  if (o.purpose !== MW6_REAL_PROOF_PURPOSE) {
    return { ok: false, code: "GRANT_MALFORMED" };
  }
  // decisionRef: required non-empty provenance only — opaque to runtime.
  if (!isNonEmptyString(o.decisionRef)) {
    return { ok: false, code: "GRANT_MALFORMED" };
  }
  if (!isNonEmptyString(o.projectId)) {
    return { ok: false, code: "GRANT_MALFORMED" };
  }
  if (!isNonEmptyString(o.executionContractId)) {
    return { ok: false, code: "GRANT_MALFORMED" };
  }
  if (o.action !== MW6_EXTERNAL_DISCOVERY_ACTION) {
    return { ok: false, code: "GRANT_MALFORMED" };
  }
  if (o.requiredAuthority !== "N2") {
    return { ok: false, code: "GRANT_MALFORMED" };
  }
  if (!isNonEmptyString(o.semanticFingerprint)) {
    return { ok: false, code: "GRANT_MALFORMED" };
  }
  if (!isNonEmptyString(o.expiresAt) || parseIsoMs(o.expiresAt) === null) {
    return { ok: false, code: "GRANT_MALFORMED" };
  }
  if (o.campaignId !== undefined && !isNonEmptyString(o.campaignId)) {
    return { ok: false, code: "GRANT_MALFORMED" };
  }
  if (o.notBefore !== undefined) {
    if (!isNonEmptyString(o.notBefore) || parseIsoMs(o.notBefore) === null) {
      return { ok: false, code: "GRANT_MALFORMED" };
    }
  }

  const grant: Mw6RealProofGrantV1 = {
    version: MW6_REAL_PROOF_GRANT_VERSION,
    purpose: MW6_REAL_PROOF_PURPOSE,
    decisionRef: o.decisionRef.trim(),
    projectId: o.projectId.trim(),
    executionContractId: o.executionContractId.trim(),
    action: MW6_EXTERNAL_DISCOVERY_ACTION,
    requiredAuthority: "N2",
    semanticFingerprint: o.semanticFingerprint.trim(),
    expiresAt: o.expiresAt.trim(),
    ...(o.campaignId !== undefined
      ? { campaignId: String(o.campaignId).trim() }
      : {}),
    ...(o.notBefore !== undefined
      ? { notBefore: String(o.notBefore).trim() }
      : {}),
  };
  return { ok: true, grant };
}

/**
 * Pure matcher — exact scope + expiry. Never throws.
 */
export function matchMw6RealProofGrant(
  grant: Mw6RealProofGrantV1,
  context: Mw6RealAuthorizationMatchContext,
): Mw6RealAuthorizationDecision {
  const nowMs = parseIsoMs(context.nowIso);
  if (nowMs === null) {
    return {
      authorized: false,
      code: "GRANT_MALFORMED",
      matchedScope: false,
      expired: false,
      decisionRef: grant.decisionRef,
    };
  }
  if (grant.purpose !== MW6_REAL_PROOF_PURPOSE) {
    return {
      authorized: false,
      code: "PURPOSE_MISMATCH",
      matchedScope: false,
      expired: false,
      decisionRef: grant.decisionRef,
    };
  }
  if (grant.projectId !== context.projectId) {
    return {
      authorized: false,
      code: "PROJECT_MISMATCH",
      matchedScope: false,
      expired: false,
      decisionRef: grant.decisionRef,
    };
  }
  if (grant.executionContractId !== context.executionContractId) {
    return {
      authorized: false,
      code: "EXECUTION_CONTRACT_MISMATCH",
      matchedScope: false,
      expired: false,
      decisionRef: grant.decisionRef,
    };
  }
  if (
    grant.action !== context.action ||
    context.action !== MW6_EXTERNAL_DISCOVERY_ACTION
  ) {
    return {
      authorized: false,
      code: "ACTION_MISMATCH",
      matchedScope: false,
      expired: false,
      decisionRef: grant.decisionRef,
    };
  }
  if (
    grant.requiredAuthority !== "N2" ||
    context.requiredAuthority !== "N2"
  ) {
    return {
      authorized: false,
      code: "REQUIRED_AUTHORITY_MISMATCH",
      matchedScope: false,
      expired: false,
      decisionRef: grant.decisionRef,
    };
  }
  if (grant.semanticFingerprint !== context.semanticFingerprint) {
    return {
      authorized: false,
      code: "SEMANTIC_FINGERPRINT_MISMATCH",
      matchedScope: false,
      expired: false,
      decisionRef: grant.decisionRef,
    };
  }
  // Optional in grant schema; when present, exact match against context is mandatory
  // (including deny when context.campaignId is absent).
  if (
    grant.campaignId !== undefined &&
    grant.campaignId !== context.campaignId
  ) {
    return {
      authorized: false,
      code: "CAMPAIGN_MISMATCH",
      matchedScope: false,
      expired: false,
      decisionRef: grant.decisionRef,
    };
  }

  const expMs = parseIsoMs(grant.expiresAt);
  if (expMs === null) {
    return {
      authorized: false,
      code: "GRANT_MALFORMED",
      matchedScope: false,
      expired: false,
      decisionRef: grant.decisionRef,
    };
  }
  if (nowMs >= expMs) {
    return {
      authorized: false,
      code: "GRANT_EXPIRED",
      matchedScope: true,
      expired: true,
      decisionRef: grant.decisionRef,
    };
  }
  if (grant.notBefore !== undefined) {
    const nb = parseIsoMs(grant.notBefore);
    if (nb === null) {
      return {
        authorized: false,
        code: "GRANT_MALFORMED",
        matchedScope: false,
        expired: false,
        decisionRef: grant.decisionRef,
      };
    }
    if (nowMs < nb) {
      return {
        authorized: false,
        code: "GRANT_NOT_YET_VALID",
        matchedScope: true,
        expired: false,
        decisionRef: grant.decisionRef,
      };
    }
  }

  return {
    authorized: true,
    code: "OK",
    matchedScope: true,
    expired: false,
    decisionRef: grant.decisionRef,
  };
}

/**
 * Server-owned resolver — reads process env only (or explicit raw for pure tests
 * of the resolver composition; preflight always uses process.env).
 */
export function resolveMw6RealAuthorization(input: {
  context: Mw6RealAuthorizationMatchContext | null;
  /**
   * Optional raw JSON override for unit tests of the resolver.
   * Production preflight MUST omit this and use process.env.
   */
  grantJson?: string | null;
  env?: NodeJS.ProcessEnv;
}): Mw6RealAuthorizationDecision {
  if (!input.context) {
    return {
      authorized: false,
      code: "CONTEXT_INCOMPLETE",
      matchedScope: false,
      expired: false,
    };
  }
  const env = input.env ?? process.env;
  const raw =
    input.grantJson !== undefined
      ? input.grantJson
      : env[MW6_REAL_PROOF_GRANT_ENV];
  const parsed = parseMw6RealProofGrantJson(raw);
  if (!parsed.ok) {
    return {
      authorized: false,
      code: parsed.code,
      matchedScope: false,
      expired: false,
    };
  }
  return matchMw6RealProofGrant(parsed.grant, input.context);
}
```

### N4. FULL current mw6.real-authorization-bridge.d0.test.ts
```typescript
/**
 * MW6 REAL authorization runtime bridge — B01–B20 deterministic matrix.
 *
 * Server-owned SFIA_MW6_REAL_PROOF_GRANT_JSON consumer.
 * ZERO OpenAI LIVE / ZERO hosted web_search REAL dispatch.
 *
 * @vitest-environment node
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { MemoryAuthorityResolver } from "@/lib/oa/decision/infrastructure/memoryAuthorityResolver";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import {
  MW6_EXTERNAL_DISCOVERY_ACTION,
} from "@/lib/auth";
import {
  buildMw6CurrentExternalDiscoveryIntent,
  buildMw6ExternalDiscoveryContractSemantic,
  computeMw6CurrentIntentFingerprint,
  issueMw6ExternalDiscoveryS1,
  type Mw6ExternalDiscoveryContractInput,
} from "@/lib/auth/mw6ExternalDiscoveryBinding";
import {
  acquireNoraCampaignBudget,
  evaluateRealSourceExecutionPreflight,
  MW6_REAL_PROOF_GRANT_ENV,
  MW6_REAL_PROOF_PURPOSE,
  matchMw6RealProofGrant,
  parseMw6RealProofGrantJson,
  resolveMw6RealAuthorization,
  type Mw6CheckExecutionAuthorizationPort,
  type Mw6GetExecutionContractPort,
  type Mw6GovernedAuthorityContext,
  type Mw6RealProofGrantV1,
} from "@/lib/nora-cognitive-runtime";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import type { ResolveCurrentPiloteResult } from "@/lib/auth/resolveCurrentPilote";
import {
  DELEGATE_ACTOR,
  buildStack,
  buildValidatedContract,
  grantConfirmation,
  registerDelegate,
  seedAcceptedDecision,
  seedProject,
  seedStandardCycle,
  type Stack,
} from "@/__tests__/oa/execution-contract/helpers";
import {
  bindSourceProviderCapability,
  decideSourceStrategy,
} from "@/lib/nora-cognitive-runtime/sourceStrategyPolicy";
import type { SourceStrategyInput } from "@/lib/nora-cognitive-runtime/sourceStrategyPolicy";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  seedQualifiedProject,
  tempProductDbPath,
} from "@/__tests__/project-assistant/w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import type { ActorReference } from "@/lib/oa/decision";

const CLAIM =
  "corroborate externally the current CEO of Acme Corp";
const NOW = "2026-09-05T12:00:00.000Z";
const FUTURE = "2026-09-06T12:00:00.000Z";
const PAST = "2026-09-04T12:00:00.000Z";

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

function productContext(input: {
  campaignId: string;
  strategyInput?: SourceStrategyInput;
}) {
  const strategy = decideSourceStrategy(
    input.strategyInput ?? {
      claimText: CLAIM,
      requiresExternalCorroboration: true,
    },
  );
  const binding = bindSourceProviderCapability(strategy);
  return {
    strategy,
    binding,
    context: {
      strategy,
      binding,
      campaignId: input.campaignId,
    },
  };
}

async function seedConfirmedExternalDiscovery(input: {
  stack: Stack;
  campaignId: string;
  executionContractId: string;
  decisionId: string;
  cycleInstanceId: string;
  confirmationId: string;
  strategyInput?: SourceStrategyInput;
  humanActor?: typeof DELEGATE_ACTOR;
  registryEvidenceId?: string;
}): Promise<{
  intent: Mw6ExternalDiscoveryContractInput;
  fingerprint: string;
  product: ReturnType<typeof productContext>;
}> {
  const humanActor = input.humanActor ?? DELEGATE_ACTOR;
  const registryEvidenceId =
    input.registryEvidenceId ?? `evd:registry-${input.executionContractId}`;
  const product = productContext({
    campaignId: input.campaignId,
    strategyInput: input.strategyInput,
  });
  const intentBuilt = buildMw6CurrentExternalDiscoveryIntent({
    executionContractId: input.executionContractId,
    projectId: "prj:campus360-oa",
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
  const { fingerprint } = computeMw6CurrentIntentFingerprint(intent);

  input.stack.decisions.authority.register({
    evidenceId: registryEvidenceId,
    actorId: humanActor.actorId,
    level: "N2",
    scope: semantic.scope,
    issuedAt: "2026-07-01T00:00:00.000Z",
    source: "registry",
  });

  const { contractId, version } = await buildValidatedContract(input.stack, {
    executionContractId: intent.executionContractId,
    projectId: intent.projectId,
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
    idempotencyKey: intent.idempotencyKey,
    cycleInstanceId: intent.cycleInstanceId,
    actor: humanActor,
    authorityEvidenceId: registryEvidenceId,
  });

  const cfmId = await grantConfirmation(input.stack, {
    confirmationId: input.confirmationId,
    level: "N2",
    scope: semantic.scope,
    decisionRef: input.decisionId,
    actor: humanActor,
    evidenceId: registryEvidenceId,
  });

  const confirmed = await input.stack.execution.confirmExecutionContract.execute({
    executionContractId: contractId,
    confirmationId: cfmId,
    actor: humanActor,
    authorityEvidenceId: registryEvidenceId,
    expectedVersion: version,
  });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error("confirm failed");

  return { intent, fingerprint, product };
}

function portsFromStack(stack: Stack): {
  getExecutionContract: Mw6GetExecutionContractPort;
  checkExecutionAuthorization: Mw6CheckExecutionAuthorizationPort;
} {
  return {
    getExecutionContract: stack.execution.getExecutionContract,
    checkExecutionAuthorization: stack.execution.checkExecutionAuthorization,
  };
}

function govRefs(input: {
  actorId: string;
  evidenceId: string;
  executionContractId: string;
  resolver: MemoryAuthorityResolver;
  stack: Stack;
}): Mw6GovernedAuthorityContext {
  const ports = portsFromStack(input.stack);
  return {
    actorId: input.actorId,
    authorityEvidenceId: input.evidenceId,
    executionContractId: input.executionContractId,
    requiredLevel: "N2",
    getExecutionContract: ports.getExecutionContract,
    checkExecutionAuthorization: ports.checkExecutionAuthorization,
    authorityResolver: input.resolver,
  };
}

function baseGrant(overrides: Partial<Mw6RealProofGrantV1> & {
  projectId: string;
  executionContractId: string;
  semanticFingerprint: string;
}): Mw6RealProofGrantV1 {
  return {
    version: "v1",
    purpose: MW6_REAL_PROOF_PURPOSE,
    decisionRef: "TEST:mw6-real-bridge-b12",
    action: MW6_EXTERNAL_DISCOVERY_ACTION,
    requiredAuthority: "N2",
    expiresAt: FUTURE,
    ...overrides,
  };
}

function setGrantEnv(grant: Mw6RealProofGrantV1 | Record<string, unknown>) {
  process.env[MW6_REAL_PROOF_GRANT_ENV] = JSON.stringify(grant);
}

function clearGrantEnv() {
  delete process.env[MW6_REAL_PROOF_GRANT_ENV];
}

async function seedAuthorityBoundStack(suffix: string) {
  const stack = buildStack();
  await seedProject(stack.projects);
  registerDelegate(stack.decisions.authority, "subj:exec-gate");
  const decisionId = await seedAcceptedDecision(stack, {
    decisionId: `dec:bridge-${suffix}`,
    authority: "delegated",
    actor: DELEGATE_ACTOR,
    evidenceId: "evd:delegate-n2",
  });
  await seedStandardCycle(stack, `cyc:bridge-${suffix}`);
  const campaignId = `camp-bridge-${suffix}`;
  const seeded = await seedConfirmedExternalDiscovery({
    stack,
    campaignId,
    executionContractId: `xct:bridge-${suffix}`,
    decisionId,
    cycleInstanceId: `cyc:bridge-${suffix}`,
    confirmationId: `cfm:bridge-${suffix}`,
  });
  const pilote = makePilote("11111111");
  const issueResolver = new MemoryAuthorityResolver();
  const issued = issueMw6ExternalDiscoveryS1({
    pilote,
    authorityResolver: issueResolver,
    contract: seeded.intent,
    evidenceId: `evd:bridge-${suffix}-s1`,
  });
  expect(issued.ok).toBe(true);
  if (!issued.ok) throw new Error("s1 failed");
  // Mirror S1 onto the stack resolver used by CheckExecutionAuthorization + verify.
  stack.decisions.authority.register({ ...issued.evidence });
  const campaign = acquireNoraCampaignBudget({
    campaignId,
    maxModelInvocations: 4,
    maxHostedWebOperations: 2,
  });
  return {
    stack,
    seeded,
    pilote,
    issued,
    campaign,
    campaignId,
    fingerprint: seeded.fingerprint,
  };
}

describe("MW6 REAL authorization bridge — parser/matcher", () => {
  afterEach(() => {
    clearGrantEnv();
  });

  it("B01 — GRANT_ABSENT default deny", () => {
    const parsed = parseMw6RealProofGrantJson(undefined);
    expect(parsed.ok).toBe(false);
    if (parsed.ok) return;
    expect(parsed.code).toBe("GRANT_ABSENT");
    const decision = resolveMw6RealAuthorization({
      context: {
        projectId: "p",
        executionContractId: "x",
        action: MW6_EXTERNAL_DISCOVERY_ACTION,
        requiredAuthority: "N2",
        semanticFingerprint: "fp",
        nowIso: NOW,
      },
      grantJson: null,
    });
    expect(decision.authorized).toBe(false);
    expect(decision.code).toBe("GRANT_ABSENT");
  });

  it("B02 — malformed grant fail-closed", () => {
    expect(parseMw6RealProofGrantJson("{").ok).toBe(false);
    expect(parseMw6RealProofGrantJson("null").ok).toBe(false);
    expect(parseMw6RealProofGrantJson("[]").ok).toBe(false);
    expect(
      parseMw6RealProofGrantJson(JSON.stringify({ version: "v2" })).ok,
    ).toBe(false);
  });

  it("B03 — expired grant DENY", () => {
    const grant = baseGrant({
      projectId: "p",
      executionContractId: "x",
      semanticFingerprint: "fp",
      expiresAt: PAST,
    });
    const parsed = parseMw6RealProofGrantJson(JSON.stringify(grant));
    expect(parsed.ok).toBe(true);
    if (!parsed.ok) return;
    const d = matchMw6RealProofGrant(parsed.grant, {
      projectId: "p",
      executionContractId: "x",
      action: MW6_EXTERNAL_DISCOVERY_ACTION,
      requiredAuthority: "N2",
      semanticFingerprint: "fp",
      nowIso: NOW,
    });
    expect(d.authorized).toBe(false);
    expect(d.code).toBe("GRANT_EXPIRED");
    expect(d.expired).toBe(true);
  });

  it("B04 — wrong purpose DENY", () => {
    const raw = JSON.stringify({
      ...baseGrant({
        projectId: "p",
        executionContractId: "x",
        semanticFingerprint: "fp",
      }),
      purpose: "other_purpose",
    });
    const parsed = parseMw6RealProofGrantJson(raw);
    expect(parsed.ok).toBe(false);
  });

  it("B05–B09 — exact-scope mismatches DENY", () => {
    const grant = baseGrant({
      projectId: "prj:a",
      executionContractId: "xct:a",
      semanticFingerprint: "fp-a",
      campaignId: "camp-a",
    });
    const ctx = {
      projectId: "prj:a",
      executionContractId: "xct:a",
      action: MW6_EXTERNAL_DISCOVERY_ACTION,
      requiredAuthority: "N2" as const,
      semanticFingerprint: "fp-a",
      campaignId: "camp-a",
      nowIso: NOW,
    };
    expect(
      matchMw6RealProofGrant(grant, { ...ctx, projectId: "prj:b" }).code,
    ).toBe("PROJECT_MISMATCH");
    expect(
      matchMw6RealProofGrant(grant, {
        ...ctx,
        executionContractId: "xct:b",
      }).code,
    ).toBe("EXECUTION_CONTRACT_MISMATCH");
    expect(
      matchMw6RealProofGrant(grant, {
        ...ctx,
        action: "product:other",
      }).code,
    ).toBe("ACTION_MISMATCH");
    expect(
      matchMw6RealProofGrant(
        { ...grant, requiredAuthority: "N2" },
        { ...ctx, semanticFingerprint: "fp-b" },
      ).code,
    ).toBe("SEMANTIC_FINGERPRINT_MISMATCH");
    const wrongAction = parseMw6RealProofGrantJson(
      JSON.stringify({ ...grant, action: "external_discovery" }),
    );
    expect(wrongAction.ok).toBe(false);
    const wrongAuth = parseMw6RealProofGrantJson(
      JSON.stringify({ ...grant, requiredAuthority: "N1" }),
    );
    expect(wrongAuth.ok).toBe(false);
  });

  it("B20 — decisionRef is opaque non-empty provenance only", () => {
    expect(
      parseMw6RealProofGrantJson(
        JSON.stringify(
          baseGrant({
            projectId: "p",
            executionContractId: "x",
            semanticFingerprint: "fp",
            decisionRef: "",
          }),
        ),
      ).ok,
    ).toBe(false);
    expect(
      parseMw6RealProofGrantJson(
        JSON.stringify(
          baseGrant({
            projectId: "p",
            executionContractId: "x",
            semanticFingerprint: "fp",
            decisionRef: "   ",
          }),
        ),
      ).ok,
    ).toBe(false);
    const ok = parseMw6RealProofGrantJson(
      JSON.stringify(
        baseGrant({
          projectId: "p",
          executionContractId: "x",
          semanticFingerprint: "fp",
          decisionRef: "TEST:opaque-provenance-ref",
        }),
      ),
    );
    expect(ok.ok).toBe(true);
    if (!ok.ok) return;
    // decisionRef content does not create authority — match still requires exact scope.
    const deniedByScope = matchMw6RealProofGrant(ok.grant, {
      projectId: "other",
      executionContractId: "x",
      action: MW6_EXTERNAL_DISCOVERY_ACTION,
      requiredAuthority: "N2",
      semanticFingerprint: "fp",
      nowIso: NOW,
    });
    expect(deniedByScope.authorized).toBe(false);
    expect(deniedByScope.code).toBe("PROJECT_MISMATCH");
  });

  it("CAMP-01…05 — campaign optional-in-grant / exact when present", () => {
    const base = baseGrant({
      projectId: "prj:a",
      executionContractId: "xct:a",
      semanticFingerprint: "fp-a",
      decisionRef: "TEST:camp-matrix",
    });
    const ctxBase = {
      projectId: "prj:a",
      executionContractId: "xct:a",
      action: MW6_EXTERNAL_DISCOVERY_ACTION,
      requiredAuthority: "N2" as const,
      semanticFingerprint: "fp-a",
      nowIso: NOW,
    };
    // CAMP-01 — grant no campaign, context no campaign → campaign does not deny
    expect(
      matchMw6RealProofGrant(base, ctxBase).authorized,
    ).toBe(true);
    // CAMP-02 — grant no campaign, context camp-A → campaign criterion allows
    expect(
      matchMw6RealProofGrant(base, { ...ctxBase, campaignId: "camp-A" })
        .authorized,
    ).toBe(true);
    // CAMP-03 — grant camp-A, context camp-A → PASS
    expect(
      matchMw6RealProofGrant(
        { ...base, campaignId: "camp-A" },
        { ...ctxBase, campaignId: "camp-A" },
      ).authorized,
    ).toBe(true);
    // CAMP-04 — grant camp-A, context camp-B → CAMPAIGN_MISMATCH
    const mismatch = matchMw6RealProofGrant(
      { ...base, campaignId: "camp-A" },
      { ...ctxBase, campaignId: "camp-B" },
    );
    expect(mismatch.authorized).toBe(false);
    expect(mismatch.code).toBe("CAMPAIGN_MISMATCH");
    // CAMP-05 BLOCKING — grant camp-A, context absent → CAMPAIGN_MISMATCH
    const absentCtx = matchMw6RealProofGrant(
      { ...base, campaignId: "camp-A" },
      ctxBase,
    );
    expect(absentCtx.authorized).toBe(false);
    expect(absentCtx.code).toBe("CAMPAIGN_MISMATCH");
    expect(absentCtx.matchedScope).toBe(false);
  });

  it("invalid timestamp fail-closed", () => {
    const raw = JSON.stringify({
      ...baseGrant({
        projectId: "p",
        executionContractId: "x",
        semanticFingerprint: "fp",
      }),
      expiresAt: "not-a-date",
    });
    expect(parseMw6RealProofGrantJson(raw).ok).toBe(false);
  });
});

describe("MW6 REAL authorization bridge — preflight B01–B18", () => {
  afterEach(() => {
    clearGrantEnv();
  });

  it("B01/B11 — default deny preserves AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED", async () => {
    const ctx = await seedAuthorityBoundStack("b01");
    clearGrantEnv();
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign: ctx.campaign,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: ctx.seeded.product.context,
      governedAuthority: govRefs({
        actorId: ctx.pilote.actor.actorId,
        evidenceId: ctx.issued.evidence.evidenceId,
        executionContractId: ctx.seeded.intent.executionContractId,
        resolver: ctx.stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack: ctx.stack,
      }),
    });
    expect(pre.authorityBound).toBe(true);
    expect(pre.realAuthorized).toBe(false);
    expect(pre.eligible).toBe(false);
    expect(pre.code).toBe("AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED");
  });

  it("B02 — malformed env grant does not open REAL", async () => {
    const ctx = await seedAuthorityBoundStack("b02");
    process.env[MW6_REAL_PROOF_GRANT_ENV] = "{not-json";
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign: ctx.campaign,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: ctx.seeded.product.context,
      governedAuthority: govRefs({
        actorId: ctx.pilote.actor.actorId,
        evidenceId: ctx.issued.evidence.evidenceId,
        executionContractId: ctx.seeded.intent.executionContractId,
        resolver: ctx.stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack: ctx.stack,
      }),
    });
    expect(pre.realAuthorized).toBe(false);
    expect(pre.eligible).toBe(false);
  });

  it("B03 — expired exact grant DENY realAuthorized", async () => {
    const ctx = await seedAuthorityBoundStack("b03");
    setGrantEnv(
      baseGrant({
        projectId: ctx.seeded.intent.projectId,
        executionContractId: ctx.seeded.intent.executionContractId,
        semanticFingerprint: ctx.fingerprint,
        campaignId: ctx.campaignId,
        expiresAt: PAST,
        decisionRef: "TEST:b03-expired",
      }),
    );
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign: ctx.campaign,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: ctx.seeded.product.context,
      governedAuthority: govRefs({
        actorId: ctx.pilote.actor.actorId,
        evidenceId: ctx.issued.evidence.evidenceId,
        executionContractId: ctx.seeded.intent.executionContractId,
        resolver: ctx.stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack: ctx.stack,
      }),
    });
    expect(pre.authorityBound).toBe(true);
    expect(pre.realAuthorized).toBe(false);
    expect(pre.eligible).toBe(false);
  });

  it("B05 — wrong project DENY", async () => {
    const ctx = await seedAuthorityBoundStack("b05");
    setGrantEnv(
      baseGrant({
        projectId: "prj:wrong",
        executionContractId: ctx.seeded.intent.executionContractId,
        semanticFingerprint: ctx.fingerprint,
        campaignId: ctx.campaignId,
        decisionRef: "TEST:b05",
      }),
    );
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign: ctx.campaign,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: ctx.seeded.product.context,
      governedAuthority: govRefs({
        actorId: ctx.pilote.actor.actorId,
        evidenceId: ctx.issued.evidence.evidenceId,
        executionContractId: ctx.seeded.intent.executionContractId,
        resolver: ctx.stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack: ctx.stack,
      }),
    });
    expect(pre.realAuthorized).toBe(false);
    expect(pre.eligible).toBe(false);
  });

  it("B06 — wrong EC DENY", async () => {
    const ctx = await seedAuthorityBoundStack("b06");
    setGrantEnv(
      baseGrant({
        projectId: ctx.seeded.intent.projectId,
        executionContractId: "xct:other",
        semanticFingerprint: ctx.fingerprint,
        campaignId: ctx.campaignId,
        decisionRef: "TEST:b06",
      }),
    );
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign: ctx.campaign,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: ctx.seeded.product.context,
      governedAuthority: govRefs({
        actorId: ctx.pilote.actor.actorId,
        evidenceId: ctx.issued.evidence.evidenceId,
        executionContractId: ctx.seeded.intent.executionContractId,
        resolver: ctx.stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack: ctx.stack,
      }),
    });
    expect(pre.realAuthorized).toBe(false);
  });

  it("B09 — wrong semantic fingerprint DENY", async () => {
    const ctx = await seedAuthorityBoundStack("b09");
    setGrantEnv(
      baseGrant({
        projectId: ctx.seeded.intent.projectId,
        executionContractId: ctx.seeded.intent.executionContractId,
        semanticFingerprint: "deadbeef",
        campaignId: ctx.campaignId,
        decisionRef: "TEST:b09",
      }),
    );
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign: ctx.campaign,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: ctx.seeded.product.context,
      governedAuthority: govRefs({
        actorId: ctx.pilote.actor.actorId,
        evidenceId: ctx.issued.evidence.evidenceId,
        executionContractId: ctx.seeded.intent.executionContractId,
        resolver: ctx.stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack: ctx.stack,
      }),
    });
    expect(pre.realAuthorized).toBe(false);
  });

  it("B10 — REAL grant exact + authority not bound → realAuthorized may be true, eligible=false", async () => {
    const ctx = await seedAuthorityBoundStack("b10");
    setGrantEnv(
      baseGrant({
        projectId: ctx.seeded.intent.projectId,
        executionContractId: ctx.seeded.intent.executionContractId,
        semanticFingerprint: ctx.fingerprint,
        campaignId: ctx.campaignId,
        decisionRef: "TEST:b10",
      }),
    );
    // Wrong actor/evidence → CheckExecutionAuthorization fails after fingerprint.
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign: ctx.campaign,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: ctx.seeded.product.context,
      governedAuthority: govRefs({
        actorId: "actor:hostile-unbound",
        evidenceId: "evd:missing",
        executionContractId: ctx.seeded.intent.executionContractId,
        resolver: ctx.stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack: ctx.stack,
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.realAuthorized).toBe(true);
    expect(pre.eligible).toBe(false);
  });

  it("B12 — exact both axes → eligible=true (no network)", async () => {
    const ctx = await seedAuthorityBoundStack("b12");
    setGrantEnv(
      baseGrant({
        projectId: ctx.seeded.intent.projectId,
        executionContractId: ctx.seeded.intent.executionContractId,
        semanticFingerprint: ctx.fingerprint,
        campaignId: ctx.campaignId,
        decisionRef: "TEST:b12-both-axes",
      }),
    );
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign: ctx.campaign,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: ctx.seeded.product.context,
      governedAuthority: govRefs({
        actorId: ctx.pilote.actor.actorId,
        evidenceId: ctx.issued.evidence.evidenceId,
        executionContractId: ctx.seeded.intent.executionContractId,
        resolver: ctx.stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack: ctx.stack,
      }),
      // Hostile caller fields — must not affect (B13/B14)
      realAuthorized: true,
      morrisGo: true,
      allowReal: true,
      mw6RealProofGrant: { authorized: true },
    });
    expect(pre.authorityBound).toBe(true);
    expect(pre.realAuthorized).toBe(true);
    expect(pre.eligible).toBe(true);
    expect(pre.blocked).toBe(false);
    expect(pre.code).toBe("OK");
  });

  it("B13/B14 — client hostile booleans/grant objects ignored without env grant", async () => {
    const ctx = await seedAuthorityBoundStack("b13");
    clearGrantEnv();
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign: ctx.campaign,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: ctx.seeded.product.context,
      governedAuthority: govRefs({
        actorId: ctx.pilote.actor.actorId,
        evidenceId: ctx.issued.evidence.evidenceId,
        executionContractId: ctx.seeded.intent.executionContractId,
        resolver: ctx.stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack: ctx.stack,
      }),
      realAuthorized: true,
      realAuthorization: { authorized: true },
      morrisGo: true,
      realGate: true,
      goReal: true,
      allowReal: true,
      mw6RealProofGrant: baseGrant({
        projectId: ctx.seeded.intent.projectId,
        executionContractId: ctx.seeded.intent.executionContractId,
        semanticFingerprint: ctx.fingerprint,
      }),
    });
    expect(pre.realAuthorized).toBe(false);
    expect(pre.eligible).toBe(false);
  });

  it("B15 — N1 evidence insufficient for N2 → eligible=false even with REAL grant", async () => {
    const ctx = await seedAuthorityBoundStack("b15");
    setGrantEnv(
      baseGrant({
        projectId: ctx.seeded.intent.projectId,
        executionContractId: ctx.seeded.intent.executionContractId,
        semanticFingerprint: ctx.fingerprint,
        campaignId: ctx.campaignId,
        decisionRef: "TEST:b15",
      }),
    );
    // Register N1-only evidence for a different id; use it as authorityEvidenceId.
    const n1Id = "evd:bridge-b15-n1";
    ctx.stack.decisions.authority.register({
      evidenceId: n1Id,
      actorId: ctx.pilote.actor.actorId,
      level: "N1",
      scope: ctx.fingerprint,
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign: ctx.campaign,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: ctx.seeded.product.context,
      governedAuthority: govRefs({
        actorId: ctx.pilote.actor.actorId,
        evidenceId: n1Id,
        executionContractId: ctx.seeded.intent.executionContractId,
        resolver: ctx.stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack: ctx.stack,
      }),
    });
    expect(pre.eligible).toBe(false);
    expect(pre.authorityBound).toBe(false);
  });

  it("B16 — confirmation missing → eligible=false with valid REAL grant", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerDelegate(stack.decisions.authority, "subj:exec-gate");
    const decisionId = await seedAcceptedDecision(stack, {
      decisionId: "dec:bridge-b16",
      authority: "delegated",
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2",
    });
    await seedStandardCycle(stack, "cyc:bridge-b16");
    const campaignId = "camp-bridge-b16";
    const product = productContext({ campaignId });
    const intentBuilt = buildMw6CurrentExternalDiscoveryIntent({
      executionContractId: "xct:bridge-b16",
      projectId: "prj:campus360-oa",
      campaignId,
      strategy: product.strategy,
      binding: product.binding,
      decisionRefs: [decisionId],
      idempotencyKey: "idem:xct:bridge-b16",
      cycleInstanceId: "cyc:bridge-b16",
    });
    expect(intentBuilt.ok).toBe(true);
    if (!intentBuilt.ok) return;
    const semantic = buildMw6ExternalDiscoveryContractSemantic(intentBuilt.intent);
    const { fingerprint } = computeMw6CurrentIntentFingerprint(intentBuilt.intent);
    stack.decisions.authority.register({
      evidenceId: "evd:b16-build",
      actorId: DELEGATE_ACTOR.actorId,
      level: "N2",
      scope: semantic.scope,
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
    });
    await buildValidatedContract(stack, {
      executionContractId: intentBuilt.intent.executionContractId,
      projectId: intentBuilt.intent.projectId,
      decisionRefs: [decisionId],
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
      idempotencyKey: intentBuilt.intent.idempotencyKey,
      cycleInstanceId: intentBuilt.intent.cycleInstanceId,
      actor: DELEGATE_ACTOR,
      authorityEvidenceId: "evd:b16-build",
    });
    setGrantEnv(
      baseGrant({
        projectId: intentBuilt.intent.projectId,
        executionContractId: intentBuilt.intent.executionContractId,
        semanticFingerprint: fingerprint,
        campaignId,
        decisionRef: "TEST:b16",
      }),
    );
    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 4,
      maxHostedWebOperations: 2,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: product.context,
      governedAuthority: govRefs({
        actorId: DELEGATE_ACTOR.actorId,
        evidenceId: "evd:b16-build",
        executionContractId: intentBuilt.intent.executionContractId,
        resolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack,
      }),
    });
    expect(pre.eligible).toBe(false);
    expect(pre.authorityBound).toBe(false);
  });

  it("B17 — stale fingerprint grant DENY", async () => {
    const ctx = await seedAuthorityBoundStack("b17");
    setGrantEnv(
      baseGrant({
        projectId: ctx.seeded.intent.projectId,
        executionContractId: ctx.seeded.intent.executionContractId,
        semanticFingerprint: "stale-semantic-fingerprint",
        campaignId: ctx.campaignId,
        decisionRef: "TEST:b17",
      }),
    );
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign: ctx.campaign,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: ctx.seeded.product.context,
      governedAuthority: govRefs({
        actorId: ctx.pilote.actor.actorId,
        evidenceId: ctx.issued.evidence.evidenceId,
        executionContractId: ctx.seeded.intent.executionContractId,
        resolver: ctx.stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack: ctx.stack,
      }),
    });
    expect(pre.realAuthorized).toBe(false);
    expect(pre.eligible).toBe(false);
  });

  it("B18 — budget exhausted → not eligible despite both axes", async () => {
    const ctx = await seedAuthorityBoundStack("b18");
    setGrantEnv(
      baseGrant({
        projectId: ctx.seeded.intent.projectId,
        executionContractId: ctx.seeded.intent.executionContractId,
        semanticFingerprint: ctx.fingerprint,
        campaignId: ctx.campaignId,
        decisionRef: "TEST:b18",
      }),
    );
    const exhausted = acquireNoraCampaignBudget({
      campaignId: `${ctx.campaignId}-exhausted`,
      maxModelInvocations: 4,
      maxHostedWebOperations: 0,
    });
    // Campaign id on lease must match product context — remount context.
    const product = productContext({ campaignId: exhausted.campaignId });
    // Re-seed is heavy; instead use same campaign with hosted already at cap.
    // Prefer: claim all hosted on original campaign.
    const camp = ctx.campaign;
    // Consume hosted ops if API allows — otherwise use zero-cap with matching seed.
    // Zero-cap campaign requires matching EC campaignId in grant+context — use
    // original stack with a fresh zero-hosted campaign id requires EC rebuild.
    // Simpler: evaluate capability via original campaign after marking blocked /
    // consuming. Use maxHostedWebOperations:0 with rebuilt context matching grant.
    void product;
    void exhausted;
    // Consume both hosted slots on the bound campaign.
    const { claimHostedWebOperations } = await import(
      "@/lib/nora-cognitive-runtime/campaignBudget"
    );
    claimHostedWebOperations(camp, 2);
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign: camp,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: ctx.seeded.product.context,
      governedAuthority: govRefs({
        actorId: ctx.pilote.actor.actorId,
        evidenceId: ctx.issued.evidence.evidenceId,
        executionContractId: ctx.seeded.intent.executionContractId,
        resolver: ctx.stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack: ctx.stack,
      }),
    });
    expect(pre.authorityBound).toBe(true);
    expect(pre.realAuthorized).toBe(true);
    expect(pre.eligible).toBe(false);
    expect(pre.capabilitySatisfied).toBe(false);
  });
});

describe("MW6 REAL authorization bridge — product path B12/B19", () => {
  const HUMAN_ACTOR: ActorReference = {
    actorId: "actor:mw6-hd-human",
    role: "project_owner",
    displayName: "MW6 HD",
    authorityLevel: "N2",
  };

  let runtime: RuntimeApplicationService;
  let projectId: string;
  let cycleInstanceId: string;

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    clearGrantEnv();
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("mw6-bridge.sqlite"),
      idPrefix: "mw6b",
    });
    const seeded = await seedQualifiedProject(runtime, { suffix: "bridge" });
    projectId = seeded.projectId;
    cycleInstanceId = seeded.cycleInstanceId;
  });

  afterEach(() => {
    clearGrantEnv();
    cleanupW2TempDirs();
    setConversationProviderForTests(null);
  });

  async function seedAcceptedDecisionOnRuntime(input: {
    decisionId: string;
  }): Promise<void> {
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
      projectId,
      cycleInstanceId,
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
    campaignId: string;
    executionContractId: string;
    decisionId: string;
    confirmationId: string;
  }): Promise<{ fingerprint: string }> {
    const oa = runtime.oa!;
    const strategy = decideSourceStrategy({ claimText: CLAIM });
    const binding = bindSourceProviderCapability(strategy);
    const intentBuilt = buildMw6CurrentExternalDiscoveryIntent({
      executionContractId: input.executionContractId,
      projectId,
      campaignId: input.campaignId,
      strategy,
      binding,
      decisionRefs: [input.decisionId],
      idempotencyKey: `idem:${input.executionContractId}`,
      cycleInstanceId,
    });
    expect(intentBuilt.ok).toBe(true);
    if (!intentBuilt.ok) throw new Error(intentBuilt.reason);
    const intent = intentBuilt.intent;
    const semantic = buildMw6ExternalDiscoveryContractSemantic(intent);
    const { fingerprint } = computeMw6CurrentIntentFingerprint(intent);

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

    return { fingerprint };
  }

  it("B12 product path — authorityBound+realAuthorized+eligible without network", async () => {
    const executionContractId = "xct:mw6-bridge-prod";
    const decisionId = "dec:mw6-bridge-prod";
    const campaignId = "camp-bridge-prod";
    await seedAcceptedDecisionOnRuntime({ decisionId });
    const { fingerprint } = await seedConfirmedMw6Ec({
      campaignId,
      executionContractId,
      decisionId,
      confirmationId: "cfm:mw6-bridge-prod",
    });

    setGrantEnv(
      baseGrant({
        projectId,
        executionContractId,
        semanticFingerprint: fingerprint,
        campaignId,
        decisionRef: "TEST:product-path-b12",
        expiresAt: "2099-01-01T00:00:00.000Z",
      }),
    );

    const pilote = makePilote("11111111");
    const result = await projectAssistantSendAction({
      projectId,
      content: CLAIM,
      executionContractId,
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => pilote,
      // Hostile client REAL surfaces — structurally not accepted on send input
      // (not in ProjectAssistantSendInput; extra keys ignored by TS callers).
      governedAuthority: { realAuthorized: true },
      canActAsMorris: true,
      authorizedContract: { realAuthorized: true },
    } as Parameters<typeof projectAssistantSendAction>[0]);

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const comp = result.mw6AuthorityComposition;
    expect(comp).toBeDefined();
    expect(comp!.authorityBound).toBe(true);
    expect(comp!.realAuthorized).toBe(true);
    expect(comp!.eligible).toBe(true);
    expect(comp!.liveHostedDispatchCalls).toBe(0);
    // B19 — no raw grant / decisionRef leak in client composition surface
    const serialized = JSON.stringify(result);
    expect(serialized).not.toContain(MW6_REAL_PROOF_GRANT_ENV);
    expect(serialized).not.toContain("TEST:product-path-b12");
    expect(serialized).not.toContain(fingerprint);
    expect(process.env.OPENAI_API_KEY).toBeUndefined();
  });

  it("B11 product path — authority bound without grant remains blocked", async () => {
    const executionContractId = "xct:mw6-bridge-nogrant";
    const decisionId = "dec:mw6-bridge-nogrant";
    const campaignId = "camp-bridge-nogrant";
    await seedAcceptedDecisionOnRuntime({ decisionId });
    await seedConfirmedMw6Ec({
      campaignId,
      executionContractId,
      decisionId,
      confirmationId: "cfm:mw6-bridge-nogrant",
    });
    clearGrantEnv();
    const result = await projectAssistantSendAction({
      projectId,
      content: CLAIM,
      executionContractId,
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => makePilote("11111111"),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.mw6AuthorityComposition!.authorityBound).toBe(true);
    expect(result.mw6AuthorityComposition!.realAuthorized).toBe(false);
    expect(result.mw6AuthorityComposition!.eligible).toBe(false);
    expect(result.mw6AuthorityComposition!.realPreflightCode).toBe(
      "AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED",
    );
  });
});
```

## O. CORR-01 implementation
- Semantics: `if (grant.campaignId !== undefined && grant.campaignId !== context.campaignId) → CAMPAIGN_MISMATCH`
- campaignId remains optional in grant schema v1
- No defaulting / no fallback / no silent drop

## P. Campaign matrix CAMP-01…05
| ID | grant campaign | context campaign | Result |
| --- | --- | --- | --- |
| CAMP-01 | absent | absent | PASS (campaign criterion does not deny) |
| CAMP-02 | absent | camp-A | PASS (optional grant) |
| CAMP-03 | camp-A | camp-A | PASS |
| CAMP-04 | camp-A | camp-B | CAMPAIGN_MISMATCH |
| CAMP-05 | camp-A | absent | **CAMPAIGN_MISMATCH** · authorized=false · matchedScope=false |
- All covered in bridge suite · **PASS**

## Q. CORR-02 implementation
- Removed all special-case decisionRef string matching for historical Morris GO text
- decisionRef: required · non-empty after trim · provenance/audit only · opaque
- Grant lifecycle freshness = construction-cycle governance of env envelope, not parser denylist

## R. Proof no historical governance text in runtime source
- Scan `mw6RealAuthorization.ts` for hard-coded historical GO / handoff SHA / conversation denylist:
- Result: **NONE** (no `GO MORRIS`, no `BOUNDED PROOF`, no handoff SHA literals)

## S. Updated B20 semantics
- B20 = decisionRef opaque non-empty provenance
- empty / whitespace-only → GRANT_MALFORMED
- generic non-empty → accepted by parser
- decisionRef content does not create authority (still requires exact scope match)
- Does **not** mean “previous GO text rejected by runtime”

## T. B01–B20 final matrix
| ID | Result |
| --- | --- |
| B01 | PASS |
| B02 | PASS |
| B03 | PASS |
| B04 | PASS |
| B05 | PASS |
| B06 | PASS |
| B07 | PASS |
| B08 | PASS |
| B09 | PASS |
| B10 | PASS |
| B11 | PASS |
| B12 | PASS |
| B13 | PASS |
| B14 | PASS |
| B15 | PASS |
| B16 | PASS |
| B17 | PASS |
| B18 | PASS |
| B19 | PASS |
| B20 | PASS (rewritten provenance opacity) |
- Plus CAMP-01…05 PASS

## U. Product path result
- B12 product path: authorityBound=true · realAuthorized=true · eligible=true · liveHostedDispatchCalls=0
- B11 product path without grant preserved

## V. authorityBound
- true on exact product path

## W. realAuthorized
- true with exact valid server grant; false default

## X. eligible
- true on B12; false when budget exhausted (B18)

## Y. client bypass
- B13/B14 DENIED

## Z. campaign budget result
- Independent gate preserved (B18 PASS)

## AA. network/OpenAI calls
- **0**

## AB. targeted tests
- 5 files · **171 passed** (bridge 23 incl. CAMP matrix)

## AC. full Vitest
- 293 passed | 17 skipped · **2912 passed** | 135 skipped

## AD. tsc
- `npx tsc --noEmit` PASS

## AE. lint
- PASS (No ESLint warnings or errors)

## AF. build
- PASS

## AG. diff-check
- PASS

## AH. final full integration manifest
- Header: `SFIA_MW6_AUTH_INTEGRATION_BRIDGE_FINAL_CANDIDATE_ANCHOR_V1`
- Base: `ebdae92a96ea1c49444dfb668342c1453f57a540` · Scope: `projects/sfia-studio/app`
- count: **66** (M=25 · U=41)
| # | status | oldPath | path | kind | size | sha256 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `U` | — | `projects/sfia-studio/app/.env.example` | file | 861 | `0f05e151955b24238fdb3e43ad159e6a477cb27785b8e6693b3f8755b807f9e1` |
| 2 | `U` | — | `projects/sfia-studio/app/__tests__/auth/allowlist-actor-s1.test.ts` | file | 7282 | `ce23ba2d649198db539fc295509b5bf2a974f944ce2750d468b1644ba225823f` |
| 3 | `U` | — | `projects/sfia-studio/app/__tests__/auth/auth-real-boundary-session.test.ts` | file | 12586 | `a995369ecd553a003bf50b57106444b357a84e1933535c54af831471557ed31e` |
| 4 | `U` | — | `projects/sfia-studio/app/__tests__/auth/better-auth-foundation.test.ts` | file | 3364 | `5310125a193b8694685c425d5212b85679c1620654c2fe220d4ea114f91638bf` |
| 5 | `U` | — | `projects/sfia-studio/app/__tests__/auth/binding-s1-adversarial.test.ts` | file | 20046 | `0eaa84a5a5af45b6fee4ff28bac83e8fd40aa038f2e3f7c6925903dd0c814572` |
| 6 | `U` | — | `projects/sfia-studio/app/__tests__/auth/helpers/accountCookie.ts` | file | 1771 | `18260579a52ddb7f294acdb1d724e248e45a1ae1851d5d9e21bea7253c2280ab` |
| 7 | `U` | — | `projects/sfia-studio/app/__tests__/auth/policy-action-scoped-s1.test.ts` | file | 40266 | `b49d59601b323000feb8a015ee0cd882e77cf17c57312567a0888831b856317f` |
| 8 | `U` | — | `projects/sfia-studio/app/__tests__/auth/route-protection.test.ts` | file | 4662 | `be2f5d974cd97bd73a01c75e4466a31b5c5cc43d485903ed8580bebac723db7f` |
| 9 | `U` | — | `projects/sfia-studio/app/__tests__/auth/semantic-binding-build.test.ts` | file | 16544 | `c72fe68263bad4317b85666ddefe165bbb0a13a22a13659d755e0cddde0a8b28` |
| 10 | `U` | — | `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw6.auth-binding.d0.test.ts` | file | 41074 | `fe0a4cc01f6f49e1633a58ca375440b250edc5daf4ad66abf5e7bb8b76ce3718` |
| 11 | `U` | — | `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw6.pre-real.budget-hardening.d0.test.ts` | file | 65984 | `f186a3724f7c5e3249965a7cbe1470ca567919a2b6a9e59a4e38904baf7138a3` |
| 12 | `U` | — | `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw6.real-authorization-bridge.d0.test.ts` | file | 42562 | `abc8abf765fbbdd283b83e2e9e075454f0cf871c110384e07f7de8338313c29c` |
| 13 | `U` | — | `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw6.s01-s02.source-intelligence.d0.test.ts` | file | 31281 | `98132d0d5f40a551f778ac5c0c1c40ae99a9f99e56302fcf553569765183a2a2` |
| 14 | `U` | — | `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw6.server-composition.d0.test.ts` | file | 16173 | `98c45b7818c5b8b91c900b257132497ee3555012bd7d07ddf255845fe1dd9ade` |
| 15 | `M` | — | `projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts` | file | 9009 | `51b36fb91e9911aee74a177f3ac607eaa47132a621a639583a14521c34c96a7a` |
| 16 | `U` | — | `projects/sfia-studio/app/app/api/auth/[...all]/route.ts` | file | 890 | `dcd70ed6e6093725a2785d19ad633396e357fb454ec1ed049ee7d6e12e08bb51` |
| 17 | `U` | — | `projects/sfia-studio/app/app/login/login-client.tsx` | file | 3558 | `9c77621fbcbc2a7819f6789e604b2b832a34c1b9c9510e98a004485cd6148056` |
| 18 | `U` | — | `projects/sfia-studio/app/app/login/page.tsx` | file | 314 | `042baf2d5bbb66073c4edf627d9ff9709f7f9cba8f5689f26d4271aca4ee391a` |
| 19 | `U` | — | `projects/sfia-studio/app/components/auth/LogoutButton.tsx` | file | 697 | `90b8876df80fa048f4003bf5be400c76ffb45757d8e4ca838bf4d6c76467ef30` |
| 20 | `M` | — | `projects/sfia-studio/app/components/shell/StudioShell.tsx` | file | 3295 | `299a288123bfc99e80890a9dbbc6f9cea016b72a97426d1f26e09b6bf8083b8e` |
| 21 | `M` | — | `projects/sfia-studio/app/components/shell/Topbar.tsx` | file | 4765 | `51b9a2879a88e72416afd9063f6fae73a25daddf2d36e9e37f97e07d92c3dd04` |
| 22 | `M` | — | `projects/sfia-studio/app/features/project-assistant/actions.ts` | file | 28350 | `e6ce86196d4e948159e7ced641230706ce5eaaa6f7fc06dcd92f2e9b60caa699` |
| 23 | `U` | — | `projects/sfia-studio/app/features/project-assistant/composeMw6GovernedAuthority.ts` | file | 14004 | `aac2f818b1e4ff77009576223f59a16110260b75f9fe9039657131fbc4968b7e` |
| 24 | `U` | — | `projects/sfia-studio/app/features/project-assistant/mw6GovernedNoraTurn.ts` | file | 11789 | `31a0f8e9ee54f9ab5df55a3f52a99e3b1698958b65fe165a920e80a8f0f1d5d0` |
| 25 | `M` | — | `projects/sfia-studio/app/features/project-assistant/types.ts` | file | 10771 | `ffe930c86c408cc22e6234870846d12e6921d2906ffb286915dfc44a6f0c837f` |
| 26 | `M` | — | `projects/sfia-studio/app/features/project-assistant/w2/actions.ts` | file | 15607 | `2a5720027846738e341ea8e23833c9edac90592e32f07b7b9f48b733951529e7` |
| 27 | `M` | — | `projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts` | file | 15837 | `6e42fa2333b36792aefebbe2a365063957e2bffa8542bc43a448e176cd0c3224` |
| 28 | `M` | — | `projects/sfia-studio/app/features/project-assistant/w2/w3aQualifiedExecutionEffects.ts` | file | 12381 | `9c7688e6744718e75fbd53d1ebb24492fe40eb5c6d59368d24fb65cea04fc0cf` |
| 29 | `U` | — | `projects/sfia-studio/app/lib/auth/actorMapping.ts` | file | 1265 | `832991ec6015178e56dee2072eb6b60b3050d36e8c563254c0f73dd84ffac246` |
| 30 | `U` | — | `projects/sfia-studio/app/lib/auth/allowlist.ts` | file | 3448 | `eadefaa34ab99587fc1a4748b366fdb0a220ebfde611313bf73c1f4a29015333` |
| 31 | `U` | — | `projects/sfia-studio/app/lib/auth/auth-client.ts` | file | 235 | `c71359f9bb58ad46fe70475c03a1145bfe7b7f80f9f544f1b8e0439f14dcb70b` |
| 32 | `U` | — | `projects/sfia-studio/app/lib/auth/auth.ts` | file | 5155 | `93f95474d07444a5efdb78a4965ed936b96cef3f638352888825dc6a1d3b47fd` |
| 33 | `U` | — | `projects/sfia-studio/app/lib/auth/constants.ts` | file | 1220 | `2e9e7c2cfb830a9cfde3bd410198db3d2aec2b3b14b94e57461b306df682f92d` |
| 34 | `U` | — | `projects/sfia-studio/app/lib/auth/index.ts` | file | 2183 | `fb479f327bba79fc1908b35ff13e3f80b3a71c4e8df2c01194c02a558cb10fbe` |
| 35 | `U` | — | `projects/sfia-studio/app/lib/auth/mw6ExternalDiscoveryBinding.ts` | file | 11348 | `63c31e9c2d81911e38e8c624effc0ec19c5f84f0f7cff8f267cfff8c795e1884` |
| 36 | `U` | — | `projects/sfia-studio/app/lib/auth/piloteS1AuthorityPolicy.ts` | file | 12185 | `446ac91095c854d10046e4446161c222f4c429c502ece138174200481af4c5f7` |
| 37 | `U` | — | `projects/sfia-studio/app/lib/auth/providerAccountBinding.ts` | file | 5331 | `98433a62633344233cc886cfb9eab004601ebbe0b824b1b8d68a38186770a57f` |
| 38 | `U` | — | `projects/sfia-studio/app/lib/auth/resolveCurrentPilote.ts` | file | 3894 | `681aafc772cd80f09d81833adbd02649fe17afad598821bce7f980b9fa240efd` |
| 39 | `U` | — | `projects/sfia-studio/app/lib/auth/s1Authority.ts` | file | 8080 | `ee11bc66da4b9d743e93b097725c0841f0020bcaea69f260d157d6affbbeb174` |
| 40 | `M` | — | `projects/sfia-studio/app/lib/nora-cognitive-runtime/callModelInputFilter.ts` | file | 4196 | `6a8b0e84e82d85dc1add96df7dc61c1e2b9c63e61a3ea15572636619f6599dbc` |
| 41 | `U` | — | `projects/sfia-studio/app/lib/nora-cognitive-runtime/campaignBudget.ts` | file | 38877 | `8fe37511b734e06d8fa405091db91ddb6665249cbe5f5f2ea2ffc6cb9abec943` |
| 42 | `U` | — | `projects/sfia-studio/app/lib/nora-cognitive-runtime/externalContradictionComposition.ts` | file | 5820 | `55044bbe47c01b000b076f9c2322eb298a43b7f62f48d451ab23b9b77cd1badd` |
| 43 | `U` | — | `projects/sfia-studio/app/lib/nora-cognitive-runtime/externalSourceAuthority.ts` | file | 2848 | `e1f082125b8bd9bb9b62bf2af78f4e2d78ae929af9ce573508e832618dca8e9a` |
| 44 | `U` | — | `projects/sfia-studio/app/lib/nora-cognitive-runtime/externalSourceNormalization.ts` | file | 11808 | `8d8a7c9f09a0b423b0facb765014ebbbebadeeebb7c0fdbc7aa93b38029f3c7b` |
| 45 | `M` | — | `projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts` | file | 10808 | `c29b1aec921d586eb34fb4b0e9155b9bba1f559a59122f57f9622d0658e00623` |
| 46 | `U` | — | `projects/sfia-studio/app/lib/nora-cognitive-runtime/mw6RealAuthorization.ts` | file | 9996 | `9e9dd97df238096674e5920c326083d4dbabae2aeda506cbd2c4379619b4e3be` |
| 47 | `U` | — | `projects/sfia-studio/app/lib/nora-cognitive-runtime/openaiHostedWebSearchAdapter.ts` | file | 3694 | `f6318ed934e2006c7b8df8456034af1374c57511c33356737c7b42a9c9f27073` |
| 48 | `M` | — | `projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts` | file | 7478 | `abad33cfc20fd95876862cc42b5eacf3904664224f1539b2ba66c7d3d88b4a76` |
| 49 | `M` | — | `projects/sfia-studio/app/lib/nora-cognitive-runtime/reasoningModelSettings.ts` | file | 2786 | `e33e63e58a46c8f3c04f52284e361f2c8dcb6d56f456dd02442075cbc1062147` |
| 50 | `M` | — | `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts` | file | 22764 | `ba995d21371e240918fcab9066a76b8ff99b98c2af798867d04849c36c350627` |
| 51 | `M` | — | `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts` | file | 31682 | `f74fe385d49ddf46b38c75f06df3a67dfe5f70ba379fab40b0fa6f517ac5f654` |
| 52 | `U` | — | `projects/sfia-studio/app/lib/nora-cognitive-runtime/sourceIntelligenceContract.ts` | file | 6867 | `20cf5951df5dbc5b050ce2651a7eedf198e19fb737ada69f350970533a95a39d` |
| 53 | `U` | — | `projects/sfia-studio/app/lib/nora-cognitive-runtime/sourceNarrativeCompatibility.ts` | file | 8078 | `52abcf842e4a9e032a2d42addc8922dd47cfeb75d11c4bbccd6124e58ae2aa23` |
| 54 | `U` | — | `projects/sfia-studio/app/lib/nora-cognitive-runtime/sourceStrategyPolicy.ts` | file | 13163 | `7a1f25f814289f2057eb3edc17818040f97efd10feb215680cf351e6daef486b` |
| 55 | `M` | — | `projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts` | file | 2915 | `91f455237f6334b68d48da27ddd51d479ff252281f3d2801d797f004901755ec` |
| 56 | `M` | — | `projects/sfia-studio/app/lib/oa/execution-contract/application/authorityHelper.ts` | file | 3179 | `05a3364c7f9597b856afb946faad322e401db8401051e1e8cc8f1c46b9228d53` |
| 57 | `M` | — | `projects/sfia-studio/app/lib/oa/execution-contract/application/buildExecutionContract.ts` | file | 16364 | `4f6994cc20c46689ed328fa4a41d51207bd902f542d01bd68a97936c39956c5b` |
| 58 | `M` | — | `projects/sfia-studio/app/lib/oa/execution-contract/application/cancelExecutionContract.ts` | file | 8692 | `e753b84e7ca1e306bcc5fea15e81ae3cf9091dbd1042ca7b63a892cf30f716b2` |
| 59 | `M` | — | `projects/sfia-studio/app/lib/oa/execution-contract/application/checkExecutionAuthorization.ts` | file | 9202 | `0914fed964875815cf52c10b5eaed4313cb85bf6c56639fd67ce3ec31aaaac04` |
| 60 | `M` | — | `projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts` | file | 15475 | `bf7aeb1f5e39200b05cc90d3eec2747fd80f7d3cad8626b80438aab2dc527646` |
| 61 | `M` | — | `projects/sfia-studio/app/lib/oa/execution-contract/application/supersedeExecutionContract.ts` | file | 17711 | `e5299bbbd9a43e03bbdc7bf4294ae2ae1416276824947dfb096c2a988888d79d` |
| 62 | `M` | — | `projects/sfia-studio/app/lib/oa/execution-contract/application/validateExecutionContract.ts` | file | 9167 | `a168d689e99a23e231832f65f5f68362cc54ba7595ec3279452f003a0a6d0dfe` |
| 63 | `M` | — | `projects/sfia-studio/app/lib/oa/execution-contract/index.ts` | file | 11649 | `29699d5bc73409306b71d2e83d43673feb0fedc6cc2c3b810575cfcd25d35008` |
| 64 | `U` | — | `projects/sfia-studio/app/middleware.ts` | file | 1675 | `3eec268503d11da0cb739a16c3bd987a4e0d1dd195084588db4451e740f7506c` |
| 65 | `M` | — | `projects/sfia-studio/app/package-lock.json` | file | 313398 | `5fa32ea58da04852a3bd4ca4fa944527f49e01a2aa0c07ca3a3d7fbdeb967c11` |
| 66 | `M` | — | `projects/sfia-studio/app/package.json` | file | 1605 | `5bf2e7310039fdaa50da8c1fcd54446ba657673aab7d112b03427230bd21acfc` |

## AI. final anchor RUN A
- digest: `9129cc4336281dbfbbf616d683ea7a00d9c419f0610150baaa6de714769f0398`
- serialization bytes: 9930

## AJ. final anchor RUN B
- digest: `9129cc4336281dbfbbf616d683ea7a00d9c419f0610150baaa6de714769f0398` (independent recompute · equal)

## AK. final anchor digest
- `MW6-AUTH-INTEGRATION-BRIDGE-FINAL-CANDIDATE-ANCHOR-V1` = `9129cc4336281dbfbbf616d683ea7a00d9c419f0610150baaa6de714769f0398`

## AL. exact final changed-file list (this correction)
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/mw6RealAuthorization.ts`
- `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw6.real-authorization-bridge.d0.test.ts`

## AM. staged
- **0**

## AN. product commit/push/PR/merge
- **0** / **0** / **0** / **0**

## AO. external resources
- **0**

## AP. secret leakage
- **none**

## AQ. temporary-with-exit disposition retained
- YES — env proof bridge remains TEMPORARY WITH EXIT (unchanged architecture)

## AR. debts/reserves
- MW6 REAL BOUNDARY / hosted web_search REAL still unproven
- Prior GO REAL remains CONSUMED/CLOSED
- Fresh envelope under NEW Morris GO required for REAL retry

## AS. claims allowed
- campaign-bound grant exact matching = PROVEN
- governance-text/runtime decoupling = PROVEN
- MW6 REAL authorization bridge = FINAL DETERMINISTIC CANDIDATE PROVEN
- authority and REAL axes = ORTHOGONAL
- default-deny = PROVEN
- product preflight eligibility = DETERMINISTIC PROVEN
- OpenAI LIVE = 0

## AT. claims forbidden
- MW6 REAL BOUNDARY PROVEN · hosted web_search REAL · MW6 COMPLETE · END-TO-END REAL
- production-ready · generalized REAL gate · runtime v3 · cryptographic Morris · canActAsMorris

## AU. next gate
- STOP → ChatGPT review
- If accepted: OpenAI env qualification/prep if needed → NEW `GO MORRIS — MW6 REAL BOUNDED PROOF — RETRY`
- Do not start REAL in this cycle

## AV. unique verdict
READY FOR CHATGPT MW6 REAL BRIDGE FINAL REVIEW — CAMPAIGN EXACT-MATCH PROVEN / RUNTIME GOVERNANCE-TEXT DECOUPLED / SERVER-OWNED DEFAULT-DENY REAL BRIDGE FINAL DETERMINISTIC PROOF PASS / PRODUCT PRE-FLIGHT ELIGIBILITY PRESERVED / NEW FINAL INTEGRATION CANDIDATE ANCHOR MINTED / OPENAI LIVE 0 / MW6 REAL NOT RETRIED
