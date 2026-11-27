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

  it("git pdf offers punctual vision on scanned empty extract", () => {
    const src = readFileSync(
      join(root, "domains/conversation/git-read-tools.ts"),
      "utf8",
    );
    expect(src).toContain("runDocumentVisionPunctual");
    expect(src).toContain("SCANNED_NO_TEXT");
  });

  it("D8 can use bounded judgment before Nora", () => {
    const src = readFileSync(
      join(root, "domains/proofs/d8-cognitive-criterion-eval.ts"),
      "utf8",
    );
    expect(src).toContain("runBoundedJudgment");
    expect(src).toContain("NOT_D6_HUMAN_DECISION");
  });

  it("knowledge capitalize revokes superseded derived source", () => {
    const src = readFileSync(
      join(root, "domains/knowledge/service.ts"),
      "utf8",
    );
    expect(src).toContain("revokeDerivedSource");
  });

  it("frontier protects LIVE campaign teardown", () => {
    const src = readFileSync(
      join(root, "domains/conversation/provider-emission-frontier.ts"),
      "utf8",
    );
    expect(src).toContain("isProtectedLiveCampaignId");
    expect(src).toContain("ml2-i2-docintel-20261127");
  });

  it("migration 027 lives in candidates only", () => {
    const cand = readFileSync(
      join(process.cwd(), "src/db/migrations/candidates/027_derived_embedding_chunks.sql"),
      "utf8",
    );
    expect(cand).toContain("derived_embedding_chunks");
    const migrate = readFileSync(
      join(process.cwd(), "scripts/db-migrate.sh"),
      "utf8",
    );
    expect(migrate).not.toContain("027_derived_embedding_chunks");
  });
});
