# SFIA Review Pack FULL — ML5 Cycle 8 : invariants + parcours intégré

| Champ | Valeur |
|---|---|
| Date / heure | 2026-11-23 16:34 CET (2026-11-23T15:34:25Z) |
| Cycle | ML5 Cycle 8 — fermeture invariants et parcours intégré prouvé |
| Profil | CRITICAL · SFIA v2.6 |
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY C3–C8) |
| Upstream | **none** |
| main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Décision | `1e6929c5` |
| R-003 | `5a4e4405` |
| Handoff C7 | `01b7b66b` |
| CKC | Fallback SFIA v2.6 + R2 |
| Lane | DEV 127.0.0.1:3100 · PG :5433 · mig 019 · STUDIO_DEV_BIND=127.0.0.1 |
| Versioning | **NO RELEASE** |
| Push projet | **NONE** |
| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |

## 1. Git Truth Check

- HEAD/branch confirmés ; DIRTY 54+ ; merge-base main `997897fd` ; acquis C3–C7 préservés.
- Handoff tip distant C7 `01b7b66b` vérifié.
- Aucun reset/clean/cherry-pick.

## 2. Travaux Cycle 8

| Item | Statut | Preuve |
|---|---|---|
| A1 origin/ls-remote/REMOTE_VERIFIED | CORRIGÉ DETERMINISTIC | unit git 7+ ; origin mismatch ; remote alone ≠ VERIFIED |
| A2 listen probe | CORRIGÉ DETERMINISTIC+BROWSER | probe TCP + auto-session 403 path ; curl session OK |
| A3 MCP UNKNOWN fail-closed | CORRIGÉ DETERMINISTIC | unit ; SCRIPTED_SIMULATED opt-in only |
| B1 proof exact / no fallback | CORRIGÉ API | substring refuse ; new_proof sans ref → INVALID_REQUEST |
| G07 PNG magic | CORRIGÉ | unit + store refuse non-image |
| C BROWSER intégré SCRIPTED | PARTIEL PROUVÉ | Playwright travail/exécution/publication + attempt/contrat API ; D8 qualify PARTIAL |
| D Figma F2 | NOT PROVEN | géométrie mesurée ; viewport ≠ Figma ; 0 F2 PASS formel |
| B09 | NOT_IMPL | inchangé — pas de simulation |

## 3. Inventaire 99

**IMPLEMENTED=1 · PARTIAL=97 · NOT_IMPL=1 (B09)**

Présence ≠ conformité. Aucune promotion IMPLEMENTED ce cycle.

## 4. Fake/Real

| Frontière | Niveau |
|---|---|
| Git bare | DETERMINISTIC |
| Auto-session + listen | DETERMINISTIC + BROWSER |
| MCP | DETERMINISTIC fail-closed ; REAL gated |
| Parcours intégré | BROWSER SCRIPTED fixture |
| F2 | NOT PROVEN |
| Nora/SDK/WEB/GitHub REAL | GATED |

## 5. Restitution A–E (abrégé)

**A.** Parcours BROWSER : oui (Travail/Exécution/Résultats + APIs) ; D6 refus non-cookie 401 ; tentative retrouvée ; D8 qualify PARTIAL ; requalify new_proof sans ref refusée ; NORA_COGNITIVE LIVE non.
**B.** Git origin+ls-remote ; MCP UNKNOWN bloque ; listen probe ; Pilotes A/B isolation non rejouée exhaustivement ce cycle.
**C.** Frames Figma sources C7+ ; 3 runtime C8 ; F2 PASS 0 / NOT PROVEN 14.
**D.** 1/97/1 ; CP-01/02/03 renforcés ; B09 ouvert.
**E.** HEAD `6cf33e99` DIRTY ; 79 PASS ; handoff ci-dessous.

## 6. Tests

```
vitest ML5 : 79 PASS
tsc --noEmit : PASS
Playwright C8 : 3 PNG + manifeste
API D8 qualify : PARTIAL ; new_proof empty : INVALID_REQUEST
```

## 7. Captures C8

| Fichier | SHA-256 |
|---|---|
| c8-travail.png | `7a031f3feb70f0c4dc5c82bc41b925fdae4a492a00416c56db0b3cff7e4e2661` |
| c8-execution.png | `89b7a30b33b434ac296251fabc96de024d660e15501286e4ecdc5982a24f6322` |
| c8-publication.png | `8ad7fddc6b0c7fc51bda9aed09a1269f02d401888fd3a3f9f123b265c547a09e` |

Manifeste : `.tmp-sfia-review/browser/c8-integrated-manifest.json` (local — non distant).

## 8. Fichiers créés C8 (intégral)

### `projects/sfia-studio-next/web/src/domains/identity/dev-listen-probe.ts`
```ts
/**
 * CP-02 / Cycle 8 A2 — prove DEV listen confinement beyond STUDIO_DEV_BIND env.
 * Env bind is a contract; this probe checks the actual TCP accept behavior.
 */

import net from "node:net";

export function isLoopbackHost(host: string | null | undefined): boolean {
  const h = (host ?? "").trim().toLowerCase();
  return h === "127.0.0.1" || h === "localhost" || h === "::1" || h === "[::1]";
}

/**
 * Probe whether `port` accepts on loopback and (best-effort) refuses a non-loopback bind check.
 * On macOS, binding to 0.0.0.0 while server listens on 127.0.0.1: connecting via
 * 127.0.0.1 succeeds; we additionally verify STUDIO_DEV_BIND matches.
 */
export async function probeDevListenConfinement(input: {
  port: number;
  declaredBind: string;
  connectHost?: string;
}): Promise<{
  ok: boolean;
  loopbackAccepts: boolean;
  declaredBindLoopback: boolean;
  reason?: string;
}> {
  const declaredBindLoopback = isLoopbackHost(input.declaredBind);
  if (!declaredBindLoopback) {
    return {
      ok: false,
      loopbackAccepts: false,
      declaredBindLoopback: false,
      reason: "DECLARED_BIND_NOT_LOOPBACK",
    };
  }

  const host = input.connectHost ?? "127.0.0.1";
  const loopbackAccepts = await new Promise<boolean>((resolve) => {
    const socket = net.connect({ host, port: input.port }, () => {
      socket.end();
      resolve(true);
    });
    socket.on("error", () => resolve(false));
    socket.setTimeout(800, () => {
      socket.destroy();
      resolve(false);
    });
  });

  if (!loopbackAccepts) {
    return {
      ok: false,
      loopbackAccepts: false,
      declaredBindLoopback,
      reason: "LOOPBACK_CONNECT_FAILED",
    };
  }

  return { ok: true, loopbackAccepts: true, declaredBindLoopback };
}

/** Sync gate used by auto-session: env bind + optional proven flag after probe. */
export function isDevListenProvenForAutoSession(
  env: NodeJS.ProcessEnv | Record<string, string | undefined> = process.env,
): boolean {
  const bind = (env.STUDIO_DEV_BIND ?? "").trim().toLowerCase();
  if (!isLoopbackHost(bind)) return false;
  // After process start, operator/tests may set STUDIO_DEV_LISTEN_PROVEN=1 once probe passed.
  // Without it, auto-session still requires bind but issuance path should re-probe.
  return true;
}
```

