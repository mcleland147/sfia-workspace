/**
 * Product-facing Nora activity labels (Figma 12.01 / 12.10).
 * Maps durable activity events to métier copy — never exposes SDK/raw tool dumps.
 * ANNOUNCED ≠ OBSERVED: callers must keep nature for detail, but headline is human.
 */

export type ActivityLabelInput = {
  phase?: string | null;
  nature?: string | null;
  status?: string | null;
  summary?: string | null;
  sourceRef?: string | null;
  detail?: Record<string, unknown> | null;
};

const PHASE_HEADLINES: Array<{ match: RegExp; label: string }> = [
  { match: /^nora\.generate$/i, label: "Préparation de la réponse" },
  { match: /^nora\.investigation\.engaged$/i, label: "Investigation engagée" },
  { match: /^nora\.investigation$/i, label: "Investigation en cours" },
  { match: /^nora\.contract\.prepare$/i, label: "Préparation du contrat" },
  { match: /^nora\.source\.d4/i, label: "Consultation documentaire" },
  { match: /^nora\.source\.git/i, label: "Consultation Git" },
  { match: /^nora\.source\.web/i, label: "Consultation web publique" },
  { match: /^nora\.source\.history/i, label: "Relecture de l'historique" },
  { match: /^nora\.source\.decision/i, label: "Consultation des décisions" },
  { match: /^nora\.source\.report/i, label: "Consultation d'un rapport" },
  { match: /^nora\.source/i, label: "Consultation de sources" },
];

function looksTechnical(summary: string): boolean {
  return (
    /^(COMPLETE|PARTIAL|DENIED|DISCOVERED|CONSULTED|AVAILABLE|UNAVAILABLE)\b/i.test(
      summary,
    ) ||
    /\b(doc_|gen_|att_|op_|proj_|prep_|tctr_|efx_)/i.test(summary) ||
    /^https?:\/\//i.test(summary.trim()) ||
    /OBSERVED:|ANNOUNCED:|COMPLETED:/i.test(summary)
  );
}

function phaseHeadline(phase: string): string | null {
  for (const row of PHASE_HEADLINES) {
    if (row.match.test(phase)) return row.label;
  }
  return null;
}

function kindFromDetail(detail: Record<string, unknown> | null | undefined): string | null {
  const kind = detail?.kind;
  if (typeof kind === "string" && kind.trim()) return kind.trim().toUpperCase();
  return null;
}

/**
 * Single-line métier headline for the live activity block.
 * Prefer phase/kind mapping over raw tool summaries.
 */
export function projectActivityLabel(input: ActivityLabelInput): string {
  const phase = (input.phase || "").trim();
  const summary = (input.summary || "").trim();
  const kind = kindFromDetail(input.detail);

  if (kind === "WEB" || /web/i.test(phase)) {
    if (/DISCOVERED/i.test(summary) && !/CONSULTED/i.test(summary)) {
      return "Source web découverte — page non encore ouverte";
    }
    if (/CONSULTED|PAGE_OPENED|ouvert/i.test(summary)) {
      return "Page web consultée";
    }
    return "Recherche web publique";
  }
  if (kind === "GIT" || /git/i.test(phase)) {
    return "Consultation Git effectuée";
  }
  if (kind === "D4" || /d4|document/i.test(phase)) {
    return "Document consulté";
  }
  if (kind === "HISTORY" || /history/i.test(phase)) {
    return "Historique conversationnel consulté";
  }

  const fromPhase = phase ? phaseHeadline(phase) : null;
  if (fromPhase) {
    if (input.nature === "COMPLETED" && fromPhase === "Préparation de la réponse") {
      return "Réponse consolidée";
    }
    if (input.nature === "UNCERTAIN") {
      return `${fromPhase} — limite ou incertitude`;
    }
    return fromPhase;
  }

  if (summary && !looksTechnical(summary)) {
    return summary.slice(0, 160);
  }

  if (input.nature === "ANNOUNCED") return "Nora prépare le prochain pas";
  if (input.nature === "OBSERVED") return "Vérification en cours";
  if (input.nature === "COMPLETED") return "Étape terminée";
  if (input.nature === "UNCERTAIN") return "Limite rencontrée";
  return "Activité en cours";
}

export type ActivityStepState = "done" | "current" | "pending";

export type ActivityStepView = {
  key: string;
  label: string;
  state: ActivityStepState;
  nature: string;
  sequence: number;
};

/**
 * Build a short checklist for the Figma activity card from durable events.
 * Dedupes by human label; last occurrence wins state.
 */
export function buildActivitySteps(
  events: Array<ActivityLabelInput & { sequence: number; nature: string }>,
): ActivityStepView[] {
  const byLabel = new Map<string, ActivityStepView>();
  for (const ev of events) {
    const label = projectActivityLabel(ev);
    const state: ActivityStepState =
      ev.nature === "COMPLETED" || ev.status === "COMPLETED"
        ? "done"
        : ev.nature === "OBSERVED" || ev.nature === "ANNOUNCED"
          ? "current"
          : "done";
    byLabel.set(label, {
      key: `${ev.sequence}:${label}`,
      label,
      state,
      nature: ev.nature,
      sequence: ev.sequence,
    });
  }
  const steps = [...byLabel.values()].sort((a, b) => a.sequence - b.sequence);
  // Only the last non-done stays "current"; earlier currents become done for display.
  let sawCurrent = false;
  for (let i = steps.length - 1; i >= 0; i--) {
    const s = steps[i]!;
    if (s.state === "current") {
      if (sawCurrent) s.state = "done";
      else sawCurrent = true;
    }
  }
  return steps.slice(-6);
}

/** Compact API used by pollers — replaces technical `NATURE: summary` headlines. */
export function compactActivitySummary(
  events: Array<{
    nature: string;
    summary: string;
    status: string;
    phase?: string;
    sourceRef?: string | null;
    detail?: Record<string, unknown>;
  }>,
): { headline: string; detailCount: number } {
  if (events.length === 0) return { headline: "", detailCount: 0 };
  const last = events[events.length - 1]!;
  return {
    headline: projectActivityLabel(last).slice(0, 160),
    detailCount: events.length,
  };
}
