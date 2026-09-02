/**
 * MW3 — resolve claimed Evidence IDs against actual OA Evidence,
 * scoped to the current Project.
 *
 * Fake/tests may substitute repository storage.
 * Project-scope filtering, attribution mapping, and freshness metadata
 * always go through mapOaEvidenceForProject.
 */
import type { ContradictionEvidencePointer } from "@/lib/nora-cognitive-runtime";
import type { Evidence } from "@/lib/oa/evidence-review/domain/types";
import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";

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

export async function resolveAvailableContradictionPointers(input: {
  projectId: string;
  claimedEvidenceIds: string[];
}): Promise<ContradictionEvidencePointer[]> {
  const projectId = input.projectId.trim();
  const claimed = input.claimedEvidenceIds
    .map((id) => id.trim())
    .filter(Boolean);
  if (!projectId || claimed.length === 0) return [];

  const resolved: ContradictionEvidencePointer[] = [];
  for (const evidenceId of claimed) {
    const evidence = await lookupEvidenceRecord(evidenceId, projectId);
    if (!evidence) continue;
    const pointer = mapOaEvidenceForProject(evidence, projectId);
    if (pointer) resolved.push(pointer);
  }
  return resolved;
}

async function lookupEvidenceRecord(
  evidenceId: string,
  currentProjectId: string,
): Promise<Evidence | null> {
  if (
    testCatalog &&
    testCatalog.projectId.trim() === currentProjectId.trim()
  ) {
    const fromTest = testCatalog.evidence.find(
      (item) => item.evidenceId === evidenceId,
    );
    if (fromTest) return fromTest;
  }

  const oa = getRuntimeApplicationService().oa;
  const repository = oa?.evidenceReviewServices?.repository;
  if (!repository) return null;
  try {
    return (await repository.findById(evidenceId)) ?? null;
  } catch {
    return null;
  }
}
