import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

describe("ml2 hybrid rights & fingerprint residuals", () => {
  it("does not widen semantic admissibility from lexical subjectIds", () => {
    const src = readFileSync(
      join(
        __dirname,
        "../../src/domains/knowledge/derived-embedding-service.ts",
      ),
      "utf8",
    );
    expect(src).toContain(
      "Lexical subjectIds must NOT widen the semantic admissibility set",
    );
    expect(src).not.toMatch(/for \(const l of input\.lexical\) admissible\.add/);
    expect(src).not.toMatch(/for \(const l of input\.lexical\) freshIds\.add/);
    // Missing indexRef must exclude, not admit.
    expect(src).toMatch(/if \(!m\) return false/);
  });

  it("journal reuses queryVector without stub client FinOps", () => {
    const src = readFileSync(
      join(__dirname, "../../src/domains/knowledge/journal.ts"),
      "utf8",
    );
    expect(src).toContain("queryVector: opts.queryVector");
    expect(src).not.toContain("stubClient");
    expect(src).toContain("sourceId: h.sourceId");
    expect(src).toContain("openPointId");
  });

  it("rebuild/upsert FinOps use emission attemptId UUID", () => {
    const src = readFileSync(
      join(
        __dirname,
        "../../src/domains/knowledge/derived-embedding-service.ts",
      ),
      "utf8",
    );
    expect(src).toContain("rebuildEmissionAttemptId");
    expect(src).toContain("upsertEmissionAttemptId");
    expect(src).not.toMatch(
      /attemptId: `\$\{input\.sourceId\}:\$\{fp\}`/,
    );
  });
});
