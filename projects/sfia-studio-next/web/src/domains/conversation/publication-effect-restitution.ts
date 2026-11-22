/**
 * Terminal métier restitution after a governed publication attempt.
 *
 * Produces ONE coherent pilot-facing state — not a pre-effect narrative
 * contradicted by an appended Studio block.
 * Never invents COMPLETED without owner facts. UNKNOWN stays non-terminal.
 */

export type PublicationEffectOutcome =
  | "COMPLETED"
  | "REFUSED_WRITE_DISABLED"
  | "REFUSED_AUTHORITY"
  | "AWAITING_CLARIFICATION"
  | "PREPARED_AWAITING_AUTH"
  | "DISPATCH_FAILED"
  | "NOT_ATTEMPTED"
  | "UNKNOWN";

export type PublicationEffectView = {
  attempted: boolean;
  outcome: PublicationEffectOutcome;
  reason?: string | null;
  documentTitle?: string | null;
  revisionNumber?: number | null;
  repositoryFullName?: string | null;
  publicationBranch?: string | null;
  /** Documentary path on the remote (owner plan / D8). */
  targetPath?: string | null;
  /** Base branch of the publication plan (usually main) — not the publication branch. */
  baseBranch?: string | null;
  commitSha?: string | null;
  prNumber?: number | null;
  prUrl?: string | null;
  fileUrl?: string | null;
  /** True only when a MERGE D8 fact exists — never inferred from PR_OPEN. */
  mergeObserved?: boolean;
  attemptId?: string | null;
  decisionId?: string | null;
} | null;

const PRE_EFFECT_PUBLICATION_HEDGES = [
  /la publication reste à confirmer par Studio\.?/gi,
  /l['']effet Git reste à confirmer par Studio\.?/gi,
  /reste à confirmer par Studio\.?/gi,
];

/** Premature success / action claims that contradict a non-COMPLETED outcome. */
const PREMATURE_SUCCESS_CLAIMS = [
  /\bje (?:vais )?publie(?:r)?\b[^.!?\n]{0,120}/gi,
  /\bla publication (?:est|a été|sera) (?:effectuée|réalisée|faite|lancée)\b[^.!?\n]{0,80}/gi,
  /\b(?:document|révision)[^.!?\n]{0,80}\b(?:publié|publiée|publiés)\b[^.!?\n]{0,80}/gi,
  /\bj['']ai publié\b[^.!?\n]{0,120}/gi,
  /\bpublication (?:sur|dans) (?:GitHub|le dépôt)\b[^.!?\n]{0,80}/gi,
];

export function stripPublicationPreEffectHedges(text: string): string {
  let out = text ?? "";
  for (const re of PRE_EFFECT_PUBLICATION_HEDGES) {
    out = out.replace(re, "");
  }
  return out.replace(/\n{3,}/g, "\n\n").trim();
}

function stripPrematureSuccessClaims(text: string): string {
  let out = text ?? "";
  for (const re of PREMATURE_SUCCESS_CLAIMS) {
    out = out.replace(re, "");
  }
  return out.replace(/\n{3,}/g, "\n\n").trim();
}

function docLabel(effect: NonNullable<PublicationEffectView>): string {
  const title = effect.documentTitle?.trim();
  if (title && effect.revisionNumber != null) {
    return `« ${title} », révision ${effect.revisionNumber}`;
  }
  if (title) return `« ${title} »`;
  if (effect.revisionNumber != null) return `révision ${effect.revisionNumber}`;
  return "le document";
}

/**
 * Single coherent terminal message for the Pilote.
 * When a Studio outcome is known, prefer a fact-based body and only keep
 * prior prose that does not contradict it (clarifications, caveats).
 */
export function composePublicationEffectRestitution(input: {
  priorContent: string;
  effect: PublicationEffectView;
}): string {
  const effect = input.effect;
  let prior = stripPublicationPreEffectHedges(input.priorContent ?? "");

  if (!effect?.attempted) {
    // Recognized publish intent with no owner attempt: never leave success claims.
    return stripPrematureSuccessClaims(prior);
  }

  // Non-success outcomes must not retain premature success narration.
  if (effect.outcome !== "COMPLETED") {
    prior = stripPrematureSuccessClaims(prior);
  }

  const facts = terminalFacts(effect);
  if (facts.length === 0) return prior;

  // Prefer a single coherent answer: facts first, then optional non-contradicting prior.
  const factBlock = facts.join("\n");
  if (!prior.trim()) return factBlock;

  // Keep prior only when it still adds clarification context (short remainder).
  const priorTrim = prior.trim();
  if (priorTrim.length < 40) {
    return `${factBlock}\n\n${priorTrim}`;
  }
  // Avoid stacking a long contradicted draft: return facts as the terminal voice.
  return factBlock;
}

