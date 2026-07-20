import { describe, expect, it, beforeEach } from "vitest";
import { mkdtempSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  assertPreCallLimits,
  detectObviousSecrets,
  estimateCostEur,
  estimateTokensFromText,
  maxEstimatedCostEurForCall,
  resetSessionCallCountForTests,
  incrementSessionCallCount,
  getSessionCallCount,
  writeDailyCounter,
  localDayKey,
} from "../src/finops/qualificationLimits.js";
import {
  assertCandidateAuthorityInvariants,
  validateQualificationModelPayload,
} from "../src/validation/qualificationCandidateValidator.js";
import {
  GptQualificationLivePort,
  runQualificationFixture,
} from "../src/ports/gptQualificationLive.js";
import {
  INC_C_LIMITS,
  INCREMENT_C_MODEL,
  QUALIFICATION_CANDIDATE_SCHEMA_VERSION,
  QUALIFICATION_MODEL_JSON_SCHEMA,
  SFIA_BLOCKS,
  SFIA_BLOCK_LABELS,
  SFIA_CYCLES,
  SFIA_CYCLE_LABELS,
} from "../src/types/qualificationCandidate.js";
import { HarnessError } from "../src/types/contracts.js";
import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const HARNESS_SRC = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../src");

function tmp(): string {
  return mkdtempSync(path.join(os.tmpdir(), "sfia-inc-c-"));
}

function validPayload(overrides: Record<string, unknown> = {}) {
  return {
    schemaVersion: QUALIFICATION_CANDIDATE_SCHEMA_VERSION,
    requestId: "req-c-1",
    correlationId: "corr-c-1",
    summary: "Add admin authentication",
    proposedCycle: "delivery-implementation",
    proposedProfile: "Standard",
    profileJustification: "Bounded delivery change",
    proposedBlocks: ["securite"],
    proposedScope: ["auth module"],
    proposedGates: ["G-MORRIS-REVIEW"],
    risks: ["misconfig"],
    ambiguities: [],
    questions: ["Which IdP?"],
    confidence: 0.6,
    reserves: ["Candidate only"],
    ...overrides,
  };
}

beforeEach(() => {
  resetSessionCallCountForTests();
});

