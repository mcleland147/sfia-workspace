/**
 * Journal cognitive helpers owned by D4 selection contracts (J-C04 / J-C06).
 * D3 decides when to surface; these helpers are deterministic and fixture-testable.
 * LIVE Nora spontaneity remains a separate proof boundary.
 */
import { and, desc, eq, inArray } from "drizzle-orm";
import { db } from "@/db/client";
import {
  documentRevisions,
  documents,
  knowledgeAcquis,
  knowledgeOpenPointEvents,
  knowledgeOpenPoints,
  messages,
  conversations,
} from "@/db/schema";
import type { Provenance } from "@/domains/knowledge/service";
import { listProjectKnowledge, loadOwnedOpenPoint } from "@/domains/knowledge/journal";
import { newId } from "@/lib/ids";

const FR_STOP = new Set([
  "le",
  "la",
  "les",
  "un",
  "une",
  "des",
  "de",
  "du",
  "et",
  "ou",
  "a",
  "à",
  "en",
  "dans",
  "pour",
  "par",
  "sur",
  "au",
  "aux",
  "ce",
  "cet",
  "cette",
  "ces",
  "qui",
  "que",
  "quoi",
  "dont",
  "est",
  "sont",
  "pas",
  "plus",
  "moins",
  "avec",
  "sans",
  "nous",
  "vous",
  "ils",
  "elles",
  "je",
  "tu",
  "il",
  "elle",
  "on",
  "se",
  "sa",
  "son",
  "ses",
  "notre",
  "votre",
  "leur",
  "the",
  "and",
  "or",
  "of",
  "to",
  "in",
  "on",
  "for",
  "is",
  "are",
  "be",
  "was",
  "were",
  "this",
  "that",
  "with",
  "as",
  "by",
  "an",
  "it",
]);

export function tokenizeIntent(text: string): string[] {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .split(/[^a-z0-9àâäéèêëïîôùûüç]+/i)
    .map((t) => t.trim())
    .filter((t) => t.length >= 3 && !FR_STOP.has(t));
}

export function scoreLexicalOverlap(intentTokens: string[], statement: string): number {
  if (intentTokens.length === 0) return 0;
  const hay = new Set(tokenizeIntent(statement));
  let hits = 0;
  for (const t of intentTokens) {
    if (hay.has(t)) hits += 1;
  }
  return hits / intentTokens.length;
}

export type ReactivationCandidate = {
  openPointId: string;
  subjectId: string | null;
  statement: string;
  preparationId: string;
  score: number;
  reason: string;
  lastReactivatedAt: Date | null;
};

/**
 * J-C04 — select OPEN points still valuable for the current intent.
 * Never closes a point by silence; never reactivates every OPEN systematically.
 */
export async function selectOpenPointsForReactivation(
  pilotId: string,
  projectId: string,
  intentText: string,
  opts?: {
    limit?: number;
    minScore?: number;
    cooldownMs?: number;
    now?: Date;
  },
): Promise<{
  status: "AVAILABLE";
  candidates: ReactivationCandidate[];
  selectionMethod: "intent-overlap-with-cooldown";
  coverage: "EMPTY" | "PARTIAL" | "NONE";
}> {
  const limit = opts?.limit ?? 3;
  const minScore = opts?.minScore ?? 0.18;
  const cooldownMs = opts?.cooldownMs ?? 6 * 60 * 60 * 1000;
  const now = opts?.now ?? new Date();
  const tokens = tokenizeIntent(intentText);
  const bundle = await listProjectKnowledge(pilotId, projectId);
  const open = bundle.openPoints.filter((o) => o.status === "OPEN");
  if (open.length === 0) {
    return {
      status: "AVAILABLE",
      candidates: [],
      selectionMethod: "intent-overlap-with-cooldown",
      coverage: "EMPTY",
    };
  }

  const openIds = open.map((o) => o.id);
  const recentEvents =
    openIds.length === 0
      ? []
      : await db
          .select()
          .from(knowledgeOpenPointEvents)
          .where(
            and(
              eq(knowledgeOpenPointEvents.ownerPilotId, pilotId),
              inArray(knowledgeOpenPointEvents.openPointId, openIds),
              eq(knowledgeOpenPointEvents.eventType, "REACTIVATED"),
            ),
          )
          .orderBy(desc(knowledgeOpenPointEvents.createdAt));

  const lastByPoint = new Map<string, Date>();
  for (const ev of recentEvents) {
    if (!lastByPoint.has(ev.openPointId)) {
      lastByPoint.set(ev.openPointId, ev.createdAt);
    }
  }

  const scored: ReactivationCandidate[] = [];
  for (const o of open) {
    const score = tokens.length === 0 ? 0 : scoreLexicalOverlap(tokens, o.statement);
    if (score < minScore) continue;
    const last = lastByPoint.get(o.id) ?? null;
    if (last && now.getTime() - last.getTime() < cooldownMs) {
      continue;
    }
    scored.push({
      openPointId: o.id,
      subjectId: o.subjectId,
      statement: o.statement,
      preparationId: o.preparationId,
      score,
      reason:
        score >= 0.5
          ? "forte correspondance lexicale avec l'intention courante"
          : "correspondance partielle — question ancienne encore ouverte",
      lastReactivatedAt: last,
    });
  }

  scored.sort((a, b) => b.score - a.score || a.openPointId.localeCompare(b.openPointId));
  const candidates = scored.slice(0, limit);
  return {
    status: "AVAILABLE",
    candidates,
    selectionMethod: "intent-overlap-with-cooldown",
    coverage: candidates.length === 0 ? "NONE" : "PARTIAL",
  };
}

