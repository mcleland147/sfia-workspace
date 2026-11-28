/**
 * Lot 4 — project activity read is bound to pilot → project → conversation → turn.
 * Isolated e2e data. No métier effect is created.
 */
import { afterAll, describe, expect, it } from "vitest";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  conversationTurnCommands,
  conversations,
  noraActivityEvents,
  preparations,
  projects,
  pilots,
} from "@/db/schema";
import {
  appendActivityEvent,
  appendActivityFactsSafely,
  assertProjectTurnActivityAccess,
  listActivityEvents,
} from "@/domains/conversation/activity-projection";
import { newId } from "@/lib/ids";
import { StudioError } from "@/lib/http-errors";

const pilotA = newId("pilot");
const pilotB = newId("pilot");
const prepA = newId("prep");
const projectA = newId("proj");
const projectB = newId("proj");
const convA = newId("conv");
const turnA = newId("turn");

async function expectDenied(run: () => Promise<unknown>) {
  await expect(run()).rejects.toMatchObject({ code: "ACCESS_DENIED" });
}

describe("project activity access", () => {
  afterAll(async () => {
    await db.delete(noraActivityEvents).where(eq(noraActivityEvents.turnCommandId, turnA));
    await db.delete(conversationTurnCommands).where(eq(conversationTurnCommands.id, turnA));
    await db.delete(conversations).where(eq(conversations.id, convA));
    await db.delete(projects).where(eq(projects.ownerPilotId, pilotA));
    await db.delete(preparations).where(eq(preparations.id, prepA));
    await db.delete(pilots).where(eq(pilots.id, pilotA));
    await db.delete(pilots).where(eq(pilots.id, pilotB));
  });

  it("reads the turn of the requested project and refuses the others", async () => {
    expect(process.env.DATABASE_URL).toMatch(/\/sfia_next_e2e(?:\?|$)/);
    await db.insert(pilots).values([
      { id: pilotA, displayName: "lot4-a" },
      { id: pilotB, displayName: "lot4-b" },
    ]);
    await db.insert(preparations).values({
      id: prepA,
      ownerPilotId: pilotA,
      status: "ATTACHED",
    });
    await db.insert(projects).values([
      { id: projectA, ownerPilotId: pilotA, name: "lot4-a" },
      { id: projectB, ownerPilotId: pilotA, name: "lot4-b" },
    ]);
    await db.insert(conversations).values({
      id: convA,
      preparationId: prepA,
      projectId: projectA,
      ownerPilotId: pilotA,
    });
    await db.insert(conversationTurnCommands).values({
      id: turnA,
      conversationId: convA,
      ownerPilotId: pilotA,
      clientTurnKey: `key-${turnA}`,
      requestFingerprint: "fp-lot4",
      operationId: newId("op"),
      status: "COMPLETE",
      ownerToken: "tok-lot4",
    });
    await appendActivityEvent({
      conversationId: convA,
      turnCommandId: turnA,
      ownerPilotId: pilotA,
      phase: "nora.objective",
      nature: "COMPLETED",
      status: "COMPLETED",
      summary: "Analyse des règles d'habilitation",
      detail: { objective: "Analyse des règles d'habilitation" },
      ownerToken: "tok-lot4",
    });

    await assertProjectTurnActivityAccess({
      ownerPilotId: pilotA,
      projectId: projectA,
      turnCommandId: turnA,
    });
    const listed = await listActivityEvents({
      ownerPilotId: pilotA,
      turnCommandId: turnA,
    });
    expect(listed.events.map((e) => e.summary)).toEqual(["Analyse des règles d'habilitation"]);
    expect(listed.events.map((e) => e.sequence)).toEqual([1]);

    const again = await listActivityEvents({
      ownerPilotId: pilotA,
      turnCommandId: turnA,
      afterSequence: 1,
    });
    expect(again.events).toEqual([]);

    await expectDenied(() =>
      assertProjectTurnActivityAccess({
        ownerPilotId: pilotA,
        projectId: projectB,
        turnCommandId: turnA,
      }),
    );
    await expectDenied(() =>
      assertProjectTurnActivityAccess({
        ownerPilotId: pilotB,
        projectId: projectA,
        turnCommandId: turnA,
      }),
    );
    await expect(
      assertProjectTurnActivityAccess({
        ownerPilotId: pilotA,
        projectId: projectA,
        turnCommandId: newId("turn"),
      }),
    ).rejects.toBeInstanceOf(StudioError);
    await expect(
      assertProjectTurnActivityAccess({
        ownerPilotId: pilotA,
        projectId: projectA,
        turnCommandId: newId("turn"),
      }),
    ).rejects.toMatchObject({ code: "NOT_FOUND" });
  });

  it("keeps recording later facts when one append fails", async () => {
    const result = await appendActivityFactsSafely(
      ["première confirmation", "deuxième confirmation", "troisième confirmation"],
      async (fact) => {
        if (fact.startsWith("deuxième")) throw new Error("append failed");
      },
    );
    expect(result.recorded).toBe(2);
    expect(result.missed).toEqual(["deuxième confirmation"]);
  });
});
