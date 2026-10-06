/**
 * P5-S07 — Project Continuity & Work Representation (deterministic).
 *
 * Proves:
 * - History events derive from Product facts (not transcript)
 * - Local History search/filter
 * - PROP-PL: process-local Proposal reset → no invented Proposal;
 *   subject reconstructs from Epistemic OR honest requalification
 * - Deliverable ≠ Artifact ≠ validation ≠ Exit Proof
 * - ZERO REAL
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  resetF2ProposalStoreForTests,
  saveProposal,
  listProposalsForProject,
  F2_PROCESS_LOCAL_NOTICE,
  createProposalId,
} from "@/features/project-assistant/f2/proposalStore";
import type { ProposalDto } from "@/features/project-assistant/f2/types";
import { readActiveProposalDecisionSubject } from "@/features/project-assistant/w2/activeProposalDecisionSubject";
import {
  deriveProjectHistoryEvents,
  filterProjectHistoryEvents,
} from "@/features/project-assistant/w2/deriveProjectHistoryEvents";
import type { W2ProjectHistoryReadModel } from "@/features/project-assistant/w2/projectHistory";
import { deriveWorkRepresentationProjection } from "@/features/project-assistant/w2/deriveWorkRepresentationProjection";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

const PROJECT_ID = "prj:p5-s07-continuity";

function historyFixture(): W2ProjectHistoryReadModel {
  return {
    projectId: PROJECT_ID,
    projectTitle: "Product Simplification",
    lps: { lpsId: "lps:p5-s07", version: 2 },
    cycle: {
      activeCycleInstanceId: "cyc:p5-s07",
      cycleTypeId: "cyc:delivery",
      profile: "Critical",
      status: "active",
    },
    trajectory: {
      effectiveCurrent: {
        trajectoryId: "trj:p5-s07",
        version: 1,
        status: "decided",
        isEffectiveCurrent: true,
        decidedByDecisionRef: "dec:p5-s07",
        decidedOptionRef: "opt:pursue",
        stepCount: 3,
      },
      proposedNotYetDecided: null,
      versions: [
        {
          trajectoryId: "trj:p5-s07",
          version: 1,
          status: "decided",
          isEffectiveCurrent: true,
          decidedByDecisionRef: "dec:p5-s07",
          decidedOptionRef: "opt:pursue",
          stepCount: 3,
        },
      ],
    },
    decisions: [
      {
        decisionId: "dec:p5-s07",
        subject: "Direction de l’espace projet retenue",
        status: "accepted",
        authority: "local_pilote",
        actorRole: "Pilote",
        selectedOptionRef: "opt:pursue",
        effectiveAt: "2026-10-06T08:42:00.000Z",
        basisSourceType: "PresentedOptionSet",
        basisTrajectoryRef: "trj:p5-s07@v1",
        reservations: [],
      },
    ],
    contracts: [],
    evidence: [],
    reviewBundles: [],
    syntheses: [],
    absent: [
      "Conversation (process-local, non rejouée)",
      "Proposition F2 process-local",
    ],
    boundNote: "Borné · fixture S07.",
  };
}

describe("P5-S07 project continuity & work representation", () => {
  beforeEach(() => {
    resetF2ProposalStoreForTests();
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  it("S07-E06/E07/E08 — History derives from Product facts and supports local search", () => {
    const events = deriveProjectHistoryEvents({ history: historyFixture() });
    expect(events.some((e) => e.kind === "decision")).toBe(true);
    expect(events.every((e) => !e.title.toLowerCase().includes("transcript"))).toBe(
      true,
    );
    expect(
      events.some((e) => e.sourceKind === "HumanDecision" && e.occurredAt != null),
    ).toBe(true);

    const decisionsOnly = filterProjectHistoryEvents(events, {
      filter: "decisions",
      query: "",
    });
    expect(decisionsOnly.every((e) => e.filterBucket === "decisions")).toBe(true);

    const searched = filterProjectHistoryEvents(events, {
      filter: "all",
      query: "retenue",
    });
    expect(searched.some((e) => e.eventId === "dec:p5-s07")).toBe(true);

    const none = filterProjectHistoryEvents(events, {
      filter: "all",
      query: "zzz-no-match",
    });
    expect(none).toHaveLength(0);

    // Transcript content alone never becomes a History event.
    expect(events.every((e) => e.sourceKind !== "Transcript")).toBe(true);
  });

  it("S07-E09 — Deliverable ≠ Artifact ≠ validation ≠ Exit Proof", () => {
    const producedUnvalidated = deriveWorkRepresentationProjection({
      projectId: PROJECT_ID,
      cycleInstanceId: "cyc:p5-s07",
      artifactRequired: true,
      artifactIds: ["art:note-v1"],
      evidenceIds: [],
      reviewBundleIds: [],
      qualificationHint: null,
      exitProofSatisfied: null,
      cycleComplete: false,
    });
    expect(producedUnvalidated.requirementState).toBe("expected");
    expect(producedUnvalidated.productionState).toBe("produced");
    expect(producedUnvalidated.validationState).toBe("unknown");
    expect(producedUnvalidated.exitProofSatisfied).toBe("unknown");
    expect(producedUnvalidated.cycleComplete).toBe(false);
    expect(producedUnvalidated.distinctions.deliverableIsNotArtifact).toBe(true);
    expect(producedUnvalidated.distinctions.artifactExistsIsNotValidation).toBe(
      true,
    );
    expect(producedUnvalidated.distinctions.validationIsNotExitProof).toBe(true);

    const validatedStillNotExit = deriveWorkRepresentationProjection({
      projectId: PROJECT_ID,
      artifactRequired: true,
      artifactIds: ["art:note-v1"],
      evidenceIds: ["ev:1"],
      reviewBundleIds: ["rb:1"],
      qualificationHint: "validated",
      exitProofSatisfied: false,
      cycleComplete: false,
    });
    expect(validatedStillNotExit.validationState).toBe("validated");
    expect(validatedStillNotExit.exitProofSatisfied).toBe(false);
    expect(validatedStillNotExit.cycleComplete).toBe(false);
  });

  it("S07-E02 — process-local Proposal loss cannot invent a Proposal continuation", async () => {
    const proposalId = createProposalId();
    const proposal: ProposalDto = {
      proposalId,
      status: "DECISION_REQUIRED",
      rephrasedRequest: "Matérialiser la note",
      objective: "Livrable de référence",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Critical",
      rationale: "S07 continuity fixture",
      scope: "borné",
      outOfScope: ["REAL"],
      activatedBlocks: [],
      expectedOutcome: "fichier sandbox",
      sources: ["nora"],
      risks: [],
      reservations: [],
      stopConditions: ["STOP AVANT EXECUTE"],
      morrisGateRequired: true,
      nextPossibleStep: "Instruire les options",
      contextSnapshot: {
        projectId: PROJECT_ID,
        lpsId: "lps:p5-s07",
        lpsVersion: 2,
        doctrineDigest: "sha256:s07-fixture",
        activeCycleInstanceId: "cyc:p5-s07",
      },
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
    };
    saveProposal(proposal);
    expect(listProposalsForProject(PROJECT_ID)).toHaveLength(1);

    // Simulate process restart — process-local store gone.
    resetF2ProposalStoreForTests();
    expect(listProposalsForProject(PROJECT_ID)).toHaveLength(0);

    // Fresh runtime OA stack (may not have this fixture project) — read must
    // not invent a Proposal. Reconstruction comes from Epistemic when present;
    // otherwise honest none / epistemic failure / reinstruction.
    const runtime = getRuntimeApplicationService();
    expect(runtime.oa).not.toBeNull();
    const subject = await readActiveProposalDecisionSubject(
      runtime.oa!,
      PROJECT_ID,
    );
    // Honest outcomes after process-local loss: reconstruct / requalify / none /
    // epistemic read failure. Never a fabricated bound Proposal from thin air.
    expect(listProposalsForProject(PROJECT_ID)).toHaveLength(0);
    if (!subject.ok) {
      expect(subject.code).toBe("EPISTEMIC_READ_FAILED");
      return;
    }
    expect(subject.kind === "bound_awaiting_decision").toBe(false);
    if (subject.kind === "pending_reinstruction_required") {
      expect(subject.recoverableProposalIds).not.toContain(proposalId);
    } else {
      expect(
        subject.kind === "none" || subject.kind === "pursue_prepare_ready",
      ).toBe(true);
    }
  });

  it("S07-E01 — History projection anchors current Project/LPS before interaction state", () => {
    const events = deriveProjectHistoryEvents({ history: historyFixture() });
    const project = events.find((e) => e.kind === "project");
    const lps = events.find((e) => e.kind === "lps");
    const cycle = events.find((e) => e.kind === "cycle");
    expect(project?.isCurrent).toBe(true);
    expect(project?.sourceId).toBe(PROJECT_ID);
    expect(lps?.isCurrent).toBe(true);
    expect(lps?.sourceId).toBe("lps:p5-s07");
    expect(cycle?.isCurrent).toBe(true);
    // Interaction/transcript never appears as History authority.
    expect(events.every((e) => e.sourceKind !== "Transcript")).toBe(true);
    expect(events.every((e) => e.sourceKind !== "ProposalDto")).toBe(true);
  });

  it("S07-E03/E04 — work representation + History keep Recommendation/Decision distinct from Artifact", () => {
    const work = deriveWorkRepresentationProjection({
      projectId: PROJECT_ID,
      cycleInstanceId: "cyc:p5-s07",
      artifactRequired: true,
      artifactIds: [],
      evidenceIds: [],
      reviewBundleIds: [],
      qualificationHint: "not_reviewed",
      exitProofSatisfied: false,
      cycleComplete: false,
    });
    expect(work.requirementState).toBe("expected");
    expect(work.productionState).toBe("not_produced");
    expect(work.validationState).toBe("not_reviewed");
    expect(work.exitProofSatisfied).toBe(false);

    const events = deriveProjectHistoryEvents({
      history: historyFixture(),
      durable: {
        recommendation: { recommendationLabel: "Poursuivre la trajectoire courante" },
      },
    });
    const rec = events.find((e) => e.kind === "recommendation");
    expect(rec?.title).toContain("Poursuivre");
    expect(rec?.sourceKind).toBe("Recommendation");
    // Post-evidence recommendation is historical projection, not current Product SoT.
    expect(rec?.isCurrent).toBe(false);
    // Decision remains a separate governed source — not collapsed into Recommendation.
    expect(events.some((e) => e.sourceKind === "HumanDecision")).toBe(true);
  });

  it("S07-E10/E11 — stale projection cannot invent authoritative Product mutation hooks", () => {
    const stale = deriveWorkRepresentationProjection({
      projectId: PROJECT_ID,
      artifactRequired: null,
      artifactIds: null,
      evidenceIds: null,
      reviewBundleIds: null,
    });
    // Unknown fields stay unknown — never auto-promoted to validated / exit proof.
    expect(stale.requirementState).toBe("unknown");
    expect(stale.validationState).toBe("unknown");
    expect(stale.exitProofSatisfied).toBe("unknown");
    expect(stale.cycleComplete).toBe("unknown");
    // Pure projection: no write side-effects / no Proposal fabrication after reset.
    expect(listProposalsForProject(PROJECT_ID)).toHaveLength(0);
  });

  it("S07-E23 — ZERO REAL boundary notice preserved on Proposal store", () => {
    expect(F2_PROCESS_LOCAL_NOTICE).toMatch(/reconstruisible|requalification/i);
    expect(F2_PROCESS_LOCAL_NOTICE).toMatch(/Product SQLite/i);
  });
});
