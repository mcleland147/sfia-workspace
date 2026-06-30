import type { DemoRequest } from "../domain/requestStatus";
import { demoRequests } from "../seed/demoRequests";
import { STORAGE_KEY_REQUESTS } from "./localStorageKeys";

function readStoredRequests(): DemoRequest[] | null {
  const raw = localStorage.getItem(STORAGE_KEY_REQUESTS);
  if (!raw) {
    return null;
  }

  return JSON.parse(raw) as DemoRequest[];
}

function writeStoredRequests(requests: DemoRequest[]): void {
  localStorage.setItem(STORAGE_KEY_REQUESTS, JSON.stringify(requests));
}

export function getRequests(): DemoRequest[] {
  const stored = readStoredRequests();
  if (stored) {
    return stored;
  }

  writeStoredRequests(demoRequests);
  return [...demoRequests];
}

export function resetDemoRequests(): void {
  writeStoredRequests(demoRequests);
}

export function getRequestById(id: string): DemoRequest | undefined {
  return getRequests().find((request) => request.id === id);
}
