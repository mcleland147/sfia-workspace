/** @vitest-environment node */
/**
 * CORR-PROOF-04 Option D — Hybrid Context Envelope Delivery (S1–S21 / I1–I12).
 * ZERO LIVE OpenAI. Injected ConversationProvider only.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  setConversationProviderForTests,
  type ConversationProvider,
  type ProviderChatMessage,
  type ProviderCompletionResult,
  type ProviderInputItem,
  type ProviderRoundResult,
} from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import { resolveTransitionReadiness } from "@/features/project-assistant/f2/transitionReadiness";
import { buildProjectSystemPrompt } from "@/features/project-assistant/buildProjectSystemPrompt";
import * as ckcCognitiveContext from "@/features/project-assistant/f2/ckcCognitiveContext";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";

function lastUserContent(messages: ProviderChatMessage[]): string {
  for (let i = messages.length - 1; i >= 0; i -= 1) {
    if (messages[i]?.role === "user") return messages[i]!.content;
  }
  return "";
}

function demandeCourante(blob: string): string {
  const marker = "Demande courante (à évaluer):";
  const idx = blob.indexOf(marker);
  if (idx < 0) return blob;
  return blob.slice(idx + marker.length).trim();
}

function structuredJson(payload: Record<string, unknown>): string {
  return `[TEST/FAKE · NON LIVE] ${JSON.stringify(payload)}`;
}

function baseSignals(overrides?: Partial<Record<string, boolean>>) {
  return {
    structuralChange: false,
    securityImpact: false,
    architectureImpact: false,
    dataImpact: false,
    irreversible: false,
    lowRiskBounded: true,
    ...overrides,
  };
}

/**
 * Fake that attributes Studio context into the assistant answer when present.
 * Proves same-prompt / different-Studio-state differential without LIVE.
 */
