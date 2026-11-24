/**
 * C19/C20 — current applicability of a READY technical mandate.
 * Historical READY status is preserved; effect paths must refuse when
 * cognitive filiation, investigation, or determining D4 dependencies
 * are no longer exact/current.
 */

import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { documentRevisions, documents } from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import {
  evaluateGlobalResourceEnvelope,
  getCognitiveWork,
} from "@/domains/conversation/cognitive-work";
import { loadInvestigationSnapshot } from "@/domains/conversation/investigation-persistence";
import { evaluateContractReadiness as evaluateInvestigation } from "@/domains/conversation/investigation-state";
import {
  getTechnicalContract,
  technicalContractFingerprint,
} from "./technical-contract";

export type MandateApplicability = {
  ok: true;
  contractId: string;
  workId: string;
  revision: number;
  fingerprint: string;
} | {
  ok: false;
  reason: string;
};

/**
 * C20 — revalidate determining D4 dependencies without requiring a cognitive bump.
 * A newer AVAILABLE revision on a CONSULTED document invalidates the mandate.
 */
async function assessDeterminingD4Dependencies(input: {
  pilotId: string;
  preparationId: string;
  sources: Array<{
    kind: string;
    ref: string;
    versionOrSha?: string | null;
    coverage: string;
  }>;
}): Promise<{ ok: true } | { ok: false; reason: string }> {
  const determining = input.sources.filter(
    (s) =>
      s.kind === "D4" &&
      (s.coverage === "CONSULTED" || s.coverage === "VERIFIED") &&
      Boolean(s.ref?.trim()),
  );
  for (const src of determining) {
    const ref = src.ref.trim();
    // ref may be documentId, revisionId, "documentId@revisionId",
    // or prefixed forms used in investigation journals ("document:doc_…").
    let documentId: string | null = null;
    let revisionId: string | null = null;
    // Accepted shapes (tool journal + legacy):
    //   doc_… | drev_…
    //   document:doc_…@revision:drev_… | document:doc_…@drev_…
    //   document:doc_…/revision:drev_…  (d4-read-tools journal)
    //   d4:doc_…
    let stripped = ref.trim();
    stripped = stripped.replace(/^d4:/i, "").trim();
    const slashRev = stripped.match(
      /^(?:document:)?(doc_[A-Za-z0-9-]+)\/(?:revision:)?(drev_[A-Za-z0-9-]+|rev_[A-Za-z0-9-]+)$/i,
    );
    const atRev = stripped.match(
      /^(?:document:)?(doc_[A-Za-z0-9-]+)@(?:revision:)?(drev_[A-Za-z0-9-]+|rev_[A-Za-z0-9-]+)$/i,
    );
    if (slashRev) {
      documentId = slashRev[1];
      revisionId = slashRev[2];
    } else if (atRev) {
      documentId = atRev[1];
      revisionId = atRev[2];
    } else {
      stripped = stripped
        .replace(/^document:/i, "")
        .replace(/^revision:/i, "")
        .trim();
      if (stripped.startsWith("drev_") || stripped.startsWith("rev_")) {
        revisionId = stripped;
      } else if (stripped.startsWith("doc_")) {
        // Bare document id — optionally truncate accidental path suffix.
        documentId = stripped.split(/[/@]/)[0] || stripped;
      } else {
        return {
          ok: false,
          reason: `Dépendance D4 indéterminable (${ref.slice(0, 48)}) — mandat non applicable`,
        };
      }
    }

    if (revisionId && !documentId) {
      const rev = (
        await db
          .select()
          .from(documentRevisions)
          .where(eq(documentRevisions.id, revisionId))
          .limit(1)
      )[0];
      if (!rev) {
        return { ok: false, reason: "Révision D4 absente — mandat non applicable" };
      }
      documentId = rev.documentId;
      if (rev.status !== "AVAILABLE") {
        return {
          ok: false,
          reason: `Révision D4 ${rev.status} — mandat non applicable`,
        };
      }
      if (src.versionOrSha && src.versionOrSha !== revisionId && src.versionOrSha !== String(rev.revisionNumber)) {
        return {
          ok: false,
          reason: "Empreinte révision D4 divergente — mandat non applicable",
        };
      }
    }

    if (!documentId) {
      return { ok: false, reason: "Document D4 indéterminable — mandat non applicable" };
    }

    const owned = (
      await db
        .select()
        .from(documents)
        .where(
          and(
            eq(documents.id, documentId),
            eq(documents.ownerPilotId, input.pilotId),
            eq(documents.preparationId, input.preparationId),
          ),
        )
        .limit(1)
    )[0];
    if (!owned) {
      return { ok: false, reason: "Document D4 hors scope — mandat non applicable" };
    }

    const latest = (
      await db
        .select()
        .from(documentRevisions)
        .where(
          and(
            eq(documentRevisions.documentId, documentId),
            eq(documentRevisions.status, "AVAILABLE"),
          ),
        )
        .orderBy(desc(documentRevisions.revisionNumber))
        .limit(1)
    )[0];
    if (!latest) {
      return { ok: false, reason: "Aucune révision D4 AVAILABLE — mandat non applicable" };
    }

    if (revisionId && latest.id !== revisionId) {
      return {
        ok: false,
        reason: "Dépendance D4 supersédée — mandat non applicable",
      };
    }
    if (
      src.versionOrSha &&
      src.versionOrSha !== latest.id &&
      src.versionOrSha !== String(latest.revisionNumber)
    ) {
      // Bound version no longer current.
      const boundStill =
        revisionId === latest.id ||
        src.versionOrSha === latest.id ||
        src.versionOrSha === String(latest.revisionNumber);
      if (!boundStill && revisionId) {
        const bound = (
          await db
            .select()
            .from(documentRevisions)
            .where(eq(documentRevisions.id, revisionId))
            .limit(1)
        )[0];
        if (!bound || bound.status !== "AVAILABLE") {
          return {
            ok: false,
            reason: "Révision D4 liée indisponible — mandat non applicable",
          };
        }
        if (bound.revisionNumber < latest.revisionNumber) {
          return {
            ok: false,
            reason: "Dépendance D4 obsolète (nouvelle révision) — mandat non applicable",
          };
        }
      } else if (!boundStill) {
        return {
          ok: false,
          reason: "Version D4 divergente — mandat non applicable",
        };
      }
    }
  }
  return { ok: true };
}

