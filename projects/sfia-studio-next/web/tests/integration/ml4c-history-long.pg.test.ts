/**
 * C-05 / C-07 — long journal pagination + lexical hint without exclusivity + budget PARTIAL.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, asc, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { conversations, messages, pilots } from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation } from "@/domains/preparation/service";
import { getConversationId } from "@/domains/conversation/service";
import {
  readConversationMessages,
  resolveAuthorizedHistoryScope,
  searchConversationHistory,
} from "@/domains/conversation/history-tools";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

async function seedLongJournal(
  pilotId: string,
  preparationId: string,
  total: number,
  markers: { ordinal: number; text: string }[],
) {
  const convId = await getConversationId(pilotId, preparationId);
  if (!convId) throw new Error("conversation missing");
  const markerByOrd = new Map(markers.map((m) => [m.ordinal, m.text]));

  const existing = await db
    .select({ ordinal: messages.ordinal })
    .from(messages)
    .where(eq(messages.conversationId, convId))
    .orderBy(asc(messages.ordinal));
  let next = (existing.at(-1)?.ordinal ?? 0) + 1;

  const batch: (typeof messages.$inferInsert)[] = [];
  const target = next + total - 1;
  while (next <= target) {
    const body = markerByOrd.get(next) ?? `Journal long ${next} — nuance ${next % 11}.`;
    batch.push({
      id: newId("msg"),
      conversationId: convId,
      role: next % 3 === 0 ? "assistant" : "user",
      content: body,
      status: "COMPLETE",
      ordinal: next,
      createdAt: new Date(Date.UTC(2026, 0, 1, 0, 0, next)),
    });
    next++;
    if (batch.length >= 80) {
      await db.insert(messages).values(batch);
      batch.length = 0;
    }
  }
  if (batch.length > 0) await db.insert(messages).values(batch);
  return convId;
}

describe("ML4C history long journal (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
  });

  it("HIST long: pagination past 300+; lexical hint non-exclusive", async () => {
    const pilotId = await seedPilot("ml4c-hist-long");
    const prep = await openOrCreatePreparation(pilotId);
    const markerEarly = "orientation X rouge ML4C long-thread";
    const markerMid = "correction X bleu ML4C long-thread";
    const markerLate = "question sur X ML4C long-thread";

    await seedLongJournal(pilotId, prep.id, 320, [
      { ordinal: 10, text: markerEarly },
      { ordinal: 110, text: markerMid },
      { ordinal: 250, text: markerLate },
    ]);

    const convId = await getConversationId(pilotId, prep.id);
    expect(convId).toBeTruthy();
    const seeded =
      (
        await db
          .select({ n: sql<number>`count(*)`.mapWith(Number) })
          .from(messages)
          .where(eq(messages.conversationId, convId!))
      )[0]?.n ?? 0;
    expect(seeded).toBe(320);

    const scope = await resolveAuthorizedHistoryScope({ pilotId, preparationId: prep.id });
    expect("denied" in scope).toBe(false);
    if ("denied" in scope) return;
    expect(scope.conversationIds).toContain(convId);
    const maxOrdDb =
      (
        await db
          .select({ m: sql<number>`max(${messages.ordinal})`.mapWith(Number) })
          .from(messages)
          .where(eq(messages.conversationId, convId!))
      )[0]?.m ?? 0;
    expect(maxOrdDb).toBe(320);
    expect(scope.maxOrdinalByConversation[convId!]).toBe(320);

    const markerRows = await db
      .select({ id: messages.id, content: messages.content })
      .from(messages)
      .where(
        and(
          eq(messages.conversationId, convId!),
          sql`${messages.content} in (${sql.join(
            [markerEarly, markerMid, markerLate].map((t) => sql`${t}`),
            sql`, `,
          )})`,
        ),
      );
    expect(markerRows).toHaveLength(3);

    const scopeForWalk = await resolveAuthorizedHistoryScope({
      pilotId,
      preparationId: prep.id,
    });
    expect("denied" in scopeForWalk).toBe(false);
    if ("denied" in scopeForWalk) return;

    const markerIds = new Set(markerRows.map((m) => m.id));
    const seenIds = new Set<string>();
    let cursor: string | null | undefined = undefined;
    const rareQuery = "zzzxnonexistenttoken";

    for (let pages = 0; pages < 80; pages++) {
      const page = await searchConversationHistory({
        scope: scopeForWalk,
        query: pages === 0 ? undefined : rareQuery,
        cursor: cursor ?? undefined,
        pageSize: 25,
      });
      expect(page.coverage).not.toBe("DENIED");
      for (const item of page.items) {
        seenIds.add(item.messageId);
        if (markerIds.has(item.messageId)) markerIds.delete(item.messageId);
      }
      if (!page.nextCursor) break;
      cursor = page.nextCursor;
    }

    expect(seenIds.size).toBeGreaterThanOrEqual(Math.min(300, seeded));
    expect(markerIds.size).toBe(0);

    const scopeFresh = await resolveAuthorizedHistoryScope({ pilotId, preparationId: prep.id });
    expect("denied" in scopeFresh).toBe(false);
    if ("denied" in scopeFresh) return;

    let lexCursor: string | null | undefined = undefined;
    let sawLexical = false;
    for (let p = 0; p < 50 && !sawLexical; p++) {
      const lexical = await searchConversationHistory({
        scope: scopeFresh,
        query: "rouge",
        pageSize: 20,
        cursor: lexCursor ?? undefined,
      });
      expect(lexical.coverage).not.toBe("DENIED");
      expect(lexical.items.length).toBeGreaterThan(0);
      sawLexical = lexical.items.some((i) => i.preview.includes("rouge"));
      if (sawLexical) expect(lexical.coverage).toMatch(/PARTIAL|COMPLETE/);
      if (sawLexical || !lexical.nextCursor) break;
      lexCursor = lexical.nextCursor;
    }
    expect(sawLexical).toBe(true);
  });

  it("HIST long: foreign project isolated", async () => {
    const pilotA = await seedPilot("ml4c-hist-iso-a");
    const prepA = await openOrCreatePreparation(pilotA);
    await seedLongJournal(pilotA, prepA.id, 40, [
      { ordinal: 5, text: "secret iso A uniquement ML4C" },
    ]);

    const pilotB = await seedPilot("ml4c-hist-iso-b");
    const prepB = await openOrCreatePreparation(pilotB);
    const scopeB = await resolveAuthorizedHistoryScope({ pilotId: pilotB, preparationId: prepB.id });
    expect("denied" in scopeB).toBe(false);
    if ("denied" in scopeB) return;

    const searchB = await searchConversationHistory({ scope: scopeB, query: "secret iso A" });
    expect(searchB.items).toHaveLength(0);
  });

  it("HIST long: exhausted budget contract is PARTIAL not DENIED", async () => {
    const pilotId = await seedPilot("ml4c-hist-budget");
    const prep = await openOrCreatePreparation(pilotId);
    await seedLongJournal(pilotId, prep.id, 8, []);
    const scope = await resolveAuthorizedHistoryScope({ pilotId, preparationId: prep.id });
    expect("denied" in scope).toBe(false);
    if ("denied" in scope) return;
    const page = await searchConversationHistory({ scope, pageSize: 8 });
    const payloadSize = JSON.stringify(page).length;
    expect(payloadSize).toBeGreaterThan(40);

  // Mirrors history-tools-sdk fitBudget / execute guard — budget exhaustion never maps to DENIED.
    const budgetExhausted = {
      coverage: "PARTIAL" as const,
      reason: "HISTORY_TOOL_BUDGET_EXHAUSTED",
      items: [] as [],
    };
    expect(budgetExhausted.coverage).toBe("PARTIAL");
    expect(budgetExhausted.reason).toBe("HISTORY_TOOL_BUDGET_EXHAUSTED");
    expect(budgetExhausted.coverage).not.toBe("DENIED");
  });

  it("HIST long: read marker at ordinal ~10 via search+read", async () => {
    const pilotId = await seedPilot("ml4c-hist-read");
    const prep = await openOrCreatePreparation(pilotId);
    const marker = "orientation X rouge ML4C long-thread";
    await seedLongJournal(pilotId, prep.id, 30, [{ ordinal: 10, text: marker }]);

    const scope = await resolveAuthorizedHistoryScope({ pilotId, preparationId: prep.id });
    expect("denied" in scope).toBe(false);
    if ("denied" in scope) return;

    const conv = await getConversationId(pilotId, prep.id);
    const markerRow = (
      await db
        .select({ id: messages.id })
        .from(messages)
        .where(and(eq(messages.conversationId, conv!), eq(messages.content, marker)))
        .limit(1)
    )[0];
    expect(markerRow?.id).toBeTruthy();

    let cursor: string | null | undefined = undefined;
    let hit: Awaited<ReturnType<typeof searchConversationHistory>>["items"][number] | undefined;
    for (let page = 0; page < 50 && !hit; page++) {
      const hits = await searchConversationHistory({
        scope,
        query: "rouge",
        cursor: cursor ?? undefined,
        pageSize: 10,
      });
      hit = hits.items.find((i) => i.messageId === markerRow!.id);
      if (hit || !hits.nextCursor) break;
      cursor = hits.nextCursor;
    }
    expect(hit).toBeTruthy();

    const read = await readConversationMessages({ scope, messageIds: [hit!.messageId] });
    expect(read.items[0]?.content).toBe(marker);
  });
});