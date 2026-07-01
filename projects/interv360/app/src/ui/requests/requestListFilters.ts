import type { DemoRequest, RequestStatus } from "../../domain/requestStatus";
import { buildRequestSearchHaystack } from "./requestIndicators";

export type StatusFilter = RequestStatus | "ALL";

export const NOMINAL_STATUS_ORDER: RequestStatus[] = [
  "STAT-01",
  "STAT-02",
  "STAT-03",
  "STAT-04",
  "STAT-06",
];

export function countRequestsByStatus(
  requests: DemoRequest[],
): Map<RequestStatus, number> {
  const counts = new Map<RequestStatus, number>();

  for (const request of requests) {
    counts.set(request.status, (counts.get(request.status) ?? 0) + 1);
  }

  return counts;
}

export function filterRequestsByStatus(
  requests: DemoRequest[],
  statusFilter: StatusFilter,
): DemoRequest[] {
  if (statusFilter === "ALL") {
    return requests;
  }

  return requests.filter((request) => request.status === statusFilter);
}

export function searchLocalRequests(
  requests: DemoRequest[],
  searchQuery: string,
): DemoRequest[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  if (!normalizedQuery) {
    return requests;
  }

  return requests.filter((request) =>
    buildRequestSearchHaystack(request).includes(normalizedQuery),
  );
}

export function filterVisibleRequests(
  requests: DemoRequest[],
  statusFilter: StatusFilter,
  searchQuery: string,
): DemoRequest[] {
  const byStatus = filterRequestsByStatus(requests, statusFilter);
  return searchLocalRequests(byStatus, searchQuery);
}

export function getStatusesWithRequests(
  requests: DemoRequest[],
): RequestStatus[] {
  const counts = countRequestsByStatus(requests);
  return NOMINAL_STATUS_ORDER.filter((status) => (counts.get(status) ?? 0) > 0);
}
