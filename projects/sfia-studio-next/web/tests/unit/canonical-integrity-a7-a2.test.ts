/**
 * A7 — canonical invalid/empty integrity + A2 textAlternative exhaustiveness.
 * Adapter-boundary cases use generateNoraReply (not validate alone).
 */
import { afterEach, describe, expect, it } from "vitest";
import { generateNoraReply } from "@/domains/conversation/nora-adapter";
import { buildCognitivePolicy } from "@/domains/conversation/cognitive-policy";
import { registerFixtureScenario } from "@/domains/conversation/fixture-semantic-qualify";
import { validateNoraTurnQualification } from "@/domains/conversation/semantic-qualification";
import {
  buildExhaustiveBlockFallback,
  deriveReplyDraftFromCanonicalSections,
  mergeTextAlternative,
} from "@/domains/conversation/conversational-composition";
import {
  parseVisualComposition,
  VISUAL_COMPOSITION_SCHEMA,
  VISUAL_COMPOSITION_SCHEMA_LEGACY,
  VISUAL_COMPOSITION_SCHEMA_PROJECTION,
} from "@/domains/conversation/visual-composition";

const BASE = {
  schemaVersion: "ml4c-sem-qual-v1" as const,
  status: "QUALIFIED" as const,
  goal: "a7",
  projectIntention: "",
  desiredOutcome: "",
  initialScope: "",
  proposedProjectName: "",
  intents: [] as [],
  clarifications: [] as string[],
};

