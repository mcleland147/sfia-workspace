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
