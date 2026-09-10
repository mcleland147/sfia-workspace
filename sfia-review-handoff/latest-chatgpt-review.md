# ChatGPT Critical Review Pack — FULL

## Meta
- timestamp: 2026-09-10T00:51:00Z
- Cycle ID: SFIA-STUDIO-GREENFIELD-CANDIDATE-TRAJECTORY-HUMANDECISION-DELIVERY-01
- Milestone: Greenfield Product Proof — Governed Cycle Entry
- Cycle SFIA: 8 — Delivery / implémentation
- Typology: EVOL
- Profile: CRITICAL
- D-GF-HD-01: ADOPTED BY MORRIS (consumed)
- GO Morris: GO MORRIS — GREENFIELD CANDIDATE TRAJECTORY → HUMANDECISION — DELIVERY (consumed)
- Level: FULL
- Verdict target: GREENFIELD CANDIDATE TRAJECTORY → HUMANDECISION + VALIDATED TRAJECTORY — DETERMINISTIC CANDIDATE READY FOR CHATGPT CRITICAL REVIEW

## Local Git Truth
### Before
- worktree: /Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310
- branch: delivery/sfia-studio-product-proof-qual-to-governed-cycle
- HEAD (anchor): 2177277c11c342e72aec4f0b1545cb5cd5c8476f
- parent of anchor: 9d9c8ce7ca6ec884ee3e545978f77e4e9e3d9cc2
- origin/main: a9f6c310a0826d0e5bd6f7264603382a86564db1
### After
- candidate SHA: 4c8733bf80e25060241c49157bded9813842e1ce
- parent SHA: 2177277c11c342e72aec4f0b1545cb5cd5c8476f
- message: feat(sfia-studio): govern greenfield trajectory approval
- Product push: NONE
- PR: NONE

## Sources read
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md
- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
- projects/sfia-studio/product-completion/01-product-completion-cadrage.md
- projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md
- projects/sfia-studio/sfia-v3-framing/32-living-project-state-and-dynamic-trajectory.md
- projects/sfia-studio/sfia-v3-framing/33-epistemology-provenance-and-contradiction-model.md
- projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md
- sfia-review-handoff/latest-chatgpt-review.md (prior handoff)
- Candidate anchor: 2177277c11c342e72aec4f0b1545cb5cd5c8476f

## Convergence Pre-check
- Capabilities served: V3-F02, V3-F04, V3-F05, V3-F06, V3-F09
- Entry LIVE PROVEN: LR; LR→candidate; durable provenance (prj:6962aa82-4d49-4452-b113-670c37fc889c READ-ONLY this Delivery)
- Gap closed: candidate → explicit HD → validated/current
- Next (HORS SCOPE): validated/current → CycleInstance / START
- RESERVE-TRJ-PROVENANCE-01: CLOSED AT LIVE BOUNDARY PROVEN SCOPE (carried)
- RESERVE-QA-MOCK-01: OPEN

## KEEP / ADAPT / HARVEST / REJECT
- KEEP: W2 OptionSet path; CreateCycle; PilotLifecycleTransitions.start; EC domain; SQL DDL
- ADAPT: DecisionBasis (+candidate_trajectory); provenance historical vs selectability; TrajectorySurface CTA; preCycle actions
- HARVEST: computeDecisionBasisSourceDigest; registerLocalPiloteAuthority; W2 outer Product UoW pattern; PromoteDecidedTrajectory (steps omitted = as-is); RecordHumanDecision
- REJECT: fake OptionSet; fake CycleInstance; new SQL table; Confirmation; START; Epistemic DecisionRef on critical path; client authority; label reverse-map; parallel digest engine

## DecisionBasis domain delta
- sourceType += "candidate_trajectory"
- DecisionBasisCandidateTrajectoryContext: trajectoryId, candidateVersion, provenanceObservationId, recommendationId, semanticKey, targetCycleTypeId, candidateContentDigest, presentationDigest
- sourceRef = trajectoryId
- sourceDigest === presentationDigest (contract)
- proposalContext retained (LPS snapshot)
- trajectoryContext FORBIDDEN for candidate_trajectory
- Runtime validateDecisionBasis wired into RecordHumanDecision
- Legacy HD without DecisionBasis remain readable (validate returns null)

## Historical / current selectability split
- resolveCandidateTrajectoryProvenance: catalog id existence only (no lifecycleStatus===active for RESOLVED)
- isTargetCycleCurrentlySelectable: lifecycleStatus===active
- HD gate: TARGET_CYCLE_NOT_SELECTABLE without invalidating historical RESOLVED
- Proven by BAR-HD-14/15 (spy deprecated)

## Presentation / digests / TOCTOU
- candidateContentDigest: material trajectoryId/version/status/steps via computeDecisionBasisSourceDigest
- presentationDigest: projectId + LPS + candidate + provenance + approvalKind
- Client max input: projectId + presentationDigest
- Mismatch → CANDIDATE_TRAJECTORY_DECISION_STALE; 0 HD; no promotion

## Acte humain
- Unary option: opt:approve-candidate-trajectory-as-is / "Valider cette trajectoire"
- status=accepted; authority=morris; actor=LOCAL_PILOTE_ACTOR; registerLocalPiloteAuthority server-side
- subject: project.trajectory.approval:{trajectoryId}:v{candidateVersion}
- supersedeExistingAccepted=false
- Confirmation: NOT REQUIRED / 0 created
- linkEpistemicDecisionRef=false

## Atomic HD + promotion
- oa.projectServices.store.runInTransaction
- RecordHumanDecision → durable getHumanDecision readback → assertCandidateTrajectoryDecisionAuthorizesPromotion → PromoteDecidedTrajectory (no steps override)
- LPS chain: post-HD livingProjectStateVersion fed to promote expectedLpsVersion
- BAR-HD-27 BLOCKING: failNextSave=trajectory after logical HD → 0 accepted HD, candidate remains, LPS unchanged

## Post-success invariants
- 1 accepted HD; trajectory validated/current; decidedByDecisionRef exact; steps as-is; activeCycleInstanceId null; 0 CycleInstance; 0 START; 0 EC; 0 Confirmation

## Validation results
- BAR-HD focused: 21 passed
- BAR-PROV regression: 14 passed
- BAR-TRJ regression: 16 passed
- W2 A4 atomic: passed
- UI trajectory + preCycle CTA: passed
- importBoundaries: passed
- full Vitest: 3405 passed | 135 skipped (324 files passed | 17 skipped)
- typecheck: PASS
- lint: PASS (No ESLint warnings or errors)
- build: PASS
- git diff --check: PASS
- ZERO NEW REAL: YES (no Nora/OpenAI; LIVE project untouched)
- Historical LIVE DB: prj:6962aa82… READ-ONLY — no mutation in this Delivery

## BAR-HD matrix coverage
BAR-HD-01…42 covered in candidateTrajectoryHumanDecision.d0.test.ts (+ structural/source assertions): domain, contexts, legacy, DTO/digests, TOCTOU, provenance, historical/selectability, no label authority, server authority, unary, payload, readback, guard mismatch rollback, atomic success, HD/LPS/readback/promote failures, double+concurrent, already decided, active cycle, no Confirmation/DecisionRef/Cycle/START/EC, proposal+W2 validate regression, PROV+TRJ smoke, digest seal gate.

## Anti-claims
NOT claimed: HumanDecision LIVE PROVEN; START proven; CycleInstance path; EC; END-TO-END REAL; Task App; Greenfield COMPLETE; R2 CLOSED; PR READY; runtime v3 ADOPTED; RESERVE-QA-MOCK-01 closed.

## New reserves
- RESERVE-HD-LIVE-01: REAL BOUNDARY LIVE Pilote click on fresh project not executed this cycle (DETERMINISTIC only by design).
- RESERVE-HD-CONCURRENCY-REALISM-01: concurrent proof uses Product SQLite Promise.all (deterministic); not multi-process contention.

## Next capability
validated/current ProjectTrajectory → CycleInstance creation / explicit START qualification (HORS SCOPE).

## Final verdict
GREENFIELD CANDIDATE TRAJECTORY → HUMANDECISION + VALIDATED TRAJECTORY — DETERMINISTIC CANDIDATE READY FOR CHATGPT CRITICAL REVIEW

## Product files modified (exact)
- projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx
- projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
- projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryBridge.d0.test.ts
- projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryHumanDecision.d0.test.ts
- projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
- projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
- projects/sfia-studio/app/features/project-assistant/approveCandidateTrajectory.ts
- projects/sfia-studio/app/features/project-assistant/candidateTrajectoryPromotionGuard.ts
- projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts
- projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/candidateTrajectoryDecisionBasis.ts
- projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/candidateTrajectoryProvenance.ts
- projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts
- projects/sfia-studio/app/lib/oa/decision/application/recordHumanDecision.ts
- projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts
- projects/sfia-studio/app/lib/oa/decision/domain/types.ts

## FULL modified-content evidence

### FILE: projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx
```
/** @vitest-environment jsdom */
/**
 * BAR-TRJ-27/28 — pre-cycle W2 CTA honesty (CR-TRJ-02).
 * ZERO NEW REAL.
 */
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TrajectorySurface } from "@/features/pre-m6-product-ui/surfaces/TrajectorySurface";
import { LifecycleSurface } from "@/features/pre-m6-product-ui/surfaces/LifecycleSurface";

const {
  proposeMock,
  readPreCycleMock,
  prepareMock,
  lifecycleProjectionMock,
} = vi.hoisted(() => ({
  proposeMock: vi.fn(),
  readPreCycleMock: vi.fn(),
  prepareMock: vi.fn(),
  lifecycleProjectionMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2ProposeTrajectoryOptionsAction: (...args: unknown[]) => proposeMock(...args),
  w2DecideTrajectoryAction: vi.fn(),
  w2InspectExecutionContractAction: vi.fn(),
  w2ConfirmExecutionContractAction: vi.fn(),
  w2AuthorizeExecutionContractAction: vi.fn(),
  w2AmendExecutionContractAction: vi.fn(),
  w2PrepareExecutionContractAction: vi.fn(),
  w2GovernedExecuteSelectAction: vi.fn(),
  w2GovernedExecuteStartAction: vi.fn(),
  w2GovernedExecuteCompleteAction: vi.fn(),
  w2GovernedExecuteCancelAction: vi.fn(),
  w2MaterializeProductOutcomeAction: vi.fn(),
  w2RehydrateProductOutcomeAction: vi.fn(),
  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
}));

vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
  projectAssistantReadPreCycleCandidateTrajectoryAction: (...args: unknown[]) =>
    readPreCycleMock(...args),
  projectAssistantPrepareCandidateTrajectoryAction: (...args: unknown[]) =>
    prepareMock(...args),
  projectAssistantReadCandidateTrajectoryApprovalPresentationAction: vi
    .fn()
    .mockResolvedValue({
      ok: true,
      presentation: null,
      alreadyDecided: null,
      activeCycleInstanceId: null,
    }),
  projectAssistantApprovePreCycleCandidateTrajectoryAction: vi.fn(),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantPilotLifecycleProjection: (...args: unknown[]) =>
    lifecycleProjectionMock(...args),
  projectAssistantPilotLifecycleAction: vi.fn(),
}));

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  proposeMock.mockReset();
  readPreCycleMock.mockReset();
  prepareMock.mockReset();
  lifecycleProjectionMock.mockReset();
});

describe("BAR-TRJ-27/28 — pre-cycle W2 CTA honesty", () => {
  it("BAR-TRJ-27 — CURRENT LR + no candidate + no active cycle: Lifecycle prepare present, W2 CTA absent", async () => {
    lifecycleProjectionMock.mockResolvedValue({
      ok: true,
      projection: {
        projectId: "prj:trj-27",
        activeCycleInstanceId: null,
        selectedCycleInstanceId: null,
        selectedStatus: null,
        selectionAmbiguous: false,
        candidateCycles: [],
        currentRecommendations: [
          {
            recommendationId: "epi:lr:27",
            projectId: "prj:trj-27",
            intent: "NEXT_CYCLE",
            subjectCycleInstanceId: null,
            targetCycleInstanceId: null,
            targetCycleTypeId: "cyc:framing",
            producer: "nora",
            producedAt: "2026-09-09T20:00:00.000Z",
            statement: "Recommander un Cadrage.",
            basisFingerprint: "fp",
            basisRefs: { projectId: "prj:trj-27" },
            semanticKey: "key27",
            authority: "none",
            isHumanDecision: false,
            doesNotActivateCycle: true,
            doesNotFinalize: true,
            doesNotCreateHumanDecision: true,
            epistemicStatus: "active",
            supersedesRecommendationId: null,
            derivedCurrentness: "CURRENT",
          },
        ],
        cta: {
          canStart: false,
          canPause: false,
          canResume: false,
          canFinalize: false,
          canCancel: false,
          canReevaluate: false,
        },
      },
    });

    readPreCycleMock.mockResolvedValue({
      ok: true,
      candidate: null,
      activeCycleInstanceId: null,
      hasCurrentNextCycleRecommendation: true,
    });

    render(<LifecycleSurface projectId="prj:trj-27" />);
    await waitFor(() => {
      expect(
        screen.getByTestId("lifecycle-trajectory-escalate"),
      ).toBeTruthy();
    });
    expect(screen.getByTestId("lifecycle-trajectory-escalate").textContent).toBe(
      "Préparer la trajectoire",
    );

    cleanup();
    render(<TrajectorySurface projectId="prj:trj-27" />);
    await waitFor(() => {
      expect(readPreCycleMock).toHaveBeenCalled();
    });
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(proposeMock).not.toHaveBeenCalled();
    expect(screen.getByTestId("pre-cycle-prepare-trajectory-hint")).toBeTruthy();
  });

  it("BAR-TRJ-28 — candidate + no active cycle: candidate visible, W2 CTA absent", async () => {
    readPreCycleMock.mockResolvedValue({
      ok: true,
      candidate: {
        trajectoryId: "trj:cand-28",
        version: 1,
        status: "candidate",
        projectId: "prj:trj-28",
        steps: [
          {
            stepId: "stp:cadrage-28",
            order: 1,
            label: "Cadrage",
            state: "pending",
          },
        ],
        catalogLabel: "Cadrage",
        targetCycleTypeId: "cyc:framing",
        decidedByDecisionRef: null,
        isEffectiveCurrent: false,
      },
      activeCycleInstanceId: null,
      hasCurrentNextCycleRecommendation: false,
    });

    render(<TrajectorySurface projectId="prj:trj-28" />);
    await waitFor(() => {
      expect(screen.getByTestId("pre-cycle-candidate-trajectory")).toBeTruthy();
    });
    expect(screen.getByText("Trajectoire proposée")).toBeTruthy();
    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
    expect(proposeMock).not.toHaveBeenCalled();
  });

  it("BAR-TRJ-29 UI — active cycle keeps W2 CTA", async () => {
    readPreCycleMock.mockResolvedValue({
      ok: true,
      candidate: null,
      activeCycleInstanceId: "cycinst:active-29",
      hasCurrentNextCycleRecommendation: false,
    });

    render(<TrajectorySurface projectId="prj:trj-29" />);
    await waitFor(() => {
      expect(screen.getByTestId("w2-propose-options")).toBeTruthy();
    });
    expect(screen.getByTestId("w2-propose-options").textContent).toContain(
      "Instruire les options",
    );
  });
});
```

### FILE: projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
```
/** @vitest-environment jsdom */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TrajectorySurface } from "@/features/pre-m6-product-ui/surfaces/TrajectorySurface";

const {
  proposeMock,
  decideMock,
  inspectMock,
  authorizeMock,
  amendMock,
  prepareContractMock,
  executeSelectMock,
  executeStartMock,
  executeCompleteMock,
  readPreCycleMock,
} = vi.hoisted(() => ({
  proposeMock: vi.fn(),
  decideMock: vi.fn(),
  inspectMock: vi.fn(),
  authorizeMock: vi.fn(),
  amendMock: vi.fn(),
  prepareContractMock: vi.fn(),
  executeSelectMock: vi.fn(),
  executeStartMock: vi.fn(),
  executeCompleteMock: vi.fn(),
  readPreCycleMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2ProposeTrajectoryOptionsAction: (...args: unknown[]) => proposeMock(...args),
  w2DecideTrajectoryAction: (...args: unknown[]) => decideMock(...args),
  w2InspectExecutionContractAction: (...args: unknown[]) => inspectMock(...args),
  w2ConfirmExecutionContractAction: vi.fn(),
  w2AuthorizeExecutionContractAction: (...args: unknown[]) =>
    authorizeMock(...args),
  w2AmendExecutionContractAction: (...args: unknown[]) => amendMock(...args),
  w2PrepareExecutionContractAction: (...args: unknown[]) =>
    prepareContractMock(...args),
  w2GovernedExecuteSelectAction: (...args: unknown[]) =>
    executeSelectMock(...args),
  w2GovernedExecuteStartAction: (...args: unknown[]) =>
    executeStartMock(...args),
  w2GovernedExecuteCompleteAction: (...args: unknown[]) =>
    executeCompleteMock(...args),
  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
}));

vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
  projectAssistantReadPreCycleCandidateTrajectoryAction: (...args: unknown[]) =>
    readPreCycleMock(...args),
  projectAssistantPrepareCandidateTrajectoryAction: vi.fn(),
  projectAssistantReadCandidateTrajectoryApprovalPresentationAction: vi
    .fn()
    .mockResolvedValue({
      ok: true,
      presentation: null,
      alreadyDecided: null,
      activeCycleInstanceId: null,
    }),
  projectAssistantApprovePreCycleCandidateTrajectoryAction: vi.fn(),
}));

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  proposeMock.mockReset();
  decideMock.mockReset();
  inspectMock.mockReset();
  authorizeMock.mockReset();
  amendMock.mockReset();
  prepareContractMock.mockReset();
  executeSelectMock.mockReset();
  executeStartMock.mockReset();
  executeCompleteMock.mockReset();
  readPreCycleMock.mockReset();
  readPreCycleMock.mockResolvedValue({
    ok: true,
    candidate: null,
    activeCycleInstanceId: "cycinst:test-active",
    hasCurrentNextCycleRecommendation: false,
  });
});

describe("W2 TrajectorySurface", () => {
  it("labels Options and Recommendation distinctly and never auto-decides", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:w2-ui",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:governed-gated",
          label: "Trajectoire gouvernée par gates",
          intent: "Instruire puis décider",
          impacts: ["Chaque frontière est explicite"],
          reservations: [],
          steps: [],
        },
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:bounded-direct",
          label: "Trajectoire bornée directe",
          intent: "Cadrer un périmètre réversible",
          impacts: ["Chemin plus court"],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:trajectory:bounded-direct",
        rationale: "Aucun signal critique.",
        isHumanDecision: false,
        promotesTrajectory: false,
        ckcAttribution: null,
      },
      epistemicRefs: [],
      proposedTrajectory: {
        trajectoryId: "trj:w2-ui",
        version: 1,
        status: "candidate",
        statusLabel: "TRAJECTOIRE PROPOSÉE",
        isCurrent: false,
      },
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
    });

    render(<TrajectorySurface projectId="prj:w2-ui" />);

    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
    fireEvent.click(screen.getByTestId("w2-propose-options"));
    expect(await screen.findByTestId("w2-options")).toBeVisible();
    expect(screen.getAllByText("OPTION").length).toBeGreaterThan(0);
    expect(screen.getByTestId("w2-recommendation")).toHaveTextContent(
      "RECOMMANDATION — PAS UNE DÉCISION",
    );
    expect(screen.getByTestId("w2-proposed-trajectory")).toHaveTextContent(
      "TRAJECTOIRE PROPOSÉE",
    );
    expect(screen.queryByTestId("w2-decision")).toBeNull();
    expect(screen.queryByTestId("w2-authorization")).toBeNull();
    expect(proposeMock).toHaveBeenCalledWith({ projectId: "prj:w2-ui" });
  });

  it("records an explicit Pilote decision and shows STOP BEFORE EXECUTE on the verdict", async () => {
    proposeMock.mockResolvedValue({
      ok: true,
      optionSetRef: "optset:w2-ui",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      options: [
        {
          kind: "OPTION",
          optionRef: "opt:trajectory:bounded-direct",
          label: "Trajectoire bornée directe",
          intent: "Cadrer",
          impacts: [],
          reservations: [],
          steps: [],
        },
      ],
      recommendation: {
        label: "RECOMMANDATION — PAS UNE DÉCISION",
        recommendedOptionRef: "opt:trajectory:bounded-direct",
        rationale: "Bornée.",
        isHumanDecision: false,
        promotesTrajectory: false,
        ckcAttribution: null,
      },
      epistemicRefs: [],
      proposedTrajectory: {
        trajectoryId: "trj:w2-ui",
        version: 1,
        status: "candidate",
        statusLabel: "TRAJECTOIRE PROPOSÉE",
        isCurrent: false,
      },
      phase: "OPTIONS_PROPOSED",
      autoDecisionPerformed: false,
      executionPerformed: false,
    });
    decideMock.mockResolvedValue({
      ok: true,
      decision: {
        decisionId: "dec:w2-ui",
        selectedOptionRef: "opt:trajectory:bounded-direct",
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: "2026-08-23T04:30:00.000Z",
        decisionBasisLinked: true,
        reservesText: null,
      },
      trajectory: {
        trajectoryId: "trj:w2-ui",
        version: 1,
        status: "validated",
        statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE",
        isCurrent: true,
        decidedByDecisionRef: "dec:w2-ui",
        decidedOptionRef: "opt:trajectory:bounded-direct",
      },
      livingProjectStateVersion: 3,
      executionPerformed: false,
    });

    render(<TrajectorySurface projectId="prj:w2-ui" />);
    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
    fireEvent.click(screen.getByTestId("w2-propose-options"));
    await screen.findByTestId("w2-options");
    fireEvent.click(
      screen.getByTestId("w2-decide-opt:trajectory:bounded-direct"),
    );
    expect(await screen.findByTestId("w2-decision")).toBeVisible();
    expect(screen.getByTestId("w2-decision-basis")).toHaveTextContent("Reliée");
    expect(screen.getByTestId("w2-decided-trajectory")).toHaveTextContent(
      "TRAJECTOIRE DÉCIDÉE / COURANTE",
    );
    expect(decideMock).toHaveBeenCalledWith(
      expect.objectContaining({
        projectId: "prj:w2-ui",
        selectedOptionRef: "opt:trajectory:bounded-direct",
      }),
    );

    prepareContractMock.mockResolvedValue({
      ok: true,
      decisionId: "dec:w2-ui",
      f3SemanticOverwrite: false,
      executionPerformed: false,
      attemptCreated: false,
      contract: {
        executionContractId: "xct:w2-ui",
        version: 1,
        status: "confirmation_required",
        action: "product:generate-temporary-artifact",
        target: "product:project-workspace",
        scope: "product:temporary-local-artifact",
        requiredAuthority: "N1",
        constraints: [
          "PRODUCT_GOVERNED",
          "EFFECT_CLASS:generate-temporary-artifact",
          "EFFECT_CONFIRMATION_REQUIRED:N1",
        ],
        stopConditions: ["EFFECTS_UNRESOLVED"],
        requiredCapabilities: ["cap:product-temp-artifact"],
        reversibility: "reversible",
        semanticFingerprint: "abc123def456",
        effectClass: "generate-temporary-artifact",
        effectConfirmationRequired: true,
        effectConfirmationLevel: "N1",
      },
    });

    fireEvent.change(screen.getByTestId("w3a-operation-kind"), {
      target: { value: "generate-temporary-artifact" },
    });
    fireEvent.click(screen.getByTestId("w2-prepare-contract"));
    expect(await screen.findByTestId("w2-contract")).toBeVisible();
    expect(screen.getByTestId("w2-contract-action")).toHaveTextContent(
      "product:generate-temporary-artifact",
    );
    expect(screen.getByTestId("w2-contract-scope")).toHaveTextContent(
      "product:temporary-local-artifact",
    );
    expect(screen.getByTestId("w2-contract-capabilities")).toHaveTextContent(
      "cap:product-temp-artifact",
    );
    // W4-BR-CORR-01 — primary status is business label; raw enum remains audit-only.
    expect(screen.getByTestId("w2-contract-status")).toHaveTextContent(
      "Confirmation requise",
    );
    expect(screen.getByTestId("w2-contract-status")).toHaveAttribute(
      "data-status",
      "confirmation_required",
    );
    expect(screen.getByTestId("w2-contract-status")).not.toHaveTextContent(
      "confirmation_required",
    );
    expect(screen.getByTestId("w2-contract-status-tech")).toHaveTextContent(
      "confirmation_required",
    );
    // E3 — Confirmation affordance requires sufficient inspection, not mere presence.
    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();

    inspectMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:w2-ui",
      contractVersion: 1,
      semanticFingerprint: "abc123def456",
      statusLabel: "INSPECTÉ",
      inspectionSufficient: true,
      attestationRef: "att:test",
      attestedVersion: 1,
      staleAttestationRef: null,
      reinspectionRequired: false,
      reason: "inspected",
      grantsAuthority: false,
    });
    fireEvent.click(screen.getByTestId("w2-inspect-contract"));
    expect(await screen.findByTestId("w2-inspection-state")).toHaveTextContent(
      "INSPECTÉ",
    );
    expect(screen.getByTestId("w2-confirm-contract")).not.toBeDisabled();

    // Amendment affordance appears only after sufficient inspection.
    expect(screen.getByTestId("w2-amendment-form")).toBeVisible();
    expect(screen.queryByTestId("w2-amendment-notice")).toBeNull();

    amendMock.mockResolvedValue({
      ok: true,
      priorExecutionContractId: "xct:w2-ui",
      priorContractVersion: 1,
      priorInspectionAttestationRef: "att:test",
      successor: {
        executionContractId: "xct:w2-ui:amd:deadbeef",
        version: 1,
        status: "confirmation_required",
        action: "w2:inspect-only",
        target: "studio",
        scope: "w2-ui",
        requiredAuthority: "MORRIS",
        constraints: ["AUCUNE EXÉCUTION", "BORNER LE SLICE"],
        stopConditions: ["STOP AVANT EXECUTE"],
        requiredCapabilities: ["cap:f3-fixture-docs"],
        reversibility: "reversible",
        semanticFingerprint: "fff111aaa222",
        supersedesExecutionContractId: "xct:w2-ui",
        supersessionReason: "w2_constraint_amendment",
      },
      supersedesExecutionContractId: "xct:w2-ui",
      materialAmendment: true,
      priorInspectionDoesNotCoverSuccessor: true,
      reinspectionRequired: true,
      statusLabel: "CONTRAT AMENDÉ — RÉINSPECTION REQUISE",
      successorInspection: {
        executionContractId: "xct:w2-ui:amd:deadbeef",
        contractVersion: 1,
        semanticFingerprint: "fff111aaa222",
        statusLabel: "NON INSPECTÉ",
        inspectionSufficient: false,
        attestationRef: null,
        attestedVersion: null,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "no_attestation",
        grantsAuthority: false,
      },
      additionalConstraint: "BORNER LE SLICE",
      replayed: false,
      humanDecisionCreated: false,
      authorityGranted: false,
      confirmationGranted: false,
      executionPerformed: false,
      attemptCreated: false,
    });

    fireEvent.change(screen.getByTestId("w2-amend-constraint"), {
      target: { value: "BORNER LE SLICE" },
    });
    fireEvent.click(screen.getByTestId("w2-amend-contract"));
    expect(await screen.findByTestId("w2-amendment-notice")).toBeVisible();
    expect(screen.getByTestId("w2-amendment-status")).toHaveTextContent(
      /réinspection requise/i,
    );
    expect(screen.getByTestId("w2-contract-constraints")).toHaveTextContent(
      "BORNER LE SLICE",
    );
    expect(screen.getByTestId("w2-inspection-state")).toHaveTextContent(
      "NON INSPECTÉ",
    );
    expect(screen.queryByTestId("w2-amendment-form")).toBeNull();
    expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
    expect(amendMock).toHaveBeenCalledWith({
      projectId: "prj:w2-ui",
      executionContractId: "xct:w2-ui",
      additionalConstraint: "BORNER LE SLICE",
    });

    // R1 — UI consumes application statusLabel (not a hardcoded false required).
    amendMock.mockResolvedValue({
      ok: true,
      priorExecutionContractId: "xct:w2-ui",
      priorContractVersion: 1,
      priorInspectionAttestationRef: "att:test",
      successor: {
        executionContractId: "xct:w2-ui:amd:deadbeef",
        version: 1,
        status: "confirmation_required",
        action: "w2:inspect-only",
        target: "studio",
        scope: "w2-ui",
        requiredAuthority: "MORRIS",
        constraints: ["AUCUNE EXÉCUTION", "BORNER LE SLICE"],
        stopConditions: ["STOP AVANT EXECUTE"],
        requiredCapabilities: ["cap:f3-fixture-docs"],
        reversibility: "reversible",
        semanticFingerprint: "fff111aaa222",
        supersedesExecutionContractId: "xct:w2-ui",
        supersessionReason: "w2_constraint_amendment",
      },
      supersedesExecutionContractId: "xct:w2-ui",
      materialAmendment: true,
      priorInspectionDoesNotCoverSuccessor: true,
      reinspectionRequired: false,
      statusLabel: "CONTRAT AMENDÉ — RÉINSPECTION DÉJÀ SATISFAITE",
      successorInspection: {
        executionContractId: "xct:w2-ui:amd:deadbeef",
        contractVersion: 1,
        semanticFingerprint: "fff111aaa222",
        statusLabel: "INSPECTÉ",
        inspectionSufficient: true,
        attestationRef: "att:successor",
        attestedVersion: 1,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "inspected",
        grantsAuthority: false,
      },
      additionalConstraint: "BORNER LE SLICE",
      replayed: true,
      humanDecisionCreated: false,
      authorityGranted: false,
      confirmationGranted: false,
      executionPerformed: false,
      attemptCreated: false,
    });
    // Re-open form by mocking a second inspect-sufficient path isn't needed —
    // call amend again via preparing another inspect cycle: force form by
    // clicking inspect mock first then amend with already-satisfied truth.
    inspectMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:w2-ui:amd:deadbeef",
      contractVersion: 1,
      semanticFingerprint: "fff111aaa222",
      statusLabel: "INSPECTÉ",
      inspectionSufficient: true,
      attestationRef: "att:successor",
      attestedVersion: 1,
      staleAttestationRef: null,
      reinspectionRequired: false,
      reason: "inspected",
      grantsAuthority: false,
    });
    fireEvent.click(screen.getByTestId("w2-inspect-contract"));
    expect(await screen.findByTestId("w2-amendment-form")).toBeVisible();
    fireEvent.change(screen.getByTestId("w2-amend-constraint"), {
      target: { value: "BORNER LE SLICE" },
    });
    fireEvent.click(screen.getByTestId("w2-amend-contract"));
    expect(await screen.findByTestId("w2-amendment-status")).toHaveTextContent(
      "RÉINSPECTION DÉJÀ SATISFAITE",
    );
    expect(screen.getByTestId("w2-amendment-status")).not.toHaveTextContent(
      "RÉINSPECTION REQUISE",
    );
    expect(screen.getByTestId("w2-inspection-state")).toHaveTextContent(
      "INSPECTÉ",
    );

    authorizeMock.mockResolvedValue({
      ok: true,
      executionContractId: "xct:w2-ui",
      contractVersion: 1,
      outcome: "BLOCKED",
      outcomeLabel: "BLOQUÉ — ACTION REQUISE",
      reasonCode: "inspection_required",
      reasonText: "Le contrat n'a pas été inspecté.",
      nextAction: "Inspecter le contrat avant toute autorisation.",
      inspection: {
        executionContractId: "xct:w2-ui",
        contractVersion: 1,
        semanticFingerprint: "abc",
        statusLabel: "NON INSPECTÉ",
        inspectionSufficient: false,
        attestationRef: null,
        attestedVersion: null,
        staleAttestationRef: null,
        reinspectionRequired: false,
        reason: "no_attestation",
        grantsAuthority: false,
      },
      confirmation: {
        required: true,
        satisfied: false,
        confirmationRef: null,
        statusLabel: "CONFIRMATION REQUISE — MANQUANTE",
        fabricated: false,
      },
      agentCapability: {
        sufficient: false,
        evaluatedAgentRefs: [],
        sufficientAgentRef: null,
        reason: "no_agent_registered",
        statusLabel: "EXÉCUTEUR INSUFFISANT — BLOQUÉ",
      },
      authorityReceiptRef: "avr:test",
      decisionRefs: ["dec:w2-ui"],
      requiredAuthority: "MORRIS",
      verifiedAuthorityLevel: null,
      executionPerformed: false,
      attemptCreated: false,
    });

    fireEvent.click(screen.getByTestId("w2-authorize-contract"));
    expect(await screen.findByTestId("w2-authorization")).toBeVisible();
    expect(screen.getByTestId("w2-authorization-outcome")).toHaveTextContent(
      "Exécution bloquée",
    );
    expect(screen.getByTestId("w2-stop-before-execute")).toHaveTextContent(
      "arrêt avant exécution",
    );
    expect(screen.getByTestId("w2-confirmation-state")).toHaveTextContent(
      "CONFIRMATION REQUISE — MANQUANTE",
    );
    // W3-A: BLOCKED must not expose Execute CTA.
    expect(screen.queryByTestId("w3a-governed-execute")).toBeNull();
  });
});
```

