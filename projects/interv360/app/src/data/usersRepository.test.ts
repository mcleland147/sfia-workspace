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
