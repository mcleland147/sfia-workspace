# ChatGPT Review Pack — SFIA Studio V3.1-D2-D2 Delivery

## Meta
- Date/time: 2026-08-04 07:10:15 +0200
- Cycle: 8 — Delivery / implémentation
- Profile: Standard
- Typology: EVOL
- GO Morris: GO DELIVERY SFIA STUDIO V3.1-D2-D2 (2026-08-04 06:56 CEST)
- Gate consumed: G-D2D-DELIVERY-02
- Expected status: READY WITH RESERVES — READY FOR INDEPENDENT QA
- Review pack level: Light
- Mono-cycle: yes
- Synthesis only: no

## Local Git Truth Check (initial)
1. Repository: sfia-workspace (worktree delivery-d2-d1)
2. Commands executed: fetch prune; branch; rev-parse HEAD; rev-parse origin/main; status; cached; untracked
3. Initial branch: main → then created `delivery/sfia-studio-v3-1-d2-d2-read-only-adapters`
4. HEAD (base / current, no project commit): `c38b6ca97894ff55ad6a4e7d1195274260232f40`
5. origin/main: `c38b6ca97894ff55ad6a4e7d1195274260232f40`
6. Tracked dirty unexpected: none at start
7. Staged: none
8. Untracked at start: `.tmp-sfia-review/**` only (allowed)

## Cycle Knowledge Contract
- Searched: yes
- Cycle: Cycle 8 — Delivery / implémentation
- Detailed CKC: absent locally (not confirmed)
- Status: absent → fallback applied
- Usage: experimental cognitive guidance only
- Authority: none
- Fallback: synthetic fifteen-cycle map + method cycles + template v2.6
- Limit: CKC does not alter GO, scope, or Morris gates

## Sources consulted (role)
1. prompts/templates/sfia-cycle-execution-template.md — method execution template
2. SFIA routing guide (Git) — cycle routing
3. Fifteen-cycle method (Git) — Cycle 8 Delivery semantics
4. CKC Cycle 8 — absent; fallback used
5. Doc 20 cadrage D2-D — scope/boundaries
6. Doc 21 functional design — ports/adapters responsibilities
7. Doc 22 functional architecture — ASYNC-B / EVENT-B / SECRET-B
8. Doc 23 technical architecture — module placement execution-run
9. Doc 24 backlog — D2D2-01…10 adoption
10. execution-run D2-D1 core — state authority
11. platform ai/repository/observability/security/tools — read-only contract-fit
12. harness ports/increment-d — Cursor pattern extract only (no import)
13. PR #307 backlog; PR #308 D2-D1; merge `c38b6ca…`

## Contract-fit report (read-only)
| Capability | Classification | Notes |
|---|---|---|
| platform AI | Compatible with local D2-D adaptation | Wrapper uses `@/lib/platform/ai/types`; no SDK types in domain/application; fake for CI |
| platform Git (repository) | Compatible with local D2-D adaptation | Read-only port; allowlist/ref/path validation in wrapper; no write methods |
| EventSink (observability) | Compatible behind wrapper | D2-D semantic port owns meaning; platform sink is transport; redaction + ISO timestamps |
| security/path policy | Compatible with local adaptation | Sandbox contract + deny-by-default fixture tests; no live Cursor |
| harness Cursor patterns | Pattern extract only | Fixture adapter only; no harness import into domain/client; G-D2D-CURSOR-01 NOT consumed |
| Out-of-scope platform change | Not required | No STOP for platform/harness mutation |

## Actions performed
1. Local Git Truth Check; branch `delivery/sfia-studio-v3-1-d2-d2-read-only-adapters` from main SHA
2. Reset review pack path
3. CKC fallback
4. Inventaire D2-D1 + contract-fit
5. Implemented D2D2-01…08 + D2D2-10; D2D2-09 tracking-only
6. Validations targeted + full + governance
7. Package hash
8. Review pack Light (this file)
9. L3 handoff publish (subsequent)
10. Return project branch (subsequent)

## Coverage D2D2-01…10
- D2D2-01 Provider port conformance harness — DONE
- D2D2-02 AI-B platform adapter + fake — DONE
- D2D2-03 GIT-C read-only adapter + fake — DONE
- D2D2-04 SECRET-B env + fake opaque — DONE
- D2D2-05 EVENT-B sink adapter + recording — DONE
- D2D2-06 ASYNC-B timeout/cancel/late/retry — DONE
- D2D2-07 Adversarial provider boundary — DONE
- D2D2-08 Sandbox/protected-path fixture (no live Cursor) — DONE
- D2D2-09 Cursor eligibility gate — TRACKING ONLY; G-D2D-CURSOR-01 NOT CONSUMED; checklist retained
- D2D2-10 Evidence pack + disclosures — DONE

### D2D2-09 capability checklist (still to verify under G-D2D-CURSOR-01)
- real availability
- process boundary
- cancellation
- timeout
- sandbox
- protected paths
- branch/HEAD anchors
- evidence
- absence of remote Git write

## Git Review Index
- base branch: main @ `c38b6ca97894ff55ad6a4e7d1195274260232f40`
- HEAD before: `c38b6ca97894ff55ad6a4e7d1195274260232f40`
- HEAD after: `c38b6ca97894ff55ad6a4e7d1195274260232f40` (no project commit)
- project branch: `delivery/sfia-studio-v3-1-d2-d2-read-only-adapters` (local only, not pushed)
- files modified: 3
- files created: 29
- project commits created: none
- tests/validations: see Validations
- diff stat (tracked only):
```
.../oa/execution-run/importBoundaries.test.ts      | 41 +++++++++++++++++++++
 .../sfia-studio/app/lib/oa/execution-run/index.ts  | 43 ++++++++++++++++++++++
 .../app/lib/oa/execution-run/server/index.ts       |  4 ++
 3 files changed, 88 insertions(+)
```
- diff name-status (tracked):
```
M	projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
M	projects/sfia-studio/app/lib/oa/execution-run/index.ts
M	projects/sfia-studio/app/lib/oa/execution-run/server/index.ts
```
- Morris decisions required: GO QA SFIA STUDIO V3.1-D2-D2 (after ChatGPT handoff verification)
- review pack: light
- reserves: R-QA-REV-01, R-QA-REV-02, R-QA-D2C-01 OPEN NOT LIFTED; CURSOR PRODUCT CAPABILITIES UNVERIFIED; memory process-local only
- package SHA-256: `3e67f743eb0a350d9e5dce7418b55fe675d88e9a0e78698ed0867c8a8d8f81e3`

## Package hash algorithm
For each relative path sorted UTF-8:
`path + NUL + decimal byte length ASCII + NUL + file bytes`
then SHA-256 over concatenation.
Package file count: 32
Package SHA-256: `3e67f743eb0a350d9e5dce7418b55fe675d88e9a0e78698ed0867c8a8d8f81e3`

## Package file list

- `projects/sfia-studio/app/__tests__/oa/execution-run/adapter.ai.fake.test.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-run/adapter.events.redaction.test.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-run/adapter.git.readonly.test.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-run/adapter.secrets.opaque.test.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-run/adversarial.providerBoundary.test.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-run/async.cancel.lateResult.providers.test.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-run/d2d2.evidence.pack.test.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-run/ports.conformance.test.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/application/providerInvocation.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/domain/providerBoundary.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/index.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/fakeAiExecutionAdapter.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/events/platformExecutionEventSinkAdapter.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/git/fakeGitReadAdapter.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/git/platformGitReadAdapter.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/providerConformance.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/envSecretSourceAdapter.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/ports/aiExecutionPort.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/ports/cursorExecutionPort.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/ports/executionEventSinkPort.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/ports/gitReadPort.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/ports/providerResult.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/ports/secretSourcePort.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunProviders.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/server/index.ts`

## Created files (full content)

### `projects/sfia-studio/app/__tests__/oa/execution-run/adapter.ai.fake.test.ts`

```typescript
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { FakeAiExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/ai/fakeAiExecutionAdapter";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import { PlatformAiExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter";

describe("D2D2-02 AI-B adapters", () => {
  it("fake returns validated usage without raw prompt fields", async () => {
    const ai = new FakeAiExecutionAdapter();
    const result = await ai.complete({
      correlationId: "c1",
      lane: "ai",
      operation: "complete",
      messages: [{ role: "user", content: "hello" }],
    });
    expect(result.kind).toBe("success");
    if (result.kind === "success") {
      expect(result.usage.status).toBe("validated");
      expect(JSON.stringify(result)).not.toMatch(/sk-/);
      expect(result).not.toHaveProperty("prompt");
      expect(result).not.toHaveProperty("rawPresent", true);
    }
  });

  it("platform wrapper maps FakeConversationProvider without SDK types", async () => {
    const ai = new PlatformAiExecutionAdapter(new FakeConversationProvider());
    const result = await ai.complete({
      correlationId: "c2",
      lane: "ai",
      operation: "complete",
      messages: [{ role: "user", content: "ping" }],
      timeoutMs: 2000,
    });
    expect(result.kind).toBe("success");
    if (result.kind === "success") {
      expect(result.disclosureNotes.some((n) => n.includes("raw_prompt_omitted"))).toBe(true);
    }
  });
});

```

### `projects/sfia-studio/app/__tests__/oa/execution-run/adapter.events.redaction.test.ts`

```typescript
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { RecordingExecutionEventSink } from "@/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink";
import { PlatformExecutionEventSinkAdapter } from "@/lib/oa/execution-run/infrastructure/events/platformExecutionEventSinkAdapter";
import { NoopEventSink } from "@/lib/platform/observability/eventSink";

describe("D2D2-05 EVENT-B", () => {
  it("rejects invalid timestamps and sensitive keys", () => {
    const sink = new RecordingExecutionEventSink();
    expect(() =>
      sink.emit({
        type: "validation",
        correlationId: "e1",
        runId: "r1",
        providerLane: "none",
        occurredAt: "not-iso",
        detail: { ok: true },
      }),
    ).toThrow(/EVENT_TIMESTAMP_INVALID/);

    expect(() =>
      sink.emit({
        type: "validation",
        correlationId: "e2",
        runId: "r1",
        providerLane: "none",
        occurredAt: new Date().toISOString(),
        detail: { apiKey: "x" },
      }),
    ).toThrow(/EVENT_SENSITIVE_KEY/);
  });

  it("platform adapter accepts redacted D2-D events", () => {
    const adapter = new PlatformExecutionEventSinkAdapter(new NoopEventSink());
    expect(() =>
      adapter.emit({
        type: "source",
        correlationId: "e3",
        runId: "r1",
        providerLane: "ai",
        occurredAt: new Date().toISOString(),
        detail: { source: "fixture" },
      }),
    ).not.toThrow();
  });
});

```

### `projects/sfia-studio/app/__tests__/oa/execution-run/adapter.git.readonly.test.ts`

