import { describe, expect, it } from "vitest";
import type { DemoRequest } from "../../domain/requestStatus";
import {
  countRequestsByStatus,
  filterRequestsByStatus,
  getStatusesWithRequests,
} from "./requestListFilters";

const sampleRequests: DemoRequest[] = [
  {
    id: "SAV-DEMO-001",
    title: "A",
    customerLabel: "Client A",
    siteLabel: "Site A",
    status: "STAT-01",
  },
  {
    id: "SAV-DEMO-002",
    title: "B",
    customerLabel: "Client B",
    siteLabel: "Site B",
    status: "STAT-02",
  },
  {
    id: "SAV-DEMO-003",
    title: "C",
    customerLabel: "Client C",
    siteLabel: "Site C",
    status: "STAT-06",
  },
];

describe("requestListFilters", () => {
  it("counts requests by status", () => {
    const counts = countRequestsByStatus(sampleRequests);
    expect(counts.get("STAT-01")).toBe(1);
    expect(counts.get("STAT-02")).toBe(1);
    expect(counts.get("STAT-06")).toBe(1);
  });

  it("filters requests by status", () => {
    expect(filterRequestsByStatus(sampleRequests, "ALL")).toHaveLength(3);
    expect(filterRequestsByStatus(sampleRequests, "STAT-02")).toEqual([
      sampleRequests[1],
    ]);
  });

  it("returns statuses with at least one request", () => {
    expect(getStatusesWithRequests(sampleRequests)).toEqual([
      "STAT-01",
      "STAT-02",
      "STAT-06",
    ]);
  });
});
