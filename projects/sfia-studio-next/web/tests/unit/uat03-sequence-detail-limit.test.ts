import { describe, expect, it } from "vitest";
import {
  VisualCompositionAgentOutputSchema,
  parseVisualComposition,
  VISUAL_COMPOSITION_SCHEMA,
} from "@/domains/conversation/visual-composition";
import { categorizeProviderError, extractProviderErrorDiagnostics } from "@/domains/conversation/nora-adapter";

function sequencePayload(detail: string) {
  return {
    schemaVersion: VISUAL_COMPOSITION_SCHEMA,
    blocks: [
      {
        kind: "text" as const,
        id: "t1",
        markdown: "Intro.",
      },
      {
        kind: "sequence" as const,
        id: "seq1",
        title: "Parcours",
        textAlternative: "Six étapes de déploiement.",
        steps: [
          { id: "s1", title: "Cadrer", detail },
          { id: "s2", title: "Prérequis", detail: "ok" },
        ],
      },
    ],
  };
}

describe("UAT-03 sequence steps[].detail limit 5000", () => {
  it.each([
    ["400", 400],
    ["401", 401],
    ["1200", 1200],
    ["5000", 5000],
  ] as const)("Agent schema accepts detail length %s", (_label, n) => {
    const detail = "x".repeat(n);
    const parsed = VisualCompositionAgentOutputSchema.safeParse(sequencePayload(detail));
    expect(parsed.success).toBe(true);
  });

  it("Agent schema rejects detail length 5001 with controlled failure", () => {
    const detail = "x".repeat(5001);
    const parsed = VisualCompositionAgentOutputSchema.safeParse(sequencePayload(detail));
    expect(parsed.success).toBe(false);
    if (!parsed.success) {
      const path = parsed.error.issues[0]?.path.join(".") ?? "";
      expect(path).toContain("detail");
    }
  });

  it("parseVisualComposition accepts long sequence detail within 5000", () => {
    const detail = "y".repeat(4500);
    const parsed = parseVisualComposition(sequencePayload(detail));
    expect(parsed).not.toBeNull();
    expect(parsed?.blocks.some((b) => b.kind === "sequence")).toBe(true);
    const seq = parsed?.blocks.find((b) => b.kind === "sequence");
    if (seq && seq.kind === "sequence") {
      expect(seq.steps[0]?.detail?.length).toBe(4500);
    }
  });

  it("optional detail remains valid when omitted", () => {
    const payload = sequencePayload("short");
    delete (payload.blocks[1] as { steps: Array<{ detail?: string }> }).steps[0].detail;
    const parsed = VisualCompositionAgentOutputSchema.safeParse(payload);
    expect(parsed.success).toBe(true);
  });

  it("relations/synthesis detail max 400 unchanged", () => {
    const relationsBlock = {
      kind: "relations" as const,
      id: "r1",
      title: "Deps",
      textAlternative: "alt",
      nodes: [
        {
          id: "n1",
          label: "A",
          kind: "fact" as const,
          detail: "z".repeat(401),
        },
      ],
      edges: [],
    };
    const bad = VisualCompositionAgentOutputSchema.safeParse({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [relationsBlock],
    });
    expect(bad.success).toBe(false);

    const ok = VisualCompositionAgentOutputSchema.safeParse({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          ...relationsBlock,
          nodes: [{ ...relationsBlock.nodes[0], detail: "z".repeat(400) }],
        },
      ],
    });
    expect(ok.success).toBe(true);
  });

  it("OBS classifies Too big ≤5000 path as SCHEMA_OR_OUTPUT", () => {
    const err = new Error(
      'Invalid output type: final assistant output failed schema validation at "visualComposition.blocks.1.steps.0.detail" (Too big: expected string to have <=5000 characters).',
    );
    err.name = "h";
    expect(categorizeProviderError(err).category).toBe("PROVIDER_SCHEMA_OR_OUTPUT");
    const d = extractProviderErrorDiagnostics(err, {
      phase: "stream_drain",
      streamingDelivered: true,
    });
    expect(d.zod_issue_path).toBe("visualComposition.blocks.1.steps.0.detail");
    expect(d.validation_rule_hint).toBe("max_length");
  });
});

describe("UAT-03 six-step rich sequence shape", () => {
  it("accepts six steps with results+vigilance-sized details", () => {
    const stepDetail =
      "Résultat attendu : prérequis validés. Vigilance : ne pas avancer sans accord métier. " +
      "x".repeat(800);
    const steps = [
      "Cadrer",
      "Prérequis",
      "Configurer",
      "Pilote",
      "Corriger",
      "Généraliser",
    ].map((title, i) => ({
      id: `s${i + 1}`,
      title,
      detail: stepDetail,
    }));
    const parsed = VisualCompositionAgentOutputSchema.safeParse({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "sequence",
          id: "seq6",
          title: "Déploiement outil métier",
          textAlternative: "Parcours en six étapes.",
          steps,
        },
      ],
    });
    expect(parsed.success).toBe(true);
    // sanity: each detail under 5000
    expect(stepDetail.length).toBeLessThanOrEqual(5000);
    expect(steps).toHaveLength(6);
  });
});
