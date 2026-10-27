/**
 * AKG-M5 L3-S2 Option B — S8 PROJECT-FIRST integrated DET oracle
 * (+ Pass 04: R-S8-01/02; Pass 05: R-S8-03 ABSENT≠REJECTED, R-S8-04 O8 Product path).
 *
 * Product path (ZERO REAL / ZERO LIVE):
 *   Project (no CycleInstance) → Generic PREPARE → SHE → Select/Start Fake Cursor
 *   → governedExecuteRecordResult (GERM + Verification Evidence [+ OBSERVED FS])
 *   → W3-B RB/CE → honest Product Result → W3-C surface / rehydrate.
 *
 * NON-CLAIMS:
 * - PRODUCT_MISSION_FROM_DURABLE_CONTEXT is NOT invented for Generic PREPARE
 * - Product PASS for mutating Generic without applicable Result Semantic
 * - Cursor REAL / OpenAI LIVE / OA-exclusive / fake cycle
 *
 * @vitest-environment node
 */
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  buildIntentAnalysisFromSolicitedMission,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { singleHumanExecutePreparedContract } from "@/features/project-assistant/w2/singleHumanExecutePreparedContract";
import { requiredInspectedFactsForContract } from "@/lib/oa/execution-contract";
import {
  governedExecuteRecordResult,
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import {
  evidenceAdmissibleForW3bExecutionContext,
  materializeW3bProductTerminal,
  resolveW3bEvidenceAdmission,
} from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { projectW3cExecutionReportSurfaceFromDurable } from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { PRODUCT_MISSION_FROM_DURABLE_CONTEXT } from "@/lib/oa/evidence-review/application/missionResultPayload";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import {
  executionReviewVerificationEvidenceIdForAttempt,
  ingestExecutionReviewVerificationEvidence,
} from "@/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence";
import {
  GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE_EXPORT,
  genericMaterializationEvidenceIdForAttempt,
} from "@/features/project-assistant/f3/ingestGenericFilesystemMaterializationArtifactEvidence";
import { missionResultEvidenceIdForAttempt } from "@/features/project-assistant/f3/ingestMissionResultEvidence";
import { loadGenericExecutionReviewMaterial } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  settleDeterministicProductCursorSuccess,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

const NOTES_PATH = "projects/demo/notes/project-notes.md";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function requiredFactsOrThrow(
  contract: Parameters<typeof requiredInspectedFactsForContract>[0],
): readonly string[] {
  const facts = requiredInspectedFactsForContract(contract);
  if (Array.isArray(facts)) return facts;
  throw new Error(
    `inspection disclosure incomplete: ${(facts as { code: string }).code}`,
  );
}

function launchPortOf(oa: {
  executionAttemptServices?: {
    realBoundary?: { launchPort?: unknown };
  } | null;
}): TestOnlyRealExecutionLaunchPort {
  const port = oa.executionAttemptServices?.realBoundary?.launchPort;
  if (!(port instanceof TestOnlyRealExecutionLaunchPort)) {
    throw new Error("TestOnlyRealExecutionLaunchPort required");
  }
  return port;
}

function notesEditAnalysis(): IntentAnalysisDto {
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: "modifier notes projet (S8 Project-first DET)",
    expectedOutcome: "Notes mises à jour; résultat Product honnête",
    scope: NOTES_PATH,
    repositoryMutation: "write",
    impactSignals: { structuralChange: false, architectureImpact: false },
  });
  return {
    ...base,
    executionIntent: {
      intentKind: "other",
      scopeIn: [NOTES_PATH],
      requiredCapabilities: [],
    },
  };
}

function cursorReportStdout(input: {
  attemptId: string;
  executionContractId: string;
  repositoryRef: string;
  baseSha: string;
}): string {
  const body = {
    schemaVersion: "oa.cursor-execution-report.1",
    reportId: `rpt:s8:${input.attemptId}`.slice(0, 128),
    attemptId: input.attemptId,
    executionContractId: input.executionContractId,
    repositoryRef: input.repositoryRef,
    baseSha: input.baseSha,
    status: "succeeded",
    authorizedEffectsExecuted: ["filesystem.modify"],
    workPerformed: [`modified ${NOTES_PATH}`],
    fileEffects: {
      created: [],
      modified: [NOTES_PATH],
      deleted: [],
    },
  };
  return `CURSOR_EXECUTION_REPORT_JSON=${JSON.stringify(body)}`;
}