```typescript
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { FakeGitReadAdapter } from "@/lib/oa/execution-run/infrastructure/git/fakeGitReadAdapter";

describe("D2D2-03 GIT-C read-only", () => {
  it("discloses transport and rejects protected paths", async () => {
    const git = new FakeGitReadAdapter();
    expect(git.transport).toBe("fake");
    const ok = await git.read({
      correlationId: "g1",
      lane: "git",
      operation: "read",
      owner: "o",
      repo: "r",
      kind: "repository",
    });
    expect(ok.kind).toBe("success");

    const denied = await git.read({
      correlationId: "g2",
      lane: "git",
      operation: "read",
      owner: "o",
      repo: "r",
      kind: "path_meta",
      path: ".env",
    });
    expect(denied.kind).toBe("failure");
  });

  it("exposes no write method", () => {
    const git = new FakeGitReadAdapter();
    expect(Object.getOwnPropertyNames(Object.getPrototypeOf(git))).not.toContain("write");
    expect(Object.getOwnPropertyNames(Object.getPrototypeOf(git))).not.toContain("push");
    expect(Object.getOwnPropertyNames(Object.getPrototypeOf(git))).not.toContain("commit");
  });
});

```

### `projects/sfia-studio/app/__tests__/oa/execution-run/adapter.secrets.opaque.test.ts`

```typescript
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { FakeSecretSourceAdapter } from "@/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter";
import { RecordingExecutionEventSink } from "@/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink";

describe("D2D2-04 SECRET-B", () => {
  it("resolve returns handles without secret values", async () => {
    const secrets = new FakeSecretSourceAdapter();
    const present = await secrets.resolve("TEST_SECRET");
    expect(present.ok).toBe(true);
    expect(JSON.stringify(present)).not.toMatch(/__FAKE_OPAQUE/);
    const absent = await secrets.resolve("MISSING");
    expect(absent.ok).toBe(false);
  });

  it("materialized values must not be emitted on events", () => {
    const secrets = new FakeSecretSourceAdapter();
    const value = secrets.materializeForServerOnly?.("TEST_SECRET");
    expect(value).toBeTruthy();
    const sink = new RecordingExecutionEventSink();
    expect(() =>
      sink.emit({
        type: "provider_invocation",
        correlationId: "s1",
        runId: "r1",
        providerLane: "ai",
        occurredAt: new Date().toISOString(),
        detail: { secret: value! },
      }),
    ).toThrow(/EVENT_SENSITIVE/);
  });
});

```

### `projects/sfia-studio/app/__tests__/oa/execution-run/adversarial.providerBoundary.test.ts`

```typescript
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  validateUntrustedProviderRequest,
  validateUntrustedProviderResult,
} from "@/lib/oa/execution-run/domain/providerBoundary";

describe("D2D2-07 adversarial provider boundary", () => {
  const cases: unknown[] = [
    null,
    undefined,
    1,
    "x",
    [],
    {},
    { correlationId: "c", lane: "ai" },
    { correlationId: "c", lane: "nope", operation: "o" },
    { correlationId: "c", lane: "ai", operation: "o", timeoutMs: -1 },
    { correlationId: "c", lane: "ai", operation: "o", apiKey: "secret" },
    { correlationId: "c", lane: "git", operation: "o", path: "../etc/passwd" },
  ];

  it.each(cases.map((c, i) => [i, c] as const))("rejects case %s", (_i, input) => {
    const v = validateUntrustedProviderRequest(input);
    expect(v.ok).toBe(false);
  });

  it("accepts a minimal valid request before metadata use", () => {
    const v = validateUntrustedProviderRequest({
      correlationId: "c",
      lane: "ai",
      operation: "complete",
      messages: [{ role: "user", content: "hi" }],
    });
    expect(v.ok).toBe(true);
  });

  it("rejects provider results with raw/sensitive fields", () => {
    expect(
      validateUntrustedProviderResult(
        { kind: "success", redactedSummary: "x", prompt: "FULL" },
        "c",
      ).ok,
    ).toBe(false);
    expect(
      validateUntrustedProviderResult(
        { kind: "success", redactedSummary: "x", token: "x" },
        "c",
      ).ok,
    ).toBe(false);
  });
});

```

### `projects/sfia-studio/app/__tests__/oa/execution-run/async.cancel.lateResult.providers.test.ts`

```typescript
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  invokeWithTimeoutAndCancellation,
  recordLateProviderResult,
} from "@/lib/oa/execution-run/application/providerInvocation";
import { normalizedFailure } from "@/lib/oa/execution-run/domain/errors";

describe("D2D2-06 ASYNC-B", () => {
  it("times out and does not retry infinitely", async () => {
    const outcome = await invokeWithTimeoutAndCancellation(
      async () =>
        new Promise<never>(() => {
          /* hang */
        }),
      { timeoutMs: 20, correlationId: "a1", maxRetries: 0 },
    );
    expect(outcome.status).toBe("timed_out");
  });

  it("honours AbortSignal cancellation", async () => {
    const ac = new AbortController();
    const p = invokeWithTimeoutAndCancellation(
      async (signal) => {
        await new Promise((r) => setTimeout(r, 50));
        if (signal.aborted) {
          return {
            kind: "cancelled" as const,
            failure: normalizedFailure({
              family: "cancelled",
              code: "CANCELLED",
              userMessage: "cancelled",
              retryable: false,
              correlationId: "a2",
            }),
          };
        }
        return {
          kind: "success" as const,
          completeness: "complete" as const,
          redactedSummary: "x",
          disclosureNotes: [],
          usage: { status: "unavailable" as const, reason: "n/a" },
        };
      },
      { timeoutMs: 500, signal: ac.signal, correlationId: "a2", maxRetries: 0 },
    );
    ac.abort();
    const outcome = await p;
    expect(["cancelled", "timed_out", "completed"]).toContain(outcome.status);
  });

  it("late result record never mutates terminal", () => {
    const late = recordLateProviderResult({
      receivedAt: new Date().toISOString(),
      terminalState: "succeeded",
      redactedSummary: "late",
    });
    expect(late.mutatesTerminal).toBe(false);
    expect(late.kind).toBe("late_result");
  });

  it("bounds retries to max 3", async () => {
    let calls = 0;
    const outcome = await invokeWithTimeoutAndCancellation(
      async () => {
        calls += 1;
        throw new Error("boom");
      },
      {
        timeoutMs: 100,
        correlationId: "a3",
        maxRetries: 99,
        classifyRetry: () => "retryable",
      },
    );
    expect(outcome.status).toBe("failed");
    expect(calls).toBeLessThanOrEqual(4); // initial + 3
  });
});

```

### `projects/sfia-studio/app/__tests__/oa/execution-run/d2d2.evidence.pack.test.ts`

```typescript
/**
 * @vitest-environment node
 * D2D2-10 slice evidence consolidation smoke.
 */
import { describe, expect, it } from "vitest";
import { composeExecutionRunProvidersFake } from "@/lib/oa/execution-run/server/composeExecutionRunProviders";
import { composeExecutionRunMemory } from "@/lib/oa/execution-run/server/composeExecutionRunMemory";
import { getFixture } from "@/lib/oa/execution-run";

describe("D2D2-10 evidence pack", () => {
  it("fake provider composition discloses non-live boundaries", () => {
    const providers = composeExecutionRunProvidersFake();
    expect(providers.disclosure.cursorLive).toBe(false);
    expect(providers.disclosure.gitWrite).toBe(false);
    expect(providers.disclosure.providersLiveDefault).toBe(false);
    expect(providers.disclosure.memory).toBe("process_local");
    expect(providers.disclosure.gD2dCursor01).toBe("NOT_CONSUMED");
  });

  it("D2-D1 state authority composition remains available", async () => {
    const core = composeExecutionRunMemory();
    const f = getFixture("nominal");
    const created = await core.createExecutionRun({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
    });
    expect(created.ok).toBe(true);
  });
});

```

### `projects/sfia-studio/app/__tests__/oa/execution-run/ports.conformance.test.ts`

```typescript
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { FakeAiExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/ai/fakeAiExecutionAdapter";
import { FakeGitReadAdapter } from "@/lib/oa/execution-run/infrastructure/git/fakeGitReadAdapter";
import { FixtureCursorExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter";
import {
  runAiPortConformance,
  runCursorPortConformance,
  runGitPortConformance,
} from "@/lib/oa/execution-run/infrastructure/providerConformance";

describe("D2D2-01 provider port conformance", () => {
  it("AI fake conforms", async () => {
    expect(await runAiPortConformance(new FakeAiExecutionAdapter())).toEqual([]);
  });

  it("Git fake conforms and has no write", async () => {
    const port = new FakeGitReadAdapter();
    expect(await runGitPortConformance(port)).toEqual([]);
    expect("write" in port).toBe(false);
  });

  it("Cursor fixture conforms with live=false unverified", async () => {
    const port = new FixtureCursorExecutionAdapter();
    expect(await runCursorPortConformance(port)).toEqual([]);
    expect(port.live).toBe(false);
    expect(port.describeCapability().verified).toBe(false);
  });
});

```

### `projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts`

```typescript
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  evaluateSandboxMutationGuards,
  evaluateSandboxPath,
} from "@/lib/oa/execution-run/domain/sandboxContract";
import { FixtureCursorExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter";

describe("D2D2-08 sandbox contract fixture", () => {
  it("deny-by-default and protects sensitive paths", () => {
    expect(
      evaluateSandboxPath({
        path: "secrets/x",
        allowlistRepos: ["projects/sfia-studio/"],
      }).allowed,
    ).toBe(false);
    expect(
      evaluateSandboxPath({
        path: ".git/config",
        allowlistRepos: ["projects/sfia-studio/", ".git/"],
      }).allowed,
    ).toBe(false);
    expect(
      evaluateSandboxPath({
        path: "projects/sfia-studio/app/lib/oa/execution-run/index.ts",
        allowlistRepos: ["projects/sfia-studio/"],
      }).allowed,
    ).toBe(true);
  });

  it("blocks git write and arbitrary commands", () => {
    expect(
      evaluateSandboxMutationGuards({
        mutationRequested: true,
        arbitraryCommandRequested: false,
        gitWriteRequested: false,
      }),
    ).toMatchObject({ allowed: false, reason: "git_write" });
    expect(
      evaluateSandboxMutationGuards({
        mutationRequested: false,
        arbitraryCommandRequested: true,
        gitWriteRequested: false,
      }),
    ).toMatchObject({ allowed: false, reason: "arbitrary_command" });
  });

  it("fixture cursor cannot claim live and stays unverified", async () => {
    const cursor = new FixtureCursorExecutionAdapter();
    expect(cursor.live).toBe(false);
    expect(cursor.describeCapability().verified).toBe(false);
    const denied = await cursor.executeFixture({
      correlationId: "cu1",
      lane: "cursor",
      operation: "fixture",
      instructionSummary: "path=.env",
      allowlistRepos: ["projects/sfia-studio/"],
      protectedPaths: [".env"],
    });
    expect(denied.kind).toBe("failure");
  });
});

```

