/**
 * PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01
 * Stable Project workspace key derived once from title at create time.
 * Rename of title must NOT recompute an existing durable key.
 */
export const PROJECT_WORKSPACE_PREFIX = "projects" as const;

/**
 * Derive a stable kebab workspace key from a Project title.
 * Deterministic, ASCII-leaning, path-safe leaf (no slashes).
 */
export function deriveProjectWorkspaceKeyFromTitle(title: string): string {
  const normalized = title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
  const key = normalized.slice(0, 80).replace(/-+$/g, "");
  return key.length > 0 ? key : "project";
}

/** Repo-relative Project workspace root: projects/<key> */
export function composeProjectWorkspacePathRoot(workspaceKey: string): string {
  const key = workspaceKey.trim().replace(/^\/+|\/+$/g, "");
  if (!key || key.includes("/") || key.includes("\\") || key.includes("..")) {
    throw new Error("invalid_project_workspace_key");
  }
  return `${PROJECT_WORKSPACE_PREFIX}/${key}`;
}

export function isValidProjectWorkspaceKey(key: string): boolean {
  return (
    typeof key === "string" &&
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(key) &&
    key.length >= 1 &&
    key.length <= 80
  );
}