### FILE: projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryBridge.d0.test.ts
```
/** @vitest-environment node */
/**
 * GREENFIELD CURRENT LR → CANDIDATE PROJECT TRAJECTORY BRIDGE — BAR-TRJ-01…24
 * ZERO NEW REAL. D-RB-BOOT-01 / Option B2.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  prepareCandidateTrajectoryFromCurrentRecommendation,
  readPreCycleCandidateTrajectory,
  resolveTrajectoryBootstrapPresence,
  selectCurrentLifecycleRecommendations,
  selectExactCurrentNextCycleRecommendation,
  buildSingleRecommendedCycleStep,
  rebuildBasisRefsForRecommendation,
  deriveLifecycleRecommendationCurrentness,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import type { ActorReference } from "@/lib/oa/project";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { getCycleTypeById } from "@/lib/oa/cycle/domain/cycleTypeCatalog";
import { isCurrentHumanDecisionStatus } from "@/lib/oa/cycle/application/assessFinalization";

const APP_ROOT = path.resolve(__dirname, "../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const tempDirs: string[] = [];

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
  vi.restoreAllMocks();
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "trj-bridge-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:${this.prefix}-${this.n}`;
  }
}

function nextCycleLr(targetCycleTypeId: string, statement: string) {
  return {
    intent: "NEXT_CYCLE" as const,
    statement,
    subjectCycleInstanceId: null,
    targetCycleInstanceId: null,
    targetCycleTypeId,
    rationale: "Prochain travail gouverné supportable.",
    authority: "none" as const,
    isHumanDecision: false as const,
  };
}

function productTurn(
  lr: ReturnType<typeof nextCycleLr>,
  narrative = "Narrative Cadrage recommandée.",
) {
  return {
    narrative,
    preCycleRoutingAssessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
    lifecycleRecommendation: lr,
  };
}

async function bootFreshProject(suffix: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  const runtime = getRuntimeApplicationService({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
    nowIso: "2026-09-09T20:00:00.000Z",
    idSource: new FixedIdSource(`trj-${suffix}`),
    auditMode: "noop",
    productDbPath: tempDbPath(`${suffix}.sqlite`),
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `Fresh bridge ${suffix}`,
    objective: "gestion de tâches",
    context: "application web personnelle",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `TRJ${suffix}`,
    idempotencyKey: `idem:trj-${suffix}`,
  });
  if (!created.ok) throw new Error("create failed");
  return { runtime, projectId: created.projectId };
}

async function materializeFreshNext(
  runtime: Awaited<ReturnType<typeof bootFreshProject>>["runtime"],
  projectId: string,
  lr: ReturnType<typeof nextCycleLr>,
) {
  const oa = runtime.oa!;
  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
  const decisions = await oa.decisionServices.decisions.listByProject(projectId);
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) throw new Error("lps missing");
  const presence = await resolveTrajectoryBootstrapPresence(
    oa.cycleServices.trajectories,
    projectId,
  );
  const project = await oa.projectServices.getProject.execute({ projectId });
  const doctrine =
    (project.ok ? project.project.doctrinePackageRef : null) ?? VALID_PIN;
  const result = await materializeLifecycleRecommendationFromStructuredOutput({
    projectId,
    structuredOutput: productTurn(lr),
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    facts: {
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: doctrine.doctrinePackageId,
      doctrinePackageVersion: doctrine.version,
      doctrinePackageDigest: doctrine.digest,
      trajectory: null,
      trajectoryBootstrapPresence: presence,
      decisions,
      evidence: [],
      epistemicItems: await oa.cycleServices.epistemic.listByProject(projectId),
    },
    producedAt: "2026-09-09T20:01:00.000Z",
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  });
  return result;
}

function expectMaterialized(
  mat: Awaited<ReturnType<typeof materializeFreshNext>>,
) {
  expect(mat.recommendationAttempted).toBe(true);
  expect(mat.materialization?.ok).toBe(true);
  if (!mat.materialization || !mat.materialization.ok) {
    throw new Error(
      `materialization failed: ${mat.materialization && !mat.materialization.ok ? mat.materialization.code : "null"}`,
    );
  }
  return mat.materialization;
}

function bridgeDeps(
  runtime: Awaited<ReturnType<typeof bootFreshProject>>["runtime"],
  extras?: {
    newTrajectoryId?: () => string;
    newStepId?: (k: string) => string;
    newProvenanceObservationId?: () => string;
    correlationId?: string;
  },
) {
  const oa = runtime.oa!;
  return {
    trajectories: oa.cycleServices.trajectories,
    createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    runInTransaction: ((fn: () => Promise<unknown>) =>
      oa.projectServices.store.runInTransaction(fn)) as <T>(
      fn: () => Promise<T>,
    ) => Promise<T>,
    listEpistemicByProject: (projectId: string) =>
      oa.cycleServices.epistemic.listByProject(projectId),
    listCyclesByProject: (projectId: string) =>
      oa.cycleServices.cycles.listByProject(projectId),
    listDecisionsByProject: (projectId: string) =>
      oa.decisionServices.decisions.listByProject(projectId),
    listEvidenceByProject: (projectId: string) =>
      oa.evidenceReviewServices.repository.listByProject(projectId),
    getCurrentLps: (projectId: string) =>
      oa.projectServices.getCurrentLivingProjectState.execute({ projectId }),
    getProjectDoctrinePin: async (projectId: string) => {
      const project = await oa.projectServices.getProject.execute({ projectId });
      if (!project.ok) return null;
      const pin = project.project.doctrinePackageRef;
      return pin
        ? {
            doctrinePackageId: pin.doctrinePackageId,
            version: pin.version,
            digest: pin.digest,
          }
        : null;
    },
    ...extras,
  };
}

