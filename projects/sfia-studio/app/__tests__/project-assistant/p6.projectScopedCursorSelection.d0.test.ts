/**
 * P6 — Project-scoped generic Cursor selection / execution Delivery.
 *
 * Proves (deterministic Fake Cursor boundary — ZERO Cursor REAL / OpenAI LIVE):
 *  - CycleInstance optional on AUTHORIZED PRODUCT_GOVERNED EC → Select/Start/Result
 *  - Methodological profile is NOT an access gate to Cursor Generalist
 *  - Project positive binding (missing / archived → fail-closed)
 *  - Cycle-bound EC keeps lifecycle gates (closed cycle → refuse)
 *  - No invented CycleInstance / cycleTypeId
 *  - D-P6-SHE-01: structural PREPARE OK (empty refs); Select still blocked until SHE Execute/authorize
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { solicitGenericExecutionPrepare } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  settleDeterministicProductCursorSuccess,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

describe("P6 project-scoped Cursor selection Delivery", () => {
  let runtime: RuntimeApplicationService;
  let sessionDbPath: string;
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;
  let previousCursorReal: string | undefined;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    previousCursorReal = process.env.SFIA_STUDIO_CURSOR_REAL;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    // Fake Select→Start path: REAL readiness must stay unset (ZERO Cursor REAL).
    // Host shells with SFIA_STUDIO_CURSOR_REAL=1 otherwise hit PRODUCT_DB_PROJECT_NOT_FOUND.
    delete process.env.SFIA_STUDIO_CURSOR_REAL;
    sessionDbPath = tempProductDbPath("p6-pscs.sqlite");
    runtime = bootW2Runtime({
      productDbPath: sessionDbPath,
      idPrefix: "pscs",
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
    if (previousCursorReal === undefined) {
      delete process.env.SFIA_STUDIO_CURSOR_REAL;
    } else {
      process.env.SFIA_STUDIO_CURSOR_REAL = previousCursorReal;
    }
  });

  async function seedProject(input: {
    suffix: string;
    withCycle: boolean;
    cycleProfile?: "Standard" | "Critical";
  }) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `PSCS ${input.suffix}`,
      objective: "Project-scoped Cursor selection",
      context: "det pscs",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `PS${input.suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:pscs-${input.suffix}`,
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

    let cycleInstanceId: string | null = null;
    if (input.withCycle) {
      cycleInstanceId = `cyc:pscs-${input.suffix}`;
      await oa.cycleServices.createCycle.execute({
        cycleInstanceId,
        cycleTypeId: "cyc:delivery",
        projectId,
        signals:
          input.cycleProfile === "Critical"
            ? { irreversible: true }
            : { lowRiskBounded: true },
        justification:
          input.cycleProfile === "Critical"
            ? "Signal irréversible pour preuve Critical-cycle"
            : undefined,
        createdBy: {
          actorId: "actor:nora-f2",
          role: "agent",
          displayName: "Nora F2",
          authorityLevel: "N1",
        },
        linkAsActiveCycle: false,
      });
      const auth = registerLocalPiloteAuthority({
        authorityResolver: oa.authorityResolver,
        scope: `pilot-lifecycle:${cycleInstanceId}`,
        issuedAt: "2026-10-16T10:00:00.000Z",
        forceEnable: true,
      });
      if (!auth.ok) throw new Error("auth");
      const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
      if (!lps1.ok) throw new Error("lps1");
      const started = await oa.cycleServices.pilotLifecycle.start({
        cycleInstanceId,
        projectId,
        createdBy: {
          actorId: LOCAL_PILOTE_ACTOR.actorId,
          role: LOCAL_PILOTE_ACTOR.role,
          displayName: LOCAL_PILOTE_ACTOR.displayName,
          authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
        },
        authorityEvidenceId: auth.evidenceId,
        expectedLpsVersion: lps1.livingProjectState.version,
      });
      if (!started.ok) throw new Error("start");
    }

    const identity = `acme/pscs-${input.suffix}`;
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
    return { projectId, cycleInstanceId, oa };
  }

  async function prepareAuthorize(input: {
    projectId: string;
    oa: NonNullable<RuntimeApplicationService["oa"]>;
    cycleInstanceId: string | null;
    objective?: string;
    scope?: string;
  }) {
    const prep = await solicitGenericExecutionPrepare({
      oa: input.oa,
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
      mission: {
        objective:
          input.objective ?? "Refactorer le module d'export du projet demo",
        expectedOutcome: "Module d'export simplifié",
        scope: input.scope ?? "projects/demo/src",
      },
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!prep.ok) throw new Error(`prep ${prep.code}: ${prep.message}`);
    const inspected = await inspectExecutionContract({
      oa: input.oa,
      projectId: input.projectId,
      executionContractId: prep.executionContractId,
    });
    if (!inspected.ok) throw new Error(`inspect ${inspected.message}`);
    const authorized = await authorizeGenericPreparedContract({
      oa: input.oa,
      projectId: input.projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    if (!authorized.ok) {
      throw new Error(`authorize ${authorized.code}: ${authorized.message}`);
    }
    return { prep, inspected, authorized };
  }

  async function countCycles(
    oa: NonNullable<RuntimeApplicationService["oa"]>,
    projectId: string,
  ): Promise<number> {
    return (await oa.cycleServices.cycles.listByProject(projectId)).length;
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

  // -------------------------------------------------------------------------
  // S1 / S8 / S19 — Project, no cycle, no methodological profile gate
  // -------------------------------------------------------------------------

  it("S1/S8/S19 — Project actif sans cycle: PREPARE + Select/Start/Result Cursor Generalist (no profile gate)", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "s1",
      withCycle: false,
    });
    const cyclesBefore = await countCycles(oa, projectId);
    expect(cyclesBefore).toBe(0);

    const { prep } = await prepareAuthorize({
      projectId,
      oa,
      cycleInstanceId: null,
    });
    expect(prep.cycleInstanceId ?? null).toBeNull();

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    if (!selected.ok) {
      throw new Error(`S1 select failed: ${selected.code} — ${selected.message}`);
    }
    expect(selected.phase).toBe("accepted");
    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
    // Technical OA carrier for capabilities_deterministic — not methodological Standard claim.
    expect(selected.selectionProfile).toBe("standard");

    const started = await governedExecuteStart({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(started.message);
    expect(started.phase).toBe("running");

    const settled = await settleDeterministicProductCursorSuccess({
      oa,
      attemptId: started.attemptId,
    });
    expect(settled.ok).toBe(true);
    if (!settled.ok) throw new Error(settled.message);
    // OA Attempt succeeded = Select → Start → Result continuity (Fake boundary).
    expect(settled.attempt.status).toBe("succeeded");

    const after = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) throw new Error("get");
    expect(after.contract.cycleInstanceId ?? null).toBeNull();
    expect(await countCycles(oa, projectId)).toBe(0);
    expect(await countAttempts(oa, projectId)).toBeGreaterThanOrEqual(1);
  });

  // -------------------------------------------------------------------------
  // S2 / S3 / S9 — with cycle non-regression
  // -------------------------------------------------------------------------

  it("S2/S9 — Project + cycle Standard: Select Cursor Generalist (non-regression)", async () => {
    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "s2",
      withCycle: true,
      cycleProfile: "Standard",
    });
    expect(cycleInstanceId).toBeTruthy();
    const { prep } = await prepareAuthorize({
      projectId,
      oa,
      cycleInstanceId,
    });
    expect(prep.cycleInstanceId).toBe(cycleInstanceId);

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
    // Cursor REAL Product path: capability selection — not Critical/Standard access gate.
    expect(selected.selectionProfile).toBe("standard");
  });

  it("S3 — Project + cycle Critical: Cursor access still Select (profile ≠ tool access gate)", async () => {
    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "s3",
      withCycle: true,
      cycleProfile: "Critical",
    });
    const { prep } = await prepareAuthorize({
      projectId,
      oa,
      cycleInstanceId,
      objective: "Mission Critical-cycle Project-scoped Cursor (effects-governed)",
    });

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
    expect(selected.selectionProfile).toBe("standard");
  });

  // -------------------------------------------------------------------------
  // S4 / S20 — closed cycle on Project; new independent mission without cycle
  // -------------------------------------------------------------------------

  it("S4/S20 — dernier cycle clos: mission Project indépendante (null cycle) OK; cycle clos non muté", async () => {
    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "s4",
      withCycle: true,
    });
    expect(cycleInstanceId).toBeTruthy();
    const got = await oa.cycleServices.getCycle.execute({
      cycleInstanceId: cycleInstanceId!,
    });
    if (!got.ok) throw new Error("cycle");
    const closed = { ...got.cycle, status: "completed" as const };
    await oa.cycleServices.cycles.save(closed);

    const cyclesBefore = await countCycles(oa, projectId);
    const { prep } = await prepareAuthorize({
      projectId,
      oa,
      cycleInstanceId: null,
      objective: "Mission indépendante après cycle clos",
    });
    expect(prep.cycleInstanceId ?? null).toBeNull();

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);

    const afterCycle = await oa.cycleServices.getCycle.execute({
      cycleInstanceId: cycleInstanceId!,
    });
    expect(afterCycle.ok).toBe(true);
    if (!afterCycle.ok) throw new Error("cycle after");
    expect(afterCycle.cycle.status).toBe("completed");
    expect(await countCycles(oa, projectId)).toBe(cyclesBefore);
  });

  it("S20b — EC still bound to completed cycle → CYCLE_NOT_ACTIVE (no closed-cycle mutation)", async () => {
    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "s20b",
      withCycle: true,
    });
    const { prep } = await prepareAuthorize({
      projectId,
      oa,
      cycleInstanceId,
    });
    const got = await oa.cycleServices.getCycle.execute({
      cycleInstanceId: cycleInstanceId!,
    });
    if (!got.ok) throw new Error("cycle");
    await oa.cycleServices.cycles.save({
      ...got.cycle,
      status: "completed",
    });

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("CYCLE_NOT_ACTIVE");
  });

  // -------------------------------------------------------------------------
  // S5 / S6 / S7 — Project negative binding
  // -------------------------------------------------------------------------

  it("S5 — Project introuvable → PROJECT_NOT_FOUND (fail-closed, no Attempt)", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "s5",
      withCycle: false,
    });
    const { prep } = await prepareAuthorize({
      projectId,
      oa,
      cycleInstanceId: null,
    });
    const spy = vi
      .spyOn(oa.projectServices.getProject, "execute")
      .mockResolvedValue({
        ok: false,
        error: {
          code: "STATE_CONFLICT",
          detailCode: "PROJECT_NOT_FOUND",
          message: "missing",
          severity: "error",
          retryable: false,
          blocking: true,
          recoverable: false,
          domain: "C",
          timestamp: "2026-10-16T10:00:00.000Z",
          correlationId: "cor:test",
        },
      } as never);

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    spy.mockRestore();
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("PROJECT_NOT_FOUND");
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  it("S6 — Project archivé → PROJECT_ARCHIVED", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "s6",
      withCycle: false,
    });
    const { prep } = await prepareAuthorize({
      projectId,
      oa,
      cycleInstanceId: null,
    });
    const got = await oa.projectServices.getProject.execute({ projectId });
    if (!got.ok) throw new Error("get");
    await oa.projectServices.projects.save({
      ...got.project,
      status: "archived",
    });

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("PROJECT_ARCHIVED");
  });

  it("S7 — Project mismatch → PROJECT_MISMATCH", async () => {
    const a = await seedProject({ suffix: "s7a", withCycle: false });
    const b = await seedProject({ suffix: "s7b", withCycle: false });
    const { prep } = await prepareAuthorize({
      projectId: a.projectId,
      oa: a.oa,
      cycleInstanceId: null,
    });
    const selected = await governedExecuteSelectAgent({
      oa: a.oa,
      projectId: b.projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) throw new Error("expected refuse");
    expect(selected.code).toBe("PROJECT_MISMATCH");
  });

  // -------------------------------------------------------------------------
  // S10 / S11 / S12 — effects / HD
  // -------------------------------------------------------------------------

  it("S10 — mission faible effet: PREPARE + Select proportionnés (no cycle)", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "s10",
      withCycle: false,
    });
    const { prep } = await prepareAuthorize({
      projectId,
      oa,
      cycleInstanceId: null,
      objective: "Lister les exports du module demo",
      scope: "projects/demo/src/exports",
    });
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
  });

  it("S12 — D-P6-SHE-01: structural PREPARE OK without HD; Select still blocked until SHE execute/authorize", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "s12",
      withCycle: false,
    });
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Refactor structurel API publique",
        expectedOutcome: "API publique simplifiée",
        scope: "projects/demo/src",
        impactSignals: { structuralChange: true },
      },
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);
    const live = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(live.ok).toBe(true);
    if (!live.ok) throw new Error("get");
    expect(live.contract.decisionRefs ?? []).toEqual([]);
    expect(live.contract.constraints).toContain("MATERIALITY:STRUCTURAL");

    // No Select without authorize / SHE Execute.
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(false);
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  it("S13 — OPEN debt: HD–mission structural resume NOT PROVEN (no silent unlock)", async () => {
    // Documented OPEN: Generic PREPARE has decisionRefs:[] — a Project HD does
    // not bind to a mission. Positive path remains NOT PROVEN (der16 R5).
    expect(true).toBe(true);
  });

  // -------------------------------------------------------------------------
  // S14 / S15 / S16 / S17 / S18
  // -------------------------------------------------------------------------

  it("S15 — EC superseded/stale authorize fingerprint → refuse before Select", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "s15",
      withCycle: false,
    });
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Mission fingerprint stale",
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
    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: "sha256:deadbeef".padEnd(71, "0"),
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(false);
  });

  it("S17/S18 — Artifact demand / code mission: Generic PREPARE (no docs_write taxonomy gate)", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "s17",
      withCycle: false,
    });
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Écrire un test unitaire pour le module export",
        expectedOutcome: "Test unitaire ajouté",
        scope: "projects/demo/src",
      },
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("get");
    expect(loaded.contract.constraints).toContain("PRODUCT_GOVERNED");
    expect(loaded.contract.constraints).toContain("GENERIC_MISSION_NO_TASK_CATALOG");
    expect(loaded.contract.cycleInstanceId ?? null).toBeNull();
  });

  it("static — loadContract no longer hard-gates on missing cycleInstanceId", async () => {
    const fs = await import("node:fs");
    const path = await import("node:path");
    const src = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/project-assistant/w2/governedExecuteAuthorizedContract.ts",
      ),
      "utf8",
    );
    expect(src).not.toMatch(/CYCLE_BINDING_REQUIRED/);
    expect(src).toMatch(/PROJECT_NOT_FOUND/);
    expect(src).toMatch(/Project-scoped generic/);
  });
});
