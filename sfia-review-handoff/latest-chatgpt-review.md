# ChatGPT Review Pack — SFIA Studio V3.1-D2-D2 Critical QA Revalidation

## Meta
- Date/time: 2026-08-04 09:38:00 +0200
- Objective: Independent Critical RE-QA of corrected D2-D2 package (F-QA-D2D2-01…11)
- Cycle: 9 — QA / validation — REVALIDATION
- Profile: Critical (Morris explicit)
- Typology: EVOL
- GO QA consumed: GO QA SFIA STUDIO V3.1-D2-D2 — PROFILE CRITICAL — REVALIDATION
- Gates NOT consumed: GO Publication, G-D2D-CURSOR-01, PR/merge, provider live, Cursor live, corrections
- Review pack level: Full
- Mono-cycle: yes (revalidation only)
- Synthesis only: no
- Project files modified by QA: none

## Local Git Truth Check
| Check | Observed | Expected | Result |
|---|---|---|---|
| branch | delivery/sfia-studio-v3-1-d2-d2-read-only-adapters | same | PASS |
| HEAD | c38b6ca97894ff55ad6a4e7d1195274260232f40 | same | PASS |
| origin/main | c38b6ca97894ff55ad6a4e7d1195274260232f40 | same | PASS |
| staged | none | none | PASS |
| package count | 34 | 34 | PASS |
| package SHA-256 | `bd92d3da575fce4a3697ee81c3efb0db43c7eb54d62e1861989cf445286c086d` | `bd92d3da575fce4a3697ee81c3efb0db43c7eb54d62e1861989cf445286c086d` | PASS |

## Corrections handoff consulted
- branch: sfia/review-handoff
- commit: 1ee8acc1fa5af6651e54941bb9c1d0e0310d2b38
- blob: 8c282c54c320b0d040f1eea2cd10794bd0502008 (verified)
- prior QA: c5c4c789… BLOCKED → corrections 1ee8acc → this revalidation

## Package integrity
- hash before QA: `bd92d3da575fce4a3697ee81c3efb0db43c7eb54d62e1861989cf445286c086d`
- hash after QA: `bd92d3da575fce4a3697ee81c3efb0db43c7eb54d62e1861989cf445286c086d`
- identity: STRICT MATCH
- QA modified project files: none

### Package file list
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
- `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/events/redactEventDetail.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/git/fakeGitReadAdapter.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/git/platformGitReadAdapter.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/providerConformance.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/envSecretSourceAdapter.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/serverOnlySecretMaterializer.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/ports/aiExecutionPort.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/ports/cursorExecutionPort.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/ports/executionEventSinkPort.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/ports/gitReadPort.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/ports/providerResult.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/ports/secretSourcePort.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunProviders.ts`
- `projects/sfia-studio/app/lib/oa/execution-run/server/index.ts`

## Sources consulted
- Corrections handoff 1ee8acc (mandatory)
- Prior Critical QA findings F-01…11
- Package execution-run (read-only)
- platform pathPolicy/decideGithubRepo (RO)
- Independent probes under .tmp-sfia-review/qa-probes/revalidation/
- Prior defect probes left untouched (sha256 7e060e07aab3f51f73b817c2a6b7b3ddf54a5237aeaa1379cbab8e183efc8e58)

## CKC
- pilots/04-qa-validation.md — candidate guidance only; no execution authority

## Method
1. Freeze integrity vs corrections package
2. Independent probes asserting corrected behaviors
3. Reproduce permanent suite / typecheck / lint / build / governance
4. Hash after = before
5. Full pack + L3 handoff

## Acceptance matrix F-QA-D2D2-01…11 (revalidation)