### `projects/sfia-studio/app/lib/oa/execution-run/application/providerInvocation.ts`

```typescript
/**
 * D2D2-06 ASYNC-B — Promise + AbortSignal coordination.
 * Does not mutate ExecutionRun state directly; callers must use create/transition.
 * Late results never mutate terminals — evidence-only via transition API.
 */
import { normalizedFailure } from "../domain/errors";
import type { NormalizedFailure } from "../domain/types";
import type { ProviderInvocationResult } from "../ports/providerResult";

export type RetryClass = "none" | "retryable" | "non_retryable";

export type InvokeOptions = {
  readonly timeoutMs: number;
  readonly signal?: AbortSignal;
  readonly correlationId: string;
  readonly maxRetries?: number; // default 0; never infinite
  readonly classifyRetry?: (failure: NormalizedFailure) => RetryClass;
};

export type InvokeOutcome =
  | { readonly status: "completed"; readonly result: ProviderInvocationResult }
  | { readonly status: "timed_out"; readonly failure: NormalizedFailure }
  | { readonly status: "cancelled"; readonly failure: NormalizedFailure }
  | { readonly status: "failed"; readonly failure: NormalizedFailure };

function sleep(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(Object.assign(new Error("aborted"), { name: "AbortError" }));
      return;
    }
    const t = setTimeout(resolve, ms);
    const onAbort = () => {
      clearTimeout(t);
      reject(Object.assign(new Error("aborted"), { name: "AbortError" }));
    };
    signal?.addEventListener("abort", onAbort, { once: true });
  });
}

export async function invokeWithTimeoutAndCancellation<T extends ProviderInvocationResult>(
  operation: (signal: AbortSignal) => Promise<T>,
  options: InvokeOptions,
): Promise<InvokeOutcome> {
  const maxRetries = Math.max(0, Math.min(options.maxRetries ?? 0, 3));
  let attempt = 0;
  let lastFailure: NormalizedFailure | undefined;

  while (attempt <= maxRetries) {
    attempt += 1;
    if (options.signal?.aborted) {
      return {
        status: "cancelled",
        failure: normalizedFailure({
          family: "cancelled",
          code: "CANCELLED",
          userMessage: "Provider invocation cancelled",
          retryable: false,
          correlationId: options.correlationId,
        }),
      };
    }

    const controller = new AbortController();
    const onOuterAbort = () => controller.abort();
    options.signal?.addEventListener("abort", onOuterAbort, { once: true });

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const timeoutPromise = new Promise<"__timeout__">((resolve) => {
      timeoutId = setTimeout(() => {
        controller.abort();
        resolve("__timeout__");
      }, options.timeoutMs);
    });

    try {
      const raced = await Promise.race([
        operation(controller.signal).then((r) => ({ tag: "result" as const, r })),
        timeoutPromise.then((t) => ({ tag: "timeout" as const, t })),
        new Promise<{ tag: "cancelled" }>((resolve) => {
          if (options.signal?.aborted) {
            resolve({ tag: "cancelled" });
            return;
          }
          options.signal?.addEventListener(
            "abort",
            () => resolve({ tag: "cancelled" }),
            { once: true },
          );
        }),
      ]);

      if (timeoutId) clearTimeout(timeoutId);
      options.signal?.removeEventListener("abort", onOuterAbort);

      if (raced.tag === "timeout") {
        return {
          status: "timed_out",
          failure: normalizedFailure({
            family: "timed_out",
            code: "TIMED_OUT",
            userMessage: "Provider invocation timed out",
            retryable: true,
            correlationId: options.correlationId,
          }),
        };
      }
      if (raced.tag === "cancelled" || options.signal?.aborted) {
        return {
          status: "cancelled",
          failure: normalizedFailure({
            family: "cancelled",
            code: "CANCELLED",
            userMessage: "Provider invocation cancelled",
            retryable: false,
            correlationId: options.correlationId,
          }),
        };
      }
      return { status: "completed", result: raced.r };
    } catch {
      if (timeoutId) clearTimeout(timeoutId);
      options.signal?.removeEventListener("abort", onOuterAbort);
      if (options.signal?.aborted) {
        return {
          status: "cancelled",
          failure: normalizedFailure({
            family: "cancelled",
            code: "CANCELLED",
            userMessage: "Provider invocation cancelled",
            retryable: false,
            correlationId: options.correlationId,
          }),
        };
      }
      if (controller.signal.aborted) {
        return {
          status: "timed_out",
          failure: normalizedFailure({
            family: "timed_out",
            code: "TIMED_OUT",
            userMessage: "Provider invocation timed out",
            retryable: true,
            correlationId: options.correlationId,
          }),
        };
      }
      lastFailure = normalizedFailure({
        family: "provider_unavailable",
        code: "PROVIDER_UNAVAILABLE",
        userMessage: "Provider invocation failed",
        retryable: true,
        correlationId: options.correlationId,
      });
      const cls = options.classifyRetry?.(lastFailure) ?? "non_retryable";
      if (cls !== "retryable" || attempt > maxRetries) {
        return { status: "failed", failure: lastFailure };
      }
      await sleep(1, options.signal);
    }
  }

  return {
    status: "failed",
    failure:
      lastFailure ??
      normalizedFailure({
        family: "internal_normalized_failure",
        code: "INTERNAL_NORMALIZED_FAILURE",
        userMessage: "Provider invocation exhausted",
        retryable: false,
        correlationId: options.correlationId,
      }),
  };
}

/**
 * Late provider results must NOT mutate terminal state.
 * Returns an evidence-only record for the caller to persist via transitionExecutionRun.
 */
export function recordLateProviderResult(input: {
  readonly receivedAt: string;
  readonly terminalState: string;
  readonly redactedSummary: string;
}): {
  readonly kind: "late_result";
  readonly mutatesTerminal: false;
  readonly receivedAt: string;
  readonly terminalStateAtReceipt: string;
  readonly redactedSummary: string;
} {
  return {
    kind: "late_result",
    mutatesTerminal: false,
    receivedAt: input.receivedAt,
    terminalStateAtReceipt: input.terminalState,
    redactedSummary: input.redactedSummary,
  };
}

```

### `projects/sfia-studio/app/lib/oa/execution-run/domain/providerBoundary.ts`

```typescript
/**
 * D2D2-07 — adversarial validation of untrusted provider-ish payloads
 * BEFORE any metadata field is trusted.
 */
import { normalizedFailure } from "./errors";
import type { NormalizedFailure, ProviderLane } from "./types";
import { isIsoTimestamp } from "./evidence";

const ALLOWED_LANES: readonly ProviderLane[] = ["ai", "git", "cursor", "none"];

export type ProviderBoundaryOk = {
  readonly ok: true;
  readonly lane: ProviderLane;
  readonly correlationId: string;
  readonly operation: string;
};

export type ProviderBoundaryFail = {
  readonly ok: false;
  readonly failure: NormalizedFailure;
};

export function validateUntrustedProviderRequest(
  input: unknown,
  fallbackCorrelationId = "unknown",
): ProviderBoundaryOk | ProviderBoundaryFail {
  const fail = (userMessage: string): ProviderBoundaryFail => ({
    ok: false,
    failure: normalizedFailure({
      family: "validation",
      code: "VALIDATION_ERROR",
      userMessage,
      retryable: false,
      correlationId:
        typeof input === "object" &&
        input !== null &&
        typeof (input as { correlationId?: unknown }).correlationId === "string"
          ? ((input as { correlationId: string }).correlationId || fallbackCorrelationId)
          : fallbackCorrelationId,
    }),
  });

  if (input === null || input === undefined) {
    return fail("Provider request must be an object");
  }
  if (typeof input !== "object" || Array.isArray(input)) {
    return fail("Provider request must be a non-array object");
  }
  const obj = input as Record<string, unknown>;
  if (typeof obj.correlationId !== "string" || !obj.correlationId.trim()) {
    return fail("correlationId required");
  }
  if (typeof obj.lane !== "string" || !(ALLOWED_LANES as readonly string[]).includes(obj.lane)) {
    return fail("lane must be a valid ProviderLane");
  }
  if (typeof obj.operation !== "string" || !obj.operation.trim()) {
    return fail("operation required");
  }
  if (obj.timeoutMs !== undefined) {
    if (typeof obj.timeoutMs !== "number" || !Number.isFinite(obj.timeoutMs) || obj.timeoutMs < 0) {
      return fail("timeoutMs must be a non-negative finite number");
    }
  }
  if (obj.messages !== undefined) {
    if (!Array.isArray(obj.messages)) return fail("messages must be an array when present");
    for (const m of obj.messages) {
      if (!m || typeof m !== "object" || Array.isArray(m)) return fail("invalid message entry");
      const msg = m as Record<string, unknown>;
      if (!["system", "user", "assistant"].includes(String(msg.role))) {
        return fail("invalid message role");
      }
      if (typeof msg.content !== "string") return fail("message content must be string");
      if (msg.content.length > 100_000) return fail("message content exceeds size limit");
    }
  }
  if (obj.path !== undefined) {
    if (typeof obj.path !== "string") return fail("path must be string");
    if (obj.path.includes("..") || obj.path.startsWith("/") || obj.path.includes("\\")) {
      return fail("path traversal or absolute path forbidden");
    }
  }
  // Reject obvious secret-looking fields before metadata use
  for (const key of Object.keys(obj)) {
    if (/secret|password|token|api[_-]?key|authorization/i.test(key)) {
      return fail("forbidden sensitive field in provider request");
    }
  }
  return {
    ok: true,
    lane: obj.lane as ProviderLane,
    correlationId: obj.correlationId,
    operation: obj.operation,
  };
}

export function validateUntrustedProviderResult(
  input: unknown,
  correlationId: string,
): { ok: true } | { ok: false; failure: NormalizedFailure } {
  const fail = (userMessage: string) => ({
    ok: false as const,
    failure: normalizedFailure({
      family: "invalid_provider_result",
      code: "INVALID_PROVIDER_RESULT",
      userMessage,
      retryable: false,
      correlationId,
    }),
  });
  if (input === null || input === undefined || typeof input !== "object" || Array.isArray(input)) {
    return fail("provider result must be an object");
  }
  const obj = input as Record<string, unknown>;
  if (!["success", "failure", "cancelled", "timed_out"].includes(String(obj.kind))) {
    return fail("provider result kind invalid");
  }
  if (obj.kind === "success") {
    if (typeof obj.redactedSummary !== "string") return fail("redactedSummary required");
    if (obj.rawPresent === true) return fail("raw provider payload forbidden");
    if (obj.prompt !== undefined || obj.response !== undefined) {
      return fail("raw prompt/response fields forbidden");
    }
  }
  for (const key of Object.keys(obj)) {
    if (/secret|password|token|api[_-]?key/i.test(key)) {
      return fail("forbidden sensitive field in provider result");
    }
  }
  return { ok: true };
}

export function assertIsoOrFail(
  value: unknown,
  correlationId: string,
): { ok: true; iso: string } | { ok: false; failure: NormalizedFailure } {
  if (typeof value !== "string" || !isIsoTimestamp(value)) {
    return {
      ok: false,
      failure: normalizedFailure({
        family: "validation",
        code: "VALIDATION_ERROR",
        userMessage: "timestamp must be valid ISO-8601",
        retryable: false,
        correlationId,
      }),
    };
  }
  return { ok: true, iso: value };
}

```

