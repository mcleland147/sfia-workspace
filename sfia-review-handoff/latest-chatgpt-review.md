# SFIA Review Pack — ML5 Cycle 13 FULL
**Date/heure :** 2026-11-23 22:34 CET (2026-11-23T21:34:08Z)
**Cycle :** ML5 / C13 / CRITICAL DELIVERY / DEV LIVE
**Produit :** SFIA Studio Next — NO RELEASE / STABLE NOT AVAILABLE
**Publication code projet :** NON AUTORISÉE

---

## 1. Verdict

| Axe | Verdict |
|---|---|
| Fonctionnel | **ML5 DEV LIVE RESILIENCE PROVEN — QUALIFICATION IN PROGRESS** |
| Git | **PROJECT CANDIDATE READY FOR MORRIS GIT REVIEW** |

### Tableau résultats

| Résultat | Statut | Type de preuve | Référence | Réserve |
|---|---|---|---|---|
| Confinement D8 | **PASS** | Test réel unit+PG | `ml5-c13-d8-path-confine` 12 PASS ; `ml5-c13-d8-evidence-confine.pg` 8 PASS | Symlinks refusés même intra-root (fail-closed) |
| Lectures Nora | **PASS** | INTEGRATION journal | `sourceJournal` + tools SDK | LIVE Nora re-citation C13 non rejouée (C12 déjà) |
| Supervision durable | **PASS** | LIVE T-05 | `efx_53198bd9…` COMPLETED après 90s sans navigateur | In-process only — perte processus → resume-once |
| Reprise après interruption | **PASS** | LIVE | Identités agent/run stables ; double-dispatch idempotent | Redémarrage OS non rejoué ce cycle (resume code présent) |
| ACK perdu | **PASS** | DETERMINISTIC | C12 T-04 + unit C13 non-régression | REAL ACK-drop non rejoué (effet) |
| STOP LIVE | **PASS** | LIVE | `efx_03b99d0f…` LIVE_CANCEL_OBSERVED terminal cancelled | Provider cancel best-effort ; CANCEL≠ROLLBACK |
| Handoff D8 | **PASS** | INTEGRATION | Early INCOMPLETE limits ; tests sans capture → INCOMPLETE | |
| Qualification et Nora | **PARTIAL** | LIVE prior + code | C12 tools + C13 journal | Analyse Nora C13 non rejouée end-to-end |
| Non-régression | **PASS** | TEST | 72 unit ML5 ; 17 PG (dispatch+confine) | ESLint/build full non relancés |
| Candidat Git | **PREPARED** | INVENTORY | `ml5-candidat-git-inventaire-c13.md` ~89 dirty | Push interdit |

---

## 2. Git Truth Check

### Initial / final (inchangé HEAD)

| Champ | Valeur |
|---|---|
| pwd | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` |
| origin/main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| merge-base | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Dirty | ~89 porcelain (C3–C13) — préservés |
| origin projet branche | absente |
| Handoff tip pré-C13 | `45311f75` blob `a11adbf5` |

**Interdits respectés :** pas de reset/clean/stash/rebase/push projet/PR/merge.

---

## 3. Sources Git

- SFIA v2.6 / Studio Next gouvernance : `main@997897fd`
- Handoff C12 : `sfia/review-handoff@45311f75` / blob `a11adbf5`
- Décisions ML5 : branches documentaires candidates (non substituts de main)

---

## 4. Convergence Pre-check

Jalon R5 construction ML5. Acquis C9–C12 conservés. Écarts C12 fermés ou caractérisés :
- D8 symlink → **fermé** (tests réels)
- Traçabilité pièces → **fermé** (journal)
- Worker durable → **fermé** (supervisor in-process D7)
- STOP LIVE → **fermé** (observé)
- Handoff honesty → **amélioré**
- Candidat Git → **préparé** (pas poussé)

---

## 5. Blast radius

Sous `projects/sfia-studio-next/` uniquement : proofs D8, execution D7, conversation Nora wiring, handoff integrity, tests, scripts DEV, docs construction. Hors périmètre : SEF, roadmap normative, Figma F2 gate, RECETTE/STABLE, GitHub REAL.

---

## 6. Inventaire changements préexistants C3–C12

Voir dirty list complète §23 et `construction/ml5-candidat-git-inventaire-c13.md`. Accumulation préservée.

---

## 7. Fichiers créés / modifiés C13

### Créés
- `web/src/domains/proofs/d8-path-confine.ts`
- `web/src/domains/execution/cursor-live-supervisor.ts`
- `web/tests/unit/ml5-c13-d8-path-confine.test.ts`
- `web/tests/unit/ml5-c13-d8-tool-journal.test.ts`
- `web/tests/unit/ml5-c13-live-supervisor.test.ts`
- `web/tests/integration/ml5-c13-d8-evidence-confine.pg.test.ts`
- `web/scripts/ml5-c13-long-run-supervisor.mts`
- `web/scripts/ml5-c13-stop-live.mts`
- `web/scripts/ml5-c13-probe-mode.mts` (**EXCLUDED** candidat)
- `construction/ml5-candidat-git-inventaire-c13.md`

### Modifiés
- `d8-evidence-read.ts` — confine + journal
- `d8-evidence-tools-sdk.ts` — sourceJournal
- `nora-adapter.ts` — passe sourceJournal aux outils D8
- `cursor-attempt-service.ts` — ensure supervisor LIVE
- `cursor-handoff.ts` — early/tests honesty
- `handoff-integrity.ts` — classifyManifestHonesty
- `cursor-sdk-adapter.ts` — label supervision
- `delivery-history.md`, `ml5-registre…md` v0.8, `ml5-as-built…md`

---

## 8. Contenu intégral — nouveaux fichiers cœur

### 8.1 d8-path-confine.ts

```typescript
/**
 * C13 — physical workspace confinement for D8 file reads.
 * Lexical relative-path checks are insufficient: symlinks must not escape.
 */

import {
  closeSync,
  constants as fsConstants,
  fstatSync,
  lstatSync,
  openSync,
  readFileSync,
  realpathSync,
} from "node:fs";
import { join, normalize, relative, resolve, sep } from "node:path";

export const D8_MAX_FILE_BYTES = 256_000;

export type ConfineDenyReason =
  | "UNSAFE_RELATIVE_PATH"
  | "PATH_OUTSIDE_WORKSPACE"
  | "SYMLINK_ESCAPE"
  | "SYMLINK_COMPONENT"
  | "NOT_REGULAR_FILE"
  | "FILE_ABSENT"
  | "FILE_TOO_LARGE"
  | "ROOT_UNRESOLVABLE"
  | "OPEN_FAILED";

export type ConfineResult =
  | {
      ok: true;
      absolutePath: string;
      realPath: string;
      byteLength: number;
      bytes: Buffer;
    }
  | {
      ok: false;
      reason: ConfineDenyReason;
      detail?: string;
    };

function isInsideRoot(rootReal: string, candidateReal: string): boolean {
  if (candidateReal === rootReal) return true;
  const prefix = rootReal.endsWith(sep) ? rootReal : rootReal + sep;
  return candidateReal.startsWith(prefix);
}

/**
 * Resolve and open a relative path under workspaceRoot with symlink confinement.
 * Uses lstat on each path component + final open(O_NOFOLLOW) when available.
 */
export function readConfinedWorkspaceFile(
  workspaceRoot: string,
  relativePath: string,
  opts?: { maxBytes?: number },
): ConfineResult {
  const maxBytes = opts?.maxBytes ?? D8_MAX_FILE_BYTES;
  const rel = (relativePath || "").trim().replace(/^\/+/, "");
  if (
    !rel ||
    rel.includes("\0") ||
    rel.includes("..") ||
    rel.startsWith("~") ||
    rel.startsWith("/") ||
    normalize(rel) !== rel
  ) {
    return { ok: false, reason: "UNSAFE_RELATIVE_PATH" };
  }

  let rootReal: string;
  try {
    rootReal = realpathSync(resolve(workspaceRoot));
  } catch {
    return { ok: false, reason: "ROOT_UNRESOLVABLE" };
  }

  // Walk components: refuse any symlink component (intermediate or final via lstat).
  const parts = rel.split(/[/\\]+/).filter(Boolean);
  let cursor = rootReal;
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]!;
    if (part === "." || part === "..") {
      return { ok: false, reason: "UNSAFE_RELATIVE_PATH" };
    }
    const next = join(cursor, part);
    let lst;
    try {
      lst = lstatSync(next);
    } catch {
      return { ok: false, reason: "FILE_ABSENT", detail: rel };
    }
    if (lst.isSymbolicLink()) {
      // Resolve link target and require it stays inside rootReal.
      let targetReal: string;
      try {
        targetReal = realpathSync(next);
      } catch {
        return { ok: false, reason: "SYMLINK_ESCAPE", detail: "unresolvable symlink" };
      }
      if (!isInsideRoot(rootReal, targetReal)) {
        return { ok: false, reason: "SYMLINK_ESCAPE", detail: part };
      }
      // Intermediate symlink into root: follow for continuation but record refusal
      // of opaque escapes. Policy C13: refuse ALL symlinks for D8 Nora reads
      // (simpler, fail-closed) — no symlink components allowed.
      return { ok: false, reason: "SYMLINK_COMPONENT", detail: part };
    }
    if (i < parts.length - 1) {
      if (!lst.isDirectory()) {
        return { ok: false, reason: "NOT_REGULAR_FILE", detail: "non-directory component" };
      }
      cursor = next;
    } else {
      if (!lst.isFile()) {
        return { ok: false, reason: "NOT_REGULAR_FILE" };
      }
      if (lst.size > maxBytes) {
        return {
          ok: false,
          reason: "FILE_TOO_LARGE",
          detail: `size=${lst.size} max=${maxBytes}`,
        };
      }
      cursor = next;
    }
  }

  // Lexical candidate must still resolve under root (defense in depth).
  const lexical = resolve(join(rootReal, rel));
  const relCheck = relative(rootReal, lexical);
  if (relCheck.startsWith("..") || relCheck === "") {
    return { ok: false, reason: "PATH_OUTSIDE_WORKSPACE" };
  }

  let fd: number | null = null;
  try {
    const flags =
      typeof fsConstants.O_NOFOLLOW === "number"
        ? fsConstants.O_RDONLY | fsConstants.O_NOFOLLOW
        : fsConstants.O_RDONLY;
    fd = openSync(cursor, flags);
    const st = fstatSync(fd);
    if (!st.isFile()) {
      return { ok: false, reason: "NOT_REGULAR_FILE" };
    }
    if (st.size > maxBytes) {
      return {
        ok: false,
        reason: "FILE_TOO_LARGE",
        detail: `size=${st.size} max=${maxBytes}`,
      };
    }
    // Read via path after open succeeded — fd already proves no symlink at open time
    // when O_NOFOLLOW is set. Size bounded above.
    const bytes = readFileSync(fd);
    let realPath: string;
    try {
      realPath = realpathSync(cursor);
    } catch {
      realPath = cursor;
    }
    if (!isInsideRoot(rootReal, realPath)) {
      return { ok: false, reason: "SYMLINK_ESCAPE", detail: "realpath escaped after open" };
    }
    return {
      ok: true,
      absolutePath: cursor,
      realPath,
      byteLength: bytes.length,
      bytes,
    };
  } catch (e) {
    return {
      ok: false,
      reason: "OPEN_FAILED",
      detail: String((e as Error)?.message ?? e).slice(0, 120),
    };
  } finally {
    if (fd != null) {
      try {
        closeSync(fd);
      } catch {
        /* ignore */
      }
    }
  }
}

/** Test helper — does not read content. */
export function probeConfinedPath(
  workspaceRoot: string,
  relativePath: string,
): { ok: boolean; reason?: ConfineDenyReason } {
  const r = readConfinedWorkspaceFile(workspaceRoot, relativePath, { maxBytes: 1 });
  if (r.ok) return { ok: true };
  // FILE_TOO_LARGE still means path was confined and existed as regular file
  if (r.reason === "FILE_TOO_LARGE") return { ok: true };
  return { ok: false, reason: r.reason };
}

```

### 8.2 cursor-live-supervisor.ts

```typescript
/**
 * C13 — durable in-process observation for LIVE Cursor attempts.
 * Owner remains D7 (cursor-attempt-service). This is not a second orchestrator:
 * it only calls reconcileCursorExecution (observe / no resend) until terminal.
 *
 * Survives browser disconnect. Survives HTTP request end.
 * Process restart: call resumeDispatchedLiveSupervisors() (observation only).
 */

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts } from "@/db/schema";
import type { CursorExecutionPlan, CursorLiveProjection } from "./types";

export type LiveSupervisorHandle = {
  attemptId: string;
  pilotId: string;
  projectId: string;
  startedAt: string;
  ticks: number;
  stopped: boolean;
  stopReason?: string;
};

type SupervisorEntry = LiveSupervisorHandle & {
  timer: ReturnType<typeof setInterval> | null;
  runningTick: boolean;
};

type SupervisorGlobal = {
  __sfiaCursorLiveSupervisors?: Map<string, SupervisorEntry>;
  __sfiaCursorLiveSupervisorResumeOnce?: boolean;
};

const TICK_MS = 3_000;
const MAX_TICKS = 800; // ~40 min at 3s

function store(): Map<string, SupervisorEntry> {
  const g = globalThis as unknown as SupervisorGlobal;
  if (!g.__sfiaCursorLiveSupervisors) {
    g.__sfiaCursorLiveSupervisors = new Map();
  }
  return g.__sfiaCursorLiveSupervisors;
}

function parseLive(resultJson: string | null | undefined): CursorLiveProjection {
  try {
    return JSON.parse(resultJson || "{}") as CursorLiveProjection;
  } catch {
    return {};
  }
}

function isTerminalStatus(status: string, live: CursorLiveProjection): boolean {
  if (status === "COMPLETED" || status === "FAILED" || status === "AMBIGUOUS") {
    return true;
  }
  const t = live.terminalStatus;
  return t === "finished" || t === "error" || t === "cancelled";
}

