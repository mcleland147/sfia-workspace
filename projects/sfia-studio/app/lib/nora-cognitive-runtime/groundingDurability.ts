/**
 * MW4-S01 — Cross-turn grounding durability (non-authoritative Session refs).
 *
 * Remembered Evidence IDs have ZERO authority until re-resolved against
 * Studio/OA Evidence on the current turn. Narrative ≠ Evidence.
 * Compacted Memory B summary ≠ Evidence.
 *
 * Stored in existing session_items.item_json — no new table.
 * MUST be filtered from Runner replay (same class as compaction markers).
 */

import type { AgentInputItem } from "@openai/agents";
import type { ContradictionEvidencePointer } from "./contradictionDisposition";
import type { ProductSqliteSession } from "./productSqliteSession";

export const GROUNDING_REFS_TYPE = "sfia_grounding_refs_v1" as const;

export type GroundingEvidenceRef = {
  evidenceId: string;
  rememberedAtIso: string;
};

export type GroundingReadCoverageKind =
  | "full"
  | "partial"
  | "failed"
  | "denied"
  | "absent";

export type GroundingReadCoverageRef = {
  pathOrRef: string;
  coverage: GroundingReadCoverageKind;
  rememberedAtIso: string;
};

/** Non-cognitive Session marker — never Truth C / Evidence authority. */
export type GroundingRefsRecord = {
  type: typeof GROUNDING_REFS_TYPE;
  version: 1;
  nonAuthoritative: true;
  projectId: string;
  evidenceRefs: GroundingEvidenceRef[];
  readCoverage?: GroundingReadCoverageRef[];
};

export type RememberedEvidenceDowngradeReason =
  | "not_attributable"
  | "unavailable_status"
  | "missing_source"
  | "project_mismatch"
  | "rejected_or_superseded";

export type RememberedEvidenceMissingReason =
  | "not_found"
  | "blank_id"
  | "project_isolation_reject"
  | "fabricated_without_resolver_hit"
  /** CORR-01E — repository/lookup failure ≠ fabricated / not found. */
  | "resolution_failed";

export type RememberedEvidenceResolution = {
  rememberedIds: string[];
  valid: ContradictionEvidencePointer[];
  downgraded: Array<{
    evidenceId: string;
    reason: RememberedEvidenceDowngradeReason;
    pointer: ContradictionEvidencePointer | null;
  }>;
  missing: Array<{
    evidenceId: string;
    reason: RememberedEvidenceMissingReason;
  }>;
  /**
   * CORR-01D — optional structural claim→Evidence bindings.
   * Absence means claim-specific provenance is UNBOUND (Evidence set ≠ claim map).
   */
  claimSourceBindings?: Array<{ claimId: string; evidenceId: string }>;
};

export type Mw4GroundingTurnSurface = {
  rememberedIds: string[];
  validIds: string[];
  downgradedIds: string[];
  missingIds: string[];
  disclosure: string;
  readCoverageOverall?: "full" | "partial" | "failed" | "denied" | "absent" | "none";
  readCoverageDisclosure?: string | null;
  /** CORR-01D — claim-specific provenance state. */
  claimSpecificProvenance?: "bound" | "unbound";
  claimSpecificDisclosure?: string | null;
};

export function isGroundingRefsRecord(
  item: unknown,
): item is GroundingRefsRecord {
  return (
    typeof item === "object" &&
    item !== null &&
    (item as GroundingRefsRecord).type === GROUNDING_REFS_TYPE
  );
}

/** Session markers that MUST never enter Runner Memory B replay. */
export function isNonReplaySessionMarker(item: unknown): boolean {
  if (!item || typeof item !== "object") return false;
  const type = (item as { type?: string }).type;
  return (
    type === GROUNDING_REFS_TYPE || type === "sfia_memory_b_compaction"
  );
}