class D4ConversationProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  n = 0;
  completeCalls = 0;
  structuredCalls = 0;
  roundCalls = 0;
  lastSystemPrompt = "";
  lastRoundUser = "";
  orientationMode: "framing" | "null" | "execution_blocked" = "framing";

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    void input.schemaName;
    void input.jsonSchema;
    this.structuredCalls += 1;
    return this.complete(input.messages);
  }

  async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    this.n += 1;
    this.completeCalls += 1;
    const blob = lastUserContent(messages);
    const current = demandeCourante(blob);
    const usage = {
      inputTokens: 10 * this.n,
      outputTokens: 5 * this.n,
      totalTokens: 15 * this.n,
      model: "fake-test-model",
      providerResponseId: `d4-resp-${this.n}`,
    };

    if (this.orientationMode === "execution_blocked") {
      return {
        text: structuredJson({
          intentClass: "execution_request",
          candidateCycleTypeId: null,
          signals: baseSignals({
            structuralChange: true,
            lowRiskBounded: false,
          }),
          cognitiveWorkload: null,
          objective: "Exécution externe demandée",
          scope: "Bornée — aucune exécution F2",
          rephrasedRequest: current.slice(0, 120),
          outOfScope: ["Exécution réelle"],
          risks: ["Exécution hors périmètre"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Proposition sans exécution",
          criticalJustification: "Demande d'exécution explicite",
          requestedOperation: "cursor create pr",
        }),
        usage,
      };
    }

    return {
      text: structuredJson({
        intentClass: "informative",
        candidateCycleTypeId:
          this.orientationMode === "framing" ? "cyc:framing" : null,
        signals: null,
        cognitiveWorkload: null,
        objective: "Conseil produit / méthode",
        scope: null,
        rephrasedRequest: current.slice(0, 160),
        outOfScope: [],
        risks: [],
        reservations: [],
        stopConditions: [],
        activatedBlocks: [],
        expectedOutcome: null,
        criticalJustification: null,
        requestedOperation: null,
      }),
      usage,
    };
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: unknown[];
  }): Promise<ProviderRoundResult> {
    void input.tools;
    this.roundCalls += 1;
    const system = input.items.find(
      (i) => i.type === "message" && i.role === "system",
    );
    if (system && system.type === "message") {
      this.lastSystemPrompt = String(system.content);
    }
    const last = [...input.items]
      .reverse()
      .find((i) => i.type === "message" && i.role === "user");
    this.lastRoundUser =
      last && last.type === "message" ? String(last.content) : "";

    const sys = this.lastSystemPrompt;
    const parts: string[] = [];
    parts.push(
      "Nora Studio-grounded (FAKE). Identité SFIA Studio — pas Skills Framework public.",
    );

    if (/HumanDecisions[\s\S]*État enregistrements : PRESENT/i.test(sys)) {
      if (/lifecycle=CURRENT/i.test(sys)) {
        parts.push("HumanDecision CURRENT effective — respectée, non rouverte.");
      }
      if (/lifecycle=PENDING/i.test(sys)) {
        parts.push("HumanDecision PENDING — non décidée, pas un GO courant.");
      }
      if (/lifecycle=NON_ACTIVE/i.test(sys)) {
        parts.push("HumanDecision NON_ACTIVE — historique seulement.");
      }
      if (!/lifecycle=CURRENT/i.test(sys)) {
        parts.push("Aucune HumanDecision CURRENT — présence ≠ autorité courante.");
      }
    } else if (/HumanDecisions[\s\S]*État enregistrements : NONE/i.test(sys)) {
      parts.push("Aucune HumanDecision enregistrée (NONE).");
    }

    if (/Evidence[\s\S]*État enregistrements : PRESENT/i.test(sys)) {
      if (/stance=STRONGER_SUPPORT/i.test(sys)) {
        parts.push(
          "Evidence STRONGER_SUPPORT — support plus fort, pas un Fact automatique.",
        );
      }
      if (/stance=NON_SUPPORTING|stance=WEAKENED_SUPPORT/i.test(sys)) {
        parts.push(
          "Evidence non-supporting/weakened — présence ≠ claim établie.",
        );
      }
      parts.push("Evidence présente — support épistémique seulement, pas Fact.");
    } else if (/Evidence[\s\S]*État enregistrements : NONE/i.test(sys)) {
      parts.push("Aucune Evidence projet liée (NONE).");
    }

    if (/Analysis dimensions/i.test(sys)) {
      parts.push(
        "Lentille Cadrage appliquée : intention, périmètre, contraintes, inconnues critiques.",
      );
      parts.push(
        "Prochain mouvement matériel : clarifier hors-périmètre / critères de succès avant delivery.",
      );
      parts.push(
        "Pas encore : architecture technique détaillée ni delivery — prématuré.",
      );
    }

    if (/ProjectTrajectory[\s\S]*État : PRESENT/i.test(sys)) {
      parts.push(
        "Trajectoire présente comme Recommendation/état — pas une HumanDecision.",
      );
    } else if (/ProjectTrajectory[\s\S]*État : ABSENT/i.test(sys)) {
      parts.push("Pas de trajectoire inventée (ABSENT).");
    }

    if (/Skills Framework for the Information Age/i.test(this.lastRoundUser)) {
      parts.push("Référentiel public demandé explicitement — distinction claire.");
    } else {
      parts.push(
        "Vérité Studio courante outranke toute prémisse conversationnelle obsolète.",
      );
    }

    if (/facturation|septembre|réglement/i.test(this.lastRoundUser)) {
      parts.push(
        "Urgence déclarée à confirmer ; deadline réglementaire non vérifiée comme fait externe ; impact MVP probable ; frontière outil vs conformité à clarifier (pays/échéance).",
      );
    }

    parts.push("Pas de questionnaire CKC.");

    return {
      kind: "message",
      text: parts.join(" "),
      usage: {
        inputTokens: 8,
        outputTokens: 12,
        totalTokens: 20,
        model: "fake-test-model",
        providerResponseId: `d4-round-${this.roundCalls}`,
      },
    };
  }
}

