import type { User } from "../domain/user.js";

export const SEEDED_USERS: User[] = [
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

export const DEFAULT_USER_ID = "user-technician";
