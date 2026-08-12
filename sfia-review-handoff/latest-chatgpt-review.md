# ChatGPT Review Pack — FULL
## F3 PROD ADAPTER REVIEW HANDOFF REPAIRED — Cycle 8 Delivery Critical — FULL CONTENTS + DIFFS

| Field | Value |
| --- | --- |
| **Role** | Repair of F3 production AcknowledgeCritical adapter wiring review handoff (documentary completeness) |
| **Pack level** | FULL |
| **Synthesis-only** | NO |
| **Timestamp CEST** | 2026-08-12 12:30:07 CEST (+0200) |
| **Timestamp UTC** | 2026-08-12 10:30:07 UTC |
| **Timestamp CEST ISO** | `2026-08-12T12:30:07+0200` |
| **Timestamp UTC ISO** | `2026-08-12T10:30:07Z` |
| **GO (this publication)** | GO REPAIR F3 PROD ADAPTER REVIEW HANDOFF (repair of GO WIRE PROD ADAPTER publication) |
| **Original GO consumed for product work** | GO WIRE PROD ADAPTER |
| **Cycle** | **8 — Delivery / implémentation** (CORRECTED from erroneous 11) |
| **Profil** | Critical |
| **Typologie** | CAPA / câblage production borné |
| **Critical** | OUI — EXPLICITE |
| **Review Pack** | FULL |
| **Outbound remote identity** | FINAL REMOTE IDENTITY VERIFIED EXTERNALLY AFTER CONTENT FREEZE |

---

## Explicit repair note

Prior handoff tip `7fad9e05acfb16abf6e9aaa40ea3a2b8c0dece17` / blob `aa48795bada40a2e8fdb77d1fcf85de9373e252d` claimed **FULL** / **Synthesis-only: NO** but only contained synthesis of create/modify (incomplete modified/created content). That publication is **REJECTED** for incomplete exploitable content.

This pack **repairs documentary completeness only**:
- republishes the **SAME technical state** with **COMPLETE useful content** of created files AND **complete exploitable unified diffs** of modified files;
- **no product / app source mutation**;
- candidate package remains **byte-identical**;
- **cycle number corrected to 8** (original GO WIRE was Cycle 8 — Delivery; prior pack incorrectly said 11).

---

## Local Git Truth (DEL)

| Field | Value |
| --- | --- |
| Worktree | `…/worktrees/f3-real-prerequisites-delivery` |
| Branch | `delivery/sfia-studio-f3-real-prerequisites` |
| HEAD | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| origin/main | `4b1a058050ae81d56cb6d96b88e8a57380799a86` (non-divergent) |
| Status | dirty local candidate package (Auth.js IAM + prod adapter wiring); repair writes only under `.tmp-sfia-review/` |
| Project commit/push/PR/merge/force | **0 / 0 / 0 / 0 / 0** |

---

## Inbound Review Handoff (rejected incomplete pack)

| Field | Value |
| --- | --- |
| Tip | `7fad9e05acfb16abf6e9aaa40ea3a2b8c0dece17` |
| Blob | `aa48795bada40a2e8fdb77d1fcf85de9373e252d` |
| Claim | FULL / Synthesis-only: NO |
| Defect | synthesis-only body despite FULL claim — missing full created sources + complete modified diffs |
| Remote verify BEFORE | tip/blob exact for `sfia-review-handoff/latest-chatgpt-review.md` |

**Outbound remote identity:** FINAL REMOTE IDENTITY VERIFIED EXTERNALLY AFTER CONTENT FREEZE

---

## Candidate integrity (byte-identical — repair documentary only)

| Field | Value |
| --- | --- |
| Candidate SHA BEFORE (wire) | `e2c3b9326ec41910f808842f9b545dca126c2016bf6a7eccba4c597a6dd2468e` |
| Candidate SHA AFTER (wire, still current) | `c7a979dbee3cd57b169f742502cbc1a131778bb0e2758622abe972444ba4670a` |
| Candidate SHA AFTER repair | **SAME** `c7a979dbee3cd57b169f742502cbc1a131778bb0e2758622abe972444ba4670a` (byte-identical — repair is documentary only) |
| Byte-identical to wire AFTER | **YES** |
| Product mutation this repair | **NO** |

---

## Complete created file contents

INLINE full source of each created / untracked-vs-main file (not summarized).

### `projects/sfia-studio/app/lib/oa/critical-ack/createProductionAcknowledgeCritical.ts`

