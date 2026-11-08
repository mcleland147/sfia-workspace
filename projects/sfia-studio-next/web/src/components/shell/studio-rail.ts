/**
 * F1 Navigation rail variants — values from G2 railEvidence (VERIFY PASS).
 * Discriminant fills are intentional: personnel ≠ projet.
 */

import type { CSSProperties } from "react";

export type StudioRailVariant = "personnel" | "projet" | "conversation" | "inspection";

export type StudioRailTokens = {
  variant: StudioRailVariant;
  widthPx: number;
  fill: string;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  gap: number;
  railComponentId: string;
  sourceNodeId: string;
};

/** Canonical tokens measured in G2 L2 / railEvidence. */
export const STUDIO_RAIL_VARIANTS: Record<StudioRailVariant, StudioRailTokens> = {
  personnel: {
    variant: "personnel",
    widthPx: 246,
    fill: "#0C101A",
    paddingTop: 20,
    paddingRight: 19,
    paddingBottom: 0,
    paddingLeft: 19,
    gap: 10,
    railComponentId: "shell.rail.personnel",
    sourceNodeId: "94:51",
  },
  projet: {
    variant: "projet",
    widthPx: 246,
    fill: "#0C1020",
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
    paddingLeft: 24,
    gap: 13,
    railComponentId: "shell.rail.projet",
    sourceNodeId: "160:176",
  },
  conversation: {
    variant: "conversation",
    widthPx: 240,
    fill: "#0D111B",
    paddingTop: 25,
    paddingRight: 19,
    paddingBottom: 0,
    paddingLeft: 19,
    gap: 13,
    railComponentId: "shell.rail.conversation",
    sourceNodeId: "94:215",
  },
  inspection: {
    variant: "inspection",
    widthPx: 244,
    fill: "#0C101A",
    paddingTop: 23,
    paddingRight: 19,
    paddingBottom: 22,
    paddingLeft: 19,
    gap: 11,
    railComponentId: "shell.rail.inspection",
    sourceNodeId: "94:372",
  },
};

export function railStyle(tokens: StudioRailTokens): CSSProperties {
  return {
    width: tokens.widthPx,
    background: tokens.fill,
    paddingTop: tokens.paddingTop,
    paddingRight: tokens.paddingRight,
    paddingBottom: tokens.paddingBottom,
    paddingLeft: tokens.paddingLeft,
    gap: tokens.gap,
  };
}

/** Resolve F1 variant from route + surface query (A2 deep-link aware). */
export function resolveRailVariant(input: {
  pathname: string;
  surface?: string | null;
}): StudioRailVariant {
  const path = input.pathname || "/";
  if (path.startsWith("/portfolio") || path === "/" || path.startsWith("/login")) {
    return "personnel";
  }
  if (path.startsWith("/preparations/")) {
    return "conversation";
  }
  if (path.startsWith("/projects/")) {
    const surface = (input.surface ?? "").toLowerCase();
    if (surface === "document") return "inspection";
    if (surface === "travail" || surface === "") return "conversation";
    return "projet";
  }
  return "personnel";
}
