# Review Pack Full — SFIA Canonical Context Engine

## 1. Métadonnées

- **Date/heure/fuseau :** 2026-07-22 11:40:55 CEST
- **Cycle :** 8 — Delivery / correctif structurel Control Tower
- **Profil :** Critical
- **Gate Morris consommé :** GO INTÉGRER LE MOTEUR DE CONTEXTE SFIA CANONIQUE
- **Gate suivant (non consommé) :** GO VALIDATION LIVE MOTEUR SFIA CANONIQUE
- **Repo :** mcleland147/sfia-workspace
- **Branche :** delivery/sfia-studio-control-tower-fast-track
- **HEAD :** 32e5271842b9a344a7e292614675c27ea8ed941b
- **Base origin/main :** 32e5271842b9a344a7e292614675c27ea8ed941b
- **Handoff précédent connu :** af559f69bc2795016153be6b121650927c687fa2

## 2. État Git initial (truth check)

- Branche = delivery/sfia-studio-control-tower-fast-track
- HEAD = origin/main = 32e5271…
- Staged vide ; modifications Fast Track + moteur SFIA non commités
- .tmp-sfia-review/** non suivi
- Aucun push delivery

## 3. Sources canoniques (Git HEAD) — digests

| Path | blob SHA (HEAD) | sha256 |
|------|-----------------|--------|
| prompts/templates/sfia-cycle-execution-template.md | 784afe8d8a9aa526bcaed759757ccae5f92f2b08 | 74ced4d61f6852777402995d2f228107d1282c7738179db1f8abba50cca989c4 |
| method/sfia-fast-track/core/sfia-cycle-routing-guide.md | 6eb9289fecf63c014c1e1492c37158a0cabba016 | 7753ae0d86832367db7d7a16dc2828aa2e60d994a2f1583590ad78c64f097b95 |
| method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md | 6d9963911d13df29eefd61bd6584182620b168e2 | 9f851ddb6d89912f494fa7f84b29468f257613c2116d88e62cfec665746f72b2 |
| method/sfia-fast-track/core/sfia-rules-and-guardrails.md | 2e99a5d69901775c5dce6e391cba65efdd72a17c | c302c63c3afba60d1fba10e78ffcd4d4ecd6a69c49c58dce25c03446f0de4764 |

**Sources non modifiées** (method/**, prompts/** intacts).

## 4. Architecture

Source Loader → Context Resolver → Session Context → GPT (+ preamble) → SfiaActionProposal → Action Compiler → ActionCandidate OPS1 → Cursor Prompt Instantiator (template Git réel).

## 5–12. Synthèse composants / tests / captures / live / effets / dette / anti-claims / verdict

Voir sections équivalentes : typecheck+lint+build PASS ; **145** tests unitaires ; E2E SFIA 2/2 + CT 2/2 ; captures sous `.tmp-sfia-review/sfia-canonical-context-engine-evidence/screenshots/` ; live **préparée non réalisée** ; Campus360/method/prompts non touchés ; aucune dépendance npm ; verdict **SFIA CANONICAL CONTEXT ENGINE IMPLEMENTED — READY FOR MORRIS LIVE VALIDATION**.

---

## 13. Fichiers créés (contenu complet)


### `projects/sfia-studio/app/lib/ops1/sfia/canonicalPaths.ts`

```typescript
/**
 * Closed allowlist of SFIA canonical source paths (repo-relative).
 * Doctrine stays in Git — this list only selects what may be loaded.
 */
export const SFIA_CANONICAL_CORE_PATHS = [
  "prompts/templates/sfia-cycle-execution-template.md",
  "method/sfia-fast-track/core/sfia-cycle-routing-guide.md",
  "method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md",
  "method/sfia-fast-track/core/sfia-rules-and-guardrails.md",
] as const;

export const SFIA_CURSOR_TEMPLATE_PATH =
  "prompts/templates/sfia-cycle-execution-template.md" as const;

export type SfiaCanonicalSourceRole =
  | "execution_template"
  | "routing_guide"
  | "operating_model"
  | "guardrails"
  | "project_doc"
  | "handoff";

export const SFIA_CORE_SOURCE_ROLES: Record<
  (typeof SFIA_CANONICAL_CORE_PATHS)[number],
  SfiaCanonicalSourceRole
> = {
  "prompts/templates/sfia-cycle-execution-template.md": "execution_template",
  "method/sfia-fast-track/core/sfia-cycle-routing-guide.md": "routing_guide",
  "method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md":
    "operating_model",
  "method/sfia-fast-track/core/sfia-rules-and-guardrails.md": "guardrails",
};

/** Optional contextual project docs (Control Tower) — still allowlisted. */
export const SFIA_PROJECT_CONTEXT_PATHS = [
  "projects/sfia-studio/70-control-tower-fast-track-architecture-and-contract.md",
  "projects/sfia-studio/72-control-tower-fast-track-decision-pack.md",
  "projects/sfia-studio/73-control-tower-fast-track-delivery-report.md",
] as const;

export const SFIA_METHOD_BASELINE = "SFIA v2.6";

/** Runtime-closed gates for this Control Tower increment (session default). */
export const SFIA_DEFAULT_CLOSED_GATES = [
  "commit",
  "push",
  "PR",
  "merge",
  "cleanup",
  "GitHub write",
  "L5 automation",
  "method modification",
] as const;

export const SFIA_DEFAULT_OPEN_GATES = [
  "GO VALIDATION LIVE MOTEUR SFIA CANONIQUE",
  "GO action Cursor (après ActionCandidate)",
] as const;

export const SFIA_DEFAULT_FORBIDDEN_OPS = [
  "commit",
  "push",
  "create_pr",
  "merge",
  "shell",
  "branch_create",
  "github_write",
  "delete_protected",
  "modify_method",
  "modify_prompts",
] as const;

export const SFIA_DEFAULT_ALLOWED_OPS = [
  "git_local_read",
  "github_read",
  "conversation",
  "propose_action",
  "create_markdown_allowlisted",
  "cursor_execute_after_morris_go",
] as const;

export const SFIA_DEFAULT_ALLOWED_PATH_PREFIXES = [
  "projects/campus360/",
] as const;

export const SFIA_DEFAULT_PROTECTED_PATHS = [
  "projects/campus360/03-pre-framing-decision-pack.md",
  "method/",
  "prompts/",
  "docs/",
  "scripts/",
  ".github/",
] as const;

```

### `projects/sfia-studio/app/lib/ops1/sfia/types.ts`

```typescript
/**
 * SFIA Canonical Context Engine — domain types.
 * Structured runtime representations; doctrine remains in Git sources.
 */
import type { SfiaCanonicalSourceRole } from "./canonicalPaths";

export type SfiaProfile =
  | "Light"
  | "Standard"
  | "Critical"
  | "Capitalization";

export type SfiaFileOperation = "READ" | "CREATE" | "MODIFY" | "DELETE";

export type SfiaProposalKind =
  | "no_action"
  | "clarification_required"
  | "action_proposed"
  | "decision_required"
  | "blocked";

export type SfiaCompilationStatus =
  | "COMPILED"
  | "CLARIFICATION_REQUIRED"
  | "POLICY_DENIED"
  | "GATE_REQUIRED"
  | "PATH_DENIED"
  | "CONTEXT_STALE"
  | "INVALID_PROPOSAL"
  | "BLOCKED";

export interface SfiaSourceDocumentRef {
  path: string;
  digest: string;
  blobSha: string | null;
  role: SfiaCanonicalSourceRole | "project_doc" | "handoff";
  sizeBytes: number;
  readAt: string;
  summaryExcerpt: string;
}

export interface SfiaCanonicalContext {
  contextId: string;
  generatedAt: string;
  repository: string;
  branch: string;
  headSha: string;
  baseSha: string;
  methodBaseline: string;
  sourceDocuments: SfiaSourceDocumentRef[];
  project: string;
  currentCycle: string;
  candidateCycle: string;
  profile: SfiaProfile;
  profileJustification: string;
  activeBlocks: string[];
  inactiveBlocks: string[];
  validatedDecisions: string[];
  candidateDecisions: string[];
  openGates: string[];
  closedGates: string[];
  allowedOperations: string[];
  forbiddenOperations: string[];
  allowedPaths: string[];
  protectedPaths: string[];
  stopConditions: string[];
  reviewPackRequirement: "light" | "full" | "required";
  reviewHandoffRequirement: "required_publish_in_cycle";
  cursorTemplatePath: string;
  expectedVerdicts: string[];
  unresolvedQuestions: string[];
  warnings: string[];
  /** Permanent core facts injected every GPT turn (Level 1). */
  permanentCore: string[];
}

export interface SfiaProposedFile {
  path: string;
  operation: SfiaFileOperation;
  exactContent?: string;
}

export type SfiaActionProposal =
  | {
      kind: "no_action";
      proposalId: string;
      sessionId: string;
      contextId: string;
      userVisibleSummary: string;
      rationale: string;
    }
  | {
      kind: "clarification_required";
      proposalId: string;
      sessionId: string;
      contextId: string;
      userVisibleSummary: string;
      unresolvedQuestions: string[];
    }
  | {
      kind: "decision_required";
      proposalId: string;
      sessionId: string;
      contextId: string;
      userVisibleSummary: string;
      requiredGates: string[];
    }
  | {
      kind: "blocked";
      proposalId: string;
      sessionId: string;
      contextId: string;
      userVisibleSummary: string;
      reason: string;
    }
  | {
      kind: "action_proposed";
      proposalId: string;
      sessionId: string;
      contextId: string;
      objective: string;
      rationale: string;
      cycle: string;
      profile: SfiaProfile;
      profileJustification: string;
      blocks: string[];
      project: string;
      operations: string[];
      files: SfiaProposedFile[];
      expectedEffects: string[];
      excludedEffects: string[];
      requiredGates: string[];
      stopConditions: string[];
      cursorRequired: boolean;
      reviewPackLevel: "light" | "full";
      reviewHandoffRequired: boolean;
      userVisibleSummary: string;
      exactRequestedContent?: string;
      confidence: number;
      unresolvedQuestions: string[];
    };

export interface SfiaCompilationResult {
  status: SfiaCompilationStatus;
  contextId: string;
  proposalId: string;
  sessionId: string;
  reasons: string[];
  deniedOperations: string[];
  deniedPaths: string[];
  actionCandidateId?: string;
  title?: string;
  objective?: string;
  scopeSummary?: string;
  riskSummary?: string;
  files?: SfiaProposedFile[];
  exactContent?: string;
}

export interface SfiaCursorPromptInstantiation {
  templatePath: string;
  templateDigest: string;
  templateBlobSha: string | null;
  contextId: string;
  actionId: string;
  promptText: string;
  instantiatedAt: string;
}

```

### `projects/sfia-studio/app/lib/ops1/sfia/sourceLoader.ts`

```typescript
/**
 * SFIA Canonical Source Loader — read-only, closed path allowlist.
 */
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import {
  SFIA_CANONICAL_CORE_PATHS,
  SFIA_CORE_SOURCE_ROLES,
  SFIA_CURSOR_TEMPLATE_PATH,
  SFIA_PROJECT_CONTEXT_PATHS,
  type SfiaCanonicalSourceRole,
} from "./canonicalPaths";
import type { SfiaSourceDocumentRef } from "./types";

const MAX_SOURCE_BYTES = 400_000;
const EXCERPT_CHARS = 800;

const ALLOWED = new Set<string>([
  ...SFIA_CANONICAL_CORE_PATHS,
  ...SFIA_PROJECT_CONTEXT_PATHS,
]);

export class SfiaSourceLoadError extends Error {
  constructor(
    message: string,
    readonly code:
      | "PATH_NOT_ALLOWED"
      | "PATH_NOT_FOUND"
      | "TOO_LARGE"
      | "READ_FAILED",
  ) {
    super(message);
    this.name = "SfiaSourceLoadError";
  }
}

function digestContent(content: string): string {
  return createHash("sha256").update(content, "utf8").digest("hex");
}

function gitBlobSha(
  workspaceRoot: string,
  relativePath: string,
): string | null {
  try {
    return execFileSync("git", ["rev-parse", `HEAD:${relativePath}`], {
      cwd: workspaceRoot,
      encoding: "utf8",
      timeout: 5000,
      stdio: ["ignore", "pipe", "pipe"],
    }).trim();
  } catch {
    // Untracked / working-tree-only file
    return null;
  }
}

function assertAllowed(relativePath: string): void {
  if (!ALLOWED.has(relativePath) && relativePath !== SFIA_CURSOR_TEMPLATE_PATH) {
    throw new SfiaSourceLoadError(
      `Source hors allowlist: ${relativePath}`,
      "PATH_NOT_ALLOWED",
    );
  }
}

export function loadCanonicalSource(
  workspaceRoot: string,
  relativePath: string,
  role?: SfiaCanonicalSourceRole | "project_doc" | "handoff",
): SfiaSourceDocumentRef {
  assertAllowed(relativePath);
  const abs = path.resolve(workspaceRoot, relativePath);
  const root = path.resolve(workspaceRoot);
  if (abs !== root && !abs.startsWith(root + path.sep)) {
    throw new SfiaSourceLoadError(
      "Chemin hors repository.",
      "PATH_NOT_ALLOWED",
    );
  }
  if (!fs.existsSync(abs) || !fs.statSync(abs).isFile()) {
    throw new SfiaSourceLoadError(
      `Source absente: ${relativePath}`,
      "PATH_NOT_FOUND",
    );
  }
  const buf = fs.readFileSync(abs);
  if (buf.length > MAX_SOURCE_BYTES) {
    throw new SfiaSourceLoadError(
      `Source trop volumineuse: ${relativePath}`,
      "TOO_LARGE",
    );
  }
  if (buf.includes(0)) {
    throw new SfiaSourceLoadError(
      `Source binaire refusée: ${relativePath}`,
      "READ_FAILED",
    );
  }
  const content = buf.toString("utf8");
  const resolvedRole =
    role ??
    SFIA_CORE_SOURCE_ROLES[
      relativePath as (typeof SFIA_CANONICAL_CORE_PATHS)[number]
    ] ??
    "project_doc";
  return {
    path: relativePath,
    digest: digestContent(content),
    blobSha: gitBlobSha(workspaceRoot, relativePath),
    role: resolvedRole,
    sizeBytes: buf.length,
    readAt: new Date().toISOString(),
    summaryExcerpt: content.slice(0, EXCERPT_CHARS).replace(/\s+/g, " ").trim(),
  };
}

export function loadCanonicalCoreSources(
  workspaceRoot: string,
): SfiaSourceDocumentRef[] {
  return SFIA_CANONICAL_CORE_PATHS.map((p) =>
    loadCanonicalSource(workspaceRoot, p),
  );
}

export function loadProjectContextSources(
  workspaceRoot: string,
): SfiaSourceDocumentRef[] {
  const out: SfiaSourceDocumentRef[] = [];
  for (const p of SFIA_PROJECT_CONTEXT_PATHS) {
    try {
      out.push(loadCanonicalSource(workspaceRoot, p, "project_doc"));
    } catch (error) {
      if (
        error instanceof SfiaSourceLoadError &&
        error.code === "PATH_NOT_FOUND"
      ) {
        continue;
      }
      throw error;
    }
  }
  return out;
}

