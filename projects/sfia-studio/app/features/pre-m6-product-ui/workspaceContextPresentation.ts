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
  /** Header chip — short status (« À jour » / warn). */
  label: string;
  detail: string;
  tone: CurrentnessTone;
  /**
   * Context-rail « Mise à jour » primary line when distinct from the chip
   * (Figma 46:2 « Vérifié il y a … »). Falls back to `label` when omitted.
   */
  contextLabel?: string;
};

function formatVerifiedRelativeFr(iso: string | null | undefined): string | null {
  if (!iso) return null;
  const ts = Date.parse(iso);
  if (Number.isNaN(ts)) return null;
  const minutes = Math.floor((Date.now() - ts) / 60_000);
  if (minutes < 1) return "Vérifié à l’instant";
  if (minutes < 60) return `Vérifié il y a ${minutes} min`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `Vérifié il y a ${hours} h`;
  const days = Math.floor(hours / 24);
  if (days === 1) return "Vérifié hier";
  return `Vérifié il y a ${days} j`;
}

/** Honest currentness: « À jour » only when durable state + transcript are readable. */
export function presentCurrentness(input: {
  transcriptAvailability: TranscriptAvailability;
  stateVersion: number;
  /** Durable living-state / project update timestamp when available. */
  updatedAt?: string | null;
}): CurrentnessPresentation {
  const verified = formatVerifiedRelativeFr(input.updatedAt);
  const versionDetail = `État enregistré · v${input.stateVersion}`;
  switch (input.transcriptAvailability) {
    case "unavailable":
      return {
        label: "À vérifier",
        detail: `${versionDetail} · conversation à relire`,
        tone: "warn",
      };
    case "pending":
      return {
        label: "Lecture en cours",
        detail: `${versionDetail} · conversation en cours de lecture`,
        tone: "neutral",
      };
    default:
      // Header chip stays « À jour »; context rail may show verified relative.
      return {
        label: "À jour",
        detail: verified ? "À jour" : versionDetail,
        tone: "ok",
        ...(verified ? { contextLabel: verified } : {}),
      };
  }
}

export type TrajectoryNodeState = "done" | "current" | "proposed";

export type TrajectoryNode = {
  key: string;
  ordinal: number;
  state: TrajectoryNodeState;
  label: string;
  /**
   * Strip marker (e.g. « C1 », « P3 »). When the project shortReference is a
   * P-series marker (P3 docs: C1→P2→P3→P4 representative example), refs are
   * anchored on the current node’s shortReference; otherwise « C{ordinal} ».
   */
  ref: string;
};

const MAX_TRAJECTORY_NODES = 5;

function trajectoryRefForIndex(input: {
  index: number;
  currentIndex: number;
  ordinal: number;
  state: TrajectoryNodeState;
  activeShortReference: string | null;
}): string {
  const ref = input.activeShortReference?.trim() || "";
  const match = /^P(\d+)$/i.exec(ref);
  if (!match || input.currentIndex < 0) {
    return `C${input.ordinal}`;
  }
  if (input.state === "current") return `P${match[1]}`;
  const series = Number(match[1]) + (input.index - input.currentIndex);
  // P3 representative strip: the first series step reads « C1 », then P2…Pn.
  if (series === 1) return "C1";
  if (series > 1) return `P${series}`;
  return `C${input.ordinal}`;
}

/**
 * Cycle strip « Terminé / En cours / Proposé » from the durable lifecycle
 * projection (cycle instances). Superseded and cancelled cycles are omitted.
 */
export function deriveTrajectoryNodes(
  lifecycle: PilotLifecycleProjection | null,
  options?: { shortReference?: string | null },
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
  const activeShortReference = options?.shortReference?.trim() || null;
  const currentIndex = windowed.findIndex((n) => n.state === "current");
  return windowed.map((node, index) => {
    const ordinal = offset + index + 1;
    return {
      key: node.id,
      ordinal,
      state: node.state,
      label:
        node.state === "done"
          ? "Terminé"
          : node.state === "current"
            ? "En cours"
            : "Proposé",
      ref: trajectoryRefForIndex({
        index,
        currentIndex,
        ordinal,
        state: node.state,
        activeShortReference,
      }),
    };
  });
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
  /** Honest detail from the leading pending Work Recommendation statement. */
  pendingWorkRecommendationDetail?: string | null;
  /** Honest detail from the leading open Reservation statement. */
  openReservationDetail?: string | null;
}): AttentionItem[] {
  const items: AttentionItem[] = [];
  const pendingWork = input.pendingWorkRecommendationCount ?? 0;
  if (input.decisionPending || pendingWork > 0) {
    const fromReco = input.pendingWorkRecommendationDetail?.trim() || "";
    items.push({
      key: "decision",
      headline: "1 décision à examiner",
      detail: fromReco
        ? fromReco
        : input.decisionPending
          ? "Une proposition attend votre décision dans la conversation."
          : "Une recommandation attend votre décision dans la conversation.",
    });
  }
  const summary = input.lifecycle?.reservationSummary;
  const active = summary?.activeCount ?? 0;
  if (active > 0) {
    const mustResolve = summary?.mustResolveCount ?? 0;
    const fromReserve = input.openReservationDetail?.trim() || "";
    items.push({
      key: "reserve",
      headline: `${active} réserve${active > 1 ? "s" : ""} ouverte${active > 1 ? "s" : ""}`,
      detail: fromReserve
        ? fromReserve
        : mustResolve > 0
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
  /**
   * Context-rail Cycle line. When a Journal current topic exists with a
   * shortReference, composes `{ref} · {topic} / interaction` (P3 DP01
   * context framing). Otherwise falls back to workLabel.
   */
  contextLabel: string;
  statusLabel: string | null;
};

/**
 * Cycle labels from lifecycle projection (+ optional project shortReference
 * and Journal current-topic title for context framing).
 */
export function deriveCycleSummary(
  lifecycle: PilotLifecycleProjection | null,
  options?: {
    shortReference?: string | null;
    /** Journal current-topic title (e.g. « Espace projet »). */
    focusTopic?: string | null;
  },
): CycleSummary {
  if (!lifecycle) {
    return {
      label: "Lecture du cycle…",
      workLabel: "Lecture du cycle…",
      contextLabel: "Lecture du cycle…",
      statusLabel: null,
    };
  }
  if (!lifecycle.selectedCycleInstanceId) {
    return {
      label: "Aucun cycle actif",
      workLabel: "Aucun cycle actif",
      contextLabel: "Aucun cycle actif",
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
  const topic = options?.focusTopic?.trim() || "";
  const contextLabel =
    ref.length > 0 && topic.length > 0
      ? `${ref} · ${topic} / interaction`
      : workLabel;
  return {
    label: catalog,
    workLabel,
    contextLabel,
    statusLabel: lifecycleStatusBadge(lifecycle).label,
  };
}
