import type { Recommendation } from "@/lib/domain/recommendation";
import type { MorrisDecision } from "@/lib/domain/morris-decision";

export { cycles, activeCycle } from "./cycles";
export { gates } from "./gates";
export { evidenceItems } from "./evidence";
export { gitStatus } from "./git-status";

export const copilotRecommendations: Recommendation[] = [
  {
    kind: "recommendation",
    id: "rec-cycle-profile",
    title: "Profil recommandé",
    summary: "Standard — cycle de conception fonctionnelle avec gate Morris avant prompt Cursor.",
    confidence: 0.82,
    source: "copilot",
  },
  {
    kind: "recommendation",
    id: "rec-scope",
    title: "Périmètre autorisé",
    summary: "Qualification documentaire et UX/UI uniquement — pas de stack technique.",
    confidence: 0.91,
    source: "copilot",
  },
];

export const pendingMorrisDecision: MorrisDecision = {
  kind: "morris-decision",
  id: "dec-ux-premium",
  gateId: "gate-ux-option",
  title: "Direction visuelle premium UX-B",
  description:
    "Décliner le langage visuel product premium sur les quatre écrans P0.",
  verdict: null,
  scope: "cycle UX/UI uniquement · révocable avant versionnement.",
  revocable: true,
  confirmed: false,
  simulated: true,
};
