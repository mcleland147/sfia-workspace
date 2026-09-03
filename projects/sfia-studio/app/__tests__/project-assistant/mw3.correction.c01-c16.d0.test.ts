/** @vitest-environment node */
/**
 * MW3 Critical Correction — C01–C09 / C13–C16 deterministic product path.
 * Fake provider + Fake Evidence catalog only. ZERO REAL OpenAI.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import {
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { setMw3AvailableEvidenceForTests } from "@/features/project-assistant/mw3AvailableEvidence";
import {
  decideCognitiveStop,
  disposeContradiction,
  deriveMw3ContradictionAssessment,
  MW3_STUDIO_REQUIRED_SOURCE_COUNT,
  type ContradictionEvidencePointer,
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

function knownLowCwp(): SemanticCognitiveWorkloadAssessment {
  return {
    ambiguity: "low",
    reasoningDepth: "low",
    sourceBreadth: "low",
    toolDependency: "low",
    contradictionRisk: "low",
    verificationNeed: "low",
  };
}

function mediumCwp(
  sourceBreadth: SemanticCognitiveWorkloadAssessment["sourceBreadth"] = "medium",
): SemanticCognitiveWorkloadAssessment {
  return {
    ambiguity: "medium",
    reasoningDepth: "high",
    sourceBreadth,
    toolDependency: "medium",
    contradictionRisk: "high",
    verificationNeed: "high",
  };
}

function intentJson(input: {
  cognitiveWorkload: SemanticCognitiveWorkloadAssessment | null;
  contradictionCandidate?: Mw3ContradictionCandidateSignal | null;
}): string {
  return JSON.stringify({
    intentClass: "informative",
    candidateCycleTypeId: null,
    signals: null,
    cognitiveWorkload: input.cognitiveWorkload,
    contradictionCandidate: input.contradictionCandidate ?? null,
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

function candidateConflict(
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
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      source: "system",
      timestamp: "2026-09-02T12:00:00.000Z",
      correlationId: `cor:${input.evidenceId}`,
    },
    version: 1,
    createdAt: "2026-09-02T12:00:00.000Z",
  };
}

function seedCatalog(projectId: string, evidence: Evidence[]): void {
  setMw3AvailableEvidenceForTests({ projectId, evidence });
}

function sameProjectEvidence(projectId: string): Evidence[] {
  return [
    catalogEvidence({
      evidenceId: "ev:1",
      source: "src:a",
      projectId,
    }),
    catalogEvidence({
      evidenceId: "ev:2",
      source: "src:b",
      projectId,
    }),
  ];
}

function controllerPointers(): ContradictionEvidencePointer[] {
  return [
    {
      evidenceId: "ev:1",
      sourceId: "src:a",
      domain: "governance",
      freshness: "fresh",
      attributable: true,
    },
    {
      evidenceId: "ev:2",
      sourceId: "src:b",
      domain: "governance",
      freshness: "fresh",
      attributable: true,
    },
  ];
}

describe("MW3 correction — public product path C01–C16 (subset)", () => {
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

  async function createProject(): Promise<string> {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw3-corr-"));
    tempDirs.push(dir);
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
    });
    const created = await runtime.createProject({
      name: "MW3 correction",
      objective: "Contradiction product path",
      context: "Deterministic Fake only",
      criticality: "STANDARD",
      constraints: ["LECTURE SEULE"],
      shortReference: "MW3C",
      idempotencyKey: `idem:mw3c-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("setup failed");
    return created.projectId;
  }

  function fakeFor(candidate: Mw3ContradictionCandidateSignal | null, cwp = mediumCwp()) {
    return new FakeConversationProvider({
      scripted: [
        intentJson({
          cognitiveWorkload: cwp,
          contradictionCandidate: candidate,
        }),
      ],
      toolScript: [
        {
          kind: "message",
          text: "[TEST/FAKE] Nora informative reply. AUCUNE EXÉCUTION.",
        },
      ],
    });
  }

  it("C01 — projectAssistantSendAction derives candidate without injected contradictionAssessment", async () => {
    const projectId = await createProject();
    const provider = fakeFor(candidateConflict());
    setConversationProviderForTests(provider);

    const result = await projectAssistantSendAction({
      projectId,
      content: "Réconcilie le conflit annoncé entre les sources.",
    });

    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("C01 failed");
    expect(result.f2?.turnKind).toBe("f1_informative");
    expect(result.mw3).toBeTruthy();
    expect(result.mw3?.disposition).toBe("candidate");
    expect(result.mw3?.cognitiveStop).toBe(false);
    expect(result.status).toBe("ok");
    expect(result.mw3?.insufficiencyReasons.length).toBeGreaterThan(0);
  });

  it("C02 — apparent conflict + insufficient proof stays candidate, no STOP", async () => {
    const projectId = await createProject();
    setConversationProviderForTests(fakeFor(candidateConflict()));
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Conflit possible sans preuve.",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("C02 failed");
    expect(result.mw3?.disposition).toBe("candidate");
    expect(result.mw3?.cognitiveStop).toBe(false);
    expect(result.status).not.toBe("cognitive_stop");
  });

  it("C03 — sufficient fresh attributable in-domain evidence → evidence_backed", async () => {
    const projectId = await createProject();
    seedCatalog(projectId, sameProjectEvidence(projectId));
    setConversationProviderForTests(
      fakeFor(
        candidateConflict({
          claimedEvidenceIds: ["ev:1", "ev:2"],
        }),
      ),
    );
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Conflit evidence-backed non gouvernant.",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("C03 failed");
    expect(result.mw3?.disposition).toBe("evidence_backed");
    expect(result.mw3?.cognitiveStop).toBe(false);
    expect(result.mw3?.evidenceIds).toEqual(["ev:1", "ev:2"]);
  });

  it("C04 — public sendAction: evidence_backed + governing invalidation → COGNITIVE_STOP", async () => {
    const projectId = await createProject();
    seedCatalog(projectId, sameProjectEvidence(projectId));
    setConversationProviderForTests(
      fakeFor(
        candidateConflict({
          claimedEvidenceIds: ["ev:1", "ev:2"],
          governingPremiseInvalidated: true,
          localImpactOnly: false,
        }),
      ),
    );
    const result = await projectAssistantSendAction({
      projectId,
      content: "La prémisse gouvernante est invalidée.",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("C04 failed");
    expect(result.status).toBe("cognitive_stop");
    expect(result.mw3?.disposition).toBe("evidence_backed");
    expect(result.mw3?.cognitiveStop).toBe(true);
    expect(result.mw3?.progression).toBe("COGNITIVE_STOP");
    expect(result.mw3?.allowsSilentSuccess).toBe(false);
  });

  it("C05 — evidence-backed non-governing continues honestly", async () => {
    const projectId = await createProject();
    seedCatalog(projectId, sameProjectEvidence(projectId));
    setConversationProviderForTests(
      fakeFor(
        candidateConflict({
          claimedEvidenceIds: ["ev:1", "ev:2"],
          governingPremiseInvalidated: false,
          localImpactOnly: true,
        }),
      ),
    );
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Contradiction locale evidence-backed.",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("C05 failed");
    expect(result.mw3?.disposition).toBe("evidence_backed");
    expect(result.mw3?.cognitiveStop).toBe(false);
    expect(result.mw3?.mayContinue).toBe(true);
    expect(result.status).toBe("ok");
  });

  it("C06 — technical/provider failure ≠ Cognitive STOP", async () => {
    const projectId = await createProject();
    setConversationProviderForTests(
      new FakeConversationProvider({ failOnCall: 1 }),
    );
    const result = await projectAssistantSendAction({
      projectId,
      content: "Déclenche une panne provider.",
    });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("C06 expected failure");
    expect(result.status).toBe("provider_error");
    expect(result.status).not.toBe("cognitive_stop");
  });

  it("C07 — hostile localImpactOnly + governing invalidation → STOP", async () => {
    const disposition = disposeContradiction({
      conflictPresent: true,
      requiredSourceCount: 2,
      requiredDomains: ["governance"],
      evidencePointers: controllerPointers(),
    });
    const stop = decideCognitiveStop({
      disposition,
      governingPremiseInvalidated: true,
      localImpactOnly: true,
      governingPremise: "FinOps freeze must hold",
    });
    expect(disposition.disposition).toBe("evidence_backed");
    expect(stop.cognitiveStop).toBe(true);
    expect(stop.outcome).toBe("COGNITIVE_STOP");

    const projectId = await createProject();
    seedCatalog(projectId, sameProjectEvidence(projectId));
    setConversationProviderForTests(
      fakeFor(
        candidateConflict({
          claimedEvidenceIds: ["ev:1", "ev:2"],
          governingPremiseInvalidated: true,
          localImpactOnly: true,
        }),
      ),
    );
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Flags contradictoires hostile.",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("C07 failed");
    expect(result.mw3?.cognitiveStop).toBe(true);
    expect(result.status).toBe("cognitive_stop");
  });

  it("C08 — model candidate with no valid evidence stays candidate", async () => {
    const projectId = await createProject();
    seedCatalog(projectId, []);
    setConversationProviderForTests(
      fakeFor(
        candidateConflict({
          claimedEvidenceIds: [],
          governingPremiseInvalidated: true,
        }),
      ),
    );
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Le modèle affirme un conflit.",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("C08 failed");
    expect(result.mw3?.disposition).toBe("candidate");
    expect(result.mw3?.cognitiveStop).toBe(false);
  });

  it("C09 — fabricated / stale / wrong-domain cannot promote evidence-backed", async () => {
    const projectId = await createProject();
    seedCatalog(projectId, [
      catalogEvidence({
        evidenceId: "ev:stale",
        source: "src:a",
        projectId,
        freshness: "stale",
      }),
      catalogEvidence({
        evidenceId: "ev:wrong",
        source: "src:b",
        projectId: "prj:other-project",
      }),
    ]);
    setConversationProviderForTests(
      fakeFor(
        candidateConflict({
          claimedEvidenceIds: ["ev:invented", "ev:stale", "ev:wrong"],
        }),
      ),
    );
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Pointeurs hostiles.",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("C09 failed");
    expect(result.mw3?.disposition).toBe("candidate");
    expect(result.mw3?.cognitiveStop).toBe(false);
  });

  it("C13 — no contradiction preserves normal product behavior", async () => {
    const projectId = await createProject();
    setConversationProviderForTests(fakeFor(null, knownLowCwp()));
    const result = await projectAssistantSendAction({
      projectId,
      content: "Quel est le nom du projet ?",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("C13 failed");
    expect(result.status).toBe("ok");
    expect(result.mw3 ?? null).toBeNull();
    expect(result.f2?.turnKind).toBe("f1_informative");
  });

  it("C14 — trustedSfiaProfile remains null / is not invented", async () => {
    const derived = deriveMw3ContradictionAssessment({
      candidate: candidateConflict(),
      availablePointers: [],
      projectId: "prj:mw3-corr-c14",
      trustedSfiaProfile: null,
    });
    expect(derived?.conflict.requiredSourceCount).toBe(
      MW3_STUDIO_REQUIRED_SOURCE_COUNT,
    );
    expect(derived?.conflict.freshnessMatters).toBe(true);
    expect(derived?.conflict.requiredDomains).toEqual(["prj:mw3-corr-c14"]);
    expect(derived).toBeTruthy();
    const disposition = disposeContradiction(derived!.conflict);
    expect(disposition.trustedSfiaProfile).toBeNull();

    const projectId = await createProject();
    setConversationProviderForTests(fakeFor(candidateConflict()));
    const result = await projectAssistantSendAction({
      projectId,
      content: "Conflit sans profil.",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("C14 failed");
    expect(result.mw3?.disposition).toBe("candidate");
    expect(JSON.stringify(result)).not.toMatch(/"trustedSfiaProfile":\s*"[A-Za-z]/);
  });

  it("C15 — strategy/reasoning variation cannot change truth disposition", async () => {
    const projectId = await createProject();
    seedCatalog(projectId, sameProjectEvidence(projectId));
    const candidate = candidateConflict({
      claimedEvidenceIds: ["ev:1", "ev:2"],
    });
    setConversationProviderForTests(fakeFor(candidate, mediumCwp("high")));
    const deep = await orchestrateAssistantSend({
      projectId,
      content: "Deep strategy conflict.",
    });
    setConversationProviderForTests(fakeFor(candidate, knownLowCwp()));
    const focused = await orchestrateAssistantSend({
      projectId,
      content: "Focused strategy conflict.",
    });
    expect(deep.ok && focused.ok).toBe(true);
    if (!deep.ok || !focused.ok) throw new Error("C15 failed");
    expect(deep.mw3?.disposition).toBe(focused.mw3?.disposition);
    expect(deep.mw3?.disposition).toBe("evidence_backed");
    expect(deep.mw3?.cognitiveStop).toBe(focused.mw3?.cognitiveStop);
  });

  it("C16 — low sourceBreadth cannot promote evidence-backed under required coverage", async () => {
    const projectId = await createProject();
    seedCatalog(projectId, [sameProjectEvidence(projectId)[0]!]);
    setConversationProviderForTests(
      fakeFor(
        candidateConflict({
          claimedEvidenceIds: ["ev:1"],
        }),
        mediumCwp("low"),
      ),
    );
    const result = await orchestrateAssistantSend({
      projectId,
      content: "Couverture source insuffisante.",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("C16 failed");
    expect(result.mw3?.disposition).toBe("candidate");
    expect(result.mw3?.insufficiencyReasons).toContain(
      "insufficient_source_coverage",
    );
  });
});
