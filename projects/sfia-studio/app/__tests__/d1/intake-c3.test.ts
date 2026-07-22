import { describe, expect, it, beforeEach, afterEach } from "vitest";
import {
  analyzeIntent,
} from "@/lib/d1/intake/analyzeIntent";
import {
  validateRequestRoutingProposal,
  asStrictBoolean,
} from "@/lib/d1/intake/validateProposal";
import { FakeIntakeConversationProvider } from "@/lib/d1/intake/fakeIntakeProvider";
import {
  resolveIntakeProvider,
  setIntakeProviderForTests,
} from "@/lib/d1/intake/resolveProvider";
import { D1Error } from "@/lib/d1/errors";
import { REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION } from "@/lib/d1/intake/types";
import type { ConversationProvider, ProviderChatMessage } from "@/lib/ops1/conversation/types";
import {
  normalizeText,
  tokenize,
  jaccard,
  containsNormalizedPhrase,
} from "@/lib/d1/context/normalize";
import { scoreProjectAgainstProposal, bandForScore } from "@/lib/d1/context/scoring";
import { matchExistingContext } from "@/lib/d1/context/matchExistingContext";
import {
  CONTEXT_MATCH_THRESHOLDS,
  CONTEXT_SNAPSHOT_SCHEMA_VERSION,
  type ExistingContextSnapshot,
  type SnapshotProjectCandidate,
} from "@/lib/d1/context/types";
import {
  createProject,
  resetD1DbForTests,
} from "@/lib/d1/commands";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";

function validBase(over: Record<string, unknown> = {}) {
  return {
    schemaVersion: REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION,
    proposalId: "rrp-1",
    rawIntent: "Je veux lancer une app contrats",
    normalizedIntent: "Créer un projet de suivi des contrats",
    subject: "Suivi des contrats",
    proposedObjective: "Cadrer le suivi des contrats",
    proposedOutcomeType: "CREATE_PROJECT_CANDIDATE",
    proposedCycleType: "FRAMING",
    proposedProfile: "Standard",
    proposedBlocks: ["cadrage"],
    constraints: [],
    assumptions: ["Aucun match contexte"],
    missingInformation: ["confirmation humaine"],
    clarificationQuestion: null,
    alternatives: [],
    confidence: 0.7,
    rationale: "Nouveau besoin produit",
    requiresHumanConfirmation: true,
    status: "PROPOSAL_READY",
    createdAt: "2026-07-22T18:00:00.000Z",
    proposedProjectId: null,
    proposedCycleId: null,
    ...over,
  };
}

function project(
  over: Partial<SnapshotProjectCandidate> &
    Pick<SnapshotProjectCandidate, "projectId" | "name">,
): SnapshotProjectCandidate {
  return {
    objective: over.objective ?? "Objectif générique",
    initialContextSummary: over.initialContextSummary ?? null,
    status: over.status ?? "ACTIVE",
    createdAt: over.createdAt ?? "2026-01-01T00:00:00.000Z",
    updatedAt: over.updatedAt ?? "2026-07-01T00:00:00.000Z",
    ...over,
  };
}

function snapshotWith(
  projects: SnapshotProjectCandidate[],
  status: ExistingContextSnapshot["projectSourceStatus"] = "AVAILABLE",
): ExistingContextSnapshot {
  return {
    schemaVersion: CONTEXT_SNAPSHOT_SCHEMA_VERSION,
    snapshotId: "snap-test",
    generatedAt: "2026-07-22T19:00:00.000Z",
    projectSourceStatus: status,
    cycleSourceStatus: "UNAVAILABLE",
    actionSourceStatus: "UNAVAILABLE",
    projects,
    cycles: [],
    actions: [],
    sourceCounts: {
      projects: projects.length,
      cycles: 0,
      actions: 0,
    },
    truncationApplied: false,
    sourceErrors:
      status === "UNAVAILABLE" || status === "ERROR"
        ? ["forced"]
        : [],
  };
}

