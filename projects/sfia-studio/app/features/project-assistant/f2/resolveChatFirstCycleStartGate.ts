/**
 * P6-HQA-F01 — chat-first cycle START gate (bounded).
 *
 * When the Pilot explicitly intends to start a cycle already in play:
 * - do NOT mint another F2 LEGACY_UNBOUND createCycle;
 * - reuse startPreparedTrajectoryCycle when a unique COMPLETE prepared cycle exists;
 * - otherwise fail closed with an honest blocker (no silent selection, no invented HD).
 *
 * Conversation agreement ≠ HumanDecision ≠ Confirmation ≠ activation.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  classifyTrajectoryBinding,
  startPreparedTrajectoryCycle,
  type CycleInstance,
} from "@/lib/oa/cycle";
import { getCycleTypeById } from "@/lib/oa/cycle/domain/cycleTypeCatalog";
import type { PilotDecisionCandidate } from "./types";
import {
  interpretPilotNarrativeStance,
  type PilotNarrativeStance,
} from "./composeF2PilotFacingNarrative";

export type ChatFirstStartSituation =
  | { readonly kind: "already_active"; readonly activeCycleInstanceId: string }
  | { readonly kind: "unique_prepared"; readonly cycleInstanceId: string }
  | { readonly kind: "ambiguous_prepared"; readonly count: number }
  | { readonly kind: "legacy_unbound_only"; readonly count: number }
  | { readonly kind: "no_prepared" };

export type ChatFirstCycleStartGateResult =
  | {
      readonly kind: "started";
      readonly cycleInstanceId: string;
      readonly activeCycleInstanceId: string;
      readonly catalogLabel: string | null;
      readonly lpsVersionAfter: number | undefined;
      readonly message: string;
    }
  | {
      readonly kind: "already_active";
      readonly activeCycleInstanceId: string;
      readonly message: string;
    }
  | {
      readonly kind: "blocked";
      readonly code: string;
      readonly message: string;
    };

function isPreparedStatus(status: CycleInstance["status"]): boolean {
  return status === "proposed" || status === "acknowledged";
}

/**
 * Detect explicit chat start intent for the subject cycle.
 *
 * P6-HQA-F01 integrated: stance is authoritative and fail-closed.
 * REFUSE / DEFER / QUESTION / AMBIGUOUS / accept_recommendation never
 * fall through to a permissive lexical START probe — that path previously
 * could promote "Je confirme… mais je refuse" to START.
 */
export function isChatFirstCycleStartIntent(input: {
  readonly userContent: string;
  readonly cycleLabel: string | null | undefined;
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
}): boolean {
  return resolveChatFirstStartRouting(input).kind === "attempt_start";
}

/**
 * Start-adjacent utterance that must not mint a new F2 createCycle when
 * stance is not accept_start (refuse / defer / question / ambiguous confirm).
 * Neutral propose paths remain eligible for createCycle.
 */
