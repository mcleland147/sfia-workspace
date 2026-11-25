/**
 * Product-facing Nora activity labels (Figma 12.01 / 12.10).
 * Maps durable activity events to métier copy — never exposes SDK/raw tool dumps.
 * ANNOUNCED ≠ OBSERVED ≠ COMPLETED. FAILED/LIMITED/UNCERTAIN are never success.
 */

export type ActivityLabelInput = {
  phase?: string | null;
  nature?: string | null;
  status?: string | null;
  summary?: string | null;
  sourceRef?: string | null;
  detail?: Record<string, unknown> | null;
};

const PHASE_FALLBACKS: Array<{ match: RegExp; label: string }> = [
  { match: /^nora\.generate$/i, label: "Préparation de la réponse" },
  { match: /^nora\.investigation\.engaged$/i, label: "Investigation engagée" },
  { match: /^nora\.investigation$/i, label: "Investigation en cours" },
  { match: /^nora\.contract\.prepare$/i, label: "Préparation du contrat" },
  { match: /^nora\.objective$/i, label: "Orientation du travail" },
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
    /^(COMPLETE|PARTIAL|DENIED|DISCOVERED|CONSULTED|AVAILABLE|UNAVAILABLE|PAGE_OPENED|STALE|UNKNOWN)\b/i.test(
      summary,
    ) ||
    /\b(doc_|gen_|att_|op_|proj_|prep_|tctr_|efx_|cgw_|nact_|acq_)/i.test(summary) ||
    /^https?:\/\//i.test(summary.trim()) ||
    /OBSERVED:|ANNOUNCED:|COMPLETED:/i.test(summary)
  );
}