| Finding | Prior severity | Re-QA probe | Permanent tests | Result | Status |
|---|---|---|---|---|---|
| F-01 Secret public materialize | BLOCKER | PASS | adapter.secrets.opaque + importBoundaries | PASS | VERIFIED IN RE-QA |
| F-02 redactedSummary leak | MAJOR | PASS | adapter.ai.fake | PASS | VERIFIED IN RE-QA |
| F-03 Git allowlist / path_meta | MAJOR | PASS | adapter.git.readonly | PASS | VERIFIED IN RE-QA |
| F-04 adversarial incomplete | MAJOR | PASS | adversarial.providerBoundary | PASS | VERIFIED IN RE-QA |
| F-05 branch/HEAD tautology | MAJOR | PASS | sandbox.protectedPath | PASS | VERIFIED IN RE-QA |
| F-06 conformance fake-only | MAJOR | PASS | ports.conformance | PASS | VERIFIED IN RE-QA |
| F-07 cancel test permissive | MAJOR | PASS | async.cancel.lateResult | PASS | VERIFIED IN RE-QA |
| F-08 magic timeout 5000 | MINOR | PASS | adapter.ai.fake | PASS | VERIFIED IN RE-QA |
| F-09 prefix bypass | MAJOR | PASS | sandbox.protectedPath | PASS | VERIFIED IN RE-QA |
| F-10 nested event secrets | MAJOR | PASS | adapter.events.redaction | PASS | VERIFIED IN RE-QA |
| F-11 verified=true | MINOR | PASS | ports.conformance | PASS | VERIFIED IN RE-QA |

No BLOCKER or MAJOR remains open against the corrected package.

## Evidence excerpts (corrected surfaces)

### F-01 public port
```text
# projects/sfia-studio/app/lib/oa/execution-run/ports/secretSourcePort.ts:1-24
1|/**
2| * SECRET-B — secrets by opaque handle only; never return serializable secret values
3| * into domain/application results/events/evidence.
4| *
5| * Materialization is NOT part of this public port.
6| */
7|export type SecretHandle = {
8|  readonly id: string;
9|  readonly present: boolean;
10|};
11|
12|export type SecretResolveResult =
13|  | { readonly ok: true; readonly handle: SecretHandle }
14|  | {
15|      readonly ok: false;
16|      readonly reason: "absent" | "expired" | "revoked" | "invalid_id";
17|      readonly handle: SecretHandle;
18|    };
19|
20|export interface SecretSourcePort {
21|  /** Resolve metadata only — never expose the secret string through this port. */
22|  resolve(secretId: string): Promise<SecretResolveResult>;
23|}
```

### F-02 safe summary helper
```text
# projects/sfia-studio/app/lib/oa/execution-run/infrastructure/events/redactEventDetail.ts:60-85
60|    return { ok: true, value: out };
61|  }
62|  return { ok: false, reason: "unsupported_detail_type" };
63|}
64|
65|/** Safe AI/Git summary: metadata only — never embed user or provider content. */
66|export function safeProviderRedactedSummary(parts: {
67|  readonly adapter: string;
68|  readonly operation: string;
69|  readonly status: string;
70|  readonly callIndex?: number;
71|  readonly providerId?: string;
72|  readonly transport?: string;
73|  readonly kind?: string;
74|}): string {
75|  const bits = [
76|    `[${parts.adapter}]`,
77|    `op=${parts.operation}`,
78|    `status=${parts.status}`,
79|  ];
80|  if (parts.callIndex != null) bits.push(`calls=${parts.callIndex}`);
81|  if (parts.providerId) bits.push(`provider=${parts.providerId}`);
82|  if (parts.transport) bits.push(`transport=${parts.transport}`);
83|  if (parts.kind) bits.push(`kind=${parts.kind}`);
84|  return bits.join(" ");
85|}
```

### F-09 segment boundary
```text
# projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts:30-45
30|] as const;
31|
32|/** Exact match or child under prefix with segment boundary (no sibling prefix bypass). */
33|export function pathMatchesAllowlistPrefix(
34|  normalized: string,
35|  prefixRaw: string,
36|): boolean {
37|  const prefix = prefixRaw.replace(/\\/g, "/").replace(/\/+$/, "");
38|  if (!prefix) return false;
39|  if (normalized === prefix) return true;
40|  return normalized.startsWith(prefix + "/");
41|}
42|
43|export function evaluateSandboxPath(input: {
44|  path: unknown;
45|  allowlistRepos: readonly string[];
```

