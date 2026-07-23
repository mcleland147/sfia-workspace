/**
 * Path / repo policy for Control Tower read tools — deny by default.
 */
import path from "node:path";
import type { ToolErrorCode, ToolPolicyDecision } from "../tools/types";
import { CT_GITHUB_REPO_ALLOWLIST } from "../tools/types";

const FORBIDDEN_PATH_PREFIXES = [
  ".git/",
  ".env",
  "node_modules/",
  "method/",
  "prompts/",
  "scripts/",
  ".github/",
  ".sfia/",
  ".cursor/",
] as const;

const FORBIDDEN_BASENAME_PREFIXES = [".env"] as const;

const FORBIDDEN_BASENAMES = new Set([
  ".env",
  ".env.local",
  ".env.production",
  "credentials.json",
  "id_rsa",
  "id_ed25519",
]);

const ALLOWED_READ_PREFIXES = [
  "projects/campus360/",
  "projects/sfia-studio/",
  "README.md",
] as const;

export function normalizeRelativePath(raw: unknown): {
  ok: true;
  normalized: string;
} | {
  ok: false;
  errorCode: ToolErrorCode;
  reason: string;
} {
  if (typeof raw !== "string" || !raw.trim()) {
    return {
      ok: false,
      errorCode: "INVALID_ARGUMENTS",
      reason: "Chemin manquant.",
    };
  }
  const trimmed = raw.trim();
  if (path.isAbsolute(trimmed) || /^[A-Za-z]:[\\/]/.test(trimmed)) {
    return {
      ok: false,
      errorCode: "PATH_NOT_ALLOWED",
      reason: "Chemin absolu interdit.",
    };
  }
  const posix = trimmed.replace(/\\/g, "/");
  const parts = posix.split("/");
  if (parts.some((p) => p === ".." || p === "")) {
    return {
      ok: false,
      errorCode: "PATH_NOT_ALLOWED",
      reason: "Traversal ou segment vide interdit.",
    };
  }
  return {
    ok: true,
    normalized: parts.filter((p) => p !== ".").join("/"),
  };
}

export function decideReadPath(normalized: string): ToolPolicyDecision {
  const base = normalized.split("/").pop() ?? normalized;
  if (FORBIDDEN_BASENAMES.has(base)) {
    return {
      allowed: false,
      errorCode: "PATH_NOT_ALLOWED",
      reason: "Basename secret interdit.",
    };
  }
  for (const p of FORBIDDEN_BASENAME_PREFIXES) {
    if (base.startsWith(p)) {
      return {
        allowed: false,
        errorCode: "PATH_NOT_ALLOWED",
        reason: "Fichier env/secret interdit.",
      };
    }
  }
  for (const prefix of FORBIDDEN_PATH_PREFIXES) {
    if (normalized === prefix.replace(/\/$/, "") || normalized.startsWith(prefix)) {
      return {
        allowed: false,
        errorCode: "PATH_NOT_ALLOWED",
        reason: `Préfixe interdit: ${prefix}`,
      };
    }
  }
  const allowed = ALLOWED_READ_PREFIXES.some((prefix) => {
    if (prefix.endsWith("/")) {
      return normalized.startsWith(prefix) || normalized === prefix.slice(0, -1);
    }
    return normalized === prefix;
  });
  if (!allowed) {
    return {
      allowed: false,
      errorCode: "PATH_NOT_ALLOWED",
      reason: "Chemin hors allowlist de lecture Control Tower.",
    };
  }
  return { allowed: true };
}

export function decideGithubRepo(
  owner: string,
  name: string,
): ToolPolicyDecision {
  const full = `${owner}/${name}`;
  if (
    !(CT_GITHUB_REPO_ALLOWLIST as readonly string[]).includes(full)
  ) {
    return {
      allowed: false,
      errorCode: "REPOSITORY_NOT_ALLOWED",
      reason: `Repository non allowlisté: ${full}`,
    };
  }
  return { allowed: true };
}

export function assertPathInsideRoot(
  workspaceRoot: string,
  relativePath: string,
): ToolPolicyDecision {
  const abs = path.resolve(workspaceRoot, relativePath);
  const root = path.resolve(workspaceRoot);
  if (abs !== root && !abs.startsWith(root + path.sep)) {
    return {
      allowed: false,
      errorCode: "PATH_NOT_ALLOWED",
      reason: "Chemin hors racine du repository.",
    };
  }
  return { allowed: true };
}
