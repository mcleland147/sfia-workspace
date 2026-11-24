# SFIA Studio Next — Review Pack FULL — ML5 C24

- Date/heure UTC: 2026-11-24T13:38:22Z
- Produit: SFIA Studio Next
- Jalon: R5 / Macro-lot ML5 / Lot 3 / Cycle C24
- Typologie: INC Critical
- Type cycle: Cycle 8 — Delivery / implémentation
- Classe version: NO RELEASE — convergence DEV sans promotion

## 1. Git Truth

| Champ | Valeur |
| --- | --- |
| Dépôt | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` |
| origin/main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Merge-base | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| État | DIRTY C1–C24 — aucun commit/push projet |
| Baseline C24 start | `/tmp/sfia-c24-baseline/` + pack reset `2026-11-24` |
| Build observé (.next/BUILD_ID) | `0IfMNnVNQMjcrQ0Z7wppl` (C23 build id encore présent — pas de rebuild Next C24) |

### git status --short (extrait)

```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md
 M projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
 M projects/sfia-studio-next/web/next.config.ts
 M projects/sfia-studio-next/web/scripts/db-migrate.sh
 M projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts
 M projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/turns/by-key/[clientTurnKey]/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/authorize/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/handoff/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/[contractId]/ready/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/route.ts
 M projects/sfia-studio-next/web/src/app/login/page.tsx
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/components/figma/ContractViewer.tsx
 M projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
 M projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
 M projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
 M projects/sfia-studio-next/web/src/components/figma/RealizationBilan.tsx
 M projects/sfia-studio-next/web/src/components/figma/tokens.css
 M projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
 M projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
 M projects/sfia-studio-next/web/src/db/schema.ts
 M projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
 M projects/sfia-studio-next/web/src/domains/conversation/d4-read-tools.ts
 M projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
 M projects/sfia-studio-next/web/src/domains/conversation/investigation-persistence.ts
 M projects/sfia-studio-next/web/src/domains/conversation/investigation-state.ts
 M projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
 M projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/conversation/turn-projection.ts
 M projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
 M projects/sfia-studio-next/web/src/domains/conversation/web-search-sanitize.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-claim.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-handoff.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts
 M projects/sfia-studio-next/web/src/domains/execution/handoff-integrity.ts
 M projects/sfia-studio-next/web/src/domains/execution/technical-contract.ts
 M projects/sfia-studio-next/web/src/domains/execution/types.ts
 M projects/sfia-studio-next/web/src/domains/identity/session.ts
 M projects/sfia-studio-next/web/src/domains/proofs/cursor-qualify.ts
 M projects/sfia-studio-next/web/src/lib/auth.ts
 M projects/sfia-studio-next/web/tests/e2e/ensemble05-live-bounded.spec.ts
 M projects/sfia-studio-next/web/tests/integration/ml5-cursor-dispatch.pg.test.ts
 M projects/sfia-studio-next/web/tests/unit/cognitive-policy.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml5-cursor-qualify.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml5-investigation-state.test.ts
