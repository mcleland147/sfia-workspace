"use client";

import React from "react";
import { NoraSemanticIcon } from "@/components/figma/NoraSemanticIcon";
import type { RelationsBlock } from "@/domains/conversation/visual-composition";

void React;

type Node = RelationsBlock["nodes"][number];

function roleFor(
  kind: string | undefined,
): "information" | "observation" | "hypothesis" | "risk" | "recommendation" | "dependency" {
  switch (kind) {
    case "hypothesis":
      return "hypothesis";
    case "finding":
    case "fact":
      return "observation";
    case "cause":
      return "dependency";
    case "unknown":
      return "information";
    default:
      return "information";
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
  return (
    <article
      className={`fig-nc-graph-node${emphasize ? " fig-nc-graph-node-emphasis" : ""}${
        branch ? ` fig-nc-graph-node-${branch}` : ""
      }`}
      data-testid="nora-graph-node"
      data-node-id={node.id}
      data-node-kind={node.kind ?? ""}
      data-branch={branch ?? ""}
      data-lane={node.laneId ?? ""}
    >
      <NoraSemanticIcon role={roleFor(node.kind)} />
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
