/**
 * CF-02 — READY qualification is server-owned.
 * Client `sourcesSufficient` / `unknownRestrictions` are never authoritative.
 */

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { technicalContracts } from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import {
  evaluateGlobalResourceEnvelope,
  getCognitiveWork,
} from "@/domains/conversation/cognitive-work";
import { loadInvestigationSnapshot } from "@/domains/conversation/investigation-persistence";
import { evaluateContractReadiness as evaluateInvestigation } from "@/domains/conversation/investigation-state";
import {
  evaluateContractReadiness,
  getTechnicalContract,
  technicalContractFingerprint,
} from "./technical-contract";

export async function qualifyTechnicalContractReadyServerSide(input: {
  pilotId: string;
  projectId: string;
  contractId: string;
  preparationId?: string | null;
  /** C16 — exact cognitive work filiation when known. */
  workId?: string | null;
}) {
  const row = await getTechnicalContract(input);
  // C16: existing READY never skips positive requalification of current conditions.
  const wasReady = row.status === "READY";

  // C18: filiation must already be bound on the contract — no client workId fallback.
  const boundWorkId = row.cognitiveWorkId ?? null;
  if (input.workId && boundWorkId && input.workId !== boundWorkId) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "workId client ≠ filiation du contrat — READY refusé",
      { exposeMessage: true },
    );
  }
  if (!boundWorkId) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "Filiation cognitive_work absente sur le contrat — READY serveur impossible",
      { exposeMessage: true },
    );
  }
  const effectiveWorkId = boundWorkId;

  let unknownRestrictions: string[] = [];
  let sourcesSufficient = false;

  if (input.preparationId) {
    // C17: READY when bound work is COMPLETE.
    // C24: OPEN (AWAIT_PILOT) is also admissible — READY is the Pilote act that
    // proceeds once investigation is sufficient; SUSPENDED/RUNNING stay refused.
    const boundWork = await getCognitiveWork({
      pilotId: input.pilotId,
      workId: effectiveWorkId,
    });
    if (boundWork.status === "SUSPENDED" || boundWork.status === "RUNNING") {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        `Travail cognitif ${boundWork.status}${boundWork.interruptCause ? ` (${boundWork.interruptCause})` : ""} — READY refusé`,
        { exposeMessage: true },
      );
    }
    if (boundWork.status !== "COMPLETE" && boundWork.status !== "OPEN") {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        `Travail cognitif non COMPLETE (${boundWork.status}) — READY refusé`,
        { exposeMessage: true },
      );
    }
    // Exact filiation: later revision must not auto-validate an older contract binding.
    if (
      row.cognitiveRevision != null &&
      boundWork.revision !== row.cognitiveRevision
    ) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        `Révision cognitive ${boundWork.revision} ≠ filiation contrat r${row.cognitiveRevision} — READY refusé`,
        { exposeMessage: true },
      );
    }
    const envelope = evaluateGlobalResourceEnvelope(boundWork.resources);
    if (!envelope.ok) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        envelope.reason ?? "Budget cognitif global épuisé",
        { exposeMessage: true },
      );
    }
    const snap = await loadInvestigationSnapshot({
      pilotId: input.pilotId,
      preparationId: input.preparationId,
      intentFallback: row.body.title,
      workId: effectiveWorkId,
    });
    if (!snap) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        "Investigation absente ou ambiguë (multi-travaux) — READY serveur impossible",
        { exposeMessage: true },
      );
    }
    const inv = evaluateInvestigation(snap);
    if (inv.cognitiveWorkId && inv.cognitiveWorkId !== effectiveWorkId) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        "Investigation d'un autre travail cognitif — READY refusé",
        { exposeMessage: true },
      );
    }
    // C15 positive sufficiency — empty/UNKNOWN/BUDGET never READY.
    if (
      inv.sufficiency === "UNKNOWN" ||
      inv.sufficiency === "BUDGET_EXHAUSTED" ||
      inv.sufficiency === "BLOCKED_BY_UNKNOWN_RESTRICTION"
    ) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        inv.contractReadyBlockedReason ?? `Suffisance ${inv.sufficiency} — READY refusé`,
        { exposeMessage: true },
      );
    }
    if (!inv.contractReady || inv.sufficiency !== "SUFFICIENT") {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        inv.contractReadyBlockedReason ?? "Investigation non prête",
        { exposeMessage: true },
      );
    }
    sourcesSufficient = inv.sufficiency === "SUFFICIENT";
    unknownRestrictions = inv.questions
      .filter((q) => q.importance === "DETERMINANT" && q.status !== "ANSWERED")
      .map((q) => q.id);
  } else {
    // Without preparation linkage, refuse READY — no client substitute.
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "preparationId requis pour qualification READY serveur",
      { exposeMessage: true },
    );
  }

  const readiness = evaluateContractReadiness({
    body: row.body,
    unknownRestrictions,
    sourcesSufficient,
  });
  if (!readiness.ready) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      `Promotion READY refusée: ${readiness.blockedReasons.join("; ")}`,
      { exposeMessage: true },
    );
  }

  const recomputed = technicalContractFingerprint(row.body);
  if (recomputed !== row.fingerprint) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "Empreinte ≠ représentation persistée — nouvelle version requise",
      { exposeMessage: true },
    );
  }

  const readinessWithFiliation = {
    ...readiness,
    cognitiveFiliation: {
      preparationId: input.preparationId ?? null,
      workId: effectiveWorkId,
      revision: row.cognitiveRevision ?? null,
      contractId: input.contractId,
      fingerprint: row.fingerprint,
      requalifiedAt: new Date().toISOString(),
    },
  };

  if (wasReady) {
    // Conditions still hold — refresh readiness proof; keep READY.
    await db
      .update(technicalContracts)
      .set({
        readinessJson: JSON.stringify(readinessWithFiliation),
        updatedAt: new Date(),
      })
      .where(
        and(
          eq(technicalContracts.id, input.contractId),
          eq(technicalContracts.projectId, input.projectId),
          eq(technicalContracts.pilotId, input.pilotId),
          eq(technicalContracts.status, "READY"),
        ),
      );
    return {
      contractId: input.contractId,
      status: "READY" as const,
      idempotent: true as const,
      fingerprint: row.fingerprint,
      readiness: readinessWithFiliation,
    };
  }

  const updated = await db
    .update(technicalContracts)
    .set({
      status: "READY",
      readinessJson: JSON.stringify(readinessWithFiliation),
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(technicalContracts.id, input.contractId),
        eq(technicalContracts.projectId, input.projectId),
        eq(technicalContracts.pilotId, input.pilotId),
        eq(technicalContracts.status, "DRAFT"),
      ),
    )
    .returning({ id: technicalContracts.id });

  if (!updated[0]) {
    throw new StudioError("CONFLICT", "Promotion READY concurrente ou statut non DRAFT");
  }

  return {
    contractId: input.contractId,
    status: "READY" as const,
    idempotent: false as const,
    fingerprint: row.fingerprint,
    readiness: readinessWithFiliation,
  };
}