describe("CORR-PROOF-04 D hybrid context envelope S1–S21", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const tempDirs: string[] = [];
  let projectId = "";
  let sessionDbPath = "";
  let provider: D4ConversationProvider;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let reasonSpy: any;

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    reasonSpy = vi.spyOn(
      ckcCognitiveContext,
      "reasonWithResolvedCkcContext",
    );
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-d4-"));
    tempDirs.push(dir);
    sessionDbPath = path.join(dir, "session.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-09-07T06:30:00.000Z",
    });
    const created = await runtime.createProject({
      name: "Suivi de contrat",
      objective: "Suivre les contrats clients B2B",
      context: "MC Consulting IT — intention B2B, hypothèses MVP contrats",
      criticality: "STANDARD",
      constraints: ["Lecture seule", "Pas d'architecture prématurée"],
      shortReference: "SC",
      idempotencyKey: `idem:d4-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("D4 setup failed");
    projectId = created.projectId;
    provider = new D4ConversationProvider();
    setConversationProviderForTests(provider);
  });

  afterEach(() => {
    reasonSpy.mockRestore();
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const dir = tempDirs.pop();
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
    }
    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
  });

  async function send(content: string, history?: { role: "user" | "assistant"; content: string }[]) {
    return orchestrateAssistantSend({
      projectId,
      content,
      history,
      provider,
      sessionDbPath,
    });
  }

  async function seedDecisionAndEvidence() {
    const runtime = getRuntimeApplicationService();
    const oa = runtime.oa!;
    const { registerM3LocalMorrisAuthority, LOCAL_MORRIS_M3_ACTOR } =
      await import(
        "@/lib/oa/decision/infrastructure/localSingleUserAuthority"
      );
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) throw new Error("lps");
    const scope = `decision:d4-${projectId}`;
    const reg = registerM3LocalMorrisAuthority({
      authorityResolver: oa.authorityResolver,
      scope,
      issuedAt: "2026-09-07T06:30:00.000Z",
      forceEnable: true,
      evidenceId: `evd:d4-${projectId}`,
    });
    expect(reg.ok).toBe(true);
    if (!reg.ok) throw new Error("auth");
    const recorded = await oa.decisionServices.recordHumanDecision.execute({
      decisionId: `dec:d4-${projectId}`,
      projectId,
      subject: "Périmètre MVP contrats validé",
      options: [{ optionId: "opt:go", label: "GO MVP contrats" }],
      selectedOptionId: "opt:go",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope,
      authorityEvidenceId: reg.evidenceId,
      linkToLivingProjectState: true,
      expectedLpsVersion: lps.livingProjectState.version,
      decisionBasis: {
        sourceType: "proposal",
        sourceRef: "prop:d4",
        sourceDigest: "c".repeat(64),
        projectId,
        proposalContext: {
          lpsId: lps.livingProjectState.lpsVersionId,
          lpsVersion: lps.livingProjectState.version,
          doctrineDigest: lps.livingProjectState.doctrinePackageRef.digest,
        },
        executionBasis: {
          objective: "Borner MVP",
          scope: "MVP contrats",
          requestedOperation: "scope",
        },
      },
    });
    expect(recorded.ok).toBe(true);
    const ev = await oa.evidenceReviewServices.registerEvidence.execute({
      evidenceId: `ev:d4-${projectId}`,
      idempotencyKey: `idem:ev-d4-${projectId}`,
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      type: "document",
      source: "notes",
      sourceKind: "manual",
      bindings: { projectId },
      classification: "internal",
      storageMode: "metadata_only",
    });
    expect(ev.ok).toBe(true);
  }

  it("S2/S21 — same prompt / different Studio state → attributable differential", async () => {
    const prompt =
      "ok si on utilise la méthodologie SFIA, comment je dois piloter ce projet ?";
    const a = await send(prompt);
    expect(a.ok).toBe(true);
    if (!a.ok) return;
    const sysA = provider.lastSystemPrompt;
    expect(sysA).toMatch(/STUDIO COGNITIVE CONTEXT/i);
    expect(sysA).toMatch(/HumanDecisions[\s\S]*État enregistrements : NONE/i);
    expect(sysA).toMatch(/Evidence[\s\S]*État enregistrements : NONE/i);
    expect(sysA).toMatch(/Analysis dimensions|Maturity/i);
    expect(sysA).toMatch(/CONTEXT-FIRST/i);
    expect(a.text).toMatch(/Aucune HumanDecision|NONE/i);
    expect(a.text).not.toMatch(/Skills Framework for the Information Age/i);

    await seedDecisionAndEvidence();
    const b = await send(prompt);
    expect(b.ok).toBe(true);
    if (!b.ok) return;
    const sysB = provider.lastSystemPrompt;
    expect(sysB).toMatch(/HumanDecisions[\s\S]*État enregistrements : PRESENT/i);
    expect(sysB).toMatch(/lifecycle=CURRENT/);
    expect(sysB).toMatch(/Périmètre MVP contrats validé/);
    expect(sysB).toMatch(/Evidence[\s\S]*État enregistrements : PRESENT/i);
    expect(b.text).toMatch(/HumanDecision CURRENT|MVP/i);
    expect(b.text).toMatch(/Evidence présente|STRONGER_SUPPORT|support épistémique/i);
    // Core attributable delta: answers differ because Studio state differs.
    expect(a.text).not.toEqual(b.text);
    expect(sysA).not.toEqual(sysB);
  });

  it("C10 — same prompt State A/B/C attributable differential", async () => {
    const prompt =
      "ok si on utilise la méthodologie SFIA, comment je dois piloter ce projet ?";

    const a = await send(prompt);
    expect(a.ok).toBe(true);
    if (!a.ok) return;
    const textA = a.text;
    const sysA = provider.lastSystemPrompt;

    await seedDecisionAndEvidence();
    const b = await send(prompt);
    expect(b.ok).toBe(true);
    if (!b.ok) return;
    const textB = b.text;
    const sysB = provider.lastSystemPrompt;
    expect(sysB).toMatch(/lifecycle=CURRENT/);

    const oa = getRuntimeApplicationService().oa!;
    const evId = `ev:d4-${projectId}`;
    const found = await oa.evidenceReviewServices.repository.findById(evId);
    expect(found).toBeTruthy();
    if (!found) return;
    await oa.evidenceReviewServices.repository.update(
      {
        ...found,
        version: found.version + 1,
        status: "rejected",
        availability: "available",
        freshness: "stale",
      },
      found.version,
    );

    // State C HD: convert effective accepted → refused (NON_ACTIVE) via repository
    // so PENDING/NON_ACTIVE semantics apply without inventing a new domain rule.
    const decId = `dec:d4-${projectId}`;
    const prior = await oa.decisionServices.decisions.findById(decId);
    expect(prior).toBeTruthy();
    if (!prior) return;
    await oa.decisionServices.decisions.save({
      ...prior,
      status: "refused",
      version: prior.version + 1,
    });

    const c = await send(prompt);
    expect(c.ok).toBe(true);
    if (!c.ok) return;
    const textC = c.text;
    const sysC = provider.lastSystemPrompt;
    expect(sysC).toMatch(/lifecycle=NON_ACTIVE/);
    expect(sysC).not.toMatch(/lifecycle=CURRENT/);
    expect(sysC).toMatch(/stance=NON_SUPPORTING|stance=WEAKENED_SUPPORT/);
    expect(sysC).toMatch(/PRESENT ≠ Fact/);
    expect(textC).toMatch(
      /NON_ACTIVE|non-supporting|weakened|présence ≠|support épistémique/i,
    );

    expect(textA).not.toEqual(textB);
    expect(textB).not.toEqual(textC);
    expect(sysA).not.toEqual(sysB);
    expect(sysB).not.toEqual(sysC);
  });

  it("S1/S3/S5/S6/S7 — method application + next move + what not to do", async () => {
    const r = await send(
      "comment je dois piloter ce projet avec SFIA ?",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(provider.lastSystemPrompt).toMatch(/Vérité Project courante/i);
    expect(provider.lastSystemPrompt).toMatch(/outrank/i);
    expect(r.text).toMatch(/Lentille Cadrage|périmètre|inconnues/i);
    expect(r.text).toMatch(/Prochain mouvement matériel/i);
    expect(r.text).toMatch(/Pas encore|prématuré/i);
    expect(r.text).not.toMatch(/ckc:studio:/i);
    expect(r.text).not.toMatch(/\bF1\b|\bF2\b|\bMW5\b/);
  });

  it("S15 — stale conversational premise does not override Studio doctrine in prompt", async () => {
    const r = await send("comment piloter avec SFIA ?", [
      {
        role: "assistant",
        content:
          "Historique : SFIA est principalement un référentiel de compétences / rôles-responsabilités.",
      },
    ]);
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(provider.lastSystemPrompt).toMatch(/SFIA Studio/i);
    expect(provider.lastSystemPrompt).toMatch(/OUTRANKENT|outrank/i);
    expect(r.text).toMatch(/Vérité Studio courante|SFIA Studio/i);
    expect(r.text).not.toMatch(/référentiel de compétences/i);
  });

  it("S16 — regulatory claim stays epistemic / adaptive", async () => {
    const r = await send(
      "beaucoup de pertes d'infos et avec la reforme sur les outils de facturation numérique obligatoire en septembre, il devient impératif d'avoir cet outil a notre dispo",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.text).toMatch(/confirmer|non vérifiée|clarifier/i);
    expect(r.text).toMatch(/MVP|conformité|frontière/i);
  });

  it("S17/S18 — no questionnaire / no internal leak in inspectable output", async () => {
    const r = await send("aide-moi à avancer sur le cadrage");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.text).toMatch(/Pas de questionnaire CKC/i);
    expect(r.text).not.toMatch(/ckc:studio:|sha256:|DoctrinePackageId/i);
    expect(provider.lastSystemPrompt).not.toMatch(
      /1\.\s*Intention[\s\S]*2\.\s*Finalité[\s\S]*3\.\s*Bénéficiaires[\s\S]*réponds à chaque/i,
    );
  });

  it("S19/S20/I1–I7 — authority + one Agent path + no third method LLM", async () => {
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const r = await send("comment piloter ce projet ?");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(before.livingState.version);
    expect(reasonSpy).not.toHaveBeenCalled();
    // analyzeIntent complete + one Nora round (no third method LLM)
    expect(provider.completeCalls).toBeGreaterThanOrEqual(1);
    expect(provider.roundCalls).toBe(1);
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(r.f2?.qualification).toBeNull();
    expect(r.f2?.decision).toBeNull();
  });

  it("I5 — transitionReadiness unchanged semantics", () => {
    const ready = resolveTransitionReadiness({
      analysis: {
        parseOk: true,
        intentClass: "actionable",
        candidateCycleTypeId: "cyc:framing",
        signals: baseSignals(),
      } as IntentAnalysisDto,
      forceRepoInformative: false,
    });
    expect(ready.formalizationReady).toBe(true);
    const advisory = resolveTransitionReadiness({
      analysis: {
        parseOk: true,
        intentClass: "informative",
        candidateCycleTypeId: "cyc:framing",
        signals: null,
      } as IntentAnalysisDto,
      forceRepoInformative: false,
    });
    expect(advisory.formalizationReady).toBe(false);
  });

  it("I11 — context-first advisory contract in prompt", () => {
    const dto: ProjectAssistantContextDto = {
      projectId: "prj:x",
      name: "X",
      shortReference: null,
      objective: "O",
      contextSummary: "C",
      criticality: "STANDARD",
      constraints: [],
      lpsId: "lps:x",
      lpsVersion: 1,
      lpsCreatedAt: "2026-09-07T00:00:00.000Z",
      doctrineId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
      doctrineVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
      doctrineDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
      doctrineStatus: "product-studio-native",
      runtimeMode: "local",
      persistence: "product-sqlite",
      readiness: "ready",
    };
    const prompt = buildProjectSystemPrompt(dto);
    expect(prompt).toMatch(/CONTEXT-FIRST/i);
    expect(prompt).not.toMatch(
      /propose un cadrage produit, un MVP \/ périmètre, des rôles et objets métier probables/,
    );
  });

  it("S14 — trajectory ABSENT honesty on empty project", async () => {
    const r = await send("où en est la trajectoire ?");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(provider.lastSystemPrompt).toMatch(
      /ProjectTrajectory[\s\S]*État : ABSENT/i,
    );
    expect(r.text).toMatch(/ABSENT|Pas de trajectoire inventée/i);
  });
});