describe("Increment C — FinOps limits", () => {
  it("estimates tokens and cost under caps", () => {
    expect(estimateTokensFromText("abcd")).toBe(1);
    expect(maxEstimatedCostEurForCall()).toBeLessThanOrEqual(INC_C_LIMITS.maxCostEurPerCall);
    expect(estimateCostEur(100, 50)).toBeGreaterThan(0);
  });

  it("keeps FinOps ceilings unchanged", () => {
    expect(INC_C_LIMITS.maxInputTokens).toBe(6_000);
    expect(INC_C_LIMITS.maxOutputTokens).toBe(1_500);
    expect(INC_C_LIMITS.maxTotalTokens).toBe(7_500);
    expect(INC_C_LIMITS.maxCostEurPerCall).toBe(0.05);
    expect(INC_C_LIMITS.maxDailyCostEur).toBe(1.0);
    expect(INC_C_LIMITS.maxSessionCalls).toBe(3);
    expect(INC_C_LIMITS.maxDailyCalls).toBe(20);
    expect(INC_C_LIMITS.timeoutMs).toBe(30_000);
    expect(INC_C_LIMITS.model).toBe("gpt-5.4-mini");
  });

  it("refuses input over 6000 tokens before call", () => {
    const daily = path.join(tmp(), "daily.json");
    try {
      assertPreCallLimits({
        estimatedInputTokens: 6001,
        sessionKey: "s",
        dailyCounterPath: daily,
      });
      expect.fail("should throw");
    } catch (e) {
      expect((e as HarnessError).code).toBe("INPUT_LIMIT_REACHED");
    }
  });

  it("allows total at 7500 boundary and rejects post-call overage via live port", async () => {
    const daily = path.join(tmp(), "daily.json");
    expect(() =>
      assertPreCallLimits({
        estimatedInputTokens: 6000,
        sessionKey: "bound",
        dailyCounterPath: daily,
        maxOutputTokens: 1500,
      }),
    ).not.toThrow();

    const port = new GptQualificationLivePort({
      env: { OPENAI_API_KEY: "sk-test", SFIA_GPT_INC_C_LIVE: "1" },
      dailyCounterPath: path.join(tmp(), "d.json"),
      proofsRoot: tmp(),
      transport: async () => ({
        ok: true,
        status: 200,
        durationMs: 5,
        text: JSON.stringify({
          id: "chatcmpl-overage",
          model: INCREMENT_C_MODEL,
          choices: [{ message: { content: JSON.stringify(validPayload()) }, finish_reason: "stop" }],
          usage: { prompt_tokens: 6000, completion_tokens: 1501, total_tokens: 7501 },
        }),
      }),
    });
    const r = await port.run({
      requestId: "req-c-1",
      correlationId: "corr-c-1",
      demandText: "Add admin authentication",
      confirmedByUser: true,
      live: true,
      proofDir: tmp(),
    });
    expect(r.ok).toBe(false);
    expect(r.errorCode).toBe("OUTPUT_LIMIT_REACHED");
  });

  it("refuses output budget over 1500", () => {
    const daily = path.join(tmp(), "daily.json");
    try {
      assertPreCallLimits({
        estimatedInputTokens: 100,
        sessionKey: "s",
        dailyCounterPath: daily,
        maxOutputTokens: 1501,
      });
      expect.fail("should throw");
    } catch (e) {
      expect((e as HarnessError).code).toBe("OUTPUT_LIMIT_REACHED");
    }
  });

  it("refuses 4th session qualification", () => {
    const daily = path.join(tmp(), "daily.json");
    incrementSessionCallCount("s");
    incrementSessionCallCount("s");
    incrementSessionCallCount("s");
    expect(getSessionCallCount("s")).toBe(3);
    try {
      assertPreCallLimits({
        estimatedInputTokens: 100,
        sessionKey: "s",
        dailyCounterPath: daily,
      });
      expect.fail("should throw");
    } catch (e) {
      expect((e as HarnessError).code).toBe("SESSION_LIMIT_REACHED");
    }
  });

  it("refuses 21st daily call", () => {
    const daily = path.join(tmp(), "daily.json");
    writeDailyCounter(daily, {
      day: localDayKey(),
      callCount: 20,
      estimatedCostEur: 0.1,
      updatedAt: new Date().toISOString(),
    });
    try {
      assertPreCallLimits({
        estimatedInputTokens: 100,
        sessionKey: "fresh",
        dailyCounterPath: daily,
      });
      expect.fail("should throw");
    } catch (e) {
      expect((e as HarnessError).code).toBe("DAILY_LIMIT_REACHED");
    }
  });

  it("refuses when daily cost already at €1", () => {
    const daily = path.join(tmp(), "daily.json");
    writeDailyCounter(daily, {
      day: localDayKey(),
      callCount: 1,
      estimatedCostEur: 1.0,
      updatedAt: new Date().toISOString(),
    });
    try {
      assertPreCallLimits({
        estimatedInputTokens: 100,
        sessionKey: "fresh2",
        dailyCounterPath: daily,
      });
      expect.fail("should throw");
    } catch (e) {
      expect((e as HarnessError).code).toBe("COST_LIMIT_REACHED");
    }
  });

  it("detects obvious secrets", () => {
    expect(detectObviousSecrets("sk-abcdefghijklmnopqrstuvwxyz")).toBe(true);
    expect(detectObviousSecrets("hello world")).toBe(false);
  });
});

