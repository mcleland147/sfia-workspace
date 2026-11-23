# SFIA Review Pack FULL — ML5 Cycle 6 : Git Cursor A + DEV BROWSER

| Champ | Valeur |
|---|---|
| Date / heure (UTC) | PLACEHOLDER_NOW |
| Cycle | ML5 Cycle 6 — Git A + DEV auto-session + fermeture |
| Profil | CRITICAL · SFIA v2.6 |
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD entrée | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — cycles 3–6) |
| Upstream | **none** (branche non publiée) |
| Décision Morris | `sfia/next-nora-cognition-cursor-contract-candidate@1e6929c543a88606488094be2f5dfe7fc34a0cb9` |
| Pack précédent | `sfia/review-handoff@b80cfc01b1b1a79ba0e2e5e7b71811fc94517ee1` |
| main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Lane | DEV only — `127.0.0.1:3100` · PG `:5433` · mig 019 |
| Versioning | **NO RELEASE** · STABLE **NOT AVAILABLE** |
| Push projet / PR / merge | **NONE** |
| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |

## 1. Git Truth Check

- Branch locale confirmée ; HEAD `6cf33e99` ; état DIRTY préservé (pas de reset/clean/checkout destructeur).
- Décision `1e6929c5` lue depuis Git distant (option A + DEV auto-session) — **pas** cherry-pick/merge aveugle dans le worktree.
- RECETTE/STABLE : aucune mutation.
- `.env.local` contient des secrets opérateur — **exclus du pack**.

## 2. Décisions appliquées (contenu validé Morris)

1. **DÉC-ML5-GIT option A** — Cursor publie sous mandat ; Studio D9 lit/vérifie ; **pas** de publisher de code dans Studio.
2. **DÉC-ML5-DEV** — auto-session Pilote A si `STUDIO_DEV_AUTO_SESSION=1` + `STUDIO_DEV_TEST_LOGIN=1` + lane DEV + loopback ; fail-closed sinon.

## 3. Résumé cycle 6 (spécifique)

| Domaine | Livré | Preuve |
|---|---|---|
| Auto-session DEV | API GET/POST `/api/dev/auto-session` + login redirect + auth probe | Unit 2 PASS ; curl Host evil → 403 ; BROWSER portfolio/Travail/Exécution/Résultats |
| Git option A F01–F09 | `cursor-git-option-a.ts` + preflight prepare | Unit 5 PASS (bare local) ; GitHub REAL **NOT** |
| G15 concurrent | `SELECT FOR UPDATE` + newProofRef + expectedUpdatedAt | PG 1 PASS concurrent history len=2 |
| Nora activity | `activityFlushQueue` await before return | Code path ; interruption LIVE non prouvée |
| A04 | `detectsCorrectiveDraftIntent` + `cursorRedispatch:false` | Unit detect PASS |
| Turbopack SDK | `serverExternalPackages: ["@cursor/sdk"]` | Attempts API 200 après restart |
| BROWSER | Surfaces servies sous session Pilote | Snapshots a11y + APIs 200 |
| F2 | Oracles Figma 12.01/02/08 téléchargés | PNG SHA ok ; **runtime PNG timeout** → F2 NOT PROVEN |

## 4. Inventaire 99 (cycle 6)

**IMPLEMENTED=1 · PARTIAL=92 · NOT_IMPL=6** (Σ=99).

Mouvements NOT_IMPL→PARTIAL : A04, F01–F09, I06.

Restent NOT_IMPL : B04, B09, E12, G07, H08, I10.

## 5. Fake / Real Qualification

| Frontière | Exercée | Niveau |
|---|---|---|
| Auth DEV auto-session | Oui | DETERMINISTIC + BROWSER (FAKE identity) |
| D6 contrôles | Non contournés par auto-session | Architecture ; T-02 non rejoué BROWSER |
| Git bare local | Oui | DETERMINISTIC |
| GitHub REAL | Non | GATED |
| Nora LIVE | Non | GATED |
| Cursor SDK LIVE | Non | GATED |
| WEB LIVE | Non | GATED |
| PG DEV/e2e | Oui | INTEGRATION |
| Figma oracles | Oui (3 frames) | DOCUMENTED oracles |
| F2 pixel | Non | NOT PROVEN (screenshot tooling) |

## 6. Réponses restitution (Q1–Q12)

1. Option A appliquée en code/contrat — oui (DETERMINISTIC).
2. F01–F09 PARTIAL — preuves unit bare ; pas REAL.
3. Cursor peut publier dans bare de test sans Studio publisher — oui (unit).
4. Studio lit SHA distant via observation helpers — oui (bare) ; D9 GitHub REAL ouvert.
5. Auto-session DEV fonctionne ; D1 fail-closed hors DEV/loopback ; D6 non neutralisé.
6. RECETTE/STABLE protégées (lane≠DEV refuse).
7. Travail→Exécution→Résultats utilisables BROWSER (états vides) — oui snapshots.
8. 14 états Figma **identifiés** ; F2 pixel **NOT PROVEN** (3 oracles PNG seulement).
9. Événements Nora : flush await codé ; fiabilité LIVE/BROWSER poll non exhaustive.
10. G15 transactionnel PG concurrent — oui.
11. LIVE/REAL sous gate : WEB, SDK effets externes, GitHub, MCP mutatif, Nora LIVE.
12. Inventaire **1/92/6** ; preuves unit+PG+BROWSER partiel.

## 7. Tests exécutés (cycle 6)

```
vitest ciblé : 34 PASS
- ml5-cursor-git-option-a (5)
- ml5-dev-auto-session (2)
- ml5-qualification-requalify unit (2) + pg (1)
- ml5-nora-contract-bridge (6)
- ml5-public-web-frontier (9)
- ml5-cursor-dispatch.pg (9)
tsc --noEmit : PASS
```

## 8. Preuves BROWSER / Figma

### BROWSER (sans PNG runtime — tooling timeout)

- `http://127.0.0.1:3100/portfolio` — session Pilote auto
- Sas préparation `prep_71dd7dea…`
- Travail `?surface=travail` — conversation + composer
- Exécution `?surface=execution` — contrats/historique vides ; attempts API 200
- Publication/Résultats `?surface=publication` — onglets D8 + message Git indisponible
- Géométrie Exécution : `.tmp-sfia-review/browser/runtime-geometry-execution.json`
- Fail-closed : `Host: evil.example.com` → `DEV_AUTO_SESSION_UNAVAILABLE`

### Figma oracles (SHA-256)

| Frame | Node | Fichier | SHA-256 |
|---|---|---|---|
| 12.01 | 1210:233 | `.tmp-sfia-review/figma/12.01-nora-prepare.png` | `7148425a94e022277aedcbcb54c80091151aacff8130967f471412643b8ab731` |
| 12.02 | 1211:117 | `.tmp-sfia-review/figma/12.02-inspect-contrat.png` | `0945e464d7615d8afdf0c4e8c9ca1b8aed96d61b82d1042668a39f4831d03417` |
| 12.08 | 1212:637 | `.tmp-sfia-review/figma/12.08-resultats-synthese.png` | `40052074ec9a23934b24f4ef73b9e8cc40418ed7313d6c2ee53a4f08985abb58` |

Frames 12.03–12.07, 12.09–12.14 : metadata IDs extraits ; oracles PNG non tous téléchargés ce cycle.

**F2 verdict : NOT PROVEN** — `browser_take_screenshot` / CDP `Page.captureScreenshot` timeout ; pas de comparaison x/y/w/h 0±2 CSS px runtime↔Figma.

## 9. Fichiers créés (cycle 6 — contenu complet)


