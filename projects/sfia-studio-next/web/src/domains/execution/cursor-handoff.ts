import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts, realizationHandoffs } from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";
import {
  handoffIntegrityHash,
  inventoryComplete,
  type HandoffManifest,
} from "./handoff-integrity";
import type { CursorExecutionPlan, CursorLiveProjection } from "./types";

export type { HandoffManifest } from "./handoff-integrity";
export { handoffIntegrityHash } from "./handoff-integrity";

export type HandoffProvenance = {
  /** How Studio obtained the report — never inferred from hash alone. */
  acquisition: "CLIENT_DECLARED" | "SCRIPTED_ADAPTER" | "RUNTIME_COLLECTED" | "UNKNOWN";
  declaredExecutorId?: string | null;
  observedAgentId?: string | null;
  observedRunId?: string | null;
};

/**
 * Ingest a realization handoff bound to a Cursor attempt.
 * Hash proves content integrity for a binding — not authorship by Cursor.
 */
export async function ingestRealizationHandoff(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
  reportMarkdown: string;
  manifest: HandoffManifest;
  expectedContractFingerprint: string;
  provenance?: HandoffProvenance;
}) {
  const row = (
    await db
      .select()
      .from(effectAttempts)
      .where(
        and(
          eq(effectAttempts.id, input.attemptId),
          eq(effectAttempts.projectId, input.projectId),
          eq(effectAttempts.pilotId, input.pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!row) throw new StudioError("NOT_FOUND", "Tentative introuvable");
  if (row.kind !== "CURSOR_EXECUTION") {
    throw new StudioError("INVALID_REQUEST", "Handoff réservé aux tentatives Cursor");
  }

  // Restrict ingestion by attempt state — refuse PREPARED / AUTHORIZED without dispatch evidence.
  const allowedStatuses = new Set(["DISPATCHED", "COMPLETED", "AMBIGUOUS", "FAILED"]);
  if (!allowedStatuses.has(row.status)) {
    throw new StudioError(
      "CONFLICT",
      `Handoff refusé depuis statut ${row.status} — tentative non exécutée ou non réconciliable`,
      { exposeMessage: true },
    );
  }

  const plan = JSON.parse(row.planJson) as CursorExecutionPlan;
  if (input.expectedContractFingerprint !== plan.contractFingerprint) {
    throw new StudioError("INVALID_REQUEST", "Handoff fingerprint contrat incompatible", {
      exposeMessage: true,
    });
  }
  if (input.expectedContractFingerprint !== row.fingerprint) {
    throw new StudioError("INVALID_REQUEST", "Handoff ≠ empreinte tentative", {
      exposeMessage: true,
    });
  }

  let live: CursorLiveProjection = {};
  try {
    live = JSON.parse(row.resultJson || "{}") as CursorLiveProjection;
  } catch {
    live = {};
  }

  const provenance: HandoffProvenance = input.provenance ?? {
    acquisition: "CLIENT_DECLARED",
  };
  const limits: string[] = [];

  // Bind to observed executor identities when present.
  if (live.agentId && provenance.declaredExecutorId && provenance.declaredExecutorId !== live.agentId) {
    throw new StudioError(
      "INVALID_REQUEST",
      "Exécuteur déclaré ≠ agent observé — provenance refusée",
      { exposeMessage: true },
    );
  }
  if (live.runId && provenance.observedRunId && provenance.observedRunId !== live.runId) {
    throw new StudioError(
      "INVALID_REQUEST",
      "runId déclaré ≠ run observé — provenance refusée",
      { exposeMessage: true },
    );
  }
  if (provenance.acquisition === "CLIENT_DECLARED") {
    limits.push("PROVENANCE_CLIENT_DECLARED — hash ≠ preuve d'auteur Cursor");
  }
  if (provenance.acquisition === "SCRIPTED_ADAPTER") {
    limits.push("PROVENANCE_SCRIPTED — pas une preuve LIVE");
  }
  if (!live.agentId && !live.runId && provenance.acquisition !== "SCRIPTED_ADAPTER") {
    limits.push("NO_OBSERVED_RUN_IDENTITY — rapport non rattaché à un run observé");
  }

  const existing = (
    await db
      .select()
      .from(realizationHandoffs)
      .where(eq(realizationHandoffs.attemptId, row.id))
      .limit(1)
  )[0];
  if (existing) {
    throw new StudioError("CONFLICT", "Handoff déjà lié à cette tentative — immuable", {
      exposeMessage: true,
    });
  }

  const report = input.reportMarkdown ?? "";
  let status: "RECEIVED" | "INCOMPLETE" | "REJECTED" = "RECEIVED";
  if (!report.trim()) {
    status = "INCOMPLETE";
    limits.push("REPORT_EMPTY");
  }
  // Long but incomplete inventory cannot succeed.
  if (!inventoryComplete(input.manifest)) {
    status = "INCOMPLETE";
    limits.push("INVENTORY_INCOMPLETE");
    if (report.trim().length >= 200) {
      limits.push("LONG_REPORT_WITHOUT_COMPLETE_INVENTORY — succès refusé");
    }
  }
  if (report.includes("BEGIN PRIVATE KEY") || /\bsk-[A-Za-z0-9]{20,}\b/.test(report)) {
    status = "REJECTED";
    limits.push("SECRET_MATERIAL_DETECTED");
  }
  // Hostile instruction markers in report body — treat as data, never authority.
  if (/ignore\s+previous\s+instructions/i.test(report) || /<\/?system>/i.test(report)) {
    limits.push("HOSTILE_CONTENT_MARKERS — rapport traité comme données non instructions");
  }

  const integrityHash = handoffIntegrityHash({
    attemptId: row.id,
    contractFingerprint: plan.contractFingerprint,
    reportMarkdown: report,
    manifest: input.manifest,
  });

  const id = newId("rhf");
  const now = new Date();
  const enrichedManifest = {
    ...input.manifest,
    _provenance: provenance,
    _observedAgentId: live.agentId ?? null,
    _observedRunId: live.runId ?? null,
  };

  await db.insert(realizationHandoffs).values({
    id,
    attemptId: row.id,
    projectId: input.projectId,
    pilotId: input.pilotId,
    contractId: plan.contractId,
    contractVersion: plan.contractVersion,
    contractFingerprint: plan.contractFingerprint,
    status,
    reportMarkdown: status === "REJECTED" ? null : report,
    manifestJson: JSON.stringify(enrichedManifest),
    integrityHash,
    sourceKind: provenance.acquisition === "SCRIPTED_ADAPTER" ? "SCRIPTED" : "CURSOR",
    limitsJson: JSON.stringify(limits),
    createdAt: now,
    updatedAt: now,
  });

  live.reportStatus =
    status === "RECEIVED" ? "RECEIVED" : status === "REJECTED" ? "REJECTED" : "INCOMPLETE";
  live.limits = [...(live.limits ?? []), ...limits];
  await db
    .update(effectAttempts)
    .set({ resultJson: JSON.stringify(live), updatedAt: now })
    .where(eq(effectAttempts.id, row.id));

  return {
    handoffId: id,
    attemptId: row.id,
    status,
    integrityHash,
    limits,
    provenance,
  };
}

export async function getRealizationHandoff(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
}) {
  const row = (
    await db
      .select()
      .from(realizationHandoffs)
      .where(
        and(
          eq(realizationHandoffs.attemptId, input.attemptId),
          eq(realizationHandoffs.projectId, input.projectId),
          eq(realizationHandoffs.pilotId, input.pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!row) {
    return {
      status: "MISSING" as const,
      handoff: null,
      limits: ["REPORT_MISSING"],
    };
  }
  return {
    status: row.status,
    handoff: {
      id: row.id,
      attemptId: row.attemptId,
      contractId: row.contractId,
      contractVersion: row.contractVersion,
      contractFingerprint: row.contractFingerprint,
      status: row.status,
      reportMarkdown: row.reportMarkdown,
      manifest: JSON.parse(row.manifestJson || "{}") as HandoffManifest,
      integrityHash: row.integrityHash,
      limits: JSON.parse(row.limitsJson || "[]") as string[],
      createdAt: row.createdAt.toISOString(),
    },
    limits: JSON.parse(row.limitsJson || "[]") as string[],
  };
}
