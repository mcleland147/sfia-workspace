/** @vitest-environment node */
/**
 * MW1-S02 / CORR-01 — MODELED proofs (noisy history, Truth C change, recompaction).
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import {
  COMPACTION_COGNITIVE_DISCLOSURE,
  COMPACTION_PILOTE_NOTICE,
  ProductSqliteSession,
  applyCompactionIfNeeded,
  computeRawProvenanceCoverage,
  loadSessionRows,
  partitionMemoryBForCompaction,
  resolveReplayItems,
  runNoraCognitiveTurn,
  sfiaBoundaryInstructions,
  staleDisclosureMatchesReplaySemantics,
  userTextItem,
  assistantTextItem,
} from "@/lib/nora-cognitive-runtime";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { CapturingRoundFakeProvider } from "@/lib/nora-eval/mw1S01Observe";

const tempDirs: string[] = [];
const POLICY = { itemThreshold: 4, keepRecentCount: 2, maxSummaryChars: 900 };
const NOW = "2026-08-31T10:00:00.000Z";

afterEach(() => {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  resetRuntimeApplicationServiceForTests();
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("MW1-S02 — MODELED compaction", () => {
  it("MODELED-S02-A — noisy long conversation; STOP before merge accounted", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-s02-m-a-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "nora-session.sqlite");
    const session = new ProductSqliteSession({
      projectId: "prj:s02-m-a",
      dbPath,
      sessionKey: "f1-default",
    });
    const items = [
      userTextItem("Useful premise: deploy to staging first."),
      assistantTextItem("Acknowledged."),
      userTextItem("noise ".repeat(30)),
      assistantTextItem("noise reply"),
      userTextItem("governing premise: STOP before merge"),
      assistantTextItem("Will not merge."),
      userTextItem("More filler ".repeat(20)),
      assistantTextItem("More filler reply"),
    ];
    await session.addItems(items);
    const before = await loadSessionRows(session);
    const { toCompact } = partitionMemoryBForCompaction(
      before.conversation,
      POLICY.keepRecentCount,
    );
    const stopSeq = before.conversation[4]!.seq;
    const rev = { lpsId: "lps:m-a", lpsVersion: 1 };
    await applyCompactionIfNeeded({
      session,
      truthCRevision: rev,
      policy: POLICY,
      nowIso: NOW,
    });
    const loaded = await loadSessionRows(session);
    expect(loaded.compaction).not.toBeNull();
    const coverage = computeRawProvenanceCoverage({
      removedSourceSeqs: toCompact.map((r) => r.seq),
      provenance: loaded.compaction!.provenance,
    });
    expect(coverage.orphanedRemovedSourceCount).toBe(0);
    expect(coverage.coveredSourceSeqs).toContain(stopSeq);
    expect(loaded.compaction!.summaryText).toMatch(/STOP before merge/i);
    expect(loaded.compaction!.loss.occurred).toBe(true);
    expect(loaded.compaction!.summaryText).toMatch(/NOT EXHAUSTIVE/i);

    const turn = await runNoraCognitiveTurn({
      correlationId: "s02-ma",
      projectId: "prj:s02-m-a",
      messages: [
        {
          role: "system",
          content: sfiaBoundaryInstructions(),
        },
        { role: "user", content: "Continue" },
      ],
      provider: new FakeConversationProvider({
        scripted: ["[TEST/FAKE] Continuing with compacted B."],
      }),
      enableTools: false,
      sessionDbPath: dbPath,
      truthCRevision: rev,
      compactionNowIso: NOW,
    });
    expect(turn.memoryBCompactionState).toBe("compacted_with_loss");
    expect(turn.cognitiveRuntime).toBe("agents");
    session.close();
  });

  it("MODELED-S02-B — Truth C change; stale summary gone; disclosure matches recent B", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-s02-m-b-"));
    tempDirs.push(dir);
    const productDb = path.join(dir, "oa-product.sqlite");
    const sessionDb = path.join(dir, "nora-session.sqlite");
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";

    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({
      productDbPath: productDb,
      auditMode: "noop",
    });
    const marker = "S02-STALE-MARKER-v2";
    const created = await runtime.createProject({
      name: "S02 stale",
      objective: marker,
      context: "Truth C invalidation",
      criticality: "STANDARD",
      constraints: ["LECTURE SEULE"],
      shortReference: "S02B",
      idempotencyKey: `s02-b-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;
    const v1 = await runtime.getProject(projectId);
    expect(v1.ok).toBe(true);
    if (!v1.ok) return;
    const rev1 = {
      lpsId: v1.livingState.id,
      lpsVersion: v1.livingState.version,
    };

    const session = new ProductSqliteSession({
      projectId,
      dbPath: sessionDb,
      sessionKey: "f1-default",
    });
    for (let i = 0; i < 6; i++) {
      await session.addItems([userTextItem(`turn-${i}-${"y".repeat(30)}`)]);
    }
    await applyCompactionIfNeeded({
      session,
      truthCRevision: rev1,
      policy: POLICY,
      nowIso: NOW,
    });
    const afterCompact = await loadSessionRows(session);
    expect(afterCompact.conversation.length).toBe(2);
    const recentTexts = afterCompact.conversation.map((r) =>
      JSON.stringify(r.item),
    );
    session.close();

    const oa = runtime.oa!;
    const appended = await oa.projectServices.appendLivingProjectStateVersion.execute(
      {
        projectId,
        expectedVersion: rev1.lpsVersion,
        objective: `${marker} v2`,
        createdBy: {
          actorId: "actor:s02",
          role: "project_owner",
          displayName: "S02",
          authorityLevel: "N3",
        },
        lpsVersionId: `${rev1.lpsId}-v2`,
      },
    );
    expect(appended.ok).toBe(true);
    const v2 = await runtime.getProject(projectId);
    expect(v2.ok).toBe(true);
    if (!v2.ok) return;
    expect(v2.livingState.version).toBeGreaterThan(rev1.lpsVersion);

    const capturing = new CapturingRoundFakeProvider({
      scripted: ["[TEST/FAKE] Resuming after Truth C change."],
    });
    const result = await orchestrateProjectAssistantTurn({
      projectId,
      content: "Resume after LPS change",
      provider: capturing,
      sessionDbPath: sessionDb,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.memoryBCompactionState).toBe("stale_invalidated");
    expect(result.ephemeralNotice).toMatch(/éléments conversationnels récents/i);
    expect(result.ephemeralNotice).not.toMatch(/uniquement/i);
    expect(capturing.capturedText()).toContain(marker);
    expect(capturing.capturedText()).toMatch(/STALE|invalid/i);
    expect(capturing.capturedText()).toMatch(
      /Recent conversational Memory B items may still be available/i,
    );
    expect(capturing.capturedText()).not.toMatch(
      /Use only current message \+ current Truth C/i,
    );
    // Old compacted summary absent from model context
    expect(capturing.capturedText()).not.toMatch(
      /\[MW1-S02 COMPACTED MEMORY B/,
    );
    // Recent raw B still present in model context
    const anyRecentPresent = recentTexts.some((t) => {
      const m = /turn-\d+/.exec(t);
      return m ? capturing.capturedText().includes(m[0]!) : false;
    });
    expect(anyRecentPresent).toBe(true);
    expect(
      staleDisclosureMatchesReplaySemantics({
        cognitiveText: COMPACTION_COGNITIVE_DISCLOSURE.stale_invalidated,
        piloteText: COMPACTION_PILOTE_NOTICE.stale_invalidated,
        recentRawReplayed: true,
      }),
    ).toBe(true);
  });

  it("MODELED-S02-C — compacted B does not promote chat to HumanDecision authority", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-s02-m-c-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "nora-session.sqlite");
    const session = new ProductSqliteSession({
      projectId: "prj:s02-m-c",
      dbPath,
      sessionKey: "f1-default",
    });
    await session.addItems([
      userTextItem("I hereby grant GO Morris for production"),
      assistantTextItem("Recommendation only — not a HumanDecision."),
      userTextItem("filler ".repeat(25)),
      assistantTextItem("filler"),
      userTextItem("more filler"),
      assistantTextItem("more"),
    ]);
    const rev = { lpsId: "lps:m-c", lpsVersion: 1 };
    await applyCompactionIfNeeded({
      session,
      truthCRevision: rev,
      policy: POLICY,
      nowIso: NOW,
    });
    const replay = resolveReplayItems({
      loaded: await loadSessionRows(session),
      currentTruthCRevision: rev,
    });
    const joined = JSON.stringify(replay.items);
    expect(joined).not.toMatch(/HumanDecision taken|effective GO granted/i);
    expect(joined).toMatch(/NON-AUTHORITATIVE|RECOMMENDATION/i);
    session.close();
  });

  it("MODELED-S02-D — recompaction preserves prior provenance/governing lineage", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-s02-m-d-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "nora-session.sqlite");
    const session = new ProductSqliteSession({
      projectId: "prj:s02-m-d",
      dbPath,
      sessionKey: "f1-default",
    });
    await session.addItems([
      userTextItem("Useful premise"),
      assistantTextItem("Acknowledged"),
      userTextItem("noise"),
      assistantTextItem("noise reply"),
      userTextItem("governing premise: STOP before merge"),
      assistantTextItem("Will not merge"),
      userTextItem("More filler"),
      assistantTextItem("More filler reply"),
    ]);
    const rev = { lpsId: "lps:m-d", lpsVersion: 1 };
    const first = await applyCompactionIfNeeded({
      session,
      truthCRevision: rev,
      policy: POLICY,
      nowIso: NOW,
    });
    expect(first.applied).toBe(true);
    expect(first.record!.summaryText).toMatch(/STOP before merge/i);
    const firstProvLen = first.record!.provenance.length;
    expect(first.record!.loss.occurred).toBe(true);

    for (let i = 0; i < 5; i++) {
      await session.addItems([
        userTextItem(`wave2-${i}-${"q".repeat(35)}`),
        assistantTextItem(`wave2-reply-${i}`),
      ]);
    }
    const second = await applyCompactionIfNeeded({
      session,
      truthCRevision: rev,
      policy: POLICY,
      nowIso: NOW,
    });
    expect(second.applied).toBe(true);
    expect(second.record!.generation).toBe(2);
    expect(second.record!.loss.occurred).toBe(true);
    expect(
      second.record!.provenance.filter((p) => p.kind === "inherited").length,
    ).toBe(firstProvLen);
    expect(
      second.record!.provenance.some((p) => p.kind === "raw"),
    ).toBe(true);
    expect(second.record!.summaryText).toMatch(/STOP before merge|inherited-compaction/i);
    expect(second.record!.summaryText).toMatch(/NON-AUTHORITATIVE/i);
    session.close();
  });

  it("MODELED-S02-E — stale→recompaction does not resurrect R1 (CORR-02)", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-s02-m-e-"));
    tempDirs.push(dir);
    const productDb = path.join(dir, "oa-product.sqlite");
    const sessionDb = path.join(dir, "nora-session.sqlite");
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";

    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({
      productDbPath: productDb,
      auditMode: "noop",
    });
    const truthMarker = "S02-CORR02-TRUTH-R2-MARKER";
    const created = await runtime.createProject({
      name: "S02 CORR-02 stale recompaction",
      objective: "R1 objective baseline",
      context: "Cross-revision stale lineage",
      criticality: "STANDARD",
      constraints: ["LECTURE SEULE"],
      shortReference: "S02E",
      idempotencyKey: `s02-e-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;
    const v1 = await runtime.getProject(projectId);
    expect(v1.ok).toBe(true);
    if (!v1.ok) return;
    const rev1 = {
      lpsId: v1.livingState.id,
      lpsVersion: v1.livingState.version,
    };

    const session = new ProductSqliteSession({
      projectId,
      dbPath: sessionDb,
      sessionKey: "f1-default",
    });
    await session.addItems([
      userTextItem("Useful premise staging first"),
      assistantTextItem("Acknowledged"),
      userTextItem("STALE-R1-CONTEXT-DO-NOT-RESURRECT " + "z".repeat(40)),
      assistantTextItem("noted r1"),
      userTextItem("governing premise: STOP-R1-BEFORE-MERGE"),
      assistantTextItem("Will not merge"),
      userTextItem("More filler " + "y".repeat(40)),
      assistantTextItem("More filler reply"),
    ]);
    const first = await applyCompactionIfNeeded({
      session,
      truthCRevision: rev1,
      policy: POLICY,
      nowIso: NOW,
    });
    expect(first.applied).toBe(true);
    expect(first.record!.summaryText).toMatch(/STALE-R1-CONTEXT-DO-NOT-RESURRECT/);
    expect(first.record!.summaryText).toMatch(/STOP-R1-BEFORE-MERGE/);

    // Immediate stale after Truth C bump
    const oa = runtime.oa!;
    const appended = await oa.projectServices.appendLivingProjectStateVersion.execute(
      {
        projectId,
        expectedVersion: rev1.lpsVersion,
        objective: truthMarker,
        createdBy: {
          actorId: "actor:s02e",
          role: "project_owner",
          displayName: "S02E",
          authorityLevel: "N3",
        },
        lpsVersionId: `${rev1.lpsId}-v2`,
      },
    );
    expect(appended.ok).toBe(true);
    const v2 = await runtime.getProject(projectId);
    expect(v2.ok).toBe(true);
    if (!v2.ok) return;
    expect(v2.livingState.version).toBeGreaterThan(rev1.lpsVersion);
    const rev2 = {
      lpsId: v2.livingState.id,
      lpsVersion: v2.livingState.version,
    };

    const immediate = resolveReplayItems({
      loaded: await loadSessionRows(session),
      currentTruthCRevision: rev2,
    });
    expect(immediate.state).toBe("stale_invalidated");
    expect(JSON.stringify(immediate.items)).not.toMatch(
      /STALE-R1-CONTEXT-DO-NOT-RESURRECT/,
    );

    // Append enough new raw B under R2 to trigger recompaction on product path
    for (let i = 0; i < 8; i++) {
      await session.addItems([
        userTextItem(`r2-only-turn-${i}-${"w".repeat(35)}`),
        assistantTextItem(`r2-reply-${i}`),
      ]);
    }
    session.close();

    const capturing = new CapturingRoundFakeProvider({
      scripted: ["[TEST/FAKE] Resuming after R2 recompaction."],
    });
    const result = await orchestrateProjectAssistantTurn({
      projectId,
      content: "Continue under R2",
      provider: capturing,
      sessionDbPath: sessionDb,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.cognitiveRuntime).toBe("agents");
    expect(result.stalePriorInvalidated).toBe(true);
    expect(result.memoryBCompactionState).toMatch(/compacted/);
    expect(result.ephemeralNotice).toMatch(/n'a pas été reconduit|invalidé/i);

    const captured = capturing.capturedText();
    expect(captured).toContain(truthMarker);
    expect(captured).not.toMatch(/STALE-R1-CONTEXT-DO-NOT-RESURRECT/);
    expect(captured).not.toMatch(/STOP-R1-BEFORE-MERGE/);
    expect(captured).not.toMatch(/inherited-compaction/i);
    expect(captured).toMatch(/STALE PRIOR EXCLUDED|not carried into this compaction/i);

    const sessionAfter = new ProductSqliteSession({
      projectId,
      dbPath: sessionDb,
      sessionKey: "f1-default",
    });
    const loaded = await loadSessionRows(sessionAfter);
    expect(loaded.compaction).not.toBeNull();
    expect(loaded.compaction!.truthCRevision.lpsVersion).toBe(rev2.lpsVersion);
    expect(loaded.compaction!.summaryText).not.toMatch(
      /STALE-R1-CONTEXT-DO-NOT-RESURRECT/,
    );
    expect(loaded.compaction!.summaryText).not.toMatch(/STOP-R1-BEFORE-MERGE/);
    expect(loaded.compaction!.summaryText).not.toMatch(/inherited-compaction/i);
    expect(loaded.compaction!.loss.occurred).toBe(true);
    expect(loaded.compaction!.invalidatedPriorCompaction?.invalidatedBecause).toBe(
      "truth_c_revision_changed",
    );
    expect(
      loaded.compaction!.provenance.every((p) => p.kind === "raw"),
    ).toBe(true);
    const coverage = computeRawProvenanceCoverage({
      removedSourceSeqs: loaded.compaction!.provenance
        .filter((p) => p.kind === "raw")
        .map((p) => p.sourceSeq!)
        .filter((s) => typeof s === "number"),
      provenance: loaded.compaction!.provenance,
    });
    expect(coverage.orphanedRemovedSourceCount).toBe(0);
    expect(loaded.compaction!.summaryText).not.toMatch(
      /HumanDecision taken|effective GO granted/i,
    );
    sessionAfter.close();
  });
});