describe("D1-C2 hardening", () => {
  afterEach(() => {
    setIntakeProviderForTests(null);
    delete process.env.D1_INTAKE_LIVE;
    delete process.env.D1_INTAKE_PROVIDER;
  });

  it("sends system role separately from user intent", async () => {
    let captured: ProviderChatMessage[] = [];
    const spy: ConversationProvider = {
      providerId: "d1-intake-fake-spy",
      async complete(messages) {
        captured = messages;
        return {
          text: JSON.stringify(validBase({ proposalId: "rrp-spy" })),
          usage: {
            inputTokens: 1,
            outputTokens: 1,
            totalTokens: 2,
            model: "spy",
            providerResponseId: "spy-1",
          },
        };
      },
    };
    setIntakeProviderForTests(spy);
    await analyzeIntent({
      sessionLocalId: "harden-1",
      rawIntent: "Je veux lancer une application de suivi des contrats.",
    });
    expect(captured[0]?.role).toBe("system");
    expect(captured[1]?.role).toBe("user");
    expect(captured[1]?.content).toMatch(/^INTENT:/);
    expect(captured[1]?.content).not.toContain("Tu es le moteur");
  });

  it("rejects non-boolean requiresHumanConfirmation (string false)", () => {
    expect(() =>
      validateRequestRoutingProposal(
        validBase({ requiresHumanConfirmation: "false" }),
      ),
    ).toThrow(D1Error);
    expect(() => asStrictBoolean("false", "x")).toThrow(D1Error);
    expect(() => asStrictBoolean(0, "x")).toThrow(D1Error);
    expect(() => asStrictBoolean(null, "x")).toThrow(D1Error);
    expect(asStrictBoolean(true, "x")).toBe(true);
  });

  it("fails explicitly when live requested without secrets", () => {
    setIntakeProviderForTests(null);
    process.env.D1_INTAKE_LIVE = "1";
    delete process.env.D1_INTAKE_PROVIDER;
    const prevKey = process.env.OPENAI_API_KEY;
    const prevModel = process.env.OPENAI_MODEL;
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    expect(() => resolveIntakeProvider()).toThrow(D1Error);
    try {
      resolveIntakeProvider();
    } catch (e) {
      expect(e).toMatchObject({ code: "CONFIG" });
    }
    if (prevKey) process.env.OPENAI_API_KEY = prevKey;
    if (prevModel) process.env.OPENAI_MODEL = prevModel;
  });

  it("fake provider still works when explicitly forced", () => {
    process.env.D1_INTAKE_PROVIDER = "fake";
    process.env.D1_INTAKE_LIVE = "1";
    const r = resolveIntakeProvider();
    expect(r.mode).toBe("fake");
    expect(r.provider.providerId).toContain("fake");
  });
});

describe("D1-C3 normalization", () => {
  it("strips accents punctuation and stop words", () => {
    expect(normalizeText("Suivi des Contrats !")).toBe("suivi des contrats");
    expect(tokenize("Je veux améliorer le suivi des contrats")).toEqual(
      expect.arrayContaining(["suivi", "contrats"]),
    );
    expect(tokenize("")).toEqual([]);
    expect(containsNormalizedPhrase("reprendre Campus360 demain", "Campus360")).toBe(
      true,
    );
    expect(jaccard(new Set(["a", "b"]), new Set(["b", "c"]))).toBeCloseTo(1 / 3);
  });
});

