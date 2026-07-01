import { beforeEach, describe, expect, it } from "vitest";
import { STORAGE_KEY_JOURNAL, STORAGE_KEY_REQUESTS } from "./localStorageKeys";
import { getRequests, resetDemoData } from "./requestsRepository";

describe("requestsRepository demo reset", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("restores SAV-DEMO-001 after clearing prefixed localStorage", () => {
    getRequests();
    localStorage.setItem(
      STORAGE_KEY_REQUESTS,
      JSON.stringify([
        {
          id: "SAV-MUTATED",
          title: "Donnée locale modifiée",
          customerLabel: "Client Démo Industrie",
          siteLabel: "Lyon Démo",
          status: "STAT-01",
        },
      ]),
    );
    localStorage.setItem(STORAGE_KEY_JOURNAL, "[]");

    const restored = resetDemoData();

    expect(restored).toHaveLength(1);
    expect(restored[0]?.id).toBe("SAV-DEMO-001");
    expect(getRequests()[0]?.id).toBe("SAV-DEMO-001");
    expect(localStorage.getItem(STORAGE_KEY_JOURNAL)).toBeNull();
  });
});
