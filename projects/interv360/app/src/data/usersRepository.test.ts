import { afterEach, describe, expect, it, vi } from "vitest";
import { listApiUsers } from "./usersRepository";
import { RequestsRepositoryError } from "./requestsRepository.types";

describe("usersRepository", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("calls /users and returns payload users", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        users: [
          {
            id: "user-technician",
            displayName: "Théo Technicien",
            email: "theo.technicien@example.test",
            role: "technician",
            team: "Support technique",
            isActive: true,
          },
        ],
      }),
    });
    vi.stubGlobal("fetch", fetchMock);

    const users = await listApiUsers("http://localhost:3001/api/v1");

    expect(fetchMock).toHaveBeenCalledWith("http://localhost:3001/api/v1/users");
    expect(users).toHaveLength(1);
    expect(users[0]?.displayName).toBe("Théo Technicien");
  });

  it("throws when API response is not ok", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 503,
      }),
    );

    await expect(listApiUsers("http://localhost:3001/api/v1")).rejects.toMatchObject(
      {
        name: RequestsRepositoryError.name,
        code: "USERS_UNAVAILABLE",
      },
    );
  });

  it("maps structured API errors from users endpoint", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 404,
        json: async () => ({
          error: {
            code: "ROUTE_NOT_FOUND",
            message: "API route not found.",
          },
        }),
      }),
    );

    await expect(listApiUsers("http://localhost:3001/api/v1")).rejects.toMatchObject(
      {
        name: RequestsRepositoryError.name,
        code: "ROUTE_NOT_FOUND",
        message: "API route not found.",
      },
    );
  });

  it("falls back to API error code when message is absent", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 400,
        json: async () => ({
          error: {
            code: "INVALID_ACTOR_USER",
          },
        }),
      }),
    );

    await expect(listApiUsers("http://localhost:3001/api/v1")).rejects.toMatchObject(
      {
        code: "INVALID_ACTOR_USER",
        message: "INVALID_ACTOR_USER",
      },
    );
  });

  it("throws backend unavailable error when fetch fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("network")));

    await expect(listApiUsers("http://localhost:3001/api/v1")).rejects.toMatchObject(
      {
        name: RequestsRepositoryError.name,
        code: "BACKEND_UNAVAILABLE",
      },
    );
  });

  it("throws when users payload is missing or invalid", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({}),
      }),
    );

    await expect(listApiUsers("http://localhost:3001/api/v1")).rejects.toMatchObject(
      {
        name: RequestsRepositoryError.name,
        code: "USERS_UNAVAILABLE",
        message: "Invalid users API response.",
      },
    );
  });

  it("calls only /users without Authorization header", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ users: [] }),
    });
    vi.stubGlobal("fetch", fetchMock);

    await listApiUsers("http://localhost:3001/api/v1");

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith("http://localhost:3001/api/v1/users");
    const [, init] = fetchMock.mock.calls[0] ?? [];
    expect(init?.headers).toBeUndefined();
  });

  it("does not read token from localStorage", async () => {
    localStorage.setItem("interv360:token", "secret-token");
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ users: [] }),
    });
    vi.stubGlobal("fetch", fetchMock);

    await listApiUsers("http://localhost:3001/api/v1");

    const [, init] = fetchMock.mock.calls[0] ?? [];
    expect(init?.headers).toBeUndefined();
  });
});
