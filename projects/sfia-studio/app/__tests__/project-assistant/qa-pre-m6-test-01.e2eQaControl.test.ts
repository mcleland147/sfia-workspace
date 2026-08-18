/**
 * H-QA — Option A E2E QA control self-tests (QA-PRE-M6-TEST-01).
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  armTerminalScenario,
  clearArmedTerminal,
  consumeArmedTerminalForConfirm,
  isKnownOptionAQaScenario,
  isOptionAQaControlEnabled,
  peekArmedTerminal,
  rejectUnknownOptionAQaFields,
} from "@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl";

function enableAll() {
  vi.stubEnv("NODE_ENV", "test");
  vi.stubEnv("OPS1_E2E_ALLOW_DIRTY_PRINCIPAL", "1");
  vi.stubEnv("OPS1_CONVERSATION_PROVIDER", "fake");
  vi.stubEnv("SFIA_STUDIO_E2E_QA_CONTROL", "1");
  vi.stubEnv("SFIA_STUDIO_CURSOR_REAL", "");
  vi.stubEnv("OPS1_CURSOR_REAL", "");
}

describe("H-QA Option A E2E control gates", () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
    clearArmedTerminal();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    clearArmedTerminal();
  });

  it("H-QA-01 — disabled without SFIA_STUDIO_E2E_QA_CONTROL", () => {
    vi.stubEnv("NODE_ENV", "test");
    vi.stubEnv("OPS1_E2E_ALLOW_DIRTY_PRINCIPAL", "1");
    vi.stubEnv("OPS1_CONVERSATION_PROVIDER", "fake");
    vi.stubEnv("SFIA_STUDIO_E2E_QA_CONTROL", "");
    expect(isOptionAQaControlEnabled()).toBe(false);
  });

  it("H-QA-02 — disabled in NODE_ENV=production", () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("OPS1_E2E_ALLOW_DIRTY_PRINCIPAL", "1");
    vi.stubEnv("OPS1_CONVERSATION_PROVIDER", "fake");
    vi.stubEnv("SFIA_STUDIO_E2E_QA_CONTROL", "1");
    expect(isOptionAQaControlEnabled()).toBe(false);
  });

  it("H-QA-03 — disabled if provider != fake", () => {
    vi.stubEnv("NODE_ENV", "test");
    vi.stubEnv("OPS1_E2E_ALLOW_DIRTY_PRINCIPAL", "1");
    vi.stubEnv("OPS1_CONVERSATION_PROVIDER", "openai");
    vi.stubEnv("SFIA_STUDIO_E2E_QA_CONTROL", "1");
    expect(isOptionAQaControlEnabled()).toBe(false);
  });

  it("H-QA-04 — disabled if REAL flag is active", () => {
    enableAll();
    vi.stubEnv("SFIA_STUDIO_CURSOR_REAL", "1");
    expect(isOptionAQaControlEnabled()).toBe(false);
    vi.stubEnv("SFIA_STUDIO_CURSOR_REAL", "");
    vi.stubEnv("OPS1_CURSOR_REAL", "1");
    expect(isOptionAQaControlEnabled()).toBe(false);
  });

  it("H-QA-05 — unknown scenario rejected by enum", () => {
    expect(isKnownOptionAQaScenario("attempt_failed")).toBe(true);
    expect(isKnownOptionAQaScenario("drop_table")).toBe(false);
  });

  it("H-QA-06 — arbitrary mutation fields rejected", () => {
    expect(rejectUnknownOptionAQaFields({ scenario: "reset", sql: "x" })).toBe(
      "sql",
    );
    expect(
      rejectUnknownOptionAQaFields({
        scenario: "reset",
        projectId: "prj:1",
      }),
    ).toBeNull();
  });

  it("H-QA-07/H-QA-08 — wrong project/decision/contract does not consume arm", () => {
    enableAll();
    armTerminalScenario({
      scenario: "attempt_failed",
      projectId: "prj:a",
      decisionId: "dec:a",
      executionContractId: "xct:a",
    });
    expect(
      consumeArmedTerminalForConfirm({
        projectId: "prj:b",
        decisionId: "dec:a",
        executionContractId: "xct:a",
      }),
    ).toBeNull();
    expect(peekArmedTerminal()).not.toBeNull();
    const consumed = consumeArmedTerminalForConfirm({
      projectId: "prj:a",
      decisionId: "dec:a",
      executionContractId: "xct:a",
    });
    expect(consumed?.scenario).toBe("attempt_failed");
    expect(peekArmedTerminal()).toBeNull();
  });

  it("H-QA-10 — externalEffects true disables gate", () => {
    enableAll();
    expect(isOptionAQaControlEnabled({ fixtureExternalEffects: true })).toBe(
      false,
    );
    expect(isOptionAQaControlEnabled({ fixtureExternalEffects: false })).toBe(
      true,
    );
  });

  it("H-QA-09 — consume clears arm (reset path isolation)", () => {
    enableAll();
    armTerminalScenario({
      scenario: "attempt_timeout",
      projectId: "prj:r",
      decisionId: "dec:r",
      executionContractId: "xct:r",
    });
    clearArmedTerminal();
    expect(peekArmedTerminal()).toBeNull();
  });
});
