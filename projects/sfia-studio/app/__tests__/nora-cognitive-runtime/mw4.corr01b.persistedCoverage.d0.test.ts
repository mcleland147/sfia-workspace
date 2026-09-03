/** @vitest-environment node */
/**
 * CORR-MW4-01B — S03-PERSIST-01..04 persisted read coverage continuity.
 * Fake provider only — ZERO LIVE OpenAI.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import {
  ProductSqliteSession,
  applyCompactionIfNeeded,
  isGroundingRefsRecord,
  isNonReplaySessionMarker,
  loadGroundingRefsFromSession,
  loadSessionRows,
  rememberReadCoverage,
  runNoraCognitiveTurn,
  userTextItem,
  assistantTextItem,
} from "@/lib/nora-cognitive-runtime";
import type { ReadCoverageFact } from "@/lib/nora-cognitive-runtime";

const tempDirs: string[] = [];
const NOW = "2026-09-03T09:00:00.000Z";
const REV = { lpsId: "lps:mw4-corr01b", lpsVersion: 1 };
const DOC = "projects/sfia-studio/docs/mw4-corr-doc.md";

function tempDb(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw4-corr01b-"));
  tempDirs.push(dir);
  return path.join(dir, "nora-session.sqlite");
}

function partialFact(): ReadCoverageFact {
  return {
    pathOrRef: `${DOC}#L1-5`,
    documentPath: DOC,
    coverage: "partial",
    startLine: 1,
    endLine: 5,
    totalLines: 20,
    hasMore: true,
    origin: "current_turn",
  };
}

function fullFact(): ReadCoverageFact {
  return {
    pathOrRef: DOC,
    documentPath: DOC,
    coverage: "full",
    startLine: 1,
    endLine: 20,
    totalLines: 20,
    origin: "current_turn",
  };
}

afterEach(() => {
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("CORR-MW4-01B — persisted read coverage D0", () => {
  it("S03-PERSIST-01 — remembered partial survives next turn with no new read", async () => {
    const projectId = "prj:mw4-persist-01";
    const dbPath = tempDb();

    const provider1 = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] turn1 partial read." }],
    });
    const turn1 = await runNoraCognitiveTurn({
      correlationId: "mw4-corr01b-01a",
      projectId,
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Read partial." },
      ],
      provider: provider1,
      enableTools: false,
      skipCognitiveStrategy: true,
      sessionDbPath: dbPath,
      truthCRevision: REV,
      groundingNowIso: NOW,
      readCoverageFacts: [partialFact()],
    });
    expect(turn1.mw4Grounding?.readCoverageOverall).toBe("partial");

    const provider2 = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] turn2 no read." }],
    });
    const turn2 = await runNoraCognitiveTurn({
      correlationId: "mw4-corr01b-01b",
      projectId,
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Continue without reread." },
      ],
      provider: provider2,
      enableTools: false,
      skipCognitiveStrategy: true,
      sessionDbPath: dbPath,
      truthCRevision: REV,
      groundingNowIso: NOW,
      // no readCoverageFacts — remembered prior must surface
    });

    expect(turn2.mw4Grounding?.readCoverageDisclosure).toMatch(
      /REMEMBERED PRIOR-TURN READ COVERAGE/,
    );
    expect(turn2.mw4Grounding?.readCoverageDisclosure).toMatch(/partial/);
    expect(turn2.mw4Grounding?.readCoverageDisclosure).toMatch(
      new RegExp(DOC.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
    );
    expect(turn2.mw4Grounding?.readCoverageOverall).toBe("partial");
  });

  it("S03-PERSIST-02 — prior full ≠ current revalidation wording", async () => {
    const projectId = "prj:mw4-persist-02";
    const dbPath = tempDb();
    const session = new ProductSqliteSession({
      projectId,
      dbPath,
      sessionKey: "f1-default",
    });
    await rememberReadCoverage(
      session,
      projectId,
      [{ pathOrRef: DOC, coverage: "full" }],
      NOW,
    );
    session.close();

    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] prior full." }],
    });
    const turn = await runNoraCognitiveTurn({
      correlationId: "mw4-corr01b-02",
      projectId,
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Use prior coverage?" },
      ],
      provider,
      enableTools: false,
      skipCognitiveStrategy: true,
      sessionDbPath: dbPath,
      truthCRevision: REV,
      groundingNowIso: NOW,
    });

    const disclosure = turn.mw4Grounding?.readCoverageDisclosure ?? "";
    expect(disclosure).toMatch(/remembered_prior|REMEMBERED PRIOR/);
    expect(disclosure).toMatch(
      /does NOT mean the source is currently revalidated/i,
    );
    expect(disclosure).toMatch(/NOT a current revalidation/i);
  });

  it("S03-PERSIST-03 — current full reread supersedes remembered partial", async () => {
    const projectId = "prj:mw4-persist-03";
    const dbPath = tempDb();

    const provider1 = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] partial first." }],
    });
    await runNoraCognitiveTurn({
      correlationId: "mw4-corr01b-03a",
      projectId,
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Partial." },
      ],
      provider: provider1,
      enableTools: false,
      skipCognitiveStrategy: true,
      sessionDbPath: dbPath,
      truthCRevision: REV,
      groundingNowIso: NOW,
      readCoverageFacts: [partialFact()],
    });

    const provider2 = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] full reread." }],
    });
    const turn2 = await runNoraCognitiveTurn({
      correlationId: "mw4-corr01b-03b",
      projectId,
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Full reread now." },
      ],
      provider: provider2,
      enableTools: false,
      skipCognitiveStrategy: true,
      sessionDbPath: dbPath,
      truthCRevision: REV,
      groundingNowIso: NOW,
      readCoverageFacts: [fullFact()],
    });

    expect(turn2.mw4Grounding?.readCoverageOverall).toBe("full");
    const disclosure = turn2.mw4Grounding?.readCoverageDisclosure ?? "";
    expect(disclosure).toMatch(/CURRENT TURN READ COVERAGE/);
    expect(disclosure).toMatch(/: full/);
    // Remembered entry for same doc must be superseded (not duplicated as prior).
    expect(disclosure).not.toMatch(
      new RegExp(`${DOC.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}: partial \\(remembered_prior\\)`),
    );
  });

  it("S03-PERSIST-04 — compaction preserves grounding marker", async () => {
    const projectId = "prj:mw4-persist-04";
    const dbPath = tempDb();
    const session = new ProductSqliteSession({
      projectId,
      dbPath,
      sessionKey: "f1-default",
    });
    const items = Array.from({ length: 6 }, (_, i) =>
      i % 2 === 0
        ? userTextItem(`noise-${i}-${"x".repeat(40)}`)
        : assistantTextItem(`reply-${i}`),
    );
    await session.addItems(items);
    await rememberReadCoverage(
      session,
      projectId,
      [{ pathOrRef: DOC, coverage: "partial" }],
      NOW,
    );

    const before = await loadSessionRows(session);
    expect(before.grounding).toBeTruthy();
    expect(isGroundingRefsRecord(before.grounding)).toBe(true);
    expect(isNonReplaySessionMarker(before.grounding)).toBe(true);

    const compacted = await applyCompactionIfNeeded({
      session,
      truthCRevision: REV,
      policy: { itemThreshold: 4, keepRecentCount: 2, maxSummaryChars: 800 },
      nowIso: NOW,
    });
    expect(compacted.applied).toBe(true);

    const after = await loadSessionRows(session);
    expect(isGroundingRefsRecord(after.grounding)).toBe(true);
    expect(isNonReplaySessionMarker(after.grounding)).toBe(true);
    const loaded = await loadGroundingRefsFromSession(session);
    expect(loaded?.readCoverage?.[0]?.pathOrRef).toBe(DOC);
    expect(loaded?.readCoverage?.[0]?.coverage).toBe("partial");
    session.close();
  });
});
