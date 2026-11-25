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

  if (state.inventoryTotal != null) {
    lines.push(
      `Couverture inventaire: ${state.inventoryExamined ?? 0}/${state.inventoryTotal}`,
    );
  }

  const conclusions = (state.conclusions ?? []).filter((c) => c.trim().length > 0);
  if (conclusions.length > 0) {
    lines.push("Conclusions réutilisables:");
    for (const c of conclusions.slice(-8)) {
      lines.push(`• ${c.slice(0, 320)}`);
    }
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
function humanizeSuspendReason(reason: string | null | undefined): string | null {
  if (!reason) return null;
  if (
    reason === "GLOBAL_TOKEN_BUDGET_EXHAUSTED" ||
    reason === "GLOBAL_BUDGET_EXHAUSTED" ||
    reason === "GLOBAL_SEGMENT_BUDGET_EXHAUSTED"
  ) {
    return "J’ai atteint la limite de ressources allouée à ce travail cognitif.";
  }
  if (reason === "SEGMENT_INVOCATION_LIMIT") {
    return "J’ai atteint la limite technique de segments pour cette invocation — une reprise bornée reste possible.";
  }
  if (reason === "NO_PROGRESS_DETECTED") {
    return "J’ai suspendu ce travail faute de progression mesurable sur plusieurs segments.";
  }
  if (reason.startsWith("GLOBAL_") || /BUDGET|EXHAUSTED|LIMIT/i.test(reason)) {
    return "Le travail a été interrompu par une limite technique.";
  }
  return null;
}

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
  const conclusions = (state.conclusions ?? []).filter((c) => c.trim().length > 0);
  const replyBody =
    input.production?.kind === "REPLY" || input.production?.kind === "SYNTHESIS"
      ? input.production.contentMarkdown?.trim() || ""
      : "";

  const lines: string[] = [
    "J’ai avancé sur ce travail, mais je n’ai pas pu livrer une restitution complète et fiable sur ce tour.",
  ];
  const humanLimit = humanizeSuspendReason(input.suspendReason);
  if (humanLimit) {
    lines.push(humanLimit);
  } else if (input.suspendReason && !/^[A-Z][A-Z0-9_]+$/.test(input.suspendReason)) {
    lines.push(`Interruption: ${input.suspendReason}.`);
  }

  if (conclusions.length > 0) {
    lines.push("Conclusions et acquis déjà consolidés:");
    for (const c of conclusions.slice(-8)) {
      lines.push(`• ${c.slice(0, 420)}`);
    }
  } else if (answered.length > 0) {
    lines.push("Acquis métier consolidés:");
    for (const q of answered.slice(-6)) {
      lines.push(`• ${q.text.slice(0, 140)} → ${(q.answerSummary || "").slice(0, 280)}`);
    }
  } else if (replyBody.length >= 40) {
    lines.push("Résultat utile déjà produit sur ce travail:");
    lines.push(replyBody.slice(0, 900));
    if (replyBody.length > 900) lines.push("…");
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
      "Aucun acquis métier consolidé n’est encore disponible pour ce travail — je n’invente pas de conclusions.",
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
    "Ton message est conservé. Tu peux me demander de reprendre ou de produire une note à partir de ces acquis — aucune relance automatique.",
  );
  return lines.filter(Boolean).join("\n");
}

/**
 * Scale per-segment D4 char budget with remaining global token headroom.
 * Local tool share only — global envelope is 1M reeval / 2M admin max.
 */
export function scaleSegmentCharBudget(input: {
  baseChars: number;
  usedTokens: number;
  maxTokens?: number;
}): { chars: number; reasonCode: string } {
  const maxTokens = input.maxTokens ?? 2_000_000;
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