### `projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts`

```typescript
/**
 * D2D2-08 — sandbox / protected-path contract (pure, fixture-verifiable).
 * Deny-by-default. Does not claim the sandbox is secure.
 */
export type SandboxPathDecision =
  | { readonly allowed: true; readonly normalized: string }
  | {
      readonly allowed: false;
      readonly reason:
        | "empty"
        | "absolute"
        | "traversal"
        | "protected"
        | "not_allowlisted"
        | "arbitrary_command"
        | "git_write"
        | "branch_mismatch"
        | "head_mismatch";
    };

const DEFAULT_PROTECTED = [
  ".git/",
  ".env",
  "method/",
  "prompts/",
  ".github/",
  ".sfia/",
  "node_modules/",
] as const;

export function evaluateSandboxPath(input: {
  path: unknown;
  allowlistRepos: readonly string[];
  protectedPaths?: readonly string[];
}): SandboxPathDecision {
  if (typeof input.path !== "string" || !input.path.trim()) {
    return { allowed: false, reason: "empty" };
  }
  const raw = input.path.trim().replace(/\\/g, "/");
  if (raw.startsWith("/") || /^[A-Za-z]:\//.test(raw)) {
    return { allowed: false, reason: "absolute" };
  }
  const parts = raw.split("/");
  if (parts.some((p) => p === ".." || p === "")) {
    return { allowed: false, reason: "traversal" };
  }
  const normalized = parts.filter((p) => p !== ".").join("/");
  const protectedPaths = [
    ...DEFAULT_PROTECTED,
    ...(input.protectedPaths ?? []),
  ];
  for (const p of protectedPaths) {
    if (normalized === p.replace(/\/$/, "") || normalized.startsWith(p)) {
      return { allowed: false, reason: "protected" };
    }
  }
  const allowed = input.allowlistRepos.some(
    (prefix) => normalized === prefix.replace(/\/$/, "") || normalized.startsWith(prefix),
  );
  if (!allowed) return { allowed: false, reason: "not_allowlisted" };
  return { allowed: true, normalized };
}

export function evaluateSandboxMutationGuards(input: {
  mutationRequested: boolean;
  arbitraryCommandRequested: boolean;
  gitWriteRequested: boolean;
  branch?: string;
  expectedBranch?: string;
  head?: string;
  expectedHead?: string;
}): SandboxPathDecision | { allowed: true } {
  if (input.arbitraryCommandRequested) {
    return { allowed: false, reason: "arbitrary_command" };
  }
  if (input.mutationRequested || input.gitWriteRequested) {
    return { allowed: false, reason: "git_write" };
  }
  if (input.expectedBranch && input.branch && input.branch !== input.expectedBranch) {
    return { allowed: false, reason: "branch_mismatch" };
  }
  if (input.expectedHead && input.head && input.head !== input.expectedHead) {
    return { allowed: false, reason: "head_mismatch" };
  }
  return { allowed: true };
}

```

### `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/fakeAiExecutionAdapter.ts`

```typescript
import type { AiExecutionPort } from "../../ports/aiExecutionPort";
import type { AiCompletionRequest, ProviderInvocationResult } from "../../ports/providerResult";
import type { ProviderCapabilityDescriptor } from "../../domain/types";
import { normalizedFailure } from "../../domain/errors";
import { validateUntrustedProviderRequest } from "../../domain/providerBoundary";

/** Deterministic AI fake for CI — never live. */
export class FakeAiExecutionAdapter implements AiExecutionPort {
  readonly lane = "ai" as const;
  private calls = 0;

  describeCapability(): ProviderCapabilityDescriptor {
    return {
      lane: "ai",
      capabilityId: "d2d2-ai-fake",
      available: true,
      verified: true,
      readOnly: true,
      supportsCancellation: true,
      supportsTimeout: true,
    };
  }

  async complete(request: AiCompletionRequest): Promise<ProviderInvocationResult> {
    const boundary = validateUntrustedProviderRequest(request);
    if (!boundary.ok) return { kind: "failure", failure: boundary.failure };
    if (request.signal?.aborted) {
      return {
        kind: "cancelled",
        failure: normalizedFailure({
          family: "cancelled",
          code: "CANCELLED",
          userMessage: "AI fake cancelled",
          retryable: false,
          correlationId: request.correlationId,
        }),
      };
    }
    this.calls += 1;
    const last = [...request.messages].reverse().find((m) => m.role === "user");
    return {
      kind: "success",
      completeness: "complete",
      redactedSummary: `[FAKE/NON-LIVE] ai-complete#${this.calls} echo=${(last?.content ?? "").slice(0, 64)}`,
      disclosureNotes: ["source=fake", "live=false"],
      usage: {
        status: "validated",
        inputTokens: 10,
        outputTokens: 5,
        unit: "tokens",
      },
    };
  }
}

```

### `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts`

```typescript
/**
 * AI-B wrapper around platform ConversationProvider.
 * Maps to D2-D contracts; does not re-export SDK types.
 */
import type { ConversationProvider } from "@/lib/platform/ai/types";
import type { AiExecutionPort } from "../../ports/aiExecutionPort";
import type { AiCompletionRequest, ProviderInvocationResult } from "../../ports/providerResult";
import type { ProviderCapabilityDescriptor } from "../../domain/types";
import { normalizedFailure } from "../../domain/errors";
import { validateUntrustedProviderRequest } from "../../domain/providerBoundary";
import { invokeWithTimeoutAndCancellation } from "../../application/providerInvocation";

export class PlatformAiExecutionAdapter implements AiExecutionPort {
  readonly lane = "ai" as const;

  constructor(
    private readonly provider: ConversationProvider,
    private readonly opts?: { readonly defaultTimeoutMs?: number },
  ) {}

  describeCapability(): ProviderCapabilityDescriptor {
    return {
      lane: "ai",
      capabilityId: `d2d2-ai-platform:${this.provider.providerId}`,
      available: true,
      verified: true,
      readOnly: true,
      supportsCancellation: true,
      supportsTimeout: true,
    };
  }

  async complete(request: AiCompletionRequest): Promise<ProviderInvocationResult> {
    const boundary = validateUntrustedProviderRequest(request);
    if (!boundary.ok) return { kind: "failure", failure: boundary.failure };

    const timeoutMs = request.timeoutMs ?? this.opts?.defaultTimeoutMs ?? 5_000;
    const outcome = await invokeWithTimeoutAndCancellation(
      async (signal) => {
        if (signal.aborted) {
          return {
            kind: "cancelled" as const,
            failure: normalizedFailure({
              family: "cancelled",
              code: "CANCELLED",
              userMessage: "AI cancelled",
              retryable: false,
              correlationId: request.correlationId,
            }),
          };
        }
        try {
          const raw = await this.provider.complete(
            request.messages.map((m) => ({ role: m.role, content: m.content })),
          );
          if (signal.aborted) {
            return {
              kind: "cancelled" as const,
              failure: normalizedFailure({
                family: "cancelled",
                code: "CANCELLED",
                userMessage: "AI cancelled",
                retryable: false,
                correlationId: request.correlationId,
              }),
            };
          }
          const usage =
            raw.usage.inputTokens != null || raw.usage.outputTokens != null
              ? {
                  status: "validated" as const,
                  inputTokens: raw.usage.inputTokens ?? undefined,
                  outputTokens: raw.usage.outputTokens ?? undefined,
                  unit: "tokens",
                }
              : { status: "unavailable" as const, reason: "provider usage missing" };
          return {
            kind: "success" as const,
            completeness: "complete" as const,
            redactedSummary: `[AI-B] provider=${this.provider.providerId} text=${raw.text.slice(0, 120)}`,
            disclosureNotes: [
              `providerId=${this.provider.providerId}`,
              "raw_prompt_omitted",
              "raw_response_truncated",
            ],
            usage,
          };
        } catch {
          return {
            kind: "failure" as const,
            failure: normalizedFailure({
              family: "provider_unavailable",
              code: "PROVIDER_UNAVAILABLE",
              userMessage: "AI provider unavailable",
              retryable: true,
              correlationId: request.correlationId,
            }),
          };
        }
      },
      { timeoutMs, signal: request.signal, correlationId: request.correlationId, maxRetries: 0 },
    );

    if (outcome.status === "completed") return outcome.result;
    if (outcome.status === "timed_out") return { kind: "timed_out", failure: outcome.failure };
    if (outcome.status === "cancelled") return { kind: "cancelled", failure: outcome.failure };
    return { kind: "failure", failure: outcome.failure };
  }
}

```

### `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter.ts`

```typescript
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

    const mutation = evaluateSandboxMutationGuards({
      mutationRequested: false,
      arbitraryCommandRequested: false,
      gitWriteRequested: false,
      branch: request.expectedBranch,
      expectedBranch: request.expectedBranch,
      head: request.expectedHead,
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

    // Optional path probe via instructionSummary convention path=
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
      redactedSummary: "[FIXTURE/CURSOR] noop — live=false unverified",
      disclosureNotes: [
        "cursorUnverified=true",
        "live=false",
        "G-D2D-CURSOR-01=NOT_CONSUMED",
        "no_command_execution",
        "no_git_write",
      ],
      usage: { status: "unavailable", reason: "fixture cursor has no usage" },
    };
  }
}

```

### `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/events/platformExecutionEventSinkAdapter.ts`

```typescript
/**
 * EVENT-B — D2-D event semantics mapped onto platform EventSink transport.
 * Platform catalogue is not the semantic authority.
 */
import type { EventSink } from "@/lib/platform/observability/eventSink";
import type {
  ExecutionEvent,
  ExecutionEventSinkPort,
} from "../../ports/executionEventSinkPort";
import { assertIsoOrFail } from "../../domain/providerBoundary";

const FORBIDDEN_DETAIL_KEYS = /secret|password|token|api[_-]?key|prompt|rawResponse|authorization/i;

function mapType(
  type: ExecutionEvent["type"],
): "TOOL_STARTED" | "TOOL_SUCCEEDED" | "TOOL_FAILED" | "SOURCE_LOADED" | "STRUCTURED_OUTPUT_VALIDATED" {
  switch (type) {
    case "provider_invocation":
    case "run_transition":
      return "TOOL_STARTED";
    case "validation":
    case "usage_validated":
    case "completeness":
      return "STRUCTURED_OUTPUT_VALIDATED";
    case "source":
      return "SOURCE_LOADED";
    case "cancellation":
    case "timeout":
    case "late_result":
      return "TOOL_FAILED";
    default:
      return "TOOL_SUCCEEDED";
  }
}

export class PlatformExecutionEventSinkAdapter implements ExecutionEventSinkPort {
  constructor(private readonly sink: EventSink) {}

