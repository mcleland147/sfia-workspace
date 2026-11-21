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

function effectFactLines(effect: NonNullable<PilotageEffectView>): string[] {
  const op = operationLabel(effect.operation);
  const status = (effect.status ?? "").toUpperCase();
  const reason = (effect.reason ?? effect.clarification ?? "").trim();

  switch (status) {
    case "APPLIED":
      return [
        `**Résultat Studio :** la ${op} a été **appliquée**.`,
        effect.operation === "OPEN_CYCLE"
          ? "Le cycle demandé est désormais actif ; la guidance spécialisée associée sera disponible sur Trajectoire / CKI."
          : effect.operation === "RETAIN_TRAJECTORY"
            ? "L'orientation est retenue. L'ouverture d'un cycle reste une décision distincte."
            : "L'état du projet a été mis à jour en conséquence.",
      ];
    case "ALREADY_APPLIED":
      return [
        `**Résultat Studio :** cette ${op} était **déjà appliquée** — aucun nouvel effet n'a été créé.`,
      ];
    case "REJECTED":
      return [
        `**Résultat Studio :** la ${op} a été **refusée**.`,
        reason
          ? `Motif : ${reason}.`
          : "Le contrôle d'autorité ou d'état n'a pas autorisé l'effet.",
        "Aucun cycle ni décision n'a été créé par cette demande. Vous pouvez reformuler ou préciser le type de cycle reconnu.",
      ];
    case "CONFLICT":
      return [
        `**Résultat Studio :** **conflit d'état** sur la ${op}.`,
        reason ? `Détail : ${reason}.` : "Rechargez l'état du projet puis réessayez si pertinent.",
      ];
    case "UNKNOWN":
      return [
        `**Résultat Studio :** l'issue de la ${op} est **encore en vérification**.`,
        "Je ne confirme ni le succès ni le refus définitif tant que Studio n'a pas consolidé l'état.",
      ];
    default:
      if (effect.intentClarity === "AMBIGUOUS") {
        return [
          "**Résultat Studio :** aucune commande n'a été exécutée — intention ambiguë.",
          reason ? `Précision utile : ${reason}.` : "Pouvez-vous préciser le cycle et l'acte souhaités ?",
        ];
      }
      if (effect.attempted === false) {
        return [];
      }
      return [
        `**Résultat Studio :** statut « ${status || "indéterminé"} » pour la ${op}.`,
        reason ? `Information : ${reason}.` : "",
      ].filter(Boolean);
  }
}

/**
 * Compose final assistant text: keep useful prior narrative, remove contradictory
 * pre-effect hedges, append durable Studio outcome in métier language.
 */
export function composePilotageEffectRestitution(input: {
  priorContent: string;
  effect: PilotageEffectView;
}): string {
  const prior = stripPreEffectHedges(input.priorContent ?? "");
  const effect = input.effect;
  if (!effect?.attempted) {
    return prior;
  }
  const facts = effectFactLines(effect);
  if (facts.length === 0) return prior;
  const block = ["", "---", "", ...facts].join("\n");
  if (!prior.trim()) return facts.join("\n");
  return `${prior.trimEnd()}\n${block}`;
}

/** True when a persisted assistant message is a raw technical mission dump (not métier Nora). */
export function isTechnicalMissionAssistantContent(content: string, generationId?: string | null): boolean {
  // Provenance hint alone is insufficient — a mission-continue may already carry métier D4 ACK.
  if (/Résultat d'enregistrement|Nouvelle version disponible|encore incertain/i.test(content)) {
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