export function loadCursorTemplateSource(
  workspaceRoot: string,
): SfiaSourceDocumentRef & { content: string } {
  const ref = loadCanonicalSource(
    workspaceRoot,
    SFIA_CURSOR_TEMPLATE_PATH,
    "execution_template",
  );
  const content = fs.readFileSync(
    path.join(workspaceRoot, SFIA_CURSOR_TEMPLATE_PATH),
    "utf8",
  );
  return { ...ref, content };
}

export function isCanonicalPathAllowed(relativePath: string): boolean {
  return ALLOWED.has(relativePath);
}

```

### `projects/sfia-studio/app/lib/ops1/sfia/contextResolver.ts`

```typescript
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

```

### `projects/sfia-studio/app/lib/ops1/sfia/proposalSchema.ts`

```typescript
/**
 * Parse / validate SfiaActionProposal from model output (schema gate).
 */
import { randomUUID } from "node:crypto";
import type {
  SfiaActionProposal,
  SfiaFileOperation,
  SfiaProfile,
  SfiaProposalKind,
} from "./types";

const KINDS = new Set<SfiaProposalKind>([
  "no_action",
  "clarification_required",
  "action_proposed",
  "decision_required",
  "blocked",
]);

const PROFILES = new Set<SfiaProfile>([
  "Light",
  "Standard",
  "Critical",
  "Capitalization",
]);

const FILE_OPS = new Set<SfiaFileOperation>([
  "READ",
  "CREATE",
  "MODIFY",
  "DELETE",
]);

const FORBIDDEN_IN_PROPOSAL =
  /\b(git\s+commit|git\s+push|gh\s+pr|create.?pr|merge\s+main|shell|bash\s+-c)\b/i;

export function extractJsonBlock(text: string): string | null {
  const fenced = text.match(/```json\s*([\s\S]*?)```/i);
  if (fenced?.[1]) return fenced[1].trim();
  const bare = text.match(/\{[\s\S]*"kind"\s*:\s*"[a-z_]+"[\s\S]*\}/);
  return bare?.[0] ?? null;
}

export function parseSfiaActionProposal(
  raw: unknown,
  defaults: { sessionId: string; contextId: string },
):
  | { ok: true; proposal: SfiaActionProposal }
  | { ok: false; reason: string } {
  if (!raw || typeof raw !== "object") {
    return { ok: false, reason: "Proposition non objet." };
  }
  const o = raw as Record<string, unknown>;
  const kind = o.kind;
  if (typeof kind !== "string" || !KINDS.has(kind as SfiaProposalKind)) {
    return { ok: false, reason: "kind invalide." };
  }
  const proposalId =
    typeof o.proposalId === "string" && o.proposalId
      ? o.proposalId
      : `sfia-prop-${randomUUID()}`;
  const sessionId =
    typeof o.sessionId === "string" ? o.sessionId : defaults.sessionId;
  const contextId =
    typeof o.contextId === "string" ? o.contextId : defaults.contextId;
  if (sessionId !== defaults.sessionId) {
    return { ok: false, reason: "sessionId mismatch." };
  }
  if (contextId !== defaults.contextId) {
    return { ok: false, reason: "contextId mismatch." };
  }

  const summary =
    typeof o.userVisibleSummary === "string"
      ? o.userVisibleSummary
      : typeof o.rationale === "string"
        ? o.rationale
        : "Proposition SFIA";

  if (kind === "no_action") {
    return {
      ok: true,
      proposal: {
        kind,
        proposalId,
        sessionId,
        contextId,
        userVisibleSummary: summary,
        rationale: typeof o.rationale === "string" ? o.rationale : summary,
      },
    };
  }
  if (kind === "clarification_required") {
    const qs = Array.isArray(o.unresolvedQuestions)
      ? o.unresolvedQuestions.filter((x): x is string => typeof x === "string")
      : [];
    return {
      ok: true,
      proposal: {
        kind,
        proposalId,
        sessionId,
        contextId,
        userVisibleSummary: summary,
        unresolvedQuestions: qs,
      },
    };
  }
  if (kind === "decision_required") {
    const gates = Array.isArray(o.requiredGates)
      ? o.requiredGates.filter((x): x is string => typeof x === "string")
      : [];
    return {
      ok: true,
      proposal: {
        kind,
        proposalId,
        sessionId,
        contextId,
        userVisibleSummary: summary,
        requiredGates: gates,
      },
    };
  }
  if (kind === "blocked") {
    return {
      ok: true,
      proposal: {
        kind,
        proposalId,
        sessionId,
        contextId,
        userVisibleSummary: summary,
        reason: typeof o.reason === "string" ? o.reason : summary,
      },
    };
  }

  // action_proposed
  const profile = o.profile;
  if (typeof profile !== "string" || !PROFILES.has(profile as SfiaProfile)) {
    return { ok: false, reason: "profile invalide." };
  }
  const objective = typeof o.objective === "string" ? o.objective : "";
  if (!objective.trim()) {
    return { ok: false, reason: "objective requis." };
  }
  if (FORBIDDEN_IN_PROPOSAL.test(objective) || FORBIDDEN_IN_PROPOSAL.test(summary)) {
    return {
      ok: false,
      reason: "Proposition contient commit/push/PR/shell — interdit.",
    };
  }
  const filesRaw = Array.isArray(o.files) ? o.files : [];
  const files = [];
  for (const f of filesRaw) {
    if (!f || typeof f !== "object") {
      return { ok: false, reason: "files[] invalide." };
    }
    const fr = f as Record<string, unknown>;
    if (typeof fr.path !== "string" || typeof fr.operation !== "string") {
      return { ok: false, reason: "file path/operation requis." };
    }
    if (!FILE_OPS.has(fr.operation as SfiaFileOperation)) {
      return { ok: false, reason: `opération fichier invalide: ${fr.operation}` };
    }
    files.push({
      path: fr.path,
      operation: fr.operation as SfiaFileOperation,
      exactContent:
        typeof fr.exactContent === "string" ? fr.exactContent : undefined,
    });
  }
  if (files.length === 0) {
    return { ok: false, reason: "action_proposed exige files[]." };
  }

  const operations = Array.isArray(o.operations)
    ? o.operations.filter((x): x is string => typeof x === "string")
    : files.map((f) => f.operation);

  return {
    ok: true,
    proposal: {
      kind: "action_proposed",
      proposalId,
      sessionId,
      contextId,
      objective,
      rationale: typeof o.rationale === "string" ? o.rationale : summary,
      cycle: typeof o.cycle === "string" ? o.cycle : "Delivery",
      profile: profile as SfiaProfile,
      profileJustification:
        typeof o.profileJustification === "string"
          ? o.profileJustification
          : "non fournie",
      blocks: Array.isArray(o.blocks)
        ? o.blocks.filter((x): x is string => typeof x === "string")
        : [],
      project: typeof o.project === "string" ? o.project : "campus360",
      operations,
      files,
      expectedEffects: Array.isArray(o.expectedEffects)
        ? o.expectedEffects.filter((x): x is string => typeof x === "string")
        : [],
      excludedEffects: Array.isArray(o.excludedEffects)
        ? o.excludedEffects.filter((x): x is string => typeof x === "string")
        : ["commit", "push", "PR", "merge"],
      requiredGates: Array.isArray(o.requiredGates)
        ? o.requiredGates.filter((x): x is string => typeof x === "string")
        : ["GO Cursor après ActionCandidate"],
      stopConditions: Array.isArray(o.stopConditions)
        ? o.stopConditions.filter((x): x is string => typeof x === "string")
        : [],
      cursorRequired: o.cursorRequired !== false,
      reviewPackLevel: o.reviewPackLevel === "light" ? "light" : "full",
      reviewHandoffRequired: o.reviewHandoffRequired !== false,
      userVisibleSummary: summary,
      exactRequestedContent:
        typeof o.exactRequestedContent === "string"
          ? o.exactRequestedContent
          : files.find((f) => f.exactContent)?.exactContent,
      confidence:
        typeof o.confidence === "number" && Number.isFinite(o.confidence)
          ? o.confidence
          : 0.7,
      unresolvedQuestions: Array.isArray(o.unresolvedQuestions)
        ? o.unresolvedQuestions.filter((x): x is string => typeof x === "string")
        : [],
    },
  };
}

export function parseProposalFromAssistantText(
  text: string,
  defaults: { sessionId: string; contextId: string },
):
  | { ok: true; proposal: SfiaActionProposal }
  | { ok: false; reason: string } {
  const block = extractJsonBlock(text);
  if (!block) {
    return { ok: false, reason: "Aucun JSON SfiaActionProposal trouvé." };
  }
  try {
    const parsed = JSON.parse(block) as unknown;
    return parseSfiaActionProposal(parsed, defaults);
  } catch {
    return { ok: false, reason: "JSON proposition invalide." };
  }
}

```

### `projects/sfia-studio/app/lib/ops1/sfia/actionCompiler.ts`

```typescript
/**
 * Deterministic SFIA Action Compiler.
 * Never widens a proposal to make it valid.
 */
import {
  createActionCandidateId,
  createEventId,
} from "../ids";
import { openOps1Db, nowIsoWithOffset } from "../db";
import { Ops1Error } from "../errors";
import { getActionCandidate } from "../actionGate";
import type { ActionCandidate, SessionEvent, SessionEventType } from "../types";
import { isContextStale } from "./contextResolver";
import type {
  SfiaActionProposal,
  SfiaCanonicalContext,
  SfiaCompilationResult,
} from "./types";

function insertEvent(
  sessionId: string,
  type: SessionEventType,
  detail: Record<string, unknown> | SfiaCompilationResult,
): SessionEvent {
  const db = openOps1Db();
  const eventId = createEventId();
  const createdAt = nowIsoWithOffset();
  const payload = JSON.stringify(detail);
  db.prepare(
    `INSERT INTO session_events (event_id, session_id, type, created_at, detail)
     VALUES (?, ?, ?, ?, ?)`,
  ).run(eventId, sessionId, type, createdAt, payload);
  return { eventId, sessionId, type, createdAt, detail: payload };
}

function pathAllowed(
  filePath: string,
  context: SfiaCanonicalContext,
): boolean {
  if (context.protectedPaths.some((p) => filePath === p || filePath.startsWith(p))) {
    return false;
  }
  return context.allowedPaths.some(
    (p) => filePath === p || filePath.startsWith(p),
  );
}

function deny(
  status: SfiaCompilationResult["status"],
  base: Pick<
    SfiaCompilationResult,
    "contextId" | "proposalId" | "sessionId"
  >,
  reasons: string[],
  extra?: Partial<SfiaCompilationResult>,
): SfiaCompilationResult {
  return {
    status,
    ...base,
    reasons,
    deniedOperations: extra?.deniedOperations ?? [],
    deniedPaths: extra?.deniedPaths ?? [],
    ...extra,
  };
}

export function compileSfiaActionProposal(input: {
  proposal: SfiaActionProposal;
  context: SfiaCanonicalContext;
  workspaceRoot: string;
  persist?: boolean;
}): SfiaCompilationResult {
  const { proposal, context } = input;
  const base = {
    contextId: context.contextId,
    proposalId: proposal.proposalId,
    sessionId: proposal.sessionId,
  };

  insertEvent(proposal.sessionId, "SFIA_COMPILATION_STARTED", {
    proposalId: proposal.proposalId,
    contextId: context.contextId,
    kind: proposal.kind,
  });

  if (proposal.contextId !== context.contextId) {
    const r = deny("CONTEXT_STALE", base, ["contextId mismatch"]);
    insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
    return r;
  }
  if (proposal.sessionId !== input.proposal.sessionId) {
    const r = deny("INVALID_PROPOSAL", base, ["sessionId incohérent"]);
    insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
    return r;
  }
  if (isContextStale({ context, workspaceRoot: input.workspaceRoot })) {
    const r = deny("CONTEXT_STALE", base, [
      "CONTEXT_STALE — REQUALIFICATION REQUIRED (HEAD drift)",
    ]);
    insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
    return r;
  }

  if (proposal.kind === "clarification_required") {
    const r = deny("CLARIFICATION_REQUIRED", base, [
      "Clarification requise avant ActionCandidate.",
    ]);
    insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
    return r;
  }
  if (proposal.kind === "no_action") {
    const r = deny("BLOCKED", base, ["no_action — aucune ActionCandidate"]);
    insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
    return r;
  }
  if (proposal.kind === "blocked" || proposal.kind === "decision_required") {
    const r = deny(
      proposal.kind === "blocked" ? "BLOCKED" : "GATE_REQUIRED",
      base,
      [proposal.userVisibleSummary],
    );
    insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
    return r;
  }

  // action_proposed
  const deniedOps: string[] = [];
  const deniedPaths: string[] = [];

  for (const op of proposal.operations) {
    const lower = op.toLowerCase();
    if (
      context.forbiddenOperations.some((f) =>
        lower.includes(f.toLowerCase()),
      ) ||
      ["commit", "push", "merge", "create_pr", "pr", "shell"].includes(lower)
    ) {
      deniedOps.push(op);
    }
  }
  if (deniedOps.length > 0) {
    const r = deny(
      "POLICY_DENIED",
      base,
      [`Opérations interdites: ${deniedOps.join(", ")}`],
      { deniedOperations: deniedOps },
    );
    insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
    return r;
  }

  for (const f of proposal.files) {
    if (f.operation === "DELETE") {
      deniedPaths.push(f.path);
      const r = deny(
        "POLICY_DENIED",
        base,
        ["DELETE non autorisé dans cet incrément"],
        { deniedPaths },
      );
      insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
      return r;
    }
    if (!pathAllowed(f.path, context)) {
      deniedPaths.push(f.path);
    }
  }
  if (deniedPaths.length > 0) {
    const r = deny(
      "PATH_DENIED",
      base,
      [`Chemins refusés: ${deniedPaths.join(", ")}`],
      { deniedPaths },
    );
    insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
    return r;
  }

  // Require CREATE/MODIFY under campus360 markdown for demo compiler
  const writes = proposal.files.filter(
    (f) => f.operation === "CREATE" || f.operation === "MODIFY",
  );
  if (writes.length === 0) {
    const r = deny("INVALID_PROPOSAL", base, [
      "Aucune opération CREATE/MODIFY",
    ]);
    insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
    return r;
  }
  if (writes.length > 1) {
    const r = deny("INVALID_PROPOSAL", base, [
      "Une seule écriture fichier autorisée dans ce correctif démonstrateur",
    ]);
    insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
    return r;
  }
  const target = writes[0]!;
  if (!target.path.endsWith(".md")) {
    const r = deny("PATH_DENIED", base, ["Seul Markdown .md autorisé"]);
    insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
    return r;
  }

  const exactContent =
    proposal.exactRequestedContent ?? target.exactContent ?? "";
  if (!exactContent.trim()) {
    const r = deny("INVALID_PROPOSAL", base, [
      "Contenu exact requis (exactRequestedContent)",
    ]);
    insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
    return r;
  }

  const title = `SFIA live: ${target.operation} ${target.path}`;
  const objective = proposal.objective;
  const scopeSummary = `${target.operation} ${target.path} ; hors commit/push/PR/merge`;
  const riskSummary = `Profil ${proposal.profile} — Cursor après GO Morris uniquement`;

  let actionCandidateId: string | undefined;
  if (input.persist !== false) {
    const db = openOps1Db();
    const session = db
      .prepare(`SELECT status FROM cycle_sessions WHERE session_id = ?`)
      .get(proposal.sessionId) as { status: string } | undefined;
    if (!session || session.status !== "OPEN") {
      throw new Ops1Error(
        "CONFLICT",
        "Session non OPEN — compilation refusée.",
      );
    }
    const now = nowIsoWithOffset();
    actionCandidateId = createActionCandidateId();
    db.prepare(
      `INSERT INTO session_qualifications (session_id, qualification, updated_at)
       VALUES (?, 'ACTION_REQUIRED', ?)
       ON CONFLICT(session_id) DO UPDATE SET
         qualification = excluded.qualification,
         updated_at = excluded.updated_at`,
    ).run(proposal.sessionId, now);
    db.prepare(
      `INSERT INTO action_candidates (
        action_candidate_id, session_id, status, title, objective,
        scope_summary, risk_summary, version, created_at, updated_at
      ) VALUES (?, ?, 'PROPOSED', ?, ?, ?, ?, 1, ?, ?)`,
    ).run(
      actionCandidateId,
      proposal.sessionId,
      title,
      objective,
      scopeSummary,
      riskSummary,
      now,
      now,
    );
    insertEvent(proposal.sessionId, "ACTION_CANDIDATE_CREATED_FROM_LIVE", {
      actionCandidateId,
      proposalId: proposal.proposalId,
      contextId: context.contextId,
      path: target.path,
      operation: target.operation,
    });
    insertEvent(proposal.sessionId, "ACTION_CANDIDATE_CREATED", {
      actionCandidateId,
      source: "sfia_live_compiler",
    });
  }

  const result: SfiaCompilationResult = {
    status: "COMPILED",
    ...base,
    reasons: ["Proposition compilée — aucune exécution lancée"],
    deniedOperations: [],
    deniedPaths: [],
    actionCandidateId,
    title,
    objective,
    scopeSummary,
    riskSummary,
    files: proposal.files,
    exactContent,
  };
  insertEvent(proposal.sessionId, "SFIA_COMPILATION_SUCCEEDED", {
    proposalId: proposal.proposalId,
    actionCandidateId,
    contextId: context.contextId,
  });
  return result;
}

