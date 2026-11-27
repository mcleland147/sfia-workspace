/**
 * ML3 — documents client/server 0-based audio seq contract at admission time.
 */
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  appendDictationAudio,
  createDictationSession,
  _resetDictationSessionsForTests,
} from "@/domains/conversation/composer-dictation-session";
import { createFixtureRealtimeTransport } from "@/domains/conversation/composer-dictation-transport-fixture";

const root = join(__dirname, "../../src");

describe("ml3 composer dictation client/server seq contract", () => {
  it("client starts seq at 0 and increments; server nextAudioSeq starts at 0", () => {
    const control = readFileSync(
      join(root, "components/figma/ComposerDictationControl.tsx"),
      "utf8",
    );
    const session = readFileSync(
      join(root, "domains/conversation/composer-dictation-session.ts"),
      "utf8",
    );
    expect(control).toMatch(/const seqRef = useRef\(0\)/);
    expect(control).toMatch(/const seq = seqRef\.current/);
    expect(control).toMatch(/seqRef\.current \+= 1/);
    expect(control).toMatch(/seqRef\.current = 0/);
    expect(session).toMatch(/nextAudioSeq: 0/);
    expect(session).toMatch(/input\.seq !== session\.nextAudioSeq/);
    expect(session).toMatch(/session\.nextAudioSeq \+= 1/);
  });

  it("append with seq 0 is accepted immediately after create", async () => {
    process.env.SFIA_COMPOSER_DICTATION = "1";
    process.env.STUDIO_LANE = "DEV";
    const created = await createDictationSession({
      pilotId: "pilot-seq",
      projectId: "proj-seq",
      conversationKey: "proj-seq",
      baselineDraft: "",
      transportFactory: async ({ sessionId }) =>
        createFixtureRealtimeTransport(sessionId),
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    expect(created.session.nextAudioSeq).toBe(0);
    const pcm = Buffer.alloc(320, 1).toString("base64");
    const first = appendDictationAudio({
      sessionId: created.session.sessionId,
      pilotId: "pilot-seq",
      projectId: "proj-seq",
      pcmBase64: pcm,
      seq: 0,
    });
    expect(first.ok).toBe(true);
    expect(created.session.nextAudioSeq).toBe(1);
    _resetDictationSessionsForTests();
  });
});