```typescript
/**
 * Production composition for AcknowledgeCritical (AS-1).
 *
 * AuthenticatedIdentityPort <- AuthJsGitHubIdentityAdapter <- Auth.js auth()
 * AuthorityResolverPort remains the sole authz boundary (injected).
 * NEVER uses the test-only identity adapter.
 * NEVER grants canActAsMorris.
 *
 * `auth` from `@/auth` is bound lazily so unit tests can import this module
 * without loading next/server; production resolvePrincipal still uses Auth.js.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import type { AuthorityResolverPort, DecisionServices } from "@/lib/oa/decision";
import type { ExecutionContractRepositoryPort } from "@/lib/oa/execution-contract";
import {
  AcknowledgeCritical,
  type AcknowledgeCriticalOptions,
} from "./application/acknowledgeCritical";
import {
  AuthJsGitHubIdentityAdapter,
  type AuthFn,
} from "./infrastructure/authJsGitHubIdentityAdapter";
import type { AuthorityAttemptJournalPort } from "./ports/authorityAttemptJournalPort";
import type { AuthenticatedIdentityPort } from "./ports/authenticatedIdentityPort";

export type ProductionAcknowledgeCriticalDeps = {
  readonly contracts: ExecutionContractRepositoryPort;
  readonly authority: AuthorityResolverPort;
  readonly decisionServices: DecisionServices;
  readonly journal: AuthorityAttemptJournalPort; // required — caller supplies Memory or Sqlite; no product persistence auto-select
  readonly clock: ClockPort;
  readonly options?: AcknowledgeCriticalOptions;
  /** Test-only override; production uses Auth.js auth(). */
  readonly identity?: AuthenticatedIdentityPort;
};

export type ProductionAcknowledgeCriticalComposition = {
  readonly acknowledgeCritical: AcknowledgeCritical;
  readonly identity: AuthenticatedIdentityPort;
  readonly identityAdapterClassName: "AuthJsGitHubIdentityAdapter";
};

/** Production Auth.js `auth` binder — loads `@/auth` on first resolvePrincipal. */
const productionAuthFn: AuthFn = async () => {
  const { auth } = await import("@/auth");
  return auth() as ReturnType<AuthFn> extends Promise<infer R> ? R : never;
};

export function createProductionAcknowledgeCritical(
  deps: ProductionAcknowledgeCriticalDeps,
): ProductionAcknowledgeCriticalComposition {
  const identity =
    deps.identity ??
    new AuthJsGitHubIdentityAdapter({
      authFn: productionAuthFn,
    });

  // Guard: production default path must be AuthJsGitHubIdentityAdapter
  if (!deps.identity && !(identity instanceof AuthJsGitHubIdentityAdapter)) {
    throw new Error("production identity must be AuthJsGitHubIdentityAdapter");
  }

  const acknowledgeCritical = new AcknowledgeCritical(
    identity,
    deps.contracts,
    deps.authority,
    deps.decisionServices,
    deps.journal,
    deps.clock,
    deps.options ?? {},
  );

  return Object.freeze({
    acknowledgeCritical,
    identity,
    identityAdapterClassName: "AuthJsGitHubIdentityAdapter" as const,
  });
}
```

### `projects/sfia-studio/app/__tests__/oa/critical-ack/productionCompositionWiring.test.ts`

