/**
 * CHECKPOINT-E R4 — docs_write evidenceRequirements semantic coherence.
 * Bounded NO_* profile must not demand Git lifecycle proofs.
 */

import { describe, expect, it } from "vitest";
import {
  BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS,
  BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS,
  docsWriteConstraintsForbidGitLifecycle,
  docsWriteEvidenceContradictsConstraints,
  isGitLifecycleEvidenceRequirement,
  resolveDocsWriteEvidenceRequirementsForBoundedProfile,
  boundedDocsWriteM3ResolutionProfile,
} from "@/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile";
import { isDocsWriteEvidenceContradictionView } from "@/features/project-assistant/f3/docsWriteEvidenceContradictionView";
import { deriveExecutableEffectsFromContractRequirements } from "@/lib/oa/execution-attempt/domain/contractEffectClassification";
import { qualifyExecutionContractCompletion } from "@/lib/oa/execution-attempt/domain/qualifyExecutionContractCompletion";
import { isOaIdentifier } from "@/lib/oa/execution-contract/domain/invariants";

const NO_GIT_CONSTRAINTS = [
  "BOUNDED DOCS-WRITE",
  "NO_COMMIT",
  "NO_GIT_REMOTE",
  "NO_PUSH",
  "NO_PR",
  "NO_MERGE",
] as const;

describe("CHECKPOINT-E R4 — docs_write evidence contract coherence", () => {
  it("T1 — Git lifecycle set contradicts NO_* constraints (semantic invalid)", () => {
    expect(
      docsWriteEvidenceContradictsConstraints({
        evidenceRequirements: [
          ...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS,
        ],
        constraints: NO_GIT_CONSTRAINTS,
      }),
    ).toBe(true);
    expect(
      isDocsWriteEvidenceContradictionView({
        action: "cursor.docs_write.apply",
        target: "workspace.isolated.docs_write",
        constraints: NO_GIT_CONSTRAINTS,
        evidenceRequirements: [
          ...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS,
        ],
      }),
    ).toBe(true);
  });

  it("T2 — corrected local set is OA-valid and coherent with NO_*", () => {
    const local = resolveDocsWriteEvidenceRequirementsForBoundedProfile({
      fromPrepare: [...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS],
      constraints: NO_GIT_CONSTRAINTS,
    });
    expect(local).toEqual([
      ...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS,
    ]);
    for (const id of local) {
      expect(isOaIdentifier(id)).toBe(true);
      expect(isGitLifecycleEvidenceRequirement(id)).toBe(false);
    }
    expect(
      docsWriteEvidenceContradictsConstraints({
        evidenceRequirements: local,
        constraints: NO_GIT_CONSTRAINTS,
      }),
    ).toBe(false);
  });

  it("T3 — no retained requirement demands a forbidden Git effect", () => {
    const profile = boundedDocsWriteM3ResolutionProfile();
    expect(docsWriteConstraintsForbidGitLifecycle(profile.constraints!)).toBe(
      true,
    );
    const reqs = resolveDocsWriteEvidenceRequirementsForBoundedProfile({
      fromPrepare: [],
      constraints: profile.constraints!,
    });
    const classified = deriveExecutableEffectsFromContractRequirements({
      evidenceRequirements: reqs,
      requiredCapabilities: profile.requiredCapabilities,
    });
    expect(classified.executableEffects).not.toContain("git.commit");
    expect(classified.executableEffects).not.toContain("git.push");
    expect(classified.executableEffects).not.toContain("github.pr.create");
    expect(classified.executableEffects).not.toContain("github.pr.merge");
    expect(classified.verificationObligations).toEqual([]);
    expect(classified.executableEffects).toContain("filesystem.create");
  });

  it("T4 — local requirement is satisfiable by docs_write artifact Evidence", () => {
    const reqs = [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS];
    const qualification = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:m3-res:test-r4",
        projectId: "prj:r4",
        cycleInstanceId: "cyc:r4",
        evidenceRequirements: reqs,
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: [
        {
          evidenceId: "ev:docs-write:test",
          type: "artifact",
          status: "verified",
          source: "execution_attempt:docs_write",
          bindings: {
            projectId: "prj:r4",
            cycleInstanceId: "cyc:r4",
            executionContractId: "xct:m3-res:test-r4",
            executionAttemptId: "att:test",
          },
        } as never,
      ],
    });
    expect(qualification.complete).toBe(true);
    expect(qualification.remainingRequiredEffects).toEqual([]);
  });

  it("T5/T6 — OA identifier validation holds for local set", () => {
    for (const id of BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS) {
      expect(isOaIdentifier(id)).toBe(true);
    }
  });

  it("T7 — applicable non-Git OA IDs from PREPARE are preserved under NO_*", () => {
    const kept = resolveDocsWriteEvidenceRequirementsForBoundedProfile({
      fromPrepare: ["evreq:file-write-result", "evreq:content-verification"],
      constraints: NO_GIT_CONSTRAINTS,
    });
    expect(kept).toEqual([
      "evreq:file-write-result",
      "evreq:content-verification",
    ]);
  });

  it("T8 — Git lifecycle set preserved when constraints do NOT forbid Git", () => {
    const kept = resolveDocsWriteEvidenceRequirementsForBoundedProfile({
      fromPrepare: [...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS],
      constraints: ["BOUNDED DOCS-WRITE", "PATH_ALLOWLIST_ONLY"],
    });
    expect(kept).toEqual([
      ...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS,
    ]);
    expect(
      docsWriteEvidenceContradictsConstraints({
        evidenceRequirements: kept,
        constraints: ["BOUNDED DOCS-WRITE"],
      }),
    ).toBe(false);
  });

  it("T8b — empty prepare + Git-allowed constraints falls back to Git set", () => {
    const kept = resolveDocsWriteEvidenceRequirementsForBoundedProfile({
      fromPrepare: [],
      constraints: ["BOUNDED DOCS-WRITE"],
    });
    expect(kept).toEqual([
      ...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS,
    ]);
  });

  it("profile ships local evidenceRequirements by default", () => {
    const profile = boundedDocsWriteM3ResolutionProfile();
    expect(profile.evidenceRequirements).toEqual([
      ...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS,
    ]);
  });
});
