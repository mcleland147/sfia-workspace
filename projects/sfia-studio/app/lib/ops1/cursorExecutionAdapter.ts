/**
 * OPS1 I5 Cursor adapters.
 * Fixture = explicit deterministic executor for tests (never silent substitute for real).
 * Real = env-gated CLI spawn; refuses if unavailable.
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { accessSync, constants } from "node:fs";
import { Ops1Error } from "./errors";
import type { CursorAdapterMode, ExecutionContract } from "./types";

export const OPS1_CURSOR_REAL_FLAG = "OPS1_CURSOR_REAL";

export interface CursorAdapterResult {
  ok: boolean;
  adapterMode: CursorAdapterMode;
  exitCode: number | null;
  timedOut: boolean;
  stdout: string;
  stderr: string;
  realProcessInvoked: boolean;
  errorCode?: string;
  durationMs: number;
  argvRedacted?: string[];
}

export function isRealCursorRequested(): boolean {
  return process.env[OPS1_CURSOR_REAL_FLAG] === "1";
}

/** Resolve executable Cursor CLI used by the real adapter (no silent substitute). */
export function resolveCursorBinPath(): string | null {
  const candidates = [
    process.env.SFIA_CURSOR_BIN,
    "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
    path.join(process.env.HOME ?? "", ".local/bin/cursor-agent"),
  ].filter(Boolean) as string[];
  for (const c of candidates) {
    try {
      accessSync(c, constants.X_OK);
      return c;
    } catch {
      /* next */
    }
  }
  return null;
}

export function getRealCursorAvailability(): {
  flagEnabled: boolean;
  binPath: string | null;
  available: boolean;
} {
  const flagEnabled = isRealCursorRequested();
  const binPath = resolveCursorBinPath();
  return {
    flagEnabled,
    binPath,
    available: flagEnabled && Boolean(binPath),
  };
}

function resolveCursorBin(): string | null {
  return resolveCursorBinPath();
}

function applyFixtureEffect(
  contract: ExecutionContract,
  worktreePath: string,
): void {
  const target =
    contract.allowedCreates[0] ?? contract.allowedModifies[0] ?? null;
  if (!target) {
    throw new Ops1Error(
      "VALIDATION",
      "Fixture I5 exige au moins un CREATE ou MODIFY allowlisté.",
    );
  }
  const abs = path.join(worktreePath, target);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  const stamp = [
    "",
    "",
    "<!-- OPS1 I5 fixture execution -->",
    `<!-- contractHash: ${contract.contractHash} -->`,
    "",
    `## OPS1 I5 fixture note`,
    "",
    contract.actionInstructions,
    "",
  ].join("\n");
  if (contract.allowedCreates.includes(target)) {
    if (fs.existsSync(abs)) {
      throw new Ops1Error(
        "CONFLICT",
        "CREATE fixture sur fichier déjà présent.",
      );
    }
    fs.writeFileSync(
      abs,
      `# ${path.basename(target)}\n\n${stamp}`,
      "utf8",
    );
  } else {
    const prev = fs.existsSync(abs) ? fs.readFileSync(abs, "utf8") : "";
    fs.writeFileSync(abs, `${prev}${stamp}`, "utf8");
  }
}