```typescript
/**
 * Production AcknowledgeCritical composition wiring proofs.
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { FixedClock } from "@/lib/oa/doctrine";
import {
  AuthJsGitHubIdentityAdapter,
  MemoryAuthorityAttemptJournal,
  createProductionAcknowledgeCritical,
} from "@/lib/oa/critical-ack";
import { createRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import {
  APP_ROOT,
  buildStack,
  buildValidatedContract,
  registerMorris,
  seedAcceptedDecision,
  seedProject,
  SCHEMAS,
  FIXTURES,
} from "../execution-contract/helpers";
import { contractFingerprint } from "@/lib/oa/critical-ack";

const REGISTRY_ROOT = FIXTURES;
const SCHEMAS_ROOT = SCHEMAS;

type MockSession = {
  authProvider?: string;
  githubAccountId?: string;
} | null;

function mockAuth(session: MockSession) {
  return async () => session as never;
}

describe("production AcknowledgeCritical composition wiring", () => {
  const prevMorris = process.env.AUTH_MORRIS_GITHUB_SUBJECT;

  afterEach(() => {
    if (prevMorris === undefined) {
      delete process.env.AUTH_MORRIS_GITHUB_SUBJECT;
    } else {
      process.env.AUTH_MORRIS_GITHUB_SUBJECT = prevMorris;
    }
  });

  it("1. createProductionAcknowledgeCritical uses AuthJsGitHubIdentityAdapter", () => {
    const stack = buildStack();
    const composition = createProductionAcknowledgeCritical({
      contracts: stack.execution.contracts,
      authority: stack.decisions.authority,
      decisionServices: stack.decisions,
      journal: new MemoryAuthorityAttemptJournal(),
      clock: new FixedClock("2026-08-12T10:00:00.000Z"),
    });
    expect(composition.identityAdapterClassName).toBe(
      "AuthJsGitHubIdentityAdapter",
    );
    expect(composition.identity).toBeInstanceOf(AuthJsGitHubIdentityAdapter);
    expect(composition.acknowledgeCritical).toBeDefined();
  });

  it("2. createProductionAcknowledgeCritical.ts source binds Auth.js; no Fake", () => {
    const src = fs.readFileSync(
      path.join(
        APP_ROOT,
        "lib/oa/critical-ack/createProductionAcknowledgeCritical.ts",
      ),
      "utf8",
    );
    expect(src).toMatch(/AuthJsGitHubIdentityAdapter/);
    expect(src).toMatch(/@\/auth/);
    expect(src).toMatch(/\bauth\b/);
    expect(src).not.toMatch(/FakeAuthenticatedIdentityAdapter/);
    expect(src).not.toMatch(/\bFake\b/);
  });

  it("3. vertical-slice-runtime/service.ts wires production factory; no Fake", () => {
    const src = fs.readFileSync(
      path.join(APP_ROOT, "lib/vertical-slice-runtime/service.ts"),
      "utf8",
    );
    expect(src).toMatch(/createProductionAcknowledgeCritical/);
    expect(src).not.toMatch(/FakeAuthenticatedIdentity/);
  });

  it("4-5. createRuntimeApplicationService exposes AuthJs adapter + acknowledgeCritical", () => {
    const runtime = createRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: "2026-08-12T10:00:00.000Z",
      auditMode: "noop",
    });
    expect(runtime.oa).not.toBeNull();
    expect(runtime.oa?.authenticatedIdentityAdapterClassName).toBe(
      "AuthJsGitHubIdentityAdapter",
    );
    expect(runtime.oa?.acknowledgeCritical).toBeDefined();
  });

  it("6. fail-closed: null session → IDENTITY_REQUIRED", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    const { contractId, version } = await buildValidatedContract(stack);
    const get = await stack.execution.getExecutionContract.execute({
      executionContractId: contractId,
    });
    expect(get.ok).toBe(true);
    if (!get.ok) return;
    const fp = contractFingerprint(get.contract);

    const identity = new AuthJsGitHubIdentityAdapter({
      authFn: mockAuth(null),
    });
    expect(await identity.resolvePrincipal()).toBeNull();

    const composition = createProductionAcknowledgeCritical({
      contracts: stack.execution.contracts,
      authority: stack.decisions.authority,
      decisionServices: stack.decisions,
      journal: new MemoryAuthorityAttemptJournal(),
      clock: new FixedClock("2026-08-12T10:00:00.000Z"),
      identity,
    });

    const result = await composition.acknowledgeCritical.execute({
      executionContractId: contractId,
      expectedVersion: version,
      expectedContractFingerprint: fp,
      confirmationId: "cfm:prod-null-session",
      idempotencyKey: "idem-prod-null-session-01",
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.detailCode).toBe("IDENTITY_REQUIRED");
    }
  });

  it("7. valid github/295557155 principal; authz still requires Morris evidence", async () => {
    process.env.AUTH_MORRIS_GITHUB_SUBJECT = "295557155";
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    const { contractId, version } = await buildValidatedContract(stack);
    const get = await stack.execution.getExecutionContract.execute({
      executionContractId: contractId,
    });
    expect(get.ok).toBe(true);
    if (!get.ok) return;
    const fp = contractFingerprint(get.contract);

    // Separate N3 evidence without canActAsMorris — AuthorityResolver remains sole authz boundary.
    stack.decisions.authority.register({
      evidenceId: "evd:n3-no-morris-gate",
      actorId: "actor:morris",
      level: "N3",
      scope: "docs+schemas+examples only",
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
      canActAsMorris: false,
    });

    const identity = new AuthJsGitHubIdentityAdapter({
      authFn: mockAuth({
        authProvider: "github",
        githubAccountId: "295557155",
      }),
      nowIso: () => "2026-08-12T10:00:00.000Z",
    });
    const principal = await identity.resolvePrincipal();
    expect(principal?.principalId).toBe("github:295557155");
    expect(principal?.actorId).toBe("actor:morris");
    expect(principal?.authnSource).toBe("AUTH_JS_GITHUB");
    expect(principal).not.toHaveProperty("canActAsMorris");

    const composition = createProductionAcknowledgeCritical({
      contracts: stack.execution.contracts,
      authority: stack.decisions.authority,
      decisionServices: stack.decisions,
      journal: new MemoryAuthorityAttemptJournal(),
      clock: new FixedClock("2026-08-12T10:00:00.000Z"),
      identity,
    });

    const result = await composition.acknowledgeCritical.execute({
      executionContractId: contractId,
      expectedVersion: version,
      expectedContractFingerprint: fp,
      confirmationId: "cfm:prod-live-shape",
      idempotencyKey: "idem-prod-live-shape-01",
      authorityEvidenceId: "evd:n3-no-morris-gate",
    });
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(
        result.error.detailCode === "MORRIS_GATE_DENIED" ||
          result.error.detailCode === "AUTHORITY_DENIED",
      ).toBe(true);
    }
  });

  it("8. malformed githubAccountId fail-closed", async () => {
    const stack = buildStack();
    const identity = new AuthJsGitHubIdentityAdapter({
      authFn: mockAuth({
        authProvider: "github",
        githubAccountId: "not-numeric",
      }),
    });
    const composition = createProductionAcknowledgeCritical({
      contracts: stack.execution.contracts,
      authority: stack.decisions.authority,
      decisionServices: stack.decisions,
      journal: new MemoryAuthorityAttemptJournal(),
      clock: new FixedClock("2026-08-12T10:00:00.000Z"),
      identity,
    });
    expect(await composition.identity.resolvePrincipal()).toBeNull();
  });

  it("9. wrong provider fail-closed", async () => {
    const identity = new AuthJsGitHubIdentityAdapter({
      authFn: mockAuth({
        authProvider: "credentials",
        githubAccountId: "295557155",
      }),
    });
    expect(await identity.resolvePrincipal()).toBeNull();
    const stack = buildStack();
    const composition = createProductionAcknowledgeCritical({
      contracts: stack.execution.contracts,
      authority: stack.decisions.authority,
      decisionServices: stack.decisions,
      journal: new MemoryAuthorityAttemptJournal(),
      clock: new FixedClock("2026-08-12T10:00:00.000Z"),
      identity,
    });
    expect(await composition.identity.resolvePrincipal()).toBeNull();
  });
});
```

