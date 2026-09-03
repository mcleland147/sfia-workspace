/** @vitest-environment node */
/**
 * CORR-MW4-01E — Evidence lookup: found / not_found / resolution_failed.
 * resolution_failed must NOT be classified as fabricated_without_resolver_hit.
 * ZERO LIVE OpenAI.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  resolveEvidencePointers,
  resolveRememberedEvidence,
  setMw3AvailableEvidenceForTests,
} from "@/features/project-assistant/mw3AvailableEvidence";
import type { Evidence } from "@/lib/oa/evidence-review/domain/types";
import { EVIDENCE_SCHEMA_VERSION } from "@/lib/oa/evidence-review/domain/types";
import { OA_SCHEMA_VERSION } from "@/lib/oa/doctrine/domain/types";
import { buildGroundingCognitiveDisclosure } from "@/lib/nora-cognitive-runtime";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

const NOW = "2026-09-03T10:00:00.000Z";
const tempDirs: string[] = [];
const prevReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;

function catalogEvidence(input: {
  evidenceId: string;
  source: string;
  projectId: string;
}): Evidence {
  return {
    schemaVersion: EVIDENCE_SCHEMA_VERSION,
    evidenceId: input.evidenceId,
    type: "artifact",
    source: input.source,
    sourceKind: "external",
    producedAt: NOW,
    freshness: "fresh",
    status: "available",
    classification: "internal",
    storageMode: "metadata_only",
    availability: "available",
    bindings: { projectId: input.projectId },
    containsSecrets: false,
    provenance: {
      schemaVersion: OA_SCHEMA_VERSION,
      provenanceRecordId: `prv:${input.evidenceId}`,
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      source: "system",
      timestamp: NOW,
      correlationId: `cor:${input.evidenceId}`,
    },
    version: 1,
    createdAt: NOW,
  };
}

afterEach(() => {
  setMw3AvailableEvidenceForTests(null);
  vi.restoreAllMocks();
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  try {
    resetRuntimeApplicationServiceForTests();
  } catch {
    /* ignore when reset not allowed */
  }
  if (prevReset === undefined) delete process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
  else process.env.SFIA_V2_RUNTIME_ALLOW_RESET = prevReset;
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("CORR-MW4-01E — resolution failure D0", () => {
  it("catalog hit → found + attributable pointer", async () => {
    const projectId = "prj:mw4-e-found";
    setMw3AvailableEvidenceForTests({
      projectId,
      evidence: [
        catalogEvidence({
          evidenceId: "ev:known",
          source: "src:k",
          projectId,
        }),
      ],
    });
    const lookups = await resolveEvidencePointers({
      projectId,
      claimedEvidenceIds: ["ev:known"],
    });
    expect(lookups).toHaveLength(1);
    expect(lookups[0]?.lookup).toBe("found");
    expect(lookups[0]?.pointer?.attributable).toBe(true);

    const resolved = await resolveRememberedEvidence(projectId, ["ev:known"]);
    expect(resolved.valid.map((p) => p.evidenceId)).toEqual(["ev:known"]);
    expect(resolved.missing).toEqual([]);
  });

  it("catalog project matches but ID absent → not_found (lookup)", async () => {
    const projectId = "prj:mw4-e-nf";
    setMw3AvailableEvidenceForTests({
      projectId,
      evidence: [
        catalogEvidence({
          evidenceId: "ev:other",
          source: "src:o",
          projectId,
        }),
      ],
    });
    const lookups = await resolveEvidencePointers({
      projectId,
      claimedEvidenceIds: ["ev:absent"],
    });
    expect(lookups[0]?.lookup).toBe("not_found");
    expect(lookups[0]?.pointer).toBeNull();
  });

  it("no catalog + repository throw → resolution_failed (not fabricated)", async () => {
    setMw3AvailableEvidenceForTests(null);
    const projectId = "prj:mw4-e-rf";
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw4-e-rf-"));
    tempDirs.push(dir);
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "product.sqlite"),
      auditMode: "noop",
    });
    const repository = runtime.oa?.evidenceReviewServices?.repository;
    expect(repository).toBeTruthy();
    vi.spyOn(repository!, "findById").mockRejectedValue(
      new Error("repository_unavailable_for_test"),
    );

    const lookups = await resolveEvidencePointers({
      projectId,
      claimedEvidenceIds: ["ev:unverifiable"],
    });
    expect(lookups[0]?.lookup).toBe("resolution_failed");
    expect(lookups[0]?.pointer).toBeNull();

    const resolved = await resolveRememberedEvidence(projectId, [
      "ev:unverifiable",
    ]);
    expect(resolved.missing).toEqual([
      { evidenceId: "ev:unverifiable", reason: "resolution_failed" },
    ]);
    expect(
      resolved.missing.some(
        (m) => m.reason === "fabricated_without_resolver_hit",
      ),
    ).toBe(false);

    const disclosure = buildGroundingCognitiveDisclosure(resolved);
    expect(disclosure).toMatch(/resolution_failed/);
    expect(disclosure).toMatch(/RESOLUTION_FAILED/);
    expect(disclosure).toMatch(/do NOT label as fabricated/i);
  });

  it("no catalog + repository missing → resolution_failed via unavailable", async () => {
    setMw3AvailableEvidenceForTests(null);
    const projectId = "prj:mw4-e-rf-missing";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    resetRuntimeApplicationServiceForTests();
    const vsr = await import("@/lib/vertical-slice-runtime");
    vi.spyOn(vsr, "getRuntimeApplicationService").mockReturnValue({
      oa: { evidenceReviewServices: {} },
    } as ReturnType<typeof vsr.getRuntimeApplicationService>);

    const lookups = await resolveEvidencePointers({
      projectId,
      claimedEvidenceIds: ["ev:no-repo"],
    });
    expect(lookups[0]?.lookup).toBe("resolution_failed");

    const resolved = await resolveRememberedEvidence(projectId, ["ev:no-repo"]);
    expect(resolved.missing[0]?.reason).toBe("resolution_failed");
    expect(resolved.missing[0]?.reason).not.toBe(
      "fabricated_without_resolver_hit",
    );
  });
});
