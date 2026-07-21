/** @vitest-environment node */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  appendTurn,
  completeConversationAttemptFailure,
  createOpenSession,
  getConversationAttempt,
  getSession,
  listConversationAttempts,
  listTurns,
  resetOps1DbForTests,
  startConversationAttempt,
} from "@/lib/ops1/repository";
import { openOps1Db, migrateOps1Schema } from "@/lib/ops1/db";
import { sendConversationMessage } from "@/lib/ops1/conversation/service";
import { FakeConversationProvider } from "@/lib/ops1/conversation/fakeProvider";
import { DatabaseSync } from "node:sqlite";
import type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderCompletionResult,
} from "@/lib/ops1/conversation/types";
import { Ops1Error } from "@/lib/ops1/errors";
import { LEGACY_SESSION_MODE_AMBIGUOUS } from "@/lib/ops1/types";

describe("ops1 i2 repository + immutable session mode", () => {
  let tmpRoot: string;

  beforeEach(() => {
    resetOps1DbForTests();
    tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "ops1-i2-"));
    process.env.OPS1_EXEC_ROOT = tmpRoot;
  });

  afterEach(() => {
    resetOps1DbForTests();
    delete process.env.OPS1_EXEC_ROOT;
    fs.rmSync(tmpRoot, { recursive: true, force: true });
  });

  it("creates fixture and live sessions with persisted immutable mode", () => {
    const f = createOpenSession("fixture");
    expect(f.session.conversationMode).toBe("fixture");
    expect(getSession(f.session.sessionId)?.conversationMode).toBe("fixture");

    const l = createOpenSession("live");
    expect(l.session.conversationMode).toBe("live");
    expect(getSession(l.session.sessionId)?.conversationMode).toBe("live");
  });

  it("migrates I1 DB and backfills conversation_mode", () => {
    const dbPath = path.join(tmpRoot, "legacy.sqlite");
    const legacy = new DatabaseSync(dbPath);
    legacy.exec(`
      PRAGMA foreign_keys = ON;
      CREATE TABLE cycle_sessions (
        session_id TEXT PRIMARY KEY NOT NULL,
        project_key TEXT NOT NULL,
        status TEXT NOT NULL CHECK (status IN ('OPEN', 'CLOSED')),
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        parent_session_id TEXT,
        fixture_mode INTEGER NOT NULL CHECK (fixture_mode IN (0, 1))
      );
      CREATE TABLE journal_turns (
        turn_id TEXT PRIMARY KEY NOT NULL,
        session_id TEXT NOT NULL,
        sequence INTEGER NOT NULL,
        role TEXT NOT NULL CHECK (role IN ('user', 'assistant_fixture')),
        content TEXT NOT NULL,
        fixture INTEGER NOT NULL CHECK (fixture IN (0, 1)),
        created_at TEXT NOT NULL,
        UNIQUE (session_id, sequence),
        FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id)
      );
      INSERT INTO cycle_sessions VALUES (
        'ops1-sess-aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa',
        'sfia-studio-ops1', 'OPEN', 't', 't', NULL, 1
      );
      INSERT INTO journal_turns VALUES (
        'ops1-turn-1', 'ops1-sess-aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa',
        1, 'user', 'hello i1', 1, 't'
      );
      INSERT INTO journal_turns VALUES (
        'ops1-turn-2', 'ops1-sess-aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa',
        2, 'assistant_fixture', 'reply', 1, 't'
      );
    `);
    legacy.close();

    const db = new DatabaseSync(dbPath);
    migrateOps1Schema(db);
    const row = db
      .prepare(
        `SELECT conversation_mode FROM cycle_sessions WHERE session_id = ?`,
      )
      .get("ops1-sess-aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa") as {
      conversation_mode: string;
    };
    expect(row.conversation_mode).toBe("fixture");
    db.close();
  });

  it("detects ambiguous legacy session on migration", () => {
    const dbPath = path.join(tmpRoot, "ambiguous.sqlite");
    const legacy = new DatabaseSync(dbPath);
    legacy.exec(`
      PRAGMA foreign_keys = ON;
      CREATE TABLE cycle_sessions (
        session_id TEXT PRIMARY KEY NOT NULL,
        project_key TEXT NOT NULL,
        status TEXT NOT NULL CHECK (status IN ('OPEN', 'CLOSED')),
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        parent_session_id TEXT,
        fixture_mode INTEGER NOT NULL CHECK (fixture_mode IN (0, 1))
      );
      CREATE TABLE journal_turns (
        turn_id TEXT PRIMARY KEY NOT NULL,
        session_id TEXT NOT NULL,
        sequence INTEGER NOT NULL,
        role TEXT NOT NULL CHECK (role IN ('user', 'assistant_fixture', 'assistant_live')),
        content TEXT NOT NULL,
        fixture INTEGER NOT NULL CHECK (fixture IN (0, 1)),
        created_at TEXT NOT NULL,
        UNIQUE (session_id, sequence),
        FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id)
      );
      INSERT INTO cycle_sessions VALUES (
        'ops1-sess-bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb',
        'sfia-studio-ops1', 'OPEN', 't', 't', NULL, 1
      );
      INSERT INTO journal_turns VALUES (
        't1', 'ops1-sess-bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb',
        1, 'assistant_fixture', 'a', 1, 't'
      );
      INSERT INTO journal_turns VALUES (
        't2', 'ops1-sess-bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb',
        2, 'assistant_live', 'b', 0, 't'
      );
    `);
    legacy.close();
    const db = new DatabaseSync(dbPath);
    expect(() => migrateOps1Schema(db)).toThrow(Ops1Error);
    try {
      migrateOps1Schema(db);
    } catch (e) {
      expect((e as Ops1Error).safeMessage).toBe(LEGACY_SESSION_MODE_AMBIGUOUS);
    }
    db.close();
  });

  it("persists live multi-turn with ordered history; rejects mode mismatch before write", async () => {
    const { session } = createOpenSession("live");
    const provider = new FakeConversationProvider({
      scripted: ["A1 TEST/FAKE", "A2 TEST/FAKE", "A3 TEST/FAKE"],
    });
    const histories: number[] = [];
    const wrapping: ConversationProvider = {
      providerId: "fake-test",
      complete: async (
        messages: ProviderChatMessage[],
      ): Promise<ProviderCompletionResult> => {
        histories.push(messages.length);
        return provider.complete(messages);
      },
    };

    await sendConversationMessage({
      sessionId: session.sessionId,
      content: "tour 1",
      provider: wrapping,
    });
    await sendConversationMessage({
      sessionId: session.sessionId,
      content: "tour 2",
      provider: wrapping,
    });
    const third = await sendConversationMessage({
      sessionId: session.sessionId,
      content: "tour 3",
      provider: wrapping,
    });

    expect(histories).toEqual([1, 3, 5]);
    expect(third.assistantTurn?.role).toBe("assistant_live");
    expect(listTurns(session.sessionId)).toHaveLength(6);

    const before = listTurns(session.sessionId).length;
    await expect(
      sendConversationMessage({
        sessionId: session.sessionId,
        content: "should fail",
        requestedMode: "fixture",
      }),
    ).rejects.toBeInstanceOf(Ops1Error);
    expect(listTurns(session.sessionId)).toHaveLength(before);
  });

  it("fixture session refuses live requestedMode without provider call", async () => {
    const { session } = createOpenSession("fixture");
    let called = false;
    const provider: ConversationProvider = {
      providerId: "fake-test",
      complete: async () => {
        called = true;
        return {
          text: "nope",
          usage: {
            inputTokens: 1,
            outputTokens: 1,
            totalTokens: 2,
            model: "x",
            providerResponseId: "x",
          },
        };
      },
    };
    await expect(
      sendConversationMessage({
        sessionId: session.sessionId,
        content: "x",
        requestedMode: "live",
        provider,
      }),
    ).rejects.toBeInstanceOf(Ops1Error);
    expect(called).toBe(false);
    expect(listTurns(session.sessionId)).toHaveLength(0);
    expect(listConversationAttempts(session.sessionId)).toHaveLength(0);
  });

  it("keeps user turn and marks attempt failed without fake assistant on provider error", async () => {
    const { session } = createOpenSession("live");
    const provider = new FakeConversationProvider({ failOnCall: 1 });
    const result = await sendConversationMessage({
      sessionId: session.sessionId,
      content: "will fail",
      provider,
    });
    expect(result.assistantTurn).toBeNull();
    expect(listTurns(session.sessionId)).toHaveLength(1);
    expect(listConversationAttempts(session.sessionId)[0].status).toBe(
      "failed",
    );
  });

  it("fixture mode never creates conversation_attempts or live roles", async () => {
    const { session } = createOpenSession("fixture");
    await sendConversationMessage({
      sessionId: session.sessionId,
      content: "fixture only",
    });
    expect(listTurns(session.sessionId).map((t) => t.role)).toEqual([
      "user",
      "assistant_fixture",
    ]);
    expect(listConversationAttempts(session.sessionId)).toHaveLength(0);
  });

  it("start/fail attempt helpers leave no secret fields", () => {
    const { session } = createOpenSession("live");
    const { turn } = appendTurn({
      sessionId: session.sessionId,
      role: "user",
      content: "x",
      fixture: false,
    });
    const started = startConversationAttempt({
      sessionId: session.sessionId,
      userTurnId: turn.turnId,
      provider: "fake-test",
    });
    const failed = completeConversationAttemptFailure({
      attemptId: started.attemptId,
      sessionId: session.sessionId,
      errorCode: "PROVIDER",
    });
    expect(getConversationAttempt(failed.attemptId)?.status).toBe("failed");
    expect(JSON.stringify(failed)).not.toMatch(/api[_-]?key/i);
  });

  it("creates fresh schema with conversation_mode", () => {
    openOps1Db();
    const db = openOps1Db();
    const cols = db.prepare(`PRAGMA table_info(cycle_sessions)`).all() as Array<{
      name: string;
    }>;
    expect(cols.map((c) => c.name)).toContain("conversation_mode");
  });
});
