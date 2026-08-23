/**
 * ZERO REAL — PRE-M6 UAT semantic/UX reserves presentation.
 * @vitest-environment jsdom
 */
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
import { LpsSurface } from "@/features/pre-m6-product-ui/surfaces/LpsSurface";
import type { GetProjectSuccess } from "@/features/pre-m6-product-ui/types";
import type { ProductConversationController } from "@/features/pre-m6-product-ui/hooks/useProductConversation";
import type { F3ExecutePayload } from "@/features/project-assistant/f3/types";
import type { F3M3ResolvedPayload } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import { POST_EVIDENCE_NORA_SENTINEL } from "@/features/project-assistant/f3/postEvidenceNoraAnalysis";
import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";

const F3_LABELS = {
  fixtureNoReal: "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
  noGitWrite: "AUCUN GIT WRITE PRODUIT",
  recommendationNotDecision: "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
  cursorRealBlocked: "CURSOR REAL BLOQUÉ",
  hardOpen: "HARD R-T-A3-1 / R-T-A3-2 OPEN",
} as const;

function baseController(
  overrides: Partial<ProductConversationController>,
): ProductConversationController {
  return {
    listRef: { current: null },
    messages: [],
    draft: "",
    setDraft: () => undefined,
    toolEvents: [],
    uiState: "ANSWERED",
    error: null,
    modeLabel: "MODE À CONFIRMER",
    ephemeralNotice: "",
    f2: null,
    activeProposal: null,
    reservesText: "",
    setReservesText: () => undefined,
    f3Prepare: null,
    f3M3Resolved: null,
    f3Execute: null,
    durableEvidenceOutcome: null,
    durableRehydrateError: null,
    busy: false,
    blocked: false,
    canSend: false,
    gateOpen: false,
    recommendationFreshness: {
      status: "current",
      label: "Recommandation à jour",
    },
    qualificationFreshness: {
      status: "current",
      label: "Recommandation à jour",
    },
    durableOutcomeFreshness: {
      status: "current",
      label: "Recommandation à jour",
    },
    canPrepareResolvedM3: false,
    canPrepareLegacyFixture: false,
    canConfirmResolvedM3: false,
    canConfirmLegacyFixture: false,
    canRefreshResolvedM3Running: false,
    sendMessage: () => undefined,
    decide: () => undefined,
    prepareResolvedM3: () => undefined,
    prepareLegacyFixture: () => undefined,
    confirmAndExecuteResolvedM3: () => undefined,
    confirmAndExecuteLegacyFixture: () => undefined,
    refreshResolvedM3RunningAttempt: () => undefined,
    retryLastUserMessage: () => undefined,
    ...overrides,
  } as ProductConversationController;
}

const RESOLVED: F3M3ResolvedPayload = {
  turnKind: "f3_m3_resolved",
  mode: "M3_RESOLVED_BOUNDED_READ_ONLY",
  decisionId: "dec:f2:demo",
  projectId: "prj:demo",
  prepare: {} as F3M3ResolvedPayload["prepare"],
  original: {
    executionContractId: "xct:m3:dec:f2:demo",
    version: 1,
    status: "superseded",
    action: "UNRESOLVED_ACTION",
    target: "UNRESOLVED_TARGET",
    requiredCapabilities: ["cap:unresolved"],
  },
  successor: {
    executionContractId: "xct:m3-res:dec:f2:demo",
    version: 3,
    status: "confirmation_required",
    action: "cursor.read_only.inspect",
    target: "workspace.isolated.read",
    scope: "studio.m4.real_off",
    requiredAuthority: "MORRIS",
    requiredCapabilities: ["cap:cursor.read_only"],
    reversibility: "reversible",
    constraints: [
      "BOUNDED READ-ONLY",
      "CURSOR CLI REAL PROFILE",
      "GATE D REQUIRED",
      "NO GIT WRITE",
      "NO GITHUB WRITE",
    ],
    stopConditions: ["GATE_D_REQUIRED"],
    supersedesExecutionContractId: "xct:m3:dec:f2:demo",
    supersessionReason: "bounded",
  },
  reusedFromIdempotency: false,
  executionPerformed: false,
  attemptCreated: false,
  confirmationRequired: true,
  realExecution: false,
  disclosures: [],
};

