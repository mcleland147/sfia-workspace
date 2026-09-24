/**
 * CYCLE JOURNAL & PILOT CONVERSATION CONTINUITY — deterministic proofs.
 * Journal ≠ Truth C / HD / Evidence / Recommendation authority.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { ProductSqliteSession } from "@/lib/nora-cognitive-runtime/productSqliteSession";
import {
  appendPilotTranscriptTurn,
  buildCycleJournalCompactProjection,
  listCycleJournalEntries,
  listPilotTranscriptTurns,
  materializeCycleJournalDelta,
  retrievePilotTurnsByRefs,
} from "@/lib/nora-cognitive-runtime/cycleJournalStore";
import {
  formatCycleJournalCompactForPrompt,
  retrieveJournalEntrySourceExcerpts,
} from "@/lib/nora-cognitive-runtime/cycleJournalPrompt";
import {
  isNoraJournalDeltaStructured,
  normalizeNoraProductTurnStructuredOutput,
  NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";

const dirs: string[] = [];

function tmpSession(projectId: string, sessionKey = "f1-default") {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-cj-"));
  dirs.push(dir);
  const dbPath = path.join(dir, "session.sqlite");
  return new ProductSqliteSession({ projectId, dbPath, sessionKey });
}

afterEach(() => {
  while (dirs.length) {
    const d = dirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

const HOLD_GUIDANCE = {
  kind: "HOLD" as const,
  scope: "BLOCKER_RESOLUTION" as const,
  statement: "Pause.",
  rationale: null,
};

describe("cycleJournal schema + product turn journalDelta", () => {
  it("requires journalDelta on Agents output type schema", () => {
    const required = NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE.schema
      .required as string[];
    expect(required).toContain("journalDelta");
  });

  it("validates journalDelta structured ops", () => {
    expect(
      isNoraJournalDeltaStructured({
        operations: [
          {
            op: "CREATE",
            targetEntryId: null,
            title: "Scope",
            currentSummary: "Clarify scope",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      }),
    ).toBe(true);
    expect(
      isNoraJournalDeltaStructured({
        operations: [{ op: "DELETE", targetEntryId: null }],
      }),
    ).toBe(false);
  });

  it("invalid journalDelta fails closed to null without killing narrative", () => {
    const coherent = normalizeNoraProductTurnStructuredOutput({
      narrative: "Hello Pilote",
      preCycleRoutingAssessment: {
        routingBlockingUnknownPresent: false,
        candidateCycleSupportable: false,
        remainingUnknownsAreCycleOwned: false,
        multiplePlausibleCycles: false,
        activeCycleAlreadyCoversWork: false,
      },
      lifecycleRecommendation: null,
      activeCycleWork: null,
      conversationGuidance: HOLD_GUIDANCE,
      journalDelta: { operations: [{ op: "NOPE" }] },
    });
    expect(coherent).not.toBeNull();
    expect(coherent!.narrative).toBe("Hello Pilote");
    expect(coherent!.journalDelta).toBeNull();
  });
});

describe("pilot transcript restart-safe", () => {
  it("persists and rehydrates across session reopen", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-cj-rh-"));
    dirs.push(dir);
    const dbPath = path.join(dir, "session.sqlite");
    const s1 = new ProductSqliteSession({
      projectId: "proj-a",
      dbPath,
      sessionKey: "f1-default",
    });
    const u = appendPilotTranscriptTurn(s1, {
      role: "user",
      content: "Bonjour",
      logicalTurnId: "ltu:1",
    });
    appendPilotTranscriptTurn(s1, {
      role: "assistant",
      content: "Salut",
      logicalTurnId: "ltu:1",
    });
    s1.close();

    const s2 = new ProductSqliteSession({
      projectId: "proj-a",
      dbPath,
      sessionKey: "f1-default",
    });
    const turns = listPilotTranscriptTurns(s2);
    expect(turns).toHaveLength(2);
    expect(turns[0]!.turnId).toBe(u.turnId);
    expect(turns[0]!.content).toBe("Bonjour");
    expect(turns[1]!.content).toBe("Salut");
    s2.close();
  });

  it("does not duplicate on logical-turn retry", () => {
    const s = tmpSession("proj-retry");
    appendPilotTranscriptTurn(s, {
      role: "user",
      content: "once",
      logicalTurnId: "ltu:r",
    });
    appendPilotTranscriptTurn(s, {
      role: "user",
      content: "dup",
      logicalTurnId: "ltu:r",
    });
    expect(listPilotTranscriptTurns(s)).toHaveLength(1);
    s.close();
  });
});

describe("cycle journal materialize", () => {
  it("CREATE / UPDATE / ARCHIVE with source refs", () => {
    const s = tmpSession("proj-j");
    const t1 = appendPilotTranscriptTurn(s, {
      role: "user",
      content: "scope A",
      logicalTurnId: "ltu:a",
    });
    const created = materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: "cyc:1",
      logicalTurnId: "ltu:a",
      boundSourceTurnIds: [t1.turnId],
      delta: {
        operations: [
          {
            op: "CREATE",
            targetEntryId: null,
            title: "Périmètre",
            currentSummary: "Clarifier le périmètre",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    expect(created.applied).toBe(1);
    const entries = listCycleJournalEntries(s, "cyc:1");
    expect(entries).toHaveLength(1);
    const id = entries[0]!.journalEntryId;
    expect(entries[0]!.sourceTurnRefs).toContain(t1.turnId);

    const t2 = appendPilotTranscriptTurn(s, {
      role: "user",
      content: "scope again later",
      logicalTurnId: "ltu:b",
    });
    materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: "cyc:1",
      logicalTurnId: "ltu:b",
      boundSourceTurnIds: [t2.turnId],
      delta: {
        operations: [
          {
            op: "UPDATE",
            targetEntryId: id,
            title: null,
            currentSummary: "Périmètre raffiné",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    const updated = listCycleJournalEntries(s, "cyc:1")[0]!;
    expect(updated.journalEntryId).toBe(id);
    expect(updated.currentSummary).toBe("Périmètre raffiné");
    expect(updated.sourceTurnRefs).toEqual(
      expect.arrayContaining([t1.turnId, t2.turnId]),
    );

    materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: "cyc:1",
      logicalTurnId: "ltu:c",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "ARCHIVE",
            targetEntryId: id,
            title: null,
            currentSummary: null,
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    expect(listCycleJournalEntries(s, "cyc:1")[0]!.status).toBe("archived");
    s.close();
  });

  it("MERGE / SPLIT retain lineage; no silent delete", () => {
    const s = tmpSession("proj-ms");
    materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: "cyc:1",
      logicalTurnId: "ltu:1",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "CREATE",
            targetEntryId: null,
            title: "A",
            currentSummary: "a",
            sourceTurnRefs: ["pt:1"],
            relatedEntryIds: [],
          },
          {
            op: "CREATE",
            targetEntryId: null,
            title: "B",
            currentSummary: "b",
            sourceTurnRefs: ["pt:2"],
            relatedEntryIds: [],
          },
        ],
      },
    });
    const [a, b] = listCycleJournalEntries(s, "cyc:1");
    materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: "cyc:1",
      logicalTurnId: "ltu:2",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "MERGE",
            targetEntryId: a!.journalEntryId,
            title: "A+B",
            currentSummary: "merged",
            sourceTurnRefs: [],
            relatedEntryIds: [b!.journalEntryId],
          },
        ],
      },
    });
    const afterMerge = listCycleJournalEntries(s, "cyc:1");
    expect(afterMerge).toHaveLength(2);
    expect(
      afterMerge.find((e) => e.journalEntryId === b!.journalEntryId)?.status,
    ).toBe("merged");
    expect(
      afterMerge.find((e) => e.journalEntryId === a!.journalEntryId)?.title,
    ).toBe("A+B");

    materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: "cyc:1",
      logicalTurnId: "ltu:3",
      boundSourceTurnIds: ["pt:3"],
      delta: {
        operations: [
          {
            op: "SPLIT",
            targetEntryId: a!.journalEntryId,
            title: "A suite",
            currentSummary: "split child",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    const afterSplit = listCycleJournalEntries(s, "cyc:1");
    expect(afterSplit.length).toBeGreaterThanOrEqual(3);
    expect(
      afterSplit.find((e) => e.journalEntryId === a!.journalEntryId)?.status,
    ).toBe("split");
    const child = afterSplit.find(
      (e) => e.status === "active" && e.title === "A suite",
    );
    expect(child?.lineageParentIds).toContain(a!.journalEntryId);
    s.close();
  });

  it("retry/idempotence: second apply of same logical turn is no-op", () => {
    const s = tmpSession("proj-idemp");
    const delta = {
      operations: [
        {
          op: "CREATE" as const,
          targetEntryId: null,
          title: "X",
          currentSummary: "x",
          sourceTurnRefs: [] as string[],
          relatedEntryIds: [] as string[],
        },
      ],
    };
    const r1 = materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: "cyc:1",
      logicalTurnId: "ltu:same",
      boundSourceTurnIds: [],
      delta,
    });
    const r2 = materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: "cyc:1",
      logicalTurnId: "ltu:same",
      boundSourceTurnIds: [],
      delta,
    });
    expect(r1.applied).toBe(1);
    expect(r2.applied).toBe(0);
    expect(r2.skippedDuplicate).toBe(1);
    expect(listCycleJournalEntries(s, "cyc:1")).toHaveLength(1);
    s.close();
  });

  it("isolates journals by cycleInstanceId", () => {
    const s = tmpSession("proj-iso");
    materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: "cyc:A",
      logicalTurnId: "ltu:1",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "CREATE",
            targetEntryId: null,
            title: "Only A",
            currentSummary: "a",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    expect(listCycleJournalEntries(s, "cyc:A")).toHaveLength(1);
    expect(listCycleJournalEntries(s, "cyc:B")).toHaveLength(0);
    s.close();
  });
});

describe("journal compact context + targeted retrieval", () => {
  it("builds compact prompt without dumping transcript", () => {
    const s = tmpSession("proj-ctx");
    for (let i = 0; i < 5; i += 1) {
      appendPilotTranscriptTurn(s, {
        role: i % 2 === 0 ? "user" : "assistant",
        content: `turn-${i}-` + "x".repeat(200),
        logicalTurnId: `ltu:${i}`,
      });
    }
    materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: "cyc:1",
      logicalTurnId: "ltu:0",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "CREATE",
            targetEntryId: null,
            title: "Thème",
            currentSummary: "synthèse courte",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    const compact = buildCycleJournalCompactProjection(s, "cyc:1");
    const section = formatCycleJournalCompactForPrompt(compact);
    expect(section).toContain("JOURNAL DU CYCLE");
    expect(section).toContain("Thème");
    expect(section).not.toContain("turn-0-xxx");
    expect(section).toContain("PAS Truth C");
    s.close();
  });

  it("retrieves only referenced source turns", () => {
    const s = tmpSession("proj-ret");
    const turns = [];
    for (let i = 0; i < 10; i += 1) {
      turns.push(
        appendPilotTranscriptTurn(s, {
          role: "user",
          content: `content-${i}`,
          logicalTurnId: `ltu:${i}`,
        }),
      );
    }
    materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: "cyc:1",
      logicalTurnId: "ltu:j",
      boundSourceTurnIds: [turns[2]!.turnId, turns[7]!.turnId],
      delta: {
        operations: [
          {
            op: "CREATE",
            targetEntryId: null,
            title: "Focus",
            currentSummary: "two refs",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    const entry = listCycleJournalEntries(s, "cyc:1")[0]!;
    const excerpts = retrieveJournalEntrySourceExcerpts(
      s,
      entry.journalEntryId,
    );
    expect(excerpts.ok).toBe(true);
    expect(excerpts.excerpts).toHaveLength(2);
    expect(excerpts.excerpts.map((e) => e.content).sort()).toEqual([
      "content-2",
      "content-7",
    ]);
    const byRefs = retrievePilotTurnsByRefs(s, [turns[2]!.turnId]);
    expect(byRefs).toHaveLength(1);
    s.close();
  });
});

describe("long-cycle deterministic ≥100 turns", () => {
  it("keeps subject identity across non-contiguous updates without full rebuild", () => {
    const s = tmpSession("proj-long");
    const t0 = performance.now();
    let subjectId: string | null = null;
    let ops = 0;
    for (let i = 0; i < 110; i += 1) {
      const turn = appendPilotTranscriptTurn(s, {
        role: i % 2 === 0 ? "user" : "assistant",
        content: `msg-${i}`,
        logicalTurnId: `ltu:${i}`,
        cycleInstanceId: "cyc:long",
      });
      ops += 1;
      if (i === 0) {
        const r = materializeCycleJournalDelta({
          session: s,
          cycleInstanceId: "cyc:long",
          logicalTurnId: `ltu:${i}`,
          boundSourceTurnIds: [turn.turnId],
          delta: {
            operations: [
              {
                op: "CREATE",
                targetEntryId: null,
                title: "Sujet stable",
                currentSummary: "v0",
                sourceTurnRefs: [],
                relatedEntryIds: [],
              },
            ],
          },
        });
        subjectId = r.entryIds[0]!;
        ops += 1;
      } else if (i === 30 || i === 70 || i === 100) {
        materializeCycleJournalDelta({
          session: s,
          cycleInstanceId: "cyc:long",
          logicalTurnId: `ltu:${i}`,
          boundSourceTurnIds: [turn.turnId],
          delta: {
            operations: [
              {
                op: "UPDATE",
                targetEntryId: subjectId,
                title: null,
                currentSummary: `v${i}`,
                sourceTurnRefs: [],
                relatedEntryIds: [],
              },
            ],
          },
        });
        ops += 1;
      } else if (i === 50) {
        materializeCycleJournalDelta({
          session: s,
          cycleInstanceId: "cyc:long",
          logicalTurnId: `ltu:${i}`,
          boundSourceTurnIds: [turn.turnId],
          delta: {
            operations: [
              {
                op: "CREATE",
                targetEntryId: null,
                title: "Autre sujet",
                currentSummary: "side",
                sourceTurnRefs: [],
                relatedEntryIds: [],
              },
            ],
          },
        });
        ops += 1;
      }
    }
    const elapsed = performance.now() - t0;
    const entries = listCycleJournalEntries(s, "cyc:long");
    const stable = entries.find((e) => e.journalEntryId === subjectId);
    expect(stable).toBeTruthy();
    expect(stable!.currentSummary).toBe("v100");
    expect(stable!.sourceTurnRefs.length).toBeGreaterThanOrEqual(4);
    expect(entries.filter((e) => e.status === "active").length).toBe(2);
    expect(listPilotTranscriptTurns(s).length).toBe(110);
    // Bound: incremental ops, not O(rebuild all transcript each turn).
    expect(ops).toBeLessThan(120);
    expect(elapsed).toBeLessThan(5000);
    const compact = formatCycleJournalCompactForPrompt(
      buildCycleJournalCompactProjection(s, "cyc:long"),
    );
    expect(compact.length).toBeLessThan(8000);
    expect(compact).not.toMatch(/msg-109/);
    s.close();
  });
});

describe("Journal ≠ Truth C / HD promotion", () => {
  it("materialize does not write oa_* or human_decision tables", () => {
    const s = tmpSession("proj-bound");
    materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: "cyc:1",
      logicalTurnId: "ltu:1",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "CREATE",
            targetEntryId: null,
            title: "T",
            currentSummary: "s",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    const tables = s
      .getSqlite()
      .prepare(
        `SELECT name FROM sqlite_master WHERE type='table' ORDER BY name`,
      )
      .all() as { name: string }[];
    const names = tables.map((t) => t.name);
    expect(names).toContain("cycle_journal_entries");
    expect(names).toContain("pilot_transcript_turns");
    expect(names.some((n) => n.startsWith("oa_"))).toBe(false);
    expect(names.some((n) => n.includes("human_decision"))).toBe(false);
    s.close();
  });
});

describe("CR-CJ-01 providerRecentHistory bounds", () => {
  it("bounds ≥150-message visible transcript; old content not injected", async () => {
    const {
      normalizeProductTurnHistory,
      measureProductTurnHistoryBounds,
      PRODUCT_TURN_MAX_HISTORY_MESSAGES,
      PRODUCT_TURN_MAX_HISTORY_CHARS,
    } = await import("@/features/project-assistant/turnPayloadCanonical");

    const OLD = "UNIQUE_OLD_MARKER_CR_CJ_01_SHOULD_NOT_REACH_PROVIDER";
    const visible: { role: "user" | "assistant"; content: string }[] = [];
    for (let i = 0; i < 160; i += 1) {
      visible.push({
        role: i % 2 === 0 ? "user" : "assistant",
        content: i === 0 ? OLD : `recent-turn-${i}`,
      });
    }
    const providerRecent = normalizeProductTurnHistory(visible);
    const bounds = measureProductTurnHistoryBounds(providerRecent);
    expect(bounds.withinBounds).toBe(true);
    expect(bounds.messageCount).toBeLessThanOrEqual(
      PRODUCT_TURN_MAX_HISTORY_MESSAGES,
    );
    expect(bounds.totalChars).toBeLessThanOrEqual(
      PRODUCT_TURN_MAX_HISTORY_CHARS,
    );
    expect(providerRecent.some((m) => m.content.includes(OLD))).toBe(false);
    expect(providerRecent.some((m) => m.content.includes("recent-turn-159"))).toBe(
      true,
    );
    expect(visible).toHaveLength(160);
  });
});

describe("CR-CJ-02/03 Journal tools + >24 subject recovery", () => {
  it("search index recovers subject #1 outside compact working set; UPDATE keeps id", async () => {
    const s = tmpSession("proj-gt24");
    const cycle = "cyc:gt24";
    const ids: string[] = [];
    for (let i = 0; i < 40; i += 1) {
      const turn = appendPilotTranscriptTurn(s, {
        role: "user",
        content: `seed-${i}`,
        logicalTurnId: `ltu:seed:${i}`,
        cycleInstanceId: cycle,
      });
      const r = materializeCycleJournalDelta({
        session: s,
        cycleInstanceId: cycle,
        logicalTurnId: `ltu:seed:${i}`,
        boundSourceTurnIds: [turn.turnId],
        delta: {
          operations: [
            {
              op: "CREATE",
              targetEntryId: null,
              title: i === 0 ? "Sujet primordial unique" : `Sujet ${i}`,
              currentSummary: i === 0 ? "summary-first" : `summary-${i}`,
              sourceTurnRefs: [],
              relatedEntryIds: [],
            },
          ],
        },
      });
      ids.push(r.entryIds[0]!);
    }
    const firstId = ids[0]!;
    const compact = buildCycleJournalCompactProjection(s, cycle, 24);
    expect(compact.entries).toHaveLength(24);
    expect(
      compact.entries.some((e) => e.journalEntryId === firstId),
    ).toBe(false);

    const { searchCycleJournalIndex } = await import(
      "@/lib/nora-cognitive-runtime/cycleJournalStore"
    );
    const { createCycleJournalAgentsTools } = await import(
      "@/lib/nora-cognitive-runtime/cycleJournalAgentsTools"
    );

    const found = searchCycleJournalIndex(s, cycle, {
      query: "primordial",
      maxResults: 40,
    });
    expect(found.some((e) => e.journalEntryId === firstId)).toBe(true);

    const tools = createCycleJournalAgentsTools({
      session: s,
      cycleInstanceId: cycle,
    });
    expect(tools.map((t) => t.name).sort()).toEqual([
      "cycle_journal_get_entry",
      "cycle_journal_get_sources",
      "cycle_journal_search",
    ]);
    const { RunContext } = await import("@openai/agents");
    const runCtx = new RunContext({});
    const searchTool = tools.find((t) => t.name === "cycle_journal_search")!;
    const searchRaw = await searchTool.invoke(
      runCtx,
      JSON.stringify({ query: "primordial" }),
    );
    const searchJson = JSON.parse(String(searchRaw)) as {
      ok: boolean;
      entries: { journalEntryId: string }[];
    };
    expect(searchJson.ok).toBe(true);
    expect(
      searchJson.entries.some((e) => e.journalEntryId === firstId),
    ).toBe(true);

    const getTool = tools.find((t) => t.name === "cycle_journal_get_entry")!;
    const getRaw = await getTool.invoke(
      runCtx,
      JSON.stringify({ journalEntryId: firstId }),
    );
    const getJson = JSON.parse(String(getRaw)) as {
      ok: boolean;
      entry: { journalEntryId: string; title: string };
    };
    expect(getJson.ok).toBe(true);
    expect(getJson.entry.journalEntryId).toBe(firstId);

    const later = appendPilotTranscriptTurn(s, {
      role: "user",
      content: "revive first",
      logicalTurnId: "ltu:revive",
      cycleInstanceId: cycle,
    });
    materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:revive",
      boundSourceTurnIds: [later.turnId],
      delta: {
        operations: [
          {
            op: "UPDATE",
            targetEntryId: firstId,
            title: null,
            currentSummary: "revived-after-search",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    const active = listCycleJournalEntries(s, cycle).filter(
      (e) => e.status === "active",
    );
    expect(active.filter((e) => e.title.includes("primordial")).length).toBe(1);
    expect(
      active.find((e) => e.journalEntryId === firstId)?.currentSummary,
    ).toBe("revived-after-search");
    s.close();
  });
});

describe("CR-CJ-06 adversarial integrity", () => {
  it("drops phantom/cross-cycle refs; rejects self-merge and bad relations", async () => {
    const s = tmpSession("proj-adv");
    const cycle = "cyc:adv";
    const other = "cyc:other";
    const tOk = appendPilotTranscriptTurn(s, {
      role: "user",
      content: "ok-turn",
      logicalTurnId: "ltu:ok",
      cycleInstanceId: cycle,
    });
    const tOther = appendPilotTranscriptTurn(s, {
      role: "user",
      content: "other-cycle",
      logicalTurnId: "ltu:other",
      cycleInstanceId: other,
    });

    const create = materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:c1",
      boundSourceTurnIds: [tOk.turnId],
      delta: {
        operations: [
          {
            op: "CREATE",
            targetEntryId: null,
            title: "A",
            currentSummary: "a",
            sourceTurnRefs: ["pt:phantom", tOther.turnId],
            relatedEntryIds: [],
          },
          {
            op: "CREATE",
            targetEntryId: null,
            title: "B",
            currentSummary: "b",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    expect(create.droppedSourceRefs).toEqual(
      expect.arrayContaining(["pt:phantom", tOther.turnId]),
    );
    const [a, b] = listCycleJournalEntries(s, cycle);
    expect(a!.sourceTurnRefs).toEqual([tOk.turnId]);
    expect(a!.sourceTurnRefs).not.toContain("pt:phantom");
    expect(a!.sourceTurnRefs).not.toContain(tOther.turnId);

    const selfMerge = materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:self",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "MERGE",
            targetEntryId: a!.journalEntryId,
            title: null,
            currentSummary: null,
            sourceTurnRefs: [],
            relatedEntryIds: [a!.journalEntryId],
          },
        ],
      },
    });
    expect(selfMerge.applied).toBe(0);
    expect(selfMerge.skippedInvalid).toBe(1);
    expect(listCycleJournalEntries(s, cycle).find((e) => e.journalEntryId === a!.journalEntryId)?.status).toBe(
      "active",
    );

    const dupRelated = materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:dup",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "MERGE",
            targetEntryId: a!.journalEntryId,
            title: "merged",
            currentSummary: "m",
            sourceTurnRefs: [],
            relatedEntryIds: [b!.journalEntryId, b!.journalEntryId],
          },
        ],
      },
    });
    expect(dupRelated.applied).toBe(1);
    expect(
      listCycleJournalEntries(s, cycle).find((e) => e.journalEntryId === b!.journalEntryId)
        ?.status,
    ).toBe("merged");

    // Archive then UPDATE archived → skip
    const cCreate = materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:c3",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "CREATE",
            targetEntryId: null,
            title: "C",
            currentSummary: "c",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    const cId = cCreate.entryIds[0]!;
    materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:arch",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "ARCHIVE",
            targetEntryId: cId,
            title: null,
            currentSummary: null,
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    const updArch = materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:upd-arch",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "UPDATE",
            targetEntryId: cId,
            title: null,
            currentSummary: "should-fail",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    expect(updArch.applied).toBe(0);
    expect(updArch.skippedInvalid).toBe(1);
    expect(
      listCycleJournalEntries(s, cycle).find((e) => e.journalEntryId === cId)
        ?.currentSummary,
    ).toBe("c");

    // Idempotent retry of successful ARCHIVE
    const retryArch = materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:arch",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "ARCHIVE",
            targetEntryId: cId,
            title: null,
            currentSummary: null,
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    expect(retryArch.skippedDuplicate).toBe(1);
    expect(retryArch.applied).toBe(0);

    // Missing related
    const d = materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:d",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "CREATE",
            targetEntryId: null,
            title: "D",
            currentSummary: "d",
            sourceTurnRefs: [],
            relatedEntryIds: [],
          },
        ],
      },
    });
    const missingRel = materializeCycleJournalDelta({
      session: s,
      cycleInstanceId: cycle,
      logicalTurnId: "ltu:miss",
      boundSourceTurnIds: [],
      delta: {
        operations: [
          {
            op: "MERGE",
            targetEntryId: d.entryIds[0]!,
            title: null,
            currentSummary: null,
            sourceTurnRefs: [],
            relatedEntryIds: ["cje:does-not-exist"],
          },
        ],
      },
    });
    expect(missingRel.skippedInvalid).toBe(1);
    expect(missingRel.applied).toBe(0);
    s.close();
  });
});