### `projects/sfia-studio/app/lib/oa/critical-ack/index.ts`

```typescript
/**
 * Critical Ack + Authority/Attempt journal — public barrel (AS-1 / DUR-1+DUR-4).
 *
 * Authenticated identity: AuthenticatedIdentityPort (provider-agnostic).
 * REAL IAM SELECTED: Auth.js + GitHub OAuth (JWT, no DB adapter).
 * Production composition uses AuthJsGitHubIdentityAdapter via
 * createProductionAcknowledgeCritical (Auth.js auth()).
 * FakeAuthenticatedIdentityAdapter is NOT exported here — use ./testing.
 *
 * AcknowledgeCritical NEVER starts execution.
 * AttemptReconcileDisposition is journal-only (not ExecutionAttemptStatus).
 */

export * from "./domain/types";
export * from "./domain/errors";
export * from "./domain/invariants";

export * from "./ports/authenticatedIdentityPort";
export * from "./ports/authorityAttemptJournalPort";

export { AcknowledgeCritical } from "./application/acknowledgeCritical";
export type { AcknowledgeCriticalOptions } from "./application/acknowledgeCritical";
export { InvalidateActiveAuthorityOnRestart } from "./application/invalidateActiveAuthorityOnRestart";
export { ReconcileLaunchedAttemptOnRestart } from "./application/reconcileLaunchedAttemptOnRestart";

export { SqliteAuthorityAttemptJournal } from "./infrastructure/sqliteAuthorityAttemptJournal";
export { MemoryAuthorityAttemptJournal } from "./infrastructure/memoryAuthorityAttemptJournal";
export { AuthJsGitHubIdentityAdapter } from "./infrastructure/authJsGitHubIdentityAdapter";
export type {
  AuthFn,
  AuthJsGitHubIdentityAdapterDeps,
  AuthJsSessionLike,
} from "./infrastructure/authJsGitHubIdentityAdapter";
export { resolveActorIdForGitHubSubject } from "./infrastructure/githubSubjectActorBinding";

export {
  createProductionAcknowledgeCritical,
  type ProductionAcknowledgeCriticalComposition,
  type ProductionAcknowledgeCriticalDeps,
} from "./createProductionAcknowledgeCritical";

/**
 * Honesty marker: production composition wired (AuthJsGitHubIdentityAdapter).
 * Live OAuth proof / Morris HARD acceptance remain separate gates.
 */
export const AUTHENTICATED_IDENTITY_PROOF_STATUS =
  "PRODUCTION_COMPOSITION_WIRED" as const;
```

### `projects/sfia-studio/app/__tests__/oa/critical-ack/importBoundaries.test.ts`

```typescript
/**
 * Import boundaries — f3 / product paths must not import Fake* identity.
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../../..");

function collectTsFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...collectTsFiles(full));
    } else if (/\.(ts|tsx)$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

describe("critical-ack import boundaries", () => {
  it("main barrel does not export FakeAuthenticatedIdentityAdapter", async () => {
    const mod = await import("@/lib/oa/critical-ack");
    expect(
      Object.keys(mod).some((k) => k.toLowerCase().includes("fake")),
    ).toBe(false);
    expect("FakeAuthenticatedIdentityAdapter" in mod).toBe(false);
  });

  it("main barrel MAY export AuthJsGitHubIdentityAdapter", async () => {
    const mod = await import("@/lib/oa/critical-ack");
    expect(mod.AuthJsGitHubIdentityAdapter).toBeTypeOf("function");
    expect(mod.resolveActorIdForGitHubSubject).toBeTypeOf("function");
  });

  it("f3 feature paths do not import Fake* or critical-ack/testing", () => {
    const f3Dir = path.join(APP_ROOT, "features/project-assistant/f3");
    const files = collectTsFiles(f3Dir);
    expect(files.length).toBeGreaterThan(0);
    for (const file of files) {
      const src = fs.readFileSync(file, "utf8");
      expect(src).not.toMatch(/FakeAuthenticatedIdentityAdapter/);
      expect(src).not.toMatch(/critical-ack\/testing/);
      expect(src).not.toMatch(/fakeAuthenticatedIdentityAdapter/);
    }
  });


  it("main barrel exports createProductionAcknowledgeCritical", async () => {
    const mod = await import("@/lib/oa/critical-ack");
    expect(mod.createProductionAcknowledgeCritical).toBeTypeOf("function");
  });

  it("createProductionAcknowledgeCritical source has no Fake", () => {
    const src = fs.readFileSync(
      path.join(
        APP_ROOT,
        "lib/oa/critical-ack/createProductionAcknowledgeCritical.ts",
      ),
      "utf8",
    );
    expect(src).toMatch(/AuthJsGitHubIdentityAdapter/);
    expect(src).toMatch(/@\/auth/);
    expect(src).not.toMatch(/FakeAuthenticatedIdentityAdapter/);
    expect(src).not.toMatch(/Fake/);
  });

  it("testing subpath exports Fake adapter", async () => {
    const testing = await import("@/lib/oa/critical-ack/testing");
    expect(testing.FakeAuthenticatedIdentityAdapter).toBeTypeOf("function");
    expect(testing.createFakeMorrisPrincipal).toBeTypeOf("function");
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/critical-ack/acknowledgeCritical.test.ts`

