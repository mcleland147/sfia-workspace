import { describe, expect, it } from "vitest";
import {
  attemptStatusUserLabel,
  confirmationPathChip,
  contractUserFacingFacts,
  deriveRecommendationFreshness,
  executionSemanticUserLabel,
  isBoundedRunningAttemptRefreshable,
  postExecutionUserSummary,
  projectContextForDisplay,
  resolvePersistenceNotice,
  shouldShowProjectRecovery,
  textContainsInternalLpsMarker,
} from "@/features/project-assistant/presentationLabels";

describe("G-UX-10 recommendation freshness", () => {
  it("marks CURRENT when session and durable Evidence IDs match", () => {
    const freshness = deriveRecommendationFreshness({
      hasSessionRecommendation: true,
      hasDurableEvidenceOutcome: true,
      sessionEvidenceId: "ev:same",
      durableEvidenceIds: ["ev:same", "ev:other"],
    });
    expect(freshness.status).toBe("current");
    expect(freshness.label).toBe("Recommandation à jour");
  });

  it("marks STALE when comparable Evidence IDs explicitly mismatch", () => {
    const freshness = deriveRecommendationFreshness({
      hasSessionRecommendation: true,
      hasDurableEvidenceOutcome: true,
      sessionEvidenceId: "ev:session",
      durableEvidenceIds: ["ev:durable"],
    });
    expect(freshness.status).toBe("stale");
    expect(freshness.label).toBe("Recommandation périmée");
  });

  it("stays UNDETERMINED when both sources exist but IDs are not comparable", () => {
    expect(
      deriveRecommendationFreshness({
        hasSessionRecommendation: true,
        hasDurableEvidenceOutcome: true,
        sessionEvidenceId: null,
        durableEvidenceIds: ["ev:durable"],
      }).status,
    ).toBe("undetermined");

    expect(
      deriveRecommendationFreshness({
        hasSessionRecommendation: true,
        hasDurableEvidenceOutcome: true,
        sessionEvidenceId: "ev:session",
        durableEvidenceIds: [],
      }).status,
    ).toBe("undetermined");

    expect(
      deriveRecommendationFreshness({
        hasSessionRecommendation: true,
        hasDurableEvidenceOutcome: true,
      }).status,
    ).toBe("undetermined");
  });

  it("stays undetermined without signals", () => {
    const freshness = deriveRecommendationFreshness({
      hasSessionRecommendation: false,
      hasDurableEvidenceOutcome: false,
    });
    expect(freshness.status).toBe("undetermined");
    expect(freshness.label).toMatch(/actualité non déterminée/);
  });

  it("treats session-only recommendation as CURRENT (no invented supersession)", () => {
    const freshness = deriveRecommendationFreshness({
      hasSessionRecommendation: true,
      hasDurableEvidenceOutcome: false,
      sessionEvidenceId: "ev:session",
    });
    expect(freshness.status).toBe("current");
  });

  it("treats durable-only rehydrate as CURRENT", () => {
    const freshness = deriveRecommendationFreshness({
      hasSessionRecommendation: false,
      hasDurableEvidenceOutcome: true,
      durableEvidenceIds: ["ev:durable"],
    });
    expect(freshness.status).toBe("current");
  });

  it("never equates freshness labels with HumanDecision", () => {
    for (const status of ["current", "stale", "undetermined"] as const) {
      const freshness = deriveRecommendationFreshness(
        status === "stale"
          ? {
              hasSessionRecommendation: true,
              hasDurableEvidenceOutcome: true,
              sessionEvidenceId: "a",
              durableEvidenceIds: ["b"],
            }
          : status === "current"
            ? {
                hasSessionRecommendation: true,
                hasDurableEvidenceOutcome: false,
              }
            : {
                hasSessionRecommendation: false,
                hasDurableEvidenceOutcome: false,
              },
      );
      expect(freshness.label.toLowerCase()).not.toMatch(/décision humaine/);
      expect(freshness.label.toLowerCase()).not.toMatch(/humandecision/);
    }
  });
});

