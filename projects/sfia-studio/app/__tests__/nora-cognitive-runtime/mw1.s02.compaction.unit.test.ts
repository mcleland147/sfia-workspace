/** @vitest-environment node */
/**
 * MW1-S02 / CORR-01 — UNIT proofs for governed Memory B compaction.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  COMPACTION_COGNITIVE_DISCLOSURE,
  COMPACTION_PILOTE_NOTICE,
  DEFAULT_COMPACTION_POLICY,
  ProductSqliteSession,
  applyCompactionIfNeeded,
  buildCompactionRecord,
  computeRawProvenanceCoverage,
  loadSessionRows,
  parseStoredCompactionRecord,
  partitionMemoryBForCompaction,
  prepareMemoryBForTurn,
  resolveReplayItems,
  shouldCompactItemCount,
  staleDisclosureMatchesReplaySemantics,
  userTextItem,
  assistantTextItem,
} from "@/lib/nora-cognitive-runtime";

const tempDirs: string[] = [];
const REV = { lpsId: "lps:u1", lpsVersion: 1 };
const POLICY = { itemThreshold: 4, keepRecentCount: 2, maxSummaryChars: 800 };
const NOW = "2026-08-31T08:00:00.000Z";

function tempDb(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-s02-u-"));
  tempDirs.push(dir);
  return path.join(dir, "nora-session.sqlite");
}

async function seedSession(
  count: number,
  projectId = "prj:s02-u",
): Promise<{ session: ProductSqliteSession; dbPath: string }> {
  const dbPath = tempDb();
  const session = new ProductSqliteSession({
    projectId,
    dbPath,
    sessionKey: "f1-default",
  });
  const items = Array.from({ length: count }, (_, i) =>
    i % 2 === 0
      ? userTextItem(`noise-turn-${i}-${"x".repeat(40)}`)
      : assistantTextItem(`reply-${i}`),
  );
  await session.addItems(items);
  return { session, dbPath };
}

afterEach(() => {
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("MW1-S02 — compaction UNIT", () => {
  it("U01 — below threshold → no compaction", async () => {
    const { session } = await seedSession(3);
    expect(shouldCompactItemCount(3, POLICY)).toBe(false);
    const r = await applyCompactionIfNeeded({
      session,
      truthCRevision: REV,
      policy: POLICY,
      nowIso: NOW,
    });
    expect(r.applied).toBe(false);
    const loaded = await loadSessionRows(session);
    expect(loaded.compaction).toBeNull();
    expect(loaded.conversation.length).toBe(3);
    session.close();
  });

  it("U02/U03 — above threshold → compaction reduces replay footprint", async () => {
    const { session } = await seedSession(6);
    const before = (await session.getItems()).length;
    expect(before).toBe(6);
    const r = await applyCompactionIfNeeded({
      session,
      truthCRevision: REV,
      policy: POLICY,
      nowIso: NOW,
    });
    expect(r.applied).toBe(true);
    expect(r.record?.provenance.length).toBeGreaterThan(0);
    expect(r.record?.loss.occurred).toBe(true);
    const replay = resolveReplayItems({
      loaded: await loadSessionRows(session),
      currentTruthCRevision: REV,
    });
    expect(replay.items.length).toBeLessThan(before);
    expect(replay.state).toBe("compacted_with_loss");
    session.close();
  });

  it("U04/U05 — provenance covers exact C + honest loss", () => {
    const items = Array.from({ length: 5 }, (_, i) => ({
      seq: i,
      item: userTextItem(`payload-${i}-${"y".repeat(40)}`),
    }));
    // Caller already partitioned — record must cover all 5, not re-slice.
    const record = buildCompactionRecord({
      itemsToCompact: items,
      truthCRevision: REV,
      policy: POLICY,
      nowIso: NOW,
    });
    expect(record.provenance.length).toBe(5);
    const coverage = computeRawProvenanceCoverage({
      removedSourceSeqs: [0, 1, 2, 3, 4],
      provenance: record.provenance,
    });
    expect(coverage.orphanedRemovedSourceCount).toBe(0);
    expect(coverage.duplicateCoverageCount).toBe(0);
    expect(record.provenance[0]?.contentHash).toMatch(/^[a-f0-9]{16}$/);
    expect(record.loss.occurred).toBe(true);
    expect(record.summaryText).toMatch(/NOT EXHAUSTIVE/i);
    expect(record.nonAuthoritative).toBe(true);
  });

  it("U06 — project/session isolation", async () => {
    const dbPath = tempDb();
    const a = new ProductSqliteSession({
      projectId: "prj:a",
      dbPath,
      sessionKey: "f1-default",
    });
    const b = new ProductSqliteSession({
      projectId: "prj:b",
      dbPath,
      sessionKey: "f1-default",
    });
    await a.addItems([userTextItem("only-a")]);
    await b.addItems([userTextItem("only-b")]);
    const rowsA = await loadSessionRows(a);
    expect(rowsA.conversation.length).toBe(1);
    const rowsB = await loadSessionRows(b);
    expect(rowsB.conversation.length).toBe(1);
    a.close();
    b.close();
  });

  it("U07 — atomic replace rolls back on failure", async () => {
    const { session } = await seedSession(6);
    session.simulateNextReplaceFailure();
    await expect(
      applyCompactionIfNeeded({
        session,
        truthCRevision: REV,
        policy: POLICY,
        nowIso: NOW,
      }),
    ).rejects.toThrow(/SIMULATED_FAILURE/);
    const loaded = await loadSessionRows(session);
    expect(loaded.compaction).toBeNull();
    expect(loaded.conversation.length).toBe(6);
    session.close();
  });

  it("U08/U09 — stale compaction not replayed as current", async () => {
    const { session } = await seedSession(6);
    await applyCompactionIfNeeded({
      session,
      truthCRevision: REV,
      policy: POLICY,
      nowIso: NOW,
    });
    const stale = resolveReplayItems({
      loaded: await loadSessionRows(session),
      currentTruthCRevision: { lpsId: REV.lpsId, lpsVersion: 2 },
    });
    expect(stale.state).toBe("stale_invalidated");
    expect(
      stale.items.some((i) =>
        JSON.stringify(i).includes("MW1-S02 COMPACTED"),
      ),
    ).toBe(false);
    // Recent raw may still be present
    expect(stale.items.length).toBeGreaterThan(0);
    session.close();
  });

  it("U10 — summary is non-authoritative", () => {
    const record = buildCompactionRecord({
      itemsToCompact: [{ seq: 0, item: userTextItem("chat only") }],
      truthCRevision: REV,
      policy: DEFAULT_COMPACTION_POLICY,
      nowIso: NOW,
    });
    expect(record.summaryText).toMatch(/NON-AUTHORITATIVE/i);
    expect(record.summaryText).not.toMatch(/HumanDecision taken/i);
  });

  it("U11 — governing marker retained or explicit loss", () => {
    const record = buildCompactionRecord({
      itemsToCompact: [
        { seq: 0, item: userTextItem("ordinary") },
        { seq: 1, item: userTextItem("STOP — wait for HumanDecision") },
      ],
      truthCRevision: REV,
      policy: { ...DEFAULT_COMPACTION_POLICY, keepRecentCount: 0 },
      nowIso: NOW,
    });
    expect(
      record.loss.governingContextRetained ||
        record.loss.governingContextExplicitLoss,
    ).toBe(true);
    expect(record.loss.occurred).toBe(true);
  });

  it("U12 — compaction marker filtered from raw conversation rows", async () => {
    const { session } = await seedSession(6);
    await applyCompactionIfNeeded({
      session,
      truthCRevision: REV,
      policy: POLICY,
      nowIso: NOW,
    });
    const rows = session.listItemRows();
    const parsed = parseStoredCompactionRecord(
      JSON.parse(rows[0]!.item_json),
    );
    expect(parsed?.type).toBe("sfia_memory_b_compaction");
    const details = await prepareMemoryBForTurn({
      session,
      truthCRevision: REV,
      policy: POLICY,
      nowIso: NOW,
    });
    expect(details.replayItemCount).toBeLessThan(6);
    session.close();
  });

  it("U13 — exact partition conservation 8/2 (CORR partition)", async () => {
    const dbPath = tempDb();
    const session = new ProductSqliteSession({
      projectId: "prj:s02-u13",
      dbPath,
      sessionKey: "f1-default",
    });
    const texts = [
      "Useful premise",
      "Acknowledged",
      "noise",
      "noise reply",
      "governing premise: STOP before merge",
      "Will not merge",
      "More filler",
      "More filler reply",
    ];
    for (let i = 0; i < texts.length; i++) {
      await session.addItems([
        i % 2 === 0 ? userTextItem(texts[i]!) : assistantTextItem(texts[i]!),
      ]);
    }
    const loadedBefore = await loadSessionRows(session);
    expect(loadedBefore.conversation.length).toBe(8);
    const { toCompact, recent } = partitionMemoryBForCompaction(
      loadedBefore.conversation,
      2,
    );
    expect(toCompact.map((r) => r.seq)).toEqual(
      loadedBefore.conversation.slice(0, 6).map((r) => r.seq),
    );
    expect(recent.map((r) => r.seq)).toEqual(
      loadedBefore.conversation.slice(6).map((r) => r.seq),
    );
    // C ∩ R = ∅, C ∪ R = S
    const cSet = new Set(toCompact.map((r) => r.seq));
    const rSet = new Set(recent.map((r) => r.seq));
    for (const s of cSet) expect(rSet.has(s)).toBe(false);
    expect([...cSet, ...rSet].sort((a, b) => a - b)).toEqual(
      loadedBefore.conversation.map((r) => r.seq),
    );

    const result = await applyCompactionIfNeeded({
      session,
      truthCRevision: REV,
      policy: { itemThreshold: 4, keepRecentCount: 2, maxSummaryChars: 1200 },
      nowIso: NOW,
    });
    expect(result.applied).toBe(true);
    const coverage = computeRawProvenanceCoverage({
      removedSourceSeqs: toCompact.map((r) => r.seq),
      provenance: result.record!.provenance,
    });
    expect(coverage.orphanedRemovedSourceCount).toBe(0);
    expect(coverage.duplicateCoverageCount).toBe(0);
    expect(coverage.provenanceCoveredSourceCount).toBe(6);
    const loaded = await loadSessionRows(session);
    expect(loaded.conversation.length).toBe(2);
    session.close();
  });

  it("U14 — governing STOP at compacted seq accounted (CORR)", async () => {
    const dbPath = tempDb();
    const session = new ProductSqliteSession({
      projectId: "prj:s02-u14",
      dbPath,
      sessionKey: "f1-default",
    });
    const items = [
      userTextItem("Useful premise"),
      assistantTextItem("Acknowledged"),
      userTextItem("noise"),
      assistantTextItem("noise reply"),
      userTextItem("governing premise: STOP before merge"),
      assistantTextItem("Will not merge"),
      userTextItem("More filler"),
      assistantTextItem("More filler reply"),
    ];
    await session.addItems(items);
    const before = await loadSessionRows(session);
    const stopRow = before.conversation[4]!;
    expect(stopRow).toBeDefined();
    const r = await applyCompactionIfNeeded({
      session,
      truthCRevision: REV,
      policy: { itemThreshold: 4, keepRecentCount: 2, maxSummaryChars: 1200 },
      nowIso: NOW,
    });
    expect(r.applied).toBe(true);
    const stopCovered = r.record!.provenance.some(
      (p) =>
        p.kind === "raw" &&
        (p.sourceSeq === stopRow.seq ||
          /STOP before merge/i.test(p.excerpt)),
    );
    expect(stopCovered).toBe(true);
    expect(r.record!.summaryText).toMatch(/STOP before merge/i);
    expect(
      r.record!.loss.governingContextRetained ||
        r.record!.loss.governingContextExplicitLoss,
    ).toBe(true);
    expect(r.record!.summaryText).not.toMatch(/HumanDecision taken/i);
    session.close();
  });

  it("U15 — zero orphaned removed seqs", async () => {
    const { session } = await seedSession(8);
    const before = await loadSessionRows(session);
    const { toCompact } = partitionMemoryBForCompaction(
      before.conversation,
      POLICY.keepRecentCount,
    );
    const r = await applyCompactionIfNeeded({
      session,
      truthCRevision: REV,
      policy: POLICY,
      nowIso: NOW,
    });
    const coverage = computeRawProvenanceCoverage({
      removedSourceSeqs: toCompact.map((x) => x.seq),
      provenance: r.record!.provenance,
    });
    expect(coverage.orphanedRemovedSourceCount).toBe(0);
    session.close();
  });

  it("U16/U17 — double compaction preserves provenance + loss monotonic", async () => {
    const { session } = await seedSession(6);
    const first = await applyCompactionIfNeeded({
      session,
      truthCRevision: REV,
      policy: POLICY,
      nowIso: NOW,
    });
    expect(first.applied).toBe(true);
    expect(first.record!.loss.occurred).toBe(true);
    const firstProv = first.record!.provenance.length;
    const firstGen = first.record!.generation;

    for (let i = 0; i < 5; i++) {
      await session.addItems([
        userTextItem(`post-compact-${i}-${"z".repeat(30)}`),
      ]);
    }
    const second = await applyCompactionIfNeeded({
      session,
      truthCRevision: REV,
      policy: POLICY,
      nowIso: NOW,
    });
    expect(second.applied).toBe(true);
    expect(second.record!.generation).toBe(firstGen + 1);
    expect(second.record!.loss.occurred).toBe(true); // monotonic
    expect(
      second.record!.provenance.some((p) => p.kind === "inherited"),
    ).toBe(true);
    expect(
      second.record!.provenance.some((p) => p.kind === "raw"),
    ).toBe(true);
    expect(second.record!.provenance.length).toBeGreaterThan(firstProv);
    expect(second.record!.summaryText.length).toBeLessThanOrEqual(
      POLICY.maxSummaryChars + 20,
    );
    session.close();
  });

  it("U18 — long source item => loss=true (LOSS-S02-A)", () => {
    const long = `premise-${"A".repeat(520)}`;
    const record = buildCompactionRecord({
      itemsToCompact: [{ seq: 0, item: userTextItem(long) }],
      truthCRevision: REV,
      policy: POLICY,
      nowIso: NOW,
    });
    expect(record.loss.occurred).toBe(true);
    expect(record.summaryText.includes(long)).toBe(false);
  });

  it("U19 — maxSummaryChars truncation => loss=true (LOSS-S02-B)", () => {
    const items = Array.from({ length: 20 }, (_, i) => ({
      seq: i,
      item: userTextItem(
        `governing premise STOP item-${i} ${"detail ".repeat(40)}`,
      ),
    }));
    const record = buildCompactionRecord({
      itemsToCompact: items,
      truthCRevision: REV,
      policy: { ...POLICY, maxSummaryChars: 300 },
      nowIso: NOW,
    });
    expect(record.summaryText).toMatch(/\[truncated\]/);
    expect(record.loss.occurred).toBe(true);
  });

  it("U20 — stale disclosure matches raw-recent replay semantics", () => {
    expect(
      staleDisclosureMatchesReplaySemantics({
        cognitiveText: COMPACTION_COGNITIVE_DISCLOSURE.stale_invalidated,
        piloteText: COMPACTION_PILOTE_NOTICE.stale_invalidated,
        recentRawReplayed: true,
      }),
    ).toBe(true);
    expect(
      staleDisclosureMatchesReplaySemantics({
        cognitiveText:
          "Use only current message + current Truth C.",
        piloteText:
          "Ce tour s'appuie sur Truth C actuel uniquement.",
        recentRawReplayed: true,
      }),
    ).toBe(false);
  });

  it("U21 — same revision prior inheritance still works (CORR-02)", async () => {
    const { session } = await seedSession(6);
    const first = await applyCompactionIfNeeded({
      session,
      truthCRevision: REV,
      policy: POLICY,
      nowIso: NOW,
    });
    expect(first.applied).toBe(true);
    expect(first.stalePriorInvalidated).toBe(false);
    const marker = "SAME-REV-MARKER-KEEP";
    for (let i = 0; i < 5; i++) {
      await session.addItems([
        userTextItem(
          i === 0 ? `${marker} ${"z".repeat(30)}` : `post-${i}-${"z".repeat(30)}`,
        ),
      ]);
    }
    const second = await applyCompactionIfNeeded({
      session,
      truthCRevision: REV,
      policy: POLICY,
      nowIso: NOW,
    });
    expect(second.applied).toBe(true);
    expect(second.stalePriorInvalidated).toBe(false);
    expect(second.record!.provenance.some((p) => p.kind === "inherited")).toBe(
      true,
    );
    expect(second.record!.summaryText).toMatch(/inherited-compaction/i);
    expect(second.record!.invalidatedPriorCompaction).toBeUndefined();
    session.close();
  });

  it("U22 — revision mismatch blocks semantic inheritance (CORR-02)", async () => {
    const { session } = await seedSession(6);
    const r1 = await applyCompactionIfNeeded({
      session,
      truthCRevision: REV,
      policy: POLICY,
      nowIso: NOW,
    });
    const r1Summary = r1.record!.summaryText;
    expect(r1Summary).toMatch(/MW1-S02 COMPACTED/);
    for (let i = 0; i < 5; i++) {
      await session.addItems([
        userTextItem(`r2-turn-${i}-${"q".repeat(35)}`),
      ]);
    }
    const r2 = await applyCompactionIfNeeded({
      session,
      truthCRevision: { lpsId: REV.lpsId, lpsVersion: 2 },
      policy: POLICY,
      nowIso: NOW,
    });
    expect(r2.applied).toBe(true);
    expect(r2.stalePriorInvalidated).toBe(true);
    expect(r2.record!.truthCRevision.lpsVersion).toBe(2);
    // Shared header may remain; unique R1 semantic body must not.
    expect(r1Summary).toMatch(/noise-turn-0/);
    expect(r2.record!.summaryText).not.toMatch(/noise-turn-0/);
    expect(r2.record!.summaryText).not.toMatch(/inherited-compaction/i);
    expect(r2.record!.summaryText).toMatch(/stale-prior-excluded/i);
    expect(r2.record!.provenance.every((p) => p.kind === "raw")).toBe(true);
    expect(r2.record!.invalidatedPriorCompaction?.invalidatedBecause).toBe(
      "truth_c_revision_changed",
    );
    expect(r2.record!.invalidatedPriorCompaction?.summaryHash).toBeTruthy();
    // Non-cognitive meta must not leak summary text
    expect(
      JSON.stringify(r2.record!.invalidatedPriorCompaction),
    ).not.toMatch(/Retained premises|noise-turn/i);
    session.close();
  });

  it("U23 — stale governing flag not inherited as current (CORR-02)", async () => {
    const dbPath = tempDb();
    const session = new ProductSqliteSession({
      projectId: "prj:s02-u23",
      dbPath,
      sessionKey: "f1-default",
    });
    await session.addItems([
      userTextItem("Useful premise"),
      assistantTextItem("Acknowledged"),
      userTextItem("noise"),
      assistantTextItem("noise reply"),
      userTextItem("governing premise: STOP-R1-BEFORE-MERGE"),
      assistantTextItem("Will not merge"),
      userTextItem("More filler"),
      assistantTextItem("More filler reply"),
    ]);
    await applyCompactionIfNeeded({
      session,
      truthCRevision: REV,
      policy: { itemThreshold: 4, keepRecentCount: 2, maxSummaryChars: 1200 },
      nowIso: NOW,
    });
    const afterR1 = await loadSessionRows(session);
    expect(afterR1.compaction!.summaryText).toMatch(/STOP-R1-BEFORE-MERGE/i);
    expect(afterR1.compaction!.loss.governingContextRetained).toBe(true);

    for (let i = 0; i < 5; i++) {
      await session.addItems([
        userTextItem(`only-r2-content-${i}-${"w".repeat(30)}`),
      ]);
    }
    const r2 = await applyCompactionIfNeeded({
      session,
      truthCRevision: { lpsId: REV.lpsId, lpsVersion: 2 },
      policy: POLICY,
      nowIso: NOW,
    });
    expect(r2.stalePriorInvalidated).toBe(true);
    expect(r2.record!.summaryText).not.toMatch(/STOP-R1-BEFORE-MERGE/i);
    // No current governing in newly compacted R2 raw items → retained only if present in C
    expect(r2.record!.loss.governingContextRetained).toBe(true); // vacuous: none in dropped R2 set that need retention — wait
    // Actually R2 compacted items are only-r2-content without governing markers.
    // governingInDropped=false → governingRetainedThisGen=true (vacuous).
    // Spec: must NOT claim stale STOP is currently retained.
    // Our vacuous true means "no governing in C that we failed to retain" — OK.
    // But governingContextExplicitLoss should signal stale governing was invalidated.
    expect(r2.record!.loss.governingContextExplicitLoss).toBe(true);
    expect(r2.record!.summaryText).not.toMatch(/\[governing-context\].*STOP-R1/i);
    session.close();
  });

  it("U24 — stale loss/invalidation remains honest (CORR-02)", async () => {
    const { session } = await seedSession(6);
    await applyCompactionIfNeeded({
      session,
      truthCRevision: REV,
      policy: POLICY,
      nowIso: NOW,
    });
    for (let i = 0; i < 5; i++) {
      await session.addItems([userTextItem(`r2-${i}-${"x".repeat(30)}`)]);
    }
    const r2 = await applyCompactionIfNeeded({
      session,
      truthCRevision: { lpsId: REV.lpsId, lpsVersion: 2 },
      policy: POLICY,
      nowIso: NOW,
    });
    expect(r2.record!.loss.occurred).toBe(true);
    expect(r2.record!.invalidatedPriorCompaction).toBeDefined();
    expect(r2.record!.summaryText).not.toMatch(/without signaled material loss/i);
    const details = await prepareMemoryBForTurn({
      session,
      truthCRevision: { lpsId: REV.lpsId, lpsVersion: 2 },
      policy: POLICY,
      nowIso: NOW,
    });
    expect(details.stalePriorInvalidated).toBe(true);
    expect(details.state).toBe("compacted_with_loss");
    session.close();
  });

  it("U25 — current raw provenance independent from stale inherited (CORR-02)", async () => {
    const { session } = await seedSession(6);
    await applyCompactionIfNeeded({
      session,
      truthCRevision: REV,
      policy: POLICY,
      nowIso: NOW,
    });
    for (let i = 0; i < 5; i++) {
      await session.addItems([userTextItem(`nr-${i}-${"y".repeat(30)}`)]);
    }
    const before = await loadSessionRows(session);
    const { toCompact } = partitionMemoryBForCompaction(
      before.conversation,
      POLICY.keepRecentCount,
    );
    const r2 = await applyCompactionIfNeeded({
      session,
      truthCRevision: { lpsId: REV.lpsId, lpsVersion: 2 },
      policy: POLICY,
      nowIso: NOW,
    });
    const coverage = computeRawProvenanceCoverage({
      removedSourceSeqs: toCompact.map((r) => r.seq),
      provenance: r2.record!.provenance,
    });
    expect(coverage.orphanedRemovedSourceCount).toBe(0);
    expect(coverage.duplicateCoverageCount).toBe(0);
    expect(coverage.provenanceCoveredSourceCount).toBe(toCompact.length);
    expect(r2.record!.provenance.every((p) => p.kind === "raw")).toBe(true);
    session.close();
  });
});