describe("A7 — canonical integrity (validate + adapter)", () => {
  const prevLane = process.env.STUDIO_LANE;
  const prevForce = process.env.STUDIO_FORCE_NORA_FIXTURE;
  const prevKey = process.env.OPENAI_API_KEY;

  afterEach(() => {
    if (prevLane === undefined) delete process.env.STUDIO_LANE;
    else process.env.STUDIO_LANE = prevLane;
    if (prevForce === undefined) delete process.env.STUDIO_FORCE_NORA_FIXTURE;
    else process.env.STUDIO_FORCE_NORA_FIXTURE = prevForce;
    if (prevKey === undefined) delete process.env.OPENAI_API_KEY;
    else process.env.OPENAI_API_KEY = prevKey;
  });

  function forceFixture() {
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
    delete process.env.OPENAI_API_KEY;
  }

  it("A7-01 narrative-only: no visualComposition → replyDraft authority", () => {
    const v = validateNoraTurnQualification({
      ...BASE,
      replyDraft: "Réponse narrative volontaire sans composition.",
    });
    expect(v.ok).toBe(true);
    if (!v.ok) return;
    expect(v.value.visualComposition).toBeUndefined();
    expect(v.value.replyDraft).toBe("Réponse narrative volontaire sans composition.");
  });

  it("A7-02 canonical-v1 valid → derived text wins", () => {
    const v = validateNoraTurnQualification({
      ...BASE,
      replyDraft: "DIVERGENT_A_ECRASER",
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
        blocks: [{ kind: "text", id: "t", markdown: "Prose canonique A7-02." }],
      },
    });
    expect(v.ok).toBe(true);
    if (!v.ok) return;
    expect(v.value.replyDraft).toBe("Prose canonique A7-02.");
    expect(v.value.replyDraft).not.toContain("DIVERGENT");
  });

  it("A7-03/06 canonical empty markdown → CANONICAL_COMPOSITION_INVALID (reachable)", () => {
    // Zod accepts empty markdown; parseText rejects → declared canonical unusable.
    const v = validateNoraTurnQualification({
      ...BASE,
      replyDraft: "NE_DOIT_PAS_SURVIVRE_COMME_COMPLETE",
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
        blocks: [{ kind: "text", id: "t", markdown: "   " }],
      },
    });
    expect(v.ok).toBe(false);
    if (!v.ok) expect(v.reason).toBe("CANONICAL_COMPOSITION_INVALID");
  });

  it("A7-05 canonical anchors-only → CANONICAL_COMPOSITION_EMPTY (reachable)", () => {
    const v = validateNoraTurnQualification({
      ...BASE,
      replyDraft: "BRUT_INDEPENDANT",
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
        blocks: [
          { kind: "choices", id: "ch", choiceIds: ["c1"] },
          { kind: "references", id: "rf", resourceIds: ["r1"] },
        ],
      },
    });
    expect(v.ok).toBe(false);
    if (!v.ok) expect(v.reason).toMatch(/^CANONICAL_COMPOSITION_EMPTY/);
  });

  it("A7-04 canonical text empty after trim via only spaces in multi — invalid", () => {
    const v = validateNoraTurnQualification({
      ...BASE,
      replyDraft: "x",
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
        blocks: [{ kind: "text", id: "t", markdown: "" }],
      },
    });
    expect(v.ok).toBe(false);
    if (!v.ok) expect(v.reason).toBe("CANONICAL_COMPOSITION_INVALID");
  });

  it("A7-07 unknown schema → SCHEMA_INVALID at envelope (not soft-path)", () => {
    const v = validateNoraTurnQualification({
      ...BASE,
      replyDraft: "legacy reply",
      visualComposition: {
        schemaVersion: "unknown-composition-v9",
        blocks: [{ kind: "text", id: "t", markdown: "x" }],
      },
    });
    expect(v.ok).toBe(false);
    if (!v.ok) expect(v.reason).toMatch(/^SCHEMA_INVALID/);
  });

  it("A7-08 projection-v1 invalid → soft-drop, replyDraft legacy authority", () => {
    const v = validateNoraTurnQualification({
      ...BASE,
      replyDraft: "Autorité Strategy B historique",
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA_PROJECTION,
        blocks: [{ kind: "text", id: "t", markdown: "   " }],
      },
    });
    expect(v.ok).toBe(true);
    if (!v.ok) return;
    expect(v.value.visualComposition).toBeUndefined();
    expect(v.value.replyDraft).toBe("Autorité Strategy B historique");
  });

  it("A7-09 e05 invalid → soft-drop, replyDraft legacy authority", () => {
    const v = validateNoraTurnQualification({
      ...BASE,
      replyDraft: "Autorité E05 historique",
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA_LEGACY,
        blocks: [{ kind: "text", id: "t", markdown: "" }],
      },
    });
    expect(v.ok).toBe(true);
    if (!v.ok) return;
    expect(v.value.visualComposition).toBeUndefined();
    expect(v.value.replyDraft).toBe("Autorité E05 historique");
  });

  it("A7-10 divergent replyDraft with valid canonical → overwritten", () => {
    const v = validateNoraTurnQualification({
      ...BASE,
      replyDraft: "INDEPENDANT",
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
        blocks: [{ kind: "text", id: "t", markdown: "Source unique." }],
      },
    });
    expect(v.ok).toBe(true);
    if (!v.ok) return;
    expect(v.value.replyDraft).toBe("Source unique.");
  });

  it("A7 adapter: anchors-only canonical → UNKNOWN not COMPLETE", async () => {
    forceFixture();
    const key = `E05_A7_ANCHORS_${Date.now()}`;
    registerFixtureScenario(key, {
      ...BASE,
      intents: [
        {
          id: "i1",
          capabilityId: "d3.converse",
          mode: "EXPLORE",
          summary: "a7",
          parameters: {},
          constraints: ["NO_EFFECT"],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      replyDraft: "NE_PAS_FINALISER",
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
        blocks: [{ kind: "choices", id: "ch", choiceIds: ["c1"] }],
      },
    });
    const result = await generateNoraReply({
      userText: key,
      contextSnippets: [],
      policyOverride: buildCognitivePolicy(key, "TEST_BOUNDARY"),
    });
    expect(result.status).toBe("UNKNOWN");
    expect(result.qualification.status).toBe("UNAVAILABLE");
    expect(result.content).not.toBe("NE_PAS_FINALISER");
    expect(result.attempts[0]?.providerContacted).toBe("NO");
  });

  it("A7 adapter: empty canonical text → UNKNOWN", async () => {
    forceFixture();
    const key = `E05_A7_EMPTY_${Date.now()}`;
    registerFixtureScenario(key, {
      ...BASE,
      intents: [
        {
          id: "i1",
          capabilityId: "d3.converse",
          mode: "EXPLORE",
          summary: "a7",
          parameters: {},
          constraints: ["NO_EFFECT"],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      replyDraft: "BRUT",
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
        blocks: [{ kind: "text", id: "t", markdown: "  " }],
      },
    });
    const result = await generateNoraReply({
      userText: key,
      contextSnippets: [],
      policyOverride: buildCognitivePolicy(key, "TEST_BOUNDARY"),
    });
    expect(result.status).toBe("UNKNOWN");
    expect(result.qualification.status).toBe("UNAVAILABLE");
    expect(result.streamingNotes ?? "").toMatch(/CANONICAL_COMPOSITION/);
  });
});

