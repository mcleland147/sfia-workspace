/**
 * Legacy filename kept — coverage moved to directed-layout-candidate (ELK product).
 */
import { describe, expect, it } from "vitest";
import { computeElkDirectedLayout } from "@/domains/conversation/directed-layout";
import type { RelationsBlock } from "@/domains/conversation/visual-composition";

describe("W3 graph layouts → ELK product path", () => {
  it("layout engine is available in product", async () => {
    const block: RelationsBlock = {
      kind: "relations",
      id: "smoke",
      title: "smoke",
      layoutHint: "dependencies",
      nodes: [
        { id: "a", label: "A", kind: "observation" },
        { id: "b", label: "B", kind: "finding" },
      ],
      edges: [{ from: "a", to: "b", relation: "depends_on" }],
      textAlternative: "A → B",
    };
    const r = await computeElkDirectedLayout(block);
    expect(r.status).toBe("ready");
  });
});