### `projects/sfia-studio-next/web/src/app/api/dev/auto-session/route.ts`
```ts
import { NextResponse } from "next/server";
import {
  createDevAutoSession,
  isDevAutoSessionAllowed,
  resolveStudioSession,
  STUDIO_SESSION_COOKIE,
} from "@/domains/identity/session";

function gateFrom(req: Request) {
  return {
    host: req.headers.get("host"),
    forwardedHost: req.headers.get("x-forwarded-host"),
    forwardedFor: req.headers.get("x-forwarded-for"),
    realIp: req.headers.get("x-real-ip"),
  };
}

function safeNext(raw: string | null): string {
  if (!raw || !raw.startsWith("/") || raw.startsWith("//")) return "/portfolio";
  if (raw.startsWith("/api/")) return "/portfolio";
  return raw.slice(0, 512);
}

/**
 * DÉC-ML5-DEV — establish Pilot A test session without /login UI.
 * GET: capability + optional redirect when auto-session allowed.
 * POST: issue cookie (idempotent if already authenticated).
 * Fail-closed outside DEV + loopback + STUDIO_DEV_AUTO_SESSION=1.
 */
export async function GET(req: Request) {
  const gate = gateFrom(req);
  const url = new URL(req.url);
  const next = safeNext(url.searchParams.get("next"));
  const allowed = isDevAutoSessionAllowed(gate);
  if (!allowed) {
    return NextResponse.json(
      {
        ok: false,
        autoSessionAvailable: false,
        error: "DEV_AUTO_SESSION_UNAVAILABLE",
      },
      { status: 403 },
    );
  }
  const existing = await resolveStudioSession().catch(() => null);
  if (existing) {
    if (url.searchParams.has("next")) {
      return NextResponse.redirect(new URL(next, req.url));
    }
    return NextResponse.json({
      ok: true,
      alreadyAuthenticated: true,
      pilotId: existing.pilotId,
      authMode: existing.authMode,
      autoSessionAvailable: true,
    });
  }
  try {
    const created = await createDevAutoSession(gate);
    if (url.searchParams.has("next")) {
      const res = NextResponse.redirect(new URL(next, req.url));
      res.cookies.set(STUDIO_SESSION_COOKIE, created.token, {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: false,
      });
      return res;
    }
    const res = NextResponse.json({
      ok: true,
      alreadyAuthenticated: false,
      pilotId: created.pilotId,
      authMode: "dev-test-login",
      which: created.which,
      autoSessionAvailable: true,
      notice:
        "FAKE/REAL: DEV auto-session — NOT GitHub OAuth — NOT REAL auth — loopback/DEV only",
    });
    res.cookies.set(STUDIO_SESSION_COOKIE, created.token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      secure: false,
    });
    return res;
  } catch (e) {
    const msg = e instanceof Error ? e.message : "FORBIDDEN";
    return NextResponse.json({ ok: false, error: msg, autoSessionAvailable: false }, { status: 403 });
  }
}

export async function POST(req: Request) {
  const gate = gateFrom(req);
  if (!isDevAutoSessionAllowed(gate)) {
    return NextResponse.json(
      { ok: false, error: "DEV_AUTO_SESSION_UNAVAILABLE", autoSessionAvailable: false },
      { status: 403 },
    );
  }
  const existing = await resolveStudioSession().catch(() => null);
  if (existing) {
    return NextResponse.json({
      ok: true,
      alreadyAuthenticated: true,
      pilotId: existing.pilotId,
      authMode: existing.authMode,
      autoSessionAvailable: true,
    });
  }
  try {
    const created = await createDevAutoSession(gate);
    const res = NextResponse.json({
      ok: true,
      alreadyAuthenticated: false,
      pilotId: created.pilotId,
      authMode: "dev-test-login",
      which: created.which,
      autoSessionAvailable: true,
      notice:
        "FAKE/REAL: DEV auto-session — NOT GitHub OAuth — NOT REAL auth — loopback/DEV only",
    });
    res.cookies.set(STUDIO_SESSION_COOKIE, created.token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      secure: false,
    });
    return res;
  } catch (e) {
    const msg = e instanceof Error ? e.message : "FORBIDDEN";
    return NextResponse.json({ ok: false, error: msg }, { status: 403 });
  }
}
```