describe("A2 — textAlternative complementary (no prefix-80 drop)", () => {
  it("merge: full redundant skipped; partial/complementary preserved", () => {
    expect(mergeTextAlternative("Alpha vs Beta", "Alpha vs Beta")).toBe("Alpha vs Beta");
    const prefix =
      "Alpha vs Beta — comparaison des options de déploiement pour le portefeuille";
    const alt = `${prefix} ; réserve: dépendances externes non couvertes.`;
    const merged = mergeTextAlternative(prefix, alt);
    expect(merged).toContain("réserve: dépendances externes non couvertes.");
    expect(merged.startsWith(prefix)).toBe(true);
  });

  it("A2 comparison: suffix after shared 80-char prefix is kept in derive", () => {
    const body =
      "Options\nA: rapide\nB: robuste\n" +
      "détail comparatif pour atteindre plus de quatre-vingts caractères utiles.";
    expect(body.length).toBeGreaterThan(80);
    const altLong = `${body} — réserve critique: plafond budgétaire non confirmé.`;
    // Old heuristic would treat alt as redundant because first 80 chars ⊆ body
    expect(body.includes(altLong.slice(0, 80))).toBe(true);
    expect(mergeTextAlternative(body, altLong)).toContain("plafond budgétaire");

    const withReserve = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "comparison",
          id: "c2",
          title: "Options",
          alternatives: [
            { id: "a", title: "A", summary: "rapide" },
            { id: "b", title: "B", summary: "robuste" },
          ],
          textAlternative: altLong,
        },
      ],
    });
    expect(withReserve).toBeTruthy();
    const d = deriveReplyDraftFromCanonicalSections(withReserve!);
    expect(d.ok).toBe(true);
    if (d.ok) expect(d.text).toContain("plafond budgétaire non confirmé");
  });

  it("A2 relations/sequence/synthesis: complementary alt preserved", () => {
    const relations = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "r",
          title: "Deps",
          nodes: [
            { id: "a", label: "A", kind: "fact" },
            { id: "b", label: "B", kind: "finding" },
          ],
          edges: [{ from: "a", to: "b", relation: "depends_on" }],
          textAlternative: "Deps nuance: lien conditionnel non bloquant si contournement.",
        },
      ],
    });
    const sequence = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "sequence",
          id: "s",
          title: "Traj",
          steps: [
            { id: "s1", title: "Etape 1" },
            { id: "s2", title: "Etape 2" },
          ],
          textAlternative: "Traj reserve temporelle: fenetre S3 uniquement.",
        },
      ],
    });
    const synthesis = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "synthesis",
          id: "sy",
          title: "Synth",
          items: [{ id: "i1", label: "Point", tone: "finding" }],
          textAlternative: "Synth hypothese non tranchee cote metiers.",
        },
      ],
    });
    expect(relations).toBeTruthy();
    expect(sequence).toBeTruthy();
    expect(synthesis).toBeTruthy();
    expect(buildExhaustiveBlockFallback(relations!.blocks[0]!)).toContain("contournement");
    expect(buildExhaustiveBlockFallback(sequence!.blocks[0]!)).toContain("fenetre S3");
    expect(buildExhaustiveBlockFallback(synthesis!.blocks[0]!)).toContain("hypothese non tranchee");
  });

  it("A2 contradictory alt still preserved (no silent drop)", () => {
    const body = "Recommandation A";
    const alt = "Recommandation A est à éviter — privilégier B.";
    expect(mergeTextAlternative(body, alt)).toContain("privilégier B");
  });
});