export function parseStoredGroundingRefsRecord(
  item: AgentInputItem | unknown,
): GroundingRefsRecord | null {
  if (!isGroundingRefsRecord(item)) return null;
  const projectId =
    typeof item.projectId === "string" ? item.projectId.trim() : "";
  if (!projectId) return null;
  const evidenceRefs = Array.isArray(item.evidenceRefs)
    ? item.evidenceRefs
        .filter(
          (r): r is GroundingEvidenceRef =>
            typeof r === "object" &&
            r !== null &&
            typeof (r as GroundingEvidenceRef).evidenceId === "string" &&
            (r as GroundingEvidenceRef).evidenceId.trim().length > 0,
        )
        .map((r) => ({
          evidenceId: r.evidenceId.trim(),
          rememberedAtIso:
            typeof r.rememberedAtIso === "string" && r.rememberedAtIso.trim()
              ? r.rememberedAtIso
              : new Date(0).toISOString(),
        }))
    : [];
  const readCoverage = Array.isArray(item.readCoverage)
    ? item.readCoverage
        .filter(
          (r): r is GroundingReadCoverageRef =>
            typeof r === "object" &&
            r !== null &&
            typeof (r as GroundingReadCoverageRef).pathOrRef === "string" &&
            (r as GroundingReadCoverageRef).pathOrRef.trim().length > 0,
        )
        .map((r) => ({
          pathOrRef: r.pathOrRef.trim(),
          coverage: r.coverage,
          rememberedAtIso:
            typeof r.rememberedAtIso === "string" && r.rememberedAtIso.trim()
              ? r.rememberedAtIso
              : new Date(0).toISOString(),
        }))
    : undefined;
  return {
    type: GROUNDING_REFS_TYPE,
    version: 1,
    nonAuthoritative: true,
    projectId,
    evidenceRefs,
    readCoverage,
  };
}

export async function loadGroundingRefsFromSession(
  session: ProductSqliteSession,
): Promise<GroundingRefsRecord | null> {
  const rows = session.listItemRows();
  let found: GroundingRefsRecord | null = null;
  for (const row of rows) {
    try {
      const parsed = JSON.parse(row.item_json) as unknown;
      const record = parseStoredGroundingRefsRecord(parsed);
      if (record) found = record;
    } catch {
      /* ignore malformed */
    }
  }
  return found;
}

/**
 * Fail-closed project isolation: record.projectId must match current project.
 * Wrong project → reject (treat as no durable grounding).
 */
export function acceptGroundingRefsForProject(
  record: GroundingRefsRecord | null,
  currentProjectId: string,
): GroundingRefsRecord | null {
  if (!record) return null;
  const current = currentProjectId.trim();
  if (!current) return null;
  if (record.projectId.trim() !== current) return null;
  return record;
}

export function groundingRecordToStoredItem(
  record: GroundingRefsRecord,
): AgentInputItem {
  return record as unknown as AgentInputItem;
}

/**
 * Upsert single grounding marker; preserve compaction + conversation items.
 */
export async function upsertGroundingRefsRecord(
  session: ProductSqliteSession,
  record: GroundingRefsRecord,
): Promise<void> {
  const rows = session.listItemRows();
  const preserved: AgentInputItem[] = [];
  let compaction: AgentInputItem | null = null;

  for (const row of rows) {
    const parsed = JSON.parse(row.item_json) as AgentInputItem;
    if (isGroundingRefsRecord(parsed)) {
      continue;
    }
    const type =
      parsed && typeof parsed === "object"
        ? (parsed as { type?: string }).type
        : undefined;
    if (type === "sfia_memory_b_compaction") {
      compaction = parsed;
      continue;
    }
    preserved.push(parsed);
  }

  const next: AgentInputItem[] = [];
  if (compaction) next.push(compaction);
  next.push(groundingRecordToStoredItem(record));
  next.push(...preserved);
  await session.replaceItemsAtomically(next);
}

export async function rememberEvidenceIds(
  session: ProductSqliteSession,
  projectId: string,
  ids: string[],
  nowIso?: string,
): Promise<GroundingRefsRecord> {
  const project = projectId.trim();
  if (!project) {
    throw new Error("MW4_GROUNDING_REQUIRES_PROJECT_ID");
  }
  // CORR-01F — production default is wall-clock ISO; tests inject nowIso.
  const iso = nowIso ?? new Date().toISOString();
  const prior = acceptGroundingRefsForProject(
    await loadGroundingRefsFromSession(session),
    project,
  );
  const byId = new Map<string, GroundingEvidenceRef>();
  for (const ref of prior?.evidenceRefs ?? []) {
    byId.set(ref.evidenceId, ref);
  }
  for (const raw of ids) {
    const evidenceId = raw.trim();
    if (!evidenceId) continue;
    // Never treat fabricated narrative IDs as authoritative here —
    // persistence is non-authoritative; re-resolve is mandatory.
    byId.set(evidenceId, {
      evidenceId,
      rememberedAtIso: iso,
    });
  }
  const record: GroundingRefsRecord = {
    type: GROUNDING_REFS_TYPE,
    version: 1,
    nonAuthoritative: true,
    projectId: project,
    evidenceRefs: [...byId.values()],
    readCoverage: prior?.readCoverage,
  };
  await upsertGroundingRefsRecord(session, record);
  return record;
}

