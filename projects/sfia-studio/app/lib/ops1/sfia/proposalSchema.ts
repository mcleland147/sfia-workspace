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