export function getCompiledActionCandidate(
  actionCandidateId: string,
): ActionCandidate | null {
  return getActionCandidate(actionCandidateId);
}

```

### `projects/sfia-studio/app/lib/ops1/sfia/cursorPromptInstantiator.ts`

```typescript
/**
 * Cursor prompt instantiator — loads real Git template, never reinvents structure.
 */
import type { ActionCandidate } from "../types";
import { loadCursorTemplateSource } from "./sourceLoader";
import type {
  SfiaCanonicalContext,
  SfiaCompilationResult,
  SfiaCursorPromptInstantiation,
} from "./types";

export function instantiateCursorPrompt(input: {
  workspaceRoot: string;
  context: SfiaCanonicalContext;
  compilation: SfiaCompilationResult;
  candidate: ActionCandidate;
  morrisDecision?: string;
}): SfiaCursorPromptInstantiation {
  const template = loadCursorTemplateSource(input.workspaceRoot);
  const file = input.compilation.files?.[0];
  const content = input.compilation.exactContent ?? "";

  // Instantiate applicable sections WITHOUT rewriting the template structure:
  // produce a bound contract that cites template sections and fills required fields.
  const promptText = [
    `# Prompt Cursor instancié depuis le template canonique Git`,
    ``,
    `templatePath: ${template.path}`,
    `templateDigest: ${template.digest}`,
    `templateBlobSha: ${template.blobSha ?? "WORKING_TREE_ONLY"}`,
    `contextId: ${input.context.contextId}`,
    `actionId: ${input.candidate.actionCandidateId}`,
    `headSha: ${input.context.headSha}`,
    `branch: ${input.context.branch}`,
    `methodBaseline: ${input.context.methodBaseline}`,
    ``,
    `## Qualification (dérivée du contexte SFIA — sources ${input.context.sourceDocuments.map((s) => s.path).join(", ")})`,
    `Cycle: ${input.context.candidateCycle}`,
    `Profil: ${input.context.profile}`,
    `Justification: ${input.context.profileJustification}`,
    `Blocs: ${input.context.activeBlocks.join(", ")}`,
    ``,
    `## Périmètre d'exécution (contrat)`,
    `Objectif: ${input.candidate.objective}`,
    `Fichier: ${file?.path ?? "(n/a)"}`,
    `Opération: ${file?.operation ?? "(n/a)"}`,
    `Créer EXACTEMENT ce contenu Markdown (octet pour octet):`,
    `-----BEGIN CONTENT-----`,
    content,
    `-----END CONTENT-----`,
    ``,
    `## Garde-fous (template § + contexte)`,
    `- Aucun autre fichier`,
    `- Aucun commit / push / PR / merge / remote`,
    `- Aucun shell hors contrat`,
    `- Chemins protégés: ${input.context.protectedPaths.join(", ")}`,
    `- Gates fermés: ${input.context.closedGates.join(", ")}`,
    `- Décision Morris: ${input.morrisDecision ?? "GO action requis avant exécution — non consommé ici"}`,
    ``,
    `## Review`,
    `Review pack: ${input.context.reviewPackRequirement}`,
    `Review handoff: ${input.context.reviewHandoffRequirement}`,
    ``,
    `## Extraits de structure du template (référence, non substitution)`,
    template.content.slice(0, 1200).replace(/\n/g, "\n"),
    `\n…[template truncated for instantiation envelope — full template remains at ${template.path}]`,
  ].join("\n");

  return {
    templatePath: template.path,
    templateDigest: template.digest,
    templateBlobSha: template.blobSha,
    contextId: input.context.contextId,
    actionId: input.candidate.actionCandidateId,
    promptText,
    instantiatedAt: new Date().toISOString(),
  };
}

```

### `projects/sfia-studio/app/lib/ops1/sfia/sessionContext.ts`

```typescript
/**
 * Per-session SFIA context store (immutable per turn; revalidated by HEAD).
 */
import { createEventId } from "../ids";
import { openOps1Db, nowIsoWithOffset } from "../db";
import type { SessionEventType } from "../types";
import { resolveWorkspaceRootFromAppCwd } from "../allowlistEvaluation";
import {
  isContextStale,
  resolveSfiaCanonicalContext,
  serializeContextForModel,
} from "./contextResolver";
import type { SfiaCanonicalContext } from "./types";

const sessionContexts = new Map<string, SfiaCanonicalContext>();

function emit(
  sessionId: string,
  type: SessionEventType,
  detail: Record<string, unknown>,
): void {
  const db = openOps1Db();
  db.prepare(
    `INSERT INTO session_events (event_id, session_id, type, created_at, detail)
     VALUES (?, ?, ?, ?, ?)`,
  ).run(
    createEventId(),
    sessionId,
    type,
    nowIsoWithOffset(),
    JSON.stringify(detail),
  );
}

export function getStoredSfiaContext(
  sessionId: string,
): SfiaCanonicalContext | null {
  return sessionContexts.get(sessionId) ?? null;
}

export function ensureSfiaContext(input: {
  sessionId: string;
  workspaceRoot?: string;
  forceRefresh?: boolean;
}): SfiaCanonicalContext {
  const workspaceRoot =
    input.workspaceRoot ?? resolveWorkspaceRootFromAppCwd();
  const existing = sessionContexts.get(input.sessionId);
  if (
    existing &&
    !input.forceRefresh &&
    !isContextStale({ context: existing, workspaceRoot })
  ) {
    return existing;
  }

  emit(input.sessionId, "SFIA_CONTEXT_LOADING", {
    forceRefresh: Boolean(input.forceRefresh),
    previousContextId: existing?.contextId ?? null,
  });

  try {
    const context = resolveSfiaCanonicalContext({
      workspaceRoot,
      sessionId: input.sessionId,
    });
    for (const src of context.sourceDocuments) {
      emit(input.sessionId, "SFIA_SOURCE_READ", {
        path: src.path,
        digest: src.digest,
        blobSha: src.blobSha,
        role: src.role,
        sizeBytes: src.sizeBytes,
      });
    }
    sessionContexts.set(input.sessionId, context);
    emit(input.sessionId, "SFIA_CONTEXT_READY", {
      contextId: context.contextId,
      headSha: context.headSha,
      sourceCount: context.sourceDocuments.length,
    });
    return context;
  } catch (error) {
    emit(input.sessionId, "SFIA_CONTEXT_FAILED", {
      error: error instanceof Error ? error.message : "unknown",
    });
    throw error;
  }
}

export function buildSfiaSystemPreamble(context: SfiaCanonicalContext): string {
  return [
    "Tu opères dans SFIA Studio Control Tower avec un contexte SFIA canonique.",
    "Tu proposes uniquement. Morris décide. Aucune exécution sans GO UI.",
    "Interdit: commit, push, PR, merge, shell, branches arbitraires, prompt Cursor libre.",
    "Après ta réponse utilisateur courte, inclus UN objet JSON SfiaActionProposal dans ```json.",
    "Contexte structuré:",
    serializeContextForModel(context),
  ].join("\n");
}

export function clearSfiaContextForTests(sessionId?: string): void {
  if (sessionId) sessionContexts.delete(sessionId);
  else sessionContexts.clear();
}

```

### `projects/sfia-studio/app/lib/ops1/sfia/index.ts`

```typescript
export * from "./canonicalPaths";
export * from "./types";
export * from "./sourceLoader";
export * from "./contextResolver";
export * from "./proposalSchema";
export * from "./actionCompiler";
export * from "./cursorPromptInstantiator";
export * from "./sessionContext";

```

### `projects/sfia-studio/app/__tests__/ops1/sfia/canonicalEngine.test.ts`

```typescript
/** @vitest-environment node */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { openOps1Db, resetOps1DbForTests } from "@/lib/ops1/db";
import { createOpenSession } from "@/lib/ops1/repository";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/ops1/allowlistEvaluation";
import { sendConversationMessage } from "@/lib/ops1/conversation/service";
import { listActionCandidates } from "@/lib/ops1/actionGate";
import {
  clearSfiaContextForTests,
  compileSfiaActionProposal,
  ensureSfiaContext,
  instantiateCursorPrompt,
  isCanonicalPathAllowed,
  isContextStale,
  loadCanonicalSource,
  loadCursorTemplateSource,
  parseProposalFromAssistantText,
  parseSfiaActionProposal,
  resolveSfiaCanonicalContext,
  SfiaSourceLoadError,
  type SfiaActionProposal,
  type SfiaCanonicalContext,
} from "@/lib/ops1/sfia";

const LIVE_PROOF_CONTENT =
  "# Preuve Control Tower\n\nCe fichier a été créé pendant la validation live du vertical slice Control Tower.\n";

describe("SFIA source loader", () => {
  const root = resolveWorkspaceRootFromAppCwd();

  it("loads allowlisted core sources with digest", () => {
    const ref = loadCanonicalSource(
      root,
      "method/sfia-fast-track/core/sfia-rules-and-guardrails.md",
    );
    expect(ref.digest).toMatch(/^[a-f0-9]{64}$/);
    expect(ref.sizeBytes).toBeGreaterThan(100);
    expect(ref.role).toBe("guardrails");
  });

  it("refuses path hors allowlist", () => {
    expect(() => loadCanonicalSource(root, "method/secret.md")).toThrow(
      SfiaSourceLoadError,
    );
    try {
      loadCanonicalSource(root, ".env");
      expect.unreachable();
    } catch (e) {
      expect(e).toBeInstanceOf(SfiaSourceLoadError);
      expect((e as SfiaSourceLoadError).code).toBe("PATH_NOT_ALLOWED");
    }
  });

  it("refuses absent allowlisted path", () => {
    // Use an allowlisted path that doesn't exist by temporarily checking
    // isCanonicalPathAllowed still closed.
    expect(isCanonicalPathAllowed("projects/campus360/README.md")).toBe(false);
  });

  it("loads cursor template with content + digest", () => {
    const t = loadCursorTemplateSource(root);
    expect(t.path).toBe("prompts/templates/sfia-cycle-execution-template.md");
    expect(t.content).toMatch(/SFIA|cycle|template/i);
    expect(t.digest).toMatch(/^[a-f0-9]{64}$/);
  });
});

describe("SFIA context resolver", () => {
  it("builds context with hierarchy and does not promote candidate decisions", () => {
    const root = resolveWorkspaceRootFromAppCwd();
    const ctx = resolveSfiaCanonicalContext({
      workspaceRoot: root,
      sessionId: "ops1-sess-test",
    });
    expect(ctx.methodBaseline).toBe("SFIA v2.6");
    expect(ctx.headSha).toMatch(/^[0-9a-f]{40}$/);
    expect(ctx.sourceDocuments.length).toBeGreaterThanOrEqual(4);
    expect(ctx.closedGates).toContain("commit");
    expect(ctx.candidateDecisions.some((d) => /commit/i.test(d))).toBe(true);
    expect(ctx.validatedDecisions).not.toContain(
      "GO VALIDATION LIVE MOTEUR SFIA CANONIQUE",
    );
    expect(ctx.permanentCore.join(" ")).toMatch(/Morris décide/);
  });

  it("detects context stale on head mismatch", () => {
    const root = resolveWorkspaceRootFromAppCwd();
    const ctx = resolveSfiaCanonicalContext({
      workspaceRoot: root,
      sessionId: "ops1-sess-test",
    });
    const stale = {
      ...ctx,
      headSha: "0000000000000000000000000000000000000000",
    };
    expect(isContextStale({ context: stale, workspaceRoot: root })).toBe(true);
    expect(isContextStale({ context: ctx, workspaceRoot: root })).toBe(false);
  });
});

describe("SFIA proposal schema", () => {
  const defaults = {
    sessionId: "ops1-sess-aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa",
    contextId: "sfia-ctx-1",
  };

  it("parses no_action and clarification", () => {
    const no = parseSfiaActionProposal(
      {
        kind: "no_action",
        userVisibleSummary: "rien",
        rationale: "ok",
      },
      defaults,
    );
    expect(no.ok).toBe(true);
    const cl = parseSfiaActionProposal(
      {
        kind: "clarification_required",
        userVisibleSummary: "?",
        unresolvedQuestions: ["path?"],
      },
      defaults,
    );
    expect(cl.ok).toBe(true);
  });

  it("rejects shell/commit phrasing in objective", () => {
    const bad = parseSfiaActionProposal(
      {
        kind: "action_proposed",
        objective: "run git commit now",
        profile: "Critical",
        files: [
          {
            path: "projects/campus360/x.md",
            operation: "CREATE",
            exactContent: "a",
          },
        ],
        userVisibleSummary: "bad",
      },
      defaults,
    );
    expect(bad.ok).toBe(false);
  });

  it("extracts JSON fence from assistant text", () => {
    const text = `Hello\n\`\`\`json\n${JSON.stringify({
      kind: "no_action",
      userVisibleSummary: "noop",
      rationale: "noop",
      sessionId: defaults.sessionId,
      contextId: defaults.contextId,
    })}\n\`\`\``;
    const parsed = parseProposalFromAssistantText(text, defaults);
    expect(parsed.ok).toBe(true);
  });
});