describe("Increment C — canonical cycles (15)", () => {
  it("accepts each of the 15 canonical cycles", () => {
    expect(SFIA_CYCLES).toHaveLength(15);
    expect(Object.keys(SFIA_CYCLE_LABELS)).toHaveLength(15);
    for (const cycle of SFIA_CYCLES) {
      const p = validateQualificationModelPayload(validPayload({ proposedCycle: cycle }), {
        requestId: "req-c-1",
        correlationId: "corr-c-1",
      });
      expect(p.proposedCycle).toBe(cycle);
    }
  });

  it("rejects unknown cycle", () => {
    expect(() =>
      validateQualificationModelPayload(validPayload({ proposedCycle: "Cycle 99" }), {
        requestId: "req-c-1",
        correlationId: "corr-c-1",
      }),
    ).toThrow(/Unknown cycle/);
  });

  it("rejects DOC as a cycle", () => {
    expect(() =>
      validateQualificationModelPayload(validPayload({ proposedCycle: "DOC" }), {
        requestId: "req-c-1",
        correlationId: "corr-c-1",
      }),
    ).toThrow(/Unknown cycle/);
  });

  it("rejects legacy Cycle 7/8/9/13 strings", () => {
    for (const cycle of ["Cycle 7", "Cycle 8", "Cycle 9", "Cycle 13"]) {
      expect(() =>
        validateQualificationModelPayload(validPayload({ proposedCycle: cycle }), {
          requestId: "req-c-1",
          correlationId: "corr-c-1",
        }),
      ).toThrow(/Unknown cycle/);
    }
  });

  it("accepts UX/UI, Sécurité/RSSI, Déploiement/release, Post-merge, Capitalisation/REX", () => {
    for (const cycle of [
      "ux-ui",
      "securite-rssi",
      "deploiement-release",
      "post-merge",
      "capitalisation-rex",
    ] as const) {
      const p = validateQualificationModelPayload(validPayload({ proposedCycle: cycle }), {
        requestId: "req-c-1",
        correlationId: "corr-c-1",
      });
      expect(p.proposedCycle).toBe(cycle);
    }
  });

  it("schema enum matches SFIA_CYCLES exactly", () => {
    const enumCycles = QUALIFICATION_MODEL_JSON_SCHEMA.properties.proposedCycle.enum;
    expect([...enumCycles]).toEqual([...SFIA_CYCLES]);
    expect(SFIA_CYCLES).not.toContain("DOC");
  });
});

describe("Increment C — canonical blocks (11)", () => {
  it("accepts each of the 11 canonical blocks", () => {
    expect(SFIA_BLOCKS).toHaveLength(11);
    expect(Object.keys(SFIA_BLOCK_LABELS)).toHaveLength(11);
    for (const block of SFIA_BLOCKS) {
      const p = validateQualificationModelPayload(validPayload({ proposedBlocks: [block] }), {
        requestId: "req-c-1",
        correlationId: "corr-c-1",
      });
      expect(p.proposedBlocks).toEqual([block]);
    }
  });

  it("accepts RGPD, Accessibilité, GreenOps, UX/UI+Figma, Observabilité", () => {
    const blocks = ["rgpd", "accessibilite", "greenops", "ux-ui-figma", "observabilite-run-readiness"];
    const p = validateQualificationModelPayload(validPayload({ proposedBlocks: blocks }), {
      requestId: "req-c-1",
      correlationId: "corr-c-1",
    });
    expect(p.proposedBlocks).toEqual(blocks);
  });

  it("rejects governance, data, ops, documentation and other generic categories", () => {
    for (const block of [
      "governance",
      "data",
      "ops",
      "documentation",
      "delivery",
      "architecture",
      "ux",
      "security",
    ]) {
      expect(() =>
        validateQualificationModelPayload(validPayload({ proposedBlocks: [block] }), {
          requestId: "req-c-1",
          correlationId: "corr-c-1",
        }),
      ).toThrow(/Unauthorized block/);
    }
  });

  it("schema enum matches SFIA_BLOCKS exactly", () => {
    const enumBlocks = QUALIFICATION_MODEL_JSON_SCHEMA.properties.proposedBlocks.items.enum;
    expect([...enumBlocks]).toEqual([...SFIA_BLOCKS]);
  });
});

