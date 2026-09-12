# SFIA STUDIO — GCEC — D-GCEC-CONF-02A A+B BOUNDED MUTATING ENV ISOLATION

TIMESTAMP: 2026-09-12T07:35:48Z

## GO MORRIS
D-GCEC-CONF-02A A+B BOUNDED MUTATING ENV ISOLATION GO CONSUMED

## DECISIONS
- D-GCEC-CONF-01: ADOPTED
- D-GCEC-CONF-02: ADOPTED (Option 1 gateway env / Git credential isolation)
- D-GCEC-CONF-02A: ADOPTED (scope A docs-write + B local-commit)
- D-GCEC-EVID-01: ACCEPTED NON-BLOCKING

## CYCLE
8 — Delivery

## TYPE
EVOL

## PROFILE
CRITICAL

## SECURITY TRANSVERSE
ACTIVE

## GIT TRUTH BEFORE
- branch: delivery/sfia-studio-product-proof-qual-to-governed-cycle
- HEAD: 0bdae76b8b5c97559870f82c45fd602d0463d9da
- PARENT: 3966bbf9b800b143711acf1d581b85a33e106e99
- origin/main: a9f6c310a0826d0e5bd6f7264603382a86564db1
- projects/sfia-studio: CLEAN before implementation
- input handoff: 7c45d6f3a310c37d1de6ccf0590318f7de2ddced

## GIT TRUTH AFTER
- HEAD UNCHANGED: 0bdae76b8b5c97559870f82c45fd602d0463d9da
- Product commit: NONE
- Product push: NONE
- Dirty Product candidate: CONF-02A adaptation only

## INPUT HEAD
0bdae76b8b5c97559870f82c45fd602d0463d9da

## INPUT HANDOFF
7c45d6f3a310c37d1de6ccf0590318f7de2ddced

## SOURCES
Method/convergence/v3 framing (read-only) + committed GCEC at 0bdae76b + preflight handoff 7c45d6f3.

## CONVERGENCE PRE-CHECK
Build Doctrine VALIDATED/ACTIVE. Roadmap VALIDATED/ACTIVE LIVING. Product Completion CLOSED. Runtime v3 NON ADOPTED.
R3 reuse gateway; R6 no parallel engine; R15 bounded authority; R19/R21 no REAL claim from deterministic isolation.

## PREVIOUS PREFLIGHT FACTS
Shell YES; native tool deny NO; public GitHub network YES; osxkeychain visible; SSH_AUTH_SOCK visible; GH auth plausible; env inherited process.env; hard confinement bar NOT met.

## THREAT MODEL
Mutating Cursor A or B with Shell may attempt remote mutation. Prompt forbids are NOT confinement. This lot reduces voluntary inheritance of known Git/GitHub/SSH write-auth channels at ProcessRunner child env boundary.

## IMPLEMENTATION DESIGN
Shared helper `buildMutatingCursorConfinementEnv` applied ONLY when gateway resolves mutating GCEC profiles:
- docs-write (Attempt A)
- local-commit (Attempt B)
Existing StudioCursorRealLaunchGateway + NodeCursorProcessRunner reused. Fresh child env object; base env never mutated. No client opt-out.

## ATTEMPT A ENV POLICY
Same shared policy as B via `isMutatingGcecCursorProfile({ isDocsWrite: true })`.

## ATTEMPT B ENV POLICY
Same shared policy via `isMutatingGcecCursorProfile({ isLocalCommitProfile: true })`.

## REMOVED ENV KEY NAMES (NEVER VALUES)
SSH_AUTH_SOCK, SSH_AGENT_PID, GH_TOKEN, GITHUB_TOKEN, GH_ENTERPRISE_TOKEN, GITHUB_ENTERPRISE_TOKEN, GIT_ASKPASS, SSH_ASKPASS, SSH_ASKPASS_REQUIRE, GIT_SSH, GIT_SSH_COMMAND, GIT_CONFIG_PARAMETERS, GIT_CONFIG_COUNT, plus inherited GIT_CONFIG_KEY_n / GIT_CONFIG_VALUE_n.