  emit(event: ExecutionEvent): void {
    const ts = assertIsoOrFail(event.occurredAt, event.correlationId);
    if (!ts.ok) {
      throw new Error(`EVENT_TIMESTAMP_INVALID:${ts.failure.code}`);
    }
    const safeDetail: Record<string, unknown> = {
      d2dEventType: event.type,
      runId: event.runId,
      providerLane: event.providerLane,
      occurredAt: event.occurredAt,
    };
    for (const [k, v] of Object.entries(event.detail)) {
      if (FORBIDDEN_DETAIL_KEYS.test(k)) continue;
      if (typeof v === "string" && /sk-|BEGIN PRIVATE KEY|ghp_/i.test(v)) continue;
      safeDetail[k] = v;
    }
    this.sink.emit({
      type: mapType(event.type),
      correlationId: event.correlationId,
      detail: safeDetail,
    });
  }
}

```

### `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink.ts`

```typescript
import type {
  ExecutionEvent,
  ExecutionEventSinkPort,
} from "../../ports/executionEventSinkPort";
import { assertIsoOrFail } from "../../domain/providerBoundary";

const FORBIDDEN_DETAIL_KEYS = /secret|password|token|api[_-]?key|prompt|rawResponse|authorization/i;

export class RecordingExecutionEventSink implements ExecutionEventSinkPort {
  readonly events: ExecutionEvent[] = [];

  emit(event: ExecutionEvent): void {
    const ts = assertIsoOrFail(event.occurredAt, event.correlationId);
    if (!ts.ok) {
      throw new Error(`EVENT_TIMESTAMP_INVALID:${ts.failure.code}`);
    }
    for (const key of Object.keys(event.detail)) {
      if (FORBIDDEN_DETAIL_KEYS.test(key)) {
        throw new Error(`EVENT_SENSITIVE_KEY_FORBIDDEN:${key}`);
      }
      const val = event.detail[key];
      if (typeof val === "string" && /sk-|BEGIN PRIVATE KEY|ghp_/i.test(val)) {
        throw new Error("EVENT_SENSITIVE_VALUE_FORBIDDEN");
      }
    }
    this.events.push(event);
  }
}

```

### `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/git/fakeGitReadAdapter.ts`

```typescript
import type { GitReadPort } from "../../ports/gitReadPort";
import type { GitReadRequest, ProviderInvocationResult } from "../../ports/providerResult";
import type { ProviderCapabilityDescriptor } from "../../domain/types";
import { validateUntrustedProviderRequest } from "../../domain/providerBoundary";
import { evaluateSandboxPath } from "../../domain/sandboxContract";
import { normalizedFailure } from "../../domain/errors";

/** Read-only fake Git adapter — no write methods. */
export class FakeGitReadAdapter implements GitReadPort {
  readonly lane = "git" as const;
  readonly transport = "fake" as const;

  describeCapability(): ProviderCapabilityDescriptor {
    return {
      lane: "git",
      capabilityId: "d2d2-git-fake",
      available: true,
      verified: true,
      readOnly: true,
      supportsCancellation: true,
      supportsTimeout: true,
    };
  }

  async read(request: GitReadRequest): Promise<ProviderInvocationResult> {
    const boundary = validateUntrustedProviderRequest(request);
    if (!boundary.ok) return { kind: "failure", failure: boundary.failure };
    if (request.path) {
      const pathDecision = evaluateSandboxPath({
        path: request.path,
        allowlistRepos: ["projects/sfia-studio/", "README.md"],
      });
      if (!pathDecision.allowed) {
        return {
          kind: "failure",
          failure: normalizedFailure({
            family: "protected_path",
            code: "PROTECTED_PATH",
            userMessage: `Git path denied: ${pathDecision.reason}`,
            retryable: false,
            correlationId: request.correlationId,
          }),
        };
      }
    }
    return {
      kind: "success",
      completeness: "complete",
      redactedSummary: `[FAKE/GIT-C] ${request.kind} ${request.owner}/${request.repo}${request.ref ? `@${request.ref}` : ""}`,
      disclosureNotes: ["transport=fake", "read_only=true", "write=false"],
      usage: { status: "unavailable", reason: "git read has no token usage" },
    };
  }
}

```

### `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/git/platformGitReadAdapter.ts`

```typescript
/**
 * GIT-C wrapper — transport must be disclosed; no silent fallback; no write.
 */
import type { GithubReadPort } from "@/lib/platform/repository/githubReadAdapter";
import type { GitReadPort } from "../../ports/gitReadPort";
import type { GitReadRequest, ProviderInvocationResult } from "../../ports/providerResult";
import type { ProviderCapabilityDescriptor } from "../../domain/types";
import { validateUntrustedProviderRequest } from "../../domain/providerBoundary";
import { normalizedFailure } from "../../domain/errors";
import { invokeWithTimeoutAndCancellation } from "../../application/providerInvocation";

export class PlatformGitReadAdapter implements GitReadPort {
  readonly lane = "git" as const;
  readonly transport: "gh-cli" | "rest" | "local-git";

  constructor(
    private readonly github: GithubReadPort,
    transport: "gh-cli" | "rest" | "local-git",
    private readonly opts?: { readonly defaultTimeoutMs?: number },
  ) {
    this.transport = transport;
  }

  describeCapability(): ProviderCapabilityDescriptor {
    return {
      lane: "git",
      capabilityId: `d2d2-git-platform:${this.transport}`,
      available: true,
      verified: true,
      readOnly: true,
      supportsCancellation: true,
      supportsTimeout: true,
    };
  }

  async read(request: GitReadRequest): Promise<ProviderInvocationResult> {
    const boundary = validateUntrustedProviderRequest(request);
    if (!boundary.ok) return { kind: "failure", failure: boundary.failure };

    const timeoutMs = request.timeoutMs ?? this.opts?.defaultTimeoutMs ?? 5_000;
    const outcome = await invokeWithTimeoutAndCancellation(
      async (signal) => {
        if (signal.aborted) {
          return {
            kind: "cancelled" as const,
            failure: normalizedFailure({
              family: "cancelled",
              code: "CANCELLED",
              userMessage: "Git read cancelled",
              retryable: false,
              correlationId: request.correlationId,
            }),
          };
        }
        try {
          if (request.kind === "repository") {
            const view = await this.github.getRepository(request.owner, request.repo);
            return {
              kind: "success" as const,
              completeness: "complete" as const,
              redactedSummary: `[GIT-C/${this.transport}] repo ${view.fullName} default=${view.defaultBranch}`,
              disclosureNotes: [`transport=${this.transport}`, "read_only=true"],
              usage: { status: "unavailable" as const, reason: "git read has no token usage" },
            };
          }
          if (request.kind === "branch") {
            const ref = request.ref ?? "main";
            const view = await this.github.getBranch(request.owner, request.repo, ref);
            return {
              kind: "success" as const,
              completeness: "complete" as const,
              redactedSummary: `[GIT-C/${this.transport}] branch ${view.name}@${view.sha.slice(0, 12)}`,
              disclosureNotes: [`transport=${this.transport}`, "read_only=true"],
              usage: { status: "unavailable" as const, reason: "git read has no token usage" },
            };
          }
          if (request.kind === "commit") {
            const sha = request.ref ?? "";
            const view = await this.github.getCommit(request.owner, request.repo, sha);
            return {
              kind: "success" as const,
              completeness: "complete" as const,
              redactedSummary: `[GIT-C/${this.transport}] commit ${view.sha.slice(0, 12)}`,
              disclosureNotes: [`transport=${this.transport}`, "read_only=true"],
              usage: { status: "unavailable" as const, reason: "git read has no token usage" },
            };
          }
          return {
            kind: "failure" as const,
            failure: normalizedFailure({
              family: "validation",
              code: "VALIDATION_ERROR",
              userMessage: "Unsupported git read kind",
              retryable: false,
              correlationId: request.correlationId,
            }),
          };
        } catch (err) {
          const msg = err instanceof Error ? err.message : "git read failed";
          const auth = /auth|401|403/i.test(msg);
          const rate = /rate.?limit|429/i.test(msg);
          return {
            kind: "failure" as const,
            failure: normalizedFailure({
              family: auth ? "authentication" : rate ? "rate_limited" : "provider_unavailable",
              code: auth
                ? "AUTHENTICATION_ERROR"
                : rate
                  ? "RATE_LIMITED"
                  : "PROVIDER_UNAVAILABLE",
              userMessage: "Git read failed",
              retryable: rate,
              correlationId: request.correlationId,
            }),
          };
        }
      },
      { timeoutMs, signal: request.signal, correlationId: request.correlationId, maxRetries: 0 },
    );

    if (outcome.status === "completed") return outcome.result;
    if (outcome.status === "timed_out") return { kind: "timed_out", failure: outcome.failure };
    if (outcome.status === "cancelled") return { kind: "cancelled", failure: outcome.failure };
    return { kind: "failure", failure: outcome.failure };
  }
}

```

### `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/providerConformance.ts`

```typescript
/**
 * D2D2-01 — shared conformance harness for fake + wrapper adapters.
 */
import type { AiExecutionPort } from "../ports/aiExecutionPort";
import type { GitReadPort } from "../ports/gitReadPort";
import type { CursorExecutionPort } from "../ports/cursorExecutionPort";
import type { ProviderCapabilityDescriptor } from "../domain/types";
import { validateUntrustedProviderResult } from "../domain/providerBoundary";

export type ConformanceIssue = {
  readonly code: string;
  readonly message: string;
};

export function assertCapabilityShape(
  cap: ProviderCapabilityDescriptor,
  expectedLane: ProviderCapabilityDescriptor["lane"],
): ConformanceIssue[] {
  const issues: ConformanceIssue[] = [];
  if (cap.lane !== expectedLane) {
    issues.push({ code: "LANE_MISMATCH", message: `expected lane ${expectedLane}` });
  }
  if (typeof cap.capabilityId !== "string" || !cap.capabilityId) {
    issues.push({ code: "CAPABILITY_ID", message: "capabilityId required" });
  }
  if (typeof cap.available !== "boolean") {
    issues.push({ code: "AVAILABLE", message: "available must be boolean" });
  }
  if (typeof cap.verified !== "boolean") {
    issues.push({ code: "VERIFIED", message: "verified must be boolean" });
  }
  if (expectedLane === "cursor" && cap.verified === true) {
    issues.push({
      code: "CURSOR_VERIFIED_FORBIDDEN",
      message: "Cursor capability must remain unverified without G-D2D-CURSOR-01",
    });
  }
  if (expectedLane === "git" && cap.readOnly !== true) {
    issues.push({ code: "GIT_NOT_READONLY", message: "Git capability must be readOnly" });
  }
  return issues;
}

