import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { projects, technicalContracts } from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";
import type { TechnicalContractBody } from "./types";
import {
  instructionFingerprint,
  technicalContractFingerprint,
} from "./technical-contract-fingerprint";

export {
  instructionFingerprint,
  isMaterialContractChange,
  technicalContractFingerprint,
} from "./technical-contract-fingerprint";

export type ContractReadiness = {
  documentComplete: boolean;
  sourcesSufficient: boolean;
  unknownRestrictions: string[];
  blockedReasons: string[];
  ready: boolean;
};

export function assertContractBodyComplete(body: TechnicalContractBody): void {
  const e = body.engagements;
  if (!e?.willDo?.trim() || !e.willNotDo?.trim() || !e.expectedResult?.trim() || !e.pilotControl?.trim()) {
    throw new StudioError("INVALID_REQUEST", "Quatre engagements incomplets", { exposeMessage: true });
  }
  const v = body.volets;
  if (
    !v?.mission?.trim() ||
    !v.perimeter?.trim() ||
    !v.capabilitiesAuthority?.trim() ||
    !v.stopConditions?.trim() ||
    !v.proofsSources?.trim() ||
    !v.integrity?.trim()
  ) {
    throw new StudioError("INVALID_REQUEST", "Six volets incomplets", { exposeMessage: true });
  }
  if (!body.instructionText || body.instructionText.length === 0) {
    throw new StudioError("INVALID_REQUEST", "Instruction technique vide", { exposeMessage: true });
  }
  if (body.instructionText.includes("\u0000")) {
    throw new StudioError("INVALID_REQUEST", "Instruction technique invalide", { exposeMessage: true });
  }
  if (!Array.isArray(body.reversibilityLimits)) {
    throw new StudioError("INVALID_REQUEST", "reversibilityLimits requis", { exposeMessage: true });
  }
}

/**
 * Document completeness ≠ authorization readiness.
 * READY requires no unknown determinant restrictions and an explicit readiness gate.
 */
export function evaluateContractReadiness(input: {
  body: TechnicalContractBody;
  unknownRestrictions?: string[];
  sourcesSufficient?: boolean;
}): ContractReadiness {
  const unknownRestrictions = (input.unknownRestrictions ?? []).filter((r) => r.trim());
  const documentComplete = (() => {
    try {
      assertContractBodyComplete(input.body);
      return true;
    } catch {
      return false;
    }
  })();
  const sourcesSufficient = input.sourcesSufficient !== false;
  const blockedReasons: string[] = [];
  if (!documentComplete) blockedReasons.push("DOCUMENT_INCOMPLETE");
  if (!sourcesSufficient) blockedReasons.push("SOURCES_INSUFFICIENT");
  if (unknownRestrictions.length > 0) {
    blockedReasons.push(`UNKNOWN_RESTRICTIONS:${unknownRestrictions.join(",")}`);
  }
  return {
    documentComplete,
    sourcesSufficient,
    unknownRestrictions,
    blockedReasons,
    ready: blockedReasons.length === 0,
  };
}

