/** @vitest-environment node */
/**
 * P6-HQA-NEWPROJECT-01 — targeted functional closure (G1–G4).
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import {
  assembleProductContextHandoff,
  emptyDraft,
  mergeCognitiveIntoDraft,
  ONBOARDING_HANDOFF_MARKER,
  parseOnboardingHandoffEssentials,
  studioCanCreate,
  type OnboardingCognitivePayload,
  type PreProjectDraft,
} from "@/features/pre-m6-product-ui/newProjectOnboardingContract";
import { runNewProjectOnboardingTurn } from "@/features/pre-m6-product-ui/runNewProjectOnboardingTurn";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

function payload(
  partial: Partial<OnboardingCognitivePayload> & {
    replyText: string;
    intentionKind: OnboardingCognitivePayload["intentionKind"];
  },
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
    clarificationQuestion: null,
    suggestions: [],
    ...partial,
  };
}

describe("G1 — reversible refuse", () => {
  it("1 — refuse blocks create", () => {
    const d = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "ok",
        intentionKnown: "App de tâches",
        nameProposal: "Tâches",
        intentionKind: "project_direction",
        sufficientForCreateProposal: true,
        refuseCreateDetected: true,
      }),
      "ne crée pas",
    );
    expect(d.explicitRefuseCreate).toBe(true);
    expect(studioCanCreate(d)).toBe(false);
  });

  it("2 — refuse then explicit accept unlocks when direction exists", () => {
    let d = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "pas maintenant",
        intentionKnown: "App de gestion de tâches",
        nameProposal: "Tâches",
        intentionKind: "project_direction",
        refuseCreateDetected: true,
      }),
      "pas maintenant",
    );
    expect(studioCanCreate(d)).toBe(false);
    d = mergeCognitiveIntoDraft(
      d,
      payload({
        replyText: "allons-y",
        intentionKnown: "App de gestion de tâches",
        nameProposal: "Tâches",
        intentionKind: "project_direction",
        sufficientForCreateProposal: true,
        acceptCreateDetected: true,
      }),
      "Finalement, allons-y, je veux créer le projet.",
    );
    expect(d.explicitRefuseCreate).toBe(false);
    expect(studioCanCreate(d)).toBe(true);
  });

  it("3 — refuse then question does not unlock", () => {
    let d = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "refuse",
        intentionKnown: "Produit flou",
        nameProposal: "Produit",
        intentionKind: "project_direction",
        refuseCreateDetected: true,
      }),
      "pas maintenant",
    );
    d = mergeCognitiveIntoDraft(
      d,
      payload({
        replyText: "question",
        intentionKnown: "Produit flou",
        nameProposal: "Produit",
        intentionKind: "project_direction",
        // neutral turn — neither refuse nor accept
      }),
      "Tu peux préciser le nom ?",
    );
    expect(d.explicitRefuseCreate).toBe(true);
    expect(studioCanCreate(d)).toBe(false);
  });

  it("4 — refuse then off-topic does not unlock", () => {
    let d = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "refuse",
        intentionKnown: "Organisation",
        nameProposal: "Org",
        intentionKind: "project_direction",
        refuseCreateDetected: true,
      }),
      "attends",
    );
    d = mergeCognitiveIntoDraft(
      d,
      payload({
        replyText: "hors sujet",
        intentionKind: "non_project",
      }),
      "Quelle heure est-il ?",
    );
    expect(d.explicitRefuseCreate).toBe(true);
    expect(studioCanCreate(d)).toBe(false);
  });

  it("5 — accept then refuse reblocks", () => {
    let d = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "ok",
        intentionKnown: "App tâches",
        nameProposal: "Tâches",
        intentionKind: "project_direction",
        sufficientForCreateProposal: true,
        acceptCreateDetected: true,
      }),
      "créons-le",
    );
    expect(studioCanCreate(d)).toBe(true);
    d = mergeCognitiveIntoDraft(
      d,
      payload({
        replyText: "stop",
        intentionKnown: "App tâches",
        nameProposal: "Tâches",
        intentionKind: "project_direction",
        refuseCreateDetected: true,
      }),
      "Finalement ne crée pas",
    );
    expect(studioCanCreate(d)).toBe(false);
  });

  it("6 — name agreement alone is not create consent", () => {
    const base = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "propose nom",
        intentionKnown: "App tâches",
        nameProposal: "Tâches Pro",
        intentionKind: "project_direction",
        sufficientForCreateProposal: true,
        refuseCreateDetected: true,
      }),
      "idée",
    );
    const afterName = mergeCognitiveIntoDraft(
      base,
      payload({
        replyText: "nom ok",
        intentionKnown: "App tâches",
        nameProposal: "Tâches Pro",
        intentionKind: "project_direction",
        // acceptCreateDetected intentionally false (name confirm ≠ create)
      }),
      "ok pour le nom",
    );
    expect(afterName.explicitRefuseCreate).toBe(true);
    expect(studioCanCreate(afterName)).toBe(false);
  });
});

describe("G2 — minimum sufficient (non-syntactic)", () => {
  it("9 — clear intention with project_direction can create", () => {
    const d = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "ok",
        intentionKnown: "Je veux créer une application de gestion de tâches.",
        nameProposal: "Gestion de tâches",
        intentionKind: "project_direction",
        sufficientForCreateProposal: true,
      }),
      "Je veux créer une application de gestion de tâches.",
    );
    expect(studioCanCreate(d)).toBe(true);
  });

  it("10 — exploratory intention still project_direction", () => {
    const d = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "exploratoire",
        intentionKnown: "J’ai une idée de produit mais elle est encore floue.",
        nameProposal: "Idée produit",
        intentionKind: "project_direction",
        sufficientForCreateProposal: false,
      }),
      "idée encore floue",
    );
    expect(studioCanCreate(d)).toBe(true);
  });

  it("14 — long off-topic cannot create even if Nora wrongly says sufficient", () => {
    const d = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "recette",
        intentionKnown:
          "Voici une très longue recette de cuisine avec beaucoup d’ingrédients et d’étapes détaillées sans aucun projet.",
        nameProposal: "Recette",
        intentionKind: "non_project",
        sufficientForCreateProposal: true,
      }),
      "long hors sujet",
    );
    expect(studioCanCreate(d)).toBe(false);
  });

  it("15 — short intelligible project direction can create", () => {
    const d = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "ok",
        intentionKnown: "CRM interne",
        nameProposal: "CRM",
        intentionKind: "project_direction",
        sufficientForCreateProposal: true,
      }),
      "CRM",
    );
    expect(d.intention.length).toBeLessThan(12);
    expect(studioCanCreate(d)).toBe(true);
  });

  it("17 — Nora sufficient=true without project_direction rejected", () => {
    const d = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "bonjour",
        intentionKnown: "Bonjour",
        nameProposal: "Bonjour",
        intentionKind: "non_project",
        sufficientForCreateProposal: true,
      }),
      "Bonjour",
    );
    expect(studioCanCreate(d)).toBe(false);
    expect(d.cognitiveCreateProposal).toBe(false);
  });

  it("18 — Nora sufficient=false but exploratory project_direction creatable", () => {
    const d = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "incertain",
        intentionKnown: "Améliorer notre organisation, on précisera après.",
        nameProposal: "Organisation",
        intentionKind: "project_direction",
        sufficientForCreateProposal: false,
      }),
      "organisation",
    );
    expect(d.cognitiveCreateProposal).toBe(false);
    expect(studioCanCreate(d)).toBe(true);
  });
});

describe("G3 — continuity handoff assembly + Product read-back", () => {
  const tempDirs: string[] = [];
  const APP_ROOT = path.resolve(__dirname, "../..");
  const SCHEMAS = path.resolve(
    APP_ROOT,
    "../sfia-v3-modeled/v3-native-option-a/schemas",
  );
  const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");

  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    resetRuntimeApplicationServiceForTests();
  });

  afterEach(() => {
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
  });

  it("21/22/23 — essential fields preserved under tight budget; no silent intention loss", () => {
    const draft: PreProjectDraft = {
      ...emptyDraft(),
      intention: "Intention critique à conserver absolument pour la continuité",
      objective: "Objectif proposé",
      name: "Projet Continuity",
      nameProvisional: true,
      context: "Contexte connu",
      firstOrientation: "Orientation provisoire non autoritative",
      unknowns: ["périmètre", "premier cycle"],
      intentionKind: "project_direction",
      cognitiveTurns: 2,
    };
    const longTranscript = Array.from({ length: 20 }, (_, i) => ({
      role: (i % 2 === 0 ? "user" : "nora") as "user" | "nora",
      text: `Tour ${i} `.repeat(40),
    }));
    const assembled = assembleProductContextHandoff(
      draft,
      longTranscript,
      900,
    );
    expect(assembled.essentialPreserved).toBe(true);
    expect(assembled.text).toContain(ONBOARDING_HANDOFF_MARKER);
    expect(assembled.text).toContain("Intention critique à conserver");
    expect(assembled.text).toContain("périmètre");
    expect(assembled.text).toMatch(/FULL TRANSCRIPT REPLAY:\s*non/i);
    expect(assembled.text.length).toBeLessThanOrEqual(900);
    const parsed = parseOnboardingHandoffEssentials(assembled.text);
    expect(parsed.markerPresent).toBe(true);
    expect(parsed.intention).toMatch(/Intention critique/);
    expect(parsed.claimsFullReplay).toBe(false);
  });

  it("24/25/26 — Product create stores handoff; LPS full context is cognitive authority", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-np-cont-"));
    tempDirs.push(dir);
    const productDbPath = path.join(dir, "oa-product.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath,
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
    });
    const draft = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "ok",
        intentionKnown: "Moderniser le reporting commercial",
        objectiveProposal: "Moderniser le reporting commercial",
        nameProposal: "Reporting commercial",
        nameProvisional: true,
        firstOrientationProposal: "Clarifier le premier livrable",
        unknowns: ["sources de données"],
        intentionKind: "project_direction",
        sufficientForCreateProposal: true,
      }),
      "Moderniser le reporting commercial",
    );
    const handoff = assembleProductContextHandoff(draft, [
      { role: "user", text: "Moderniser le reporting commercial" },
      { role: "nora", text: "ok" },
    ]).text;
    const created = await runtime.createProject({
      name: draft.name,
      objective: draft.objective || draft.intention,
      context: handoff,
      criticality: "STANDARD",
      constraints: [],
      idempotencyKey: "np-cont-1",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const got = await runtime.getProject(created.projectId);
    expect(got.ok).toBe(true);
    if (!got.ok) return;
    expect(got.project.objective).toMatch(/reporting/i);
    // UI projection is ≤240 chars — may truncate; marker+intention must lead.
    expect(got.project.contextSummary).toContain(ONBOARDING_HANDOFF_MARKER);
    expect(got.project.contextSummary.length).toBeLessThanOrEqual(240);
    // Cognitive continuity authority = LPS full context (F2 readLiveProjectContext path).
    const oa = runtime.oa;
    expect(oa).toBeTruthy();
    const lps = await oa!.projectServices.getCurrentLivingProjectState.execute({
      projectId: created.projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const fullContext = lps.livingProjectState.context ?? "";
    expect(fullContext.length).toBeGreaterThan(240);
    const parsed = parseOnboardingHandoffEssentials(fullContext);
    expect(parsed.markerPresent).toBe(true);
    expect(parsed.intention).toMatch(/reporting/i);
    expect(parsed.orientation).toMatch(/livrable|Orientation|Clarifier/i);
    expect(parsed.claimsFullReplay).toBe(false);
    expect(fullContext).toMatch(/non Session Agents/i);
  });
});

describe("G4 — usage observation without false hard cap", () => {
  afterEach(() => {
    setConversationProviderForTests(null);
    delete process.env.OPS1_CONVERSATION_PROVIDER;
  });

  it("36 — usageObservation exposed; hardCapEnforced=false", async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    const result = await runNewProjectOnboardingTurn({
      userText: "Je veux créer une application de gestion de tâches.",
      draft: emptyDraft(),
      history: [],
      provider: new FakeConversationProvider(),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.usageObservation.hardCapEnforced).toBe(false);
    expect(result.usageObservation.declaredHumanQaBudgetEur).toBe(10);
    expect(result.usageObservation.model).toBeTruthy();
    // Fake may leave token counts null — that is an honest observability gap, not a hard cap.
  });
});

describe("Provider multi-turn Fake — refuse/accept path", () => {
  afterEach(() => {
    setConversationProviderForTests(null);
  });

  it("refuse then allons-y unlocks via Fake provider", async () => {
    const provider = new FakeConversationProvider();
    const first = await runNewProjectOnboardingTurn({
      userText: "Je veux une app de tâches mais ne crée pas pour l’instant",
      draft: emptyDraft(),
      history: [],
      provider,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    // Force refuse if combined message didn't
    const refused = first.draft.explicitRefuseCreate
      ? first.draft
      : mergeCognitiveIntoDraft(
          first.draft,
          payload({
            replyText: "refuse",
            intentionKnown: first.draft.intention || "App de tâches",
            nameProposal: first.draft.name || "Tâches",
            intentionKind: "project_direction",
            refuseCreateDetected: true,
          }),
          "ne crée pas",
        );
    expect(studioCanCreate(refused)).toBe(false);
    const second = await runNewProjectOnboardingTurn({
      userText: "Finalement, allons-y, je veux créer le projet.",
      draft: refused,
      history: [
        { role: "user", text: "ne crée pas" },
        { role: "nora", text: "ok" },
      ],
      provider,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.draft.explicitRefuseCreate).toBe(false);
    expect(studioCanCreate(second.draft)).toBe(true);
  });
});