/**
 * Positive check used at prepare / authorize / dispatch effect points.
 * Does not rewrite historical READY rows.
 */
export async function assessTechnicalContractMandateApplicability(input: {
  pilotId: string;
  projectId: string;
  contractId: string;
  preparationId?: string | null;
}): Promise<MandateApplicability> {
  const row = await getTechnicalContract({
    pilotId: input.pilotId,
    projectId: input.projectId,
    contractId: input.contractId,
  });
  if (row.status !== "READY") {
    return { ok: false, reason: `Contrat non READY (${row.status})` };
  }
  const recomputed = technicalContractFingerprint(row.body);
  if (recomputed !== row.fingerprint) {
    return { ok: false, reason: "Empreinte ≠ représentation persistée" };
  }
  const workId = row.cognitiveWorkId ?? null;
  const boundRevision = row.cognitiveRevision;
  if (!workId || boundRevision == null) {
    return { ok: false, reason: "Filiation cognitive absente — mandat non applicable" };
  }
  const work = await getCognitiveWork({
    pilotId: input.pilotId,
    workId,
  });
  if (work.projectId && work.projectId !== input.projectId) {
    return { ok: false, reason: "Travail cognitif hors projet du contrat" };
  }
  if (work.revision !== boundRevision) {
    return {
      ok: false,
      reason: `Révision cognitive ${work.revision} ≠ filiation mandat r${boundRevision} — mandat non applicable`,
    };
  }
  // C24: OPEN (AWAIT_PILOT) admissible when investigation below is still contract-ready.
  if (work.status !== "COMPLETE" && work.status !== "OPEN") {
    return {
      ok: false,
      reason: `Travail cognitif ${work.status} — mandat non applicable`,
    };
  }
  const envelope = evaluateGlobalResourceEnvelope(work.resources);
  if (!envelope.ok) {
    return { ok: false, reason: envelope.reason ?? "Budget cognitif global épuisé" };
  }
  const preparationId = input.preparationId ?? row.preparationId ?? null;
  if (!preparationId) {
    return { ok: false, reason: "preparationId requis pour applicabilité" };
  }
  const snap = await loadInvestigationSnapshot({
    pilotId: input.pilotId,
    preparationId,
    intentFallback: row.body.title,
    workId,
  });
  if (!snap) {
    return { ok: false, reason: "Investigation absente ou ambiguë" };
  }
  const inv = evaluateInvestigation(snap);
  if (inv.cognitiveWorkId && inv.cognitiveWorkId !== workId) {
    return { ok: false, reason: "Investigation d'un autre travail cognitif" };
  }
  if (
    inv.sufficiency === "UNKNOWN" ||
    inv.sufficiency === "BUDGET_EXHAUSTED" ||
    inv.sufficiency === "BLOCKED_BY_UNKNOWN_RESTRICTION" ||
    !inv.contractReady ||
    inv.sufficiency !== "SUFFICIENT"
  ) {
    return {
      ok: false,
      reason:
        inv.contractReadyBlockedReason ??
        `Investigation non applicable (${inv.sufficiency})`,
    };
  }
  const consulted = inv.sources.filter(
    (s) => s.coverage === "CONSULTED" || s.coverage === "VERIFIED",
  );
  if (consulted.length === 0) {
    return { ok: false, reason: "Aucune source CONSULTED/VERIFIED actuelle" };
  }
  const degraded = inv.sources.some(
    (s) =>
      s.coverage === "STALE" ||
      s.coverage === "DENIED" ||
      s.coverage === "CONTRADICTORY",
  );
  if (degraded) {
    return {
      ok: false,
      reason: "Source déterminante dégradée — mandat non applicable",
    };
  }

  const d4 = await assessDeterminingD4Dependencies({
    pilotId: input.pilotId,
    preparationId,
    sources: inv.sources,
  });
  if (!d4.ok) return d4;

  return {
    ok: true,
    contractId: input.contractId,
    workId,
    revision: boundRevision,
    fingerprint: row.fingerprint,
  };
}

export async function assertTechnicalContractMandateApplicable(input: {
  pilotId: string;
  projectId: string;
  contractId: string;
  preparationId?: string | null;
}): Promise<Extract<MandateApplicability, { ok: true }>> {
  const assessed = await assessTechnicalContractMandateApplicability(input);
  if (!assessed.ok) {
    throw new StudioError("REQUIRES_REQUALIFICATION", assessed.reason, {
      exposeMessage: true,
    });
  }
  return assessed;
}