describe("Increment C — QualificationCandidate validation", () => {
  it("accepts valid payload", () => {
    const p = validateQualificationModelPayload(validPayload(), {
      requestId: "req-c-1",
      correlationId: "corr-c-1",
    });
    expect(p.proposedCycle).toBe("delivery-implementation");
    expect(p.proposedBlocks).toEqual(["securite"]);
  });

  it("rejects unknown profile", () => {
    expect(() =>
      validateQualificationModelPayload(validPayload({ proposedProfile: "Ultra" }), {
        requestId: "req-c-1",
        correlationId: "corr-c-1",
      }),
    ).toThrow(/Unknown profile|INVALID_RESPONSE/);
  });

  it("rejects Critical without justification", () => {
    expect(() =>
      validateQualificationModelPayload(
        validPayload({ proposedProfile: "Critical", profileJustification: "  " }),
        { requestId: "req-c-1", correlationId: "corr-c-1" },
      ),
    ).toThrow(/Critical/);
  });

  it("rejects unknown properties and bad confidence", () => {
    expect(() =>
      validateQualificationModelPayload(validPayload({ extra: true }), {
        requestId: "req-c-1",
        correlationId: "corr-c-1",
      }),
    ).toThrow(/Unknown property/);
    expect(() =>
      validateQualificationModelPayload(validPayload({ confidence: 1.5 }), {
        requestId: "req-c-1",
        correlationId: "corr-c-1",
      }),
    ).toThrow(/confidence/);
  });
});

describe("Increment C — authority invariants", () => {
  it("rejects candidateOnly=false", () => {
    expect(() =>
      assertCandidateAuthorityInvariants({
        authority: {
          candidateOnly: false,
          morrisDecisionRequired: true,
          executionAuthorized: false,
        },
      }),
    ).toThrow(/candidateOnly/);
  });

  it("rejects executionAuthorized=true", () => {
    expect(() =>
      assertCandidateAuthorityInvariants({
        authority: {
          candidateOnly: true,
          morrisDecisionRequired: true,
          executionAuthorized: true,
        },
      }),
    ).toThrow(/executionAuthorized/);
  });

  it("rejects morrisDecisionRequired=false", () => {
    expect(() =>
      assertCandidateAuthorityInvariants({
        authority: {
          candidateOnly: true,
          morrisDecisionRequired: false,
          executionAuthorized: false,
        },
      }),
    ).toThrow(/morrisDecisionRequired/);
  });

  it("fixture never becomes a Morris decision", async () => {
    const r = await runQualificationFixture({
      requestId: "r",
      correlationId: "c",
      demandText: "Ajouter une authentification administrateur à une application interne",
      confirmedByUser: true,
    });
    expect(r.candidate?.authority).toEqual({
      candidateOnly: true,
      morrisDecisionRequired: true,
      executionAuthorized: false,
    });
    expect(r.candidate?.proposedCycle).toBe("delivery-implementation");
    expect(r.candidate?.proposedBlocks).toEqual(["securite", "devops"]);
    expect(r.mode).toBe("fixture");
    expect(r.demandProvenance?.length).toBeGreaterThan(10);
  });

  it("fixture Campus360 demand uses cadrage and preserves provenance", async () => {
    const demand =
      "Je veux lancer un cycle de cadrage pour préparer le développement de Campus360.";
    const r = await runQualificationFixture({
      requestId: "req-campus",
      correlationId: "corr-campus",
      demandText: demand,
      confirmedByUser: true,
    });
    expect(r.ok).toBe(true);
    expect(r.liveInvoked).toBe(false);
    expect(r.candidate?.proposedCycle).toBe("cadrage");
    expect(r.demandProvenance?.preview).toContain("Campus360");
    expect(r.candidate?.proposedScope?.[0]).toContain("Campus360");
    expect(SFIA_CYCLES).toContain(r.candidate?.proposedCycle);
  });
});