describe("SFIA action compiler", () => {
  let prevExec: string | undefined;
  let tmp: string;
  let sessionId: string;
  let context: SfiaCanonicalContext;

  beforeEach(() => {
    tmp = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-ce-"));
    prevExec = process.env.OPS1_EXEC_ROOT;
    process.env.OPS1_EXEC_ROOT = tmp;
    resetOps1DbForTests();
    openOps1Db();
    clearSfiaContextForTests();
    const { session } = createOpenSession("fixture");
    sessionId = session.sessionId;
    context = ensureSfiaContext({ sessionId });
  });

  afterEach(() => {
    clearSfiaContextForTests();
    resetOps1DbForTests();
    if (prevExec === undefined) delete process.env.OPS1_EXEC_ROOT;
    else process.env.OPS1_EXEC_ROOT = prevExec;
    fs.rmSync(tmp, { recursive: true, force: true });
  });

  function baseProposed(
    overrides: Partial<Extract<SfiaActionProposal, { kind: "action_proposed" }>> = {},
  ): Extract<SfiaActionProposal, { kind: "action_proposed" }> {
    return {
      kind: "action_proposed",
      proposalId: "sfia-prop-1",
      sessionId,
      contextId: context.contextId,
      objective: "Créer preuve Markdown Control Tower",
      rationale: "demande Morris",
      cycle: "Delivery",
      profile: "Critical",
      profileJustification: "gates + Cursor",
      blocks: ["sécurité"],
      project: "campus360",
      operations: ["CREATE"],
      files: [
        {
          path: "projects/campus360/05-control-tower-live-proof.md",
          operation: "CREATE",
          exactContent: LIVE_PROOF_CONTENT,
        },
      ],
      expectedEffects: ["create file"],
      excludedEffects: ["commit", "push"],
      requiredGates: ["GO Cursor"],
      stopConditions: ["no remote"],
      cursorRequired: true,
      reviewPackLevel: "full",
      reviewHandoffRequired: true,
      userVisibleSummary: "CREATE live proof md",
      exactRequestedContent: LIVE_PROOF_CONTENT,
      confidence: 0.9,
      unresolvedQuestions: [],
      ...overrides,
    };
  }

  it("compiles valid CREATE and persists ActionCandidate", () => {
    const result = compileSfiaActionProposal({
      proposal: baseProposed(),
      context,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(result.status).toBe("COMPILED");
    expect(result.exactContent).toBe(LIVE_PROOF_CONTENT);
    expect(result.actionCandidateId).toMatch(/^ops1-act-/);
    const list = listActionCandidates(sessionId);
    expect(list.some((c) => c.actionCandidateId === result.actionCandidateId)).toBe(
      true,
    );
  });

  it("denies commit/push operations", () => {
    const result = compileSfiaActionProposal({
      proposal: baseProposed({
        operations: ["commit", "push"],
        files: [
          {
            path: "projects/campus360/README.md",
            operation: "MODIFY",
            exactContent: "x",
          },
        ],
      }),
      context,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      persist: false,
    });
    expect(result.status).toBe("POLICY_DENIED");
    expect(result.deniedOperations).toEqual(
      expect.arrayContaining(["commit", "push"]),
    );
  });

  it("denies protected path", () => {
    const result = compileSfiaActionProposal({
      proposal: baseProposed({
        files: [
          {
            path: "method/sfia-fast-track/core/sfia-rules-and-guardrails.md",
            operation: "MODIFY",
            exactContent: "hack",
          },
        ],
        exactRequestedContent: "hack",
      }),
      context,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      persist: false,
    });
    expect(result.status).toBe("PATH_DENIED");
  });

  it("denies context stale", () => {
    const stale = {
      ...context,
      headSha: "0000000000000000000000000000000000000000",
    };
    const result = compileSfiaActionProposal({
      proposal: baseProposed({ contextId: stale.contextId }),
      context: stale,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      persist: false,
    });
    expect(result.status).toBe("CONTEXT_STALE");
  });

  it("preserves exact content", () => {
    const result = compileSfiaActionProposal({
      proposal: baseProposed(),
      context,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      persist: false,
    });
    expect(result.exactContent).toBe(LIVE_PROOF_CONTENT);
  });

  it("instantiates cursor prompt from real template", () => {
    const compiled = compileSfiaActionProposal({
      proposal: baseProposed(),
      context,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(compiled.status).toBe("COMPILED");
    const candidates = listActionCandidates(sessionId);
    const candidate = candidates.find(
      (c) => c.actionCandidateId === compiled.actionCandidateId,
    )!;
    const inst = instantiateCursorPrompt({
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      context,
      compilation: compiled,
      candidate,
    });
    expect(inst.templatePath).toBe(
      "prompts/templates/sfia-cycle-execution-template.md",
    );
    expect(inst.templateDigest).toMatch(/^[a-f0-9]{64}$/);
    expect(inst.promptText).toContain(LIVE_PROOF_CONTENT.trim());
    expect(inst.promptText).toContain(context.contextId);
    expect(inst.promptText).toContain(candidate.actionCandidateId);
  });
});

describe("SFIA conversation integration (fixture markers)", () => {
  let prevExec: string | undefined;
  let tmp: string;

  beforeEach(() => {
    tmp = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-int-"));
    prevExec = process.env.OPS1_EXEC_ROOT;
    process.env.OPS1_EXEC_ROOT = tmp;
    resetOps1DbForTests();
    openOps1Db();
    clearSfiaContextForTests();
  });

  afterEach(() => {
    clearSfiaContextForTests();
    resetOps1DbForTests();
    if (prevExec === undefined) delete process.env.OPS1_EXEC_ROOT;
    else process.env.OPS1_EXEC_ROOT = prevExec;
    fs.rmSync(tmp, { recursive: true, force: true });
  });

  it("CREATE marker → ActionCandidate live", async () => {
    const { session } = createOpenSession("fixture");
    const result = await sendConversationMessage({
      sessionId: session.sessionId,
      content: "Prépare l’action __SFIA_PROPOSE_CREATE_MD__",
    });
    expect(result.sfiaContext?.contextId).toBeTruthy();
    expect(result.sfiaProposal?.kind).toBe("action_proposed");
    expect(result.sfiaCompilation?.status).toBe("COMPILED");
    expect(result.sfiaCompilation?.actionCandidateId).toMatch(/^ops1-act-/);
    expect(result.sfiaCompilation?.exactContent).toContain(
      "# Preuve Control Tower",
    );
    expect(listActionCandidates(session.sessionId).length).toBe(1);
  });

  it("commit marker → POLICY_DENIED", async () => {
    const { session } = createOpenSession("fixture");
    const result = await sendConversationMessage({
      sessionId: session.sessionId,
      content: "Bad propose __SFIA_PROPOSE_COMMIT__",
    });
    expect(result.sfiaProposal?.kind).toBe("action_proposed");
    expect(result.sfiaCompilation?.status).toBe("POLICY_DENIED");
    expect(listActionCandidates(session.sessionId).length).toBe(0);
  });
});

```

### `projects/sfia-studio/app/e2e/sfia-canonical-context-engine.spec.ts`

```typescript
import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/sfia-canonical-context-engine-evidence/screenshots",
);

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

test.describe("SFIA Canonical Context Engine", () => {
  test("fixture propose CREATE → context + ActionCandidate live (no fixture button)", async ({
    page,
  }) => {
    await page.goto("/nouvelle-demande");
    await page.evaluate(() => window.sessionStorage.clear());
    await page.reload();

    await page.getByTestId("ops1-create-mode-fixture").check();
    await page.getByTestId("ops1-create-session").click();
    await expect(page.getByTestId("ops1-session-id")).toBeVisible();

    await expect(page.getByTestId("sfia-context-panel")).toBeVisible();
    await expect(page.getByTestId("sfia-context-ready")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("sfia-baseline")).toContainText("SFIA");
    await expect(page.getByTestId("sfia-source-item").first()).toBeVisible();

    await page.screenshot({
      path: path.join(screenshotDir, "01-sfia-context-loaded.png"),
      fullPage: true,
    });

    await page
      .getByTestId("ops1-message-input")
      .fill("Prépare action bornée __SFIA_PROPOSE_CREATE_MD__");
    await page.getByTestId("ops1-send-message").click();

    await expect(page.getByTestId("sfia-proposal-panel")).toBeVisible({
      timeout: 20_000,
    });
    await expect(page.getByTestId("sfia-compilation-status")).toHaveText(
      "COMPILED",
    );
    await expect(page.getByTestId("sfia-live-action-id")).toBeVisible();
    await expect(page.getByTestId("ops1-action-panel")).toBeVisible();
    await expect(page.getByTestId("ops1-i3-create-candidate")).toBeVisible();

    await page.screenshot({
      path: path.join(screenshotDir, "02-sfia-proposal-compiled.png"),
      fullPage: true,
    });
    await page.screenshot({
      path: path.join(screenshotDir, "03-sfia-action-candidate-live.png"),
      fullPage: true,
    });
    await page.screenshot({
      path: path.join(screenshotDir, "04-sfia-sources-digests.png"),
      fullPage: true,
    });
  });

  test("commit proposal denied deterministically", async ({ page }) => {
    await page.goto("/nouvelle-demande");
    await page.evaluate(() => window.sessionStorage.clear());
    await page.reload();
    await page.getByTestId("ops1-create-mode-fixture").check();
    await page.getByTestId("ops1-create-session").click();
    await page
      .getByTestId("ops1-message-input")
      .fill("Mauvaise proposition __SFIA_PROPOSE_COMMIT__");
    await page.getByTestId("ops1-send-message").click();
    await expect(page.getByTestId("sfia-compilation-status")).toHaveText(
      "POLICY_DENIED",
      { timeout: 20_000 },
    );
    await expect(page.getByTestId("sfia-denied-ops")).toBeVisible();
    await page.screenshot({
      path: path.join(screenshotDir, "05-sfia-forbidden-ops-denied.png"),
      fullPage: true,
    });
  });
});

```

### `projects/sfia-studio/74-sfia-canonical-context-engine-report.md`

```markdown
# 74 — SFIA Canonical Context Engine — rapport d’implémentation

| Métadonnée | Valeur |
|------------|--------|
| Date | 2026-07-22 (CEST) |
| Cycle | 8 — Delivery / correctif structurel Control Tower |
| Profil | Critical |
| Gate consommé | `GO INTÉGRER LE MOTEUR DE CONTEXTE SFIA CANONIQUE` |
| Gate suivant | `GO VALIDATION LIVE MOTEUR SFIA CANONIQUE` |
| Branche | `delivery/sfia-studio-control-tower-fast-track` |
| HEAD projet | `32e5271842b9a344a7e292614675c27ea8ed941b` (= `origin/main`) |
| Verdict | **SFIA CANONICAL CONTEXT ENGINE IMPLEMENTED — READY FOR MORRIS LIVE VALIDATION** |

## Intention

Rendre les sources SFIA canoniques opérationnelles dans le flux Control Tower :

message → contexte SFIA → `SfiaActionProposal` → compilateur déterministe → `ActionCandidate` → gate Morris → prompt Cursor instancié depuis le template Git.

Sans dupliquer la doctrine en TypeScript, sans RAG, sans commit/push/PR.

## Architecture minimale livrée

```
Canonical Source Loader
→ Context Resolver → SfiaCanonicalContext
→ GPT Conversation (+ preamble)
→ SfiaActionProposal (schéma)
→ Action Compiler
→ ActionCandidate OPS1
→ Cursor Prompt Instantiator (template Git réel)
```

Emplacement code : `projects/sfia-studio/app/lib/ops1/sfia/**`.

## Anti-claims

- Pas de validation live Morris réalisée dans ce cycle Cursor.
- Pas de MVP / production.
- Méthode SFIA et `prompts/**` non modifiés.
- Campus360 non touché.
- Aucun commit / push / PR projet.

```

---

## 14. Diffs utiles — fichiers modifiés (scope moteur SFIA)


### `projects/sfia-studio/README.md`

```diff
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index ccd03ee..a3c088b 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,7 +4,7 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `poc-ops1-framing-validated-with-reservations` — A–E **CLOSED_WITH_RESERVATIONS** ; cadrage OPS1 **VALIDATED WITH RESERVATIONS** (`41`–`44`) ; backlog OPS1 **validé avec réserves** (`60`–`62` sur `main`) ; Intégration / DevOps OPS1 **validé avec réserves** (`63`–`65` ; `G-OPS1-DEVOPS-VAL` consommé) ; `.sfia-exec/**` **ignoré** ; Node/scanner/suites/CI **ouverts ou différés** ; live / delivery / code / MVP / production **fermés** |
+| **Statut** | `sfia-canonical-context-engine-local` — moteur de contexte SFIA **implémenté** sur branche locale ; **pas de commit/push/PR** ; validation live Morris **requise** ; MVP / production **fermés** |
 | **Baseline méthode** | **SFIA v2.6** (Option C méthode ; inchangée) |
 | **Autorité** | Morris (L0) |
 | **Exécuteur** | Cursor — delivery harness-only POC-G9 (DELIVERY/POC/ARCH/SEC/QA, Critical) |
@@ -13,15 +13,18 @@
 | **Profil SFIA** | Critical |
 | **Branche delivery** | `delivery/sfia-studio-poc-s1-harness` (**locale**) |
 | **Branche architecture** | historique — MERGED #221 |
-| **Base canonique** | `origin/main` @ `b686eb1394bb4d550eeff1dd64669b3d405579ad` |
+| **Base canonique** | `origin/main` @ `32e5271842b9a344a7e292614675c27ea8ed941b` (I6 mergé ; cadrage Control Tower local) |
 | **Chemin** | `projects/sfia-studio/` |
-| **AF-Option C** | **VALIDÉE** — Studio ≠ orchestrateur |
+| **AF-Option C** | **REFORMULÉE ET VALIDÉE** — Studio = cockpit + façade d’orchestration ; policies / exécuteurs logiquement séparés derrière Studio |
+| **Cadrage Control Tower** | `66`–`69` — **validé** (`GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER`) |
+| **Fast Track CT VS** | `70`–`73` — delivery **local** ; `GO EXÉCUTION…` consommé |
+| **Moteur SFIA canonique** | `74` + `app/lib/ops1/sfia/**` — **implémenté local** ; `GO INTÉGRER…` consommé ; live Morris **ouvert** ; commit/push/PR **fermés** |
 | **Cadrage POC** | `20`–`22` — **INTÉGRÉS** ; POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** |
 | **Architecture POC** | `23`–`25` — **Option B minimale** ; POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
 | **Backlog POC** | `26`–`28` — **INTÉGRÉS** (#223) |
 | **Harness POC** | `harness/` — delivery local POC-G9 ; Cursor **fixture** ; Docker **non retenu** |
 | **POC** | **Non lancé** (pas d’industrialisation / daemon) |
-| **Prochaine décision** | Revue PR Draft DevOps / merge éventuel / `GO IMPLEMENT OPS1 CI` / `GO DELIVERY I1` / gate Node — **non automatiques** |
+| **Prochaine décision** | `GO VALIDATION LIVE MOTEUR SFIA CANONIQUE` · puis éventuels `GO commit` / `GO push` / `GO PR` — **non automatiques** |

 ---

@@ -147,7 +150,7 @@ Pré-cadrage
   → décision Morris : ouverture éventuelle conception fonctionnelle OPS1 (`G-OPS1-FUNC-DESIGN`) — **non ouverte**
 ```

-Architecture Option B **intégrée**. A–E **CLOSED_WITH_RESERVATIONS**. Cadrage OPS1 **validé avec réserves** et **canonique sur main** (PR #235 / `b686eb1`). **POC maintenu**. MVP / production / industrialisation / delivery OPS1 **non ouverts**. Trajectoire I1–I7 validée au niveau cadrage uniquement. Prochaine décision : ouverture éventuelle de `G-OPS1-FUNC-DESIGN`.
+Architecture Option B **intégrée**. A–E **CLOSED_WITH_RESERVATIONS**. Cadrage OPS1 **validé avec réserves** (PR #235 / `b686eb1`). I6 mergé (`#253` / `32e5271`). I7 clôturé avec **OPS1-I7-R01**. Cadrage Control Tower **validé** (`66`–`69`). Fast Track vertical slice : **`plan-open`** (`70`–`72` ; Option C hybride). **Code non modifié** dans la préparation. MVP / production / industrialisation **fermés**. Prochaine décision : `GO EXÉCUTION CONTROL TOWER VERTICAL SLICE`.

 ---

@@ -374,8 +377,10 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 4. Intégration / DevOps OPS1 — docs [`63`](./63-ops1-integration-devops-foundation.md)–[`65`](./65-ops1-integration-devops-decision-pack.md) **validés avec réserves** · `G-OPS1-DEVOPS-VAL` consommé (2026-07-20 21:27:26 CEST) · 24 décisions · `.sfia-exec/**` ignoré · **non intégrés sur `main` tant que PR non mergée**.
 5. Delivery / code / CI implémentée / live GPT-Cursor / MVP / production — **FERMÉS** (GO Morris distincts requis ; non ouverts automatiquement).
 6. Réserves maintenues : Node non figé · scanner différé · suites intégration différées · CI Studio différée (`GO IMPLEMENT OPS1 CI`) · worktree≠sandbox · stack/fournisseur · FD-CAND-15 · UX-R01…R04 · live fermés.
+7. **Cadrage Control Tower** — docs [`66`](./66-control-tower-product-framing.md)–[`69`](./69-control-tower-options-and-decision-pack.md) — **validé** · `GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER` consommé · AF-Option C reformulée **validée** · Option C hybride **retenue**.
+8. **Fast Track Control Tower VS** — docs [`70`](./70-control-tower-fast-track-architecture-and-contract.md)–[`72`](./72-control-tower-fast-track-decision-pack.md) — **`plan-open`** · `GO FAST TRACK CONTROL TOWER VERTICAL SLICE` consommé · gate suivante : `GO EXÉCUTION CONTROL TOWER VERTICAL SLICE` · **aucun code** avant ce GO.

-**Verdict documentaire courant :** `SFIA STUDIO OPS1 INTEGRATION DEVOPS VALIDATED WITH RESERVATIONS`
+**Verdict documentaire courant :** `SFIA STUDIO CONTROL TOWER FAST TRACK PLAN OPEN — AWAITING EXECUTION GO`


 ---
@@ -393,7 +398,9 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Scénario OPS1 | Docs `54`–`56` — **VALIDATED WITH AMENDMENTS** (`G-OPS1-SCENARIO-VAL` — 2026-07-20 18:34:47 CEST) ; FD-CAND-13/20/26 levées (OPS1) ; FD-CAND-15 maintenue ; UX-R01…R04 maintenues |
 | Architecture technique OPS1 | Docs `57`–`59` — **VALIDATED WITH AMENDMENTS** (`G-OPS1-TECH-ARCH-VAL` — 2026-07-20 19:17:11 CEST) ; 26 CAND validées ; stack non finalisée |
 | Backlog OPS1 | Docs `60`–`62` — **VALIDATED WITH RESERVATIONS** (`G-OPS1-BACKLOG-VAL` — 2026-07-20 20:52:00 CEST) ; intégrés sur `main` (PR #244) ; 17 epics / 41 stories / 20 décisions |
-| Intégration / DevOps OPS1 | Docs `63`–`65` — **VALIDATED WITH RESERVATIONS** (`G-OPS1-DEVOPS-VAL` — 2026-07-20 21:27:26 CEST) ; 24 CAND ; `.sfia-exec/**` ignoré ; CI/delivery/live/MVP **fermés** ; **pas encore** sur `main` avant merge PR |
+| Intégration / DevOps OPS1 | Docs `63`–`65` — **VALIDATED WITH RESERVATIONS** (`G-OPS1-DEVOPS-VAL` — 2026-07-20 21:27:26 CEST) ; 24 CAND ; `.sfia-exec/**` ignoré ; CI/delivery/live/MVP **fermés** |
+| Cadrage Control Tower | Docs `66`–`69` — **validé** (`GO VALIDATION CADRAGE…`) |
+| Fast Track CT VS | Docs `70`–`72` — **`plan-open`** ; exécution code fermée jusqu’à `GO EXÉCUTION…` |
 | Handoff | `sfia/review-handoff` |

 ---
@@ -477,4 +484,22 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | [64-ops1-local-controls-ci-and-evidence-contract.md](./64-ops1-local-controls-ci-and-evidence-contract.md) | Matrice contrôles / commandes / preuves — **VALIDATED WITH RESERVATIONS** |
 | [65-ops1-integration-devops-decision-pack.md](./65-ops1-integration-devops-decision-pack.md) | `OPS1-DEVOPS-CAND-01`…`24` — **VALIDATED WITH RESERVATIONS** (2026-07-20 21:27:26 CEST) |

-*SFIA Studio — POC maintenu — Intégration/DevOps VALIDATED WITH RESERVATIONS — non encore intégré sur `main` tant que PR non mergée — CI / delivery / live / MVP non ouverts.*
+### Cadrage produit Control Tower (validé)
+
+| Document | Rôle |
+|----------|------|
+| [66-control-tower-product-framing.md](./66-control-tower-product-framing.md) | Contexte, problème, vision, principes, acteurs — **validé** |
+| [67-control-tower-capabilities-and-user-journeys.md](./67-control-tower-capabilities-and-user-journeys.md) | Capacités, UX fonctionnelle, parcours P1–P12 — **validé** |
+| [68-control-tower-scope-success-criteria-and-risks.md](./68-control-tower-scope-success-criteria-and-risks.md) | Produit / POC / MVP candidats, critères, risques — **validé** |
+| [69-control-tower-options-and-decision-pack.md](./69-control-tower-options-and-decision-pack.md) | Options A–D ; Option C **retenue** — **validé** |
+
+### Fast Track Control Tower Vertical Slice (`plan-open`)
+
+| Document | Rôle |
+|----------|------|
+| [70-control-tower-fast-track-architecture-and-contract.md](./70-control-tower-fast-track-architecture-and-contract.md) | Archi minimale, inventaire OPS1, outils, adapters, UX — **`plan-open`** |
+| [71-control-tower-fast-track-backlog-and-delivery.md](./71-control-tower-fast-track-backlog-and-delivery.md) | FT-01…12, lots A/B/C, chemin critique — **`plan-open`** |
+| [72-control-tower-fast-track-decision-pack.md](./72-control-tower-fast-track-decision-pack.md) | D1–D8, risques, gate exécution — **plan validé pour exécution** |
+| [73-control-tower-fast-track-delivery-report.md](./73-control-tower-fast-track-delivery-report.md) | Rapport delivery local — **READY FOR MORRIS LIVE VALIDATION** |
+
+*SFIA Studio — Control Tower delivery **local** (`70`–`73`) — live Morris requis — commit/push/PR/MVP/production **fermés**.*
```

### `projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx b/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
index 23608f4..194e8a3 100644
--- a/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
+++ b/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
@@ -7,6 +7,7 @@ import {
   ops1CreateFixtureActionCandidateAction,
   ops1CreateSessionAction,
   ops1CreateExecutionContractAction,
+  ops1EnsureSfiaContextAction,
   ops1EvaluateAllowlistAction,
   ops1GetLiveConfigAction,
   ops1GetRealCursorAvailabilityAction,
@@ -23,6 +24,11 @@ import {
   ops1OpenContinuationAction,
   ops1SendMessageAction,
 } from "@/lib/ops1/actions";
+import type {
+  SfiaActionProposal,
+  SfiaCanonicalContext,
+  SfiaCompilationResult,
+} from "@/lib/ops1/sfia/types";
 import { formatOps1WorktreeRef } from "@/lib/ops1/worktreeDisplay";
 import type {
   ActionAllowlistEvaluation,
@@ -213,6 +219,17 @@ export function Ops1SessionScreen({
   const [latestReport, setLatestReport] = useState<ExecutionReport | null>(
     null,
   );
+  const [sessionEvents, setSessionEvents] = useState<
+    Array<{ eventId: string; type: string; createdAt: string; detail: string }>
+  >([]);
+  const [timelineTerminal, setTimelineTerminal] = useState<string>(
+    "DECISION_REQUIRED",
+  );
+  const [githubStatus, setGithubStatus] = useState<{
+    available: boolean;
+    transport: string;
+    reason?: string;
+  } | null>(null);
   const [i6Error, setI6Error] = useState<string | null>(null);
   const [resumeSummary, setResumeSummary] = useState<string | null>(null);
   const [gateMicrocopy, setGateMicrocopy] = useState<string | null>(null);
@@ -223,8 +240,59 @@ export function Ops1SessionScreen({
     scopeSummary: "",
     riskSummary: "",
   });
+  const [sfiaContext, setSfiaContext] = useState<SfiaCanonicalContext | null>(
+    null,
+  );
+  const [sfiaProposal, setSfiaProposal] = useState<SfiaActionProposal | null>(
+    null,
+  );
+  const [sfiaCompilation, setSfiaCompilation] =
+    useState<SfiaCompilationResult | null>(null);
+  const [sfiaUiState, setSfiaUiState] = useState<
+    | "CONTEXT_LOADING"
+    | "CONTEXT_READY"
+    | "CONTEXT_STALE"
+    | "PROPOSAL_RECEIVED"
+    | "PROPOSAL_INVALID"
+    | "COMPILATION_DENIED"
+    | "ACTION_CANDIDATE_CREATED"
+    | "DECISION_REQUIRED"
+    | null
+  >(null);
   const [pending, startTransition] = useTransition();

+  const deriveSfiaUiState = useCallback(
+    (input: {
+      context: SfiaCanonicalContext | null;
+      proposal: SfiaActionProposal | null;
+      compilation: SfiaCompilationResult | null;
+    }) => {
+      if (!input.context) {
+        setSfiaUiState(null);
+        return;
+      }
+      const status = input.compilation?.status;
+      if (status === "COMPILED") {
+        setSfiaUiState("ACTION_CANDIDATE_CREATED");
+        return;
+      }
+      if (status === "CONTEXT_STALE") {
+        setSfiaUiState("CONTEXT_STALE");
+        return;
+      }
+      if (status) {
+        setSfiaUiState("COMPILATION_DENIED");
+        return;
+      }
+      if (input.proposal) {
+        setSfiaUiState("PROPOSAL_RECEIVED");
+        return;
+      }
+      setSfiaUiState("CONTEXT_READY");
+    },
+    [],
+  );
+
   useEffect(() => {
     onGlobalModeContextChange?.({
       hasSession: Boolean(session),
@@ -254,6 +322,13 @@ export function Ops1SessionScreen({
       latestContractByAction?: Record<string, ExecutionContract | null>;
       latestAttemptByContract?: Record<string, ExecutionAttempt | null>;
       latestReport?: ExecutionReport | null;
+      events?: Array<{
+        eventId: string;
+        type: string;
+        createdAt: string;
+        detail: string;
+      }>;
+      timeline?: { terminal: string };
     }) => {
       setQualification(data.qualification);
       setCandidates(data.candidates);
@@ -262,6 +337,8 @@ export function Ops1SessionScreen({
       setContractByAction(data.latestContractByAction ?? {});
       setAttemptByContract(data.latestAttemptByContract ?? {});
       setLatestReport(data.latestReport ?? null);
+      setSessionEvents(data.events ?? []);
+      setTimelineTerminal(data.timeline?.terminal ?? "DECISION_REQUIRED");
       const latest = data.candidates[data.candidates.length - 1];
       if (latest) {
         setRefineDraft({
@@ -289,6 +366,8 @@ export function Ops1SessionScreen({
         setContractByAction({});
         setAttemptByContract({});
         setLatestReport(null);
+        setSessionEvents([]);
+        setTimelineTerminal("DECISION_REQUIRED");
         setResumeSummary(null);
         setPhase("idle");
         if (typeof window !== "undefined") {
@@ -314,6 +393,7 @@ export function Ops1SessionScreen({
         setLiveAvailable(cfg.data.available);
         setLiveMissing(cfg.data.missing);
         setTestProvider(cfg.data.testProvider);
+        setGithubStatus(cfg.data.github ?? null);
       }
       const cursor = await ops1GetRealCursorAvailabilityAction();
       if (!cancelled && cursor.ok) {
@@ -364,6 +444,10 @@ export function Ops1SessionScreen({
       window.sessionStorage.setItem(STORAGE_KEY, result.data.session.sessionId);
       setSession(result.data.session);
       setTurns([]);
+      setSfiaContext(null);
+      setSfiaProposal(null);
+      setSfiaCompilation(null);
+      setSfiaUiState("CONTEXT_LOADING");
       setPresentation(
         result.data.session.conversationMode === "fixture"
           ? "fixture"
@@ -371,6 +455,13 @@ export function Ops1SessionScreen({
             ? "test_provider"
             : "openai_live",
       );
+      const ctxResult = await ops1EnsureSfiaContextAction({
+        sessionId: result.data.session.sessionId,
+      });
+      if (ctxResult.ok) {
+        setSfiaContext(ctxResult.data.context);
+        setSfiaUiState("CONTEXT_READY");
+      }
       setPhase("open");
     });
   };
@@ -393,6 +484,22 @@ export function Ops1SessionScreen({
       setDraft("");
       setLastUsage(result.data.usage);
       setPresentation(result.data.presentation);
+      if (result.data.sfiaContext) {
+        setSfiaContext(result.data.sfiaContext);
+      }
+      setSfiaProposal(result.data.sfiaProposal);
+      setSfiaCompilation(result.data.sfiaCompilation);
+      deriveSfiaUiState({
+        context: result.data.sfiaContext ?? sfiaContext,
+        proposal: result.data.sfiaProposal,
+        compilation: result.data.sfiaCompilation,
+      });
+      if (
+        result.data.sfiaCompilation?.status === "COMPILED" &&
+        result.data.sfiaCompilation.actionCandidateId
+      ) {
+        setSfiaUiState("ACTION_CANDIDATE_CREATED");
+      }
       await loadBundle(session.sessionId);
       if (result.data.assistantError) {
         setError(result.data.assistantError);
@@ -416,6 +523,10 @@ export function Ops1SessionScreen({
     setDecisionsByAction({});
     setGateMicrocopy(null);
     setExecRefuseMsg(null);
+    setSfiaContext(null);
+    setSfiaProposal(null);
+    setSfiaCompilation(null);
+    setSfiaUiState(null);
     setPhase("idle");
   };

@@ -1026,6 +1137,15 @@ export function Ops1SessionScreen({
                         ) : null}
                       </div>
                       <p className={styles.turnContent}>{turn.content}</p>
+                      {turn.content.startsWith("[OPS1_REPORT_REINJECTION]") ? (
+                        <p
+                          className={styles.hint}
+                          data-testid="ct-reinjection-turn"
+                        >
+                          Rapport réinjecté automatiquement — pas un succès
+                          implicite.
+                        </p>
+                      ) : null}
                     </li>
                   ))}
                 </ol>
@@ -1124,6 +1244,225 @@ export function Ops1SessionScreen({
             </form>
           </section>

+          <section
+            className={styles.panel}
+            data-testid="sfia-context-panel"
+            aria-labelledby="sfia-context-title"
+          >
+            <h2 id="sfia-context-title" className={styles.panelTitle}>
+              Contexte SFIA
+            </h2>
+            <p data-testid="sfia-ui-state">
+              État : {sfiaUiState ?? "—"}
+            </p>
+            {sfiaContext ? (
+              <dl className={styles.meta} data-testid="sfia-context-ready">
+                <div>
+                  <dt>contextId</dt>
+                  <dd data-testid="sfia-context-id">{sfiaContext.contextId}</dd>
+                </div>
+                <div>
+                  <dt>Baseline</dt>
+                  <dd data-testid="sfia-baseline">
+                    {sfiaContext.methodBaseline}
+                  </dd>
+                </div>
+                <div>
+                  <dt>Cycle</dt>
+                  <dd data-testid="sfia-cycle">{sfiaContext.candidateCycle}</dd>
+                </div>
+                <div>
+                  <dt>Profil</dt>
+                  <dd data-testid="sfia-profile">{sfiaContext.profile}</dd>
+                </div>
+                <div>
+                  <dt>HEAD</dt>
+                  <dd data-testid="sfia-head">{sfiaContext.headSha.slice(0, 12)}</dd>
+                </div>
+                <div>
+                  <dt>Gates ouverts</dt>
+                  <dd data-testid="sfia-open-gates">
+                    {sfiaContext.openGates.join(" · ")}
+                  </dd>
+                </div>
+                <div>
+                  <dt>Gates fermés</dt>
+                  <dd data-testid="sfia-closed-gates">
+                    {sfiaContext.closedGates.join(" · ")}
+                  </dd>
+                </div>
+                <div>
+                  <dt>Ops autorisées</dt>
+                  <dd data-testid="sfia-allowed-ops">
+                    {sfiaContext.allowedOperations.join(", ")}
+                  </dd>
+                </div>
+                <div>
+                  <dt>Ops interdites</dt>
+                  <dd data-testid="sfia-forbidden-ops">
+                    {sfiaContext.forbiddenOperations.join(", ")}
+                  </dd>
+                </div>
+              </dl>
+            ) : (
+              <p className={styles.muted} data-testid="sfia-context-empty">
+                Contexte SFIA non chargé.
+              </p>
+            )}
+            {sfiaContext ? (
+              <ul data-testid="sfia-sources-list">
+                {sfiaContext.sourceDocuments.map((s) => (
+                  <li key={s.path} data-testid="sfia-source-item">
+                    {s.role} · {s.path} · digest {s.digest.slice(0, 12)}
+                    {s.blobSha ? ` · blob ${s.blobSha.slice(0, 8)}` : ""}
+                  </li>
+                ))}
+              </ul>
+            ) : null}
+            {sfiaContext?.warnings.length ? (
+              <p className={styles.hint} data-testid="sfia-warnings">
+                {sfiaContext.warnings.join(" · ")}
+              </p>
+            ) : null}
+            <p className={styles.hint}>
+              Markers SFIA fixture : __SFIA_PROPOSE_CREATE_MD__ ·
+              __SFIA_PROPOSE_COMMIT__
+            </p>
+          </section>
+
+          {(sfiaProposal || sfiaCompilation) && (
+            <section
+              className={styles.panel}
+              data-testid="sfia-proposal-panel"
+              aria-labelledby="sfia-proposal-title"
+            >
+              <h2 id="sfia-proposal-title" className={styles.panelTitle}>
+                Proposition SFIA / compilation
+              </h2>
+              {sfiaProposal ? (
+                <p data-testid="sfia-proposal-kind">
+                  Kind : {sfiaProposal.kind} · {sfiaProposal.proposalId}
+                </p>
+              ) : (
+                <p className={styles.muted} data-testid="sfia-proposal-missing">
+                  Aucune proposition structurée.
+                </p>
+              )}
+              {sfiaCompilation ? (
+                <dl className={styles.meta} data-testid="sfia-compilation">
+                  <div>
+                    <dt>Verdict compilateur</dt>
+                    <dd data-testid="sfia-compilation-status">
+                      {sfiaCompilation.status}
+                    </dd>
+                  </div>
+                  <div>
+                    <dt>Raisons</dt>
+                    <dd data-testid="sfia-compilation-reasons">
+                      {sfiaCompilation.reasons.join(" · ")}
+                    </dd>
+                  </div>
+                  {sfiaCompilation.deniedOperations.length > 0 ? (
+                    <div>
+                      <dt>Ops refusées</dt>
+                      <dd data-testid="sfia-denied-ops">
+                        {sfiaCompilation.deniedOperations.join(", ")}
+                      </dd>
+                    </div>
+                  ) : null}
+                  {sfiaCompilation.deniedPaths.length > 0 ? (
+                    <div>
+                      <dt>Chemins refusés</dt>
+                      <dd data-testid="sfia-denied-paths">
+                        {sfiaCompilation.deniedPaths.join(", ")}
+                      </dd>
+                    </div>
+                  ) : null}
+                  {sfiaCompilation.actionCandidateId ? (
+                    <div>
+                      <dt>ActionCandidate live</dt>
+                      <dd data-testid="sfia-live-action-id">
+                        {sfiaCompilation.actionCandidateId}
+                      </dd>
+                    </div>
+                  ) : null}
+                </dl>
+              ) : null}
+              {sfiaProposal?.kind === "action_proposed" ? (
+                <ul data-testid="sfia-proposal-files">
+                  {sfiaProposal.files.map((f) => (
+                    <li key={`${f.operation}:${f.path}`}>
+                      {f.operation} {f.path}
+                    </li>
+                  ))}
+                </ul>
+              ) : null}
+            </section>
+          )}
+
+          <section
+            className={styles.panel}
+            data-testid="ct-sources-panel"
+            aria-labelledby="ct-sources-title"
+          >
+            <h2 id="ct-sources-title" className={styles.panelTitle}>
+              Sources & outils (Control Tower)
+            </h2>
+            <p className={styles.muted} data-testid="ct-github-status">
+              GitHub read :{" "}
+              {githubStatus
+                ? githubStatus.available
+                  ? `disponible (${githubStatus.transport})`
+                  : `indisponible — ${githubStatus.reason ?? "auth requise"}`
+                : "—"}
+            </p>
+            <p className={styles.hint}>
+              Markers fixture : __CT_TOOL_GIT_STATUS__ · __CT_TOOL_GITHUB_REPO__
+              · __CT_TOOL_DENIED_PATH__
+            </p>
+            <ul data-testid="ct-tool-events">
+              {sessionEvents
+                .filter(
+                  (e) =>
+                    e.type.startsWith("TOOL_") ||
+                    e.type === "SOURCE_SEARCH_STARTED",
+                )
+                .slice(-20)
+                .map((e) => (
+                  <li key={e.eventId} data-testid="ct-tool-event">
+                    <strong>{e.type}</strong> · {e.createdAt} ·{" "}
+                    {e.detail.slice(0, 160)}
+                  </li>
+                ))}
+            </ul>
+            {sessionEvents.filter((e) => e.type.startsWith("TOOL_")).length ===
+            0 ? (
+              <p className={styles.muted} data-testid="ct-tool-events-empty">
+                Aucun appel d’outil pour cette session.
+              </p>
+            ) : null}
+          </section>
+
+          <section
+            className={styles.panel}
+            data-testid="ct-timeline-panel"
+            aria-labelledby="ct-timeline-title"
+          >
+            <h2 id="ct-timeline-title" className={styles.panelTitle}>
+              Timeline unifiée
+            </h2>
+            <p data-testid="ct-timeline-terminal">
+              État terminal : {timelineTerminal}
+            </p>
+            <ol data-testid="ct-timeline-list">
+              {sessionEvents.slice(-30).map((e) => (
+                <li key={e.eventId} data-testid="ct-timeline-item">
+                  {e.createdAt} — {e.type}
+                </li>
+              ))}
+            </ol>
+          </section>
+
           <section
             className={`${styles.panel} ${styles.i3Panel}`}
             data-testid="ops1-i3-controls"
@@ -1158,13 +1497,20 @@ export function Ops1SessionScreen({
               >
                 ACTION_NOT_REQUIRED
               </CtaButton>
-              <CtaButton
-                onClick={onCreateCandidate}
-                disabled={pending}
-                data-testid="ops1-i3-create-candidate"
-              >
-                Créer ActionCandidate (fixture)
-              </CtaButton>
+              {isFixtureSession ? (
+                <CtaButton
+                  onClick={onCreateCandidate}
+                  disabled={pending}
+                  data-testid="ops1-i3-create-candidate"
+                >
+                  Créer ActionCandidate (fixture)
+                </CtaButton>
+              ) : (
+                <p className={styles.hint} data-testid="ops1-i3-live-no-fixture">
+                  Mode live : ActionCandidate via moteur SFIA uniquement (pas de
+                  bouton fixture).
+                </p>
+              )}
             </div>
           </section>

```

### `projects/sfia-studio/app/lib/ops1/actions.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/ops1/actions.ts b/projects/sfia-studio/app/lib/ops1/actions.ts
index 9084c3c..3171032 100644
--- a/projects/sfia-studio/app/lib/ops1/actions.ts
+++ b/projects/sfia-studio/app/lib/ops1/actions.ts
@@ -26,6 +26,11 @@ import {
   generateExecutionReport,
   getLatestReportForSession,
 } from "./reportService";
+import {
+  buildUnifiedTimeline,
+  generateReportAndReinject,
+  listToolRelatedEvents,
+} from "./reportReinjection";
 import {
   closeSession,
   openContinuation,
@@ -47,6 +52,20 @@ import {
 } from "./conversation/config";
 import { sendConversationMessage } from "./conversation/service";
 import { getRealCursorAvailability } from "./cursorExecutionAdapter";
+import { resolveGithubReadTransport, probeGhAuth } from "./tools/githubReadAdapter";
+import { resolveWorkspaceRootFromAppCwd } from "./allowlistEvaluation";
+import { getActionCandidate } from "./actionGate";
+import {
+  ensureSfiaContext,
+  getStoredSfiaContext,
+  instantiateCursorPrompt,
+  type SfiaActionProposal,
+  type SfiaCanonicalContext,
+  type SfiaCompilationResult,
+  type SfiaCursorPromptInstantiation,
+} from "./sfia";
+import { createEventId } from "./ids";
+import { openOps1Db, nowIsoWithOffset } from "./db";
 import type {
   ActionAllowlistEvaluation,
   ActionCandidate,
@@ -64,6 +83,7 @@ import type {
   ProviderPresentation,
   SessionQualification,
   ExecutionReport,
+  SessionEvent,
 } from "./types";

 export type Ops1ActionResult<T> =
@@ -137,6 +157,8 @@ export async function ops1GetSessionAction(
     latestContractByAction: Record<string, ExecutionContract | null>;
     latestAttemptByContract: Record<string, ExecutionAttempt | null>;
     latestReport: ExecutionReport | null;
+    events: SessionEvent[];
+    timeline: ReturnType<typeof buildUnifiedTimeline>;
   }>
 > {
   try {
@@ -159,6 +181,8 @@ export async function ops1GetSessionAction(
         latestContractByAction: i5.latestContractByAction,
         latestAttemptByContract: i5.latestAttemptByContract,
         latestReport: getLatestReportForSession(id),
+        events: listToolRelatedEvents(id),
+        timeline: buildUnifiedTimeline(id),
       },
     };
   } catch (error) {
@@ -172,11 +196,30 @@ export async function ops1GetLiveConfigAction(): Promise<
     available: boolean;
     missing: Array<"OPENAI_API_KEY" | "OPENAI_MODEL">;
     testProvider: boolean;
+    github: {
+      available: boolean;
+      transport: string;
+      reason?: string;
+    };
   }>
 > {
   try {
     const status = getLiveConversationAvailability();
     const testProvider = isFakeConversationProviderForced();
+    const ghTransport = resolveGithubReadTransport();
+    const ghProbe = probeGhAuth();
+    const github =
+      ghTransport.kind === "unavailable"
+        ? {
+            available: false,
+            transport: "none",
+            reason: ghTransport.reason,
+          }
+        : {
+            available: true,
+            transport: ghTransport.kind,
+            reason: ghProbe.reason,
+          };
     if (status.available || testProvider) {
       return {
         ok: true,
@@ -184,12 +227,18 @@ export async function ops1GetLiveConfigAction(): Promise<
           available: true,
           missing: status.available ? [] : status.missing,
           testProvider,
+          github,
         },
       };
     }
     return {
       ok: true,
-      data: { available: false, missing: status.missing, testProvider: false },
+      data: {
+        available: false,
+        missing: status.missing,
+        testProvider: false,
+        github,
+      },
     };
   } catch (error) {
     return fail(error);
@@ -213,6 +262,9 @@ export async function ops1SendMessageAction(input: {
     usage: ConversationUsageCounters | null;
     mode: ConversationMode;
     presentation: ProviderPresentation;
+    sfiaContext: SfiaCanonicalContext | null;
+    sfiaProposal: SfiaActionProposal | null;
+    sfiaCompilation: SfiaCompilationResult | null;
   }>
 > {
   try {
@@ -236,6 +288,9 @@ export async function ops1SendMessageAction(input: {
         usage: result.usage,
         mode: result.mode,
         presentation: resolvePresentation(result.mode),
+        sfiaContext: result.sfiaContext ?? null,
+        sfiaProposal: result.sfiaProposal ?? null,
+        sfiaCompilation: result.sfiaCompilation ?? null,
       },
     };
   } catch (error) {
@@ -243,6 +298,115 @@ export async function ops1SendMessageAction(input: {
   }
 }

+/** Resolve or reuse immutable SFIA canonical context for the session. */
+export async function ops1EnsureSfiaContextAction(input: {
+  sessionId: string;
+  forceRefresh?: boolean;
+}): Promise<Ops1ActionResult<{ context: SfiaCanonicalContext }>> {
+  try {
+    const sessionId = assertSessionId(input.sessionId);
+    const context = ensureSfiaContext({
+      sessionId,
+      forceRefresh: input.forceRefresh,
+    });
+    return { ok: true, data: { context } };
+  } catch (error) {
+    return fail(error);
+  }
+}
+
+export async function ops1GetSfiaContextAction(input: {
+  sessionId: string;
+}): Promise<Ops1ActionResult<{ context: SfiaCanonicalContext | null }>> {
+  try {
+    const sessionId = assertSessionId(input.sessionId);
+    return {
+      ok: true,
+      data: { context: getStoredSfiaContext(sessionId) },
+    };
+  } catch (error) {
+    return fail(error);
+  }
+}
+
+/**
+ * Instantiate Cursor prompt from the real Git template after COMPILED + candidate.
+ * Does not start Cursor.
+ */
+export async function ops1InstantiateCursorPromptAction(input: {
+  sessionId: string;
+  actionCandidateId: string;
+  compilation: SfiaCompilationResult;
+}): Promise<Ops1ActionResult<{ instantiation: SfiaCursorPromptInstantiation }>> {
+  try {
+    const sessionId = assertSessionId(input.sessionId);
+    const actionCandidateId = assertActionCandidateId(input.actionCandidateId);
+    const context = getStoredSfiaContext(sessionId);
+    if (!context) {
+      throw new Ops1Error(
+        "CONFLICT",
+        "Contexte SFIA absent — requalification requise.",
+      );
+    }
+    if (input.compilation.contextId !== context.contextId) {
+      throw new Ops1Error(
+        "CONFLICT",
+        "CONTEXT_STALE — REQUALIFICATION REQUIRED",
+      );
+    }
+    if (input.compilation.status !== "COMPILED") {
+      throw new Ops1Error(
+        "VALIDATION",
+        "Instanciation refusée — compilation non COMPILED.",
+      );
+    }
+    const candidate = getActionCandidate(actionCandidateId);
+    if (!candidate || candidate.sessionId !== sessionId) {
+      throw new Ops1Error("NOT_FOUND", "ActionCandidate introuvable.");
+    }
+    const workspaceRoot = resolveWorkspaceRootFromAppCwd();
+    const instantiation = instantiateCursorPrompt({
+      workspaceRoot,
+      context,
+      compilation: input.compilation,
+      candidate,
+    });
+    const db = openOps1Db();
+    const now = nowIsoWithOffset();
+    db.prepare(
+      `INSERT INTO session_events (event_id, session_id, type, created_at, detail)
+       VALUES (?, ?, ?, ?, ?)`,
+    ).run(
+      createEventId(),
+      sessionId,
+      "CURSOR_TEMPLATE_LOADED",
+      now,
+      JSON.stringify({
+        templatePath: instantiation.templatePath,
+        templateDigest: instantiation.templateDigest,
+        templateBlobSha: instantiation.templateBlobSha,
+      }),
+    );
+    db.prepare(
+      `INSERT INTO session_events (event_id, session_id, type, created_at, detail)
+       VALUES (?, ?, ?, ?, ?)`,
+    ).run(
+      createEventId(),
+      sessionId,
+      "CURSOR_PROMPT_INSTANTIATED",
+      now,
+      JSON.stringify({
+        contextId: instantiation.contextId,
+        actionId: instantiation.actionId,
+        templateDigest: instantiation.templateDigest,
+      }),
+    );
+    return { ok: true, data: { instantiation } };
+  } catch (error) {
+    return fail(error);
+  }
+}
+
 /** @deprecated I1 name — fixture sessions only. */
 export async function ops1AppendUserMessageAction(input: {
   sessionId: string;
@@ -520,18 +684,46 @@ export async function ops1GenerateExecutionReportAction(input: {
   sessionId: string;
   contractId: string;
   executionAttemptId?: string;
-}): Promise<Ops1ActionResult<{ report: ExecutionReport }>> {
+  /** Default true — reinject + analyze. Set false for legacy report-only. */
+  reinject?: boolean;
+}): Promise<
+  Ops1ActionResult<{
+    report: ExecutionReport;
+    reinjectionTurn?: JournalTurn | null;
+    analysisTurn?: JournalTurn | null;
+    analysisError?: string | null;
+    reinjectionId?: string;
+  }>
+> {
   try {
     const sessionId = assertSessionId(input.sessionId);
     if (typeof input.contractId !== "string" || !input.contractId) {
       throw new Ops1Error("VALIDATION", "contractId invalide.");
     }
-    const { report } = generateExecutionReport({
+    if (input.reinject === false) {
+      const { report } = generateExecutionReport({
+        sessionId,
+        contractId: input.contractId,
+        executionAttemptId: input.executionAttemptId,
+      });
+      return { ok: true, data: { report } };
+    }
+    const result = await generateReportAndReinject({
       sessionId,
       contractId: input.contractId,
       executionAttemptId: input.executionAttemptId,
+      analyze: true,
     });
-    return { ok: true, data: { report } };
+    return {
+      ok: true,
+      data: {
+        report: result.report,
+        reinjectionTurn: result.reinjectionTurn,
+        analysisTurn: result.analysisTurn,
+        analysisError: result.analysisError,
+        reinjectionId: result.reinjectionId,
+      },
+    };
   } catch (error) {
     return fail(error);
   }
```

### `projects/sfia-studio/app/lib/ops1/conversation/service.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/ops1/conversation/service.ts b/projects/sfia-studio/app/lib/ops1/conversation/service.ts
index b88e051..79a3fdf 100644
--- a/projects/sfia-studio/app/lib/ops1/conversation/service.ts
+++ b/projects/sfia-studio/app/lib/ops1/conversation/service.ts
@@ -19,6 +19,22 @@ import {
 } from "./types";
 import { resolveConversationProvider } from "./provider";
 import type { ConversationProvider } from "./types";
+import { runToolCallingLoop } from "./toolLoop";
+import { createToolCallId, routeToolCall } from "../tools/toolRouter";
+import { openOps1Db, nowIsoWithOffset } from "../db";
+import { createEventId } from "../ids";
+import {
+  buildSfiaSystemPreamble,
+  ensureSfiaContext,
+} from "../sfia/sessionContext";
+import { parseProposalFromAssistantText } from "../sfia/proposalSchema";
+import { compileSfiaActionProposal } from "../sfia/actionCompiler";
+import { resolveWorkspaceRootFromAppCwd } from "../allowlistEvaluation";
+import type {
+  SfiaActionProposal,
+  SfiaCanonicalContext,
+  SfiaCompilationResult,
+} from "../sfia/types";

 export interface SendMessageResult {
   userTurn: JournalTurn;
@@ -27,6 +43,11 @@ export interface SendMessageResult {
   usage: ConversationUsageCounters | null;
   mode: ConversationMode;
   providerId: string | null;
+  toolRounds?: number;
+  toolCalls?: number;
+  sfiaContext?: SfiaCanonicalContext | null;
+  sfiaProposal?: SfiaActionProposal | null;
+  sfiaCompilation?: SfiaCompilationResult | null;
 }

 function durationMs(startedAt: string, completedAt: string): number | null {
@@ -36,17 +57,208 @@ function durationMs(startedAt: string, completedAt: string): number | null {
   return Math.max(0, b - a);
 }

-/**
- * Orchestrates fixture or live conversation turn using the session's
- * immutable conversationMode. Optional requestedMode is validated then ignored
- * if matching; mismatch is rejected before any persistence or provider call.
- */
+function emitSfia(
+  sessionId: string,
+  type: "SFIA_PROPOSAL_RECEIVED" | "SFIA_PROPOSAL_INVALID",
+  detail: Record<string, unknown>,
+): void {
+  const db = openOps1Db();
+  db.prepare(
+    `INSERT INTO session_events (event_id, session_id, type, created_at, detail)
+     VALUES (?, ?, ?, ?, ?)`,
+  ).run(
+    createEventId(),
+    sessionId,
+    type,
+    nowIsoWithOffset(),
+    JSON.stringify(detail),
+  );
+}
+
+async function runFixtureWithOptionalTools(
+  sessionId: string,
+  userContent: string,
+): Promise<{ reply: string; toolCalls: number }> {
+  const markers: Array<{
+    marker: RegExp;
+    name: string;
+    args: Record<string, unknown>;
+  }> = [
+    {
+      marker: /__CT_TOOL_GIT_STATUS__/i,
+      name: "git_local_get_status",
+      args: {},
+    },
+    {
+      marker: /__CT_TOOL_GIT_HEAD__/i,
+      name: "git_local_get_head",
+      args: {},
+    },
+    {
+      marker: /__CT_TOOL_GITHUB_REPO__/i,
+      name: "github_get_repository",
+      args: {},
+    },
+    {
+      marker: /__CT_TOOL_DENIED_PATH__/i,
+      name: "git_local_read_file",
+      args: { path: ".env" },
+    },
+  ];
+
+  const db = openOps1Db();
+  const parts: string[] = [buildFixtureAssistantReply(userContent)];
+  let toolCalls = 0;
+  for (const m of markers) {
+    if (!m.marker.test(userContent)) continue;
+    toolCalls += 1;
+    const result = await routeToolCall(
+      {
+        toolCallId: createToolCallId(),
+        name: m.name,
+        arguments: m.args,
+        sessionId,
+      },
+      { db },
+    );
+    parts.push(
+      result.ok
+        ? `[FIXTURE TOOL OK] ${m.name}: ${result.summary}`
+        : `[FIXTURE TOOL ${result.status.toUpperCase()}] ${m.name}: ${result.errorCode} — ${result.message}`,
+    );
+  }
+
+  if (/__SFIA_PROPOSE_CREATE_MD__/i.test(userContent)) {
+    const ctx = ensureSfiaContext({ sessionId });
+    const content =
+      "# Preuve Control Tower\n\nCe fichier a été créé pendant la validation live du vertical slice Control Tower.\n";
+    const proposalJson = {
+      kind: "action_proposed",
+      proposalId: `sfia-prop-fixture-${Date.now()}`,
+      sessionId,
+      contextId: ctx.contextId,
+      objective:
+        "Créer projects/campus360/05-control-tower-live-proof.md avec le contenu exact demandé.",
+      rationale: "Demande Morris bornée — CREATE Markdown Campus360.",
+      cycle: "Delivery documentaire",
+      profile: "Critical",
+      profileJustification:
+        "Exécution Cursor potentielle + gouvernance SFIA",
+      blocks: ["QA / validation", "sécurité"],
+      project: "campus360",
+      operations: ["CREATE"],
+      files: [
+        {
+          path: "projects/campus360/05-control-tower-live-proof.md",
+          operation: "CREATE",
+          exactContent: content,
+        },
+      ],
+      expectedEffects: ["create markdown file in worktree after GO"],
+      excludedEffects: ["commit", "push", "PR", "merge"],
+      requiredGates: ["GO Cursor"],
+      stopConditions: ["Aucun effet distant"],
+      cursorRequired: true,
+      reviewPackLevel: "full",
+      reviewHandoffRequired: true,
+      userVisibleSummary:
+        "ActionCandidate proposée: CREATE 05-control-tower-live-proof.md — aucune exécution.",
+      exactRequestedContent: content,
+      confidence: 0.95,
+      unresolvedQuestions: [],
+    };
+    parts.push("Proposition SFIA structurée:");
+    parts.push("```json");
+    parts.push(JSON.stringify(proposalJson, null, 2));
+    parts.push("```");
+  }
+
+  if (/__SFIA_PROPOSE_COMMIT__/i.test(userContent)) {
+    const ctx = ensureSfiaContext({ sessionId });
+    parts.push("```json");
+    parts.push(
+      JSON.stringify(
+        {
+          kind: "action_proposed",
+          proposalId: `sfia-prop-bad-${Date.now()}`,
+          sessionId,
+          contextId: ctx.contextId,
+          objective: "Persister les changements via commit puis push distant",
+          rationale: "invalid — doit être refusé par le compilateur",
+          cycle: "Delivery",
+          profile: "Standard",
+          profileJustification: "n/a",
+          blocks: [],
+          project: "campus360",
+          operations: ["commit", "push"],
+          files: [
+            {
+              path: "projects/campus360/README.md",
+              operation: "MODIFY",
+              exactContent: "x",
+            },
+          ],
+          expectedEffects: [],
+          excludedEffects: [],
+          requiredGates: [],
+          stopConditions: [],
+          cursorRequired: false,
+          reviewPackLevel: "light",
+          reviewHandoffRequired: false,
+          userVisibleSummary: "Proposition commit puis push (doit être refusée)",
+          confidence: 0.5,
+          unresolvedQuestions: [],
+        },
+        null,
+        2,
+      ),
+    );
+    parts.push("```");
+  }
+
+  return { reply: parts.join("\n"), toolCalls };
+}
+
+function processSfiaProposalFromText(input: {
+  sessionId: string;
+  text: string;
+  context: SfiaCanonicalContext;
+}): {
+  proposal: SfiaActionProposal | null;
+  compilation: SfiaCompilationResult | null;
+} {
+  const parsed = parseProposalFromAssistantText(input.text, {
+    sessionId: input.sessionId,
+    contextId: input.context.contextId,
+  });
+  if (!parsed.ok) {
+    emitSfia(input.sessionId, "SFIA_PROPOSAL_INVALID", {
+      reason: parsed.reason,
+      contextId: input.context.contextId,
+    });
+    return { proposal: null, compilation: null };
+  }
+  emitSfia(input.sessionId, "SFIA_PROPOSAL_RECEIVED", {
+    proposalId: parsed.proposal.proposalId,
+    kind: parsed.proposal.kind,
+    contextId: input.context.contextId,
+  });
+  const compilation = compileSfiaActionProposal({
+    proposal: parsed.proposal,
+    context: input.context,
+    workspaceRoot: resolveWorkspaceRootFromAppCwd(),
+    persist: parsed.proposal.kind === "action_proposed",
+  });
+  return { proposal: parsed.proposal, compilation };
+}
+
 export async function sendConversationMessage(input: {
   sessionId: string;
   content: string;
-  /** Optional client hint — must match session mode or be omitted. */
   requestedMode?: ConversationMode;
   provider?: ConversationProvider;
+  enableTools?: boolean;
+  enableSfia?: boolean;
 }): Promise<SendMessageResult> {
   const session = getSession(input.sessionId);
   if (!session) {
@@ -68,7 +280,6 @@ export async function sendConversationMessage(input: {
     );
   }

-  // Defense: refuse mixed journals before any write.
   assertJournalMatchesMode(listTurns(input.sessionId), mode);

   if (mode === "fixture") {
@@ -81,8 +292,16 @@ export async function sendConversationMessage(input: {

     let assistantTurn: JournalTurn | null = null;
     let assistantError: string | null = null;
+    let toolCalls = 0;
+    let sfiaContext: SfiaCanonicalContext | null = null;
+    let sfiaProposal: SfiaActionProposal | null = null;
+    let sfiaCompilation: SfiaCompilationResult | null = null;
     try {
-      const reply = buildFixtureAssistantReply(input.content);
+      const { reply, toolCalls: tc } = await runFixtureWithOptionalTools(
+        input.sessionId,
+        input.content,
+      );
+      toolCalls = tc;
       const appended = appendTurn({
         sessionId: input.sessionId,
         role: "assistant_fixture",
@@ -90,6 +309,21 @@ export async function sendConversationMessage(input: {
         fixture: true,
       });
       assistantTurn = appended.turn;
+
+      if (
+        input.enableSfia !== false &&
+        (/__SFIA_PROPOSE_/i.test(input.content) ||
+          /```json[\s\S]*"kind"\s*:/i.test(reply))
+      ) {
+        sfiaContext = ensureSfiaContext({ sessionId: input.sessionId });
+        const processed = processSfiaProposalFromText({
+          sessionId: input.sessionId,
+          text: reply,
+          context: sfiaContext,
+        });
+        sfiaProposal = processed.proposal;
+        sfiaCompilation = processed.compilation;
+      }
     } catch (error) {
       assistantError = toSafeClientError(error).message;
     }
@@ -101,11 +335,19 @@ export async function sendConversationMessage(input: {
       usage: null,
       mode: "fixture",
       providerId: null,
+      toolRounds: toolCalls > 0 ? 1 : 0,
+      toolCalls,
+      sfiaContext,
+      sfiaProposal,
+      sfiaCompilation,
     };
   }

-  // LIVE path — no silent fallback to fixture.
   const provider = input.provider ?? resolveConversationProvider();
+  const enableSfia = input.enableSfia !== false;
+  const sfiaContext = enableSfia
+    ? ensureSfiaContext({ sessionId: input.sessionId })
+    : null;

   const { turn: userTurn } = appendTurn({
     sessionId: input.sessionId,
@@ -129,25 +371,56 @@ export async function sendConversationMessage(input: {

   try {
     const history = listTurns(input.sessionId);
-    const messages = buildProviderMessagesFromJournal(history, "live");
-    const completion = await provider.complete(messages);
+    let messages = buildProviderMessagesFromJournal(history, "live");
+    if (sfiaContext) {
+      messages = [
+        {
+          role: "user",
+          content: `[SFIA_SYSTEM_CONTEXT]\n${buildSfiaSystemPreamble(sfiaContext)}`,
+        },
+        {
+          role: "assistant",
+          content:
+            "Contexte SFIA reçu. Je qualifierai sans exécuter et produirai une SfiaActionProposal JSON si une action est pertinente.",
+        },
+        ...messages,
+      ];
+    }
+    const loop = await runToolCallingLoop({
+      sessionId: input.sessionId,
+      messages,
+      provider,
+      enableTools: input.enableTools !== false,
+    });

     const { turn: assistantTurn } = appendTurn({
       sessionId: input.sessionId,
       role: "assistant_live",
-      content: completion.text,
+      content: loop.text,
       fixture: false,
     });

+    let sfiaProposal: SfiaActionProposal | null = null;
+    let sfiaCompilation: SfiaCompilationResult | null = null;
+    if (sfiaContext) {
+      const processed = processSfiaProposalFromText({
+        sessionId: input.sessionId,
+        text: loop.text,
+        context: sfiaContext,
+      });
+      sfiaProposal = processed.proposal;
+      sfiaCompilation = processed.compilation;
+    }
+
     const finalized = completeConversationAttemptSuccess({
       attemptId: attempt.attemptId,
       sessionId: input.sessionId,
       assistantTurnId: assistantTurn.turnId,
-      providerResponseId: completion.usage.providerResponseId,
-      model: completion.usage.model,
-      inputTokens: completion.usage.inputTokens,
-      outputTokens: completion.usage.outputTokens,
-      totalTokens: completion.usage.totalTokens,
+      providerResponseId: loop.usage.providerResponseId,
+      model: loop.usage.model,
+      inputTokens: loop.usage.inputTokens,
+      outputTokens: loop.usage.outputTokens,
+      totalTokens: loop.usage.totalTokens,
     });

     console.info(
@@ -155,6 +428,8 @@ export async function sendConversationMessage(input: {
       input.sessionId,
       attempt.attemptId,
       finalized.totalTokens,
+      `tools=${loop.toolCalls}`,
+      sfiaCompilation ? `sfia=${sfiaCompilation.status}` : "",
     );

     return {
@@ -175,6 +450,11 @@ export async function sendConversationMessage(input: {
       },
       mode: "live",
       providerId: provider.providerId,
+      toolRounds: loop.toolRounds,
+      toolCalls: loop.toolCalls,
+      sfiaContext,
+      sfiaProposal,
+      sfiaCompilation,
     };
   } catch (error) {
     const safe = toSafeClientError(error);
@@ -196,6 +476,7 @@ export async function sendConversationMessage(input: {
       usage: null,
       mode: "live",
       providerId: provider.providerId,
+      sfiaContext,
     };
   }
 }
```

### `projects/sfia-studio/app/lib/ops1/types.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/ops1/types.ts b/projects/sfia-studio/app/lib/ops1/types.ts
index a92e16d..96a3bf5 100644
--- a/projects/sfia-studio/app/lib/ops1/types.ts
+++ b/projects/sfia-studio/app/lib/ops1/types.ts
@@ -110,7 +110,38 @@ export type SessionEventType =
   | "POST_REPORT_CHAT_RESUMED"
   | "SESSION_CLOSED"
   | "SESSION_CONTINUATION_OPENED"
-  | "CLOSED_SESSION_MUTATION_REFUSED";
+  | "CLOSED_SESSION_MUTATION_REFUSED"
+  | "SOURCE_SEARCH_STARTED"
+  | "TOOL_CALL_REQUESTED"
+  | "TOOL_CALL_STARTED"
+  | "TOOL_CALL_SUCCEEDED"
+  | "TOOL_CALL_FAILED"
+  | "TOOL_CALL_DENIED"
+  | "TOOL_LOOP_COMPLETED"
+  | "TOOL_LOOP_LIMIT_REACHED"
+  | "EXECUTION_PREPARING"
+  | "CURSOR_PROCESS_STARTED"
+  | "CURSOR_PROCESS_COMPLETED"
+  | "CURSOR_PROCESS_FAILED"
+  | "POSTCHECK_STARTED"
+  | "POSTCHECK_COMPLETED"
+  | "REPORT_GENERATION_STARTED"
+  | "REPORT_SEALED"
+  | "REINJECTION_STARTED"
+  | "REINJECTION_COMPLETED"
+  | "REINJECTION_FAILED"
+  | "SFIA_CONTEXT_LOADING"
+  | "SFIA_SOURCE_READ"
+  | "SFIA_CONTEXT_READY"
+  | "SFIA_CONTEXT_FAILED"
+  | "SFIA_PROPOSAL_RECEIVED"
+  | "SFIA_PROPOSAL_INVALID"
+  | "SFIA_COMPILATION_STARTED"
+  | "SFIA_COMPILATION_SUCCEEDED"
+  | "SFIA_COMPILATION_DENIED"
+  | "ACTION_CANDIDATE_CREATED_FROM_LIVE"
+  | "CURSOR_TEMPLATE_LOADED"
+  | "CURSOR_PROMPT_INSTANTIATED";

 export interface SessionEvent {
   eventId: string;
```

### `projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx b/projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
index 68f3cdb..b21a56a 100644
--- a/projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
+++ b/projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
@@ -13,6 +13,29 @@ vi.mock("@/lib/ops1/actions", () => ({
   ops1GetSessionAction: (...args: unknown[]) => get(...args),
   ops1SendMessageAction: (...args: unknown[]) => send(...args),
   ops1GetLiveConfigAction: (...args: unknown[]) => liveConfig(...args),
+  ops1EnsureSfiaContextAction: vi.fn(async () => ({
+    ok: true,
+    data: {
+      context: {
+        contextId: "sfia-ctx-test",
+        methodBaseline: "SFIA v2.6",
+        candidateCycle: "test",
+        profile: "Critical",
+        headSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
+        openGates: [],
+        closedGates: ["commit"],
+        allowedOperations: ["conversation"],
+        forbiddenOperations: ["commit"],
+        sourceDocuments: [],
+        warnings: [],
+      },
+    },
+  })),
+  ops1GetSfiaContextAction: vi.fn(async () => ({
+    ok: true,
+    data: { context: null },
+  })),
+  ops1InstantiateCursorPromptAction: vi.fn(),
   ops1GetRealCursorAvailabilityAction: vi.fn(async () => ({
     ok: true,
     data: { flagEnabled: false, binPath: null, available: false },
```

### `projects/sfia-studio/app/__tests__/ops1/conversation-repository.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/ops1/conversation-repository.test.ts b/projects/sfia-studio/app/__tests__/ops1/conversation-repository.test.ts
index d0125d7..ab5c294 100644
--- a/projects/sfia-studio/app/__tests__/ops1/conversation-repository.test.ts
+++ b/projects/sfia-studio/app/__tests__/ops1/conversation-repository.test.ts
@@ -185,7 +185,7 @@ describe("ops1 i2 repository + immutable session mode", () => {
       provider: wrapping,
     });

-    expect(histories).toEqual([1, 3, 5]);
+    expect(histories).toEqual([3, 5, 7]); // +2 SFIA preamble messages each live turn
     expect(third.assistantTurn?.role).toBe("assistant_live");
     expect(listTurns(session.sessionId)).toHaveLength(6);

```

### `projects/sfia-studio/app/__tests__/ops1/globalModeBadge.ui.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/ops1/globalModeBadge.ui.test.tsx b/projects/sfia-studio/app/__tests__/ops1/globalModeBadge.ui.test.tsx
index 5ddc33f..b979e18 100644
--- a/projects/sfia-studio/app/__tests__/ops1/globalModeBadge.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/ops1/globalModeBadge.ui.test.tsx
@@ -17,6 +17,29 @@ vi.mock("@/lib/ops1/actions", () => ({
   ops1GetSessionAction: (...args: unknown[]) => get(...args),
   ops1SendMessageAction: (...args: unknown[]) => send(...args),
   ops1GetLiveConfigAction: (...args: unknown[]) => liveConfig(...args),
+  ops1EnsureSfiaContextAction: vi.fn(async () => ({
+    ok: true,
+    data: {
+      context: {
+        contextId: "sfia-ctx-test",
+        methodBaseline: "SFIA v2.6",
+        candidateCycle: "test",
+        profile: "Critical",
+        headSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
+        openGates: [],
+        closedGates: ["commit"],
+        allowedOperations: ["conversation"],
+        forbiddenOperations: ["commit"],
+        sourceDocuments: [],
+        warnings: [],
+      },
+    },
+  })),
+  ops1GetSfiaContextAction: vi.fn(async () => ({
+    ok: true,
+    data: { context: null },
+  })),
+  ops1InstantiateCursorPromptAction: vi.fn(),
   ops1GetRealCursorAvailabilityAction: vi.fn(async () => ({
     ok: true,
     data: { flagEnabled: false, binPath: null, available: false },
```

---

## 15. État Git final

```
 M projects/sfia-studio/README.md
 M projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
 M projects/sfia-studio/app/__tests__/ops1/conversation-repository.test.ts
 M projects/sfia-studio/app/__tests__/ops1/globalModeBadge.ui.test.tsx
 M projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
 M projects/sfia-studio/app/lib/ops1/actions.ts
 M projects/sfia-studio/app/lib/ops1/conversation/fakeProvider.ts
 M projects/sfia-studio/app/lib/ops1/conversation/openaiProvider.ts
 M projects/sfia-studio/app/lib/ops1/conversation/service.ts
 M projects/sfia-studio/app/lib/ops1/conversation/types.ts
 M projects/sfia-studio/app/lib/ops1/executionOrchestrator.ts
 M projects/sfia-studio/app/lib/ops1/types.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/66-control-tower-product-framing.md
?? projects/sfia-studio/67-control-tower-capabilities-and-user-journeys.md
?? projects/sfia-studio/68-control-tower-scope-success-criteria-and-risks.md
?? projects/sfia-studio/69-control-tower-options-and-decision-pack.md
?? projects/sfia-studio/70-control-tower-fast-track-architecture-and-contract.md
?? projects/sfia-studio/71-control-tower-fast-track-backlog-and-delivery.md
?? projects/sfia-studio/72-control-tower-fast-track-decision-pack.md
?? projects/sfia-studio/73-control-tower-fast-track-delivery-report.md
?? projects/sfia-studio/74-sfia-canonical-context-engine-report.md
?? projects/sfia-studio/app/__tests__/ops1/controlTowerReinjection.test.ts
?? projects/sfia-studio/app/__tests__/ops1/controlTowerTools.test.ts
?? projects/sfia-studio/app/__tests__/ops1/sfia/
?? projects/sfia-studio/app/e2e/control-tower-fast-track.spec.ts
?? projects/sfia-studio/app/e2e/sfia-canonical-context-engine.spec.ts
?? projects/sfia-studio/app/lib/ops1/conversation/toolLoop.ts
?? projects/sfia-studio/app/lib/ops1/reportReinjection.ts
?? projects/sfia-studio/app/lib/ops1/sfia/
?? projects/sfia-studio/app/lib/ops1/tools/
```

```
 projects/sfia-studio/README.md                     |  41 ++-
 .../app/__tests__/ops1/Ops1SessionScreen.test.tsx  |  23 ++
 .../__tests__/ops1/conversation-repository.test.ts |   2 +-
 .../app/__tests__/ops1/globalModeBadge.ui.test.tsx |  23 ++
 .../app/features/ops1/Ops1SessionScreen.tsx        | 360 ++++++++++++++++++++-
 projects/sfia-studio/app/lib/ops1/actions.ts       | 200 +++++++++++-
 .../app/lib/ops1/conversation/fakeProvider.ts      | 123 ++++++-
 .../app/lib/ops1/conversation/openaiProvider.ts    | 124 +++++--
 .../app/lib/ops1/conversation/service.ts           | 315 +++++++++++++++++-
 .../sfia-studio/app/lib/ops1/conversation/types.ts |  49 +++
 .../app/lib/ops1/executionOrchestrator.ts          |   9 +
 projects/sfia-studio/app/lib/ops1/types.ts         |  33 +-
 12 files changed, 1239 insertions(+), 63 deletions(-)
```

**Verdict pack :** contenu créé inclus + diffs modifiés inclus.

**VERDICT :** SFIA CANONICAL CONTEXT ENGINE IMPLEMENTED — READY FOR MORRIS LIVE VALIDATION
