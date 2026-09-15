/**
 * JOURNEY-INTEGRITY Lot B — proposalSubjectIntegrity is the single, acyclic
 * home of Proposal subject sealing + digest.
 *
 * Intended module graph (arrows = "imports"):
 *
 *   pendingDecisionSubjectMarker ──┐
 *                                  ├──> proposalSubjectIntegrity  (pure leaf)
 *   resolveProposalDecisionSubject ┘            │
 *            │                                  └──> @/lib/oa/decision (digest)
 *            └──> activeProposalDecisionSubject
 *
 * Two properties keep that graph honest and are proven here:
 *  1. STRUCTURE — the leaf imports no runtime/persistence/orchestration module,
 *     and the marker module never reaches back through
 *     resolveProposalDecisionSubject (that edge would close a cycle).
 *  2. SEMANTICS — the re-exports on resolveProposalDecisionSubject are the same
 *     functions, so a digest computed through either entrypoint is identical.
 *     Structure alone would still allow a silently forked copy.
 *
 * Deterministic / pure — ZERO REAL, no runtime boot, no persistence.
 * @vitest-environment node
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  computeProposalSubjectDigest,
  sealProposalExecutionBasis,
} from "@/features/project-assistant/w2/proposalSubjectIntegrity";
import {
  computeProposalSubjectDigest as computeViaResolve,
  sealProposalExecutionBasis as sealViaResolve,
} from "@/features/project-assistant/w2/resolveProposalDecisionSubject";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import { F2_PROCESS_LOCAL_NOTICE } from "@/features/project-assistant/f2/proposalStore";
import type { ProposalDto } from "@/features/project-assistant/f2/types";

const W2_DIR = path.resolve(__dirname, "../../features/project-assistant/w2");

function sourceOf(moduleFile: string): string {
  return readFileSync(path.join(W2_DIR, moduleFile), "utf8");
}

/** Import specifiers only — prose in doc comments must not trip the assertions. */
function importSpecifiers(source: string): string[] {
  const out: string[] = [];
  const re = /(?:from|import)\s*\(?\s*["']([^"']+)["']/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(source)) !== null) out.push(match[1]!);
  return out;
}

const FIXTURE_PROPOSAL: ProposalDto = {
  proposalId: "prop:f2:integrity-fixture",
  status: "DECISION_REQUIRED",
  rephrasedRequest: "Matérialiser la note de gestion de tâches",
  objective: "Matérialiser le livrable de gestion de tâches",
  cycleTypeId: "cyc:delivery",
  recommendedProfile: "Critical",
  rationale: "Continuation Artifact du cycle actif",
  scope: "écriture de document bornée — cycle actif",
  outOfScope: ["nouveau cycle", "REAL"],
  activatedBlocks: [],
  expectedOutcome: "Fichier sandbox matérialisé",
  sources: ["nora"],
  risks: ["mauvais sujet décisionnel"],
  reservations: [],
  stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
  morrisGateRequired: true,
  nextPossibleStep: "Instruire les options sur ce sujet",
  contextSnapshot: {
    projectId: "prj:integrity-fixture",
    lpsId: "lps:integrity-fixture",
    lpsVersion: 3,
    doctrineDigest: "sha256:doctrine-fixture",
    activeCycleInstanceId: "cyc:integrity-fixture",
  },
  processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
  executionForbidden: true,
  noExecutingStatus: true,
  agentBinding: "NOT_AVAILABLE",
  requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
  executionIntent: {
    intentKind: "docs_write",
    artifactType: null,
    targetRepositoryRef: null,
    targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
    scopeIn: ["sandbox"],
    scopeOut: ["git"],
    expectedOutputs: ["markdown"],
    requiredCapabilities: ["cap:cursor.docs_write"],
    validationExpectations: [],
    evidenceRequirements: [],
    requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
    reversibilityExpectation: "reversible",
    artifactBrief: "Note gestion de tâches",
    contentRequirements: [],
    exitRequirementKinds: [],
  },
};

