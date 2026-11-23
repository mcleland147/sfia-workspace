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
  // Refuse silent truncation markers in storage path.
  if (body.instructionText.includes("\u0000")) {
    throw new StudioError("INVALID_REQUEST", "Instruction technique invalide", { exposeMessage: true });
  }
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
}) {
  await assertProject(input.pilotId, input.projectId);
  assertContractBodyComplete(input.body);
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
    status: "READY",
    title: input.body.title,
    engagementsJson: JSON.stringify(input.body.engagements),
    voletsJson: JSON.stringify(input.body.volets),
    instructionText: input.body.instructionText,
    risksJson: JSON.stringify(input.body.risks),
    exclusionsJson: JSON.stringify(input.body.exclusions),
    acceptanceJson: JSON.stringify(input.body.acceptance),
    executorJson: JSON.stringify(input.body.executor),
    stopConditionsJson: JSON.stringify(input.body.stopConditions),
    gitScopeJson: input.body.gitScope ? JSON.stringify(input.body.gitScope) : null,
    sourceTurnCommandId: input.sourceTurnCommandId ?? null,
    supersedesContractId: input.supersedesContractId ?? null,
    createdAt: now,
    updatedAt: now,
  });

  return {
    contractId: id,
    contractKey: input.contractKey,
    version,
    fingerprint,
    instructionFingerprint: instructionFp,
    status: "READY" as const,
  };
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
    reversibilityLimits: [],
    gitScope: row.gitScopeJson
      ? (JSON.parse(row.gitScopeJson) as TechnicalContractBody["gitScope"])
      : null,
  };
  return {
    id: row.id,
    contractKey: row.contractKey,
    version: row.version,
    fingerprint: row.fingerprint,
    instructionFingerprint: instructionFingerprint(row.instructionText),
    status: row.status,
    body,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  };
}
