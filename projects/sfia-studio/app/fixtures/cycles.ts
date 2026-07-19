import type { Cycle } from "@/lib/domain/cycle";

export const cycles: Cycle[] = [
  {
    id: "sfia-studio",
    name: "SFIA Studio",
    subtitle: "UX/UI · validation visuelle",
    progress: 72,
    status: "active",
    profile: "critical",
    phase: "Cycle 4 · UX/UI",
    branch: "project/sfia-studio-ux-ui",
    base: "main @ 5f1eb908",
  },
  {
    id: "campus360",
    name: "Campus360",
    subtitle: "Delivery · INC-05",
    progress: 91,
    status: "active",
    profile: "standard",
    phase: "Delivery",
    branch: "project/campus360-delivery",
    base: "main @ a3c21f01",
  },
  {
    id: "sfia-method",
    name: "SFIA Method",
    subtitle: "Capitalisation v2.4",
    progress: 48,
    status: "active",
    profile: "standard",
    phase: "Capitalisation",
    branch: "project/sfia-method-v24",
    base: "main @ 8e4d2a11",
  },
  {
    id: "bridge-mcp",
    name: "Bridge MCP",
    subtitle: "RUN readiness",
    progress: 64,
    status: "active",
    profile: "standard",
    phase: "RUN readiness",
    branch: "project/bridge-mcp-run",
    base: "main @ 1b9f003c",
  },
];

export const activeCycle = cycles[0];
