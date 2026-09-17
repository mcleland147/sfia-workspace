/**
 * GCEC Cursor full-capability executor parity — deterministic CAP/AUTH matrix.
 * FakeProcessRunner only. ZERO MUTATING REAL. No credential-bridge wiring.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  assertStudioCursorRealOffForTests,
  buildMutatingCursorConfinementEnv,
  CURSOR_FORCED_SHELL_EGRESS_ALLOW_DOMAINS_KEY,
  CURSOR_FORCED_SHELL_EGRESS_KEY,
  CURSOR_FORCED_SHELL_EGRESS_NETWORK_DEFAULT_KEY,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_PR_CREATE_ACTION,
  M4_BOUNDED_REMOTE_PUSH_ACTION,
  M4_BOUNDED_RO_ACTION,
  M4_REAL_GATEWAY_ADAPTER_ID,
  NodeCursorProcessRunner,
  REDACTED_SECRET_MARKER,
  redactExactSecrets,
  REMOTE_GIT_GITHUB_HTTPS_CREDENTIAL_HELPER_KEY,
  REMOTE_GIT_GITHUB_HTTPS_CREDENTIAL_HELPER_VALUE,
  resolveMutatingConfinementEffectClass,
  SFIA_STUDIO_CURSOR_REAL_FLAG,
  StudioCursorRealLaunchGateway,
} from "@/lib/oa/execution-attempt";
import path from "node:path";
import { FakeProcessRunner } from "./support/fakeProcessRunner";
import {
  FakeRealExecutionWorkspacePort,
  FakeSpawnPrimitive,
} from "./support/fakeSpawnAndGit";
import { M4_TEST_BASE_HEAD_SHA } from "./support/m4Fixtures";

const PARENT = M4_TEST_BASE_HEAD_SHA;
const PATH = "docs/functional-design.md";
const MSG = "docs: add task manager functional design";
const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622";

function baseEnv(
  overrides: Record<string, string | undefined> = {},
): NodeJS.ProcessEnv {
  return {
    NODE_ENV: "test",
    PATH: "/usr/bin:/bin",
    HOME: "/tmp/test-home-fcp",
    CURSOR_API_KEY: "TEST_CURSOR_API_KEY_PRESERVE",
    [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
    ...overrides,
  };
}

function baseRequest(
  overrides: Record<string, unknown> = {},
): Parameters<StudioCursorRealLaunchGateway["launch"]>[0] {
  return {
    attemptId: "xat:fcp",
    executionContractId: "xct:fcp",
    executionContractVersion: 1,
    semanticFingerprint: "fp:fcp",
    adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
    correlationId: "cor:fcp",
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

function roRequest(
  overrides: Record<string, unknown> = {},
): Parameters<StudioCursorRealLaunchGateway["launch"]>[0] {
  return baseRequest({
    action: M4_BOUNDED_RO_ACTION,
    selectedAgentRef: "agt:m4.cursor.bounded_readonly",
    authorizedEffects: [],
    ...overrides,
  });
}

function gateway(env: NodeJS.ProcessEnv = baseEnv()) {
  const runner = new FakeProcessRunner();
  const gw = new StudioCursorRealLaunchGateway({
    processRunner: runner,
    workspacePort: new FakeRealExecutionWorkspacePort({
      resumePath: "/tmp/fake-exec-root/wt-prior-fcp",
      workspacePath: "/tmp/fake-exec-root/wt-fresh-fcp",
    }),
    env,
    resolveCursorBin: () => "/tmp/fake-cursor-bin",
  });
  return { gw, runner, env };
}

function expectFullCapabilityArgv(
  argv: readonly string[],
  opts?: { modeAsk?: boolean },
) {
  expect(argv[0]).toBe("agent");
  expect(argv).toContain("--print");
  expect(argv).toContain("--workspace");
  expect(argv).toContain("--trust");
  const sandIdx = argv.indexOf("--sandbox");
  expect(sandIdx).toBeGreaterThan(-1);
  expect(argv[sandIdx + 1]).toBe("disabled");
  expect(argv).toContain("--force");
  if (opts?.modeAsk) {
    expect(argv).toContain("--mode");
    expect(argv[argv.indexOf("--mode") + 1]).toBe("ask");
  } else {
    expect(argv).not.toContain("--mode");
  }
}

function expectNoCursorForcedInjection(env: NodeJS.ProcessEnv) {
  expect(env[CURSOR_FORCED_SHELL_EGRESS_KEY]).toBeUndefined();
  expect(env[CURSOR_FORCED_SHELL_EGRESS_ALLOW_DOMAINS_KEY]).toBeUndefined();
  expect(env[CURSOR_FORCED_SHELL_EGRESS_NETWORK_DEFAULT_KEY]).toBeUndefined();
}

describe("GCEC Cursor full-capability executor parity", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
  });
  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  it("CAP-01/02 A docs-write: sandbox disabled + force; no CURSOR_FORCED inject", async () => {
    const hostile = baseEnv({
      [CURSOR_FORCED_SHELL_EGRESS_KEY]: "1",
      [CURSOR_FORCED_SHELL_EGRESS_ALLOW_DOMAINS_KEY]: "api.github.com",
      [CURSOR_FORCED_SHELL_EGRESS_NETWORK_DEFAULT_KEY]: "deny",
    });
    const { gw, runner } = gateway(hostile);
    const result = await gw.launch(docsWriteRequest());
    expect(result.outcome).toBe("ack");
    expectFullCapabilityArgv(runner.calls[0]!.argv);
    expectNoCursorForcedInjection(runner.calls[0]!.env);
  });

  it("docs_write_instruction_embeds_absolute_target_under_workspace", async () => {
    const sealed =
      "projects/sfia-studio/.sandbox/gestion-de-taches.md";
    const allow = "projects/sfia-studio/.sandbox";
    const { gw, runner } = gateway();
    const result = await gw.launch(
      docsWriteRequest({
        docsWriteSpec: {
          repositoryRef: "mcleland147/sfia-workspace",
          targetPath: sealed,
          pathAllowlist: [allow],
          artifactType: "functional_design",
          artifactBrief: "brief",
          contentRequirements: ["x"],
          scopeIn: [allow],
          scopeOut: [],
          expectedOutputs: [sealed],
          validationExpectations: [],
          evidenceRequirements: ["artifact"],
          createOrModify: true,
          noDelete: true,
        },
      }),
    );
    expect(result.outcome).toBe("ack");
    const instruction = runner.calls[0]!.argv.at(-1) as string;
    const absTarget = path.resolve(
      "/tmp/fake-exec-root/wt-fresh-fcp",
      ...sealed.split("/"),
    );
    const absAllow = path.resolve(
      "/tmp/fake-exec-root/wt-fresh-fcp",
      ...allow.split("/"),
    );
    expect(instruction).toContain(`EXACT AUTHORIZED FILE`);
    expect(instruction).toContain(absTarget);
    expect(instruction).toContain(
      `Canonical sealed targetPath (repo-relative, do not reinterpret): ${sealed}`,
    );
    expect(instruction).toContain(absAllow);
    expect(instruction).toContain(
      `Canonical sealed pathAllowlist (repo-relative): ${allow}`,
    );
    expect(instruction).not.toMatch(
      /Créer ou modifier UNIQUEMENT le fichier: projects\/sfia-studio/,
    );
    // Prefix must not be stripped from sealed or absolute forms.
    expect(absTarget).toContain("/projects/sfia-studio/.sandbox/");
  });

  it("docs_write_rejects_root_dot_sandbox_when_sealed_allowlist_is_projects_sfia_studio", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      docsWriteRequest({
        docsWriteSpec: {
          repositoryRef: "mcleland147/sfia-workspace",
          targetPath: ".sandbox/gestion-de-taches.md",
          pathAllowlist: ["projects/sfia-studio/.sandbox"],
          artifactType: "functional_design",
          artifactBrief: "brief",
          contentRequirements: ["x"],
          scopeIn: ["projects/sfia-studio/.sandbox"],
          scopeOut: [],
          expectedOutputs: [".sandbox/gestion-de-taches.md"],
          validationExpectations: [],
          evidenceRequirements: ["artifact"],
          createOrModify: true,
          noDelete: true,
        },
      }),
    );
    expect(result.outcome).toBe("reject");
    if (result.outcome === "reject") {
      expect(result.reason).toBe("target_outside_allowlist");
      expect(result.realProcessInvoked).toBe(false);
    }
    expect(runner.calls).toHaveLength(0);
  });

  it("docs_write_rejects_path_traversal_before_spawn", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      docsWriteRequest({
        docsWriteSpec: {
          repositoryRef: "acme/widget",
          targetPath: "docs/../../etc/passwd",
          pathAllowlist: ["docs/"],
          artifactType: "functional_design",
          artifactBrief: "brief",
          contentRequirements: ["x"],
          scopeIn: ["docs/"],
          scopeOut: [],
          expectedOutputs: ["docs/../../etc/passwd"],
          validationExpectations: [],
          evidenceRequirements: ["artifact"],
          createOrModify: true,
          noDelete: true,
        },
      }),
    );
    expect(result.outcome).toBe("reject");
    if (result.outcome === "reject") {
      expect(result.reason).toBe("target_path_invalid");
      expect(result.realProcessInvoked).toBe(false);
    }
    expect(runner.calls).toHaveLength(0);
  });

  it("CAP-01/02 B local-commit: full-capability argv", async () => {
    const { gw, runner } = gateway();
    expect((await gw.launch(localCommitRequest())).outcome).toBe("ack");
    expectFullCapabilityArgv(runner.calls[0]!.argv);
    expectNoCursorForcedInjection(runner.calls[0]!.env);
  });

  it("CAP-01/02/04 C remote_git: full-capability argv; C helper preserved; no firewall", async () => {
    const { gw, runner } = gateway();
    expect((await gw.launch(remotePushRequest())).outcome).toBe("ack");
    expectFullCapabilityArgv(runner.calls[0]!.argv);
    expectNoCursorForcedInjection(runner.calls[0]!.env);
    expect(runner.calls[0]!.env.GIT_CONFIG_KEY_0).toBe(
      REMOTE_GIT_GITHUB_HTTPS_CREDENTIAL_HELPER_KEY,
    );
    expect(runner.calls[0]!.env.GIT_CONFIG_VALUE_0).toBe(
      REMOTE_GIT_GITHUB_HTTPS_CREDENTIAL_HELPER_VALUE,
    );
    expect(runner.calls[0]!.env.GH_TOKEN).toBeUndefined();
  });

  it("CAP-01/02/05 D PR-create: full-capability argv; ambient egress stripped; no inject", async () => {
    const hostile = baseEnv({
      [CURSOR_FORCED_SHELL_EGRESS_KEY]: "1",
      [CURSOR_FORCED_SHELL_EGRESS_ALLOW_DOMAINS_KEY]: "example.com,github.com,*",
      [CURSOR_FORCED_SHELL_EGRESS_NETWORK_DEFAULT_KEY]: "deny",
      GH_TOKEN: "TEST_AMBIENT_GH_TOKEN",
    });
    const snapshot = { ...hostile };
    const { gw, runner } = gateway(hostile);
    expect((await gw.launch(prCreateRequest())).outcome).toBe("ack");
    expectFullCapabilityArgv(runner.calls[0]!.argv);
    expectNoCursorForcedInjection(runner.calls[0]!.env);
    expect(runner.calls[0]!.env.GH_TOKEN).toBe("TEST_AMBIENT_GH_TOKEN");
    expect(hostile.GH_TOKEN).toBe(snapshot.GH_TOKEN);
    expect(hostile[CURSOR_FORCED_SHELL_EGRESS_ALLOW_DOMAINS_KEY]).toBe(
      snapshot[CURSOR_FORCED_SHELL_EGRESS_ALLOW_DOMAINS_KEY],
    );
  });

  it("CAP-01/02 RO: --mode ask + sandbox disabled + force; no firewall", async () => {
    const hostile = baseEnv({
      [CURSOR_FORCED_SHELL_EGRESS_ALLOW_DOMAINS_KEY]: "api.github.com",
    });
    const { gw, runner } = gateway(hostile);
    expect((await gw.launch(roRequest())).outcome).toBe("ack");
    expectFullCapabilityArgv(runner.calls[0]!.argv, { modeAsk: true });
    expectNoCursorForcedInjection(runner.calls[0]!.env);
  });

  it("AUTH-04 invalid D selectedAgentRef: reject before spawn", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      prCreateRequest({ selectedAgentRef: "agt:evil" }),
    );
    expect(result.outcome).toBe("reject");
    expect(runner.calls).toHaveLength(0);
  });

  it("AUTH-04/05 invalid D authorizedEffects: reject; full capability does not authorize", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      prCreateRequest({ authorizedEffects: ["filesystem.read"] }),
    );
    expect(result.outcome).toBe("reject");
    expect(runner.calls).toHaveLength(0);
  });

  it("AUTH-04 invalid D spec: reject before spawn", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      prCreateRequest({
        gitPrCreateSpec: {
          repositoryRef: "acme/widget",
          headBranch: "gcec/docs",
          baseBranch: "main",
          title: "",
          expectedHeadSha: PARENT,
          expectedBaseBranch: "main",
        },
      }),
    );
    expect(result.outcome).toBe("reject");
    expect(runner.calls).toHaveLength(0);
  });

  it("AUTH-06/07 D instruction keeps gh pr create; process.env untouched", async () => {
    const before = process.env.GH_TOKEN;
    const { gw, runner } = gateway();
    expect((await gw.launch(prCreateRequest())).outcome).toBe("ack");
    const instruction = String(runner.calls[0]!.argv.at(-1));
    expect(instruction).toMatch(/gh pr create/);
    expect(process.env.GH_TOKEN).toBe(before);
  });

  it("CAP-C remote_git confinement effect class unchanged", () => {
    expect(
      resolveMutatingConfinementEffectClass({ isRemotePushProfile: true }),
    ).toBe("remote_git");
    const child = buildMutatingCursorConfinementEnv(baseEnv({ GH_TOKEN: "X" }), {
      effectClass: "remote_git",
    });
    expect(child.GH_TOKEN).toBeUndefined();
    expect(child.GIT_CONFIG_KEY_0).toBe(
      REMOTE_GIT_GITHUB_HTTPS_CREDENTIAL_HELPER_KEY,
    );
  });

  it("redaction helper still available for accidental secret capture", () => {
    const secret = "TEST_LEAK_SECRET_FCP";
    expect(redactExactSecrets(`leak ${secret} end`, [secret])).toBe(
      `leak ${REDACTED_SECRET_MARKER} end`,
    );
  });

  it("NodeCursorProcessRunner still accepts redactExactValues without bridge", async () => {
    const secret = "TEST_RUNNER_SECRET_FCP";
    const fake = new FakeSpawnPrimitive({
      pid: 4242,
      stdoutChunks: [`hello ${secret}\n`],
      exitCode: 0,
    });
    const runner = new NodeCursorProcessRunner({
      spawnPrimitive: fake.asSpawnPrimitive(),
    });
    const invoked = await runner.invoke({
      attemptId: "xat:redact",
      executable: "/tmp/fake",
      cwd: "/tmp",
      argv: ["agent", "--print"],
      timeoutMs: 5000,
      env: baseEnv(),
      redactExactValues: [secret],
    });
    expect(invoked.realProcessInvoked).toBe(true);
    const obs = await runner.awaitCompletion(invoked.processRef!);
    expect(obs?.stdout).toContain(REDACTED_SECRET_MARKER);
    expect(obs?.stdout).not.toContain(secret);
  });

  it("no persistent Cursor config mutation in governed argv/env", async () => {
    const { gw, runner } = gateway();
    await gw.launch(prCreateRequest());
    const argv = runner.calls[0]!.argv.join(" ");
    expect(argv).not.toMatch(/cli-config\.json/);
    expect(JSON.stringify(runner.calls[0]!.env)).not.toMatch(/cli-config\.json/);
  });
});
