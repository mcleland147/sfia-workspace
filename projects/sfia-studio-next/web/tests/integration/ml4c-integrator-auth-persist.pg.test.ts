/**
 * Lot A/B integrator closure — PG proofs for stash CAS + UNKNOWN/COMPLETE
 * preservation of semanticQualification (sfia_next_e2e via vitest gate).
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

process.env.STUDIO_LANE = "DEV";
process.env.STUDIO_E2E = "1";
process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { conversationTurnCommands } from "@/db/schema";
import { newId } from "@/lib/ids";
import { createDevTestSession } from "@/domains/identity/session";
import { openOrCreatePreparation } from "@/domains/preparation/service";
import { getPreparationContext } from "@/domains/preparation/service";
import {
  commitTurnTerminal,
  markTurnUnknown,
  reserveTurnCommand,
  stashTurnQualification,
} from "@/domains/conversation/turn-command";
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";

const sampleQual = {
  schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  status: "QUALIFIED" as const,
  goal: "open",
  intents: [
    {
      id: "i1",
      capabilityId: "d5.pilotage_command" as const,
      mode: "REQUEST_EFFECT" as const,
      summary: "OPEN_CYCLE",
      parameters: { pilotageOperation: "OPEN_CYCLE" as const, cycleType: "CADRAGE" },
      constraints: [] as string[],
      dependsOn: [] as string[],
      sourceEvidence: [] as string[],
    },
  ],
  clarifications: [] as string[],
  replyDraft: "ok",
};

describe("ML4C integrator — persist qualification (PG)", () => {
  let pilotId: string;
  let conversationId: string;

  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    const sess = await createDevTestSession("b", { host: "127.0.0.1:3100" });
    pilotId = sess.pilotId;
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    conversationId = ctx.conversation!.id;
  });

  afterAll(() => {
    /* e2e DB isolated */
  });

  it("DB-01/DB-06: stash then markTurnUnknown preserves semanticQualification", async () => {
    const reserved = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: `integ-unknown-${Date.now()}`,
      content: "stash then unknown",
    });
    expect(reserved.kind).toBe("fresh");
    if (reserved.kind !== "fresh") return;

    const stashed = await stashTurnQualification({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      qualificationJson: JSON.stringify(sampleQual),
    });
    expect(stashed.applied).toBe(true);

    await markTurnUnknown(
      reserved.commandId,
      "TEST_UNKNOWN_AFTER_STASH",
      reserved.ownerToken,
      JSON.stringify({ status: "UNKNOWN", note: "no qual in payload" }),
    );

    const row = (
      await db
        .select()
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.id, reserved.commandId))
        .limit(1)
    )[0];
    expect(row?.status).toBe("UNKNOWN");
    const parsed = JSON.parse(row!.resultJson!) as {
      semanticQualification?: { status?: string };
      status?: string;
    };
    expect(parsed.semanticQualification?.status).toBe("QUALIFIED");
    expect(parsed.status).toBe("UNKNOWN");
  });

  it("DB-04: COMPLETE after stash keeps qualification", async () => {
    const reserved = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: `integ-complete-${Date.now()}`,
      content: "stash then complete",
    });
    if (reserved.kind !== "fresh") throw new Error("expected fresh");

    expect(
      (
        await stashTurnQualification({
          commandId: reserved.commandId,
          ownerToken: reserved.ownerToken,
          qualificationJson: JSON.stringify(sampleQual),
        })
      ).applied,
    ).toBe(true);

    const applied = await commitTurnTerminal({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      status: "COMPLETE",
      conversationId,
      generationId: "gen-integ",
      resultJson: JSON.stringify({
        status: "COMPLETE",
        userMessageId: reserved.userMessageId,
        assistantMessageId: null,
        idempotentReplay: false,
        humanDecisionCreated: false,
      }),
      assistant: {
        id: newId("msg"),
        content: "assistant",
        messageStatus: "COMPLETE",
        generationId: "gen-integ",
        ordinal: reserved.ordinalAssistant,
      },
    });
    expect(applied.applied).toBe(true);

    const row = (
      await db
        .select()
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.id, reserved.commandId))
        .limit(1)
    )[0];
    const parsed = JSON.parse(row!.resultJson!) as {
      semanticQualification?: { schemaVersion?: string };
    };
    expect(parsed.semanticQualification?.schemaVersion).toBe(SEMANTIC_QUALIFICATION_SCHEMA_VERSION);
  });

  it("DB-02: stash with revoked ownerToken → applied false, zero write", async () => {
    const reserved = await reserveTurnCommand({
      conversationId,
      ownerPilotId: pilotId,
      clientTurnKey: `integ-revoke-${Date.now()}`,
      content: "revoke stash",
    });
    if (reserved.kind !== "fresh") throw new Error("expected fresh");

    const bad = await stashTurnQualification({
      commandId: reserved.commandId,
      ownerToken: "revoked_fake_token",
      qualificationJson: JSON.stringify(sampleQual),
    });
    expect(bad.applied).toBe(false);

    const row = (
      await db
        .select()
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.id, reserved.commandId))
        .limit(1)
    )[0];
    expect(row?.resultJson).toBeNull();
  });
});
