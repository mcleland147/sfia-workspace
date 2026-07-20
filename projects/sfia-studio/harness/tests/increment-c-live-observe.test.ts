/**
 * Opt-in live observation for Increment C user-input — ONE call max.
 * Prefer Campus360 demand to prove real demandText reaches GPT.
 *
 *   SFIA_GPT_INC_C_OBSERVE=1 SFIA_GPT_INC_C_LIVE=1 OPENAI_API_KEY=… \
 *   OPENAI_MODEL=gpt-5.4-mini npm test -- tests/increment-c-live-observe.test.ts
 */

import { describe, expect, it } from "vitest";
import { mkdtempSync, writeFileSync, mkdirSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { GptQualificationLivePort } from "../src/ports/gptQualificationLive.js";
import {
  INCREMENT_C_MODEL,
  SFIA_BLOCKS,
  SFIA_CYCLES,
} from "../src/types/qualificationCandidate.js";

const observe = process.env.SFIA_GPT_INC_C_OBSERVE === "1";

describe.skipIf(!observe)("Increment C corrective — live observation (opt-in, single call)", () => {
  it("produces one QualificationCandidate with canonical cycles/blocks via gpt-5.4-mini", async () => {
    expect(process.env.OPENAI_API_KEY).toBeTruthy();
    const env = {
      ...process.env,
      OPENAI_MODEL: INCREMENT_C_MODEL,
      SFIA_GPT_INC_C_LIVE: "1",
    };
    const proofDir = mkdtempSync(path.join(os.tmpdir(), "sfia-inc-c-corr-live-"));
    const daily = path.join(proofDir, "daily.json");
    const port = new GptQualificationLivePort({
      env,
      dailyCounterPath: daily,
      proofsRoot: proofDir,
      timeoutMs: 30_000,
    });
    const result = await port.run({
      requestId: "req-inc-c-corr-observe-001",
      correlationId: "corr-inc-c-corr-observe-001",
      demandText:
        "Je veux lancer un cycle de cadrage pour préparer le développement de Campus360.",
      authorizedContext: [
        "SFIA Studio POC Increment C user-input",
        "Canonical cycles/blocks v2.6",
        "No Cursor live",
        "No remote Git writes",
      ],
      confirmedByUser: true,
      live: true,
      proofDir: path.join(proofDir, "proof"),
    });

    writeFileSync(
      path.join(proofDir, "observation-sanitized.json"),
      JSON.stringify(
        {
          ok: result.ok,
          status: result.status,
          errorCode: result.errorCode,
          liveInvoked: result.liveInvoked,
          retriesAttempted: result.retriesAttempted,
          model: result.model,
          durationMs: result.durationMs,
          usage: result.usage,
          candidate: result.candidate
            ? {
                candidateId: result.candidate.candidateId,
                summary: result.candidate.summary,
                proposedCycle: result.candidate.proposedCycle,
                proposedProfile: result.candidate.proposedProfile,
                proposedBlocks: result.candidate.proposedBlocks,
                proposedGates: result.candidate.proposedGates,
                authority: result.candidate.authority,
                confidence: result.candidate.confidence,
              }
            : null,
          eventsLogged: result.eventsLogged,
        },
        null,
        2,
      ),
    );
    const reviewPath = path.resolve(
      path.dirname(fileURLToPath(import.meta.url)),
      "../../../../.tmp-sfia-review/inc-c-user-input-live-observation.json",
    );
    mkdirSync(path.dirname(reviewPath), { recursive: true });
    writeFileSync(
      reviewPath,
      JSON.stringify(
        {
          observationDir: proofDir,
          ok: result.ok,
          status: result.status,
          errorCode: result.errorCode,
          usage: result.usage,
          durationMs: result.durationMs,
          candidateSummary: result.candidate
            ? {
                cycle: result.candidate.proposedCycle,
                profile: result.candidate.proposedProfile,
                blocks: result.candidate.proposedBlocks,
                authority: result.candidate.authority,
              }
            : null,
        },
        null,
        2,
      ),
    );

    expect(result.retriesAttempted).toBe(0);
    expect(result.model).toBe(INCREMENT_C_MODEL);
    if (result.ok) {
      expect(result.liveInvoked).toBe(true);
      expect(result.candidate?.authority.candidateOnly).toBe(true);
      expect(result.candidate?.authority.executionAuthorized).toBe(false);
      expect(result.candidate?.authority.morrisDecisionRequired).toBe(true);
      expect(result.usage?.costIsEstimate).toBe(true);
      expect(SFIA_CYCLES).toContain(result.candidate?.proposedCycle);
      expect(result.candidate?.proposedCycle).not.toBe("DOC");
      for (const b of result.candidate?.proposedBlocks ?? []) {
        expect(SFIA_BLOCKS).toContain(b);
      }
      expect(result.candidate?.proposedBlocks?.length).toBeGreaterThan(0);
    } else {
      expect([
        "INVALID_RESPONSE",
        "PROVIDER_ERROR",
        "MODEL_UNAVAILABLE",
        "TIMEOUT",
        "KEY_ABSENT",
      ]).toContain(result.errorCode);
    }
  }, 60_000);
});
