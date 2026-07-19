import { gitStatus } from "@/fixtures/git-status";
import type { GitStatus } from "@/lib/domain/git-status";

export async function getGitStatus(): Promise<GitStatus> {
  return gitStatus;
}

export interface SimulatedGitActionResult {
  simulated: true;
  disabled: true;
  message: string;
}

export async function simulateGitAction(): Promise<SimulatedGitActionResult> {
  return {
    simulated: true,
    disabled: true,
    message: "Simulation — aucune action Git réelle",
  };
}
