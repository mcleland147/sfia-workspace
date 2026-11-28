/**
 * Deterministic métier restitution after a governed D5/D6 conversational effect.
 * Facts come from Studio (pilotageEffect); Nora prior prose may be adjusted, never invented as authority.
 */

export type PilotageEffectView = {
  attempted?: boolean;
  intentClarity?: string | null;
  operation?: string | null;
  status?: string | null;
  reasonCode?: string | null;
  reason?: string | null;
  clarification?: string | null;
  decisionId?: string | null;
  effects?: Array<{ effectKind?: string; targetRef?: string }> | null;
} | null;

const PRE_EFFECT_PENDING =
  /l['']ouverture effective reste à confirmer par Studio\.?/gi;

function operationLabel(op: string | null | undefined): string {
  switch (op) {
    case "OPEN_CYCLE":
      return "ouverture de cycle";
    case "CLOSE_CYCLE":
      return "clôture de cycle";
    case "TRANSITION_CYCLE":
      return "transition de cycle";
    case "RETAIN_TRAJECTORY":
      return "rétention de trajectoire";
    case "PROPOSE_TRAJECTORY":
      return "proposition de trajectoire";
    case "RECORD_DECISION":
      return "enregistrement de décision";
    case "REVISE_DECISION":
      return "révision de décision";
    default:
      return op ? `opération ${op}` : "opération gouvernée";
  }
}

