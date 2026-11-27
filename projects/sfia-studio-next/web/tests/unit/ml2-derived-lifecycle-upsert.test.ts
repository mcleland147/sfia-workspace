import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

describe("ml2 derived index product lifecycle wiring", () => {
  const root = join(__dirname, "../../src");

  it("exposes upsertDerivedAdmissibleSource (single-source, not full wipe)", () => {
    const svc = readFileSync(
      join(root, "domains/knowledge/derived-embedding-service.ts"),
      "utf8",
    );
    expect(svc).toContain("export async function upsertDerivedAdmissibleSource");
    expect(svc).toContain("upsertDerivedChunkPg");
    // Must not call full-project replace for single upsert path.
    const upsertBlock = svc.slice(
      svc.indexOf("export async function upsertDerivedAdmissibleSource"),
      svc.indexOf("export async function revokeDerivedSource"),
    );
    expect(upsertBlock).not.toContain("replaceDerivedChunksPg");
  });

  it("capitalizeAcquis and openPoint wire upsert + revoke", () => {
    const src = readFileSync(join(root, "domains/knowledge/service.ts"), "utf8");
    expect(src).toContain("upsertDerivedAdmissibleSource");
    expect(src).toContain('sourceKind: "acquis"');
    expect(src).toContain('sourceKind: "open_point"');
    expect(src).toContain("revokeDerivedSource");
  });

  it("pg module has non-destructive upsertDerivedChunkPg", () => {
    const pg = readFileSync(
      join(root, "domains/knowledge/derived-embedding-pg.ts"),
      "utf8",
    );
    expect(pg).toContain("export async function upsertDerivedChunkPg");
    expect(pg).toContain("ON CONFLICT (project_id, source_id, content_fingerprint, model)");
    expect(pg).toContain("content_fingerprint <>");
  });

  it("selectRelevantKnowledgeContext can supplement with hybrid hits", () => {
    const src = readFileSync(join(root, "domains/knowledge/service.ts"), "utf8");
    expect(src).toContain("hybridSearchProjectKnowledge");
    expect(src).toContain("DERIVED_HIT");
  });
});