async function tickOnce(entry: SupervisorEntry): Promise<void> {
  if (entry.stopped || entry.runningTick) return;
  entry.runningTick = true;
  entry.ticks += 1;
  try {
    const { reconcileCursorExecution } = await import("./cursor-attempt-service");
    const result = await reconcileCursorExecution({
      pilotId: entry.pilotId,
      projectId: entry.projectId,
      attemptId: entry.attemptId,
    });
    if (
      isTerminalStatus(result.status, result.live) ||
      entry.ticks >= MAX_TICKS
    ) {
      stopCursorLiveSupervisor(
        entry.attemptId,
        entry.ticks >= MAX_TICKS ? "MAX_TICKS" : "TERMINAL",
      );
    }
  } catch (e) {
    // Provider errors: keep supervising; annotate via reconcile path when possible.
    if (entry.ticks >= MAX_TICKS) {
      stopCursorLiveSupervisor(entry.attemptId, "MAX_TICKS_AFTER_ERROR");
    }
    void e;
  } finally {
    entry.runningTick = false;
  }
}

/**
 * Start (or no-op if already active) a durable observer for a LIVE DISPATCHED attempt.
 * Never sends a second Cursor dispatch.
 */
export function ensureCursorLiveSupervisor(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
}): { started: boolean; alreadyActive: boolean; handle: LiveSupervisorHandle } {
  const map = store();
  const existing = map.get(input.attemptId);
  if (existing && !existing.stopped) {
    return {
      started: false,
      alreadyActive: true,
      handle: {
        attemptId: existing.attemptId,
        pilotId: existing.pilotId,
        projectId: existing.projectId,
        startedAt: existing.startedAt,
        ticks: existing.ticks,
        stopped: existing.stopped,
        stopReason: existing.stopReason,
      },
    };
  }

  const entry: SupervisorEntry = {
    attemptId: input.attemptId,
    pilotId: input.pilotId,
    projectId: input.projectId,
    startedAt: new Date().toISOString(),
    ticks: 0,
    stopped: false,
    timer: null,
    runningTick: false,
  };
  map.set(input.attemptId, entry);

  // Immediate first tick (async) then interval — independent of HTTP/browser.
  void tickOnce(entry);
  entry.timer = setInterval(() => {
    void tickOnce(entry);
  }, TICK_MS);
  // Allow process to exit in tests if only timer remains (unref).
  if (typeof entry.timer === "object" && entry.timer && "unref" in entry.timer) {
    try {
      (entry.timer as NodeJS.Timeout).unref();
    } catch {
      /* ignore */
    }
  }

  return {
    started: true,
    alreadyActive: false,
    handle: {
      attemptId: entry.attemptId,
      pilotId: entry.pilotId,
      projectId: entry.projectId,
      startedAt: entry.startedAt,
      ticks: entry.ticks,
      stopped: entry.stopped,
    },
  };
}

export function stopCursorLiveSupervisor(
  attemptId: string,
  reason = "STOPPED",
): boolean {
  const map = store();
  const entry = map.get(attemptId);
  if (!entry) return false;
  entry.stopped = true;
  entry.stopReason = reason;
  if (entry.timer) {
    clearInterval(entry.timer);
    entry.timer = null;
  }
  return true;
}

export function getCursorLiveSupervisor(
  attemptId: string,
): LiveSupervisorHandle | null {
  const entry = store().get(attemptId);
  if (!entry) return null;
  return {
    attemptId: entry.attemptId,
    pilotId: entry.pilotId,
    projectId: entry.projectId,
    startedAt: entry.startedAt,
    ticks: entry.ticks,
    stopped: entry.stopped,
    stopReason: entry.stopReason,
  };
}

export function listActiveCursorLiveSupervisors(): LiveSupervisorHandle[] {
  return [...store().values()]
    .filter((e) => !e.stopped)
    .map((e) => ({
      attemptId: e.attemptId,
      pilotId: e.pilotId,
      projectId: e.projectId,
      startedAt: e.startedAt,
      ticks: e.ticks,
      stopped: e.stopped,
      stopReason: e.stopReason,
    }));
}

/**
 * After process restart: re-attach observers for LIVE DISPATCHED attempts that
 * already have runId (ACK received). Observation only — never redispatch.
 */
export async function resumeDispatchedLiveSupervisors(): Promise<{
  resumed: number;
  skipped: number;
  attemptIds: string[];
}> {
  const rows = await db
    .select({
      id: effectAttempts.id,
      pilotId: effectAttempts.pilotId,
      projectId: effectAttempts.projectId,
      planJson: effectAttempts.planJson,
      resultJson: effectAttempts.resultJson,
      status: effectAttempts.status,
    })
    .from(effectAttempts)
    .where(
      and(
        eq(effectAttempts.status, "DISPATCHED"),
        eq(effectAttempts.kind, "CURSOR_EXECUTION"),
      ),
    );

  let resumed = 0;
  let skipped = 0;
  const attemptIds: string[] = [];
  for (const row of rows) {
    let plan: CursorExecutionPlan;
    try {
      plan = JSON.parse(row.planJson) as CursorExecutionPlan;
    } catch {
      skipped += 1;
      continue;
    }
    if (plan.effectProviderMode !== "LIVE") {
      skipped += 1;
      continue;
    }
    const live = parseLive(row.resultJson);
    if (!live.runId) {
      // ACK lost / no handle — leave AMBIGUOUS path to reconcile; do not supervise blindly.
      skipped += 1;
      continue;
    }
    const r = ensureCursorLiveSupervisor({
      pilotId: row.pilotId,
      projectId: row.projectId,
      attemptId: row.id,
    });
    if (r.started) {
      resumed += 1;
      attemptIds.push(row.id);
    } else {
      skipped += 1;
    }
  }
  return { resumed, skipped, attemptIds };
}

/** Idempotent once-per-process resume hook for server boot / first request. */
export async function ensureLiveSupervisorsResumedOnce(): Promise<void> {
  const g = globalThis as unknown as SupervisorGlobal;
  if (g.__sfiaCursorLiveSupervisorResumeOnce) return;
  g.__sfiaCursorLiveSupervisorResumeOnce = true;
  try {
    await resumeDispatchedLiveSupervisors();
  } catch {
    // Boot resume must not crash request path.
    g.__sfiaCursorLiveSupervisorResumeOnce = false;
  }
}

```

### 8.3 Tests unit confinement (intégral)

```typescript
/**
 * C13 — real physical confinement tests against readConfinedWorkspaceFile
 * (the same path used by readAttemptWorkspaceFile after attempt/scope checks).
 */
import { describe, expect, it, beforeEach, afterEach } from "vitest";
import {
  mkdirSync,
  writeFileSync,
  rmSync,
  symlinkSync,
  existsSync,
} from "node:fs";
import { join } from "node:path";
import {
  D8_MAX_FILE_BYTES,
  readConfinedWorkspaceFile,
} from "@/domains/proofs/d8-path-confine";

const ROOT = "/tmp/sfia-c13-d8-confine-ws";
const OUTSIDE = "/tmp/sfia-c13-d8-outside-secret.txt";

describe("ML5 C13 D8 path confinement (realpath/lstat/O_NOFOLLOW)", () => {
  beforeEach(() => {
    rmSync(ROOT, { recursive: true, force: true });
    mkdirSync(ROOT, { recursive: true });
    writeFileSync(OUTSIDE, "SECRET_OUTSIDE_WORKSPACE\n");
    writeFileSync(join(ROOT, "allowed.txt"), "C13-ALLOWED-OK\n");
    mkdirSync(join(ROOT, "sub"), { recursive: true });
    writeFileSync(join(ROOT, "sub", "nested.txt"), "nested-ok\n");
  });

  afterEach(() => {
    rmSync(ROOT, { recursive: true, force: true });
    try {
      rmSync(OUTSIDE, { force: true });
    } catch {
      /* ignore */
    }
  });

  it("1 — allowed text file under workspace succeeds", () => {
    const r = readConfinedWorkspaceFile(ROOT, "allowed.txt");
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.bytes.toString("utf8")).toContain("C13-ALLOWED-OK");
      expect(r.byteLength).toBeGreaterThan(0);
    }
  });

  it("2 — relative traversal is refused", () => {
    const r = readConfinedWorkspaceFile(ROOT, "../sfia-c13-d8-outside-secret.txt");
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("UNSAFE_RELATIVE_PATH");
  });

  it("3 — absolute-looking path after strip still refused by lexical rules", () => {
    // Caller strips absolute; confinement still refuses .. and empty
    const r = readConfinedWorkspaceFile(ROOT, "");
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("UNSAFE_RELATIVE_PATH");
  });

  it("4 — symlink to file outside workspace is refused", () => {
    symlinkSync(OUTSIDE, join(ROOT, "escape-link.txt"));
    const r = readConfinedWorkspaceFile(ROOT, "escape-link.txt");
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(["SYMLINK_ESCAPE", "SYMLINK_COMPONENT"]).toContain(r.reason);
    }
    // Content must not leak even on deny
    expect(JSON.stringify(r)).not.toContain("SECRET_OUTSIDE");
  });

  it("5 — intermediate directory symlink escape is refused", () => {
    const evilDir = "/tmp/sfia-c13-d8-evil-dir";
    rmSync(evilDir, { recursive: true, force: true });
    mkdirSync(evilDir, { recursive: true });
    writeFileSync(join(evilDir, "leaked.txt"), "LEAKED_VIA_DIR_SYMLINK\n");
    symlinkSync(evilDir, join(ROOT, "evil-sub"));
    const r = readConfinedWorkspaceFile(ROOT, "evil-sub/leaked.txt");
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(["SYMLINK_ESCAPE", "SYMLINK_COMPONENT"]).toContain(r.reason);
    }
    expect(JSON.stringify(r)).not.toContain("LEAKED_VIA_DIR");
    rmSync(evilDir, { recursive: true, force: true });
  });

  it("6 — oversized file is refused before full load", () => {
    const big = join(ROOT, "huge.bin");
    // Write slightly over max without holding full string in test assert content
    const chunk = Buffer.alloc(64_000, 0x41);
    const fdParts: Buffer[] = [];
    let total = 0;
    while (total <= D8_MAX_FILE_BYTES) {
      fdParts.push(chunk);
      total += chunk.length;
    }
    writeFileSync(big, Buffer.concat(fdParts));
    const r = readConfinedWorkspaceFile(ROOT, "huge.bin");
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("FILE_TOO_LARGE");
  });

  it("7 — binary null byte files still open at confine layer (caller refuses)", () => {
    writeFileSync(join(ROOT, "bin.dat"), Buffer.from([0x00, 0x01, 0x02, 0xff]));
    const r = readConfinedWorkspaceFile(ROOT, "bin.dat");
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.bytes.includes(0)).toBe(true);
  });

  it("8 — nested allowed path works", () => {
    const r = readConfinedWorkspaceFile(ROOT, "sub/nested.txt");
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.bytes.toString("utf8")).toContain("nested-ok");
  });

  it("9 — missing file → FILE_ABSENT", () => {
    const r = readConfinedWorkspaceFile(ROOT, "no-such.txt");
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("FILE_ABSENT");
  });

  it("10 — invalid / missing root → ROOT_UNRESOLVABLE", () => {
    const r = readConfinedWorkspaceFile("/tmp/sfia-c13-no-such-root-xyz", "a.txt");
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("ROOT_UNRESOLVABLE");
  });

  it("11 — null byte in path refused", () => {
    const r = readConfinedWorkspaceFile(ROOT, "allowe\0d.txt");
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("UNSAFE_RELATIVE_PATH");
  });

  it("fixture still present after denials", () => {
    expect(existsSync(join(ROOT, "allowed.txt"))).toBe(true);
  });
});

