/**
 * Product ELKjs directed layout — Morris GO 2026-11-18.
 * Studio owns coordinates; Nora supplies no SVG/CSS/positions.
 *
 * Parallel (G09): hierarchical ELK — swimlanes as compound children (DOWN
 * inside each lane), lanes row LEFT→RIGHT, then convergence / suite below.
 * Flat RIGHT+partition produced a ~3k-wide strip unfit for the Travail panel.
 */

import ELK from "elkjs/lib/elk.bundled.js";
import type { RelationsBlock } from "@/domains/conversation/visual-composition";
import type { DirectedLayoutResult, LayoutEdgePath, LayoutNodeBox } from "./types";

export type NodeSizeMap = Record<string, { width: number; height: number }>;

const DEFAULT_SIZE = { width: 220, height: 72 };
const LANE_GAP = 36;
const LANE_PAD = 12;
const ROW_GAP = 48;

function sizeOf(id: string, sizes?: NodeSizeMap): { width: number; height: number } {
  const s = sizes?.[id];
  if (!s) return DEFAULT_SIZE;
  return {
    width: Math.max(120, Math.min(360, Math.round(s.width))),
    height: Math.max(48, Math.min(280, Math.round(s.height))),
  };
}

function portCenter(box: LayoutNodeBox, side: "top" | "bottom" | "left" | "right"): [number, number] {
  if (side === "top") return [box.x + box.width / 2, box.y];
  if (side === "bottom") return [box.x + box.width / 2, box.y + box.height];
  if (side === "left") return [box.x, box.y + box.height / 2];
  return [box.x + box.width, box.y + box.height / 2];
}

function orthogonalPath(
  from: [number, number],
  to: [number, number],
): Array<[number, number]> {
  if (Math.abs(from[0] - to[0]) < 1 || Math.abs(from[1] - to[1]) < 1) {
    return [from, to];
  }
  const midY = from[1] + (to[1] - from[1]) / 2;
  return [from, [from[0], midY], [to[0], midY], to];
}

type LaneBucket = {
  id: string;
  label: string;
  nodes: RelationsBlock["nodes"];
  kind: "flow" | "gate" | "suite";
};

function classifyLanes(block: RelationsBlock): {
  flow: LaneBucket[];
  gateNodes: RelationsBlock["nodes"];
  suiteNodes: RelationsBlock["nodes"];
} {
  const syncTargets = new Set(
    block.edges.filter((e) => e.relation === "sync").map((e) => e.to),
  );
  const order: string[] = [];
  const map = new Map<string, RelationsBlock["nodes"]>();
  for (const n of block.nodes) {
    const lane = n.laneId?.trim() || "voie";
    if (!map.has(lane)) {
      order.push(lane);
      map.set(lane, []);
    }
    map.get(lane)!.push(n);
  }

  const flow: LaneBucket[] = [];
  const gateNodes: RelationsBlock["nodes"] = [];
  const suiteNodes: RelationsBlock["nodes"] = [];

  for (const label of order) {
    const nodes = map.get(label)!;
    const allGate = nodes.every((n) => syncTargets.has(n.id));
    const allAfterGate =
      !allGate &&
      nodes.every((n) =>
        block.edges.some((e) => e.from === [...syncTargets][0] && e.to === n.id),
      );
    if (allGate) {
      gateNodes.push(...nodes);
      continue;
    }
    if (allAfterGate || /^suite/i.test(label)) {
      suiteNodes.push(...nodes);
      continue;
    }
    if (/^converg/i.test(label) && nodes.some((n) => syncTargets.has(n.id))) {
      gateNodes.push(...nodes);
      continue;
    }
    flow.push({ id: `lane-${label}`, label, nodes, kind: "flow" });
  }

  // Fallback: any sync target not already classified.
  for (const n of block.nodes) {
    if (syncTargets.has(n.id) && !gateNodes.some((g) => g.id === n.id)) {
      gateNodes.push(n);
    }
  }
  for (const n of block.nodes) {
    const inFlow = flow.some((l) => l.nodes.some((x) => x.id === n.id));
    const inGate = gateNodes.some((g) => g.id === n.id);
    const inSuite = suiteNodes.some((s) => s.id === n.id);
    if (!inFlow && !inGate && !inSuite) {
      suiteNodes.push(n);
    }
  }

  return { flow, gateNodes, suiteNodes };
}

/**
 * G09 / parallelProcess — swimlane composition:
 * each flow lane laid out DOWN via ELK, lanes placed side-by-side, gate+suite below.
 */
