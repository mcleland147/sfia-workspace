/** @vitest-environment node */
/**
 * CORR-MW5-DLV-05 — F2 product path closed-world cosmetic robustness.
 * Controlled Fake DTO only. ZERO LIVE OpenAI.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import {
  CLOSED_WORLD_SAFE_COSMETIC_FR1,
  CLOSED_WORLD_SAFE_COSMETIC_FR2,
  CLOSED_WORLD_UNKNOWN_RESIDUALS,
  DISGUISED_ARCHITECTURE,
  REAL_02_INCOMPLETE_NO_IMPACT_PROMPT,
  WORD_ONLY_COSMETIC,
  falseCriticalSignal,
  makeControlledCosmeticIntentProvider,
} from "@/lib/nora-eval/mw5CosmeticQualificationFixtures";
import type { F2QualificationSignals } from "@/features/project-assistant/f2/types";

const FALSE_STRUCTURAL = falseCriticalSignal("structuralChange");
const FALSE_SECURITY = falseCriticalSignal("securityImpact");
const FALSE_IRREVERSIBLE = falseCriticalSignal("irreversible");
const ALL_CRITICAL: F2QualificationSignals = {
  structuralChange: true,
  securityImpact: true,
  architectureImpact: true,
  dataImpact: true,
  irreversible: true,
  lowRiskBounded: false,
};

describe("MW5 F2 product path — closed-world cosmetic qualification D0", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const tempDirs: string[] = [];
  let projectId = "";

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw5-cw-"));
    tempDirs.push(dir);
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-09-03T18:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "Projet MW5 closed-world",
      objective: "Guardrail cosmétique closed-world.",
      context: "CORR-MW5-DLV-05 D0.",
      criticality: "STANDARD",
      constraints: ["Lecture seule"],
      shortReference: "MW5W",
      idempotencyKey: `idem:mw5w-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("MW5 closed-world setup create failed");
    projectId = created.projectId;
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const dir = tempDirs.pop();
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
    }
    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
  });

  it.each([
    ["structuralChange", falseCriticalSignal("structuralChange")],
    ["architectureImpact", falseCriticalSignal("architectureImpact")],
    ["dataImpact", falseCriticalSignal("dataImpact")],
    ["securityImpact", falseCriticalSignal("securityImpact")],
    ["irreversible", falseCriticalSignal("irreversible")],
  ] as const)(
    "proven-safe FR-1 + false %s → Light / CONTINUE",
    async (_name, signals) => {
      const result = await orchestrateAssistantSend({
        projectId,
        content: CLOSED_WORLD_SAFE_COSMETIC_FR1,
        provider: makeControlledCosmeticIntentProvider(signals),
      });
      expect(result.ok).toBe(true);
      if (!result.ok) return;
      expect(result.mw5?.disposition).toBe("CONTINUE");
      expect(result.text).not.toMatch(/\[MW5 CHALLENGE/);
      expect(result.mw5?.structuralChallengeCount ?? 0).toBe(0);
      expect(result.f2?.qualification?.recommendedProfile).toBe("Light");
    },
  );

  it("proven-safe FR-2 + normal safe signals → Light / CONTINUE", async () => {
    const result = await orchestrateAssistantSend({
      projectId,
      content: CLOSED_WORLD_SAFE_COSMETIC_FR2,
      provider: makeControlledCosmeticIntentProvider({
        structuralChange: false,
        securityImpact: false,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: true,
      }),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.mw5?.disposition).toBe("CONTINUE");
    expect(result.f2?.qualification?.recommendedProfile).toBe("Light");
  });

  it.each([
    ["MFA", CLOSED_WORLD_UNKNOWN_RESIDUALS.mfa],
    ["multi-région", CLOSED_WORLD_UNKNOWN_RESIDUALS.multiRegion],
    ["DynamoDB", CLOSED_WORLD_UNKNOWN_RESIDUALS.dynamodb],
    ["Kafka", CLOSED_WORLD_UNKNOWN_RESIDUALS.kafka],
    ["cache", CLOSED_WORLD_UNKNOWN_RESIDUALS.cache],
    ["webhook", CLOSED_WORLD_UNKNOWN_RESIDUALS.webhook],
    ["Zorblax", CLOSED_WORLD_UNKNOWN_RESIDUALS.zorblax],
  ] as const)(
    "unknown residual %s → Critical / CHALLENGE",
    async (_name, content) => {
      const result = await orchestrateAssistantSend({
        projectId,
        content,
        provider: makeControlledCosmeticIntentProvider(ALL_CRITICAL),
      });
      expect(result.ok).toBe(true);
      if (!result.ok) return;
      expect(result.f2?.qualification?.recommendedProfile).toBe("Critical");
      expect(result.mw5?.disposition).toBe("CHALLENGE");
      expect(result.mw5?.recommendationAllowed).toBe(false);
      expect(result.f2?.proposal).toBeNull();
    },
  );

  it("disguised architecture/data mutation → Critical / CHALLENGE", async () => {
    const result = await orchestrateAssistantSend({
      projectId,
      content: DISGUISED_ARCHITECTURE,
      provider: makeControlledCosmeticIntentProvider({
        structuralChange: true,
        securityImpact: false,
        architectureImpact: true,
        dataImpact: true,
        irreversible: false,
        lowRiskBounded: false,
      }),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.qualification?.recommendedProfile).toBe("Critical");
    expect(result.mw5?.disposition).toBe("CHALLENGE");
    expect(result.f2?.proposal).toBeNull();
  });

  it("word cosmétique only does not force Light", async () => {
    const result = await orchestrateAssistantSend({
      projectId,
      content: WORD_ONLY_COSMETIC,
      provider: makeControlledCosmeticIntentProvider(FALSE_STRUCTURAL),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.qualification?.recommendedProfile).not.toBe("Light");
    expect(result.mw5?.disposition).toBe("CHALLENGE");
  });

  it("incomplete REAL-02 envelope does not neutralize securityImpact", async () => {
    const result = await orchestrateAssistantSend({
      projectId,
      content: REAL_02_INCOMPLETE_NO_IMPACT_PROMPT,
      provider: makeControlledCosmeticIntentProvider(FALSE_SECURITY),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.qualification?.recommendedProfile).toBe("Critical");
    expect(result.mw5?.disposition).toBe("CHALLENGE");
  });

  it("incomplete REAL-02 envelope does not neutralize irreversible", async () => {
    const result = await orchestrateAssistantSend({
      projectId,
      content: REAL_02_INCOMPLETE_NO_IMPACT_PROMPT,
      provider: makeControlledCosmeticIntentProvider(FALSE_IRREVERSIBLE),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.qualification?.recommendedProfile).toBe("Critical");
    expect(result.mw5?.disposition).toBe("CHALLENGE");
  });
});