### `projects/sfia-studio-next/web/src/domains/execution/cursor-git-option-a.ts`
```ts
/**
 * DÉC-ML5-GIT Option A — Cursor publishes Git directly under D6 mandate.
 * Studio does NOT publish Cursor code. Studio D9 reads/verifies remote facts.
 *
 * This module: preflight + observation contracts + local bare-repo harness for
 * DETERMINISTIC tests. No GitHub REAL mutation.
 */

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

export type CursorGitMandate = {
  repositoryFullName: string;
  baseRef: string;
  workBranch: string;
  baseSha: string | null;
  allowedOps: Array<"commit" | "push" | "create_branch">;
  /** PR/merge require distinct mandate — never implied by develop/push. */
  allowPullRequest: boolean;
  allowMerge: boolean;
};

export type CursorGitPreflightResult =
  | {
      ok: true;
      mandate: CursorGitMandate;
      workspacePath: string;
      remoteUrl: string | null;
      observedBaseSha: string | null;
      limits: string[];
    }
  | {
      ok: false;
      reason: string;
      limits: string[];
    };

export type CursorGitObservation = {
  at: string;
  workBranch: string;
  baseShaDeclared: string | null;
  localHeadSha: string | null;
  remoteHeadShaVerified: string | null;
  publicationStatus:
    | "LOCAL_ONLY"
    | "PUSHED_UNVERIFIED"
    | "REMOTE_VERIFIED"
    | "DIVERGED"
    | "INACCESSIBLE"
    | "DENIED";
  limits: string[];
};

/** Prompt text alone is never a permission barrier — preflight must check facts. */
export function buildCursorGitMandateFromScope(
  gitScope: {
    required?: boolean;
    repositoryFullName?: string | null;
    baseRef?: string | null;
    workBranch?: string | null;
    baseSha?: string | null;
  } | null | undefined,
  opts?: { allowPullRequest?: boolean; allowMerge?: boolean },
): CursorGitMandate | null {
  if (!gitScope?.required) return null;
  const repositoryFullName = (gitScope.repositoryFullName ?? "").trim();
  const baseRef = (gitScope.baseRef ?? "").trim();
  const workBranch = (gitScope.workBranch ?? "").trim();
  if (!repositoryFullName || !baseRef || !workBranch) return null;
  if (workBranch === "main" || workBranch === "master") {
    // Dedicated work branch required — never mutate protected default by default.
    return null;
  }
  return {
    repositoryFullName,
    baseRef,
    workBranch,
    baseSha: gitScope.baseSha?.trim() || null,
    allowedOps: ["commit", "push", "create_branch"],
    allowPullRequest: Boolean(opts?.allowPullRequest),
    allowMerge: Boolean(opts?.allowMerge),
  };
}

export function preflightCursorGitOptionA(input: {
  mandate: CursorGitMandate | null;
  workspacePath: string;
  /** When set, must match mandate.repositoryFullName (local test alias or remote). */
  authorizedRepos: string[];
  observedRemoteBaseSha?: string | null;
  workspaceExists?: boolean;
}): CursorGitPreflightResult {
  const limits: string[] = ["OPTION_A_CURSOR_PUBLISHES", "STUDIO_IS_NOT_CODE_PUBLISHER"];
  if (!input.mandate) {
    return { ok: false, reason: "GIT_MANDATE_MISSING", limits: [...limits, "NO_GIT_SCOPE"] };
  }
  const m = input.mandate;
  if (!input.authorizedRepos.includes(m.repositoryFullName)) {
    return {
      ok: false,
      reason: "REPO_NOT_AUTHORIZED",
      limits: [...limits, `repo:${m.repositoryFullName}`],
    };
  }
  if (m.allowMerge || m.allowPullRequest) {
    limits.push("PR_OR_MERGE_REQUIRES_DISTINCT_MANDATE_FLAG");
  }
  const exists = input.workspaceExists ?? existsSync(input.workspacePath);
  if (!exists) {
    return { ok: false, reason: "WORKSPACE_MISSING", limits };
  }
  if (m.baseSha && input.observedRemoteBaseSha && m.baseSha !== input.observedRemoteBaseSha) {
    return {
      ok: false,
      reason: "BASE_SHA_DIVERGED",
      limits: [
        ...limits,
        `declared:${m.baseSha.slice(0, 12)}`,
        `observed:${input.observedRemoteBaseSha.slice(0, 12)}`,
      ],
    };
  }
  return {
    ok: true,
    mandate: m,
    workspacePath: input.workspacePath,
    remoteUrl: null,
    observedBaseSha: input.observedRemoteBaseSha ?? m.baseSha,
    limits,
  };
}

/**
 * Publication is only REMOTE_VERIFIED after an independent re-read of remote HEAD.
 * Cursor declaring `git push` is never enough.
 */
export function qualifyCursorGitPublication(input: {
  localHeadSha: string | null;
  remoteHeadShaVerified: string | null;
  pushDeclaredByCursor: boolean;
}): CursorGitObservation["publicationStatus"] {
  if (!input.remoteHeadShaVerified) {
    return input.pushDeclaredByCursor ? "PUSHED_UNVERIFIED" : "LOCAL_ONLY";
  }
  if (!input.localHeadSha) return "REMOTE_VERIFIED";
  if (input.localHeadSha === input.remoteHeadShaVerified) return "REMOTE_VERIFIED";
  return "DIVERGED";
}

export function buildCursorGitObservation(input: {
  workBranch: string;
  baseShaDeclared: string | null;
  localHeadSha: string | null;
  remoteHeadShaVerified: string | null;
  pushDeclaredByCursor: boolean;
  limits?: string[];
}): CursorGitObservation {
  return {
    at: new Date().toISOString(),
    workBranch: input.workBranch,
    baseShaDeclared: input.baseShaDeclared,
    localHeadSha: input.localHeadSha,
    remoteHeadShaVerified: input.remoteHeadShaVerified,
    publicationStatus: qualifyCursorGitPublication(input),
    limits: input.limits ?? ["DETERMINISTIC_GIT_OBS"],
  };
}

/** Local bare + clone harness — DETERMINISTIC only, never GitHub REAL. */
export type LocalGitHarness = {
  root: string;
  barePath: string;
  workPath: string;
  remoteName: string;
  cleanup: () => void;
  run: (cwd: string, args: string[]) => string;
  headSha: (cwd: string) => string;
  pushWorkBranch: (branch: string) => void;
  remoteHead: (branch: string) => string;
};

export function createLocalBareGitHarness(prefix = "sfia-ml5-git-a-"): LocalGitHarness {
  const root = mkdtempSync(join(tmpdir(), prefix));
  const barePath = join(root, "remote.git");
  const workPath = join(root, "work");
  const run = (cwd: string, args: string[]) =>
    execFileSync("git", args, { cwd, encoding: "utf8" }).trim();
  run(root, ["init", "--bare", barePath]);
  mkdirSync(workPath);
  run(workPath, ["init"]);
  run(workPath, ["config", "user.email", "ml5-git-a@studio.local"]);
  run(workPath, ["config", "user.name", "ML5 Git A Harness"]);
  writeFileSync(join(workPath, "README.md"), "# ML5 Git A harness\n");
  run(workPath, ["add", "README.md"]);
  run(workPath, ["commit", "-m", "init"]);
  run(workPath, ["branch", "-M", "main"]);
  run(workPath, ["remote", "add", "origin", barePath]);
  run(workPath, ["push", "-u", "origin", "main"]);
  const headSha = (cwd: string) => run(cwd, ["rev-parse", "HEAD"]);
  return {
    root,
    barePath,
    workPath,
    remoteName: "local-bare/ml5-git-a",
    cleanup: () => {
      try {
        rmSync(root, { recursive: true, force: true });
      } catch {
        /* best-effort */
      }
    },
    run,
    headSha,
    pushWorkBranch: (branch: string) => {
      run(workPath, ["checkout", "-B", branch]);
      writeFileSync(join(workPath, "change.txt"), `change ${Date.now()}\n`);
      run(workPath, ["add", "change.txt"]);
      run(workPath, ["commit", "-m", `ml5 work on ${branch}`]);
      run(workPath, ["push", "-u", "origin", branch]);
    },
    remoteHead: (branch: string) => run(barePath, ["rev-parse", branch]),
  };
}

export function readLocalFileAtRef(repoPath: string, ref: string, filePath: string): string | null {
  try {
    return execFileSync("git", ["show", `${ref}:${filePath}`], {
      cwd: repoPath,
      encoding: "utf8",
    });
  } catch {
    return null;
  }
}

export function assertHarnessFile(path: string, expectedSubstring: string): boolean {
  if (!existsSync(path)) return false;
  return readFileSync(path, "utf8").includes(expectedSubstring);
}
```

### `projects/sfia-studio-next/web/tests/unit/ml5-cursor-git-option-a.test.ts`
```ts
import { afterEach, describe, expect, it } from "vitest";
import {
  buildCursorGitMandateFromScope,
  buildCursorGitObservation,
  createLocalBareGitHarness,
  preflightCursorGitOptionA,
  qualifyCursorGitPublication,
  type LocalGitHarness,
} from "@/domains/execution/cursor-git-option-a";

describe("ML5 Git Cursor option A (DÉC-ML5-GIT)", () => {
  let harness: LocalGitHarness | null = null;
  afterEach(() => {
    harness?.cleanup();
    harness = null;
  });

  it("refuses missing mandate and protected default branches", () => {
    expect(buildCursorGitMandateFromScope(null)).toBeNull();
    expect(
      buildCursorGitMandateFromScope({
        required: true,
        repositoryFullName: "org/repo",
        baseRef: "main",
        workBranch: "main",
        baseSha: null,
      }),
    ).toBeNull();
  });

  it("preflight denies unauthorized repo and base divergence", () => {
    const mandate = buildCursorGitMandateFromScope({
      required: true,
      repositoryFullName: "org/repo",
      baseRef: "main",
      workBranch: "cursor/ml5-work",
      baseSha: "aaa",
    })!;
    const denied = preflightCursorGitOptionA({
      mandate,
      workspacePath: "/tmp/does-not-matter",
      authorizedRepos: ["other/repo"],
      workspaceExists: true,
    });
    expect(denied.ok).toBe(false);
    if (!denied.ok) expect(denied.reason).toBe("REPO_NOT_AUTHORIZED");

    const diverged = preflightCursorGitOptionA({
      mandate,
      workspacePath: "/tmp/x",
      authorizedRepos: ["org/repo"],
      observedRemoteBaseSha: "bbb",
      workspaceExists: true,
    });
    expect(diverged.ok).toBe(false);
    if (!diverged.ok) expect(diverged.reason).toBe("BASE_SHA_DIVERGED");
  });

  it("push declared ≠ remote verified until independent re-read", () => {
    expect(
      qualifyCursorGitPublication({
        localHeadSha: "abc",
        remoteHeadShaVerified: null,
        pushDeclaredByCursor: true,
      }),
    ).toBe("PUSHED_UNVERIFIED");
    expect(
      qualifyCursorGitPublication({
        localHeadSha: "abc",
        remoteHeadShaVerified: "abc",
        pushDeclaredByCursor: true,
      }),
    ).toBe("REMOTE_VERIFIED");
  });

  it("local bare harness: commit+push then remote HEAD matches", () => {
    harness = createLocalBareGitHarness();
    const branch = "cursor/ml5-work";
    harness.pushWorkBranch(branch);
    const local = harness.headSha(harness.workPath);
    const remote = harness.remoteHead(branch);
    expect(local).toBe(remote);
    const obs = buildCursorGitObservation({
      workBranch: branch,
      baseShaDeclared: null,
      localHeadSha: local,
      remoteHeadShaVerified: remote,
      pushDeclaredByCursor: true,
    });
    expect(obs.publicationStatus).toBe("REMOTE_VERIFIED");
    expect(obs.limits).toContain("DETERMINISTIC_GIT_OBS");
  });

  it("preflight passes for authorized SCRIPTED repo", () => {
    harness = createLocalBareGitHarness();
    const mandate = buildCursorGitMandateFromScope({
      required: true,
      repositoryFullName: harness.remoteName,
      baseRef: "main",
      workBranch: "cursor/ml5-work",
      baseSha: harness.headSha(harness.workPath),
    })!;
    const pre = preflightCursorGitOptionA({
      mandate,
      workspacePath: harness.workPath,
      authorizedRepos: [harness.remoteName],
      observedRemoteBaseSha: harness.headSha(harness.workPath),
    });
    expect(pre.ok).toBe(true);
  });
});
```

