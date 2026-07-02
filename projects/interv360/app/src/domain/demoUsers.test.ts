import { describe, expect, it } from "vitest";
import {
  DEFAULT_DEMO_USER_ID,
  DEMO_USERS,
  findDemoUserById,
  getDefaultDemoUser,
} from "./demoUsers";

describe("demoUsers", () => {
  it("contains 5 active demo users", () => {
    expect(DEMO_USERS).toHaveLength(5);
    for (const user of DEMO_USERS) {
      expect(user.isActive).toBe(true);
    }
  });

  it("assigns each user a known simulated role", () => {
    const roles = DEMO_USERS.map((user) => user.role);
    expect(roles).toEqual([
      "requester",
      "technician",
      "manager",
      "admin",
      "viewer",
    ]);
  });

  it("returns Théo Technicien as the default demo user", () => {
    const defaultUser = getDefaultDemoUser();
    expect(defaultUser.id).toBe(DEFAULT_DEMO_USER_ID);
    expect(defaultUser.displayName).toBe("Théo Technicien");
    expect(defaultUser.role).toBe("technician");
  });

  it("finds Maya Responsable by id", () => {
    const user = findDemoUserById("user-manager");
    expect(user?.displayName).toBe("Maya Responsable");
    expect(user?.role).toBe("manager");
  });

  it("returns undefined for unknown user id", () => {
    expect(findDemoUserById("unknown")).toBeUndefined();
    expect(findDemoUserById(null)).toBeUndefined();
  });
});