describe("F10 recovery context", () => {
  it("hides recovery without durable advance signals", () => {
    expect(
      shouldShowProjectRecovery({
        hasDurableEvidenceOutcome: false,
        livingStateVersion: 1,
        activeCycleInstanceId: null,
      }),
    ).toBe(false);
  });

  it("shows recovery when durable evidence outcome exists", () => {
    expect(
      shouldShowProjectRecovery({
        hasDurableEvidenceOutcome: true,
        livingStateVersion: 1,
        activeCycleInstanceId: null,
      }),
    ).toBe(true);
  });

  it("shows recovery when LPS version advanced or cycle ref present", () => {
    expect(
      shouldShowProjectRecovery({
        hasDurableEvidenceOutcome: false,
        livingStateVersion: 2,
        activeCycleInstanceId: null,
      }),
    ).toBe(true);
    expect(
      shouldShowProjectRecovery({
        hasDurableEvidenceOutcome: false,
        livingStateVersion: 1,
        activeCycleInstanceId: "cycle:1",
      }),
    ).toBe(true);
  });
});

describe("attempt status user labels", () => {
  it("maps lifecycle statuses", () => {
    expect(attemptStatusUserLabel("running").label).toBe("en cours");
    expect(attemptStatusUserLabel("failed").label).toBe("échec");
    expect(attemptStatusUserLabel("timeout").label).toBe("timeout");
    expect(attemptStatusUserLabel("cancelled").label).toBe("annulé");
    expect(attemptStatusUserLabel("succeeded").label).toBe("terminé");
  });

  it("does not invent attempt identity for blocked-before-execution", () => {
    const blocked = attemptStatusUserLabel("");
    expect(blocked.label).toBe("bloqué avant exécution");
    expect(blocked.blockedBeforeExecution).toBe(true);
  });
});

describe("bounded running Attempt refreshability", () => {
  const runningReal = {
    attemptStatus: "running",
    realProcessInvoked: true,
    executionMode: "cursor_cli_real",
    payloadMode: "CURSOR_CLI_REAL",
    contractStatus: "executing",
  };

  it("allows refresh only for an already-authorized bounded REAL running Attempt", () => {
    expect(isBoundedRunningAttemptRefreshable(runningReal)).toBe(true);
  });

  it("rejects fixture, pre-confirmation, and terminal payloads", () => {
    expect(isBoundedRunningAttemptRefreshable(null)).toBe(false);
    expect(
      isBoundedRunningAttemptRefreshable({
        ...runningReal,
        payloadMode: "FIXTURE",
        executionMode: "fixture",
        realProcessInvoked: false,
        attemptStatus: "succeeded",
        contractStatus: "executed",
      }),
    ).toBe(false);
    expect(
      isBoundedRunningAttemptRefreshable({
        ...runningReal,
        attemptStatus: "succeeded",
      }),
    ).toBe(false);
    expect(
      isBoundedRunningAttemptRefreshable({
        ...runningReal,
        realProcessInvoked: false,
      }),
    ).toBe(false);
    expect(
      isBoundedRunningAttemptRefreshable({
        ...runningReal,
        contractStatus: "prepared",
      }),
    ).toBe(false);
  });
});

