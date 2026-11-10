export type PermissionLevel = "none" | "read" | "write" | "admin";

const RANK: Record<PermissionLevel, number> = {
  none: 0,
  read: 1,
  write: 2,
  admin: 3,
};

export function normalizePermissionLevel(raw: unknown): PermissionLevel | null {
  if (raw == null) return null;
  const v = String(raw).trim().toLowerCase();
  if (v === "none" || v === "read" || v === "write" || v === "admin") return v;
  // GitHub sometimes uses "pull"/"push"
  if (v === "pull") return "read";
  if (v === "push") return "write";
  return null;
}

/** True iff `have` satisfies `need` (write never satisfied by read). */
export function permissionSatisfies(have: unknown, need: PermissionLevel): boolean {
  const h = normalizePermissionLevel(have);
  if (!h) return false;
  return RANK[h] >= RANK[need];
}

export type RequiredPermission = { key: string; level: PermissionLevel };

export function assertPermissionMap(
  permissions: Record<string, string>,
  required: RequiredPermission[],
): void {
  for (const req of required) {
    const have = permissions[req.key];
    if (!permissionSatisfies(have, req.level)) {
      const err = new Error(
        `Permission insuffisante: ${req.key} exige ${req.level}, reçu ${have ?? "absent"}`,
      );
      (err as Error & { code: string }).code = "ACCESS_DENIED";
      throw err;
    }
  }
}