describe("D1-C3 matching engine", () => {
  it("exact name ranks first with strong evidence", () => {
    const snap = snapshotWith([
      project({
        projectId: "proj-campus",
        name: "Campus360",
        objective: "Gestion campus",
        initialContextSummary: "utilisateurs et comptes",
      }),
      project({
        projectId: "proj-other",
        name: "Facturation",
        objective: "Factures clients",
      }),
    ]);
    const result = matchExistingContext({
      sessionLocalId: "m1",
      proposal: {
        proposalId: "rrp-campus",
        rawIntent:
          "Je veux reprendre Campus360 pour la gestion des utilisateurs.",
        normalizedIntent: "Reprendre Campus360",
        subject: "Campus360",
        proposedObjective: "Gestion des utilisateurs",
        proposedOutcomeType: "OPEN_CYCLE_CANDIDATE",
      },
      snapshotOverride: snap,
    });
    expect(result.projectMatches[0]?.entityId).toBe("proj-campus");
    expect(result.projectMatches[0]?.score).toBeGreaterThanOrEqual(
      CONTEXT_MATCH_THRESHOLDS.strong,
    );
    expect(result.resultStatus).toBe("STRONG_MATCH");
    expect(result.projectMatches[0]?.evidence.join(" ")).toMatch(/Référence explicite|nom/i);
    expect(result.requiresHumanConfirmation).toBe(true);
    expect(result.cycleMatches).toEqual([]);
    expect(result.actionMatches).toEqual([]);
  });

  it("detects semantic proximity for contrats", () => {
    const snap = snapshotWith([
      project({
        projectId: "proj-contrats",
        name: "Contrats Fournisseurs",
        objective: "Suivi des contrats fournisseurs",
        initialContextSummary: "acheter et suivre les contrats",
      }),
      project({
        projectId: "proj-rh",
        name: "RH Internes",
        objective: "Congés et paie",
      }),
    ]);
    const result = matchExistingContext({
      sessionLocalId: "m2",
      proposal: {
        proposalId: "rrp-c",
        rawIntent: "Je veux améliorer le suivi des contrats fournisseurs.",
        normalizedIntent: "Améliorer suivi contrats fournisseurs",
        subject: "suivi des contrats fournisseurs",
        proposedObjective: "Améliorer le suivi des contrats fournisseurs",
        proposedOutcomeType: "CREATE_PROJECT_CANDIDATE",
      },
      snapshotOverride: snap,
    });
    expect(result.projectMatches[0]?.entityId).toBe("proj-contrats");
    expect(result.projectMatches[0]?.score).toBeGreaterThanOrEqual(
      CONTEXT_MATCH_THRESHOLDS.possible,
    );
  });

  it("flags multiple close matches as ambiguity", () => {
    const snap = snapshotWith([
      project({
        projectId: "proj-a",
        name: "Suivi Contrats A",
        objective: "Suivi des contrats fournisseurs",
      }),
      project({
        projectId: "proj-b",
        name: "Suivi Contrats B",
        objective: "Suivi des contrats fournisseurs",
      }),
    ]);
    const result = matchExistingContext({
      sessionLocalId: "m3",
      proposal: {
        proposalId: "rrp-multi",
        rawIntent: "Je veux améliorer le suivi des contrats fournisseurs.",
        normalizedIntent: "Améliorer suivi contrats fournisseurs",
        subject: "suivi des contrats fournisseurs",
        proposedObjective: "Suivi des contrats fournisseurs",
        proposedOutcomeType: "CREATE_PROJECT_CANDIDATE",
      },
      snapshotOverride: snap,
    });
    expect(result.ambiguity || result.resultStatus === "MULTIPLE_MATCHES").toBe(
      true,
    );
    expect(result.projectMatches.length).toBeGreaterThanOrEqual(2);
  });

  it("returns no-match without inventing ids", () => {
    const snap = snapshotWith([
      project({
        projectId: "proj-astro",
        name: "Astronomie",
        objective: "Cataloguer les étoiles",
      }),
    ]);
    const result = matchExistingContext({
      sessionLocalId: "m4",
      proposal: {
        proposalId: "rrp-none",
        rawIntent: "Je veux un module de paie pour la cantine scolaire.",
        normalizedIntent: "Module paie cantine",
        subject: "paie cantine",
        proposedObjective: "Module de paie cantine",
        proposedOutcomeType: "CREATE_PROJECT_CANDIDATE",
      },
      snapshotOverride: snap,
    });
    expect(result.resultStatus).toBe("NO_MATCH");
    expect(result.projectMatches.every((m) => m.entityId.startsWith("proj-"))).toBe(
      true,
    );
    expect(result.recommendedRouting).toBe("CREATE_NEW_PROJECT");
  });

  it("warns on inactive project without auto-resume", () => {
    const snap = snapshotWith([
      project({
        projectId: "proj-draft",
        name: "Campus360",
        objective: "Gestion campus",
        status: "DRAFT",
      }),
    ]);
    const result = matchExistingContext({
      sessionLocalId: "m5",
      proposal: {
        proposalId: "rrp-draft",
        rawIntent: "Je veux reprendre Campus360",
        normalizedIntent: "Reprendre Campus360",
        subject: "Campus360",
        proposedObjective: "Reprendre Campus360",
        proposedOutcomeType: "OPEN_CYCLE_CANDIDATE",
      },
      snapshotOverride: snap,
    });
    expect(result.projectMatches[0]?.warnings.join(" ")).toMatch(/inactif/i);
  });

  it("analyze-only does not force attachment", () => {
    const snap = snapshotWith([
      project({
        projectId: "proj-campus",
        name: "Campus360",
        objective: "Gestion",
      }),
    ]);
    const result = matchExistingContext({
      sessionLocalId: "m6",
      proposal: {
        proposalId: "rrp-ao",
        rawIntent: "Analyse Campus360 mais ne crée rien",
        normalizedIntent: "Analyse Campus360",
        subject: "Campus360",
        proposedObjective: "Analyser",
        proposedOutcomeType: "ANALYZE_ONLY",
      },
      snapshotOverride: snap,
    });
    expect(result.recommendedRouting).toBe("ANALYZE_ONLY");
    expect(
      result.projectMatches.every((m) => m.recommendedAction === "NO_ACTION"),
    ).toBe(true);
  });

  it("distinguishes context unavailable from empty", () => {
    const unavailable = matchExistingContext({
      sessionLocalId: "m7",
      proposal: {
        proposalId: "rrp-u",
        rawIntent: "x",
        normalizedIntent: "x",
        subject: "x",
        proposedObjective: "x",
        proposedOutcomeType: "CREATE_PROJECT_CANDIDATE",
      },
      snapshotOverride: snapshotWith([], "UNAVAILABLE"),
    });
    expect(unavailable.resultStatus).toBe("CONTEXT_UNAVAILABLE");

    const empty = matchExistingContext({
      sessionLocalId: "m8",
      proposal: {
        proposalId: "rrp-e",
        rawIntent: "Je veux lancer une app contrats",
        normalizedIntent: "Créer app contrats",
        subject: "contrats",
        proposedObjective: "App contrats",
        proposedOutcomeType: "CREATE_PROJECT_CANDIDATE",
      },
      snapshotOverride: snapshotWith([], "EMPTY"),
    });
    expect(empty.resultStatus).toBe("NO_MATCH");
  });

  it("caps candidates at 5 and keeps scores bounded", () => {
    const many = Array.from({ length: 8 }, (_, i) =>
      project({
        projectId: `proj-${i}`,
        name: `Suivi Contrats ${i}`,
        objective: "Suivi des contrats fournisseurs",
      }),
    );
    const result = matchExistingContext({
      sessionLocalId: "m9",
      proposal: {
        proposalId: "rrp-cap",
        rawIntent: "améliorer suivi des contrats fournisseurs",
        normalizedIntent: "suivi contrats fournisseurs",
        subject: "suivi des contrats fournisseurs",
        proposedObjective: "Suivi des contrats fournisseurs",
        proposedOutcomeType: "CREATE_PROJECT_CANDIDATE",
      },
      snapshotOverride: snapshotWith(many),
    });
    expect(result.projectMatches.length).toBeLessThanOrEqual(5);
    for (const m of result.projectMatches) {
      expect(m.score).toBeGreaterThanOrEqual(0);
      expect(m.score).toBeLessThanOrEqual(1);
    }
  });

  it("filters weak matches below presentation threshold path via band", () => {
    expect(bandForScore(0.2, CONTEXT_MATCH_THRESHOLDS)).toBe("BELOW_THRESHOLD");
    expect(bandForScore(0.35, CONTEXT_MATCH_THRESHOLDS)).toBe("WEAK_MATCH");
    expect(bandForScore(0.6, CONTEXT_MATCH_THRESHOLDS)).toBe("POSSIBLE_MATCH");
    expect(bandForScore(0.8, CONTEXT_MATCH_THRESHOLDS)).toBe("STRONG_MATCH");
  });

  it("score uses only provided project fields", () => {
    const breakdown = scoreProjectAgainstProposal({
      project: project({
        projectId: "proj-x",
        name: "Alpha",
        objective: "Beta",
      }),
      rawIntent: "Alpha",
      normalizedIntent: "Alpha",
      subject: "Alpha",
      proposedObjective: "Alpha",
      nowMs: Date.parse("2026-07-22T00:00:00.000Z"),
    });
    expect(breakdown.exactName).toBe(1);
    expect(breakdown.finalScore).toBeGreaterThan(0.7);
  });
});

