/** @vitest-environment node */
/**
 * P6-HQA-NEWPROJECT-01 — deterministic cognitive onboarding (Fake provider).
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import {
  buildProductContextHandoff,
  emptyDraft,
  mergeCognitiveIntoDraft,
  ONBOARDING_HANDOFF_MARKER,
  parseOnboardingCognitivePayload,
  provisionalNameFromIntention,
  studioCanCreate,
  type OnboardingCognitivePayload,
} from "@/features/pre-m6-product-ui/newProjectOnboardingContract";
import { runNewProjectOnboardingTurn } from "@/features/pre-m6-product-ui/runNewProjectOnboardingTurn";

function payload(
  partial: Partial<OnboardingCognitivePayload> & { replyText: string },
): OnboardingCognitivePayload {
  return {
    intentionKnown: null,
    objectiveProposal: null,
    contextKnown: null,
    nameProposal: null,
    nameProvisional: true,
    firstOrientationProposal: null,
    unknowns: [],
    sufficientForCreateProposal: false,
    refuseCreateDetected: false,
    acceptCreateDetected: false,
    intentionKind: "project_direction",
    clarificationQuestion: null,
    suggestions: [],
    ...partial,
  };
}

describe("P6-HQA-NEWPROJECT-01 contract merge / studio gate", () => {
  it("1 — clear intention can become creatable with provisional name", () => {
    const merged = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "ok",
        intentionKnown: "Moderniser le reporting Q3",
        objectiveProposal: "Moderniser le reporting Q3",
        nameProposal: "Reporting Q3",
        nameProvisional: true,
        sufficientForCreateProposal: true,
      }),
      "Moderniser le reporting Q3",
    );
    expect(studioCanCreate(merged)).toBe(true);
    expect(merged.name).toBe("Reporting Q3");
  });

  it("2 — Nora name proposal is not mandatory from Pilot", () => {
    const merged = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "Je propose un nom",
        intentionKnown: "Lancer un atelier design",
        nameProposal: "Atelier design",
        sufficientForCreateProposal: true,
      }),
      "Lancer un atelier design",
    );
    expect(merged.name).toBe("Atelier design");
    expect(studioCanCreate(merged)).toBe(true);
  });

  it("3 — Studio stamps provisional name when Nora omits one", () => {
    const merged = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "ok",
        intentionKnown: "Explorer une idée de produit",
        nameProposal: null,
        sufficientForCreateProposal: true,
      }),
      "Explorer une idée de produit",
    );
    expect(merged.nameProvisional).toBe(true);
    expect(merged.name.length).toBeGreaterThan(0);
    expect(merged.name).toBe(
      provisionalNameFromIntention("Explorer une idée de produit"),
    );
  });

  it("4 — unknown context remains empty honestly", () => {
    const merged = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "ok",
        intentionKnown: "Idée exploratoire",
        contextKnown: null,
        unknowns: ["contexte de départ"],
        sufficientForCreateProposal: true,
        nameProposal: "Idée exploratoire",
      }),
      "Idée exploratoire",
    );
    expect(merged.context).toBe("");
    expect(merged.unknowns).toContain("contexte de départ");
  });

  it("5 — exploratory objective allowed", () => {
    const merged = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "exploratoire",
        intentionKnown: "Je ne sais pas encore exactement",
        objectiveProposal: "Explorer le sujet sans cadrage complet",
        nameProposal: "Exploration",
        sufficientForCreateProposal: true,
      }),
      "Je ne sais pas encore exactement",
    );
    expect(studioCanCreate(merged)).toBe(true);
  });

  it("11 — explicit refuse blocks create", () => {
    const merged = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "pas maintenant",
        refuseCreateDetected: true,
        sufficientForCreateProposal: false,
        intentionKnown: "Un projet",
        nameProposal: "Un projet",
        intentionKind: "project_direction",
      }),
      "ne crée pas",
    );
    expect(merged.explicitRefuseCreate).toBe(true);
    expect(studioCanCreate(merged)).toBe(false);
  });

  it("12 — no create before cognitive turn", () => {
    expect(studioCanCreate(emptyDraft())).toBe(false);
  });

  it("18 — handoff context preserves transcript without invention", () => {
    const draft = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "ok",
        intentionKnown: "Refondre l’accueil",
        nameProposal: "Accueil",
        sufficientForCreateProposal: true,
        firstOrientationProposal: "Clarifier le premier livrable",
      }),
      "Refondre l’accueil",
    );
    const ctx = buildProductContextHandoff(draft, [
      { role: "user", text: "Refondre l’accueil" },
      { role: "nora", text: "ok" },
    ]);
    expect(ctx).toContain(ONBOARDING_HANDOFF_MARKER);
    expect(ctx).toContain("Refondre l’accueil");
    expect(ctx).toContain("Clarifier le premier livrable");
    expect(ctx).toMatch(/Aucun CycleInstance/);
  });

  it("rejects invalid payload", () => {
    expect(parseOnboardingCognitivePayload({})).toBeNull();
    expect(parseOnboardingCognitivePayload({ replyText: "" })).toBeNull();
  });
});

describe("P6-HQA-NEWPROJECT-01 provider-backed turns (Fake)", () => {
  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    delete process.env.OPS1_CONVERSATION_PROVIDER;
  });

  it("1/2/7 — clear intention → create proposal + name via Fake", async () => {
    const result = await runNewProjectOnboardingTurn({
      userText:
        "Je veux moderniser le reporting commercial pour le rendre plus lisible.",
      draft: emptyDraft(),
      history: [
        {
          role: "nora",
          text: "Bonjour — dis-moi ce que tu veux accomplir.",
        },
      ],
      provider: new FakeConversationProvider(),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.draft.intention.length).toBeGreaterThan(10);
    expect(result.draft.name.length).toBeGreaterThan(0);
    expect(studioCanCreate(result.draft)).toBe(true);
    expect(result.replyText.length).toBeGreaterThan(10);
  });

  it("6 — hesitant short message does not force create", async () => {
    const result = await runNewProjectOnboardingTurn({
      userText: "euh",
      draft: emptyDraft(),
      history: [],
      provider: new FakeConversationProvider(),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(studioCanCreate(result.draft)).toBe(false);
  });

  it("7 — want to start fast → exploratory create proposal", async () => {
    const result = await runNewProjectOnboardingTurn({
      userText: "On commence tout de suite, on verra le détail après",
      draft: emptyDraft(),
      history: [],
      provider: new FakeConversationProvider(),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.payload.sufficientForCreateProposal).toBe(true);
    expect(studioCanCreate(result.draft)).toBe(true);
  });

  it("8 — intention change updates draft", async () => {
    const first = await runNewProjectOnboardingTurn({
      userText: "Je veux un projet reporting",
      draft: emptyDraft(),
      history: [],
      provider: new FakeConversationProvider(),
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    const second = await runNewProjectOnboardingTurn({
      userText: "Finalement je préfère un projet formation équipe",
      draft: first.draft,
      history: [
        { role: "user", text: "Je veux un projet reporting" },
        { role: "nora", text: first.replyText },
      ],
      provider: new FakeConversationProvider(),
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.draft.intention.toLowerCase()).toMatch(/formation/);
  });

  it("9 — off-topic does not invent a project", async () => {
    const result = await runNewProjectOnboardingTurn({
      userText: "Quelle est la météo demain ?",
      draft: emptyDraft(),
      history: [],
      provider: new FakeConversationProvider(),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.payload.sufficientForCreateProposal).toBe(false);
  });

  it("11 — refuse create", async () => {
    const result = await runNewProjectOnboardingTurn({
      userText: "Ne crée pas pour l’instant",
      draft: emptyDraft(),
      history: [],
      provider: new FakeConversationProvider(),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.draft.explicitRefuseCreate).toBe(true);
    expect(studioCanCreate(result.draft)).toBe(false);
  });

  it("14 — provider error is honest and non-mutating", async () => {
    const provider = new FakeConversationProvider({ failOnCall: 1 });
    const before = emptyDraft();
    const result = await runNewProjectOnboardingTurn({
      userText: "Je veux un projet",
      draft: before,
      history: [],
      provider,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("PROVIDER_ERROR");
    expect(result.draft).toEqual(before);
  });

  it("15 — abort / interruption", async () => {
    const ac = new AbortController();
    ac.abort();
    const result = await runNewProjectOnboardingTurn({
      userText: "Je veux un projet",
      draft: emptyDraft(),
      history: [],
      provider: new FakeConversationProvider(),
      signal: ac.signal,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("ABORTED");
  });

  it("16 — conversation resume merges prior draft", async () => {
    const first = await runNewProjectOnboardingTurn({
      userText: "Projet pour clarifier le pilotage produit",
      draft: emptyDraft(),
      history: [],
      provider: new FakeConversationProvider(),
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    const resumed = await runNewProjectOnboardingTurn({
      userText: "Ajoute que le contexte est une équipe de 5 personnes",
      draft: first.draft,
      history: [
        { role: "user", text: "Projet pour clarifier le pilotage produit" },
        { role: "nora", text: first.replyText },
      ],
      provider: new FakeConversationProvider(),
    });
    expect(resumed.ok).toBe(true);
    if (!resumed.ok) return;
    expect(resumed.draft.cognitiveTurns).toBe(2);
    expect(resumed.draft.intention.length).toBeGreaterThan(0);
  });

  it("23 — two concurrent drafts stay isolated", async () => {
    const a = await runNewProjectOnboardingTurn({
      userText: "Projet Alpha reporting",
      draft: emptyDraft(),
      history: [],
      provider: new FakeConversationProvider(),
    });
    const b = await runNewProjectOnboardingTurn({
      userText: "Projet Beta formation",
      draft: emptyDraft(),
      history: [],
      provider: new FakeConversationProvider(),
    });
    expect(a.ok && b.ok).toBe(true);
    if (!a.ok || !b.ok) return;
    expect(a.draft.intention).not.toEqual(b.draft.intention);
    expect(a.draft.name).not.toEqual(b.draft.name);
  });
});
