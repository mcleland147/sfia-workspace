/**
 * C22 — autonomous product restitution after Cursor terminal observation.
 *
 * Owner: D7 triggers collection; D8 qualifies from verified pieces; D3 avis
 * via cognitive conductor. Distinct from SFIA v2.6 external Review Handoff.
 *
 * C22 hardening:
 * - attempt-bound report identity + confined FS read
 * - atomic restitution claim (CAS + owner token + lease)
 * - D8 criterionEvidence from real workspace observations (no injected verified)
 * - Nora avis via runNoraCognitiveTurn + D8 tool scope
 */

import { createHash, randomBytes } from "crypto";
import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  effectAttempts,
  realizationHandoffs,
  realizationQualifications,
  technicalContracts,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import {
  buildDeterministicDossierSynthesis,
  buildNoraCognitiveAnalysisPrompt,
  classifyAttachedNoraPayload,
  qualifyCursorRealization,
  type CriterionEvaluation,
} from "@/domains/proofs/cursor-qualify";
import { readConfinedWorkspaceFile } from "@/domains/proofs/d8-path-confine";
import {
  staticEvaluateContentAgainstCriterion,
  runIsolatedVerificationCommands,
  deriveStudioVerifyPlanFromWorkspace,
  readStudioVerificationArtifact,
  matchCriterionToVerifyId,
} from "@/domains/proofs/studio-isolated-verify";
import {
  heuristicCognitiveCriterionAssessments,
  applyCognitiveAssessmentsToEvidence,
} from "@/domains/proofs/d8-cognitive-criterion-eval";
import {
  ingestRealizationHandoff,
  type HandoffManifest,
} from "./cursor-handoff";
import type { CursorExecutionPlan, CursorLiveProjection } from "./types";

export type RestitutionPipelineStatus =
  | "IDLE"
  | "COLLECTING"
  | "QUALIFYING"
  | "NORA"
  | "COMPLETE"
  | "PARTIAL"
  | "FAILED";

type LiveWithRestitution = CursorLiveProjection & {
  restitutionPipelineStatus?: RestitutionPipelineStatus;
  restitutionHandoffId?: string | null;
  restitutionQualificationId?: string | null;
  restitutionStartedAt?: string | null;
  restitutionCompletedAt?: string | null;
  restitutionOwnerToken?: string | null;
  restitutionVersion?: number | null;
  restitutionLeaseExpiresAt?: string | null;
  restitutionDossierVersion?: number | null;
  /** C24 reprise — distinguish LIVE Nora avis vs deterministic synthesis. */
  restitutionNoraKind?: "LIVE_D3" | "DETERMINISTIC" | "ATTACHED" | "NONE" | null;
  reportMarkdown?: string | null;
};

const RESTITUTION_LEASE_MS = 120_000;
const REPORT_MAX_BYTES = 256_000;

function parseLive(resultJson: string | null | undefined): LiveWithRestitution {
  try {
    return JSON.parse(resultJson || "{}") as LiveWithRestitution;
  } catch {
    return {};
  }
}

function isTerminal(live: LiveWithRestitution, status: string): boolean {
  if (status === "COMPLETED" || status === "FAILED" || status === "AMBIGUOUS") {
    return true;
  }
  const t = live.terminalStatus;
  return t === "finished" || t === "error" || t === "cancelled";
}

function mintOwnerToken(): string {
  return `rst_${randomBytes(16).toString("hex")}`;
}

/**
 * Attempt-bound report paths. Generic names are accepted only when the body
 * binds attemptId + contractFingerprint (and optionally runId).
 */
function attemptBoundRelPaths(attemptId: string): string[] {
  return [
    `.sfia/attempts/${attemptId}/realization-report.md`,
    `.sfia/attempts/${attemptId}/SFIA_REALIZATION_REPORT.md`,
  ];
}

const GENERIC_REPORT_RELS = [
  ".sfia-realization-report.md",
  "SFIA_REALIZATION_REPORT.md",
  "realization-report.md",
];

/**
 * Binding must be field-exact — not a casual substring that could appear in prose
 * about another attempt. Accepts `attemptId: <id>` / `contractFingerprint: <fp>`.
 */