```typescript
/**
 * Critical Ack surface — AS-1 / A52-D03.1 unit coverage.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { FixedClock } from "@/lib/oa/doctrine";
import {
  AcknowledgeCritical,
  AUTHENTICATED_IDENTITY_PROOF_STATUS,
  InvalidateActiveAuthorityOnRestart,
  MemoryAuthorityAttemptJournal,
  ReconcileLaunchedAttemptOnRestart,
  contractFingerprint,
} from "@/lib/oa/critical-ack";
import {
  FakeAuthenticatedIdentityAdapter,
  createFakeMorrisPrincipal,
} from "@/lib/oa/critical-ack/testing";
import {
  buildStack,
  buildValidatedContract,
  registerMorris,
  seedAcceptedDecision,
  seedProject,
} from "../execution-contract/helpers";

describe("critical-ack — AcknowledgeCritical", () => {
  it("exports honesty marker PRODUCTION_COMPOSITION_WIRED", () => {
    expect(AUTHENTICATED_IDENTITY_PROOF_STATUS).toBe(
      "PRODUCTION_COMPOSITION_WIRED",
    );
  });

  it("uses Fake identity and ignores hostile client actor fields", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    const { contractId, version } = await buildValidatedContract(stack);
    const get = await stack.execution.getExecutionContract.execute({
      executionContractId: contractId,
    });
    expect(get.ok).toBe(true);
    if (!get.ok) return;
    const fp = contractFingerprint(get.contract);

    const identity = new FakeAuthenticatedIdentityAdapter({
      principal: createFakeMorrisPrincipal(),
    });
    const journal = new MemoryAuthorityAttemptJournal();
    const ack = new AcknowledgeCritical(
      identity,
      stack.execution.contracts,
      stack.decisions.authority,
      stack.decisions,
      journal,
      new FixedClock("2026-08-11T12:00:00.000Z"),
      { processEpochId: "epoch:t1" },
    );

    const result = await ack.execute({
      executionContractId: contractId,
      expectedVersion: version,
      expectedContractFingerprint: fp,
      confirmationId: "cfm:crit-001",
      idempotencyKey: "idem-crit-ack-001",
      authorityEvidenceId: "evd:morris-n3",
      // Hostile — must be ignored
      claimedActorId: "actor:impostor",
      claimedAuthorityLevel: "N3",
      claimedDisplayName: "Morris",
      actor: {
        actorId: "actor:impostor",
        role: "user",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.principal.actorId).toBe("actor:morris");
    expect(result.principal.authnSource).toBe("FAKE_TEST_ONLY");
    expect(result.idempotent).toBe(false);
    expect(await journal.hasCriticalAckGranted(fp)).toBe(true);

    const confirmation = await stack.decisions.confirmations.findById(
      "cfm:crit-001",
    );
    expect(confirmation?.status).toBe("granted");
  });

  it("refuses N3 without canActAsMorris for Morris gate", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    // Overwrite/replace with N3 evidence that lacks Morris gate for Critical Ack verify.
    stack.decisions.authority.register({
      evidenceId: "evd:n3-only",
      actorId: "actor:morris",
      level: "N3",
      scope: "docs+schemas+examples only",
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
      canActAsMorris: false,
    });
    const { contractId, version } = await buildValidatedContract(stack, {
      authorityEvidenceId: "evd:morris-n3",
    });
    const get = await stack.execution.getExecutionContract.execute({
      executionContractId: contractId,
    });
    if (!get.ok) return;
    const fp = contractFingerprint(get.contract);

    const result = await new AcknowledgeCritical(
      new FakeAuthenticatedIdentityAdapter({
        principal: createFakeMorrisPrincipal(),
      }),
      stack.execution.contracts,
      stack.decisions.authority,
      stack.decisions,
      new MemoryAuthorityAttemptJournal(),
      new FixedClock("2026-08-11T12:00:00.000Z"),
      { processEpochId: "epoch:n3" },
    ).execute({
      executionContractId: contractId,
      expectedVersion: version,
      expectedContractFingerprint: fp,
      confirmationId: "cfm:n3-gate",
      idempotencyKey: "idem-n3-gate-01",
      authorityEvidenceId: "evd:n3-only",
    });

    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(
      result.error.detailCode === "MORRIS_GATE_DENIED" ||
        result.error.detailCode === "AUTHORITY_DENIED",
    ).toBe(true);
  });

  it("fail-closes on fingerprint / version mismatch", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    const { contractId, version } = await buildValidatedContract(stack);
    const get = await stack.execution.getExecutionContract.execute({
      executionContractId: contractId,
    });
    if (!get.ok) return;
    const fp = contractFingerprint(get.contract);

    const ack = new AcknowledgeCritical(
      new FakeAuthenticatedIdentityAdapter({
        principal: createFakeMorrisPrincipal(),
      }),
      stack.execution.contracts,
      stack.decisions.authority,
      stack.decisions,
      new MemoryAuthorityAttemptJournal(),
      new FixedClock("2026-08-11T12:00:00.000Z"),
      { processEpochId: "epoch:fp" },
    );

    const badFp = await ack.execute({
      executionContractId: contractId,
      expectedVersion: version,
      expectedContractFingerprint: `${fp}|tampered`,
      confirmationId: "cfm:bad-fp",
      idempotencyKey: "idem-bad-fp-01",
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(badFp.ok).toBe(false);
    if (!badFp.ok) {
      expect(badFp.error.detailCode).toBe("FINGERPRINT_MISMATCH");
    }

    const badVer = await ack.execute({
      executionContractId: contractId,
      expectedVersion: version + 99,
      expectedContractFingerprint: fp,
      confirmationId: "cfm:bad-ver",
      idempotencyKey: "idem-bad-ver-01",
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(badVer.ok).toBe(false);
    if (!badVer.ok) {
      expect(badVer.error.detailCode).toBe("VERSION_CONFLICT");
    }
  });

  it("anti-replay and consume-once semantics via journal + idempotency", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    const { contractId, version } = await buildValidatedContract(stack);
    const get = await stack.execution.getExecutionContract.execute({
      executionContractId: contractId,
    });
    if (!get.ok) return;
    const fp = contractFingerprint(get.contract);
    const journal = new MemoryAuthorityAttemptJournal();
    const ack = new AcknowledgeCritical(
      new FakeAuthenticatedIdentityAdapter({
        principal: createFakeMorrisPrincipal(),
      }),
      stack.execution.contracts,
      stack.decisions.authority,
      stack.decisions,
      journal,
      new FixedClock("2026-08-11T12:00:00.000Z"),
      { processEpochId: "epoch:replay" },
    );

    const first = await ack.execute({
      executionContractId: contractId,
      expectedVersion: version,
      expectedContractFingerprint: fp,
      confirmationId: "cfm:replay-1",
      idempotencyKey: "idem-replay-key-01",
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(first.ok).toBe(true);

    const sameIdempotent = await ack.execute({
      executionContractId: contractId,
      expectedVersion: version,
      expectedContractFingerprint: fp,
      confirmationId: "cfm:replay-1",
      idempotencyKey: "idem-replay-key-01",
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(sameIdempotent.ok).toBe(true);
    if (sameIdempotent.ok) {
      expect(sameIdempotent.idempotent).toBe(true);
    }

    const secondKey = await ack.execute({
      executionContractId: contractId,
      expectedVersion: version,
      expectedContractFingerprint: fp,
      confirmationId: "cfm:replay-2",
      idempotencyKey: "idem-replay-key-02",
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(secondKey.ok).toBe(false);
    if (!secondKey.ok) {
      expect(secondKey.error.detailCode).toBe("ALREADY_ACKNOWLEDGED");
    }
  });

  it("refuses concurrent double-ack (unique fingerprint)", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    const { contractId, version } = await buildValidatedContract(stack);
    const get = await stack.execution.getExecutionContract.execute({
      executionContractId: contractId,
    });
    if (!get.ok) return;
    const fp = contractFingerprint(get.contract);
    const journal = new MemoryAuthorityAttemptJournal();

    const makeAck = (confirmationId: string, idem: string) =>
      new AcknowledgeCritical(
        new FakeAuthenticatedIdentityAdapter({
          principal: createFakeMorrisPrincipal(),
        }),
        stack.execution.contracts,
        stack.decisions.authority,
        stack.decisions,
        journal,
        new FixedClock("2026-08-11T12:00:00.000Z"),
        { processEpochId: "epoch:concurrent" },
      ).execute({
        executionContractId: contractId,
        expectedVersion: version,
        expectedContractFingerprint: fp,
        confirmationId,
        idempotencyKey: idem,
        authorityEvidenceId: "evd:morris-n3",
      });

    const [a, b] = await Promise.all([
      makeAck("cfm:conc-a", "idem-conc-aaaa"),
      makeAck("cfm:conc-b", "idem-conc-bbbb"),
    ]);
    const oks = [a, b].filter((r) => r.ok);
    const fails = [a, b].filter((r) => !r.ok);
    expect(oks.length).toBe(1);
    expect(fails.length).toBe(1);
  });

  it("refuses when identity port returns null", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority);
    await seedAcceptedDecision(stack);
    const { contractId, version } = await buildValidatedContract(stack);
    const get = await stack.execution.getExecutionContract.execute({
      executionContractId: contractId,
    });
    if (!get.ok) return;

    const result = await new AcknowledgeCritical(
      new FakeAuthenticatedIdentityAdapter({ principal: null }),
      stack.execution.contracts,
      stack.decisions.authority,
      stack.decisions,
      new MemoryAuthorityAttemptJournal(),
      new FixedClock("2026-08-11T12:00:00.000Z"),
    ).execute({
      executionContractId: contractId,
      expectedVersion: version,
      expectedContractFingerprint: contractFingerprint(get.contract),
      confirmationId: "cfm:no-id",
      idempotencyKey: "idem-no-identity",
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.detailCode).toBe("IDENTITY_REQUIRED");
    }
  });
});

describe("critical-ack — DUR-4 restart / reconcile", () => {
  it("invalidates active authority on restart (DUR-4)", async () => {
    const journal = new MemoryAuthorityAttemptJournal();
    const clock = new FixedClock("2026-08-11T13:00:00.000Z");
    const inv = new InvalidateActiveAuthorityOnRestart(journal, clock);
    const result = await inv.execute({
      processEpochId: "epoch:new",
      previousProcessEpochId: "epoch:old",
    });
    expect(result.ok).toBe(true);
    const rows = await journal.listByProcessEpoch("epoch:new");
    expect(rows.some((r) => r.kind === "ACTIVE_AUTHORITY_INVALIDATED")).toBe(
      true,
    );
  });

  it("records UNKNOWN disposition after simulated post-launch crash", async () => {
    const journal = new MemoryAuthorityAttemptJournal();
    const clock = new FixedClock("2026-08-11T13:00:00.000Z");
    const reconcile = new ReconcileLaunchedAttemptOnRestart(journal, clock);
    const result = await reconcile.execute({
      attemptId: "att:crash-1",
      executionContractId: "xct:crash-1",
      processEpochId: "epoch:crash",
      launchedWithoutTerminalResult: true,
    });
    expect(result.ok).toBe(true);
    expect(result.disposition).toBe("UNKNOWN");
    expect(result.attemptStatusUnchanged).toBe(true);
    const latest = await journal.latestDispositionForAttempt("att:crash-1");
    // latest is REVIEW_REQUIRED (operator gate) after UNKNOWN
    expect(latest === "UNKNOWN" || latest === "REVIEW_REQUIRED").toBe(true);
    const all = await journal.findByAttemptId("att:crash-1");
    expect(all.some((r) => r.disposition === "UNKNOWN")).toBe(true);
    expect(all.some((r) => r.disposition === "REVIEW_REQUIRED")).toBe(true);
  });
});
```

