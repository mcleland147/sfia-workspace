import type { DemoUser } from "../domain/demoUsers";
import { readApiErrorFromResponse } from "./apiErrorParsing";
import { RequestsRepositoryError } from "./requestsRepository.types";

const DEFAULT_API_BASE_URL = "http://localhost:3001/api/v1";

export type UsersApiResponse = {
  users: DemoUser[];
};

function getApiBaseUrl(): string {
  return import.meta.env.VITE_INTERV360_API_BASE_URL ?? DEFAULT_API_BASE_URL;
}

export async function listApiUsers(apiBaseUrl = getApiBaseUrl()): Promise<DemoUser[]> {
  let response: Response;

  try {
    response = await fetch(`${apiBaseUrl}/users`);
  } catch {
    throw new RequestsRepositoryError(
      "Impossible de contacter l'API locale. Vérifiez que le backend Interv360 est démarré.",
      "BACKEND_UNAVAILABLE",
    );
  }

  if (!response.ok) {
    throw await readApiErrorFromResponse(
      response,
      `Unable to load users: ${response.status}`,
      "USERS_UNAVAILABLE",
    );
  }

  const payload = (await response.json()) as UsersApiResponse;
  if (!Array.isArray(payload.users)) {
    throw new RequestsRepositoryError(
      "Invalid users API response.",
      "USERS_UNAVAILABLE",
    );
  }

  return payload.users;
}