## SERVER-OWNED GIT CONFIG CONTROLS
GIT_TERMINAL_PROMPT=0
GCM_INTERACTIVE=Never
GIT_CONFIG_NOSYSTEM=1
GIT_CONFIG_SYSTEM=/dev/null
GIT_CONFIG_GLOBAL=/dev/null
SFIA_STUDIO_CURSOR_REAL=1

## HOME/XDG DISPOSITION
UNCHANGED.
Rationale: Cursor CLI may require user-scoped authentication/config; blindly replacing HOME risks Cursor auth separation gap / new runtime architecture. Residual risk remains for live re-preflight.

## CURSOR AUTH SEPARATION
Preserved deterministically: Cursor-specific vars (e.g. CURSOR_API_KEY) are not stripped. Tests assert CURSOR_API_KEY sentinel survives. Git remote write auth channels are stripped.

## PROCESS ENV IMMUTABILITY
PASS — helper copies into new object; tests assert base env snapshot unchanged across A/B launches.

## CLIENT BYPASS
NONE — hostile request fields (skipEnvConfinement / unsanitizedEnv / inheritHostCredentials) ignored; child still sanitized.

## ARCHITECTURE PARALLEL
NONE — no second gateway/engine/wrapper/network subsystem.

## PRODUCT PERSISTENCE
NONE

## REAL
ZERO

## LIVE PREFLIGHT
NOT RUN

## REAL TOOL-CONFINEMENT RESERVE
OPEN — MUST BE RE-PROVEN LIVE (A+B shapes)

## EVIDENCE RESERVE
ACCEPTED NON-BLOCKING / unchanged (D-GCEC-EVID-01)

## FILES MODIFIED
- projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorCliLaunchGateway.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/index.ts

## FILES CREATED
- projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/mutatingCursorConfinementEnv.ts
- projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecMutatingCursorConfinementEnv.d0.test.ts

## FOCUSED TESTS
11 files: 118 passed | 1 skipped
Includes CONF-ENV suite (7), gateway profile (19), AGENT-01, Cont01, SameEcAb, Cr23, REAL harness static (1 skipped), m4RealOff, trust marker.

## FULL VITEST
Test Files 352 passed | 17 skipped (369)
Tests 3784 passed | 137 skipped (3921)

## TYPECHECK
PASS

## LINT
PASS

## BUILD
PASS

## DIFF CHECK
PASS

## PRODUCT HEAD
UNCHANGED 0bdae76b8b5c97559870f82c45fd602d0463d9da

## PRODUCT COMMIT
NONE

## PRODUCT PUSH
NONE

## PROOF REPO
UNCHANGED

## PR
NONE

## MERGE
NONE

## REAL_CONTINUATION_GAP
OPEN

## REAL git.commit
NOT PROVEN

## GCEC-PUSH
NOT READY

## NEXT
ChatGPT Critical Review
→ distinct local commit GO
→ live Security confinement re-preflight A+B
→ only after PREFLIGHT PASS, distinct Morris REAL A→B decision.

## ANTI-CLAIMS
- NOT CONFINEMENT SUFFICIENT
- NOT REMOTE WRITE PROVEN IMPOSSIBLE
- NOT READY FOR REAL
- REAL_CONTINUATION_GAP NOT CLOSED
- REAL git.commit NOT proven
- GCEC-PUSH NOT READY
- END-TO-END REAL NOT claimed
- runtime v3 NOT ADOPTED
- Env sanitization ≠ technical remote-write impossibility under unrestricted Shell

## VERDICT
PASS WITH RESERVE — D-GCEC-CONF-02A A+B BOUNDED MUTATING-CURSOR ENVIRONMENT ISOLATION DETERMINISTICALLY IMPLEMENTED / NO PARALLEL ENGINE / ZERO REAL / REAL TOOL-CONFINEMENT RESERVE REMAINS OPEN PENDING LIVE RE-PREFLIGHT / READY FOR CHATGPT CRITICAL REVIEW

