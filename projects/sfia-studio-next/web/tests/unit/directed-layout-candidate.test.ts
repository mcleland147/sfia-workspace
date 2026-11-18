import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { DirectedRelationBoard } from "@/components/figma/nora-composition";
import { computeElkDirectedLayout } from "@/domains/conversation/directed-layout";
import type { RelationsBlock } from "@/domains/conversation/visual-composition";
import g07 from "../../fixtures/layout-benchmark/g07-dependencies-complex.json";
import g08 from "../../fixtures/layout-benchmark/g08-decision-tree-multilevel.json";
import g09 from "../../fixtures/layout-benchmark/g09-parallel-three-lanes.json";

function asBlock(raw: {
  id: string;
  title: string;
  layoutHint: string;
  nodes: RelationsBlock["nodes"];
  edges: RelationsBlock["edges"];
}): RelationsBlock {
  return {
    kind: "relations",
    id: raw.id,
    title: raw.title,
    layoutHint: raw.layoutHint as RelationsBlock["layoutHint"],
    nodes: raw.nodes,
    edges: raw.edges,
    textAlternative: raw.title,
  };
}

describe("ELK product layout (Morris GO)", () => {
  it("computes orthogonal layout for G07 three-chain convergence", async () => {
    const block = asBlock({
      id: g07.id,
      title: g07.title,
      layoutHint: g07.layoutHint,
      nodes: g07.nodes as RelationsBlock["nodes"],
      edges: g07.edges as RelationsBlock["edges"],
    });
    const result = await computeElkDirectedLayout(block);
    expect(result.status).toBe("ready");
    if (result.status !== "ready") return;
    expect(result.engine).toBe("elkjs-candidate");
    expect(result.nodes).toHaveLength(8);
    expect(result.edges.length).toBeGreaterThanOrEqual(7);
    expect(result.edges.every((e) => e.routing === "orthogonal")).toBe(true);
    expect(result.edges.some((e) => e.points.length >= 2)).toBe(true);
    const merge = result.nodes.find((n) => n.id === "merge");
    const next = result.nodes.find((n) => n.id === "next");
    expect(merge && next && next.y >= merge.y).toBe(true);
  });

  it("computes multilevel decision tree for G08", async () => {
    const block = asBlock({
      id: g08.id,
      title: g08.title,
      layoutHint: g08.layoutHint,
      nodes: g08.nodes as RelationsBlock["nodes"],
      edges: g08.edges as RelationsBlock["edges"],
    });
    const result = await computeElkDirectedLayout(block);
    expect(result.status).toBe("ready");
    if (result.status !== "ready") return;
    expect(result.nodes).toHaveLength(6);
    const c1 = result.nodes.find((n) => n.id === "c1");
    const c2 = result.nodes.find((n) => n.id === "c2");
    expect(c1 && c2 && c2.y > c1.y).toBe(true);
  });

  it("computes swimlane parallel layout for G09 (three vertical lanes + gate)", async () => {
    const block = asBlock({
      id: g09.id,
      title: g09.title,
      layoutHint: g09.layoutHint,
      nodes: g09.nodes as RelationsBlock["nodes"],
      edges: g09.edges as RelationsBlock["edges"],
    });
    const result = await computeElkDirectedLayout(block);
    expect(result.status).toBe("ready");
    if (result.status !== "ready") return;
    expect(result.nodes).toHaveLength(11);
    expect(result.edges.length).toBeGreaterThanOrEqual(10);
    const a1 = result.nodes.find((n) => n.id === "a1");
    const a3 = result.nodes.find((n) => n.id === "a3");
    const b1 = result.nodes.find((n) => n.id === "b1");
    const c1 = result.nodes.find((n) => n.id === "c1");
    const gate = result.nodes.find((n) => n.id === "gate");
    expect(a1 && a3 && a3.y > a1.y).toBe(true);
    expect(a1 && b1 && Math.abs(a1.x - b1.x) > 80).toBe(true);
    expect(b1 && c1 && Math.abs(b1.x - c1.x) > 80).toBe(true);
    expect(gate && a3 && gate.y > a3.y).toBe(true);
    const width = Math.max(...result.nodes.map((n) => n.x + n.width));
    expect(width).toBeLessThan(720);
  });

  it("DirectedRelationBoard retires artisan and exposes tree semantics", () => {
    const block = asBlock({
      id: g08.id,
      title: g08.title,
      layoutHint: g08.layoutHint,
      nodes: g08.nodes as RelationsBlock["nodes"],
      edges: g08.edges as RelationsBlock["edges"],
    });
    const titleById = new Map(block.nodes.map((n) => [n.id, n.label] as const));
    const html = renderToStaticMarkup(
      createElement(DirectedRelationBoard, { block, titleById }),
    );
    expect(html).toContain("nora-composition-decision-tree");
    expect(html).toContain('data-legacy-artisan="0"');
    expect(html).toContain("nora-composition-measure-layer");
    expect(html).toContain("Support prêt");
    expect(html).toContain("HumanDecision");
  });
});
