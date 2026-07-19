import { describe, expect, it } from "vitest";
import { cycles } from "@/fixtures/cycles";
import { gates } from "@/fixtures/gates";
import { evidenceItems } from "@/fixtures/evidence";
import { gitStatus } from "@/fixtures/git-status";
import { getCycles } from "@/lib/adapters/cycles";
import { getGates } from "@/lib/adapters/gates";
import { getEvidence } from "@/lib/adapters/evidence";
import { getGitStatus, simulateGitAction } from "@/lib/adapters/git-status";

describe("fixtures and adapters", () => {
  it("maps deterministic fixture content", async () => {
    expect(cycles).toHaveLength(4);
    expect(gates).toHaveLength(3);
    expect(evidenceItems).toHaveLength(6);
    expect(gitStatus.repository).toBe("mcleland147/sfia-workspace");
    expect(gitStatus.verified).toBe(true);
  });

  it("returns fixtures from adapters only", async () => {
    const [adapterCycles, adapterGates, adapterEvidence, adapterGit, gitAction] =
      await Promise.all([
        getCycles(),
        getGates(),
        getEvidence(),
        getGitStatus(),
        simulateGitAction(),
      ]);

    expect(adapterCycles).toEqual(cycles);
    expect(adapterGates).toEqual(gates);
    expect(adapterEvidence).toEqual(evidenceItems);
    expect(adapterGit).toEqual(gitStatus);
    expect(gitAction).toEqual({
      simulated: true,
      disabled: true,
      message: "Simulation — aucune action Git réelle",
    });
  });
});