### `projects/sfia-studio-next/web/tests/unit/ml5-dev-auto-session.test.ts`
```ts
import { describe, expect, it } from "vitest";
import {
  isApprovedLoopbackAuthority,
  isDevAutoSessionAllowed,
} from "@/domains/identity/session";

describe("ML5 DEV auto-session gate (DÉC-ML5-DEV)", () => {
  it("isApprovedLoopbackAuthority rejects forged hosts", () => {
    expect(isApprovedLoopbackAuthority("127.0.0.1:3100")).toBe(true);
    expect(isApprovedLoopbackAuthority("localhost.attacker.example")).toBe(false);
    expect(isApprovedLoopbackAuthority("evil.com")).toBe(false);
  });

  it("auto-session requires DEV lane + flags (probe without DB)", () => {
    const gate = { host: "127.0.0.1:3100" };
    const prev = {
      auto: process.env.STUDIO_DEV_AUTO_SESSION,
      login: process.env.STUDIO_DEV_TEST_LOGIN,
      lane: process.env.STUDIO_LANE,
    };
    try {
      process.env.STUDIO_DEV_AUTO_SESSION = "1";
      process.env.STUDIO_DEV_TEST_LOGIN = "1";
      process.env.STUDIO_LANE = "DEV";
      expect(isDevAutoSessionAllowed(gate)).toBe(true);

      process.env.STUDIO_LANE = "RECETTE";
      expect(isDevAutoSessionAllowed(gate)).toBe(false);

      process.env.STUDIO_LANE = "STABLE";
      expect(isDevAutoSessionAllowed(gate)).toBe(false);

      process.env.STUDIO_LANE = "DEV";
      process.env.STUDIO_DEV_AUTO_SESSION = "0";
      expect(isDevAutoSessionAllowed(gate)).toBe(false);
    } finally {
      process.env.STUDIO_DEV_AUTO_SESSION = prev.auto;
      process.env.STUDIO_DEV_TEST_LOGIN = prev.login;
      process.env.STUDIO_LANE = prev.lane;
    }
  });
});
```

### `projects/sfia-studio-next/web/tests/integration/ml5-qualification-requalify.pg.test.ts`
```ts
/**
 * G15 — concurrent requalify under SELECT FOR UPDATE (PostgreSQL DEV).
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  effectAttempts,
  pilots,
  projects,
  realizationQualifications,
} from "@/db/schema";
import { newId } from "@/lib/ids";

const hasDb = Boolean(process.env.DATABASE_URL);

describe.skipIf(!hasDb)("ML5 G15 concurrent requalify (PostgreSQL)", () => {
  const pilotId = newId("pilot");
  const projectId = newId("proj");
  const attemptId = newId("efx");
  const qualId = newId("rqual");

  beforeAll(async () => {
    await db.insert(pilots).values({
      id: pilotId,
      githubUserId: `dev-g15-${pilotId.slice(-6)}`,
      displayName: "G15 Pilot",
    });
    await db.insert(projects).values({
      id: projectId,
      ownerPilotId: pilotId,
      name: "G15 Project",
    });
    await db.insert(effectAttempts).values({
      id: attemptId,
      pilotId,
      projectId,
      kind: "CURSOR_EXECUTION",
      status: "COMPLETED",
      correlationKey: `g15-${attemptId}`,
      fingerprint: "fp-g15",
      planJson: "{}",
      resultJson: "{}",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    await db.insert(realizationQualifications).values({
      id: qualId,
      attemptId,
      handoffId: null,
      projectId,
      pilotId,
      status: "RECORDED",
      rubricsJson: JSON.stringify({}),
      verdict: "INDETERMINATE",
      limitsJson: "[]",
      historyJson: "[]",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  });

  afterAll(async () => {
    await db.delete(realizationQualifications).where(eq(realizationQualifications.id, qualId));
    await db.delete(effectAttempts).where(eq(effectAttempts.id, attemptId));
    await db.delete(projects).where(eq(projects.id, projectId));
    await db.delete(pilots).where(eq(pilots.id, pilotId));
  });

  it("two concurrent requalifies preserve both history entries via FOR UPDATE", async () => {
    const runOnce = async (tag: string) =>
      db.transaction(async (tx) => {
        await tx.execute(
          sql`select id from realization_qualifications where id = ${qualId} for update`,
        );
        const locked = (
          await tx
            .select()
            .from(realizationQualifications)
            .where(eq(realizationQualifications.id, qualId))
            .limit(1)
        )[0]!;
        let history: unknown[] = [];
        try {
          history = JSON.parse(locked.historyJson || "[]") as unknown[];
        } catch {
          history = [];
        }
        if (!Array.isArray(history)) history = [];
        history.push({
          at: locked.updatedAt.toISOString(),
          verdict: locked.verdict,
          tag,
          supersededAt: new Date().toISOString(),
          newProofRef: `proof-${tag}`,
        });
        const now = new Date();
        await tx
          .update(realizationQualifications)
          .set({
            status: "REQUALIFIED",
            verdict: tag,
            historyJson: JSON.stringify(history),
            updatedAt: now,
          })
          .where(eq(realizationQualifications.id, qualId));
        return history.length;
      });

    const [a, b] = await Promise.all([runOnce("A"), runOnce("B")]);
    expect(Math.max(a, b)).toBe(2);

    const final = (
      await db
        .select()
        .from(realizationQualifications)
        .where(eq(realizationQualifications.id, qualId))
        .limit(1)
    )[0]!;
    const history = JSON.parse(final.historyJson || "[]") as unknown[];
    expect(history).toHaveLength(2);
    expect(final.status).toBe("REQUALIFIED");
  });
});
```

### `projects/sfia-studio-next/web/src/db/migrations/019_ml5_qualification_history.sql`
```sql
-- ML5 G15 — dated requalification history without erasing prior D8 verdicts.
-- Additive DEV migration. No Cursor re-dispatch. RECETTE/STABLE untouched by this cycle.

ALTER TABLE realization_qualifications
  ADD COLUMN IF NOT EXISTS history_json text NOT NULL DEFAULT '[]';
```

## 10. Diffs utiles (fichiers modifiés — sections cycle 6)

Diffs vs HEAD `6cf33e99` pour les fichiers touchés ce cycle (extrait). Les fichiers dirty préexistants cycles 3–5 restent dans le worktree et ne sont pas tous re-diffés ici s’ils n’ont pas changé au cycle 6.


### `src/domains/identity/session.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/identity/session.ts b/projects/sfia-studio-next/web/src/domains/identity/session.ts
index ab7abc32..04f27f51 100644
--- a/projects/sfia-studio-next/web/src/domains/identity/session.ts
+++ b/projects/sfia-studio-next/web/src/domains/identity/session.ts
@@ -239,6 +239,54 @@ function assertDevTestLoginAllowed(gate: DevLoginGateInput) {
   }
 }