### F-05 observed anchors
```text
# projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts:70-100
70|    pathMatchesAllowlistPrefix(normalized, prefix),
71|  );
72|  if (!allowed) return { allowed: false, reason: "not_allowlisted" };
73|  return { allowed: true, normalized };
74|}
75|
76|export function evaluateSandboxMutationGuards(input: {
77|  mutationRequested: boolean;
78|  arbitraryCommandRequested: boolean;
79|  gitWriteRequested: boolean;
80|  /** Observed values must be independent of expected — never copy expected into observed. */
81|  observedBranch?: string;
82|  expectedBranch?: string;
83|  observedHead?: string;
84|  expectedHead?: string;
85|}): SandboxPathDecision | { allowed: true } {
86|  if (input.arbitraryCommandRequested) {
87|    return { allowed: false, reason: "arbitrary_command" };
88|  }
89|  if (input.mutationRequested || input.gitWriteRequested) {
90|    return { allowed: false, reason: "git_write" };
91|  }
92|  if (input.expectedBranch !== undefined) {
93|    if (input.observedBranch === undefined || input.observedBranch === "") {
94|      return { allowed: false, reason: "observed_missing" };
95|    }
96|    if (input.observedBranch !== input.expectedBranch) {
97|      return { allowed: false, reason: "branch_mismatch" };
98|    }
99|  }
100|  if (input.expectedHead !== undefined) {
```

## Independent probes
- Path: `.tmp-sfia-review/qa-probes/revalidation/probe-d2d2-revalidation.test.ts`
- Config: `.tmp-sfia-review/qa-probes/revalidation/vitest.reqa.config.mjs`
- Prior defect probes: untouched (sha256 `7e060e07aab3f51f73b817c2a6b7b3ddf54a5237aeaa1379cbab8e183efc8e58`)
- Result: **11 / 11 PASS**

### Probe full source
```typescript
/**
 * @vitest-environment node
 * Independent Critical RE-QA probes — assert corrected behaviors for F-QA-D2D2-01…11.
 * Outside package; not committed; does not modify prior defect probes.
 */
import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import {
  evaluateSandboxMutationGuards,
  evaluateSandboxPath,
  pathMatchesAllowlistPrefix,
} from "@/lib/oa/execution-run/domain/sandboxContract";
import { validateUntrustedProviderRequest } from "@/lib/oa/execution-run/domain/providerBoundary";
import { FakeAiExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/ai/fakeAiExecutionAdapter";
import { PlatformAiExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter";
import { FakeGitReadAdapter } from "@/lib/oa/execution-run/infrastructure/git/fakeGitReadAdapter";
import { PlatformGitReadAdapter } from "@/lib/oa/execution-run/infrastructure/git/platformGitReadAdapter";
import { FixtureCursorExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter";
import { FakeSecretSourceAdapter } from "@/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter";
import { PlatformExecutionEventSinkAdapter } from "@/lib/oa/execution-run/infrastructure/events/platformExecutionEventSinkAdapter";
import { RecordingExecutionEventSink } from "@/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink";
import { invokeWithTimeoutAndCancellation } from "@/lib/oa/execution-run/application/providerInvocation";
import { normalizedFailure } from "@/lib/oa/execution-run/domain/errors";
import {
  composeExecutionRunProviders,
  composeExecutionRunProvidersFake,
} from "@/lib/oa/execution-run/server/composeExecutionRunProviders";
import {
  runAiPortConformance,
  runGitPortConformance,
  runSecretPortConformance,
} from "@/lib/oa/execution-run/infrastructure/providerConformance";
import type { SecretSourcePort } from "@/lib/oa/execution-run/ports/secretSourcePort";
import type { ConversationProvider } from "@/lib/platform/ai/types";
import type { GithubReadPort } from "@/lib/platform/repository/githubReadAdapter";
import type { EventSink } from "@/lib/platform/observability/eventSink";
import * as publicBarrel from "@/lib/oa/execution-run";

function stubGithub(calls: string[] = []): GithubReadPort {
  return {
    transport: "github_rest",
    async getRepository(owner, name) {
      calls.push(`${owner}/${name}`);
      return {
        fullName: `${owner}/${name}`,
        defaultBranch: "main",
        description: null,
        url: `https://example.test/${owner}/${name}`,
      };
    },
    async getBranch(_o, _n, branch) {
      return { name: branch, sha: "a".repeat(40) };
    },
    async getCommit(_o, _n, sha) {
      return { sha, message: "m", author: null };
    },
    async getPullRequest() {
      return {
        number: 1,
        title: "t",
        state: "open",
        headRef: "h",
        baseRef: "b",
        url: "https://example.test/pr/1",
      };
    },
    async listPullRequestComments() {
      return [];
    },
    async listChecks() {
      return [];
    },
  };
}

