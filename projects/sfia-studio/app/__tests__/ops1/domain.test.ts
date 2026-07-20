import { describe, expect, it } from "vitest";
import { createEventId, createSessionId, createTurnId } from "@/lib/ops1/ids";
import {
  assertMessageContent,
  assertSessionId,
  assertTurnRole,
} from "@/lib/ops1/validation";
import { Ops1Error } from "@/lib/ops1/errors";
import { buildFixtureAssistantReply } from "@/lib/ops1/fixtureReply";
import { OPS1_MAX_MESSAGE_CHARS } from "@/lib/ops1/types";

describe("ops1 ids", () => {
  it("creates unique session and turn ids", () => {
    const a = createSessionId();
    const b = createSessionId();
    expect(a).not.toEqual(b);
    expect(a).toMatch(/^ops1-sess-/);
    expect(createTurnId()).toMatch(/^ops1-turn-/);
    expect(createEventId()).toMatch(/^ops1-evt-/);
  });
});

describe("ops1 validation", () => {
  it("accepts valid session id", () => {
    const id = createSessionId();
    expect(assertSessionId(id)).toBe(id);
  });

  it("rejects invalid session id", () => {
    expect(() => assertSessionId("nope")).toThrow(Ops1Error);
  });

  it("validates message content", () => {
    expect(assertMessageContent("  hello  ")).toBe("hello");
    expect(() => assertMessageContent("")).toThrow(Ops1Error);
    expect(() => assertMessageContent("x".repeat(OPS1_MAX_MESSAGE_CHARS + 1))).toThrow(
      Ops1Error,
    );
  });

  it("validates roles", () => {
    expect(assertTurnRole("user")).toBe("user");
    expect(assertTurnRole("assistant_fixture")).toBe("assistant_fixture");
    expect(() => assertTurnRole("assistant")).toThrow(Ops1Error);
  });
});

describe("ops1 fixture reply", () => {
  it("marks non-live fixture content", () => {
    const reply = buildFixtureAssistantReply("Bonjour Campus360");
    expect(reply).toContain("FIXTURE / NON LIVE");
    expect(reply).toContain("Aucun fournisseur GPT");
    expect(reply).toContain("Bonjour Campus360");
  });
});
