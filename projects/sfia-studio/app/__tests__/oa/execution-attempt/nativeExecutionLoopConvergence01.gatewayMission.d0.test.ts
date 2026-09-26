/**
 * NATIVE-EXECUTION-LOOP-CONVERGENCE-01 — the gateway no longer discards the
 * projected ExecutionContract mission for specialized Product profiles.
 *
 * Mission = semantic authority (WHAT). Bounded GCEC overlay = technical
 * authority (WHICH effects), emitted last and declared prevailing.
 *
 * FakeProcessRunner only. ZERO MUTATING REAL.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  assertStudioCursorRealOffForTests,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_PR_CREATE_ACTION,
  M4_BOUNDED_REMOTE_PUSH_ACTION,
  M4_BOUNDED_RO_ACTION,
  M4_REAL_GATEWAY_ADAPTER_ID,
  SFIA_STUDIO_CURSOR_REAL_FLAG,
  StudioCursorRealLaunchGateway,
} from "@/lib/oa/execution-attempt";
import { FakeProcessRunner } from "./support/fakeProcessRunner";
import { FakeRealExecutionWorkspacePort } from "./support/fakeSpawnAndGit";
import { M4_TEST_BASE_HEAD_SHA } from "./support/m4Fixtures";

const PARENT = M4_TEST_BASE_HEAD_SHA;
const TARGET = "docs/functional-design.md";
const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622";

/** Realistic EC projection shape — the semantic mission Studio already builds. */
const MISSION_PROMPT = [
  "# Mission Cursor — projection du ExecutionContract Studio",
  "executionContractId: xct:nelc01",
  "## Objectif",
  "Documenter la conception fonctionnelle du gestionnaire de tâches.",
  "## Grounding des sources (lecture durable in-cycle)",
  "- honnêteté du grounding: READ_GROUNDED (recherche ≠ lecture)",
  "## Critères d'acceptation",
  "- acc:01:manual-review Livrable lisible par le Pilote",
].join("\n");

const ENFORCEMENT_HEADER =
  "=== ENFORCEMENT OVERLAY (GCEC) — PRÉVAUT SUR LA MISSION ===";

const ownedTempRoots: string[] = [];

function cleanupOwnedTempRoots(): void {
  while (ownedTempRoots.length) {
    const root = ownedTempRoots.pop();
    if (root) fs.rmSync(root, { recursive: true, force: true });
  }
}