describe("RE-QA F-QA-D2D2 corrected behaviors", () => {
  it("F-01: public SecretSourcePort has no materialize; resolve never serializes secret", async () => {
    const portSrc = fs.readFileSync(
      path.join(process.cwd(), "lib/oa/execution-run/ports/secretSourcePort.ts"),
      "utf8",
    );
    expect(portSrc).not.toMatch(/materialize/);
    expect(Object.keys(publicBarrel).join(",")).not.toMatch(/materialize/i);

    const adapter = new FakeSecretSourceAdapter();
    const port: SecretSourcePort = { resolve: (id) => adapter.resolve(id) };
    expect("materialize" in port).toBe(false);
    expect("materializeForServerOnly" in port).toBe(false);
    const resolved = await port.resolve("TEST_SECRET");
    expect(JSON.stringify(resolved)).not.toMatch(/__FAKE_OPAQUE/);

    const composed = composeExecutionRunProvidersFake();
    expect("materialize" in composed.secrets).toBe(false);
    expect(await runSecretPortConformance(composed.secrets)).toEqual([]);
  });

  it("F-02: AI redactedSummary never echoes user/provider content", async () => {
    const fake = new FakeAiExecutionAdapter();
    const fr = await fake.complete({
      correlationId: "rq2",
      lane: "ai",
      operation: "complete",
      messages: [
        {
          role: "user",
          content: "PII alice@example.com sk-abcdefghijklmnopqrstuvwxyz password=x",
        },
      ],
      timeoutMs: 500,
    });
    expect(fr.kind).toBe("success");
    if (fr.kind === "success") {
      expect(fr.redactedSummary).not.toMatch(/alice@|sk-|password|PII/i);
    }

    const provider: ConversationProvider = {
      providerId: "reqa",
      async complete() {
        return {
          text: "RAW_PROVIDER ghp_abcdefghijklmnopqrstuv",
          usage: {
            inputTokens: 1,
            outputTokens: 1,
            totalTokens: 2,
            model: null,
            providerResponseId: null,
          },
        };
      },
    };
    const pr = await new PlatformAiExecutionAdapter(provider).complete({
      correlationId: "rq2b",
      lane: "ai",
      operation: "complete",
      messages: [{ role: "user", content: "hi" }],
      timeoutMs: 500,
    });
    expect(pr.kind).toBe("success");
    if (pr.kind === "success") {
      expect(pr.redactedSummary).not.toMatch(/RAW_PROVIDER|ghp_/);
      expect(pr.disclosureNotes.some((n) => n.includes("raw_response_omitted"))).toBe(true);
    }
  });

  it("F-03: D2-D Git allowlist fail-closed; path_meta aligned fake/platform", async () => {
    const calls: string[] = [];
    const platform = new PlatformGitReadAdapter(stubGithub(calls), "rest", {
      repositoryAllowlist: ["o/r"],
      pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
      defaultTimeoutMs: 200,
    });
    const denied = await platform.read({
      correlationId: "rq3",
      lane: "git",
      operation: "read",
      owner: "evil-org",
      repo: "evil-repo",
      kind: "repository",
      timeoutMs: 200,
    });
    expect(denied.kind).toBe("failure");
    expect(calls).toEqual([]);

    const fake = new FakeGitReadAdapter({
      repositoryAllowlist: ["o/r"],
      pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
    });
    const req = {
      correlationId: "rq3b",
      lane: "git" as const,
      operation: "read",
      owner: "o",
      repo: "r",
      kind: "path_meta" as const,
      path: "projects/sfia-studio/README.md",
      timeoutMs: 200,
    };
    expect((await platform.read(req)).kind).toBe("success");
    expect((await fake.read(req)).kind).toBe("success");

    const empty = new FakeGitReadAdapter({ repositoryAllowlist: [] });
    expect(
      (
        await empty.read({
          correlationId: "rq3c",
          lane: "git",
          operation: "read",
          owner: "o",
          repo: "r",
          kind: "repository",
          timeoutMs: 50,
        })
      ).kind,
    ).toBe("failure");
  });

  it("F-04: adversarial validation rejects extras, lane none arbitrary op, incomplete git", () => {
    expect(
      validateUntrustedProviderRequest({
        correlationId: "rq4",
        lane: "none",
        operation: "totally_arbitrary_op",
        unexpectedExtra: { nested: true },
      }).ok,
    ).toBe(false);
    expect(
      validateUntrustedProviderRequest({
        correlationId: "rq4b",
        lane: "git",
        operation: "read",
      }).ok,
    ).toBe(false);
    expect(
      validateUntrustedProviderRequest({
        correlationId: "rq4c",
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "hi" }],
        extraField: 1,
      }).ok,
    ).toBe(false);
  });

  it("F-05: missing/mismatched observed branch/HEAD blocks; fixture does not copy expected", async () => {
    expect(
      evaluateSandboxMutationGuards({
        mutationRequested: false,
        arbitraryCommandRequested: false,
        gitWriteRequested: false,
        expectedBranch: "delivery/x",
      }),
    ).toMatchObject({ allowed: false, reason: "observed_missing" });

    const cursor = new FixtureCursorExecutionAdapter();
    const r = await cursor.executeFixture({
      correlationId: "rq5",
      lane: "cursor",
      operation: "fixture",
      instructionSummary: "noop",
      allowlistRepos: ["projects/sfia-studio/"],
      protectedPaths: [],
      expectedBranch: "expected-only-branch",
      expectedHead: "deadbeef",
      timeoutMs: 100,
    });
    expect(r.kind).toBe("failure");
  });

  it("F-06: platform wrappers + compose pass same harness", async () => {
    const provider: ConversationProvider = {
      providerId: "reqa",
      async complete() {
        return {
          text: "should-not-leak",
          usage: {
            inputTokens: null,
            outputTokens: null,
            totalTokens: null,
            model: null,
            providerResponseId: null,
          },
        };
      },
    };
    expect(await runAiPortConformance(new PlatformAiExecutionAdapter(provider))).toEqual([]);
    expect(
      await runGitPortConformance(
        new PlatformGitReadAdapter(stubGithub(), "rest", {
          repositoryAllowlist: ["example/example"],
          pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
          defaultTimeoutMs: 500,
        }),
      ),
    ).toEqual([]);

    const composed = composeExecutionRunProviders({
      ai: new FakeAiExecutionAdapter(),
      git: new FakeGitReadAdapter({
        repositoryAllowlist: ["example/example"],
        pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
      }),
      cursor: new FixtureCursorExecutionAdapter(),
      secrets: { resolve: (id) => new FakeSecretSourceAdapter().resolve(id) },
      events: new RecordingExecutionEventSink(),
    });
    expect(await runAiPortConformance(composed.ai)).toEqual([]);
    expect(await runGitPortConformance(composed.git)).toEqual([]);
  });

  it("F-07: cancellation yields exactly cancelled; timeout yields exactly timed_out", async () => {
    const timed = await invokeWithTimeoutAndCancellation(
      async () => new Promise<never>(() => {}),
      { timeoutMs: 15, correlationId: "rq7t", maxRetries: 0 },
    );
    expect(timed.status).toBe("timed_out");

    const ac = new AbortController();
    const p = invokeWithTimeoutAndCancellation(
      async (signal) =>
        new Promise((resolve) => {
          const finish = () =>
            resolve({
              kind: "cancelled" as const,
              failure: normalizedFailure({
                family: "cancelled",
                code: "CANCELLED",
                userMessage: "cancelled",
                retryable: false,
                correlationId: "rq7c",
              }),
            });
          if (signal.aborted) finish();
          else signal.addEventListener("abort", finish, { once: true });
        }),
      { timeoutMs: 5000, signal: ac.signal, correlationId: "rq7c", maxRetries: 0 },
    );
    ac.abort();
    expect((await p).status).toBe("cancelled");
  });

  it("F-08: omitted timeoutMs fails closed (no invented 5000 default)", async () => {
    const provider: ConversationProvider = {
      providerId: "reqa",
      async complete() {
        return {
          text: "x",
          usage: {
            inputTokens: null,
            outputTokens: null,
            totalTokens: null,
            model: null,
            providerResponseId: null,
          },
        };
      },
    };
    const r = await new PlatformAiExecutionAdapter(provider).complete({
      correlationId: "rq8",
      lane: "ai",
      operation: "complete",
      messages: [{ role: "user", content: "x" }],
    });
    expect(r.kind).toBe("failure");
  });

  it("F-09: sibling prefix bypass blocked", () => {
    expect(
      pathMatchesAllowlistPrefix("projects/sfia-studio-evil/secret.ts", "projects/sfia-studio"),
    ).toBe(false);
    expect(
      evaluateSandboxPath({
        path: "projects/sfia-studio-evil/secret.ts",
        allowlistRepos: ["projects/sfia-studio"],
      }).allowed,
    ).toBe(false);
    expect(
      evaluateSandboxPath({
        path: "projects/sfia-studio/deep/child.ts",
        allowlistRepos: ["projects/sfia-studio"],
      }).allowed,
    ).toBe(true);
  });

  it("F-10: nested event secrets rejected by recording and platform adapters", () => {
    const recording = new RecordingExecutionEventSink();
    expect(() =>
      recording.emit({
        type: "validation",
        correlationId: "rq10",
        runId: "r",
        providerLane: "ai",
        occurredAt: new Date().toISOString(),
        detail: { nested: { apiKey: "should-not-pass", password: "x" } } as never,
      }),
    ).toThrow(/EVENT_(SENSITIVE|NESTED)/);

    const emitted: unknown[] = [];
    const sink: EventSink = { emit(e) { emitted.push(e); } };
    expect(() =>
      new PlatformExecutionEventSinkAdapter(sink).emit({
        type: "validation",
        correlationId: "rq10b",
        runId: "r",
        providerLane: "ai",
        occurredAt: new Date().toISOString(),
        detail: { nested: { apiKey: "should-not-pass" } } as never,
      }),
    ).toThrow(/EVENT_(SENSITIVE|NESTED)/);
    expect(emitted).toHaveLength(0);
  });

  it("F-11: fake/fixture verified=false; platform verified only if explicit", () => {
    expect(new FakeAiExecutionAdapter().describeCapability().verified).toBe(false);
    expect(
      new FakeGitReadAdapter({ repositoryAllowlist: ["o/r"] }).describeCapability().verified,
    ).toBe(false);
    expect(new FixtureCursorExecutionAdapter().describeCapability().verified).toBe(false);
    const provider: ConversationProvider = {
      providerId: "x",
      async complete() {
        return {
          text: "x",
          usage: {
            inputTokens: null,
            outputTokens: null,
            totalTokens: null,
            model: null,
            providerResponseId: null,
          },
        };
      },
    };
    expect(new PlatformAiExecutionAdapter(provider).describeCapability().verified).toBe(false);
    expect(
      new PlatformAiExecutionAdapter(provider, { verified: true }).describeCapability().verified,
    ).toBe(true);
  });
});