```

### 8.4 Test PG confinement (intégral)

```typescript
/**
 * C13 — real D8 reader path (loadAttempt + readConfinedWorkspaceFile) against DEV PG.
 * Proves: allowed read, traversal/absolute/symlink deny, wrong pilot/project deny, budget.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import {
  mkdirSync,
  writeFileSync,
  symlinkSync,
  rmSync,
  existsSync,
} from "fs";
import { join } from "path";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts, pilots, preparations } from "@/db/schema";
import {
  readAttemptWorkspaceFile,
  listRealizationEvidence,
} from "@/domains/proofs/d8-evidence-read";
import { createToolSourceJournal } from "@/domains/conversation/tool-source-journal";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { newId } from "@/lib/ids";

const WS = "/tmp/sfia-c13-d8-pg-ws";
const OUTSIDE = "/tmp/sfia-c13-d8-pg-outside.txt";

describe("PostgreSQL ML5 C13 D8 evidence confinement (real reader)", () => {
  let pilotId = "";
  let otherPilotId = "";
  let projectId = "";
  let otherProjectId = "";
  let attemptId = "";

  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    rmSync(WS, { recursive: true, force: true });
    mkdirSync(WS, { recursive: true });
    writeFileSync(join(WS, "ok.txt"), "C13-PG-ALLOWED\n");
    writeFileSync(OUTSIDE, "SECRET_PG_OUTSIDE\n");
    symlinkSync(OUTSIDE, join(WS, "escape.txt"));

    pilotId = newId("pilot");
    otherPilotId = newId("pilot");
    await db.insert(pilots).values([
      { id: pilotId, displayName: "c13-d8-a", githubUserId: `gh-${pilotId}` },
      { id: otherPilotId, displayName: "c13-d8-b", githubUserId: `gh-${otherPilotId}` },
    ]);

    const labelA = `c13-d8-${newId("nm").slice(-6)}`;
    const prep = await openOrCreatePreparation(pilotId);
    await updatePreview(pilotId, prep.id, labelA, "s");
    const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0]!;
    const created = await createProjectCommand({
      pilotId,
      preparationId: prep.id,
      expectedCreationRevision: refreshed.creationRevision,
      projectName: labelA,
      previewSummary: "s",
      idempotencyKey: newId("idem"),
    });
    if (!("projectId" in created) || !created.projectId) throw new Error(JSON.stringify(created));
    projectId = created.projectId;

    const labelB = `c13-d8b-${newId("nm").slice(-6)}`;
    const prep2 = await openOrCreatePreparation(otherPilotId);
    await updatePreview(otherPilotId, prep2.id, labelB, "s");
    const refreshed2 = (
      await db.select().from(preparations).where(eq(preparations.id, prep2.id))
    )[0]!;
    const created2 = await createProjectCommand({
      pilotId: otherPilotId,
      preparationId: prep2.id,
      expectedCreationRevision: refreshed2.creationRevision,
      projectName: labelB,
      previewSummary: "s",
      idempotencyKey: newId("idem"),
    });
    if (!("projectId" in created2) || !created2.projectId) {
      throw new Error(JSON.stringify(created2));
    }
    otherProjectId = created2.projectId;

    attemptId = newId("efx");
    const plan = {
      kind: "CURSOR_EXECUTION",
      contractId: "ctc_c13",
      contractVersion: 1,
      contractFingerprint: "fp_c13",
      instructionFingerprint: "ifp_c13",
      workspaceCwd: WS,
      workspaceKey: "default",
      effectProviderMode: "SCRIPTED",
    };
    await db.insert(effectAttempts).values({
      id: attemptId,
      projectId,
      pilotId,
      kind: "CURSOR_EXECUTION",
      status: "COMPLETED",
      fingerprint: "fp_c13",
      planJson: JSON.stringify(plan),
      resultJson: JSON.stringify({ terminalStatus: "finished" }),
      correlationKey: `c13-d8-${attemptId}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }, 60_000);

  it("allowed file under workspace — CONSULTED + journal", async () => {
    const journal = createToolSourceJournal();
    const r = await readAttemptWorkspaceFile(
      {
        pilotId,
        projectId,
        attemptId,
        budget: { remainingCalls: 5, remainingChars: 50_000 },
        sourceJournal: journal,
      },
      "ok.txt",
    );
    expect(r.coverage).toBe("CONSULTED");
    expect(r.content).toContain("C13-PG-ALLOWED");
    expect(journal.entries.some((e) => e.coverage === "CONSULTED")).toBe(true);
  });

  it("relative traversal — DENIED", async () => {
    const r = await readAttemptWorkspaceFile(
      {
        pilotId,
        projectId,
        attemptId,
        budget: { remainingCalls: 5, remainingChars: 50_000 },
      },
      "../sfia-c13-d8-pg-outside.txt",
    );
    expect(r.coverage).toBe("DENIED");
    expect(JSON.stringify(r)).not.toContain("SECRET_PG");
  });

  it("absolute path — DENIED", async () => {
    const r = await readAttemptWorkspaceFile(
      {
        pilotId,
        projectId,
        attemptId,
        budget: { remainingCalls: 5, remainingChars: 50_000 },
      },
      OUTSIDE,
    );
    expect(r.coverage).toBe("DENIED");
    expect(r.reason).toMatch(/ABSOLUTE|UNSAFE/);
    expect(JSON.stringify(r)).not.toContain("SECRET_PG");
  });

  it("symlink escape — DENIED without content leak", async () => {
    expect(existsSync(join(WS, "escape.txt"))).toBe(true);
    const r = await readAttemptWorkspaceFile(
      {
        pilotId,
        projectId,
        attemptId,
        budget: { remainingCalls: 5, remainingChars: 50_000 },
      },
      "escape.txt",
    );
    expect(r.coverage).toBe("DENIED");
    expect(r.reason).toMatch(/SYMLINK/);
    expect(JSON.stringify(r)).not.toContain("SECRET_PG");
  });

  it("wrong pilot — DENIED", async () => {
    const r = await readAttemptWorkspaceFile(
      {
        pilotId: otherPilotId,
        projectId,
        attemptId,
        budget: { remainingCalls: 5, remainingChars: 50_000 },
      },
      "ok.txt",
    );
    expect(r.coverage).toBe("DENIED");
    expect(r.reason).toBe("ATTEMPT_NOT_IN_SCOPE");
    expect(r.content).toBeNull();
  });

  it("wrong project — DENIED", async () => {
    const r = await readAttemptWorkspaceFile(
      {
        pilotId,
        projectId: otherProjectId,
        attemptId,
        budget: { remainingCalls: 5, remainingChars: 50_000 },
      },
      "ok.txt",
    );
    expect(r.coverage).toBe("DENIED");
    expect(r.reason).toBe("ATTEMPT_NOT_IN_SCOPE");
  });

  it("budget exhausted — DENIED", async () => {
    const r = await readAttemptWorkspaceFile(
      {
        pilotId,
        projectId,
        attemptId,
        budget: { remainingCalls: 0, remainingChars: 50_000 },
      },
      "ok.txt",
    );
    expect(r.coverage).toBe("DENIED");
    expect(r.reason).toBe("D8_TOOL_BUDGET_EXHAUSTED");
  });

  it("list metadata only — DISCOVERED in journal, not CONSULTED content", async () => {
    const journal = createToolSourceJournal();
    const r = await listRealizationEvidence({
      pilotId,
      projectId,
      attemptId,
      budget: { remainingCalls: 3, remainingChars: 50_000 },
      sourceJournal: journal,
    });
    expect(r.coverage).toBe("OPENED");
    expect(journal.entries[0]?.coverage).toBe("DISCOVERED");
    expect(journal.entries[0]?.notes).toMatch(/metadata only/i);
  });
});

```

### 8.5 Journal + honesty unit

```typescript
/**
 * C13 — D8 per-tool provenance journal (not mere toolCallsObserved).
 * Exercises journal wiring via confine layer + recordToolSource semantics.
 */
import { describe, expect, it } from "vitest";
import {
  createToolSourceJournal,
  recordToolSource,
} from "@/domains/conversation/tool-source-journal";
import { classifyManifestHonesty } from "@/domains/execution/handoff-integrity";

describe("ML5 C13 D8 tool journal + handoff honesty", () => {
  it("records distinct piece refs with coverage — not just call counts", () => {
    const journal = createToolSourceJournal();
    recordToolSource(journal, {
      kind: "DOCUMENT",
      ref: "d8:list_realization_evidence:efx_1",
      coverage: "DISCOVERED",
      notes: "metadata only",
    });
    recordToolSource(journal, {
      kind: "DOCUMENT",
      ref: "d8:read_attempt_workspace_file:RESULT.txt",
      coverage: "CONSULTED",
      versionOrSha: "abc",
    });
    recordToolSource(journal, {
      kind: "DOCUMENT",
      ref: "d8:read_attempt_workspace_file:secret.env",
      coverage: "DENIED",
      notes: "secret refused",
    });
    recordToolSource(journal, {
      kind: "DOCUMENT",
      ref: "d8:read_evidence_capture_meta:ecap_1",
      coverage: "DISCOVERED",
      notes: "metadata opened — binary content not consulted",
    });
    expect(journal.entries).toHaveLength(4);
    const consulted = journal.entries.filter((e) => e.coverage === "CONSULTED");
    const denied = journal.entries.filter((e) => e.coverage === "DENIED");
    const discovered = journal.entries.filter((e) => e.coverage === "DISCOVERED");
    expect(consulted).toHaveLength(1);
    expect(denied).toHaveLength(1);
    expect(discovered).toHaveLength(2);
    // Listing ≠ content consultation
    expect(
      journal.entries.find((e) => e.ref.includes("list_realization"))?.coverage,
    ).toBe("DISCOVERED");
  });

  it("upgrades coverage for same ref without duplicating", () => {
    const journal = createToolSourceJournal();
    recordToolSource(journal, {
      kind: "DOCUMENT",
      ref: "d8:read_realization_handoff_report:rhf_1",
      coverage: "PARTIAL",
    });
    recordToolSource(journal, {
      kind: "DOCUMENT",
      ref: "d8:read_realization_handoff_report:rhf_1",
      coverage: "CONSULTED",
    });
    expect(journal.entries).toHaveLength(1);
    expect(journal.entries[0]!.coverage).toBe("CONSULTED");
  });

  it("RESULT file alone does not verify announced unit tests", () => {
    const h = classifyManifestHonesty({
      filesCreated: ["RESULT_C12.txt", "src/add.ts"],
      filesObserved: ["RESULT_C12.txt", "src/add.ts"],
      testsExecuted: ["node --test src/add.test.mjs"],
      testsCaptured: [],
    });
    expect(h.canClaimVerifiedTests).toBe(false);
    expect(h.notes).toContain("TESTS_ANNOUNCED_WITHOUT_CAPTURE");
  });

  it("captured test output allows verified claim", () => {
    const h = classifyManifestHonesty({
      filesObserved: ["src/add.ts"],
      testsExecuted: ["node --test"],
      testsCaptured: ["stdout:C12_TEST_OK exit=0"],
    });
    expect(h.canClaimVerifiedTests).toBe(true);
  });
});
```

### 8.6 Supervisor unit
```typescript
/**
 * C13 — durable supervisor registry: single observer per attempt, stop/fencing.
 * Does not call Cursor SDK (no LIVE provider in unit).
 */
import { describe, expect, it, beforeEach, afterEach, vi } from "vitest";

describe("ML5 C13 cursor live supervisor registry", () => {
  beforeEach(() => {
    vi.resetModules();
    const g = globalThis as unknown as {
      __sfiaCursorLiveSupervisors?: Map<string, unknown>;
      __sfiaCursorLiveSupervisorResumeOnce?: boolean;
    };
    g.__sfiaCursorLiveSupervisors = undefined;
    g.__sfiaCursorLiveSupervisorResumeOnce = undefined;
  });

  afterEach(() => {
    vi.resetModules();
  });

  it("starts once per attemptId — second ensure is alreadyActive", async () => {
    vi.doMock("@/domains/execution/cursor-attempt-service", () => ({
      reconcileCursorExecution: vi.fn(async () => ({
        status: "DISPATCHED",
        live: { terminalStatus: null, runId: "run_x" },
      })),
    }));
    const mod = await import("@/domains/execution/cursor-live-supervisor");
    const a = mod.ensureCursorLiveSupervisor({
      pilotId: "p1",
      projectId: "proj1",
      attemptId: "efx_sup_1",
    });
    const b = mod.ensureCursorLiveSupervisor({
      pilotId: "p1",
      projectId: "proj1",
      attemptId: "efx_sup_1",
    });
    expect(a.started).toBe(true);
    expect(b.alreadyActive).toBe(true);
    expect(mod.listActiveCursorLiveSupervisors()).toHaveLength(1);
    mod.stopCursorLiveSupervisor("efx_sup_1", "TEST");
    expect(mod.getCursorLiveSupervisor("efx_sup_1")?.stopped).toBe(true);
    expect(mod.listActiveCursorLiveSupervisors()).toHaveLength(0);
  });

  it("two attemptIds do not contaminate", async () => {
    vi.doMock("@/domains/execution/cursor-attempt-service", () => ({
      reconcileCursorExecution: vi.fn(async () => ({
        status: "DISPATCHED",
        live: { terminalStatus: null },
      })),
    }));
    const mod = await import("@/domains/execution/cursor-live-supervisor");
    mod.ensureCursorLiveSupervisor({
      pilotId: "p1",
      projectId: "proj1",
      attemptId: "efx_a",
    });
    mod.ensureCursorLiveSupervisor({
      pilotId: "p2",
      projectId: "proj2",
      attemptId: "efx_b",
    });
    expect(mod.listActiveCursorLiveSupervisors()).toHaveLength(2);
    mod.stopCursorLiveSupervisor("efx_a");
    expect(mod.listActiveCursorLiveSupervisors().map((h) => h.attemptId)).toEqual([
      "efx_b",
    ]);
    mod.stopCursorLiveSupervisor("efx_b");
  });
});
```

### 8.7 Inventaire candidat
```markdown
# ML5 — Inventaire candidat Git C3–C13

