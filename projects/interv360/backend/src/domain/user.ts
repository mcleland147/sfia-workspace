export type UserRole =
  | "requester"
  | "technician"
  | "manager"
  | "admin"
  | "viewer";

export type User = {
  id: string;
  displayName: string;
  email: string;
  role: UserRole;
  team: string;
  isActive: boolean;
};

export const USER_ROLES: UserRole[] = [
  "requester",
  "technician",
  "manager",
  "admin",
  "viewer",
];
