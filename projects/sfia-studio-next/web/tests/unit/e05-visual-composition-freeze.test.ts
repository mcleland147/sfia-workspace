import { describe, expect, it } from "vitest";
import {
  E05_VISUAL_COMPOSITION_FROZEN,
  stripVisualCompositionForFrozenReplies,
} from "@/domains/conversation/nora-adapter";
import {
  NoraTurnQualificationAgentSchema,
  NoraTurnQualificationSchema,
  validateNoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";
import { editorialCompactKnowledgeStatement } from "@/domains/knowledge/service";

describe("E05 visual composition freeze (Morris 19/11/2026)", () => {
  it("freeze flag is active and documented", () => {
    expect(E05_VISUAL_COMPOSITION_FROZEN).toBe(true);
  });

  it("stripVisualCompositionForFrozenReplies removes visualComposition without mutating other fields", () => {
    const raw = {
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      goal: "répondre",
      intents: [],
      clarifications: [],
      replyDraft: "## Ce que nous savons\n\n- point A\n\n## Suite\n\nTexte.",
      visualComposition: {
        schemaVersion: "canonical-v1",
        blocks: [{ type: "heading", text: "x" }],
      },
    };
    const stripped = stripVisualCompositionForFrozenReplies(raw) as Record<string, unknown>;
    expect(stripped.visualComposition).toBeUndefined();
    expect(stripped.replyDraft).toContain("Ce que nous savons");
    expect(raw.visualComposition).toBeDefined();
  });

  it("LIVE agent schema omits visualComposition while persisted schema retains it", () => {
    const live = NoraTurnQualificationSchema.omit({ visualComposition: true });
    expect("visualComposition" in live.shape).toBe(false);
    expect("visualComposition" in NoraTurnQualificationAgentSchema.shape).toBe(true);
    expect("visualComposition" in NoraTurnQualificationSchema.shape).toBe(true);
  });

  it("validated qualification without visualComposition stays textual", () => {
    const validated = validateNoraTurnQualification(
      stripVisualCompositionForFrozenReplies({
        schemaVersion: "ml4c-sem-qual-v1",
        status: "QUALIFIED",
        goal: "clarifier inventaire",
        intents: [],
        clarifications: [],
        replyDraft:
          "### Inventaire Lille\n\n- 12 portables\n- 10 opérationnels\n\n### À clarifier\n\nResponsabilité des prêts.",
      }),
    );
    expect(validated.ok).toBe(true);
    if (!validated.ok) return;
    expect(validated.value.visualComposition).toBeUndefined();
    expect(validated.value.replyDraft).toMatch(/Inventaire Lille/);
  });

  it("editorialCompactKnowledgeStatement shortens and strips narrative preamble", () => {
    const long =
      "Selon le Pilote, le centre de Lille possède effectivement douze ordinateurs portables dont le nombre opérationnel a été corrigé après vérification inventaire, ce qui modifie la capacité mobilisable pour les formations du lundi et implique aussi de tenir compte des prêts déjà consentis ainsi que du registre papier actuellement tenu à l'accueil pour les remises et retours.";
    const compact = editorialCompactKnowledgeStatement(long, 220);
    expect(compact.length).toBeLessThanOrEqual(221);
    expect(compact.toLowerCase()).not.toMatch(/^selon le pilote/);
    expect(compact.length).toBeGreaterThan(40);
  });
});
