import { describe, expect, it } from "vitest";
import { shouldApplyDurableRefresh } from "@/lib/durable-refresh-guard";

describe("durable-refresh-guard (QA-FINAL-01)", () => {
  it("applies when generation and projectId still match", () => {
    expect(
      shouldApplyDurableRefresh({
        request: { generation: 3, projectId: "proj_a" },
        currentGeneration: 3,
        currentProjectId: "proj_a",
      }),
    ).toBe(true);
  });

  it("rejects stale generation (request A after B advanced the counter)", () => {
    expect(
      shouldApplyDurableRefresh({
        request: { generation: 1, projectId: "proj_a" },
        currentGeneration: 2,
        currentProjectId: "proj_a",
      }),
    ).toBe(false);
  });

  it("rejects response for a different mounted project", () => {
    expect(
      shouldApplyDurableRefresh({
        request: { generation: 5, projectId: "proj_old" },
        currentGeneration: 5,
        currentProjectId: "proj_new",
      }),
    ).toBe(false);
  });

  it("rejects empty project identities", () => {
    expect(
      shouldApplyDurableRefresh({
        request: { generation: 1, projectId: "" },
        currentGeneration: 1,
        currentProjectId: "proj_a",
      }),
    ).toBe(false);
  });
});