?? projects/sfia-studio-next/architecture-technique/conducteur-cognitif-et-production-nora.md
?? projects/sfia-studio-next/construction/contrat-acceptation-cognition-et-realisation-gouvernee.md
?? projects/sfia-studio-next/construction/ml5-candidat-git-inventaire-c13.md
?? projects/sfia-studio-next/web/.sfia-evidence/
?? projects/sfia-studio-next/web/scripts/c17-functional-campaign.mjs
?? projects/sfia-studio-next/web/scripts/c18-functional-campaign.mjs
?? projects/sfia-studio-next/web/scripts/c21-campaign.mjs
?? projects/sfia-studio-next/web/scripts/c22-query-live.mts
?? projects/sfia-studio-next/web/scripts/c24-mission-smoke.mts
?? projects/sfia-studio-next/web/scripts/ml5-c10-e2e-journey.mts
?? projects/sfia-studio-next/web/scripts/ml5-c10-seed-scenario.mts
?? projects/sfia-studio-next/web/scripts/ml5-c11-live-journey.mts
?? projects/sfia-studio-next/web/scripts/ml5-c11-seed-project.mts
?? projects/sfia-studio-next/web/scripts/ml5-c12-ack-drop-incident.mts
?? projects/sfia-studio-next/web/scripts/ml5-c12-seed-and-live.mts
?? projects/sfia-studio-next/web/scripts/ml5-c13-long-run-supervisor.mts
?? projects/sfia-studio-next/web/scripts/ml5-c13-probe-mode.mts
?? projects/sfia-studio-next/web/scripts/ml5-c13-stop-live.mts
?? projects/sfia-studio-next/web/scripts/ml5-c14-cognitive-live.mts
?? projects/sfia-studio-next/web/scripts/ml5-c14-s2-s5-live.mts
?? projects/sfia-studio-next/web/scripts/ml5-c14-web-frontier-debug.mts
?? projects/sfia-studio-next/web/scripts/ml5-c14-web-live-probe.mts
?? projects/sfia-studio-next/web/scripts/ml5-c14-web-raw-debug.mts
?? projects/sfia-studio-next/web/scripts/ml5-c9-e2e-journey.mts
?? projects/sfia-studio-next/web/scripts/ml5-c9-seed-scenario.mts
?? projects/sfia-studio-next/web/src/app/api/dev/auto-session/
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/captures/
?? projects/sfia-studio-next/web/src/components/figma/D6ConfirmLaunch.tsx
?? projects/sfia-studio-next/web/src/db/migrations/019_ml5_qualification_history.sql
?? projects/sfia-studio-next/web/src/db/migrations/020_cognitive_work.sql
```

## 2. Décisions Morris / GO

- GO C24: construction, correction et qualification opérationnelle LIVE/REAL DEV.
- Autonomie correction locale sans nouveau GO par anomalie.
- Interdit: push produit, PR, merge, RECETTE/STABLE/RELEASE/ADOPTED.
- Exception: Review Handoff L3 mono-fichier `sfia/review-handoff`.

## 3. Sources exactes

- Processus SFIA v2.6 depuis main@997897fd (cycle routing §4.3.0b Next).
- Baseline Next SEF/roadmap/ENV-01/product-versioning on main.
- Branches candidates ML5 (lecture seule, non mergées).
- Handoff C23 tip `e81122fc` / blob `aa947d0c` — observations confrontées, non exits acquis.
- ChatGPT post-C23: NOT READY FOR LOT 3 EXIT — D8 integrity + execution safety OPEN.

## 4. Configuration DEV réellement utilisée (ENV-01)

| Item | Valeur |
| --- | --- |
| Lane | DEV (`STUDIO_LANE=DEV`) |
| App | 127.0.0.1:3100 (non démarré pendant C24 pack — missions BROWSER non rejouées) |
| PostgreSQL | 127.0.0.1:5433 / `sfia_next_dev` |
| Nora model | `gpt-6.2-sol` (LIVE observé) |
| Profile | OPERATIONAL_PROVISIONAL |
| WEB | `SFIA_WEB_SEARCH_ENABLED=1` `SFIA_WEB_SEARCH_LIVE=1` |
| Cursor effect | LIVE configuré ; preuves C24 fencing/D8 en SCRIPTED pour reproductibilité |
| Identités | seeds test `seedPilotProjectWithCognitiveFiliation` |
| Secrets | non exposés dans ce pack |

## 5. Inventaire KEEP / FIX / COMPLETE / PROVE

| Item | Action | Preuve |
| --- | --- | --- |
| `new Function` / studioEvalAdd | FIX — supprimé | grep src: 0 hits ; unit C24 |
| STUDIO_BOUNDED certifiant | FIX — non certifiant C24 | unit legacy |
| Critère ↔ preuve | FIX — linkage + no default pass | unit + conforming PG widget |
| Fencing lease write | FIX — WHERE lease > now() | PG ml5-c24-fencing-lease |
| WEB registry feeding | COMPLETE — catalog DEV + persist investigation | unit + smoke |
| Nora usage metrics | COMPLETE — Agents SDK state.usage | LIVE probe usage |
| Bilan POST à l'ouverture | FIX — lecture seule / requalify explicite | CursorRealizationSurface |
| Missions 1–4 E2E BROWSER | PROVE PARTIAL | smoke + LIVE Nora usage ; pas parcours Pilote complet |
| Figma F2 14 frames | PROVE NON REJOUÉ | réserve |
| Cursor SDK LIVE director E2E | PROVE NON REJOUÉ C24 | réserve (C22/C23 historique) |

## 6. Fichiers créés C24 (contenu complet)

### `projects/sfia-studio-next/web/src/domains/proofs/studio-isolated-verify.ts`

```typescript
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
import { mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { readConfinedWorkspaceFile } from "./d8-path-confine";

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
 * Read an existing Studio verification artifact (never trust agent exit files).
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
    if (j.attemptId !== input.attemptId) {
      return {
        ok: false,
        exit: null,
        verifiedBy: null,
        limits: ["STUDIO_ARTIFACT_ATTEMPT_MISMATCH"],
      };
    }
    if (j.contractFingerprint !== input.contractFingerprint) {
      return {
        ok: false,
        exit: null,
        verifiedBy: null,
        limits: ["STUDIO_ARTIFACT_FINGERPRINT_MISMATCH"],
      };
    }
    if (j.testId !== input.testId) {
      return {
        ok: false,
        exit: null,
        verifiedBy: null,
        limits: ["STUDIO_ARTIFACT_TESTID_MISMATCH"],
      };
    }
    // C24: only STUDIO_ISOLATED_SUBPROCESS certifies. Legacy STUDIO_BOUNDED
    // (C23 new Function path) is non-certifying even if present on disk.
    if (j.verifiedBy === "STUDIO_BOUNDED") {
      return {
        ok: false,
        exit: typeof j.exit === "number" ? j.exit : null,
        verifiedBy: j.verifiedBy,
        limits: ["STUDIO_BOUNDED_LEGACY_NOT_CERTIFYING_C24"],
      };
    }
    if (j.verifiedBy !== "STUDIO_ISOLATED_SUBPROCESS") {
      return {
        ok: false,
        exit: null,
        verifiedBy: j.verifiedBy ?? null,
        limits: ["STUDIO_ARTIFACT_UNTRUSTED_PROVENANCE"],
      };
    }
    const exit = typeof j.exit === "number" ? j.exit : null;
    return {
      ok: Boolean(j.ok) && exit === 0,
      exit,
      verifiedBy: j.verifiedBy ?? null,
      limits: ["STUDIO_ARTIFACT_READ"],
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
 * Derive a minimal Studio verification plan from package.json scripts when present.
 * Never parses Cursor realization reports.
 */
export function deriveStudioVerifyPlanFromWorkspace(input: {
  workspaceCwd: string;
  acceptanceCriteria: string[];
}): IsolatedVerifyPlanCommand[] {
  const cmds: IsolatedVerifyPlanCommand[] = [];
  const pkgPath = join(input.workspaceCwd, "package.json");
  if (!existsSync(pkgPath)) return cmds;
  try {
    const pkg = JSON.parse(readFileSync(pkgPath, "utf8")) as {
      scripts?: Record<string, string>;
    };
    const hasTest = Boolean(pkg.scripts?.test);
    const wantsTest = input.acceptanceCriteria.some((c) =>
      /test|unitaire|spec|vitest|jest/i.test(c),
    );
    if (hasTest && wantsTest) {
      // npm test — allowlisted binary; runs in scrubbed subprocess.
      cmds.push({
        id: "npm-test",
        argv: ["npm", "test", "--silent"],
        timeoutMs: 60_000,
      });
    }
  } catch {
    /* ignore malformed package.json */
  }
  return cmds;
}

/**
 * Map a criterion to a verification command id when possible (exact linkage).
 */
export function matchCriterionToVerifyId(
  criterion: string,
  availableIds: string[],
): string | null {
  for (const id of availableIds) {
    if (criterion.toLowerCase().includes(id.toLowerCase())) return id;
  }
  if (/test|unitaire|spec/i.test(criterion) && availableIds.includes("npm-test")) {
    return "npm-test";
  }
  return null;
}

```

### `projects/sfia-studio-next/web/src/domains/proofs/d8-cognitive-criterion-eval.ts`

```typescript
/**
 * C24 — cognitive contribution to D8 criterion evaluation (D3 under D8 ownership).
 *
 * Cognitive assessment alone NEVER certifies that a command ran or a test passed.
 * It may:
 * - mark semantic relevance of consulted pieces vs a criterion;
 * - identify contradictions / insufficiencies;
 * - downgrade a static "verified" when the content clearly fails the criterion intent.
 *
 * Structured output is consumed by D8; final Pilot avis remains separate.
 */

export type CriterionCognitiveAssessment = {
  criterion: string;
  /** Cognitive judgment — not a D8 technical certification. */
  judgment:
    | "SUPPORTS"
    | "INSUFFICIENT"
    | "CONTRADICTS"
    | "INDETERMINATE"
    | "UNAVAILABLE";
  rationale: string;
  /** Pieces actually referenced (paths / artifact ids) — never invented facts. */
  piecesConsulted: string[];
  provenance: "D3_STRUCTURED" | "DETERMINISTIC_HEURISTIC" | "UNAVAILABLE";
};

export type CognitiveCriterionEvalResult = {
  assessments: CriterionCognitiveAssessment[];
  limits: string[];
};

/**
 * Deterministic heuristic (no provider): compare criterion tokens to notes/refs.
 * Used when LIVE cognitive is off or unavailable — never invents SUPPORTS for tests.
 */
export function heuristicCognitiveCriterionAssessments(input: {
  criteria: string[];
  criterionEvidence: Record<
    string,
    { refs: string[]; verified: boolean; note?: string; level?: string }
  >;
}): CognitiveCriterionEvalResult {
  const limits = ["D8_COGNITIVE_HEURISTIC_C24 — not a LIVE Nora judgment"];
  const assessments: CriterionCognitiveAssessment[] = input.criteria.map(
    (criterion) => {
      const ev = input.criterionEvidence[criterion];
      const pieces = ev?.refs ?? [];
      const isTestish = /\b(test|npm|vitest|jest|exit\s*=\s*0)\b/i.test(criterion);
      if (!ev) {
        return {
          criterion,
          judgment: "INSUFFICIENT" as const,
          rationale: "Aucune pièce technique rattachée au critère",
          piecesConsulted: [],
          provenance: "DETERMINISTIC_HEURISTIC" as const,
        };
      }
      if (isTestish && !ev.verified) {
        return {
          criterion,
          judgment: "INSUFFICIENT" as const,
          rationale:
            "Critère de test sans preuve Studio isolée — appréciation cognitive ne certifie pas l'exécution",
          piecesConsulted: pieces,
          provenance: "DETERMINISTIC_HEURISTIC" as const,
        };
      }
      if (ev.verified && pieces.length > 0) {
        return {
          criterion,
          judgment: "SUPPORTS" as const,
          rationale: ev.note ?? "Preuve technique Studio liée au critère",
          piecesConsulted: pieces,
          provenance: "DETERMINISTIC_HEURISTIC" as const,
        };
      }
      if (pieces.length > 0 && !ev.verified) {
        return {
          criterion,
          judgment: "INSUFFICIENT" as const,
          rationale: "Pièces accessibles sans satisfaction vérifiée",
          piecesConsulted: pieces,
          provenance: "DETERMINISTIC_HEURISTIC" as const,
        };
      }
      return {
        criterion,
        judgment: "INDETERMINATE" as const,
        rationale: "Évaluation indéterminée sans preuve opposable",
        piecesConsulted: pieces,
        provenance: "DETERMINISTIC_HEURISTIC" as const,
      };
    },
  );
  return { assessments, limits };
}

/**
 * Apply cognitive assessments onto criterionEvidence before D8 qualify.
 * - CONTRADICTS / INSUFFICIENT on a previously verified criterion → unverified
 * - SUPPORTS alone never upgrades an unverified technical criterion to verified
 */
type EvidenceEntry = {
  refs: string[];
  verified: boolean;
  note?: string;
  level?: string;
};

export function applyCognitiveAssessmentsToEvidence(input: {
  criterionEvidence: Record<string, EvidenceEntry>;
  assessments: CriterionCognitiveAssessment[];
}): {
  criterionEvidence: Record<string, EvidenceEntry>;
  limits: string[];
} {
  const next = { ...input.criterionEvidence };
  const limits: string[] = [];
  for (const a of input.assessments) {
    const cur = next[a.criterion] ?? {
      refs: a.piecesConsulted,
      verified: false,
    };
    if (
      cur.verified &&
      (a.judgment === "CONTRADICTS" || a.judgment === "INSUFFICIENT")
    ) {
      next[a.criterion] = {
        ...cur,
        verified: false,
        note: `COGNITIVE_${a.judgment}: ${a.rationale}`.slice(0, 240),
        level: "INSUFFICIENT",
      };
      limits.push(`COGNITIVE_DOWNGRADE:${a.criterion.slice(0, 60)}`);
    } else if (!cur.verified && a.judgment === "SUPPORTS") {
      // Do not upgrade — technical proof required for verified.
      limits.push(`COGNITIVE_SUPPORTS_NON_CERTIFYING:${a.criterion.slice(0, 60)}`);
      next[a.criterion] = {
        ...cur,
        refs: [...new Set([...cur.refs, ...a.piecesConsulted])],
        note: `COGNITIVE_SUPPORTS_NON_CERTIFYING: ${a.rationale}`.slice(0, 240),
      };
    } else {
      next[a.criterion] = {
        ...cur,
        refs: [...new Set([...cur.refs, ...a.piecesConsulted])],
        note: cur.note ?? `COGNITIVE_${a.judgment}: ${a.rationale}`.slice(0, 240),
      };
    }
  }
  return { criterionEvidence: next, limits };
}

```

### `projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts`

```typescript
/**
 * C24 — product mechanism to feed the public WEB registry.
 *
 * Nora cannot self-authorize. The server registers public topics from:
 * 1. Existing investigation state (prior turns).
 * 2. Preparation / project explicit exact-query authorizations (when present).
 * 3. A DEV catalog of known-public topic templates (env), matched against
 *    the Pilote message / objective — never private markers.
 *
 * Tests must not inject registry entries solely to force a PASS; they may
 * exercise the catalog/matching path with representative public topics.
 */

export type PublicWebRegistry = {
  topics: Record<string, string>;
  exactQueries: string[];
  facts: string[];
  limits: string[];
};

export type PublicTopicCatalogEntry = {
  ref: string;
  /** Exact public query string (no private context). */
  query: string;
  /** Tokens that must appear in user text / objective to auto-register. */
  matchTokens: string[];
};

const DEFAULT_DEV_CATALOG: PublicTopicCatalogEntry[] = [
  {
    ref: "node-lts",
    query: "Node.js current LTS version site:nodejs.org",
    matchTokens: ["node.js", "nodejs", "node lts", "lts node"],
  },
  {
    ref: "openai-models",
    query: "OpenAI API models documentation site:platform.openai.com",
    matchTokens: ["openai model", "gpt model", "openai api model"],
  },
  {
    ref: "postgres-docs",
    query: "PostgreSQL official documentation site:www.postgresql.org",
    matchTokens: ["postgresql", "postgres docs", "postgres documentation"],
  },
  {
    ref: "rfc8259-json",
    query: "RFC 8259 JSON site:datatracker.ietf.org",
    matchTokens: ["rfc 8259", "json rfc", "rfc8259"],
  },
];

function normalize(s: string): string {
  return s.replace(/\s+/g, " ").trim().toLowerCase();
}

/**
 * Parse SFIA_DEV_PUBLIC_WEB_TOPIC_CATALOG JSON when set; else DEFAULT_DEV_CATALOG in DEV.
 * Production lanes get empty catalog unless explicitly configured.
 */
export function loadPublicTopicCatalog(
  env: Record<string, string | undefined> = process.env,
): PublicTopicCatalogEntry[] {
  const raw = (env.SFIA_DEV_PUBLIC_WEB_TOPIC_CATALOG || "").trim();
  if (raw) {
    try {
      const parsed = JSON.parse(raw) as PublicTopicCatalogEntry[];
      if (!Array.isArray(parsed)) return [];
      return parsed.filter(
        (e) =>
          e &&
          typeof e.ref === "string" &&
          typeof e.query === "string" &&
          Array.isArray(e.matchTokens),
      );
    } catch {
      return [];
    }
  }
  const lane = (env.STUDIO_LANE || "DEV").trim().toUpperCase();
  if (lane !== "DEV") return [];
  if ((env.SFIA_PUBLIC_WEB_CATALOG_DEFAULT || "1").trim() === "0") return [];
  return DEFAULT_DEV_CATALOG;
}

/**
 * Merge prior registry with catalog matches against haystack (user + objective).
 * Does not accept free-form Nora proposals as public provenance.
 */
export function resolvePublicWebRegistry(input: {
  priorTopics?: Record<string, string> | null;
  priorExactQueries?: string[] | null;
  priorFacts?: string[] | null;
  /** Explicit exact queries authorized by Pilote/server for this preparation. */
  explicitExactQueries?: string[] | null;
  haystack: string;
  privateMarkers?: string[];
  env?: Record<string, string | undefined>;
}): PublicWebRegistry {
  const limits: string[] = [];
  const markers = (input.privateMarkers ?? []).filter((m) => m.trim().length >= 4);
  const hay = normalize(input.haystack);
  const topics: Record<string, string> = {
    ...(input.priorTopics ?? {}),
  };
  const exact = new Set(
    [...(input.priorExactQueries ?? []), ...(input.explicitExactQueries ?? [])]
      .map((q) => q.replace(/\s+/g, " ").trim())
      .filter(Boolean),
  );
  const facts = [...new Set((input.priorFacts ?? []).map((f) => f.trim()).filter(Boolean))];

  const catalog = loadPublicTopicCatalog(input.env ?? process.env);
  if (catalog.length === 0) {
    limits.push("PUBLIC_WEB_CATALOG_EMPTY");
  }

  for (const entry of catalog) {
    const hit = entry.matchTokens.some((t) => hay.includes(normalize(t)));
    if (!hit) continue;
    const q = entry.query.replace(/\s+/g, " ").trim();
    if (!q) continue;
    if (markers.some((m) => q.toLowerCase().includes(m.toLowerCase()))) {
      limits.push(`CATALOG_SKIP_PRIVATE_MARKER:${entry.ref}`);
      continue;
    }
    if (!topics[entry.ref]) {
      topics[entry.ref] = q;
      limits.push(`CATALOG_REGISTERED:${entry.ref}`);
    }
  }

  if (Object.keys(topics).length === 0 && exact.size === 0 && facts.length === 0) {
    limits.push("PUBLIC_WEB_REGISTRY_EMPTY");
  }

  return {
    topics,
    exactQueries: [...exact],
    facts,
    limits,
  };
}

```

### `projects/sfia-studio-next/web/src/domains/conversation/provider-usage.ts`

```typescript
/**
 * C24 — extract provider usage from OpenAI Agents SDK RunResult without inventing metrics.
 * UNVERIFIED / null when the SDK shape does not expose a field.
 */

export type ProviderUsageSnapshot = {
  inputTokens: number | null;
  outputTokens: number | null;
  totalTokens: number | null;
  reasoningTokens: number | null;
  cachedInputTokens: number | null;
  providerRequests: number | null;
  /** Provenance label — never claim values absent from the SDK. */
  provenance: "AGENTS_SDK_RUN_STATE" | "UNAVAILABLE";
  limits: string[];
};

function sumDetailField(
  details: unknown,
  keys: string[],
): number | null {
  if (!details) return null;
  const list = Array.isArray(details) ? details : [details];
  let sum = 0;
  let found = false;
  for (const d of list) {
    if (!d || typeof d !== "object") continue;
    const rec = d as Record<string, unknown>;
    for (const k of keys) {
      const v = rec[k];
      if (typeof v === "number" && Number.isFinite(v)) {
        sum += v;
        found = true;
      }
    }
  }
  return found ? sum : null;
}

/**
 * Prefer `result.state.usage` (Agents SDK). Never invent zeros as observed metrics —
 * absent usage ⇒ null + UNAVAILABLE.
 */
export function extractProviderUsageFromRunResult(
  result: unknown,
): ProviderUsageSnapshot {
  const limits: string[] = [];
  try {
    const r = result as {
      state?: { usage?: Record<string, unknown> };
      usage?: Record<string, unknown>;
    };
    const usage = r?.state?.usage ?? r?.usage ?? null;
    if (!usage || typeof usage !== "object") {
      return {
        inputTokens: null,
        outputTokens: null,
        totalTokens: null,
        reasoningTokens: null,
        cachedInputTokens: null,
        providerRequests: null,
        provenance: "UNAVAILABLE",
        limits: ["PROVIDER_USAGE_ABSENT"],
      };
    }

    const num = (v: unknown): number | null =>
      typeof v === "number" && Number.isFinite(v) ? v : null;

    const inputTokens = num(usage.inputTokens ?? usage.input_tokens);
    const outputTokens = num(usage.outputTokens ?? usage.output_tokens);
    const totalTokens = num(usage.totalTokens ?? usage.total_tokens);
    const providerRequests = num(usage.requests);

    const cachedInputTokens = sumDetailField(
      usage.inputTokensDetails ?? usage.input_tokens_details,
      ["cached_tokens", "cachedTokens", "input_cached_tokens"],
    );
    const reasoningTokens = sumDetailField(
      usage.outputTokensDetails ?? usage.output_tokens_details,
      ["reasoning_tokens", "reasoningTokens"],
    );

    if (inputTokens == null && outputTokens == null) {
      limits.push("PROVIDER_USAGE_EMPTY_AGGREGATES");
    }
    if (cachedInputTokens == null) limits.push("CACHED_INPUT_TOKENS_UNVERIFIED");
    if (reasoningTokens == null) limits.push("REASONING_TOKENS_UNVERIFIED");

    return {
      inputTokens,
      outputTokens,
      totalTokens:
        totalTokens ??
        (inputTokens != null && outputTokens != null
          ? inputTokens + outputTokens
          : null),
      reasoningTokens,
      cachedInputTokens,
      providerRequests,
      provenance: "AGENTS_SDK_RUN_STATE",
      limits,
    };
  } catch {
    return {
      inputTokens: null,
      outputTokens: null,
      totalTokens: null,
      reasoningTokens: null,
      cachedInputTokens: null,
      providerRequests: null,
      provenance: "UNAVAILABLE",
      limits: ["PROVIDER_USAGE_EXTRACT_ERROR"],
    };
  }
}

```

### `projects/sfia-studio-next/web/tests/unit/ml5-c24-d8-safety.test.ts`

```typescript
/**
 * C24 P0 — no in-process eval; no default content pass; linked Studio verify only.
 */
import { describe, expect, it } from "vitest";
import { mkdirSync, writeFileSync, mkdtempSync, rmSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";
import { buildVerifiedEvidenceFromWorkspace } from "@/domains/execution/cursor-autonomous-restitution";
import { qualifyCursorRealization } from "@/domains/proofs/cursor-qualify";
import {
  staticEvaluateContentAgainstCriterion,
} from "@/domains/proofs/studio-isolated-verify";

describe("C24 D8 safety + generic qualification", () => {
  it("static content: no default pass without extractable tokens", () => {
    const r = staticEvaluateContentAgainstCriterion(
      "le fichier doit être correct",
      "export function add(a,b){return a+b}",
    );
    expect(r.ok).toBe(false);
    expect(r.note).toMatch(/INSUFFICIENT/);
  });

  it("static content: explicit export token required", () => {
    const ok = staticEvaluateContentAgainstCriterion(
      "src/add.ts export add",
      "export function add(a: number, b: number) { return a + b; }\n",
    );
    expect(ok.ok).toBe(true);
    const bad = staticEvaluateContentAgainstCriterion(
      "src/add.ts export add",
      "export function sub(a,b){return a-b}\n",
    );
    expect(bad.ok).toBe(false);
  });

  it("agent exit=0 alone never CONFORMING; no new Function path", async () => {
    const root = mkdtempSync(join(tmpdir(), "sfia-c24-d8-"));
    mkdirSync(join(root, "src"), { recursive: true });
    mkdirSync(join(root, ".sfia", "test-captures"), { recursive: true });
    writeFileSync(
      join(root, "src/add.ts"),
      "export function add(a: number, b: number) { return a + b; }\n",
    );
    writeFileSync(join(root, ".sfia/test-captures/add.exit"), "0\n");
    const report = [
      "attemptId: efx_c24",
      "contractFingerprint: fp_c24",
      "filesCreated: src/add.ts",
      "testsDeclared: add",
    ].join("\n");
    const ev = await buildVerifiedEvidenceFromWorkspace({
      workspaceCwd: root,
      reportMarkdown: report,
      acceptanceCriteria: ["src/add.ts export add", "test add exit=0"],
      attemptId: "efx_c24",
      contractFingerprint: "fp_c24",
    });
    expect(ev.limits.some((l) => /AGENT_EXIT_CAPTURE_NOT_CERTIFYING/.test(l))).toBe(
      true,
    );
    expect(ev.criterionEvidence["src/add.ts export add"]?.verified).toBe(true);
    expect(ev.criterionEvidence["test add exit=0"]?.verified).toBe(false);
    expect(ev.criterionEvidence["test add exit=0"]?.level).toBe("INSUFFICIENT");
    // Legacy STUDIO_BOUNDED artifact must not certify
    mkdirSync(join(root, ".sfia", "studio-verifications", "efx_c24"), {
      recursive: true,
    });
    writeFileSync(
      join(root, ".sfia/studio-verifications/efx_c24/add.json"),
      JSON.stringify({
        attemptId: "efx_c24",
        contractFingerprint: "fp_c24",
        testId: "add",
        exit: 0,
        ok: true,
        verifiedBy: "STUDIO_BOUNDED",
      }),
    );
    const ev2 = await buildVerifiedEvidenceFromWorkspace({
      workspaceCwd: root,
      reportMarkdown: report,
      acceptanceCriteria: ["test add exit=0"],
      attemptId: "efx_c24",
      contractFingerprint: "fp_c24",
    });
    expect(ev2.criterionEvidence["test add exit=0"]?.verified).toBe(false);
    expect(
      ev2.limits.some((l) =>
        /LEGACY_NOT_CERTIFYING_C24|TEST_CRITERION_INSUFFICIENT|UNTRUSTED/.test(l),
      ),
    ).toBe(true);
    const q = qualifyCursorRealization({
      contractFingerprint: "fp_c24",
      acceptanceCriteria: ["src/add.ts export add", "test add exit=0"],
      handoffStatus: "RECEIVED",
      reportMarkdown: report,
      manifest: ev.manifest,
      criterionEvidence: ev.criterionEvidence,
      terminalStatus: "finished",
    });
    expect(q.verdict).not.toBe("CONFORMING");
    rmSync(root, { recursive: true, force: true });
  });

  it("source tree must not contain new Function D8 eval", async () => {
    const { readFileSync } = await import("fs");
    const { resolve } = await import("path");
    const src = readFileSync(
      resolve(
        process.cwd(),
        "src/domains/execution/cursor-autonomous-restitution.ts",
      ),
      "utf8",
    );
    expect(src).not.toMatch(/new Function\s*\(/);
    expect(src).not.toMatch(/studioEvalAddFunction/);
  });
});

```

### `projects/sfia-studio-next/web/tests/unit/ml5-c24-web-registry-usage.test.ts`

```typescript
import { describe, expect, it } from "vitest";
import {
  resolvePublicWebRegistry,
  loadPublicTopicCatalog,
} from "@/domains/conversation/public-web-registry";
import { extractProviderUsageFromRunResult } from "@/domains/conversation/provider-usage";
import {
  heuristicCognitiveCriterionAssessments,
  applyCognitiveAssessmentsToEvidence,
} from "@/domains/proofs/d8-cognitive-criterion-eval";

describe("C24 public WEB registry feeding", () => {
  it("registers catalog topic when haystack matches — not free-form Nora text", () => {
    const r = resolvePublicWebRegistry({
      haystack: "Quelle est la version Node.js LTS actuelle ?",
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1" },
    });
    expect(r.topics["node-lts"]).toMatch(/Node\.js/);
    expect(r.limits.some((l) => /CATALOG_REGISTERED:node-lts/.test(l))).toBe(
      true,
    );
  });

  it("leaves registry empty when no catalog match", () => {
    const r = resolvePublicWebRegistry({
      haystack: "corrige le bug de validation CSV interne",
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1" },
    });
    expect(Object.keys(r.topics)).toHaveLength(0);
    expect(r.limits).toContain("PUBLIC_WEB_REGISTRY_EMPTY");
  });

  it("DEV catalog loads by default", () => {
    const c = loadPublicTopicCatalog({
      STUDIO_LANE: "DEV",
      SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1",
    });
    expect(c.length).toBeGreaterThan(0);
  });
});

describe("C24 provider usage extraction", () => {
  it("returns UNAVAILABLE without inventing zeros when absent", () => {
    const u = extractProviderUsageFromRunResult({});
    expect(u.provenance).toBe("UNAVAILABLE");
    expect(u.inputTokens).toBeNull();
  });

  it("reads Agents SDK state.usage aggregates and details", () => {
    const u = extractProviderUsageFromRunResult({
      state: {
        usage: {
          requests: 2,
          inputTokens: 100,
          outputTokens: 50,
          totalTokens: 150,
          inputTokensDetails: [{ cached_tokens: 20 }],
          outputTokensDetails: [{ reasoning_tokens: 30 }],
        },
      },
    });
    expect(u.provenance).toBe("AGENTS_SDK_RUN_STATE");
    expect(u.inputTokens).toBe(100);
    expect(u.outputTokens).toBe(50);
    expect(u.cachedInputTokens).toBe(20);
    expect(u.reasoningTokens).toBe(30);
    expect(u.providerRequests).toBe(2);
  });
});

describe("C24 cognitive criterion assessments", () => {
  it("never upgrades unverified technical evidence via SUPPORTS", () => {
    const cog = heuristicCognitiveCriterionAssessments({
      criteria: ["src/x.ts export foo"],
      criterionEvidence: {
        "src/x.ts export foo": {
          refs: ["src/x.ts"],
          verified: false,
          note: "accessible only",
        },
      },
    });
    const applied = applyCognitiveAssessmentsToEvidence({
      criterionEvidence: {
        "src/x.ts export foo": {
          refs: ["src/x.ts"],
          verified: false,
        },
      },
      assessments: cog.assessments.map((a) => ({
        ...a,
        judgment: "SUPPORTS" as const,
      })),
    });
    expect(applied.criterionEvidence["src/x.ts export foo"]?.verified).toBe(
      false,
    );
    expect(
      applied.limits.some((l) => /COGNITIVE_SUPPORTS_NON_CERTIFYING/.test(l)),
    ).toBe(true);
  });

  it("downgrades verified when cognitive CONTRADICTS", () => {
    const applied = applyCognitiveAssessmentsToEvidence({
      criterionEvidence: {
        "export bar": { refs: ["a.ts"], verified: true },
      },
      assessments: [
        {
          criterion: "export bar",
          judgment: "CONTRADICTS",
          rationale: "symbol absent",
          piecesConsulted: ["a.ts"],
          provenance: "DETERMINISTIC_HEURISTIC",
        },
      ],
    });
    expect(applied.criterionEvidence["export bar"]?.verified).toBe(false);
  });
});

```

### `projects/sfia-studio-next/web/tests/integration/ml5-c24-fencing-lease.pg.test.ts`

```typescript
/**
 * C24 — expired restitution owner cannot renew via persistPipelineOwned;
 * a later claimant (B) can claim after lease expiry.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { mkdtempSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts } from "@/db/schema";
import {
  authorizeCursorExecution,
  dispatchCursorExecution,
  prepareCursorExecution,
} from "@/domains/execution/cursor-attempt-service";
import { createTechnicalContract } from "@/domains/execution/technical-contract";
import {
  claimRestitutionPipelineAtomic,
  persistPipelineOwned,
} from "@/domains/execution/cursor-autonomous-restitution";
import { __resetScriptedCursorRunsForTests } from "@/domains/execution/cursor-sdk-adapter";
import { seedPilotProjectWithCognitiveFiliation } from "../helpers/cognitive-filiation-seed";
import { newId } from "@/lib/ids";
import type { TechnicalContractBody } from "@/domains/execution/types";

function body(): TechnicalContractBody {
  return {
    title: "C24 fencing",
    engagements: {
      willDo: "fence",
      willNotDo: "stale write",
      expectedResult: "owner B wins",
      pilotControl: "D6",
    },
    volets: {
      mission: "c24",
      perimeter: "sandbox",
      capabilitiesAuthority: "scripted",
      stopConditions: "STOP",
      proofsSources: "handoff",
      integrity: "fp",
    },
    instructionText: "scripted",
    risks: [],
    exclusions: [],
    acceptance: { criteria: ["one"], expectedProofs: ["handoff"] },
    executor: {
      kind: "CURSOR_SDK_LOCAL",
      capabilities: [],
      permissionsNeeded: [],
    },
    stopConditions: ["STOP"],
    reversibilityLimits: ["no rollback"],
    gitScope: null,
  };
}

describe("C24 restitution lease fencing", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.SFIA_CURSOR_EFFECT_MODE = "SCRIPTED";
    delete process.env.SFIA_CURSOR_SCRIPTED_PHASED;
    process.env.SFIA_CURSOR_WORKSPACE_ROOT = mkdtempSync(
      join(tmpdir(), "sfia-c24-fence-"),
    );
    process.env.SFIA_AUTONOMOUS_NORA_AVIS = "0";
  });

  it("expired owner A cannot persist; B claims after lease expiry", async () => {
    __resetScriptedCursorRunsForTests();
    const seed = await seedPilotProjectWithCognitiveFiliation();
    const c = await createTechnicalContract({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      preparationId: seed.preparationId,
      contractKey: `c24-fence-${Date.now()}`,
      body: body(),
      markReady: true,
      sourcesSufficient: true,
      cognitiveWorkId: seed.cognitiveWorkId,
      cognitiveRevision: seed.cognitiveRevision,
    });
    const prep = await prepareCursorExecution({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      contractId: c.contractId,
      correlationKey: newId("corr"),
      workspaceKey: "default",
    });
    await authorizeCursorExecution({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      attemptId: prep.attemptId,
      statement: "ok",
      inspectedFingerprint: c.fingerprint,
      confirmed: true,
    });
    await dispatchCursorExecution({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      attemptId: prep.attemptId,
    });

    const row0 = (
      await db
        .select({ resultJson: effectAttempts.resultJson, status: effectAttempts.status })
        .from(effectAttempts)
        .where(eq(effectAttempts.id, prep.attemptId))
        .limit(1)
    )[0]!;
    const base = JSON.parse(row0.resultJson || "{}") as Record<string, unknown>;

    const ownerA = `tok_a_${Date.now()}`;
    const versionA = 7;
    // Plant owner A mid-pipeline with a still-valid lease, then expire.
    const planted = {
      ...base,
      restitutionPipelineStatus: "COLLECTING",
      restitutionOwnerToken: ownerA,
      restitutionVersion: versionA,
      restitutionLeaseExpiresAt: new Date(Date.now() + 120_000).toISOString(),
      restitutionHandoffId: null,
      restitutionQualificationId: null,
    };
    await db
      .update(effectAttempts)
      .set({ resultJson: JSON.stringify(planted), updatedAt: new Date() })
      .where(eq(effectAttempts.id, prep.attemptId));

    // Valid lease — A can still write.
    const okWhileValid = await persistPipelineOwned({
      attemptId: prep.attemptId,
      ownerToken: ownerA,
      expectedVersion: versionA,
      live: { ...planted, restitutionPipelineStatus: "QUALIFYING" },
    });
    expect(okWhileValid).toBe(true);

    // Expire lease in DB (A must not renew via write).
    const expired = {
      ...planted,
      restitutionPipelineStatus: "QUALIFYING",
      restitutionLeaseExpiresAt: new Date(Date.now() - 60_000).toISOString(),
    };
    await db
      .update(effectAttempts)
      .set({ resultJson: JSON.stringify(expired), updatedAt: new Date() })
      .where(eq(effectAttempts.id, prep.attemptId));

    const lateA = await persistPipelineOwned({
      attemptId: prep.attemptId,
      ownerToken: ownerA,
      expectedVersion: versionA,
      live: {
        ...expired,
        restitutionPipelineStatus: "COMPLETE",
        restitutionCompletedAt: new Date().toISOString(),
      },
    });
    expect(lateA).toBe(false);

    // B reclaims after lease expiry (product claim CAS).
    const claimB = await claimRestitutionPipelineAtomic({
      attemptId: prep.attemptId,
    });
    expect(claimB.claimed).toBe(true);
    expect(claimB.ownerToken).toBeTruthy();
    expect(claimB.ownerToken).not.toBe(ownerA);
    expect((claimB.version ?? 0) > versionA).toBe(true);

    // A still cannot write under the old token/version.
    const lateAAfterB = await persistPipelineOwned({
      attemptId: prep.attemptId,
      ownerToken: ownerA,
      expectedVersion: versionA,
      live: {
        ...expired,
        restitutionPipelineStatus: "COMPLETE",
        restitutionCompletedAt: new Date().toISOString(),
      },
    });
    expect(lateAAfterB).toBe(false);

    // B can persist under the new claim.
    const writeB = await persistPipelineOwned({
      attemptId: prep.attemptId,
      ownerToken: claimB.ownerToken!,
      expectedVersion: claimB.version!,
      live: {
        ...claimB.live,
        restitutionPipelineStatus: "COMPLETE",
        restitutionCompletedAt: new Date().toISOString(),
      },
    });
    expect(writeB).toBe(true);
  });
});

```

### `projects/sfia-studio-next/web/scripts/c24-mission-smoke.mts`

```typescript
/**
 * C24 — bounded operational smoke (DEV).
 * Exercises: public WEB registry feeding, Nora usage extraction path,
 * D8 isolated verify (no new Function), fencing helpers importable.
 *
 * Usage: npx tsx scripts/c24-mission-smoke.mts
 * Does not push; does not mutate RECETTE/STABLE.
 */
import { config } from "dotenv";
config({ path: ".env.local" });

import { resolvePublicWebRegistry } from "../src/domains/conversation/public-web-registry.ts";
import { extractProviderUsageFromRunResult } from "../src/domains/conversation/provider-usage.ts";
import { staticEvaluateContentAgainstCriterion } from "../src/domains/proofs/studio-isolated-verify.ts";
import {
  heuristicCognitiveCriterionAssessments,
  applyCognitiveAssessmentsToEvidence,
} from "../src/domains/proofs/d8-cognitive-criterion-eval.ts";

const results: Array<{ id: string; ok: boolean; detail: string }> = [];

function check(id: string, ok: boolean, detail: string) {
  results.push({ id, ok, detail });
  console.log(`${ok ? "PASS" : "FAIL"} ${id} — ${detail}`);
}

// Mission 1 fragment — WEB registry feeds from catalog on public topic.
{
  const r = resolvePublicWebRegistry({
    haystack:
      "Peux-tu vérifier la version Node.js LTS actuelle sur le site officiel ?",
    env: process.env,
  });
  check(
    "M1-WEB-REGISTRY",
    Boolean(r.topics["node-lts"]),
    `topics=${JSON.stringify(r.topics)} limits=${r.limits.join(",")}`,
  );
}

// Private marker refusal path (negative) — marker present in catalog query.
{
  const r = resolvePublicWebRegistry({
    haystack: "Quelle est la version Node.js LTS ?",
    privateMarkers: ["nodejs.org"],
    env: { ...process.env, STUDIO_LANE: "DEV" },
  });
  const skipped = r.limits.some((l) => /CATALOG_SKIP_PRIVATE_MARKER/.test(l));
  check(
    "M4J-WEB-PRIVATE-MARKER",
    skipped && !r.topics["node-lts"],
    `limits=${r.limits.join(",")}`,
  );
}

// D8 static — no default pass.
{
  const empty = staticEvaluateContentAgainstCriterion(
    "comportement métier correct",
    "export const x = 1",
  );
  check(
    "D8-NO-DEFAULT-PASS",
    empty.ok === false,
    empty.note,
  );
  const ok = staticEvaluateContentAgainstCriterion(
    "src/widget.ts export processWidget",
    "export function processWidget(input: string) { return input; }\n",
  );
  check("D8-STATIC-SYMBOL", ok.ok === true, ok.note);
}

// Cognitive non-upgrade.
{
  const applied = applyCognitiveAssessmentsToEvidence({
    criterionEvidence: {
      c1: { refs: ["a.ts"], verified: false },
    },
    assessments: [
      {
        criterion: "c1",
        judgment: "SUPPORTS",
        rationale: "looks fine",
        piecesConsulted: ["a.ts"],
        provenance: "DETERMINISTIC_HEURISTIC",
      },
    ],
  });
  check(
    "D8-COG-NO-UPGRADE",
    applied.criterionEvidence.c1?.verified === false,
    applied.limits.join(","),
  );
  const h = heuristicCognitiveCriterionAssessments({
    criteria: ["test npm exit=0"],
    criterionEvidence: {
      "test npm exit=0": { refs: [], verified: false },
    },
  });
  check(
    "D8-COG-TEST-INSUFFICIENT",
    h.assessments[0]?.judgment === "INSUFFICIENT",
    h.assessments[0]?.rationale ?? "",
  );
}

// Usage extraction honesty.
{
  const absent = extractProviderUsageFromRunResult({});
  check(
    "NORA-USAGE-ABSENT",
    absent.provenance === "UNAVAILABLE" && absent.inputTokens == null,
    absent.limits.join(","),
  );
  const present = extractProviderUsageFromRunResult({
    state: {
      usage: {
        requests: 1,
        inputTokens: 10,
        outputTokens: 5,
        totalTokens: 15,
        inputTokensDetails: [{ cached_tokens: 2 }],
        outputTokensDetails: [{ reasoning_tokens: 3 }],
      },
    },
  });
  check(
    "NORA-USAGE-SDK",
    present.inputTokens === 10 &&
      present.cachedInputTokens === 2 &&
      present.reasoningTokens === 3,
    `prov=${present.provenance}`,
  );
}

const failed = results.filter((r) => !r.ok);
console.log(
  JSON.stringify(
    {
      cycle: "C24",
      passed: results.length - failed.length,
      failed: failed.length,
      results,
    },
    null,
    2,
  ),
);
process.exit(failed.length ? 1 : 0);

```

## 7. Fichiers modifiés C24 (extraits utiles)

### `cursor-autonomous-restitution.ts` — lease predicate + cognitive hook

```typescript
// persistPipelineOwned WHERE includes:
//   restitutionOwnerToken = owner
//   restitutionVersion = expected
//   lease IS NULL OR lease > now()
// + heuristicCognitiveCriterionAssessments before qualifyCursorRealization
```

### `nora-adapter.ts` — usage extraction

```typescript
providerUsage = extractProviderUsageFromRunResult(result);
// returned on NoraGenerateResult.usage
```

### `run-nora-cognitive-turn.ts` — WEB registry feed

```typescript
const webRegistry = resolvePublicWebRegistry({ priorTopics, haystack, ... });
// passed to generateNoraReply.publicWebRegistry ; persisted on investigation
```

### `cognitive-work.ts` — no double-count reasoning in envelope

```typescript
const used = (resources.inputTokens ?? 0) + (resources.outputTokens ?? 0);
// reasoningTokens tracked for OBS only
```

### `CursorRealizationSurface.tsx` — no silent POST qualification on open

When MISSING: set status lecture seule / requalify explicite ; no automatic POST.

### `ml5-c23-d8-studio-verify.test.ts`

Rewritten: legacy STUDIO_BOUNDED is NOT certifying.

## 8. Validations exécutées

| Suite | Résultat |
| --- | --- |
| unit C24 safety + C23 legacy + web-registry-usage | PASS |
| PG C22 conforming + contradiction + CAS | PASS (dans NR) |
| PG C24 fencing lease | PASS |
| NR C20–C24 + web-search* | 16 files / 54 tests PASS |
| `c24-mission-smoke.mts` | 8/8 PASS |
| `tsc --noEmit` | PASS (après correctifs) |
| eslint ciblé | 1 warning préexistant unused import nora-adapter |
| LIVE Nora usage probe | COMPLETE gpt-6.2-sol ; usage input=5971 output=137 requests=1 provenance=AGENTS_SDK_RUN_STATE |
| next build C24 | NON REJOUÉ (BUILD_ID C23 conservé) |
| Playwright BROWSER missions | NON EXÉCUTÉ |
| git diff --check | à vérifier au handoff |

## 9. Missions opérationnelles (état)

| Mission | Statut | Notes |
| --- | --- | --- |
| M1 Investigation + WEB | PARTIAL | Registry alimenté (catalog) ; probe Nora LIVE sans outil WEB ; pas parcours Pilote BROWSER |
| M2 Réalisation gouvernée | NON DÉMONTRÉ C24 | Capacités D6/D7/D8 présentes ; pas de nouvelle chaîne Cursor SDK LIVE E2E |
| M3 Continuité | NON DÉMONTRÉ C24 | — |
| M4 Dégradés A–J | PARTIAL | Fencing H PASS ; WEB négatif marqueur PASS ; autres via suites historiques |

## 10. Intégrité D8

- Exécution in-process du code Cursor: **FERMÉE**.
- Artefacts STUDIO_BOUNDED: **non certifiants**.
- Succès par défaut contenu: **fermé** (tokens requis).
- Preuve liée au critère: **oui** (matchCriterionToVerifyId + no inherit).
- Cognitive: heuristic appliquée ; SUPPORTS ne certifie pas ; CONTRADICTS downgrade.
- Fencing: owner expiré ne renouvelle pas ; B reclaim OK.

## 11. Couverture / non-régression

- Registre ML5 unique conservé ; delivery-history C24 ajouté.
- Suites C20–C24 + WEB unit/PG ciblées PASS.
- ML1–ML4 non rejoués exhaustivement ce cycle (impact localisé D8/D3/WEB/UX).

## 12. Risques / limites / dette

1. Missions 1–4 E2E BROWSER LIVE/REAL incomplets.
2. WEB LIVE positif via outil frontière dans conversation Pilote non observé ce cycle (registry + authorize OK).
3. Isolation subprocess ≠ sandbox OS complète (documenté TOOLING GAP résiduel si plan verify absents → INSUFFICIENT).
4. Figma F2 non re-qualifié.
5. BUILD_ID Next non régénéré C24.
6. DIRTY historique C1–C23 non commité — C24 isolé par fingerprints fichiers + pack mono-cycle.

## 13. Verdict Cursor

**READY WITH RESERVES**

P0 D8 execution safety, false-positive integrity, et fencing lease/version sont fermés avec preuves déterministes/PG et observation LIVE Nora usage. Les missions opérationnelles end-to-end LIVE/REAL (BROWSER, Cursor SDK director, WEB outil positif, Figma F2) restent des réserves non bloquantes pour la fermeture des P0 lot 3 intégrité, mais **bloquantes pour une déclaration ML5 CLOSED / réception**.

Gate Morris suivant: revue ChatGPT du handoff C24 puis décision de préparation de réception ML5.

Instruction ChatGPT: consulter `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` avant réponse à Morris.

## 14. Empreintes fichiers C24

```
8c2407397a21beed56d8ef4a497fbca21d18db7566164ed525d9559fc1099333  projects/sfia-studio-next/web/scripts/c24-mission-smoke.mts
4a94a929a6e6020bae52b14d5eff704a9d4d5a7596cdd025b831a0a10a214835  projects/sfia-studio-next/web/src/domains/conversation/provider-usage.ts
04cd3f4d4ce3e76281fc48e9bb6616df2009f9cfa8b65352ce8461f788b99b08  projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts
bb3d806dbe3f9e105aa6668295c6b90bd9ba66ce16965ebfde37f0091de709fa  projects/sfia-studio-next/web/src/domains/proofs/d8-cognitive-criterion-eval.ts
00a6d0a6c2a371d611367100fa5255ea64a16581d39a10252c7fa1e4a4eb0489  projects/sfia-studio-next/web/src/domains/proofs/studio-isolated-verify.ts
864ec983d253a35a2293e4b457ec92a1e2e9d3b5dd6515ca2975f607ca624ebc  projects/sfia-studio-next/web/tests/integration/ml5-c24-fencing-lease.pg.test.ts
0a15b476d7b996ca00adf8d1df16c675a2d520d2b23606938224111205f12ecb  projects/sfia-studio-next/web/tests/unit/ml5-c24-d8-safety.test.ts
c80f19d4ac125d7810b5c2bc740641db082c0c56aaecd3298d9e487681a5eb04  projects/sfia-studio-next/web/tests/unit/ml5-c24-web-registry-usage.test.ts
```

## 15. Traces LIVE Nora (extrait non secret)

```json
{
  "mode": "openai-agents-sdk-live",
  "status": "COMPLETE",
  "modelRequested": "gpt-6.2-sol",
  "usage": {
    "inputTokens": 5971,
    "outputTokens": 137,
    "providerRequests": 1,
    "provenance": "AGENTS_SDK_RUN_STATE"
  }
}
```

---
FIN REVIEW PACK C24