function baseEnv(): NodeJS.ProcessEnv {
  return {
    NODE_ENV: "test",
    PATH: "/usr/bin:/bin",
    HOME: "/tmp/test-home-nelc01",
    [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
  };
}

function gateway() {
  const runner = new FakeProcessRunner();
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-nelc01-"));
  ownedTempRoots.push(tempRoot);
  const workspacePath = path.join(tempRoot, "wt-fresh");
  const resumePath = path.join(tempRoot, "wt-prior");
  fs.mkdirSync(workspacePath, { recursive: true });
  fs.mkdirSync(resumePath, { recursive: true });
  const gw = new StudioCursorRealLaunchGateway({
    processRunner: runner,
    workspacePort: new FakeRealExecutionWorkspacePort({
      resumePath,
      workspacePath,
    }),
    env: baseEnv(),
    resolveCursorBin: () => "/tmp/fake-cursor-bin",
  });
  return { gw, runner, workspacePath };
}

function baseRequest(
  overrides: Record<string, unknown> = {},
): Parameters<StudioCursorRealLaunchGateway["launch"]>[0] {
  return {
    attemptId: "xat:nelc01",
    executionContractId: "xct:nelc01",
    executionContractVersion: 1,
    semanticFingerprint: "fp:nelc01",
    adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
    correlationId: "cor:nelc01",
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
      targetPath: TARGET,
      pathAllowlist: ["docs/"],
      artifactType: "functional_design",
      artifactBrief: "brief",
      contentRequirements: ["x"],
      scopeIn: ["docs/"],
      scopeOut: [],
      expectedOutputs: [TARGET],
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
      priorAttemptId: "xat:prior",
      expectedHeadSha: PARENT,
      expectedVerifiedFiles: [{ path: TARGET, digest: DIGEST }],
    },
    gitCommitSpec: {
      repositoryRef: "acme/widget",
      expectedParentSha: PARENT,
      exactPaths: [TARGET],
      commitMessage: "docs: functional design",
      branchOrRef: "gcec/docs",
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

function instructionOf(runner: FakeProcessRunner): string {
  return String(runner.calls[0]!.argv.at(-1));
}

function expectMissionThenOverlay(instruction: string): void {
  const missionIndex = instruction.indexOf(
    "Documenter la conception fonctionnelle",
  );
  const overlayIndex = instruction.indexOf(ENFORCEMENT_HEADER);
  expect(missionIndex).toBeGreaterThan(-1);
  expect(overlayIndex).toBeGreaterThan(missionIndex);
  expect(instruction).toContain(
    "En cas de conflit avec la mission ci-dessus: l'overlay gagne",
  );
}

describe("NELC-01 gateway — EC mission is not replaced by a competing brief", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
  });
  afterEach(() => {
    cleanupOwnedTempRoots();
    assertStudioCursorRealOffForTests();
  });

  it("docs_write uses cursorMissionPrompt as the semantic mission", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      docsWriteRequest({ cursorMissionPrompt: MISSION_PROMPT }),
    );
    expect(result.outcome).toBe("ack");
    const instruction = instructionOf(runner);
    expect(instruction).toContain("Documenter la conception fonctionnelle");
    expect(instruction).toContain("executionContractId: xct:nelc01");
    expect(instruction).toContain(
      "honnêteté du grounding: READ_GROUNDED (recherche ≠ lecture)",
    );
    expectMissionThenOverlay(instruction);
  });

  it("docs_write enforcement overlay carries no competing WHAT brief", async () => {
    const { gw, runner } = gateway();
    expect(
      (await gw.launch(docsWriteRequest({ cursorMissionPrompt: MISSION_PROMPT })))
        .outcome,
    ).toBe("ack");
    const instruction = instructionOf(runner);
    expect(instruction).toContain("Documenter la conception fonctionnelle");
    expect(instruction).not.toContain("Brief:");
    expect(instruction).not.toContain("Exigences de contenu:");
    expect(instruction).not.toContain("Sorties attendues:");
    expect(instruction).not.toContain("Type d'artifact:");
    expect(instruction).toContain("EXACT AUTHORIZED FILE");
    expect(instruction).toContain("noDelete=true");
  });

  it("docs_write keeps every enforcement overlay line", async () => {
    const { gw, runner, workspacePath } = gateway();
    expect(
      (await gw.launch(docsWriteRequest({ cursorMissionPrompt: MISSION_PROMPT })))
        .outcome,
    ).toBe("ack");
    const instruction = instructionOf(runner);
    expect(instruction).toContain("EXACT AUTHORIZED FILE");
    expect(instruction).toContain(path.resolve(workspacePath, TARGET));
    expect(instruction).toContain(
      `Canonical sealed targetPath (repo-relative, do not reinterpret): ${TARGET}`,
    );
    expect(instruction).toContain("Ne supprimer AUCUN fichier (noDelete=true).");
    expect(instruction).toContain(
      "Ne pas commit, push, PR, merge, ni remote git.",
    );
    expect(instruction).toContain("Ne lancer aucune commande Shell.");
    expect(instruction).toContain("fingerprint=fp:nelc01");
  });

  it("docs_write without a mission prompt keeps the bounded brief alone", async () => {
    const { gw, runner } = gateway();
    expect((await gw.launch(docsWriteRequest())).outcome).toBe("ack");
    const instruction = instructionOf(runner);
    expect(instruction).not.toContain(ENFORCEMENT_HEADER);
    expect(instruction.startsWith("TÂCHE UNIQUE — bounded docs-write")).toBe(
      true,
    );
    expect(instruction).toContain("EXACT AUTHORIZED FILE");
  });

  it("path protections still reject before spawn when a mission is supplied", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      docsWriteRequest({
        cursorMissionPrompt: MISSION_PROMPT,
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

  it("write-mode revalidation still rejects a MODIFY on an absent target", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      docsWriteRequest({
        cursorMissionPrompt: MISSION_PROMPT,
        docsWriteSpec: {
          repositoryRef: "mcleland147/sfia-workspace",
          targetPath: "projects/sfia-studio/.sandbox/absent.md",
          pathAllowlist: ["projects/sfia-studio/.sandbox"],
          artifactType: "functional_design",
          artifactBrief: "brief",
          contentRequirements: ["x"],
          scopeIn: ["projects/sfia-studio/.sandbox"],
          scopeOut: [],
          expectedOutputs: ["projects/sfia-studio/.sandbox/absent.md"],
          validationExpectations: [],
          evidenceRequirements: ["artifact"],
          createOrModify: true,
          noDelete: true,
          artifactWriteMode: "MODIFY",
        },
      }),
    );
    expect(result.outcome).toBe("reject");
    expect(runner.calls).toHaveLength(0);
  });

  it("git commit / push / PR-create keep enforcement while carrying the mission", async () => {
    for (const build of [
      localCommitRequest,
      remotePushRequest,
      prCreateRequest,
    ]) {
      const { gw, runner } = gateway();
      const result = await gw.launch(
        build({ cursorMissionPrompt: MISSION_PROMPT }),
      );
      expect(result.outcome).toBe("ack");
      const instruction = instructionOf(runner);
      expectMissionThenOverlay(instruction);
      expect(instruction).toContain("TÂCHE UNIQUE — bounded");
      expect(instruction).toContain("INTERDIT:");
    }
  });

  it("historical read-only probe stays deterministic (no mission injection)", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      baseRequest({
        action: M4_BOUNDED_RO_ACTION,
        selectedAgentRef: "agt:m4.cursor.bounded_readonly",
        authorizedEffects: [],
        cursorMissionPrompt: MISSION_PROMPT,
      }),
    );
    expect(result.outcome).toBe("ack");
    const instruction = instructionOf(runner);
    expect(instruction).toContain("M4_READ_ONLY_OK");
    expect(instruction).not.toContain(ENFORCEMENT_HEADER);
    expect(instruction).not.toContain("Documenter la conception fonctionnelle");
  });

  it("generalist path still fails closed without a mission prompt", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      baseRequest({
        action: "cursor.mission.execute",
        selectedAgentRef: "agt:studio.cursor.generalist",
        authorizedEffects: [],
      }),
    );
    expect(result.outcome).toBe("ack");
    expect(instructionOf(runner)).toContain(
      "STOP — aucune mission Cursor fournie",
    );
  });
});
