/**
 * Bounded continuation / partial restitution from durable investigation state.
 * Server-side only — never invents business conclusions.
 */

import type { CognitiveProductionState } from "./cognitive-work";
import type { InvestigationState, InvestigationSourceRef } from "./investigation-state";

const DEFAULT_MAX = 4500;

function formatSourceLine(s: InvestigationSourceRef): string {
  const kind =
    s.kind === "WEB"
      ? "Web"
      : s.kind === "GIT"
        ? "Git"
        : s.kind === "D4"
          ? "Document"
          : s.kind;
  const title = s.title?.trim() || s.ref || "(sans titre)";
  const note = s.notes?.trim() ? ` — ${s.notes.trim().slice(0, 220)}` : "";
  return `• ${kind} · ${s.coverage} — ${title}${note}`;
}

/**
 * Compact acquis block for the next conductor segment.
 * Prefer CONSULTED/VERIFIED/PARTIAL; include answered determinant questions.
 */
export function formatInvestigationContinuationContext(
  state: InvestigationState,
  opts?: { maxChars?: number },
): string {
  const maxChars = opts?.maxChars ?? DEFAULT_MAX;
  const lines: string[] = ["[Acquis du travail cognitif — réutiliser, ne pas tout relire]"];

  const consulted = state.sources.filter(
    (s) =>
      s.coverage === "CONSULTED" ||
      s.coverage === "VERIFIED" ||
      s.coverage === "PARTIAL",
  );
  const discovered = state.sources.filter((s) => s.coverage === "DISCOVERED");

  if (consulted.length > 0) {
    lines.push("Sources consultées:");
    for (const s of consulted.slice(-8)) lines.push(formatSourceLine(s));
  }
  if (discovered.length > 0) {
    lines.push("Sources découvertes (non ouvertes):");
    for (const s of discovered.slice(-4)) lines.push(formatSourceLine(s));
  }

  const answered = state.questions.filter(
    (q) => q.status === "ANSWERED" && (q.answerSummary?.trim() || "").length > 0,
  );
  if (answered.length > 0) {
    lines.push("Acquis établis:");
    for (const q of answered.slice(-6)) {
      lines.push(`• ${q.text.slice(0, 120)} → ${(q.answerSummary || "").slice(0, 240)}`);
    }
  }

  if (state.contradictions.length > 0) {
    lines.push("Contradictions:");
    for (const c of state.contradictions.slice(-3)) {
      lines.push(`• ${c.a} ↔ ${c.b}: ${c.detail.slice(0, 160)}`);
    }
  }

  if (state.remainingWork.length > 0) {
    lines.push(`Travail restant: ${state.remainingWork.slice(0, 6).join("; ")}`);
  }

  let out = lines.join("\n");
  if (out.length > maxChars) {
    out = `${out.slice(0, maxChars - 24)}\n…[acquis tronqués]`;
  }
  return out;
}

/**
 * Honest partial restitution when the conductor suspends or provider fails.
 * Distinguishes consulted vs discovered; never invents conclusions.
 */
export function composeInvestigationPartialRestitution(input: {
  state: InvestigationState;
  production?: CognitiveProductionState | null;
  suspendReason?: string | null;
  sourceFallback?: InvestigationSourceRef[];
}): string {
  const state = input.state;
  const sources =
    state.sources.length > 0 ? state.sources : (input.sourceFallback ?? []);
  const consulted = sources.filter(
    (s) =>
      s.coverage === "CONSULTED" ||
      s.coverage === "VERIFIED" ||
      s.coverage === "PARTIAL",
  );
  const discovered = sources.filter((s) => s.coverage === "DISCOVERED");
  const answered = state.questions.filter(
    (q) => q.status === "ANSWERED" && (q.answerSummary?.trim() || "").length > 0,
  );

  const lines: string[] = [
    "J’ai avancé sur ce travail, mais je n’ai pas pu livrer une restitution complète et fiable sur ce tour.",
  ];
  if (input.suspendReason) {
    lines.push(`Suspension: ${input.suspendReason}.`);
  }

  if (answered.length > 0) {
    lines.push("Acquis métier consolidés:");
    for (const q of answered.slice(-6)) {
      lines.push(`• ${q.text.slice(0, 140)} → ${(q.answerSummary || "").slice(0, 280)}`);
    }
  } else if (
    input.production?.kind === "DOCUMENT" &&
    input.production.contentMarkdown?.trim()
  ) {
    const excerpt = input.production.contentMarkdown.trim().slice(0, 600);
    lines.push(
      "Production documentaire amorcée (extrait non finalisé):",
      excerpt,
      input.production.contentMarkdown.trim().length > 600 ? "…" : "",
    );
  } else {
    lines.push(
      "Aucune conclusion métier fiable n’a été consolidée dans l’état d’investigation.",
    );
  }

  if (consulted.length > 0) {
    lines.push("Lectures effectuées:");
    for (const s of consulted.slice(-6)) lines.push(formatSourceLine(s));
  }
  if (discovered.length > 0) {
    lines.push("Sources découvertes non ouvertes:");
    for (const s of discovered.slice(-4)) lines.push(formatSourceLine(s));
  }
  if (state.remainingWork.length > 0) {
    lines.push(`Travail restant: ${state.remainingWork.slice(0, 5).join("; ")}`);
  }
  lines.push(
    "Votre message est conservé. Vous pouvez me demander de reprendre — aucune relance automatique.",
  );
  return lines.filter(Boolean).join("\n");
}

/**
 * Scale per-segment D4 char budget with remaining global token headroom.
 * Does not change the 200k / 24 ceilings — only local tool share.
 */
export function scaleSegmentCharBudget(input: {
  baseChars: number;
  usedTokens: number;
  maxTokens?: number;
}): { chars: number; reasonCode: string } {
  const maxTokens = input.maxTokens ?? 200_000;
  const remaining = Math.max(0, maxTokens - Math.max(0, input.usedTokens));
  const ratio = maxTokens > 0 ? remaining / maxTokens : 1;
  if (ratio >= 0.5) {
    return { chars: input.baseChars, reasonCode: "SEGMENT_BUDGET_FULL" };
  }
  if (ratio >= 0.2) {
    return {
      chars: Math.max(4_000, Math.floor(input.baseChars * 0.55)),
      reasonCode: "SEGMENT_BUDGET_REDUCED",
    };
  }
  return {
    chars: Math.max(2_000, Math.floor(input.baseChars * 0.3)),
    reasonCode: "SEGMENT_BUDGET_MINIMAL_RESTITUTION",
  };
}
