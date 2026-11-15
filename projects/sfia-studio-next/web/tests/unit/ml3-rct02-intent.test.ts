import { describe, expect, it } from "vitest";
import { qualifyPilotageIntent } from "@/domains/pilotage/intent";
import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * SEM-02 corrective: historical lexical RCT-02 oracles are retired.
 * D5/D6 authority is proven via durable Nora qualification + owner match tests.
 */
describe("ML3 RCT-02 intent — SEM-02 lexical retirement", () => {
  it("qualifyPilotageIntent no longer CLEAR-routes métier utterances", () => {
    for (const msg of [
      "Ouvre le cycle cadrage.",
      "Je décide que GitHub est obligatoire.",
      "Finalement, GitHub devient facultatif.",
      "Clôture le cycle cadrage et ouvre le cycle ux.",
    ]) {
      expect(qualifyPilotageIntent(msg).clarity, msg).toBe("NONE");
    }
  });

  it("lexical PHRASES / synonym tables removed from source", () => {
    const src = readFileSync(join(__dirname, "../../src/domains/pilotage/intent.ts"), "utf8");
    expect(src).not.toMatch(/const PHRASES/);
    expect(src).toMatch(/SEMANTIC_ROUTER_REQUIRED/);
  });
});
