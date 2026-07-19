export type CycleStatus = "draft" | "active" | "completed" | "stopped";

export type CycleProfile = "standard" | "critical";

export interface Cycle {
  id: string;
  name: string;
  subtitle: string;
  progress: number;
  status: CycleStatus;
  profile: CycleProfile;
  phase: string;
  branch: string;
  base: string;
}