export function resolveChatFirstStartRouting(input: {
  readonly userContent: string;
  readonly cycleLabel: string | null | undefined;
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
}):
  | { readonly kind: "attempt_start"; readonly stance: PilotNarrativeStance }
  | {
      readonly kind: "suppress_mint";
      readonly stance: PilotNarrativeStance;
      readonly code: string;
      readonly message: string;
    }
  | { readonly kind: "not_start_path"; readonly stance: PilotNarrativeStance } {
  const stance = interpretPilotNarrativeStance({
    userContent: input.userContent,
    cycleLabel: input.cycleLabel,
    pilotDecisionCandidate: input.pilotDecisionCandidate,
  });
  if (stance.kind === "accept_start") {
    return { kind: "attempt_start", stance };
  }
  const text = (input.userContent ?? "").trim();
  const confirmish =
    /\b(confirm\w*|j['’]?accepte\s+de\s+(d[eé]marr|lancer|activer)|d[eé]marrage\s+effectif)\b/i.test(
      text,
    );
  const startTopic =
    /\b(d[eé]marr\w*|lanc\w*|activ(?:er|ation))\b/i.test(text);
  const legitimateNewQualification =
    /\b(pr[eé]pare|qualifie|propose|nouveau\s+cycle|nouvelle?\s+qualification)\b/i.test(
      text,
    ) && !confirmish;
  const hypotheticStart =
    startTopic &&
    /\b(peut[- ]?être|éventuellement|hypoth[eè]se|si\s+on|on\s+pourrait|pas\s+s[uû]r)\b/i.test(
      text,
    );
  // Ambiguous / hypothetical start discussion must not mint a new CycleInstance.
  // Legitimate new qualification ("Prépare un nouveau cycle…") stays open.
  const ambiguousStartDiscussion =
    stance.kind === "ambiguous" &&
    startTopic &&
    !legitimateNewQualification &&
    (confirmish || hypotheticStart || !/\b(pr[eé]pare|qualifie|propose)\b/i.test(text));
  const suppress =
    stance.kind === "refuse_start" ||
    stance.kind === "refuse_proposal" ||
    stance.kind === "defer_start" ||
    stance.kind === "question_status" ||
    stance.kind === "confirm_other_subject" ||
    (stance.kind === "ambiguous" && confirmish) ||
    ambiguousStartDiscussion;
  if (!suppress) {
    return { kind: "not_start_path", stance };
  }
  const code =
    stance.kind === "refuse_start" || stance.kind === "refuse_proposal"
      ? "START_REFUSED_BY_PILOT"
      : stance.kind === "defer_start"
        ? "START_DEFERRED_BY_PILOT"
        : stance.kind === "question_status"
          ? "START_QUESTION_NOT_ACTIVATION"
          : "START_INTENT_AMBIGUOUS";
  const cycle = (input.cycleLabel ?? "").trim()
    ? `« ${(input.cycleLabel ?? "").trim()} »`
    : "ce cycle";
  const message =
    code === "START_REFUSED_BY_PILOT"
      ? `Votre refus est pris en compte : aucun démarrage de ${cycle} n'a été engagé et aucun nouveau cycle n'a été créé.`
      : code === "START_DEFERRED_BY_PILOT"
        ? `Le démarrage de ${cycle} est reporté : aucun démarrage n'a été engagé et aucun nouveau cycle n'a été créé.`
        : code === "START_QUESTION_NOT_ACTIVATION"
          ? `Votre question ne démarre pas ${cycle}. Aucun nouveau cycle n'a été créé.`
          : `L'intention de démarrage pour ${cycle} n'est pas suffisamment claire. Aucun démarrage n'a été engagé et aucun nouveau cycle n'a été créé.`;
  return { kind: "suppress_mint", stance, code, message };
}

/**
 * Pure Product-shape classification — no mutation.
 * History/conversation is not used; only LPS + CycleInstance inventory.
 */
export function classifyChatFirstStartSituation(input: {
  readonly activeCycleInstanceId: string | null | undefined;
  readonly cycles: readonly CycleInstance[];
  readonly targetCycleTypeId: string;
}): ChatFirstStartSituation {
  const active = (input.activeCycleInstanceId ?? "").trim();
  if (active) {
    return { kind: "already_active", activeCycleInstanceId: active };
  }

  const target = input.targetCycleTypeId;
  const preparedComplete = input.cycles.filter(
    (c) =>
      c.cycleTypeId === target &&
      isPreparedStatus(c.status) &&
      classifyTrajectoryBinding(c) === "COMPLETE_TRAJECTORY_BOUND",
  );
  if (preparedComplete.length > 1) {
    return { kind: "ambiguous_prepared", count: preparedComplete.length };
  }
  if (preparedComplete.length === 1) {
    return {
      kind: "unique_prepared",
      cycleInstanceId: preparedComplete[0]!.cycleInstanceId,
    };
  }

  const legacy = input.cycles.filter(
    (c) =>
      c.cycleTypeId === target &&
      isPreparedStatus(c.status) &&
      classifyTrajectoryBinding(c) === "LEGACY_UNBOUND",
  );
  if (legacy.length > 0) {
    return { kind: "legacy_unbound_only", count: legacy.length };
  }
  return { kind: "no_prepared" };
}

export function chatFirstStartBlockMessage(input: {
  readonly code: string;
  readonly cycleLabel: string;
  readonly legacyCount?: number;
  readonly preparedCount?: number;
}): string {
  const cycle = input.cycleLabel.trim()
    ? `« ${input.cycleLabel.trim()} »`
    : "ce cycle";
  switch (input.code) {
    case "ACTIVE_CYCLE_PRESENT":
      return `Un cycle est déjà actif sur le projet. Aucun nouveau cycle n'a été créé et aucun second démarrage n'a été engagé.`;
    case "PREPARED_CYCLE_AMBIGUOUS":
      return `Plusieurs cycles ${cycle} préparés (liés à la trajectoire) sont disponibles (${input.preparedCount ?? "plusieurs"}). Studio ne sélectionne pas automatiquement lequel démarrer. Aucun nouveau cycle n'a été créé. Précisez le cycle dans Trajectoire, puis démarrez.`;
    case "LEGACY_UNBOUND_NOT_STARTABLE_VIA_CHAT":
      return `Des cycles ${cycle} existent déjà (${input.legacyCount ?? "plusieurs"}) mais ne sont pas liés à une trajectoire préparée — le démarrage Chat-first gouverné ne s'applique pas. Aucun cycle supplémentaire n'a été créé. Utilisez Trajectoire pour préparer puis démarrer un cycle lié, sans nouvelle qualification automatique.`;
    case "PREPARED_CYCLE_MISSING":
    case "NO_PREPARED_CYCLE":
      return `Aucun cycle ${cycle} préparé et lié à la trajectoire n'est disponible au démarrage. Votre confirmation en conversation n'active rien à elle seule. Aucun nouveau cycle n'a été créé. Préparez d'abord le cycle depuis Trajectoire (après décision de trajectoire si requise), puis démarrez.`;
    case "AUTHORITY_DENIED":
    case "LOCAL_AUTHORITY_DISABLED":
      return `Le démarrage de ${cycle} est refusé : autorité Pilote indisponible pour START. Aucun nouveau cycle n'a été créé. L'état vivant du projet reste inchangé.`;
    case "CYCLE_DECISION_REQUIRED":
      return `Le démarrage de ${cycle} nécessite encore une décision Pilote structurée sur la trajectoire. Aucun nouveau cycle n'a été créé et aucune décision n'a été inventée depuis la conversation.`;
    default:
      return `Le démarrage de ${cycle} n'a pas pu aboutir (${input.code}). Aucun nouveau cycle n'a été créé. Vérifiez Trajectoire / préconditions START — l'état vivant du projet n'est pas déclaré actif sans relecture Product.`;
  }
}

export function chatFirstStartSuccessMessage(input: {
  readonly cycleLabel: string | null;
  readonly cycleInstanceId: string;
}): string {
  const label = (input.cycleLabel ?? "").trim();
  const cycle = label ? `« ${label} »` : "le cycle";
  return `Le cycle ${cycle} est maintenant actif sur le projet (${input.cycleInstanceId}). L'état vivant a été relu après démarrage. Aucune exécution n'a été lancée par ce tour.`;
}

/**
 * Resolve chat-first start intent against Product inventory.
 * May invoke startPreparedTrajectoryCycle (existing governed START) once.
 * Never creates CycleInstances. Never invents HumanDecision.
 */
export async function resolveChatFirstCycleStartGate(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly targetCycleTypeId: string;
  readonly cycleLabel: string;
  readonly forceLocalAuthority?: boolean;
}): Promise<ChatFirstCycleStartGateResult> {
  const lps = await input.oa.projectServices.getCurrentLivingProjectState.execute(
    { projectId: input.projectId },
  );
  if (!lps.ok) {
    return {
      kind: "blocked",
      code: "LPS_UNAVAILABLE",
      message: chatFirstStartBlockMessage({
        code: "LPS_UNAVAILABLE",
        cycleLabel: input.cycleLabel,
      }),
    };
  }

  let cycles: CycleInstance[] = [];
  try {
    cycles = await input.oa.cycleServices.cycles.listByProject(input.projectId);
  } catch {
    return {
      kind: "blocked",
      code: "CYCLES_UNAVAILABLE",
      message: chatFirstStartBlockMessage({
        code: "CYCLES_UNAVAILABLE",
        cycleLabel: input.cycleLabel,
      }),
    };
  }

  const situation = classifyChatFirstStartSituation({
    activeCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
    cycles,
    targetCycleTypeId: input.targetCycleTypeId,
  });

  if (situation.kind === "already_active") {
    return {
      kind: "already_active",
      activeCycleInstanceId: situation.activeCycleInstanceId,
      message: chatFirstStartBlockMessage({
        code: "ACTIVE_CYCLE_PRESENT",
        cycleLabel: input.cycleLabel,
      }),
    };
  }

  if (situation.kind === "ambiguous_prepared") {
    return {
      kind: "blocked",
      code: "PREPARED_CYCLE_AMBIGUOUS",
      message: chatFirstStartBlockMessage({
        code: "PREPARED_CYCLE_AMBIGUOUS",
        cycleLabel: input.cycleLabel,
        preparedCount: situation.count,
      }),
    };
  }

  if (situation.kind === "legacy_unbound_only") {
    return {
      kind: "blocked",
      code: "LEGACY_UNBOUND_NOT_STARTABLE_VIA_CHAT",
      message: chatFirstStartBlockMessage({
        code: "LEGACY_UNBOUND_NOT_STARTABLE_VIA_CHAT",
        cycleLabel: input.cycleLabel,
        legacyCount: situation.count,
      }),
    };
  }

  if (situation.kind === "no_prepared") {
    return {
      kind: "blocked",
      code: "NO_PREPARED_CYCLE",
      message: chatFirstStartBlockMessage({
        code: "NO_PREPARED_CYCLE",
        cycleLabel: input.cycleLabel,
      }),
    };
  }

  // unique_prepared — reuse existing START facade (no F2 createCycle).
  const started = await startPreparedTrajectoryCycle({
    oa: input.oa,
    projectId: input.projectId,
    cycleInstanceId: situation.cycleInstanceId,
    forceLocalAuthority: input.forceLocalAuthority,
  });

  if (!started.ok) {
    return {
      kind: "blocked",
      code: started.code,
      message: chatFirstStartBlockMessage({
        code: started.code,
        cycleLabel: input.cycleLabel,
      }),
    };
  }

  // Re-read LPS before claiming activation.
  const lpsAfter =
    await input.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: input.projectId,
    });
  const activeId = lpsAfter.ok
    ? lpsAfter.livingProjectState.activeCycleInstanceId
    : null;
  if (!activeId || activeId !== started.activeCycleInstanceId) {
    return {
      kind: "blocked",
      code: "LPS_ACTIVE_MISMATCH_AFTER_START",
      message: chatFirstStartBlockMessage({
        code: "LPS_ACTIVE_MISMATCH_AFTER_START",
        cycleLabel: input.cycleLabel,
      }),
    };
  }

  const entry = getCycleTypeById(started.cycle.cycleTypeId);
  return {
    kind: "started",
    cycleInstanceId: started.cycle.cycleInstanceId,
    activeCycleInstanceId: activeId,
    catalogLabel: started.catalogLabel ?? entry?.label ?? null,
    lpsVersionAfter: started.lpsVersionAfter,
    message: chatFirstStartSuccessMessage({
      cycleLabel: input.cycleLabel || started.catalogLabel,
      cycleInstanceId: started.cycle.cycleInstanceId,
    }),
  };
}
