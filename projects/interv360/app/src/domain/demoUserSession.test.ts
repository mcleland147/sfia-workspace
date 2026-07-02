import { beforeEach, describe, expect, it } from "vitest";
import { CURRENT_USER_STORAGE_KEY } from "./demoUsers";
import { getCurrentDemoUser, setCurrentDemoUser } from "./demoUserSession";

describe("demoUserSession", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("defaults to Théo Technicien and writes current-user-id", () => {
    const user = getCurrentDemoUser();

    expect(user.id).toBe("user-technician");
    expect(user.displayName).toBe("Théo Technicien");
    expect(localStorage.getItem(CURRENT_USER_STORAGE_KEY)).toBe(
      "user-technician",
    );
  });

  it("returns stored admin user when current-user-id is user-admin", () => {
    localStorage.setItem(CURRENT_USER_STORAGE_KEY, "user-admin");

    const user = getCurrentDemoUser();

    expect(user.id).toBe("user-admin");
    expect(user.displayName).toBe("Amin Admin");
    expect(user.role).toBe("admin");
  });

  it("falls back to Théo Technicien for unknown stored id", () => {
    localStorage.setItem(CURRENT_USER_STORAGE_KEY, "unknown-user");

    const user = getCurrentDemoUser();

    expect(user.id).toBe("user-technician");
    expect(localStorage.getItem(CURRENT_USER_STORAGE_KEY)).toBe(
      "user-technician",
    );
  });

  it("persists manager user via setCurrentDemoUser", () => {
    const user = setCurrentDemoUser("user-manager");

    expect(user.id).toBe("user-manager");
    expect(user.displayName).toBe("Maya Responsable");
    expect(localStorage.getItem(CURRENT_USER_STORAGE_KEY)).toBe("user-manager");
  });

  it("normalises unknown ids through setCurrentDemoUser", () => {
    const user = setCurrentDemoUser("unknown-user");

    expect(user.id).toBe("user-technician");
    expect(localStorage.getItem(CURRENT_USER_STORAGE_KEY)).toBe(
      "user-technician",
    );
  });
});
