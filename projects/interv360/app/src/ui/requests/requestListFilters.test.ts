import { describe, expect, it } from "vitest";
import type { DemoRequest } from "../../domain/requestStatus";
import {
  countRequestsByStatus,
  filterRequestsByStatus,
  filterVisibleRequests,
  getStatusesWithRequests,
  searchLocalRequests,
} from "./requestListFilters";

const sampleRequests: DemoRequest[] = [
  {
    id: "SAV-DEMO-001",
    title: "A",
    customerLabel: "Client A",
    siteLabel: "Site A",
    status: "STAT-01",
    priority: "high",
    criticality: "urgent",
  },
  {
    id: "SAV-DEMO-002",
    title: "B",
    customerLabel: "Client B",
    siteLabel: "Site B",
    status: "STAT-02",
    priority: "medium",
    criticality: "sensitive",
  },
  {
    id: "SAV-DEMO-003",
    title: "C",
    customerLabel: "Client C",
    siteLabel: "Site C",
    status: "STAT-06",
    priority: "low",
    criticality: "standard",
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

  it("searches requests locally by id, title, status and indicators", () => {
    expect(searchLocalRequests(sampleRequests, "SAV-DEMO-002")).toEqual([
      sampleRequests[1],
    ]);
    expect(searchLocalRequests(sampleRequests, "panne")).toEqual([]);
    expect(searchLocalRequests(sampleRequests, "haute")).toEqual([
      sampleRequests[0],
    ]);
    expect(searchLocalRequests(sampleRequests, "STAT-06")).toEqual([
      sampleRequests[2],
    ]);
    expect(searchLocalRequests(sampleRequests, "urgente")).toEqual([
      sampleRequests[0],
    ]);
  });

  it("combines status filter and local search", () => {
    expect(
      filterVisibleRequests(sampleRequests, "STAT-02", "SAV-DEMO-002"),
    ).toEqual([sampleRequests[1]]);
    expect(
      filterVisibleRequests(sampleRequests, "STAT-02", "SAV-DEMO-001"),
    ).toEqual([]);
    expect(filterVisibleRequests(sampleRequests, "ALL", "")).toHaveLength(3);
  });
});