function succeededReal(): F3ExecutePayload {
  return {
    turnKind: "f3_execute",
    mode: "CURSOR_CLI_REAL",
    proposal: null,
    decisionId: "dec:f2:demo",
    contract: {
      executionContractId: "xct:m3-res:dec:f2:demo",
      version: 3,
      status: "executed",
      action: "cursor.read_only.inspect",
      target: "workspace.isolated.read",
      scope: "studio.m4.real_off",
      requiredAuthority: "MORRIS",
      mode: "CURSOR_CLI_REAL",
      constraints: ["BOUNDED READ-ONLY"],
    },
    attempt: {
      attemptId: "xat:m3:demo",
      status: "succeeded",
      selectedAgentRef: "agt:m4.cursor.bounded_readonly",
      adapterId: "adp:m4-cursor-cli-real",
      adapterRef: "adp:m4-cursor-cli-real",
      executionMode: "cursor_cli_real",
      realProcessInvoked: true,
      externalEffects: true,
      resultRef: "res:m4:demo",
      launchCount: 1,
      selectionStrategy: "capabilities_deterministic",
      mode: "CURSOR_CLI_REAL",
    },
    evidence: {
      evidenceId: "ev:m4-bounded-ro:xat:m3:demo",
      status: "available",
      sourceKind: "execution_attempt",
      technicalResultRef: "res:m4:demo",
      verified: false,
      mode: "CURSOR_CLI_REAL",
    },
    reviewBundle: {
      reviewBundleId: "rb:m4-bounded-ro:xat:m3:demo",
      status: "draft",
      version: 1,
      evidenceRefs: ["ev:m4-bounded-ro:xat:m3:demo"],
      mode: "CURSOR_CLI_REAL",
    },
    recommendation: {
      kind: "recommendation",
      status: "available",
      executionAuthority: false,
      gateConsumed: false,
      decisionCreated: false,
      attemptAutoLaunchNextCycle: false,
      openHardReservationRefs: ["R-T-A3-1"],
      hardBlockers: ["R-T-A3-1 OPEN"],
      nextGateCode: "PRE-M6",
      nextActionCode: "continue_conversation",
      recommendationLabel: F3_LABELS.recommendationNotDecision,
      mode: "CURSOR_CLI_REAL",
    },
    reusedExistingAttempt: false,
    executionPerformed: true,
    realExecution: true,
    gitWritePerformed: false,
    labels: F3_LABELS,
    processLocalNotice: "Exécution Cursor réelle enregistrée.",
    disclosures: [],
  };
}

const DURABLE_REAL: ProjectAssistantRehydrateEvidenceOutcomeSuccess = {
  ok: true,
  status: "ok",
  mode: "fixture",
  presentation: "unconfirmed",
  text: "rehydrate",
  project: {} as ProjectAssistantRehydrateEvidenceOutcomeSuccess["project"],
  ephemeralNotice:
    "Lecture durable du résultat — aucune nouvelle exécution. Un résultat d'exécution borné a été enregistré. La recommandation n'est pas une décision Morris.",
  evidence: [
    {
      evidenceId: "ev:m4-bounded-ro:xat:m3:demo",
      status: "available",
      sourceKind: "execution_attempt",
      technicalResultRef: null,
      verified: false,
      mode: "CURSOR_CLI_REAL",
    },
  ],
  reviewBundles: [
    {
      reviewBundleId: "rb:m4-bounded-ro:xat:m3:demo",
      status: "draft",
      version: 1,
      evidenceRefs: ["ev:m4-bounded-ro:xat:m3:demo"],
      mode: "CURSOR_CLI_REAL",
    },
  ],
  recommendation: {
    kind: "recommendation",
    status: "available",
    executionAuthority: false,
    gateConsumed: false,
    decisionCreated: false,
    attemptAutoLaunchNextCycle: false,
    openHardReservationRefs: [],
    hardBlockers: [],
    nextGateCode: null,
    nextActionCode: null,
    recommendationLabel: F3_LABELS.recommendationNotDecision,
    mode: "CURSOR_CLI_REAL",
  },
  lpsVersion: 5,
  evidenceIds: ["ev:m4-bounded-ro:xat:m3:demo"],
  reviewBundleIds: ["rb:m4-bounded-ro:xat:m3:demo"],
};

afterEach(() => {
  cleanup();
});

describe("UAT-UX-03 confirmation surface", () => {
  it("shows authoritative user summary and keeps IDs under technical details", () => {
    render(
      <ConversationSurface
        controller={baseController({
          f3M3Resolved: RESOLVED,
          canConfirmResolvedM3: true,
        })}
      />,
    );
    expect(screen.getByTestId("f3-contract-user-summary")).toHaveTextContent(
      "cap:cursor.read_only",
    );
    expect(screen.getByTestId("f3-contract-constraints")).toHaveTextContent(
      "Pas d'écriture Git",
    );
    expect(screen.getByTestId("f3-contract-constraints")).not.toHaveTextContent(
      "CURSOR CLI REAL PROFILE",
    );
    expect(screen.getByTestId("f3-contract-authority-user")).toHaveTextContent(
      /Morris/,
    );
    expect(screen.getByTestId("f3-contract-semantic-chip")).toHaveTextContent(
      /contrôlée/,
    );
    expect(screen.getByTestId("f3-contract-semantic-chip")).not.toHaveTextContent(
      /Cursor réelle/,
    );
    expect(screen.getByTestId("f3-contract-raw-constraints")).toHaveTextContent(
      "CURSOR CLI REAL PROFILE",
    );
    expect(screen.queryByText("Exécution réelle bloquée")).toBeNull();
    expect(screen.getByTestId("f3-contract-id")).toHaveTextContent(
      "xct:m3-res:dec:f2:demo",
    );
  });
});

