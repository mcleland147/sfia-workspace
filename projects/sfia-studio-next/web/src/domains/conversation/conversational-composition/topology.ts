/**
 * Structural topology validation for relations blocks (F2).
 * Independent of fidelity (content) and of CSS presentation.
 */

import type { RelationsBlock } from "@/domains/conversation/visual-composition";

export type TopologyVerdict =
  | { ok: true; reasonCodes: string[]; mode: "directed" | "list" }
  | { ok: false; reasonCodes: string[]; mode: "list" };

function edgeEndsValid(block: RelationsBlock): string[] {
  const ids = new Set(block.nodes.map((n) => n.id));
  const reasons: string[] = [];
  for (const e of block.edges) {
    if (!ids.has(e.from) || !ids.has(e.to)) {
      reasons.push("CV_TOPOLOGY_EDGE_ENDPOINT_UNKNOWN");
    }
    if (e.from === e.to) {
      reasons.push("CV_TOPOLOGY_SELF_LOOP");
    }
  }
  return reasons;
}

function hasCycle(block: RelationsBlock): boolean {
  const adj = new Map<string, string[]>();
  for (const n of block.nodes) adj.set(n.id, []);
  for (const e of block.edges) {
    adj.get(e.from)?.push(e.to);
  }
  const visiting = new Set<string>();
  const done = new Set<string>();
  const dfs = (id: string): boolean => {
    if (visiting.has(id)) return true;
    if (done.has(id)) return false;
    visiting.add(id);
    for (const nxt of adj.get(id) ?? []) {
      if (dfs(nxt)) return true;
    }
    visiting.delete(id);
    done.add(id);
    return false;
  };
  for (const n of block.nodes) {
    if (dfs(n.id)) return true;
  }
  return false;
}

/** Incoming degree map. */
function inDegree(block: RelationsBlock): Map<string, number> {
  const deg = new Map<string, number>();
  for (const n of block.nodes) deg.set(n.id, 0);
  for (const e of block.edges) {
    deg.set(e.to, (deg.get(e.to) ?? 0) + 1);
  }
  return deg;
}

/**
 * decisionTree: a true arborescence — not merely a DAG with one root.
 * - exactly one root (in-degree 0)
 * - every other node has exactly one parent (in-degree 1)
 * - no cycles, no orphans, all nodes reachable from root
 * Shared child (in-degree > 1) → list / directed-deps family, never a fake tree.
 */
export function validateDecisionTree(block: RelationsBlock): TopologyVerdict {
  const ends = edgeEndsValid(block);
  if (ends.length) {
    return { ok: false, reasonCodes: ends, mode: "list" };
  }
  if (!block.edges.length || block.nodes.length < 2) {
    return { ok: false, reasonCodes: ["CV_TOPOLOGY_TREE_TOO_SPARSE"], mode: "list" };
  }
  if (hasCycle(block)) {
    return { ok: false, reasonCodes: ["CV_TOPOLOGY_TREE_CYCLE"], mode: "list" };
  }
  const deg = inDegree(block);
  const roots = [...deg.entries()].filter(([, d]) => d === 0).map(([id]) => id);
  if (roots.length !== 1) {
    return {
      ok: false,
      reasonCodes: ["CV_TOPOLOGY_TREE_NOT_SINGLE_ROOT"],
      mode: "list",
    };
  }
  for (const [id, d] of deg) {
    if (id === roots[0]) continue;
    if (d !== 1) {
      return {
        ok: false,
        reasonCodes: ["CV_TOPOLOGY_TREE_SHARED_CHILD"],
        mode: "list",
      };
    }
  }
  // Every non-root must be reachable from root
  const adj = new Map<string, string[]>();
  for (const n of block.nodes) adj.set(n.id, []);
  for (const e of block.edges) adj.get(e.from)?.push(e.to);
  const seen = new Set<string>();
  const stack = [roots[0]!];
  while (stack.length) {
    const id = stack.pop()!;
    if (seen.has(id)) continue;
    seen.add(id);
    for (const nxt of adj.get(id) ?? []) stack.push(nxt);
  }
  if (seen.size !== block.nodes.length) {
    return { ok: false, reasonCodes: ["CV_TOPOLOGY_TREE_DISCONNECTED"], mode: "list" };
  }
  return { ok: true, reasonCodes: ["CV_TOPOLOGY_TREE_OK"], mode: "directed" };
}

/**
 * dependencies: directed DAG preferred; cycles → list fallback (F2-03).
 */
export function validateDependencies(block: RelationsBlock): TopologyVerdict {
  const ends = edgeEndsValid(block);
  if (ends.length) {
    return { ok: false, reasonCodes: ends, mode: "list" };
  }
  if (!block.edges.length) {
    return { ok: false, reasonCodes: ["CV_TOPOLOGY_DEPS_NO_EDGES"], mode: "list" };
  }
  if (hasCycle(block)) {
    return { ok: false, reasonCodes: ["CV_TOPOLOGY_DEPS_CYCLE"], mode: "list" };
  }
  return { ok: true, reasonCodes: ["CV_TOPOLOGY_DEPS_OK"], mode: "directed" };
}

/**
 * parallelProcess: at least 2 nodes; edges optional (lanes).
 * If edges present, must not cycle.
 */
export function validateParallelProcess(block: RelationsBlock): TopologyVerdict {
  const ends = edgeEndsValid(block);
  if (ends.length) {
    return { ok: false, reasonCodes: ends, mode: "list" };
  }
  if (block.nodes.length < 2) {
    return { ok: false, reasonCodes: ["CV_TOPOLOGY_PARALLEL_TOO_FEW"], mode: "list" };
  }
  if (block.edges.length && hasCycle(block)) {
    return { ok: false, reasonCodes: ["CV_TOPOLOGY_PARALLEL_CYCLE"], mode: "list" };
  }
  return { ok: true, reasonCodes: ["CV_TOPOLOGY_PARALLEL_OK"], mode: "directed" };
}

export function validateRelationsTopology(block: RelationsBlock): TopologyVerdict {
  const hint = block.layoutHint;
  if (hint === "decisionTree") return validateDecisionTree(block);
  if (hint === "dependencies") return validateDependencies(block);
  if (hint === "parallelProcess") return validateParallelProcess(block);
  // No specialized hint → list is correct (not a failure of directed family)
  return { ok: true, reasonCodes: ["CV_TOPOLOGY_LIST_DEFAULT"], mode: "list" };
}

/** Topological layers for DAG rendering (F3). Empty if cycle. */
export function topologicalLayers(block: RelationsBlock): string[][] {
  if (hasCycle(block)) return [];
  const deg = inDegree(block);
  const adj = new Map<string, string[]>();
  for (const n of block.nodes) adj.set(n.id, []);
  for (const e of block.edges) adj.get(e.from)?.push(e.to);

  const layers: string[][] = [];
  let frontier = [...deg.entries()].filter(([, d]) => d === 0).map(([id]) => id);
  const placed = new Set<string>();
  while (frontier.length) {
    layers.push(frontier);
    for (const id of frontier) placed.add(id);
    const next: string[] = [];
    for (const id of frontier) {
      for (const nxt of adj.get(id) ?? []) {
        const d = (deg.get(nxt) ?? 1) - 1;
        deg.set(nxt, d);
        if (d === 0 && !placed.has(nxt)) next.push(nxt);
      }
    }
    frontier = next;
  }
  // orphans not reached
  for (const n of block.nodes) {
    if (!placed.has(n.id)) {
      layers.push([n.id]);
      placed.add(n.id);
    }
  }
  return layers;
}