/** Shared métier copy for tool-source journal → LIVE activity producers. */
export function formatSourceActivitySummary(entry: {
  kind: string;
  coverage: string;
  title?: string | null;
  ref?: string | null;
  notes?: string | null;
}): string {
  const title = entry.title?.trim() || null;
  const kind = entry.kind.toUpperCase();
  const cov = entry.coverage.toUpperCase();
  let human: string;
  if (kind === "WEB") {
    human =
      cov === "DISCOVERED"
        ? title
          ? `Source web découverte — ${title}`
          : "Source web découverte"
        : cov === "CONSULTED" || cov === "VERIFIED"
          ? title
            ? `Page web consultée — ${title}`
            : "Page web consultée"
          : title
            ? `Recherche web — ${title}`
            : "Recherche web publique";
  } else if (kind === "GIT") {
    human =
      cov === "DISCOVERED"
        ? title
          ? `Source Git découverte — ${title}`
          : "Source Git découverte"
        : cov === "CONSULTED" || cov === "VERIFIED"
          ? title
            ? `Consultation Git — ${title}`
            : "Consultation Git effectuée"
          : cov === "PARTIAL"
            ? title
              ? `Consultation Git partielle — ${title}`
              : "Consultation Git partielle"
            : cov === "DENIED"
              ? title
                ? `Consultation Git refusée — ${title}`
                : "Consultation Git refusée"
              : title
                ? `Consultation Git — ${title}`
                : "Consultation Git";
  } else if (kind === "D4") {
    human =
      cov === "DISCOVERED"
        ? title
          ? `Document identifié — ${title}`
          : "Document identifié"
        : cov === "DENIED"
          ? title
            ? `Document non accessible — ${title}`
            : "Document non accessible"
          : title
            ? `Document consulté — ${title}`
            : "Document consulté";
  } else if (kind === "HISTORY") {
    human = "Historique conversationnel consulté";
  } else {
    human = title || "Consultation de source";
  }
  return human
    .replace(/\b(acq_|cgw_|nact_|gen_|doc_|prep_|proj_)[a-z0-9-]+/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim()
    .slice(0, 200);
}

function detailString(
  detail: Record<string, unknown> | null | undefined,
  key: string,
): string | null {
  const v = detail?.[key];
  if (typeof v === "string" && v.trim()) return v.trim();
  return null;
}

function kindFromDetail(detail: Record<string, unknown> | null | undefined): string | null {
  const kind = detail?.kind;
  if (typeof kind === "string" && kind.trim()) return kind.trim().toUpperCase();
  return null;
}

function coverageFrom(input: ActivityLabelInput): string | null {
  const fromDetail = detailString(input.detail, "coverage");
  if (fromDetail) return fromDetail.toUpperCase();
  const summary = (input.summary || "").trim();
  const m = summary.match(
    /^(DISCOVERED|CONSULTED|COMPLETE|PARTIAL|DENIED|STALE|PAGE_OPENED|UNKNOWN)\b/i,
  );
  return m ? m[1]!.toUpperCase() : null;
}

function humanTitle(input: ActivityLabelInput): string | null {
  return (
    detailString(input.detail, "title") ||
    detailString(input.detail, "objective") ||
    detailString(input.detail, "label") ||
    detailString(input.detail, "path") ||
    null
  );
}

function stripCoveragePrefix(summary: string): string {
  return summary
    .replace(
      /^(DISCOVERED|CONSULTED|COMPLETE|PARTIAL|DENIED|STALE|PAGE_OPENED|UNKNOWN)\s*:\s*/i,
      "",
    )
    .trim();
}

function phaseFallback(phase: string): string | null {
  for (const row of PHASE_FALLBACKS) {
    if (row.match.test(phase)) return row.label;
  }
  return null;
}

/**
 * Single-line métier headline for the live activity block.
 * Prefer contextual title/objective/summary over generic phase maps.
 */
export function projectActivityLabel(input: ActivityLabelInput): string {
  const phase = (input.phase || "").trim();
  const summary = (input.summary || "").trim();
  const kind = kindFromDetail(input.detail);
  const coverage = coverageFrom(input);
  const title = humanTitle(input);
  const failed =
    input.status === "FAILED" ||
    input.nature === "UNCERTAIN" ||
    coverage === "DENIED" ||
    input.status === "LIMITED";

  // Prefer non-technical summary when producers already contextualized the event.
  if (summary && !looksTechnical(summary)) {
    const base = summary.slice(0, 160);
    if (failed && input.nature === "UNCERTAIN") return `${base} — limite ou incertitude`;
    if (input.status === "FAILED" || coverage === "DENIED") return `${base} — non abouti`;
    return base;
  }

  if (kind === "WEB" || /web/i.test(phase)) {
    const name = title || stripCoveragePrefix(summary) || null;
    if (coverage === "DISCOVERED" || (/DISCOVERED/i.test(summary) && !/CONSULTED|PAGE_OPENED/i.test(summary))) {
      return name
        ? `Source web découverte — ${name.slice(0, 100)} (non ouverte)`
        : "Source web découverte — page non encore ouverte";
    }
    if (coverage === "CONSULTED" || coverage === "PAGE_OPENED" || /CONSULTED|PAGE_OPENED/i.test(summary)) {
      return name ? `Page web consultée — ${name.slice(0, 110)}` : "Page web consultée";
    }
    if (failed) {
      return name ? `Consultation web limitée — ${name.slice(0, 100)}` : "Consultation web limitée";
    }
    return name ? `Recherche web — ${name.slice(0, 120)}` : "Recherche web publique";
  }

  if (kind === "GIT" || /git/i.test(phase)) {
    const name = title || stripCoveragePrefix(summary) || null;
    if (failed || coverage === "DENIED") {
      return name ? `Consultation Git limitée — ${name.slice(0, 100)}` : "Consultation Git limitée";
    }
    if (input.nature === "ANNOUNCED") {
      return name ? `Consultation Git — ${name.slice(0, 110)}` : "Consultation Git en cours";
    }
    if (input.nature === "COMPLETED" || coverage === "CONSULTED" || coverage === "COMPLETE") {
      return name ? `Consultation Git — ${name.slice(0, 110)}` : "Consultation Git effectuée";
    }
    return name ? `Consultation Git — ${name.slice(0, 110)}` : "Consultation Git en cours";
  }

  if (kind === "D4" || /d4|document/i.test(phase)) {
    const name = title || stripCoveragePrefix(summary) || null;
    if (failed || coverage === "DENIED") {
      return name ? `Document non accessible — ${name.slice(0, 100)}` : "Document non accessible";
    }
    if (input.nature === "ANNOUNCED") {
      return name ? `Consultation du document — ${name.slice(0, 100)}` : "Consultation documentaire";
    }
    return name ? `Document consulté — ${name.slice(0, 110)}` : "Document consulté";
  }

  if (kind === "HISTORY" || /history/i.test(phase)) {
    return "Historique conversationnel consulté";
  }

  const objective = detailString(input.detail, "objective");
  if (objective) {
    if (input.nature === "ANNOUNCED") return objective.slice(0, 160);
    if (failed) return `${objective.slice(0, 140)} — limite`;
  }

  const fromPhase = phase ? phaseFallback(phase) : null;
  if (fromPhase) {
    if (input.nature === "COMPLETED" && fromPhase === "Préparation de la réponse") {
      return "Réponse consolidée";
    }
    if (failed || input.nature === "UNCERTAIN") {
      return `${fromPhase} — limite ou incertitude`;
    }
    if (title && /source|git|document|web/i.test(phase)) {
      return `${fromPhase} — ${title.slice(0, 100)}`;
    }
    return fromPhase;
  }

  if (input.nature === "ANNOUNCED") return "Nora prépare le prochain pas";
  if (input.nature === "OBSERVED") return "Vérification en cours";
  if (input.nature === "COMPLETED") return "Étape terminée";
  if (input.nature === "UNCERTAIN") return "Limite rencontrée";
  return "Activité en cours";
}

export type ActivityStepState = "done" | "current" | "pending" | "limited" | "failed";

export type ActivityStepView = {
  key: string;
  label: string;
  state: ActivityStepState;
  nature: string;
  sequence: number;
  sourceRef?: string | null;
};

function authoritativeState(
  ev: ActivityLabelInput & { nature: string },
): ActivityStepState {
  const coverage = coverageFrom(ev);
  if (ev.status === "FAILED" || coverage === "DENIED") return "failed";
  if (ev.status === "LIMITED" || ev.nature === "UNCERTAIN" || coverage === "PARTIAL" || coverage === "STALE") {
    return "limited";
  }
  if (ev.nature === "COMPLETED" || (ev.status === "COMPLETED" && ev.nature !== "ANNOUNCED")) {
    // DISCOVERED alone is not a completed consultation.
    if (coverage === "DISCOVERED") return "current";
    return "done";
  }
  if (ev.nature === "OBSERVED" || ev.nature === "ANNOUNCED") return "current";
  if (ev.status === "RUNNING") return "current";
  return "current";
}

function identityKey(ev: ActivityLabelInput & { sequence: number; nature: string }): string {
  const kind = kindFromDetail(ev.detail) || ev.phase || "step";
  const ref = (ev.sourceRef || detailString(ev.detail, "ref") || "").trim();
  const operation = detailString(ev.detail, "operation") || "";
  // RB-23 — distinct consultations of the same source stay distinct operations.
  if (
    (ev.nature === "OBSERVED" || ev.nature === "COMPLETED") &&
    /source\.(git|d4|web)/i.test(ev.phase || "")
  ) {
    return `${kind}:${ref || "x"}:${operation || "op"}:seq:${ev.sequence}`;
  }
  if (ref) return `${kind}:${ref}`;
  return `${kind}:seq:${ev.sequence}`;
}

export type ActivitySourceView = {
  key: string;
  kind: string;
  title: string;
  coverage: string;
  openUrl?: string | null;
};

/**
 * Unique sources consulted/discovered — independent of operation step count (RB-23).
 */
export function buildActivitySources(
  events: Array<ActivityLabelInput & { sequence: number; nature: string }>,
): ActivitySourceView[] {
  const byRef = new Map<string, ActivitySourceView>();
  for (const ev of events) {
    if (!/source\./i.test(ev.phase || "")) continue;
    const kind = (kindFromDetail(ev.detail) || "OTHER").toUpperCase();
    const ref = (ev.sourceRef || detailString(ev.detail, "ref") || "").trim();
    if (!ref) continue;
    const key = `${kind}:${ref}`;
    const title =
      humanTitle(ev) ||
      stripCoveragePrefix((ev.summary || "").trim()) ||
      "Source";
    const coverage = (coverageFrom(ev) || "UNKNOWN").toUpperCase();
    const openUrl = detailString(ev.detail, "openUrl");
    const prev = byRef.get(key);
    // Prefer CONSULTED/VERIFIED over DISCOVERED when the same source advances.
    const rank = (c: string) =>
      c === "CONSULTED" || c === "VERIFIED" || c === "COMPLETE"
        ? 3
        : c === "PARTIAL"
          ? 2
          : c === "DISCOVERED"
            ? 1
            : 0;
    if (!prev || rank(coverage) >= rank(prev.coverage)) {
      byRef.set(key, {
        key,
        kind,
        title: title.slice(0, 120),
        coverage,
        openUrl: openUrl || prev?.openUrl || null,
      });
    }
  }
  return [...byRef.values()].slice(0, 12);
}

/**
 * Build a short checklist for the Figma activity card from durable events.
 * Dedupes by source/operation identity — never by human label alone.
 * Does NOT rewrite earlier "current" steps to "done" when a new step appears.
 * Filters generic nora.generate when richer source/objective events exist.
 */
export function buildActivitySteps(
  events: Array<ActivityLabelInput & { sequence: number; nature: string }>,
): ActivityStepView[] {
  const hasRich = events.some(
    (e) =>
      /source\./i.test(e.phase || "") ||
      /objective|investigation/i.test(e.phase || ""),
  );
  const filtered = hasRich
    ? events.filter((e) => !/^nora\.generate$/i.test(e.phase || ""))
    : events;
  const byId = new Map<string, ActivityStepView>();
  for (const ev of filtered) {
    const id = identityKey(ev);
    const label = projectActivityLabel(ev);
    const state = authoritativeState(ev);
    const prev = byId.get(id);
    // Later observation for same identity updates state; never invent success.
    byId.set(id, {
      key: id,
      label,
      state,
      nature: ev.nature,
      sequence: ev.sequence,
      sourceRef: ev.sourceRef ?? null,
    });
    // Preserve earliest sequence for stable ordering when updating same identity.
    if (prev && prev.sequence < ev.sequence) {
      byId.get(id)!.sequence = prev.sequence;
    }
  }
  return [...byId.values()].sort((a, b) => a.sequence - b.sequence).slice(-8);
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
