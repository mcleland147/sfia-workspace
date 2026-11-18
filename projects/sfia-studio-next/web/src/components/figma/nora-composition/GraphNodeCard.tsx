"use client";

import React from "react";
import { NoraSemanticIcon } from "@/components/figma/NoraSemanticIcon";
import type { RelationsBlock, VisualSemanticRole } from "@/domains/conversation/visual-composition";

void React;

type Node = RelationsBlock["nodes"][number];

/**
 * UX-04 — graph icons only when they carry a verifiable epistemic/risk signal.
 * Neutral activity / observation nodes stay label-only (no decorative eye).
 */
function semanticIconRole(
  kind: string | undefined,
): VisualSemanticRole | null {
  switch (kind) {
    case "hypothesis":
      return "hypothesis";
    case "unknown":
      return "information";
    case "cause":
      return "dependency";
    case "risk":
      return "risk";
    default:
      return null;
  }
}

/** Typed graph node — Figma 07–09 language; no radial E05. */
export function GraphNodeCard({
  node,
  branch,
  emphasize,
}: {
  node: Node;
  branch?: "root" | "yes" | "no" | "then" | "gate";
  emphasize?: boolean;
}) {
  const iconRole = semanticIconRole(node.kind);
  return (
    <article
      className={`fig-nc-graph-node${emphasize ? " fig-nc-graph-node-emphasis" : ""}${
        branch ? ` fig-nc-graph-node-${branch}` : ""
      }${!iconRole ? " fig-nc-graph-node-plain" : ""}`}
      data-testid="nora-graph-node"
      data-node-id={node.id}
      data-node-kind={node.kind ?? ""}
      data-branch={branch ?? ""}
      data-lane={node.laneId ?? ""}
      data-icon={iconRole ? "1" : "0"}
    >
      {iconRole ? <NoraSemanticIcon role={iconRole} /> : null}
      <div className="fig-nc-graph-node-copy">
        <div className="fig-nc-graph-node-label">{node.label}</div>
        {node.detail ? (
          <div className="fig-nc-graph-node-detail">{node.detail}</div>
        ) : null}
        {node.kind === "unknown" || node.kind === "hypothesis" ? (
          <div className="fig-nc-graph-node-status">
            {node.kind === "unknown" ? "Non décidé" : "Hypothèse — pas une HumanDecision"}
          </div>
        ) : null}
      </div>
    </article>
  );
}