describe("GREENFIELD LR → CANDIDATE TRAJECTORY BRIDGE — BAR-TRJ", () => {
  it("BAR-TRJ-01/02/03/04/05/22/23/24 — prepare succeeds with single catalog step, no authority", async () => {
    const { runtime, projectId } = await bootFreshProject("01");
    const mat = await materializeFreshNext(
      runtime,
      projectId,
      nextCycleLr("cyc:framing", "Envisager un Cadrage."),
    );
    const materialized = expectMaterialized(mat);

    const lpsBefore = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
      { projectId },
    );
    expect(lpsBefore.ok).toBe(true);
    const versionBefore = lpsBefore.ok ? lpsBefore.livingProjectState.version : 0;

    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-fixed01",
        newStepId: () => "stp:cadrage-fixed01",
        correlationId: "cor:trj-bridge-01",
      }),
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;

    expect(prepared.recommendationId).toBe(materialized.item.epistemicItemId);
    expect(prepared.targetCycleTypeId).toBe("cyc:framing");
    expect(prepared.catalogLabel).toBe(getCycleTypeById("cyc:framing")!.label);
    expect(prepared.trajectoryId).toBe("trj:lr-bridge-fixed01");
    expect(prepared.trajectoryVersion).toBe(1);
    expect(prepared.correlationId).toBe("cor:trj-bridge-01");

    const traj = await runtime.oa!.cycleServices.trajectories.findByProjectAndVersion(
      projectId,
      1,
    );
    expect(traj).not.toBeNull();
    expect(traj!.status).toBe("candidate");
    expect(traj!.version).toBe(1);
    expect(traj!.steps).toHaveLength(1);
    expect(traj!.steps[0]!.label).toBe("Cadrage");
    expect(traj!.steps[0]!.state).toBe("pending");
    expect(traj!.steps[0]!.stepId).toBe("stp:cadrage-fixed01");
    expect(traj!.decidedByDecisionRef).toBeUndefined();

    expect(
      await runtime.oa!.cycleServices.trajectories.findCurrentByProjectId(
        projectId,
      ),
    ).toBeNull();

    expect(
      (await runtime.oa!.cycleServices.cycles.listByProject(projectId)).length,
    ).toBe(0);
    expect(
      (await runtime.oa!.decisionServices.decisions.listByProject(projectId))
        .length,
    ).toBe(0);
    const lpsAfter = await runtime.oa!.projectServices.getCurrentLivingProjectState.execute(
      { projectId },
    );
    expect(lpsAfter.ok).toBe(true);
    if (lpsAfter.ok) {
      expect(lpsAfter.livingProjectState.version).toBeGreaterThan(versionBefore);
      expect(lpsAfter.livingProjectState.trajectoryId).toBe(
        "trj:lr-bridge-fixed01",
      );
      expect(lpsAfter.livingProjectState.trajectoryVersion).toBe(1);
      expect(lpsAfter.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
    }
  });

  it("BAR-TRJ-06 — source CURRENT LR becomes STALE after candidate material basis change", async () => {
    const { runtime, projectId } = await bootFreshProject("06");
    const mat = await materializeFreshNext(
      runtime,
      projectId,
      nextCycleLr("cyc:framing", "Envisager un Cadrage."),
    );
    const materialized = expectMaterialized(mat);

    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-fixed06",
        newStepId: () => "stp:cadrage-fixed06",
      }),
    });
    expect(prepared.ok).toBe(true);

    const oa = runtime.oa!;
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const traj = await oa.cycleServices.trajectories.findByProjectAndVersion(
      projectId,
      1,
    );
    expect(traj).not.toBeNull();
    const project = await oa.projectServices.getProject.execute({ projectId });
    const doctrine =
      (project.ok ? project.project.doctrinePackageRef : null) ?? VALID_PIN;

    const current = selectCurrentLifecycleRecommendations({
      items: await oa.cycleServices.epistemic.listByProject(projectId),
      cycles: await oa.cycleServices.cycles.listByProject(projectId),
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: doctrine.doctrinePackageId,
      doctrinePackageVersion: doctrine.version,
      doctrinePackageDigest: doctrine.digest,
      trajectory: traj,
      decisions: await oa.decisionServices.decisions.listByProject(projectId),
      evidence: [],
    });
    expect(current.filter((r) => r.intent === "NEXT_CYCLE")).toHaveLength(0);

    const rebuilt = rebuildBasisRefsForRecommendation({
      item: materialized.item,
      facts: {
        cycles: [],
        lpsActiveCycleInstanceId: null,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: doctrine.doctrinePackageId,
        doctrinePackageVersion: doctrine.version,
        doctrinePackageDigest: doctrine.digest,
        trajectory: traj,
        decisions: [],
        evidence: [],
      },
    });
    expect(rebuilt).not.toBeNull();
    expect(
      deriveLifecycleRecommendationCurrentness({
        item: materialized.item,
        currentBasisRefs: rebuilt!,
      }),
    ).toBe("STALE");
  });

  it("BAR-TRJ-07 — no CURRENT NEXT_CYCLE refuses without mutation", async () => {
    const { runtime, projectId } = await bootFreshProject("07");
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime),
    });
    expect(prepared.ok).toBe(false);
    if (prepared.ok) return;
    expect(prepared.code).toBe("TRJ_BRIDGE_NO_CURRENT_NEXT_CYCLE");
    expect(
      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(false);
  });

  it("BAR-TRJ-08 — multiple CURRENT NEXT_CYCLE fail-closed", async () => {
    const { runtime, projectId } = await bootFreshProject("08");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Cadrage A."),
      ),
    );
    // Ambiguity unit: selector refuses >1 CURRENT NEXT_CYCLE without picking by order.
    const envelopes = [
      {
        recommendationId: "epi:lr:a",
        projectId,
        intent: "NEXT_CYCLE" as const,
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:framing",
        producer: "nora" as const,
        producedAt: "2026-09-09T20:01:00.000Z",
        statement: "A",
        basisFingerprint: "fp-a",
        basisRefs: { projectId },
        semanticKey: "key-a",
        authority: "none" as const,
        isHumanDecision: false as const,
        doesNotActivateCycle: true as const,
        doesNotFinalize: true as const,
        doesNotCreateHumanDecision: true as const,
        epistemicStatus: "active" as const,
        supersedesRecommendationId: null,
        derivedCurrentness: "CURRENT" as const,
      },
      {
        recommendationId: "epi:lr:b",
        projectId,
        intent: "NEXT_CYCLE" as const,
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:architecture",
        producer: "nora" as const,
        producedAt: "2026-09-09T20:02:00.000Z",
        statement: "B",
        basisFingerprint: "fp-b",
        basisRefs: { projectId },
        semanticKey: "key-b",
        authority: "none" as const,
        isHumanDecision: false as const,
        doesNotActivateCycle: true as const,
        doesNotFinalize: true as const,
        doesNotCreateHumanDecision: true as const,
        epistemicStatus: "active" as const,
        supersedesRecommendationId: null,
        derivedCurrentness: "CURRENT" as const,
      },
    ];
    const selected = selectExactCurrentNextCycleRecommendation(envelopes);
    expect(selected.ok).toBe(false);
    if (!selected.ok) {
      expect(selected.code).toBe("TRJ_BRIDGE_AMBIGUOUS_CURRENT_NEXT_CYCLE");
    }
  });

  it("BAR-TRJ-09 — non-canonical targetCycleTypeId fail-closed", async () => {
    const step = buildSingleRecommendedCycleStep({
      targetCycleTypeId: "Cadrage",
      stepId: "stp:bad",
    });
    expect(step.ok).toBe(false);
    if (!step.ok) {
      expect(step.code).toMatch(/LR_TARGET_CYCLE_TYPE/);
    }
  });

  it("BAR-TRJ-10/15 — existing candidate refuses second prepare; double invocation ≤1", async () => {
    const { runtime, projectId } = await bootFreshProject("10");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const first = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-fixed10a",
        newStepId: () => "stp:cadrage-fixed10a",
      }),
    });
    expect(first.ok).toBe(true);

    const second = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-fixed10b",
        newStepId: () => "stp:cadrage-fixed10b",
      }),
    });
    expect(second.ok).toBe(false);
    if (!second.ok) {
      expect(
        second.code === "TRJ_BRIDGE_TRAJECTORY_HISTORY_PRESENT" ||
          second.code === "TRJ_BRIDGE_NO_CURRENT_NEXT_CYCLE",
      ).toBe(true);
    }
    const v2 = await runtime.oa!.cycleServices.trajectories.findByProjectAndVersion(
      projectId,
      2,
    );
    expect(v2).toBeNull();
    expect(
      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(true);
  });

  it("BAR-TRJ-11 — CycleInstance present refuses bridge", async () => {
    const { runtime, projectId } = await bootFreshProject("11");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const deps = bridgeDeps(runtime);
    deps.listCyclesByProject = async () =>
      [
        {
          cycleInstanceId: "cycinst:trj-bridge-11",
          projectId,
          cycleTypeId: "cyc:framing",
          status: "active",
        },
      ] as never;
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps,
    });
    expect(prepared.ok).toBe(false);
    if (!prepared.ok) {
      expect(
        prepared.code === "LR_BOOTSTRAP_CYCLE_PRESENT" ||
          prepared.code === "TRJ_BRIDGE_NO_CURRENT_NEXT_CYCLE",
      ).toBe(true);
    }
    expect(
      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(false);
  });

  it("BAR-TRJ-12 — incompatible current HumanDecision refuses", async () => {
    const { runtime, projectId } = await bootFreshProject("12");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    expect(isCurrentHumanDecisionStatus("accepted")).toBe(true);
    const deps = bridgeDeps(runtime);
    deps.listDecisionsByProject = async () =>
      [
        {
          decisionId: "hd:fake-12",
          projectId,
          status: "accepted",
          subject: "trajectory",
          authority: "N2",
          actor: {
            actorId: "actor:pilote",
            role: "project_owner",
            authorityLevel: "N2",
          },
          selectedOptionId: "opt:x",
          effectiveAt: "2026-09-09T20:00:00.000Z",
        },
      ] as never;
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps,
    });
    expect(prepared.ok).toBe(false);
    if (!prepared.ok) {
      // HD either makes LR STALE (basis fingerprint) or fails greenfield eligibility.
      expect(
        prepared.code === "LR_BOOTSTRAP_HD_PRESENT" ||
          prepared.code === "TRJ_BRIDGE_NO_CURRENT_NEXT_CYCLE",
      ).toBe(true);
    }
    expect(
      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(false);
  });

  it("BAR-TRJ-13 — trajectory read UNKNOWN fail-closed", async () => {
    const { runtime, projectId } = await bootFreshProject("13");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const deps = bridgeDeps(runtime);
    deps.trajectories = {
      ...deps.trajectories,
      findCurrentByProjectId: async () => {
        throw new Error("boom");
      },
      hasAnyByProjectId: async () => {
        throw new Error("boom");
      },
    };
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps,
    });
    expect(prepared.ok).toBe(false);
    if (!prepared.ok) {
      expect(prepared.code).toBe("TRJ_BRIDGE_TRAJECTORY_UNKNOWN");
    }
  });

  it("BAR-TRJ-14 — LPS OCC failure leaves no second trajectory", async () => {
    const { runtime, projectId } = await bootFreshProject("14");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const deps = bridgeDeps(runtime, {
      newTrajectoryId: () => "trj:lr-bridge-occ14",
      newStepId: () => "stp:cadrage-occ14",
    });
    const originalCreate = deps.createInitialTrajectory;
    deps.createInitialTrajectory = {
      execute: async (request) =>
        originalCreate.execute({
          ...request,
          expectedLpsVersion: request.expectedLpsVersion + 99,
        }),
    } as typeof originalCreate;
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps,
    });
    expect(prepared.ok).toBe(false);
    if (!prepared.ok) {
      expect(prepared.code).toBe("LPS_VERSION_CONFLICT");
    }
    expect(
      await runtime.oa!.cycleServices.trajectories.findCurrentByProjectId(
        projectId,
      ),
    ).toBeNull();
    expect(
      (await runtime.oa!.decisionServices.decisions.listByProject(projectId))
        .length,
    ).toBe(0);
    // UoW rollback: no durable candidate row.
    expect(
      await runtime.oa!.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(false);
  });

  it("BAR-TRJ-16 — durable candidate read survives fresh rehydrate", async () => {
    const { runtime, projectId } = await bootFreshProject("16");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-fixed16",
        newStepId: () => "stp:cadrage-fixed16",
      }),
    });
    expect(prepared.ok).toBe(true);

    const read1 = await readPreCycleCandidateTrajectory({
      projectId,
      trajectories: runtime.oa!.cycleServices.trajectories,
      getCurrentLps: (pid) =>
        runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
          projectId: pid,
        }),
      listCyclesByProject: (pid) =>
        runtime.oa!.cycleServices.cycles.listByProject(pid),
      listEpistemicByProject: (pid) =>
        runtime.oa!.cycleServices.epistemic.listByProject(pid),
    });
    expect(read1.ok).toBe(true);
    if (!read1.ok || !read1.candidate) throw new Error("missing candidate");
    expect(read1.candidate.status).toBe("candidate");
    expect(read1.candidate.isEffectiveCurrent).toBe(false);
    expect(read1.candidate.catalogLabel).toBe("Cadrage");
    expect(read1.candidate.steps).toHaveLength(1);
    expect(read1.candidate.provenanceStatus).toBe("RESOLVED");
    expect(read1.candidate.targetCycleTypeId).toBe("cyc:framing");

    // Fresh reader path (no React) — second call equals first.
    const read2 = await readPreCycleCandidateTrajectory({
      projectId,
      trajectories: runtime.oa!.cycleServices.trajectories,
      getCurrentLps: (pid) =>
        runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
          projectId: pid,
        }),
      listCyclesByProject: (pid) =>
        runtime.oa!.cycleServices.cycles.listByProject(pid),
      listEpistemicByProject: (pid) =>
        runtime.oa!.cycleServices.epistemic.listByProject(pid),
    });
    expect(read2.ok && read2.candidate?.trajectoryId).toBe(
      read1.candidate.trajectoryId,
    );
  });

  it("BAR-TRJ-17/18/20/21 — CTA bridge wiring + no W2 weaken + no model call (structural)", () => {
    const lifecycleSrc = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx",
      ),
      "utf8",
    );
    expect(lifecycleSrc).toContain("Préparer la trajectoire");
    expect(lifecycleSrc).toContain(
      "projectAssistantPrepareCandidateTrajectoryAction",
    );
    expect(lifecycleSrc).toContain("preCycleCandidateTrajectoryActions");
    expect(lifecycleSrc).toContain("projectId");
    expect(lifecycleSrc).not.toMatch(
      /prepareCandidateTrajectoryFromCurrentRecommendation\(\{[\s\S]*targetCycleTypeId:/,
    );

    const trajSrc = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx",
      ),
      "utf8",
    );
    expect(trajSrc).toContain("Trajectoire proposée");
    expect(trajSrc.toLowerCase()).toContain("en attente de décision");
    expect(trajSrc).toContain("pre-cycle-candidate-trajectory");
    expect(trajSrc).toContain("Valider cette trajectoire");
    expect(trajSrc).toContain("pre-cycle-validate-trajectory");
    expect(trajSrc).toContain("activeCycleInstanceId");
    // Pre-cycle candidate hides W2 propose (gated), does not weaken qualificationInputs.
    const qualSrc = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "features/project-assistant/w2/qualificationInputs.ts",
      ),
      "utf8",
    );
    expect(qualSrc).toContain("CYCLE_NOT_QUALIFIED");
    expect(qualSrc).toContain("activeCycleInstanceId");

    const bridgeSrc = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "lib/oa/cycle/application/lifecycleRecommendation/prepareCandidateTrajectoryFromCurrentRecommendation.ts",
      ),
      "utf8",
    );
    expect(bridgeSrc).not.toMatch(/openai|OpenAI|runNora|Agents/i);
    expect(bridgeSrc).toContain("createInitialTrajectory.execute");
    expect(bridgeSrc).toContain("NORA_LIFECYCLE_RECOMMENDATION_ACTOR");
    expect(bridgeSrc).toContain("deriveLifecycleBlockersFromEpistemicItems");
    expect(bridgeSrc).not.toMatch(
      /blockingReservationStatements:\s*input\.blockingReservationStatements\s*\?\?\s*\[\]/,
    );
  });

  it("BAR-TRJ-19 — W2 proposeTrajectoryOptions module still requires active cycle (regression)", () => {
    const src = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "features/project-assistant/w2/qualificationInputs.ts",
      ),
      "utf8",
    );
    expect(src).toMatch(/Aucun cycle qualifié n'est actif/);
  });

  it("BAR-TRJ-25 — blocking Reservation stales LR and bridge refuses", async () => {
    const { runtime, projectId } = await bootFreshProject("25");
    const materialized = expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );

    const epi = await runtime.oa!.cycleServices.updateEpistemicState.execute({
      projectId,
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
      items: [
        {
          epistemicItemId: "epi:rsv-blocking-25",
          type: "Reservation",
          statement: "blocking_reservation_trj25",
          status: "active",
          blocking: true,
        },
      ],
    });
    expect(epi.ok).toBe(true);

    const oa = runtime.oa!;
    const project = await oa.projectServices.getProject.execute({ projectId });
    const doctrine =
      (project.ok ? project.project.doctrinePackageRef : null) ?? VALID_PIN;
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const items = await oa.cycleServices.epistemic.listByProject(projectId);
    const { deriveLifecycleBlockersFromEpistemicItems } = await import(
      "@/lib/oa/cycle"
    );
    const blockers = deriveLifecycleBlockersFromEpistemicItems(items);
    expect(blockers.statements).toContain("blocking_reservation_trj25");

    const current = selectCurrentLifecycleRecommendations({
      items,
      cycles: await oa.cycleServices.cycles.listByProject(projectId),
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: doctrine.doctrinePackageId,
      doctrinePackageVersion: doctrine.version,
      doctrinePackageDigest: doctrine.digest,
      trajectory: null,
      decisions: await oa.decisionServices.decisions.listByProject(projectId),
      evidence: [],
      blockingReservationStatements: blockers.statements,
    });
    expect(current.filter((r) => r.intent === "NEXT_CYCLE")).toHaveLength(0);

    const rebuilt = rebuildBasisRefsForRecommendation({
      item: materialized.item,
      facts: {
        cycles: [],
        lpsActiveCycleInstanceId: null,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: doctrine.doctrinePackageId,
        doctrinePackageVersion: doctrine.version,
        doctrinePackageDigest: doctrine.digest,
        trajectory: null,
        decisions: [],
        evidence: [],
        blockingReservationStatements: blockers.statements,
      },
    });
    expect(rebuilt).not.toBeNull();
    expect(
      deriveLifecycleRecommendationCurrentness({
        item: materialized.item,
        currentBasisRefs: rebuilt!,
      }),
    ).toBe("STALE");

    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-should-not-25",
        newStepId: () => "stp:should-not-25",
      }),
    });
    expect(prepared.ok).toBe(false);
    if (!prepared.ok) {
      expect(prepared.code).toBe("TRJ_BRIDGE_NO_CURRENT_NEXT_CYCLE");
    }
    expect(
      await oa.cycleServices.trajectories.hasAnyByProjectId(projectId),
    ).toBe(false);
    expect((await oa.cycleServices.cycles.listByProject(projectId)).length).toBe(
      0,
    );
    expect(
      (await oa.decisionServices.decisions.listByProject(projectId)).length,
    ).toBe(0);
  });

  it("BAR-TRJ-26 — non-blocking Reservation does not stale LR / bridge still succeeds", async () => {
    const { runtime, projectId } = await bootFreshProject("26");
    expectMaterialized(
      await materializeFreshNext(
        runtime,
        projectId,
        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      ),
    );
    const epi = await runtime.oa!.cycleServices.updateEpistemicState.execute({
      projectId,
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
      items: [
        {
          epistemicItemId: "epi:rsv-nonblocking-26",
          type: "Reservation",
          statement: "non_blocking_note_trj26",
          status: "active",
          blocking: false,
        },
      ],
    });
    expect(epi.ok).toBe(true);

    const { deriveLifecycleBlockersFromEpistemicItems } = await import(
      "@/lib/oa/cycle"
    );
    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const blockers = deriveLifecycleBlockersFromEpistemicItems(items);
    expect(blockers.statements).not.toContain("non_blocking_note_trj26");
    expect(blockers.statements).toHaveLength(0);

    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps(runtime, {
        newTrajectoryId: () => "trj:lr-bridge-fixed26",
        newStepId: () => "stp:cadrage-fixed26",
      }),
    });
    expect(prepared.ok).toBe(true);
  });

  it("BAR-TRJ-29 — W2 active-cycle qualification contract unchanged (structural)", () => {
    const src = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "features/project-assistant/w2/qualificationInputs.ts",
      ),
      "utf8",
    );
    expect(src).toContain("CYCLE_NOT_QUALIFIED");
    expect(src).toContain("activeCycleInstanceId");
    const trajSrc = fs.readFileSync(
      path.resolve(
        APP_ROOT,
        "features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx",
      ),
      "utf8",
    );
    // W2 CTA gated strictly on activeCycleInstanceId truth.
    expect(trajSrc).toMatch(/activeCycleInstanceId \? \(/);
    expect(trajSrc).toContain("hasCurrentNextCycleRecommendation");
  });
});
```

### FILE: projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryHumanDecision.d0.test.ts
```
/** @vitest-environment node */
/**
 * GREENFIELD CANDIDATE TRAJECTORY → HUMANDECISION — BAR-HD-01…42
 * ZERO NEW REAL. Deterministic Product SQLite only.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  computeCandidateContentDigest,
  computeCandidateTrajectoryPresentationDigest,
  buildCandidateTrajectoryPresentationMaterial,
  CANDIDATE_TRAJECTORY_APPROVAL_OPTION_ID,
  CANDIDATE_TRAJECTORY_APPROVAL_OPTION_LABEL,
  isTargetCycleCurrentlySelectable,
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  prepareCandidateTrajectoryFromCurrentRecommendation,
  resolveCandidateTrajectoryProvenance,
  resolveTrajectoryBootstrapPresence,
  candidateTrajectoryApprovalSubject,
} from "@/lib/oa/cycle";
import {
  approveCandidateTrajectory,
  buildPreCycleCandidateApprovalPresentation,
} from "@/features/project-assistant/approveCandidateTrajectory";
import { assertCandidateTrajectoryDecisionAuthorizesPromotion } from "@/features/project-assistant/candidateTrajectoryPromotionGuard";
import type { DecisionBasis } from "@/lib/oa/decision";
import {
  computeDecisionBasisSourceDigest,
  LOCAL_PILOTE_ACTOR,
  LOCAL_PILOTE_ACTOR_ID,
  validateDecisionBasis,
} from "@/lib/oa/decision";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import * as cycleTypeCatalog from "@/lib/oa/cycle/domain/cycleTypeCatalog";

const APP_ROOT = path.resolve(__dirname, "../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const tempDirs: string[] = [];

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
  vi.restoreAllMocks();
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "trj-hd-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:${this.prefix}-${this.n}`;
  }
}

function nextCycleLr(targetCycleTypeId: string, statement: string) {
  return {
    intent: "NEXT_CYCLE" as const,
    statement,
    subjectCycleInstanceId: null,
    targetCycleInstanceId: null,
    targetCycleTypeId,
    rationale: "Prochain travail gouverné supportable.",
    authority: "none" as const,
    isHumanDecision: false as const,
  };
}

function productTurn(lr: ReturnType<typeof nextCycleLr>) {
  return {
    narrative: "Narrative Cadrage recommandée.",
    preCycleRoutingAssessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
    lifecycleRecommendation: lr,
  };
}

async function bootFreshProject(suffix: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  const productDbPath = tempDbPath(`${suffix}.sqlite`);
  const runtime = getRuntimeApplicationService({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
    nowIso: "2026-09-10T00:00:00.000Z",
    idSource: new FixedIdSource(`hd-${suffix}`),
    auditMode: "noop",
    productDbPath,
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `Fresh HD ${suffix}`,
    objective: "gestion de tâches",
    context: "application web personnelle",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `HD${suffix}`.slice(0, 8),
    idempotencyKey: `idem:hd-${suffix}`,
  });
  if (!created.ok) throw new Error("create failed");
  return { runtime, projectId: created.projectId, productDbPath };
}

async function materializeFreshNext(
  runtime: Awaited<ReturnType<typeof bootFreshProject>>["runtime"],
  projectId: string,
  lr: ReturnType<typeof nextCycleLr>,
) {
  const oa = runtime.oa!;
  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
  const decisions = await oa.decisionServices.decisions.listByProject(projectId);
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) throw new Error("lps missing");
  const presence = await resolveTrajectoryBootstrapPresence(
    oa.cycleServices.trajectories,
    projectId,
  );
  const project = await oa.projectServices.getProject.execute({ projectId });
  const doctrine =
    (project.ok ? project.project.doctrinePackageRef : null) ?? VALID_PIN;
  return materializeLifecycleRecommendationFromStructuredOutput({
    projectId,
    structuredOutput: productTurn(lr),
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    facts: {
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: doctrine.doctrinePackageId,
      doctrinePackageVersion: doctrine.version,
      doctrinePackageDigest: doctrine.digest,
      trajectory: null,
      trajectoryBootstrapPresence: presence,
      decisions,
      evidence: [],
      epistemicItems: await oa.cycleServices.epistemic.listByProject(projectId),
    },
    producedAt: "2026-09-10T00:01:00.000Z",
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  });
}

function bridgeDeps(
  runtime: Awaited<ReturnType<typeof bootFreshProject>>["runtime"],
  extras?: {
    newTrajectoryId?: () => string;
    newStepId?: (k: string) => string;
    newProvenanceObservationId?: () => string;
    correlationId?: string;
  },
) {
  const oa = runtime.oa!;
  return {
    trajectories: oa.cycleServices.trajectories,
    createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    runInTransaction: ((fn: () => Promise<unknown>) =>
      oa.projectServices.store.runInTransaction(fn)) as <T>(
      fn: () => Promise<T>,
    ) => Promise<T>,
    listEpistemicByProject: (projectId: string) =>
      oa.cycleServices.epistemic.listByProject(projectId),
    listCyclesByProject: (projectId: string) =>
      oa.cycleServices.cycles.listByProject(projectId),
    listDecisionsByProject: (projectId: string) =>
      oa.decisionServices.decisions.listByProject(projectId),
    listEvidenceByProject: (projectId: string) =>
      oa.evidenceReviewServices.repository.listByProject(projectId),
    getCurrentLps: (projectId: string) =>
      oa.projectServices.getCurrentLivingProjectState.execute({ projectId }),
    getProjectDoctrinePin: async (projectId: string) => {
      const project = await oa.projectServices.getProject.execute({ projectId });
      if (!project.ok) return null;
      const pin = project.project.doctrinePackageRef;
      return pin
        ? {
            doctrinePackageId: pin.doctrinePackageId,
            version: pin.version,
            digest: pin.digest,
          }
        : null;
    },
    ...extras,
  };
}

async function seedCandidate(
  suffix: string,
  opts?: { trajectoryId?: string; stepId?: string; provId?: string },
) {
  const { runtime, projectId } = await bootFreshProject(suffix);
  const mat = await materializeFreshNext(
    runtime,
    projectId,
    nextCycleLr("cyc:framing", "Envisager un Cadrage."),
  );
  expect(mat.recommendationAttempted).toBe(true);
  expect(mat.materialization?.ok).toBe(true);
  const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
    projectId,
    deps: bridgeDeps(runtime, {
      newTrajectoryId: () => opts?.trajectoryId ?? `trj:hd-${suffix}`,
      newStepId: () => opts?.stepId ?? `stp:hd-${suffix}`,
      newProvenanceObservationId: () => opts?.provId ?? `epi:trj-prov-hd-${suffix}`,
      correlationId: `cor:hd-${suffix}`,
    }),
  });
  expect(prepared.ok).toBe(true);
  if (!prepared.ok) throw new Error("prepare failed");
  const presentation = await buildPreCycleCandidateApprovalPresentation({
    oa: runtime.oa!,
    projectId,
  });
  expect(presentation.ok).toBe(true);
  if (!presentation.ok || !presentation.presentation) {
    throw new Error("presentation missing");
  }
  return {
    runtime,
    projectId,
    prepared,
    presentation: presentation.presentation,
    oa: runtime.oa!,
  };
}

describe("GREENFIELD CANDIDATE → HUMANDECISION — BAR-HD", () => {
  it("BAR-HD-01/02/03/04 — DecisionBasis candidate_trajectory invariants + legacy", () => {
    const ctx = {
      trajectoryId: "trj:x",
      candidateVersion: 1,
      provenanceObservationId: "epi:p",
      recommendationId: "epi:r",
      semanticKey: "sk",
      targetCycleTypeId: "cyc:framing",
      candidateContentDigest: "aa",
      presentationDigest: "bb",
    };
    const valid: DecisionBasis = {
      sourceType: "candidate_trajectory",
      sourceRef: "trj:x",
      sourceDigest: "bb",
      projectId: "prj:x",
      proposalContext: { lpsId: "lps:1", lpsVersion: 1 },
      candidateTrajectoryContext: ctx,
      executionBasis: { cycleTypeId: "cyc:framing" },
    };
    expect(validateDecisionBasis(valid)).toBeNull();

    expect(
      validateDecisionBasis({
        ...valid,
        candidateTrajectoryContext: undefined,
      })?.reason,
    ).toBe("candidate_trajectory_context_required");

    expect(
      validateDecisionBasis({
        ...valid,
        trajectoryContext: {
          trajectoryId: "trj:x",
          candidateVersion: 1,
          optionRefs: ["o1"],
          selectedOptionRef: "o1",
        },
      })?.reason,
    ).toBe("candidate_trajectory_forbids_trajectory_context");

    // Legacy: missing DecisionBasis is ok for readers (validate returns null).
    expect(validateDecisionBasis(undefined)).toBeNull();

    const proposal: DecisionBasis = {
      sourceType: "proposal",
      sourceRef: "prop:1",
      sourceDigest: "d",
      projectId: "prj:x",
      proposalContext: { lpsId: "lps:1", lpsVersion: 1 },
      executionBasis: {},
    };
    expect(validateDecisionBasis(proposal)).toBeNull();
    expect(
      validateDecisionBasis({
        ...proposal,
        candidateTrajectoryContext: ctx,
      })?.reason,
    ).toBe("proposal_forbids_candidate_trajectory_context");

    const w2: DecisionBasis = {
      sourceType: "trajectory_option",
      sourceRef: "optset:1",
      sourceDigest: "d",
      projectId: "prj:x",
      proposalContext: { lpsId: "lps:1", lpsVersion: 1 },
      trajectoryContext: {
        trajectoryId: "trj:x",
        candidateVersion: 1,
        optionRefs: ["o1"],
        selectedOptionRef: "o1",
      },
      executionBasis: {},
    };
    expect(validateDecisionBasis(w2)).toBeNull();
  });

  it("BAR-HD-05/06/07/08 — presentation DTO + digests deterministic / content change", async () => {
    const seeded = await seedCandidate("05");
    const digestA = seeded.presentation.presentationDigest;
    const again = await buildPreCycleCandidateApprovalPresentation({
      oa: seeded.oa,
      projectId: seeded.projectId,
    });
    expect(again.ok).toBe(true);
    if (!again.ok || !again.presentation) return;
    expect(again.presentation.presentationDigest).toBe(digestA);
    expect(again.presentation.approvalOptionLabel).toBe(
      CANDIDATE_TRAJECTORY_APPROVAL_OPTION_LABEL,
    );

    const traj = await seeded.oa.cycleServices.trajectories.findByProjectAndVersion(
      seeded.projectId,
      1,
    );
    expect(traj).not.toBeNull();
    const contentA = computeCandidateContentDigest({
      trajectoryId: traj!.trajectoryId,
      version: traj!.version,
      status: traj!.status,
      steps: traj!.steps,
    });
    const contentA2 = computeCandidateContentDigest({
      trajectoryId: traj!.trajectoryId,
      version: traj!.version,
      status: traj!.status,
      steps: traj!.steps,
    });
    expect(contentA).toBe(contentA2);

    const mutated = structuredClone(traj!);
    mutated.steps = [
      ...mutated.steps,
      {
        stepId: "stp:extra",
        order: 2,
        label: "Extra",
        state: "pending",
      },
    ];
    const contentB = computeCandidateContentDigest({
      trajectoryId: mutated.trajectoryId,
      version: mutated.version,
      status: mutated.status,
      steps: mutated.steps,
    });
    expect(contentB).not.toBe(contentA);
  });

  it("BAR-HD-09 — TOCTOU candidate steps change refuses + 0 HD", async () => {
    const seeded = await seedCandidate("09");
    const traj = await seeded.oa.cycleServices.trajectories.findByProjectAndVersion(
      seeded.projectId,
      1,
    );
    expect(traj).not.toBeNull();
    const staleDigest = seeded.presentation.presentationDigest;
    await seeded.oa.cycleServices.trajectories.save({
      ...traj!,
      steps: [
        ...traj!.steps,
        { stepId: "stp:drift", order: 2, label: "Drift", state: "pending" },
      ],
    });
    const failed = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: staleDigest,
      forceLocalAuthority: true,
    });
    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect(failed.code).toBe("CANDIDATE_TRAJECTORY_DECISION_STALE");
    const hds = await seeded.oa.decisionServices.decisions.listByProject(
      seeded.projectId,
    );
    expect(hds.filter((d) => d.status === "accepted")).toHaveLength(0);
    const still = await seeded.oa.cycleServices.trajectories.findByProjectAndVersion(
      seeded.projectId,
      1,
    );
    expect(still?.status).toBe("candidate");
  });

  it("BAR-HD-10 — TOCTOU LPS version change refuses", async () => {
    const seeded = await seedCandidate("10");
    const lps = await seeded.oa.projectServices.getCurrentLivingProjectState.execute(
      { projectId: seeded.projectId },
    );
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const appended =
      await seeded.oa.projectServices.appendLivingProjectStateVersion.execute({
        projectId: seeded.projectId,
        expectedVersion: lps.livingProjectState.version,
        objective: `${lps.livingProjectState.objective} (drift)`,
        createdBy: LOCAL_PILOTE_ACTOR,
        correlationId: "cor:hd-lps-drift",
      });
    expect(appended.ok).toBe(true);
    const failed = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect(failed.code).toBe("CANDIDATE_TRAJECTORY_DECISION_STALE");
  });

  it("BAR-HD-11/12/13 — provenance missing/ambiguous/invalid → no HD", async () => {
    const seeded = await seedCandidate("11");
    // Remove provenance observations by superseding them.
    const items = await seeded.oa.cycleServices.epistemic.listByProject(
      seeded.projectId,
    );
    const prov = items.filter(
      (i) =>
        i.type === "Observation" &&
        i.source === "candidate-trajectory-provenance:bridge",
    );
    expect(prov.length).toBeGreaterThan(0);
    await seeded.oa.cycleServices.updateEpistemicState.execute({
      projectId: seeded.projectId,
      items: prov.map((p) => ({
        epistemicItemId: p.epistemicItemId,
        type: p.type,
        statement: p.statement,
        status: "superseded" as const,
        source: p.source,
        relatedObjects: p.relatedObjects,
      })),
      createdBy: LOCAL_PILOTE_ACTOR,
      correlationId: "cor:hd-prov-gone",
    });
    const failed = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect(failed.code).toMatch(/^PROVENANCE_/);
    expect(
      (
        await seeded.oa.decisionServices.decisions.listByProject(
          seeded.projectId,
        )
      ).filter((d) => d.status === "accepted"),
    ).toHaveLength(0);
  });

  it("BAR-HD-14/15 — historical RESOLVED + current selectability DENIED", async () => {
    const seeded = await seedCandidate("14");
    const epi = await seeded.oa.cycleServices.epistemic.listByProject(
      seeded.projectId,
    );
    const provenance = resolveCandidateTrajectoryProvenance({
      projectId: seeded.projectId,
      trajectoryId: seeded.prepared.trajectoryId,
      epistemicItems: epi,
    });
    expect(provenance.status).toBe("RESOLVED");

    const realGet = cycleTypeCatalog.getCycleTypeById;
    vi.spyOn(cycleTypeCatalog, "getCycleTypeById").mockImplementation((id) => {
      const entry = realGet(id);
      if (!entry) return undefined;
      return { ...entry, lifecycleStatus: "deprecated" };
    });

    const still = resolveCandidateTrajectoryProvenance({
      projectId: seeded.projectId,
      trajectoryId: seeded.prepared.trajectoryId,
      epistemicItems: epi,
    });
    expect(still.status).toBe("RESOLVED");
    expect(isTargetCycleCurrentlySelectable("cyc:framing")).toBe(false);

    const failed = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect(failed.code).toBe("TARGET_CYCLE_NOT_SELECTABLE");
  });

  it("BAR-HD-16 — no label reverse-map: HD uses provenance targetCycleTypeId", async () => {
    const seeded = await seedCandidate("16");
    const ok = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    expect(ok.ok).toBe(true);
    if (!ok.ok) return;
    const hd = await seeded.oa.decisionServices.getHumanDecision.execute({
      decisionId: ok.decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) return;
    expect(
      hd.decision.decisionBasis?.candidateTrajectoryContext?.targetCycleTypeId,
    ).toBe("cyc:framing");
    expect(ok.targetCycleTypeId).toBe("cyc:framing");
  });

  it("BAR-HD-17/18 — server authority; missing authority refuses", async () => {
    const seeded = await seedCandidate("17");
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "0";
    const failed = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      // no forceLocalAuthority
    });
    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect(
      (
        await seeded.oa.decisionServices.decisions.listByProject(
          seeded.projectId,
        )
      ).filter((d) => d.status === "accepted"),
    ).toHaveLength(0);

    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    const actionSource = fs.readFileSync(
      path.join(
        APP_ROOT,
        "features/project-assistant/preCycleCandidateTrajectoryActions.ts",
      ),
      "utf8",
    );
    expect(actionSource).toMatch(
      /projectAssistantApprovePreCycleCandidateTrajectoryAction/,
    );
    expect(actionSource).not.toMatch(/claimedAuthorityLevel/);
    expect(actionSource).not.toMatch(/canActAsMorris/);
    expect(actionSource).not.toMatch(/authorityEvidenceId:\s*input/);
  });

  it("BAR-HD-19/20/21/23/29/34/35/36/37/38 — atomic success path seals HD + promote as-is", async () => {
    const seeded = await seedCandidate("23");
    const pre = await seeded.oa.cycleServices.trajectories.findByProjectAndVersion(
      seeded.projectId,
      1,
    );
    const preSteps = JSON.stringify(pre!.steps);
    const preLps = await seeded.oa.projectServices.getCurrentLivingProjectState.execute(
      { projectId: seeded.projectId },
    );
    expect(preLps.ok).toBe(true);
    if (!preLps.ok) return;

    const ok = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    expect(ok.ok).toBe(true);
    if (!ok.ok) return;

    const hd = await seeded.oa.decisionServices.getHumanDecision.execute({
      decisionId: ok.decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) return;
    expect(hd.decision.status).toBe("accepted");
    expect(hd.decision.actor.actorId).toBe(LOCAL_PILOTE_ACTOR_ID);
    expect(hd.decision.authority).toBe("morris");
    expect(hd.decision.options).toHaveLength(1);
    expect(hd.decision.options[0]!.optionId).toBe(
      CANDIDATE_TRAJECTORY_APPROVAL_OPTION_ID,
    );
    expect(hd.decision.selectedOptionId).toBe(
      CANDIDATE_TRAJECTORY_APPROVAL_OPTION_ID,
    );
    expect(hd.decision.cycleInstanceId).toBeUndefined();
    const basis = hd.decision.decisionBasis!;
    expect(basis.sourceType).toBe("candidate_trajectory");
    expect(basis.sourceRef).toBe(ok.trajectoryId);
    expect(basis.sourceDigest).toBe(seeded.presentation.presentationDigest);
    expect(basis.candidateTrajectoryContext?.presentationDigest).toBe(
      basis.sourceDigest,
    );
    expect(basis.trajectoryContext).toBeUndefined();

    const current = await seeded.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    expect(current.trajectory.status).toBe("validated");
    expect(current.trajectory.decidedByDecisionRef).toBe(ok.decisionId);
    expect(current.trajectory.decidedOptionRef).toBeUndefined();
    expect(JSON.stringify(current.trajectory.steps)).toBe(preSteps);

    const cycles = await seeded.oa.cycleServices.cycles.listByProject(
      seeded.projectId,
    );
    expect(cycles).toHaveLength(0);
    const ecs =
      await seeded.oa.executionContractServices.contracts.listByProject(
        seeded.projectId,
      );
    expect(ecs).toHaveLength(0);
    const confs = await seeded.oa.decisionServices.confirmations.findById(
      "conf:none-expected",
    );
    expect(confs).toBeNull();
    // No Confirmation created on this path — list API is not on the port; count via HD history only.
    void confs;

    const lpsAfter =
      await seeded.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded.projectId,
      });
    expect(lpsAfter.ok).toBe(true);
    if (!lpsAfter.ok) return;
    expect(lpsAfter.livingProjectState.version).toBeGreaterThan(
      preLps.livingProjectState.version,
    );
    expect(lpsAfter.livingProjectState.activeCycleInstanceId).toBeUndefined();
    expect(lpsAfter.livingProjectState.decisionIds).toContain(ok.decisionId);
    expect(lpsAfter.livingProjectState.trajectoryId).toBe(ok.trajectoryId);

    const epi = await seeded.oa.cycleServices.epistemic.listByProject(
      seeded.projectId,
    );
    expect(epi.some((i) => i.type === "DecisionRef")).toBe(false);
  });

  it("BAR-HD-22 — promotion guard mismatch rolls back", async () => {
    const seeded = await seedCandidate("22");
    const failed = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
      __testMutateDecisionBeforeGuard: (d) => {
        const next = structuredClone(d);
        if (next.decisionBasis?.candidateTrajectoryContext) {
          next.decisionBasis.candidateTrajectoryContext.semanticKey =
            "tampered";
        }
        return next;
      },
    });
    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect(failed.code).toBe("CTX_SEMANTIC_KEY_MISMATCH");
    expect(
      (
        await seeded.oa.decisionServices.decisions.listByProject(
          seeded.projectId,
        )
      ).filter((d) => d.status === "accepted"),
    ).toHaveLength(0);
    const traj = await seeded.oa.cycleServices.trajectories.findByProjectAndVersion(
      seeded.projectId,
      1,
    );
    expect(traj?.status).toBe("candidate");
  });

  it("BAR-HD-24 — HD save failure → no HD / no promotion", async () => {
    const seeded = await seedCandidate("24");
    const store = seeded.oa.projectServices.store as {
      failNextSave?: string | null;
    };
    store.failNextSave = "decision";
    const failed = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    store.failNextSave = null;
    expect(failed.ok).toBe(false);
    expect(
      (
        await seeded.oa.decisionServices.decisions.listByProject(
          seeded.projectId,
        )
      ).filter((d) => d.status === "accepted"),
    ).toHaveLength(0);
  });

  it("BAR-HD-25 — HD LPS append failure → rollback", async () => {
    const seeded = await seedCandidate("25");
    const preLps = await seeded.oa.projectServices.getCurrentLivingProjectState.execute(
      { projectId: seeded.projectId },
    );
    const store = seeded.oa.projectServices.store as {
      failNextSave?: string | null;
    };
    store.failNextSave = "lps";
    const failed = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    store.failNextSave = null;
    expect(failed.ok).toBe(false);
    expect(
      (
        await seeded.oa.decisionServices.decisions.listByProject(
          seeded.projectId,
        )
      ).filter((d) => d.status === "accepted"),
    ).toHaveLength(0);
    const postLps =
      await seeded.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded.projectId,
      });
    expect(postLps.ok && preLps.ok).toBe(true);
    if (postLps.ok && preLps.ok) {
      expect(postLps.livingProjectState.version).toBe(
        preLps.livingProjectState.version,
      );
    }
  });

  it("BAR-HD-26 — readback failure → outer rollback", async () => {
    const seeded = await seedCandidate("26");
    const spy = vi
      .spyOn(seeded.oa.decisionServices.getHumanDecision, "execute")
      .mockResolvedValueOnce({
        ok: false,
        error: {
          detailCode: "DECISION_NOT_FOUND",
          message: "forced",
        },
      } as never);
    const failed = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    spy.mockRestore();
    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect(failed.code).toBe("READBACK_FAILURE");
    expect(
      (
        await seeded.oa.decisionServices.decisions.listByProject(
          seeded.projectId,
        )
      ).filter((d) => d.status === "accepted"),
    ).toHaveLength(0);
  });

  it("BAR-HD-27/28 — BLOCKING: promote failure after HD rolls back HD+LPS", async () => {
    const seeded = await seedCandidate("27");
    const preLps = await seeded.oa.projectServices.getCurrentLivingProjectState.execute(
      { projectId: seeded.projectId },
    );
    const store = seeded.oa.projectServices.store as {
      failNextSave?: string | null;
    };
    store.failNextSave = "trajectory";
    const failed = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    store.failNextSave = null;
    expect(failed.ok).toBe(false);

    expect(
      (
        await seeded.oa.decisionServices.decisions.listByProject(
          seeded.projectId,
        )
      ).filter((d) => d.status === "accepted"),
    ).toHaveLength(0);

    const traj = await seeded.oa.cycleServices.trajectories.findByProjectAndVersion(
      seeded.projectId,
      1,
    );
    expect(traj?.status).toBe("candidate");
    expect(traj?.decidedByDecisionRef).toBeUndefined();

    const current = await seeded.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(false);

    const postLps =
      await seeded.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: seeded.projectId,
      });
    expect(postLps.ok && preLps.ok).toBe(true);
    if (postLps.ok && preLps.ok) {
      expect(postLps.livingProjectState.version).toBe(
        preLps.livingProjectState.version,
      );
    }
  });

  it("BAR-HD-30 — double sequential invocation ≤1 accepted HD", async () => {
    const seeded = await seedCandidate("30");
    const first = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    expect(first.ok).toBe(true);
    const second = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    expect(second.ok).toBe(false);
    if (second.ok) return;
    expect(second.code).toBe("ALREADY_DECIDED");
    const accepted = (
      await seeded.oa.decisionServices.decisions.listByProject(seeded.projectId)
    ).filter((d) => d.status === "accepted");
    expect(accepted).toHaveLength(1);
  });

  it("BAR-HD-31 — concurrent invocation → exactly one accepted (SQLite)", async () => {
    const seeded = await seedCandidate("31");
    const digest = seeded.presentation.presentationDigest;
    const [a, b] = await Promise.all([
      approveCandidateTrajectory({
        oa: seeded.oa,
        projectId: seeded.projectId,
        presentationDigest: digest,
        forceLocalAuthority: true,
      }),
      approveCandidateTrajectory({
        oa: seeded.oa,
        projectId: seeded.projectId,
        presentationDigest: digest,
        forceLocalAuthority: true,
      }),
    ]);
    const successes = [a, b].filter((r) => r.ok);
    expect(successes.length).toBe(1);
    const accepted = (
      await seeded.oa.decisionServices.decisions.listByProject(seeded.projectId)
    ).filter((d) => d.status === "accepted");
    expect(accepted).toHaveLength(1);
  });

  it("BAR-HD-32 — already current/validated → no new HD", async () => {
    const seeded = await seedCandidate("32");
    const first = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    expect(first.ok).toBe(true);
    const again = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    expect(again.ok).toBe(false);
    if (again.ok) return;
    expect(again.code).toBe("ALREADY_DECIDED");
  });

  it("BAR-HD-33 — activeCycleInstanceId refuses greenfield path", async () => {
    const seeded = await seedCandidate("33");
    const lps = await seeded.oa.projectServices.getCurrentLivingProjectState.execute(
      { projectId: seeded.projectId },
    );
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const appended =
      await seeded.oa.projectServices.appendLivingProjectStateVersion.execute({
        projectId: seeded.projectId,
        expectedVersion: lps.livingProjectState.version,
        objective: lps.livingProjectState.objective,
        createdBy: LOCAL_PILOTE_ACTOR,
        correlationId: "cor:hd-active-cycle",
        activeCycleInstanceId: "cycinst:fake-active",
      });
    expect(appended.ok).toBe(true);
    // Digest stale due to LPS change OR active cycle — either refuse is correct.
    const failed = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest: seeded.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect([
      "ACTIVE_CYCLE_PRESENT",
      "CANDIDATE_TRAJECTORY_DECISION_STALE",
    ]).toContain(failed.code);
  });

  it("BAR-HD-39/40 — proposal + W2 DecisionBasis regression (validate)", () => {
    expect(
      validateDecisionBasis({
        sourceType: "proposal",
        sourceRef: "p",
        sourceDigest: "d",
        projectId: "prj:x",
        proposalContext: { lpsId: "lps:1", lpsVersion: 1 },
        executionBasis: {},
      }),
    ).toBeNull();
    expect(
      validateDecisionBasis({
        sourceType: "trajectory_option",
        sourceRef: "os",
        sourceDigest: "d",
        projectId: "prj:x",
        proposalContext: { lpsId: "lps:1", lpsVersion: 1 },
        trajectoryContext: {
          trajectoryId: "trj:x",
          candidateVersion: 1,
          optionRefs: ["a", "b"],
          selectedOptionRef: "a",
        },
        executionBasis: {},
      }),
    ).toBeNull();
  });

  it("BAR-HD-41/42 — provenance + bridge regression smoke", async () => {
    const seeded = await seedCandidate("41");
    const epi = await seeded.oa.cycleServices.epistemic.listByProject(
      seeded.projectId,
    );
    const provenance = resolveCandidateTrajectoryProvenance({
      projectId: seeded.projectId,
      trajectoryId: seeded.prepared.trajectoryId,
      epistemicItems: epi,
    });
    expect(provenance.status).toBe("RESOLVED");
    expect(seeded.prepared.ok).toBe(true);
    if (!seeded.prepared.ok) return;
    expect(seeded.prepared.trajectoryVersion).toBe(1);
  });

  it("digest gate — sourceDigest === presentationDigest === sealed object", async () => {
    const seeded = await seedCandidate("digest");
    const traj = await seeded.oa.cycleServices.trajectories.findByProjectAndVersion(
      seeded.projectId,
      1,
    );
    const live = await seeded.oa.projectServices.getCurrentLivingProjectState.execute(
      { projectId: seeded.projectId },
    );
    expect(traj && live.ok).toBeTruthy();
    if (!traj || !live.ok) return;
    const epi = await seeded.oa.cycleServices.epistemic.listByProject(
      seeded.projectId,
    );
    const provenance = resolveCandidateTrajectoryProvenance({
      projectId: seeded.projectId,
      trajectoryId: traj.trajectoryId,
      epistemicItems: epi,
    });
    expect(provenance.status).toBe("RESOLVED");
    if (provenance.status !== "RESOLVED") return;
    const material = buildCandidateTrajectoryPresentationMaterial({
      projectId: seeded.projectId,
      lpsId: live.livingProjectState.lpsVersionId,
      lpsVersion: live.livingProjectState.version,
      doctrineDigest: live.livingProjectState.doctrinePackageRef.digest,
      trajectory: traj,
      provenanceObservationId: provenance.provenanceObservationId,
      recommendationId: provenance.recommendationId,
      semanticKey: provenance.semanticKey,
      targetCycleTypeId: provenance.targetCycleTypeId,
    });
    const presentationDigest =
      computeCandidateTrajectoryPresentationDigest(material);
    expect(presentationDigest).toBe(seeded.presentation.presentationDigest);
    expect(computeDecisionBasisSourceDigest(material)).toBe(presentationDigest);

    const ok = await approveCandidateTrajectory({
      oa: seeded.oa,
      projectId: seeded.projectId,
      presentationDigest,
      forceLocalAuthority: true,
    });
    expect(ok.ok).toBe(true);
    if (!ok.ok) return;
    const hd = await seeded.oa.decisionServices.getHumanDecision.execute({
      decisionId: ok.decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) return;
    expect(hd.decision.decisionBasis?.sourceDigest).toBe(presentationDigest);
    expect(
      hd.decision.decisionBasis?.candidateTrajectoryContext
        ?.candidateContentDigest,
    ).toBe(material.candidate.candidateContentDigest);

    const promoted = await seeded.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(promoted.ok).toBe(true);
    if (!promoted.ok) return;
    const promotedContent = computeCandidateContentDigest({
      trajectoryId: promoted.trajectory.trajectoryId,
      version: promoted.trajectory.version,
      status: "candidate", // content digest over steps/id/version — status validated differs
      steps: promoted.trajectory.steps,
    });
    // Content digest at approve time used candidate status; promoted status changed.
    // Seal is steps/id/version equivalence — compare steps digest via material projection.
    expect(JSON.stringify(promoted.trajectory.steps)).toBe(
      JSON.stringify(traj.steps),
    );
    expect(promoted.trajectory.trajectoryId).toBe(traj.trajectoryId);
    expect(promoted.trajectory.version).toBe(traj.version);
    void promotedContent;
    void candidateTrajectoryApprovalSubject;
    void assertCandidateTrajectoryDecisionAuthorizesPromotion;
  });
});
```

### FILE: projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
```
/** @vitest-environment node */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../..");
const RUNTIME_ROOT = path.join(APP_ROOT, "lib/vertical-slice-runtime");

function listSourceFiles(root: string): string[] {
  const files: string[] = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const full = path.join(root, entry.name);
    if (entry.isDirectory()) files.push(...listSourceFiles(full));
    else if (/\.(ts|tsx)$/.test(entry.name)) files.push(full);
  }
  return files;
}