async function spawnRealCursor(input: {
  contract: ExecutionContract;
  worktreePath: string;
  timeoutMs: number;
}): Promise<CursorAdapterResult> {
  const bin = resolveCursorBin();
  if (!bin) {
    return {
      ok: false,
      adapterMode: "real",
      exitCode: null,
      timedOut: false,
      stdout: "",
      stderr: "CURSOR EXECUTION BLOCKED — REAL ADAPTER UNAVAILABLE",
      realProcessInvoked: false,
      errorCode: "CURSOR_UNAVAILABLE",
      durationMs: 0,
    };
  }

  // Require worktree under .sfia-exec or OPS1_EXEC_ROOT
  const resolved = path.resolve(input.worktreePath);
  if (
    !resolved.includes(`${path.sep}.sfia-exec${path.sep}`) &&
    !(
      process.env.OPS1_EXEC_ROOT &&
      resolved.startsWith(path.resolve(process.env.OPS1_EXEC_ROOT))
    )
  ) {
    throw new Ops1Error(
      "CONFLICT",
      "CWD Cursor réel hors zone .sfia-exec autorisée.",
    );
  }

  const instruction = [
    "TÂCHE UNIQUE — créer EXACTEMENT un fichier Markdown, rien d'autre.",
    `Chemin exact (relatif au workspace): ${(input.contract.allowedCreates[0] ?? "").trim()}`,
    "",
    "Contenu Markdown EXACT (octet pour octet, sans préambule, sans commentaire HTML, sans autre fichier):",
    "-----BEGIN CONTENT-----",
    input.contract.actionInstructions,
    "-----END CONTENT-----",
    "",
    "Objectif métier:",
    input.contract.actionObjective,
    "",
    "Contraintes strictes (fail si violées):",
    `- CREATE uniquement: ${input.contract.allowedCreates.join(", ") || "(aucun)"}`,
    `- READ autorisé: ${input.contract.allowedReads.join(", ") || "(aucun)"}`,
    `- MODIFY: ${input.contract.allowedModifies.join(", ") || "(aucun — interdit)"}`,
    "- Aucun rename, aucune suppression, aucun autre chemin.",
    "- Aucun git commit/push/PR/merge/remote.",
    `- contractHash=${input.contract.contractHash}`,
  ].join("\n");

  const argv = [
    "agent",
    "--print",
    "--workspace",
    input.worktreePath,
    "--trust",
    "--sandbox",
    "enabled",
    instruction,
  ];

  const started = Date.now();
  return await new Promise<CursorAdapterResult>((resolve) => {
    const child = spawn(bin, argv, {
      cwd: input.worktreePath,
      env: {
        ...process.env,
        [OPS1_CURSOR_REAL_FLAG]: "1",
      },
      stdio: ["ignore", "pipe", "pipe"],
    });
    let stdout = "";
    let stderr = "";
    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      child.kill("SIGTERM");
    }, input.timeoutMs);

    child.stdout.on("data", (chunk: Buffer) => {
      if (stdout.length < 200_000) stdout += chunk.toString("utf8");
    });
    child.stderr.on("data", (chunk: Buffer) => {
      if (stderr.length < 200_000) stderr += chunk.toString("utf8");
    });
    child.on("close", (code: number | null) => {
      clearTimeout(timer);
      resolve({
        ok: !timedOut && code === 0,
        adapterMode: "real",
        exitCode: code,
        timedOut,
        stdout,
        stderr,
        realProcessInvoked: true,
        errorCode: timedOut ? "TIMEOUT" : code === 0 ? undefined : "CURSOR_FAILED",
        durationMs: Date.now() - started,
        argvRedacted: [
          bin,
          "agent",
          "--print",
          "--workspace",
          "[worktree]",
          "--trust",
          "--sandbox",
          "enabled",
          "[instruction]",
        ],
      });
    });
  });
}

export async function runCursorAdapter(input: {
  contract: ExecutionContract;
  worktreePath: string;
  /** Explicit mode — never silently swap real→fixture. */
  adapterMode: CursorAdapterMode;
}): Promise<CursorAdapterResult> {
  if (input.adapterMode === "fixture") {
    const started = Date.now();
    try {
      applyFixtureEffect(input.contract, input.worktreePath);
      return {
        ok: true,
        adapterMode: "fixture",
        exitCode: 0,
        timedOut: false,
        stdout: "OPS1 I5 fixture adapter applied deterministic Markdown effect.",
        stderr: "",
        realProcessInvoked: false,
        durationMs: Date.now() - started,
      };
    } catch (error) {
      return {
        ok: false,
        adapterMode: "fixture",
        exitCode: 1,
        timedOut: false,
        stdout: "",
        stderr:
          error instanceof Ops1Error
            ? error.safeMessage
            : "Fixture adapter failed",
        realProcessInvoked: false,
        errorCode: "FIXTURE_FAILED",
        durationMs: Date.now() - started,
      };
    }
  }

  if (!isRealCursorRequested()) {
    return {
      ok: false,
      adapterMode: "real",
      exitCode: null,
      timedOut: false,
      stdout: "",
      stderr:
        "CURSOR EXECUTION BLOCKED — REAL ADAPTER UNAVAILABLE (OPS1_CURSOR_REAL≠1)",
      realProcessInvoked: false,
      errorCode: "CURSOR_FLAG_OFF",
      durationMs: 0,
    };
  }

  return spawnRealCursor({
    contract: input.contract,
    worktreePath: input.worktreePath,
    timeoutMs: input.contract.timeoutSeconds * 1000,
  });
}
