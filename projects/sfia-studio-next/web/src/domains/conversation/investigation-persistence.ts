/**
 * Investigation persistence facade.
 * C15: cognitive_works is the active D3 truth.
 * Legacy preparations.projection_json.ml5InvestigationSnapshot is read-compat only
 * (ambiguous bindings never feed READY). Exit: stop writing the legacy snapshot.
 *
 * C19: material investigation writes bump revision + new immutable checkpoint.
 * Never mutate an existing checkpoint payload in place.
 */

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { preparations } from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import {
  getCognitiveWork,
  listCognitiveWorksForPreparation,
  openOrResumeCognitiveWork,
  checkpointCognitiveWork,
  releaseCognitiveWorkLease,
} from "./cognitive-work";
import {
  evaluateContractReadiness,
  resumeInvestigation,
  type InvestigationState,
} from "./investigation-state";

const SNAPSHOT_KEY = "ml5InvestigationSnapshot";

/** @deprecated C15 — legacy key retained for read-compat / migration diagnostics only. */
export const LEGACY_INVESTIGATION_SNAPSHOT_KEY = SNAPSHOT_KEY;

function stableStateJson(state: InvestigationState): string {
  return JSON.stringify(evaluateContractReadiness(state));
}

/**
 * Persist investigation into dedicated cognitive work (active truth).
 * Optionally keep a non-authoritative legacy mirror for transition diagnostics.
 */
export async function saveInvestigationSnapshot(input: {
  pilotId: string;
  preparationId: string;
  state: InvestigationState;
  workId?: string | null;
  projectId?: string | null;
  conversationId?: string | null;
}): Promise<{ savedAt: string; workId: string; revision: number; bumped: boolean }> {
  // C17: never re-evaluate with a sticky BUDGET_EXHAUSTED left by SEGMENT_INVOCATION_LIMIT.
  let incoming = input.state;
  const blocked = incoming.contractReadyBlockedReason ?? "";
  if (
    incoming.sufficiency === "BUDGET_EXHAUSTED" &&
    (blocked === "SEGMENT_INVOCATION_LIMIT" || blocked.includes("SEGMENT_INVOCATION"))
  ) {
    incoming = {
      ...incoming,
      sufficiency: "UNKNOWN",
      contractReady: false,
      contractReadyBlockedReason: "SEGMENT_INVOCATION_LIMIT",
    };
  }
  const evaluated = evaluateContractReadiness(incoming);
  const nextJson = stableStateJson(evaluated);

  // Capture durable status BEFORE claim (claim temporarily sets RUNNING).
  let durableStatus: "OPEN" | "SUSPENDED" | "COMPLETE" | "FAILED" | "RUNNING" | "ABANDONED" =
    "OPEN";
  let preClaimRevision: number | null = null;
  if (input.workId) {
    const current = await getCognitiveWork({
      pilotId: input.pilotId,
      workId: input.workId,
    });
    if (current.preparationId !== input.preparationId) {
      throw new StudioError("ACCESS_DENIED", "Travail hors préparation");
    }
    if (input.projectId && current.projectId && current.projectId !== input.projectId) {
      throw new StudioError("ACCESS_DENIED", "Travail hors projet");
    }
    durableStatus = current.status;
    preClaimRevision = current.revision;
    // Idempotent: identical material state → keep revision, no checkpoint rewrite.
    if (stableStateJson(current.state) === nextJson) {
      return {
        savedAt: new Date().toISOString(),
        workId: current.id,
        revision: current.revision,
        bumped: false,
      };
    }
  }

  const opened = await openOrResumeCognitiveWork({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
    projectId: input.projectId,
    conversationId: input.conversationId,
    objective: evaluated.intentSummary || "investigation",
    expectedOutcome: evaluated.desiredOutcome,
    workId: input.workId,
  });
  // C20: CAS on consumed state — refuse if concurrent writers advanced beyond our claim.
  if (
    preClaimRevision != null &&
    opened.resumed &&
    opened.work.revision !== preClaimRevision + 1
  ) {
    await releaseCognitiveWorkLease({
      workId: opened.work.id,
      ownerToken: opened.ownerToken,
      status: durableStatus === "COMPLETE" ? "COMPLETE" : durableStatus === "FAILED" ? "FAILED" : "OPEN",
      interruptCause: opened.work.interruptCause,
    });
    throw new StudioError(
      "CONFLICT",
      "Sauvegarde investigation refusée — état concurrent plus récent",
    );
  }
  // Idempotent after claim: another path may have already persisted identical material.
  if (stableStateJson(opened.work.state) === nextJson) {
    await releaseCognitiveWorkLease({
      workId: opened.work.id,
      ownerToken: opened.ownerToken,
      status: durableStatus === "COMPLETE" ? "COMPLETE" : durableStatus === "FAILED" ? "FAILED" : "OPEN",
      interruptCause: opened.work.interruptCause,
    });
    return {
      savedAt: new Date().toISOString(),
      workId: opened.work.id,
      revision: opened.work.revision,
      bumped: false,
    };
  }
  // C19: restore pre-claim terminal status — claim must not demote COMPLETE→OPEN.
  const persistStatus =
    durableStatus === "COMPLETE"
      ? "COMPLETE"
      : durableStatus === "FAILED"
        ? "FAILED"
        : "OPEN";

  // C19: material change → new revision + new immutable checkpoint (CAS).
  const saved = await checkpointCognitiveWork({
    pilotId: input.pilotId,
    workId: opened.work.id,
    ownerToken: opened.ownerToken,
    expectedRevision: opened.work.revision,
    cause: "INVESTIGATION_SAVE",
    state: evaluated,
    status: persistStatus,
    interruptCause: persistStatus === "COMPLETE" ? null : opened.work.interruptCause,
  });
  await releaseCognitiveWorkLease({
    workId: opened.work.id,
    ownerToken: opened.ownerToken,
    status: persistStatus,
    interruptCause: persistStatus === "COMPLETE" ? null : opened.work.interruptCause,
  });

  // Transitional diagnostic mirror — NOT authoritative for READY (C15 exit path).
  if ((process.env.SFIA_COGNITIVE_LEGACY_MIRROR || "").trim() === "1") {
    const prep = (
      await db.select().from(preparations).where(eq(preparations.id, input.preparationId)).limit(1)
    )[0];
    if (prep && prep.ownerPilotId === input.pilotId) {
      const savedAt = new Date().toISOString();
      const base =
        prep.projectionJson && typeof prep.projectionJson === "object"
          ? { ...(prep.projectionJson as Record<string, unknown>) }
          : {};
      await db
        .update(preparations)
        .set({
          projectionJson: {
            ...base,
            [SNAPSHOT_KEY]: {
              state: evaluated,
              savedAt,
              cognitiveWorkId: saved.id,
              authority: "LEGACY_MIRROR_NON_AUTHORITATIVE",
            },
          },
          updatedAt: new Date(),
        })
        .where(eq(preparations.id, input.preparationId));
    }
  }

  return {
    savedAt: new Date().toISOString(),
    workId: saved.id,
    revision: saved.revision,
    bumped: true,
  };
}

