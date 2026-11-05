import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

process.env.STUDIO_LANE = "DEV";
process.env.STUDIO_E2E = "1";
process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";

import { createDevTestSession } from "@/domains/identity/session";
import { openOrCreatePreparation } from "@/domains/preparation/service";
import { postUserMessageAndNora, listMessages } from "@/domains/conversation/service";
import { StudioError } from "@/lib/http-errors";
import { mkdtempSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { queryObsByOperationId } from "@/lib/observability";

describe("ML2 turn command idempotence (PG)", () => {
  let pilotId: string;
  let preparationId: string;
  let obsDir: string;
  const prevObs = process.env.SFIA_OBS_DIR;

  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    obsDir = mkdtempSync(join(tmpdir(), "sfia-obs-pg-"));
    process.env.SFIA_OBS_DIR = obsDir;
    const sess = await createDevTestSession("a", { host: "127.0.0.1:3100" });
    pilotId = sess.pilotId;
    const prep = await openOrCreatePreparation(pilotId);
    preparationId = prep.id;
  });

  afterAll(() => {
    if (prevObs === undefined) delete process.env.SFIA_OBS_DIR;
    else process.env.SFIA_OBS_DIR = prevObs;
    rmSync(obsDir, { recursive: true, force: true });
  });

  it("same clientTurnKey + same payload → durable replay without second assistant", async () => {
    const key = `turn-idem-${Date.now()}`;
    const content = "Compare brièvement option A et option B pour le sas.";
    const first = await postUserMessageAndNora(pilotId, preparationId, content, {
      clientTurnKey: key,
    });
    expect(first.idempotentReplay).toBe(false);
    expect(first.operationId).toBeTruthy();
    expect(first.status).toBe("COMPLETE");
    expect(first.policy?.profile).toBe("analyse");

    const msgsAfterFirst = await listMessages(pilotId, preparationId);
    const count1 = msgsAfterFirst.length;

    const second = await postUserMessageAndNora(pilotId, preparationId, content, {
      clientTurnKey: key,
    });
    expect(second.idempotentReplay).toBe(true);
    expect(second.operationId).toBe(first.operationId);

    const msgsAfterSecond = await listMessages(pilotId, preparationId);
    expect(msgsAfterSecond.length).toBe(count1);

    const obs = queryObsByOperationId(String(first.operationId));
    expect(obs.status).toBe("AVAILABLE");
    expect(obs.events.some((e) => e.event_name === "d3.turn.replay")).toBe(true);
  });

  it("same key + divergent payload → 409 PAYLOAD_MISMATCH", async () => {
    const key = `turn-mismatch-${Date.now()}`;
    await postUserMessageAndNora(pilotId, preparationId, "Première intention stable", {
      clientTurnKey: key,
    });
    await expect(
      postUserMessageAndNora(pilotId, preparationId, "Payload complètement différent", {
        clientTurnKey: key,
      }),
    ).rejects.toSatisfy((e: unknown) => e instanceof StudioError && e.code === "PAYLOAD_MISMATCH");
  });

  it("fixture investigation path records D4 tool call under TEST_BOUNDARY", async () => {
    const key = `turn-tools-${Date.now()}`;
    const result = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Investigue les contradictions éventuelles dans les sources du projet et vérifie les versions",
      { clientTurnKey: key },
    );
    expect(result.policy?.profile).toBe("investigation");
    expect(result.toolCallsObserved).toBeGreaterThanOrEqual(1);
  });
});
