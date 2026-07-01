import { describe, expect, it } from "vitest";
import {
  canRolePerform,
  DEFAULT_SIMULATED_ROLE,
  formatUnauthorizedRoleMessage,
  isSimulatedRole,
  simulatedRoles,
} from "./simulatedRoles";

describe("simulatedRoles", () => {
  it("uses technician as the default role", () => {
    expect(DEFAULT_SIMULATED_ROLE).toBe("technician");
  });

  it("recognizes valid simulated roles", () => {
    for (const role of simulatedRoles) {
      expect(isSimulatedRole(role)).toBe(true);
    }
  });

  it("rejects unknown role values", () => {
    expect(isSimulatedRole("superuser")).toBe(false);
    expect(isSimulatedRole(null)).toBe(false);
    expect(isSimulatedRole(undefined)).toBe(false);
  });

  it("denies workflow transitions for viewer and requester", () => {
    for (const role of ["viewer", "requester"] as const) {
      expect(canRolePerform(role, "qualify")).toBe(false);
      expect(canRolePerform(role, "plan")).toBe(false);
      expect(canRolePerform(role, "complete_intervention")).toBe(false);
      expect(canRolePerform(role, "close_report")).toBe(false);
      expect(canRolePerform(role, "demo_reset")).toBe(false);
    }
  });

  it("allows workflow transitions for technician, manager, and admin", () => {
    for (const role of ["technician", "manager", "admin"] as const) {
      expect(canRolePerform(role, "qualify")).toBe(true);
      expect(canRolePerform(role, "plan")).toBe(true);
      expect(canRolePerform(role, "complete_intervention")).toBe(true);
      expect(canRolePerform(role, "close_report")).toBe(true);
    }
  });

  it("allows demo reset only for admin", () => {
    expect(canRolePerform("admin", "demo_reset")).toBe(true);
    expect(canRolePerform("technician", "demo_reset")).toBe(false);
    expect(canRolePerform("manager", "demo_reset")).toBe(false);
    expect(canRolePerform("viewer", "demo_reset")).toBe(false);
    expect(canRolePerform("requester", "demo_reset")).toBe(false);
  });

  it("formats unauthorized role messages with French labels", () => {
    expect(formatUnauthorizedRoleMessage("viewer")).toBe(
      "Action non autorisée pour le rôle simulé : Observateur.",
    );
    expect(formatUnauthorizedRoleMessage("technician")).toBe(
      "Action non autorisée pour le rôle simulé : Technicien.",
    );
  });
});
