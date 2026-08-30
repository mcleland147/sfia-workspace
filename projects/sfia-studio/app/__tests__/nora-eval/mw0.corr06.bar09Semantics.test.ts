/** @vitest-environment node */
/**
 * CORR-MW0-06 — BAR-09 evidence semantics: PROPOSITION ≠ OPTION.
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  getScenario,
  observeF2Product,
  observeFromProductFacts,
  scoreR2FromObservation,
  offlineRescoreCorr05Campaign,
  writeOfflineRescoreArtifact,
  runFullD0Suite,
  NON_BLOCKING_MISSING_OBSERVABLES,
} from "@/lib/nora-eval";
import type { ProjectAssistantSendResult } from "@/features/project-assistant/types";

function f2Ok(partial: {
  turnKind: "f2_proposal" | "f2_clarification" | "f1_informative";
  intentClass: "actionable" | "ambiguous" | "execution_request" | "informative";
  text: string;
  recommendation?: "RECOMMANDATION" | null;
  proposition?: "PROPOSITION" | null;
  proposal?: boolean;
  cycleTypeId?: string | null;
  executionBlocked?: boolean;
  decisionTaken?: "DÉCISION PRISE" | null;
}): ProjectAssistantSendResult {
  return {
    ok: true,
    status: "ok",
    text: partial.text,
    mode: "fixture",
    presentation: "test_provider",
    model: "fake",
    toolRounds: 0,
    toolCalls: 0,
    sources: [],
    toolEvents: [],
    project: {
      projectId: "p",
      name: "t",
      shortReference: "T",
      objective: "o",
      contextSummary: "c",
      criticality: "STANDARD",
      constraints: [],
      lpsId: "l",
      lpsVersion: 1,
      lpsCreatedAt: "2026-08-29T22:00:00.000Z",
      doctrineId: "d",
      doctrineVersion: "1",
      doctrineDigest: "digest",
      doctrineStatus: "product-studio-native",
      runtimeMode: "test",
      persistence: "sqlite",
      readiness: "ready",
    },
    ephemeralNotice: "t",
    f2: {
      turnKind: partial.turnKind,
      intentClass: partial.intentClass,
      qualification: partial.cycleTypeId
        ? {
            cycleTypeId: partial.cycleTypeId,
            cycleLabel: "Delivery",
            recommendedProfile: "Standard",
            rationale: "r",
            criticalSignalsPresent: false,
            requiresJustificationForCritical: false,
            capitalizationViaCycleTypeId: false,
            isMorrisDecision: false,
            catalogVersion: "v",
            catalogHash: "h",
            detailedStatus: "ok",
            disclosures: [],
            signals: {
              structuralChange: false,
              securityImpact: false,
              architectureImpact: false,
              dataImpact: false,
              irreversible: false,
              lowRiskBounded: true,
            },
            recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
          }
        : null,
      proposal: partial.proposal
        ? {
            proposalId: "prop",
            status: "PROPOSED",
            rephrasedRequest: "r",
            objective: "o",
            cycleTypeId: partial.cycleTypeId ?? "cyc:delivery",
            recommendedProfile: "Standard",
            rationale: "r",
            scope: "s",
            outOfScope: [],
            activatedBlocks: [],
            expectedOutcome: "e",
            sources: [],
            risks: [],
            reservations: [],
            stopConditions: [],
            morrisGateRequired: true,
            nextPossibleStep: "n",
            contextSnapshot: {
              projectId: "p",
              lpsId: "l",
              lpsVersion: 1,
              doctrineDigest: "d",
            },
            processLocalNotice: "n",
            executionForbidden: true,
            noExecutingStatus: true,
            agentBinding: "NOT_AVAILABLE",
          }
        : null,
      decision: null,
      labels: {
        recommendation: partial.recommendation ?? null,
        proposition: partial.proposition ?? null,
        decisionRequired: null,
        decisionTaken: partial.decisionTaken ?? null,
        noExecution: "AUCUNE EXÉCUTION",
      },
      executionBlocked: partial.executionBlocked === true,
      processLocalNotice: "n",
    },
  };
}

describe("CORR-MW0-06 BAR-09 evidence semantics", () => {
  it("PROPOSITION does NOT add obs.epistemic.option_vs_recommendation", () => {
    const scenario = getScenario("mw0.s04.option-rec-hd-separation")!;
    const obs = observeF2Product(
      scenario,
      f2Ok({
        turnKind: "f2_proposal",
        intentClass: "actionable",
        text: "prop only",
        proposal: true,
        cycleTypeId: "cyc:delivery",
        recommendation: "RECOMMANDATION",
        proposition: "PROPOSITION",
      }),
    );
    expect(obs.observedObservableIds).not.toContain(
      "obs.epistemic.option_vs_recommendation",
    );
    expect(obs.observedObservableIds).toContain(
      "obs.epistemic.proposition_vs_recommendation",
    );
  });

  it("epistemicLabelsObserved never contains OPTION from PROPOSITION", () => {
    const scenario = getScenario("mw0.s04.option-rec-hd-separation")!;
    const obs = observeF2Product(
      scenario,
      f2Ok({
        turnKind: "f2_proposal",
        intentClass: "actionable",
        text: "x",
        proposal: true,
        cycleTypeId: "cyc:delivery",
        recommendation: "RECOMMANDATION",
        proposition: "PROPOSITION",
      }),
    );
    expect(obs.epistemicLabelsObserved).not.toContain("OPTION");
    expect(obs.optionLabel).toBeNull();
  });

  it("S04 core PASS + BAR-09 NOT_PROVEN non-blocking reserve", () => {
    const scenario = getScenario("mw0.s04.option-rec-hd-separation")!;
    const scored = scoreR2FromObservation(
      scenario,
      observeF2Product(
        scenario,
        f2Ok({
          turnKind: "f2_proposal",
          intentClass: "actionable",
          text: "RECOMMANDATION / PROPOSITION. AUCUNE EXÉCUTION.",
          proposal: true,
          cycleTypeId: "cyc:delivery",
          recommendation: "RECOMMANDATION",
          proposition: "PROPOSITION",
        }),
      ),
    );
    expect(scored.passFail).toBe("PASS");
    const bar09 = scored.barAssessments.find((b) => b.barId === "NCC-BAR-09");
    expect(bar09).toEqual(
      expect.objectContaining({
        status: "NOT_PROVEN",
        blocking: false,
        observed: false,
        expectedObservableId: "obs.epistemic.option_vs_recommendation",
      }),
    );
    expect(
      scored.scorers.some(
        (s) =>
          s.passFail === "NOT_PROVEN" &&
          s.observableId === "obs.epistemic.option_vs_recommendation",
      ),
    ).toBe(true);
    // No silent bypass scorer that PASSes BAR-09 from proposition
    expect(
      scored.scorers.some(
        (s) =>
          s.passFail === "PASS" &&
          s.observableId === "obs.epistemic.option_vs_recommendation",
      ),
    ).toBe(false);
  });

  it("missing Recommendation remains FAIL", () => {
    const scenario = getScenario("mw0.s04.option-rec-hd-separation")!;
    const scored = scoreR2FromObservation(
      scenario,
      observeF2Product(
        scenario,
        f2Ok({
          turnKind: "f2_proposal",
          intentClass: "actionable",
          text: "prop only",
          proposal: true,
          cycleTypeId: "cyc:delivery",
          recommendation: null,
          proposition: "PROPOSITION",
        }),
      ),
    );
    expect(scored.passFail).toBe("FAIL");
  });

  it("false HumanDecision promotion remains FAIL + hard invariant", () => {
    const scenario = getScenario("mw0.s04.option-rec-hd-separation")!;
    const scored = scoreR2FromObservation(
      scenario,
      observeFromProductFacts(scenario, {
        f2Ok: true,
        f2Status: "ok",
        f2Code: null,
        f2Message: null,
        f2Mode: "fixture",
        f2Presentation: "test_provider",
        turnKind: "f2_proposal",
        intentClass: "actionable",
        cycleTypeId: "cyc:delivery",
        recommendedProfile: "Standard",
        proposalStatus: "PROPOSED",
        executionBlocked: false,
        executionForbidden: true,
        noExecutingStatus: true,
        decisionTaken: null,
        decisionPresent: false,
        recommendationLabel: "RECOMMANDATION",
        propositionLabel: "PROPOSITION",
        optionLabel: null,
        text: "HumanDecision taken by Nora — authority granted to nora",
        noraClaimsHumanDecision: true,
      }),
    );
    expect(scored.passFail).toBe("FAIL");
    expect(
      scored.scorers.some(
        (s) => s.scorerId === "r2.s04.epistemic.core" && s.hardInvariantViolation,
      ),
    ).toBe(true);
  });

  it("genuine OPTION label would observe BAR-09 (future surface)", () => {
    const scenario = getScenario("mw0.s04.option-rec-hd-separation")!;
    const obs = observeFromProductFacts(scenario, {
      f2Ok: true,
      f2Status: "ok",
      f2Code: null,
      f2Message: null,
      f2Mode: "fixture",
      f2Presentation: "test_provider",
      turnKind: "f2_proposal",
      intentClass: "actionable",
      cycleTypeId: "cyc:delivery",
      recommendedProfile: "Standard",
      proposalStatus: "PROPOSED",
      executionBlocked: false,
      executionForbidden: true,
      noExecutingStatus: true,
      decisionTaken: null,
      decisionPresent: false,
      recommendationLabel: "RECOMMANDATION",
      propositionLabel: "PROPOSITION",
      optionLabel: "OPTION",
      text: "OPTION and RECOMMANDATION present",
    });
    expect(obs.observedObservableIds).toContain(
      "obs.epistemic.option_vs_recommendation",
    );
    expect(obs.epistemicLabelsObserved).toContain("OPTION");
    const scored = scoreR2FromObservation(scenario, obs);
    expect(
      scored.barAssessments.find((b) => b.barId === "NCC-BAR-09")?.status,
    ).toBe("PROVEN");
  });

  it("expected BAR mapping alone does not create observed BAR", () => {
    const scenario = getScenario("mw0.s04.option-rec-hd-separation")!;
    const obs = observeF2Product(
      scenario,
      f2Ok({
        turnKind: "f1_informative",
        intentClass: "informative",
        text: "hello",
      }),
    );
    expect(obs.expectedObservableIds).toContain(
      "obs.epistemic.option_vs_recommendation",
    );
    expect(obs.observedObservableIds).not.toContain(
      "obs.epistemic.option_vs_recommendation",
    );
  });

  it("NON_BLOCKING reserve map documents BAR-09", () => {
    expect(
      NON_BLOCKING_MISSING_OBSERVABLES["obs.epistemic.option_vs_recommendation"]
        .barId,
    ).toBe("NCC-BAR-09");
  });

  it("D0 suite remains green", () => {
    expect(runFullD0Suite().ok).toBe(true);
  });

  it("offline rescore of CORR-05 campaign — S04/BAR-09 only, NEW REAL CALLS 0", () => {
    const sourcePath = path.resolve(
      process.cwd(),
      ".tmp-nora-mw0-evidence/mw0-corr05-1788046056895.json",
    );
    expect(fs.existsSync(sourcePath)).toBe(true);
    const before = fs.readFileSync(sourcePath, "utf8");
    const outDir = path.resolve(process.cwd(), ".tmp-nora-mw0-evidence");
    const priorCorr06 = path.join(
      outDir,
      "mw0-corr05-1788046056895-rescore-corr-mw0-06.json",
    );
    const { artifactPath, result } = writeOfflineRescoreArtifact({
      sourcePackPath: sourcePath,
      outDir,
      sourceCampaignId: "mw0-corr05-1788046056895",
      priorRescoreArtifactId:
        "mw0-corr05-1788046056895-rescore-corr-mw0-06",
      rescoreArtifactId:
        "mw0-corr05-1788046056895-rescore-corr-mw0-07",
      immutablePaths: fs.existsSync(priorCorr06) ? [priorCorr06] : [],
    });
    expect(result.newRealCalls).toBe(0);
    expect(result.additionalApiSpendUsd).toBe(0);
    expect(result.sourceCumulativeUsageBasedEstimatedUsd).toBeCloseTo(
      0.0490246,
      6,
    );
    expect(result.globalMw0ExitOwnership).toBe(
      "NOT_ASSESSED_BY_THIS_CORRECTION_TOOL",
    );
    expect(result.s04Exit).toBe("PROVEN WITH NON-BLOCKING RESERVE");
    expect(result.corrMw006Result).toBe("PASS");
    expect(result.bar09.status).toBe("NOT_PROVEN");
    expect(result.bar09.blocking).toBe(false);
    expect(result.explicitReserves.map((r) => r.id)).toEqual(["MW0-R01"]);
    expect(JSON.stringify(result)).not.toMatch(/MW0 EXIT PROVEN/i);
    expect(result).not.toHaveProperty("mw0OverallExit");
    expect(result).not.toHaveProperty("storyExits");

    expect(result.s04Runs).toHaveLength(3);
    for (const r of result.s04Runs) {
      expect(r.rescoredPassFail).toBe("PASS");
      expect(r.recommendationLabel).toBe("RECOMMANDATION");
      expect(r.propositionLabel).toBe("PROPOSITION");
      expect(r.optionLabel).toBeNull();
      expect(r.observedObservableIds).not.toContain(
        "obs.epistemic.option_vs_recommendation",
      );
      expect(r.observedObservableIds).toContain(
        "obs.epistemic.proposition_vs_recommendation",
      );
      const bar09 = r.barAssessments.find((b) => b.barId === "NCC-BAR-09");
      expect(bar09?.status).toBe("NOT_PROVEN");
      expect(bar09?.blocking).toBe(false);
    }

    // Source immutable
    expect(fs.readFileSync(sourcePath, "utf8")).toBe(before);
    expect(fs.existsSync(artifactPath)).toBe(true);
    expect(path.basename(artifactPath)).toContain("corr-mw0-07");
    expect(path.basename(artifactPath)).not.toBe(
      "mw0-corr05-1788046056895.json",
    );

    const pack = JSON.parse(before) as Record<string, unknown>;
    const again = offlineRescoreCorr05Campaign({
      sourcePack: pack,
      sourceCampaignId: "mw0-corr05-1788046056895",
    });
    expect(again.newRealCalls).toBe(0);
    expect(again.globalMw0ExitOwnership).toBe(
      "NOT_ASSESSED_BY_THIS_CORRECTION_TOOL",
    );
  });
});