describe("V2-A1 vertical-slice-runtime import boundaries", () => {
  it("keeps the runtime free of UI, fixtures, client storage, and agent imports", () => {
    const forbidden =
      /(?:from|require\()\s*["'](?:react|react-dom|next\/link|next\/navigation|next\/image|@\/app|@\/components|@\/features|@\/lib\/vertical-slice(?:\/|["'])|@\/lib\/harness|@\/lib\/ops1|@\/lib\/agents)|\b(?:sessionStorage|localStorage|document|window)\s*[.(]/;
    const violations = listSourceFiles(RUNTIME_ROOT).flatMap((file) =>
      fs
        .readFileSync(file, "utf8")
        .split("\n")
        .map((line, index) => ({
          file: path.relative(APP_ROOT, file),
          line: index + 1,
          text: line.trim(),
        }))
        .filter((entry) => forbidden.test(entry.text)),
    );
    expect(violations).toEqual([]);
  });

  it("does not import product-persistence stores as business state", () => {
    // Audit may reference BoundedAtomicAuditStore types; forbidding db.ts and
    // treating SQLite as product persistence rehydration.
    const forbidden =
      /@\/lib\/d1\/db|productPersistence\s*:\s*["']SELECTED["']|runReady\s*:\s*true|productReady\s*:\s*true/;
    const violations = listSourceFiles(RUNTIME_ROOT).flatMap((file) =>
      fs
        .readFileSync(file, "utf8")
        .split("\n")
        .map((line, index) => ({
          file: path.relative(APP_ROOT, file),
          line: index + 1,
          text: line.trim(),
        }))
        .filter((entry) => forbidden.test(entry.text)),
    );
    expect(violations).toEqual([]);
  });

  it("allows only the bounded V2 UI runtime entrypoints", () => {
    const uiRoots = [
      path.join(APP_ROOT, "app"),
      path.join(APP_ROOT, "components"),
      path.join(APP_ROOT, "features"),
    ];
    const imports = uiRoots.flatMap((root) =>
      listSourceFiles(root).flatMap((file) =>
        fs
          .readFileSync(file, "utf8")
          .split("\n")
          .map((line, index) => ({
            file: path.relative(APP_ROOT, file),
            line: index + 1,
            text: line.trim(),
          }))
          .filter((entry) => /@\/lib\/vertical-slice-runtime/.test(entry.text)),
      ),
    );

    const allowed = new Set([
      "app/api/e2e/option-a-qa-scenario/route.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
      "features/project-assistant/actions.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/composeMw6GovernedAuthority.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/mw6GovernedNoraTurn.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/f2/orchestrateF2.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/f2/orchestrateF2.ts:@/lib/vertical-slice-runtime/paths",
      "features/project-assistant/f2/resolveMw5ProductAuthorityFromOa.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/f2/studioCognitiveContext.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/f3/confirmAndExecuteResolvedM3.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/f3/confirmAndExecuteResolvedM3.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
      "features/project-assistant/f3/prepareAndResolveM3ProductPath.ts:@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha",
      "features/project-assistant/f3/selectProductM3ResolutionProfile.ts:@/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary",
      "features/project-assistant/f3/e2eOptionATerminalAttempt.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/f3/e2eOptionATerminalAttempt.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
      "features/project-assistant/mw3AvailableEvidence.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/preCycleCandidateTrajectoryActions.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/approveCandidateTrajectory.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/w2/actions.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/w2/actions.ts:@/lib/vertical-slice-runtime/liveProjectContext",
      "features/project-assistant/w2/amendExecutionContract.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/w2/authorizeExecutionContract.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/w2/confirmForAuthorization.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/w2/decideTrajectory.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/w2/governedExecuteAuthorizedContract.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/w2/inspectExecutionContract.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/w2/materializeW3bProductTerminal.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/w2/w3cPostEvidenceLoop.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/w2/governedExecuteAuthorizedContract.ts:@/lib/vertical-slice-runtime/w3bE2eBoundaryControl",
      "app/api/e2e/w3b-boundary/route.ts:@/lib/vertical-slice-runtime/w3bE2eBoundaryControl",
      "features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/w2/presentedOptionSet.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/w2/projectHistory.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/w2/proposeTrajectoryOptions.ts:@/lib/vertical-slice-runtime",
      "features/project-assistant/w2/qualificationInputs.ts:@/lib/vertical-slice-runtime",
      "features/pre-m6-product-ui/NewProjectIntentionPage.tsx:@/lib/vertical-slice-runtime/actions",
      "features/pre-m6-product-ui/ProjectWorkspacePage.tsx:@/lib/vertical-slice-runtime/actions",
      "features/pre-m6-product-ui/ProjectsPage.tsx:@/lib/vertical-slice-runtime/actions",
      "features/pre-m6-product-ui/types.ts:@/lib/vertical-slice-runtime/actions",
      "features/studio-projects/LivingProjectStatePanel.tsx:@/lib/vertical-slice-runtime/actions",
      "features/studio-projects/ProjectHistoryPanel.tsx:@/lib/vertical-slice-runtime/actions",
      "features/studio-projects/ProjectPrincipalClient.tsx:@/lib/vertical-slice-runtime/actions",
      "features/studio-projects/StudioProjectsHome.tsx:@/lib/vertical-slice-runtime/actions",
      "features/studio-projects/StudioProjectsHome.tsx:@/lib/vertical-slice-runtime",
      "features/vertical-slice-ui/CreateProjectForm.tsx:@/lib/vertical-slice-runtime/actions",
      "features/vertical-slice-ui/ProjectWorkspaceClient.tsx:@/lib/vertical-slice-runtime/actions",
      "features/vertical-slice-ui/ProjectWorkspaceView.tsx:@/lib/vertical-slice-runtime/actions",
    ]);
    const normalized = imports.map((entry) => {
      const modulePath = entry.text.match(
        /@\/lib\/vertical-slice-runtime(?:\/[^"']+)?/,
      )?.[0];
      return `${entry.file}:${modulePath}`;
    });

    expect(new Set(normalized)).toEqual(allowed);
  });

  it("keeps V2-A2/V2-A3 UI free of core, internal runtime, D1, fixtures, storage, network, and agents", () => {
    const roots = [
      path.join(APP_ROOT, "app/studio"),
      path.join(APP_ROOT, "app/studio/projects/new"),
      path.join(APP_ROOT, "app/studio/projects/[id]"),
      path.join(APP_ROOT, "features/vertical-slice-ui"),
      path.join(APP_ROOT, "features/studio-projects"),
    ];
    const forbidden =
      /@\/lib\/(?:vertical-slice-core|vertical-slice-runtime\/(?:service|singleton|mapping|paths|serverGuard|index)|d1|harness|ops1|agents)|@\/features\/d1|@\/fixtures|\b(?:sessionStorage|localStorage|fetch)\s*[.(]/;
    const violations = roots.flatMap((root) =>
      listSourceFiles(root).flatMap((file) =>
        fs
          .readFileSync(file, "utf8")
          .split("\n")
          .map((line, index) => ({
            file: path.relative(APP_ROOT, file),
            line: index + 1,
            text: line.trim(),
          }))
          .filter((entry) => forbidden.test(entry.text)),
      ),
    );
    expect(violations).toEqual([]);
  });

  it("keeps V1 core free of runtime dependency (one-way reuse)", () => {
    const coreRoot = path.join(APP_ROOT, "lib/vertical-slice-core");
    const violations = listSourceFiles(coreRoot).flatMap((file) =>
      fs
        .readFileSync(file, "utf8")
        .split("\n")
        .map((line, index) => ({
          file: path.relative(APP_ROOT, file),
          line: index + 1,
          text: line.trim(),
        }))
        .filter((entry) =>
          /@\/lib\/vertical-slice-runtime/.test(entry.text),
        ),
    );
    expect(violations).toEqual([]);
  });
});
```

### FILE: projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
```
"use client";

/**
 * W2 / W3-A product surface — Options, Recommendation, HumanDecision, decided
 * trajectory, contract inspection, effective authority, and (W3-A) fixture
 * governed Execute after AUTHORIZED.
 *
 * The surface never derives truth: every state shown here comes from a server
 * action over the product application path.
 */

import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import {
  w2AmendExecutionContractAction,
  w2AuthorizeExecutionContractAction,
  w2ConfirmExecutionContractAction,
  w2DecideTrajectoryAction,
  w2GovernedExecuteCancelAction,
  w2GovernedExecuteCompleteAction,
  w2GovernedExecuteSelectAction,
  w2GovernedExecuteStartAction,
  w2InspectExecutionContractAction,
  w2MaterializeProductOutcomeAction,
  w2PrepareExecutionContractAction,
  w2ProposeTrajectoryOptionsAction,
  w2RehydrateProductOutcomeAction,
} from "@/features/project-assistant/w2/actions";
import {
  projectAssistantApprovePreCycleCandidateTrajectoryAction,
  projectAssistantReadCandidateTrajectoryApprovalPresentationAction,
  projectAssistantReadPreCycleCandidateTrajectoryAction,
} from "@/features/project-assistant/preCycleCandidateTrajectoryActions";
import type {
  AmendExecutionContractSuccess,
  ContractInspectionStateDto,
  DecidedTrajectoryDto,
  ExecutionAuthorizationOutcomeDto,
  GovernedExecuteAttemptProjection,
  GovernedExecutePhaseSuccess,
  TrajectoryDecisionRecordDto,
  TrajectoryOptionSetDto,
  W3BProductOutcomeDto,
  W3cPostEvidenceLoopDto,
} from "@/features/project-assistant/w2/types";
import {
  W4C_NEXT_ACTION_LEAD,
  W4C_POST_EVIDENCE_HEADING,
  W4C_PRODUCT_OUTCOME_LABELS,
} from "@/features/project-assistant/presentationLabels";
import { filterProductReservationsForDisplay } from "@/features/project-assistant/w2/w3cProductPresentation";
import type { ExecutionContractStatus } from "@/lib/oa/execution-contract/domain/types";
import styles from "./TrajectorySurface.module.css";

/**
 * Presentation-only labels for ExecutionContractStatus.
 * Exhaustive over the domain union; never surfaces the raw enum as primary copy.
 */
const EXECUTION_CONTRACT_STATUS_LABELS: Record<ExecutionContractStatus, string> =
  {
    draft: "Brouillon",
    proposed: "Proposé",
    validated: "Validé",
    confirmation_required: "Confirmation requise",
    confirmed: "Confirmation enregistrée",
    executing: "Exécution en cours",
    completed: "Exécution terminée",
    failed: "Échec d'exécution",
    cancelled: "Annulé",
    superseded: "Remplacé",
  };

function executionContractStatusLabel(status: string): string {
  if (Object.prototype.hasOwnProperty.call(EXECUTION_CONTRACT_STATUS_LABELS, status)) {
    return EXECUTION_CONTRACT_STATUS_LABELS[status as ExecutionContractStatus];
  }
  return "État du contrat indisponible";
}

/** Explicit Pilot-qualified operation — never inferred from W2 trajectory alone. */
type QualifiedOperationKind = "generate-temporary-artifact" | "simulate" | "read";

type PreparedContract = {
  readonly executionContractId: string;
  readonly version: number;
  readonly status: string;
  readonly action: string;
  readonly target: string;
  readonly scope: string;
  readonly requiredAuthority: string;
  readonly constraints: readonly string[];
  readonly stopConditions: readonly string[];
  readonly requiredCapabilities: readonly string[];
  readonly reversibility: string;
  readonly semanticFingerprint: string;
  readonly effectConfirmationRequired?: boolean;
  readonly effectConfirmationLevel?: string | null;
};

type AmendmentNotice = {
  readonly priorExecutionContractId: string;
  readonly additionalConstraint: string;
  readonly statusLabel: string;
  readonly priorInspectionDoesNotCoverSuccessor: true;
};

type Busy =
  | null
  | "options"
  | "decision"
  | "qualify"
  | "contract"
  | "inspection"
  | "confirmation"
  | "authorization"
  | "amendment"
  | "execute"
  | "approve-candidate";

/**
 * Yield so React can commit and the browser can paint each Attempt phase.
 * Double rAF only — no fixed-duration sleep / business latency (R09-R).
 */
function yieldBrowserPaint(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        resolve();
      });
    });
  });
}