async function assertProject(pilotId: string, projectId: string) {
  const p = (
    await db
      .select({ id: projects.id })
      .from(projects)
      .where(and(eq(projects.id, projectId), eq(projects.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!p) throw new StudioError("NOT_FOUND", "Projet introuvable");
}

export async function createTechnicalContract(input: {
  pilotId: string;
  projectId: string;
  preparationId?: string | null;
  contractKey: string;
  body: TechnicalContractBody;
  sourceTurnCommandId?: string | null;
  supersedesContractId?: string | null;
  /** When false or omitted with unknowns → DRAFT even if document is complete. */
  markReady?: boolean;
  unknownRestrictions?: string[];
  sourcesSufficient?: boolean;
  cognitiveWorkId?: string | null;
  cognitiveRevision?: number | null;
}) {
  await assertProject(input.pilotId, input.projectId);
  assertContractBodyComplete(input.body);
  const readiness = evaluateContractReadiness({
    body: input.body,
    unknownRestrictions: input.unknownRestrictions,
    sourcesSufficient: input.sourcesSufficient,
  });
  // Explicit markReady required for READY — syntax alone never promotes.
  const status =
    input.markReady === true && readiness.ready ? "READY" : "DRAFT";
  if (input.markReady === true && !readiness.ready) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      `Contrat non prêt: ${readiness.blockedReasons.join("; ")}`,
      { exposeMessage: true },
    );
  }

  const fingerprint = technicalContractFingerprint(input.body);
  const instructionFp = instructionFingerprint(input.body.instructionText);

  const latest = (
    await db
      .select({ version: technicalContracts.version })
      .from(technicalContracts)
      .where(
        and(
          eq(technicalContracts.projectId, input.projectId),
          eq(technicalContracts.contractKey, input.contractKey),
        ),
      )
      .orderBy(desc(technicalContracts.version))
      .limit(1)
  )[0];
  const version = (latest?.version ?? 0) + 1;
  const id = newId("tctr");
  const now = new Date();
  await db.insert(technicalContracts).values({
    id,
    projectId: input.projectId,
    pilotId: input.pilotId,
    preparationId: input.preparationId ?? null,
    contractKey: input.contractKey,
    version,
    fingerprint,
    status,
    title: input.body.title,
    engagementsJson: JSON.stringify(input.body.engagements),
    voletsJson: JSON.stringify(input.body.volets),
    instructionText: input.body.instructionText,
    risksJson: JSON.stringify(input.body.risks),
    exclusionsJson: JSON.stringify(input.body.exclusions),
    acceptanceJson: JSON.stringify(input.body.acceptance),
    executorJson: JSON.stringify(input.body.executor),
    stopConditionsJson: JSON.stringify(input.body.stopConditions),
    reversibilityLimitsJson: JSON.stringify(input.body.reversibilityLimits ?? []),
    gitScopeJson: input.body.gitScope ? JSON.stringify(input.body.gitScope) : null,
    readinessJson: JSON.stringify({
      ...readiness,
      cognitiveFiliation: {
        workId: input.cognitiveWorkId ?? null,
        revision: input.cognitiveRevision ?? null,
        preparationId: input.preparationId ?? null,
      },
    }),
    sourceTurnCommandId: input.sourceTurnCommandId ?? null,
    supersedesContractId: input.supersedesContractId ?? null,
    cognitiveWorkId: input.cognitiveWorkId ?? null,
    cognitiveRevision: input.cognitiveRevision ?? null,
    createdAt: now,
    updatedAt: now,
  });

  return {
    contractId: id,
    contractKey: input.contractKey,
    version,
    fingerprint,
    instructionFingerprint: instructionFp,
    status: status as "READY" | "DRAFT",
    readiness,
    cognitiveWorkId: input.cognitiveWorkId ?? null,
    cognitiveRevision: input.cognitiveRevision ?? null,
  };
}

/** Promote DRAFT → READY after D3/D6 sufficiency re-check. */
export async function markTechnicalContractReady(input: {
  pilotId: string;
  projectId: string;
  contractId: string;
  unknownRestrictions?: string[];
  sourcesSufficient?: boolean;
}) {
  const row = await getTechnicalContract(input);
  const readiness = evaluateContractReadiness({
    body: row.body,
    unknownRestrictions: input.unknownRestrictions,
    sourcesSufficient: input.sourcesSufficient,
  });
  if (!readiness.ready) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      `Promotion READY refusée: ${readiness.blockedReasons.join("; ")}`,
      { exposeMessage: true },
    );
  }
  // Recompute fingerprint from persisted body — refuse if storage drifted.
  const recomputed = technicalContractFingerprint(row.body);
  if (recomputed !== row.fingerprint) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "Empreinte ≠ représentation persistée — nouvelle version requise",
      { exposeMessage: true },
    );
  }
  await db
    .update(technicalContracts)
    .set({
      status: "READY",
      readinessJson: JSON.stringify(readiness),
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(technicalContracts.id, input.contractId),
        eq(technicalContracts.projectId, input.projectId),
        eq(technicalContracts.pilotId, input.pilotId),
        eq(technicalContracts.status, "DRAFT"),
      ),
    );
  return { contractId: input.contractId, status: "READY" as const, readiness, fingerprint: row.fingerprint };
}

export async function getTechnicalContract(input: {
  pilotId: string;
  projectId: string;
  contractId: string;
}) {
  await assertProject(input.pilotId, input.projectId);
  const row = (
    await db
      .select()
      .from(technicalContracts)
      .where(
        and(
          eq(technicalContracts.id, input.contractId),
          eq(technicalContracts.projectId, input.projectId),
          eq(technicalContracts.pilotId, input.pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!row) throw new StudioError("NOT_FOUND", "Contrat technique introuvable");
  return rowToContract(row);
}

export async function listTechnicalContracts(input: {
  pilotId: string;
  projectId: string;
  contractKey?: string;
}) {
  await assertProject(input.pilotId, input.projectId);
  const rows = await db
    .select()
    .from(technicalContracts)
    .where(
      and(
        eq(technicalContracts.projectId, input.projectId),
        eq(technicalContracts.pilotId, input.pilotId),
        ...(input.contractKey
          ? [eq(technicalContracts.contractKey, input.contractKey)]
          : []),
      ),
    )
    .orderBy(desc(technicalContracts.createdAt));
  return rows.map(rowToContract);
}

function rowToContract(row: typeof technicalContracts.$inferSelect) {
  const body: TechnicalContractBody = {
    title: row.title,
    engagements: JSON.parse(row.engagementsJson) as TechnicalContractBody["engagements"],
    volets: JSON.parse(row.voletsJson) as TechnicalContractBody["volets"],
    instructionText: row.instructionText,
    risks: JSON.parse(row.risksJson || "[]") as string[],
    exclusions: JSON.parse(row.exclusionsJson || "[]") as string[],
    acceptance: JSON.parse(row.acceptanceJson || "{}") as TechnicalContractBody["acceptance"],
    executor: JSON.parse(row.executorJson || "{}") as TechnicalContractBody["executor"],
    stopConditions: JSON.parse(row.stopConditionsJson || "[]") as string[],
    reversibilityLimits: JSON.parse(row.reversibilityLimitsJson || "[]") as string[],
    gitScope: row.gitScopeJson
      ? (JSON.parse(row.gitScopeJson) as TechnicalContractBody["gitScope"])
      : null,
  };
  let readiness: ContractReadiness | null = null;
  if (row.readinessJson) {
    try {
      readiness = JSON.parse(row.readinessJson) as ContractReadiness;
    } catch {
      readiness = null;
    }
  }
  return {
    id: row.id,
    contractKey: row.contractKey,
    version: row.version,
    fingerprint: row.fingerprint,
    instructionFingerprint: instructionFingerprint(row.instructionText),
    status: row.status,
    preparationId: row.preparationId,
    cognitiveWorkId: row.cognitiveWorkId ?? null,
    cognitiveRevision: row.cognitiveRevision ?? null,
    body,
    readiness,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  };
}