| Champ | Valeur |
|---|---|
| Date | 2026-11-23 |
| Branche locale | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` |
| origin/main | `997897fd7cf914771e7d08e8030dc7123fab7d25` (merge-base = main) |
| Branche distante projet | **ABSENTE** — aucun push |
| Entrées dirty | ~89 (porcelain) |
| Publication | **INTERDITE** sans GO Morris |

## Légende

| Tag | Sens |
|---|---|
| EXPECTED | Attendu pour le candidat ML5 |
| FOUND | Présent dans le worktree dirty |
| INCLUDED | À versionner lors d'une future publication |
| EXCLUDED | Ne jamais committer |
| RESERVATION | Inclus avec réserve documentée |

## Exclusions obligatoires

| Chemin / classe | Motif |
|---|---|
| `.env.local` (+ symlink cible) | Secrets OpenAI/GitHub/DB |
| `web/.sfia-evidence/**` | Artefacts campagne locaux |
| `.tmp-sfia-review/**` | Pack temporaire (handoff L3 séparé) |
| `/tmp/sfia-*` workspaces | Preuves non versionnables |
| Bases/dumps DEV | Hors dépôt |
| `scripts/ml5-c13-probe-mode.mts` | Probe DEV ponctuel — EXCLUDED ou supprimer avant push |

## Synthèse par rôle

| Rôle | Statut | Notes |
|---|---|---|
| Code produit D3/D6/D7/D8/D9 | FOUND / INCLUDED | C3–C13 accumulé |
| Migration `019_ml5_qualification_history.sql` | FOUND / INCLUDED | DEV only appliquée |
| Tests unit + PG | FOUND / INCLUDED | C9–C13 |
| Scripts qualification DEV C9–C13 | FOUND / INCLUDED (sauf probe) | Nécessitent secrets documentés en ENV |
| Documents Next (registre, as-built, contrat, delivery-history) | FOUND / INCLUDED | Pas SEF/roadmap normatifs |
| Captures `.sfia-evidence` | FOUND / EXCLUDED | |
| Review pack `.tmp-sfia-review` | FOUND / EXCLUDED du projet | Publié via L3 handoff |

## Stratégie de commits prospective (NON EXÉCUTÉE)

1. `feat(ml5): D7 cursor attempts + claim/ACK + SDK adapter LIVE`
2. `feat(ml5): D8 qualification + handoff integrity + evidence reads`
3. `feat(ml5): D6 authorize confirmed + Nora contract bridge`
4. `feat(ml5): UX realization surfaces + bilan + D6 overlay`
5. `test(ml5): unit + PG + DEV journey scripts C9–C13`
6. `docs(ml5): registre v0.8 + delivery-history + as-built + inventaire`
7. `feat(ml5): C13 path confine + live supervisor + STOP LIVE honesty`

**Aucun de ces commits n'est créé dans C13.**

## Risques pré-push

| Risque | Sévérité | Mitigation |
|---|---|---|
| Secrets dans historique local non commités | HIGH | Vérifier diff ; never add `.env*` |
| Conflit prospectif avec `main` | MED | merge-base = main tip ; rebase/merge sous GO |
| Evidence captures accidentelles | MED | gitignore `.sfia-evidence` |
| Probe script bruit | LOW | EXCLUDE |
| LIVE env requis non documenté | MED | Documenter `SFIA_CURSOR_*` dans README candidat |

## Points de contrôle pré-push (Morris)

- [ ] GO Morris explicite publication branche projet
- [ ] Scan secrets
- [ ] Suites unit+PG vertes
- [ ] Migration 019 revue
- [ ] Pas de mutation RECETTE/STABLE
- [ ] Handoff L3 déjà publié séparément

## Verdict inventaire

**PROJECT CANDIDATE READY FOR MORRIS GIT REVIEW** — réserves : B09 NOT_IMPL ; Figma F2 hors gate ; GitHub REAL mutatif non prouvé ; présence 1/97/1 ≠ achèvement produit.
```

---

## 9. Diffs utiles fichiers modifiés C13

Voir annexe `.tmp-sfia-review/browser/c13/c13-modified.diff` (1236 lignes). Extraits critiques ci-dessous.

### Cause racine sécurité D8 (C12)
Contrôle lexical `resolve+relative` puis `existsSync/statSync/readFileSync` — un symlink sous le workspace pointant hors racine était suivi par les API FS standard.

### Solution confinement
`readConfinedWorkspaceFile` : realpath root ; lstat chaque composant ; refus de tout symlink (`SYMLINK_COMPONENT`/`SYMLINK_ESCAPE`) ; open `O_NOFOLLOW` ; borne taille avant lecture ; fichiers non réguliers refusés.

### Observabilité D8
Chaque outil enregistre `d8:<tool>:<ref>` dans `ToolSourceJournal` avec couverture exacte. List/meta = DISCOVERED ; contenu = CONSULTED/PARTIAL ; refus = DENIED sans contenu.

---

## 10–12. Architecture supervision D7

Mécanisme minimal in-process (`globalThis` Map) :
1. Après dispatch LIVE ACK (`runId` présent) → `ensureCursorLiveSupervisor`
2. Tick 3s → `reconcileCursorExecution` (observe only)
3. Stop à terminal ou MAX_TICKS
4. `resumeDispatchedLiveSupervisors` / `ensureLiveSupervisorsResumedOnce` au reconcile
5. Un observateur par attemptId ; pas de second send ; pas de queue

**Pas un nouvel orchestrateur métier.**

---

## 13–16. Missions LIVE C13

### STOP LIVE
```json
{
  "scenarioId": "ml5-c13-stop-live-20261123",
  "at": "2026-11-23T21:31:12.308Z",
  "pilotId": "pilot_b8d7e5a2-8075-4050-ab97-3969b29235d9",
  "projectId": "proj_a5398b18-2cfb-4925-93a5-a85fff500123",
  "contractId": "tctr_c120e026-ef6f-4706-85bb-537667116e3f",
  "attemptId": "efx_03b99d0f-5689-4126-b831-beb087d0770f",
  "agentId": "agent-c6b4acd1-3815-4dcd-b466-edf1ad9bd208",
  "runId": "run-1a115791-5f2e-4aa9-87de-d5c4fbd3c8d6",
  "beforeOk": true,
  "afterExists": false,
  "stopHttp": 200,
  "stopRequested": true,
  "stopObserved": true,
  "stopLimits": [
    "LIVE_SDK",
    "DISPATCH_ACCEPTED_WITHOUT_WAIT",
    "API_KEY_SOURCE_FILE_CREDENTIAL_STORE",
    "MODEL_composer-2.5",
    "REPORT_MUST_BE_INGESTED_SEPARATELY",
    "SUPERVISION_REQUIRES_RECONCILE_OR_WORKER",
    "OBSERVE_NO_RESEND",
    "WAIT_FAILED:Cannot wait on a detached running run",
    "LAST_STATUS_running",
    "LIVE_CANCEL_OBSERVED",
    "CANCEL_IS_NOT_ROLLBACK",
    "STOP_OBSERVED"
  ],
  "finalStatus": "COMPLETED",
  "terminal": "cancelled",
  "handoffId": "rhf_81771048-8935-4b87-96c1-ed7b5f869296",
  "handoffStatus": "RECEIVED",
  "handoffLimits": [
    "PROVENANCE_CLIENT_DECLARED — hash ≠ preuve d'auteur Cursor"
  ],
  "workspaceCwd": "/private/tmp/sfia-c12-cursor-live-ws/27550354a2f5ad3d/b8ad3f8984240d19/default",
  "distinction": {
    "stopRequested": true,
    "stopTransmitted": true,
    "stopObservedBySdk": true,
    "terminalCancelled": true,
    "priorEffectsPreserved": true,
    "rollback": false
  }
}```

### Long-run T-05
```json
{
  "scenarioId": "ml5-c13-long-run-20261123",
  "at": "2026-11-23T21:32:58.859Z",
  "pilotId": "pilot_b8d7e5a2-8075-4050-ab97-3969b29235d9",
  "projectId": "proj_674a0fc6-42e9-442f-9a57-c59abfafc421",
  "contractId": "tctr_771522f4-e940-42a0-aa96-dea7e20001aa",
  "attemptId": "efx_53198bd9-1f23-4cc4-8776-971b541564cd",
  "agentId": "agent-b339a662-c41f-4c4c-9fd1-a17aa76fe070",
  "runId": "run-7159ad8b-7396-43ba-9ecf-9ea39070fd81",
  "agentIdFinal": "agent-b339a662-c41f-4c4c-9fd1-a17aa76fe070",
  "runIdFinal": "run-7159ad8b-7396-43ba-9ecf-9ea39070fd81",
  "identitiesStable": true,
  "dispatchStatus": "DISPATCHED",
  "finalStatus": "COMPLETED",
  "terminal": "finished",
  "phase1Ok": true,
  "resultOk": true,
  "dispatchMs": 648,
  "browserClosedWaitMs": 90000,
  "doubleDispatch": {
    "http": 200,
    "body": {
      "attemptId": "efx_53198bd9-1f23-4cc4-8776-971b541564cd",
      "status": "COMPLETED",
      "idempotent": true,
      "live": {
        "sendRequestedAt": "2026-11-23T21:31:27.937Z",
        "ackReceivedAt": "2026-11-23T21:31:28.542Z",
        "runObservedAt": "2026-11-23T21:31:28.542Z",
        "agentId": "agent-b339a662-c41f-4c4c-9fd1-a17aa76fe070",
        "runId": "run-7159ad8b-7396-43ba-9ecf-9ea39070fd81",
        "lastActivitySummary": "SDK_OBSERVED_FINISHED",
        "terminalStatus": "finished",
        "reportStatus": "EXPECTED",
        "limits": [
          "LIVE_SDK",
          "DISPATCH_ACCEPTED_WITHOUT_WAIT",
          "API_KEY_SOURCE_FILE_CREDENTIAL_STORE",
          "MODEL_composer-2.5",
          "REPORT_MUST_BE_INGESTED_SEPARATELY",
          "SUPERVISION_REQUIRES_RECONCILE_OR_WORKER",
          "OBSERVE_NO_RESEND",
          "WAIT_FAILED:Cannot wait on a detached running run",
          "LAST_STATUS_running"
        ],
        "claim": {
          "claimToken": "claim_e6f15b71-bfad-4ef5-b5af-4fdc1708d499",
          "claimedAt": "2026-11-23T21:31:27.934Z",
          "leaseExpiresAt": "2026-11-23T21:33:01.568Z",
          "generation": 1,
          "releasedAt": "2026-11-23T21:32:01.568Z"
        },
        "reportMarkdown": "**Mission C13 terminée**\n\n| Étape | Action |\n|--------|--------|\n| 1 | `PHASE1.txt` → `C13-PHASE1-OK` |\n| 2 | Pause ~25 s (`sleep 25`, ~25,1 s) |\n| 3 | `RESULT_C13.txt` → `C13-LONG-RUN-OK` |\n| 4 | `src/ping.ts` → `export const ping = 'c13'` |\n\nAucun `git push` n’a été effectué."
      },
      "limits": [
        "NO_BLIND_REDISPATCH",
        "LIVE_SDK",
        "DISPATCH_ACCEPTED_WITHOUT_WAIT",
        "API_KEY_SOURCE_FILE_CREDENTIAL_STORE",
        "MODEL_composer-2.5",
        "REPORT_MUST_BE_INGESTED_SEPARATELY",
        "SUPERVISION_REQUIRES_RECONCILE_OR_WORKER",
        "OBSERVE_NO_RESEND",
        "WAIT_FAILED:Cannot wait on a detached running run",
        "LAST_STATUS_running"
      ]
    }
  },
  "liveWait": "0",
  "effectMode": "LIVE",
  "workspaceCwd": "/private/tmp/sfia-c12-cursor-live-ws/27550354a2f5ad3d/73c750aab8b5f822/default"
}
```

**Double dispatch :** HTTP 200 `idempotent: true` — pas de second envoi.

---

## 17–19. Handoff / qualification

- Early handoff → `EARLY_HANDOFF_BEFORE_TERMINAL_OBSERVATION` + INCOMPLETE
- Tests déclarés sans `testsCaptured` → INCOMPLETE
- STOP handoff RECEIVED avec fichiers observés BEFORE_STOP ; AFTER_STOP absent
- CANCEL ≠ ROLLBACK documenté

---

## 20. Non-régression

| Suite | Résultat |
|---|---|
| unit ml5-c9..c13 + cursor/proof/qual/dev/nora/public | **72 PASS / 16 files** |
| PG ml5-cursor-dispatch | **9 PASS** |
| PG ml5-c13-d8-evidence-confine | **8 PASS** |
| TypeScript/ESLint/build full | Non relancés ce cycle (réserve) |
| Figma F2 | Hors gate |

---

## 21. Matrice CA-05/07/08/10

| CA | Statut C13 |
|---|---|
| CA-05 supervision | PASS LIVE durable in-process |
| CA-07 STOP | PASS LIVE cancelled observé |
| CA-08 lectures D8 | PASS confine + journal |
| CA-10 candidat | PREPARED inventaire |

---

## 22. Exigences 99 impactées

Présence globale **inchangée : 1 / 97 / 1 (B09 NOT_IMPL)**.
Niveaux de preuve : E05/G12 renforcés (PARTIAL→preuve LIVE/INTEGRATION supérieure) sans promotion artificielle VERIFIÉ globale. Checkpoint R-003 + option Git A préservés.

---

## 23. Inventaire candidat C3–C13

89 entrées dirty. Détail : `construction/ml5-candidat-git-inventaire-c13.md`.

---

## 24. Exclusions Git

`.env.local`, keys, `.sfia-evidence/**`, `.tmp-sfia-review/**`, workspaces `/tmp/`, probe-mode script, dumps.

---

## 25. Préparation commits

Stratégie 7 commits documentée — **AUCUN commit projet exécuté**.

---

## 26. ENV-01 / NO RELEASE

| Champ | Observé |
|---|---|
| Lane | DEV `127.0.0.1:3100` |
| PG | `127.0.0.1:5433` sfia_next_dev |
| EFFECT_MODE | LIVE (export process + .env.local) |
| LIVE_WAIT | 0 |
| WORKSPACE_ROOT | `/tmp/sfia-c12-cursor-live-ws` |
| RECETTE/STABLE | non touchées |
| Product versioning | NO RELEASE |

---

## 27. Fake / Real Qualification

| Frontière | Niveau |
|---|---|
| D8 confinement | REAL BOUNDARY PROVEN (FS + PG reader) |
| Supervision durable | REAL BOUNDARY PROVEN (mission longue) |
| STOP LIVE | REAL BOUNDARY PROVEN (cancel observé) |
| ACK perdu | DETERMINISTIC PROVEN (C12) |
| Candidat Git | PREPARED FOR MORRIS REVIEW ≠ REMOTE VERIFIED |

Claims interdits respectés.

---

## 28. Risques / dette

| Item | Sévérité |
|---|---|
| Supervisor meurt avec processus Node (resume-once au redémarrage) | MED — documenté |
| Symlinks intra-workspace aussi refusés | LOW — fail-closed intentionnel |
| Build/eslint full non relancés | LOW |
| B09 / GitHub REAL / F2 | hors cycle |
| Secrets dans .env.local symlink | HIGH si push accidentel — EXCLUDED |

---

## 29. Gates Morris

1. Revue ChatGPT handoff C13
2. GO publication branche projet (commits)
3. Sync Roadmap Gate C (D2) si voulu
4. Aucun ADOPTED/RELEASE sans GO

---

## 30. Verdict final

**ML5 DEV LIVE RESILIENCE PROVEN — QUALIFICATION IN PROGRESS**
**PROJECT CANDIDATE READY FOR MORRIS GIT REVIEW**

Instruction ChatGPT : relire `sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` après publication L3.

---

## Annexe A — Diff modifié C13 (complet)

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 99cba8a9..2ec4d90c 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -51,6 +51,15 @@ export type NoraGenerateInput = {
   toolScope?: Omit<D4ToolScope, "budget" | "generationId"> & {
     generationId?: string;
     projectId?: string;
+    /** C12 — when set, D8 evidence read tools are bound to this attempt. */
+    attemptId?: string;
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
@@ -83,6 +92,11 @@ export type NoraGenerateResult = {
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
@@ -511,6 +525,38 @@ async function fixtureReply(
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
@@ -521,6 +567,7 @@ async function fixtureReply(
         remainingCalls: policy.budgets.maxD4ToolCalls,
         remainingChars: policy.budgets.maxD4CharsReturned,
       },
+      sourceJournal,
     };
     const searched = await searchProjectResources(scope, {
       query: input.userText.slice(0, 80),
@@ -616,6 +663,7 @@ async function fixtureReply(
   const validatedFixture = validateNoraTurnQualification(qualification);
   if (!validatedFixture.ok) {
     const failed = unavailableQualification(validatedFixture.reason);
+    await Promise.all(activityFlushQueue);
     emitObs({
       event_name: "d3.nora.fixture_complete",
       component: "d3.nora_adapter",
@@ -660,11 +708,13 @@ async function fixtureReply(
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
@@ -709,6 +759,7 @@ async function fixtureReply(
     ],
     toolCallsObserved,
     d4CharsReturned,
+    observedToolSources: sourceJournal.entries.slice(),
     coverageNotes: toolNotes || undefined,
     qualification,
   };
@@ -781,6 +832,37 @@ async function runLiveWithTools(
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
@@ -790,8 +872,21 @@ async function runLiveWithTools(
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
@@ -814,14 +909,28 @@ async function runLiveWithTools(
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
+    // C12 — D8 evidence reads bound to attempt (CA-08). Never arbitrary paths.
+    if (
+      input.toolScope.projectId &&
+      input.toolScope.attemptId &&
+      (policy.toolAllowlist.includes("list_realization_evidence") ||
+        policy.toolAllowlist.includes("read_realization_handoff_report") ||
+        policy.toolAllowlist.includes("read_attempt_workspace_file") ||
+        policy.toolAllowlist.includes("read_evidence_capture_meta"))
+    ) {
+      const { buildNoraD8EvidenceTools } = await import(
+        "@/domains/proofs/d8-evidence-tools-sdk"
+      );
+      const d8Tools = await buildNoraD8EvidenceTools({
+        pilotId: input.toolScope.pilotId,
+        projectId: input.toolScope.projectId,
+        attemptId: input.toolScope.attemptId,
+        budget: sharedToolBudget,
+        sourceJournal,
+      });
+      tools = [...tools, ...d8Tools];
     }
+    // Hosted OpenAI webSearchTool remains detached — see public-web-search-frontier.
   }

   const QUALIFICATION_INSTRUCTIONS = [
@@ -1086,6 +1195,8 @@ async function runLiveWithTools(
     clearTimeout(wallTimer);
   }

+  await Promise.all(liveActivityFlushQueue);
+
   const toolCallsObserved = policy.budgets.maxD4ToolCalls - initialBudget.remainingCalls;
   const d4CharsReturned = policy.budgets.maxD4CharsReturned - initialBudget.remainingChars;

@@ -1109,6 +1220,7 @@ async function runLiveWithTools(
       attempts,
       toolCallsObserved,
       d4CharsReturned,
+      observedToolSources: sourceJournal.entries.slice(),
       qualification:
         qualification.status === "UNAVAILABLE"
           ? qualification
@@ -1134,6 +1246,7 @@ async function runLiveWithTools(
     attempts,
     toolCallsObserved,
     d4CharsReturned,
+    observedToolSources: sourceJournal.entries.slice(),
     qualification,
   };
 }
diff --git a/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts b/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
index 638f719f..172fb6f1 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
@@ -108,6 +108,69 @@ export async function prepareCursorExecution(input: {
   )[0];

   const mode = resolveCursorAdapterMode();
+  const gitScope = contract.gitScopeJson
+    ? (JSON.parse(contract.gitScopeJson) as CursorExecutionPlan["gitScope"])
+    : null;
+  // DÉC-ML5-GIT Option A — CP-01 independent Git observations (never contract SHA echo).
+  if (gitScope?.required) {
+    const {
+      buildCursorGitMandateFromScope,
+      observeWorkspaceGitFacts,
+      preflightCursorGitOptionA,
+    } = await import("./cursor-git-option-a");
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
+    const observations = observeWorkspaceGitFacts(
+      workspace.workspaceCwd,
+      gitScope.baseRef ?? "main",
+      gitScope.workBranch ?? "cursor/work",
+    );
+    const pre = preflightCursorGitOptionA({
+      mandate,
+      workspacePath: workspace.workspaceCwd,
+      authorizedRepos: repos,
+      observations,
+    });
+    if (!pre.ok) {
+      throw new StudioError(
+        "INVALID_REQUEST",
+        `Préflight Git Cursor option A refusé: ${pre.reason}`,
+        { exposeMessage: true },
+      );
+    }
+  }
+  // E12 / C8 A3 — MCP fail-closed: UNKNOWN blocks; SCRIPTED may simulate explicitly.
+  const mcpRequired = input.mcpRequired ?? [];
+  if (mcpRequired.length > 0) {
+    const { assertMcpReadyForDispatch, checkRequiredMcpCapabilities } = await import(
+      "./mcp-capability-check"
+    );
+    const scriptedSimulation = mode === "SCRIPTED";
+    const mcpResults = checkRequiredMcpCapabilities(mcpRequired, process.env, {
+      scriptedSimulation,
+    });
+    const mcpGate = assertMcpReadyForDispatch(mcpResults, {
+      allowScriptedSimulation: scriptedSimulation,
+    });
+    if (!mcpGate.ok) {
+      throw new StudioError(
+        "INVALID_REQUEST",
+        `Préflight MCP refusé: ${mcpGate.reason}`,
+        { exposeMessage: true },
+      );
+    }
+  }
+  const modelId = (process.env.SFIA_CURSOR_MODEL_ID || "").trim() || undefined;
   const plan: CursorExecutionPlan = {
     kind: "CURSOR_EXECUTION",
     contractId: contract.id,
@@ -118,10 +181,9 @@ export async function prepareCursorExecution(input: {
     workspaceCwd: workspace.workspaceCwd,
     workspaceKey: workspace.workspaceKey,
     effectProviderMode: mode,
-    gitScope: contract.gitScopeJson
-      ? (JSON.parse(contract.gitScopeJson) as CursorExecutionPlan["gitScope"])
-      : null,
-    mcpRequired: input.mcpRequired ?? [],
+    ...(modelId ? { modelId } : {}),
+    gitScope,
+    mcpRequired,
   };
   const fingerprint = contract.fingerprint;
   const planFp = planFingerprintPayload(plan);
@@ -177,6 +239,96 @@ export async function prepareCursorExecution(input: {
   };
 }

+/**
+ * Authenticated D6 Non — records an explicit HumanDecision refusal.
+ * No AUTHORIZED transition, no dispatch, no Cursor effect.
+ * Attempt moves PREPARED → CANCELLED (still the same attemptId).
+ */
+export async function refuseCursorExecution(input: {
+  pilotId: string;
+  projectId: string;
+  attemptId: string;
+  statement: string;
+  inspectedFingerprint: string;
+}) {
+  return db.transaction(async (tx) => {
+    const row = (
+      await tx
+        .select()
+        .from(effectAttempts)
+        .where(
+          and(
+            eq(effectAttempts.id, input.attemptId),
+            eq(effectAttempts.projectId, input.projectId),
+            eq(effectAttempts.pilotId, input.pilotId),
+          ),
+        )
+        .limit(1)
+    )[0];
+    if (!row) throw new StudioError("NOT_FOUND", "Tentative introuvable");
+    if (row.kind !== "CURSOR_EXECUTION") {
+      throw new StudioError("INVALID_REQUEST", "Tentative non Cursor");
+    }
+    if (row.status === "CANCELLED" && row.decisionId) {
+      return {
+        attemptId: row.id,
+        status: "CANCELLED" as const,
+        decisionId: row.decisionId,
+        idempotent: true as const,
+        fingerprint: row.fingerprint,
+        refused: true as const,
+      };
+    }
+    if (row.status !== "PREPARED") {
+      throw new StudioError(
+        "CONFLICT",
+        `Refus D6 impossible depuis statut ${row.status}`,
+        { exposeMessage: true },
+      );
+    }
+    if (input.inspectedFingerprint !== row.fingerprint) {
+      throw new StudioError(
+        "REQUIRES_REQUALIFICATION",
+        "Empreinte inspectée ≠ tentative — relire le contrat",
+        { exposeMessage: true },
+      );
+    }
+    const effectConditions = JSON.stringify({
+      fingerprint: row.fingerprint,
+      kind: "CURSOR_EXECUTION_REFUSAL",
+      attemptId: row.id,
+    });
+    const decisionId = await insertHumanDecision(tx, {
+      projectId: input.projectId,
+      pilotId: input.pilotId,
+      sourceKind: "CURSOR_EXECUTION",
+      sourceRef: row.id,
+      kind: "CURSOR_EXECUTION_REFUSAL",
+      objectRef: row.id,
+      statement: (input.statement || "Refus explicite D6 — pas d'exécution Cursor").slice(0, 500),
+      effectConditions,
+    });
+    const now = new Date();
+    await tx
+      .update(effectAttempts)
+      .set({
+        status: "CANCELLED",
+        decisionId,
+        effectConditions,
+        updatedAt: now,
+      })
+      .where(eq(effectAttempts.id, row.id));
+    return {
+      attemptId: row.id,
+      status: "CANCELLED" as const,
+      decisionId,
+      idempotent: false as const,
+      fingerprint: row.fingerprint,
+      refused: true as const,
+    };
+  });
+}
+
 export async function authorizeCursorExecution(input: {
   pilotId: string;
   projectId: string;
@@ -187,8 +339,12 @@ export async function authorizeCursorExecution(input: {
   confirmed: boolean;
 }) {
   if (!input.confirmed) {
-    throw new StudioError("INVALID_REQUEST", "Confirmation refusée — aucun effet", {
-      exposeMessage: true,
+    return refuseCursorExecution({
+      pilotId: input.pilotId,
+      projectId: input.projectId,
+      attemptId: input.attemptId,
+      statement: input.statement,
+      inspectedFingerprint: input.inspectedFingerprint,
     });
   }
   return db.transaction(async (tx) => {
@@ -377,7 +533,19 @@ export async function dispatchCursorExecution(input: {
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
@@ -387,24 +555,45 @@ export async function dispatchCursorExecution(input: {
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
+    const { isScriptedPhasedMode } = await import("./cursor-sdk-adapter");
+    const scriptedPhased =
+      plan.effectProviderMode === "SCRIPTED" && isScriptedPhasedMode();
+    const liveWait =
+      plan.effectProviderMode === "LIVE" &&
+      (process.env.SFIA_CURSOR_LIVE_WAIT || "").trim() === "1";
     dispatched = await dispatchCursorRun({
       attemptId: row.id,
       instructionText: contract.instructionText,
       instructionFingerprint: plan.instructionFingerprint,
       workspaceCwd: plan.workspaceCwd,
       idempotencyKey: row.id,
-      /** LIVE: return after ACK/first observation — do not block HTTP on full wait. */
-      waitForTerminal: plan.effectProviderMode === "SCRIPTED",
+      modelId: plan.modelId,
+      /**
+       * LIVE default: return after ACK — reconcile observes terminal without resend.
+       * SFIA_CURSOR_LIVE_WAIT=1: block until terminal (DEV worker-style, C11).
+       * SCRIPTED default: finish immediately unless SFIA_CURSOR_SCRIPTED_PHASED=1.
+       */
+      waitForTerminal:
+        liveWait || (plan.effectProviderMode === "SCRIPTED" && !scriptedPhased),
     });
   } catch (e) {
     const failLive: CursorLiveProjection = {
@@ -424,7 +613,7 @@ export async function dispatchCursorExecution(input: {
   }

   const nextLive: CursorLiveProjection = {
-    sendRequestedAt: dispatched.sendRequestedAt,
+    sendRequestedAt: dispatched.sendRequestedAt ?? sendRequestedAt,
     ackReceivedAt: dispatched.ackReceivedAt,
     runObservedAt: dispatched.runObservedAt,
     agentId: dispatched.agentId,
@@ -448,6 +637,27 @@ export async function dispatchCursorExecution(input: {
     release: terminal,
   });

+  // C13 — durable observation independent of browser/HTTP when LIVE ACK returns early.
+  // Observation only (reconcile); never a second send.
+  if (
+    !terminal &&
+    plan.effectProviderMode === "LIVE" &&
+    nextLive.runId
+  ) {
+    try {
+      const { ensureCursorLiveSupervisor } = await import(
+        "./cursor-live-supervisor"
+      );
+      ensureCursorLiveSupervisor({
+        pilotId: input.pilotId,
+        projectId: input.projectId,
+        attemptId: row.id,
+      });
+    } catch {
+      /* supervisor start must not fail dispatch ACK */
+    }
+  }
+
   return {
     attemptId: row.id,
     status: terminal ? ("COMPLETED" as const) : ("DISPATCHED" as const),
@@ -500,16 +710,37 @@ export async function requestStopCursorExecution(input: {
       stop.stopObservedAt ? "STOP_OBSERVED" : "STOP_REQUESTED_NOT_CONFIRMED",
     ],
   };
-  // STOP requested ≠ necessarily terminal — keep DISPATCHED if not observed.
+  // STOP requested ≠ STOP observed. If uncertain after possible effect → keep
+  // DISPATCHED/AMBIGUOUS; never invent cancelled without observation.
+  let nextStatus = row.status;
+  if (stop.stopObservedAt && stop.terminalStatus === "cancelled") {
+    nextStatus = "COMPLETED";
+  } else if (
+    !stop.stopObservedAt &&
+    (live.agentId || live.runId || live.sendRequestedAt) &&
+    row.status === "DISPATCHED"
+  ) {
+    nextLive.limits = [
+      ...(nextLive.limits ?? []),
+      "STOP_UNCERTAIN_AFTER_POSSIBLE_EFFECT — conserver DISPATCHED, pas de succès inventé",
+    ];
+  }
   await db
     .update(effectAttempts)
     .set({
       resultJson: JSON.stringify(nextLive),
-      status: stop.stopObservedAt && stop.terminalStatus === "cancelled" ? "COMPLETED" : row.status,
+      status: nextStatus,
       updatedAt: new Date(),
     })
     .where(eq(effectAttempts.id, row.id));
-  return { attemptId: row.id, live: nextLive, limits: nextLive.limits ?? [] };
+  return {
+    attemptId: row.id,
+    status: nextStatus,
+    live: nextLive,
+    limits: nextLive.limits ?? [],
+    stopRequested: true as const,
+    stopObserved: Boolean(stop.stopObservedAt),
+  };
 }

 export async function reconcileCursorExecution(input: {
@@ -517,6 +748,15 @@ export async function reconcileCursorExecution(input: {
   projectId: string;
   attemptId: string;
 }) {
+  try {
+    const { ensureLiveSupervisorsResumedOnce } = await import(
+      "./cursor-live-supervisor"
+    );
+    await ensureLiveSupervisorsResumedOnce();
+  } catch {
+    /* resume must not block reconcile */
+  }
+
   const row = (
     await db
       .select()
@@ -534,6 +774,172 @@ export async function reconcileCursorExecution(input: {
   const live = parseLive(row.resultJson);
   const claim = readClaim(row.resultJson);
   const limits = [...(live.limits ?? [])];
+  const plan = JSON.parse(row.planJson) as CursorExecutionPlan;
+
+  // Re-attach durable observer only for LIVE DISPATCHED with known run handle.
+  if (
+    row.status === "DISPATCHED" &&
+    plan.effectProviderMode === "LIVE" &&
+    live.runId
+  ) {
+    try {
+      const { ensureCursorLiveSupervisor } = await import(
+        "./cursor-live-supervisor"
+      );
+      ensureCursorLiveSupervisor({
+        pilotId: input.pilotId,
+        projectId: input.projectId,
+        attemptId: input.attemptId,
+      });
+    } catch {
+      /* ensure must not block reconcile */
+    }
+  }
+
+  // SCRIPTED phased: advance in-memory run → COMPLETED without a second send.
+  if (
+    row.status === "DISPATCHED" &&
+    plan.effectProviderMode === "SCRIPTED" &&
+    !live.terminalStatus
+  ) {
+    const { advanceScriptedRunToFinished } = await import("./cursor-sdk-adapter");
+    const advanced = advanceScriptedRunToFinished(row.id);
+    if (advanced) {
+      const nextLive: CursorLiveProjection = {
+        ...live,
+        agentId: advanced.agentId,
+        runId: advanced.runId,
+        terminalStatus: "finished",
+        lastActivitySummary: advanced.lastActivitySummary,
+        reportStatus: "RECEIVED",
+        limits: [
+          ...limits,
+          "SCRIPTED_MODE",
+          "SCRIPTED_PHASED_RECONCILED",
+          "NO_REAL_SIDE_EFFECT",
+        ],
+      };
+      if (claim && isClaimActive(claim)) {
+        await persistCursorOwnedResult({
+          attemptId: row.id,
+          claimToken: claim.claimToken,
+          resultJson: JSON.stringify({
+            ...nextLive,
+            reportMarkdown: advanced.resultText,
+          }),
+          status: "COMPLETED",
+          release: true,
+        });
+      } else {
+        await db
+          .update(effectAttempts)
+          .set({
+            status: "COMPLETED",
+            resultJson: JSON.stringify({
+              ...nextLive,
+              reportMarkdown: advanced.resultText,
+            }),
+            updatedAt: new Date(),
+          })
+          .where(eq(effectAttempts.id, row.id));
+      }
+      return {
+        attemptId: row.id,
+        status: "COMPLETED" as const,
+        live: nextLive,
+        limits: nextLive.limits ?? [],
+        scriptedReportMarkdown: advanced.resultText,
+      };
+    }
+  }
+
+  // LIVE: observe existing run — never a second send.
+  // "unknown" from a prior failed observe is NOT terminal — re-observe.
+  const liveNeedsObserve =
+    !live.terminalStatus || live.terminalStatus === "unknown";
+  if (
+    row.status === "DISPATCHED" &&
+    plan.effectProviderMode === "LIVE" &&
+    liveNeedsObserve &&
+    live.runId
+  ) {
+    const { observeLiveCursorRun } = await import("./cursor-sdk-adapter");
+    const observed = await observeLiveCursorRun({
+      runId: live.runId,
+      agentId: live.agentId,
+      workspaceCwd: plan.workspaceCwd,
+    });
+    const nextLive: CursorLiveProjection = {
+      ...live,
+      terminalStatus: observed.terminalStatus ?? live.terminalStatus,
+      lastActivitySummary:
+        observed.lastActivitySummary ?? live.lastActivitySummary,
+      reportStatus:
+        observed.terminalStatus === "finished" ? "EXPECTED" : live.reportStatus,
+      limits: [...new Set([...limits, ...(observed.limits ?? [])])],
+    };
+    const terminal =
+      nextLive.terminalStatus === "finished" ||
+      nextLive.terminalStatus === "error" ||
+      nextLive.terminalStatus === "cancelled";
+    if (terminal) {
+      const payload = {
+        ...nextLive,
+        ...(observed.resultText
+          ? { reportMarkdown: observed.resultText }
+          : {}),
+      };
+      if (claim && isClaimActive(claim)) {
+        await persistCursorOwnedResult({
+          attemptId: row.id,
+          claimToken: claim.claimToken,
+          resultJson: JSON.stringify(payload),
+          status: "COMPLETED",
+          release: true,
+        });
+      } else {
+        await db
+          .update(effectAttempts)
+          .set({
+            status: "COMPLETED",
+            resultJson: JSON.stringify(payload),
+            updatedAt: new Date(),
+          })
+          .where(
+            and(
+              eq(effectAttempts.id, row.id),
+              eq(effectAttempts.status, "DISPATCHED"),
+            ),
+          );
+      }
+      return {
+        attemptId: row.id,
+        status: "COMPLETED" as const,
+        live: nextLive,
+        limits: nextLive.limits ?? [],
+        scriptedReportMarkdown: observed.resultText,
+      };
+    }
+    // Non-terminal observation — persist activity, stay DISPATCHED.
+    await db
+      .update(effectAttempts)
+      .set({
+        resultJson: JSON.stringify(nextLive),
+        updatedAt: new Date(),
+      })
+      .where(
+        and(
+          eq(effectAttempts.id, row.id),
+          eq(effectAttempts.status, "DISPATCHED"),
+        ),
+      );
+    return {
+      attemptId: row.id,
+      status: "DISPATCHED" as const,
+      live: nextLive,
+      limits: nextLive.limits ?? [],
+    };
+  }

   if (row.status === "DISPATCHED" && !isClaimActive(claim)) {
     if (!live.runId && !live.agentId) {
diff --git a/projects/sfia-studio-next/web/src/domains/execution/cursor-handoff.ts b/projects/sfia-studio-next/web/src/domains/execution/cursor-handoff.ts
index dd80b13d..5e9e0309 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/cursor-handoff.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/cursor-handoff.ts
@@ -130,6 +130,14 @@ export async function ingestRealizationHandoff(input: {
     status = "INCOMPLETE";
     limits.push("REPORT_EMPTY");
   }
+  // C13 — early handoff before terminal observation stays honest (INCOMPLETE).
+  if (
+    row.status === "DISPATCHED" &&
+    (!live.terminalStatus || live.terminalStatus === "unknown")
+  ) {
+    status = "INCOMPLETE";
+    limits.push("EARLY_HANDOFF_BEFORE_TERMINAL_OBSERVATION");
+  }
   // Long but incomplete inventory cannot succeed.
   if (!inventoryComplete(input.manifest)) {
     status = "INCOMPLETE";
@@ -138,6 +146,16 @@ export async function ingestRealizationHandoff(input: {
       limits.push("LONG_REPORT_WITHOUT_COMPLETE_INVENTORY — succès refusé");
     }
   }
+  // C13 — tests announced without captured output cannot imply verified execution.
+  const testsDeclared = input.manifest.testsDeclared?.length ?? 0;
+  const testsExecuted = input.manifest.testsExecuted?.length ?? 0;
+  const testsCaptured = input.manifest.testsCaptured?.length ?? 0;
+  if (testsDeclared + testsExecuted > 0 && testsCaptured === 0) {
+    status = "INCOMPLETE";
+    limits.push(
+      "TESTS_DECLARED_WITHOUT_CAPTURED_OUTPUT — RESULT file ≠ verified unit test",
+    );
+  }
   if (report.includes("BEGIN PRIVATE KEY") || /\bsk-[A-Za-z0-9]{20,}\b/.test(report)) {
     status = "REJECTED";
     limits.push("SECRET_MATERIAL_DETECTED");
diff --git a/projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts b/projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts
index 86ed9d13..0020640a 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts
@@ -61,6 +61,159 @@ export function resolveCursorAdapterMode(
   return "SCRIPTED";
 }

+/**
+ * Resolve Cursor SDK API key: env first, then FileCredentialStore (~/.cursor/sdk/auth.json).
+ * Never logs or returns the secret to callers beyond Agent.create.
+ */
+export async function resolveCursorApiKey(
+  env: NodeJS.ProcessEnv = process.env,
+): Promise<{ apiKey: string | null; source: "ENV" | "FILE_CREDENTIAL_STORE" | "NONE" }> {
+  const fromEnv = (env.CURSOR_API_KEY || "").trim();
+  if (fromEnv) return { apiKey: fromEnv, source: "ENV" };
+  try {
+    const { FileCredentialStore } = await import("@cursor/sdk");
+    const store = new FileCredentialStore();
+    const creds = await store.load();
+    const key = typeof creds?.apiKey === "string" ? creds.apiKey.trim() : "";
+    if (key) return { apiKey: key, source: "FILE_CREDENTIAL_STORE" };
+  } catch {
+    /* store unavailable */
+  }
+  return { apiKey: null, source: "NONE" };
+}
+
+/** Default model when plan omits modelId — SDK rejects create without a model. */
+export function resolveCursorModelId(
+  modelId: string | undefined,
+  env: NodeJS.ProcessEnv = process.env,
+): string {
+  const fromInput = (modelId || "").trim();
+  if (fromInput) return fromInput;
+  const fromEnv = (env.SFIA_CURSOR_MODEL_ID || "").trim();
+  if (fromEnv) return fromEnv;
+  return "composer-2.5";
+}
+
+export type CursorObserveResult = {
+  terminalStatus: CursorLiveProjection["terminalStatus"];
+  lastActivitySummary: string | null;
+  resultText: string | null;
+  limits: string[];
+};
+
+/**
+ * Observational LIVE reconcile — never sends a second instruction.
+ * Uses Agent.getRun + wait when a runId is known.
+ */
+export async function observeLiveCursorRun(input: {
+  runId: string;
+  agentId: string | null;
+  workspaceCwd: string;
+  waitMs?: number;
+}): Promise<CursorObserveResult> {
+  const limits: string[] = ["LIVE_SDK", "OBSERVE_NO_RESEND"];
+  try {
+    const keyResolved = await resolveCursorApiKey();
+    if (!keyResolved.apiKey) {
+      return {
+        terminalStatus: null,
+        lastActivitySummary: "SDK_OBSERVE_NO_API_KEY",
+        resultText: null,
+        limits: [...limits, "OBSERVE_NO_API_KEY — rester DISPATCHED"],
+      };
+    }
+    const { Agent } = await import("@cursor/sdk");
+    const run = await Agent.getRun(input.runId, {
+      runtime: "local",
+      cwd: input.workspaceCwd,
+      apiKey: keyResolved.apiKey,
+    });
+    if (!run) {
+      return {
+        terminalStatus: null,
+        lastActivitySummary: "SDK_GET_RUN_EMPTY",
+        resultText: null,
+        limits: [...limits, "GET_RUN_EMPTY — pas de terminal inventé"],
+      };
+    }
+    const statusRaw = run.status;
+    const statusNow =
+      typeof statusRaw === "string"
+        ? statusRaw
+        : statusRaw && typeof statusRaw === "object" && "type" in (statusRaw as object)
+          ? String((statusRaw as { type?: string }).type ?? "")
+          : statusRaw != null
+            ? String(statusRaw)
+            : null;
+    const normalized = (statusNow || "").toLowerCase();
+    if (
+      normalized === "finished" ||
+      normalized === "error" ||
+      normalized === "cancelled"
+    ) {
+      return {
+        terminalStatus: normalized as "finished" | "error" | "cancelled",
+        lastActivitySummary: `SDK_OBSERVED_${normalized.toUpperCase()}`,
+        resultText: typeof run.result === "string" ? run.result : null,
+        limits: [...limits, `API_KEY_SOURCE_${keyResolved.source}`],
+      };
+    }
+    // Detached runs may refuse wait() — never invent terminal from that failure.
+    if (typeof run.wait === "function") {
+      try {
+        const waited = await run.wait();
+        const wStatus = String(waited.status ?? "").toLowerCase();
+        const terminal =
+          wStatus === "finished" ||
+          wStatus === "error" ||
+          wStatus === "cancelled"
+            ? (wStatus as "finished" | "error" | "cancelled")
+            : null;
+        return {
+          terminalStatus: terminal,
+          lastActivitySummary: `SDK_WAIT_${wStatus.toUpperCase() || "EMPTY"}`,
+          resultText: typeof waited.result === "string" ? waited.result : null,
+          limits: [
+            ...limits,
+            `API_KEY_SOURCE_${keyResolved.source}`,
+            "WAIT_COMPLETED_IN_OBSERVE",
+          ],
+        };
+      } catch (waitErr) {
+        return {
+          terminalStatus: null,
+          lastActivitySummary: "SDK_WAIT_DETACHED_OR_FAILED",
+          resultText: null,
+          limits: [
+            ...limits,
+            `WAIT_FAILED:${String((waitErr as Error)?.message ?? waitErr).slice(0, 80)}`,
+            statusNow ? `LAST_STATUS_${statusNow}` : "LAST_STATUS_NONE",
+          ],
+        };
+      }
+    }
+    return {
+      terminalStatus: null,
+      lastActivitySummary: statusNow
+        ? `SDK_STATUS_${statusNow.toUpperCase()}`
+        : "SDK_STATUS_UNKNOWN_NON_TERMINAL",
+      resultText: null,
+      limits: [...limits, "NON_TERMINAL_NO_WAIT"],
+    };
+  } catch (e) {
+    // Fail closed: do NOT stamp terminalStatus=unknown (would look like resolution).
+    return {
+      terminalStatus: null,
+      lastActivitySummary: "SDK_OBSERVE_FAILED",
+      resultText: null,
+      limits: [
+        ...limits,
+        `OBSERVE_FAILED:${String((e as Error)?.message ?? e).slice(0, 80)}`,
+      ],
+    };
+  }
+}
+
 /** In-memory scripted runs for DETERMINISTIC tests — not a parallel business path. */
 const scriptedRuns = new Map<
   string,
@@ -77,6 +230,60 @@ export function __resetScriptedCursorRunsForTests(): void {
   scriptedRuns.clear();
 }

+/** When true, SCRIPTED returns DISPATCHED/RUNNING first; reconcile advances to finished. */
+export function isScriptedPhasedMode(env: NodeJS.ProcessEnv = process.env): boolean {
+  return (env.SFIA_CURSOR_SCRIPTED_PHASED || "").trim() === "1";
+}
+
+export function getScriptedRun(attemptId: string) {
+  return scriptedRuns.get(attemptId) ?? null;
+}
+
+/** Advance a phased SCRIPTED run to finished — used by reconcile, never a second send. */
+export function advanceScriptedRunToFinished(attemptId: string): {
+  agentId: string;
+  runId: string;
+  resultText: string;
+  lastActivitySummary: string;
+} | null {
+  const existing = scriptedRuns.get(attemptId);
+  if (!existing) return null;
+  if (existing.status === "finished") {
+    return {
+      agentId: existing.agentId,
+      runId: existing.runId,
+      resultText: existing.resultText,
+      lastActivitySummary: "SCRIPTED_ALREADY_FINISHED",
+    };
+  }
+  if (existing.status !== "running") return null;
+  existing.status = "finished";
+  return {
+    agentId: existing.agentId,
+    runId: existing.runId,
+    resultText: existing.resultText,
+    lastActivitySummary: "SCRIPTED_OBSERVATION_FINISHED",
+  };
+}
+
+function buildScriptedReport(attemptId: string, instructionFingerprint: string): string {
+  return [
+    `# Rapport de réalisation (SCRIPTED)`,
+    ``,
+    `attemptId: ${attemptId}`,
+    `instructionFingerprint: ${instructionFingerprint}`,
+    ``,
+    `## Inventaire`,
+    `- Aucun fichier modifié (mode scripted)`,
+    ``,
+    `## Tests`,
+    `- Non exécutés (SCRIPTED)`,
+    ``,
+    `## Réserves`,
+    `- Preuve LIVE SDK non produite`,
+  ].join("\n");
+}
+
 export async function dispatchCursorRun(
   input: CursorDispatchInput,
   mode = resolveCursorAdapterMode(),
@@ -100,28 +307,41 @@ export async function dispatchCursorRun(
     }
     const agentId = `scripted-agent-${input.attemptId}`;
     const runId = `scripted-run-${input.attemptId}`;
-    const resultText = [
-      `# Rapport de réalisation (SCRIPTED)`,
-      ``,
-      `attemptId: ${input.attemptId}`,
-      `instructionFingerprint: ${input.instructionFingerprint}`,
-      ``,
-      `## Inventaire`,
-      `- Aucun fichier modifié (mode scripted)`,
-      ``,
-      `## Tests`,
-      `- Non exécutés (SCRIPTED)`,
-      ``,
-      `## Réserves`,
-      `- Preuve LIVE SDK non produite`,
-    ].join("\n");
+    const resultText = buildScriptedReport(input.attemptId, input.instructionFingerprint);
+    const phased =
+      isScriptedPhasedMode() || input.waitForTerminal === false;
     scriptedRuns.set(input.idempotencyKey, {
       agentId,
       runId,
-      status: "finished",
+      status: phased ? "running" : "finished",
       instructionFingerprint: input.instructionFingerprint,
       resultText,
     });
+    // C12 T-04 — same DROP_ACK fault as LIVE (deterministic SCRIPTED path).
+    if ((process.env.SFIA_CURSOR_FAULT_AFTER_SEND || "").trim().toUpperCase() === "DROP_ACK") {
+      throw new Error(
+        "SFIA_CURSOR_FAULT_AFTER_SEND=DROP_ACK — ACK perdu après effet SDK possible",
+      );
+    }
+    if (phased) {
+      return {
+        mode,
+        sendRequestedAt,
+        ackReceivedAt: sendRequestedAt,
+        runObservedAt: sendRequestedAt,
+        agentId,
+        runId,
+        terminalStatus: null,
+        lastActivitySummary: "SCRIPTED_OBSERVATION_RUNNING",
+        resultText: null,
+        limits: [
+          "SCRIPTED_MODE",
+          "SCRIPTED_PHASED",
+          "NO_REAL_SIDE_EFFECT",
+          "REQUIRES_RECONCILE_TO_FINISH",
+        ],
+      };
+    }
     return {
       mode,
       sendRequestedAt,
@@ -137,10 +357,17 @@ export async function dispatchCursorRun(
   }

   // LIVE path — dynamic import so unit tests without entitlement still load.
+  const keyResolved = await resolveCursorApiKey();
+  if (!keyResolved.apiKey) {
+    throw new Error(
+      "CURSOR_SDK_UNAVAILABLE — ni CURSOR_API_KEY ni FileCredentialStore",
+    );
+  }
+  const modelId = resolveCursorModelId(input.modelId);
   const { Agent } = await import("@cursor/sdk");
   const agent = await Agent.create({
-    apiKey: process.env.CURSOR_API_KEY,
-    model: input.modelId ? { id: input.modelId } : undefined,
+    apiKey: keyResolved.apiKey,
+    model: { id: modelId },
     local: { cwd: input.workspaceCwd },
   });
   let ackReceivedAt: string | null = null;
@@ -153,6 +380,17 @@ export async function dispatchCursorRun(
       lastActivitySummary = "SDK_DELTA";
     },
   });
+  /**
+   * C12 / T-04 — deterministic fault injection AFTER SDK send accepted.
+   * DROP_ACK: throw before Studio persists agentId/runId → AMBIGUOUS + priorSend.
+   * Never use outside DEV fault tests.
+   */
+  const fault = (process.env.SFIA_CURSOR_FAULT_AFTER_SEND || "").trim().toUpperCase();
+  if (fault === "DROP_ACK") {
+    throw new Error(
+      "SFIA_CURSOR_FAULT_AFTER_SEND=DROP_ACK — ACK perdu après effet SDK possible",
+    );
+  }
   ackReceivedAt = new Date().toISOString();
   if (!runObservedAt) runObservedAt = ackReceivedAt;

@@ -171,8 +409,10 @@ export async function dispatchCursorRun(
       limits: [
         "LIVE_SDK",
         "DISPATCH_ACCEPTED_WITHOUT_WAIT",
+        `API_KEY_SOURCE_${keyResolved.source}`,
+        `MODEL_${modelId}`,
         "REPORT_MUST_BE_INGESTED_SEPARATELY",
-        "SUPERVISION_REQUIRES_RECONCILE_OR_WORKER",
+        "SUPERVISION_VIA_D7_LIVE_SUPERVISOR_OR_RECONCILE",
       ],
     };
   }
@@ -194,7 +434,13 @@ export async function dispatchCursorRun(
     terminalStatus: terminal,
     lastActivitySummary: lastActivitySummary ?? `SDK_${String(waited.status).toUpperCase()}`,
     resultText: typeof waited.result === "string" ? waited.result : null,
-    limits: ["LIVE_SDK", "REPORT_MUST_BE_INGESTED_SEPARATELY", "WAIT_COMPLETED_IN_ADAPTER"],
+    limits: [
+      "LIVE_SDK",
+      `API_KEY_SOURCE_${keyResolved.source}`,
+      `MODEL_${modelId}`,
+      "REPORT_MUST_BE_INGESTED_SEPARATELY",
+      "WAIT_COMPLETED_IN_ADAPTER",
+    ],
   };
 }

@@ -229,10 +475,12 @@ export async function stopCursorRun(input: {
     };
   }
   try {
+    const keyResolved = await resolveCursorApiKey();
     const { Agent } = await import("@cursor/sdk");
     const run = await Agent.getRun(input.runId, {
       runtime: "local",
       cwd: input.workspaceCwd,
+      ...(keyResolved.apiKey ? { apiKey: keyResolved.apiKey } : {}),
     });
     if (run && typeof run.cancel === "function") {
       await run.cancel();
diff --git a/projects/sfia-studio-next/web/src/domains/execution/handoff-integrity.ts b/projects/sfia-studio-next/web/src/domains/execution/handoff-integrity.ts
index 4456b22f..a75c2d44 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/handoff-integrity.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/handoff-integrity.ts
@@ -5,11 +5,19 @@ export type HandoffManifest = {
   filesModified?: string[];
   filesDeleted?: string[];
   filesMoved?: Array<{ from: string; to: string }>;
+  /** Declared by report author — not proof of FS presence. */
+  filesDeclared?: string[];
+  /** Observed on disk at handoff time (server check). */
+  filesObserved?: string[];
+  /** Content actually read/consulted (SHA when available). */
+  filesConsulted?: Array<{ path: string; sha256?: string }>;
   testsDeclared?: string[];
   testsExecuted?: string[];
+  /** Captured stdout/stderr or exit code present — required to claim verified run. */
   testsCaptured?: string[];
   sourcesConsulted?: string[];
   commands?: string[];
+  commandsExecuted?: string[];
   gaps?: string[];
   git?: {
     branch?: string | null;
@@ -18,6 +26,47 @@ export type HandoffManifest = {
   };
 };

+/**
+ * C13 honesty helper — distinguish declaration vs observation vs consultation.
+ * Never treat RESULT_*.txt alone as proof that an announced unit test ran.
+ */
+export function classifyManifestHonesty(manifest: HandoffManifest): {
+  filesDeclared: number;
+  filesObserved: number;
+  filesConsulted: number;
+  testsDeclared: number;
+  testsExecuted: number;
+  testsCaptured: number;
+  canClaimVerifiedTests: boolean;
+  notes: string[];
+} {
+  const filesDeclared =
+    (manifest.filesDeclared?.length ?? 0) ||
+    (manifest.filesCreated?.length ?? 0) + (manifest.filesModified?.length ?? 0);
+  const filesObserved = manifest.filesObserved?.length ?? 0;
+  const filesConsulted = manifest.filesConsulted?.length ?? 0;
+  const testsDeclared = manifest.testsDeclared?.length ?? 0;
+  const testsExecuted = manifest.testsExecuted?.length ?? 0;
+  const testsCaptured = manifest.testsCaptured?.length ?? 0;
+  const notes: string[] = [];
+  if (filesDeclared > filesObserved) {
+    notes.push("FILES_DECLARED_EXCEED_OBSERVED");
+  }
+  if (testsDeclared + testsExecuted > 0 && testsCaptured === 0) {
+    notes.push("TESTS_ANNOUNCED_WITHOUT_CAPTURE");
+  }
+  return {
+    filesDeclared,
+    filesObserved,
+    filesConsulted,
+    testsDeclared,
+    testsExecuted,
+    testsCaptured,
+    canClaimVerifiedTests: testsCaptured > 0,
+    notes,
+  };
+}
+
 export function handoffIntegrityHash(input: {
   attemptId: string;
   contractFingerprint: string;
```

## Annexe B — Scripts LIVE (références chemins)
- `web/scripts/ml5-c13-stop-live.mts`
- `web/scripts/ml5-c13-long-run-supervisor.mts`

## Annexe C — d8-evidence-read.ts (fichier actuel intégral)
```typescript
/**
 * C12 / CA-08 — read-only access to D8 realization pieces for Nora.
 * Owner remains D8; Nora never invents paths or reads outside attempt scope.
 * C13: physical confinement (realpath + lstat + O_NOFOLLOW) — no symlink escape.
 */

import { createHash } from "node:crypto";
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts, realizationHandoffs } from "@/db/schema";
import type { CursorExecutionPlan } from "@/domains/execution/types";
import type { ToolSourceJournal } from "@/domains/conversation/tool-source-journal";
import { recordToolSource } from "@/domains/conversation/tool-source-journal";
import {
  listEvidenceCapturesForAttempt,
  type EvidenceCaptureMeta,
} from "./evidence-captures";
import {
  D8_MAX_FILE_BYTES,
  readConfinedWorkspaceFile,
  type ConfineDenyReason,
} from "./d8-path-confine";

const MAX_TEXT_CHARS = 24_000;

export type D8ReadCoverage =
  | "FOUND"
  | "OPENED"
  | "CONSULTED"
  | "PARTIAL"
  | "DENIED"
  | "NOT_FOUND"
  | "INTEGRITY_FAIL";

export type D8EvidenceScope = {
  pilotId: string;
  projectId: string;
  attemptId: string;
  budget: { remainingCalls: number; remainingChars: number };
  /** C13 — per-tool provenance journal (not mere toolCallsObserved). */
  sourceJournal?: ToolSourceJournal | null;
};

function journalD8(
  scope: D8EvidenceScope,
  entry: {
    tool: string;
    ref: string;
    coverage: string;
    title?: string;
    versionOrSha?: string | null;
    notes?: string;
  },
): void {
  recordToolSource(scope.sourceJournal, {
    kind: "DOCUMENT",
    ref: `d8:${entry.tool}:${entry.ref}`,
    coverage: entry.coverage,
    title: entry.title ?? entry.tool,
    versionOrSha: entry.versionOrSha,
    notes: entry.notes,
  });
}

function confineReasonToCoverage(reason: ConfineDenyReason): {
  coverage: D8ReadCoverage;
  reason: string;
} {
  switch (reason) {
    case "FILE_ABSENT":
      return { coverage: "NOT_FOUND", reason: "FILE_ABSENT" };
    case "FILE_TOO_LARGE":
      return { coverage: "DENIED", reason: "FILE_TOO_LARGE" };
    case "SYMLINK_ESCAPE":
    case "SYMLINK_COMPONENT":
      return { coverage: "DENIED", reason: "SYMLINK_REFUSED" };
    case "ROOT_UNRESOLVABLE":
      return { coverage: "DENIED", reason: "WORKSPACE_INVALID" };
    case "NOT_REGULAR_FILE":
      return { coverage: "DENIED", reason: "NOT_REGULAR_FILE" };
    case "OPEN_FAILED":
      return { coverage: "INTEGRITY_FAIL", reason: "OPEN_FAILED" };
    default:
      return { coverage: "DENIED", reason };
  }
}

function charge(scope: D8EvidenceScope, payload: unknown): void {
  const n = JSON.stringify(payload).length;
  scope.budget.remainingChars = Math.max(0, scope.budget.remainingChars - n);
}

function trimText(text: string, max = MAX_TEXT_CHARS): { text: string; coverage: D8ReadCoverage } {
  if (text.length <= max) return { text, coverage: "CONSULTED" };
  return { text: text.slice(0, max), coverage: "PARTIAL" };
}

async function loadAttempt(scope: D8EvidenceScope) {
  const row = (
    await db
      .select()
      .from(effectAttempts)
      .where(
        and(
          eq(effectAttempts.id, scope.attemptId),
          eq(effectAttempts.projectId, scope.projectId),
          eq(effectAttempts.pilotId, scope.pilotId),
          eq(effectAttempts.kind, "CURSOR_EXECUTION"),
        ),
      )
      .limit(1)
  )[0];
  return row ?? null;
}

/** List authorized pieces for an attempt — metadata only (FOUND ≠ CONSULTED). */
export async function listRealizationEvidence(scope: D8EvidenceScope) {
  if (scope.budget.remainingCalls <= 0 || scope.budget.remainingChars <= 0) {
    journalD8(scope, {
      tool: "list_realization_evidence",
      ref: scope.attemptId,
      coverage: "DENIED",
      notes: "budget exhausted",
    });
    return {
      coverage: "DENIED" as const,
      reason: "D8_TOOL_BUDGET_EXHAUSTED",
      pieces: [] as unknown[],
    };
  }
  scope.budget.remainingCalls -= 1;
  const attempt = await loadAttempt(scope);
  if (!attempt) {
    const out = { coverage: "DENIED" as const, reason: "ATTEMPT_NOT_IN_SCOPE", pieces: [] };
    journalD8(scope, {
      tool: "list_realization_evidence",
      ref: scope.attemptId,
      coverage: "DENIED",
      notes: "out of scope",
    });
    charge(scope, out);
    return out;
  }
  const handoff = (
    await db
      .select()
      .from(realizationHandoffs)
      .where(eq(realizationHandoffs.attemptId, scope.attemptId))
      .limit(1)
  )[0];
  const captures = listEvidenceCapturesForAttempt(scope.attemptId).filter(
    (c) => c.pilotId === scope.pilotId && c.projectId === scope.projectId,
  );
  let plan: CursorExecutionPlan | null = null;
  try {
    plan = JSON.parse(attempt.planJson) as CursorExecutionPlan;
  } catch {
    plan = null;
  }
  const pieces = [
    {
      kind: "HANDOFF_REPORT",
      id: handoff?.id ?? null,
      status: handoff?.status ?? "MISSING",
      integrityHash: handoff?.integrityHash ?? null,
      reportChars: handoff?.reportMarkdown?.length ?? 0,
      coverage: handoff ? ("FOUND" as const) : ("NOT_FOUND" as const),
    },
    ...captures.map((c) => ({
      kind: "EVIDENCE_CAPTURE",
      id: c.id,
      label: c.label,
      mimeType: c.mimeType,
      contentSha256: c.contentSha256,
      byteLength: c.byteLength,
      coverage: "FOUND" as const,
    })),
    {
      kind: "WORKSPACE",
      id: plan?.workspaceKey ?? "default",
      workspaceCwdPresent: Boolean(plan?.workspaceCwd),
      coverage: plan?.workspaceCwd ? ("FOUND" as const) : ("NOT_FOUND" as const),
      note: "Lecture fichier uniquement via read_attempt_workspace_file + chemin relatif",
    },
  ];
  const out = {
    coverage: "OPENED" as const,
    attemptId: scope.attemptId,
    attemptStatus: attempt.status,
    pieces,
  };
  journalD8(scope, {
    tool: "list_realization_evidence",
    ref: scope.attemptId,
    coverage: "DISCOVERED",
    notes: `pieces=${pieces.length} metadata only — content not consulted`,
  });
  charge(scope, out);
  return out;
}

/** Read full handoff report markdown when authorized. */
export async function readRealizationHandoffReport(scope: D8EvidenceScope) {
  if (scope.budget.remainingCalls <= 0 || scope.budget.remainingChars <= 0) {
    journalD8(scope, {
      tool: "read_realization_handoff_report",
      ref: scope.attemptId,
      coverage: "DENIED",
      notes: "budget exhausted",
    });
    return {
      coverage: "DENIED" as const,
      reason: "D8_TOOL_BUDGET_EXHAUSTED",
      content: null as string | null,
    };
  }
  scope.budget.remainingCalls -= 1;
  const attempt = await loadAttempt(scope);
  if (!attempt) {
    const out = {
      coverage: "DENIED" as const,
      reason: "ATTEMPT_NOT_IN_SCOPE",
      content: null,
    };
    journalD8(scope, {
      tool: "read_realization_handoff_report",
      ref: scope.attemptId,
      coverage: "DENIED",
      notes: "out of scope",
    });
    charge(scope, out);
    return out;
  }
  const handoff = (
    await db
      .select()
      .from(realizationHandoffs)
      .where(eq(realizationHandoffs.attemptId, scope.attemptId))
      .limit(1)
  )[0];
  if (!handoff?.reportMarkdown?.trim()) {
    const out = {
      coverage: "NOT_FOUND" as const,
      reason: "HANDOFF_REPORT_ABSENT",
      handoffId: handoff?.id ?? null,
      content: null,
    };
    journalD8(scope, {
      tool: "read_realization_handoff_report",
      ref: handoff?.id ?? "absent",
      coverage: "NOT_FOUND",
    });
    charge(scope, out);
    return out;
  }
  const trimmed = trimText(handoff.reportMarkdown);
  const sha = createHash("sha256")
    .update(handoff.reportMarkdown, "utf8")
    .digest("hex");
  const out = {
    coverage: trimmed.coverage,
    handoffId: handoff.id,
    status: handoff.status,
    integrityHash: handoff.integrityHash,
    contentSha256: sha,
    content: trimmed.text,
    consulted: true,
    limits: [
      "D8_HANDOFF_READ — contenu original consulté",
      trimmed.coverage === "PARTIAL" ? "REPORT_TRUNCATED_BY_BUDGET" : null,
    ].filter(Boolean),
  };
  journalD8(scope, {
    tool: "read_realization_handoff_report",
    ref: handoff.id,
    coverage: trimmed.coverage,
    versionOrSha: sha,
    notes:
      trimmed.coverage === "PARTIAL"
        ? "content partial (truncated)"
        : "content consulted",
  });
  charge(scope, out);
  return out;
}

/**
 * Read a text file under the attempt's server-resolved workspaceCwd.
 * relativePath only — physical confinement via readConfinedWorkspaceFile (C13).
 */
export async function readAttemptWorkspaceFile(
  scope: D8EvidenceScope,
  relativePath: string,
) {
  if (scope.budget.remainingCalls <= 0 || scope.budget.remainingChars <= 0) {
    journalD8(scope, {
      tool: "read_attempt_workspace_file",
      ref: relativePath || "(empty)",
      coverage: "DENIED",
      notes: "budget exhausted",
    });
    return {
      coverage: "DENIED" as const,
      reason: "D8_TOOL_BUDGET_EXHAUSTED",
      content: null as string | null,
    };
  }
  scope.budget.remainingCalls -= 1;
  const attempt = await loadAttempt(scope);
  if (!attempt) {
    const out = {
      coverage: "DENIED" as const,
      reason: "ATTEMPT_NOT_IN_SCOPE",
      content: null,
    };
    journalD8(scope, {
      tool: "read_attempt_workspace_file",
      ref: relativePath || "(empty)",
      coverage: "DENIED",
      notes: "out of scope",
    });
    charge(scope, out);
    return out;
  }
  let plan: CursorExecutionPlan;
  try {
    plan = JSON.parse(attempt.planJson) as CursorExecutionPlan;
  } catch {
    const out = {
      coverage: "DENIED" as const,
      reason: "PLAN_UNPARSEABLE",
      content: null,
    };
    journalD8(scope, {
      tool: "read_attempt_workspace_file",
      ref: relativePath || "(empty)",
      coverage: "DENIED",
      notes: "plan unparseable",
    });
    charge(scope, out);
    return out;
  }
  if (!plan.workspaceCwd?.trim()) {
    const out = {
      coverage: "DENIED" as const,
      reason: "WORKSPACE_ABSENT",
      content: null,
    };
    journalD8(scope, {
      tool: "read_attempt_workspace_file",
      ref: relativePath || "(empty)",
      coverage: "DENIED",
      notes: "workspace absent",
    });
    charge(scope, out);
    return out;
  }

  // Absolute client paths refused before confinement (contract: relative only).
  const rawPath = (relativePath || "").trim();
  if (rawPath.startsWith("/") || rawPath.startsWith("~")) {
    const out = {
      coverage: "DENIED" as const,
      reason: "ABSOLUTE_PATH_REFUSED",
      content: null,
    };
    journalD8(scope, {
      tool: "read_attempt_workspace_file",
      ref: rawPath.slice(0, 80),
      coverage: "DENIED",
      notes: "absolute path refused",
    });
    charge(scope, out);
    return out;
  }

  const confined = readConfinedWorkspaceFile(plan.workspaceCwd, rawPath, {
    maxBytes: D8_MAX_FILE_BYTES,
  });
  if (!confined.ok) {
    const mapped = confineReasonToCoverage(confined.reason);
    const out = {
      coverage: mapped.coverage,
      reason: mapped.reason,
      path: rawPath,
      content: null as string | null,
      detail: confined.detail,
    };
    journalD8(scope, {
      tool: "read_attempt_workspace_file",
      ref: rawPath || "(empty)",
      coverage: mapped.coverage,
      notes: `${mapped.reason}${confined.detail ? `:${confined.detail}` : ""}`,
    });
    charge(scope, out);
    return out;
  }

  const buf = confined.bytes;
  if (buf.includes(0)) {
    const out = {
      coverage: "DENIED" as const,
      reason: "BINARY_FILE_REFUSED",
      path: rawPath,
      content: null as string | null,
      contentSha256: createHash("sha256").update(buf).digest("hex"),
      byteLength: buf.length,
    };
    journalD8(scope, {
      tool: "read_attempt_workspace_file",
      ref: rawPath,
      coverage: "DENIED",
      versionOrSha: out.contentSha256,
      notes: "binary refused — content not disclosed",
    });
    charge(scope, out);
    return out;
  }
  const raw = buf.toString("utf8");
  if (/BEGIN (RSA |OPENSSH )?PRIVATE KEY|\bsk-[A-Za-z0-9]{20,}\b/.test(raw)) {
    const out = {
      coverage: "DENIED" as const,
      reason: "SECRET_MATERIAL_REFUSED",
      path: rawPath,
      content: null as string | null,
    };
    journalD8(scope, {
      tool: "read_attempt_workspace_file",
      ref: rawPath,
      coverage: "DENIED",
      notes: "secret material refused — content not disclosed",
    });
    charge(scope, out);
    return out;
  }
  const trimmed = trimText(raw);
  const sha = createHash("sha256").update(buf).digest("hex");
  const out = {
    coverage: trimmed.coverage,
    path: rawPath,
    contentSha256: sha,
    byteLength: buf.length,
    content: trimmed.text,
    consulted: true,
    limits: [
      "D8_WORKSPACE_FILE_READ — contenu original consulté sous cwd tentative",
      "D8_PATH_CONFINED — realpath+lstat+O_NOFOLLOW (C13)",
      trimmed.coverage === "PARTIAL" ? "CONTENT_TRUNCATED_BY_BUDGET" : null,
    ].filter(Boolean),
  };
  journalD8(scope, {
    tool: "read_attempt_workspace_file",
    ref: rawPath,
    coverage: trimmed.coverage,
    versionOrSha: sha,
    notes:
      trimmed.coverage === "PARTIAL"
        ? "content partial (truncated)"
        : "content consulted",
  });
  charge(scope, out);
  return out;
}

/** Capture metadata — image bytes not inlined into Nora text. */
export async function readEvidenceCaptureMeta(
  scope: D8EvidenceScope,
  captureId: string,
): Promise<{
  coverage: D8ReadCoverage;
  reason?: string;
  capture?: EvidenceCaptureMeta;
  note?: string;
}> {
  if (scope.budget.remainingCalls <= 0 || scope.budget.remainingChars <= 0) {
    journalD8(scope, {
      tool: "read_evidence_capture_meta",
      ref: captureId,
      coverage: "DENIED",
      notes: "budget exhausted",
    });
    return { coverage: "DENIED", reason: "D8_TOOL_BUDGET_EXHAUSTED" };
  }
  scope.budget.remainingCalls -= 1;
  const attempt = await loadAttempt(scope);
  if (!attempt) {
    const out = { coverage: "DENIED" as const, reason: "ATTEMPT_NOT_IN_SCOPE" };
    journalD8(scope, {
      tool: "read_evidence_capture_meta",
      ref: captureId,
      coverage: "DENIED",
      notes: "out of scope",
    });
    charge(scope, out);
    return out;
  }
  const cap = listEvidenceCapturesForAttempt(scope.attemptId).find(
    (c) =>
      c.id === captureId &&
      c.pilotId === scope.pilotId &&
      c.projectId === scope.projectId,
  );
  if (!cap) {
    const out = { coverage: "NOT_FOUND" as const, reason: "CAPTURE_NOT_FOUND" };
    journalD8(scope, {
      tool: "read_evidence_capture_meta",
      ref: captureId,
      coverage: "NOT_FOUND",
    });
    charge(scope, out);
    return out;
  }
  const out = {
    coverage: "OPENED" as const,
    capture: cap,
    note: "Capture image — métadonnées + SHA uniquement (pas d'inline binaire dans Nora)",
  };
  journalD8(scope, {
    tool: "read_evidence_capture_meta",
    ref: captureId,
    coverage: "DISCOVERED",
    versionOrSha: cap.contentSha256,
    notes: "metadata opened — binary content not consulted",
  });
  charge(scope, out);
  return out;
}
```