function stripPreEffectHedges(text: string): string {
  return text
    .replace(PRE_EFFECT_PENDING, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/**
 * Natural métier restitution (MP-11 / Morris 2026-11-27).
 * Confirm only after Studio owner outcome; avoid technical « Résultat Studio » blocks.
 */
function effectSplit(effect: NonNullable<PilotageEffectView>): {
  conversation: string[];
  activity: string[];
} {
  const op = operationLabel(effect.operation);
  const status = (effect.status ?? "").toUpperCase();
  const reason = (effect.reason ?? effect.clarification ?? "").trim();

  switch (status) {
    case "APPLIED":
      if (effect.operation === "OPEN_CYCLE") {
        const lines = [
          `Le cycle demandé est maintenant ouvert (${op}).`,
          "La guidance spécialisée associée est disponible sur Trajectoire / CKI. On peut enchaîner sur le fond du travail.",
        ];
        return { conversation: lines, activity: [lines[0]!] };
      }
      if (effect.operation === "CLOSE_CYCLE") {
        const lines = [
          `Le cycle est maintenant clos.`,
          "L'historique et la trajectoire conservent cet état. Dis-moi si tu veux ouvrir un cycle suivant.",
        ];
        return { conversation: lines, activity: [lines[0]!] };
      }
      if (effect.operation === "RETAIN_TRAJECTORY") {
        const lines = [
          "L'orientation de trajectoire est retenue.",
          "L'ouverture d'un cycle reste une décision distincte lorsque tu seras prêt.",
        ];
        return { conversation: lines, activity: [lines[0]!] };
      }
      if (effect.operation === "RECORD_DECISION" || effect.operation === "REVISE_DECISION") {
        const journal = effect.decisionId
          ? "Elle figure désormais dans le Journal (Décisions) avec sa portée et sa provenance."
          : "Elle figure désormais dans le Journal avec sa portée et sa provenance.";
        return {
          conversation: ["La décision a bien été enregistrée."],
          activity: ["La décision a bien été enregistrée.", journal],
        };
      }
      return {
        conversation: [`C'est fait : la ${op} a bien été prise en compte.`],
        activity: [
          `C'est fait : la ${op} a bien été prise en compte.`,
          "L'état du projet a été mis à jour en conséquence.",
        ],
      };
    case "ALREADY_APPLIED": {
      const lines = [
        `Cette ${op} était déjà en place — aucun nouvel effet n'a été créé.`,
      ];
      return { conversation: lines, activity: lines };
    }
    case "REJECTED": {
      const lines = [
        `Je n'ai pas pu appliquer la ${op}.`,
        reason
          ? `Motif : ${reason}.`
          : "Le contrôle d'autorité ou d'état n'a pas autorisé l'effet.",
        // Per-effect wording only — never deny sibling outcomes on the same turn (MP-09).
        `Cet effet (${op}) n'a pas créé de cycle ni de décision. Tu peux reformuler ou préciser le type de cycle reconnu.`,
      ];
      return { conversation: lines, activity: lines };
    }
    case "CONFLICT": {
      const lines = [
        `Il y a un conflit d'état sur la ${op}.`,
        reason ? `Détail : ${reason}.` : "Recharge l'état du projet puis réessaie si pertinent.",
      ];
      return { conversation: lines, activity: lines };
    }
    case "UNKNOWN": {
      const lines = [
        `L'issue de la ${op} est encore en vérification.`,
        "Je ne confirme ni le succès ni le refus tant que Studio n'a pas consolidé l'état.",
      ];
      return { conversation: lines, activity: lines };
    }
    default: {
      if (effect.intentClarity === "AMBIGUOUS") {
        const lines = [
          "Aucune commande n'a été exécutée — intention ambiguë.",
          reason ? `Précision utile : ${reason}.` : "Peux-tu préciser le cycle et l'acte souhaités ?",
        ];
        return { conversation: lines, activity: lines };
      }
      if (effect.attempted === false) {
        return { conversation: [], activity: [] };
      }
      const lines = [
        `Statut « ${status || "indéterminé"} » pour la ${op}.`,
        reason ? `Information : ${reason}.` : "",
      ].filter(Boolean);
      return { conversation: lines, activity: lines };
    }
  }
}

export type PilotageActivityFact = {
  summary: string;
  status: "COMPLETED" | "FAILED" | "LIMITED" | "UNKNOWN";
  /** Present only when Studio returned a decision id. Not a FinOps correlation. */
  ownerRef: string | null;
};

export function pilotageEffectActivityFacts(
  effects: Array<PilotageEffectView | null | undefined>,
): PilotageActivityFact[] {
  const out: PilotageActivityFact[] = [];
  effects.forEach((effect) => {
    if (!effect?.attempted) return;
    const split = effectSplit(effect);
    const st = (effect.status ?? "UNKNOWN").toUpperCase();
    const status: PilotageActivityFact["status"] =
      st === "APPLIED"
        ? "COMPLETED"
        : st === "REJECTED"
          ? "FAILED"
          : st === "CONFLICT" || st === "ALREADY_APPLIED"
            ? "LIMITED"
            : "UNKNOWN";
    const ownerRef = effect.decisionId?.trim() || null;
    for (const summary of split.activity) {
      out.push({ summary, status, ownerRef });
    }
  });
  return out;
}

/**
 * Compose final assistant text: keep useful prior narrative, remove contradictory
 * pre-effect hedges, append durable Studio outcome in métier language.
 */
export function composePilotageEffectRestitution(input: {
  priorContent: string;
  effect?: PilotageEffectView;
  /** MP-09 — every binding outcome on the turn, in dependsOn order. */
  effects?: PilotageEffectView[] | null;
}): string {
  const prior = stripPreEffectHedges(input.priorContent ?? "");
  const ordered =
    input.effects?.filter((e): e is NonNullable<PilotageEffectView> => Boolean(e?.attempted)) ??
    (input.effect?.attempted ? [input.effect] : []);
  if (ordered.length === 0) {
    return prior;
  }
  const sections: string[] = [];
  for (const effect of ordered) {
    const facts = effectSplit(effect).conversation;
    if (facts.length > 0) {
      sections.push(facts.join("\n\n"));
    }
  }
  if (sections.length === 0) return prior;
  const block = ["", sections.join("\n\n")].join("\n\n");
  if (!prior.trim()) return sections.join("\n\n");
  return `${prior.trimEnd()}\n${block}`;
}

/** True when a persisted assistant message is a raw technical mission dump (not métier Nora). */
export function isTechnicalMissionAssistantContent(content: string, generationId?: string | null): boolean {
  // Provenance hint alone is insufficient — a mission-continue may already carry métier D4 ACK.
  // E08 — publication effect restitution is Nora métier voice; do not mask it as technical dump.
  if (
    /Résultat d'enregistrement|Nouvelle version disponible|encore incertain/i.test(content) ||
    /a été publié|n'a pas été effectuée|Aucune publication n'a (été|été)|écritures GitHub ne sont pas disponibles|encore en vérification/i.test(
      content,
    )
  ) {
    return false;
  }
  if (/^### Suite de mission/m.test(content) && /projectId=|clientIntentKey=|status=COMPLETED/.test(content)) {
    return true;
  }
  if (/^### Suite de mission \(projection D3/m.test(content)) return true;
  if (/^### Restitution de mission \(faits propriétaires\)/m.test(content)) return true;
  const gen = (generationId ?? "").trim();
  if (
    gen.startsWith("mission-continue") &&
    /projectId=proj_|clientIntentKey=|status=COMPLETED|status=AWAITING_/.test(content)
  ) {
    return true;
  }
  return false;
}

/** Métier projection for historical technical mission messages (READ path — no DB rewrite). */
export function projectMetierMissionMessage(content: string): string {
  if (/Projet créé \(projectId=/.test(content) || /projectId=proj_/.test(content)) {
    return (
      "Le projet a bien été créé. Vous pouvez poursuivre dans Travail, consulter la Trajectoire " +
      "et décider avec Nora de l'ouverture du premier cycle lorsque vous serez prêt."
    );
  }
  if (/AWAITING_PILOT_ACT/.test(content)) {
    return "Une action explicite de votre part est encore requise pour poursuivre (par exemple créer le projet).";
  }
  if (/AWAITING_PILOT_AUTH/.test(content)) {
    return "Une autorisation de votre part est requise avant publication Git.";
  }
  if (/AWAITING_CLARIFICATION/.test(content)) {
    return "Une précision de votre part est requise avant de poursuivre la préparation.";
  }
  if (/RESTITUTION_PENDING/.test(content)) {
    return "Les effets déjà enregistrés sont conservés ; la restitution détaillée reste en attente.";
  }
  return "Suite de mission enregistrée par Studio — détails techniques masqués dans le fil métier.";
}
