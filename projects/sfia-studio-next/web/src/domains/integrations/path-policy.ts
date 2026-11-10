export type PathClassification = "DOCUMENTARY" | "TECHNICAL" | "PROTECTED" | "UNKNOWN";

export type PathPolicyResult = {
  allowed: boolean;
  reason: string;
  classification: PathClassification;
  normalizedPath?: string;
};

const DOC_PREFIXES = ["docs/", "documentation/", "notes/"] as const;
const DOC_EXTENSIONS = [".md", ".txt", ".adoc"] as const;

const DENY_PREFIXES = [
  ".github/",
  "src/",
  "scripts/",
  "migrations/",
  "infra/",
  "workflows/",
  "node_modules/",
  ".git/",
] as const;

const DENY_BASENAME_SUBSTR = ["secret", ".env", "credential", "private-key", "private_key"] as const;

const DENY_EXACT_BASENAMES = new Set([
  "dockerfile",
  "package.json",
  "package-lock.json",
  "pnpm-lock.yaml",
  "yarn.lock",
  "tsconfig.json",
  "next.config.ts",
  "next.config.js",
  "next.config.mjs",
  "vitest.config.ts",
  "playwright.config.ts",
  "readme.md",
]);

const DENY_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".py",
  ".sql",
  ".sh",
  ".bash",
  ".zsh",
  ".yml",
  ".yaml",
  ".toml",
  ".env",
]);

function reject(reason: string, classification: PathClassification = "UNKNOWN"): PathPolicyResult {
  return { allowed: false, reason, classification };
}

/**
 * Fail-closed normalization for publication paths.
 * Rejects absolute paths, traversal, control chars, backslashes, and empty.
 */
export function normalizePublicationPath(rawPath: string): PathPolicyResult & { normalizedPath?: string } {
  if (rawPath == null || typeof rawPath !== "string") {
    return reject("EMPTY_PATH");
  }
  if (rawPath.length === 0 || rawPath.trim().length === 0) {
    return reject("EMPTY_PATH");
  }
  if (/[\u0000-\u001f\u007f]/.test(rawPath)) {
    return reject("CONTROL_CHARS", "PROTECTED");
  }
  if (rawPath.includes("\\")) {
    return reject("BACKSLASH_SEPARATOR", "PROTECTED");
  }
  if (rawPath.startsWith("/") || /^[a-zA-Z]:/.test(rawPath)) {
    return reject("ABSOLUTE_PATH", "PROTECTED");
  }
  // Percent-encoding that could hide traversal (literal %2e / %2E / %2f).
  if (/%2e/i.test(rawPath) || /%2f/i.test(rawPath) || /%5c/i.test(rawPath)) {
    return reject("ENCODED_TRAVERSAL", "PROTECTED");
  }
  if (rawPath.includes("?") || rawPath.includes("#") || rawPath.includes("://")) {
    return reject("AMBIGUOUS_URI_FORM", "PROTECTED");
  }

  const parts = rawPath.split("/");
  const out: string[] = [];
  for (const part of parts) {
    if (part === "") {
      return reject("EMPTY_SEGMENT", "PROTECTED");
    }
    if (part === "." || part === "..") {
      return reject("DOT_SEGMENT", "PROTECTED");
    }
    if (part === "~" || part.startsWith("~")) {
      return reject("HOME_SEGMENT", "PROTECTED");
    }
    out.push(part);
  }
  return {
    allowed: true,
    reason: "NORMALIZED",
    classification: "UNKNOWN",
    normalizedPath: out.join("/"),
  };
}

function underDocAllowlist(norm: string): boolean {
  return DOC_PREFIXES.some((p) => norm === p.slice(0, -1) || norm.startsWith(p));
}

function basenameOf(norm: string): string {
  const i = norm.lastIndexOf("/");
  return i >= 0 ? norm.slice(i + 1) : norm;
}

/**
 * Classify whether a repository path may be targeted for documentary ML4 publication.
 * Markdown alone never grants allowance. Fail closed on any ambiguous path.
 */
export function classifyPublicationPath(rawPath: string): PathPolicyResult {
  const normResult = normalizePublicationPath(rawPath);
  if (!normResult.allowed || !normResult.normalizedPath) {
    return {
      allowed: false,
      reason: normResult.reason,
      classification: normResult.classification,
    };
  }
  const norm = normResult.normalizedPath;
  const lower = norm.toLowerCase();
  const base = basenameOf(lower);

  if (base === "readme.md" || (base.startsWith("readme.") && base.endsWith(".md"))) {
    // Root README protected; also deny README under non-doc zones.
    if (!underDocAllowlist(norm) || base === "readme.md") {
      // Allow docs/readme.md? Mandate adversarial includes README.md at root only.
      // Keep root README protected; docs/readme.md treated as documentary if under allowlist.
      if (!underDocAllowlist(norm)) {
        return {
          allowed: false,
          reason: "ROOT_README_PROTECTED",
          classification: "PROTECTED",
          normalizedPath: norm,
        };
      }
    }
    if (norm === "README.md" || lower === "readme.md") {
      return {
        allowed: false,
        reason: "ROOT_README_PROTECTED",
        classification: "PROTECTED",
        normalizedPath: norm,
      };
    }
  }

  for (const p of DENY_PREFIXES) {
    if (lower === p.replace(/\/$/, "") || lower.startsWith(p)) {
      return {
        allowed: false,
        reason: `DENIED_PREFIX:${p}`,
        classification: "TECHNICAL",
        normalizedPath: norm,
      };
    }
  }

  for (const token of DENY_BASENAME_SUBSTR) {
    if (base.includes(token)) {
      return {
        allowed: false,
        reason: `DENIED_SECRET_NAME:${token}`,
        classification: "PROTECTED",
        normalizedPath: norm,
      };
    }
  }

  if (DENY_EXACT_BASENAMES.has(base)) {
    return {
      allowed: false,
      reason: `DENIED_BASENAME:${base}`,
      classification: base.includes("readme") ? "PROTECTED" : "TECHNICAL",
      normalizedPath: norm,
    };
  }

  const extIdx = base.lastIndexOf(".");
  const ext = extIdx >= 0 ? base.slice(extIdx) : "";
  if (ext && DENY_EXTENSIONS.has(ext)) {
    return {
      allowed: false,
      reason: `DENIED_EXTENSION:${ext}`,
      classification: "TECHNICAL",
      normalizedPath: norm,
    };
  }

  // Compound tricks: Dockerfile.md, .env.local.md under docs still denied by basename substr / exact.
  if (base.startsWith("dockerfile") || base.startsWith(".env")) {
    return {
      allowed: false,
      reason: "DENIED_TECHNICAL_DISGUISE",
      classification: "TECHNICAL",
      normalizedPath: norm,
    };
  }

  const inDocZone = underDocAllowlist(norm);
  const docExt = (DOC_EXTENSIONS as readonly string[]).includes(ext);
  if (inDocZone && docExt) {
    return {
      allowed: true,
      reason: "DOCUMENTARY_ALLOWLIST",
      classification: "DOCUMENTARY",
      normalizedPath: norm,
    };
  }

  if (docExt) {
    return {
      allowed: false,
      reason: "MARKDOWN_OUTSIDE_DOCUMENTARY_ZONE",
      classification: "UNKNOWN",
      normalizedPath: norm,
    };
  }

  return {
    allowed: false,
    reason: "UNSUPPORTED_OR_UNKNOWN",
    classification: "UNKNOWN",
    normalizedPath: norm,
  };
}
