import type { SimulatedRole } from "./simulatedRoles";

export type DemoUser = {
  id: string;
  displayName: string;
  email: string;
  role: SimulatedRole;
  team: string;
  isActive: boolean;
};

export const DEMO_USERS: DemoUser[] = [
  {
    id: "user-requester",
    displayName: "Alice Demandeur",
    email: "alice.demandeur@example.test",
    role: "requester",
    team: "Centre demandeur",
    isActive: true,
  },
  {
    id: "user-technician",
    displayName: "Théo Technicien",
    email: "theo.technicien@example.test",
    role: "technician",
    team: "Support technique",
    isActive: true,
  },
  {
    id: "user-manager",
    displayName: "Maya Responsable",
    email: "maya.responsable@example.test",
    role: "manager",
    team: "Pilotage SAV",
    isActive: true,
  },
  {
    id: "user-admin",
    displayName: "Amin Admin",
    email: "amin.admin@example.test",
    role: "admin",
    team: "Administration",
    isActive: true,
  },
  {
    id: "user-viewer",
    displayName: "Victor Lecteur",
    email: "victor.lecteur@example.test",
    role: "viewer",
    team: "Lecture seule",
    isActive: true,
  },
];

export const DEFAULT_DEMO_USER_ID = "user-technician";

export const CURRENT_USER_STORAGE_KEY = "interv360:current-user-id";

export function findDemoUserById(
  id: string | null | undefined,
): DemoUser | undefined {
  return DEMO_USERS.find((user) => user.id === id);
}

export function getDefaultDemoUser(): DemoUser {
  const defaultUser = findDemoUserById(DEFAULT_DEMO_USER_ID);
  if (!defaultUser) {
    throw new Error(`Default demo user not found: ${DEFAULT_DEMO_USER_ID}`);
  }
  return defaultUser;
}

export function getDemoUserRole(user: DemoUser): SimulatedRole {
  return user.role;
}
