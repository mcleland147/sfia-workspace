import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { conversations, messages, pilots } from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation } from "@/domains/preparation/service";
import { getConversationId, postUserMessageAndNora } from "@/domains/conversation/service";
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

const TOPICS = [
  "architecture modulaire",
  "budget cloud Q3",
  "recette utilisateur",
  "dette technique front",
  "gouvernance des données",
  "intégration GitHub",
  "cadrage périmètre",
  "risques sécurité",
  "performance Postgres",
  "charte graphique",
];

async function seedVariedJournal(
  pilotId: string,
  preparationId: string,
  count: number,
  distinctive?: { ordinal: number; text: string },
) {
  const convId = await getConversationId(pilotId, preparationId);
  if (!convId) throw new Error("conversation missing");
  const rows = await db
    .select({ ordinal: messages.ordinal })
    .from(messages)
    .where(eq(messages.conversationId, convId))
    .orderBy(asc(messages.ordinal));
  let next = (rows.at(-1)?.ordinal ?? 0) + 1;
  const inserts: (typeof messages.$inferInsert)[] = [];
  for (let i = 0; i < count; i++) {
    const topic = TOPICS[i % TOPICS.length]!;
    const body =
      distinctive && next === distinctive.ordinal
        ? distinctive.text
        : `Message ${next} — échange sur ${topic} avec nuance ${(i % 7) + 1}.`;
    inserts.push({
      id: newId("msg"),
      conversationId: convId,
      role: i % 3 === 0 ? "assistant" : "user",
      content: body,
      status: "COMPLETE",
      ordinal: next,
      createdAt: new Date(Date.UTC(2026, 0, 1, 0, 0, next)),
    });
    next++;
  }
  if (inserts.length > 0) {
    await db.insert(messages).values(inserts);
  }
  return convId;
}

describe("ML4C history tools (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
  });

  it("HIST-01: search finds distinctive early message; read returns exact content", async () => {
    const pilotId = await seedPilot("ml4c-hist01");
    const prep = await openOrCreatePreparation(pilotId);
    const marker = "HIST-01 marqueur phoque arctique ML4C — repère inaugural";
    const convId = await seedVariedJournal(pilotId, prep.id, 34, { ordinal: 3, text: marker });

    const markerRow = (
      await db
        .select({ id: messages.id })
        .from(messages)
        .where(and(eq(messages.conversationId, convId), eq(messages.content, marker)))
        .limit(1)
    )[0];
    expect(markerRow?.id).toBeTruthy();

    const scope = await resolveAuthorizedHistoryScope({
      pilotId,
      preparationId: prep.id,
    });
    expect("denied" in scope).toBe(false);
    if ("denied" in scope) return;

    let cursor: string | null | undefined = undefined;
    let hit: Awaited<ReturnType<typeof searchConversationHistory>>["items"][number] | undefined;
    for (let page = 0; page < 30 && !hit; page++) {
      const search = await searchConversationHistory({
        scope,
        query: "phoque arctique",
        cursor: cursor ?? undefined,
        pageSize: 10,
      });
      expect(search.coverage).not.toBe("DENIED");
      hit = search.items.find((i) => i.messageId === markerRow!.id);
      if (hit || !search.nextCursor) break;
      cursor = search.nextCursor;
    }
    expect(hit).toBeTruthy();

    const read = await readConversationMessages({
      scope,
      messageIds: [hit!.messageId],
    });
    expect(read.items).toHaveLength(1);
    expect(read.items[0]!.content).toBe(marker);
  });

  it("HIST-05: second pilot cannot read first pilot messages", async () => {
    const pilotA = await seedPilot("ml4c-hist05-a");
    const prepA = await openOrCreatePreparation(pilotA);
    const secret = "HIST-05 confidentiel pilot A uniquement";
    await seedVariedJournal(pilotA, prepA.id, 8, { ordinal: 4, text: secret });

    const scopeA = await resolveAuthorizedHistoryScope({
      pilotId: pilotA,
      preparationId: prepA.id,
    });
    expect("denied" in scopeA).toBe(false);
    if ("denied" in scopeA) return;
    const readA = await readConversationMessages({
      scope: scopeA,
      messageIds: (
        await db
          .select({ id: messages.id })
          .from(messages)
          .innerJoin(conversations, eq(conversations.id, messages.conversationId))
          .where(
            and(eq(conversations.ownerPilotId, pilotA), eq(conversations.preparationId, prepA.id)),
          )
      ).map((r) => r.id),
    });
    expect(readA.items.some((i) => i.content.includes("confidentiel"))).toBe(true);

    const pilotB = await seedPilot("ml4c-hist05-b");
    const prepB = await openOrCreatePreparation(pilotB);
    const scopeB = await resolveAuthorizedHistoryScope({
      pilotId: pilotB,
      preparationId: prepB.id,
    });
    expect("denied" in scopeB).toBe(false);
    if ("denied" in scopeB) return;

    const searchB = await searchConversationHistory({
      scope: scopeB,
      query: "confidentiel",
    });
    expect(searchB.items).toHaveLength(0);

    const foreignIds = readA.items.map((i) => i.messageId);
    const readB = await readConversationMessages({
      scope: scopeB,
      messageIds: foreignIds,
    });
    expect(readB.items).toHaveLength(0);
    expect(readB.coverage).toBe("EMPTY");
  });

  it("HIST-08: stale scope after journal growth; no duplicate page bleed", async () => {
    const pilotId = await seedPilot("ml4c-hist08");
    const prep = await openOrCreatePreparation(pilotId);
    await seedVariedJournal(pilotId, prep.id, 36);

    const scope = await resolveAuthorizedHistoryScope({
      pilotId,
      preparationId: prep.id,
    });
    expect("denied" in scope).toBe(false);
    if ("denied" in scope) return;

    const page1 = await searchConversationHistory({
      scope,
      pageSize: 8,
    });
    expect(page1.items.length).toBe(8);
    expect(page1.nextCursor).toBeTruthy();
    const page1Ids = new Set(page1.items.map((i) => i.messageId));

    await postUserMessageAndNora(pilotId, prep.id, "Nouvel échange post-scope sur observabilité");
    await postUserMessageAndNora(pilotId, prep.id, "Autre message tardif sur la documentation");

    const page2 = await searchConversationHistory({
      scope,
      cursor: page1.nextCursor,
      pageSize: 8,
    });
    expect(page2.coverage).toBe("STALE");
    expect(page2.reason).toBe("SCOPE_STALE");
    expect(page2.items).toHaveLength(0);
    for (const id of page1Ids) {
      expect(page2.items.some((i) => i.messageId === id)).toBe(false);
    }

    const fresh = await resolveAuthorizedHistoryScope({
      pilotId,
      preparationId: prep.id,
    });
    expect("denied" in fresh).toBe(false);
    if ("denied" in fresh) return;
    expect(fresh.scopeFingerprint).not.toBe(scope.scopeFingerprint);

    const page2Fresh = await searchConversationHistory({
      scope: fresh,
      cursor: page1.nextCursor,
      pageSize: 8,
    });
    expect(page2Fresh.coverage).toBe("STALE");
    expect(page2Fresh.reason).toMatch(/CURSOR_INVALID_OR_STALE|SCOPE_STALE/);
  });
});