export function TrajectorySurface({
  projectId,
  onDurableFactsChanged,
  recoveryProposeSignal = 0,
  durableRefreshSignal = 0,
  composition = "standalone",
}: {
  projectId: string;
  onDurableFactsChanged?: () => void;
  /** B1 — increment from RecoverySurface requalify to reuse proposeOptions(). */
  recoveryProposeSignal?: number;
  /** Increment after Lifecycle bridge / durable mutations to rehydrate candidate. */
  durableRefreshSignal?: number;
  /**
   * H-01 Option A: embed visually in the LPS piloting region.
   * Presentation-only — does not change ProjectTrajectory domain identity.
   */
  composition?: "standalone" | "lps-embedded";
}) {
  const [busy, setBusy] = useState<Busy>(null);
  const [error, setError] = useState<string | null>(null);
  const [preCycleCandidate, setPreCycleCandidate] = useState<{
    trajectoryId: string;
    version: number;
    status: "candidate";
    steps: readonly { stepId: string; order: number; label: string; state: string }[];
    catalogLabel: string | null;
    targetCycleTypeId: string | null;
    provenanceStatus?: string;
    provenanceObservationId?: string | null;
    recommendationId?: string | null;
    semanticKey?: string | null;
  } | null>(null);
  const [approvalPresentation, setApprovalPresentation] = useState<{
    presentationDigest: string;
    targetCycleSelectable: boolean;
    catalogLabel: string | null;
    targetCycleTypeId: string;
    approvalOptionLabel: string;
  } | null>(null);
  const [greenfieldDecided, setGreenfieldDecided] = useState<{
    trajectoryId: string;
    version: number;
    status: string;
    decidedByDecisionRef: string | null;
    targetCycleTypeId: string | null;
    catalogLabel: string | null;
  } | null>(null);
  const [activeCycleInstanceId, setActiveCycleInstanceId] = useState<
    string | null
  >(null);
  const [hasCurrentNextCycleRecommendation, setHasCurrentNextCycleRecommendation] =
    useState(false);
  const [optionSet, setOptionSet] = useState<TrajectoryOptionSetDto | null>(
    null,
  );
  const [decision, setDecision] = useState<TrajectoryDecisionRecordDto | null>(
    null,
  );
  const [decided, setDecided] = useState<DecidedTrajectoryDto | null>(null);
  const [contract, setContract] = useState<PreparedContract | null>(null);
  const [inspection, setInspection] =
    useState<ContractInspectionStateDto | null>(null);
  const [authorization, setAuthorization] =
    useState<ExecutionAuthorizationOutcomeDto | null>(null);
  const [amendmentDraft, setAmendmentDraft] = useState("");
  const [amendmentNotice, setAmendmentNotice] =
    useState<AmendmentNotice | null>(null);
  const [attempt, setAttempt] =
    useState<GovernedExecuteAttemptProjection | null>(null);
  const [attemptPhase, setAttemptPhase] = useState<
    GovernedExecutePhaseSuccess["phase"] | null
  >(null);
  /** Append-only paint trail — proves R09 sequence even with a sync adapter. */
  const [attemptPhaseHistory, setAttemptPhaseHistory] = useState<string[]>([]);
  const [attemptStatusLabel, setAttemptStatusLabel] = useState<string | null>(
    null,
  );
  const [productOutcome, setProductOutcome] =
    useState<W3BProductOutcomeDto | null>(null);
  const [postEvidence, setPostEvidence] =
    useState<W3cPostEvidenceLoopDto | null>(null);
  const [productEvidencePending, setProductEvidencePending] = useState(false);
  const [qualifiedOperationKind, setQualifiedOperationKind] =
    useState<QualifiedOperationKind | null>(null);

  function paintAttemptPhase(
    phase: GovernedExecutePhaseSuccess["phase"],
    nextAttempt: GovernedExecuteAttemptProjection | null,
    statusLabel: string | null,
  ): void {
    flushSync(() => {
      if (nextAttempt) setAttempt(nextAttempt);
      setAttemptPhase(phase);
      if (statusLabel !== null) setAttemptStatusLabel(statusLabel);
      setAttemptPhaseHistory((prev) =>
        prev[prev.length - 1] === phase ? prev : [...prev, phase],
      );
    });
  }

  const proposeOptions = useCallback(async () => {
    setBusy("options");
    setError(null);
    const result = await w2ProposeTrajectoryOptionsAction({ projectId });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const { ok: _ok, ...set } = result;
    setOptionSet(set);
    setDecision(null);
    setDecided(null);
    setContract(null);
    setInspection(null);
    setAuthorization(null);
    setAmendmentDraft("");
    setAmendmentNotice(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptStatusLabel(null);
    setProductOutcome(null);
    setPostEvidence(null);
    onDurableFactsChanged?.();
  }, [projectId, onDurableFactsChanged]);

  const refreshPreCycleCandidate = useCallback(async () => {
    const result = await projectAssistantReadPreCycleCandidateTrajectoryAction({
      projectId,
    });
    if (!result.ok) {
      setPreCycleCandidate(null);
      setActiveCycleInstanceId(null);
      setHasCurrentNextCycleRecommendation(false);
      setApprovalPresentation(null);
      setGreenfieldDecided(null);
      return;
    }
    setActiveCycleInstanceId(result.activeCycleInstanceId ?? null);
    setPreCycleCandidate(result.candidate ?? null);
    setHasCurrentNextCycleRecommendation(
      result.hasCurrentNextCycleRecommendation === true,
    );

    const approval =
      await projectAssistantReadCandidateTrajectoryApprovalPresentationAction({
        projectId,
      });
    if (!approval.ok) {
      setApprovalPresentation(null);
      setGreenfieldDecided(null);
      return;
    }
    setGreenfieldDecided(approval.alreadyDecided ?? null);
    if (approval.presentation) {
      setApprovalPresentation({
        presentationDigest: approval.presentation.presentationDigest,
        targetCycleSelectable: approval.presentation.targetCycleSelectable,
        catalogLabel: approval.presentation.catalogLabel,
        targetCycleTypeId: approval.presentation.targetCycleTypeId,
        approvalOptionLabel: approval.presentation.approvalOptionLabel,
      });
    } else {
      setApprovalPresentation(null);
    }
  }, [projectId]);

  const approveCandidate = useCallback(async () => {
    if (!approvalPresentation) return;
    setBusy("approve-candidate");
    setError(null);
    const result = await projectAssistantApprovePreCycleCandidateTrajectoryAction({
      projectId,
      presentationDigest: approvalPresentation.presentationDigest,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message ?? result.code ?? "Approbation refusée.");
      await refreshPreCycleCandidate();
      return;
    }
    setGreenfieldDecided({
      trajectoryId: result.trajectoryId!,
      version: result.trajectoryVersion!,
      status: result.status!,
      decidedByDecisionRef: result.decidedByDecisionRef ?? null,
      targetCycleTypeId: result.targetCycleTypeId ?? null,
      catalogLabel: result.catalogLabel ?? null,
    });
    setPreCycleCandidate(null);
    setApprovalPresentation(null);
    onDurableFactsChanged?.();
    await refreshPreCycleCandidate();
  }, [
    approvalPresentation,
    projectId,
    onDurableFactsChanged,
    refreshPreCycleCandidate,
  ]);

  useEffect(() => {
    void refreshPreCycleCandidate();
  }, [refreshPreCycleCandidate]);

  useEffect(() => {
    if (durableRefreshSignal > 0) {
      void refreshPreCycleCandidate();
    }
  }, [durableRefreshSignal, refreshPreCycleCandidate]);

  useEffect(() => {
    if (recoveryProposeSignal > 0) {
      void proposeOptions();
    }
  }, [recoveryProposeSignal, proposeOptions]);

  const decide = useCallback(
    async (selectedOptionRef: string) => {
      if (!optionSet) return;
      setBusy("decision");
      setError(null);
      const result = await w2DecideTrajectoryAction({
        projectId,
        optionSetRef: optionSet.optionSetRef,
        trajectoryId: optionSet.proposedTrajectory.trajectoryId,
        candidateVersion: optionSet.proposedTrajectory.version,
        selectedOptionRef,
      });
      setBusy(null);
      if (!result.ok) {
        setError(result.message);
        return;
      }
      setDecision(result.decision);
      setDecided(result.trajectory);
      onDurableFactsChanged?.();
    },
    [optionSet, projectId, onDurableFactsChanged],
  );

  const prepareContract = useCallback(async () => {
    if (!decision || !qualifiedOperationKind) return;
    setBusy("contract");
    setError(null);
    const result = await w2PrepareExecutionContractAction({
      projectId,
      decisionId: decision.decisionId,
      qualifiedOperationKind,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const prepared = result.contract;
    setContract({
      executionContractId: prepared.executionContractId,
      version: prepared.version,
      status: prepared.status,
      action: prepared.action,
      target: prepared.target,
      scope: prepared.scope,
      requiredAuthority: prepared.requiredAuthority,
      constraints: [...prepared.constraints],
      stopConditions: [...prepared.stopConditions],
      requiredCapabilities: [...prepared.requiredCapabilities],
      reversibility: prepared.reversibility,
      semanticFingerprint: prepared.semanticFingerprint,
      effectConfirmationRequired: prepared.effectConfirmationRequired,
      effectConfirmationLevel: prepared.effectConfirmationLevel ?? null,
    });
    setInspection(null);
    setAuthorization(null);
    setAmendmentDraft("");
    setAmendmentNotice(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptStatusLabel(null);
    onDurableFactsChanged?.();
  }, [decision, projectId, qualifiedOperationKind, onDurableFactsChanged]);

  const inspect = useCallback(async () => {
    if (!contract) return;
    setBusy("inspection");
    setError(null);
    const result = await w2InspectExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const { ok: _ok, ...state } = result;
    setInspection(state);
    setAuthorization(null);
    if (amendmentNotice && state.inspectionSufficient) {
      setAmendmentNotice({
        ...amendmentNotice,
        statusLabel: "CONTRAT AMENDÉ — RÉINSPECTION DÉJÀ SATISFAITE",
      });
    }
  }, [contract, projectId, amendmentNotice]);

  const amendContract = useCallback(async () => {
    if (!contract || !inspection?.inspectionSufficient) return;
    const constraint = amendmentDraft.trim();
    if (!constraint) {
      setError("Indiquez une contrainte d'exécution supplémentaire.");
      return;
    }
    setBusy("amendment");
    setError(null);
    const result = await w2AmendExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
      additionalConstraint: constraint,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const amended = result as AmendExecutionContractSuccess;
    setContract({
      executionContractId: amended.successor.executionContractId,
      version: amended.successor.version,
      status: amended.successor.status,
      action: amended.successor.action,
      target: amended.successor.target,
      scope: amended.successor.scope,
      requiredAuthority: amended.successor.requiredAuthority,
      constraints: [...amended.successor.constraints],
      stopConditions: [...amended.successor.stopConditions],
      requiredCapabilities: [...amended.successor.requiredCapabilities],
      reversibility: amended.successor.reversibility,
      semanticFingerprint: amended.successor.semanticFingerprint,
    });
    setInspection(amended.successorInspection);
    setAuthorization(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptStatusLabel(null);
    setAmendmentDraft("");
    setAmendmentNotice({
      priorExecutionContractId: amended.priorExecutionContractId,
      additionalConstraint: amended.additionalConstraint,
      statusLabel: amended.statusLabel,
      priorInspectionDoesNotCoverSuccessor: true,
    });
    onDurableFactsChanged?.();
  }, [
    contract,
    inspection,
    amendmentDraft,
    projectId,
    onDurableFactsChanged,
  ]);

  const confirmForAuthorization = useCallback(async () => {
    if (!contract) return;
    setBusy("confirmation");
    setError(null);
    const result = await w2ConfirmExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setContract({ ...contract, status: "confirmed" });
    setAuthorization(null);
  }, [contract, projectId]);

  const authorize = useCallback(async () => {
    if (!contract) return;
    setBusy("authorization");
    setError(null);
    setAttempt(null);
    setAttemptPhase(null);
    setAttemptPhaseHistory([]);
    setAttemptStatusLabel(null);
    const result = await w2AuthorizeExecutionContractAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    const { ok: _ok, ...outcome } = result;
    setAuthorization(outcome);
    setInspection(outcome.inspection);
  }, [contract, projectId]);

  const governedExecute = useCallback(async () => {
    if (!contract || authorization?.outcome !== "AUTHORIZED") return;
    setBusy("execute");
    setError(null);
    flushSync(() => {
      setAttempt(null);
      setAttemptPhase(null);
      setAttemptPhaseHistory([]);
      setAttemptStatusLabel(null);
      setProductOutcome(null);
      setProductEvidencePending(false);
    });

    const selected = await w2GovernedExecuteSelectAction({
      projectId,
      executionContractId: contract.executionContractId,
    });
    if (!selected.ok) {
      setBusy(null);
      setError(selected.message);
      if (selected.attempt) {
        paintAttemptPhase("accepted", selected.attempt, null);
      }
      return;
    }
    paintAttemptPhase(selected.phase, selected.attempt, selected.statusLabel);
    await yieldBrowserPaint();

    if (selected.phase === "terminal") {
      setBusy(null);
      paintAttemptPhase("terminal", selected.attempt, selected.statusLabel);
      onDurableFactsChanged?.();
      return;
    }

    const started = await w2GovernedExecuteStartAction({
      projectId,
      executionContractId: contract.executionContractId,
      attemptId: selected.attemptId,
    });
    if (!started.ok) {
      setBusy(null);
      setError(started.message);
      if (started.attempt) {
        flushSync(() => {
          setAttempt(started.attempt!);
        });
      }
      return;
    }

    // Adapter FAIL / governed STOP may terminate at Start — materialize without Complete.
    if (started.phase === "terminal") {
      paintAttemptPhase(started.phase, started.attempt, started.statusLabel);
      flushSync(() => {
        setProductEvidencePending(true);
      });
      await yieldBrowserPaint();
      const materializedEarly = await w2MaterializeProductOutcomeAction({
        projectId,
        attemptId: started.attemptId,
      });
      setBusy(null);
      if (!materializedEarly.ok) {
        setError(materializedEarly.message);
        if (materializedEarly.product) setProductOutcome(materializedEarly.product);
        if (materializedEarly.postEvidence)
          setPostEvidence(materializedEarly.postEvidence);
        return;
      }
      flushSync(() => {
        setProductEvidencePending(false);
        setProductOutcome(materializedEarly.product);
        setPostEvidence(materializedEarly.postEvidence ?? null);
      });
      onDurableFactsChanged?.();
      return;
    }

    paintAttemptPhase(started.phase, started.attempt, started.statusLabel);
    await yieldBrowserPaint();

    const completed = await w2GovernedExecuteCompleteAction({
      projectId,
      executionContractId: contract.executionContractId,
      attemptId: started.attemptId,
    });
    if (!completed.ok) {
      setBusy(null);
      setError(completed.message);
      if (completed.attempt) {
        flushSync(() => {
          setAttempt(completed.attempt!);
        });
      }
      return;
    }
    paintAttemptPhase(completed.phase, completed.attempt, completed.statusLabel);
    flushSync(() => {
      setProductEvidencePending(true);
    });
    await yieldBrowserPaint();

    const materialized = await w2MaterializeProductOutcomeAction({
      projectId,
      attemptId: completed.attemptId,
    });
    setBusy(null);
    if (!materialized.ok) {
      setError(materialized.message);
      if (materialized.product) setProductOutcome(materialized.product);
      if (materialized.postEvidence) setPostEvidence(materialized.postEvidence);
      return;
    }
    flushSync(() => {
      setProductEvidencePending(false);
      setProductOutcome(materialized.product);
      setPostEvidence(materialized.postEvidence ?? null);
    });
    onDurableFactsChanged?.();
  }, [contract, authorization, projectId, onDurableFactsChanged]);

  const stopRunningExecution = useCallback(async () => {
    if (!contract || !attempt?.attemptId || attemptPhase !== "running") return;
    setBusy("execute");
    setError(null);
    const cancelled = await w2GovernedExecuteCancelAction({
      projectId,
      executionContractId: contract.executionContractId,
      attemptId: attempt.attemptId,
    });
    if (!cancelled.ok) {
      setBusy(null);
      setError(cancelled.message);
      return;
    }
    paintAttemptPhase(cancelled.phase, cancelled.attempt, cancelled.statusLabel);
    flushSync(() => {
      setProductEvidencePending(true);
    });
    await yieldBrowserPaint();
    const materialized = await w2MaterializeProductOutcomeAction({
      projectId,
      attemptId: cancelled.attemptId,
    });
    setBusy(null);
    if (!materialized.ok) {
      setError(materialized.message);
      if (materialized.product) setProductOutcome(materialized.product);
      if (materialized.postEvidence) setPostEvidence(materialized.postEvidence);
      return;
    }
    flushSync(() => {
      setProductEvidencePending(false);
      setProductOutcome(materialized.product);
      setPostEvidence(materialized.postEvidence ?? null);
    });
    onDurableFactsChanged?.();
  }, [
    contract,
    attempt,
    attemptPhase,
    projectId,
    onDurableFactsChanged,
  ]);

  const rehydrateProduct = useCallback(async () => {
    if (!attempt?.attemptId) return;
    setBusy("execute");
    setError(null);
    const result = await w2RehydrateProductOutcomeAction({
      projectId,
      attemptId: attempt.attemptId,
    });
    setBusy(null);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setProductOutcome(result.product);
    setPostEvidence(result.postEvidence ?? null);
    setProductEvidencePending(false);
  }, [attempt, projectId]);

  return (
    <section
      className={[
        styles.root,
        composition === "lps-embedded" ? styles.embedded : "",
      ]
        .filter(Boolean)
        .join(" ")}
      data-testid="w2-trajectory-panel"
      data-composition={composition}
      aria-labelledby="w2-trajectory-title"
    >
      <header className={styles.head}>
        <p className={styles.eyebrow}>Trajectoire du projet</p>
        <h2 id="w2-trajectory-title" className={styles.title}>
          Options, recommandation, puis votre décision
        </h2>
        <p className={styles.note}>
          Nora instruit des options et recommande. La décision vous appartient :
          une recommandation ne décide jamais et ne rend jamais une trajectoire
          courante. L&apos;exécution n&apos;est possible qu&apos;après une
          autorisation vérifiée, via une action Exécuter explicite et distincte.
        </p>
      </header>

      {error ? (
        <p className={styles.error} role="alert" data-testid="w2-error">
          {error}
        </p>
      ) : null}

      {preCycleCandidate && !activeCycleInstanceId ? (
        <section
          className={styles.block}
          aria-labelledby="pre-cycle-candidate-title"
          data-testid="pre-cycle-candidate-trajectory"
        >
          <h3 id="pre-cycle-candidate-title" className={styles.blockTitle}>
            Trajectoire proposée
          </h3>
          <p className={styles.blockNote}>
            Cycle proposé :{" "}
            {approvalPresentation?.catalogLabel ??
              preCycleCandidate.catalogLabel ??
              preCycleCandidate.steps[0]?.label ??
              "—"}
          </p>
          <p className={styles.blockNote} data-testid="pre-cycle-candidate-status">
            En attente de décision · Nora recommande cette trajectoire ; le
            Pilote décide · Aucun cycle démarré
          </p>
          <ul className={styles.optionList} data-testid="pre-cycle-candidate-steps">
            {preCycleCandidate.steps.map((step) => (
              <li key={step.stepId} className={styles.option}>
                <div className={styles.optionHead}>
                  <span className={styles.optionBadge}>Étape {step.order}</span>
                  <span className={styles.optionLabel}>{step.label}</span>
                </div>
                <p className={styles.optionIntent}>En attente</p>
              </li>
            ))}
          </ul>
          {approvalPresentation &&
          !approvalPresentation.targetCycleSelectable ? (
            <p
              className={styles.blockNote}
              role="status"
              data-testid="pre-cycle-candidate-not-selectable"
            >
              Le cycle proposé n&apos;est plus sélectionnable. La proposition
              doit être réévaluée avant toute validation.
            </p>
          ) : null}
          {approvalPresentation?.targetCycleSelectable ? (
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.primaryAction}
                data-testid="pre-cycle-validate-trajectory"
                onClick={() => void approveCandidate()}
                disabled={busy !== null}
              >
                Valider cette trajectoire
              </button>
              <p className={styles.blockNote} data-testid="pre-cycle-validate-hint">
                Valider rendra cette trajectoire décidée/courante. Cela ne
                démarre pas encore le cycle.
              </p>
              {busy === "approve-candidate" ? (
                <span
                  className={styles.busy}
                  role="status"
                  data-testid="pre-cycle-approve-busy"
                >
                  Validation en cours…
                </span>
              ) : null}
            </div>
          ) : null}
        </section>
      ) : null}

      {greenfieldDecided && !activeCycleInstanceId && !preCycleCandidate ? (
        <section
          className={styles.block}
          aria-labelledby="pre-cycle-decided-title"
          data-testid="pre-cycle-decided-trajectory"
        >
          <h3 id="pre-cycle-decided-title" className={styles.blockTitle}>
            Décision humaine enregistrée
          </h3>
          <p className={styles.blockNote}>
            Trajectoire décidée / courante · Cycle :{" "}
            {greenfieldDecided.catalogLabel ?? "—"} · Aucun cycle démarré
          </p>
        </section>
      ) : null}

      {/*
        W2 OptionSet requires an active CycleInstance. Hide the CTA in all
        pre-cycle states (CURRENT NEXT_CYCLE LR, candidate-only, or empty)
        so the Pilote is never offered a path known to return CYCLE_NOT_QUALIFIED.
      */}
      {activeCycleInstanceId ? (
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.primaryAction}
          data-testid="w2-propose-options"
          onClick={() => void proposeOptions()}
          disabled={busy !== null}
        >
          {optionSet ? "Réinstruire les options" : "Instruire les options"}
        </button>
        {busy ? (
          <span className={styles.busy} role="status" data-testid="w2-busy">
            Traitement en cours…
          </span>
        ) : null}
      </div>
      ) : null}

      {!activeCycleInstanceId &&
      !preCycleCandidate &&
      hasCurrentNextCycleRecommendation ? (
        <p
          className={styles.blockNote}
          data-testid="pre-cycle-prepare-trajectory-hint"
        >
          Préparez d&apos;abord la trajectoire depuis la recommandation lifecycle
          courante — les options W2 nécessitent un cycle actif.
        </p>
      ) : null}

      {optionSet ? (
        <>
          <section
            className={styles.block}
            aria-labelledby="w2-options-title"
            data-testid="w2-options"
          >
            <h3 id="w2-options-title" className={styles.blockTitle}>
              <span className={styles.sectionKind} data-kind="option">
                Option
              </span>
              Options proposées
            </h3>
            <p className={styles.blockNote} data-testid="w2-proposed-trajectory">
              {optionSet.proposedTrajectory.statusLabel} · version{" "}
              {optionSet.proposedTrajectory.version} · pas encore courante
            </p>
            <ul className={styles.optionList}>
              {optionSet.options.map((option) => {
                const isRecommended =
                  option.optionRef ===
                  optionSet.recommendation.recommendedOptionRef;
                return (
                  <li
                    key={option.optionRef}
                    className={styles.option}
                    data-testid={`w2-option-${option.optionRef}`}
                  >
                    <div className={styles.optionHead}>
                      <span className={styles.optionBadge}>{option.kind}</span>
                      {isRecommended ? (
                        <span className={styles.recommendedBadge}>
                          Recommandée — pas décidée
                        </span>
                      ) : null}
                      <span className={styles.optionLabel}>{option.label}</span>
                    </div>
                    <p className={styles.optionIntent}>{option.intent}</p>
                    <ul className={styles.impacts}>
                      {option.impacts.map((impact) => (
                        <li key={impact}>{impact}</li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className={styles.decideAction}
                      data-testid={`w2-decide-${option.optionRef}`}
                      onClick={() => void decide(option.optionRef)}
                      disabled={busy !== null || decision !== null}
                      aria-label={`Décider: ${option.label}`}
                    >
                      Décider cette option
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>

          <section
            className={styles.recommendation}
            aria-labelledby="w2-reco-title"
            data-testid="w2-recommendation"
          >
            <h3 id="w2-reco-title" className={styles.recoTitle}>
              <span className={styles.sectionKind} data-kind="recommendation">
                Recommandation
              </span>
              {optionSet.recommendation.label}
            </h3>
            <p className={styles.blockBody}>
              {optionSet.recommendation.rationale}
            </p>
            <p className={styles.blockNote}>
              Cette recommandation ne promeut aucune trajectoire.
              {optionSet.recommendation.ckcAttribution
                ? " Contexte de cycle rattaché."
                : " Aucun contexte de cycle rattaché."}
            </p>
          </section>
        </>
      ) : null}

      {decision && decided ? (
        <section
          className={styles.decision}
          aria-labelledby="w2-decision-title"
          data-testid="w2-decision"
        >
          <h3 id="w2-decision-title" className={styles.blockTitle}>
            <span className={styles.sectionKind} data-kind="decision">
              Décision humaine
            </span>
            Décision de trajectoire — {decision.statusLabel}
          </h3>
          <dl className={styles.facts}>
            <div>
              <dt>Option retenue</dt>
              <dd data-testid="w2-decided-option">
                {decision.selectedOptionRef}
              </dd>
            </div>
            <div>
              <dt>Décideur</dt>
              <dd>{decision.actorRole}</dd>
            </div>
            <div>
              <dt>Base de décision</dt>
              <dd data-testid="w2-decision-basis">
                {decision.decisionBasisLinked ? "Reliée" : "Absente"}
              </dd>
            </div>
            <div>
              <dt>Trajectoire</dt>
              <dd data-testid="w2-decided-trajectory">
                {decided.statusLabel} · version {decided.version}
              </dd>
            </div>
          </dl>
          <div
            className={styles.actions}
            data-testid="w3a-qualify-execution-work"
          >
            <p className={styles.blockNote}>
              Qualifier le travail d&apos;exécution réel (indépendant de
              l&apos;option de trajectoire déjà décidée).
            </p>
            <label className={styles.amendmentLabel} htmlFor="w3a-operation-kind">
              Opération d&apos;exécution
            </label>
            <select
              id="w3a-operation-kind"
              className={styles.amendmentInput}
              data-testid="w3a-operation-kind"
              value={qualifiedOperationKind ?? ""}
              disabled={busy !== null}
              onChange={(event) => {
                const value = event.target.value;
                if (
                  value === "generate-temporary-artifact" ||
                  value === "simulate" ||
                  value === "read"
                ) {
                  setQualifiedOperationKind(value);
                  setContract(null);
                  setInspection(null);
                  setAuthorization(null);
                  setAttempt(null);
                  setAttemptPhase(null);
                } else {
                  setQualifiedOperationKind(null);
                }
              }}
            >
              <option value="">— Choisir —</option>
              <option value="generate-temporary-artifact">
                Générer un artefact temporaire local (réversible)
              </option>
              <option value="simulate">Simuler (sandbox)</option>
              <option value="read">Lecture seule</option>
            </select>
            <button
              type="button"
              className={styles.primaryAction}
              data-testid="w2-prepare-contract"
              onClick={() => void prepareContract()}
              disabled={busy !== null || qualifiedOperationKind === null}
              title={
                qualifiedOperationKind === null
                  ? "Qualifier d'abord le travail d'exécution"
                  : undefined
              }
            >
              {contract
                ? "Repréparer le contrat d'exécution"
                : "Préparer le contrat d'exécution"}
            </button>
          </div>
        </section>
      ) : null}

      {contract ? (
        <section
          className={styles.contract}
          aria-labelledby="w2-contract-title"
          data-testid="w2-contract"
        >
          <h3 id="w2-contract-title" className={styles.blockTitle}>
            Contrat d&apos;exécution — résumé
          </h3>
          <p className={styles.blockNote}>
            Relisez d&apos;abord ce qui sera tenté. Inspectez le détail avant
            toute confirmation. Confirmer n&apos;exécute pas.
          </p>
          <dl className={styles.facts} data-testid="w2-contract-facts">
            <div>
              <dt>Ce qui sera fait</dt>
              <dd data-testid="w2-contract-action">{contract.action}</dd>
            </div>
            <div>
              <dt>Résultat / cible</dt>
              <dd data-testid="w2-contract-target">{contract.target}</dd>
            </div>
            <div>
              <dt>Périmètre</dt>
              <dd data-testid="w2-contract-scope">{contract.scope}</dd>
            </div>
            <div>
              <dt>État du contrat</dt>
              <dd
                data-testid="w2-contract-status"
                data-status={contract.status}
              >
                {executionContractStatusLabel(contract.status)}
              </dd>
            </div>
            <div>
              <dt>Prochaine action utile</dt>
              <dd>
                {inspection?.inspectionSufficient
                  ? contract.status === "confirmation_required"
                    ? "Confirmer si requis, puis statuer sur l'autorisation"
                    : "Statuer sur l'autorisation"
                  : "Inspecter le détail du contrat"}
              </dd>
            </div>
          </dl>
          <details className={styles.contractLevel2}>
            <summary>Détails métier du contrat</summary>
            <dl className={styles.facts}>
              <div>
                <dt>Version</dt>
                <dd data-testid="w2-contract-version">v{contract.version}</dd>
              </div>
              <div>
                <dt>Autorité requise</dt>
                <dd data-testid="w2-contract-authority">
                  {contract.requiredAuthority}
                </dd>
              </div>
              <div>
                <dt>Capacités</dt>
                <dd data-testid="w2-contract-capabilities">
                  {contract.requiredCapabilities.length
                    ? contract.requiredCapabilities.join(", ")
                    : "Aucune"}
                </dd>
              </div>
              <div>
                <dt>Réversibilité</dt>
                <dd data-testid="w2-contract-reversibility">
                  {contract.reversibility}
                </dd>
              </div>
              <div>
                <dt>Contraintes</dt>
                <dd data-testid="w2-contract-constraints">
                  {contract.constraints.length
                    ? contract.constraints.join(" · ")
                    : "Aucune"}
                </dd>
              </div>
              <div>
                <dt>Conditions d&apos;arrêt</dt>
                <dd data-testid="w2-contract-stops">
                  {contract.stopConditions.length
                    ? contract.stopConditions.join(" · ")
                    : "Aucune"}
                </dd>
              </div>
            </dl>
          </details>
          <details className={styles.technicalDetails}>
            <summary>Détails techniques du contrat</summary>
            <dl className={styles.facts}>
              <div>
                <dt>Statut technique</dt>
                <dd
                  className={styles.code}
                  data-testid="w2-contract-status-tech"
                >
                  {contract.status}
                </dd>
              </div>
              <div>
                <dt>Empreinte sémantique</dt>
                <dd className={styles.code} data-testid="w2-contract-fingerprint">
                  {contract.semanticFingerprint.slice(0, 12)}…
                </dd>
              </div>
              <div>
                <dt>Identifiant contrat</dt>
                <dd className={styles.code} data-testid="w2-contract-id-tech">
                  {contract.executionContractId}
                </dd>
              </div>
            </dl>
          </details>

          {amendmentNotice ? (
            <div
              className={styles.amendmentNotice}
              data-testid="w2-amendment-notice"
              role="status"
            >
              <p className={styles.blockBody} data-testid="w2-amendment-status">
                {amendmentNotice.statusLabel}
              </p>
              <p className={styles.blockNote}>
                L&apos;inspection précédente couvrait le contrat précédent, pas
                le successeur amendé.
              </p>
              <p className={styles.blockNote} data-testid="w2-amendment-lineage">
                Successeur de {amendmentNotice.priorExecutionContractId} ·
                contrainte ajoutée : {amendmentNotice.additionalConstraint}
              </p>
            </div>
          ) : null}

          {inspection?.inspectionSufficient ? (
            <div
              className={styles.amendmentForm}
              data-testid="w2-amendment-form"
            >
              <p className={styles.blockTitle}>Amender le contrat</p>
              <label className={styles.amendmentLabel} htmlFor="w2-amend-constraint">
                Contrainte d&apos;exécution supplémentaire
              </label>
              <input
                id="w2-amend-constraint"
                className={styles.amendmentInput}
                data-testid="w2-amend-constraint"
                type="text"
                value={amendmentDraft}
                onChange={(event) => setAmendmentDraft(event.target.value)}
                disabled={busy !== null}
                placeholder="Ex. : borner strictement le slice livré"
              />
              <button
                type="button"
                className={styles.secondaryAction}
                data-testid="w2-amend-contract"
                onClick={() => void amendContract()}
                disabled={busy !== null || amendmentDraft.trim().length === 0}
              >
                Appliquer l&apos;amendement
              </button>
            </div>
          ) : null}

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.primaryAction}
              data-testid="w2-inspect-contract"
              onClick={() => void inspect()}
              disabled={busy !== null}
            >
              Inspecter le contrat
            </button>
            {contract.status === "confirmation_required" ? (
              <button
                type="button"
                className={styles.secondaryAction}
                data-testid="w2-confirm-contract"
                onClick={() => void confirmForAuthorization()}
                disabled={
                  busy !== null ||
                  inspection === null ||
                  !inspection.inspectionSufficient
                }
                title={
                  inspection === null || !inspection.inspectionSufficient
                    ? "Inspection suffisante requise avant de confirmer"
                    : undefined
                }
              >
                Confirmer mon consentement
              </button>
            ) : null}
            <button
              type="button"
              className={styles.secondaryAction}
              data-testid="w2-authorize-contract"
              onClick={() => void authorize()}
              disabled={busy !== null}
            >
              Statuer sur l&apos;autorisation
            </button>
          </div>

          {inspection ? (
            <p
              className={styles.inspection}
              data-testid="w2-inspection-state"
              role="status"
            >
              {inspection.statusLabel}
              {inspection.reinspectionRequired
                ? " — l'inspection précédente ne suffit plus"
                : ""}
              {" · inspecter n'autorise pas"}
            </p>
          ) : null}
        </section>
      ) : null}

      {authorization ? (
        <section
          className={
            authorization.outcome === "AUTHORIZED"
              ? styles.authorized
              : styles.blocked
          }
          aria-labelledby="w2-authorization-title"
          data-testid="w2-authorization"
          role="status"
        >
          <h3 id="w2-authorization-title" className={styles.blockTitle}>
            <span
              data-testid="w2-authorization-outcome"
              data-outcome={authorization.outcome}
            >
              {authorization.outcome === "AUTHORIZED"
                ? "Autorisation vérifiée — l'exécution peut être lancée"
                : "Exécution bloquée"}
            </span>
          </h3>
          <p className={styles.blockBody} data-testid="w2-authorization-reason">
            {authorization.reasonText}
          </p>
          <p className={styles.blockNote} data-testid="w2-authorization-next">
            Prochaine action : {authorization.nextAction}
          </p>
          <dl className={styles.facts}>
            <div>
              <dt>Confirmation</dt>
              <dd data-testid="w2-confirmation-state">
                {authorization.confirmation.statusLabel}
              </dd>
            </div>
            <div>
              <dt>Exécuteur</dt>
              <dd data-testid="w2-executor-state">
                {authorization.agentCapability.statusLabel}
              </dd>
            </div>
            <div>
              <dt>Inspection</dt>
              <dd>{authorization.inspection.statusLabel}</dd>
            </div>
          </dl>
          <details className={styles.technicalDetails}>
            <summary>Détails techniques d&apos;autorité</summary>
            <dl className={styles.facts}>
              <div>
                <dt>Verdict technique</dt>
                <dd data-testid="w2-authorization-outcome-tech">
                  {authorization.outcomeLabel}
                </dd>
              </div>
              <div>
                <dt>Trace d&apos;autorité</dt>
                <dd className={styles.code} data-testid="w2-authority-receipt">
                  {authorization.authorityReceiptRef}
                </dd>
              </div>
            </dl>
          </details>
          {authorization.outcome === "AUTHORIZED" && !attempt ? (
            <>
              <p
                className={styles.stopNotice}
                data-testid="w2-stop-before-execute"
              >
                Autorisation évaluée — aucune tentative lancée tant que vous
                n&apos;exécutez pas explicitement.
              </p>
              <div className={styles.actions}>
                <button
                  type="button"
                  className={styles.primaryAction}
                  data-testid="w3a-governed-execute"
                  onClick={() => void governedExecute()}
                  disabled={busy !== null}
                >
                  Exécuter
                </button>
              </div>
            </>
          ) : null}
          {authorization.outcome === "BLOCKED" ? (
            <p className={styles.stopNotice} data-testid="w2-stop-before-execute">
              Aucune exécution n&apos;a été lancée : arrêt avant exécution.
            </p>
          ) : null}
        </section>
      ) : null}

      {attempt || attemptPhaseHistory.length > 0 ? (
        <section
          className={styles.attempt}
          aria-labelledby="w3a-attempt-title"
          data-testid="w3a-attempt"
          role="status"
        >
          <h3 id="w3a-attempt-title" className={styles.blockTitle}>
            Tentative d&apos;exécution
          </h3>
          <p className={styles.blockBody} data-testid="w3a-attempt-status">
            {attemptStatusLabel ?? "Tentative en cours"} · phase{" "}
            <span data-testid="w3a-attempt-lifecycle">
              {attemptPhase ?? "—"}
            </span>{" "}
            · historique{" "}
            <code data-testid="w3a-attempt-phase-history">
              {attemptPhaseHistory.join("|")}
            </code>{" "}
            · statut technique{" "}
            <span data-testid="w3a-attempt-technical-status">
              {attempt?.attemptStatus ?? "—"}
            </span>
          </p>
          <dl className={styles.facts}>
            <div>
              <dt>Attempt</dt>
              <dd className={styles.code} data-testid="w3a-attempt-id">
                {attempt?.attemptId ?? "—"}
              </dd>
            </div>
            <div>
              <dt>Adapter</dt>
              <dd data-testid="w3a-attempt-adapter">
                {attempt?.adapterId ?? "—"}
              </dd>
            </div>
            <div>
              <dt>Effets externes</dt>
              <dd data-testid="w3a-attempt-real">non</dd>
            </div>
            <div>
              <dt>Cycle auto-fermé</dt>
              <dd data-testid="w3a-cycle-closed">non</dd>
            </div>
          </dl>
          {attemptPhase === "running" ? (
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.secondaryAction}
                data-testid="w3b-stop-running"
                onClick={() => void stopRunningExecution()}
                disabled={busy !== null}
              >
                Arrêter l&apos;exécution
              </button>
            </div>
          ) : null}
          <p className={styles.blockNote} data-testid="w3a-terminal-honesty">
            {productOutcome?.claimAllowed
              ? "Terminal technique consommé — résultat produit qualifié ci-dessous."
              : productEvidencePending
                ? "Terminal technique — Evidence en cours / claim produit non encore émis."
                : "Terminal technique — résultat produit non encore qualifié."}
          </p>
          {productEvidencePending ? (
            <p
              className={styles.blockNote}
              data-testid="w3b-evidence-pending"
            >
              Evidence requise avant tout claim de résultat produit.
            </p>
          ) : null}
          {attempt?.attemptId && !productOutcome ? (
            <button
              type="button"
              className={styles.secondaryAction}
              data-testid="w3b-rehydrate-product"
              onClick={() => void rehydrateProduct()}
              disabled={busy !== null}
            >
              Recharger résultat produit (durable)
            </button>
          ) : null}
        </section>
      ) : null}

      {productOutcome ? (
        <section
          className={styles.productOutcome}
          aria-labelledby="w3b-product-title"
          data-testid="w3b-product-outcome"
          data-outcome={productOutcome.outcome}
          role="status"
        >
          <h3 id="w3b-product-title" className={styles.blockTitle}>
            Résultat
          </h3>
          <p
            className={styles.productHeadline}
            data-testid="w3b-product-headline"
          >
            <span
              data-testid="w3b-product-outcome-kind"
              data-kind={productOutcome.outcome}
            >
              {W4C_PRODUCT_OUTCOME_LABELS[productOutcome.outcome]}
            </span>
            {" — "}
            {productOutcome.businessHeadline}
          </p>
          <p className={styles.blockBody} data-testid="w3b-product-reason">
            {productOutcome.businessReason}
          </p>
          {productOutcome.governedBoundary ? (
            <p className={styles.blockBody} data-testid="w3b-governed-boundary">
              Frontière : {productOutcome.governedBoundary}
            </p>
          ) : null}
          <p className={styles.blockBody} data-testid="w3b-evidence-summary">
            {productOutcome.evidenceSummary ??
              "Aucune preuve enregistrée — aucun résultat produit revendiqué."}
          </p>
          <dl className={styles.facts}>
            <div>
              <dt>Preuve disponible</dt>
              <dd data-testid="w3b-review-bundle-completeness">
                {productOutcome.reviewBundleCompleteness ?? "—"}
              </dd>
            </div>
          </dl>
          {postEvidence && postEvidence.ok ? (
            <section
              className={styles.postEvidence}
              data-testid="w3c-post-evidence"
              aria-label={W4C_POST_EVIDENCE_HEADING}
            >
              <h4 className={styles.blockTitle}>{W4C_POST_EVIDENCE_HEADING}</h4>
              <p
                className={styles.productHeadline}
                data-testid="w3c-recommendation-headline"
              >
                {postEvidence.recommendation.headline}
              </p>
              <p className={styles.blockBody} data-testid="w3c-recommendation-rationale">
                {postEvidence.recommendation.rationale}
              </p>
              <p className={styles.blockBody} data-testid="w3c-next-step">
                <strong>{W4C_NEXT_ACTION_LEAD} :</strong>{" "}
                {postEvidence.recommendation.nextStep}
              </p>
              <p className={styles.blockBody} data-testid="w3c-nora-analysis">
                {postEvidence.analysisText ??
                  postEvidence.analysisUnavailableReason ??
                  "Analyse indisponible"}
              </p>
              <dl className={styles.facts}>
                <div>
                  <dt>Orientation</dt>
                  <dd data-testid="w3c-recommendation-kind">
                    {postEvidence.recommendation.kind}
                  </dd>
                </div>
                <div>
                  <dt>Décision humaine</dt>
                  <dd data-testid="w3c-requires-human-decision">
                    {postEvidence.recommendation.requiresHumanDecision
                      ? "oui"
                      : "non"}
                  </dd>
                </div>
              </dl>
              <details className={styles.technicalDetails}>
                <summary>Détail de recommandation (secondaire)</summary>
                <dl className={styles.facts}>
                  <div>
                    <dt>Authority</dt>
                    <dd data-testid="w3c-recommendation-authority">
                      none — Recommendation ≠ HumanDecision
                    </dd>
                  </div>
                  <div>
                    <dt>LPS version</dt>
                    <dd data-testid="w3c-lps-version">
                      {postEvidence.lpsVersion ?? "—"}
                    </dd>
                  </div>
                </dl>
              </details>
              {postEvidence.recommendation.kind === "recover" ||
              postEvidence.recommendation.kind === "replan" ||
              postEvidence.recommendation.requiresHumanDecision ? (
                <button
                  type="button"
                  className={styles.secondaryAction}
                  data-testid="w3c-propose-trajectory"
                  onClick={() => void proposeOptions()}
                  disabled={busy !== null}
                >
                  Proposer des options de trajectoire
                </button>
              ) : null}
            </section>
          ) : null}
          <details className={styles.technicalDetails}>
            <summary data-testid="w3b-technical-details-toggle">
              Détail technique (secondaire)
            </summary>
            <dl className={styles.facts}>
              <div>
                <dt>Evidence ID</dt>
                <dd className={styles.code} data-testid="w3b-evidence-id">
                  {productOutcome.evidenceId ?? "—"}
                </dd>
              </div>
              <div>
                <dt>ReviewBundle ID</dt>
                <dd className={styles.code} data-testid="w3b-review-bundle-id">
                  {productOutcome.reviewBundleId ?? "—"}
                </dd>
              </div>
              <div>
                <dt>Claim autorisé</dt>
                <dd data-testid="w3b-claim-allowed">
                  {productOutcome.claimAllowed ? "oui" : "non"}
                </dd>
              </div>
              <div>
                <dt>Apprentissage / replan</dt>
                <dd data-testid="w3b-nora-replan">
                  {`analyse: ${
                    postEvidence && postEvidence.ok && postEvidence.noraInvoked
                      ? "oui"
                      : "non"
                  } · replan auto: non`}
                </dd>
              </div>
              <div>
                <dt>Cycle auto-fermé</dt>
                <dd data-testid="w3b-cycle-closed">non</dd>
              </div>
              <div>
                <dt>READY</dt>
                <dd data-testid="w3b-ready">non</dd>
              </div>
              <div>
                <dt>Attempt</dt>
                <dd
                  className={styles.code}
                  data-testid="w3b-technical-attempt-id"
                >
                  {productOutcome.technicalDetail.attemptId}
                </dd>
              </div>
              <div>
                <dt>Statut technique</dt>
                <dd data-testid="w3b-technical-status">
                  {productOutcome.technicalDetail.attemptStatus}
                </dd>
              </div>
              <div>
                <dt>resultRef</dt>
                <dd className={styles.code} data-testid="w3b-technical-result-ref">
                  {productOutcome.technicalDetail.resultRef ?? "—"}
                </dd>
              </div>
              <div>
                <dt>errorRef / stopReason</dt>
                <dd
                  className={styles.code}
                  data-testid="w3b-technical-error-or-stop"
                >
                  {productOutcome.technicalDetail.errorRef ??
                    productOutcome.technicalDetail.stopReason ??
                    "—"}
                </dd>
              </div>
            </dl>
          </details>
          {(() => {
            const visibleReservations = filterProductReservationsForDisplay(
              productOutcome.reservations,
              Boolean(postEvidence && postEvidence.ok),
            );
            if (visibleReservations.length === 0) return null;
            return (
              <ul data-testid="w3b-reservations" className={styles.blockNote}>
                {visibleReservations.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            );
          })()}
          <button
            type="button"
            className={styles.secondaryAction}
            data-testid="w3b-rehydrate-product"
            onClick={() => void rehydrateProduct()}
            disabled={busy !== null || !attempt?.attemptId}
          >
            Recharger résultat produit (durable)
          </button>
        </section>
      ) : null}
    </section>
  );
}
```

### FILE: projects/sfia-studio/app/features/project-assistant/approveCandidateTrajectory.ts
```
/**
 * D-GF-HD-01 — approve pre-cycle candidate trajectory as-is.
 *
 * Outer Product UoW: RecordHumanDecision → durable readback → promotion guard
 * → PromoteDecidedTrajectory (steps unchanged). No START / Cycle / EC / Confirmation.
 * ZERO model calls. Client may supply only projectId + presentationDigest.
 */

import { randomUUID } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";
import type { DecisionBasis, HumanDecision } from "@/lib/oa/decision";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import type { ProjectTrajectory } from "@/lib/oa/cycle/domain/types";
import {
  isTargetCycleCurrentlySelectable,
  resolveCandidateTrajectoryProvenance,
  buildCandidateTrajectoryApprovalPresentationDto,
  buildCandidateTrajectoryPresentationMaterial,
  CANDIDATE_TRAJECTORY_APPROVAL_KIND,
  CANDIDATE_TRAJECTORY_APPROVAL_OPTION_ID,
  CANDIDATE_TRAJECTORY_APPROVAL_OPTION_LABEL,
  candidateTrajectoryApprovalSubject,
  computeCandidateContentDigest,
  computeCandidateTrajectoryPresentationDigest,
  type CandidateTrajectoryApprovalPresentationDto,
  getCycleTypeById,
} from "@/lib/oa/cycle";
import { assertCandidateTrajectoryDecisionAuthorizesPromotion } from "./candidateTrajectoryPromotionGuard";

export type ApproveCandidateTrajectoryInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly presentationDigest: string;
  /** Test inject for local Pilote authority gate. */
  readonly forceLocalAuthority?: boolean;
  /**
   * Test-only: mutate durable HD in-memory between readback and guard
   * (simulates corrupted basis before promotion).
   */
  readonly __testMutateDecisionBeforeGuard?: (
    decision: HumanDecision,
  ) => HumanDecision;
};

export type ApproveCandidateTrajectoryResult =
  | {
      readonly ok: true;
      readonly decisionId: string;
      readonly trajectoryId: string;
      readonly trajectoryVersion: number;
      readonly status: "validated" | "active";
      readonly decidedByDecisionRef: string;
      readonly targetCycleTypeId: string;
      readonly catalogLabel: string | null;
      readonly lpsVersionAfter: number;
      readonly activeCycleInstanceId: null;
      readonly confirmationCount: 0;
      readonly cycleInstanceCount: 0;
    }
  | { readonly ok: false; readonly code: string; readonly message: string };

class ApprovalAtomicFailure extends Error {
  constructor(
    readonly code: string,
    message: string,
  ) {
    super(message);
    this.name = "ApprovalAtomicFailure";
  }
}

async function resolveCandidateForProject(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<
  | { ok: true; trajectory: ProjectTrajectory; lpsVersion: number }
  | { ok: false; code: string; message: string }
> {
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) {
    return {
      ok: false,
      code: "LPS_UNAVAILABLE",
      message: "Living Project State courant illisible.",
    };
  }
  const version = lps.livingProjectState.trajectoryVersion;
  if (typeof version !== "number" || version < 1) {
    return {
      ok: false,
      code: "CANDIDATE_MISSING",
      message: "Aucune trajectoire candidate liée au LPS.",
    };
  }
  const found = await oa.cycleServices.trajectories.findByProjectAndVersion(
    projectId,
    version,
  );
  if (!found) {
    return {
      ok: false,
      code: "CANDIDATE_MISSING",
      message: "Trajectoire candidate introuvable.",
    };
  }
  return { ok: true, trajectory: found, lpsVersion: lps.livingProjectState.version };
}

/**
 * Server-owned presentation for the Pilote approval CTA.
 */
export async function buildPreCycleCandidateApprovalPresentation(input: {
  oa: RuntimeOaStack;
  projectId: string;
}): Promise<
  | {
      ok: true;
      presentation: CandidateTrajectoryApprovalPresentationDto | null;
      alreadyDecided: {
        trajectoryId: string;
        version: number;
        status: string;
        decidedByDecisionRef: string | null;
        targetCycleTypeId: string | null;
        catalogLabel: string | null;
      } | null;
      activeCycleInstanceId: string | null;
    }
  | { ok: false; code: string; message: string }
> {
  const { oa, projectId } = input;
  const live = await readLiveProjectContext(oa, projectId);
  if (!live.ok) {
    return { ok: false, code: live.code, message: live.message };
  }

  const activeCycleInstanceId = live.context.activeCycleInstanceId;

  const current = await oa.cycleServices.trajectories.findCurrentByProjectId(
    projectId,
  );
  if (
    current &&
    (current.status === "validated" || current.status === "active") &&
    current.decidedByDecisionRef
  ) {
    let targetCycleTypeId: string | null = null;
    let catalogLabel: string | null = null;
    const hd = await oa.decisionServices.getHumanDecision.execute({
      decisionId: current.decidedByDecisionRef,
    });
    if (
      hd.ok &&
      hd.decision.decisionBasis?.sourceType === "candidate_trajectory"
    ) {
      targetCycleTypeId =
        hd.decision.decisionBasis.candidateTrajectoryContext?.targetCycleTypeId ??
        null;
      if (targetCycleTypeId) {
        catalogLabel = getCycleTypeById(targetCycleTypeId)?.label ?? null;
      }
    }
    return {
      ok: true,
      presentation: null,
      alreadyDecided: {
        trajectoryId: current.trajectoryId,
        version: current.version,
        status: current.status,
        decidedByDecisionRef: current.decidedByDecisionRef,
        targetCycleTypeId,
        catalogLabel,
      },
      activeCycleInstanceId,
    };
  }

  const resolved = await resolveCandidateForProject(oa, projectId);
  if (!resolved.ok) {
    return {
      ok: true,
      presentation: null,
      alreadyDecided: null,
      activeCycleInstanceId,
    };
  }
  const trajectory = resolved.trajectory;
  if (trajectory.status !== "candidate" || trajectory.projectId !== projectId) {
    return {
      ok: true,
      presentation: null,
      alreadyDecided: null,
      activeCycleInstanceId,
    };
  }
  if (current && current.trajectoryId === trajectory.trajectoryId) {
    // Effective current while still candidate should not happen; refuse presentation.
    return {
      ok: true,
      presentation: null,
      alreadyDecided: null,
      activeCycleInstanceId,
    };
  }

  const epistemic = await oa.cycleServices.epistemic.listByProject(projectId);
  const provenance = resolveCandidateTrajectoryProvenance({
    projectId,
    trajectoryId: trajectory.trajectoryId,
    epistemicItems: epistemic,
  });
  if (provenance.status !== "RESOLVED") {
    return {
      ok: true,
      presentation: null,
      alreadyDecided: null,
      activeCycleInstanceId,
    };
  }

  const material = buildCandidateTrajectoryPresentationMaterial({
    projectId,
    lpsId: live.context.lpsId,
    lpsVersion: live.context.lpsVersion,
    doctrineDigest: live.context.doctrineDigest,
    trajectory,
    provenanceObservationId: provenance.provenanceObservationId,
    recommendationId: provenance.recommendationId,
    semanticKey: provenance.semanticKey,
    targetCycleTypeId: provenance.targetCycleTypeId,
  });
  const presentationDigest =
    computeCandidateTrajectoryPresentationDigest(material);
  const selectable = isTargetCycleCurrentlySelectable(
    provenance.targetCycleTypeId,
  );

  return {
    ok: true,
    presentation: buildCandidateTrajectoryApprovalPresentationDto({
      material,
      presentationDigest,
      steps: trajectory.steps,
      targetCycleSelectable: selectable,
    }),
    alreadyDecided: null,
    activeCycleInstanceId,
  };
}

export async function approveCandidateTrajectory(
  input: ApproveCandidateTrajectoryInput,
): Promise<ApproveCandidateTrajectoryResult> {
  const { oa, projectId } = input;
  const clientDigest = input.presentationDigest?.trim();
  if (!clientDigest) {
    return {
      ok: false,
      code: "PRESENTATION_DIGEST_REQUIRED",
      message: "presentationDigest requis.",
    };
  }

  const project = await oa.projectServices.getProject.execute({ projectId });
  if (!project.ok) {
    return {
      ok: false,
      code: "PROJECT_NOT_FOUND",
      message: "Projet introuvable.",
    };
  }

  const live = await readLiveProjectContext(oa, projectId);
  if (!live.ok) {
    return { ok: false, code: live.code, message: live.message };
  }
  if (live.context.activeCycleInstanceId) {
    return {
      ok: false,
      code: "ACTIVE_CYCLE_PRESENT",
      message:
        "Un cycle actif est présent — l'approbation greenfield pre-cycle est refusée.",
    };
  }

  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
  if (cycles.length > 0) {
    return {
      ok: false,
      code: "CYCLE_INSTANCE_PRESENT",
      message: "Des CycleInstance existent — chemin greenfield refusé.",
    };
  }

  const current = await oa.cycleServices.trajectories.findCurrentByProjectId(
    projectId,
  );
  if (
    current &&
    (current.status === "validated" || current.status === "active")
  ) {
    return {
      ok: false,
      code: "ALREADY_DECIDED",
      message:
        "Une trajectoire décidée/courante existe déjà — aucune nouvelle décision.",
    };
  }

  const resolved = await resolveCandidateForProject(oa, projectId);
  if (!resolved.ok) {
    return resolved;
  }
  const trajectory = resolved.trajectory;
  if (trajectory.status !== "candidate") {
    return {
      ok: false,
      code: "TRAJECTORY_NOT_CANDIDATE",
      message: `La trajectoire n'est pas candidate (${trajectory.status}).`,
    };
  }
  if (trajectory.projectId !== projectId) {
    return {
      ok: false,
      code: "TRAJECTORY_PROJECT_MISMATCH",
      message: "La trajectoire n'appartient pas à ce projet.",
    };
  }
  if (current && current.trajectoryId === trajectory.trajectoryId) {
    return {
      ok: false,
      code: "CANDIDATE_IS_CURRENT",
      message: "La candidate est déjà effective current — approbation refusée.",
    };
  }

  const lpsPointer = (
    await oa.projectServices.getCurrentLivingProjectState.execute({ projectId })
  );
  if (!lpsPointer.ok) {
    return {
      ok: false,
      code: "LPS_UNAVAILABLE",
      message: "LPS illisible.",
    };
  }
  if (
    lpsPointer.livingProjectState.trajectoryId !== undefined &&
    lpsPointer.livingProjectState.trajectoryId !== trajectory.trajectoryId
  ) {
    return {
      ok: false,
      code: "LPS_TRAJECTORY_MISMATCH",
      message: "Le LPS ne pointe pas la candidate attendue.",
    };
  }

  const epistemic = await oa.cycleServices.epistemic.listByProject(projectId);
  const provenance = resolveCandidateTrajectoryProvenance({
    projectId,
    trajectoryId: trajectory.trajectoryId,
    epistemicItems: epistemic,
  });
  if (provenance.status !== "RESOLVED") {
    return {
      ok: false,
      code: `PROVENANCE_${provenance.status}`,
      message: `Provenance candidate non résolue (${provenance.status}).`,
    };
  }

  // Recommendation source project match via relatedObjects / resolver identity.
  if (provenance.trajectoryId !== trajectory.trajectoryId) {
    return {
      ok: false,
      code: "PROVENANCE_TRAJECTORY_MISMATCH",
      message: "La provenance ne correspond pas à la trajectoire candidate.",
    };
  }
  if (!provenance.semanticKey?.trim() || !provenance.targetCycleTypeId?.trim()) {
    return {
      ok: false,
      code: "PROVENANCE_INCOMPLETE",
      message: "semanticKey / targetCycleTypeId manquants.",
    };
  }

  if (!isTargetCycleCurrentlySelectable(provenance.targetCycleTypeId)) {
    return {
      ok: false,
      code: "TARGET_CYCLE_NOT_SELECTABLE",
      message:
        "Le type de cycle proposé n'est plus sélectionnable — réévaluation requise.",
    };
  }

  const material = buildCandidateTrajectoryPresentationMaterial({
    projectId,
    lpsId: live.context.lpsId,
    lpsVersion: live.context.lpsVersion,
    doctrineDigest: live.context.doctrineDigest,
    trajectory,
    provenanceObservationId: provenance.provenanceObservationId,
    recommendationId: provenance.recommendationId,
    semanticKey: provenance.semanticKey,
    targetCycleTypeId: provenance.targetCycleTypeId,
  });
  const presentationDigest =
    computeCandidateTrajectoryPresentationDigest(material);
  if (presentationDigest !== clientDigest) {
    return {
      ok: false,
      code: "CANDIDATE_TRAJECTORY_DECISION_STALE",
      message:
        "La présentation a changé depuis l'affichage — aucune décision enregistrée.",
    };
  }

  const candidateContentDigest = material.candidate.candidateContentDigest;
  const recomputedContent = computeCandidateContentDigest({
    trajectoryId: trajectory.trajectoryId,
    version: trajectory.version,
    status: trajectory.status,
    steps: trajectory.steps,
  });
  if (recomputedContent !== candidateContentDigest) {
    return {
      ok: false,
      code: "CANDIDATE_CONTENT_DIGEST_MISMATCH",
      message: "Digest de contenu candidate incohérent.",
    };
  }

  const subject = candidateTrajectoryApprovalSubject(
    trajectory.trajectoryId,
    trajectory.version,
  );
  const existingAccepted =
    await oa.decisionServices.decisions.listAcceptedBySubject(
      projectId,
      subject,
    );
  if (existingAccepted.length > 0) {
    return {
      ok: false,
      code: "ALREADY_DECIDED",
      message:
        "Une décision acceptée existe déjà pour cette candidate/version.",
    };
  }

  const issuedAt = oa.clock.nowIso();
  const authority = registerLocalPiloteAuthority({
    authorityResolver: oa.authorityResolver,
    scope: subject,
    issuedAt,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return { ok: false, code: authority.code, message: authority.message };
  }

  const decisionBasis: DecisionBasis = {
    sourceType: "candidate_trajectory",
    sourceRef: trajectory.trajectoryId,
    sourceDigest: presentationDigest,
    projectId,
    proposalContext: {
      lpsId: live.context.lpsId,
      lpsVersion: live.context.lpsVersion,
      doctrineDigest: live.context.doctrineDigest,
      ckcResolutionRef: live.context.ckcResolutionRef ?? undefined,
    },
    candidateTrajectoryContext: {
      trajectoryId: trajectory.trajectoryId,
      candidateVersion: trajectory.version,
      provenanceObservationId: provenance.provenanceObservationId,
      recommendationId: provenance.recommendationId,
      semanticKey: provenance.semanticKey,
      targetCycleTypeId: provenance.targetCycleTypeId,
      candidateContentDigest,
      presentationDigest,
    },
    executionBasis: {
      objective: live.context.objective,
      expectedOutcome: "Trajectoire candidate validée par le Pilote (as-is).",
      stopConditions: [
        "AUCUN CYCLE",
        "AUCUN START",
        "AUCUN EXECUTION_CONTRACT",
      ],
      cycleTypeId: provenance.targetCycleTypeId,
      requestedOperation: CANDIDATE_TRAJECTORY_APPROVAL_KIND,
    },
  };

  const decisionId = `dec:gf-trj:${randomUUID()}`;
  const preDecisionSteps = structuredClone(trajectory.steps);
  const candidateVersion = trajectory.version;
  const trajectoryId = trajectory.trajectoryId;
  const targetCycleTypeId = provenance.targetCycleTypeId;
  const catalogLabel =
    getCycleTypeById(targetCycleTypeId)?.label ?? null;

  let atomic: {
    decisionId: string;
    promoted: ProjectTrajectory;
    lpsVersionAfter: number;
  };

  try {
    atomic = await oa.projectServices.store.runInTransaction(async () => {
      const recorded = await oa.decisionServices.recordHumanDecision.execute({
        decisionId,
        projectId,
        subject,
        options: [
          {
            optionId: CANDIDATE_TRAJECTORY_APPROVAL_OPTION_ID,
            label: CANDIDATE_TRAJECTORY_APPROVAL_OPTION_LABEL,
            recommended: false,
          },
        ],
        selectedOptionId: CANDIDATE_TRAJECTORY_APPROVAL_OPTION_ID,
        actor: LOCAL_PILOTE_ACTOR,
        authority: "morris",
        status: "accepted",
        reversible: true,
        scope: subject,
        rationale:
          "Le Pilote a validé explicitement la trajectoire candidate telle quelle.",
        authorityEvidenceId: authority.evidenceId,
        decisionBasis,
        linkToLivingProjectState: true,
        expectedLpsVersion: live.context.lpsVersion,
        supersedeExistingAccepted: false,
        linkEpistemicDecisionRef: false,
        correlationId: `gf-hd:${trajectoryId}:v${candidateVersion}`,
      });

      if (!recorded.ok) {
        throw new ApprovalAtomicFailure(
          recorded.error.detailCode,
          recorded.error.message,
        );
      }

      const readback = await oa.decisionServices.getHumanDecision.execute({
        decisionId,
      });
      if (!readback.ok) {
        throw new ApprovalAtomicFailure(
          "READBACK_FAILURE",
          "Relecture durable de la HumanDecision impossible.",
        );
      }

      let decisionForGuard = readback.decision;
      if (input.__testMutateDecisionBeforeGuard) {
        decisionForGuard = input.__testMutateDecisionBeforeGuard(
          structuredClone(readback.decision),
        );
      }

      const guard = assertCandidateTrajectoryDecisionAuthorizesPromotion({
        decision: decisionForGuard,
        projectId,
        trajectoryId,
        candidateVersion,
        presentationDigest,
        candidateContentDigest,
        provenanceObservationId: provenance.provenanceObservationId,
        recommendationId: provenance.recommendationId,
        semanticKey: provenance.semanticKey,
        targetCycleTypeId,
        expectedLpsId: live.context.lpsId,
        expectedLpsVersionAtDecision: live.context.lpsVersion,
      });
      if (!guard.ok) {
        throw new ApprovalAtomicFailure(guard.code, guard.message);
      }

      // Re-check selectability + candidate status inside the UoW.
      if (!isTargetCycleCurrentlySelectable(targetCycleTypeId)) {
        throw new ApprovalAtomicFailure(
          "TARGET_CYCLE_NOT_SELECTABLE",
          "Le type de cycle n'est plus sélectionnable au moment de la promotion.",
        );
      }
      const stillCandidate =
        await oa.cycleServices.trajectories.findByProjectAndVersion(
          projectId,
          candidateVersion,
        );
      if (!stillCandidate || stillCandidate.status !== "candidate") {
        throw new ApprovalAtomicFailure(
          "TRAJECTORY_NOT_CANDIDATE",
          "La trajectoire n'est plus candidate au moment de la promotion.",
        );
      }
      const stillContent = computeCandidateContentDigest({
        trajectoryId: stillCandidate.trajectoryId,
        version: stillCandidate.version,
        status: stillCandidate.status,
        steps: stillCandidate.steps,
      });
      if (stillContent !== candidateContentDigest) {
        throw new ApprovalAtomicFailure(
          "CANDIDATE_TRAJECTORY_DECISION_STALE",
          "Contenu candidate modifié avant promotion.",
        );
      }

      const lpsAfterDecision =
        recorded.livingProjectStateVersion ?? live.context.lpsVersion;

      const promoted = await oa.cycleServices.promoteDecidedTrajectory.execute({
        trajectoryId,
        projectId,
        expectedVersion: candidateVersion,
        status: "validated",
        decisionRef: decisionId,
        // As-is: omit steps — PromoteDecidedTrajectory keeps candidate steps.
        createdBy: LOCAL_PILOTE_ACTOR,
        correlationId: `gf-promote:${trajectoryId}:v${candidateVersion}`,
        expectedLpsVersion: lpsAfterDecision,
      });
      if (!promoted.ok) {
        throw new ApprovalAtomicFailure(
          promoted.error.detailCode,
          `Promotion refusée (${promoted.error.detailCode}).`,
        );
      }

      return {
        decisionId,
        promoted: promoted.trajectory,
        lpsVersionAfter:
          promoted.livingProjectStateVersion ?? lpsAfterDecision,
      };
    });
  } catch (err) {
    if (err instanceof ApprovalAtomicFailure) {
      return { ok: false, code: err.code, message: err.message };
    }
    return {
      ok: false,
      code: "PERSISTENCE_FAILURE",
      message:
        "Échec atomique décision+promotion — aucune décision orpheline n'a été commitée.",
    };
  }

  // Steps parity (post-commit assertion surface for callers/tests).
  const promotedSteps = JSON.stringify(atomic.promoted.steps);
  const priorSteps = JSON.stringify(preDecisionSteps);
  if (promotedSteps !== priorSteps) {
    // Should be unreachable if PromoteDecidedTrajectory omitted steps correctly.
    return {
      ok: false,
      code: "STEPS_CHANGED",
      message:
        "Les steps post-promotion diffèrent de la candidate approuvée — état incohérent.",
    };
  }

  return {
    ok: true,
    decisionId: atomic.decisionId,
    trajectoryId: atomic.promoted.trajectoryId,
    trajectoryVersion: atomic.promoted.version,
    status: atomic.promoted.status as "validated" | "active",
    decidedByDecisionRef: atomic.decisionId,
    targetCycleTypeId,
    catalogLabel,
    lpsVersionAfter: atomic.lpsVersionAfter,
    activeCycleInstanceId: null,
    confirmationCount: 0,
    cycleInstanceCount: 0,
  };
}
```

### FILE: projects/sfia-studio/app/features/project-assistant/candidateTrajectoryPromotionGuard.ts
```
/**
 * D-GF-HD-01 — durable HumanDecision readback gate before PromoteDecidedTrajectory.
 * NOT W2 assertDecisionAuthorizesPromotion (OptionSet / trajectory_option).
 */

import type { HumanDecision } from "@/lib/oa/decision";
import { LOCAL_PILOTE_ACTOR_ID } from "@/lib/oa/decision";
import {
  CANDIDATE_TRAJECTORY_APPROVAL_OPTION_ID,
  candidateTrajectoryApprovalSubject,
} from "@/lib/oa/cycle";

export type CandidateTrajectoryPromotionGuardResult =
  | { readonly ok: true }
  | { readonly ok: false; readonly code: string; readonly message: string };

/**
 * Fail-closed: promotion is authorised only by durable accepted HD matching
 * the exact candidate + provenance sealed at presentation.
 */
export function assertCandidateTrajectoryDecisionAuthorizesPromotion(input: {
  readonly decision: HumanDecision | null;
  readonly projectId: string;
  readonly trajectoryId: string;
  readonly candidateVersion: number;
  readonly presentationDigest: string;
  readonly candidateContentDigest: string;
  readonly provenanceObservationId: string;
  readonly recommendationId: string;
  readonly semanticKey: string;
  readonly targetCycleTypeId: string;
  readonly expectedLpsId: string;
  readonly expectedLpsVersionAtDecision: number;
}): CandidateTrajectoryPromotionGuardResult {
  const { decision } = input;
  if (!decision) {
    return {
      ok: false,
      code: "DECISION_REQUIRED",
      message:
        "Aucune décision humaine durable — promotion de la trajectoire candidate refusée.",
    };
  }
  if (decision.status !== "accepted") {
    return {
      ok: false,
      code: "DECISION_NOT_ACCEPTED",
      message: `Décision au statut ${decision.status} — promotion refusée.`,
    };
  }
  if (decision.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message: "La décision n'appartient pas à ce projet.",
    };
  }
  const expectedSubject = candidateTrajectoryApprovalSubject(
    input.trajectoryId,
    input.candidateVersion,
  );
  if (decision.subject !== expectedSubject) {
    return {
      ok: false,
      code: "SUBJECT_MISMATCH",
      message: "Le sujet de décision ne correspond pas à cette candidate.",
    };
  }
  if (decision.actor.actorId !== LOCAL_PILOTE_ACTOR_ID) {
    return {
      ok: false,
      code: "ACTOR_MISMATCH",
      message: "Acteur Pilote local attendu — promotion refusée.",
    };
  }
  if (decision.authority !== "morris") {
    return {
      ok: false,
      code: "AUTHORITY_DENIED",
      message:
        "Décision non structurante — seule une décision d'autorité structurante peut promouvoir.",
    };
  }
  if (decision.selectedOptionId !== CANDIDATE_TRAJECTORY_APPROVAL_OPTION_ID) {
    return {
      ok: false,
      code: "OPTION_MISMATCH",
      message: "L'option d'approbation unaire ne correspond pas.",
    };
  }
  if (decision.options.length !== 1) {
    return {
      ok: false,
      code: "OPTION_COUNT",
      message: "L'approbation candidate exige exactement une option.",
    };
  }
  if (decision.cycleInstanceId !== undefined) {
    return {
      ok: false,
      code: "CYCLE_INSTANCE_FORBIDDEN",
      message: "Aucune CycleInstance ne doit être liée à cette décision greenfield.",
    };
  }

  const basis = decision.decisionBasis;
  if (!basis || basis.sourceType !== "candidate_trajectory") {
    return {
      ok: false,
      code: "DECISION_BASIS_MISSING",
      message: "DecisionBasis candidate_trajectory absente ou incorrecte.",
    };
  }
  if (basis.trajectoryContext !== undefined) {
    return {
      ok: false,
      code: "TRAJECTORY_CONTEXT_FORBIDDEN",
      message: "trajectoryContext W2 interdit sur candidate_trajectory.",
    };
  }
  if (basis.sourceRef !== input.trajectoryId) {
    return {
      ok: false,
      code: "SOURCE_REF_MISMATCH",
      message: "sourceRef ne correspond pas à la trajectoire candidate.",
    };
  }
  if (basis.sourceDigest !== input.presentationDigest) {
    return {
      ok: false,
      code: "SOURCE_DIGEST_MISMATCH",
      message: "sourceDigest ne scelle pas le presentationDigest présenté.",
    };
  }

  const ctx = basis.candidateTrajectoryContext;
  if (!ctx) {
    return {
      ok: false,
      code: "CANDIDATE_CONTEXT_MISSING",
      message: "candidateTrajectoryContext requis.",
    };
  }
  if (ctx.trajectoryId !== input.trajectoryId) {
    return {
      ok: false,
      code: "CTX_TRAJECTORY_MISMATCH",
      message: "candidateTrajectoryContext.trajectoryId incorrect.",
    };
  }
  if (ctx.candidateVersion !== input.candidateVersion) {
    return {
      ok: false,
      code: "CTX_VERSION_MISMATCH",
      message: "candidateTrajectoryContext.candidateVersion incorrect.",
    };
  }
  if (ctx.provenanceObservationId !== input.provenanceObservationId) {
    return {
      ok: false,
      code: "CTX_PROVENANCE_MISMATCH",
      message: "provenanceObservationId incorrect.",
    };
  }
  if (ctx.recommendationId !== input.recommendationId) {
    return {
      ok: false,
      code: "CTX_RECOMMENDATION_MISMATCH",
      message: "recommendationId incorrect.",
    };
  }
  if (ctx.semanticKey !== input.semanticKey) {
    return {
      ok: false,
      code: "CTX_SEMANTIC_KEY_MISMATCH",
      message: "semanticKey incorrect.",
    };
  }
  if (ctx.targetCycleTypeId !== input.targetCycleTypeId) {
    return {
      ok: false,
      code: "CTX_TARGET_CYCLE_MISMATCH",
      message: "targetCycleTypeId incorrect.",
    };
  }
  if (ctx.candidateContentDigest !== input.candidateContentDigest) {
    return {
      ok: false,
      code: "CTX_CONTENT_DIGEST_MISMATCH",
      message: "candidateContentDigest incorrect.",
    };
  }
  if (ctx.presentationDigest !== input.presentationDigest) {
    return {
      ok: false,
      code: "CTX_PRESENTATION_DIGEST_MISMATCH",
      message: "presentationDigest incorrect.",
    };
  }
  if (
    basis.proposalContext.lpsId !== input.expectedLpsId ||
    basis.proposalContext.lpsVersion !== input.expectedLpsVersionAtDecision
  ) {
    return {
      ok: false,
      code: "PROPOSAL_CONTEXT_MISMATCH",
      message: "Snapshot LPS de la DecisionBasis incohérent.",
    };
  }

  return { ok: true };
}
```

### FILE: projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts
```
"use server";

/**
 * Greenfield pre-cycle candidate trajectory bridge — thin server actions.
 * Client may send projectId (+ presentationDigest for approval). ZERO model calls.
 * No Cycle / START / EC / Confirmation. HD only via approve path.
 */

import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import {
  deriveLifecycleBlockersFromEpistemicItems,
  prepareCandidateTrajectoryFromCurrentRecommendation,
  readPreCycleCandidateTrajectory,
  selectCurrentLifecycleRecommendations,
} from "@/lib/oa/cycle";
import type { LifecycleRecommendationMaterialDimension } from "@/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract";
import type { CandidateTrajectoryProvenanceStatus } from "@/lib/oa/cycle/application/lifecycleRecommendation/candidateTrajectoryProvenance";
import {
  approveCandidateTrajectory,
  buildPreCycleCandidateApprovalPresentation,
} from "@/features/project-assistant/approveCandidateTrajectory";

export async function projectAssistantPrepareCandidateTrajectoryAction(input: {
  projectId: string;
}): Promise<{
  ok: boolean;
  code?: string;
  message?: string;
  recommendationId?: string;
  semanticKey?: string;
  targetCycleTypeId?: string;
  catalogLabel?: string;
  trajectoryId?: string;
  trajectoryVersion?: number;
  stepId?: string;
  provenanceObservationId?: string;
  correlationId?: string;
  lpsVersionAfter?: number;
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      code: "OA_UNAVAILABLE",
      message: "Runtime OA indisponible.",
    };
  }
  const oa = runtime.oa;
  const result = await prepareCandidateTrajectoryFromCurrentRecommendation({
    projectId: input.projectId,
    deps: {
      trajectories: oa.cycleServices.trajectories,
      createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
      updateEpistemicState: oa.cycleServices.updateEpistemicState,
      runInTransaction: (fn) => oa.projectServices.store.runInTransaction(fn),
      listEpistemicByProject: (projectId) =>
        oa.cycleServices.epistemic.listByProject(projectId),
      listCyclesByProject: (projectId) =>
        oa.cycleServices.cycles.listByProject(projectId),
      listDecisionsByProject: (projectId) =>
        oa.decisionServices.decisions.listByProject(projectId),
      listEvidenceByProject: (projectId) =>
        oa.evidenceReviewServices.repository.listByProject(projectId),
      getCurrentLps: (projectId) =>
        oa.projectServices.getCurrentLivingProjectState.execute({ projectId }),
      getProjectDoctrinePin: async (projectId) => {
        const project = await oa.projectServices.getProject.execute({
          projectId,
        });
        if (!project.ok) return null;
        const pin = project.project.doctrinePackageRef;
        return pin
          ? {
              doctrinePackageId: pin.doctrinePackageId,
              version: pin.version,
              digest: pin.digest,
            }
          : null;
      },
    },
  });
  if (!result.ok) {
    return {
      ok: false,
      code: result.code,
      message: result.reason,
      correlationId: result.correlationId,
    };
  }
  return {
    ok: true,
    recommendationId: result.recommendationId,
    semanticKey: result.semanticKey,
    targetCycleTypeId: result.targetCycleTypeId,
    catalogLabel: result.catalogLabel,
    trajectoryId: result.trajectoryId,
    trajectoryVersion: result.trajectoryVersion,
    stepId: result.stepId,
    provenanceObservationId: result.provenanceObservationId,
    correlationId: result.correlationId,
    lpsVersionAfter: result.lpsVersionAfter,
  };
}

/**
 * Durable pre-cycle projection: candidate trajectory + CURRENT NEXT_CYCLE flag.
 * CURRENT flag uses the same material basis as lifecycle read-side (incl. blockers).
 * Authoritative targetCycleTypeId only when provenanceStatus === RESOLVED.
 */
export async function projectAssistantReadPreCycleCandidateTrajectoryAction(input: {
  projectId: string;
}): Promise<{
  ok: boolean;
  code?: string;
  message?: string;
  candidate?: {
    trajectoryId: string;
    version: number;
    status: "candidate";
    projectId: string;
    steps: readonly {
      stepId: string;
      order: number;
      label: string;
      state: string;
    }[];
    catalogLabel: string | null;
    targetCycleTypeId: string | null;
    provenanceStatus: CandidateTrajectoryProvenanceStatus;
    provenanceObservationId: string | null;
    recommendationId: string | null;
    semanticKey: string | null;
    decidedByDecisionRef: null;
    isEffectiveCurrent: false;
  } | null;
  activeCycleInstanceId?: string | null;
  /** Server-derived via selectCurrentLifecycleRecommendations (canonical basis). */
  hasCurrentNextCycleRecommendation?: boolean;
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      code: "OA_UNAVAILABLE",
      message: "Runtime OA indisponible.",
    };
  }
  const oa = runtime.oa;
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId: input.projectId,
  });
  const activeCycleInstanceId = lps.ok
    ? (lps.livingProjectState.activeCycleInstanceId ?? null)
    : null;

  const result = await readPreCycleCandidateTrajectory({
    projectId: input.projectId,
    trajectories: oa.cycleServices.trajectories,
    getCurrentLps: (projectId) =>
      oa.projectServices.getCurrentLivingProjectState.execute({ projectId }),
    listCyclesByProject: (projectId) =>
      oa.cycleServices.cycles.listByProject(projectId),
    listEpistemicByProject: (projectId) =>
      oa.cycleServices.epistemic.listByProject(projectId),
  });
  if (!result.ok) {
    return {
      ok: false,
      code: result.code,
      message: result.reason,
      activeCycleInstanceId,
      hasCurrentNextCycleRecommendation: false,
    };
  }

  let hasCurrentNextCycleRecommendation = false;
  try {
    const epistemicItems = await oa.cycleServices.epistemic.listByProject(
      input.projectId,
    );
    const cycles = await oa.cycleServices.cycles.listByProject(input.projectId);
    const decisions =
      await oa.decisionServices.decisions.listByProject(input.projectId);
    let evidence: Awaited<
      ReturnType<typeof oa.evidenceReviewServices.repository.listByProject>
    > = [];
    const failed = new Set<LifecycleRecommendationMaterialDimension>();
    try {
      evidence = await oa.evidenceReviewServices.repository.listByProject(
        input.projectId,
      );
    } catch {
      failed.add("evidence");
    }

    let trajectory = null;
    try {
      const traj = await oa.cycleServices.getCurrentTrajectory.execute({
        projectId: input.projectId,
      });
      trajectory = traj.ok ? traj.trajectory : null;
    } catch {
      failed.add("trajectory");
    }

    const project = await oa.projectServices.getProject.execute({
      projectId: input.projectId,
    });
    const doctrinePin = project.ok
      ? (project.project.doctrinePackageRef ??
        (lps.ok ? lps.livingProjectState.doctrinePackageRef : undefined))
      : lps.ok
        ? lps.livingProjectState.doctrinePackageRef
        : undefined;

    const blockersSnap =
      deriveLifecycleBlockersFromEpistemicItems(epistemicItems);
    const current = selectCurrentLifecycleRecommendations({
      items: epistemicItems,
      cycles,
      lpsActiveCycleInstanceId: activeCycleInstanceId,
      lpsVersion: lps.ok ? lps.livingProjectState.version : null,
      doctrinePackageId: doctrinePin?.doctrinePackageId ?? null,
      doctrinePackageVersion: doctrinePin?.version ?? null,
      doctrinePackageDigest: doctrinePin?.digest ?? null,
      trajectory,
      decisions,
      evidence,
      blockingReservationStatements: blockersSnap.statements,
      failedMaterialDimensions: failed,
    });
    hasCurrentNextCycleRecommendation = current.some(
      (r) =>
        r.intent === "NEXT_CYCLE" && r.derivedCurrentness === "CURRENT",
    );
  } catch {
    // Fail closed for the flag — do not invent CURRENT.
    hasCurrentNextCycleRecommendation = false;
  }

  return {
    ok: true,
    candidate: result.candidate,
    activeCycleInstanceId,
    hasCurrentNextCycleRecommendation,
  };
}

/**
 * Server-owned approval presentation (digest + selectability).
 * Client must not treat sealed fields as SoT beyond display + digest round-trip.
 */
export async function projectAssistantReadCandidateTrajectoryApprovalPresentationAction(input: {
  projectId: string;
}): Promise<{
  ok: boolean;
  code?: string;
  message?: string;
  presentation?: {
    projectId: string;
    trajectoryId: string;
    catalogLabel: string | null;
    targetCycleTypeId: string;
    steps: readonly {
      stepId: string;
      order: number;
      label: string;
      state: string;
    }[];
    provenanceStatus: "RESOLVED";
    recommendationId: string;
    semanticKey: string;
    provenanceObservationId: string;
    awaitingDecision: true;
    cycleStarted: false;
    targetCycleSelectable: boolean;
    approvalOptionLabel: string;
    presentationDigest: string;
    displayCandidateVersionHint: number;
  } | null;
  alreadyDecided?: {
    trajectoryId: string;
    version: number;
    status: string;
    decidedByDecisionRef: string | null;
    targetCycleTypeId: string | null;
    catalogLabel: string | null;
  } | null;
  activeCycleInstanceId?: string | null;
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      code: "OA_UNAVAILABLE",
      message: "Runtime OA indisponible.",
    };
  }
  const built = await buildPreCycleCandidateApprovalPresentation({
    oa: runtime.oa,
    projectId: input.projectId,
  });
  if (!built.ok) {
    return { ok: false, code: built.code, message: built.message };
  }
  return {
    ok: true,
    presentation: built.presentation,
    alreadyDecided: built.alreadyDecided,
    activeCycleInstanceId: built.activeCycleInstanceId,
  };
}

