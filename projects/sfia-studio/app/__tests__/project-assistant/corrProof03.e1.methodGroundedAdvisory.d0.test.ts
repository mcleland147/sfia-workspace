/** @vitest-environment node */
/**
 * CORR-PROOF-03 E1 — Method-grounded single-run advisory (S1–S18 / I1–I10).
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
import {
  countCanonicalUserAssistantPairs,
  extractCanonicalTextFromItem,
  openCanonicalConversationSession,
} from "@/features/project-assistant/f2/canonicalConversationSession";
import { resolveTransitionReadiness } from "@/features/project-assistant/f2/transitionReadiness";
import { ANALYSIS_SYSTEM } from "@/features/project-assistant/f2/intentAnalysis";
import { buildProjectSystemPrompt } from "@/features/project-assistant/buildProjectSystemPrompt";
import {
  composeAdvisoryMethodContext,
  resolveMethodOrientation,
} from "@/features/project-assistant/f2/methodOrientation";
import * as ckcCognitiveContext from "@/features/project-assistant/f2/ckcCognitiveContext";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { MW5_CLARIFY_MARKER } from "@/lib/nora-cognitive-runtime";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";

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

type OrientationMode =
  | "framing"
  | "null"
  | "functional"
  | "actionable_delivery"
  | "execution_blocked";

class E1ConversationProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  n = 0;
  completeCalls = 0;
  structuredCalls = 0;
  roundCalls = 0;
  lastAnalysisBlob = "";
  lastSystemPrompt = "";
  lastRoundUser = "";
  orientationMode: OrientationMode = "framing";

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
    this.lastAnalysisBlob = blob;
    const current = demandeCourante(blob);
    const usage = {
      inputTokens: 10 * this.n,
      outputTokens: 5 * this.n,
      totalTokens: 15 * this.n,
      model: "fake-test-model",
      providerResponseId: `e1-resp-${this.n}`,
    };

    if (this.orientationMode === "actionable_delivery") {
      return {
        text: structuredJson({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:delivery",
          signals: baseSignals({
            structuralChange: true,
            architectureImpact: true,
            lowRiskBounded: false,
          }),
          cognitiveWorkload: null,
          objective: "Qualifier un cycle Delivery",
          scope: "Bornée",
          rephrasedRequest: current.slice(0, 120),
          outOfScope: ["Exécution"],
          risks: ["impact architecture"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Proposition",
          criticalJustification: "Changement structurant",
          requestedOperation: "qualify delivery",
        }),
        usage,
      };
    }

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

    let candidate: string | null = null;
    if (this.orientationMode === "framing") candidate = "cyc:framing";
    if (this.orientationMode === "functional")
      candidate = "cyc:functional-design";
    if (this.orientationMode === "null") candidate = null;

    return {
      text: structuredJson({
        intentClass: "informative",
        candidateCycleTypeId: candidate,
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
    const content =
      last && last.type === "message" ? String(last.content) : "";
    this.lastRoundUser = content;

    let text: string;
    if (/Skills Framework for the Information Age/i.test(content)) {
      text =
        "[TEST/FAKE · NON LIVE] Le Skills Framework for the Information Age est un référentiel " +
        "public externe de compétences. Il est distinct de la méthodologie SFIA Studio applicable " +
        "à ce projet. Je peux en parler séparément si tu le souhaites.";
    } else if (/méthodologie SFIA|methodologie SFIA|piloter ce projet/i.test(content)) {
      text =
        "[TEST/FAKE · NON LIVE] Dans SFIA Studio, « SFIA » désigne la méthodologie produit Studio " +
        "(doctrine projet), pas le Skills Framework public. Pour ce projet, une orientation Cadrage " +
        "oriente utilement le pilotage : clarifier intention, périmètre et contraintes avant formalisation. " +
        "Ce n'est pas une HumanDecision.";
    } else if (/recommande/i.test(content)) {
      text =
        "[TEST/FAKE · NON LIVE] Recommandation : cadrer d'abord le MVP interne de suivi des contrats. " +
        "Ce n'est pas une HumanDecision.";
    } else if (/vague|idée|idée floue|pas sûr/i.test(content)) {
      text =
        "[TEST/FAKE · NON LIVE] Première approche possible pour clarifier ton idée. " +
        "Une question ciblée seulement si elle change le périmètre.";
    } else {
      text =
        "[TEST/FAKE · NON LIVE] Voici une proposition utile pour préparer l'application de suivi " +
        "de contrat : objets métier, MVP, hypothèses explicites. Aucune formalisation durable.";
    }

    // Never echo raw CKC / F1 / MW5 mechanics in Pilote prose.
    expect(text).not.toMatch(/ckc:studio:|contentDigest|sha256:[a-f0-9]{16}/i);
    expect(text).not.toMatch(/\bF1\b|\bF2\b|\bMW5\b/);

    return {
      kind: "message",
      text,
      usage: {
        inputTokens: 8,
        outputTokens: 12,
        totalTokens: 20,
        model: "fake-test-model",
        providerResponseId: `e1-round-${this.roundCalls}`,
      },
    };
  }
}

async function readSessionPairs(
  projectId: string,
  sessionDbPath: string,
): Promise<{ users: number; assistants: number; texts: string[] }> {
  const session = openCanonicalConversationSession({
    projectId,
    sessionDbPath,
  });
  try {
    const items = await session.getItems();
    const pairs = countCanonicalUserAssistantPairs(items);
    const texts = items
      .map(extractCanonicalTextFromItem)
      .filter((t): t is NonNullable<typeof t> => t != null)
      .map((t) => t.content);
    return { ...pairs, texts };
  } finally {
    session.close();
  }
}

function analysisStub(
  partial: Partial<IntentAnalysisDto> &
    Pick<IntentAnalysisDto, "intentClass" | "parseOk">,
): IntentAnalysisDto {
  return {
    candidateCycleTypeId: null,
    signals: null,
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: null,
    objective: null,
    scope: null,
    rephrasedRequest: null,
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    ...partial,
    executionIntent: partial.executionIntent ?? null,
  };
}

describe("CORR-PROOF-03 E1 method-grounded advisory S1–S18", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const tempDirs: string[] = [];
  let projectId = "";
  let sessionDbPath = "";
  let provider: E1ConversationProvider;
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
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-e1-"));
    tempDirs.push(dir);
    sessionDbPath = path.join(dir, "session.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-09-06T12:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "Suivi de contrat",
      objective: "Suivre les contrats clients B2B",
      context: "MC Consulting IT — contrats B2B",
      criticality: "STANDARD",
      constraints: ["Lecture seule"],
      shortReference: "SC",
      idempotencyKey: `idem:e1-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("E1 setup failed");
    projectId = created.projectId;
    provider = new E1ConversationProvider();
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

  async function send(content: string) {
    return orchestrateAssistantSend({
      projectId,
      content,
      sessionDbPath,
      provider,
    });
  }

  async function lpsVersion(): Promise<number> {
    const p = await getRuntimeApplicationService().getProject(projectId);
    expect(p.ok).toBe(true);
    if (!p.ok) throw new Error("project missing");
    return p.livingState.version;
  }

  it("S1 — initial project help: F1 + method grounding when candidate exists", async () => {
    provider.orientationMode = "framing";
    const pre = await lpsVersion();
    const r = await send(
      "peux-tu m'aider a préparer la création de mon application de suivi de contrat ?",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(r.text).not.toContain(MW5_CLARIFY_MARKER);
    expect(r.mw5).toBeNull();
    expect(r.f2?.qualification ?? null).toBeNull();
    expect(r.f2?.proposal ?? null).toBeNull();
    expect(provider.lastSystemPrompt).toMatch(/IDENTITÉ SFIA STUDIO/i);
    expect(provider.lastSystemPrompt).toMatch(
      /RESOLVED_FROM_INTENT_CANDIDATE|Orientation méthodologique/i,
    );
    expect(provider.lastSystemPrompt).toMatch(/Cadrage|cyc:framing/i);
    expect(await lpsVersion()).toBe(pre);
    expect(reasonSpy).not.toHaveBeenCalled();
  });

  it("S2 — explicit Studio SFIA method → Studio identity, no public SF default", async () => {
    provider.orientationMode = "framing";
    const r = await send(
      "si on utilise la méthodologie SFIA, comment je dois piloter ce projet ?",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(r.text.toLowerCase()).toMatch(/studio|méthodologie|methodologie|cadrage/);
    expect(r.text.toLowerCase()).not.toMatch(
      /principalement un référentiel de compétences/,
    );
    expect(provider.lastSystemPrompt).toMatch(
      /PAS le Skills Framework for the Information Age/i,
    );
    expect(r.f2?.qualification ?? null).toBeNull();
  });

  it("S3 — explicit public Skills Framework → distinguish from Studio", async () => {
    provider.orientationMode = "null";
    const r = await send(
      "Que dit le Skills Framework for the Information Age sur les compétences ?",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(r.text).toMatch(/Skills Framework for the Information Age/i);
    expect(r.text.toLowerCase()).toMatch(/distinct|studio/);
  });

  it("S4 — vague but intelligible → safe advisory, no forced cycle, no MW5", async () => {
    provider.orientationMode = "null";
    const r = await send("j'ai une idée vague pour un outil, pas sûr du périmètre");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(r.text).not.toContain(MW5_CLARIFY_MARKER);
    expect(provider.lastSystemPrompt).toMatch(/UNRESOLVED/);
    expect(provider.lastSystemPrompt).not.toMatch(
      /Lentille cognitive CKC \(lecture seule/,
    );
  });

  it("S5 — Cadrage-style orientation → non-mutating lens, zero CycleInstance", async () => {
    provider.orientationMode = "framing";
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const r = await send(
      "aide-moi à cadrer l'intention, le périmètre et les contraintes de ce produit",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(provider.lastSystemPrompt).toMatch(/Cadrage|RESOLVED_FROM_INTENT/i);
    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(before.livingState.version);
    expect(r.f2?.qualification ?? null).toBeNull();
    expect(r.f2?.proposal ?? null).toBeNull();
  });

  it("S6 — multiple plausible / null orientation → no fabricated cycle", async () => {
    provider.orientationMode = "null";
    const r = await send(
      "on pourrait faire du cadrage ou de la delivery, je ne sais pas encore",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(provider.lastSystemPrompt).toMatch(/UNRESOLVED/);
    expect(provider.lastSystemPrompt).not.toMatch(
      /RESOLVED_FROM_INTENT_CANDIDATE/,
    );
  });

  it("S7 — existing project state: no fabricated/restart cycle (trajectory DEFERRED)", async () => {
    provider.orientationMode = "framing";
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const r = await send("continue à m'aider sur ce projet existant");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.turnKind).toBe("f1_informative");
    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(before.livingState.version);
    // Negative: E1 does not create a second/active cycle from advisory.
    expect(r.f2?.qualification ?? null).toBeNull();
    // Positive trajectory-aware tailoring NOT PROVEN / DEFERRED.
  });

  it("S8 — detailed CKC available → lens composed into F1 system context", async () => {
    provider.orientationMode = "framing";
    const r = await send("comment avancer méthodologiquement sur le cadrage ?");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(provider.lastSystemPrompt).toMatch(/Lentille cognitive CKC|Guidance:/i);
    expect(r.text).not.toMatch(/ckc:studio:/i);
    expect(r.text).not.toMatch(/contentDigest/i);
  });

  it("S9 — CKC unavailable → governed degradation, no public SFIA fallback", async () => {
    const ctx = composeAdvisoryMethodContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: {
        projectId: "prj:x",
        name: "X",
        shortReference: null,
        objective: "o",
        contextSummary: "c",
        criticality: "STANDARD",
        constraints: [],
        lpsId: "lps:x",
        lpsVersion: 1,
        lpsCreatedAt: "2026-09-06T00:00:00.000Z",
        doctrineId: "pkg:does-not-exist",
        doctrineVersion: "9.9.9",
        doctrineStatus: "product-studio-native",
        doctrineDigest: "sha256:deadbeef",
        runtimeMode: "test",
        persistence: "sqlite",
        readiness: "ready",
      },
      registryRoot: path.join(os.tmpdir(), "no-such-doctrine-registry"),
    });
    expect(ctx.sourceLimit).toBe("ckc_unavailable");
    const prompt = buildProjectSystemPrompt(
      {
        projectId: "prj:x",
        name: "X",
        shortReference: null,
        objective: "o",
        contextSummary: "c",
        criticality: "STANDARD",
        constraints: [],
        lpsId: "lps:x",
        lpsVersion: 1,
        lpsCreatedAt: "2026-09-06T00:00:00.000Z",
        doctrineId: "pkg:does-not-exist",
        doctrineVersion: "9.9.9",
        doctrineStatus: "product-studio-native",
        doctrineDigest: "sha256:deadbeef",
        runtimeMode: "test",
        persistence: "sqlite",
        readiness: "ready",
      },
      { methodContext: ctx },
    );
    expect(prompt).toMatch(/ckc_unavailable|Lentille CKC détaillée indisponible/i);
    expect(prompt).toMatch(/pas de bascule vers le Skills Framework public/i);
  });

  it("S10 — doctrine unavailable → no false source-backed Studio-method claim", async () => {
    const project: ProjectAssistantContextDto = {
      projectId: "prj:x",
      name: "X",
      shortReference: null,
      objective: "o",
      contextSummary: "c",
      criticality: "STANDARD",
      constraints: [],
      lpsId: "lps:x",
      lpsVersion: 1,
      lpsCreatedAt: "2026-09-06T00:00:00.000Z",
      doctrineId: "",
      doctrineVersion: "",
      doctrineStatus: "product-studio-native",
      doctrineDigest: "",
      runtimeMode: "test",
      persistence: "sqlite",
      readiness: "ready",
    };
    const ctx = composeAdvisoryMethodContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project,
      registryRoot: path.join(os.tmpdir(), "empty"),
    });
    expect(ctx.sourceLimit).toBe("doctrine_unavailable");
    const prompt = buildProjectSystemPrompt(project, { methodContext: ctx });
    expect(prompt).toMatch(/DoctrinePackage produit non résolu/i);
  });

  it("S11 — Recommendation allowed, not HumanDecision", async () => {
    provider.orientationMode = "framing";
    const r = await send("que recommande-tu comme prochaine étape produit ?");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.text.toLowerCase()).toMatch(/recommandation/);
    expect(r.text).toMatch(/pas une HumanDecision|HumanDecision/i);
    expect(r.f2?.decision ?? null).toBeNull();
  });

  it("S12 — advisory path never synthesizes HumanDecision", async () => {
    provider.orientationMode = "framing";
    const r = await send("décide pour moi le périmètre MVP");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(r.f2?.decision ?? null).toBeNull();
  });

  it("S13 — execution request keeps B1 blocked advisory; method never authorizes", async () => {
    provider.orientationMode = "execution_blocked";
    const pre = await lpsVersion();
    const r = await send("__B1_EXEC_MISSING_CYCLE__ exécute ce contrat Cursor");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(r.f2?.executionBlocked).toBe(true);
    expect(await lpsVersion()).toBe(pre);
    expect(reasonSpy).not.toHaveBeenCalled();
  });

  it("S14 — ProductSqliteSession remains sole conversational SoT", async () => {
    provider.orientationMode = "framing";
    await send("premier message de cadrage produit");
    await send("deuxième message de suivi");
    const session = await readSessionPairs(projectId, sessionDbPath);
    expect(session.users).toBe(session.assistants);
    expect(session.users).toBe(2);
  });

  it("S15 — no magic wording required for method grounding", async () => {
    provider.orientationMode = "framing";
    const r = await send(
      "peux-tu m'aider a préparer la création de mon application de suivi de contrat ?",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(provider.lastSystemPrompt).toMatch(/RESOLVED_FROM_INTENT_CANDIDATE/);
    expect(r.text).not.toMatch(/__E1_|__TEST__/);
  });

  it("S16 — no questionnaire regression; CKC lens internal", async () => {
    provider.orientationMode = "framing";
    const r = await send("aide-moi à avancer sur ce produit");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.text).not.toContain(MW5_CLARIFY_MARKER);
    expect(provider.lastSystemPrompt).toMatch(/Pas d'intake séquentiel|intake séquentiel/i);
    expect(r.text).not.toMatch(/ckc:studio:|contentDigest/i);
  });

  it("S17 — no fixed waterfall / always Cycle 1 (trajectory DEFERRED)", async () => {
    const { resolveProductDoctrineRegistryRoot } = await import(
      "@/lib/vertical-slice-runtime/paths"
    );
    const project: ProjectAssistantContextDto = {
      projectId: "prj:x",
      name: "X",
      shortReference: null,
      objective: "o",
      contextSummary: "c",
      criticality: "STANDARD",
      constraints: [],
      lpsId: "lps:x",
      lpsVersion: 1,
      lpsCreatedAt: "2026-09-06T00:00:00.000Z",
      doctrineId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
      doctrineVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
      doctrineStatus: "product-studio-native",
      doctrineDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
      runtimeMode: "test",
      persistence: "sqlite",
      readiness: "ready",
    };
    const real = composeAdvisoryMethodContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:delivery",
      }),
      project,
      registryRoot: resolveProductDoctrineRegistryRoot(),
    });
    const p2 = buildProjectSystemPrompt(project, { methodContext: real });
    expect(p2).toMatch(/Ne force pas un waterfall|toujours commencer au Cycle 1/i);
    // Delivery orientation allowed without forcing Cycle 1.
    expect(real.orientation.candidateCycleTypeId).toBe("cyc:delivery");
  });

  it("S18 — Truth C non-promotion on ordinary advisory", async () => {
    provider.orientationMode = "framing";
    const pre = await lpsVersion();
    const r = await send("ancre-toi sur la méthodologie pour conseiller");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(await lpsVersion()).toBe(pre);
    expect(r.f2?.qualification ?? null).toBeNull();
    expect(r.f2?.decision ?? null).toBeNull();
    expect(r.f2?.proposal ?? null).toBeNull();
  });

  it("I1–I4 — one Agent path, no reasonWithResolvedCkcContext, no third method call", async () => {
    provider.orientationMode = "framing";
    provider.structuredCalls = 0;
    provider.roundCalls = 0;
    provider.completeCalls = 0;
    const r = await send("aide méthodologique pour préparer mon application");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    // analyzeIntent uses completeStructured; F1 uses completeRound (Agents adapter).
    // No additional method-reasoning provider call.
    expect(provider.structuredCalls).toBe(1);
    expect(provider.roundCalls).toBeGreaterThanOrEqual(1);
    expect(reasonSpy).not.toHaveBeenCalled();
  });

  it("I5 — transitionReadiness unchanged for informative + candidate", () => {
    const t = resolveTransitionReadiness({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
    });
    expect(t.formalizationReady).toBe(false);
    expect(t.reason).toBe("not_governed_intent");
  });

  it("I7 — keyword SFIA alone does not grant formalization", () => {
    const t = resolveTransitionReadiness({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
        rephrasedRequest: "méthodologie SFIA Cadrage",
      }),
    });
    expect(t.formalizationReady).toBe(false);
  });

  it("I8 — Studio identity + source hierarchy present in prompt", () => {
    const prompt = buildProjectSystemPrompt({
      projectId: "prj:x",
      name: "X",
      shortReference: null,
      objective: "o",
      contextSummary: "c",
      criticality: "STANDARD",
      constraints: [],
      lpsId: "lps:x",
      lpsVersion: 1,
      lpsCreatedAt: "2026-09-06T00:00:00.000Z",
      doctrineId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
      doctrineVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
      doctrineStatus: "product-studio-native",
      doctrineDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
      runtimeMode: "test",
      persistence: "sqlite",
      readiness: "ready",
    });
    expect(prompt).toMatch(/IDENTITÉ SFIA STUDIO/i);
    expect(prompt).toMatch(/DoctrinePackage \/ CKC produit résolu/i);
    expect(prompt).toMatch(/PAS le Skills Framework/i);
  });

  it("analyzeIntent instructions allow informative candidate orientation", () => {
    expect(ANALYSIS_SYSTEM).toMatch(/ORIENTATION MÉTHODE \(CORR-PROOF-03 E1/i);
    expect(ANALYSIS_SYSTEM).toMatch(/cyc:framing/);
    expect(ANALYSIS_SYSTEM).toMatch(/N'EST PAS une porte de formalisation/i);
  });

  it("I6 unit — resolveMethodOrientation pure", () => {
    const o = resolveMethodOrientation(
      analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
    );
    expect(o.state).toBe("RESOLVED_FROM_INTENT_CANDIDATE");
    expect(Object.isFrozen(o)).toBe(true);
  });
});
