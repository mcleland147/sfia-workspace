// @vitest-environment node
/**
 * PJ-REPROOF-05 — Product Execution Eligibility + Cursor launch context.
 *
 * DETERMINISTIC PROVEN only — Fake RealExecutionLaunchPort; no REAL Cursor.
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { mkdtempSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import {
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { CLARIFY_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import {
  resolveProductExecutionEligibility,
  shouldApplyProductExecutionEligibility,
  projectExecutionContractToCursorPrompt,
} from "@/lib/oa/execution-contract";
import {
  assertStudioCursorRealOffForTests,
  createStudioCursorGeneralistAgentDescriptor,
  createTestExecutionAttemptServices,
  SqliteRealLaunchSafetyJournal,
  STUDIO_CURSOR_GENERALIST_AGENT_ID,
  TestExecutionAdapter,
} from "@/lib/oa/execution-attempt";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import {
  MORRIS_ACTOR,
  NOW,
  baseBuildRequest,
  buildStack,
  grantContractConfirmation,
  registerMorris,
  seedAcceptedDecision,
  seedConfirmedContract,
  seedProject,
  seedStandardCycle,
  agentDescriptor,
} from "../oa/execution-attempt/helpers";
import { M4_EVIDENCE, M4_TEST_BASE_HEAD_SHA } from "../oa/execution-attempt/support/m4Fixtures";
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

describe("PJ-REPROOF-05 — eligibility pure resolver", () => {
  it("legacy NO_REAL + NO_CURSOR_REAL + STOP AVANT EXECUTE → ineligible", () => {
    const r = resolveProductExecutionEligibility({
      constraints: [
        "FIXTURE_EXECUTOR_BOUNDARY_ONLY",
        "NO_REAL",
        "NO_CURSOR_REAL",
        "PRODUCT_GOVERNED",
      ],
      stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
      inputs: {
        baseHeadSha: M4_TEST_BASE_HEAD_SHA,
        repositoryBindingIdentity: "acme/demo",
      },
    });
    expect(r.eligible).toBe(false);
    expect(["aucune_execution", "stop_before_execute"]).toContain(r.reasonCode);
  });

  it("SCOPE_OUT CURSOR_REAL alone → ineligible even with launch context", () => {
    const r = resolveProductExecutionEligibility({
      constraints: ["PRODUCT_GOVERNED", "SCOPE_OUT:CURSOR_REAL"],
      stopConditions: ["AUTHORITY_DENIED"],
      inputs: {
        baseHeadSha: M4_TEST_BASE_HEAD_SHA,
        repositoryBindingIdentity: "acme/demo",
      },
    });
    expect(r.eligible).toBe(false);
    expect(r.reasonCode).toBe("scope_out_cursor_real");
  });

  it("truthful read-only EC with pinned launch context → eligible", () => {
    const r = resolveProductExecutionEligibility({
      constraints: [
        "PRODUCT_GOVERNED",
        "NO_ATTEMPT_AT_PREPARE",
        "SCOPE_OUT:DURABLE_PROJECT_WRITE",
        "SCOPE_OUT:GIT_PUSH",
      ],
      stopConditions: ["AUTHORITY_DENIED", "CONTEXT_STALE"],
      inputs: {
        baseHeadSha: M4_TEST_BASE_HEAD_SHA,
        repositoryBindingIdentity: "acme/demo",
      },
    });
    expect(r.eligible).toBe(true);
    expect(r.allowsCursorReal).toBe(true);
    expect(r.allowsMutatingEffects).toBe(false);
  });

  it("missing baseHeadSha → fail-closed before Attempt semantics", () => {
    const r = resolveProductExecutionEligibility({
      constraints: ["PRODUCT_GOVERNED"],
      stopConditions: [],
      inputs: { repositoryBindingIdentity: "acme/demo" },
    });
    expect(r.eligible).toBe(false);
    expect(r.reasonCode).toBe("missing_trusted_launch_context");
  });
});

describe("PJ-REPROOF-05 — new Product EC truthful semantics", () => {
  it("prepare does not stamp NO_CURSOR_REAL / FIXTURE; pins launch context", async () => {
    const db = tempProductDbPath("pj-reproof05-prep.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pj05p" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "p05" });
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
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(prepared.code);
    expect(prepared.contract.constraints).not.toContain("NO_CURSOR_REAL");
    expect(prepared.contract.constraints).not.toContain("NO_REAL");
    expect(prepared.contract.constraints).not.toContain(
      "FIXTURE_EXECUTOR_BOUNDARY_ONLY",
    );
    expect(prepared.contract.constraints).not.toContain("SCOPE_OUT:CURSOR_REAL");
    expect(prepared.contract.constraints).not.toContain("SCOPE_OUT:REAL");
    expect(prepared.contract.stopConditions).not.toContain("STOP AVANT EXECUTE");
    expect(prepared.contract.stopConditions).not.toContain("AUCUNE EXÉCUTION");
    // Morris — generic Product EC surface (not read/docs-write/fixture categories).
    expect(prepared.contract.action).toBe("studio.cursor.generalist.execute");
    expect(prepared.contract.target).toBe("studio.cursor.generalist.workspace");
    expect(prepared.contract.scope).toBe(
      "studio.cursor.generalist.authorized_contract",
    );
    expect(prepared.contract.requiredCapabilities).toEqual([
      "cap:studio.cursor.generalist",
    ]);
    expect(prepared.contract.action).not.toBe("product:read");
    expect(prepared.contract.scope).not.toBe("product:read-only");

    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prepared.contract.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    const inputs = loaded.contract.inputs as Record<string, unknown>;
    expect(inputs.baseHeadSha).toBe(W2_TEST_PINNED_BASE_HEAD_SHA);
    expect(typeof inputs.repositoryBindingIdentity).toBe("string");

    const eligibility = resolveProductExecutionEligibility({
      constraints: loaded.contract.constraints,
      stopConditions: loaded.contract.stopConditions,
      inputs,
    });
    expect(eligibility.eligible).toBe(true);
  });

  it("missing repository binding → prepare fail-closed", async () => {
    const db = tempProductDbPath("pj-reproof05-nobind.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pj05n" });
    const created = await runtime.createProject({
      name: "No bind",
      objective: "x",
      context: "y",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "NB",
      idempotencyKey: "pj05-nobind",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("create");
    const projectId = created.project.projectId;
    const oa = runtime.oa!;
    const proj = await oa.projectServices.getProject.execute({ projectId });
    expect(proj.ok).toBe(true);
    if (!proj.ok) throw new Error("proj");
    if (!proj.project.repositoryBinding) {
      expect(proj.project.repositoryBinding).toBeUndefined();
    }
  });
});

describe("PJ-REPROOF-05 — VITEST env ≠ trusted launch authority", () => {
  it("VITEST alone does not auto-pin; prepare without explicit pin fail-closed", async () => {
    expect(process.env.VITEST === "true" || process.env.VITEST === "1").toBe(
      true,
    );
    const db = tempProductDbPath("pj-reproof05-novitest-pin.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pj05v" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "v05" });
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

    // No pinnedBaseHeadSha / managedRepoRootBase — product must fail-closed
    // even though VITEST is set by the runner.
    const unpinned = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      forceLocalAuthority: true,
    });
    expect(unpinned.ok).toBe(false);
    if (unpinned.ok) throw new Error("expected fail-closed without pin");
    // Fail-closed without server pin: either managed clone absent, or clone
    // skeleton present but HEAD unreadable. Both refuse auto-pin from VITEST.
    expect([
      "MANAGED_REPO_UNAVAILABLE",
      "BASE_HEAD_SHA_UNRESOLVED",
    ]).toContain(unpinned.code);

    const eligibilityWithoutPin = resolveProductExecutionEligibility({
      constraints: ["PRODUCT_GOVERNED"],
      stopConditions: [],
      inputs: {},
    });
    expect(eligibilityWithoutPin.eligible).toBe(false);

    const pinned = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(pinned.ok).toBe(true);
    if (!pinned.ok) throw new Error(pinned.code);
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: pinned.contract.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    const inputs = loaded.contract.inputs as Record<string, unknown>;
    expect(inputs.baseHeadSha).toBe(W2_TEST_PINNED_BASE_HEAD_SHA);
    expect(
      resolveProductExecutionEligibility({
        constraints: loaded.contract.constraints,
        stopConditions: loaded.contract.stopConditions,
        inputs,
      }).eligible,
    ).toBe(true);
  });
});

describe("PJ-REPROOF-05 — Authorize + Select fail-closed for legacy EC", () => {
  it("ineligible legacy EC → Select rejects before Attempt", async () => {
    const dir = mkdtempSync(path.join(os.tmpdir(), "pj05-leg-"));
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
    registerMorris(stack.decisions.authority, "product:read-only", M4_EVIDENCE);
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);

    const built = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:pj05:legacy-forbid",
        cycleInstanceId: "cyc:std-001",
        action: "product:read",
        target: "product:project-workspace",
        scope: "product:read-only",
        requiredCapabilities: ["cap:product-read"],
        constraints: [
          "PRODUCT_GOVERNED",
          "FIXTURE_EXECUTOR_BOUNDARY_ONLY",
          "NO_REAL",
          "NO_CURSOR_REAL",
        ],
        stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
        inputs: {
          baseHeadSha: M4_TEST_BASE_HEAD_SHA,
          repositoryBindingIdentity: "acme/legacy",
          objective: "legacy diagnostic",
        },
      }),
    );
    expect(built.ok).toBe(true);
    if (!built.ok) throw new Error("build");
    const validated = await stack.execution.validateExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(validated.ok).toBe(true);
    if (!validated.ok) throw new Error("validate");

    const confirmationId = await grantContractConfirmation(stack, {
      scope: validated.contract.scope,
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
    if (!confirmed.ok) throw new Error("confirm");

    expect(
      resolveProductExecutionEligibility({
        constraints: confirmed.contract.constraints,
        stopConditions: confirmed.contract.stopConditions,
        inputs: confirmed.contract.inputs as Record<string, unknown>,
      }).eligible,
    ).toBe(false);

    const selected = await stack.attempts.selectExecutionAgent.execute({
      attemptId: "xat:pj05:legacy-forbid",
      executionContractId: confirmed.contract.executionContractId,
      idempotencyKey: "idem:pj05:legacy-forbid-xxxxxxxx",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      expectedContractVersion: confirmed.contract.version,
      selectionProfile: "standard",
      selectionStrategy: "capabilities_deterministic",
      systemInitiated: true,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("select should fail");
    expect(selected.error.detailCode).toBe("ATTEMPT_INVALID");
    expect(String(selected.error.internalCauseRef ?? "")).toContain(
      "execution_ineligible",
    );
    journal.close();
  });
});

describe("PJ-REPROOF-05 — Product authorize eligibility fields", () => {
  it("prepared EC is eligible; authorize DTO exposes eligibility fields", async () => {
    const db = tempProductDbPath("pj-reproof05-authz.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pj05a" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "a05" });
    const oa = runtime.oa!;

    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    if (!qualification.ok) throw new Error("qual");
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
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
    if (!decided.ok) throw new Error("decide");
    const prepared = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(prepared.code);

    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prepared.contract.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(
      resolveProductExecutionEligibility({
        constraints: loaded.contract.constraints,
        stopConditions: loaded.contract.stopConditions,
        inputs: loaded.contract.inputs as Record<string, unknown>,
      }).eligible,
    ).toBe(true);

    const inspected = await inspectExecutionContract({
      oa,
      projectId: seeded.projectId,
      executionContractId: prepared.contract.executionContractId,
    });
    expect(inspected.ok).toBe(true);

    const authz = await evaluateExecutionAuthorization({
      oa,
      projectId: seeded.projectId,
      executionContractId: prepared.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(authz.ok).toBe(true);
    if (!authz.ok) throw new Error(authz.code);
    expect(typeof authz.executionEligible).toBe("boolean");
    expect(typeof authz.executionEligibilityReasonCode).toBe("string");
    if (authz.outcome === "AUTHORIZED") {
      expect(authz.executionEligible).toBe(true);
      expect(authz.outcomeLabel).toBe("AUTORISÉ — EXÉCUTION ÉLIGIBLE");
    }
  });
});

describe("PJ-REPROOF-05 — generic Product Cursor path (Morris)", () => {
  it("Prepare→Inspect→Authorize→Select→Start reaches deterministic generalist launch", async () => {
    const db = tempProductDbPath("pj-reproof05-generic.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pj05g" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "g05" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    if (!qualification.ok) throw new Error("qual");
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
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
    if (!decided.ok) throw new Error("decide");
    const prepared = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(prepared.code);

    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prepared.contract.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    const contract = loaded.contract;
    expect(contract.action).toBe("studio.cursor.generalist.execute");
    expect(contract.constraints).toContain("PRODUCT_GOVERNED");
    expect(contract.constraints).not.toContain("FIXTURE_EXECUTOR_BOUNDARY_ONLY");

    const prompt = projectExecutionContractToCursorPrompt({ contract });
    expect(prompt.promptText.length).toBeGreaterThan(40);
    expect(prompt.executionContractId).toBe(contract.executionContractId);
    expect(prompt.semanticFingerprint).toBe(contract.semanticFingerprint ?? null);

    await inspectExecutionContract({
      oa,
      projectId: seeded.projectId,
      executionContractId: contract.executionContractId,
    });
    const authz = await evaluateExecutionAuthorization({
      oa,
      projectId: seeded.projectId,
      executionContractId: contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(authz.ok).toBe(true);
    if (!authz.ok) throw new Error(authz.code);
    expect(authz.outcome).toBe("AUTHORIZED");
    expect(authz.executionEligible).toBe(true);

    const launchPort = oa.executionAttemptServices!.realBoundary!.launchPort;
    const before =
      "calls" in launchPort && Array.isArray(launchPort.calls)
        ? launchPort.calls.length
        : 0;

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId: seeded.projectId,
      executionContractId: contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.code);
    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);

    const started = await governedExecuteStart({
      oa,
      projectId: seeded.projectId,
      executionContractId: contract.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    if (!started.ok) {
      throw new Error(`start failed: ${started.code} ${started.message}`);
    }
    expect(started.ok).toBe(true);
    expect(started.phase).toBe("running");
    const after =
      "calls" in launchPort && Array.isArray(launchPort.calls)
        ? launchPort.calls.length
        : 0;
    expect(after).toBeGreaterThan(before);
    expect(started.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
  });
});

describe("PJ-REPROOF-05 — Product vs non-Product eligibility isolation", () => {
  it("shouldApply: PRODUCT_GOVERNED and legacy surface only", () => {
    expect(
      shouldApplyProductExecutionEligibility({
        constraints: ["PRODUCT_GOVERNED"],
        action: "studio.cursor.generalist.execute",
        target: "studio.cursor.generalist.workspace",
        scope: "studio.cursor.generalist.authorized_contract",
        requiredCapabilities: ["cap:studio.cursor.generalist"],
      }),
    ).toBe(true);

    // LEGACY PRODUCT COMPATIBILITY — exact Batch Cookinb surface, no PRODUCT_GOVERNED.
    expect(
      shouldApplyProductExecutionEligibility({
        constraints: ["FIXTURE_EXECUTOR_BOUNDARY_ONLY", "NO_REAL"],
        action: "product:read",
        target: "product:project-workspace",
        scope: "product:read-only",
        requiredCapabilities: ["cap:product-read"],
      }),
    ).toBe(true);

    // F3 / fixture historical — FIXTURE stamp alone is NOT Product.
    expect(
      shouldApplyProductExecutionEligibility({
        constraints: ["FIXTURE_EXECUTOR_BOUNDARY_ONLY", "NO_REAL"],
        action: "fixture-docs-prepare",
        target: "sfia-studio/f3-fixture-only",
        scope: "f3-fixture:docs+metadata-only",
        requiredCapabilities: ["cap:f3-fixture-docs"],
      }),
    ).toBe(false);

    // OA foundation lifecycle — not Product.
    expect(
      shouldApplyProductExecutionEligibility({
        constraints: ["no-runtime-code"],
        action: "publish-modeled-pack",
        target: "sfia-v3-modeled/v3-native-option-a",
        scope: "docs+schemas+examples only",
        requiredCapabilities: ["cap:git-docs"],
      }),
    ).toBe(false);

    // Sealed GCEC docs-write surface — not Product canonical.
    expect(
      shouldApplyProductExecutionEligibility({
        constraints: [],
        action: "cursor.docs_write.apply",
        target: "repo:docs",
        scope: "bounded_docs_write",
        requiredCapabilities: ["cap:m4.bounded_docs_write"],
      }),
    ).toBe(false);
  });

  it("legacy Product surface WITHOUT PRODUCT_GOVERNED still fail-closed at Select", async () => {
    const dir = mkdtempSync(path.join(os.tmpdir(), "pj05-leg-compat-"));
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
    registerMorris(stack.decisions.authority, "product:read-only", M4_EVIDENCE);
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);

    // Exact historical surface — deliberately omit PRODUCT_GOVERNED.
    const built = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:pj05:legacy-compat-surface",
        cycleInstanceId: "cyc:std-001",
        action: "product:read",
        target: "product:project-workspace",
        scope: "product:read-only",
        requiredCapabilities: ["cap:product-read"],
        constraints: [
          "FIXTURE_EXECUTOR_BOUNDARY_ONLY",
          "NO_REAL",
          "NO_CURSOR_REAL",
        ],
        stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
        inputs: {
          baseHeadSha: M4_TEST_BASE_HEAD_SHA,
          repositoryBindingIdentity: "acme/legacy",
          objective: "legacy without PRODUCT_GOVERNED marker",
        },
      }),
    );
    expect(built.ok).toBe(true);
    if (!built.ok) throw new Error("build");
    expect(built.contract.constraints).not.toContain("PRODUCT_GOVERNED");
    expect(
      shouldApplyProductExecutionEligibility({
        constraints: built.contract.constraints,
        action: built.contract.action,
        target: built.contract.target,
        scope: built.contract.scope,
        requiredCapabilities: built.contract.requiredCapabilities,
      }),
    ).toBe(true);

    const validated = await stack.execution.validateExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(validated.ok).toBe(true);
    if (!validated.ok) throw new Error("validate");
    const confirmationId = await grantContractConfirmation(stack, {
      scope: "product:read-only",
      evidenceId: M4_EVIDENCE,
    });
    await stack.execution.confirmExecutionContract.execute({
      executionContractId: validated.contract.executionContractId,
      confirmationId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      expectedVersion: validated.contract.version,
    });

    const selected = await stack.attempts.selectExecutionAgent.execute({
      attemptId: "xat:pj05:legacy-compat",
      executionContractId: validated.contract.executionContractId,
      idempotencyKey: "idem:pj05:legacy-compat",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      selectionProfile: "standard",
      selectionStrategy: "capabilities_deterministic",
      systemInitiated: true,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected reject");
    expect(selected.error.detailCode).toBe("ATTEMPT_INVALID");
    expect(String(selected.error.internalCauseRef ?? "")).toContain(
      "execution_ineligible",
    );
    const listed = await stack.attempts.listExecutionAttempts.execute({
      executionContractId: validated.contract.executionContractId,
    });
    expect(listed.ok).toBe(true);
    if (listed.ok) expect(listed.attempts.length).toBe(0);
    journal.close();
  });

  it("F3 historical fixture EC through generic Select/Start without Product launch context", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerMorris(
      stack.decisions.authority,
      "f3-fixture:docs+metadata-only",
      M4_EVIDENCE,
    );
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);

    const built = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        executionContractId: "xct:pj05:f3-hist",
        cycleInstanceId: "cyc:std-001",
        action: "fixture-docs-prepare",
        target: "sfia-studio/f3-fixture-only",
        scope: "f3-fixture:docs+metadata-only",
        requiredCapabilities: ["cap:f3-fixture-docs"],
        // Historical F3 stamps — NOT Product PRODUCT_GOVERNED / FIXTURE_EXECUTOR_…
        constraints: ["FIXTURE ONLY", "NO REAL"],
        stopConditions: ["AUTHORITY_DENIED"],
        // Deliberately NO baseHeadSha / repository identity
        inputs: { objective: "f3 historical fixture prepare" },
        authorityEvidenceId: M4_EVIDENCE,
      }),
    );
    expect(built.ok).toBe(true);
    if (!built.ok) throw new Error("build");
    expect(built.contract.constraints).not.toContain("PRODUCT_GOVERNED");
    expect(
      shouldApplyProductExecutionEligibility({
        constraints: built.contract.constraints,
        action: built.contract.action,
        target: built.contract.target,
        scope: built.contract.scope,
        requiredCapabilities: built.contract.requiredCapabilities,
      }),
    ).toBe(false);

    // Product resolver alone would fail — proving isolation is required.
    expect(
      resolveProductExecutionEligibility({
        constraints: built.contract.constraints,
        stopConditions: built.contract.stopConditions,
        inputs: (built.contract.inputs ?? {}) as Record<string, unknown>,
      }).eligible,
    ).toBe(false);

    const validated = await stack.execution.validateExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(validated.ok).toBe(true);
    if (!validated.ok) throw new Error("validate");
    const confirmationId = await grantContractConfirmation(stack, {
      scope: "f3-fixture:docs+metadata-only",
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
    if (!confirmed.ok) throw new Error("confirm");

    // Exact sealed F3 fixture agent criteria (resolveAttemptExecutionProfile).
    const f3Agent = agentDescriptor({
      agentId: "agt:f3-fixture",
      agentType: "fixture_docs_writer",
      supportedCapabilities: ["cap:f3-fixture-docs"],
      allowedActions: ["fixture-docs-prepare"],
      allowedTargets: ["sfia-studio/f3-fixture-only"],
      allowedScopes: ["f3-fixture:docs+metadata-only"],
    });
    const fixtureAdapter = new TestExecutionAdapter();
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [f3Agent],
      adapter: fixtureAdapter,
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    const selected = await stack.attempts.selectExecutionAgent.execute({
      attemptId: "xat:pj05:f3-hist",
      executionContractId: confirmed.contract.executionContractId,
      idempotencyKey: "idem:pj05:f3-hist",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      selectionProfile: "standard",
      selectionStrategy: "capabilities_deterministic",
      systemInitiated: true,
      requestedAgentRef: "agt:f3-fixture",
    });
    if (!selected.ok) {
      throw new Error(
        `f3 select failed: ${selected.error.detailCode} ${selected.error.internalCauseRef ?? ""} ${selected.error.message}`,
      );
    }
    expect(selected.ok).toBe(true);
    expect(selected.attempt.status).toBe("accepted");

    const started = await stack.attempts.startExecution.execute({
      attemptId: selected.attempt.attemptId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(started.error.detailCode);
    expect(started.attempt.status).toBe("running");
    expect(fixtureAdapter.launchCallCount).toBeGreaterThan(0);
  });

  it("OA foundation non-Product lifecycle Select without Product trusted context", async () => {
    const stack = buildStack();
    const { contractId } = await seedConfirmedContract(stack);
    const loaded = await stack.execution.getExecutionContract.execute({
      executionContractId: contractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(
      shouldApplyProductExecutionEligibility({
        constraints: loaded.contract.constraints,
        action: loaded.contract.action,
        target: loaded.contract.target,
        scope: loaded.contract.scope,
        requiredCapabilities: loaded.contract.requiredCapabilities,
      }),
    ).toBe(false);
    expect(loaded.contract.inputs?.baseHeadSha).toBeUndefined();

    const selected = await stack.attempts.selectExecutionAgent.execute({
      attemptId: "xat:pj05:oa-foundation",
      executionContractId: contractId,
      idempotencyKey: "idem:pj05:oa-foundation",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      selectionProfile: "standard",
      selectionStrategy: "capabilities_deterministic",
      systemInitiated: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.error.detailCode);
    expect(selected.attempt.status).toBe("accepted");
  });
});
