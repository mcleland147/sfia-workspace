// @vitest-environment node
/**
 * PJ-REPROOF-04 — ONE generic Cursor executor for canonical Product path.
 *
 * Acceptance:
 * 1. Non-mutating EC → generalist → StartExecution → cursorMissionPrompt
 * 2. Mutating EC → SAME generalist → StartExecution → cursorMissionPrompt
 * 3. Novel future EC → SAME generalist, no registry/capability change
 *
 * NEW TASK = NEW ExecutionContract ONLY.
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { mkdtempSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { CLARIFY_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import {
  assertCursorPromptParityWithInspection,
  projectExecutionContractToCursorPrompt,
  CURSOR_PROMPT_SHAPE_REFERENCE,
} from "@/lib/oa/execution-contract";
import {
  agentMatchViolation,
  assertStudioCursorRealOffForTests,
  bindCursorExecutionReportToAttempt,
  createM4BoundedDocsWriteCursorAgentDescriptor,
  createM4BoundedLocalCommitCursorAgentDescriptor,
  createM4BoundedPrCreateCursorAgentDescriptor,
  createM4BoundedPrMergeCursorAgentDescriptor,
  createM4BoundedRemotePushCursorAgentDescriptor,
  createM4BoundedReadOnlyCursorAgentDescriptor,
  createStudioCursorGeneralistAgentDescriptor,
  createTestExecutionAttemptServices,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
  M4_BOUNDED_DOCS_WRITE_TARGET,
  M4_BOUNDED_LOCAL_COMMIT_ACTION,
  M4_BOUNDED_LOCAL_COMMIT_CAPABILITY,
  M4_BOUNDED_LOCAL_COMMIT_SCOPE,
  M4_BOUNDED_LOCAL_COMMIT_TARGET,
  M4_BOUNDED_PR_CREATE_ACTION,
  M4_BOUNDED_PR_CREATE_CAPABILITY,
  M4_BOUNDED_PR_CREATE_SCOPE,
  M4_BOUNDED_PR_CREATE_TARGET,
  M4_BOUNDED_PR_MERGE_ACTION,
  M4_BOUNDED_PR_MERGE_CAPABILITY,
  M4_BOUNDED_PR_MERGE_SCOPE,
  M4_BOUNDED_PR_MERGE_TARGET,
  M4_BOUNDED_REMOTE_PUSH_ACTION,
  M4_BOUNDED_REMOTE_PUSH_CAPABILITY,
  M4_BOUNDED_REMOTE_PUSH_SCOPE,
  M4_BOUNDED_REMOTE_PUSH_TARGET,
  M4_BOUNDED_RO_ACTION,
  M4_BOUNDED_RO_CAPABILITY,
  M4_BOUNDED_RO_SCOPE,
  M4_BOUNDED_RO_TARGET,
  mintCursorExecutionReportId,
  parseCursorExecutionReport,
  resolveAttemptExecutionProfile,
  SqliteRealLaunchSafetyJournal,
  STUDIO_CURSOR_GENERALIST_AGENT_ID,
  STUDIO_CURSOR_GENERALIST_ACTION,
  STUDIO_CURSOR_GENERALIST_CAPABILITY,
  STUDIO_CURSOR_GENERALIST_SCOPE,
  STUDIO_CURSOR_GENERALIST_TARGET,
  TestExecutionAdapter,
  type CursorExecutionReport,
} from "@/lib/oa/execution-attempt";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";
import {
  MORRIS_ACTOR,
  NOW,
  baseBuildRequest,
  buildStack,
  grantContractConfirmation,
  registerMorris,
  seedAcceptedDecision,
  seedProject,
  seedStandardCycle,
  selectStandardAgent,
} from "../oa/execution-attempt/helpers";
import {
  M4_EVIDENCE,
  M4_TEST_BASE_HEAD_SHA,
  m4ContractInputs,
} from "../oa/execution-attempt/support/m4Fixtures";
import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
  assertStudioCursorRealOffForTests();
});

afterEach(() => {
  cleanupW2TempDirs();
  assertStudioCursorRealOffForTests();
});

async function startWithGeneralist(input: {
  readonly executionContractId: string;
  readonly attemptId: string;
  readonly grantId: string;
  readonly action: string;
  readonly target: string;
  readonly scope: string;
  readonly requiredCapabilities: readonly string[];
  readonly objective: string;
  readonly inputsExtra?: Record<string, unknown>;
  readonly stopConditions?: readonly string[];
  readonly expectedOutputs?: readonly string[];
  readonly evidenceRequirements?: readonly string[];
  readonly constraints?: readonly string[];
}): Promise<{
  readonly launchPort: TestOnlyRealExecutionLaunchPort;
  readonly selectedAgentRef: string;
  readonly prompt: string;
  readonly contractId: string;
  readonly fingerprint: string;
}> {
  const dir = mkdtempSync(path.join(os.tmpdir(), "pj-reproof04-gen-"));
  const journal = new SqliteRealLaunchSafetyJournal({
    databasePath: path.join(dir, "safety.sqlite"),
  });
  const launchPort = new TestOnlyRealExecutionLaunchPort();
  const generalist = createStudioCursorGeneralistAgentDescriptor(NOW);
  const fixtureAdapter = new TestExecutionAdapter();
  const stack = buildStack({ agents: [generalist], adapter: fixtureAdapter });
  stack.attempts = createTestExecutionAttemptServices({
    decisionServices: stack.decisions,
    executionContractServices: stack.execution,
    agents: [generalist],
    adapter: fixtureAdapter,
    realBoundary: { launchPort, safetyJournal: journal },
    fixedNowIso: NOW,
  }) as typeof stack.attempts;

  await seedProject(stack.projects);
  registerMorris(stack.decisions.authority, input.scope, M4_EVIDENCE);
  await seedAcceptedDecision(stack);
  await seedStandardCycle(stack);

  const built = await stack.execution.buildExecutionContract.execute(
    baseBuildRequest({
      cycleInstanceId: "cyc:std-001",
      executionContractId: input.executionContractId,
      idempotencyKey: `idem:${input.executionContractId}`,
      action: input.action,
      target: input.target,
      scope: input.scope,
      requiredCapabilities: [...input.requiredCapabilities],
      authorityEvidenceId: M4_EVIDENCE,
      stopConditions: [
        ...(input.stopConditions ?? [
          "PROTECTED_EFFECT_OUTSIDE_AUTHORIZED_CONTRACT",
        ]),
      ],
      expectedOutputs: [
        ...(input.expectedOutputs ?? ["Résultat de mission Cursor"]),
      ],
      evidenceRequirements: [
        ...(input.evidenceRequirements ?? [
          "evreq:mission-result-for-nora-reevaluation",
        ]),
      ],
      ...(input.constraints && input.constraints.length > 0
        ? { constraints: [...input.constraints] }
        : {}),
      inputs: {
        ...m4ContractInputs(),
        objective: input.objective,
        ...input.inputsExtra,
      },
    }),
  );
  if (!built.ok) {
    throw new Error(
      `build failed: ${built.error.detailCode} ${built.error.internalCauseRef ?? ""} ${built.error.message}`,
    );
  }
  expect(built.ok).toBe(true);

  const validated = await stack.execution.validateExecutionContract.execute({
    executionContractId: built.contract.executionContractId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: M4_EVIDENCE,
  });
  expect(validated.ok).toBe(true);
  if (!validated.ok) throw new Error("validate failed");

  const confirmationId = await grantContractConfirmation(stack, {
    scope: input.scope,
    evidenceId: M4_EVIDENCE,
  });
  const confirmed = await stack.execution.confirmExecutionContract.execute({
    executionContractId: validated.contract.executionContractId,
    confirmationId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: M4_EVIDENCE,
    expectedVersion: validated.contract.version,
  });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error("confirm failed");

  // Prefer automatic generalist selection (no specialized M4 RO request).
  const selected = await selectStandardAgent(stack, {
    attemptId: input.attemptId,
    executionContractId: confirmed.contract.executionContractId,
    authorityEvidenceId: M4_EVIDENCE,
    // omit requestedAgentRef — Select binds generalist via contract_legacy criteria
  });
  expect(selected.ok).toBe(true);
  if (!selected.ok) throw new Error("select failed");
  expect(selected.attempt.selectedAgentRef).toBe(
    STUDIO_CURSOR_GENERALIST_AGENT_ID,
  );

  const granted = await stack.attempts.grantRealExecutionGate!.execute({
    grantId: input.grantId,
    attemptId: input.attemptId,
    actor: MORRIS_ACTOR,
    expiresAt: "2026-07-25T07:00:00.000Z",
    authorityEvidenceId: M4_EVIDENCE,
  });
  expect(granted.ok).toBe(true);

  const started = await stack.attempts.startExecution.execute({
    attemptId: input.attemptId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: M4_EVIDENCE,
  });
  expect(started.ok).toBe(true);
  if (!started.ok) throw new Error("start failed");
  expect(launchPort.calls).toHaveLength(1);
  const prompt = launchPort.calls[0]!.cursorMissionPrompt ?? "";
  expect(prompt.length).toBeGreaterThan(0);
  journal.close();
  return {
    launchPort,
    selectedAgentRef: selected.attempt.selectedAgentRef!,
    prompt,
    contractId: confirmed.contract.executionContractId,
    fingerprint: confirmed.contract.semanticFingerprint ?? "",
  };
}

describe("A — coverage + no Pilot HOW", () => {
  it("template axes mapped; clarify prepare without operationKind", async () => {
    expect(CURSOR_PROMPT_SHAPE_REFERENCE).toContain(
      "sfia-cycle-execution-template.md",
    );
    const db = tempProductDbPath("pj-reproof04-gen-prep.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pjgen" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "gen" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) throw new Error("qual");
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) throw new Error("propose");
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: CLARIFY_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) throw new Error("decide");
    const prepared = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      forceLocalAuthority: true,
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(prepared.code);
    expect(prepared.attemptCreated).toBe(false);
    expect(prepared.contract.constraints).toContain(
      "PRODUCT_MISSION_FROM_DURABLE_CONTEXT",
    );
  });
});

describe("Acceptance 1 — non-mutating via generic Cursor executor", () => {
  it("analyse mission → agt:studio.cursor.generalist → StartExecution prompt", async () => {
    const objective =
      "Analyser les faits projet et diagnostiquer les preuves manquantes";
    const r = await startWithGeneralist({
      executionContractId: "xct:pj-reproof04:analyse",
      attemptId: "xat:pj-reproof04:analyse",
      grantId: "gd:pj-reproof04:analyse",
      action: "product:analyse-facts",
      target: "product:current-project",
      scope: "product:mission-read-perimeter",
      requiredCapabilities: ["cap:product-analyse"],
      objective,
      inputsExtra: {
        sourcesToRead: ["product:current-project-facts"],
        diagnosticScopeIn: ["product:current-project-facts"],
        diagnosticScopeOut: ["DURABLE_PROJECT_WRITE", "GIT_PUSH"],
      },
      stopConditions: [
        "PROTECTED_EFFECT_OUTSIDE_AUTHORIZED_CONTRACT",
        "NO_AUTOMATIC_RELAUNCH",
      ],
    });
    expect(r.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
    expect(r.prompt).toContain(objective);
    expect(r.prompt).toContain(r.contractId);
    expect(r.prompt).toContain("xat:pj-reproof04:analyse");
    expect(r.prompt).toContain(r.fingerprint);
    expect(r.prompt).toContain("PROTECTED_EFFECT_OUTSIDE_AUTHORIZED_CONTRACT");
    expect(r.prompt).toContain("Cursor détermine le HOW");
    expect(r.prompt).not.toMatch(/first read, then write, then commit/i);
    expect(r.launchPort.calls[0]!.selectedAgentRef).toBe(
      STUDIO_CURSOR_GENERALIST_AGENT_ID,
    );
    expect(r.launchPort.calls[0]!.baseHeadSha).toBe(M4_TEST_BASE_HEAD_SHA);
  });
});

describe("Acceptance 2 — mutating via SAME generic Cursor executor", () => {
  it("local docs mutation mission → same generalist; no docs_write/commit agent", async () => {
    const objective =
      "Modifier docs/notes.md dans le périmètre et valider le résultat";
    const r = await startWithGeneralist({
      executionContractId: "xct:pj-reproof04:mutate",
      attemptId: "xat:pj-reproof04:mutate",
      grantId: "gd:pj-reproof04:mutate",
      action: "product:local-docs-mutation",
      target: "product:current-project",
      scope: "product:mission-local-mutation",
      requiredCapabilities: ["cap:product-local-mutation"],
      objective,
      inputsExtra: {
        sourcesToRead: ["docs/notes.md"],
        diagnosticScopeIn: ["docs/notes.md", "path:docs/"],
        diagnosticScopeOut: ["GIT_PUSH", "GIT_PR", "GIT_MERGE"],
        filesToModify: ["docs/notes.md"],
      },
      constraints: [
        "SCOPE_OUT:GIT_PUSH",
        "SCOPE_OUT:GIT_PR",
        "SCOPE_OUT:GIT_MERGE",
      ],
      stopConditions: [
        "PROTECTED_EFFECT_OUTSIDE_AUTHORIZED_CONTRACT",
        "NO_REMOTE_GIT",
      ],
      expectedOutputs: ["docs/notes.md mis à jour"],
    });
    expect(r.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
    expect(r.selectedAgentRef).not.toContain("docs_write");
    expect(r.selectedAgentRef).not.toContain("local_commit");
    expect(r.selectedAgentRef).not.toContain("bounded_readonly");
    expect(r.prompt).toContain(objective);
    expect(r.prompt).toContain("docs/notes.md");
    expect(r.prompt).toMatch(/GIT_PUSH|push/i);
    expect(r.prompt).toContain("Cursor détermine le HOW");
    expect(r.launchPort.calls[0]!.selectedAgentRef).toBe(
      STUDIO_CURSOR_GENERALIST_AGENT_ID,
    );
    expect(r.launchPort.calls[0]!.action).toBe("product:local-docs-mutation");
  });
});

describe("Acceptance 3 — novel future task = new EC only", () => {
  it("arbitrary unknown objective launches via same generalist without registry change", async () => {
    const objective =
      "Inventaire des réserves LPS jamais vu par le runtime — mission ad hoc 2026-Q4";
    const r = await startWithGeneralist({
      executionContractId: "xct:pj-reproof04:novel-future",
      attemptId: "xat:pj-reproof04:novel-future",
      grantId: "gd:pj-reproof04:novel-future",
      action: "product:novel-lps-inventory",
      target: "product:current-project",
      scope: "product:novel-mission-2026q4",
      requiredCapabilities: ["cap:product-novel-never-registered"],
      objective,
      inputsExtra: {
        sourcesToRead: ["product:lps"],
        diagnosticScopeIn: ["product:lps", "product:reservations"],
        diagnosticScopeOut: ["GIT_MERGE", "doctrine-promotion"],
      },
    });
    expect(r.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
    expect(r.prompt).toContain(objective);
    expect(r.prompt).toContain("xct:pj-reproof04:novel-future");
    // Same shapeReference / executor — no new operationKind or agent type.
    const projection = projectExecutionContractToCursorPrompt({
      contract: {
        schemaVersion: "oa.execution-contract.0.2.0",
        executionContractId: r.contractId,
        projectId: "prj:demo",
        version: 1,
        status: "confirmed",
        action: "product:novel-lps-inventory",
        target: "product:current-project",
        scope: "product:novel-mission-2026q4",
        requiredAuthority: "N1",
        constraints: [],
        stopConditions: ["PROTECTED_EFFECT_OUTSIDE_AUTHORIZED_CONTRACT"],
        requiredCapabilities: ["cap:product-novel-never-registered"],
        reversibility: "reversible",
        semanticFingerprint: r.fingerprint,
        expectedOutputs: ["Résultat"],
        evidenceRequirements: ["evreq:mission-result-for-nora-reevaluation"],
        inputs: { objective },
      } as unknown as ExecutionContract,
      attemptId: "xat:pj-reproof04:novel-future",
    });
    expect(projection.shapeReference).toBe(CURSOR_PROMPT_SHAPE_REFERENCE);
    expect(
      assertCursorPromptParityWithInspection({ projection }).ok,
    ).toBe(true);
  });
});

describe("E/F — report identity triad", () => {
  it("reportId + attemptId + executionContractId; mismatch fails closed", () => {
    const attemptId = "xat:1";
    const executionContractId = "xct:1";
    const reportId = mintCursorExecutionReportId({
      attemptId,
      executionContractId,
    });
    const good: CursorExecutionReport = {
      schemaVersion: "oa.cursor-execution-report.1",
      reportId,
      attemptId,
      executionContractId,
      repositoryRef: "mcleland147/sfia-workspace",
      baseSha: "a".repeat(40),
      status: "succeeded",
      authorizedEffectsExecuted: [],
    };
    expect(parseCursorExecutionReport(good).ok).toBe(true);
    expect(
      bindCursorExecutionReportToAttempt({
        report: good,
        expectedAttemptId: attemptId,
        expectedExecutionContractId: executionContractId,
      }).ok,
    ).toBe(true);
    expect(parseCursorExecutionReport({ ...good, reportId: "" }).ok).toBe(
      false,
    );
    expect(
      bindCursorExecutionReportToAttempt({
        report: good,
        expectedAttemptId: "xat:other",
        expectedExecutionContractId: executionContractId,
      }).ok,
    ).toBe(false);
  });
});

describe("Critical question", () => {
  it("YES — arbitrary future EC reaches Cursor without new operationKind/capability profile/executor type", () => {
    expect(STUDIO_CURSOR_GENERALIST_AGENT_ID).toBe(
      "agt:studio.cursor.generalist",
    );
  });
});

const DOCS_WRITE_TARGET_PATH = "docs/functional-design.md";

function docsWriteBuildOverrides(ids: {
  readonly executionContractId: string;
  readonly idempotencyKey: string;
}) {
  return {
    cycleInstanceId: "cyc:std-001",
    executionContractId: ids.executionContractId,
    idempotencyKey: ids.idempotencyKey,
    action: M4_BOUNDED_DOCS_WRITE_ACTION,
    target: M4_BOUNDED_DOCS_WRITE_TARGET,
    scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
    requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
    authorityEvidenceId: M4_EVIDENCE,
    evidenceRequirements: ["git:local_commit"],
    expectedOutputs: ["artifact", DOCS_WRITE_TARGET_PATH],
    inputs: {
      ...m4ContractInputs(),
      targetPath: DOCS_WRITE_TARGET_PATH,
      evidenceRequirements: ["artifact", "git:local_commit"],
      commitMessage: "docs: isolation proof",
      expectedOutputs: [DOCS_WRITE_TARGET_PATH],
    },
  };
}

describe("Acceptance 4 — GCEC isolation (generalist must NOT satisfy specialized criteria)", () => {
  const generalist = createStudioCursorGeneralistAgentDescriptor(NOW);
  const specializedProfiles = [
    {
      name: "read_only",
      criteria: {
        requiredCapabilities: [M4_BOUNDED_RO_CAPABILITY],
        action: M4_BOUNDED_RO_ACTION,
        target: M4_BOUNDED_RO_TARGET,
        scope: M4_BOUNDED_RO_SCOPE,
      },
      specialized: createM4BoundedReadOnlyCursorAgentDescriptor(NOW),
    },
    {
      name: "docs_write",
      criteria: {
        requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
        action: M4_BOUNDED_DOCS_WRITE_ACTION,
        target: M4_BOUNDED_DOCS_WRITE_TARGET,
        scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
      },
      specialized: createM4BoundedDocsWriteCursorAgentDescriptor(NOW),
    },
    {
      name: "local_commit",
      criteria: {
        requiredCapabilities: [M4_BOUNDED_LOCAL_COMMIT_CAPABILITY],
        action: M4_BOUNDED_LOCAL_COMMIT_ACTION,
        target: M4_BOUNDED_LOCAL_COMMIT_TARGET,
        scope: M4_BOUNDED_LOCAL_COMMIT_SCOPE,
      },
      specialized: createM4BoundedLocalCommitCursorAgentDescriptor(NOW),
    },
    {
      name: "remote_push",
      criteria: {
        requiredCapabilities: [M4_BOUNDED_REMOTE_PUSH_CAPABILITY],
        action: M4_BOUNDED_REMOTE_PUSH_ACTION,
        target: M4_BOUNDED_REMOTE_PUSH_TARGET,
        scope: M4_BOUNDED_REMOTE_PUSH_SCOPE,
      },
      specialized: createM4BoundedRemotePushCursorAgentDescriptor(NOW),
    },
    {
      name: "pr_create",
      criteria: {
        requiredCapabilities: [M4_BOUNDED_PR_CREATE_CAPABILITY],
        action: M4_BOUNDED_PR_CREATE_ACTION,
        target: M4_BOUNDED_PR_CREATE_TARGET,
        scope: M4_BOUNDED_PR_CREATE_SCOPE,
      },
      specialized: createM4BoundedPrCreateCursorAgentDescriptor(NOW),
    },
    {
      name: "pr_merge",
      criteria: {
        requiredCapabilities: [M4_BOUNDED_PR_MERGE_CAPABILITY],
        action: M4_BOUNDED_PR_MERGE_ACTION,
        target: M4_BOUNDED_PR_MERGE_TARGET,
        scope: M4_BOUNDED_PR_MERGE_SCOPE,
      },
      specialized: createM4BoundedPrMergeCursorAgentDescriptor(NOW),
    },
  ] as const;

  it("agentMatchViolation: generalist fails every progressive GCEC profile; specialized passes", () => {
    for (const profile of specializedProfiles) {
      const criteria = {
        requiredCapabilities: [...profile.criteria.requiredCapabilities],
        action: profile.criteria.action,
        target: profile.criteria.target,
        scope: profile.criteria.scope,
      };
      const genViolation = agentMatchViolation(generalist, criteria);
      expect(genViolation, profile.name).not.toBeNull();
      expect(genViolation?.detailCode).toMatch(
        /AGENT_CAPABILITY_MISMATCH|AGENT_SCOPE_MISMATCH/,
      );
      expect(agentMatchViolation(profile.specialized, criteria)).toBeNull();
    }
  });

  it("Select: specialized candidate wins when present; generalist is not a candidate", async () => {
    const docsWrite = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);
    const stack = buildStack({
      agents: [generalist, docsWrite],
      adapter: new TestExecutionAdapter(),
    });
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority, M4_BOUNDED_DOCS_WRITE_SCOPE, M4_EVIDENCE);
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);

    const built = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest(
        docsWriteBuildOverrides({
          executionContractId: "xct:pj-reproof04:gcec-iso",
          idempotencyKey: "idem:pj-reproof04:gcec-iso",
        }),
      ),
    );
    if (!built.ok) {
      throw new Error(
        `build failed: ${built.error.detailCode} ${built.error.message} ${built.error.internalCauseRef ?? ""}`,
      );
    }
    expect(built.ok).toBe(true);
    const validated = await stack.execution.validateExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(validated.ok).toBe(true);
    if (!validated.ok) return;
    const confirmationId = await grantContractConfirmation(stack, {
      scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
      evidenceId: M4_EVIDENCE,
    });
    const confirmed = await stack.execution.confirmExecutionContract.execute({
      executionContractId: validated.contract.executionContractId,
      confirmationId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      expectedVersion: validated.contract.version,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;

    const profile = resolveAttemptExecutionProfile({
      contract: confirmed.contract,
      attempts: [],
      evidence: [],
    });
    expect(profile.ok).toBe(true);
    if (!profile.ok) return;
    expect(profile.profile.kind).toBe("docs_write");

    const candidates = stack.attempts.registry.findCandidates(
      profile.profile.criteria,
    );
    expect(candidates.map((c) => c.agentId)).toEqual([
      M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
    ]);
    expect(
      candidates.some((c) => c.agentId === STUDIO_CURSOR_GENERALIST_AGENT_ID),
    ).toBe(false);

    const selected = await selectStandardAgent(stack, {
      attemptId: "xat:pj-reproof04:gcec-iso",
      executionContractId: confirmed.contract.executionContractId,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) return;
    expect(selected.attempt.selectedAgentRef).toBe(
      M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
    );
  });
});

describe("Acceptance 5 — GCEC fail-closed (generalist must NOT silently substitute)", () => {
  it("docs_write profile with only generalist registered → AGENT_NOT_FOUND", async () => {
    const generalist = createStudioCursorGeneralistAgentDescriptor(NOW);
    const stack = buildStack({
      agents: [generalist],
      adapter: new TestExecutionAdapter(),
    });
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority, M4_BOUNDED_DOCS_WRITE_SCOPE, M4_EVIDENCE);
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);

    const built = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest(
        docsWriteBuildOverrides({
          executionContractId: "xct:pj-reproof04:gcec-fail",
          idempotencyKey: "idem:pj-reproof04:gcec-fail",
        }),
      ),
    );
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    const validated = await stack.execution.validateExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(validated.ok).toBe(true);
    if (!validated.ok) return;
    const confirmationId = await grantContractConfirmation(stack, {
      scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
      evidenceId: M4_EVIDENCE,
    });
    const confirmed = await stack.execution.confirmExecutionContract.execute({
      executionContractId: validated.contract.executionContractId,
      confirmationId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      expectedVersion: validated.contract.version,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;

    const selected = await selectStandardAgent(stack, {
      attemptId: "xat:pj-reproof04:gcec-fail",
      executionContractId: confirmed.contract.executionContractId,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) return;
    expect(selected.error.detailCode).toMatch(
      /AGENT_NOT_FOUND|AGENT_CAPABILITY_MISMATCH/,
    );
  });
});

describe("Acceptance 6 — hostile requestedAgentRef", () => {
  it("canonical Product: specialized requestedAgentRef must NOT route away from generalist (fail-closed)", async () => {
    const generalist = createStudioCursorGeneralistAgentDescriptor(NOW);
    const docsWrite = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);
    const stack = buildStack({
      agents: [generalist, docsWrite],
      adapter: new TestExecutionAdapter(),
    });
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority, "product:mission-read-perimeter", M4_EVIDENCE);
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);

    const built = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        cycleInstanceId: "cyc:std-001",
        executionContractId: "xct:pj-reproof04:hostile-product",
        idempotencyKey: "idem:pj-reproof04:hostile-product",
        action: "product:analyse-facts",
        target: "product:current-project",
        scope: "product:mission-read-perimeter",
        requiredCapabilities: ["cap:product-analyse"],
        authorityEvidenceId: M4_EVIDENCE,
        inputs: {
          ...m4ContractInputs(),
          objective: "hostile specialized request on Product",
        },
      }),
    );
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    const validated = await stack.execution.validateExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(validated.ok).toBe(true);
    if (!validated.ok) return;
    const confirmationId = await grantContractConfirmation(stack, {
      scope: "product:mission-read-perimeter",
      evidenceId: M4_EVIDENCE,
    });
    const confirmed = await stack.execution.confirmExecutionContract.execute({
      executionContractId: validated.contract.executionContractId,
      confirmationId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      expectedVersion: validated.contract.version,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;

    const profile = resolveAttemptExecutionProfile({
      contract: confirmed.contract,
      attempts: [],
      evidence: [],
    });
    expect(profile.ok).toBe(true);
    if (!profile.ok) return;
    expect(profile.profile.kind).toBe("contract_legacy");
    expect(profile.profile.criteria).toEqual({
      requiredCapabilities: [STUDIO_CURSOR_GENERALIST_CAPABILITY],
      action: STUDIO_CURSOR_GENERALIST_ACTION,
      target: STUDIO_CURSOR_GENERALIST_TARGET,
      scope: STUDIO_CURSOR_GENERALIST_SCOPE,
    });

    const hostile = await selectStandardAgent(stack, {
      attemptId: "xat:pj-reproof04:hostile-product",
      executionContractId: confirmed.contract.executionContractId,
      authorityEvidenceId: M4_EVIDENCE,
      requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
    });
    expect(hostile.ok).toBe(false);
    if (hostile.ok) return;
    expect(hostile.error.detailCode).toMatch(
      /AGENT_NOT_FOUND|AGENT_CAPABILITY_MISMATCH|AGENT_SCOPE_MISMATCH/,
    );

    const honest = await selectStandardAgent(stack, {
      attemptId: "xat:pj-reproof04:hostile-product-ok",
      executionContractId: confirmed.contract.executionContractId,
      authorityEvidenceId: M4_EVIDENCE,
      idempotencyKey: "idem:pj-reproof04:hostile-product-ok",
    });
    expect(honest.ok).toBe(true);
    if (!honest.ok) return;
    expect(honest.attempt.selectedAgentRef).toBe(
      STUDIO_CURSOR_GENERALIST_AGENT_ID,
    );
  });

  it("GCEC: requestedAgentRef=generalist must NOT bypass specialized profile matching", async () => {
    const generalist = createStudioCursorGeneralistAgentDescriptor(NOW);
    const docsWrite = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);
    const stack = buildStack({
      agents: [generalist, docsWrite],
      adapter: new TestExecutionAdapter(),
    });
    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority, M4_BOUNDED_DOCS_WRITE_SCOPE, M4_EVIDENCE);
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);

    const built = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest(
        docsWriteBuildOverrides({
          executionContractId: "xct:pj-reproof04:hostile-gcec",
          idempotencyKey: "idem:pj-reproof04:hostile-gcec",
        }),
      ),
    );
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    const validated = await stack.execution.validateExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(validated.ok).toBe(true);
    if (!validated.ok) return;
    const confirmationId = await grantContractConfirmation(stack, {
      scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
      evidenceId: M4_EVIDENCE,
    });
    const confirmed = await stack.execution.confirmExecutionContract.execute({
      executionContractId: validated.contract.executionContractId,
      confirmationId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      expectedVersion: validated.contract.version,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;

    const hostile = await selectStandardAgent(stack, {
      attemptId: "xat:pj-reproof04:hostile-gcec",
      executionContractId: confirmed.contract.executionContractId,
      authorityEvidenceId: M4_EVIDENCE,
      requestedAgentRef: STUDIO_CURSOR_GENERALIST_AGENT_ID,
    });
    expect(hostile.ok).toBe(false);
    if (hostile.ok) return;
    expect(hostile.error.detailCode).toMatch(
      /AGENT_NOT_FOUND|AGENT_CAPABILITY_MISMATCH|AGENT_SCOPE_MISMATCH/,
    );
  });
});

describe("Proof — global agentMatchViolation bypass removed", () => {
  it("generalist matches ONLY generalist technical criteria, never arbitrary AgentMatchCriteria", () => {
    const generalist = createStudioCursorGeneralistAgentDescriptor(NOW);
    expect(
      agentMatchViolation(generalist, {
        requiredCapabilities: [STUDIO_CURSOR_GENERALIST_CAPABILITY],
        action: STUDIO_CURSOR_GENERALIST_ACTION,
        target: STUDIO_CURSOR_GENERALIST_TARGET,
        scope: STUDIO_CURSOR_GENERALIST_SCOPE,
      }),
    ).toBeNull();
    expect(
      agentMatchViolation(generalist, {
        requiredCapabilities: ["cap:anything"],
        action: "any.action",
        target: "any.target",
        scope: "any.scope",
      }),
    ).not.toBeNull();
    // Source shape: no agentId short-circuit in agentMatchViolation.
    const src = agentMatchViolation.toString();
    expect(src).not.toMatch(/STUDIO_CURSOR_GENERALIST_AGENT_ID/);
    expect(src).not.toMatch(/generalist/);
  });
});