---

## Complete modified file diffs

INLINE complete unified diffs (exploitable; not summarized).

### `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index c2d6c3e..1f4b6dc 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -36,6 +36,11 @@ import {
   createInMemoryEvidenceReviewServices,
   type EvidenceReviewServices,
 } from "@/lib/oa/evidence-review";
+import {
+  AcknowledgeCritical,
+  MemoryAuthorityAttemptJournal,
+  createProductionAcknowledgeCritical,
+} from "@/lib/oa/critical-ack";
 import type { ProjectServices } from "@/lib/oa/project";
 import {
   createAttemptReaderBridge,
@@ -89,6 +94,9 @@ export type RuntimeOaStack = {
   readonly evidenceReviewServices: EvidenceReviewServices;
   /** Explicit TestExecutionAdapter — never silent NoOp. */
   readonly fixtureAdapter: TestExecutionAdapter;
+  /** Production Critical Ack (AuthJsGitHubIdentityAdapter — never Fake). */
+  readonly acknowledgeCritical: AcknowledgeCritical;
+  readonly authenticatedIdentityAdapterClassName: "AuthJsGitHubIdentityAdapter";
 };

 function resolveAudit(
@@ -123,12 +131,15 @@ function wireOaStack(
     authorityResolver,
   });

+  const authorityAttemptJournal = new MemoryAuthorityAttemptJournal();
+
   const executionContractServices = createInMemoryExecutionContractServices({
     projectServices,
     decisionServices,
     cycleServices,
     clock,
     authorityResolver,
+    criticalAckJournal: authorityAttemptJournal,
   });

   // EXPLICIT TestExecutionAdapter — never omit (factory default is NoOp).
@@ -142,6 +153,7 @@ function wireOaStack(
     clock,
     authorityResolver,
     policy: { defaultMaxRetriesBudget: 0 },
+    authorityAttemptJournal,
   });

   const evidenceReviewServices = createInMemoryEvidenceReviewServices({
@@ -149,6 +161,14 @@ function wireOaStack(
     attemptReader: createAttemptReaderBridge(executionAttemptServices.attempts),
   });

+  const productionAck = createProductionAcknowledgeCritical({
+    contracts: executionContractServices.contracts,
+    authority: authorityResolver,
+    decisionServices,
+    journal: authorityAttemptJournal,
+    clock,
+  });
+
   return Object.freeze({
     projectServices,
     clock,
@@ -160,6 +180,9 @@ function wireOaStack(
     executionAttemptServices,
     evidenceReviewServices,
     fixtureAdapter,
+    acknowledgeCritical: productionAck.acknowledgeCritical,
+    authenticatedIdentityAdapterClassName:
+      productionAck.identityAdapterClassName,
   });
 }

```

### `projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts b/projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts
index 9174c28..1df2b44 100644
--- a/projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts
+++ b/projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts
@@ -50,7 +50,7 @@ export interface HardFoundationSnapshot {
   readonly closureCriteriaUnmet: readonly string[];
   readonly mutable: false;
   readonly writeCommands: false;
-  readonly iam: "NOT_SELECTED";
+  readonly iam: "SELECTED — AUTH.JS + GITHUB OAUTH / JWT / NO DB ADAPTER";
   readonly persistenceProduct: "NOT_SELECTED";
 }

@@ -89,14 +89,24 @@ export function evaluateHardFoundation(
       label: "Critical acknowledge / authority (no public Critical ack API)",
       evidenceState: evidence,
       proofAvailable: foundationPresent
-        ? ["hard-foundation-contract", "fail-closed-hold"]
+        ? [
+            "hard-foundation-contract",
+            "fail-closed-hold",
+            "critical-ack-port-surface",
+            "authority-attempt-journal-local",
+            "dur4-reconfirm-after-restart-policy",
+            "authjs-github-identity-adapter",
+            "jwt-session-no-db-adapter",
+            "production-acknowledge-critical-composition-authjs",
+          ]
         : [],
       proofMissing: [
-        "authenticated Critical acknowledge API",
-        "IAM-backed authority",
-        "Morris GO for real Critical execution",
+        "live GitHub OAuth proof",
+        "Morris GO for REAL Critical execution",
+        "IAM-backed authority end-to-end with live session",
+        "authenticated Critical acknowledge HTTP API",
       ],
-      openDependencies: ["IAM", "DELIVERY_GATE"],
+      openDependencies: ["LIVE_OAUTH_PROOF", "DELIVERY_GATE"],
       remainsOpen: true,
     },
     {
@@ -109,6 +119,8 @@ export function evaluateHardFoundation(
             "bounded-local-atomic-audit",
             "project-cycle-coordinator-sim",
             "idempotency-keys",
+            "authority-attempt-journal-local",
+            "reconcile-unknown-disposition-no-attempt-enum",
           ]
         : [],
       proofMissing: [
@@ -166,17 +178,19 @@ export function evaluateHardFoundation(
           "INTERNAL_ONLY hard foundation contract",
           "bounded local atomic audit (node:sqlite)",
           "project↔cycle coordinator with honest productionRollbackProven=false",
+          "critical-ack journal surface (local harness; IAM SELECTED Auth.js+GitHub JWT/no-DB; production composition wired via createProductionAcknowledgeCritical / AuthJsGitHubIdentityAdapter; live OAuth proof / Morris HARD acceptance pending)",
+          "honest crossStoreDurable=false",
         ]
       : [],
     closureCriteriaUnmet: [
-      "R-T-A3-1 authenticated Critical ack",
+      "R-T-A3-1 live authenticated Critical ack (OAuth proof)",
       "R-T-A3-2 durable cross-store atomicity",
       "Morris dedicated HARD closure gate",
       "No IAM/delivery/production requirement residual",
     ],
     mutable: false,
     writeCommands: false,
-    iam: "NOT_SELECTED",
+    iam: "SELECTED — AUTH.JS + GITHUB OAUTH / JWT / NO DB ADAPTER",
     persistenceProduct: "NOT_SELECTED",
   });
 }
