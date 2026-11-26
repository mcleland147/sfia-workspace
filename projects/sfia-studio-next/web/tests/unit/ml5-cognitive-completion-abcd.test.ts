/**
 * ML5 targeted A/B/C/D — semantic qualification, source identity,
 * capitalisation, intelligent termination. No 50-source campaign.
 */
import { describe, expect, it } from "vitest";
import {
  canonicalSourcePathKey,
  createEmptyInvestigation,
  normalizeConclusionKey,
  upsertConclusion,
} from "@/domains/conversation/investigation-state";
import {
  inventoryResolvedCount,
  mergeInvestigationFromReply,
  semanticContinueWork,
} from "@/domains/conversation/run-nora-cognitive-turn";
import { evaluateGlobalResourceEnvelope } from "@/domains/conversation/cognitive-work";
import type { NoraGenerateResult } from "@/domains/conversation/nora-adapter";
import type { NoraTurnQualification } from "@/domains/conversation/semantic-qualification";

function reply(
  q: Partial<NoraTurnQualification>,
  extras?: Partial<NoraGenerateResult>,
): NoraGenerateResult {
  return {
    content: "ok",
    status: "COMPLETE",
    generationId: "g1",
    mode: "deterministic-fixture",
    policy: {} as NoraGenerateResult["policy"],
    modelRequested: "gpt-6.2-sol",
    modelApplied: null,
    effortRequested: "medium",
    effortApplied: null,
    attempts: [],
    toolCallsObserved: 0,
    d4CharsReturned: 0,
    observedToolSources: extras?.observedToolSources ?? [],
    qualification: {
      schemaVersion: "1",
      status: "QUALIFIED",
      goal: "g",
      desiredOutcome: "o",
      intents: [],
      determiningQuestions: [],
      ...q,
    } as NoraTurnQualification,
    ...extras,
  } as NoraGenerateResult;
}

describe("A — semantic qualification (no lexical mission routing)", () => {
  it("persists next-segment resource proposals for continuity admission", () => {
    const userText = "Poursuis l'analyse avec une ressource adaptée.";
    const merged = mergeInvestigationFromReply(
      createEmptyInvestigation(userText),
      reply({
        workDisposition: "CONTINUE",
        proposedCognitiveModel: "gpt-6.1-terra",
        proposedCognitiveEffort: "high",
      }),
      userText,
    );
    expect(merged.proposedCognitiveModel).toBe("gpt-6.1-terra");
    expect(merged.proposedCognitiveEffort).toBe("high");

    const held = mergeInvestigationFromReply(
      merged,
      reply({ workDisposition: "CONTINUE" }),
      userText,
    );
    expect(held.proposedCognitiveModel).toBeNull();
    expect(held.proposedCognitiveEffort).toBeNull();
  });

  it("does not invent EXHAUSTIVE mode from the digit 50 alone", () => {
    const userText =
      "Le ticket #50 mentionne une règle de gouvernance; résume-la brièvement.";
    const merged = mergeInvestigationFromReply(
      createEmptyInvestigation(userText),
      reply({
        cognitiveProfileHint: "simple",
        investigationMode: "TARGETED",
        workDisposition: "COMPLETE",
        investigationSufficiency: "SUFFICIENT",
      }),
      userText,
    );
    expect(merged.investigationMode).toBe("TARGETED");
    expect(merged.inventoryTotal == null || merged.inventoryTotal < 50).toBe(true);
    expect(merged.profileHint).toBe("simple");
  });

  it("honours EXHAUSTIVE from structured qualification without keyword density", () => {
    const userText =
      "Parcours le jeu de documents de ce dépôt et compare les responsabilités.";
    const prior = createEmptyInvestigation(userText);
    prior.inventoryKeys = [
      "docs/a/policy.md",
      "docs/b/policy.md",
      "docs/c/roles.md",
    ];
    prior.inventoryTotal = 3;
    const merged = mergeInvestigationFromReply(
      prior,
      reply({
        cognitiveProfileHint: "investigation",
        investigationMode: "EXHAUSTIVE",
        workDisposition: "CONTINUE",
        investigationSufficiency: "INSUFFICIENT",
      }),
      userText,
    );
    expect(merged.investigationMode).toBe("EXHAUSTIVE");
    expect(merged.inventoryTotal).toBe(3);
    expect(merged.profileHint).toBe("investigation");
  });

  it("stops on SUFFICIENT even when disposition was CONTINUE is not required", () => {
    const inv = createEmptyInvestigation("synthèse");
    inv.sufficiency = "SUFFICIENT";
    expect(
      semanticContinueWork(
        {
          status: "QUALIFIED",
          workDisposition: "COMPLETE",
          investigationSufficiency: "SUFFICIENT",
          goal: "g",
          desiredOutcome: "o",
          intents: [],
          determiningQuestions: [],
        } as unknown as NoraTurnQualification,
        inv,
        reply({ workDisposition: "COMPLETE", investigationSufficiency: "SUFFICIENT" }),
      ),
    ).toBe(false);
  });
});

