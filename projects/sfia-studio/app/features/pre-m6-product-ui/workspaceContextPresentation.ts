/**
 * Presentation-only derivations for the P3 Workspace context panel / focus bar.
 *
 * Every value is read from Product projections the workspace has ALREADY
 * loaded (durable project state, lifecycle projection, conversation journal,
 * active proposal). Nothing here is persisted, nothing is inferred beyond what
 * those projections state, and no Product semantics are redefined.
 */
import type { PilotLifecycleProjection } from "@/lib/oa/cycle/application/lifecycleProjection";
import type { TranscriptAvailability } from "./hooks/useProductConversation";
import { lifecycleStatusBadge } from "./surfaces/lifecyclePresentation";

export type CurrentnessTone = "ok" | "warn" | "neutral";

export type CurrentnessPresentation = {
  label: string;
  detail: string;
  tone: CurrentnessTone;
};

/** Honest currentness: « À jour » only when durable state + transcript are readable. */
export function presentCurrentness(input: {
  transcriptAvailability: TranscriptAvailability;
  stateVersion: number;
}): CurrentnessPresentation {
  const base = `État enregistré · v${input.stateVersion}`;
  switch (input.transcriptAvailability) {
    case "unavailable":
      return {
        label: "À vérifier",
        detail: `${base} · conversation à relire`,
        tone: "warn",
      };
    case "pending":
      return {
        label: "Lecture en cours",
        detail: `${base} · conversation en cours de lecture`,
        tone: "neutral",
      };
    default:
      return { label: "À jour", detail: base, tone: "ok" };
  }
}

export type TrajectoryNodeState = "done" | "current" | "proposed";

export type TrajectoryNode = {
  key: string;
  ordinal: number;
  state: TrajectoryNodeState;
  label: string;
};

const MAX_TRAJECTORY_NODES = 5;

/**
 * Cycle strip « Terminé / En cours / Proposé » from the durable lifecycle
 * projection (cycle instances). Superseded and cancelled cycles are omitted.
 */
export function deriveTrajectoryNodes(
  lifecycle: PilotLifecycleProjection | null,
): TrajectoryNode[] {
  if (!lifecycle) return [];
  const byCreated = (
    a: { createdAt: string; cycleInstanceId: string },
    b: { createdAt: string; cycleInstanceId: string },
  ) =>
    a.createdAt.localeCompare(b.createdAt) ||
    a.cycleInstanceId.localeCompare(b.cycleInstanceId);

  const done = lifecycle.terminalCycles
    .filter((c) => c.status === "completed")
    .sort(byCreated)
    .map((c) => ({ id: c.cycleInstanceId, state: "done" as const }));
  const current = [lifecycle.activeCycle, ...lifecycle.pausedCycles]
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    .sort(byCreated)
    .map((c) => ({ id: c.cycleInstanceId, state: "current" as const }));
  const proposed = [...lifecycle.candidateCycles]
    .sort(byCreated)
    .map((c) => ({ id: c.cycleInstanceId, state: "proposed" as const }));

  const all = [...done, ...current, ...proposed];
  const windowed = all.slice(-MAX_TRAJECTORY_NODES);
  const offset = all.length - windowed.length;
  return windowed.map((node, index) => ({
    key: node.id,
    ordinal: offset + index + 1,
    state: node.state,
    label:
      node.state === "done"
        ? "Terminé"
        : node.state === "current"
          ? "En cours"
          : "Proposé",
  }));
}

export type AttentionItem = {
  key: "decision" | "reserve";
  headline: string;
  detail: string;
};

/** « Attention » — pending decision on the active proposal + open reservations. */
export function deriveAttentionItems(input: {
  decisionPending: boolean;
  lifecycle: PilotLifecycleProjection | null;
  /** Active Work Recommendations awaiting Pilot disposition (P3 attention). */
  pendingWorkRecommendationCount?: number;
}): AttentionItem[] {
  const items: AttentionItem[] = [];
  const pendingWork = input.pendingWorkRecommendationCount ?? 0;
  if (input.decisionPending || pendingWork > 0) {
    items.push({
      key: "decision",
      headline: "1 décision à examiner",
      detail: input.decisionPending
        ? "Une proposition attend votre décision dans la conversation."
        : "Une recommandation attend votre décision dans la conversation.",
    });
  }
  const summary = input.lifecycle?.reservationSummary;
  const active = summary?.activeCount ?? 0;
  if (active > 0) {
    const mustResolve = summary?.mustResolveCount ?? 0;
    items.push({
      key: "reserve",
      headline: `${active} réserve${active > 1 ? "s" : ""} ouverte${active > 1 ? "s" : ""}`,
      detail:
        mustResolve > 0
          ? `${mustResolve} à lever avant la clôture du cycle`
          : "Aucune ne bloque la clôture à ce stade",
    });
  }
  return items;
}

export type CycleSummary = {
  /** Catalog cycle type label (Journal / context — never invent « P3 · »). */
  label: string;
  /**
   * Header work chip. When shortReference is set (e.g. « P3 »), composes
   * `{shortReference} · {catalogLabel}` from durable project facts.
   */
  workLabel: string;
  statusLabel: string | null;
};

/**
 * Cycle labels from lifecycle projection (+ optional project shortReference).
 */
export function deriveCycleSummary(
  lifecycle: PilotLifecycleProjection | null,
  options?: { shortReference?: string | null },
): CycleSummary {
  if (!lifecycle) {
    return {
      label: "Lecture du cycle…",
      workLabel: "Lecture du cycle…",
      statusLabel: null,
    };
  }
  if (!lifecycle.selectedCycleInstanceId) {
    return {
      label: "Aucun cycle actif",
      workLabel: "Aucun cycle actif",
      statusLabel: null,
    };
  }
  const catalog =
    lifecycle.selectedCycleCatalogLabel?.trim() || "Cycle rattaché au projet";
  const ref = options?.shortReference?.trim() || "";
  const workLabel =
    ref.length > 0 && !catalog.startsWith(`${ref} ·`)
      ? `${ref} · ${catalog}`
      : catalog;
  return {
    label: catalog,
    workLabel,
    statusLabel: lifecycleStatusBadge(lifecycle).label,
  };
}
