import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  createRequestsRepository,
  getDataSourceMode,
  getDataSourceModeLabel,
} from "./requestsRepositoryFactory";

describe("requestsRepositoryFactory", () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
  });

  it("defaults to local mode", () => {
    expect(getDataSourceMode()).toBe("local");
    expect(getDataSourceModeLabel()).toBe("Mode local");
  });

  it("selects API mode when configured", () => {
    vi.stubEnv("VITE_INTERV360_DATA_SOURCE", "api");

    expect(getDataSourceMode()).toBe("api");
    expect(getDataSourceModeLabel()).toBe("Mode API local");
  });

  it("creates a local repository by default", async () => {
    const repository = createRequestsRepository();
    const requests = await repository.listRequests();

    expect(requests.length).toBeGreaterThanOrEqual(3);
    expect(requests.every((request) => request.id.startsWith("SAV-DEMO-"))).toBe(
      true,
    );
  });
});
