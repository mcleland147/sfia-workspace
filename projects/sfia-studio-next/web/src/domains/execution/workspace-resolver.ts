/**
 * P0-02 — server-side Cursor workspace confinement.
 * Browser never chooses an arbitrary server path.
 */

import { createHash } from "crypto";
import { mkdirSync, realpathSync, existsSync } from "fs";
import { isAbsolute, join, normalize, relative, resolve, sep } from "path";
import { StudioError } from "@/lib/http-errors";

export type WorkspaceResolveInput = {
  pilotId: string;
  projectId: string;
  /** Optional short key under the project sandbox — never an absolute client path. */
  workspaceKey?: string | null;
  /** Rejected if absolute or escaping — kept only to fail closed on legacy clients. */
  clientDeclaredCwd?: string | null;
  ensureDir?: boolean;
  env?: NodeJS.ProcessEnv;
};

export type WorkspaceResolveResult = {
  workspaceCwd: string;
  root: string;
  workspaceKey: string;
  created: boolean;
};

function assertSafeKey(key: string): string {
  const k = key.trim();
  if (!k || k.length > 64) {
    throw new StudioError("INVALID_REQUEST", "workspaceKey invalide", { exposeMessage: true });
  }
  if (!/^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/.test(k)) {
    throw new StudioError("INVALID_REQUEST", "workspaceKey caractères refusés", {
      exposeMessage: true,
    });
  }
  if (k.includes("..") || k.includes("/") || k.includes("\\")) {
    throw new StudioError("ACCESS_DENIED", "workspaceKey path traversal", { exposeMessage: true });
  }
  return k;
}

/**
 * Refuse Cursor roots that sit inside product / method trees.
 * A cwd hint in the prompt is not confinement — the root itself must be outside.
 */
function assertRootNotInsideProductTrees(realRoot: string): void {
  const lowered = realRoot.toLowerCase();
  const forbiddenSubstrings = [
    "/sfia-workspace/",
    "/sfia-wt-next-",
    "/sfia-workspace-next-",
    "/projects/sfia-studio-next/",
  ];
  for (const marker of forbiddenSubstrings) {
    if (lowered.includes(marker.toLowerCase())) {
      throw new StudioError(
        "ACCESS_DENIED",
        "SFIA_CURSOR_WORKSPACE_ROOT refuse — racine à l'intérieur d'un arbre produit/méthode",
        { exposeMessage: true },
      );
    }
  }
  // Exact leaf matches (root == product checkout basename path endings)
  const leaf = realRoot.replace(/\/+$/, "").split(sep).pop() ?? "";
  if (
    leaf === "sfia-workspace" ||
    /^sfia-wt-next-/.test(leaf) ||
    /^sfia-workspace-next-/.test(leaf)
  ) {
    throw new StudioError(
      "ACCESS_DENIED",
      "SFIA_CURSOR_WORKSPACE_ROOT refuse — racine égale à un dépôt produit",
      { exposeMessage: true },
    );
  }
}

function resolveRoot(env: NodeJS.ProcessEnv): string {
  const raw = (env.SFIA_CURSOR_WORKSPACE_ROOT || "").trim();
  if (!raw) {
    throw new StudioError(
      "INVALID_REQUEST",
      "SFIA_CURSOR_WORKSPACE_ROOT requis — workspace non choisi par le navigateur",
      { exposeMessage: true },
    );
  }
  if (!isAbsolute(raw)) {
    throw new StudioError("INVALID_REQUEST", "SFIA_CURSOR_WORKSPACE_ROOT doit être absolu", {
      exposeMessage: true,
    });
  }
  const normalized = normalize(raw);
  if (!existsSync(normalized)) {
    throw new StudioError("INVALID_REQUEST", "Racine workspace Cursor absente", {
      exposeMessage: true,
    });
  }
  let real: string;
  try {
    real = realpathSync(normalized);
  } catch {
    throw new StudioError("INVALID_REQUEST", "Racine workspace non résolvable", {
      exposeMessage: true,
    });
  }
  assertRootNotInsideProductTrees(real);
  return real;
}

/**
 * Resolve a confined workspace under SFIA_CURSOR_WORKSPACE_ROOT/<pilot>/<project>/<key>.
 * Client absolute paths are always rejected.
 */
export function resolveCursorWorkspace(input: WorkspaceResolveInput): WorkspaceResolveResult {
  const env = input.env ?? process.env;
  if (input.clientDeclaredCwd && input.clientDeclaredCwd.trim()) {
    const declared = input.clientDeclaredCwd.trim();
    if (isAbsolute(declared) || declared.includes("..") || declared.includes("~")) {
      throw new StudioError(
        "ACCESS_DENIED",
        "workspaceCwd client arbitraire refusé — utiliser workspaceKey serveur",
        { exposeMessage: true },
      );
    }
  }

  const root = resolveRoot(env);
  const pilotSeg = createHash("sha256").update(input.pilotId, "utf8").digest("hex").slice(0, 16);
  const projectSeg = createHash("sha256").update(input.projectId, "utf8").digest("hex").slice(0, 16);
  const workspaceKey = assertSafeKey(input.workspaceKey?.trim() || "default");
  const candidate = resolve(join(root, pilotSeg, projectSeg, workspaceKey));

  const rel = relative(root, candidate);
  if (rel.startsWith("..") || isAbsolute(rel)) {
    throw new StudioError("ACCESS_DENIED", "Workspace hors racine approuvée", {
      exposeMessage: true,
    });
  }

  let created = false;
  if (input.ensureDir !== false) {
    if (!existsSync(candidate)) {
      mkdirSync(candidate, { recursive: true, mode: 0o700 });
      created = true;
    }
  } else if (!existsSync(candidate)) {
    throw new StudioError("NOT_FOUND", "Workspace absent", { exposeMessage: true });
  }

  let real: string;
  try {
    real = realpathSync(candidate);
  } catch {
    throw new StudioError("INVALID_REQUEST", "Workspace non résolvable", { exposeMessage: true });
  }
  const relReal = relative(root, real);
  if (relReal.startsWith("..") || isAbsolute(relReal) || relReal.split(sep).includes("..")) {
    throw new StudioError("ACCESS_DENIED", "Workspace réel hors confinement", {
      exposeMessage: true,
    });
  }

  return { workspaceCwd: real, root, workspaceKey, created };
}