/**
 * Persist a REACTIVATED event after D3 elects to surface a candidate (idempotent by operationId).
 * E06-05 — projectId must match a preparation-linked ownership of the open point (same Pilote alone is insufficient).
 */
export async function markOpenPointReactivated(
  pilotId: string,
  projectId: string,
  openPointId: string,
  input: {
    reason: string;
    provenance: Provenance;
    operationId?: string;
  },
) {
  const point = await loadOwnedOpenPoint(pilotId, projectId, openPointId);
  if (!point) return { status: "FAILED" as const, reason: "NOT_FOUND_OR_OUT_OF_PROJECT" };
  if (point.status !== "OPEN") {
    return { status: "SKIPPED" as const, reason: "NOT_OPEN" };
  }
  // Prefer the point's own projectId when set; never write a foreign projectId.
  const eventProjectId = point.projectId ?? projectId;
  if (point.projectId && point.projectId !== projectId) {
    return { status: "FAILED" as const, reason: "PROJECT_SCOPE_MISMATCH" };
  }

  if (input.operationId) {
    const prior = (
      await db
        .select()
        .from(knowledgeOpenPointEvents)
        .where(
          and(
            eq(knowledgeOpenPointEvents.openPointId, openPointId),
            eq(knowledgeOpenPointEvents.operationId, input.operationId),
          ),
        )
        .limit(1)
    )[0];
    if (prior) {
      return {
        status: "AVAILABLE" as const,
        eventId: prior.id,
        idempotentReplay: true as const,
      };
    }
  }

  const eventId = newId("ope");
  await db.insert(knowledgeOpenPointEvents).values({
    id: eventId,
    openPointId,
    preparationId: point.preparationId,
    projectId: eventProjectId,
    ownerPilotId: pilotId,
    eventType: "REACTIVATED",
    reason: input.reason.trim().slice(0, 500),
    actorKind: "nora",
    provenanceJson: JSON.stringify({
      ...input.provenance,
      notedAt: input.provenance.notedAt ?? new Date().toISOString(),
    }),
    operationId: input.operationId ?? null,
  });
  return { status: "AVAILABLE" as const, eventId };
}

export type SourceCurrentness =
  | "CURRENT"
  | "HISTORICAL"
  | "INACCESSIBLE"
  | "CANDIDATE"
  | "UNVERIFIED"
  | "UNKNOWN";

export type QualifiedSource = {
  sourceKind: Provenance["sourceKind"] | "git";
  sourceId?: string;
  documentId?: string;
  revisionId?: string;
  gitRepo?: string;
  gitRef?: string;
  gitSha?: string;
  currentness: SourceCurrentness;
  detail: string;
  epistemic?: Provenance["epistemic"];
};

export type ExtendedProvenance = Provenance & {
  documentId?: string;
  revisionId?: string;
  gitRepo?: string;
  gitRef?: string;
  gitSha?: string;
  mainRef?: string;
  qualification?: "confirmed" | "deduced" | "uncertain";
};

/**
 * J-C06 — revalidate a provenance reference against live D3/D4 rows.
 * Does not invent confirmation; inaccessible stays visible.
 */