function terminalFacts(effect: NonNullable<PublicationEffectView>): string[] {
  const reason = (effect.reason ?? "").trim();
  const repo = effect.repositoryFullName?.trim();
  const branch = effect.publicationBranch?.trim();
  const doc = docLabel(effect);

  switch (effect.outcome) {
    case "COMPLETED": {
      const path = effect.targetPath?.trim();
      const sha = effect.commitSha?.trim();
      const prNumber = effect.prNumber;
      const prUrl = effect.prUrl?.trim();
      const fileUrl = effect.fileUrl?.trim();
      const base = effect.baseBranch?.trim();
      const lines = [
        `Le document ${doc} a été publié` +
          (repo ? ` dans le dépôt \`${repo}\`` : "") +
          (branch ? `, sur la branche \`${branch}\`` : "") +
          (path ? `, chemin \`${path}\`` : "") +
          ".",
      ];
      if (sha) {
        lines.push(`Commit : \`${sha}\`.`);
      }
      if (fileUrl) {
        lines.push(`Fichier : ${fileUrl}`);
      } else if (repo && branch && path) {
        lines.push(
          `Fichier (branche) : https://github.com/${repo}/blob/${branch}/${path}`,
        );
      }
      if (prNumber != null) {
        lines.push(
          prUrl
            ? `Demande de fusion : PR #${prNumber} — ${prUrl}`
            : `Demande de fusion : PR #${prNumber}.`,
        );
      }
      if (effect.mergeObserved === true) {
        lines.push(
          base
            ? `Une fusion vers \`${base}\` a été observée (fait Studio).`
            : "Une fusion a été observée (fait Studio).",
        );
      } else {
        lines.push(
          base
            ? `Aucune fusion vers \`${base}\` n'a été effectuée.`
            : "Aucune fusion n'a été effectuée.",
        );
      }
      return lines;
    }
    case "REFUSED_WRITE_DISABLED":
      return [
        "La publication n'a pas été effectuée.",
        "Les écritures GitHub ne sont pas disponibles dans cet environnement.",
        "Aucune branche, commit ni demande de fusion n'a été créé.",
      ];
    case "REFUSED_AUTHORITY":
      return [
        "La publication n'a pas été effectuée.",
        reason
          ? `Motif : ${reason}.`
          : "L'autorisation ou les permissions n'ont pas permis l'effet.",
        "Aucun dépôt distant n'a été modifié.",
      ];
    case "AWAITING_CLARIFICATION":
      return [
        "Aucune publication n'a été lancée.",
        reason
          ? `Précision nécessaire : ${reason}`
          : "Une précision est encore nécessaire avant de poursuivre.",
      ];
    case "PREPARED_AWAITING_AUTH":
      return [
        "Une préparation de publication est disponible.",
        "L'effet distant n'a pas encore été exécuté.",
        reason ? `Détail : ${reason}.` : "",
      ].filter(Boolean);
    case "DISPATCH_FAILED":
      return [
        "La publication n'a pas abouti.",
        reason ? `Motif : ${reason}.` : "Échec au moment de l'effet distant.",
        "Aucun succès n'est affirmé sans preuve Studio.",
      ];
    case "NOT_ATTEMPTED":
      return [
        "Aucune publication n'a été tentée pour cette demande.",
        reason ? `Motif : ${reason}.` : "",
      ].filter(Boolean);
    case "UNKNOWN":
    default:
      return [
        "L'issue de la publication est encore en vérification.",
        "Je ne confirme ni le succès ni le refus définitif tant que Studio n'a pas consolidé l'état.",
        "La mission reste ouverte pour reprise — aucun nouvel effet n'est relancé automatiquement.",
        reason ? `Information : ${reason}.` : "",
      ].filter(Boolean);
  }
}

export function publicationWriteGate():
  | { allowed: true }
  | { allowed: false; reason: string } {
  const mode = (process.env.STUDIO_GITHUB_PROVIDER ?? "scripted").toLowerCase();
  if (mode !== "real") return { allowed: true };
  const flag = (process.env.STUDIO_GITHUB_ALLOW_MUTATIONS ?? "").toLowerCase().trim();
  if (flag !== "documentary") {
    return {
      allowed: false,
      reason:
        "STUDIO_GITHUB_ALLOW_MUTATIONS≠documentary — écritures GitHub REAL désactivées",
    };
  }
  // READ allowlist never implies WRITE — empty WRITE list keeps mutations OFF.
  const writeList = (process.env.GITHUB_APP_WRITE_ALLOWED_REPOS ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (writeList.length === 0) {
    return {
      allowed: false,
      reason:
        "GITHUB_APP_WRITE_ALLOWED_REPOS vide — aucune cible WRITE REAL éligible",
    };
  }
  return { allowed: true };
}
