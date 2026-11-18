/**
 * Level-B ADAPTER FAKE — provider-simulated qualifications at the LIVE boundary.
 * Must NOT use STUDIO_FORCE_NORA_FIXTURE / fixtureSemanticQualify UI keys.
 */
import { afterEach, describe, expect, it } from "vitest";
import { generateNoraReply } from "@/domains/conversation/nora-adapter";
import {
  SIM_PROMPTS,
  listProviderSimulatedPrompts,
  resolveProviderSimulatedQualification,
} from "@/domains/conversation/provider-simulated-qualification";
import { validateNoraTurnQualification } from "@/domains/conversation/semantic-qualification";
import { admitConversationalComposition } from "@/domains/conversation/conversational-composition";
import { parseVisualComposition } from "@/domains/conversation/visual-composition";

describe("Level-B provider-simulated D3 boundary", () => {
  const prev = {
    lane: process.env.STUDIO_LANE,
    e2e: process.env.STUDIO_E2E,
    force: process.env.STUDIO_FORCE_NORA_FIXTURE,
    sim: process.env.STUDIO_NORA_SIMULATED_PROVIDER,
    key: process.env.OPENAI_API_KEY,
  };

  afterEach(() => {
    const restore = (k: keyof typeof prev, env: string) => {
      if (prev[k] === undefined) delete process.env[env];
      else process.env[env] = prev[k];
    };
    restore("lane", "STUDIO_LANE");
    restore("e2e", "STUDIO_E2E");
    restore("force", "STUDIO_FORCE_NORA_FIXTURE");
    restore("sim", "STUDIO_NORA_SIMULATED_PROVIDER");
    restore("key", "OPENAI_API_KEY");
  });

  it("corpus scenarios validate and admit without fixtureDemo gates for real timelines", () => {
    for (const prompt of listProviderSimulatedPrompts()) {
      const q = resolveProviderSimulatedQualification(prompt);
      expect(q).toBeTruthy();
      const v = validateNoraTurnQualification(q!);
      expect(v.ok, prompt).toBe(true);
      if (v.ok && v.value.visualComposition) {
        const parsed = parseVisualComposition(v.value.visualComposition);
        expect(parsed).toBeTruthy();
        if (parsed && "blocks" in parsed) {
          const adm = admitConversationalComposition(parsed as never, {
            containerWidthPx: 1040,
            canonicalText: v.value.replyDraft,
          });
          expect(adm.admitted.length).toBeGreaterThan(0);
        }
      }
    }
  });

  it("S1 prose-only has no visualComposition", () => {
    const q = resolveProviderSimulatedQualification(SIM_PROMPTS.S1)!;
    expect(q.visualComposition).toBeUndefined();
  });

  it("S10 refuses invented quantitative chart", () => {
    const q = resolveProviderSimulatedQualification(SIM_PROMPTS.S10)!;
    expect(q.visualComposition).toBeUndefined();
    expect(q.replyDraft).toMatch(/ne peux pas|trompeur|collect/i);
  });

  it("S6 timeline is present without fixtureDemo", () => {
    const q = resolveProviderSimulatedQualification(SIM_PROMPTS.S6)!;
    const seq = q.visualComposition?.blocks?.find((b) => b.kind === "sequence") as
      | { timeline?: unknown; fixtureDemo?: boolean }
      | undefined;
    expect(seq?.timeline).toBeTruthy();
    expect(seq?.fixtureDemo).toBeFalsy();
  });

  it("generateNoraReply uses provider-simulated mode (not deterministic-fixture)", async () => {
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_NORA_SIMULATED_PROVIDER = "1";
    delete process.env.STUDIO_FORCE_NORA_FIXTURE;
    delete process.env.STUDIO_E2E;
    process.env.OPENAI_API_KEY = "sk-present-but-unused-for-sim";

    const result = await generateNoraReply({ userText: SIM_PROMPTS.S3, contextSnippets: [] });
    expect(result.mode).toBe("provider-simulated");
    expect(result.status).toBe("COMPLETE");
    expect(result.qualification.visualComposition?.blocks?.[0]?.kind).toBe("comparison");
    const alts =
      result.qualification.visualComposition?.blocks?.[0] &&
      result.qualification.visualComposition.blocks[0].kind === "comparison"
        ? result.qualification.visualComposition.blocks[0].alternatives
        : [];
    expect(alts).toHaveLength(3);
    // Must not look like UI-key fixture envelope.
    expect(result.qualification.intents.some((i) => i.constraints.includes("PROVIDER_SIMULATED"))).toBe(
      true,
    );
  });

  it("SIM mode does not use UI-key fixture for matching corpus prompts", async () => {
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_NORA_SIMULATED_PROVIDER = "1";
    process.env.STUDIO_E2E = "1";
    delete process.env.STUDIO_FORCE_NORA_FIXTURE;
    process.env.OPENAI_API_KEY = "sk-present";

    const hit = await generateNoraReply({ userText: SIM_PROMPTS.S1, contextSnippets: [] });
    expect(hit.mode).toBe("provider-simulated");
    expect(hit.qualification.visualComposition).toBeUndefined();
  });

  it("SIM unknown prompt fails closed — never silent LIVE fallback", async () => {
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_NORA_SIMULATED_PROVIDER = "1";
    delete process.env.STUDIO_FORCE_NORA_FIXTURE;
    delete process.env.STUDIO_E2E;
    process.env.OPENAI_API_KEY = "sk-present-must-not-be-called";

    const miss = await generateNoraReply({
      userText: "Prompt inconnu hors corpus SIM — ne doit pas appeler le fournisseur.",
      contextSnippets: [],
    });
    expect(miss.mode).not.toBe("openai-agents-sdk-live");
    expect(miss.status).toBe("FAILED");
    expect(miss.streamingNotes ?? miss.content).toMatch(/NORA_SIM_PROMPT_UNKNOWN/);
    expect(miss.attempts.every((a) => a.providerContacted === "NO" || a.providerContacted == null)).toBe(
      true,
    );
  });
});
