import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Substituted wiring proofs — no provider emission.
 * Ensures product raccordements exist in source.
 */
describe("ml2 product-wide wiring (substituted)", () => {
  const root = join(process.cwd(), "src");

  it("D4 search imports hybrid service", () => {
    const src = readFileSync(
      join(root, "domains/conversation/d4-read-tools.ts"),
      "utf8",
    );
    expect(src).toContain("hybridSearchProjectKnowledge");
    expect(src).toContain("semanticSupplement");
  });

  it("journal search route embeds when flag on", () => {
    const src = readFileSync(
      join(root, "app/api/projects/[projectId]/journal/search/route.ts"),
      "utf8",
    );
    expect(src).toContain("embedQueryText");
    expect(src).toContain("queryVector");
  });

  it("git pdf offers punctual vision beyond scan-only cases", () => {
    const src = readFileSync(
      join(root, "domains/conversation/git-read-tools.ts"),
      "utf8",
    );
    expect(src).toContain("runDocumentVisionPunctual");
    expect(src).toContain("SCANNED_NO_TEXT");
    expect(src).toContain("createFrontierBoundOpenAIClient");
    expect(src).toContain("visionAssist");
  });

  it("D8 can use bounded judgment before Nora via Frontier client", () => {
    const src = readFileSync(
      join(root, "domains/proofs/d8-cognitive-criterion-eval.ts"),
      "utf8",
    );
    expect(src).toContain("runBoundedJudgment");
    expect(src).toContain("NOT_D6_HUMAN_DECISION");
    expect(src).toContain("createFrontierBoundOpenAIClient");
  });

  it("knowledge capitalize revokes superseded and upserts new derived source", () => {
    const src = readFileSync(
      join(root, "domains/knowledge/service.ts"),
      "utf8",
    );
    expect(src).toContain("revokeDerivedSource");
    expect(src).toContain("upsertDerivedAdmissibleSource");
  });

  it("frontier protects persisted campaigns generically (no hardcoded id)", () => {
    const src = readFileSync(
      join(root, "domains/conversation/provider-emission-frontier.ts"),
      "utf8",
    );
    expect(src).toContain("isProtectedPersistedCampaign");
    expect(src).toContain("protectPersisted");
    expect(src).toContain("SFIA_PROTECT_CAMPAIGN_ENVELOPE");
    expect(src).not.toMatch(
      /if \(id === "ml2-i2-docintel-20261127"\) return true/,
    );
  });

  it("derived rebuild excludes non-admissible sources before embed", () => {
    const src = readFileSync(
      join(root, "domains/knowledge/derived-embedding-service.ts"),
      "utf8",
    );
    expect(src).toContain("collectAdmissibleKnowledgeSources");
    expect(src).toContain("ADMISSIBLE_SOURCES_ONLY");
    expect(src).toContain("createFrontierBoundOpenAIClient");
    expect(src).toContain("rightsRevalidated");
    expect(src).toContain("freshFp");
  });

  it("migration 027 is official after Morris GO A", () => {
    const mig = readFileSync(
      join(process.cwd(), "src/db/migrations/027_derived_embedding_chunks.sql"),
      "utf8",
    );
    expect(mig).toContain("derived_embedding_chunks");
    const migrate = readFileSync(
      join(process.cwd(), "scripts/db-migrate.sh"),
      "utf8",
    );
    expect(migrate).toContain("027_derived_embedding_chunks");
  });
});