export async function runAiPortConformance(port: AiExecutionPort): Promise<ConformanceIssue[]> {
  const issues = assertCapabilityShape(port.describeCapability(), "ai");
  const result = await port.complete({
    correlationId: "conf-ai-1",
    lane: "ai",
    operation: "complete",
    messages: [{ role: "user", content: "ping" }],
    timeoutMs: 1000,
  });
  const v = validateUntrustedProviderResult(result, "conf-ai-1");
  if (!v.ok) issues.push({ code: "RESULT_INVALID", message: v.failure.userMessage });
  return issues;
}

export async function runGitPortConformance(port: GitReadPort): Promise<ConformanceIssue[]> {
  const issues = assertCapabilityShape(port.describeCapability(), "git");
  if (typeof (port as { write?: unknown }).write === "function") {
    issues.push({ code: "WRITE_SURFACE", message: "Git write method must not exist" });
  }
  const result = await port.read({
    correlationId: "conf-git-1",
    lane: "git",
    operation: "read",
    owner: "example",
    repo: "example",
    kind: "repository",
    timeoutMs: 1000,
  });
  const v = validateUntrustedProviderResult(result, "conf-git-1");
  if (!v.ok) issues.push({ code: "RESULT_INVALID", message: v.failure.userMessage });
  if (!port.transport || port.transport === "undisclosed") {
    issues.push({ code: "TRANSPORT_UNDISCLOSED", message: "transport must be disclosed" });
  }
  return issues;
}

export async function runCursorPortConformance(
  port: CursorExecutionPort,
): Promise<ConformanceIssue[]> {
  const issues = assertCapabilityShape(port.describeCapability(), "cursor");
  if (port.live !== false) {
    issues.push({ code: "LIVE_CURSOR", message: "live Cursor forbidden in D2-D2" });
  }
  const result = await port.executeFixture({
    correlationId: "conf-cursor-1",
    lane: "cursor",
    operation: "fixture",
    instructionSummary: "noop",
    allowlistRepos: ["projects/sfia-studio/"],
    protectedPaths: [".git/"],
    timeoutMs: 1000,
  });
  const v = validateUntrustedProviderResult(result, "conf-cursor-1");
  if (!v.ok) issues.push({ code: "RESULT_INVALID", message: v.failure.userMessage });
  return issues;
}

```

### `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/envSecretSourceAdapter.ts`

```typescript
import type {
  SecretResolveResult,
  SecretSourcePort,
} from "../../ports/secretSourcePort";

/** Controlled local env adapter — presence via process.env without leaking into domain DTOs. */
export class EnvSecretSourceAdapter implements SecretSourcePort {
  async resolve(secretId: string): Promise<SecretResolveResult> {
    if (!secretId || !/^[A-Z][A-Z0-9_]*$/.test(secretId)) {
      return { ok: false, reason: "invalid_id", handle: { id: String(secretId), present: false } };
    }
    const present = typeof process.env[secretId] === "string" && process.env[secretId]!.length > 0;
    if (!present) {
      return { ok: false, reason: "absent", handle: { id: secretId, present: false } };
    }
    return { ok: true, handle: { id: secretId, present: true } };
  }

  materializeForServerOnly(secretId: string): string | undefined {
    if (!/^[A-Z][A-Z0-9_]*$/.test(secretId)) return undefined;
    const v = process.env[secretId];
    return typeof v === "string" && v.length > 0 ? v : undefined;
  }
}

```

### `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter.ts`

```typescript
import type {
  SecretResolveResult,
  SecretSourcePort,
} from "../../ports/secretSourcePort";

/**
 * Fake secret source — resolves presence only.
 * materializeForServerOnly returns a placeholder that must never enter events/evidence.
 */
export class FakeSecretSourceAdapter implements SecretSourcePort {
  constructor(private readonly presentIds: ReadonlySet<string> = new Set(["TEST_SECRET"])) {}

  async resolve(secretId: string): Promise<SecretResolveResult> {
    if (!secretId || typeof secretId !== "string") {
      return { ok: false, reason: "invalid_id", handle: { id: String(secretId), present: false } };
    }
    if (!this.presentIds.has(secretId)) {
      return { ok: false, reason: "absent", handle: { id: secretId, present: false } };
    }
    return { ok: true, handle: { id: secretId, present: true } };
  }

  materializeForServerOnly(secretId: string): string | undefined {
    if (!this.presentIds.has(secretId)) return undefined;
    return `__FAKE_OPAQUE_${secretId}__`;
  }
}

```

### `projects/sfia-studio/app/lib/oa/execution-run/ports/aiExecutionPort.ts`

```typescript
import type { AiCompletionRequest, ProviderInvocationResult } from "./providerResult";
import type { ProviderCapabilityDescriptor } from "../domain/types";

/** D2-D AI lane port — provider-independent. */
export interface AiExecutionPort {
  readonly lane: "ai";
  describeCapability(): ProviderCapabilityDescriptor;
  complete(request: AiCompletionRequest): Promise<ProviderInvocationResult>;
}

```

### `projects/sfia-studio/app/lib/oa/execution-run/ports/cursorExecutionPort.ts`

```typescript
import type { CursorFixtureRequest, ProviderInvocationResult } from "./providerResult";
import type { ProviderCapabilityDescriptor } from "../domain/types";

/**
 * D2-D Cursor port — fixture/fake only in D2-D2.
 * Live Cursor requires G-D2D-CURSOR-01 (NOT consumed).
 */
export interface CursorExecutionPort {
  readonly lane: "cursor";
  readonly live: false;
  describeCapability(): ProviderCapabilityDescriptor;
  executeFixture(request: CursorFixtureRequest): Promise<ProviderInvocationResult>;
}

```

### `projects/sfia-studio/app/lib/oa/execution-run/ports/executionEventSinkPort.ts`

```typescript
import type { ProviderLane } from "../domain/types";

export type ExecutionEventType =
  | "run_transition"
  | "validation"
  | "human_gate"
  | "cancellation"
  | "timeout"
  | "late_result"
  | "completeness"
  | "source"
  | "usage_validated"
  | "provider_invocation";

export type ExecutionEvent = {
  readonly type: ExecutionEventType;
  readonly correlationId: string;
  readonly runId: string;
  readonly providerLane: ProviderLane;
  readonly occurredAt: string;
  /** Redacted, provider-independent detail — no secrets/prompts/raw payloads. */
  readonly detail: Readonly<Record<string, string | number | boolean | null>>;
};

export interface ExecutionEventSinkPort {
  emit(event: ExecutionEvent): void;
}

```

### `projects/sfia-studio/app/lib/oa/execution-run/ports/gitReadPort.ts`

```typescript
import type { GitReadRequest, ProviderInvocationResult } from "./providerResult";
import type { ProviderCapabilityDescriptor } from "../domain/types";

/** D2-D GIT-C port — strict read-only; no mutation methods. */
export interface GitReadPort {
  readonly lane: "git";
  readonly transport: "fake" | "local-git" | "gh-cli" | "rest" | "undisclosed";
  describeCapability(): ProviderCapabilityDescriptor;
  read(request: GitReadRequest): Promise<ProviderInvocationResult>;
}

```

### `projects/sfia-studio/app/lib/oa/execution-run/ports/providerResult.ts`

```typescript
/**
 * D2-D2 provider-independent result / request contracts.
 * Pure types — no SDK, Node, or platform imports.
 */
import type {
  Completeness,
  NormalizedFailure,
  ProviderLane,
  UsageSummary,
} from "../domain/types";

export type ProviderOperationKind =
  | "complete"
  | "git_read"
  | "cursor_fixture"
  | "secret_resolve"
  | "event_emit";

export type ProviderRequestBase = {
  readonly correlationId: string;
  readonly runId?: string;
  readonly lane: ProviderLane;
  readonly operation: string;
  readonly signal?: AbortSignal;
  readonly timeoutMs?: number;
};

export type AiCompletionRequest = ProviderRequestBase & {
  readonly lane: "ai";
  readonly messages: readonly { readonly role: "system" | "user" | "assistant"; readonly content: string }[];
  readonly modelHint?: string;
};

export type GitReadRequest = ProviderRequestBase & {
  readonly lane: "git";
  readonly owner: string;
  readonly repo: string;
  readonly ref?: string;
  readonly path?: string;
  readonly kind: "repository" | "branch" | "commit" | "path_meta";
};

export type CursorFixtureRequest = ProviderRequestBase & {
  readonly lane: "cursor";
  readonly instructionSummary: string;
  readonly allowlistRepos: readonly string[];
  readonly protectedPaths: readonly string[];
  readonly expectedBranch?: string;
  readonly expectedHead?: string;
};

export type ProviderSuccessPayload = {
  readonly kind: "success";
  readonly completeness: Completeness;
  readonly redactedSummary: string;
  /** Never contains raw provider payload or secrets. */
  readonly disclosureNotes: readonly string[];
  readonly usage: UsageSummary;
};

export type ProviderFailurePayload = {
  readonly kind: "failure";
  readonly failure: NormalizedFailure;
};

export type ProviderCancelledPayload = {
  readonly kind: "cancelled";
  readonly failure: NormalizedFailure;
};

export type ProviderTimedOutPayload = {
  readonly kind: "timed_out";
  readonly failure: NormalizedFailure;
};

export type ProviderInvocationResult =
  | ProviderSuccessPayload
  | ProviderFailurePayload
  | ProviderCancelledPayload
  | ProviderTimedOutPayload;

export type LateProviderResultRecord = {
  readonly kind: "late_result";
  readonly receivedAt: string;
  readonly terminalStateAtReceipt: string;
  readonly redactedSummary: string;
  readonly mutatesTerminal: false;
};

```

### `projects/sfia-studio/app/lib/oa/execution-run/ports/secretSourcePort.ts`

```typescript
/**
 * SECRET-B — secrets by opaque handle only; never return serializable secret values
 * into domain/application results/events/evidence.
 */
export type SecretHandle = {
  readonly id: string;
  readonly present: boolean;
};

export type SecretResolveResult =
  | { readonly ok: true; readonly handle: SecretHandle }
  | {
      readonly ok: false;
      readonly reason: "absent" | "expired" | "revoked" | "invalid_id";
      readonly handle: SecretHandle;
    };

export interface SecretSourcePort {
  /** Resolve metadata only — never expose the secret string through this port. */
  resolve(secretId: string): Promise<SecretResolveResult>;
  /**
   * Server-only internal materialization for infrastructure adapters.
   * Must never be called from domain or tests that assert redaction of returned values.
   */
  materializeForServerOnly?(secretId: string): string | undefined;
}

```

### `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunProviders.ts`

```typescript
/**
 * Server-only composition for D2-D2 fake/read-only provider adapters.
 * Does not replace composeExecutionRunMemory — additive wiring only.
 */
import { assertServerOnly } from "./serverOnly";
import { FakeAiExecutionAdapter } from "../infrastructure/ai/fakeAiExecutionAdapter";
import { FakeGitReadAdapter } from "../infrastructure/git/fakeGitReadAdapter";
import { FixtureCursorExecutionAdapter } from "../infrastructure/cursor/fixtureCursorExecutionAdapter";
import { FakeSecretSourceAdapter } from "../infrastructure/secrets/fakeSecretSourceAdapter";
import { RecordingExecutionEventSink } from "../infrastructure/events/recordingExecutionEventSink";
import type { AiExecutionPort } from "../ports/aiExecutionPort";
import type { GitReadPort } from "../ports/gitReadPort";
import type { CursorExecutionPort } from "../ports/cursorExecutionPort";
import type { SecretSourcePort } from "../ports/secretSourcePort";
import type { ExecutionEventSinkPort } from "../ports/executionEventSinkPort";