export async function rememberReadCoverage(
  session: ProductSqliteSession,
  projectId: string,
  coverage: Array<{ pathOrRef: string; coverage: GroundingReadCoverageKind }>,
  nowIso?: string,
): Promise<GroundingRefsRecord> {
  const project = projectId.trim();
  if (!project) {
    throw new Error("MW4_GROUNDING_REQUIRES_PROJECT_ID");
  }
  // CORR-01F — production default is wall-clock ISO; tests inject nowIso.
  const iso = nowIso ?? new Date().toISOString();
  const prior = acceptGroundingRefsForProject(
    await loadGroundingRefsFromSession(session),
    project,
  );
  const byPath = new Map<string, GroundingReadCoverageRef>();
  for (const ref of prior?.readCoverage ?? []) {
    byPath.set(ref.pathOrRef, ref);
  }
  for (const item of coverage) {
    const pathOrRef = item.pathOrRef.trim();
    if (!pathOrRef) continue;
    byPath.set(pathOrRef, {
      pathOrRef,
      coverage: item.coverage,
      rememberedAtIso: iso,
    });
  }
  const record: GroundingRefsRecord = {
    type: GROUNDING_REFS_TYPE,
    version: 1,
    nonAuthoritative: true,
    projectId: project,
    evidenceRefs: prior?.evidenceRefs ?? [],
    readCoverage: [...byPath.values()],
  };
  await upsertGroundingRefsRecord(session, record);
  return record;
}

/**
 * Classify remembered IDs against already-resolved Studio pointers.
 * Fabricated / unknown IDs without a resolver hit → missing (never valid).
 */
export function classifyRememberedEvidence(input: {
  rememberedIds: string[];
  resolvedPointers: ContradictionEvidencePointer[];
  /** When true, blank/unknown IDs are tagged as fabricated_without_resolver_hit. */
  treatUnresolvedAsFabricated?: boolean;
}): RememberedEvidenceResolution {
  const rememberedIds = input.rememberedIds
    .map((id) => id.trim())
    .filter(Boolean);
  const byId = new Map(
    input.resolvedPointers.map((p) => [p.evidenceId.trim(), p] as const),
  );
  const valid: ContradictionEvidencePointer[] = [];
  const downgraded: RememberedEvidenceResolution["downgraded"] = [];
  const missing: RememberedEvidenceResolution["missing"] = [];

  for (const evidenceId of rememberedIds) {
    if (!evidenceId) {
      missing.push({ evidenceId: "", reason: "blank_id" });
      continue;
    }
    const pointer = byId.get(evidenceId);
    if (!pointer) {
      missing.push({
        evidenceId,
        reason: input.treatUnresolvedAsFabricated
          ? "fabricated_without_resolver_hit"
          : "not_found",
      });
      continue;
    }
    if (pointer.fabricated === true) {
      missing.push({
        evidenceId,
        reason: "fabricated_without_resolver_hit",
      });
      continue;
    }
    if (!pointer.attributable) {
      downgraded.push({
        evidenceId,
        reason:
          pointer.sourceId === "unattributed"
            ? "missing_source"
            : "not_attributable",
        pointer,
      });
      continue;
    }
    valid.push(pointer);
  }

  return { rememberedIds, valid, downgraded, missing };
}

