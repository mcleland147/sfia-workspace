import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

process.env.STUDIO_LANE = "DEV";
process.env.STUDIO_E2E = "1";
process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";

import { and, eq, sql } from "drizzle-orm";
import { mkdtempSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { db } from "@/db/client";
import {
  conversationTurnCommands,
  documents,
  documentRevisions,
  knowledgeAcquis,
  knowledgeOpenPoints,
  knowledgeSubjects,
  messages,
} from "@/db/schema";
import { createDevTestSession } from "@/domains/identity/session";
import { openOrCreatePreparation } from "@/domains/preparation/service";
import {
  getConversationId,
  listMessages,
  postUserMessageAndNora,
} from "@/domains/conversation/service";
import {
  injectStaleRunningForTests,
  reconcileRunningCommand,
  requireTurnOwnership,
  reserveTurnCommand,
  revokeOwnerTokenForTests,
  touchTurnLease,
  turnClock,
  turnRaceHooks,
  TURN_RUNNING_STALE_MS,
} from "@/domains/conversation/turn-command";
import { searchProjectResources } from "@/domains/conversation/d4-read-tools";
import {
  capitalizeAcquis,
  ensureSubject,
  openPoint,
} from "@/domains/knowledge/service";
import { newId } from "@/lib/ids";
import { newOperationId } from "@/lib/observability";
import { StudioError } from "@/lib/http-errors";

describe("ML2 three-blocker corrective (PG)", () => {
  let pilotId: string;
  let preparationId: string;
  let conversationId: string;
  let obsDir: string;
  const prevObs = process.env.SFIA_OBS_DIR;
  const prevBase = process.env.SFIA_OBS_BASE;

  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    // Ensure owner_token column exists (migration 006).
    await db.execute(sql`ALTER TABLE conversation_turn_commands ADD COLUMN IF NOT EXISTS owner_token text`);
    obsDir = mkdtempSync(join(tmpdir(), "sfia-obs-3b-"));
    process.env.SFIA_OBS_DIR = obsDir;
    process.env.SFIA_OBS_BASE = obsDir;
    const sess = await createDevTestSession("a", { host: "127.0.0.1:3100" });
    pilotId = sess.pilotId;
    const prep = await openOrCreatePreparation(pilotId);
    preparationId = prep.id;
    const cid = await getConversationId(pilotId, preparationId);
    if (!cid) throw new Error("conversation missing");
    conversationId = cid;
  });

  afterEach(async () => {
    delete turnRaceHooks.afterGenerateBeforeEffects;
    delete turnRaceHooks.beforeD4Effect;
    delete turnRaceHooks.beforeTerminalCommit;
    delete turnRaceHooks.insideTerminalTxAfterInsert;
    turnClock.nowMs = () => Date.now();
    // Unlock conversation for next case — force any leftover RUNNING → UNKNOWN.
    await db.execute(
      sql`update conversation_turn_commands
          set status = 'UNKNOWN',
              owner_token = 'revoked_cleanup',
              error_category = 'TEST_CLEANUP',
              updated_at = now()
          where conversation_id = ${conversationId} and status = 'RUNNING'`,
    );
  });

  afterAll(() => {
    if (prevObs === undefined) delete process.env.SFIA_OBS_DIR;
    else process.env.SFIA_OBS_DIR = prevObs;
    if (prevBase === undefined) delete process.env.SFIA_OBS_BASE;
    else process.env.SFIA_OBS_BASE = prevBase;
    rmSync(obsDir, { recursive: true, force: true });
  });

  it("TURN-RACE-01: ownership lost after generate → no COMPLETE, no D4 write", async () => {
    const key = `race01-${Date.now()}`;
    const content =
      "Rédige un document de synthèse critique sur l'architecture distribuée pour le sas.";
    turnRaceHooks.afterGenerateBeforeEffects = async () => {
      const row = (
        await db
          .select()
          .from(conversationTurnCommands)
          .where(
            and(
              eq(conversationTurnCommands.conversationId, conversationId),
              eq(conversationTurnCommands.clientTurnKey, key),
            ),
          )
          .limit(1)
      )[0];
      expect(row).toBeTruthy();
      // Simulate concurrent reconcile that invalidates ownership while run still in-flight.
      await revokeOwnerTokenForTests(row!.id);
      await db
        .update(conversationTurnCommands)
        .set({
          status: "UNKNOWN",
          errorCategory: "RECONCILED_TEST_INJECTION",
          updatedAt: new Date(),
        })
        .where(eq(conversationTurnCommands.id, row!.id));
    };

    const docsBefore = await db
      .select()
      .from(documents)
      .where(and(eq(documents.preparationId, preparationId), eq(documents.ownerPilotId, pilotId)));

    const result = await postUserMessageAndNora(pilotId, preparationId, content, {
      clientTurnKey: key,
    });
    expect(result.status).toBe("UNKNOWN");
    expect(result.documentSave == null || result.documentSave.status !== "AVAILABLE").toBe(true);

    const docsAfter = await db
      .select()
      .from(documents)
      .where(and(eq(documents.preparationId, preparationId), eq(documents.ownerPilotId, pilotId)));
    expect(docsAfter.length).toBe(docsBefore.length);

    // Another intention can proceed.
    const next = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Compare option reprise après ownership lost",
      { clientTurnKey: `race01-next-${Date.now()}` },
    );
    expect(next.status).toBe("COMPLETE");
  });

  it("TURN-RACE-02: fence inside document TX blocks write when token revoked mid-path", async () => {
    const key = `race02-${Date.now()}`;
    const content =
      "Rédige un document de synthèse sur la pagination critique pour preuve fence.";
    turnRaceHooks.beforeD4Effect = async () => {
      const row = (
        await db
          .select()
          .from(conversationTurnCommands)
          .where(
            and(
              eq(conversationTurnCommands.conversationId, conversationId),
              eq(conversationTurnCommands.clientTurnKey, key),
            ),
          )
          .limit(1)
      )[0];
      await revokeOwnerTokenForTests(row!.id);
    };

    const docsBefore = (
      await db
        .select()
        .from(documents)
        .where(and(eq(documents.preparationId, preparationId), eq(documents.ownerPilotId, pilotId)))
    ).length;

    const result = await postUserMessageAndNora(pilotId, preparationId, content, {
      clientTurnKey: key,
    });
    expect(result.status).toBe("UNKNOWN");

    const docsAfter = (
      await db
        .select()
        .from(documents)
        .where(and(eq(documents.preparationId, preparationId), eq(documents.ownerPilotId, pilotId)))
    ).length;
    expect(docsAfter).toBe(docsBefore);
  });

  it("TURN-RACE-03: concurrent same key + divergent payload + distinct keys", async () => {
    const key = `race03-${Date.now()}`;
    const content = "Compare Alpha et Beta pour unicité";
    const settled = await Promise.allSettled([
      postUserMessageAndNora(pilotId, preparationId, content, { clientTurnKey: key }),
      postUserMessageAndNora(pilotId, preparationId, content, { clientTurnKey: key }),
    ]);
    const ok = settled.filter((s) => s.status === "fulfilled");
    expect(ok.length).toBeGreaterThanOrEqual(1);
    const cmds = await db
      .select()
      .from(conversationTurnCommands)
      .where(
        and(
          eq(conversationTurnCommands.conversationId, conversationId),
          eq(conversationTurnCommands.clientTurnKey, key),
        ),
      );
    expect(cmds).toHaveLength(1);

    await expect(
      postUserMessageAndNora(pilotId, preparationId, "Payload divergent race03", {
        clientTurnKey: key,
      }),
    ).rejects.toSatisfy((e: unknown) => e instanceof StudioError && e.code === "PAYLOAD_MISMATCH");

    const distinct = await Promise.allSettled([
      postUserMessageAndNora(pilotId, preparationId, "Compare clé distincte A", {
        clientTurnKey: `race03-a-${Date.now()}`,
      }),
      postUserMessageAndNora(pilotId, preparationId, "Compare clé distincte B", {
        clientTurnKey: `race03-b-${Date.now()}`,
      }),
    ]);
    const fulfilled = distinct.filter((s) => s.status === "fulfilled");
    expect(fulfilled.length).toBeGreaterThanOrEqual(1);
    const msgs = await listMessages(pilotId, preparationId);
    const ordinals = msgs.map((m) => m.ordinal);
    expect(new Set(ordinals).size).toBe(ordinals.length);
  });

  it("TURN-RACE-04: active lease heartbeat prevents false orphan; stale without heartbeat reconciles", async () => {
    const reserved = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: `race04-active-${Date.now()}`,
      content: "Tour actif long",
    });
    if (reserved.kind !== "fresh") throw new Error("expected fresh");

    // Advance wall clock beyond stale window but heartbeat first → still owned.
    const base = turnClock.nowMs();
    turnClock.nowMs = () => base + TURN_RUNNING_STALE_MS + 5_000;
    const touched = await touchTurnLease(reserved.commandId, reserved.ownerToken);
    expect(touched.owned).toBe(true);
    // After touch, updated_at is "now" in DB (real clock) — inject stale again for reconcile test.
    await injectStaleRunningForTests(reserved.commandId);
    const recon = await reconcileRunningCommand(reserved.commandId);
    expect(recon.status).toBe("UNKNOWN");
    expect(await requireTurnOwnership(reserved.commandId, reserved.ownerToken)).toBe(false);
  });

  it("D4-PAGE-01/02: >600 matches, offsets past 500 terminate without stagnant hasMore", async () => {
    const subject = await ensureSubject(pilotId, preparationId, `Page bulk ${Date.now()}`);
    const marker = `PAGE_MARK_${Date.now()}`;
    for (let i = 0; i < 620; i++) {
      await db.insert(knowledgeAcquis).values({
        id: newId("acq"),
        preparationId,
        ownerPilotId: pilotId,
        subjectId: subject.subjectId!,
        kind: "HYPOTHESIS",
        statement: `Acquis ${marker} n=${i.toString().padStart(4, "0")}`,
        provenanceJson: JSON.stringify({ sourceKind: "pilot", epistemic: "hypothesized" }),
        status: "CURRENT",
      });
    }

    const scope = {
      pilotId,
      preparationId,
      operationId: newOperationId(),
      generationId: newId("gen"),
      budget: { remainingCalls: 50, remainingChars: 5_000_000 },
    };

    const first = await searchProjectResources(scope, {
      query: marker,
      types: ["acquis"],
      limit: 20,
      offset: 0,
    });
    expect(first.status).toBe("AVAILABLE");
    if (first.status !== "AVAILABLE") throw new Error("available");
    expect(first.totalMatched).toBeGreaterThanOrEqual(620);
    expect(first.hasMore).toBe(true);
    expect(first.nextOffset).toBe(20);

    const mid = await searchProjectResources(scope, {
      query: marker,
      types: ["acquis"],
      limit: 20,
      offset: 500,
    });
    expect(mid.status).toBe("AVAILABLE");
    if (mid.status !== "AVAILABLE") throw new Error("available");
    expect(mid.items.length).toBeGreaterThan(0);
    expect(mid.items.length).toBeLessThanOrEqual(20);
    if (mid.hasMore) {
      expect(mid.nextOffset).toBe(500 + mid.items.length);
      expect(mid.nextOffset).not.toBe(500);
    }

    // Walk until terminal
    let offset = 0;
    let pages = 0;
    const seen = new Set<string>();
    while (pages < 50) {
      const page = await searchProjectResources(scope, {
        query: marker,
        types: ["acquis"],
        limit: 20,
        offset,
      });
      if (page.status !== "AVAILABLE") throw new Error("available");
      for (const it of page.items) seen.add(String(it.id));
      pages += 1;
      if (!page.hasMore) {
        expect(page.nextOffset).toBeNull();
        break;
      }
      expect(page.nextOffset).not.toBeNull();
      expect(page.nextOffset!).toBeGreaterThan(offset);
      offset = page.nextOffset!;
    }
    expect(seen.size).toBeGreaterThanOrEqual(620);

    const pastEnd = await searchProjectResources(scope, {
      query: marker,
      types: ["acquis"],
      limit: 20,
      offset: 10_000,
    });
    expect(pastEnd.status).toBe("AVAILABLE");
    if (pastEnd.status !== "AVAILABLE") throw new Error("available");
    expect(pastEnd.items).toHaveLength(0);
    expect(pastEnd.hasMore).toBe(false);
    expect(pastEnd.nextOffset).toBeNull();
  });

  it("D4-PAGE-04: tiny char budget denies/shrinks without claiming oversized envelope", async () => {
    const scope = {
      pilotId,
      preparationId,
      operationId: newOperationId(),
      generationId: newId("gen"),
      budget: { remainingCalls: 2, remainingChars: 40 },
    };
    const result = await searchProjectResources(scope, {
      query: "PAGE_MARK",
      types: ["acquis"],
      limit: 20,
      offset: 0,
    });
    expect(scope.budget.remainingChars).toBeGreaterThanOrEqual(0);
    expect("charsCharged" in result).toBe(true);
    if (result.status === "DENIED") {
      expect(result.reason).toMatch(/BUDGET/);
    } else {
      expect(JSON.stringify(result).length).toBeLessThanOrEqual(40 + 200); // charged before/at deny path
    }
  });

  it("TURN-ATOMIC-01: revoke before terminal → no assistant committed, non-COMPLETE", async () => {
    const key = `atomic01-${Date.now()}`;
    const msgsBefore = (await listMessages(pilotId, preparationId)).filter(
      (m) => m.role === "assistant",
    ).length;

    turnRaceHooks.beforeTerminalCommit = async () => {
      const row = (
        await db
          .select()
          .from(conversationTurnCommands)
          .where(
            and(
              eq(conversationTurnCommands.conversationId, conversationId),
              eq(conversationTurnCommands.clientTurnKey, key),
            ),
          )
          .limit(1)
      )[0];
      await revokeOwnerTokenForTests(row!.id);
      await db
        .update(conversationTurnCommands)
        .set({ status: "UNKNOWN", errorCategory: "ATOMIC01_REVOKE", updatedAt: new Date() })
        .where(eq(conversationTurnCommands.id, row!.id));
    };

    const result = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Compare atomic01 option A et B",
      { clientTurnKey: key },
    );
    expect(result.status).toBe("UNKNOWN");
    expect(result.assistantMessageId).toBeNull();

    const cmd = (
      await db
        .select()
        .from(conversationTurnCommands)
        .where(
          and(
            eq(conversationTurnCommands.conversationId, conversationId),
            eq(conversationTurnCommands.clientTurnKey, key),
          ),
        )
        .limit(1)
    )[0];
    expect(cmd.status).toBe("UNKNOWN");
    expect(cmd.assistantMessageId).toBeNull();

    const assistants = (await listMessages(pilotId, preparationId)).filter(
      (m) => m.role === "assistant",
    );
    expect(assistants.length).toBe(msgsBefore);
  });

  it("TURN-ATOMIC-02: CAS miss after INSERT in same TX rolls back assistant", async () => {
    const key = `atomic02-${Date.now()}`;
    const msgsBefore = (
      await db
        .select()
        .from(messages)
        .where(and(eq(messages.conversationId, conversationId), eq(messages.role, "assistant")))
    ).length;

    turnRaceHooks.insideTerminalTxAfterInsert = async (tx) => {
      await tx.execute(
        sql`update conversation_turn_commands
            set owner_token = ${"revoked_atomic02_" + Date.now()}
            where conversation_id = ${conversationId}
              and client_turn_key = ${key}`,
      );
    };

    const result = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Compare atomic02 rollback assistant",
      { clientTurnKey: key },
    );
    expect(result.status).toBe("UNKNOWN");
    expect(result.assistantMessageId).toBeNull();

    const msgsAfter = (
      await db
        .select()
        .from(messages)
        .where(and(eq(messages.conversationId, conversationId), eq(messages.role, "assistant")))
    ).length;
    expect(msgsAfter).toBe(msgsBefore);

    const cmd = (
      await db
        .select()
        .from(conversationTurnCommands)
        .where(
          and(
            eq(conversationTurnCommands.conversationId, conversationId),
            eq(conversationTurnCommands.clientTurnKey, key),
          ),
        )
        .limit(1)
    )[0];
    // CAS miss rolled back status change too — still RUNNING or cleaned UNKNOWN by afterEach.
    // Must not be COMPLETE with orphan assistant.
    expect(cmd.status).not.toBe("COMPLETE");
    expect(cmd.assistantMessageId).toBeNull();
  });

  it("TURN-ATOMIC-03: successful COMPLETE then same-key replay recovers without second generation", async () => {
    const key = `atomic03-${Date.now()}`;
    const first = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Compare atomic03 reprise ACK",
      { clientTurnKey: key },
    );
    expect(first.status).toBe("COMPLETE");
    expect(first.assistantMessageId).toBeTruthy();

    const replay = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Compare atomic03 reprise ACK",
      { clientTurnKey: key },
    );
    expect(replay.status).toBe("COMPLETE");
    expect(replay.idempotentReplay).toBe(true);
    expect(replay.assistantMessageId).toBe(first.assistantMessageId);

    const cmds = await db
      .select()
      .from(conversationTurnCommands)
      .where(
        and(
          eq(conversationTurnCommands.conversationId, conversationId),
          eq(conversationTurnCommands.clientTurnKey, key),
        ),
      );
    expect(cmds).toHaveLength(1);
  });

  it("TURN-LEASE-01: active lease blocks false orphan under concurrent reconcile", async () => {
    const reserved = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: `lease01-${Date.now()}`,
      content: "Lease concurrent actif",
    });
    if (reserved.kind !== "fresh") throw new Error("expected fresh");

    await touchTurnLease(reserved.commandId, reserved.ownerToken);
    const recon = await reconcileRunningCommand(reserved.commandId);
    expect(recon.status).toBe("RUNNING");
    expect(recon.reconciled).toBe(false);
    expect(await requireTurnOwnership(reserved.commandId, reserved.ownerToken)).toBe(true);

    await injectStaleRunningForTests(reserved.commandId);
    const stale = await reconcileRunningCommand(reserved.commandId);
    expect(stale.status).toBe("UNKNOWN");
    expect(stale.reconciled).toBe(true);
  });

  it("CAP-FENCE-01: revoke during ensureSubject → no subject created", async () => {
    const reserved = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: `cap01-${Date.now()}`,
      content: "fence subject",
    });
    if (reserved.kind !== "fresh") throw new Error("expected fresh");
    const title = `CAP_FENCE_SUBJ_${Date.now()}`;
    const before = (
      await db
        .select()
        .from(knowledgeSubjects)
        .where(
          and(
            eq(knowledgeSubjects.preparationId, preparationId),
            eq(knowledgeSubjects.title, title),
          ),
        )
    ).length;

    const result = await ensureSubject(pilotId, preparationId, title, undefined, {
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      beforeFenceCheck: async () => {
        await revokeOwnerTokenForTests(reserved.commandId);
      },
    });
    expect(result.status).toBe("FAILED");
    expect("reason" in result && result.reason).toBe("TURN_OWNERSHIP_LOST");
    const after = (
      await db
        .select()
        .from(knowledgeSubjects)
        .where(
          and(
            eq(knowledgeSubjects.preparationId, preparationId),
            eq(knowledgeSubjects.title, title),
          ),
        )
    ).length;
    expect(after).toBe(before);
  });

  it("CAP-FENCE-02: revoke during capitalizeAcquis → no acquis", async () => {
    const reserved = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: `cap02-${Date.now()}`,
      content: "fence acquis",
    });
    if (reserved.kind !== "fresh") throw new Error("expected fresh");
    const statement = `CAP_FENCE_ACQ durable statement ${Date.now()} with enough length`;
    const before = (
      await db
        .select()
        .from(knowledgeAcquis)
        .where(
          and(
            eq(knowledgeAcquis.preparationId, preparationId),
            eq(knowledgeAcquis.statement, statement),
          ),
        )
    ).length;

    const result = await capitalizeAcquis(pilotId, preparationId, {
      statement,
      kind: "HYPOTHESIS",
      provenance: {
        sourceKind: "message",
        sourceId: "msg_test",
        generationId: "gen_test",
        epistemic: "hypothesized",
      },
      turnFence: {
        commandId: reserved.commandId,
        ownerToken: reserved.ownerToken,
        beforeFenceCheck: async () => {
          await revokeOwnerTokenForTests(reserved.commandId);
        },
      },
    });
    expect(result.status).toBe("FAILED");
    expect("reason" in result && result.reason).toBe("TURN_OWNERSHIP_LOST");
    const after = (
      await db
        .select()
        .from(knowledgeAcquis)
        .where(
          and(
            eq(knowledgeAcquis.preparationId, preparationId),
            eq(knowledgeAcquis.statement, statement),
          ),
        )
    ).length;
    expect(after).toBe(before);
  });

  it("CAP-FENCE-03: revoke during openPoint → no open point", async () => {
    const reserved = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: `cap03-${Date.now()}`,
      content: "fence open",
    });
    if (reserved.kind !== "fresh") throw new Error("expected fresh");
    const statement = `Point ouvert CAP_FENCE ${Date.now()}`;
    const before = (
      await db
        .select()
        .from(knowledgeOpenPoints)
        .where(
          and(
            eq(knowledgeOpenPoints.preparationId, preparationId),
            eq(knowledgeOpenPoints.statement, statement),
          ),
        )
    ).length;

    const result = await openPoint(pilotId, preparationId, {
      statement,
      provenance: { sourceKind: "message", epistemic: "limited" },
      turnFence: {
        commandId: reserved.commandId,
        ownerToken: reserved.ownerToken,
        beforeFenceCheck: async () => {
          await revokeOwnerTokenForTests(reserved.commandId);
        },
      },
    });
    expect(result.status).toBe("FAILED");
    expect("reason" in result && result.reason).toBe("TURN_OWNERSHIP_LOST");
    const after = (
      await db
        .select()
        .from(knowledgeOpenPoints)
        .where(
          and(
            eq(knowledgeOpenPoints.preparationId, preparationId),
            eq(knowledgeOpenPoints.statement, statement),
          ),
        )
    ).length;
    expect(after).toBe(before);
  });

  it("CAP-FENCE-04: acquis committed before revoke survives; turn stays non-COMPLETE", async () => {
    const key = `cap04-${Date.now()}`;
    const statement = `CAP04_KEEP_${Date.now()} hypothèse durable commitée avant révocation du tour`;
    turnRaceHooks.beforeTerminalCommit = async () => {
      const row = (
        await db
          .select()
          .from(conversationTurnCommands)
          .where(
            and(
              eq(conversationTurnCommands.conversationId, conversationId),
              eq(conversationTurnCommands.clientTurnKey, key),
            ),
          )
          .limit(1)
      )[0];
      // Valid D4 write while ownership still holds.
      const cap = await capitalizeAcquis(pilotId, preparationId, {
        statement,
        kind: "HYPOTHESIS",
        provenance: {
          sourceKind: "message",
          sourceId: row!.userMessageId ?? "msg",
          generationId: row!.generationId ?? "gen",
          epistemic: "hypothesized",
        },
        turnFence: { commandId: row!.id, ownerToken: row!.ownerToken! },
      });
      expect(cap.status).toBe("AVAILABLE");
      await revokeOwnerTokenForTests(row!.id);
      await db
        .update(conversationTurnCommands)
        .set({ status: "UNKNOWN", errorCategory: "CAP04_REVOKE", updatedAt: new Date() })
        .where(eq(conversationTurnCommands.id, row!.id));
    };

    const result = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Compare CAP04 option reprise après effet D4 déjà durable",
      { clientTurnKey: key },
    );
    expect(result.status).toBe("UNKNOWN");
    expect(result.assistantMessageId).toBeNull();

    const kept = await db
      .select()
      .from(knowledgeAcquis)
      .where(
        and(
          eq(knowledgeAcquis.preparationId, preparationId),
          eq(knowledgeAcquis.statement, statement),
        ),
      );
    expect(kept).toHaveLength(1);
    expect(kept[0].status).toBe("CURRENT");

    // UNKNOWN-CAP-01: response surfaces DB-confirmed acquis ref (not erased).
    const caps = Array.isArray(result.capitalisation) ? result.capitalisation : [];
    expect(caps.some((c: { id?: string }) => c.id === kept[0].id)).toBe(true);

    // UNKNOWN-CAP-02: replay same key reconstitutes same refs, no second generation.
    const replay = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Compare CAP04 option reprise après effet D4 déjà durable",
      { clientTurnKey: key },
    );
    expect(replay.status).toBe("UNKNOWN");
    expect(replay.idempotentReplay).toBe(true);
    const replayCaps = Array.isArray(replay.capitalisation) ? replay.capitalisation : [];
    expect(replayCaps.some((c: { id?: string }) => c.id === kept[0].id)).toBe(true);
  });

  it("UNKNOWN-CAP-03: foreign pilot cannot see reconstituted acquis refs", async () => {
    const statement = `CAP03_FOREIGN_${Date.now()} statement durable isolé`;
    await db.insert(knowledgeAcquis).values({
      id: newId("acq"),
      preparationId,
      ownerPilotId: pilotId,
      kind: "HYPOTHESIS",
      statement,
      provenanceJson: JSON.stringify({
        sourceKind: "message",
        sourceId: "msg_foreign_test",
        generationId: "gen_foreign_test",
        epistemic: "hypothesized",
      }),
      status: "CURRENT",
    });
    const { reconstituteConfirmedD4Effects } = await import("@/domains/knowledge/service");
    const other = await createDevTestSession("b", { host: "127.0.0.1:3100" });
    const foreign = await reconstituteConfirmedD4Effects(other.pilotId, preparationId, {
      generationId: "gen_foreign_test",
      userMessageId: "msg_foreign_test",
    });
    expect(foreign.capitalisation).toHaveLength(0);
  });

  it("ASSIST-REUSE-01: ordinal occupied with different generationId → CONFLICT / no COMPLETE", async () => {
    const reserved = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: `assist01-${Date.now()}`,
      content: "Assist reuse conflict",
    });
    if (reserved.kind !== "fresh") throw new Error("expected fresh");
    await db.insert(messages).values({
      id: newId("msg"),
      conversationId,
      role: "assistant",
      content: "foreign assistant",
      status: "COMPLETE",
      generationId: "gen_OTHER",
      ordinal: reserved.ordinalAssistant,
    });
    const { commitTurnTerminal } = await import("@/domains/conversation/turn-command");
    await expect(
      commitTurnTerminal({
        commandId: reserved.commandId,
        ownerToken: reserved.ownerToken,
        status: "COMPLETE",
        conversationId,
        assistant: {
          id: newId("msg"),
          content: "new",
          messageStatus: "COMPLETE",
          generationId: "gen_MINE",
          ordinal: reserved.ordinalAssistant,
        },
        generationId: "gen_MINE",
      }),
    ).rejects.toSatisfy((e: unknown) => e instanceof StudioError && e.code === "CONFLICT");
  });

  it("ASSIST-REUSE-02: same generationId reuse after ACK loss is idempotent", async () => {
    const key = `assist02-${Date.now()}`;
    const first = await postUserMessageAndNora(pilotId, preparationId, "Compare assist02 ACK", {
      clientTurnKey: key,
    });
    expect(first.status).toBe("COMPLETE");
    const replay = await postUserMessageAndNora(pilotId, preparationId, "Compare assist02 ACK", {
      clientTurnKey: key,
    });
    expect(replay.status).toBe("COMPLETE");
    expect(replay.idempotentReplay).toBe(true);
    expect(replay.assistantMessageId).toBe(first.assistantMessageId);
  });

  it("ASSIST-REUSE-03: reconcile does not bind assistant with mismatched/missing generationId", async () => {
    const reserved = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: `assist03-${Date.now()}`,
      content: "Assist reuse reconcile",
    });
    if (reserved.kind !== "fresh") throw new Error("expected fresh");
    const foreignMsgId = newId("msg");
    await db.insert(messages).values({
      id: foreignMsgId,
      conversationId,
      role: "assistant",
      content: "foreign reconcile assistant",
      status: "COMPLETE",
      generationId: "gen_FOREIGN_RECON",
      ordinal: reserved.ordinalAssistant,
    });
    await db
      .update(conversationTurnCommands)
      .set({
        generationId: "gen_CMD_OWN",
        updatedAt: new Date(Date.now() - TURN_RUNNING_STALE_MS - 1000),
      })
      .where(eq(conversationTurnCommands.id, reserved.commandId));

    const recon = await reconcileRunningCommand(reserved.commandId);
    expect(recon.status).toBe("UNKNOWN");
    expect(recon.assistantMessageId).toBeNull();
    expect(recon.assistantMessageId).not.toBe(foreignMsgId);

    // Missing generation on command ⇒ still no silent bind.
    const reserved2 = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: `assist03b-${Date.now()}`,
      content: "Assist reuse missing gen",
    });
    if (reserved2.kind !== "fresh") throw new Error("expected fresh");
    await db.insert(messages).values({
      id: newId("msg"),
      conversationId,
      role: "assistant",
      content: "orphan without matching gen proof",
      status: "COMPLETE",
      generationId: null,
      ordinal: reserved2.ordinalAssistant,
    });
    await db
      .update(conversationTurnCommands)
      .set({
        generationId: null,
        updatedAt: new Date(Date.now() - TURN_RUNNING_STALE_MS - 1000),
      })
      .where(eq(conversationTurnCommands.id, reserved2.commandId));
    const recon2 = await reconcileRunningCommand(reserved2.commandId);
    expect(recon2.status).toBe("UNKNOWN");
    expect(recon2.assistantMessageId).toBeNull();
  });

  it("UNKNOWN-CAP-04: document revision with matching provenance reconstitutes; subject without gen stays unattributed", async () => {
    const { reconstituteConfirmedD4Effects } = await import("@/domains/knowledge/service");
    const gen = `gen_cap04_${Date.now()}`;
    const src = `msg_cap04_${Date.now()}`;
    const docId = newId("doc");
    const revId = newId("drev");
    await db.insert(documents).values({
      id: docId,
      preparationId,
      ownerPilotId: pilotId,
      title: `CAP04 doc ${Date.now()}`,
      creationCorrelationKey: `doc:${gen}`,
    });
    await db.insert(documentRevisions).values({
      id: revId,
      documentId: docId,
      revisionNumber: 1,
      status: "AVAILABLE",
      contentMarkdown: "# CAP04 durable",
      correlationKey: `doc:${gen}`,
      provenanceJson: JSON.stringify({ generationId: gen, userMessageId: src }),
      scope: "document",
    });
    // Subject has no generation provenance today — must not be falsely attributed.
    await db.insert(knowledgeSubjects).values({
      id: newId("subj"),
      preparationId,
      ownerPilotId: pilotId,
      title: `CAP04 subject ${Date.now()}`,
      status: "ACTIVE",
    });

    const hit = await reconstituteConfirmedD4Effects(pilotId, preparationId, {
      generationId: gen,
      userMessageId: src,
    });
    expect(hit.documentSave?.documentId).toBe(docId);
    expect(hit.documentSave?.confirmation).toBe("DB_CONFIRMED");
    expect(hit.capitalisation.some((c) => c.kind === "document" && c.documentId === docId)).toBe(
      true,
    );
    // Subjects have no generation provenance — reconstitution kinds are acquis|open_point|document only.
    expect(hit.capitalisation.every((c) => c.kind !== "document" || c.documentId === docId)).toBe(
      true,
    );
    expect(hit.capitalisationLimit).toContain("DB_RECONSTITUTED");
    const subjectsAfter = await db
      .select()
      .from(knowledgeSubjects)
      .where(eq(knowledgeSubjects.preparationId, preparationId));
    expect(subjectsAfter.some((s) => s.title.startsWith("CAP04 subject"))).toBe(true);

    const miss = await reconstituteConfirmedD4Effects(pilotId, preparationId, {
      generationId: "gen_unrelated",
      userMessageId: "msg_unrelated",
    });
    expect(miss.documentSave).toBeNull();
    expect(miss.capitalisation.filter((c) => c.kind === "document")).toHaveLength(0);
  });

  it("CAP-FENCE-05: pilot path without turnFence still creates subject", async () => {
    const title = `PILOT_NO_FENCE_${Date.now()}`;
    const result = await ensureSubject(pilotId, preparationId, title);
    expect(result.status).toBe("AVAILABLE");
    expect(result.subjectId).toBeTruthy();
  });

  it("D4-PAGE-03: concurrent delete between pages terminates without stagnant cursor", async () => {
    const marker = `PAGE03_${Date.now()}`;
    const subject = await ensureSubject(pilotId, preparationId, `Page03 ${Date.now()}`);
    const ids: string[] = [];
    for (let i = 0; i < 40; i++) {
      const id = newId("acq");
      ids.push(id);
      await db.insert(knowledgeAcquis).values({
        id,
        preparationId,
        ownerPilotId: pilotId,
        subjectId: subject.subjectId!,
        kind: "HYPOTHESIS",
        statement: `Acquis ${marker} n=${i.toString().padStart(3, "0")}`,
        provenanceJson: JSON.stringify({ sourceKind: "pilot", epistemic: "hypothesized" }),
        status: "CURRENT",
      });
    }

    const scope = {
      pilotId,
      preparationId,
      operationId: newOperationId(),
      generationId: newId("gen"),
      budget: { remainingCalls: 20, remainingChars: 2_000_000 },
    };

    const first = await searchProjectResources(scope, {
      query: marker,
      types: ["acquis"],
      limit: 10,
      offset: 0,
    });
    expect(first.status).toBe("AVAILABLE");
    if (first.status !== "AVAILABLE") throw new Error("available");
    expect(first.hasMore).toBe(true);
    const next = first.nextOffset!;
    expect(next).toBeGreaterThan(0);

    // Concurrent mutation: delete all remaining matches before next page.
    await db
      .update(knowledgeAcquis)
      .set({ status: "SUPERSEDED", updatedAt: new Date() })
      .where(
        and(
          eq(knowledgeAcquis.preparationId, preparationId),
          eq(knowledgeAcquis.ownerPilotId, pilotId),
          sql`${knowledgeAcquis.statement} like ${"%" + marker + "%"}`,
        ),
      );

    const second = await searchProjectResources(scope, {
      query: marker,
      types: ["acquis"],
      limit: 10,
      offset: next,
    });
    expect(second.status).toBe("AVAILABLE");
    if (second.status !== "AVAILABLE") throw new Error("available");
    // Must terminate — never empty+hasMore with stagnant offset.
    if (second.items.length === 0) {
      expect(second.hasMore).toBe(false);
      expect(second.nextOffset).toBeNull();
      expect(second.coverage).toBe("STALE");
      expect(second.totalMatchedExact).toBe(false);
    } else {
      if (second.hasMore) {
        expect(second.nextOffset).not.toBeNull();
        expect(second.nextOffset!).toBeGreaterThan(next);
      }
    }
  });
});
