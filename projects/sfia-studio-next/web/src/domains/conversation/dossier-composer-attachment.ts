/**
 * C24 — structured D8 dossier reference for composer (Figma 12.09).
 * Product-owned attachment, distinct from free-text draft.
 * Retirable by Pilote; never auto-sent; never a HumanDecision.
 */

import type { DeterminingQuestion } from "./investigation-state";

export type DossierComposerAttachment = {
  attemptId: string;
  contractId?: string | null;
  handoffId?: string | null;
  dossierVersion?: number | string | null;
  verdictD8?: string | null;
  noraKind?: string | null;
  fingerprint?: string | null;
  pieces?: string[] | null;
};

const ATTEMPT_RE = /attemptId:\s*(efx_[A-Za-z0-9-]+)/i;
const CONTRACT_RE = /contractId:\s*(tctr_[A-Za-z0-9-]+|MISSING)/i;
const HANDOFF_RE = /handoffId:\s*(rhf_[A-Za-z0-9-]+|MISSING)/i;
const VERSION_RE = /dossierVersion:\s*(\S+)/i;
const VERDICT_RE = /verdictD8:\s*(\S+)/i;

/** Parse bilan draft / message embedding produced by RealizationBilan. */
export function parseStructuredDossierComposerAttachment(
  text: string,
): DossierComposerAttachment | null {
  const raw = (text || "").trim();
  if (!raw) return null;
  if (!/\[Dossier D8/i.test(raw) && !ATTEMPT_RE.test(raw)) return null;
  const attemptId = raw.match(ATTEMPT_RE)?.[1];
  if (!attemptId) return null;
  return {
    attemptId,
    contractId: raw.match(CONTRACT_RE)?.[1] ?? null,
    handoffId: raw.match(HANDOFF_RE)?.[1] ?? null,
    dossierVersion: raw.match(VERSION_RE)?.[1] ?? null,
    verdictD8: raw.match(VERDICT_RE)?.[1] ?? null,
  };
}

export function formatDossierComposerAttachment(
  att: DossierComposerAttachment,
): string {
  return [
    `[Dossier D8 — brouillon retirable, aucun envoi automatique]`,
    `attemptId: ${att.attemptId}`,
    `contractId: ${att.contractId ?? "MISSING"}`,
    `handoffId: ${att.handoffId ?? "MISSING"}`,
    `dossierVersion: ${att.dossierVersion ?? "UNKNOWN"}`,
    `verdictD8: ${att.verdictD8 ?? "UNKNOWN"}`,
    att.noraKind ? `noraKind: ${att.noraKind}` : null,
    att.fingerprint ? `fingerprint: ${att.fingerprint}` : null,
    att.pieces?.length ? `pieces: ${att.pieces.join(", ")}` : null,
    `Suite laissée au Pilote — aucune HumanDecision automatique.`,
  ]
    .filter(Boolean)
    .join("\n");
}

/** Questions that ask the Pilote to re-attach a dossier already held by the product. */
export function isDossierJoinQuestion(text: string): boolean {
  const t = (text || "").trim();
  if (!t) return false;
  return (
    /joindre.*dossier|dossier\s*D8|dossier référenc|référence.*(dossier|tentative)/i.test(
      t,
    ) ||
    /transmet(tre)?\s+(le\s+)?dossier|colle.*dossier|joindre à ce message|bloc du dossier/i.test(
      t,
    ) ||
    /peux-tu joindre|joins? (à nouveau )?(le )?brouillon|retransmet.*dossier/i.test(t)
  );
}

/**
 * When the Pilote (or product chip) already attached a structured D8 dossier,
 * do not leave DETERMINANT OPEN questions that only ask to re-attach it.
 * Does not invent ANSWERED for unrelated questions.
 */
export function consolidateAttachedDossierQuestions(
  questions: DeterminingQuestion[],
  userText: string | null | undefined,
  attachment?: DossierComposerAttachment | null,
): DeterminingQuestion[] {
  const attached =
    attachment ??
    (userText ? parseStructuredDossierComposerAttachment(userText) : null);
  if (!attached?.attemptId) return questions.map((q) => ({ ...q }));

  const summary =
    `Dossier D8 joint par le produit (attemptId=${attached.attemptId}` +
    (attached.verdictD8 ? `, verdict=${attached.verdictD8}` : "") +
    (attached.dossierVersion != null
      ? `, version=${attached.dossierVersion}`
      : "") +
    `) — référence compositeur retirable, pas une HumanDecision.`;

  return questions.map((q) => {
    if (q.status === "ANSWERED") return { ...q };
    if (!isDossierJoinQuestion(q.text)) return { ...q };
    return {
      ...q,
      status: "ANSWERED" as const,
      answerSummary: summary,
      sourceRefs: [
        `attempt:${attached.attemptId}`,
        ...(q.sourceRefs ?? []).filter((r) => r !== `attempt:${attached.attemptId}`),
      ],
    };
  });
}

/**
 * Merge free-text draft with durable attachment for the turn payload.
 * Attachment travels even if the Pilote edits/replaces the draft body.
 */
export function mergeDraftWithDossierAttachment(
  draft: string,
  attachment: DossierComposerAttachment | null | undefined,
): string {
  const body = (draft || "").trim();
  if (!attachment?.attemptId) return body;
  const block = formatDossierComposerAttachment(attachment);
  if (!body) return block;
  if (body.includes(attachment.attemptId) && /dossierVersion:/i.test(body)) {
    return body;
  }
  return `${block}\n\n${body}`;
}
