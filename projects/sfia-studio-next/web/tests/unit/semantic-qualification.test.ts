import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  INTERVENCIA_S02_01_MESSAGE,
  fixtureSemanticQualify,
} from "@/domains/conversation/fixture-semantic-qualify";
import {
  deriveThreadTurnKind,
  effectIntents,
  extractPilotageBinding,
  matchPilotageIntentInQualification,
  projectStudioEffects,
  validateNoraTurnQualification,
  type NoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";
import { qualifyThreadTurn } from "@/domains/pilotage/thread-recovery";
import { qualifyDocumentAct } from "@/domains/conversation/document-act";
import { qualifyPilotageIntent } from "@/domains/pilotage/intent";

describe("semantic qualification envelope", () => {
  it("requires typed pilotageOperation for D5/D6 REQUEST_EFFECT", () => {
    const missing = validateNoraTurnQualification({
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      goal: "x",
      intents: [
        {
          id: "i1",
          capabilityId: "d5.pilotage_command",
          mode: "REQUEST_EFFECT",
          summary: "open",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "ok",
    });
    expect(missing.ok).toBe(false);

    const ok = validateNoraTurnQualification({
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      goal: "x",
      intents: [
        {
          id: "i1",
          capabilityId: "d5.pilotage_command",
          mode: "REQUEST_EFFECT",
          summary: "open",
          parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: "CADRAGE" },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "ok",
    });
    expect(ok.ok).toBe(true);
    if (ok.ok) {
      const binding = extractPilotageBinding(ok.value);
      expect(binding && !("ambiguous" in binding) && binding.operation).toBe("OPEN_CYCLE");
    }
  });

  it("matchPilotageIntent rejects substituted operation / intentId", () => {
    const q: NoraTurnQualification = {
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      goal: "open",
      intents: [
        {
          id: "i1",
          capabilityId: "d5.pilotage_command",
          mode: "REQUEST_EFFECT",
          summary: "open",
          parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: "CADRAGE" },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "ok",
    };
    expect(matchPilotageIntentInQualification(q, { operation: "CLOSE_CYCLE" })).toMatchObject({
      reject: true,
    });
    expect(matchPilotageIntentInQualification(q, { intentId: "other" })).toMatchObject({
      reject: true,
    });
    expect(matchPilotageIntentInQualification(q, { operation: "OPEN_CYCLE", intentId: "i1" })).toMatchObject({
      operation: "OPEN_CYCLE",
      intentId: "i1",
    });
  });

  it("follow-on document requires exact dependsOn on create-project intent id", () => {
    const loose: NoraTurnQualification = {
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      goal: "x",
      intents: [
        {
          id: "i1",
          capabilityId: "d2.create_project",
          mode: "REQUEST_EFFECT",
          summary: "p",
          parameters: { projectName: "Atlas" },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
        {
          id: "i2",
          capabilityId: "d4.create_document",
          mode: "REQUEST_EFFECT",
          summary: "doc",
          parameters: {},
          constraints: [],
          dependsOn: ["unrelated"],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "ok",
    };
    // invalid dependsOn fails schema validation
    expect(validateNoraTurnQualification(loose).ok).toBe(false);

    const ok: NoraTurnQualification = {
      ...loose,
      intents: [
        loose.intents[0]!,
        { ...loose.intents[1]!, dependsOn: ["i1"] },
      ],
    };
    expect(projectStudioEffects(ok).wantsFollowOnDocument).toBe(true);
  });

  it("deriveThreadTurnKind from semantic modes", () => {
    const dialogue: NoraTurnQualification = {
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      goal: "q",
      intents: [
        {
          id: "i1",
          capabilityId: "d3.converse",
          mode: "EXPLAIN",
          summary: "explain",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "ok",
    };
    expect(deriveThreadTurnKind(dialogue)).toBe("DIALOGUE_INDEPENDANT");
  });
});

describe("fixtureSemanticQualify — exact scenario injection", () => {
  const prev = { ...process.env };

  beforeEach(() => {
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
  });

  afterEach(() => {
    process.env = { ...prev };
  });

  it("full Intervencia message → no D2/D4 effect intents", () => {
    const q = fixtureSemanticQualify(INTERVENCIA_S02_01_MESSAGE);
    expect(effectIntents(q)).toHaveLength(0);
    expect(projectStudioEffects(q).wantsProjectCreate).toBe(false);
    expect(deriveThreadTurnKind(q)).toBe("DIALOGUE_INDEPENDANT");
  });

  it("positive create exact scenarios → d2 REQUEST_EFFECT", () => {
    for (const msg of [
      "Je veux créer un projet.",
      "Je veux démarrer un projet.",
      "Je souhaite initier un nouveau projet.",
    ]) {
      expect(projectStudioEffects(fixtureSemanticQualify(msg)).wantsProjectCreate, msg).toBe(true);
    }
  });

  it("negations / how-to exact scenarios → no create", () => {
    for (const msg of [
      "Je ne veux pas créer le projet.",
      "Comment crée-t-on un projet ?",
      "Il a écrit : crée le projet Atlas.",
    ]) {
      expect(projectStudioEffects(fixtureSemanticQualify(msg)).wantsProjectCreate, msg).toBe(false);
    }
  });

  it("Atlas compound preserves exact dependsOn", () => {
    const proj = projectStudioEffects(
      fixtureSemanticQualify(
        "Crée un projet nommé Atlas puis prépare dans ce projet un document de cadrage qui expose l'objectif, le périmètre et les premières étapes.",
      ),
    );
    expect(proj.wantsProjectCreate).toBe(true);
    expect(proj.proposedProjectName).toBe("Atlas");
    expect(proj.wantsFollowOnDocument).toBe(true);
    // Immediate D4 must stay deferred until Pilot create (mission pending step).
    expect(proj.documentAct.kind).toBe("NONE");
  });

  it("unknown fixture text is dialogue-only (no lexical invent)", () => {
    const q = fixtureSemanticQualify("Formule libre jamais enregistrée dans la table.");
    expect(effectIntents(q)).toHaveLength(0);
  });
});

describe("SEM-02 lexical routers retired", () => {
  it("qualifyDocumentAct / qualifyPilotageIntent / qualifyThreadTurn fail-closed", () => {
    expect(qualifyDocumentAct("Crée un document de recette.").kind).toBe("NONE");
    expect(qualifyPilotageIntent("Ouvre le cycle cadrage.").clarity).toBe("NONE");
    expect(qualifyThreadTurn("Ouvre le cycle cadrage.").kind).toBe("INCERTAIN");
  });

  it("PHRASES synonym table removed from intent.ts", () => {
    const src = readFileSync(join(__dirname, "../../src/domains/pilotage/intent.ts"), "utf8");
    expect(src).not.toMatch(/const PHRASES/);
    expect(src).toMatch(/SEMANTIC_ROUTER_REQUIRED/);
  });

  it("pilotage owner path requires durable qualification match", () => {
    const src = readFileSync(join(__dirname, "../../src/domains/pilotage/service.ts"), "utf8");
    expect(src).toMatch(/loadDurableQualificationForUserMessage/);
    expect(src).toMatch(/matchPilotageIntentInQualification/);
    expect(src).not.toMatch(/qualifyPilotageIntent\s*\(/);
  });

  it("project page no longer imports qualifyThreadTurn", () => {
    const src = readFileSync(join(__dirname, "../../src/app/projects/[projectId]/page.tsx"), "utf8");
    expect(src).not.toMatch(/qualifyThreadTurn/);
    expect(src).toMatch(/nextTurnKind/);
    expect(src).toMatch(/unresolvedPendingClientTurnKey/);
  });

  it("Lot A — USER_MESSAGE path refuses body enrichment of authority params", () => {
    const src = readFileSync(join(__dirname, "../../src/domains/pilotage/service.ts"), "utf8");
    expect(src).toMatch(/pas de complément body/);
    expect(src).toMatch(/fromDurable/);
    expect(src).not.toMatch(/matched\.cycleType \?\? body\.cycleType/);
    expect(src).not.toMatch(/matched\.decisionId \?\? body\.decisionId/);
    expect(src).not.toMatch(/matched\.objectRef \?\? body\.objectRef/);
  });

  it("Lot B — completeTurnCommand / markTurnUnknown preserve semanticQualification", () => {
    const src = readFileSync(join(__dirname, "../../src/domains/conversation/turn-command.ts"), "utf8");
    expect(src).toMatch(/semanticQualification !== undefined/);
    expect(src).toMatch(/Fail closed: keep prior durable JSON/);
    expect(src).toMatch(/findUnresolvedSiblingTurns/);
  });

  it("Lot C — S05 pending gate before owner effects", () => {
    const src = readFileSync(join(__dirname, "../../src/domains/conversation/service.ts"), "utf8");
    expect(src).toMatch(/S05_PENDING_BLOCKS_EFFECT/);
    expect(src).toMatch(/allowOwnerEffects/);
    expect(src).toMatch(/findUnresolvedSiblingTurns/);
  });

  it("F1 — reconcile known acts before STALE_REVISION gate", () => {
    const src = readFileSync(
      join(__dirname, "../../src/domains/pilotage/command-runner.ts"),
      "utf8",
    );
    const classifyIdx = src.indexOf("const classified = await handlers.classify(tx)");
    const intentIdx = src.indexOf("const intent = await findByIntent(");
    const staleIdx = src.indexOf('reasonCode: "STALE_REVISION"');
    expect(classifyIdx).toBeGreaterThan(0);
    expect(intentIdx).toBeGreaterThan(classifyIdx);
    expect(staleIdx).toBeGreaterThan(intentIdx);
    expect(src).toMatch(/NEW act only: expectedRevision guards concurrency/);
  });

  it("F4 — no FACT from Nora established alone; resume hints post-reply only", () => {
    const knowledge = readFileSync(
      join(__dirname, "../../src/domains/knowledge/service.ts"),
      "utf8",
    );
    expect(knowledge).toMatch(/FACT_PROMOTION_REFUSED_NO_INDEPENDENT_SOURCE/);
    expect(knowledge).not.toMatch(/p\.epistemic === "established"\s*\?\s*"FACT"/);
    const conv = readFileSync(
      join(__dirname, "../../src/domains/conversation/service.ts"),
      "utf8",
    );
    expect(conv).toMatch(/pre_generation_context/);
    expect(conv).toMatch(/post_qualification_resume_only/);
    expect(conv).toMatch(/knowledgeForNora/);
  });

  it("Lot D — lexical capitalisation / document helpers / knowledge listing retired", () => {
    const knowledge = readFileSync(
      join(__dirname, "../../src/domains/knowledge/service.ts"),
      "utf8",
    );
    expect(knowledge).toMatch(/semantic-proposals/);
    expect(knowledge).toMatch(/bounded-resource-listing|semantic-preferred-then-bounded/);
    expect(knowledge).not.toMatch(/selectionMethod: "lexical-heuristic"/);
    expect(knowledge).toMatch(/d4\.record_knowledge|RG-KNOW-001/);

    const doc = readFileSync(
      join(__dirname, "../../src/domains/conversation/document-act.ts"),
      "utf8",
    );
    expect(doc).toMatch(/export function hasExplicitCreateIntent\(_text: string\): boolean \{\n  return false;/);

    const auth = readFileSync(
      join(__dirname, "../../src/domains/pilotage/conversation-authority.ts"),
      "utf8",
    );
    expect(auth).toMatch(/resolveReviseDecisionTarget/);
    expect(auth).toMatch(/resolveLiftRestrictionTarget/);
    expect(auth).not.toMatch(/const resolved = resolveReviseTargetLexical\(/);
  });
});
