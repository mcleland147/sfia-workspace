import type { Evidence } from "@/lib/domain/evidence";

export const evidenceItems: Evidence[] = [
  {
    id: "ev-ux-contract",
    label: "Contrat UX-B",
    status: "conforme",
    statusLabel: "Conforme",
    accent: "green",
  },
  {
    id: "ev-p0-00c",
    label: "P0-00C premium",
    status: "validé",
    statusLabel: "Validé visuellement",
    accent: "green",
  },
  {
    id: "ev-p0-01c",
    label: "P0-01C synthèse",
    status: "disponible",
    statusLabel: "Disponible",
    accent: "blue",
  },
  {
    id: "ev-p0-02c",
    label: "P0-02C cycle",
    status: "disponible",
    statusLabel: "Disponible",
    accent: "blue",
  },
  {
    id: "ev-p0-03c",
    label: "P0-03C décision",
    status: "disponible",
    statusLabel: "Disponible",
    accent: "blue",
  },
  {
    id: "ev-runtime",
    label: "Runtime",
    status: "non-disponible",
    statusLabel: "Non disponible",
    accent: "orange",
  },
];