export type ExecutionRunProviderComposition = {
  readonly ai: AiExecutionPort;
  readonly git: GitReadPort;
  readonly cursor: CursorExecutionPort;
  readonly secrets: SecretSourcePort;
  readonly events: ExecutionEventSinkPort;
  readonly disclosure: {
    readonly cursorLive: false;
    readonly gitWrite: false;
    readonly providersLiveDefault: false;
    readonly memory: "process_local";
    readonly gD2dCursor01: "NOT_CONSUMED";
  };
};

export function composeExecutionRunProvidersFake(): ExecutionRunProviderComposition {
  assertServerOnly();
  return {
    ai: new FakeAiExecutionAdapter(),
    git: new FakeGitReadAdapter(),
    cursor: new FixtureCursorExecutionAdapter(),
    secrets: new FakeSecretSourceAdapter(),
    events: new RecordingExecutionEventSink(),
    disclosure: {
      cursorLive: false,
      gitWrite: false,
      providersLiveDefault: false,
      memory: "process_local",
      gD2dCursor01: "NOT_CONSUMED",
    },
  };
}

```


## Modified files — complete useful diff

```diff

diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
index 108de12..0fb6ad8 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
@@ -122,3 +122,43 @@ describe("D2-D1 execution-run import boundaries", () => {
     expect(barrel).not.toMatch(/persistExecutionRun/);
   });
 });
