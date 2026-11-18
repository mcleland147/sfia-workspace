"use client";

/**
 * Directed relations — ELKjs production layout (Morris GO).
 * Measure real node boxes → ELK orthogonal → paint. Fallback: structured reading.
 */

import React, { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { GraphNodeCard } from "@/components/figma/nora-composition/GraphNodeCard";
import {
  computeElkDirectedLayout,
  type DirectedLayoutResult,
  type NodeSizeMap,
} from "@/domains/conversation/directed-layout";
import type { RelationsBlock } from "@/domains/conversation/visual-composition";

void React;

function edgeLabel(e: RelationsBlock["edges"][number]): string {
  if (e.relation === "condition_true") return e.label ? `Si oui — ${e.label}` : "Si oui";
  if (e.relation === "condition_false") return e.label ? `Si non — ${e.label}` : "Si non";
  if (e.relation === "sync") return e.label ? `Synchronisation — ${e.label}` : "Synchronisation";
  if (e.relation === "depends_on") return e.label ? `Dépendance — ${e.label}` : "Dépendance";
  return e.label || "puis";
}

function branchFor(
  nodeId: string,
  edges: RelationsBlock["edges"],
): "root" | "yes" | "no" | "then" | "gate" | undefined {
  const incoming = edges.filter((e) => e.to === nodeId);
  if (!incoming.length) return "root";
  if (incoming.some((e) => e.relation === "sync")) return "gate";
  if (incoming.some((e) => e.relation === "condition_true")) return "yes";
  if (incoming.some((e) => e.relation === "condition_false")) return "no";
  return "then";
}

export function DirectedRelationBoard({
  block,
  titleById,
}: {
  block: RelationsBlock;
  titleById: Map<string, string>;
}) {
  const hint = block.layoutHint ?? "dependencies";
  const reactId = useId();
  const markerId = `fig-nc-elk-arrow-${reactId.replace(/:/g, "")}`;
  const measureRootRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<DirectedLayoutResult | null>(null);
  const [measureKey, setMeasureKey] = useState(0);
  const lastWidthRef = useRef<number | null>(null);

  const testId =
    hint === "decisionTree"
      ? "nora-composition-decision-tree"
      : hint === "parallelProcess"
        ? "nora-composition-parallel"
        : "nora-composition-dependencies";

  const syncTargets = new Set(
    block.edges.filter((e) => e.relation === "sync").map((e) => e.to),
  );
  // Prefer explicit sync gate; else highest multi-lane fan-in (UX-05 flow-only convergence).
  const gateId =
    [...syncTargets][0] ??
    (() => {
      if (hint !== "parallelProcess") return undefined;
      const laneOf = new Map<string, string>();
      for (const n of block.nodes) {
        const lane = n.laneId?.trim();
        if (lane) laneOf.set(n.id, lane);
      }
      let best: string | undefined;
      let bestCount = 1;
      for (const n of block.nodes) {
        const lanesHit = new Set<string>();
        for (const e of block.edges) {
          if (e.to !== n.id) continue;
          const lane = laneOf.get(e.from);
          if (lane) lanesHit.add(lane);
        }
        if (lanesHit.size > bestCount) {
          bestCount = lanesHit.size;
          best = n.id;
        }
      }
      return best;
    })();

  const lanes =
    hint === "parallelProcess"
      ? (() => {
          const m = new Map<string, typeof block.nodes>();
          for (const n of block.nodes) {
            const lane = n.laneId?.trim();
            if (!lane) continue;
            const list = m.get(lane) ?? [];
            list.push(n);
            m.set(lane, list);
          }
          return m;
        })()
      : null;

  // Remeasure on container width changes (debounced via rAF, no RO loop).
  useEffect(() => {
    const el = measureRootRef.current?.parentElement;
    if (!el || typeof ResizeObserver === "undefined") return;
    let raf = 0;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width ?? 0;
      if (lastWidthRef.current != null && Math.abs(lastWidthRef.current - w) < 8) return;
      lastWidthRef.current = w;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setMeasureKey((k) => k + 1));
    });
    ro.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  useLayoutEffect(() => {
    const root = measureRootRef.current;
    if (!root) return;
    const sizes: NodeSizeMap = {};
    for (const n of block.nodes) {
      const el = root.querySelector(`[data-measure-id="${CSS.escape(n.id)}"]`);
      if (el instanceof HTMLElement) {
        const r = el.getBoundingClientRect();
        sizes[n.id] = { width: r.width || 220, height: r.height || 72 };
      }
    }
    let cancelled = false;
    void (async () => {
      const result = await computeElkDirectedLayout(block, sizes);
      if (!cancelled) setLayout(result);
    })();
    return () => {
      cancelled = true;
    };
  }, [block, measureKey]);

  const engineAttr =
    layout?.status === "ready"
      ? "elkjs"
      : layout?.status === "unavailable"
        ? layout.reason === "LAYOUT_FAILED"
          ? "elk-failed"
          : "elk-unavailable"
        : "loading";

  const canvasW =
    layout?.status === "ready"
      ? Math.max(...layout.nodes.map((n) => n.x + n.width), 0) + 16
      : 0;
  const canvasH =
    layout?.status === "ready"
      ? Math.max(...layout.nodes.map((n) => n.y + n.height), 0) + 16
      : 0;

  return (
    <div
      className={`fig-nc-relations fig-nc-relations-${hint}`}
      data-testid={testId}
      data-layout-hint={hint}
      data-layout-engine={engineAttr}
      data-legacy-artisan="0"
      data-connectors={layout?.status === "ready" && layout.edges.length ? "1" : "0"}
      data-gate={gateId ?? ""}
      data-node-count={block.nodes.length}
      data-edge-count={block.edges.length}
    >
      {/* Hidden measure pass — real typography/box sizes for ELK */}
      <div
        ref={measureRootRef}
        className="fig-nc-measure-layer"
        aria-hidden
        data-testid="nora-composition-measure-layer"
        data-measure-width={hint === "parallelProcess" ? "190" : "280"}
        style={{ width: hint === "parallelProcess" ? 190 : 280 }}
      >
        {block.nodes.map((n) => (
          <div key={n.id} data-measure-id={n.id} className="fig-nc-measure-node">
            <GraphNodeCard
              node={n}
              branch={branchFor(n.id, block.edges)}
              emphasize={n.id === gateId}
            />
          </div>
        ))}
      </div>

      {layout?.status === "ready" ? (
        <div
          className="fig-nc-elk-canvas-wrap"
          data-testid="nora-composition-elk-wrap"
        >
        <div
          className="fig-nc-elk-canvas"
          data-testid="nora-composition-elk-canvas"
          style={{ width: canvasW, height: canvasH, position: "relative" }}
        >
          <svg
            className="fig-nc-elk-svg"
            width={canvasW}
            height={canvasH}
            viewBox={`0 0 ${canvasW} ${canvasH}`}
            data-testid={
              hint === "decisionTree"
                ? "nora-composition-tree-connectors"
                : hint === "parallelProcess"
                  ? "nora-composition-parallel-connectors"
                  : "nora-composition-deps-connectors"
            }
            aria-hidden
          >
            <defs>
              <marker
                id={markerId}
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L6,3 L0,6 Z" className="fig-comp-deps-arrowhead" />
              </marker>
            </defs>
            {layout.edges.map((e) => {
              if (e.points.length < 2) return null;
              const d = e.points
                .map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`)
                .join(" ");
              return (
                <path
                  key={e.id}
                  d={d}
                  className="fig-comp-deps-connector"
                  markerEnd={`url(#${markerId})`}
                  data-edge-key={e.id}
                  data-routing="orthogonal"
                />
              );
            })}
          </svg>
          {layout.nodes.map((box) => {
            const node = block.nodes.find((n) => n.id === box.id);
            if (!node) return null;
            return (
              <div
                key={box.id}
                className="fig-nc-elk-node"
                style={{
                  position: "absolute",
                  left: box.x,
                  top: box.y,
                  width: box.width,
                }}
                data-laid-x={Math.round(box.x)}
                data-laid-y={Math.round(box.y)}
                data-lane={node.laneId ?? ""}
              >
                <GraphNodeCard
                  node={node}
                  branch={branchFor(node.id, block.edges)}
                  emphasize={node.id === gateId}
                />
              </div>
            );
          })}
        </div>
        </div>
      ) : (
        <div className="fig-nc-relations-reading" data-testid="nora-composition-relations-reading">
          {lanes ? (
            <div className="fig-nc-parallel-lanes" data-testid="nora-composition-parallel-lanes">
              {[...lanes.entries()].map(([lane, nodes]) => {
                const isGate = gateId != null && nodes.some((n) => n.id === gateId);
                return (
                  <section
                    key={lane}
                    className={`fig-nc-parallel-lane${isGate ? " fig-nc-parallel-lane-gate" : ""}`}
                    data-lane={lane}
                    data-lane-role={isGate ? "gate" : "flow"}
                    data-testid={isGate ? "nora-composition-parallel-gate" : undefined}
                  >
                    <h4 className="fig-comp-parallel-lane-title">
                      {lane}
                      {isGate ? " · convergence" : ""}
                    </h4>
                    <div className="fig-nc-parallel-tasks">
                      {nodes.map((n) => (
                        <GraphNodeCard
                          key={n.id}
                          node={n}
                          branch={isGate ? "gate" : branchFor(n.id, block.edges)}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : (
            <div className="fig-nc-node-flow">
              {block.nodes.map((n) => (
                <GraphNodeCard key={n.id} node={n} branch={branchFor(n.id, block.edges)} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Accessible relation list — always present; visually subdued when ELK paints */}
      <ul
        className={`fig-comp-deps-edges${layout?.status === "ready" ? " fig-nc-edges-a11y" : ""}`}
        data-testid={
          hint === "decisionTree"
            ? "nora-composition-tree-edges"
            : hint === "parallelProcess"
              ? "nora-composition-parallel-edges"
              : "nora-composition-relations-edges"
        }
        data-directed="1"
        aria-label="Relations dirigées"
      >
        {block.edges.map((e, i) => (
          <li key={`${e.from}-${e.to}-${i}`} data-relation={e.relation ?? "flow"}>
            <span className="fig-comp-deps-from">{titleById.get(e.from) ?? e.from}</span>
            <span className="fig-comp-tree-condition">{edgeLabel(e)}</span>
            <span className="fig-comp-deps-to">{titleById.get(e.to) ?? e.to}</span>
          </li>
        ))}
      </ul>

      {hint === "decisionTree" ? (
        <p className="fig-comp-authority-note">
          Les branches conditionnelles sont des propositions de lecture — aucune HumanDecision
          n&apos;est créée.
        </p>
      ) : (
        <p className="fig-comp-authority-note">
          La convergence graphique n&apos;enregistre aucune décision humaine ni validation.
        </p>
      )}
    </div>
  );
}