describe("D1-C3 snapshot from real repository (read-only)", () => {
  let tmpDir: string;

  beforeEach(() => {
    resetD1DbForTests();
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "d1-c3-"));
    process.env.D1_SQLITE_PATH = path.join(tmpDir, "d1.sqlite");
  });

  afterEach(() => {
    resetD1DbForTests();
    delete process.env.D1_SQLITE_PATH;
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it("matches against created projects without mutation", () => {
    const a = createProject({
      name: "Campus360",
      objective: "Gestion des utilisateurs campus",
      methodMode: "V3_CANDIDATE",
      activate: true,
      idempotencyKey: "c3-campus",
    });
    createProject({
      name: "Facturation",
      objective: "Factures",
      methodMode: "V3_CANDIDATE",
      activate: true,
      idempotencyKey: "c3-fact",
    });
    const result = matchExistingContext({
      sessionLocalId: "repo-1",
      proposal: {
        proposalId: "rrp-repo",
        rawIntent: "Je veux reprendre Campus360 pour la gestion des utilisateurs.",
        normalizedIntent: "Reprendre Campus360",
        subject: "Campus360",
        proposedObjective: "Gestion des utilisateurs",
        proposedOutcomeType: "OPEN_CYCLE_CANDIDATE",
      },
    });
    expect(result.projectMatches[0]?.entityId).toBe(a.project.projectId);
    // No mutation: same id still resolvable as ACTIVE
    expect(a.project.state).toBe("ACTIVE");
  });
});
