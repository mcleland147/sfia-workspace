/** @vitest-environment node */
/**
 * MW3 epistemic-boundary correction — C17–C24 hostile CRIT-04 / CRIT-05.
 * Fake provider + OA Evidence eligibility. ZERO REAL OpenAI.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import {
  F2_INTENT_JSON_SCHEMA,
  parseContradictionCandidate,
  validateIntentAnalysisPayload,
} from "@/features/project-assistant/f2/intentAnalysis";
import {
  mapOaEvidenceForProject,
  resolveAvailableContradictionPointers,
  setMw3AvailableEvidenceForTests,
} from "@/features/project-assistant/mw3AvailableEvidence";
import {
  deriveMw3ContradictionAssessment,
  MW3_STUDIO_FRESHNESS_MATTERS,
  MW3_STUDIO_REQUIRED_SOURCE_COUNT,
} from "@/lib/nora-cognitive-runtime";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { SemanticCognitiveWorkloadAssessment } from "@/features/project-assistant/f2/types";
import type { Mw3ContradictionCandidateSignal } from "@/lib/nora-cognitive-runtime/deriveMw3Assessment";
import type { Evidence } from "@/lib/oa/evidence-review/domain/types";
import { EVIDENCE_SCHEMA_VERSION } from "@/lib/oa/evidence-review/domain/types";
import { OA_SCHEMA_VERSION } from "@/lib/oa/doctrine/domain/types";

const tempDirs: string[] = [];

const ACTOR = {
  actorId: "actor:morris",
  role: "decision_maker" as const,
  authorityLevel: "N3" as const,
};

function mediumCwp(): SemanticCognitiveWorkloadAssessment {
  return {
    ambiguity: "medium",
    reasoningDepth: "high",
    sourceBreadth: "medium",
    toolDependency: "medium",
    contradictionRisk: "high",
    verificationNeed: "high",
  };
}

function baseCandidate(
  overrides: Partial<Mw3ContradictionCandidateSignal> = {},
): Mw3ContradictionCandidateSignal {
  return {
    conflictPresent: true,
    claimedEvidenceIds: [],
    governingPremise: "FinOps freeze must hold",
    governingPremiseInvalidated: false,
    localImpactOnly: true,
    fabricationAttempt: false,
    ...overrides,
  };
}

function catalogEvidence(input: {
  evidenceId: string;
  source: string;
  projectId?: string | null;
  freshness?: Evidence["freshness"];
  status?: Evidence["status"];
}): Evidence {
  return {
    schemaVersion: EVIDENCE_SCHEMA_VERSION,
    evidenceId: input.evidenceId,
    type: "artifact",
    source: input.source,
    sourceKind: "external",
    producedAt: "2026-09-02T12:00:00.000Z",
    freshness: input.freshness ?? "fresh",
    status: input.status ?? "available",
    classification: "internal",
    storageMode: "metadata_only",
    availability: "available",
    bindings:
      input.projectId === null
        ? { cycleInstanceId: "cyc:unbound-mw3" }
        : { projectId: input.projectId },
    containsSecrets: false,
    provenance: {
      schemaVersion: OA_SCHEMA_VERSION,
      provenanceRecordId: `prv:${input.evidenceId}`,
      actor: ACTOR,
      source: "system",
      timestamp: "2026-09-02T12:00:00.000Z",
      correlationId: `cor:${input.evidenceId}`,
    },
    version: 1,
    createdAt: "2026-09-02T12:00:00.000Z",
  };
}

function intentJson(
  candidate: Record<string, unknown>,
  cwp: SemanticCognitiveWorkloadAssessment = mediumCwp(),
): string {
  return JSON.stringify({
    intentClass: "informative",
    candidateCycleTypeId: null,
    signals: null,
    cognitiveWorkload: cwp,
    contradictionCandidate: candidate,
    objective: "Analyse contradiction",
    scope: null,
    rephrasedRequest: "Évaluer le conflit annoncé",
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
  });
}

function fakeFor(candidate: Record<string, unknown>) {
  return new FakeConversationProvider({
    scripted: [intentJson(candidate)],
    toolScript: [
      {
        kind: "message",
        text: "[TEST/FAKE] Nora informative reply. AUCUNE EXÉCUTION.",
      },
    ],
  });
}

describe("MW3 epistemic boundary — C17–C24 / mapping", () => {
  const prevReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
  const prevProvider = process.env.OPS1_CONVERSATION_PROVIDER;
  const prevKey = process.env.OPENAI_API_KEY;
  const prevModel = process.env.OPENAI_MODEL;

  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.OPENAI_MODEL = "gpt-5.6-luna";
    delete process.env.OPENAI_API_KEY;
    resetRuntimeApplicationServiceForTests();
    setConversationProviderForTests(null);
    setMw3AvailableEvidenceForTests(null);
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    setMw3AvailableEvidenceForTests(null);
    if (prevReset === undefined) delete process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
    else process.env.SFIA_V2_RUNTIME_ALLOW_RESET = prevReset;
    if (prevProvider === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = prevProvider;
    if (prevKey === undefined) delete process.env.OPENAI_API_KEY;
    else process.env.OPENAI_API_KEY = prevKey;
    if (prevModel === undefined) delete process.env.OPENAI_MODEL;
    else process.env.OPENAI_MODEL = prevModel;
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
  });

  async function createProject(name = "MW3 epistemic"): Promise<string> {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw3-epist-"));
    tempDirs.push(dir);
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
    });
    const created = await runtime.createProject({
      name,
      objective: "Epistemic boundary",
      context: "Deterministic Fake + OA Evidence",
      criticality: "STANDARD",
      constraints: ["LECTURE SEULE"],
      shortReference: "MW3E",
      idempotencyKey: `idem:mw3e-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("setup failed");
    return created.projectId;
  }

  async function registerOaEvidence(input: {
    evidenceId: string;
    source: string;
    bindings: Evidence["bindings"];
    freshness?: Evidence["freshness"];
  }): Promise<Evidence> {
    const runtime = getRuntimeApplicationService();
    const services = runtime.oa?.evidenceReviewServices;
    if (!services) throw new Error("OA Evidence services required");
    const result = await services.registerEvidence.execute({
      evidenceId: input.evidenceId,
      idempotencyKey: `idem:${input.evidenceId}`,
      actor: ACTOR,
      type: "artifact",
      source: input.source,
      sourceKind: "external",
      bindings: input.bindings,
      classification: "internal",
      storageMode: "metadata_only",
      freshness: input.freshness ?? "fresh",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(`register ${input.evidenceId} failed`);
    return result.evidence;
  }

  it("parser — legacy policy fields cannot influence Studio assessment", () => {
    const parsed = parseContradictionCandidate({
      conflictPresent: true,
      claimedEvidenceIds: ["ev:1"],
      requiredDomains: [],
      requiredSourceCount: 1,
      freshnessMatters: false,
      governingPremise: "FinOps freeze must hold",
      governingPremiseInvalidated: true,
      localImpactOnly: true,
      fabricationAttempt: false,
    });
    expect(parsed).toMatchObject({
      conflictPresent: true,
      claimedEvidenceIds: ["ev:1"],
      governingPremise: "FinOps freeze must hold",
      governingPremiseInvalidated: true,
      localImpactOnly: true,
    });
    expect(parsed).not.toHaveProperty("requiredSourceCount");
    expect(parsed).not.toHaveProperty("freshnessMatters");
    expect(parsed).not.toHaveProperty("requiredDomains");
    expect(
      Object.prototype.hasOwnProperty.call(parsed, "requiredSourceCount"),
    ).toBe(false);

    const schema = JSON.stringify(F2_INTENT_JSON_SCHEMA);
    expect(schema).not.toContain("requiredSourceCount");
    expect(schema).not.toContain("freshnessMatters");
    expect(schema).not.toContain("requiredDomains");

    const analysis = validateIntentAnalysisPayload(
      JSON.parse(
        intentJson({
          conflictPresent: true,
          claimedEvidenceIds: ["ev:1"],
          requiredSourceCount: 1,
          freshnessMatters: false,
          requiredDomains: ["convenient"],
          governingPremise: "x",
          governingPremiseInvalidated: false,
          localImpactOnly: true,
          fabricationAttempt: false,
        }),
      ),
    );
    const derived = deriveMw3ContradictionAssessment({
      candidate: analysis.contradictionCandidate!,
      availablePointers: [
        {
          evidenceId: "ev:1",
          sourceId: "src:a",
          domain: "prj:current",
          freshness: "fresh",
          attributable: true,
        },
      ],
      projectId: "prj:current",
    });
    expect(derived?.conflict.requiredSourceCount).toBe(
      MW3_STUDIO_REQUIRED_SOURCE_COUNT,
    );
    expect(derived?.conflict.freshnessMatters).toBe(MW3_STUDIO_FRESHNESS_MATTERS);
    expect(derived?.conflict.requiredDomains).toEqual(["prj:current"]);
  });

  it("mapOaEvidenceForProject — same-project maps; cross-project/unbound rejected", () => {
    const current = "prj:alpha";
    const ok = mapOaEvidenceForProject(
      catalogEvidence({
        evidenceId: "ev:ok",
        source: "src:a",
        projectId: current,
      }),
      current,
    );
    expect(ok).toMatchObject({
      evidenceId: "ev:ok",
      sourceId: "src:a",
      domain: current,
      freshness: "fresh",
      attributable: true,
    });

    expect(
      mapOaEvidenceForProject(
        catalogEvidence({
          evidenceId: "ev:other",
          source: "src:a",
          projectId: "prj:beta",
        }),
        current,
      ),
    ).toBeNull();

    expect(
      mapOaEvidenceForProject(
        catalogEvidence({
          evidenceId: "ev:unbound",
          source: "src:a",
          projectId: null,
        }),
        current,
      ),
    ).toBeNull();

    const blank = catalogEvidence({
      evidenceId: "ev:blank",
      source: "src:a",
      projectId: current,
    });
    blank.bindings.projectId = "   ";
    expect(mapOaEvidenceForProject(blank, current)).toBeNull();
  });

  it("C17 — model source-count downgrade cannot promote one source", async () => {
    const projectId = await createProject();
    setMw3AvailableEvidenceForTests({
      projectId,
      evidence: [
        catalogEvidence({
          evidenceId: "ev:1",
          source: "src:a",
          projectId,
        }),
      ],
    });
    setConversationProviderForTests(
      fakeFor({
        ...baseCandidate({ claimedEvidenceIds: ["ev:1"] }),
        requiredSourceCount: 1,
      }),
    );
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Downgrade source count.",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("C17 failed");
    expect(result.mw3?.disposition).toBe("candidate");
    expect(result.mw3?.cognitiveStop).toBe(false);
    expect(result.status).not.toBe("cognitive_stop");
    expect(result.mw3?.insufficiencyReasons).toContain(
      "insufficient_source_coverage",
    );
  });

  it("C18 — model cannot disable freshness; stale stays candidate", async () => {
    const projectId = await createProject();
    setMw3AvailableEvidenceForTests({
      projectId,
      evidence: [
        catalogEvidence({
          evidenceId: "ev:1",
          source: "src:a",
          projectId,
          freshness: "stale",
        }),
        catalogEvidence({
          evidenceId: "ev:2",
          source: "src:b",
          projectId,
          freshness: "unknown",
        }),
      ],
    });
    setConversationProviderForTests(
      fakeFor({
        ...baseCandidate({ claimedEvidenceIds: ["ev:1", "ev:2"] }),
        freshnessMatters: false,
      }),
    );
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Bypass freshness.",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("C18 failed");
    expect(result.mw3?.disposition).toBe("candidate");
    expect(result.mw3?.cognitiveStop).toBe(false);
    expect(result.status).not.toBe("cognitive_stop");
  });

  it("C19 — model cannot choose a convenient domain for out-of-project Evidence", async () => {
    const projectId = await createProject();
    setMw3AvailableEvidenceForTests({
      projectId,
      evidence: [
        catalogEvidence({
          evidenceId: "ev:1",
          source: "src:a",
          projectId: "prj:other-context",
        }),
        catalogEvidence({
          evidenceId: "ev:2",
          source: "src:b",
          projectId: "prj:other-context",
        }),
      ],
    });
    setConversationProviderForTests(
      fakeFor({
        ...baseCandidate({ claimedEvidenceIds: ["ev:1", "ev:2"] }),
        requiredDomains: ["project", "governance"],
      }),
    );
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Convenient domain bypass.",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("C19 failed");
    expect(result.mw3?.disposition).toBe("candidate");
    expect(result.mw3?.cognitiveStop).toBe(false);
    expect(result.status).not.toBe("cognitive_stop");
  });

  it("C20 — cross-project OA Evidence is rejected", async () => {
    const projectA = await createProject("Project A");
    await registerOaEvidence({
      evidenceId: "ev:cross-1",
      source: "src:a",
      bindings: { projectId: "prj:other-project-b" },
    });
    await registerOaEvidence({
      evidenceId: "ev:cross-2",
      source: "src:b",
      bindings: { projectId: "prj:other-project-b" },
    });
    const found = await getRuntimeApplicationService().oa!.evidenceReviewServices.repository.findById(
      "ev:cross-1",
    );
    expect(found?.bindings.projectId).toBe("prj:other-project-b");

    setConversationProviderForTests(
      fakeFor(
        baseCandidate({ claimedEvidenceIds: ["ev:cross-1", "ev:cross-2"] }),
      ),
    );
    const result = await orchestrateAssistantSend({
      projectId: projectA,
      content: "Use other project Evidence.",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("C20 failed");
    expect(result.mw3?.disposition).toBe("candidate");
    expect(result.mw3?.cognitiveStop).toBe(false);
    expect(result.status).not.toBe("cognitive_stop");
  });

  it("C21 — unbound OA Evidence is rejected", async () => {
    const projectId = await createProject();
    await registerOaEvidence({
      evidenceId: "ev:unbound-1",
      source: "src:a",
      bindings: { cycleInstanceId: "cyc:unbound-mw3-c21" },
    });
    await registerOaEvidence({
      evidenceId: "ev:unbound-2",
      source: "src:b",
      bindings: { cycleInstanceId: "cyc:unbound-mw3-c21" },
    });
    const found = await getRuntimeApplicationService().oa!.evidenceReviewServices.repository.findById(
      "ev:unbound-1",
    );
    expect(found?.bindings.projectId).toBeUndefined();

    setConversationProviderForTests(
      fakeFor(
        baseCandidate({
          claimedEvidenceIds: ["ev:unbound-1", "ev:unbound-2"],
        }),
      ),
    );
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Use unbound Evidence.",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("C21 failed");
    expect(result.mw3?.disposition).toBe("candidate");
    expect(result.mw3?.cognitiveStop).toBe(false);
  });

  it("C22 — same-project valid OA Evidence promotes through repository mapping", async () => {
    const projectId = await createProject();
    const ev1 = await registerOaEvidence({
      evidenceId: "ev:same-1",
      source: "src:alpha",
      bindings: { projectId },
      freshness: "fresh",
    });
    const ev2 = await registerOaEvidence({
      evidenceId: "ev:same-2",
      source: "src:beta",
      bindings: { projectId },
      freshness: "fresh",
    });
    expect(mapOaEvidenceForProject(ev1, projectId)?.sourceId).toBe("src:alpha");
    expect(mapOaEvidenceForProject(ev2, projectId)?.sourceId).toBe("src:beta");

    const pointers = await resolveAvailableContradictionPointers({
      projectId,
      claimedEvidenceIds: ["ev:same-1", "ev:same-2"],
    });
    expect(pointers).toHaveLength(2);
    expect(pointers.map((p) => p.domain)).toEqual([projectId, projectId]);

    setConversationProviderForTests(
      fakeFor(
        baseCandidate({ claimedEvidenceIds: ["ev:same-1", "ev:same-2"] }),
      ),
    );
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Same-project Evidence-backed conflict.",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("C22 failed");
    expect(result.mw3?.disposition).toBe("evidence_backed");
    expect(result.mw3?.cognitiveStop).toBe(false);
    expect(result.mw3?.evidenceIds).toEqual(["ev:same-1", "ev:same-2"]);
  });

  it("C23 — same-project evidence_backed + governing invalidation → STOP", async () => {
    const projectId = await createProject();
    await registerOaEvidence({
      evidenceId: "ev:stop-1",
      source: "src:alpha",
      bindings: { projectId },
    });
    await registerOaEvidence({
      evidenceId: "ev:stop-2",
      source: "src:beta",
      bindings: { projectId },
    });
    setConversationProviderForTests(
      fakeFor(
        baseCandidate({
          claimedEvidenceIds: ["ev:stop-1", "ev:stop-2"],
          governingPremiseInvalidated: true,
          localImpactOnly: false,
        }),
      ),
    );
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Governing premise invalidated with proof.",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("C23 failed");
    expect(result.mw3?.disposition).toBe("evidence_backed");
    expect(result.mw3?.cognitiveStop).toBe(true);
    expect(result.status).toBe("cognitive_stop");
    expect(result.mw3?.progression).toBe("COGNITIVE_STOP");
    expect(result.mw3?.allowsSilentSuccess).toBe(false);
  });

  it("C24 — governing invalidation cannot STOP without Studio evidence_backed", async () => {
    const projectId = await createProject();
    await registerOaEvidence({
      evidenceId: "ev:one-src",
      source: "src:only",
      bindings: { projectId },
    });
    await registerOaEvidence({
      evidenceId: "ev:stale-src",
      source: "src:stale",
      bindings: { projectId },
      freshness: "stale",
    });
    await registerOaEvidence({
      evidenceId: "ev:foreign",
      source: "src:foreign",
      bindings: { projectId: "prj:not-current" },
    });
    setConversationProviderForTests(
      fakeFor(
        baseCandidate({
          claimedEvidenceIds: ["ev:one-src", "ev:stale-src", "ev:foreign"],
          governingPremiseInvalidated: true,
          localImpactOnly: true,
        }),
      ),
    );
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Self-trigger STOP with insufficient Evidence.",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("C24 failed");
    expect(result.mw3?.disposition).toBe("candidate");
    expect(result.mw3?.cognitiveStop).toBe(false);
    expect(result.status).not.toBe("cognitive_stop");
    expect(result.mw3?.progression).not.toBe("COGNITIVE_STOP");
  });
});