```

### `projects/sfia-studio/app/__tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts b/projects/sfia-studio/app/__tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts
index b14488f..9a29d25 100644
--- a/projects/sfia-studio/app/__tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts
+++ b/projects/sfia-studio/app/__tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts
@@ -30,7 +30,9 @@ describe("T-A7 HARD foundation", () => {
     expect(snap.deliveryReady).toBe(false);
     expect(snap.closedByCiGreen).toBe(false);
     expect(snap.accessSurface).toBe("INTERNAL_ONLY");
-    expect(snap.iam).toBe("NOT_SELECTED");
+    expect(snap.iam).toBe(
+      "SELECTED — AUTH.JS + GITHUB OAUTH / JWT / NO DB ADAPTER",
+    );
     assertHardNeverClosedByCi(snap);
   });

```

---

## Technical summary (in addition to full content — not instead)

- **Wiring:** `createProductionAcknowledgeCritical` → `AuthJsGitHubIdentityAdapter` → Auth.js `auth()` → `AcknowledgeCritical`
- **Authn ≠ authz:** AuthorityResolverPort remains sole authz / Morris gate; identity never grants `canActAsMorris`
- **No Fake** on production path; fail-closed (null/malformed/wrong-provider session → IDENTITY_REQUIRED / null principal)
- **QA:** 54 critical-ack PASS; typecheck / lint / build PASS
- **R-T-A3-1:** HARD ACCEPTANCE CANDIDATE — MORRIS DECISION REQUIRED
- **R-T-A3-2:** OPEN HARD
- **Gate D:** NOT READY / NOT CONSUMED
- **Cursor REAL:** 0
- **Project git write:** 0

---

## Verdict

```
F3 PROD ADAPTER REVIEW HANDOFF REPAIRED —
FULL FILE CONTENTS AND DIFFS INCLUDED —
CYCLE NUMBER CORRECTED TO 8 —
PRODUCT PACKAGE BYTE-IDENTICAL (c7a979db…) —
NO PRODUCT MUTATION —
R-T-A3-1 HARD ACCEPTANCE CANDIDATE — MORRIS DECISION REQUIRED —
R-T-A3-2 REMAINS OPEN HARD —
GATE D NOT READY / NOT CONSUMED —
NO CURSOR REAL —
NO PROJECT GIT WRITE —
HANDOFF UPDATED
```
