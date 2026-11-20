/**
 * A4 — adapter-boundary tests for fixtureReply failure parity with LIVE.
 * Must call generateNoraReply (not validateNoraTurnQualification alone).
 */
import { afterEach, describe, expect, it } from "vitest";
import { generateNoraReply } from "@/domains/conversation/nora-adapter";
import { buildCognitivePolicy } from "@/domains/conversation/cognitive-policy";
import { registerFixtureScenario } from "@/domains/conversation/fixture-semantic-qualify";
import { REPLY_DRAFT_MAX_CHARS } from "@/domains/conversation/conversational-composition";
import {
  VISUAL_COMPOSITION_SCHEMA,
  VISUAL_COMPOSITION_SCHEMA_PROJECTION,
  type VisualComposition,
} from "@/domains/conversation/visual-composition";

describe("A4 fixtureReply adapter boundary", () => {
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

  it("A4-01 valid canonical: COMPLETE with derived replyDraft", async () => {
    forceFixture();
    const policy = buildCognitivePolicy("E05_A4_DIVERGENT_OK", "TEST_BOUNDARY");
    const result = await generateNoraReply({
      userText: "E05_A4_DIVERGENT_OK",
      contextSnippets: [],
      policyOverride: policy,
    });
    expect(result.mode).toBe("deterministic-fixture");
    expect(result.status).toBe("COMPLETE");
    expect(result.qualification.status).not.toBe("UNAVAILABLE");
    expect(result.content).toContain("Prose canonique unique pour A4-01/A4-04");
    expect(result.content).not.toContain("TEXTE_DIVERGENT_INDEPENDANT");
    expect(result.attempts.every((a) => a.providerContacted === "NO")).toBe(true);
  });

  it("A4-03/A4-02 overflow: UNKNOWN — never COMPLETE with raw divergent draft", async () => {
    forceFixture();
    const policy = buildCognitivePolicy("E05_A4_OVERFLOW", "TEST_BOUNDARY");
    const result = await generateNoraReply({
      userText: "E05_A4_OVERFLOW",
      contextSnippets: [],
      policyOverride: policy,
    });
    expect(result.mode).toBe("deterministic-fixture");
    expect(result.status).toBe("UNKNOWN");
    expect(result.qualification.status).toBe("UNAVAILABLE");
    expect(result.streamingNotes ?? "").toMatch(/CANONICAL_REPLY_OVERFLOW/);
    expect(result.content).not.toContain("TEXTE_INITIAL_DIVERGENT");
    expect(result.content).not.toMatch(/^Z{100,}/);
    expect(result.attempts[0]?.outcome).toBe("UNKNOWN");
    expect(result.attempts[0]?.providerContacted).toBe("NO");
  });

  it("A4-04 register + divergent overwritten on adapter path", async () => {
    forceFixture();
    const key = `E05_A4_DYN_${Date.now()}`;
    registerFixtureScenario(key, {
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      goal: "dyn",
      projectIntention: "",
      desiredOutcome: "",
      initialScope: "",
      proposedProjectName: "",
      intents: [
        {
          id: "i1",
          capabilityId: "d3.converse",
          mode: "EXPLORE",
          summary: "dyn",
          parameters: {},
          constraints: ["NO_EFFECT"],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "BRUT_NON_VALIDE_NE_DOIT_PAS_PASSER",
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
        blocks: [{ kind: "text", id: "t", markdown: "Derive adapter A4-04." }],
      },
    });
    const policy = buildCognitivePolicy(key, "TEST_BOUNDARY");
    const result = await generateNoraReply({
      userText: key,
      contextSnippets: [],
      policyOverride: policy,
    });
    expect(result.status).toBe("COMPLETE");
    expect(result.content).toBe("Derive adapter A4-04.");
    expect(result.content).not.toContain("BRUT_NON_VALIDE");
  });

  it("A4-05 projection-v1 Strategy B keeps replyDraft authority via adapter", async () => {
    forceFixture();
    const key = `E05_A4_PROJ_${Date.now()}`;
    registerFixtureScenario(key, {
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      goal: "proj",
      projectIntention: "",
      desiredOutcome: "",
      initialScope: "",
      proposedProjectName: "",
      intents: [
        {
          id: "i1",
          capabilityId: "d3.converse",
          mode: "EXPLORE",
          summary: "proj",
          parameters: {},
          constraints: ["NO_EFFECT"],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "Autorite replyDraft Strategy B historique",
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA_PROJECTION,
        blocks: [{ kind: "text", id: "t", markdown: "Projection secondaire non autorite" }],
      },
    });
    const policy = buildCognitivePolicy(key, "TEST_BOUNDARY");
    const result = await generateNoraReply({
      userText: key,
      contextSnippets: [],
      policyOverride: policy,
    });
    expect(result.status).toBe("COMPLETE");
    expect(result.content).toBe("Autorite replyDraft Strategy B historique");
    const vc = result.qualification.visualComposition as VisualComposition | undefined;
    expect(vc?.contentAuthority).toBe("legacy_projection");
  });

  it("A4-07 duplicate intents → UNKNOWN UNAVAILABLE, no provider contact", async () => {
    forceFixture();
    const key = `E05_A4_DUP_${Date.now()}`;
    const intent = {
      id: "i1",
      capabilityId: "d3.converse" as const,
      mode: "EXPLORE" as const,
      summary: "dup",
      parameters: {},
      constraints: ["NO_EFFECT"],
      dependsOn: [] as string[],
      sourceEvidence: [] as string[],
    };
    registerFixtureScenario(key, {
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      goal: "dup",
      projectIntention: "",
      desiredOutcome: "",
      initialScope: "",
      proposedProjectName: "",
      intents: [intent, { ...intent }],
      clarifications: [],
      replyDraft: "ne doit pas completer",
    });
    const policy = buildCognitivePolicy(key, "TEST_BOUNDARY");
    const result = await generateNoraReply({
      userText: key,
      contextSnippets: [],
      policyOverride: policy,
    });
    expect(result.status).toBe("UNKNOWN");
    expect(result.qualification.status).toBe("UNAVAILABLE");
    expect(result.attempts[0]?.providerContacted).toBe("NO");
    expect(result.content).not.toBe("ne doit pas completer");
  });
});

describe("A1 exact derive boundaries", () => {
  function textComp(len: number): VisualComposition {
    return {
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      contentAuthority: "canonical_sections",
      blocks: [{ kind: "text", id: "t1", markdown: "x".repeat(len) }],
    };
  }

  it("A1 exact max-1 / max / max+1", async () => {
    const { deriveReplyDraftFromCanonicalSections } = await import(
      "@/domains/conversation/conversational-composition"
    );
    const a = deriveReplyDraftFromCanonicalSections(textComp(REPLY_DRAFT_MAX_CHARS - 1));
    const b = deriveReplyDraftFromCanonicalSections(textComp(REPLY_DRAFT_MAX_CHARS));
    const c = deriveReplyDraftFromCanonicalSections(textComp(REPLY_DRAFT_MAX_CHARS + 1));
    expect(a.ok).toBe(true);
    if (a.ok) expect(a.length).toBe(REPLY_DRAFT_MAX_CHARS - 1);
    expect(b.ok).toBe(true);
    if (b.ok) expect(b.length).toBe(REPLY_DRAFT_MAX_CHARS);
    expect(c.ok).toBe(false);
    if (!c.ok && c.reason === "CV_DERIVE_OVERFLOW") {
      expect(c.length).toBe(REPLY_DRAFT_MAX_CHARS + 1);
    }
  });
});
