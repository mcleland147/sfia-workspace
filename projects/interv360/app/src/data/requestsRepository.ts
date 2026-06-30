import type { DemoRequest } from "../domain/requestStatus";
import { demoRequests } from "../seed/demoRequests";
import { clearInterv360LocalStorage } from "./interv360LocalStorage";
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

function initializeRequests(): DemoRequest[] {
  writeStoredRequests(demoRequests);
  return [...demoRequests];
}

export function getRequests(): DemoRequest[] {
  const stored = readStoredRequests();
  if (stored) {
    return stored;
  }

  return initializeRequests();
}

export function resetDemoData(): DemoRequest[] {
  clearInterv360LocalStorage();
  return initializeRequests();
}

/** @deprecated Use resetDemoData for full prefixed purge and re-seed. */
export function resetDemoRequests(): void {
  resetDemoData();
}

export function getRequestById(id: string): DemoRequest | undefined {
  return getRequests().find((request) => request.id === id);
}
