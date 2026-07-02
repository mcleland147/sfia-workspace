import type Database from "better-sqlite3";
import type { User } from "../domain/user.js";

type UserRow = {
  id: string;
  display_name: string;
  email: string;
  role: User["role"];
  team: string;
  is_active: number;
};

function mapUserRow(row: UserRow): User {
  return {
    id: row.id,
    displayName: row.display_name,
    email: row.email,
    role: row.role,
    team: row.team,
    isActive: row.is_active === 1,
  };
}

export function listUsers(db: Database.Database): User[] {
  const rows = db
    .prepare(
      `
      SELECT id, display_name, email, role, team, is_active
      FROM users
      WHERE is_active = 1
      ORDER BY display_name ASC
      `,
    )
    .all() as UserRow[];

  return rows.map(mapUserRow);
}

export function getUserById(
  db: Database.Database,
  userId: string,
): User | undefined {
  const row = db
    .prepare(
      `
      SELECT id, display_name, email, role, team, is_active
      FROM users
      WHERE id = ?
      `,
    )
    .get(userId) as UserRow | undefined;

  return row ? mapUserRow(row) : undefined;
}