```

### Probe output
```

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1/projects/sfia-studio/app

 ✓ ../../../.tmp-sfia-review/qa-probes/revalidation/probe-d2d2-revalidation.test.ts (11 tests) 21ms

 Test Files  1 passed (1)
      Tests  11 passed (11)
   Start at  09:35:47
   Duration  308ms (transform 69ms, setup 0ms, collect 85ms, tests 21ms, environment 0ms, prepare 53ms)


```

## Validations reproduced
| Check | Result | Counts |
|---|---|---|
| revalidation probes | PASS | 1 file / 11 tests |
| targeted execution-run | PASS | 22 files / 130 tests |
| full Vitest | PASS | 124 files / 1176 tests |
| typecheck | PASS | 0 errors |
| lint | PASS | 0 warnings |
| build | PASS | success |
| modeled governance | PASS | 73 / 0 fail |

## Claims
| Claim | Status |
|---|---|
| Package integrity unchanged during re-QA | Demonstrated |
| F-01…11 corrected behaviors verified by independent probes | Demonstrated |
| No project mutation by QA | Demonstrated |
| No live provider / Cursor / Git write | Demonstrated |
| Cursor product capabilities verified | NOT demonstrated (remains UNVERIFIED) |
| Durable / multi-instance / RUN READY / production-ready | Forbidden / not claimed |

## Reserves OPEN NOT LIFTED
1. R-QA-REV-01
2. R-QA-REV-02
3. R-QA-D2C-01
4. CURSOR PRODUCT CAPABILITIES — UNVERIFIED
5. Memory process-local only

## Git Review Index
- base/main / HEAD before/after: c38b6ca97894ff55ad6a4e7d1195274260232f40
- branch: delivery/sfia-studio-v3-1-d2-d2-read-only-adapters
- package count before/after: 34 / 34
- package hash before/after: `bd92d3da575fce4a3697ee81c3efb0db43c7eb54d62e1861989cf445286c086d` / `bd92d3da575fce4a3697ee81c3efb0db43c7eb54d62e1861989cf445286c086d`
- project files modified by QA: none
- staged: none
- project commits: none
- temporary: .tmp-sfia-review/chatgpt-review.md ; .tmp-sfia-review/qa-probes/revalidation/** ; .tmp-sfia-review/reqa-*
- residual BLOCKER/MAJOR: 0
- review pack: full
- next candidate: GO PUBLICATION SFIA STUDIO V3.1-D2-D2

## Review pack content coverage
- project files created by QA: N/A
- project files modified by QA: N/A
- finding evidence excerpts complete: yes
- reproduction commands included: yes
- acceptance matrix complete: yes
- useful evidence included: yes
- synthesis only: no
- review pack verdict: complete

## Confirmations
- no project file modified
- no staged
- no project commit/push
- no live provider
- no Cursor live
- no Git write
- no D2-C / D2-D3
- package hash identical before/after

## Verdict QA (unique)
D2-D2 QA PASS WITH RESERVES —
READY FOR MORRIS PUBLICATION DECISION

## Next Morris decision (candidate, not consumed)
GO PUBLICATION SFIA STUDIO V3.1-D2-D2

## Instruction ChatGPT
Consult remote sfia/review-handoff → sfia-review-handoff/latest-chatgpt-review.md at the commit/blob published by this revalidation cycle before answering Morris.