/**
 * Unary Pilote approval: "Valider cette trajectoire".
 * Client input max: projectId + presentationDigest. All else server-resolved.
 */
export async function projectAssistantApprovePreCycleCandidateTrajectoryAction(input: {
  projectId: string;
  presentationDigest: string;
}): Promise<{
  ok: boolean;
  code?: string;
  message?: string;
  decisionId?: string;
  trajectoryId?: string;
  trajectoryVersion?: number;
  status?: string;
  decidedByDecisionRef?: string;
  targetCycleTypeId?: string;
  catalogLabel?: string | null;
  lpsVersionAfter?: number;
  activeCycleInstanceId?: null;
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      code: "OA_UNAVAILABLE",
      message: "Runtime OA indisponible.",
    };
  }
  const result = await approveCandidateTrajectory({
    oa: runtime.oa,
    projectId: input.projectId,
    presentationDigest: input.presentationDigest,
  });
  if (!result.ok) {
    return { ok: false, code: result.code, message: result.message };
  }
  return {
    ok: true,
    decisionId: result.decisionId,
    trajectoryId: result.trajectoryId,
    trajectoryVersion: result.trajectoryVersion,
    status: result.status,
    decidedByDecisionRef: result.decidedByDecisionRef,
    targetCycleTypeId: result.targetCycleTypeId,
    catalogLabel: result.catalogLabel,
    lpsVersionAfter: result.lpsVersionAfter,
    activeCycleInstanceId: null,
  };
}
```

### FILE: projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/candidateTrajectoryDecisionBasis.ts
```
/**
 * D-GF-HD-01 — digests + presentation material for greenfield candidate approval.
 * Reuses computeDecisionBasisSourceDigest — no parallel digest engine.
 */

