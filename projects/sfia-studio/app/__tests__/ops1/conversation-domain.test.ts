/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import {
  buildProviderMessagesFromJournal,
} from "@/lib/ops1/conversation/types";
import { getLiveConversationAvailability } from "@/lib/ops1/conversation/config";
import { FakeConversationProvider } from "@/lib/ops1/conversation/fakeProvider";
import { inferLegacyConversationMode } from "@/lib/ops1/db";
import type { JournalTurn } from "@/lib/ops1/types";
import { LEGACY_SESSION_MODE_AMBIGUOUS } from "@/lib/ops1/types";
import { assertConversationMode, assertTurnRole } from "@/lib/ops1/validation";
import { Ops1Error } from "@/lib/ops1/errors";

function turn(
  partial: Pick<JournalTurn, "role" | "content" | "sequence">,
): JournalTurn {
  return {
    turnId: `ops1-turn-${partial.sequence}`,
    sessionId: "ops1-sess-00000000-0000-4000-8000-000000000001",
    fixture: partial.role === "assistant_fixture",
    createdAt: "2026-07-20T22:00:00+02:00",
    ...partial,
  };
}

describe("ops1 conversation domain (immutable mode)", () => {
  it("builds live context from user + assistant_live only", () => {
    const messages = buildProviderMessagesFromJournal(
      [
        turn({ sequence: 1, role: "user", content: "u1" }),
        turn({ sequence: 2, role: "assistant_live", content: "a1" }),
        turn({ sequence: 3, role: "user", content: "u2" }),
      ],
      "live",
    );
    expect(messages).toEqual([
      { role: "user", content: "u1" },
      { role: "assistant", content: "a1" },
      { role: "user", content: "u2" },
    ]);
  });

  it("refuses fixture assistant in live context without filtering", () => {
    expect(() =>
      buildProviderMessagesFromJournal(
        [
          turn({ sequence: 1, role: "user", content: "u1" }),
          turn({ sequence: 2, role: "assistant_fixture", content: "bad" }),
        ],
        "live",
      ),
    ).toThrow(Ops1Error);
  });

  it("refuses live assistant in fixture context", () => {
    expect(() =>
      buildProviderMessagesFromJournal(
        [
          turn({ sequence: 1, role: "user", content: "u1" }),
          turn({ sequence: 2, role: "assistant_live", content: "bad" }),
        ],
        "fixture",
      ),
    ).toThrow(Ops1Error);
  });

  it("fake provider returns usage and non-live tagged text", async () => {
    const provider = new FakeConversationProvider();
    const result = await provider.complete([
      { role: "user", content: "bonjour" },
    ]);
    expect(result.text).toContain("TEST/FAKE");
    expect(result.text).toContain("NON LIVE");
  });

  it("reports missing live config without exposing secrets", () => {
    const prevKey = process.env.OPENAI_API_KEY;
    const prevModel = process.env.OPENAI_MODEL;
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    const status = getLiveConversationAvailability();
    expect(status.available).toBe(false);
    if (prevKey !== undefined) process.env.OPENAI_API_KEY = prevKey;
    if (prevModel !== undefined) process.env.OPENAI_MODEL = prevModel;
  });

  it("infers legacy modes and detects ambiguity", () => {
    expect(inferLegacyConversationMode(["user", "assistant_fixture"], [])).toBe(
      "fixture",
    );
    expect(inferLegacyConversationMode(["user", "assistant_live"], [])).toBe(
      "live",
    );
    expect(inferLegacyConversationMode(["user"], ["openai"])).toBe("live");
    expect(() =>
      inferLegacyConversationMode(
        ["assistant_fixture", "assistant_live"],
        [],
      ),
    ).toThrow(Ops1Error);
    try {
      inferLegacyConversationMode(
        ["assistant_fixture", "assistant_live"],
        [],
      );
    } catch (e) {
      expect((e as Ops1Error).safeMessage).toBe(LEGACY_SESSION_MODE_AMBIGUOUS);
    }
  });

  it("accepts assistant_live role and conversation modes", () => {
    expect(assertTurnRole("assistant_live")).toBe("assistant_live");
    expect(assertConversationMode("live")).toBe("live");
  });
});