describe("Increment C — live port with mocked transport", () => {
  it("requires confirmation and does not retry", async () => {
    const port = new GptQualificationLivePort({
      env: { OPENAI_API_KEY: "sk-test", SFIA_GPT_INC_C_LIVE: "1" },
      dailyCounterPath: path.join(tmp(), "d.json"),
      proofsRoot: tmp(),
      transport: async () => {
        throw new Error("should not be called");
      },
    });
    const r = await port.run({
      requestId: "r",
      correlationId: "c",
      demandText: "test",
      confirmedByUser: false,
      live: true,
      proofDir: tmp(),
    });
    expect(r.ok).toBe(false);
    expect(r.errorCode).toBe("CONFIRMATION_REQUIRED");
    expect(r.retriesAttempted).toBe(0);
    expect(r.liveInvoked).toBe(false);
  });

  it("refuses different model from env without fallback", async () => {
    const port = new GptQualificationLivePort({
      env: {
        OPENAI_API_KEY: "sk-test",
        SFIA_GPT_INC_C_LIVE: "1",
        OPENAI_MODEL: "gpt-4o-mini",
      },
      dailyCounterPath: path.join(tmp(), "d.json"),
      proofsRoot: tmp(),
      transport: async () => ({ ok: true, status: 200, text: "{}", durationMs: 1 }),
    });
    const r = await port.run({
      requestId: "r",
      correlationId: "c",
      demandText: "Add admin authentication to internal app",
      confirmedByUser: true,
      live: true,
      proofDir: tmp(),
    });
    expect(r.ok).toBe(false);
    expect(r.errorCode).toBe("MODEL_UNAVAILABLE");
    expect(r.liveInvoked).toBe(false);
  });

  it("refuses missing key without exposing it", async () => {
    const port = new GptQualificationLivePort({
      env: { SFIA_GPT_INC_C_LIVE: "1" },
      dailyCounterPath: path.join(tmp(), "d.json"),
      proofsRoot: tmp(),
    });
    const r = await port.run({
      requestId: "r",
      correlationId: "c",
      demandText: "x",
      confirmedByUser: true,
      live: true,
      proofDir: tmp(),
    });
    expect(r.errorCode).toBe("KEY_ABSENT");
    expect(JSON.stringify(r)).not.toMatch(/sk-/);
  });

  it("times out without success", async () => {
    const port = new GptQualificationLivePort({
      env: { OPENAI_API_KEY: "sk-test", SFIA_GPT_INC_C_LIVE: "1" },
      dailyCounterPath: path.join(tmp(), "d.json"),
      proofsRoot: tmp(),
      timeoutMs: 30,
      transport: async () => {
        throw new HarnessError("GPT_TIMEOUT", "OpenAI request timed out after 30ms");
      },
    });
    const r = await port.run({
      requestId: "r",
      correlationId: "c",
      demandText: "Add admin authentication",
      confirmedByUser: true,
      live: true,
      proofDir: tmp(),
    });
    expect(r.ok).toBe(false);
    expect(r.errorCode).toBe("TIMEOUT");
    expect(r.status).not.toBe("CANDIDATE_CREATED");
  });

  it("creates candidate from structured mock response (single call)", async () => {
    let calls = 0;
    const payload = validPayload({
      proposedCycle: "ux-ui",
      proposedBlocks: ["rgpd", "accessibilite", "ux-ui-figma"],
    });
    const port = new GptQualificationLivePort({
      env: { OPENAI_API_KEY: "sk-test", SFIA_GPT_INC_C_LIVE: "1" },
      dailyCounterPath: path.join(tmp(), "d.json"),
      proofsRoot: tmp(),
      transport: async (body) => {
        calls += 1;
        expect(body.model).toBe(INCREMENT_C_MODEL);
        expect(body.max_completion_tokens).toBe(1500);
        expect(body.tools).toBeUndefined();
        expect((body.response_format as { type: string }).type).toBe("json_schema");
        const schemaName = (body.response_format as { json_schema: { name: string } }).json_schema
          .name;
        expect(schemaName).toBe("qualification_candidate_1_1_0");
        return {
          ok: true,
          status: 200,
          durationMs: 12,
          text: JSON.stringify({
            id: "chatcmpl-testabcdefgh",
            model: INCREMENT_C_MODEL,
            choices: [{ message: { content: JSON.stringify(payload) }, finish_reason: "stop" }],
            usage: { prompt_tokens: 200, completion_tokens: 100, total_tokens: 300 },
          }),
        };
      },
    });
    const r = await port.run({
      requestId: "req-c-1",
      correlationId: "corr-c-1",
      demandText: "Concevoir le parcours UX/UI d’un formulaire public",
      confirmedByUser: true,
      live: true,
      proofDir: tmp(),
    });
    expect(calls).toBe(1);
    expect(r.ok).toBe(true);
    expect(r.candidate?.proposedCycle).toBe("ux-ui");
    expect(r.candidate?.proposedBlocks).toEqual(["rgpd", "accessibilite", "ux-ui-figma"]);
    expect(r.candidate?.authority.candidateOnly).toBe(true);
    expect(r.candidate?.authority.executionAuthorized).toBe(false);
    expect(r.candidate?.authority.morrisDecisionRequired).toBe(true);
    expect(r.usage?.costIsEstimate).toBe(true);
    expect(r.retriesAttempted).toBe(0);
  });

  it("rejects invalid JSON from provider as INVALID_RESPONSE", async () => {
    const port = new GptQualificationLivePort({
      env: { OPENAI_API_KEY: "sk-test", SFIA_GPT_INC_C_LIVE: "1" },
      dailyCounterPath: path.join(tmp(), "d.json"),
      proofsRoot: tmp(),
      transport: async () => ({
        ok: true,
        status: 200,
        durationMs: 5,
        text: JSON.stringify({
          id: "chatcmpl-x",
          model: INCREMENT_C_MODEL,
          choices: [{ message: { content: "{not-json" }, finish_reason: "stop" }],
          usage: { prompt_tokens: 10, completion_tokens: 5, total_tokens: 15 },
        }),
      }),
    });
    const r = await port.run({
      requestId: "req-c-1",
      correlationId: "corr-c-1",
      demandText: "auth",
      confirmedByUser: true,
      live: true,
      proofDir: tmp(),
    });
    expect(r.ok).toBe(false);
    expect(r.errorCode).toBe("INVALID_RESPONSE");
  });
});

