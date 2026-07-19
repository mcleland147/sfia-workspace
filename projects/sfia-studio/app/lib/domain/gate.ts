export type GateStatus = "open" | "pending" | "closed";

export interface Gate {
  id: string;
  label: string;
  timing: string;
  status: GateStatus;
  accent: "blue" | "orange" | "purple" | "pink" | "green";
}