function reportBindsAttempt(
  markdown: string,
  attemptId: string,
  contractFingerprint: string,
): boolean {
  const attemptOk = new RegExp(
    `(?:^|\\n)\\s*attemptId\\s*[:：]\\s*${escapeRegExp(attemptId)}\\s*(?:$|\\n)`,
    "i",
  ).test(markdown);
  const fpOk = new RegExp(
    `(?:^|\\n)\\s*contractFingerprint\\s*[:：]\\s*${escapeRegExp(contractFingerprint)}\\s*(?:$|\\n)`,
    "i",
  ).test(markdown);
  return attemptOk && fpOk;
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export async function collectAttemptBoundReport(input: {
  workspaceCwd: string | null | undefined;
  attemptId: string;
  contractFingerprint: string;
  agentId?: string | null;
  runId?: string | null;
}): Promise<{
  markdown: string | null;
  source: string;
  limits: string[];
  sha256: string | null;
}> {
  const limits: string[] = [];
  if (!input.workspaceCwd) {
    return {
      markdown: null,
      source: "NONE",
      limits: ["NO_WORKSPACE_CWD"],
      sha256: null,
    };
  }
  const candidates = [
    ...attemptBoundRelPaths(input.attemptId),
    ...GENERIC_REPORT_RELS,
  ];
  for (const rel of candidates) {
    const confined = readConfinedWorkspaceFile(input.workspaceCwd, rel, {
      maxBytes: REPORT_MAX_BYTES,
    });
    if (!confined.ok) {
      if (
        confined.reason === "SYMLINK_ESCAPE" ||
        confined.reason === "SYMLINK_COMPONENT" ||
        confined.reason === "PATH_OUTSIDE_WORKSPACE" ||
        confined.reason === "UNSAFE_RELATIVE_PATH"
      ) {
        limits.push(`REPORT_PATH_DENIED:${confined.reason}`);
      } else if (confined.reason === "FILE_TOO_LARGE") {
        limits.push("REPORT_FILE_TOO_LARGE");
      }
      continue;
    }
    const markdown = confined.bytes.toString("utf8");
    if (!markdown.trim()) continue;
    const bound = reportBindsAttempt(
      markdown,
      input.attemptId,
      input.contractFingerprint,
    );
    const isAttemptPath = rel.includes(input.attemptId);
    if (!bound && !isAttemptPath) {
      limits.push("REPORT_BINDING_MISSING — generic report not attributable");
      continue;
    }
    if (!bound && isAttemptPath) {
      limits.push("REPORT_BINDING_WEAK — path attempt-scoped but body lacks fingerprint");
      // Still refuse: identity of content must bind fingerprint.
      continue;
    }
    if (input.runId && markdown.includes("runId:") && !markdown.includes(input.runId)) {
      limits.push("REPORT_RUN_ID_MISMATCH");
      continue;
    }
    const sha256 = createHash("sha256").update(confined.bytes).digest("hex");
    return {
      markdown,
      source: `CONFINED_WORKSPACE:${rel}`,
      limits: [
        "REPORT_COLLECTED_CONFINED",
        `REPORT_BYTES:${confined.byteLength}`,
        `REPORT_SHA256:${sha256.slice(0, 16)}`,
        ...limits,
      ],
      sha256,
    };
  }
  return {
    markdown: null,
    source: "MISSING",
    limits: [...limits, "REPORT_FILE_NOT_FOUND_OR_UNBOUND"],
    sha256: null,
  };
}

export type CriterionEvidenceLevel =
  | "DECLARED"
  | "OBSERVED"
  | "ACCESSIBLE"
  | "INTEGRITY_VERIFIED"
  | "CONTENT_EVALUATED"
  | "STUDIO_VERIFIED"
  | "SATISFIED"
  | "NOT_SATISFIED"
  | "INSUFFICIENT"
  | "INDETERMINATE";

/**
 * Build manifest + criterionEvidence from confined FS observations — not from
 * PASS strings in prose. Agent-written exit/PASS files are OBSERVED only.
 * verified=true requires Studio content evaluation and/or Studio-owned verification.
 */
export async function buildVerifiedEvidenceFromWorkspace(input: {
  workspaceCwd: string | null | undefined;
  reportMarkdown: string;
  acceptanceCriteria: string[];
  attemptId?: string | null;
  contractFingerprint?: string | null;
}): Promise<{
  manifest: HandoffManifest;
  criterionEvidence: Record<
    string,
    { refs: string[]; verified: boolean; level?: CriterionEvidenceLevel; note?: string }
  >;
  limits: string[];
}> {
  const limits: string[] = [];
  const filesCreated: string[] = [];
  const filesModified: string[] = [];
  const filesObserved: string[] = [];
  const filesConsulted: Array<{ path: string; sha256?: string; content?: string }> =
    [];
  const testsDeclared: string[] = [];
  /** Agent-declared captures — observational only, never certifying alone. */
  const testsCaptured: string[] = [];
  /** Studio-owned verification results — may certify. */
  const studioVerifiedTests: string[] = [];
  const gaps: string[] = [];

  const createdMatch = input.reportMarkdown.match(
    /(?:filesCreated|Fichiers créés)\s*[:：]\s*([^\n]+)/i,
  );
  if (createdMatch) {
    for (const p of createdMatch[1]!.split(/[,;]/).map((s) => s.trim()).filter(Boolean)) {
      filesCreated.push(p.replace(/^[-*]\s*/, ""));
    }
  }
  const modMatch = input.reportMarkdown.match(
    /(?:filesModified|Fichiers modifiés)\s*[:：]\s*([^\n]+)/i,
  );
  if (modMatch) {
    for (const p of modMatch[1]!.split(/[,;]/).map((s) => s.trim()).filter(Boolean)) {
      filesModified.push(p.replace(/^[-*]\s*/, ""));
    }
  }
  const testDecl = input.reportMarkdown.match(
    /(?:testsDeclared|Tests)\s*[:：]\s*([^\n]+)/i,
  );
  if (testDecl) {
    for (const t of testDecl[1]!.split(/[,;]/).map((s) => s.trim()).filter(Boolean)) {
      if (!/^(non|aucune|n\/a)/i.test(t)) testsDeclared.push(t.replace(/^[-*]\s*/, ""));
    }
  }

  const cwd = input.workspaceCwd;
  const observe = (rel: string) => {
    if (!cwd) return;
    const r = readConfinedWorkspaceFile(cwd, rel, { maxBytes: REPORT_MAX_BYTES });
    if (r.ok) {
      filesObserved.push(rel);
      filesConsulted.push({
        path: rel,
        sha256: createHash("sha256").update(r.bytes).digest("hex"),
        content: r.bytes.toString("utf8"),
      });
    } else if (r.reason !== "FILE_ABSENT") {
      limits.push(`OBSERVE_DENIED:${rel}:${r.reason}`);
    } else {
      gaps.push(`fichier annoncé absent: ${rel}`);
    }
  };

  for (const f of [...filesCreated, ...filesModified]) observe(f);

  // Also observe paths explicitly named in acceptance criteria.
  for (const criterion of input.acceptanceCriteria) {
    const pathHit = criterion.match(
      /((?:src\/|lib\/|tests?\/|web\/)[\w./-]+\.[a-zA-Z0-9]+)/,
    );
    if (pathHit && !filesConsulted.some((c) => c.path === pathHit[1])) {
      observe(pathHit[1]!);
    }
  }

  // Agent captures — OBSERVED only (T-07: agent writing exit=0 ≠ Studio proof).
  const agentCaptureMissing: string[] = [];
  for (const t of testsDeclared) {
    const captureRels = [
      `.sfia/test-captures/${t}.exit`,
      `.sfia/test-captures/${t}.stdout`,
      `test-results/${t}.exit`,
    ];
    let captured = false;
    if (cwd) {
      for (const rel of captureRels) {
        const r = readConfinedWorkspaceFile(cwd, rel, { maxBytes: 64_000 });
        if (r.ok) {
          const text = r.bytes.toString("utf8").trim();
          if (rel.endsWith(".exit")) {
            const code = Number(text.split(/\s+/)[0]);
            if (Number.isFinite(code)) {
              testsCaptured.push(`${t}:agent-exit=${code}:OBSERVED_ONLY`);
              captured = true;
              filesConsulted.push({
                path: rel,
                sha256: createHash("sha256").update(r.bytes).digest("hex"),
              });
              limits.push(
                `AGENT_EXIT_CAPTURE_NOT_CERTIFYING:${t}:exit=${code}`,
              );
            }
          } else {
            testsCaptured.push(`${t}:agent-stdout:OBSERVED_ONLY`);
            captured = true;
          }
          break;
        }
      }
    }
    if (!captured) agentCaptureMissing.push(t);
  }

  // C24 reprise — do not execute Cursor workspace code from Studio process.
  // Subprocess+scrubbed-env ≠ system isolation. Default: TOOLING GAP / INSUFFICIENT.
  {
    const { isStudioIsolatedVerifyExecutionEnabled } = await import(
      "@/domains/proofs/studio-verify-authority"
    );
    const gate = isStudioIsolatedVerifyExecutionEnabled();
    limits.push(...gate.limits);
    if (
      gate.enabled &&
      cwd &&
      input.attemptId &&
      input.contractFingerprint
    ) {
      const planCmds = deriveStudioVerifyPlanFromWorkspace({
        workspaceCwd: cwd,
        acceptanceCriteria: input.acceptanceCriteria,
      });
      if (planCmds.length > 0) {
        const isolated = await runIsolatedVerificationCommands({
          workspaceCwd: cwd,
          attemptId: input.attemptId,
          contractFingerprint: input.contractFingerprint,
          commands: planCmds,
        });
        limits.push(...isolated.limits);
        for (const r of isolated.results) {
          studioVerifiedTests.push(
            `${r.id}:studio-isolated-exit=${r.exitCode ?? "null"}:${r.ok ? "OK" : "FAIL"}`,
          );
          if (!r.ok) gaps.push(`studio isolated verify fail: ${r.id}`);
        }
      } else {
        limits.push(
          "ISOLATED_VERIFY_NO_STUDIO_EXPLICIT_PLAN — package.json alone is not authorization",
        );
      }
    } else if (
      input.acceptanceCriteria.some((c) =>
        /test|unitaire|spec|exit\s*=\s*0/i.test(c),
      )
    ) {
      limits.push(
        "ISOLATED_VERIFY_TOOLING_GAP — test criteria remain INSUFFICIENT without Studio authority proof",
      );
    }
  }

  for (const t of agentCaptureMissing) {
    const studioCovered = studioVerifiedTests.some(
      (v) => v.includes(`${t}:`) || v.startsWith("npm-test:"),
    );
    if (!studioCovered) {
      gaps.push(`test déclaré sans preuve Studio isolée: ${t}`);
    } else {
      limits.push(`AGENT_CAPTURE_OPTIONAL_STUDIO_COVERED:${t}`);
    }
  }

  if (
    /```(?:bash|sh|txt)?\n[\s\S]*?\bPASS\b/i.test(input.reportMarkdown) &&
    studioVerifiedTests.length === 0
  ) {
    limits.push(
      "PROSE_PASS_IGNORED — PASS dans le rapport ≠ capture de test vérifiée",
    );
  }

  if (filesCreated.length + filesModified.length === 0) {
    gaps.push("inventaire non exhaustif — dérivé du rapport");
  }

  const criterionEvidence: Record<
    string,
    { refs: string[]; verified: boolean; level?: CriterionEvidenceLevel; note?: string }
  > = {};

  for (const criterion of input.acceptanceCriteria) {
    const refs: string[] = [];
    let level: CriterionEvidenceLevel = "DECLARED";
    let verified = false;
    let note = "aucune preuve indépendante";

    const pathInCriterion = criterion.match(
      /((?:src\/|lib\/|tests?\/|web\/)[\w./-]+\.[a-zA-Z0-9]+)/,
    )?.[1];

    // File criteria: path must be explicit; static content check — no default success.
    if (pathInCriterion) {
      const consulted = filesConsulted.find((c) => c.path === pathInCriterion);
      if (!consulted) {
        level = "NOT_SATISFIED";
        note = `pièce absente ou inaccessible: ${pathInCriterion}`;
        gaps.push(note);
      } else {
        refs.push(pathInCriterion);
        level = "ACCESSIBLE";
        const contentOk = staticEvaluateContentAgainstCriterion(
          criterion,
          consulted.content ?? "",
        );
        if (contentOk.ok) {
          level = "CONTENT_EVALUATED";
          verified = true;
          note = contentOk.note;
        } else if (/INSUFFICIENT/i.test(contentOk.note)) {
          level = "INSUFFICIENT";
          verified = false;
          note = contentOk.note;
          limits.push("CONTENT_EVAL_INSUFFICIENT_NO_DEFAULT_PASS");
        } else {
          level = "NOT_SATISFIED";
          note = contentOk.note;
          gaps.push(`contenu non conforme: ${pathInCriterion}`);
        }
      }
    } else {
      // Stem-only mention → ACCESSIBLE at best, never auto-verified.
      for (const c of filesConsulted) {
        const stem = (c.path.split("/").pop() || "")
          .toLowerCase()
          .replace(/\.[^.]+$/, "");
        if (
          stem.length >= 2 &&
          criterion.toLowerCase().includes(stem) &&
          !c.path.includes("test-captures") &&
          !c.path.includes("studio-verifications")
        ) {
          refs.push(c.path);
          if (level === "DECLARED") level = "ACCESSIBLE";
        }
      }
      if (level === "ACCESSIBLE") {
        note = "accessible ≠ satisfait — critère sans chemin explicite";
      }
    }

    // Test criteria: only Studio isolated verification linked to THIS criterion.
    const isTestCriterion = /test|unitaire|spec|exit\s*=\s*0/i.test(criterion);
    if (isTestCriterion) {
      for (const cap of testsCaptured) {
        refs.push(cap);
        if (level === "DECLARED" || level === "ACCESSIBLE") level = "OBSERVED";
      }
      verified = false; // never inherit file-criterion verification
      const availableIds = studioVerifiedTests.map((v) => v.split(":")[0]!);
      const tokenIds = [
        ...criterion.matchAll(/\b([a-z][\w-]{1,40})\b/gi),
      ]
        .map((m) => m[1]!)
        .filter((w) => !/^(test|exit|unitaire|spec|the|and|for|with)$/i.test(w));
      const candidateIds = [
        ...new Set([...availableIds, "npm-test", ...tokenIds]),
      ];
      const linkedId = matchCriterionToVerifyId(criterion, candidateIds);
      let linkedOk = false;
      if (cwd && input.attemptId && input.contractFingerprint && linkedId) {
        const art = readStudioVerificationArtifact({
          workspaceCwd: cwd,
          attemptId: input.attemptId,
          testId: linkedId,
          contractFingerprint: input.contractFingerprint,
        });
        limits.push(...art.limits);
        if (art.ok) {
          refs.push(`${linkedId}:studio-isolated-exit=0`);
          level = "STUDIO_VERIFIED";
          verified = true;
          linkedOk = true;
          note = `vérification Studio isolée (${art.verifiedBy}) liée au critère`;
        } else if (art.limits.some((l) => /LEGACY_NOT_CERTIFYING|UNTRUSTED|MISMATCH/.test(l))) {
          // Artifact present but not certifying — criterion stays insufficient.
          linkedOk = false;
          note = `artefact Studio non certifiant: ${art.limits.join(",")}`;
        } else if (art.exit != null && art.exit !== 0) {
          refs.push(`${linkedId}:studio-isolated-exit=${art.exit}`);
          level = "NOT_SATISFIED";
          note = "vérification Studio isolée: échec";
          gaps.push(`studio isolated fail for criterion: ${criterion.slice(0, 60)}`);
          linkedOk = true; // resolved as fail
        }
      }
      // Do NOT reuse an unrelated studioHit for another criterion (C23 bug).
      if (!linkedOk) {
        level = "INSUFFICIENT";
        note =
          "test non certifié — besoin preuve Studio isolée liée au critère (agent exit insuffisant)";
        limits.push("TEST_CRITERION_INSUFFICIENT_WITHOUT_LINKED_STUDIO_VERIFY");
      }
    }

    // Presence / ACCESSIBLE alone never satisfies.
    if (verified && (level === "ACCESSIBLE" || level === "OBSERVED")) {
      verified = false;
      level = "INSUFFICIENT";
      note = "accessible/observé ≠ satisfait";
    }

    criterionEvidence[criterion] = { refs, verified, level, note };
  }

  return {
    manifest: {
      filesCreated,
      filesModified,
      filesObserved,
      filesConsulted: filesConsulted.map(({ path, sha256 }) => ({
        path,
        sha256,
      })),
      testsDeclared,
      testsCaptured: [...testsCaptured, ...studioVerifiedTests],
      gaps,
      sourcesConsulted: [
        "cursor-report",
        "workspace-confined",
        "studio-isolated-verification",
      ],
    },
    criterionEvidence,
    limits,
  };
}

/**
 * Independent local Git observation for D9 (option A). Read-only; no remote mutation.
 * Does not trust Cursor report tipSha alone.
 */
async function observeLocalGitFactsForAttempt(
  workspaceCwd: string | null | undefined,
): Promise<{
  facts: Array<{ path: string; sha?: string | null }>;
  verified: boolean | null;
  tipSha: string | null;
  branch: string | null;
  limits: string[];
}> {
  const limits: string[] = [];
  if (!workspaceCwd) {
    return {
      facts: [],
      verified: false,
      tipSha: null,
      branch: null,
      limits: ["D9_NO_WORKSPACE — Git requis mais cwd absent"],
    };
  }
  try {
    const { execFile } = await import("node:child_process");
    const { promisify } = await import("node:util");
    const execFileAsync = promisify(execFile);
    const { stdout: headOut } = await execFileAsync(
      "git",
      ["-C", workspaceCwd, "rev-parse", "HEAD"],
      { timeout: 5_000 },
    );
    const tipSha = headOut.trim();
    let branch: string | null = null;
    try {
      const { stdout: br } = await execFileAsync(
        "git",
        ["-C", workspaceCwd, "rev-parse", "--abbrev-ref", "HEAD"],
        { timeout: 5_000 },
      );
      branch = br.trim() || null;
    } catch {
      branch = null;
    }
    if (!/^[0-9a-f]{40}$/i.test(tipSha)) {
      limits.push("D9_TIP_SHA_INVALID");
      return { facts: [], verified: false, tipSha: null, branch, limits };
    }
    limits.push("D9_LOCAL_TIP_OBSERVED");
    // Remote SHA not verified here (read-only; no mutative GitHub). Local ≠ remote.
    limits.push("D9_REMOTE_SHA_NOT_VERIFIED_THIS_CYCLE");
    return {
      facts: [{ path: ".git/HEAD", sha: tipSha }],
      // null = local observed, remote still indeterminate — not a false failure.
      verified: null,
      tipSha,
      branch,
      limits,
    };
  } catch (e) {
    limits.push(
      `D9_LOCAL_OBSERVE_FAILED:${String((e as Error)?.message ?? e).slice(0, 80)}`,
    );
    return {
      facts: [],
      verified: false,
      tipSha: null,
      branch: null,
      limits,
    };
  }
}

function sqlRestitutionClaimable() {
  return sql`(
    ${effectAttempts.resultJson}::jsonb->>'restitutionPipelineStatus' IS NULL
    OR ${effectAttempts.resultJson}::jsonb->>'restitutionPipelineStatus' IN ('IDLE', 'PARTIAL', 'FAILED')
    OR (
      ${effectAttempts.resultJson}::jsonb->>'restitutionPipelineStatus' IN ('COLLECTING', 'QUALIFYING', 'NORA')
      AND (
        NULLIF(${effectAttempts.resultJson}::jsonb->>'restitutionLeaseExpiresAt', '') IS NULL
        OR (${effectAttempts.resultJson}::jsonb->>'restitutionLeaseExpiresAt')::timestamptz <= now()
      )
    )
  )`;
}

/** Exported for C24 fencing proofs — reclaim after lease expiry. */
export async function claimRestitutionPipelineAtomic(input: {
  attemptId: string;
}): Promise<{
  claimed: boolean;
  live: LiveWithRestitution;
  ownerToken: string | null;
  version: number | null;
}> {
  const current = (
    await db
      .select({ resultJson: effectAttempts.resultJson })
      .from(effectAttempts)
      .where(eq(effectAttempts.id, input.attemptId))
      .limit(1)
  )[0];
  if (!current) {
    return { claimed: false, live: {}, ownerToken: null, version: null };
  }
  const prev = parseLive(current.resultJson);
  if (prev.restitutionPipelineStatus === "COMPLETE" && prev.restitutionHandoffId) {
    return { claimed: false, live: prev, ownerToken: null, version: null };
  }

  const ownerToken = mintOwnerToken();
  const startedAt = new Date().toISOString();
  const leaseExpiresAt = new Date(Date.now() + RESTITUTION_LEASE_MS).toISOString();
  const prevVersion = prev.restitutionVersion ?? 0;
  const nextVersion = prevVersion + 1;
  const next: LiveWithRestitution = {
    ...prev,
    restitutionPipelineStatus: "COLLECTING",
    restitutionOwnerToken: ownerToken,
    restitutionStartedAt: startedAt,
    restitutionLeaseExpiresAt: leaseExpiresAt,
    restitutionVersion: nextVersion,
  };

  // CAS on restitutionVersion — concurrent claimants: at most one wins.
  const updated = await db
    .update(effectAttempts)
    .set({
      resultJson: JSON.stringify(next),
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(effectAttempts.id, input.attemptId),
        sqlRestitutionClaimable(),
        sql`COALESCE((${effectAttempts.resultJson}::jsonb->>'restitutionVersion')::int, 0) = ${prevVersion}`,
      ),
    )
    .returning({ id: effectAttempts.id, resultJson: effectAttempts.resultJson });

  if (!updated[0]) {
    return {
      claimed: false,
      live: parseLive(current.resultJson),
      ownerToken: null,
      version: null,
    };
  }
  const live = parseLive(updated[0].resultJson);
  if (live.restitutionOwnerToken !== ownerToken) {
    return { claimed: false, live, ownerToken: null, version: null };
  }
  return { claimed: true, live, ownerToken, version: nextVersion };
}

/** Exported for C24 fencing proofs — expired owner must not renew via write. */
export async function persistPipelineOwned(input: {
  attemptId: string;
  ownerToken: string;
  expectedVersion: number;
  live: LiveWithRestitution;
}): Promise<boolean> {
  const payload: LiveWithRestitution = {
    ...input.live,
    restitutionOwnerToken: input.ownerToken,
    restitutionVersion: input.expectedVersion,
    restitutionLeaseExpiresAt: new Date(
      Date.now() + RESTITUTION_LEASE_MS,
    ).toISOString(),
  };
  // C24 — owner + version + lease required and still valid.
  // Absent lease does NOT establish authority (refuse NULL / empty).
  const updated = await db
    .update(effectAttempts)
    .set({
      resultJson: JSON.stringify(payload),
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(effectAttempts.id, input.attemptId),
        sql`${effectAttempts.resultJson}::jsonb->>'restitutionOwnerToken' = ${input.ownerToken}`,
        sql`COALESCE((${effectAttempts.resultJson}::jsonb->>'restitutionVersion')::int, 0) = ${input.expectedVersion}`,
        sql`(
          NULLIF(${effectAttempts.resultJson}::jsonb->>'restitutionLeaseExpiresAt', '') IS NOT NULL
          AND (${effectAttempts.resultJson}::jsonb->>'restitutionLeaseExpiresAt')::timestamptz > now()
        )`,
      ),
    )
    .returning({ id: effectAttempts.id });
  return Boolean(updated[0]);
}

/**
 * After terminal observation: collect handoff → D8 qualify → Nora avis.
 * Safe to call repeatedly; no second Cursor dispatch.
 */
export async function runAutonomousRestitutionAfterTerminal(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
  /** Default true when provider configured — fallback labelled if unavailable. */
  attachNoraCognitive?: boolean;
}): Promise<{
  ran: boolean;
  handoffId: string | null;
  qualificationId: string | null;
  handoffStatus: string | null;
  verdict: string | null;
  limits: string[];
  pipelineStatus: RestitutionPipelineStatus;
  criteria?: CriterionEvaluation[];
}> {
  const limits: string[] = [];
  const row = (
    await db
      .select()
      .from(effectAttempts)
      .where(
        and(
          eq(effectAttempts.id, input.attemptId),
          eq(effectAttempts.projectId, input.projectId),
          eq(effectAttempts.pilotId, input.pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!row) {
    return {
      ran: false,
      handoffId: null,
      qualificationId: null,
      handoffStatus: null,
      verdict: null,
      limits: ["ATTEMPT_NOT_FOUND"],
      pipelineStatus: "FAILED",
    };
  }

  let live = parseLive(row.resultJson);
  if (!isTerminal(live, row.status)) {
    return {
      ran: false,
      handoffId: null,
      qualificationId: null,
      handoffStatus: null,
      verdict: null,
      limits: ["NOT_TERMINAL"],
      pipelineStatus: live.restitutionPipelineStatus ?? "IDLE",
    };
  }

  // Distinguish: technical dossier available vs cognitive avis pending vs fully complete.
  {
    const existingHandoff = (
      await db
        .select()
        .from(realizationHandoffs)
        .where(eq(realizationHandoffs.attemptId, row.id))
        .limit(1)
    )[0];
    const existingQual = (
      await db
        .select()
        .from(realizationQualifications)
        .where(eq(realizationQualifications.attemptId, row.id))
        .limit(1)
    )[0];
    const hasAvis = Boolean(existingQual?.noraAnalysisMarkdown?.trim());
    const noraKind = live.restitutionNoraKind ?? null;
    const wantNora =
      input.attachNoraCognitive !== false &&
      (process.env.SFIA_AUTONOMOUS_NORA_AVIS || "1").trim() !== "0";

    // Fully materialised: handoff + qual + avis — no re-entry (late proof → requalify route).
    if (existingHandoff && existingQual && hasAvis) {
      return {
        ran: false,
        handoffId: existingHandoff.id,
        qualificationId: existingQual.id,
        handoffStatus: existingHandoff.status,
        verdict: existingQual.verdict,
        limits: [
          "ALREADY_MATERIALISED_DOSSIER",
          "RESTITUTION_TECHNICAL_AND_COGNITIVE_COMPLETE",
        ],
        pipelineStatus: "COMPLETE",
        criteria: undefined,
      };
    }

    // Pipeline marked COMPLETE but cognitive avis still missing → resume Nora only.
    if (
      live.restitutionPipelineStatus === "COMPLETE" &&
      existingHandoff &&
      existingQual &&
      !hasAvis &&
      wantNora
    ) {
      // Drop COMPLETE + expire lease so claimRestitutionPipelineAtomic can reclaim
      // without redispatch — handoff/qual already present; Nora attach continues below.
      live = {
        ...live,
        restitutionPipelineStatus: "NORA",
        restitutionNoraKind: noraKind === "LIVE_D3" ? noraKind : "NONE",
        restitutionOwnerToken: null,
        restitutionLeaseExpiresAt: new Date(Date.now() - 1_000).toISOString(),
        limits: [
          ...(live.limits ?? []),
          "COGNITIVE_AVIS_RESUME_FROM_TECHNICAL_COMPLETE",
        ],
      };
      await db
        .update(effectAttempts)
        .set({
          resultJson: JSON.stringify(live),
          updatedAt: new Date(),
        })
        .where(eq(effectAttempts.id, row.id));
      live = parseLive(
        (
          await db
            .select({ resultJson: effectAttempts.resultJson })
            .from(effectAttempts)
            .where(eq(effectAttempts.id, row.id))
            .limit(1)
        )[0]?.resultJson,
      );
    } else if (live.restitutionPipelineStatus === "COMPLETE") {
      return {
        ran: false,
        handoffId: live.restitutionHandoffId ?? existingHandoff?.id ?? null,
        qualificationId:
          live.restitutionQualificationId ?? existingQual?.id ?? null,
        handoffStatus: existingHandoff?.status ?? live.reportStatus ?? null,
        verdict: existingQual?.verdict ?? null,
        limits: [
          "ALREADY_COMPLETE_TECHNICAL",
          hasAvis
            ? "COGNITIVE_AVIS_PRESENT"
            : "COGNITIVE_AVIS_ABSENT_BUT_NORA_ATTACH_DISABLED",
        ],
        pipelineStatus: "COMPLETE",
      };
    }
  }

  const claim = await claimRestitutionPipelineAtomic({ attemptId: row.id });
  if (!claim.claimed || !claim.ownerToken || claim.version == null) {
    return {
      ran: false,
      handoffId: claim.live.restitutionHandoffId ?? null,
      qualificationId: claim.live.restitutionQualificationId ?? null,
      handoffStatus: claim.live.reportStatus ?? null,
      verdict: null,
      limits: ["PIPELINE_CLAIM_LOST_OR_HELD"],
      pipelineStatus: claim.live.restitutionPipelineStatus ?? "IDLE",
    };
  }
  live = claim.live;
  const ownerToken = claim.ownerToken;
  const version = claim.version;

  const plan = JSON.parse(row.planJson) as CursorExecutionPlan;

  // 1) Collect report — prefer confined attempt-bound workspace file (attributable).
  // SDK result text is a fallback when no bound workspace report exists.
  let reportMarkdown = "";
  let acquisition: "RUNTIME_COLLECTED" | "SCRIPTED_ADAPTER" | "UNKNOWN" =
    "UNKNOWN";
  const collected = await collectAttemptBoundReport({
    workspaceCwd: plan.workspaceCwd,
    attemptId: row.id,
    contractFingerprint: plan.contractFingerprint,
    agentId: live.agentId,
    runId: live.runId,
  });
  limits.push(...collected.limits);
  if (collected.markdown?.trim()) {
    reportMarkdown = collected.markdown.trim();
    acquisition = "RUNTIME_COLLECTED";
    limits.push("REPORT_FROM_CONFINED_WORKSPACE");
  } else if ((live.reportMarkdown ?? "").trim()) {
    reportMarkdown = (live.reportMarkdown ?? "").trim();
    acquisition =
      plan.effectProviderMode === "SCRIPTED"
        ? "SCRIPTED_ADAPTER"
        : "RUNTIME_COLLECTED";
    if (
      !reportBindsAttempt(reportMarkdown, row.id, plan.contractFingerprint) &&
      plan.effectProviderMode === "LIVE"
    ) {
      limits.push("RUNTIME_REPORT_BINDING_WEAK");
    }
    limits.push("REPORT_FROM_ATTEMPT_RESULT");
  }

  const contract = (
    await db
      .select()
      .from(technicalContracts)
      .where(eq(technicalContracts.id, plan.contractId))
      .limit(1)
  )[0];
  let acceptanceCriteria: string[] = [];
  let expectedProofs: string[] = [];
  let contractTitle: string | null = null;
  if (contract) {
    contractTitle = contract.title ?? null;
    try {
      const acceptance = JSON.parse(contract.acceptanceJson || "{}") as {
        criteria?: string[];
        expectedProofs?: string[];
      };
      acceptanceCriteria = acceptance.criteria ?? [];
      expectedProofs = acceptance.expectedProofs ?? [];
    } catch {
      /* ignore */
    }
  }

  const evidence = await buildVerifiedEvidenceFromWorkspace({
    workspaceCwd: plan.workspaceCwd,
    reportMarkdown: reportMarkdown || "",
    acceptanceCriteria,
    attemptId: row.id,
    contractFingerprint: plan.contractFingerprint,
  });
  limits.push(...evidence.limits);

  // C24 reprise — LIVE Nora cognitive criterion assessment is nominal;
  // heuristic is an explicitly labelled fallback only.
  let cogAssessments = heuristicCognitiveCriterionAssessments({
    criteria: acceptanceCriteria,
    criterionEvidence: evidence.criterionEvidence,
  });
  const wantCriteriaLive =
    input.attachNoraCognitive !== false &&
    (process.env.SFIA_D8_COGNITIVE_CRITERIA_LIVE || "1").trim() !== "0" &&
    (process.env.SFIA_AUTONOMOUS_NORA_AVIS || "1").trim() !== "0";
  if (wantCriteriaLive && contract?.preparationId && acceptanceCriteria.length > 0) {
    try {
      const { runLiveCognitiveCriterionAssessments } = await import(
        "@/domains/proofs/d8-cognitive-criterion-eval"
      );
      const liveCog = await runLiveCognitiveCriterionAssessments({
        pilotId: input.pilotId,
        preparationId: contract.preparationId,
        projectId: input.projectId,
        attemptId: row.id,
        contractTitle,
        acceptanceCriteria,
        criterionEvidence: evidence.criterionEvidence,
        reportExcerpt: (reportMarkdown || "").slice(0, 4000),
      });
      if (liveCog.assessments.length > 0) {
        cogAssessments = liveCog;
        limits.push("D8_COGNITIVE_CRITERIA_LIVE");
      } else {
        limits.push(
          ...liveCog.limits,
          "D8_COGNITIVE_CRITERIA_FALLBACK_HEURISTIC",
        );
      }
    } catch (e) {
      limits.push(
        `D8_COGNITIVE_LIVE_ERROR:${String((e as Error)?.message ?? e).slice(0, 80)}`,
        "D8_COGNITIVE_CRITERIA_FALLBACK_HEURISTIC",
      );
    }
  } else {
    limits.push("D8_COGNITIVE_CRITERIA_HEURISTIC_ONLY");
  }
  const applied = applyCognitiveAssessmentsToEvidence({
    criterionEvidence: evidence.criterionEvidence,
    assessments: cogAssessments.assessments,
  });
  evidence.criterionEvidence = applied.criterionEvidence as typeof evidence.criterionEvidence;
  limits.push(...cogAssessments.limits, ...applied.limits);

  let handoff = (
    await db
      .select()
      .from(realizationHandoffs)
      .where(eq(realizationHandoffs.attemptId, row.id))
      .limit(1)
  )[0];

  let handoffId = handoff?.id ?? null;
  let handoffStatus = handoff?.status ?? null;

  if (!handoff) {
    try {
      // C24 — atomic ownership CAS + handoff insert (no fence-then-write window).
      const ingested = await ingestRealizationHandoff({
        pilotId: input.pilotId,
        projectId: input.projectId,
        attemptId: row.id,
        reportMarkdown: reportMarkdown || "",
        manifest: evidence.manifest,
        expectedContractFingerprint: plan.contractFingerprint,
        provenance: {
          acquisition,
          observedAgentId: live.agentId ?? null,
          observedRunId: live.runId ?? null,
        },
        ownershipGate: {
          ownerToken,
          expectedVersion: version,
          livePatch: {
            restitutionPipelineStatus: "COLLECTING",
          },
        },
      });
      handoffId = ingested.handoffId;
      handoffStatus = ingested.status;
      limits.push(...ingested.limits, "AUTONOMOUS_HANDOFF_INGESTED_ATOMIC");
    } catch (e) {
      const msg = String((e as Error)?.message ?? e);
      if (/OWNERSHIP_LOST_ATOMIC_HANDOFF/.test(msg)) {
        limits.push("OWNERSHIP_LOST_ATOMIC_HANDOFF");
      }
      limits.push(
        `HANDOFF_INGEST_FAILED:${msg.slice(0, 100)}`,
      );
      live = {
        ...live,
        restitutionPipelineStatus: "PARTIAL",
        restitutionCompletedAt: new Date().toISOString(),
      };
      await persistPipelineOwned({
        attemptId: row.id,
        ownerToken,
        expectedVersion: version,
        live,
      });
      return {
        ran: true,
        handoffId: null,
        qualificationId: null,
        handoffStatus: null,
        verdict: null,
        limits,
        pipelineStatus: "PARTIAL",
      };
    }
    handoff = (
      await db
        .select()
        .from(realizationHandoffs)
        .where(eq(realizationHandoffs.attemptId, row.id))
        .limit(1)
    )[0];
  } else {
    limits.push("HANDOFF_ALREADY_PRESENT");
  }

  live = {
    ...live,
    restitutionPipelineStatus: "QUALIFYING",
    restitutionHandoffId: handoffId,
  };
  if (
    !(await persistPipelineOwned({
      attemptId: row.id,
      ownerToken,
      expectedVersion: version,
      live,
    }))
  ) {
    return {
      ran: true,
      handoffId,
      qualificationId: null,
      handoffStatus,
      verdict: null,
      limits: [...limits, "OWNERSHIP_LOST_AT_QUALIFY"],
      pipelineStatus: "PARTIAL",
    };
  }

  let existingQual = (
    await db
      .select()
      .from(realizationQualifications)
      .where(eq(realizationQualifications.attemptId, row.id))
      .limit(1)
  )[0];

  let manifest: HandoffManifest = evidence.manifest;
  try {
    if (handoff?.manifestJson) {
      manifest = {
        ...evidence.manifest,
        ...(JSON.parse(handoff.manifestJson) as HandoffManifest),
        filesObserved: evidence.manifest.filesObserved,
        filesConsulted: evidence.manifest.filesConsulted,
        testsCaptured: evidence.manifest.testsCaptured,
        gaps: [
          ...new Set([
            ...(evidence.manifest.gaps ?? []),
            ...((JSON.parse(handoff.manifestJson) as HandoffManifest).gaps ?? []),
          ]),
        ],
      };
    }
  } catch {
    /* keep evidence.manifest */
  }

  // C23 D9 — when Git is required by the contract, observe independently or refuse
  // conformity. Missions without gitScope stay N/A (gitFactsVerified=null).
  let gitFactsVerified: boolean | null = null;
  let gitFacts: Array<{ path: string; sha?: string | null }> | undefined;
  if (plan.gitScope?.required) {
    const observed = await observeLocalGitFactsForAttempt(plan.workspaceCwd);
    gitFacts = observed.facts;
    gitFactsVerified = observed.verified;
    limits.push(...observed.limits);
    if (observed.tipSha) {
      manifest = {
        ...manifest,
        git: {
          ...(manifest.git ?? {}),
          tipSha: observed.tipSha,
          branch: observed.branch ?? plan.gitScope.workBranch ?? null,
          baseSha: plan.gitScope.baseSha ?? null,
        },
      };
    }
  }

  const gitRequired = Boolean(plan.gitScope?.required);
  const q = qualifyCursorRealization({
    contractFingerprint: plan.contractFingerprint,
    acceptanceCriteria,
    expectedProofs,
    handoffStatus: handoff?.status ?? null,
    reportMarkdown: (handoff?.reportMarkdown ?? reportMarkdown) || null,
    manifest,
    terminalStatus: live.terminalStatus ?? null,
    // C22/C23 — product path builds evidence; never inject verified from campaign.
    criterionEvidence: evidence.criterionEvidence,
    gitFacts,
    gitFactsVerified,
    gitRequired,
  });

  let qualificationId = existingQual?.id ?? null;
  const dossierVersion = (live.restitutionDossierVersion ?? 0) + 1;
  if (!existingQual) {
    // C24 — atomic CAS + D8 insert in one transaction.
    const id = newId("rqual");
    const now = new Date();
    const liveForQual: LiveWithRestitution = {
      ...live,
      restitutionPipelineStatus: "QUALIFYING",
      restitutionHandoffId: handoffId,
      restitutionDossierVersion: dossierVersion,
      restitutionOwnerToken: ownerToken,
      restitutionVersion: version,
      restitutionLeaseExpiresAt: new Date(
        Date.now() + RESTITUTION_LEASE_MS,
      ).toISOString(),
    };
    const inserted = await db.transaction(async (tx) => {
      const cas = await tx
        .update(effectAttempts)
        .set({
          resultJson: JSON.stringify(liveForQual),
          updatedAt: now,
        })
        .where(
          and(
            eq(effectAttempts.id, row.id),
            sql`${effectAttempts.resultJson}::jsonb->>'restitutionOwnerToken' = ${ownerToken}`,
            sql`COALESCE((${effectAttempts.resultJson}::jsonb->>'restitutionVersion')::int, 0) = ${version}`,
            sql`(
              NULLIF(${effectAttempts.resultJson}::jsonb->>'restitutionLeaseExpiresAt', '') IS NOT NULL
              AND (${effectAttempts.resultJson}::jsonb->>'restitutionLeaseExpiresAt')::timestamptz > now()
            )`,
          ),
        )
        .returning({ id: effectAttempts.id });
      if (!cas[0]) return false;
      await tx.insert(realizationQualifications).values({
        id,
        attemptId: row.id,
        projectId: input.projectId,
        pilotId: input.pilotId,
        handoffId: handoffId,
        status: "QUALIFIED",
        rubricsJson: JSON.stringify(q.rubrics),
        verdict: q.verdict,
        limitsJson: JSON.stringify([
          ...q.limits,
          "AUTONOMOUS_D8_QUALIFICATION_C22",
          `DOSSIER_VERSION:${dossierVersion}`,
          "D8_INSERT_ATOMIC_OWNERSHIP",
          ...limits,
        ]),
        historyJson: "[]",
        noraAnalysisMarkdown: null,
        noraAnalysisAt: null,
        createdAt: now,
        updatedAt: now,
      });
      return true;
    });
    if (!inserted) {
      return {
        ran: true,
        handoffId,
        qualificationId: null,
        handoffStatus,
        verdict: q.verdict,
        limits: [...limits, "OWNERSHIP_LOST_ATOMIC_D8_INSERT"],
        pipelineStatus: "PARTIAL",
        criteria: q.criteria,
      };
    }
    qualificationId = id;
    existingQual = (
      await db
        .select()
        .from(realizationQualifications)
        .where(eq(realizationQualifications.id, id))
        .limit(1)
    )[0];
    limits.push("AUTONOMOUS_D8_INSERTED_ATOMIC");
  } else {
    limits.push("D8_ALREADY_PRESENT");
  }

  live = {
    ...live,
    restitutionPipelineStatus: "NORA",
    restitutionQualificationId: qualificationId,
    restitutionDossierVersion: dossierVersion,
  };
  if (
    !(await persistPipelineOwned({
      attemptId: row.id,
      ownerToken,
      expectedVersion: version,
      live,
    }))
  ) {
    return {
      ran: true,
      handoffId,
      qualificationId,
      handoffStatus,
      verdict: q.verdict,
      limits: [...limits, "OWNERSHIP_LOST_BEFORE_NORA"],
      pipelineStatus: "PARTIAL",
      criteria: q.criteria,
    };
  }

  const wantCognitive =
    input.attachNoraCognitive !== false &&
    (process.env.SFIA_AUTONOMOUS_NORA_AVIS || "1").trim() !== "0";

  let noraMarkdown: string | null = null;
  if (existingQual && !existingQual.noraAnalysisMarkdown) {
    if (wantCognitive) {
      try {
        const { runNoraCognitiveTurn } = await import(
          "@/domains/conversation/run-nora-cognitive-turn"
        );
        const prompt = buildNoraCognitiveAnalysisPrompt({
          qualification: q,
          contractTitle,
          attemptId: row.id,
          sourcesAccessible: [
            ...(manifest.sourcesConsulted ?? []),
            ...(manifest.filesConsulted ?? []).map((f) => f.path),
          ],
        });
        const prepId = contract?.preparationId ?? null;
        const reply = prepId
          ? await runNoraCognitiveTurn({
              pilotId: input.pilotId,
              preparationId: prepId,
              projectId: input.projectId,
              forceNewWork: true,
              objective: `Avis cognitif D8 attempt ${row.id} v${dossierVersion}`,
              userText: [
                prompt,
                "",
                "OUTILS D8 OBLIGATOIRES: list_realization_evidence, read_realization_handoff_report, read_attempt_workspace_file.",
                "Ne te fonde pas uniquement sur un extrait. Distingue CONSULTÉ / métadonnée / déclaration.",
              ].join("\n"),
              contextSnippets: [
                `attemptId=${row.id}`,
                `dossierVersion=${dossierVersion}`,
                `verdict=${q.verdict}`,
                `handoffStatus=${handoff?.status ?? "NONE"}`,
                `integrity=${handoff?.integrityHash ?? ""}`,
                `workspace=${plan.workspaceCwd ?? ""}`,
              ],
              toolScope: {
                pilotId: input.pilotId,
                preparationId: prepId,
                operationId: `d8-nora-auto-${row.id}-v${dossierVersion}`,
                projectId: input.projectId,
                attemptId: row.id,
              },
              maxSegmentsThisInvocation: 2,
            })
          : null;

        if (!reply) {
          limits.push("NORA_NO_PREPARATION_ID — fallback synthèse");
        } else {
          const raw = (reply.content ?? "").trim();
          const liveOk =
            reply.mode === "openai-agents-sdk-live" &&
            reply.status === "COMPLETE" &&
            raw.length > 0;
          if (liveOk) {
            noraMarkdown = raw.includes("ANALYSE COGNITIVE NORA (D3)")
              ? raw
              : `[ANALYSE COGNITIVE NORA (D3)]\n\n${raw}`;
            limits.push(
              "NORA_COGNITIVE_AUTONOMOUS_CONDUCTOR",
              `NORA_WORK:${reply.conductor?.workId ?? "unknown"}`,
              `NORA_TOOLS:${reply.toolCallsObserved ?? 0}`,
            );
          } else {
            limits.push(
              `NORA_COGNITIVE_UNAVAILABLE_${reply.mode}`,
              "FALLBACK_DETERMINISTIC_SYNTHESIS",
            );
          }
        }
      } catch (e) {
        limits.push(
          `NORA_ERROR:${String((e as Error)?.message ?? e).slice(0, 80)}`,
          "FALLBACK_DETERMINISTIC_SYNTHESIS",
        );
      }
    }
    if (!noraMarkdown) {
      noraMarkdown = buildDeterministicDossierSynthesis({
        qualification: q,
        contractTitle,
        attemptId: row.id,
        sourcesAccessible: manifest.sourcesConsulted,
        dossierIncomplete: handoff?.status !== "RECEIVED",
      });
      limits.push(
        "DETERMINISTIC_SYNTHESIS_AUTONOMOUS — pas un avis cognitif Nora D3",
      );
    }
    // C24 — Nora avis write atomic with ownership: single transaction,
    // CAS on noraAnalysisMarkdown IS NULL AND owner+lease+version still valid.
    const noraAt = new Date();
    const liveNora: LiveWithRestitution = {
      ...live,
      restitutionPipelineStatus: "NORA",
      restitutionDossierVersion: dossierVersion,
      restitutionOwnerToken: ownerToken,
      restitutionVersion: version,
      restitutionLeaseExpiresAt: new Date(
        Date.now() + RESTITUTION_LEASE_MS,
      ).toISOString(),
    };
    const noraWrite = await db.transaction(async (tx) => {
      const cas = await tx
        .update(effectAttempts)
        .set({
          resultJson: JSON.stringify(liveNora),
          updatedAt: noraAt,
        })
        .where(
          and(
            eq(effectAttempts.id, row.id),
            sql`${effectAttempts.resultJson}::jsonb->>'restitutionOwnerToken' = ${ownerToken}`,
            sql`COALESCE((${effectAttempts.resultJson}::jsonb->>'restitutionVersion')::int, 0) = ${version}`,
            sql`(
              NULLIF(${effectAttempts.resultJson}::jsonb->>'restitutionLeaseExpiresAt', '') IS NOT NULL
              AND (${effectAttempts.resultJson}::jsonb->>'restitutionLeaseExpiresAt')::timestamptz > now()
            )`,
          ),
        )
        .returning({ id: effectAttempts.id });
      if (!cas[0]) return { wrote: false as const, reason: "OWNERSHIP" as const };
      const avis = await tx
        .update(realizationQualifications)
        .set({
          noraAnalysisMarkdown: noraMarkdown,
          noraAnalysisAt: noraAt,
          limitsJson: JSON.stringify([
            ...q.limits,
            ...limits,
            `NORA_KIND:${classifyAttachedNoraPayload(noraMarkdown)}`,
            `DOSSIER_VERSION:${dossierVersion}`,
            "NORA_AVIS_ATOMIC_OWNERSHIP",
          ]),
          updatedAt: noraAt,
        })
        .where(
          and(
            eq(realizationQualifications.id, qualificationId!),
            sql`${realizationQualifications.noraAnalysisMarkdown} IS NULL`,
          ),
        )
        .returning({ id: realizationQualifications.id });
      if (!avis[0]) return { wrote: false as const, reason: "AVIS_CAS" as const };
      return { wrote: true as const, reason: "OK" as const };
    });
    if (!noraWrite.wrote) {
      if (noraWrite.reason === "OWNERSHIP") {
        limits.push("OWNERSHIP_LOST_ATOMIC_NORA_AVIS — avis non persisté");
        return {
          ran: true,
          handoffId,
          qualificationId,
          handoffStatus,
          verdict: q.verdict,
          limits,
          pipelineStatus: "PARTIAL",
          criteria: q.criteria,
        };
      }
      limits.push("NORA_AVIS_WRITE_CAS_LOST — concurrent/stale attach refused");
    }
  } else {
    limits.push("NORA_ALREADY_ATTACHED_OR_SKIPPED");
  }

  // C24 reprise — do not assimilate handoff+qual to cognitive COMPLETE.
  const noraLive =
    limits.includes("NORA_COGNITIVE_AUTONOMOUS_CONDUCTOR") ||
    Boolean(
      existingQual?.noraAnalysisMarkdown &&
        /ANALYSE COGNITIVE NORA \(D3\)/.test(existingQual.noraAnalysisMarkdown),
    );
  const noraDeterministicOnly = limits.some((l) =>
    /DETERMINISTIC_SYNTHESIS_AUTONOMOUS/.test(l),
  );
  const pipelineStatus: RestitutionPipelineStatus =
    handoffStatus === "RECEIVED" && qualificationId ? "COMPLETE" : "PARTIAL";
  if (pipelineStatus === "COMPLETE" && noraDeterministicOnly && !noraLive) {
    // Qualification available, but cognitive avis not LIVE — honest label (not assimilation).
    limits.push(
      "RESTITUTION_QUALIFICATION_COMPLETE_COGNITIVE_DETERMINISTIC — pas un avis Nora LIVE",
    );
  }
  if (pipelineStatus === "COMPLETE" && noraLive) {
    limits.push("RESTITUTION_COGNITIVE_LIVE_ATTACHED");
  }
  live = {
    ...live,
    reportStatus:
      handoffStatus === "RECEIVED"
        ? "RECEIVED"
        : handoffStatus === "REJECTED"
          ? "REJECTED"
          : live.reportStatus ?? "INCOMPLETE",
    restitutionPipelineStatus: pipelineStatus,
    restitutionHandoffId: handoffId,
    restitutionQualificationId: qualificationId,
    restitutionCompletedAt: new Date().toISOString(),
    restitutionDossierVersion: dossierVersion,
    restitutionNoraKind: noraLive
      ? "LIVE_D3"
      : noraDeterministicOnly
        ? "DETERMINISTIC"
        : existingQual?.noraAnalysisMarkdown
          ? "ATTACHED"
          : "NONE",
    limits: [...(live.limits ?? []), ...limits, "AUTONOMOUS_RESTITUTION_C24"],
  };
  if (
    !(await persistPipelineOwned({
      attemptId: row.id,
      ownerToken,
      expectedVersion: version,
      live,
    }))
  ) {
    limits.push("OWNERSHIP_LOST_AT_COMPLETE");
    return {
      ran: true,
      handoffId,
      qualificationId,
      handoffStatus,
      verdict: q.verdict,
      limits,
      pipelineStatus: "PARTIAL",
      criteria: q.criteria,
    };
  }

  return {
    ran: true,
    handoffId,
    qualificationId,
    handoffStatus,
    verdict: q.verdict,
    limits,
    pipelineStatus,
    criteria: q.criteria,
  };
}

export function reportContentFingerprint(markdown: string): string {
  return createHash("sha256").update(markdown, "utf8").digest("hex");
}

/**
 * Resume incomplete restitutions after process boot (observation/collect only).
 * Boot path: collect/qualify without LIVE Nora (no storm).
 * Deferred: schedule cognitive attach for dossiers missing Nora avis — does not
 * block register(); does not redispatch Cursor.
 */
export async function resumeIncompleteRestitutions(): Promise<{
  resumed: number;
  attemptIds: string[];
  deferredNora: string[];
}> {
  const rows = await db
    .select({
      id: effectAttempts.id,
      pilotId: effectAttempts.pilotId,
      projectId: effectAttempts.projectId,
      status: effectAttempts.status,
      resultJson: effectAttempts.resultJson,
    })
    .from(effectAttempts)
    .where(eq(effectAttempts.kind, "CURSOR_EXECUTION"));

  const attemptIds: string[] = [];
  const deferredNora: string[] = [];
  let resumed = 0;
  for (const row of rows) {
    const live = parseLive(row.resultJson);
    if (!isTerminal(live, row.status)) continue;
    const st = live.restitutionPipelineStatus;
    if (st === "COMPLETE") {
      // Complete qual but cognitive avis still missing → defer Nora only.
      if (
        live.restitutionQualificationId &&
        (live.restitutionNoraKind === "NONE" ||
          live.restitutionNoraKind === "DETERMINISTIC" ||
          !live.restitutionNoraKind)
      ) {
        deferredNora.push(row.id);
      }
      continue;
    }
    if (
      st === "COLLECTING" ||
      st === "QUALIFYING" ||
      st === "NORA" ||
      st === "PARTIAL" ||
      st === "FAILED" ||
      st == null ||
      st === "IDLE" ||
      live.reportStatus === "EXPECTED"
    ) {
      try {
        // Boot resume: collect/qualify without LIVE Nora storms (criteria+avis).
        const r = await runAutonomousRestitutionAfterTerminal({
          pilotId: row.pilotId,
          projectId: row.projectId,
          attemptId: row.id,
          attachNoraCognitive: false,
        });
        if (r.ran) {
          resumed += 1;
          attemptIds.push(row.id);
          if (
            r.qualificationId &&
            (r.pipelineStatus === "COMPLETE" || r.pipelineStatus === "PARTIAL")
          ) {
            deferredNora.push(row.id);
          }
        }
      } catch {
        /* boot resume must not crash */
      }
    }
  }

  if (
    deferredNora.length > 0 &&
    (process.env.SFIA_AUTONOMOUS_NORA_AVIS || "1").trim() !== "0" &&
    (process.env.SFIA_BOOT_DEFER_NORA || "1").trim() !== "0"
  ) {
    const uniq = [...new Set(deferredNora)];
    setTimeout(() => {
      void (async () => {
        for (const attemptId of uniq) {
          const row = rows.find((r) => r.id === attemptId);
          if (!row) continue;
          try {
            await runAutonomousRestitutionAfterTerminal({
              pilotId: row.pilotId,
              projectId: row.projectId,
              attemptId,
              attachNoraCognitive: true,
            });
          } catch {
            /* deferred Nora must not crash process */
          }
        }
      })();
    }, 2_500);
  }

  return { resumed, attemptIds, deferredNora: [...new Set(deferredNora)] };
}
