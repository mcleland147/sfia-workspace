/** @vitest-environment node */
/**
 * QUAL-TO-GOVERNED-CYCLE — deterministic presentation / signal / prompt contracts.
 * ZERO NEW REAL.
 */
import { describe, expect, it } from "vitest";
import { buildProjectSystemPrompt } from "@/features/project-assistant/buildProjectSystemPrompt";
import { ANALYSIS_SYSTEM } from "@/features/project-assistant/f2/intentAnalysis";
import {
  classifyLifecycleFormalizationRequest,
  reconcileQualificationSignals,
} from "@/features/project-assistant/f2/qualificationSignalCoherence";
import {
  formatNoraAssistantDisplayText,
  profileRationalePiloteLabel,
} from "@/features/project-assistant/presentationLabels";
import {
  formatMw5MachineText,
  formatMw5PiloteText,
  type Mw5PolicyResult,
} from "@/lib/nora-cognitive-runtime/criticalChallengeClarification";

const baseProject = {
  projectId: "prj:test",
  name: "Demo",
  shortReference: null as string | null,
  objective: "Suivre des tâches personnelles",
  contextSummary: "Intention minimale",
  criticality: "standard",
  constraints: [] as string[],
  lpsId: "lps:1",
  lpsVersion: 1,
  lpsCreatedAt: "2026-01-01T00:00:00.000Z",
  doctrineId: "doc:1",
  doctrineVersion: "1",
  doctrineStatus: "active",
  doctrineDigest: "sha256:abc",
  runtimeMode: "product",
  persistence: "sqlite",
  readiness: "ready",
};

function mw5ChallengeResult(): Mw5PolicyResult {
  return {
    disposition: "CHALLENGE",
    challenges: [
      "Quelle prémisse structurante n'est pas encore établie pour cette recommandation ?",
    ],
    structuralChallengeCount: 1,
    questionnaireSuppressed: false,
    clarificationAllowed: false,
    recommendationAllowed: false,
    challengeGateApplicable: true,
    challengeSatisfied: false,
    challengeEvidenceBeforeRecommendation: false,
    bypassAttempted: false,
    bypassBlocked: false,
    synthesizedHumanDecision: false,
    synthesizedGo: false,
    synthesizedConfirmation: false,
    reasonCodes: ["critical_profile_challenge"],
    disclosure: "High-Assurance challenge armed (internal).",
  };
}

