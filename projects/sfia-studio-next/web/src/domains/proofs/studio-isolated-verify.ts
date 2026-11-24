/**
 * C24 — Studio-owned verification without executing untrusted code in-process.
 *
 * Forbidden: eval / new Function / dynamic import of Cursor-produced modules
 * inside the Studio Node process (secrets, DB, provider credentials).
 *
 * Allowed:
 * - static content analysis against criterion-declared requirements;
 * - reading pre-existing Studio verification artifacts;
 * - optional isolated subprocess with scrubbed env (no Studio secrets),
 *   only when a Studio verification plan provides an allowlisted argv.
 */

import { createHash, randomBytes } from "node:crypto";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { readConfinedWorkspaceFile } from "./d8-path-confine";
import { getStudioVerifyRecord } from "./studio-verify-authority";

const execFileAsync = promisify(execFile);

export type StaticContentCheck = {
  ok: boolean;
  note: string;
  requiredTokens: string[];
  missingTokens: string[];
};

/**
 * No default success. Extract explicit requirements from the criterion text;
 * if none can be extracted, return insufficient (not ok).
 */
export function staticEvaluateContentAgainstCriterion(
  criterion: string,
  content: string,
): StaticContentCheck {
  if (!content.trim()) {
    return {
      ok: false,
      note: "contenu vide",
      requiredTokens: [],
      missingTokens: [],
    };
  }
  const requiredTokens: string[] = [];

  // Explicit path already handled by caller; extract symbols / phrases.
  const quoted = [...criterion.matchAll(/[`'"]([A-Za-z_][\w]*)[`'"]/g)].map(
    (m) => m[1]!,
  );
  requiredTokens.push(...quoted);

  // "export <name>" or "export function/const <name>"
  const exportMatch = criterion.match(
    /\bexport(?:\s+function|\s+const|\s+class)?\s+([A-Za-z_][\w]*)/i,
  );
  if (exportMatch) requiredTokens.push(exportMatch[1]!);

  // "function <name>"
  const fnMatch = criterion.match(/\bfunction\s+([A-Za-z_][\w]*)/i);
  if (fnMatch) requiredTokens.push(fnMatch[1]!);

  // Unique tokens only
  const uniq = [...new Set(requiredTokens.filter((t) => t.length >= 2))];
  if (uniq.length === 0) {
    return {
      ok: false,
      note: "INSUFFICIENT — aucun jeton discriminant extractible du critère (pas de succès par défaut)",
      requiredTokens: [],
      missingTokens: [],
    };
  }

  const missing: string[] = [];
  for (const t of uniq) {
    // Prefer export/function forms when criterion asked for export
    if (/export/i.test(criterion) && t === exportMatch?.[1]) {
      const hasExport =
        new RegExp(
          String.raw`export\s+(?:async\s+)?(?:function|const|class|let|var)\s+${escapeRegExp(t)}\b`,
        ).test(content) ||
        new RegExp(String.raw`exports\.${escapeRegExp(t)}\s*=`).test(content);
      if (!hasExport) missing.push(`export ${t}`);
      continue;
    }
    if (!content.includes(t)) missing.push(t);
  }

  if (missing.length > 0) {
    return {
      ok: false,
      note: `jetons absents: ${missing.join(", ")}`,
      requiredTokens: uniq,
      missingTokens: missing,
    };
  }
  return {
    ok: true,
    note: `contenu accessible; jetons requis présents: ${uniq.join(", ")}`,
    requiredTokens: uniq,
    missingTokens: [],
  };
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export type IsolatedVerifyPlanCommand = {
  /** Stable id linked to one acceptance criterion (or test id). */
  id: string;
  /** Allowlisted argv only — never from Cursor report text. */
  argv: string[];
  /** Optional timeout ms (default 30s, max 120s). */
  timeoutMs?: number;
};

export type IsolatedVerifyResult = {
  id: string;
  exitCode: number | null;
  ok: boolean;
  stdoutSha256: string | null;
  stderrSha256: string | null;
  limits: string[];
  artifactRel?: string;
};

function scrubEnv(): NodeJS.ProcessEnv {
  const keep = new Set([
    "PATH",
    "TMPDIR",
    "TMP",
    "TEMP",
    "HOME",
    "LANG",
    "LC_ALL",
    "TERM",
    "NODE_PATH",
  ]);
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(process.env)) {
    if (!keep.has(k)) continue;
    if (v == null) continue;
    out[k] = v;
  }
  // Force empty secrets surface even if somehow listed.
  out.OPENAI_API_KEY = "";
  out.CURSOR_API_KEY = "";
  out.DATABASE_URL = "";
  out.GITHUB_TOKEN = "";
  out.GH_TOKEN = "";
  out.NODE_ENV = process.env.NODE_ENV || "production";
  return out as NodeJS.ProcessEnv;
}

const ALLOWED_BINARIES = new Set([
  "node",
  "npm",
  "npx",
  "pnpm",
  "yarn",
  "vitest",
  "tsc",
  "python3",
  "python",
]);

function assertAllowlistedArgv(argv: string[]): string | null {
  if (!argv.length || argv.length > 12) return "ARGV_LENGTH";
  const bin = argv[0]!.split("/").pop() || "";
  if (!ALLOWED_BINARIES.has(bin)) return `BIN_NOT_ALLOWLISTED:${bin}`;
  // Refuse shell metacharacters / report-injected chains.
  const joined = argv.join(" ");
  if (/[;&|`$<>]/.test(joined)) return "ARGV_METACHAR_REFUSED";
  if (/realization-report|cursor-report/i.test(joined)) {
    return "ARGV_FROM_REPORT_REFUSED";
  }
  return null;
}

/**
 * Run Studio-authored verification commands in a subprocess with scrubbed env.
 * Does not execute code via eval/new Function in the Studio process.
 * Still requires callers to supply allowlisted argv — never parse Cursor reports.
 */
export async function runIsolatedVerificationCommands(input: {
  workspaceCwd: string;
  attemptId: string;
  contractFingerprint: string;
  commands: IsolatedVerifyPlanCommand[];
}): Promise<{
  results: IsolatedVerifyResult[];
  limits: string[];
}> {
  const limits: string[] = [];
  const results: IsolatedVerifyResult[] = [];
  if (!input.commands.length) {
    return {
      results: [],
      limits: ["ISOLATED_VERIFY_NO_COMMANDS"],
    };
  }

  const artDir = join(
    input.workspaceCwd,
    ".sfia",
    "studio-verifications",
    input.attemptId,
  );
  try {
    mkdirSync(artDir, { recursive: true });
  } catch (e) {
    limits.push(
      `ISOLATED_VERIFY_ARTDIR_FAILED:${String((e as Error)?.message ?? e).slice(0, 80)}`,
    );
    return { results: [], limits };
  }

  for (const cmd of input.commands.slice(0, 8)) {
    const bad = assertAllowlistedArgv(cmd.argv);
    if (bad) {
      limits.push(`ISOLATED_VERIFY_REFUSED:${cmd.id}:${bad}`);
      results.push({
        id: cmd.id,
        exitCode: null,
        ok: false,
        stdoutSha256: null,
        stderrSha256: null,
        limits: [`REFUSED:${bad}`],
      });
      continue;
    }
    const timeoutMs = Math.min(Math.max(cmd.timeoutMs ?? 30_000, 1_000), 120_000);
    const bin = cmd.argv[0]!;
    const args = cmd.argv.slice(1);
    try {
      const { stdout, stderr } = await execFileAsync(bin, args, {
        cwd: input.workspaceCwd,
        env: scrubEnv(),
        timeout: timeoutMs,
        maxBuffer: 512_000,
        // Do not inherit Studio stdio credentials.
      });
      const outBuf = Buffer.from(stdout ?? "", "utf8");
      const errBuf = Buffer.from(stderr ?? "", "utf8");
      const artifactRel = `.sfia/studio-verifications/${input.attemptId}/${cmd.id}.json`;
      const payload = {
        attemptId: input.attemptId,
        contractFingerprint: input.contractFingerprint,
        testId: cmd.id,
        argv: cmd.argv,
        exit: 0,
        ok: true,
        verifiedBy: "STUDIO_ISOLATED_SUBPROCESS",
        stdoutSha256: createHash("sha256").update(outBuf).digest("hex"),
        stderrSha256: createHash("sha256").update(errBuf).digest("hex"),
        at: new Date().toISOString(),
        nonce: randomBytes(8).toString("hex"),
      };
      writeFileSync(join(artDir, `${cmd.id}.json`), JSON.stringify(payload, null, 2));
      results.push({
        id: cmd.id,
        exitCode: 0,
        ok: true,
        stdoutSha256: payload.stdoutSha256,
        stderrSha256: payload.stderrSha256,
        limits: ["ISOLATED_VERIFY_PASS"],
        artifactRel,
      });
      limits.push(`ISOLATED_VERIFY_PASS:${cmd.id}`);
    } catch (e) {
      const err = e as {
        code?: number | string;
        stdout?: string;
        stderr?: string;
        message?: string;
        killed?: boolean;
      };
      const exitCode =
        typeof err.code === "number"
          ? err.code
          : err.killed
            ? 124
            : 1;
      const outBuf = Buffer.from(err.stdout ?? "", "utf8");
      const errBuf = Buffer.from(err.stderr ?? err.message ?? "", "utf8");
      const artifactRel = `.sfia/studio-verifications/${input.attemptId}/${cmd.id}.json`;
      const payload = {
        attemptId: input.attemptId,
        contractFingerprint: input.contractFingerprint,
        testId: cmd.id,
        argv: cmd.argv,
        exit: exitCode,
        ok: false,
        verifiedBy: "STUDIO_ISOLATED_SUBPROCESS",
        stdoutSha256: createHash("sha256").update(outBuf).digest("hex"),
        stderrSha256: createHash("sha256").update(errBuf).digest("hex"),
        at: new Date().toISOString(),
        error: String(err.message ?? "VERIFY_FAILED").slice(0, 200),
      };
      try {
        writeFileSync(join(artDir, `${cmd.id}.json`), JSON.stringify(payload, null, 2));
      } catch {
        /* ignore */
      }
      results.push({
        id: cmd.id,
        exitCode,
        ok: false,
        stdoutSha256: payload.stdoutSha256,
        stderrSha256: payload.stderrSha256,
        limits: ["ISOLATED_VERIFY_FAIL"],
        artifactRel,
      });
      limits.push(`ISOLATED_VERIFY_FAIL:${cmd.id}:exit=${exitCode}`);
    }
  }

  return { results, limits };
}

/**
 * Read verification status for a criterion.
 *
 * C24 reprise: workspace FS artifacts are NEVER certifying alone — an executor
 * can forge verifiedBy=STUDIO_ISOLATED_SUBPROCESS. Only Studio-side authority
 * records (HMAC) can certify. Workspace files may be observed as non-certifying.
 */
export function readStudioVerificationArtifact(input: {
  workspaceCwd: string;
  attemptId: string;
  testId: string;
  contractFingerprint: string;
}): {
  ok: boolean;
  exit: number | null;
  verifiedBy: string | null;
  limits: string[];
} {
  // Prefer Studio authority (outside executor-writable FS).
  const auth = getStudioVerifyRecord({
    attemptId: input.attemptId,
    contractFingerprint: input.contractFingerprint,
    verifyId: input.testId,
  });
  if (auth.record) {
    return {
      ok: auth.ok,
      exit: auth.record.exitCode,
      verifiedBy: "STUDIO_AUTHORITY_HMAC",
      limits: auth.limits,
    };
  }

  const rel = `.sfia/studio-verifications/${input.attemptId}/${input.testId}.json`;
  const r = readConfinedWorkspaceFile(input.workspaceCwd, rel, {
    maxBytes: 64_000,
  });
  if (!r.ok) {
    return {
      ok: false,
      exit: null,
      verifiedBy: null,
      limits: [`STUDIO_ARTIFACT_ABSENT:${input.testId}`],
    };
  }
  try {
    const j = JSON.parse(r.bytes.toString("utf8")) as {
      attemptId?: string;
      contractFingerprint?: string;
      testId?: string;
      exit?: number;
      ok?: boolean;
      verifiedBy?: string;
    };
    // Any workspace-resident artifact — including forged STUDIO_ISOLATED_SUBPROCESS —
    // is observational only. Never certifying.
    return {
      ok: false,
      exit: typeof j.exit === "number" ? j.exit : null,
      verifiedBy: j.verifiedBy ?? null,
      limits: [
        j.verifiedBy === "STUDIO_BOUNDED"
          ? "STUDIO_BOUNDED_LEGACY_NOT_CERTIFYING_C24"
          : "WORKSPACE_VERIFY_ARTIFACT_NOT_CERTIFYING_C24 — executor-writable FS cannot establish Studio provenance",
      ],
    };
  } catch {
    return {
      ok: false,
      exit: null,
      verifiedBy: null,
      limits: ["STUDIO_ARTIFACT_PARSE_FAILED"],
    };
  }
}

/**
 * Derive a Studio verification plan.
 * C24 reprise: package.json alone is NOT authorization to execute.
 * Returns empty unless caller supplies an explicit Studio plan elsewhere.
 */
export function deriveStudioVerifyPlanFromWorkspace(input: {
  workspaceCwd: string;
  acceptanceCriteria: string[];
}): IsolatedVerifyPlanCommand[] {
  void input;
  // package.json presence never authorizes execution of Cursor-produced scripts.
  return [];
}

/**
 * Map a criterion to a verification command id when possible (exact linkage).
 * Refuse loose npm-test attachment to unrelated criteria.
 */
export function matchCriterionToVerifyId(
  criterion: string,
  availableIds: string[],
): string | null {
  const c = criterion.toLowerCase();
  // Exact id token match only — do not attach "npm-test" to every "test …" criterion.
  for (const id of availableIds) {
    const idL = id.toLowerCase();
    if (idL === "npm-test") {
      if (/\bnpm\s*test\b|\bnpm-test\b/.test(c)) return id;
      continue;
    }
    if (c.includes(idL)) return id;
  }
  // No loose fallback — a generic "test" criterion does not imply npm-test.
  return null;
}