async function computeParallelSwimlaneLayout(
  block: RelationsBlock,
  sizes: NodeSizeMap | undefined,
  elk: InstanceType<typeof ELK>,
): Promise<DirectedLayoutResult> {
  const t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
  const { flow, gateNodes, suiteNodes } = classifyLanes(block);
  if (flow.length < 2) {
    // Not enough distinct lanes — fall through to flat layered.
    return computeFlatLayeredLayout(block, sizes, elk, t0, {
      direction: "DOWN",
      partitioning: true,
    });
  }

  const nodeBoxes: LayoutNodeBox[] = [];
  const edgePaths: LayoutEdgePath[] = [];
  let cursorX = LANE_PAD;
  let lanesBottom = 0;
  const laneBounds: Array<{ label: string; x: number; y: number; w: number; h: number }> = [];

  // Fit three swimlanes in a typical Travail column (~600–720px) without
  // forcing the Pilote to scroll horizontally to discover a lane.
  const maxLaneNodeW = flow.length >= 3 ? 168 : 220;

  for (const lane of flow) {
    const intra = block.edges.filter(
      (e) =>
        lane.nodes.some((n) => n.id === e.from) && lane.nodes.some((n) => n.id === e.to),
    );
    const children = lane.nodes.map((n) => {
      const dim = sizeOf(n.id, sizes);
      return {
        id: n.id,
        width: Math.min(dim.width, maxLaneNodeW),
        height: dim.height,
      };
    });
    const res = await elk.layout({
      id: lane.id,
      layoutOptions: {
        "elk.algorithm": "layered",
        "elk.direction": "DOWN",
        "elk.spacing.nodeNode": "20",
        "elk.layered.spacing.nodeNodeBetweenLayers": "36",
        "elk.edgeRouting": "ORTHOGONAL",
        "elk.padding": `[top=${LANE_PAD},left=${LANE_PAD},bottom=${LANE_PAD},right=${LANE_PAD}]`,
      },
      children,
      edges: intra.map((e, i) => ({
        id: `${lane.id}-e${i}`,
        sources: [e.from],
        targets: [e.to],
      })),
    });

    const laneW = Math.max(
      ...(res.children ?? []).map((c) => (c.x ?? 0) + (c.width ?? 0)),
      children.reduce((m, c) => Math.max(m, c.width), 0),
    ) + LANE_PAD;
    const laneH = Math.max(
      ...(res.children ?? []).map((c) => (c.y ?? 0) + (c.height ?? 0)),
      0,
    ) + LANE_PAD;

    for (const c of res.children ?? []) {
      nodeBoxes.push({
        id: c.id,
        x: cursorX + (c.x ?? 0),
        y: LANE_PAD + (c.y ?? 0),
        width: c.width ?? sizeOf(c.id, sizes).width,
        height: c.height ?? sizeOf(c.id, sizes).height,
      });
    }
    for (const e of res.edges ?? []) {
      const points: Array<[number, number]> = [];
      for (const s of e.sections ?? []) {
        points.push([cursorX + s.startPoint.x, LANE_PAD + s.startPoint.y]);
        for (const b of s.bendPoints ?? []) {
          points.push([cursorX + b.x, LANE_PAD + b.y]);
        }
        points.push([cursorX + s.endPoint.x, LANE_PAD + s.endPoint.y]);
      }
      if (points.length >= 2) {
        edgePaths.push({
          id: e.id,
          from: e.sources?.[0] ?? "",
          to: e.targets?.[0] ?? "",
          points,
          routing: "orthogonal",
        });
      }
    }
    laneBounds.push({ label: lane.label, x: cursorX, y: 0, w: laneW, h: laneH });
    lanesBottom = Math.max(lanesBottom, LANE_PAD + laneH);
    cursorX += laneW + LANE_GAP;
  }

  const canvasW = Math.max(cursorX - LANE_GAP + LANE_PAD, 320);
  let y = lanesBottom + ROW_GAP;

  const placeRow = (nodes: RelationsBlock["nodes"], y0: number): number => {
    if (!nodes.length) return y0;
    const dims = nodes.map((n) => ({ n, ...sizeOf(n.id, sizes) }));
    const totalW = dims.reduce((s, d) => s + d.width, 0) + LANE_GAP * Math.max(0, dims.length - 1);
    let x = Math.max(LANE_PAD, (canvasW - totalW) / 2);
    let rowH = 0;
    for (const d of dims) {
      nodeBoxes.push({ id: d.n.id, x, y: y0, width: d.width, height: d.height });
      x += d.width + LANE_GAP;
      rowH = Math.max(rowH, d.height);
    }
    return y0 + rowH;
  };

  y = placeRow(gateNodes, y);
  if (suiteNodes.length) {
    y = placeRow(suiteNodes, y + ROW_GAP);
  }

  const byId = new Map(nodeBoxes.map((n) => [n.id, n]));
  let edgeIdx = 0;
  for (const e of block.edges) {
    const already = edgePaths.some((p) => p.from === e.from && p.to === e.to);
    if (already) continue;
    const a = byId.get(e.from);
    const b = byId.get(e.to);
    if (!a || !b) continue;
    const from = portCenter(a, "bottom");
    const to = portCenter(b, e.relation === "sync" ? "top" : "top");
    edgePaths.push({
      id: `compose-e${edgeIdx++}`,
      from: e.from,
      to: e.to,
      points: orthogonalPath(from, to),
      routing: "orthogonal",
    });
  }

  const t1 = typeof performance !== "undefined" ? performance.now() : Date.now();
  return {
    status: "ready",
    engine: "elkjs-candidate",
    layoutMs: Math.round((t1 - t0) * 100) / 100,
    nodes: nodeBoxes,
    edges: edgePaths,
  };
}

