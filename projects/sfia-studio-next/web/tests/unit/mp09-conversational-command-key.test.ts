import { describe, expect, it } from "vitest";
import {
  conversationalCommandKey,
  conversationalCommandKeyForIntent,
} from "@/domains/pilotage/conversation-authority";

describe("MP-09 — per-intent conversational command keys", () => {
  it("scopes sibling intents under the same clientTurnKey without collision", () => {
    const turn = "turn-maintiplan-t05";
    const open = conversationalCommandKeyForIntent(turn, "intent-open-cycle");
    const design = conversationalCommandKeyForIntent(turn, "intent-functional-design");
    const bare = conversationalCommandKey(turn);
    expect(open).not.toBe(design);
    expect(open.startsWith(bare)).toBe(true);
    expect(design.startsWith(bare)).toBe(true);
    expect(conversationalCommandKeyForIntent(turn, null)).toBe(bare);
    expect(conversationalCommandKeyForIntent(turn, "  ")).toBe(bare);
  });
});