export async function qualifyProvenanceSource(
  pilotId: string,
  provenance: ExtendedProvenance,
): Promise<QualifiedSource> {
  const epistemic = provenance.epistemic;
  if (provenance.gitRepo || provenance.gitRef || provenance.gitSha) {
    const ref = (provenance.gitRef ?? "").trim();
    const mainish = !ref || ref === "main" || ref === "master" || ref === provenance.mainRef;
    if (!provenance.gitSha) {
      return {
        sourceKind: "git",
        gitRepo: provenance.gitRepo,
        gitRef: provenance.gitRef,
        gitSha: provenance.gitSha,
        currentness: "INACCESSIBLE",
        detail: "référence Git sans SHA — non vérifiable",
        epistemic,
      };
    }
    // E06-03 — declared main+SHA is NEVER CURRENT without a real verified read.
    // This cycle has no GO for REAL Git remote verification → honest UNVERIFIED/CANDIDATE.
    if (!mainish) {
      return {
        sourceKind: "git",
        gitRepo: provenance.gitRepo,
        gitRef: provenance.gitRef,
        gitSha: provenance.gitSha,
        currentness: "CANDIDATE",
        detail:
          "branche/ref candidate distincte de main — non assimilable à une preuve établie sur main",
        epistemic,
      };
    }
    return {
      sourceKind: "git",
      gitRepo: provenance.gitRepo,
      gitRef: provenance.gitRef,
      gitSha: provenance.gitSha,
      currentness: "UNVERIFIED",
      detail:
        "ref principale + SHA déclarés sans vérification Git distante autorisée — ne pas présenter comme CURRENT",
      epistemic,
    };
  }

  if (provenance.sourceKind === "message" && provenance.sourceId) {
    const row = (
      await db
        .select({
          id: messages.id,
          status: messages.status,
          ownerPilotId: conversations.ownerPilotId,
        })
        .from(messages)
        .innerJoin(conversations, eq(conversations.id, messages.conversationId))
        .where(eq(messages.id, provenance.sourceId))
        .limit(1)
    )[0];
    if (!row || row.ownerPilotId !== pilotId) {
      return {
        sourceKind: "message",
        sourceId: provenance.sourceId,
        currentness: "INACCESSIBLE",
        detail: "message introuvable ou hors périmètre Pilote",
        epistemic,
      };
    }
    return {
      sourceKind: "message",
      sourceId: provenance.sourceId,
      currentness: row.status === "COMPLETE" ? "HISTORICAL" : "UNKNOWN",
      detail: "message conversationnel exact — historique, pas preuve D8",
      epistemic,
    };
  }

  if (
    (provenance.sourceKind === "document" || provenance.sourceKind === "revision") &&
    (provenance.sourceId || provenance.revisionId || provenance.documentId)
  ) {
    const revisionId = provenance.revisionId ?? provenance.sourceId;
    const documentId = provenance.documentId;
    if (revisionId) {
      const rev = (
        await db
          .select({
            id: documentRevisions.id,
            documentId: documentRevisions.documentId,
            status: documentRevisions.status,
            revisionNumber: documentRevisions.revisionNumber,
            ownerPilotId: documents.ownerPilotId,
          })
          .from(documentRevisions)
          .innerJoin(documents, eq(documents.id, documentRevisions.documentId))
          .where(eq(documentRevisions.id, revisionId))
          .limit(1)
      )[0];
      if (!rev || rev.ownerPilotId !== pilotId) {
        return {
          sourceKind: provenance.sourceKind,
          sourceId: revisionId,
          revisionId,
          documentId,
          currentness: "INACCESSIBLE",
          detail: "révision documentaire inaccessible ou hors droits",
          epistemic,
        };
      }
      const latest = (
        await db
          .select({ id: documentRevisions.id, revisionNumber: documentRevisions.revisionNumber })
          .from(documentRevisions)
          .where(
            and(
              eq(documentRevisions.documentId, rev.documentId),
              eq(documentRevisions.status, "AVAILABLE"),
            ),
          )
          .orderBy(desc(documentRevisions.revisionNumber))
          .limit(1)
      )[0];
      const isCurrent = latest?.id === rev.id;
      return {
        sourceKind: provenance.sourceKind,
        sourceId: revisionId,
        revisionId: rev.id,
        documentId: rev.documentId,
        currentness:
          rev.status !== "AVAILABLE" ? "INACCESSIBLE" : isCurrent ? "CURRENT" : "HISTORICAL",
        detail:
          rev.status !== "AVAILABLE"
            ? `révision statut=${rev.status}`
            : isCurrent
              ? `révision courante v${rev.revisionNumber}`
              : `révision historique v${rev.revisionNumber} — une version plus récente existe`,
        epistemic,
      };
    }
    if (documentId) {
      const doc = (
        await db
          .select()
          .from(documents)
          .where(and(eq(documents.id, documentId), eq(documents.ownerPilotId, pilotId)))
          .limit(1)
      )[0];
      if (!doc) {
        return {
          sourceKind: "document",
          documentId,
          currentness: "INACCESSIBLE",
          detail: "document introuvable ou hors droits",
          epistemic,
        };
      }
      return {
        sourceKind: "document",
        documentId,
        currentness: "CURRENT",
        detail: "document identifié — ouvrir une révision exacte pour citation",
        epistemic,
      };
    }
  }

  if (provenance.sourceKind === "pilot" || provenance.sourceKind === "nora") {
    return {
      sourceKind: provenance.sourceKind,
      sourceId: provenance.sourceId,
      currentness: "UNKNOWN",
      detail: "déclaration d'acteur — pas une preuve documentaire autonome",
      epistemic,
    };
  }

  return {
    sourceKind: provenance.sourceKind,
    sourceId: provenance.sourceId,
    currentness: "UNKNOWN",
    detail: "provenance insuffisante pour qualifier l'actualité",
    epistemic,
  };
}