export async function loadInvestigationSnapshot(input: {
  pilotId: string;
  preparationId: string;
  intentFallback?: string;
  workId?: string | null;
}): Promise<InvestigationState | null> {
  // Prefer dedicated cognitive work.
  if (input.workId) {
    const work = await getCognitiveWork({
      pilotId: input.pilotId,
      workId: input.workId,
    });
    return resumeInvestigation(
      work.state,
      input.intentFallback ?? work.state.intentSummary ?? "",
    );
  }
  const works = await listCognitiveWorksForPreparation({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
  });
  if (works.length === 1) {
    return resumeInvestigation(
      works[0]!.state,
      input.intentFallback ?? works[0]!.state.intentSummary ?? "",
    );
  }
  if (works.length > 1) {
    // Ambiguous multi-work — do not guess for READY.
    return null;
  }

  // C16: legacy snapshot is never READY authority and is not returned on the
  // authoritative load path. Compatibility diagnostics remain opt-in via env.
  if ((process.env.SFIA_COGNITIVE_LEGACY_READ || "").trim() !== "1") {
    return null;
  }
  const prep = (
    await db.select().from(preparations).where(eq(preparations.id, input.preparationId)).limit(1)
  )[0];
  if (!prep) throw new StudioError("NOT_FOUND", "Préparation introuvable");
  if (prep.ownerPilotId !== input.pilotId) {
    throw new StudioError("ACCESS_DENIED", "Préparation d'un autre Pilote");
  }
  const base =
    prep.projectionJson && typeof prep.projectionJson === "object"
      ? (prep.projectionJson as Record<string, unknown>)
      : {};
  const snap = base[SNAPSHOT_KEY] as
    | { state?: InvestigationState; cognitiveWorkId?: string; authority?: string }
    | undefined;
  if (!snap?.state) return null;
  // Explicit non-authoritative — callers must not promote READY from this alone.
  return resumeInvestigation(snap.state, input.intentFallback ?? snap.state.intentSummary ?? "");
}