describe("B — canonical source identity and coverage", () => {
  it("distinguishes same basename under different directories", () => {
    const a = canonicalSourcePathKey(
      "git-file:org/repo:migrations/0001/migration.sql@abc1234",
    );
    const b = canonicalSourcePathKey(
      "git-file:org/repo:migrations/0002/migration.sql@abc1234",
    );
    expect(a).toBe("migrations/0001/migration.sql");
    expect(b).toBe("migrations/0002/migration.sql");
    expect(a).not.toBe(b);
  });

  it("counts CONSULTED/VERIFIED as examined; PARTIAL and DENIED separately", () => {
    const userText = [
      "Examine:",
      "docs/alpha/readme.md",
      "docs/beta/readme.md",
      "docs/gamma/notes.md",
    ].join("\n");
    const prior = createEmptyInvestigation(userText);
    prior.investigationMode = "TARGETED";
    const merged = mergeInvestigationFromReply(
      prior,
      reply(
        {
          investigationMode: "TARGETED",
          workDisposition: "CONTINUE",
          goal: "Couverture",
          desiredOutcome: "Synthèse",
        },
        {
          observedToolSources: [
            {
              kind: "GIT",
              ref: "git-file:org/r:docs/alpha/readme.md@deadbeef",
              title: "readme",
              coverage: "CONSULTED",
            },
            {
              kind: "GIT",
              ref: "git-file:org/r:docs/beta/readme.md@deadbeef",
              title: "readme",
              coverage: "PARTIAL",
            },
            {
              kind: "GIT",
              ref: "git-file:org/r:docs/gamma/notes.md@deadbeef",
              title: "notes",
              coverage: "DENIED",
            },
          ],
        },
      ),
      userText,
    );
    expect(merged.inventoryKeys?.length).toBe(3);
    expect(merged.inventoryExamined).toBe(1);
    expect(merged.inventoryPartial).toBe(1);
    expect(merged.inventoryDenied).toBe(1);
    expect(inventoryResolvedCount(merged)).toBe(2);
    // Same basename must not collapse alpha/beta.
    expect(merged.inventoryExamined).not.toBe(2);
  });

  it("does not grow a frozen perimeter from extra discoveries", () => {
    const userText = ["docs/a.md", "docs/b.md"].join("\n");
    const prior = createEmptyInvestigation(userText);
    prior.inventoryKeys = ["docs/a.md", "docs/b.md"];
    prior.inventoryTotal = 2;
    prior.investigationMode = "EXHAUSTIVE";
    const merged = mergeInvestigationFromReply(
      prior,
      reply(
        { investigationMode: "EXHAUSTIVE", workDisposition: "CONTINUE" },
        {
          observedToolSources: [
            {
              kind: "GIT",
              ref: "git-file:org/r:docs/a.md@1",
              title: "a",
              coverage: "CONSULTED",
            },
            {
              kind: "GIT",
              ref: "git-file:org/r:docs/b.md@1",
              title: "b",
              coverage: "CONSULTED",
            },
            {
              kind: "GIT",
              ref: "git-file:org/r:docs/surprise.md@1",
              title: "surprise",
              coverage: "DISCOVERED",
            },
          ],
        },
      ),
      userText,
    );
    expect(merged.inventoryTotal).toBe(2);
    expect(merged.inventoryExamined).toBe(2);
  });
});