describe("Increment C — fixture helper and autonomy", () => {
  it("fixture run never invokes live", async () => {
    const r = await runQualificationFixture({
      requestId: "r",
      correlationId: "c",
      demandText: "demande utilisateur réelle pour fixture",
      confirmedByUser: true,
    });
    expect(r.ok).toBe(true);
    expect(r.liveInvoked).toBe(false);
  });

  it("harness src has no React and no Cursor live in Increment C port", () => {
    const walk = (dir: string): string[] => {
      const out: string[] = [];
      for (const ent of readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, ent.name);
        if (ent.isDirectory()) out.push(...walk(p));
        else if (/\.ts$/.test(ent.name)) out.push(p);
      }
      return out;
    };
    const livePort = readFileSync(path.join(HARNESS_SRC, "ports/gptQualificationLive.ts"), "utf8");
    expect(livePort).not.toMatch(/from ["']react["']/);
    expect(livePort).not.toMatch(/CursorExecutorPortRealSpike/);
    expect(livePort).not.toMatch(/git push/);
    for (const f of walk(path.join(HARNESS_SRC, "finops"))) {
      expect(readFileSync(f, "utf8")).not.toMatch(/from ["']react["']/);
    }
  });

  it("Increment C live path does not hardcode legacy Cycle/DOC or generic blocks", () => {
    const files = [
      "types/qualificationCandidate.ts",
      "ports/gptQualificationLive.ts",
      "validation/qualificationCandidateValidator.ts",
    ];
    for (const rel of files) {
      const src = readFileSync(path.join(HARNESS_SRC, rel), "utf8");
      expect(src).not.toMatch(/"Cycle 7"/);
      expect(src).not.toMatch(/"Cycle 8"/);
      expect(src).not.toMatch(/"Cycle 9"/);
      expect(src).not.toMatch(/"Cycle 13"/);
      expect(src).not.toMatch(/proposedCycle:\s*"DOC"/);
      expect(src).not.toMatch(/proposedBlocks:\s*\[[^\]]*governance/);
      expect(src).not.toMatch(/proposedBlocks:\s*\[[^\]]*documentation/);
    }
    const types = readFileSync(path.join(HARNESS_SRC, "types/qualificationCandidate.ts"), "utf8");
    expect(types).toMatch(/"ux-ui"/);
    expect(types).toMatch(/"rgpd"/);
    expect(types).toMatch(/"accessibilite"/);
    expect(SFIA_CYCLES).toHaveLength(15);
    expect(SFIA_BLOCKS).toHaveLength(11);
  });
});
