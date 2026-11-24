/**
 * C14 — no lexical cognitive routing; semantic prepare helpers; length ≠ profile.
 */
import { describe, expect, it } from "vitest";
import { qualifyCognitiveProfile } from "@/domains/conversation/cognitive-policy";
import { createEmptyInvestigation } from "@/domains/conversation/investigation-state";
import {
  detectsCorrectiveDraftIntent,
  detectsTechnicalContractIntent,
  semanticWantsCorrectiveDraft,
  semanticWantsCursorContractPrepare,
} from "@/domains/conversation/nora-contract-bridge";
import {
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  type NoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";
import {
  assertOutboundHasNoPrivateLeak,
  executePublicWebSearch,
  __resetPublicWebOutboundLogForTests,
  __getPublicWebOutboundLogForTests,
} from "@/domains/conversation/public-web-search-frontier";

function qual(partial: Partial<NoraTurnQualification>): NoraTurnQualification {
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "QUALIFIED",
    goal: partial.goal ?? "g",
    projectIntention: "",
    desiredOutcome: "",
    initialScope: "",
    proposedProjectName: "",
    intents: partial.intents ?? [],
    clarifications: [],
    continueChoices: [],
    resourceReferences: [],
    replyDraft: "ok",
    preparationAssessment: "EXPLORING",
    preparationAssessmentExplanation: "",
    ...partial,
  };
}

describe("ML5 C14 semantic routing (no lexical decision)", () => {
  it("legacy lexical detectors always fail-closed (false)", () => {
    expect(
      detectsTechnicalContractIntent("Prépare un contrat technique pour Cursor"),
    ).toBe(false);
    expect(detectsCorrectiveDraftIntent("Corrige le brouillon dans le mandat")).toBe(
      false,
    );
  });

  it("semantic prepare from qualification intents", () => {
    const q = qual({
      intents: [
        {
          id: "p1",
          capabilityId: "d7.prepare_cursor_contract",
          mode: "PREPARE",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(semanticWantsCursorContractPrepare(q)).toBe(true);
    expect(semanticWantsCorrectiveDraft(q)).toBe(false);
  });

  it("negation / discussion about Cursor without prepare intent → no prepare", () => {
    const q = qual({
      goal: "Je ne veux surtout pas lancer Cursor ; explique seulement",
      intents: [
        {
          id: "i1",
          capabilityId: "d3.converse",
          mode: "EXPLAIN",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(semanticWantsCursorContractPrepare(q)).toBe(false);
  });

  it("correctiveDraft parameter is semantic, not keyword", () => {
    const q = qual({
      intents: [
        {
          id: "c1",
          capabilityId: "d7.prepare_cursor_contract",
          mode: "PREPARE",
          parameters: { correctiveDraft: "true" },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(semanticWantsCorrectiveDraft(q)).toBe(true);
  });

  it("length does not select investigation profile", () => {
    const short = qualifyCognitiveProfile("ok?");
    const long = qualifyCognitiveProfile("x".repeat(2000));
    expect(short.profile).toBe("analyse");
    expect(long.profile).toBe("analyse");
    expect(short.reasonCodes).toContain("BUDGET_DEFAULT_ANALYSE_NO_LENGTH_ROUTING");
    expect(createEmptyInvestigation("hi").profileHint).toBe("analyse");
    expect(createEmptyInvestigation("x".repeat(500)).profileHint).toBe("analyse");
  });

  it("WEB frontier outbound never includes private markers", async () => {
    __resetPublicWebOutboundLogForTests();
    const markers = [
      "pilot_secret_marker_c14",
      "INTERNAL_DOC_C14_PRIVATE",
      "sk-proj-fake-not-a-real-key",
    ];
    const exact = "public TypeScript handbook overview";
    const r = await executePublicWebSearch({
      explicitlyAuthorizedExactQuery: exact,
      turnAuthorizedExactQueries: [exact],
      privateContextMarkers: markers,
      env: {
        SFIA_WEB_SEARCH_ENABLED: "1",
        SFIA_WEB_SEARCH_LIVE: "0",
      },
    });
    expect(r.mode).toBe("SCRIPTED");
    expect(r.status).toBe("AVAILABLE");
    const log = __getPublicWebOutboundLogForTests();
    expect(log.length).toBe(1);
    const leak = assertOutboundHasNoPrivateLeak(log[0]!.outboundFields, markers);
    expect(leak.ok).toBe(true);
    expect(JSON.stringify(log[0]!.outboundFields)).not.toMatch(/pilot_secret|INTERNAL_DOC|sk-proj/);
  });

  it("WEB frontier blocks when private marker appears in publicTopic", async () => {
    const r = await executePublicWebSearch({
      publicTopic: "tell me about pilot_secret_marker_c14",
      privateContextMarkers: ["pilot_secret_marker_c14"],
      env: {
        SFIA_WEB_SEARCH_ENABLED: "1",
        SFIA_WEB_SEARCH_LIVE: "0",
      },
    });
    expect(r.status).toBe("DENIED");
    expect(
      r.limits.some(
        (l) =>
          l.includes("PRIVATE_LEAK") ||
          l.includes("PRIVATE_MARKER") ||
          l.includes("PROVENANCE") ||
          l.includes("leak:"),
      ),
    ).toBe(true);
  });
});