async function computeFlatLayeredLayout(
  block: RelationsBlock,
  sizes: NodeSizeMap | undefined,
  elk: InstanceType<typeof ELK>,
  t0: number,
  opts: { direction: "DOWN" | "RIGHT"; partitioning: boolean },
): Promise<DirectedLayoutResult> {
  const partitions = opts.partitioning
    ? (() => {
        const lanes: string[] = [];
        const map = new Map<string, number>();
        for (const n of block.nodes) {
          const lane = n.laneId?.trim() || "_default";
          let idx = lanes.indexOf(lane);
          if (idx < 0) {
            idx = lanes.length;
            lanes.push(lane);
          }
          map.set(n.id, idx);
        }
        return map;
      })()
    : null;

  const children = block.nodes.map((n) => {
    const dim = sizeOf(n.id, sizes);
    const layoutOptions: Record<string, string> | undefined = partitions
      ? { "elk.partitioning.partition": String(partitions.get(n.id) ?? 0) }
      : undefined;
    return {
      id: n.id,
      width: dim.width,
      height: dim.height,
      layoutOptions,
    };
  });

  const layoutOptions: Record<string, string> = {
    "elk.algorithm": "layered",
    "elk.direction": opts.direction,
    "elk.spacing.nodeNode": "28",
    "elk.layered.spacing.nodeNodeBetweenLayers": "56",
    "elk.edgeRouting": "ORTHOGONAL",
    "elk.layered.crossingMinimization.strategy": "LAYER_SWEEP",
    "elk.layered.nodePlacement.bk.fixedAlignment": "BALANCED",
    "elk.padding": "[top=8,left=8,bottom=8,right=8]",
  };
  if (partitions) {
    layoutOptions["elk.partitioning.activate"] = "true";
  }

  const res = await elk.layout({
    id: "root",
    layoutOptions,
    children,
    edges: block.edges.map((e, i) => ({
      id: `e${i}`,
      sources: [e.from],
      targets: [e.to],
    })),
  });
  const t1 = typeof performance !== "undefined" ? performance.now() : Date.now();

  return {
    status: "ready",
    engine: "elkjs-candidate",
    layoutMs: Math.round((t1 - t0) * 100) / 100,
    nodes: (res.children ?? []).map((c) => ({
      id: c.id,
      x: c.x ?? 0,
      y: c.y ?? 0,
      width: c.width ?? sizeOf(c.id, sizes).width,
      height: c.height ?? sizeOf(c.id, sizes).height,
    })),
    edges: (res.edges ?? []).map((e) => {
      const points: Array<[number, number]> = [];
      for (const s of e.sections ?? []) {
        points.push([s.startPoint.x, s.startPoint.y]);
        for (const b of s.bendPoints ?? []) points.push([b.x, b.y]);
        points.push([s.endPoint.x, s.endPoint.y]);
      }
      return {
        id: e.id,
        from: e.sources?.[0] ?? "",
        to: e.targets?.[0] ?? "",
        points,
        routing: "orthogonal" as const,
      };
    }),
  };
}

/**
 * Run ELK layered orthogonal layout.
 * Pass measured DOM sizes when available; falls back to defaults.
 */
export async function computeElkDirectedLayout(
  block: RelationsBlock,
  sizes?: NodeSizeMap,
): Promise<DirectedLayoutResult> {
  if (!block.nodes.length) {
    return {
      status: "unavailable",
      engine: "elkjs-candidate",
      reason: "TOPOLOGY_REFUSED",
      detail: "empty nodes",
    };
  }

  try {
    const elk = new ELK();
    const hint = block.layoutHint ?? "dependencies";
    const t0 = typeof performance !== "undefined" ? performance.now() : Date.now();

    if (hint === "parallelProcess") {
      return await computeParallelSwimlaneLayout(block, sizes, elk);
    }

    if (hint === "decisionTree") {
      return await computeFlatLayeredLayout(block, sizes, elk, t0, {
        direction: "DOWN",
        partitioning: false,
      });
    }

    return await computeFlatLayeredLayout(block, sizes, elk, t0, {
      direction: "DOWN",
      partitioning: false,
    });
  } catch (err) {
    return {
      status: "unavailable",
      engine: "elkjs-candidate",
      reason: "LAYOUT_FAILED",
      detail: err instanceof Error ? err.message : "layout failed",
    };
  }
}

/** @deprecated use computeElkDirectedLayout */
export async function tryElkDirectedLayout(
  block: RelationsBlock,
  sizes?: NodeSizeMap,
): Promise<DirectedLayoutResult> {
  return computeElkDirectedLayout(block, sizes);
}
