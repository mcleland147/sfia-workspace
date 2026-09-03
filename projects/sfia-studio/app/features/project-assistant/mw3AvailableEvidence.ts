/**
 * MW3 — resolve claimed Evidence IDs against actual OA Evidence,
 * scoped to the current Project.
 *
 * Fake/tests may substitute repository storage.
 * Project-scope filtering, attribution mapping, and freshness metadata
 * always go through mapOaEvidenceForProject.
 *
 * MW4 — resolveRememberedEvidence / resolveEvidencePointers reuse the same
 * lookup + mapOaEvidenceForProject path (zero authority until re-resolved).
 */
import type { ContradictionEvidencePointer } from "@/lib/nora-cognitive-runtime";
import {
  classifyRememberedEvidence,
  type RememberedEvidenceResolution,
} from "@/lib/nora-cognitive-runtime/groundingDurability";
import type { Evidence } from "@/lib/oa/evidence-review/domain/types";
// vertical-slice-runtime is server-only: load lazily inside lookupEvidenceRecord
// so project-assistant modules that re-export resolvers remain importable under
// jsdom unit tests (orchestrateTurn.test.ts).

export type Mw3TestEvidenceCatalog = {
  projectId: string;
  evidence: Evidence[];
};

let testCatalog: Mw3TestEvidenceCatalog | null = null;

/** Test-only Fake Evidence storage. Never a client DTO field. */
export function setMw3AvailableEvidenceForTests(
  catalog: Mw3TestEvidenceCatalog | null,
): void {
  testCatalog = catalog;
}

/**
 * Map OA Evidence onto a contradiction pointer only when bound to the
 * current Project. Returns null for missing/blank/mismatched project binding.
 */
export function mapOaEvidenceForProject(
  evidence: Evidence,
  currentProjectId: string,
): ContradictionEvidencePointer | null {
  const current = currentProjectId.trim();
  if (!current) return null;
  const bound = evidence.bindings?.projectId?.trim() ?? "";
  if (!bound || bound !== current) return null;

  const source = evidence.source?.trim() ?? "";
  const attributable =
    source.length > 0 &&
    (evidence.status === "available" || evidence.status === "verified");

  return {
    evidenceId: evidence.evidenceId,
    sourceId: source || "unattributed",
    domain: current,
    freshness: evidence.freshness ?? "unknown",
    attributable,
    fabricated: false,
  };
}

export type EvidenceLookupOutcome =
  | { kind: "found"; evidence: Evidence }
  | { kind: "not_found" }
  | {
      kind: "resolution_failed";
      reason: "repository_unavailable" | "repository_error";
    };

export type EvidencePointerLookupResult = {
  evidenceId: string;
  pointer: ContradictionEvidencePointer | null;
  /** Present when Evidence row existed but was not project-attributable. */
  rawStatus?: Evidence["status"];
  projectMismatch?: boolean;
  /** CORR-01E — lookup outcome (found / not_found / resolution_failed). */
  lookup: EvidenceLookupOutcome["kind"];
};

/**
 * Generalization of MW3 pointer resolve — returns one result per claimed ID.
 * MW3 wrapper filters to successful pointers only.
 */
export async function resolveEvidencePointers(input: {
  projectId: string;
  claimedEvidenceIds: string[];
}): Promise<EvidencePointerLookupResult[]> {
  const projectId = input.projectId.trim();
  const claimed = input.claimedEvidenceIds
    .map((id) => id.trim())
    .filter(Boolean);
  if (!projectId || claimed.length === 0) return [];

  const out: EvidencePointerLookupResult[] = [];
  for (const evidenceId of claimed) {
    const outcome = await lookupEvidenceRecord(evidenceId, projectId);
    if (outcome.kind === "resolution_failed") {
      out.push({
        evidenceId,
        pointer: null,
        lookup: "resolution_failed",
      });
      continue;
    }
    if (outcome.kind === "not_found") {
      out.push({ evidenceId, pointer: null, lookup: "not_found" });
      continue;
    }
    const evidence = outcome.evidence;
    const bound = evidence.bindings?.projectId?.trim() ?? "";
    if (!bound || bound !== projectId) {
      out.push({
        evidenceId,
        pointer: null,
        rawStatus: evidence.status,
        projectMismatch: true,
        lookup: "found",
      });
      continue;
    }
    const pointer = mapOaEvidenceForProject(evidence, projectId);
    out.push({
      evidenceId,
      pointer,
      rawStatus: evidence.status,
      projectMismatch: false,
      lookup: "found",
    });
  }
  return out;
}

