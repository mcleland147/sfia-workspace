export type EvidenceStatus =
  | "conforme"
  | "validé"
  | "disponible"
  | "en-cours"
  | "non-disponible";

export interface Evidence {
  id: string;
  label: string;
  status: EvidenceStatus;
  statusLabel: string;
  accent: "green" | "blue" | "orange";
}