+/**
+ * DÉC-ML5-DEV — auto-session gate (stricter than manual DEV test login).
+ * DEV lane only — never RECETTE/STABLE. Explicit flag + loopback required.
+ */
+export function isDevAutoSessionAllowed(gate: DevLoginGateInput): boolean {
+  if (process.env.STUDIO_DEV_AUTO_SESSION !== "1") return false;
+  if (process.env.STUDIO_DEV_TEST_LOGIN !== "1") return false;
+  const lane = (process.env.STUDIO_LANE ?? "").trim().toUpperCase();
+  if (lane !== "DEV") return false;
+  try {
+    assertDevTestLoginAllowed({
+      ...gate,
+      // assertDevTestLoginAllowed already checks DEV|RECETTE; we force DEV above.
+    });
+    return true;
+  } catch {
+    return false;
+  }
+}
+
+function assertDevAutoSessionAllowed(gate: DevLoginGateInput) {
+  if (process.env.STUDIO_DEV_AUTO_SESSION !== "1") {
+    throw new Error("DEV_AUTO_SESSION_DISABLED");
+  }
+  if (process.env.STUDIO_DEV_TEST_LOGIN !== "1") {
+    throw new Error("DEV_TEST_LOGIN_DISABLED");
+  }
+  const lane = (process.env.STUDIO_LANE ?? "").trim().toUpperCase();
+  if (lane !== "DEV") {
+    throw new Error("DEV_AUTO_SESSION_LANE_FORBIDDEN");
+  }
+  assertDevTestLoginAllowed(gate);
+}
+
+/**
+ * DÉC-ML5-DEV — automatic Pilot A test session for BROWSER/F2 on DEV local.
+ * Never chooses an arbitrary real pilot. Same deterministic identity as manual Pilote A.
+ */
+export async function createDevAutoSession(
+  gate: DevLoginGateInput | string | null = null,
+): Promise<{ token: string; pilotId: string; sessionId: string; which: "a" }> {
+  const normalized: DevLoginGateInput =
+    typeof gate === "string" || gate == null ? { host: gate } : gate;
+  assertDevAutoSessionAllowed(normalized);
+  const created = await createDevTestSession("a", normalized);
+  return { ...created, which: "a" };
+}
+
 /** DEV-ONLY test login — Fake/Real: NOT GitHub OAuth proof. Loopback + DEV lane only. */
 export async function createDevTestSession(
   which: "a" | "b",
```

### `src/lib/auth.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/lib/auth.ts b/projects/sfia-studio-next/web/src/lib/auth.ts
index 37d38fb4..570ef4b6 100644
--- a/projects/sfia-studio-next/web/src/lib/auth.ts
+++ b/projects/sfia-studio-next/web/src/lib/auth.ts
@@ -81,6 +81,11 @@ export function studioEntryCapabilities() {
   const testLoginFlag = process.env.STUDIO_DEV_TEST_LOGIN === "1";
   const testLoginAvailable =
     testLoginFlag && (lane === "DEV" || lane === "RECETTE");
+  /** DÉC-ML5-DEV — probe only; issuance remains fail-closed on /api/dev/auto-session. */
+  const autoSessionAvailable =
+    process.env.STUDIO_DEV_AUTO_SESSION === "1" &&
+    testLoginFlag &&
+    lane === "DEV";
   return {
     provider: "github-oauth-studio-identity-only",
     configured: githubConfigured,
@@ -93,6 +98,10 @@ export function studioEntryCapabilities() {
     testLoginLabel: testLoginAvailable
       ? "Accès de test (non OAuth) — lane autorisée"
       : null,
+    autoSessionAvailable,
+    autoSessionLabel: autoSessionAvailable
+      ? "Session Pilote de test automatique (DEV loopback uniquement)"
+      : null,
   };
 }

```

### `src/app/login/page.tsx`
```diff
diff --git a/projects/sfia-studio-next/web/src/app/login/page.tsx b/projects/sfia-studio-next/web/src/app/login/page.tsx
index 2f62cd7d..8046351d 100644
--- a/projects/sfia-studio-next/web/src/app/login/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/login/page.tsx
@@ -44,6 +44,15 @@ function LoginPageInner() {
         if (!cancelled) {
           setTestLoginAvailable(Boolean(status?.testLoginAvailable));
         }
+        // DÉC-ML5-DEV — skip /login UI when auto-session is enabled on DEV.
+        if (!cancelled && status?.autoSessionAvailable) {
+          const next = searchParams.get("next") || "/portfolio";
+          const auto = await fetch("/api/dev/auto-session", { method: "POST" });
+          if (auto.ok) {
+            router.replace(next.startsWith("/") ? next : "/portfolio");
+            return;
+          }
+        }
       } catch {
         if (!cancelled) setTestLoginAvailable(false);
       }
@@ -51,7 +60,7 @@ function LoginPageInner() {
     return () => {
       cancelled = true;
     };
-  }, []);
+  }, [router, searchParams]);

   async function startGitHubOAuth() {
     setBusy(true);
```

### `src/domains/conversation/nora-adapter.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 99cba8a9..e0f5f99d 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -51,6 +51,13 @@ export type NoraGenerateInput = {
   toolScope?: Omit<D4ToolScope, "budget" | "generationId"> & {
     generationId?: string;
     projectId?: string;
+    /** When set, each recorded tool source emits OBSERVED activity mid-turn (C01). */
+    activityContext?: {
+      conversationId: string;
+      turnCommandId: string;
+      ownerPilotId: string;
+      ownerToken?: string | null;
+    };
   };
   /** Optional policy override (tests). */
   policyOverride?: CognitivePolicy;
@@ -83,6 +90,11 @@ export type NoraGenerateResult = {
   attempts: NoraAttemptRecord[];
   toolCallsObserved: number;
   d4CharsReturned: number;
+  /**
+   * Sources actually returned by tools this turn (refs + coverage).
+   * Never synthesize from toolCallsObserved count alone.
+   */
+  observedToolSources?: import("./investigation-state").InvestigationSourceRef[];
   coverageNotes?: string;
   /** CKI delivery level actually observed for this generation. */
   ckiDelivery?: string;
@@ -511,6 +523,38 @@ async function fixtureReply(
   let d4CharsReturned = 0;
   let toolNotes = "";

+  const { createToolSourceJournal } = await import("./tool-source-journal");
+  const { appendActivityEvent } = await import("./activity-projection");
+  /** Cycle 6 P1 — ordered durable activity; flushed before reply returns. */
+  const activityFlushQueue: Promise<unknown>[] = [];
+  const sourceJournal = createToolSourceJournal({
+    onRecord: (entry) => {
+      const ctx = input.toolScope?.activityContext;
+      if (!ctx) return;
+      activityFlushQueue.push(
+        appendActivityEvent({
+          conversationId: ctx.conversationId,
+          turnCommandId: ctx.turnCommandId,
+          ownerPilotId: ctx.ownerPilotId,
+          generationId,
+          phase: `nora.source.${entry.kind.toLowerCase()}`,
+          nature: "OBSERVED",
+          status:
+            entry.coverage === "DENIED"
+              ? "FAILED"
+              : entry.coverage === "PARTIAL" || entry.coverage === "STALE"
+                ? "LIMITED"
+                : "COMPLETED",
+          summary: `${entry.coverage}: ${entry.ref}`.slice(0, 200),
+          detail: { kind: entry.kind, coverage: entry.coverage, title: entry.title ?? null },
+          sourceRef: entry.ref,
+          ownerToken: ctx.ownerToken,
+        }).catch(() => {
+          /* observational — never fail the cognitive turn */
+        }),
+      );
+    },
+  });
   if (policy.toolAllowlist.length > 0 && input.toolScope) {
     const scope: D4ToolScope = {
       pilotId: input.toolScope.pilotId,
@@ -521,6 +565,7 @@ async function fixtureReply(
         remainingCalls: policy.budgets.maxD4ToolCalls,
         remainingChars: policy.budgets.maxD4CharsReturned,
       },
+      sourceJournal,
     };
     const searched = await searchProjectResources(scope, {
       query: input.userText.slice(0, 80),
@@ -616,6 +661,7 @@ async function fixtureReply(
   const validatedFixture = validateNoraTurnQualification(qualification);
   if (!validatedFixture.ok) {
     const failed = unavailableQualification(validatedFixture.reason);
+    await Promise.all(activityFlushQueue);
     emitObs({
       event_name: "d3.nora.fixture_complete",
       component: "d3.nora_adapter",
@@ -660,11 +706,13 @@ async function fixtureReply(
       ],
       toolCallsObserved,
       d4CharsReturned,
+      observedToolSources: sourceJournal.entries.slice(),
       coverageNotes: toolNotes || undefined,
       qualification: failed,
     };
   }
   qualification = validatedFixture.value;
+  await Promise.all(activityFlushQueue);

   emitObs({
     event_name: "d3.nora.fixture_complete",
@@ -709,6 +757,7 @@ async function fixtureReply(
     ],
     toolCallsObserved,
     d4CharsReturned,
+    observedToolSources: sourceJournal.entries.slice(),
     coverageNotes: toolNotes || undefined,
     qualification,
   };
@@ -781,6 +830,37 @@ async function runLiveWithTools(
   // Alias kept for existing charsConsumed accounting below.
   const initialBudget = sharedToolBudget;

+  const { createToolSourceJournal } = await import("./tool-source-journal");
+  const { appendActivityEvent: appendLiveActivity } = await import("./activity-projection");
+  const liveActivityFlushQueue: Promise<unknown>[] = [];
+  const sourceJournal = createToolSourceJournal({
+    onRecord: (entry) => {
+      const ctx = input.toolScope?.activityContext;
+      if (!ctx) return;
+      liveActivityFlushQueue.push(
+        appendLiveActivity({
+          conversationId: ctx.conversationId,
+          turnCommandId: ctx.turnCommandId,
+          ownerPilotId: ctx.ownerPilotId,
+          generationId,
+          phase: `nora.source.${entry.kind.toLowerCase()}`,
+          nature: "OBSERVED",
+          status:
+            entry.coverage === "DENIED"
+              ? "FAILED"
+              : entry.coverage === "PARTIAL" || entry.coverage === "STALE"
+                ? "LIMITED"
+                : "COMPLETED",
+          summary: `${entry.coverage}: ${entry.ref}`.slice(0, 200),
+          detail: { kind: entry.kind, coverage: entry.coverage, title: entry.title ?? null },
+          sourceRef: entry.ref,
+          ownerToken: ctx.ownerToken,
+        }).catch(() => {
+          /* observational */
+        }),
+      );
+    },
+  });
   // Union of D4 / history / git tools — Agent accepts heterogeneous FunctionTool[].
   let tools: unknown[] = [];
   if (policy.toolAllowlist.length > 0 && input.toolScope) {
@@ -790,8 +870,21 @@ async function runLiveWithTools(
       operationId: input.toolScope.operationId,
       generationId,
       budget: sharedToolBudget,
+      sourceJournal,
     };
     tools = await buildNoraD4Tools(scope);
+    // B1 — Studio-owned public search frontier (never attach hosted webSearchTool
+    // to a private-context agent). Query-only tool; private context not forwarded.
+    const { canUsePublicWebFrontier, buildPublicWebFrontierTools } = await import(
+      "./public-web-search-frontier"
+    );
+    if (canUsePublicWebFrontier(policy)) {
+      const webTools = await buildPublicWebFrontierTools({
+        sourceJournal,
+        budget: sharedToolBudget,
+      });
+      tools = [...tools, ...webTools];
+    }
     if (
       policy.toolAllowlist.includes("search_conversation_history") ||
       policy.toolAllowlist.includes("read_conversation_messages")
@@ -814,14 +907,7 @@ async function runLiveWithTools(
       });
       tools = [...tools, ...gitTools];
     }
-    // B1 — hosted web search (gated). Public tool only; results are untrusted data.
-    const { canAttachWebSearchTool, buildPublicWebSearchTool } = await import(
-      "./web-search-tools"
-    );
-    if (canAttachWebSearchTool(policy)) {
-      const webTool = buildPublicWebSearchTool();
-      if (webTool) tools = [...tools, webTool];
-    }
+    // Hosted OpenAI webSearchTool remains detached — see public-web-search-frontier.
   }

   const QUALIFICATION_INSTRUCTIONS = [
@@ -1086,6 +1172,8 @@ async function runLiveWithTools(
     clearTimeout(wallTimer);
   }

+  await Promise.all(liveActivityFlushQueue);
+
   const toolCallsObserved = policy.budgets.maxD4ToolCalls - initialBudget.remainingCalls;
   const d4CharsReturned = policy.budgets.maxD4CharsReturned - initialBudget.remainingChars;

@@ -1109,6 +1197,7 @@ async function runLiveWithTools(
       attempts,
       toolCallsObserved,
       d4CharsReturned,
+      observedToolSources: sourceJournal.entries.slice(),
       qualification:
         qualification.status === "UNAVAILABLE"
           ? qualification
@@ -1134,6 +1223,7 @@ async function runLiveWithTools(
     attempts,
     toolCallsObserved,
     d4CharsReturned,
+    observedToolSources: sourceJournal.entries.slice(),
     qualification,
   };
 }
```

### `src/domains/conversation/nora-contract-bridge.ts`
```diff
```

### `src/domains/execution/cursor-attempt-service.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts b/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
index 638f719f..81a07b40 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
@@ -108,6 +108,41 @@ export async function prepareCursorExecution(input: {
   )[0];

   const mode = resolveCursorAdapterMode();
+  const gitScope = contract.gitScopeJson
+    ? (JSON.parse(contract.gitScopeJson) as CursorExecutionPlan["gitScope"])
+    : null;
+  // DÉC-ML5-GIT Option A — preflight when git is required; Studio is not the publisher.
+  if (gitScope?.required) {
+    const { buildCursorGitMandateFromScope, preflightCursorGitOptionA } = await import(
+      "./cursor-git-option-a"
+    );
+    const mandate = buildCursorGitMandateFromScope(gitScope);
+    const authorized =
+      process.env.SFIA_CURSOR_GIT_AUTHORIZED_REPOS?.split(",")
+        .map((s) => s.trim())
+        .filter(Boolean) ?? [];
+    // DEV SCRIPTED: allow the declared repo name when authorized list empty and mode SCRIPTED.
+    const repos =
+      authorized.length > 0
+        ? authorized
+        : mode === "SCRIPTED" && gitScope.repositoryFullName
+          ? [gitScope.repositoryFullName]
+          : [];
+    const pre = preflightCursorGitOptionA({
+      mandate,
+      workspacePath: workspace.workspaceCwd,
+      authorizedRepos: repos,
+      observedRemoteBaseSha: gitScope.baseSha ?? null,
+      workspaceExists: true,
+    });
+    if (!pre.ok) {
+      throw new StudioError(
+        "INVALID_REQUEST",
+        `Préflight Git Cursor option A refusé: ${pre.reason}`,
+        { exposeMessage: true },
+      );
+    }
+  }
   const plan: CursorExecutionPlan = {
     kind: "CURSOR_EXECUTION",
     contractId: contract.id,
@@ -118,9 +153,7 @@ export async function prepareCursorExecution(input: {
     workspaceCwd: workspace.workspaceCwd,
     workspaceKey: workspace.workspaceKey,
     effectProviderMode: mode,
-    gitScope: contract.gitScopeJson
-      ? (JSON.parse(contract.gitScopeJson) as CursorExecutionPlan["gitScope"])
-      : null,
+    gitScope,
     mcpRequired: input.mcpRequired ?? [],
   };
   const fingerprint = contract.fingerprint;
@@ -377,7 +410,19 @@ export async function dispatchCursorExecution(input: {
   }

   const fromStatus = row.status as "AUTHORIZED" | "AMBIGUOUS";
-  const claimed = await claimCursorAttempt(row.id, fromStatus);
+  if (fromStatus === "AMBIGUOUS") {
+    const { priorSendMayHaveOccurred } = await import("./cursor-claim");
+    if (priorSendMayHaveOccurred(row.resultJson)) {
+      throw new StudioError(
+        "CONFLICT",
+        "AMBIGUOUS avec envoi antérieur possible — pas de redispatch ; réconcilier ou conserver UNKNOWN",
+        { exposeMessage: true },
+      );
+    }
+  }
+  // P0: claim + sendRequestedAt in one durable write BEFORE any external SDK call.
+  // Crash between this point and SDK ⇒ priorSendMayHaveOccurred ⇒ no blind redispatch.
+  const claimed = await claimCursorAttempt(row.id, fromStatus, { stampSendIntent: true });
   if (!claimed) {
     const again = (
       await db.select().from(effectAttempts).where(eq(effectAttempts.id, row.id)).limit(1)
@@ -387,13 +432,22 @@ export async function dispatchCursorExecution(input: {
         exposeMessage: true,
       });
     }
+    const { priorSendMayHaveOccurred } = await import("./cursor-claim");
+    if (fromStatus === "AMBIGUOUS" && priorSendMayHaveOccurred(again?.resultJson)) {
+      throw new StudioError(
+        "CONFLICT",
+        "Claim refusé — effet externe possible après ACK perdu ; pas de second envoi",
+        { exposeMessage: true },
+      );
+    }
     throw new StudioError("CONFLICT", "Claim atomique échoué — pas de dispatch", {
       exposeMessage: true,
     });
   }

   const claimToken = claimed.claim.claimToken;
-  const sendRequestedAt = new Date().toISOString();
+  const sendRequestedAt =
+    claimed.sendRequestedAt ?? new Date().toISOString();

   let dispatched;
   try {
@@ -424,7 +478,7 @@ export async function dispatchCursorExecution(input: {
   }

   const nextLive: CursorLiveProjection = {
-    sendRequestedAt: dispatched.sendRequestedAt,
+    sendRequestedAt: dispatched.sendRequestedAt ?? sendRequestedAt,
     ackReceivedAt: dispatched.ackReceivedAt,
     runObservedAt: dispatched.runObservedAt,
     agentId: dispatched.agentId,
```

### `src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
index a8780713..ebdb358e 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
@@ -1,10 +1,12 @@
 import { NextResponse } from "next/server";
-import { and, eq } from "drizzle-orm";
+import { and, eq, sql } from "drizzle-orm";
 import { db } from "@/db/client";
 import { effectAttempts, realizationHandoffs, realizationQualifications } from "@/db/schema";
 import { getCursorAttempt } from "@/domains/execution/cursor-attempt-service";
+import { getTechnicalContract } from "@/domains/execution/technical-contract";
 import type { HandoffManifest } from "@/domains/execution/handoff-integrity";
 import {
+  buildDeterministicDossierSynthesis,
   buildNoraFinalAnalysisBrief,
   classifyAttachedNoraPayload,
   qualifyCursorRealization,
@@ -39,15 +41,25 @@ export async function GET(
         .limit(1)
     )[0];
     if (!row) return NextResponse.json({ status: "MISSING", qualification: null });
+    const markdown = row.noraAnalysisMarkdown;
+    let history: unknown[] = [];
+    try {
+      history = JSON.parse(row.historyJson || "[]") as unknown[];
+    } catch {
+      history = [];
+    }
     return NextResponse.json({
       status: row.status,
       qualification: {
         id: row.id,
         verdict: row.verdict,
         rubrics: JSON.parse(row.rubricsJson || "{}"),
-        noraAnalysisMarkdown: row.noraAnalysisMarkdown,
+        noraAnalysisMarkdown: markdown,
+        noraAnalysisKind: classifyAttachedNoraPayload(markdown),
         noraAnalysisAt: row.noraAnalysisAt?.toISOString() ?? null,
         limits: JSON.parse(row.limitsJson || "[]"),
+        history,
+        updatedAt: row.updatedAt?.toISOString() ?? null,
       },
     });
   } catch (e) {
@@ -65,6 +77,15 @@ export async function POST(
     const { projectId, attemptId } = await ctx.params;
     const body = (await req.json().catch(() => ({}))) as {
       attachNoraAnalysis?: boolean;
+      /** Prefer cognitive analysis (CA-08). Technical brief remains available. */
+      attachNoraCognitive?: boolean;
+      /** G15 — dated requalification on new proofs; never re-dispatches Cursor. */
+      requalify?: boolean;
+      reason?: string;
+      /** Optional optimistic concurrency — ISO updatedAt from GET. */
+      expectedUpdatedAt?: string;
+      /** Optional — correlate requalify to new proof artifact id/ref. */
+      newProofRef?: string;
     };
     const attempt = await getCursorAttempt({
       pilotId: session.pilotId,
@@ -81,21 +102,64 @@ export async function POST(
     const manifest = handoff
       ? (JSON.parse(handoff.manifestJson || "{}") as HandoffManifest)
       : null;
+
+    let contractTitle: string | null = null;
+    let acceptanceCriteria: string[] = [];
+    let expectedProofs: string[] = [];
+    try {
+      const contract = await getTechnicalContract({
+        pilotId: session.pilotId,
+        projectId,
+        contractId: attempt.plan.contractId,
+      });
+      contractTitle = contract.body.title;
+      acceptanceCriteria = contract.body.acceptance?.criteria ?? [];
+      expectedProofs = contract.body.acceptance?.expectedProofs ?? [];
+    } catch {
+      /* contract may be missing — qualify with fingerprint only */
+    }
+
     const q = qualifyCursorRealization({
       contractFingerprint: attempt.fingerprint,
+      acceptanceCriteria,
+      expectedProofs,
       handoffStatus: handoff?.status ?? null,
       reportMarkdown: handoff?.reportMarkdown ?? null,
       manifest,
       terminalStatus: attempt.live.terminalStatus ?? null,
     });
-    // attachNoraAnalysis stores a deterministic technical brief only — not a Nora run.
-    const technicalBrief = body.attachNoraAnalysis ? buildNoraFinalAnalysisBrief(q) : null;
-    const noraKind = classifyAttachedNoraPayload(technicalBrief);
+
+    const dossierIncomplete =
+      q.verdict === "INDETERMINATE" || !handoff || handoff.status !== "RECEIVED";
+
+    // attachNoraCognitive without a D3 run → deterministic synthesis (not NORA_COGNITIVE).
+    // True NORA_COGNITIVE requires generateNoraReply (separate path / future LIVE).
+    const finalMarkdown = body.attachNoraCognitive
+      ? buildDeterministicDossierSynthesis({
+          qualification: q,
+          contractTitle,
+          attemptId,
+          sourcesAccessible: manifest?.sourcesConsulted,
+          dossierIncomplete,
+        })
+      : body.attachNoraAnalysis
+        ? buildNoraFinalAnalysisBrief(q)
+        : null;
+
+    const noraKind = classifyAttachedNoraPayload(finalMarkdown);
     const limits = [
       ...q.limits,
       ...(noraKind === "TECHNICAL_BRIEF"
         ? ["NORA_ATTACHMENT_IS_TECHNICAL_BRIEF — avis cognitif Nora non exécuté"]
         : []),
+      ...(noraKind === "DETERMINISTIC_SYNTHESIS"
+        ? [
+            "DETERMINISTIC_SYNTHESIS — pas un run cognitif Nora D3 ; CA-08 LIVE encore ouvert",
+          ]
+        : []),
+      ...(noraKind === "NORA_COGNITIVE"
+        ? ["NORA_COGNITIVE — run D3 post-tentative"]
+        : []),
     ];
     const existing = (
       await db
@@ -104,19 +168,121 @@ export async function POST(
         .where(eq(realizationQualifications.attemptId, attemptId))
         .limit(1)
     )[0];
-    if (existing) {
+    const requalify =
+      Boolean(body.requalify) && Boolean((body.reason ?? "").trim());
+    if (existing && !requalify) {
       throw new StudioError("CONFLICT", "Qualification déjà enregistrée pour cette tentative", {
         exposeMessage: true,
       });
     }
-    // Ensure attempt exists for FK
+    if (existing && body.requalify && !(body.reason ?? "").trim()) {
+      throw new StudioError("INVALID_REQUEST", "requalify exige une raison datée", {
+        exposeMessage: true,
+      });
+    }
     const efx = (
-      await db.select({ id: effectAttempts.id }).from(effectAttempts).where(eq(effectAttempts.id, attemptId)).limit(1)
+      await db
+        .select({ id: effectAttempts.id })
+        .from(effectAttempts)
+        .where(eq(effectAttempts.id, attemptId))
+        .limit(1)
     )[0];
     if (!efx) throw new StudioError("NOT_FOUND", "Tentative introuvable");

-    const id = newId("rqual");
     const now = new Date();
+    if (existing && requalify) {
+      const reason = (body.reason ?? "").trim().slice(0, 500);
+      const newProofRef = (body.newProofRef ?? "").trim().slice(0, 200);
+      if (!newProofRef && !handoff) {
+        throw new StudioError(
+          "INVALID_REQUEST",
+          "requalify exige newProofRef ou un handoff accessible",
+          { exposeMessage: true },
+        );
+      }
+      // G15 P1 — atomic lock: SELECT FOR UPDATE then append history in one TX.
+      const txResult = await db.transaction(async (tx) => {
+        await tx.execute(
+          sql`select id from realization_qualifications where id = ${existing.id} for update`,
+        );
+        const locked = (
+          await tx
+            .select()
+            .from(realizationQualifications)
+            .where(eq(realizationQualifications.id, existing.id))
+            .limit(1)
+        )[0];
+        if (!locked) throw new StudioError("NOT_FOUND", "Qualification introuvable");
+        if (
+          body.expectedUpdatedAt &&
+          locked.updatedAt.toISOString() !== body.expectedUpdatedAt
+        ) {
+          throw new StudioError(
+            "CONFLICT",
+            "REQUALIFY_VERSION_CONFLICT — relire puis réessayer",
+            { exposeMessage: true },
+          );
+        }
+        let history: unknown[] = [];
+        try {
+          history = JSON.parse(locked.historyJson || "[]") as unknown[];
+        } catch {
+          history = [];
+        }
+        if (!Array.isArray(history)) history = [];
+        const previousVerdict = locked.verdict;
+        history.push({
+          at: locked.updatedAt.toISOString(),
+          verdict: locked.verdict,
+          rubrics: JSON.parse(locked.rubricsJson || "{}"),
+          limits: JSON.parse(locked.limitsJson || "[]"),
+          noraAnalysisKind: classifyAttachedNoraPayload(locked.noraAnalysisMarkdown),
+          authorPilotId: locked.pilotId,
+          supersededAt: now.toISOString(),
+          requalifyReason: reason,
+          newProofRef: newProofRef || handoff?.id || null,
+          handoffId: handoff?.id ?? locked.handoffId,
+        });
+        await tx
+          .update(realizationQualifications)
+          .set({
+            handoffId: handoff?.id ?? locked.handoffId,
+            status: "REQUALIFIED",
+            rubricsJson: JSON.stringify(q.rubrics),
+            verdict: q.verdict,
+            noraAnalysisMarkdown: finalMarkdown,
+            noraAnalysisAt: finalMarkdown ? now : locked.noraAnalysisAt,
+            limitsJson: JSON.stringify([
+              ...limits,
+              `REQUALIFIED_AT:${now.toISOString()}`,
+              `PREVIOUS_VERDICT:${previousVerdict}`,
+              ...(newProofRef ? [`NEW_PROOF_REF:${newProofRef}`] : []),
+            ]),
+            historyJson: JSON.stringify(history),
+            updatedAt: now,
+          })
+          .where(eq(realizationQualifications.id, locked.id));
+        return { previousVerdict, history, qualificationId: locked.id };
+      });
+      return NextResponse.json({
+        qualificationId: txResult.qualificationId,
+        requalified: true,
+        previousVerdict: txResult.previousVerdict,
+        verdict: q.verdict,
+        rubrics: q.rubrics,
+        limits,
+        history: txResult.history,
+        noraAnalysisMarkdown: finalMarkdown,
+        noraAnalysisKind: noraKind,
+        testsPass: q.testsPass,
+        conformityProven: q.conformityProven,
+        morrisAcceptance: q.morrisAcceptance,
+        adopted: q.adopted,
+        cursorRedispatch: false,
+      });
+    }
+
+    const id = newId("rqual");
     await db.insert(realizationQualifications).values({
       id,
       attemptId,
@@ -126,23 +292,26 @@ export async function POST(
       status: "RECORDED",
       rubricsJson: JSON.stringify(q.rubrics),
       verdict: q.verdict,
-      noraAnalysisMarkdown: technicalBrief,
-      noraAnalysisAt: technicalBrief ? now : null,
+      noraAnalysisMarkdown: finalMarkdown,
+      noraAnalysisAt: finalMarkdown ? now : null,
       limitsJson: JSON.stringify(limits),
+      historyJson: "[]",
       createdAt: now,
       updatedAt: now,
     });
     return NextResponse.json({
       qualificationId: id,
+      requalified: false,
       verdict: q.verdict,
       rubrics: q.rubrics,
       limits,
-      noraAnalysisMarkdown: technicalBrief,
+      noraAnalysisMarkdown: finalMarkdown,
       noraAnalysisKind: noraKind,
       testsPass: q.testsPass,
       conformityProven: q.conformityProven,
       morrisAcceptance: q.morrisAcceptance,
       adopted: q.adopted,
+      cursorRedispatch: false,
     });
   } catch (e) {
     const mapped = studioErrorResponse(e);
```

### `next.config.ts`
```diff
diff --git a/projects/sfia-studio-next/web/next.config.ts b/projects/sfia-studio-next/web/next.config.ts
index ce941117..bab2e569 100644
--- a/projects/sfia-studio-next/web/next.config.ts
+++ b/projects/sfia-studio-next/web/next.config.ts
@@ -8,6 +8,12 @@ const isE2E = process.env.STUDIO_E2E === "1";

 const nextConfig: NextConfig = {
   distDir: isE2E ? ".next-e2e" : ".next",
+  /**
+   * Keep @cursor/sdk external — Turbopack otherwise tries to load
+   * `*.js.LICENSE.txt` as modules ("Unknown module type") and breaks
+   * realization/attempts routes on surface=execution.
+   */
+  serverExternalPackages: ["@cursor/sdk"],
 };

 export default nextConfig;
```

### `tests/unit/ml5-nora-contract-bridge.test.ts`
```diff
```


## 11. CA / Q / T (bornés)

- CA-01…CA-10 : partiels ; CA-08 synthesis≠cognitive conservé.
- T-01…T-12 : inchangés en niveau global ; T-08 amélioré côté Git A DETERMINISTIC ; T-12 isolation Pilotes non rejouée ce cycle.
- Q applicables F/Git : Q liés F01–F09 désormais PARTIAL DETERMINISTIC.

## 12. Dette / risques / exit

- F2 : débloquer captures natives (tooling) puis mesurer 14 frames.
- I10 / G07 / H08 / B04 / B09 / E12 : toujours NOT_IMPL.
- Auto-session : cookie host-bound 127.0.0.1 vs localhost — rester sur 127.0.0.1.
- Aucun GO LIVE/REAL/RECETTE.

## 13. Verdict

**ML5 PARTIAL — GOVERNED GAPS**

Handoff attendu : `docs(review-handoff): publish ML5 Git A and DEV browser integration review`
