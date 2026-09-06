/** @vitest-environment node */
/**
 * CORR-PROOF-01 D1 — Shared-Session Hybrid deterministic acceptance (T1–T14).
 * ZERO LIVE OpenAI. Injected ConversationProvider only.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
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
  loadCanonicalConversationForAnalysis,
  openCanonicalConversationSession,
  simulateNextCanonicalConversationUnavailableForTests,
} from "@/features/project-assistant/f2/canonicalConversationSession";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import {
  MW5_CLARIFY_MARKER,
  applyCompactionIfNeeded,
  assistantTextItem,
  containsSynthesizedHumanAct,
  loadSessionRows,
  resolveReplayItems,
  userTextItem,
} from "@/lib/nora-cognitive-runtime";

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

function hasCanonicalContext(blob: string): boolean {
  return (
    blob.includes("Contexte conversationnel canonique") &&
    !blob.includes("Contexte conversationnel canonique: (vide")
  );
}

function priorClarifyInContext(blob: string): boolean {
  return (
    hasCanonicalContext(blob) && blob.includes(MW5_CLARIFY_MARKER)
  );
}

function structuredJson(payload: Record<string, unknown>): string {
  return `[TEST/FAKE · NON LIVE] ${JSON.stringify(payload)}`;
}

/**
 * Deterministic D1 provider: natural multi-turn without magic production markers.
 * Fixture tokens (__F2_*, __MW5_*, __D1_*) remain available for isolated regressions.
 */