+
+
+describe("D2-D2 execution-run provider boundary imports", () => {
+  it("domain still has no platform/SDK imports after D2-D2", () => {
+    const files = listTsFiles(path.join(MODULE_ROOT, "domain"));
+    const hits: string[] = [];
+    const forbidden =
+      /from\s+["'](?:node:|openai|@octokit|@\/lib\/(?:platform|harness)|fs|path|child_process)/;
+    for (const file of files) {
+      for (const line of importsOf(file)) {
+        if (forbidden.test(line)) hits.push(`${file}: ${line}`);
+      }
+    }
+    expect(hits).toEqual([]);
+  });
+
+  it("application providerInvocation does not import platform adapters", () => {
+    const file = path.join(MODULE_ROOT, "application/providerInvocation.ts");
+    const src = fs.readFileSync(file, "utf8");
+    expect(src).not.toMatch(/platform\//);
+    expect(src).not.toMatch(/openai|@octokit|harness\//);
+  });
+
+  it("root barrel does not export concrete provider adapters", () => {
+    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
+    expect(barrel).not.toMatch(/FakeAiExecutionAdapter/);
+    expect(barrel).not.toMatch(/PlatformAiExecutionAdapter/);
+    expect(barrel).not.toMatch(/FakeGitReadAdapter/);
+    expect(barrel).not.toMatch(/FixtureCursorExecutionAdapter/);
+    expect(barrel).not.toMatch(/composeExecutionRunProvidersFake/);
+  });
+
+  it("Git read port type file declares no mutation methods", () => {
+    const src = fs.readFileSync(path.join(MODULE_ROOT, "ports/gitReadPort.ts"), "utf8");
+    expect(src).not.toMatch(/\bpush\b/);
+    expect(src).not.toMatch(/\bcommit\(/);
+    expect(src).not.toMatch(/^\s*write\s*\(/m);
+    expect(src).toMatch(/read\(request/);
+  });
+});
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/index.ts b/projects/sfia-studio/app/lib/oa/execution-run/index.ts
index a9fec12..d7cfd4d 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/index.ts
@@ -62,3 +62,46 @@ export type { ClockPort } from "./ports/clockPort";
 export type { IdentityPort } from "./ports/identityPort";
 export { FIXTURE_CATALOGUE, getFixture } from "./fixtures/catalogue";
 export type { FixtureScenario, FixtureScenarioId } from "./fixtures/catalogue";
+
+// D2-D2 provider boundary port types (no concrete adapters on root barrel)
+export type {
+  AiCompletionRequest,
+  CursorFixtureRequest,
+  GitReadRequest,
+  LateProviderResultRecord,
+  ProviderInvocationResult,
+  ProviderOperationKind,
+  ProviderRequestBase,
+} from "./ports/providerResult";
+export type { AiExecutionPort } from "./ports/aiExecutionPort";
+export type { GitReadPort } from "./ports/gitReadPort";
+export type { CursorExecutionPort } from "./ports/cursorExecutionPort";
+export type {
+  SecretHandle,
+  SecretResolveResult,
+  SecretSourcePort,
+} from "./ports/secretSourcePort";
+export type {
+  ExecutionEvent,
+  ExecutionEventSinkPort,
+  ExecutionEventType,
+} from "./ports/executionEventSinkPort";
+export {
+  assertIsoOrFail,
+  validateUntrustedProviderRequest,
+  validateUntrustedProviderResult,
+} from "./domain/providerBoundary";
+export {
+  evaluateSandboxMutationGuards,
+  evaluateSandboxPath,
+} from "./domain/sandboxContract";
+export type { SandboxPathDecision } from "./domain/sandboxContract";
+export {
+  invokeWithTimeoutAndCancellation,
+  recordLateProviderResult,
+} from "./application/providerInvocation";
+export type {
+  InvokeOptions,
+  InvokeOutcome,
+  RetryClass,
+} from "./application/providerInvocation";
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/server/index.ts b/projects/sfia-studio/app/lib/oa/execution-run/server/index.ts
index 4435157..963739c 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/server/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/server/index.ts
@@ -7,3 +7,7 @@ export {
   type ExecutionRunServerComposition,
 } from "./composeExecutionRunMemory";
 export { assertServerOnly } from "./serverOnly";
+export {
+  composeExecutionRunProvidersFake,
+  type ExecutionRunProviderComposition,
+} from "./composeExecutionRunProviders";

```


## Modified files — full current content

### `projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts` (full file after change)

```typescript
/**
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../../..");
const MODULE_ROOT = path.join(APP_ROOT, "lib/oa/execution-run");

function listTsFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules") continue;
      out.push(...listTsFiles(full));
    } else if (/\.tsx?$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function importsOf(file: string): string[] {
  return fs
    .readFileSync(file, "utf8")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("import ") || l.startsWith("export "));
}

describe("D2-D1 execution-run import boundaries", () => {
  it("domain stays pure", () => {
    const files = listTsFiles(path.join(MODULE_ROOT, "domain"));
    expect(files.length).toBeGreaterThan(0);
    const hits: string[] = [];
    const forbidden =
      /from\s+["'](?:node:|next|react|ajv|@\/lib\/(?:ops1|d1|platform|vertical-slice|harness)|fs|path|child_process)/;
    for (const file of files) {
      for (const line of importsOf(file)) {
        if (forbidden.test(line)) hits.push(`${file}: ${line}`);
      }
    }
    expect(hits).toEqual([]);
  });

  it("application does not import infrastructure, AJV, Node, Next, or providers", () => {
    const files = listTsFiles(path.join(MODULE_ROOT, "application"));
    const hits: string[] = [];
    for (const file of files) {
      for (const line of importsOf(file)) {
        if (
          /from\s+["'].*\/infrastructure\/|from\s+["']ajv|openai|@octokit|cursor|node:|from\s+["']next|from\s+["']react/.test(
            line,
          )
        ) {
          hits.push(`${file}: ${line}`);
        }
      }
    }
    expect(hits).toEqual([]);
  });

  it("module does not import harness, vertical-slice-runtime, execution-attempt, or execution-contract internals", () => {
    const files = listTsFiles(MODULE_ROOT);
    const hits: string[] = [];
    for (const file of files) {
      for (const line of importsOf(file)) {
        if (
          /vertical-slice-runtime|execution-attempt|execution-contract|harness\//.test(
            line,
          )
        ) {
          hits.push(`${path.relative(APP_ROOT, file)}: ${line}`);
        }
      }
    }
    expect(hits).toEqual([]);
  });

  it("root barrel does not export concrete composition", () => {
    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
    expect(barrel).not.toMatch(/composeExecutionRunMemory/);
    expect(barrel).not.toMatch(/MemoryExecutionRunStore/);
    expect(barrel).not.toMatch(/AjvExecutionRunSchemaValidation/);
  });

  it("server composition lives under server/ with server-only guard", () => {
    const serverDir = path.join(MODULE_ROOT, "server");
    expect(fs.existsSync(serverDir)).toBe(true);
    const compose = fs.readFileSync(
      path.join(serverDir, "composeExecutionRunMemory.ts"),
      "utf8",
    );
    expect(compose).toMatch(/assertServerOnly/);
    expect(compose).toMatch(/infrastructure\//);
    const guard = fs.readFileSync(path.join(serverDir, "serverOnly.ts"), "utf8");
    expect(guard).toMatch(/typeof window/);
  });

  it("application folder no longer hosts concrete composition", () => {
    expect(
      fs.existsSync(path.join(MODULE_ROOT, "application/composeExecutionRun.ts")),
    ).toBe(false);
  });

  it("public persistExecutionRun is removed; helper lives under application/internal", () => {
    expect(
      fs.existsSync(path.join(MODULE_ROOT, "application/persistExecutionRun.ts")),
    ).toBe(false);
    expect(
      fs.existsSync(
        path.join(
          MODULE_ROOT,
          "application/internal/persistExecutionRunInternal.ts",
        ),
      ),
    ).toBe(true);
    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
    expect(barrel).not.toMatch(/persistExecutionRun/);
  });
});


describe("D2-D2 execution-run provider boundary imports", () => {
  it("domain still has no platform/SDK imports after D2-D2", () => {
    const files = listTsFiles(path.join(MODULE_ROOT, "domain"));
    const hits: string[] = [];
    const forbidden =
      /from\s+["'](?:node:|openai|@octokit|@\/lib\/(?:platform|harness)|fs|path|child_process)/;
    for (const file of files) {
      for (const line of importsOf(file)) {
        if (forbidden.test(line)) hits.push(`${file}: ${line}`);
      }
    }
    expect(hits).toEqual([]);
  });

  it("application providerInvocation does not import platform adapters", () => {
    const file = path.join(MODULE_ROOT, "application/providerInvocation.ts");
    const src = fs.readFileSync(file, "utf8");
    expect(src).not.toMatch(/platform\//);
    expect(src).not.toMatch(/openai|@octokit|harness\//);
  });

  it("root barrel does not export concrete provider adapters", () => {
    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
    expect(barrel).not.toMatch(/FakeAiExecutionAdapter/);
    expect(barrel).not.toMatch(/PlatformAiExecutionAdapter/);
    expect(barrel).not.toMatch(/FakeGitReadAdapter/);
    expect(barrel).not.toMatch(/FixtureCursorExecutionAdapter/);
    expect(barrel).not.toMatch(/composeExecutionRunProvidersFake/);
  });

  it("Git read port type file declares no mutation methods", () => {
    const src = fs.readFileSync(path.join(MODULE_ROOT, "ports/gitReadPort.ts"), "utf8");
    expect(src).not.toMatch(/\bpush\b/);
    expect(src).not.toMatch(/\bcommit\(/);
    expect(src).not.toMatch(/^\s*write\s*\(/m);
    expect(src).toMatch(/read\(request/);
  });
});

```

### `projects/sfia-studio/app/lib/oa/execution-run/index.ts` (full file after change)

```typescript
/**
 * D2-D1 OA execution-run public barrel.
 * Sole D2-D technical state authority — memory/fixture-first only.
 * Concrete server composition is NOT exported here — use ./server.
 */
export { EXECUTION_RUN_SCHEMA_VERSION, EXECUTION_STATES, TERMINAL_STATES, isTerminalState } from "./domain/types";
export type {
  Completeness,
  ExecutionContext,
  ExecutionEvidence,
  ExecutionIntent,
  ExecutionRun,
  ExecutionSource,
  ExecutionState,
  ExternalResult,
  FailureCode,
  FailureFamily,
  HumanDecisionGate,
  NormalizedFailure,
  ProviderCapabilityDescriptor,
  ProviderLane,
  SourceDisclosure,
  UsageSummary,
  ValidationOutcome,
} from "./domain/types";
export { normalizedFailure } from "./domain/errors";
export {
  decideTransition,
  isAllowedTransition,
  listAllowedTransitions,
} from "./domain/transitions";
export type { TransitionDecision, TransitionReason, TransitionRequest } from "./domain/transitions";
export { evaluateReadOnlyPolicy } from "./domain/policy";
export type { PolicyDecision, PolicyInput } from "./domain/policy";
export {
  assertSourceHonest,
  canSucceed,
  createOfficialEvidence,
  createSourceDisclosure,
  isIsoTimestamp,
  usageUnavailable,
} from "./domain/evidence";
export {
  canAcceptLateResult,
  checkExecutionRunInvariants,
  isCursorAssociated,
  LATE_RESULT_ELIGIBLE_STATES,
} from "./domain/invariants";
export { createExecutionRun } from "./application/createExecutionRun";
export type { CreateExecutionRunInput, CreateExecutionRunResult } from "./application/createExecutionRun";
export { transitionExecutionRun } from "./application/transitionExecutionRun";
export type {
  TransitionExecutionRunInput,
  TransitionExecutionRunResult,
} from "./application/transitionExecutionRun";
export type { ExecutionRunRepositoryPort } from "./ports/executionRunRepository";
export type {
  ExecutionRunSchemaName,
  ExecutionRunSchemaValidationPort,
} from "./ports/executionRunSchemaValidation";
export type { ClockPort } from "./ports/clockPort";
export type { IdentityPort } from "./ports/identityPort";
export { FIXTURE_CATALOGUE, getFixture } from "./fixtures/catalogue";
export type { FixtureScenario, FixtureScenarioId } from "./fixtures/catalogue";

// D2-D2 provider boundary port types (no concrete adapters on root barrel)
export type {
  AiCompletionRequest,
  CursorFixtureRequest,
  GitReadRequest,
  LateProviderResultRecord,
  ProviderInvocationResult,
  ProviderOperationKind,
  ProviderRequestBase,
} from "./ports/providerResult";
export type { AiExecutionPort } from "./ports/aiExecutionPort";
export type { GitReadPort } from "./ports/gitReadPort";
export type { CursorExecutionPort } from "./ports/cursorExecutionPort";
export type {
  SecretHandle,
  SecretResolveResult,
  SecretSourcePort,
} from "./ports/secretSourcePort";
export type {
  ExecutionEvent,
  ExecutionEventSinkPort,
  ExecutionEventType,
} from "./ports/executionEventSinkPort";
export {
  assertIsoOrFail,
  validateUntrustedProviderRequest,
  validateUntrustedProviderResult,
} from "./domain/providerBoundary";
export {
  evaluateSandboxMutationGuards,
  evaluateSandboxPath,
} from "./domain/sandboxContract";
export type { SandboxPathDecision } from "./domain/sandboxContract";
export {
  invokeWithTimeoutAndCancellation,
  recordLateProviderResult,
} from "./application/providerInvocation";
export type {
  InvokeOptions,
  InvokeOutcome,
  RetryClass,
} from "./application/providerInvocation";

```

### `projects/sfia-studio/app/lib/oa/execution-run/server/index.ts` (full file after change)

```typescript
/**
 * Explicit server entrypoint for D2-D1 execution-run concrete composition.
 * Client surfaces must not import this module.
 */
export {
  composeExecutionRunMemory,
  type ExecutionRunServerComposition,
} from "./composeExecutionRunMemory";
export { assertServerOnly } from "./serverOnly";
export {
  composeExecutionRunProvidersFake,
  type ExecutionRunProviderComposition,
} from "./composeExecutionRunProviders";

```


## Validations (PASS/FAIL counts)
| Check | Result |
|---|---|
| typecheck (`tsc --noEmit`) | PASS (0 errors) |
| lint (`next lint`) | PASS (0 warnings/errors) |
| targeted `__tests__/oa/execution-run/` | PASS — 22 files / 118 tests |
| full Vitest | PASS — 124 files / 1164 tests |
| build (`npm run build`) | PASS |
| modeled governance (evidence/review/maturity + execution-contract + execution-attempt) | PASS — 73 / 0 fail |
| git diff --check (after EOF fix) | PASS |
| secret motif scan | PASS — only redaction regex literals (`sk-`/`ghp_` patterns in EventSink adapters), no real secrets |
| Git write surface | PASS — gitReadPort has no push/commit/write methods |
| live provider default CI | PASS — fakes/fixtures only |
| Cursor live | PASS — fixture only; `cursorUnverified` retained |
| import boundaries | PASS |
| staged files | none |
| project commit/push | none |

## Security / RSSI controls
- Trust boundaries: ports provider-independent; adapters server composition; domain free of SDK types
- No provider SDK types in domain/application/public root exports of concrete adapters
- Git read-only port; allowlist/path/ref validation in adapters
- Deny-by-default sandbox contract fixture
- Validation before metadata access (providerBoundary)
- Secrets by opaque handle; env adapter local-only; no secret values in events/evidence/errors/tests
- Fake Cursor cannot launch commands / mutate Git
- Cursor capabilities remain UNVERIFIED; no `secure` / `sandbox secure` claim

## FinOps
- Provider/model configurable on AI port
- Usage only after validation
- No coded prices / invented cost estimates
- Retries bounded + classified; no call after terminal cancel
- Live providers out of default CI
- Signals: calls, tokens (when validated), duration, retry, timeout, provider, model

## Performance / resilience
- Promise + AbortSignal + Promise.race timeout
- Configurable timeout injected in tests (no production invent)
- Terminal local state authoritative; late result evidence-only
- No queue/worker/durable persistence

## Observability
- D2-D event semantics owned by ExecutionEventSinkPort
- Platform EventSink = transport only
- ISO timestamp validation + strict redaction
- R-QA-REV-01 / R-QA-REV-02 remain OPEN NOT LIFTED
- No RUN-ready / SLO claim

## DevOps
- Existing scripts only; no workflow/dependency/manifest changes
- Deterministic fake/fixture tests

## Garde-fous confirmation
- No live AI / live GitHub / live Cursor in suite
- No Git write
- No D2-C core correction
- No D2-D3 UI/HTTP/transport
- No durable store / queue / worker
- No new dependency / workflow
- No project commit / push / PR
- Memory remains process-local (D2-D1 path)
- execution-run remains sole D2-D state authority
- G-D2D-CURSOR-01 NOT CONSUMED

## Reserves (OPEN NOT LIFTED)
1. R-QA-REV-01
2. R-QA-REV-02
3. R-QA-D2C-01
4. CURSOR PRODUCT CAPABILITIES — UNVERIFIED
5. Memory process-local only

## Gates
- Consumed: G-D2D-DELIVERY-02 (GO Delivery D2-D2)
- Not consumed: G-D2D-CURSOR-01; any QA gate; PR/merge gates

## Claims allowed
- Local Delivery package implemented for D2-D2 read-only provider boundaries
- Validations green for Delivery scope
- Ready for independent QA with reserves

## Claims forbidden
- QA PASS; Cursor verified; live provider validated; production-ready; RUN READY; durable; restart-safe; multi-instance; PR-ready; reserve lifted

## Working tree status (end of pack generation; before handoff)
```
M projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
 M projects/sfia-studio/app/lib/oa/execution-run/index.ts
 M projects/sfia-studio/app/lib/oa/execution-run/server/index.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/oa/execution-run/adapter.ai.fake.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-run/adapter.events.redaction.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-run/adapter.git.readonly.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-run/adapter.secrets.opaque.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-run/adversarial.providerBoundary.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-run/async.cancel.lateResult.providers.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-run/d2d2.evidence.pack.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-run/ports.conformance.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts
?? projects/sfia-studio/app/lib/oa/execution-run/application/providerInvocation.ts
?? projects/sfia-studio/app/lib/oa/execution-run/domain/providerBoundary.ts
?? projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts
?? projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/
?? projects/sfia-studio/app/lib/oa/execution-run/infrastructure/cursor/
?? projects/sfia-studio/app/lib/oa/execution-run/infrastructure/events/
?? projects/sfia-studio/app/lib/oa/execution-run/infrastructure/git/
?? projects/sfia-studio/app/lib/oa/execution-run/infrastructure/providerConformance.ts
?? projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/
?? projects/sfia-studio/app/lib/oa/execution-run/ports/aiExecutionPort.ts
?? projects/sfia-studio/app/lib/oa/execution-run/ports/cursorExecutionPort.ts
?? projects/sfia-studio/app/lib/oa/execution-run/ports/executionEventSinkPort.ts
?? projects/sfia-studio/app/lib/oa/execution-run/ports/gitReadPort.ts
?? projects/sfia-studio/app/lib/oa/execution-run/ports/providerResult.ts
?? projects/sfia-studio/app/lib/oa/execution-run/ports/secretSourcePort.ts
?? projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunProviders.ts
```

## Review pack content coverage
- created files full content: yes
- modified sections complete: yes (full useful diff + full file content)
- useful diff included: yes
- synthesis only: no
- review pack verdict: complete

## Verdict
D2-D2 DELIVERY IMPLEMENTED —
READ-ONLY PROVIDER BOUNDARIES COMPLETE —
READY FOR INDEPENDENT QA WITH RESERVES

## Next Morris decision (candidate)
GO QA SFIA STUDIO V3.1-D2-D2

## Instruction for ChatGPT
Before answering Morris, consult Git branch `sfia/review-handoff` file `sfia-review-handoff/latest-chatgpt-review.md` and verify coherence with this pack.