export async function resolveAvailableContradictionPointers(input: {
  projectId: string;
  claimedEvidenceIds: string[];
}): Promise<ContradictionEvidencePointer[]> {
  const lookups = await resolveEvidencePointers(input);
  const resolved: ContradictionEvidencePointer[] = [];
  for (const row of lookups) {
    if (row.pointer) resolved.push(row.pointer);
  }
  return resolved;
}

/**
 * MW4-S01 — re-resolve remembered IDs; never accept fabricated narrative IDs
 * without a resolver hit. Cross-project mismatches → missing / isolation.
 */
export async function resolveRememberedEvidence(
  projectId: string,
  ids: string[],
): Promise<RememberedEvidenceResolution> {
  const project = projectId.trim();
  const rememberedIds = ids.map((id) => id.trim()).filter(Boolean);
  if (!project) {
    return {
      rememberedIds,
      valid: [],
      downgraded: [],
      missing: rememberedIds.map((evidenceId) => ({
        evidenceId,
        reason: "project_isolation_reject" as const,
      })),
    };
  }

  const lookups = await resolveEvidencePointers({
    projectId: project,
    claimedEvidenceIds: rememberedIds,
  });

  const pointers: ContradictionEvidencePointer[] = [];
  const missingExtra: RememberedEvidenceResolution["missing"] = [];
  const downgradedExtra: RememberedEvidenceResolution["downgraded"] = [];

  for (const row of lookups) {
    if (row.lookup === "resolution_failed") {
      missingExtra.push({
        evidenceId: row.evidenceId,
        reason: "resolution_failed",
      });
      continue;
    }
    if (row.projectMismatch) {
      missingExtra.push({
        evidenceId: row.evidenceId,
        reason: "project_isolation_reject",
      });
      continue;
    }
    if (!row.pointer) {
      // Fall through to classify as not_found / fabricated.
      continue;
    }
    // Downgrade non-attributable / withdrawn-like statuses explicitly.
    if (!row.pointer.attributable) {
      const reason =
        row.rawStatus === "unavailable" ||
        row.rawStatus === "rejected" ||
        row.rawStatus === "superseded" ||
        row.rawStatus === "stale" ||
        row.rawStatus === "incomplete"
          ? row.rawStatus === "rejected" || row.rawStatus === "superseded"
            ? ("rejected_or_superseded" as const)
            : ("unavailable_status" as const)
          : row.pointer.sourceId === "unattributed"
            ? ("missing_source" as const)
            : ("not_attributable" as const);
      downgradedExtra.push({
        evidenceId: row.evidenceId,
        reason,
        pointer: row.pointer,
      });
      continue;
    }
    pointers.push(row.pointer);
  }

  const classified = classifyRememberedEvidence({
    rememberedIds,
    resolvedPointers: pointers,
    treatUnresolvedAsFabricated: true,
  });

  // Merge explicit downgrades / project isolation that classify would miss
  // (because we withheld non-attributable pointers from the pointer list).
  const downgradedIds = new Set(downgradedExtra.map((d) => d.evidenceId));
  const missingIds = new Set(missingExtra.map((m) => m.evidenceId));

  const missing = [
    ...missingExtra,
    ...classified.missing.filter(
      (m) => !missingIds.has(m.evidenceId) && !downgradedIds.has(m.evidenceId),
    ),
  ];
  const downgraded = [
    ...downgradedExtra,
    ...classified.downgraded.filter((d) => !downgradedIds.has(d.evidenceId)),
  ];

  return {
    rememberedIds,
    valid: classified.valid,
    downgraded,
    missing,
  };
}

async function lookupEvidenceRecord(
  evidenceId: string,
  currentProjectId: string,
): Promise<EvidenceLookupOutcome> {
  if (
    testCatalog &&
    testCatalog.projectId.trim() === currentProjectId.trim()
  ) {
    const fromTest = testCatalog.evidence.find(
      (item) => item.evidenceId === evidenceId,
    );
    if (fromTest) return { kind: "found", evidence: fromTest };
    return { kind: "not_found" };
  }

  try {
    const { getRuntimeApplicationService } = await import(
      "@/lib/vertical-slice-runtime"
    );
    const oa = getRuntimeApplicationService().oa;
    const repository = oa?.evidenceReviewServices?.repository;
    if (!repository) {
      return {
        kind: "resolution_failed",
        reason: "repository_unavailable",
      };
    }
    const evidence = (await repository.findById(evidenceId)) ?? null;
    if (!evidence) return { kind: "not_found" };
    return { kind: "found", evidence };
  } catch {
    return { kind: "resolution_failed", reason: "repository_error" };
  }
}
