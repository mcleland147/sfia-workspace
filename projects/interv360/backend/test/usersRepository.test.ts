import Database from "better-sqlite3";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { applySqliteSchema } from "../src/persistence/sqliteSchema.js";
import { seedUsers } from "../src/persistence/sqliteSeed.js";
import { getUserById, listUsers } from "../src/repositories/usersRepository.js";

describe("usersRepository", () => {
  let db: Database.Database;

  beforeEach(() => {
    db = new Database(":memory:");
    applySqliteSchema(db);
    seedUsers(db);
  });

  afterEach(() => {
    db.close();
  });

  it("listUsers returns 5 active users", () => {
    const users = listUsers(db);
    expect(users).toHaveLength(5);
    expect(users.every((user) => user.isActive)).toBe(true);
  });

  it("listUsers maps sqlite fields to domain shape", () => {
    const [firstUser] = listUsers(db);
    expect(firstUser).toMatchObject({
      id: expect.any(String),
      displayName: expect.any(String),
      email: expect.any(String),
      role: expect.any(String),
      team: expect.any(String),
      isActive: expect.any(Boolean),
    });
    expect("display_name" in (firstUser as unknown as Record<string, unknown>)).toBe(
      false,
    );
  });

  it("getUserById returns Theo Technicien", () => {
    const user = getUserById(db, "user-technician");
    expect(user).toEqual({
      id: "user-technician",
      displayName: "Théo Technicien",
      email: "theo.technicien@example.test",
      role: "technician",
      team: "Support technique",
      isActive: true,
    });
  });

  it("getUserById returns undefined for unknown user", () => {
    expect(getUserById(db, "unknown")).toBeUndefined();
  });

  it("returns expected roles for all seeded users", () => {
    const expectedRoles = new Map([
      ["Alice Demandeur", "requester"],
      ["Théo Technicien", "technician"],
      ["Maya Responsable", "manager"],
      ["Amin Admin", "admin"],
      ["Victor Lecteur", "viewer"],
    ]);

    for (const user of listUsers(db)) {
      expect(user.role).toBe(expectedRoles.get(user.displayName));
    }
  });
});
