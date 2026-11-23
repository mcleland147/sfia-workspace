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

export async function ingestRealizationHandoff(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
  reportMarkdown: string;
  manifest: HandoffManifest;
  expectedContractFingerprint: string;
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
  const limits: string[] = [];
  let status: "RECEIVED" | "INCOMPLETE" | "REJECTED" = "RECEIVED";
  if (!report.trim()) {
    status = "INCOMPLETE";
    limits.push("REPORT_EMPTY");
  }
  if (!inventoryComplete(input.manifest) && report.trim().length < 200) {
    status = "INCOMPLETE";
    limits.push("INVENTORY_OR_REPORT_INSUFFICIENT");
  }
  if (report.includes("BEGIN PRIVATE KEY") || /\bsk-[A-Za-z0-9]{20,}\b/.test(report)) {
    status = "REJECTED";
    limits.push("SECRET_MATERIAL_DETECTED");
  }

  const integrityHash = handoffIntegrityHash({
    attemptId: row.id,
    contractFingerprint: plan.contractFingerprint,
    reportMarkdown: report,
    manifest: input.manifest,
  });

  const id = newId("rhf");
  const now = new Date();
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
    manifestJson: JSON.stringify(input.manifest),
    integrityHash,
    sourceKind: "CURSOR",
    limitsJson: JSON.stringify(limits),
    createdAt: now,
    updatedAt: now,
  });

  let live: CursorLiveProjection = {};
  try {
    live = JSON.parse(row.resultJson || "{}") as CursorLiveProjection;
  } catch {
    live = {};
  }
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