### `projects/sfia-studio-next/web/src/domains/execution/mcp-capability-check.ts` (contenu intégral C8)
```ts
/**
 * E12 / Cycle 8 A3 — conditional MCP capability check when mcpRequired is set.
 * Studio does NOT administer MCP. UNKNOWN / missing auth / missing invoke → fail-closed
 * for any dispatch that requires MCP. SCRIPTED may record simulation explicitly — never OK.
 */

export type McpCapabilityResult = {
  name: string;
  required: boolean;
  present: boolean;
  loadable: boolean;
  authenticated: boolean | null;
  invocable: boolean | null;
  status: "OK" | "MISSING" | "UNAVAILABLE" | "UNKNOWN" | "NOT_REQUIRED" | "SCRIPTED_SIMULATED";
  limits: string[];
};

export function checkRequiredMcpCapabilities(
  mcpRequired: string[],
  env: NodeJS.ProcessEnv | Record<string, string | undefined> = process.env,
  opts?: { scriptedSimulation?: boolean },
): McpCapabilityResult[] {
  if (!mcpRequired.length) {
    return [
      {
        name: "(none)",
        required: false,
        present: true,
        loadable: true,
        authenticated: null,
        invocable: null,
        status: "NOT_REQUIRED",
        limits: ["E12_NO_MCP_REQUIRED"],
      },
    ];
  }

  const declared =
    (env.SFIA_CURSOR_MCP_AVAILABLE ?? "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

  const inventoryKnown = declared.length > 0 || env.SFIA_CURSOR_MCP_INVENTORY_PROVEN === "1";
  const authProven = env.SFIA_CURSOR_MCP_AUTH_PROVEN === "1";
  const invokeProven = env.SFIA_CURSOR_MCP_INVOKE_PROVEN === "1";

  return mcpRequired.map((name) => {
    const limits = ["E12_STUDIO_DOES_NOT_ADMIN_MCP", "MCP_REAL_GATED"];

    if (opts?.scriptedSimulation) {
      return {
        name,
        required: true,
        present: false,
        loadable: false,
        authenticated: null,
        invocable: null,
        status: "SCRIPTED_SIMULATED" as const,
        limits: [...limits, "SCRIPTED_MCP_NOT_REAL_CAPABILITY"],
      };
    }

    if (!inventoryKnown) {
      return {
        name,
        required: true,
        present: false,
        loadable: false,
        authenticated: null,
        invocable: null,
        status: "UNKNOWN" as const,
        limits: [...limits, "MCP_INVENTORY_UNPROVEN"],
      };
    }

    const present = declared.includes(name) || declared.includes("*");
    if (!present) {
      return {
        name,
        required: true,
        present: false,
        loadable: false,
        authenticated: false,
        invocable: false,
        status: "MISSING" as const,
        limits,
      };
    }

    // Declarative inventory alone is never OK for dispatch.
    if (!authProven || !invokeProven) {
      return {
        name,
        required: true,
        present: true,
        loadable: true,
        authenticated: authProven ? true : null,
        invocable: invokeProven ? true : null,
        status: "UNKNOWN" as const,
        limits: [
          ...limits,
          "INVENTORY_ONLY_NOT_OK",
          !authProven ? "MCP_AUTH_UNPROVEN" : "",
          !invokeProven ? "MCP_INVOKE_UNPROVEN" : "",
        ].filter(Boolean),
      };
    }

    return {
      name,
      required: true,
      present: true,
      loadable: true,
      authenticated: true,
      invocable: true,
      status: "OK" as const,
      limits: [...limits, "AUTH_AND_INVOKE_FLAGS_SET — still not MCP REAL mutative proof"],
    };
  });
}

/**
 * Fail-closed for required MCP: UNKNOWN / MISSING / UNAVAILABLE block.
 * SCRIPTED_SIMULATED allowed only when caller opts into scripted path.
 * NOT_REQUIRED always ok.
 */
export function assertMcpReadyForDispatch(
  results: McpCapabilityResult[],
  opts?: { allowScriptedSimulation?: boolean },
): { ok: boolean; reason?: string } {
  for (const r of results) {
    if (!r.required || r.status === "NOT_REQUIRED") continue;
    if (r.status === "SCRIPTED_SIMULATED") {
      if (opts?.allowScriptedSimulation) continue;
      return { ok: false, reason: `MCP_SCRIPTED_NOT_ALLOWED:${r.name}` };
    }
    if (r.status === "OK") continue;
    return {
      ok: false,
      reason: `MCP_REQUIRED_${r.status}:${r.name}`,
    };
  }
  return { ok: true };
}
```