class D1ConversationProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  private n = 0;
  lastAnalysisBlob = "";

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    void input.schemaName;
    void input.jsonSchema;
    return this.complete(input.messages);
  }

  async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    this.n += 1;
    const blob = lastUserContent(messages);
    this.lastAnalysisBlob = blob;
    const current = demandeCourante(blob);
    const usage = {
      inputTokens: 10 * this.n,
      outputTokens: 5 * this.n,
      totalTokens: 15 * this.n,
      model: "fake-test-model",
      providerResponseId: `d1-resp-${this.n}`,
    };

    if (current.includes("__D1_UNPARSEABLE__")) {
      return {
        text: "[TEST/FAKE · NON LIVE] <<<not-a-json-intent>>>}",
        usage,
      };
    }

    if (current.includes("__F2_AMBIGUOUS__") || current.includes("__D1_MATERIAL_AMBIGUOUS__")) {
      return {
        text: structuredJson({
          intentClass: "ambiguous",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: null,
          scope: null,
          rephrasedRequest: current.slice(0, 80),
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

    // T1B — still semantically ambiguous after prior CLARIFY (no magic CONTINUE).
    if (/je ne sais pas encore/i.test(current)) {
      return {
        text: structuredJson({
          intentClass: "ambiguous",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: null,
          scope: null,
          rephrasedRequest: current.slice(0, 80),
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

    if (current.includes("__F2_EXECUTION__") || /lance\s+cursor|crée\s+une\s+pr\b/i.test(current)) {
      return {
        text: structuredJson({
          intentClass: "execution_request",
          candidateCycleTypeId: "cyc:delivery",
          signals: {
            structuralChange: true,
            securityImpact: false,
            architectureImpact: true,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: false,
          },
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

    if (current.includes("__F2_ACTIONABLE__")) {
      return {
        text: structuredJson({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:delivery",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          cognitiveWorkload: null,
          objective: "Préparer une proposition bornée",
          scope: "Sans exécution",
          rephrasedRequest: current.slice(0, 120),
          outOfScope: ["Cursor", "Git write"],
          risks: [],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition"],
          expectedOutcome: "Proposition",
          criticalJustification: null,
          requestedOperation: null,
        }),
        usage,
      };
    }

    // Continuation after Session CLARIFY → informative (progress, no cycle).
    if (priorClarifyInContext(blob) && current.trim().length > 0) {
      return {
        text: structuredJson({
          intentClass: "informative",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: "Continuer la compréhension du projet",
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

    // First / context-free natural ask → ambiguous (material clarify allowed).
    if (
      /projet|contrat|suivre|aide|aider|application/i.test(current) &&
      !hasCanonicalContext(blob)
    ) {
      return {
        text: structuredJson({
          intentClass: "ambiguous",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: null,
          scope: null,
          rephrasedRequest: current.slice(0, 120),
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

    // Default progressive conversation with existing context → informative.
    if (hasCanonicalContext(blob)) {
      return {
        text: structuredJson({
          intentClass: "informative",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: "Conversation progressive",
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

    return {
      text: structuredJson({
        intentClass: "informative",
        candidateCycleTypeId: null,
        signals: null,
        cognitiveWorkload: null,
        objective: "Analyse",
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
    const last = [...input.items]
      .reverse()
      .find((i) => i.type === "message" && i.role === "user");
    const content =
      last && last.type === "message" ? String(last.content) : "";
    return {
      kind: "message",
      text: `[TEST/FAKE · NON LIVE] Nora D1: ${content.slice(0, 200)}`,
      usage: {
        inputTokens: 8,
        outputTokens: 8,
        totalTokens: 16,
        model: "fake-test-model",
        providerResponseId: `d1-round-${this.n + 1}`,
      },
    };
  }
}

async function readSessionPairs(
  projectId: string,
  sessionDbPath: string,
): Promise<{
  users: number;
  assistants: number;
  texts: string[];
}> {
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

describe("CORR-PROOF-01 D1 shared-session hybrid", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const tempDirs: string[] = [];
  let projectId = "";
  let sessionDbPath = "";
  let provider: D1ConversationProvider;

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    provider = new D1ConversationProvider();
    setConversationProviderForTests(provider);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-d1-"));
    tempDirs.push(dir);
    sessionDbPath = path.join(dir, "nora-session.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-09-06T15:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "Suivi de contrat",
      objective: "Créer une application pour suivre des contrats",
      context: "Dogfood Product Proof CORR-01",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "CONTRAT",
      idempotencyKey: `idem:d1-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("D1 setup failed");
    projectId = created.projectId;
  });

  afterEach(() => {
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

  it("T1 — exact dogfood two-turn: first turn is safe F1 advisory (B1)", async () => {
    const t1 = await send(
      "tu peux m'aider à créer un projet de suivi de contrat ?",
    );
    expect(t1.ok).toBe(true);
    if (!t1.ok) return;
    expect(t1.f2?.turnKind).toBe("f1_informative");
    expect(t1.text).not.toContain(MW5_CLARIFY_MARKER);
    expect(containsSynthesizedHumanAct(t1.text)).toBe(false);

    const after1 = await readSessionPairs(projectId, sessionDbPath);
    expect(after1.users).toBe(1);
    expect(after1.assistants).toBe(1);

    const t2 = await send(
      "l'application doit permettre de suivre les contrats avec les clients B2B de l'entreprise MC Consulting IT",
    );
    expect(t2.ok).toBe(true);
    if (!t2.ok) return;
    expect(t2.text).not.toContain(MW5_CLARIFY_MARKER);
    expect(t2.text.length).toBeGreaterThan(20);
    expect(containsSynthesizedHumanAct(t2.text)).toBe(false);

    const after2 = await readSessionPairs(projectId, sessionDbPath);
    expect(after2.users).toBe(2);
    expect(after2.assistants).toBe(2);
    expect(after2.users).toBe(after2.assistants);
  });

  it("T1A — meaningful natural answer → contextual F1 progress (B1)", async () => {
    const t1 = await send("tu peux m'aider à créer un projet de suivi de contrat ?");
    expect(t1.ok).toBe(true);
    if (!t1.ok) return;
    expect(t1.f2?.turnKind).toBe("f1_informative");
    expect(t1.text).not.toContain(MW5_CLARIFY_MARKER);

    const t2 = await send(
      "l'application doit permettre de suivre les contrats avec les clients B2B de l'entreprise MC Consulting IT",
    );
    expect(t2.ok).toBe(true);
    if (!t2.ok) return;
    expect(t2.text).not.toContain(MW5_CLARIFY_MARKER);
    expect(provider.lastAnalysisBlob).toMatch(/Contexte conversationnel canonique/);
    expect(t2.f2?.turnKind).toBe("f1_informative");
  });

  it("T1B — still-ambiguous natural answer stays safe F1; no MW5 front door (B1)", async () => {
    const t1 = await send("tu peux m'aider à créer un projet de suivi de contrat ?");
    expect(t1.ok).toBe(true);
    if (!t1.ok) return;
    expect(t1.f2?.turnKind).toBe("f1_informative");

    const t2 = await send("je ne sais pas encore");
    expect(t2.ok).toBe(true);
    if (!t2.ok) return;
    expect(t2.text).not.toContain(MW5_CLARIFY_MARKER);
    expect(t2.mw5).toBeNull();
    expect(t2.f2?.turnKind).toBe("f1_informative");
    expect(t2.f2?.proposal ?? null).toBeNull();

    const after = await readSessionPairs(projectId, sessionDbPath);
    expect(after.users).toBe(2);
    expect(after.assistants).toBe(2);
  });

  it("T1C — unparseable analysis: fail-closed authority + safe F1 advisory (B1)", async () => {
    const t1 = await send("tu peux m'aider à créer un projet de suivi de contrat ?");
    expect(t1.ok).toBe(true);
    if (!t1.ok) return;

    const t2 = await send("suite __D1_UNPARSEABLE__");
    expect(t2.ok).toBe(true);
    if (!t2.ok) return;
    expect(t2.text).not.toContain(MW5_CLARIFY_MARKER);
    expect(t2.f2?.turnKind).toBe("f1_informative");
    expect(t2.f2?.proposal ?? null).toBeNull();
    expect(t2.mw5).toBeNull();
  });

  it("T2 — progressive five-turn project description without cycle storm", async () => {
    const turns = [
      "je veux un outil pour suivre des contrats",
      "surtout les contrats clients B2B",
      "il faudra aussi les dates d'échéance",
      "et un rappel avant renouvellement",
      "peux-tu résumer ce que tu as compris ?",
    ];
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const preVersion = before.livingState.version;

    for (const turn of turns) {
      const r = await send(turn);
      expect(r.ok).toBe(true);
      if (!r.ok) return;
      expect(r.f2?.proposal ?? null).toBeNull();
    }

    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(preVersion);

    const session = await readSessionPairs(projectId, sessionDbPath);
    expect(session.users).toBe(5);
    expect(session.assistants).toBe(5);
  });

  it("T3 — pronoun/reference continuation after B2B context", async () => {
    await send("tu peux m'aider à créer un projet de suivi de contrat ?");
    await send(
      "l'application doit permettre de suivre les contrats avec les clients B2B de l'entreprise MC Consulting IT",
    );
    const r = await send("il faudrait aussi suivre les renouvellements");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.text).not.toMatch(/Clarification structurante requise/i);
    expect(r.text.toLowerCase()).toMatch(/renouvel/);
  });

  it("T4 — genuine material ambiguity may clarify via F1; no MW5 front door (B1)", async () => {
    await send("tu peux m'aider à créer un projet de suivi de contrat ?");
    await send(
      "l'application doit permettre de suivre les contrats avec les clients B2B",
    );
    const r = await send(
      "fais le nécessaire pour tout __D1_MATERIAL_AMBIGUOUS__",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.text).not.toContain(MW5_CLARIFY_MARKER);
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(r.f2?.proposal ?? null).toBeNull();
  });

  it("T5 — acknowledgement after clarification is contextual", async () => {
    await send("tu peux m'aider à créer un projet de suivi de contrat ?");
    await send(
      "l'application doit permettre de suivre les contrats avec les clients B2B de l'entreprise MC Consulting IT",
    );
    const r = await send("oui c'est ça");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.text).not.toContain(MW5_CLARIFY_MARKER);
    expect(containsSynthesizedHumanAct(r.text)).toBe(false);
    expect(r.f2?.proposal ?? null).toBeNull();
  });

  it("T6 — authority boundary: no HD/GO/Confirmation synthesis", async () => {
    const r = await send(
      "lance Cursor et crée une PR maintenant __F2_EXECUTION__",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(containsSynthesizedHumanAct(r.text)).toBe(false);
    expect(r.text).toMatch(/AUCUNE EXÉCUTION|exécution/i);
    expect(r.f2?.executionBlocked === true || /AUCUNE EXÉCUTION/i.test(r.text)).toBe(
      true,
    );
  });

  it("T7 — informative conversation does not invent CycleInstance/proposal", async () => {
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const preVersion = before.livingState.version;

    await send("tu peux m'aider à créer un projet de suivi de contrat ?");
    const r = await send(
      "l'application doit permettre de suivre les contrats avec les clients B2B",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.proposal ?? null).toBeNull();
    expect(r.f2?.qualification ?? null).toBeNull();

    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(preVersion);
  });

  it("T8 — Memory B / session isolation still works (single SoT)", async () => {
    await send("tu peux m'aider à créer un projet de suivi de contrat ?");
    const a = await readSessionPairs(projectId, sessionDbPath);
    expect(a.users).toBe(1);
    expect(a.assistants).toBe(1);

    const other = openCanonicalConversationSession({
      projectId: "prj:other-isolation",
      sessionDbPath,
    });
    try {
      const items = await other.getItems();
      expect(items.length).toBe(0);
    } finally {
      other.close();
    }
  });

  it("T9 — MW5 anti-synthesis + D1 persistence assertions", async () => {
    const t1 = await send("aide-moi à cadrer un suivi de contrat");
    expect(t1.ok).toBe(true);
    if (!t1.ok) return;
    expect(containsSynthesizedHumanAct(t1.text)).toBe(false);

    const mid = await readSessionPairs(projectId, sessionDbPath);
    expect(mid.users).toBe(mid.assistants);

    const t2 = await send("pour les clients B2B uniquement");
    expect(t2.ok).toBe(true);
    if (!t2.ok) return;
    expect(containsSynthesizedHumanAct(t2.text)).toBe(false);

    const end = await readSessionPairs(projectId, sessionDbPath);
    expect(end.users).toBe(end.assistants);
    expect(end.users).toBe(2);
    expect(end.texts.every((t) => typeof t === "string" && t.length > 0)).toBe(
      true,
    );
  });

  it("T10 — actionable F2 proposal persists once; next turn sees it as context", async () => {
    const before = await readSessionPairs(projectId, sessionDbPath);
    const r = await send("Prépare la prochaine étape __F2_ACTIONABLE__");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.proposal).toBeTruthy();
    expect(r.text).toMatch(/Qualification SFIA|proposition/i);

    const after = await readSessionPairs(projectId, sessionDbPath);
    expect(after.users - before.users).toBe(1);
    expect(after.assistants - before.assistants).toBe(1);
    expect(after.texts.filter((t) => t === r.text).length).toBe(1);

    const cont = await send(
      "peux-tu rappeler le profil recommandé de la proposition précédente ?",
    );
    expect(cont.ok).toBe(true);
    if (!cont.ok) return;
    expect(provider.lastAnalysisBlob).toMatch(/Contexte conversationnel canonique/);
    expect(provider.lastAnalysisBlob).toContain("Qualification SFIA");
  });

  it("T11 — F2 authority/execution-blocked surface: exactly one canonical pair", async () => {
    const before = await readSessionPairs(projectId, sessionDbPath);
    const r = await send(
      "lance Cursor et crée une PR maintenant __F2_EXECUTION__",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.f2?.executionBlocked === true || /AUCUNE EXÉCUTION/i.test(r.text)).toBe(
      true,
    );

    const after = await readSessionPairs(projectId, sessionDbPath);
    expect(after.users - before.users).toBe(1);
    expect(after.assistants - before.assistants).toBe(1);
    expect(after.texts.filter((t) => t === r.text).length).toBe(1);
  });

  it("T12 — Memory B compaction replay parity for analyzeIntent", async () => {
    const runtime = getRuntimeApplicationService();
    const proj = await runtime.getProject(projectId);
    expect(proj.ok).toBe(true);
    if (!proj.ok) return;
    const rev = {
      lpsId: proj.livingState.id,
      lpsVersion: proj.livingState.version,
    };
    const earlyMarker = "EARLY_COMPACT_SEED_MC_CONSULTING_B2B_RENEWAL";
    const recentMarker = "RECENT_RAW_AFTER_COMPACT_KEEP";

    const session = openCanonicalConversationSession({
      projectId,
      sessionDbPath,
    });
    try {
      await session.addItems([
        userTextItem(`${earlyMarker} turn-0 ${"x".repeat(40)}`),
        assistantTextItem("reply-0 about early contract tracking"),
        userTextItem(`turn-1 ${"y".repeat(40)}`),
        assistantTextItem("reply-1"),
        userTextItem(`turn-2 ${"z".repeat(40)}`),
        assistantTextItem("reply-2"),
        userTextItem(recentMarker),
        assistantTextItem("reply-recent"),
      ]);
      const applied = await applyCompactionIfNeeded({
        session,
        truthCRevision: rev,
        policy: { itemThreshold: 4, keepRecentCount: 2, maxSummaryChars: 900 },
        nowIso: "2026-09-06T15:30:00.000Z",
      });
      expect(applied.applied).toBe(true);
      const loaded = await loadSessionRows(session);
      const replay = resolveReplayItems({
        loaded,
        currentTruthCRevision: rev,
      });
      expect(replay.state).toMatch(/compacted/);
      const replayText = replay.items
        .map((i) => JSON.stringify(i))
        .join("\n");
      expect(replayText).toMatch(/MW1-S02 COMPACTED MEMORY B/);
      expect(replayText).toContain(recentMarker);
    } finally {
      session.close();
    }

    const r = await send("peux-tu reprendre le fil sur le renouvellement ?");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(provider.lastAnalysisBlob).toMatch(/MW1-S02 COMPACTED MEMORY B/);
    expect(provider.lastAnalysisBlob).toContain(recentMarker);

    const analysisLoad = await loadCanonicalConversationForAnalysis({
      projectId,
      sessionDbPath,
      truthCRevision: rev,
    });
    expect(analysisLoad.availability).toBe("available");
    expect(analysisLoad.contextText).toMatch(/MW1-S02 COMPACTED MEMORY B/);
    expect(analysisLoad.contextText).toContain(recentMarker);
  });

  it("T13 — stale compaction after Truth C revision change is not supplied", async () => {
    const runtime = getRuntimeApplicationService();
    const proj = await runtime.getProject(projectId);
    expect(proj.ok).toBe(true);
    if (!proj.ok) return;
    const rev1 = {
      lpsId: proj.livingState.id,
      lpsVersion: proj.livingState.version,
    };
    const staleMarker = "STALE_COMPACT_SUMMARY_MARKER_XYZ";

    const session = openCanonicalConversationSession({
      projectId,
      sessionDbPath,
    });
    try {
      await session.addItems([
        userTextItem(`${staleMarker} ${"a".repeat(50)}`),
        assistantTextItem("early-reply"),
        userTextItem(`noise ${"b".repeat(50)}`),
        assistantTextItem("noise-reply"),
        userTextItem("recent-keep-user"),
        assistantTextItem("recent-keep-assistant"),
      ]);
      const applied = await applyCompactionIfNeeded({
        session,
        truthCRevision: rev1,
        policy: { itemThreshold: 4, keepRecentCount: 2, maxSummaryChars: 900 },
        nowIso: "2026-09-06T15:40:00.000Z",
      });
      expect(applied.applied).toBe(true);
    } finally {
      session.close();
    }

    const withCurrent = await loadCanonicalConversationForAnalysis({
      projectId,
      sessionDbPath,
      truthCRevision: rev1,
    });
    expect(withCurrent.contextText).toMatch(/MW1-S02 COMPACTED MEMORY B/);

    const oa = runtime.oa!;
    const appended =
      await oa.projectServices.appendLivingProjectStateVersion.execute({
        projectId,
        expectedVersion: rev1.lpsVersion,
        objective: "Truth C bump for T13 stale compaction",
        createdBy: {
          actorId: "actor:d1-t13",
          role: "project_owner",
          displayName: "D1 T13",
          authorityLevel: "N3",
        },
        lpsVersionId: `${rev1.lpsId}-t13-v2`,
      });
    expect(appended.ok).toBe(true);

    const after = await runtime.getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBeGreaterThan(rev1.lpsVersion);

    const r = await send("reprends après changement Truth C");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(provider.lastAnalysisBlob).not.toMatch(/MW1-S02 COMPACTED MEMORY B/);
    expect(provider.lastAnalysisBlob).toContain("recent-keep");
  });

  it("T14 — Session retrieval failure is UNAVAILABLE, not empty", async () => {
    await send("tu peux m'aider à créer un projet de suivi de contrat ?");
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const preVersion = before.livingState.version;
    const prePairs = await readSessionPairs(projectId, sessionDbPath);

    simulateNextCanonicalConversationUnavailableForTests();
    const r = await send(
      "l'application doit permettre de suivre les contrats B2B",
    );
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.code).toBe("CANONICAL_SESSION_UNAVAILABLE");
    expect(r.message).toMatch(/indisponible|AUCUNE EXÉCUTION/i);
    expect(r.message).not.toMatch(/Contexte conversationnel canonique: \(vide/);

    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(preVersion);

    const pairs = await readSessionPairs(projectId, sessionDbPath);
    expect(pairs.users).toBe(prePairs.users);
    expect(pairs.assistants).toBe(prePairs.assistants);
  });
});