---

# FULL USEFUL DIFFS — MODIFIED FILES

## DIFF: projects_sfia-studio_app_lib_oa_execution-attempt_index.ts.diff
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
index 0c90029a..009cd872 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
@@ -134,6 +134,9 @@ export {
   NODE_CURSOR_STDERR_CAP_BYTES,
   resolveStudioCursorBinPath,
   resolveCursorBinPath,
+  buildMutatingCursorConfinementEnv,
+  isMutatingGcecCursorProfile,
+  MUTATING_CURSOR_STRIPPED_ENV_KEYS,
   type CursorCliLaunchGatewayOptions,
   type StudioCursorRealLaunchGatewayOptions,
   type SpawnPrimitive,
```

## DIFF: projects_sfia-studio_app_lib_oa_execution-attempt_infrastructure_cursorCliLaunchGateway.ts.diff
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorCliLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorCliLaunchGateway.ts
index 249de011..02a13ee4 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorCliLaunchGateway.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorCliLaunchGateway.ts
@@ -12,6 +12,11 @@ export {
   type StudioCursorRealLaunchGatewayOptions as CursorCliLaunchGatewayOptions,
   type StudioCursorRealLaunchGatewayOptions,
 } from "./studioCursorRealLaunchGateway";
+export {
+  buildMutatingCursorConfinementEnv,
+  isMutatingGcecCursorProfile,
+  MUTATING_CURSOR_STRIPPED_ENV_KEYS,
+} from "./mutatingCursorConfinementEnv";
 export {
   NodeCursorProcessRunner,
   NODE_CURSOR_STDOUT_CAP_BYTES,
```

## DIFF: projects_sfia-studio_app_lib_oa_execution-attempt_infrastructure_studioCursorRealLaunchGateway.ts.diff
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
index 49da60f7..72581253 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
@@ -31,6 +31,10 @@ import { M4_BOUNDED_DOCS_WRITE_ACTION } from "./m4BoundedDocsWriteCursorAgent";
 import { M4_BOUNDED_LOCAL_COMMIT_ACTION } from "./m4BoundedLocalCommitCursorAgent";
 import { isBoundedGitCommitOnlySlice } from "../domain/verifyLocalCommitFacts";
 import { buildGitCommitLaunchSpec } from "../domain/gitCommitLaunchSpec";
+import {
+  buildMutatingCursorConfinementEnv,
+  isMutatingGcecCursorProfile,
+} from "./mutatingCursorConfinementEnv";

 function buildBoundedLocalCommitInstruction(input: {
   readonly spec: NonNullable<RealLaunchRequest["gitCommitSpec"]>;
@@ -482,6 +486,22 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
           instruction,
         ];

+    // D-GCEC-CONF-02A: mutating A+B get shared server-owned env confinement.
+    // RO / other profiles keep minimal non-mutating spawn env (no auth strip).
+    // Prompt forbids remain defense-in-depth — NOT the technical authority boundary.
+    // This does NOT prove remote-write impossibility; live re-preflight required.
+    const childEnv = isMutatingGcecCursorProfile({
+      isDocsWrite,
+      isLocalCommitProfile,
+    })
+      ? buildMutatingCursorConfinementEnv(this.env)
+      : {
+          ...this.env,
+          [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
+          GIT_TERMINAL_PROMPT: "0",
+          GCM_INTERACTIVE: "Never",
+        };
+
     try {
       const invoked = await this.runner.invoke({
         attemptId: request.attemptId,
@@ -489,13 +509,7 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
         cwd: workspacePath,
         argv,
         timeoutMs: request.timeoutMs,
-        env: {
-          ...this.env,
-          [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
-          // Defense-in-depth only — not the authority boundary.
-          GIT_TERMINAL_PROMPT: "0",
-          GCM_INTERACTIVE: "Never",
-        },
+        env: childEnv,
       });

       if (!invoked.realProcessInvoked) {
```


# FULL CONTENT — CREATED FILES

## FULL: projects_sfia-studio_app___tests___oa_execution-attempt_gcecMutatingCursorConfinementEnv.d0.test.ts
```typescript
/**
 * D-GCEC-CONF-02A — mutating Cursor env confinement (docs-write A + local-commit B).
 * FakeProcessRunner only. ZERO REAL. Synthetic sentinel env values only.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  assertStudioCursorRealOffForTests,
  buildMutatingCursorConfinementEnv,
  isMutatingGcecCursorProfile,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_LOCAL_COMMIT_ACTION,
  M4_BOUNDED_RO_ACTION,
  M4_REAL_GATEWAY_ADAPTER_ID,
  MUTATING_CURSOR_STRIPPED_ENV_KEYS,
  SFIA_STUDIO_CURSOR_REAL_FLAG,
  StudioCursorRealLaunchGateway,
} from "@/lib/oa/execution-attempt";
import { FakeProcessRunner } from "./support/fakeProcessRunner";
import { FakeRealExecutionWorkspacePort } from "./support/fakeSpawnAndGit";
import { M4_TEST_BASE_HEAD_SHA } from "./support/m4Fixtures";

const PARENT = M4_TEST_BASE_HEAD_SHA;
const PATH = "docs/functional-design.md";
const MSG = "docs: add task manager functional design";
const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622";

/** Synthetic sentinels only — never real host secrets. */
const SENTINELS = {
  SSH_AUTH_SOCK: "TEST_SSH_SOCKET",
  SSH_AGENT_PID: "TEST_SSH_AGENT_PID",
  GH_TOKEN: "TEST_GH_TOKEN",
  GITHUB_TOKEN: "TEST_GITHUB_TOKEN",
  GH_ENTERPRISE_TOKEN: "TEST_GH_ENTERPRISE_TOKEN",
  GITHUB_ENTERPRISE_TOKEN: "TEST_GITHUB_ENTERPRISE_TOKEN",
  GIT_ASKPASS: "TEST_ASKPASS",
  SSH_ASKPASS: "TEST_SSH_ASKPASS",
  SSH_ASKPASS_REQUIRE: "force",
  GIT_SSH: "TEST_GIT_SSH",
  GIT_SSH_COMMAND: "TEST_GIT_SSH_COMMAND",
  GIT_CONFIG_PARAMETERS: "'credential.helper=osxkeychain'",
  GIT_CONFIG_COUNT: "1",
  GIT_CONFIG_KEY_0: "credential.helper",
  GIT_CONFIG_VALUE_0: "osxkeychain",
  // Cursor-specific — must survive for auth separation.
  CURSOR_API_KEY: "TEST_CURSOR_API_KEY_PRESERVE",
  PATH: "/usr/bin:/bin",
  HOME: "/tmp/test-home-conf02a",
} as const;

function hostileBaseEnv(): NodeJS.ProcessEnv {
  return {
    NODE_ENV: "test",
    ...SENTINELS,
    [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
  };
}

function baseRequest(
  overrides: Record<string, unknown> = {},
): Parameters<StudioCursorRealLaunchGateway["launch"]>[0] {
  return {
    attemptId: "xat:conf-env",
    executionContractId: "xct:conf",
    executionContractVersion: 1,
    semanticFingerprint: "fp:conf",
    adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
    correlationId: "cor:conf",
    baseHeadSha: PARENT,
    timeoutMs: 15 * 60 * 1000,
    ...overrides,
  } as Parameters<StudioCursorRealLaunchGateway["launch"]>[0];
}

function docsWriteRequest(
  overrides: Record<string, unknown> = {},
): Parameters<StudioCursorRealLaunchGateway["launch"]>[0] {
  return baseRequest({
    action: M4_BOUNDED_DOCS_WRITE_ACTION,
    selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
    authorizedEffects: ["filesystem.create", "filesystem.modify"],
    docsWriteSpec: {
      repositoryRef: "acme/widget",
      targetPath: PATH,
      pathAllowlist: ["docs/"],
      artifactType: "functional_design",
      artifactBrief: "brief",
      contentRequirements: ["x"],
      scopeIn: ["docs/"],
      scopeOut: [],
      expectedOutputs: [PATH],
      validationExpectations: [],
      evidenceRequirements: ["artifact"],
      createOrModify: true,
      noDelete: true,
    },
    ...overrides,
  });
}

function localCommitRequest(
  overrides: Record<string, unknown> = {},
): Parameters<StudioCursorRealLaunchGateway["launch"]>[0] {
  return baseRequest({
    action: M4_BOUNDED_DOCS_WRITE_ACTION,
    selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
    authorizedEffects: ["git.commit"],
    workspaceContinuation: {
      priorAttemptId: "xat:prior-a",
      expectedHeadSha: PARENT,
      expectedVerifiedFiles: [{ path: PATH, digest: DIGEST }],
    },
    gitCommitSpec: {
      repositoryRef: "acme/widget",
      expectedParentSha: PARENT,
      exactPaths: [PATH],
      commitMessage: MSG,
      branchOrRef: "gcec/docs",
    },
    docsWriteSpec: {
      repositoryRef: "acme/widget",
      targetPath: PATH,
      pathAllowlist: ["docs/"],
      artifactType: "functional_design",
      artifactBrief: "brief",
      contentRequirements: ["x"],
      scopeIn: ["docs/"],
      scopeOut: [],
      expectedOutputs: [PATH],
      validationExpectations: [],
      evidenceRequirements: ["artifact", "git:local_commit"],
      createOrModify: true,
      noDelete: true,
    },
    ...overrides,
  });
}

function assertSanitizedChild(env: NodeJS.ProcessEnv): void {
  for (const key of MUTATING_CURSOR_STRIPPED_ENV_KEYS) {
    expect(env[key], key).toBeUndefined();
  }
  expect(env.GIT_CONFIG_KEY_0).toBeUndefined();
  expect(env.GIT_CONFIG_VALUE_0).toBeUndefined();
  expect(env.GIT_TERMINAL_PROMPT).toBe("0");
  expect(env.GCM_INTERACTIVE).toBe("Never");
  expect(env.GIT_CONFIG_NOSYSTEM).toBe("1");
  expect(env.GIT_CONFIG_SYSTEM).toBe("/dev/null");
  expect(env.GIT_CONFIG_GLOBAL).toBe("/dev/null");
  expect(env[SFIA_STUDIO_CURSOR_REAL_FLAG]).toBe("1");
  // Cursor auth preserved; HOME not blindly replaced.
  expect(env.CURSOR_API_KEY).toBe("TEST_CURSOR_API_KEY_PRESERVE");
  expect(env.HOME).toBe("/tmp/test-home-conf02a");
}

describe("D-GCEC-CONF-02A mutating Cursor confinement env", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
  });
  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  it("CONF-ENV helper: stripped keys + Git config neutralization + immutability", () => {
    const base = hostileBaseEnv();
    const snapshot = { ...base };
    const child = buildMutatingCursorConfinementEnv(base);
    assertSanitizedChild(child);
    expect(base).toEqual(snapshot);
    expect(isMutatingGcecCursorProfile({ isDocsWrite: true, isLocalCommitProfile: false })).toBe(
      true,
    );
    expect(isMutatingGcecCursorProfile({ isDocsWrite: false, isLocalCommitProfile: true })).toBe(
      true,
    );
    expect(isMutatingGcecCursorProfile({ isDocsWrite: false, isLocalCommitProfile: false })).toBe(
      false,
    );
  });

  function gateway(baseEnv: NodeJS.ProcessEnv) {
    const workspace = new FakeRealExecutionWorkspacePort({
      resumePath: "/tmp/fake-exec-root/wt-prior-conf",
      workspacePath: "/tmp/fake-exec-root/wt-fresh-conf",
    });
    const runner = new FakeProcessRunner();
    const gw = new StudioCursorRealLaunchGateway({
      processRunner: runner,
      workspacePort: workspace,
      env: baseEnv,
      resolveCursorBin: () => "/tmp/fake-cursor-bin",
    });
    return { gw, runner, workspace, baseEnv };
  }

  it("CONF-ENV-01/03/05/06/07/08/09/10 Attempt A docs-write sanitized", async () => {
    const base = hostileBaseEnv();
    const baseSnap = { ...base };
    const { gw, runner } = gateway(base);
    const r = await gw.launch(docsWriteRequest());
    expect(r.outcome).toBe("ack");
    expect(runner.calls).toHaveLength(1);
    assertSanitizedChild(runner.calls[0]!.env);
    expect(base).toEqual(baseSnap);
  });

  it("CONF-ENV-02/04/11/12 Attempt B local-commit same shared policy", async () => {
    const base = hostileBaseEnv();
    const baseSnap = { ...base };
    const { gw, runner } = gateway(base);
    const a = await gw.launch(docsWriteRequest({ attemptId: "xat:conf-a" }));
    expect(a.outcome).toBe("ack");
    const b = await gw.launch(localCommitRequest({ attemptId: "xat:conf-b" }));
    expect(b.outcome).toBe("ack");
    expect(runner.calls).toHaveLength(2);
    assertSanitizedChild(runner.calls[0]!.env);
    assertSanitizedChild(runner.calls[1]!.env);
    // Same server-owned policy markers.
    expect(runner.calls[0]!.env.GIT_CONFIG_GLOBAL).toBe(
      runner.calls[1]!.env.GIT_CONFIG_GLOBAL,
    );
    expect(runner.calls[0]!.env.SSH_AUTH_SOCK).toBeUndefined();
    expect(runner.calls[1]!.env.SSH_AUTH_SOCK).toBeUndefined();
    expect(base).toEqual(baseSnap);
  });

  it("CONF-SCOPE-01/02 mutating profiles get policy; CONF-SCOPE-03 RO does not strip auth", async () => {
    const base = hostileBaseEnv();
    const { gw, runner } = gateway(base);
    await gw.launch(docsWriteRequest({ attemptId: "xat:scope-a" }));
    await gw.launch(localCommitRequest({ attemptId: "xat:scope-b" }));
    await gw.launch(
      baseRequest({
        attemptId: "xat:scope-ro",
        action: M4_BOUNDED_RO_ACTION,
        selectedAgentRef: "agt:m4.cursor.bounded_read_only",
        authorizedEffects: [],
      }),
    );
    expect(runner.calls).toHaveLength(3);
    assertSanitizedChild(runner.calls[0]!.env);
    assertSanitizedChild(runner.calls[1]!.env);
    // RO inherits hostile sentinels (not converted to mutating confinement).
    expect(runner.calls[2]!.env.SSH_AUTH_SOCK).toBe("TEST_SSH_SOCKET");
    expect(runner.calls[2]!.env.GH_TOKEN).toBe("TEST_GH_TOKEN");
    expect(runner.calls[2]!.env.GIT_CONFIG_NOSYSTEM).toBeUndefined();
  });

  it("CONF-SCOPE-04 no client unsanitized bypass field", async () => {
    const base = hostileBaseEnv();
    const { gw, runner } = gateway(base);
    const r = await gw.launch(
      docsWriteRequest({
        // Hostile client fields must not disable confinement.
        skipEnvConfinement: true,
        unsanitizedEnv: true,
        inheritHostCredentials: true,
      } as Record<string, unknown>),
    );
    expect(r.outcome).toBe("ack");
    assertSanitizedChild(runner.calls[0]!.env);
  });

  it("CONF-SCOPE-05/06 profile mismatch / non-commit-only still fail before launch", async () => {
    const base = hostileBaseEnv();
    const { gw, runner } = gateway(base);
    const mismatch = await gw.launch(
      localCommitRequest({
        selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
      }),
    );
    expect(mismatch.outcome).toBe("reject");
    expect(runner.calls).toHaveLength(0);

    const pushSlice = await gw.launch(
      localCommitRequest({
        authorizedEffects: ["git.push"],
      }),
    );
    expect(pushSlice.outcome).toBe("reject");
    expect(runner.calls).toHaveLength(0);
  });

  it("CONF secret-safety: stripped sentinel values never appear in child env values", async () => {
    const base = hostileBaseEnv();
    const child = buildMutatingCursorConfinementEnv(base);
    const joined = Object.values(child).join("\u0000");
    expect(joined).not.toContain("TEST_SSH_SOCKET");
    expect(joined).not.toContain("TEST_GH_TOKEN");
    expect(joined).not.toContain("TEST_ASKPASS");
    expect(joined).not.toContain("TEST_GIT_SSH_COMMAND");
  });
});
```

## FULL: projects_sfia-studio_app_lib_oa_execution-attempt_infrastructure_mutatingCursorConfinementEnv.ts
```typescript
/**
 * D-GCEC-CONF-02A — server-owned child env for mutating GCEC Cursor profiles
 * (bounded docs-write Attempt A + bounded local-commit Attempt B).
 *
 * Proves only: Product gateway does not voluntarily inherit known host
 * Git/GitHub/SSH write-auth channels for A+B.
 * Does NOT prove remote-write impossibility (Shell may still discover host tools).
 * Live re-preflight remains required before any REAL claim.
 *
 * HOME / XDG left unchanged — Cursor CLI may need user-scoped auth; residual risk
 * is documented for the Security re-preflight.
 */
import { SFIA_STUDIO_CURSOR_REAL_FLAG } from "../domain/realLaunchSafety";

/** Exact auth / askpass / SSH override keys stripped from mutating child env. */
export const MUTATING_CURSOR_STRIPPED_ENV_KEYS = [
  "SSH_AUTH_SOCK",
  "SSH_AGENT_PID",
  "GH_TOKEN",
  "GITHUB_TOKEN",
  "GH_ENTERPRISE_TOKEN",
  "GITHUB_ENTERPRISE_TOKEN",
  "GIT_ASKPASS",
  "SSH_ASKPASS",
  "SSH_ASKPASS_REQUIRE",
  "GIT_SSH",
  "GIT_SSH_COMMAND",
  "GIT_CONFIG_PARAMETERS",
  "GIT_CONFIG_COUNT",
] as const;

const STRIPPED = new Set<string>(MUTATING_CURSOR_STRIPPED_ENV_KEYS);

function isInheritedGitConfigInjectionKey(key: string): boolean {
  return (
    key === "GIT_CONFIG_PARAMETERS" ||
    key === "GIT_CONFIG_COUNT" ||
    /^GIT_CONFIG_KEY_\d+$/.test(key) ||
    /^GIT_CONFIG_VALUE_\d+$/.test(key)
  );
}

/**
 * Build a fresh child ProcessEnv for mutating Cursor launches.
 * Does not mutate `baseEnv`. Caller cannot opt out.
 */
export function buildMutatingCursorConfinementEnv(
  baseEnv: NodeJS.ProcessEnv,
): NodeJS.ProcessEnv {
  const child: Record<string, string | undefined> = {};
  for (const [key, value] of Object.entries(baseEnv)) {
    if (value === undefined) continue;
    if (STRIPPED.has(key)) continue;
    if (isInheritedGitConfigInjectionKey(key)) continue;
    child[key] = value;
  }

  child[SFIA_STUDIO_CURSOR_REAL_FLAG] = "1";
  child.GIT_TERMINAL_PROMPT = "0";
  child.GCM_INTERACTIVE = "Never";
  // Neutralize host system/global Git config for the child (local Git support).
  child.GIT_CONFIG_NOSYSTEM = "1";
  child.GIT_CONFIG_SYSTEM = "/dev/null";
  child.GIT_CONFIG_GLOBAL = "/dev/null";

  return child as NodeJS.ProcessEnv;
}

export function isMutatingGcecCursorProfile(input: {
  readonly isDocsWrite: boolean;
  readonly isLocalCommitProfile: boolean;
}): boolean {
  return input.isDocsWrite === true || input.isLocalCommitProfile === true;
}
```