describe("C — capitalisation", () => {
  it("dedupes near-identical conclusions without dropping a real contradiction nuance", () => {
    let list: string[] = [];
    list = upsertConclusion(
      list,
      "La responsabilité de validation appartient au Pilote métier.",
    );
    list = upsertConclusion(
      list,
      "la responsabilite de validation appartient au pilote metier",
    );
    list = upsertConclusion(
      list,
      "La responsabilité de validation appartient au comité technique — contradiction ouverte.",
    );
    expect(list).toHaveLength(2);
    expect(normalizeConclusionKey(list[0]!)).not.toBe(
      normalizeConclusionKey(list[1]!),
    );
  });
});

describe("D — termination and restitution reserve", () => {
  it("soft-stops to preserve restitution headroom without claiming mid-SDK interrupt", () => {
    const env = {
      SFIA_COGNITIVE_MAX_TOKENS: "100000",
      SFIA_COGNITIVE_REEVAL_TOKENS: "50000",
      SFIA_COGNITIVE_MAX_SEGMENTS: "120",
    };
    const soft = evaluateGlobalResourceEnvelope(
      {
        inputTokens: 80_000,
        outputTokens: 0,
        segmentCalls: 2,
        webCalls: 0,
        durationMs: 1,
        limits: [],
      },
      env,
      { reserveForRestitution: 24_000, projectedNextSegmentTokens: 30_000 },
    );
    expect(soft.ok).toBe(false);
    expect(soft.softStop).toBe(true);

    // Same budget, restitution phase (reserve=0, smaller projection) must be usable.
    const restitution = evaluateGlobalResourceEnvelope(
      {
        inputTokens: 80_000,
        outputTokens: 0,
        segmentCalls: 2,
        webCalls: 0,
        durationMs: 1,
        limits: ["RESTITUTION_PHASE"],
      },
      env,
      { reserveForRestitution: 0, projectedNextSegmentTokens: 12_000 },
    );
    expect(restitution.ok).toBe(true);
  });

  it("flags 1M reevaluation without suspending", () => {
    const env = {
      SFIA_COGNITIVE_MAX_TOKENS: "2000000",
      SFIA_COGNITIVE_REEVAL_TOKENS: "1000000",
      SFIA_COGNITIVE_MAX_SEGMENTS: "120",
    };
    const mid = evaluateGlobalResourceEnvelope(
      {
        inputTokens: 1_100_000,
        outputTokens: 0,
        segmentCalls: 5,
        webCalls: 0,
        durationMs: 1,
        limits: [],
      },
      env,
      { reserveForRestitution: 24_000, projectedNextSegmentTokens: 30_000 },
    );
    expect(mid.ok).toBe(true);
    expect(mid.reevaluationNeeded).toBe(true);
  });

  it("DENIED counts toward perimeter resolution (no infinite retry)", () => {
    const inv = createEmptyInvestigation("périmètre");
    inv.inventoryTotal = 3;
    inv.inventoryExamined = 2;
    inv.inventoryDenied = 1;
    inv.inventoryPartial = 0;
    expect(inventoryResolvedCount(inv)).toBe(3);
    expect(
      semanticContinueWork(
        {
          status: "QUALIFIED",
          workDisposition: "COMPLETE",
          investigationSufficiency: "SUFFICIENT",
          goal: "g",
          desiredOutcome: "o",
          intents: [],
          determiningQuestions: [],
        } as unknown as NoraTurnQualification,
        inv,
        reply({
          workDisposition: "COMPLETE",
          investigationSufficiency: "SUFFICIENT",
        }),
      ),
    ).toBe(false);
  });
});