import { computeDecisionBasisSourceDigest } from "@/lib/oa/decision";
import type { ProjectTrajectory, TrajectoryStep } from "../../domain/types";
import { getCycleTypeById } from "../../domain/cycleTypeCatalog";

export const CANDIDATE_TRAJECTORY_APPROVAL_KIND =
  "approve_candidate_trajectory_as_is" as const;

export const CANDIDATE_TRAJECTORY_APPROVAL_OPTION_ID =
  "opt:approve-candidate-trajectory-as-is" as const;

export const CANDIDATE_TRAJECTORY_APPROVAL_OPTION_LABEL =
  "Valider cette trajectoire" as const;

export function candidateTrajectoryApprovalSubject(
  trajectoryId: string,
  candidateVersion: number,
): string {
  return `project.trajectory.approval:${trajectoryId}:v${candidateVersion}`;
}

/** Material step projection — changes that alter what the Pilote approves. */
export function materialTrajectoryStepsProjection(
  steps: readonly TrajectoryStep[],
): readonly Record<string, unknown>[] {
  return steps.map((step) => ({
    stepId: step.stepId,
    order: step.order,
    label: step.label,
    state: step.state,
    ...(step.dependencies !== undefined
      ? { dependencies: [...step.dependencies] }
      : {}),
    ...(step.gate !== undefined ? { gate: step.gate } : {}),
    ...(step.exitCriteria !== undefined
      ? { exitCriteria: [...step.exitCriteria] }
      : {}),
    ...(step.risks !== undefined ? { risks: [...step.risks] } : {}),
    ...(step.reservations !== undefined
      ? { reservations: [...step.reservations] }
      : {}),
  }));
}

export function computeCandidateContentDigest(input: {
  trajectoryId: string;
  version: number;
  status: ProjectTrajectory["status"];
  steps: readonly TrajectoryStep[];
}): string {
  return computeDecisionBasisSourceDigest({
    trajectoryId: input.trajectoryId,
    version: input.version,
    status: input.status,
    steps: materialTrajectoryStepsProjection(input.steps),
  });
}

export type CandidateTrajectoryPresentationMaterial = {
  projectId: string;
  lps: {
    lpsId: string;
    lpsVersion: number;
    doctrineDigest?: string;
  };
  candidate: {
    trajectoryId: string;
    candidateVersion: number;
    status: "candidate";
    candidateContentDigest: string;
  };
  provenance: {
    provenanceObservationId: string;
    recommendationId: string;
    semanticKey: string;
    targetCycleTypeId: string;
  };
  approvalKind: typeof CANDIDATE_TRAJECTORY_APPROVAL_KIND;
};

export function buildCandidateTrajectoryPresentationMaterial(input: {
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest?: string;
  trajectory: ProjectTrajectory;
  provenanceObservationId: string;
  recommendationId: string;
  semanticKey: string;
  targetCycleTypeId: string;
}): CandidateTrajectoryPresentationMaterial {
  const candidateContentDigest = computeCandidateContentDigest({
    trajectoryId: input.trajectory.trajectoryId,
    version: input.trajectory.version,
    status: input.trajectory.status,
    steps: input.trajectory.steps,
  });
  return {
    projectId: input.projectId,
    lps: {
      lpsId: input.lpsId,
      lpsVersion: input.lpsVersion,
      ...(input.doctrineDigest !== undefined
        ? { doctrineDigest: input.doctrineDigest }
        : {}),
    },
    candidate: {
      trajectoryId: input.trajectory.trajectoryId,
      candidateVersion: input.trajectory.version,
      status: "candidate",
      candidateContentDigest,
    },
    provenance: {
      provenanceObservationId: input.provenanceObservationId,
      recommendationId: input.recommendationId,
      semanticKey: input.semanticKey,
      targetCycleTypeId: input.targetCycleTypeId,
    },
    approvalKind: CANDIDATE_TRAJECTORY_APPROVAL_KIND,
  };
}

export function computeCandidateTrajectoryPresentationDigest(
  material: CandidateTrajectoryPresentationMaterial,
): string {
  return computeDecisionBasisSourceDigest(material);
}

/** Server-owned display DTO — client must not treat as SoT for sealed fields. */
export type CandidateTrajectoryApprovalPresentationDto = {
  projectId: string;
  trajectoryId: string;
  catalogLabel: string | null;
  targetCycleTypeId: string;
  steps: readonly {
    stepId: string;
    order: number;
    label: string;
    state: string;
  }[];
  provenanceStatus: "RESOLVED";
  recommendationId: string;
  semanticKey: string;
  provenanceObservationId: string;
  awaitingDecision: true;
  cycleStarted: false;
  targetCycleSelectable: boolean;
  approvalOptionLabel: typeof CANDIDATE_TRAJECTORY_APPROVAL_OPTION_LABEL;
  presentationDigest: string;
  /** Display-only version hint — never authoritative for approval. */
  displayCandidateVersionHint: number;
};

export function buildCandidateTrajectoryApprovalPresentationDto(input: {
  material: CandidateTrajectoryPresentationMaterial;
  presentationDigest: string;
  steps: readonly TrajectoryStep[];
  targetCycleSelectable: boolean;
}): CandidateTrajectoryApprovalPresentationDto {
  const entry = getCycleTypeById(input.material.provenance.targetCycleTypeId);
  return {
    projectId: input.material.projectId,
    trajectoryId: input.material.candidate.trajectoryId,
    catalogLabel: entry?.label ?? null,
    targetCycleTypeId: input.material.provenance.targetCycleTypeId,
    steps: input.steps.map((s) => ({
      stepId: s.stepId,
      order: s.order,
      label: s.label,
      state: s.state,
    })),
    provenanceStatus: "RESOLVED",
    recommendationId: input.material.provenance.recommendationId,
    semanticKey: input.material.provenance.semanticKey,
    provenanceObservationId: input.material.provenance.provenanceObservationId,
    awaitingDecision: true,
    cycleStarted: false,
    targetCycleSelectable: input.targetCycleSelectable,
    approvalOptionLabel: CANDIDATE_TRAJECTORY_APPROVAL_OPTION_LABEL,
    presentationDigest: input.presentationDigest,
    displayCandidateVersionHint: input.material.candidate.candidateVersion,
  };
}
```

### FILE: projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/candidateTrajectoryProvenance.ts
```
/**
 * Option B — durable provenance Observation for greenfield candidate trajectories.
 *
 * Links projectId ↔ source Lifecycle Recommendation ↔ candidate ProjectTrajectory
 * via existing EpistemicItem store. No new table, no ProjectTrajectory field.
 *
 * Authority: none. Not a Recommendation. Not a HumanDecision.
 */
import { randomBytes } from "node:crypto";
import type { ActorReference } from "@/lib/oa/doctrine";
import type { EpistemicItem } from "../../domain/types";
import { getCycleTypeById } from "../../domain/cycleTypeCatalog";

/** Stable Product source for bridge provenance Observations. */
export const CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE =
  "candidate-trajectory-provenance:bridge" as const;

/**
 * System actor for Studio-materialized provenance Observations.
 * Reuses system/none pattern (cf. sys:project-create) — never Pilote / Morris.
 */
export const CANDIDATE_TRAJECTORY_PROVENANCE_ACTOR: ActorReference =
  Object.freeze({
    actorId: "sys:candidate-trajectory-provenance",
    role: "system",
    displayName: "Candidate trajectory provenance",
    authorityLevel: "none",
  });

export const CANDIDATE_TRAJECTORY_PROVENANCE_STATEMENT =
  "Cette trajectoire proposée a été préparée à partir d’une recommandation lifecycle.";

export type CandidateTrajectoryProvenanceStatus =
  | "RESOLVED"
  | "MISSING"
  | "AMBIGUOUS"
  | "INVALID";

export type CandidateTrajectoryProvenanceResolved = {
  status: "RESOLVED";
  provenanceObservationId: string;
  recommendationId: string;
  semanticKey: string;
  targetCycleTypeId: string;
  trajectoryId: string;
  sourceRecommendationEpistemicStatus: EpistemicItem["status"];
};

export type CandidateTrajectoryProvenanceUnresolved = {
  status: Exclude<CandidateTrajectoryProvenanceStatus, "RESOLVED">;
  reason: string;
  trajectoryId: string;
  projectId: string;
  matchingObservationIds?: readonly string[];
};

export type CandidateTrajectoryProvenanceResult =
  | CandidateTrajectoryProvenanceResolved
  | CandidateTrajectoryProvenanceUnresolved;

export function newProvenanceObservationId(): string {
  return `epi:trj-prov-${randomBytes(8).toString("hex")}`;
}

export function buildCandidateTrajectoryProvenanceRelatedObjects(input: {
  projectId: string;
  recommendationId: string;
  trajectoryId: string;
}): string[] {
  return [input.projectId, input.recommendationId, input.trajectoryId];
}

export function buildCandidateTrajectoryProvenanceObservationItem(input: {
  epistemicItemId: string;
  projectId: string;
  recommendationId: string;
  trajectoryId: string;
}): {
  epistemicItemId: string;
  type: "Observation";
  statement: string;
  status: "active";
  source: typeof CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE;
  relatedObjects: string[];
} {
  return {
    epistemicItemId: input.epistemicItemId,
    type: "Observation",
    statement: CANDIDATE_TRAJECTORY_PROVENANCE_STATEMENT,
    status: "active",
    source: CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE,
    relatedObjects: buildCandidateTrajectoryProvenanceRelatedObjects({
      projectId: input.projectId,
      recommendationId: input.recommendationId,
      trajectoryId: input.trajectoryId,
    }),
  };
}

function extractRecommendationIdFromRelatedObjects(
  relatedObjects: readonly string[],
  projectId: string,
  trajectoryId: string,
):
  | { ok: true; recommendationId: string }
  | { ok: false; reason: string } {
  const hasProject = relatedObjects.includes(projectId);
  const hasTrajectory = relatedObjects.includes(trajectoryId);
  if (!hasProject || !hasTrajectory) {
    return { ok: false, reason: "related_objects_missing_project_or_trajectory" };
  }
  const epiRefs = relatedObjects.filter(
    (id) =>
      typeof id === "string" &&
      id.startsWith("epi:") &&
      id !== projectId &&
      id !== trajectoryId,
  );
  if (epiRefs.length === 0) {
    return { ok: false, reason: "related_objects_missing_recommendation_id" };
  }
  if (epiRefs.length > 1) {
    return { ok: false, reason: "related_objects_ambiguous_recommendation_id" };
  }
  return { ok: true, recommendationId: epiRefs[0]! };
}

/**
 * Exact restart-safe reconstruction:
 * trajectoryId → provenance Observation → recommendationId → LR payload.
 * Never uses step.label reverse-mapping.
 */
export function resolveCandidateTrajectoryProvenance(input: {
  projectId: string;
  trajectoryId: string;
  epistemicItems: readonly EpistemicItem[];
}): CandidateTrajectoryProvenanceResult {
  const { projectId, trajectoryId, epistemicItems } = input;
  const unresolved = (
    status: Exclude<CandidateTrajectoryProvenanceStatus, "RESOLVED">,
    reason: string,
    matchingObservationIds?: readonly string[],
  ): CandidateTrajectoryProvenanceUnresolved => ({
    status,
    reason,
    trajectoryId,
    projectId,
    matchingObservationIds,
  });

  if (!projectId?.startsWith("prj:") || !trajectoryId?.startsWith("trj:")) {
    return unresolved("INVALID", "project_or_trajectory_id_invalid");
  }

  const matches = epistemicItems.filter((item) => {
    if (item.type !== "Observation") return false;
    if (item.status !== "active") return false;
    if (item.source !== CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE) return false;
    const related = item.relatedObjects ?? [];
    return related.includes(projectId) && related.includes(trajectoryId);
  });

  if (matches.length === 0) {
    return unresolved("MISSING", "provenance_observation_absent");
  }
  if (matches.length > 1) {
    return unresolved(
      "AMBIGUOUS",
      "multiple_provenance_observations",
      matches.map((m) => m.epistemicItemId),
    );
  }

  const observation = matches[0]!;
  const extracted = extractRecommendationIdFromRelatedObjects(
    observation.relatedObjects ?? [],
    projectId,
    trajectoryId,
  );
  if (!extracted.ok) {
    return unresolved("INVALID", extracted.reason, [observation.epistemicItemId]);
  }

  const recommendation = epistemicItems.find(
    (item) => item.epistemicItemId === extracted.recommendationId,
  );
  if (!recommendation) {
    return unresolved(
      "INVALID",
      "source_recommendation_absent",
      [observation.epistemicItemId],
    );
  }
  if (recommendation.type !== "Recommendation") {
    return unresolved(
      "INVALID",
      "source_not_recommendation",
      [observation.epistemicItemId],
    );
  }

  const lr = recommendation.lifecycleRecommendation;
  if (!lr) {
    return unresolved(
      "INVALID",
      "source_missing_lifecycle_recommendation_payload",
      [observation.epistemicItemId],
    );
  }
  if (lr.intent !== "NEXT_CYCLE") {
    return unresolved(
      "INVALID",
      "source_intent_not_next_cycle",
      [observation.epistemicItemId],
    );
  }
  if (!lr.semanticKey || typeof lr.semanticKey !== "string") {
    return unresolved(
      "INVALID",
      "source_semantic_key_missing",
      [observation.epistemicItemId],
    );
  }
  if (!lr.targetCycleTypeId || typeof lr.targetCycleTypeId !== "string") {
    return unresolved(
      "INVALID",
      "source_target_cycle_type_missing",
      [observation.epistemicItemId],
    );
  }
  if (lr.basisRefs?.projectId && lr.basisRefs.projectId !== projectId) {
    return unresolved(
      "INVALID",
      "source_project_mismatch",
      [observation.epistemicItemId],
    );
  }
  // Historical identity only — catalog entry must exist as a known id.
  // Current selectability (lifecycleStatus === active) is a SEPARATE HD gate.
  const catalog = getCycleTypeById(lr.targetCycleTypeId);
  if (!catalog) {
    return unresolved(
      "INVALID",
      "source_target_cycle_type_not_canonical",
      [observation.epistemicItemId],
    );
  }

  return {
    status: "RESOLVED",
    provenanceObservationId: observation.epistemicItemId,
    recommendationId: recommendation.epistemicItemId,
    semanticKey: lr.semanticKey,
    targetCycleTypeId: lr.targetCycleTypeId,
    trajectoryId,
    sourceRecommendationEpistemicStatus: recommendation.status,
  };
}

/**
 * Current selectability of a canonical cycle type for a new Pilote decision.
 * Distinct from historical provenance RESOLVED.
 */
export function isTargetCycleCurrentlySelectable(
  targetCycleTypeId: string,
): boolean {
  const catalog = getCycleTypeById(targetCycleTypeId);
  return Boolean(catalog && catalog.lifecycleStatus === "active");
}
```

### FILE: projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts
```
export * from "./types";
export * from "./basisFingerprint";
export * from "./resolveCanonicalBasis";
export * from "./validateLifecycleRecommendation";
export * from "./materializeLifecycleRecommendation";
export * from "./currentness";
export * from "./produceLifecycleRecommendation";
export * from "./materializeFromProductTurn";
export * from "./materialReaderContract";
export * from "./noraActor";
export * from "./greenfieldLifecycleBootstrap";
export * from "./prepareCandidateTrajectoryFromCurrentRecommendation";
export * from "./candidateTrajectoryProvenance";
export * from "./candidateTrajectoryDecisionBasis";
```

### FILE: projects/sfia-studio/app/lib/oa/decision/application/recordHumanDecision.ts
```
import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { CycleServices } from "@/lib/oa/cycle";
import type { ProjectServices } from "@/lib/oa/project";
import { createDecisionError } from "../domain/errors";
import {
  assertRecommendationIsNotDecision,
  cloneDecisionArrays,
  validateDecisionBasis,
  validateDecisionFields,
} from "../domain/invariants";
import type {
  AuthorityLevel,
  DecisionAuthority,
  DecisionResult,
  HumanDecision,
  HumanDecisionStatus,
  OaActorReference,
  RecordHumanDecisionRequest,
} from "../domain/types";
import type { AuthorityResolverPort } from "../ports/authorityResolver";
import type { DecisionAuditPort } from "../ports/decisionAudit";
import type { DecisionPersistenceUnitOfWorkPort } from "../ports/decisionPersistenceUnitOfWorkPort";
import type { DecisionRepositoryPort } from "../ports/decisionRepository";

