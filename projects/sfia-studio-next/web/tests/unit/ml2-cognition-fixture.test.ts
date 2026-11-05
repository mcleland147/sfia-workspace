import { describe, expect, it, afterEach } from "vitest";
import { generateNoraReply } from "@/domains/conversation/nora-adapter";

describe("ML2 cognition fixture", () => {
  const prev = { ...process.env };

  afterEach(() => {
    process.env.STUDIO_LANE = prev.STUDIO_LANE;
    process.env.STUDIO_E2E = prev.STUDIO_E2E;
    process.env.OPENAI_API_KEY = prev.OPENAI_API_KEY;
    process.env.STUDIO_FORCE_NORA_FIXTURE = prev.STUDIO_FORCE_NORA_FIXTURE;
  });

  it("comparative request yields structured analysis without claiming decision", async () => {
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    delete process.env.OPENAI_API_KEY;
    const result = await generateNoraReply({
      userText: "Compare les options A et B et leurs compromis",
      contextSnippets: [],
      knowledgeSnippets: [
        "ACQUIS[FACT/acq1] subject=s1: Option A plus simple | provenance={}",
      ],
    });
    expect(result.status).toBe("COMPLETE");
    expect(result.content).toMatch(/Analyse comparative|Option A/i);
    expect(result.content).toMatch(/Pas une décision|recommandation conditionnelle/i);
    expect(result.content).toMatch(/Contexte D4|ACQUIS/);
  });

  it("explicit document request includes draft markdown block", async () => {
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    const result = await generateNoraReply({
      userText: "Rédige un document de synthèse sur l'architecture",
      contextSnippets: [],
    });
    expect(result.content).toMatch(/Document proposé|# Synthèse/i);
  });
});