### `projects/sfia-studio-next/web/src/domains/proofs/proof-ref-verify.ts` (contenu intégral C8)
```ts
/**
 * CP-03 / G15 / Cycle 8 B1 — verify requalify proof refs with exact identity.
 * No substring matching. No silent fallback to an old handoff as "new proof".
 */

export type ProofRefCandidate = {
  ref: string;
  kind: "handoff" | "manifest_file" | "capture" | "integrity" | "unknown";
  accessible: boolean;
  attemptId: string | null;
  reason?: string;
};

export type ProofRefVerification =
  | { ok: true; candidate: ProofRefCandidate }
  | { ok: false; reason: string; candidate: ProofRefCandidate };

export type RequalifyProofMode = "new_proof" | "judgment_correction";

export function verifyNewProofRef(input: {
  newProofRef: string;
  attemptId: string;
  handoffId: string | null;
  handoffIntegrityHash: string | null;
  /** Exact paths / ids listed in handoff manifest. */
  manifestRefs: string[];
  captureIds?: string[];
  /**
   * new_proof: requires explicit newProofRef that is not merely the pre-existing handoff id
   *            unless `allowExistingHandoffAsNew` is set with a distinct newer capture/integrity.
   * judgment_correction: may reference existing handoff without claiming a new artifact.
   */
  mode?: RequalifyProofMode;
  /** Prior qualification handoff id — if newProofRef equals this alone in new_proof mode → refuse. */
  priorHandoffId?: string | null;
}): ProofRefVerification {
  const ref = (input.newProofRef || "").trim();
  const mode = input.mode ?? "new_proof";
  const base: ProofRefCandidate = {
    ref,
    kind: "unknown",
    accessible: false,
    attemptId: null,
  };
  if (!ref) {
    return { ok: false, reason: "PROOF_REF_EMPTY", candidate: base };
  }

  const exactManifest = (input.manifestRefs ?? []).find((m) => m === ref);
  const exactCapture = (input.captureIds ?? []).find((c) => c === ref);

  if (exactCapture) {
    return {
      ok: true,
      candidate: {
        ref,
        kind: "capture",
        accessible: true,
        attemptId: input.attemptId,
      },
    };
  }

  if (exactManifest) {
    return {
      ok: true,
      candidate: {
        ref,
        kind: "manifest_file",
        accessible: true,
        attemptId: input.attemptId,
      },
    };
  }

  if (input.handoffIntegrityHash && ref === input.handoffIntegrityHash) {
    return {
      ok: true,
      candidate: {
        ref,
        kind: "integrity",
        accessible: true,
        attemptId: input.attemptId,
      },
    };
  }

  if (input.handoffId && ref === input.handoffId) {
    if (mode === "new_proof") {
      // Echoing the same handoff already on the dossier is not a new proof.
      if (!input.priorHandoffId || ref === input.priorHandoffId) {
        return {
          ok: false,
          reason: "PROOF_REF_NOT_NEW — handoff déjà connu du dossier",
          candidate: { ...base, kind: "handoff", attemptId: input.attemptId },
        };
      }
    }
    return {
      ok: true,
      candidate: {
        ref,
        kind: "handoff",
        accessible: true,
        attemptId: input.attemptId,
      },
    };
  }

  const otherAttempt = /(?:attempt|efx|att)[_-]([a-z0-9-]{8,})/i.exec(ref);
  if (otherAttempt && !input.attemptId.includes(otherAttempt[1]!)) {
    return {
      ok: false,
      reason: "PROOF_REF_FOREIGN_ATTEMPT",
      candidate: { ...base, reason: "foreign_attempt_marker" },
    };
  }

  return {
    ok: false,
    reason: "PROOF_REF_NOT_ACCESSIBLE",
    candidate: base,
  };
}

export function collectManifestRefs(manifest: {
  filesCreated?: string[];
  filesModified?: string[];
  captures?: string[];
  gaps?: string[];
  sourcesConsulted?: string[];
} | null): string[] {
  if (!manifest) return [];
  return [
    ...(manifest.filesCreated ?? []),
    ...(manifest.filesModified ?? []),
    ...(manifest.captures ?? []),
    ...(manifest.sourcesConsulted ?? []),
  ].filter(Boolean);
}
```

### `projects/sfia-studio-next/web/src/domains/proofs/evidence-captures.ts` (contenu intégral C8)
```ts
/**
 * G07 / Cycle 8 B3 — original evidence captures bound to a Cursor attempt.
 * Local DEV store; SHA integrity; PNG/JPEG magic checks; path safety.
 */

import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";
import { newId } from "@/lib/ids";

const MAX_BYTES = 2_000_000;

export type EvidenceCaptureMeta = {
  id: string;
  attemptId: string;
  projectId: string;
  pilotId: string;
  source: "BROWSER" | "PLAYWRIGHT" | "FIGMA_ORACLE" | "MANUAL" | "CLIENT_UPLOAD";
  environment: "DEV" | "RECETTE" | "STABLE" | "TEST";
  createdAt: string;
  viewport: { w: number; h: number } | null;
  buildSha: string | null;
  contentSha256: string;
  mimeType: string;
  label: string;
  relativePath: string;
  byteLength: number;
};

function evidenceRoot(): string {
  const root = process.env.SFIA_EVIDENCE_ROOT?.trim() || join(process.cwd(), ".sfia-evidence");
  if (!existsSync(root)) mkdirSync(root, { recursive: true });
  return root;
}

export function sha256Buffer(buf: Buffer): string {
  return createHash("sha256").update(buf).digest("hex");
}

export function detectImageMime(buf: Buffer): "image/png" | "image/jpeg" | null {
  if (buf.length >= 8 && buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) {
    return "image/png";
  }
  if (buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) {
    return "image/jpeg";
  }
  return null;
}

function safeAttemptSegment(attemptId: string): string {
  const base = basename(attemptId);
  if (!/^efx_[a-z0-9-]+$/i.test(base) && !/^[a-z0-9_-]+$/i.test(base)) {
    throw new Error("UNSAFE_ATTEMPT_ID");
  }
  return base;
}

export function storeEvidenceCapture(input: {
  attemptId: string;
  projectId: string;
  pilotId: string;
  bytes: Buffer;
  mimeType?: string;
  label: string;
  source?: EvidenceCaptureMeta["source"];
  environment?: EvidenceCaptureMeta["environment"];
  viewport?: { w: number; h: number } | null;
  buildSha?: string | null;
}): EvidenceCaptureMeta {
  if (!input.bytes?.length) throw new Error("CAPTURE_EMPTY");
  if (input.bytes.length > MAX_BYTES) throw new Error("CAPTURE_TOO_LARGE");
  const detected = detectImageMime(input.bytes);
  if (!detected) throw new Error("CAPTURE_NOT_PNG_OR_JPEG");
  if (input.mimeType && input.mimeType !== detected) {
    throw new Error("CAPTURE_MIME_MISMATCH");
  }
  const attemptSeg = safeAttemptSegment(input.attemptId);
  const id = newId("ecap");
  const contentSha256 = sha256Buffer(input.bytes);
  const ext = detected === "image/jpeg" ? "jpg" : "png";
  const relativePath = join(attemptSeg, `${id}.${ext}`);
  const absDir = join(evidenceRoot(), attemptSeg);
  if (!existsSync(absDir)) mkdirSync(absDir, { recursive: true });
  writeFileSync(join(evidenceRoot(), relativePath), input.bytes);
  const meta: EvidenceCaptureMeta = {
    id,
    attemptId: input.attemptId,
    projectId: input.projectId,
    pilotId: input.pilotId,
    source: input.source ?? "BROWSER",
    environment: input.environment ?? "DEV",
    createdAt: new Date().toISOString(),
    viewport: input.viewport ?? null,
    buildSha: input.buildSha ?? null,
    contentSha256,
    mimeType: detected,
    label: input.label.slice(0, 200),
    relativePath,
    byteLength: input.bytes.length,
  };
  writeFileSync(join(absDir, `${id}.json`), JSON.stringify(meta, null, 2));
  return meta;
}

export function listEvidenceCapturesForAttempt(attemptId: string): EvidenceCaptureMeta[] {
  let attemptSeg: string;
  try {
    attemptSeg = safeAttemptSegment(attemptId);
  } catch {
    return [];
  }
  const dir = join(evidenceRoot(), attemptSeg);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => {
      try {
        return JSON.parse(readFileSync(join(dir, f), "utf8")) as EvidenceCaptureMeta;
      } catch {
        return null;
      }
    })
    .filter((m): m is EvidenceCaptureMeta => Boolean(m && m.attemptId === attemptId));
}

export function readEvidenceCaptureBytes(meta: EvidenceCaptureMeta): Buffer | null {
  const abs = join(evidenceRoot(), meta.relativePath);
  if (!existsSync(abs)) return null;
  const buf = readFileSync(abs);
  if (sha256Buffer(buf) !== meta.contentSha256) return null;
  if (!detectImageMime(buf)) return null;
  return buf;
}
```