describe("JOURNEY-INTEGRITY — proposalSubjectIntegrity is an acyclic pure leaf", () => {
  it("B1 — the leaf imports no subject-resolution, runtime or server-action module", () => {
    const specifiers = importSpecifiers(sourceOf("proposalSubjectIntegrity.ts"));
    expect(specifiers.length).toBeGreaterThan(0);

    for (const forbidden of [
      "activeProposalDecisionSubject",
      "pendingDecisionSubjectMarker",
      "resolveProposalDecisionSubject",
      "presentedOptionSet",
      "vertical-slice-runtime",
      "proposalStore",
    ]) {
      expect(
        specifiers.filter((s) => s.includes(forbidden)),
        `proposalSubjectIntegrity must not import ${forbidden}`,
      ).toEqual([]);
    }
    // Server actions / orchestration are execution paths, not sealing paths.
    expect(specifiers.filter((s) => /(^|\/)actions$/.test(s))).toEqual([]);
    expect(specifiers.filter((s) => /orchestrate/i.test(s))).toEqual([]);
  });

  it("B2 — pendingDecisionSubjectMarker seals via the leaf, never via resolve", () => {
    const specifiers = importSpecifiers(
      sourceOf("pendingDecisionSubjectMarker.ts"),
    );
    // The back-edge that would close the cycle.
    expect(
      specifiers.filter((s) => s.includes("resolveProposalDecisionSubject")),
    ).toEqual([]);
    expect(specifiers).toContain("./proposalSubjectIntegrity");
  });

  it("B3 — resolveProposalDecisionSubject re-exports the leaf, it does not fork it", () => {
    const specifiers = importSpecifiers(
      sourceOf("resolveProposalDecisionSubject.ts"),
    );
    expect(specifiers).toContain("./proposalSubjectIntegrity");

    const source = sourceOf("resolveProposalDecisionSubject.ts");
    // A local redefinition would silently fork digest semantics.
    expect(source).not.toMatch(/function\s+sealProposalExecutionBasis/);
    expect(source).not.toMatch(/function\s+computeProposalSubjectDigest/);
  });

  it("B4 — digest is identical through the leaf and through the re-export", () => {
    expect(sealViaResolve).toBe(sealProposalExecutionBasis);
    expect(computeViaResolve).toBe(computeProposalSubjectDigest);

    const sealed = sealProposalExecutionBasis(FIXTURE_PROPOSAL);
    const digest = computeProposalSubjectDigest(
      sealed,
      FIXTURE_PROPOSAL.proposalId,
    );
    const digestViaResolve = computeViaResolve(
      sealViaResolve(FIXTURE_PROPOSAL),
      FIXTURE_PROPOSAL.proposalId,
    );

    expect(digest).toBe(digestViaResolve);
    expect(digest).toMatch(/^[a-f0-9]{16,}$/i);
    expect(sealed.targetPath).toBe(
      FIXTURE_PROPOSAL.executionIntent?.targetPath,
    );
    expect(sealed.requestedOperation).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );
  });

  it("B5 — a material field change moves the digest through both entrypoints", () => {
    const baseline = computeProposalSubjectDigest(
      sealProposalExecutionBasis(FIXTURE_PROPOSAL),
      FIXTURE_PROPOSAL.proposalId,
    );
    const retargeted: ProposalDto = {
      ...FIXTURE_PROPOSAL,
      executionIntent: {
        ...FIXTURE_PROPOSAL.executionIntent!,
        targetPath: "projects/sfia-studio/.sandbox/autre-cible.md",
      },
    };

    const moved = computeProposalSubjectDigest(
      sealProposalExecutionBasis(retargeted),
      retargeted.proposalId,
    );
    expect(moved).not.toBe(baseline);
    expect(
      computeViaResolve(sealViaResolve(retargeted), retargeted.proposalId),
    ).toBe(moved);
  });
});
