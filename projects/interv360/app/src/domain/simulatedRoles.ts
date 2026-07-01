export type SimulatedRole =
  | "requester"
  | "technician"
  | "manager"
  | "admin"
  | "viewer";

export type RoleControlledAction =
  | "qualify"
  | "plan"
  | "complete_intervention"
  | "close_report"
  | "demo_reset";

export const DEFAULT_SIMULATED_ROLE: SimulatedRole = "technician";

export const simulatedRoleLabels: Record<SimulatedRole, string> = {
  requester: "Demandeur",
  technician: "Technicien",
  manager: "Responsable",
  admin: "Administrateur",
  viewer: "Observateur",
};

export const simulatedRoles: SimulatedRole[] = [
  "requester",
  "technician",
  "manager",
  "admin",
  "viewer",
];

export const rolePermissions: Record<
  SimulatedRole,
  Record<RoleControlledAction, boolean>
> = {
  requester: {
    qualify: false,
    plan: false,
    complete_intervention: false,
    close_report: false,
    demo_reset: false,
  },
  technician: {
    qualify: true,
    plan: true,
    complete_intervention: true,
    close_report: true,
    demo_reset: false,
  },
  manager: {
    qualify: true,
    plan: true,
    complete_intervention: true,
    close_report: true,
    demo_reset: false,
  },
  admin: {
    qualify: true,
    plan: true,
    complete_intervention: true,
    close_report: true,
    demo_reset: true,
  },
  viewer: {
    qualify: false,
    plan: false,
    complete_intervention: false,
    close_report: false,
    demo_reset: false,
  },
};

export function isSimulatedRole(value: unknown): value is SimulatedRole {
  return typeof value === "string" && simulatedRoles.includes(value as SimulatedRole);
}

export function canRolePerform(
  role: SimulatedRole,
  action: RoleControlledAction,
): boolean {
  return rolePermissions[role][action];
}

export function formatUnauthorizedRoleMessage(role: SimulatedRole): string {
  return `Action non autorisée pour le rôle simulé : ${simulatedRoleLabels[role]}.`;
}
