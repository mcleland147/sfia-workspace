# ChatGPT Review Pack — SFIA Studio V3.1-D2-D2 Critical QA

## Meta
- Date/time: 2026-08-04 07:41:16 +0200
- Objective: Independent Critical QA of immutable Delivery package D2-D2
- Cycle: 9 — QA / validation
- Profile: Critical (Morris explicit — secrets, untrusted data, Git read-only, redaction, sandbox, async, conformance claims)
- Typology: EVOL
- GO QA consumed: GO QA SFIA STUDIO V3.1-D2-D2 — PROFILE CRITICAL (2026-08-04 07:19 CEST)
- Gates NOT consumed: GO Corrections, GO Publication, G-D2D-CURSOR-01, provider live, Cursor live, PR/merge
- Review pack level: Full
- Mono-cycle: yes
- Synthesis only: no

## Local Git Truth Check
| Check | Observed | Expected | Result |
|---|---|---|---|
| branch | delivery/sfia-studio-v3-1-d2-d2-read-only-adapters | same | PASS |
| HEAD | c38b6ca97894ff55ad6a4e7d1195274260232f40 | same | PASS |
| origin/main | c38b6ca97894ff55ad6a4e7d1195274260232f40 | same | PASS |
| staged | none | none | PASS |
| tracked modified | 3 announced files | 3 | PASS |
| untracked package | 29 announced | 29 | PASS |
| other project untracked | none outside .tmp-sfia-review/** | allowed | PASS |

## Package integrity
- Delivery handoff commit: fcd2cbff4e1b21fc91b7dc14040feb8821112de0
- Delivery handoff blob: bcfaf0eb21cd831eabfaf3be4593b3b92469a7d2 (verified)
- Package count before/after: 32 / 32
- Package SHA-256 before/after: `3e67f743eb0a350d9e5dce7418b55fe675d88e9a0e78698ed0867c8a8d8f81e3` / `3e67f743eb0a350d9e5dce7418b55fe675d88e9a0e78698ed0867c8a8d8f81e3`
- Content vs handoff mismatches: 0
- QA modified project files: none
- Integrity: MATCH

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

## Handoff Delivery consulted
- sfia/review-handoff → sfia-review-handoff/latest-chatgpt-review.md @ fcd2cbf / blob bcfaf0eb
- Used for list, hash, claims, reserves; Delivery validations challenged not accepted as QA proof

## Sources consulted
Template v2.6; routing guide Cycle 9; method §4.9; operating model; rules/guardrails; validation checklist;
docs 20–24; execution-run package; platform ai/repository/observability/security/tools; harness (RO);
package.json scripts; publish-review-handoff.sh; PR #307/#308; main@c38b6ca; Delivery handoff.

## CKC
- pilots/04-qa-validation.md — candidate / experimental guidance / no execution authority

## Method QA
Integrity freeze → static audit → hypotheses+probes → extra findings → reproduce validations → hash after → Full pack → L3 handoff

## Acceptance matrix D2D2-01…10
| Story | Result | Finding | Final |
|---|---|---|---|
| D2D2-01 conformance fake+wrapper | PARTIAL — Delivery tests fakes only | F-QA-D2D2-06 | MAJOR gap |
| D2D2-02 AI-B redaction | FAIL — summary echoes/truncates content | F-QA-D2D2-02 | MAJOR |
| D2D2-03 GIT-C allowlist on wrapper | PARTIAL — no D2-D allowlist; path_meta diverge | F-QA-D2D2-03 | MAJOR |
| D2D2-04 SECRET-B opaque | FAIL — materialize string on public port | F-QA-D2D2-01 | BLOCKER |
| D2D2-05 EVENT-B redaction | PARTIAL — nested secrets pass | F-QA-D2D2-10 | MAJOR |
| D2D2-06 async cancel/timeout | PARTIAL — cancel test permissive | F-QA-D2D2-07 | MAJOR |
| D2D2-07 adversarial boundary | PARTIAL — extras/lane none/incomplete git OK | F-QA-D2D2-04 | MAJOR |
| D2D2-08 sandbox anchors | PARTIAL — tautological anchors; prefix bypass | F-QA-D2D2-05,09 | MAJOR |
| D2D2-09 Cursor gate tracking | PASS tracking — UNVERIFIED; gate NOT consumed | — | OK |
| D2D2-10 evidence pack | packaging OK; readiness blocked by findings | — | packaging OK |

## Hypotheses
### Confirmed
- H01 Git policy incomplete on D2-D wrapper → MAJOR F-QA-D2D2-03
- H02 Secret boundary permeable → BLOCKER F-QA-D2D2-01
- H03 AI redaction insufficient → MAJOR F-QA-D2D2-02
- H04 Adversarial validation partial → MAJOR F-QA-D2D2-04
- H05 Branch/HEAD tautological → MAJOR F-QA-D2D2-05
- H06 Conformance fake-only in Delivery → MAJOR F-QA-D2D2-06
- H07 Cancellation test permissive → MAJOR F-QA-D2D2-07
- H08 Default timeout 5000 → MINOR F-QA-D2D2-08
### Infirmed
- None
### Requalified
- H01: platform GithubReadAdapter has assertRepo, but D2-D PlatformGitReadAdapter does not enforce allowlist and accepts any injected GithubReadPort
- H06: harness can accept platform stubs (probe); Delivery suite/composition still fake-only

## Findings

### F-QA-D2D2-01 — BLOCKER — Public SecretSourcePort exposes serializable secret materialization
- Story: D2D2-04
- Criterion: no serializable secret via public contract
- Files: ports/secretSourcePort.ts L19-26; index.ts exports; fake/env adapters
- Reproduction:
  cd projects/sfia-studio/app && npx vitest run --config <WT>/.tmp-sfia-review/qa-probes/vitest.qa-probes.config.mjs -t H02
- Expected: public port cannot return secret string
- Observed: materialize returns string; JSON.stringify contains __FAKE_OPAQUE
- Impact: structural secret boundary failure; publication unsafe
- Recommendation (NOT implemented): remove materialize from public port; private infra-only type
- Status: OPEN — requires GO CORRECTIONS
```text
# projects/sfia-studio/app/lib/oa/execution-run/ports/secretSourcePort.ts:1-26
1|/**
2| * SECRET-B — secrets by opaque handle only; never return serializable secret values
3| * into domain/application results/events/evidence.
4| */
5|export type SecretHandle = {
6|  readonly id: string;
7|  readonly present: boolean;
8|};
9|
10|export type SecretResolveResult =
11|  | { readonly ok: true; readonly handle: SecretHandle }
12|  | {
13|      readonly ok: false;
14|      readonly reason: "absent" | "expired" | "revoked" | "invalid_id";
15|      readonly handle: SecretHandle;
16|    };
17|
18|export interface SecretSourcePort {
19|  /** Resolve metadata only — never expose the secret string through this port. */
20|  resolve(secretId: string): Promise<SecretResolveResult>;
21|  /**
22|   * Server-only internal materialization for infrastructure adapters.
23|   * Must never be called from domain or tests that assert redaction of returned values.
24|   */
25|  materializeForServerOnly?(secretId: string): string | undefined;
26|}
```

### F-QA-D2D2-02 — MAJOR — redactedSummary carries user/provider content
- Story: D2D2-02
- Files: fakeAiExecutionAdapter.ts L44; platformAiExecutionAdapter.ts L80
- Reproduction: probe H03
- Expected: no raw user/provider text in redactedSummary
- Observed: PII/email and sk-… echoed; platform embeds RAW_PROVIDER… ghp_… (synthetic probe tokens)
- Impact: false redaction claim
- Recommendation: opaque digests only
- Status: OPEN
```text
# projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/fakeAiExecutionAdapter.ts:40-52
40|    const last = [...request.messages].reverse().find((m) => m.role === "user");
41|    return {
42|      kind: "success",
43|      completeness: "complete",
44|      redactedSummary: `[FAKE/NON-LIVE] ai-complete#${this.calls} echo=${(last?.content ?? "").slice(0, 64)}`,
45|      disclosureNotes: ["source=fake", "live=false"],
46|      usage: {
47|        status: "validated",
48|        inputTokens: 10,
49|        outputTokens: 5,
50|        unit: "tokens",
51|      },
52|    };
```
```text
# projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts:77-86
77|          return {
78|            kind: "success" as const,
79|            completeness: "complete" as const,
80|            redactedSummary: `[AI-B] provider=${this.provider.providerId} text=${raw.text.slice(0, 120)}`,
81|            disclosureNotes: [
82|              `providerId=${this.provider.providerId}`,
83|              "raw_prompt_omitted",
84|              "raw_response_truncated",
85|            ],
86|            usage,
```

### F-QA-D2D2-03 — MAJOR — D2-D Git wrapper lacks repository allowlist; path_meta diverge
- Story: D2D2-03
- Reproduction: probe H01 evil-org/evil-repo success; path_meta platform failure vs fake success
- Impact: Git policy incomplete at D2-D boundary
- Status: OPEN
```text
# projects/sfia-studio/app/lib/oa/execution-run/infrastructure/git/platformGitReadAdapter.ts:24-65
24|  describeCapability(): ProviderCapabilityDescriptor {
25|    return {
26|      lane: "git",
27|      capabilityId: `d2d2-git-platform:${this.transport}`,
28|      available: true,
29|      verified: true,
30|      readOnly: true,
31|      supportsCancellation: true,
32|      supportsTimeout: true,
33|    };
34|  }
35|
36|  async read(request: GitReadRequest): Promise<ProviderInvocationResult> {
37|    const boundary = validateUntrustedProviderRequest(request);
38|    if (!boundary.ok) return { kind: "failure", failure: boundary.failure };
39|
40|    const timeoutMs = request.timeoutMs ?? this.opts?.defaultTimeoutMs ?? 5_000;
41|    const outcome = await invokeWithTimeoutAndCancellation(
42|      async (signal) => {
43|        if (signal.aborted) {
44|          return {
45|            kind: "cancelled" as const,
46|            failure: normalizedFailure({
47|              family: "cancelled",
48|              code: "CANCELLED",
49|              userMessage: "Git read cancelled",
50|              retryable: false,
51|              correlationId: request.correlationId,
52|            }),
53|          };
54|        }
55|        try {
56|          if (request.kind === "repository") {
57|            const view = await this.github.getRepository(request.owner, request.repo);
58|            return {
59|              kind: "success" as const,
60|              completeness: "complete" as const,
61|              redactedSummary: `[GIT-C/${this.transport}] repo ${view.fullName} default=${view.defaultBranch}`,
62|              disclosureNotes: [`transport=${this.transport}`, "read_only=true"],
63|              usage: { status: "unavailable" as const, reason: "git read has no token usage" },
64|            };
65|          }
```

### F-QA-D2D2-04 — MAJOR — Adversarial request validation incomplete
- Story: D2D2-07
- Reproduction: probe H04 — lane none + arbitrary operation + extras OK; git without owner/repo/kind OK
- Status: OPEN
```text
# projects/sfia-studio/app/lib/oa/execution-run/domain/providerBoundary.ts:49-93
49|  const obj = input as Record<string, unknown>;
50|  if (typeof obj.correlationId !== "string" || !obj.correlationId.trim()) {
51|    return fail("correlationId required");
52|  }
53|  if (typeof obj.lane !== "string" || !(ALLOWED_LANES as readonly string[]).includes(obj.lane)) {
54|    return fail("lane must be a valid ProviderLane");
55|  }
56|  if (typeof obj.operation !== "string" || !obj.operation.trim()) {
57|    return fail("operation required");
58|  }
59|  if (obj.timeoutMs !== undefined) {
60|    if (typeof obj.timeoutMs !== "number" || !Number.isFinite(obj.timeoutMs) || obj.timeoutMs < 0) {
61|      return fail("timeoutMs must be a non-negative finite number");
62|    }
63|  }
64|  if (obj.messages !== undefined) {
65|    if (!Array.isArray(obj.messages)) return fail("messages must be an array when present");
66|    for (const m of obj.messages) {
67|      if (!m || typeof m !== "object" || Array.isArray(m)) return fail("invalid message entry");
68|      const msg = m as Record<string, unknown>;
69|      if (!["system", "user", "assistant"].includes(String(msg.role))) {
70|        return fail("invalid message role");
71|      }
72|      if (typeof msg.content !== "string") return fail("message content must be string");
73|      if (msg.content.length > 100_000) return fail("message content exceeds size limit");
74|    }
75|  }
76|  if (obj.path !== undefined) {
77|    if (typeof obj.path !== "string") return fail("path must be string");
78|    if (obj.path.includes("..") || obj.path.startsWith("/") || obj.path.includes("\\")) {
79|      return fail("path traversal or absolute path forbidden");
80|    }
81|  }
82|  // Reject obvious secret-looking fields before metadata use
83|  for (const key of Object.keys(obj)) {
84|    if (/secret|password|token|api[_-]?key|authorization/i.test(key)) {
85|      return fail("forbidden sensitive field in provider request");
86|    }
87|  }
88|  return {
89|    ok: true,
90|    lane: obj.lane as ProviderLane,
91|    correlationId: obj.correlationId,
92|    operation: obj.operation,
93|  };
```

### F-QA-D2D2-05 — MAJOR — Branch/HEAD anchors tautological
- Story: D2D2-08
- Reproduction: probe H05 — missing observed allowed; fixture sets branch=expectedBranch
- Status: OPEN
```text
# projects/sfia-studio/app/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter.ts:38-46
38|    const mutation = evaluateSandboxMutationGuards({
39|      mutationRequested: false,
40|      arbitraryCommandRequested: false,
41|      gitWriteRequested: false,
42|      branch: request.expectedBranch,
43|      expectedBranch: request.expectedBranch,
44|      head: request.expectedHead,
45|      expectedHead: request.expectedHead,
46|    });
```
```text
# projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts:64-85
64|export function evaluateSandboxMutationGuards(input: {
65|  mutationRequested: boolean;
66|  arbitraryCommandRequested: boolean;
67|  gitWriteRequested: boolean;
68|  branch?: string;
69|  expectedBranch?: string;
70|  head?: string;
71|  expectedHead?: string;
72|}): SandboxPathDecision | { allowed: true } {
73|  if (input.arbitraryCommandRequested) {
74|    return { allowed: false, reason: "arbitrary_command" };
75|  }
76|  if (input.mutationRequested || input.gitWriteRequested) {
77|    return { allowed: false, reason: "git_write" };
78|  }
79|  if (input.expectedBranch && input.branch && input.branch !== input.expectedBranch) {
80|    return { allowed: false, reason: "branch_mismatch" };
81|  }
82|  if (input.expectedHead && input.head && input.head !== input.expectedHead) {
83|    return { allowed: false, reason: "head_mismatch" };
84|  }
85|  return { allowed: true };
```

### F-QA-D2D2-06 — MAJOR — Delivery conformance/composition covers fakes only
- Story: D2D2-01
- Evidence: ports.conformance.test.ts uses Fake/Fixture only; composeExecutionRunProvidersFake only
- Probe H06: platform stubs can pass harness but Delivery never runs them
- Status: OPEN

### F-QA-D2D2-07 — MAJOR — Cancellation test accepts contradictory outcomes
- Story: D2D2-06
- Evidence: expect(["cancelled", "timed_out", "completed"]).toContain(outcome.status)
- Status: OPEN
```text
# projects/sfia-studio/app/__tests__/oa/execution-run/async.cancel.lateResult.providers.test.ts:23-53
23|  it("honours AbortSignal cancellation", async () => {
24|    const ac = new AbortController();
25|    const p = invokeWithTimeoutAndCancellation(
26|      async (signal) => {
27|        await new Promise((r) => setTimeout(r, 50));
28|        if (signal.aborted) {
29|          return {
30|            kind: "cancelled" as const,
31|            failure: normalizedFailure({
32|              family: "cancelled",
33|              code: "CANCELLED",
34|              userMessage: "cancelled",
35|              retryable: false,
36|              correlationId: "a2",
37|            }),
38|          };
39|        }
40|        return {
41|          kind: "success" as const,
42|          completeness: "complete" as const,
43|          redactedSummary: "x",
44|          disclosureNotes: [],
45|          usage: { status: "unavailable" as const, reason: "n/a" },
46|        };
47|      },
48|      { timeoutMs: 500, signal: ac.signal, correlationId: "a2", maxRetries: 0 },
49|    );
50|    ac.abort();
51|    const outcome = await p;
52|    expect(["cancelled", "timed_out", "completed"]).toContain(outcome.status);
53|  });
```

### F-QA-D2D2-08 — MINOR — Hardcoded default timeout 5000 ms
- Files: platform AI/Git adapters `?? 5_000`
- Status: OPEN

### F-QA-D2D2-09 — MAJOR — Allowlist prefix match bypasses path segment boundary
- Story: D2D2-08
- Reproduction: evaluateSandboxPath(path=projects/sfia-studio-evil/secret.ts, allowlistRepos=[projects/sfia-studio]) → allowed true
- Status: OPEN
```text
# projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts:52-61
52|  for (const p of protectedPaths) {
53|    if (normalized === p.replace(/\/$/, "") || normalized.startsWith(p)) {
54|      return { allowed: false, reason: "protected" };
55|    }
56|  }
57|  const allowed = input.allowlistRepos.some(
58|    (prefix) => normalized === prefix.replace(/\/$/, "") || normalized.startsWith(prefix),
59|  );
60|  if (!allowed) return { allowed: false, reason: "not_allowlisted" };
61|  return { allowed: true, normalized };
```

### F-QA-D2D2-10 — MAJOR — Nested event detail secrets not redacted by platform adapter
- Story: D2D2-05
- Reproduction: nested probe — detail.nested.apiKey/password forwarded
- Status: OPEN
```text
# projects/sfia-studio/app/lib/oa/execution-run/infrastructure/events/platformExecutionEventSinkAdapter.ts:44-59
44|    const safeDetail: Record<string, unknown> = {
45|      d2dEventType: event.type,
46|      runId: event.runId,
47|      providerLane: event.providerLane,
48|      occurredAt: event.occurredAt,
49|    };
50|    for (const [k, v] of Object.entries(event.detail)) {
51|      if (FORBIDDEN_DETAIL_KEYS.test(k)) continue;
52|      if (typeof v === "string" && /sk-|BEGIN PRIVATE KEY|ghp_/i.test(v)) continue;
53|      safeDetail[k] = v;
54|    }
55|    this.sink.emit({
56|      type: mapType(event.type),
57|      correlationId: event.correlationId,
58|      detail: safeDetail,
59|    });
```

### F-QA-D2D2-11 — MINOR — Fake AI/Git declare verified=true without product verification
- Status: OPEN

## Validations reproduced
| Check | Result | Counts |
|---|---|---|
| targeted execution-run | PASS | 22 files / 118 tests |
| full Vitest | PASS | 124 / 1164 |
| typecheck | PASS | 0 errors |
| lint | PASS | 0 warnings |
| build | PASS | success |
| modeled governance | PASS | 73 / 0 fail |
| QA probes | PASS (defect assertions) | 15 / 15 |

Green tests do not overturn BLOCKER/MAJOR acceptance failures.

## Probes
- `.tmp-sfia-review/qa-probes/probe-d2d2-critical.test.ts`
- `.tmp-sfia-review/qa-probes/vitest.qa-probes.config.mjs`
- Outside package; not imported; no real secrets; no live network; no Cursor live; not staged

### Probe output
```

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1/projects/sfia-studio/app

 ✓ ../../../.tmp-sfia-review/qa-probes/probe-d2d2-critical.test.ts (15 tests) 5ms

 Test Files  1 passed (1)
      Tests  15 passed (15)
   Start at  07:37:54
   Duration  240ms (transform 41ms, setup 0ms, collect 48ms, tests 5ms, environment 0ms, prepare 35ms)


```

## Scans (excerpt)
```
## write_methods (19)
projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts:18:out.push(...listTsFiles(full));
projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts:20:out.push(full);
projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts:43:if (forbidden.test(line)) hits.push(`${file}: ${line}`);
projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts:59:hits.push(`${file}: ${line}`);
projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts:76:hits.push(`${path.relative(APP_ROOT, file)}: ${line}`);
projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts:135:if (forbidden.test(line)) hits.push(`${file}: ${line}`);
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink.ts:26:this.events.push(event);
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/providerConformance.ts:21:issues.push({ code: "LANE_MISMATCH", message: `expected lane ${expectedLane}` });
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/providerConformance.ts:24:issues.push({ code: "CAPABILITY_ID", message: "capabilityId required" });
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/providerConformance.ts:27:issues.push({ code: "AVAILABLE", message: "available must be boolean" });
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/providerConformance.ts:30:issues.push({ code: "VERIFIED", message: "verified must be boolean" });
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/providerConformance.ts:33:issues.push({
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/providerConformance.ts:39:issues.push({ code: "GIT_NOT_READONLY", message: "Git capability must be readOnly" });
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/providerConformance.ts:54:if (!v.ok) issues.push({ code: "RESULT_INVALID", message: v.failure.userMessage });
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/providerConformance.ts:61:issues.push({ code: "WRITE_SURFACE", message: "Git write method must not exist" });
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/providerConformance.ts:73:if (!v.ok) issues.push({ code: "RESULT_INVALID", message: v.failure.userMessage });
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/providerConformance.ts:75:issues.push({ code: "TRANSPORT_UNDISCLOSED", message: "transport must be disclosed" });
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/providerConformance.ts:85:issues.push({ code: "LIVE_CURSOR", message: "live Cursor forbidden in D2-D2" });
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/providerConformance.ts:97:if (!v.ok) issues.push({ code: "RESULT_INVALID", message: v.failure.userMessage });

## live_network (0)


## fetch_calls (0)


## verified_true (4)
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/fakeAiExecutionAdapter.ts:17:verified: true,
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts:26:verified: true,
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/git/fakeGitReadAdapter.ts:18:verified: true,
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/git/platformGitReadAdapter.ts:29:verified: true,

## timeout_5000 (2)
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts:37:const timeoutMs = request.timeoutMs ?? this.opts?.defaultTimeoutMs ?? 5_000;
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/git/platformGitReadAdapter.ts:40:const timeoutMs = request.timeoutMs ?? this.opts?.defaultTimeoutMs ?? 5_000;

## materialize (5)
projects/sfia-studio/app/__tests__/oa/execution-run/adapter.secrets.opaque.test.ts:20:const value = secrets.materializeForServerOnly?.("TEST_SECRET");
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/envSecretSourceAdapter.ts:19:materializeForServerOnly(secretId: string): string | undefined {
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter.ts:8:* materializeForServerOnly returns a placeholder that must never enter events/evidence.
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter.ts:23:materializeForServerOnly(secretId: string): string | undefined {
projects/sfia-studio/app/lib/oa/execution-run/ports/secretSourcePort.ts:25:materializeForServerOnly?(secretId: string): string | undefined;

## redacted_echo (2)
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/fakeAiExecutionAdapter.ts:44:redactedSummary: `[FAKE/NON-LIVE] ai-complete#${this.calls} echo=${(last?.content ?? "").slice(0, 64)}`,
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts:80:redactedSummary: `[AI-B] provider=${this.provider.providerId} text=${raw.text.slice(0, 120)}`,

## sdk_openai (0)


## harness_import (0)


```

## Claims
| Claim | Status |
|---|---|
| Package integrity hash match | Demonstrated |
| D2D2-09 tracking / Cursor UNVERIFIED / gate not consumed | Demonstrated |
| No Git write methods on GitReadPort | Demonstrated (port surface) |
| No project commit/push during QA | Demonstrated |
| Redaction of AI summaries | Contradicted |
| SecretSource non-serializable | Contradicted (BLOCKER) |
| Git allowlist on D2-D wrapper | Not demonstrated |
| Branch/HEAD anchor enforcement | Contradicted |
| Cancellation proven | Not demonstrated |
| Nested event redaction | Contradicted |
| Sandbox secure / production-ready / RUN READY | Forbidden |

## Reserves OPEN NOT LIFTED
R-QA-REV-01; R-QA-REV-02; R-QA-D2C-01; CURSOR PRODUCT CAPABILITIES UNVERIFIED; memory process-local only;
plus F-QA-D2D2-01…11 OPEN (require GO Corrections).

## Git Review Index
- base/main: c38b6ca97894ff55ad6a4e7d1195274260232f40
- branch: delivery/sfia-studio-v3-1-d2-d2-read-only-adapters
- HEAD before/after: c38b6ca… / c38b6ca…
- package 32/32; hash identical before/after
- project files modified by QA: none
- staged: none; project commits: none
- findings: 1 BLOCKER, 8 MAJOR, 2 MINOR
- review pack: full
- next decision candidate: GO CORRECTIONS SFIA STUDIO V3.1-D2-D2

## Review pack content coverage
- project files created/modified by QA: N/A
- finding evidence excerpts complete: yes
- reproduction commands included: yes
- acceptance matrix complete: yes
- useful evidence included: yes
- synthesis only: no
- review pack verdict: complete

## Confirmations
no project modification; no staged; no project commit/push; no live provider; no Cursor live; no Git write; no D2-C; no D2-D3

## Verdict QA (unique)
D2-D2 QA BLOCKED —
BLOCKING CORRECTIONS REQUIRED

Rationale: confirmed BLOCKER F-QA-D2D2-01 plus multiple MAJOR acceptance failures.

## Next Morris decision (candidate)
GO CORRECTIONS SFIA STUDIO V3.1-D2-D2

## Instruction ChatGPT
Consult remote sfia/review-handoff → sfia-review-handoff/latest-chatgpt-review.md before answering Morris.