describe("qual-to-governed-cycle — prompt + presentation contracts", () => {
  it("F1 prompt authorizes structured LR without Cycle/HD authority", () => {
    const prompt = buildProjectSystemPrompt(baseProject);
    expect(prompt).toMatch(/lifecycleRecommendation/);
    expect(prompt).toMatch(/NEXT_CYCLE/);
    expect(prompt).toMatch(/Pas de règle « après N messages »/);
    expect(prompt).toMatch(/jamais forcé cyc:framing/);
    expect(prompt).toMatch(/TEST DE PERTINENCE DE ROUTAGE/);
    expect(prompt).toMatch(/TEST DE PROPRIÉTÉ DE CYCLE/);
    expect(prompt).toMatch(/preCycleRoutingAssessment/);
    expect(prompt).toMatch(/remainingUnknownsAreCycleOwned/);
    expect(prompt).not.toMatch(
      /aucune autorité de décision, d'exécution Cursor, d'écriture Git\/GitHub, ni de qualification de cycle SFIA/,
    );
    expect(prompt).toMatch(/ne peux pas l'enregistrer dans Studio/);
  });

  it("intent analysis treats lifecycle formalization as informative effect", () => {
    expect(ANALYSIS_SYSTEM).toMatch(/Formalise maintenant dans Studio/);
    expect(ANALYSIS_SYSTEM).toMatch(
      /PAS le simple fait qu'une[\s\S]*mutation de bookkeeping lifecycle/,
    );
    expect(ANALYSIS_SYSTEM).toMatch(
      /Ne PAS classer actionable uniquement parce que le Pilote demande d'enregistrer/,
    );
  });

  it("BAR-05 — false structural on lifecycle formalization is dampened", () => {
    const content =
      "Formalise dans Studio la recommandation de prochaine étape afin que je puisse la décider.";
    expect(
      classifyLifecycleFormalizationRequest(content).lifecycleFormalizationEnvelope,
    ).toBe(true);
    const r = reconcileQualificationSignals({
      userContent: content,
      signals: {
        structuralChange: true,
        securityImpact: false,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: false,
      },
    });
    expect(r.reason).toBe(
      "false_structural_lifecycle_formalization_neutralized",
    );
    expect(r.signals.structuralChange).toBe(false);
    expect(r.signals.securityImpact).toBe(false);
    expect(r.signals.lowRiskBounded).toBe(false);
  });

  it("BAR-06 — genuine Critical signals are preserved on formalization phrasing", () => {
    const content =
      "Formalise la recommandation de prochaine étape — migration sécurité irréversible des données.";
    const r = reconcileQualificationSignals({
      userContent: content,
      signals: {
        structuralChange: true,
        securityImpact: true,
        architectureImpact: false,
        dataImpact: true,
        irreversible: true,
        lowRiskBounded: false,
      },
    });
    expect(r.reason).toBe("genuine_critical_preserved");
    expect(r.signals.securityImpact).toBe(true);
    expect(r.signals.irreversible).toBe(true);
    expect(r.signals.structuralChange).toBe(true);
  });

  describe("BAR-FC — lifecycle formalization dampener fail-closed", () => {
    const structuralOnly = {
      structuralChange: true,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: false,
    } as const;

    it("BAR-FC-01 — pure closed-world formalization dampens false structuralChange", () => {
      const content =
        "Formalise dans Studio la recommandation de prochaine étape afin que je puisse la décider.";
      const cl = classifyLifecycleFormalizationRequest(content);
      expect(cl.lifecycleFormalizationEnvelope).toBe(true);
      expect(cl.residual).toBe("");
      const r = reconcileQualificationSignals({
        userContent: content,
        signals: { ...structuralOnly },
      });
      expect(r.reason).toBe(
        "false_structural_lifecycle_formalization_neutralized",
      );
      expect(r.signals.structuralChange).toBe(false);
      expect(r.signals.securityImpact).toBe(false);
      expect(r.signals.architectureImpact).toBe(false);
      expect(r.signals.dataImpact).toBe(false);
      expect(r.signals.irreversible).toBe(false);
      expect(r.signals.lowRiskBounded).toBe(false);
    });

    it("BAR-FC-02 — structuralChange-only + substantive residual is preserved", () => {
      const content =
        "Formalise cette recommandation pour que je puisse la décider, et restructure complètement le périmètre produit et le workflow de gouvernance.";
      const cl = classifyLifecycleFormalizationRequest(content);
      expect(cl.lifecycleFormalizationEnvelope).toBe(false);
      expect(cl.residual.length).toBeGreaterThan(0);
      const r = reconcileQualificationSignals({
        userContent: content,
        signals: { ...structuralOnly },
      });
      expect(r.reason).toBe("lifecycle_formalization_substantive_residual");
      expect(r.signals).toEqual(structuralOnly);
      expect(r.signals.structuralChange).toBe(true);
    });

    it("BAR-FC-03 — unknown substantive residual never dampens provider signals", () => {
      const content =
        "Formalise la recommandation de prochaine étape — Zorblax multi-region webhook pipeline.";
      const r = reconcileQualificationSignals({
        userContent: content,
        signals: { ...structuralOnly },
      });
      expect(r.reason).toBe("lifecycle_formalization_substantive_residual");
      expect(r.signals.structuralChange).toBe(true);
      expect(r.residual.length).toBeGreaterThan(0);
    });

    it.each([
      ["BAR-FC-04 security", "securityImpact" as const],
      ["BAR-FC-05 architecture", "architectureImpact" as const],
      ["BAR-FC-06 data", "dataImpact" as const],
      ["BAR-FC-07 irreversible", "irreversible" as const],
    ])(
      "%s preserved with formalization phrasing",
      (_name, key) => {
        const content =
          "Formalise la recommandation pour que je puisse la décider, et ajoute aussi ce chantier critique.";
        const signals = {
          structuralChange: true,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: false,
          [key]: true,
        };
        const r = reconcileQualificationSignals({
          userContent: content,
          signals,
        });
        expect(r.reason).toBe("genuine_critical_preserved");
        expect(r.signals[key]).toBe(true);
        expect(r.signals).toEqual(signals);
      },
    );

    it("BAR-FC-08 — lowRiskBounded is never invented by dampener", () => {
      const content =
        "Formalise dans Studio la recommandation de prochaine étape afin que je puisse la décider.";
      const falseCase = reconcileQualificationSignals({
        userContent: content,
        signals: { ...structuralOnly, lowRiskBounded: false },
      });
      expect(falseCase.signals.lowRiskBounded).toBe(false);
      const trueCase = reconcileQualificationSignals({
        userContent: content,
        signals: { ...structuralOnly, lowRiskBounded: true },
      });
      expect(trueCase.signals.lowRiskBounded).toBe(true);
      expect(trueCase.signals.structuralChange).toBe(false);
    });

    it("BAR-FC-09 — non-lifecycle request keeps prior (non-dampen) behavior", () => {
      const content =
        "Explique les tensions entre délai et auditabilité pour ce projet.";
      const r = reconcileQualificationSignals({
        userContent: content,
        signals: { ...structuralOnly },
      });
      expect(r.signals).toEqual(structuralOnly);
      expect(r.reason).not.toBe(
        "false_structural_lifecycle_formalization_neutralized",
      );
    });

    it("BAR-FC-10 — original false-Critical formalization regression remains closed", () => {
      const content =
        "Formalise dans Studio la recommandation de prochaine étape afin que je puisse la décider.";
      const r = reconcileQualificationSignals({
        userContent: content,
        signals: { ...structuralOnly },
      });
      expect(r.reason).toBe(
        "false_structural_lifecycle_formalization_neutralized",
      );
      expect(r.signals.structuralChange).toBe(false);
    });

    it("BAR-FC-11 — substantive content inside former match span stays residual", () => {
      const content =
        "Formalise et restructure complètement le périmètre produit dans cette recommandation";
      const cl = classifyLifecycleFormalizationRequest(content);
      expect(cl.lifecycleFormalizationEnvelope).toBe(false);
      expect(cl.residual.length).toBeGreaterThan(0);
      // Prove unknown non-whitelist text was not swallowed — no semantic understanding required.
      expect(cl.residual).toMatch(/restructure|p[eé]rim[eè]tre|produit/i);
      const r = reconcileQualificationSignals({
        userContent: content,
        signals: { ...structuralOnly },
      });
      expect(r.reason).toBe("lifecycle_formalization_substantive_residual");
      expect(r.reason).not.toBe(
        "false_structural_lifecycle_formalization_neutralized",
      );
      expect(r.signals.structuralChange).toBe(true);
      expect(r.signals).toEqual(structuralOnly);
      expect(r.residual).toMatch(/restructure|p[eé]rim[eè]tre|produit/i);
    });

    it("BAR-FC-12 — pure permitted connective remains closed-world", () => {
      const content =
        "Formalise dans Studio cette recommandation de prochaine étape afin que je puisse la décider.";
      const cl = classifyLifecycleFormalizationRequest(content);
      expect(cl.lifecycleFormalizationEnvelope).toBe(true);
      expect(cl.residual).toBe("");
      const r = reconcileQualificationSignals({
        userContent: content,
        signals: { ...structuralOnly },
      });
      expect(r.reason).toBe(
        "false_structural_lifecycle_formalization_neutralized",
      );
      expect(r.signals.structuralChange).toBe(false);
      expect(r.signals.lowRiskBounded).toBe(false);
    });

    it("BAR-FC-13 — unknown vocabulary between verb and object stays residual", () => {
      const content =
        "Formalise Zorblax multi-region webhook pipeline dans cette recommandation";
      const cl = classifyLifecycleFormalizationRequest(content);
      expect(cl.lifecycleFormalizationEnvelope).toBe(false);
      expect(cl.residual.length).toBeGreaterThan(0);
      expect(cl.residual).toMatch(/Zorblax|webhook|pipeline/i);
      const r = reconcileQualificationSignals({
        userContent: content,
        signals: { ...structuralOnly },
      });
      expect(r.signals.structuralChange).toBe(true);
      expect(r.signals).toEqual(structuralOnly);
      expect(r.reason).not.toBe(
        "false_structural_lifecycle_formalization_neutralized",
      );
    });
  });

  it("BAR-07 — Pilote MW5 text hides machine markers; machine text retains them", () => {
    const d = mw5ChallengeResult();
    const pilote = formatMw5PiloteText(d);
    const machine = formatMw5MachineText(d);
    expect(pilote).not.toMatch(/\[MW5/);
    expect(pilote).not.toMatch(/\bMW5\b/);
    expect(pilote).not.toMatch(/\bTruth C\b/i);
    expect(pilote).not.toMatch(/\bcount=\d+/);
    expect(pilote).toMatch(/périmètre|impact/i);
    expect(machine).toMatch(/\[MW5 CHALLENGE/);
    expect(machine).toMatch(/count=/);
  });

  it("BAR-11 — conversation display unescapes presentation artifacts", () => {
    const raw =
      "Ligne 1\\nLigne 2\\n\\*\\*Important\\*\\* [MW5 CHALLENGE] count=3 Truth C";
    const shown = formatNoraAssistantDisplayText(raw);
    expect(shown).toContain("Ligne 1\nLigne 2");
    expect(shown).not.toContain("\\n");
    expect(shown).not.toContain("\\*\\*");
    expect(shown).not.toMatch(/\[MW5/);
    expect(shown).not.toMatch(/\bcount=\d+/);
    expect(shown).toContain("Important");
  });

  it("BAR-12 — Pourquoi maps critical_signal_present to business French", () => {
    const label = profileRationalePiloteLabel(
      "critical_signal_present Guidance cycle applicable.",
    );
    expect(label).not.toMatch(/critical_signal_present/);
    expect(label).toMatch(/impact structurant|sécurité|architecture/i);
  });

  it("BAR-11 — legitimate literal asterisks in code-like text still readable", () => {
    const shown = formatNoraAssistantDisplayText("Glob pattern: file_*.ts");
    expect(shown).toContain("file_*.ts");
  });
});
