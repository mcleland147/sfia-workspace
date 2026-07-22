/**
 * SFIA Context Resolver — builds immutable SfiaCanonicalContext for a session turn.
 * Hierarchy: Git > Morris decisions > project sources > session > GPT inference (never auto-promoted).
 */
import { randomUUID } from "node:crypto";
import { execFileSync } from "node:child_process";
import {
  SFIA_CURSOR_TEMPLATE_PATH,
  SFIA_DEFAULT_ALLOWED_OPS,
  SFIA_DEFAULT_ALLOWED_PATH_PREFIXES,
  SFIA_DEFAULT_CLOSED_GATES,
  SFIA_DEFAULT_FORBIDDEN_OPS,
  SFIA_DEFAULT_OPEN_GATES,
  SFIA_DEFAULT_PROTECTED_PATHS,
  SFIA_METHOD_BASELINE,
} from "./canonicalPaths";
import {
  loadCanonicalCoreSources,
  loadProjectContextSources,
} from "./sourceLoader";
import type { SfiaCanonicalContext, SfiaProfile } from "./types";

function git(cwd: string, args: string[]): string {
  return execFileSync("git", args, {
    cwd,
    encoding: "utf8",
    timeout: 8000,
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
}

const PERMANENT_CORE = [
  "Morris décide (L0) — aucune phrase conversationnelle ≠ GO.",
  "Git est la source de vérité ; la mémoire conversationnelle ne remplace pas Git.",
  "GPT propose ; le compilateur SFIA valide ; Cursor exécute sous contrat.",
  "Gates fermés par défaut pour commit / push / PR / merge / GitHub write / L5.",
  "Le prompt Cursor doit être instancié depuis prompts/templates/sfia-cycle-execution-template.md.",
  "Review pack + review handoff obligatoires pour tout rapport Cursor.",
  "Fail-closed : deny by default.",
  "Baseline méthode : SFIA v2.6 (consommée, non modifiée ici).",
];

export function resolveSfiaCanonicalContext(input: {
  workspaceRoot: string;
  sessionId: string;
  project?: string;
  candidateCycle?: string;
  profileHint?: SfiaProfile;
  validatedDecisions?: string[];
}): SfiaCanonicalContext {
  const headSha = git(input.workspaceRoot, ["rev-parse", "HEAD"]);
  const baseSha = git(input.workspaceRoot, ["rev-parse", "origin/main"]);
  let branch = "(detached)";
  try {
    branch =
      git(input.workspaceRoot, ["branch", "--show-current"]) || "(detached)";
  } catch {
    /* detached */
  }

  const core = loadCanonicalCoreSources(input.workspaceRoot);
  const projectDocs = loadProjectContextSources(input.workspaceRoot);
  const sourceDocuments = [...core, ...projectDocs];

  const profile: SfiaProfile = input.profileHint ?? "Critical";
  const profileJustification =
    profile === "Critical"
      ? "Intégration méthode SFIA + exécution Cursor potentielle + gates Git — risque structurant."
      : "Profil fourni / défaut Standard.";

  const contextId = `sfia-ctx-${randomUUID()}`;
  const generatedAt = new Date().toISOString();

  return {
    contextId,
    generatedAt,
    repository: "mcleland147/sfia-workspace",
    branch,
    headSha,
    baseSha,
    methodBaseline: SFIA_METHOD_BASELINE,
    sourceDocuments,
    project: input.project ?? "sfia-studio-ops1 / campus360 demo",
    currentCycle: "8 — Delivery / correctif structurel Control Tower",
    candidateCycle:
      input.candidateCycle ??
      "Delivery documentaire Campus360 bornée (CREATE Markdown)",
    profile,
    profileJustification,
    activeBlocks: [
      "architecture fonctionnelle",
      "architecture technique",
      "sécurité",
      "QA / validation",
      "observabilité",
      "DevOps",
      "capitalisation ciblée",
    ],
    inactiveBlocks: ["industrialisation", "MVP packaging", "multi-tenant"],
    validatedDecisions: [
      "Vision Control Tower",
      "AF-Option C reformulée",
      "Option C hybride",
      "GO EXÉCUTION CONTROL TOWER VERTICAL SLICE",
      "GO INTÉGRER LE MOTEUR DE CONTEXTE SFIA CANONIQUE",
      ...(input.validatedDecisions ?? []),
    ],
    candidateDecisions: [
      "GO VALIDATION LIVE MOTEUR SFIA CANONIQUE",
      "GO commit / push / PR (fermés)",
    ],
    openGates: [...SFIA_DEFAULT_OPEN_GATES],
    closedGates: [...SFIA_DEFAULT_CLOSED_GATES],
    allowedOperations: [...SFIA_DEFAULT_ALLOWED_OPS],
    forbiddenOperations: [...SFIA_DEFAULT_FORBIDDEN_OPS],
    allowedPaths: [...SFIA_DEFAULT_ALLOWED_PATH_PREFIXES],
    protectedPaths: [...SFIA_DEFAULT_PROTECTED_PATHS],
    stopConditions: [
      "Intention conversationnelle ≠ autorisation",
      "CONTEXT_STALE si HEAD ou digests sources changent",
      "Aucun Cursor sans gate Morris + contractHash",
      "Aucun commit/push/PR/merge sans gate dédié",
    ],
    reviewPackRequirement: "full",
    reviewHandoffRequirement: "required_publish_in_cycle",
    cursorTemplatePath: SFIA_CURSOR_TEMPLATE_PATH,
    expectedVerdicts: [
      "SFIA CANONICAL CONTEXT ENGINE IMPLEMENTED — READY FOR MORRIS LIVE VALIDATION",
      "SFIA LIVE ACTION CANDIDATE READY — MORRIS DECISION REQUIRED",
    ],
    unresolvedQuestions: [],
    warnings: [
      "Options ≠ décisions — ne pas promouvoir automatiquement.",
      "Ne pas dupliquer la doctrine SFIA en constantes TypeScript.",
    ],
    permanentCore: [...PERMANENT_CORE],
  };
}

/** Compact JSON for GPT system/context injection (no full markdown bodies). */
export function serializeContextForModel(
  context: SfiaCanonicalContext,
): string {
  return JSON.stringify(
    {
      contextId: context.contextId,
      methodBaseline: context.methodBaseline,
      repository: context.repository,
      branch: context.branch,
      headSha: context.headSha,
      project: context.project,
      currentCycle: context.currentCycle,
      candidateCycle: context.candidateCycle,
      profile: context.profile,
      profileJustification: context.profileJustification,
      activeBlocks: context.activeBlocks,
      validatedDecisions: context.validatedDecisions,
      candidateDecisions: context.candidateDecisions,
      openGates: context.openGates,
      closedGates: context.closedGates,
      allowedOperations: context.allowedOperations,
      forbiddenOperations: context.forbiddenOperations,
      allowedPaths: context.allowedPaths,
      protectedPaths: context.protectedPaths,
      stopConditions: context.stopConditions,
      reviewPackRequirement: context.reviewPackRequirement,
      reviewHandoffRequirement: context.reviewHandoffRequirement,
      cursorTemplatePath: context.cursorTemplatePath,
      permanentCore: context.permanentCore,
      sourceDocuments: context.sourceDocuments.map((s) => ({
        path: s.path,
        digest: s.digest.slice(0, 16),
        blobSha: s.blobSha,
        role: s.role,
      })),
      warnings: context.warnings,
      outputSchemaHint: {
        kinds: [
          "no_action",
          "clarification_required",
          "action_proposed",
          "decision_required",
          "blocked",
        ],
        note: "Return ONE JSON object in a fenced block ```json ... ``` after a short user-facing summary. Do not invent shell/commit/push/PR. Do not start Cursor.",
      },
    },
    null,
    2,
  );
}

export function isContextStale(input: {
  context: SfiaCanonicalContext;
  workspaceRoot: string;
}): boolean {
  try {
    const head = git(input.workspaceRoot, ["rev-parse", "HEAD"]);
    if (head !== input.context.headSha) return true;
  } catch {
    return true;
  }
  return false;
}