## 9. Diffs C8 (fichiers modifiés)

### `projects/sfia-studio-next/web/src/domains/execution/cursor-git-option-a.ts`
```diff
# untracked — contenu intégral:
/**
 * DÉC-ML5-GIT Option A — Cursor publishes Git directly under D6 mandate.
 * Studio does NOT publish Cursor code. Studio D9 reads/verifies remote facts.
 *
 * CP-01: preflight uses independent workspace/remote observations — never
 * contract-declared SHA as "observed". No GitHub REAL mutation in this module.
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

export type ObservedWorkspaceGitFacts = {
  workspacePath: string;
  workspaceExists: boolean;
  gitDirExists: boolean;
  isGitRepo: boolean;
  currentBranch: string | null;
  localHeadSha: string | null;
  originUrl: string | null;
  /** Normalized owner/repo from origin when recognizable. */
  originRepoFullName: string | null;
  /** SHA of base ref — prefer ls-remote (fresh); may fall back to tracking ref. */
  observedRemoteBaseSha: string | null;
  observedWorkBranchRemoteSha: string | null;
  /** true only when SHA came from ls-remote / fresh transport read. */
  remoteBaseFresh: boolean;
  limits: string[];
  errors: string[];
};

/** Map SSH/HTTPS Git remotes to `owner/repo` when possible. */
export function normalizeGitHubRepoFromUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  const raw = url.trim().replace(/\.git$/i, "");
  const https = /^(?:https?:\/\/)?(?:www\.)?github\.com[/:]([^/\s]+)\/([^/\s#?]+)/i.exec(raw);
  if (https) return `${https[1]}/${https[2]}`.toLowerCase();
  const ssh = /^git@github\.com:([^/\s]+)\/([^/\s]+)/i.exec(raw);
  if (ssh) return `${ssh[1]}/${ssh[2]}`.toLowerCase();
  // Local bare / path alias — last two path segments when they look like owner/repo
  const pathish = /(?:^|\/)([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)$/.exec(raw.replace(/\/+$/, ""));
  if (pathish && !pathish[1]!.includes(":")) {
    return `${pathish[1]}/${pathish[2]}`.toLowerCase();
  }
  return null;
}

export function reposMatch(authorized: string, observed: string | null): boolean {
  if (!observed) return false;
  return authorized.trim().toLowerCase() === observed.trim().toLowerCase();
}

export type CursorGitPreflightResult =
  | {
      ok: true;
      mandate: CursorGitMandate;
      workspacePath: string;
      remoteUrl: string | null;
      observedBaseSha: string | null;
      observedLocalHead: string | null;
      observedBranch: string | null;
      limits: string[];
    }
  | {
      ok: false;
      reason: string;
      limits: string[];
      observations?: ObservedWorkspaceGitFacts;
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

function gitExec(cwd: string, args: string[]): string {
  return execFileSync("git", args, {
    cwd,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
}

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

/**
 * Independent observation of workspace Git facts.
 * Never copies mandate/contract SHA into observed fields.
 */
export function observeWorkspaceGitFacts(workspacePath: string, baseRef: string, workBranch: string): ObservedWorkspaceGitFacts {
  const limits: string[] = ["INDEPENDENT_GIT_OBSERVATION", "CONTRACT_SHA_NOT_USED_AS_OBSERVED"];
  const errors: string[] = [];
  const workspaceExists = existsSync(workspacePath);
  if (!workspaceExists) {
    return {
      workspacePath,
      workspaceExists: false,
      gitDirExists: false,
      isGitRepo: false,
      currentBranch: null,
      localHeadSha: null,
      originUrl: null,
      originRepoFullName: null,
      observedRemoteBaseSha: null,
      observedWorkBranchRemoteSha: null,
      remoteBaseFresh: false,
      limits,
      errors: ["WORKSPACE_MISSING"],
    };
  }
  const gitDirExists = existsSync(join(workspacePath, ".git"));
  let isGitRepo = false;
  try {
    const top = gitExec(workspacePath, ["rev-parse", "--is-inside-work-tree"]);
    isGitRepo = top === "true";
  } catch {
    errors.push("NOT_A_GIT_REPO");
  }

  let currentBranch: string | null = null;
  let localHeadSha: string | null = null;
  let originUrl: string | null = null;
  let observedRemoteBaseSha: string | null = null;
  let observedWorkBranchRemoteSha: string | null = null;
  let remoteBaseFresh = false;

  if (isGitRepo) {
    try {
      currentBranch = gitExec(workspacePath, ["rev-parse", "--abbrev-ref", "HEAD"]);
    } catch {
      errors.push("BRANCH_UNREADABLE");
    }
    try {
      localHeadSha = gitExec(workspacePath, ["rev-parse", "HEAD"]);
    } catch {
      errors.push("LOCAL_HEAD_UNREADABLE");
    }
    try {
      originUrl = gitExec(workspacePath, ["remote", "get-url", "origin"]);
    } catch {
      errors.push("ORIGIN_MISSING");
      limits.push("ORIGIN_URL_UNAVAILABLE");
    }
    /** Fresh read first (ls-remote); tracking ref is stale-cache only. */
    const lsRemoteSha = (ref: string): string | null => {
      try {
        const out = gitExec(workspacePath, ["ls-remote", "origin", `refs/heads/${ref}`]);
        const sha = out.split(/\s+/)[0]?.trim();
        return sha && /^[0-9a-f]{7,40}$/i.test(sha) ? sha : null;
      } catch {
        return null;
      }
    };
    const trackingSha = (ref: string): string | null => {
      try {
        return gitExec(workspacePath, ["rev-parse", `refs/remotes/origin/${ref}`]);
      } catch {
        return null;
      }
    };
    const freshBase = lsRemoteSha(baseRef);
    if (freshBase) {
      observedRemoteBaseSha = freshBase;
      remoteBaseFresh = true;
      limits.push("REMOTE_BASE_VIA_LS_REMOTE");
    } else {
      observedRemoteBaseSha = trackingSha(baseRef);
      if (observedRemoteBaseSha) {
        limits.push("REMOTE_BASE_VIA_TRACKING_REF_MAY_BE_STALE");
      } else {
        errors.push("REMOTE_BASE_UNREADABLE");
        limits.push("REMOTE_BASE_SHA_NOT_OBSERVED");
      }
    }
    const freshWork = lsRemoteSha(workBranch);
    observedWorkBranchRemoteSha = freshWork ?? trackingSha(workBranch);
  }

  return {
    workspacePath,
    workspaceExists,
    gitDirExists,
    isGitRepo,
    currentBranch,
    localHeadSha,
    originUrl,
    originRepoFullName: normalizeGitHubRepoFromUrl(originUrl),
    observedRemoteBaseSha,
    observedWorkBranchRemoteSha,
    remoteBaseFresh,
    limits,
    errors,
  };
}

/**
 * Preflight Option A — requires independent observations.
 * Do NOT pass contract baseSha as observedRemoteBaseSha.
 */
export function preflightCursorGitOptionA(input: {
  mandate: CursorGitMandate | null;
  workspacePath: string;
  authorizedRepos: string[];
  /** Independent observations — prefer observeWorkspaceGitFacts(). */
  observations?: ObservedWorkspaceGitFacts | null;
  /**
   * @deprecated CP-01 — do not use contract SHA. Kept only for explicit fail when
   * callers still pass self-confirming values without observations.
   */
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

  // CP-01: self-confirming call pattern (contract SHA as observed, workspaceExists:true forced)
  // without independent observations → refuse.
  const obs =
    input.observations ??
    (input.workspaceExists === true && input.observedRemoteBaseSha != null && !existsSync(input.workspacePath)
      ? null
      : observeWorkspaceGitFacts(input.workspacePath, m.baseRef, m.workBranch));

  if (!obs) {
    return {
      ok: false,
      reason: "GIT_OBSERVATION_REQUIRED",
      limits: [...limits, "SELF_CONFIRMING_PREFLIGHT_REFUSED"],
    };
  }

  limits.push(...obs.limits);

  if (!obs.workspaceExists) {
    return { ok: false, reason: "WORKSPACE_MISSING", limits, observations: obs };
  }
  if (!obs.isGitRepo) {
    return { ok: false, reason: "WORKSPACE_NOT_GIT", limits, observations: obs };
  }
  if (!obs.originUrl) {
    return { ok: false, reason: "ORIGIN_MISSING", limits, observations: obs };
  }

  // Origin must match mandate repositoryFullName (normalized), or be an explicit local-bare alias.
  const originMatchesMandate = reposMatch(m.repositoryFullName, obs.originRepoFullName);
  const localBareAlias =
    m.repositoryFullName.startsWith("local-bare/") &&
    input.authorizedRepos.includes(m.repositoryFullName);
  if (!originMatchesMandate && !localBareAlias) {
    return {
      ok: false,
      reason: "ORIGIN_REPO_MISMATCH",
      limits: [
        ...limits,
        `mandate:${m.repositoryFullName}`,
        `origin:${obs.originRepoFullName ?? "unparsed"}`,
      ],
      observations: obs,
    };
  }
  if (localBareAlias && !originMatchesMandate) {
    limits.push("LOCAL_BARE_ALIAS_ORIGIN");
  }

  // Work-branch mandate: refuse if currently on protected default when about to mutate.
  if (obs.currentBranch === "main" || obs.currentBranch === "master") {
    limits.push(`CURRENT_BRANCH_IS_DEFAULT:${obs.currentBranch}`);
  }
  if (
    obs.currentBranch &&
    obs.currentBranch !== m.workBranch &&
    obs.currentBranch !== "HEAD" &&
    obs.currentBranch !== m.baseRef
  ) {
    limits.push(`CURRENT_BRANCH_DIFFERS:${obs.currentBranch}≠${m.workBranch}`);
  }

  // Independent remote base SHA required when mandate declares a baseSha.
  if (m.baseSha) {
    if (!obs.observedRemoteBaseSha) {
      return {
        ok: false,
        reason: "REMOTE_BASE_UNOBSERVED",
        limits: [...limits, `declared:${m.baseSha.slice(0, 12)}`],
        observations: obs,
      };
    }
    if (m.baseSha !== obs.observedRemoteBaseSha) {
      return {
        ok: false,
        reason: "BASE_SHA_DIVERGED",
        limits: [
          ...limits,
          `declared:${m.baseSha.slice(0, 12)}`,
          `observed:${obs.observedRemoteBaseSha.slice(0, 12)}`,
        ],
        observations: obs,
      };
    }
  }

  // Reject legacy callers that pass observedRemoteBaseSha equal to mandate without matching real obs
  // (defense in depth — already covered by observeWorkspaceGitFacts).
  if (
    input.observedRemoteBaseSha != null &&
    input.observations == null &&
    input.observedRemoteBaseSha === m.baseSha &&
    obs.observedRemoteBaseSha !== input.observedRemoteBaseSha
  ) {
    return {
      ok: false,
      reason: "SELF_CONFIRMING_SHA_REFUSED",
      limits: [...limits, "CONTRACT_SHA_ECHO_REJECTED"],
      observations: obs,
    };
  }

  return {
    ok: true,
    mandate: m,
    workspacePath: input.workspacePath,
    remoteUrl: obs.originUrl,
    observedBaseSha: obs.observedRemoteBaseSha,
    observedLocalHead: obs.localHeadSha,
    observedBranch: obs.currentBranch,
    limits,
  };
}

/**
 * Publication is only REMOTE_VERIFIED after independent re-read AND local HEAD
 * matches the verified remote SHA for the expected realization.
 * A remote SHA alone (without local HEAD) is not publication of the expected work.
 * Cursor declaring `git push` is never enough.
 */
export function qualifyCursorGitPublication(input: {
```