export type ContradictionFinding = {
  leftAcquisId: string;
  rightAcquisId: string;
  subjectId: string | null;
  status: "UNRESOLVED";
  leftStatement: string;
  rightStatement: string;
  reason: string;
};

const NEGATION = /\b(ne|n'|pas|jamais|aucun|aucune|contraire|refus|interdit|impossible)\b/i;

/**
 * Deterministic contradiction signal between CURRENT acquis on the same subject.
 * Does not resolve; surfaces UNRESOLVED for honest synthesis.
 */
export function detectAcquisContradictions(
  acquis: Array<{
    id: string;
    subjectId: string | null;
    statement: string;
    status: string;
    kind: string;
  }>,
): ContradictionFinding[] {
  const current = acquis.filter((a) => a.status === "CURRENT");
  const bySubject = new Map<string, typeof current>();
  for (const a of current) {
    const key = a.subjectId ?? "__orphan__";
    const bucket = bySubject.get(key) ?? [];
    bucket.push(a);
    bySubject.set(key, bucket);
  }

  const findings: ContradictionFinding[] = [];
  for (const [subjectKey, rows] of bySubject) {
    for (let i = 0; i < rows.length; i++) {
      for (let j = i + 1; j < rows.length; j++) {
        const left = rows[i]!;
        const right = rows[j]!;
        const leftNeg = NEGATION.test(left.statement);
        const rightNeg = NEGATION.test(right.statement);
        if (leftNeg === rightNeg) continue;
        const leftTokens = new Set(tokenizeIntent(left.statement));
        const rightTokens = tokenizeIntent(right.statement);
        const overlap = rightTokens.filter((t) => leftTokens.has(t)).length;
        if (overlap < 2) continue;
        findings.push({
          leftAcquisId: left.id,
          rightAcquisId: right.id,
          subjectId: subjectKey === "__orphan__" ? null : subjectKey,
          status: "UNRESOLVED",
          leftStatement: left.statement,
          rightStatement: right.statement,
          reason: "affirmation et négation concurrentes sur lexique partagé",
        });
      }
    }
  }
  return findings;
}

/**
 * Refuse to present uncertain/contradictory material as established.
 */
export function assertHonestSynthesisInput(input: {
  summaryMarkdown: string;
  contradictions: ContradictionFinding[];
  sources: QualifiedSource[];
}): { ok: true } | { ok: false; reason: string } {
  const claimsEstablished =
    /(^|[^\p{L}\p{N}_])(établi|etabli|confirmé|confirme|prouvé|prouve|certain|définitif|definitif)(?=[^\p{L}\p{N}_]|$)/iu.test(
      input.summaryMarkdown,
    );
  const hasUnresolved = input.contradictions.some((c) => c.status === "UNRESOLVED");
  const hasInaccessible = input.sources.some((s) => s.currentness === "INACCESSIBLE");
  const hasCandidate = input.sources.some((s) => s.currentness === "CANDIDATE");
  const hasUnverified = input.sources.some((s) => s.currentness === "UNVERIFIED");
  const hasUncertainEpistemic = input.sources.some(
    (s) => s.epistemic === "hypothesized" || s.epistemic === "limited",
  );

  if (
    claimsEstablished &&
    (hasUnresolved || hasInaccessible || hasCandidate || hasUnverified || hasUncertainEpistemic)
  ) {
    return {
      ok: false,
      reason:
        "SYNTHESIS_OVERCLAIMS — contradiction, source inaccessible/candidate/unverified ou épistémique incertain présenté comme établi",
    };
  }
  if (hasUnresolved && !/\b(contradiction|diverg|incert|ouvert|à clarifier)\b/i.test(input.summaryMarkdown)) {
    return {
      ok: false,
      reason: "UNRESOLVED_CONTRADICTION_HIDDEN — la synthèse doit rendre visible la contradiction",
    };
  }
  return { ok: true };
}

export async function loadSubjectAcquisForContradictionScan(
  pilotId: string,
  subjectId: string,
) {
  return db
    .select({
      id: knowledgeAcquis.id,
      subjectId: knowledgeAcquis.subjectId,
      statement: knowledgeAcquis.statement,
      status: knowledgeAcquis.status,
      kind: knowledgeAcquis.kind,
    })
    .from(knowledgeAcquis)
    .where(
      and(
        eq(knowledgeAcquis.ownerPilotId, pilotId),
        eq(knowledgeAcquis.subjectId, subjectId),
        eq(knowledgeAcquis.status, "CURRENT"),
      ),
    );
}
