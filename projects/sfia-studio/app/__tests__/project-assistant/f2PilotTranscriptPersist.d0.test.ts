/**
 * Track A — F2 canonical persist must also write Pilote durable transcript.
 * DETERMINISTIC only — no REAL provider / no invented journalDelta.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  CANONICAL_CONVERSATION_SESSION_KEY,
  persistCanonicalF2AssistantTurn,
} from "@/features/project-assistant/f2/canonicalConversationSession";
import { ProductSqliteSession } from "@/lib/nora-cognitive-runtime/productSqliteSession";
import {
  listCycleJournalEntries,
  listPilotTranscriptTurns,
} from "@/lib/nora-cognitive-runtime/cycleJournalStore";

const dirs: string[] = [];

function tmpDbPath(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-f2-pt-"));
  dirs.push(dir);
  return path.join(dir, "nora-session.sqlite");
}

afterEach(() => {
  while (dirs.length) {
    const d = dirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("F2 persistCanonicalF2AssistantTurn — pilot transcript seam", () => {
  it("persists durable user+assistant transcript with active cycleInstanceId; no journalDelta", async () => {
    const dbPath = tmpDbPath();
    const projectId = "prj:f2-pt-01";
    const cycleInstanceId = "cyc:framing-active";
    const userText = "F2-PROOF user turn — clarify governed subject.";
    const assistantText =
      "F2-PROOF assistant turn — proposition process-local. AUCUNE EXÉCUTION.";

    await persistCanonicalF2AssistantTurn({
      projectId,
      sessionDbPath: dbPath,
      userText,
      assistantText,
      cycleInstanceId,
      logicalTurnId: "ltu:f2-pt-01",
    });

    const session = new ProductSqliteSession({
      projectId,
      dbPath,
      sessionKey: CANONICAL_CONVERSATION_SESSION_KEY,
    });
    try {
      const turns = listPilotTranscriptTurns(session);
      expect(turns).toHaveLength(2);
      expect(turns[0]).toMatchObject({
        role: "user",
        content: userText,
        logicalTurnId: "ltu:f2-pt-01",
        cycleInstanceId,
      });
      expect(turns[1]).toMatchObject({
        role: "assistant",
        content: assistantText,
        logicalTurnId: "ltu:f2-pt-01",
        cycleInstanceId,
      });
      expect(turns[0]!.turnId.startsWith("pt:")).toBe(true);
      expect(turns[1]!.turnId.startsWith("pt:")).toBe(true);

      // Reconcile surface: durable ids are present so UI replace keeps visible turns.
      const reconcileMessages = turns.map((t) => ({
        id: t.turnId,
        role: t.role,
        content: t.content,
      }));
      expect(reconcileMessages.map((m) => m.content)).toEqual([
        userText,
        assistantText,
      ]);

      // F2 must not invent journal mutations.
      expect(listCycleJournalEntries(session, cycleInstanceId)).toEqual([]);
      const ledger = session
        .getSqlite()
        .prepare(
          `SELECT COUNT(*) AS c FROM cycle_journal_mutation_ledger
           WHERE project_id = ? AND session_key = ?`,
        )
        .get(projectId, CANONICAL_CONVERSATION_SESSION_KEY) as { c: number };
      expect(ledger.c).toBe(0);
    } finally {
      session.close();
    }
  });

  it("retry with same logicalTurnId does not duplicate pilot transcript rows", async () => {
    const dbPath = tmpDbPath();
    const projectId = "prj:f2-pt-retry";
    const cycleInstanceId = "cyc:retry";
    const logicalTurnId = "ltu:f2-retry";
    const userText = "retry user";
    const assistantText = "retry assistant";

    await persistCanonicalF2AssistantTurn({
      projectId,
      sessionDbPath: dbPath,
      userText,
      assistantText,
      cycleInstanceId,
      logicalTurnId,
    });
    await persistCanonicalF2AssistantTurn({
      projectId,
      sessionDbPath: dbPath,
      userText,
      assistantText,
      cycleInstanceId,
      logicalTurnId,
    });

    const session = new ProductSqliteSession({
      projectId,
      dbPath,
      sessionKey: CANONICAL_CONVERSATION_SESSION_KEY,
    });
    try {
      const turns = listPilotTranscriptTurns(session);
      expect(turns).toHaveLength(2);
      expect(turns.map((t) => t.role)).toEqual(["user", "assistant"]);
      expect(new Set(turns.map((t) => t.turnId)).size).toBe(2);
    } finally {
      session.close();
    }
  });
});