export function buildGroundingCognitiveDisclosure(
  resolution: RememberedEvidenceResolution,
): string {
  const lines = [
    "=== GROUNDING DURABILITY (MW4-S01) ===",
    "Remembered Evidence IDs are non-authoritative Session continuity only.",
    "They have ZERO authority until re-resolved against Studio/OA Evidence on this turn.",
    "Narrative text ≠ Evidence. Compacted Memory B summary ≠ Evidence.",
    "Do not treat conversational recall, fabricated IDs, or prior narrative citations as attributable Evidence.",
  ];

  const validIds = resolution.valid.map((p) => p.evidenceId);
  const downgradedIds = resolution.downgraded.map((d) => d.evidenceId);
  const missingIds = resolution.missing.map((m) => m.evidenceId);

  if (validIds.length > 0) {
    lines.push(
      `Currently attributable Evidence (re-resolved): ${validIds.join(", ")}`,
    );
  } else {
    lines.push("Currently attributable Evidence (re-resolved): (none)");
  }

  if (downgradedIds.length > 0) {
    const detail = resolution.downgraded
      .map((d) => `${d.evidenceId} (${d.reason})`)
      .join("; ");
    lines.push(
      `Withdrawn / downgraded (re-resolved but not attributable): ${detail}`,
    );
  }

  if (missingIds.length > 0) {
    const detail = resolution.missing
      .map((m) => `${m.evidenceId || "(blank)"} (${m.reason})`)
      .join("; ");
    lines.push(
      `Missing / not re-resolvable (do not cite as Evidence): ${detail}`,
    );
    if (resolution.missing.some((m) => m.reason === "resolution_failed")) {
      lines.push(
        "RESOLUTION_FAILED: repository/lookup unverifiable this turn — fail closed; do NOT label as fabricated merely because resolution failed.",
      );
    }
  }

  // CORR-01D — Evidence ID set continuity ≠ claim-specific provenance.
  lines.push(buildClaimSpecificProvenanceDisclosure(resolution.claimSourceBindings));

  if (
    resolution.rememberedIds.length === 0 &&
    validIds.length === 0 &&
    downgradedIds.length === 0 &&
    missingIds.length === 0
  ) {
    return "";
  }

  return lines.join("\n");
}

/**
 * CORR-01D — claim↔source honesty.
 * Without structural bindings, Evidence set continuity must not masquerade
 * as claim-specific provenance.
 */
export function buildClaimSpecificProvenanceDisclosure(
  bindings?: Array<{ claimId: string; evidenceId: string }> | null,
): string {
  const lines = [
    "=== CLAIM-SPECIFIC PROVENANCE (MW4-S01 / CORR-01D) ===",
    "Remembered Evidence ID set continuity ≠ claim→source mapping.",
  ];
  const clean = (bindings ?? [])
    .map((b) => ({
      claimId: b.claimId.trim(),
      evidenceId: b.evidenceId.trim(),
    }))
    .filter((b) => b.claimId && b.evidenceId);
  if (clean.length === 0) {
    lines.push(
      "Claim-specific provenance: UNBOUND / NOT RECONSTRUCTABLE.",
    );
    lines.push(
      "Do not infer which Evidence supported which claim from narrative order, model recollection, or Evidence set membership alone.",
    );
    lines.push(
      "Downgrade claim-specific assertions or request revalidation/reread until a structural binding is established and re-resolved.",
    );
  } else {
    lines.push("Claim-specific provenance: BOUND (structural, non-authoritative until re-resolved).");
    for (const b of clean) {
      lines.push(`- claim ${b.claimId} → Evidence ${b.evidenceId} (must be re-resolved before use)`);
    }
  }
  return lines.join("\n");
}

export function appendGroundingCognitiveDisclosure(
  systemInstructions: string,
  disclosure: string,
): string {
  const block = disclosure.trim();
  if (!block) return systemInstructions;
  return `${systemInstructions.trim()}\n\n${block}`;
}

export function toMw4GroundingTurnSurface(
  resolution: RememberedEvidenceResolution,
  opts?: {
    readCoverageOverall?: Mw4GroundingTurnSurface["readCoverageOverall"];
    readCoverageDisclosure?: string | null;
  },
): Mw4GroundingTurnSurface {
  const bindings = resolution.claimSourceBindings ?? [];
  const claimSpecificProvenance =
    bindings.length > 0 ? ("bound" as const) : ("unbound" as const);
  return {
    rememberedIds: [...resolution.rememberedIds],
    validIds: resolution.valid.map((p) => p.evidenceId),
    downgradedIds: resolution.downgraded.map((d) => d.evidenceId),
    missingIds: resolution.missing.map((m) => m.evidenceId),
    disclosure: buildGroundingCognitiveDisclosure(resolution),
    readCoverageOverall: opts?.readCoverageOverall,
    readCoverageDisclosure: opts?.readCoverageDisclosure ?? null,
    claimSpecificProvenance,
    claimSpecificDisclosure: buildClaimSpecificProvenanceDisclosure(bindings),
  };
}
