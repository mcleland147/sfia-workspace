import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parseCkiEditorialMarkdown } from "@/domains/pilotage/cki-editorial";

const CKI_ROOT = join(__dirname, "../../../cki");

describe("CKI editorial projection (09.05)", () => {
  it("parses 01-cadrage into Figma rubrics — not technical id or cycle objective", () => {
    const text = readFileSync(join(CKI_ROOT, "01-cadrage.md"), "utf8");
    const editorial = parseCkiEditorialMarkdown("01-cadrage", text, "test-digest");

    expect(editorial.title.replace(/[’']/g, "'")).toBe(
      "Cadrage et clarification de l'intention",
    );
    expect(editorial.ordinal).toBe("01");
    expect(editorial.corpusVersion).toBe("0.2.0");
    expect(editorial.resultSought).toMatch(/demande parfois formulée/i);
    expect(editorial.relevance).toMatch(/finalité|valeur attendue|intention/i);
    expect(editorial.angles.length).toBeGreaterThanOrEqual(1);
    expect(editorial.angles[0]?.title.length).toBeGreaterThan(3);
    expect(editorial.title).not.toBe("01-cadrage");
  });

  it("parses 02-conception-fonctionnelle title and result", () => {
    const text = readFileSync(join(CKI_ROOT, "02-conception-fonctionnelle.md"), "utf8");
    const editorial = parseCkiEditorialMarkdown(
      "02-conception-fonctionnelle",
      text,
      "test-digest-2",
    );
    expect(editorial.title).toMatch(/Conception fonctionnelle/i);
    expect(editorial.resultSought).toMatch(/contrats fonctionnels/i);
    expect(editorial.relevance).toBeTruthy();
  });
});
