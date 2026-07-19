import type { Gate } from "@/lib/domain/gate";

export const gates: Gate[] = [
  {
    id: "gate-ux-option",
    label: "Choix option UX",
    timing: "Aujourd'hui",
    status: "open",
    accent: "pink",
  },
  {
    id: "gate-versionnement",
    label: "GO versionnement",
    timing: "Après revue",
    status: "pending",
    accent: "orange",
  },
  {
    id: "gate-arch-closure",
    label: "Clôture architecture",
    timing: "Ouverte",
    status: "open",
    accent: "purple",
  },
];
