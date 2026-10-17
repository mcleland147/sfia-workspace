/**
 * P6 — G-D4 Select inspection binding (R1).
 *
 * Proves stamped Generic Select never overwrites an explicit binding half,
 * refuses partial/contradictory pairs, and resolves from durable attestation
 * only when BOTH version and fingerprint are absent.
 *
 * Fake Cursor boundary only — ZERO Cursor REAL / OpenAI LIVE.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import { governedExecuteSelectAgent } from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { solicitGenericExecutionPrepare } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
import { amendExecutionContractWithConstraint } from "@/features/project-assistant/w2/amendExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

const APP = path.resolve(__dirname, "../..");

describe("P6 Select inspection binding (R1)", () => {
  let runtime: RuntimeApplicationService;
  let sessionDbPath: string;
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    sessionDbPath = tempProductDbPath("p6-ibind.sqlite");
    runtime = bootW2Runtime({
      productDbPath: sessionDbPath,
      idPrefix: "ibind",
    });
  });

  afterEach(() => {
    cleanupW2TempDirs();
    if (previousMorris === undefined) {
      delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = previousMorris;
    }
    if (previousDetPin === undefined) {
      delete process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    } else {
      process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = previousDetPin;
    }
  });

  async function seedProject(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `IBIND ${suffix}`,
      objective: "Inspection binding Select",
      context: "det ibind",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `IB${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:ibind-${suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");
    await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    const identity = `acme/ibind-${suffix}`;
    await oa.projectServices.setProjectRepositoryBinding!.execute({
      projectId,
      actor: LOCAL_PILOTE_ACTOR,
      binding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "projects/demo",
      },
    });
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, oa };
  }

  async function prepareInspectAuthorize(suffix: string) {
    const { projectId, oa } = await seedProject(suffix);
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: `Mission binding ${suffix}`,
        expectedOutcome: "Résultat",
        scope: "projects/demo/src",
      },
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!prep.ok) throw new Error(`prep ${prep.code}`);
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    if (!inspected.ok) throw new Error(`inspect ${inspected.message}`);
    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    if (!authorized.ok) throw new Error(`auth ${authorized.code}`);
    return { projectId, oa, prep, inspected, authorized };
  }

  async function countAttempts(
    oa: NonNullable<RuntimeApplicationService["oa"]>,
    projectId: string,
  ): Promise<number> {
    const contracts = await oa.executionContractServices.contracts.listByProject(
      projectId,
    );
    let total = 0;
    for (const c of contracts) {
      total += (
        await oa.executionAttemptServices!.attempts.listByContract(
          c.executionContractId,
        )
      ).length;
    }
    return total;
  }

  it("static — partial binding no longer triggers attestation overwrite of the other half", () => {
    const src = readFileSync(
      path.join(
        APP,
        "features/project-assistant/w2/governedExecuteAuthorizedContract.ts",
      ),
      "utf8",
    );
    expect(src).toMatch(/BINDING_INCOMPLETE/);
    expect(src).toMatch(/resolveStampedSelectInspectionBinding/);
    expect(src).toMatch(/caller_explicit/);
    expect(src).toMatch(/durable_attestation/);
    // Old OR-gate that overwrote both when either half missing must be gone.
    expect(src).not.toMatch(
      /typeof expectedVersion !== "number"[\s\S]*\|\|[\s\S]*!expectedSemanticFingerprint\.trim\(\)/,
    );
  });

  it("I1 — no params + valid durable attestation → Select accepted", async () => {
    const ctx = await prepareInspectAuthorize("i1");
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
  });

  it("I2 — both explicit valid params → Select accepted (no overwrite path)", async () => {
    const ctx = await prepareInspectAuthorize("i2");
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedVersion: ctx.inspected.contractVersion,
      expectedSemanticFingerprint: ctx.inspected.semanticFingerprint,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
  });

  it("I3 — version only → BINDING_INCOMPLETE, no Attempt", async () => {
    const ctx = await prepareInspectAuthorize("i3");
    const before = await countAttempts(ctx.oa, ctx.projectId);
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedVersion: ctx.inspected.contractVersion,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("BINDING_INCOMPLETE");
    expect(await countAttempts(ctx.oa, ctx.projectId)).toBe(before);
  });

  it("I4 — fingerprint only → BINDING_INCOMPLETE, no Attempt", async () => {
    const ctx = await prepareInspectAuthorize("i4");
    const before = await countAttempts(ctx.oa, ctx.projectId);
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedSemanticFingerprint: ctx.inspected.semanticFingerprint,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("BINDING_INCOMPLETE");
    expect(await countAttempts(ctx.oa, ctx.projectId)).toBe(before);
  });

  it("I5 — false version + fingerprint absent → BINDING_INCOMPLETE (no attestation overwrite)", async () => {
    const ctx = await prepareInspectAuthorize("i5");
    const before = await countAttempts(ctx.oa, ctx.projectId);
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedVersion: 999_999,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("BINDING_INCOMPLETE");
    expect(await countAttempts(ctx.oa, ctx.projectId)).toBe(before);
  });

  it("I6 — false fingerprint + version absent → BINDING_INCOMPLETE", async () => {
    const ctx = await prepareInspectAuthorize("i6");
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedSemanticFingerprint: "sha256:deadbeef".padEnd(71, "0"),
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("BINDING_INCOMPLETE");
  });

  it("I7 — contradictory explicit pair → refuse (mismatch), no Attempt", async () => {
    const ctx = await prepareInspectAuthorize("i7");
    const before = await countAttempts(ctx.oa, ctx.projectId);
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedVersion: ctx.inspected.contractVersion,
      expectedSemanticFingerprint: "sha256:deadbeef".padEnd(71, "0"),
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(
      selected.code === "FINGERPRINT_MISMATCH" ||
        selected.code === "VERSION_MISMATCH" ||
        selected.code === "NOT_AUTHORIZED",
    ).toBe(true);
    expect(await countAttempts(ctx.oa, ctx.projectId)).toBe(before);
  });

  it("I8 — attestation absent (no inspect) → INSPECTION_REQUIRED, no Attempt", async () => {
    const { projectId, oa } = await seedProject("i8");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Mission sans inspection",
        expectedOutcome: "n/a",
        scope: "projects/demo/src",
      },
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!prep.ok) throw new Error(prep.message);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(
      selected.code === "INSPECTION_REQUIRED" ||
        selected.code === "EXPECTED_VERSION_REQUIRED" ||
        selected.code === "NOT_AUTHORIZED",
    ).toBe(true);
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  it("I9/I10 — amended contract → reinspection / binding refuse, no Attempt", async () => {
    const ctx = await prepareInspectAuthorize("i10");
    const amended = await amendExecutionContractWithConstraint({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      additionalConstraint: "AMEND_TEST_BINDING_STALE",
      forceLocalAuthority: true,
    });
    expect(amended.ok).toBe(true);
    if (!amended.ok) throw new Error(amended.message);
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: amended.successor.executionContractId,
      forceLocalAuthority: true,
      expectedVersion: ctx.inspected.contractVersion,
      expectedSemanticFingerprint: ctx.inspected.semanticFingerprint,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(await countAttempts(ctx.oa, ctx.projectId)).toBe(0);
  });

  it("I11 — Confirm may bump version; attested binding still Select-valid via I1 path", async () => {
    const { projectId, oa } = await seedProject("i11");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Mission confirm binding",
        expectedOutcome: "n/a",
        scope: "projects/demo/src",
      },
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!prep.ok) throw new Error(prep.message);
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    if (!inspected.ok) throw new Error(inspected.message);
    // Confirm when required (status confirmation_required) then authorize.
    const live = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    if (!live.ok) throw new Error("get");
    if (live.contract.status === "confirmation_required") {
      const confirmed = await confirmExecutionContractForAuthorization({
        oa,
        projectId,
        executionContractId: prep.executionContractId,
        forceLocalAuthority: true,
      });
      expect(confirmed.ok).toBe(true);
    }
    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    // Authorize binds to inspected version/fp (attested survives Confirm).
    expect(authorized.ok).toBe(true);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
  });

  it("I12/I13 — refused partial binding creates neither Attempt nor HumanDecision", async () => {
    const ctx = await prepareInspectAuthorize("i12");
    const hdBefore = (
      await ctx.oa.decisionServices.decisions.listByProject(ctx.projectId)
    ).length;
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedVersion: ctx.inspected.contractVersion,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("BINDING_INCOMPLETE");
    expect(await countAttempts(ctx.oa, ctx.projectId)).toBe(0);
    expect(
      (await ctx.oa.decisionServices.decisions.listByProject(ctx.projectId))
        .length,
    ).toBe(hdBefore);
  });

  it("I5b — explicit NaN version (with fingerprint) → BINDING_INVALID, not attestation", async () => {
    const ctx = await prepareInspectAuthorize("i5b");
    const before = await countAttempts(ctx.oa, ctx.projectId);
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedVersion: Number.NaN,
      expectedSemanticFingerprint: ctx.inspected.semanticFingerprint,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("BINDING_INVALID");
    expect(await countAttempts(ctx.oa, ctx.projectId)).toBe(before);
  });

  it("I6b — explicit whitespace fingerprint (with version) → BINDING_INVALID", async () => {
    const ctx = await prepareInspectAuthorize("i6b");
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedVersion: ctx.inspected.contractVersion,
      expectedSemanticFingerprint: "   ",
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("BINDING_INVALID");
  });

  it("I8b — malformed fingerprint alone → BINDING_INVALID (not treated as absent)", async () => {
    const ctx = await prepareInspectAuthorize("i8b");
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: ctx.prep.executionContractId,
      forceLocalAuthority: true,
      expectedSemanticFingerprint: "not-a-valid-fingerprint",
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("BINDING_INVALID");
  });
});
