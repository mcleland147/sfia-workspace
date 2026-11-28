/**
 * Deterministic métier restitution for D4 knowledge outcomes (Option B / E3 D.3).
 * Facts come from Studio TurnKnowledgeEffect records — never invent mutations.
 * Primary copy avoids semanticIntentId / reasonCode (detail may keep them elsewhere).
 */

import type { TurnKnowledgeEffect } from "@/domains/conversation/pilotage-effect-aggregate";

function proposalLabel(kind: string | null | undefined): string {
  switch ((kind ?? "").toUpperCase()) {
    case "ACQUIS":
      return "connaissance capitalisée";
    case "OPEN_POINT":
      return "point à clarifier";
    case "SUBJECT":
      return "sujet retenu";
    case "DECISION":
      return "décision enregistrée";
    default:
      return "élément de connaissance";
  }
}

const OPERATIONAL_SUCCESS = new Set(["AVAILABLE", "APPLIED", "CREATED", "UPDATED"]);

function isOperationalKnowledgeSuccess(effect: TurnKnowledgeEffect): boolean {
  const st = (effect.status ?? "UNKNOWN").toUpperCase();
  return Boolean(effect.attempted) && OPERATIONAL_SUCCESS.has(st);
}

/**
 * Natural lines for knowledge outcomes.
 * Success lines are operational confirmations (Journal). They stay available
 * for the activity history and are omitted from the conversational body.
 */
export function knowledgeEffectFactLines(
  effects: TurnKnowledgeEffect[],
): string[] {
  const lines: string[] = [];
  // No hard drop of confirmed outcomes — structure/fold in UI if needed; keep all facts.
  for (const k of effects) {
    const st = (k.status ?? "UNKNOWN").toUpperCase();
    const label = proposalLabel(k.proposalKind);
    const why = (k.reason ?? "").trim().slice(0, 220);

    switch (st) {
      case "AVAILABLE":
      case "APPLIED":
      case "CREATED":
      case "UPDATED":
        if (k.attempted) {
          lines.push(
            k.ownerRef
              ? `La ${label} a bien été enregistrée dans le Journal.`
              : `La ${label} a bien été prise en compte.`,
          );
        }
        break;
      case "NOT_EXECUTED":
      case "SKIPPED":
        lines.push(
          why
            ? `Aucun nouvel enregistrement de ${label} n'a été effectué — ${why}`
            : `Aucun nouvel enregistrement de ${label} n'a été effectué (dépendance ou condition non remplie).`,
        );
        break;
      case "REJECTED":
      case "FORBIDDEN":
        lines.push(
          why
            ? `Je n'ai pas pu enregistrer la ${label} : ${why}`
            : `Je n'ai pas pu enregistrer la ${label} (refus d'autorité ou d'état).`,
        );
        break;
      case "FAILED":
        lines.push(
          why
            ? `L'enregistrement de la ${label} a échoué : ${why}`
            : `L'enregistrement de la ${label} a échoué.`,
        );
        break;
      case "PARTIAL":
        lines.push(
          why
            ? `Résultat partiel pour la ${label} : ${why}`
            : `Résultat partiel pour la ${label} — le travail peut être poursuivi.`,
        );
        break;
      case "UNKNOWN":
        lines.push(
          `L'issue de la ${label} reste à confirmer — je ne déclare ni succès ni absence d'effet.`,
        );
        break;
      default:
        if (!k.attempted) {
          lines.push(
            why
              ? `La ${label} n'a pas été exécutée — ${why}`
              : `La ${label} n'a pas été exécutée.`,
          );
        }
        break;
    }
  }
  return lines;
}

/** Operational confirmations — activity and history, not the conversational body. */
export function knowledgeEffectActivityLines(effects: TurnKnowledgeEffect[]): string[] {
  return knowledgeEffectFactLines(effects.filter(isOperationalKnowledgeSuccess));
}

/** Failures, refusals, partials and UNKNOWN stay in the conversation. */
export function knowledgeEffectConversationLines(effects: TurnKnowledgeEffect[]): string[] {
  return knowledgeEffectFactLines(effects.filter((k) => !isOperationalKnowledgeSuccess(k)));
}

export type KnowledgeActivityFact = {
  summary: string;
  status: "COMPLETED" | "FAILED" | "LIMITED" | "UNKNOWN";
  effectId: string;
  ownerRef: string | null;
};

export function knowledgeEffectActivityFacts(
  effects: TurnKnowledgeEffect[],
): KnowledgeActivityFact[] {
  return effects.flatMap((effect, index) => {
    const lines = knowledgeEffectFactLines([effect]);
    if (lines.length === 0) return [];
    const st = (effect.status ?? "UNKNOWN").toUpperCase();
    const status: KnowledgeActivityFact["status"] = OPERATIONAL_SUCCESS.has(st)
      ? "COMPLETED"
      : st === "FAILED" || st === "REJECTED" || st === "FORBIDDEN"
        ? "FAILED"
        : st === "PARTIAL" || st === "NOT_EXECUTED" || st === "SKIPPED"
          ? "LIMITED"
          : "UNKNOWN";
    const effectId =
      effect.ownerRef?.trim() ||
      `${effect.proposalKind ?? "knowledge"}:${effect.semanticIntentId ?? index}:${st}`;
    return lines.map((summary) => ({
      summary,
      status,
      effectId,
      ownerRef: effect.ownerRef ?? null,
    }));
  });
}

export function composeKnowledgeEffectRestitution(input: {
  priorContent: string;
  effects: TurnKnowledgeEffect[];
}): string {
  const lines = knowledgeEffectConversationLines(input.effects);
  if (lines.length === 0) return input.priorContent;
  const base = input.priorContent.trimEnd();
  return base ? `${base}\n\n${lines.join("\n")}` : lines.join("\n");
}
