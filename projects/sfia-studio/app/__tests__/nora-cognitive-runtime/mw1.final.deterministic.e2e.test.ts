/** @vitest-environment node */
/**
 * MW1 FINAL — aggregate deterministic cross-story E2E (QA-only).
 *
 * One Product lifecycle exercising S01 → S02 → S03 interaction:
 * - Truth C resume + honest Memory B availability (S01)
 * - compaction with governing context + provenance (S02)
 * - never-silent B→C materialization via RuntimeOaStack (S03)
 * - Truth C change invalidates stale compaction (S02 × S03)
 *
 * Production code FROZEN — proof-only test asset.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import {
  ProductSqliteSession,
  applyCompactionIfNeeded,
  computeRawProvenanceCoverage,
  contentHash,
  extractItemText,
  loadSessionRows,
  partitionMemoryBForCompaction,
  userTextItem,
  assistantTextItem,
} from "@/lib/nora-cognitive-runtime";
import { CapturingRoundFakeProvider } from "@/lib/nora-eval/mw1S01Observe";
import type { RuntimeStateTransition } from "@/lib/oa/project";
import {
  SqliteProductStore,
  SqliteProjectAuditJournal,
} from "@/lib/oa/project";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
} from "@/lib/vertical-slice-runtime";

const SEMANTIC_MARKER = "MW1-FINAL-R1-SEMANTIC-CONTEXT";
const STOP_MARKER = "MW1-FINAL-STOP-R1";
const POLICY = { itemThreshold: 4, keepRecentCount: 2, maxSummaryChars: 900 };
const NOW = "2026-09-01T04:00:00.000Z";

const ACTOR = {
  actorId: "actor:studio-system",
  role: "system" as const,
  authorityLevel: "none" as const,
};

const tempDirs: string[] = [];

function tempDir(prefix: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  tempDirs.push(dir);
  return dir;
}

afterEach(() => {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  resetRuntimeApplicationServiceForTests();
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function listMaterializationAudit(runtime: RuntimeApplicationService) {
  const store = runtime.oa!.projectServices.store;
  if (!(store instanceof SqliteProductStore)) {
    throw new Error("expected SqliteProductStore");
  }
  return new SqliteProjectAuditJournal(store)
    .listAll()
    .filter(
      (e) =>
        e.event === "oa.memory.materialization.accepted" ||
        e.event === "oa.memory.materialization.rejected",
    );
}

function class2Transition(input: {
  projectId: string;
  lpsVersion: number;
  nextStep: string;
}): RuntimeStateTransition {
  return {
    kind: "set_next_step",
    projectId: input.projectId,
    fromLpsVersion: input.lpsVersion,
    targetKind: "nextStep",
    nextStep: input.nextStep,
  };
}

describe("MW1 FINAL — aggregate deterministic cross-story E2E", () => {
  const prevReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
  const prevProvider = process.env.OPS1_CONVERSATION_PROVIDER;

  afterEach(() => {
    if (prevReset === undefined) delete process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
    else process.env.SFIA_V2_RUNTIME_ALLOW_RESET = prevReset;
    if (prevProvider === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = prevProvider;
  });

  it("Phases A–F — S01 resume → S02 compaction → S03 B→C → stale invalidation", async () => {
    const dir = tempDir("sfia-mw1-final-");
    const productDbPath = path.join(dir, "oa-product.sqlite");
    const sessionDbPath = path.join(dir, "nora-session.sqlite");
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";

    // ── Phase A — baseline Project R1 + Memory B ──────────────────────────
    resetRuntimeApplicationServiceForTests();
    const runtime1 = getRuntimeApplicationService({
      productDbPath,
      auditMode: "noop",
    });
    expect(runtime1.oa?.materializationServices.materializeFromMemoryB).toBeTruthy();

    const truthMarkerR1 = `MW1-FINAL-R1-OBJECTIVE-${Date.now()}`;
    const created = await runtime1.createProject({
      name: "MW1 Final Aggregate",
      objective: truthMarkerR1,
      context: "Aggregate S01+S02+S03 deterministic exit proof",
      criticality: "STANDARD",
      constraints: ["AUCUNE EXÉCUTION"],
      shortReference: "MW1FIN",
      idempotencyKey: `mw1-final-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;
    const v1 = await runtime1.getProject(projectId);
    expect(v1.ok).toBe(true);
    if (!v1.ok) return;
    const rev1 = {
      lpsId: v1.livingState.id,
      lpsVersion: v1.livingState.version,
    };

    const session = new ProductSqliteSession({
      projectId,
      dbPath: sessionDbPath,
      sessionKey: "f1-default",
    });
    await session.addItems([
      userTextItem(`Useful premise: ${SEMANTIC_MARKER}`),
      assistantTextItem("Acknowledged semantic context."),
      userTextItem("noise ".repeat(30)),
      assistantTextItem("noise reply"),
      userTextItem(`governing premise: ${STOP_MARKER}`),
      assistantTextItem("Will not proceed without review."),
      userTextItem("More filler ".repeat(20)),
      assistantTextItem("More filler reply"),
    ]);
    const beforeCompact = await loadSessionRows(session);
    const { toCompact } = partitionMemoryBForCompaction(
      beforeCompact.conversation,
      POLICY.keepRecentCount,
    );
    const stopSeq = beforeCompact.conversation[4]!.seq;
    session.close();

    expect(beforeCompact.conversation.length).toBeGreaterThan(0);
    expect(toCompact.map((r) => r.seq)).toContain(stopSeq);

    // ── Phase B — S01 resume (available_with_history) ─────────────────────
    resetRuntimeApplicationServiceForTests();
    const runtime2 = getRuntimeApplicationService({
      productDbPath,
      auditMode: "noop",
    });
    const remounted = await runtime2.getProject(projectId);
    expect(remounted.ok).toBe(true);
    if (!remounted.ok) return;
    expect(remounted.project.objective).toBe(truthMarkerR1);
    expect(remounted.livingState.id).toBe(rev1.lpsId);

    const capturingB = new CapturingRoundFakeProvider({
      scripted: ["[TEST/FAKE] Resume with available Memory B history."],
    });
    const resume = await orchestrateProjectAssistantTurn({
      projectId,
      content: "Resume after restart with Memory B history.",
      provider: capturingB,
      sessionDbPath,
    });
    expect(resume.ok).toBe(true);
    if (!resume.ok) return;
    expect(resume.memoryBAvailability).toBe("available_with_history");
    expect(resume.cognitiveRuntime).toBe("agents");
    expect(resume.project.objective).toBe(truthMarkerR1);
    expect(capturingB.capturedText()).toContain(truthMarkerR1);
    expect(capturingB.capturedText()).not.toMatch(
      /HumanDecision fabriqu|autorisation GO invent/i,
    );

    // ── Phase C — S02 compaction at R1 ────────────────────────────────────
    const sessionC = new ProductSqliteSession({
      projectId,
      dbPath: sessionDbPath,
      sessionKey: "f1-default",
    });
    const compacted = await applyCompactionIfNeeded({
      session: sessionC,
      truthCRevision: rev1,
      policy: POLICY,
      nowIso: NOW,
    });
    expect(compacted.applied).toBe(true);
    const loadedR1 = await loadSessionRows(sessionC);
    expect(loadedR1.compaction).not.toBeNull();
    expect(loadedR1.compaction!.summaryText).toMatch(new RegExp(STOP_MARKER));
    expect(loadedR1.compaction!.loss.occurred).toBe(true);
    const coverage = computeRawProvenanceCoverage({
      removedSourceSeqs: toCompact.map((r) => r.seq),
      provenance: loadedR1.compaction!.provenance,
    });
    expect(coverage.orphanedRemovedSourceCount).toBe(0);
    expect(coverage.coveredSourceSeqs).toContain(stopSeq);

    const provenanceEntry = loadedR1.compaction!.provenance.find(
      (p) => p.kind === "raw",
    );
    expect(provenanceEntry).toBeTruthy();
    const staleCompactSource = {
      kind: "compacted_provenance" as const,
      sessionKey: "f1-default",
      generation: loadedR1.compaction!.generation,
      sourceSeq: provenanceEntry!.sourceSeq ?? provenanceEntry!.seq,
      contentHash: provenanceEntry!.contentHash,
    };
    sessionC.close();

    const materializer = runtime2.oa!.materializationServices.materializeFromMemoryB;
    const rawRow = loadedR1.conversation[loadedR1.conversation.length - 1]!;
    const rawSource = {
      kind: "raw" as const,
      sessionKey: "f1-default",
      seq: rawRow.seq,
      contentHash: contentHash(extractItemText(rawRow.item)),
    };

    // ── Phase D — never-silent B→C ────────────────────────────────────────
    const beforeMat = await runtime2.oa!.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(beforeMat.ok).toBe(true);
    if (!beforeMat.ok) return;
    const lpsBefore = beforeMat.livingProjectState.version;

    const noBasis = await materializer.execute({
      projectId,
      materializationClass: 2,
      basis: null,
      memoryBSource: rawSource,
      target: { kind: "nextStep", nextStep: "mw1-final-next" },
      expectedLpsVersion: lpsBefore,
      correlationId: "cor:mw1-final-no-basis",
      actor: ACTOR,
      sessionDbPath,
    });
    expect(noBasis.ok).toBe(false);
    if (!noBasis.ok) {
      expect(noBasis.detailCode).toBe("MATERIALIZATION_BASIS_REQUIRED");
    }

    const afterReject = await runtime2.oa!.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(afterReject.ok).toBe(true);
    if (!afterReject.ok) return;
    expect(afterReject.livingProjectState.version).toBe(lpsBefore);
    expect(afterReject.livingProjectState.nextStep).toBe(
      beforeMat.livingProjectState.nextStep,
    );
    expect(
      listMaterializationAudit(runtime2).some(
        (e) => e.event === "oa.memory.materialization.rejected",
      ),
    ).toBe(true);

    const accepted = await materializer.execute({
      projectId,
      materializationClass: 2,
      basis: {
        kind: "valid_runtime_state_transition",
        transition: class2Transition({
          projectId,
          lpsVersion: lpsBefore,
          nextStep: "mw1-final-r2-step",
        }),
      },
      memoryBSource: rawSource,
      target: { kind: "nextStep", nextStep: "mw1-final-r2-step" },
      expectedLpsVersion: lpsBefore,
      correlationId: "cor:mw1-final-accept",
      actor: ACTOR,
      sessionDbPath,
    });
    expect(accepted.ok).toBe(true);
    if (!accepted.ok) return;

    const v2 = await runtime2.oa!.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(v2.ok).toBe(true);
    if (!v2.ok) return;
    expect(v2.livingProjectState.version).toBeGreaterThan(lpsBefore);
    expect(v2.livingProjectState.nextStep).toBe("mw1-final-r2-step");
    const rev2 = {
      lpsId: v2.livingProjectState.lpsVersionId,
      lpsVersion: v2.livingProjectState.version,
    };

    // ── Phase E — R1 compaction stale after R2 Truth C ────────────────────
    resetRuntimeApplicationServiceForTests();
    const runtime3 = getRuntimeApplicationService({
      productDbPath,
      auditMode: "noop",
    });
    const capturingE = new CapturingRoundFakeProvider({
      scripted: ["[TEST/FAKE] Resume after Truth C R2 mutation."],
    });
    const afterTruthChange = await orchestrateProjectAssistantTurn({
      projectId,
      content: "Resume after Truth C advanced to R2.",
      provider: capturingE,
      sessionDbPath,
    });
    expect(afterTruthChange.ok).toBe(true);
    if (!afterTruthChange.ok) return;
    expect(afterTruthChange.memoryBCompactionState).toBe("stale_invalidated");
    expect(afterTruthChange.project.lpsVersion).toBe(rev2.lpsVersion);
    const cognition = capturingE.capturedText();
    expect(cognition).toMatch(/\(v2[,)]/);
    expect(cognition).not.toContain(SEMANTIC_MARKER);
    expect(cognition).not.toMatch(/\[MW1-S02 COMPACTED MEMORY B/);
    expect(cognition).toMatch(/STALE|invalid/i);

    const projectAfterR2 =
      await runtime3.oa!.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
    expect(projectAfterR2.ok).toBe(true);
    if (!projectAfterR2.ok) return;
    expect(projectAfterR2.livingProjectState.nextStep).toBe("mw1-final-r2-step");

    // ── Phase F — stale compacted B cannot materialize into R2 ──────────
    const staleMat = await runtime3.oa!.materializationServices.materializeFromMemoryB.execute({
      projectId,
      materializationClass: 2,
      basis: {
        kind: "valid_runtime_state_transition",
        transition: class2Transition({
          projectId,
          lpsVersion: rev2.lpsVersion,
          nextStep: "stale-should-fail",
        }),
      },
      memoryBSource: staleCompactSource,
      target: { kind: "nextStep", nextStep: "stale-should-fail" },
      expectedLpsVersion: rev2.lpsVersion,
      correlationId: "cor:mw1-final-stale-b",
      actor: ACTOR,
      sessionDbPath,
    });
    expect(staleMat.ok).toBe(false);
    if (!staleMat.ok) {
      expect(staleMat.detailCode).toBe("MEMORY_B_SOURCE_STALE");
    }

    const afterStale = await runtime3.oa!.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(afterStale.ok).toBe(true);
    if (!afterStale.ok) return;
    expect(afterStale.livingProjectState.version).toBe(rev2.lpsVersion);
    expect(afterStale.livingProjectState.nextStep).toBe("mw1-final-r2-step");
    expect(
      listMaterializationAudit(runtime3).filter(
        (e) => e.event === "oa.memory.materialization.rejected",
      ).length,
    ).toBeGreaterThanOrEqual(2);
  });

  it("Phase B companion — unavailable Memory B discloses; Truth C still restores", async () => {
    const dir = tempDir("sfia-mw1-final-unavail-");
    const productDbPath = path.join(dir, "oa-product.sqlite");
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";

    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({
      productDbPath,
      auditMode: "noop",
    });
    const marker = `MW1-FINAL-UNAVAIL-${Date.now()}`;
    const created = await runtime.createProject({
      name: "MW1 Final Unavailable B",
      objective: marker,
      context: "S01 unavailable branch in aggregate campaign",
      criticality: "STANDARD",
      constraints: ["LECTURE SEULE"],
      shortReference: "MW1FU",
      idempotencyKey: `mw1-final-unavail-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;

    resetRuntimeApplicationServiceForTests();
    const runtime2 = getRuntimeApplicationService({
      productDbPath,
      auditMode: "noop",
    });

    const blocker = path.join(dir, "session-parent-blocked");
    fs.writeFileSync(blocker, "not-a-directory");
    const blockedSessionPath = path.join(blocker, "nora-session.sqlite");

    const capturing = new CapturingRoundFakeProvider({
      scripted: ["[TEST/FAKE] Truth C only — B unavailable."],
    });
    const result = await orchestrateProjectAssistantTurn({
      projectId,
      content: "Resume with unavailable Memory B.",
      provider: capturing,
      sessionDbPath: blockedSessionPath,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.memoryBAvailability).toBe("unavailable");
    expect(result.memoryBAvailability).not.toBe("available_empty");
    expect(result.project.objective).toBe(marker);
    expect(result.ephemeralNotice).toMatch(/Contexte conversationnel non disponible/i);
    expect(capturing.capturedText()).toContain(marker);
    expect(capturing.capturedText()).not.toMatch(/invented transcript/i);
  });
});