describe("UAT-UX-04/07 REAL result surface", () => {
  it("T3/T10/T11/T12 — REAL success is not fixture and recommendation stays non-authority", () => {
    render(
      <ConversationSurface
        controller={baseController({ f3Execute: succeededReal() })}
      />,
    );
    expect(screen.getByTestId("f3-execute-semantic")).toHaveTextContent(
      "Exécution Cursor réelle",
    );
    expect(screen.getByTestId("f3-result-user-summary")).toHaveTextContent(
      /succès/,
    );
    expect(screen.getByTestId("f3-review-bundle-user-summary")).toHaveTextContent(
      /brouillon/i,
    );
    expect(screen.getByTestId("f3-next-action-user")).toHaveTextContent(
      /continue_conversation/,
    );
    expect(screen.getByTestId("f3-recommendation-execution-authority")).toHaveTextContent(
      "false",
    );
    expect(screen.queryByText("Aucune exécution réelle")).toBeNull();
    expect(screen.queryByTestId("project-assistant-f3-no-real")).toBeNull();
    expect(screen.queryByText(/REAL BOUNDARY PROVEN/i)).toBeNull();
  });

  it("T13 — failed is not success", () => {
    const failed = succeededReal();
    failed.attempt.status = "failed";
    render(
      <ConversationSurface controller={baseController({ f3Execute: failed })} />,
    );
    expect(screen.getByTestId("f3-result-user-summary")).toHaveTextContent(/échec/);
    expect(screen.getByTestId("f3-result-user-summary")).not.toHaveTextContent(
      /succès/,
    );
  });

  it("T14 — running stays running", () => {
    const running = succeededReal();
    running.attempt.status = "running";
    running.contract.status = "executing";
    render(
      <ConversationSurface
        controller={baseController({
          f3Execute: running,
          canRefreshResolvedM3Running: true,
        })}
      />,
    );
    expect(screen.getByTestId("f3-attempt-status-label")).toHaveTextContent(
      "en cours",
    );
    expect(screen.queryByTestId("f3-result-user-summary")).toBeNull();
  });
});

describe("UAT-UX-08 durable rehydrate", () => {
  it("T-UX08-4/5/7 — REAL-shaped durable read is NEUTRAL and does not relaunch", () => {
    const confirm = vi.fn();
    render(
      <ConversationSurface
        controller={baseController({
          durableEvidenceOutcome: DURABLE_REAL,
          confirmAndExecuteResolvedM3: confirm,
        })}
      />,
    );
    expect(screen.getByTestId("durable-outcome-semantic")).toHaveTextContent(
      /Lecture durable/,
    );
    expect(screen.getByTestId("durable-ephemeral-notice")).toHaveTextContent(
      /résultat d'exécution borné/i,
    );
    expect(screen.getByTestId("durable-ephemeral-notice")).not.toHaveTextContent(
      /Exécution Cursor réelle/,
    );
    expect(screen.getByTestId("durable-ephemeral-notice")).not.toHaveTextContent(
      /REAL execution remains disabled/i,
    );
    expect(screen.queryByTestId("project-assistant-f3-cursor-real-recorded")).toBeNull();
    expect(screen.queryByText(/Exécution Cursor réelle/)).toBeNull();
    expect(screen.queryByText(/REAL BOUNDARY PROVEN/)).toBeNull();
    expect(confirm).not.toHaveBeenCalled();
    expect(screen.queryByTestId("project-assistant-f3-execute")).toBeNull();
    expect(screen.queryByTestId("f3-confirm-execute-button")).toBeNull();
  });
});

describe("UAT-UX-05 internal marker", () => {
  it("does not render the post-evidence sentinel in LPS context", () => {
    render(
      <LpsSurface
        result={
          {
            ok: true,
            project: {
              projectId: "prj:demo",
              name: "Demo",
              shortReference: null,
              objective: "Obj",
              contextSummary: `Contexte UAT. ${POST_EVIDENCE_NORA_SENTINEL}\nAnalyse interne`,
              criticality: "STANDARD",
              constraints: [],
              source: "product_sqlite",
            },
            livingState: {
              id: "lps:1",
              version: 5,
              createdAt: "2026-08-17T00:00:00.000Z",
              activeCycleInstanceId: null,
              ckcResolutionRef: null,
            },
            doctrine: { id: "doc", version: "1", digest: "abc" },
            readiness: { status: "NOT_READY" },
          } as unknown as GetProjectSuccess
        }
      />,
    );
    expect(screen.getByTestId("lps-context-display")).toHaveTextContent(
      "Contexte UAT.",
    );
    expect(screen.getByTestId("lps-context-display")).not.toHaveTextContent(
      POST_EVIDENCE_NORA_SENTINEL,
    );
  });
});