describe("AKG-M5 L3-S2 S8 — Project-first integrated DET oracle", () => {
  let runtime: RuntimeApplicationService;
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;
  let previousPilot: string | undefined;
  let previousExclusive: string | undefined;
  let refsRoot: string;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    previousExclusive = process.env.SFIA_STUDIO_LOCAL_OA_EXCLUSIVE;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    delete process.env.SFIA_STUDIO_LOCAL_OA_EXCLUSIVE;
    setConversationProviderForTests(null);
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "s8-refs-"));
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("akg-m5-l3s2-s8.sqlite"),
      idPrefix: "l3s2s8",
    });
  });

  afterEach(() => {
    cleanupW2TempDirs();
    try {
      fs.rmSync(refsRoot, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
    restoreEnvVar("SFIA_STUDIO_LOCAL_PILOT_AUTHORITY", previousPilot);
    restoreEnvVar("SFIA_STUDIO_LOCAL_OA_EXCLUSIVE", previousExclusive);
  });

  async function seedProject(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "demo",
      objective: "L3-S2 S8 Project-first DET",
      context: "akg-m5 l3-s2 s8",
      criticality: "STANDARD",
      constraints: ["ZERO REAL", "S8 DET ONLY"],
      shortReference: `S8${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:l3s2-s8-${suffix}`,
    });
    if (!created.ok) {
      throw new Error(`createProject: ${created.error?.message ?? "fail"}`);
    }
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
    const identity = `acme/l3s2-s8-${suffix}`;
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    // Confirm no active CycleInstance (trajectory ≠ cycle).
    const live = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!live.ok) throw new Error("live");
    expect(live.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
    return { projectId, oa };
  }

  it("nominal — Project-only Generic PREPARE → SHE → Evidence bindings → UNCLAIMED → rehydrate", async () => {
    const { projectId, oa } = await seedProject("nom");
    const analysis = notesEditAnalysis();

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(`prepare: ${prep.message}`);
    expect(prep.projectContextOnly).toBe(true);
    expect(prep.cycleInstanceId).toBeNull();

    const live = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(live.ok).toBe(true);
    if (!live.ok) throw new Error("get EC");
    expect(live.contract.cycleInstanceId ?? null).toBeNull();
    expect(live.contract.constraints).not.toContain(
      PRODUCT_MISSION_FROM_DURABLE_CONTEXT,
    );
    expect(live.contract.constraints.some((c) => /docs_write/i.test(c))).toBe(
      false,
    );
    const facts = requiredFactsOrThrow(live.contract);
    const inputs = live.contract.inputs as Record<string, unknown>;
    const repositoryRef = String(inputs.repositoryBindingIdentity ?? "");
    const baseSha = String(inputs.baseHeadSha ?? W2_TEST_PINNED_BASE_HEAD_SHA);
    expect(repositoryRef.length).toBeGreaterThan(0);

    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: live.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(true);
    if (!she.ok) throw new Error(`she: ${she.code}`);
    expect(she.executionAttemptCreated).toBe(false);
    expect(she.authorization.outcome).toBe("AUTHORIZED");

    const port = launchPortOf(oa);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(`select: ${selected.message}`);
    expect(selected.attempt!.selectedAgentRef).toBe(
      STUDIO_CURSOR_GENERALIST_AGENT_ID,
    );
    const attemptId = selected.attempt!.attemptId;

    const started = await governedExecuteStart({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(`start: ${started.message}`);

    setTimeout(() => {
      port.resolveSimulatedCompletion(`proc:sim:${attemptId}`, {
        exitCode: 0,
        timedOut: false,
        stdout: cursorReportStdout({
          attemptId,
          executionContractId: she.executionContractId,
          repositoryRef,
          baseSha,
        }),
        stderr: "",
        durationMs: 5,
        // No worktreeRef → verification UNAVAILABLE (honest); Evidence still stamped.
      });
    }, 15);

    const terminal = await governedExecuteRecordResult({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      attemptId,
      forceLocalAuthority: true,
      awaitIfPending: true,
      missionResultRefsRoot: refsRoot,
    });
    expect(terminal.ok).toBe(true);
    if (!terminal.ok) throw new Error(`record: ${terminal.code}`);
    expect(terminal.attemptStatus).toBe("succeeded");
    expect(terminal.productSuccessSemantics).toBe(false);

    // GERM persisted (Attempt-bound).
    const germ = loadGenericExecutionReviewMaterial({
      refsRoot,
      attemptId,
    });
    expect(germ.ok).toBe(true);

    // Verification Evidence — Project/EC/Attempt bound; no cycle invented.
    const verificationId =
      executionReviewVerificationEvidenceIdForAttempt(attemptId);
    const verification =
      await oa.evidenceReviewServices!.evidenceReader.findById(verificationId);
    expect(verification).toBeTruthy();
    expect(verification!.status).toBe("verified");
    expect(verification!.bindings.projectId).toBe(projectId);
    expect(verification!.bindings.executionContractId).toBe(
      she.executionContractId,
    );
    expect(verification!.bindings.executionAttemptId).toBe(attemptId);
    expect(verification!.bindings.cycleInstanceId).toBeUndefined();

    // Mission Evidence NOT invented (no PRODUCT_MISSION stamp).
    const mission = await oa.evidenceReviewServices!.evidenceReader.findById(
      missionResultEvidenceIdForAttempt(attemptId),
    );
    expect(mission).toBeNull();

    const materialized = await materializeW3bProductTerminal({
      oa,
      projectId,
      attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) throw new Error(`materialize: ${materialized.code}`);
    expect(materialized.product.outcome).toBe("UNCLAIMED");
    expect(materialized.product.claimEvaluationStatus).toBe("not_proven");
    expect(materialized.product.outcome).not.toBe("SUCCESS");
    expect(materialized.product.claimAllowed).toBe(false);

    const rb = await oa.evidenceReviewServices!.reviewBundleReader.findById(
      materialized.product.reviewBundleId!,
    );
    expect(rb).toBeTruthy();
    expect(rb!.cycleInstanceId).toBeUndefined();
    expect(
      rb!.frozenEvidenceSnapshots?.some((s) => s.evidenceId === verificationId),
    ).toBe(true);

    // Durable reload — same identities; no cycle created.
    const liveAfter = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(liveAfter.ok).toBe(true);
    if (liveAfter.ok) {
      expect(liveAfter.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
    }
    const verificationReload =
      await oa.evidenceReviewServices!.evidenceReader.findById(verificationId);
    expect(verificationReload?.bindings.projectId).toBe(projectId);
    expect(verificationReload?.bindings.cycleInstanceId).toBeUndefined();

    // GERM projection / rehydrate honesty (same durable facts).
    const surfaceA = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: NOTES_PATH,
    });
    const surfaceB = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: NOTES_PATH,
    });
    expect(surfaceB).toEqual(surfaceA);
    expect(surfaceA.executionReport).not.toBeNull();
  }, 60_000);

  it("N1 — Project absent → Generic PREPARE refused", async () => {
    const oa = runtime.oa!;
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId: "",
      cycleInstanceId: null,
      analysis: notesEditAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (!prep.ok) {
      expect(prep.code).toMatch(/PROJECT|REQUIRED/i);
    }
  });

  it("N3 — Contract of another Project cannot be SHE'd on this Project", async () => {
    const a = await seedProject("n3a");
    const b = await seedProject("n3b");
    const prep = await solicitGenericExecutionPrepare({
      oa: a.oa,
      projectId: a.projectId,
      cycleInstanceId: null,
      analysis: notesEditAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error("prep");
    const live = await a.oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    if (!live.ok) throw new Error("ec");
    const facts = requiredFactsOrThrow(live.contract);
    const she = await singleHumanExecutePreparedContract({
      oa: b.oa,
      projectId: b.projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: live.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(false);
  });

  it("N14/N15 — Cursor report absent / no Mission semantic → no invented PASS", async () => {
    const { projectId, oa } = await seedProject("n14");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: notesEditAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error("prep");
    const live = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    if (!live.ok) throw new Error("ec");
    const facts = requiredFactsOrThrow(live.contract);
    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: live.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(true);
    if (!she.ok) throw new Error("she");
    const port = launchPortOf(oa);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      forceLocalAuthority: true,
    });
    if (!selected.ok) throw new Error("select");
    const attemptId = selected.attempt!.attemptId;
    await governedExecuteStart({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      attemptId,
      forceLocalAuthority: true,
    });
    setTimeout(() => {
      port.resolveSimulatedCompletion(`proc:sim:${attemptId}`, {
        exitCode: 0,
        timedOut: false,
        stdout: "SIMULATED_NO_CURSOR_REPORT",
        stderr: "",
        durationMs: 1,
      });
    }, 15);
    const terminal = await governedExecuteRecordResult({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      attemptId,
      forceLocalAuthority: true,
      awaitIfPending: true,
      missionResultRefsRoot: refsRoot,
    });
    expect(terminal.ok).toBe(true);
    if (!terminal.ok) return;
    expect(terminal.attemptStatus).toBe("succeeded");
    // Without parseable Cursor report: no GERM finalize / Mission Evidence invent.
    const germ = loadGenericExecutionReviewMaterial({ refsRoot, attemptId });
    expect(germ.ok).toBe(false);
    const mission = await oa.evidenceReviewServices!.evidenceReader.findById(
      missionResultEvidenceIdForAttempt(attemptId),
    );
    expect(mission).toBeNull();
    const materialized = await materializeW3bProductTerminal({
      oa,
      projectId,
      attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.product.outcome).toBe("UNCLAIMED");
    expect(materialized.product.outcome).not.toBe("SUCCESS");
  }, 60_000);
});

describe("AKG-M5 L3-S2 S8 Pass 04 — R-S8-01 Evidence ownership", () => {
  function baseEvidence(overrides: Partial<Evidence> & { evidenceId: string }): Evidence {
    const { evidenceId, bindings, provenance, type, source, sourceKind, status, ...rest } =
      overrides;
    return {
      schemaVersion: "0.2.0-oa",
      evidenceId,
      type: type ?? "attestation",
      source: source ?? "execution attempt xat:a (succeeded)",
      sourceKind: sourceKind ?? "execution_attempt",
      status: status ?? "verified",
      classification: "internal",
      storageMode: "external_payload_ref",
      availability: "available",
      producedAt: "2026-08-23T04:30:00.000Z",
      createdAt: "2026-08-23T04:30:00.000Z",
      version: 2,
      containsSecrets: false,
      bindings: bindings ?? {
        projectId: "prj:ok",
        executionContractId: "xct:ok",
        executionAttemptId: "xat:ok",
      },
      provenance: provenance ?? {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prov:1",
        actor: LOCAL_PILOTE_ACTOR,
        source: "execution_adapter",
        timestamp: "2026-08-23T04:30:00.000Z",
        correlationId: "cor:1",
      },
      ...rest,
    } as Evidence;
  }

  const ctx = {
    projectId: "prj:ok",
    executionContractId: "xct:ok",
    executionAttemptId: "xat:ok",
    cycleInstanceId: null as string | null,
  };

  it("E1: coherent verification → admit", () => {
    const e = baseEvidence({ evidenceId: "ev:execution-review:xat:ok" });
    expect(
      evidenceAdmissibleForW3bExecutionContext({
        evidence: e,
        ...ctx,
        role: "verification",
      }),
    ).toEqual({ ok: true });
  });

  it("E2: coherent generic_mat → admit", () => {
    const e = baseEvidence({
      evidenceId: "ev:generic-materialization:xat:ok",
      type: "artifact",
      source: GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE_EXPORT,
      sourceKind: "external",
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prov:1",
        actor: LOCAL_PILOTE_ACTOR,
        source: "system",
        timestamp: "2026-08-23T04:30:00.000Z",
        correlationId: "cor:1",
      },
    });
    expect(
      evidenceAdmissibleForW3bExecutionContext({
        evidence: e,
        ...ctx,
        role: "generic_materialization",
      }),
    ).toEqual({ ok: true });
  });

  it("E3: wrong Project → refuse", () => {
    const e = baseEvidence({
      evidenceId: "ev:x",
      bindings: {
        projectId: "prj:other",
        executionContractId: "xct:ok",
        executionAttemptId: "xat:ok",
      },
    });
    const r = evidenceAdmissibleForW3bExecutionContext({
      evidence: e,
      ...ctx,
      role: "verification",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("evidence_project_mismatch");
  });

  it("E4: wrong EC → refuse", () => {
    const e = baseEvidence({
      evidenceId: "ev:x",
      bindings: {
        projectId: "prj:ok",
        executionContractId: "xct:other",
        executionAttemptId: "xat:ok",
      },
    });
    const r = evidenceAdmissibleForW3bExecutionContext({
      evidence: e,
      ...ctx,
      role: "verification",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("evidence_execution_contract_mismatch");
  });

  it("E5: wrong Attempt → refuse", () => {
    const e = baseEvidence({
      evidenceId: "ev:x",
      bindings: {
        projectId: "prj:ok",
        executionContractId: "xct:ok",
        executionAttemptId: "xat:other",
      },
    });
    const r = evidenceAdmissibleForW3bExecutionContext({
      evidence: e,
      ...ctx,
      role: "verification",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("evidence_execution_attempt_mismatch");
  });

  it("E6/E7: cycle mismatch / foreign cycle on Project-only → refuse", () => {
    const withCycle = baseEvidence({
      evidenceId: "ev:x",
      bindings: {
        projectId: "prj:ok",
        executionContractId: "xct:ok",
        executionAttemptId: "xat:ok",
        cycleInstanceId: "cyc:foreign",
      },
    });
    const foreign = evidenceAdmissibleForW3bExecutionContext({
      evidence: withCycle,
      ...ctx,
      cycleInstanceId: null,
      role: "verification",
    });
    expect(foreign.ok).toBe(false);
    if (!foreign.ok) expect(foreign.reason).toBe("evidence_foreign_cycle_on_project_only");

    const mismatch = evidenceAdmissibleForW3bExecutionContext({
      evidence: withCycle,
      ...ctx,
      cycleInstanceId: "cyc:expected",
      role: "verification",
    });
    expect(mismatch.ok).toBe(false);
    if (!mismatch.ok) expect(mismatch.reason).toBe("evidence_cycle_mismatch");
  });

  it("E8: available (not verified) → refuse", () => {
    const e = baseEvidence({ evidenceId: "ev:x", status: "available" });
    const r = evidenceAdmissibleForW3bExecutionContext({
      evidence: e,
      ...ctx,
      role: "verification",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("evidence_not_verified");
  });

  it("E9: provenance/sourceKind incoherent → refuse", () => {
    const e = baseEvidence({
      evidenceId: "ev:x",
      sourceKind: "manual",
    });
    const r = evidenceAdmissibleForW3bExecutionContext({
      evidence: e,
      ...ctx,
      role: "verification",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("verification_source_kind_mismatch");
  });

  it("T1/R-S8-03: null Evidence → ABSENT (not REJECTED)", () => {
    const r = resolveW3bEvidenceAdmission(null, {
      ...ctx,
      role: "verification",
    });
    expect(r.kind).toBe("absent");
  });

  it("T3/R-S8-03: present foreign Project → REJECTED with reason (≠ absent)", () => {
    const e = baseEvidence({
      evidenceId: "ev:execution-review:xat:ok",
      bindings: {
        projectId: "prj:foreign",
        executionContractId: "xct:ok",
        executionAttemptId: "xat:ok",
      },
    });
    const r = resolveW3bEvidenceAdmission(e, {
      ...ctx,
      role: "verification",
    });
    expect(r.kind).toBe("rejected");
    if (r.kind === "rejected") {
      expect(r.reason).toBe("evidence_project_mismatch");
      expect(r.evidence.evidenceId).toBe(e.evidenceId);
    }
  });
});

describe("AKG-M5 L3-S2 S8 Pass 04 — OBSERVED FS + late Evidence", () => {
  let runtime: RuntimeApplicationService;
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;
  let previousPilot: string | undefined;
  let refsRoot: string;
  const extraTemp: string[] = [];

  function git(cwd: string, ...args: string[]): string {
    return execFileSync("git", args, { cwd, encoding: "utf8" }).trim();
  }

  function createGitWorktree(label: string): { repo: string; h0: string } {
    const repo = fs.mkdtempSync(path.join(os.tmpdir(), `s8-obs-${label}-`));
    extraTemp.push(repo);
    git(repo, "init", "-q");
    git(repo, "config", "user.email", "s8@example.test");
    git(repo, "config", "user.name", "s8");
    git(repo, "config", "commit.gpgsign", "false");
    fs.mkdirSync(path.join(repo, path.dirname(NOTES_PATH)), { recursive: true });
    fs.writeFileSync(path.join(repo, NOTES_PATH), "notes-h0\n");
    fs.writeFileSync(path.join(repo, "untouched.txt"), "keep\n");
    git(repo, "add", "-A");
    git(repo, "commit", "-q", "-m", "H0");
    return { repo, h0: git(repo, "rev-parse", "HEAD").toLowerCase() };
  }

  function restoreEnvVar(name: string, previous: string | undefined): void {
    if (previous === undefined) delete process.env[name];
    else process.env[name] = previous;
  }

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    delete process.env.SFIA_STUDIO_LOCAL_OA_EXCLUSIVE;
    setConversationProviderForTests(null);
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "s8-obs-refs-"));
    extraTemp.push(refsRoot);
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("akg-m5-l3s2-s8-obs.sqlite"),
      idPrefix: "l3s2ob",
    });
  });

  afterEach(() => {
    cleanupW2TempDirs();
    for (const d of extraTemp.splice(0)) {
      try {
        fs.rmSync(d, { recursive: true, force: true });
      } catch {
        /* ignore */
      }
    }
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
    restoreEnvVar("SFIA_STUDIO_LOCAL_PILOT_AUTHORITY", previousPilot);
  });

  async function seedProject(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "demo",
      objective: "S8 OBSERVED",
      context: "s8 obs",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `OB${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:s8-obs-${suffix}`,
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
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity: `acme/l3s2-s8-obs-${suffix}`,
    });
    return { projectId, oa };
  }

  function notesEditAnalysis(): IntentAnalysisDto {
    const base = buildIntentAnalysisFromSolicitedMission({
      objective: "modifier notes (OBSERVED)",
      expectedOutcome: "notes updated",
      scope: NOTES_PATH,
      repositoryMutation: "write",
      impactSignals: { structuralChange: false, architectureImpact: false },
    });
    return {
      ...base,
      executionIntent: {
        intentKind: "other",
        scopeIn: [NOTES_PATH],
        requiredCapabilities: [],
      },
    };
  }

  function requiredFactsOrThrow(
    contract: Parameters<typeof requiredInspectedFactsForContract>[0],
  ): readonly string[] {
    const facts = requiredInspectedFactsForContract(contract);
    if (Array.isArray(facts)) return facts;
    throw new Error("facts incomplete");
  }

  function launchPortOf(oa: {
    executionAttemptServices?: {
      realBoundary?: { launchPort?: unknown };
    } | null;
  }): TestOnlyRealExecutionLaunchPort {
    const port = oa.executionAttemptServices?.realBoundary?.launchPort;
    if (!(port instanceof TestOnlyRealExecutionLaunchPort)) {
      throw new Error("TestOnlyRealExecutionLaunchPort required");
    }
    return port;
  }

  it("O2 — Project-only OBSERVED worktree → VerifiedChangeSet + generic_mat + RB ownership", async () => {
    const fx = createGitWorktree("obs");
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = fx.h0;
    const { projectId, oa } = await seedProject("obs");

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: notesEditAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: fx.h0,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.cycleInstanceId).toBeNull();

    const live = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    if (!live.ok) throw new Error("ec");
    expect(live.contract.cycleInstanceId ?? null).toBeNull();
    const facts = requiredFactsOrThrow(live.contract);
    const inputs = live.contract.inputs as Record<string, unknown>;
    const repositoryRef = String(inputs.repositoryBindingIdentity ?? "");
    const baseSha = String(inputs.baseHeadSha ?? fx.h0);
    expect(baseSha.toLowerCase()).toBe(fx.h0);

    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: live.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(true);
    if (!she.ok) throw new Error(she.code);

    const port = launchPortOf(oa);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      forceLocalAuthority: true,
    });
    if (!selected.ok) throw new Error("select");
    const attemptId = selected.attempt!.attemptId;
    await governedExecuteStart({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      attemptId,
      forceLocalAuthority: true,
    });

    // Real FS mutation in isolated worktree (Studio will observe).
    const notesAbs = path.join(fx.repo, NOTES_PATH);
    fs.writeFileSync(notesAbs, "notes-after-cursor\n");
    const expectedDigest = `sha256:${createHash("sha256")
      .update(fs.readFileSync(notesAbs))
      .digest("hex")}`;

    setTimeout(() => {
      port.resolveSimulatedCompletion(`proc:sim:${attemptId}`, {
        exitCode: 0,
        timedOut: false,
        stdout: `CURSOR_EXECUTION_REPORT_JSON=${JSON.stringify({
          schemaVersion: "oa.cursor-execution-report.1",
          reportId: `rpt:obs:${attemptId}`.slice(0, 128),
          attemptId,
          executionContractId: she.executionContractId,
          repositoryRef,
          baseSha,
          status: "succeeded",
          authorizedEffectsExecuted: ["filesystem.modify"],
          workPerformed: [`modified ${NOTES_PATH}`],
          fileEffects: {
            created: [],
            modified: [NOTES_PATH],
            deleted: [],
          },
        })}`,
        stderr: "",
        durationMs: 5,
        worktreeRef: fx.repo,
      });
    }, 15);

    const terminal = await governedExecuteRecordResult({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      attemptId,
      forceLocalAuthority: true,
      awaitIfPending: true,
      missionResultRefsRoot: refsRoot,
    });
    expect(terminal.ok).toBe(true);
    if (!terminal.ok) throw new Error(String(terminal.code));

    const germ = loadGenericExecutionReviewMaterial({ refsRoot, attemptId });
    expect(germ.ok).toBe(true);
    if (!germ.ok) throw new Error("germ");
    expect(germ.manifest.verifiedEffects.verificationStatus).toBe("OBSERVED");
    expect(germ.verifiedChangeSet).toBeTruthy();
    const entry = germ.verifiedChangeSet!.all.find((e) => e.path === NOTES_PATH);
    expect(entry).toBeTruthy();
    expect(entry!.afterDigest).toBe(expectedDigest);

    const verificationId =
      executionReviewVerificationEvidenceIdForAttempt(attemptId);
    const verification =
      await oa.evidenceReviewServices!.evidenceReader.findById(verificationId);
    expect(verification?.status).toBe("verified");
    expect(verification?.bindings.cycleInstanceId).toBeUndefined();
    expect(verification?.bindings.projectId).toBe(projectId);

    const genericMatId = genericMaterializationEvidenceIdForAttempt(attemptId);
    const genericMat =
      await oa.evidenceReviewServices!.evidenceReader.findById(genericMatId);
    expect(genericMat?.status).toBe("verified");
    expect(genericMat?.digest).toBe(expectedDigest);
    expect(genericMat?.bindings.cycleInstanceId).toBeUndefined();

    const materialized = await materializeW3bProductTerminal({
      oa,
      projectId,
      attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) throw new Error(materialized.code);
    expect(materialized.product.outcome).toBe("UNCLAIMED");
    expect(materialized.product.outcome).not.toBe("SUCCESS");

    const rb = await oa.evidenceReviewServices!.reviewBundleReader.findById(
      materialized.product.reviewBundleId!,
    );
    expect(rb?.frozenAt).toBeTruthy();
    const snapIds = (rb?.frozenEvidenceSnapshots ?? []).map((s) => s.evidenceId);
    expect(snapIds).toContain(verificationId);
    expect(snapIds).toContain(genericMatId);
    for (const snap of rb?.frozenEvidenceSnapshots ?? []) {
      expect(snap.evidenceId).toBeTruthy();
      expect(snap.status).toBeTruthy();
      const liveEv = await oa.evidenceReviewServices!.evidenceReader.findById(
        snap.evidenceId,
      );
      expect(liveEv?.bindings.projectId).toBe(projectId);
      expect(liveEv?.bindings.executionAttemptId).toBe(attemptId);
      expect(liveEv?.bindings.cycleInstanceId).toBeUndefined();
    }

    const liveAfter = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(liveAfter.ok && liveAfter.livingProjectState.activeCycleInstanceId == null).toBe(
      true,
    );

    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId,
      refsRoot,
      targetPath: NOTES_PATH,
    });
    expect(surface.executionReport).not.toBeNull();
  }, 90_000);

  it("O8 / R-S8-04 — W3-B Product path REJECTS foreign-project Verification (unconditional)", async () => {
    const { projectId, oa } = await seedProject("own");
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: notesEditAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error("prep");
    const live = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    if (!live.ok) throw new Error("ec");
    const facts = requiredFactsOrThrow(live.contract);
    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: live.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    if (!she.ok) throw new Error("she");
    launchPortOf(oa);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      forceLocalAuthority: true,
    });
    if (!selected.ok) throw new Error("select");
    const attemptId = selected.attempt!.attemptId;
    await governedExecuteStart({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      attemptId,
      forceLocalAuthority: true,
    });
    const settled = await settleDeterministicProductCursorSuccess({
      oa,
      attemptId,
    });
    expect(settled.ok).toBe(true);

    // R-S8-04 — Bounded EvidenceReader substitution so W3-B itself is exercised.
    // Does NOT mock admission predicate, rejection decision, or Product result.
    // Foreign Evidence is verified + role-coherent except projectId binding.
    const verificationId =
      executionReviewVerificationEvidenceIdForAttempt(attemptId);
    const foreignEvidence = {
      schemaVersion: "0.2.0-oa",
      evidenceId: verificationId,
      type: "attestation",
      source: `execution attempt ${attemptId} (succeeded)`,
      sourceKind: "execution_attempt",
      status: "verified",
      classification: "internal",
      storageMode: "external_payload_ref",
      availability: "available",
      producedAt: "2026-08-23T04:30:00.000Z",
      createdAt: "2026-08-23T04:30:00.000Z",
      version: 2,
      containsSecrets: false,
      bindings: {
        projectId: "prj:foreign-owner",
        executionContractId: she.executionContractId,
        executionAttemptId: attemptId,
      },
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prov:foreign-o8",
        actor: LOCAL_PILOTE_ACTOR,
        source: "execution_adapter",
        timestamp: "2026-08-23T04:30:00.000Z",
        correlationId: "cor:foreign-o8",
      },
    } as Evidence;

    const services = oa.evidenceReviewServices!;
    const realReader = services.evidenceReader;
    services.evidenceReader = {
      findById: async (id: string) => {
        if (id === verificationId) return foreignEvidence;
        return realReader.findById(id);
      },
    };

    let materialized: Awaited<ReturnType<typeof materializeW3bProductTerminal>>;
    try {
      // Prove the foreign Evidence is what W3-B's reader returns.
      const presented = await services.evidenceReader.findById(verificationId);
      expect(presented).not.toBeNull();
      expect(presented!.bindings.projectId).toBe("prj:foreign-owner");
      expect(presented!.status).toBe("verified");

      materialized = await materializeW3bProductTerminal({
        oa,
        projectId,
        attemptId,
      });
    } finally {
      services.evidenceReader = realReader;
    }

    // Unconditional W3-B Product assertions (cannot PASS without exercising rejection).
    expect(materialized.ok).toBe(false);
    if (materialized.ok) {
      throw new Error("O8 expected W3-B ownership rejection, got ok:true");
    }
    expect(materialized.code).toBe("EVIDENCE_PROJECT_MISMATCH");
    expect(materialized.message).toContain("evidence_project_mismatch");
    expect(materialized.message).toContain(verificationId);
    expect(materialized.product?.reviewBundleId ?? null).toBeNull();
    expect(materialized.product?.claimEvaluationId ?? null).toBeNull();

    const rb = await services.reviewBundleReader.findById(
      `rb:w3b:${createHash("sha256").update(attemptId).digest("hex").slice(0, 16)}`,
    );
    if (rb?.frozenEvidenceSnapshots) {
      const snapIds = rb.frozenEvidenceSnapshots.map((s) => s.evidenceId);
      expect(snapIds).not.toContain(verificationId);
    }
  }, 60_000);

  it("O10 / R-S8-02 — late Verification after frozen tech RB → IDEMPOTENCY_CONFLICT fail-closed", async () => {
    const { projectId, oa } = await seedProject("late");
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: notesEditAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!prep.ok) throw new Error("prep");
    const live = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    if (!live.ok) throw new Error("ec");
    const facts = requiredFactsOrThrow(live.contract);
    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: live.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    if (!she.ok) throw new Error("she");
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      forceLocalAuthority: true,
    });
    if (!selected.ok) throw new Error("select");
    const attemptId = selected.attempt!.attemptId;
    await governedExecuteStart({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      attemptId,
      forceLocalAuthority: true,
    });
    const settled = await settleDeterministicProductCursorSuccess({
      oa,
      attemptId,
    });
    expect(settled.ok).toBe(true);

    const first = await materializeW3bProductTerminal({
      oa,
      projectId,
      attemptId,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    const rbId = first.product.reviewBundleId!;
    const rb1 = await oa.evidenceReviewServices!.reviewBundleReader.findById(rbId);
    expect(rb1?.frozenAt).toBeTruthy();
    const firstSnap = new Set(
      (rb1?.frozenEvidenceSnapshots ?? []).map((s) => s.evidenceId),
    );

    // Late Verification Evidence arrives after freeze.
    const late = await ingestExecutionReviewVerificationEvidence({
      evidenceReviewServices: oa.evidenceReviewServices!,
      projectId,
      cycleInstanceId: null,
      executionContractId: she.executionContractId,
      executionAttemptId: attemptId,
      refsRoot,
      payload: {
        schemaVersion: "oa.execution-review-verification.1",
        attemptId,
        executionContractId: she.executionContractId,
        projectId,
        repositoryRef: "repo:late",
        baseSha: W2_TEST_PINNED_BASE_HEAD_SHA,
        reviewMaterialId: "erm:late",
        verificationStatus: "UNAVAILABLE",
        verifiedChangeSetDigest: null,
        verifiedChangeSetRef: null,
        claimFactMismatch: false,
        unclaimedObservedPaths: [],
        claimedMissingPaths: [],
        observedPathCount: 0,
        completeness: "PARTIAL",
        reviewEndOfPresent: false,
      },
    });
    expect(late.ok).toBe(true);

    const second = await materializeW3bProductTerminal({
      oa,
      projectId,
      attemptId,
    });
    // OA createReviewBundle fingerprint includes evidenceIds → conflict, not silent rewrite.
    expect(second.ok).toBe(false);
    if (!second.ok) {
      expect(second.code).toBe("IDEMPOTENCY_CONFLICT");
      expect(second.message).toMatch(/late|divergent|idempotency/i);
    }
    const rb2 = await oa.evidenceReviewServices!.reviewBundleReader.findById(rbId);
    const secondSnap = new Set(
      (rb2?.frozenEvidenceSnapshots ?? []).map((s) => s.evidenceId),
    );
    expect([...secondSnap].sort()).toEqual([...firstSnap].sort());
    expect(secondSnap.has(executionReviewVerificationEvidenceIdForAttempt(attemptId))).toBe(
      false,
    );
  }, 60_000);
});
