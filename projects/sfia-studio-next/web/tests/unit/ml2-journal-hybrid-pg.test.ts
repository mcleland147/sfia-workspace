import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

describe("ml2 journal semantic uses hybridSearch (PG-safe)", () => {
  it("searchJournalSubjects routes through hybridSearchProjectKnowledge", () => {
    const src = readFileSync(
      join(__dirname, "../../src/domains/knowledge/journal.ts"),
      "utf8",
    );
    expect(src).toContain("hybridSearchProjectKnowledge");
    // Must not leave bare merge with only queryVector (PG skip path).
    const block = src.slice(
      src.indexOf("ML2 E: hybrid via product service"),
      src.indexOf("export async function searchJournalDecisions"),
    );
    expect(block).toContain("hybridSearchProjectKnowledge");
    expect(block).not.toMatch(
      /mergeLexicalAndDerived\(\{\s*projectId,\s*lexical,\s*queryVector/,
    );
  });

  it("frontier does not reserve maxOutputTokensPerRequest for non-Responses", () => {
    const src = readFileSync(
      join(
        __dirname,
        "../../src/domains/conversation/provider-emission-frontier.ts",
      ),
      "utf8",
    );
    expect(src).toContain("!isResponsesGeneration");
    expect(src).toContain("reservedOutput = reservedOutput ?? 0");
    expect(src).toContain("measuredInputTokens");
    expect(src).toContain("measuredOutputTokens");
  });

  it("FinOps observations exist for query embed, judgment, vision", () => {
    const emb = readFileSync(
      join(
        __dirname,
        "../../src/domains/knowledge/derived-embedding-service.ts",
      ),
      "utf8",
    );
    const bj = readFileSync(
      join(__dirname, "../../src/domains/conversation/bounded-judgment.ts"),
      "utf8",
    );
    const vis = readFileSync(
      join(
        __dirname,
        "../../src/domains/documents/document-vision-punctual.ts",
      ),
      "utf8",
    );
    expect(emb).toContain('operation: "embeddings.derived_query"');
    expect(bj).toContain("recordBoundedJudgmentFinops");
    expect(vis).toContain('operation: "vision.punctual"');
  });
});
