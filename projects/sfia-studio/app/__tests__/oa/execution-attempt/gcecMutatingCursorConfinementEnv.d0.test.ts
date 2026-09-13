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
  M4_BOUNDED_PR_CREATE_ACTION,
  M4_BOUNDED_REMOTE_PUSH_ACTION,
  M4_BOUNDED_RO_ACTION,
  M4_REAL_GATEWAY_ADAPTER_ID,
  MUTATING_CURSOR_STRIPPED_ENV_KEYS,
  resolveMutatingConfinementEffectClass,
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

  it("CONF secret-safety: stripped sentinel values never appear in child env values", () => {
    const base = hostileBaseEnv();
    const child = buildMutatingCursorConfinementEnv(base);
    const joined = Object.values(child).join("\u0000");
    expect(joined).not.toContain("TEST_SSH_SOCKET");
    expect(joined).not.toContain("TEST_GH_TOKEN");
    expect(joined).not.toContain("TEST_ASKPASS");
    expect(joined).not.toContain("TEST_GIT_SSH_COMMAND");
  });

  it("CR-02 remote_git preserves SSH/askpass; still strips GH tokens + GIT_CONFIG", () => {
    const base = hostileBaseEnv();
    expect(resolveMutatingConfinementEffectClass({ isRemotePushProfile: true })).toBe(
      "remote_git",
    );
    const child = buildMutatingCursorConfinementEnv(base, {
      effectClass: "remote_git",
    });
    expect(child.SSH_AUTH_SOCK).toBe("TEST_SSH_SOCKET");
    expect(child.SSH_AGENT_PID).toBe("TEST_SSH_AGENT_PID");
    expect(child.GIT_ASKPASS).toBe("TEST_ASKPASS");
    expect(child.SSH_ASKPASS).toBe("TEST_SSH_ASKPASS");
    expect(child.GH_TOKEN).toBeUndefined();
    expect(child.GITHUB_TOKEN).toBeUndefined();
    expect(child.GIT_CONFIG_PARAMETERS).toBeUndefined();
    expect(child.GIT_CONFIG_KEY_0).toBeUndefined();
    expect(child.GIT_CONFIG_GLOBAL).toBe("/dev/null");
  });

  it("CR-02 remote_github preserves GH tokens; still strips SSH + GIT_CONFIG", () => {
    const base = hostileBaseEnv();
    expect(
      resolveMutatingConfinementEffectClass({ isPrCreateProfile: true }),
    ).toBe("remote_github");
    expect(
      resolveMutatingConfinementEffectClass({ isPrMergeProfile: true }),
    ).toBe("remote_github");
    const child = buildMutatingCursorConfinementEnv(base, {
      effectClass: "remote_github",
    });
    expect(child.GH_TOKEN).toBe("TEST_GH_TOKEN");
    expect(child.GITHUB_TOKEN).toBe("TEST_GITHUB_TOKEN");
    expect(child.GH_ENTERPRISE_TOKEN).toBe("TEST_GH_ENTERPRISE_TOKEN");
    expect(child.GITHUB_ENTERPRISE_TOKEN).toBe("TEST_GITHUB_ENTERPRISE_TOKEN");
    expect(child.SSH_AUTH_SOCK).toBeUndefined();
    expect(child.GIT_ASKPASS).toBeUndefined();
    expect(child.GIT_CONFIG_PARAMETERS).toBeUndefined();
    expect(child.GIT_CONFIG_GLOBAL).toBe("/dev/null");
  });

  function remotePushRequest(
    overrides: Record<string, unknown> = {},
  ): Parameters<StudioCursorRealLaunchGateway["launch"]>[0] {
    return baseRequest({
      action: M4_BOUNDED_REMOTE_PUSH_ACTION,
      selectedAgentRef: "agt:m4.cursor.bounded_remote_push",
      authorizedEffects: ["git.push"],
      gitPushSpec: {
        repositoryRef: "acme/widget",
        remoteName: "origin",
        branchName: "gcec/docs",
        expectedCommitSha: PARENT,
        force: false,
        delete: false,
        noTags: true,
      },
      ...overrides,
    });
  }

  function prCreateRequest(
    overrides: Record<string, unknown> = {},
  ): Parameters<StudioCursorRealLaunchGateway["launch"]>[0] {
    return baseRequest({
      action: M4_BOUNDED_PR_CREATE_ACTION,
      selectedAgentRef: "agt:m4.cursor.bounded_pr_create",
      authorizedEffects: ["github.pr.create"],
      gitPrCreateSpec: {
        repositoryRef: "acme/widget",
        headBranch: "gcec/docs",
        baseBranch: "main",
        title: "t",
        expectedHeadSha: PARENT,
        expectedBaseBranch: "main",
      },
      ...overrides,
    });
  }

  it("CR-02 gateway C/D apply effect-sensitive confinement (not full local strip)", async () => {
    const base = hostileBaseEnv();
    const { gw, runner } = gateway(base);
    await gw.launch(remotePushRequest({ attemptId: "xat:conf-c" }));
    await gw.launch(prCreateRequest({ attemptId: "xat:conf-d" }));
    expect(runner.calls).toHaveLength(2);
    expect(runner.calls[0]!.env.SSH_AUTH_SOCK).toBe("TEST_SSH_SOCKET");
    expect(runner.calls[0]!.env.GH_TOKEN).toBeUndefined();
    expect(runner.calls[1]!.env.GH_TOKEN).toBe("TEST_GH_TOKEN");
    expect(runner.calls[1]!.env.SSH_AUTH_SOCK).toBeUndefined();
    expect(
      isMutatingGcecCursorProfile({
        isDocsWrite: false,
        isLocalCommitProfile: false,
        isRemotePushProfile: true,
      }),
    ).toBe(true);
  });
});