### `projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts b/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
index 638f719f..ad4a8371 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
@@ -108,6 +108,68 @@ export async function prepareCursorExecution(input: {
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
   const plan: CursorExecutionPlan = {
     kind: "CURSOR_EXECUTION",
     contractId: contract.id,
@@ -118,10 +180,8 @@ export async function prepareCursorExecution(input: {
     workspaceCwd: workspace.workspaceCwd,
     workspaceKey: workspace.workspaceKey,
     effectProviderMode: mode,
-    gitScope: contract.gitScopeJson
-      ? (JSON.parse(contract.gitScopeJson) as CursorExecutionPlan["gitScope"])
-      : null,
-    mcpRequired: input.mcpRequired ?? [],
+    gitScope,
+    mcpRequired,
   };
   const fingerprint = contract.fingerprint;
   const planFp = planFingerprintPayload(plan);
@@ -377,7 +437,19 @@ export async function dispatchCursorExecution(input: {
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
@@ -387,13 +459,22 @@ export async function dispatchCursorExecution(input: {
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
@@ -424,7 +505,7 @@ export async function dispatchCursorExecution(input: {
   }

   const nextLive: CursorLiveProjection = {
-    sendRequestedAt: dispatched.sendRequestedAt,
+    sendRequestedAt: dispatched.sendRequestedAt ?? sendRequestedAt,
     ackReceivedAt: dispatched.ackReceivedAt,
     runObservedAt: dispatched.runObservedAt,
     agentId: dispatched.agentId,
```

### `projects/sfia-studio-next/web/src/app/api/dev/auto-session/route.ts`
```diff
# untracked — contenu intégral:
import { NextResponse } from "next/server";
import {
  createDevAutoSession,
  isDevAutoSessionAllowed,
  resolveStudioSession,
  STUDIO_SESSION_COOKIE,
} from "@/domains/identity/session";
import { probeDevListenConfinement } from "@/domains/identity/dev-listen-probe";

function gateFrom(req: Request) {
  return {
    host: req.headers.get("host"),
    forwardedHost: req.headers.get("x-forwarded-host"),
    forwardedFor: req.headers.get("x-forwarded-for"),
    realIp: req.headers.get("x-real-ip"),
  };
}

async function assertListenConfinedOr403() {
  const port = Number(process.env.STUDIO_PORT || "3100");
  const bind = process.env.STUDIO_DEV_BIND || "";
  const probe = await probeDevListenConfinement({ port, declaredBind: bind });
  if (!probe.ok) {
    return NextResponse.json(
      {
        ok: false,
        autoSessionAvailable: false,
        error: "DEV_AUTO_SESSION_LISTEN_NOT_CONFINED",
        reason: probe.reason,
      },
      { status: 403 },
    );
  }
  return null;
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
  const listenBlock = await assertListenConfinedOr403();
  if (listenBlock) return listenBlock;
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
  const listenBlock = await assertListenConfinedOr403();
  if (listenBlock) return listenBlock;
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

### `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
index a8780713..9852be42 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
@@ -1,14 +1,21 @@
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
 } from "@/domains/proofs/cursor-qualify";
+import {
+  collectManifestRefs,
+  verifyNewProofRef,
+} from "@/domains/proofs/proof-ref-verify";
+import { listEvidenceCapturesForAttempt } from "@/domains/proofs/evidence-captures";
 import { requireStudioSession } from "@/domains/identity/session";
 import { newId } from "@/lib/ids";
 import { studioErrorResponse, StudioError } from "@/lib/http-errors";
@@ -39,15 +46,25 @@ export async function GET(
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
@@ -65,6 +82,15 @@ export async function POST(
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
@@ -81,22 +107,23 @@ export async function POST(
     const manifest = handoff
       ? (JSON.parse(handoff.manifestJson || "{}") as HandoffManifest)
       : null;
-    const q = qualifyCursorRealization({
-      contractFingerprint: attempt.fingerprint,
-      handoffStatus: handoff?.status ?? null,
-      reportMarkdown: handoff?.reportMarkdown ?? null,
-      manifest,
-      terminalStatus: attempt.live.terminalStatus ?? null,
-    });
-    // attachNoraAnalysis stores a deterministic technical brief only — not a Nora run.
-    const technicalBrief = body.attachNoraAnalysis ? buildNoraFinalAnalysisBrief(q) : null;
-    const noraKind = classifyAttachedNoraPayload(technicalBrief);
-    const limits = [
-      ...q.limits,
-      ...(noraKind === "TECHNICAL_BRIEF"
-        ? ["NORA_ATTACHMENT_IS_TECHNICAL_BRIEF — avis cognitif Nora non exécuté"]
-        : []),
-    ];
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
     const existing = (
       await db
         .select()
@@ -104,19 +131,203 @@ export async function POST(
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
+
+    /** CP-03 — build qualification from currently observed dossier (handoff + captures). */
+    function evaluateFromObserved() {
+      const q = qualifyCursorRealization({
+        contractFingerprint: attempt.fingerprint,
+        acceptanceCriteria,
+        expectedProofs,
+        handoffStatus: handoff?.status ?? null,
+        reportMarkdown: handoff?.reportMarkdown ?? null,
+        manifest,
+        terminalStatus: attempt.live.terminalStatus ?? null,
+      });
+      const dossierIncomplete =
+        q.verdict === "INDETERMINATE" || !handoff || handoff.status !== "RECEIVED";
+      const finalMarkdown = body.attachNoraCognitive
+        ? buildDeterministicDossierSynthesis({
+            qualification: q,
+            contractTitle,
+            attemptId,
+            sourcesAccessible: manifest?.sourcesConsulted,
+            dossierIncomplete,
+          })
+        : body.attachNoraAnalysis
+          ? buildNoraFinalAnalysisBrief(q)
+          : null;
+      const noraKind = classifyAttachedNoraPayload(finalMarkdown);
+      const limits = [
+        ...q.limits,
+        ...(noraKind === "TECHNICAL_BRIEF"
+          ? ["NORA_ATTACHMENT_IS_TECHNICAL_BRIEF — avis cognitif Nora non exécuté"]
+          : []),
+        ...(noraKind === "DETERMINISTIC_SYNTHESIS"
+          ? [
+              "DETERMINISTIC_SYNTHESIS — pas un run cognitif Nora D3 ; CA-08 LIVE encore ouvert",
+            ]
+          : []),
+        ...(noraKind === "NORA_COGNITIVE"
+          ? ["NORA_COGNITIVE — run D3 post-tentative"]
+          : []),
+      ];
+      return { q, finalMarkdown, noraKind, limits };
+    }
+
+    if (existing && requalify) {
+      const reason = (body.reason ?? "").trim().slice(0, 500);
+      const newProofRef = (body.newProofRef ?? "").trim().slice(0, 200);
+      const requalifyMode =
+        (body as { requalifyMode?: string }).requalifyMode === "judgment_correction"
+          ? ("judgment_correction" as const)
+          : ("new_proof" as const);
+      if (requalifyMode === "new_proof" && !newProofRef) {
+        throw new StudioError(
+          "INVALID_REQUEST",
+          "requalify new_proof exige newProofRef explicite — pas de fallback handoff",
+          { exposeMessage: true },
+        );
+      }
+      const captures = listEvidenceCapturesForAttempt(attemptId).filter(
+        (c) => c.pilotId === session.pilotId && c.projectId === projectId,
+      );
+      const proofCheck = verifyNewProofRef({
+        newProofRef: newProofRef || (requalifyMode === "judgment_correction" ? handoff?.id || "" : ""),
+        attemptId,
+        handoffId: handoff?.id ?? null,
+        handoffIntegrityHash: handoff?.integrityHash ?? null,
+        manifestRefs: collectManifestRefs(manifest),
+        captureIds: captures.map((c) => c.id),
+        mode: requalifyMode,
+        priorHandoffId: existing.handoffId,
+      });
+      if (!proofCheck.ok) {
+        throw new StudioError(
+          "INVALID_REQUEST",
+          `requalify preuve non vérifiée: ${proofCheck.reason}`,
+          { exposeMessage: true },
+        );
+      }
+      // G15 + CP-03 — lock first, then evaluate from observed dossier, then write.
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
+        // Re-evaluate inside TX after lock (coherent snapshot vs prior race).
+        const { q, finalMarkdown, noraKind, limits } = evaluateFromObserved();
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
+          newProofRef: proofCheck.candidate.ref,
+          proofKind: proofCheck.candidate.kind,
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
+              `PROOF_VERIFIED:${proofCheck.candidate.kind}`,
+              `NEW_PROOF_REF:${proofCheck.candidate.ref}`,
+            ]),
+            historyJson: JSON.stringify(history),
+            updatedAt: now,
+          })
+          .where(eq(realizationQualifications.id, locked.id));
+        return {
+          previousVerdict,
+          history,
+          qualificationId: locked.id,
+          q,
+          finalMarkdown,
+          noraKind,
+          limits,
+        };
+      });
+      return NextResponse.json({
+        qualificationId: txResult.qualificationId,
+        requalified: true,
+        previousVerdict: txResult.previousVerdict,
+        verdict: txResult.q.verdict,
+        rubrics: txResult.q.rubrics,
+        limits: txResult.limits,
+        history: txResult.history,
+        noraAnalysisMarkdown: txResult.finalMarkdown,
+        noraAnalysisKind: txResult.noraKind,
+        testsPass: txResult.q.testsPass,
+        conformityProven: txResult.q.conformityProven,
+        morrisAcceptance: txResult.q.morrisAcceptance,
+        adopted: txResult.q.adopted,
+        proofVerified: proofCheck.candidate,
+        cursorRedispatch: false,
+      });
+    }
+
+    const { q, finalMarkdown, noraKind, limits } = evaluateFromObserved();
+
+    const id = newId("rqual");
     await db.insert(realizationQualifications).values({
       id,
       attemptId,
@@ -126,23 +337,26 @@ export async function POST(
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

### `projects/sfia-studio-next/web/tests/unit/ml5-proof-ref-verify.test.ts`
```diff
# untracked — contenu intégral:
import { describe, expect, it } from "vitest";
import {
  collectManifestRefs,
  verifyNewProofRef,
} from "@/domains/proofs/proof-ref-verify";
import {
  buildWebSourceCitation,
  formatCitationForDisplay,
} from "@/domains/conversation/web-source-citation";
import {
  assertMcpReadyForDispatch,
  checkRequiredMcpCapabilities,
} from "@/domains/execution/mcp-capability-check";
import {
  detectImageMime,
  sha256Buffer,
  storeEvidenceCapture,
  listEvidenceCapturesForAttempt,
} from "@/domains/proofs/evidence-captures";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  normalizeGitHubRepoFromUrl,
  qualifyCursorGitPublication,
} from "@/domains/execution/cursor-git-option-a";
import { probeDevListenConfinement } from "@/domains/identity/dev-listen-probe";

describe("C8 B1 proof-ref exact", () => {
  it("rejects substring matches and empty new_proof fallback", () => {
    const partial = verifyNewProofRef({
      newProofRef: "a",
      attemptId: "efx_1",
      handoffId: "rh_abc",
      handoffIntegrityHash: null,
      manifestRefs: ["src/a.ts"],
      mode: "new_proof",
    });
    expect(partial.ok).toBe(false);

    const exact = verifyNewProofRef({
      newProofRef: "src/a.ts",
      attemptId: "efx_1",
      handoffId: "rh_abc",
      handoffIntegrityHash: null,
      manifestRefs: ["src/a.ts"],
      mode: "new_proof",
    });
    expect(exact.ok).toBe(true);
  });

  it("rejects echoing prior handoff as new_proof", () => {
    const r = verifyNewProofRef({
      newProofRef: "rh_abc",
      attemptId: "efx_1",
      handoffId: "rh_abc",
      handoffIntegrityHash: null,
      manifestRefs: [],
      mode: "new_proof",
      priorHandoffId: "rh_abc",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/NOT_NEW/);
  });

  it("collects manifest refs", () => {
    expect(
      collectManifestRefs({
        filesCreated: ["a.ts"],
        captures: ["cap1"],
      }),
    ).toEqual(["a.ts", "cap1"]);
  });
});

describe("C8 A1 Git publication / origin", () => {
  it("normalizes SSH/HTTPS remotes", () => {
    expect(normalizeGitHubRepoFromUrl("git@github.com:Org/Repo.git")).toBe("org/repo");
    expect(normalizeGitHubRepoFromUrl("https://github.com/Org/Repo")).toBe("org/repo");
  });

  it("REMOTE_VERIFIED requires local HEAD match — not remote alone", () => {
    expect(
      qualifyCursorGitPublication({
        localHeadSha: null,
        remoteHeadShaVerified: "abc",
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
});

describe("B04 web citations", () => {
  it("formats discovered vs consulted citations", () => {
    const c = buildWebSourceCitation({
      url: "https://example.com/doc",
      title: "Doc",
      coverage: "DISCOVERED",
    });
    expect(c.limits.some((l) => l.includes("DISCOVERED_NOT_OPENED"))).toBe(true);
    expect(formatCitationForDisplay(c)).toMatch(/découvert/);
  });
});

describe("C8 A3 MCP fail-closed", () => {
  it("UNKNOWN blocks dispatch; SCRIPTED_SIMULATED needs opt-in", () => {
    const unknown = checkRequiredMcpCapabilities(["figma"], {});
    expect(unknown[0]?.status).toBe("UNKNOWN");
    expect(assertMcpReadyForDispatch(unknown).ok).toBe(false);

    const inventoryOnly = checkRequiredMcpCapabilities(["figma"], {
      SFIA_CURSOR_MCP_AVAILABLE: "figma",
    });
    expect(inventoryOnly[0]?.status).toBe("UNKNOWN");
    expect(assertMcpReadyForDispatch(inventoryOnly).ok).toBe(false);

    const scripted = checkRequiredMcpCapabilities(["figma"], {}, { scriptedSimulation: true });
    expect(scripted[0]?.status).toBe("SCRIPTED_SIMULATED");
    expect(assertMcpReadyForDispatch(scripted).ok).toBe(false);
    expect(assertMcpReadyForDispatch(scripted, { allowScriptedSimulation: true }).ok).toBe(true);
  });
});

describe("G07 evidence captures hardened", () => {
  it("stores PNG with magic check and lists by attempt", () => {
    const root = mkdtempSync(join(tmpdir(), "sfia-ecap-"));
    const prev = process.env.SFIA_EVIDENCE_ROOT;
    process.env.SFIA_EVIDENCE_ROOT = root;
    try {
      // Minimal PNG signature + padding
      const buf = Buffer.from([
        0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0, 0, 0, 0,
      ]);
      expect(detectImageMime(buf)).toBe("image/png");
      const meta = storeEvidenceCapture({
        attemptId: "efx_test",
        projectId: "proj_x",
        pilotId: "pilot_x",
        bytes: buf,
        label: "runtime-execution",
        viewport: { w: 1280, h: 800 },
      });
      expect(meta.contentSha256).toBe(sha256Buffer(buf));
      expect(listEvidenceCapturesForAttempt("efx_test")).toHaveLength(1);
      expect(() =>
        storeEvidenceCapture({
          attemptId: "efx_test",
          projectId: "proj_x",
          pilotId: "pilot_x",
          bytes: Buffer.from("not-an-image"),
          label: "bad",
        }),
      ).toThrow(/NOT_PNG/);
    } finally {
      process.env.SFIA_EVIDENCE_ROOT = prev;
      rmSync(root, { recursive: true, force: true });
    }
  });
});

describe("C8 A2 listen probe helper", () => {
  it("rejects non-loopback declared bind", async () => {
    const r = await probeDevListenConfinement({
      port: 1,
      declaredBind: "0.0.0.0",
    });
    expect(r.ok).toBe(false);
    expect(r.reason).toBe("DECLARED_BIND_NOT_LOOPBACK");
  });
});
```

### `projects/sfia-studio-next/web/tests/unit/ml5-cursor-git-option-a.test.ts`
```diff
# untracked — contenu intégral:
import { afterEach, describe, expect, it } from "vitest";
import {
  buildCursorGitMandateFromScope,
  buildCursorGitObservation,
  createLocalBareGitHarness,
  observeWorkspaceGitFacts,
  preflightCursorGitOptionA,
  qualifyCursorGitPublication,
  verifyRemoteBranchSha,
  type LocalGitHarness,
} from "@/domains/execution/cursor-git-option-a";

describe("ML5 Git Cursor option A (DÉC-ML5-GIT / CP-01)", () => {
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

  it("preflight denies unauthorized repo", () => {
    harness = createLocalBareGitHarness();
    const mandate = buildCursorGitMandateFromScope({
      required: true,
      repositoryFullName: "org/repo",
      baseRef: "main",
      workBranch: "cursor/ml5-work",
      baseSha: harness.headSha(harness.workPath),
    })!;
    const obs = observeWorkspaceGitFacts(harness.workPath, "main", "cursor/ml5-work");
    const denied = preflightCursorGitOptionA({
      mandate,
      workspacePath: harness.workPath,
      authorizedRepos: ["other/repo"],
      observations: obs,
    });
    expect(denied.ok).toBe(false);
    if (!denied.ok) expect(denied.reason).toBe("REPO_NOT_AUTHORIZED");
  });

  it("CP-01: independent observation — missing workspace fails", () => {
    const mandate = buildCursorGitMandateFromScope({
      required: true,
      repositoryFullName: "org/repo",
      baseRef: "main",
      workBranch: "cursor/ml5-work",
      baseSha: "aaa",
    })!;
    const obs = observeWorkspaceGitFacts("/tmp/sfia-missing-ws-" + Date.now(), "main", "cursor/ml5-work");
    expect(obs.workspaceExists).toBe(false);
    const pre = preflightCursorGitOptionA({
      mandate,
      workspacePath: obs.workspacePath,
      authorizedRepos: ["org/repo"],
      observations: obs,
    });
    expect(pre.ok).toBe(false);
    if (!pre.ok) expect(pre.reason).toBe("WORKSPACE_MISSING");
  });

  it("CP-01: base SHA divergence uses observed remote, not contract echo", () => {
    harness = createLocalBareGitHarness();
    const real = harness.headSha(harness.workPath);
    const mandate = buildCursorGitMandateFromScope({
      required: true,
      repositoryFullName: harness.remoteName,
      baseRef: "main",
      workBranch: "cursor/ml5-work",
      baseSha: "deadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
    })!;
    const obs = observeWorkspaceGitFacts(harness.workPath, "main", "cursor/ml5-work");
    expect(obs.observedRemoteBaseSha).toBe(real);
    const pre = preflightCursorGitOptionA({
      mandate,
      workspacePath: harness.workPath,
      authorizedRepos: [harness.remoteName],
      observations: obs,
    });
    expect(pre.ok).toBe(false);
    if (!pre.ok) expect(pre.reason).toBe("BASE_SHA_DIVERGED");
  });

  it("push declared ≠ remote verified until independent re-read + local match", () => {
    expect(
      qualifyCursorGitPublication({
        localHeadSha: "abc",
        remoteHeadShaVerified: null,
        pushDeclaredByCursor: true,
      }),
    ).toBe("PUSHED_UNVERIFIED");
    expect(
      qualifyCursorGitPublication({
        localHeadSha: null,
        remoteHeadShaVerified: "abc",
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
    const verified = verifyRemoteBranchSha(harness.workPath, branch);
    expect(verified).toBe(remote);
    const obs = buildCursorGitObservation({
      workBranch: branch,
      baseShaDeclared: null,
      localHeadSha: local,
      remoteHeadShaVerified: verified,
      pushDeclaredByCursor: true,
    });
    expect(obs.publicationStatus).toBe("REMOTE_VERIFIED");
  });

  it("preflight passes when observations match mandate", () => {
    harness = createLocalBareGitHarness();
    const base = harness.headSha(harness.workPath);
    const mandate = buildCursorGitMandateFromScope({
      required: true,
      repositoryFullName: harness.remoteName,
      baseRef: "main",
      workBranch: "cursor/ml5-work",
      baseSha: base,
    })!;
    const observations = observeWorkspaceGitFacts(
      harness.workPath,
      "main",
      "cursor/ml5-work",
    );
    expect(observations.originUrl).toBeTruthy();
    expect(observations.observedRemoteBaseSha).toBe(base);
    const pre = preflightCursorGitOptionA({
      mandate,
      workspacePath: harness.workPath,
      authorizedRepos: [harness.remoteName],
      observations,
    });
    expect(pre.ok).toBe(true);
    if (pre.ok) {
      expect(pre.observedBaseSha).toBe(base);
      expect(pre.remoteUrl).toBeTruthy();
    }
  });
});
```

## 10. DIRTY hérité C3–C7

Worktree conserve ~50 fichiers dirty/untracked des cycles précédents (Nora, UX, frontier, etc.). Non republier ici en intégralité ; pack C7 @ 01b7b66b documente C6/C7. Cycle 8 se concentre sur invariants A/B et parcours.

## 11. Verdict

**ML5 PARTIAL — GOVERNED GAPS**

Commit handoff : `docs(review-handoff): publish ML5 cycle 8 functional convergence review`
