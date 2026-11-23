/**
 * Durable investigation snapshot — resume after process restart.
 * Stored under preparations.projection_json.ml5InvestigationSnapshot.
 * Not an authority register; D3 conductor consumes it.
 */

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { preparations } from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import {
  evaluateContractReadiness,
  resumeInvestigation,
  type InvestigationState,
} from "./investigation-state";

const SNAPSHOT_KEY = "ml5InvestigationSnapshot";

/**
 * Persist evaluated investigation state for a preparation (pilot-owned).
 */
export async function saveInvestigationSnapshot(input: {
  pilotId: string;
  preparationId: string;
  state: InvestigationState;
}): Promise<{ savedAt: string }> {
  const prep = (
    await db.select().from(preparations).where(eq(preparations.id, input.preparationId)).limit(1)
  )[0];
  if (!prep) throw new StudioError("NOT_FOUND", "Préparation introuvable");
  if (prep.ownerPilotId !== input.pilotId) {
    throw new StudioError("ACCESS_DENIED", "Préparation d'un autre Pilote");
  }
  const evaluated = evaluateContractReadiness(input.state);
  const savedAt = new Date().toISOString();
  const base =
    prep.projectionJson && typeof prep.projectionJson === "object"
      ? { ...(prep.projectionJson as Record<string, unknown>) }
      : {};
  const next = {
    ...base,
    [SNAPSHOT_KEY]: { state: evaluated, savedAt },
  };
  await db
    .update(preparations)
    .set({ projectionJson: next, updatedAt: new Date() })
    .where(eq(preparations.id, input.preparationId));
  return { savedAt };
}

export async function loadInvestigationSnapshot(input: {
  pilotId: string;
  preparationId: string;
  intentFallback?: string;
}): Promise<InvestigationState | null> {
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
  const snap = base[SNAPSHOT_KEY] as { state?: InvestigationState } | undefined;
  if (!snap?.state) return null;
  return resumeInvestigation(snap.state, input.intentFallback ?? snap.state.intentSummary ?? "");
}