describe("UAT-UX contract / Fake-Real / marker presentation", () => {
  it("T1/T2 — confirmation facts come only from authoritative contract fields", () => {
    const facts = contractUserFacingFacts({
      action: "cursor.read_only.inspect",
      target: "workspace.isolated.read",
      scope: "studio.m4.real_off",
      requiredCapabilities: ["cap:cursor.read_only"],
      reversibility: "reversible",
      constraints: ["BOUNDED READ-ONLY", "NO GIT WRITE"],
      stopConditions: ["GATE_D_REQUIRED"],
      requiredAuthority: "MORRIS",
    });
    expect(facts.action).toContain("cursor.read_only.inspect");
    expect(facts.target).toBe("workspace.isolated.read");
    expect(facts.capabilities).toEqual(["cap:cursor.read_only"]);
    expect(facts.reversibility).toBe("Réversible");
    expect(facts.constraints).toContain("Pas d'écriture Git");
    expect(facts.authority).toMatch(/Morris/);
    expect(JSON.stringify(facts).toLowerCase()).not.toMatch(/readme uniquement/);
    expect(JSON.stringify(facts).toLowerCase()).not.toMatch(/aucun shell/);
  });

  it("T2 — does not invent guarantees when authoritative fields are absent", () => {
    const facts = contractUserFacingFacts({
      action: "UNRESOLVED_ACTION",
      target: "UNRESOLVED_TARGET",
    });
    expect(facts.action).toBe("UNRESOLVED_ACTION");
    expect(facts.capabilities).toEqual([]);
    expect(facts.constraints).toEqual([]);
    expect(facts.authority).toBeNull();
    expect(facts.reversibility).toBeNull();
  });

  it("T3 — REAL adapter facts map to Cursor réelle, never fixture/no-real", () => {
    const label = executionSemanticUserLabel({
      mode: "CURSOR_CLI_REAL",
      executionMode: "cursor_cli_real",
      adapterId: "adp:m4-cursor-cli-real",
      realProcessInvoked: true,
      realExecution: true,
      evidenceId: "ev:m4-bounded-ro:xat:demo",
    });
    expect(label).toBe("Exécution Cursor réelle");
    expect(label.toLowerCase()).not.toMatch(/fixture/);
    expect(label.toLowerCase()).not.toMatch(/aucune exécution réelle/);
    expect(label).not.toMatch(/REAL BOUNDARY PROVEN/);
  });

  it("T4 — fixture facts stay fixture and never become REAL", () => {
    const label = executionSemanticUserLabel({
      mode: "FIXTURE",
      executionMode: "adapter_sync_fixture",
      adapterId: "adp:f3-test-fixture",
      realProcessInvoked: false,
      evidenceId: "ev:f3-fixture:xat:demo",
    });
    expect(label).toBe("Fixture de test");
    expect(label.toLowerCase()).not.toMatch(/cursor réelle/);
  });

  it("T5 — deterministic boundary is never REAL BOUNDARY PROVEN", () => {
    const label = executionSemanticUserLabel({
      mode: "CURSOR_CLI_REAL",
      executionMode: "cursor_cli_real",
      adapterId: "adp:m4-cursor-cli-real",
      processRef: "proc:det:xat:demo",
      realProcessInvoked: true,
    });
    expect(label).toBe("Exécution déterministe de test");
    expect(label).not.toMatch(/REAL BOUNDARY PROVEN/);
  });

  it("T-UX08-1 — session REAL facts still produce Cursor réelle", () => {
    const label = executionSemanticUserLabel({
      mode: "CURSOR_CLI_REAL",
      executionMode: "cursor_cli_real",
      adapterId: "adp:m4-cursor-cli-real",
      realProcessInvoked: true,
      realExecution: true,
      evidenceId: "ev:m4-bounded-ro:xat:demo",
    });
    expect(label).toBe("Exécution Cursor réelle");
    expect(
      resolvePersistenceNotice({
        productDurablePath: true,
        mode: "CURSOR_CLI_REAL",
        kind: "execute",
      }),
    ).toBe(
      "Exécution Cursor réelle enregistrée. La recommandation n'est pas une décision Morris.",
    );
  });

  it("T-UX08-2 — session DET processRef is never REAL", () => {
    const label = executionSemanticUserLabel({
      mode: "CURSOR_CLI_REAL",
      executionMode: "cursor_cli_real",
      adapterId: "adp:m4-cursor-cli-real",
      processRef: "proc:det:xat:demo",
      realProcessInvoked: true,
    });
    expect(label).toBe("Exécution déterministe de test");
    expect(label).not.toMatch(/Cursor réelle/);
    expect(label).not.toMatch(/REAL BOUNDARY PROVEN/);
    expect(
      resolvePersistenceNotice({
        productDurablePath: true,
        mode: "CURSOR_CLI_REAL",
        kind: "execute",
        processRef: "proc:det:xat:demo",
      }),
    ).toMatch(/déterministe de test/);
    expect(
      resolvePersistenceNotice({
        productDurablePath: true,
        mode: "CURSOR_CLI_REAL",
        kind: "execute",
        processRef: "proc:det:xat:demo",
      }),
    ).not.toMatch(/Cursor réelle/);
  });

  it("T-UX08-3 — fixture stays fixture", () => {
    expect(
      executionSemanticUserLabel({
        mode: "FIXTURE",
        executionMode: "adapter_sync_fixture",
        adapterId: "adp:f3-test-fixture",
        evidenceId: "ev:f3-fixture:xat:demo",
      }),
    ).toBe("Fixture de test");
  });

  it("T-UX08-4/5 — REAL-shaped durable rehydrate without processRef is NEUTRAL", () => {
    const label = executionSemanticUserLabel({
      mode: "CURSOR_CLI_REAL",
      evidenceId: "ev:m4-bounded-ro:xat:demo",
      durableRead: true,
    });
    expect(label).toBe("Lecture durable du résultat — aucune nouvelle exécution");
    expect(label).not.toMatch(/Cursor réelle/);
    expect(label).not.toMatch(/déterministe/);
    const notice = resolvePersistenceNotice({
      productDurablePath: true,
      mode: "CURSOR_CLI_REAL",
      kind: "rehydrate",
      evidenceId: "ev:m4-bounded-ro:xat:demo",
    });
    expect(notice).toMatch(/Lecture durable du résultat/);
    expect(notice).toMatch(/résultat d'exécution borné/);
    expect(notice).not.toMatch(/Une exécution Cursor réelle/);
    expect(notice).not.toMatch(/Exécution Cursor réelle/);
    expect(notice).not.toMatch(/REAL BOUNDARY PROVEN/);
    expect(notice).not.toMatch(/REAL execution remains disabled/);
  });

  it("T-UX08-6 — true fixture durable stays fixture, not bounded REAL", () => {
    expect(
      executionSemanticUserLabel({
        evidenceId: "ev:f3-fixture:xat:demo",
        mode: "FIXTURE",
        durableRead: true,
      }),
    ).toBe("Fixture de test");
    expect(
      resolvePersistenceNotice({
        productDurablePath: true,
        mode: "FIXTURE",
        kind: "rehydrate",
        evidenceId: "ev:f3-fixture:xat:demo",
      }),
    ).toMatch(/REAL execution remains disabled/);
    expect(
      resolvePersistenceNotice({
        productDurablePath: true,
        mode: "FIXTURE",
        kind: "rehydrate",
        evidenceId: "ev:f3-fixture:xat:demo",
      }),
    ).not.toMatch(/Cursor réelle a déjà/);
  });

  it("T-UX08-8 — notice projection does not mutate caller facts", () => {
    const facts = {
      productDurablePath: true,
      mode: "CURSOR_CLI_REAL" as const,
      kind: "rehydrate" as const,
      evidenceId: "ev:m4-bounded-ro:xat:demo",
    };
    const copy = { ...facts };
    resolvePersistenceNotice(facts);
    expect(facts).toEqual(copy);
  });

  it("T8/T9 — internal marker is stripped for display without mutating raw context", () => {
    const raw =
      "Contexte projet UAT.\n\n[[SFIA_POST_EVIDENCE_NORA_ANALYSIS]]\nAnalyse interne";
    const copy = raw;
    const displayed = projectContextForDisplay(raw);
    expect(displayed).toBe("Contexte projet UAT.");
    expect(displayed).not.toContain("[[SFIA_POST_EVIDENCE_NORA_ANALYSIS]]");
    expect(raw).toBe(copy);
    expect(textContainsInternalLpsMarker(raw)).toBe(true);
    expect(textContainsInternalLpsMarker(displayed)).toBe(false);
  });

  it("T10/T11/T12 — post-exec summary is honest and non-authoritative", () => {
    const summary = postExecutionUserSummary({
      attemptStatus: "succeeded",
      evidenceStatus: "available",
      reviewBundleStatus: "draft",
      nextGateCode: "PRE-M6",
      nextActionCode: "continue_conversation",
    });
    expect(summary.result).toBe("Exécution terminée avec succès.");
    expect(summary.evidence).toBe("Une preuve a été enregistrée.");
    expect(summary.reviewBundle).toMatch(/brouillon/i);
    expect(summary.next).toMatch(/continue_conversation/);
    expect(summary.next).toMatch(/pas une décision Morris/i);
  });

  it("T13/T14 — failed/timeout/running are not success", () => {
    expect(postExecutionUserSummary({ attemptStatus: "failed" }).result).toMatch(
      /échec/,
    );
    expect(postExecutionUserSummary({ attemptStatus: "timeout" }).result).toMatch(
      /timeout/,
    );
    expect(postExecutionUserSummary({ attemptStatus: "running" }).result).toMatch(
      /en cours/,
    );
    expect(
      postExecutionUserSummary({ attemptStatus: "failed" }).result,
    ).not.toMatch(/succès/);
  });

  it("T-UX08 rehydrate notice never claims REAL from mode alone", () => {
    expect(
      resolvePersistenceNotice({
        productDurablePath: true,
        mode: "CURSOR_CLI_REAL",
        kind: "execute",
      }),
    ).toMatch(/Exécution Cursor réelle/);
    const rehydrate = resolvePersistenceNotice({
      productDurablePath: true,
      mode: "CURSOR_CLI_REAL",
      kind: "rehydrate",
    });
    expect(rehydrate).toMatch(/Lecture durable/);
    expect(rehydrate).not.toMatch(/Exécution Cursor réelle/);
    expect(
      resolvePersistenceNotice({
        productDurablePath: true,
        mode: "FIXTURE",
        kind: "rehydrate",
      }),
    ).toMatch(/REAL execution remains disabled/);
  });
});

describe("UAT-UX-09 pre-confirmation Fake/Real truth", () => {
  it("T-UX09-1 — REAL-shaped contract without effective REAL proof stays neutral", () => {
    const chip = confirmationPathChip({
      mode: "M3_RESOLVED_BOUNDED_READ_ONLY",
      realExecution: false,
      disclosures: ["CURSOR REAL NOT EXECUTED AT PREPARE"],
    });
    expect(chip).toBe("Exécution contrôlée après confirmation");
    expect(chip).not.toMatch(/Cursor réelle/);
    expect(chip).not.toMatch(/REAL BOUNDARY PROVEN/);
  });

  it("T-UX09-2 — deterministic disclosure may label deterministic pre-confirmation", () => {
    const neutral = confirmationPathChip({
      mode: "M3_RESOLVED_BOUNDED_READ_ONLY",
      realExecution: false,
    });
    expect(neutral).toBe("Exécution contrôlée après confirmation");
    expect(neutral).not.toMatch(/Cursor réelle/);

    const deterministic = confirmationPathChip({
      mode: "M3_RESOLVED_BOUNDED_READ_ONLY",
      realExecution: false,
      disclosures: ["DETERMINISTIC TEST BOUNDARY ARMED"],
    });
    expect(deterministic).toBe("Exécution déterministe de test après confirmation");
    expect(deterministic).not.toMatch(/Cursor réelle/);
  });

  it("T-UX09-3 — raw technical profile preserved in filtering, not user-facing", () => {
    const facts = contractUserFacingFacts({
      constraints: [
        "BOUNDED READ-ONLY",
        "CURSOR CLI REAL PROFILE",
        "NO GIT WRITE",
      ],
    });
    expect(facts.constraints).toContain("Lecture seule bornée");
    expect(facts.constraints).toContain("Pas d'écriture Git");
    expect(JSON.stringify(facts.constraints)).not.toMatch(/CURSOR CLI REAL PROFILE/);
  });

  it("T-UX09-4 — user constraints remain useful after profile filtering", () => {
    const facts = contractUserFacingFacts({
      constraints: [
        "BOUNDED READ-ONLY",
        "CURSOR CLI REAL PROFILE",
        "GATE D REQUIRED",
        "NO GIT WRITE",
        "NO GITHUB WRITE",
        "NO CLIENT COMMAND",
      ],
      stopConditions: ["GATE_D_REQUIRED"],
      requiredAuthority: "MORRIS",
    });
    expect(facts.constraints).toEqual([
      "Lecture seule bornée",
      "Confirmation requise",
      "Pas d'écriture Git",
      "Pas d'écriture GitHub",
      "Pas de commande client",
    ]);
    expect(facts.stopConditions).toEqual(["GATE_D_REQUIRED"]);
    expect(facts.authority).toMatch(/Morris/);
  });

  it("T-UX09-5 — session DET regression unchanged", () => {
    expect(
      executionSemanticUserLabel({
        mode: "CURSOR_CLI_REAL",
        executionMode: "cursor_cli_real",
        adapterId: "adp:m4-cursor-cli-real",
        processRef: "proc:det:xat:demo",
        realProcessInvoked: true,
      }),
    ).toBe("Exécution déterministe de test");
  });

  it("T-UX09-6 — session REAL unit semantics regression unchanged", () => {
    expect(
      executionSemanticUserLabel({
        mode: "CURSOR_CLI_REAL",
        executionMode: "cursor_cli_real",
        adapterId: "adp:m4-cursor-cli-real",
        realProcessInvoked: true,
        realExecution: true,
        evidenceId: "ev:m4-bounded-ro:xat:demo",
      }),
    ).toBe("Exécution Cursor réelle");
  });

  it("T-UX09-7 — durable rehydrate regression unchanged", () => {
    const notice = resolvePersistenceNotice({
      productDurablePath: true,
      mode: "CURSOR_CLI_REAL",
      kind: "rehydrate",
      evidenceId: "ev:m4-bounded-ro:xat:demo",
    });
    expect(notice).toMatch(/Lecture durable/);
    expect(notice).toMatch(/résultat d'exécution borné/);
    expect(notice).not.toMatch(/Exécution Cursor réelle/);
  });

  it("T-UX09-8 — authority fields unchanged by presentation projection", () => {
    const facts = contractUserFacingFacts({
      requiredAuthority: "MORRIS",
      constraints: ["NO GIT WRITE"],
    });
    expect(facts.authority).toMatch(/Morris/);
    expect(facts.constraints).toContain("Pas d'écriture Git");
  });
});
