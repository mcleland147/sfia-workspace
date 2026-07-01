import { createApiRequestsRepository } from "./apiRequestsRepository";
import { localRequestsRepository } from "./localRequestsRepository";
import type { DataSourceMode, RequestsRepository } from "./requestsRepository.types";

export function getDataSourceMode(): DataSourceMode {
  return import.meta.env.VITE_INTERV360_DATA_SOURCE === "api" ? "api" : "local";
}

export function createRequestsRepository(): RequestsRepository {
  if (getDataSourceMode() === "api") {
    return createApiRequestsRepository();
  }

  return localRequestsRepository;
}

export function getDataSourceModeLabel(mode: DataSourceMode = getDataSourceMode()): string {
  return mode === "api" ? "Mode API local" : "Mode local";
}