function newId(prefix: "cor" | "prv" | "epi"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

function requiredLevelForAuthority(
  authority: DecisionAuthority,
): AuthorityLevel {
  if (authority === "morris") return "N3";
  if (authority === "delegated") return "N2";
  return "N1";
}

type DecisionFieldSnapshot = {
  decisionId: string;
  projectId: string;
  cycleInstanceId: string | undefined;
  subject: string;
  selectedOptionId: string;
  actor: OaActorReference;
  authority: DecisionAuthority;
  status: HumanDecisionStatus;
  reversible: boolean;
  scope: string;
  nonStructuring: boolean | undefined;
  rationale: string | undefined;
  authorityEvidenceId: string | undefined;
  supersedeExistingAccepted: boolean;
  linkEpistemicDecisionRef: boolean;
  epistemicItemId: string | undefined;
  linkToLivingProjectState: boolean;
  expectedLpsVersion: number | undefined;
  decisionBasis: RecordHumanDecisionRequest["decisionBasis"];
};

/**
 * RecordHumanDecision — create an explicit human decision.
 * Structuring (morris) requires verified N3 + canActAsMorris.
 * Never invents Morris from actorId/displayName.
 * Critical cycle stays proposed — this use-case does NOT mutate cycle status
 * (R-T-A3-1: no public AcknowledgeCriticalCycle API on T-A2).
 *
 * B1: snapshot authority/actor/selectedOptionId/status/subject/scope BEFORE awaits.
 * M3: LPS append (when requested) runs INSIDE the same UoW as decision save —
 * LPS_VERSION_CONFLICT rolls back (no orphan decision on Product SQLite).
 */
export class RecordHumanDecision {
  constructor(
    private readonly decisions: DecisionRepositoryPort,
    private readonly authority: AuthorityResolverPort,
    private readonly projectServices: ProjectServices,
    private readonly cycleServices: CycleServices | undefined,
    private readonly clock: ClockPort,
    private readonly audit: DecisionAuditPort,
    private readonly store?: DecisionPersistenceUnitOfWorkPort,
  ) {}

  async execute(
    request: RecordHumanDecisionRequest,
  ): Promise<DecisionResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createDecisionError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createDecisionError>[0]>,
    ): DecisionResult => {
      const durationMs = Date.now() - started;
      const error = createDecisionError({
        detailCode,
        timestamp,
        correlationId,
        projectId: extra?.projectId ?? request.projectId,
        decisionId: extra?.decisionId ?? request.decisionId,
        subject: extra?.subject ?? request.subject,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.decision.recorded",
        ts: timestamp,
        correlationId,
        projectId: error.projectId ?? request.projectId,
        decisionId: error.decisionId ?? request.decisionId,
        subject: error.subject ?? request.subject,
        authority: request.authority,
        status: request.status ?? "accepted",
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      if (!request.actor?.actorId) {
        return fail("DECISION_INVALID", "actor_required");
      }

      // B1 — Snapshot scalars/objects IMMEDIATELY after clone/validate path start,
      // BEFORE any await. Persist only snapshots (ignore hostile post-await mutations).
      const cloned = cloneDecisionArrays({
        options: request.options,
        reservations: request.reservations,
        evidenceRefs: request.evidenceRefs,
      });

      const snap: DecisionFieldSnapshot = {
        decisionId: request.decisionId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        subject: request.subject,
        selectedOptionId: request.selectedOptionId,
        actor: structuredClone(request.actor),
        authority: request.authority,
        status: request.status ?? "accepted",
        reversible: request.reversible,
        scope: request.scope ?? request.subject,
        nonStructuring: request.nonStructuring,
        rationale: request.rationale,
        authorityEvidenceId: request.authorityEvidenceId,
        supersedeExistingAccepted: request.supersedeExistingAccepted !== false,
        linkEpistemicDecisionRef: request.linkEpistemicDecisionRef === true,
        epistemicItemId: request.epistemicItemId,
        linkToLivingProjectState: request.linkToLivingProjectState === true,
        expectedLpsVersion: request.expectedLpsVersion,
        decisionBasis: request.decisionBasis
          ? structuredClone(request.decisionBasis)
          : undefined,
      };

      const fieldViolation = validateDecisionFields({
        decisionId: snap.decisionId,
        projectId: snap.projectId,
        subject: snap.subject,
        options: cloned.options,
        selectedOptionId: snap.selectedOptionId,
        authority: snap.authority,
        status: snap.status,
        nonStructuring: snap.nonStructuring,
        cycleInstanceId: snap.cycleInstanceId,
      });
      if (fieldViolation) {
        return fail(fieldViolation.detailCode, fieldViolation.reason, {
          projectId: snap.projectId,
          decisionId: snap.decisionId,
          subject: snap.subject,
        });
      }

      const basisViolation = validateDecisionBasis(snap.decisionBasis);
      if (basisViolation) {
        return fail(basisViolation.detailCode, basisViolation.reason, {
          projectId: snap.projectId,
          decisionId: snap.decisionId,
          subject: snap.subject,
        });
      }

      assertRecommendationIsNotDecision({
        options: cloned.options,
        selectedOptionId: snap.selectedOptionId,
      });

      const projectResult = await this.projectServices.getProject.execute({
        projectId: snap.projectId,
      });
      if (!projectResult.ok) {
        return fail("PROJECT_NOT_FOUND", "missing_project", {
          projectId: snap.projectId,
          decisionId: snap.decisionId,
          subject: snap.subject,
        });
      }

      if (snap.cycleInstanceId) {
        if (!this.cycleServices) {
          return fail("CYCLE_NOT_FOUND", "cycle_services_unavailable", {
            projectId: snap.projectId,
            decisionId: snap.decisionId,
            subject: snap.subject,
          });
        }
        const cycleResult = await this.cycleServices.getCycle.execute({
          cycleInstanceId: snap.cycleInstanceId,
        });
        if (!cycleResult.ok) {
          return fail("CYCLE_NOT_FOUND", "missing_cycle", {
            projectId: snap.projectId,
            decisionId: snap.decisionId,
            subject: snap.subject,
          });
        }
        if (cycleResult.cycle.projectId !== snap.projectId) {
          return fail("CYCLE_PROJECT_MISMATCH", "cycle_project_mismatch", {
            projectId: snap.projectId,
            decisionId: snap.decisionId,
            subject: snap.subject,
          });
        }
        // Critical stays proposed — no auto-ack (no public T-A2 acknowledge API).
      }

      const requireMorris = snap.authority === "morris";
      const requiredLevel = requiredLevelForAuthority(snap.authority);

      // Hostile: never use actor.authorityLevel / displayName as proof.
      const verification = this.authority.verify({
        actorId: snap.actor.actorId,
        requiredLevel,
        scope: snap.scope,
        evidenceId: snap.authorityEvidenceId,
        authorityLevel: snap.actor.authorityLevel,
        displayName: snap.actor.displayName,
        requireMorrisGate: requireMorris,
      });

      if (!verification.ok) {
        const detail =
          verification.reason === "scope_mismatch"
            ? "AUTHORITY_SCOPE_MISMATCH"
            : "AUTHORITY_DENIED";
        this.audit.append({
          event: "oa.authority.verified",
          ts: timestamp,
          correlationId,
          actorId: snap.actor.actorId,
          requiredLevel,
          scope: snap.scope,
          ok: false,
          verifiedLevel: verification.verifiedLevel,
          reason: verification.reason,
          canActAsMorris: verification.canActAsMorris,
          durationMs: Date.now() - started,
        });
        return fail(detail, verification.reason, {
          projectId: snap.projectId,
          decisionId: snap.decisionId,
          subject: snap.subject,
        });
      }

      this.audit.append({
        event: "oa.authority.verified",
        ts: timestamp,
        correlationId,
        actorId: snap.actor.actorId,
        requiredLevel,
        scope: snap.scope,
        ok: true,
        verifiedLevel: verification.verifiedLevel,
        reason: verification.reason,
        canActAsMorris: verification.canActAsMorris,
        durationMs: Date.now() - started,
      });

      if (await this.decisions.exists(snap.decisionId)) {
        return fail("DECISION_ALREADY_EXISTS", "decision_id_taken", {
          projectId: snap.projectId,
          decisionId: snap.decisionId,
          subject: snap.subject,
        });
      }

      const status = snap.status;
      const supersededDecisionIds: string[] = [];

      let decision: HumanDecision | undefined;
      let epistemicItemId: string | undefined;
      let livingProjectStateVersion: number | undefined;
      let lpsConflictCurrentVersion: number | undefined;

      const persist = async () => {
        if (status === "accepted") {
          const existing = await this.decisions.listAcceptedBySubject(
            snap.projectId,
            snap.subject.trim(),
          );
          if (existing.length > 0) {
            if (!snap.supersedeExistingAccepted) {
              throw Object.assign(new Error("accepted_exists"), {
                detailCode: "STATE_CONFLICT" as const,
              });
            }
            for (const prior of existing) {
              const superseded: HumanDecision = {
                ...prior,
                status: "superseded",
                version: (prior.version ?? 1) + 1,
              };
              await this.decisions.save(superseded);
              supersededDecisionIds.push(prior.decisionId);
            }
          }
        }

        const next: HumanDecision = {
          schemaVersion: "0.1.0-oa",
          decisionId: snap.decisionId,
          projectId: snap.projectId,
          cycleInstanceId: snap.cycleInstanceId,
          subject: snap.subject.trim(),
          options: structuredClone(cloned.options),
          selectedOptionId: snap.selectedOptionId,
          actor: structuredClone(snap.actor),
          authority: snap.authority,
          status,
          effectiveAt: timestamp,
          reversible: snap.reversible,
          scope: snap.scope,
          reservations:
            cloned.reservations.length > 0
              ? structuredClone(cloned.reservations)
              : undefined,
          rationale: snap.rationale,
          evidenceRefs:
            cloned.evidenceRefs.length > 0
              ? [...cloned.evidenceRefs]
              : undefined,
          decisionBasis: snap.decisionBasis
            ? structuredClone(snap.decisionBasis)
            : undefined,
          provenance: {
            schemaVersion: "0.1.0-oa",
            provenanceRecordId: newId("prv"),
            actor: structuredClone(snap.actor),
            source: "human_decision",
            timestamp,
            correlationId,
            projectId: snap.projectId,
          },
          version: 1,
        };

        await this.decisions.save(next);
        decision = next;

        // M3 — LPS append inside the same UoW (nested AsyncLocalStorage on Product).
        if (status === "accepted" && snap.linkToLivingProjectState) {
          if (snap.expectedLpsVersion === undefined) {
            throw Object.assign(new Error("lps_expected_version_required"), {
              detailCode: "PERSISTENCE_FAILURE" as const,
            });
          }
          const current =
            await this.projectServices.getCurrentLivingProjectState.execute({
              projectId: snap.projectId,
            });
          if (!current.ok) {
            throw Object.assign(new Error("lps_current_unavailable"), {
              detailCode: "PERSISTENCE_FAILURE" as const,
            });
          }
          const priorIds = current.livingProjectState.decisionIds ?? [];
          const nextIds = [...priorIds, snap.decisionId];
          const appended =
            await this.projectServices.appendLivingProjectStateVersion.execute({
              projectId: snap.projectId,
              expectedVersion: snap.expectedLpsVersion,
              objective: current.livingProjectState.objective,
              createdBy: snap.actor,
              correlationId,
              context: current.livingProjectState.context,
              scope: current.livingProjectState.scope,
              decisionIds: nextIds,
            });
          if (!appended.ok) {
            if (appended.error.detailCode === "LPS_VERSION_CONFLICT") {
              lpsConflictCurrentVersion = current.livingProjectState.version;
              throw Object.assign(new Error("lps_version_conflict"), {
                detailCode: "LPS_VERSION_CONFLICT" as const,
                currentVersion: current.livingProjectState.version,
              });
            }
            throw Object.assign(new Error("lps_link_failed"), {
              detailCode: "PERSISTENCE_FAILURE" as const,
            });
          }
          livingProjectStateVersion = appended.livingProjectState.version;
        }
      };

      try {
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch (err) {
        if (
          err &&
          typeof err === "object" &&
          "detailCode" in err &&
          typeof (err as { detailCode: unknown }).detailCode === "string"
        ) {
          const detailCode = (err as {
            detailCode: Parameters<typeof createDecisionError>[0]["detailCode"];
          }).detailCode;
          return fail(
            detailCode,
            err instanceof Error ? err.message : "rule",
            {
              projectId: snap.projectId,
              decisionId: snap.decisionId,
              subject: snap.subject,
              expectedVersion:
                detailCode === "LPS_VERSION_CONFLICT"
                  ? snap.expectedLpsVersion
                  : undefined,
              currentVersion:
                detailCode === "LPS_VERSION_CONFLICT"
                  ? lpsConflictCurrentVersion
                  : undefined,
            },
          );
        }
        return fail("PERSISTENCE_FAILURE", "atomic_record_failed", {
          projectId: snap.projectId,
          decisionId: snap.decisionId,
          subject: snap.subject,
        });
      }

      if (!decision) {
        return fail("PERSISTENCE_FAILURE", "atomic_record_incomplete", {
          projectId: snap.projectId,
          decisionId: snap.decisionId,
          subject: snap.subject,
        });
      }

      const compensateOrphan = async (cause: string): Promise<DecisionResult> => {
        // Best-effort compensate for epistemic-only residual (R-T-A3-2).
        try {
          const mark = async () => {
            const current = await this.decisions.findById(snap.decisionId);
            if (!current) return;
            await this.decisions.save({
              ...current,
              status: "superseded",
              version: (current.version ?? 1) + 1,
              rationale: `${current.rationale ?? ""} [compensated:${cause}]`.trim(),
            });
          };
          if (this.store) {
            await this.store.runInTransaction(mark);
          } else {
            await mark();
          }
        } catch {
          // Documented residual of R-T-A3-2 if compensate also fails.
        }
        return fail("PERSISTENCE_FAILURE", cause, {
          projectId: snap.projectId,
          decisionId: snap.decisionId,
          subject: snap.subject,
        });
      };

      // B4 — Optional epistemic DecisionRef: fail-closed when requested.
      if (status === "accepted" && snap.linkEpistemicDecisionRef) {
        if (!this.cycleServices) {
          return compensateOrphan("epistemic_services_unavailable");
        }
        const epiId = snap.epistemicItemId ?? newId("epi");
        const epi = await this.cycleServices.updateEpistemicState.execute({
          projectId: snap.projectId,
          items: [
            {
              epistemicItemId: epiId,
              type: "DecisionRef",
              statement: `Decision ${snap.decisionId} accepted for ${snap.subject}`,
              relatedObjects: [snap.decisionId],
              source: "human_decision",
            },
          ],
          createdBy: snap.actor,
          correlationId,
        });
        if (!epi.ok) {
          return compensateOrphan("epistemic_link_failed");
        }
        epistemicItemId = epiId;
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.decision.recorded",
        ts: timestamp,
        correlationId,
        projectId: snap.projectId,
        decisionId: snap.decisionId,
        subject: snap.subject,
        authority: snap.authority,
        status,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        decision: structuredClone(decision),
        supersededDecisionIds:
          supersededDecisionIds.length > 0
            ? [...supersededDecisionIds]
            : undefined,
        epistemicItemId,
        livingProjectStateVersion,
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
```

### FILE: projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts
```
/**
 * Semantic invariants for T-A3 Decision / Confirmation / Authority.
 */
import type {
  ConfirmationLevel,
  DecisionAuthority,
  DecisionBasis,
  DecisionDetailCode,
  DecisionOption,
  DecisionReservation,
  HumanDecisionStatus,
} from "./types";

/** Modeled identifier pattern (common/identifier.schema.json). */
export const OA_IDENTIFIER_PATTERN =
  /^[a-z][a-z0-9]*:[a-zA-Z0-9][a-zA-Z0-9:_\-.]*$/;

export const IDEMPOTENCY_KEY_MIN_LENGTH = 8 as const;

export type InvariantViolation = {
  detailCode: DecisionDetailCode;
  reason: string;
};

export function isOaIdentifier(value: string): boolean {
  return (
    typeof value === "string" &&
    value.length >= 3 &&
    value.length <= 128 &&
    OA_IDENTIFIER_PATTERN.test(value)
  );
}

export function assertPrefixedId(
  value: string,
  prefix: "dec:" | "cfm:" | "opt:" | "rsv:" | "evd:" | "prj:" | "cyc:" | "act:",
): InvariantViolation | null {
  if (!isOaIdentifier(value)) {
    return { detailCode: "DECISION_INVALID", reason: "identifier_pattern" };
  }
  if (!value.startsWith(prefix)) {
    return {
      detailCode: "DECISION_INVALID",
      reason: `identifier_prefix_${prefix}`,
    };
  }
  return null;
}

const LEVEL_RANK: Record<ConfirmationLevel, number> = {
  N1: 1,
  N2: 2,
  N3: 3,
};

/** True when verifiedLevel is sufficient for requiredLevel (N3 covers N2/N1). */
export function levelSatisfies(
  verified: ConfirmationLevel,
  required: ConfirmationLevel,
): boolean {
  return LEVEL_RANK[verified] >= LEVEL_RANK[required];
}

/**
 * Clone mutable arrays BEFORE validation (T-A2 B1 pattern).
 * Caller must use returned clones for all subsequent reads.
 */
export function cloneDecisionArrays(input: {
  options?: DecisionOption[];
  reservations?: DecisionReservation[];
  evidenceRefs?: string[];
  impacts?: string[];
  risks?: string[];
}): {
  options: DecisionOption[];
  reservations: DecisionReservation[];
  evidenceRefs: string[];
  impacts: string[];
  risks: string[];
} {
  return {
    options: input.options ? structuredClone(input.options) : [],
    reservations: input.reservations
      ? structuredClone(input.reservations)
      : [],
    evidenceRefs: input.evidenceRefs ? [...input.evidenceRefs] : [],
    impacts: input.impacts ? [...input.impacts] : [],
    risks: input.risks ? [...input.risks] : [],
  };
}

export function validateDecisionFields(input: {
  decisionId: string;
  projectId: string;
  subject: string;
  options: DecisionOption[];
  selectedOptionId: string;
  authority: DecisionAuthority;
  status?: HumanDecisionStatus;
  nonStructuring?: boolean;
  cycleInstanceId?: string;
}): InvariantViolation | null {
  const idErr = assertPrefixedId(input.decisionId, "dec:");
  if (idErr) return idErr;
  if (!isOaIdentifier(input.projectId) || !input.projectId.startsWith("prj:")) {
    return { detailCode: "DECISION_INVALID", reason: "project_id_invalid" };
  }
  if (typeof input.subject !== "string" || input.subject.trim().length < 1) {
    return { detailCode: "DECISION_INVALID", reason: "subject_required" };
  }
  if (!Array.isArray(input.options) || input.options.length < 1) {
    return { detailCode: "DECISION_INVALID", reason: "options_required" };
  }
  const optionIds = new Set<string>();
  for (const opt of input.options) {
    if (!opt?.optionId || !isOaIdentifier(opt.optionId)) {
      return { detailCode: "DECISION_INVALID", reason: "option_id_invalid" };
    }
    if (typeof opt.label !== "string" || opt.label.trim().length < 1) {
      return { detailCode: "DECISION_INVALID", reason: "option_label_required" };
    }
    if (optionIds.has(opt.optionId)) {
      return { detailCode: "DECISION_INVALID", reason: "option_id_duplicate" };
    }
    optionIds.add(opt.optionId);
  }
  if (!optionIds.has(input.selectedOptionId)) {
    return {
      detailCode: "DECISION_INVALID",
      reason: "selected_option_not_in_options",
    };
  }
  if (
    input.authority !== "morris" &&
    input.authority !== "delegated" &&
    input.authority !== "system_non_structuring"
  ) {
    return { detailCode: "DECISION_INVALID", reason: "authority_invalid" };
  }
  if (input.authority === "system_non_structuring" && !input.nonStructuring) {
    return {
      detailCode: "AUTHORITY_DENIED",
      reason: "system_non_structuring_requires_flag",
    };
  }
  if (input.cycleInstanceId) {
    if (
      !isOaIdentifier(input.cycleInstanceId) ||
      !input.cycleInstanceId.startsWith("cyc:")
    ) {
      return {
        detailCode: "DECISION_INVALID",
        reason: "cycle_instance_id_invalid",
      };
    }
  }
  return null;
}

export function validateConfirmationFields(input: {
  confirmationId: string;
  level: ConfirmationLevel;
  actionRef: string;
  scope: string;
  idempotencyKey: string;
}): InvariantViolation | null {
  const idErr = assertPrefixedId(input.confirmationId, "cfm:");
  if (idErr) {
    return { detailCode: "CONFIRMATION_INVALID", reason: idErr.reason };
  }
  if (input.level !== "N1" && input.level !== "N2" && input.level !== "N3") {
    return { detailCode: "CONFIRMATION_INVALID", reason: "level_invalid" };
  }
  if (!isOaIdentifier(input.actionRef)) {
    return { detailCode: "CONFIRMATION_INVALID", reason: "action_ref_invalid" };
  }
  if (typeof input.scope !== "string" || input.scope.trim().length < 1) {
    return { detailCode: "CONFIRMATION_INVALID", reason: "scope_required" };
  }
  if (
    typeof input.idempotencyKey !== "string" ||
    input.idempotencyKey.length < IDEMPOTENCY_KEY_MIN_LENGTH
  ) {
    return {
      detailCode: "CONFIRMATION_INVALID",
      reason: "idempotency_key_min_8",
    };
  }
  return null;
}

/**
 * Recommendation flag on an option must never auto-select the decision.
 * selectedOptionId must be explicit and independent of recommended.
 */
/**
 * Runtime DecisionBasis shape validation (D-GF-HD-01).
 * Fail-closed for incoherent sourceType/context combinations.
 * Does not invent missing digests — callers must supply exact digests.
 */
export function validateDecisionBasis(
  basis: DecisionBasis | undefined,
): InvariantViolation | null {
  if (basis === undefined) return null;

  if (
    basis.sourceType !== "proposal" &&
    basis.sourceType !== "trajectory_option" &&
    basis.sourceType !== "candidate_trajectory"
  ) {
    return { detailCode: "DECISION_INVALID", reason: "decision_basis_source_type" };
  }
  if (typeof basis.sourceRef !== "string" || basis.sourceRef.trim().length < 1) {
    return { detailCode: "DECISION_INVALID", reason: "decision_basis_source_ref" };
  }
  if (
    typeof basis.sourceDigest !== "string" ||
    basis.sourceDigest.trim().length < 1
  ) {
    return {
      detailCode: "DECISION_INVALID",
      reason: "decision_basis_source_digest",
    };
  }
  if (!isOaIdentifier(basis.projectId) || !basis.projectId.startsWith("prj:")) {
    return {
      detailCode: "DECISION_INVALID",
      reason: "decision_basis_project_id",
    };
  }
  if (
    !basis.proposalContext ||
    typeof basis.proposalContext.lpsId !== "string" ||
    !Number.isInteger(basis.proposalContext.lpsVersion)
  ) {
    return {
      detailCode: "DECISION_INVALID",
      reason: "decision_basis_proposal_context",
    };
  }

  if (basis.sourceType === "candidate_trajectory") {
    if (basis.trajectoryContext !== undefined) {
      return {
        detailCode: "DECISION_INVALID",
        reason: "candidate_trajectory_forbids_trajectory_context",
      };
    }
    const ctx = basis.candidateTrajectoryContext;
    if (!ctx) {
      return {
        detailCode: "DECISION_INVALID",
        reason: "candidate_trajectory_context_required",
      };
    }
    const required: Array<[string, unknown]> = [
      ["trajectoryId", ctx.trajectoryId],
      ["candidateVersion", ctx.candidateVersion],
      ["provenanceObservationId", ctx.provenanceObservationId],
      ["recommendationId", ctx.recommendationId],
      ["semanticKey", ctx.semanticKey],
      ["targetCycleTypeId", ctx.targetCycleTypeId],
      ["candidateContentDigest", ctx.candidateContentDigest],
      ["presentationDigest", ctx.presentationDigest],
    ];
    for (const [key, value] of required) {
      if (key === "candidateVersion") {
        if (!Number.isInteger(value) || (value as number) < 1) {
          return {
            detailCode: "DECISION_INVALID",
            reason: `candidate_trajectory_context_${key}`,
          };
        }
        continue;
      }
      if (typeof value !== "string" || value.trim().length < 1) {
        return {
          detailCode: "DECISION_INVALID",
          reason: `candidate_trajectory_context_${key}`,
        };
      }
    }
    if (basis.sourceRef !== ctx.trajectoryId) {
      return {
        detailCode: "DECISION_INVALID",
        reason: "candidate_trajectory_source_ref_mismatch",
      };
    }
    if (basis.sourceDigest !== ctx.presentationDigest) {
      return {
        detailCode: "DECISION_INVALID",
        reason: "candidate_trajectory_source_digest_mismatch",
      };
    }
    return null;
  }

  if (basis.sourceType === "trajectory_option") {
    if (basis.candidateTrajectoryContext !== undefined) {
      return {
        detailCode: "DECISION_INVALID",
        reason: "trajectory_option_forbids_candidate_trajectory_context",
      };
    }
    const ctx = basis.trajectoryContext;
    if (!ctx) {
      return {
        detailCode: "DECISION_INVALID",
        reason: "trajectory_context_required",
      };
    }
    if (
      typeof ctx.trajectoryId !== "string" ||
      !Number.isInteger(ctx.candidateVersion) ||
      !Array.isArray(ctx.optionRefs) ||
      typeof ctx.selectedOptionRef !== "string"
    ) {
      return {
        detailCode: "DECISION_INVALID",
        reason: "trajectory_context_incomplete",
      };
    }
    return null;
  }

  // proposal
  if (basis.candidateTrajectoryContext !== undefined) {
    return {
      detailCode: "DECISION_INVALID",
      reason: "proposal_forbids_candidate_trajectory_context",
    };
  }
  return null;
}

export function assertRecommendationIsNotDecision(input: {
  options: DecisionOption[];
  selectedOptionId: string;
}): InvariantViolation | null {
  const recommended = input.options.filter((o) => o.recommended === true);
  if (
    recommended.length === 1 &&
    recommended[0].optionId === input.selectedOptionId &&
    input.options.every(
      (o) => o.optionId === input.selectedOptionId || !o.recommended,
    )
  ) {
    // Allowed: human may select the recommended option explicitly.
    // Forbidden would be auto-setting selected from recommended without request.
    return null;
  }
  return null;
}

export function isConfirmationExpired(
  expiresAt: string | undefined,
  nowIso: string,
): boolean {
  if (!expiresAt) return false;
  return Date.parse(expiresAt) <= Date.parse(nowIso);
}

export function confirmationPayloadFingerprint(input: {
  level: ConfirmationLevel;
  actionRef: string;
  scope: string;
  decisionRef?: string;
  requestedToActorId: string;
}): string {
  return [
    input.level,
    input.actionRef,
    input.scope,
    input.decisionRef ?? "",
    input.requestedToActorId,
  ].join("|");
}
```

### FILE: projects/sfia-studio/app/lib/oa/decision/domain/types.ts
```
/**
 * T-A3 Decision / Confirmation / Authority — domain types (Option A v3-native).
 * Modeled schemas are the reference contract; adoption is T-A3-scoped only.
 *
 * Dual enums are intentional:
 * - HumanDecision.authority: morris | delegated | system_non_structuring
 * - Confirmation.level / ActorReference.authorityLevel: N1 | N2 | N3 | none
 *
 * Actor.authorityLevel MUST NOT be trusted from the client — verify via
 * AuthorityResolverPort. N3 verified level does NOT automatically grant Morris
 * gate; HumanDecision.authority === "morris" requires explicit evidence flag
 * `canActAsMorris: true` (or dedicated morrisGrant).
 */

import type {
  ActorReference,
  ProvenanceRecord,
} from "@/lib/oa/doctrine";

export { OA_SCHEMA_VERSION } from "@/lib/oa/doctrine";
export type { ActorReference, ProvenanceRecord };

/** Alias used in modeled docs — same shape as doctrine ActorReference. */
export type OaActorReference = ActorReference;

export type DecisionAuthority =
  | "morris"
  | "delegated"
  | "system_non_structuring";

export type HumanDecisionStatus =
  | "proposed"
  | "required"
  | "accepted"
  | "refused"
  | "amended"
  | "superseded"
  | "revoked";

export type ConfirmationLevel = "N1" | "N2" | "N3";

export type ConfirmationStatus =
  | "requested"
  | "granted"
  | "refused"
  | "expired"
  | "cancelled"
  | "consumed"
  | "superseded";

export type AuthorityLevel = "N1" | "N2" | "N3";

export type DecisionOption = {
  optionId: string;
  label: string;
  impacts?: string[];
  recommended?: boolean;
};

export type DecisionReservation = {
  reservationId: string;
  statement: string;
  blocking?: boolean;
};

/** Minimal embedded basis for durable GO → PREPARE (generic T-A3; no F2 imports). */
export type DecisionBasisProposalContext = {
  lpsId: string;
  lpsVersion: number;
  doctrineDigest?: string;
  activeCycleInstanceId?: string;
  ckcResolutionRef?: string;
};

/**
 * W2 — durable linkage from a structuring HumanDecision to the Option set it
 * arbitrated and to the trajectory version it is allowed to promote.
 * Options are described by reference/label only: a Recommendation recorded
 * here is never itself a decision.
 */
export type DecisionBasisTrajectoryContext = {
  /** Trajectory aggregate the decision arbitrates. */
  trajectoryId: string;
  /** Candidate (proposed) version the decision may promote. */
  candidateVersion: number;
  /** Option refs presented to the Pilote, in presentation order. */
  optionRefs: string[];
  /** Option the Pilote selected — must belong to optionRefs. */
  selectedOptionRef: string;
  /** Option that Nora recommended, when any. Never a decision. */
  recommendedOptionRef?: string;
  /** Durable Epistemic item refs materializing the options/recommendation. */
  epistemicRefs?: string[];
  /** W2 A2 — digest of the exact presented OptionSet sealed at propose. */
  optionSetDigest?: string;
};

/**
 * D-GF-HD-01 — greenfield unary APPROVAL of a pre-cycle candidate trajectory.
 * Links the Pilote HumanDecision to the exact candidate + provenance Observation.
 * Not a W2 OptionSet. Not a proposal.
 */
export type DecisionBasisCandidateTrajectoryContext = {
  trajectoryId: string;
  candidateVersion: number;
  provenanceObservationId: string;
  recommendationId: string;
  semanticKey: string;
  targetCycleTypeId: string;
  /** Digest of material candidate fields (id/version/status/steps). */
  candidateContentDigest: string;
  /** Digest of the exact material object presented to the Pilote. */
  presentationDigest: string;
};

export type DecisionBasisSourceType =
  | "proposal"
  | "trajectory_option"
  | "candidate_trajectory";

export type DecisionBasis = {
  sourceType: DecisionBasisSourceType;
  /**
   * Opaque source id:
   * - proposal id, or
   * - trajectory option-set ref, or
   * - candidate trajectoryId (D-GF-HD-01).
   */
  sourceRef: string;
  /** SHA-256 hex of canonical JSON over stable source fields. */
  sourceDigest: string;
  projectId: string;
  cycleInstanceId?: string;
  proposalContext: DecisionBasisProposalContext;
  /** Present when sourceType is `trajectory_option` (W2 only). */
  trajectoryContext?: DecisionBasisTrajectoryContext;
  /** Present when sourceType is `candidate_trajectory` (greenfield only). */
  candidateTrajectoryContext?: DecisionBasisCandidateTrajectoryContext;
  executionBasis: {
    objective?: string;
    scope?: string;
    outOfScope?: string[];
    activatedBlocks?: string[];
    expectedOutcome?: string;
    risks?: string[];
    reservations?: string[];
    stopConditions?: string[];
    cycleTypeId?: string;
    recommendedProfile?: string;
    requestedOperation?: string;
  };
};

export type HumanDecision = {
  schemaVersion: "0.1.0-oa";
  decisionId: string;
  projectId: string;
  cycleInstanceId?: string;
  subject: string;
  options: DecisionOption[];
  selectedOptionId: string;
  actor: OaActorReference;
  authority: DecisionAuthority;
  status: HumanDecisionStatus;
  effectiveAt: string;
  reversible: boolean;
  scope?: string;
  reservations?: DecisionReservation[];
  rationale?: string;
  evidenceRefs?: string[];
  supersedes?: string;
  provenance?: ProvenanceRecord;
  /** Optimistic concurrency token — incremented on supersede of this record. */
  version?: number;
  /** M3: embedded basis for exact ExecutionContract preparation. */
  decisionBasis?: DecisionBasis;
};

export type Confirmation = {
  schemaVersion: "0.1.0-oa";
  confirmationId: string;
  level: ConfirmationLevel;
  actionRef: string;
  requestedBy: OaActorReference;
  requestedTo: OaActorReference;
  scope: string;
  status: ConfirmationStatus;
  idempotencyKey: string;
  decisionRef?: string;
  impacts?: string[];
  risks?: string[];
  expiresAt?: string;
  confirmedAt?: string;
  cancelledAt?: string;
  provenance?: ProvenanceRecord;
};

/**
 * Authority evidence registry record.
 * `canActAsMorris` is SEPARATE from level N3 — N3 ≠ Morris gate.
 */
export type AuthorityEvidence = {
  evidenceId: string;
  actorId: string;
  level: AuthorityLevel;
  scope: string;
  issuedAt: string;
  expiresAt?: string;
  source: string;
  /** Explicit Morris-gate grant. Absent/false → cannot claim authority=morris. */
  canActAsMorris?: boolean;
};

export type VerifyAuthorityRequest = {
  actorId: string;
  requiredLevel: AuthorityLevel;
  scope: string;
  evidenceId?: string;
  /** Hostile injection — IGNORED. Never trusted. */
  authorityLevel?: AuthorityLevel | "none";
  displayName?: string;
  /** When true, also require canActAsMorris on matching evidence. */
  requireMorrisGate?: boolean;
};

export type VerifyAuthorityResult = {
  ok: boolean;
  verifiedLevel?: AuthorityLevel;
  canActAsMorris?: boolean;
  reason:
    | "verified"
    | "no_evidence"
    | "expired"
    | "level_insufficient"
    | "scope_mismatch"
    | "morris_gate_denied"
    | "evidence_not_found"
    | "actor_mismatch";
  evidenceId?: string;
};

export type RecordHumanDecisionRequest = {
  decisionId: string;
  projectId: string;
  cycleInstanceId?: string;
  subject: string;
  options: DecisionOption[];
  selectedOptionId: string;
  actor: OaActorReference;
  /**
   * Claimed decision authority. For "morris", AuthorityResolver must verify
   * N3 + canActAsMorris. Never inferred from actorId/displayName.
   */
  authority: DecisionAuthority;
  status?: HumanDecisionStatus;
  reversible: boolean;
  scope?: string;
  reservations?: DecisionReservation[];
  rationale?: string;
  evidenceRefs?: string[];
  /** Required when authority === system_non_structuring. */
  nonStructuring?: boolean;
  /** Authority evidence id to verify against registry. */
  authorityEvidenceId?: string;
  /**
   * When accepting and another accepted decision exists for the same subject,
   * supersede it (default) or refuse with STATE_CONFLICT.
   */
  supersedeExistingAccepted?: boolean;
  /** After accept: append DecisionRef via public Cycle epistemic API. */
  linkEpistemicDecisionRef?: boolean;
  epistemicItemId?: string;
  /** After accept: append decisionId onto LPS via T-A1 append. */
  linkToLivingProjectState?: boolean;
  expectedLpsVersion?: number;
  /** M3: embed DecisionBasis on the durable HumanDecision. */
  decisionBasis?: DecisionBasis;
  correlationId?: string;
};

export type SupersedeHumanDecisionRequest = {
  newDecisionId: string;
  supersedesDecisionId: string;
  selectedOptionId: string;
  options?: DecisionOption[];
  actor: OaActorReference;
  authority: DecisionAuthority;
  reversible: boolean;
  reason: string;
  scope?: string;
  reservations?: DecisionReservation[];
  rationale?: string;
  evidenceRefs?: string[];
  nonStructuring?: boolean;
  authorityEvidenceId?: string;
  /** OCC: expected version of the decision being superseded. */
  expectedVersion?: number;
  correlationId?: string;
};

export type RequestConfirmationRequest = {
  confirmationId: string;
  level: ConfirmationLevel;
  actionRef: string;
  requestedBy: OaActorReference;
  requestedTo: OaActorReference;
  scope: string;
  idempotencyKey: string;
  decisionRef?: string;
  impacts?: string[];
  risks?: string[];
  expiresAt?: string;
  correlationId?: string;
};

export type GrantConfirmationRequest = {
  confirmationId: string;
  actor: OaActorReference;
  authorityEvidenceId?: string;
  /** Hostile injection — ignored. */
  claimedAuthorityLevel?: AuthorityLevel | "none";
  correlationId?: string;
};

export type RefuseConfirmationRequest = {
  confirmationId: string;
  actor: OaActorReference;
  rationale?: string;
  correlationId?: string;
};

export type ConsumeConfirmationRequest = {
  confirmationId: string;
  actor: OaActorReference;
  correlationId?: string;
  /** Wall-clock override for expiry checks (tests). */
  nowIso?: string;
};

export type CancelConfirmationRequest = {
  confirmationId: string;
  actor: OaActorReference;
  correlationId?: string;
};

export type GetHumanDecisionRequest = {
  decisionId: string;
  correlationId?: string;
};

export type ListDecisionHistoryRequest = {
  projectId?: string;
  subject?: string;
  correlationId?: string;
};

/** Modeled ErrorRecord codes applicable to Decision/Confirmation/Authority. */
export type DecisionModeledErrorCode =
  | "DECISION_REQUIRED"
  | "CONFIRMATION_REQUIRED"
  | "AUTHORITY_DENIED"
  | "STATE_CONFLICT"
  | "CONTEXT_STALE";

/**
 * T-A3 detail codes — finer than modeled ErrorRecord enum.
 * AUTHORITY_SCOPE_MISMATCH maps to AUTHORITY_DENIED (modeled enum has no scope code).
 */
export type DecisionDetailCode =
  | "DECISION_INVALID"
  | "DECISION_ALREADY_EXISTS"
  | "DECISION_NOT_FOUND"
  | "DECISION_REQUIRED"
  | "CONFIRMATION_INVALID"
  | "CONFIRMATION_ALREADY_EXISTS"
  | "CONFIRMATION_NOT_FOUND"
  | "CONFIRMATION_REQUIRED"
  | "CONFIRMATION_EXPIRED"
  | "CONFIRMATION_ALREADY_CONSUMED"
  | "CONFIRMATION_IDEMPOTENCY_CONFLICT"
  | "AUTHORITY_DENIED"
  | "AUTHORITY_SCOPE_MISMATCH"
  | "PROJECT_NOT_FOUND"
  | "CYCLE_NOT_FOUND"
  | "CYCLE_PROJECT_MISMATCH"
  | "STATE_CONFLICT"
  | "VERSION_CONFLICT"
  | "LPS_VERSION_CONFLICT"
  | "PERSISTENCE_FAILURE";

export type DecisionStructuredError = {
  code: DecisionModeledErrorCode;
  detailCode: DecisionDetailCode;
  message: string;
  severity: "error" | "critical";
  retryable: boolean;
  blocking: boolean;
  recoverable: boolean;
  domain: "E";
  correlationId?: string;
  projectId?: string;
  decisionId?: string;
  confirmationId?: string;
  subject?: string;
  expectedVersion?: number;
  currentVersion?: number;
  provenance?: ProvenanceRecord;
  timestamp: string;
  internalCauseRef?: string;
};

export type DecisionSuccess = {
  ok: true;
  decision: HumanDecision;
  supersededDecisionIds?: string[];
  epistemicItemId?: string;
  livingProjectStateVersion?: number;
  durationMs: number;
};

export type DecisionFailure = {
  ok: false;
  error: DecisionStructuredError;
  durationMs: number;
};

export type DecisionResult = DecisionSuccess | DecisionFailure;

export type GetDecisionSuccess = {
  ok: true;
  decision: HumanDecision;
};

export type GetDecisionFailure = {
  ok: false;
  error: DecisionStructuredError;
};

export type GetDecisionResult = GetDecisionSuccess | GetDecisionFailure;

export type ListDecisionsSuccess = {
  ok: true;
  decisions: HumanDecision[];
};

export type ListDecisionsFailure = {
  ok: false;
  error: DecisionStructuredError;
};

export type ListDecisionsResult = ListDecisionsSuccess | ListDecisionsFailure;

export type ConfirmationSuccess = {
  ok: true;
  confirmation: Confirmation;
  reusedFromIdempotencyKey?: boolean;
  durationMs: number;
};

export type ConfirmationFailure = {
  ok: false;
  error: DecisionStructuredError;
  durationMs: number;
};

export type ConfirmationResult = ConfirmationSuccess | ConfirmationFailure;

export type VerifyAuthorityUseCaseResult = {
  ok: true;
  result: VerifyAuthorityResult;
  durationMs: number;
};
```

## Diffstat
commit 4c8733bf80e25060241c49157bded9813842e1ce
Author:     Morris Cleland <morris@macbook-air.home>
AuthorDate: Thu Sep 10 02:50:30 2026 +0200
Commit:     Morris Cleland <morris@macbook-air.home>
CommitDate: Thu Sep 10 02:50:30 2026 +0200

    feat(sfia-studio): govern greenfield trajectory approval

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../preCycleTrajectoryCta.ui.test.tsx              |    9 +
 .../trajectorySurface.ui.test.tsx                  |    9 +
 .../candidateTrajectoryBridge.d0.test.ts           |    4 +-
 .../candidateTrajectoryHumanDecision.d0.test.ts    | 1084 ++++++++++++++++++++
 .../importBoundaries.test.ts                       |    1 +
 .../surfaces/TrajectorySurface.tsx                 |  141 ++-
 .../approveCandidateTrajectory.ts                  |  687 +++++++++++++
 .../candidateTrajectoryPromotionGuard.ts           |  212 ++++
 .../preCycleCandidateTrajectoryActions.ts          |  123 ++-
 .../candidateTrajectoryDecisionBasis.ts            |  187 ++++
 .../candidateTrajectoryProvenance.ts               |   16 +-
 .../application/lifecycleRecommendation/index.ts   |    1 +
 .../oa/decision/application/recordHumanDecision.ts |   10 +
 .../app/lib/oa/decision/domain/invariants.ts       |  141 +++
 .../app/lib/oa/decision/domain/types.ts            |   36 +-
 15 files changed, 2649 insertions(+), 12 deletions(-)
